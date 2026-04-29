---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: windows-server-2022-installation-and-configuration
url: "https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration"
duration_minutes: 100
duration: 1h 40m
level: Beginner
updated: 7/14/2025
learners: 88872
skills:
  - Windows System Administration
  - Windows Server
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFN4TEX5Pu9kA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1642101279693?e=2147483647&amp;v=beta&amp;t=s-MsYW1qIibq0qH2jfelTBjNF5gOhe0Z8U8i45ySH3o"
linkedin_topic: IT Help Desk
learning_paths:
  - '[[Getting Started with Windows Server 2022]]'
prev_courses:
  - '[[Windows Server 2022 Essential Training]]'
next_courses:
  - '[[Windows Server 2022- Install and Configure Active Directory]]'
path_nav: '[{"path":"Getting Started with Windows Server 2022","position":2,"total":4,"prev":"Windows Server 2022 Essential Training","next":"Windows Server 2022- Install and Configure Active Directory"}]'
path_count: 1
tags:
  - course
  - topic/it-help-desk
  - topic/network-and-system-administration
  - skill/windows-system-administration
  - skill/windows-server
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/IT%20Help%20Desk/Windows%20Server%202022-%20Installation%20and%20Configuration.md)

![Windows Server 2022: Installation and Configuration](https://media.licdn.com/dms/image/v2/C4E0DAQFN4TEX5Pu9kA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1642101279693?e=2147483647&amp;v=beta&amp;t=s-MsYW1qIibq0qH2jfelTBjNF5gOhe0Z8U8i45ySH3o)

# Windows Server 2022: Installation and Configuration

> Projects Install and configure Windows Server 2022 with either the full Desktop Experience or the Server Core. In this course, experienced consultant and trainer Ed Liberman demonstrates how to plan, install, configure, and clean up a new Windows 2022 server. Ed has spent over 20 years helping thousands of people start or advance their careers in IT. Learn how to use Windows Server to: Create and 

> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration) | 1h 40m | Beginner | 89K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction to Windows Server 2022: Installation and Configuration**](#introduction-to-windows-server-2022-installation-and-configuration) (2 videos)
  - Introduction to Windows Server 2022: Installation and configuration
  - Suggested knowledge
- [**1. Installing Windows Server 2022**](#1-installing-windows-server-2022) (4 videos)
  - Planning for Windows Server installation
  - Preparing for Windows Server Installation
  - Installation with Desktop Experience
  - Installation with Server Core
- [**2. Configuring Windows Server**](#2-configuring-windows-server) (6 videos)
  - Configuring a computer name with Server Manager
  - Configuring TCP/IP with Server Manager
  - Configuring a computer name with SConfig
  - Configuring TCP/IP with SConfig
  - Configruing a computer name with PowerShell
  - Configuring TCP/IP with PowerShell
- [**3. Configuring Storage**](#3-configuring-storage) (7 videos)
  - Creating a simple volume
  - Extending and shrinking a volume
  - Converting from basic to dynamic disks
  - Creating a spanned volume
  - Creating a striped volume
  - Creating a mirrored volume
  - Creating a RAID 5 Volume
- [**4. Configuring Server Roles and Features**](#4-configuring-server-roles-and-features) (4 videos)
  - Installing roles and features
  - Configuring a role
  - Installing roles on Server Core
  - Managing features on demand
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps

### Introduction to Windows Server 2022: Installation and Configuration

> [↑ Back to Table of Contents](#table-of-contents)

#### Introduction to Windows Server 2022: Installation and configuration
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/introduction-to-windows-server-2022-installation-and-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/introduction-to-windows-server-2022-installation-and-configuration?u=76281980&t=1)** - [Ed] Windows Server operating systems have been a major part of enterprise computing for a number of decades.
>
> **[0:06](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/introduction-to-windows-server-2022-installation-and-configuration?u=76281980&t=6)** And today we now have Windows Server 2022.
>
> **[0:11](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/introduction-to-windows-server-2022-installation-and-configuration?u=76281980&t=11)** In this course, we will explore a bit of the planning process as well as the necessary steps to get a new Windows Server installed and productive in your environment.
>
> **[0:21](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/introduction-to-windows-server-2022-installation-and-configuration?u=76281980&t=21)** We'll use some legacy administration tools on the desktop, as well as Windows PowerShell to configure a fresh installation of Windows Server 2022 with an identity, network address, storage and the necessary roles to serve your network needs.
>
> **[0:38](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/introduction-to-windows-server-2022-installation-and-configuration?u=76281980&t=38)** My name is Ed Liberman and I've been teaching people about Microsoft Windows Server products since the 1990s.
>
> **[0:44](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/introduction-to-windows-server-2022-installation-and-configuration?u=76281980&t=44)** So please join me in my LinkedIn Learning course on installing and configuring Windows Server 2022.

> [!info]- Semantic Content
>
> **Tools:** powershell (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [ed] (1)

#### Suggested knowledge
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/suggested-knowledge?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/suggested-knowledge?u=76281980&t=1)** - [Instructor] Before watching this course, there are just a few very basic things I'd like you to know.
>
> **[0:06](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/suggested-knowledge?u=76281980&t=6)** First of all, when it comes to the prerequisites, I have great news for you.
>
> **[0:11](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/suggested-knowledge?u=76281980&t=11)** There are no prerequisites for watching this course.
>
> **[0:15](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/suggested-knowledge?u=76281980&t=15)** It is designed to be an entry level course for anyone who is looking to learn the basics of Windows Server 2022.
>
> **[0:24](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/suggested-knowledge?u=76281980&t=24)** I will say that any kind of general knowledge of navigating Windows, not even Windows Server, but just Windows in general, sure could be helpful, but is not an absolute prerequisite.
>
> **[0:37](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/suggested-knowledge?u=76281980&t=37)** Now there is a little bit of a lab setup that I have here.
>
> **[0:41](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/suggested-knowledge?u=76281980&t=41)** In this lab setup, I am going to be creating two virtual servers and I will be doing this on a single machines, right?
>
> **[0:51](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/suggested-knowledge?u=76281980&t=51)** So I have a single computer here that is running Windows Server.
>
> **[0:55](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/suggested-knowledge?u=76281980&t=55)** I believe it's actually Windows Server 2016 or 2019 with Hyper V.
>
> **[1:00](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/suggested-knowledge?u=76281980&t=60)** And then in Hyper V, I'm going to create two virtual machines that are going to act as my virtual servers.
>
> **[1:07](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/suggested-knowledge?u=76281980&t=67)** I will show you a little bit about how you can actually do that if you want to follow along.
>
> **[1:14](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/suggested-knowledge?u=76281980&t=74)** And I just want you to know that one of those servers is going to have the full desktop experience.
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/suggested-knowledge?u=76281980&t=78)** And the other one will have a very basic server core installation of Windows Server 2022.
>
> **[1:24](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/suggested-knowledge?u=76281980&t=84)** And this way you'll be able to see both interfaces that you may experience when it comes to Windows Server 2022.
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/suggested-knowledge?u=76281980&t=93)** But I will emphasize that if you want to follow along, all you really need is a computer that has the ability to run some form of virtualization and has the minimum hardware requirements to support the two virtual servers.
>
> **[1:51](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/suggested-knowledge?u=76281980&t=111)** And even if you don't have that available, even just watching what I do should be good enough to get you through at least the first time through the course.
>
> **[2:00](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/suggested-knowledge?u=76281980&t=120)** And that is pretty much all you need to know in order to go ahead and get started.

> [!info]- Semantic Content
>
> **Prerequisites:** setup (2), prerequisite (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)


### 1. Installing Windows Server 2022

> [↑ Back to Table of Contents](#table-of-contents)

#### Planning for Windows Server installation
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=0)** - [Instructor] When it comes to planning for Windows Server installation, it's important that you know what versions are available and what those versions provide, and what sort of hardware requirements you may have, as far as the hardware resources that are necessary to support the Windows Server version that you're looking to install.
>
> **[0:21](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=21)** So what I want to do here, first of all, if you've watched any of my recent courses, you know that I have tried more and more to move away from a Standard, boring slide presentations where bullets come up on the screen.
>
> **[0:37](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=37)** And I like to take it to the actual URL from Microsoft, where they share this information.
>
> **[0:43](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=43)** And the reason is because things are changing so quickly in today's world, I want to make sure that if this video is suddenly out of date, that you're aware of it.
>
> **[0:53](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=53)** Okay so feel free to copy down the URL that's at the top of the screen.
>
> **[0:59](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=59)** It's an actual document from Microsoft.
>
> **[1:02](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=62)** I got here by literally just going to a search engine and putting in Windows Server 2022 versions.
>
> **[1:08](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=68)** All right, and then you'll notice here we have the editions and the feature comparison.
>
> **[1:12](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=72)** In this article, you'll notice that they'll show you everything that they're currently supporting, at least as of right now, which is Server 2022, 2019, 2016.
>
> **[1:20](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=80)** You can click on any of them to see all the different versions available.
>
> **[1:25](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=85)** But one thing that you're going to find that's going to be very similar with all three of them is they have both a Standard and a Datacenter version.
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=92)** One thing that is different with Server 2022 is that we now have a Datacenter Azure edition, okay?
>
> **[1:42](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=102)** Because everything in the world of Microsoft is pushing in the direction of Azure.
>
> **[1:45](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=105)** But for right now, I want to focus on the Standard and the Datacenter additions.
>
> **[1:49](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=109)** I could go down through this list, and we can look at all the yeses and all the nos.
>
> **[1:54](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=114)** And there's going to be very, very little, again we're not even worried about this third column.
>
> **[1:59](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=119)** We're only looking at these two columns.
>
> **[2:00](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=120)** You'll notice that they're going to be almost completely identical.
>
> **[2:04](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=124)** I believe in this first section, there's one difference here on software-defined networking.
>
> **[2:10](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=130)** You need Datacenter edition for that.
>
> **[2:12](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=132)** Storage Spaces Direct, you need Datacenter edition for that.
>
> **[2:17](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=137)** The one, main difference that you're really going to get with Datacenter versus Standard is when I scroll down here through the locks and the limits, is right down here where it says can be used as virtualization guest.
>
> **[2:31](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=151)** On the Standard edition, you can have two virtual machines plus one Hyper-V host per license.
>
> **[2:39](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=159)** Whereas with Datacenter, you can have unlimited virtual machines plus one Hyper-V host per license.
>
> **[2:47](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=167)** That is one of the absolute main differences that you should know between Standard and Datacenter additions.
>
> **[2:53](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=173)** Okay? So it really has to do with scalability.
>
> **[2:55](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=175)** All right. And same thing.
>
> **[2:57](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=177)** I could keep scrolling all the way down.
>
> **[2:58](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=178)** And you're going to find so few differences between the two versions.
>
> **[3:03](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=183)** They're darn near identical.
>
> **[3:05](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=185)** That is the when looking at the comparisons of whether you want to have Standard or Datacenter edition.
>
> **[3:11](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=191)** Now over on the left, you'll notice there's also an option here for hardware requirements.
>
> **[3:16](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=196)** So I'm going to click on that.
>
> **[3:17](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=197)** It'll take us to that particular article on the hardware requirements for Windows Server 2022.
>
> **[3:23](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=203)** And really, you'll notice it just says Windows Server because it hasn't really changed very much ever since, pretty much all the different versions that they're currently supporting.
>
> **[3:33](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=213)** So I'm going to go ahead and I'm going to scroll down just to show you that it doesn't actually need a whole lot of power, which is pretty cool, right?
>
> **[3:40](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=220)** As we were growing, if you've been doing this for a while, like I have, you know that in the early days, it was like every new version, you had to go out and get some, the latest and greatest hardware.
>
> **[3:50](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=230)** I mean, you just absolutely had to.
>
> **[3:52](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=232)** Whereas now, it's not nearly as hardware intensive here.
>
> **[3:56](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=236)** So you need a 1.4 gigahertz, 64-bit processor.
>
> **[4:00](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=240)** You need half a gig of RAM.
>
> **[4:02](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=242)** Although, you'll notice it does say you need two gigs if you're going to have the full Desktop Experience.
>
> **[4:08](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=248)** Okay, we'll see the difference between that and the Server Core version of the installation.
>
> **[4:14](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=254)** And as far as how much disc space, 32-gig, okay.
>
> **[4:19](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=259)** Nothing, very, very little.
>
> **[4:21](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=261)** You have to have a network adapter and then other basics.
>
> **[4:24](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=264)** You need a DVD drive if you're going to install it that way.
>
> **[4:26](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=266)** And you need a keyboard, mouse, internet access, things like that.
>
> **[4:30](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=270)** Okay. So those are your requirements.
>
> **[4:32](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=272)** But I do want to emphasize while those may be the actual, minimum hardware requirements, I want to emphasize the word minimum.
>
> **[4:40](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=280)** As in, you don't want to be operating with just the minimum.
>
> **[4:45](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=285)** Now, the reality is, is that even the cheapest of servers that are out there, you're going to have these minimum requirements with no problem.
>
> **[4:55](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=295)** Where these requirements matter is when you are installing in a virtualized environment because you're going to want to have, the physical server you have, that one box, well, you may want to host, let's say a dozen virtual machines that all have Windows Server installed.
>
> **[5:13](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=313)** Well then guess what?
>
> **[5:14](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=314)** Now you've got to take these minimum requirements and you have to multiply them by 12 for each of those 12 machines.
>
> **[5:21](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=321)** And then you probably have to double it on top of that because you don't want the machine to run slow.
>
> **[5:26](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=326)** And then you have to have a little bit extra on top of that because you have the host machine, et cetera, et cetera, you see where I'm going with this.
>
> **[5:33](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/planning-for-windows-server-installation?u=76281980&t=333)** So, as I said, when planning for your Windows Server installation, know what version you want to get and know what the minimum hardware requirements are.

> [!info]- Semantic Content
>
> **Env Vars:** url (2), ram (1), dvd (1)
> **UI Navigation:** click on (2), scroll down (2)
> **CLI Commands:** find (2), make (1)
> **Code Keywords:** while, (1), let (1), this. (1)
> **Prerequisites:** install (2)
> **Versions:** 1.4 (1)
> **Speakers:** - [instructor] (1)

#### Preparing for Windows Server Installation
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980&t=1)** - [Instructor] Before you perform the installation of Windows Server 2022, you have to first make sure that the computer you're installing it on is ready for it.
>
> **[0:13](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980&t=13)** So now, if you have a physical computer, then there are certain things that you need to do, like setting up the boot order and making sure that you have the appropriate hardware, or you can set up a virtual machine, and you pretty much have to do the same thing, but it's all done virtually.
>
> **[0:30](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980&t=30)** So I want to show you here, how to do this with a virtual machine, here in Hyper-V.
>
> **[0:36](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980&t=36)** Okay, you'll notice I already have a few virtual machines here, you can pretty much ignore these, the only one that will actually be used in this course is I do have this Windows Server 2022 Server Core, that is something I've already set up for later on, but for right now, let's go ahead and let's create another virtual machine so you can see everything from scratch in case you want to follow along.
>
> **[0:57](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980&t=57)** So I'm going to right click on this, where it says, "Recording PC," that's actually the name of my physical computer that Hyper-V is on.
>
> **[1:04](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980&t=64)** And I'm going to select new virtual machine.
>
> **[1:07](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980&t=67)** There's a, before you begin screen, I'm going to go through these fairly quickly, because this is not a course designed to give you an in-depth explanation of how Hyper-V works, so I'm going to click next.
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980&t=77)** I'm going to call this Windows Server 2022 Desk Top Experience.
>
> **[1:25](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980&t=85)** Next, I'll make it generation two, next, I will go ahead and assign some memory of four gig, next, assign an ethernet card, next, and a virtual hard disk.
>
> **[1:39](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980&t=99)** You know what? I'm going to go ahead and make it a nice round 200 gig.
>
> **[1:43](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980&t=103)** Click on next, and I'll choose to install the operating system later, we're going to do that in another video, next and finish.
>
> **[1:50](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980&t=110)** Now, what I've done up to this point is I've simply created another virtual machine.
>
> **[1:56](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980&t=116)** So it's like I went out and bought the computer, right?
>
> **[1:58](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980&t=118)** And here it is Windows Server 2022 Desktop Experience.
>
> **[2:01](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980&t=121)** But now, let's go ahead and get this prepared for the installation of Windows Server, just the same as we would with a physical computer.
>
> **[2:09](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980&t=129)** Now here, I'm going to do that by right clicking on it, and choosing settings.
>
> **[2:13](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980&t=133)** So in the settings, the first thing that you would need to do, is go ahead and if you want to install off of a DVD or in this case, it would be a DVD image, you would have to go ahead and set the boot order to boot from a DVD.
>
> **[2:27](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980&t=147)** But I want you to see something.
>
> **[2:29](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980&t=149)** When I click on boot or firmware here, you'll see here my options are to boot from a network adapter or a hard drive.
>
> **[2:34](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980&t=154)** I don't have a DVD drive.
>
> **[2:36](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980&t=156)** So that means I need to jump down here to where it says, "SCSI controller," and here you see they have the option of a DVD drive and click on add.
>
> **[2:45](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980&t=165)** So now I've added a DVD drive to this particular machine, and, why don't we go ahead and actually put in the image file for a correct installation DVD.
>
> **[2:55](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980&t=175)** So I'll click on image file, and then I'm going to browse on my computer to where I know that I happen to have the windows server 2022 evaluation DVD.
>
> **[3:07](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980&t=187)** At this point, I'm going to click apply and by clicking apply, it has now accepted this addition of this DVD drive and with the DVD in it, so if I go back to firmware, now I can set the boot order.
>
> **[3:20](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980&t=200)** Right now it's saying network adapter, then hard drive, then DVD drive, that's actually backwards to what I want, so I'm going to take the DVD drive and move that up to the top, I'm going to take the network adapter and move it down to the bottom, and this is now the boot order I'd like to have on this machine.
>
> **[3:35](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980&t=215)** Same thing you would do on a physical machine in the bios start-up settings.
>
> **[3:39](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980&t=219)** Now, continuing along, the memory, I do want to point out that you can configure how much memory this would be like putting in RAM into the physical machine, in this case, you're going to do it virtually all right?
>
> **[3:53](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980&t=233)** So I've virtually put in four gig of RAM, so far, so good, that's been good enough for my environment, I'm going to go down to here to processor, how many virtual processors do I want to have?
>
> **[4:03](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980&t=243)** Is this like a, you know, a just a single processor machine or a dual core machine, or a quad core machine?
>
> **[4:09](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980&t=249)** I'm going to go ahead and I'm going to make it four virtual processors.
>
> **[4:12](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980&t=252)** Again, my environment here with this machine, I know this tends to work for me, your environment it depends on what resources you have available, okay?
>
> **[4:22](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980&t=262)** So, I'm not telling you, you should sit everything exactly how I do, I'm just letting you know, these are the things that have to be configured.
>
> **[4:29](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980&t=269)** If this was a physical machine, you would actually buy a computer that has the right memory and processing power.
>
> **[4:35](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980&t=275)** Now under SCSI controller, besides the DVD drive that we added, there already as a hard drive that was added as part of the original creation of the virtual machine.
>
> **[4:45](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980&t=285)** If I needed multiple hard drives, I could go ahead and I could add additional hard drives here as well.
>
> **[4:52](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980&t=292)** I'm not going to do that right now, although I do want to give you a little hint that I am going to do this later in preparation for a section of this course where we do configure storage, and I show you how to create all sorts of different volumes.
>
> **[5:05](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980&t=305)** Same thing with the network adapter, right now, we are configured with the single ethernet connection, but this is also where I could go ahead and add an additional network card, and really by the way, where that is done is under add hardware.
>
> **[5:21](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980&t=321)** Okay, that's where I could add an additional network adapter, if I wanted to configure a second network adapter, which again, I am going to do later on in the course, just wanted to show you that's where this is.
>
> **[5:31](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/preparing-for-windows-server-installation?u=76281980&t=331)** Beyond that you can mostly ignore most of this management stuff at the bottom, for my machine here I do actually make sure to check the box for guest services just has to do with the cursor moving in and out and stuff like that, but if I click apply and then, okay, I have now configured a computer to be ready for the installation of Windows Server 2022.

