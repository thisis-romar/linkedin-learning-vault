---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: windows-10-administration-3
url: "https://www.linkedin.com/learning/windows-10-administration-3"
duration_minutes: 94
duration: 1h 34m
level: Intermediate
updated: 12/21/2023
learners: 14374
skills:
  - Windows 10
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQFqZKdHBoYpXg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1603818996523?e=2147483647&amp;v=beta&amp;t=A8oeIXuglxvpOm7pMmg1vcTD2WAW_rc-xFlHwDWPTJ0"
linkedin_topic: Network and System Administration
learning_paths:
  - '[[Optimizing Enterprise Security and Productivity Using Microsoft 365]]'
  - '[[Explore a Career in IT Support]]'
prev_courses:
  - '[[Microsoft 365- Administration]]'
  - '[[Windows 10- Supporting Users Essential Training]]'
next_courses:
  - '[[Microsoft Entra ID Fundamentals]]'
  - '[[Windows 10- Security]]'
path_nav: '[{"path":"Optimizing Enterprise Security and Productivity Using Microsoft 365","position":4,"total":11,"prev":"Microsoft 365- Administration","next":"Microsoft Entra ID Fundamentals"},{"path":"Explore a Career in IT Support","position":5,"total":11,"prev":"Windows 10- Supporting Users Essential Training","next":"Windows 10- Security"}]'
path_count: 2
tags:
  - course
  - topic/cloud-computing
  - topic/network-and-system-administration
  - topic/devops
  - topic/it-help-desk
  - skill/windows-10
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Network%20and%20System%20Administration/Windows%2010-%20Administration.md)

