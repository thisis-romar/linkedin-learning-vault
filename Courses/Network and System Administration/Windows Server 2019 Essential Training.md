---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: windows-server-2019-essential-training
url: "https://www.linkedin.com/learning/windows-server-2019-essential-training"
level: Intermediate
updated: 4/25/2024
learners: 38872
skills:
  - Windows Server
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQEFR5kAepYKVw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567114990426?e=2147483647&amp;v=beta&amp;t=C4CYHAn-e7QI0pQfNpYafbsRB50NUATJf_gsbn5RRMc"
linkedin_topic: Network and System Administration
learning_paths:
  - '[[Getting Started with Windows Server 2019]]'
next_courses:
  - '[[Windows Server 2019- Installation and Configuration]]'
path_nav: '[{"path":"Getting Started with Windows Server 2019","position":1,"total":4,"prev":null,"next":"Windows Server 2019- Installation and Configuration"}]'
path_count: 1
tags:
  - course
  - topic/network-and-system-administration
  - skill/windows-server
status: not-started
created: 2026-04-21
---

![Windows Server 2019 Essential Training](https://media.licdn.com/dms/image/v2/C4E0DAQEFR5kAepYKVw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567114990426?e=2147483647&amp;v=beta&amp;t=C4CYHAn-e7QI0pQfNpYafbsRB50NUATJf_gsbn5RRMc)

# Windows Server 2019 Essential Training

> Learn the essentials you need to install and administer Windows Server 2019. Discover how to choose your server roles; set up different server environments, including hyperconverged infrastructure; and configure storage, identity and access, and virtualization. Instructor Scott Burrell reviews the basics of PowerShell scripting for automated administration, and reviews the Windows Admin Center and

> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-essential-training) | Intermediate | 39K learners
> [Jump to Path Context ↓](#path-context)

## Skills Covered

- Windows Server

## Table of Contents

### Introduction

#### Exploring Windows Server 2019
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-essential-training/exploring-windows-server-2019?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/exploring-windows-server-2019?u=76281980&t=0)** - [Scott] So, Windows Server 2019 is here.
>
> **[0:04](https://www.linkedin.com/learning/windows-server-2019-essential-training/exploring-windows-server-2019?u=76281980&t=4)** Microsoft has done something really unique with this one, something they've never done before.
>
> **[0:09](https://www.linkedin.com/learning/windows-server-2019-essential-training/exploring-windows-server-2019?u=76281980&t=9)** Most of the amazing advances in this version of Windows Server were introduced in production releases of Windows Server up to a year early.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2019-essential-training/exploring-windows-server-2019?u=76281980&t=18)** So, what makes it so special to see them in Server 2019?
>
> **[0:23](https://www.linkedin.com/learning/windows-server-2019-essential-training/exploring-windows-server-2019?u=76281980&t=23)** The answer is these features landed in Windows Server 2019 because of you.
>
> **[0:28](https://www.linkedin.com/learning/windows-server-2019-essential-training/exploring-windows-server-2019?u=76281980&t=28)** In this course, we're going to talk about some legacy capabilities and the brand-new roles, features, and tools that have been rolled up into this latest long-term service release of Windows Server.
>
> **[0:42](https://www.linkedin.com/learning/windows-server-2019-essential-training/exploring-windows-server-2019?u=76281980&t=42)** And we're going to talk about the role of the IT community in choosing and proving out those features.
>
> **[0:49](https://www.linkedin.com/learning/windows-server-2019-essential-training/exploring-windows-server-2019?u=76281980&t=49)** My name is Scott Burrell, and I've been watching Microsoft evolve their server products for over two decades.
>
> **[0:55](https://www.linkedin.com/learning/windows-server-2019-essential-training/exploring-windows-server-2019?u=76281980&t=55)** Let's walk through the essentials of using this latest version, Windows Server 2019, in your production environment.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - [scott] (1)

#### What you should already know
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-essential-training/what-you-should-already-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/what-you-should-already-know?u=76281980&t=0)** - [Instructor] Windows Server 2019 is designed to provide the features needed for small networks, for enterprise data centers, and for everything in between.
>
> **[0:11](https://www.linkedin.com/learning/windows-server-2019-essential-training/what-you-should-already-know?u=76281980&t=11)** That means that there are features designed for all levels.
>
> **[0:14](https://www.linkedin.com/learning/windows-server-2019-essential-training/what-you-should-already-know?u=76281980&t=14)** There are no prerequisites for this course.
>
> **[0:17](https://www.linkedin.com/learning/windows-server-2019-essential-training/what-you-should-already-know?u=76281980&t=17)** Whether you're just beginning with Windows servers or if you've been administering them for years, there's something here for you.
>
> **[0:24](https://www.linkedin.com/learning/windows-server-2019-essential-training/what-you-should-already-know?u=76281980&t=24)** As you go through this course, there are a few things that will help you get the most out of the presentations and demonstrations here.
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2019-essential-training/what-you-should-already-know?u=76281980&t=32)** First, it's always a good idea to build a test lab and follow along with the demonstrations that will help you.
>
> **[0:39](https://www.linkedin.com/learning/windows-server-2019-essential-training/what-you-should-already-know?u=76281980&t=39)** To do that, you should have a robust machine that's installed with Windows Server Hyper-V or any other virtualization platform that works for you.
>
> **[0:48](https://www.linkedin.com/learning/windows-server-2019-essential-training/what-you-should-already-know?u=76281980&t=48)** I'm doing all of the demonstrations in this course on a Windows 2019 Data Center Edition server installed with 128 gig of RAM and quite a bit of hard drive space.
>
> **[1:01](https://www.linkedin.com/learning/windows-server-2019-essential-training/what-you-should-already-know?u=76281980&t=61)** Many of the roles and features that we're going to discuss in this course are designed to run in Active Directory environments.
>
> **[1:08](https://www.linkedin.com/learning/windows-server-2019-essential-training/what-you-should-already-know?u=76281980&t=68)** If you're already familiar with creating an Active Directory domain, you'll find that the process hasn't really changed in Server 2019.
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2019-essential-training/what-you-should-already-know?u=76281980&t=77)** If you're new to this, pay close attention to the videos on creating a new domain and site, and then use that process to build test environments.
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2019-essential-training/what-you-should-already-know?u=76281980&t=87)** Most of all, it will help if you start this course with an open mind.
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2019-essential-training/what-you-should-already-know?u=76281980&t=92)** I'm going to demonstrate installing and managing various roles and capabilities in legacy tools, in PowerShell, and in a brand-new management platform.
>
> **[1:42](https://www.linkedin.com/learning/windows-server-2019-essential-training/what-you-should-already-know?u=76281980&t=102)** All are available in this new version of Windows Server and I recommend that you consider each on their relative merits to decide what's best for you.
>
> **[1:51](https://www.linkedin.com/learning/windows-server-2019-essential-training/what-you-should-already-know?u=76281980&t=111)** Well, I don't know about you, but I'm ready to get started.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Keywords:** this, (1)
> **Env Vars:** ram (1)
> **Tools:** powershell (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)


### 1. Getting Started

#### When to upgrade
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-essential-training/when-to-upgrade?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/when-to-upgrade?u=76281980&t=0)** - [Instructor] I was speaking recently with a network administrator for a global company.
>
> **[0:04](https://www.linkedin.com/learning/windows-server-2019-essential-training/when-to-upgrade?u=76281980&t=4)** He told me that his IT infrastructure was out of date because his Windows Servers were a version or two behind the newest thing from Microsoft.
>
> **[0:14](https://www.linkedin.com/learning/windows-server-2019-essential-training/when-to-upgrade?u=76281980&t=14)** The long-term Windows Server releases like Server 2012, 2016, and now Windows Server 2019 are meant to remain functional for more than just a couple of years, so this is a normal situation.
>
> **[0:29](https://www.linkedin.com/learning/windows-server-2019-essential-training/when-to-upgrade?u=76281980&t=29)** A new one will come out every two to four years and they'll be supported for approximately 10 years.
>
> **[0:37](https://www.linkedin.com/learning/windows-server-2019-essential-training/when-to-upgrade?u=76281980&t=37)** That means you're never really forced into a quick upgrade.
>
> **[0:41](https://www.linkedin.com/learning/windows-server-2019-essential-training/when-to-upgrade?u=76281980&t=41)** In fact, I'll go on record as saying that the release of a newer version of Windows Server is never the reason to upgrade your entire network.
>
> **[0:52](https://www.linkedin.com/learning/windows-server-2019-essential-training/when-to-upgrade?u=76281980&t=52)** Let me tell you, instead, why you should install a newer version of Windows Server.
>
> **[0:57](https://www.linkedin.com/learning/windows-server-2019-essential-training/when-to-upgrade?u=76281980&t=57)** You should plan to start integrating Windows Server 2019 installations into your network if you're expanding a data center and would like the control and flexibility of being able to group your clusters and take advantage of advances in Storage Spaces Direct.
>
> **[1:15](https://www.linkedin.com/learning/windows-server-2019-essential-training/when-to-upgrade?u=76281980&t=75)** You might consider Windows Server 2019 if your older file servers need to be retired and you need a new system that will allow you to easily migrate data and entire configurations to new servers without disrupting service.
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2019-essential-training/when-to-upgrade?u=76281980&t=93)** Or you might be looking for any of the features rolled out in the semiannual releases of Windows Server, but maybe you didn't want the volatility of an operating system that will reach end-of-life in less than two years.
>
> **[1:48](https://www.linkedin.com/learning/windows-server-2019-essential-training/when-to-upgrade?u=76281980&t=108)** And this is by no means an exhaustive list, but the bottom line is this, you should begin to upgrade your network because you face evolving needs and you recognize that Microsoft has addressed those needs in the new version of Windows Server.
>
> **[2:04](https://www.linkedin.com/learning/windows-server-2019-essential-training/when-to-upgrade?u=76281980&t=124)** In courses on installing and configuring Windows Server, I discuss the process of planning how servers will be used so that the installation will fit the needs from the very beginning, including the roles, the right edition of Windows Server, and when it comes to adding a new version of Windows Server, or a new version of any product, you add another dimension.
>
> **[2:27](https://www.linkedin.com/learning/windows-server-2019-essential-training/when-to-upgrade?u=76281980&t=147)** You still need to consider all of this, but you also need to take into account the minimum system requirements.
>
> **[2:34](https://www.linkedin.com/learning/windows-server-2019-essential-training/when-to-upgrade?u=76281980&t=154)** For example, Windows Server 2019 has hardware requirements that may seem very similar to Server 2016.
>
> **[2:42](https://www.linkedin.com/learning/windows-server-2019-essential-training/when-to-upgrade?u=76281980&t=162)** A minimum of a 1.4 gigahertz 64-bit processor that supports memory protection and Second Level Address Translation is still a requirement, especially for virtualization roles.
>
> **[2:56](https://www.linkedin.com/learning/windows-server-2019-essential-training/when-to-upgrade?u=76281980&t=176)** You will also need at least a couple gigabytes of memory.
>
> **[3:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/when-to-upgrade?u=76281980&t=180)** Now, you should be looking at that any saying, yeah, right, like that will work.
>
> **[3:04](https://www.linkedin.com/learning/windows-server-2019-essential-training/when-to-upgrade?u=76281980&t=184)** Two gigabytes of memory is only enough to run Windows itself, and barely that.
>
> **[3:10](https://www.linkedin.com/learning/windows-server-2019-essential-training/when-to-upgrade?u=76281980&t=190)** Always consider the roles that you're going to install and the load that you're going to put on the server, and make sure you have enough horsepower for those needs, and it might be more than what you're used to.
>
> **[3:23](https://www.linkedin.com/learning/windows-server-2019-essential-training/when-to-upgrade?u=76281980&t=203)** Similarly, when you read that the storage requirement is 32 gig or more of hard drive space on a compatible controller, understand that it will require a lot more.
>
> **[3:34](https://www.linkedin.com/learning/windows-server-2019-essential-training/when-to-upgrade?u=76281980&t=214)** 32 gig is enough to run Windows and possibly several months' worth of updates, but it's by no means a recommended threshold.
>
> **[3:45](https://www.linkedin.com/learning/windows-server-2019-essential-training/when-to-upgrade?u=76281980&t=225)** You also need to make sure that your network controllers support the PCI Express architecture and that they support at least one gigabit per second of throughput.
>
> **[3:56](https://www.linkedin.com/learning/windows-server-2019-essential-training/when-to-upgrade?u=76281980&t=236)** And even after you look at all of these requirements, if you're upgrading a network, you need to consider the roles like ADFS or Certificate Services, or even more common, Active Directory.
>
> **[4:11](https://www.linkedin.com/learning/windows-server-2019-essential-training/when-to-upgrade?u=76281980&t=251)** These roles involve multiple servers working together, and upgrading them requires some planning.
>
> **[4:18](https://www.linkedin.com/learning/windows-server-2019-essential-training/when-to-upgrade?u=76281980&t=258)** Whether you're going to take the ADFS farm or the functional level of the role for the entire network and try to bring that up to the enhanced versions in Windows Server 2019, planning the upgrade or the introduction of a new Windows Server 2019 system into your network will require you to take a look at your entire infrastructure, not just that one server, as you decided to upgrade specific services.
>
> **[4:47](https://www.linkedin.com/learning/windows-server-2019-essential-training/when-to-upgrade?u=76281980&t=287)** These types of roles require their own unique methods for upgrading, and the service or migration of the responsibilities has to be echoed across multiple machines.
>
> **[4:58](https://www.linkedin.com/learning/windows-server-2019-essential-training/when-to-upgrade?u=76281980&t=298)** Bottom line, there's a lot to consider.
>
> **[5:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/when-to-upgrade?u=76281980&t=300)** As we go through this course, we're going to take a look at new as well as traditional roles performed by Windows Server and what's involved in bringing Windows Server 2019 into your mix.

> [!info]- Semantic Content
>
> **Code Keywords:** require (3), this, (2), let (1)
> **Env Vars:** adfs (2), pci (1)
> **Prerequisites:** install (2), make sure you have (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (1), similar to (1)
> **Versions:** 1.4 (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)

#### Installation and configuration
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=0)** - [Instructor] Once the deployment of a new server has been planned, the installation itself if a pretty elementary task.
>
> **[0:07](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=7)** Unlike servers from long ago, the installation of Windows servers today only ask a small handful of questions.
>
> **[0:15](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=15)** And if the answers are known in advance, installation is pretty smooth.
>
> **[0:20](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=20)** If you're prepared with the language preference, the product key and whether or not you need the desktop experience, the only configuration question that you'll be asked is the size and the placement of the install partition.
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=35)** And that size can even be modified after the fact, if you need to.
>
> **[0:40](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=40)** The bare bones requirement here is that you should have at least 32 gigabytes for the install partition.
>
> **[0:47](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=47)** As we mentioned before, that minimum doesn't even account for the desktop experience.
>
> **[0:53](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=53)** That's only for Core, which is now considered the default install for Windows Servers.
>
> **[0:59](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=59)** Best practice is to consider starting at double or more the stated minimum requirement.
>
> **[1:04](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=64)** Keep in mind that you're going to be installing various roles and that you want this server to run for several years so there's going to need to be room for whatever security and feature updates may be released over that time.
>
> **[1:19](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=79)** Here's a fresh install that I completed on a server in my test lab on a virtual machine with eight gig of RAM, dynamically expanding.
>
> **[1:29](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=89)** You can see that right now it's using 3/4 of that and this server is literally doing nothing.
>
> **[1:35](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=95)** That two gig of RAM really is a bare bones minimum.
>
> **[1:40](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=100)** I installed this, like I said, in a virtual machine.
>
> **[1:43](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=103)** I granted it eight virtual processors and this eight gig of RAM, and it took all of 15 minutes to complete, including the reboot at the end.
>
> **[1:52](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=112)** In fact, it felt like the reboot was the longest part of the process.
>
> **[1:58](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=118)** Completing that install is only the first step to getting a new server ready.
>
> **[2:03](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=123)** Before you add any roles, share any folders, or install any applications, you need to assign the server an identity.
>
> **[2:11](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=131)** And this includes two things: the network address, and the computer or host name.
>
> **[2:18](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=138)** Just like in previous versions of Windows Server, the server manager loads by default.
>
> **[2:23](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=143)** And, just as in previous versions of Windows Server, you can select this line next to ethernet and get the legacy interface for changing the IP address and network configuration of any interface in the machine.
>
> **[2:38](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=158)** I'm going to go ahead and assign this an address, using tools that have been around for several versions of Windows and Windows Server.
>
> **[2:48](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=168)** I'm going to assign it a static IP address,
>
> **[3:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=180)** including the default gateway and DNS information provided to me by my network administration team.
>
> **[3:17](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=197)** Assigning new IP configuration, even adding or removing IP version four or six, or switching from dynamic to static, none of these changes require a reboot.
>
> **[3:28](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=208)** I like to get as many things done as possible before a reboot, so that all of those settings can be applied as the system comes up again.
>
> **[3:37](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=217)** So let me go ahead and save those changes, and this is on my company network, and yes I do want my server to be visible to other machines so I'm going to go ahead and say yes.
>
> **[3:49](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=229)** And I can close out of this panel.
>
> **[3:52](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=232)** And now the next step of giving the computer a name.
>
> **[3:56](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=236)** This can also be done from the server manager, but I want to show you a different path.
>
> **[4:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=240)** I'm going to open PowerShell.
>
> **[4:03](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=243)** And if you haven't started using PowerShell yet, it's time.
>
> **[4:06](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=246)** Especially if you're considering semiannual releases of Windows Server, or if you go with the default installation of Windows Server, formerly known as Core, where you don't have this desktop experience with a server manager.
>
> **[4:20](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=260)** From the start menu, here is PowerShell.
>
> **[4:23](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=263)** I'm going to right-click it so that I can run it as administrator.
>
> **[4:27](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=267)** If I've logged into the machine as the administrator account this extra step may not be necessary, but it's a pattern that I've gotten used to and it allows me to always have the access I need regardless of how I logged in to start.
>
> **[4:42](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=282)** So here in PowerShell, let me go ahead and maximize this window.
>
> **[4:48](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=288)** The process of renaming the server, I like to do it in two steps.
>
> **[4:52](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=292)** The first is to type the cmdlet HostName.
>
> **[4:56](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=296)** This gives me the automatically assigned computer name.
>
> **[5:01](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=301)** That's not something that I want to have to remember or be responsible for typing accurately.
>
> **[5:06](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=306)** So I'm going to select it, and use ctrl+c on the keyboard to copy that information.
>
> **[5:13](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=313)** Now to rename the computer.
>
> **[5:15](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=315)** The PowerShell cmdlet for that is Rename-Computer.
>
> **[5:23](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=323)** And that's the basic syntax in PowerShell.
>
> **[5:26](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=326)** We first start with a verb, in this case rename, and then we have a noun, computer.
>
> **[5:32](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=332)** Most PowerShell cmdlets have a verb-noun construct.
>
> **[5:36](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=336)** So we're going to rename a computer.
>
> **[5:39](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=339)** First we need to tell it which computer we're going to rename.
>
> **[5:44](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=344)** The parameter computer name and now I'm going to hit ctrl+v to paste the current computer name.
>
> **[5:50](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=350)** That's the computer we want to rename and we want to assign it a new name on our network.
>
> **[6:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=360)** Let's go ahead and name this Srv01.
>
> **[6:06](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=366)** Naming conventions are very important and as you bring up new machines and configure them in your environment, consider using server names that will be meaningful to your users.
>
> **[6:16](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=376)** In very large organizations those names might include something about the function and the location of the server.
>
> **[6:23](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=383)** In smaller to medium-size organizations, they may be named after the task that they perform or some people even use characters from TV series or movies that represent a task being done by that server.
>
> **[6:38](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=398)** Buy make sure those decisions are deliberate.
>
> **[6:42](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=402)** When I go ahead and hit enter, you'll notice that despite getting a warning that I'm going to have to restart, that change was done really quickly.
>
> **[6:51](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=411)** All we need to do now is reboot, and that can be done using the Shutdown command, using the r parameter for restart.
>
> **[7:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=420)** And that should take care of it.
>
> **[7:02](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=422)** If this server is also going to be part of an existing active directory domain, you should take care of joining it to the domain as soon as it reboots.
>
> **[7:12](https://www.linkedin.com/learning/windows-server-2019-essential-training/installation-and-configuration?u=76281980&t=432)** Then and only then will you have a fresh install of Windows Server 2019 that is ready to be put to work.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), interface (2), static (2), this, (1), default. (1)
> **Prerequisites:** install (7), configure (1)
> **Tools:** powershell (7)
> **Env Vars:** ram (3), dns (1)
> **Definitions:** is a  (1), known as (1)
> **Warnings:** keep in mind (1), warning (1)
> **CLI Commands:** make (1)
> **Cross-References:** we mentioned (1)

#### Roles and features
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=0)** - [Instructor] I usually complete a worksheet kind of like this one prior to any server installation.
>
> **[0:06](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=6)** Notice the first column.
>
> **[0:08](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=8)** This isn't the first question that you're asked during a server installation.
>
> **[0:13](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=13)** In fact, adding roles and features are the last part of a new server deployment, but that said, role and features, and identifying what your server is going to do and what your server is going to be should be the first part of your plan.
>
> **[0:30](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=30)** Each role and each application will have its own set of requirements.
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=35)** Some, like DNS and DHCP, have a very small footprint and may be able to coexist on a server, possibly even with other roles.
>
> **[0:47](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=47)** Others have varying demands.
>
> **[0:49](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=49)** File sharing is likely to require high volumes of storage and fast networking interfaces, while acting as a domain controller may require enhanced local security and controlled access.
>
> **[1:02](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=62)** Planning which roles you're going to add to a server should be done with these considerations of the security needs, of the hardware needs, of the processing and memory, as well as storage needs, from the individual servers.
>
> **[1:19](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=79)** Actually installing the role once you've made these decisions is quite easy.
>
> **[1:25](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=85)** Adding a role or feature can be done from the server manager or from PowerShell.
>
> **[1:31](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=91)** Here on the desktop experience, you can add any role or feature from right here in the server manager, from either selecting step two, notice again, step one was configure the server, and that is the server name, the network configuration and so on.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=107)** Step two, add roles or features or if you've wandered off from this screen, the Manage menu has Add Roles and Features right here at the top of the list.
>
> **[2:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=120)** This wizard starts with a welcome screen which most people read once and then check the box to never have to see it again and then moves on to the question of whether you're installing a role or a feature, a purpose for this server to conduct, or if you're installing an application that needs to be available to remote desktop clients.
>
> **[2:20](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=140)** If you're installing Microsoft Office for a Desktop As A Service environment, this is what you'd select Remote Desktop for.
>
> **[2:29](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=149)** But we want to add a role or a feature to this server, so we'll remain with the top choice.
>
> **[2:35](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=155)** Moving on to the next screen, we get to select which server we would like to install a role or feature on.
>
> **[2:43](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=163)** Now in this single server environment that we've just begun to construct, that seems like a very easy choice.
>
> **[2:49](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=169)** But when you start managing multiple servers, you can add your entire data center worth of servers into this list and you can add roles or features to any server you like from this same wizard.
>
> **[3:03](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=183)** In this window, you can add any other Windows 2012 server, that includes 2012 and 2012 R2, as well as any other 2016 or 2019 servers that you want to manage.
>
> **[3:16](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=196)** And then you can move forward and select the roles and the features.
>
> **[3:21](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=201)** Roles are on a separate tab from features.
>
> **[3:24](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=204)** You can select which components you'd like to add to this server.
>
> **[3:28](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=208)** For the most part, when you select a role, you're going to be prompted for some prerequisites or some management tools.
>
> **[3:36](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=216)** In this case, for Hyper-V, it wants to add the PowerShell module, which is the collection of commandlets and functions that you'll need to use in PowerShell to manage this role and it gives you the desktop, the GUI management tools.
>
> **[3:52](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=232)** And we could move forward from there, but let me back up and show you a couple of others.
>
> **[3:57](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=237)** If I was to select the web server, it only adds the management console, the tools that I need to administer that particular role.
>
> **[4:07](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=247)** If I were to pick something a little more involved, say Active Directory domain services, it's going to add a bigger list of tools.
>
> **[4:15](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=255)** Other prerequisites might also be added to this list.
>
> **[4:21](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=261)** Configuring any one of these roles requires at least the same kind of planning that's used in preparing for the installation of the server itself.
>
> **[4:31](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=271)** What's it going to do?
>
> **[4:32](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=272)** What resources does it need?
>
> **[4:34](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=274)** Wat are the clients goin to need for this to function?
>
> **[4:38](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=278)** Failure to do this kind of planning on a production server would put an administrator in a category my grandfather used to warn me about.
>
> **[4:46](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=286)** He said that many people who don't take the time to do something right will often be forced to take the time to do it over.
>
> **[4:53](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=293)** That's sage advice, whether you're building a shed or deploying a certificate authority.
>
> **[4:59](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=299)** New versions of Windows server mean new features and upgraded versions of the roles you already know.
>
> **[5:06](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=306)** Sometimes, you may assume the installation is pretty much the same as you've seen in previous versions.
>
> **[5:12](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=312)** And so, you go ahead and install the role and then you have to pause to go and figure out the role configuration, maybe catch up on some prerequisites, before you can finish and configure the role.
>
> **[5:24](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=324)** There is a better sequence of events here.
>
> **[5:27](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=327)** Understanding what the role will require allows you to complete the prerequisites first, then install the role, and then conduct whatever configuration is necessary.
>
> **[5:38](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=338)** There's a prime example of this.
>
> **[5:40](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=340)** Active Directory domain services has gone through a few changes since Windows Server 2016.
>
> **[5:46](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=346)** Now, you could install the role and then pause the process to go back and update Active Directory so that you can promote that machine to domain controller and you could get away with doing it like that, but there are other roles, like ADFS, that upgrade differently.
>
> **[6:05](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=365)** ADFS is an identity role.
>
> **[6:07](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=367)** It allows you to create single sign-on relationships with outside entities.
>
> **[6:12](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=372)** It allows you to secure web-based applications inside your own environment and more and this is another role that has changed from Windows Server 2016 to 2019.
>
> **[6:24](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=384)** But it's upgrade or migration path is different.
>
> **[6:28](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=388)** With ADFS, you install the role on a new server, join the cluster, in this case, the cluster is known as a farm, and by joining that farm, that 2019 server will automatically take over and be the primary server in the cluster, allowing you to decommission the old one and once there are no old servers in the mix, you can upgrade the functional level.
>
> **[6:53](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=413)** Take the time to figure out which roles require extensive migration processes.
>
> **[6:59](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=419)** Consider which roles can coexist on a server with others.
>
> **[7:04](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=424)** Study out each role, learn its requirements, learn the processes before you get started.
>
> **[7:10](https://www.linkedin.com/learning/windows-server-2019-essential-training/roles-and-features?u=76281980&t=430)** The concept of measure twice and cut once has applications far beyond just carpentry.

> [!info]- Semantic Content
>
> **Code Keywords:** require (4), case, (2), for. (1), module (1), let (1)
> **Prerequisites:** install (5), configure (2), you'll need (1)
> **Env Vars:** adfs (3), dns (1), dhcp (1), gui (1)
> **Tools:** powershell (3)
> **Definitions:** is a  (1), is an  (1), known as (1)
> **UI Navigation:** select the (2)
> **Analogies:** kind of like (1)
> **Speakers:** - [instructor] (1)

#### IP management roles
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=0)** - [Instructor] There are two roles that are commonly associated with the management of TCP/IP within a network.
>
> **[0:07](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=7)** DHCP configures IP information on the various hosts as they start up, and DNS maintains a directory of where to find everything.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=18)** Now when I say everything, I do mean everything.
>
> **[0:22](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=22)** DNS helps you find servers, printers, and websites yes.
>
> **[0:26](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=26)** But it also tracks every object in active directory that's everything from group policies, to the email address of a user.
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=35)** All of that information is tracked down through the lookup service provided by DNS.
>
> **[0:42](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=42)** If you've added the DNS role, while installing Active Directory Domain Services it will configure itself while the server is being promoted to a domain controller and because the users might need to be able to look up resources on the internet generally.
>
> **[1:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=60)** It has something called root hints, where your server is able to look to the outside world to get information about other websites, so that you can provide that name resolution to users and applications inside your domain.
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=77)** But just because there's an automatic configuration doesn't mean that it's the right thing for everyone.
>
> **[1:23](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=83)** For example, this test lab environment that I'm using for these demonstrations has a firewall.
>
> **[1:30](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=90)** That blocks DNS lookups to any server other than two specific DNS servers in the data center here.
>
> **[1:38](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=98)** This is a way to protect our users and applications from being sent to some erroneous DNS server that is doing something malicious.
>
> **[1:49](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=109)** In that case, we can configure forwarders.
>
> **[1:53](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=113)** This is a server that has been installed to be a domain controller, and the DNS role has been installed as well if I go to the tools menu, I can go ahead and open up the DNS tool and from here we can look at the properties of our server.
>
> **[2:10](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=130)** Inside ForwardLookupZones we can find the domains that we are able to research and locate information.
>
> **[2:18](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=138)** For example, [landonhotel.com](https://landonhotel.com) and another active directory integrated zone.
>
> **[2:24](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=144)** But if I wanted to change how the server works as a whole, I can right click on the server and view its properties, and here you can see the root hints that were mentioned before.
>
> **[2:35](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=155)** Where to find servers on the internet, to help look up generally, and we can find forwarders.
>
> **[2:43](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=163)** Here I can add the IP addresses of servers that will look up things on the internet.
>
> **[2:48](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=168)** This is also useful if this domain is buried down in the organization and you need to look to the top of the organization for your lookup information.
>
> **[3:01](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=181)** In edition to using DNS, having a DHCP server that's also integrated with active directory will allow you to hand out configuration information to requesting hosts, and report back to the DNS server so that the host can be registered in this list.
>
> **[3:21](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=201)** This helps maintain the most complete and the most current list of hosts and their addresses throughout the network.
>
> **[3:29](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=209)** There's one other feature that I want to point out to you that's not new to Windows Server 2019.
>
> **[3:36](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=216)** But it is severely underutilized.
>
> **[3:39](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=219)** Once you have an active directory environment with DNS and DHCP, you now have the task of keeping track of how these roles are being used.
>
> **[3:50](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=230)** Some people use spreadsheets to maintain lists of IP address ranges, DHCP exceptions and statically assigned or reserved IP addresses and these spreadsheets may seem to work in a small environment, but they get outdated very quickly.
>
> **[4:08](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=248)** As soon as somebody has to change out a printer, let's say the business center printer has died and so we've retired that machine and add a new printer, but we're in a hurry to get things up and going so we just add it to the DHCP server and we don't update the spreadsheet.
>
> **[4:28](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=268)** Later on somebody comes in to do inventory, and there's different information in different locations.
>
> **[4:35](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=275)** This can get out of hand really quickly, and you begin to question whether any of the other information in the spreadsheet is accurate as well.
>
> **[4:45](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=285)** There is a feature named IP Address Management Server or IPAM Server, this feature gives you a dashboard that you can use to track everything from an inventory of IP addresses in a scope to the details of a DNS zone.
>
> **[5:02](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=302)** You may have noticed that the wallpaper is a different shade here, I moved from blue to green.
>
> **[5:07](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=307)** This is a DHCP server that's in the same active directory domain, and this is where I'm going to install the feature.
>
> **[5:15](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=315)** It can be added to any Windows 2016 or 2019 server so long as the machine is not a domain controller and this feature is added in pretty much the same process as a role, I'm going to start by Add roles and features.
>
> **[5:32](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=332)** This is a server that I haven't yet checked the box to skip this welcome page.
>
> **[5:37](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=337)** I want to install a role or feature, I want to install it on this machine and this time what we're looking for is not a role.
>
> **[5:45](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=345)** It's not in the first list so I need to move on, to the second list where you'll find IP Address Management IPAM Server, when you check the box, you'll see that not only do you get administration tools but there are several prerequisites that are being added as well.
>
> **[6:03](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=363)** The .NET Framework and [ASP.NET](https://ASP.NET) versions 4.7 components are required in addition to access to the DNS server tools.
>
> **[6:15](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=375)** As a general rule I accept all of the prerequisites and tools that are offered to me when I install a role or a feature, but I do take time to scroll through them and see what they are.
>
> **[6:26](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=386)** This helps give me some insight into what this feature is going to need from this server.
>
> **[6:32](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=392)** So I'm going to go ahead and add that.
>
> **[6:34](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=394)** Move on to the next screen, which will confirm what I've asked it to do, and then install the role.
>
> **[6:41](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=401)** The dashboard that IPAM offers us is similar to that involved in many different software defined network packages.
>
> **[6:50](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=410)** Including Windows System Center, and third party products.
>
> **[6:54](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=414)** If you're using one of those products already, great.
>
> **[6:58](https://www.linkedin.com/learning/windows-server-2019-essential-training/ip-management-roles?u=76281980&t=418)** If not, know that Windows Server 2019, and 2016 have you covered with features that are already included in the server product that you bought and are deploying in your network.

> [!info]- Semantic Content
>
> **Env Vars:** dns (14), dhcp (6), ipam (3), net (2), tcp (1)
> **Prerequisites:** install (5), configure (2)
> **CLI Commands:** find (6)
> **Definitions:** is a  (6)
> **Code Keywords:** case, (1), let (1)
> **URLs:** [landonhotel.com](https://landonhotel.com) (1), [asp.net](https://asp.net) (1)
> **UI Navigation:** go to (1), click on (1)
> **Analogies:** for example (2)

#### Upgrades and migration
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=0)** - [Instructor] I'm about to use a term that some network administrators consider offensive.
>
> **[0:05](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=5)** Now I'm not one to commonly use vulgar expressions in the workplace, but I feel that this one needs to be discussed.
>
> **[0:12](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=12)** The term is in-place upgrade.
>
> **[0:17](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=17)** Every version of Windows Workstation and Windows Server has come with a list of operating systems that you can upgrade from.
>
> **[0:25](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=25)** Meaning if you're running a listed operating system you can install in a way that keeps all of the existing configurations, drivers, and applications, but changes to a newer version of Windows.
>
> **[0:39](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=39)** For the most part, that list is the two previous versions of Windows Server.
>
> **[0:46](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=46)** But doing this kind of upgrade comes with some obstacles.
>
> **[0:51](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=51)** There is never a guarantee that the hardware and drivers supported by a previous operating system will be supported by a newer, more demanding version.
>
> **[1:01](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=61)** Second, over a period of time most computers inherit clutter from different applications, user preferences, updated drivers, and so on.
>
> **[1:12](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=72)** If all the settings are kept through an upgrade that means the clutter stays as well.
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=78)** A third challenge is that not all roles and features can survive an upgrade, because they're just too different from one version to the next to survive a simple transfer of settings.
>
> **[1:31](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=91)** And there are other obstacles, but consider this your starter list.
>
> **[1:35](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=95)** Given these insurmountable obstacles you may ask why someone would ever want to upgrade a server in the first place?
>
> **[1:43](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=103)** Well, when Microsoft first announced a semi-annual release channel for Windows Server it became clear to me that an in-place upgrade option was going to need to become a reality at some point.
>
> **[1:56](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=116)** These additions of Windows Server are designed to come out every six months and have a life cycle of only about a year and 1/2.
>
> **[2:05](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=125)** New features are being released at breakneck speeds and servers are going to need to be upgraded almost as fast as these new releases are coming out.
>
> **[2:15](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=135)** It stands to reason then that if Microsoft is going to work out the capability of in-place upgrades for the semi-annual release that that same capability is going to be transferable to the long-term service releases, the Windows Server 2019 and beyond.
>
> **[2:35](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=155)** For that and I'm sure other reasons in-place upgrade is being touted as one of the noteworthy new features in Windows Server 2019.
>
> **[2:45](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=165)** So I decided to give it a try.
>
> **[2:49](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=169)** I've mentioned a fairly robust role before, adfs.
>
> **[2:53](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=173)** This is a Windows 2016 Datacenter server and it's a member of an Active Directory domain that is hosted by, also, Windows Server 2016.
>
> **[3:03](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=183)** And this machine is installed with the role adfs.
>
> **[3:07](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=187)** All of those features are there, there are configurations to do, federated identify across domain lines.
>
> **[3:14](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=194)** Let me show you what happens when we've inserted the Windows Server 2019 DVD and go ahead and run setup.
>
> **[3:27](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=207)** Now this startup screen may look familiar if you've upgraded desktop operating systems before.
>
> **[3:32](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=212)** I'm going to go ahead and say yes, download updates, because I know it's not really going to take all that long just to do the check.
>
> **[3:41](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=221)** And I'm being asked to enter my product key, so let me go ahead and put that in.
>
> **[3:47](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=227)** And it will take a couple of screens where it asks me which version I want to install.
>
> **[3:53](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=233)** Let's continue with at least the same resources that we have to begin with.
>
> **[3:58](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=238)** And after checking with whether or not I accept the license terms it asks me what I want to keep.
>
> **[4:05](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=245)** Well, if we're testing out in-place upgrades I'm going to tell it that I want to keep everything and move onto the next screen.
>
> **[4:16](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=256)** So you can see this takes a couple of screens before it gets to any warnings.
>
> **[4:20](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=260)** But take a look at what we're being told right away.
>
> **[4:23](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=263)** This tells us that the Active Directory Federation Service role is installed on this machine and it goes on to tell us that this isn't going to work.
>
> **[4:34](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=274)** That that role is not going to be here when we finish the upgrade.
>
> **[4:38](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=278)** It will need to be configured differently later on down the line.
>
> **[4:43](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=283)** Microsoft has no expectations that everyone is going to want to perform in-place upgrades and they have these reminders in place for those that try to do it on servers where it's a bad idea.
>
> **[4:56](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=296)** Now I'm not going on record as saying that in-place upgrades don't work.
>
> **[5:01](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=301)** I have successfully run this upgrade process on file servers, a DHCP server, and even on a RADIUS server, and they all worked out fine.
>
> **[5:11](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=311)** But there are roles that shouldn't be upgraded.
>
> **[5:14](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=314)** We've talked a little bit about how these processes may vary, we've discussed ADFS and briefly reviewed Active Directory Domain Services.
>
> **[5:24](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=324)** We've briefly discussed Active Directory Domain Services.
>
> **[5:27](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=327)** So you should already be on board with the idea that these types of upgrades have a little more involved.
>
> **[5:35](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=335)** Now in addition to performing in-place upgrades where they will work and doing the role-specific migration processes, there's another option available to us in migrating a role.
>
> **[5:49](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=349)** The Server MIGration tools, often abbreviated to SMIG, will allow you to create a special tool on your new 2019 Server that you can take to an older machine, a 2016 or a 2012 RT server and export or pack up the configuration of say a DHCP server or some other role or feature that is running and has been for some time on an existing server.
>
> **[6:21](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=381)** You can then take that wrapped up export, bring it over to your 2019 server, and import the SMIG feature.
>
> **[6:30](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=390)** That allows you to port an entire configuration from an old box that needs to be retired to a new server.
>
> **[6:38](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=398)** SMIG tools are something that you're probably going to want to become more familiar with, especially if you have a Windows Server 2012 or 2016 network that you would like to migrate to new installations of Windows Server 2019.
>
> **[6:56](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrades-and-migration?u=76281980&t=416)** These tools are usually preferred over in-place upgrades and are explored in greater detail in courses on installing and configuring Windows Servers.

> [!info]- Semantic Content
>
> **Env Vars:** smig (3), dhcp (2), dvd (1), radius (1), adfs (1)
> **Code Keywords:** let (3), from. (1), try. (1), continue (1), export, (1)
> **Prerequisites:** install (2), setup (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Windows Defender ATP
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-defender-atp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-defender-atp?u=76281980&t=0)** - [Narrator] One of the most important feature sets on an operating system today, would have to be the security options.
>
> **[0:07](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-defender-atp?u=76281980&t=7)** Windows Server 2019 has improved on the features of Windows Defender at the local machine level and added a whole new dimension to threat protection, detection, and response.
>
> **[0:21](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-defender-atp?u=76281980&t=21)** The local installation of Windows Defender has more options and more protection than previous versions.
>
> **[0:28](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-defender-atp?u=76281980&t=28)** This is a Windows 2019 Server.
>
> **[0:31](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-defender-atp?u=76281980&t=31)** In fact, it's the one that we configured at the very beginning of the course, but you can see these on any Windows Server 2019 installation.
>
> **[0:39](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-defender-atp?u=76281980&t=39)** If I click on the start menu, and select Windows Security, we can see categories that match things that you would expect from many third party malware and personal firewall products.
>
> **[0:53](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-defender-atp?u=76281980&t=53)** This is already a better start than what we had in Server 2016.
>
> **[0:58](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-defender-atp?u=76281980&t=58)** If I click on Virus and Threat Protection, I can scroll down and see that there's even a piece specifically designed to combat ransomware.
>
> **[1:07](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-defender-atp?u=76281980&t=67)** Those nasty pieces of malware that steal or block access to your proprietary data, and demand payment to release that information or access to your system generally.
>
> **[1:19](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-defender-atp?u=76281980&t=79)** Here, you can go and manage this protection by specifying folders and applications that are allowed to access folders, in an effort to stop ransomware from gaining access to your data to begin with.
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-defender-atp?u=76281980&t=93)** You didn't have this level of control on previous versions of Windows Defender; this is an example of Microsoft responding to evolving threats, and bundling these security features right into the Windows Server Operating System.
>
> **[1:49](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-defender-atp?u=76281980&t=109)** These local security enhancements are not the real upgrade to the local security, however.
>
> **[1:55](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-defender-atp?u=76281980&t=115)** In late 2016, Microsoft introduced a cloud based service that they called "Advanced Threat Protection", or ATP.
>
> **[2:05](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-defender-atp?u=76281980&t=125)** One of the biggest challenges that people were facing with their security software was keeping it current.
>
> **[2:11](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-defender-atp?u=76281980&t=131)** The more machines you want to protect, the harder this becomes.
>
> **[2:15](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-defender-atp?u=76281980&t=135)** Multiple servers, multiple work stations, multiple sites; it's a lot to keep track of.
>
> **[2:22](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-defender-atp?u=76281980&t=142)** Advanced Threat Protection addresses this by centralizing the task of interpreting the heuristic data, and defining the response to threats.
>
> **[2:33](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-defender-atp?u=76281980&t=153)** This centralized malware intelligence is managed, monitored, and controlled through the use of a web based portal.
>
> **[2:42](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-defender-atp?u=76281980&t=162)** The scanners are on each individual machine so that realtime data can be harvested, but the real intelligence is in a secure cloud tenant.
>
> **[2:52](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-defender-atp?u=76281980&t=172)** This tenant is able to interpret the information from the scans to determine not only the type of threat, but the scope of the problem as well.
>
> **[3:03](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-defender-atp?u=76281980&t=183)** ATP accesses Microsoft's malware researchers and can use artificial intelligence to quickly design appropriate responses.
>
> **[3:13](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-defender-atp?u=76281980&t=193)** When this introduced for Windows 10 Workstations and Windows 2016 Servers, a download was required for each end point, and they were individually licensed.
>
> **[3:25](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-defender-atp?u=76281980&t=205)** Windows Server 2019 has the end point build right into the operating system.
>
> **[3:31](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-defender-atp?u=76281980&t=211)** Now, depending on the type of Azure subscription you have, there will be some type of cost to set up and use the ATP tenant, but the ability to scan, report, and respond to advanced threats is now included.
>
> **[3:46](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-defender-atp?u=76281980&t=226)** In addition to consistent and more quickly updated protection, think of the processing power that you'll save on each server.
>
> **[3:55](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-defender-atp?u=76281980&t=235)** In today's server farms with dozens, or even hundreds of virtual servers, even a small savings per machine can add up quickly.
>
> **[4:05](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-defender-atp?u=76281980&t=245)** This Advanced Threat Protection, as an evolutionary step for Windows Defender, is one of the most note worthy security enhancements in Windows Server 2019.

> [!info]- Semantic Content
>
> **Env Vars:** atp (3)
> **UI Navigation:** click on (2), scroll down (1)
> **Definitions:** is a  (1), is an  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)

#### Windows Firewall
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=0)** - [Instructor] The Windows Firewall with Advanced Security remains one of the more important security features to build into the server operating system.
>
> **[0:09](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=9)** Windows Defender ATP was designed on the premise that a breach will happen.
>
> **[0:15](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=15)** No matter how tight the perimeter may be when the product is released, at some point a vulnerability will be discovered or created, and when that happens, you want the best team in place to respond.
>
> **[0:29](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=29)** The Windows Firewall is designed to block everything that you can on an individual server, everything that is, except for the traffic that you want.
>
> **[0:41](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=41)** In the Windows Security app, you can do basic tasks like define what the protection will be if you're in your domain or if you're in a private or a public network profile.
>
> **[0:53](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=53)** Your servers, however, probably don't wander into coffee shops the way your users' laptops will.
>
> **[0:59](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=59)** But this profile architecture is there just the same.
>
> **[1:03](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=63)** When I open up the firewall and network protection, there are some quick links to complete basic common tasks.
>
> **[1:11](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=71)** I can use this link to allow an app through the firewall, to allow, say, printer software, or some specific application that our users may need from our server.
>
> **[1:23](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=83)** It will allow those applications to have their own direct path through the firewall.
>
> **[1:30](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=90)** The link for advanced settings will take you to a management tool that is going to be familiar to any of you who have been administering Windows servers in previous versions.
>
> **[1:41](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=101)** This is the Windows Defender Firewall, or Windows Firewall with Advanced Security.
>
> **[1:48](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=108)** Here you get a pretty long list of inbound and outbound rules that you can use to allow or block traffic for the various services that ship with Windows Server.
>
> **[2:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=120)** Each of these can be viewed and even edited as needed to block or allow specific types of traffic.
>
> **[2:07](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=127)** You can also create new rules for applications or services that weren't originally in place.
>
> **[2:13](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=133)** Let's say you want to allow one specific administrative workstation to administer this server remotely using PowerShell Remoting.
>
> **[2:23](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=143)** I can go to the Inbound Rules, an inbound request to administer this server, right-click and select New Rule, and there's a wizard that will walk us through the process.
>
> **[2:34](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=154)** I'm going to choose a custom rule because there's several things that I want to set for this specific rule.
>
> **[2:41](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=161)** One of the first things I need to specify is what application makes it through this port of the firewall.
>
> **[2:48](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=168)** Well, the application being used is not what I'm going to be defining, so I'm going to allow that one to remain as all programs.
>
> **[2:56](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=176)** The specific protocol and port, PowerShell Remoting, happens over TCP, and it happens over port 5985.
>
> **[3:08](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=188)** You can look up these ports for any of the services.
>
> **[3:11](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=191)** And with a lot of these services, you can set the port to whatever you need.
>
> **[3:15](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=195)** I don't need to specify the remote port.
>
> **[3:18](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=198)** What I'm saying here is that I want to define how traffic is going to be allowed into this machine using TCP and port 5985.
>
> **[3:29](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=209)** As far as the scope for this rule, we only want this rule to apply to one specific workstation.
>
> **[3:37](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=217)** Only requests coming in through the IP address that I specify will be allowed to use this rule to gain access.
>
> **[3:46](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=226)** So let me go ahead and add the IP address of our administrative workstation, 10.35.4.76.
>
> **[3:58](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=238)** And you can see here that you can use a range, or if you're in an Active Directory environment and you can specify computers, you may be able to choose some as well.
>
> **[4:07](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=247)** But let me go ahead and say OK here.
>
> **[4:10](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=250)** The action, if all of these rules apply, allow the connection.
>
> **[4:15](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=255)** Or if I'm in an environment with security certificates being passed around, I could choose Allow the Connection if it's secure.
>
> **[4:24](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=264)** Only IPsec connections, only recognized certificates are going to be granted access to this port, to this firewall rule.
>
> **[4:35](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=275)** And finally, I mentioned network profiles previously as they apply to workstations.
>
> **[4:42](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=282)** When you start defining firewall rules, it becomes clear where network profiles are used on a server.
>
> **[4:49](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=289)** A server may have multiple network interfaces that connect to different networks.
>
> **[4:54](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=294)** If I'm on a server with three network interfaces that all point internally to the Active Directory domain and one interface that points to the public or to the Internet, I can use this page to specify where my different rules apply.
>
> **[5:12](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=312)** If I don't want any requests coming in from the Internet to PowerShell Remote into my server, I can simply uncheck that box.
>
> **[5:21](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=321)** And if I've set the network interfaces that connect to my local network as domain profiles, I can leave that the only box checked.
>
> **[5:33](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=333)** Setting up firewall rules that are specific to a network profile will help sort out which sources the requests will come from and what types of access will come from these different locations.
>
> **[5:46](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=346)** Carefully craft your firewall rules to allow the access you need but not grant any unneeded traffic.
>
> **[5:54](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-firewall?u=76281980&t=354)** This is one of the most important things you can do in hardening your server's defenses.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), public (2), private (1), finally, (1), interface (1)
> **Env Vars:** tcp (2), atp (1)
> **Tools:** powershell (3)
> **Ports:** port 5985 (2)
> **UI Navigation:** go to (1), right-click (1)
> **Versions:** 10.35.4 (1)
> **Speakers:** - [instructor] (1)


### 2. Management and Administration

#### PowerShell
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=0)** - [Instructor] In the October 2009 issue of TechNet magazine a senior consultant working for Microsoft wrote.
>
> **[0:08](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=8)** "It's safe to say that the single most important skill, "a Windows administrator will need in the coming years "is proficiency with Windows PowerShell."
>
> **[0:20](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=20)** during the early preview phases of Windows Server 2019, the online magazine Network World described it as a surprise that Server 2019 even had a GUI.
>
> **[0:33](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=33)** Windows Server 2008 was the first to introduce a Windows Server with no Windows and every version since has included a version to install without the desktop experience.
>
> **[0:46](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=46)** They called it Windows Server Core.
>
> **[0:49](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=49)** In Windows Server 2016, the ability to switch back and forth between having a desktop and not was removed.
>
> **[0:58](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=58)** Then when people started installing a preview of the semi-annual releases of Windows Server.
>
> **[1:04](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=64)** They noticed that desktop experience was no longer an option it seems pretty clear that if anyone was waiting for a clear sign that it was time to learn PowerShell that writing is on the wall.
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=77)** PowerShell is made up of two different parts, first and foremost PowerShell is a scripting language.
>
> **[1:26](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=86)** Microsoft provides cmdlets, functions, and scripts.
>
> **[1:30](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=90)** To perform pretty much any management or administration task on Windows workstations and servers.
>
> **[1:39](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=99)** Add to that, the growing community of admins that are constantly adding to the repositories and galleries of downloadable add-ons to PowerShell.
>
> **[1:49](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=109)** For an even more customized experience, you can create your own functions and scripts and automate the various tasks that you have to do while administering your Windows servers The second part of PowerShell is an application, that you can use to run your PowerShell cmdlets, functions, and scripts.
>
> **[2:08](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=128)** There is a command based shell specifically for running PowerShell, and there's also an interactive developers environment, PowerShell ISE that allows you to create and test functions and scripts.
>
> **[2:22](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=142)** With an even more robust set of help and support.
>
> **[2:27](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=147)** Here we are back on our Windows 2019 Server, that we installed and configured at the very beginning of the course, here I'm going to open PowerShell and I make a habit when I am setting up a new machine.
>
> **[2:40](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=160)** Server or workstation, that has a desktop experience of pinning PowerShell to the taskbar.
>
> **[2:47](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=167)** So I'm going to go head and click on the Start menu right click on Windows PowerShell, and under the More command, I'm going to go ahead and pin that to the taskbar, so that I have easy access to it later on.
>
> **[3:02](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=182)** Let me go ahead and close the Start menu and now any time I run PowerShell I right click it and choose Run as Administrator.
>
> **[3:11](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=191)** Even if I'm using ISE, which is the more supportive developer environment, I still choose to run it as administrator to make sure that I have the access that I need.
>
> **[3:22](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=202)** To run scripts, and to access various system components on this server.
>
> **[3:27](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=207)** But for now I'm just going to run PowerShell not the developer environment.
>
> **[3:32](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=212)** I'm going to select to run it as an administrator.
>
> **[3:37](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=217)** Once again, already being logged in as administrator that extra step may be unnecessary.
>
> **[3:43](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=223)** But it's just a good habit to get into.
>
> **[3:46](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=226)** I introduced the basic syntax of a PowerShell cmdlet when we renamed this computer, and Powershell has a command memory.
>
> **[3:55](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=235)** So I'm going to up arrow twice just to once again review that cmdlet, the syntax in PowerShell is verb hyphen noun, that is the cmdlet.
>
> **[4:05](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=245)** That is the start of our expression, any parameters start with hyphen and then the name of the parameter followed by whatever the value may be.
>
> **[4:16](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=256)** If the value includes any spaces or any punctuation that might be confused for part of another command, or value or other expression then I could include this value in quotation marks, and you can use single quotation marks for things that only include spaces.
>
> **[4:34](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=274)** Or double quotation marks for anything that could be confusing to Windows later on.
>
> **[4:42](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=282)** There are a lot of cmdlets readily available to me.
>
> **[4:46](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=286)** In fact if I were to just type Get-Command, I'm going to get a list that is several screens long of things that are already built in that I can use on this machine.
>
> **[4:57](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=297)** But sometimes there's functionality that we want, that isn't included, say for example, I'd like cmdlets that will help me manage Azure components.
>
> **[5:07](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=307)** If I were to go ahead and clear the screen, just to get a little more real estate here.
>
> **[5:12](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=312)** I could type Get-Command and I could go ahead and put a wildcard in here, show me what I have available that has the word Azure in the command and there's the entire list, there's nothing.
>
> **[5:26](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=326)** If I want to go and pull an entire collection of Azure commands, I can do that.
>
> **[5:31](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=331)** I can install a module, now a module is a complete collection of cmdlets, functions, and scripts that have been put together either by Microsoft or by some other contributor in the community, and there's a huge repository of them at GitHub.
>
> **[5:50](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=350)** If I type Install-Module and I put the the AzureAD module
>
> **[5:58](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=358)** and don't specify where it's coming from, it's going to look at that GitHub repository, and since I've never installed modules on this machine before, I'm prompted to install PowerShellGet.
>
> **[6:11](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=371)** Which is a tool that is used to go out and retrieve these various packages.
>
> **[6:16](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=376)** I'm going to go ahead and say yes, I want to install that, and it will go ahead and check it out.
>
> **[6:22](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=382)** Download it, install it, and then it will come back around to asking me about AzureAD.
>
> **[6:28](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=388)** That's not a module that it was already familiar with, it's in a repository called PSGallery and I'm being asked whether or not it's okay to install this module.
>
> **[6:39](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=399)** I'm going to go ahead and say yes and it will download and install this module full of Azure Active Directory, cmdlets, functions, and scripts.
>
> **[6:54](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=414)** It seems to have run okay, let me go ahead and clear the screen one more time, and let's now take a look at what commands we have that have the word Azure somewhere in the command.
>
> **[7:08](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=428)** This is one of the simplest ways to add to the functionality of your machine, using PowerShell.
>
> **[7:14](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=434)** There are modules put together by Microsoft, as well as administrators and developers from all around the world that have shared what they've created.
>
> **[7:23](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=443)** To make it so that you don't have to create everything from start.
>
> **[7:28](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell?u=76281980&t=448)** Windows PowerShell is a highly customizable, and highly powerful possibly the most useful management and administration tool available to you on any Windows server or workstation.

> [!info]- Semantic Content
>
> **Tools:** powershell (19), github (2)
> **Code Keywords:** module (7), let (3), switch (1), from, (1)
> **Prerequisites:** install (8)
> **Definitions:** is a  (5), is an  (1)
> **CLI Commands:** make (3)
> **Env Vars:** ise (2), gui (1)
> **UI Navigation:** click on (2)
> **Analogies:** for example (1)

#### PowerShell remoting
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=0)** - [Instructor] In the last video, I said that PowerShell is possibly the single most useful tool for managing and administering Windows servers.
>
> **[0:09](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=9)** One of the features that makes that true is PowerShell remoting.
>
> **[0:13](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=13)** Here we sit at a Windows 10 Enterprise workstation that is joined to an active directory domain.
>
> **[0:21](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=21)** The servers in this domain are both running Windows server 2019 and we're going to take a look at how to use PowerShell to remotely manage those servers.
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=32)** Because being able to manage the machine where you sit is one thing but that's a lot of unnecessary running around if you have to go to the console of every single machine that you need to administer.
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=45)** Remoting is how you can manage or administer another server or better yet all of the other servers without leaving your workstation.
>
> **[0:55](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=55)** Remoting takes on two different forms.
>
> **[0:58](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=58)** Let me show you the first one.
>
> **[1:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=60)** Here in PowerShell, I can start a new session where I'm actually remote controlling PowerShell on the domain controller.
>
> **[1:09](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=69)** Let me show you what I mean.
>
> **[1:11](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=71)** There's a command to take a look at the active directory users on your active directory domain, it's Get-ADUser.
>
> **[1:20](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=80)** There's a required parameter of filter and if I just filter star, then that's the cmdlet that will pull a list of all of the users in my active directory domain.
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=92)** If I run that command, I'm on a workstation that doesn't have any active directory tools installed so I get an error saying that that command is not available to me, that's not recognized.
>
> **[1:44](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=104)** Well, let's go ahead and start a session with our domain controller.
>
> **[1:48](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=108)** If I type New-PSSession, I can specify the computer that I want to remotely connect to.
>
> **[2:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=120)** So let's say computer name is dc01.
>
> **[2:05](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=125)** And if I was logged into someone that didn't have access to dc01, I could add another credential parameter but I'm logged in as CWhite which is one of our administrative team so I'm going to go ahead and just run that.
>
> **[2:21](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=141)** And that's going to create a session.
>
> **[2:23](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=143)** I haven't entered the session but the session is there.
>
> **[2:26](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=146)** I now have a session with the ID of one, to the computer name dc01, it's available, it's opened, it's ready for me to use.
>
> **[2:36](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=156)** So now I can run one other PowerShell cmdlet, Enter-PSSession, and if you're new to PowerShell, you may have noticed and wondered why I capitalize things the way I do.
>
> **[2:51](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=171)** This is called Pascal case and it's the default and the best practice in PowerShell.
>
> **[2:58](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=178)** It's not necessarily required but it helps to diagnose problems when an expression doesn't do what you thought it was supposed to.
>
> **[3:06](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=186)** You capitalize the beginning of each word even as you have to run those words together.
>
> **[3:11](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=191)** So if I want to enter PSSession, I can specify the parameter of ID and put in the number one because that's the ID number of the session that we created.
>
> **[3:24](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=204)** So when I go ahead and hit Enter, it looks like I left out a space between ID and one, it thinks one is part of the parameter name and that's not recognized.
>
> **[3:34](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=214)** So let's up arrow and just fix that.
>
> **[3:38](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=218)** Enter-PSSession with the ID of one and then I'll go ahead and hit Enter on that.
>
> **[3:47](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=227)** And here you can see the new prompt has dc01 in square brackets at the beginning of the prompt.
>
> **[3:54](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=234)** That means I'm actually operating on that remote machine.
>
> **[3:58](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=238)** Let me clear the screen again to bring this to the top and while remoted into the domain controller, I can run Get-ADUser one more time with the filter of star and this is a domain that was created just for this lab.
>
> **[4:15](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=255)** So there aren't very many users to get but we can see that it did go ahead and pulled the entire list.
>
> **[4:24](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=264)** Once I'm done with this session, I can just type exit and you'll see that my prompt returned to as it was before.
>
> **[4:32](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=272)** I'm no longer remoting the domain controller.
>
> **[4:36](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=276)** If I clear the screen one more time and try my Get User cmdlet, once again, I'm going to be told that the cmdlet is not recognized.
>
> **[4:46](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=286)** Now there are other times that you might want to just run a command on multiple servers at the same time rather than remoting into one specific server.
>
> **[4:56](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=296)** I can do that using another expression, Invoke-Command will allow me to specify a script block.
>
> **[5:11](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=311)** And then inside curly braces, I can put an entire function or script, or several PowerShell cmdlets that all want to be run.
>
> **[5:22](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=322)** Let me use a simple one.
>
> **[5:23](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=323)** Let's just say Get-Process.
>
> **[5:28](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=328)** That will pull a list of processes running on a server and then I can add a list of computer names and I will put them in parenthesis.
>
> **[5:39](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=339)** I'm going to put each computer name in quotation marks and separate them using commas.
>
> **[5:45](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=345)** So I can say dc01, close the quotation marks, and let's go ahead and put server three in the list as well.
>
> **[5:59](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=359)** Now if I go ahead and run this cmdlet, it will reach out to both of these machines and it will pull all of the running processes on both server three and if I scroll back up, dc01.
>
> **[6:16](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=376)** Now that pulled a list of processes from these two servers.
>
> **[6:19](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=379)** But I could just as easily pull the same information from every server in the domain or maybe from every laptop in one active directory container.
>
> **[6:29](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=389)** The list of computers can be as long as you need.
>
> **[6:32](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=392)** It could even be an expression that searches for computer names in active directory.
>
> **[6:37](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=397)** By default, PowerShell will run them 32 computers at a time to manage processor time and memory usage but you can retrieve information from a lot more than that.
>
> **[6:48](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=408)** In addition to having commands for every facet of a Windows workstation or server, anything PowerShell can do locally, it can also do remotely on more than one machine at a time.
>
> **[7:01](https://www.linkedin.com/learning/windows-server-2019-essential-training/powershell-remoting?u=76281980&t=421)** That's one of the reasons that I stand by my statement that PowerShell is probably the most useful tool you can have in administering a Windows network.

> [!info]- Semantic Content
>
> **Tools:** powershell (12)
> **Code Keywords:** let (9), function (1), default, (1)
> **Definitions:** is called (1), is a  (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** go to (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### Installing the Windows Admin Center
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=0)** - [Instructor] For all of PowerShell's flexibility and capability, there is an area where it falls short.
>
> **[0:07](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=7)** This text-only environment where Powershell operates, lacks the ability to display comprehensive reports that are easy to quickly view and interpret.
>
> **[0:17](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=17)** Before we get into take a look at examples of what I'm talking about.
>
> **[0:22](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=22)** Let's first go through the process of installing the Windows Admin Center.
>
> **[0:27](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=27)** The newest Administration tool from Microsoft.
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=32)** We're still here on the Windows 10 Workstation that is joined to our active directory domain and from here, I'm just going to do a simple web search for download windows admin center.
>
> **[0:46](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=46)** Whenever you do one of these searches, look for something at [microsoft.com](https://microsoft.com).
>
> **[0:51](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=51)** At Microsoft documents websites you'll often find some of the most helpful information.
>
> **[0:56](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=56)** And here I can find Hello, Windows Admin Center and here's a link to go ahead and download it.
>
> **[1:04](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=64)** So let me go ahead and download that.
>
> **[1:07](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=67)** To make it easy to find I'm going to save it on the Desktop.
>
> **[1:14](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=74)** And it's not even a very big file, you can see that downloaded pretty quickly.
>
> **[1:20](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=80)** I did a little bit of background work on this machine before starting this demo.
>
> **[1:26](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=86)** I installed an SSL Certificate, because the Windows Admin Center is a web-based administration tool.
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=93)** Meaning this workstation is about to host a website specifically to be accessed on this machine, but it's a website nonetheless.
>
> **[1:42](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=102)** And so it will open in a browser.
>
> **[1:45](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=105)** So a certificate that is trusted is necessary to verify the identity of this website.
>
> **[1:52](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=112)** So now that it's downloaded, let me go ahead and close all of these extra windows and just go ahead and run the installer packages for the Windows Admin Center.
>
> **[2:03](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=123)** And it's pretty straight forward except the license agreement.
>
> **[2:07](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=127)** Move on to Next, it asks you whether you want to receive your updates from Windows Update or from Microsoft Update, or if you want to track that yourself.
>
> **[2:17](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=137)** I'm going to go ahead and select use Microsoft Update.
>
> **[2:20](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=140)** I found that to be the most useful path to take.
>
> **[2:24](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=144)** And as I move Next, you can see that I can select a TCP port for the WAC or the Windows Admin Center website.
>
> **[2:34](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=154)** I'm going to leave the default of 6515 and when we look at the following options, we can allow Windows Admin Center Install to modify the trusted hosts, so that we don't receive security errors.
>
> **[2:50](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=170)** We can choose to create a desktop shortcut to launch the Admin Center.
>
> **[2:55](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=175)** Because it will always open in a browser, I'm going to go a different route.
>
> **[2:59](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=179)** I'm just going to create a bookmark in my browser instead.
>
> **[3:03](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=183)** So, when I go ahead and click Install, it will go through the process of making all of these changes, which in true fashion, Windows wants me to verify that that's okay.
>
> **[3:14](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=194)** So I click Yes, and then we get the exciting process of watching that progress bar move across the screen.
>
> **[3:23](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=203)** We're going to go ahead and speed that up a little bit so that you don't have to wait to long on me.
>
> **[3:29](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=209)** There we go, now that we've completed that part of the install, you can see here, that we're reminded that we're going to need to apply a certificate.
>
> **[3:38](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=218)** The first time we run the WAC, we'll be asked if we have a certificate and we can select it.
>
> **[3:45](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=225)** So we're going to make sure that we choose the certificate that will be trusted.
>
> **[3:49](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=229)** In fact, let's go ahead and do it right now by checking the box to open Windows Admin Center, and click Finish.
>
> **[3:58](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=238)** Here we're once again asked to verify that this potentially system altering command is allowed to run.
>
> **[4:05](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=245)** Let me go ahead and say Yes.
>
> **[4:08](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=248)** And then our default browser should open shortly.
>
> **[4:14](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=254)** Here I am, on localhost and there's that port number that we were allowed to choose, 6516.
>
> **[4:21](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=261)** And here's the certificate.
>
> **[4:24](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=264)** We can select the Windows Admin Center Client Certificate.
>
> **[4:28](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=268)** This is the one we were told to look for.
>
> **[4:30](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=270)** So I'm going to go ahead and click OK to select that certificate.
>
> **[4:37](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=277)** And here we are being welcomed to the Admin Center.
>
> **[4:41](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=281)** That's all it takes to install this on a workstation.
>
> **[4:46](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=286)** Installing it on a server is really the same process.
>
> **[4:49](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=289)** The biggest difference is, once you're done, you can access that web server from multiple stations around your network.
>
> **[4:58](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=298)** What we just did allows us to use the Windows Admin Center on this workstation.
>
> **[5:03](https://www.linkedin.com/learning/windows-server-2019-essential-training/installing-the-windows-admin-center?u=76281980&t=303)** And coming up we're going to take a look at some of the differences in using this tool versus some of the other versions of administration and management that we've talked about.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), for. (1)
> **CLI Commands:** find (3), make (2)
> **Env Vars:** wac (2), ssl (1), tcp (1)
> **Prerequisites:** install (4)
> **Tools:** powershell (2)
> **Definitions:** is an  (1), is a  (1)
> **URLs:** [microsoft.com](https://microsoft.com) (1)
> **Cross-References:** coming up (1)

#### Windows Admin Center management
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=0)** - [Instructor] I mentioned previously that one of PowerShell's limitations is that it doesn't have easy to view reports.
>
> **[0:08](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=8)** Let's take a look at an example.
>
> **[0:10](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=10)** If I go ahead and run PowerShell as an administrator on this workstation, go ahead and say yes so that we have permission.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=18)** I can run cmdlets to look at some of the basic storage management information.
>
> **[0:24](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=24)** I can type Get-Disk and when I look at the results, it will look very much like the bottom half of the old disk management tool that we've seen before.
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=35)** If I were to run the cmdlet Get-Volume, it'll give me information that looks a lot like the top half.
>
> **[0:42](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=42)** The only problem is I can't do much with this information.
>
> **[0:46](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=46)** It's not like I can right click on one of these lines of text and make any changes.
>
> **[0:50](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=50)** These are some of the limitations of working in PowerShell.
>
> **[0:56](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=56)** Here in the Admin Center however, there's a little bit of a different story.
>
> **[1:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=60)** Let me go ahead and maximize this and for now, let's go ahead and skip the tour.
>
> **[1:07](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=67)** This is the Windows Admin Center.
>
> **[1:09](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=69)** During previous stages, it was known as Project Honolulu and it's a management tool that first made its debut when Microsoft was releasing semi-annual versions of Windows Server.
>
> **[1:22](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=82)** From here, I can add connections to any of the servers in the domain.
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=87)** I can choose to add a connection to the domain controller and if I'm pointed to the DNS server that knows where these servers are found, I can type out the name of the server and DNS will search for it for me.
>
> **[1:44](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=104)** And if it can find it, there it is, found, submit, it's going to ask me about some credentials possibly.
>
> **[1:51](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=111)** It looks like since I'm logged in as cwhite who has administrative privileges, it allowed to make that connection without an additional log in.
>
> **[2:01](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=121)** And from here, I can open that server and I can have access to a lot of management processes.
>
> **[2:09](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=129)** And I've been using the terms management and administration.
>
> **[2:13](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=133)** And I want to make sure that we're all on the same page as to what these words mean.
>
> **[2:18](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=138)** Management usually refers to the things that you can configure about what a server is or what it has.
>
> **[2:26](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=146)** Administration refers to configuration of what a server does.
>
> **[2:32](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=152)** You would manage things like disk configuration or network addresses.
>
> **[2:39](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=159)** You would administer things like DNS or active directory, other server roles.
>
> **[2:46](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=166)** The Windows Admin Center is designed for management more than administration.
>
> **[2:52](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=172)** The WAC can only be installed on reasonably current versions of Windows Server or Windows Workstation.
>
> **[2:59](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=179)** It can install on Windows 10 Pro or Enterprise, and it can install on servers 2016, anything in the Semi-Annual release channel as well as Windows Server 2019.
>
> **[3:13](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=193)** But it's capable of managing Windows 10 and beyond and in terms of servers, Windows Server 2012 and beyond.
>
> **[3:23](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=203)** Here where you can see that we've added the domain controller, we have a list that looks and feels a lot like working in Azure and that's on purpose.
>
> **[3:32](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=212)** We can manage several aspects of our server, things that the server is and things that the server has.
>
> **[3:40](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=220)** If I scroll down through this alphabetic list, here we can find storage.
>
> **[3:47](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=227)** And off to the right, we can see the same information that we were able to spot in PowerShell but we can quickly move back and forth between different aspects of the storage management on that remote server.
>
> **[4:02](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=242)** We could just as easily look this information up on the local machine but we're talking about remote administration here.
>
> **[4:09](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=249)** Within each category, volumes, file shares, disks, there are tasks that we can perform.
>
> **[4:16](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=256)** We can select the volume where Windows is installed and we can do things like resize the volume and edit the volume properties like the name of the volume and so forth.
>
> **[4:29](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=269)** All of the same tasks that we could do in disk management locally.
>
> **[4:35](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=275)** It even takes things a bit further.
>
> **[4:37](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=277)** If I scroll back up in the list and go to the Files menu, we can take storage management to a different level.
>
> **[4:44](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=284)** Here we can go so far as to create folders and to move content around within the drives.
>
> **[4:51](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=291)** We have all of this access through this single Admin Center.
>
> **[4:56](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=296)** You don't have to install this Admin Center on every server that you want to monitor as you've seen in this demonstration, you can install it on the workstation where you'll be sitting when you do the work or you could put it on a server to host as a website to allow more widespread access to these management tools.
>
> **[5:15](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=315)** This Admin Center is designed after the pattern that's already been created in Azure.
>
> **[5:20](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=320)** Also the Admin Center's created for exchange, SharePoint and many others.
>
> **[5:26](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-admin-center-management?u=76281980&t=326)** The application of this type of web portal for managing servers is a natural evolution and it provides many benefits to anyone managing Windows servers.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), find (2)
> **Prerequisites:** install (4), configure (1)
> **Env Vars:** dns (3), wac (1)
> **Tools:** powershell (4)
> **Definitions:** refers to (2), known as (1), is a  (1)
> **Code Keywords:** let (3)
> **UI Navigation:** scroll down (1), select the (1), go to (1)
> **Speakers:** - [instructor] (1)

#### Desktop experience administration tools
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980&t=0)** - [Instructor] There is something that I've observed about Microsoft products over the past couple of decades.
>
> **[0:06](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980&t=6)** While they are constantly innovating and improving both the user and administrator experience, there is always consideration for tradition.
>
> **[0:15](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980&t=15)** With all of the new management and administration style tools, the MMC style tools are still available for the most part.
>
> **[0:25](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980&t=25)** Some of the legacy control panels have given way to the new interface that was debuted in Windows version 8.
>
> **[0:33](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980&t=33)** But for the most part, the administration tools have remained largely unchanged.
>
> **[0:38](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980&t=38)** Here in the server manager we still have a tools menu.
>
> **[0:42](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980&t=42)** And in that list are the same tools that we've become accustomed to using for the past several years.
>
> **[0:50](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980&t=50)** Whenever you use the server manager to install a role or a feature, you're prompted to add the administration tools which includes PowerShell modules as well as these GUI desktop experience tools.
>
> **[1:03](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980&t=63)** And as we look through this list, we see the tools for every role that we have installed.
>
> **[1:09](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980&t=69)** This is a domain controller, so all of the active directory tools are here.
>
> **[1:14](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980&t=74)** This server is a DNS server, so it has the DNS tool.
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980&t=78)** It's also a certificate authority, so the certification authority tool is readily available.
>
> **[1:24](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980&t=84)** There's a role that's not installed, let's say DHCP.
>
> **[1:28](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980&t=88)** And so that tool is not in the list.
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980&t=92)** If we were to go through the process of adding a role using this wizard, as was done early on in the course, we would be prompted to add that tool as part of installing the role.
>
> **[1:43](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980&t=103)** Working in PowerShell, it may not be as obvious.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980&t=107)** If I go and look at the PowerShell process for adding a role, I can use the cmdlet Install Windows Feature.
>
> **[2:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980&t=120)** And if I were to go ahead and specify that I wanted to install DHCP and hit enter, it would install just that role without any of the tools.
>
> **[2:12](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980&t=132)** I actually have to remember to use the parameter Include Management Tools as an option.
>
> **[2:23](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980&t=143)** That parameter is required if I want to get the PowerShell module or administrative tools necessary to take care of that role.
>
> **[2:33](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980&t=153)** Let's go back over to the server manager.
>
> **[2:37](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980&t=157)** I'll close out of PowerShell.
>
> **[2:39](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980&t=159)** And here in the server manager if I were to start the process to add roles and features, I can go through the initial process just as we've seen before.
>
> **[2:49](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980&t=169)** Yes, I want to install a role or a feature.
>
> **[2:52](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980&t=172)** And I want to install it on this machine.
>
> **[2:55](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980&t=175)** If I go right past the list of roles to look at the list of features and scroll down in this alphabetic list, you can see a category called Remote Server Administration Tools.
>
> **[3:08](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980&t=188)** It labels it as remote because the assumption is the only reason you're here to add a tool is because you need to manage a role installed somewhere else.
>
> **[3:19](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980&t=199)** However, this can be used to install the tools for any feature or role, whether it's installed on this machine or another.
>
> **[3:27](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980&t=207)** And here you can see it broken down by feature administration and role administration.
>
> **[3:33](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980&t=213)** If I expand role administration, I could install the DHCP server tool on this domain controller so that it can be used to manage DHCP whether it's installed on this box, which is probably a bad idea to add DHCP to your domain controller, or on some other machine elsewhere in the network.
>
> **[3:54](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980&t=234)** Any of these tools can be added by simply selecting them and then finishing the install process.
>
> **[4:01](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980&t=241)** Now we're not installing the actual role or feature, it's just the tools to manage it, so these installation processes usually don't take too long.
>
> **[4:13](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980&t=253)** And now that that installation has succeeded, I can close this box and under the tools menu, I now have DHCP.
>
> **[4:22](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980&t=262)** From here, I can choose to connect to an authorized DHCP server in my domain.
>
> **[4:29](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980&t=269)** There it is, I can select it and say okay.
>
> **[4:32](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980&t=272)** And I can have full DHCP administration capabilities from this administration tool right here on my server.
>
> **[4:40](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980&t=280)** Now, it's never really been the best practice to conduct all of your administrative functions from the console of a server, any server.
>
> **[4:49](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980&t=289)** That makes things complicated when you consider that the check boxes to install these tools don't exist on Windows workstations.
>
> **[4:57](https://www.linkedin.com/learning/windows-server-2019-essential-training/desktop-experience-administration-tools?u=76281980&t=297)** In the next segment, we're going to take a look at how you can get the tools that are available to do all of the same administration from a machine that is not a Windows server, from a Windows workstation, maybe the administrative workstation in your office.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (8), dns (2), mmc (1), gui (1)
> **Prerequisites:** install (10)
> **Code Keywords:** let (2), interface (1), module (1), else. (1)
> **Tools:** powershell (5)
> **Definitions:** is a  (2)
> **Best Practices:** remember to (1), best practice (1)
> **Versions:** version 8 (1)
> **Cross-References:** in the next (1)

#### RSAT
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=0)** - [Instructor] The Windows Admin Center is a flexible tool for remotely managing Windows Servers.
>
> **[0:06](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=6)** But it doesn't yet have add-ins for administering every Windows Server role and feature.
>
> **[0:12](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=12)** PowerShell can be used to perform just about any management and administration task, locally or remotely.
>
> **[0:21](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=21)** But it lacks reporting tools and despite the fact that PowerShell is over 20 years old, there are still quite a few administrators that have not taken the time to learn how to use it.
>
> **[0:33](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=33)** The MMC style administrative tools that can be added to a Windows Server by simply checking boxes in the Server Manager are not available by just loading a screen and checking boxes on a Workstation.
>
> **[0:47](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=47)** They are available, but they have to be downloaded from Microsoft.
>
> **[0:53](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=53)** There are only a couple of requirements for these Remote Server Administration Tools, as we look at downloading them here.
>
> **[1:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=60)** The first is that you have to be running Professional or Enterprise editions of the Windows Workstation operating system.
>
> **[1:08](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=68)** That shouldn't be too big of a concern, because a workplace with servers to manage is likely to be using an Active Directory domain and Professional and Enterprise editions of Windows Workstation platforms are required to join those domains.
>
> **[1:25](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=85)** The second requirement is that you're running a version of Windows on your Workstation that is similar to the version of your Windows Server.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=94)** Okay, that's not really a requirement, so much as a strong suggestion, but take a look at the search results for downloading RSAT, for Remote Server Administration Tools.
>
> **[1:46](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=106)** The most popular result, the one that shows up at the top of the list, is RSAT for Windows 10.
>
> **[1:53](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=113)** The next result in this search was RSAT for Windows 7.
>
> **[1:59](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=119)** You need to install the Remote Server Administration Tools that were written for your Workstation operating system.
>
> **[2:08](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=128)** That can become a concern if you've been moving forward with your Workstations and not your servers, or the other way around.
>
> **[2:16](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=136)** You can see here in the description of the Server Tools for Windows 7 that it's designed to administer servers running Windows Server 2008 and Windows Server 2003.
>
> **[2:30](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=150)** While the Administration Tools that are available to install on Windows 10 are going to be designed for Windows Server 2016, 2019, and the semi-annual releases that came out in between and since.
>
> **[2:46](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=166)** I'm going to go ahead and select the link to the page with information about Server Administration Tools for Windows 10.
>
> **[2:53](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=173)** And as I scroll down a little bit I can choose my language, that's an easy one.
>
> **[2:59](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=179)** Once I click Download I get a list of options.
>
> **[3:03](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=183)** Not only do I have to choose the download for Windows 10, I should be selecting the one that is specific to my edition or my update version of Windows 10.
>
> **[3:15](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=195)** Well, I'm running a 64-bit version that has the 1803 updates.
>
> **[3:20](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=200)** So this is the edition of the Remote Server Administration Tools that I'm looking for.
>
> **[3:27](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=207)** It's a Windows Workstation running 1803 update and the 64-bit version of the operating system.
>
> **[3:35](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=215)** Now I can go ahead and click Next.
>
> **[3:38](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=218)** And here I am downloading this file.
>
> **[3:42](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=222)** I'm going to save it to the Desktop just to make it easy to find for the installation and then I'll delete it when I'm done.
>
> **[3:48](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=228)** The file is not that large.
>
> **[3:51](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=231)** It should download relatively quickly.
>
> **[3:53](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=233)** It looks like it is done, running the security scan now.
>
> **[3:58](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=238)** All right, now that that's done I'm going to go ahead and close the browser and there's the download.
>
> **[4:04](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=244)** Let me go ahead and run it.
>
> **[4:09](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=249)** Now you'll notice that this file is installing as a Windows Update.
>
> **[4:15](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=255)** That is the type of file that we downloaded, and so it uses the Update Standalone Installer to add this to our machine.
>
> **[4:23](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=263)** So I'm going to go ahead and say Yes.
>
> **[4:28](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=268)** And once this adds itself to the Windows Update cache we're going to get the Download and Install Updates prompt.
>
> **[4:36](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=276)** Accept the license and it will go ahead and install this as an Update file.
>
> **[4:46](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=286)** Once you've installed you'll find that you have a new program icon on the Start menu.
>
> **[4:54](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=294)** We have the Windows Admin Center, which we've looked at before, but if we scroll down a little bit near the bottom of the list we now have Windows Administrative Tools.
>
> **[5:05](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=305)** And in this list we have everything that could be added to the Tools menu of the Server Manager readily available for us right here on our Workstation.
>
> **[5:15](https://www.linkedin.com/learning/windows-server-2019-essential-training/rsat?u=76281980&t=315)** Between PowerShell with remoting, the Windows Admin Center, and now RSAT, the only reason you should ever have to enter the server room is to work on hardware or maybe just to bask in the glow of the blinking lights.

> [!info]- Semantic Content
>
> **Env Vars:** rsat (4), mmc (1)
> **Prerequisites:** install (4), required to (1)
> **CLI Commands:** find (2), make (1)
> **Code Keywords:** for. (1), delete (1), let (1)
> **Tools:** powershell (3)
> **UI Navigation:** scroll down (2), select the (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)


### 3. Windows Server Environments

#### Upgrading Active Directory
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=0)** - [Instructor] Active Directory Domain Services is one of the Windows Server roles that evolves at least slightly with each new version of Windows Server.
>
> **[0:09](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=9)** The Active Directory Domain Services Schema is the design of the database that defines what types of objects are stored, what properties are maintained for each object, and how these different objects or classes relate to each other.
>
> **[0:26](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=26)** If you're a beginner to databases consider a simple database application, like Access.
>
> **[0:31](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=31)** When you create a database in Access you create tables for each type of information or class of object that you want to track, computers, operating systems, users, and so forth.
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=45)** In each table you have a list of fields or properties that describe each record or object in the table.
>
> **[0:53](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=53)** Perhaps for a computer your defining properties are the name of the computer, the location, or various configuration details.
>
> **[1:03](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=63)** If your environment were to grow and become more diverse you're going to need to track more things.
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=70)** You're going to need more tables, you're going to need to add or redefine fields within those tables, and you may need to redraw relationships between them.
>
> **[1:21](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=81)** This kind of change needs to happen when you introduce a new version of Windows Server as a domain controller in an Active Directory domain.
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=92)** You can make those changes manually before adding a Windows 2019 server as a domain controller in a previous version, say 2016 Server domain.
>
> **[1:44](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=104)** The AD prep application is on the Windows Server 2019 disk.
>
> **[1:49](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=109)** If I was to just browse out to the install media inside the support folder here is adprep for Active Directory prep.
>
> **[1:59](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=119)** And inside that folder is the adprep application.
>
> **[2:03](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=123)** But it's not necessary to run that separately.
>
> **[2:06](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=126)** It's understood that this kind of upgrade needs to happen.
>
> **[2:10](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=130)** Promoting a Windows 2019 server to domain controller will run this elevation for you.
>
> **[2:18](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=138)** Let me go ahead and close this and let's take a look at our Windows 2016 server domain controller.
>
> **[2:26](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=146)** Here we have our domain controller, you can see that Active Directory Domain Services is installed and that this is a Windows Server 2016 Datacenter edition server.
>
> **[2:37](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=157)** It's been configured in a virtual machine with eight GIG of RAM that's dynamically expanding.
>
> **[2:43](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=163)** So you'll see the installed memory fluctuate a little bit as we go through this process.
>
> **[2:50](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=170)** I'm going to first open PowerShell and take a look at the functional level of Active Directory on this server.
>
> **[2:57](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=177)** I can do that with the Get-AdObject commandlet.
>
> **[3:05](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=185)** And specifically what I want to look for is going to be pulled from the Get-AdRootDSE commandlet.
>
> **[3:17](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=197)** And there's a specific property inside those results that I want to pull.
>
> **[3:22](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=202)** And that is the schemaNamingContext.
>
> **[3:27](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=207)** And I'm going to get even more specific than that as I look up a specific property of that object, the objectVersion.
>
> **[3:45](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=225)** And when we take a look at the results we can see that our Active Directory Schema is of the objectVersion 87.
>
> **[3:54](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=234)** I'm going to leave this screen right here, so we can come back and compare later.
>
> **[3:58](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=238)** Let's switch back over to our Windows 2019 server.
>
> **[4:03](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=243)** We can see that this server has already been joined to the domain, so let me go ahead and add the Active Directory Domain Services role.
>
> **[4:12](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=252)** From the Dashboard, Add roles and features, we've seen this Wizard before.
>
> **[4:18](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=258)** As we get to the list of roles I'm going to select Active Directory Domain Services.
>
> **[4:24](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=264)** There are several prerequisites and tools that need to be added, I'm going to accept all of them.
>
> **[4:29](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=269)** And then I will go ahead and just progress to the point where it starts the installation.
>
> **[4:37](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=277)** Now Windows Server 2019 seems to install things a little quicker than previous versions, but it still takes a while, so we're going to fast-forward through this progress bar and get to the next stage.
>
> **[4:50](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=290)** All right, here we are.
>
> **[4:51](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=291)** And now I'm going to follow this link to Promote this server to a domain controller.
>
> **[4:57](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=297)** Remember, this is a Windows 2019 server, becoming a domain controller alongside an existing Windows Server 2016 domain.
>
> **[5:07](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=307)** So when I choose to promote the first screen is probably the most important.
>
> **[5:12](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=312)** This is where I specify that I am adding a domain controller to an existing domain.
>
> **[5:18](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=318)** I need to specify the domain and I need to make sure that the credentials provided here, the currently logged on user, or I could change it, this is a user account that has the permissions and rights necessary to create a new domain controller in our Active Directory environment.
>
> **[5:35](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=335)** And that is all correct, so I'm going to go ahead and move forward.
>
> **[5:43](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=343)** I'll specify a password here.
>
> **[5:49](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=349)** And accept defaults the rest of the way through.
>
> **[5:53](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=353)** No DNS delegation is available, that's fine, that was to be expected.
>
> **[5:59](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=359)** Here I'm prompted to select which domain controller I want to replicate my information from, so I'll go ahead and choose the Windows 2016 domain controller.
>
> **[6:11](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=371)** Next, the paths are fine.
>
> **[6:14](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=374)** The Preparation Options, this is where it's telling me that it's going to have to perform the following Active Directory preparation.
>
> **[6:23](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=383)** This forest and schema preparation.
>
> **[6:25](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=385)** And then adding and modifying objects within the domain to fit the new schema.
>
> **[6:31](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=391)** This is where I'm being told that that will be done for me.
>
> **[6:35](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=395)** So Next.
>
> **[6:37](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=397)** Review the options, let it do the Prerequisite Check.
>
> **[6:41](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=401)** And it's just reminding me of the old legacy NT 4 security concerns, as well as pointing out that the DNS delegation can't happen.
>
> **[6:52](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=412)** Both of those were expected and not really errors as far as I'm concerned.
>
> **[6:56](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=416)** And everything passed.
>
> **[6:58](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=418)** So let me go ahead and click Install.
>
> **[7:03](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=423)** Notice that when I do the first thing that shows up up here in the Progress was updating the forest and updating the domain.
>
> **[7:12](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=432)** That was the AD prep being done for us.
>
> **[7:16](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=436)** Once this installation is complete and the server is rebooting I'm going to switch back over to the 2016 server and let's check that version again.
>
> **[7:28](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=448)** Okay, now that the reboot of our new domain controller is complete here we are back on our Windows 2016 server.
>
> **[7:36](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=456)** Remember, previously we found that our schema was objectVersion 87.
>
> **[7:42](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=462)** I'm going to take advantage of the command memory in PowerShell and use the up arrow, so that I don't have to type out that big, long command again.
>
> **[7:51](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=471)** When I run that again we can see that the objectVersion has changed.
>
> **[7:56](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=476)** It doesn't appear to have changed by a lot, but we can see that the Active Directory preparation built into configuring the role on a new server was able to complete on its own.
>
> **[8:09](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=489)** In theory you can perform an in-place upgrade on a Windows 2012 RT or a Windows 2016 domain controller, so long as you stop and restart some services.
>
> **[8:21](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=501)** But I've had mixed results in my testing.
>
> **[8:24](https://www.linkedin.com/learning/windows-server-2019-essential-training/upgrading-active-directory?u=76281980&t=504)** It's best practice to go ahead and bring up a new server and you've seen just how easy it is to perform this upgrade on Active Directory.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), switch (2), while, (1), from, (1)
> **Code Identifiers:** objectversion (4), schemanamingcontext (1)
> **Env Vars:** dns (2), gig (1), ram (1)
> **Prerequisites:** install (3), prerequisite (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (2)
> **Tools:** powershell (2)
> **Best Practices:** best practice (1)

#### Planning sites and services
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-essential-training/planning-sites-and-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/planning-sites-and-services?u=76281980&t=0)** - [Instructor] As we continue to explore the environments where Windows servers may operate, I want to show you one of the most common oversights in Windows server administration.
>
> **[0:11](https://www.linkedin.com/learning/windows-server-2019-essential-training/planning-sites-and-services?u=76281980&t=11)** Let's go ahead and open PowerShell, and take a look at one of our system properties.
>
> **[0:17](https://www.linkedin.com/learning/windows-server-2019-essential-training/planning-sites-and-services?u=76281980&t=17)** Specifically, what I want to look at is the name of our Active Directory site.
>
> **[0:22](https://www.linkedin.com/learning/windows-server-2019-essential-training/planning-sites-and-services?u=76281980&t=22)** Now clearly, this detail is buried fairly deep within the system information of our machine.
>
> **[0:29](https://www.linkedin.com/learning/windows-server-2019-essential-training/planning-sites-and-services?u=76281980&t=29)** It looks like it's probably significant, so I'm going to go ahead and hit Enter and see what the name of our Active Directory site is.
>
> **[0:38](https://www.linkedin.com/learning/windows-server-2019-essential-training/planning-sites-and-services?u=76281980&t=38)** Well, it looks like it's named Default-First-Site-Name.
>
> **[0:43](https://www.linkedin.com/learning/windows-server-2019-essential-training/planning-sites-and-services?u=76281980&t=43)** You aren't asked to set this value while creating an Active Directory domain or forest, so it's often skipped over, and that's unfortunate, because it's not an easy thing to change once the domain has already been populated with computers, users and various other things.
>
> **[1:01](https://www.linkedin.com/learning/windows-server-2019-essential-training/planning-sites-and-services?u=76281980&t=61)** As soon as you begin the creation of an Active Directory forest, it's time to name that first site.
>
> **[1:08](https://www.linkedin.com/learning/windows-server-2019-essential-training/planning-sites-and-services?u=76281980&t=68)** Let me go ahead and close PowerShell.
>
> **[1:11](https://www.linkedin.com/learning/windows-server-2019-essential-training/planning-sites-and-services?u=76281980&t=71)** In Server Manager, I'm going to go to the Tools menu, and open Active Directory Sites and Services.
>
> **[1:20](https://www.linkedin.com/learning/windows-server-2019-essential-training/planning-sites-and-services?u=76281980&t=80)** Here, you can assign a name to that first site immediately after creating the forest, before you join any other servers to the domain, and definitely before you promote any more domain controllers.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2019-essential-training/planning-sites-and-services?u=76281980&t=94)** Let me right-click on that, and rename it.
>
> **[1:38](https://www.linkedin.com/learning/windows-server-2019-essential-training/planning-sites-and-services?u=76281980&t=98)** The name you give is also significant.
>
> **[1:40](https://www.linkedin.com/learning/windows-server-2019-essential-training/planning-sites-and-services?u=76281980&t=100)** It should be geographically significant.
>
> **[1:44](https://www.linkedin.com/learning/windows-server-2019-essential-training/planning-sites-and-services?u=76281980&t=104)** I'm going to name this LACorp to designate that this is our corporate data center in Southern California near our Los Angeles headquarters.
>
> **[1:55](https://www.linkedin.com/learning/windows-server-2019-essential-training/planning-sites-and-services?u=76281980&t=115)** The reason it's important to consider geography when naming your sites, is that the primary purpose of Active Directory Sites and Services is to set up network paths to define the links between sites, so it's a good idea to name your sites for where they exist geographically.
>
> **[2:17](https://www.linkedin.com/learning/windows-server-2019-essential-training/planning-sites-and-services?u=76281980&t=137)** Like I said, the primary function of Active Directory Sites and Services is to establish traffic patterns between your physical locations.
>
> **[2:26](https://www.linkedin.com/learning/windows-server-2019-essential-training/planning-sites-and-services?u=76281980&t=146)** So, planning your sites starts by defining physical locations on your wide area network.
>
> **[2:35](https://www.linkedin.com/learning/windows-server-2019-essential-training/planning-sites-and-services?u=76281980&t=155)** A global chain of hotels might have a site for each metropolitan area that they serve.
>
> **[2:42](https://www.linkedin.com/learning/windows-server-2019-essential-training/planning-sites-and-services?u=76281980&t=162)** A smaller regional company might have sites for each separate location, and a company that works entirely out of one facility, might only have one site, but it's still a good idea to give it a name.
>
> **[2:57](https://www.linkedin.com/learning/windows-server-2019-essential-training/planning-sites-and-services?u=76281980&t=177)** When you create multiple sites, the next thing you need to do is establish link values, and these are numbers that you can set based on speed, or bandwidth between sites.
>
> **[3:10](https://www.linkedin.com/learning/windows-server-2019-essential-training/planning-sites-and-services?u=76281980&t=190)** This helps you define the preferred paths that network traffic will travel, from one end of the network to each other.
>
> **[3:18](https://www.linkedin.com/learning/windows-server-2019-essential-training/planning-sites-and-services?u=76281980&t=198)** For example, in this scenario, if I needed to get a packet from Canada to the U.K., I could take the slower, higher cost path of 400 to go direct, or, I could add 100 to 200, I could send the package down to the U.S., and over to the U.K., it will get there faster, and I can assign costs to the links to make sure that that traffic follows the shorter path.
>
> **[3:48](https://www.linkedin.com/learning/windows-server-2019-essential-training/planning-sites-and-services?u=76281980&t=228)** There are network applications like Exchange that may add their own link values on top of what's already there, but they can only do that if the sites have already been named and the links have been created.
>
> **[4:01](https://www.linkedin.com/learning/windows-server-2019-essential-training/planning-sites-and-services?u=76281980&t=241)** In this case, we could find Exchange traffic always following a different path than other network packets.
>
> **[4:10](https://www.linkedin.com/learning/windows-server-2019-essential-training/planning-sites-and-services?u=76281980&t=250)** There is no restrictive limit on the number of sites you create in a domain, or the number of domains you create at one site.
>
> **[4:19](https://www.linkedin.com/learning/windows-server-2019-essential-training/planning-sites-and-services?u=76281980&t=259)** These two are independent of each others.
>
> **[4:22](https://www.linkedin.com/learning/windows-server-2019-essential-training/planning-sites-and-services?u=76281980&t=262)** It's all about defining portions of your network for directing traffic.
>
> **[4:28](https://www.linkedin.com/learning/windows-server-2019-essential-training/planning-sites-and-services?u=76281980&t=268)** Whether you're creating sites and link costs to use better connection speeds, or possibly to force all traffic through one central office, take the time to name your first Active Directory site as soon as you promote the first domain controller.
>
> **[4:45](https://www.linkedin.com/learning/windows-server-2019-essential-training/planning-sites-and-services?u=76281980&t=285)** Then you can create additional sites as needed, before adding new domain controllers, so that they can be accurately placed in the proper site from the beginning.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), continue (1), function (1), case, (1)
> **CLI Commands:** make (1), find (1)
> **Tools:** powershell (2)
> **UI Navigation:** go to (1), right-click (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Encrypted networks
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-essential-training/encrypted-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/encrypted-networks?u=76281980&t=0)** - [Narrator] If Software-Defined Networks, or SDN, have escaped your radar to this point, Windows Server 2019 has given you at least one good reason to take a serious look.
>
> **[0:13](https://www.linkedin.com/learning/windows-server-2019-essential-training/encrypted-networks?u=76281980&t=13)** One of the security features of Windows Server 2019 is the ability to encrypt traffic between virtual machines on a per-subnet basis.
>
> **[0:24](https://www.linkedin.com/learning/windows-server-2019-essential-training/encrypted-networks?u=76281980&t=24)** Now, the features of NTFS and various server roles have long provided ways to secure data on the server at rest, or data while it's sitting on that storage device.
>
> **[0:38](https://www.linkedin.com/learning/windows-server-2019-essential-training/encrypted-networks?u=76281980&t=38)** The security of data as it crosses the network has always been another animal altogether.
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2019-essential-training/encrypted-networks?u=76281980&t=45)** When you want to protect your network data over long distances, you might consider using a virtual private network or across a large data center, you might set up IPSec from one segment to another but this approach leaves out securing transmissions within a network segment.
>
> **[1:05](https://www.linkedin.com/learning/windows-server-2019-essential-training/encrypted-networks?u=76281980&t=65)** If you have unused network jacks or any other way for people to access the fabric of your network, traffic within a subnet can be vulnerable.
>
> **[1:15](https://www.linkedin.com/learning/windows-server-2019-essential-training/encrypted-networks?u=76281980&t=75)** Windows Server 2019 now has an option to use certificates on Hyper-V hosts to enable the encryption within these local network segments.
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2019-essential-training/encrypted-networks?u=76281980&t=87)** It starts by installing matching certificates on all of the Hyper-V hosts.
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2019-essential-training/encrypted-networks?u=76281980&t=92)** These certificates act as credentials, and allow the VM-host machines to recognize each other.
>
> **[1:40](https://www.linkedin.com/learning/windows-server-2019-essential-training/encrypted-networks?u=76281980&t=100)** With those certificates in place, the VM-host machines create virtual networks or virtual switches that connect together even over a physical fabric, and are managed by a network controller.
>
> **[1:54](https://www.linkedin.com/learning/windows-server-2019-essential-training/encrypted-networks?u=76281980&t=114)** With that in place, any virtual machine connected to the encrypted virtual network will automatically have traffic encrypted at the datagram level.
>
> **[2:07](https://www.linkedin.com/learning/windows-server-2019-essential-training/encrypted-networks?u=76281980&t=127)** Quick OSI review for those that don't have to think about this very often.
>
> **[2:11](https://www.linkedin.com/learning/windows-server-2019-essential-training/encrypted-networks?u=76281980&t=131)** Right above the hardware, and before the IP or network layer, is where network packets are prepared for delivery.
>
> **[2:19](https://www.linkedin.com/learning/windows-server-2019-essential-training/encrypted-networks?u=76281980&t=139)** This is normally where the NIC drivers take over and create datagrams specific to your type of network.
>
> **[2:28](https://www.linkedin.com/learning/windows-server-2019-essential-training/encrypted-networks?u=76281980&t=148)** The SDN-encrypted networks take these packets and encrypt them right before dumping them onto the cable.
>
> **[2:36](https://www.linkedin.com/learning/windows-server-2019-essential-training/encrypted-networks?u=76281980&t=156)** When you look at where the configuration happens, you may have noticed one area that we were able to leave untouched.
>
> **[2:44](https://www.linkedin.com/learning/windows-server-2019-essential-training/encrypted-networks?u=76281980&t=164)** There was no configuration done to the servers installed as virtual machines.
>
> **[2:50](https://www.linkedin.com/learning/windows-server-2019-essential-training/encrypted-networks?u=76281980&t=170)** That's the beauty of doing this at the datagram level.
>
> **[2:52](https://www.linkedin.com/learning/windows-server-2019-essential-training/encrypted-networks?u=76281980&t=172)** The virtual servers don't require any configuration.
>
> **[2:56](https://www.linkedin.com/learning/windows-server-2019-essential-training/encrypted-networks?u=76281980&t=176)** You don't have to worry about adding new configuration details to your deployment images or to your Desired State Configuration scripts.
>
> **[3:05](https://www.linkedin.com/learning/windows-server-2019-essential-training/encrypted-networks?u=76281980&t=185)** It's set up entirely at the Hyper-V host level.
>
> **[3:10](https://www.linkedin.com/learning/windows-server-2019-essential-training/encrypted-networks?u=76281980&t=190)** All you have to do with the VMs is remember to connect them to the right virtual network or the right virtual switch on the host.
>
> **[3:19](https://www.linkedin.com/learning/windows-server-2019-essential-training/encrypted-networks?u=76281980&t=199)** Microsoft has put together a great step-by-step lab in the Microsoft Docs website that walks through the process from getting the certificates to setting up the virtual network.
>
> **[3:31](https://www.linkedin.com/learning/windows-server-2019-essential-training/encrypted-networks?u=76281980&t=211)** It's done entirely in PowerShell but, as I've mentioned before, it's high time that we all embrace PowerShell as the preferred tool to get things done.

> [!info]- Semantic Content
>
> **Env Vars:** sdn (2), ntfs (1), osi (1), nic (1)
> **Code Keywords:** private (1), require (1), switch (1)
> **Tools:** powershell (2)
> **Prerequisites:** set up (2)
> **Speakers:** - [narrator] (1)

#### Cluster sets
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-essential-training/cluster-sets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/cluster-sets?u=76281980&t=0)** - [Instructor] As you explore the new features of Windows Server 2019, you may look at one of the new features and realize it doesn't have a place in your network.
>
> **[0:10](https://www.linkedin.com/learning/windows-server-2019-essential-training/cluster-sets?u=76281980&t=10)** Another network architect or system administrator will look at the same feature and say, finally, this is what I've been waiting for.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2019-essential-training/cluster-sets?u=76281980&t=18)** Not every feature is meant for every environment.
>
> **[0:22](https://www.linkedin.com/learning/windows-server-2019-essential-training/cluster-sets?u=76281980&t=22)** Cluster Sets is a great example of this type of feature.
>
> **[0:26](https://www.linkedin.com/learning/windows-server-2019-essential-training/cluster-sets?u=76281980&t=26)** For several years, you've had the ability to create clusters of Windows Servers to make one or more functions resilient.
>
> **[0:34](https://www.linkedin.com/learning/windows-server-2019-essential-training/cluster-sets?u=76281980&t=34)** You may have created storage clusters to replicate stored data.
>
> **[0:39](https://www.linkedin.com/learning/windows-server-2019-essential-training/cluster-sets?u=76281980&t=39)** You may have created compute clusters to improve performance and stability of an application.
>
> **[0:46](https://www.linkedin.com/learning/windows-server-2019-essential-training/cluster-sets?u=76281980&t=46)** And when you've created these clusters, you've had some limitations.
>
> **[0:51](https://www.linkedin.com/learning/windows-server-2019-essential-training/cluster-sets?u=76281980&t=51)** It was a really good idea to build your clusters out of similar hardware.
>
> **[0:56](https://www.linkedin.com/learning/windows-server-2019-essential-training/cluster-sets?u=76281980&t=56)** Things worked out better if all nodes in a cluster performed pretty much the same.
>
> **[1:01](https://www.linkedin.com/learning/windows-server-2019-essential-training/cluster-sets?u=76281980&t=61)** That limited the ability to scale a cluster down the road because there was no guarantee that you'd be able to purchase an equivalent server or identical hardware, two to three years down the line.
>
> **[1:14](https://www.linkedin.com/learning/windows-server-2019-essential-training/cluster-sets?u=76281980&t=74)** When you created these clusters, you also set aside a namespace for each cluster, which was better than a namespace for each server, but it did mean that each cluster was an isolated entity.
>
> **[1:28](https://www.linkedin.com/learning/windows-server-2019-essential-training/cluster-sets?u=76281980&t=88)** Cluster Sets is a feature that was added to Server 2019 during the insider preview phase.
>
> **[1:36](https://www.linkedin.com/learning/windows-server-2019-essential-training/cluster-sets?u=76281980&t=96)** Cluster Sets let you step up your high availability and at the same time, simplify access to your server resources by, essentially, clustering your clusters.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2019-essential-training/cluster-sets?u=76281980&t=107)** Here's how it works.
>
> **[1:49](https://www.linkedin.com/learning/windows-server-2019-essential-training/cluster-sets?u=76281980&t=109)** One of the clusters will be specified as a master cluster.
>
> **[1:54](https://www.linkedin.com/learning/windows-server-2019-essential-training/cluster-sets?u=76281980&t=114)** This is the group that oversees all of the member clusters.
>
> **[1:58](https://www.linkedin.com/learning/windows-server-2019-essential-training/cluster-sets?u=76281980&t=118)** Each member cluster has a server designated as a cluster set worker.
>
> **[2:03](https://www.linkedin.com/learning/windows-server-2019-essential-training/cluster-sets?u=76281980&t=123)** This is the machine that checks in with the cluster set master to let it know what resources are up and running.
>
> **[2:10](https://www.linkedin.com/learning/windows-server-2019-essential-training/cluster-sets?u=76281980&t=130)** Resources like applications, storage pools, and so on.
>
> **[2:15](https://www.linkedin.com/learning/windows-server-2019-essential-training/cluster-sets?u=76281980&t=135)** And this is where it becomes simpler for users to access any given resource.
>
> **[2:20](https://www.linkedin.com/learning/windows-server-2019-essential-training/cluster-sets?u=76281980&t=140)** The cluster set can be given a single namespace, making it possible to access the entire set as a single entity.
>
> **[2:30](https://www.linkedin.com/learning/windows-server-2019-essential-training/cluster-sets?u=76281980&t=150)** Cluster Sets allow you to point to the set and locate resources within that set even though those services are likely hosted on one cluster or another.
>
> **[2:42](https://www.linkedin.com/learning/windows-server-2019-essential-training/cluster-sets?u=76281980&t=162)** Each member cluster is still able to perform independently, in the event that the network links go down, but when everything is connected and working, you have redundancy across multiple sites, multiple clusters, however you need to scale this.
>
> **[2:59](https://www.linkedin.com/learning/windows-server-2019-essential-training/cluster-sets?u=76281980&t=179)** With the set being managed at this higher level, you now also have the flexibility of migrating a server from one cluster to another based on need, with just a couple of lines in Powershell.
>
> **[3:12](https://www.linkedin.com/learning/windows-server-2019-essential-training/cluster-sets?u=76281980&t=192)** The fact that the cluster set master keeps contact with, and tracks the resources in every cluster makes it possible for a server to move and become a part of whatever the destination cluster is doing.
>
> **[3:27](https://www.linkedin.com/learning/windows-server-2019-essential-training/cluster-sets?u=76281980&t=207)** Now as I said at the beginning of this video, different features of Windows Server are designed for different environments.
>
> **[3:33](https://www.linkedin.com/learning/windows-server-2019-essential-training/cluster-sets?u=76281980&t=213)** This technology, Cluster Sets, is designed for networks that would benefit from the ability to scale clusters up to 1,000 members.
>
> **[3:43](https://www.linkedin.com/learning/windows-server-2019-essential-training/cluster-sets?u=76281980&t=223)** Also environments where entire clusters need to be redundant across sites.
>
> **[3:49](https://www.linkedin.com/learning/windows-server-2019-essential-training/cluster-sets?u=76281980&t=229)** Those that need to be able to migrate live virtual machines between clusters easily, and those that have so many servers and clusters that they need better support for varying hardware.
>
> **[4:02](https://www.linkedin.com/learning/windows-server-2019-essential-training/cluster-sets?u=76281980&t=242)** Any environment where you have so many servers or so many clusters that it's hard to keep track of where to find resources.
>
> **[4:09](https://www.linkedin.com/learning/windows-server-2019-essential-training/cluster-sets?u=76281980&t=249)** All of these would be reasons to consider Cluster Sets as an opportunity to simplify your data center.
>
> **[4:16](https://www.linkedin.com/learning/windows-server-2019-essential-training/cluster-sets?u=76281980&t=256)** If that's you, Cluster Sets is likely to be a welcome capability, and it's built right into Windows Server 2019.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), finally, (1), for. (1), this. (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (2)
> **Tools:** powershell (1)
> **Speakers:** - [instructor] (1)

#### Hybrid cloud environments
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-essential-training/hybrid-cloud-environments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/hybrid-cloud-environments?u=76281980&t=0)** - [Instructor] One of the defining characteristics of Windows Server 2016 was the alignment between an on-prem installation and an Azure cloud development.
>
> **[0:11](https://www.linkedin.com/learning/windows-server-2019-essential-training/hybrid-cloud-environments?u=76281980&t=11)** This step forward laid the groundwork for even more improvements in networks that want to use a mix of on-prem servers and cloud environments like Azure.
>
> **[0:22](https://www.linkedin.com/learning/windows-server-2019-essential-training/hybrid-cloud-environments?u=76281980&t=22)** The Windows Admin Center that was shown previously in this course is another step forward.
>
> **[0:28](https://www.linkedin.com/learning/windows-server-2019-essential-training/hybrid-cloud-environments?u=76281980&t=28)** Now that the deployments of Windows Server match, it makes sense to have a unified management tool that can take care of both types of servers, on-prem and Azure.
>
> **[0:40](https://www.linkedin.com/learning/windows-server-2019-essential-training/hybrid-cloud-environments?u=76281980&t=40)** But getting a better management tool isn't the most important part.
>
> **[0:44](https://www.linkedin.com/learning/windows-server-2019-essential-training/hybrid-cloud-environments?u=76281980&t=44)** You'll hear a lot about it as people review Windows Server 2019, but the most important thing is why this unified tool works and what that link means for other interactions between the office and the cloud.
>
> **[1:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/hybrid-cloud-environments?u=76281980&t=60)** One challenge that we've fought for a while is the ability to create a link between on-prem and cloud services that was both reliable and secure.
>
> **[1:11](https://www.linkedin.com/learning/windows-server-2019-essential-training/hybrid-cloud-environments?u=76281980&t=71)** Most companies wanted the performance of local servers and the scalability of cloud servers.
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2019-essential-training/hybrid-cloud-environments?u=76281980&t=78)** This is easiest to see in one of the oldest and most common functions of a server, sharing files.
>
> **[1:25](https://www.linkedin.com/learning/windows-server-2019-essential-training/hybrid-cloud-environments?u=76281980&t=85)** Having an on-prem file server means that users can easily and quickly access the data they need as long as they're in the office and these on-premise file servers usually have some type of off-site backup, data that gets located somewhere else for disaster recovery plans.
>
> **[1:45](https://www.linkedin.com/learning/windows-server-2019-essential-training/hybrid-cloud-environments?u=76281980&t=105)** But if an employee is on the road and needs access to company data, cloud servers begin to feel like a better solution, but only if the data in the cloud is exactly the same as the data in the office with no real risk of version conflicts.
>
> **[2:02](https://www.linkedin.com/learning/windows-server-2019-essential-training/hybrid-cloud-environments?u=76281980&t=122)** Also, as you start to consider this disaster recovery plan and the need for an offsite backup, cloud solutions become pretty reliable.
>
> **[2:11](https://www.linkedin.com/learning/windows-server-2019-essential-training/hybrid-cloud-environments?u=76281980&t=131)** They're offsite by definition and the redundancy that's built in to those types of solutions can provide quite a service.
>
> **[2:20](https://www.linkedin.com/learning/windows-server-2019-essential-training/hybrid-cloud-environments?u=76281980&t=140)** The improvements placed in Windows Server 2019 that make these features more reliable solutions are better connections between the two.
>
> **[2:30](https://www.linkedin.com/learning/windows-server-2019-essential-training/hybrid-cloud-environments?u=76281980&t=150)** The fact that Azure can more easily and more completely communicate with your on-site server allows you to not only sync files, but also take advantage of the artificial intelligence and machine learning functions of the cloud.
>
> **[2:45](https://www.linkedin.com/learning/windows-server-2019-essential-training/hybrid-cloud-environments?u=76281980&t=165)** These tools that have helped determine how to use the cloud more effectively can now help you use our local servers better as well.
>
> **[2:53](https://www.linkedin.com/learning/windows-server-2019-essential-training/hybrid-cloud-environments?u=76281980&t=173)** I guess bottom line is this.
>
> **[2:55](https://www.linkedin.com/learning/windows-server-2019-essential-training/hybrid-cloud-environments?u=76281980&t=175)** The features that have been developed in Azure from Advanced Threat Protection to intelligent machine learning to manage performance and use are now being baked into Windows Server 2019.
>
> **[3:08](https://www.linkedin.com/learning/windows-server-2019-essential-training/hybrid-cloud-environments?u=76281980&t=188)** This means that Windows Server 2019 is better than previous versions in many areas, but it also means that it's part of the same development plans as cloud options.
>
> **[3:20](https://www.linkedin.com/learning/windows-server-2019-essential-training/hybrid-cloud-environments?u=76281980&t=200)** The same management tools will administer both.
>
> **[3:23](https://www.linkedin.com/learning/windows-server-2019-essential-training/hybrid-cloud-environments?u=76281980&t=203)** The same services can exist in either place.
>
> **[3:26](https://www.linkedin.com/learning/windows-server-2019-essential-training/hybrid-cloud-environments?u=76281980&t=206)** The same protections are made available for both environments.

> [!info]- Semantic Content
>
> **Definitions:** means that (3)
> **Code Keywords:** match, (1), this. (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Hyper-Converged Infrastructure
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-converged-infrastructure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-converged-infrastructure?u=76281980&t=0)** - [Instructor] Hyper-convergence is one of those technologies that's become a buzzword that continues to grow in popularity and that isn't likely to end any time soon.
>
> **[0:10](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-converged-infrastructure?u=76281980&t=10)** By definition, a Hyper-Converged Infrastructure, or HCI, is the combination of computing, storage, and network into a single solution.
>
> **[0:21](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-converged-infrastructure?u=76281980&t=21)** One of the most obvious benefits to this kind of simplification is centralized management, with conflicts eliminated or at least substantially reduced.
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-converged-infrastructure?u=76281980&t=32)** In an HCI, you don't have separate management products competing for control.
>
> **[0:38](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-converged-infrastructure?u=76281980&t=38)** Also, among the most important benefits are scalability and resiliency.
>
> **[0:44](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-converged-infrastructure?u=76281980&t=44)** Now these may or may not be part of the definition of hyper-convergence, but they certainly determine whether an HCI solution is worth implementing.
>
> **[0:54](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-converged-infrastructure?u=76281980&t=54)** Now Microsoft has been working on hyper-convergence for some time.
>
> **[0:58](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-converged-infrastructure?u=76281980&t=58)** Computing and network were brought together inside Windows Server with the introduction of Hyper-V.
>
> **[1:06](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-converged-infrastructure?u=76281980&t=66)** You could create virtual networks connecting virtual machines that were managed in clusters.
>
> **[1:11](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-converged-infrastructure?u=76281980&t=71)** Hyper-V was one product that covered two of the three elements of an HCI.
>
> **[1:19](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-converged-infrastructure?u=76281980&t=79)** In Windows Server 2016, Storage Spaces Direct or S2D added the third piece and you started hearing S2D coupled with Hyper-V as an HCI solution entirely contained within Windows Server.
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-converged-infrastructure?u=76281980&t=97)** As hyper-convergence gains more traction in concept and in practice, Microsoft realizes that this is more than just a software solution.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-converged-infrastructure?u=76281980&t=107)** They've partnered with companies like HP Enterprise, Dell Enterprise, NEC and several others to cover the hardware side of the equation and they worked together to make these HCI solutions as complete as possible.
>
> **[2:01](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-converged-infrastructure?u=76281980&t=121)** All the while, continuing to enhance the virtual machines and the virtual networks in Hyper-V and the storage management capabilities of S2D to take advantage of what these hardware providers can create.
>
> **[2:19](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-converged-infrastructure?u=76281980&t=139)** This emphasis on creating hyper-converged infrastructure of computing, network, and storage is one of the four primary focus points in developing Windows Server 2019.
>
> **[2:31](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-converged-infrastructure?u=76281980&t=151)** We'll explore the virtualization enhancements a little later on in this course and we've already touched briefly on encryption features to protect virtual networks and we'll also be discussing the use and benefit of Storage Spaces Direct in Windows Server 2019.
>
> **[2:49](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-converged-infrastructure?u=76281980&t=169)** As for the simplicity of managing a hyper-converged infrastructure, the Windows Admin Center is once again an important part of the solution.
>
> **[2:58](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-converged-infrastructure?u=76281980&t=178)** It seems that this WAC is part of several of Microsoft's solutions in this new release of Windows Server.

> [!info]- Semantic Content
>
> **Env Vars:** hci (6), s2d (3), nec (1), wac (1)
> **CLI Commands:** make (1)
> **Code Keywords:** while, (1)
> **Speakers:** - [instructor] (1)


### 4. Storage Solutions

#### Types of volumes
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=0)** - [Instructor] Innovation is important, but it's nice when we find out that some of the existing technology has stood the test of time.
>
> **[0:08](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=8)** The partition and volume options on Windows server are one thing that has remained constant.
>
> **[0:15](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=15)** Every hard disk has three layers of preparation and this model has been in tact for as long as I can remember.
>
> **[0:22](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=22)** The first layer is the type of partition table.
>
> **[0:25](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=25)** Traditionally, a master boot record has held this table and the BIOS of a computer was designed to read this table to find system partitions.
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=35)** Well, BIOS on computers is being upgraded and ultimately replaced by a technology that supports bigger hard drives, faster boot times, and overall, better hardware integration.
>
> **[0:48](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=48)** UEFI is that new technology and new hard drive partition tables have evolved along with it.
>
> **[0:56](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=56)** The GUID partition table or GPT configuration is the default setting for a Windows 2019 server.
>
> **[1:06](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=66)** Once we have a partition table in place, the second layer in the Windows server preparation of a hard-drive is specifying the type of disk.
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=77)** When you complete a traditional install, Windows lays out a physical disk with GPT and basic disk configuration.
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=87)** Basic disks are divided into partitions that can be formatted and mounted with drive letters or other types of mount points.
>
> **[1:36](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=96)** With GPT, a basic disk, can be set up to hold as many as 128 partitions on a single hard drive.
>
> **[1:44](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=104)** The primary difference between partitions on a basic disk and volumes on a dynamic disk is the range of options that you have when setting them up.
>
> **[1:55](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=115)** Partitions can be resized up or down even after they've been created and filled with content and this is easily done from disk management or from the Windows Administration Center.
>
> **[2:07](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=127)** However, if you want more flexibility, more redundancy, more performance benefits, you're going to need to look at dynamic disk and creating different types of volumes.
>
> **[2:20](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=140)** Let's go ahead and check out what that looks like.
>
> **[2:23](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=143)** Now, I've created a whole 'nother domain of demo machines because we're played around with several different features in the earlier videos of this course.
>
> **[2:31](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=151)** Right now, we have an environment where the domain controller and two servers joined to that domain.
>
> **[2:38](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=158)** This server, Sever One, is installed with Windows Server 2019 Data Center, but what we're going to look at is the same in Standard Edition and even in Essentials.
>
> **[2:49](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=169)** I'm going to open up the traditional disk manager.
>
> **[2:52](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=172)** You can get there by right-clicking on the Start menu and finding Disk Management in that list.
>
> **[3:02](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=182)** Much like the design of partitions and volumes themselves, this tool has been with us for quite some time.
>
> **[3:08](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=188)** You can see that this server was installed with two hard drives, each one roughly 128 gig in size and when I installed this server, I accepted defaults.
>
> **[3:20](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=200)** So it took all of the available space on the first hard drive to create the volume to install Windows.
>
> **[3:27](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=207)** This is where my boot files are located.
>
> **[3:30](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=210)** This is where the operating system is located.
>
> **[3:32](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=212)** Currently, this is where everything, except for recovery information, is located, and it's taking up the entire disk.
>
> **[3:40](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=220)** If I wanted to reduce this, I could do that from right here.
>
> **[3:45](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=225)** I could right-click on that volume that's currently taking 127 and almost 1/2 gig in space.
>
> **[3:52](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=232)** I could right-click on that and choose to shrink the volume.
>
> **[3:56](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=236)** It's taking up the entire space so I don't have the ability to grow the volume, but I can shrink it and this is a pretty straightforward and simple process to complete.
>
> **[4:07](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=247)** It calculates how much room there is on the drive, how much space I have to play with, and the question it asks me is not how big should this partition be when you're done?
>
> **[4:19](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=259)** The question is how much do you want to trim off?
>
> **[4:23](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=263)** It's going to allow me to trim off as much as 120 gig.
>
> **[4:28](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=268)** I don't want to take it down that far.
>
> **[4:30](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=270)** I still want about 64 gig to play with on this volume, so I'm going to cut this down by, let's go with 60 gigabytes.
>
> **[4:40](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=280)** It's asking me to give the information in meg and I'm going to just round and let's go with 60,000.
>
> **[4:50](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=290)** And I can go ahead and shrink that volume.
>
> **[4:54](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=294)** And you can see that that happens pretty quickly.
>
> **[4:58](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=298)** Now, I'm going to right-click on that volume again and we can see some other options in here.
>
> **[5:03](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=303)** We can shrink the volume again or we could actually grow it.
>
> **[5:07](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=307)** We could extend it, and I'm given the option to add a mirror, but there's a catch here.
>
> **[5:12](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=312)** I really can't.
>
> **[5:13](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=313)** I can't add a mirror to this because it's a basic disk.
>
> **[5:17](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=317)** If I want the option to create a mirrored set, or to even create striped sets for performance, I need to change this drive from basic to dynamic and that's not a difficult change to make either.
>
> **[5:32](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=332)** It does technically carry some risk.
>
> **[5:34](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=334)** I've never had anything go wrong, but we are changing the layout of the hard drive, so I need to go on record as saying there is some risk here.
>
> **[5:43](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=343)** If I want more flexibility in how these drives are set up, I can right-click on the disk and I can choose to convert it to dynamic disk.
>
> **[5:52](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=352)** And I have the option to go ahead and convert everything to dynamic disk at this time and I'm going to take that option and go ahead and click OK.
>
> **[6:02](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=362)** It will verify that that's what I want to do and I'm going to go ahead and say yes.
>
> **[6:07](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=367)** And once this is done, I'm going to reboot.
>
> **[6:11](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=371)** I have a caution here that if I have a multi-boot environment, or some other situations, there may be some changes that'll be hard to recover from, but I'm running one operating system on one server.
>
> **[6:25](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=385)** Most of the concerns really don't apply to me so I'm going to go ahead and say yes, I want to convert to dynamic disks.
>
> **[6:34](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=394)** Now, it didn't prompt me to reboot and it's possible that I could go on and be just fine, however, there are some system configuration changes that are worth manually rebooting the machine even if it doesn't require it.
>
> **[6:49](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=409)** One of the things that I'm going to do first, however, is create a mirrored set.
>
> **[6:54](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=414)** Now that I have dynamic disks, I can take the system partition, right-click, and choose to add a mirror to it.
>
> **[7:03](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=423)** And I can tell it which physical disk needs to hold the replica, the copy, so I'm going to select that and when I click add mirror, it would go ahead and create the redundant volume and start copying the information over.
>
> **[7:20](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=440)** And it may take some time to complete, but once the status changes from resyncing to healthy, that would be a good opportunity to go ahead and reboot the server and allow it to come up fresh and clean with the new configuration.
>
> **[7:35](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=455)** Any new volume that I create, anything that's not the operating system, has options beyond simply mirroring.
>
> **[7:44](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=464)** If I were to right-click in this unallocated space, I could choose to set up a striped set.
>
> **[7:50](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=470)** If I had at least three physical disks, I could create a new RAID 5 volume.
>
> **[7:56](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=476)** These software RAID arrays are available to you if you're using dynamic disk.
>
> **[8:03](https://www.linkedin.com/learning/windows-server-2019-essential-training/types-of-volumes?u=76281980&t=483)** Many production servers use hardware solutions to manage this kind of redundancy, and data centers with large numbers of virtual servers often store virtual hard drives in various types of high availability storage solutions, but these volume options still exist at the operating system in Windows Server 2019, just like they have for the last couple of decades.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (3), bios (2), raid (2), uefi (1), guid (1)
> **Code Keywords:** let (3), this, (1), from, (1), require (1)
> **UI Navigation:** right-click (6)
> **Prerequisites:** set up (3), install (2)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Warnings:** caution (1)

#### File systems compared
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-essential-training/file-systems-compared?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/file-systems-compared?u=76281980&t=0)** - [Instructor] Once a hard drive has been installed initialized, and partitions or volumes created.
>
> **[0:06](https://www.linkedin.com/learning/windows-server-2019-essential-training/file-systems-compared?u=76281980&t=6)** The next decision that you have to make, is regarding the file system that you're going to apply to that volume, now NTFS has been the preferred file system for years.
>
> **[0:17](https://www.linkedin.com/learning/windows-server-2019-essential-training/file-systems-compared?u=76281980&t=17)** Because it allowed for more specific security settings not just on folders but on individual files and it allows you to manage storage space by configuring quotas, on top of that, it allows you to create larger volumes and larger files within those volumes.
>
> **[0:36](https://www.linkedin.com/learning/windows-server-2019-essential-training/file-systems-compared?u=76281980&t=36)** But these comparisons were against the File Allocation Table the traditional FAT file system and given these comparisons the NTFS environment was the obvious choice.
>
> **[0:49](https://www.linkedin.com/learning/windows-server-2019-essential-training/file-systems-compared?u=76281980&t=49)** FAT followed by VFAT to support long file names and FAT32 to support somewhat larger volumes hasn't really changed that much over the years.
>
> **[1:02](https://www.linkedin.com/learning/windows-server-2019-essential-training/file-systems-compared?u=76281980&t=62)** The primary advantage of FAT is that this file system can be read by pretty much any other platform or application.
>
> **[1:11](https://www.linkedin.com/learning/windows-server-2019-essential-training/file-systems-compared?u=76281980&t=71)** But that isn't always necessary and it isn't always a benefit.
>
> **[1:15](https://www.linkedin.com/learning/windows-server-2019-essential-training/file-systems-compared?u=76281980&t=75)** During normal operation I want the Windows Server operating system to read the file system and serve up the data to other apps and systems on my terms.
>
> **[1:26](https://www.linkedin.com/learning/windows-server-2019-essential-training/file-systems-compared?u=76281980&t=86)** I don't always want other platforms browsing the local storage, when we look at capacity, the FAT file system had some pretty restrictive limits.
>
> **[1:38](https://www.linkedin.com/learning/windows-server-2019-essential-training/file-systems-compared?u=76281980&t=98)** The maximum volume size being 32 GB in size, the maximum file being four GB in size.
>
> **[1:45](https://www.linkedin.com/learning/windows-server-2019-essential-training/file-systems-compared?u=76281980&t=105)** Several DVD images are already larger than that.
>
> **[1:49](https://www.linkedin.com/learning/windows-server-2019-essential-training/file-systems-compared?u=76281980&t=109)** So if you're storing install media, that 4GB limitation can already be too much for you.
>
> **[1:55](https://www.linkedin.com/learning/windows-server-2019-essential-training/file-systems-compared?u=76281980&t=115)** But you do have the compatibility that we talked about, NTFS in Windows Server 2019 supports volumes that are up to 256 TB in size, and individual files that are just as large.
>
> **[2:10](https://www.linkedin.com/learning/windows-server-2019-essential-training/file-systems-compared?u=76281980&t=130)** Although that one is currently just theoretical it does remain the most robust file system in terms of security options and other features.
>
> **[2:21](https://www.linkedin.com/learning/windows-server-2019-essential-training/file-systems-compared?u=76281980&t=141)** But this big long list of features, may not always be what you're looking for.
>
> **[2:26](https://www.linkedin.com/learning/windows-server-2019-essential-training/file-systems-compared?u=76281980&t=146)** The resilient file system, or ReFS was introduced in Windows Server 2012.
>
> **[2:33](https://www.linkedin.com/learning/windows-server-2019-essential-training/file-systems-compared?u=76281980&t=153)** On its face it would appear that ReFS has all of the same capabilities as NTFS, in fact in terms of these metrics it hardly seems worth introducing a new file system at all.
>
> **[2:47](https://www.linkedin.com/learning/windows-server-2019-essential-training/file-systems-compared?u=76281980&t=167)** But among the benefits of the original version of ReFS was that it didn't carry all of the overhead of NTFS, overhead that will affect performance.
>
> **[3:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/file-systems-compared?u=76281980&t=180)** What it does offer you is the ability to detect file corruption and the ability to restore to a small degree, and remain online while dealing with corrupted data.
>
> **[3:13](https://www.linkedin.com/learning/windows-server-2019-essential-training/file-systems-compared?u=76281980&t=193)** Some server applications, say for example Exchange has its own storage management features.
>
> **[3:20](https://www.linkedin.com/learning/windows-server-2019-essential-training/file-systems-compared?u=76281980&t=200)** It doesn't need all of the quotas, all of the features that NTFS has offered.
>
> **[3:26](https://www.linkedin.com/learning/windows-server-2019-essential-training/file-systems-compared?u=76281980&t=206)** Things like keeping the volume available even through small issues is going to be more important and leaving room for Exchange to manage its own database makes ReFS with its lower performance overhead a preferred environment.
>
> **[3:42](https://www.linkedin.com/learning/windows-server-2019-essential-training/file-systems-compared?u=76281980&t=222)** With ReFS you gave up the features you didn't need and created an optimal environment for these applications that manage their own data.
>
> **[3:53](https://www.linkedin.com/learning/windows-server-2019-essential-training/file-systems-compared?u=76281980&t=233)** In later versions of ReFS, you began to pick up many of the same management tools that you have in NTFS, but you still have the performance benefits.
>
> **[4:05](https://www.linkedin.com/learning/windows-server-2019-essential-training/file-systems-compared?u=76281980&t=245)** Some are suggesting that ReFS will overtake NTFS completely but I still think they each have their place.
>
> **[4:13](https://www.linkedin.com/learning/windows-server-2019-essential-training/file-systems-compared?u=76281980&t=253)** The full compliment of features in NTFS still make it a good solution for the Windows Boot Volume and for the average file server.
>
> **[4:22](https://www.linkedin.com/learning/windows-server-2019-essential-training/file-systems-compared?u=76281980&t=262)** I'm showing here a Windows server that has two volumes that were created at exactly the same size.
>
> **[4:29](https://www.linkedin.com/learning/windows-server-2019-essential-training/file-systems-compared?u=76281980&t=269)** Capacity of 29.2 GB, the one on the left was formatted using NTFS, the one on the right was formatted using ReFS, and you can see some of the differences from right here.
>
> **[4:43](https://www.linkedin.com/learning/windows-server-2019-essential-training/file-systems-compared?u=76281980&t=283)** You can see that in NTFS we have a quota tab that doesn't exist in the Resilient File System.
>
> **[4:51](https://www.linkedin.com/learning/windows-server-2019-essential-training/file-systems-compared?u=76281980&t=291)** However when you look at the amount of used space these are empty volumes, I haven't copied any content onto these.
>
> **[4:59](https://www.linkedin.com/learning/windows-server-2019-essential-training/file-systems-compared?u=76281980&t=299)** NTFS is using 73 almost 74 MB, to store the information that it needs to keep the volume alive, even as an empty volume.
>
> **[5:10](https://www.linkedin.com/learning/windows-server-2019-essential-training/file-systems-compared?u=76281980&t=310)** ReFS is using over a Gig for those same purposes.
>
> **[5:15](https://www.linkedin.com/learning/windows-server-2019-essential-training/file-systems-compared?u=76281980&t=315)** The capabilities of ReFS will take up a little bit of drive space to maintain but they're worth it in the performance benefits later on.
>
> **[5:24](https://www.linkedin.com/learning/windows-server-2019-essential-training/file-systems-compared?u=76281980&t=324)** Also look down at the bottom, in NTFS there's a check box to compress all files on the volume and this may or may not be a feature that you want to see.
>
> **[5:35](https://www.linkedin.com/learning/windows-server-2019-essential-training/file-systems-compared?u=76281980&t=335)** There are some concerns and there are performance hits over it.
>
> **[5:38](https://www.linkedin.com/learning/windows-server-2019-essential-training/file-systems-compared?u=76281980&t=338)** But it's an available option nonetheless, an option that doesn't exist in ReFS.
>
> **[5:44](https://www.linkedin.com/learning/windows-server-2019-essential-training/file-systems-compared?u=76281980&t=344)** As we go forward we're going to take a look at one of the features that ReFS has picked up that allows you to manage space without the risks and performance hits of compression.

> [!info]- Semantic Content
>
> **Env Vars:** ntfs (13), fat (4), vfat (1), fat32 (1), dvd (1)
> **CLI Commands:** make (2)
> **Code Keywords:** for. (1)
> **Versions:** 29.2 (1)
> **Cross-References:** we talked about (1)
> **Analogies:** for example (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Data deduplication
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=0)** - [Instructor] Hard drive space is relatively cheap.
>
> **[0:03](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=3)** But that doesn't mean you should take it for granted.
>
> **[0:05](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=5)** It's still worthwhile to make sure that you're using your hard drive space wisely.
>
> **[0:10](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=10)** It used to be that you would deal with vanishing storage space in one of three ways.
>
> **[0:16](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=16)** You could implement user quotas to manage how much one person is allowed to save.
>
> **[0:21](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=21)** You could add new drives to the server.
>
> **[0:24](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=24)** Or you could compress a volume.
>
> **[0:28](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=28)** This third volume has always been a last resort because it kills performance.
>
> **[0:33](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=33)** The process of packing up files and unpacking them again introduced a performance hit as well as a risk of corruption or loss.
>
> **[0:41](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=41)** Now there's a new option.
>
> **[0:43](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=43)** Data deduplication.
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=45)** It allows you to save space as you store and access files without the risk or performance hit that comes from compression.
>
> **[0:54](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=54)** The basic idea is this.
>
> **[0:56](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=56)** Information is stored in blocks of varying size on your hard drive.
>
> **[1:01](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=61)** With data deduplication, blocks are identified that are exactly the same.
>
> **[1:07](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=67)** Redundant copies are removed, and replaced with pointers to where that information can be stored only once.
>
> **[1:15](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=75)** There are three different workloads where this can really make a difference.
>
> **[1:20](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=80)** A general purpose file server is likely to contain a bit of redundancy.
>
> **[1:25](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=85)** Think about how many of your users store files made from the same template.
>
> **[1:30](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=90)** There's a block of that file that is identical in all of the saved iterations of that document.
>
> **[1:38](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=98)** A backup target is an even more likely candidate for deduplication.
>
> **[1:42](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=102)** Think about last week's backup and this week's backup.
>
> **[1:46](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=106)** How much is exactly the same?
>
> **[1:48](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=108)** If that redundant information could be stored once, but accessed uniquely for each backup set, how much space could that save?
>
> **[1:57](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=117)** The third workload is a virtual desktop deployment.
>
> **[2:01](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=121)** If you're running your own desktop as a service environment, you have several remote desktop environments that are essentially copies of the same virtual hard drive.
>
> **[2:11](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=131)** Think of the space saving if you didn't have to have all of that identical information saved multiple times.
>
> **[2:18](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=138)** This is a feature that we can make available on NTFS and REFS volumes.
>
> **[2:25](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=145)** Here we are back on the server we've been looking at in this chapter, and on our NTFS volume and our REFS volume, I've stored a folder called music.
>
> **[2:36](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=156)** Now this folder is identical in both locations.
>
> **[2:39](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=159)** Here it is on the NTFS drive.
>
> **[2:42](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=162)** It has 1243 files.
>
> **[2:46](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=166)** Here it is on the REFS drive.
>
> **[2:49](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=169)** It is the same folder with the same amount of files.
>
> **[2:53](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=173)** Each of these folders contains my music collection.
>
> **[2:56](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=176)** A whole lot of files, none of them exist more than once within a folder.
>
> **[3:02](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=182)** So let's see what deduplication can do for us.
>
> **[3:05](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=185)** First, we need to add it, and data deduplication is a role.
>
> **[3:09](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=189)** So let me go ahead and go to the server manager to go ahead and install that.
>
> **[3:16](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=196)** Looks like the progress bar is done, so let me select to add roles and features.
>
> **[3:22](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=202)** Move forward through this process that we've seen a few times.
>
> **[3:25](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=205)** Now here we are inside the list of server roles.
>
> **[3:30](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=210)** I need to find file and storage services.
>
> **[3:33](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=213)** And you can see that one of these components has already been installed.
>
> **[3:37](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=217)** Let me go ahead and expand that.
>
> **[3:40](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=220)** Inside file and iSCSi services, if we look down the list just a little bit, there is data deduplication.
>
> **[3:49](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=229)** Now there's nothing extra to be added, so let me go ahead and choose this, and move forward.
>
> **[3:55](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=235)** I'm just going to accept defaults and allow this installation to run.
>
> **[4:02](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=242)** All right, it looks like our installation is complete.
>
> **[4:05](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=245)** So let me go ahead and close this and I'm going to close these folder properties as well.
>
> **[4:11](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=251)** We don't need those any more.
>
> **[4:13](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=253)** Here in the server manager, I can go to the file and storage services tab.
>
> **[4:18](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=258)** We can take a look at the different volumes on our server.
>
> **[4:22](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=262)** Data deduplication is turned on at the volume level, not the folder level.
>
> **[4:27](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=267)** So we need to manage this one volume at a time.
>
> **[4:32](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=272)** From this pane I can right-click on a volume and choose to configure data deduplication.
>
> **[4:39](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=279)** There isn't a lot to configure here.
>
> **[4:42](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=282)** From this top drop-down box, I can choose which of the three workload scenarios is best suited for my needs.
>
> **[4:49](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=289)** This is a file server, so let me go ahead and choose that.
>
> **[4:54](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=294)** If there were files that I wanted to exclude from the data deduplication, I could specify them by extension here, or I could add specific folders that would be removed from the deduplication.
>
> **[5:08](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=308)** This set data deduplication schedule button would allow us to schedule this to happen at times when it won't disrupt normal workflows.
>
> **[5:17](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=317)** Having this process run overnight is not a bad idea.
>
> **[5:22](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=322)** Well, after I apply this, and accept this, and move on and do the same for the REFS volume, configure data deduplication for a general purpose file server, apply that, and said okay, I have now enabled the service.
>
> **[5:39](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=339)** Since I didn't schedule it, I need to go ahead and run a job manually.
>
> **[5:44](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=344)** I'm going to go ahead and open Powershell as an administrator, and from here, I'm going to run the command start dedup job.
>
> **[5:59](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=359)** And there only a couple of parameters that I need to specify.
>
> **[6:02](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=362)** The first is the type of deduplication job, which is optimization.
>
> **[6:11](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=371)** And I need to specify which volume I want to remove duplicated data from.
>
> **[6:20](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=380)** And there's one more parameter that I'm going to use just for this demonstration.
>
> **[6:25](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=385)** I'm going to set the priority to high.
>
> **[6:30](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=390)** You wouldn't do that on a production server during the workday because that will take away performance from other things the server might want to do.
>
> **[6:38](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=398)** But in this demonstration, and in your test environments, if you're not doing anything else with the server, that will allow this to run more quickly.
>
> **[6:48](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=408)** Now I'm going to go ahead and hit start and that will take a while to run.
>
> **[6:52](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=412)** So you would likely schedule this optimization during off hours, but you can take a look at the status at any time by running get dedup status.
>
> **[7:07](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=427)** And as time moves along, you can see how things are going, how much space has been saved, how many files have been condensed.
>
> **[7:15](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=435)** And which volumes are involved in this savings.
>
> **[7:19](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=439)** Data deduplication may not be the right fit for all volumes and all workloads.
>
> **[7:25](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=445)** It can get in the way of how databases and other applications try to manage their own data.
>
> **[7:30](https://www.linkedin.com/learning/windows-server-2019-essential-training/data-deduplication?u=76281980&t=450)** But it is preferred over compression or simply adding drives until you run out of bays.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this, (3), this. (1), from. (1)
> **Env Vars:** refs (4), ntfs (3)
> **Definitions:** is a  (4), is an  (1)
> **CLI Commands:** make (3), find (1)
> **Prerequisites:** configure (3), install (1)
> **UI Navigation:** go to (2), right-click (1)
> **Code Identifiers:** iscsi (1)
> **Tools:** powershell (1)

#### Storage Spaces Direct
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-spaces-direct?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-spaces-direct?u=76281980&t=0)** - [Narrator] I wanted to be sure and include a section on a feature that was introduced in Windows Server 2016, but has not been present in the semiannual releases of Server in 2017 or 18.
>
> **[0:14](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-spaces-direct?u=76281980&t=14)** I was really glad to see Storage Spaces Direct included in Windows Server 2019 once again.
>
> **[0:21](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-spaces-direct?u=76281980&t=21)** At its core, S2D is a clustering of hard drives.
>
> **[0:26](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-spaces-direct?u=76281980&t=26)** Large environments need to use lots of servers to create highly available redundant and fast solutions for computing, network, and storage.
>
> **[0:36](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-spaces-direct?u=76281980&t=36)** And you may recall earlier in this course, I mentioned that Storage Spaces Direct with Hyper-V combined to create a hyperconverged infrastructure.
>
> **[0:47](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-spaces-direct?u=76281980&t=47)** S2D is the storage component of that equation.
>
> **[0:50](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-spaces-direct?u=76281980&t=50)** But I may be getting ahead of myself.
>
> **[0:52](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-spaces-direct?u=76281980&t=52)** Let me back up, and describe what Storage Spaces Direct is and what it does.
>
> **[0:58](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-spaces-direct?u=76281980&t=58)** Storage Spaces Direct allows you to cluster multiple servers specifically for storage purposes.
>
> **[1:06](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-spaces-direct?u=76281980&t=66)** Let's say these three data center edition servers have the fail-over clustering role and the Hyper-V role installed.
>
> **[1:14](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-spaces-direct?u=76281980&t=74)** These three servers each have multiple physical drives which can be clustered using the fail-over clustering role, and then enabling Cluster Storage Spaces Direct will make all of those drives function as a single storage pool.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-spaces-direct?u=76281980&t=94)** That will allow you to create volumes in that pool, and format these volumes using the cluster shared volume file system.
>
> **[1:43](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-spaces-direct?u=76281980&t=103)** That provides two benefits.
>
> **[1:45](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-spaces-direct?u=76281980&t=105)** First, the volumes appear and function as if they were local to every server node in the cluster.
>
> **[1:53](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-spaces-direct?u=76281980&t=113)** Second, the volumes are resilient.
>
> **[1:56](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-spaces-direct?u=76281980&t=116)** That's one of the keys behind any type of cluster.
>
> **[1:59](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-spaces-direct?u=76281980&t=119)** A hard drive or a physical server may die, but the volumes stay online as if nothing happened.
>
> **[2:08](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-spaces-direct?u=76281980&t=128)** This is the kind of thing you would expect from a hyperconverged infrastructure, or from a high-end storage management solution.
>
> **[2:15](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-spaces-direct?u=76281980&t=135)** But these features are not third party, they're not extra.
>
> **[2:18](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-spaces-direct?u=76281980&t=138)** They're not even system centers.
>
> **[2:19](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-spaces-direct?u=76281980&t=139)** They're built right into Windows Server 2019.
>
> **[2:23](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-spaces-direct?u=76281980&t=143)** No third party applications, no special requirements from hardware vendors.
>
> **[2:29](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-spaces-direct?u=76281980&t=149)** Now let's take a look at what happens when we put this to work.
>
> **[2:32](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-spaces-direct?u=76281980&t=152)** Let's say each server in the cluster is running virtual servers for various production tasks.
>
> **[2:38](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-spaces-direct?u=76281980&t=158)** One of our virtual machines is configured on server one, and the virtual hard disk file is saved on the S2D volume.
>
> **[2:48](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-spaces-direct?u=76281980&t=168)** The volume makes the VHD file appear local to server one, and it's entirely possible that the working copy might be there.
>
> **[2:58](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-spaces-direct?u=76281980&t=178)** But here's the cool part.
>
> **[2:59](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-spaces-direct?u=76281980&t=179)** Let's say the hard drive controller in server one decides to take a break, and all of those drives are suddenly offline.
>
> **[3:08](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-spaces-direct?u=76281980&t=188)** This storage cluster has all the hard drives in their current state running in the cluster, replicated across multiple drives.
>
> **[3:19](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-spaces-direct?u=76281980&t=199)** If the virtual machine is configured to point to a VHD file in the cluster, the virtual server never goes offline.
>
> **[3:28](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-spaces-direct?u=76281980&t=208)** So now virtual machines can migrate over virtual networks using storage managed in an S2D cluster, and it really does encompass all three elements of hyperconverged infrastructure.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (2), break, (1)
> **Env Vars:** s2d (4), vhd (2)
> **CLI Commands:** make (1), node (1)
> **Cross-References:** earlier in (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Storage Replica
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=0)** - [Instructor] Storage Spaces Direct is a very robust storage solution but not all environments need something that's that intensive.
>
> **[0:09](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=9)** Networks that don't have large data centers still need reliable and often redundant data for high availability.
>
> **[0:17](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=17)** Often, however, a simple solution will do the trick.
>
> **[0:20](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=20)** Storage Replica is a feature that you can add to a Windows 2019 Server Data Center Edition or Standard, that's a change from Windows Server 2016.
>
> **[0:33](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=33)** In Windows Server 2019, a Data Center Server can replicate as many volumes as it likes to other servers in the domain.
>
> **[0:43](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=43)** A Standard Edition server can still replicate one volume from that server to another location.
>
> **[0:51](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=51)** Let's walk through the requirements and how to set up Storage Replica within our network.
>
> **[0:56](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=56)** Here you can see I'm on my Windows 10 workstation.
>
> **[1:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=60)** I'm starting here because I'd like to use the Windows Admin Center to do this work.
>
> **[1:05](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=65)** And as we've demonstrated before, the Windows Admin Center can be installed and used from a workstation in the domain just fine.
>
> **[1:14](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=74)** So here I am in my domain.
>
> **[1:16](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=76)** I have my workstation, I also have three servers.
>
> **[1:20](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=80)** The domain controller and two file servers.
>
> **[1:23](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=83)** Let me go ahead and take a look at server one.
>
> **[1:28](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=88)** Storage Replica needs to have a source and a target for the replica.
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=93)** And neither one can be a domain controller.
>
> **[1:36](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=96)** So here we have a basic file sharing server, server one, if I scroll down and look at storage, one of the things I will look for is the volumes created on that machine.
>
> **[1:49](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=109)** Let me look and see what's on disk two.
>
> **[1:53](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=113)** And here I have two volumes that are exactly 30 gig in size.
>
> **[1:58](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=118)** That size is going to be important.
>
> **[2:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=120)** In fact, let me go ahead and open another server in a new tab.
>
> **[2:05](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=125)** In this new tab, let's go ahead and open server two and take a look at that storage configuration as well.
>
> **[2:13](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=133)** I scroll down to storage and I take a look at disk two in this server.
>
> **[2:20](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=140)** We can see that it also has two volumes that are exactly 30 gig in size.
>
> **[2:26](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=146)** Now there's nothing special about the 30 gig size.
>
> **[2:29](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=149)** What is important is that the sizes match exactly from one server to another.
>
> **[2:35](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=155)** The R or the replicate volume, I chose that letter just to be simple here, is exactly 30 gig in size and uses the NTFS file system.
>
> **[2:46](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=166)** On server one, I have an R volume that is also exactly 30 gig in size.
>
> **[2:54](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=174)** That matching of the volume to be replicated is critical.
>
> **[2:59](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=179)** We can start the process to do a replication but Windows will check and if the sizes don't match, the replica will fail.
>
> **[3:09](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=189)** A second volume is needed for a replica and it doesn't have to be as large but it also needs to match exactly in size from one server to the other.
>
> **[3:18](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=198)** Here I've created an L volume, L for log, and it is exactly 30 gig in size on server one.
>
> **[3:27](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=207)** And on server two, I have a log volume that is also exactly 30 gig in size.
>
> **[3:35](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=215)** That's the first requirement.
>
> **[3:36](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=216)** We need the volume to be replicated on both servers that's exactly the same size and we need a log volume that will not be used for anything else that's also exactly the same size on both servers.
>
> **[3:52](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=232)** With that in place, the next thing we need to do is look at the roles and features that are installed on both servers.
>
> **[3:59](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=239)** Here on server two, let's take a look at the installed roles and features, and we're looking for a feature so I'm going to go ahead and collapse the roles and scroll down through features until we get to Storage Replica.
>
> **[4:14](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=254)** And we can see that that role has been installed.
>
> **[4:17](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=257)** If it wasn't yet, I could check the box and install it from here.
>
> **[4:21](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=261)** Let's go ahead and check server one as well.
>
> **[4:24](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=264)** Roles and features.
>
> **[4:27](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=267)** Go ahead and collapse the roles and scroll down through the alphabetic list of features to Storage Replica and it's installed.
>
> **[4:36](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=276)** Those are your requirements.
>
> **[4:38](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=278)** You need this feature to be installed on both servers and you have to have volumes that are identical in size from one server to the next.
>
> **[4:48](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=288)** Here in the Windows Admin Center, we now have a new tool and this is recently added.
>
> **[4:53](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=293)** The Storage Replica option can be selected from the left and we see that there are currently no partnerships but we can create one.
>
> **[5:03](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=303)** As we select new partnerships, we get a dialogue off to the right where we start by entering the source computer name and it's going to look up the server as we type it, so keep typing until you get to the end of the fully qualified domain name.
>
> **[5:18](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=318)** This is server01.[landonhotel.com](https://landonhotel.com) and it's checking that server out to make sure that it meets the requirements.
>
> **[5:29](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=329)** It does meet the requirements and here it selected a source volume and a log volume.
>
> **[5:35](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=335)** If it picked them incorrectly, we could use these dropdowns and change them.
>
> **[5:40](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=340)** But we do need to assign this replication group a name.
>
> **[5:44](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=344)** This is a name for the source replication group.
>
> **[5:47](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=347)** If you're using Standard Edition and only one server, then it may not feel like this name is all that important.
>
> **[5:53](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=353)** But if you're going to use Data Center Edition servers, and create multiple replication groups, it will be important to give these replication groups names that make sense.
>
> **[6:05](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=365)** I'm going to go with simple names just to save time on typing.
>
> **[6:08](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=368)** And just call this one source and then under destination, I can go ahead and pick the computer name that will receive this replication.
>
> **[6:18](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=378)** SRV02.[landonhotel.com](https://landonhotel.com) and you may have noticed that it was looking for the server name while I was typing.
>
> **[6:27](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=387)** It tried to find it before I was done and wasn't able to find a server with the incomplete name.
>
> **[6:33](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=393)** But with the correct name in place, it found it, it meets the requirements, and we have once again the destination volume and destination log have been selected.
>
> **[6:44](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=404)** We could change those if it had chosen incorrectly and we need to give the destination group a name as well.
>
> **[6:51](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=411)** I'm going to call it target, mostly because target is shorter to type than destination.
>
> **[6:58](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=418)** That's all the information we need.
>
> **[7:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=420)** I can go ahead and create this new partnership.
>
> **[7:04](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=424)** It will verify both machines and start replicating data from the source machine so that we will then have two full working copies of all of our data.
>
> **[7:18](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=438)** I have a notification up here, let's see what it says.
>
> **[7:21](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=441)** New partnership creation in process.
>
> **[7:25](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=445)** Once that's done, I'll get a new notification saying that the partnership is complete and that the replication has begun.
>
> **[7:35](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=455)** These replications will copy an entire volume.
>
> **[7:39](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=459)** If you have multiple shares, multiple directories on there, the entire volume will be replicated from one place to another.
>
> **[7:47](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=467)** That's important to keep track of.
>
> **[7:50](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=470)** If you're doing this over a long distance, there may be some latency and some files may take a moment to be exactly the same between the multiple locations.
>
> **[8:01](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=481)** It will however, synchronize much faster than the old DFS folder replication that was often several hours or even a couple of days behind.
>
> **[8:11](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=491)** Here you can see that the new partnership was created so let me close my notifications and we can see that this synchronization is now underway.
>
> **[8:20](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=500)** I can click here for the status and down below, I could look up any information, but I can see what I need right here up top.
>
> **[8:28](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=508)** There is one and a half gig copied so far out of a 30 gig space.
>
> **[8:34](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=514)** So we're in the process of the initial replication.
>
> **[8:38](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-replica?u=76281980&t=518)** You can use this service as part of a disaster recovery plan to maintain data in two separate locations in case of catastrophe, especially in environments small enough that more intensive clustering just isn't practical.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), match, (1)
> **CLI Commands:** make (2), find (2)
> **UI Navigation:** scroll down (4)
> **Env Vars:** ntfs (1), srv02 (1), dfs (1)
> **Definitions:** is a  (3)
> **URLs:** [landonhotel.com](https://landonhotel.com) (2)
> **Prerequisites:** set up (1), install (1)
> **Speakers:** - [instructor] (1)

#### Storage Migration Service
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=0)** - [Narrator] The last two videos focused on high availability features and Windows server.
>
> **[0:05](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=5)** Features that help you recover from unforeseen catastrophes.
>
> **[0:10](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=10)** The cluster options of Storage Spaces Direct and the simple redundancy Storage Replica are great safety measures to have in place.
>
> **[0:19](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=19)** But not all workload migrations are emergencies.
>
> **[0:23](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=23)** Sometimes, it's just time to move a workload to a new server.
>
> **[0:27](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=27)** Migrating many of the roles and features can be done using SMIG tools or their own unique processes designed to move the entire configuration from one place to another.
>
> **[0:38](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=38)** But file servers can be a different animal.
>
> **[0:41](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=41)** If you have an old file server that needs to be retired, you're probably dreading the task ahead of you.
>
> **[0:48](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=48)** Copying files from one place to another, that's easy enough.
>
> **[0:52](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=52)** But to really migrate that workload, you have to find a way to copy file permissions, and share permissions, create the new shares, and set the quotas and encryption and whatever else might be going on on your old file server.
>
> **[1:08](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=68)** I think we all understand the problem, and Microsoft had fielded questions about this issue for quite a while.
>
> **[1:15](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=75)** They've now introduced a new feature to facilitate just this type of migration.
>
> **[1:20](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=80)** Storage Migration Service is their answer.
>
> **[1:23](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=83)** And this feature has three parts, or roles to be played by servers in your network.
>
> **[1:29](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=89)** The orchestrator, this is a server that has to be at least Windows Server 2019, it could be newer.
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=97)** It's going to take on the role of managing this migration.
>
> **[1:41](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=101)** It could be the target or the new file server, or it could be a separate machine all together.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=107)** But it needs to be configured with the Storage Migration Service, as well as the SMS Proxy feature.
>
> **[1:55](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=115)** The next server in the mix is the new file server, the destination server.
>
> **[2:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=120)** This is the machine that's going to accept the migration with all of the configuration.
>
> **[2:06](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=126)** It also needs to be Windows Server 2019 or an equivalent Semi-Annual release of Windows Server.
>
> **[2:13](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=133)** And it needs to have at least the SMS proxy role installed.
>
> **[2:18](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=138)** It doesn't need the actual SMS feature if it's not going to play the role of orchestrator as well.
>
> **[2:25](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=145)** But it does need that SMS proxy role installed.
>
> **[2:29](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=149)** And, don't forget the plan for enough storage space to accept all of the files on the old file server, and leave room for future growth.
>
> **[2:39](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=159)** Finally, we have the Source server.
>
> **[2:42](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=162)** This is the old file server that's been doing its job for a while.
>
> **[2:46](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=166)** The requirements here are pretty simple.
>
> **[2:48](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=168)** It needs to be a least Windows server 2003, and that's it.
>
> **[2:53](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=173)** There's nothing else to install on that machine.
>
> **[2:55](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=175)** But let's face it, if your file server is running Windows server 2003, you've really been putting this off.
>
> **[3:03](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=183)** Another requirement here, is that all of these servers need to be part of the same active directory domain, and you need a domain account that is a local administrator on both the destination and the source machines.
>
> **[3:20](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=200)** Never forget the firewall, you need to make sure that you've opened the local firewall on your target and source machines to allow SMB and Net Logon into the servers.
>
> **[3:33](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=213)** You also need to allow in WMI and DCOM as well.
>
> **[3:39](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=219)** Once the firewall is configured, you can add the extension to the Windows admin center.
>
> **[3:44](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=224)** And this has changed since the preview.
>
> **[3:47](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=227)** At this point, if you load the Windows admin center, and select one of the servers involved, you can find the storage migration service in the menu on the left, and a really convenient install button on the right.
>
> **[4:01](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=241)** Once that's installed, you can use the Windows admin center to do the migration, and it will happen in three phases.
>
> **[4:09](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=249)** First, an inventory is conducted to determine what is on the source server.
>
> **[4:14](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=254)** Second, the files are migrated, including share names and all of the details that keep most of us from doing this kind of migration.
>
> **[4:23](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=263)** Third, the cut over phase will migrate the IP addresses and assign the destination server the computer name of the original source server.
>
> **[4:35](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=275)** At that point, you're going to need to rename or decommission the old server.
>
> **[4:41](https://www.linkedin.com/learning/windows-server-2019-essential-training/storage-migration-service?u=76281980&t=281)** Users will be able to access the same files with the same network path and be none the wiser that you just swapped out an entire server.

> [!info]- Semantic Content
>
> **Env Vars:** sms (4), smig (1), smb (1), wmi (1), dcom (1)
> **Code Keywords:** while. (2), finally, (1), let (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (2)
> **Prerequisites:** install (2)
> **UI Navigation:** in the menu (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [narrator] (1)


### 5. Identity and Access Roles

#### Creating your own AD PKI
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-essential-training/creating-your-own-ad-pki?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/creating-your-own-ad-pki?u=76281980&t=0)** - [Instructor] There's a role in Windows Server that has been around for quite awhile and is still one of the most underutilized roles in my opinion, and that's the Active Directory Certificate Services role.
>
> **[0:15](https://www.linkedin.com/learning/windows-server-2019-essential-training/creating-your-own-ad-pki?u=76281980&t=15)** Encrypting data and verifying the identity of users and computers can be done using certificates.
>
> **[0:22](https://www.linkedin.com/learning/windows-server-2019-essential-training/creating-your-own-ad-pki?u=76281980&t=22)** Certificates serve as a kind of ID card that verifies the identity of whoever presents it and for any type of ID to be useful.
>
> **[0:31](https://www.linkedin.com/learning/windows-server-2019-essential-training/creating-your-own-ad-pki?u=76281980&t=31)** It needs to come from a trusted authority.
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2019-essential-training/creating-your-own-ad-pki?u=76281980&t=35)** Drivers licenses and passports need to be issued by the government agency trusted to issue them.
>
> **[0:41](https://www.linkedin.com/learning/windows-server-2019-essential-training/creating-your-own-ad-pki?u=76281980&t=41)** Certificates need to be issued by an entity that can be trusted to vouch for the user or the computer's identity.
>
> **[0:51](https://www.linkedin.com/learning/windows-server-2019-essential-training/creating-your-own-ad-pki?u=76281980&t=51)** Within Active Directory, you have the ability to issue certificates that will be recognized by everyone that trusts your internal authority.
>
> **[1:01](https://www.linkedin.com/learning/windows-server-2019-essential-training/creating-your-own-ad-pki?u=76281980&t=61)** These certificates won't be as useful to outside entities, but they're incredibly helpful when you want to quickly verify identity for remote PowerShell sessions, application access from a mobile device or any number of other scenarios.
>
> **[1:16](https://www.linkedin.com/learning/windows-server-2019-essential-training/creating-your-own-ad-pki?u=76281980&t=76)** You can install this role from the server manager, as I've done here or from the Windows Admin Center or from PowerShell on any server.
>
> **[1:25](https://www.linkedin.com/learning/windows-server-2019-essential-training/creating-your-own-ad-pki?u=76281980&t=85)** Whether it's a member of a domain or not.
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2019-essential-training/creating-your-own-ad-pki?u=76281980&t=87)** But it's easier to issue certificates that will be trusted by Active Directory if you install this on a member server.
>
> **[1:35](https://www.linkedin.com/learning/windows-server-2019-essential-training/creating-your-own-ad-pki?u=76281980&t=95)** I've already installed the role on this server and here I am prompted to configure Active Directory Certificate Services on this machine.
>
> **[1:44](https://www.linkedin.com/learning/windows-server-2019-essential-training/creating-your-own-ad-pki?u=76281980&t=104)** So I'm going to go ahead and follow that link.
>
> **[1:49](https://www.linkedin.com/learning/windows-server-2019-essential-training/creating-your-own-ad-pki?u=76281980&t=109)** The first thing that I'm asked to specify is the account that has the credentials necessary to make enterprise and domain wide changes.
>
> **[1:58](https://www.linkedin.com/learning/windows-server-2019-essential-training/creating-your-own-ad-pki?u=76281980&t=118)** The administrator for my domain fits that bill, so let me go ahead and move forward and configure the certification authority.
>
> **[2:09](https://www.linkedin.com/learning/windows-server-2019-essential-training/creating-your-own-ad-pki?u=76281980&t=129)** As we create our own public key infrastructure there is a hierarchy, and this can be done in an enterprise or in Active Directory or as a stand alone certificate authority.
>
> **[2:21](https://www.linkedin.com/learning/windows-server-2019-essential-training/creating-your-own-ad-pki?u=76281980&t=141)** This is Active Directory so I'm going to create an enterprise CA and move on to the next screen where we start creating the hierarchy.
>
> **[2:31](https://www.linkedin.com/learning/windows-server-2019-essential-training/creating-your-own-ad-pki?u=76281980&t=151)** The Root CA and there's only one per Active Directory forest this sits at the top of the hierarchy.
>
> **[2:38](https://www.linkedin.com/learning/windows-server-2019-essential-training/creating-your-own-ad-pki?u=76281980&t=158)** So this is what I'm going to install.
>
> **[2:40](https://www.linkedin.com/learning/windows-server-2019-essential-training/creating-your-own-ad-pki?u=76281980&t=160)** If you're going to install one authority, this is the one you need to pick.
>
> **[2:45](https://www.linkedin.com/learning/windows-server-2019-essential-training/creating-your-own-ad-pki?u=76281980&t=165)** Once this has been created and configured.
>
> **[2:48](https://www.linkedin.com/learning/windows-server-2019-essential-training/creating-your-own-ad-pki?u=76281980&t=168)** You can install multiple subordinate CAs to issue certificates based on the authority of the root.
>
> **[2:55](https://www.linkedin.com/learning/windows-server-2019-essential-training/creating-your-own-ad-pki?u=76281980&t=175)** Let me go ahead and move on and show you some of the options that you can choose as you configure a new certificate authority.
>
> **[3:03](https://www.linkedin.com/learning/windows-server-2019-essential-training/creating-your-own-ad-pki?u=76281980&t=183)** You have the opportunity to create a new private key for this certification authority.
>
> **[3:09](https://www.linkedin.com/learning/windows-server-2019-essential-training/creating-your-own-ad-pki?u=76281980&t=189)** Which is usually what you want to do.
>
> **[3:13](https://www.linkedin.com/learning/windows-server-2019-essential-training/creating-your-own-ad-pki?u=76281980&t=193)** If you're replacing a previous certificate authority you may want to use the key from that, from that authority that's already known and trusted in your domain.
>
> **[3:25](https://www.linkedin.com/learning/windows-server-2019-essential-training/creating-your-own-ad-pki?u=76281980&t=205)** In the next screen, you get to specify things that will effect the security of your certificates.
>
> **[3:31](https://www.linkedin.com/learning/windows-server-2019-essential-training/creating-your-own-ad-pki?u=76281980&t=211)** What hash algorithm, what level of encryption is going to be involved in your certificates, how long will the key be, which cryptographic provider is appropriate for your needs.
>
> **[3:43](https://www.linkedin.com/learning/windows-server-2019-essential-training/creating-your-own-ad-pki?u=76281980&t=223)** All of these are settings that you can choose while you're installing the server.
>
> **[3:50](https://www.linkedin.com/learning/windows-server-2019-essential-training/creating-your-own-ad-pki?u=76281980&t=230)** The name of the certificate authority, which will be recognized in Active Directory is offered up to you and you can change this if needed, and finally you can specify the maximum duration of the validity of the certificates that you issue.
>
> **[4:06](https://www.linkedin.com/learning/windows-server-2019-essential-training/creating-your-own-ad-pki?u=76281980&t=246)** They can be shorter than this, but whatever you specify here this is the max length.
>
> **[4:10](https://www.linkedin.com/learning/windows-server-2019-essential-training/creating-your-own-ad-pki?u=76281980&t=250)** This is the longest certificate that you can issue.
>
> **[4:14](https://www.linkedin.com/learning/windows-server-2019-essential-training/creating-your-own-ad-pki?u=76281980&t=254)** Many things like user certificates or computer certificates are only going to be valid for a year at a time so that they can be renewed regularly and checked up on, but five years as an overall for the server is going to be fine for me at this point.
>
> **[4:31](https://www.linkedin.com/learning/windows-server-2019-essential-training/creating-your-own-ad-pki?u=76281980&t=271)** The certificate database is going to be created, this is a local instance that is similar to SQL but not exactly.
>
> **[4:39](https://www.linkedin.com/learning/windows-server-2019-essential-training/creating-your-own-ad-pki?u=76281980&t=279)** This is where the certificates and records of them are going to be stored, and now I can confirm all of my choices and click OK and it will go ahead and set up a certificate authority that I can use in my domain.
>
> **[4:56](https://www.linkedin.com/learning/windows-server-2019-essential-training/creating-your-own-ad-pki?u=76281980&t=296)** You can see that this configuration doesn't take long at all.
>
> **[5:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/creating-your-own-ad-pki?u=76281980&t=300)** If your network is not yet running its own public key infrastructure consider the security benefits and the cost savings of using this Active Directory tool to vouch for your users, as well as your servers.

> [!info]- Semantic Content
>
> **Prerequisites:** install (5), configure (3), set up (1)
> **Code Keywords:** let (2), public (2), private (1), this, (1)
> **Tools:** powershell (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Env Vars:** sql (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Managing certificate templates
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=0)** - [Instructor] One of the conveniences of using your own PKI is the ability to create custom certificates and to issue them on your terms.
>
> **[0:09](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=9)** In my courses on certificate services, I walk through the process of configuring group policy so we can tell all of the work stations and users in the domain to trust our certificate authority, and how to pull certificates of their own whenever they need it.
>
> **[0:27](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=27)** Here in the domains, I'm going to open the default domain policy for editing, and I'm going to go ahead and maximize this and give us a little bit more room here.
>
> **[0:39](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=39)** Under the computer configuration in policies, Windows settings, security settings, and public key policies, there's a place right here where I can add the certificate of my root authority as a trusted authority, and that information will go out to all of my users and all of my computers.
>
> **[1:01](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=61)** I can also specify how computers and users enroll for certificates and when it's okay for them to enroll themselves without any human intervention.
>
> **[1:12](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=72)** This is all very convenient, but it requires you to create your own certificate templates.
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=78)** Let me close out of here and show you what I mean.
>
> **[1:22](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=82)** After closing the group policy management, I can open the tools menu and open certification authority.
>
> **[1:29](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=89)** Now, if I try to run this tool on a server that doesn't have certificate services installed, it's going to give me an error and require me to search for the server that has the certificate authority installed.
>
> **[1:42](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=102)** This demo environment is fairly small, so I went ahead and installed this role on the domain controller.
>
> **[1:49](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=109)** In a production server, it's likely that you won't do that, that you'll look for another member server somewhere else.
>
> **[1:55](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=115)** But I'm trying to simplify the number of machines in these demonstrations.
>
> **[2:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=120)** Once I expand that server, the bottom thing in the list is certificate templates.
>
> **[2:06](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=126)** If I right-click on that and go to manage, I can see a list of all the different types of certificates that I may choose to issue, including one specifically designed for users.
>
> **[2:18](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=138)** And if I look at the properties of that user certificate, I can see that it is published in active directory, but I can also see that there's not a lot of tabs up here for me to make other changes.
>
> **[2:32](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=152)** Let me close out of this and right-click on user and choose duplicate template.
>
> **[2:38](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=158)** Here, I can go to the general tab and assign this a new name.
>
> **[2:43](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=163)** Probably something that starts with reference to my company, Landon Hotels, so let me go ahead and put LH, user, and specify the validity of this certificate.
>
> **[2:55](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=175)** How long is this certificate going to be good for, whether or not it's supposed to be published in active directory.
>
> **[3:02](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=182)** All of these are fine, so I'm going to go ahead and click apply.
>
> **[3:06](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=186)** Back here on compatibility, I can choose which versions of Windows, and this does have the work station equivalent associated as well.
>
> **[3:16](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=196)** Which version of Windows support for certificates do I want to allow?
>
> **[3:21](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=201)** If I want to use only the most recent information, then I'm going to scroll down and pick the highest number on the list.
>
> **[3:28](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=208)** And when I choose that, I can immediately see what benefits I've received by choosing a newer format.
>
> **[3:36](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=216)** When I make everything newer, including the recipient, I can see a much longer list of what I am allowed to require or what capabilities are included in my certificates.
>
> **[3:49](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=229)** So let me go ahead and click okay to that.
>
> **[3:52](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=232)** Beyond this, you could go through each tab and find information that's worth setting and configuring about your servers, but let me point out a couple specific tabs that you'll want to take a look at.
>
> **[4:04](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=244)** The subject name.
>
> **[4:06](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=246)** This is the name that goes into the certificate.
>
> **[4:08](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=248)** This is how someone will be recognized.
>
> **[4:11](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=251)** It's a good idea to have two different kinds of names in an active directory certificate: the fully distinguished name and, because we use DNS for so much of what we do in active directory, the DNS name should at least be included as an alternate subject name.
>
> **[4:31](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=271)** In addition to that, I want to go to the security tab.
>
> **[4:35](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=275)** On the security tab, we specify who is allowed to enroll.
>
> **[4:40](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=280)** If I want all of my domain users to be allowed to request certificates, or better yet, I want them to automatically receive certificates when they log in, I can select them and make sure that enroll and auto enroll are selected, and then go ahead and apply these changes.
>
> **[4:59](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=299)** I now have my own new certificate template that I can start to issue.
>
> **[5:04](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=304)** If I close this management console, I can go back to certificate templates, right-click on it, and select new certificate template to issue.
>
> **[5:15](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=315)** And this will allow me to scroll through, find my Landon Hotels user template, and publish it in active directory.
>
> **[5:23](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=323)** Now, anytime one of my users logs into their work station in the domain, they're going to automatically be enrolled in that certificate.
>
> **[5:34](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=334)** So far, issued certificates are just the ones that a domain controller pulls for themselves.
>
> **[5:40](https://www.linkedin.com/learning/windows-server-2019-essential-training/managing-certificate-templates?u=76281980&t=340)** But as soon as users start logging in, their new, automatically issued certificates are going to start populating right here.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), require (2), public (1), else. (1), for, (1)
> **UI Navigation:** right-click (3), go to (3), open the (2), scroll down (1)
> **CLI Commands:** make (3), find (2)
> **Exercise Files:** template (4)
> **Env Vars:** dns (2), pki (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Federated identity features
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-essential-training/federated-identity-features?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/federated-identity-features?u=76281980&t=0)** - [Instructor] Active Directory Federation Services is a server role that isn't new and to be honest, it hasn't really changed in function all that much over the last few versions.
>
> **[0:11](https://www.linkedin.com/learning/windows-server-2019-essential-training/federated-identity-features?u=76281980&t=11)** It is however becoming increasingly important in the changing landscape of corporate networks.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2019-essential-training/federated-identity-features?u=76281980&t=18)** The function of federated identity is to form trusts across organizational lines to allow you to claim the identity of someone in your network as someone who should be granted permissions to a resource in another.
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2019-essential-training/federated-identity-features?u=76281980&t=35)** Let me use for example Landon Cafe which is the in-house restaurant at the Landon Hotel.
>
> **[0:43](https://www.linkedin.com/learning/windows-server-2019-essential-training/federated-identity-features?u=76281980&t=43)** They are technically separate organizations so they have their own separate Active Directory, their own resources and their own users.
>
> **[0:52](https://www.linkedin.com/learning/windows-server-2019-essential-training/federated-identity-features?u=76281980&t=52)** Landon Hotel has a guest billing application with access controlled by their Active Directory.
>
> **[1:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/federated-identity-features?u=76281980&t=60)** The restaurant has a security group for the room service employees and for the cashiers.
>
> **[1:08](https://www.linkedin.com/learning/windows-server-2019-essential-training/federated-identity-features?u=76281980&t=68)** ADFS can be used to create a relying party trust so that the hotel's application will be able to identify the specific restaurant employees that are allowed to access the app.
>
> **[1:23](https://www.linkedin.com/learning/windows-server-2019-essential-training/federated-identity-features?u=76281980&t=83)** It's easy to see the benefit of federated identity for this type of partner relationship.
>
> **[1:28](https://www.linkedin.com/learning/windows-server-2019-essential-training/federated-identity-features?u=76281980&t=88)** ADFS doesn't grant access to browse or view another organization's directory.
>
> **[1:35](https://www.linkedin.com/learning/windows-server-2019-essential-training/federated-identity-features?u=76281980&t=95)** Instead, it uses the principles discussed for certificates.
>
> **[1:40](https://www.linkedin.com/learning/windows-server-2019-essential-training/federated-identity-features?u=76281980&t=100)** The domain with the application is configured to trust the user domain to vouch for the group membership of their users.
>
> **[1:49](https://www.linkedin.com/learning/windows-server-2019-essential-training/federated-identity-features?u=76281980&t=109)** The resource domain can then grant access without either domain opening up any extra information about their users, groups, or resources.
>
> **[2:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/federated-identity-features?u=76281980&t=120)** Here's another environment that may benefit from this kind of relationship.
>
> **[2:04](https://www.linkedin.com/learning/windows-server-2019-essential-training/federated-identity-features?u=76281980&t=124)** Hybrid networks are on the rise.
>
> **[2:07](https://www.linkedin.com/learning/windows-server-2019-essential-training/federated-identity-features?u=76281980&t=127)** More and more networks are beginning to distribute server workloads between on-prem and Azure servers.
>
> **[2:15](https://www.linkedin.com/learning/windows-server-2019-essential-training/federated-identity-features?u=76281980&t=135)** The Azure space and the on-prem servers are configured to serve replicas of the same directory.
>
> **[2:22](https://www.linkedin.com/learning/windows-server-2019-essential-training/federated-identity-features?u=76281980&t=142)** But ultimately, the two are separate entities.
>
> **[2:25](https://www.linkedin.com/learning/windows-server-2019-essential-training/federated-identity-features?u=76281980&t=145)** The users in the cloud and the users on-premise have to be coordinated.
>
> **[2:31](https://www.linkedin.com/learning/windows-server-2019-essential-training/federated-identity-features?u=76281980&t=151)** Federated identity and other features of the ADFS role make this kind of link possible and add features to user accounts.
>
> **[2:41](https://www.linkedin.com/learning/windows-server-2019-essential-training/federated-identity-features?u=76281980&t=161)** Whether you want to add multi-factor authentication or registration of devices that aren't joined to the domain, the federation of the identity of these users and devices is becoming more and more prevalent within organizations.
>
> **[2:58](https://www.linkedin.com/learning/windows-server-2019-essential-training/federated-identity-features?u=76281980&t=178)** As you plan a migration or new deployment of Windows Server 2019, make sure you aren't too focused on roles and features that are new or noticeably upgraded.
>
> **[3:09](https://www.linkedin.com/learning/windows-server-2019-essential-training/federated-identity-features?u=76281980&t=189)** Consider what may be coming in your organization that will more fully take advantage of roles like ADFS and other features that are already there.

> [!info]- Semantic Content
>
> **Env Vars:** adfs (4)
> **Code Keywords:** function (2), let (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Rights Management Services
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-essential-training/rights-management-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/rights-management-services?u=76281980&t=0)** - [Instructor] One of the fairly common server roles that takes advantage of federated identity is the Rights Management Service role.
>
> **[0:08](https://www.linkedin.com/learning/windows-server-2019-essential-training/rights-management-services?u=76281980&t=8)** This is an on-premises server role that can be used to protect the content of your company's data and even email.
>
> **[0:17](https://www.linkedin.com/learning/windows-server-2019-essential-training/rights-management-services?u=76281980&t=17)** RMS uses federated identity to recognize users and applies RMS templates to secure content inside of files and emails.
>
> **[0:28](https://www.linkedin.com/learning/windows-server-2019-essential-training/rights-management-services?u=76281980&t=28)** There are already ways to secure entire documents in place through sharing permissions and the like.
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2019-essential-training/rights-management-services?u=76281980&t=35)** What RMS adds is protection over the content inside the document.
>
> **[0:40](https://www.linkedin.com/learning/windows-server-2019-essential-training/rights-management-services?u=76281980&t=40)** Using RMS templates you can disable buttons and supported applications.
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2019-essential-training/rights-management-services?u=76281980&t=45)** You can turn off save as and other buttons that might allow content to leave your network.
>
> **[0:51](https://www.linkedin.com/learning/windows-server-2019-essential-training/rights-management-services?u=76281980&t=51)** You can even shutdown the forward option on protected emails to prevent sensitive information from being moved outside the organization.
>
> **[1:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/rights-management-services?u=76281980&t=60)** This role is not new to Windows Server 2019.
>
> **[1:03](https://www.linkedin.com/learning/windows-server-2019-essential-training/rights-management-services?u=76281980&t=63)** It installs, configures, and runs the same as it did in Windows Server 2016 and earlier.
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2019-essential-training/rights-management-services?u=76281980&t=70)** The reason I wanted to bring it up in this course is right in line with the changes I mentioned for Active Directory Federation Services.
>
> **[1:19](https://www.linkedin.com/learning/windows-server-2019-essential-training/rights-management-services?u=76281980&t=79)** The use of the cloud in hybrid environments has changed a few things about how users access protected content.
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2019-essential-training/rights-management-services?u=76281980&t=87)** If you're currently protecting content stored in Azure spaces, you're likely using Azure Information Protection instead of RMS.
>
> **[1:36](https://www.linkedin.com/learning/windows-server-2019-essential-training/rights-management-services?u=76281980&t=96)** The Azure tools are designed to better handle the nature and volume of requests as well as providing security that aligns with cloud computing practices.
>
> **[1:46](https://www.linkedin.com/learning/windows-server-2019-essential-training/rights-management-services?u=76281980&t=106)** This is important for companies that use RMS to protect content of files that are meant to be shared throughout and possibly outside of the company.
>
> **[1:56](https://www.linkedin.com/learning/windows-server-2019-essential-training/rights-management-services?u=76281980&t=116)** Microsoft has for some time now supported a client application for Windows, Mac, and mobile platforms designed to grant access to RMS protected client.
>
> **[2:07](https://www.linkedin.com/learning/windows-server-2019-essential-training/rights-management-services?u=76281980&t=127)** This rights management sharing application reads RMS security details and works with RMS to grant appropriate privileges to the content.
>
> **[2:18](https://www.linkedin.com/learning/windows-server-2019-essential-training/rights-management-services?u=76281980&t=138)** With the combination of RMS and Azure Information Protection being used, Microsoft has to make a choice on how to best support this type of sharing because AIP is not RMS.
>
> **[2:33](https://www.linkedin.com/learning/windows-server-2019-essential-training/rights-management-services?u=76281980&t=153)** What they came up with is a new application.
>
> **[2:36](https://www.linkedin.com/learning/windows-server-2019-essential-training/rights-management-services?u=76281980&t=156)** The RMS sharing application is going to be out of support as of 2019.
>
> **[2:43](https://www.linkedin.com/learning/windows-server-2019-essential-training/rights-management-services?u=76281980&t=163)** A new AIP client application has been introduced that does support RMS connections.
>
> **[2:51](https://www.linkedin.com/learning/windows-server-2019-essential-training/rights-management-services?u=76281980&t=171)** If your company has been using the RMS client for awhile to access protected client from a partner organization or if you're using RMS to share with people outside your directory, it may be time to make the shift to that new client application.
>
> **[3:07](https://www.linkedin.com/learning/windows-server-2019-essential-training/rights-management-services?u=76281980&t=187)** It may even be time to look at Azure solutions to see what other benefits you could gain by implementing this cloud solution to protect your proprietary data.

> [!info]- Semantic Content
>
> **Env Vars:** rms (15), aip (2)
> **Code Keywords:** protected (4)
> **CLI Commands:** make (2)
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - [instructor] (1)


### 6. Virtualization

#### Hyper-V in Server 2019
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-v-in-server-2019?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-v-in-server-2019?u=76281980&t=0)** - Server and network virtualization have been with us for quite a while now.
>
> **[0:05](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-v-in-server-2019?u=76281980&t=5)** But I still run across people that are new to the idea.
>
> **[0:08](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-v-in-server-2019?u=76281980&t=8)** The basic concept is this.
>
> **[0:10](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-v-in-server-2019?u=76281980&t=10)** A very low level application is installed on a server, and it makes an inventory of physical hardware to assess how that hardware can be offered up to simulate multiple isolated machines.
>
> **[0:24](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-v-in-server-2019?u=76281980&t=24)** It can then assign virtual processors and portions of physical RAM, as well as simulated network and storage controllers, and bundle all these resources together in a single file that is the virtual machine.
>
> **[0:38](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-v-in-server-2019?u=76281980&t=38)** Then, one or more files are created that emulate hard drives.
>
> **[0:44](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-v-in-server-2019?u=76281980&t=44)** This allows you to open up a virtual machine consisting of only two or three files.
>
> **[0:50](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-v-in-server-2019?u=76281980&t=50)** One representing the resources available, and one or more representing the hard drives that store the data.
>
> **[0:57](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-v-in-server-2019?u=76281980&t=57)** This will allow you to more completely utilize all of the hardware available in high power servers.
>
> **[1:04](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-v-in-server-2019?u=76281980&t=64)** And, configured correctly, it can allow you to keep a server online, even when some hardware issues may occur.
>
> **[1:13](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-v-in-server-2019?u=76281980&t=73)** There are several major players in the virtualization space.
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-v-in-server-2019?u=76281980&t=77)** Each with their own strengths and weaknesses.
>
> **[1:19](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-v-in-server-2019?u=76281980&t=79)** Hyper-V is Microsoft's virtualization platform.
>
> **[1:23](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-v-in-server-2019?u=76281980&t=83)** And it's been around since Windows Server 2008, and on Professional and Enterprise work stations since Windows8.
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-v-in-server-2019?u=76281980&t=93)** And some of the features that we've already discussed have had an impact on Hyper-V on Windows 2019 servers.
>
> **[1:41](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-v-in-server-2019?u=76281980&t=101)** The addition of data deduplication in ReFS means virtual hard drives can now be stored on those volumes in a way that is not only faster and more resilient, but now also more efficient as well.
>
> **[1:55](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-v-in-server-2019?u=76281980&t=115)** The improvements made to Storage Replica and Storage Spaces Direct allow separate physical hosts to maintain synchronized copies of the virtual hard drive, which can allow for zero downtime, even if an entire data center goes dark unexpectedly.
>
> **[2:13](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-v-in-server-2019?u=76281980&t=133)** But Hyper-V does have a few limitations.
>
> **[2:16](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-v-in-server-2019?u=76281980&t=136)** More so in earlier releases.
>
> **[2:18](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-v-in-server-2019?u=76281980&t=138)** On Windows work stations, the virtualization environment has created some conflicts when watching high resolution video through common third party software.
>
> **[2:29](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-v-in-server-2019?u=76281980&t=149)** This is still the case on current versions but that shouldn't be a problem when configuring a server.
>
> **[2:36](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-v-in-server-2019?u=76281980&t=156)** The biggest limitation was that Hyper-V was designed to host Windows servers, and had little consideration for anything else.
>
> **[2:46](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-v-in-server-2019?u=76281980&t=166)** The virtualized hardware was easy enough to understand, but none of the features that make servers resilient and protected worked on Linux environments.
>
> **[2:56](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-v-in-server-2019?u=76281980&t=176)** Virtualizing Mac environments is still a challenge because of the way Apple licenses their product.
>
> **[3:01](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-v-in-server-2019?u=76281980&t=181)** But Linux is a different story.
>
> **[3:04](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-v-in-server-2019?u=76281980&t=184)** Linux servers are growing in popularity, and in Windows server 2019, Microsoft has made some noteworthy steps to accommodate Linux guest machines on Hyper-V hosts.
>
> **[3:17](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-v-in-server-2019?u=76281980&t=197)** One of the features, previously not available to Linux guest machines, was the server 2016 feature of shielded virtual machines, and the host guardian server.
>
> **[3:28](https://www.linkedin.com/learning/windows-server-2019-essential-training/hyper-v-in-server-2019?u=76281980&t=208)** Going forward, we're going to take a look at how that's been expanded to include this new market.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (1), else. (1), protected (1)
> **CLI Commands:** make (1)
> **Env Vars:** ram (1)
> **Definitions:** is a  (1)
> **Speakers:** - server (1)

#### Changes to virtualization security
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-essential-training/changes-to-virtualization-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/changes-to-virtualization-security?u=76281980&t=0)** - [Instructor] In Windows Server 2016, Microsoft introduced a new protection for Windows virtual machines.
>
> **[0:07](https://www.linkedin.com/learning/windows-server-2019-essential-training/changes-to-virtualization-security?u=76281980&t=7)** Shielded VMs utilized a Host Guardian Service to protect virtual machines from each other and even from admins on the host machine.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2019-essential-training/changes-to-virtualization-security?u=76281980&t=18)** That last one is important for two reasons.
>
> **[0:21](https://www.linkedin.com/learning/windows-server-2019-essential-training/changes-to-virtualization-security?u=76281980&t=21)** First, in a multi-tenant environment, it may not be up to the host server admin to look after the guest machines.
>
> **[0:29](https://www.linkedin.com/learning/windows-server-2019-essential-training/changes-to-virtualization-security?u=76281980&t=29)** Someone running a hosting service may offer space on high-power servers, and various clients would place their virtual servers on that hardware.
>
> **[0:39](https://www.linkedin.com/learning/windows-server-2019-essential-training/changes-to-virtualization-security?u=76281980&t=39)** In this case, the host machine shouldn't have rights over the guest machine.
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2019-essential-training/changes-to-virtualization-security?u=76281980&t=45)** The second reason has more to do with potential breaches in the form of someone accessing the host machine.
>
> **[0:53](https://www.linkedin.com/learning/windows-server-2019-essential-training/changes-to-virtualization-security?u=76281980&t=53)** If a hack or exploit gains remote administrative rights to a Hyper-V host, the Host Guardian Service keeps the guest machines secure.
>
> **[1:04](https://www.linkedin.com/learning/windows-server-2019-essential-training/changes-to-virtualization-security?u=76281980&t=64)** All of this was included in Windows Server 2016, but only for Windows workstations and servers as the guest VMs.
>
> **[1:14](https://www.linkedin.com/learning/windows-server-2019-essential-training/changes-to-virtualization-security?u=76281980&t=74)** Since Windows Server 2016 was released, we've seen several moves from Microsoft that have more completely integrated Linux solutions into Windows networks.
>
> **[1:26](https://www.linkedin.com/learning/windows-server-2019-essential-training/changes-to-virtualization-security?u=76281980&t=86)** Windows Server 2019 carries that growth into the shielded VM feature.
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2019-essential-training/changes-to-virtualization-security?u=76281980&t=92)** The Host Guardian Service can now protect Linux virtual machines as well.
>
> **[1:38](https://www.linkedin.com/learning/windows-server-2019-essential-training/changes-to-virtualization-security?u=76281980&t=98)** Ubuntu, Red Hat Enterprise, and SUSE Enterprise servers can be installed as type-2 virtual machines and take advantage of the Host Guardian Service.
>
> **[1:49](https://www.linkedin.com/learning/windows-server-2019-essential-training/changes-to-virtualization-security?u=76281980&t=109)** A server in the network configured as the host guardian will maintain this security.
>
> **[1:54](https://www.linkedin.com/learning/windows-server-2019-essential-training/changes-to-virtualization-security?u=76281980&t=114)** Each time a shielded virtual machine boots up, the HGS will verify the protected status and allow it to run behind the protected shield.
>
> **[2:04](https://www.linkedin.com/learning/windows-server-2019-essential-training/changes-to-virtualization-security?u=76281980&t=124)** But there's a potential risk with this arrangement, one that has already been addressed in Server 2019.
>
> **[2:11](https://www.linkedin.com/learning/windows-server-2019-essential-training/changes-to-virtualization-security?u=76281980&t=131)** If the host guardian server is unavailable, by default a virtual machine protected by this shield would be blocked from starting.
>
> **[2:20](https://www.linkedin.com/learning/windows-server-2019-essential-training/changes-to-virtualization-security?u=76281980&t=140)** The alternative was to start the machine without protection at all, but that erases the benefits of configuring shielded VMs to begin with.
>
> **[2:29](https://www.linkedin.com/learning/windows-server-2019-essential-training/changes-to-virtualization-security?u=76281980&t=149)** Offline mode allows virtual machines that have run shielded VMs in the past to boot up even if the Host Guardian Service is not available.
>
> **[2:40](https://www.linkedin.com/learning/windows-server-2019-essential-training/changes-to-virtualization-security?u=76281980&t=160)** They use the most recent security configurations and so have the same protections they had the last time that they booted.
>
> **[2:49](https://www.linkedin.com/learning/windows-server-2019-essential-training/changes-to-virtualization-security?u=76281980&t=169)** There may be some who write this improvement off as unimportant because their Windows network is Windows only.
>
> **[2:56](https://www.linkedin.com/learning/windows-server-2019-essential-training/changes-to-virtualization-security?u=76281980&t=176)** I would remind you that not too many years ago we didn't think we would be integrating Android and Apple phones into our Windows networks, but today many of us do.
>
> **[3:06](https://www.linkedin.com/learning/windows-server-2019-essential-training/changes-to-virtualization-security?u=76281980&t=186)** Things change.
>
> **[3:07](https://www.linkedin.com/learning/windows-server-2019-essential-training/changes-to-virtualization-security?u=76281980&t=187)** Microsoft has taken steps to make sure that Hyper-V will grow with you as they do.

> [!info]- Semantic Content
>
> **Code Keywords:** protected (3), case, (1)
> **Env Vars:** suse (1), hgs (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Containers
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=0)** - [Instructor] Virtual machines are a commonly used feature when you need to bring up an entire server to provide roles and features for your network.
>
> **[0:09](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=9)** The ability to simulate hardware allows you flexibility in how and where to place these servers.
>
> **[0:16](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=16)** Some time ago, developers found a way to take virtualization to another level.
>
> **[0:22](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=22)** They realized that if the thing they wanted to publish was a network application, they didn't need an entire virtual machine.
>
> **[0:30](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=30)** They didn't need to construct a whole operating system around their one application.
>
> **[0:36](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=36)** They came up with a new technology called containers.
>
> **[0:40](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=40)** Containers simulate the operating system, allowing just enough space for an application to run in the new environment.
>
> **[0:49](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=49)** In much the same way that Hyper-V shares your physical hardware to emulate virtual hardware, containers is a feature that takes your host operating system and shares that to emulate a virtual operating system.
>
> **[1:05](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=65)** This means that the environment you build and work with is much smaller.
>
> **[1:09](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=69)** When you think about it, applications don't need hardware.
>
> **[1:13](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=73)** Applications only need an operating system, and that can be simulated.
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=78)** They count on that operating system to deal with the hardware.
>
> **[1:21](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=81)** A container shares portions of the host operating system, the kernel, the dlls, and other components and that allows you to build on a layer a much smaller component that only holds the application and any unique requirements that that may have.
>
> **[1:41](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=101)** These containers have several benefits, including the one that I find to be the most important.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=107)** Containers are completely portable.
>
> **[1:50](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=110)** When a team of programmers has finished creating their perfect custom application in a container, they can publish that same container on a production server.
>
> **[2:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=120)** That means there's no installation process for the new application.
>
> **[2:04](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=124)** There's no risk of it not running correctly, because the new host has a different processor or a different video card, or a different network controller driver.
>
> **[2:13](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=133)** You actually run the application in the exact environment where it was created.
>
> **[2:19](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=139)** And you get to continue working on version 2.0 in a perfect copy of the same environment.
>
> **[2:27](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=147)** Installing this feature is a little different than other roles and features that we've looked at in Windows server 2019.
>
> **[2:35](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=155)** Here we are on one of the member servers in our domain.
>
> **[2:38](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=158)** It's not necessary that this server be in a domain.
>
> **[2:41](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=161)** It can be a standalone server, and it will work just fine.
>
> **[2:44](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=164)** Let me go ahead and open PowerShell to install and set this application up.
>
> **[2:51](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=171)** It starts pretty much the same as installing any other feature.
>
> **[2:55](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=175)** And you could do this step from the Windows admin center, or you could do it from the server manager, but since we have PowerShell open, let me go ahead and install the Windows feature here.
>
> **[3:08](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=188)** The Windows feature that we want to install is containers.
>
> **[3:14](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=194)** And it will go out and collect the information and install that feature, but the one thing it won't add is administrative tools to manage containers.
>
> **[3:23](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=203)** There are no admin tools to install this from Microsoft.
>
> **[3:27](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=207)** Originally, Microsoft did create a module of PowerShell commandlets, back when Windows server 2016 was in preview phase.
>
> **[3:36](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=216)** But they were deprecated very soon in favor of Docker commandlets and the Docker engine.
>
> **[3:43](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=223)** This install is done.
>
> **[3:44](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=224)** I'm going to go ahead and restart this machine using the shut down command with the R option.
>
> **[3:50](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=230)** And when it comes back up, we're going to go ahead and install those Docker features.
>
> **[3:59](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=239)** Now that Windows has rebooted, we can continue with installing the Docker engine and management tools.
>
> **[4:05](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=245)** Docker is the biggest player in the containers space, so it made sense for Microsoft to partner with them for management tools for the Docker's feature on Windows server.
>
> **[4:16](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=256)** Let me go ahead and open PowerShell again.
>
> **[4:20](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=260)** And inside PowerShell, I'm going to first run a command to install a management provider.
>
> **[4:27](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=267)** And the commandlet to do that looks like this.
>
> **[4:29](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=269)** It's Install-Module.
>
> **[4:33](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=273)** And specifically, I want to install the module Docker Microsoft Provider.
>
> **[4:44](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=284)** And Microsoft is abbreviated there.
>
> **[4:46](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=286)** And I'm going to add the Force parameter to the end of that commandlet.
>
> **[4:52](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=292)** And if this is the first time you've reached outside of Windows to pull down information, you're going to be prompted to install PowerShellGet, this new Get provider.
>
> **[5:02](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=302)** So I'm going to go ahead and accept that, because I haven't done that yet on this machine.
>
> **[5:08](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=308)** So yes to accepting that, and I may be prompted for another security approval.
>
> **[5:15](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=315)** Let's see.
>
> **[5:17](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=317)** Nope, it looks like that one went through without any problem.
>
> **[5:21](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=321)** The next thing that we need to do, and I'll hit enter a couple of times, just to buy us a little bit of space, is install the Docker package.
>
> **[5:30](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=330)** And this time, instead of installing a module, we're going to install a package, because this includes more than just some commandlets and basic features.
>
> **[5:39](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=339)** We're installing the entire Docker engine this time, as well as the PowerShell tools.
>
> **[5:45](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=345)** So the package that we want to install is Docker, and this time we're going to cite the provider that we just installed, the Docker Microsoft Provider.
>
> **[6:04](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=364)** And once again, I'm going to use the Force parameter to make sure that this goes through.
>
> **[6:12](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=372)** There we go.
>
> **[6:13](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=373)** It has installed.
>
> **[6:15](https://www.linkedin.com/learning/windows-server-2019-essential-training/containers?u=76281980&t=375)** Now that the feature and the Docker engine and commandlets are installed, you will have access to some operating system base images and can start creating containers to develop and deploy custom applications.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (12), find (1), make (1)
> **Prerequisites:** install (14)
> **Code Keywords:** let (4), module (4), continue (2), this. (1)
> **Tools:** powershell (6)
> **Definitions:** is a  (2), means that (1)
> **Versions:** version 2 (1)
> **Speakers:** - [instructor] (1)

#### Windows Subsystem for Linux
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=0)** - [Instructor] In a recent video about virtual machines, I made mention that Microsoft has taken significant steps to embrace the opensource community.
>
> **[0:09](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=9)** One of those steps is the inclusion of a subsystem for Linux.
>
> **[0:14](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=14)** The Windows Subsystem for Linux is a Windows feature that allows you to run an instance of Linux on your server.
>
> **[0:22](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=22)** Now I'm not talking about a duel-boot scenario.
>
> **[0:24](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=24)** Windows and Linux can run at the same time.
>
> **[0:28](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=28)** This doesn't require Hyper-V or virtual machines or containers.
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=32)** It's not virtualization at all.
>
> **[0:34](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=34)** It's an entire instance of Ubuntu or SUSE Linux, running concurrently on your Windows server.
>
> **[0:41](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=41)** Installing the feature is pretty simple but pulling down and installing a Linux distribution does take a couple of steps.
>
> **[0:49](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=49)** You can install the subsystem by using the Install Windows feature in Powershell or by launching the wizard from the server manager.
>
> **[0:57](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=57)** Since I did the last one in Powershell, I'll go ahead and run this one from server manager just for fun.
>
> **[1:02](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=62)** I'm going to launch the wizard from the dashboard and move forward through, yes I want to install a role or feature, I want to install it on this machine, and it's to a role, I want to install a feature.
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=78)** So here I'm going to scroll to the very bottom of the alphabetic list and look for Windows Subsystem for Linux.
>
> **[1:25](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=85)** And when I check that box, you can see that no additional steps were added so I can go ahead and just continue on forward and add this feature.
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=97)** And this installation might only take a few seconds or a couple minutes, depending on your resources, but as you can see here, it does require a reboot because it's made some substantial changes.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=107)** So, I'm going to go ahead and close this wizard and reboot the system.
>
> **[1:56](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=116)** And restart because of a planned operating system reconfiguration, and I'm going to fast forward to the point where the server has restarted.
>
> **[2:07](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=127)** All right, now that the reboot has completed, I want to download and install a distribution of Linux.
>
> **[2:14](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=134)** So let me go ahead and move over the Powershell to do that.
>
> **[2:18](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=138)** Run as Administrator and first, we need to go ahead and download it.
>
> **[2:23](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=143)** And to do that, I'm going to use the Invoke-webRequest commmandlet.
>
> **[2:30](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=150)** I need to specify couple of parameters here.
>
> **[2:32](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=152)** First, I need to say that the URI is HTTPS, aka dot ms, slash, and here I gave the name of the distribution that I would like to download.
>
> **[2:49](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=169)** And you can do web searches to find what's available at the time.
>
> **[2:53](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=173)** I've seen SLES GNU, SUSE Debian Ubuntu available for downloading and use in this environment, but I'm going to go ahead and start with an Ubuntu distribution.
>
> **[3:07](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=187)** Ubuntu, let's use 1604, and then another parameter that I need to add to this commandlet is I need to specify the output file
>
> **[3:26](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=206)** and the file that I'm going to create, I'm going to give it a very simple name to type later.
>
> **[3:32](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=212)** I'm just going to call it Ubuntu dot APPX because that's the file extension that it's downloading anyway, and I'm going to add one other parameter, UseBasicParsing.
>
> **[3:52](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=232)** Now, this download can be fairly large, so once again, I'm going to skip forward quite a bit and the video will resume momentarily at the end of this download.
>
> **[4:03](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=243)** All right, now that's downloaded, and no, my server isn't quite that fast.
>
> **[4:08](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=248)** We just trimmed out some of the time to speed things up a bit here.
>
> **[4:12](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=252)** Now that the download's done, we're going to need to rename the file so that we can unpack it.
>
> **[4:17](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=257)** The Linux installer downloads as an APPX file, but that file has all of the same properties as a common ZIP file.
>
> **[4:25](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=265)** So, I can rename the file right here in Powershell, using Rename-Item.
>
> **[4:34](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=274)** The file that I want to rename is Ubuntu dot APPX and I would like to rename it to Ubuntu dot ZIP.
>
> **[4:49](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=289)** And renaming doesn't take very long at all so the next commandlet is to expand the archive.
>
> **[4:58](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=298)** And we're going to unpack the file, Ubuntu dot ZIP,
>
> **[5:07](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=307)** and we're going to put all of that information in a new directory which we will create and call Ubuntu.
>
> **[5:17](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=317)** And that unpacking doesn't take very long.
>
> **[5:20](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=320)** Let me go ahead and take a look at where we are.
>
> **[5:23](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=323)** Here, you can see that the Ubuntu folder is not here.
>
> **[5:27](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=327)** That's because I told it to put this folder in the root of the Drive.
>
> **[5:31](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=331)** So let me go ahead and change directories to the root of this drive and if I hit the Directory again, there's my Ubuntu folder.
>
> **[5:41](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=341)** So change directories into the Ubuntu folder.
>
> **[5:46](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=346)** Run another directory listing and here we find the Ubuntu dot EXE, the file that's going to install this distribution of Linux.
>
> **[5:56](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=356)** In Powershell, when you want to run an executable, even if you're in the current directory, it's always a good idea to start with dot slash and Powershell is not real particular about whether that slash leans forward or backwards.
>
> **[6:11](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=371)** Whichever you type will end up working out just fine.
>
> **[6:15](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=375)** Let me go ahead and type Ubuntu dot EXE and that will install Linux into that subsystem on this machine.
>
> **[6:25](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=385)** Now this is going to take longer than the download, but when it's complete, you'll be asked to create a Linux username and password and then you'll be dropped directly into your Linux environment.
>
> **[6:37](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=397)** You can exit out of that and at any given time, you can open Powershell or a command prompt and type Bash to re-enter your selected Linux distribution.
>
> **[6:48](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=408)** That environment will allow you to install Linux applications.
>
> **[6:52](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=412)** Maybe you want to install the Linux instance of Docker.
>
> **[6:55](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-subsystem-for-linux?u=76281980&t=415)** Then you can host Windows containers and Linux containers at the same time from the same physical hardware or from within the same virtual server.

> [!info]- Semantic Content
>
> **Env Vars:** appx (3), zip (3), suse (2), exe (2), uri (1)
> **Prerequisites:** install (10)
> **Tools:** powershell (7), command prompt (1), bash (1)
> **Code Keywords:** let (5), require (2), continue (1)
> **CLI Commands:** find (2), docker (1)
> **Code Identifiers:** webrequest (1)
> **Exercise Files:** zip file (1)
> **Definitions:** is a  (1)


### 7. Going Forward

#### Long-Term Servicing Channel vs. Semi-Annual releases
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-essential-training/long-term-servicing-channel-vs-semi-annual-releases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/long-term-servicing-channel-vs-semi-annual-releases?u=76281980&t=0)** - [Instructor] This course has been about Windows Server 2019, the latest release in the long-term service channel of Windows Server.
>
> **[0:09](https://www.linkedin.com/learning/windows-server-2019-essential-training/long-term-servicing-channel-vs-semi-annual-releases?u=76281980&t=9)** These long-term service releases have the advantage of being supported by Microsoft for several years rather than the 18-month lifecycle of the semi-annual releases.
>
> **[0:21](https://www.linkedin.com/learning/windows-server-2019-essential-training/long-term-servicing-channel-vs-semi-annual-releases?u=76281980&t=21)** But these long-term releases benefit greatly from the semi-annual release channel.
>
> **[0:27](https://www.linkedin.com/learning/windows-server-2019-essential-training/long-term-servicing-channel-vs-semi-annual-releases?u=76281980&t=27)** Improvements to the subsystem for Linux, Storage Spaces Direct, containers, and many other server components have been developed and deployed in these semi-annual releases.
>
> **[0:40](https://www.linkedin.com/learning/windows-server-2019-essential-training/long-term-servicing-channel-vs-semi-annual-releases?u=76281980&t=40)** The community of administrators, developers, and DevOps then have the opportunity to weigh in on whether or not the features are meeting their needs and expectations before these various features from all the semi-annual releases get rolled up and added into the next long-term release, like Windows Server 2019.
>
> **[1:02](https://www.linkedin.com/learning/windows-server-2019-essential-training/long-term-servicing-channel-vs-semi-annual-releases?u=76281980&t=62)** The difference between the long-term service release and the semi-annual channel give different opportunities.
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2019-essential-training/long-term-servicing-channel-vs-semi-annual-releases?u=76281980&t=70)** You may choose to keep all of your production servers on these long-term service channel releases because of their stability and long-term support.
>
> **[1:19](https://www.linkedin.com/learning/windows-server-2019-essential-training/long-term-servicing-channel-vs-semi-annual-releases?u=76281980&t=79)** Or you may choose to introduce as many semi-annual release servers as you can to receive access to new features as quickly as possible.
>
> **[1:28](https://www.linkedin.com/learning/windows-server-2019-essential-training/long-term-servicing-channel-vs-semi-annual-releases?u=76281980&t=88)** If you have a large environment with lots of servers, each performing specific tasks, you may likely find a way to use both.
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2019-essential-training/long-term-servicing-channel-vs-semi-annual-releases?u=76281980&t=97)** Domain controllers likely need the stability of a long-term service release.
>
> **[1:42](https://www.linkedin.com/learning/windows-server-2019-essential-training/long-term-servicing-channel-vs-semi-annual-releases?u=76281980&t=102)** As do other database roles, like a certificate authority.
>
> **[1:46](https://www.linkedin.com/learning/windows-server-2019-essential-training/long-term-servicing-channel-vs-semi-annual-releases?u=76281980&t=106)** Even with the introduction of the Storage Migration Service, file servers are less likely to benefit from lots of new features, and so they are also more likely candidates for the long-term service release channel.
>
> **[2:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/long-term-servicing-channel-vs-semi-annual-releases?u=76281980&t=120)** Other involved roles that we've talked about in this course also would do well to be on a server that they can stay installed and configured on for a longer period of time.
>
> **[2:11](https://www.linkedin.com/learning/windows-server-2019-essential-training/long-term-servicing-channel-vs-semi-annual-releases?u=76281980&t=131)** But on the other hand, developers are always looking to what happens next.
>
> **[2:16](https://www.linkedin.com/learning/windows-server-2019-essential-training/long-term-servicing-channel-vs-semi-annual-releases?u=76281980&t=136)** They benefit immensely from being able to develop their applications in an environment that has access to the newest features possible.
>
> **[2:24](https://www.linkedin.com/learning/windows-server-2019-essential-training/long-term-servicing-channel-vs-semi-annual-releases?u=76281980&t=144)** Any development projects, whether it's a container application or something being deployed in a virtual server, is going to benefit from having access to those features as soon as possible.
>
> **[2:37](https://www.linkedin.com/learning/windows-server-2019-essential-training/long-term-servicing-channel-vs-semi-annual-releases?u=76281980&t=157)** The semi-annual releases of Server are great for them.
>
> **[2:40](https://www.linkedin.com/learning/windows-server-2019-essential-training/long-term-servicing-channel-vs-semi-annual-releases?u=76281980&t=160)** The frequent upgrades would be more of a help than a hindrance to them.
>
> **[2:45](https://www.linkedin.com/learning/windows-server-2019-essential-training/long-term-servicing-channel-vs-semi-annual-releases?u=76281980&t=165)** And their servers are not likely to be running the server roles that don't survive in place upgrades.
>
> **[2:51](https://www.linkedin.com/learning/windows-server-2019-essential-training/long-term-servicing-channel-vs-semi-annual-releases?u=76281980&t=171)** Make sure as you plan semi-annual release servers in your network that they're regularly backed up, not just the files on the servers, but the configurations as well.
>
> **[3:02](https://www.linkedin.com/learning/windows-server-2019-essential-training/long-term-servicing-channel-vs-semi-annual-releases?u=76281980&t=182)** Also, consider using the various cloud repositories for developer projects.
>
> **[3:07](https://www.linkedin.com/learning/windows-server-2019-essential-training/long-term-servicing-channel-vs-semi-annual-releases?u=76281980&t=187)** Container images can be stored in private repositories at GitHub or on-site.
>
> **[3:14](https://www.linkedin.com/learning/windows-server-2019-essential-training/long-term-servicing-channel-vs-semi-annual-releases?u=76281980&t=194)** And for many of the roles that you count on from Windows Servers, it may be a good idea to use the semi-annual releases for testing and for future planning, allowing you to try out what's coming next in the role before you deploy it into production.
>
> **[3:31](https://www.linkedin.com/learning/windows-server-2019-essential-training/long-term-servicing-channel-vs-semi-annual-releases?u=76281980&t=211)** You can keep the production installation of these mission-critical tasks on your long-term service release machines, but go ahead and test them.
>
> **[3:40](https://www.linkedin.com/learning/windows-server-2019-essential-training/long-term-servicing-channel-vs-semi-annual-releases?u=76281980&t=220)** Test your operations, test your development projects, test your DevOps procedures in these semi-annual release servers that deliver all the latest features as quickly as possible.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **Code Keywords:** private (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)

#### Windows Insider program
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-insider-program?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-insider-program?u=76281980&t=0)** - [Instructor] Time will tell how Microsoft will use the two parallel release channels over the long haul.
>
> **[0:06](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-insider-program?u=76281980&t=6)** The quick release of features in the semi-annual channels, and the long-term reliability that people have come to rely on, provide different assurances to different people.
>
> **[0:17](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-insider-program?u=76281980&t=17)** The not so gradual move of many services and server roles to Azure, may take part of this decision out of the administrators hands.
>
> **[0:27](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-insider-program?u=76281980&t=27)** However you look at it, there is change coming down the line and however that change plays out one thing is for sure, you don't want to be surprised by a decision outside of your hands, may throw a wrench into your IT's strategic plan.
>
> **[0:42](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-insider-program?u=76281980&t=42)** You can stay in the know by reading articles on popular tech news sites, and subscribing to Microsoft's online magazines.
>
> **[0:50](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-insider-program?u=76281980&t=50)** Or you could be part of the conversation.
>
> **[0:55](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-insider-program?u=76281980&t=55)** Windows Insiders is a program that Microsoft introduced, to give the tech community access to the ever evolving versions of Windows.
>
> **[1:03](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-insider-program?u=76281980&t=63)** When Nano Server was introduced in Windows Server 2016, there was overwhelming response from the community to make it even smaller and easier to deploy for application development environments.
>
> **[1:16](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-insider-program?u=76281980&t=76)** The discussion showed no real need for it as a infrastructure platform.
>
> **[1:21](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-insider-program?u=76281980&t=81)** As a result, Nano is no longer a deployable platform, but an application environment with an incredibly small footprint.
>
> **[1:29](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-insider-program?u=76281980&t=89)** What could happen with the roles and features you want or plan to use if you stay out of the conversation?
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-insider-program?u=76281980&t=97)** Getting involved is easy.
>
> **[1:41](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-insider-program?u=76281980&t=101)** If you browse to insider.[windows.com](https://windows.com), you can sign up to participate in the development of Windows workstation environments, or you could click on the For Business link at the top and choose Windows Server Getting Started to take a look at and join the conversation about Windows Server.
>
> **[2:01](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-insider-program?u=76281980&t=121)** On this page, you can register for the Windows Insider program including access to preview copies of Windows server and the Windows Admin center, and other applications.
>
> **[2:12](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-insider-program?u=76281980&t=132)** Then, you could download and install these various products.
>
> **[2:17](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-insider-program?u=76281980&t=137)** Let's take a look at what these downloads currently include.
>
> **[2:20](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-insider-program?u=76281980&t=140)** Under Windows server we have the long-term service channel and we have the semi-annuals as ISOs, so that you can install your own machines, or as virtual hard drives ready to bring up as a virtual machine.
>
> **[2:34](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-insider-program?u=76281980&t=154)** Under additional downloads, you can have access to some of the other projects that are currently under way.
>
> **[2:41](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-insider-program?u=76281980&t=161)** This preview copy of the Windows Admin Center has already been replaced by the general release, but this is a good place to keep and eye on, and download for your own trial version use any of the next versions of Windows and the management products.
>
> **[2:58](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-insider-program?u=76281980&t=178)** But the Windows Insider program is about more than just downloading and testing out the next thing.
>
> **[3:05](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-insider-program?u=76281980&t=185)** The other feature that's available to you on the Insider Windows webpage, is the ability to engage.
>
> **[3:12](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-insider-program?u=76281980&t=192)** To join the conversation.
>
> **[3:15](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-insider-program?u=76281980&t=195)** From here you can look at the feedback hub and you can participate in the Windows Insider tech community.
>
> **[3:22](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-insider-program?u=76281980&t=202)** You can follow discussions that might hold answers to some of your questions about how new features can be best used.
>
> **[3:29](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-insider-program?u=76281980&t=209)** You can join the conversation by adding comments or questions about features that you would like to see developed and maintained.
>
> **[3:37](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-insider-program?u=76281980&t=217)** But even if your only reason for joining Windows Insiders is to access and test coming versions of products, it's still a valuable program.
>
> **[3:47](https://www.linkedin.com/learning/windows-server-2019-essential-training/windows-insider-program?u=76281980&t=227)** The information that you can gain will help you to build an understanding of what's happening next, and what your fellow administrators are asking for, and that's going to be valuable information when it comes to planning the next steps for your IT infrastructure.

> [!info]- Semantic Content
>
> **Code Keywords:** throw (1), let (1), include. (1), for, (1)
> **Prerequisites:** install (2), getting started (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **URLs:** [windows.com](https://windows.com) (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-essential-training/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-essential-training/next-steps?u=76281980&t=0)** - [Scott] In this course, we've introduced a lot of topics.
>
> **[0:03](https://www.linkedin.com/learning/windows-server-2019-essential-training/next-steps?u=76281980&t=3)** Some were familiar, some were new.
>
> **[0:06](https://www.linkedin.com/learning/windows-server-2019-essential-training/next-steps?u=76281980&t=6)** And some were more relevant to your network than others.
>
> **[0:09](https://www.linkedin.com/learning/windows-server-2019-essential-training/next-steps?u=76281980&t=9)** Most of them were only covered at a surface level.
>
> **[0:12](https://www.linkedin.com/learning/windows-server-2019-essential-training/next-steps?u=76281980&t=12)** My recommendation to you is that you review these features and identify the ones that will make your network better.
>
> **[0:19](https://www.linkedin.com/learning/windows-server-2019-essential-training/next-steps?u=76281980&t=19)** When you start to find those topics, the ones that you want to explore further, search the LinkedIn Learning Library for courses on those specific areas.
>
> **[0:29](https://www.linkedin.com/learning/windows-server-2019-essential-training/next-steps?u=76281980&t=29)** There are courses on installing and managing Windows Server, courses on Active Directory, and courses on specific roles and features that are discussed in this course.
>
> **[0:40](https://www.linkedin.com/learning/windows-server-2019-essential-training/next-steps?u=76281980&t=40)** And once you start the deeper dives into these features, build your own test labs and follow along, and more importantly, design test scenarios of your own.
>
> **[0:52](https://www.linkedin.com/learning/windows-server-2019-essential-training/next-steps?u=76281980&t=52)** Use the Microsoft Docs websites and the TechNet blogs to support you in the learning process.
>
> **[0:59](https://www.linkedin.com/learning/windows-server-2019-essential-training/next-steps?u=76281980&t=59)** And most of all, join the Windows Insider Program for business.
>
> **[1:03](https://www.linkedin.com/learning/windows-server-2019-essential-training/next-steps?u=76281980&t=63)** Join the conversations and let your voice be heard regarding unmet needs or the implementation of newly released features.
>
> **[1:12](https://www.linkedin.com/learning/windows-server-2019-essential-training/next-steps?u=76281980&t=72)** Who knows?
>
> **[1:13](https://www.linkedin.com/learning/windows-server-2019-essential-training/next-steps?u=76281980&t=73)** You could be the one that starts the conversation to save your favorite Windows Server feature.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1)
> **Code Keywords:** new. (1), let (1)
> **Speakers:** - [scott] (1)


## Path Context

### In [[Getting Started with Windows Server 2019]]
**1 of 4** | [[Windows Server 2019- Installation and Configuration]] →

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