> [!info]- Semantic Content
>
> **Env Vars:** dvd (13), scsi (2), ram (2)
> **Prerequisites:** configure (3), set up (2), install (2), before you begin (1)
> **Code Keywords:** let (3), case, (2), this, (1)
> **CLI Commands:** make (5)
> **UI Navigation:** click on (5)
> **Cross-References:** go back to (1)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)

#### Installation with Desktop Experience
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=1)** - [Instructor] So now let's go ahead and let's see how to perform the actual installation of Windows Server 2022 with the Desktop Experience.
>
> **[0:11](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=11)** So I have my virtual machine that I created for this, and I'm going to double click on it, just to open it up.
>
> **[0:17](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=17)** I am going to tell you before I go any further, because I am using a virtual machine window in my recording space here, there might be some jumpiness and moving around, but I promise you I'm going to make this full screen as often as I can.
>
> **[0:29](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=29)** So I'm going to go ahead and I'm going to hit the green button to turn on the computer, right?
>
> **[0:31](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=31)** This is just the equivalent.
>
> **[0:33](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=33)** If this was a physical machine, just turn on the computer.
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=35)** And when I do, it's going to attempt to boot off of the DVD first, and you have a very short window that it'll say, press any key to boot.
>
> **[0:44](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=44)** And so I'm going to do that very quickly.
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=45)** You won't see me do it.
>
> **[0:46](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=46)** It's something I'm going to do on the keyboard.
>
> **[0:48](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=48)** All right, so I'm going to start the computer and press any key to boot from CD or DVD.
>
> **[0:53](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=53)** I did that and now I'm going to go ahead and I'm going to click on view full screen, so hopefully we can get a full view of what's going on here.
>
> **[1:04](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=64)** All right, so here we have the initial screen where we have to choose what language, timing, currency format, and what keyboard or input method.
>
> **[1:13](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=73)** Now, since I am in the United States and I do speak English, I'm going to take all the defaults, but this is where you would change it if necessary.
>
> **[1:22](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=82)** So I'm going to go ahead and click on next.
>
> **[1:24](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=84)** And now I have the choice of either install now, now it looks like that's the only choice, right?
>
> **[1:29](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=89)** One box right in the middle.
>
> **[1:31](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=91)** But now in the lower left hand corner, I do want to show you, there is an option here for repair your computer.
>
> **[1:36](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=96)** All right, so this is something that you could use if you end up having a machine that was having difficulty, you can help troubleshoot the machine if you're having trouble booting into it, or if it's giving you difficulty after the fact.
>
> **[1:48](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=108)** All right, but I'm going to click on install now and depending on what version you're using and what DVD you actually have your hands on, whether it's evaluation or whether it's a retail copy or whether it is a volume licensing situation, you may get slightly different choices here.
>
> **[2:12](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=132)** For instance, you may be prompted to put in a license key.
>
> **[2:17](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=137)** Okay, and that screen does not come up here because I'm using the evaluation copy.
>
> **[2:20](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=140)** And once you do the license key, then from there, depending on what key you put in, it may already know what edition you were looking to do, okay?
>
> **[2:30](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=150)** In this case, because it's the evaluation copy, I have the choice of either Standard or Datacenter.
>
> **[2:36](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=156)** And then each one of those has the choice of the Desktop Experience or not, okay?
>
> **[2:40](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=160)** And the, or not would be the server core.
>
> **[2:43](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=163)** All right, so we're going to go ahead and I'm going to just select the standard evaluation with the full Desktop Experience, 'cause that's what we're doing here and click on next.
>
> **[2:52](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=172)** Now you have to read through and accept the license agreement, okay?
>
> **[2:57](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=177)** So here's all the license terms and feel free to read through that at your leisure.
>
> **[3:03](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=183)** And most importantly, you have to click the box saying, yep, I accept these terms, click on next.
>
> **[3:07](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=187)** And now you need to choose whether this is going to be an upgrade of a previous Windows Server operating system, or whether this'll be a, it says custom, but really what it kind of should almost say is new.
>
> **[3:20](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=200)** A new Windows Server installation.
>
> **[3:23](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=203)** And because this is a blank brand new virtual machine, I'm going to have to do a custom new installation.
>
> **[3:28](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=208)** All right. So we'll click on that.
>
> **[3:29](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=209)** And now I needed to decide where I want to install Windows Server, okay?
>
> **[3:34](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=214)** So I'm going to go ahead and I only have the one drive, right, which is 200 gig that we created.
>
> **[3:40](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=220)** Now, if I wanted to, I could go ahead and I could click on new to go ahead and create different partitioning or volumes within this hard drive space, but I'm going to just take the entire space.
>
> **[3:52](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=232)** I'm actually going to demonstrate some stuff we'll do at the space later on, but I'm going to take the default just as it is, click on next once again, and we are on our way.
>
> **[4:01](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=241)** This point, it is going to go through a series of processes of copying stuff over and installing everything needed and will also involve a reboot or two.
>
> **[4:13](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=253)** And at that point, well, we should be pretty much ready to rock and roll with this Desktop Experience version of Windows Server 2022.
>
> **[4:24](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=264)** Now I will tell you that this process does take some time, and so through the power of editing here, I don't want you to have to sit here and stare at it, so I'm just going to go ahead and I'm going to pick things back up with you once that whole process has completed.
>
> **[4:45](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=285)** Okay, we have gone through all the steps and the very last thing we have to do here is we have to assign a password for the built in administrator account.
>
> **[4:58](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=298)** So I'm going to go ahead and put in my super secure password here.
>
> **[5:02](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=302)** And I'll do that twice. Make sure it matches.
>
> **[5:05](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=305)** Hopefully it does. And I'll click finish.
>
> **[5:09](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-desktop-experience?u=76281980&t=309)** And now we get to a login screen where we can go ahead and, I know this seems a little silly, you got to put in the password that you just set up a moment ago, but I can go ahead and I can click to log in and I will be in Windows Server 2022 with the full Desktop Experience.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (9), select the (1)
> **Code Keywords:** let (2), this, (1), case, (1), new. (1), super (1)
> **Prerequisites:** install (3), set up (1)
> **CLI Commands:** make (2), cd (1)
> **Env Vars:** dvd (3)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** for instance (1)
> **Warnings:** troubleshoot (1)

#### Installation with Server Core
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-server-core?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-server-core?u=76281980&t=1)** - [Instructor] So now let's take just a quick look at the process for installing just the Server Core version, the non-Desktop Experience version.
>
> **[0:09](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-server-core?u=76281980&t=9)** You're going to see this is going to be pretty much identical with one selection being made differently, but, at the very end, you'll get to see how it will be a slightly different look to it.
>
> **[0:20](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-server-core?u=76281980&t=20)** So I'm going to go into my Virtual Machine I set up for Server Core, and then I'm going to go ahead and turn on the power to that machine and press any key to boot off of the DVD.
>
> **[0:31](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-server-core?u=76281980&t=31)** And we'll convert this to full screen so that you should be able to see everything.
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-server-core?u=76281980&t=35)** All right, so I'm going to go through this pretty quickly 'cause it's pretty much the same thing.
>
> **[0:40](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-server-core?u=76281980&t=40)** We have English US, Next, Install now.
>
> **[0:44](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-server-core?u=76281980&t=44)** This is actually 100% identical because those are the same choices that I had before.
>
> **[0:49](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-server-core?u=76281980&t=49)** And, this time around, instead of taking the Standard Edition with the Desktop Experience, I'm going to do the top one, with just Standard Evaluation without the Desktop Experience.
>
> **[0:59](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-server-core?u=76281980&t=59)** Next, I still have the license I have to agree to, so I'll check that box, click Next.
>
> **[1:03](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-server-core?u=76281980&t=63)** I have to choose if it's an upgrade, or a custom, or a new installation.
>
> **[1:06](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-server-core?u=76281980&t=66)** This is a new installation, so I'll click that.
>
> **[1:09](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-server-core?u=76281980&t=69)** I have to choose where I want to install it.
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-server-core?u=76281980&t=70)** I'm going to install it on the one drive that I have, Next.
>
> **[1:14](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-server-core?u=76281980&t=74)** And, look at that, we're on our way.
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-server-core?u=76281980&t=77)** You know, one of the main reasons for actually showing you this is to show you that this really isn't much, if at all, different than, you know, whether you're installing the full Desktop Experience or the Server Core edition, the process is basically the same, it's the management after the fact that's going to change.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-server-core?u=76281980&t=94)** All right, so I'm going to go ahead and I'm going to take us to the end of this installation, which actually, by the way, does go a little bit faster 'cause there's not as much to install.
>
> **[1:43](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-server-core?u=76281980&t=103)** I'm going to take us to the end of this, just so you can see the slight differences without the Desktop Experience.
>
> **[1:52](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-server-core?u=76281980&t=112)** Okay, it has completed the process, and, as you can see, this is where there is a slight difference.
>
> **[1:59](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-server-core?u=76281980&t=119)** I will emphasize, again, it probably took, on my machine, and it's, of course, going to vary depending on the hardware that you have and everything else, but I want to say it finished installing like five minutes quicker.
>
> **[2:10](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-server-core?u=76281980&t=130)** But the other difference here is you'll notice that I don't have a graphical user experience.
>
> **[2:16](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-server-core?u=76281980&t=136)** Yes, there is a cursor here, but it really isn't doing anything, I can't do anything, I have to do everything with the keyboard and the arrows.
>
> **[2:25](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-server-core?u=76281980&t=145)** Okay, and you'll see here it says the user's password, administrator user's password, must be changed before signing in, so I'm going to click OK, and I'll hit enter, and then type in the new password and confirm it, and hit enter.
>
> **[2:40](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-server-core?u=76281980&t=160)** It says it's changing the password, says your password has been changed, I click OK.
>
> **[2:45](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-server-core?u=76281980&t=165)** And, you know, this is kind of the equivalent of what we saw before where it rebooted and then took us into a login screen.
>
> **[2:53](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-server-core?u=76281980&t=173)** And here, well, it's basically done the same thing except for that it's not going to take us to a login screen 'cause there's no Desktop Experience, it's just going to take us into a command shell window.
>
> **[3:06](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installation-with-server-core?u=76281980&t=186)** Okay, so this is all we're going to get with the Server Core edition of Windows Server 2022.

> [!info]- Semantic Content
>
> **Prerequisites:** install (4), set up (1)
> **Code Keywords:** let (1), this, (1), else, (1)
> **Definitions:** is a  (3)
> **Env Vars:** dvd (1)
> **Speakers:** - [instructor] (1)


### 2. Configuring Windows Server

