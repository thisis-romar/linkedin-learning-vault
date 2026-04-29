---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: powershell-7-essential-training
url: "https://www.linkedin.com/learning/powershell-7-essential-training"
level: Intermediate
updated: 4/22/2025
learners: 20374
skills:
  - Powershell
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQEEzQM_uSV9WA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1608062286712?e=2147483647&amp;v=beta&amp;t=2nqMZgS7GaFxNW-EkbJ-jg6yt21_KLoZLa-9JoN7vRM"
linkedin_topic: Network and System Administration
learning_paths:
  - '[[Powershell- Automate IT Tasks and Microsoft 365 Administration]]'
next_courses:
  - '[[PowerShell- Automating IT Administration]]'
path_nav: '[{"path":"Powershell- Automate IT Tasks and Microsoft 365 Administration","position":1,"total":3,"prev":null,"next":"PowerShell- Automating IT Administration"}]'
path_count: 1
tags:
  - course
  - topic/network-and-system-administration
  - skill/powershell
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Network%20and%20System%20Administration/Powershell%207%20Essential%20Training.md)

![Powershell 7 Essential Training](https://media.licdn.com/dms/image/v2/C4E0DAQEEzQM_uSV9WA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1608062286712?e=2147483647&amp;v=beta&amp;t=2nqMZgS7GaFxNW-EkbJ-jg6yt21_KLoZLa-9JoN7vRM)

# Powershell 7 Essential Training

> PowerShell is a great tool for managing core infrastructure, general server and client administration, specific Windows services, and even elements of Azure. Jump-start your career and your IT environment by learning to use the latest version, PowerShell 7. Instructor Liam Cleary shows you how to ensure you’re using the administrator option in PowerShell, how to modify the PowerShell console, and 

> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-7-essential-training) | Intermediate | 20K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - Get up and running with PowerShell 7
  - What you should know
