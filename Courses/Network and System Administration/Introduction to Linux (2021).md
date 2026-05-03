---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: introduction-to-linux-2021
url: "https://www.linkedin.com/learning/introduction-to-linux-2021"
duration_minutes: 56
duration: 56m
level: Beginner
updated: 12/15/2023
learners: 23412
skills:
  - Linux
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQFTYWjeOz37Ew/learning-public-crop_675_1200/B4EZmgXaUMHIAc-/0/1759332116036?e=2147483647&amp;v=beta&amp;t=9Wz3ip9LSed9oTATrdwyn7nffUSm1JuMhZtCGZOzcXU"
linkedin_topic: Network and System Administration
learning_paths:
  - '[[Network Automation Professional Certificate by Arista Networks]]'
  - '[[Getting Started with Linux]]'
prev_courses:
  - '[[Python Quick Start]]'
  - null
next_courses:
  - '[[NetOps (DevOps for Network Engineers)- Automating Networks]]'
  - '[[Linux- Overview and Installation]]'
path_nav: '[{"path":"Network Automation Professional Certificate by Arista Networks","position":3,"total":6,"prev":"Python Quick Start","next":"NetOps (DevOps for Network Engineers)- Automating Networks"},{"path":"Getting Started with Linux","position":1,"total":3,"prev":null,"next":"Linux- Overview and Installation"}]'
path_count: 2
tags:
  - course
  - topic/database-management
  - topic/devops
  - topic/network-and-system-administration
  - skill/linux
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Network%20and%20System%20Administration/Introduction%20to%20Linux%20(2021).md)