> [↑ Back to Table of Contents](#table-of-contents)

#### Configuring a computer name with Server Manager
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=1)** - [Instructor] After you have completed the installation of Windows Server 2022, there are a couple of primary configuration steps that you have to go through in order to truly have the server ready to be able to function in your environment.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=18)** And so, we're going to take a look at how to do that here.
>
> **[0:22](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=22)** So what we're looking at right now is the Windows Server 2022 with Desktop Experience version.
>
> **[0:30](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=30)** And that's why, and I have done nothing.
>
> **[0:33](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=33)** Right where we left off before, the system was booting up into this Desktop Experience.
>
> **[0:39](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=39)** And the first thing that happens is it opens into this Server Manager.
>
> **[0:43](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=43)** Now there is a message that comes up.
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=45)** It says, try managing servers with the Windows Admin Center.
>
> **[0:49](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=49)** And there is a link if you want to get information about that admin center, but we're not going to deal with that right now.
>
> **[0:57](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=57)** The admin center is covered in other courses in more detail.
>
> **[1:01](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=61)** So I'm going to say, don't bother showing me this message again and just close out of there.
>
> **[1:06](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=66)** Now, here we are looking at the Server Manager.
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=70)** One other thing I do want to point out is if you see any of this red, like in this particular case, it's saying services, this is very common on a new installation, especially when you first boot up.
>
> **[1:22](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=82)** Sometimes, I think, when I first booted it, I think it was six services, and they were just services that were delayed start.
>
> **[1:29](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=89)** If I click on it here, what I will see is I will see that the Microsoft Edge Update Service, it's stopped.
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=97)** And I'm not sure why it hasn't started yet, but I just want you to know that it is a delayed start.
>
> **[1:42](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=102)** Not something you have to worry about.
>
> **[1:45](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=105)** What we do want to focus on is up at the top.
>
> **[1:48](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=108)** Step number one says configure this local server.
>
> **[1:52](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=112)** So I'm going to click on Configure this local server, but there are two primary configuration settings that pretty much are all but mandatory that you have to go through.
>
> **[2:03](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=123)** And so, I'm going to show you the first of those, and that is configuring the computer name.
>
> **[2:07](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=127)** You want to name your server.
>
> **[2:09](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=129)** You'll notice that right here, it says computer name, and it's just a random set of just numbers and letters.
>
> **[2:17](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=137)** So if I want to change the computer name, I'm just simply going to click on it, and it'll take me into my system properties, where again, I can see what my computer name is.
>
> **[2:26](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=146)** And I'm going to click on Change.
>
> **[2:28](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=148)** This takes me to a window where I can go ahead and change my computer name.
>
> **[2:32](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=152)** So I'm just going to go ahead and call this SERVER1, just to give it a name.
>
> **[2:39](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=159)** Now, you'll also notice in this window, if we were going to go ahead and join a domain.
>
> **[2:44](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=164)** So if this was an existing environment where we already had a domain set up and we wanted to join that domain, we could also do that in the bottom half of the window.
>
> **[2:52](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=172)** And we can do that in one step.
>
> **[2:54](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=174)** We don't have to do this as separate steps, but right now, we don't have a domain environment.
>
> **[2:58](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=178)** I just have fresh installations of Windows Server.
>
> **[3:01](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=181)** So we're going to say the name is now SERVER1, click OK.
>
> **[3:06](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=186)** And it says, I must restart to apply these changes.
>
> **[3:09](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=189)** So I will click OK once again.
>
> **[3:11](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=191)** And then I'm going to close this window.
>
> **[3:13](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=193)** And when I do, it's again, going to tell me, I must restart to apply these changes.
>
> **[3:17](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=197)** So I'm going to click Restart Now.
>
> **[3:19](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=199)** And then what I'm going to do is, this will take a few moments to reboot, so I'm going to go ahead and through the power of editing, I'm going to skip ahead to where we've rebooted and logged back in to see what has changed.
>
> **[3:31](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=211)** So I'm going to click Restart Now.
>
> **[3:34](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=214)** Okay, the system has rebooted.
>
> **[3:35](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=215)** So I'm going to log back in.
>
> **[3:39](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=219)** You'll see that the Server Manager launches again.
>
> **[3:42](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=222)** And as I mentioned before, you'll see here that, see it's six services actually waiting to start when you first boot up the machine.
>
> **[3:48](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=228)** Over time, those will go away.
>
> **[3:50](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=230)** But I'm going to go back to configure this local server, and you will see that I now have successfully assigned a computer name, a usable computer name, to this server.
>
> **[4:00](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-server-manager?u=76281980&t=240)** And it's called SERVER1.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4)
> **Prerequisites:** configure (3), set up (1)
> **Env Vars:** server1 (3)
> **Definitions:** is a  (3)
> **Code Keywords:** function (1), case, (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Configuring TCP/IP with Server Manager
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-server-manager?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-server-manager?u=76281980&t=1)** - [Instructor] The second item that you need to configure after you've configured the name for your server is you have to configure its networking, or you have to give it an appropriate IP address, so it can be located on the network, all right?
>
> **[0:13](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-server-manager?u=76281980&t=13)** So again, we are in the Server Manager.
>
> **[0:16](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-server-manager?u=76281980&t=16)** We're looking at the local server settings.
>
> **[0:17](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-server-manager?u=76281980&t=17)** And you'll see here, there's a section for ethernet.
>
> **[0:20](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-server-manager?u=76281980&t=20)** And so it says IPv4 address assigned by DHCP, which may be what you want it to do, although typically with a server, that would not necessarily be the case.
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-server-manager?u=76281980&t=32)** Again, I don't want to go into too much detail.
>
> **[0:34](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-server-manager?u=76281980&t=34)** In other courses that we have, you can learn about DHCP and actually doing reservations for servers.
>
> **[0:42](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-server-manager?u=76281980&t=42)** But typically, your servers will have a static IP address.
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-server-manager?u=76281980&t=45)** So what we're going to do is I'm going to go ahead, and I'm going to click on that link.
>
> **[0:49](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-server-manager?u=76281980&t=49)** And that'll take me into my network connections.
>
> **[0:52](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-server-manager?u=76281980&t=52)** I'm then going to right-click on my ethernet connection here and go to its properties.
>
> **[0:57](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-server-manager?u=76281980&t=57)** And then I'm going to highlight on Internet Protocol Version 4.
>
> **[1:00](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-server-manager?u=76281980&t=60)** And I want to emphasize before clicking on anything, don't click the checkbox.
>
> **[1:04](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-server-manager?u=76281980&t=64)** That'll make the check mark go away.
>
> **[1:06](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-server-manager?u=76281980&t=66)** You want to click on the actual name to highlight it and then click on Properties.
>
> **[1:11](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-server-manager?u=76281980&t=71)** And you'll see here that we are obtaining our IP address automatically, and we want to change that.
>
> **[1:16](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-server-manager?u=76281980&t=76)** Okay, we want to change that to Use the following IP address, all right?
>
> **[1:20](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-server-manager?u=76281980&t=80)** And so I'm going to go ahead and put in 192.168.1, and then I need to pick, that's the network that I'm on here in my office.
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-server-manager?u=76281980&t=92)** And then I'm just going to go ahead, and I'm going to pick an IP address that is not in use, so I'm going to put 241, just in this particular case.
>
> **[1:40](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-server-manager?u=76281980&t=100)** Then from there, you can assign the subnet mask, which I'm going to leave it as triple 255.0, and then give a default gateway.
>
> **[1:49](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-server-manager?u=76281980&t=109)** And I'm going to do 192.168.1.254, which is my gateway or my router to get out of my network, to get out to the internet.
>
> **[2:00](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-server-manager?u=76281980&t=120)** And then we also have to assign DNS server addresses.
>
> **[2:04](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-server-manager?u=76281980&t=124)** Now, very often, when it comes to your servers, you may actually be a DNS server, and you may point to yourself.
>
> **[2:12](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-server-manager?u=76281980&t=132)** In this particular instance, because I do not have any other roles yet assigned to this particular machine, I'm going to go ahead and put in 192.168.1.254, which is not only my router to get out of my network onto the internet, but it's also my DNS server, all right?
>
> **[2:30](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-server-manager?u=76281980&t=150)** So I will click on that and click OK, Close, and then close this window.
>
> **[2:37](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-server-manager?u=76281980&t=157)** And then if you look back here in the Server Manager, oh, well, when I started talking, it was still saying that the IPv4 address was assigned by DHCP, and it's because it doesn't always refresh right away, okay?
>
> **[2:52](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-server-manager?u=76281980&t=172)** It actually refreshed very quickly while I was talking.
>
> **[2:56](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-server-manager?u=76281980&t=176)** You might be able to rewind this video just to that one specific instant that it was there for a moment, and you'll see that it was there.
>
> **[3:03](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-server-manager?u=76281980&t=183)** And I didn't do anything.
>
> **[3:04](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-server-manager?u=76281980&t=184)** If you do need to, if you're not refreshing automatically, then what you do is you click the refresh button up at the top, and then that would've gone ahead and shown you that your IP address has been configured to the static IP address that you just assigned, all right?
>
> **[3:20](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-server-manager?u=76281980&t=200)** And so that's how you can go ahead and set up an IP address, which pretty much gets your server ready for use on your network.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4), right-click (1), go to (1), checkbox (1)
> **Env Vars:** dhcp (3), dns (3)
> **Versions:** 192.168.1 (3), version 4 (1), 255.0 (1)
> **Code Keywords:** case. (2), static (2)
> **Prerequisites:** configure (2), set up (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Configuring a computer name with SConfig
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-sconfig?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-sconfig?u=76281980&t=1)** - [Instructor] So we've talked about how it's important to make sure to name our server and give it an IP address so that it is easily available on the network to be able to go ahead and perform server functions.
>
> **[0:13](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-sconfig?u=76281980&t=13)** And we saw how to do that through server manager, if we're using the full desktop experience.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-sconfig?u=76281980&t=18)** But what about if you have a Server Core installation?
>
> **[0:21](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-sconfig?u=76281980&t=21)** Well, there are a couple of different ways we can do this with Server Core.
>
> **[0:25](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-sconfig?u=76281980&t=25)** The first comes up by default and that's what we're looking at right here.
>
> **[0:29](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-sconfig?u=76281980&t=29)** Okay, S config is what we're going to go ahead and have available to us.
>
> **[0:37](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-sconfig?u=76281980&t=37)** At one point you used to have to manually do it.
>
> **[0:40](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-sconfig?u=76281980&t=40)** Now it comes up by default, and you'll notice that in this configuration, again, it's all going to be done via the keyboard.
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-sconfig?u=76281980&t=45)** There is technically a mouse cursor that you can move around, but it doesn't do anything.
>
> **[0:50](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-sconfig?u=76281980&t=50)** I can't click on anything here to make anything happen.
>
> **[0:53](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-sconfig?u=76281980&t=53)** So I have to do everything on the keyboard, but you'll notice that on this list, you'll see, there's an item here for computer name.
>
> **[0:59](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-sconfig?u=76281980&t=59)** It's number two.
>
> **[1:01](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-sconfig?u=76281980&t=61)** Okay, and again, it has this random set of letters and numbers.
>
> **[1:05](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-sconfig?u=76281980&t=65)** So what I'm going to do is down at the bottom, where it says enter number to select an option.
>
> **[1:09](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-sconfig?u=76281980&t=69)** I'm going to put two and hit enter.
>
> **[1:12](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-sconfig?u=76281980&t=72)** And it says the current computer name is win -A09, blah, blah, blah, blah, blah, and says now to enter a new computer name.
>
> **[1:19](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-sconfig?u=76281980&t=79)** And if I leave it blank and just hit enter, well, then that's the equivalent of saying no, no, nevermind I didn't mean to do that.
>
> **[1:25](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-sconfig?u=76281980&t=85)** I want to cancel it.
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-sconfig?u=76281980&t=87)** But if I do want to go ahead and change the name, I'm going to do that now.
>
> **[1:30](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-sconfig?u=76281980&t=90)** So let's call this Server2, right?
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-sconfig?u=76281980&t=93)** That's, we called the other one Server1, we'll call this one Server2 I'll hit enter and says, changing the computer name.
>
> **[1:39](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-sconfig?u=76281980&t=99)** And it says changes will not take effect until you restart the computer.
>
> **[1:42](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-sconfig?u=76281980&t=102)** Do you want to restart now?
>
> **[1:44](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-sconfig?u=76281980&t=104)** So I will hit Y for yes.
>
> **[1:46](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-sconfig?u=76281980&t=106)** And hit enter.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-sconfig?u=76281980&t=107)** And again, it's going to go through a reboot and I'm going to go ahead and reconnect here in just a moment here.
>
> **[1:54](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-sconfig?u=76281980&t=114)** It will boot back up and we will have the name changed.
>
> **[1:58](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-sconfig?u=76281980&t=118)** So we can see here that it has booted, and we're just waiting for the credentials for the administrator counts.
>
> **[2:04](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-sconfig?u=76281980&t=124)** So I'm going to go ahead and put that in S config is loading once again and we're back and just like that.
>
> **[2:11](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-sconfig?u=76281980&t=131)** Guess what?
>
> **[2:12](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-sconfig?u=76281980&t=132)** We now have the computer name Server2.
>
> **[2:15](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-computer-name-with-sconfig?u=76281980&t=135)** So that's how you can change the computer name, using S config on a Windows Server Core.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Keywords:** default, (1), let (1)
> **Env Vars:** a09 (1)
> **UI Navigation:** click on (1)
> **Analogies:** just like (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### Configuring TCP/IP with SConfig
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-sconfig?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-sconfig?u=76281980&t=1)** - [Instructor] So now we've seen how to set the name on the Server Core edition.
>
> **[0:07](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-sconfig?u=76281980&t=7)** Now let's see how to go ahead and configure an IP address.
>
> **[0:11](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-sconfig?u=76281980&t=11)** So again, on the list here, you'll see here that we have, number eight says Network settings, so I will type eight and hit enter.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-sconfig?u=76281980&t=18)** And the first thing it wants you to do is it wants you to select the network adapter that you want to assign an IP address.
>
> **[0:27](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-sconfig?u=76281980&t=27)** Now you'll notice, I only have one, index number one.
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-sconfig?u=76281980&t=32)** We see that on the list, index number one, but it already has an IP address assigned.
>
> **[0:36](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-sconfig?u=76281980&t=36)** And the reason is because it was assigned via a DHCP server, just as the other server was.
>
> **[0:42](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-sconfig?u=76281980&t=42)** The other server, we didn't ever look at it, but it did have an IP address that was assigned to it.
>
> **[0:47](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-sconfig?u=76281980&t=47)** So we're going to go ahead and we're going to change this, let's say, to another static IP address just as we did on the other server.
>
> **[0:54](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-sconfig?u=76281980&t=54)** So I'm going to say one, 'cause that's the one network adapter I want to change, hit enter.
>
> **[1:00](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-sconfig?u=76281980&t=60)** And what do you want to do?
>
> **[1:02](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-sconfig?u=76281980&t=62)** You want to set the network adapter address, set the DNS servers, or clear the DNS server settings.
>
> **[1:08](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-sconfig?u=76281980&t=68)** So let's first do number one, set network adapter address.
>
> **[1:13](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-sconfig?u=76281980&t=73)** And it says, do you want to do DHCP or static?
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-sconfig?u=76281980&t=77)** So I'm going to say S for static, and then we're going to enter the static IP address.
>
> **[1:22](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-sconfig?u=76281980&t=82)** So I'm going to put in 192.168.1.
>
> **[1:28](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-sconfig?u=76281980&t=88)** and I'm going to do, now, we did 241 for the other, so I'm going to do 242, and I will hit enter.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-sconfig?u=76281980&t=94)** And now I have to put in the subnet mask, but you'll notice I don't have to type it in, 'cause it says blank, right down here at the bottom, it says blank equals 255.255.255.0.
>
> **[1:45](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-sconfig?u=76281980&t=105)** If I want to keep that subnet mask, all I have to do is hit enter and it will leave it alone.
>
> **[1:50](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-sconfig?u=76281980&t=110)** Now I have to put in the default gateway, so I'll put in 192.168.1.254, hit enter, and it goes through and it says that it is setting that all up and you'll see there's a whole bunch of successfully released from the DHCP server, turned it on to static, set everything, press enter to continue.
>
> **[2:12](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-sconfig?u=76281980&t=132)** So I'll press enter to continue and we get right back to the initial Sconfig screen, but we're not necessarily done here with the network settings, because, I'm going to go ahead and hit eight, once again, we can see that we have the IP address of 1.242, but let me go ahead and type 1 for that particular network adapter.
>
> **[2:34](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-sconfig?u=76281980&t=154)** What I don't see here is I don't see any DNS servers.
>
> **[2:37](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-sconfig?u=76281980&t=157)** See where it says preferred DNS server and alternate DNS server?
>
> **[2:40](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-sconfig?u=76281980&t=160)** There's nothing there.
>
> **[2:41](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-sconfig?u=76281980&t=161)** So now I have to go ahead and hit number two for setting the DNS servers, and again, I'm going to put in 192.168.1.254 and hit enter.
>
> **[2:53](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-sconfig?u=76281980&t=173)** I don't have a second DNS server.
>
> **[2:55](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-sconfig?u=76281980&t=175)** If there was, I could put it here, so I'll just hit enter, or just leave it blank for none.
>
> **[2:59](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-sconfig?u=76281980&t=179)** And it says successfully assigned the DNS servers, press enter to continue, and the only thing I'm going to do here, just very quickly, just to show you, is I'm going to hit eight for network settings, and then one for this network adapter, just so we can see that the preferred DNS server has been configured now, all right?
>
> **[3:16](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-sconfig?u=76281980&t=196)** And at this point, I'm just going to go ahead and just, where it says enter selection, I hit blank for cancel, and that takes me back to the initial Sconfig screen.
>
> **[3:24](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-sconfig?u=76281980&t=204)** And we have now configured our TCP/IP settings on Windows Server 2022 Server Core edition.