![Windows 10: Administration](https://media.licdn.com/dms/image/v2/C4D0DAQFqZKdHBoYpXg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1603818996523?e=2147483647&amp;v=beta&amp;t=A8oeIXuglxvpOm7pMmg1vcTD2WAW_rc-xFlHwDWPTJ0)

# Windows 10: Administration

> Being able to administer a Windows machine is a key skill for any Windows administrator. Keep your skills sharp and up to date with this Windows 10 administration training. Martin Guidry takes a detailed look at the operating system, focusing on the administrative tasks necessary for keeping Windows 10 in tiptop shape. Martin first reviews the various desktop versions of Windows 10. This section c

> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-administration-3) | 1h 34m | Intermediate | 14K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (3 videos)
- **[[#1. Windows 10 Editions and Features]]** (2 videos)
- **[[#2. Configuring Windows 10]]** (2 videos)
- **[[#3. Drivers and Notifications]]** (2 videos)
- **[[#4. Windows Group Policy]]** (3 videos)
- **[[#5. Windows Authentication]]** (4 videos)
- **[[#6. Windows Encryption]]** (2 videos)
- **[[#7. Windows Boot Process]]** (2 videos)
- **[[#8. Virtualization]]** (2 videos)
- **[[#9. Networking]]** (2 videos)
- **[[#10. Backup and Recovery]]** (5 videos)
- **[[#11. Troubleshooting]]** (3 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### About the 2023 update
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-administration-3/about-the-summer-2020-update?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-administration-3/about-the-summer-2020-update?u=76281980&t=0)** - Hi, I'm Martin Guidry, and welcome to Windows 10: Administration.
>
> **[0:05](https://www.linkedin.com/learning/windows-10-administration-3/about-the-summer-2020-update?u=76281980&t=5)** In this course, we'll cover the skills you need to administer the Windows 10 operating system.
>
> **[0:12](https://www.linkedin.com/learning/windows-10-administration-3/about-the-summer-2020-update?u=76281980&t=12)** We'll start by discussing the different versions of Windows 10.
>
> **[0:15](https://www.linkedin.com/learning/windows-10-administration-3/about-the-summer-2020-update?u=76281980&t=15)** Then I'll show you how to use group policy to customize Windows 10.
>
> **[0:20](https://www.linkedin.com/learning/windows-10-administration-3/about-the-summer-2020-update?u=76281980&t=20)** We'll see how to backup and restore Windows 10, and we'll explore security and encryption tools like BitLocker and EFS.
>
> **[0:29](https://www.linkedin.com/learning/windows-10-administration-3/about-the-summer-2020-update?u=76281980&t=29)** We'll cover all these features, plus plenty of other tools and techniques.
>
> **[0:34](https://www.linkedin.com/learning/windows-10-administration-3/about-the-summer-2020-update?u=76281980&t=34)** Now let's get started with Windows 10: Administration.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Env Vars:** efs (1)
> **Speakers:** - hi (1)

#### Welcome
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-administration-3/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-administration-3/welcome?u=76281980&t=0)** - Let's talk a little bit about what you should know before we start our course on Windows 10 administration.
>
> **[0:07](https://www.linkedin.com/learning/windows-10-administration-3/welcome?u=76281980&t=7)** This course is designed for IT professionals who are working in a capacity of supporting a Windows 10 on the desktop.
>
> **[0:15](https://www.linkedin.com/learning/windows-10-administration-3/welcome?u=76281980&t=15)** This is not an introductory course to Windows.
>
> **[0:18](https://www.linkedin.com/learning/windows-10-administration-3/welcome?u=76281980&t=18)** If you're looking for an introductory, beginner-level course, I encourage you to try Windows 10 Essential Training here on [lynda.com](https://lynda.com).
>
> **[0:28](https://www.linkedin.com/learning/windows-10-administration-3/welcome?u=76281980&t=28)** To get the most out of this course, it would be good if you have experience administering desktop operating systems, such as a previous version of Windows, or maybe Macintosh or Linux desktops.
>
> **[0:43](https://www.linkedin.com/learning/windows-10-administration-3/welcome?u=76281980&t=43)** In general, you should be familiar enough with Windows to work with File Explorer and the control panels, and be comfortable with basic networking terms.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **URLs:** [lynda.com](https://lynda.com) (1)
> **Analogies:** such as (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - let (1)

#### What you should know before starting
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-administration-3/what-you-should-know-before-starting-20220578?u=76281980)


### 1. Windows 10 Editions and Features

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Understanding the desktop versions of Windows 10
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-desktop-versions-of-windows-10?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-desktop-versions-of-windows-10?u=76281980&t=0)** - [Instructor] Let's start out by talking about the different editions of Windows 10.
>
> **[0:06](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-desktop-versions-of-windows-10?u=76281980&t=6)** Windows 10 is available in three primary editions for desktop computers.
>
> **[0:12](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-desktop-versions-of-windows-10?u=76281980&t=12)** They are Home, Pro and Enterprise.
>
> **[0:16](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-desktop-versions-of-windows-10?u=76281980&t=16)** As the name suggests the Home version is designed not for businesses, but rather for people in their homes.
>
> **[0:25](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-desktop-versions-of-windows-10?u=76281980&t=25)** The Pro version is designed for businesses and has most of the features one would need in a typical corporate environment.
>
> **[0:34](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-desktop-versions-of-windows-10?u=76281980&t=34)** And Enterprise is designed for large business and has basically every feature available.
>
> **[0:40](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-desktop-versions-of-windows-10?u=76281980&t=40)** The Home and Pro edition can be bought easily online or at most stores that sell software.
>
> **[0:48](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-desktop-versions-of-windows-10?u=76281980&t=48)** The Enterprise edition is a little more difficult to come by with a few exceptions, it's only sold in volume license sets.
>
> **[0:58](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-desktop-versions-of-windows-10?u=76281980&t=58)** In other words, large businesses buy a large number of licenses from Microsoft at one time.
>
> **[1:05](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-desktop-versions-of-windows-10?u=76281980&t=65)** That is the preferred way for Microsoft to sell Enterprise edition.
>
> **[1:10](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-desktop-versions-of-windows-10?u=76281980&t=70)** So you may not find it at your local software store.
>
> **[1:13](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-desktop-versions-of-windows-10?u=76281980&t=73)** We'll talk about some features that are available in all three editions.
>
> **[1:18](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-desktop-versions-of-windows-10?u=76281980&t=78)** Windows Defender and Windows FirewalL, all the same in all three additions and work basically the same.
>
> **[1:25](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-desktop-versions-of-windows-10?u=76281980&t=85)** Tablet mode is available in all three additions.
>
> **[1:29](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-desktop-versions-of-windows-10?u=76281980&t=89)** Although we call these the desktop additions all three would work perfectly fine on a tablet or on a PC that converts to a tablet.
>
> **[1:39](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-desktop-versions-of-windows-10?u=76281980&t=99)** The new voice activated Cortana feature is available in all additions as is the new Edge web browser.
>
> **[1:47](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-desktop-versions-of-windows-10?u=76281980&t=107)** Now we'll talk about some features that are different amongst the three versions.
>
> **[1:52](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-desktop-versions-of-windows-10?u=76281980&t=112)** There are dozens or maybe hundreds of different features that vary from version to version.
>
> **[1:58](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-desktop-versions-of-windows-10?u=76281980&t=118)** I'm just going to hit on a few of the most important ones.
>
> **[2:01](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-desktop-versions-of-windows-10?u=76281980&t=121)** The ability to join a domain is not available in the Home version.
>
> **[2:06](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-desktop-versions-of-windows-10?u=76281980&t=126)** It is available in Pro and Enterprise.
>
> **[2:09](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-desktop-versions-of-windows-10?u=76281980&t=129)** Domain join very important for larger businesses.
>
> **[2:14](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-desktop-versions-of-windows-10?u=76281980&t=134)** Remote desktop, also not available on the Home edition.
>
> **[2:19](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-desktop-versions-of-windows-10?u=76281980&t=139)** It is available on Pro and Enterprise.
>
> **[2:22](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-desktop-versions-of-windows-10?u=76281980&t=142)** By this we mean being able to connect to a PC that is running windows 10.
>
> **[2:30](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-desktop-versions-of-windows-10?u=76281980&t=150)** The PC receiving the connection will need to be either Pro or Enterprise.
>
> **[2:35](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-desktop-versions-of-windows-10?u=76281980&t=155)** You can load the remote desktop client on Home edition and connect to a remote PC but to receive connections, you'll need to be running Pro or Enterprise .
>
> **[2:47](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-desktop-versions-of-windows-10?u=76281980&t=167)** The BitLocker hard drive encryption again also available on Pro and Enterprise.
>
> **[2:54](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-desktop-versions-of-windows-10?u=76281980&t=174)** And the DirectAccess feature that functions similar to a VPN allowing users to make secure remote connections to a network that is only available on the Enterprise edition.
>
> **[3:08](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-desktop-versions-of-windows-10?u=76281980&t=188)** So if you are interested in a specific feature of windows 10, be sure and do a little research to make sure that feature is included in the version before you purchase it.
>
> **[3:20](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-desktop-versions-of-windows-10?u=76281980&t=200)** The Microsoft website is usually the best place to get that documentation.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (1), in other words (1)
> **Code Keywords:** let (1)
> **Env Vars:** vpn (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Understanding Windows 10 features requiring specialized hardware
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-administration-3/understanding-windows-10-features-requiring-specialized-hardware?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-administration-3/understanding-windows-10-features-requiring-specialized-hardware?u=76281980&t=0)** - [Instructor] Now let's talk about the mobile editions of Windows 10.
>
> **[0:05](https://www.linkedin.com/learning/windows-10-administration-3/understanding-windows-10-features-requiring-specialized-hardware?u=76281980&t=5)** Windows 10 is available in two mobile editions, one is just called Mobile, the other is called Mobile Enterprise.
>
> **[0:14](https://www.linkedin.com/learning/windows-10-administration-3/understanding-windows-10-features-requiring-specialized-hardware?u=76281980&t=14)** Currently, there's not too great of a difference between Mobile and Mobile Enterprise.
>
> **[0:19](https://www.linkedin.com/learning/windows-10-administration-3/understanding-windows-10-features-requiring-specialized-hardware?u=76281980&t=19)** On both of them, applications will update automatically, but as far as updating the operating system, it is a manual process in Windows Mobile, and it is an automatic process in Windows Mobile Enterprise.
>
> **[0:35](https://www.linkedin.com/learning/windows-10-administration-3/understanding-windows-10-features-requiring-specialized-hardware?u=76281980&t=35)** Microsoft has promised that security updates will be available quicker for Mobile Enterprise.
>
> **[0:41](https://www.linkedin.com/learning/windows-10-administration-3/understanding-windows-10-features-requiring-specialized-hardware?u=76281980&t=41)** And, again, those security updates would be automatically installed.
>
> **[0:46](https://www.linkedin.com/learning/windows-10-administration-3/understanding-windows-10-features-requiring-specialized-hardware?u=76281980&t=46)** The Microsoft documentation also mentions a different mindset between the two versions.
>
> **[0:52](https://www.linkedin.com/learning/windows-10-administration-3/understanding-windows-10-features-requiring-specialized-hardware?u=76281980&t=52)** For the most part, Mobile is meant to run phones.
>
> **[0:55](https://www.linkedin.com/learning/windows-10-administration-3/understanding-windows-10-features-requiring-specialized-hardware?u=76281980&t=55)** If you've bought a phone recently that contains Windows 10, it most likely is the Mobile version.
>
> **[1:02](https://www.linkedin.com/learning/windows-10-administration-3/understanding-windows-10-features-requiring-specialized-hardware?u=76281980&t=62)** Mobile Enterprise is designed to do something a little different than just phones.
>
> **[1:08](https://www.linkedin.com/learning/windows-10-administration-3/understanding-windows-10-features-requiring-specialized-hardware?u=76281980&t=68)** Some examples Microsoft has given, they are hoping Mobile Enterprise does well as the operating system for retail point of sale, handheld terminals and industrial robotics.
>
> **[1:22](https://www.linkedin.com/learning/windows-10-administration-3/understanding-windows-10-features-requiring-specialized-hardware?u=76281980&t=82)** Obviously we've seen the iPhone and iPad do well as point of sale devices or handheld terminals.
>
> **[1:30](https://www.linkedin.com/learning/windows-10-administration-3/understanding-windows-10-features-requiring-specialized-hardware?u=76281980&t=90)** And Microsoft is hoping that their new Windows 10 can take over some of that market share.

> [!info]- Semantic Content
>
> **Definitions:** is called (1), is a  (1), is an  (1)
> **Code Identifiers:** iphone (1), ipad (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)


### 2. Configuring Windows 10

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Overview of the settings interface
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-the-settings-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-the-settings-interface?u=76281980&t=0)** - [Instructor] In this section, we're going to talk about settings in Windows 10.
>
> **[0:04](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-the-settings-interface?u=76281980&t=4)** So off the Start Menu, I'll click on the gear icon and that will take me to Windows Settings.
>
> **[0:12](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-the-settings-interface?u=76281980&t=12)** In here I can administer a wide variety of items dealing with the configuration of my PC.
>
> **[0:18](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-the-settings-interface?u=76281980&t=18)** Although the interface is different, the functionality is very similar to control panels.
>
> **[0:24](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-the-settings-interface?u=76281980&t=24)** Remember we had control panels and Windows 7 and Windows 8.
>
> **[0:28](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-the-settings-interface?u=76281980&t=28)** And actually those control panels still exist in Windows 10.
>
> **[0:31](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-the-settings-interface?u=76281980&t=31)** Here in the search box, if I type in control panel, I will be given an option to go to Control Panels, and that will take me to something that looks almost just like Windows 7 and Windows 8.
>
> **[0:45](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-the-settings-interface?u=76281980&t=45)** But in Windows 10, we prefer to use the Settings area.
>
> **[0:48](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-the-settings-interface?u=76281980&t=48)** It has a few additional features and according to Microsoft is easier to use.
>
> **[0:54](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-the-settings-interface?u=76281980&t=54)** So each of these top level items, if I click on one, for example, System, it'll take me to an interface that provides more detail.
>
> **[1:03](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-the-settings-interface?u=76281980&t=63)** Most of the interfaces are very similar, with a left-hand menu that allows me to select sub-categories and a right-hand menu with a little description of what this area does, also some help links that'll usually link you to internet websites and also some options to give feedback.
>
> **[1:25](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-the-settings-interface?u=76281980&t=85)** So again, a typical Microsoft interface, menus on the left, extra information on the right, and in the middle is where you actually configure things.
>
> **[1:35](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-the-settings-interface?u=76281980&t=95)** Something you may not notice at first, in the very upper left-hand corner, there is a back button and that will take me up one level to whatever previous menu I was on.
>
> **[1:47](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-the-settings-interface?u=76281980&t=107)** Many of these control panels are either self-explanatory or you can figure them out with a little exploring, but some of them we're going to be going through in the upcoming sections.
>
> **[1:57](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-the-settings-interface?u=76281980&t=117)** Specifically in the upcoming sections, I'll be looking at some areas of Windows Settings that do some interesting things, and really throughout this course, we'll be going back and forth with the Windows Settings options.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (3), self (1)
> **UI Navigation:** click on (2), go to (1)
> **Analogies:** similar to (1), just like (1), for example (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Administering multitasking
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=0)** - [Instructor] Now I'd like to talk about multitasking and working with multiple desktops.
>
> **[0:06](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=6)** So in the Start menu, I'll click on the Settings and that'll take me to Windows Settings.
>
> **[0:13](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=13)** I'll look at the System area and in the left-hand menu, I'm going to click on Multitasking.
>
> **[0:19](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=19)** The top half has some options on how we work with multiple windows.
>
> **[0:24](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=24)** It allows us to snap our windows.
>
> **[0:27](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=27)** And by snap I mean that if we drag a window to one side either the left side of the right side of our desktop, it will automatically resize, and take up exactly half of the available desktop.
>
> **[0:41](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=41)** So I'll do that now.
>
> **[0:42](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=42)** I'll turn this window off of maximum size and I'll drag it all the way to the right.
>
> **[0:49](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=49)** And when I release the mouse button now this window takes up exactly half of the space.
>
> **[0:56](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=56)** This tends to be very useful when you have two windows going at the same time.
>
> **[1:01](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=61)** So I'll just open another window and snap it to the other side.
>
> **[1:06](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=66)** I use this often when I am comparing two documents.
>
> **[1:09](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=69)** I open up the two documents side-by-side.
>
> **[1:12](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=72)** Less commonly used is you can drag a window to one of the corners of the screen, and then it will be docked in that corner and take up one fourth of the screen.
>
> **[1:23](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=83)** So I'll go ahead and drag this one to the upper right corner, and now it takes up a fourth of my screen.
>
> **[1:30](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=90)** I'll drag this one to the lower right, and it takes up a fourth of my screen.
>
> **[1:35](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=95)** And I could continue to open windows and drag them, and each one would take up exactly one fourth of the screen.
>
> **[1:43](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=103)** That is called snapping.
>
> **[1:46](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=106)** And it is administered under the Multitasking area of the Systems settings.
>
> **[1:52](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=112)** Below that at the bottom, we have some options for Virtual desktop, and we can choose to see items on the taskbar for Only the desktop I'm using or for All desktops, and same thing with all tab.
>
> **[2:07](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=127)** We can choose to only cycle through windows or the desktop I'm currently using or on all desktops.
>
> **[2:14](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=134)** Which brings up the question of, how do we get multiple desktops.
>
> **[2:18](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=138)** This is a feature built into Windows 10.
>
> **[2:20](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=140)** There's an icon for it by default on the taskbar.
>
> **[2:24](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=144)** For me, it's the third icon.
>
> **[2:26](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=146)** So I have the start menu and then Cortana, and then an icon that looks like two squares in a line.
>
> **[2:35](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=155)** When I click on that icon, I'm shown the current desktop I have.
>
> **[2:40](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=160)** And at the very top, I have the option to add a new desktop.
>
> **[2:43](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=163)** And it's going to call that desktop two.
>
> **[2:46](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=166)** So I'll click on that.
>
> **[2:47](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=167)** We see we got a blank desktop and let me open a window in it.
>
> **[2:54](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=174)** And then if I go back to that same icon, now we can see at the top, I have desktop one and desktop two.
>
> **[3:01](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=181)** I can choose either one of those or I can add yet another desktop, and I'll go to desktop three and open up a different window.
>
> **[3:14](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=194)** So I like this.
>
> **[3:15](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=195)** I like having multiple desktops open during the day.
>
> **[3:17](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=197)** I usually have one desktop that just has my email open full screen 'cause I want to check my email throughout the day.
>
> **[3:24](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=204)** And then I'll have another desktop that has the documents that I'm currently working on.
>
> **[3:28](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=208)** And being so many professionals are asked to multitask these days, you could have a third desktop that has documents related to something else that you're working on, and then you can just switch quickly back and forth between the different desktops.
>
> **[3:44](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=224)** Some people like it, some people don't.
>
> **[3:46](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=226)** If you've never worked with multiple desktops before, I would encourage you to try it for a few days and see if you like it, because you might find it really helps with your productivity.
>
> **[3:56](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=236)** And it's sort of a grouping.
>
> **[3:58](https://www.linkedin.com/learning/windows-10-administration-3/administering-multitasking?u=76281980&t=238)** You can group all of your windows together when you are working on a few distinct task.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4), go to (1)
> **CLI Commands:** snap (3), find (1)
> **Code Keywords:** continue (1), let (1), this. (1), switch (1)
> **Definitions:** is called (1), is a  (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)


### 3. Drivers and Notifications

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Installing and updating drivers
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-administration-3/installing-and-updating-drivers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-administration-3/installing-and-updating-drivers?u=76281980&t=0)** - [Instructor] Now I'd like to talk a little bit about working with drivers in Windows 10.
>
> **[0:05](https://www.linkedin.com/learning/windows-10-administration-3/installing-and-updating-drivers?u=76281980&t=5)** So, off the Start menu, I'd go to the gear icon for Settings, and in the search box labeled Find a setting, I'll search for drivers.
>
> **[0:18](https://www.linkedin.com/learning/windows-10-administration-3/installing-and-updating-drivers?u=76281980&t=18)** One of the options that comes up is Device Manager.
>
> **[0:22](https://www.linkedin.com/learning/windows-10-administration-3/installing-and-updating-drivers?u=76281980&t=22)** I'll click on that.
>
> **[0:23](https://www.linkedin.com/learning/windows-10-administration-3/installing-and-updating-drivers?u=76281980&t=23)** And what we get is a Device Manager interface that's very similar to what we had in Windows 7 and Windows 8.
>
> **[0:31](https://www.linkedin.com/learning/windows-10-administration-3/installing-and-updating-drivers?u=76281980&t=31)** I can open any one of these categories in the tree view, highlight a particular device, right click on it, and I'll have the option to Update driver.
>
> **[0:43](https://www.linkedin.com/learning/windows-10-administration-3/installing-and-updating-drivers?u=76281980&t=43)** Now some updating of drivers will happen automatically through Windows updates, and you can just let that run in the background, and not have to worry about it.
>
> **[0:51](https://www.linkedin.com/learning/windows-10-administration-3/installing-and-updating-drivers?u=76281980&t=51)** But sometimes we need a little extra control over individual drivers, and a few pieces of hardware may not update their drivers automatically through Windows update.
>
> **[1:02](https://www.linkedin.com/learning/windows-10-administration-3/installing-and-updating-drivers?u=76281980&t=62)** So we can do that through this interface.
>
> **[1:05](https://www.linkedin.com/learning/windows-10-administration-3/installing-and-updating-drivers?u=76281980&t=65)** Typically you would start with the top option, search automatically for drivers, which would allow your PC to go out to the internet and try and find the appropriate driver.
>
> **[1:15](https://www.linkedin.com/learning/windows-10-administration-3/installing-and-updating-drivers?u=76281980&t=75)** If that fails, you'd probably want to come to Browse my computer for drivers.
>
> **[1:20](https://www.linkedin.com/learning/windows-10-administration-3/installing-and-updating-drivers?u=76281980&t=80)** So this would be a driver that you had manually downloaded, probably from the manufacturers website.
>
> **[1:26](https://www.linkedin.com/learning/windows-10-administration-3/installing-and-updating-drivers?u=76281980&t=86)** Download it and store on your computer, and then you can browse for that driver, find the appropriate driver and allow Windows to update.
>
> **[1:35](https://www.linkedin.com/learning/windows-10-administration-3/installing-and-updating-drivers?u=76281980&t=95)** I'm going to hit Cancel here, and again look at this right click menu, where we also have options to Disable the device or Uninstall the device.
>
> **[1:46](https://www.linkedin.com/learning/windows-10-administration-3/installing-and-updating-drivers?u=76281980&t=106)** These are options that we rarely use, but they are in fact quite useful in very specific situations, where we're having trouble with a particular hardware device, we can come in here and disable or uninstall the device.
>
> **[2:00](https://www.linkedin.com/learning/windows-10-administration-3/installing-and-updating-drivers?u=76281980&t=120)** So again, driver updates typically handled automatically in the background, but if you need some manual control over it, Device Manager is the best place to go.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3)
> **Code Keywords:** interface (2), let (1)
> **UI Navigation:** click on (2), go to (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Working with notifications and actions
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-administration-3/working-with-notifications-and-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-administration-3/working-with-notifications-and-actions?u=76281980&t=0)** - [Instructor] Now I'd like to talk about notifications and actions, so off the start menu, I'll go to settings, which will take me to Windows settings in there I'll select system and in there I'll select notifications and actions.
>
> **[0:17](https://www.linkedin.com/learning/windows-10-administration-3/working-with-notifications-and-actions?u=76281980&t=17)** So in the top half of this interface, we see quick actions and I have the option to edit quick actions.
>
> **[0:24](https://www.linkedin.com/learning/windows-10-administration-3/working-with-notifications-and-actions?u=76281980&t=24)** I'm going to click on that, what comes up on the right-hand side for me is about 10 icons.
>
> **[0:31](https://www.linkedin.com/learning/windows-10-administration-3/working-with-notifications-and-actions?u=76281980&t=31)** And I can rearrange these icons by dragging them to a different location.
>
> **[0:37](https://www.linkedin.com/learning/windows-10-administration-3/working-with-notifications-and-actions?u=76281980&t=37)** I can also remove icons by clicking on the push pin button and I can also add icons by going to the plus sign at the bottom.
>
> **[0:50](https://www.linkedin.com/learning/windows-10-administration-3/working-with-notifications-and-actions?u=76281980&t=50)** Once I have all this set up, I'll click done and then now I would like to look at the quick action center.
>
> **[0:59](https://www.linkedin.com/learning/windows-10-administration-3/working-with-notifications-and-actions?u=76281980&t=59)** I close out of the settings area and to get to the quick action center it's on my task bar is on the lower right.
>
> **[1:08](https://www.linkedin.com/learning/windows-10-administration-3/working-with-notifications-and-actions?u=76281980&t=68)** That's the default location, it's an icon that looks a little bit like a dialog box.
>
> **[1:13](https://www.linkedin.com/learning/windows-10-administration-3/working-with-notifications-and-actions?u=76281980&t=73)** I'll click on that once and we see the exact same icons as I just configured.
>
> **[1:19](https://www.linkedin.com/learning/windows-10-administration-3/working-with-notifications-and-actions?u=76281980&t=79)** So as I drag these to new locations, it updated my quick action center.
>
> **[1:26](https://www.linkedin.com/learning/windows-10-administration-3/working-with-notifications-and-actions?u=76281980&t=86)** These quick actions are designed to be some fairly simple things we can administer and things that we administer often.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-administration-3/working-with-notifications-and-actions?u=76281980&t=94)** So something like location maybe sometimes you want to share your location and sometimes you don't right here off the quick action.
>
> **[1:42](https://www.linkedin.com/learning/windows-10-administration-3/working-with-notifications-and-actions?u=76281980&t=102)** I can click once the icon turns blue and says that yes, I am sharing my location with websites and applications or I can click it again and turn it off and now my PC is not sharing my location.
>
> **[1:57](https://www.linkedin.com/learning/windows-10-administration-3/working-with-notifications-and-actions?u=76281980&t=117)** So some very simple things we can administer quickly, some of these are just toggle buttons that we turn on and off, others may open a new interface.
>
> **[2:07](https://www.linkedin.com/learning/windows-10-administration-3/working-with-notifications-and-actions?u=76281980&t=127)** So for example, if we click on VPN, it'll take me to the VPN area of the settings menu.
>
> **[2:14](https://www.linkedin.com/learning/windows-10-administration-3/working-with-notifications-and-actions?u=76281980&t=134)** and that allows me to configure my VPN.
>
> **[2:17](https://www.linkedin.com/learning/windows-10-administration-3/working-with-notifications-and-actions?u=76281980&t=137)** So if you connect or disconnect from VPN often, there's a quick way to do it.
>
> **[2:22](https://www.linkedin.com/learning/windows-10-administration-3/working-with-notifications-and-actions?u=76281980&t=142)** Also, one of our quick actions is the settings menu itself, so by clicking on all settings, it'll take me to the Window settings area the exact same place that I have been getting to through the start menu.
>
> **[2:36](https://www.linkedin.com/learning/windows-10-administration-3/working-with-notifications-and-actions?u=76281980&t=156)** So again, you can customize this quick actions area and have the icons that you use often and maybe remove some of the icons that you don't want to use often.
>
> **[2:47](https://www.linkedin.com/learning/windows-10-administration-3/working-with-notifications-and-actions?u=76281980&t=167)** So again, going back into notification and actions we already talked about the quick actions part on top.
>
> **[2:53](https://www.linkedin.com/learning/windows-10-administration-3/working-with-notifications-and-actions?u=76281980&t=173)** Now the lower half of this interface is all about notifications.
>
> **[2:58](https://www.linkedin.com/learning/windows-10-administration-3/working-with-notifications-and-actions?u=76281980&t=178)** And most of these are just yes or no we want to see a notification or we don't want to see a notification on certain events.
>
> **[3:05](https://www.linkedin.com/learning/windows-10-administration-3/working-with-notifications-and-actions?u=76281980&t=185)** So for example, incoming voiceover IP calls, we can check that or uncheck that if we'd like to be notified, we can check or uncheck if we want notifications to play sounds.
>
> **[3:17](https://www.linkedin.com/learning/windows-10-administration-3/working-with-notifications-and-actions?u=76281980&t=197)** Again all of these are yes/no.
>
> **[3:20](https://www.linkedin.com/learning/windows-10-administration-3/working-with-notifications-and-actions?u=76281980&t=200)** At the very bottom, you'll probably see a list of applications.
>
> **[3:23](https://www.linkedin.com/learning/windows-10-administration-3/working-with-notifications-and-actions?u=76281980&t=203)** And your list of applications is probably a little different from mine depending on which applications you have used recently.
>
> **[3:31](https://www.linkedin.com/learning/windows-10-administration-3/working-with-notifications-and-actions?u=76281980&t=211)** But it's the same thing we can turn on or turn off getting notifications from these individual applications.
>
> **[3:37](https://www.linkedin.com/learning/windows-10-administration-3/working-with-notifications-and-actions?u=76281980&t=217)** So some people like a lot of notifications, some people find them distracting.
>
> **[3:42](https://www.linkedin.com/learning/windows-10-administration-3/working-with-notifications-and-actions?u=76281980&t=222)** It's really up to you, whether you'd like to turn these on or off.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (3), go to (1), toggle (1)
> **Env Vars:** vpn (4)
> **Code Keywords:** interface (3)
> **Analogies:** for example (2)
> **Prerequisites:** set up (1), configure (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


### 4. Windows Group Policy

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Overview of Group Policy
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-group-policy-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-group-policy-2?u=76281980&t=0)** - [Instructor] In this section, we're going to talk about using Group Policy to administer Windows 10.
>
> **[0:06](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-group-policy-2?u=76281980&t=6)** Group Policy is a technology that allows us to configure thousands of user and computer settings.
>
> **[0:13](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-group-policy-2?u=76281980&t=13)** Group Policy can be applied at the domain level or a Local Group Policy.
>
> **[0:19](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-group-policy-2?u=76281980&t=19)** If you're running on a domain, that's probably the preferred place to do Group Policy.
>
> **[0:24](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-group-policy-2?u=76281980&t=24)** If you have one or more Windows 10 computers not connected to a domain, then you can use Local Group Policy to accomplish largely the same thing.
>
> **[0:35](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-group-policy-2?u=76281980&t=35)** Be aware that domain settings can override local settings.
>
> **[0:39](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-group-policy-2?u=76281980&t=39)** So if you created a policy at the domain level that had a setting, and then you created a policy at the local level that had the opposite setting, the domain setting would take precedence.
>
> **[0:52](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-group-policy-2?u=76281980&t=52)** So typically we don't manipulate the same setting at both the domain level and the local level.
>
> **[0:58](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-group-policy-2?u=76281980&t=58)** If you want to make a setting, just do it one place or the other, not both.
>
> **[1:03](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-group-policy-2?u=76281980&t=63)** Windows 10 includes by default, a tool called Local Group Policy Editor.
>
> **[1:09](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-group-policy-2?u=76281980&t=69)** Previous versions of Windows had this tool available as a download, or you had to jump through some hoops to get the tool.
>
> **[1:17](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-group-policy-2?u=76281980&t=77)** Now it is included as part of the base installation of the operating system.
>
> **[1:22](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-group-policy-2?u=76281980&t=82)** The tool has two main sections, Computer Configuration and User Configuration.
>
> **[1:28](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-group-policy-2?u=76281980&t=88)** After you change settings, in order to apply the settings, you typically need to do one of two things.
>
> **[1:36](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-group-policy-2?u=76281980&t=96)** You can go to a Command Prompt and type in GPupdate.
>
> **[1:41](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-group-policy-2?u=76281980&t=101)** That's a command that will update the Local Group Policy and the Domain Group Policy on most settings.
>
> **[1:50](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-group-policy-2?u=76281980&t=110)** However, there are some settings that require a reboot.
>
> **[1:54](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-group-policy-2?u=76281980&t=114)** And any time you reboot by default, it does update both Local Group Policy and Domain Group Policy.

> [!info]- Semantic Content
>
> **Code Keywords:** default, (2), override (1), require (1)
> **CLI Commands:** make (1)
> **Tools:** command prompt (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Warnings:** be aware (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Working with the Local Group Policy
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-administration-3/working-with-the-local-group-policy-20224507?u=76281980)

#### Troubleshooting Group Policy
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-group-policy-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-group-policy-2?u=76281980&t=0)** - In this section, we're going to be talking about troubleshooting group policy.
>
> **[0:05](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-group-policy-2?u=76281980&t=5)** So if group policy is not applying the way you think it should, probably the first thing you should do is reboot, because some settings are only applied, when the machine first boots up.
>
> **[0:17](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-group-policy-2?u=76281980&t=17)** But after a reboot, if you're still not getting what you expected, Microsoft has a command line tool, that will help us see which policies are being applied, and the successes and failures of those settings.
>
> **[0:30](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-group-policy-2?u=76281980&t=30)** So, I open a command prompt by going to the start menu, typing in CMD, and that'll give me the option to go to a command prompt.
>
> **[0:41](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-group-policy-2?u=76281980&t=41)** And then I'm going to run a tool called gpresult.
>
> **[0:46](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-group-policy-2?u=76281980&t=46)** After that you want to put a slash H, telling us that we would like the report in HTML format, and I'll need to include a file name also, and this will be the file name used for the report.
>
> **[0:59](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-group-policy-2?u=76281980&t=59)** So I'll call mine, gpesult.HTML.
>
> **[1:05](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-group-policy-2?u=76281980&t=65)** And then I press enter and fairly quickly you should get back to a command prompt.
>
> **[1:11](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-group-policy-2?u=76281980&t=71)** At that point you can type in DIR and see that the file was in fact created, gpresult.HTML.
>
> **[1:21](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-group-policy-2?u=76281980&t=81)** And then we can just type in the name of that file, and it will open in your default web browser.
>
> **[1:27](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-group-policy-2?u=76281980&t=87)** So this report gives me a lot of information on the GPOs that were processed.
>
> **[1:31](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-group-policy-2?u=76281980&t=91)** If I scroll down, I can see applied GPOs and your results will probably look a little different than mine, because I'm on a domain, that has two GPOs applied to this machine and then also the local group policies, so in this one report we get both local group policy and domain group policy.
>
> **[1:52](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-group-policy-2?u=76281980&t=112)** Almost all of these lines you can click on them and it'll open up and give you additional information, and this tells me that it was a local group policy from the registry, and disabled equals none meaning it was not disabled.
>
> **[2:09](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-group-policy-2?u=76281980&t=129)** If we scroll back up, we can look at some specific settings.
>
> **[2:13](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-group-policy-2?u=76281980&t=133)** So under administrative templates, I'll click on that, and it'll show me that I have settings in three different categories, again yours will probably be a little different, mine says control panel display, control panel personalization, start menu and task bar, so I can click on any of those and it shows me the specific items I have set under those.
>
> **[2:35](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-group-policy-2?u=76281980&t=155)** It shows that remove the clock from the system notification area was enabled, based on a GPO with this name.
>
> **[2:43](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-group-policy-2?u=76281980&t=163)** That category is called winning GPO, which is a little bit unusual terminology, I mean I didn't know we were competing, like for first and second place and we have a winner, No, that's a joke.
>
> **[2:54](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-group-policy-2?u=76281980&t=174)** What they mean by that is that is if multiple GPOs try to set the same setting, maybe we had one GPO you've enabled something, and in another GPO, you've disabled that exact same thing, the machine has to decide, which GPO it's going to listen to and that one is called the winning GPO.
>
> **[3:15](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-group-policy-2?u=76281980&t=195)** Now in general you should probably avoid trying to set the exact same thing in two different policies but if you do, then one of the policies will have to be declared the winner and then the setting from that policy will actually be applied to your computer, so sometimes in a troubleshooting scenario, we see that our machine is not behaving like we thought it would because we accidentally set the same thing in two different GPOs, and gave them different settings, enabled in one place, disabled in the other place.
>
> **[3:46](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-group-policy-2?u=76281980&t=226)** As far as the machine determining the winning GPO, the domain will always win over the local, so if you have something set in local but your network administrator has a different setting in a domain GPO, the domain will be the winning GPO and your local setting will not apply.

> [!info]- Semantic Content
>
> **Env Vars:** gpo (9), html (3), cmd (1), dir (1)
> **UI Navigation:** click on (3), go to (1), scroll down (1)
> **Tools:** command prompt (3), command line (1)
> **Definitions:** is called (2), is a  (1)
> **File Paths:** gpesult.html (1), gpresult.html (1)
> **Speakers:** - in (1)


### 5. Windows Authentication

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Adding domain users to a Windows 10 PC
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-administration-3/adding-domain-users-to-a-windows-10-pc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-administration-3/adding-domain-users-to-a-windows-10-pc?u=76281980&t=0)** - [Instructor] In this section, we're going to talk about adding domain users to our windows 10 PC.
>
> **[0:06](https://www.linkedin.com/learning/windows-10-administration-3/adding-domain-users-to-a-windows-10-pc?u=76281980&t=6)** So at the Start menu, I'll go to Settings.
>
> **[0:10](https://www.linkedin.com/learning/windows-10-administration-3/adding-domain-users-to-a-windows-10-pc?u=76281980&t=10)** In the Settings area, I'll go to Accounts.
>
> **[0:13](https://www.linkedin.com/learning/windows-10-administration-3/adding-domain-users-to-a-windows-10-pc?u=76281980&t=13)** And on the left, I'll click on Other users.
>
> **[0:17](https://www.linkedin.com/learning/windows-10-administration-3/adding-domain-users-to-a-windows-10-pc?u=76281980&t=17)** So here in other users, it says I can add a work or school user.
>
> **[0:21](https://www.linkedin.com/learning/windows-10-administration-3/adding-domain-users-to-a-windows-10-pc?u=76281980&t=21)** By work user, they mean a domain user.
>
> **[0:24](https://www.linkedin.com/learning/windows-10-administration-3/adding-domain-users-to-a-windows-10-pc?u=76281980&t=24)** So I'll click on the plus sign next to that and it gives me a very simple interface just asking me for the account name and asking me if I would like it to be a standard user or an administrator.
>
> **[0:37](https://www.linkedin.com/learning/windows-10-administration-3/adding-domain-users-to-a-windows-10-pc?u=76281980&t=37)** So I'll go ahead and add the login name of an account that I know exists on the domain.
>
> **[0:43](https://www.linkedin.com/learning/windows-10-administration-3/adding-domain-users-to-a-windows-10-pc?u=76281980&t=43)** I'll click Add, and there it shows me that the Martin account has been added as an administrator.
>
> **[0:49](https://www.linkedin.com/learning/windows-10-administration-3/adding-domain-users-to-a-windows-10-pc?u=76281980&t=49)** If I would like to add a group rather than an individual user, it's a very similar process.
>
> **[0:55](https://www.linkedin.com/learning/windows-10-administration-3/adding-domain-users-to-a-windows-10-pc?u=76281980&t=55)** I'll click on the plus sign again, and I'll type in the name of a group that I know exists on the domain, and I'll click Add.
>
> **[1:05](https://www.linkedin.com/learning/windows-10-administration-3/adding-domain-users-to-a-windows-10-pc?u=76281980&t=65)** Now the weird thing here is it didn't tell me success or failure.
>
> **[1:08](https://www.linkedin.com/learning/windows-10-administration-3/adding-domain-users-to-a-windows-10-pc?u=76281980&t=68)** There's nothing about this interface here that tells me that that add was successful or failed.
>
> **[1:15](https://www.linkedin.com/learning/windows-10-administration-3/adding-domain-users-to-a-windows-10-pc?u=76281980&t=75)** To see that, I'm going to have to go to a different control panel.
>
> **[1:18](https://www.linkedin.com/learning/windows-10-administration-3/adding-domain-users-to-a-windows-10-pc?u=76281980&t=78)** I'll go off the Start menu again, I'll type in group and that'll bring up Edit local users and groups.
>
> **[1:27](https://www.linkedin.com/learning/windows-10-administration-3/adding-domain-users-to-a-windows-10-pc?u=76281980&t=87)** I'll click on that.
>
> **[1:29](https://www.linkedin.com/learning/windows-10-administration-3/adding-domain-users-to-a-windows-10-pc?u=76281980&t=89)** In the Groups section on the left-hand side, I'll click on that and then go to Users, double click on Users.
>
> **[1:38](https://www.linkedin.com/learning/windows-10-administration-3/adding-domain-users-to-a-windows-10-pc?u=76281980&t=98)** And I see that the group DBA is, in fact, part of the Users group, so anyone who is in that domain group could log in to this particular Windows 10 PC.
>
> **[1:50](https://www.linkedin.com/learning/windows-10-administration-3/adding-domain-users-to-a-windows-10-pc?u=76281980&t=110)** I can also add and remove people here, add and remove either individuals or groups, and it's fairly easy to use.
>
> **[1:59](https://www.linkedin.com/learning/windows-10-administration-3/adding-domain-users-to-a-windows-10-pc?u=76281980&t=119)** So overall, in Windows 10, I like this interface a little better.
>
> **[2:04](https://www.linkedin.com/learning/windows-10-administration-3/adding-domain-users-to-a-windows-10-pc?u=76281980&t=124)** Again, the other interface was great for adding individual users, but it wasn't very full-featured when it came to adding groups.
>
> **[2:12](https://www.linkedin.com/learning/windows-10-administration-3/adding-domain-users-to-a-windows-10-pc?u=76281980&t=132)** I can do both from this interface, so this Edit local users and groups seems to be a slightly better interface.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (6), go to (4)
> **Code Keywords:** interface (6)
> **Env Vars:** dba (1)
> **Speakers:** - [instructor] (1)

#### Adding Microsoft accounts to a Windows 10 PC
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-administration-3/adding-microsoft-accounts-to-a-windows-10-pc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-administration-3/adding-microsoft-accounts-to-a-windows-10-pc?u=76281980&t=0)** - [Instructor] In the previous section, we looked at adding domain users to our Windows 10 PC, but if your PC is not part of a domain then instead you'll want to use Microsoft accounts.
>
> **[0:13](https://www.linkedin.com/learning/windows-10-administration-3/adding-microsoft-accounts-to-a-windows-10-pc?u=76281980&t=13)** So off the start menu, I'll go to settings and then I'll go to accounts.
>
> **[0:19](https://www.linkedin.com/learning/windows-10-administration-3/adding-microsoft-accounts-to-a-windows-10-pc?u=76281980&t=19)** And again, I'll go to other users.
>
> **[0:22](https://www.linkedin.com/learning/windows-10-administration-3/adding-microsoft-accounts-to-a-windows-10-pc?u=76281980&t=22)** For domain users, we had added a work or school user.
>
> **[0:26](https://www.linkedin.com/learning/windows-10-administration-3/adding-microsoft-accounts-to-a-windows-10-pc?u=76281980&t=26)** Now for a Microsoft account, we're going to go to the section labeled other users and click on the plus sign next to add someone else to this PC.
>
> **[0:36](https://www.linkedin.com/learning/windows-10-administration-3/adding-microsoft-accounts-to-a-windows-10-pc?u=76281980&t=36)** That's going to prompt me for the person's email or phone number, whichever credentials they use to log into their Microsoft account, and then I'll click next and that's all I have to do, I don't actually have to give the password right now because the password is controlled by Microsoft and this person will be prompted for their Microsoft account password when they try to log in.
>
> **[1:00](https://www.linkedin.com/learning/windows-10-administration-3/adding-microsoft-accounts-to-a-windows-10-pc?u=76281980&t=60)** So we can just click finish.
>
> **[1:03](https://www.linkedin.com/learning/windows-10-administration-3/adding-microsoft-accounts-to-a-windows-10-pc?u=76281980&t=63)** And then from that account, if I click on the account, I have the option to remove which is self-explanatory or change account type.
>
> **[1:11](https://www.linkedin.com/learning/windows-10-administration-3/adding-microsoft-accounts-to-a-windows-10-pc?u=76281980&t=71)** There's only two choices, standard user or administrator.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (4), click on (2)
> **Code Keywords:** self (1), type. (1)
> **Speakers:** - [instructor] (1)

#### Adding local accounts to a Windows 10 PC
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-administration-3/adding-local-accounts-to-a-windows-10-pc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-administration-3/adding-local-accounts-to-a-windows-10-pc?u=76281980&t=0)** - [Instructor] Now let's look at setting up a local account that's not a domain account and not a Microsoft account.
>
> **[0:07](https://www.linkedin.com/learning/windows-10-administration-3/adding-local-accounts-to-a-windows-10-pc?u=76281980&t=7)** This account will live only on this PC and somewhat uncommon that you would want to do this but if you have a machine that's not connected to a domain and not connected to the internet, you might need to do this.
>
> **[0:22](https://www.linkedin.com/learning/windows-10-administration-3/adding-local-accounts-to-a-windows-10-pc?u=76281980&t=22)** So off the Start menu, I'll go to Settings, Accounts, other user, I'll click on the plus sign next to add someone else to this PC.
>
> **[0:36](https://www.linkedin.com/learning/windows-10-administration-3/adding-local-accounts-to-a-windows-10-pc?u=76281980&t=36)** And again I'll be given the interface where it would like me to type in the email address of the Microsoft accounts.
>
> **[0:43](https://www.linkedin.com/learning/windows-10-administration-3/adding-local-accounts-to-a-windows-10-pc?u=76281980&t=43)** But at the bottom, it does give me the option I don't have this person's sign in information.
>
> **[0:49](https://www.linkedin.com/learning/windows-10-administration-3/adding-local-accounts-to-a-windows-10-pc?u=76281980&t=49)** If I click on that, the first thing I get is an interface where it would like me to create an account.
>
> **[0:55](https://www.linkedin.com/learning/windows-10-administration-3/adding-local-accounts-to-a-windows-10-pc?u=76281980&t=55)** So if you don't have a Microsoft account and would like to create one you can do that from this interface, but that's not the goal of this demo.
>
> **[1:03](https://www.linkedin.com/learning/windows-10-administration-3/adding-local-accounts-to-a-windows-10-pc?u=76281980&t=63)** What we were trying to do is exactly what is the very bottom option, add a user without a Microsoft account.
>
> **[1:10](https://www.linkedin.com/learning/windows-10-administration-3/adding-local-accounts-to-a-windows-10-pc?u=76281980&t=70)** It'll prompt me for a username and password.
>
> **[1:14](https://www.linkedin.com/learning/windows-10-administration-3/adding-local-accounts-to-a-windows-10-pc?u=76281980&t=74)** So I'll type that in, and then it prompts me for three security questions and answers that will be used if someone forgets their password.
>
> **[1:25](https://www.linkedin.com/learning/windows-10-administration-3/adding-local-accounts-to-a-windows-10-pc?u=76281980&t=85)** And I'll just type some random information in here, don't want to give away my information to everybody.
>
> **[1:32](https://www.linkedin.com/learning/windows-10-administration-3/adding-local-accounts-to-a-windows-10-pc?u=76281980&t=92)** I'll click next, and now there is a new account here and again the typical options I can change the account type to either standard user or administrator.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (3), let (1), this. (1)
> **UI Navigation:** click on (2), go to (1)
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### Setting up assigned access
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-administration-3/setting-up-assigned-access?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-administration-3/setting-up-assigned-access?u=76281980&t=0)** - [Instructor] So in this section, I'd like to talk about one more thing about accounts.
>
> **[0:05](https://www.linkedin.com/learning/windows-10-administration-3/setting-up-assigned-access?u=76281980&t=5)** So after start menu, I'll go to Settings, Accounts and Other users.
>
> **[0:14](https://www.linkedin.com/learning/windows-10-administration-3/setting-up-assigned-access?u=76281980&t=14)** In Previous sections, we've talked about the work and school users, we've talked about other users, so that just leaves the bottom part, set up a kiosk.
>
> **[0:24](https://www.linkedin.com/learning/windows-10-administration-3/setting-up-assigned-access?u=76281980&t=24)** And on the set up a kiosk, the only option we have is Assigned access, assigned access is a tool that allows us to limit a user to one particular app.
>
> **[0:35](https://www.linkedin.com/learning/windows-10-administration-3/setting-up-assigned-access?u=76281980&t=35)** If you have your windows 10 PC set up as a kiosk in a public area, you probably don't want people going to every app on the PC.
>
> **[0:45](https://www.linkedin.com/learning/windows-10-administration-3/setting-up-assigned-access?u=76281980&t=45)** You might want to limit them to only one app.
>
> **[0:48](https://www.linkedin.com/learning/windows-10-administration-3/setting-up-assigned-access?u=76281980&t=48)** So we can do that by clicking on assigned access.
>
> **[0:53](https://www.linkedin.com/learning/windows-10-administration-3/setting-up-assigned-access?u=76281980&t=53)** And then I'll click on the Get started button.
>
> **[0:56](https://www.linkedin.com/learning/windows-10-administration-3/setting-up-assigned-access?u=76281980&t=56)** It'll ask me to either create a new account or use an existing account, I'm going to choose an existing account, and notice the only option we got is the local account.
>
> **[1:08](https://www.linkedin.com/learning/windows-10-administration-3/setting-up-assigned-access?u=76281980&t=68)** So even though I have added domain users and Microsoft accounts to this windows 10 PC for this assigned access feature, we can only use local accounts.
>
> **[1:20](https://www.linkedin.com/learning/windows-10-administration-3/setting-up-assigned-access?u=76281980&t=80)** So I'll select one of those, hit next.
>
> **[1:22](https://www.linkedin.com/learning/windows-10-administration-3/setting-up-assigned-access?u=76281980&t=82)** And then it's going to say, which app would I like them to use?
>
> **[1:26](https://www.linkedin.com/learning/windows-10-administration-3/setting-up-assigned-access?u=76281980&t=86)** Most likely it would be a web browser that you would use, but as you see, you can select lots of different apps, So I'll select Microsoft edge, and then hit next.
>
> **[1:39](https://www.linkedin.com/learning/windows-10-administration-3/setting-up-assigned-access?u=76281980&t=99)** It gives us an option about what we'd like to be a digital sign or a public browser.
>
> **[1:44](https://www.linkedin.com/learning/windows-10-administration-3/setting-up-assigned-access?u=76281980&t=104)** I'm going to stick with the default as digital sign, and then it's asking me for the URL.
>
> **[1:51](https://www.linkedin.com/learning/windows-10-administration-3/setting-up-assigned-access?u=76281980&t=111)** You would probably put it in your company's URL here, so this would allow people to browse your website from a public kiosk.
>
> **[2:00](https://www.linkedin.com/learning/windows-10-administration-3/setting-up-assigned-access?u=76281980&t=120)** Click next again.
>
> **[2:01](https://www.linkedin.com/learning/windows-10-administration-3/setting-up-assigned-access?u=76281980&t=121)** And you're done.
>
> **[2:03](https://www.linkedin.com/learning/windows-10-administration-3/setting-up-assigned-access?u=76281980&t=123)** Some of these settings will not take place until you restart or reboot.
>
> **[2:08](https://www.linkedin.com/learning/windows-10-administration-3/setting-up-assigned-access?u=76281980&t=128)** So it does give me that note here at the very bottom, we have to restart the device for this to take effect.

> [!info]- Semantic Content
>
> **Code Keywords:** public (3)
> **Prerequisites:** set up (3)
> **Env Vars:** url (2)
> **UI Navigation:** go to (1), click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 6. Windows Encryption

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Administering BitLocker
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=0)** - [Instructor] In this section, I'd like to look at using BitLocker to encrypt entire hard drives in Windows 10.
>
> **[0:08](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=8)** So off the Start Menu, I'll just type in BitLocker and that'll give me the option for the control panel Manage BitLocker.
>
> **[0:17](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=17)** I'll click on that.
>
> **[0:19](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=19)** And the first thing we see is my C drive, which does not support BitLocker.
>
> **[0:23](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=23)** So if I click on the item to turn on BitLocker, I will receive an error saying this device can't use a trusted platform module.
>
> **[0:32](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=32)** Trusted platform module or TPM is a technology that allows us to store the encryption key someplace other than the drive that is being encrypted, and storing the encryption key separately increases the overall security.
>
> **[0:48](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=48)** So I'll hit cancel here and I'll open up the details of my E drive, which does support TPM.
>
> **[0:56](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=56)** So I should be able to enable BitLocker by clicking turn on BitLocker.
>
> **[1:01](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=61)** First thing it'll ask me if I want to use a password or a smart card, I'm going to go with password and then type in the same password twice, click next.
>
> **[1:12](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=72)** And I'll ask where I would like to store my recovery key.
>
> **[1:15](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=75)** Again, in the real world for maximum security, you would want to store this someplace other than on your computer.
>
> **[1:21](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=81)** So a USB flash drive is a good idea, but just for this demonstration, I am going to store it to my computer.
>
> **[1:28](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=88)** So I'll click save to file.
>
> **[1:30](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=90)** And it's asking me for a file name, by default it wants to put it into documents.
>
> **[1:35](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=95)** And so I'll go ahead and allow that, click next again.
>
> **[1:39](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=99)** And then it's asking me if it would like to encrypt only the used space or all space.
>
> **[1:46](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=106)** And I'm going to go ahead and go with only the space that is currently used.
>
> **[1:49](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=109)** Cause that'll run a little faster, click next.
>
> **[1:53](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=113)** Asking me if I want to use the new encryption mode or the older encryption mode.
>
> **[1:57](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=117)** The older encryption mode is compatible with earlier versions of Windows 10.
>
> **[2:02](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=122)** I don't plan to move this drive to an early version of Windows 10.
>
> **[2:06](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=126)** So I'll stick with new encryption and click next.
>
> **[2:09](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=129)** And then on the last screen, I'll click start encrypting.
>
> **[2:14](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=134)** For me, it went pretty fast cause my drivers is pretty small.
>
> **[2:17](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=137)** If you have a large drive with lots of data, this could take several minutes, and now hit close.
>
> **[2:24](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=144)** You notice now, and a lock icon appears above the drive.
>
> **[2:29](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=149)** The lock tells me this drive is BitLocker enabled.
>
> **[2:34](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=154)** It also tells me the drive is currently unlocked, so I could access it.
>
> **[2:39](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=159)** If I would like to lock the drive, I'll need to use the command line, so off the Start Menu I'll type in CMD.
>
> **[2:47](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=167)** And when the option for Command Prompt appears, I'll right click on it and say, run as administrator.
>
> **[2:53](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=173)** In the Command Prompt, I'm going to type in manage-BDE, which I believe stands for BitLocker Device Encryption, then I'll need to give it the letter of the drive I'm interested in with a colon, which for me is letter E and then hyphen lock, L-O-C-K.
>
> **[3:18](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=198)** When I run that command it tells me volume E is now locked.
>
> **[3:21](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=201)** And if I pull up File Explorer, I should be able to see that device is in fact locked.
>
> **[3:28](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=208)** Now it has the lock icon and the lock is closed.
>
> **[3:31](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=211)** Meaning that device is locked and encrypted.
>
> **[3:35](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=215)** If I double click on it in order to decrypt it, it will ask me for my password.
>
> **[3:40](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=220)** So I'll use the password I typed in earlier.
>
> **[3:44](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=224)** So now the lock opens, we still have the lock icon, but now it is an unlocked lock.
>
> **[3:50](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=230)** So I can double click on it and it will open up and show me my files.
>
> **[3:54](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=234)** This drive will remain unlocked until I either go to the command line and issue those commands again, or I reboot.
>
> **[4:00](https://www.linkedin.com/learning/windows-10-administration-3/administering-bitlocker?u=76281980&t=240)** Typically every time you reboot, it will automatically lock and to use the drive you have to type in the password again.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (5), go to (1)
> **Env Vars:** tpm (2), usb (1), cmd (1), bde (1)
> **Tools:** command line (2), command prompt (2)
> **Definitions:** is a  (2), stands for (1), is an  (1)
> **Code Keywords:** module (2)
> **Speakers:** - [instructor] (1)

#### Working with EFS
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=0)** - [Instructor] In this section I'd like to talk about encrypting individual files in Windows 10.
>
> **[0:06](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=6)** So at the start menu, I'll type in encryption.
>
> **[0:11](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=11)** And we'll see one of the options is manage file encryption certificates.
>
> **[0:15](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=15)** I'll click on that.
>
> **[0:17](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=17)** The first step of the wizard is just an explanation about the EFS, or Encrypted File System, and how I'm going to need to create a certificate in order for it to work.
>
> **[0:28](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=28)** So I'll click Next, then it's saying there's already some certificates on this machine.
>
> **[0:33](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=33)** But I would like to create a new one.
>
> **[0:35](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=35)** So I'm going to select Create new certificate, hit Next.
>
> **[0:40](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=40)** It gives me some options.
>
> **[0:42](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=42)** The most secure option would be the bottom one, get a certificate from the domain's certification authority.
>
> **[0:48](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=48)** So if you're on a domain and doing this in production, you probably want to go with that option.
>
> **[0:53](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=53)** But a quicker option, and perfectly fine for a demo is the top option, a new self-signed certificate.
>
> **[1:01](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=61)** I'll hit Next.
>
> **[1:03](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=63)** Then asking me if I would like to backup the certificate, again, in production very good idea to backup the certificate, but for a demo, not necessary.
>
> **[1:12](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=72)** So I'll say backup later, and hit Next.
>
> **[1:15](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=75)** So because I had previously encrypted some files with a different certificate, it's asking me if I would like to change the certificate use for those.
>
> **[1:25](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=85)** And I'm just going to go with I'll update my encrypted files later and click Next.
>
> **[1:31](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=91)** And then the last step, it just tells me basically, the certificate exists if I'd like to view it, I can.
>
> **[1:35](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=95)** So I'll click View certificate.
>
> **[1:38](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=98)** And we'll see the various information about it.
>
> **[1:40](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=100)** Most of this is not information we need to worry about a whole lot.
>
> **[1:45](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=105)** So we'll just click OK.
>
> **[1:46](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=106)** And we'll click Close.
>
> **[1:48](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=108)** Now I should be able to encrypt some files.
>
> **[1:53](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=113)** So I'm just going to go into my documents and create a new text file.
>
> **[2:02](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=122)** Then I can right click on that text file, go to properties.
>
> **[2:07](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=127)** And then first page of the dialog, I'll go to advanced.
>
> **[2:12](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=132)** And in the advanced attributes dialog at the bottom, I have the option to encrypt contents to secure data.
>
> **[2:20](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=140)** And just like previous versions of Windows, we cannot have a file that is both encrypted and compressed.
>
> **[2:27](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=147)** It's either/or you either have to compress, or you can encrypt, but we can't do both.
>
> **[2:32](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=152)** So I'll click on encrypt, I'll click OK.
>
> **[2:37](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=157)** In the new text document properties, I'll click Apply.
>
> **[2:41](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=161)** It's asking me if I would like to encrypt just the file or both the file and the folder?
>
> **[2:47](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=167)** I'll choose file only.
>
> **[2:50](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=170)** And click OK.
>
> **[2:51](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=171)** So now the name of my file has changed colors, it's in green now showing me that it is an encrypted file, I can double click on that file, and read it and modify it.
>
> **[3:08](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=188)** And this is because EFS Encrypted File System is transparent to the end user.
>
> **[3:14](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=194)** When you try to open a file and automatically decrypts it, when you save a file it automatically encrypts it as long as you have access to the certificate.
>
> **[3:24](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=204)** So that certificate I created in the first step, if a user doesn't have access to that certificate, then they would not be able to open the file.
>
> **[3:32](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=212)** They couldn't read it, they couldn't write it, they couldn't do anything with it.
>
> **[3:35](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=215)** But because I do have access to the certificate, I can work with the file perfectly normal.
>
> **[3:41](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=221)** And again, it is transparent to me.
>
> **[3:44](https://www.linkedin.com/learning/windows-10-administration-3/working-with-efs?u=76281980&t=224)** And that means I don't have to modify my behavior in any way I can just double click on the file and the decryption handles itself in the background.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (5), go to (2), open the (1)
> **Env Vars:** efs (2)
> **Code Keywords:** self (1)
> **Definitions:** is an  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### 7. Windows Boot Process

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Understanding the boot process
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-boot-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-boot-process?u=76281980&t=0)** - [Instructor] In this section, we're going to talk about the boot process in Windows 10.
>
> **[0:05](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-boot-process?u=76281980&t=5)** In windows 10 we can think of the boot process as a three step process.
>
> **[0:10](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-boot-process?u=76281980&t=10)** The first step or group of steps is called secure boot, which then leads to trusted boot, which then leads to early launch anti-malware.
>
> **[0:22](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-boot-process?u=76281980&t=22)** And we'll talk about each one of these in detail.
>
> **[0:25](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-boot-process?u=76281980&t=25)** The first step, secure boot, is handled by the Unified Extensible Firmware Interface, which is a standard implemented by your hardware.
>
> **[0:36](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-boot-process?u=76281980&t=36)** So Windows 10 is not actually involved in this.
>
> **[0:39](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-boot-process?u=76281980&t=39)** At this point in the boot process, the operating system hasn't started running yet, it's just the firmware on the motherboard that's running.
>
> **[0:48](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-boot-process?u=76281980&t=48)** UEFI, verifies the signature of all firmware files that are loaded, and that makes it difficult or impossible for these files to be replaced without your authorization, which dramatically reduces the probability of introducing a virus or malware into the boot process, hence the name secure boot.
>
> **[1:11](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-boot-process?u=76281980&t=71)** The security here is that it's going to great efforts to eliminate viruses and malware while booting.
>
> **[1:20](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-boot-process?u=76281980&t=80)** It does this by verifying the signature of the files.
>
> **[1:24](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-boot-process?u=76281980&t=84)** The last thing the secure boot process does, it places the bootloader of the OS into memory, and once that bootloader takes over, we move to the next step, which is called trusted boot.
>
> **[1:38](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-boot-process?u=76281980&t=98)** So now this part is handled by Windows 10.
>
> **[1:42](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-boot-process?u=76281980&t=102)** The boot process has been handed off from the firmware to the operating system, and now Windows 10 will handle everything going forward.
>
> **[1:51](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-boot-process?u=76281980&t=111)** First thing trusted boot does is load a kernel, and that Windows kernel is verified by a certificate.
>
> **[1:58](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-boot-process?u=76281980&t=118)** So the same mindset as the verification in the previous slide, we want to verify that the files have not been tampered with, that no one has introduced a virus.
>
> **[2:10](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-boot-process?u=76281980&t=130)** After the Windows kernel is loaded, trusted boot will start to load Windows components, and as it's loading Windows components, it will take care to load anti-malware early in the launch sequence.
>
> **[2:25](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-boot-process?u=76281980&t=145)** Microsoft calls this mindset early launch anti-malware, it tries to load an anti-malware program before any device driver is loaded.
>
> **[2:36](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-boot-process?u=76281980&t=156)** That way if there is a virus or a rootkit inside of one of the device drivers, the anti-malware software can catch it.
>
> **[2:43](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-boot-process?u=76281980&t=163)** So by loading anti-malware software first, that allows all device drivers to be scanned.
>
> **[2:50](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-boot-process?u=76281980&t=170)** By default in Windows 10, the anti-malware software is Windows Defender.
>
> **[2:56](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-boot-process?u=76281980&t=176)** So yeah, the process starts with secure boot, which is handled entirely by the firmware.
>
> **[3:03](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-boot-process?u=76281980&t=183)** Once the OS loader is in memory, that becomes the trusted boot step handled by Windows.
>
> **[3:10](https://www.linkedin.com/learning/windows-10-administration-3/understanding-the-boot-process?u=76281980&t=190)** During that time, the kernel is loaded, then Windows components are loaded and before any device driver is loaded, Microsoft starts the early launch anti-malware software.

> [!info]- Semantic Content
>
> **Definitions:** is called (2), is a  (2)
> **Code Keywords:** interface (1), this. (1)
> **Env Vars:** uefi (1)
> **Speakers:** - [instructor] (1)

#### Working with Measured Boot
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-administration-3/working-with-measured-boot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-administration-3/working-with-measured-boot?u=76281980&t=0)** - [Instructor] In this section, we're going to talk about the measured boot technology in Windows 10.
>
> **[0:06](https://www.linkedin.com/learning/windows-10-administration-3/working-with-measured-boot?u=76281980&t=6)** Measured boot is a procedure of monitoring the boot process.
>
> **[0:10](https://www.linkedin.com/learning/windows-10-administration-3/working-with-measured-boot?u=76281980&t=10)** The goal of which is to prove that the machine is in a trustworthy state.
>
> **[0:15](https://www.linkedin.com/learning/windows-10-administration-3/working-with-measured-boot?u=76281980&t=15)** In other words that nothing was manipulated during the boot process that could reduce the security of the computer.
>
> **[0:23](https://www.linkedin.com/learning/windows-10-administration-3/working-with-measured-boot?u=76281980&t=23)** One of the biggest things logged by measured boot is which components were loaded before the anti-malware software.
>
> **[0:31](https://www.linkedin.com/learning/windows-10-administration-3/working-with-measured-boot?u=76281980&t=31)** That idea being that anything loaded after the anti-malware software will have been scanned and we can assume that it is trustworthy based on the quality of the anti-malware software.
>
> **[0:45](https://www.linkedin.com/learning/windows-10-administration-3/working-with-measured-boot?u=76281980&t=45)** However, what about things that were loaded before the anti-malware software.
>
> **[0:50](https://www.linkedin.com/learning/windows-10-administration-3/working-with-measured-boot?u=76281980&t=50)** Things loaded very early in the boot process.
>
> **[0:53](https://www.linkedin.com/learning/windows-10-administration-3/working-with-measured-boot?u=76281980&t=53)** Measured boot keeps a detailed log of these items so that they can be analyzed to check for viruses or other malware.
>
> **[1:02](https://www.linkedin.com/learning/windows-10-administration-3/working-with-measured-boot?u=76281980&t=62)** Those logs are stored in the trusted platform module hardware or TPM.
>
> **[1:08](https://www.linkedin.com/learning/windows-10-administration-3/working-with-measured-boot?u=76281980&t=68)** TPM is the same hardware that's necessary to use the BitLocker technology we talked about earlier.
>
> **[1:15](https://www.linkedin.com/learning/windows-10-administration-3/working-with-measured-boot?u=76281980&t=75)** In this case, it's used to store the results of the measured boot audit.
>
> **[1:20](https://www.linkedin.com/learning/windows-10-administration-3/working-with-measured-boot?u=76281980&t=80)** Once we've gone through a measured boot process, the computer can complete an attestation period.
>
> **[1:27](https://www.linkedin.com/learning/windows-10-administration-3/working-with-measured-boot?u=76281980&t=87)** In other words, it's going to have someone attest to its security.
>
> **[1:32](https://www.linkedin.com/learning/windows-10-administration-3/working-with-measured-boot?u=76281980&t=92)** The values from the trusted platform module will be sent to a remote computer.
>
> **[1:37](https://www.linkedin.com/learning/windows-10-administration-3/working-with-measured-boot?u=76281980&t=97)** That remote computer will evaluate the audit.
>
> **[1:40](https://www.linkedin.com/learning/windows-10-administration-3/working-with-measured-boot?u=76281980&t=100)** And if it finds the computer was booted in a secure manner, it will respond with a quote.
>
> **[1:46](https://www.linkedin.com/learning/windows-10-administration-3/working-with-measured-boot?u=76281980&t=106)** And a quote is a statement about the health of this computer.
>
> **[1:50](https://www.linkedin.com/learning/windows-10-administration-3/working-with-measured-boot?u=76281980&t=110)** The quote can then be presented to other computers and those computers can decide to trust one another or not trust one another based on the results of the quote.
>
> **[2:01](https://www.linkedin.com/learning/windows-10-administration-3/working-with-measured-boot?u=76281980&t=121)** So by going through a measured boot process, then storing the audit of that measured boot process in a TPM module, then having the TPM data verified by a remote computer, we can generate a quote, and that quote is a statement of the health of our computer.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), in other words (2)
> **Code Keywords:** module (3), case, (1)
> **Env Vars:** tpm (4)
> **Cross-References:** we talked about (1)
> **Speakers:** - [instructor] (1)


### 8. Virtualization

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Installing Client Hyper-V
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-administration-3/installing-client-hyper-v?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-administration-3/installing-client-hyper-v?u=76281980&t=0)** - [Instructor] In this section I'd like to talk about running virtual machines on your Windows 10 PC.
>
> **[0:06](https://www.linkedin.com/learning/windows-10-administration-3/installing-client-hyper-v?u=76281980&t=6)** There are many software packages that will allow you to run virtual machines.
>
> **[0:11](https://www.linkedin.com/learning/windows-10-administration-3/installing-client-hyper-v?u=76281980&t=11)** One of them is called Hyper-V.
>
> **[0:14](https://www.linkedin.com/learning/windows-10-administration-3/installing-client-hyper-v?u=76281980&t=14)** And Hyper-V is included with Windows 10.
>
> **[0:17](https://www.linkedin.com/learning/windows-10-administration-3/installing-client-hyper-v?u=76281980&t=17)** It's not installed by default but you can install it at no additional cost.
>
> **[0:24](https://www.linkedin.com/learning/windows-10-administration-3/installing-client-hyper-v?u=76281980&t=24)** So at the start menu I'll type in features and then I'll go to the option labeled turn Windows features on or off.
>
> **[0:35](https://www.linkedin.com/learning/windows-10-administration-3/installing-client-hyper-v?u=76281980&t=35)** And this will give me a lots of different choices.
>
> **[0:37](https://www.linkedin.com/learning/windows-10-administration-3/installing-client-hyper-v?u=76281980&t=37)** The one I'm interested in is Hyper-V.
>
> **[0:40](https://www.linkedin.com/learning/windows-10-administration-3/installing-client-hyper-v?u=76281980&t=40)** So I'm going to expand the plus sign there and we'll see two options underneath.
>
> **[0:45](https://www.linkedin.com/learning/windows-10-administration-3/installing-client-hyper-v?u=76281980&t=45)** Hyper-V tools and Hyper-V platform.
>
> **[0:48](https://www.linkedin.com/learning/windows-10-administration-3/installing-client-hyper-v?u=76281980&t=48)** I'm going to expand both of those.
>
> **[0:50](https://www.linkedin.com/learning/windows-10-administration-3/installing-client-hyper-v?u=76281980&t=50)** So amongst individual options I have the Hyper-V graphical management tool.
>
> **[0:55](https://www.linkedin.com/learning/windows-10-administration-3/installing-client-hyper-v?u=76281980&t=55)** Yes I want those so I'll click on that.
>
> **[0:58](https://www.linkedin.com/learning/windows-10-administration-3/installing-client-hyper-v?u=76281980&t=58)** The Hyper-V module for Windows PowerShell.
>
> **[1:02](https://www.linkedin.com/learning/windows-10-administration-3/installing-client-hyper-v?u=76281980&t=62)** Yes I want that.
>
> **[1:03](https://www.linkedin.com/learning/windows-10-administration-3/installing-client-hyper-v?u=76281980&t=63)** All the way at the bottom is the Hyper-V service.
>
> **[1:06](https://www.linkedin.com/learning/windows-10-administration-3/installing-client-hyper-v?u=76281980&t=66)** I want that.
>
> **[1:07](https://www.linkedin.com/learning/windows-10-administration-3/installing-client-hyper-v?u=76281980&t=67)** But the one that's left Hyper-V hypervisor for me is grayed out.
>
> **[1:11](https://www.linkedin.com/learning/windows-10-administration-3/installing-client-hyper-v?u=76281980&t=71)** And when I hover over it.
>
> **[1:13](https://www.linkedin.com/learning/windows-10-administration-3/installing-client-hyper-v?u=76281980&t=73)** It says Hyper-V cannot be installed because the processor does not have required capabilities.
>
> **[1:20](https://www.linkedin.com/learning/windows-10-administration-3/installing-client-hyper-v?u=76281980&t=80)** This is because I'm already running on a virtual machine.
>
> **[1:23](https://www.linkedin.com/learning/windows-10-administration-3/installing-client-hyper-v?u=76281980&t=83)** The machine you are seeing on your screen now is a virtual machine.
>
> **[1:27](https://www.linkedin.com/learning/windows-10-administration-3/installing-client-hyper-v?u=76281980&t=87)** And you cannot install a hypervisor on a virtual machine.
>
> **[1:30](https://www.linkedin.com/learning/windows-10-administration-3/installing-client-hyper-v?u=76281980&t=90)** It just doesn't make sense to install a hypervisor on top of another hypervisor.
>
> **[1:35](https://www.linkedin.com/learning/windows-10-administration-3/installing-client-hyper-v?u=76281980&t=95)** So I will not be able to install this but you can go ahead and install it if you like.
>
> **[1:40](https://www.linkedin.com/learning/windows-10-administration-3/installing-client-hyper-v?u=76281980&t=100)** I'll click okay.
>
> **[1:41](https://www.linkedin.com/learning/windows-10-administration-3/installing-client-hyper-v?u=76281980&t=101)** And after a few minutes of watching the progress bar go across the screen, Windows will decide that I need to reboot in order to complete this operation.
>
> **[1:51](https://www.linkedin.com/learning/windows-10-administration-3/installing-client-hyper-v?u=76281980&t=111)** So I'm going to go ahead and reboot now.
>
> **[1:53](https://www.linkedin.com/learning/windows-10-administration-3/installing-client-hyper-v?u=76281980&t=113)** I'll see you on the other side.
>
> **[1:55](https://www.linkedin.com/learning/windows-10-administration-3/installing-client-hyper-v?u=76281980&t=115)** So now I have completed the reboot.
>
> **[1:58](https://www.linkedin.com/learning/windows-10-administration-3/installing-client-hyper-v?u=76281980&t=118)** I'm going to click on the start menu and type in hyper then I'll select the item for Hyper-V manager.
>
> **[2:06](https://www.linkedin.com/learning/windows-10-administration-3/installing-client-hyper-v?u=76281980&t=126)** And that will pull up an interface were if you've installed the hypervisor you could create new virtual machines.
>
> **[2:14](https://www.linkedin.com/learning/windows-10-administration-3/installing-client-hyper-v?u=76281980&t=134)** I did not install the hypervisor but I can still use these tools to manage virtual machines and the Hyper-V service running on a different server.
>
> **[2:25](https://www.linkedin.com/learning/windows-10-administration-3/installing-client-hyper-v?u=76281980&t=145)** So here on the left hand menu were it says Hyper-V manager I'll right click and go to connect to server then I'll have to type in the name of that server.
>
> **[2:37](https://www.linkedin.com/learning/windows-10-administration-3/installing-client-hyper-v?u=76281980&t=157)** I'll click okay.
>
> **[2:39](https://www.linkedin.com/learning/windows-10-administration-3/installing-client-hyper-v?u=76281980&t=159)** And now I can manage one of my other Hyper-V servers that's on the same network.
>
> **[2:45](https://www.linkedin.com/learning/windows-10-administration-3/installing-client-hyper-v?u=76281980&t=165)** It shows a list of the running machines, it has options to create a new virtual machine over here on the right.
>
> **[2:51](https://www.linkedin.com/learning/windows-10-administration-3/installing-client-hyper-v?u=76281980&t=171)** And I have all of the management tools I would use to completely manage a Hyper-V instance anywheres on my network.

> [!info]- Semantic Content
>
> **Prerequisites:** install (6)
> **UI Navigation:** go to (2), click on (2)
> **Code Keywords:** module (1), interface (1)
> **Definitions:** is called (1), is a  (1)
> **CLI Commands:** make (1)
> **Tools:** powershell (1)
> **Speakers:** - [instructor] (1)

#### Running Windows 10 as a VDI
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-administration-3/running-windows-10-as-a-vdi?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-administration-3/running-windows-10-as-a-vdi?u=76281980&t=0)** - [Instructor] In this section, we're going to talk about running windows 10 as a virtual machine.
>
> **[0:06](https://www.linkedin.com/learning/windows-10-administration-3/running-windows-10-as-a-vdi?u=76281980&t=6)** The majority of things you'd like to do with windows 10, will work perfectly fine in a virtualized operating system things like surfing the internet, using a spreadsheet application or word processor or email, all of that should run exactly the same when you're virtualized or when you're not virtualized.
>
> **[0:27](https://www.linkedin.com/learning/windows-10-administration-3/running-windows-10-as-a-vdi?u=76281980&t=27)** So I'm going to focus instead on some of the things that might give you trouble.
>
> **[0:31](https://www.linkedin.com/learning/windows-10-administration-3/running-windows-10-as-a-vdi?u=76281980&t=31)** All of these things are dependent somewhat on which hypervisor you are using, different hypervisors have different strengths and weaknesses but I'm going to cover the limitations that are pretty common amongst most hypervisors.
>
> **[0:46](https://www.linkedin.com/learning/windows-10-administration-3/running-windows-10-as-a-vdi?u=76281980&t=46)** The first one is the graphics processing unit, the GPU many times when windows 10 is virtualized, it doesn't have full access to the graphical subsystem and therefore you won't get quite as good a graphical performance.
>
> **[1:01](https://www.linkedin.com/learning/windows-10-administration-3/running-windows-10-as-a-vdi?u=76281980&t=61)** This is typically more of a problem with games and not so much a problem with business applications, but be aware if you need really high performance graphics then virtualization may not be the best idea.
>
> **[1:15](https://www.linkedin.com/learning/windows-10-administration-3/running-windows-10-as-a-vdi?u=76281980&t=75)** If you need sub 10 millisecond latency, in other words you need applications to respond in the less than 10 milliseconds that can be a problem with some hypervisors.
>
> **[1:27](https://www.linkedin.com/learning/windows-10-administration-3/running-windows-10-as-a-vdi?u=76281980&t=87)** Specialized hardware, so windows 10 has several features such as the facial recognition or the BitLocker that does require specialized hardware, some hypervisors have a hard time virtualizing this hardware, and therefore those features would not be available on a virtual environment windows 10 installation.
>
> **[1:52](https://www.linkedin.com/learning/windows-10-administration-3/running-windows-10-as-a-vdi?u=76281980&t=112)** Switching from wired to wireless networks.
>
> **[1:56](https://www.linkedin.com/learning/windows-10-administration-3/running-windows-10-as-a-vdi?u=76281980&t=116)** A normal non-virtualized windows 10 installation will typically switch quite seamlessly from wired to wireless networks, but unfortunately a virtualized windows 10 installation often has trouble with this.
>
> **[2:13](https://www.linkedin.com/learning/windows-10-administration-3/running-windows-10-as-a-vdi?u=76281980&t=133)** So again, all of this is going to depend on which hypervisor you use, so if you really need one of the features listed here you may want to do some research as to which hypervisor might provide that functionality.
>
> **[2:29](https://www.linkedin.com/learning/windows-10-administration-3/running-windows-10-as-a-vdi?u=76281980&t=149)** But again, for basic things like working with spreadsheets, word processing, checking your email, all of that should work great with any hypervisor.

> [!info]- Semantic Content
>
> **Code Keywords:** require (1), switch (1), this. (1)
> **Env Vars:** gpu (1)
> **Definitions:** in other words (1)
> **Analogies:** such as (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)


### 9. Networking

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Using the Windows 10 network settings
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-administration-3/using-the-windows-10-network-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/windows-10-administration-3/using-the-windows-10-network-settings?u=76281980&t=1)** - [Instructor] In this section, we're going to talk about network settings in Windows 10.
>
> **[0:05](https://www.linkedin.com/learning/windows-10-administration-3/using-the-windows-10-network-settings?u=76281980&t=5)** Off the start menu, I'll go to settings and then the Windows settings dialogue, I'll go to network and internet.
>
> **[0:14](https://www.linkedin.com/learning/windows-10-administration-3/using-the-windows-10-network-settings?u=76281980&t=14)** And this takes me to an area where we can administer various settings about networking in Windows 10.
>
> **[0:21](https://www.linkedin.com/learning/windows-10-administration-3/using-the-windows-10-network-settings?u=76281980&t=21)** There's some different options on the left, I'm going to go through all of these.
>
> **[0:26](https://www.linkedin.com/learning/windows-10-administration-3/using-the-windows-10-network-settings?u=76281980&t=26)** You may see slightly different options on your Windows 10 device.
>
> **[0:31](https://www.linkedin.com/learning/windows-10-administration-3/using-the-windows-10-network-settings?u=76281980&t=31)** For example, if you are on a tablet, you might see an option to go into airplane mode but being I'm not on a tablet, I won't get that option.
>
> **[0:41](https://www.linkedin.com/learning/windows-10-administration-3/using-the-windows-10-network-settings?u=76281980&t=41)** But in these options, the first one is status and we look at that, it shows me how much bandwidth I've used in the last 30 days.
>
> **[0:50](https://www.linkedin.com/learning/windows-10-administration-3/using-the-windows-10-network-settings?u=76281980&t=50)** This is most interesting to you if you're using an internet connection with some sort of cap on how much bandwidth you can use.
>
> **[0:59](https://www.linkedin.com/learning/windows-10-administration-3/using-the-windows-10-network-settings?u=76281980&t=59)** If we scroll down, we see options for change adapter options and network and sharing center.
>
> **[1:06](https://www.linkedin.com/learning/windows-10-administration-3/using-the-windows-10-network-settings?u=76281980&t=66)** If you click on either of those, it pulls up an interface that looks very similar to what we had in Windows 7 and Windows 8.
>
> **[1:14](https://www.linkedin.com/learning/windows-10-administration-3/using-the-windows-10-network-settings?u=76281980&t=74)** So I'll close that.
>
> **[1:16](https://www.linkedin.com/learning/windows-10-administration-3/using-the-windows-10-network-settings?u=76281980&t=76)** The next item on the menu is ethernet, I'll click on that.
>
> **[1:20](https://www.linkedin.com/learning/windows-10-administration-3/using-the-windows-10-network-settings?u=76281980&t=80)** And it shows that I have one ethernet connection, I'll click on that, and it shows me various information about that ethernet connection.
>
> **[1:29](https://www.linkedin.com/learning/windows-10-administration-3/using-the-windows-10-network-settings?u=76281980&t=89)** As I scroll down, we'll see the IP 6 address IP 4 address, the MAC address and some other details.
>
> **[1:38](https://www.linkedin.com/learning/windows-10-administration-3/using-the-windows-10-network-settings?u=76281980&t=98)** So it's nice to have this information and a graphical interface.
>
> **[1:41](https://www.linkedin.com/learning/windows-10-administration-3/using-the-windows-10-network-settings?u=76281980&t=101)** You could get to this information very easily from a command prompt by typing an IP config.
>
> **[1:47](https://www.linkedin.com/learning/windows-10-administration-3/using-the-windows-10-network-settings?u=76281980&t=107)** It'll give you almost the exact same information but if you prefer it through a graphical interface, here's where you can get it.
>
> **[1:54](https://www.linkedin.com/learning/windows-10-administration-3/using-the-windows-10-network-settings?u=76281980&t=114)** Going back to the main menu, our next item under ethernet is dial-up and this would allow me to set up a dial-up connection.
>
> **[2:02](https://www.linkedin.com/learning/windows-10-administration-3/using-the-windows-10-network-settings?u=76281980&t=122)** In this day and age, probably unusual that people are using a whole lot of dial-up connections, but this option still exist.
>
> **[2:11](https://www.linkedin.com/learning/windows-10-administration-3/using-the-windows-10-network-settings?u=76281980&t=131)** And if I click on this, again, takes me to an interface similar to Windows 7 and Windows 8 and notice one of the options is set up a VPN connection and this'll take me into the old Windows 7 and Windows 8 version of creating a VPN connection.
>
> **[2:30](https://www.linkedin.com/learning/windows-10-administration-3/using-the-windows-10-network-settings?u=76281980&t=150)** But if I cancel out of that and go back to our menu, our next item is VPN which gives me the Windows 10 version of setting up a VPN connection.
>
> **[2:40](https://www.linkedin.com/learning/windows-10-administration-3/using-the-windows-10-network-settings?u=76281980&t=160)** They allow us to do largely the same thing.
>
> **[2:43](https://www.linkedin.com/learning/windows-10-administration-3/using-the-windows-10-network-settings?u=76281980&t=163)** It's mostly a difference in the interface and the appearance.
>
> **[2:48](https://www.linkedin.com/learning/windows-10-administration-3/using-the-windows-10-network-settings?u=76281980&t=168)** If I click on add a VPN connection, the first option it's asking for is a VPN provider.
>
> **[2:55](https://www.linkedin.com/learning/windows-10-administration-3/using-the-windows-10-network-settings?u=76281980&t=175)** The only option is Windows built-in.
>
> **[2:58](https://www.linkedin.com/learning/windows-10-administration-3/using-the-windows-10-network-settings?u=76281980&t=178)** If you install some VPN software on your computer, you might get other options but the Windows built-in VPN is pretty good in most situations.
>
> **[3:07](https://www.linkedin.com/learning/windows-10-administration-3/using-the-windows-10-network-settings?u=76281980&t=187)** We can look under VPN type and see that it supports all of the most common types of VPN.
>
> **[3:14](https://www.linkedin.com/learning/windows-10-administration-3/using-the-windows-10-network-settings?u=76281980&t=194)** We can also look under type of sign in info and see it support smart card, password and certificate, which again, these are the most common ways of authenticating to a VPN, so the Windows built-in client probably will meet most of your needs for setting up basic VPN connections and again, if you need something more advanced, you can install some software from the VPN vendor.
>
> **[3:42](https://www.linkedin.com/learning/windows-10-administration-3/using-the-windows-10-network-settings?u=76281980&t=222)** I'll hit cancel here.
>
> **[3:45](https://www.linkedin.com/learning/windows-10-administration-3/using-the-windows-10-network-settings?u=76281980&t=225)** And the last option in our menu of network options is proxy.
>
> **[3:49](https://www.linkedin.com/learning/windows-10-administration-3/using-the-windows-10-network-settings?u=76281980&t=229)** Pretty self explanatory, we can either set up an automatic proxy or a manual proxy.
>
> **[3:55](https://www.linkedin.com/learning/windows-10-administration-3/using-the-windows-10-network-settings?u=76281980&t=235)** Automatic proxies are done via script, so all you have to provide is the address of that script, or if we prefer to do a manual proxy, typically you just need the IP address of the proxy server and the port.
>
> **[4:10](https://www.linkedin.com/learning/windows-10-administration-3/using-the-windows-10-network-settings?u=76281980&t=250)** So those are the various options that we have in networking while doing Windows 10 administration.

> [!info]- Semantic Content
>
> **Env Vars:** vpn (13), mac (1)
> **UI Navigation:** click on (5), go to (2), scroll down (2)
> **Code Keywords:** interface (5), this, (1), self (1)
> **Prerequisites:** set up (3), install (2)
> **Cross-References:** in the last (1), go back to (1)
> **Analogies:** for example (1), similar to (1)
> **Tools:** command prompt (1)
> **Definitions:** is a  (1)

#### Using Control Panel to manage Windows Firewall
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=0)** - [Instructor] In this section, we're going to talk about Windows Firewall in Windows 10.
>
> **[0:05](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=5)** So of the start menu, I'll just type in firewall.
>
> **[0:11](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=11)** And we see the first option that comes up is Windows Defender Firewall, I'll click on that.
>
> **[0:17](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=17)** And this pulls up a basic interface that shows me that I am currently connected to a guest or public network and that Windows Firewall is on.
>
> **[0:26](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=26)** And over to the left, I have the option to turn Windows Defender Firewall on or off.
>
> **[0:32](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=32)** If I click on that, it asks me for private networks, if I want it on or off and for public networks if I want it on and off.
>
> **[0:40](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=40)** And if you're connected to a domain, it'll also ask you for domain connections if you want it on or off.
>
> **[0:47](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=47)** Most of our Windows Firewall settings can be different for private, public and domain connections.
>
> **[0:53](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=53)** The idea being you might be willing to relax some firewall settings on your domain connection, because most likely the other machines on your domain are not going to attack you.
>
> **[1:05](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=65)** Whereas on a public network, you would probably want the strictest possible rules.
>
> **[1:11](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=71)** Because on a public network, there very well could be other computers that are trying to attack you.
>
> **[1:17](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=77)** So I'm not going to change any settings here, I'm going to leave it on, click OK.
>
> **[1:22](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=82)** And then back in this dialog, I'd like to go to Advanced Settings.
>
> **[1:27](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=87)** And this will pull up a new window called Windows Defender Firewall with advanced security.
>
> **[1:32](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=92)** And this is where I can look at existing firewall rules as well as add new firewall rules.
>
> **[1:39](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=99)** So over to the left, we see we have separate sections for inbound rules and outbound rules.
>
> **[1:46](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=106)** I'll click on inbound rules, it shows me a list of all of the rules existed on my machine.
>
> **[1:52](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=112)** I didn't create any of these rules by hand, the majority of them were created when I installed Windows.
>
> **[1:59](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=119)** And then some of them were created when I installed additional programs into Windows 10.
>
> **[2:04](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=124)** For a new rule, I'll go all the way to the right of this interface and click on new rule.
>
> **[2:11](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=131)** And that'll take me to the new inbound rule wizard, which gives me options for creating a new rule based on a program, based on a port, based on a predefined rule, or custom.
>
> **[2:23](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=143)** And custom is basically all three of the ones above it.
>
> **[2:27](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=147)** So for this demo, I'll do a firewall rule based on a port.
>
> **[2:32](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=152)** And I'll hit next.
>
> **[2:34](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=154)** It gives me a choice of either TCP and UDP.
>
> **[2:37](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=157)** Notice you can only do one or the other, and one rule.
>
> **[2:41](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=161)** If you want to block both TCP and UDP, you would need to create two separate rules.
>
> **[2:48](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=168)** So for this, I'll do TCP, and I'd like to do a specific port and that is Port 80, eight zero.
>
> **[2:57](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=177)** I'll click next, then my options are, of course allow the connection or block the connection, I think those are self explanatory.
>
> **[3:03](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=183)** Then there's a middle option of allow the connection only if it's secure.
>
> **[3:09](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=189)** And in this case, secure means by using IPsec.
>
> **[3:13](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=193)** So IPsec is a technology used very commonly in Windows domains to encrypt and authenticate network connections.
>
> **[3:23](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=203)** So we can have firewall rules that behave differently depending on if the incoming connection is using IPsec or not using IPsec.
>
> **[3:33](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=213)** But what I would like to do is block the connection to Port 80.
>
> **[3:37](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=217)** So I'll select Block and click Next.
>
> **[3:39](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=219)** And then again, like we talked about previously, I can apply this to the domain profile, the private profile, and or the public profile, and any combination of these.
>
> **[3:51](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=231)** I'll click Next again, and I need to give it a name.
>
> **[3:55](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=235)** The name will not affect the functionality at all, it's just a name to help me for administration.
>
> **[4:00](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=240)** So I will try and give it the descriptive name of Block Port 80.
>
> **[4:10](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=250)** And I'll hit Finish.
>
> **[4:12](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=252)** Then you'll notice this new rule comes up at the top of my list.
>
> **[4:17](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=257)** I'll right click on that and go to properties.
>
> **[4:20](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=260)** And I have lots of properties I can choose from to further customize this rule.
>
> **[4:25](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=265)** One of the tabs here is Scope.
>
> **[4:28](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=268)** And on Scope, I can choose certain IP addresses, either local IP addresses or remote IP addresses.
>
> **[4:34](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=274)** It defaults to applying this rule to all IP addresses, but I could limit it to only some IP addresses.
>
> **[4:42](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=282)** So even though I started the wizard with create a rule for a port, once the rule is created, I can add additional criteria above and beyond port.
>
> **[4:54](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=294)** I can customize the rule based on IP addresses, I can customize the rule based on computers.
>
> **[4:59](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=299)** So what computer is the connection coming from?
>
> **[5:04](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=304)** And also users, I can provide different firewall rules for different users.
>
> **[5:08](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=308)** So we have the option to get very granular, and make very specific firewall rules.
>
> **[5:16](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=316)** And then we also can go the other way, we can make very general, very broad firewall rules, which is basically what I've done.
>
> **[5:22](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=322)** I am blocking Port 80 for all IP addresses, all users, all computers.
>
> **[5:28](https://www.linkedin.com/learning/windows-10-administration-3/using-control-panel-to-manage-windows-firewall?u=76281980&t=328)** Again, if I wanted to get more specific than that, this interface is a very easy way to do that.

> [!info]- Semantic Content
>
> **Code Keywords:** public (6), interface (3), private (3), this, (1), self (1)
> **UI Navigation:** click on (5), go to (2)
> **Env Vars:** tcp (3), udp (2)
> **Ports:** port 80 (4)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Cross-References:** we talked about (1)
> **Speakers:** - [instructor] (1)


### 10. Backup and Recovery

> [[#Table of Contents|↑ Back to Table of Contents]]

#### File History
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-administration-3/file-history?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-administration-3/file-history?u=76281980&t=0)** - [Instructor] In this section, we're going to talk about Backup and Restore in Windows 10.
>
> **[0:05](https://www.linkedin.com/learning/windows-10-administration-3/file-history?u=76281980&t=5)** We have a few different options on how to backup our files in Windows 10, going to talk about a few of these.
>
> **[0:12](https://www.linkedin.com/learning/windows-10-administration-3/file-history?u=76281980&t=12)** The first one is using a technology called File History.
>
> **[0:16](https://www.linkedin.com/learning/windows-10-administration-3/file-history?u=76281980&t=16)** This seems to be the preferred way that Microsoft would like us to backup our files.
>
> **[0:22](https://www.linkedin.com/learning/windows-10-administration-3/file-history?u=76281980&t=22)** File History automatically creates copies of files on a schedule.
>
> **[0:27](https://www.linkedin.com/learning/windows-10-administration-3/file-history?u=76281980&t=27)** By default, once an hour, the machine will check to see if a file has changed, and if it has, it'll make a copy of it.
>
> **[0:35](https://www.linkedin.com/learning/windows-10-administration-3/file-history?u=76281980&t=35)** Then, through a fairly simple interface, we can look at the history of this file and see various changes on it and restore any of those historical changes to the current location or to a new location.
>
> **[0:50](https://www.linkedin.com/learning/windows-10-administration-3/file-history?u=76281980&t=50)** This does require a second hard drive and it's preferably an external hard drive.
>
> **[0:56](https://www.linkedin.com/learning/windows-10-administration-3/file-history?u=76281980&t=56)** Windows 10 also includes a feature called Backup and Restore.
>
> **[1:00](https://www.linkedin.com/learning/windows-10-administration-3/file-history?u=76281980&t=60)** The current Backup and Restore technology was introduced in Windows 7, was then removed in Windows 8.1, and then it returns now in Windows 10.
>
> **[1:12](https://www.linkedin.com/learning/windows-10-administration-3/file-history?u=76281980&t=72)** Microsoft still sees this as somewhat of an older technology, and even in the interface, in places, we'll see it referred to as looking for an older backup.
>
> **[1:23](https://www.linkedin.com/learning/windows-10-administration-3/file-history?u=76281980&t=83)** This is a traditional backup and restore where we copy a large number of files at one time for backup, and then we can restore those in a group or individually.
>
> **[1:35](https://www.linkedin.com/learning/windows-10-administration-3/file-history?u=76281980&t=95)** When it comes to restoring, Microsoft also offers a feature called Reset This PC.
>
> **[1:40](https://www.linkedin.com/learning/windows-10-administration-3/file-history?u=76281980&t=100)** This will return Windows 10 to its original state and at that time you would probably run a restore.
>
> **[1:48](https://www.linkedin.com/learning/windows-10-administration-3/file-history?u=76281980&t=108)** So the other backup and restore technologies are focused primarily on backing up our documents and not so much on backing up the Windows 10 operating system.
>
> **[1:59](https://www.linkedin.com/learning/windows-10-administration-3/file-history?u=76281980&t=119)** So the idea is we would just use Reset This PC to get Windows 10 into its original state and then we could restore our documents.
>
> **[2:09](https://www.linkedin.com/learning/windows-10-administration-3/file-history?u=76281980&t=129)** There is another technology called System Image Backups that backs up all files.
>
> **[2:15](https://www.linkedin.com/learning/windows-10-administration-3/file-history?u=76281980&t=135)** It backs up all of our documents, all of our applications and all of the Windows 10 operating system files.
>
> **[2:22](https://www.linkedin.com/learning/windows-10-administration-3/file-history?u=76281980&t=142)** So we're backing up both user files and system files at the same time.
>
> **[2:28](https://www.linkedin.com/learning/windows-10-administration-3/file-history?u=76281980&t=148)** Because it backs up all of the operating system and all of the device drivers, when you go to do a restore, you will need to restore either on exactly the original hardware or some hardware that's very similar to the hardware on which the backup was taken.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (2), default, (1), require (1)
> **CLI Commands:** make (1)
> **Versions:** 8.1 (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Reset this PC
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-administration-3/reset-this-pc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-administration-3/reset-this-pc?u=76281980&t=0)** - [Instructor] In this section, we're going to look at setting up file history in windows 10.
>
> **[0:05](https://www.linkedin.com/learning/windows-10-administration-3/reset-this-pc?u=76281980&t=5)** So of the start menu, I'll go to settings and then I'm looking for update and security and I know file history is not exactly update and security but if we read the note under update and security, it says windows update, recovery and backup.
>
> **[0:24](https://www.linkedin.com/learning/windows-10-administration-3/reset-this-pc?u=76281980&t=24)** And file history is certainly part of backup.
>
> **[0:27](https://www.linkedin.com/learning/windows-10-administration-3/reset-this-pc?u=76281980&t=27)** So I'll click on that.
>
> **[0:29](https://www.linkedin.com/learning/windows-10-administration-3/reset-this-pc?u=76281980&t=29)** And then I'll click on backup.
>
> **[0:31](https://www.linkedin.com/learning/windows-10-administration-3/reset-this-pc?u=76281980&t=31)** And if you've never set this up before, like I've never set this up before, you'll see where it says add drive.
>
> **[0:38](https://www.linkedin.com/learning/windows-10-administration-3/reset-this-pc?u=76281980&t=38)** And here I will need to click on this and choose which drive I'm going to use for my backup history.
>
> **[0:45](https://www.linkedin.com/learning/windows-10-administration-3/reset-this-pc?u=76281980&t=45)** Ideally, this would be an external drive or a network drive something off of your computer.
>
> **[0:51](https://www.linkedin.com/learning/windows-10-administration-3/reset-this-pc?u=76281980&t=51)** But technically, we could use any drive that has a letter aside.
>
> **[0:55](https://www.linkedin.com/learning/windows-10-administration-3/reset-this-pc?u=76281980&t=55)** So I am going to use my volume E, which is an internal drive for me.
>
> **[1:01](https://www.linkedin.com/learning/windows-10-administration-3/reset-this-pc?u=76281980&t=61)** Then it may ask me do I want to automatically backup my files yes or no.
>
> **[1:06](https://www.linkedin.com/learning/windows-10-administration-3/reset-this-pc?u=76281980&t=66)** And it defaulted to on.
>
> **[1:08](https://www.linkedin.com/learning/windows-10-administration-3/reset-this-pc?u=76281980&t=68)** Under that we have more options, I'll click on more options.
>
> **[1:12](https://www.linkedin.com/learning/windows-10-administration-3/reset-this-pc?u=76281980&t=72)** And it's asking me how often I would like to backup my files, it defaulted to every hour.
>
> **[1:19](https://www.linkedin.com/learning/windows-10-administration-3/reset-this-pc?u=76281980&t=79)** And I'm going to stick with that.
>
> **[1:21](https://www.linkedin.com/learning/windows-10-administration-3/reset-this-pc?u=76281980&t=81)** And then it's asking me how long I should keep my backups.
>
> **[1:25](https://www.linkedin.com/learning/windows-10-administration-3/reset-this-pc?u=76281980&t=85)** It default to forever and forever seems like a long time to me.
>
> **[1:30](https://www.linkedin.com/learning/windows-10-administration-3/reset-this-pc?u=76281980&t=90)** I mean, no matter how large your drive is, if you keep backups forever, you've got a very good chance of eventually filling that drive.
>
> **[1:39](https://www.linkedin.com/learning/windows-10-administration-3/reset-this-pc?u=76281980&t=99)** And then backups will fail once the drive is full.
>
> **[1:42](https://www.linkedin.com/learning/windows-10-administration-3/reset-this-pc?u=76281980&t=102)** So I'm going to change this to what I think is a more reasonable six months.
>
> **[1:48](https://www.linkedin.com/learning/windows-10-administration-3/reset-this-pc?u=76281980&t=108)** So now I'm keeping backups six months.
>
> **[1:51](https://www.linkedin.com/learning/windows-10-administration-3/reset-this-pc?u=76281980&t=111)** Underneath that we have some options for which folders to backup.
>
> **[1:54](https://www.linkedin.com/learning/windows-10-administration-3/reset-this-pc?u=76281980&t=114)** And I can add an additional folder.
>
> **[1:56](https://www.linkedin.com/learning/windows-10-administration-3/reset-this-pc?u=76281980&t=116)** If I don't like the ones it has, it hasn't chosen every folder on my computer, instead, it shows in most of the ones where people most commonly keep their user files.
>
> **[2:08](https://www.linkedin.com/learning/windows-10-administration-3/reset-this-pc?u=76281980&t=128)** So lots of things under C colon user model, including downloads, favorites, contacts, one drive, desktop, et cetera.
>
> **[2:18](https://www.linkedin.com/learning/windows-10-administration-3/reset-this-pc?u=76281980&t=138)** Those are in fact places where I commonly keep files.
>
> **[2:22](https://www.linkedin.com/learning/windows-10-administration-3/reset-this-pc?u=76281980&t=142)** So for the most part, it did a good job of choosing things.
>
> **[2:26](https://www.linkedin.com/learning/windows-10-administration-3/reset-this-pc?u=76281980&t=146)** And if I scroll all the way down, it has the option to exclude certain folders.
>
> **[2:30](https://www.linkedin.com/learning/windows-10-administration-3/reset-this-pc?u=76281980&t=150)** So if there's certain folders that it thinks you should backup and you feel differently, you decide you don't want to backup those folders.
>
> **[2:38](https://www.linkedin.com/learning/windows-10-administration-3/reset-this-pc?u=76281980&t=158)** You can go here to exclude these folders and remove one of those folders from the automatic backups.
>
> **[2:45](https://www.linkedin.com/learning/windows-10-administration-3/reset-this-pc?u=76281980&t=165)** We also at the very bottom have the option to change drive.
>
> **[2:48](https://www.linkedin.com/learning/windows-10-administration-3/reset-this-pc?u=76281980&t=168)** So the first thing in this demo is we chose a drive.
>
> **[2:51](https://www.linkedin.com/learning/windows-10-administration-3/reset-this-pc?u=76281980&t=171)** If you ever change your mind about which drive you want to use, you do have the option to change to a different drive.
>
> **[2:58](https://www.linkedin.com/learning/windows-10-administration-3/reset-this-pc?u=76281980&t=178)** So now with all of the settings my files will be backed up once an hour and kept for six months.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4), go to (1)
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### Creating a system image backup
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-administration-3/creating-a-system-image-backup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-administration-3/creating-a-system-image-backup?u=76281980&t=0)** - In this section I'd like to talk about an option in Windows 10 to reset your PC.
>
> **[0:07](https://www.linkedin.com/learning/windows-10-administration-3/creating-a-system-image-backup?u=76281980&t=7)** So of to start menu, I'll go to settings, and then update and security.
>
> **[0:14](https://www.linkedin.com/learning/windows-10-administration-3/creating-a-system-image-backup?u=76281980&t=14)** And under recovery, the first option is reset this PC.
>
> **[0:18](https://www.linkedin.com/learning/windows-10-administration-3/creating-a-system-image-backup?u=76281980&t=18)** Reset this PC is a very aggressive way to fix problems.
>
> **[0:23](https://www.linkedin.com/learning/windows-10-administration-3/creating-a-system-image-backup?u=76281980&t=23)** It will basically delete all of the programs you have installed and possibly delete all of the files.
>
> **[0:31](https://www.linkedin.com/learning/windows-10-administration-3/creating-a-system-image-backup?u=76281980&t=31)** This could be a last resort in fighting a virus.
>
> **[0:34](https://www.linkedin.com/learning/windows-10-administration-3/creating-a-system-image-backup?u=76281980&t=34)** So if your antivirus software can't remove a virus, you could do the reset your PC, and hopefully that would remove the virus.
>
> **[0:43](https://www.linkedin.com/learning/windows-10-administration-3/creating-a-system-image-backup?u=76281980&t=43)** Basically it will uninstall all of your programs and possibly delete all of your files and leave Windows in the state it was in when you first installed it.
>
> **[0:53](https://www.linkedin.com/learning/windows-10-administration-3/creating-a-system-image-backup?u=76281980&t=53)** So I'll click get started.
>
> **[0:56](https://www.linkedin.com/learning/windows-10-administration-3/creating-a-system-image-backup?u=76281980&t=56)** Then I have the option to keep my files or remove everything.
>
> **[0:59](https://www.linkedin.com/learning/windows-10-administration-3/creating-a-system-image-backup?u=76281980&t=59)** So both of these options will remove all programs, my choice is whether or not to remove all files.
>
> **[1:07](https://www.linkedin.com/learning/windows-10-administration-3/creating-a-system-image-backup?u=76281980&t=67)** And I'm going to go with remove everything, then it's going to ask me if I want to do a cloud download or a local re-install.
>
> **[1:14](https://www.linkedin.com/learning/windows-10-administration-3/creating-a-system-image-backup?u=76281980&t=74)** So for reset this PC to work, it needs a copy of the windows installation media.
>
> **[1:21](https://www.linkedin.com/learning/windows-10-administration-3/creating-a-system-image-backup?u=76281980&t=81)** If you have that on a disc or on a USB drive, you could go with local re-install.
>
> **[1:27](https://www.linkedin.com/learning/windows-10-administration-3/creating-a-system-image-backup?u=76281980&t=87)** If you don't have a copy of the Windows install media handy, you could go with cloud download.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-administration-3/creating-a-system-image-backup?u=76281980&t=94)** It is a large download, it can get up to over four gigabytes.
>
> **[1:39](https://www.linkedin.com/learning/windows-10-administration-3/creating-a-system-image-backup?u=76281980&t=99)** I'm going to go with cloud download.
>
> **[1:41](https://www.linkedin.com/learning/windows-10-administration-3/creating-a-system-image-backup?u=76281980&t=101)** In the additional settings for me with my color scheme, the link to change settings is very difficult to see, but there is an option here to change settings.
>
> **[1:53](https://www.linkedin.com/learning/windows-10-administration-3/creating-a-system-image-backup?u=76281980&t=113)** So I'll click on that and I'm given three options.
>
> **[1:56](https://www.linkedin.com/learning/windows-10-administration-3/creating-a-system-image-backup?u=76281980&t=116)** Clean data, do I want to just remove the files?
>
> **[1:59](https://www.linkedin.com/learning/windows-10-administration-3/creating-a-system-image-backup?u=76281980&t=119)** Yes or no?
>
> **[2:00](https://www.linkedin.com/learning/windows-10-administration-3/creating-a-system-image-backup?u=76281980&t=120)** Delete files from all drives.
>
> **[2:03](https://www.linkedin.com/learning/windows-10-administration-3/creating-a-system-image-backup?u=76281980&t=123)** So if you have multiple drives, you could choose to only delete the files from the drive where Windows is installed, or you could choose to remove files from all drives.
>
> **[2:14](https://www.linkedin.com/learning/windows-10-administration-3/creating-a-system-image-backup?u=76281980&t=134)** And then the option to download and re-install Windows, which is typically going to be a yes.
>
> **[2:20](https://www.linkedin.com/learning/windows-10-administration-3/creating-a-system-image-backup?u=76281980&t=140)** Again, this is somewhat of a last resort and very aggressive thing to do.
>
> **[2:24](https://www.linkedin.com/learning/windows-10-administration-3/creating-a-system-image-backup?u=76281980&t=144)** And I don't want to reset my PC 'cause it's running perfectly fine.
>
> **[2:29](https://www.linkedin.com/learning/windows-10-administration-3/creating-a-system-image-backup?u=76281980&t=149)** So I'm going to click cancel, and I suggest that you do the same.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (5)
> **Prerequisites:** install (4)
> **Definitions:** is a  (2), is an  (1)
> **UI Navigation:** go to (1), click on (1)
> **Env Vars:** usb (1)
> **Speakers:** - in (1)

#### Overview of backups in Windows 10
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=0)** - [Instructor] Now I'd like to talk about some additional options on backing up Windows 10.
>
> **[0:06](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=6)** So at the start menu I'll go to settings, update and security.
>
> **[0:13](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=13)** Back up.
>
> **[0:15](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=15)** And I want to look at the option at the bottom, looking for an older backup, and it talks about go to back up and restore Windows 7.
>
> **[0:23](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=23)** This is a tool that was introduced in Windows 7, but has changed a little in Windows 10.
>
> **[0:30](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=30)** And it's also a very good tool, so I'd like to show it to you.
>
> **[0:34](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=34)** So I'll click on go to back up and restore Windows 7, and then I'll click on the option to set up back up.
>
> **[0:41](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=41)** The first thing it's asking me is where I would like to save my backups, and it gives me a warning saying it could not find any drives.
>
> **[0:50](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=50)** This is because I do not have a CD or DVD burner connected to this computer.
>
> **[0:54](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=54)** If you do have a DVD burner connected, you probably will see that as an option.
>
> **[0:59](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=59)** And you could put your backup there, that's fine.
>
> **[1:02](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=62)** But because I don't have that drive, I'm going to have to put it on the network, which is fine with me.
>
> **[1:06](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=66)** That's kind of where I wanted it anyway.
>
> **[1:08](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=68)** So I'm going to click on save on a network.
>
> **[1:11](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=71)** Then it's going to ask me for the path to the network share, and also a username and password that can be used to access that share.
>
> **[1:22](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=82)** Once I have my share ready to go, I can click next.
>
> **[1:25](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=85)** Then I'm given two options.
>
> **[1:27](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=87)** The first one is to let Windows choose what to back up, and you could do that.
>
> **[1:31](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=91)** That's a perfectly fine option, but I like to have control over things.
>
> **[1:35](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=95)** So I'm going to go with the radio option for let me choose, which will let me choose what is backed up.
>
> **[1:41](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=101)** I'll hit next.
>
> **[1:42](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=102)** And then it gives me a list of several files and groups of files.
>
> **[1:46](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=106)** And by default it has checked that it's going to back up the libraries for me, the user that's currently logged in that's in bold face.
>
> **[1:55](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=115)** Then also another user who has logged into this machine, and even backup data for newly created users, that is users who were created but have never logged in to this Windows 10 PC.
>
> **[2:07](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=127)** You may or may not want to back up their data.
>
> **[2:09](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=129)** It's probably going to be a very small amount of data.
>
> **[2:12](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=132)** Then below that I have the option for the entire C drive, or I can even get down into individual files and folders inside of the C drive.
>
> **[2:22](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=142)** We could back those up.
>
> **[2:23](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=143)** By default, notice it's not backing up any of that.
>
> **[2:27](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=147)** So it's just doing the documents connected to my account by default.
>
> **[2:32](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=152)** And then all the way at the bottom is a very important checkbox that is checked by default, include the system image of drives, the partition of the windows recovery environment, and this creates what's called a system image.
>
> **[2:47](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=167)** It is a copy of the drives and devices that are required to run Windows.
>
> **[2:53](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=173)** So if your computer ever completely crashes and you have to wipe it and start over, you could use this backup to restore all of your settings, device drivers, Windows update, everything like that.
>
> **[3:07](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=187)** And that is the best part of all of this.
>
> **[3:10](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=190)** So the stuff on top about backing up my documents, there's lots of different ways to do that.
>
> **[3:16](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=196)** But as far as backing up the system information, I feel that this tool, the back up and restore, is the best way to go for that.
>
> **[3:26](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=206)** So I'll click next.
>
> **[3:28](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=208)** And on this last page I have a few different options.
>
> **[3:31](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=211)** I can change the schedule.
>
> **[3:32](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=212)** So the schedule defaulted to every Sunday at 7:00 PM.
>
> **[3:37](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=217)** I can click change schedule, and I'll get a very simple interface where I can change it to daily, weekly, or monthly, and then choose additional options based on that.
>
> **[3:49](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=229)** It also has a note that EFS certificates are not included in this backup.
>
> **[3:54](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=234)** So I do have a file on here that's encrypted using EFS that requires a certificate to unencrypt.
>
> **[4:02](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=242)** Windows will not back up that certificate automatically.
>
> **[4:06](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=246)** The reason for that is the encrypted file will be backed up.
>
> **[4:09](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=249)** So we don't want to store the encrypted file and the certificate needed to decrypt it.
>
> **[4:15](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=255)** We don't want to store both of those in the same place, because that would reduce our overall security.
>
> **[4:21](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=261)** So this backup is going to back up the encrypted files, but it will not back up the certificates needed to decrypt them.
>
> **[4:29](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=269)** And then we can just click save settings and run backup.
>
> **[4:32](https://www.linkedin.com/learning/windows-10-administration-3/overview-of-backups-in-windows-10?u=76281980&t=272)** And on Sunday at 7:00 PM everything will be backed up.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), default, (2), default. (1), this. (1), interface (1)
> **UI Navigation:** go to (3), click on (3), checkbox (1)
> **Env Vars:** dvd (2), efs (2)
> **Definitions:** is a  (3)
> **CLI Commands:** find (1), cd (1)
> **Ports:** :00 (2)
> **Warnings:** warning (1), note that (1)
> **Prerequisites:** set up (1), required to (1)

#### Best practices for backups and restores
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-administration-3/best-practices-for-backups-and-restores?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-administration-3/best-practices-for-backups-and-restores?u=76281980&t=0)** - [Narrator] In this section, we're going to talk about creating an image of your Windows 10 PC.
>
> **[0:06](https://www.linkedin.com/learning/windows-10-administration-3/best-practices-for-backups-and-restores?u=76281980&t=6)** This image will contain all of your documents as well as your applications and the Windows 10 operating system files.
>
> **[0:15](https://www.linkedin.com/learning/windows-10-administration-3/best-practices-for-backups-and-restores?u=76281980&t=15)** From the start menu, I'd like to open up the backup and restore control panel.
>
> **[0:20](https://www.linkedin.com/learning/windows-10-administration-3/best-practices-for-backups-and-restores?u=76281980&t=20)** So I'll just type in backup.
>
> **[0:22](https://www.linkedin.com/learning/windows-10-administration-3/best-practices-for-backups-and-restores?u=76281980&t=22)** And one of the options that will come up is backup and restore control panel.
>
> **[0:27](https://www.linkedin.com/learning/windows-10-administration-3/best-practices-for-backups-and-restores?u=76281980&t=27)** It also notes that it was originally designed in Windows 7.
>
> **[0:33](https://www.linkedin.com/learning/windows-10-administration-3/best-practices-for-backups-and-restores?u=76281980&t=33)** In this interface to the left hand side I have the option to create a system image.
>
> **[0:39](https://www.linkedin.com/learning/windows-10-administration-3/best-practices-for-backups-and-restores?u=76281980&t=39)** The first thing is going to ask me is where would I like to save the backup?
>
> **[0:42](https://www.linkedin.com/learning/windows-10-administration-3/best-practices-for-backups-and-restores?u=76281980&t=42)** Or in other words, where would I like to create the image?
>
> **[0:45](https://www.linkedin.com/learning/windows-10-administration-3/best-practices-for-backups-and-restores?u=76281980&t=45)** The image will be a fairly large file.
>
> **[0:48](https://www.linkedin.com/learning/windows-10-administration-3/best-practices-for-backups-and-restores?u=76281980&t=48)** So you want to select someplace where you have a large amount of disc space.
>
> **[0:52](https://www.linkedin.com/learning/windows-10-administration-3/best-practices-for-backups-and-restores?u=76281980&t=52)** We can put it on a hard drive on one or more DVDs or what I'm going to do in a network location.
>
> **[1:01](https://www.linkedin.com/learning/windows-10-administration-3/best-practices-for-backups-and-restores?u=76281980&t=61)** When I hit select it'll prompt me not only for the path to the share but also a username and password to access that share.
>
> **[1:13](https://www.linkedin.com/learning/windows-10-administration-3/best-practices-for-backups-and-restores?u=76281980&t=73)** Once I have that inputted I can hit next.
>
> **[1:15](https://www.linkedin.com/learning/windows-10-administration-3/best-practices-for-backups-and-restores?u=76281980&t=75)** And it's asking me which drives I would like to include in the backup.
>
> **[1:19](https://www.linkedin.com/learning/windows-10-administration-3/best-practices-for-backups-and-restores?u=76281980&t=79)** It doesn't give me a whole lot of choices.
>
> **[1:21](https://www.linkedin.com/learning/windows-10-administration-3/best-practices-for-backups-and-restores?u=76281980&t=81)** The system partition is always going to be backed up I can't turn that on or off.
>
> **[1:26](https://www.linkedin.com/learning/windows-10-administration-3/best-practices-for-backups-and-restores?u=76281980&t=86)** C is always going to be backed up.
>
> **[1:29](https://www.linkedin.com/learning/windows-10-administration-3/best-practices-for-backups-and-restores?u=76281980&t=89)** Can't turn that on or off.
>
> **[1:31](https://www.linkedin.com/learning/windows-10-administration-3/best-practices-for-backups-and-restores?u=76281980&t=91)** And the recovery partition is always going to be backed up.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-administration-3/best-practices-for-backups-and-restores?u=76281980&t=94)** Can't turn that on or off.
>
> **[1:36](https://www.linkedin.com/learning/windows-10-administration-3/best-practices-for-backups-and-restores?u=76281980&t=96)** My only real choice is my extra drive my E drive.
>
> **[1:41](https://www.linkedin.com/learning/windows-10-administration-3/best-practices-for-backups-and-restores?u=76281980&t=101)** I can choose to include that or not include that.
>
> **[1:45](https://www.linkedin.com/learning/windows-10-administration-3/best-practices-for-backups-and-restores?u=76281980&t=105)** And I'll hit next.
>
> **[1:47](https://www.linkedin.com/learning/windows-10-administration-3/best-practices-for-backups-and-restores?u=76281980&t=107)** It's saying it's going to take up to 22 gigabytes of disc space.
>
> **[1:50](https://www.linkedin.com/learning/windows-10-administration-3/best-practices-for-backups-and-restores?u=76281980&t=110)** I really don't have much installed on my PC.
>
> **[1:54](https://www.linkedin.com/learning/windows-10-administration-3/best-practices-for-backups-and-restores?u=76281980&t=114)** Certainly if you have hundreds of gigabytes of applications or documents your backup will take a much larger amount of space.
>
> **[2:04](https://www.linkedin.com/learning/windows-10-administration-3/best-practices-for-backups-and-restores?u=76281980&t=124)** After this backup is complete, remember that you will be limited as to where you can restore this image to.
>
> **[2:11](https://www.linkedin.com/learning/windows-10-administration-3/best-practices-for-backups-and-restores?u=76281980&t=131)** Ideally you would restore the image to the same computer that you took the backup from.
>
> **[2:18](https://www.linkedin.com/learning/windows-10-administration-3/best-practices-for-backups-and-restores?u=76281980&t=138)** Because the image contains device drivers and various operating system files that are unique to your computer when you restore it, you'll need to restore it to hardware that's at least very similar to where you took the backup from.
>
> **[2:34](https://www.linkedin.com/learning/windows-10-administration-3/best-practices-for-backups-and-restores?u=76281980&t=154)** Ideally restoring on the same machine.

> [!info]- Semantic Content
>
> **Code Keywords:** from. (2), interface (1)
> **Definitions:** in other words (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)


### 11. Troubleshooting

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Using log files to troubleshoot Windows 10
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-administration-3/using-log-files-to-troubleshoot-windows-10?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-administration-3/using-log-files-to-troubleshoot-windows-10?u=76281980&t=0)** - [Narrator] Now I'd like to talk about troubleshooting Windows 10.
>
> **[0:04](https://www.linkedin.com/learning/windows-10-administration-3/using-log-files-to-troubleshoot-windows-10?u=76281980&t=4)** And typically in a troubleshooting situation, the first thing I do is look at the logs.
>
> **[0:09](https://www.linkedin.com/learning/windows-10-administration-3/using-log-files-to-troubleshoot-windows-10?u=76281980&t=9)** So off the start menu, I'll type in event and that will bring up Event Viewer.
>
> **[0:16](https://www.linkedin.com/learning/windows-10-administration-3/using-log-files-to-troubleshoot-windows-10?u=76281980&t=16)** The Event Viewer in Windows 10 is very similar to that in Windows 7 and Windows 8.
>
> **[0:21](https://www.linkedin.com/learning/windows-10-administration-3/using-log-files-to-troubleshoot-windows-10?u=76281980&t=21)** And also very similar to the Event Viewer you would see on a Windows server.
>
> **[0:26](https://www.linkedin.com/learning/windows-10-administration-3/using-log-files-to-troubleshoot-windows-10?u=76281980&t=26)** On the left hand side we have the option for Windows Logs, I'll expand that.
>
> **[0:31](https://www.linkedin.com/learning/windows-10-administration-3/using-log-files-to-troubleshoot-windows-10?u=76281980&t=31)** The three most common logs we look at are the application log, which would give us information about the various desktop applications we are running.
>
> **[0:41](https://www.linkedin.com/learning/windows-10-administration-3/using-log-files-to-troubleshoot-windows-10?u=76281980&t=41)** The security log which tells us about successful log ins and failed log ins and also successful and failed uses of certain accounts and security objects.
>
> **[0:55](https://www.linkedin.com/learning/windows-10-administration-3/using-log-files-to-troubleshoot-windows-10?u=76281980&t=55)** The third log we commonly look at is the system log which will tell us about hardware issues and things about the various services that Windows runs.
>
> **[1:06](https://www.linkedin.com/learning/windows-10-administration-3/using-log-files-to-troubleshoot-windows-10?u=76281980&t=66)** On the right hand side, I have an option to filter the current log, so I'll click on that.
>
> **[1:13](https://www.linkedin.com/learning/windows-10-administration-3/using-log-files-to-troubleshoot-windows-10?u=76281980&t=73)** I'm usually most focused on critical and error so I hit okay.
>
> **[1:20](https://www.linkedin.com/learning/windows-10-administration-3/using-log-files-to-troubleshoot-windows-10?u=76281980&t=80)** And then now my log is filtered to just the errors and the critical items.
>
> **[1:25](https://www.linkedin.com/learning/windows-10-administration-3/using-log-files-to-troubleshoot-windows-10?u=76281980&t=85)** In that same interface, filter current log, there is the option for key words but unfortunately we can't just type in a specific key word.
>
> **[1:35](https://www.linkedin.com/learning/windows-10-administration-3/using-log-files-to-troubleshoot-windows-10?u=76281980&t=95)** We have to go with the predefined key words they are using.
>
> **[1:40](https://www.linkedin.com/learning/windows-10-administration-3/using-log-files-to-troubleshoot-windows-10?u=76281980&t=100)** I've always felt this was kind of a limitation but I'll cancel this and then two items under where I was doing filter current log we have Find.
>
> **[1:52](https://www.linkedin.com/learning/windows-10-administration-3/using-log-files-to-troubleshoot-windows-10?u=76281980&t=112)** And Find will allow us to search for any word we are interest in.
>
> **[1:58](https://www.linkedin.com/learning/windows-10-administration-3/using-log-files-to-troubleshoot-windows-10?u=76281980&t=118)** And it will highlight the individual items in the log one by one as we do find next.
>
> **[2:05](https://www.linkedin.com/learning/windows-10-administration-3/using-log-files-to-troubleshoot-windows-10?u=76281980&t=125)** So this has the advantage of being able to use any key word you want however it won't exactly filter the log, it's more of stepping through log entries one by one.
>
> **[2:17](https://www.linkedin.com/learning/windows-10-administration-3/using-log-files-to-troubleshoot-windows-10?u=76281980&t=137)** I'm a big proponent of using logs and troubleshooting.
>
> **[2:21](https://www.linkedin.com/learning/windows-10-administration-3/using-log-files-to-troubleshoot-windows-10?u=76281980&t=141)** First of all its always good to get more information about a problem and the log is the best place to do that.
>
> **[2:29](https://www.linkedin.com/learning/windows-10-administration-3/using-log-files-to-troubleshoot-windows-10?u=76281980&t=149)** And secondly, looking at the logs isn't going to make anything worse.
>
> **[2:34](https://www.linkedin.com/learning/windows-10-administration-3/using-log-files-to-troubleshoot-windows-10?u=76281980&t=154)** So one of the worst things we can do in troubleshooting is to misunderstand the problem and then jump right in and start doing things and we end up making things worse.
>
> **[2:44](https://www.linkedin.com/learning/windows-10-administration-3/using-log-files-to-troubleshoot-windows-10?u=76281980&t=164)** If you come to the logs first, you read these items, you understand these items, that should significantly decrease the chances of us misunderstanding what's going on and therefore making the situation worse.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3), make (1)
> **Code Keywords:** interface (1)
> **UI Navigation:** click on (1)
> **Analogies:** similar to (1)
> **Speakers:** - [narrator] (1)

#### Using Resource Monitor to diagnose performance bottlenecks
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=0)** - [Instructor] In this section, we're going to talk about troubleshooting performance problems in Windows 10.
>
> **[0:05](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=5)** And when performance problems are related to hardware issues, it's almost always one of four categories of hardware and Windows 10 supplies us one tool that will allow us to monitor all four areas.
>
> **[0:22](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=22)** So off the Start menu, I'll type in Resource and then I'll click on Resource Monitor.
>
> **[0:30](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=30)** And we'll see that I'm immediately given some information about CPU, Disk, Network and Memory.
>
> **[0:37](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=37)** And those are our four most important categories.
>
> **[0:40](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=40)** Typically when you have a hardware bottleneck, it's one of those four categories.
>
> **[0:45](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=45)** We'll notice we have a list of processes that are running here on the left.
>
> **[0:50](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=50)** And to the right, we have some graphs.
>
> **[0:53](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=53)** In the list of processes, there's a option to check each one.
>
> **[0:59](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=59)** And so if we go ahead and check one of those, I'm going to hit the checkbox next to System, we notice first of all that System moved all the way to the top.
>
> **[1:10](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=70)** And also in our graphs on the right, we now have an orange line.
>
> **[1:15](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=75)** So whereas the green graphs represent all of the hardware utilization by everything going on on the computer, the orange area represents only what's being attributed to the processes that are checked.
>
> **[1:29](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=89)** And therefore, we can see that in the Disk graph, the green line and the orange line are pretty similar.
>
> **[1:37](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=97)** Meaning that my checked process, in this case, the system process is responsible for most of the disk activity.
>
> **[1:46](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=106)** So we can use this technique to narrow down which process is utilizing the majority of a particular resource.
>
> **[1:55](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=115)** Looking at the five tabs across the top, the first is Overview, which gives us details about CPU, disk, network and memory all in one view.
>
> **[2:06](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=126)** Then we can use the other tabs to get more details about any one of those categories.
>
> **[2:11](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=131)** So on the CPU tab, I can see several counters, including average CPU and that's typically the most interesting one.
>
> **[2:19](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=139)** So if we click on the Average CPU column, it will sort by that column.
>
> **[2:25](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=145)** And we can see which processes are using the most CPU.
>
> **[2:30](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=150)** However, system is always at the top because I check that one.
>
> **[2:34](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=154)** Next is memory.
>
> **[2:36](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=156)** On the Memory tab, we see several counters and some of these names may not be 100% intuitive.
>
> **[2:43](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=163)** We see an option for commit kilobytes.
>
> **[2:48](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=168)** And that is the number of kilobytes that a process is using virtual memory.
>
> **[2:54](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=174)** Then we see working set and working set is the amount of physical memory being used.
>
> **[3:00](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=180)** So the difference between commit and working is the difference between virtual memory and physical memory.
>
> **[3:07](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=187)** The working set or the physical memory is typically the most useful counter and typically that's the one I sort on first.
>
> **[3:15](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=195)** The next two, shareable and private are two counters whose names provide some clues as to what they do.
>
> **[3:23](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=203)** The shareable counter measures the amount of memory in any process that can be shared with other processes.
>
> **[3:30](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=210)** So typically when two processes need to communicate with one another, they do so through a shared memory space.
>
> **[3:36](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=216)** The last column is private and that is memory that is exclusive to one process and is not shared with other processes.
>
> **[3:44](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=224)** If you notice, if you take the value of private and shareable, it comes out to exactly the same number as working set.
>
> **[3:51](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=231)** So for the one I have checked, system, private is 20, shareable is 108.
>
> **[3:57](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=237)** So the working set is 128.
>
> **[3:59](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=239)** The working set value will always be the sum of the shareable column and the private column.
>
> **[4:06](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=246)** Our next tab, Disk, shows us various information about our disk and which processes have the highest disk activity.
>
> **[4:15](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=255)** It is broken down by read and write.
>
> **[4:18](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=258)** But the most useful one is probably total, which is a combination of the read and the write.
>
> **[4:25](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=265)** And then our last tab is Network where we have send, receive and total and again, total's probably the most useful.
>
> **[4:33](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=273)** Although, if we saw something with a really high send value or a really high receive value, that could be interesting but typically, I'm going to look at total first.
>
> **[4:42](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=282)** So again, when troubleshooting hardware issues, it's typically not all of our hardware that's giving us a problem, it's typically one area and that area is either CPU, memory, disk or network.
>
> **[4:55](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=295)** And one of the first things you want to do is figure out which of those is the problem.
>
> **[4:59](https://www.linkedin.com/learning/windows-10-administration-3/using-resource-monitor-to-diagnose-performance-bottlenecks?u=76281980&t=299)** And this tool, Resource Monitor in Windows 10, is a great way to do that.

> [!info]- Semantic Content
>
> **Env Vars:** cpu (7)
> **Code Keywords:** private (5), case, (1)
> **UI Navigation:** click on (2), checkbox (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### Troubleshooting network problems
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-network-problems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-network-problems?u=76281980&t=0)** - [Instructor] In this section, I'd like to talk about troubleshooting network issues in Windows 10.
>
> **[0:06](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-network-problems?u=76281980&t=6)** And particularly looking at a new feature in Windows 10, that allows us to gather a lot of information about the network.
>
> **[0:13](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-network-problems?u=76281980&t=13)** This is a command line tool.
>
> **[0:15](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-network-problems?u=76281980&t=15)** And so I'll need to open up a command prompt with administrative privileges.
>
> **[0:20](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-network-problems?u=76281980&t=20)** So off the start menu, I'll type in CMD, that'll bring up the option for command prompt.
>
> **[0:26](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-network-problems?u=76281980&t=26)** I'll right click on that and select run as administrator.
>
> **[0:30](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-network-problems?u=76281980&t=30)** On the user account control, go ahead and hit yes.
>
> **[0:35](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-network-problems?u=76281980&t=35)** And that gives us our command prompt with administrative privileges.
>
> **[0:40](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-network-problems?u=76281980&t=40)** Command I'd like to type in is, net SH space WLAN space show and space WLAN report.
>
> **[0:53](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-network-problems?u=76281980&t=53)** That last part WLAN report is all one word.
>
> **[0:57](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-network-problems?u=76281980&t=57)** Hit enter off of that.
>
> **[0:59](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-network-problems?u=76281980&t=59)** And fairly quickly it says the report was written to this path.
>
> **[1:04](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-network-problems?u=76281980&t=64)** And so I'm going to navigate to that path to look at that report.
>
> **[1:09](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-network-problems?u=76281980&t=69)** So there we see WLAN report latest dot HTML.
>
> **[1:12](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-network-problems?u=76281980&t=72)** I'll double click on that one.
>
> **[1:15](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-network-problems?u=76281980&t=75)** And I get a report.
>
> **[1:17](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-network-problems?u=76281980&t=77)** The top part of it is a graph that shows things like disconnected from the network or a limited connectivity.
>
> **[1:25](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-network-problems?u=76281980&t=85)** I haven't had any of those events in the past 48 hours.
>
> **[1:28](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-network-problems?u=76281980&t=88)** So mine is not very interesting.
>
> **[1:31](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-network-problems?u=76281980&t=91)** If we scroll down, we see some basic information about the computer and the operating system.
>
> **[1:38](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-network-problems?u=76281980&t=98)** If we continue to scroll down, we see information about the user and the network adapters, continuing to scroll down, we see the output of IPconfig all the output of net SH WLAN show all the output of the certificate store and then information about wireless sessions.
>
> **[2:02](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-network-problems?u=76281980&t=122)** And I don't have any wireless adapters connected.
>
> **[2:04](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-network-problems?u=76281980&t=124)** So for me, that's blank.
>
> **[2:06](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-network-problems?u=76281980&t=126)** You might see some additional information.
>
> **[2:09](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-network-problems?u=76281980&t=129)** So overall, this is very good information.
>
> **[2:10](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-network-problems?u=76281980&t=130)** The majority of it could be accessed in other ways, but having all of this information and one report can be particularly helpful in a troubleshooting scenario where maybe an end-user would have difficulty running all of these tools on their own.
>
> **[2:28](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-network-problems?u=76281980&t=148)** So if you can explain to a end user how to get to an administrative command prompt and have them run the command net SH WLAN show WLAN report, then they could generate this report and email it to you.
>
> **[2:44](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-network-problems?u=76281980&t=164)** It would give you a lot of information to help with your troubleshooting in Windows 10.
>
> **[2:49](https://www.linkedin.com/learning/windows-10-administration-3/troubleshooting-network-problems?u=76281980&t=169)** Again, this is a new feature in Windows 10, and again, most of this information available other places, but very nice and convenient to have it all in one location.

> [!info]- Semantic Content
>
> **Env Vars:** wlan (7), cmd (1), html (1)
> **UI Navigation:** scroll down (3), click on (2), navigate to (1)
> **Tools:** command prompt (4), command line (1)
> **Definitions:** is a  (3)
> **Code Keywords:** continue (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-administration-3/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-administration-3/next-steps?u=76281980&t=0)** - [Martin] I hope you've enjoyed my course on Windows 10 Administration, I've certainly enjoyed creating the course.
>
> **[0:07](https://www.linkedin.com/learning/windows-10-administration-3/next-steps?u=76281980&t=7)** I'd like to leave you with some ideas on some next steps, things you can do to continue learning.
>
> **[0:14](https://www.linkedin.com/learning/windows-10-administration-3/next-steps?u=76281980&t=14)** Some courses we have here on [lynda.com](https://lynda.com) that you might be interested, include Windows 10 Tips and Tricks with David Rivers.
>
> **[0:24](https://www.linkedin.com/learning/windows-10-administration-3/next-steps?u=76281980&t=24)** If you're planning to run the latest version of Office on Windows 10, you might want to check out Office 2016 and Office 365 New Features also by David Rivers.
>
> **[0:37](https://www.linkedin.com/learning/windows-10-administration-3/next-steps?u=76281980&t=37)** If you're planning on running Windows 10 in a virtual environment, you may be interested in Virtualization Essential Training and that one's by me.
>
> **[0:48](https://www.linkedin.com/learning/windows-10-administration-3/next-steps?u=76281980&t=48)** If you're planning to run Windows 10 in a small office or home network, a good course for that is Setting Up a Small-Office Network also by me.
>
> **[0:59](https://www.linkedin.com/learning/windows-10-administration-3/next-steps?u=76281980&t=59)** So again, thank you and I hope you've enjoyed the course.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (1)
> **URLs:** [lynda.com](https://lynda.com) (1)
> **Speakers:** - [martin] (1)


## Instructor

- [[Martin Guidry]]

## Skills Covered

- Windows 10

## Path Context

### In [[Optimizing Enterprise Security and Productivity Using Microsoft 365]]
← [[Microsoft 365- Administration]] | **4 of 11** | [[Microsoft Entra ID Fundamentals]] →

### In [[Explore a Career in IT Support]]
← [[Windows 10- Supporting Users Essential Training]] | **5 of 11** | [[Windows 10- Security]] →

## Appears In

- [[Optimizing Enterprise Security and Productivity Using Microsoft 365]]
- [[Explore a Career in IT Support]]

## Related Courses

_Courses sharing skills:_

- [[Windows 10 for IT Support- Advanced Troubleshooting]] — Windows 10
- [[Windows 10- Manage and Maintain Windows 10]] — Windows 10
- [[Windows 10 Configure And Support Core Services]] — Windows 10
- [[Windows 10 for IT Support- Troubleshooting Basics]] — Windows 10
- [[Windows 10- Security]] — Windows 10

---

[↑ Back to top](#)