![Introduction to Linux (2021)](https://media.licdn.com/dms/image/v2/D4E0DAQFTYWjeOz37Ew/learning-public-crop_675_1200/B4EZmgXaUMHIAc-/0/1759332116036?e=2147483647&amp;v=beta&amp;t=9Wz3ip9LSed9oTATrdwyn7nffUSm1JuMhZtCGZOzcXU)

# Introduction to Linux (2021)

> With so many technical terms, cultural quirks, and options to pursue, getting started with Linux can seem overwhelming. In this course, instructor Scott Simpson covers the fundamentals of what you need to know in order to make smart choices about learning Linux. Scott discusses the Linux kernel, the software that allows you to interact with a computer’s hardware. He explains desktop environments, 

> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-linux-2021) | 56m | Beginner | 23K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Learning Linux](#learning-linux)
  - [What is Linux and where do I start?](#what-is-linux-and-where-do-i-start)
- [**1. Linux Fundamentals**](#1-linux-fundamentals) (8 videos)
  - [The kernel](#the-kernel)
  - [Terminal and desktops](#terminal-and-desktops)
  - [Standard tools](#standard-tools)
  - [Software and packages](#software-and-packages)
  - [The Linux file system](#the-linux-file-system)
  - [User and system security](#user-and-system-security)
  - [Choosing a Linux distribution](#choosing-a-linux-distribution)
  - [Planning your system](#planning-your-system)
- [**2. Developing your knowledge**](#2-developing-your-knowledge) (2 videos)
  - [Building your skills](#building-your-skills)
  - [Finding and asking for help](#finding-and-asking-for-help)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Learning Linux](https://www.linkedin.com/learning/introduction-to-linux-2021/learning-linux?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-linux-2021/learning-linux?u=76281980&t=0)** - [Scott] Getting started with [[Linux]] can seem daunting. It's a whole operating system, a whole culture, a lot of technical stuff and there are many choices to make large and small. And when you're just getting started, it can be hard to even get a good idea of where to begin and to know what questions to ask. I'm Scott Simpson and in this [[LinkedIn]] learning course, I'll introduce the basics of Linux and help you decide how to get started learning about Linux. Many people have strong preferences about how Linux should be learned, used and taught. And most of those people have very specific experience with a particular task or environment. These opinions aren't necessarily wrong but they may not be right for you. So let's step back for a moment and take a look at the bigger picture with a broad high-level look at Linux then we'll explore what you'll need to think about and what you'll need to prepare in order to get started on your Linux adventure. So if you're ready to jump into learning about Linux, let's go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (7), [[LinkedIn]] (1)
> **Prerequisites:** getting started (2), you'll need (2)
> **CLI Commands:** make (1)
> **Analogies:** picture (1)
> **Speakers:** - [scott] (1)

#### [What is Linux and where do I start?](https://www.linkedin.com/learning/introduction-to-linux-2021/what-is-linux-and-where-do-you-start?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-linux-2021/what-is-linux-and-where-do-you-start?u=76281980&t=0)** - [Instructor] [[Linux]] is the name we give to operating systems that are built around the Linux kernel. There's no single Linux operating system, and operating systems that are based on the Linux kernel are referred to as Linux distributions. Linux is based on the idea of free and open source software, software whose source code we can view, edit, and change to suit our needs. The Linux world is enormous, and Linux can be used for everything from running huge global networks to controlling electronic projects like a Raspberry Pi. Linux can be your everyday desktop environment at home or at school, your [[Software Development]] platform at work, and it even runs some of the world's largest and most powerful supercomputers. All of these applications share the same basic components, a kernel, a user space, files and resources, and so on. If that sounds complicated, don't worry. We'll take a look at each of these ideas and components in more detail later on, and I'll recommend courses for you to explore in order to dive even deeper, if you're interested to do so. Linux runs in a wide array of places, and that means that there are many different kinds of people who have many different jobs or roles where they use Linux. For example, I'm primarily a system administrator. My skillset in Linux revolves around setting up, configuring, and maintaining Linux systems that are intended to be used for specific purposes. Many people work with the source code of the kernel directly as software developers or as [[Hardware]] developers,
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-linux-2021/what-is-linux-and-where-do-you-start?u=76281980&t=95)** to enable the kernel to work with new hardware and new technologies. Another large group of people who use Linux are developers who work outside the kernel, to create software for productivity, like [[Microsoft Office|office]] suites, image editors, chat apps, and more. Many software developers use Linux for their coding and programming work. And an enormous amount of the services we use on the web are hosted on Linux servers. And many people use Linux to get other creative and productive work done. These are writers, video editors, artists, musicians, scientists, analysts, and all kinds of professionals, hobbyists, and explorers, who may not care about the technical details of the kernel or of software development, but who want to use free and open source software and operating systems. Linux is for all of these people because Linux is for everybody. Chances are you're here because you're interested to learn about using Linux for one reason or another. You may be an aspiring kernel developer, a system administrator coming to Linux from another operating system, a software developer who needs to become familiar with working in the Linux environment, or someone who wants to build robots or home automation or self-driving cars. Or you may be someone who wants to focus on using software tools on the desktop and not worry about anything under the hood. In any case, the goal this course is to give you an introduction to what Linux is and to provide you some recommendations for extending your learning. There aren't many prerequisites for this course,
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-linux-2021/what-is-linux-and-where-do-you-start?u=76281980&t=188)** aside from having a general high-level understanding of how to use a computer. If you have experience using [[Windows]] or macOS, those skills can transfer over to a Linux environment pretty easily. We won't be installing Linux in this course, so you don't need to prepare your computer or set anything up. I'll be using an installation of Linux to show you a few things, and I'll point out resources along the way that will get you started installing and using Linux when you've decided which path to take and where your first steps will go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (27), [[Software Development]] (2), [[Hardware]] (2), [[Microsoft Office|Office]] (1), [[Windows]] (1)
> **Exercise Files:** source code (2)
> **Code Identifiers:** macos (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 1. Linux Fundamentals

[↑ Back to Table of Contents](#table-of-contents)

#### [The kernel](https://www.linkedin.com/learning/introduction-to-linux-2021/the-kernel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-linux-2021/the-kernel?u=76281980&t=0)** - [Narrator] While it's common to think about [[Linux]] as an operating system. It's more precise to understand Linux as the kernel of an operating system. All operating systems have a kernel. Though we don't often talk about them as much as we do with the Linux kernel. The Linux kernel is an open source program which has been built and modified over the years by thousands of contributors. It was first released by Linus Torvalds in 1991. And it was created in response to restrictive licensing that burdened other operating systems at the time. The license that applies to the Linux kernel allows it to be used and distributed freely. And this has resulted in the Linux kernel being made available in a large variety of Linux distributions, which we'll talk about later on. A kernel is software that communicates with the computer's [[Hardware]] in order to give programs and therefore users access to these resources so they can do what they need to do. A kernel can run on its own, though it's not very useful without programs communicating with it. And we can't run programs without a kernel taking requests and information and translating them to the systems hardware. The kernel is what allows us to use a computer but it's only part of a working operating system. We can think about this using three levels. First there's the hardware, the memory, the CPU, the storage, the network card, and so on. The kernel communicates with this hardware and presents a series of system calls or syscalls to programs running in what we call user land or user space. A metaphorical area outside of kernel space
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-linux-2021/the-kernel?u=76281980&t=95)** where the software running on the system operates. Imagine the action of saving a file in a text editor. When I click save, the text editor software uses a user space library to tell the kernel what to save and where to save it. The kernel then communicates this information to the storage medium and reports back that the operation succeeded. Modern Linux kernels are able to communicate with a huge variety of computer hardware and they can provide an ever-increasing number of useful functions for programs to use. The Linux kernel can run on tiny devices like circuit boards intended for hobby use, on super computers, solving the mysteries of the universe on desktops, on laptops, on mobile devices. and even in cars. Usually, these applications will employ a customized kernel which has been slightly modified to run on different kinds of processors or which have support for unnecessary hardware removed. But they're still all the Linux kernel. Thinking about the kernel can seem pretty technical and intimidating. Though we don't need to worry about it, if we're just getting started with Linux or if we're going to be using Linux in a way that doesn't involve working directly with the kernel. For most users, the kernel just sits in the background taking care of what needs to get done. Some Linux users though, especially hardware designers and some types of programmers and system administrators will interact with the kernel directly. In some cases, people working with the kernel will need to edit the source code of the kernel, to add new features or make changes to how it works.
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-linux-2021/the-kernel?u=76281980&t=188)** And as I mentioned before, that's something that's encouraged. The Linux kernel is open source, and anyone can download, edit and run the code that makes the Linux system work. If you're so inclined, you can download the source code of the kernel at [kernel.org](https://kernel.org). The kernel is what makes Linux, Linux. But in order to have a working system where we can get work done, we need software that interacts with the kernel. And we need some other supporting configurations to get a system up and running. When a Linux system starts up or boots, it goes through a process where the kernel is loaded and then software called an Initialization System or System Manager, takes over and starts up programs to get the system to a state where we can interact with it. This Initialization System starts up services like networking, storage, sometimes a desktop environment, and things like that. Again, many Linux users won't need to concern themselves with this. But system administrators and hobbyists who like to tweak the knobs and dials on things, might find themselves diving deeper into this process. Even if you plan to use a Linux system without concerning yourself with all the under the hood stuff, it's helpful to know a little bit about the Linux kernel, and what its role is. And if you plan to get into the technical details and make changes yourself, Linux is one of the few operating systems that makes that possible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (22), [[Hardware]] (7)
> **CLI Commands:** make (2), find (1)
> **Exercise Files:** source code (2), download the (1)
> **Prerequisites:** initialization (2), getting started (1)
> **URLs:** [kernel.org](https://kernel.org) (1)
> **Env Vars:** cpu (1)
> **Definitions:** is an  (1)
> **Analogies:** imagine (1)

#### [Terminal and desktops](https://www.linkedin.com/learning/introduction-to-linux-2021/terminal-and-desktops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-linux-2021/terminal-and-desktops?u=76281980&t=0)** - [Instructor] There's two primary ways of using or interacting with a system that runs [[Linux]]. These are through a desktop environment and through a text-based shell. Let's take a look at both. When we use an operating system like [[Windows]] or macOS we'll often use a graphical desktop environment in order to run software, interact with files and do what we need to get done. On Linux, we have a variety of desktop environments to choose from, Ranging from very simple and straightforward environments to environments with the rich sets of features. These desktop environments feature the kinds of windows and icons many of us are used to, along with menus and other visual enhancements. We can install and switch between desktop environments to discover which one we like best. Most Linux distributions as we'll see in a little bit, make a choice for us as to which desktop environment they use out of the box. But one of the primary appeals of Linux for many people is that pretty much anything can be customized. Some popular desktop environments are the GNOME Shell, KDE Plasma Desktop, LXQt, Cinnamon, MATE and Xfce. There are others out there but these are the ones you'll find to be the most widespread. Again, more on that when we get to talking about distros. While many people use Linux with a desktop environment in order to do their work, some tasks need to be accomplished in a different way. And that brings us to the other primary method
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-linux-2021/terminal-and-desktops?u=76281980&t=93)** of interacting with the Linux system, the console. The console is a text-based interface where an interactive shell runs. Where we type commands for the shell to run and the shell displays any returned information to us also in text form. The terminology around this can be a little confusing, but it's important. The shell is the software we interact with using text commands and text outputs. There are a number of different shells out there with Bash being the most common. Other shells like Zshell, Cshell, fish, Kornshell and more can be found in different distros and they can all be installed on your system if you'd like to explore them. Over time people often develop a preference for one over another. Though, being familiar with Bash will help you out on most Linux systems. A shell will often run inside of a terminal application in a graphical environment. And if the system is not running a graphical user interface and only has the text interface available, that's considered a console. It's also important to know that there are terminal emulators which run on windows and macOS that you can use to connect to a remote Linux machine. If it's running software like SSH or secure shell that provides remote access. This lets us run that remote shell within a local terminal window. So if you plan to explore Linux using the text-based interface, you don't necessarily need to install Linux on your primary machine just to connect to an installation of Linux
>
> **[3:05](https://www.linkedin.com/learning/introduction-to-linux-2021/terminal-and-desktops?u=76281980&t=185)** on a hobby system or home server. A Mac or a Windows system can connect just fine to a Linux system. We're not going to focus too heavily on the details of using shells here, but if you're interested in learning more about a command line shell, take a look at the resources I'll recommend later in the course. Familiarity with a command line environment will be helpful if you plan to work with Linux systems remotely, connecting to a machine that you're not sitting in front of in order to control what it does and how it works. And it's useful, even if you're working locally. What you intend to do with Linux will influence whether you spend more time in a desktop environment or more time in a terminal environment. Many people mix and match these two ways of working, relying on the strengths of each interface type for different tasks. Take some time as we go through the course to think about what tasks you need to do or want to do on a Linux system. If it's browsing the web, editing photos, watching videos, composing music or documents and things like that you'll need a desktop environment. And you might not even need to think about terminal or command line stuff if you plan to use a Linux system this way. If you plan on connecting to a hobby board like a Raspberry Pi, a home server or a web server at a cloud host that'll be something you can do in a terminal from whatever system you're already using. Or you might attach a display directly to a system and run Linux in console mode rather than using a desktop environment.
>
> **[4:39](https://www.linkedin.com/learning/introduction-to-linux-2021/terminal-and-desktops?u=76281980&t=279)** It can be intimidating if you're just getting started to face an unfamiliar system with an unfamiliar interface, but we all started somewhere when we began learning how to use a computer and switching operating systems is no different.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (17), [[Windows]] (4)
> **Tools:** terminal (6), command line (3), bash (2)
> **Env Vars:** gnome (1), kde (1), mate (1), ssh (1)
> **Prerequisites:** install (2), you'll need (1), getting started (1)
> **CLI Commands:** make (1), find (1), ssh (1)
> **Code Identifiers:** macos (2)
> **Cross-References:** later in (1)
> **Definitions:** is a  (1)

#### [Standard tools](https://www.linkedin.com/learning/introduction-to-linux-2021/standard-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-linux-2021/standard-tools?u=76281980&t=0)** - [Instructor] [[Hardware]] running only a [[Linux]] kernel, isn't very useful to most people, so we'll need to use software that lets us use the computer for doing whatever we need to do. Linux distributions come with a set of tools that let users and software interact with the system. And these tools often include a software package called the GNU coreutils, short for core utilities. Many of these coreutils are commands that we'll commonly use when working in a shell. Including commands to copy and move files, to change permissions and security contexts, to view some status information and so on. Humans use these, the command line, and scripts and other programs can use them as well, to perform basic tasks. We can add other software later, but out of the box so to speak, a basic Linux installation will have these standard tools available. Which give us a minimal operating set of utilities, and which are needed in order to customize the system, use it to get work done, and even to install and manage other software. This slide shows the coreutils that are part of the [[Ubuntu]] desktop installation. You don't need to write them down or anything like that, I just wanted to give you a look at how many there are. I've highlighted some commonly used commands, like cat, which we use to display file contents, cp, which is for copying files, df and du, which show information about how much space is used up on the file system, and more. My course, [[[[Learning Linux Command Line]] (2023)]], covers some of these common commands,
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-linux-2021/standard-tools?u=76281980&t=93)** the ones that are useful every day and which a command line user should work to memorize. The coreutils also include commands that many people will use less frequently, if ever. Some of them are legacy commands that are expected to be available for historical reasons. And some are for very specific tasks that most Linux users, and certainly most Linux learners, won't need to use. I've been using Linux for almost 20 years, and I've never used some of these. Generally speaking, if you have a Linux distribution installed, you don't need to worry about installing these tools yourself. They're just there in the box alongside the kernel and other supporting software, that distribution maintainers built in for us. And if you're going to be using desktop environment, and not a shell in a terminal or console, you don't need to worry about these at all. Well, most distros use the GNU coreutils, some use a different set of tools called BusyBox. It's an alternative to GNU coreutils and it's often found in small, or embedded systems. What makes BusyBox interesting is that it's a single program, which offers many of the functions of common coreutils tools. It also offers a wide array of other tools as well. This shows the commands that BusyBox offers, and again, I don't intend for you to write them down, or even remember them. The point is to show how much supporting software we get from this one package. Here, I've highlighted the BusyBox commands, which overlap with the coreutils. The others are implementations of other common tools
>
> **[3:06](https://www.linkedin.com/learning/introduction-to-linux-2021/standard-tools?u=76281980&t=186)** or are features offered by shells and things like that. The point here is that while the Linux kernel itself can interact with a huge amount of hardware, and provides an enormous amount of functions that software can hook into, much of what makes Linux a flexible, consistent and widespread operating system, is the tools that accompany the kernel in a distribution. Whether you're using a system with GNU coreutils, or BusyBox, you can rely on having common, basic, familiar command line tools at your disposal. When you reach for the command to copy a file from one place to another for example, it's the same on all Linux systems. It works pretty much the same, and it has the same name. This common foundation of software makes it easier to switch between distros. Because these commands are available nearly everywhere within the Linux world.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (12), [[Hardware]] (2), [[Ubuntu]] (1)
> **Tools:** command line (4), terminal (1)
> **Env Vars:** gnu (4)
> **CLI Commands:** cat (1), cp (1)
> **Definitions:** short for (1)
> **Analogies:** for example (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Software and packages](https://www.linkedin.com/learning/introduction-to-linux-2021/software-and-packages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-linux-2021/software-and-packages?u=76281980&t=0)** - [Narrator] In addition to the core utilities that come with nearly all [[Linux]] distributions, we'll usually want to run other software on our system as well, like games or productivity tools or anything really. Depending on what we want to run on the distribution and in many cases on our own preferences. There are many ways of getting software onto a Linux system. The most common method is to use the distributions software repositories, which are libraries of software maintained by the distribution maintainers that contain software packages designed for use on that distribution. Using command line tools or graphical tools, we can search these large libraries of software. We can indicate what we want to install and the [[Package Management]] software handles downloading and installing that software and any other necessary software it might require in order to run. These repositories are also where important software updates like security fixes come from, and many distributions have an automated task that checks for those and can install them automatically. The software that's stored in repositories usually takes the form of packages, and there are a few different types of package. We won't go into the details here, but different distribution maintainers will generally choose to base their distribution on one or another kind of package and package management software. The choice of package management software is an important part of the decisions that go into defining and distribution. In general though, all the different kinds of packages and package managers operate in broadly the same way. They take a software package and copy its contents into the places on your system where they belong. The executable or the program that runs is put
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-linux-2021/software-and-packages?u=76281980&t=95)** into a specific place where the system can find it. Libraries that the software needs are put in their appropriate location. Documentation is added to the documentation viewer or man pages and so on. The software in these packages is built or compiled from source code, and we can also use source code to build software to use on our system if we want to. To do that, we'd need to create or download source code, and we'll also need [[Software Development]] tools like a compiler that can take that source code and use it to create binaries or executable programs that the computer can run. Once we compile software, we'll be able to run it and we can store it wherever is appropriate on our system. While compiling simple programs from source is fairly straightforward, very complex software often requires the use of make files. These provide the system with instructions about how software should be built, what to do with the binaries and other files after it's built and so on. This path isn't terribly common for new Linux users, but it is an important part of the open source ecosystem, so it's useful to know about. There's also another method of installing and running software on Linux systems, and that is to use platform independent packages. There are a number of different implementations of this idea, most notably Snaps, Flatpak and AppImage. These are each different methods of running an app from its own isolated little package rather than installing executables or binaries directly in our file system. These packages can be found on and installed from repositories of Snaps or Flatpaks or AppImages using command line or graphical tools similar to those we use
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-linux-2021/software-and-packages?u=76281980&t=188)** for distribution repository packages. While these kind of platform independent packages are quite modular and can be easier to use in some ways. they can also have some drawbacks like speed and interoperability with the overall file system. If that all sounds a little confusing, don't worry, it actually kind of is. Different software is often distributed in different ways, so it's quite possible that you might need to use a Snap for one program, source code for another and the systems package manager for something else. However, simply knowing that there are these different ways of installing software should help to clear up some confusion and prepare you to get and use the software you need.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (4), [[Package Management]] (3), [[Software Development]] (1)
> **Exercise Files:** source code (5)
> **CLI Commands:** find (1), make (1), snap (1)
> **Tools:** command line (2)
> **Prerequisites:** install (2)
> **Documentation:** the documentation (1)
> **Definitions:** is an  (1)
> **Analogies:** similar to (1)

#### [The Linux file system](https://www.linkedin.com/learning/introduction-to-linux-2021/the-linux-file-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-linux-2021/the-linux-file-system?u=76281980&t=0)** - [Instructor] To store data on a [[Linux]] system, we use files, and files are organized into directories or folders as they are on other operating systems. These files and directories make up the file system. In order to organize files consistently on Linux systems, most distributions follow the Filesystem Hierarchy Standard, or FHS. This standard makes it possible for us to switch between distributions easily and to use unfamiliar distributions without having to spend a lot of time looking in different places on different systems for files we need. Though if you're coming to Linux from another operating system, it can take awhile to get used to how files are organized. In the Linux file system, everything starts with the file system root, which is represented by a single slash. On a Linux system, there's only one file system root. Even if we plug in other storage devices, those become part of the overall file system and aren't represented as separate file systems, like we might be used to seeing on a [[Windows]] system with a C and D and other drives. You can think of the file system root kind of like the My Computer level on a Windows system rather than the C drive. Using a desktop based file browser, we'll see other disks listed as we might expect on other operating systems. Even though they're mounted or made available within the root file system, usually under the mnt directory or inside of a directory called media.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-linux-2021/the-linux-file-system?u=76281980&t=97)** From the root, we move deeper into the file system, and at the first level, there are a variety of directories each with a specific purpose. Some of the important directories defined by the FHS include the home directory where each user's personal files are stored,
>
> **[2:02](https://www.linkedin.com/learning/introduction-to-linux-2021/the-linux-file-system?u=76281980&t=122)** and bin, sbin, and usr where programs have different types are kept. Again, there's also mnt or media, which are used for mounting or attaching other file systems, like you'd find on network shares and other disks. And how those are used will vary based on which distribution you're using. The etc directory is where system wide configuration files are stored. And var is where changeable or variable system information is kept. This is where we'll find system logs and logs for other software. Some directories defined by the Filesystem Hierarchy Standard aren't real directories at all. The dev, proc, and sys directories are created by the kernel to represent [[Hardware]] available on the system, including all the systems hardware, processes that run programs, settings in the kernel, and so on. When we're getting started with Linux, we don't need to worry too much about these directories. It's good to know what they are though, because as I mentioned, it can be overwhelming to see all this if you're new to Linux. While the layout of the files and directories is called the file system, the term file system is also used to refer to different strategies or [[Data Structures]] for storing and representing file data and file [[Metadata]]. Those are things like ext4, btrfs, ZFS, XFS, and so on,
>
> **[3:41](https://www.linkedin.com/learning/introduction-to-linux-2021/the-linux-file-system?u=76281980&t=221)** but we're not going to get into different file systems here because in most cases you'll choose one or another based on what you need your storage system to do, and that's something that's a bit more advanced than I want to go into here. For most users, it's not something we'll have to think about too much, but some administrators and developers make their entire career about working with and administering file systems and storage. When we're getting started with Linux, it's fine to just let the OS installer handle choosing what type of file system we'll be using. We can always create other file systems on other media later on. The file system on a Linux machine can seem intimidating and technical and even a little bit alien if you're used to other operating systems hiding some of the inner workings from you. But knowing where to find our own files and having an idea of what the other directories are for, provides a good start for working with Linux.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (10), [[Windows]] (2), [[Hardware]] (2), [[Data Structures]] (1), [[Metadata]] (1)
> **CLI Commands:** find (3), make (2)
> **Env Vars:** fhs (2), zfs (1), xfs (1)
> **Prerequisites:** getting started (2)
> **Definitions:** is called (1)
> **Analogies:** kind of like (1)
> **Speakers:** - [instructor] (1)

#### [User and system security](https://www.linkedin.com/learning/introduction-to-linux-2021/user-and-system-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-linux-2021/user-and-system-security?u=76281980&t=0)** - [Instructor] Multi-user operating systems are normal these days. [[Linux]], [[Windows]], and macOS are all multi-user, though it originally wasn't the case that computers could support more than one user. There used to be just the user, and they could do whatever they wanted on the system. While that's convenient, at least for that one user, it's not very efficient, and it's a security nightmare. So like other modern operating systems, Linux uses a multi-user model where each human using the system can have their own user account with separate files and settings. And the same is true for software and services. Some programs and services, especially things like a web server, a database server, and other software that isn't tied to a particular human user often run using their own user account. Usually, these accounts, human and computer, are standard accounts. That is, they can work with their own files, but they aren't allowed to make changes to the system or to files outside of their own space. On Linux systems, there's also a superuser or administrator account called root, which has the ability, or the privilege as it's known in the security model, to access any file on the system and to change settings on a system wide basis. We can use the root account directly, or we can borrow its privileges if the account we're using is empowered to do so using the su command for substitute user or sudo, which we can use to run a particular command using superuser privileges to do a particular task while substituting the root user for our own.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-linux-2021/user-and-system-security?u=76281980&t=95)** We'll do this if we need to install software, or if we need to change network settings or things like that that affect the whole system. For safety and security reasons though, we'll rarely if ever actively use the computer under the root account. Not only is it a bad idea, it can cause problems that are tricky to resolve. Root can be thought of as a powerful and special tool that's best kept in safe place, which we only get out when we need it. Linux also maintains single-user mode for troubleshooting and other activities where the only user is the root user, but for the most part any Linux system we use will be running in multi-user mode during normal operation. Within containers and on embedded systems though, we'll sometimes still see a single-user model too. There's a similar division between an unprivileged or standard user and a privileged or administrative user on Windows and macOS as well. So it's not that different on Linux if you're used to administering another operating system. The key to this difference between users is permissions, which are a way to represent which user has which rights to do which things to which files. Permissions let us indicate whether a user, members of a particular group, or anyone at all can read from a given file, write data to it, or execute or run it. Permissions are often represented either as numbers or as letters, and in each case, they're made up of three sections, one for the user, one for the group, and one representing all others. Each section represents the restrictions applied
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-linux-2021/user-and-system-security?u=76281980&t=188)** to the file for that audience. As with many things on a Linux system, permissions can look pretty confusing and technical, but once you know what they mean, they make more sense. When you're getting started with Linux, you may run across times when you need to work with permissions or find occasions when you'll need to use the superuser account to make a change to the system. A desktop environment can make working with permissions a little bit easier, and to make changes at the command line, we'll use the chmod command and sometimes chown and chgrp. These are covered in more depth in some of our [[System Administration]] courses here at [[LinkedIn]] Learning. Another security aspect that I want to mention just briefly here are security packages like SELinux and AppArmor, which can provide very detailed security constraints and controls that applied to programs and users alike. Security is an important part of Linux, and it's a very deep field to get acquainted with. When we're starting out with Linux, we'll only brush up against [[Security Management]] issues now and then, if at all. As with the details of the file system and the technical aspects of the kernel, at this point it's only important to know that there's a multi-user security system we're working within on a Linux system, and that it's an area that can be further explored should that be necessary for the work you need to do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (11), [[Windows]] (2), [[System Administration]] (1), [[LinkedIn]] (1), [[Security Management]] (1)
> **CLI Commands:** make (5), sudo (1), find (1), chmod (1), chown (1)
> **Prerequisites:** install (1), getting started (1), you'll need (1)
> **Code Identifiers:** macos (2)
> **Tools:** command line (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Choosing a Linux distribution](https://www.linkedin.com/learning/introduction-to-linux-2021/choosing-a-linux-distribution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-linux-2021/choosing-a-linux-distribution?u=76281980&t=0)** - [Instructor] We've spent some time looking at a few major components that determine how a [[Linux]] system operates, and now, it's time to take a moment to understand what Linux distributions are. Distributions or distros are kind of like different flavors of a Linux operating system. Take ice cream for example. There are all kinds of different flavors out there, but all flavors share one very important thing in common. They're all ice cream. Some have nuts, some have gooey chocolate fudge and some have a sweet fruit topping. We can think of Linux distributions like this too. While distributions differ in important ways, they all share the fact that they include a Linux kernel. As with our ice cream example, they also have differences that make them unique. Distributions differ from each other in the tools they package together and the series of decisions made by the distro maintainers about how the operating system will operate. Different distributions also come with different repositories or collections of software that are available to install. Distributions also differ in how they're supported, such as by the community or by a commercial organization and for how long support is offered. Some are supported for only a few months and others enjoy long-term support or LTS that can last for years. All Linux distributions come with a kernel, though the specific version and features of that kernel often vary based on what a particular distro is intended to do. Very few distros come with what's called the upstream kernel, the official kernel maintained by the Linux Foundation.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-linux-2021/choosing-a-linux-distribution?u=76281980&t=94)** Most have tweaks here and there to enable or disable certain features and customizations. Some distributions use a very updated version of the kernel and provide lots of additional software to develop the kernel and drivers and those distributions are favored by developers and enthusiasts. Fedora is an example of this. Some distros ship with older kernels, which can provide stability for systems that need to run for a long time without changes, like servers and other production infrastructure. In these scenarios, we don't want to have new features added when we run software updates or risk features we use being removed or deprecated. An example of this is CentOS. Some distributions are intended to run in embedded devices where they don't need to support any [[Hardware]] other than the specific gear they're running on. The operating systems available for the Raspberry Pi, like Fedora and Raspbian are examples of this, and many Distros strike a balance somewhere in the middle, with a fairly recent kernel version and a large amount of drivers for common hardware, and that's pretty common for distributions that are widely used on the desktop or are intended to be quite user friendly. [[Ubuntu]] desktop, Linux Mint, openSUSE and other distros targeted at general desktop use are examples of this. Linux distros also come with core tools like we saw earlier and most come with additional software, which, again, will vary based on what a given distro is for. Some distros intended for servers come with just a minimal set of management tools and others intended for desktop use
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-linux-2021/choosing-a-linux-distribution?u=76281980&t=187)** come with a wide array of productivity software, creative software in the desktop environment, all pre-installed and pre-configured. Other choices that define distros are which [[Package Management]] solution they use, which system management or init system they use and how hardware is managed and configured. Ubuntu distribution, for example, uses a system called Netplan to configure the network, while Fedora and Red Hat use NetworkManager instead. Debian, Ubuntu and a variety of other distros use the APT package manager while Fedora and Red Hat use dnf. Alpine Linux uses apk and openSUSE uses zypper. Most of the widely popular distros use systemd as the system manager, but not all do. While these are some high-level differences we can use to differentiate distros, distros also offer from each other in small ways. Debian, for instance, doesn't come with sudo, a command we can use to act as the super user. The choice made by the Debian maintainers is that users should actively switch to the super user account when we need to administer the system and switch back when we're done. Most distros, though, include the sudo or sudo command, which makes using super user privileges easier and we can install that command on Debian if we want to. A software package can have different names and configurations across distros too. The Apache HTTP Server, for example, is called Apache2 on Ubuntu and httpd on Fedora.
>
> **[4:40](https://www.linkedin.com/learning/introduction-to-linux-2021/choosing-a-linux-distribution?u=76281980&t=280)** These differences between distros can be distracting and frustrating for new Linux users, especially when you find a tutorial that you want to follow or an answer to a question you have. If someone wrote the tutorial or answer assuming someone is running Ubuntu and you're running openSUSE, for example, many of the steps will be different. So it's important to know at least that there are differences between distros and it's important to know which distro you're using, especially when you're following a tutorial or looking for help. If you don't know what you're running, you can usually find out in your desktop's About screen or from the command line with the command, cat/etc/*release. Here, for example, you can see I have two shell sessions, one connected to a system running Ubuntu 18.04.5, and one connected to a system running CentOS 7.8.2003. As you experiment with different distros, you'll gain more of an understanding of where things are the same and where they're different. Linux distributions are maintained by different companies, organizations, and groups of people, each with a focus on specific sets of tools or specific uses. In many cases, servers will run Red Hat Enterprise Linux, Debian Server or Ubuntu Server and might run Fedora, Ubuntu desktop, Linux Mint, or Arch Linux. Project boards like Raspberry Pi might run Raspbian and Fedora and many containers and embedded systems run Alpine Linux. These distros are all just different sets of tools including core utilities
>
> **[6:13](https://www.linkedin.com/learning/introduction-to-linux-2021/choosing-a-linux-distribution?u=76281980&t=373)** running on top of the Linux kernel. Many distros share a relationship to other distros. For example, Red Hat Enterprise Linux is related to Fedora, so most of the tools and configurations you'd use to work in one would be the same in the other. Ubuntu, Mint and many other distros are based on Debian. So again, using one of those will feel quite similar to using another. Along with Slackware, which is the predecessor to SUSE Linux, Red Hat and Debian round out the largest families of distros. I encourage you to take some time to explore the Wikipedia entry entitled List Of Linux Distributions, both to get a sense of the variety of distributions currently and historically available, and also to see their timeline of distro development, here on the right. It shows how legacy distros influenced later ones and it's fascinating and very tall. But with so many options available, it can be challenging to feel like you're picking the right distro to start out with. Many people have strong opinions about what distro others should use and how they should get started. Some enthusiasts recommend an all-in approach like starting out with Arch Linux because it's quite minimal, and all of the decisions around what software should be installed, including what software the system uses to boot up needs to be configured by hand before the system can be used, Other enthusiasts maintain that the one true way to learn Linux is to first start by compiling your own kernel. These approaches may be appealing to some people,
>
> **[7:47](https://www.linkedin.com/learning/introduction-to-linux-2021/choosing-a-linux-distribution?u=76281980&t=467)** but I think they're a little bit too much to ask for someone just getting started with Linux. But if either of those sound like fun, by all means, start there. If you just want to get up and running quickly, I'd like to give you a more practical suggestion. Start with Ubuntu. It's widely used, which means it has a lot of attention on it in terms of bug fixing and modern software, and it has a broad community of users at all levels, meaning that if you have a question about it, chances are someone else has already asked and answered it. The desktop version provides a desktop environment to explore, as well as having a terminal you can use to work at the command line. It comes with a whole bunch of productivity software too, Though, of course, if you're learning Linux with a goal of using a different distro, you should start out with that distro instead. If your company uses Red Hat Enterprise Linux, you should start with that or with Fedora, if you don't have a Red Hat license. If your company or organization uses SUSE Enterprise Linux, check out openSUSE, the free option in the SUSE ecosystem. Especially when you're getting started, picking a distro is a pretty low stakes choice. You can always back up your files and move to a different one later. So as I said, if you need to learn a specific distro, start with that. If not, try out Ubuntu. If you hate it, try something else. If you like it, try something else too. Nearly all popular distros will have what you need to follow basic tutorials. Though, keep in mind that most tutorials are centered around Debian or Ubuntu or the Red Hat family of distros because they're so widely used. Only as you start to specialize in a few fields will it really become important
>
> **[9:21](https://www.linkedin.com/learning/introduction-to-linux-2021/choosing-a-linux-distribution?u=76281980&t=561)** what specific distro you use, and if you plan to be a system administrator or work in that area, knowledge of more than one distro will be very helpful. The variety of distros and the anxiety of choosing one can be a big hurdle for people learning Linux, and if that's something that's giving you stress, just pick one and go with it. As I said, I recommend Ubuntu as a starting point, but if you know you have different needs, use something else instead.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (27), [[Ubuntu]] (13), [[Hardware]] (3), [[Package Management]] (1)
> **CLI Commands:** sudo (3), find (2), make (1), apt (1), dnf (1)
> **Analogies:** for example (6), kind of like (1), such as (1), for instance (1), similar to (1)
> **Env Vars:** suse (3), lts (1), apt (1), http (1)
> **Prerequisites:** install (2), getting started (2), configure (1)
> **Code Identifiers:** opensuse (4)
> **Tools:** command line (2), terminal (1)
> **Definitions:** is an  (1), is called (1), is a  (1)

#### [Planning your system](https://www.linkedin.com/learning/introduction-to-linux-2021/planning-your-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-linux-2021/planning-your-system?u=76281980&t=0)** - [Instructor] As you move forward and start to work with [[Linux]] on your own or as you follow instructional materials, you'll need to make a few decisions that will guide the setup of your Linux environment. You'll need to decide what you want to accomplish with your Linux system. And once you know the answer to that, you'll need to use that information to decide which distro you'll use and where the Linux installation will run. It's a good idea to think about your choice in terms of whether you'll need or want a desktop environment or whether you just need command line access, either in a console or through a remote shell. If you need a desktop environment, as I mentioned before, I'd recommend starting out with [[Ubuntu]] Desktop Linux and seeing if that fits your needs. Other good choices for distribution to try first are Debian Desktop, Fedora Desktop, and Linux Mint. That is of course unless you already know what distro you need to work with or want to work with. If your team or organization uses something else, that's what you should start with. If you need a Linux system that doesn't have a desktop environment, for example, if you're learning how to use the shell or you're administering a system that isn't going to be used with the GUI, you can use any of these. But you might also consider a lighter weight distribution, which comes with a more minimal set of tools as we often find in the server versions of various distros, like Ubuntu Server and Debian Server and in their minimal versions as well. And if you're feeling adventurous you could explore starting out with other distros like Arch or Alpine. Again, we face a choice when it comes to how the system will run. Usually, we'll run a distro that uses
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-linux-2021/planning-your-system?u=76281980&t=93)** a desktop environment either in a virtual machine, as a native install, or sometimes from a live boot environment that's part of the installation disk. [[Virtual Machines]] provide the ability to run an operating system in a protected space on your computer, separate from your primary operating system. In a VM, we can install Linux and use it like it's a real computer but without affecting anything on the host system. The whole Linux system lives as a series of files on the host computer and can be copied to other systems too, should that become necessary. There are a few software tools that let us run virtual machines. VirtualBox is a free option for [[Windows]] and macOS systems, and Hyper-V is a free option on most versions of Windows. There are also commercial [[Microsoft Products|products]] that offer other features, including VMware Workstation for Windows, VMware Fusion for macOS, and Parallels Desktop for macOS. If you plan to use a virtual machine I recommend you take a look at VirtualBox because it's free and works on all major operating systems. We have courses here on [[LinkedIn]] Learning that cover these tools. If you have a spare computer you can install Linux directly on that instead, replacing whatever information and operating system were on it before. A machine that's dedicated to running Linux doesn't need to be all that modern or powerful unless you're planning to use it to do work that requires high performance, like video editing, audio work, photo manipulation or anything that's heavy on calculation. Using a native or bare metal install on real [[Hardware]]
>
> **[3:10](https://www.linkedin.com/learning/introduction-to-linux-2021/planning-your-system?u=76281980&t=190)** gives you the full performance of a system, though it does have the drawback of being less portable than a virtual machine. If you have a home lab, a native installation might be what you want. But if you need your Linux environment to go with you to the [[Microsoft Office|office]], to school or to some other place, a virtual machine might be a better choice. We can mix and match though, too. I have a home server that runs Linux and never leaves my house. And I also use virtual machines to try out new things and practice my skills. You could also use a hobby board like Raspberry Pi to run Linux as a native install that's reasonably portable. This is a good choice if you want to explore using hardware that the Pi is able to communicate with. If that's a match for what you want to do, check out Raspberry Pi Essential Training. And there are small computers like the Intel NUC, which are powerful, but have a tiny footprint if you're at a premium for space. I mentioned another option for running a desktop distribution too. And that's live boot. A live boot environment, which is available when you boot up most installers for desktop distributions, will give you an opportunity to work with the distro without installing. It's a bit slow, but there's no setup required, and that can be useful sometimes. Most live boot environments won't save any files you create though. So if you write code or create documents, you'll need to use a web browser to store those on [[Cloud Storage]] or use some other method like an additional external disk to store your work. Here at LinkedIn Learning, we have courses that can help you get started
>
> **[4:43](https://www.linkedin.com/learning/introduction-to-linux-2021/planning-your-system?u=76281980&t=283)** with the desktop version of Linux, including Learning Ubuntu Desktop Linux, Learning Fedora Linux, Learning CentOS Linux, and if you're interested in security research, Learning [[Kali Linux]]. They'll all walk you through installing a distribution and show you around the basics of using that distribution and its default desktop. If you're interested in setting up Ubuntu Server, which starts out with just the command line interface, check out Learning Ubuntu Server here on LinkedIn learning. To run a Linux environment without a desktop, which is a common way of using a Linux system, we have a few other options. Virtual machines and native installations are popular for this. But we can also use a cloud service to host a machine we can connect to remotely. We can do this with a hosting service like [[Microsoft Azure]], [[Amazon Web Services (AWS)|Amazon Web Services]], [[Google Cloud Platform (GCP)|Google Cloud]], Linode, DigitalOcean or other providers. While some of these have a free offering, others have a cost associated with them. Using a cloud server is a useful option if you need an environment you can access from various places, or if you don't have a computer that can handle running a virtual machine. The drawback of a cloud service is that it can be a little bit more technically demanding to get started. The actual creation of the machine is very easy. The machines are built almost instantly from predefined templates. But most cloud providers will require some work to get user access set up, and you'll need to learn a little bit about remote access through SSH. If you're already familiar with this, great! If not, look for support on a cloud provider site
>
> **[6:16](https://www.linkedin.com/learning/introduction-to-linux-2021/planning-your-system?u=76281980&t=376)** to tell you what you need to do in order to access a remote server. To explore this further, take a look at Learning SSH. Another option, if you have a [[Windows 10]] computer, is to use Windows Subsystem for Linux and install one of the distros available for that environment. The WSL environment is generally targeted at developers who need a Linux system they can use through the command line. And to learn more about that, check out Learning Windows Subsystem for Linux here at LinkedIn Learning. Hopefully at this point you have a sense of where you want to start. Do you have an idea of what distro to start out with based on what your goals are? Have you decided whether to use a virtual machine or a cloud server, a project board or a physical machine? And have you identified a few steps beyond the initial install for moving toward your goal? If so, you're ready to move forward and set up your environment. I won't cover that here because there's a lot of different options, but I encourage you to pause here, if you're so inclined, and go set up a Linux environment. Or just sit back and keep watching and set up your environment whenever you're ready.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (24), [[Ubuntu]] (5), [[Windows]] (5), [[Virtual Machines]] (4), [[LinkedIn]] (4)
> **Prerequisites:** install (7), you'll need (6), set up (4), setup (2)
> **Env Vars:** ssh (2), gui (1), nuc (1), wsl (1)
> **Definitions:** is a  (5)
> **CLI Commands:** ssh (2), make (1), find (1)
> **Code Identifiers:** macos (3)
> **Tools:** command line (3)
> **Analogies:** for example (1)


### 2. Developing your knowledge

[↑ Back to Table of Contents](#table-of-contents)

#### [Building your skills](https://www.linkedin.com/learning/introduction-to-linux-2021/building-your-skills?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-linux-2021/building-your-skills?u=76281980&t=0)** - [Instructor] When you're ready to get started expanding your skills with [[Linux]], there are a lot of directions you can go. You can use this web link, lnkd.in/learnlinux to see all the [[LinkedIn]] Learning Linux courses. And I'd like to take a few minutes to highlight some of them. Whether you're planning to use Linux as a system administrator, a developer, a user of productivity apps or anything else. I recommend having a little bit of familiarity with using the command line or shell. In my course [[[[Learning Linux Command Line]] (2023)]], I cover the basics of using the Bash shell and some of the core tools that are commonly used to work with files on a Linux system. You might also be interested to explore Linux, Bash Shell and Scripts or Learning Bash Scripting for a more detailed look at using the Bash shell to create programs to help you perform your tasks. Once you're comfortable using the shell, you're ready to dive into topics that use the shell which covers pretty much everything about [[System Administration]]. I can't list all of our Linux courses here. So be sure to search for Linux and look for topics you're interested in pursuing. A good place to start is our learning path called Become a Linux System Administrator. And if you're more interested in using Linux at home, take a look at Building an [[Ubuntu]] Home Server. Our Linux System Engineer series of courses focuses on getting you up to speed with Red Hat administration and the Practical Linux for Network Engineers series gives network administrators a look at what they need to know about Linux. We also have courses focusing more on services
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-linux-2021/building-your-skills?u=76281980&t=95)** than on particular distributions like Linux email services, Linux BIND and DNS, Linux kernels and logging for system administration and more. And if you're interested in working with the Kernel directly take a look at courses like Advanced Linux: The Linux Kernel, Linux [[Performance Tuning]] and Linux Device Drivers. For a regular stream of tips and tricks about Linux, take a look at my series here on LinkedIn Learning called Linux Tips Weekly. There, I cover a broad range of topics from system basics to security, to projects and troubleshooting. One direction you might take is to study for Linux certification exams either to signal your knowledge to potential employers, or just to provide a framework in which to learn new skills. We have some learning paths that focus on preparing for various certifications. And quite a few courses that focus on certifications for both Red Hat and Ubuntu in particular. Developing your skills with Linux is an ongoing process and I encourage you to explore everything we have to offer to continue your learning. Start by following a few tutorials and then set a goal and learn how to accomplish your goal using what you've learned. That might be setting up a web server or installing and using a programming language like [[Python (Programming Language)|Python]] to make a custom tool. You might branch out and start using a Linux home server or set up a remote system where you can host services like VPN, [[Cloud Storage]], and more. The possibilities are limited only by what you want to learn. It can be interesting to look up job postings and see what technologies and tools are listed there
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-linux-2021/building-your-skills?u=76281980&t=189)** as a guide for learning new things. I enjoy keeping an eye on new trends and technologies and dreaming up some way that I might use them for a small personal project. And if you find something you're interested in but which seems too far beyond your current understanding, make a note of it and remind yourself to revisit it later. Learning is a journey, so enjoy it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (25), [[LinkedIn]] (2), [[System Administration]] (2), [[Ubuntu]] (2), [[Performance Tuning]] (1)
> **Tools:** bash (4), command line (2)
> **CLI Commands:** make (2), python (1), find (1)
> **Env Vars:** bind (1), dns (1), vpn (1)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Finding and asking for help](https://www.linkedin.com/learning/introduction-to-linux-2021/finding-and-asking-for-help?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-linux-2021/finding-and-asking-for-help?u=76281980&t=0)** - [Instructor] When you're just getting started with [[Linux]], as with any new thing you set out to learn, it's easy to get stuck on some terminology or on a task that you haven't learned about yet. The system itself can provide you with a lot of information, should you need a little bit of help. If you're working at the command line you can use the manual pages, or the manpages, to look up commands and programs that are installed. To use the manpages type, man and then the name of a command. Here, for example, I'll open up the manual page for the ls command, which lists files. Manpages show the syntax or the format of command, including options or arguments that are used to change how a command works, under the synopsis section. Manpages also often discuss the purpose of the software and they sometimes provide examples of usage for common scenarios using a command. So if you come across an unfamiliar command the manpages are a good first step in finding out what the command does and how to use it. You can navigate with the arrow keys, with F or B to move forward and backward and you can press Q to quit. The manpages are installed on most Linux distros, but not all of them. So in smaller environments, like containers or embedded systems, you might need to install man or use another system to look up the information you need. There are also a number of places online where you can view manpages, including man.[he.net](https://he.net), [manpages.net](https://manpages.net), and many others. If you come across a problem you can't solve
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-linux-2021/finding-and-asking-for-help?u=76281980&t=95)** using built-in help or an online course or tutorial there are forums online where you can ask a question and hope that kind strangers on the internet will reply with helpful advice. Among these are forums dedicated to particular distributions like [[Ubuntu]] and Fedora as well as the Linux and Unix community on Stack Exchange and the Server Fault community. Before you post a question be sure to spend some time searching to see if someone else has already asked or answered your question. It's polite to avoid posting duplicate questions even if you're in a hurry. If you do post a question or answer remember to be nice and to provide as much context as you can. If you find yourself asking for specific help it's useful to know which distro and which version of the kernel you're using. As we saw before, you can find distribution info with cat slash etc slash star release. And you can find out what kernel version you're using with uname dash a. You can also often find out what version of a particular program you're using in a help or about menu if you're working on a desktop, or with a command line option like dash v or dash dash version at the command line. Help forums are really interesting to browse even if you don't have a particular problem that needs solving. I've learned a lot of really neat tips and tricks from just looking around. Another exciting place to seek help and find new knowledge is at meetups which often happen in-person or virtually. Some of them are intended as general interest Linux groups
>
> **[3:11](https://www.linkedin.com/learning/introduction-to-linux-2021/finding-and-asking-for-help?u=76281980&t=191)** full of people who get together because they love Linux and they live in a particular place. And others focus on specific industries where Linux is used or specific types of tools like those for scientific computing, for self-driving cars, for robots and so on. Search the web for meetups or user groups in your area, or which are offered online. The Linux community is huge and it includes beginners, enthusiasts, experts and everyone in between. Remember that nobody knows everything and that everybody was a beginner at some point. And while there are no such thing as stupid questions we all have a responsibility to do a little research before posting duplicate questions in online forums. Because Linux is so widespread and so open there's a lot of great resources both built-in and available online to answer questions you might have. I hope you look forward to joining the Linux community either as an active participant or as an enthusiast.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (9), [[Ubuntu]] (1)
> **CLI Commands:** find (5), ls (1), cat (1)
> **Tools:** command line (3)
> **URLs:** [he.net](https://he.net) (1), [manpages.net](https://manpages.net) (1)
> **Prerequisites:** getting started (1), install (1)
> **Cross-References:** as we saw (1)
> **Analogies:** for example (1)
> **Best Practices:** remember to (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/introduction-to-linux-2021/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-linux-2021/next-steps?u=76281980&t=0)** - With an introduction to the basic components of a [[Linux]] system behind us, and a plan for how to set up a Linux environment that meets our needs, we're ready to move on to other courses that focus on specific distributions, specific tasks and roles in various technologies. I encourage you to take some time to set up an environment in which to practice and to spend a while exploring it through introductory courses about your specific distro, the shell and basic administration tasks. Then plot your course toward whatever goal you set for yourself. See ya next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (2)
> **Prerequisites:** set up (2)
> **Speakers:** - with (1)


## Instructor

- [[Scott Simpson]]

## Skills Covered

- Linux

## Path Context

### In [[Network Automation Professional Certificate by Arista Networks]]
← [[Python Quick Start]] | **3 of 6** | [[NetOps (DevOps for Network Engineers)- Automating Networks]] →

### In [[Getting Started with Linux]]
**1 of 3** | [[Linux- Overview and Installation]] →

## Part of

- [[Network Automation Professional Certificate by Arista Networks]]

## Appears In

- [[Network Automation Professional Certificate by Arista Networks]]
- [[Getting Started with Linux]]

## Related Courses

_Courses sharing skills:_

- [[Linux- Files and Permissions]] — Linux
- [[Linux- Overview and Installation]] — Linux

---

[↑ Back to top](#)