> [!info]- Semantic Content
>
> **Code Keywords:** static (5), let (4), continue (3), this, (1)
> **Env Vars:** dns (9), dhcp (3), tcp (1)
> **Versions:** 192.168.1 (3), 255.255.255 (1), 1.242 (1)
> **UI Navigation:** select the (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Configruing a computer name with PowerShell
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configruing-a-computer-name-with-powershell?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configruing-a-computer-name-with-powershell?u=76281980&t=1)** - [Instructor] Now, I did mention that there were two different ways that we could configure the Server Core edition with the name and the IP address.
>
> **[0:10](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configruing-a-computer-name-with-powershell?u=76281980&t=10)** And I've shown you using SConfig, which comes up by default.
>
> **[0:15](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configruing-a-computer-name-with-powershell?u=76281980&t=15)** But the other way to do it would be, through Windows PowerShell.
>
> **[0:20](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configruing-a-computer-name-with-powershell?u=76281980&t=20)** All right, so just to show you, even though we've already done it, right, I've already assigned the computer name, and I've already assigned an IP address.
>
> **[0:28](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configruing-a-computer-name-with-powershell?u=76281980&t=28)** Let's go ahead and I want to show you that, option number 15 here, in SConfig says "Exit to a command line, PowerShell."
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configruing-a-computer-name-with-powershell?u=76281980&t=35)** Okay, so I'm going to go ahead and I'm going to type in 15 and hit Enter, and you'll see here that now, I am just in a PowerShell Command Line Window, it does tell you if you want to launch, you know, SConfig again, just literally, you know run SConfig, okay.
>
> **[0:54](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configruing-a-computer-name-with-powershell?u=76281980&t=54)** But here in PowerShell, well, how would we go ahead and rename this computer using PowerShell?
>
> **[1:00](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configruing-a-computer-name-with-powershell?u=76281980&t=60)** Matter of fact, why would we want to?
>
> **[1:02](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configruing-a-computer-name-with-powershell?u=76281980&t=62)** Well, you can script using PowerShell.
>
> **[1:05](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configruing-a-computer-name-with-powershell?u=76281980&t=65)** You also have the ability potentially to do this remotely using PowerShell.
>
> **[1:09](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configruing-a-computer-name-with-powershell?u=76281980&t=69)** Okay, there are a number of different options here.
>
> **[1:11](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configruing-a-computer-name-with-powershell?u=76281980&t=71)** So let's go ahead and see how to do it using PowerShell, even though we've already done it with SConfig, which I think for me personally, is, you know the easier way to do it.
>
> **[1:21](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configruing-a-computer-name-with-powershell?u=76281980&t=81)** Certainly if you're in a smaller environment and you're just doing this, you know, on a small number of servers.
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configruing-a-computer-name-with-powershell?u=76281980&t=87)** All right, so the first thing I want to do, here in PowerShell is if I just simply type in, Hostname, (keyboard chattering) and hit Enter, it will show me the current Hostname.
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configruing-a-computer-name-with-powershell?u=76281980&t=97)** Now the reason that this is potentially important, is if you were doing this with the original installation where it was like, when dash some random set of numbers and letters and whatnot, you're going to need to know the existing name in order to be able to change to a new name.
>
> **[1:56](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configruing-a-computer-name-with-powershell?u=76281980&t=116)** All right, so the way that the command that you use to rename the computer, is going to be, well, you'll never guess, but it's Rename dash Computer space dash ComputerName space, and then this is where you have to actually put in the computer name, so it's going to be Server2, right, whereas again, it would be helpful, either with a copy, paste or even to just be able to look at what the name was, before you go ahead and you know, so you can type it in right here.
>
> **[2:28](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configruing-a-computer-name-with-powershell?u=76281980&t=148)** So Server2 is the current ComputerName, and then I'm going to put in, dash NewName, right?
>
> **[2:36](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configruing-a-computer-name-with-powershell?u=76281980&t=156)** 'Cause I want to give it a new name, and let's call this ServerCore1, okay.
>
> **[2:43](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configruing-a-computer-name-with-powershell?u=76281980&t=163)** So I'm going to actually change the name here to ServerCore1, and I'm going to hit Enter.
>
> **[2:47](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configruing-a-computer-name-with-powershell?u=76281980&t=167)** And you'll see here, it says; "WARNING: The changes will take effect after you restart the computer Server2."
>
> **[2:55](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configruing-a-computer-name-with-powershell?u=76281980&t=175)** So in order to restart the computer, I'm going to go ahead, and I'm going to type in, the command, Shutdown dash R for reboot, and that should go ahead and reboot the machine.
>
> **[3:06](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configruing-a-computer-name-with-powershell?u=76281980&t=186)** So let's do that now and catch us back up as soon as we're back up and running here.
>
> **[3:10](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configruing-a-computer-name-with-powershell?u=76281980&t=190)** Okay, the system has rebooted.
>
> **[3:11](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configruing-a-computer-name-with-powershell?u=76281980&t=191)** So I'll go ahead and I'll type in my password for the Administrator to log back in, and hit Enter.
>
> **[3:16](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configruing-a-computer-name-with-powershell?u=76281980&t=196)** And you'll see here that it's going to launch SConfig once again, 'cause that is the default, and that's okay.
>
> **[3:21](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configruing-a-computer-name-with-powershell?u=76281980&t=201)** Because without even going back to the PowerShell Window, I just want you to see here that the computer name has been changed to SERVERCORE1.
>
> **[3:30](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configruing-a-computer-name-with-powershell?u=76281980&t=210)** Okay, so that's how you can change the computer name or configure the computer name, using Windows PowerShell on a Server Core installation.

> [!info]- Semantic Content
>
> **Tools:** powershell (11), command line (2)
> **Code Keywords:** let (4), default. (1), this, (1), default, (1)
> **Env Vars:** warning (1), servercore1 (1)
> **Prerequisites:** configure (2)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Configuring TCP/IP with PowerShell
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=1)** - [Instructor] All right, so the other thing I need to show you how to configure via PowerShell is your IP address.
>
> **[0:07](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=7)** And before I do that, I do want to emphasize that this can be definitely tricky for many people.
>
> **[0:14](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=14)** And I personally recommend that you use SCONFIG if you have it available.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=18)** But that said, let me go ahead and show what I can via Windows PowerShell.
>
> **[0:23](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=23)** So here in SCONFIG, I'm going to hit option number 15 to exit to our PowerShell command line.
>
> **[0:29](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=29)** And once I'm in PowerShell, the first thing I'm going to type in is I'm going to type in Get-NetIPConfiguration.
>
> **[0:38](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=38)** I'm going to type that.
>
> **[0:39](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=39)** That's going to show me the current IP configuration.
>
> **[0:43](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=43)** And so what I want to see here is I want to see here that the InterfaceAlias is called Ethernet.
>
> **[0:49](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=49)** It's got an index of five, and I want you to very specifically make note of, if you're following along, what InterfaceIndex you have there.
>
> **[0:58](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=58)** Okay, a five.
>
> **[0:59](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=59)** I'm going to jump down here to the IPv4Address.
>
> **[1:02](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=62)** You can see here we already assigned our 192.168.1.242.
>
> **[1:07](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=67)** And we also have our IPv4DefaultGateway of 1.254, as well as a DNSServer of 1.254.
>
> **[1:16](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=76)** Okay, so now's where things get a little bit trickier.
>
> **[1:21](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=81)** What we need to do to configure the new IP address is I'm going to type in New-NetIPAddress, space, -InterfaceIndex, space, and then this is where you need that InterfaceIndex, and mine is five.
>
> **[1:46](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=106)** If you're following along, you may have different number.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=107)** So I'm going to put in five.
>
> **[1:49](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=109)** Space, dash the actual IP address.
>
> **[1:55](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=115)** Space, of 192, and so we had it as 242.
>
> **[2:00](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=120)** I'm going to change it to 243.
>
> **[2:02](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=122)** So I'm going to put 192.168.1.243.
>
> **[2:07](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=127)** Space, PrefixLength of 24.
>
> **[2:14](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=134)** Now, that is setting up the subnet mask.
>
> **[2:17](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=137)** And I don't want to get into the whole long details.
>
> **[2:19](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=139)** You have to understand how IP addresses work.
>
> **[2:22](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=142)** But a PrefixLength of 24 is equivalent to a subnet mask of 255.255.255.0.
>
> **[2:29](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=149)** And then I'm going to push -DefaultGateway, and I'm running out of room on the screen here but when I hit space, I'll just go to the next line, 192.168.1.254.
>
> **[2:39](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=159)** Now, I'm going to tell you, as of right now, in this moment, while I am demonstrating this for you, there is what I believe is a bug.
>
> **[2:53](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=173)** I have not always experienced this in the past, you may not experience it if you're following along but I want you to see that when I hit Enter, I'm going to most likely get an error.
>
> **[3:03](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=183)** And I do.
>
> **[3:05](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=185)** And the reason is because you'll see here in the error, it says instance DefaultGateway already exists.
>
> **[3:11](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=191)** So because we already have a DefaultGateway configured, it doesn't want me to configure it again.
>
> **[3:19](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=199)** In the past, you would do that and it would be okay with it.
>
> **[3:23](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=203)** I'd say okay, well, I'm just going to sign that anyway.
>
> **[3:25](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=205)** So what I'm going to do is I'm going to type in the exact same command again.
>
> **[3:28](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=208)** All I did was hit up arrow, by the way, to get it all to retype again.
>
> **[3:32](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=212)** And then I'm going to back space out and I'm going to get rid of the DefaultGateway part.
>
> **[3:35](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=215)** And I'm going to hit Enter this time, and you'll see here that now I don't get the error.
>
> **[3:39](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=219)** It goes through and assigns the IP address of 192.168.1.243.
>
> **[3:46](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=226)** Now, if I again go back and hit up arrow a few times, like it's a Get-NetIPConfiguration, and hit Enter, you'll now notice that it actually says that I have multiple IP addresses.
>
> **[3:59](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=239)** It says that I have both 192.168.1.243 and 192.168.1.242.
>
> **[4:06](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=246)** That is something that is allowed.
>
> **[4:08](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=248)** You have the ability to go ahead and set multiple IP addresses on a single network card if you have a need for that in your environment.
>
> **[4:19](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=259)** But if I don't have that, and I want to get rid of that, then what I have to do is I have to type in the command Remove-NetIPAddress -IPAddress.
>
> **[4:35](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=275)** And then I need to put in the IP address I want gone.
>
> **[4:36](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=276)** So 192.168.1.242.
>
> **[4:41](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=281)** So if I wanted that one gone, it says are you sure you want to perform this action?
>
> **[4:46](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=286)** So I'm going to say yes.
>
> **[4:48](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=288)** It wants me to confirm that I want to do this and I'm going to say Y for yes.
>
> **[4:52](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=292)** And now if I go back to Get-NetIPConfiguration again, you'll see here that all I have is 192.168.1.243.
>
> **[5:03](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=303)** Now, the other thing I want to show you is what if we wanted to go ahead and point to a DNS server?
>
> **[5:09](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=309)** What if that was not already configured?
>
> **[5:12](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=312)** I do have it, as you can see here, I have DNSServer already configured but if it wasn't and I needed to configure it, then the command you would do is Set-DNSClientServerAddress.
>
> **[5:28](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=328)** That's the full command.
>
> **[5:30](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=330)** You again would have to do InterfaceIndex, and put in the appropriate index.
>
> **[5:36](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=336)** So I'm going to say for InterfaceIndex of five.
>
> **[5:40](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=340)** And then you put in the ServerAddress, and you'll notice it says ServerAddresses because you may want to point to more than one DNS server.
>
> **[5:50](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=350)** If it's only one DNS server, then you could just simply put in the actual IP address.
>
> **[5:57](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=357)** So that would be the actual command, what I have at the bottom of the screen there.
>
> **[6:02](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=362)** There is the ability to go ahead and put in multiple addresses, and you would basically do it through a series of, you would go ahead and you'd put a bracket, you'd put them in quotes.
>
> **[6:16](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=376)** And then you put a comma, and then another one, and then end bracket, et cetera, et cetera.
>
> **[6:20](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=380)** I'm not going to bother doing that here.
>
> **[6:22](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=382)** I'm just letting you know you could do it, all right?
>
> **[6:25](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=385)** But that is the command you would do.
>
> **[6:27](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=387)** And you'll see there I hit enter.
>
> **[6:28](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=388)** It does not give me an error.
>
> **[6:30](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=390)** It just sets that even though it was already previously set.
>
> **[6:34](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-tcp-ip-with-powershell?u=76281980&t=394)** All right, so that is how you can go ahead and configure your IP configuration, using Windows PowerShell.

> [!info]- Semantic Content
>
> **Versions:** 192.168.1 (8), 1.254 (2), 255.255.255 (1)
> **Tools:** powershell (5), command line (1)
> **Env Vars:** dns (3), sconfig (2)
> **Prerequisites:** configure (5)
> **Definitions:** is called (1), is a  (1)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Cross-References:** go back to (1)


### 3. Configuring Storage