- [**1. Getting Ready for PowerShell**](#1-getting-ready-for-powershell) (5 videos)
  - Why use PowerShell?
  - Launch PowerShell as an administrator
  - Configure the PowerShell console
  - PowerShell development envionments
  - Configure development environments for PowerShell
- [**2. Introduction to PowerShell 7**](#2-introduction-to-powershell-7) (3 videos)
  - PowerShell 7
  - Install PowerShell 7
  - Work with PowerShell modules
- [**3. Commands and Syntax**](#3-commands-and-syntax) (6 videos)
  - Discover commands
  - Explore help
  - Understand cmdlet syntax
  - Understand terse commands
  - Utilize variables
  - Understand PowerShell objects
- [**4. Scripting and Automation**](#4-scripting-and-automation) (10 videos)
  - PowerShell security
  - Create your first script
  - Parameter attributes for scripts and functions
  - Select information
  - Filter specific data
  - Control the flow of PowerShell
  - Ternary operators
  - Switch statements
  - Define custom help
  - Distributing custom PowerShell scripts
- [**5. Managing Servers, Operating Systems, and Services**](#5-managing-servers-operating-systems-and-services) (4 videos)
  - Navigate the file system
  - Manage files and directories
  - Retrieve data
  - Work with JSON objects
- [**6. PowerShell Remoting**](#6-powershell-remoting) (4 videos)
  - Introduction to PowerShell remoting
  - Enable PowerShell remoting
  - Combine commands
  - Practical PowerShell remoting
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Get up and running with PowerShell 7
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-7-essential-training/get-up-and-running-with-powershell-7?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-7-essential-training/get-up-and-running-with-powershell-7?u=76281980&t=0)** - [Liam] Hi, I'm Liam and I'd like to welcome you to Powershell 7 essential training.
>
> **[0:06](https://www.linkedin.com/learning/powershell-7-essential-training/get-up-and-running-with-powershell-7?u=76281980&t=6)** This course is going to get you started automating, inspecting, and managing your IT environment better and faster.
>
> **[0:13](https://www.linkedin.com/learning/powershell-7-essential-training/get-up-and-running-with-powershell-7?u=76281980&t=13)** You never know it might also change your IT career.
>
> **[0:16](https://www.linkedin.com/learning/powershell-7-essential-training/get-up-and-running-with-powershell-7?u=76281980&t=16)** To get you started, we'll configure and set up our PowerShell environment and we'll walk through the basic PowerShell syntax.
>
> **[0:23](https://www.linkedin.com/learning/powershell-7-essential-training/get-up-and-running-with-powershell-7?u=76281980&t=23)** We would look at how to write basic commands that use data, specific types of object, and then even use existing commands that you already have on your machine.
>
> **[0:33](https://www.linkedin.com/learning/powershell-7-essential-training/get-up-and-running-with-powershell-7?u=76281980&t=33)** We will start to put all of the syntax structure together and create scripts that will show you how to automate, not just locally, but on remote systems as well.
>
> **[0:41](https://www.linkedin.com/learning/powershell-7-essential-training/get-up-and-running-with-powershell-7?u=76281980&t=41)** While writing the PowerShell, we will also step through some of the new updated commands and properties that are available in PowerShell 7.
>
> **[0:49](https://www.linkedin.com/learning/powershell-7-essential-training/get-up-and-running-with-powershell-7?u=76281980&t=49)** So join me for the rest of this course of PowerShell 7 essential training.

> [!info]- Semantic Content
>
> **Tools:** powershell (6)
> **Prerequisites:** configure (1), set up (1)
> **Speakers:** - [liam] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-7-essential-training/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-7-essential-training/what-you-should-know?u=76281980&t=0)** - [Instructor] PowerShell has been around for a long time.
>
> **[0:03](https://www.linkedin.com/learning/powershell-7-essential-training/what-you-should-know?u=76281980&t=3)** It is now available on most operating systems and provides a great way to automate and manage your systems.
>
> **[0:10](https://www.linkedin.com/learning/powershell-7-essential-training/what-you-should-know?u=76281980&t=10)** It may sound like a daunting task to create scripts and execute them, however, trust me, it's not as hard as it seems.
>
> **[0:17](https://www.linkedin.com/learning/powershell-7-essential-training/what-you-should-know?u=76281980&t=17)** To be successful with PowerShell, you simply need some basic knowledge of networking skills and Windows management.
>
> **[0:25](https://www.linkedin.com/learning/powershell-7-essential-training/what-you-should-know?u=76281980&t=25)** What you don't need for this course is any PowerShell experience or command-line experience, as we will walk through this together.
>
> **[0:32](https://www.linkedin.com/learning/powershell-7-essential-training/what-you-should-know?u=76281980&t=32)** If you do have any experience with PowerShell, this will be an advantage.
>
> **[0:36](https://www.linkedin.com/learning/powershell-7-essential-training/what-you-should-know?u=76281980&t=36)** However, this course will start you at the beginning and step you through how to be successful with PowerShell.

> [!info]- Semantic Content
>
> **Tools:** powershell (5)
> **Speakers:** - [instructor] (1)


### 1. Getting Ready for PowerShell

> [↑ Back to Table of Contents](#table-of-contents)

#### Why use PowerShell?
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-7-essential-training/why-use-powershell?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-7-essential-training/why-use-powershell?u=76281980&t=0)** - [Instructor] So why use PowerShell?
>
> **[0:03](https://www.linkedin.com/learning/powershell-7-essential-training/why-use-powershell?u=76281980&t=3)** Well, firstly, PowerShell is accessible, which means the barrier of entry to learning PowerShell is relatively low because of its near-ubiquity.
>
> **[0:13](https://www.linkedin.com/learning/powershell-7-essential-training/why-use-powershell?u=76281980&t=13)** If your computer is running Windows 10, then you can simply type PowerShell in the search box to get instant access to the Windows PowerShell app.
>
> **[0:22](https://www.linkedin.com/learning/powershell-7-essential-training/why-use-powershell?u=76281980&t=22)** PowerShell also provides the ability of creating simple and complex automation.
>
> **[0:27](https://www.linkedin.com/learning/powershell-7-essential-training/why-use-powershell?u=76281980&t=27)** Windows PowerShell, itself, includes more than 100 basic core commandlets, and you can, of course, write your own commandlets and then share them with others.
>
> **[0:37](https://www.linkedin.com/learning/powershell-7-essential-training/why-use-powershell?u=76281980&t=37)** It also provides scalable management, so basically anything you can do with a few mouse clicks in the user interface can be done more quickly and maybe more efficiently using PowerShell.
>
> **[0:48](https://www.linkedin.com/learning/powershell-7-essential-training/why-use-powershell?u=76281980&t=48)** And then lastly, it provides the ability of accessing information.
>
> **[0:52](https://www.linkedin.com/learning/powershell-7-essential-training/why-use-powershell?u=76281980&t=52)** Like many other CLIs, PowerShell provides access to the file system on the computer.
>
> **[0:58](https://www.linkedin.com/learning/powershell-7-essential-training/why-use-powershell?u=76281980&t=58)** In addition, utilizing PowerShell providers, you are able to access the often hard to access data and information.
>
> **[1:08](https://www.linkedin.com/learning/powershell-7-essential-training/why-use-powershell?u=76281980&t=68)** So why should you learn PowerShell?
>
> **[1:09](https://www.linkedin.com/learning/powershell-7-essential-training/why-use-powershell?u=76281980&t=69)** Well, the first thing to remember is that PowerShell's not going away.
>
> **[1:13](https://www.linkedin.com/learning/powershell-7-essential-training/why-use-powershell?u=76281980&t=73)** Most of the Microsoft products now utilize PowerShell, including the cloud platforms.
>
> **[1:18](https://www.linkedin.com/learning/powershell-7-essential-training/why-use-powershell?u=76281980&t=78)** Of course, you cannot do all of the administration within the user interface now, because many of the user interfaces, or GUIs, are PowerShell front ends, so now you can do so many user interface and new features or new administration tasks sometimes appear as PowerShell commandlets first.
>
> **[1:37](https://www.linkedin.com/learning/powershell-7-essential-training/why-use-powershell?u=76281980&t=97)** PowerShell allows you to automate multiple tasks, so you definitely need to know how to do that.
>
> **[1:42](https://www.linkedin.com/learning/powershell-7-essential-training/why-use-powershell?u=76281980&t=102)** And then, of course, it allows interaction between products and platforms.
>
> **[1:47](https://www.linkedin.com/learning/powershell-7-essential-training/why-use-powershell?u=76281980&t=107)** You can also now use PowerShell to manage, for example, the entire network.
>
> **[1:52](https://www.linkedin.com/learning/powershell-7-essential-training/why-use-powershell?u=76281980&t=112)** And then, of course, most of the Microsoft certification exams now contain specific PowerShell questions.
>
> **[2:00](https://www.linkedin.com/learning/powershell-7-essential-training/why-use-powershell?u=76281980&t=120)** So why use PowerShell 7, or why PowerShell 7 in general?
>
> **[2:04](https://www.linkedin.com/learning/powershell-7-essential-training/why-use-powershell?u=76281980&t=124)** Well, firstly, it's cross-platform.
>
> **[2:06](https://www.linkedin.com/learning/powershell-7-essential-training/why-use-powershell?u=76281980&t=126)** This is the first cross-platform version of PowerShell that Microsoft have now released.
>
> **[2:11](https://www.linkedin.com/learning/powershell-7-essential-training/why-use-powershell?u=76281980&t=131)** It uses PowerShell Core Version 7 and upwards instead of the Version 6 that it used to.
>
> **[2:17](https://www.linkedin.com/learning/powershell-7-essential-training/why-use-powershell?u=76281980&t=137)** It's also, which is critical here, built on top of the .NET Core 3 and upwards, instead of the regular server side or desktop side .NET framework.
>
> **[2:28](https://www.linkedin.com/learning/powershell-7-essential-training/why-use-powershell?u=76281980&t=148)** This is also the first release that's made under the open source license, which means if you wanted to, you can give back and provide feedback or provide changes to PowerShell itself.
>
> **[2:41](https://www.linkedin.com/learning/powershell-7-essential-training/why-use-powershell?u=76281980&t=161)** And then of course, most importantly, it now provides better backwards compatibility for utilizing PowerShell commandlets that exist only in Windows PowerShell versus PowerShell 7.

> [!info]- Semantic Content
>
> **Tools:** powershell (26)
> **Code Keywords:** interface (3)
> **Env Vars:** net (2)
> **Versions:** version 7 (1), version 6 (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Launch PowerShell as an administrator
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-7-essential-training/launch-powershell-as-an-administrator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-7-essential-training/launch-powershell-as-an-administrator?u=76281980&t=0)** - [Instructor] So we're on a Windows 10 machine now.
>
> **[0:02](https://www.linkedin.com/learning/powershell-7-essential-training/launch-powershell-as-an-administrator?u=76281980&t=2)** And what we want to look at here is execution of PowerShell commands.
>
> **[0:07](https://www.linkedin.com/learning/powershell-7-essential-training/launch-powershell-as-an-administrator?u=76281980&t=7)** But first we have to be able to launch the PowerShell console.
>
> **[0:10](https://www.linkedin.com/learning/powershell-7-essential-training/launch-powershell-as-an-administrator?u=76281980&t=10)** Now, I'm going to click the Start button here and you'll see I have Windows Terminal.
>
> **[0:14](https://www.linkedin.com/learning/powershell-7-essential-training/launch-powershell-as-an-administrator?u=76281980&t=14)** This is the preferred console that I'm going to be utilizing.
>
> **[0:17](https://www.linkedin.com/learning/powershell-7-essential-training/launch-powershell-as-an-administrator?u=76281980&t=17)** Now, if you don't have this, you can click the Windows store here, click search, type windows terminal, and then click on the Windows Terminal app or the preview one, depending on which one you want to use.
>
> **[0:29](https://www.linkedin.com/learning/powershell-7-essential-training/launch-powershell-as-an-administrator?u=76281980&t=29)** And then you can install that, which is a cross-platform terminal browser.
>
> **[0:33](https://www.linkedin.com/learning/powershell-7-essential-training/launch-powershell-as-an-administrator?u=76281980&t=33)** Now, I particularly like this one because it's kind of fresh, new, and lets me configure kind of various components inside of it.
>
> **[0:41](https://www.linkedin.com/learning/powershell-7-essential-training/launch-powershell-as-an-administrator?u=76281980&t=41)** So I'm going to click Windows Terminal.
>
> **[0:43](https://www.linkedin.com/learning/powershell-7-essential-training/launch-powershell-as-an-administrator?u=76281980&t=43)** Just going to make this full screen so we can see it.
>
> **[0:46](https://www.linkedin.com/learning/powershell-7-essential-training/launch-powershell-as-an-administrator?u=76281980&t=46)** Now of course, what we want to understand is execution of PowerShell commandlets but how do permissions kind of flow into that?
>
> **[0:54](https://www.linkedin.com/learning/powershell-7-essential-training/launch-powershell-as-an-administrator?u=76281980&t=54)** And what I mean by this is I need to run a certain PowerShell command.
>
> **[0:58](https://www.linkedin.com/learning/powershell-7-essential-training/launch-powershell-as-an-administrator?u=76281980&t=58)** Am I able to execute that? Do I need to be an admin?
>
> **[1:00](https://www.linkedin.com/learning/powershell-7-essential-training/launch-powershell-as-an-administrator?u=76281980&t=60)** Do I need to be a user?
>
> **[1:02](https://www.linkedin.com/learning/powershell-7-essential-training/launch-powershell-as-an-administrator?u=76281980&t=62)** What kind of level of access do I need?
>
> **[1:04](https://www.linkedin.com/learning/powershell-7-essential-training/launch-powershell-as-an-administrator?u=76281980&t=64)** So I'm logged in as a local administrator on the Windows 10 desktop.
>
> **[1:09](https://www.linkedin.com/learning/powershell-7-essential-training/launch-powershell-as-an-administrator?u=76281980&t=69)** So I'm going to try and execute a command called enable PS remoting.
>
> **[1:15](https://www.linkedin.com/learning/powershell-7-essential-training/launch-powershell-as-an-administrator?u=76281980&t=75)** This is a command that enables PowerShell remoting.
>
> **[1:18](https://www.linkedin.com/learning/powershell-7-essential-training/launch-powershell-as-an-administrator?u=76281980&t=78)** I'm not going to explain any more than that.
>
> **[1:20](https://www.linkedin.com/learning/powershell-7-essential-training/launch-powershell-as-an-administrator?u=76281980&t=80)** But I'm going to click Enter.
>
> **[1:21](https://www.linkedin.com/learning/powershell-7-essential-training/launch-powershell-as-an-administrator?u=76281980&t=81)** Now, notice what happens.
>
> **[1:22](https://www.linkedin.com/learning/powershell-7-essential-training/launch-powershell-as-an-administrator?u=76281980&t=82)** It comes back and says access is denied.
>
> **[1:26](https://www.linkedin.com/learning/powershell-7-essential-training/launch-powershell-as-an-administrator?u=76281980&t=86)** Now, interestingly, what's happening here is the PowerShell console is executing in the context of me.
>
> **[1:32](https://www.linkedin.com/learning/powershell-7-essential-training/launch-powershell-as-an-administrator?u=76281980&t=92)** But I'm logged in as the administrator so how come I get an access denied?
>
> **[1:36](https://www.linkedin.com/learning/powershell-7-essential-training/launch-powershell-as-an-administrator?u=76281980&t=96)** Well, it's the protective mechanism built into PowerShell to enforce and a bypass the user access control.
>
> **[1:44](https://www.linkedin.com/learning/powershell-7-essential-training/launch-powershell-as-an-administrator?u=76281980&t=104)** So I'm going to go back to the Start Menu again, click the Windows Terminal, right-click Choose More and Run as Administrator.
>
> **[1:51](https://www.linkedin.com/learning/powershell-7-essential-training/launch-powershell-as-an-administrator?u=76281980&t=111)** And then I'm going to accept the user access control.
>
> **[1:54](https://www.linkedin.com/learning/powershell-7-essential-training/launch-powershell-as-an-administrator?u=76281980&t=114)** And then I'll make this bigger.
>
> **[1:56](https://www.linkedin.com/learning/powershell-7-essential-training/launch-powershell-as-an-administrator?u=76281980&t=116)** Now what I'll do is try and execute the same command as before.
>
> **[2:01](https://www.linkedin.com/learning/powershell-7-essential-training/launch-powershell-as-an-administrator?u=76281980&t=121)** Leave this to run.
>
> **[2:02](https://www.linkedin.com/learning/powershell-7-essential-training/launch-powershell-as-an-administrator?u=76281980&t=122)** And you'll notice there's no error this time.
>
> **[2:05](https://www.linkedin.com/learning/powershell-7-essential-training/launch-powershell-as-an-administrator?u=76281980&t=125)** But immediately it comes back and says it's already configured, don't worry about it.
>
> **[2:10](https://www.linkedin.com/learning/powershell-7-essential-training/launch-powershell-as-an-administrator?u=76281980&t=130)** So very clear difference between the PowerShell commandlets and the permissions.
>
> **[2:15](https://www.linkedin.com/learning/powershell-7-essential-training/launch-powershell-as-an-administrator?u=76281980&t=135)** So when we're trying to execute PowerShell, the recommendation here where possible is to launch the console, Run as Administrator as it would be called, so that we can then get around any of the security restrictions that might stop us from executing the commands.

> [!info]- Semantic Content
>
> **Tools:** powershell (9), windows terminal (5), terminal (1)
> **CLI Commands:** make (2)
> **Code Keywords:** this, (1), new, (1)
> **Definitions:** is a  (2)
> **Prerequisites:** install (1), configure (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** right-click (1)
> **Speakers:** - [instructor] (1)

#### Configure the PowerShell console
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=0)** - [Illustrator] One of the things that we're able to do within PowerShell is to modify the environment that we're actually utilizing.
>
> **[0:08](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=8)** So, first off, if I click the start menu here and I'm going to type in PowerShell.
>
> **[0:14](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=14)** I'm going to use the standard Windows PowerShell one first.
>
> **[0:17](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=17)** We'll say, run as administrator, click yes and then we'll kind of load this into full screen mode.
>
> **[0:23](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=23)** Now, of course you can see I'm using a blue background with a green text.
>
> **[0:28](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=28)** Now that may not be your preference.
>
> **[0:30](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=30)** So luckily we have the ability to go to the top corner here and choose properties.
>
> **[0:36](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=36)** This will take us into the properties window, where we can control what this looks like.
>
> **[0:42](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=42)** So first off we can control the cursor size, I'm going to click that to be a big one.
>
> **[0:46](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=46)** And you'll see the cursor size is now larger.
>
> **[0:49](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=49)** If I go back to properties and say small and click, okay you'll see changes back to that small one.
>
> **[0:55](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=55)** So, simple things that we can adjust to make it look at it a bit better.
>
> **[0:59](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=59)** Now, what we can do is we have various edit options available to us, but more importantly we can also increase or decrease the command history.
>
> **[1:09](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=69)** So for example, the buffer size.
>
> **[1:10](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=70)** So what this means is if I run 20 or 30 commands the larger the buffer size, the more commands that I can actually execute.
>
> **[1:19](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=79)** Now, if we're looking at the styling we can actually go directly into the font option.
>
> **[1:23](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=83)** The font one will allow us to tweak what it looks like.
>
> **[1:26](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=86)** So if I choose 36 and click, okay you can see that my text instantly increases.
>
> **[1:32](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=92)** Now, of course, it's not real time, so I have to keep going back and clicking between them to get it back to the size that I was utilizing previously.
>
> **[1:40](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=100)** If I go back to font, we can of course change the font to be something else, so I could say loosen the console, for example, click okay and then it would change.
>
> **[1:50](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=110)** And it's not the greatest font by the way.
>
> **[1:52](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=112)** Go back to font and I like to stick with consoles and we'll update that.
>
> **[1:57](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=117)** Okay. So you can see it gets a bit frustrating going backwards and forwards between them.
>
> **[2:01](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=121)** However, we can now click on the layout and the layout will determine the size of the window.
>
> **[2:06](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=126)** So the position of it.
>
> **[2:08](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=128)** So we let the system define the position which means that as you move it around or maximize it will be where it's supposed to be.
>
> **[2:14](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=134)** And then from a window size we can increase or decrease the size.
>
> **[2:18](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=138)** And you can see in this preview window what it does to the window.
>
> **[2:21](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=141)** I'm not going to change this because when you change it it'll come out of full screen mode.
>
> **[2:26](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=146)** Now, what we can do is really go to town with the colors.
>
> **[2:30](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=150)** I like blue.
>
> **[2:31](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=151)** I like the green and the white.
>
> **[2:33](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=153)** I don't necessarily need anything else but we can change the colors if needed.
>
> **[2:37](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=157)** So for example, I could go to like a green color with screen text of a gray, click okay.
>
> **[2:43](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=163)** And you can see, we end up with what looks like a kind of a weird blue in the middle and a green in the back.
>
> **[2:49](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=169)** And if I just do this and put it back, you can see that it kind of gives us weird lines.
>
> **[2:53](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=173)** So, sometimes the colors don't necessarily apply straight away.
>
> **[2:57](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=177)** But if I go back to here and type PowerShell and then say run as administrator and click yes, you'll see that that one, if I go full screen, adopts the colors instantly.
>
> **[3:08](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=188)** So there is some weird thing about the console ever so often, not quite taken the colors.
>
> **[3:13](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=193)** And that's not the greatest color I could have chosen.
>
> **[3:15](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=195)** But if I go back to the properties here, you can see that we can go back to the colors.
>
> **[3:20](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=200)** I'm going to go back to my blue color.
>
> **[3:22](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=202)** Let's go back to this one and my text, I'm going to leave as the gray color.
>
> **[3:27](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=207)** So the next time that window updates it'll change.
>
> **[3:30](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=210)** Now we can go back to the properties once more.
>
> **[3:33](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=213)** And we also have some various options around the terminal itself.
>
> **[3:37](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=217)** So just some core configuration around the cursor and what could be utilized.
>
> **[3:41](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=221)** But hopefully what you've noticed by now is that if I just click okay here, and come back out, close that one down, I'm going to launch a new PowerShell window.
>
> **[3:52](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=232)** Let's just run this as administrator again.
>
> **[3:55](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=235)** There we go.
>
> **[3:56](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=236)** We now have consistent color.
>
> **[3:57](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=237)** But what you'll notice is that it's really not that easy and it's not great for the customization using the standard Windows PowerShell console.
>
> **[4:06](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=246)** So let me close these down.
>
> **[4:08](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=248)** What we'll do instead is we'll go to the Windows terminal.
>
> **[4:13](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=253)** So I'm going to right click here, choose more, run as administrator and choose yes.
>
> **[4:18](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=258)** And then we'll maximize this.
>
> **[4:20](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=260)** I'm just going to clear this a little bit.
>
> **[4:22](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=262)** So once we're in the terminal, we can then choose the little arrow here and then click settings.
>
> **[4:27](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=267)** Now my machine, this will launch into Visual Studio Code but on your machine, it might launch into Notepad.
>
> **[4:33](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=273)** Now, what you'll see is we have a JSON structure which represents the way that the interface has been designed, or at least styled.
>
> **[4:44](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=284)** The main section here will be this, this will be right here, our default section.
>
> **[4:49](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=289)** The default is what gets rendered directly in the console.
>
> **[4:53](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=293)** So right now, if I go back to my console this will be size 22 font and it uses this theme that's been applied.
>
> **[5:01](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=301)** If I go back into here and say 32 and just click save, if I go back, you can see the text has been updated.
>
> **[5:09](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=309)** So this is more instantly updatable than the previous console where you had to keep closing it and opening it again.
>
> **[5:17](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=317)** And if I go back here and change that back to 22 and click save, I can go back and it's back to the normal size.
>
> **[5:24](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=324)** Now the JSON file that's listed here will have some of the base information.
>
> **[5:29](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=329)** You can see these false options here represent the dropdown menu.
>
> **[5:34](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=334)** If I go back to the console, here, you'll see one, two, three, four.
>
> **[5:39](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=339)** So it represents those four items.
>
> **[5:42](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=342)** And of course we could change those if we needed.
>
> **[5:44](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=344)** We could change it from PowerShell to say PowerShell seven if I click save and then go back, you'll see it should now say PowerShell seven?
>
> **[5:52](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=352)** So we have the ability to not just tweak what the screen looks like, but also components that make up that one.
>
> **[5:59](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=359)** Under the schemes option it's empty.
>
> **[6:02](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=362)** And it does give you a link to the Microsoft site to actually brand that if we needed to.
>
> **[6:06](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=366)** So I'm going to close that down.
>
> **[6:07](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=367)** And what I'm going to do now is hold the alt key down and then press that start menu again, that little arrow and then click settings.
>
> **[6:15](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=375)** Now what you'll see this time, is it loads what's called defaults dot JSON.
>
> **[6:20](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=380)** This is the other administration JSON file.
>
> **[6:23](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=383)** And this time it has core configuration around whether you want to allow cut, copy and paste.
>
> **[6:29](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=389)** Whether you want to show the title, whether we're using tabs or tabs switch-in.
>
> **[6:33](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=393)** And then if we scroll to profiles we get the names of all of the options available to us as in these are the tools.
>
> **[6:40](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=400)** So this is the PowerShell one.
>
> **[6:42](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=402)** This is the command prompt.
>
> **[6:43](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=403)** If we go to schemers, we get the colors and you can see all the color codes right here for all the various options inside the console.
>
> **[6:52](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=412)** And then we get a name.
>
> **[6:54](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=414)** The name is the theme that we wish to associate.
>
> **[6:57](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=417)** So we have the ability to really go to town on this specific terminal and style it in the way that we want.
>
> **[7:05](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=425)** But I think we'll stick with the gray background and the gray text.
>
> **[7:08](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=428)** It's nice and clean.
>
> **[7:10](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=430)** And if I go down to PowerShell seven and choose that option you can see it flows across that one.
>
> **[7:16](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=436)** Whereas the administrator Windows PowerShell is just regular PowerShell five.
>
> **[7:21](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=441)** So the theme will flow across each one.
>
> **[7:24](https://www.linkedin.com/learning/powershell-7-essential-training/configure-the-powershell-console?u=76281980&t=444)** So it's a great way to style and get that user interface looking the way that you want to.

> [!info]- Semantic Content
>
> **Tools:** powershell (13), terminal (3), windows terminal (1), visual studio (1), command prompt (1)
> **Cross-References:** go back to (11)
> **Code Keywords:** let (4), interface (2), else, (1), this. (1), this, (1)
> **UI Navigation:** go to (6), click on (1), dropdown (1)
> **Env Vars:** json (4)
> **Analogies:** for example (3)
> **CLI Commands:** make (2)
> **Definitions:** means that (1)

#### PowerShell development envionments
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=0)** - [Educator] Now so far, we've talked about the Windows PowerShell Console and we've seen the Windows Terminal.
>
> **[0:06](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=6)** Now in fact, there's a couple of different options for development environments.
>
> **[0:11](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=11)** So let's go back and we'll do a search for PowerShell.
>
> **[0:13](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=13)** And the first option that we looked at, I'm going to run as administrator was the standard admin console.
>
> **[0:19](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=19)** Nothing spectacular, it's an old school console, kind of like the batch or command window that we would utilize.
>
> **[0:26](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=26)** It allows me to kind of type PowerShell functions in I can navigate through the properties, et cetera.
>
> **[0:33](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=33)** So it's one canvas that we can use for creating PowerShell functions and commands.
>
> **[0:39](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=39)** The second option on most machines would be the PowerShell ISE which I'm now going to run as administrator as well.
>
> **[0:47](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=47)** Now, this one is one that is been very, very useful over the past few years, and something that I highly recommended individuals utilizing.
>
> **[0:55](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=55)** I'm just going to zoom in here.
>
> **[0:56](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=56)** Now what we can do is we've got this kind of script section.
>
> **[1:00](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=60)** So the way the PowerShell ISE works or the integrated studio is it gives me the ability to write and save a ps1 file.
>
> **[1:09](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=69)** So automatically creating scripts.
>
> **[1:11](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=71)** It gives me the rendering screen at the bottom, which means I can execute regular commands.
>
> **[1:17](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=77)** So if I say get child item, you'll see that I've got various IntelliSense options and I've got access to the commands.
>
> **[1:27](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=87)** So for example, I can execute the command in the bottom section, Very simply let me clear that.
>
> **[1:33](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=93)** I can also go into the top section here and say get child item.
>
> **[1:38](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=98)** And when I select this here, I can either play the entire script or I can do the run selection which is F8 on a Windows keyboard.
>
> **[1:47](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=107)** So you can see we have this same flexibility.
>
> **[1:50](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=110)** Now the nice thing about utilizing this is that we can write the PowerShell scripts and functions and syntax that we need, and then see the corresponding results in the bottom section.
>
> **[2:00](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=120)** Now on the right, there's also a commands option that is available.
>
> **[2:04](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=124)** The commands option lists meet all of the PowerShell modules that have been loaded and installed into this machine.
>
> **[2:12](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=132)** So for example, if I scroll down, you can see I've got Microsoft PowerShell core.
>
> **[2:16](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=136)** I go down, I've got PowerShell Get-Pnp device provisioning as a whole host of different PowerShell modules.
>
> **[2:23](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=143)** Now what's nice about this is if I scroll a bit further up and choose PowerShell diagnostics, you can see it gives me a list of the commandlets or the functions that are available.
>
> **[2:33](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=153)** So if I say enable PS trace, I can click show details.
>
> **[2:37](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=157)** And then as long as that's been loaded, it will then come back and give me the parameters.
>
> **[2:41](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=161)** And I notice it does change the size of the text a little bit when you do that.
>
> **[2:46](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=166)** But you can see, it says these are the parameters, analytic only and force.
>
> **[2:51](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=171)** Now, what I can also do here is choose insert and this will then take whatever has been typed here and inject it into that bottom section.
>
> **[2:59](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=179)** And I think of that for a second.
>
> **[3:00](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=180)** If I'm trying to do something a bit more sophisticated, maybe I want to do something with the DNS client.
>
> **[3:07](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=187)** Maybe I want to set a DNS client.
>
> **[3:10](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=190)** If I click show details, I'm just going to make it larger.
>
> **[3:13](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=193)** You'll see that what it does here is it gives me all of the properties available as text boxes and I can then select them.
>
> **[3:22](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=202)** It gives me tab sections that will explain to me, or give me various other options when I'm trying to identify specific things.
>
> **[3:29](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=209)** So in this one, set DNS client is allowing me to set the DNS for the Windows machine that I'm sitting on.
>
> **[3:36](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=216)** Now we also have at the bottom this section called common parameters, which does show for nearly all commandlets and functions.
>
> **[3:44](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=224)** These are just general error action, error variable information action.
>
> **[3:48](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=228)** Now, the idea behind the PowerShell ISE is to give you a richer experience.
>
> **[3:53](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=233)** We're able to click on debug and then kind of go into and utilize breakpoints.
>
> **[3:59](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=239)** So for example, if I want to go into here, I can run that selection.
>
> **[4:03](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=243)** I could also if I have a script, I can say toggle the break point and then it will run the code up until that specific point.
>
> **[4:10](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=250)** So that's the PowerShell ISE.
>
> **[4:12](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=252)** Now of course, the last one that we looked at here was the Windows Terminal, which I'm a fan of.
>
> **[4:17](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=257)** The Windows Terminal, I like this one because it gives me three different canvases to work with.
>
> **[4:22](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=262)** You'll see that I have the Windows PowerShell, the Command Prompt, and the Azure Cloud Shell if I'm connected to the cloud.
>
> **[4:29](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=269)** But more importantly, it gives me the ability to create multiple tabs in the same session.
>
> **[4:35](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=275)** So I have three different tabs here all utilizing Windows PowerShell.
>
> **[4:40](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=280)** Now, what it doesn't do is give me the same contextual information that you would see in the PowerShell ISE.
>
> **[4:46](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=286)** It doesn't give me IntelliSense but I can use the tab key to go through it.
>
> **[4:50](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=290)** Like the Windows Console does.
>
> **[4:52](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=292)** And if I'm tabbing through, I can get the list of the properties or parameters that would be utilized.
>
> **[4:58](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=298)** It does let you write a specific function.
>
> **[5:01](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=301)** So if I was writing a function called test, like so, I could then say, write host test and it lets me close that out.
>
> **[5:12](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=312)** You'll see that double kind of chevrons or the double arrows that appear what this then lets me do is I can say, well, I want to run test and you'll see that it executes that function successfully.
>
> **[5:25](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=325)** So it gives you feedback.
>
> **[5:27](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=327)** It lets you kind of say what would be built.
>
> **[5:29](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=329)** So three different canvases.
>
> **[5:31](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=331)** Now one of the other canvases that we'll talk about a little bit later is actually Visual Studio Code.
>
> **[5:36](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=336)** Now Visual Studio Code, if we click into here and load the browser, we can actually navigate to the Microsoft site.
>
> **[5:46](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=346)** And from here I can download the Windows version of this.
>
> **[5:50](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=350)** And obviously this will kick off a download in a second.
>
> **[5:53](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=353)** There we go.
>
> **[5:54](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=354)** It's downloading at the bottom.
>
> **[5:55](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=355)** It's not too big.
>
> **[5:56](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=356)** It's only 61 meg in size.
>
> **[5:58](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=358)** So this gives me visual studio.
>
> **[6:00](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=360)** Now this is a fully integrated development studio.
>
> **[6:04](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=364)** Being able to utilize that for more or less any kind of development, whether it's C-sharp code or PowerShell or JavaScript, et cetera.
>
> **[6:14](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=374)** So I'm going to click next, just to install.
>
> **[6:16](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=376)** I'm going to add some options here, and click next and install.
>
> **[6:20](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=380)** Now once Visual Studio Code is installed, it installs a development studio.
>
> **[6:26](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=386)** The nice thing about this, is if I launch this now it's been installed.
>
> **[6:30](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=390)** You'll see what happens.
>
> **[6:32](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=392)** So you'll see we get Visual Studio Code.
>
> **[6:34](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=394)** You can see it gives me some messages.
>
> **[6:36](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=396)** And then I can say, I want to create a brand new file.
>
> **[6:39](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=399)** Now, if I just do file and save as and then what we'll call it, test.ps1.
>
> **[6:48](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=408)** And I'm going to change it to be PowerShell.
>
> **[6:53](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=413)** And that's what happens.
>
> **[6:54](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=414)** It pops up a section on the right that says, do you want to install the recommended extension?
>
> **[6:59](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=419)** Now what that means is it will provide IntelliSense and it will also let you execute the commands but that's another canvas that we can utilize.
>
> **[7:08](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=428)** So we have the regular console.
>
> **[7:11](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-development-envionments?u=76281980&t=431)** We have the PowerShell ISE, we have the Windows Terminal and then we also have Visual Studio Code.

> [!info]- Semantic Content
>
> **Tools:** powershell (20), visual studio (6), windows terminal (4), command prompt (1)
> **Env Vars:** ise (6), dns (4)
> **Code Keywords:** let (4), function (3), this. (1), this, (1)
> **UI Navigation:** scroll down (1), click on (1), toggle (1), navigate to (1)
> **Analogies:** for example (3), kind of like (1)
> **Prerequisites:** install (3)
> **Best Practices:** recommended (2)
> **CLI Commands:** make (1)

#### Configure development environments for PowerShell
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=0)** - [Tutor] Now that we know what the Powershell Development Environments are, let's focus on Visual Studio Code.
>
> **[0:06](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=6)** So I'm going to right click here, choose more and run as administrator.
>
> **[0:10](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=10)** That's just a best practice member based on security controls, et cetera.
>
> **[0:14](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=14)** Now, it remembers where we were with that PS one file.
>
> **[0:18](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=18)** I'm just going to make the size a little bit bigger.
>
> **[0:20](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=20)** So we'll do appearance and control, plus let me make this bigger.
>
> **[0:26](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=26)** Okay, so you can see what in this test PS1 but you notice what happened at the bottom section.
>
> **[0:32](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=32)** So after that extension has been installed, what it now does is it gives you a Powershell Integrated Console.
>
> **[0:40](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=40)** So what does that mean?
>
> **[0:41](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=41)** Well, let's do that same thing that we did before.
>
> **[0:45](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=45)** So Get-Child Item, sure enough.
>
> **[0:48](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=48)** It does the same thing and I could actually type so get, you'll see we get some PowerShell here.
>
> **[0:54](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=54)** So Get-ChildItem.
>
> **[0:56](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=56)** I'm going to select that object.
>
> **[0:57](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=57)** And then I can say run selection and it executes in the bottom.
>
> **[1:01](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=61)** So kind of like the new version of the PowerShell ISA.
>
> **[1:05](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=65)** Now in order for us to create and utilize these, we obviously need to understand how to structure a specific thing.
>
> **[1:12](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=72)** So I'm going to close this file down, click down save.
>
> **[1:15](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=75)** And then what I'm going to do here is just navigate to my file explorer.
>
> **[1:21](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=81)** And what we'll do is when file explorer loads I'll actually go into my documents one and say new folder and I'll call it PowerShell.
>
> **[1:32](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=92)** And I will then say start.
>
> **[1:37](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=97)** So this is my folder structure that I wish to utilize.
>
> **[1:40](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=100)** Now, when we building PS1 files what we want to be able to do is obviously have a structure of where they exist.
>
> **[1:46](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=106)** Now, if I say file open folder I can paste in that folder location and say, select.
>
> **[1:52](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=112)** And then you'll see refreshes a little bit.
>
> **[1:54](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=114)** And you've got this kind of expander.
>
> **[1:56](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=116)** Obviously there's no files in there at the moment.
>
> **[1:59](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=119)** If I click the new option and say, start dot Ps1, you can see instantly that loads.
>
> **[2:08](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=128)** And I get the Integrated Console, which there we go.
>
> **[2:10](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=130)** It's now refreshed and loaded and the path is already set to that specific location.
>
> **[2:17](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=137)** Now of course, what does this give us?
>
> **[2:18](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=138)** I'm going to close the welcome there.
>
> **[2:20](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=140)** If we go to the drop down here, you can see we've got the Powershell Integrated Console I can click plus and then you'll see I get PowerShell again.
>
> **[2:28](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=148)** So I get the PowerShell Integrated Console and then I can also just get PowerShell.
>
> **[2:33](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=153)** I can also close any of those items.
>
> **[2:36](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=156)** I get a list of problems.
>
> **[2:38](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=158)** I get the output values.
>
> **[2:40](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=160)** I get a debug console, but more importantly I get the terminal.
>
> **[2:44](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=164)** So as we start to write commands in here I can execute them in the bottom section.
>
> **[2:50](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=170)** Now in order to be successful at this, we first need to look at any of the extensions that would be available.
>
> **[2:55](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=175)** So helping set up the environment.
>
> **[2:57](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=177)** So if we go to the left and click on extensions, you'll see that I've already installed the PowerShell from Microsoft One.
>
> **[3:06](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=186)** If I type PowerShell as an option, you can say I'm just going to scroll this out here, that there's actually a whole host of PowerShell ad-ons that can be utilized.
>
> **[3:17](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=197)** So I opted for the PowerShell preview version here, which is 2020 6.0.
>
> **[3:24](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=204)** Or you can go with the preview version which obviously will give you updates and newer versions that are available.
>
> **[3:30](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=210)** Now, for example if I wanted to utilize PowerShell for Azure I can simply click install and you'll see what happens here.
>
> **[3:37](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=217)** It goes through the installation process.
>
> **[3:39](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=219)** We don't have to do anything.
>
> **[3:40](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=220)** It'll just install the various components that are needed and that extension becomes valid and available to us.
>
> **[3:48](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=228)** If I type the word Microsoft at the end of it this will then reduce that back down to only ones that are Microsoft specific.
>
> **[3:57](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=237)** If I wanted to, I could just say Microsoft and just look for Microsoft specific type one.
>
> **[4:03](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=243)** So edge tools for visual studio or I'm working with Microsoft teams or the graph.
>
> **[4:09](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=249)** But if we're utilizing PowerShell then simply come into PowerShell here and you'll be able to see.
>
> **[4:15](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=255)** Now, of course you may want to add some of the third-party options too.
>
> **[4:19](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=259)** So if we scroll a bit further down you can see we've got lots of third-party options.
>
> **[4:24](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=264)** A nice one is the PowerShell Pro Tools.
>
> **[4:26](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=266)** What we can see if I close that bottom section is it will talk about the ability for us to view and render information for example like this.
>
> **[4:34](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=274)** So there's a grid view control that we can view the data.
>
> **[4:38](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=278)** You can also see that we have a forms designer built in so we can build a form inside here.
>
> **[4:44](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=284)** So the ability to enhance the actual IDA is very very powerful inside Visual Studio Code.
>
> **[4:51](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=291)** Now, of course if I go back to the actual file that we're building, you can see on the left that we have the search option, which will allow us to search and replace in the file itself.
>
> **[5:02](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=302)** We can also hook this up to a source control.
>
> **[5:04](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=304)** So GitHub to be able to push these out which is quite common.
>
> **[5:08](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=308)** And then of course we have the run option to execute certain things.
>
> **[5:11](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=311)** And at the bottom here, you'll see I've got the PowerShell Command Explorer, which you can see if I refresh at the moment, it doesn't show any of those commands, but as we build commands, it will then iterate through and display those commands that we utilizing.
>
> **[5:27](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=327)** So if I wanted to create a PowerShell file, then I can say start.
>
> **[5:31](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=331)** And what we'll do is we can say, Get-ChildItem.
>
> **[5:37](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=337)** So there's my PowerShell.
>
> **[5:39](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=339)** Remember we can execute using F8.
>
> **[5:42](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=342)** And when I press F8, you can see what happens.
>
> **[5:44](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=344)** It launches the PowerShell window and provides me the information.
>
> **[5:49](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=349)** Now there's no outputs or debug or anything.
>
> **[5:52](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=352)** However, if I say write- Host and Get-ChildItem and we just execute this one you can say it writes out the word and Get-ChildItem.
>
> **[6:06](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=366)** If I go to output and anywhere else, there's no values.
>
> **[6:10](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=370)** So just be aware that some of those extra tabs at the bottom are not going to be helpful but when we're building PowerShell scripts, it becomes very very helpful to be able to configure things here.
>
> **[6:21](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=381)** Now, what we can do is you'll see we've got the buttons for run and also run selection.
>
> **[6:27](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=387)** And then we can also split the editor into two.
>
> **[6:30](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=390)** So if you happen to be copying and pasting from one location to another, maybe you already have an existing PowerShell that you wish to open and then copy and paste out of, you can put them side by side.
>
> **[6:42](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=402)** We can also then say show the open editors or we can close and save if we need to.
>
> **[6:48](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=408)** So I'm going to close these down and I'll click save.
>
> **[6:50](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=410)** That then creates me my PS1 file.
>
> **[6:53](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=413)** That's now ready for me to distribute if I wanted to.
>
> **[6:56](https://www.linkedin.com/learning/powershell-7-essential-training/configure-development-environments-for-powershell?u=76281980&t=416)** So configuring Visual Studio Code is actually as simple as installing the PowerShell add-on and then configuring it to the specific folder or subfolder or directory or even directly to GitHub if that's where you wish to store the PS1 files.

> [!info]- Semantic Content
>
> **Tools:** powershell (24), visual studio (4), github (2), terminal (1)
> **Code Keywords:** let (3), this, (1), this. (1), else, (1)
> **Env Vars:** ps1 (4), isa (1), ida (1)
> **UI Navigation:** go to (3), click on (1)
> **Prerequisites:** install (2), set up (1), configure (1)
> **Analogies:** for example (2), kind of like (1)
> **CLI Commands:** make (2)
> **Versions:** 6.0 (1)


### 2. Introduction to PowerShell 7

> [↑ Back to Table of Contents](#table-of-contents)

#### PowerShell 7
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=0)** - [Instructor] So what's new in PowerShell 7?
>
> **[0:03](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=3)** Well, the first thing is that there are directory changes that have been made to where PowerShell 7 is actually installed.
>
> **[0:09](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=9)** It gets installed into a new directory and will allow you to run PowerShell 7 alongside PowerShell 5.1.
>
> **[0:19](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=19)** New to obviously PowerShell 7 is pipeline parallelization.
>
> **[0:22](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=22)** So you can now execute or handle objects in parallel instead of the standard sequence method.
>
> **[0:29](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=29)** If you're using, for example, the ForEach-Object, you can now pass a parameter called parallel.
>
> **[0:34](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=34)** There are also new operators that are available.
>
> **[0:37](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=37)** There are three: they're called ternary operator, so A, question mark, B, colon, C; there's pipeline chain operators.
>
> **[0:45](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=45)** So the two pipe commands and the two and, and then of course there's null condition operators.
>
> **[0:51](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=51)** Question mark, question mark, or question, question mark, equals.
>
> **[0:54](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=54)** And we'll talk more about this as we go forward.
>
> **[0:57](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=57)** Then of course, we have two new cmdlets.
>
> **[0:59](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=59)** So ConciseView and Get-Error cmdlet.
>
> **[1:02](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=62)** ConciseView is a user-selectable view which is enabled as the default view for PowerShell 7.
>
> **[1:09](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=69)** Then of course, the Get-Error cmdlet would allow you to get detailed view of the error that was raised in the console.
>
> **[1:17](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=77)** Microsoft also provide automatic new version notifications.
>
> **[1:21](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=81)** So starting with PowerShell 7, the system will check for updates once a day and will notify you about a new version if that's available.
>
> **[1:29](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=89)** The information is shown only at the start of the PowerShell session.
>
> **[1:35](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=95)** So, what are the PowerShell directory changes?
>
> **[1:38](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=98)** Well now, it's installed into %programfiles%\PowerShell\7.
>
> **[1:45](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=105)** The %programfiles% path is also added to the environment variable called "Path Automatically."
>
> **[1:53](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=113)** Within PowerShell 6, there were directory changes from installing PowerShell 7.
>
> **[1:59](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=119)** So PowerShell 6 would have gone into a certain location, but on Windows, it's been moved to %programfiles%\PowerShell\7.
>
> **[2:07](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=127)** On Linux, it's moved to /opt/microsoft/powershell/7.
>
> **[2:10](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=130)** And then on macOS, it's moved to the user directory.
>
> **[2:13](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=133)** So local/microsoft/powershell/ and 7.
>
> **[2:17](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=137)** So let's talk about pipeline parallelization.
>
> **[2:20](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=140)** Well, the idea is here that, when we're utilizing the ForEach-Object command, that we can utilize this -Parallel parameter, which we can add to the existing ForEach cmdlet.
>
> **[2:32](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=152)** Normally when you use the ForEach-Object cmdlet, each object is piped to the cmdlet is then processed sequentially.
>
> **[2:40](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=160)** But with the new ForEach-Object with the parallel parameter set, you can run all the scripts in parallel for each of those piped input objects.
>
> **[2:51](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=171)** From a new operator perspective, we already mentioned that there are ternary objects, pipeline operators and null conditional operators.
>
> **[3:00](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=180)** These behave like a simplified, If L statement.
>
> **[3:04](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=184)** They'll make it easier to write code instead of using if and (indistinct) loops all of the time.
>
> **[3:10](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=190)** The ConciseView cmdlet, obviously as mentioned before, is a user-selectable view which is enabled for the default view.
>
> **[3:17](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=197)** If the error is not from the script, you'll receive a single error.
>
> **[3:22](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=202)** However, if it's from the script, and there is a passing error, you'll receive a multiline error message and then a pointer showing in which line the error occurred.
>
> **[3:31](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=211)** So very similar to receiving a stack trace, if you've been used to writing code, for example, in .NET or even in regular PowerShell.
>
> **[3:40](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=220)** The Get-Error cmdlet helps get the detailed view of the error.
>
> **[3:45](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=225)** So this will display full details, inner exceptions and the last error that actually occurred.
>
> **[3:52](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=232)** Now the automatic version updates check every single day.
>
> **[3:56](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=236)** The information is shown at the start of the session.
>
> **[4:00](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=240)** There are three flags available for the PowerShell update.
>
> **[4:04](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=244)** So default is GA, preview and RC releases.
>
> **[4:09](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=249)** If you're utilizing Off, it turns off the update notification feature.
>
> **[4:13](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=253)** And then we have what's called LTS.
>
> **[4:15](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-7?u=76281980&t=255)** So, this only notifies of long-term servicing GA releases, and this is set within an environment variable called POWERSHELL_UPDATECHECK.

> [!info]- Semantic Content
>
> **Tools:** powershell (18)
> **Env Vars:** net (1), lts (1), powershell_updatecheck (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (2), similar to (1)
> **Code Keywords:** pass (1), let (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** macos (1)
> **Versions:** 5.1 (1)

#### Install PowerShell 7
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-7-essential-training/install-powershell-7?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-7-essential-training/install-powershell-7?u=76281980&t=0)** - [Tutor] Now we know what to forest to install PowerShell 7.
>
> **[0:03](https://www.linkedin.com/learning/powershell-7-essential-training/install-powershell-7?u=76281980&t=3)** We need to obviously download the installer.
>
> **[0:05](https://www.linkedin.com/learning/powershell-7-essential-training/install-powershell-7?u=76281980&t=5)** So I'm going to go to my browser and I'm going to navigate to github/PowerShell, and then I can do PowerShell/releases.
>
> **[0:15](https://www.linkedin.com/learning/powershell-7-essential-training/install-powershell-7?u=76281980&t=15)** Now, from here you'll see the current releases that are available, you can also go and access the code itself, but if we browse through here you can see we've got the pre-release version right now which is 7.1.0, and then if we scroll a bit further down you'll see other versions of PowerShell.
>
> **[0:32](https://www.linkedin.com/learning/powershell-7-essential-training/install-powershell-7?u=76281980&t=32)** Now, if I click into the tags option here you can see I'd get them condensed so I can kind of see what's going on.
>
> **[0:38](https://www.linkedin.com/learning/powershell-7-essential-training/install-powershell-7?u=76281980&t=38)** I'm going to pick one that is not a preview version or the RC, which is the release candidate version.
>
> **[0:44](https://www.linkedin.com/learning/powershell-7-essential-training/install-powershell-7?u=76281980&t=44)** So I'm going to pick version 7.0.3 but you can pick either version.
>
> **[0:49](https://www.linkedin.com/learning/powershell-7-essential-training/install-powershell-7?u=76281980&t=49)** Click downloads, this will take me directly to the download option where if we scroll down you'll be able to see all the information about it, and then you'll see RPM packages, top packages 64 bit MSIs, etc.
>
> **[1:02](https://www.linkedin.com/learning/powershell-7-essential-training/install-powershell-7?u=76281980&t=62)** So I'm going to download the 7.0.3-win-X64.MSI, this will download it locally to the machine.
>
> **[1:09](https://www.linkedin.com/learning/powershell-7-essential-training/install-powershell-7?u=76281980&t=69)** It's about 80 MEG or so, and whether you're installing on windows, Linux, or a Mac it really makes no difference, the process is fundamentally the same, for the windows option I'm going to choose open file once it's downloaded, this will then bring up the wizard for me I'm going to choose next, it's going to drop it into C program files and PowerShell, that's where we'd like to leave it.
>
> **[1:31](https://www.linkedin.com/learning/powershell-7-essential-training/install-powershell-7?u=76281980&t=91)** You can change it if you need to, but the default is there.
>
> **[1:35](https://www.linkedin.com/learning/powershell-7-essential-training/install-powershell-7?u=76281980&t=95)** I'm then going to go through, it'll say, add PowerShell to the environment path, which is what we want to do, register windows event login, which we would I'm going to say, add open here and then you'll see it says, enable PowerShell remoting.
>
> **[1:47](https://www.linkedin.com/learning/powershell-7-essential-training/install-powershell-7?u=76281980&t=107)** Now you don't actually have to do this, and at this point I'm not going to cause we'll enable it later utilizing PowerShell itself.
>
> **[1:54](https://www.linkedin.com/learning/powershell-7-essential-training/install-powershell-7?u=76281980&t=114)** So I'm going to choose next and choose install here accept the UAC, and then leave it to install.
>
> **[2:02](https://www.linkedin.com/learning/powershell-7-essential-training/install-powershell-7?u=76281980&t=122)** So now that PowerShell is completed, if I click launch PowerShell and then finish, what you should now see, is that it launches the PWSH Console, I'm going to make it a little bigger here and it should now say PowerShell 7.0.3.
>
> **[2:17](https://www.linkedin.com/learning/powershell-7-essential-training/install-powershell-7?u=76281980&t=137)** So it launches the exact version.
>
> **[2:20](https://www.linkedin.com/learning/powershell-7-essential-training/install-powershell-7?u=76281980&t=140)** Now if I close this, and go back to my start menu you'll see what we now have if I expand we've got my windows terminal and the PowerShell 7.
>
> **[2:29](https://www.linkedin.com/learning/powershell-7-essential-training/install-powershell-7?u=76281980&t=149)** If I go to my windows terminal just launch it as administrator as we have in the past, what we'll still see, is if I say PS version table you can see that the current version that I'm running in this window is 5.1.
>
> **[2:47](https://www.linkedin.com/learning/powershell-7-essential-training/install-powershell-7?u=76281980&t=167)** So now we need to change this, you'll see that now we've installed PowerShell 7, we now get this PowerShell option here.
>
> **[2:54](https://www.linkedin.com/learning/powershell-7-essential-training/install-powershell-7?u=76281980&t=174)** So I'm going to click this, this will launch into a separate window and now it will say PowerShell 7.
>
> **[3:01](https://www.linkedin.com/learning/powershell-7-essential-training/install-powershell-7?u=76281980&t=181)** So just to prove that to you, if I say PS version table, you can see it's now version 7.0.3, it's the core edition and it's made for windows.
>
> **[3:11](https://www.linkedin.com/learning/powershell-7-essential-training/install-powershell-7?u=76281980&t=191)** So there is a difference between windows PowerShell and PowerShell 7.
>
> **[3:16](https://www.linkedin.com/learning/powershell-7-essential-training/install-powershell-7?u=76281980&t=196)** You can run them side by side and as you can see the install is fairly straightforward.
>
> **[3:21](https://www.linkedin.com/learning/powershell-7-essential-training/install-powershell-7?u=76281980&t=201)** If you're running this on a Mac or Linux machine, it's a little bit different you're going to extract the tar or the zip files, or install the RPM files, etc.
>
> **[3:30](https://www.linkedin.com/learning/powershell-7-essential-training/install-powershell-7?u=76281980&t=210)** But the process will be the same.
>
> **[3:31](https://www.linkedin.com/learning/powershell-7-essential-training/install-powershell-7?u=76281980&t=211)** You will then be able to run that version of PowerShell, directly on that operating system.
>
> **[3:39](https://www.linkedin.com/learning/powershell-7-essential-training/install-powershell-7?u=76281980&t=219)** But for windows, we still get the best of both, and we'll talk later about how we can run PowerShell scripts in either option from either of the windows.

> [!info]- Semantic Content
>
> **Tools:** powershell (19), windows terminal (2), github (1)
> **Versions:** version 7 (2), 0.3 (2), 7.0.3 (2), 7.1.0 (1), 5.1 (1)
> **Env Vars:** rpm (2), x64 (1), msi (1), meg (1), uac (1)
> **Prerequisites:** install (5)
> **Code Keywords:** this, (4)
> **UI Navigation:** go to (2), navigate to (1), scroll down (1)
> **CLI Commands:** make (1), tar (1)
> **Exercise Files:** download the (2)

#### Work with PowerShell modules
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=0)** - [Instructor] One of the ways that we can improve or enhance the PowerShell experience is to actually import modules.
>
> **[0:08](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=8)** Now, this is done by utilizing a command called import module.
>
> **[0:13](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=13)** Now the import module has various parameters that are available.
>
> **[0:17](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=17)** You can see that as we click through them, there are a few simple ones.
>
> **[0:21](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=21)** The first one is global, which will import it globally.
>
> **[0:24](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=24)** We can go back and tap through and a prefix.
>
> **[0:28](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=28)** We can add a prefix to the names of the actual cmdlets that have been imported.
>
> **[0:33](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=33)** And then of course we've got the name of the module.
>
> **[0:36](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=36)** Now, if I wanted to bring in a module, I could say PowerShell diagnostics and say import the module.
>
> **[0:44](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=44)** What this will do is go and find that PowerShell diagnostics module and import it.
>
> **[0:49](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=49)** Now, what I'm going to do here is just quickly go back to the PowerShell ISE for a second.
>
> **[0:55](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=55)** Now of course, this isn't the window that we want to use, but for the purposes of this it helps us kind of understand what we mean by the modules that have been imported.
>
> **[1:05](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=65)** So you can see from here, if I go down to the one I just utilized which was PS diagnostics, this is the one that I just imported here.
>
> **[1:14](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=74)** Now if I need to know the names of them, I can come into PowerShell ISE, and then know that the name for VPN client is VPN client, or if it's an Azure one, I can use Azure.
>
> **[1:26](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=86)** Now, what about if we don't want to launch that?
>
> **[1:28](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=88)** How do we know the names of the modules?
>
> **[1:32](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=92)** Well we can use a command called get module, and then it actually has a property called list available.
>
> **[1:38](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=98)** So I'm going to press enter here.
>
> **[1:40](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=100)** This will now go and look inside PowerShell Core and look for the list of modules that are available.
>
> **[1:48](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=108)** So you can see if we scroll down, you should see my PS diagnostics one, that should be available here somewhere.
>
> **[1:53](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=113)** Now I've already imported that one, but there'll be a diagnostics one available.
>
> **[1:57](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=117)** We've got Windows Defender, we've got BitLocker, we've got regular PowerShell diagnostics that are available.
>
> **[2:03](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=123)** So we have the name of the ones that we wish to import in.
>
> **[2:07](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=127)** So let me just clear that.
>
> **[2:09](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=129)** What we can do then is we could say, get dash module, list available.
>
> **[2:18](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=138)** And then with the pipe command that we utilize, we could basically go back and import every single module.
>
> **[2:25](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=145)** Now, I'm going to recommend that you don't do that.
>
> **[2:28](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=148)** Though that is an option.
>
> **[2:29](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=149)** You could say for all of the modules that are available to me in PowerShell, just import them all.
>
> **[2:36](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=156)** Now, what about if we wanted to import the members of more than one into the current session?
>
> **[2:43](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=163)** So now we're going to get into the realms of creating a variable.
>
> **[2:47](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=167)** So I'm creating a variable called module.
>
> **[2:50](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=170)** I'm going to go into here and say get module.
>
> **[2:52](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=172)** Now what that means is that this module variable is going to be populated with whatever the output is from the get module.
>
> **[2:59](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=179)** So I'm going to say list available, and then I'm going to say diagnostics.
>
> **[3:05](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=185)** And notice I just pressed the tab key.
>
> **[3:08](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=188)** And then I'm going to use DSIM, or actually it should be in lowercase Dsim even.
>
> **[3:14](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=194)** So we've got these two.
>
> **[3:16](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=196)** So I'm going to say, get the module from the available ones and pick out diagnostics in Dism.
>
> **[3:24](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=204)** If I enter that now, now what does that do for our module?
>
> **[3:27](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=207)** Well, let me look at the module itself.
>
> **[3:30](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=210)** Sure enough, my module variable is now populated with those two modules only, nothing else.
>
> **[3:38](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=218)** So you can see, we can kind of chop and change and move things around and say, well, I just want to have this one and this one and this one.
>
> **[3:45](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=225)** What I could then do, let me just clear this out, is I can then use import module, and the module info that's available to me is inside that variable name.
>
> **[3:58](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=238)** So the import module has more than just one or two parameters, even though I only showed a couple of them, so global and name, et cetera.
>
> **[4:04](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=244)** Module info will now import those ones that we've chosen.
>
> **[4:08](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=248)** So I'm going to press enter.
>
> **[4:10](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=250)** And so what will happen now is it will have imported those modules directly into the window.
>
> **[4:15](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=255)** Now of course, you see running really, really quickly, and that's by design because some of these modules are loaded by default.
>
> **[4:21](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=261)** But for example if I was importing a third party module or maybe downloading the Microsoft Azure or the Office 365 ones, or Microsoft Teams for example.
>
> **[4:31](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=271)** When we import those modules, sometimes it can take quite a while for it to import and they often present information back to the screen to say, hey, these are the things that have been imported.
>
> **[4:44](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=284)** Now, outside of picking specific modules, what we can also do is restrict the module members that we import.
>
> **[4:54](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=294)** So remember how we ran import module, and I'm going to say diagnostics.
>
> **[5:01](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=301)** We ran that command which means that everything inside the PS diagnostics has now been loaded.
>
> **[5:07](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=307)** So let's go back to PowerShell ISE.
>
> **[5:11](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=311)** It's just an easy representation of the actual modules that have been loaded.
>
> **[5:16](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=316)** So I finished the load on the right-hand side.
>
> **[5:18](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=318)** And then from here, let me just make this a little bit bigger, so we can see.
>
> **[5:22](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=322)** And what I'll do is scroll down until I can see my diagnostics one, PS diagnostics.
>
> **[5:29](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=329)** And notice we have some methods here or some functions or cmdlets that we can utilize.
>
> **[5:34](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=334)** Now let's say what I wanted to do was really just import some specific functions out of that module.
>
> **[5:43](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=343)** I don't want to load all of them because I don't need them.
>
> **[5:46](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=346)** Or maybe I already have some that are called the same name and it would cause me an issue.
>
> **[5:50](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=350)** So let's say we wanted to bring in something like disable and enable.
>
> **[5:55](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=355)** Those are the only two that we needed.
>
> **[5:57](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=357)** So let's minimize that and go back to our import statement here.
>
> **[6:01](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=361)** Now what we can do is we also have a parameter called function.
>
> **[6:05](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=365)** So when we import the module PS diagnostics, I can then filter that out and say disable PS.
>
> **[6:14](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=374)** And you can see I'm tabbing through the values.
>
> **[6:17](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=377)** I can then say, well actually we wanted the enable one, PS breakpoint and trace.
>
> **[6:25](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=385)** So what this will now do is import the module PS diagnostics, but only bring in the specific functions or cmdlets that we've asked it to import.
>
> **[6:37](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=397)** Okay, so how does that work?
>
> **[6:39](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=399)** Well I'm going to enter this one, but actually what's going to happen is I'm going to say I want to get a specific command.
>
> **[6:48](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=408)** And you'll see that when we do the star, I can say PS trace.
>
> **[6:54](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=414)** And you'll say that when it comes back, it only retrieves those two messages.
>
> **[7:00](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=420)** It just comes back with disabled PS trace, enable PS trace, because even though I imported the full module last time, it only bought those ones because I overrode that with function.
>
> **[7:11](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=431)** So let's go back and say import diagnostics, and then run that command again.
>
> **[7:17](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=437)** And notice what's happened.
>
> **[7:18](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=438)** It's overridden that to only bring those two options, because those are the ones that are available.
>
> **[7:25](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=445)** Now, if we expand this a little bit more and say PS, you can see we get a whole host of different ones that are available.
>
> **[7:32](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=452)** PS drive, PS session, PS break, and et cetera.
>
> **[7:35](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=455)** And you'll see in the right-hand side the actual container that they exist in.
>
> **[7:40](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=460)** So PS diagnostics, you can see we've got WS man combined trace et cetera.
>
> **[7:45](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=465)** So depending on how you import that in will determine whether all the methods are available or only some of those are available.
>
> **[7:54](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=474)** So let me just clear that screen.
>
> **[7:56](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=476)** We also have the ability to import modules from for example, a different machine.
>
> **[8:03](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=483)** So for example, I could create a new session here.
>
> **[8:06](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=486)** I could say new PS session, and then I'm going to pass my computer name.
>
> **[8:12](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=492)** So let's call it, computer one.
>
> **[8:17](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=497)** I could then create that session.
>
> **[8:19](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=499)** Once I have that session, then I'm actually going to delete that.
>
> **[8:22](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=502)** I'm not going to generate this at the moment.
>
> **[8:24](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=504)** What I can then do is say, get module PS session.
>
> **[8:30](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=510)** I would pass that session variable back in, I would say list available.
>
> **[8:36](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=516)** And then I would say name, and then let's say that was PS diagnostics or something else.
>
> **[8:44](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=524)** So not only can we import modules locally from the machine that we're on, but if we're doing a remote session, we can also bring those in from a different location.
>
> **[8:56](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=536)** Now, our last option is a little bit different.
>
> **[8:59](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=539)** What we can also do when we import modules.
>
> **[9:01](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=541)** So if I go back to import module, I'm going to stick to my diagnostics one.
>
> **[9:09](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=549)** And what I can do is remember we had an option called prefix, and the prefix one meant that my functions or commands that come in get a prefix.
>
> **[9:19](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=559)** So I'm going to just type the word demo.
>
> **[9:23](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=563)** And then I'm going to use a property called pass thru.
>
> **[9:25](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=565)** And I'm going to enter that there.
>
> **[9:27](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=567)** Now notice on the right-hand side it says exported commands.
>
> **[9:31](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=571)** You'll notice now that they all have demo before it.
>
> **[9:35](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=575)** So if I say, get command, star, demo, and what you'll now see is all of those commands that were originally in the PS diagnostics one, and just said PS trace or PS something, now say demo PS something.
>
> **[9:53](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=593)** Because there are times where we are importing multiple modules and they may have the same functions or methods, and to make sure they don't overlap, we can actually prefix and name them as needed.
>
> **[10:05](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=605)** So there's a few ways to import modules.
>
> **[10:07](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-powershell-modules?u=76281980&t=607)** This will be what helps in being successful in PowerShell by importing the right modules as needed.

> [!info]- Semantic Content
>
> **Code Keywords:** module (30), let (12), pass (3), else. (2), import. (2)
> **Tools:** powershell (10)
> **Env Vars:** ise (3), vpn (2), dsim (1)
> **Analogies:** for example (4)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is an  (1), means that (1), is a  (1)
> **Cross-References:** go back to (2)
> **UI Navigation:** scroll down (2)


### 3. Commands and Syntax

> [↑ Back to Table of Contents](#table-of-contents)

#### Discover commands
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-7-essential-training/discover-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-7-essential-training/discover-commands?u=76281980&t=0)** - [Instructor] So PowerShell itself uses a verb-hyphen-noun naming system.
>
> **[0:06](https://www.linkedin.com/learning/powershell-7-essential-training/discover-commands?u=76281980&t=6)** The PowerShell cmdlet name consists of a standard verb hyphenated with a specific noun.
>
> **[0:13](https://www.linkedin.com/learning/powershell-7-essential-training/discover-commands?u=76281980&t=13)** So for example, Get-Service New-service or something like Suspend-Service.
>
> **[0:21](https://www.linkedin.com/learning/powershell-7-essential-training/discover-commands?u=76281980&t=21)** Each of the PowerShell commands are named this way.
>
> **[0:25](https://www.linkedin.com/learning/powershell-7-essential-training/discover-commands?u=76281980&t=25)** Now, for example, if we wanted to review all of the commands that are available within a specific cmdlet, we can use what's called the Get-Command.
>
> **[0:35](https://www.linkedin.com/learning/powershell-7-essential-training/discover-commands?u=76281980&t=35)** This enables discovery of accessible cmdlets.
>
> **[0:38](https://www.linkedin.com/learning/powershell-7-essential-training/discover-commands?u=76281980&t=38)** We then have the ability to filter by using various properties, such as CommandType, the name, and of course the version.
>
> **[0:46](https://www.linkedin.com/learning/powershell-7-essential-training/discover-commands?u=76281980&t=46)** We can also then utilize the filtered parameter to do a free text search for a specific command or command type.
>
> **[0:56](https://www.linkedin.com/learning/powershell-7-essential-training/discover-commands?u=76281980&t=56)** Now in order for us to actually view types of commands, we're able to, for example, type Get-Command and then use the verb parameter, and then specify the type of verb.
>
> **[1:08](https://www.linkedin.com/learning/powershell-7-essential-training/discover-commands?u=76281980&t=68)** In this instance, we're looking for verbs that would begin with add, so add computer or add something.
>
> **[1:15](https://www.linkedin.com/learning/powershell-7-essential-training/discover-commands?u=76281980&t=75)** We could also then view all noun commands by utilizing the dash noun property.
>
> **[1:21](https://www.linkedin.com/learning/powershell-7-essential-training/discover-commands?u=76281980&t=81)** And then for example, here, we're going to find all of the noun commands that have the word computer in that second noun part.
>
> **[1:28](https://www.linkedin.com/learning/powershell-7-essential-training/discover-commands?u=76281980&t=88)** So this would be Get-Computer, New-Computer, Stock-Computer, et cetera.
>
> **[1:33](https://www.linkedin.com/learning/powershell-7-essential-training/discover-commands?u=76281980&t=93)** We could also then view everything that's classed as a cmdlet by utilizing command type, which then allow us to specify that.
>
> **[1:41](https://www.linkedin.com/learning/powershell-7-essential-training/discover-commands?u=76281980&t=101)** If we just want to actually do a free text search, we can actually type Get-Command.
>
> **[1:47](https://www.linkedin.com/learning/powershell-7-essential-training/discover-commands?u=76281980&t=107)** And then in asterisk or star, whatever you want to call it, we can type the free text value that we're looking for.
>
> **[1:55](https://www.linkedin.com/learning/powershell-7-essential-training/discover-commands?u=76281980&t=115)** Now, we also have the ability to find commands that would exist within a PowerShell module.
>
> **[2:01](https://www.linkedin.com/learning/powershell-7-essential-training/discover-commands?u=76281980&t=121)** So for example, the find cmdlet finds PowerShell commands such as cmdlets, aliases, functions and workflows.
>
> **[2:09](https://www.linkedin.com/learning/powershell-7-essential-training/discover-commands?u=76281980&t=129)** The Find-Command will search the modules in the registered repositories that we're kind of looking against.
>
> **[2:16](https://www.linkedin.com/learning/powershell-7-essential-training/discover-commands?u=76281980&t=136)** For each command found by the Find-Command, it will return what's called a PSGetCommandInfo object.
>
> **[2:24](https://www.linkedin.com/learning/powershell-7-essential-training/discover-commands?u=76281980&t=144)** The PSGetCommandInfo object can then be sent down the pipeline, for example, to use install module.
>
> **[2:31](https://www.linkedin.com/learning/powershell-7-essential-training/discover-commands?u=76281980&t=151)** The Install-Module command will then install the module that contains that specific command.
>
> **[2:37](https://www.linkedin.com/learning/powershell-7-essential-training/discover-commands?u=76281980&t=157)** So if we're trying to identify a command that will let me perform a certain action on a computer, if I use the Find-Command, retrieve the object, I can do a pipe command and then join that together with the install.

> [!info]- Semantic Content
>
> **Code Keywords:** module (4), type. (1), type, (1), for. (1), let (1)
> **Analogies:** for example (6), such as (2)
> **CLI Commands:** find (6)
> **Tools:** powershell (5)
> **Prerequisites:** install (4)
> **Speakers:** - [instructor] (1)

#### Explore help
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=0)** - [Instructor] When working with PowerShell, one of the things that you need to understand is how the functions and commands actually work.
>
> **[0:08](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=8)** And the nice thing is that in Powershell, we actually have a function called Get-Help.
>
> **[0:14](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=14)** Now of course, I've just scrolled.
>
> **[0:16](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=16)** It just gives me some basic information.
>
> **[0:18](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=18)** But notice the structure here.
>
> **[0:20](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=20)** So what it does if I keep scrolling, it gives me some explanation about the commands.
>
> **[0:25](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=25)** So I chose Get-Help.
>
> **[0:27](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=27)** And then a long description, some online help.
>
> **[0:31](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=31)** Where to get updated information from.
>
> **[0:34](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=34)** And then if we scroll right towards the bottom here, we get some examples of how to utilize that specific function.
>
> **[0:41](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=41)** So let's just clear that for a second.
>
> **[0:43](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=43)** So let's say I wanted to utilize the Format-Table command which allows us to format results in the table format.
>
> **[0:53](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=53)** I could simply type Get-Help, and do Format-Table.
>
> **[0:57](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=57)** Now what it does for each of the properties or commands that we check, it will bring back the name, the syntax, any aliases.
>
> **[1:06](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=66)** Which is really really powerful.
>
> **[1:07](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=67)** Because it means you don't actually have to type Format-Table.
>
> **[1:11](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=71)** In fact if I just clear this and we repeat that same thing.
>
> **[1:15](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=75)** If I was to do format and then type ft, you'll see it's still returns back the same value because ft is an alias of format table.
>
> **[1:26](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=86)** And then it gives you some remarks, you know this is what it's used for et cetera.
>
> **[1:30](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=90)** So we can also access that by doing the same thing.
>
> **[1:35](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=95)** But there's also a name parameter as well.
>
> **[1:39](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=99)** So if I say Format-Table, it will return the same amount of information.
>
> **[1:44](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=104)** We also have the ability to type the same thing.
>
> **[1:48](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=108)** So I could say Format-Table this time, and then do a question mark.
>
> **[1:55](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=115)** And that would return the same thing.
>
> **[1:56](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=116)** So basic help information about a cmdlet can be done either by using Get-Help, and then the cmdlet.
>
> **[2:05](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=125)** Get-Help dash name and the cmdlet.
>
> **[2:08](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=128)** Or we can use the dash question mark.
>
> **[2:10](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=130)** Now of course when we're really delving into getting information, often what we want to do is get a quick view of how to use something.
>
> **[2:19](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=139)** We can also utilize the word help.
>
> **[2:22](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=142)** Help again retrieves the details about that specific command.
>
> **[2:28](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=148)** Now notice what happened this time.
>
> **[2:30](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=150)** It gives me expanded help information, but it also gives it in pages.
>
> **[2:36](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=156)** So you can see that as I'm clicking here, it's slowly stepping through the page information.
>
> **[2:41](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=161)** Now where does that information come from?
>
> **[2:43](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=163)** That comes from online.
>
> **[2:44](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=164)** It's the same information that you'll often find presented in the Microsoft documentation.
>
> **[2:50](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=170)** Now we also can utilize what's called man Format-Table.
>
> **[2:55](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=175)** Or man and whatever the object would be.
>
> **[2:58](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=178)** This does the exact same thing as utilizing help as well.
>
> **[3:04](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=184)** What it does is it lets me step line by line by pressing the Enter key.
>
> **[3:10](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=190)** So I can really understand what's going on.
>
> **[3:12](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=192)** Or I can press the Spacebar, and it will do it by paging.
>
> **[3:16](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=196)** Now if we're not using that same mechanism, but we're actually utilizing the Get-Help function.
>
> **[3:23](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=203)** Then what we can do is I can say get Format-Table.
>
> **[3:27](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=207)** I remember how we use the pipe option.
>
> **[3:29](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=209)** I can say Out-Host.
>
> **[3:32](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=212)** And then you'll see I have a paging option.
>
> **[3:36](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=216)** Which will then if it needs more space, will page all of the information into a single page.
>
> **[3:43](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=223)** And then I can press Enter or Space.
>
> **[3:46](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=226)** Now you'll notice that help and man gave me more information.
>
> **[3:48](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=228)** And that's because it goes and gets me more detailed information, versus typing the Out-Host paging option.
>
> **[3:56](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=236)** Now what about if we wanted to retrieve more detailed information?
>
> **[4:01](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=241)** Well this is where the get help option becomes really, really powerful.
>
> **[4:04](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=244)** So we'll stick with our Get-Help Format-Table.
>
> **[4:07](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=247)** And you'll see we have a property called detailed.
>
> **[4:10](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=250)** And what this will do is it gives me the bottom section that we looked at.
>
> **[4:14](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=254)** But you'll notice it lists all of the parameters as well as the syntax format as before.
>
> **[4:19](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=259)** But it will list all of them, even the ones that would be optional.
>
> **[4:24](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=264)** Now we can change a little bit further.
>
> **[4:27](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=267)** We could repeat that same one, but instead of using detailed, we could actually use the word full.
>
> **[4:33](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=273)** Now what this will do is give me, notice the similarity here to using help Format-Table, or format-Table and the question mark.
>
> **[4:41](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=281)** It will give me all of the properties, with all of the details about them.
>
> **[4:46](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=286)** So are they required?
>
> **[4:47](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=287)** The position.
>
> **[4:48](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=288)** What's the parameter set name?
>
> **[4:50](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=290)** Is it an alias?
>
> **[4:51](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=291)** Is it dynamic, et cetera?
>
> **[4:53](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=293)** So we can retrieve lots and lots of help information in various different ways.
>
> **[4:59](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=299)** Now of course often we don't want just the help information.
>
> **[5:04](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=304)** What we actually want is we would love to be able to see examples.
>
> **[5:09](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=309)** So we can say examples.
>
> **[5:10](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=310)** And notice what happens here.
>
> **[5:12](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=312)** It says get help, cannot find the help files.
>
> **[5:16](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=316)** So this is a powerful tool where we can come into here.
>
> **[5:20](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=320)** And say, online, press Enter.
>
> **[5:23](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=323)** And what this will do is launch the web browser that's on the machine.
>
> **[5:26](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=326)** And notice what it does, it takes me to Format-Table and gives me access to the online help if needed.
>
> **[5:34](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=334)** Now if we didn't need the online help, but actually it was more of a question around the parameters.
>
> **[5:41](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=341)** Then I could say parameter*.
>
> **[5:43](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=343)** And this would just return the list of parameters.
>
> **[5:46](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=346)** 'Cause remember when we're utilizing PowerShell commands, we may not really know what is available.
>
> **[5:52](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=352)** So for example, we've been using Format-Table, but what about if I wanted to choose a different function?
>
> **[5:58](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=358)** So I can say Get-Help and maybe Get-ChildItem.
>
> **[6:04](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=364)** And then I want to see if we've got any parameters.
>
> **[6:07](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=367)** Same principle applies.
>
> **[6:09](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=369)** It will work for that specific function also.
>
> **[6:15](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=375)** We can also then determine by a specific type of parameter.
>
> **[6:20](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=380)** So if you remember I typed star for the parameter.
>
> **[6:24](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=384)** I could say well let's choose GroupBy.
>
> **[6:28](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=388)** And it will just return the details of that specific one that's there.
>
> **[6:33](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=393)** So not only can we get detailed information, full information, syntax help, online help.
>
> **[6:39](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=399)** We can also get examples and of course parameter access if needed.
>
> **[6:44](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=404)** To limit down what we actually return.
>
> **[6:47](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=407)** Now of course if I want to view things like conceptual type things, then I can type in Get-Help.
>
> **[6:56](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=416)** And I'm going to type something called about_*.
>
> **[7:00](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=420)** And now you'll notice what happened here.
>
> **[7:01](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=421)** It went out and looked for help information that had the word about_.
>
> **[7:07](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=427)** And this looks online for some conceptual type documentation that is available.
>
> **[7:13](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=433)** And you can see we've got about_should, about_Mocking, about_PSReadLine.
>
> **[7:18](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=438)** So nothing that's specific to what we needed for our format table.
>
> **[7:23](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=443)** But you can see that we can bring that information back.
>
> **[7:26](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=446)** For example if I wanted to say format_*, it's going to go and do a search.
>
> **[7:32](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=452)** And hopefully there we go it should come back with nothing.
>
> **[7:34](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=454)** Because there isn't really anything that matches format.
>
> **[7:37](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=457)** It's all looking for documentation that's conceptual so it uses the word about as the prefix.
>
> **[7:45](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=465)** Okay now often what you're trying to do is you want to search for a word in the cmdlet help.
>
> **[7:52](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=472)** To kind of help you figure out what it is you're trying to do and how to utilize that PowerShell cmdlet a little bit further.
>
> **[8:01](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=481)** Now what we can do here is I can say get help.
>
> **[8:05](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=485)** And then I'm going to say Add-Member, which will be a command.
>
> **[8:08](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=488)** I want to get the full detail.
>
> **[8:10](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=490)** But what I'm going to do here is I'm going to output the string value of it.
>
> **[8:16](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=496)** And stream it.
>
> **[8:18](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=498)** And then I want to say Select-String.
>
> **[8:21](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=501)** And I'm looking for the pattern.
>
> **[8:23](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=503)** So I'm going to to press Enter.
>
> **[8:25](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=505)** And notice what happened here.
>
> **[8:26](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=506)** It came back and gave me an error, and said that I was missing some value.
>
> **[8:30](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=510)** And that's perfect.
>
> **[8:31](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=511)** Because we need to specify what the pattern would be.
>
> **[8:35](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=515)** So I'm going to say Clixml.
>
> **[8:38](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=518)** It's going to go and look into that value.
>
> **[8:42](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=522)** The actual get help mechanism for Add-Member.
>
> **[8:45](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=525)** Looking in the full detail for some value that contains Clixml.
>
> **[8:54](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=534)** There are often times where we just need to look for a specific word to help us understand what it is we need to utilize.
>
> **[9:02](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=542)** So we can go back to this name option, and then I'm going to say remoting.
>
> **[9:07](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=547)** And what this will do is this goes back and checks and says I'm looking for help on remoting.
>
> **[9:12](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=552)** It will come back and say, okay we have some cmdlets available to us.
>
> **[9:16](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=556)** Which is Enable-PSRemoting and disable.
>
> **[9:19](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=559)** And then we have a ps1, which is an external file that's available to us.
>
> **[9:23](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=563)** So it gives us this ability to identify content where we can go and look for something that matches that type of phrase or word that we're utilizing.
>
> **[9:35](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=575)** Now we can also use the Get-Help against other scripts that we may have written ourselves.
>
> **[9:39](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=579)** So if we've wrote a ps1 script.
>
> **[9:42](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=582)** We can then execute Get-Help name, and then pass the PS script option if needed.
>
> **[9:48](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=588)** We can also then go and save specific help information if we need to.
>
> **[9:54](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=594)** So if I just clear this here, you can see that there is a Save-Help option.
>
> **[10:01](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=601)** And it's going to ask me for a specific path.
>
> **[10:04](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=604)** Now what this means is that we can specify the module that we wish to download the specific command to.
>
> **[10:13](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=613)** Now what this one does is this requires us to specify the module name.
>
> **[10:19](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=619)** So for example, we could use a PSDiagnostics.
>
> **[10:25](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=625)** Which is the module that we had.
>
> **[10:27](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=627)** We can then go and get the module information using what's called Invoke-Command.
>
> **[10:35](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=635)** We can then say the script block that I wish to pass this to.
>
> **[10:40](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=640)** Now a script block is a kind of extra special piece where we can add other functions.
>
> **[10:48](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=648)** So I'm going to say, Get-Module, -Name.
>
> **[10:52](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=652)** Make sure we do that.
>
> **[10:53](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=653)** And then I'm going to say module name.
>
> **[10:58](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=658)** And we've ran this command before where it says list available.
>
> **[11:01](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=661)** So I'm going to do Enter.
>
> **[11:02](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=662)** And then just to check that we can say get module and sure enough, it's got our PSDiagnostics one.
>
> **[11:08](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=668)** And then what I can do at this point is then pass that into the Save-Help function.
>
> **[11:15](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=675)** So save module.
>
> **[11:18](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=678)** Module.
>
> **[11:20](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=680)** It's going to ask me for a destination path that I wish to add that into.
>
> **[11:25](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=685)** And then what I can do is simply say, I want to save that to SavedHelp, like so.
>
> **[11:34](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=694)** And Enter that.
>
> **[11:35](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=695)** Now of course, it's come back and says, it's failed to save because I actually haven't created the path.
>
> **[11:39](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=699)** So we can do this here, file, explorer.
>
> **[11:42](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=702)** I'm going to go into my C drive, and I'll just create a new folder called SavedHelp.
>
> **[11:49](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=709)** And then what we'll do is re-execute that.
>
> **[11:51](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=711)** And you can see it's locating the help content for it.
>
> **[11:54](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=714)** If I go here into SavedHelp, you'll now see that the help information is now available to me as an XML definition, and a cabinet file that goes with it.
>
> **[12:03](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=723)** So it's important to understand that even if we don't have some of the help information, we can actually download that from across the internet, across the PowerShell gallery, and download that locally into the machine that we're on.
>
> **[12:16](https://www.linkedin.com/learning/powershell-7-essential-training/explore-help?u=76281980&t=736)** So the Get-Help function allows us to retrieve information about any of the scripts that we've written, the modules that we're retrieving, or any of the cmdlets that we would be utilizing.

> [!info]- Semantic Content
>
> **Code Keywords:** module (9), function (7), let (3), pass (3), from. (1)
> **Tools:** powershell (5)
> **Definitions:** is a  (3), is an  (2)
> **CLI Commands:** find (2), make (1)
> **Analogies:** for example (3)
> **Code Identifiers:** about_should (1)
> **Env Vars:** xml (1)
> **Cross-References:** go back to (1)

#### Understand cmdlet syntax
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=0)** - [Instructor] A critical piece of utilizing PowerShell is understanding the syntax.
>
> **[0:05](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=5)** PowerShell is designed around the idea of getting, setting, starting, stopping, outputting or even creating new objects of some description.
>
> **[0:16](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=16)** Each pipeline operator can be utilized to send the result of a proceeding command to the next command.
>
> **[0:24](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=24)** Multiple pipes can then be used to join specific commands together.
>
> **[0:28](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=28)** Now, you may wonder what the pipe command is.
>
> **[0:31](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=31)** It's one that appears above the Return or the Enter key on the keyboard.
>
> **[0:35](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=35)** You can then use complex commands and chain or pipeline that is composed of a series of simple commands.
>
> **[0:45](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=45)** Now to see how this would work, we can, for example retrieve a specific service.
>
> **[0:51](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=51)** So if I choose Get-Service, which would exist on a specific machine, and you'll notice that I'm using a pipe command and right after it, I'm saying Sort-Object.
>
> **[1:02](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=62)** So I'm passing one command output into a second command output, and then I'm using the property status to actually sort that.
>
> **[1:12](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=72)** Now we can go one step further.
>
> **[1:13](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=73)** Let's say I wanted to retrieve all of the services excluding the stop services, and then display the name.
>
> **[1:21](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=81)** Now I have three pipe commands.
>
> **[1:23](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=83)** So first I call the first cmdlet, Get-Service, pipe the return results into a WHERE statement for filtering.
>
> **[1:30](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=90)** And then I pipe the output of that command to a SELECT.
>
> **[1:36](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=96)** We can also then display text and save a file using that same thing.
>
> **[1:40](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=100)** So instead of me calling a command, I'm actually just writing a piece of text in quotes, but then I'm piping that value into a command called Out-File, which will then create me a file.
>
> **[1:53](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=113)** Now, of course, one other piece of PowerShell syntax is variables.
>
> **[1:58](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=118)** Now to create a variable, you type the dollar sign before the name.
>
> **[2:03](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=123)** So dollar variable.
>
> **[2:05](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=125)** Variables can then be assigned to either static or dynamic values.
>
> **[2:10](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=130)** So for example, if it was static, you could say dollar variable name equals and then in quotes the value.
>
> **[2:17](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=137)** If it was dynamic it could be dollar variable equals Get-Service, and the variable would then be populated with the output of that command.
>
> **[2:27](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=147)** System Variables can also be retrieved and set.
>
> **[2:31](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=151)** So out of the box there are series of commands that are available.
>
> **[2:36](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=156)** Now you can store all types of values in PowerShell variables.
>
> **[2:40](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=160)** For example, you can store the results of commands and store elements that are used in commands and expressions, such as names, paths, and values.
>
> **[2:50](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=170)** A variable is a unit of memory in which those values are stored.
>
> **[2:54](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=174)** In PowerShell variables are represented by text strings that begin with the dollar sign.
>
> **[3:00](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=180)** Variable names aren't case sensitive, and can include spaces and special characters.
>
> **[3:07](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=187)** Variable names that include the special characters and spaces can often be difficult to use.
>
> **[3:12](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=192)** And really we should be avoiding those.
>
> **[3:15](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=195)** Now there are different types of variables in PowerShell.
>
> **[3:18](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=198)** The first would be a user-created variable.
>
> **[3:21](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=201)** User-created variables are created and maintained by the user.
>
> **[3:25](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=205)** By default, the variables that you create at the PowerShell command line exist while that PowerShell window is open.
>
> **[3:33](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=213)** When the PowerShell window is closed, the variables are removed and deleted.
>
> **[3:39](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=219)** Automatic variables are the second option.
>
> **[3:41](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=221)** They're used to store the state of PowerShell.
>
> **[3:44](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=224)** So these variables are created by PowerShell and PowerShell will change their values as required to maintain the accuracy of those values.
>
> **[3:53](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=233)** You cannot change the values of those variables.
>
> **[3:57](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=237)** And then the last one is preference variables.
>
> **[3:59](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=239)** Preference variable store user preferences for PowerShell such as the font, the color, the size of the screen or some of those system environment variables.
>
> **[4:10](https://www.linkedin.com/learning/powershell-7-essential-training/understand-cmdlet-syntax?u=76281980&t=250)** These variables are created by PowerShell and are populated with default values.

> [!info]- Semantic Content
>
> **Tools:** powershell (14), command line (1)
> **Analogies:** for example (3), such as (2)
> **Code Keywords:** static (2), let (1), default, (1)
> **SQL:** where (1), select (1)
> **Env Vars:** where (1), select (1)
> **Definitions:** is a  (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### Understand terse commands
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=0)** - [Instructor] Now as you start to utilize PowerShell, you'll find that the commands can often be complicated to remember or we're not quite sure what the syntax would be.
>
> **[0:10](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=10)** So one of the nice things about PowerShell, which we already looked at, but let's just remember this is if I was to use a command called Get-Command and I wanted to put this as a table format I would type Get-Command Format-Table.
>
> **[0:26](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=26)** And that would return that specific information.
>
> **[0:29](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=29)** So I can say Format-Table.
>
> **[0:32](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=32)** Now that's one, two, three, four, five, six, seven, eight, nine, 10, 11 12 characters for Format-Table.
>
> **[0:39](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=39)** When in reality, we can shorten this down and make that ft, so Get-Command Format-Table.
>
> **[0:45](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=45)** Now, of course not every command can actually do that.
>
> **[0:50](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=50)** So this is what's called terse command.
>
> **[0:52](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=52)** So this is the ability to basically reduce the amount of texts that we write, so get rid of Format-Table to its abbreviation called ft.
>
> **[1:02](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=62)** Now another example of this could be the actual Get-Command itself.
>
> **[1:07](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=67)** So when I type Get-Command it gives me everything that's there and of course we utilized Format-Table.
>
> **[1:12](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=72)** So if I just clear this out here and we'll type Get-Command and we'll do Get-ChildItem.
>
> **[1:22](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=82)** So that's going to bring me back the details of Get-ChildItem.
>
> **[1:25](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=85)** Now, instead of me typing Get-Command I can actually type gcm and then Get-ChildItem which will return the same value.
>
> **[1:36](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=96)** So as you can see, Get-ChildItem can be retrieved and its properties come back instead of typing Get-Command.
>
> **[1:43](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=103)** So how does that work?
>
> **[1:44](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=104)** So not every single function or commandlet will do that.
>
> **[1:47](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=107)** So what we actually have available to us is we have a method called Get-Alias.
>
> **[1:54](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=114)** So I'm going to type Get-Alias and you'll see if we just scroll back up here, let me just go to the top, you can see we have a breakdown of the commands with their relative alias and what it actually represents.
>
> **[2:08](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=128)** So for example, if we scroll down to the ft here, so you can see ft, Format-Table.
>
> **[2:13](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=133)** And then of course we have Format-List, Format-Hex.
>
> **[2:16](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=136)** We also have lots of other options available to us.
>
> **[2:19](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=139)** Now we also have, if I just get rid of that there, we also have the ability to set our own aliases.
>
> **[2:28](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=148)** So we can give it a name and then of course, the value that we want to set and then you can see a description.
>
> **[2:35](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=155)** And we can keep going backwards and forwards, adding various options to that.
>
> **[2:40](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=160)** So I can add a custom alias to an existing command.
>
> **[2:44](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=164)** So for example, my alias would be, let's say, I want to use Get-Command, but I would like to add a different one instead of using gcm, I could add something else too.
>
> **[2:54](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=174)** So we get the flexibility of being able to add our own aliases.
>
> **[3:00](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=180)** Now you may be wondering what's the benefit of this.
>
> **[3:03](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=183)** Well, let's consider a specific command with multiple commands in there.
>
> **[3:08](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=188)** So let's say Get-Command, we're going to pipe the value out and then we'll use the Where-Object.
>
> **[3:16](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=196)** And we're going to add, obviously, a clause in here to filter.
>
> **[3:19](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=199)** So we can say .parametersets.count.
>
> **[3:25](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=205)** So you want to find anything that has a parameter set where it's going to be greater than two, let's say.
>
> **[3:32](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=212)** So remember, a parameter set is a set of values that we're assigning to a parameter that you pick from.
>
> **[3:39](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=219)** I'm then going to add that out to here and what we'll do is we'll simply format the list.
>
> **[3:47](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=227)** And I'll want to show the name.
>
> **[3:50](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=230)** So just look at that for a minute, Get-Command, so go and get the list of commands, filter it out to where they have parameter sets with a count higher than two and then just show me the name.
>
> **[4:00](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=240)** So I'm going to enter that and sure enough, you can see we have a list of values here.
>
> **[4:04](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=244)** So all of these commands meet that criteria.
>
> **[4:07](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=247)** But if we just go back, you can say that we've got quite a lot of text that we actually wrote.
>
> **[4:12](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=252)** So how does aliases or terse commands actually benefit us here?
>
> **[4:17](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=257)** Well, let's imagine that we're writing this in terse format.
>
> **[4:22](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=262)** So I'm going to use gcm, question mark.
>
> **[4:25](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=265)** So gcm is going to replace Get-Command, question mark will replace the Where-Object.
>
> **[4:31](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=271)** I still have to type the parametersets.count
>
> **[4:39](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=279)** greater than two.
>
> **[4:41](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=281)** And then of course, we've already looked at the format option here.
>
> **[4:44](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=284)** So I'm going to say fl and then I'm going to choose name.
>
> **[4:48](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=288)** So notice how much shorter that is.
>
> **[4:51](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=291)** So in the previous example, it was Get-Command, pipe, Where-Object, the actual request, pipe, Format-List.
>
> **[4:59](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=299)** Notice that does exactly the same.
>
> **[5:01](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=301)** So when we writing PowerShell scripts, we now have the ability to ensure that these are smaller and easier to render.
>
> **[5:10](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=310)** Now that's the question. Using aliases, is it easier?
>
> **[5:14](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=314)** Well, that's really a personal preference.
>
> **[5:16](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=316)** I like using them, I think for some instances they work well but if you're creating a PowerShell script and then handing that off to somebody else, maybe those terse commands are not the best options.
>
> **[5:27](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=327)** Because if they don't understand what those would be then that can make it really hard to understand the PowerShell script.
>
> **[5:34](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=334)** Now, some other examples of common ones would be Write-Output.
>
> **[5:38](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=338)** So I'm going to say Test Message and of course, I get a message here.
>
> **[5:43](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=343)** We also have the abbreviated or alias version of that, which is called echo, which does the same thing.
>
> **[5:51](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=351)** Now it's not really saving us too much but if you're writing this consistently then you may want to utilize echo.
>
> **[5:57](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=357)** Because remember that when we are using the Write-Output messages or echo messages, there's lots of other information that we can provide.
>
> **[6:06](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=366)** So for example, verbose, debug, error action, et cetera.
>
> **[6:11](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=371)** If I'm also utilizing something like Write-Host, then I can change the color and the background, et cetera.
>
> **[6:18](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=378)** Now, one of the other commands that we utilized is obviously Get-Process.
>
> **[6:23](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=383)** This will give me the list of running processes on the machine.
>
> **[6:27](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=387)** Now, instead of us typing Get-Process every time we can actually just type gps and that will do the same thing.
>
> **[6:33](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=393)** Bit of a strange alias, I know, that it would be gps, but it provides us the ability to condense the code that we write.
>
> **[6:41](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=401)** Because when you're utilizing other languages, such as programming languages like C# or JavaScript, it's riddled with using aliases or terse commands.
>
> **[6:51](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=411)** So when you're building a PowerShell script it will become quite useful for you to understand some of these commands which will then reduce the amount you have to write.
>
> **[7:00](https://www.linkedin.com/learning/powershell-7-essential-training/understand-terse-commands?u=76281980&t=420)** And then when you create your own set of scripts you'll have these kind of smaller condensed versions instead of long and large amounts of PowerShell scripts.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (1), this. (1), from. (1), else, (1)
> **Tools:** powershell (7)
> **Analogies:** for example (3), imagine (1), such as (1)
> **CLI Commands:** find (2), make (2)
> **UI Navigation:** go to (1), scroll down (1)
> **Definitions:** is a  (1), is called (1)
> **Speakers:** - [instructor] (1)

#### Utilize variables
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=0)** - [Instructor] In order for us to be able to build PowerShell functions and commands, we first need to understand kind of syntax.
>
> **[0:06](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=6)** Now we've done some examples so far of how things go together.
>
> **[0:09](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=9)** So let's just recap a couple of them.
>
> **[0:11](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=11)** The first one is the creation of variables.
>
> **[0:14](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=14)** All variables are created using the dollar command before the name of the variable.
>
> **[0:20](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=20)** And then there's an equal sign that then represents what that value might be.
>
> **[0:25](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=25)** So I'm going to call this one text value one, which means that my variable now has that static value.
>
> **[0:31](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=31)** Now to render that value out, we can simply type var1 and you'll see we'll output the value.
>
> **[0:39](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=39)** We can also type write-host $var1 and it will render that value also.
>
> **[0:46](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=46)** Now, variables can also be dynamically populated, so I can say Get-computerInfo for example.
>
> **[0:55](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=55)** Now you notice the difference between the two.
>
> **[0:57](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=57)** We have the variable with the equals, and then we have a function that populates that.
>
> **[1:02](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=62)** You'll see that this get computer info command is executing, but doesn't return any values because when I type var2, all of that information is now available inside that variable.
>
> **[1:15](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=75)** This means that we can then reuse those values a little bit later.
>
> **[1:20](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=80)** It also means that if I put the period and then tab through, I can access the properties that were available with the get computer info command against the object.
>
> **[1:32](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=92)** So if, for example, I said var2 bios firmware type, if I go back to just var2, you can see there's a whole host here, so if I choose time zone, so let me just clear that $var2.time zone, it will then return that time zone value.
>
> **[1:51](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=111)** So think about this logically when you're building functions and commands, you often want to populate a variable that you can then reuse later on and this would mean populating it dynamically as well as perhaps using standard static values.
>
> **[2:07](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=127)** Now, when we create the variables, we can then reuse them in various locations.
>
> **[2:13](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=133)** So for example, if I wanted to say, get-service, this is going to list me all of the window services on the machine.
>
> **[2:21](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=141)** Well, notice we have one called WSearch or window search.
>
> **[2:26](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=146)** So let's say we create a variable.
>
> **[2:30](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=150)** I'm going to call it WSearch is the value and it's a static value.
>
> **[2:35](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=155)** So I'm going to say var3 and sure enough, I get WSearch.
>
> **[2:40](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=160)** If I now execute that same command, you'll notice that I can pass a name parameter.
>
> **[2:47](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=167)** And then I can say var3 and execute and sure enough, it returns that value because I'm now passing a static value into a regular command so that we can say function, command property, and populate the property with the value.
>
> **[3:03](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=183)** What we also have the flexibility of doing is if I go back here and say get service is we can introduce specific pipes.
>
> **[3:11](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=191)** Now, remember the pipe is all about joining commands together.
>
> **[3:16](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=196)** You're basically chaining something to something else.
>
> **[3:19](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=199)** So I'm going to say sort object and we'll look at the property value, and I'm going to say status.
>
> **[3:26](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=206)** Now, what happens here is you'll notice that my status has now been swapped around.
>
> **[3:30](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=210)** So originally it would have them all out of sync, but when we order it by status using sort-object, which is another property, then it orders.
>
> **[3:40](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=220)** So the pipe command will actually start to take the first one into the second one, the third one, the fourth one, et cetera, so let me just clear this out.
>
> **[3:50](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=230)** An example of this could be, Get-service.
>
> **[3:56](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=236)** Then I can use what's called where-object or I could use the where command.
>
> **[4:00](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=240)** Bear in mind using the where command is the kind of older way of doing it whereas where-object is the new.
>
> **[4:07](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=247)** You'll notice we utilize in these squarely brackets again, and then we use something new that we haven't talked about yet, which allows me to go inside the current object.
>
> **[4:19](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=259)** Now, let's pause for a second.
>
> **[4:21](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=261)** What this means is the get service command has gone ahead and retrieved all of the list of services.
>
> **[4:29](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=269)** It's then moving that result set into the where object, and then it's iterating line by line, that's what the where object does.
>
> **[4:38](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=278)** What I'm then able to do is use what's called dollar underscore to represent the current item that is iterating through.
>
> **[4:45](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=285)** So it now says $_.status.
>
> **[4:49](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=289)** I can then use standard equal, not equal to et cetera, and I'm going to put a status of running, so I'm going to enter that.
>
> **[4:58](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=298)** Now, you'll notice if I just scroll back, there's quite a few of these, it now filters to be running.
>
> **[5:03](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=303)** So let's go back to that syntax again, get service pipe where iteration only running and then let's say, I want to pipe the result that comes back.
>
> **[5:14](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=314)** So think about this.
>
> **[5:16](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=316)** I've already took the big amount of data, filtered it down a little bit further and then what I can then do is I can use select object or I can use select and then I can say display name.
>
> **[5:29](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=329)** Then not just what happens here, this now just returns the display name of the value that came back.
>
> **[5:36](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=336)** So, let me just clear that.
>
> **[5:37](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=337)** So what we have is the ability to start moving vast amounts of data or retrieved items from one bit to another bit to another bit.
>
> **[5:47](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=347)** This means that we can then combine what would effectively be multiple components into a single line.
>
> **[5:54](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=354)** Now you may not like that, you may want to create them as separate lines, which we can do.
>
> **[5:58](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=358)** So for example, we could create, if I just comment this here, we could say var4 equals get service.
>
> **[6:08](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=368)** Let me just go back and make sure there's no space between var and four.
>
> **[6:12](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=372)** So that retrieves all of the service objects.
>
> **[6:14](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=374)** I can then say var5 equals then it's going to be dollar, var4 pipe, that I'm going to use the same where object
>
> **[6:29](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=389)** $_.status equals running, okay.
>
> **[6:37](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=397)** Then I can do the last piece, which is var6, then we're going to do var5 pipe, select object, display name.
>
> **[6:50](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=410)** Now what should happen when we do var6 is we get the display names.
>
> **[6:54](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=414)** So, we can do the same thing in multiple lines if we needed to, or we can do it in a single entry.
>
> **[7:02](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=422)** I prefer the single entry, that's the purpose of the pipes and you'll notice that when we tried to do it in separate variables, it ended up having to be piped all the way through, you would take in the first value, piping it to the next one, and then taking that value and then piping it to the next one.
>
> **[7:17](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=437)** So, just remember that the purpose of the pipe is to join certain things together.
>
> **[7:23](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=443)** Now we can also utilize this when we are not using functions.
>
> **[7:27](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=447)** So if I say this is some sample text I have just regular, I can then pipe that and maybe I want to create a file.
>
> **[7:39](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=459)** So I can say, C:\training\file.txt
>
> **[7:47](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=467)** and what that should have done, if I just go back to my file system, there we go, file is opening notepad, this is some sample text.
>
> **[7:55](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=475)** So I can output not just dynamic values from other functions, but also static values, which would also include static variables as well.
>
> **[8:05](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=485)** So anytime we wish to output values, whether it's to output in a file or output to the window, we can simply use the pipe command to do that.
>
> **[8:15](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=495)** Now, as part of working through PowerShell, there'll be times where perhaps you'll need to take a system variable or an environment variable that might exist.
>
> **[8:25](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=505)** So, I'm going to call this function here, which is get child item, and then I'm going to do this.
>
> **[8:32](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=512)** Now, you'll notice what that does.
>
> **[8:34](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=514)** This returns, all of the environment variables that are on this machine or the machine that you execute it on.
>
> **[8:41](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=521)** You can see, for example, most common ones, app data path, home path, the program data, program files path, all of these are available to you inside PowerShell.
>
> **[8:53](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=533)** So for example, let me just clear this a bit better and we'll do $env.
>
> **[9:00](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=540)** Env is a short function that would allow us to reference any of those mechanisms, those properties, I can say env system route, and you'll notice it returns back, C windows.
>
> **[9:13](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=553)** I could also go a little bit further and call it demo, My Text value and do that and that will actually create a new environment variable.
>
> **[9:28](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=568)** So if I go back to here, what we should now see is demo right here listed as my text value.
>
> **[9:36](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=576)** That means I was able to create an environment variable, at least for the duration of the time that I'm using it here.
>
> **[9:42](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=582)** So environment variables are a way of restoring values at the highest level, or if we're executing any kind of function or command, if we need to reference, for example, the system route or the user's home path or something else, then we're able to access that.
>
> **[9:58](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=598)** Now outside of those creating variables and also pipe commands and access in system variables, it's also critical that you understand how variables will differ depending on how you classify what that variable might be.
>
> **[10:15](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=615)** So what we're going to do is create a variable.
>
> **[10:19](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=619)** So I'm going to create a $varTest we'll call it and I'm going to give it a value of one.
>
> **[10:27](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=627)** So now we have Var test.
>
> **[10:29](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=629)** So let me just double check that, it should return a one.
>
> **[10:33](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=633)** Now inside Powershell, we can declare what these variables should be, the format.
>
> **[10:39](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=639)** So, we utilize this format, so we use, let's say int32 in square, and then I'm going to say varTest and enter that and you'll see that it turns a number one.
>
> **[10:52](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=652)** We can also change this to be a different type, so if I say float, you'll see, it will turn back a specific value, so it will say, this is the value that comes back.
>
> **[11:04](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=664)** I can also go here and say string, and you'll get those single value come back again.
>
> **[11:12](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=672)** Now, not just what's happening.
>
> **[11:13](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=673)** I set a value, which was varTest to one, and then I declared it as an Int32, a float and a string and so far, nothing has changed.
>
> **[11:24](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=684)** So let me go back here, let me take Boolean and now we get a true value because obviously it can only have a one or a zero.
>
> **[11:34](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=694)** Now what about if we change that to a date time?
>
> **[11:38](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=698)** See, now we get an invalid argument because it can't do something with that.
>
> **[11:43](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=703)** So interesting, notice how that changes the output.
>
> **[11:47](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=707)** So let's go back again and we'll just loop back up and I'll just say one, so there's no quotes around the value now.
>
> **[11:55](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=715)** So what we'll do here is let me just clear this and we'll say int32 $varTest, so we get number one.
>
> **[12:08](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=728)** Now we'll change this again and we'll go back and use float and we'll get number one and if we go back here, we'll get string, we'll get a one and then what we should get in the Boolean is a false or true.
>
> **[12:24](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=744)** Boolean true and then if we go back a little bit further and choose a date time, we should now get a date.
>
> **[12:31](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=751)** Now notice that it wasn't able to translate the date based on it being a string value but if it's an integer value, then it will return.
>
> **[12:40](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=760)** Now notice what happened.
>
> **[12:42](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=762)** Few of them came back with what looks like the correct value.
>
> **[12:45](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=765)** In actual fact what you sometimes see in the float as a note is you sometimes get the extra piece.
>
> **[12:51](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=771)** So for example, it will try and round it to the decimal value.
>
> **[12:54](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=774)** So 1.2 or 1.1, whatever that is and then of course the Boolean will always return true or false.
>
> **[13:01](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=781)** Even if you pass it something else, if it fails that test, it'll just error or from a date-time perspective, it'll return a random date.
>
> **[13:10](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=790)** So, in reality, we should be validating and checking what those values are, or even better setting the type of content in a parameter if that's what we're utilizing.
>
> **[13:22](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=802)** So just be aware, the creating variables is fairly simple and straightforward.
>
> **[13:26](https://www.linkedin.com/learning/powershell-7-essential-training/utilize-variables?u=76281980&t=806)** However, set, what type of variable it should be, and then allow the values to be typed correctly so that we don't end up with some of the script perhaps underneath not being able to execute correctly.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), static (6), function (5), type, (2), pass (2)
> **Analogies:** for example (8)
> **Definitions:** means that (4), is a  (2)
> **Code Identifiers:** vartest (4), computerinfo (1)
> **Cross-References:** go back to (4)
> **Tools:** powershell (4)
> **Versions:** 1.2 (1), 1.1 (1)
> **File Paths:** file.txt (1)

#### Understand PowerShell objects
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=0)** - [Instructor] Now one of the things in PowerShell which is nice is that everything that we return from a command is ultimately an object of some description.
>
> **[0:10](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=10)** So for example, if I type get dash service it's going to give me all the list of the services that are currently running on my windows machine.
>
> **[0:18](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=18)** Now, what we can do with this is I can say, get service again and then notice we have properties that are available which is nothing new 'cause we've already looked at this before.
>
> **[0:28](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=28)** But I'm going to just filter out to DNS cache.
>
> **[0:32](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=32)** And then I'm going to do a pipe command here and do what's called get member.
>
> **[0:37](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=37)** Now the get member command will give me all of the details about the object that I return.
>
> **[0:43](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=43)** So what we can see here is I went and looked for the DNS cache service which runs locally on my windows machine.
>
> **[0:50](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=50)** And I use get member, get member will give me everything that's part of this object.
>
> **[0:56](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=56)** So for example, you can see the member type of alias properties, events, methods, and properties as well as any script methods that are available.
>
> **[1:06](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=66)** So for example, converting the value to a string.
>
> **[1:10](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=70)** So if we go back and do this again, so get service I'm going to split my service name here to be DNS cache again, and this time we'll do get member.
>
> **[1:24](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=84)** And then I get to look at the type.
>
> **[1:27](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=87)** So I'm going to say property.
>
> **[1:30](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=90)** So this will filter that list.
>
> **[1:31](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=91)** I remember the last time we looked at it it had events, it had methods, but this one now give me the properties that are available.
>
> **[1:38](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=98)** Now, more importantly it gives me the definition of those properties.
>
> **[1:43](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=103)** So for example if I needed to specify something in the service name I know that I have to pass a string value to that instead of a boolean value or a text value or something else.
>
> **[1:56](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=116)** Now, what we can do here is we can actually get all the properties of a specific object.
>
> **[2:02](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=122)** So we're going to go back and say, get service.
>
> **[2:04](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=124)** I'm going to filter my service name to be the DNS cache service again.
>
> **[2:09](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=129)** I'm then going to use what's called the select object command which we've used before.
>
> **[2:14](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=134)** This will allow me to select specific properties.
>
> **[2:17](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=137)** I'm going to say the property that I would like to get is the start type.
>
> **[2:22](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=142)** Now you'll notice what happens.
>
> **[2:24](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=144)** This filters it down to a specific property of the object.
>
> **[2:29](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=149)** So instead of me saying, go and get member type properties I'm actually saying, go and get with the DNS cache and then just get that specific property.
>
> **[2:38](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=158)** Now, the disadvantage to this is it literally just brings back the name and then of course the value that's associated to that.
>
> **[2:47](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=167)** Now, if we go back to what we did previously and say get service and let me just set my service name, DNS cache again and then we going to use the get member command which obviously retrieves all the member properties.
>
> **[3:02](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=182)** I can say, member type.
>
> **[3:04](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=184)** Now this time I just want to retrieve the alias property.
>
> **[3:08](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=188)** Now sure enough you'll see that there are two alias definitions but this is only for the values that have come back in the properties.
>
> **[3:17](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=197)** So you can see, I have an alias property, which is name which equals the service name.
>
> **[3:22](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=202)** And then I have required services which equals services depended on.
>
> **[3:28](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=208)** So we get to kind of drill down into this object to identify the properties or the object values or even the type of object that it would be.
>
> **[3:38](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=218)** So when we start to pass it through a PowerShell script, we can understand it.
>
> **[3:42](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=222)** Now let's go back and create a variable.
>
> **[3:45](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=225)** Now we've created these before.
>
> **[3:46](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=226)** So $SVC will be the variable and I'm going to go and get my service again.
>
> **[3:52](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=232)** Once again, we'll use DNS cache and that populates.
>
> **[3:55](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=235)** Now, if I do SVC you can see it gives me the information that's available.
>
> **[4:00](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=240)** Now what's important here is we don't have to declare every single property and value into multiple variables.
>
> **[4:09](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=249)** We actually have the ability to know that we've populated the variable with an object I can then simply just tab through.
>
> **[4:17](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=257)** So I can say variable name dot and go all the way through.
>
> **[4:20](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=260)** And you'll see, as it's changing it's giving me the values that are associated to them.
>
> **[4:26](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=266)** Now, of course, I can then do this and this will return the value of that property.
>
> **[4:32](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=272)** So for example, if I change that and say required services it gives me the breakdown.
>
> **[4:37](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=277)** So an object in PowerShell, isn't just isolated to the name and some of the values that you get you can actually populate a variable with that.
>
> **[4:47](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=287)** And the variable will then adopt the object type and all of its properties and members.
>
> **[4:55](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=295)** So let's do one other check.
>
> **[4:57](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=297)** So we'll say get service.
>
> **[5:00](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=300)** We'll do get member again and we'll do member type.
>
> **[5:04](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=304)** And then I'm going to say method.
>
> **[5:06](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=306)** Now, you'll notice here that this goes back and it looks for the method types that are available in any of the services.
>
> **[5:13](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=313)** So I haven't filtered this to a service I've just said go and get me the start-up type or the methods that run and are available.
>
> **[5:22](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=322)** And as you can see this will break down for each window service.
>
> **[5:25](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=325)** I get close, continue, dispose, refresh, start, stop et cetera.
>
> **[5:31](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=331)** So it will list me the methods that are available.
>
> **[5:34](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=334)** I could filter that to DNS cache, for example.
>
> **[5:37](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=337)** So if I go back to that same kind of line that we had here.
>
> **[5:41](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=341)** Remember how we can go through and specify the type of service.
>
> **[5:47](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=347)** So I'm going to say service name, DNS cache and do the same thing.
>
> **[5:53](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=353)** And it will return me the subset version of all of the methods because we filtered the service to a specific one which means the DNS cache may not have restart For example, it may just have, start and stop.
>
> **[6:06](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=366)** So this allows us to really inspect a specific object that we're getting back.
>
> **[6:13](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=373)** Now, of course, one of the things that we often want to do so I'm going to go back to my get service and I'll say service name, and we'll put that as a star.
>
> **[6:22](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=382)** So that gives me everything.
>
> **[6:23](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=383)** What we often want to do is filter out or at least select specific values because sometimes when you select an object it can come back with a whole host of properties that you don't need to see or even use.
>
> **[6:35](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=395)** That specifically true when you're using some of the cloud capabilities in PowerShell, where they return back vast amounts of information that you just don't need to see.
>
> **[6:46](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=406)** So what we can do here is I'm going to retreat the services and just get them all.
>
> **[6:51](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=411)** And then I have the ability to select the fields that I wish to kind of show.
>
> **[6:57](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=417)** So you can see what happened to hear.
>
> **[6:59](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=419)** It got rid of all the other information.
>
> **[7:00](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=420)** I'm going to scroll back to the top of the list.
>
> **[7:02](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=422)** I know it's quite extensive but this gives me my status and display name.
>
> **[7:06](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=426)** Now on the flip side of there what does that look like when I don't do the select object?
>
> **[7:12](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=432)** Well if we do this?
>
> **[7:13](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=433)** You can see, we get a third column.
>
> **[7:16](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=436)** That's been applied to it.
>
> **[7:17](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=437)** Now luckily for retrieving services that's really the most that you get.
>
> **[7:21](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=441)** But if you're retrieving things like Azure active directory, or even local active directory you can end up with lots and lots of information.
>
> **[7:30](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=450)** Now we also have the ability to take that value that object that we've got, and then re-sort that.
>
> **[7:37](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=457)** So remember how PowerShell uses the verb and the noun.
>
> **[7:40](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=460)** What if we type the word sort, you can see we have a sort object command.
>
> **[7:45](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=465)** We also have the ability to filter the information too.
>
> **[7:49](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=469)** Now, if I wanted to retrieve the objects.
>
> **[7:52](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=472)** So I'm going to say, get service and I'm going to get all of the service names again.
>
> **[8:00](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=480)** I can then do a select.
>
> **[8:03](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=483)** So get the select object same command that we used last time.
>
> **[8:07](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=487)** So status, comma, display name then I can pipe that value again.
>
> **[8:14](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=494)** Cause remember the pipe allows us to join certain things together.
>
> **[8:18](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=498)** I can then say sort object and I'm going to use the property value and I want to sort by status and then I'm going to choose my direction.
>
> **[8:30](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=510)** So this is now going to retrieve all of the services cause I've said, get me everything, then select status and display name, and then re-sort that into descending.
>
> **[8:39](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=519)** So what we should now say is it's not going to be in descending order based on the status field.
>
> **[8:46](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=526)** Now, of course, if I chose display name it would have been alphabetically displayed in descending mode.
>
> **[8:51](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=531)** So the most important thing here is that we can create objects from regular PowerShell commands.
>
> **[8:58](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=538)** We can then store those values into variables and access all of the properties.
>
> **[9:02](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=542)** We can then get a view of this specific property values and the types.
>
> **[9:08](https://www.linkedin.com/learning/powershell-7-essential-training/understand-powershell-objects?u=76281980&t=548)** So we know what to pass when we are trying to retrieve those objects.

> [!info]- Semantic Content
>
> **Code Keywords:** type. (4), pass (3), let (3), return. (1), else. (1)
> **Env Vars:** dns (10), svc (2)
> **Analogies:** for example (7)
> **Tools:** powershell (6)
> **Cross-References:** go back to (3)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)


### 4. Scripting and Automation

> [↑ Back to Table of Contents](#table-of-contents)

#### PowerShell security
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=0)** - [Instructor] When using PowerShell, it's important to understand some of the PowerShell Security capabilities and features that are available.
>
> **[0:07](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=7)** For example, we already discussed the actual control on the windows machine, for example, using user access control and running as administrator.
>
> **[0:16](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=16)** Now PowerShell's Execution Policy is a safety feature that controls the conditions under which PowerShell loads configuration files and run scripts.
>
> **[0:26](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=26)** This feature will help prevent the execution of malicious scripts.
>
> **[0:30](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=30)** On a windows computer you can set an execution policy for the local computer for the current user or for the particular session.
>
> **[0:38](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=38)** You can also use a Group Policy setting to set execution policies for computers and users if you are managing those user workstations.
>
> **[0:48](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=48)** The execution policy isn't a security system that restrict user actions.
>
> **[0:53](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=53)** Users can easily bypass a policy by typing the script contents at the command line when they cannot execute or run the script.
>
> **[1:02](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=62)** The execution policy helps users to set basic rules and will then prevent them from violating them unintentionally.
>
> **[1:11](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=71)** Now when we talk about execution policies there are a few that are built in out of the box.
>
> **[1:16](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=76)** The first one is All Signed.
>
> **[1:18](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=78)** This means scripts can run.
>
> **[1:20](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=80)** It requires the oldest scripts configuration files be signed by a trusted publisher, including in the scripts that you write on your own local computer.
>
> **[1:29](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=89)** It'll prompt you before running the scripts from the publishers if you don't or you haven't yet classified as trusted or untrusted.
>
> **[1:37](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=97)** The risk here is that you're running signed but malicious scripts.
>
> **[1:43](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=103)** The second option is Bypass Which means nothing is blocked and there are no warnings or prompts.
>
> **[1:48](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=108)** This execution policy is designed for configurations in which a PowerShell script is built into a larger application or for configurations in which PowerShell is the foundation for a program that has its own security implementation.
>
> **[2:03](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=123)** Next is Remote Signed.
>
> **[2:05](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=125)** This is the default execution policy for window server computers.
>
> **[2:09](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=129)** This means that scripts can run, it requires a digital signature from a trusted publisher on scripts and configuration files that are downloaded from the internet, which would include email and instant messaging programs et cetera.
>
> **[2:22](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=142)** It doesn't require digital signatures on scripts that are written on the local computer and that are not downloaded from the internet.
>
> **[2:29](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=149)** You can run scripts that are downloaded from the internet and not signed.
>
> **[2:33](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=153)** If the scripts are unblocked, you would then have to utilize a cmdlet called Unblock-File.
>
> **[2:40](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=160)** The risk here is running unsigned scripts from sources other than the internet and signed scripts that could be malicious.
>
> **[2:48](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=168)** The next is Restricted.
>
> **[2:50](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=170)** This is the default execution policy for windows client computers like windows 10.
>
> **[2:55](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=175)** This permits individual commands but does not allow scripts.
>
> **[2:59](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=179)** This prevents running of all script files including formatting and configuration files which have the extension of Ps1 XML, model script files which are PSM1 and PowerShell profiles Ps1 files.
>
> **[3:15](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=195)** Next we have Undefined.
>
> **[3:16](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=196)** There is no execution policy set in the current scope.
>
> **[3:20](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=200)** If the execution policy in all scopes is Undefined, the effective execution policy is restricted for windows clients and then remote sign for windows server.
>
> **[3:31](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=211)** Our last one is Unrestricted.
>
> **[3:34](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=214)** This is the default execution policy for non windows computers and cannot be changed.
>
> **[3:40](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=220)** Unsigned scripts cannot run, there is a risk of running malicious scripts, and of course it warns the user before running scripts and configuration files that are not from the local internet zone.
>
> **[3:53](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=233)** Now the default scope is local machine.
>
> **[3:56](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=236)** The effective execution policy is determined by the order of precedence as follows, MachinePolicy, so set by a Group Policy for all users of the computer.
>
> **[4:08](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=248)** Next is UserPolicy, set by Group Policy for the current user of the computer.
>
> **[4:14](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=254)** Next would be the CurrentUser itself.
>
> **[4:18](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=258)** Then of course, Process, which affects only the current PowerShell session.
>
> **[4:23](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=263)** And then last is LocalMachine, which is the default scope that affects all the users of the computer.
>
> **[4:29](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=269)** The process scope only affects the current PowerShell session.
>
> **[4:33](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=273)** The execution policy is saved in an environment variable which is available as $env:PSExecutionPolicyPreference, rather than the registry.
>
> **[4:44](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=284)** When the PowerShell session is closed, the variable and the values are then deleted.
>
> **[4:51](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=291)** Now to set the Execution Policy, we can utilize the Set-ExecutionPolicy command and you'll see here that we're setting the ExecutionPolicy to Unrestricted.
>
> **[5:02](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=302)** Now you'll see that as we go through examples of this we will utilize the Unrestricted option to allow us to freely execute PowerShell.
>
> **[5:10](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=310)** But if you are configuring this for client machines within an organization, then maybe you wish to restrict the scope.
>
> **[5:18](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=318)** So for example I can say, set Execution Policy to Unrestricted but scope that only down to the Current User, which means that other individuals won't have that restricted access.
>
> **[5:29](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=329)** Now you can also launch PowerShell with an Execution Policy of your choice.
>
> **[5:34](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=334)** So you can see I'm calling pwsh, so PowerShell.exe and then it accepts the property execution policy and I can set that to Unrestricted.
>
> **[5:46](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=346)** Now when determining the effective Execution Policy for a session, PowerShell we'll evaluate the Execution Policies in the following precedence order, So first, it will look at the Group Policy, MachinePolicy, then the UserPolicy, then the Execution Policy for the current process, so did we launch PowerShell, specifying an Execution Policy.
>
> **[6:09](https://www.linkedin.com/learning/powershell-7-essential-training/powershell-security?u=76281980&t=369)** Then the CurrentUser Policy, and then lastly the LocalMachine Policy.

> [!info]- Semantic Content
>
> **Tools:** powershell (15), command line (1)
> **Definitions:** is a  (2), means that (2)
> **Analogies:** for example (3)
> **Env Vars:** xml (1), psm1 (1)
> **Code Keywords:** require (1)
> **Speakers:** - [instructor] (1)

#### Create your first script
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=0)** - [Instructor] So now that we've looked at various components, commands and how to use variables, et cetera.
>
> **[0:08](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=8)** One of the things you want to do now is actually create a first PowerShell script.
>
> **[0:12](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=12)** Now, to do this, we're going to launch Visual Studio Code, which for me is the preferred editor at this point.
>
> **[0:19](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=19)** And it's opened into a folder.
>
> **[0:21](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=21)** And what I'm going to do here is I can say File, New File.
>
> **[0:25](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=25)** And then you notice it creates an untitled one here.
>
> **[0:28](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=28)** I'm just going to slide this over and then I'm going to say, File, Save As, and then I can give that a specific name.
>
> **[0:34](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=34)** And notice, it tries to save it as plain text.
>
> **[0:37](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=37)** So I can scroll down and choose PowerShell.
>
> **[0:39](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=39)** And I'm going to call it My First Script.
>
> **[0:45](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=45)** Okay, so we now have a PowerShell.
>
> **[0:46](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=46)** And as before when we looked at the editor, you can see it's now ready, in the bottom section is my terminal.
>
> **[0:52](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=52)** So any commands that I run here can be executed in the bottom.
>
> **[0:55](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=55)** Now for now, I'm just going to leave that as it is and we're going to look at how we would create a script.
>
> **[1:02](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=62)** So let's try a couple of different approaches.
>
> **[1:04](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=64)** The first one here is I just want to create a script that would just return a value.
>
> **[1:09](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=69)** So I'm going to create a variable.
>
> **[1:11](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=71)** Remember, variables are dollar and something.
>
> **[1:14](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=74)** So I'll call this one $variable and then we'll say equals and then we're going to set that to a specific value.
>
> **[1:21](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=81)** And of course, what you'll see here is when I'm using Visual Studio Code because I have the add-in for PowerShell it's now going to give me some error type handling or at least tell me when things are not right.
>
> **[1:33](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=93)** So you can see my variable isn't being used by anything.
>
> **[1:36](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=96)** If I scroll across to the equal sign, it will say, well, you must complete this.
>
> **[1:41](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=101)** Now honestly, it can be a little bit confusing doing this because it starts to error all over the place.
>
> **[1:46](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=106)** But once we actually start typing in commands, so there we go, it says variable equals Get-Service.
>
> **[1:53](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=113)** You'll see the equals error has now gone away because we've created a variable and populated the right-hand side of it.
>
> **[2:00](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=120)** What I'm now going to do is utilize another method, called Write-Host and I'll say $variable.
>
> **[2:08](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=128)** Now, notice what happens here.
>
> **[2:10](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=130)** The errors that were there have now been removed because it's continually checking to make sure that the values are correct, that the variables have values and that they're being reused.
>
> **[2:21](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=141)** If I just created a variable called variable one and never utilized it, it would obviously be useless, but also it would tell us here that there was a specific error.
>
> **[2:31](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=151)** Then want I'm going to do is obviously filter this to a specific type of service or name.
>
> **[2:37](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=157)** So I can say, Get-Service.
>
> **[2:39](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=159)** I could use name and then I can pass in the value.
>
> **[2:42](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=162)** So that's go with our DNS cache again.
>
> **[2:46](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=166)** So what I can do is I want to check if this is going to run.
>
> **[2:48](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=168)** So first off, I'm going to select Get-Service and name and we can right click here and say, Run Selection.
>
> **[2:55](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=175)** Or I could say F8 on the keyboard and it would execute.
>
> **[2:58](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=178)** Sure enough when I run it, it gives me a value, so I know it's working correctly.
>
> **[3:02](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=182)** What I can now do is double-check that again by right clicking and saying Run Selection.
>
> **[3:07](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=187)** And then you'll see it doesn't return me anything but the variable option looks like it's populated.
>
> **[3:13](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=193)** Now what's the best way to check this?
>
> **[3:15](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=195)** Well, luckily if I just cleared this bottom section I can say $variable and Enter, and you'll see I can check the existence of the values.
>
> **[3:24](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=204)** My Write-Host option allows me to output values to the screen.
>
> **[3:29](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=209)** So if I select this one here and say, Run Selection, you'll see it outputs DNS cache.
>
> **[3:34](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=214)** Now remember, that when we have a PowerShell object that's returned, we get access to the specific properties.
>
> **[3:42](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=222)** So you'll see, what's nice here is I get the IntelliSense for those options.
>
> **[3:47](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=227)** So I'm now going to select Write-Host, display name this time and you'll see it comes back with DNS Client.
>
> **[3:53](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=233)** So what we'll do is I'll create a couple of these so we can see how this works.
>
> **[3:59](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=239)** So I'm going to say name, I've got the display name and then what we'll do is we'll scroll down here and we can look for the description.
>
> **[4:08](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=248)** So my PowerShell script is going to retrieve the DNS cache and then write three values out.
>
> **[4:14](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=254)** So let's clear the bottom section so we can see this.
>
> **[4:17](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=257)** If I select this entire object now and I then press F8, you'll see it never returns everything for me.
>
> **[4:26](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=266)** So you can see it goes and gets the DNS cache and populates the variables then outputs the values.
>
> **[4:32](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=272)** Now of course, what's confusing here is I don't really know which one's which, so what's nice about the Write-Host is we have some foreground colors that we can utilize.
>
> **[4:42](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=282)** So if I say yellow on that one and then select it, let's just do execute, you can see it now puts that in yellow.
>
> **[4:50](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=290)** So I could select these ones here.
>
> **[4:54](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=294)** And what we'll do is we'll say green and then for this one, we'll say blue.
>
> **[5:00](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=300)** So now we have our PowerShell script.
>
> **[5:02](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=302)** So let's select the whole thing, make sure it works, F8.
>
> **[5:05](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=305)** And sure enough, yellow, green, and blue.
>
> **[5:08](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=308)** So fantastic, there's our PowerShell script.
>
> **[5:11](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=311)** So how do we execute the script itself?
>
> **[5:14](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=314)** Well, what we'll do is I'm going to right click here on my script file that I created and I'm going to say Reveal in File Explorer.
>
> **[5:21](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=321)** This will give me the path that I'm looking for.
>
> **[5:25](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=325)** Now, what we want to be able to do is run this in the Windows Terminal.
>
> **[5:28](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=328)** So I'm going to flip back to the Windows Terminal, which we have open.
>
> **[5:31](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=331)** And you see that my path here is C:\Users\Trainer.
>
> **[5:35](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=335)** Now, of course we can use standard syntax, like push D and push directory to get to that.
>
> **[5:42](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=342)** Or we could also use Set-Location, and then I can say path and I can paste that same path into there.
>
> **[5:52](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=352)** So let me just paste that here.
>
> **[5:54](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=354)** And that will set the location.
>
> **[5:56](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=356)** Now we could have added that to the PowerShell script so irrelevant of where we tried to execute it from it would be in there.
>
> **[6:03](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=363)** So now that we have the script let's just do a list directory here and you can see we've got the start PS1 which was the sample when we created.
>
> **[6:10](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=370)** And now we have the My First one.
>
> **[6:12](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=372)** So how do we execute the MyFirstScript?
>
> **[6:15](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=375)** Well, we can simply do this.
>
> **[6:17](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=377)** We can literally just type my, Tab, and because we're in PowerShell, it automatically understands that a PS1 is an executable file and that allows me to run that within my PowerShell.
>
> **[6:29](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=389)** So I created a script, it's very simple and I was able to execute it.
>
> **[6:34](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=394)** Now let's go back to Visual Studio Code.
>
> **[6:37](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=397)** What about if we wanted to prompt, for example, the value that the end user needs to type in.
>
> **[6:43](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=403)** So you want to make it more user-friendly because instead of me saying DNS cache, maybe I want to allow the end user or the admin that executes the script to be able to be prompted for something.
>
> **[6:56](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=416)** So what we can do here is I'm going to call this one service, I created a new variable.
>
> **[7:01](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=421)** and then what I'm going to do here is I want to pop up a window or prompt or pass an argument to this PowerShell shell script so that I can then not have to manually code DNS cache.
>
> **[7:15](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=435)** I want to be able to allow them to type anything they want to.
>
> **[7:19](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=439)** Now to achieve this, what we can do is utilize an existing function here, called Read-Host.
>
> **[7:26](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=446)** I'm going to type a message here and say, please type this service to view.
>
> **[7:35](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=455)** And then I'm going to remove DNS cache option here and populate that with my variable, $service.
>
> **[7:42](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=462)** Okay, so let's just save that.
>
> **[7:45](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=465)** Let me clear the bottom section and then I'm going to select all of this here and we'll do F8.
>
> **[7:51](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=471)** And that's what happens, it stops from executing at this point.
>
> **[7:55](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=475)** So I'm going to say DNS cache and then sure enough, it returns the value.
>
> **[7:59](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=479)** So we now adding a user interaction into the PowerShell script that we've got.
>
> **[8:05](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=485)** Now, of course, what else can we do with it?
>
> **[8:06](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=486)** Well, once we've captured information that someone's typed maybe we want to perform an action of some description.
>
> **[8:13](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=493)** So maybe instead of us getting the service we may want to get a process or something else and then perform an action on that specific object.
>
> **[8:20](https://www.linkedin.com/learning/powershell-7-essential-training/create-your-first-script?u=76281980&t=500)** So to create a PowerShell script it's as simple as saving a file as a PS1 and then adding the specific commands and the input properties that we need to utilize.

> [!info]- Semantic Content
>
> **Tools:** powershell (14), visual studio (3), windows terminal (2), terminal (1)
> **Code Keywords:** let (9), this. (3), this, (2), pass (2), for. (1)
> **Env Vars:** dns (9), ps1 (3)
> **CLI Commands:** make (3)
> **UI Navigation:** scroll down (2), select the (1)
> **Cross-References:** go back to (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)

#### Parameter attributes for scripts and functions
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=0)** - [Instructor] Now, when working with PowerShell, there are various parameters and attributes that we can utilize when writing our own scripts and functions.
>
> **[0:10](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=10)** PowerShell functions allow easy reuse and save time.
>
> **[0:14](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=14)** Each function can then contain variables, existing commands, and reuse other functions.
>
> **[0:21](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=21)** Functions are also a core building block for creating PowerShell scripts.
>
> **[0:27](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=27)** One of the first options that we have is to utilize arguments.
>
> **[0:31](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=31)** Now, you may have seen arguments being used in old PowerShell or in batch files where you basically execute a command and then pass in various values after the command.
>
> **[0:42](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=42)** So for example, if it's powershell.exe, space, and then a couple of values that tend to be in quotes, that would be an argument.
>
> **[0:50](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=50)** And they are retrieved starting at zero, one, two, three, four, et cetera.
>
> **[0:55](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=55)** Arguments are not declared at the function level whatsoever, and you can utilize multiple arguments within a function.
>
> **[1:03](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=63)** You just need to be able to reference them by utilizing args and then whatever that unique identifier or the ID is starting at zero.
>
> **[1:12](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=72)** We can also utilize parameters.
>
> **[1:15](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=75)** Parameters can be called in any order when executing the function.
>
> **[1:18](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=78)** You can enforce the position of an argument in the definition of the function.
>
> **[1:23](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=83)** And then parameters can guide the use of a function.
>
> **[1:27](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=87)** So instead of an argument being effectively arbitrary values that people can just add to the end of the script, a parameter is something that's required that you have chosen that needs to be specified.
>
> **[1:41](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=101)** When using the basic param function for declaring parameters, the core required values are: first off, we have param, then we have the data type of the variable that we wish to create, the variable name, and then a default value if we have that.
>
> **[1:58](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=118)** And then of course, we close that.
>
> **[2:00](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=120)** So the param function in PowerShell lets us specify required or non-required parameters.
>
> **[2:07](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=127)** So for example, using the param message, we could say param, string, variable name is message with a test value, which means that if nothing is passed into that variable, it will pass the test value.
>
> **[2:22](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=142)** Now, of course, we could also do it like this, where we don't specify a test value, which means it'll be a variable that is available to us and we can populate that with a string value.
>
> **[2:34](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=154)** Now, some examples here of when we create arguments and parameters, the functions look a little bit different.
>
> **[2:41](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=161)** So take the two examples here.
>
> **[2:43](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=163)** We have Function Display, dash, Message on the left, and you'll see that we have a string value equals args zero, and value two equals args one.
>
> **[2:54](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=174)** Now what that means is that when the function is called, so Display-Message, you can simply pass two values with a space in-between them in quotes, and then this function will write those values next to each other.
>
> **[3:07](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=187)** Now, if we did that with a parameter, then you'll see that what we do instead is we say param, string, the name, text, and then we write that value eight.
>
> **[3:17](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=197)** Now, what does that look like for you as the end user?
>
> **[3:19](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=199)** Well, you will type Display-Message, space.
>
> **[3:22](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=202)** You can then do the hyphen or the dash, and the text name of the parameter will then become available.
>
> **[3:30](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=210)** So instead of typing values in quotes with a space in-between, you are actually populating parameters in the function itself.
>
> **[3:39](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=219)** Now there are some specific arguments that can be set on a parameter.
>
> **[3:44](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=224)** The first one is mandatory.
>
> **[3:46](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=226)** This will force the user to pass this parameter value to the function.
>
> **[3:50](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=230)** Now, will it mean that you can't try to execute it without it?
>
> **[3:54](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=234)** No.
>
> **[3:55](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=235)** But will it not execute?
>
> **[3:56](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=236)** Correct.
>
> **[3:57](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=237)** It requires that parameter and it will force that function to fail until that value is passed.
>
> **[4:04](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=244)** Then of course we have validate set.
>
> **[4:06](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=246)** What this means is let's say you want to pass a parameter and have an enable and disable option.
>
> **[4:12](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=252)** Instead of creating two functions, one to disable and one to enable, we can create a single function that does both, and then have a validate set for a parameter, which means that when I type Display-Message and then do dash Test, I then have two options that come up in the IntelliSense, which will be the values that I specified.
>
> **[4:34](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=274)** And then of course we have parameter set name, which is where we can logically group parameters for specific use cases.
>
> **[4:43](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=283)** Now, as we start building PowerShell scripts, I'm just going to load it up in Visual Studio here, and we'll actually create a new file as a PowerShell file.
>
> **[4:50](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=290)** So we'll call this one functions.ps1.
>
> **[4:56](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=296)** So we now have a new file.
>
> **[4:57](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=297)** When we start creating the scripts, we obviously want to put things into functions so that we can reuse them again.
>
> **[5:03](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=303)** If we click back into my first script, you'll see it's not very reusable.
>
> **[5:07](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=307)** Okay, we get to prompt a value, but that's about as reusable as it is.
>
> **[5:12](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=312)** Now, when we create functions, we can reuse the blocks of code again and again and again.
>
> **[5:19](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=319)** So an example of this would be to say function, let's call it DisplayMessage.
>
> **[5:26](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=326)** And then we kind of close the block like so.
>
> **[5:29](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=329)** So function is declared as function, whatever the name would be.
>
> **[5:33](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=333)** And I always like to use the same model that the regular PowerShell command, let's use, which would be a verb and then a noun.
>
> **[5:40](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=340)** So in fact, you could say display message or invoke something or set something.
>
> **[5:45](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=345)** And then what we'll do here is I'll say write-host and I'll call it My Message.
>
> **[5:52](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=352)** Okay, so that's the function.
>
> **[5:53](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=353)** Now, if I select the function here and just press F8, it doesn't actually do anything.
>
> **[5:59](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=359)** What it does is it ensures that that function is then loaded into memory.
>
> **[6:04](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=364)** What that means is I can then do this.
>
> **[6:07](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=367)** So I typed D-I-S, pressed the Tab key, and DisplayMessage popped up.
>
> **[6:11](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=371)** And when I click Enter, it renders whatever the message is or performs the actions that are inside the function.
>
> **[6:19](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=379)** Now, of course, you'll notice here that this message or this display message function has a static value I hard coded into the function.
>
> **[6:27](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=387)** Now, what does that look like if we change it about a little bit, because we want to make it a little bit more dynamic?
>
> **[6:33](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=393)** So, let's go down underneath it.
>
> **[6:37](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=397)** I'm going to recopy that.
>
> **[6:38](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=398)** So we have another copy of it here.
>
> **[6:40](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=400)** And I'm just going to say number one.
>
> **[6:43](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=403)** So we have number one and then this one will be the new version we're going to utilize.
>
> **[6:48](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=408)** I'm going to delete the message.
>
> **[6:50](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=410)** And what I'll do is I'm going to create a variable called message.
>
> **[6:56](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=416)** And then what I'm going to do is place it here in the function.
>
> **[7:00](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=420)** So what we can now see is that when I call this function, I need to pass something into it, and then the write-host is going to return that message.
>
> **[7:09](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=429)** So let me just clear the bottom so we can execute this.
>
> **[7:12](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=432)** I'll select that here, press F8.
>
> **[7:15](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=435)** And then what I'll do is do the display message again.
>
> **[7:19](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=439)** So display message, and I'll press enter.
>
> **[7:23](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=443)** Now notice nothing returned, but there was no error either.
>
> **[7:27](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=447)** And that's because it's just expecting a value.
>
> **[7:30](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=450)** So if I just go here and say My Message, it'll then return the value.
>
> **[7:36](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=456)** So when you're building the functions, there's different ways of receiving the input that you wish to have in that function.
>
> **[7:43](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=463)** So if I didn't pass anything in here, then it would just display the static value.
>
> **[7:48](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=468)** But if I had a variable here, it would populate that information there and then render it.
>
> **[7:53](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=473)** Now, of course I'd have to handle any error information too in the function if I didn't pass a value.
>
> **[7:59](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=479)** So what's another way that we can do this?
>
> **[8:01](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=481)** Well, let's go through and we'll create another version of that.
>
> **[8:06](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=486)** Display message.
>
> **[8:08](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=488)** Okay, I'm now going to just rename this one to be dash two, and we'll go to our new one here.
>
> **[8:14](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=494)** I'm going to clear the bottom section.
>
> **[8:16](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=496)** Okay, so in here, what we're going to look at now is the ability of passing arguments to that same function.
>
> **[8:23](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=503)** So kind of like what we did with the display message and the variable, but actually I don't really want to kind of care what goes in there.
>
> **[8:31](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=511)** I just want to allow people to pass values.
>
> **[8:34](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=514)** So what we can do here is, the first thing is we can declare some variables.
>
> **[8:39](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=519)** So I'm going to call this one value one, and then we have what's called, I may miss the dollar sign here, something called args, and args is an inbuilt function that will look for any arguments that you pass.
>
> **[8:52](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=532)** And you may have seen this in the past where you referenced an argument by the integer value.
>
> **[8:58](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=538)** So I'm going to select this same line here, and what I'll do is I'll change that to one, and then I'll change that to two.
>
> **[9:05](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=545)** And then underneath this, we'll say write-host, and then this time instead of typing in the text value, I'm actually just going to say dollar value one, and dollar value two.
>
> **[9:19](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=559)** So same kind of idea.
>
> **[9:21](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=561)** I've got a new function, but this time it's going to be reading values from the arguments option.
>
> **[9:27](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=567)** Now, the arguments section of a function is really up to whatever gets passed in that function.
>
> **[9:33](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=573)** So I'm going to select this and press F8.
>
> **[9:35](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=575)** We'll then clear this in the bottom here.
>
> **[9:37](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=577)** And I'll say display-message.
>
> **[9:41](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=581)** And then I'll press Enter.
>
> **[9:42](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=582)** And of course I get nothing because obviously there's no value being passed.
>
> **[9:47](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=587)** But what I can do now is I can say value one, and value two, and do that.
>
> **[9:57](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=597)** And you'll notice it renders those values.
>
> **[9:59](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=599)** If I go back and change this and do a comma and then do it, it'll do the same thing also.
>
> **[10:04](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=604)** So when we're using an arguments construct, it's basically bringing in whatever those arguments are that have been typed.
>
> **[10:12](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=612)** It's very free form and free text because there's no restriction on whether that's mandatory or not mandatory.
>
> **[10:20](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=620)** So for example, if I re-execute that and this time take away the second option, it'll always render the first option or the second one, depending which one is there.
>
> **[10:31](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=631)** So there's no control here.
>
> **[10:33](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=633)** Now, when you build in the scripts, you obviously want to have some kind of control.
>
> **[10:37](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=637)** So I'm now going to rename this one to number three, I'm just going to copy it down here and go a little bit further down and just rename that.
>
> **[10:45](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=645)** So display message.
>
> **[10:47](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=647)** And then what we're going to is just remove this middle section because what I want to do is make it so the end user is kind of forced into completing a value.
>
> **[10:57](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=657)** So what we can use is a block called param.
>
> **[11:00](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=660)** Now, param obviously allows us to specify parameters.
>
> **[11:04](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=664)** So I'm going to say parameter, and you'll see in Visual Studio code, it kind of gives me a block of code that I can utilize.
>
> **[11:11](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=671)** It becomes a bit confusing.
>
> **[11:13](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=673)** So I'm just going to clear that down a bit, but you'll see we've got parameter, some attributes.
>
> **[11:18](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=678)** I'm going to get rid of the parameter type because I don't need that.
>
> **[11:21](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=681)** And then I can start to specify the parameter.
>
> **[11:24](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=684)** So the first thing I'll do is declare a variable again as a string, and I'm going to change the name to match Text, which we've been using.
>
> **[11:34](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=694)** And then from parameter perspective, the attribute values are quite simple.
>
> **[11:39](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=699)** So I can say mandatory equals true.
>
> **[11:43](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=703)** Then underneath this, I can say, write-host, dollar, Text.
>
> **[11:50](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=710)** So now I have a new function.
>
> **[11:51](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=711)** Looks similar to the others, but this time it's then got a property or a parameter associated to it that is required.
>
> **[11:59](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=719)** So if I select the function, press F8, okay, now it renders.
>
> **[12:03](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=723)** Let me clear that.
>
> **[12:04](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=724)** And then we'll say display-message and Enter, you'll see it instantly prompts me for that value and won't let me complete that without typing in the value.
>
> **[12:16](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=736)** So I can say My Message and shown if it renders the My Message option.
>
> **[12:22](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=742)** So the parameters allow us to force a user, an admin, or whoever is calling that function to pass a specific value.
>
> **[12:30](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=750)** Now there's also a downside to this because, of course, what happens if someone types a random set of characters or something that isn't supported.
>
> **[12:39](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=759)** So one of the things that we can do here, so first off, let me just copy this.
>
> **[12:43](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=763)** And what I'll do is just make that number four, scroll down a bit further, and I'll paste that back in.
>
> **[12:50](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=770)** So what I'm going to do is modify this because what I want to do is not allow the end user or the admin or the executer of the script to actually type a value.
>
> **[13:01](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=781)** I would rather they passed a value to it for me.
>
> **[13:05](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=785)** So I'm just going to copy this here.
>
> **[13:08](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=788)** And I'll paste this in.
>
> **[13:11](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=791)** Now, what this does is this creates what's called a validation set.
>
> **[13:15](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=795)** So a validation set is the list of valid options that can be utilized in this function or for this property or parameter.
>
> **[13:25](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=805)** So it's not a free text anymore.
>
> **[13:27](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=807)** I can start to type, but ultimately it has to be a value that's in here.
>
> **[13:32](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=812)** So I'm just going to to update my message.
>
> **[13:34](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=814)** So it looks like something more fun.
>
> **[13:36](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=816)** So we'll say, I like to drive a, and then I've got lists of car manufacturers.
>
> **[13:41](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=821)** So Lexus, Porsche, Toyota, BMW, Honda, et cetera.
>
> **[13:45](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=825)** So I have my new function.
>
> **[13:47](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=827)** So let's press F8 and I'm going to clear that down.
>
> **[13:51](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=831)** And then from here what I can do is try to execute that function.
>
> **[13:56](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=836)** So I'm going to say display-message and click Enter.
>
> **[13:58](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=838)** It's not going to ask me for a text value.
>
> **[14:01](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=841)** Now, of course, I'm going to type something in here and now it fails and says, display message cannot validate because it doesn't exist in the validation set because it's looking for a specific value.
>
> **[14:14](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=854)** So if we clear that, what we can then do is I can say display message and do the dash.
>
> **[14:20](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=860)** And what you'll see is that text name or the name for the variable is actually a property.
>
> **[14:26](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=866)** And if I tab, you can see, I can tab through the valid list.
>
> **[14:30](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=870)** So if I click Porsche.
>
> **[14:31](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=871)** it will now say, I like to drive a Porsche.
>
> **[14:34](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=874)** So when you're building functions and putting attributes for the parameters, it's important to know what's available to us.
>
> **[14:42](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=882)** So if we go back quickly, we can do a write-host and just put a static value.
>
> **[14:47](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=887)** We can pass it in as part of the function, we can then use arguments, which could be any number, but there's limitations here because anybody can type any value.
>
> **[14:57](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=897)** And what happens if they don't populate those, then you get nothing back.
>
> **[15:01](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=901)** Then, of course, we can force people to utilize parameters, mandatory values, and then to make it easier, we can give them the list of things to choose from.
>
> **[15:10](https://www.linkedin.com/learning/powershell-7-essential-training/parameter-attributes-for-scripts-and-functions?u=76281980&t=910)** So a couple of different ways of being able to utilize parameters within functions.

> [!info]- Semantic Content
>
> **Code Keywords:** function (40), pass (12), let (10), this, (3), this. (3)
> **Tools:** powershell (9), visual studio (2)
> **Definitions:** means that (2), is called (1), is an  (1), is a  (1)
> **Analogies:** for example (3), kind of like (1), similar to (1)
> **CLI Commands:** make (4)
> **UI Navigation:** select the (2), go to (1), scroll down (1)
> **Env Vars:** bmw (1)
> **Speakers:** - [instructor] (1)

#### Select information
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=0)** - [Instructor] And one of the most common things that you'll do within PowerShell is actually selecting of information or filtering or sorting, et cetera.
>
> **[0:08](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=8)** Now, for example, if we run a Get-Process command, remember this will list all of the processes that run currently on the machine.
>
> **[0:17](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=17)** Now, of course, that's great, but of course it doesn't always give me the information.
>
> **[0:21](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=21)** So once again, if we run that again, you can see if I go right to the top here that we've got one, two, three, four, five, six, seven, eight, I've got eight fields of information that comes in.
>
> **[0:31](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=31)** Now, luckily, my screen is wide enough that I can see this set of information, but there were times where even when you format that into a table, it doesn't quite show the information or you don't actually need all of the information at all.
>
> **[0:46](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=46)** So let me just clear this.
>
> **[0:47](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=47)** So what we can do here is I can say, Get-Process, and then of course, we're going to pipe this out.
>
> **[0:53](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=53)** And then we go back to Select-Object command, we specify our property that we wish to show.
>
> **[1:00](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=60)** And then from here, I can say ProcessName, Id, and then WS.
>
> **[1:05](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=65)** And then instantly it changes our view to then give me ProcessName, Id, and then WS.
>
> **[1:12](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=72)** So it gives me the selective information that I was looking for.
>
> **[1:16](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=76)** Now, if we were to change this, just to say ProcessName, then of course we would just get that as well.
>
> **[1:22](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=82)** So it gives us the ability to filter out.
>
> **[1:26](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=86)** I suppose, it's not really filtering, but you're running like a SQL select statement, I suppose, against the information that you wish to view.
>
> **[1:33](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=93)** Now, when this happens, there were some times where different processes have further information built inside of them.
>
> **[1:42](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=102)** So let me just do a Get-Process.
>
> **[1:45](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=105)** And this time we'll look inside process explorer.
>
> **[1:48](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=108)** So I'm going to open that one.
>
> **[1:50](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=110)** Now, what you'll see is it gives me handles, et cetera, all of those different things.
>
> **[1:56](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=116)** But there are actually other properties that are available to us.
>
> **[2:01](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=121)** So let's do another command here and we'll do explorer.
>
> **[2:05](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=125)** We'll pipe it out and we'll say object, and then I'm going to do a property, and we'll say ProcessName.
>
> **[2:15](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=135)** So this is going to give me the process name and the explorer, which is obviously the name of the process.
>
> **[2:20](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=140)** And it removes all of the other options.
>
> **[2:23](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=143)** Now, does that mean there's other properties?
>
> **[2:25](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=145)** Well, let's have a look at this.
>
> **[2:27](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=147)** Let's create a variable.
>
> **[2:29](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=149)** Remember how we can populate a variable with an object?
>
> **[2:34](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=154)** So if I say variable equals Get-Process explorer and do that, and then say $variable, what do we get?
>
> **[2:44](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=164)** And then if we do this, we can kind of tap through the various properties.
>
> **[2:48](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=168)** Now notice suddenly I'm showing properties that don't really show in the display, and that's because they're part of the object.
>
> **[2:58](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=178)** Now, one of these is called modules.
>
> **[3:00](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=180)** Now, if you notice that that's just a big, long list of modules, quite complicated to actually look at.
>
> **[3:07](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=187)** Now, if I try to retrieve those properties, so if I say, Get-Process explorer, I'm going to do my select statement again.
>
> **[3:21](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=201)** Select-Object, property.
>
> **[3:25](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=205)** And this time, if I say WS and then do modules, which is obviously a property that I wish to view, then I can do this.
>
> **[3:35](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=215)** And notice what happens, it gives me the first one, which is a single value, but the modules we know, we just looked at, is this humongous list, but it doesn't render it as a list.
>
> **[3:45](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=225)** It renders it as kind of a squashed up object.
>
> **[3:49](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=229)** And in reality, you can never see what's inside of that.
>
> **[3:52](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=232)** So that's where we can actually expand into properties.
>
> **[3:56](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=236)** So if we take this same command here, I'm going to back and do a property.
>
> **[4:02](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=242)** I'm going to say ProcessName, which will give me the name, which will be explorer.
>
> **[4:07](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=247)** And then I'm going to use something called ExpandProperty, and then choose modules.
>
> **[4:13](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=253)** And look what happens now.
>
> **[4:15](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=255)** Now what we end up with, if we scroll up to here is we get this expanded property of all the modules, it's quite a long one.
>
> **[4:22](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=262)** And I get the module name, the file name, the size.
>
> **[4:26](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=266)** And that's kind of the structure that we get.
>
> **[4:29](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=269)** Now, obviously to make it look a little bit neater, we could also then pipe that back out to format list and do so.
>
> **[4:38](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=278)** Now, look what happens this time.
>
> **[4:40](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=280)** It goes absolutely crazy.
>
> **[4:42](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=282)** So what it does, it actually opens up every single module and all of the properties associated with it.
>
> **[4:48](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=288)** Now this becomes quite complicated to view.
>
> **[4:50](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=290)** And I mentioned this before, especially when you're using some of the cloud PowerShell commands, that when you expand certain properties and then format in certain ways, you could end up with a humongous list of information.
>
> **[5:02](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=302)** Now, this for me is slightly unreadable because what I'm now getting is the explorer process and all of the modules that are connected to that one.
>
> **[5:10](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=310)** But all of their properties also.
>
> **[5:13](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=313)** So just be careful when you're trying to select objects and you think formatting in a list is the best way.
>
> **[5:18](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=318)** Or if I change this, for example here and say format table, then of course I get something a little bit more readable, but then I don't get all of the properties.
>
> **[5:27](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=327)** So it depends what you're looking for.
>
> **[5:30](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=330)** So that process allows me to expand into existing properties to say, well, show me what's inside of them.
>
> **[5:37](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=337)** Now what we can do also is we can start to sort and select at exactly the same time.
>
> **[5:45](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=345)** So we could say, Get-Process again.
>
> **[5:48](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=348)** And I'm going to get all of the processes.
>
> **[5:51](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=351)** And then we have what's called Sort-Object.
>
> **[5:53](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=353)** So we specify the property, which is going to be a memory related property.
>
> **[5:57](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=357)** So that means go and get the processes, and sort them by that.
>
> **[6:02](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=362)** Then I'm going to tell it what to select.
>
> **[6:06](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=366)** And now we have the ability to say last, or we could kind of tab through the different properties.
>
> **[6:15](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=375)** So for example, unique, last, first.
>
> **[6:17](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=377)** So if I say last and then get me five, when I enter that, it's just going to retrieve the last five from that list.
>
> **[6:27](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=387)** So there'll be times where you may be getting a thousand results and you only actually want to show the last 10 or the last two.
>
> **[6:33](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=393)** You can simply say select object, and then last or first.
>
> **[6:38](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=398)** We could also go one little step further.
>
> **[6:40](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=400)** So let's say we had a series of results, so kind of value.
>
> **[6:45](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=405)** So I have one, two, three, one, one, two.
>
> **[6:47](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=407)** These are effectively be an array set of values, and I needed to be able to get the unique values for it.
>
> **[6:55](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=415)** Now, as we looped through the properties, you saw that unique word come up.
>
> **[6:59](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=419)** If I press that, it instantly takes those values, combines them all together and figures out which the unique values are.
>
> **[7:07](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=427)** So especially if, obviously I hard coded these values, but if you're using a different process to retrieve an array of values, and there's multiple of the same, to get the unique, we can simply say select object and then unique.
>
> **[7:22](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=442)** We can also go one step further where maybe we don't care about the first value.
>
> **[7:27](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=447)** So we can say, I want to skip maybe the first value.
>
> **[7:31](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=451)** Look at our list here, it's one, two, three, one, one, two.
>
> **[7:35](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=455)** So what we should get back is two, three, one, one, two.
>
> **[7:39](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=459)** Sure enough, we get two, three, one, one, two.
>
> **[7:42](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=462)** Because it removes the need for that first one, because we said skip.
>
> **[7:47](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=467)** So we get some flexibility in being able to select the values that we're looking for.
>
> **[7:52](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=472)** Now, one of the things that we do a lot in PowerShell is create specific objects.
>
> **[7:58](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=478)** Now remember we talked about specific custom type objects or regular objects that PowerShell creates, and it has properties and values.
>
> **[8:06](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=486)** So I'm going to paste a value here.
>
> **[8:08](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=488)** Now you'll see that we're creating a variable called object, instead of it being a string value or an integer, it's a PS custom object, which means it'll take any kind of value that I want to put into it.
>
> **[8:19](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=499)** And then we're doing something a bit different.
>
> **[8:20](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=500)** We using an @ sign with the squarely brackets, and I've created an object called MyObject.
>
> **[8:27](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=507)** And then I've put some options in there of one, two, three, four, and five that effectively are like the modules that we did.
>
> **[8:34](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=514)** So if I type the word object here, you'll see, it says MyObject name and then expand one, two, three, four, five, or whatever those values would be.
>
> **[8:44](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=524)** Now it comes back to that same question, I need to be able to expand into there and get the various properties.
>
> **[8:51](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=531)** So how do we do that?
>
> **[8:52](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=532)** So we go back to object and then we pipe the values out.
>
> **[8:56](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=536)** So we say Select-Object, we can then say ExpandProperty.
>
> **[9:00](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=540)** And luckily I named it Expand, and then I can pass another property and say, get me the name.
>
> **[9:07](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=547)** So now what we end up with is it took away the name of the object, it went into that, expand the property, it could be called anything and then expanded it to give me a list of those values.
>
> **[9:20](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=560)** Now we can go one step further.
>
> **[9:22](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=562)** Remember how we were using Get-Member to get a list of all the property values, and functions and things that are available.
>
> **[9:30](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=570)** We can do this.
>
> **[9:31](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=571)** And then you'll notice what happens.
>
> **[9:33](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=573)** It gives me all of the string options that are available for that type of definition.
>
> **[9:39](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=579)** So my PS custom object, which means I can index into it, I can remove items, I can split, I can convert to, all the string values or trim the end, et cetera.
>
> **[9:50](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=590)** So when we creating and selecting information, we will always use the select object.
>
> **[9:56](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=596)** You can use the word select if you want it to, Visual Studio Code complains and says, you really should use Select-Object, but select will work in its own, right?
>
> **[10:05](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=605)** And then of course, to expand and get values that are kind of hidden in a raise or nested properties, we then use expand property.
>
> **[10:14](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=614)** And of course, then we have other properties such as last, first, unique, skip, et cetera.
>
> **[10:19](https://www.linkedin.com/learning/powershell-7-essential-training/select-information?u=76281980&t=619)** That will help us in being able to select the data that we wish to get.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this. (4), for. (3), this, (3), module (2)
> **Tools:** powershell (4), visual studio (1)
> **Analogies:** for example (3), such as (1)
> **Cross-References:** go back to (2), we talked about (1)
> **UI Navigation:** scroll up (1), select the (1)
> **Definitions:** is called (1), is a  (1)
> **CLI Commands:** make (1)
> **Env Vars:** sql (1)

#### Filter specific data
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=0)** - [Instructor] Now of course selecting content or selecting objects is fairly straightforward using select object.
>
> **[0:06](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=6)** Now, once we treat those objects, often we need to filter out the values to specific equals to or it doesn't equal or something that's like a specific value.
>
> **[0:17](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=17)** So as an example of this we can reuse the get command option which if I just enter that you'll see just, I'm going to cut that short because it will just keep going forever.
>
> **[0:26](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=26)** But the get command is quite a large result set.
>
> **[0:30](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=30)** So what we can do is we can use what's referred to as ware object or the word where member visual studio code is going to complain.
>
> **[0:38](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=38)** And then what we do is we wrap things in these squirly brackets.
>
> **[0:41](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=41)** It's almost like a full loop inside that data that's coming back.
>
> **[0:46](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=46)** It's represented by doing the dollar and the underscore, and then the dot, which will then represent the field that we wish to filter on, so I'm going to say command type.
>
> **[0:57](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=57)** Now, how did I get command type?
>
> **[0:58](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=58)** Well, if I wrote get dash command pipe and then get member it would have given me all of the properties for that type of object.
>
> **[1:07](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=67)** What I can then do is pass a specific query operator.
>
> **[1:11](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=71)** So equals, not equals like, et cetera.
>
> **[1:14](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=74)** And then what I'm going to do is just say I want to get a list of all of the commandlets So remember when we do get command we get commandlets, functions, et cetera.
>
> **[1:24](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=84)** So when I do this, this will just retrieve me commandlets and you can see on the left in this column that I'm only viewing commandlets.
>
> **[1:33](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=93)** Now what does that look like If I took that away?
>
> **[1:37](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=97)** What if we just run, get command and copy, there we go.
>
> **[1:41](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=101)** You can see I've got functions and if we scroll a bit further up there should be a few more items that come in.
>
> **[1:46](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=106)** So functions keep going, aliases, commands.
>
> **[1:50](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=110)** So that list returns me a whole set of information.
>
> **[1:54](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=114)** So filtering out is as simple as saying command set or command type or whatever the property would be.
>
> **[2:02](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=122)** Now, remember we can utilize the equals but what about if we did not equals?
>
> **[2:07](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=127)** So same command but get me everything that's not commandlet and your now see it will bring back aliases and functions.
>
> **[2:15](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=135)** We can change this a little bit too.
>
> **[2:17](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=137)** So we could say, well actually, I don't know if I want to filter on the type of command.
>
> **[2:24](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=144)** So I want to filter on something that I recognize which would be the name.
>
> **[2:29](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=149)** So the name of the object and I'm going to make it so it's a like command.
>
> **[2:33](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=153)** So that means I'm going to look for any commands that contain the word invoke.
>
> **[2:39](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=159)** So if I click enter here, you'll see, it goes to the list, that large list, it doesn't give me command types.
>
> **[2:45](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=165)** It means it brings back commandlets, functions and aliases but obviously matches on the name.
>
> **[2:51](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=171)** Now this can be even simpler.
>
> **[2:53](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=173)** So I could say workflow and you'll see my list gets even narrower.
>
> **[2:59](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=179)** So we have the ability to kind of narrow down the result set by filtering and using the select option too.
>
> **[3:08](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=188)** So we could combine this together and say get the command where it's filtered and then at the moment I'm outputting everything.
>
> **[3:15](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=195)** So command type, name, version, source.
>
> **[3:17](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=197)** But as we've learned previously we can then use the select dash object to give me the results that I'm looking for.
>
> **[3:24](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=204)** Now, there are instances where one filter isn't going to be enough.
>
> **[3:28](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=208)** So if we go back to our get command again I'm going to say where object, just going to make a space, I like it to be neat.
>
> **[3:37](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=217)** So where object, and then of course we're going to add some filtering.
>
> **[3:41](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=221)** So we'll go here and create as squarely brackets.
>
> **[3:44](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=224)** Now, when we wish to join two types of filtering together we have to parenthesize these.
>
> **[3:50](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=230)** So you can see I've got one here and then I'm going to use and parameter and then I'm going to parenthesize these again.
>
> **[3:57](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=237)** So when we do it, they both have to be inside the squarely brackets in order to be executed.
>
> **[4:02](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=242)** So I'm going to say name, dash like and we'll stick with the invoke one that we did before, invoke like so and then I'm going to go to the second one.
>
> **[4:15](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=255)** And in here I can then say dollar underscore dot CommandType.
>
> **[4:20](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=260)** So I'm going to use another property and then here I'm going to say equal to commandlet.
>
> **[4:26](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=266)** So now we have two filters.
>
> **[4:29](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=269)** So I'm saying, get me everything, then on the name one, limit that down to the word invoke and then set the command type to commandlet.
>
> **[4:38](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=278)** So now what we should get is invoke and the command type is set to command and here we are.
>
> **[4:45](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=285)** One, two, three, four, five, et cetera and invoke.
>
> **[4:47](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=287)** So we can combine those two things together.
>
> **[4:50](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=290)** Now we can also have one that matches and one that doesn't.
>
> **[4:55](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=295)** So we could mix and match.
>
> **[4:56](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=296)** So for example, I've got equals and I've also got a like.
>
> **[5:00](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=300)** So I could change that to two equals or any number of those operators.
>
> **[5:05](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=305)** But what we can do is we can turn one of these positive ones into a negative.
>
> **[5:10](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=310)** So I could say not equal and change the operator or I could put an exclamation mark.
>
> **[5:17](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=317)** If I put an exclamation mark before the parentheses of the command it then negates that and turns that into a not.
>
> **[5:25](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=325)** So if I enter this one now, you'll notice the commandments have gone and it still looks with the word invoke, but it only brings back something that isn't a commandlet.
>
> **[5:34](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=334)** Now what would that look like if I changed it to not equal and then took that out.
>
> **[5:41](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=341)** Let's do the same.
>
> **[5:42](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=342)** You'll see it gives me the same results.
>
> **[5:43](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=343)** So either will work.
>
> **[5:45](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=345)** If you happen to end up doing dash equal, you can then negate that by putting that exclamation mark.
>
> **[5:52](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=352)** So let's just clear this.
>
> **[5:54](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=354)** Now we can also utilize another way of filtering values.
>
> **[5:59](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=359)** So what we can do is we can use the parameters in a command to kind of filter out what we need and then do the where object.
>
> **[6:08](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=368)** So if we were using the same get command object, I could then use the command type option and then the prefix value will the kind of validate set value is commandlet.
>
> **[6:19](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=379)** I can then pipe that value out to my where object again, remember squarely brackets, dollar underscore, name like, invoke stop in.
>
> **[6:37](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=397)** So now what I'm doing is instead of doing two filters to get what I'm looking for some commands like get command have parameters that restrict what's returned anyway.
>
> **[6:48](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=408)** So I can say get dash command, command type commandlet, so that negates the need for my command type equals and then I'm going to say, just invoke and get the invoke option there and use the where object.
>
> **[7:00](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=420)** And sure enough, it does the same thing.
>
> **[7:02](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=422)** So different ways of doing it.
>
> **[7:04](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=424)** Not every command will have a property or parameter that will filter the results for you.
>
> **[7:10](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=430)** So you may still have to do multiple wheres or join clauses together to be able to get the values that you need.
>
> **[7:18](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=438)** Now, we also have a different way of doing it.
>
> **[7:19](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=439)** So if I was to call, get service we know that get service will give me a list of the services that are available on the machine that I'm executing.
>
> **[7:30](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=450)** Now, what I can do here, is I can say, get dash service, I can pipe that out.
>
> **[7:36](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=456)** So that big list, we can then start to do something with, we can then use the where object one again.
>
> **[7:42](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=462)** And instead of using the squarely brackets this time what we can do is use this.
>
> **[7:48](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=468)** So property, status, equals and then I have a value option where I can pass the value.
>
> **[7:58](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=478)** So not every service can do this.
>
> **[7:59](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=479)** Well, not every command can do this but the where object, when we call the where, it will then understand that I'm trying to execute something that would effectively be in the squarely brackets.
>
> **[8:11](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=491)** So when I say property status equals value running, it's the same as writing where object, squarely bracket, dollar underscore dot status, equals running, close squarely brackets.
>
> **[8:24](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=504)** So that should then filter that list out for me and sure enough it just brings back the running ones.
>
> **[8:29](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=509)** So there are multiple ways of actually filtering and writing the same thing.
>
> **[8:34](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=514)** Now, one of the last options that's available in not many of the commandlets is the ability for you to use a designated dash filter property.
>
> **[8:45](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=525)** Now the filter property itself will allow you to find and query based on the word filter.
>
> **[8:54](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=534)** So let's have a look at what this looks like.
>
> **[8:56](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=536)** So I can say, get child item.
>
> **[9:00](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=540)** And I'm going to say the path that I'm looking for is going to be the same path I'm using right now, so trainer, and then what we have is an actual filter word, where I can then filter on something.
>
> **[9:14](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=554)** So let's say, I want to filter on PowerShell files.
>
> **[9:17](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=557)** Now the get child item is going to go to this path and we'll iterate through the entire path, look at the PowerShell files.
>
> **[9:24](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=564)** So sure enough, it brings back the PowerShell file, a test one that I created.
>
> **[9:28](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=568)** Now not every command will support the filter property.
>
> **[9:34](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=574)** That's unique to only a handful of commands where we are able to utilize the dash filter property.
>
> **[9:43](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=583)** Now to view the list of the supported ones, we can choose get command and then we use a property called parameter name and then we just type the word filter.
>
> **[9:52](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=592)** And this will give us a list of the functions or the commandlets that will take that filter option.
>
> **[10:00](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=600)** So you can't, for example just go and say, well I want to execute this and pass a filter.
>
> **[10:04](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=604)** It will actually fail if you do that.
>
> **[10:06](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=606)** Now the good news is, if we're utilizing some of the cloud options, so for example, as your active directory or something in Microsoft 365, or even some of the on-premises active directory, then the filter parameter is available for most of the commands because it makes it easy to retrieve sets of users or data that's been returned.
>
> **[10:26](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=626)** So the most important thing to remember here is that the web object is your key to filtering values.
>
> **[10:32](https://www.linkedin.com/learning/powershell-7-essential-training/filter-specific-data?u=76281980&t=632)** You can join those values together and you also have the ability to combine that with a filter parameter if the actual commandlet supports it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), pass (3), this. (3), type. (1), this, (1)
> **Tools:** powershell (3), visual studio (1)
> **CLI Commands:** make (2), find (1)
> **Analogies:** for example (3)
> **UI Navigation:** go to (2)
> **Cross-References:** go back to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Control the flow of PowerShell
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=0)** - [Illustrator] When building PowerShell scripts, it's important to be able to control the flow, of which functions and commands you wish to execute, and the order that they should happen.
>
> **[0:10](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=10)** So let's consider something.
>
> **[0:12](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=12)** I have a variable with the value 10 inside of it.
>
> **[0:16](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=16)** Now, obviously what I would like to do, is to test that value.
>
> **[0:20](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=20)** This is done by using something like this, and saying if value.
>
> **[0:26](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=26)** Now you notice when I type this, it gives me the two arrows, because it's now waiting for me, to do something with that.
>
> **[0:33](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=33)** The output of that is inside the squarely bracket.
>
> **[0:36](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=36)** So I'm going to say, Write-Host we have a value and enter.
>
> **[0:44](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=44)** And you'll see that returns, because it did a check, for the existence of something in that variable.
>
> **[0:51](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=51)** So fairly straightforward.
>
> **[0:53](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=53)** Now the idea behind the 'if' statement, which is the most common, is to help us structure the information.
>
> **[0:59](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=59)** So if we go back here and type value equals 10, what we can do is, we can repeat that same kind of test that we did.
>
> **[1:08](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=68)** But this time we can use parameters.
>
> **[1:11](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=71)** So if I do use LT, that'll be less than, and if I type the word better nine, so it's going to say if the value is less than nine, then instead of me pressing enter, I can actually add this to the same line.
>
> **[1:24](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=84)** So I can say write-host and say value is less than nine.
>
> **[1:33](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=93)** Okay. So what's this going to mean?
>
> **[1:35](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=95)** If the value of the variable called value, which is currently 10, happens to be less than nine, then it will write a value.
>
> **[1:44](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=104)** I'm going to press enter.
>
> **[1:45](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=105)** And of course, I don't get any value.
>
> **[1:47](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=107)** If I change that to five and then go back and do that then of course I do.
>
> **[1:51](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=111)** So the 'if' statement works very simply check the value of this against the value of that.
>
> **[1:58](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=118)** Now we also have the ability to change this around.
>
> **[2:01](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=121)** So if I go back and put that back to 10 and do this, I can actually say, well, what about if it's greater than nine?
>
> **[2:09](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=129)** So I can use GT and I can go across here and change my message to say greater than so do that.
>
> **[2:18](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=138)** And of course it comes back because my value is 10.
>
> **[2:22](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=142)** So you can see where we go in this.
>
> **[2:23](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=143)** I'm doing a single test right now, which is take a value check if it exists or check if it has a specific value and then write something.
>
> **[2:31](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=151)** But of course, in the real world, we want to be able to perform an action if it meets and an action if it doesn't meet.
>
> **[2:39](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=159)** So I'm going to go ahead and do the same thing again.
>
> **[2:41](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=161)** So I'm going to say value is less than nine.
>
> **[2:46](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=166)** Then in my squarely brackets, we'll do the same thing we did before, which is write-host and say, value is less than nine, close that off.
>
> **[3:00](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=180)** And then what we can do is do this.
>
> **[3:02](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=182)** Now, you'll see we have not done this yet, which is we can now say if which is the test, then we have the, whatever the test output is, is the first thing we want to do when it checks that criteria.
>
> **[3:14](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=194)** And then if it doesn't match anything, then I want it to do something specific.
>
> **[3:18](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=198)** So in this case, if it's not less than then of course, it must be greater than.
>
> **[3:25](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=205)** So I can say value is greater than nine and then enter.
>
> **[3:31](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=211)** And of course, there we go.
>
> **[3:32](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=212)** It does an if test.
>
> **[3:34](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=214)** If the value is less than nine, write value is less than nine, or if it's greater than it, then go and do this.
>
> **[3:42](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=222)** But we're not actually checking for greater than.
>
> **[3:45](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=225)** We just checking for something other than the value that's there.
>
> **[3:48](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=228)** So when we controlling the flow, what we end up with is this kind of structure of if, else something.
>
> **[3:55](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=235)** Or it could be if, else, if et cetera.
>
> **[3:58](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=238)** So we can do any combination of this.
>
> **[4:00](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=240)** Now to kind of see how this flows and how we use it, let's go back to Visual Studio Code and I'm going to create a new file and we'll call it if statements dot PS one.
>
> **[4:14](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=254)** Okay. So we have the PowerShell 1.
>
> **[4:16](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=256)** And what I'm going to do here is just paste some structures of how we would normally kind of build things in PowerShell.
>
> **[4:22](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=262)** So let me just paste this in, there we go.
>
> **[4:25](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=265)** So what we can see is in standard PowerShell, the way that most people are build it is if we have a variable.
>
> **[4:31](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=271)** So for example, message one message two, message three.
>
> **[4:33](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=273)** So three variables.
>
> **[4:35](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=275)** If we want to output different things based on certain criteria, then we basically wrap everything into if, else statements.
>
> **[4:42](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=282)** So for example, if something, then we turn this value first and if not, we turn this value.
>
> **[4:49](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=289)** And the same goes for each of those.
>
> **[4:51](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=291)** What we would often do is go through this whole process of doing multiple if statements to output the message that we want to.
>
> **[5:00](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=300)** So for example, if I go up here and I say, dollar A equals two, and dollar B equals three, if I then was to do a test here and say, dollar A is greater than dollar B.
>
> **[5:19](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=319)** I should actually just use the greater there, there we go.
>
> **[5:22](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=322)** If I select these two and just do F8 we can see that if I select each one, number two, number three.
>
> **[5:31](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=331)** So if A, which is two is greater than three, then it's going to render me this message.
>
> **[5:38](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=338)** So in theory, when I run this, it should execute or populate at least that other value.
>
> **[5:43](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=343)** So I'm going to press F8 and then what we'll do is clear the bottom to see what that value is.
>
> **[5:50](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=350)** So if I do message one, you can see the message output is not matched that's because two is not greater three.
>
> **[5:58](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=358)** Now of course, we could do a similar test here and say two is less than three.
>
> **[6:06](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=366)** So if that's the case, we should end up with a different one.
>
> **[6:09](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=369)** So let me just select this and do F8 and then we'll select message two F8 and sure enough, it says matched, this is message two.
>
> **[6:18](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=378)** So we can do these tests.
>
> **[6:19](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=379)** Now, of course, our last test could be A equals dollar B.
>
> **[6:26](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=386)** So if A equals B, it's going to use this one, otherwise it will be that.
>
> **[6:30](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=390)** So I'm going to execute this one here and then we'll select message three and sure enough it just says not matched.
>
> **[6:37](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=397)** So you can see that when we would populate variables that needed to be done via various, you know, if this does that, if this does this, then we end up with these kind of deep structures.
>
> **[6:47](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=407)** Often what we would then do is potentially want to output these values too.
>
> **[6:52](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=412)** So let me just make some space here and I'm going to just paste the right messages.
>
> **[6:56](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=416)** So let me clear and I can say, right message and F8.
>
> **[7:01](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=421)** So you can see that we write them all out one by one.
>
> **[7:04](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=424)** So message one ends up being not matched.
>
> **[7:08](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=428)** Message 2 ends up being matched and message three ends up being not matched.
>
> **[7:13](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=433)** Now of course, what we would sometimes do is obviously not using these values, but if we were out putting numbers, for example, or calculations, we would then drop these into a specific object where we could reference them a little bit later.
>
> **[7:27](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=447)** So we could say, this is my object.
>
> **[7:29](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=449)** So I'm going to call this object one, let's say, and then of course, we've got this kind of structure here, which will allow me to create a custom object.
>
> **[7:40](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=460)** I don't have to give it a name.
>
> **[7:41](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=461)** I was going to give it a name, but we can just say at, and we get rid of that extra dollar sign.
>
> **[7:46](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=466)** And then we get this kind of custom object.
>
> **[7:48](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=468)** So if I execute that, I get an object now which contains message one, message two, message three.
>
> **[7:55](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=475)** So often what we would do is use multiple if statements to do something and then basically output those values into an object where we could reference those properties.
>
> **[8:05](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=485)** So if we just give this a name, so I want to load this into a variable, you can see what we mean.
>
> **[8:11](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=491)** So we'll call it custom object equals that.
>
> **[8:17](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=497)** Okay. We can then select that F8.
>
> **[8:21](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=501)** If we then say dollar custom object dot and you'll see we get message one, two and three.
>
> **[8:26](https://www.linkedin.com/learning/powershell-7-essential-training/control-the-flow-of-powershell?u=76281980&t=506)** So I can say message three and I'll enter that and you'll get this message that comes up.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this, (5), this. (4), if, (3), case, (2)
> **Tools:** powershell (4), visual studio (1)
> **Analogies:** for example (4)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [illustrator] (1)

#### Ternary operators
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-7-essential-training/ternary-operators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-7-essential-training/ternary-operators?u=76281980&t=0)** - [Instructor] So, when we're building the flow, we often want to build objects to use with all the values that we have from later on.
>
> **[0:08](https://www.linkedin.com/learning/powershell-7-essential-training/ternary-operators?u=76281980&t=8)** So how does that work if we're using PowerShell 7?
>
> **[0:11](https://www.linkedin.com/learning/powershell-7-essential-training/ternary-operators?u=76281980&t=11)** Now of course, everything I've showed you so far will work in PowerShell 7 and every other version of PowerShell.
>
> **[0:16](https://www.linkedin.com/learning/powershell-7-essential-training/ternary-operators?u=76281980&t=16)** Now what's unique here is that we have something in here called Ternary Operators.
>
> **[0:22](https://www.linkedin.com/learning/powershell-7-essential-training/ternary-operators?u=76281980&t=22)** A ternary operator is a way of combining all of these things together.
>
> **[0:26](https://www.linkedin.com/learning/powershell-7-essential-training/ternary-operators?u=76281980&t=26)** So I'm going to show you this.
>
> **[0:29](https://www.linkedin.com/learning/powershell-7-essential-training/ternary-operators?u=76281980&t=29)** So we'll paste this in here.
>
> **[0:32](https://www.linkedin.com/learning/powershell-7-essential-training/ternary-operators?u=76281980&t=32)** Now, what you'll see is we have the variable names of messageOne, messageTwo, messageThree, and then we have the matched and the non-matched messages.
>
> **[0:40](https://www.linkedin.com/learning/powershell-7-essential-training/ternary-operators?u=76281980&t=40)** Now what we don't have is the actual comparison or the tests.
>
> **[0:45](https://www.linkedin.com/learning/powershell-7-essential-training/ternary-operators?u=76281980&t=45)** So I'm going to go up to here and we'll copy that one and we'll paste it directly into here.
>
> **[0:53](https://www.linkedin.com/learning/powershell-7-essential-training/ternary-operators?u=76281980&t=53)** We'll then do the next one.
>
> **[0:55](https://www.linkedin.com/learning/powershell-7-essential-training/ternary-operators?u=76281980&t=55)** And then we'll go through, once we have them all in, and explain what's taking place here.
>
> **[1:00](https://www.linkedin.com/learning/powershell-7-essential-training/ternary-operators?u=76281980&t=60)** Now, the idea behind the ternary commands is to actually make life a little bit simpler for us, a little bit easier.
>
> **[1:08](https://www.linkedin.com/learning/powershell-7-essential-training/ternary-operators?u=76281980&t=68)** So what you can see is, the way the syntax works, imagine you were writing an if statement.
>
> **[1:12](https://www.linkedin.com/learning/powershell-7-essential-training/ternary-operators?u=76281980&t=72)** So, this section here would be the if, then this would be what happens if the if matches and this would be what happens if it doesn't.
>
> **[1:20](https://www.linkedin.com/learning/powershell-7-essential-training/ternary-operators?u=76281980&t=80)** Instead of us using if statements, we can basically wrap the statement that we're going to check, or the if piece, just in brackets, and then we use what's called the question mark and the colon one here to represent the two different types.
>
> **[1:34](https://www.linkedin.com/learning/powershell-7-essential-training/ternary-operators?u=76281980&t=94)** So what we can then do is I'm going to go back to my custom objective variable here and I'm going to say custom ternary object and I'm going to populate this in one go.
>
> **[1:48](https://www.linkedin.com/learning/powershell-7-essential-training/ternary-operators?u=76281980&t=108)** So what does that give us?
>
> **[1:49](https://www.linkedin.com/learning/powershell-7-essential-training/ternary-operators?u=76281980&t=109)** Well, let's look at the object itself.
>
> **[1:52](https://www.linkedin.com/learning/powershell-7-essential-training/ternary-operators?u=76281980&t=112)** You'll see that we get messageOne, messageTwo, messageThree.
>
> **[1:55](https://www.linkedin.com/learning/powershell-7-essential-training/ternary-operators?u=76281980&t=115)** Exactly the same as we did with the three if statements and the custom object statement.
>
> **[2:01](https://www.linkedin.com/learning/powershell-7-essential-training/ternary-operators?u=76281980&t=121)** It means that I still can function the same way.
>
> **[2:04](https://www.linkedin.com/learning/powershell-7-essential-training/ternary-operators?u=76281980&t=124)** Say if I go here and do messageThree like I did before and execute that, I get the same values.
>
> **[2:10](https://www.linkedin.com/learning/powershell-7-essential-training/ternary-operators?u=76281980&t=130)** So a ternary operator allows me to remove the need to write if we go back and count, one, two, three, four, five, six, seven, eight, nine, 10, 11, 12, 13, 14, 15 and then 16, 17, 18, 19, 20.
>
> **[2:24](https://www.linkedin.com/learning/powershell-7-essential-training/ternary-operators?u=76281980&t=144)** So 20 lines of code now becomes one, two, three, four, five.
>
> **[2:30](https://www.linkedin.com/learning/powershell-7-essential-training/ternary-operators?u=76281980&t=150)** So it saves us the lengthy process of writing massive if statements and then moving that into the ternary objects themselves.

> [!info]- Semantic Content
>
> **Code Identifiers:** messagethree (3), messageone (2), messagetwo (2)
> **Code Keywords:** this. (1), if, (1), let (1), function (1)
> **Tools:** powershell (3)
> **Definitions:** is a  (1), means that (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Switch statements
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=0)** - [Instructor] Now, there is another mechanism available to us.
>
> **[0:03](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=3)** I'm just going to make some more space here, and we'll clear the bottom.
>
> **[0:06](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=6)** The other option that will help us in flowing specific things, is what's referred to as a Switch Statement.
>
> **[0:13](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=13)** Now, a switch statement allows me to say, pass a value into it, and the switch statement then determines what to do.
>
> **[0:21](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=21)** So let me give you an idea of how this works.
>
> **[0:24](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=24)** So, first off, I'm going to type in here.
>
> **[0:27](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=27)** So this is value.
>
> **[0:29](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=29)** I'm going to say, "Type your favorite car brand," and then we're going to check the value.
>
> **[0:33](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=33)** Now, to validate the value that's been typed in, we're going to utilize a switch command.
>
> **[0:39](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=39)** Now, I'm going to copy from the exercise file into here, just make it easier.
>
> **[0:44](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=44)** So, I'm going to paste it in and you can see that it says, "Switch value", and then we have "Brand1, Brand2, Brand3, Brand4."
>
> **[0:52](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=52)** Those are the values that the switch command is expecting.
>
> **[0:56](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=56)** So let's select it here, press F8.
>
> **[0:59](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=59)** That loads it in for us.
>
> **[1:00](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=60)** And you can see it says, "Type your favorite car brand."
>
> **[1:04](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=64)** So if I type, Brand2, you can see it will come back and say, "You typed: Brand 2."
>
> **[1:09](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=69)** So the switch command itself is really, really straightforward.
>
> **[1:13](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=73)** Now, let's execute this again.
>
> **[1:14](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=74)** I'm just going to clear this bottom section here.
>
> **[1:17](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=77)** I'm not going to press F8.
>
> **[1:20](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=80)** I'm going to get rid of that clear option here, F8 and this time I'm going to type, Brand5.
>
> **[1:29](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=89)** Now, notice what happened.
>
> **[1:30](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=90)** I didn't get anything come back.
>
> **[1:32](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=92)** It didn't error, it didn't give me a message.
>
> **[1:35](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=95)** It just let me type Brand5, and nothing happened.
>
> **[1:39](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=99)** So how do we change, or how do we cater for that one?
>
> **[1:43](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=103)** Well, once again, what I'm going to do is copy a value from the exercise file, and I'm going to go into here and paste this.
>
> **[1:51](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=111)** And you'll see that we've now updated the actual switch command to have a default value.
>
> **[1:57](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=117)** So the default value will be used any time an existing value, which is here: Brand1, 2,3 and 4, isn't selected.
>
> **[2:07](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=127)** So let me select this here.
>
> **[2:09](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=129)** I'm going to say clear, we'll select this and do F8 and now, I'm going to type Brand5 and you'll see it now types a value.
>
> **[2:20](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=140)** So whenever something is typed in the value that doesn't exist in the expected list of items, it will then return that message and say, "You did not return a brand."
>
> **[2:32](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=152)** Okay, so we can go a little bit further here.
>
> **[2:34](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=154)** What about if we wanted to validate multiple types of input in the switch?
>
> **[2:39](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=159)** So once again, I'm going to go and copy from the exercise file and paste in here, and you'll see, it's a little bit different.
>
> **[2:46](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=166)** What we have this time is I have three brand items and default, and then I have two inputs, which are the read host items.
>
> **[2:55](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=175)** So, Brand1, read host, "Type you favorite car," Brand2, "Type your favorite car."
>
> **[3:02](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=182)** So, I'm now going to go, I'm actually just going to copy this and make it four.
>
> **[3:05](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=185)** So it's evens the one that we just did.
>
> **[3:07](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=187)** So there we go, four, and I'm going to select this now, let me just clear this section here and back into this one and we'll choose F8.
>
> **[3:17](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=197)** Now, you'll notice it prompts me for my favorite car brand.
>
> **[3:20](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=200)** So let me say, "Brand3."
>
> **[3:23](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=203)** Oh, then it prompts me again, because that's the second read host.
>
> **[3:27](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=207)** So let me type, "Brand1," and then it will come back and say, "You typed: Brand 3, You typed: Brand 1.
>
> **[3:33](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=213)** Because of course, it's just outputting those values.
>
> **[3:36](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=216)** Now, as you can see, it's really straightforward to be able to control that flow, not just with the, if statements that we used previously, but utilizing the switch statement to output the values that we need.
>
> **[3:47](https://www.linkedin.com/learning/powershell-7-essential-training/switch-statements?u=76281980&t=227)** And we can control the flow by ensuring there's a default option, to capture anything if it's not typed or if a value isn't expected.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (10), let (8), type, (3), pass (1), this. (1)
> **CLI Commands:** make (3)
> **Exercise Files:** exercise file (3)
> **Speakers:** - [instructor] (1)

#### Define custom help
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=0)** - [Instructor] When building PowerShell, one of the core reasons for doing this is so that you could reuse the scripts and share them between either other organizations or other individuals in the team.
>
> **[0:12](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=12)** Now one of the things that would make sense here like normal code is to comment the PowerShell or at least provide some kind of help.
>
> **[0:20](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=20)** So what I'm doing here is just creating a new file called help.ps1.
>
> **[0:25](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=25)** And then what I'm going to do is paste a function in here and we're going to use this as the function for testing the help.
>
> **[0:32](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=32)** So you can see first off it's called add four numbers.
>
> **[0:35](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=35)** It takes four parameters.
>
> **[0:36](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=36)** First, second, third, fourth.
>
> **[0:38](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=38)** Adds those numbers together into a result and then basically writes out the message that will say one, add one, add one, add one, equals the number.
>
> **[0:47](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=47)** So let's first check to make sure this works.
>
> **[0:50](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=50)** Okay.
>
> **[0:51](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=51)** So add four numbers.
>
> **[0:55](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=55)** You'll see first one, second one, third one, fourth one and enter.
>
> **[1:04](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=64)** And sure enough, it does exactly that.
>
> **[1:05](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=65)** So our function works as expected.
>
> **[1:08](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=68)** Now when we're building the PowerShell scripts, best practices always dictated that we add specific comments to a PowerShell script.
>
> **[1:19](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=79)** So for example, when we're looking at parameters, so here we have integer first, we can actually drop a line right in between here and we could do that for all of them.
>
> **[1:31](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=91)** So this would mean that somebody who was looking at the PowerShell script, kind of like I am here and it's open in Visual Studio code or ISC or something else would be able to instantly look and recognize that these were the four variables.
>
> **[1:47](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=107)** We could also go a little bit further here.
>
> **[1:49](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=109)** And for example, I can go into it here and say, add the four numbers and return the result.
>
> **[2:00](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=120)** And then underneath that I can then say, write the sum to the console.
>
> **[2:10](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=130)** Okay, so you can see that I've got some comments added to the function.
>
> **[2:15](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=135)** So this just makes it easier to read for anybody that's trying to look at the function itself.
>
> **[2:20](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=140)** Does it change anything to do with the function?
>
> **[2:22](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=142)** Well, let's just F8 that again and we'll repeat the same add four numbers.
>
> **[2:27](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=147)** Nope, doesn't make any difference whatsoever.
>
> **[2:29](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=149)** So let's just clear that.
>
> **[2:31](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=151)** Now, one of the features in PowerShell is the ability to utilize the, Get-Help command.
>
> **[2:37](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=157)** Now, if you remember the Get-Help command will look at the code, the script, the module and try to represent some information about that.
>
> **[2:46](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=166)** So it makes more sense such as examples and descriptions, synopsis, et cetera.
>
> **[2:52](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=172)** We can also do this for functions too.
>
> **[2:55](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=175)** So I can say, Get-Help add four numbers.
>
> **[2:58](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=178)** Now what you'll see is it has no values that would make sense so it does an inference on the actual function itself and says, well, from this, I can infer that the name is this, that there's four specific variables as parameters.
>
> **[3:14](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=194)** I can see those and the types of them.
>
> **[3:16](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=196)** But then that's about all the information that we get.
>
> **[3:19](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=199)** We don't get examples, we don't get any extra code.
>
> **[3:21](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=201)** We don't get any description or anything like that.
>
> **[3:25](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=205)** So how do we change that?
>
> **[3:26](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=206)** Well, I'm going to scroll a bit further up here and then I'm going to paste in another version of this function.
>
> **[3:33](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=213)** Now this will be a little bit longer because we've obviously added some of the help information to this.
>
> **[3:38](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=218)** So let me copy the function here.
>
> **[3:41](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=221)** In actual fact, I'm just going to overwrite what's there.
>
> **[3:44](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=224)** And you'll say already as we're scrolling that there's more information here.
>
> **[3:47](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=227)** So we still have the base function, add four numbers first, second, third, fourth, the result, I added an extra right host and then underneath it in these comment tags is the ability to add help.
>
> **[3:59](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=239)** So you can see I've got synopsis, which is the quick brief, what does this function do, a description, which is where you'd add more details.
>
> **[4:08](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=248)** We then have what's called the parameter option, which would explain each parameter.
>
> **[4:13](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=253)** So if I need to add some specific recommendations for the values or maybe specify what the value type would be, or maybe it's a validated set.
>
> **[4:23](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=263)** I may want to represent this in the Help.
>
> **[4:25](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=265)** We can do that for all four of them.
>
> **[4:27](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=267)** I've then got inputs and outputs.
>
> **[4:30](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=270)** Output we'll do just a string value.
>
> **[4:32](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=272)** Then underneath it, I have examples.
>
> **[4:34](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=274)** Now let's just select all of this again.
>
> **[4:36](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=276)** We'll F8 that so we have it loaded into memory.
>
> **[4:39](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=279)** And then what we'll do is run the same function.
>
> **[4:43](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=283)** Sure enough, works like a treat, says here is the full sum 'cause I added that extra right host and all good.
>
> **[4:50](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=290)** Now what does that do to the Get-Help function?
>
> **[4:56](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=296)** So let's go and say, add four numbers and I'll press Enter.
>
> **[5:01](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=301)** Now what we can see is we have further details provided to us which is listed here.
>
> **[5:08](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=308)** So you can see synopsis, which now is listed here, description which is listed here, we still get the syntax for the actual full variables that are there.
>
> **[5:18](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=318)** We don't get any links or remarks, but we do get this idea of we can run Get-Help command looking for examples, for example.
>
> **[5:26](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=326)** Now, I did provide one.
>
> **[5:28](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=328)** So what does that look like when we execute that command?
>
> **[5:32](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=332)** So I'm going to say examples.
>
> **[5:34](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=334)** And instantly I get the example of running that function.
>
> **[5:38](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=338)** What is a syntax, what needs to be passed, which is exactly what I did here.
>
> **[5:43](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=343)** So we could also change that.
>
> **[5:46](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=346)** And let's say, I don't want to do examples, but I want to choose full.
>
> **[5:52](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=352)** They want to do the full option.
>
> **[5:53](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=353)** If we just start scrolling here, you'll see inputs.
>
> **[5:57](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=357)** And then you'll see all of the details about each parameter and noticed here in the parameter section where it says, specifies the first number.
>
> **[6:07](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=367)** If we scroll to the first one, it will say, specifies the first number.
>
> **[6:11](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=371)** So it will take all of the values that we added into that help construct there and present that back.
>
> **[6:18](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=378)** Now, the nice thing about this is that whatever we take that help file and once it's loaded into memory, that function will always work.
>
> **[6:26](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=386)** Now I suppose the difficulty is what happens if you're not creating functions.
>
> **[6:30](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=390)** So let's remove my function and we'll just clear the bottom section here.
>
> **[6:35](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=395)** What about if we're just building a script that just executes commands?
>
> **[6:38](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=398)** That's actually quite a common way of building things.
>
> **[6:41](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=401)** We don't always build functions.
>
> **[6:43](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=403)** What about if I simply wanted to just say, get command and that was it and that was going to be my PowerShell script?
>
> **[6:50](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=410)** Now that's great.
>
> **[6:52](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=412)** Somebody would need to execute that.
>
> **[6:53](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=413)** So they would perhaps just execute help.ps1.
>
> **[6:57](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=417)** But often, how do we provide details of that?
>
> **[7:00](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=420)** Do we write a long document for it?
>
> **[7:02](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=422)** Well, yes and no.
>
> **[7:03](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=423)** But actually what we can do is we can follow the exact same model.
>
> **[7:09](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=429)** So at the top of the ps1 script, we can do that same section and we then have synopsis, description, inputs and outputs, as well as various other parameters we can utilize.
>
> **[7:19](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=439)** And then of course I have the command that I wish to execute.
>
> **[7:22](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=442)** So I'm going to save that.
>
> **[7:24](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=444)** Now to actually run this against a PowerShell script, what we can do is do this.
>
> **[7:32](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=452)** We can say, Get-Help ps1.
>
> **[7:35](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=455)** And all of a sudden, you see that my details have now gone back.
>
> **[7:38](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=458)** Synopsis matches this value and then you've got syntax, for example, the description that matches this.
>
> **[7:45](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=465)** And if I had any inputs and outputs or parameters, for example, I would then specify those.
>
> **[7:50](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=470)** 'Cause what we've talked about so far is building parameters directly into functions.
>
> **[7:54](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=474)** However, a PowerShell script could also use that param option as well.
>
> **[7:59](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=479)** So we don't need to have functions to do things.
>
> **[8:02](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=482)** But what this means is that I can now provide help information like this inside a ps1 script or I can provide it within a function.
>
> **[8:12](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=492)** Now what we're going to do is do something a little bit different.
>
> **[8:14](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=494)** I'm going to go and select my function also, remove my get command so I have both.
>
> **[8:20](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=500)** So I now have help information in the ps1 file and then I have add four numbers function with everything in there.
>
> **[8:28](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=508)** I'm just going to select all of this and just do F8.
>
> **[8:31](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=511)** So that means that's loaded now.
>
> **[8:34](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=514)** I'm going to save my file because I want to perform the Get-Help command on the help.ps1 file.
>
> **[8:41](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=521)** And if I enter that, now notice what happens.
>
> **[8:44](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=524)** This is where we struggle with trying to match things together because it sees this block here and wants to render that but then it also sees other blocks and functions in the page.
>
> **[8:57](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=537)** So this information doesn't get loaded.
>
> **[8:59](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=539)** However, if I wanted to do add four numbers, then that's still loads.
>
> **[9:05](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=545)** So if you prefer to have functions in there and build a PowerShell script that way, then the help should exist in the functions.
>
> **[9:13](https://www.linkedin.com/learning/powershell-7-essential-training/define-custom-help?u=76281980&t=553)** If you're not building functions and just kind of rendering commands one by one, then you just add it into the ps1 file at the top.

> [!info]- Semantic Content
>
> **Code Keywords:** function (19), let (8), this. (3), this, (2), module (1)
> **Tools:** powershell (10), visual studio (1)
> **Analogies:** for example (5), kind of like (1), such as (1)
> **CLI Commands:** make (4)
> **Definitions:** is a  (1), means that (1)
> **Env Vars:** isc (1)
> **Speakers:** - [instructor] (1)

#### Distributing custom PowerShell scripts
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=0)** - [Instructor] Distributing custom PowerShell scripts effectively requires careful planning to ensure security, reliability, and ease of use.
>
> **[0:08](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=8)** Whether you're sharing scripts within an organization or making them available to a broader audience, proper packaging, version control, and deployment strategies play a crucial role.
>
> **[0:18](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=18)** Before distributing a script, two critical steps must be completed to ensure security and reliability.
>
> **[0:24](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=24)** First, validating and testing script functionality is essential to confirm that it performs as expected without errors or unintended consequences.
>
> **[0:35](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=35)** Thorough testing helps identify and resolve potential issues before deployment, reducing the risk of system disruptions.
>
> **[0:43](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=43)** Second, removing sensitive information, such as credentials, API keys, or personally identifiable data, is crucial to prevent unauthorized access and data exposure.
>
> **[0:54](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=54)** Stripping out this information ensures that the script can be safely shared or deployed without compromising security.
>
> **[1:02](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=62)** Security is paramount when distributing scripts.
>
> **[1:05](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=65)** Digital signing establishes trust by ensuring that the scripts originate from a verified source and have not been altered.
>
> **[1:13](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=73)** Using certificates from reputable authorities strengthens this trust, providing a reliable way to authenticate the script's origin.
>
> **[1:21](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=81)** Additionally, enforcing execution policies ensures that only authorized scripts run within the system, reducing the risk of malicious code execution.
>
> **[1:30](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=90)** Together these practices protect the integrity of scripts and safeguard the overall security of the environment that the PowerShell script will be executed in.
>
> **[1:40](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=100)** Now, to sign a PowerShell script, you must first have a certificate, and we can do this by using PowerShell by using New-SelfSignedCertificate.
>
> **[1:48](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=108)** And the most important parameter here is type where we can use CodeSigningCert, which is what's required in order to sign any type of code.
>
> **[1:58](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=118)** We then retrieve that certificate into a cert object.
>
> **[2:02](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=122)** And then we use Set-AuthenticodeSignature, set the file path to the PowerShell script, and then populate certificate with the one that we created.
>
> **[2:11](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=131)** And this will then sign our PowerShell script for us.
>
> **[2:16](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=136)** Packaging scripts into modules creates a clean, scalable, and reusable format, making script management more efficient.
>
> **[2:24](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=144)** Breaking scripts into reusable functions improves modularity and simplifies maintenance.
>
> **[2:30](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=150)** Incorporating manifest files helps define module metadata, ensuring proper versioning and compatibility.
>
> **[2:38](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=158)** Maintaining a consistent folder structure enhances organization and readability, while using version control systems allows for tracking changes and collaborating effectively.
>
> **[2:49](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=169)** Together these best practices ensure that scripts remain maintainable, easy to distribute, and adaptable to future needs.
>
> **[2:56](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=176)** PowerShell scripts can be distributed through various channels, each offering unique advantages.
>
> **[3:02](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=182)** Open source platforms like GitHub provide a collaborative space for sharing and improving scripts, while the official PowerShell Gallery serves as a centralized repository for easy access and installation.
>
> **[3:15](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=195)** Private repositories offer control distribution for internal use, ensuring security and compliance.
>
> **[3:22](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=202)** Package managers like NuGet streamline dependency management and deployment.
>
> **[3:27](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=207)** Automating deployments further enhances efficiency by ensuring updates are consistently applied across environments, reducing manual effort and potential errors.
>
> **[3:39](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=219)** Effective version and dependency management are essential for maintaining long-term script usability.
>
> **[3:45](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=225)** Using semantic versioning clearly communicates updates and changes, helping users understand the impact of each release.
>
> **[3:53](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=233)** Maintaining detailed documentation ensures transparency and provides guidance on script functionality and requirements.
>
> **[4:01](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=241)** Actively managing dependencies prevents conflicts and ensures compatibility with evolving environments.
>
> **[4:08](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=248)** Regular testing for compatibility and planning and also for deprecation can help keep scripts functionality secure and adaptable as technologies change.
>
> **[4:19](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=259)** Automation accelerates script distribution while minimizing the risk of human error.
>
> **[4:25](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=265)** Integrating continuous integration and continuous deployment pipelines with build tools streamlines the development process, ensuring scripts are tested and deployed efficiently.
>
> **[4:37](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=277)** Automated testing helps identify issues early, reducing the likelihood of deployment failures.
>
> **[4:44](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=284)** Deploying scripts across various environments ensures consistency and reliability while monitoring execution and implementing rollback mechanisms provide safeguards, allowing quick resolution of issues, and maintaining stability in the deployment process.
>
> **[5:02](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=302)** Effective troubleshooting is essential for maintaining and improving distributed PowerShell scripts.
>
> **[5:08](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=308)** Monitoring performance helps detect issues in real time, allowing for swift intervention.
>
> **[5:14](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=314)** Detailed login provides valuable data for diagnosing and resolving problems efficiently.
>
> **[5:20](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=320)** Engaging with community feedback helps identify recurring issues early, leading to continuous improvements, providing dedicated support channels ensures users can access assistance when needed, reducing frustration and improving adoption.
>
> **[5:35](https://www.linkedin.com/learning/powershell-7-essential-training/distributing-custom-powershell-scripts?u=76281980&t=335)** A proactive approach to troubleshooting minimizes downtime and enhances overall script reliability.

> [!info]- Semantic Content
>
> **Tools:** powershell (9), github (1)
> **Code Keywords:** module (1), private (1)
> **Env Vars:** api (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 5. Managing Servers, Operating Systems, and Services

> [↑ Back to Table of Contents](#table-of-contents)

#### Navigate the file system
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-7-essential-training/navigate-the-file-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-7-essential-training/navigate-the-file-system?u=76281980&t=0)** - [Instructor] A core feature of PowerShell is the ability to navigate through the file system.
>
> **[0:05](https://www.linkedin.com/learning/powershell-7-essential-training/navigate-the-file-system?u=76281980&t=5)** Now, of course, when we talk about this, especially with PowerShell 7, we obviously need to understand the difference between PowerShell and Bash and where this kind of flows together.
>
> **[0:16](https://www.linkedin.com/learning/powershell-7-essential-training/navigate-the-file-system?u=76281980&t=16)** Now, first off, if you're executing the Bash ls command in Linux inside the PowerShell window, then this would return only file names.
>
> **[0:25](https://www.linkedin.com/learning/powershell-7-essential-training/navigate-the-file-system?u=76281980&t=25)** If you run Get-ChildItem command, which is a PowerShell cmdlet, this will display more information such as last modified location and file size.
>
> **[0:35](https://www.linkedin.com/learning/powershell-7-essential-training/navigate-the-file-system?u=76281980&t=35)** Bash commands, however, only we turn string values, whereas PowerShell returns an entire object.
>
> **[0:43](https://www.linkedin.com/learning/powershell-7-essential-training/navigate-the-file-system?u=76281980&t=43)** So depending on what you're using, it's important to note the difference between the two.
>
> **[0:49](https://www.linkedin.com/learning/powershell-7-essential-training/navigate-the-file-system?u=76281980&t=49)** And this is where PowerShell would be the better option when trying to work with the file system.
>
> **[0:55](https://www.linkedin.com/learning/powershell-7-essential-training/navigate-the-file-system?u=76281980&t=55)** Now, there are common directory and file commands that are available for us in PowerShell.
>
> **[1:00](https://www.linkedin.com/learning/powershell-7-essential-training/navigate-the-file-system?u=76281980&t=60)** You can see that we start out with Get-ChildItem, which is a common one where we can pass a directory to it and it will list all of the items inside of that.
>
> **[1:11](https://www.linkedin.com/learning/powershell-7-essential-training/navigate-the-file-system?u=76281980&t=71)** Then, of course, we have standard verb noun, so New-Item, Copy-Item, Remove-Item, et cetera.
>
> **[1:17](https://www.linkedin.com/learning/powershell-7-essential-training/navigate-the-file-system?u=76281980&t=77)** We can also get specific locations.
>
> **[1:19](https://www.linkedin.com/learning/powershell-7-essential-training/navigate-the-file-system?u=76281980&t=79)** You'll often utilize things like Set-Location in a PowerShell script where you need the entire PowerShell script to execute in a specific location, but you are not necessarily sure where the end user or the admin is going to run that PowerShell command from.
>
> **[1:36](https://www.linkedin.com/learning/powershell-7-essential-training/navigate-the-file-system?u=76281980&t=96)** We can also then do what's called a new PowerShell drive, which will allow us to mount values and utilize them.
>
> **[1:42](https://www.linkedin.com/learning/powershell-7-essential-training/navigate-the-file-system?u=76281980&t=102)** And then a Get-Content will open up the contents of a specific file so we can view them.
>
> **[1:48](https://www.linkedin.com/learning/powershell-7-essential-training/navigate-the-file-system?u=76281980&t=108)** So for example, a Word document, or a text file or a webpage, we can view the HTML.
>
> **[1:55](https://www.linkedin.com/learning/powershell-7-essential-training/navigate-the-file-system?u=76281980&t=115)** Now, if we utilize the Get-ChildItem, which is the most common one here, we can return all items within a specific folder.
>
> **[2:02](https://www.linkedin.com/learning/powershell-7-essential-training/navigate-the-file-system?u=76281980&t=122)** It's as simple as saying, Get-ChildItem, and then passing in the path that we wish to utilize.
>
> **[2:08](https://www.linkedin.com/learning/powershell-7-essential-training/navigate-the-file-system?u=76281980&t=128)** Now you'll notice there's two ways of doing this.
>
> **[2:10](https://www.linkedin.com/learning/powershell-7-essential-training/navigate-the-file-system?u=76281980&t=130)** The first way is to just pass the drive name, or the second option is to utilize -Path parameter, and then also pass that location.
>
> **[2:19](https://www.linkedin.com/learning/powershell-7-essential-training/navigate-the-file-system?u=76281980&t=139)** Now we can also retrieve hidden or system items, 'cause you know, if we're using Windows, by default, some of the system and hidden items are not available and PowerShell will respect that.
>
> **[2:31](https://www.linkedin.com/learning/powershell-7-essential-training/navigate-the-file-system?u=76281980&t=151)** However, we can change that by saying, Get-ChildItem, and we use a Force parameter, which will force the hidden and the system items to be displayed.
>
> **[2:41](https://www.linkedin.com/learning/powershell-7-essential-training/navigate-the-file-system?u=76281980&t=161)** Now, if we wanted to simply just return existing items in a folder and then just display the name, it seems strange syntax here, because normally you would do dash something and then a value, we can now do Get-ChildItem, the directory or the path, and then do -Name and that will just display the name of the object that we're retrieving.
>
> **[3:04](https://www.linkedin.com/learning/powershell-7-essential-training/navigate-the-file-system?u=76281980&t=184)** Now, we can also filter, or at least limit, what's coming back and we can also recursively drop through each subdirectory.
>
> **[3:12](https://www.linkedin.com/learning/powershell-7-essential-training/navigate-the-file-system?u=76281980&t=192)** So we can use Get-ChildItem, specify the path.
>
> **[3:16](https://www.linkedin.com/learning/powershell-7-essential-training/navigate-the-file-system?u=76281980&t=196)** So in this example, I'm using the Documents folder, and then I have a star .txt, or the *.txt, and that allows me to look for just text files and you can see I've got Recursive and Force, so this will look through hidden and system and then recurse through each of the sub folders that might be in that location.
>
> **[3:38](https://www.linkedin.com/learning/powershell-7-essential-training/navigate-the-file-system?u=76281980&t=218)** Now, we can also set the current value of the directory, and we talked about this where, when executing a script, you may want to set the current location.
>
> **[3:47](https://www.linkedin.com/learning/powershell-7-essential-training/navigate-the-file-system?u=76281980&t=227)** So we can set the current directory location, we can also then validate this by passing the -PassThru parameter, and then, of course, we have some PowerShell aliases that we can use.
>
> **[3:59](https://www.linkedin.com/learning/powershell-7-essential-training/navigate-the-file-system?u=76281980&t=239)** So you can see cd, so change directory, chdir, change directory, or sl.
>
> **[4:05](https://www.linkedin.com/learning/powershell-7-essential-training/navigate-the-file-system?u=76281980&t=245)** These are aliases that will run the actual Set-Location PowerShell command.
>
> **[4:12](https://www.linkedin.com/learning/powershell-7-essential-training/navigate-the-file-system?u=76281980&t=252)** So this is an interesting point to bring up, that there are alias values for more or less most of the PowerShell commands that we wish to utilize.
>
> **[4:20](https://www.linkedin.com/learning/powershell-7-essential-training/navigate-the-file-system?u=76281980&t=260)** So when you download a script off the internet, for example, you may look at it and go, "I don't know what command that is."
>
> **[4:25](https://www.linkedin.com/learning/powershell-7-essential-training/navigate-the-file-system?u=76281980&t=265)** It may just be an alias to an existing command.
>
> **[4:30](https://www.linkedin.com/learning/powershell-7-essential-training/navigate-the-file-system?u=76281980&t=270)** Now, because wildcard matching is handled by the Windows PowerShell engine, all cmdlet that accept wildcards use that same notation and have the same matching behavior.
>
> **[4:42](https://www.linkedin.com/learning/powershell-7-essential-training/navigate-the-file-system?u=76281980&t=282)** The Windows PowerShell wildcard notation will include the asterisk, which matches zero or more occurrences of any character.
>
> **[4:51](https://www.linkedin.com/learning/powershell-7-essential-training/navigate-the-file-system?u=76281980&t=291)** We can utilize the question mark, which will match exactly one character.
>
> **[4:57](https://www.linkedin.com/learning/powershell-7-essential-training/navigate-the-file-system?u=76281980&t=297)** And then we can also use left bracket character and a right bracket character with a character surrounded by that, which will look for characters surrounded by a set of matched characters.
>
> **[5:09](https://www.linkedin.com/learning/powershell-7-essential-training/navigate-the-file-system?u=76281980&t=309)** So, very similar to utilizing other CLIs or even just standard coding practices.

> [!info]- Semantic Content
>
> **Tools:** powershell (18), bash (3)
> **Code Keywords:** pass (3), this, (1), from. (1), this. (1), default, (1)
> **Analogies:** for example (2), such as (1), similar to (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** ls (1), cd (1)
> **Env Vars:** html (1)
> **Cross-References:** we talked about (1)
> **Speakers:** - [instructor] (1)

#### Manage files and directories
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=0)** - [Instructor] A common task in PowerShell is managing the file system..
>
> **[0:04](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=4)** I've forgotten how many times I've had to run PowerShell to move files around, create new folder structures, et cetera.
>
> **[0:11](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=11)** Now the good news is within PowerShell, we're able to access documents, folders, files, et cetera.
>
> **[0:18](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=18)** Most of these commands, if we type get-command *item are under what's called the child item or something item so that we can obviously manage that.
>
> **[0:28](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=28)** So you've got clear item, get child item for example.
>
> **[0:32](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=32)** We can also say new item, move item, remove item.
>
> **[0:36](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=36)** These are all underneath the Microsoft PowerShell management module and allow us to manage the files and disk locations on our machines.
>
> **[0:45](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=45)** Now first off, what I want to be able to do is just set the location.
>
> **[0:49](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=49)** So what we have here, I'm going to set a variable.
>
> **[0:51](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=51)** So in the variable here, I have a folder called PS folder.
>
> **[0:54](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=54)** So that means that when I now do location, it should already have that prefix for me.
>
> **[0:59](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=59)** That's actually a side note here as a best practice is if you need to use specific locations within PowerShell and use them at various times, that it's often good to have a variable that you declare at the top.
>
> **[1:12](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=72)** So firstly, what I want to do is look at how we can see what's inside a specific location.
>
> **[1:19](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=79)** And to do this, we utilize get-childitem.
>
> **[1:22](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=82)** I'm going to use what's called the force command, which will allow me to see hidden and system folders.
>
> **[1:27](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=87)** And I can say location.
>
> **[1:29](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=89)** Now the location was the variable that we populated.
>
> **[1:31](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=91)** So we can now see that there's a couple of folders in there.
>
> **[1:34](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=94)** One called data, Psfoldernew, textfiles, users and then a text document.
>
> **[1:41](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=101)** If I wanted to see what was inside the subfolders, then of course I can repeat that same thing, but we also have a parameter called the Recurse.
>
> **[1:50](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=110)** If I do this one, you can see it now breaks open.
>
> **[1:53](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=113)** So I'll scroll a bit here.
>
> **[1:55](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=115)** You can see I've got my PS folder.
>
> **[1:58](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=118)** I've got my data folder has been popped open, my folder new has been popped open, my text files and my users.
>
> **[2:04](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=124)** So I can now see within the structure what's inside those locations.
>
> **[2:10](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=130)** We could also go one step further.
>
> **[2:12](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=132)** So if I say get-childitem and the path will be the location that we specified.
>
> **[2:19](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=139)** And notice I'm using the path parameter this time whereas I didn't before.
>
> **[2:23](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=143)** You don't actually have to, but you can specify this if you want to make it more structured, I'm going to use recursive and then I'm going to use what's called include parameter.
>
> **[2:33](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=153)** And then what I want to look for is simply Excel files.
>
> **[2:38](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=158)** So if I say include, it now goes through my entire structure and identifies those files.
>
> **[2:45](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=165)** We can obviously do the opposite to that too.
>
> **[2:47](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=167)** So if I go back here and say, exclude Excel files, then it will give me all of the text files, et cetera, or other file extensions that might exist there.
>
> **[2:56](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=176)** So just an easy way of filtering out to the information.
>
> **[3:00](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=180)** 'Cause you know how this goes.
>
> **[3:01](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=181)** If you perform a search on your machine, it's going to bring back everything and sometimes you have to craft these filters.
>
> **[3:07](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=187)** PowerShell is a great way to be able to do that.
>
> **[3:11](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=191)** Now what about if you were looking for, let's say specific changes based on a date.
>
> **[3:17](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=197)** So let me just go back and say Path $location.
>
> **[3:23](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=203)** I also want to make this recursive.
>
> **[3:25](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=205)** And then this is where we get to combine the where object.
>
> **[3:29](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=209)** So where we start to filter, if I say FilterScript, and of course what we have is those two squarely brackets, which is obviously going to be what we're going to filter on.
>
> **[3:40](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=220)** And then we can utilize regular parentheses here, say $_. let's say, LastWriteItem is greater than
>
> **[3:53](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=233)** and we'll pick a date like so.
>
> **[3:57](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=237)** And press enter.
>
> **[3:58](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=238)** And of course, it's going to come back and say, well, the last write one is not greater than, so maybe we can do equals.
>
> **[4:07](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=247)** Like so.
>
> **[4:08](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=248)** Or maybe we can do less than so we have the flexibility of utilizing any of those.
>
> **[4:16](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=256)** And so there we go.
>
> **[4:16](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=256)** If I say less than 'cause these were done previous, so I can now see the files.
>
> **[4:21](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=261)** So based on that specific one, you can see the last right time is the property that comes back when we iterate through the files and folders.
>
> **[4:29](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=269)** So that gives us the flexibility of being able to filter out values by dates and times.
>
> **[4:34](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=274)** Especially if you're trying to see maybe where individual users or a custom process is putting files into a location, we can then check that by dates and times.
>
> **[4:45](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=285)** Now another option.
>
> **[4:47](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=287)** And another kind of task that you might have to do is actually create the new objects.
>
> **[4:53](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=293)** So a new item.
>
> **[4:55](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=295)** So I'm going to say path.
>
> **[4:56](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=296)** And now what we're going to do is because I'm using a path, I actually want to encompass this in quotes.
>
> **[5:01](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=301)** And then we're going to do what we did before, where you'll see if we're utilizing quotes, we can actually do dollar parentheses and then the name of the variable.
>
> **[5:10](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=310)** And that will output that option.
>
> **[5:12](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=312)** And then I'm going to say PSFolderNew, which is what I want to create.
>
> **[5:17](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=317)** And then I'm going to specify the type that we wish to create.
>
> **[5:20](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=320)** And if I simply tab, you can see there's a whole host of different things it can create.
>
> **[5:25](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=325)** I'm going to say a directory.
>
> **[5:27](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=327)** I'm going to click enter.
>
> **[5:28](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=328)** And it comes back and says, Oh, it actually exists.
>
> **[5:31](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=331)** So how can we get rid of that?
>
> **[5:32](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=332)** If we choose force, then of course it will now create the new folder or overwrite the folder that already exists.
>
> **[5:40](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=340)** And of course you may not want to do that just because if it already exists, then you don't need to do that.
>
> **[5:45](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=345)** The second way of doing it, if we take this same kind of syntax here is I want to create a file.
>
> **[5:51](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=351)** So let me go in and say, Psfile,txt.
>
> **[5:55](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=355)** And then I'm going to change my directory option to be a file.
>
> **[5:59](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=359)** I'm going to choose force so it can overwrite and sure enough, It now has my PS file that's been created.
>
> **[6:05](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=365)** So we may need to create folder structures and often files utilizing PowerShell.
>
> **[6:11](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=371)** Now what about if you wanted to actually put values into that document or into that file as part of this process?
>
> **[6:18](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=378)** That's actually quite a common request.
>
> **[6:20](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=380)** So you're iterating let's say, through some kind of data and you need to inject that data into text files or other types of files as part of the process, and then you want to save them.
>
> **[6:32](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=392)** So what we can do is actually create a variable here.
>
> **[6:36](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=396)** I'm going to call it document.
>
> **[6:38](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=398)** I'm just going to copy my Lorem Ipsum to go into that.
>
> **[6:42](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=402)** So that gives me my text.
>
> **[6:43](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=403)** And then what I'm going to do is we'll just enter that.
>
> **[6:47](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=407)** Now we could do this on one line, but it's just easier to see.
>
> **[6:49](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=409)** So we have document equals there.
>
> **[6:52](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=412)** So I'm going to say document I'm then going to pipe it out.
>
> **[6:55](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=415)** And then we'll use, what's called out-file.
>
> **[6:58](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=418)** Out-file allows me to specify that whatever this is, output to into a specific file of some description.
>
> **[7:06](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=426)** So I'm going to use my brackets again, $location, and I'm going to say, I want to create a PSDocument.txt.
>
> **[7:18](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=438)** So remember our location is going to be set to a specific place.
>
> **[7:23](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=443)** So if I do this, what we should end up with is a specific document.
>
> **[7:27](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=447)** So if I go here, you can see PS folder, PS document, and sure enough, there's my value.
>
> **[7:34](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=454)** So I was able to take a text value and just write that directly in here.
>
> **[7:40](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=460)** Now, what we could also do is remove all of those items that we created as well.
>
> **[7:45](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=465)** So for example, if I go into my folder structure here and let's say I created a new folder, so I'm going to say folder, I'm going to call it PS folder delete.
>
> **[7:58](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=478)** So I have a folder.
>
> **[7:59](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=479)** Let's say that I need to remove that folder.
>
> **[8:03](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=483)** And though I could have done it in the interface, I'm doing it as part of a PowerShell command.
>
> **[8:08](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=488)** So maybe I'm copying vast amounts of data from one location to another, and I create a temporary space.
>
> **[8:13](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=493)** And then I need to remove that as part of this.
>
> **[8:16](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=496)** So once again, location, PSFolderDelete was the name.
>
> **[8:24](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=504)** And then we'll do recurse and click OK.
>
> **[8:28](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=508)** Now what does that look like?
>
> **[8:29](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=509)** Well, let's bring up our file explorer, go back into my PS folder and sure enough, it's now been deleted.
>
> **[8:36](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=516)** So PowerShell is pretty powerful when it comes to managing files and folders.
>
> **[8:41](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=521)** We can also do the delete and filter it to specific dates.
>
> **[8:45](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=525)** So for example, I could use the get child item to iterate through content, and then I can out-file or I can then delete and run those commands within a specific four loop statement.
>
> **[8:59](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=539)** Now, one of the other options available to us is the copy item.
>
> **[9:02](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=542)** This allows me to copy a specific file or folder to a different location.
>
> **[9:08](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=548)** Now, this definitely is useful and is one that I've used frequently.
>
> **[9:14](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=554)** I'm going to use my users one here.
>
> **[9:16](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=556)** And then I also have users.xlxs.
>
> **[9:22](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=562)** I'm going to double check my path to make sure.
>
> **[9:24](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=564)** So we're going to users and I'm going to delete my other copy that I have so I have users.xls.
>
> **[9:30](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=570)** That should be right, except I've got my S and X amount in the wrong way.
>
> **[9:36](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=576)** Now what we can do is use the parameter called destination, which will then allow me to choose where this needs to go.
>
> **[9:44](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=584)** I'm going to keep it in the same folder just for now, but actually we could move this to anywhere.
>
> **[9:52](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=592)** It wouldn't really make a difference as long as I have access to the location.
>
> **[9:55](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=595)** So if I click enter open up that folder, you can see I now have my users copies back.
>
> **[10:01](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=601)** So really, really straightforward allowing us to copy and move items around.
>
> **[10:06](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=606)** I can also rename the item if I need to, 'cause that name obviously isn't great.
>
> **[10:12](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=612)** So if we look at my path here, that name isn't the greatest.
>
> **[10:15](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=615)** So if I was to copy the path like so.
>
> **[10:20](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=620)** Rename path.
>
> **[10:22](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=622)** Now I'm just going to paste the actual path here instead of using location.
>
> **[10:27](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=627)** And then the property I want to use is called NewName.
>
> **[10:30](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=630)** So I'm going to call it UsersCopyCopy, like so.
>
> **[10:37](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=637)** And if we go back to my folder structure, there we go, it's been renamed.
>
> **[10:40](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=640)** So it's really straightforward to be able to go through and tweak and change and update files, move things around, et cetera.
>
> **[10:48](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=648)** The last one here is the ability to kind of pipe these commands together.
>
> **[10:53](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=653)** So if we go into my folder structure here and go into text files, you can see I've got a whole series of text files.
>
> **[10:58](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=658)** Text file one, two, three, four, five, six, seven, eight, nine, 10.
>
> **[11:01](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=661)** Now, what I want to be able to do is change the file extension of those files, keeping them as the files that they were, but just change the name.
>
> **[11:10](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=670)** So this is where we look at combining items together.
>
> **[11:14](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=674)** So I'm going to use my get child item again.
>
> **[11:20](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=680)** Location.
>
> **[11:21](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=681)** This time I'm going to go into my text files folder, and I'm going to say *.txt that will give me everything that's there.
>
> **[11:30](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=690)** And then going to pipe that command.
>
> **[11:32](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=692)** And then we'll join that with the rename item.
>
> **[11:36](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=696)** And my new name.
>
> **[11:38](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=698)** We're going to put this into here.
>
> **[11:40](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=700)** Remember what this does when we move it into like a filtering script or a kind of aware script.
>
> **[11:45](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=705)** This allows me to go through and change the output or something along the lines of these values.
>
> **[11:55](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=715)** So I'm going to say \.txt$.
>
> **[12:00](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=720)** We'll just go and iterate through each of the textiles.
>
> **[12:03](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=723)** And then I'm going to say here .bak like so.
>
> **[12:08](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=728)** So that says, go and get me all the items in the location and then rename them as needed.
>
> **[12:14](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=734)** So if I go back to my folder, you can see they've all been renamed to .bak now.
>
> **[12:19](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=739)** So just a few examples of how you manage specific files and folders.
>
> **[12:24](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=744)** Being able to create them, remove them, get rid of them, et cetera.
>
> **[12:28](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=748)** We also have the ability to look at things inside there.
>
> **[12:32](https://www.linkedin.com/learning/powershell-7-essential-training/manage-files-and-directories?u=76281980&t=752)** And we'll talk about using the get content parameter later on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), delete (4), this, (2), module (1), include, (1)
> **Tools:** powershell (9)
> **CLI Commands:** make (4)
> **Definitions:** is a  (2), means that (1), is called (1)
> **Analogies:** for example (3)
> **Cross-References:** go back to (2)
> **File Paths:** psdocument.txt (1)
> **Best Practices:** best practice (1)

#### Retrieve data
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=0)** - [Instructor] Now that we've looked at using files and folders, one of the things that's really critical in PowerShell is accessing of data, whether that's from a text file, whether it's from a Json file or a database or something else.
>
> **[0:13](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=13)** So firstly, I'm going to set my location variable back to a new folder because if I go into my folder structure here, go into my data, I have some objects that I wish to utilize.
>
> **[0:23](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=23)** So the first thing here is I want to be able to create some kind of content and also edit content.
>
> **[0:29](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=29)** So a simple example of this is to do something like this, which will say count from one to a hundred is kind of my range.
>
> **[0:40](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=40)** And then what I want to do is do a for each object command, which is going to loop through those numbers, starting at one all the way to a hundred.
>
> **[0:52](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=52)** Now, what I can do here is say add content, path.
>
> **[0:58](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=58)** Remember, the path that we're going to use.
>
> **[0:59](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=59)** So I'm going to do my dollar location again.
>
> **[1:04](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=64)** And then we'll create a file called PSNumbers.txt.
>
> **[1:10](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=70)** And then the value that I want to associate in here will then be line, remember the dollar underscore dot.
>
> **[1:20](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=80)** That's going to iterate through each of these items and write those values into that file.
>
> **[1:27](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=87)** So you can see it's kind of a strange concept here, but we say, this is my block of stuff that I want to iterate through.
>
> **[1:33](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=93)** This is the for each loop to go through it.
>
> **[1:35](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=95)** And then for each line item, add content to it and populate those values.
>
> **[1:40](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=100)** Now I'm going to go and double check that don't have a PS numbers one in there, which I do.
>
> **[1:45](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=105)** So I'm going to delete that.
>
> **[1:47](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=107)** And then I'm going to execute my command.
>
> **[1:49](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=109)** And that was quick.
>
> **[1:50](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=110)** If we go back to the directory, you can see PS numbers and it will say line one, line two, line three, line four, line five, line six, all the way to line hundred.
>
> **[1:58](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=118)** So this is a combination of commands.
>
> **[2:01](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=121)** It's a combination of an array of numbers.
>
> **[2:03](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=123)** It's using the for each loop and then, adding content.
>
> **[2:06](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=126)** Now what we can do is we can also retrieve the content.
>
> **[2:11](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=131)** So if I say, get content and say path, if I then do my regular brackets here, location slash PS numbers dot TXT, you'll see it returns the content of the file directly to the console.
>
> **[2:32](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=152)** Now that may be useful, that may not be useful.
>
> **[2:35](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=155)** It all depends on if you need to render these values to the console itself.
>
> **[2:41](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=161)** Now that's just one type of text, that was creating a text file.
>
> **[2:44](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=164)** Now let's say that you actually have an XML file.
>
> **[2:48](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=168)** So let me go to my folder.
>
> **[2:50](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=170)** I'm going to go to my menu data and I'm just going to edit this here.
>
> **[2:55](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=175)** You can see that my XML file is just utilizing breakfast materials.
>
> **[3:00](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=180)** So Belgian waffles, strawberry Belgian waffles, French toast, et cetera.
>
> **[3:05](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=185)** So just a list of information.
>
> **[3:07](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=187)** What we can do here is we can actually go ahead and load this information and utilize it within PowerShell because not all the time are we using, like an actual database.
>
> **[3:20](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=200)** Sometimes we're using flat file structures.
>
> **[3:23](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=203)** The way we do this is we need to declare the path to the data.
>
> **[3:28](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=208)** So that's my location, plus whatever the XML definition is.
>
> **[3:32](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=212)** And then we define the path or what's called an X path.
>
> **[3:36](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=216)** So if I go to my menu and choose edit, let's look at the X path.
>
> **[3:40](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=220)** If I want to retrieve the name of the food, my X path is a combination of this one, this one and then this one.
>
> **[3:50](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=230)** So in reality, what that looks like when I build my X path is I say, breakfast menu, food slash name.
>
> **[4:01](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=241)** So let's go back to my file.
>
> **[4:03](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=243)** Breakfast menu, food, name.
>
> **[4:06](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=246)** So that's my logical structure that I'm trying to get to.
>
> **[4:09](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=249)** So I'm going to set that as my X path.
>
> **[4:12](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=252)** What I'm then going to do is utilize a new function called select XML.
>
> **[4:17](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=257)** I'm then going to say, give it the path of the XML file.
>
> **[4:21](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=261)** This then has an X path option, where I'm going to say X path is that.
>
> **[4:27](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=267)** And then what I'll do is just select an object.
>
> **[4:32](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=272)** And what I won't do is just expand the property.
>
> **[4:35](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=275)** Now we've talked about expand property, where it pops open the values.
>
> **[4:39](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=279)** Because remember, when the data comes in, it's kind of squashed together, but the expand will pop that open.
>
> **[4:44](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=284)** And I'm going to say the node I want to expand.
>
> **[4:47](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=287)** Say, if I choose enter, instantly, we get those values back.
>
> **[4:51](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=291)** We get the names of the breakfast menu items in a standard list because we told it to expand the properties and we told it the X path to get the information from.
>
> **[5:02](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=302)** So fairly straightforward.
>
> **[5:04](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=304)** Another option would be that we want to go through a list of processes, for example.
>
> **[5:09](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=309)** So let me go back to my folder.
>
> **[5:11](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=311)** And in here, I have a CSV file.
>
> **[5:13](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=313)** I'm going to edit there and you can see, it's not the greatest thing to view.
>
> **[5:17](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=317)** It's all of my system processes that run on this computer.
>
> **[5:21](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=321)** Now, to get that and generate that, we can use get process.
>
> **[5:25](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=325)** And then we use what's called export CSV.
>
> **[5:28](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=328)** The export CSV will take whatever we pass before it because I'm using a pipe command and then push that out to where it's supposed to go.
>
> **[5:36](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=336)** So I'm going to say path.
>
> **[5:38](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=338)** Once again, I'm going to do dollar location and processes dot CSV.
>
> **[5:48](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=348)** I'm going to make sure that I delete the one I've got there and we'll recreate this, like so.
>
> **[5:54](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=354)** Now this one takes a while because of the get process, not because of the export.
>
> **[5:58](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=358)** Now this will retrieve all of the processes on my machine and then automatically export that into a CSV, which it did.
>
> **[6:06](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=366)** And then you'll see, I've got my CSV file.
>
> **[6:08](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=368)** If I choose edit, there's my big list again.
>
> **[6:11](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=371)** Now that's not great because I don't really know what to do with that and how to look at that.
>
> **[6:16](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=376)** So what we can do is we can then say processes, create a variable and we have the ability to import that CSV instead.
>
> **[6:29](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=389)** So I can say, path and it will be similar path that we used at the top.
>
> **[6:34](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=394)** So I'm just going to go and select this here.
>
> **[6:37](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=397)** That's not the one that I wanted.
>
> **[6:39](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=399)** We'll just type that in.
>
> **[6:41](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=401)** Device didn't copy as expected.
>
> **[6:43](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=403)** Location, processes dot CSV and then I can enter.
>
> **[6:50](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=410)** Now, when we look at the variable here, then we get this whacking great list of information, which is really not helpful to be able to view.
>
> **[6:59](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=419)** So remember, what we can do here is I can say format that to a table using the standard alias or use format table or I can output that to something else.
>
> **[7:08](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=428)** So we end up with this kind of list structure that makes sense to us now.
>
> **[7:13](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=433)** We can also go one step further and when we actually output the value, so if I go back to my existing command, which was here, so export two processes, I'm going to create a new file.
>
> **[7:24](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=444)** I'm going to call it, processes delim and then at the end of this, there is a delimiter option that we can specify.
>
> **[7:31](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=451)** And I'm going to use the colon here.
>
> **[7:33](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=453)** So I'm going to enter that.
>
> **[7:34](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=454)** Now what does this look like when it comes out?
>
> **[7:36](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=456)** Well, if you think the first time around, it just created a CSV, which is generally just comma or tab separated, but this time around, I told it to use a delimiter.
>
> **[7:45](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=465)** So if I open this one here, you'll see there's loads of these little separators that break up each of the values.
>
> **[7:54](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=474)** So what that means is that when we want to bring those in, so if I go back to processes, I have to specify what that delimiter would be.
>
> **[8:03](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=483)** Then I can say, processes and format the table.
>
> **[8:09](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=489)** And you'll notice, it does it a little bit different in the format because it doesn't really necessarily understand correctly what's going on with the delimiters.
>
> **[8:17](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=497)** So I'm going to be honest with you.
>
> **[8:18](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=498)** Sometimes the delimiters work, depending on what you choose and sometimes it doesn't.
>
> **[8:22](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=502)** Like, this doesn't help in this view.
>
> **[8:24](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=504)** So just be aware of when you're choosing to delimit the values, choose something that you're going to then utilize in syntax code instead of just rendering it out to the screen.
>
> **[8:35](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=515)** It's never a great option to just render it directly to the screen.
>
> **[8:40](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=520)** Now, another thing that we often do with CSV files is we import the CSV files, so that we can actually iterate through them.
>
> **[8:48](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=528)** So I'm going to specify my location again, like so.
>
> **[8:53](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=533)** And then I'm going to use an employee's list CSV.
>
> **[9:01](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=541)** And before we do that, let's have a look at the employee CSV.
>
> **[9:04](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=544)** So I'm going to edit this and you'll see it's a whole host of information about employees.
>
> **[9:10](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=550)** There's about a hundred of them or so, maybe a thousand in here.
>
> **[9:14](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=554)** So I want to be able to retrieve those values and if I say import, let's just stop that for a second, you can see it brings each individual person back with all the values.
>
> **[9:25](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=565)** And now this is particularly not helpful to view.
>
> **[9:28](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=568)** So what about if we wanted to basically loop between each row?
>
> **[9:34](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=574)** Now that would make more sense.
>
> **[9:35](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=575)** Cause then I could write out the values in a way that would be useful.
>
> **[9:40](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=580)** So I'm going to say import the CSV and then, create a full loop and I just pressed enter.
>
> **[9:46](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=586)** Now in the terminal here, I can press enter and it shows me the two arrows and that means I'm able to write further code.
>
> **[9:53](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=593)** So I'm going to say, write host, it's basically a continuation of what I want to write.
>
> **[9:58](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=598)** So let me go in here.
>
> **[10:01](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=601)** Dot first name.
>
> **[10:05](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=605)** So I can see what I'm doing here is I'm wrapping these values into individual kind of display.
>
> **[10:12](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=612)** And because we're iterating through the CSV file, I can use the names that are the columns to be the ones that get the values.
>
> **[10:22](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=622)** So I can say, born and we'll do the same thing here, dollar underscore dot, date of birth.
>
> **[10:35](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=635)** Okay, so what this will do is when it imports a CSV, it will iterate each row and it will write a value out that says, first name comma, last name, born and date of birth.
>
> **[10:47](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=647)** So I'm going to press enter here and then, I'm going to close my function or my for each loop, like so and then leave that to go.
>
> **[10:55](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=655)** And sure enough, it now renders each item from within there, passing in first name, last name with my text of born and then the date of birth.
>
> **[11:05](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=665)** That is quite a common task.
>
> **[11:08](https://www.linkedin.com/learning/powershell-7-essential-training/retrieve-data?u=76281980&t=668)** I've done that multiple times where I'm importing values from CSV files, so that then I'm able to identify and perform other actions on those specific items.

> [!info]- Semantic Content
>
> **Env Vars:** csv (17), xml (5), txt (1)
> **Code Keywords:** let (8), this, (3), else. (2), delete (2), function (2)
> **Cross-References:** go back to (5)
> **UI Navigation:** go to (3), open the (1)
> **CLI Commands:** make (2), node (1)
> **Tools:** powershell (2), terminal (1)
> **Definitions:** is a  (3)
> **File Paths:** psnumbers.txt (1)

#### Work with JSON objects
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=0)** - [Instructor] So now that we've looked at utilizing CSV files, XML files, et cetera, and more common format to use is actually JSON.
>
> **[0:10](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=10)** So that's the JavaScript Notation type stuff.
>
> **[0:13](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=13)** If I paste this in here, I'm just going to generate a JSON file.
>
> **[0:18](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=18)** So what this will do, is I'm going to use system info, which will be details of the current machine that I'm on.
>
> **[0:23](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=23)** And I'm then going to say, convert that from the CSV format, and choose convert to JSON and I put the file.
>
> **[0:29](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=29)** That's just a precursor.
>
> **[0:30](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=30)** So this is going to retrieve all of the process information about my machine, and drop it into a file.
>
> **[0:37](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=37)** So we should see this computer info option.
>
> **[0:39](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=39)** I'm going to say open with notepad, and you'll see that we get kind of squarely brackets, and then some information, and then a squarely bracket.
>
> **[0:46](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=46)** Which is the JSON notation type structure.
>
> **[0:50](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=50)** So the idea being behind JSON, is that it's fairly lightweight, it's easy to traverse up and down.
>
> **[0:56](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=56)** Whereas XML can often be a little bit different, because you have to use X path.
>
> **[1:00](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=60)** So JSON tends to be a well utilized format.
>
> **[1:04](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=64)** Now, what I can do here is I can actually retrieve, the content like we did in the past.
>
> **[1:10](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=70)** So I'm going to just use my location option again, and then I'm going to say, computer info dot JSON, and then I'm going to convert from JSON.
>
> **[1:26](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=86)** So I get kind of a better structure, and notice that then returns it as a basic text file format.
>
> **[1:34](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=94)** So the convert to JSON will convert something into JSON, and the convert from, we'll convert it back from that one.
>
> **[1:43](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=103)** Now, what we can also do with this, which is really really powerful, is we can monitor and change how that comes out.
>
> **[1:49](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=109)** So I can tweak, I could do a four each, and loop through this.
>
> **[1:53](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=113)** But actually what I've got here, is something called Out Grid View.
>
> **[1:58](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=118)** If I click enter here, what this will do, is it should launch there we go into the window at the bottom, and you'll see it takes all of those fields.
>
> **[2:06](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=126)** It's not the greatest thing to look at, but you can see it puts all of my values, into a separate column.
>
> **[2:12](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=132)** And of course, I can then if I had more values, for example, if it was a list of data of users, or employees, or something else, it would list them as rows.
>
> **[2:22](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=142)** So this JSON file is just fairly flat, but the out grid view allows me to kind of perform queries.
>
> **[2:29](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=149)** I can add criteria to it.
>
> **[2:31](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=151)** So don't underestimate the power of bringing something out of the PowerShell world, by using the out grid.
>
> **[2:37](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=157)** So let me just close that.
>
> **[2:39](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=159)** Okay, so that allows me to retrieve the content.
>
> **[2:42](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=162)** Now what's the purpose of that?
>
> **[2:44](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=164)** Well, as we've looked through in the previous data, one of the key things is the ability to populate other objects with the data that you get.
>
> **[2:54](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=174)** So let me just create a JSON object variable, and then I'll use the same syntax we just utilized, or be not using the grid.
>
> **[3:04](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=184)** And let me just get my location here.
>
> **[3:07](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=187)** So location slash computer info dot JSON.
>
> **[3:13](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=193)** So once we have the path, then I'm also going to convert from the JSON.
>
> **[3:21](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=201)** So I should put an N there, so let me get rid of the M.
>
> **[3:24](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=204)** Convert from JSON, and click enter.
>
> **[3:27](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=207)** So now I have a JSON object, or a variable at least, populated with the values.
>
> **[3:34](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=214)** And sure enough when I render it.
>
> **[3:35](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=215)** It just gives me that same information.
>
> **[3:37](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=217)** Now what's special about this, is that whenever I say JSON object, I can now press the tab key after doing a period.
>
> **[3:46](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=226)** And you'll see it will loop through the properties, that were inside that JSON file.
>
> **[3:52](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=232)** Because I've now associated all of that content, to a specific object that I can then utilize those.
>
> **[3:59](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=239)** So if we go back here, and say dot and just say host name, for example, that gives me the name of the desktop.
>
> **[4:08](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=248)** I could also go through here and just tab.
>
> **[4:11](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=251)** And we could go all the way through, looking for something like windows directory.
>
> **[4:15](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=255)** Which will give me the path on my machine to the windows directory, where windows is installed.
>
> **[4:20](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=260)** So there we go, windows directory.
>
> **[4:23](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=263)** So what we've done is took data that was in a flat file, dropped it into an object, and made, so we can utilize it almost like variables.
>
> **[4:32](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=272)** Now what about if you wanted to create your own JSON?
>
> **[4:36](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=276)** So what we'll do, we'll do JSON object.
>
> **[4:39](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=279)** I'm going to kind of reset this one, and I'm going to do what's called at, and then to squarely brackets.
>
> **[4:46](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=286)** Now, what that means is, is that is now an empty object.
>
> **[4:50](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=290)** So there you go, nothing in there.
>
> **[4:52](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=292)** So I'm going to say array list, and I'm going to create effectively a list of objects.
>
> **[5:02](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=302)** So list collections dot array list.
>
> **[5:06](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=306)** Okay, so let's just stop for a second.
>
> **[5:07](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=307)** I have an object which is going to accept multiple values.
>
> **[5:11](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=311)** I have an array list, which is going to take those values, and now I need to add values to my array list.
>
> **[5:19](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=319)** So I'm actually just going to copy one here and paste it in.
>
> **[5:22](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=322)** So we'll go here, and you'll see it says array list dot add, and then some values.
>
> **[5:27](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=327)** So that's zero, so let me just copy my other three, cause I want to load it with four values, paste anyway, there we go.
>
> **[5:34](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=334)** So you can see I've got items zero, one, two, and three.
>
> **[5:38](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=338)** So four items.
>
> **[5:40](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=340)** So what does the array list look like?
>
> **[5:42](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=342)** It looks like this.
>
> **[5:43](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=343)** So you'll see name, surname, name, surname.
>
> **[5:47](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=347)** It basically loops through the values.
>
> **[5:49](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=349)** So let me just clear that back.
>
> **[5:51](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=351)** Now what I want to do, is create a specific object, ready to contain my JSON data.
>
> **[5:59](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=359)** So what I'm going to do, is create a new employees, and I'm then going to say at again.
>
> **[6:08](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=368)** So we'll say employees equals at the two, and then from here, I'm going to create a root node, which will be at the parent of our JSON object.
>
> **[6:20](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=380)** And then I'm going to say, array list and just close that.
>
> **[6:24](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=384)** So what does that look like now?
>
> **[6:26](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=386)** Well, let's go and take employees, and you'll see it looks like one of those items where we'd have to use expand the property, to get the values out.
>
> **[6:34](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=394)** So it created me a parent object in the JSON called employees, and put all the values underneath it.
>
> **[6:40](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=400)** What I need to do, is I'm going to say JSON object, I'm going to say add, I'm then going to create my root node in the JSON.
>
> **[6:50](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=410)** And then I'm going to say populate that with employees.
>
> **[6:54](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=414)** So I now have that done.
>
> **[6:56](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=416)** What I can now do is say JSON object, and look at it, and you'll see what it contains now is similar to the previous one.
>
> **[7:03](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=423)** But the parent is data, with employees as a sub container.
>
> **[7:07](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=427)** So what does this look like?
>
> **[7:09](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=429)** Well, if we do convert to JSON, like so, and then if I say depth, and we'll put that as 10, you can say it looks like this now.
>
> **[7:21](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=441)** So what it does, it creates the JSON for us.
>
> **[7:24](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=444)** So that's powerful, because it means we can take standard information, that we retrieve in other ways, and output that format into JSON object, that we can then utilize in other applications.
>
> **[7:37](https://www.linkedin.com/learning/powershell-7-essential-training/work-with-json-objects?u=76281980&t=457)** So the JSON components are really based around you converting something to JSON, or converting something from JSON, very, very powerful, and allows us to create, and read data that's in the JSON format already.

> [!info]- Semantic Content
>
> **Env Vars:** json (33), csv (2), xml (2)
> **Code Keywords:** let (8), this, (2), this. (2), from, (1), else, (1)
> **Analogies:** for example (2), similar to (1)
> **CLI Commands:** node (2)
> **Tools:** powershell (1)
> **Speakers:** - [instructor] (1)


### 6. PowerShell Remoting

> [↑ Back to Table of Contents](#table-of-contents)

#### Introduction to PowerShell remoting
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-7-essential-training/introduction-to-powershell-remoting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-7-essential-training/introduction-to-powershell-remoting?u=76281980&t=0)** - [Instructor] So what is PowerShell Remoting?
>
> **[0:03](https://www.linkedin.com/learning/powershell-7-essential-training/introduction-to-powershell-remoting?u=76281980&t=3)** Well, firstly, it's a feature that lets administrators run commands on other systems or remote systems.
>
> **[0:10](https://www.linkedin.com/learning/powershell-7-essential-training/introduction-to-powershell-remoting?u=76281980&t=10)** You can connect an administrator's local PowerShell session with another session that's running on a different machine.
>
> **[0:17](https://www.linkedin.com/learning/powershell-7-essential-training/introduction-to-powershell-remoting?u=76281980&t=17)** Commands that are then entered in that local system gets sent to the remote computer, and then are executed locally as if the admin was on that machine.
>
> **[0:28](https://www.linkedin.com/learning/powershell-7-essential-training/introduction-to-powershell-remoting?u=76281980&t=28)** The remote system will then send the results back to the local systems.
>
> **[0:32](https://www.linkedin.com/learning/powershell-7-essential-training/introduction-to-powershell-remoting?u=76281980&t=32)** So if I'm on a Windows 10 device, I send the commands out, they will come back to me.
>
> **[0:38](https://www.linkedin.com/learning/powershell-7-essential-training/introduction-to-powershell-remoting?u=76281980&t=38)** Now, PowerShell Remoting utilizes a Windows Remote Management, or WinRM framework, to provide that remoting feature.
>
> **[0:46](https://www.linkedin.com/learning/powershell-7-essential-training/introduction-to-powershell-remoting?u=76281980&t=46)** You can then utilize PowerShell Desired State Configuration, or DSC, and Windows Management Instrumentation, WMI, as part of that Windows Remote Management.
>
> **[0:57](https://www.linkedin.com/learning/powershell-7-essential-training/introduction-to-powershell-remoting?u=76281980&t=57)** PowerShell Remoting itself uses TCP, HTTP, and also HTTPS communications.
>
> **[1:06](https://www.linkedin.com/learning/powershell-7-essential-training/introduction-to-powershell-remoting?u=76281980&t=66)** There are three ways to use PowerShell Remoting in version seven of PowerShell.
>
> **[1:10](https://www.linkedin.com/learning/powershell-7-essential-training/introduction-to-powershell-remoting?u=76281980&t=70)** First, via the computer name parameter which ships with quite a lot of the cmdlets.
>
> **[1:16](https://www.linkedin.com/learning/powershell-7-essential-training/introduction-to-powershell-remoting?u=76281980&t=76)** The second is to utilize what's called the Invoke-Command.
>
> **[1:20](https://www.linkedin.com/learning/powershell-7-essential-training/introduction-to-powershell-remoting?u=76281980&t=80)** Lastly, you can open an interactive PowerShell session, which allows you to directly control the PowerShell on that remote computer.
>
> **[1:30](https://www.linkedin.com/learning/powershell-7-essential-training/introduction-to-powershell-remoting?u=76281980&t=90)** Now, the simplest way to employ PowerShell Remoting is to pass the computer name.
>
> **[1:37](https://www.linkedin.com/learning/powershell-7-essential-training/introduction-to-powershell-remoting?u=76281980&t=97)** You simply use dash computer name on a parameter, pass the name of the computer.
>
> **[1:42](https://www.linkedin.com/learning/powershell-7-essential-training/introduction-to-powershell-remoting?u=76281980&t=102)** And then as long as the configuration is set as it should be for remoting, then it will pass those commands across.
>
> **[1:50](https://www.linkedin.com/learning/powershell-7-essential-training/introduction-to-powershell-remoting?u=76281980&t=110)** It does not require a session, or really any special configuration.
>
> **[1:56](https://www.linkedin.com/learning/powershell-7-essential-training/introduction-to-powershell-remoting?u=76281980&t=116)** Second option is to use the Invoke-Command.
>
> **[1:59](https://www.linkedin.com/learning/powershell-7-essential-training/introduction-to-powershell-remoting?u=76281980&t=119)** So the cmdlet will run the PowerShell on the local machine and then push out the values to the remote computer.
>
> **[2:08](https://www.linkedin.com/learning/powershell-7-essential-training/introduction-to-powershell-remoting?u=76281980&t=128)** It will use a PowerShell session.
>
> **[2:10](https://www.linkedin.com/learning/powershell-7-essential-training/introduction-to-powershell-remoting?u=76281980&t=130)** It also has the capability of returning all the output from that command, including any errors, back to the machine that I may be executing that on.
>
> **[2:20](https://www.linkedin.com/learning/powershell-7-essential-training/introduction-to-powershell-remoting?u=76281980&t=140)** And it also utilizes the computer name parameter.
>
> **[2:24](https://www.linkedin.com/learning/powershell-7-essential-training/introduction-to-powershell-remoting?u=76281980&t=144)** Now the other option is to do an interactive PowerShell session.
>
> **[2:29](https://www.linkedin.com/learning/powershell-7-essential-training/introduction-to-powershell-remoting?u=76281980&t=149)** So the most high-level way to use PowerShell remoting is to create a managed PowerShell sessions.
>
> **[2:36](https://www.linkedin.com/learning/powershell-7-essential-training/introduction-to-powershell-remoting?u=76281980&t=156)** This is a kin to SSH, for example, in that you're able to use your local terminal to run commands on a remote machine returning all input directly to the console.
>
> **[2:48](https://www.linkedin.com/learning/powershell-7-essential-training/introduction-to-powershell-remoting?u=76281980&t=168)** In order to start a session on a remote computer, you need to obviously pass specific parameters into that local terminal, and it will then enter and exit the session very simply in an interactive way.

> [!info]- Semantic Content
>
> **Tools:** powershell (15), terminal (2)
> **Env Vars:** dsc (1), wmi (1), tcp (1), http (1), https (1)
> **Code Keywords:** pass (4), require (1)
> **CLI Commands:** ssh (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Enable PowerShell remoting
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=0)** - [Instructor] Now as part of using PowerShell and managing applications and servers and desktops, et cetera, one of the core things is that we need to be able to do what's called PowerShell remoting.
>
> **[0:10](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=10)** So this is the idea that we can communicate and make changes or adjustments or retrieve information from another device.
>
> **[0:18](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=18)** Now, to do this, we first need to enable PS remoting, and this can be done by typing Enable-PSRemoting.
>
> **[0:26](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=26)** And if we need to, we can just press the force command also.
>
> **[0:29](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=29)** So if I click enter here, it will come back and say, PowerShell remoting has been enabled, and everything is great.
>
> **[0:35](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=35)** And it will come back and return you any error messages where perhaps it's failed.
>
> **[0:40](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=40)** It comes back and says the windows RM service, which is the remote management service is already set up to receive.
>
> **[0:48](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=48)** And so you can actually perform remote PowerShell to this machine.
>
> **[0:52](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=52)** Now, of course, every machine that you wish to communicate to would also need PowerShell remoting enabled.
>
> **[0:59](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=59)** But what we'll do is we'll actually simulate connecting to the remote machine being itself by utilizing the local host configuration.
>
> **[1:08](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=68)** Now, what we can do is once we have the configuration completed, and we can get into, or at least execute commands against another one, the way this is done is by utilizing what's called a PS session, a PowerShell session to that other machine.
>
> **[1:23](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=83)** Now, the first thing we can do is we can actually say, Get-PSSession configuration.
>
> **[1:31](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=91)** And if I click enter here, you can see that we've got the definitions of the versions of PowerShell and what's actually allowed.
>
> **[1:38](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=98)** So it's a good way to check that everything is configured ready for the PowerShell session.
>
> **[1:44](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=104)** So you can see, I have access allowed in both these pieces of PowerShell 7.
>
> **[1:49](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=109)** Now, to actually create the session, we'll first generate a variable called session.
>
> **[1:55](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=115)** And then we'll use a new command called PSSession.
>
> **[1:59](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=119)** In here, we can specify the computer name, and I'm going to use local host, which will represent itself.
>
> **[2:06](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=126)** And then at this point, we also can say ConfigurationName.
>
> **[2:10](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=130)** And then for example, I can ensure that it's connecting using PowerShell 6, for example, by typing PowerShell 6.
>
> **[2:17](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=137)** Now I'm not going to do that, I'm just going to say local host and click enter.
>
> **[2:20](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=140)** Now, what does that mean?
>
> **[2:22](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=142)** What did it actually do?
>
> **[2:23](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=143)** I had no feedback whatsoever.
>
> **[2:25](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=145)** So if we click session, you can see that I now have a run space as it's called, or a connection to the other machine.
>
> **[2:33](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=153)** It's a remote machine type, because you can see it listed here and it's now opened.
>
> **[2:38](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=158)** So that means I have a session enabled.
>
> **[2:42](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=162)** Now to initiate commands on the other machine, we can then do invoke command, session.
>
> **[2:50](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=170)** And then we tie the two together.
>
> **[2:52](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=172)** So I can say session, which means I'm going to invoke a command into that other session.
>
> **[2:59](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=179)** And then it utilizes what's called a script block.
>
> **[3:02](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=182)** The script block, which we've come to learn over these past few modules is the ability for us to execute other code inside of it.
>
> **[3:11](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=191)** So we're going to do something simple.
>
> **[3:12](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=192)** So I'm going to say PSVersionTable.
>
> **[3:15](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=195)** So this is going to say, go and connect to this session that we created on the other device, and then execute this command.
>
> **[3:25](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=205)** So sure enough, I ran it, it execute it and returned to me back the PowerShell version table.
>
> **[3:30](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=210)** Now, of course, if this was a server or another desktop or something else, then I would obviously retrieved information from that machine.
>
> **[3:40](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=220)** Now, the other way of doing it is to actually just create what's called an interactive session.
>
> **[3:45](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=225)** Now interactive sessions are done by using Enter-PSSession.
>
> **[3:49](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=229)** And if I create local host, it'll just go into that local host or the machine.
>
> **[3:55](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=235)** And you'll notice the difference here, it'll say the name of the host, and then PowerShell will be returned back to me.
>
> **[4:02](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=242)** Whereas when I'm in my admin one, it just says users, trainer, and then I'm in.
>
> **[4:07](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=247)** So we can tell the difference between the two.
>
> **[4:10](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=250)** I can at any point exit this session.
>
> **[4:14](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=254)** And it will take me back to my existing session, which is the parent one that I've initiated.
>
> **[4:20](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=260)** So it's a great way of moving in and out of applications and servers.
>
> **[4:26](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=266)** So if we go back and say, enter local host, I can then say things like host name, that would get me that, or I can actually then invoke a command or I can just call.
>
> **[4:38](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=278)** So Get-UICulture.
>
> **[4:40](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=280)** Now we know that that's interactive, which means that's been executed on the remote machine.
>
> **[4:46](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=286)** And then of course, when I finished with that, I can exit the PS session.
>
> **[4:50](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=290)** Now, of course, how do we get PS sessions?
>
> **[4:54](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=294)** Well if we have a look at the commands here, and say, Get-PSSession, you can see that we have two open right now.
>
> **[5:00](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=300)** So we have the run space one, which was my remote one.
>
> **[5:03](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=303)** And then we have a compatibility one, which is the interactive one that I created.
>
> **[5:08](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=308)** So two different types of connections to a remote machine.
>
> **[5:13](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=313)** Now, of course, what's nice here is to run commands, not just things like PSVersionTable, it's all about using the invoke command.
>
> **[5:23](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=323)** The invoke command, if we just tap through, you can see, add session, computer name, credentials, ports, whether we use SSL, and any kind of configuration that we wish to utilize.
>
> **[5:34](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=334)** So there's a lot of parameters that we can utilize.
>
> **[5:36](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=336)** So I'm going to say computer name, local host.
>
> **[5:40](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=340)** And then in my script block, I can then go in and say, get computer info.
>
> **[5:47](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=347)** And what this will do is return me all of the information about that specific computer that we're connected to.
>
> **[5:55](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=355)** And it returns it into the session that we're currently in.
>
> **[5:58](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=358)** So the key here is that when we're remoting, we're able to go backwards and forwards between the existing session and the remote session.
>
> **[6:05](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=365)** Now, there are other ways of doing this, where we can actually utilize what's called a persistent session.
>
> **[6:12](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=372)** So when we created the $session here, this is what's referred to as a persistent session.
>
> **[6:19](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=379)** Which means it's always going to be there and we can go backwards and forwards if we needed to.
>
> **[6:24](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=384)** Now, how do we remove?
>
> **[6:26](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=386)** Well, if we do Remove-PSSession, you can see it asked me for a session.
>
> **[6:34](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=394)** And if I say five, and notice what it does, it comes back and says, well, no, you can't get rid of that because that's not the Id of the session.
>
> **[6:42](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=402)** And that's because it needs a session object to be there.
>
> **[6:47](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=407)** Now, when I say session, you can see it's now closed.
>
> **[6:51](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=411)** The state has gone from, opened up here to closed, and I can now no longer go into that session because it's been revoked.
>
> **[6:59](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=419)** So to remote onto machines is really simple.
>
> **[7:02](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=422)** Make sure that you've run the Enable-PSRemoting.
>
> **[7:05](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=425)** And there's also often PowerShell firewall configuration that needs to be created.
>
> **[7:09](https://www.linkedin.com/learning/powershell-7-essential-training/enable-powershell-remoting?u=76281980&t=429)** Maybe there's network blocking in between, but once the PowerShell remoting command has been executed, and it's added in all the configuration that's required, it's as simple as either entering into a PowerShell session, which is interactive on the other machine, or we can do a new PowerShell session and create what's referred to as the persistent one.

> [!info]- Semantic Content
>
> **Tools:** powershell (17)
> **Code Keywords:** this, (2), type, (1), else, (1), from, (1)
> **CLI Commands:** make (2), rm (1)
> **Analogies:** for example (2)
> **Env Vars:** ssl (1)
> **Definitions:** means that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Combine commands
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=0)** - [Illustrator] One of the goals of using PowerShell is to create PowerShell scripts that we can reuse again and again and again.
>
> **[0:07](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=7)** But more importantly, that we can actually hand off to other individuals, other organizations that wish to use them too.
>
> **[0:13](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=13)** Now, of course, what we need to do when we building them is we want to make them as streamlined as possible.
>
> **[0:18](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=18)** So we don't just want to say, hey, here's 50,000 lines of PowerShell, it will do exactly what you want to do.
>
> **[0:24](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=24)** The goal is to make it not only readable, but also optimized in the way that it runs.
>
> **[0:30](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=30)** By reducing the code that's needed, because often it can be quite easy to write hundreds and thousands of lines of PowerShell.
>
> **[0:36](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=36)** When in reality, we do have mechanisms for joining commands together.
>
> **[0:40](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=40)** Now, as an example of this, we've been executing these commands quite frequently, but the very first one that obviously we've used is the pipe command.
>
> **[0:50](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=50)** So the pipe command allows us to take a value from one function command output to the next one.
>
> **[0:57](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=57)** So I'm going to say, get command pipe.
>
> **[0:59](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=59)** Then I can filter by using a where object.
>
> **[1:02](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=62)** Once I've passed the where object and completed that, maybe I want to sort the object by a specific way.
>
> **[1:10](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=70)** Then when I've finished sorting the object, maybe I want to select name, for example.
>
> **[1:16](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=76)** This gives you an example of what that looks like.
>
> **[1:18](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=78)** And we've done some of these already where we pipe commands from one to the other.
>
> **[1:22](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=82)** So whether it's executing into a where, a sort or a select, or even if it's just passing it off to another command, or if we just outputting it into a file, the pipe command is one of the key ones that we should utilize when building PowerShell scripts.
>
> **[1:39](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=99)** So let me just clear this down.
>
> **[1:41](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=101)** Now, the good news is that PowerShell has a few more of these that are quite useful.
>
> **[1:46](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=106)** The first two I will look at is the two 'and' signs or the two ampersand signs and the two pipe signs next to each other.
>
> **[1:54](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=114)** These are what's called chain operators or pipeline chain operators, however you want to refer to it and these are designed to chain commands together.
>
> **[2:04](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=124)** Just like the pipe command, where we join things together, these do a similar, but have some very special capabilities.
>
> **[2:11](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=131)** The first one we'll look at is the ampersand ampersand operator.
>
> **[2:15](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=135)** Which will execute the command to the right side of it if the first command was successful.
>
> **[2:22](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=142)** So what does that look like?
>
> **[2:23](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=143)** Well, let's have a look at doing something simple.
>
> **[2:27](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=147)** So, I'm going to type write hosts and primary message.
>
> **[2:31](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=151)** This will be just a simple message and then going to do the two ampersands and then I'll say, write host, secondary message.
>
> **[2:43](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=163)** So nothing spectacular here.
>
> **[2:44](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=164)** So what should happen based on the logic of how the operator works, it should render the first one, so write host primary message.
>
> **[2:51](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=171)** And because that's successful, it should write the second one too.
>
> **[2:55](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=175)** So if I click enter, sure enough it works exactly as it is described.
>
> **[3:00](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=180)** Now, what about if that first one fails?
>
> **[3:03](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=183)** So let's change this a little bit.
>
> **[3:05](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=185)** I'm going to say write error and then tell it to write a text message, which in reality should fail because that's not how we use write error.
>
> **[3:15](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=195)** And then on the second side of this, we'll stick to our trustee, write host and I'll say secondary message and then we'll enter that too.
>
> **[3:24](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=204)** And sure enough, what do we get, we get the write error, primary error, which comes up.
>
> **[3:29](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=209)** It doesn't actually execute it because it just fails.
>
> **[3:32](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=212)** You can tell it's in red and never completes the second piece because the first command fails, hence it doesn't complete the second.
>
> **[3:41](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=221)** So just an interesting way you've been able to combine things together and say, well, instead of having lots of if statements go backwards and forwards, we can just say, well, if this one completes then do or don't do this one.
>
> **[3:53](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=233)** Now, if we go a little bit further and look at the other operator, this is the two pipe command.
>
> **[3:58](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=238)** This operator executes the command to the right side of it only if the first command was unsuccessful.
>
> **[4:05](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=245)** So basically it's the opposite of the two ampersands.
>
> **[4:09](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=249)** So let's go back to our standard thing, we'll use, write host, primary message.
>
> **[4:17](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=257)** This time we'll use the two pipes and then we'll say, write host secondary message, like so and we'll enter that.
>
> **[4:25](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=265)** Now what do we get?
>
> **[4:27](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=267)** We get the primary message gets executed, but the secondary doesn't because the primary one was successful.
>
> **[4:34](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=274)** So the second one doesn't pass.
>
> **[4:37](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=277)** So you can see it's the opposite way round, because of course, if it was the two ampersands, we would have got both messages.
>
> **[4:42](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=282)** Now, how does that work when we choose the other option?
>
> **[4:45](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=285)** So write error, primary error, two pipes, write host, secondary message.
>
> **[4:59](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=299)** And notice the first one errors, which is perfect, cause that is an error and then it renders the second one.
>
> **[5:06](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=306)** So it's an interesting approach that we have for being able to combine commands together.
>
> **[5:11](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=311)** Now it doesn't just stop there.
>
> **[5:12](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=312)** We can go a little bit further and we have other commands that are available to us.
>
> **[5:17](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=317)** So we have what's called coalescing operators.
>
> **[5:20](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=320)** They are two question marks.
>
> **[5:23](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=323)** We also have question marks with an equal, which is a no condition assignment.
>
> **[5:27](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=327)** And then our last ones will be a question mark and a period.
>
> **[5:31](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=331)** And also we have a question mark and the two kind of square brackets.
>
> **[5:35](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=335)** And they are no conditional access operators.
>
> **[5:38](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=338)** So they sound really grand and really confusing but actually let's have a look in practice how this would work.
>
> **[5:44](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=344)** So first off, let's ignore the fact that these exist.
>
> **[5:47](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=347)** So I'm going to create a variable and set it to null.
>
> **[5:51](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=351)** So when I say variable, it just comes back with nothing.
>
> **[5:54](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=354)** What I want to do is actually perform a test on this.
>
> **[5:57](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=357)** I want to be able to say, if null equals the same as the variable, then I'm going to add my squarely bracket and I'm going to say no value is found.
>
> **[6:12](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=372)** And then I'm going to close my squarely bracket and it will come back and say, no value is found.
>
> **[6:18](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=378)** And so, that's because the values obviously match.
>
> **[6:22](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=382)** So if null equals that, then it will do that.
>
> **[6:24](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=384)** Else it has a variable output that it will render.
>
> **[6:29](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=389)** So let me go back here and say variable equals test, and then go back to here.
>
> **[6:37](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=397)** And notice it turns me nothing because it didn't pass the test.
>
> **[6:41](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=401)** It basically went to what would have been the else option to write that value out.
>
> **[6:46](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=406)** Now, if we wanted to include that, I could say if dollar null equals dollar variable, like so,
>
> **[6:57](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=417)** and I'm going to try and keep it all on one line.
>
> **[6:59](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=419)** No value is found like so, else we'll just say render variable out.
>
> **[7:10](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=430)** So now we should get the test value.
>
> **[7:11](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=431)** So instantly you can see how this works.
>
> **[7:14](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=434)** It's a if, else statement.
>
> **[7:17](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=437)** So that works amazingly well.
>
> **[7:18](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=438)** Now what about if we wanted to use these coalescing kind of conditional operators.
>
> **[7:24](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=444)** Now, to make it use that special operator, let's go back and we'll set the variable back to null, like so, and then it's going to be as simple as saying dollar variable, question mark question mark, no value is found.
>
> **[7:47](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=467)** And sure enough, it comes back with no value is found.
>
> **[7:50](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=470)** If I go back and set it to be test and then return that notice it comes back and it will return the test value by default.
>
> **[8:00](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=480)** So you can see the difference in the code.
>
> **[8:02](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=482)** It was a larger if statement that said, well, if it's this, if it's that, then do this.
>
> **[8:07](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=487)** However, if we use these conditional type coalescing operators, then it's as simple as saying, if the variable doesn't have anything, then do this.
>
> **[8:17](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=497)** Otherwise just render that value.
>
> **[8:19](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=499)** So when you're writing PowerShell commands and trying to combine things together, remember that the pipe command is your friend, the ampersand and the double ampersand, and the double pipe commands will allow you to get rid of some of that lengthy PowerShell and convert it into smaller.
>
> **[8:34](https://www.linkedin.com/learning/powershell-7-essential-training/combine-commands?u=76281980&t=514)** And then of course, these coalescing operators are great for reducing some of that heavy processing and conversion or at least validation of items that you may type.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this, (3), this. (3), pass (2), function (1)
> **Tools:** powershell (8)
> **CLI Commands:** make (3)
> **Cross-References:** go back to (2)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (1), just like (1)
> **Speakers:** - [illustrator] (1)

#### Practical PowerShell remoting
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=0)** - [Instructor] Now, the great thing about PowerShell is that it allows us to combine all of the different types of commandlets and scripts and operators together to create a PowerShell script.
>
> **[0:13](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=13)** Now, what we're going to do is look at how we would put all these things together to create something that might be quite useful.
>
> **[0:18](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=18)** So first off, let's go into visual studio code and I'm going to create a new file.
>
> **[0:24](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=24)** And I'm going to call this one, remote.ps1.
>
> **[0:27](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=27)** Now of course, we looked at remote PowerShell a while back, but obviously what we haven't really done is looked at how we can use that effectively, rather than just running simple queries against it.
>
> **[0:40](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=40)** So what I'm going to do is from the exercise file, I'm just going to copy and paste the contents of the remote file here and then, we'll actually walk through what's going to happen.
>
> **[0:49](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=49)** Now, the first thing you can see is I've set the location to a specific folder because that's where I want the output of this to actually be created.
>
> **[1:00](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=60)** Then underneath that, I'm using a new command, which we haven't used yet called get cim instance.
>
> **[1:04](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=64)** These are new aversions of the PowerShell commands for connecting to the local machine or remote machines and retrieving information.
>
> **[1:13](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=73)** So what I'm doing here is I'm retrieving desktop settings, so I'm using get cim instance and you'll see, we have a property called class name, where I can pass in what the win32 name would be.
>
> **[1:26](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=86)** So win32 underscore desktop, if I just select this one here and press F8, you'll see it brings back some information about the specific machine.
>
> **[1:35](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=95)** So it'll say, this is the name of the person, this is the trainer, et cetera.
>
> **[1:39](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=99)** So these are the accounts and things like, is the screensaver on, is the screensaver timed out, et cetera.
>
> **[1:45](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=105)** Underneath that, I'm achieving bias information.
>
> **[1:48](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=108)** So if we execute this one, you'll see now, two states of VMware workstation and so, it brings back the details about the bias for that one.
>
> **[1:57](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=117)** So you can see that we have lots of these.
>
> **[1:59](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=119)** We're populating variables, so one called desktop, one called bias, processor, manufacturer.
>
> **[2:04](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=124)** Keep going down, hot fixes, operating system, usergroups, who's logged on right now and of course, the services.
>
> **[2:12](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=132)** So these commands are going to go and inspect the machine that this PowerShell is executed on and retrieve all of this information.
>
> **[2:21](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=141)** Now, what are we going to do with that?
>
> **[2:22](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=142)** Well, you can see at the bottom here, let me just clear this section that we're actually going to create a file.
>
> **[2:29](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=149)** So we're going to generate a new variable called report, which has this name.
>
> **[2:33](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=153)** So I'm going to create a report dot log file.
>
> **[2:35](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=155)** And then the first thing we do is utilize a command we've already used, which is new item.
>
> **[2:40](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=160)** And I'm going to take this variable here and say, create me the new report, specify it as a file and then call it, desktop report.
>
> **[2:48](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=168)** It's going to have a value that sits inside that file.
>
> **[2:52](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=172)** So the file will be called report dot log, but the first piece of text in there will be desktop report.
>
> **[2:58](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=178)** What I can do once we have those, let me just scroll this here so we can see, is that I'm going to use the add content function here to add content to that.
>
> **[3:08](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=188)** And you'll see, I've broken it up into sections, where I'm adding standard text values.
>
> **[3:13](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=193)** So desktop details, bias details and then the output of those variables.
>
> **[3:18](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=198)** So what this does, this actually goes and retrieves the values that are ran and retrieved from the cim instance commands and then populates the variables for me to use.
>
> **[3:29](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=209)** And if I select all of this and just press F8, you can see that it will execute locally.
>
> **[3:35](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=215)** And if I just scroll up a little bit here, you can see there's a report log that's been generated.
>
> **[3:40](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=220)** So if I go to my file explorer, just open it up here and if I go to PS folder, sure enough, there's a report file that's been created.
>
> **[3:48](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=228)** And you can see it's got my titles and all the information about it.
>
> **[3:52](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=232)** Now, that's not what we're talking about, so I'm going to just delete this.
>
> **[3:56](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=236)** What we're talking about is, now we have this PowerShell script, how do I get to execute that on a different machine?
>
> **[4:05](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=245)** So that's what this practical remoting is about because we might not be able to write all of the commands that we need to in the extended session or the remote session or the persistent session.
>
> **[4:16](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=256)** What is easier is we create the PowerShell scripts and then we look at how we can just execute them.
>
> **[4:22](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=262)** So I'm going to leave this as it is.
>
> **[4:24](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=264)** And I'm going to go to my terminal.
>
> **[4:26](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=266)** Now in the terminal, we know that we can create a session by utilizing either enter PS session or using new PS session.
>
> **[4:34](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=274)** Now, the first thing I want to do is just set a location variable, so we know where things are.
>
> **[4:40](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=280)** And I'm going to use my same location that I used before.
>
> **[4:44](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=284)** So users, trainer, documents slash PowerShell slash start.
>
> **[4:53](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=293)** And the reason I need this one is because that's the path to the PowerShell file that we just created.
>
> **[4:58](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=298)** Now, let's create a session to my machine.
>
> **[5:02](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=302)** So obviously it's going to be executed locally, which is the same as if it was on another machine.
>
> **[5:07](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=307)** So new PS session, computer to name.
>
> **[5:11](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=311)** I'm going to choose local hosts to simulate being on a remote machine.
>
> **[5:15](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=315)** And so, I have that kind of configuration set.
>
> **[5:18](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=318)** So I'm going to press enter and then we'll just double-check that session is created.
>
> **[5:23](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=323)** Okay, so it is, so we now have a remote connection.
>
> **[5:27](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=327)** It's called a remote machine.
>
> **[5:28](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=328)** It's to the local machine, but that's okay.
>
> **[5:30](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=330)** It still represents a remote connection.
>
> **[5:33](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=333)** Now, if you remember correctly, the command that we use for executing something on another device or another machine is invoke command.
>
> **[5:42](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=342)** The first thing we have to do is specify the session.
>
> **[5:45](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=345)** So I'm going to say, I want my session here.
>
> **[5:48](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=348)** And then of course, we have a script block, which is contained in the squarely brackets there.
>
> **[5:53](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=353)** So what we need to do now is I want it to execute a PowerShell file.
>
> **[5:58](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=358)** So how can we do this?
>
> **[6:00](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=360)** Well, first off, let's look at this approach.
>
> **[6:03](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=363)** So remember, we've used location a few times.
>
> **[6:07](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=367)** So location slash remote.ps1 and I'm going to press enter.
>
> **[6:12](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=372)** Now notice what happened.
>
> **[6:14](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=374)** It just returned remote.ps1 as a name.
>
> **[6:18](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=378)** So that means that in the script block, I actually need something to tell it to do, so that it can execute that command.
>
> **[6:28](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=388)** Now, this is where we change the command.
>
> **[6:30](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=390)** So I'm going to go back and I'm going to delete to all of this out.
>
> **[6:34](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=394)** So it just says invoke command session, session.
>
> **[6:36](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=396)** And then at this point, I'm going to try and utilize file path, which is another parameter that is available to me.
>
> **[6:45](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=405)** So now, I'm going to go ahead and say dollar location, remote.ps1 and execute that.
>
> **[6:55](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=415)** And then notice that took a little bit longer, but what did it do?
>
> **[6:59](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=419)** It looks like it did something.
>
> **[7:01](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=421)** We're not a hundred percent sure whether it wrote something back, so let's double check in our folder directory.
>
> **[7:06](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=426)** Sure enough, there's a report that's been rendered and there it is.
>
> **[7:10](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=430)** It's rendered all the details that I asked for in my PowerShell script.
>
> **[7:14](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=434)** So when you remoting, often it's tempting to just use script block and write all of the methods that we need to utilize.
>
> **[7:22](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=442)** For example, I could say, get cim instance and I could call that directly in the script block, but in the real world, you don't want to be writing all of those out.
>
> **[7:31](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=451)** So the idea being is you create a PS1 file or a PowerShell script with all the commands that you need and then you just invoke that command.
>
> **[7:40](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=460)** It will then retrieve the local PS one file, push that out over to the remote machine and execute and return the values.
>
> **[7:49](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=469)** So from a practical sense, this is how we utilize PowerShell.
>
> **[7:54](https://www.linkedin.com/learning/powershell-7-essential-training/practical-powershell-remoting?u=76281980&t=474)** This is how we take advantage of the remoting capabilities, the structure in PowerShell, the functions that we can build to return information that we need and to perform tasks or just give us information that we need across our network estate.

> [!info]- Semantic Content
>
> **Tools:** powershell (14), terminal (2), visual studio (1)
> **Code Keywords:** let (6), delete (2), pass (1), function (1), this. (1)
> **UI Navigation:** go to (3), scroll up (1)
> **Env Vars:** ps1 (1)
> **Exercise Files:** exercise file (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-7-essential-training/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-7-essential-training/next-steps?u=76281980&t=0)** - [Liam] I hope you've enjoyed this course as much as I've enjoyed being able to put it together for you and take you through getting up and running with PowerShell Version 7.
>
> **[0:08](https://www.linkedin.com/learning/powershell-7-essential-training/next-steps?u=76281980&t=8)** I recommend that your next steps are first, to practice using PowerShell using the example files that are provided within the course, then read and study the Microsoft documentation for PowerShell 7.
>
> **[0:21](https://www.linkedin.com/learning/powershell-7-essential-training/next-steps?u=76281980&t=21)** You can also visit [Powershell.org](https://Powershell.org) to find great articles, podcasts, and information about furthering your PowerShell skills.
>
> **[0:29](https://www.linkedin.com/learning/powershell-7-essential-training/next-steps?u=76281980&t=29)** You can also visit the PowerShell blog and the Scripting Guys blog that are provided by Microsoft.
>
> **[0:35](https://www.linkedin.com/learning/powershell-7-essential-training/next-steps?u=76281980&t=35)** And then of course, lastly, take all of the many other courses for PowerShell here at LinkedIn Learning.
>
> **[0:40](https://www.linkedin.com/learning/powershell-7-essential-training/next-steps?u=76281980&t=40)** Regardless of where you go from here with PowerShell, I encourage you to dig deeper and deeper into how and where PowerShell can benefit you.
>
> **[0:48](https://www.linkedin.com/learning/powershell-7-essential-training/next-steps?u=76281980&t=48)** With the cloud services such as Microsoft 365 and Azure, the next logical step is to begin importing those modules and scripting against the cloud.
>
> **[0:58](https://www.linkedin.com/learning/powershell-7-essential-training/next-steps?u=76281980&t=58)** Most of all, enjoy the scripts that you create and the power that it gives you.
>
> **[1:01](https://www.linkedin.com/learning/powershell-7-essential-training/next-steps?u=76281980&t=61)** It is the core part of what I do each day and has played a big part in my overall IT career, especially working within the cloud.
>
> **[1:09](https://www.linkedin.com/learning/powershell-7-essential-training/next-steps?u=76281980&t=69)** I wish you the best of luck as you become a PowerShell expert.

> [!info]- Semantic Content
>
> **Tools:** powershell (10)
> **CLI Commands:** find (1)
> **URLs:** [powershell.org](https://powershell.org) (1)
> **Versions:** version 7 (1)
> **Analogies:** such as (1)
> **Speakers:** - [liam] (1)


## Resources

- Exercise files available

## Skills Covered

- Powershell

## Path Context

### In [[Powershell- Automate IT Tasks and Microsoft 365 Administration]]
**1 of 3** | [[PowerShell- Automating IT Administration]] →

## Appears In

- [[Powershell- Automate IT Tasks and Microsoft 365 Administration]]

## Related Courses

_Courses sharing skills:_

- [[Learning PowerShell]] — Powershell
- [[PowerShell for Microsoft 365 Administration]] — Powershell
- [[PowerShell- Automating IT Administration]] — Powershell

---

[↑ Back to top](#)