> [↑ Back to Table of Contents](#table-of-contents)

#### Creating a simple volume
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=0)** - [Instructor] So let's take a look at how we can configure our storage solutions for our Windows server installation.
>
> **[0:10](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=10)** Now, if you've ever worked with Windows server in the past, you may be familiar with the disk management tool.
>
> **[0:19](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=19)** In fact, even certain versions of Windows client additions have this in it as well.
>
> **[0:26](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=26)** Well, that still exists today in Windows Server 2022.
>
> **[0:30](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=30)** And I personally find it still to be, for me anyway, the easiest way to go ahead and configure your storage.
>
> **[0:38](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=38)** So what I'm going to do is I'm going to click on start and I'm just going to start typing in disc management.
>
> **[0:47](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=47)** And when I do, you'll see here that there's an option here for create and format hard disc partitions, okay.
>
> **[0:52](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=52)** So I'm going to click on that and that opens us into the disk management utility.
>
> **[0:57](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=57)** Ah, now I should mention, before we go any further, I did mention early on in the course that I would be doing this and I want to make sure that you know that for the sake of this demonstration, I did go to my virtual machine and I added three additional hard disks.
>
> **[1:21](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=81)** Okay, so just to show you real quick here, if I go into the settings for my virtual machine, I just want you to see that under the SCSI controller, I did add three additional hard drives.
>
> **[1:35](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=95)** And if you need to know how to do it, I mean, it's as simple as just click on SCSI controller, highlight hard drive, hit add, and then you go through a whole little wizard to set it up.
>
> **[1:46](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=106)** All right, so I did add those, those three additional hard disks for this demonstration.
>
> **[1:54](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=114)** Okay, so back here in our disk management on our Windows server, there's a few things I want to point out.
>
> **[2:01](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=121)** In the top half, you can see the different volumes that have been set up, okay.
>
> **[2:06](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=126)** You can see them set up here.
>
> **[2:07](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=127)** You can see they're all configured and it may look like there's a whole lot of stuff, but it's a lot easier to see, I think visually in the bottom half, right?
>
> **[2:16](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=136)** For disc zero, which was the original 200 gig disc that we set up when we installed the operating system.
>
> **[2:22](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=142)** And we said to install on the entire disc.
>
> **[2:25](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=145)** You'll see here that what it actually did was it broke it into three separate partitions.
>
> **[2:30](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=150)** It's got a 100 Meg system partition.
>
> **[2:33](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=153)** It has the actual C drive, which is almost the entire 200 gig, okay.
>
> **[2:38](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=158)** And that's where the actual, you know, that's where we've been working.
>
> **[2:41](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=161)** And then we also have a 523 Meg recovery partition that is partly used for, if you need to recover windows server, okay.
>
> **[2:52](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=172)** That all happens by default, so, and that's tying up the entire disc.
>
> **[2:57](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=177)** But then below it, you'll see we have disc one, disc two and disc three are all basically 200 gig and it's just says unallocated.
>
> **[3:05](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=185)** And if I scroll down, you'll see that there is actually even below dis three, there is CD ROM zero, which is where our DVD is located, okay.
>
> **[3:15](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=195)** So that is everything that we have.
>
> **[3:19](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=199)** Now, the first thing I want to show you here is the most basic thing you can do, which is simply the creation of a simple volume.
>
> **[3:30](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=210)** All right, so I'm going to go ahead and I'm going to take this unallocated space, we'll just use disc one.
>
> **[3:36](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=216)** I'm going to take the unallocated space, and I'm going to right click on it, and I'm going to select new, simple volume.
>
> **[3:46](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=226)** And I get this simple volume wizard.
>
> **[3:48](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=228)** Click on next.
>
> **[3:49](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=229)** How big do I want it to be in megabytes?
>
> **[3:53](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=233)** The amount of space that's available in full is 204,782 megabytes.
>
> **[3:58](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=238)** But why don't we just for the sake of demonstration, let's make this considerably smaller.
>
> **[4:05](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=245)** I'm going to do like 50,000, okay.
>
> **[4:07](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=247)** 50,000 megabytes, which will be just under 50 gig, okay.
>
> **[4:12](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=252)** Cause a gig is technically 1,024 megabytes, and I'm not going to multiply that out by 50.
>
> **[4:19](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=259)** Let me go ahead and click on next.
>
> **[4:22](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=262)** I can assign it a drive letter if I want, okay.
>
> **[4:25](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=265)** And so you'll see here, it'll show me all the available drive letters.
>
> **[4:29](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=269)** So if I wanted to make it my E drive, I could do that.
>
> **[4:32](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=272)** There's also an option for mounting into a folder, okay.
>
> **[4:37](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=277)** Which is where you literally point instead of giving any drive letter, you create an empty folder on an existing NTFS partition, and you point this new volume to that folder.
>
> **[4:49](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=289)** So people would access it via that folder.
>
> **[4:52](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=292)** Or I could even choose to not even sign a drive letter.
>
> **[4:55](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=295)** For simplicity, I'm going to go ahead and assign it letter E.
>
> **[4:59](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=299)** Next, you now have to choose to format it.
>
> **[5:03](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=303)** And basically you get, you get a few options here.
>
> **[5:06](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=306)** You get, you get, one of the older, FAT file system options.
>
> **[5:10](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=310)** Now it's exFAT, there's NTFS, which is typically what is recommended.
>
> **[5:15](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=315)** And then there's also ReFS, which is the newest of all the file systems, which is the resilient file system.
>
> **[5:23](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=323)** They're, in my opinion, there are still benefits to NTFS that you, that you should stick with it.
>
> **[5:29](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=329)** But the resilient file system is coming along a lot more and more every day.
>
> **[5:34](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=334)** So I'm going to go ahead, and I'll go ahead and do this and click next and finish.
>
> **[5:41](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=341)** And just like that, I now have a new volume it's 48.83 gigabytes that has been created.
>
> **[5:47](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-simple-volume?u=76281980&t=347)** So that's how you can create a simple volume.

> [!info]- Semantic Content
>
> **Env Vars:** ntfs (3), scsi (2), rom (1), dvd (1), fat (1)
> **UI Navigation:** click on (6), go to (1), scroll down (1)
> **Code Keywords:** let (3), for, (1), default, (1), new, (1)
> **Prerequisites:** set up (3), configure (2), install (1)
> **CLI Commands:** make (3), find (1), cd (1)
> **Code Identifiers:** exfat (1)
> **Versions:** 48.83 (1)
> **Analogies:** just like (1)

#### Extending and shrinking a volume
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=0)** - [Instructor] The next thing I'd like to show you is something that has not actually been around that long.
>
> **[0:06](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=6)** It has been around for a couple of versions of server, but in the old days, you used to have to do this with a third party utility.
>
> **[0:13](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=13)** And that is having the ability to either extend or shrink a volume.
>
> **[0:20](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=20)** In other words, either grow it if it's not big enough, or shrink it down if you're tying up too much space.
>
> **[0:27](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=27)** Okay, so for instance, here, I have that new volume that I created, the new E volume here, it's almost 50 Gig.
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=35)** And let's say that 50 Gig wasn't enough, right?
>
> **[0:37](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=37)** I have this 150 Gig that's not use so left over here, So let's say I wanted to extend it.
>
> **[0:43](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=43)** All you have to do is right-click on that volume and select Extend Volume, and you get a wizard.
>
> **[0:50](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=50)** So I'll click on Next and you'll see here that you can even choose what disks you want to extend onto.
>
> **[0:58](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=58)** You only have to extend onto the same disk.
>
> **[1:01](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=61)** Now by default, this one is selected and that is the disk, if I move this out of the way, a little bit, that's the disc we were working on, disk 1.
>
> **[1:09](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=69)** We're not going to extend the disk two or three.
>
> **[1:12](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=72)** That would be a different type of volume.
>
> **[1:14](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=74)** It'd be what's called a span volume.
>
> **[1:16](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=76)** We'll get to that later.
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=77)** What I do want to show you is that here, it says total volume size available is 204782 maximum available space in Megabytes. Okay.
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=87)** And so select the amount of space that you want to add to it. All right.
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=92)** So let's just go ahead and let's just add another 50,000 to it.
>
> **[1:38](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=98)** And that shows me that the new total volume size in Megabytes is going to be a 100,000 Meg.
>
> **[1:45](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=105)** So I'll click on Next and Finish.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=107)** And I mean, it..
>
> **[1:48](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=108)** (giggles) it literally took like two seconds, zip, zip zip.
>
> **[1:52](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=112)** My 50 Gig volume is now a 100 Gig volume. All right.
>
> **[1:57](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=117)** So it's really just that easy to go ahead and make a volume larger as long as you have some more disk space to extend onto.
>
> **[2:07](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=127)** But what about the other direction?
>
> **[2:08](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=128)** I mean, extending has actually always been pretty easy.
>
> **[2:11](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=131)** It's the shrinking that has always been challenging. All right.
>
> **[2:15](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=135)** Now you have to be careful because you have to make sure that, you know, that you don't lose data, you know, on the particular volume.
>
> **[2:24](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=144)** But if I do right click on my volume and I select Shrink Volume, it now says the total size before we shrink it is a 100,000 Megabytes.
>
> **[2:34](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=154)** The size of the available shrink space is 96,878.
>
> **[2:40](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=160)** Now why is that?
>
> **[2:41](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=161)** Because it's actually analyzing what of this volume might actually be used.
>
> **[2:48](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=168)** And so if I left it with that total amount that I could shrink it down, I ended up with a total size after shrink of only 3,122 Megabytes or around three Gig.
>
> **[2:58](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=178)** Now you might be thinking yourself, why is that?
>
> **[3:00](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=180)** We haven't put anything on this volume.
>
> **[3:03](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=183)** You have to understand that there're certain information that goes into a volume, which is simply just formatting information about the volume. All right.
>
> **[3:10](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=190)** So if I would say, just for the sake of doing something, let's say, I said 80,000.
>
> **[3:16](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=196)** We started with a 100,000.
>
> **[3:18](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=198)** The amount I'm putting in is how much I want to take away. Okay.
>
> **[3:20](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=200)** Not what I want the new one to be, but how much to take away.
>
> **[3:24](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=204)** And then it says the total size after we shrink, it'll be 20,000 Megabytes.
>
> **[3:30](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=210)** So I'm going to go ahead and click on Shrink.
>
> **[3:33](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=213)** And again it did not take very long, just like that.
>
> **[3:37](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=217)** I now have an approximately 20 Gig volume.
>
> **[3:41](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=221)** We're again, when we started this particular lesson, we had 50 Gig.
>
> **[3:46](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=226)** We extended it to a 100 and then we shrunk it down to 20.
>
> **[3:49](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=229)** And none of it really took that long to do. Okay.
>
> **[3:52](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=232)** It was all pretty basic and pretty simple to do. All right.
>
> **[3:56](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/extending-and-shrinking-a-volume?u=76281980&t=236)** So that's how you can extend or shrink a volume as needed.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), default, (1)
> **UI Navigation:** click on (4), right-click (1), select the (1)
> **CLI Commands:** make (2)
> **Definitions:** in other words (1), is a  (1)
> **Analogies:** for instance (1), just like (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Converting from basic to dynamic disks
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/converting-from-basic-to-dynamic-disks?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/converting-from-basic-to-dynamic-disks?u=76281980&t=1)** - [Instructor] Now you may have noticed when I went to create a new volume the first time when I did a simple volume, when I right click on the unallocated space, besides the simple volume, you'll see, there are a series of other options available.
>
> **[0:17](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/converting-from-basic-to-dynamic-disks?u=76281980&t=17)** And the reality is, is that many of those are not available or at least not available with their full functionality as long as we are using basic disk.
>
> **[0:29](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/converting-from-basic-to-dynamic-disks?u=76281980&t=29)** Okay, so here, let me, let me just kind of give you an example.
>
> **[0:31](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/converting-from-basic-to-dynamic-disks?u=76281980&t=31)** If I right click and say new mirrored volume, and let's say I had disk one and disk two, and we're going to say, we'll just do, we'll do another 20,000.
>
> **[0:48](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/converting-from-basic-to-dynamic-disks?u=76281980&t=48)** You'll notice it's putting 20,000 on each one, click on next, assign it a letter, next, format.
>
> **[0:55](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/converting-from-basic-to-dynamic-disks?u=76281980&t=55)** Just leave it with all the defaults and finish.
>
> **[1:00](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/converting-from-basic-to-dynamic-disks?u=76281980&t=60)** Well, look at what happens here.
>
> **[1:02](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/converting-from-basic-to-dynamic-disks?u=76281980&t=62)** You get a little warning.
>
> **[1:03](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/converting-from-basic-to-dynamic-disks?u=76281980&t=63)** It says the operation you selected will convert the selected basic disk to dynamic disk.
>
> **[1:09](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/converting-from-basic-to-dynamic-disks?u=76281980&t=69)** And if you do this, you'll not be able to start any other operating systems.
>
> **[1:14](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/converting-from-basic-to-dynamic-disks?u=76281980&t=74)** If you are like dual booting or anything like that on that particular, on that particular disk.
>
> **[1:20](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/converting-from-basic-to-dynamic-disks?u=76281980&t=80)** Now for the sake of argument right now, I'm going to say no.
>
> **[1:24](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/converting-from-basic-to-dynamic-disks?u=76281980&t=84)** Okay, in other words, I don't want to do that.
>
> **[1:28](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/converting-from-basic-to-dynamic-disks?u=76281980&t=88)** And the reason I don't want to do that is because I want to show you that if you're going to convert from a basic to a dynamic disk, you should know precisely that that's what you're going to do.
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/converting-from-basic-to-dynamic-disks?u=76281980&t=97)** Not do it as a part of creating a volume, that's kind of asking for trouble in concern of, well, what else, what other problems am I causing?
>
> **[1:48](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/converting-from-basic-to-dynamic-disks?u=76281980&t=108)** All right, so what I'm going to do is, I'm going to take my disk here, so we'll say disk one and I'm going to right click, and I'm going to say convert to dynamic disk, right?
>
> **[1:57](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/converting-from-basic-to-dynamic-disks?u=76281980&t=117)** We can already see that it's basic, we can see that all of our disks are basic.
>
> **[2:01](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/converting-from-basic-to-dynamic-disks?u=76281980&t=121)** Okay, so I'm going to convert to dynamic disk.
>
> **[2:03](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/converting-from-basic-to-dynamic-disks?u=76281980&t=123)** And when it does that, it'll ask me, well, which disk you want to convert to dynamic disk?
>
> **[2:08](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/converting-from-basic-to-dynamic-disks?u=76281980&t=128)** It doesn't have to be just disk one.
>
> **[2:09](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/converting-from-basic-to-dynamic-disks?u=76281980&t=129)** That's the one where the box was checked because that's the one I clicked on but I'm going to actually do disk one, two, and three.
>
> **[2:18](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/converting-from-basic-to-dynamic-disks?u=76281980&t=138)** I really could do disk zero as well.
>
> **[2:20](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/converting-from-basic-to-dynamic-disks?u=76281980&t=140)** In fact, I will, why not?
>
> **[2:22](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/converting-from-basic-to-dynamic-disks?u=76281980&t=142)** Let's just convert them all to dynamic disks.
>
> **[2:25](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/converting-from-basic-to-dynamic-disks?u=76281980&t=145)** The reason I really only have to do disk one, two, and three is 'cause those are the ones that I'm going to be showing you, the different volume types that really require the need for dynamic disks.
>
> **[2:37](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/converting-from-basic-to-dynamic-disks?u=76281980&t=157)** All right, so I'm going to do all my disks at once, I'm going to click okay.
>
> **[2:41](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/converting-from-basic-to-dynamic-disks?u=76281980&t=161)** And it just goes ahead and shows you, okay, yep, we will do this.
>
> **[2:45](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/converting-from-basic-to-dynamic-disks?u=76281980&t=165)** So I'll click convert.
>
> **[2:48](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/converting-from-basic-to-dynamic-disks?u=76281980&t=168)** And it says that they're converting to dynamic, you will not be able to start.
>
> **[2:51](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/converting-from-basic-to-dynamic-disks?u=76281980&t=171)** So this is that same warning that says, if you are dual booting, are you sure you want to do this?
>
> **[2:55](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/converting-from-basic-to-dynamic-disks?u=76281980&t=175)** And I'm going to say, yup, I'm sure, so I click yes.
>
> **[2:59](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/converting-from-basic-to-dynamic-disks?u=76281980&t=179)** And the only things that change are, number one over on the left you'll notice they all say dynamic now.
>
> **[3:07](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/converting-from-basic-to-dynamic-disks?u=76281980&t=187)** But the other thing that changed you may have noticed is that now the different types of partitions actually have a different color associated with them.
>
> **[3:17](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/converting-from-basic-to-dynamic-disks?u=76281980&t=197)** Okay, so the blue means that some form of primary petition and the, I don't even know what color exactly this is, to my eyes, it is somewhere between like a green and a brown.
>
> **[3:29](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/converting-from-basic-to-dynamic-disks?u=76281980&t=209)** So this is greenish brown color is what represents a simple volume and that is labeled down in the bottom.
>
> **[3:35](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/converting-from-basic-to-dynamic-disks?u=76281980&t=215)** All right.
>
> **[3:36](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/converting-from-basic-to-dynamic-disks?u=76281980&t=216)** And so now that we've converted these disk to dynamic, we have the ability to work with all the various volume types.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this, (1), else, (1), require (1), this. (1)
> **UI Navigation:** click on (2)
> **Definitions:** in other words (1), means that (1)
> **Warnings:** warning (2)
> **Speakers:** - [instructor] (1)

#### Creating a spanned volume
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-spanned-volume?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-spanned-volume?u=76281980&t=1)** - [Instructor] So let's take a look at how we can create and what it means to create something called a span volume.
>
> **[0:07](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-spanned-volume?u=76281980&t=7)** So over here on index management on this one, I'm going to go to this unallocated space and I'm going to right-click and I'm going to select new spanned volume.
>
> **[0:21](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-spanned-volume?u=76281980&t=21)** You get the wizard and it does tell you what a spanned volume is but I'm going to go ahead and tell you, so I'm going to click on next.
>
> **[0:26](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-spanned-volume?u=76281980&t=26)** What it is is it's a way of deciding, hey, I want to use space from more than one disc to create a larger volume.
>
> **[0:38](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-spanned-volume?u=76281980&t=38)** Okay, so I'm going to show you that if I were to take disk two and disk three, and I'm going to go ahead and again, I'll just put 20,000.
>
> **[0:49](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-spanned-volume?u=76281980&t=49)** I'm going to put 20,000 on disk one, and I'm going to put 30,000 on disk two, and I'm going to put 40,000 on disk three.
>
> **[1:01](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-spanned-volume?u=76281980&t=61)** Okay, I'm just kind of showing you, you don't need to have the same amount.
>
> **[1:05](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-spanned-volume?u=76281980&t=65)** You're just arbitrarily, you're taking free space from different disks and there's nothing special here.
>
> **[1:11](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-spanned-volume?u=76281980&t=71)** If you've ever heard of raid where you're actually setting up like fault tolerant solutions.
>
> **[1:16](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-spanned-volume?u=76281980&t=76)** This is not that.
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-spanned-volume?u=76281980&t=78)** You are not setting up any form of rate here.
>
> **[1:20](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-spanned-volume?u=76281980&t=80)** You are literally just taking some space from multiple physical disks and making it look like a single larger volume to the user.
>
> **[1:30](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-spanned-volume?u=76281980&t=90)** Okay, so this 20, 30, and 40 is going to be a total of 90,000 meg for this overall volume.
>
> **[1:38](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-spanned-volume?u=76281980&t=98)** So I'm going to click on next.
>
> **[1:39](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-spanned-volume?u=76281980&t=99)** I'll give it, we'll go ahead and assign it the next letter G that's fine.
>
> **[1:44](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-spanned-volume?u=76281980&t=104)** And we'll go ahead and format it NTFS.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-spanned-volume?u=76281980&t=107)** Next and finish.
>
> **[1:50](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-spanned-volume?u=76281980&t=110)** And now you'll see here, we have a new color it's to my eyes, it's a shade of purple or violet, something in that range.
>
> **[2:00](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-spanned-volume?u=76281980&t=120)** You'll notice down at the bottom, in the legend, it says that that represents a spanned volume.
>
> **[2:04](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-spanned-volume?u=76281980&t=124)** So, whereas here I can see that there is around 20 gig used here and around 30 gig used on disk two and around 40 gig used on disk three.
>
> **[2:16](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-spanned-volume?u=76281980&t=136)** Up at the top, you'll notice volume G it's a spanned volume and it shows that it is basically a 90 gig volume.
>
> **[2:27](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-spanned-volume?u=76281980&t=147)** Okay, just as we were planning on.
>
> **[2:29](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-spanned-volume?u=76281980&t=149)** And if I was to go into Windows Explorer, so let's actually just do that, let's just go ahead and open up Windows Explorer.
>
> **[2:37](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-spanned-volume?u=76281980&t=157)** And if I go to my G drive here, you'll notice the G drive.
>
> **[2:42](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-spanned-volume?u=76281980&t=162)** This is what it looks like to the users.
>
> **[2:44](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-spanned-volume?u=76281980&t=164)** They just see a drive that looks like it is a again, I know it's just short of the 90 gig because you know, I'm not doing multiples of 1,024, but basically it looks like a single 90 gig drive, even though what's actually happening is it's taking up three physical disks, okay?
>
> **[3:03](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-spanned-volume?u=76281980&t=183)** It's taking up space on those disks in order to form that spanned volume.
>
> **[3:07](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-spanned-volume?u=76281980&t=187)** All right, so that's how you can use a spanned volume to create a larger space.
>
> **[3:14](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-spanned-volume?u=76281980&t=194)** Sometimes what's nothing more than kind of like the leftover space from multiple other drives.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (2), click on (2), right-click (1)
> **Code Keywords:** let (3)
> **Env Vars:** ntfs (1)
> **Definitions:** is a  (1)
> **Analogies:** kind of like (1)
> **Speakers:** - [instructor] (1)

#### Creating a striped volume
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=1)** - [Instructor] All right.
>
> **[0:01](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=1)** So let's now move into some of our actual RAID types of volumes.
>
> **[0:09](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=9)** I'd mentioned that in the previous video, and I said a spanned volume was not RAID.
>
> **[0:14](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=14)** But we do have three different types of software RAID that we can implement here.
>
> **[0:19](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=19)** So if I right click on the unallocated space, I could really pick any unallocated space, but I'll take disk one here and right click just to show you, we have our striped volume, which is RAID level 0.
>
> **[0:30](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=30)** We have our mirrored volume, which is RAID level 1, and RAID 5 volume, well, which of course is RAID 5.
>
> **[0:36](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=36)** It's called distributed parity.
>
> **[0:39](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=39)** So for now let's take a look at how to do a striped volume.
>
> **[0:43](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=43)** And this is again, what would be RAID 0.
>
> **[0:46](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=46)** Now you'll see here it says, a striped volume stores data in two or more desks, okay, so you need at least two desks in order to do a Stripe, but you can do more.
>
> **[0:56](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=56)** So I'm going to click on next.
>
> **[0:58](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=58)** And so we have disk one right now.
>
> **[1:01](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=61)** We have to at least add another disk so I'll add this two.
>
> **[1:04](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=64)** And in fact, just to show you, I will do disk three.
>
> **[1:08](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=68)** And I'm going to go ahead and let's just do 20,000.
>
> **[1:11](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=71)** We're just going to stay consistent with that amount.
>
> **[1:13](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=73)** You'll notice that this time, unlike the spanned volume, where I could click on each disk, one at a time.
>
> **[1:19](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=79)** This one, whatever amount you put in it is going to do the exact same amount on all three disks.
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=87)** Now, why is that?
>
> **[1:28](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=88)** Well, what a striped volume is, is you are designating an equal amount of space on two or more disks.
>
> **[1:36](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=96)** In this case, we're doing three disks, and you are going to stripe the data across all three disks.
>
> **[1:46](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=106)** So yes, the three, 20,000 megabytes spaces does total, 60,000 total space, okay.
>
> **[1:57](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=117)** Let me go ahead and click on next.
>
> **[1:58](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=118)** Just let me finish this and then I'll show you what it really means.
>
> **[2:01](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=121)** Next, give it a drive letter, next, format.
>
> **[2:06](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=126)** Next, finish.
>
> **[2:08](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=128)** Okay, you'll notice the wizard is almost identical, once you get past like what type of volume it is and set it up.
>
> **[2:13](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=133)** But we now have a new color.
>
> **[2:14](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=134)** It's kind of like a color of teal.
>
> **[2:16](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=136)** It looks like to me, a greenish color.
>
> **[2:19](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=139)** New volume H, you'll see it's 20, 20 and 20.
>
> **[2:22](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=142)** Up at the top new volume H, you'll notice the 60.
>
> **[2:26](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=146)** Down at the bottom, you'll see, there's a legend.
>
> **[2:28](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=148)** That's for a striped volume.
>
> **[2:29](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=149)** Here's how this is going to work.
>
> **[2:30](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=150)** This is the purpose behind doing this.
>
> **[2:34](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=154)** When data is written to this particular volume that we've created, it's going to write a block of data on disk one, then a block of data on disk two, then a block of data on disk three.
>
> **[2:50](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=170)** And then one on one, two, three.
>
> **[2:52](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=172)** One, two, three.
>
> **[2:53](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=173)** One, two, three.
>
> **[2:53](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=173)** It's going to keep striping the data.
>
> **[2:56](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=176)** Now, the reason that it's doing this, the reason is striping this information that way, is for performance reasons, specifically, and you know, more specifically, your RAID performance.
>
> **[3:11](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=191)** Okay, that's what RAID level 0 gives you.
>
> **[3:12](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=192)** It actually doesn't give you any level of fault tolerance, but it gives you RAID, improved RAID performance.
>
> **[3:19](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=199)** And the reason why is because if these were three physical disk, three separate physical disks, So again, I know we're in a virtual environment, but let's say we were in a physical environment where we have three physical disks.
>
> **[3:32](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=212)** Well, the, you could be reading simultaneously from all three disks at once.
>
> **[3:38](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=218)** So that means you could read your data theoretically in the area of about three times as fast as you could read it if it was just on a single drive.
>
> **[3:47](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=227)** Now I do want to also point out how this is different than the spanned volume.
>
> **[3:53](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=233)** The spanned volume that we had created, where there was 20 gig here, 30 gig here and 40 gig here.
>
> **[3:58](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=238)** Okay, first of all, again, the Stripe, you have to have exact same amount and the reasons cause you're going to Stripe the data.
>
> **[4:04](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=244)** The spanned volume, you're not striping the data.
>
> **[4:08](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=248)** The data will just be written wherever the first available space is.
>
> **[4:12](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=252)** It may be written on disc one.
>
> **[4:14](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=254)** It may be written on this two.
>
> **[4:15](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=255)** It may be written on does three.
>
> **[4:16](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=256)** It will not Stripe the data across multiple disks.
>
> **[4:21](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=261)** That's what disk striping does.
>
> **[4:24](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=264)** And so spanned volumes will not give you the performance increase, a striped volume will.
>
> **[4:30](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=270)** All right.
>
> **[4:30](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-striped-volume?u=76281980&t=270)** So that's how we can create a striped volume through disk management.

> [!info]- Semantic Content
>
> **Env Vars:** raid (12)
> **Code Keywords:** let (6), case, (1), this. (1), this, (1)
> **UI Navigation:** click on (4)
> **Cross-References:** previous video (1)
> **Analogies:** kind of like (1)
> **Speakers:** - [instructor] (1)

#### Creating a mirrored volume
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=1)** - [Instructor] So now let's look at the next form of RAID, which is RAID level one or a mirrored volume.
>
> **[0:07](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=7)** So again, I'm going to right click on some unallocated space.
>
> **[0:11](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=11)** And we've already seen simple, we've seen spanned, we've seen striped, so now we're going to do a mirrored volume.
>
> **[0:17](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=17)** Now, with a mirrored volume, it's going to tell you that it duplicates the data on two disks.
>
> **[0:22](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=22)** Now, unlike a striped volume where you need two or more disks, with a mirrored volume, you need exactly two disks to be used.
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=32)** So I'm going to click on next.
>
> **[0:34](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=34)** We already have disk one.
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=35)** I'm going to go ahead and I'm going to add disk two.
>
> **[0:37](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=37)** And again, this time, you'll notice that when I put a certain amount, and I'll just stick with that same 20,000 megabytes, when I do that 20,000 megabytes, you'll notice again, it puts 20,000 on both.
>
> **[0:50](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=50)** But there is something else I want you to notice.
>
> **[0:52](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=52)** And that is the total volume size is still only 20,000 megabytes.
>
> **[0:59](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=59)** It's not 40,000 megabytes.
>
> **[1:02](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=62)** We are using 40,000 megabytes worth of space.
>
> **[1:06](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=66)** But we're only going to get 20,000 megabytes of usable storage.
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=70)** And the reason why is because with a mirrored volume, this is set up for fault tolerance.
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=77)** Anything that is written to one disk, a duplicate copy is written to the other disk.
>
> **[1:22](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=82)** That way if one of your disks fails, the data's still available from the other disk.
>
> **[1:28](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=88)** So let me go ahead and click through this so we can see it.
>
> **[1:30](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=90)** Sign into drive letter.
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=92)** Go ahead and format it, NTFS.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=94)** And finish.
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=97)** And we now have a new color.
>
> **[1:38](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=98)** It's kind of a darkish red.
>
> **[1:41](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=101)** And you'll notice at the bottom that that legend says that's a mirrored volume.
>
> **[1:46](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=106)** You'll see that this is 20 gig used up here, 20 gig used on disk two, so disk one and disk two.
>
> **[1:53](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=113)** And up at the top, you'll notice that volume I is also still only 20 gig even though it's using up a total of 40 gig of disk space.
>
> **[2:03](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=123)** So again, everything that's written on disk one, it'll also because written on disk two.
>
> **[2:08](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=128)** So every time you save any data to your mirrored volume, that data's being saved in two different places.
>
> **[2:14](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=134)** And the reason for this is if either one of these disks was to fail, well, the data would still be available on the other disk, so that's the fault tolerance that we are looking for with RAID.
>
> **[2:28](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=148)** And this is actually pretty important on your servers.
>
> **[2:31](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=151)** Now, there is one other benefit I will mention to a mirrored volume.
>
> **[2:34](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=154)** And that is you do get improved read performance.
>
> **[2:38](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=158)** It's not as dramatic necessarily as the striped volume.
>
> **[2:43](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=163)** But because the data exists on both disks, and by the way, because it has to exist on both disks, the write performance, so the actual writing of the data when you save it, it can be a little slower.
>
> **[2:55](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=175)** But the reading of the data can be faster because it can pull half the data from one disk and half the data from the other disk as it's trying to pull all of the data.
>
> **[3:06](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=186)** So that is a benefit.
>
> **[3:08](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=188)** Beyond that, I will tell you that again, fault tolerance is important on your servers because you don't want to have a loss of data being stored out on your servers because of a hardware failure.
>
> **[3:22](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=202)** So this is a very common thing to do.
>
> **[3:25](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=205)** I will tell you, it is very often done through what's called hardware RAID where you have an actual hardware RAID controller that is doing this but that can cost much more money.
>
> **[3:36](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=216)** If you are a smaller environment, it's a lot easier and simpler to go ahead and do this using software volumes within Windows Server 2022.
>
> **[3:46](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-mirrored-volume?u=76281980&t=226)** And that is how we create the mirrored volume in disk management.

> [!info]- Semantic Content
>
> **Env Vars:** raid (5), ntfs (1)
> **Code Keywords:** let (2)
> **Definitions:** is a  (2)
> **UI Navigation:** click on (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Creating a RAID 5 Volume
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=0)** - [Instructor] And finally, the last type of volume that I'm going to show you is a RAID-5 volume or what's called disk striping with parity.
>
> **[0:11](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=11)** So I will again click on some of my unallocated space.
>
> **[0:16](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=16)** And the very last one listed here is a new RAID-5 volume.
>
> **[0:21](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=21)** Now, RAID-5 says that it's going to store data in stripes, so it's disk striping, but you remember that disk striping said it had to be two or more disks?
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=32)** Well, this one says it's going to be three or more disks.
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=35)** You have to have at least three disks, if you don't, you cannot do RAID-5.
>
> **[0:40](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=40)** Now, I'm going to go through, and we're going to create this and then I will kind of give you the rest of the explanation as to what exactly this type of volume does.
>
> **[0:48](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=48)** So I'm going to click on next.
>
> **[0:50](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=50)** And we need to use all three available disks 'cause you have to have at least three.
>
> **[0:56](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=56)** You could do more, if we had more disks, we could do it, and there are benefits if you're going to do RAID-5 to doing more disks.
>
> **[1:03](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=63)** Matter of face, the more disks you have, the bigger performance benefit you'll have.
>
> **[1:07](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=67)** But anyway, let me take a look here.
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=70)** As far as the amount of space, we'll again stick with our 20,000 'cause I want to show you something.
>
> **[1:16](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=76)** I want to show that I selected 20,000.
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=78)** It automatically says all three disks are going to all get 20,000 of space that's used up.
>
> **[1:25](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=85)** And so 20,000 plus 20,000 plus 20,000 would be 60,000, right?
>
> **[1:30](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=90)** Well, look what happens here.
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=92)** It says that the total size will be 40,000.
>
> **[1:35](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=95)** Now, why is that?
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=97)** The reason is because this is what's known as disk striping with parity.
>
> **[1:42](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=102)** So the data is going to be striped similarly to the way a disk striping volume was created but the difference is as it stripes the data across disk one, two and three, one of the blocks is going to be what's called a data recovery block, okay?
>
> **[2:03](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=123)** So let me go ahead and click through here.
>
> **[2:05](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=125)** I don't want to illustrate it on this screen.
>
> **[2:06](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=126)** I want to illustrate it on the bigger screen.
>
> **[2:09](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=129)** So let me go ahead and just click on next.
>
> **[2:11](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=131)** And next.
>
> **[2:13](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=133)** And next.
>
> **[2:14](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=134)** And finish.
>
> **[2:16](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=136)** And now we have our last of all the different colors.
>
> **[2:19](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=139)** It's kind of a weird fluorescent light blue or aqua or something like that.
>
> **[2:25](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=145)** And then down at the bottom, it says it's a RAID-5 volume.
>
> **[2:28](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=148)** You'll notice that it's going through a process.
>
> **[2:30](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=150)** It's not actually done yet.
>
> **[2:31](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=151)** It's doing a resyncing.
>
> **[2:33](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=153)** It's just a process that it has to go through to set up the full RAID-5 system.
>
> **[2:40](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=160)** But while it's doing that, let me explain here.
>
> **[2:43](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=163)** I have 20 gig, 20 gig and 20 gig.
>
> **[2:46](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=166)** But up here, volume J, RAID-5, it's only 40 gig.
>
> **[2:51](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=171)** We already talked about that.
>
> **[2:52](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=172)** Now, here's what happens when data is stored.
>
> **[2:55](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=175)** What'll happen is it'll put a block of data here on disk one, a block of data here on disk two, and then on disk three, it'll put a recovery block.
>
> **[3:06](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=186)** Now, it'll actually, it'll then rotate that recovery block.
>
> **[3:09](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=189)** Select the next stripe.
>
> **[3:11](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=191)** It'll put some data on disk one.
>
> **[3:13](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=193)** It'll put the recovery block on disk two.
>
> **[3:16](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=196)** And then put more data on disk three.
>
> **[3:19](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=199)** And then on the next round, it'll do a recovery block on disk one and then data on disk two and data on disk three.
>
> **[3:28](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=208)** And then it'll start that process all over again where it'll do data on disk one, data on disk two, recovery block on disk three.
>
> **[3:35](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=215)** I'm hoping I actually said that all correctly.
>
> **[3:38](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=218)** But I think you get the idea.
>
> **[3:40](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=220)** The general idea is that you have two of the drives being used with actual data and the third drive being used for recovery information.
>
> **[3:52](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=232)** But again, it's not like literally one drive is used for data, the second drive for data and the third one's all recovery blocks.
>
> **[4:00](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=240)** No, it rotates what goes where.
>
> **[4:03](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=243)** And the reason it does this and the reason RAID-5 is so popular is because now you get some of the benefit of striping, which is the read performance because your data exists on more than one volume, but at the same time, you can have a disk space utilization benefit that's better than disk mirroring.
>
> **[4:25](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=265)** Now, right now, because I have three disks, and one of 'em is reserved for the parity block or the recovery block, well, now you end up with like 66.67% or 2/3 actual utilization.
>
> **[4:43](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=283)** I'm using up 60 gig of hard drive space to get 40 gig of storage.
>
> **[4:46](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=286)** But remember I said there was a benefit of if you had more disks available?
>
> **[4:52](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=292)** Let's say we had five disks that we set up in this environment.
>
> **[4:56](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=296)** Well, now you'd end up where you have five disks and four of them would have data and one would be for parity information.
>
> **[5:04](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=304)** So that means you get 80% disk space utilization.
>
> **[5:07](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=307)** So in the example of where I did 20 gig, 20 gig, 20 gig, if I did that on five disks, I would be using 100 gig of disk space to get an 80-gig hard drive, the actual 80 gigs of storage.
>
> **[5:21](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=321)** So that's why RAID-5 can be very popular is again, you get the performance benefit when reading the data 'cause you're pulling it off of the stripes from the different drives.
>
> **[5:33](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=333)** And then you also get the fault tolerance so that if anyone of these disks was to fail, using those parity blocks, it could recreate the data and it would not be lost.
>
> **[5:44](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/creating-a-raid-5-volume?u=76281980&t=344)** So that is pretty much how you create a RAID-5 volume in disk management and that also wraps up how we can create all the various different types of volumes in Windows Server 2022.

> [!info]- Semantic Content
>
> **Env Vars:** raid (11)
> **Code Keywords:** let (5), finally, (1)
> **UI Navigation:** click on (3), select the (1)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (2)
> **Versions:** 66.67 (1)
> **Speakers:** - [instructor] (1)


### 4. Configuring Server Roles and Features

> [↑ Back to Table of Contents](#table-of-contents)

#### Installing roles and features
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=1)** - [Instructor] Once you have Windows Server 2022 installed, and you have it fully configured, as far as the computer name, IP address.
>
> **[0:11](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=11)** Basic configuration settings.
>
> **[0:13](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=13)** The next thing to do would be to go ahead and add any roles or features which would establish this server's functionality in your network.
>
> **[0:24](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=24)** In fact, here, we're looking at the Server Manager and you'll notice on the dashboard, there's a big one next to configure this local server.
>
> **[0:31](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=31)** And we did that already.
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=32)** We went in and we configured some basic settings, like computer name and IP address.
>
> **[0:38](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=38)** Notice what number two is.
>
> **[0:39](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=39)** Add roles and features.
>
> **[0:41](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=41)** So let's do that.
>
> **[0:42](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=42)** Let's click on Add roles and features.
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=45)** Now you get a before you begin screen here, because basically, what it's telling you on this particular screen is that it's saying, hey, you're about to, I'm going to change, I'm going to paraphrase what this means here.
>
> **[0:56](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=56)** It says, you are about to put some kind of significant service onto this server, and it's going to perform a significant function in your network.
>
> **[1:06](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=66)** So before you do that, make sure that your system is secure and ready for networking.
>
> **[1:12](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=72)** And they have three bullets here.
>
> **[1:14](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=74)** They say, make sure your administrator account has a strong password, your networking settings have been configured, and you have the latest and greatest security updates.
>
> **[1:21](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=81)** That's what this screen is telling you.
>
> **[1:23](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=83)** You don't have to read this every time.
>
> **[1:24](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=84)** You could click the box to say skip this page by default.
>
> **[1:28](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=88)** So I'm going to go ahead and I'm going to click on Next.
>
> **[1:31](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=91)** Now we need to go ahead and select the installation type.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=94)** We have role based or feature based installation, which is literally what we're going to do.
>
> **[1:38](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=98)** We're going to configure a role and/or feature here.
>
> **[1:42](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=102)** Or we could do a remote desktop services installation if we were working in a virtual desktop infrastructure.
>
> **[1:49](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=109)** So right now, what we're doing is we're just doing a role or feature based installation.
>
> **[1:52](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=112)** So I'll click Next.
>
> **[1:54](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=114)** I now get to select what server we want to perform this action on.
>
> **[1:59](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=119)** Right now, there are no other servers that have been designated in the server pool for this particular server manager.
>
> **[2:05](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=125)** I am going to show you how you can add another server in another video, but for now, I only have the one.
>
> **[2:10](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=130)** So I am going to select server one and click Next.
>
> **[2:13](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=133)** And now I get to decide, well, what role do I want to be?
>
> **[2:17](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=137)** So an example might be here where it says active directory domain services.
>
> **[2:21](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=141)** Let's say I want to become a domain controller for my environment.
>
> **[2:28](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=148)** Well, then I go ahead and I check the box next to Active Directory Domain Services.
>
> **[2:32](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=152)** Now I haven't checked it yet, because I want you to see something when I do.
>
> **[2:36](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=156)** Something's going to happen.
>
> **[2:37](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=157)** A pop-up window is going to come up.
>
> **[2:39](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=159)** So I'm going to check the box.
>
> **[2:40](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=160)** And what this pop-up window is saying is it's saying, hey, there are other features that are required in order to be a domain controller.
>
> **[2:48](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=168)** Now, in the old days, I get excited about this 'cause I've been doing this long enough.
>
> **[2:52](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=172)** But in the old days, what it used to do is it used to say, eh, you can't install because you have to have these other things already installed and put in place first.
>
> **[3:01](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=181)** You have these prerequisites.
>
> **[3:03](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=183)** Well, now, if there's any other prerequisites, any other features needed, guess what?
>
> **[3:07](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=187)** You just simply click Add Features and it will add those additional features that are necessary.
>
> **[3:13](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=193)** So I'm going to go ahead and I'm going to click on Next.
>
> **[3:17](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=197)** And I do get the option now for any additional features that I want to add.
>
> **[3:22](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=202)** If there are any features beyond what we're doing with the Active Directory features.
>
> **[3:27](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=207)** I don't have any, so we're going to leave that alone and click Next.
>
> **[3:31](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=211)** And then, here it tells you a little bit about what Active Directory Domain Services is.
>
> **[3:35](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=215)** And you'll even see that they're going to push you towards Azure Active Directory, which is a separate online service.
>
> **[3:42](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=222)** And they give you some links to learn about that, if you want.
>
> **[3:46](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=226)** I'm going to click on Next.
>
> **[3:48](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=228)** And we now are pretty much in our confirmation of what we're going to do.
>
> **[3:53](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=233)** We're going to install whatever roles.
>
> **[3:56](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=236)** We can actually check the box if we want to, to restart the destination server automatically, if required.
>
> **[4:01](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=241)** So I'll actually check that box, just so you can see, it's going to say, hey, if a reboot's required, it's going to happen automatically, there's going to be no notification.
>
> **[4:09](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=249)** Are you sure?
>
> **[4:10](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=250)** And the reason they're warning you is because somebody else might be connected to this server and they're going to be kicked off as part of this process.
>
> **[4:17](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=257)** So they want to make sure you know what you're doing.
>
> **[4:18](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=258)** So I'll click Yes.
>
> **[4:20](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=260)** And then I'm going to click Install.
>
> **[4:23](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=263)** And now it's going to go through the installation process and get that role installed.
>
> **[4:35](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=275)** Now you'll notice that during the installation process, there is a Close button that does appear, where you could go ahead and close this window.
>
> **[4:44](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=284)** It won't hurt anything, but I'm going to actually leave it open because I want to go ahead and watch this process go all the way to the end until it tells me that the installation is complete.
>
> **[4:56](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=296)** But if you were to close the window, there is a little flag up here in the Server Manager environment.
>
> **[5:03](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=303)** And then that flag, it's a notification where it would then report to you there, if there was a problem or if it installed in its entirety, and so on and so forth.
>
> **[5:14](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=314)** So we're just going to go ahead and let this process finish.
>
> **[5:19](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=319)** And the bar has gone completely across the screen, and you'll notice that it does say installation has succeeded on server one.
>
> **[5:28](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-and-features?u=76281980&t=328)** It does say that there is some configuration required, but I am going to show you how to do that in another video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (1), default. (1), type. (1)
> **Prerequisites:** install (3), configure (2), before you begin (1)
> **UI Navigation:** click on (4), select the (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (3)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Configuring a role
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=0)** - [Instructor] Now some roles that you will install will require some additional configuration in order for the role to have full functionality.
>
> **[0:12](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=12)** And so, the role that we installed, which is Active Directory Domain Services, you see here, it says configuration required.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=18)** And what that additional configuration is, is it says additional steps are required to make this machine a domain controller.
>
> **[0:25](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=25)** And there's an option here for promote this server to a domain controller.
>
> **[0:28](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=28)** It's an actual link here.
>
> **[0:30](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=30)** Now, one thing real quick, before I click on that link, I want to show you that, if we closed this window, then you'll notice that the notification has a little warning up here.
>
> **[0:41](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=41)** If I click on that here, you can see there's a post-deployment configuration needed.
>
> **[0:46](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=46)** Promote this server to a domain controller.
>
> **[0:48](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=48)** And it also shows you that the feature installation actually succeeded on server one.
>
> **[0:54](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=54)** So it shows you that succeeded.
>
> **[0:55](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=55)** Here's your post-deployment configuration.
>
> **[0:57](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=57)** So let's click on it and do this.
>
> **[1:00](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=60)** Now I'm going to kind of go through this fairly quickly.
>
> **[1:03](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=63)** And the reason is because the purpose of this is not to teach you all about how to become a domain controller.
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=70)** I just want to show you that sometimes you have these additional wizards.
>
> **[1:15](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=75)** So, like it says.
>
> **[1:16](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=76)** What type of deployment is this going to be?
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=78)** Well, I have no existing domain, so this is going to be a new forest.
>
> **[1:23](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=83)** And we're going to go ahead and call it landonhotel.local.
>
> **[1:29](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=89)** Next.
>
> **[1:31](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=91)** Now it's going to ask me about our forest and domain functional levels.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=94)** Now you'll notice, it says Windows Server 2016.
>
> **[1:36](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=96)** And even if I click the drop down, there is nothing newer than Windows Server 2016, because this was something that they used to do.
>
> **[1:45](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=105)** And they've eliminated, with both Windows Server 2019, and now with Windows Server 2022, but they leave it here as an option, so that if you have older domain controllers.
>
> **[1:58](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=118)** So let's say we're still running an old domain controller with Windows Server 2008.
>
> **[2:02](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=122)** Then we would have to be in a functional level to support that version.
>
> **[2:07](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=127)** So that's what that's for.
>
> **[2:08](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=128)** I don't want to go into a whole lot of detail there.
>
> **[2:10](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=130)** I just want to kind of make a quick mention of that.
>
> **[2:13](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=133)** What domain controller capabilities?
>
> **[2:15](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=135)** We'll say, we'll make it a DNS server and a global catalog server.
>
> **[2:18](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=138)** We're going to go in and put a recovery password in here.
>
> **[2:25](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=145)** All right, next.
>
> **[2:27](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=147)** Now you get a warning here, talking about the delegation for the DNS server.
>
> **[2:31](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=151)** This is not a problem.
>
> **[2:32](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=152)** This is something that basically has to do with the fact that we are at a root level, and there's nowhere to create a delegation.
>
> **[2:39](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=159)** This is okay.
>
> **[2:41](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=161)** So, but this I'm just, again, I don't want to teach you all about how to become a domain controller.
>
> **[2:48](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=168)** I will do that in another course on Active Directory, but I just want to show you that, as we're going through the wizard, all the different things that you may need to know to go through and do this configuration.
>
> **[3:00](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=180)** So I'm going to go ahead and click on Next.
>
> **[3:01](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=181)** It's now going to look at my domain name and take the first 15 characters and make it the NetBIOS name, as long as it's not being used on the network already, which it's not.
>
> **[3:13](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=193)** So Landon Hotel is what it is.
>
> **[3:15](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=195)** I'm going to keep it, click Next.
>
> **[3:18](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=198)** It now wants to know the paths of where we're going to store stuff.
>
> **[3:21](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=201)** I'm going to take the defaults.
>
> **[3:23](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=203)** Next.
>
> **[3:24](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=204)** And it has a big review of everything that we're going to be doing.
>
> **[3:28](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=208)** So I will click on Next and it's going to go through a prerequisite check.
>
> **[3:32](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=212)** And when it goes through this prerequisite check, it's actually going to look alarming.
>
> **[3:35](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=215)** And again, I don't want to go into a whole lot of detail about creating a domain controller, but I happen to know that this particular role has a lot of warnings.
>
> **[3:45](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=225)** They're going to give you all these different warnings here, and I'm not even going to go through them.
>
> **[3:49](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=229)** What I want you to realize though, is that they are warnings.
>
> **[3:52](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=232)** They're not errors.
>
> **[3:53](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=233)** And you know how I know this?
>
> **[3:55](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=235)** Because at the very top, there's a green check mark that says all prerequisite checks passed successfully.
>
> **[4:02](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=242)** There are warnings.
>
> **[4:04](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=244)** But, in the end, it says that the prerequisites, none of these are actual prerequisites.
>
> **[4:08](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=248)** They just want to make sure that you're aware that something is going to be in place if you move forward with this.
>
> **[4:15](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=255)** So at this point, I could go ahead and click Install and it will go through this whole process.
>
> **[4:23](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=263)** And it is actually quite a lengthy process.
>
> **[4:26](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=266)** So it's going to go through and it's actually doing all the prerequisites again, and then it's going to install everything.
>
> **[4:32](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=272)** It's going to configure everything.
>
> **[4:34](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=274)** It will, most likely, in this case, involve a couple reboots, et cetera, et cetera.
>
> **[4:40](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=280)** And I'm not going to worry about it.
>
> **[4:41](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=281)** 'Cause I'm not here to show you how to actually set up a domain controller.
>
> **[4:45](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=285)** I just wanted you to see that there are post-configuration steps that are involved when it comes to installing a role on your server.
>
> **[4:53](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/configuring-a-role?u=76281980&t=293)** So we'll leave it here, and that's it for this particular lesson.

> [!info]- Semantic Content
>
> **Prerequisites:** install (3), prerequisite (3), configure (1), set up (1)
> **Code Keywords:** let (2), this. (2), require (1), for. (1), case, (1)
> **CLI Commands:** make (5)
> **UI Navigation:** click on (5)
> **Env Vars:** dns (2)
> **Warnings:** warning (2)
> **Speakers:** - [instructor] (1)

#### Installing roles on Server Core
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=1)** - [Illustrator] So now let's talk a little bit about adding a Role or Feature unto a server core installation of windows server.
>
> **[0:10](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=10)** You'll see here that it's not quite as obvious as it was through the desktop experience right here in the S config utility.
>
> **[0:16](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=16)** There's no options specifically for, you know, install a roll or a feature.
>
> **[0:21](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=21)** So what are the options available?
>
> **[0:24](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=24)** Well, one option would be to go ahead and exit out to PowerShell, and then through PowerShell scripting, we can go ahead and install the role or feature that way.
>
> **[0:33](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=33)** Okay, and there's absolutely nothing wrong with that many administrators do take that approach, especially if you're working with a lot of server core machines, because you may have the script already pre-written and already put into a file.
>
> **[0:47](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=47)** And then you just go ahead and connect to that shared file.
>
> **[0:49](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=49)** And you're on your way.
>
> **[0:51](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=51)** But if you are looking to do this more manually, PowerShell can be a little bit, it can be a little confusing, especially for a smaller business administrator.
>
> **[1:02](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=62)** All right.
>
> **[1:03](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=63)** So what we can do to simplify this is we can actually do this remotely using believe it or not the Actual Server Manager on our other server.
>
> **[1:14](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=74)** Now, before I go and show you this, I do want to point out.
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=77)** And this is just for the sake of a few who are following along, there are additional steps that I took in the background and those steps involve basically changing my networking settings so that I'm pointing to the correct DNS servers and whatnot to join the domain.
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=92)** And then you can see here at the top trace number one domain of work group.
>
> **[1:35](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=95)** We are a member now of the land and hotel that local domain.
>
> **[1:40](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=100)** Okay.
>
> **[1:41](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=101)** And so this is significant to be part of the domain so that you can have the appropriate permissions to do remote management.
>
> **[1:48](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=108)** If you need more detail on how that's done, please go see active, you know, any of our active directory courses to learn about that.
>
> **[1:57](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=117)** All right.
>
> **[1:57](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=117)** So now that we know how this has all been configured, let me jump over to our other server.
>
> **[2:06](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=126)** Okay.
>
> **[2:06](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=126)** So here in the server manager on our other server, what I'm going to do is I'm going to go up to the top, to the manage menu and I'm going to select add servers.
>
> **[2:17](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=137)** Okay, so I'm going to add a deck, additional servers that I want to manage.
>
> **[2:20](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=140)** And then you'll see here in active directory in the land and hotel domain, I'm going to go ahead.
>
> **[2:25](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=145)** I'm just going to put in server.
>
> **[2:25](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=145)** I'm not going to put in the full name and you'll see here at find server one and to find server core.
>
> **[2:31](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=151)** So I'm going to go ahead and I'm going to take server core one, and I'm going to add that and click okay.
>
> **[2:38](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=158)** Okay.
>
> **[2:38](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=158)** Now you'll see here that it says there are two servers, right?
>
> **[2:42](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=162)** It says all servers are two servers that we can manage.
>
> **[2:45](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=165)** And now if I click on add roles and features, I get them before you begin screen click on next, it's going to be a role or feature based installation next.
>
> **[2:55](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=175)** Now it says you can select a server from the server pool, right?
>
> **[2:59](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=179)** We saw this already previously when we installed the role on this server.
>
> **[3:04](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=184)** But if, but you notice, now I have the ability to say no, no, I want to install something on the server core one and then click on next.
>
> **[3:13](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=193)** And now I can go through the rest of the process to choose any roles or features that I want to install on that particular server.
>
> **[3:22](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=202)** I'm going to actually stop here.
>
> **[3:24](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=204)** I'm not going to add anything in particular, because I just wanted you to see that we had that ability and just how easy that was to do.
>
> **[3:35](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=215)** All right.
>
> **[3:36](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=216)** So I'm going to go ahead and cancel out of here.
>
> **[3:38](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=218)** And I just want you to keep in mind that if you're ever, you know going to use the server core installation, which is recommended to save on resources, well, then you're going to have to think of a way, you know, how you want to go about installing roles and features on that particular machine.
>
> **[3:54](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=234)** And it's either going to be through windows PowerShell, or remotely here through the server manager.
>
> **[4:01](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/installing-roles-on-server-core?u=76281980&t=241)** Those are your options.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), for, (1), this, (1), if, (1)
> **Prerequisites:** install (4), before you begin (1)
> **Tools:** powershell (4)
> **UI Navigation:** click on (3)
> **CLI Commands:** find (2)
> **Env Vars:** dns (1)
> **Best Practices:** recommended (1)
> **Warnings:** keep in mind (1)

#### Managing features on demand
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=1)** - [Instructor] Now, one of the interesting things that is kind of taken for granted in today's world but again, for those of us that have been this for a lot of years, we know that wasn't always this way and that was when you go through the process of installing the roles and features, you may or may not have noticed that there was a little bit of a simplicity when it came to like locating the files or the data necessary to be able to install those roles and features.
>
> **[0:31](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=31)** In the old days, it used to prompt you for installation media or to have to point out to some network share or it would say hey, you have to install this, you have to install.
>
> **[0:41](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=41)** Well, what Microsoft has done is they have made it that everything is all built in and available, all right?
>
> **[0:48](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=48)** And where there is when we install Windows Server, I just want to show you, I'm going to go to Windows Explorer here on my server, and I'm going to go to the C drive and I'm going to go to the Windows directory, and I'm going to scroll all the way down to the last folder, which says Windows SxS, which stands for Windows Side by Side.
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=70)** And I'm going to go to the properties of that folder, and you're going to see that it's going to be counting up and counting up and counting up.
>
> **[1:16](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=76)** It's going to be over seven gig of space.
>
> **[1:19](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=79)** I mean, it's almost two DVDs worth of space by the time everything has been extracted.
>
> **[1:24](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=84)** And what that folder is is that's all the various data that is needed in order to install the roles and features without having to go out there and find that data.
>
> **[1:38](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=98)** It's already on the machine.
>
> **[1:40](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=100)** So I'm going to show you how you can kind of clean up the machine a little bit after you have configured all the roles and features.
>
> **[1:51](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=111)** I'm going to show you how you can go through and you can clean out some of that extra data that you don't need to have there.
>
> **[1:56](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=116)** Now, for demonstration purposes, what I'm going to do is I'm actually going to jump over to our server core machine.
>
> **[2:03](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=123)** You don't have to.
>
> **[2:04](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=124)** But I'm just going to do it for this demonstration and I'll show you why.
>
> **[2:09](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=129)** The reason I want to go in the server core machine is because what we're going to do, we're going to do in PowerShell, all right?
>
> **[2:15](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=135)** And so this one's just nice and easy.
>
> **[2:17](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=137)** You hit 15, exit out to PowerShell.
>
> **[2:20](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=140)** Once you're in PowerShell, there are three steps, there's one long command but it's divided into three steps, and I'm going to show you each of the steps one at a time.
>
> **[2:28](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=148)** The first one is simply Get-WindowsFeature.
>
> **[2:35](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=155)** Here's Get-WindowsFeature.
>
> **[2:37](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=157)** And I'm going to hit Enter.
>
> **[2:38](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=158)** And it'll go through and it's going to show me all the various features that are available.
>
> **[2:43](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=163)** And then we're going to see where there's an X in some of the boxes here, which represent that something is installed, okay?
>
> **[2:52](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=172)** It's a feature that's been installed.
>
> **[2:55](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=175)** Now, I'm going to type in cls to go ahead and clear that out of the screen.
>
> **[2:59](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=179)** And I'll up arrow my way back to Get-WindowsFeature.
>
> **[3:02](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=182)** That's step one because now I'm going to put a space and then I'm going to pipe over to the second command where I'm going to say I want to get all the Windows features where the Object with a FilterScript, with a squiggly bracket, $_.Installed -Eq for equals, $False, end squiggly bracket.
>
> **[3:31](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=211)** And if I type this correctly, when I hit Enter, now it's going to go through and it's going to give me a list again but you'll notice there are no Xes in any of the boxes.
>
> **[3:41](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=221)** And the reason why is over on the right, you'll see everything, there's nowhere where it says it's installed, okay?
>
> **[3:47](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=227)** It's just stuff that is available, all right?
>
> **[3:50](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=230)** So let me go ahead and I'm going to clear that off the screen.
>
> **[3:53](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=233)** And I'll up arrow back to our command.
>
> **[3:56](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=236)** And I'm going to put a space with a third pipe.
>
> **[3:59](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=239)** So the pipe means kind of do this, then do that, and then that.
>
> **[4:03](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=243)** So we're saying Get-WindowsFeatures where those features are not installed, and then the command I'm going to put in is to Uninstall-WindowsFeature.
>
> **[4:17](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=257)** And I apologize, it kind of scrolls along the screen here.
>
> **[4:20](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=260)** I don't have enough space on my screen, okay?
>
> **[4:22](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=262)** So if you just follow it along, Uninstall-WindowsFeature.
>
> **[4:26](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=266)** Now, you might be thinking to yourself, wait a minute, these are the things that aren't installed.
>
> **[4:30](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=270)** Why are we uninstalling them?
>
> **[4:32](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=272)** The reason is 'cause I'm going to put -Remove, okay?
>
> **[4:37](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=277)** And that's where it's going to actually go through and remove that information so that it's not cluttering up my machine.
>
> **[4:45](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=285)** Now, I'm going to go ahead and hit Enter.
>
> **[4:47](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=287)** And if I did this correctly, it's going to go through a process that's actually going to take a bit longer than the other one.
>
> **[4:54](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=294)** It's probably going to take a few minutes to go through and actually remove all that excess data that's not needed.
>
> **[5:03](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=303)** I do want to emphasize, however, you do not want to do this until after you have configured this machine in its entirety.
>
> **[5:11](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=311)** Make sure all the roles, features and everything about this machine has been configured properly.
>
> **[5:16](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=316)** And the reason why is because if it's not, and then you want to do something more to the machine, well, you're going to have to either go find installation media or you could take that Windows Side by Side folder and you could put all that information out in a shared folder out on your network, and attempt to access it that way.
>
> **[5:37](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=337)** But the point is is that you're kind of putting yourself back to the old days of having to manually locate that information as opposed to having it automatically at your disposal by default.
>
> **[5:50](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=350)** All right, so we're not going to wait for this to finish.
>
> **[5:52](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=352)** It actually, when I've done it in the past on this machine, even with this being a newly installed machine, it still takes a good five, 10, 15 minutes to go through this process.
>
> **[6:03](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/managing-features-on-demand?u=76281980&t=363)** But that's how you can go ahead and you can manage those features on demand that Microsoft has made available to you.

> [!info]- Semantic Content
>
> **Prerequisites:** install (5)
> **Code Keywords:** this, (2), let (1), default. (1)
> **UI Navigation:** go to (4)
> **CLI Commands:** find (2), make (1)
> **Tools:** powershell (3)
> **Definitions:** stands for (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/next-steps?u=76281980&t=1)** - [Ed] I hope you've enjoyed learning about how to install and configure Windows Server 2022 as much as I've enjoyed showing you.
>
> **[0:09](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/next-steps?u=76281980&t=9)** If you want to learn more about Windows Server 2022, please explore our library as we have a number of courses out there to help you.
>
> **[0:17](https://www.linkedin.com/learning/windows-server-2022-installation-and-configuration/next-steps?u=76281980&t=17)** See you next time.

> [!info]- Semantic Content
>
> **Prerequisites:** install (1), configure (1)
> **Speakers:** - [ed] (1)


## Instructor

- [[Ed Liberman]]

## Skills Covered

- Windows System Administration
- Windows Server

## Path Context

### In [[Getting Started with Windows Server 2022]]
← [[Windows Server 2022 Essential Training]] | **2 of 4** | [[Windows Server 2022- Install and Configure Active Directory]] →

## Appears In

- [[Getting Started with Windows Server 2022]]

## Related Courses

_Courses sharing skills:_

- [[Windows Server 2022- DHCP and DNS]] — Windows Server
- [[Windows Server 2022- Install and Configure Active Directory]] — Windows Server
- [[Windows 10 Configure And Support Core Services]] — Windows System Administration
- [[Windows Server 2019- DHCP and DNS]] — Windows Server
- [[Windows Server 2019- Install and Configure Active Directory]] — Windows Server

---

[↑ Back to top](#)