---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: learning-linux-command-line-2023
url: "https://www.linkedin.com/learning/learning-linux-command-line-2023"
level: Beginner
updated: 2/22/2023
learners: 63406
skills:
  - Linux System Administration
  - CLI
exercise_files: true
github: "https://github.com/LinkedInLearning/learning-linux-command-line-3005201/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQFKBIqdHlpLgQ/learning-public-crop_675_1200/B4EZjohj_CGYAY-/0/1756247769738?e=2147483647&amp;v=beta&amp;t=SwNwvjs-GlmU-hOVIUVJA3cB6sHvgoD0SaeCgHZWJik"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Ubuntu Linux Professional Certificate by Canonical]]'
next_courses:
  - '[[Ubuntu Linux- Operating System Basics]]'
path_nav: '[{"path":"Ubuntu Linux Professional Certificate by Canonical","position":1,"total":4,"prev":null,"next":"Ubuntu Linux- Operating System Basics"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/it-help-desk
  - topic/network-and-system-administration
  - topic/web-development
  - skill/linux-system-administration
  - skill/cli
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Learning%20Linux%20Command%20Line%20(2023).md)

![Learning Linux Command Line](https://media.licdn.com/dms/image/v2/D4E0DAQFKBIqdHlpLgQ/learning-public-crop_675_1200/B4EZjohj_CGYAY-/0/1756247769738?e=2147483647&amp;v=beta&amp;t=SwNwvjs-GlmU-hOVIUVJA3cB6sHvgoD0SaeCgHZWJik)

# Learning Linux Command Line

> Suggested prerequisites Familiarity with computer basics: files, directories, and running programs An understanding of macOS or Windows Ubuntu Desktop running in a VirtualBox virtual machine Projects Use the command line to find specific information. Evaluate presented commands and repair broken syntax. Create and share a file. Extract information from a text file. Knowledge of the Linux command l

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023) | Beginner | 63K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (3 videos)
- **[[#1. Setting Up Your Environment]]** (3 videos)
- **[[#2. Command-Line Basics]]** (7 videos)
- **[[#3. Files, Directories, and Permissions]]** (15 videos)
- **[[#4. Common Command-Line Tasks and Tools]]** (14 videos)
- **[[#5. A Peek at Some More Advanced Topics]]** (3 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Learning Linux command line
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/learning-linux-command-line?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/learning-linux-command-line?u=76281980&t=0)** - [Instructor] Working with a text-based command line environment without the graphical user interface through windows and buttons, we're all familiar with can be intimidating at first.
>
> **[0:09](https://www.linkedin.com/learning/learning-linux-command-line-2023/learning-linux-command-line?u=76281980&t=9)** But once you start to understand how the command line environment works, you'll see how powerful and efficient it can be.
>
> **[0:15](https://www.linkedin.com/learning/learning-linux-command-line-2023/learning-linux-command-line?u=76281980&t=15)** I'm Scott Simpson.
>
> **[0:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/learning-linux-command-line?u=76281980&t=16)** And in this LinkedIn Learning course, I'll introduce you to the basics of working with the Linux command line, using the very common bash shell.
>
> **[0:24](https://www.linkedin.com/learning/learning-linux-command-line-2023/learning-linux-command-line?u=76281980&t=24)** I'll explain what the command line is, and how it's major parts of work.
>
> **[0:28](https://www.linkedin.com/learning/learning-linux-command-line-2023/learning-linux-command-line?u=76281980&t=28)** We'll take a look at working with files, and directories, and I'll explain how Linux protects files from unauthorized access with permissions.
>
> **[0:36](https://www.linkedin.com/learning/learning-linux-command-line-2023/learning-linux-command-line?u=76281980&t=36)** Then I'll show you some common commands, and we'll see how to connect commands together with pipes.
>
> **[0:41](https://www.linkedin.com/learning/learning-linux-command-line-2023/learning-linux-command-line?u=76281980&t=41)** After that, I'll show you some of the more complex command line tasks you'll need to be familiar with in the command line environment.
>
> **[0:48](https://www.linkedin.com/learning/learning-linux-command-line-2023/learning-linux-command-line?u=76281980&t=48)** This course will give you a foundation of knowledge, working with a widely used bash shell.
>
> **[0:52](https://www.linkedin.com/learning/learning-linux-command-line-2023/learning-linux-command-line?u=76281980&t=52)** In case you choose to extend your learning into user management, network configuration, programming and development or system administration.
>
> **[1:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/learning-linux-command-line?u=76281980&t=60)** Throughout the course, I'll recommend other courses here on LinkedIn Learning, where you can deepen your knowledge of certain tools or practices.
>
> **[1:07](https://www.linkedin.com/learning/learning-linux-command-line-2023/learning-linux-command-line?u=76281980&t=67)** Let's get started.

> [!info]- Semantic Content
>
> **Tools:** command line (6), bash (2)
> **Code Keywords:** interface (1), let (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-you-should-know-19098514?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-you-should-know-19098514?u=76281980&t=0)** - [Instructor] In this course, I expect that you're familiar with the basics of using a computer.
>
> **[0:04](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-you-should-know-19098514?u=76281980&t=4)** That's to say, I expect that you're comfortable with the idea of files and directories, with running software and so on.
>
> **[0:11](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-you-should-know-19098514?u=76281980&t=11)** If you have an understanding of Mac OS or Windows, you'll be able to see the parallels between working at the command line and using the programs you're familiar with.
>
> **[0:19](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-you-should-know-19098514?u=76281980&t=19)** Getting set up with an environment where you have a Linux command line window to use can take a little bit of work.
>
> **[0:24](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-you-should-know-19098514?u=76281980&t=24)** In the course, I'm going to be using a virtual machine running Ubuntu Desktop.
>
> **[0:28](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-you-should-know-19098514?u=76281980&t=28)** I recommend you do this as well.
>
> **[0:30](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-you-should-know-19098514?u=76281980&t=30)** In the next chapter, we'll cover setting that up in detail, but you can also set yourself up to follow along with me in Windows, on the Mac, on a Linux workstation, or using a Linux machine running in the cloud.
>
> **[0:42](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-you-should-know-19098514?u=76281980&t=42)** Setting up those environments though is something you'll need to do on your own.
>
> **[0:45](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-you-should-know-19098514?u=76281980&t=45)** I'll talk more about these in a little bit as well.
>
> **[0:48](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-you-should-know-19098514?u=76281980&t=48)** You can also use the GitHub Codespaces online environment to follow along with the course.
>
> **[0:53](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-you-should-know-19098514?u=76281980&t=53)** Which kind of environment you use will be up to you and I encourage you to watch the videos for all the options to see what you're most comfortable with and what will work for you in the computing environment you have.
>
> **[1:03](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-you-should-know-19098514?u=76281980&t=63)** You don't need to use all three, just pick one that suits you best.
>
> **[1:08](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-you-should-know-19098514?u=76281980&t=68)** The exercise files for this course which are some text files and some other files we'll use to practice throughout the course are hosted on GitHub so you can download a copy of them when you have your environment set up.
>
> **[1:18](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-you-should-know-19098514?u=76281980&t=78)** Later on, we'll be downloading the files through the browser to get started.
>
> **[1:22](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-you-should-know-19098514?u=76281980&t=82)** But if you're familiar with using Git, you can use that to download the files if you prefer.
>
> **[1:27](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-you-should-know-19098514?u=76281980&t=87)** On the GitHub page for this course, you can also find a file that lists all of the commands that I'll use in each video.
>
> **[1:35](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-you-should-know-19098514?u=76281980&t=95)** As we'll see in just a little bit, spacing and spelling are important when we're working in the command line.
>
> **[1:40](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-you-should-know-19098514?u=76281980&t=100)** So the document is there in case you need to check your typing.

> [!info]- Semantic Content
>
> **Tools:** command line (3), github (3)
> **Prerequisites:** set up (2), you'll need (1)
> **CLI Commands:** git (1), find (1)
> **Exercise Files:** exercise files (1), download the (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### A very quick intro to Linux
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/a-very-quick-intro-to-linux?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/a-very-quick-intro-to-linux?u=76281980&t=0)** - [Man] Linux is a general purpose computer operating system originally released in 1991 by Linus Torvalds.
>
> **[0:06](https://www.linkedin.com/learning/learning-linux-command-line-2023/a-very-quick-intro-to-linux?u=76281980&t=6)** Linux is defined by its kernel, which is the core component of the operating system.
>
> **[0:12](https://www.linkedin.com/learning/learning-linux-command-line-2023/a-very-quick-intro-to-linux?u=76281980&t=12)** The kernel is software which allows other software to communicate with a computer's hardware.
>
> **[0:17](https://www.linkedin.com/learning/learning-linux-command-line-2023/a-very-quick-intro-to-linux?u=76281980&t=17)** Linux was inspired by MINIX, which in turn was inspired by Unix.
>
> **[0:21](https://www.linkedin.com/learning/learning-linux-command-line-2023/a-very-quick-intro-to-linux?u=76281980&t=21)** And Linux is based on a philosophy that software and operating systems should be free.
>
> **[0:26](https://www.linkedin.com/learning/learning-linux-command-line-2023/a-very-quick-intro-to-linux?u=76281980&t=26)** Both free of cost and freely changeable.
>
> **[0:29](https://www.linkedin.com/learning/learning-linux-command-line-2023/a-very-quick-intro-to-linux?u=76281980&t=29)** The software license, which allows this in the case of the Linux kernel, is called the GNU General Public License.
>
> **[0:35](https://www.linkedin.com/learning/learning-linux-command-line-2023/a-very-quick-intro-to-linux?u=76281980&t=35)** This emphasis on freedom, both of cost and modification, has helped Linux to become popular for many different applications and purposes.
>
> **[0:43](https://www.linkedin.com/learning/learning-linux-command-line-2023/a-very-quick-intro-to-linux?u=76281980&t=43)** And Linux has popped up everywhere from the majority of the servers that run web services we all use, to many super computers, to many Wi-Fi routers, and other network hardware, to some car entertainment and navigation systems, some mobile phones and tablets, and all sorts of other devices.
>
> **[1:02](https://www.linkedin.com/learning/learning-linux-command-line-2023/a-very-quick-intro-to-linux?u=76281980&t=62)** While the Linux kernel is at the heart of all installations of Linux, the software that surrounds the kernel that provides capabilities like software package management, control of services, the location of configuration files, and so on, differs between them.
>
> **[1:15](https://www.linkedin.com/learning/learning-linux-command-line-2023/a-very-quick-intro-to-linux?u=76281980&t=75)** Many of the standard tools that we use on the Linux system come from the GNU project, and aren't actually part of Linux itself.
>
> **[1:22](https://www.linkedin.com/learning/learning-linux-command-line-2023/a-very-quick-intro-to-linux?u=76281980&t=82)** And so taken together, the combination of the kernel and these common tools is often referred to as GNU/Linux.
>
> **[1:29](https://www.linkedin.com/learning/learning-linux-command-line-2023/a-very-quick-intro-to-linux?u=76281980&t=89)** Different groups of software and configuration choices that are maintained by individuals or groups of people are called distributions, or distros.
>
> **[1:38](https://www.linkedin.com/learning/learning-linux-command-line-2023/a-very-quick-intro-to-linux?u=76281980&t=98)** Most major distributions of Linux fall into a few categories based on the original distribution from which they were derived.
>
> **[1:45](https://www.linkedin.com/learning/learning-linux-command-line-2023/a-very-quick-intro-to-linux?u=76281980&t=105)** There's Arch, Debian, Red Hat, and Slackware, and many other distributions that we might use, or we might use distributions based on, or derived from, these particular distributions.
>
> **[1:55](https://www.linkedin.com/learning/learning-linux-command-line-2023/a-very-quick-intro-to-linux?u=76281980&t=115)** Depending on your industry, your company, your institution, or any number of other factors, you're likely to end up using the command line on a system that inherits from one of these distributions.
>
> **[2:06](https://www.linkedin.com/learning/learning-linux-command-line-2023/a-very-quick-intro-to-linux?u=76281980&t=126)** In this course, we'll focus on Ubuntu Desktop, which is based on Debian Linux.
>
> **[2:11](https://www.linkedin.com/learning/learning-linux-command-line-2023/a-very-quick-intro-to-linux?u=76281980&t=131)** Ubuntu Desktop is user-friendly and it includes many tools and programs that make it a good choice for learning about Linux.
>
> **[2:18](https://www.linkedin.com/learning/learning-linux-command-line-2023/a-very-quick-intro-to-linux?u=76281980&t=138)** In your work, you may use it Ubuntu, or you may find yourself using another distro.
>
> **[2:22](https://www.linkedin.com/learning/learning-linux-command-line-2023/a-very-quick-intro-to-linux?u=76281980&t=142)** In practice, many companies and organizations use a distribution of Linux derived from either Debain or Red Hat.
>
> **[2:30](https://www.linkedin.com/learning/learning-linux-command-line-2023/a-very-quick-intro-to-linux?u=76281980&t=150)** Linuxmint, Ubuntu, Elementary OS, and Kali Linux are all derived from Debian.
>
> **[2:36](https://www.linkedin.com/learning/learning-linux-command-line-2023/a-very-quick-intro-to-linux?u=76281980&t=156)** CentOS, Fedora, and Red Hat Enterprise Linux are all part of the Red Hat ecosystem.
>
> **[2:41](https://www.linkedin.com/learning/learning-linux-command-line-2023/a-very-quick-intro-to-linux?u=76281980&t=161)** Though, as I mentioned, there are many other distributions in common use too.
>
> **[2:46](https://www.linkedin.com/learning/learning-linux-command-line-2023/a-very-quick-intro-to-linux?u=76281980&t=166)** The history of all the different distributions of Linux is beyond the scope of this course, but you'll need to be aware of what system you're using and that you may need to adapt what you're doing to account for differences in distributions.
>
> **[2:58](https://www.linkedin.com/learning/learning-linux-command-line-2023/a-very-quick-intro-to-linux?u=76281980&t=178)** Different distributions make different choices about some of the tools and philosophies they adopt.
>
> **[3:03](https://www.linkedin.com/learning/learning-linux-command-line-2023/a-very-quick-intro-to-linux?u=76281980&t=183)** But as you begin working with Linux through the command line, most of what you'll do is the same across major distributions.
>
> **[3:10](https://www.linkedin.com/learning/learning-linux-command-line-2023/a-very-quick-intro-to-linux?u=76281980&t=190)** That's because the text interface, often called the command line, is a program called a shell, and we'll be using the Bash shell, which is available almost everywhere.
>
> **[3:19](https://www.linkedin.com/learning/learning-linux-command-line-2023/a-very-quick-intro-to-linux?u=76281980&t=199)** So what we explore in this course will apply on any Linux distro you might find yourself using in the future.
>
> **[3:25](https://www.linkedin.com/learning/learning-linux-command-line-2023/a-very-quick-intro-to-linux?u=76281980&t=205)** As you extend your learning and explore software packages and system administration, there will be differences, but for now don't worry too much about them.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (2)
> **Code Keywords:** public (1), super (1), from, (1), interface (1)
> **Env Vars:** gnu (3), minix (1)
> **Tools:** command line (3), bash (1)
> **Definitions:** is a  (2), is called (1)
> **Warnings:** be aware (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [man] (1)


### 1. Setting Up Your Environment

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Creating a Linux virtual machine
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=0)** - [Instructor] Throughout this course, I'll be using the free VirtualBox virtualization software to make a virtual machine that runs Ubuntu Desktop.
>
> **[0:08](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=8)** I enjoy using VirtualBox because it runs on all major platforms.
>
> **[0:12](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=12)** So if you're using Windows or macOS or Linux, you can use this software.
>
> **[0:17](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=17)** Working in a virtual machine allows us to keep our learning work separate from our real computer.
>
> **[0:22](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=22)** So we're free to make changes and mistakes that won't affect anything else, though, it takes a bit of work to get up and running.
>
> **[0:29](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=29)** I think it's worth it though.
>
> **[0:31](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=31)** You can decide for yourself.
>
> **[0:33](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=33)** Within my virtual machine, I'll be using the Ubuntu Desktop Linux distribution because I find it to be accessible for beginners.
>
> **[0:40](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=40)** Again, if you have other preferences, by all means, use the distribution of your choice, but you'll be on your own for installation and troubleshooting.
>
> **[0:49](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=49)** We can download the files we need from [virtualbox.org](https://virtualbox.org) and [ubuntu.com](https://ubuntu.com).
>
> **[0:55](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=55)** If you choose to use different software or a different distro, you'll need to download the files your software choices require.
>
> **[1:02](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=62)** Let's take a look at the process of setting up a virtual machine.
>
> **[1:06](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=66)** Depending on the speed of your hardware, this could take up to 20 minutes or so.
>
> **[1:11](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=71)** Here's the VirtualBox website, and I can click on the big blue button to download the current version.
>
> **[1:17](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=77)** There's a few different options for the platform.
>
> **[1:19](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=79)** So if you're using Windows, click the Windows one.
>
> **[1:22](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=82)** If you're using a Mac, click the option for that system.
>
> **[1:26](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=86)** And if you're installing VirtualBox on Linux, click the Linux distributions one.
>
> **[1:31](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=91)** Take a minute to download and install the software on your computer.
>
> **[1:34](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=94)** Then head over to [ubuntu.com](https://ubuntu.com), where we can download the Ubuntu installer or ISO image.
>
> **[1:40](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=100)** This is a pretty big file, so I've already downloaded it on my computer, but you'll want to take a few minutes to download it.
>
> **[1:46](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=106)** You'll need the file to be completely downloaded before you continue.
>
> **[1:51](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=111)** I can find the download link under the Download menu, and then I'll find the Ubuntu Desktop section and choose the LTS option.
>
> **[1:59](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=119)** In my case, the file's version is 20.04, the latest version that has long-term support at the time I'm recording this, but there are new releases that come out now and then.
>
> **[2:09](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=129)** So if yours has a higher number than mine, that's just fine.
>
> **[2:13](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=133)** Once I've installed VirtualBox, I'll open it up, and I see the Manager window.
>
> **[2:17](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=137)** If you'd like to find out more about VirtualBox, take a look at my course Learning VirtualBox, which focuses on how the software works and how to use it.
>
> **[2:26](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=146)** Let's build a virtual machine.
>
> **[2:28](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=148)** I'll click on New, and I'll give my machine a name.
>
> **[2:32](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=152)** In this case, I'll call it My Ubuntu Desktop.
>
> **[2:36](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=156)** I'll make sure the type is set to Linux and the version is set to Ubuntu 64-bit.
>
> **[2:42](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=162)** Then I'll click Next.
>
> **[2:45](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=165)** VirtualBox recommends that I give this machine 1024 megabytes of memory.
>
> **[2:49](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=169)** Ubuntu will run with that, but it's not a great experience.
>
> **[2:52](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=172)** So I'll give it 4,096 megabytes, or 4 gigabytes, and I'll click Next.
>
> **[2:59](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=179)** Then I'll choose to create a virtual hard disk.
>
> **[3:03](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=183)** I'll choose VDI and make sure that Dynamically allocated is selected.
>
> **[3:10](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=190)** VirtualBox recommends 10 gigabytes, but I'll set this to 100 gigabytes instead.
>
> **[3:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=196)** This space isn't being taken up on my computer yet, so it doesn't really matter.
>
> **[3:21](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=201)** But I'd like to give myself a little bit more space than VirtualBox suggests here.
>
> **[3:25](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=205)** 10 gigabytes would be used up really quickly, once we start actually using the virtual machine.
>
> **[3:30](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=210)** And then I'll click Create.
>
> **[3:33](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=213)** I'll click on my virtual machine here in the left, then I'll choose Settings.
>
> **[3:39](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=219)** Under the Storage section, I'll find the empty slot under the IDE controller.
>
> **[3:44](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=224)** Then I'll click on the CD icon over here on the top right, and I'll click Choose a disk file.
>
> **[3:51](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=231)** I'll navigate to my Downloads directory and choose the Ubuntu installer that I downloaded previously.
>
> **[3:58](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=238)** Then I'll click Open, I'll click OK, and I'll click the green start arrow to start my virtual machine.
>
> **[4:09](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=249)** And in order to make the display a little bit larger on my screen, I'll go to View, choose Virtual Screen 1, and I'll choose a scaling factor.
>
> **[4:19](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=259)** Then I'll double-click to maximize the window.
>
> **[4:22](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=262)** Once the installer loads, I'll click the button Install Ubuntu.
>
> **[4:27](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=267)** I'll make sure to change the language that I want to use, and then I'll click Continue down here in the bottom right.
>
> **[4:35](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=275)** I'll choose to start with a normal installation and to download updates while I'm installing Ubuntu.
>
> **[4:40](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=280)** This will save us some time later.
>
> **[4:42](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=282)** Then I'll click Continue.
>
> **[4:47](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=287)** On the next screen, Erase disk and install Ubuntu is selected, and that's the option that I want.
>
> **[4:52](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=292)** This will erase the virtual disk that we just created.
>
> **[4:56](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=296)** To continue, I'll click Install Now down here in the bottom right.
>
> **[5:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=300)** I'll confirm the changes to my disk by clicking Continue.
>
> **[5:05](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=305)** I'll select my location, and I'll click Continue.
>
> **[5:09](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=309)** Then I'll create an account for myself.
>
> **[5:12](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=312)** I'll give my system a name, and then I'll set a password for myself.
>
> **[5:22](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=322)** When I'm done, I'll click Continue.
>
> **[5:27](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=327)** This is the user I'll use to log into the system.
>
> **[5:30](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=330)** Now we'll wait for the installation to finish.
>
> **[5:33](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=333)** We'll speed up the video here while the installer progresses.
>
> **[5:35](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=335)** You might choose to take a quick break while you wait.
>
> **[5:41](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=341)** Now Ubuntu Desktop is installed.
>
> **[5:44](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=344)** I'll click the Restart Now button, and the virtual machine will restart.
>
> **[5:49](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=349)** When I'm prompted to remove the installation medium, I can just press Enter because VirtualBox has taken care of this step for me.
>
> **[5:59](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=359)** When the system starts, I'm presented with a login screen.
>
> **[6:02](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=362)** So I'll click my user account name and then type the password that I set.
>
> **[6:08](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=368)** The first time I log in, I'll be presented with a series of prompts.
>
> **[6:12](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=372)** I'll just skip these for now, and then I'll click Done.
>
> **[6:18](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=378)** Once the virtual machine's installed, and we've logged in, there's a few more steps we'll need to take.
>
> **[6:23](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=383)** The first is to make sure that our software is all up to date.
>
> **[6:26](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=386)** In my case, the software updater has popped up on the screen.
>
> **[6:30](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=390)** If it doesn't pop up for you, you can go into Activities and type software update and then find the gray icon with the A on it.
>
> **[6:40](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=400)** When that opens, I'll click Install Now.
>
> **[6:43](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=403)** This'll take a moment.
>
> **[6:46](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=406)** Once that process finishes, I'll click OK, and then move to the top right of the screen and click the downward facing arrow.
>
> **[6:53](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=413)** Then I'll find Power Off/Log Out and click it.
>
> **[6:57](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=417)** Under that, I'll click Power Off, and then I'll choose Restart.
>
> **[7:07](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=427)** When the system starts again, I'll click on my username and then type in my password to log back in.
>
> **[7:15](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=435)** At this point, we could continue using the virtual machine just as it is, or we can take some more steps to make it look a little bit better.
>
> **[7:22](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=442)** We'll do that by installing VirtualBox's guest additions.
>
> **[7:26](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=446)** This does involve using the command line.
>
> **[7:28](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=448)** So at this point, just follow along with me.
>
> **[7:30](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=450)** I'll explain all the commands that I'll use later in the course.
>
> **[7:34](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=454)** To get started, I'll move up to Activities in the top left corner, click on the search bar, and type terminal.
>
> **[7:41](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=461)** Then I'll click on the icon that appears below it.
>
> **[7:44](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=464)** In order to make the text a little bit easier to see, I'll press Control + Shift + Plus two times, and then I'll write sudo apt install gcc make perl, and I'll press Enter.
>
> **[8:06](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=486)** I'm being asked for my account password, so I'll type it here.
>
> **[8:09](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=489)** When I type, no characters appear, but the characters are going to the computer.
>
> **[8:14](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=494)** Once I've typed my password, I'll press Enter.
>
> **[8:17](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=497)** And then, when I'm asked if I want to continue, I'll press Y and then press Enter.
>
> **[8:23](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=503)** Again, this will take a few moments.
>
> **[8:30](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=510)** Once that process is complete, I'll close the window by clicking the little orange circle up in the top right of the screen.
>
> **[8:38](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=518)** Then, I'll move to the VirtualBox interface and choose Devices and then click Insert Guest Additions CD image.
>
> **[8:46](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=526)** When I'm prompted, I'll click Run.
>
> **[8:50](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=530)** And then I'll type in my password.
>
> **[8:57](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=537)** Once this process is completed, I'll be prompted to press Return to close the window.
>
> **[9:01](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=541)** So I'll do that, and I need to restart the system again.
>
> **[9:04](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=544)** Again, I'll go to the top right, click the downward facing arrow, click Power Off/Log Out, and then choose Power Off.
>
> **[9:12](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=552)** And again, I'll click Restart.
>
> **[9:20](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=560)** When the system restarts, I'll click my account name and then type my password.
>
> **[9:26](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=566)** We can see from the change in the screen that something's different.
>
> **[9:30](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=570)** That's a good sign.
>
> **[9:31](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=571)** Now, if I navigate to the View menu, I can see that there's a checkbox next to Auto-resize Guest Display.
>
> **[9:37](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=577)** This is what we want.
>
> **[9:39](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=579)** Now that we're done using the guest additions CD image, I'll right-click it here in the dock on the left and choose Eject.
>
> **[9:46](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=586)** Now, I'll take a few steps to make my screen a little bit easier to see.
>
> **[9:50](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=590)** You could follow along if you'd like, but you don't have to.
>
> **[9:53](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=593)** In order to make the changes that I want to make, I'll need to shut down this machine a third time.
>
> **[10:03](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=603)** Then I'll go into the virtual machine settings, go into the Display menu, and increase the video memory.
>
> **[10:12](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=612)** I'll set mine to 128 megabytes.
>
> **[10:15](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=615)** I'll click OK, and then I'll click Start again.
>
> **[10:24](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=624)** When prompted, I'll log in.
>
> **[10:28](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=628)** And then I'll go to the View menu at the top of the screen.
>
> **[10:32](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=632)** I'll choose Virtual Screen 1 and set my screen back to Scale to 100%.
>
> **[10:40](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=640)** Then I'll go to View again and choose Full screen Mode.
>
> **[10:44](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=644)** I'll right-click on the desktop, choose Display Settings, and change my scale to 200%.
>
> **[10:51](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=651)** Then I'll click Apply.
>
> **[10:55](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=655)** I'll click Keep Changes, and then I'll close the Settings window.
>
> **[10:59](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=659)** Then, to download the exercise files for the course, I'll open up the Firefox web browser here from the dock.
>
> **[11:05](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=665)** It's the first item in the list on the left.
>
> **[11:11](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=671)** I'll visit the repository on GitHub, and I'll find the green button.
>
> **[11:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=676)** I'll click it, and then I'll find the option to download ZIP.
>
> **[11:20](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=680)** This will download the files from GitHub.
>
> **[11:21](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=681)** I'll choose Save File and then click OK.
>
> **[11:25](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=685)** Once I'm done with that, I'll close the web browser.
>
> **[11:30](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=690)** From the dock on the left, I'll find the Files icon, and I'll click it.
>
> **[11:34](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=694)** Here, I'll find my Downloads directory, and within that, I'll see the ZIP file.
>
> **[11:39](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=699)** I'll right-click it, and I'll choose Extract Here.
>
> **[11:44](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=704)** I'll click on the directory that appears when I extract the file, and then I'll look for the Exercise Files directory.
>
> **[11:50](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=710)** This contains the files we'll use in the course, so I'll move it to my Documents folder.
>
> **[11:54](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=714)** Then I'll click on Documents, then Exercise Files, and here's the files.
>
> **[12:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/creating-a-linux-virtual-machine?u=76281980&t=720)** This is where we'll find them throughout the rest of the course.

> [!info]- Semantic Content
>
> **CLI Commands:** make (13), find (12), cd (3), sudo (1), apt (1)
> **Code Keywords:** continue (9), case, (3), let (2), else, (1), require (1)
> **UI Navigation:** click on (9), go to (4), right-click (3), navigate to (2), double-click (1)
> **Exercise Files:** download the (6), exercise files (3), zip file (1)
> **Prerequisites:** install (6), you'll need (2)
> **Env Vars:** zip (2), iso (1), lts (1), vdi (1), ide (1)
> **Tools:** github (2), command line (1), terminal (1), firefox (1)
> **URLs:** [ubuntu.com](https://ubuntu.com) (2), [virtualbox.org](https://virtualbox.org) (1)

#### Following along on other platforms
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/following-along-on-other-platforms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/following-along-on-other-platforms?u=76281980&t=0)** - [Instructor] If you're not able to make a virtual machine in VirtualBox, or you want to follow along using some other option, there are some choices available.
>
> **[0:08](https://www.linkedin.com/learning/learning-linux-command-line-2023/following-along-on-other-platforms?u=76281980&t=8)** On Windows 10 and later you could use Windows Subsystem for Linux, a feature of Windows that runs an instance of a Linux environment right within Windows.
>
> **[0:17](https://www.linkedin.com/learning/learning-linux-command-line-2023/following-along-on-other-platforms?u=76281980&t=17)** The experience isn't quite the same, but it's enough to learn about Bash and about the standard toolchain that you'll find on most Linux systems.
>
> **[0:24](https://www.linkedin.com/learning/learning-linux-command-line-2023/following-along-on-other-platforms?u=76281980&t=24)** Setting that up takes some specific work in Windows.
>
> **[0:26](https://www.linkedin.com/learning/learning-linux-command-line-2023/following-along-on-other-platforms?u=76281980&t=26)** And that's not the focus of this course, but I do have another course called Learning Windows Subsystem for Linux that covers installation and configuration of WSL using Ubuntu.
>
> **[0:36](https://www.linkedin.com/learning/learning-linux-command-line-2023/following-along-on-other-platforms?u=76281980&t=36)** So if that's an option you're interested in, go check that out.
>
> **[0:40](https://www.linkedin.com/learning/learning-linux-command-line-2023/following-along-on-other-platforms?u=76281980&t=40)** If you're following along on a Mac, I would recommend that you create a virtual machine either with VirtualBox or with another virtualization option like VMware Workstation or Parallels.
>
> **[0:50](https://www.linkedin.com/learning/learning-linux-command-line-2023/following-along-on-other-platforms?u=76281980&t=50)** The Mac does come with Bash, but it's a very old version and it's not guaranteed to be available in the future.
>
> **[0:56](https://www.linkedin.com/learning/learning-linux-command-line-2023/following-along-on-other-platforms?u=76281980&t=56)** The shell that Mac OS uses instead of Bash is called Z Shell, which is similar to Bash, but it's not the same.
>
> **[1:03](https://www.linkedin.com/learning/learning-linux-command-line-2023/following-along-on-other-platforms?u=76281980&t=63)** And the Mac is based on BSD Unix, not on Linux.
>
> **[1:05](https://www.linkedin.com/learning/learning-linux-command-line-2023/following-along-on-other-platforms?u=76281980&t=65)** So in reality, the Mac's terminal is not a Linux command line.
>
> **[1:09](https://www.linkedin.com/learning/learning-linux-command-line-2023/following-along-on-other-platforms?u=76281980&t=69)** A lot of what I cover in the course does work just fine in Z Shell on a Mac, but there are some exceptions.
>
> **[1:15](https://www.linkedin.com/learning/learning-linux-command-line-2023/following-along-on-other-platforms?u=76281980&t=75)** So unless you have no other choices available, I wouldn't recommend trying to follow the course that way.
>
> **[1:20](https://www.linkedin.com/learning/learning-linux-command-line-2023/following-along-on-other-platforms?u=76281980&t=80)** If you're curious about Z Shell though, after taking this course, take a look at my Z Shell course here on LinkedIn Learning.
>
> **[1:27](https://www.linkedin.com/learning/learning-linux-command-line-2023/following-along-on-other-platforms?u=76281980&t=87)** To follow along with this course, you could also use a system that's running Linux already like a laptop or desktop or a miniature computer like a raspberry PI.
>
> **[1:35](https://www.linkedin.com/learning/learning-linux-command-line-2023/following-along-on-other-platforms?u=76281980&t=95)** If your system has a desktop environment, you can find a terminal app in your applications or utilities folder.
>
> **[1:41](https://www.linkedin.com/learning/learning-linux-command-line-2023/following-along-on-other-platforms?u=76281980&t=101)** Where that's located specifically is different on different distributions, but it's usually in a fairly prominent place.
>
> **[1:47](https://www.linkedin.com/learning/learning-linux-command-line-2023/following-along-on-other-platforms?u=76281980&t=107)** It's also possible to follow along with most of this course using a remote Linux host through SSH, but setting that up is beyond the scope of this course.
>
> **[1:55](https://www.linkedin.com/learning/learning-linux-command-line-2023/following-along-on-other-platforms?u=76281980&t=115)** And you won't easily be able to follow along with the parts of the course where I'm using the graphical interface.
>
> **[2:01](https://www.linkedin.com/learning/learning-linux-command-line-2023/following-along-on-other-platforms?u=76281980&t=121)** So I can't recommend that method as a first choice.
>
> **[2:04](https://www.linkedin.com/learning/learning-linux-command-line-2023/following-along-on-other-platforms?u=76281980&t=124)** And in any of these cases, you'll still want to download the exercise files from GitHub, either through the command line or by visiting the repository site and downloading the files directly.

> [!info]- Semantic Content
>
> **Tools:** bash (4), terminal (2), command line (2), github (1)
> **CLI Commands:** find (2), make (1), ssh (1)
> **Env Vars:** wsl (1), bsd (1), ssh (1)
> **Exercise Files:** download the (1), exercise files (1)
> **Code Keywords:** interface (1)
> **Definitions:** is called (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Using GitHub Codespaces with this course
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/using-github-codespaces-with-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/using-github-codespaces-with-this-course?u=76281980&t=0)** - [Instructor] Another option for following along with this course is to use GitHub Codespaces.
>
> **[0:04](https://www.linkedin.com/learning/learning-linux-command-line-2023/using-github-codespaces-with-this-course?u=76281980&t=4)** GitHub Codespaces provides a programming-oriented text editor and integrated development environment we access through a web browser.
>
> **[0:12](https://www.linkedin.com/learning/learning-linux-command-line-2023/using-github-codespaces-with-this-course?u=76281980&t=12)** While Codespaces is usually used for software development, it also has a terminal feature you can use to explore the command line.
>
> **[0:19](https://www.linkedin.com/learning/learning-linux-command-line-2023/using-github-codespaces-with-this-course?u=76281980&t=19)** GitHub Codespaces is available to anyone with a GitHub account, free or paid.
>
> **[0:24](https://www.linkedin.com/learning/learning-linux-command-line-2023/using-github-codespaces-with-this-course?u=76281980&t=24)** To use Codespaces, I'll make sure I'm on the course's repository page, and then I'll create a fork of the repository to my own account.
>
> **[0:32](https://www.linkedin.com/learning/learning-linux-command-line-2023/using-github-codespaces-with-this-course?u=76281980&t=32)** I'll complete that process.
>
> **[0:33](https://www.linkedin.com/learning/learning-linux-command-line-2023/using-github-codespaces-with-this-course?u=76281980&t=33)** Great. Now I have my own copy of files to work with.
>
> **[0:36](https://www.linkedin.com/learning/learning-linux-command-line-2023/using-github-codespaces-with-this-course?u=76281980&t=36)** Then from the fork in my own account, I'll click the green Code button here.
>
> **[0:41](https://www.linkedin.com/learning/learning-linux-command-line-2023/using-github-codespaces-with-this-course?u=76281980&t=41)** In the Codespaces section, I'll click Create codespace on main.
>
> **[0:46](https://www.linkedin.com/learning/learning-linux-command-line-2023/using-github-codespaces-with-this-course?u=76281980&t=46)** Then my codespace starts up.
>
> **[0:51](https://www.linkedin.com/learning/learning-linux-command-line-2023/using-github-codespaces-with-this-course?u=76281980&t=51)** It'll take a little while to get itself all settled, and when it's ready, it'll look like this.
>
> **[0:56](https://www.linkedin.com/learning/learning-linux-command-line-2023/using-github-codespaces-with-this-course?u=76281980&t=56)** We can clean things up here in this terminal by typing clear and pressing enter.
>
> **[1:03](https://www.linkedin.com/learning/learning-linux-command-line-2023/using-github-codespaces-with-this-course?u=76281980&t=63)** This is the Codespaces environment.
>
> **[1:05](https://www.linkedin.com/learning/learning-linux-command-line-2023/using-github-codespaces-with-this-course?u=76281980&t=65)** As I mentioned, this is usually used for software development, so there's a large portion of the screen for text documents.
>
> **[1:11](https://www.linkedin.com/learning/learning-linux-command-line-2023/using-github-codespaces-with-this-course?u=76281980&t=71)** Down here is my terminal, and I'll drag that up so it takes up most of the screen.
>
> **[1:20](https://www.linkedin.com/learning/learning-linux-command-line-2023/using-github-codespaces-with-this-course?u=76281980&t=80)** In the course, I'll be using an Ubuntu desktop environment and that looks a little different than this Codespaces environment, but anything I type in the terminal, you can type in this terminal.
>
> **[1:29](https://www.linkedin.com/learning/learning-linux-command-line-2023/using-github-codespaces-with-this-course?u=76281980&t=89)** This is a Linux system in the cloud and what we have in this terminal is the same Bash shell that other versions of Ubuntu provide.
>
> **[1:37](https://www.linkedin.com/learning/learning-linux-command-line-2023/using-github-codespaces-with-this-course?u=76281980&t=97)** There are a few differences between this environment and a local virtual machine, and you'll notice those as we move through the course.
>
> **[1:43](https://www.linkedin.com/learning/learning-linux-command-line-2023/using-github-codespaces-with-this-course?u=76281980&t=103)** Specifically, the user home directory and the use of super user privileges will differ slightly from what you see on my screen.
>
> **[1:50](https://www.linkedin.com/learning/learning-linux-command-line-2023/using-github-codespaces-with-this-course?u=76281980&t=110)** And in this environment, you won't be able to open graphical apps like I do on my system but you can follow along with the command line material and complete the challenges here.
>
> **[2:01](https://www.linkedin.com/learning/learning-linux-command-line-2023/using-github-codespaces-with-this-course?u=76281980&t=121)** Over here on the left side are my exercise files and we'll be able to use those in the terminal when we need to.
>
> **[2:08](https://www.linkedin.com/learning/learning-linux-command-line-2023/using-github-codespaces-with-this-course?u=76281980&t=128)** GitHub Codespaces is a really useful choice if you aren't able to install software like VirtualBox on the computer you're using or if you don't have remote access to a Linux system.
>
> **[2:18](https://www.linkedin.com/learning/learning-linux-command-line-2023/using-github-codespaces-with-this-course?u=76281980&t=138)** Codespaces is available to all GitHub users so if you're curious, check it out.

> [!info]- Semantic Content
>
> **Tools:** terminal (7), github (6), command line (2), bash (1)
> **Code Keywords:** this. (1), super (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 2. Command-Line Basics

> [[#Table of Contents|↑ Back to Table of Contents]]

#### What is the command line?
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-is-the-command-line?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-is-the-command-line?u=76281980&t=0)** - [Narrator] Many of us are familiar with using a computer that has a graphical user interface often called a GUI or gooey.
>
> **[0:08](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-is-the-command-line?u=76281980&t=8)** We're accustomed to seeing visual elements like scroll areas, images, buttons, and dropdown menus.
>
> **[0:15](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-is-the-command-line?u=76281980&t=15)** We can drag windows around, click links and view charts and graphs.
>
> **[0:19](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-is-the-command-line?u=76281980&t=19)** In a lot of cases, that's exactly what we want for photo editing, document layout, browsing the web, graphic design, watching movies and playing games.
>
> **[0:29](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-is-the-command-line?u=76281980&t=29)** Many tools that we use in software development, system administration and data analysis don't use graphical interfaces to operate.
>
> **[0:36](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-is-the-command-line?u=76281980&t=36)** Sometimes the software runs on computers and data centers, but it can also run on home servers, on our own computers or on specialized hardware like a network router or other smart device.
>
> **[0:47](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-is-the-command-line?u=76281980&t=47)** But we still need a way of interacting with these programs to send them information, to control their operation and to retrieve the results of what they do.
>
> **[0:56](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-is-the-command-line?u=76281980&t=56)** One way we do this is through a command line interface or CLI. The command line is a common name for a text-based interface, where we type commands and where we can see the output of those commands written to the screen.
>
> **[1:08](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-is-the-command-line?u=76281980&t=68)** Command line interfaces are common in many tools, but especially on Linux systems controlling the system, or working with programs and a command-line interface is often the primary mode of using the system.
>
> **[1:19](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-is-the-command-line?u=76281980&t=79)** Command-line programs can read from and write to files, or use information from, or send information to other programs or systems.
>
> **[1:28](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-is-the-command-line?u=76281980&t=88)** While the idea of typing a command into a computer can seem like something outdated or historical or something only dangerous hackers do when they're breaking into other people's computers.
>
> **[1:38](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-is-the-command-line?u=76281980&t=98)** Working with the command-line in a terminal or console is something many system administrators, developers, scientists, hobbyists, and others do every day.
>
> **[1:47](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-is-the-command-line?u=76281980&t=107)** The software will use to work with command line software, is called a shell, or command-line interpreter.
>
> **[1:52](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-is-the-command-line?u=76281980&t=112)** And there are many shells out there.
>
> **[1:55](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-is-the-command-line?u=76281980&t=115)** Bash, the Bourne Again Shell, was first released by Brian Fox in 1989.
>
> **[2:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-is-the-command-line?u=76281980&t=120)** It's still one of the most widely used shells on Linux systems.
>
> **[2:03](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-is-the-command-line?u=76281980&t=123)** And it's the one you're likely to need to become familiar with as you begin your Linux command line journey.
>
> **[2:09](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-is-the-command-line?u=76281980&t=129)** Bash extends the capabilities of earlier shells and adds newer features too.
>
> **[2:15](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-is-the-command-line?u=76281980&t=135)** Bash builds on an earlier shell created by Steven Bourne called the Bourne shell.
>
> **[2:19](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-is-the-command-line?u=76281980&t=139)** And that itself built on the idea of the command-line interpreter called the Thompson shell for Unix.
>
> **[2:24](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-is-the-command-line?u=76281980&t=144)** Over time, these shells evolved, and they continue to evolve and develop today.
>
> **[2:29](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-is-the-command-line?u=76281980&t=149)** Bash is the shell that comes enabled by default with most of the popular Linux distributions.
>
> **[2:35](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-is-the-command-line?u=76281980&t=155)** It's available in Windows, with a Windows Subsystem for Linux. And it's also available on macOS, though it's not the default shell there.
>
> **[2:43](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-is-the-command-line?u=76281980&t=163)** I'll be using Bash throughout the course.
>
> **[2:45](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-is-the-command-line?u=76281980&t=165)** Though I encourage you to explore some of the other shells out there, once you have a foundation working in Bash, if you're curious.
>
> **[2:51](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-is-the-command-line?u=76281980&t=171)** In most cases, command-line users will use a shell like Bash, through a terminal application, either in full screen mode or as a window in their graphical environment.
>
> **[3:01](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-is-the-command-line?u=76281980&t=181)** It's common to use both graphical and text-based modes of interaction at the same time.
>
> **[3:06](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-is-the-command-line?u=76281980&t=186)** And it's common to have more than one terminal window open at the same time to perform different tasks.
>
> **[3:11](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-is-the-command-line?u=76281980&t=191)** And some programs, like software development tools, include a built in terminal as well.
>
> **[3:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-is-the-command-line?u=76281980&t=196)** The terms can seem a little confusing at first.
>
> **[3:19](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-is-the-command-line?u=76281980&t=199)** The command-line, is the general name for a text environment where we issue commands by typing. The shell is the software that accepts and runs those commands.
>
> **[3:29](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-is-the-command-line?u=76281980&t=209)** And the terminal emulator is the software the shell runs inside of.
>
> **[3:33](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-is-the-command-line?u=76281980&t=213)** Because these pieces are so closely linked, many people call the shell, the terminal and vice versa.
>
> **[3:38](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-is-the-command-line?u=76281980&t=218)** And really there isn't any harm in doing so.
>
> **[3:41](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-is-the-command-line?u=76281980&t=221)** Generally people will know what you mean.
>
> **[3:43](https://www.linkedin.com/learning/learning-linux-command-line-2023/what-is-the-command-line?u=76281980&t=223)** But it's important to know that each of these components are different, because their roles will become more distinct, once your usage becomes more advanced.

> [!info]- Semantic Content
>
> **Tools:** bash (7), terminal (6), command line (5)
> **Code Keywords:** interface (4), from, (1), extends (1), continue (1)
> **Env Vars:** gui (1), cli (1)
> **Definitions:** is a  (1), is called (1)
> **Code Identifiers:** macos (1)
> **UI Navigation:** dropdown (1)
> **Speakers:** - [narrator] (1)

#### Understand how commands are structured
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=0)** - [Narrator] There are a few terms and ideas we need to be familiar with to really be productive using the command line.
>
> **[0:06](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=6)** Before we jump into using commands, let's take a look at how a command line statement is structured.
>
> **[0:11](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=11)** The general pattern that we'll see is command, options, and arguments.
>
> **[0:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=16)** Here's a couple of common commands you'll see with options and arguments that are used with them.
>
> **[0:21](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=21)** Don't worry about the specifics of the commands right now.
>
> **[0:23](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=23)** We'll explore them in more detail later on.
>
> **[0:26](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=26)** I just want to show you the structure of what we'll be working with before we get into what these actually do.
>
> **[0:32](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=32)** Depending on what we're doing, we might just have a command, or a command and one or more options.
>
> **[0:38](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=38)** Or we might have just a command with one or more arguments.
>
> **[0:42](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=42)** But when we're issuing a command at the command line, there will always be a command.
>
> **[0:47](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=47)** The command is the program you're running, or the action you're taking.
>
> **[0:51](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=51)** Without a command, the shell won't know what to do with options or arguments.
>
> **[0:55](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=55)** Options and arguments apply to commands.
>
> **[0:58](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=58)** A lot of commands we'll see are very short strings of letters.
>
> **[1:02](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=62)** Sometimes just a few letters, though sometimes they're short words or shortened words.
>
> **[1:07](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=67)** This is a tradition that goes back a long time.
>
> **[1:10](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=70)** The names of many commands are just long enough to represent what they mean, rather than using a whole word or phrase.
>
> **[1:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=76)** While it can make commands a little harder to remember and discover, as we become more familiar with the command line, we'll see how it's a lot more convenient to type a short command like ls every time we want to list the files in a directory instead of typing out list or list files or something longer like that.
>
> **[1:33](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=93)** Many aspects of the command line are all about efficiency.
>
> **[1:36](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=96)** Sometimes at the cost of understandability, at least when we're getting started.
>
> **[1:40](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=100)** For example, these commands here, ls, du, cat, df, grep, and so on, are all very commonly used.
>
> **[1:49](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=109)** But at first glance, they don't really seem to be anything other than some random letters.
>
> **[1:53](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=113)** The more you practice and learn, the more sense all of these things will make.
>
> **[1:58](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=118)** So a command is a program that takes a particular action.
>
> **[2:01](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=121)** It's what we're asking the system to do.
>
> **[2:04](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=124)** Sometimes a command does something just by itself, but other times we'll want to change how a command works or tell it what data to use.
>
> **[2:11](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=131)** The next part of a command line statement, the options, tell the command how to operate, changing the behavior of the command, or telling it to perform different actions.
>
> **[2:21](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=141)** In many cases, these options start with a dash or minus sign, and are usually represented by one letter or number.
>
> **[2:28](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=148)** Most commands offer more than one option.
>
> **[2:30](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=150)** And when we need to use more than one, we can list them individually.
>
> **[2:34](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=154)** For example, starting with just the ls command, I can add an option -l, which tells the ls command to show me a long listing of the files in the directory rather than a shorter one.
>
> **[2:45](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=165)** That means it shows more details about files, as we'll see shortly.
>
> **[2:49](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=169)** I can add other options too, like -a, which shows files that are normally hidden.
>
> **[2:55](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=175)** We can think of the a as standing for all files, not just normally visible ones.
>
> **[3:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=180)** And I can add -h which tells the command to show me file sizes in human readable units, in bytes rather than in blocks, which is how the file system thinks about file sizes.
>
> **[3:11](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=191)** In many cases, the character for an option has some bearing on what the option does.
>
> **[3:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=196)** Like we've seen here, l for long listing, a for all files, not just normally visible ones, and h for human readable.
>
> **[3:24](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=204)** This custom helps us remember options without resorting to the documentation all the time.
>
> **[3:29](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=209)** Most of the time, instead of listing each option individually, we'll combine them right after one dash with no spaces in between like this.
>
> **[3:38](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=218)** The order of the options usually doesn't matter, so ls -ahl would do the same thing as ls -lah.
>
> **[3:45](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=225)** Some people prefer to put combined options in order alphabetically.
>
> **[3:49](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=229)** And some people use other strategies to determine how they want to write short form options.
>
> **[3:54](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=234)** Some options have a longer syntax, and they start with two dashes.
>
> **[3:58](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=238)** The options that have two dashes can't be combined together.
>
> **[4:02](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=242)** They have to go one right after the next separated by a space.
>
> **[4:05](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=245)** Again, don't worry about what each of these options does.
>
> **[4:08](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=248)** As I mentioned, we'll get into that later.
>
> **[4:11](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=251)** For now, it's important just to see where the pieces go.
>
> **[4:14](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=254)** That'll help us understand what the pieces do as we go along.
>
> **[4:18](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=258)** The last portion of a statement is the argument or arguments.
>
> **[4:21](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=261)** This is where we tell the command what thing to operate on.
>
> **[4:25](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=265)** It's usually a file or path or a set of files or directories separated by spaces.
>
> **[4:30](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=270)** But an argument can also be a string of text or something else.
>
> **[4:33](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=273)** In the first example, we're telling the ls command to show us the contents of the directory usr/bin.
>
> **[4:39](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=279)** And further down, we're telling the sort command to sort a file called users.
>
> **[4:44](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=284)** The last example uses a file called haystack, which is being provided to it as an argument.
>
> **[4:49](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=289)** And we're using the -i option to look for the text needle.
>
> **[4:53](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=293)** I should point out here that strictly speaking the text needle is also an argument, but it's an argument to the -i option, not directly to the grep command.
>
> **[5:02](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=302)** Options can take arguments of their own.
>
> **[5:04](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=304)** But for the purposes of this course, we'll consider arguments to be those that are passed to the command itself, not ones passed to an option.
>
> **[5:12](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=312)** And we'll consider arguments to options as part of the option itself.
>
> **[5:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=316)** All the commands we might use in a Linux command line environment will follow this basic pattern.
>
> **[5:21](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=321)** Every command will have a command.
>
> **[5:22](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=322)** Some may have options, and some may use arguments.
>
> **[5:26](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-how-commands-are-structured?u=76281980&t=326)** Understanding the pattern will help us learn and use unfamiliar commands in the future.

> [!info]- Semantic Content
>
> **CLI Commands:** ls (7), make (2), grep (2), cat (1)
> **Tools:** command line (7)
> **Code Keywords:** let (1), this. (1), else. (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **Documentation:** the documentation (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [narrator] (1)

#### Write commands in a shell at the prompt
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=0)** - [Instructor] Now that we know the general structure of a command, let's see how to send those commands to the system.
>
> **[0:06](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=6)** To do that, we'll open a terminal.
>
> **[0:08](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=8)** To find the terminal, I'll click on "Activities", click in the search bar and type terminal.
>
> **[0:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=16)** And then I'll click on the icon that it suggests.
>
> **[0:19](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=19)** The terminal application runs a shell program, which I mentioned before, the text-based interface, where we can interact with a system.
>
> **[0:27](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=27)** On your system you can usually find the terminal application in a utilities folder or if your system doesn't start up with a graphical interface, you'll find yourself at the shell after logging in, in a console environment, I'll take a moment to make my terminal a little bit more readable on the screen.
>
> **[0:43](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=43)** I'll click the button with three lines, choose preferences, and under profiles, I'll click "Unnamed".
>
> **[0:54](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=54)** I'll make some choices about the colors and about my font, and then I'll close the settings.
>
> **[1:06](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=66)** Then I'll press F11 to make this window full screen.
>
> **[1:10](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=70)** The first thing we see here in the shell is the prompt.
>
> **[1:13](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=73)** The prompt shows a little bit of information, in my case it's my username @ my host name, which is the computer's name and the name of the folder where I'm currently working.
>
> **[1:25](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=85)** Right now that folder shows as a tilde character, which represents my user's home folder.
>
> **[1:30](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=90)** We'll learn more about that a little bit later.
>
> **[1:32](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=92)** On different platforms the prompt is a little bit different still with much of the same information but in a different order.
>
> **[1:39](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=99)** Because it's different on different platforms, you might wonder if you can customize it further and you can, but that's not something we're going to do right now.
>
> **[1:47](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=107)** What we're focusing on here is the right side of this prompt, where our cursor is, that's where we'll type commands to send to the system.
>
> **[1:55](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=115)** So let's run a command, I'll type LS and press enter.
>
> **[2:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=120)** When I do that, the shell interprets my command, it runs the LS program and considers any other information I've given the command and then displays the results.
>
> **[2:09](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=129)** In this case, the result of what I typed is to list the contents of this directory, that's what LS stands for.
>
> **[2:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=136)** And it gives me back the output of that command.
>
> **[2:18](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=138)** In this case, a list of directories in my current working directory, which remember is my user's home folder.
>
> **[2:24](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=144)** Earlier, we saw how to add options to the command.
>
> **[2:27](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=147)** I'll type LS again, and then I'll press space and at the L option with dash L and then I'll press enter.
>
> **[2:36](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=156)** And we can see how adding the L option changes how the LS command works.
>
> **[2:41](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=161)** Dash L means long listing, and that tells the LS program to show files with more detailed than just a list of names.
>
> **[2:49](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=169)** Specifying an option like this only changes how the command works the one-time it's being used.
>
> **[2:54](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=174)** If I write LS again, without the option, it behaves as it did before.
>
> **[2:59](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=179)** If I tried to run a command that doesn't exist or that the system doesn't know about, I'll get an error message from the shell.
>
> **[3:05](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=185)** For example, if I type list instead of LS and press enter, the shell gives me an error, but it doesn't hurt anything.
>
> **[3:14](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=194)** In this case, the shell is trying to be helpful and it's giving me a few things that it thinks I might have meant.
>
> **[3:20](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=200)** These are other programs or packages that we can install.
>
> **[3:23](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=203)** If I really mess something up when I'm typing a command like this, the shell will have no idea what I'm trying to do, and will just return an error.
>
> **[3:33](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=213)** So it's important to note that as they say, spelling counts, when we're working with a command line.
>
> **[3:38](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=218)** Commands need to be spelled exactly right or they won't work.
>
> **[3:43](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=223)** Spacing and other characters that we'll use need to be correct.
>
> **[3:47](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=227)** The shell usually won't help us out if we get a command a little bit wrong or spell something a little differently.
>
> **[3:52](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=232)** The upside of this is that misspellings and mistyping of command names will very rarely cause any kind of problem or damage.
>
> **[3:59](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=239)** The shell will just say, Nope, command not found, try again.
>
> **[4:03](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=243)** The downside though, is that we need to be very careful when we type and we need to carefully check what we've typed if we come across an unexpected error.
>
> **[4:10](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=250)** Misuse or mistaken use of options and arguments can cause real problems.
>
> **[4:15](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=255)** So it's always a good idea to double-check a command before you run it.
>
> **[4:20](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=260)** That aside, you may be left wondering what commands you can use and maybe even where they come from.
>
> **[4:25](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=265)** That's a great question and we'll be exploring that in more detail as we move forward.
>
> **[4:30](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=270)** The commands we use are either programs installed on the system or are keywords of a shell-like bash.
>
> **[4:36](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=276)** Most of what we'll use in this course are programs, the GNU core utilities or coreutils, which are the standard programs that come with most Linux distributions.
>
> **[4:45](https://www.linkedin.com/learning/learning-linux-command-line-2023/write-commands-in-a-shell-at-the-prompt?u=76281980&t=285)** And next we'll see how to find commands and how to learn what they do.

> [!info]- Semantic Content
>
> **CLI Commands:** ls (8), find (4), make (3)
> **Code Keywords:** case, (3), let (2), interface (2), for. (1), this, (1)
> **Tools:** terminal (6), command line (1), bash (1)
> **Env Vars:** f11 (1), gnu (1)
> **UI Navigation:** click on (2)
> **Definitions:** is a  (1), stands for (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)

#### Finding help for commands
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=0)** - [Instructor] If you see an experienced Linux user typing away at the command line, or you see a snippet of Bash commands in a tutorial, a guide, or documentation, it can seem like memorizing the ins and outs of commands and options is the only way to be productive and understand what's going on.
>
> **[0:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=16)** But everybody starts somewhere, and even experienced command line users don't memorize everything.
>
> **[0:22](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=22)** Albert Einstein is credited with saying he didn't carry certain technical information in his mind because it was readily available in books.
>
> **[0:29](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=29)** And as with so much information in programming and the technical world, it's just not practical to try to memorize all of the syntax and options of command line tools.
>
> **[0:39](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=39)** Of course, it's important to learn and remember the basics, but while we're getting started, we only need to remember a few commands.
>
> **[0:46](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=46)** The first one is man, which stands for the manual pages.
>
> **[0:50](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=50)** We can think of the man pages as a technical reference book for our Linux distribution.
>
> **[0:55](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=55)** If we know the name of a command, we can find out a wealth of information about what it does, what options it provides, and what arguments it takes.
>
> **[1:04](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=64)** Let's go back to the terminal.
>
> **[1:05](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=65)** I'll clear the screen by typing the command clear, let's look something up in the man pages.
>
> **[1:11](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=71)** To do that, I'll type man followed by the command name.
>
> **[1:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=76)** Earlier, we saw the command ls, so let's look that up.
>
> **[1:20](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=80)** I'll write man, ls and then press enter.
>
> **[1:24](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=84)** And here, I can see some information about the ls command.
>
> **[1:27](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=87)** I can see that it's for listing directory contents, and I get a quick overview of how to use the command in the synopsis section.
>
> **[1:35](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=95)** To use this command, I'd write ls, followed by any of the options I need and the file or directory path that I want to use.
>
> **[1:43](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=103)** The terms in square brackets are optional.
>
> **[1:46](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=106)** In this case, that means I can just use the ls command by itself to see the default output listing of the directory.
>
> **[1:52](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=112)** Here, below the description header, there's a little bit more detailed information about the command, including its default behavior and usage notes.
>
> **[2:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=120)** And below that is a listing of the options that the command takes.
>
> **[2:04](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=124)** Occasionally, you'll come across a command that takes no options, but that's fairly rare.
>
> **[2:09](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=129)** Here at the bottom of the screen, I see a little status bar that tells me my cursor is on line one of this document, and it offers some options to help or quit.
>
> **[2:19](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=139)** I'll press the H key to show the help.
>
> **[2:21](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=141)** And I want to direct your attention to this section called moving.
>
> **[2:25](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=145)** Two of the most useful key commands here are F and B, for moving forward and backward.
>
> **[2:31](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=151)** There's also a Z, or Zed, and W, which move in a similar way.
>
> **[2:36](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=156)** But I find that I accidentally hit Q when I use those, which quits the man pages tool when I mean to hit W.
>
> **[2:43](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=163)** We can also move up and down by a line with the up and down arrows, and we can move down a screen-full at a time with the space bar.
>
> **[2:51](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=171)** There's a whole lot of information here, which you can page through hitting F to go forward, and B to go back up.
>
> **[2:58](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=178)** If you're feeling adventurous, you can explore that on your own time.
>
> **[3:02](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=182)** It's worth noting that these navigation commands are actually those for another tool called Less, but we'll get to that later on.
>
> **[3:09](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=189)** There are a lot of ways to use the man pages very, very efficiently, but for our purposes here, paging up and paging down is just fine.
>
> **[3:17](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=197)** I'll press Q to exit the help and go back to the man page for ls.
>
> **[3:21](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=201)** Here, I can use the F and B keys we saw before to move through the information.
>
> **[3:28](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=208)** Notice that the status bar at the bottom is showing me where my cursor is, and therefore, what section of the document I'm seeing in terms of lines of text.
>
> **[3:36](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=216)** Though right now, I'm not looking up anything in particular.
>
> **[3:39](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=219)** So I'll press Q to quit.
>
> **[3:42](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=222)** It's important to be familiar with the man command as we go along in case there's anything you want to look up.
>
> **[3:47](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=227)** Many commands also have an option called help, which provides a brief amount of information about them.
>
> **[3:53](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=233)** However, they usually refer you to the man pages for more detailed documentation.
>
> **[3:58](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=238)** You can see if a command you're using has this feature available by typing --help after a command.
>
> **[4:04](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=244)** For example, I'll write ls --help.
>
> **[4:08](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=248)** This is an example of a long option.
>
> **[4:11](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=251)** I'll press enter.
>
> **[4:13](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=253)** Here in my terminal, I can scroll up and down with the mouse if the output is very long.
>
> **[4:21](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=261)** Once again, I'll clear the screen with a clear command.
>
> **[4:25](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=265)** There's another command that's useful when we're working in bash, and that's just help by itself.
>
> **[4:31](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=271)** As we get into working with the Bash shell in particular later on, the help tool can act as a handy reminder for the syntax of some Bash-specific commands.
>
> **[4:39](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=279)** But what if we don't know the name of a command that we're looking for?
>
> **[4:42](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=282)** In that case, we can use another command called apropos.
>
> **[4:46](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=286)** Apropos searches a list of installed programs that can be used as commands and searches their descriptions for texts that you provide as an argument.
>
> **[4:54](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=294)** So if I wanted to find out what can list things, I could type apropos list and see a number of results that match that word.
>
> **[5:05](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=305)** I'll take some time to look through these results.
>
> **[5:07](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=307)** And, ah, here's a command that can list directory contents.
>
> **[5:10](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=310)** It's ls.
>
> **[5:13](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=313)** Searching for commands this way can be time-consuming.
>
> **[5:15](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=315)** But if you know what you need to do, but not the command to do it, apropos can be helpful.
>
> **[5:21](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=321)** Using the documentation isn't something that's only for beginners.
>
> **[5:25](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=325)** Advanced users of the command line use documentation often, both to refresh their knowledge and to find out the specifics of how things work, in much the same way that writers and other professionals frequently turn to a dictionary, a thesaurus, or other reference materials.
>
> **[5:39](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=339)** It's very useful, both as a beginner, and as you become more advanced to keep a notebook of commands and tasks you find yourself using often, and of things that took you awhile to figure out.
>
> **[5:50](https://www.linkedin.com/learning/learning-linux-command-line-2023/finding-help-for-commands?u=76281980&t=350)** That way, you can build your own custom documentation to supplement the built-in documentation.

> [!info]- Semantic Content
>
> **CLI Commands:** ls (8), find (5)
> **Tools:** command line (4), bash (4), terminal (2)
> **Code Keywords:** let (3), case, (2)
> **Definitions:** stands for (1), is a  (1), is an  (1)
> **Cross-References:** go back to (2)
> **Documentation:** man page (1), the documentation (1)
> **UI Navigation:** scroll up (1)
> **Analogies:** for example (1)

#### Helpful keyboard shortcuts in the terminal
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=0)** - [Narrator] Before we move on to more specific commands.
>
> **[0:03](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=3)** There's a few other helpful things to know about working with commands at the command line.
>
> **[0:07](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=7)** The first is tab completion.
>
> **[0:09](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=9)** Tab completion is a feature of the Bash shell and many other shells too.
>
> **[0:13](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=13)** And it lets us skip typing out a whole file name or directory name when we're working at the command line.
>
> **[0:18](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=18)** It looks at all the information available to it and makes a guess about what we mean.
>
> **[0:24](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=24)** For example, I can type LS dash L capital D, lowercase E and press tab.
>
> **[0:31](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=31)** And the shell completes the line with desktop because desktop is a directory in the current working directory, my home directory.
>
> **[0:39](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=39)** I'll press control C to cancel this command.
>
> **[0:42](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=42)** Now I'll type LS dash L capital D, lowercase O and we'll press tab.
>
> **[0:49](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=49)** Hmm, nothing.
>
> **[0:50](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=50)** That's because tab doesn't have one clear suggestion to return.
>
> **[0:54](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=54)** You can press tab again.
>
> **[0:55](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=55)** And now I see a list of possibilities, documents and downloads because they both start with the letters DO.
>
> **[1:02](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=62)** The terminal has put what I typed before here at the prompt, so I can continue using it.
>
> **[1:07](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=67)** I'll type C and press tab.
>
> **[1:10](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=70)** Now the shell knows what I mean because nothing besides documents matches DOC.
>
> **[1:15](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=75)** I can press enter and see information about the contents of this folder.
>
> **[1:19](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=79)** Auto complete also works with commands and Bash, not just paths, which makes it somewhat easier to discover new commands or to refresh your memory.
>
> **[1:27](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=87)** If you only remember the first part of a command.
>
> **[1:30](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=90)** Let's give that a try with a letter A.
>
> **[1:32](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=92)** I'll press tab twice.
>
> **[1:35](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=95)** And the shell shows me all the possibilities.
>
> **[1:37](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=97)** I can page through this list with the space bar and when the list is finished, I still have my A here at the prompt.
>
> **[1:45](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=105)** Notice that if I put a space here and press tab again, Bash will treat the second item as an argument.
>
> **[1:52](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=112)** So auto complete is showing me files and directories.
>
> **[1:54](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=114)** It thinks I might want to pass into the A command, which doesn't do anything.
>
> **[1:59](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=119)** For now I'll backspace this command and type clear, to clear the screen.
>
> **[2:04](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=124)** Once we move beyond short commands, it'll sometimes become necessary to move the cursor around and edit commands or parameters.
>
> **[2:12](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=132)** We can use the arrow keys for that, but it gets pretty tedious to have to click for every character that you want to move.
>
> **[2:18](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=138)** Luckily, there are some shortcut keys to help us out.
>
> **[2:21](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=141)** Control A and control E moved to the beginning and the end of a line respectively.
>
> **[2:26](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=146)** Control is represented by the caret character, which is this little pointy character.
>
> **[2:31](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=151)** Caret is spelled C-A-R-E-T, not like the vegetable.
>
> **[2:34](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=154)** And we'll often see it in documentation and in various applications to let us know we can use the control key in combination with another key to do something.
>
> **[2:43](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=163)** I've provided the short notation here for control A and control E.
>
> **[2:47](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=167)** When we're working at the command line, we'll often use short commands, but sometimes individual commands or series of commands can become very long and even wrap around to the next line or more lines.
>
> **[2:58](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=178)** What enter at the prompt is considered to be one line and one line only.
>
> **[3:02](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=182)** Up until we press return.
>
> **[3:04](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=184)** So in the case of a long command, what might look to us like more than one line being wrapped because of space constraints is really treated as just one long line.
>
> **[3:13](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=193)** So moving to the beginning in this example would move the cursor to before the R in our sink.
>
> **[3:19](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=199)** And moving to the end would move the cursor to after the K in the last instance of the word work.
>
> **[3:25](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=205)** Even though that appears to be a few lines down.
>
> **[3:28](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=208)** Moving to the beginning or end of a line is useful for making changes.
>
> **[3:32](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=212)** But with long commands, it may still not let us get close enough to what we need to change.
>
> **[3:37](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=217)** Control left arrow and control right arrow, move backward and forward a word at a time.
>
> **[3:42](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=222)** Using spaces and other non alphanumeric characters like slashes as the breaks between words.
>
> **[3:49](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=229)** Control U deletes from the cursor position to the beginning of the line.
>
> **[3:53](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=233)** And control K deletes from the cursor position to the end of the line.
>
> **[3:58](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=238)** These are useful for replacing the command if we have a long path we don't want to retype or replacing the path or another argument without having to retype along or complex command with options.
>
> **[4:08](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=248)** But of course, we can still move with arrows and use backspace or delete to remove characters one at a time too.
>
> **[4:15](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=255)** And if we need to copy and paste in the command line window, we'll need to use control shift C and control shift V to do that instead of the regular control C and control V.
>
> **[4:26](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=266)** Another helpful set of shortcuts are the up and down arrows, which will recall previous commands that we typed in the Bash shell.
>
> **[4:33](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=273)** These work like navigating a list.
>
> **[4:35](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=275)** If we press up once we'll recall the previous command.
>
> **[4:39](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=279)** Press up twice, and it's the second most recent.
>
> **[4:42](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=282)** And we can move back down the list with the down arrow.
>
> **[4:45](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=285)** We can also search our command history with control R and then we'll start typing a command path.
>
> **[4:52](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=292)** Bash will show us what matches and we can use control R again to cycle between matches.
>
> **[4:59](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=299)** And as we saw earlier, if we've typed a command, but decide we don't want to run it, we can type control C to abandon it rather than having to backspace or delete the whole command.
>
> **[5:09](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=309)** Doing this will return us to an empty prompt.
>
> **[5:12](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=312)** When we're learning to use the command line, we don't have to use the shortcuts.
>
> **[5:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=316)** They can be a lot to remember, but as we become more advanced, we'll probably find them helpful because they can save a lot of time.
>
> **[5:22](https://www.linkedin.com/learning/learning-linux-command-line-2023/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=322)** Once we make them part of our workflow.

> [!info]- Semantic Content
>
> **Tools:** command line (5), bash (5), terminal (1)
> **Code Keywords:** let (3), return. (2), delete (2), continue (1), pass (1)
> **CLI Commands:** ls (2), find (1), make (1)
> **Cross-References:** in the last (1), as we saw (1)
> **Definitions:** is a  (2)
> **Env Vars:** doc (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### Challenge: Find command information
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/challenge-find-command-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/challenge-find-command-information?u=76281980&t=0)** - [Instructor] Let's take a moment to practice what we've learned so far.
>
> **[0:08](https://www.linkedin.com/learning/learning-linux-command-line-2023/challenge-find-command-information?u=76281980&t=8)** Using the tools we've explored, your challenge is to answer these four questions.
>
> **[0:13](https://www.linkedin.com/learning/learning-linux-command-line-2023/challenge-find-command-information?u=76281980&t=13)** This challenge should take you about 10 minutes.
>
> **[0:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/challenge-find-command-information?u=76281980&t=16)** Remember to use the resources available to you in the command line interface to find the answers.
>
> **[0:21](https://www.linkedin.com/learning/learning-linux-command-line-2023/challenge-find-command-information?u=76281980&t=21)** When you're done, come back and I'll show you how I found the answers.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), interface (1)
> **CLI Commands:** find (1)
> **Tools:** command line (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Find command information
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-find-command-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-find-command-information?u=76281980&t=0)** - [Narrator] Here is how I solve these challenges.
>
> **[0:07](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-find-command-information?u=76281980&t=7)** To answer the first question, What does the command stat my file dot txt do?
>
> **[0:12](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-find-command-information?u=76281980&t=12)** We can use man stat to discover that it will show files statistics for my file dot txt.
>
> **[0:19](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-find-command-information?u=76281980&t=19)** Let's do that here in the command line.
>
> **[0:21](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-find-command-information?u=76281980&t=21)** I'll write man stat to look up the stat command in the manual pages.
>
> **[0:27](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-find-command-information?u=76281980&t=27)** Here under the name section, I can see that stat displays file or file system status.
>
> **[0:32](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-find-command-information?u=76281980&t=32)** And in the synopsis section, I can see that the usage is to use the command stat followed by a file name.
>
> **[0:39](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-find-command-information?u=76281980&t=39)** To answer the second question, what does the command DF dash H slash do?
>
> **[0:44](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-find-command-information?u=76281980&t=44)** Again, we can use the man pages.
>
> **[0:46](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-find-command-information?u=76281980&t=46)** Looking up the command DF to discover that it shows disc utilization of the root file system in a human readable way.
>
> **[0:53](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-find-command-information?u=76281980&t=53)** Again, let's take a look at that in the command line.
>
> **[0:56](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-find-command-information?u=76281980&t=56)** To look up the DF command I'll use man DF and under the name section, I can see that DF reports file system disk space usage.
>
> **[1:05](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-find-command-information?u=76281980&t=65)** In order to use it I can look to the synopsis section to see that after the DF command I can choose to use options and then I can provide a file.
>
> **[1:13](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-find-command-information?u=76281980&t=73)** Or in this case, a path.
>
> **[1:15](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-find-command-information?u=76281980&t=75)** Moving down with the space bar I can find the dash H option, which I can see print sizes and powers of 1024.
>
> **[1:24](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-find-command-information?u=76281980&t=84)** This provides us a slightly more relatable way of seeing how large files are.
>
> **[1:30](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-find-command-information?u=76281980&t=90)** At the end of that command is a slash, which as we'll see in a little bit represents the root of the system's file system.
>
> **[1:38](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-find-command-information?u=76281980&t=98)** To answer the third question, what command would I use to search for files in a directory hierarchy?
>
> **[1:43](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-find-command-information?u=76281980&t=103)** I use the apropos command.
>
> **[1:45](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-find-command-information?u=76281980&t=105)** You might have noticed that search for files was in double quotes and that was a hint.
>
> **[1:50](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-find-command-information?u=76281980&t=110)** We can use double quotes to send apropos more than one word.
>
> **[1:53](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-find-command-information?u=76281980&t=113)** Using that command I found the find command.
>
> **[1:56](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-find-command-information?u=76281980&t=116)** Let's see how that works in the command line.
>
> **[1:59](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-find-command-information?u=76281980&t=119)** I'll write apropos search for files in double quotes and when I run that, I see the result find.
>
> **[2:06](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-find-command-information?u=76281980&t=126)** Had I not used the double quotes, I'd see many more results.
>
> **[2:09](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-find-command-information?u=76281980&t=129)** Let's see what that looks like.
>
> **[2:11](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-find-command-information?u=76281980&t=131)** I'll write apropos search for files without the quotes, and here are the many results.
>
> **[2:18](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-find-command-information?u=76281980&t=138)** I could have still solved this question by scrolling up and reading the description of all of the results, but that's not very efficient.
>
> **[2:25](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-find-command-information?u=76281980&t=145)** Using the double quotes gave me an exact match for this phrase, and to answer the fourth question, which option would I use with the LS command to output a comma separated list of files and directories.
>
> **[2:37](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-find-command-information?u=76281980&t=157)** I went back again to using the man pages to look up the LS command and looking through the available options until I found something that sounded similar.
>
> **[2:45](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-find-command-information?u=76281980&t=165)** Let's look at that in the command line.
>
> **[2:48](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-find-command-information?u=76281980&t=168)** Here at the prompt I'll type command man LS.
>
> **[2:51](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-find-command-information?u=76281980&t=171)** Here in the man pages I'll press the slash key to search for a term and I'll write comma separated.
>
> **[2:58](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-find-command-information?u=76281980&t=178)** Then I'll press enter to search for this term.
>
> **[3:01](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-find-command-information?u=76281980&t=181)** There we go.
>
> **[3:02](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-find-command-information?u=76281980&t=182)** The M option fills the width with a comma separated list of entries that looks like what I'm looking for.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), case, (1), for. (1)
> **CLI Commands:** find (3), ls (3)
> **Tools:** command line (4)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Files, Directories, and Permissions

> [[#Table of Contents|↑ Back to Table of Contents]]

#### The Linux file system
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=0)** - If you've been working with computers for any amount of time, you're probably familiar with the idea of files.
>
> **[0:06](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=6)** Files are collections of information that represent photos, documents, source code, databases, and all kinds of other things.
>
> **[0:14](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=14)** These are the basic concept of data organization we work with in a graphical environment.
>
> **[0:19](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=19)** And that's true in the command line environment as well.
>
> **[0:22](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=22)** There are two commands that I want to point out but not dig too deeply into.
>
> **[0:26](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=26)** These are called file and stat.
>
> **[0:29](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=29)** Both of these commands can take a look at a file and tell us some things about it.
>
> **[0:33](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=33)** The file command will generally be able to tell what kind of file we're asking it about.
>
> **[0:38](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=38)** If a file's name isn't clear or if it doesn't have an extension sometimes it can be tricky to figure out exactly what it is.
>
> **[0:45](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=45)** Using file will give us some insight into whether something is an archive, or a directory, or an executable file, or a safe, a text file, or other kinds of document.
>
> **[0:54](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=54)** I'll write file and then provide the name of my documents directory, and file tells me that that's a directory.
>
> **[1:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=60)** While in a desktop environment we might be able to click on a file and view its properties, that feature isn't available to us in a command line environment.
>
> **[1:08](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=68)** The stat command on the other hand tells us some extended information about a file.
>
> **[1:13](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=73)** I'll write stat and provide the directory named documents.
>
> **[1:17](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=77)** As we'll see when we look at the LS command in more depth, some of this information is available using that command as well.
>
> **[1:23](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=83)** But instead provides some useful information.
>
> **[1:26](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=86)** These commands can be helpful to know about if we come across an unknown file.
>
> **[1:30](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=90)** On a Linux system everything is a file, so these tools can come in handy.
>
> **[1:35](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=95)** We organize files into directories which are sometimes called folders, like we would keep a bunch of related papers, or photographs together in a folder or envelope.
>
> **[1:44](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=104)** In the graphical environment we can navigate around these files and directories with the mouse, seeing how they're organized and seeing their hierarchy.
>
> **[1:53](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=113)** We can do the same thing in a command line environment, but in order to do that we need to know where we're working and what's available.
>
> **[2:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=120)** So before we start navigating around we need to step back and learn a little bit about the file system and the Filesystem Hierarchy Standard.
>
> **[2:08](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=128)** Working at the command line, we'll often need to refer to files or directories that represent the input, the output, or the configuration for commands we use.
>
> **[2:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=136)** And we need to know where commands are located on the system too.
>
> **[2:20](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=140)** On a Linux system, files and directories are part of the file system, which defines the way the data is represented on the system's storage media.
>
> **[2:29](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=149)** Most Linux distributions follow the Filesystem Hierarchy Standard, a standard which defines where certain kinds of files are stored on the file system.
>
> **[2:37](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=157)** Having files like configurations, programs, or binaries and so on in predictable locations is important to the operability of software across Linux distributions.
>
> **[2:48](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=168)** Back here in my file browser we can see what the file system looks like, before we dive into some specific directories.
>
> **[2:54](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=174)** There are a handful of directories here, which can look pretty cryptic and intimidating if we don't know what they represent.
>
> **[3:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=180)** So let's explore the purpose of a few of these.
>
> **[3:04](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=184)** The file system starts with the root represented by a slash.
>
> **[3:08](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=188)** The file system root is the highest level of the organizational hierarchy of the file system.
>
> **[3:13](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=193)** Each Linux system only has one file system and everything else directories, external hard drives, network shares, and so on are represented within it.
>
> **[3:22](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=202)** If you're familiar with windows, you can think of the file system root kind of like the my computer level of browsing in the File Explorer.
>
> **[3:30](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=210)** At the next level down the hierarchy are a handful of specific folders, defined by the Filesystem Hierarchy Standard.
>
> **[3:36](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=216)** The home directory is where each user accounts personal files are stored.
>
> **[3:40](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=220)** And our home directory is where most of our work in this course we'll focus.
>
> **[3:45](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=225)** Within the home directory each user has a separate directory named with their username, and each user will be able to use the tilde character to represent their own personal home directory.
>
> **[3:55](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=235)** We'll see more about that later.
>
> **[3:57](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=237)** On desktop Linux distributions, each user's home directory also often contains other directories like documents, downloads, pictures, and so on.
>
> **[4:06](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=246)** The directory named a root is where roots home folder is stored.
>
> **[4:09](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=249)** We'll learn more about the root user later on, but for now it's important to recognize that this directory, and the file system root are both called root.
>
> **[4:18](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=258)** And that can seem a little confusing, though nobody except the root user uses the root home folder.
>
> **[4:24](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=264)** So generally if you hear the term root in relation to a file system path, it refers to the file system root not to the special home folder.
>
> **[4:33](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=273)** Some of the other folders we may need to explore are etc, which is where most programs keep their configuration files.
>
> **[4:39](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=279)** Bin and sbin where programs the system relies on to work are kept, and lib where shared libraries and modules are stored.
>
> **[4:47](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=287)** We may also need to work in the MNT folder, which is where local or network file systems are mounted into the overall file system, or the media folder where removable file systems like USB drives and optical drives are mounted by some distributions that support automatic mounting.
>
> **[5:04](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=304)** There are a few other folders, and some of these higher level folders have sub folders to further organize items.
>
> **[5:09](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=309)** There's a few special folders too, which are related to the system and the kernel.
>
> **[5:14](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=314)** The dev folder is where the system keeps references to all of the hardware it has hard drives, memory, CPU's, and everything else.
>
> **[5:21](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=321)** We won't get into that much here, but if you're interested in learning more about how a Linux system works under the hood, it's a good place to explore.
>
> **[5:29](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=329)** There's a folder called proc, which contains references to processes that are running on the system.
>
> **[5:33](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=333)** And this directory contains details on other aspects of the system as well.
>
> **[5:38](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=338)** And there's a folder called sys, which holds files representing different kernel parameters and system information.
>
> **[5:44](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=344)** If you're interested in learning about kernel development, you'll spend time in this directory.
>
> **[5:49](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=349)** That's a very brief overview of the general structure of a Linux system file system.
>
> **[5:54](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=354)** Don't be afraid of exploring, a normal user generally have permission to make changes in these system folders, so looking around won't do any harm.
>
> **[6:02](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=362)** And as I mentioned, as you learn more about Linux, you'll find yourself starting to use these directories, especially as you expand into learning about system administration or software development.
>
> **[6:11](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-linux-file-system?u=76281980&t=371)** for now though, we won't focus on them because we'll keep our focus on working with files in our own home directory.

> [!info]- Semantic Content
>
> **Tools:** command line (4)
> **CLI Commands:** ls (1), make (1), find (1)
> **Env Vars:** mnt (1), usb (1), cpu (1)
> **Definitions:** is an  (1), is a  (1), refers to (1)
> **Code Keywords:** let (1), else. (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** source code (1)
> **Analogies:** kind of like (1)

#### Understanding file paths
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/understanding-file-paths?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/understanding-file-paths?u=76281980&t=0)** - [Instructor] In order to refer to locations on the file system, we use a path, a string of text that represents a file or directory within the file system.
>
> **[0:09](https://www.linkedin.com/learning/learning-linux-command-line-2023/understanding-file-paths?u=76281980&t=9)** In a path, the lash character acts as a separator between directory names, leading to the directory or file for which we're writing a path.
>
> **[0:17](https://www.linkedin.com/learning/learning-linux-command-line-2023/understanding-file-paths?u=76281980&t=17)** There are two kinds of path called absolute and relative.
>
> **[0:21](https://www.linkedin.com/learning/learning-linux-command-line-2023/understanding-file-paths?u=76281980&t=21)** An absolute path starts from the root of the file system, the highest level of the structure where the files are stored, which remember is represented by the slash character.
>
> **[0:30](https://www.linkedin.com/learning/learning-linux-command-line-2023/understanding-file-paths?u=76281980&t=30)** This allows us to define a full specific location from the highest level of the file system, all the way down to a specific directory or file.
>
> **[0:38](https://www.linkedin.com/learning/learning-linux-command-line-2023/understanding-file-paths?u=76281980&t=38)** So for example, the absolute path to my home directory would be /home/Scott and the absolute path to my documents directory on my system would be /home/Scott/Documents.
>
> **[0:51](https://www.linkedin.com/learning/learning-linux-command-line-2023/understanding-file-paths?u=76281980&t=51)** We can tell that these are absolute paths because they begin with a slash representing the file system route.
>
> **[0:56](https://www.linkedin.com/learning/learning-linux-command-line-2023/understanding-file-paths?u=76281980&t=56)** When the slash is the left most character in a path, this slash represents the file system route and all the other slashes indicated division between directory names, from higher levels down to lower levels are branches from left to right, until we get to the file or directory we indicate.
>
> **[1:12](https://www.linkedin.com/learning/learning-linux-command-line-2023/understanding-file-paths?u=76281980&t=72)** Absolute paths are useful when we want to avoid any ambiguity about where a particular file or directory is located on a system.
>
> **[1:19](https://www.linkedin.com/learning/learning-linux-command-line-2023/understanding-file-paths?u=76281980&t=79)** However, sometimes ambiguity is useful.
>
> **[1:22](https://www.linkedin.com/learning/learning-linux-command-line-2023/understanding-file-paths?u=76281980&t=82)** What if I want to refer not to my documents directory, but to your documents directory or any user's documents directory generally?
>
> **[1:30](https://www.linkedin.com/learning/learning-linux-command-line-2023/understanding-file-paths?u=76281980&t=90)** In that case, we would use a relative path, a path that isn't a complete absolute path, starting from the file system route, but one that starts from the current working directory as its base.
>
> **[1:41](https://www.linkedin.com/learning/learning-linux-command-line-2023/understanding-file-paths?u=76281980&t=101)** The working directory is where any action we do will take place, unless we've told a command to use files in a different path.
>
> **[1:48](https://www.linkedin.com/learning/learning-linux-command-line-2023/understanding-file-paths?u=76281980&t=108)** We'll explore this more in a hands-on way in just a little bit.
>
> **[1:52](https://www.linkedin.com/learning/learning-linux-command-line-2023/understanding-file-paths?u=76281980&t=112)** Relative paths are relative because if the working directory changes, the place they refer to changes as well.
>
> **[1:59](https://www.linkedin.com/learning/learning-linux-command-line-2023/understanding-file-paths?u=76281980&t=119)** For example, if I knew I was working inside my home directory and I wanted to refer to my documents directory, the relative path documents would take me there.
>
> **[2:08](https://www.linkedin.com/learning/learning-linux-command-line-2023/understanding-file-paths?u=76281980&t=128)** And if we expand the absolute path for that directory, we can see how that works.
>
> **[2:12](https://www.linkedin.com/learning/learning-linux-command-line-2023/understanding-file-paths?u=76281980&t=132)** And if you are working inside your home folder, the same relative path would refer to your documents directory.
>
> **[2:18](https://www.linkedin.com/learning/learning-linux-command-line-2023/understanding-file-paths?u=76281980&t=138)** When we see a path that doesn't begin with a slash, we'll know, we're working with a relative path.
>
> **[2:24](https://www.linkedin.com/learning/learning-linux-command-line-2023/understanding-file-paths?u=76281980&t=144)** But for example, if our current working directory was the pictures directory, this relative path of documents wouldn't take us where we want to go and when we convert it to an absolute path, we can see why.
>
> **[2:36](https://www.linkedin.com/learning/learning-linux-command-line-2023/understanding-file-paths?u=76281980&t=156)** From a working directory of pictures inside my home folder, the absolute path represented by this relative path is /home/Scott/Pictures/Documents.
>
> **[2:47](https://www.linkedin.com/learning/learning-linux-command-line-2023/understanding-file-paths?u=76281980&t=167)** That won't work, because documents and pictures are both located at the same level of hierarchy inside my home directory and that means the documents directory isn't located inside the pictures directory.
>
> **[2:58](https://www.linkedin.com/learning/learning-linux-command-line-2023/understanding-file-paths?u=76281980&t=178)** In order to refer to directories higher up in the hierarchy from our working directory, we can use two dots or periods.
>
> **[3:05](https://www.linkedin.com/learning/learning-linux-command-line-2023/understanding-file-paths?u=76281980&t=185)** This represents the parent directory of whatever directory we're working inside of.
>
> **[3:10](https://www.linkedin.com/learning/learning-linux-command-line-2023/understanding-file-paths?u=76281980&t=190)** If I was working in my home directory, .. would represent the path /home.
>
> **[3:15](https://www.linkedin.com/learning/learning-linux-command-line-2023/understanding-file-paths?u=76281980&t=195)** And if I was working in my documents directory, .. would represent /home/Scott.
>
> **[3:21](https://www.linkedin.com/learning/learning-linux-command-line-2023/understanding-file-paths?u=76281980&t=201)** So from the previous example, if I was working inside my pictures directory, the relative path ../Documents would correctly refer to my documents directory because the path tells the system to move to the parent directory of pictures, which is my home directory and then move into documents which is located in the home directory.
>
> **[3:40](https://www.linkedin.com/learning/learning-linux-command-line-2023/understanding-file-paths?u=76281980&t=220)** We'll use this shortcut a lot when working at the command line and we'll see that in a hands-on way in just a little bit.
>
> **[3:46](https://www.linkedin.com/learning/learning-linux-command-line-2023/understanding-file-paths?u=76281980&t=226)** I mentioned the tilde character earlier and noted that it refers to the current user's home directory.
>
> **[3:51](https://www.linkedin.com/learning/learning-linux-command-line-2023/understanding-file-paths?u=76281980&t=231)** So it could also represent my documents directory using the path ~/Documents.
>
> **[3:57](https://www.linkedin.com/learning/learning-linux-command-line-2023/understanding-file-paths?u=76281980&t=237)** On your system, this would refer to your documents directory and on someone else's system, it would represent their documents directory.
>
> **[4:05](https://www.linkedin.com/learning/learning-linux-command-line-2023/understanding-file-paths?u=76281980&t=245)** The tilde here is a feature of bash and many other shells and its behavior is called tilde expansion.
>
> **[4:11](https://www.linkedin.com/learning/learning-linux-command-line-2023/understanding-file-paths?u=76281980&t=251)** While using the tilde in a path feels a little bit like using a relative path, it's really not, because the shell expands it into the first part of an absolute path.
>
> **[4:20](https://www.linkedin.com/learning/learning-linux-command-line-2023/understanding-file-paths?u=76281980&t=260)** It's just that that part of the absolute path will be different for different users, but regardless it expands into a path that starts from the file system route.
>
> **[4:29](https://www.linkedin.com/learning/learning-linux-command-line-2023/understanding-file-paths?u=76281980&t=269)** Regardless of our current working directory, the tilde will always represent our own home folder.
>
> **[4:35](https://www.linkedin.com/learning/learning-linux-command-line-2023/understanding-file-paths?u=76281980&t=275)** Absolute and relative paths are very important as we work with commands and files with the command line.
>
> **[4:40](https://www.linkedin.com/learning/learning-linux-command-line-2023/understanding-file-paths?u=76281980&t=280)** As we continue, remember that an absolute path starts with a slash for the file system route and a relative path does not.
>
> **[4:47](https://www.linkedin.com/learning/learning-linux-command-line-2023/understanding-file-paths?u=76281980&t=287)** We'll be using both kinds of paths throughout the course.

> [!info]- Semantic Content
>
> **Tools:** command line (2), bash (1)
> **Analogies:** for example (3)
> **Code Keywords:** case, (1), continue (1)
> **Definitions:** is a  (1), is called (1)
> **Speakers:** - [instructor] (1)

#### Navigating the file system
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=0)** - [Instructor] Let's take a look at how to navigate the file system in the terminal.
>
> **[0:04](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=4)** I'll rearrange my desktop here to show how the terminal commands and the folder structure are related to each other.
>
> **[0:10](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=10)** I'll press F11 to take my terminal out of full screen mode and I'll stick it to the side of the window here.
>
> **[0:18](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=18)** I'll clear its contents and then I'll open the files application and position it here to the right.
>
> **[0:28](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=28)** In the top bar of the files application, I'll toggle the view to list and then I'll go into Preferences.
>
> **[0:36](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=36)** And under List View, I'll choose, allow folders to be expanded.
>
> **[0:40](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=40)** Here in the File browser, I'll navigate to my Exercise Files which are under Documents and then Exercise Files.
>
> **[0:48](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=48)** In this graphical structure, I can pretty easily see what folder I'm working in.
>
> **[0:53](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=53)** Likewise, over here in the terminal, we can see which folder we're working in as part of the prompt.
>
> **[0:58](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=58)** Remember, this tilde character right here represents your user account home folder.
>
> **[1:03](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=63)** To match up in the terminal where I'm browsing in the File browser, the Exercise Files folder, I can see that I'll need to navigate in the terminal into the Documents folder and then into Exercise Files.
>
> **[1:14](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=74)** To do that, I'll use the cd command which stands for change of directory and then I'll start typing the path that I want to visit.
>
> **[1:21](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=81)** I'll type a D-O-C and then press Tab to auto-complete since Bash knows what's available in my current working directory and nothing else in my home directory starts with D-O-C except documents.
>
> **[1:32](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=92)** Then I'll press enter to run that command.
>
> **[1:35](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=95)** Since we've navigated into a different directory, the prompt changes.
>
> **[1:38](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=98)** Now it says ∼/documents referring to my users documents directory.
>
> **[1:43](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=103)** We can also find out our current working directory with the pwd command to print the name of the working directory.
>
> **[1:49](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=109)** This reveals the absolute path /home/Scott/Documents.
>
> **[1:54](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=114)** I'll make the terminal window a little bit larger and then we'll type cd Exercise Files.
>
> **[2:01](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=121)** That's the name of the directory that I'd like to move into.
>
> **[2:05](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=125)** I'll press Enter and I get an error.
>
> **[2:09](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=129)** In this case, the cd command is complaining that we've provided too many arguments.
>
> **[2:13](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=133)** The reason for this is that it's considering Exercise Files to be two separate words and interpreting it as two separate arguments because there's a space in between the words.
>
> **[2:24](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=144)** To work with file and directory names that have spaces in them, we have to tell Bash that this space is part of the path not a separator between two arguments or commands.
>
> **[2:33](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=153)** There are two ways to do this.
>
> **[2:35](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=155)** The first way is to put the path inside double quotes.
>
> **[2:38](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=158)** But the more common thing we'll see is just to escape or especially mark certain characters to tell the Shell to treat them differently than it normally would.
>
> **[2:46](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=166)** In this case, we need to let Bash know that the space is part of the directory name not a break in the command.
>
> **[2:52](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=172)** To escape a character, we type a backslash directly in front of it.
>
> **[2:55](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=175)** Escaping a character, it means that it's treated literally instead of having any other special meaning.
>
> **[3:02](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=182)** That works for one character at a time.
>
> **[3:04](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=184)** If we had two spaces in there, we need to escape each space character individually.
>
> **[3:09](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=189)** So I'll type cd Exercise\ Files and press Enter.
>
> **[3:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=196)** Now, when I type pwd, I can see I'm where I expected to be.
>
> **[3:20](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=200)** Now that we're operating in the Exercise Files directory, I'll type ls again to see what we've got.
>
> **[3:26](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=206)** I can see that the files and directories here correspond with what I see in the File browser.
>
> **[3:32](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=212)** Let's take a look inside the department's directory.
>
> **[3:35](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=215)** I'll write ls and this time I'll use the dash capital R option to list directories recursively and I'll add departments as an argument using tab completion.
>
> **[3:47](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=227)** After I press Enter, I can see what's inside all the directories inside of the department's directory.
>
> **[3:52](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=232)** The recursive option means that when ls comes across the directory, it steps inside and looks around listing anything inside the directory.
>
> **[3:59](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=239)** We can see that within the departments directory, there's engineering, finance, HR, marketing and sales.
>
> **[4:07](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=247)** And if we go over to the File browser and open the Departments directory, we can see that that's the case.
>
> **[4:13](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=253)** Using recursion, if the ls command comes across another directory, it does the same thing.
>
> **[4:18](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=258)** It steps inside, looks around and reports back.
>
> **[4:21](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=261)** For example, we can see within the engineering sub-directory of the department's directory, there are directories called drawings, invoices and materials.
>
> **[4:30](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=270)** This is a helpful way of exploring a whole structure of folders.
>
> **[4:36](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=276)** Now scroll back down to the command prompt.
>
> **[4:39](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=279)** And I'll maximize my terminal again with F11.
>
> **[4:42](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=282)** I can see that there's a directory within departments called HR and within there a directory called policies.
>
> **[4:49](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=289)** Let's use the cd command to change into that folder.
>
> **[4:53](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=293)** From the Exercise Files directory, I'll write cd departments using a relative path because we're still working inside the Exercise Files folder then /HR/policies and I'll press Enter.
>
> **[5:09](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=309)** We can also move back up the directory structure using the cd command, a space and two dots or two periods.
>
> **[5:15](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=315)** Recall that these two dots represent the parent directory of the current working directory.
>
> **[5:20](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=320)** So in this case, the HR directory, so cd .. will take us up to the HR directory.
>
> **[5:27](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=327)** If I do the same thing again, I'll go to the departments directory.
>
> **[5:32](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=332)** I can use the shortcut in conjunction with other paths.
>
> **[5:35](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=335)** I'll go back to the policies directory, cd HR/policies.
>
> **[5:42](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=342)** Now let's move over to the documents directory inside the finance directory.
>
> **[5:46](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=346)** Looking back at our directory structure, I can see how the two locations would be related.
>
> **[5:52](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=352)** Here's the current working directory and I'll open the finance directory and find documents, that's inside a directory at the same level of the parent folder of the directory that I'm working in.
>
> **[6:03](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=363)** So to move there, I would write cd ../ to get back to the HR directory then ../ to get to the departments directory and then finance/documents then I'll press Enter.
>
> **[6:18](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=378)** And if I take a look at where I am with pwd, I can see I'm exactly where I expected.
>
> **[6:23](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=383)** If I wanted to step back to the previous folder that I was using, whatever that was, I can use the shortcuts cd, space and a dash or a minus.
>
> **[6:32](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=392)** This is useful for switching back and forth between two directories if you need to do that or for jumping into a directory and back without losing your place.
>
> **[6:40](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=400)** The last directory changed command I want to talk about is just cd by itself.
>
> **[6:45](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=405)** This takes us from wherever we are back to our current users home directory.
>
> **[6:49](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=409)** I'll type cd and I can see from the prompt that I'm home again.
>
> **[6:53](https://www.linkedin.com/learning/learning-linux-command-line-2023/navigating-the-file-system?u=76281980&t=413)** We can use these commands to navigate around the whole file system wherever we have access to do so.

> [!info]- Semantic Content
>
> **CLI Commands:** cd (13), ls (4), find (2), make (1)
> **Tools:** terminal (8), bash (3), command prompt (1)
> **Code Keywords:** let (5), case, (3), this. (1), case. (1)
> **Exercise Files:** exercise files (9)
> **UI Navigation:** open the (3), toggle (1), navigate to (1), go to (1)
> **Definitions:** means that (2), stands for (1), is a  (1)
> **Env Vars:** f11 (2)
> **Cross-References:** go back to (1)

#### Exploring the output of the ls command
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-the-output-of-the-ls-command?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-the-output-of-the-ls-command?u=76281980&t=0)** - [Narrator] As we've seen the LS command lists, the contents of a directory.
>
> **[0:04](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-the-output-of-the-ls-command?u=76281980&t=4)** Showing information about files contained within it.
>
> **[0:07](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-the-output-of-the-ls-command?u=76281980&t=7)** We've been using it as an example of command because it has options to change the output and because it accepts arguments.
>
> **[0:14](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-the-output-of-the-ls-command?u=76281980&t=14)** But the commands output itself is pretty useful.
>
> **[0:17](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-the-output-of-the-ls-command?u=76281980&t=17)** And it's worth taking some time to understand what it shows.
>
> **[0:20](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-the-output-of-the-ls-command?u=76281980&t=20)** LS just by itself, gives a list.
>
> **[0:22](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-the-output-of-the-ls-command?u=76281980&t=22)** And depending on your environment, the items may have some color or they may not.
>
> **[0:26](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-the-output-of-the-ls-command?u=76281980&t=26)** The coloration is helpful, but it's not critical to using LS.
>
> **[0:31](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-the-output-of-the-ls-command?u=76281980&t=31)** If you're not seeing it, you can try running LS with the color equals always option.
>
> **[0:36](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-the-output-of-the-ls-command?u=76281980&t=36)** On other platforms like BST or MAKO S you may need to use the dash capital G option Instead.
>
> **[0:42](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-the-output-of-the-ls-command?u=76281980&t=42)** The colors represent different aspects of the files in the listing.
>
> **[0:46](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-the-output-of-the-ls-command?u=76281980&t=46)** Let's go to the exercise files and look around.
>
> **[0:49](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-the-output-of-the-ls-command?u=76281980&t=49)** I'll write CD space, documents slash, exercise files and there I'll write LS dash L to see a little bit more information.
>
> **[1:01](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-the-output-of-the-ls-command?u=76281980&t=61)** The first column on the left shows whether an item is a directory, which will be shown with a D, a link with an L or a file represented by a dash, meaning that the attribute is missing or not set.
>
> **[1:12](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-the-output-of-the-ls-command?u=76281980&t=72)** If your output shows colors, directories will often be dark blue text and links will generally be lightly text.
>
> **[1:18](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-the-output-of-the-ls-command?u=76281980&t=78)** Files will vary in color based on what kind of file they are.
>
> **[1:22](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-the-output-of-the-ls-command?u=76281980&t=82)** But color themes in terminal applications can change this.
>
> **[1:25](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-the-output-of-the-ls-command?u=76281980&t=85)** So if you customized your terminal, the colors you see may be entirely different than mine.
>
> **[1:29](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-the-output-of-the-ls-command?u=76281980&t=89)** The next set of columns show a representation of the permissions on the file, which describes the, what kind of things users and members of groups are allowed to do with a file.
>
> **[1:39](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-the-output-of-the-ls-command?u=76281980&t=99)** We'll take a look at these in depth later on.
>
> **[1:42](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-the-output-of-the-ls-command?u=76281980&t=102)** Further to the right, we see the owner of the file and the group setting of the file.
>
> **[1:46](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-the-output-of-the-ls-command?u=76281980&t=106)** We'll take a look at what those mean later on too.
>
> **[1:49](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-the-output-of-the-ls-command?u=76281980&t=109)** Then we see the size of the files in bytes, which can be a little bit easier to read with a dash each option.
>
> **[1:54](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-the-output-of-the-ls-command?u=76281980&t=114)** I'll rewrite my command, but this time I'll use LS dash L and H for human readable size.
>
> **[2:01](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-the-output-of-the-ls-command?u=76281980&t=121)** And now I can see the size post faces, kilobyte, megabyte, gigabyte, terabyte, and so on.
>
> **[2:07](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-the-output-of-the-ls-command?u=76281980&t=127)** Over further to the right in the output there's the date and time that the file was modified.
>
> **[2:12](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-the-output-of-the-ls-command?u=76281980&t=132)** And finally, there's the name of the file or in the case of a link, which we'll explore later, the name of the link and all that it points to.
>
> **[2:18](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-the-output-of-the-ls-command?u=76281980&t=138)** Using LS gives us helpful information about directories and files, So it's a good command to know about.
>
> **[2:24](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-the-output-of-the-ls-command?u=76281980&t=144)** Don't be afraid to run LS in directories, as you explore the system.
>
> **[2:28](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-the-output-of-the-ls-command?u=76281980&t=148)** It doesn't harm anything, and it can give us a better sense of what kinds of things are located, where.

> [!info]- Semantic Content
>
> **CLI Commands:** ls (8), cd (1)
> **Code Keywords:** let (1), this. (1), finally, (1)
> **Env Vars:** bst (1), mako (1)
> **Tools:** terminal (2)
> **Exercise Files:** exercise files (2)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Create and remove directories
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-and-remove-directories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-and-remove-directories?u=76281980&t=0)** - [Instructor] Sometimes we'll need to create directories to organize files, and we'll also need to be able to remove directories from our system when they're no longer needed.
>
> **[0:09](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-and-remove-directories?u=76281980&t=9)** Again, I'll set up my screen with a file browser on the right so we can see the effects of what we do over here on the terminal on the left.
>
> **[0:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-and-remove-directories?u=76281980&t=16)** First, I'll create a new directory here in my Exercise Files folder with the mkdir command.
>
> **[0:21](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-and-remove-directories?u=76281980&t=21)** And I'll provide the name newfolder.
>
> **[0:25](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-and-remove-directories?u=76281980&t=25)** Pay attention to the directory listing on the right when I press Enter.
>
> **[0:29](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-and-remove-directories?u=76281980&t=29)** When I run the command, I can see over here that the folder appeared inside my working directory.
>
> **[0:36](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-and-remove-directories?u=76281980&t=36)** In the terminal, I can also see that with the ls -l command.
>
> **[0:40](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-and-remove-directories?u=76281980&t=40)** Here's my new directory.
>
> **[0:42](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-and-remove-directories?u=76281980&t=42)** If we put a name after mkdir, it assumes that we want to create a directory inside of the current working directory.
>
> **[0:48](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-and-remove-directories?u=76281980&t=48)** In this case, Exercise Files.
>
> **[0:50](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-and-remove-directories?u=76281980&t=50)** We can also specify a path outside the current directory or a folder deeper inside the working directory.
>
> **[0:56](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-and-remove-directories?u=76281980&t=56)** For example, I'll add a new directory inside our departments folder for customer service.
>
> **[1:01](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-and-remove-directories?u=76281980&t=61)** I'll write mkdir departments/customerservice.
>
> **[1:07](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-and-remove-directories?u=76281980&t=67)** And we can see that that directory was created inside of the departments directory instead of inside the current working directory.
>
> **[1:15](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-and-remove-directories?u=76281980&t=75)** We can also provide more than one argument for mkdir in order to make more than one directory at a time.
>
> **[1:20](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-and-remove-directories?u=76281980&t=80)** Let's create directories called documents, cases and awards within the customer service directory inside departments.
>
> **[1:28](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-and-remove-directories?u=76281980&t=88)** To do that, I'll write mkdir departments/customerservice/documents and then I'll type a space and I'll write departments/customerservice/cases.
>
> **[1:46](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-and-remove-directories?u=76281980&t=106)** In this case, using tab completion for the first two parts.
>
> **[1:49](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-and-remove-directories?u=76281980&t=109)** Then I'll press space, departments/customerservice/awards and I'll press Enter.
>
> **[1:58](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-and-remove-directories?u=76281980&t=118)** And then back in the file browser, I can see that those directories were created.
>
> **[2:03](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-and-remove-directories?u=76281980&t=123)** Let's say we also need a contracts directory for our legal department.
>
> **[2:07](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-and-remove-directories?u=76281980&t=127)** Instead of creating a legal directory in one step, and then creating a contracts directory inside that with a second step, we can do it all at once using the -p option for mkdir.
>
> **[2:17](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-and-remove-directories?u=76281980&t=137)** This option creates any parent directories that are needed.
>
> **[2:20](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-and-remove-directories?u=76281980&t=140)** So in this case, it'll create the legal directory for us and then create the contracts directory inside that.
>
> **[2:26](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-and-remove-directories?u=76281980&t=146)** To do that, I'll write mkdir -p departments/legal/contracts.
>
> **[2:35](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-and-remove-directories?u=76281980&t=155)** I'll run that and then in the file browser, I can see that the legal directory has appeared with the contracts directory inside of it.
>
> **[2:42](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-and-remove-directories?u=76281980&t=162)** We can also remove empty directories using the rmdir command.
>
> **[2:45](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-and-remove-directories?u=76281980&t=165)** Let's go remove that contracts directory that we just created.
>
> **[2:49](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-and-remove-directories?u=76281980&t=169)** I'll write rmdir departments/legal/contracts.
>
> **[2:55](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-and-remove-directories?u=76281980&t=175)** And over on the right in the directory structure, I can see that it's disappeared.
>
> **[2:59](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-and-remove-directories?u=76281980&t=179)** Let's do that again with a legal department folder.
>
> **[3:03](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-and-remove-directories?u=76281980&t=183)** I'll write rmdir departments/legal.
>
> **[3:07](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-and-remove-directories?u=76281980&t=187)** Now I'll clear the screen.
>
> **[3:10](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-and-remove-directories?u=76281980&t=190)** One thing to keep in mind about removing directories this way is that in order to remove a directory, it has be empty.
>
> **[3:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-and-remove-directories?u=76281980&t=196)** I can verify that by trying to remove the customer service directory, which still has items inside it.
>
> **[3:21](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-and-remove-directories?u=76281980&t=201)** I'll write rmdir departments/customerservice, and when I run that, I get an error.
>
> **[3:29](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-and-remove-directories?u=76281980&t=209)** That means it's a little tedious to remove a large directory structure with rmdir.
>
> **[3:33](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-and-remove-directories?u=76281980&t=213)** But we'll see a much better way of getting rid of directories soon.

> [!info]- Semantic Content
>
> **CLI Commands:** mkdir (7), ls (1), make (1)
> **Code Keywords:** let (4), case, (3)
> **Tools:** terminal (2)
> **Exercise Files:** exercise files (2)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Copy, move, and delete files and directories
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=0)** - [Instructor] It's pretty common to need to move copy and delete files from the command line.
>
> **[0:04](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=4)** In fact, a lot of experience command line users prefer using the command line for file management because in some cases, and if you're accustomed to doing so, it can be a lot faster to type commands than to navigate and drag files around with a mouse on screen.
>
> **[0:18](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=18)** The first command I want to introduce here is CP for copy.
>
> **[0:22](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=22)** Let's make a duplicate copy of our poems dot TXT file.
>
> **[0:26](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=26)** To do that I'll write CP, space poems dot TXT, space poems two dot TXT.
>
> **[0:35](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=35)** The first file name argument to the CP command is the file we want to copy and the second file name argument is where we want to copy it to.
>
> **[0:43](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=43)** I'll press enter and then I'll take a look at the contents of this directory with LS and there's poems two dot TXT.
>
> **[0:51](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=51)** We can also copy a file to a different path.
>
> **[0:54](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=54)** For example, we can copy our simple data dot TXT file to our employee info sub folder inside the HR folder.
>
> **[1:01](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=61)** To do that, I'll write CP simple data dot TXT space, departments slash HR slash employee info.
>
> **[1:14](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=74)** Remember, we need to escape that space in employee info.
>
> **[1:18](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=78)** Notice that I'm providing the path where I want the copy of the file to go, but not a name for the new copy of the file.
>
> **[1:24](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=84)** In this case, in the CP command, we will use the original name of the file.
>
> **[1:28](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=88)** So I'll have a file called symbol underscore data dot TXT in that employee info directory.
>
> **[1:34](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=94)** I could have also provided a name in the destination if I wanted to create a copy with a different name, as we did just a moment ago.
>
> **[1:41](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=101)** And if I take a look at the contents of that directory, I can see that my file has been copied there.
>
> **[1:46](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=106)** Next let's take a look at moving a file rather than copying it.
>
> **[1:50](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=110)** The move command has two uses.
>
> **[1:52](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=112)** We can use it to move files between directories and we can also use it to move a file to a file with a different name, effectively using it to rename files.
>
> **[2:01](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=121)** The command for move is MV.
>
> **[2:04](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=124)** So I'll type that and I'll move our poems to dot TXT file over to the departments slash marketing directory.
>
> **[2:14](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=134)** And I can check that that file was moved with LS departments slash marketing.
>
> **[2:19](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=139)** There it is in the destination folder and I can see that the file is no longer in the original directory with LS.
>
> **[2:26](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=146)** I mentioned that we can rename files using the MV command as well, so let's do that.
>
> **[2:31](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=151)** I'll type MV departments, marketing poems two dot TXT space departments, marketing literature dot TXT.
>
> **[2:45](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=165)** This will rename the file and if I list that directory, I can see that change has taken effect.
>
> **[2:51](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=171)** We've effectively moved one file to another file with a different name.
>
> **[2:55](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=175)** Earlier, we saw the two dots that represent the parent folder of the current working directory and there's another similar shortcut we should know about, which is the single dot.
>
> **[3:04](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=184)** It represents the current folder or current working directory.
>
> **[3:08](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=188)** We can use that when working with files, I'll use the dot, to move our literature file back from the marketing department directory to the exercise files directory, which is the current working directory.
>
> **[3:19](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=199)** To do that I'll write MV space departments, marketing literature dot TXT space, and then a single period.
>
> **[3:31](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=211)** Taking a look at the contents of this directory, I can see that the file is where I expected.
>
> **[3:37](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=217)** I'll clear the screen.
>
> **[3:40](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=220)** We can also move copy and delete more than one thing at a time.
>
> **[3:43](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=223)** And one of the ways we can do that is with what are called wildcards.
>
> **[3:47](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=227)** Wildcards are characters that stand for or represent patterns in text.
>
> **[3:52](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=232)** We'll see more about patterns in texts later.
>
> **[3:54](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=234)** So I want to introduce you to the two most common wildcards here briefly.
>
> **[3:58](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=238)** There's star or asterisk and question mark.
>
> **[4:02](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=242)** Star stands for any number of characters and question mark stands for one character.
>
> **[4:07](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=247)** Let's take a look at how these work with the move command.
>
> **[4:10](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=250)** Let's say I want to move all the files with the extension dot TXT to the marketing directory.
>
> **[4:15](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=255)** Let's take a look at the files we have.
>
> **[4:17](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=257)** There's dupes, literature, poems, and simple data dot TXT.
>
> **[4:22](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=262)** Instead of typing out all these names as individual arguments, I can write MV, asterisk dot TXT, meaning anything followed by dot TXT, two departments slash marketing, and then listing that directory, I can see that those four files have been moved.
>
> **[4:44](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=284)** Let's move in the back.
>
> **[4:46](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=286)** I know that the only thing in the marketing folder are my text files, so let's use the wildcard a little bit differently.
>
> **[4:52](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=292)** If I don't specify a file extension or any other part of a file name and only use asterisk by itself, it represents all of the files in the given directory.
>
> **[5:01](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=301)** I'll write MV space departments slash marketing slash asterisk space period, to move all the files in that marketing directory back to my current working directory, which is represented by the single period character.
>
> **[5:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=316)** I'll list this current folder and I can see that my files are back.
>
> **[5:20](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=320)** Next, let's take a look at how to delete or remove files using the RM command.
>
> **[5:25](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=325)** First, let's get rid of this literature dot TXT file because it's a duplicate of the poems file.
>
> **[5:30](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=330)** To do that, I'll write RM space literature dot TXT.
>
> **[5:37](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=337)** And if I list my directory again, I can see that the literature file has been deleted.
>
> **[5:42](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=342)** It's important to keep in mind that unlike in most graphical file browsers, there's not a trash can or recycle bin for deleted files here at the command line.
>
> **[5:50](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=350)** There's no undo here, that file is gone.
>
> **[5:53](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=353)** Well, there are specialized tools that could retrieve it, but that's a focus for another course.
>
> **[5:57](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=357)** For our practical purposes here that file is no more.
>
> **[6:01](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=361)** We still haven't seen how to use the question mark wildcard, so let's make a few more copies of the poems file.
>
> **[6:07](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=367)** To do that, I'll write CP space poems dot TXT, space poems three dot TXT, and then I'll use the up arrow to retrieve that command and create another copy called poems four dot TXT.
>
> **[6:20](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=380)** I'll list the directory and there they are.
>
> **[6:23](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=383)** Now we'll use that question to mark wildcard to delete them.
>
> **[6:26](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=386)** I'll write RM poems question mark dot TXT.
>
> **[6:31](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=391)** This doesn't mean delete poems like we're not quite sure, but it means delete files called poems with only one character afterward, which in our case would be poems three and poems four, but not the original poems dot TXT.
>
> **[6:45](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=405)** I'll list the directory again and we see that we've deleted two files with one command, but the original poems file is still there.
>
> **[6:53](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=413)** I'll clear the screen again.
>
> **[6:56](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=416)** The RM command has some options that are quite useful, and one of them makes RM act recursively.
>
> **[7:02](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=422)** Recursion tells the RM command to go into a structure of directories and walk through it, performing an action on each directory before it moves up the tree.
>
> **[7:10](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=430)** Let's try to delete the customer service directory structure from our department's directory.
>
> **[7:15](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=435)** If I write our RM space departments slash customer service, I see an error.
>
> **[7:20](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=440)** RM is complaining that what I've specified is a directory.
>
> **[7:24](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=444)** Let's rewrite this command to act recursively and to do that, I'll write RM dash R departments customer service.
>
> **[7:33](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=453)** Now, RM will take care of everything, deleting files and directories, as it moves through the directory structure.
>
> **[7:39](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=459)** I encourage you to continue exploring and practicing with these commands but remember to be careful.
>
> **[7:44](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=464)** There's no safety net for removing files using the RM command.
>
> **[7:48](https://www.linkedin.com/learning/learning-linux-command-line-2023/copy-move-and-delete-files-and-directories?u=76281980&t=468)** So keep your exploration inside the exercise files folder or another safe place for now.

> [!info]- Semantic Content
>
> **CLI Commands:** rm (11), cp (6), mv (6), ls (3), make (2)
> **Code Keywords:** let (13), delete (7), case, (1), continue (1)
> **Env Vars:** txt (22)
> **Tools:** command line (4)
> **Definitions:** stands for (2), is a  (1)
> **Exercise Files:** exercise files (2)
> **Warnings:** keep in mind (1), be careful (1)
> **Analogies:** for example (1)

#### Find files from the command line
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-files-from-the-command-line?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-files-from-the-command-line?u=76281980&t=0)** - [Instructor] We've been working with our exercise files, which is a limited set of files we can explore pretty easily.
>
> **[0:05](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-files-from-the-command-line?u=76281980&t=5)** But sometimes we'll need to ask the system to look for a file if we don't know where it is.
>
> **[0:10](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-files-from-the-command-line?u=76281980&t=10)** For that, we can use the find command.
>
> **[0:13](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-files-from-the-command-line?u=76281980&t=13)** Find has a lot of options, which are worth exploring as we build our command line skills.
>
> **[0:17](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-files-from-the-command-line?u=76281980&t=17)** For now, we'll take a look at basic usage.
>
> **[0:20](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-files-from-the-command-line?u=76281980&t=20)** To use find, I'll type find, and then provide the location or the scope of there I want to search.
>
> **[0:26](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-files-from-the-command-line?u=76281980&t=26)** I'll use the dot or period character for the current working directory, which is my exercise files, and then I'll type space and add -name, which is the test I'm using to match files.
>
> **[0:36](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-files-from-the-command-line?u=76281980&t=36)** I want to match files based on their name.
>
> **[0:39](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-files-from-the-command-line?u=76281980&t=39)** There are other options, like size, date and so forth but I find that I use name the most.
>
> **[0:44](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-files-from-the-command-line?u=76281980&t=44)** Then I'll put a matching pattern for what I'm looking for.
>
> **[0:47](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-files-from-the-command-line?u=76281980&t=47)** I'll put poe* in double quotes.
>
> **[0:50](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-files-from-the-command-line?u=76281980&t=50)** The asterisk wildcard will match any number of characters.
>
> **[0:54](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-files-from-the-command-line?u=76281980&t=54)** This should find our poems.txt file.
>
> **[0:56](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-files-from-the-command-line?u=76281980&t=56)** And when I run the command, sure enough, it did.
>
> **[1:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-files-from-the-command-line?u=76281980&t=60)** Let's try another search.
>
> **[1:01](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-files-from-the-command-line?u=76281980&t=61)** I'll write find space period space -name, space, quote, do*, end quote.
>
> **[1:11](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-files-from-the-command-line?u=76281980&t=71)** This finds a directory called documents inside finance, inside departments.
>
> **[1:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-files-from-the-command-line?u=76281980&t=76)** Let's find anything with a name starting with d.
>
> **[1:20](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-files-from-the-command-line?u=76281980&t=80)** And here are four things whose names start with the letter D.
>
> **[1:23](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-files-from-the-command-line?u=76281980&t=83)** Changing the search term to *d* will find everything that has a d in the name, regardless of how many characters come before or after it.
>
> **[1:31](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-files-from-the-command-line?u=76281980&t=91)** And again, there are more results.
>
> **[1:34](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-files-from-the-command-line?u=76281980&t=94)** We can change that period to another folder to search within a different path if we have permission to do so.
>
> **[1:40](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-files-from-the-command-line?u=76281980&t=100)** I'll write find ~ for the home directory /Documents, space -name, space, double quote, *d* double quote, this tells find to look in the Documents folder rather than just the Exercise Files folder.
>
> **[1:56](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-files-from-the-command-line?u=76281980&t=116)** And it's found the same items but this time provided me their absolute paths.
>
> **[2:01](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-files-from-the-command-line?u=76281980&t=121)** Find is a really helpful command to know about as we explore our system.
>
> **[2:04](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-files-from-the-command-line?u=76281980&t=124)** I encourage you to look at the man pages for the find command, and to practice using it to become more familiar.

> [!info]- Semantic Content
>
> **CLI Commands:** find (13)
> **Code Keywords:** let (2), for. (1)
> **Exercise Files:** exercise files (3)
> **Definitions:** is a  (2)
> **File Paths:** poems.txt (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)

#### Understand user roles and sudo
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=0)** - [Narrator] Modern Linux is a multi-user environment.
>
> **[0:03](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=3)** On older systems, and on single user systems, there's only one user, or rather there isn't really the concept of users.
>
> **[0:10](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=10)** Whoever uses the computer is the system administrator, and they can do whatever they want.
>
> **[0:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=16)** On a multi-user system, I can have a user, you can have a user and our files are kept separate in our individual home directories.
>
> **[0:23](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=23)** We can create files that only one or another user can access.
>
> **[0:27](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=27)** At the command line, we can switch between users with the SU command, which is variously referred to as set user, switch user or substitute user.
>
> **[0:37](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=37)** To use SU, we write that command, followed by the name of the user we want to switch to, and then we'll need to provide the password for that user.
>
> **[0:44](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=44)** One of the most common uses for switching users at the command line is to do some system administration tasks.
>
> **[0:51](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=51)** There are two basic user roles on the Linux system, Normal Users and the Superuser.
>
> **[0:55](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=55)** The difference is one of privilege.
>
> **[0:59](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=59)** A Normal User can modify and create, delete, and move their own files, but they can't make system-wide configuration changes, they can't install software, they can't make changes to system files and they can't change other users' files.
>
> **[1:12](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=72)** The Superuser, which is called Root, can make changes to the system.
>
> **[1:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=76)** It can install software, it can start and stop services, and can perform other tasks that affect how the system overall operates.
>
> **[1:24](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=84)** Because of this, it's uncommon and really bad practice to log into the Root user directly to do normal work, doing so is just too risky.
>
> **[1:33](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=93)** In fact, on many systems, the Root user is actually disabled, and can't be logged into directly.
>
> **[1:39](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=99)** So in order to allow changes to be made to the system, normal users can be granted the ability to temporarily use Root's power, through a command called sudo.
>
> **[1:48](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=108)** The command is spelled S U D O, and is commonly pronounced sudo or sudu.
>
> **[1:53](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=113)** We only want to borrow Root's power when we really need it.
>
> **[1:56](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=116)** And certain users can do that, if they're indicated as administrative users.
>
> **[2:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=120)** Not all users can automatically use Superuser privileges, but the one we set up to experiment with here has that privilege.
>
> **[2:08](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=128)** Let's take a look at using the Superuser privileges.
>
> **[2:11](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=131)** I'll try to see what's inside Root's home folder, which is located at the root of the drive.
>
> **[2:15](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=135)** These are two different meanings of the word root, which can be a little confusing.
>
> **[2:19](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=139)** When we're talking about the file system, the root is the highest level of the organizational structure, the leftmost slash in a file path.
>
> **[2:26](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=146)** When we're talking about access and users, Root is the Superuser.
>
> **[2:31](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=151)** I'll type ls /root.
>
> **[2:33](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=153)** And I'll see that my user is denied permission.
>
> **[2:36](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=156)** So I'm going to need to use the sudo command to gain Root's privileges to see inside there.
>
> **[2:41](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=161)** sudo tells the system to run whatever argument comes after it as a command, with Superuser privileges instead of with the Normal User's privileges.
>
> **[2:50](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=170)** The first time a user uses sudo, they'll see a little note.
>
> **[2:53](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=173)** This note reminds them that using sudo is a big step.
>
> **[2:56](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=176)** It asks them to respect the privacy of others, because with sudo, administrative users can browse other users' private files.
>
> **[3:03](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=183)** It reminds them to think before they type.
>
> **[3:05](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=185)** There's no undo on deleting files or changing system files.
>
> **[3:09](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=189)** What users do as Root is final, no refunds, no going back.
>
> **[3:13](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=193)** And finally, it reminds them that with great power comes great responsibility.
>
> **[3:17](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=197)** We can really mess up a system doing the wrong thing as Root, but that's what makes it so powerful.
>
> **[3:21](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=201)** We can make it do exactly what we want to.
>
> **[3:24](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=204)** A user will only see this warning dialogue once, And the next time they used sudo, it won't show up.
>
> **[3:30](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=210)** So if I write sudo ls /root and press enter, I'll be prompted to type in my user account password.
>
> **[3:37](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=217)** I can take this action because my user is allowed to use Superuser privileges.
>
> **[3:41](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=221)** During the setup process for this system, my user account was given administrative privileges.
>
> **[3:46](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=226)** And if you followed along with me, yours should have the same privilege.
>
> **[3:50](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=230)** Notice that as I type my password, nothing shows up in the password prompt on the screen.
>
> **[3:54](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=234)** It looks broken, but it's not.
>
> **[3:56](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=236)** This is a common way that a command line system will represent typing in a password.
>
> **[4:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=240)** It doesn't show what characters I typed for the obvious reason that my password should remain secret, but it also doesn't show any placeholder characters, like an asterisk or a dot or anything like that, so that people looking over my shoulder can't guess my password based on the number of characters they see.
>
> **[4:15](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=255)** So we have to type the password without any feedback.
>
> **[4:19](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=259)** If we think we might've mistyped, we can backspace a lot, to make sure that the password is erased, and try again.
>
> **[4:27](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=267)** We'll get three chances to type our password correctly, before the command will fail.
>
> **[4:31](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=271)** I'm pretty sure I typed my password correctly this time, So we'll press enter.
>
> **[4:35](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=275)** Ah, good.
>
> **[4:37](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=277)** Looks like it was correct.
>
> **[4:38](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=278)** And now I can see the contents of that Root directory.
>
> **[4:40](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=280)** In this case, it's just one item called snap.
>
> **[4:43](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=283)** If you're using a different distribution, this directory might not have anything in it.
>
> **[4:48](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=288)** There's a grace period, where we can use sudo privileges again within a few minutes, and it won't ask for our password.
>
> **[4:55](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=295)** So if I recall that previous command, sudo ls /root, and run that, I'm not prompted for the password.
>
> **[5:03](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=303)** When we're done using Root's privileges through sudo, it's a good idea to type sudo -k to give up those privileges, meaning we'll need to type our password in again the next time we use the command.
>
> **[5:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=316)** This privilege we're using will expire after a little bit though too.
>
> **[5:20](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=320)** Not having to type our password every time we use sudo is a convenience.
>
> **[5:25](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=325)** If for some reason we're doing a whole lot of work as the Superuser, we can fully switch over to using the Root user.
>
> **[5:29](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=329)** To do that we'll type sudo -s to log into the Root shell.
>
> **[5:35](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=335)** And I'll need to type in my user's password.
>
> **[5:39](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=339)** And you'll notice when we switch over, the prompt changes a little bit.
>
> **[5:43](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=343)** When we were a normal user, the end of the prompt was a dollar sign, but now it's a pound sign or a number sign.
>
> **[5:51](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=351)** Of course, the username over here also changed to Root, but the prompt changing away from the dollar sign is another visual cue to remind you that you're working as Root.
>
> **[5:59](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-user-roles-and-sudo?u=76281980&t=359)** To switch back to my user, I'll type exit.

> [!info]- Semantic Content
>
> **CLI Commands:** sudo (15), make (5), ls (3), snap (1)
> **Code Keywords:** switch (6), delete (1), this, (1), let (1), private (1)
> **Definitions:** is a  (4), is called (1)
> **Prerequisites:** install (2), set up (1), setup (1)
> **Tools:** command line (3)
> **UI Navigation:** switch to (1)
> **Best Practices:** bad practice (1)
> **Warnings:** warning (1)

#### Understand file permissions
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=0)** - [Instructor] File permissions are the way we tell the system which users and groups of users are allowed to access any given file and in what ways.
>
> **[0:08](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=8)** When a user tries to access a file, the system consults the permission mode of a file and only allows the user access if they're permitted to have it.
>
> **[0:15](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=15)** At first look, file permissions can seem rather cryptic.
>
> **[0:19](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=19)** We've seen them before when listing files in a directory, but it's not immediately clear what they mean.
>
> **[0:24](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=24)** rwx or r-xr-x might not make any sense now, but it will soon.
>
> **[0:30](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=30)** The sequence of letters, breaks down into three sections.
>
> **[0:33](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=33)** The first section represents the user designated as the owner of the file.
>
> **[0:38](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=38)** The second section of three letters represents a group, a collection of users for whom we can define specific access to the file.
>
> **[0:45](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=45)** And the third section represents the access to the file for all other users who are not the files owner or who are not in the group designated in the group section.
>
> **[0:54](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=54)** Each of the sections of three characters breaks down into three individual letters, which stand for read, write and execute.
>
> **[1:02](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=62)** Read means that someone can see the contents of a file, but not modify it.
>
> **[1:06](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=66)** Write, means that someone can make changes to a file, but not read the contents.
>
> **[1:10](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=70)** And execute, means that someone can run the file.
>
> **[1:13](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=73)** For example, a program or script without loading it into another program first.
>
> **[1:18](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=78)** There are a couple of other letters that we may see in here, but r w and x are the most common and we'll take care of what we need to do for now.
>
> **[1:26](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=86)** We can change the permissions of a file using the chmod command.
>
> **[1:30](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=90)** This command modifies the permission mode string.
>
> **[1:32](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=92)** The string of letters we just saw.
>
> **[1:34](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=94)** We can also change a files owner and group with two other commands, chown and chgrp.
>
> **[1:40](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=100)** The permission mode bits on a file though when we set with chmod can be modified in two ways.
>
> **[1:45](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=105)** The first is to use an octal notation, which uses three values to represent, read, write, and execute.
>
> **[1:51](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=111)** There's another notation with another digit in front, but that's more advanced than we need to get into here.
>
> **[1:57](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=117)** The second way is called a symbolic notation, which uses a shorthand for user, group, others and all.
>
> **[2:03](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=123)** An operator and a list of permissions to change.
>
> **[2:06](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=126)** We'll take a look at both starting with octal notation.
>
> **[2:09](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=129)** You may have seen commands like chmod 777 chmod 644 and things like that.
>
> **[2:15](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=135)** The way we arrive at those numbers is by assigning read, write and execute each a different value, four two and one.
>
> **[2:22](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=142)** That makes it easy to represent various states of these three values with just one digit.
>
> **[2:27](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=147)** So if my user can read, write and execute, we add all those values together and come up with seven, four plus two plus one.
>
> **[2:34](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=154)** If a files group can only read and execute, that comes out to five, four plus one.
>
> **[2:40](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=160)** So the resulting permission string for this particular set of conditions would look like this, rwxr-xr-- And as the result of the command chmod 754.
>
> **[2:53](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=173)** With this system, and a bit of very basic math it's impossible to be ambiguous about the permissions that the user group or others have.
>
> **[3:01](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=181)** You can either remember the system that provides the numbers or you can memorize the modes explicitly.
>
> **[3:06](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=186)** Here's a table of all possible modes for a single set of permissions.
>
> **[3:10](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=190)** In most cases, we'll be working with just a few common permission modes.
>
> **[3:14](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=194)** Things like 644 and 755.
>
> **[3:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=196)** So we don't need to memorize every combination.
>
> **[3:19](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=199)** Combinations like 153 and 047 are possible to express.
>
> **[3:24](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=204)** Thanks to the way the system of representing values is designed, but they're pretty bizarre access requirements.
>
> **[3:29](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=209)** And aren't something we'll ever really need to use.
>
> **[3:32](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=212)** The symbolic way of representing permissions is a little bit more approachable I think.
>
> **[3:36](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=216)** Because instead of setting numbers for each value, you can add or remove permission by letter.
>
> **[3:41](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=221)** User is represented by the letter u, group by g, others by o and changing all of the values is represented by a.
>
> **[3:49](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=229)** If you leave off one of these prefixes chmod applies your change to all values.
>
> **[3:54](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=234)** There are three operators we can use too.
>
> **[3:57](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=237)** Plus adds, whichever permission you specify to what's already there.
>
> **[4:01](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=241)** Minus removes from whatever's there and equals resets the permissions to only whatever value you specify.
>
> **[4:08](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=248)** So for example, to set the owner or user permissions for a file to read, write and execute, I would use chmod u plus rwx.
>
> **[4:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=256)** To set my group permissions to only read, I would use chmod g equals r.
>
> **[4:22](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=262)** And to remove, read, write and execute from others.
>
> **[4:25](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=265)** I would write chmod o minus rwx.
>
> **[4:28](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=268)** Or if I wanted to set the same mode for all sections for user group and other, I would use 'a'.
>
> **[4:34](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=274)** For example here, I'm setting all equal to read, write, and execute would be a equals rwx.
>
> **[4:40](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=280)** We can line up the octal and symbolic values and see what the results are.
>
> **[4:44](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=284)** In octal 777 is the same as saying a equals rwx.
>
> **[4:50](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=290)** 755 is the same as saying u equals rwx.
>
> **[4:53](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=293)** g equals rx, o equals rx.
>
> **[4:56](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=296)** You can see the symbolic notation is a little bit longer, but it contains more information and context.
>
> **[5:01](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=301)** So I think it's a little easier to work with.
>
> **[5:03](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=303)** The nice thing about symbolic notation is that it's a little easier to make changes since you're specifying what to change rather than what octal value to use.
>
> **[5:12](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=312)** Using octal notation is kind of like using the equals operator in symbolic notation all the time.
>
> **[5:17](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=317)** Saying whatever permission mode was there before, now it's this value rather than add, read, or remove execute.
>
> **[5:25](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=325)** Here's a few before and after examples of changing permissions with symbolic notation.
>
> **[5:29](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=329)** It's not something to memorize per se.
>
> **[5:31](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=331)** It's just to give you a sense of how things change.
>
> **[5:34](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=334)** We can see that in the first row, adding execute without specifying a prefix, adds an x in all three places.
>
> **[5:41](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=341)** In the second row, adding write permission to the group and read permission to others, changes the original pretty substantially and so forth.
>
> **[5:48](https://www.linkedin.com/learning/learning-linux-command-line-2023/understand-file-permissions?u=76281980&t=348)** Writing out modes like this can help you practice, but keep in mind that we'll only really work with a few common modes, especially when we get started.

> [!info]- Semantic Content
>
> **CLI Commands:** chmod (9), make (3), chown (1)
> **Definitions:** means that (3), is a  (2), is called (1)
> **Analogies:** for example (3), kind of like (1)
> **Code Keywords:** this, (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Modify file permissions
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=0)** - [Instructor] Let's practice changing permissions on files.
>
> **[0:03](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=3)** I have a small batch script here.
>
> **[0:06](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=6)** Called test.sh.
>
> **[0:09](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=9)** Which is a simple program that just prints out a line of text when we run it.
>
> **[0:13](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=13)** To run this, I can treat it like a command using a period and a slash in front of it.
>
> **[0:17](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=17)** The period refers to the current working directory and the slash it tells the shell to look inside there to find this program.
>
> **[0:24](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=24)** Doing this, the shell will run or execute my program.
>
> **[0:27](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=27)** An executable file means the file can be run as a program on its own without having to be loaded into another program first.
>
> **[0:34](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=34)** Again, this file is just an example.
>
> **[0:36](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=36)** And if you're curious to learn more about writing programs with Bash, take a look at learning Bash scripting here on LinkedIn Learning.
>
> **[0:43](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=43)** Let's take a look at the permissions on this file.
>
> **[0:46](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=46)** I'll write ls -l test.h.
>
> **[0:50](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=50)** Here in the permission mode string, I can see that my user can read, write and execute.
>
> **[0:56](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=56)** Anyone in the files group can read and execute.
>
> **[1:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=60)** And others can read and execute also.
>
> **[1:03](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=63)** Pop quiz.
>
> **[1:04](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=64)** What is that set of permissions expressed in octal?
>
> **[1:07](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=67)** Remember, it's four for read, two for write, one for execute.
>
> **[1:11](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=71)** The mode is 755.
>
> **[1:13](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=73)** Seven for the user and five for the other two.
>
> **[1:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=76)** You can verify this with stat test.sh.
>
> **[1:22](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=82)** And there it is.
>
> **[1:24](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=84)** Let's take away the execute bit for all the users.
>
> **[1:27](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=87)** Take a moment and think about how you would do this in octal notation and in symbolic notation.
>
> **[1:33](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=93)** To do this in octal notation, I'll type chmod 644 test.sh.
>
> **[1:40](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=100)** Removing one from each value because the value one represents execute.
>
> **[1:46](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=106)** Or in symbolic notation, it would be chmod a minus x or just chmod minus x.
>
> **[1:53](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=113)** Because leaving off the prefix defaults to applying to all sections of the permission string.
>
> **[2:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=120)** Now, if I try to run the program, I'm denied permission.
>
> **[2:04](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=124)** But I can still run it with another program, the Bash interpreter.
>
> **[2:10](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=130)** That's because the other program is executing the code.
>
> **[2:13](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=133)** It's not running all by itself.
>
> **[2:15](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=135)** At this point, I may not be able to run the program directly, but I can still read the file.
>
> **[2:19](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=139)** Let's take a look at the file with cat test.sh.
>
> **[2:23](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=143)** The command, cat is often used to output the contents of a file.
>
> **[2:27](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=147)** We'll see more about that later.
>
> **[2:30](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=150)** Here's my very simple program.
>
> **[2:32](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=152)** I can see the contents because my user is allowed read permission on the file.
>
> **[2:36](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=156)** I'll clear the screen.
>
> **[2:38](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=158)** Now let's take away read permission for just the user.
>
> **[2:42](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=162)** Think about how we do that in octal notation and in symbolic notation.
>
> **[2:47](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=167)** This one's pretty straightforward in symbolic notation.
>
> **[2:49](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=169)** That would be chmod u minus r test.sh.
>
> **[2:54](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=174)** But in octal, it's a little trickier because we have to think about the values we're not changing as well as the one are.
>
> **[3:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=180)** In octal, the command would be chmod 244 test.sh.
>
> **[3:07](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=187)** The two represents only having write permission.
>
> **[3:10](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=190)** 244 is a pretty odd permission mod.
>
> **[3:13](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=193)** Not one we'll use much, but as an example, it does the job.
>
> **[3:18](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=198)** Now, taking a look at the file again with cat test.sh, I'm denied read permission.
>
> **[3:24](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=204)** Let's put the file back to how it was with chmod 755 test.sh.
>
> **[3:33](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=213)** And we can see that we can run the file and also look at its contents.
>
> **[3:39](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=219)** When a user creates a file in their home directory, it starts out with a permission mode that's defined by the system.
>
> **[3:45](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=225)** On distributions like Ubuntu desktop and others, where it's likely that users might collaborate with each other's files, the permissions are set to allow users to view or sometimes to view and edit files in other user's home directories.
>
> **[3:57](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=237)** And on other distributions like server distributions, sometimes, the permissions are set so that only the user can view and modify files in their own home directory.
>
> **[4:06](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=246)** There's no single standard permission node for files in the home directory, but they're often 755, 644 or 700.
>
> **[4:13](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=253)** Depending on what the Linux distribution you're using has chosen.
>
> **[4:17](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=257)** We can explore how these permissions are set on our own system by creating a blank file with a touch command.
>
> **[4:23](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=263)** I'll write, touch newfile.
>
> **[4:26](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=266)** And with ls -l or stat, we can see the permissions.
>
> **[4:34](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=274)** In my case, it's read and write for user, read and write for group and read for others.
>
> **[4:39](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=279)** Or in 664.
>
> **[4:42](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=282)** This means that if I needed to make a program that's executable, I'd need to set the executable bit myself with chmod plus x.
>
> **[4:50](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=290)** There are two other aspects of permission settings I want to talk about.
>
> **[4:53](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=293)** File ownership and group ownership.
>
> **[4:57](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=297)** In the long output of ls, there's two columns that show the user and group ownership for each file.
>
> **[5:03](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=303)** The user here is the user we're talking about in the first set of permissions.
>
> **[5:06](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=306)** And the group is the group from the second set of three letters in the permission mode string.
>
> **[5:11](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=311)** I'll clear the screen again and then let's take another look at test.sh.
>
> **[5:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=316)** Recall that the user permission is set to read, write, execute, and the group is set to read and execute.
>
> **[5:22](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=322)** It can verify that I can write to the file by opening it up in a text editor and making a change.
>
> **[5:27](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=327)** I'll write nano test.sh to edit the file.
>
> **[5:32](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=332)** I'll just add another line here with a comment.
>
> **[5:36](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=336)** Don't worry about this right now.
>
> **[5:37](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=337)** We'll get into using nano in more detail later.
>
> **[5:41](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=341)** I'll save the file with Control + O and close the editor with Control + X.
>
> **[5:46](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=346)** If I change the user who owns the file, my user won't be the owner anymore.
>
> **[5:50](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=350)** So the first three permission bits won't apply to my user.
>
> **[5:54](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=354)** All right, so you do chown for change ownership, root to change the ownership to the root user and test.sh.
>
> **[6:03](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=363)** I have to use sudo because I need roots privileges to set something to root ownership.
>
> **[6:09](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=369)** And if I try to edit the file again with nano test.sh, I see a warning that I'm working on a read-only file.
>
> **[6:18](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=378)** I can't write to the file anymore because my user isn't the owner.
>
> **[6:21](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=381)** I'm only accessing the file through the group permissions, which are set to deny the group write access.
>
> **[6:29](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=389)** If I take a look at the file with ls, I can see that the owner has changed to root.
>
> **[6:35](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=395)** Now let's take control of the file again.
>
> **[6:38](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=398)** To do that, I'll side sudo chown, my username and test.sh.
>
> **[6:44](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=404)** Now, I'd be able to edit the file again.
>
> **[6:47](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=407)** Changing groups works the same way but using the ch group command instead of chown.
>
> **[6:52](https://www.linkedin.com/learning/learning-linux-command-line-2023/modify-file-permissions?u=76281980&t=412)** As we're getting started with the command line, we won't be changing permissions too much, but once we start working with web servers and other processes that need to access files and secure ways, we'll need to think about and change permissions.

> [!info]- Semantic Content
>
> **CLI Commands:** chmod (7), ls (4), cat (3), chown (3), sudo (2)
> **File Paths:** test.sh (13), test.h (1)
> **Code Keywords:** let (8), this, (2), case, (1)
> **Tools:** bash (3), command line (1)
> **Definitions:** is a  (2), refers to (1), means that (1)
> **Warnings:** warning (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)

#### Create hard and symbolic links
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=0)** - [Instructor] I want to take a moment to talk about a special kind of file on a Linux system.
>
> **[0:04](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=4)** A type of file called a link.
>
> **[0:06](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=6)** Links are files that reference other files.
>
> **[0:09](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=9)** And they're used to avoid having multiple copies of the same file in different places.
>
> **[0:13](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=13)** We keep one file in one location and then add a little pointer or link to other places where we want the file to appear.
>
> **[0:20](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=20)** As we're learning about the command line, we may not have a need to create links, but it's important to know what they are when we come across them.
>
> **[0:27](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=27)** There are two kinds of links, hard links and soft or symbolic links.
>
> **[0:31](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=31)** Hard links, point to specific data on the disk, and symbolic links point to a file on a disk.
>
> **[0:37](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=37)** It's kind of a subtle difference, but it changes how the resulting links work.
>
> **[0:41](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=41)** I'll show you how to create both kinds.
>
> **[0:42](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=42)** And if you want to explore the difference in more detail, take a look at my essential commands course for a more technical look.
>
> **[0:49](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=49)** Let's take a look at soft links, also called symbolic links or symlinks first.
>
> **[0:54](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=54)** I can create a symbolic link with the ln command and the -s option.
>
> **[0:59](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=59)** Then I can give it the name of the source file, the file that I want to make a link to, and then the name of the link I want to create.
>
> **[1:06](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=66)** I'll write ln -s poems.txt writing.txt.
>
> **[1:13](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=73)** And then a list the directory.
>
> **[1:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=76)** Here, I can see that the writing.txt file is really a link to the poem's.txt file file.
>
> **[1:23](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=83)** I can tell this because in the area where the file name shows up, I can see the pointer to the other file.
>
> **[1:29](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=89)** I can also tell this entry as a link because in the first column of the output, the character is an L and for normal files, it's a dash or empty.
>
> **[1:39](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=99)** And if I take a look at the contents of writing.txt, I see the original file.
>
> **[1:45](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=105)** And if I were to edit the writing.txt file, I'd be editing the original as well.
>
> **[1:50](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=110)** Writing.txt is a file, but it's just a pointer to the original one.
>
> **[1:55](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=115)** It's important to know that this link we created is relative.
>
> **[1:58](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=118)** That is if we move this link somewhere else on the file system, the system won't be able to reference the original file anymore.
>
> **[2:05](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=125)** And if we move the original file, the link will break as well.
>
> **[2:08](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=128)** Because the system will be told to look at that particular path for the linked file, and it won't be there anymore.
>
> **[2:13](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=133)** We can create a symlink using an absolute path.
>
> **[2:15](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=135)** And that solves the first problem.
>
> **[2:17](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=137)** A symlink with an absolute path can be moved anywhere in the system, and that link will continue to work.
>
> **[2:23](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=143)** But if we move the original file, even a symlink with an absolute path will break because that path will no longer be valid.
>
> **[2:30](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=150)** We can create a hard link by leaving off the dash s option.
>
> **[2:34](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=154)** I'll write ln poems.txt words.txt.
>
> **[2:39](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=159)** And again I'll list the directory.
>
> **[2:43](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=163)** A hard link appears to the user and the system to be a regular file in a file listing.
>
> **[2:48](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=168)** But it's also just a pointer to the original file, or to be more specific, it's a pointer to the actual data of a file on the disk.
>
> **[2:55](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=175)** Every file we have is a hard link to the data that makes up the file.
>
> **[2:59](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=179)** So creating another hard link to particular data on the disk doesn't duplicate that data.
>
> **[3:04](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=184)** It's just like a room with two doors.
>
> **[3:06](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=186)** Whichever door you use to go in the room, you're still in the same room.
>
> **[3:10](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=190)** For this reason, hard links can be moved around the file system.
>
> **[3:13](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=193)** And it doesn't matter if what we think of as the original file is moved.
>
> **[3:17](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=197)** Hard links and soft links both have their uses.
>
> **[3:20](https://www.linkedin.com/learning/learning-linux-command-line-2023/create-hard-and-symbolic-links?u=76281980&t=200)** And as I mentioned earlier, if you want a more technical look at the difference between the kinds of links, check out my essential commands course.

> [!info]- Semantic Content
>
> **File Paths:** writing.txt (5), poems.txt (2), s.txt (1), words.txt (1)
> **Definitions:** is a  (2), is an  (1)
> **Code Keywords:** let (1), continue (1)
> **CLI Commands:** make (1)
> **Tools:** command line (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Fix broken syntax
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/challenge-fix-broken-syntax?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/challenge-fix-broken-syntax?u=76281980&t=0)** - [Instructor] Let's take a few moments to practice what we've learned so far.
>
> **[0:08](https://www.linkedin.com/learning/learning-linux-command-line-2023/challenge-fix-broken-syntax?u=76281980&t=8)** In this challenge, I'll give you a few commands that I'd like you to correct.
>
> **[0:12](https://www.linkedin.com/learning/learning-linux-command-line-2023/challenge-fix-broken-syntax?u=76281980&t=12)** Rewrite these commands to use valid syntax.
>
> **[0:15](https://www.linkedin.com/learning/learning-linux-command-line-2023/challenge-fix-broken-syntax?u=76281980&t=15)** And describe the reason each command is incorrect as presented.
>
> **[0:19](https://www.linkedin.com/learning/learning-linux-command-line-2023/challenge-fix-broken-syntax?u=76281980&t=19)** You may want to pause this video to keep the commands on screen.
>
> **[0:23](https://www.linkedin.com/learning/learning-linux-command-line-2023/challenge-fix-broken-syntax?u=76281980&t=23)** Take about five minutes for this brief challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Fix broken syntax
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-fix-broken-syntax?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-fix-broken-syntax?u=76281980&t=0)** (lively music)
>
> **[0:05](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-fix-broken-syntax?u=76281980&t=5)** - [Instructor] Let's take a look at the solutions to this challenge.
>
> **[0:08](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-fix-broken-syntax?u=76281980&t=8)** The first command CD ~/home/Scott is incorrect because it's unlikely that within my home folder, which is represented by the tilde there would be another path with the exact same path as my home folder.
>
> **[0:21](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-fix-broken-syntax?u=76281980&t=21)** So we can correct this command in two ways.
>
> **[0:23](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-fix-broken-syntax?u=76281980&t=23)** We can either turn it into just CD space tilde to move into my home directory, or we could present it as CD / home / Scott using the absolute path to my home directory.
>
> **[0:34](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-fix-broken-syntax?u=76281980&t=34)** The next question LS / home is incorrect because the LS command is capitalized.
>
> **[0:40](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-fix-broken-syntax?u=76281980&t=40)** You may have noticed so far that all of the commands that we've been using have been lowercase and that's because at the command line command names are case sensitive.
>
> **[0:48](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-fix-broken-syntax?u=76281980&t=48)** So we can correct this by using lowercase ls / home.
>
> **[0:52](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-fix-broken-syntax?u=76281980&t=52)** The third question, MV ~/log.tar.gz space home space Scott is incorrect because the move command only takes two arguments.
>
> **[1:02](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-fix-broken-syntax?u=76281980&t=62)** In this case, we're providing three.
>
> **[1:04](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-fix-broken-syntax?u=76281980&t=64)** We would need to convert the second two arguments into what looks like a path.
>
> **[1:08](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-fix-broken-syntax?u=76281980&t=68)** In this case, /home/Scott.
>
> **[1:11](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-fix-broken-syntax?u=76281980&t=71)** And the fourth question is missing an important component.
>
> **[1:14](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-fix-broken-syntax?u=76281980&t=74)** It's missing the optical representation that we'd like to apply to the permissions of that file.
>
> **[1:19](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-fix-broken-syntax?u=76281980&t=79)** So to fix it, we'd need to add that.
>
> **[1:21](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-fix-broken-syntax?u=76281980&t=81)** Here I'm showing 644, but we could use another mode as well.

> [!info]- Semantic Content
>
> **CLI Commands:** cd (3), ls (3), mv (1), tar (1)
> **Code Keywords:** case, (2), let (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively music) (1)

#### Challenge: Practice working with files
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/challenge-practice-working-with-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/challenge-practice-working-with-files?u=76281980&t=0)** (gentle upbeat music)
>
> **[0:04](https://www.linkedin.com/learning/learning-linux-command-line-2023/challenge-practice-working-with-files?u=76281980&t=4)** - [Instructor] Let's take some more time to practice what we've learned so far.
>
> **[0:08](https://www.linkedin.com/learning/learning-linux-command-line-2023/challenge-practice-working-with-files?u=76281980&t=8)** For this challenge, I'd like you to spend some time creating files, which you can do with the touch command, or you can make copies of existing files.
>
> **[0:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/challenge-practice-working-with-files?u=76281980&t=16)** Practice using links and creating directories to copy or move your copies of the exercise files.
>
> **[0:22](https://www.linkedin.com/learning/learning-linux-command-line-2023/challenge-practice-working-with-files?u=76281980&t=22)** Don't move the originals though, because we'll need them where they are for the rest of the course.
>
> **[0:27](https://www.linkedin.com/learning/learning-linux-command-line-2023/challenge-practice-working-with-files?u=76281980&t=27)** Take about 10 minutes to do this, so you can build your confidence, both working with files and avoiding files you don't want to change.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), this, (1)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (gentle upbeat music) (1)

#### Solution: Practice working with files
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-practice-working-with-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-practice-working-with-files?u=76281980&t=0)** - [Narrator] Because this challenge was so open-ended, I don't have a solution to show you.
>
> **[0:09](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-practice-working-with-files?u=76281980&t=9)** What's important here is that you had some time to work with files on the file system and practice using file management skills.
>
> **[0:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-practice-working-with-files?u=76281980&t=16)** The more we work with files and think about the directory structure they exist within, the more natural working with files with the command line will become.
>
> **[0:24](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-practice-working-with-files?u=76281980&t=24)** Be sure to take time as you learn to practice new skills and reinforce old ones.
>
> **[0:29](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-practice-working-with-files?u=76281980&t=29)** Practice makes us better, but we have to allow time for it.

> [!info]- Semantic Content
>
> **Tools:** command line (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Common Command-Line Tasks and Tools

> [[#Table of Contents|↑ Back to Table of Contents]]

#### The Unix philosophy
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-unix-philosophy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-unix-philosophy?u=76281980&t=0)** - [Instructor] As we start exploring command line tools, it's important to understand the principle behind many of the programs we'll be looking at.
>
> **[0:07](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-unix-philosophy?u=76281980&t=7)** That principle often called the UNIX Philosophy, says that a tool or program should do one thing and do it well.
>
> **[0:14](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-unix-philosophy?u=76281980&t=14)** In this case, doing something well means being a well-behaved citizen of the ecosystem of tools that operate using text interfaces, which means that the tool should expect to take in standard text from a file or stream and output text in a reasonable format once it's done processing or doing whatever action that particular tool does.
>
> **[0:32](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-unix-philosophy?u=76281980&t=32)** This philosophy suggests that we shouldn't have tools that try to do too much.
>
> **[0:37](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-unix-philosophy?u=76281980&t=37)** We don't want one single tool or program that reads files and separates the text into another file, and renames the file and compresses it into an archive when it's done or one that tries to do everything anyone could possibly want to do.
>
> **[0:49](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-unix-philosophy?u=76281980&t=49)** We want one tool to do each of those tasks so we can use those specialized tools in any way we want to.
>
> **[0:55](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-unix-philosophy?u=76281980&t=55)** Of course, there are applications that include many features, including the ones I've mentioned before and that's fine.
>
> **[1:01](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-unix-philosophy?u=76281980&t=61)** We often find those in graphical environments.
>
> **[1:03](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-unix-philosophy?u=76281980&t=63)** So those applications, aren't the ones we're talking about here.
>
> **[1:06](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-unix-philosophy?u=76281980&t=66)** What we are talking about, is the standard set of command line tools that can be configured to work together in an incredible number of ways.
>
> **[1:14](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-unix-philosophy?u=76281980&t=74)** We want to think of these tools, not as multifunction Swiss Army Knives, but as a well-stocked kitchen of chef's tools.
>
> **[1:21](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-unix-philosophy?u=76281980&t=81)** Sure, we can open a can with a little Swiss Army Knife attachment, or try to chop a tomato with a tiny blade but none of those multi-function tools does anything particularly well.
>
> **[1:31](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-unix-philosophy?u=76281980&t=91)** Certainly not well enough to prepare a meal we're proud of.
>
> **[1:34](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-unix-philosophy?u=76281980&t=94)** To get real work done, we want quality dedicated tools that can work together easily and can be used in different combinations to do whatever we need.
>
> **[1:43](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-unix-philosophy?u=76281980&t=103)** Think of an assembly line where one machine does one task and then passes the product on to the next specialized machine, rather than one single robot doing many different tasks on the same item.
>
> **[1:53](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-unix-philosophy?u=76281980&t=113)** Having separate dedicated tools allows us to pick appropriate tools from our toolbox to do exactly what we need to do.
>
> **[2:01](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-unix-philosophy?u=76281980&t=121)** We want to be able to incorporate the right tools into doing a task as flexibly as possible.
>
> **[2:06](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-unix-philosophy?u=76281980&t=126)** As we'll see in a little bit, this philosophy underlies a lot of how we'll work at the command line.
>
> **[2:11](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-unix-philosophy?u=76281980&t=131)** For example, we might use one program to read text from a file, then send that text to a program that filters certain text.
>
> **[2:17](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-unix-philosophy?u=76281980&t=137)** Then the output of that program gets processed so that it doesn't have duplicate lines and then the result will get written back to a file.
>
> **[2:24](https://www.linkedin.com/learning/learning-linux-command-line-2023/the-unix-philosophy?u=76281980&t=144)** Modularity and flexibility are features not limitations of working at the command line.

> [!info]- Semantic Content
>
> **Tools:** command line (4)
> **Code Keywords:** case, (1), function (1)
> **CLI Commands:** find (1)
> **Env Vars:** unix (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Use pipes to connect commands together
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/use-pipes-to-connect-commands-together?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/use-pipes-to-connect-commands-together?u=76281980&t=0)** - [Narrator] At the command line, we use pipes to take the output of one command and send it to another.
>
> **[0:05](https://www.linkedin.com/learning/learning-linux-command-line-2023/use-pipes-to-connect-commands-together?u=76281980&t=5)** We can think of commands as little processing units that do one particular thing and pipes as connections between those units.
>
> **[0:12](https://www.linkedin.com/learning/learning-linux-command-line-2023/use-pipes-to-connect-commands-together?u=76281980&t=12)** So for example, we can use pipes to take the output of the cat command, and then instead of displaying the text on the screen, pass the result to the sort command.
>
> **[0:21](https://www.linkedin.com/learning/learning-linux-command-line-2023/use-pipes-to-connect-commands-together?u=76281980&t=21)** And then if we wanted to, we could pass that output somewhere else and keep working on the contents of the users.TXT file step-by-step until we transform it in the way we want.
>
> **[0:31](https://www.linkedin.com/learning/learning-linux-command-line-2023/use-pipes-to-connect-commands-together?u=76281980&t=31)** This diagram is represented by this command or a set of commands.
>
> **[0:34](https://www.linkedin.com/learning/learning-linux-command-line-2023/use-pipes-to-connect-commands-together?u=76281980&t=34)** A set of commands, connected by pipes is often called a command to pipeline.
>
> **[0:39](https://www.linkedin.com/learning/learning-linux-command-line-2023/use-pipes-to-connect-commands-together?u=76281980&t=39)** The pipe character, which is represented as a vertical bar, or sometimes as a vertical bar with a little break in the middle is usually the shift character on the backslash key, which is found above enter or return on a US keyboard.
>
> **[0:51](https://www.linkedin.com/learning/learning-linux-command-line-2023/use-pipes-to-connect-commands-together?u=76281980&t=51)** If you're using a different keyboard, you may need to look around for the symbol.
>
> **[0:55](https://www.linkedin.com/learning/learning-linux-command-line-2023/use-pipes-to-connect-commands-together?u=76281980&t=55)** Searching on the internet should give you a good idea of where to find it on your keyboard.
>
> **[0:59](https://www.linkedin.com/learning/learning-linux-command-line-2023/use-pipes-to-connect-commands-together?u=76281980&t=59)** We type this character in between commands that we want to be piped together.
>
> **[1:04](https://www.linkedin.com/learning/learning-linux-command-line-2023/use-pipes-to-connect-commands-together?u=76281980&t=64)** Throughout the course, I'll put a space on either side of the pipe so it's easier to see, but it doesn't need to have spaces around it in order to work.
>
> **[1:12](https://www.linkedin.com/learning/learning-linux-command-line-2023/use-pipes-to-connect-commands-together?u=76281980&t=72)** Let's take a look at using pipes at the command line.
>
> **[1:15](https://www.linkedin.com/learning/learning-linux-command-line-2023/use-pipes-to-connect-commands-together?u=76281980&t=75)** To do this, I'd like to introduce a few more commands.
>
> **[1:18](https://www.linkedin.com/learning/learning-linux-command-line-2023/use-pipes-to-connect-commands-together?u=76281980&t=78)** The first is echo, which prints out whatever text you give it as an argument, for example, I'll write, echo, hello, and the echo command replies with the text that I've provided.
>
> **[1:31](https://www.linkedin.com/learning/learning-linux-command-line-2023/use-pipes-to-connect-commands-together?u=76281980&t=91)** Now let's write that command again and this time add a pipe character to send the output, not to the standard output or to the screen, but to the command WC for word count.
>
> **[1:42](https://www.linkedin.com/learning/learning-linux-command-line-2023/use-pipes-to-connect-commands-together?u=76281980&t=102)** All write, echo, hello, pipe to WC.
>
> **[1:45](https://www.linkedin.com/learning/learning-linux-command-line-2023/use-pipes-to-connect-commands-together?u=76281980&t=105)** And here, instead of the output from echo, we see the output of the WC program, responding to the input from the echo command.
>
> **[1:53](https://www.linkedin.com/learning/learning-linux-command-line-2023/use-pipes-to-connect-commands-together?u=76281980&t=113)** What WC is telling me here is that there's one line of text, one word and six characters.
>
> **[1:58](https://www.linkedin.com/learning/learning-linux-command-line-2023/use-pipes-to-connect-commands-together?u=76281980&t=118)** Let's change the output and see that change.
>
> **[2:03](https://www.linkedin.com/learning/learning-linux-command-line-2023/use-pipes-to-connect-commands-together?u=76281980&t=123)** I'll write, echo, hello world.
>
> **[2:06](https://www.linkedin.com/learning/learning-linux-command-line-2023/use-pipes-to-connect-commands-together?u=76281980&t=126)** From the command line piped to WC, that's one line, six words, 34 characters.
>
> **[2:12](https://www.linkedin.com/learning/learning-linux-command-line-2023/use-pipes-to-connect-commands-together?u=76281980&t=132)** If you're wondering what's up with the character count, that's a good question.
>
> **[2:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/use-pipes-to-connect-commands-together?u=76281980&t=136)** The word hello is five characters long, but WC is saying there are six characters.
>
> **[2:21](https://www.linkedin.com/learning/learning-linux-command-line-2023/use-pipes-to-connect-commands-together?u=76281980&t=141)** WC is counting and invisible character at the end of the string called a new line, in addition to the characters that we see, you can buy anything to anything else.
>
> **[2:30](https://www.linkedin.com/learning/learning-linux-command-line-2023/use-pipes-to-connect-commands-together?u=76281980&t=150)** And usually it'll do something.
>
> **[2:32](https://www.linkedin.com/learning/learning-linux-command-line-2023/use-pipes-to-connect-commands-together?u=76281980&t=152)** With most of the standard tools, it'll even do what you expect.
>
> **[2:36](https://www.linkedin.com/learning/learning-linux-command-line-2023/use-pipes-to-connect-commands-together?u=76281980&t=156)** When we're working at the command line, we won't always use pipes, but they're a powerful feature to be aware of.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), pass (2), this, (1), else. (1)
> **Tools:** command line (4)
> **CLI Commands:** cat (1), find (1)
> **Analogies:** for example (2)
> **File Paths:** users.txt (1)
> **Env Vars:** txt (1)
> **Warnings:** be aware (1)
> **Speakers:** - [narrator] (1)

#### View text files with cat, head, tail, and less
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=0)** - [Instructor] Because a lot of what we'll be working with at the command line involves text files or text output, it's important to have a few tools in our toolkit to view the contents of text files.
>
> **[0:10](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=10)** The first one I want to introduce is called cat and it's short for concatenate.
>
> **[0:14](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=14)** To concatenate means to stick two or more things together.
>
> **[0:17](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=17)** And the cat command can do that, but it's often just used to print the contents of a file to the screen.
>
> **[0:23](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=23)** It's also helpful to get the contents of a text file into a series of piped commands.
>
> **[0:28](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=28)** Depending on the operating system we're using, we'll have different files available to us.
>
> **[0:33](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=33)** Normally we'd use cat to look at a log file or something like that, but here I'll use some classic poems because I want you to be able to follow along with me exactly and not get tied up in the differences between Linux distributions at this point.
>
> **[0:46](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=46)** To list out the contents of a file, I'll write cat followed by the name of the file I want to read as an argument.
>
> **[0:54](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=54)** In this case, poems.txt, then I'll press enter, Because that file is longer than our screen is tall, we can't see the whole file at once in this terminal window.
>
> **[1:04](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=64)** We can scroll back up if we have a mouse, but there's some better ways of working with the output.
>
> **[1:10](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=70)** The head and tail commands let us see a limited number of lines from the beginning or the end of a file.
>
> **[1:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=76)** They work in the same way that cat does.
>
> **[1:18](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=78)** I'll clear the screen and then I'll write head poems.txt.
>
> **[1:23](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=83)** When I run that, I can see the first 10 lines of the text.
>
> **[1:28](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=88)** The same goes for tail, I'll write tail poems.txt and I can see the last 10 lines of the file.
>
> **[1:35](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=95)** Now I'll clear the screen again.
>
> **[1:39](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=99)** Head and tail both except the -n option for a particular number of lines to show.
>
> **[1:45](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=105)** For example, I'll write head -n5 poems.txt and I can see just the first five lines of the file.
>
> **[1:55](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=115)** And if I write tail -n3 poems.txt, I'll see the last three lines of the file.
>
> **[2:01](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=121)** Combining these with the cat command can make for some good practice using pipes, you can get a good sense of how the order of commands affects the output.
>
> **[2:09](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=129)** For example, I'll write cat poems.txt piped to cat -n.
>
> **[2:14](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=134)** With the cat command, the -n option adds a line number to each line of text.
>
> **[2:20](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=140)** Then, I'll add another pipe and send the output of that to tail -n5.
>
> **[2:26](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=146)** So there's three commands here and two pipes, the result of running that series of commands or that pipeline shows us that the original file has been piped into the cat -n command which numbered it.
>
> **[2:37](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=157)** Then tail showed us the last five lines of that.
>
> **[2:40](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=160)** I'll rewrite that line, still starting with cat poems.txt but I'll reverse the last two commands.
>
> **[2:48](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=168)** So I'll pipe this into tail -n5 and then into cat -n.
>
> **[2:58](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=178)** Now it's clear that the file was piped into tail first which presented the last five lines of the file.
>
> **[3:03](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=183)** Then those lines were numbered by cat -n.
>
> **[3:06](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=186)** That's just an example, but it's important to keep in mind that order matters with pipes.
>
> **[3:12](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=192)** I'll clear the screen again.
>
> **[3:14](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=194)** There's another command that's useful for looking at longer text files and it's called less.
>
> **[3:19](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=199)** We can use it by itself, passing a file name as an argument or we can pipe output to it.
>
> **[3:25](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=205)** Less takes text input and presents it page by page or screen by screen and gives us some controls to move around within the text.
>
> **[3:34](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=214)** I'll type less poems.txt and I see the text with a tiny bit of user interface here at the bottom of the screen.
>
> **[3:41](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=221)** I can scroll up and down with the arrow keys, go down a line at a time with enter, or go down a screen-full at a time with space bar.
>
> **[3:50](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=230)** I can navigate backwards and forwards with E, B, and F keys.
>
> **[3:54](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=234)** Do these commands sound familiar?
>
> **[3:56](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=236)** These are the same commands we used earlier to move around in the manual pages.
>
> **[4:01](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=241)** We can press H to see the help for the last command if we'd like to learn more of the commands available or press Q to quit.
>
> **[4:09](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=249)** And I'll type cat poems.txt and pipe the output of that to less.
>
> **[4:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=256)** This will use less as the target of a piped command.
>
> **[4:19](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=259)** The result we see is the same, the text being displayed in the less interface, but we got here using a different set of commands.
>
> **[4:27](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=267)** Again, I'll press Q to quit less and go back to the shell.
>
> **[4:30](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=270)** Looking at the contents of text files is an important skill to get comfortable with when you're working at the command line.
>
> **[4:37](https://www.linkedin.com/learning/learning-linux-command-line-2023/view-text-files-with-cat-head-tail-and-less?u=76281980&t=277)** Whether you're doing system administration, programming, writing, or anything else that deals with text, these tools can help you out.

> [!info]- Semantic Content
>
> **CLI Commands:** cat (14), make (1)
> **File Paths:** poems.txt (9)
> **Code Keywords:** interface (2), case, (1), let (1)
> **Tools:** command line (2), terminal (1)
> **Definitions:** is called (1), short for (1), is an  (1)
> **Analogies:** for example (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** scroll up (1)

#### Search for text in files and streams with grep
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=0)** - [Narrator] One of the main reasons we'd want to take a look at text files is to find and use some particular piece of information they contain.
>
> **[0:07](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=7)** A popular command we can use to do that is grep and its most basic grep returns or outputs lines of text that match a search condition called a pattern.
>
> **[0:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=16)** This pattern can be either a specific or explicit group of characters or they can use a pattern called a regular expression.
>
> **[0:24](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=24)** We'll take a look at both briefly here, but grep is a hugely powerful tool and it's worth a course of its own.
>
> **[0:29](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=29)** We'll take a look at the basics so you're prepared to dive in deeper if you want to.
>
> **[0:34](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=34)** Let's use the grep tool to look for some texts in our poem exercise file.
>
> **[0:38](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=38)** First, we'll have grep show us all the lines of our poems file that have the letters T, H, E.
>
> **[0:45](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=45)** To do this, I'll write greb and then the search term in quotes And then the name of the file that I want to look inside of.
>
> **[0:53](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=53)** And I can see in the results, my search term is highlighted and only lines of the file which contain that term are shown on the screen.
>
> **[1:01](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=61)** To illustrate this a little bit better, I'll run the same command again, but add the dash n option, which numbers the output lines so we can see which lines of the original file are being output.
>
> **[1:13](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=73)** Here, we can see that line 7, 11, 12 and so on match our criteria.
>
> **[1:17](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=77)** But if you're watching really closely, you'll notice that not all of the lines with the letters T, H, E in them are printed here.
>
> **[1:23](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=83)** That's because grep is case sensitive, meaning it considers uppercase and lowercase letters to be different.
>
> **[1:29](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=89)** And some of the lines of the text file have capital T's at the beginning of the word, the.
>
> **[1:34](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=94)** We can verify this by changing our grep command to grep capital the and file name.
>
> **[1:39](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=99)** I'll recall the previous command and change the search pattern.
>
> **[1:43](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=103)** And here's the lines with capital T at the beginning.
>
> **[1:46](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=106)** To tell grep that I don't care about the case, I can use the dash I option for case insensitive matching.
>
> **[1:52](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=112)** So I'll recall my previous command and add the I option.
>
> **[1:57](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=117)** And there's my results with both capital and lowercase letters.
>
> **[2:01](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=121)** We can also use grep to omit lines that we don't want to see.
>
> **[2:05](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=125)** For that, we'll use the dash V option.
>
> **[2:08](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=128)** I'll write grep dash VI, so we'll also use case insensitive matching our search term T, H, E and the file name, poems.txt.
>
> **[2:19](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=139)** And now I can see that none of these lines have T, H, E together.
>
> **[2:23](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=143)** There's nothing highlighted because grep just drops the lines that match the search term.
>
> **[2:28](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=148)** This can be helpful if you're looking through logs, for example, and want to ignore all of the output from a noisy program.
>
> **[2:34](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=154)** I mentioned earlier that grep can be worth many hours of exploration, and inspiration for that can be found in the man page for grep.
>
> **[2:42](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=162)** One of the features that makes grep so flexible, is it support for regular expressions or regexes.
>
> **[2:48](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=168)** These are expressions of patterns in texts that allow us to ask more complex questions such as returning lines with only the letters H, I, J and K in them, for example.
>
> **[2:59](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=179)** Or we could search for words longer than six letters.
>
> **[3:03](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=183)** I'll clear the screen, and let's take a look at two of these cases using the dash capital E option, to specify that I'm using a regex.
>
> **[3:11](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=191)** I'll write grep dash capital E quote, square bracket H,I,J,K closing square bracket and closing quote.
>
> **[3:22](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=202)** And then the file name that we want to search within.
>
> **[3:26](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=206)** This search term is regular expression notation for the occurrence of the lowercase letters H, I, J or K, and I can see that the output has done what I expect.
>
> **[3:36](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=216)** It's showing me lines with these letters in them.
>
> **[3:38](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=218)** I'll clear the screen again.
>
> **[3:40](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=220)** And this time I'll write grep dash E backslash W, opening curly brace six comma, closing curly brace closing double quote.
>
> **[3:53](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=233)** and then I'll provide the name of the file that we want to look within.
>
> **[3:56](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=236)** This is notation for six or more of any character, considered a word character.
>
> **[4:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=240)** I'll run that command, and here I can see all of the text strings, six characters or longer are highlighted.
>
> **[4:07](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=247)** There's a whole lot we can learn about regular expressions, but that's not the focus of this course.
>
> **[4:11](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=251)** Regular expressions are powerful and they can look at first like magical incantations.
>
> **[4:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=256)** If you're curious to learn about them, be sure to check out the course, learning regular expressions.
>
> **[4:22](https://www.linkedin.com/learning/learning-linux-command-line-2023/search-for-text-in-files-and-streams-with-grep?u=76281980&t=262)** Even using grep to match specific words without regular expressions will provide you a powerful tool to find text in files or output on your system.

> [!info]- Semantic Content
>
> **CLI Commands:** grep (18), find (2)
> **Code Keywords:** let (2), this, (1), case, (1)
> **Analogies:** for example (2), such as (1)
> **File Paths:** poems.txt (1)
> **Documentation:** man page (1)
> **Exercise Files:** exercise file (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Manipulate text with awk, sed, and sort
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=0)** - [Instructor] One of the tasks of a system administrator, a systems analyst, a scientist, or a programmer is to make use of data from various logs or outputs.
>
> **[0:09](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=9)** We've seen how to look at files and how to search within them.
>
> **[0:12](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=12)** So now let's take a look at reaching in and extracting particular data and presenting it in different ways.
>
> **[0:18](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=18)** There's a few common tools for this and which one we used is largely a matter of preference.
>
> **[0:24](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=24)** So it's helpful to be at least a little bit familiar with both.
>
> **[0:27](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=27)** These tools are called awk and sed.
>
> **[0:29](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=29)** Both tools are widely used in command-line operations, and you'll see them both as you explore system administration and systems programming.
>
> **[0:37](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=37)** What awk is great at and is commonly used for in scripts is pulling data out of a file according to a rule.
>
> **[0:44](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=44)** To define this rule, we write an awk program either right at the command line or in a separate file if it's very complex to tell awk how to get the data we want.
>
> **[0:53](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=53)** Sed is also used for modifying information from a file or stream.
>
> **[0:57](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=57)** It's short for stream editor.
>
> **[0:59](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=59)** And where awk is really helpful for extracting particular data and presenting it as the result on screen or in a pipeline, sed excels at changing data as it flows through a command pipeline or in place in a file.
>
> **[1:11](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=71)** We can use either of these in a command pipeline or just by themselves.
>
> **[1:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=76)** Let's look at awk first.
>
> **[1:18](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=78)** We have a simple data file called simpledata.txt, and we can take a look at it with cat.
>
> **[1:24](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=84)** I'll write cat simple_data.txt.
>
> **[1:29](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=89)** It's a little table of some simple data.
>
> **[1:32](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=92)** To use awk, we'll write a program that considers data in terms of delimiters or field separators.
>
> **[1:38](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=98)** Breaks are characters that represent divisions in the data.
>
> **[1:42](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=102)** These could be spaces or tabs or another string that we specify.
>
> **[1:46](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=106)** Here, we'll work with default limiters, which are tabs and spaces.
>
> **[1:50](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=110)** Let's write a small awk program to show us just the second column of data from this file.
>
> **[1:55](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=115)** To do that write awk ' {print $2}' and then the file name,
>
> **[2:06](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=126)** simple_data.txt.
>
> **[2:09](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=129)** The single quotes contain the awk program, in this case, just print, which returns a value and an indicator of the field we want the program to return, which in this case is two.
>
> **[2:19](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=139)** When I run the program, I see the column of numbers called ID.
>
> **[2:23](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=143)** We can change our awk program to add a tab character and another field too.
>
> **[2:28](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=148)** I'll press the up arrow to get my command back.
>
> **[2:31](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=151)** And then I'll go over and modify my print command.
>
> **[2:33](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=153)** After the two, I'll put in space "\t" and then $1.
>
> **[2:43](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=163)** We have to put double quotes around literal text.
>
> **[2:45](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=165)** In this case, an escaped T, which represents a tab character, and I'll run this command.
>
> **[2:52](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=172)** Great.
>
> **[2:53](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=173)** There's two columns of information presented differently than they appeared in the source.
>
> **[2:57](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=177)** Because the output of this command plain text, we can pipe it into something else like the sort command.
>
> **[3:04](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=184)** I'll recall my command and then type | sort -n.
>
> **[3:09](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=189)** This is a numeric sort.
>
> **[3:11](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=191)** And this lists the data in order by the value in the ID column.
>
> **[3:15](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=195)** And that's a really quick look at awk, which like grep is a whole topic unto itself.
>
> **[3:20](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=200)** I'd encourage you to extend your learning about awk by taking a look at our course dedicated to awk.
>
> **[3:25](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=205)** You can also explore the man page for it to get an idea of what else it can do.
>
> **[3:29](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=209)** I'll clear the screen.
>
> **[3:31](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=211)** Now let's explore sed.
>
> **[3:33](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=213)** Let's take another look at our simple data.
>
> **[3:35](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=215)** I'll write cat simple_data.txt.
>
> **[3:40](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=220)** Let's write a sed command to replace one string with another in this file.
>
> **[3:44](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=224)** To do that, I'll write sed s/Orange/Red/ and then our file name.
>
> **[3:54](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=234)** This command changed every occurrence of the text string orange in the original file into the string red in the output.
>
> **[4:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=240)** The S before the slash in the expression stands for substitute.
>
> **[4:04](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=244)** Then there's a slash, the string you want to replace, another slash and the string you want to replace that string with.
>
> **[4:11](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=251)** And the expression terminates with a slash.
>
> **[4:13](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=253)** I'll clear the screen again.
>
> **[4:15](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=255)** Again, be sure to explore our course on sed if you want to explore further.
>
> **[4:20](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=260)** Another tool I'd like to touch on briefly here is sort, which we saw a little bit earlier.
>
> **[4:25](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=265)** Sort, as you might expect, sorts the data passed into it in various ways.
>
> **[4:29](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=269)** Let's take a look at our simple data file again.
>
> **[4:32](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=272)** If I just write sort, simple_data.txt, I can see that it will sort the data on the first character of each row.
>
> **[4:39](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=279)** So in the first column, I see the A names, J names, M names, the name column header itself and so on.
>
> **[4:46](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=286)** Using the -k option for key, I can provide a sort key to change which column I sort by.
>
> **[4:53](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=293)** I'll write sort -k2 simple_data.txt and then I'll press enter.
>
> **[4:59](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=299)** And at first glance, it looks like we've sorted the ID column, the second column in a helpful way.
>
> **[5:05](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=305)** But if you look closer, the sort has organized the rows based simply on the first character of the second field, 1,337, isn't greater than 3,127 and 3,127 is greater than 314.
>
> **[5:20](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=320)** What we want here is a numeric sort, which I can get using the -n option.
>
> **[5:25](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=325)** I'll write sort -k2 for the second column, then the -n option, and then the file name.
>
> **[5:32](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=332)** And now the sorting in this output makes more sense.
>
> **[5:35](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=335)** I'll clear the screen again.
>
> **[5:37](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=337)** We can also use sort to show us unique lines of a file or remove duplicates from our output.
>
> **[5:43](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=343)** This is useful if we're looking at a log file and need to get rid of repeated entries to make the output more clear.
>
> **[5:49](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=349)** I have a file with some repeated lines here.
>
> **[5:52](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=352)** Let's take a look at that.
>
> **[5:53](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=353)** I'll write cat dupes.txt.
>
> **[5:56](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=356)** And now if I use a sort -u for unique and dupes.txt, I only see one line for each entry ignoring the duplicates.
>
> **[6:06](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=366)** There's all kinds of things you can do with sort.
>
> **[6:08](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=368)** And it makes a helpful step in a pipe to command.
>
> **[6:11](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=371)** If you're working with dates or timestamps or numbers and need to keep them all in logical order.
>
> **[6:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=376)** Be sure to check out the sort man page for more details.
>
> **[6:20](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=380)** There are some other commands you might want to explore, which manipulate text and other ways.
>
> **[6:25](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=385)** There's rev, which prints out the file in reverse.
>
> **[6:28](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=388)** There's tac, which prints the file out in a reverse line order.
>
> **[6:31](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=391)** Get it? It's cat backwards.
>
> **[6:33](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=393)** There's also the tr command or translate, which you can use to work with individual characters.
>
> **[6:39](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=399)** That's a fairly quick look at some of the most common stream manipulation commands you're likely to need while working in the command line.
>
> **[6:46](https://www.linkedin.com/learning/learning-linux-command-line-2023/manipulate-text-with-awk-sed-and-sort?u=76281980&t=406)** I encourage you to take some time and practice with these as you continue your learning.

> [!info]- Semantic Content
>
> **CLI Commands:** awk (14), sed (7), cat (5), make (2), grep (1)
> **Code Keywords:** let (8), case, (2), return, (1), continue (1)
> **File Paths:** simple_data.txt (5), dupes.txt (2), simpledata.txt (1)
> **Code Identifiers:** simple_data (5)
> **Definitions:** is a  (3), short for (1), stands for (1)
> **Documentation:** man page (2)
> **Tools:** command line (2)
> **Speakers:** - [instructor] (1)

#### Edit text with Vim
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=0)** - [Instructor] At the command line, we can edit text with stream editors and so on.
>
> **[0:04](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=4)** But in many cases, especially when we're writing documents or coding, it's easier to just open up a text editor and do what we need to do.
>
> **[0:11](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=11)** But if we're working at the command line, we don't always have access to our favorite graphical text editor.
>
> **[0:17](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=17)** On most Linux distributions, there's a text editor called Vim.
>
> **[0:21](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=21)** You'll also see it referred to as vi in some places for legacy reasons.
>
> **[0:25](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=25)** The command name vi is a shortening of the word visual and vi was a popular text editor on BSD Linux.
>
> **[0:32](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=32)** The name Vim stands for vi improved.
>
> **[0:35](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=35)** Vi or Vim takes a little bit of getting used to, and I encourage you to check out our course called Learning vi to get a full sense of how to use it.
>
> **[0:43](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=43)** As with a lot of the tools that we've explored so far, Vim can take a few minutes to learn but years to master.
>
> **[0:49](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=49)** So I'll take you through the very basics of it right now so you're ready to explore more when you're ready.
>
> **[0:55](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=55)** Depending on the software installed on your system, you'll need to type either Vim or vi to open the editor.
>
> **[1:01](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=61)** Here on Ubuntu, I'll type vi.
>
> **[1:04](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=64)** The first screen that shows up when I open the software, gives us a sense of what it's like to work in Vim.
>
> **[1:09](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=69)** Instead of having a toolbar, Vim has two primary modes, insertion mode, where we type and make manual changes to text, and command mode, where we issue commands like save, search and many other things.
>
> **[1:21](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=81)** I'll press i to go into insertion mode, and here I can start typing things.
>
> **[1:29](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=89)** And if I press escape, I'll go back into command mode.
>
> **[1:33](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=93)** Keys we press in command mode, do different things than in insertion mode.
>
> **[1:37](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=97)** So we need to be careful that we're in an insertion mode, if we want to make changes to the text.
>
> **[1:42](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=102)** Using the arrow keys, I'll navigate to the D character, and then I'll press lowercase i, to go back into insertion mode, which more precisely lets us insert text right before the cursor.
>
> **[1:53](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=113)** We can see if I type, I'm inserting right before where the cursor is.
>
> **[1:58](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=118)** I'll press escape again.
>
> **[2:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=120)** And this time I'll press a shift I or a capital I, which lets me insert text at the beginning of the line.
>
> **[2:11](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=131)** There are other insert modes such as lowercase o to open up a new line after the current line.
>
> **[2:17](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=137)** Once we're done editing the text, we'll want to save it.
>
> **[2:20](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=140)** To do that, I'll press escape to get into command mode and then type :w new.txt to save the file and to name it, new.txt.
>
> **[2:34](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=154)** I can see that Vim has written two lines and 81 characters.
>
> **[2:38](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=158)** Now that I have a file saved, I can make changes and save them with just escape :w.
>
> **[2:43](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=163)** If I want to save the file and exit, I'll make sure I'm in command mode by pressing escape and then type :w q to write or save and quit.
>
> **[2:53](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=173)** I can also open up an existing file with Vim, just providing the command followed by the file I want to open.
>
> **[2:58](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=178)** In this case, poems.txt.
>
> **[3:02](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=182)** In command mode, I can press Shift G to move to the bottom of the file.
>
> **[3:07](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=187)** And I can type number one and capital G to move to the top of the file.
>
> **[3:13](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=193)** I can move backward and forward by sentence using the left and right parentheses keys.
>
> **[3:18](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=198)** And forward and backward by paragraph using the left and right curly braces.
>
> **[3:23](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=203)** I don't really need to make any changes here.
>
> **[3:25](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=205)** So I'll hit escape to make sure I'm in command mode.
>
> **[3:27](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=207)** And then we'll type : q !
>
> **[3:30](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=210)** to quit without saving.
>
> **[3:33](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=213)** As with so many things in the command line world, there's a whole lot to learn about Vim to become really efficient at using it.
>
> **[3:40](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=220)** But for basic usage, there's insert modes like lowercase i, capital I and lowercase o.
>
> **[3:46](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=226)** And we can use the arrow keys for navigation.
>
> **[3:49](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=229)** Perhaps the most important takeaway from this quick look at Vim, is to remember escape: q !, to exit without saving.
>
> **[3:57](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=237)** A lot of people who are new to the command line, find themselves in Vim at some point, and feel stuck there.
>
> **[4:02](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=242)** The usual quit or escape commands don't work.
>
> **[4:04](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=244)** Things like escape control C, Q.
>
> **[4:07](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=247)** I've even heard of people restarting the virtual machine they're working in, or closing a terminal window and reopening it, just to get out of Vim.
>
> **[4:15](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=255)** So remember, escape: q !
>
> **[4:17](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=257)** to quit without saving, or escape : w q to save changes and quit.
>
> **[4:24](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=264)** That should be enough of Vim to let you edit text if you need to.
>
> **[4:27](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-vim?u=76281980&t=267)** And of course, I encourage you to check out our course that focuses on vi to dig deeper into the powerful commands and features available in this editor.

> [!info]- Semantic Content
>
> **Tools:** vim (14), command line (4), terminal (1)
> **Code Keywords:** type : (2), new. (2), type, (1), case, (1), type
: (1)
> **CLI Commands:** make (6), find (1)
> **File Paths:** new.txt (2), poems.txt (1)
> **UI Navigation:** open the (2), navigate to (1)
> **Definitions:** is a  (1), stands for (1)
> **Analogies:** it's like (1), such as (1)
> **Env Vars:** bsd (1)

#### Edit text with nano
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-nano?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-nano?u=76281980&t=0)** - Some Linux distributions include a lightweight text editor called nano.
>
> **[0:04](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-nano?u=76281980&t=4)** It can be installed on many other distros as well.
>
> **[0:07](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-nano?u=76281980&t=7)** It's quite a bit simpler than Vim, so many people prefer it, though it does lack some power user features that Vim enthusiasts will miss.
>
> **[0:15](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-nano?u=76281980&t=15)** We'll take a quick look here and I encourage you to explore the course Learning nano for more details.
>
> **[0:21](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-nano?u=76281980&t=21)** I'm working here in Ubuntu desktop, which comes with nano already installed.
>
> **[0:26](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-nano?u=76281980&t=26)** In my terminal I'll type nano to launch nano.
>
> **[0:31](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-nano?u=76281980&t=31)** Already we can see that nano is a little bit more user-friendly than Vim, especially because it provides a list of some common commands right at the bottom of the screen.
>
> **[0:40](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-nano?u=76281980&t=40)** The caret character, the little upward angle, represents the control key as we saw earlier.
>
> **[0:45](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-nano?u=76281980&t=45)** So these key combinations are Control G for help, Control O for write out or save the file, and so on.
>
> **[0:52](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-nano?u=76281980&t=52)** I'll write some text here.
>
> **[0:57](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-nano?u=76281980&t=57)** I can move around the screen, which is called the buffer with the arrow keys.
>
> **[1:03](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-nano?u=76281980&t=63)** Our usual text navigation shortcuts work here too.
>
> **[1:06](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-nano?u=76281980&t=66)** Control A moves to the beginning of the line.
>
> **[1:08](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-nano?u=76281980&t=68)** Control E the moves to the end.
>
> **[1:11](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-nano?u=76281980&t=71)** It can cut and paste or cut and uncut lines of text with Control K and Control U.
>
> **[1:17](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-nano?u=76281980&t=77)** I'll use Control O to save the file, and I'm prompted for a name.
>
> **[1:22](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-nano?u=76281980&t=82)** I'll call it new two dot TXT and hit enter, and then I'll press Control X to exit.
>
> **[1:29](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-nano?u=76281980&t=89)** If the file has changed since I last edited it, I'll be prompted to save the buffer, which is the file that I'm working with.
>
> **[1:35](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-nano?u=76281980&t=95)** I can edit existing files with nano too using the nano command followed by the file name.
>
> **[1:42](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-nano?u=76281980&t=102)** I'll write nano poems dot TXT.
>
> **[1:45](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-nano?u=76281980&t=105)** Control W is a useful feature to find texts in the document.
>
> **[1:49](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-nano?u=76281980&t=109)** I'll press Control W and then look for the word, "bright" then I'll press Enter and I'm taken to the first match.
>
> **[1:58](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-nano?u=76281980&t=118)** If I press Control W again, I can search for the same term.
>
> **[2:02](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-nano?u=76281980&t=122)** Pressing Enter takes me to the next match and so on.
>
> **[2:06](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-nano?u=76281980&t=126)** There's two more commands I find helpful in nano that aren't shown on the bar at the bottom of my screen, Control V to move down a screen and Control Y to move up a screen.
>
> **[2:17](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-nano?u=76281980&t=137)** I don't need to make any more changes to this file, so I'll press Control X to exit.
>
> **[2:22](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-nano?u=76281980&t=142)** I encourage you to check out learning nano here on LinkedIn, learning to explore this basic editor further.
>
> **[2:28](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-nano?u=76281980&t=148)** Some people have strong opinions about the tools that other people use, and text editors are no exception.
>
> **[2:34](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-nano?u=76281980&t=154)** If you prefer one or the other, that's completely fine, but it's good to know both nano and Vim, so you can use whichever tool you have available.
>
> **[2:42](https://www.linkedin.com/learning/learning-linux-command-line-2023/edit-text-with-nano?u=76281980&t=162)** Being flexible and knowledgeable about more than one way of doing something will help make you a better developer writer or system administrator.

> [!info]- Semantic Content
>
> **Tools:** vim (4), terminal (1)
> **CLI Commands:** find (2), make (2)
> **Definitions:** is a  (2), is called (1)
> **Env Vars:** txt (2)
> **Code Keywords:** match. (1)
> **Cross-References:** as we saw (1)
> **Speakers:** - some (1)

#### Working with tar and zip archives
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=0)** - [Instructor] In the early days of computer systems, and still to a very large extent today, data that needed to be archived for safekeeping was recorded to backup tapes and stored in a closet or basement, or, ideally, in a more secure and suitable location.
>
> **[0:14](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=14)** In order to store files on a linear medium like tape, files are recorded to the tape one after another in sequence, like songs on an audio cassette.
>
> **[0:23](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=23)** Instead of using a tape, we can also create a file that contains other files in the sequence.
>
> **[0:29](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=29)** TAR files, short for tape archive files, are still incredibly common for distributing, sharing, and archiving files on Linux systems.
>
> **[0:37](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=37)** This is because it's much easier in many ways to send and store one large file instead of many small files.
>
> **[0:43](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=43)** TAR files often don't involve any compression, but there are ways to incorporate compression into a TAR file, which we'll see as we explore different software distribution styles.
>
> **[0:53](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=53)** Compression tries to reduce the size of a file using some mathematical tricks.
>
> **[0:57](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=57)** If we're using compression with a TAR archive, we'll often see that the file is named with an extension to indicate what kind of compression is being used.
>
> **[1:05](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=65)** For example, there's .tar.gz or .tgz, which is a TAR file with gzip compression, .tar.bz2, which is a TAR file with bzip compression, and others.
>
> **[1:17](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=77)** gzip and bzip are two different methods for compressing data, and the difference between them isn't terribly important right now.
>
> **[1:24](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=84)** First, let's take a look at how to create a regular TAR archive to combine a few files into one.
>
> **[1:30](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=90)** Let's say I wanted to make an archive of my Exercise Files.
>
> **[1:33](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=93)** To do that, I'll go up a level in my file structure with cd space ..
>
> **[1:38](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=98)** so I'm not working inside the directory I'm archiving.
>
> **[1:41](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=101)** And then I'll write tar -cvf myfiles.tar Exercise Files.
>
> **[1:48](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=108)** The c option says, create an archive.
>
> **[1:51](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=111)** We'll use another option later to extract from an archive.
>
> **[1:55](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=115)** The v tells tar to be verbose.
>
> **[1:57](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=117)** That is, to list out each file that gets added to the archive.
>
> **[2:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=120)** This can be a useful way to create an index of the contents of the file, or just to see what's happening.
>
> **[2:06](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=126)** That's optional, though, if you don't need to see what's going on.
>
> **[2:09](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=129)** The f option tells the tar command we want to output the archive to a file.
>
> **[2:14](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=134)** Without that, the data that makes up the TAR file will be sent to the screen, to the standard output, unless we pipe it somewhere else.
>
> **[2:20](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=140)** And in this case, that's not what we want.
>
> **[2:23](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=143)** After the f option comes the file name of the archive.
>
> **[2:26](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=146)** And after that, any files or directories we want included in the archive.
>
> **[2:30](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=150)** In this case, it's just the one folder, but we could put more than one if we wanted to.
>
> **[2:36](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=156)** I'll press enter to create the file.
>
> **[2:39](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=159)** And now I'll list the directory with ls -l.
>
> **[2:42](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=162)** And we can see the file here.
>
> **[2:44](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=164)** Let's create a compressed version too.
>
> **[2:47](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=167)** I'll press the up arrow to recall my previous command, and I'll add just one option, an a, and drop the v for verbose, since we don't need to see the files go by again.
>
> **[2:58](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=178)** I'll write tar -caf myfiles.tar.gz Excersise Files.
>
> **[3:06](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=186)** The a option tells tar to figure out what kind of compression to use based on the file extension.
>
> **[3:11](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=191)** In this case, .gz.
>
> **[3:13](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=193)** I could also specify to use gzip compression by using the option z instead of a.
>
> **[3:18](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=198)** I can do the same thing with a bzip archive.
>
> **[3:21](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=201)** I'll recall the command and change the output name to .tar.bz2.
>
> **[3:28](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=208)** bzip can offer a little bit more compression for some files, but sometimes it takes quite a bit longer to run.
>
> **[3:34](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=214)** Let's take a look at the files that we've created.
>
> **[3:37](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=217)** I'll write ls -lh.
>
> **[3:41](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=221)** Here, at the bottom of my screen, I can see myfile.tar, the original uncompressed one, at 160 kilobytes.
>
> **[3:48](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=228)** Below that, I can see the bzip version at 111 kilobytes.
>
> **[3:53](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=233)** And at the bottom of the listing is the gzip version at 107 kilobytes.
>
> **[3:58](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=238)** So we've got some archives.
>
> **[4:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=240)** Now let's unpack them.
>
> **[4:02](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=242)** I'll create a folder and move one of the archives into it.
>
> **[4:05](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=245)** I'll write mkdir unpack1.
>
> **[4:08](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=248)** And then I'll move one of the files into that folder.
>
> **[4:12](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=252)** I'll write mv myfiles.tar.bc2 space unpack1.
>
> **[4:19](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=259)** And then I'll move into that folder with cd space unpack1.
>
> **[4:24](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=264)** Now, to extract this archive, I can write tar -xf myfiles.tar.bz2.
>
> **[4:32](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=272)** And taking a look at this directory with ls -l, I can see that it's extracted my Exercise Files here.
>
> **[4:40](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=280)** There they are.
>
> **[4:42](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=282)** I'll go back to my Documents directory, and I'll clear the screen.
>
> **[4:48](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=288)** If we don't know exactly what's in an archive, it can be safer to create a new directory and extract the archive there, just in case there are a lot of directories and files that we don't want to show up in the home directory or Downloads directory, or wherever the archive file is.
>
> **[5:02](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=302)** We've seen one way to do that, but there's another.
>
> **[5:05](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=305)** I'll create another folder with the command mkdir unpack2.
>
> **[5:09](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=309)** And then I can tell tar to unarchive into that folder.
>
> **[5:13](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=313)** I'll write tar -xf myfiles.tar.gz.
>
> **[5:18](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=318)** And then I'll use the dash capital C option and provide the path to that directory, unpack2.
>
> **[5:25](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=325)** The capital C option specifies a directory to change into for unarchiving.
>
> **[5:33](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=333)** As we explore working at the command line, be it as a software developer, assistant administrator, or a hobbyist, we're bound to come across archive files as we explore new software.
>
> **[5:43](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=343)** tar has a huge number of options, most of which we won't need at a beginning or even an intermediate stage.
>
> **[5:49](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=349)** But if you want to learn more about them, be sure to check out the man page for the tar command.
>
> **[5:54](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=354)** While TAR files of various types are pretty common in the Linux world and, to some extent, in the Mac world, too, the ZIP format is very widely used in large part because it's somewhat more cross-platform friendly, meaning that it works well on Linux, Windows, and MacOS, allowing us to easily exchange files between these platforms.
>
> **[6:12](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=372)** Let's take a look at how to create and extract a ZIP archive.
>
> **[6:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=376)** Ubuntu Desktop, which I'm using, has the zip and unzip tools installed.
>
> **[6:20](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=380)** Though, in other distros, we might need to install them before using them.
>
> **[6:23](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=383)** We'll explore installing software later on.
>
> **[6:26](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=386)** To create a ZIP archive, I'll use the zip command, and then give the name of an archive I'd like to create.
>
> **[6:32](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=392)** After that, I'll provide the path for files that I want to include.
>
> **[6:36](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=396)** One note here.
>
> **[6:37](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=397)** If we provide the path to a directory, zip won't work the way we might expect.
>
> **[6:42](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=402)** It'll give us a ZIP file containing an empty directory.
>
> **[6:45](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=405)** To zip up a directory, along with its contents, we need to add the -r option.
>
> **[6:51](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=411)** And when I run this, I can see how much each of the included files is reduced in size.
>
> **[6:58](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=418)** I'll take a look at the files in this directory.
>
> **[7:01](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=421)** And now I have a ZIP file that takes up 116 kilobytes and contains everything that was in my Exercise Files directory.
>
> **[7:08](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=428)** Next, I'll move it to a different directory to extract it, so when we do, it won't overwrite the original Exercise Files.
>
> **[7:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=436)** I'll write mkdir unpack3, and then mv exfiles.zip unpack3.
>
> **[7:24](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=444)** Then I'll move into that new directory and write unzip exfiles.zip.
>
> **[7:34](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=454)** And there I can see that that directory has been extracted.
>
> **[7:38](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=458)** I'll move back to the Documents directory.
>
> **[7:41](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=461)** We can also tell unzip to extract files to a specific directory.
>
> **[7:45](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=465)** To do that, I'll create another directory with mkdir unpack4.
>
> **[7:50](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=470)** And then I'll use the unzip command to extract that zip file, which is still in the unpack3 directory, and I'll provide the -d option for the unpack destination of unpack4.
>
> **[8:05](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=485)** And there's the files extracted into this directory.
>
> **[8:09](https://www.linkedin.com/learning/learning-linux-command-line-2023/working-with-tar-and-zip-archives?u=76281980&t=489)** While TAR files are a bit more Linux native, it's good to be able to work with both TAR files and ZIP files in order to be flexible.

> [!info]- Semantic Content
>
> **CLI Commands:** tar (30), mkdir (4), unzip (4), ls (3), cd (2)
> **Env Vars:** tar (11), zip (6)
> **Code Keywords:** let (6), case, (3), else. (1), include. (1), this, (1)
> **Exercise Files:** exercise files (5), zip file (3)
> **Definitions:** is a  (2), short for (1)
> **Cross-References:** go back to (1)
> **Documentation:** man page (1)
> **Tools:** command line (1)

#### Challenge: Create and share a file
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/challenge-create-and-share-a-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/challenge-create-and-share-a-file?u=76281980&t=0)** - [Instructor] Let's take a moment to practice what we've learned so far about creating and working with files.
>
> **[0:10](https://www.linkedin.com/learning/learning-linux-command-line-2023/challenge-create-and-share-a-file?u=76281980&t=10)** For this challenge, I'd like you to create a text file, make sure that any user on the system can read and write it, and then compress it using either tar or zip, so it can be sent to someone else more easily.
>
> **[0:22](https://www.linkedin.com/learning/learning-linux-command-line-2023/challenge-create-and-share-a-file?u=76281980&t=22)** This challenge should take you about 10 minutes.
>
> **[0:25](https://www.linkedin.com/learning/learning-linux-command-line-2023/challenge-create-and-share-a-file?u=76281980&t=25)** When you finish, come back and I'll show you my solution to this challenge.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), tar (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Create and share a file
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-create-and-share-a-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-create-and-share-a-file?u=76281980&t=0)** - Let's take a look at how I solve this challenge.
>
> **[0:08](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-create-and-share-a-file?u=76281980&t=8)** First, in order to create a file, I wrote vi, and I created a file called my new file.
>
> **[0:15](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-create-and-share-a-file?u=76281980&t=15)** Then in vi, I used the lowercase i key to move into insertion mode and I typed some text.
>
> **[0:23](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-create-and-share-a-file?u=76281980&t=23)** When I finished that, I pressed escape colon, WQ to save the file.
>
> **[0:30](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-create-and-share-a-file?u=76281980&t=30)** The second part of the challenge was to ensure that anyone that uses the system can read and write this file.
>
> **[0:35](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-create-and-share-a-file?u=76281980&t=35)** So to get started working on that, I took a look at the current permissions of this file.
>
> **[0:40](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-create-and-share-a-file?u=76281980&t=40)** With stat, my new file.
>
> **[0:44](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-create-and-share-a-file?u=76281980&t=44)** And here I found that the access was 664 or, read write for the user, read write for the group and read only for everyone else.
>
> **[0:54](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-create-and-share-a-file?u=76281980&t=54)** In order to allow any user to read and write this file, I'll need to change the permissions.
>
> **[0:58](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-create-and-share-a-file?u=76281980&t=58)** I can do that with chmod a for all users, + to add and RW for read write.
>
> **[1:06](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-create-and-share-a-file?u=76281980&t=66)** And then I'll provide the name of my file.
>
> **[1:09](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-create-and-share-a-file?u=76281980&t=69)** Taking a look at the file again with stat, I can see now all users can read and write this file.
>
> **[1:17](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-create-and-share-a-file?u=76281980&t=77)** The third part of the challenge was to create an archive using this file and I chose to use tar.
>
> **[1:23](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-create-and-share-a-file?u=76281980&t=83)** To do that, I wrote tar -C for create, Z for gzip and f for file.
>
> **[1:32](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-create-and-share-a-file?u=76281980&t=92)** mynewfile.tgz and then the name of the file, to put in that archive.
>
> **[1:41](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-create-and-share-a-file?u=76281980&t=101)** And there's my archive.
>
> **[1:42](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-create-and-share-a-file?u=76281980&t=102)** It's 166 bytes.
>
> **[1:45](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-create-and-share-a-file?u=76281980&t=105)** Hopefully you came up with a similar solution.

> [!info]- Semantic Content
>
> **CLI Commands:** tar (2), chmod (1)
> **Code Keywords:** let (1), else. (1)
> **Speakers:** - let (1)
> **Non-Speech:** (upbeat music) (1)

#### Output redirection
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=0)** - [Instructor] Working at the command line, we've mostly been using output that comes back to the screen, showing us what's been done by a program.
>
> **[0:07](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=7)** We've also sent output from one program into another program using pipes.
>
> **[0:11](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=11)** But before we move on, it's important to understand how to get that information into a file that we can use later or send to someone else.
>
> **[0:18](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=18)** In the Bash shell, and other shells as well, there are three general pathways or streams that we use to work with text, and which we can control in order to send information where we want it to go.
>
> **[0:29](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=29)** The first is the Standard Input, or stdin, which is text going into the shell or into a program, and it's usually keyboard input into the shell.
>
> **[0:38](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=38)** Next is the Standard Output, or stdout, which is the result of running commands that comes back to our screen when commands execute correctly.
>
> **[0:46](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=46)** This is what we've been using so far when we see the output on the screen, or when we send it through a pipe to another program.
>
> **[0:52](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=52)** The third stream is Standard Error, which is the result that comes back from commands when they don't execute correctly, or when they return an error message to us.
>
> **[1:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=60)** Standard input is given the identifying number or descriptor of zero.
>
> **[1:05](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=65)** Standard output is one, and standard error is two.
>
> **[1:08](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=68)** We'll be using these descriptors to redirect information to other places.
>
> **[1:14](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=74)** Let's take a look at redirecting some output.
>
> **[1:17](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=77)** I'll switch to my exercise files directory, and I'll write, ls, to see the contents of the folder.
>
> **[1:23](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=83)** And as usual, we can see the files and directories here.
>
> **[1:26](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=86)** These are printed on the standard output.
>
> **[1:29](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=89)** I want to redirect that to a file.
>
> **[1:30](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=90)** So, I'll write, ls 1> filelist.txt.
>
> **[1:37](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=97)** Here, one stands for the standard output, the output of the ls command that I normally see on the screen.
>
> **[1:43](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=103)** And the greater than sign tells the shell to redirect that somewhere else, in this case to a file.
>
> **[1:48](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=108)** Notice that there's no space between the one and the greater than sign.
>
> **[1:52](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=112)** I'll run this command.
>
> **[1:53](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=113)** And now I don't see output on the screen.
>
> **[1:56](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=116)** That's because it went to the file.
>
> **[1:57](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=117)** So, let's take a look at that file.
>
> **[1:59](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=119)** I'll write, cat filelist.txt.
>
> **[2:02](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=122)** And there's the output of the ls command.
>
> **[2:05](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=125)** Redirecting the standard output is very common, so we can use a shorthand for it, getting rid of the one, and just using the greater than symbol.
>
> **[2:13](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=133)** I'll write, ls > filelist2.txt
>
> **[2:21](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=141)** We'll take a look at that file, and I can see that the output is the same.
>
> **[2:26](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=146)** I'll clear the screen.
>
> **[2:28](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=148)** Now, I'll try to list something that doesn't exist.
>
> **[2:31](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=151)** I'll write, ls notreal.
>
> **[2:34](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=154)** There's no file or directory in this directory called notreal.
>
> **[2:38](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=158)** And when I run it, I see an error.
>
> **[2:40](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=160)** Here in the terminal, it looks the same as the output from when the command works, but it's actually printed to the standard error, not to the standard output.
>
> **[2:48](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=168)** I can verify this by trying to redirect the standard output.
>
> **[2:51](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=171)** Again, I'll write, ls notreal > filelist3.txt.
>
> **[2:59](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=179)** I'll run that, and I still see the error here.
>
> **[3:02](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=182)** It must be coming from somewhere else.
>
> **[3:04](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=184)** Remember that the standard error has the descriptor of two.
>
> **[3:07](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=187)** So, let's redirect the error to a file.
>
> **[3:10](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=190)** I'll write, ls notreal 2> filelist4.txt.
>
> **[3:19](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=199)** Now I don't see anything in the shell.
>
> **[3:21](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=201)** So, let's take a look at the contents of that file.
>
> **[3:24](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=204)** There's my error.
>
> **[3:26](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=206)** We can use more than one redirection at the same time.
>
> **[3:28](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=208)** For example, during a long copy operation, it's common to redirect the standard output to a list of successfully copied files, and the standard error to a list of files that failed to copy.
>
> **[3:38](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=218)** I want to mention that the redirection operator can be a little bit dangerous.
>
> **[3:42](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=222)** If I just type, >filelist4.txt, I don't get anything back in the shell, but once I check out the file, I find that it's empty.
>
> **[3:54](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=234)** We've redirected an empty string into that file, and overwritten what was in the file before.
>
> **[4:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=240)** The single greater than sign truncates or empties out the file it's redirecting to before writing data there.
>
> **[4:06](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=246)** We can use two greater than signs to append or stick the data on to the end of the existing file.
>
> **[4:11](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=251)** Let's add some content to a new file using redirection.
>
> **[4:15](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=255)** I'll write, ls >filelist5.txt.
>
> **[4:22](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=262)** And then, let's use the double greater than operator to append some texts to the end of that file.
>
> **[4:27](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=267)** I'll write, echo "some appended text" >> filelist5.txt.
>
> **[4:34](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=274)** Now let's take a look at the contents of that new file.
>
> **[4:37](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=277)** I'll write, cat filelist5.txt.
>
> **[4:42](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=282)** And I can see the output of the ls command, and here at the bottom, the text that we appended.
>
> **[4:49](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=289)** There's more we can do with redirection, like redirecting a file into a standard input using the less than sign to send information to a command.
>
> **[4:56](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=296)** But this will get us started here at the command line, and help us to understand what's going on when we see the greater than symbol in a command.
>
> **[5:03](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=303)** Like pipes, redirection is commonly used in command line scenarios.
>
> **[5:06](https://www.linkedin.com/learning/learning-linux-command-line-2023/output-redirection?u=76281980&t=306)** And while it's not something that we'll use with every command, it does come up now and then.

> [!info]- Semantic Content
>
> **CLI Commands:** ls (10), cat (2), find (1)
> **Code Keywords:** let (7), else. (2), switch (1), else, (1), type, (1)
> **File Paths:** filelist5.txt (3), filelist.txt (2), filelist4.txt (2), filelist2.txt (1), filelist3.txt (1)
> **Tools:** command line (3), bash (1), terminal (1)
> **UI Navigation:** switch to (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** stands for (1)
> **Analogies:** for example (1)

#### Exploring environment variables and PATH
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=0)** - [Instructor] The shell environment that we're using has a few variables or parameters which control different information and options that affect how the shell operates.
>
> **[0:08](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=8)** We can take a look at these environment variables with the env command.
>
> **[0:14](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=14)** There's a lot going on here.
>
> **[0:15](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=15)** And right now we're only concerned with one of these variables, the one called path.
>
> **[0:20](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=20)** Environment variables are a little bit beyond the scope of this course, but the path variable is one that causes problems for people sometimes and it's important to know about.
>
> **[0:28](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=28)** We can focus on it in particular using the echo command like this.
>
> **[0:33](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=33)** I'll write echo, dollar sign, PATH in all capital letters.
>
> **[0:39](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=39)** In bash and other shells path is a list of paths or directories in the file system where the shell is told to look for programs or executable files outside of the current working directory.
>
> **[0:50](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=50)** Think about using the ls command for a moment.
>
> **[0:52](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=52)** The ls command isn't located in our home folder when we're working there, but the command works anyway.
>
> **[0:57](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=57)** Why is that?
>
> **[0:59](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=59)** The system is able to make assumptions about where to find programs.
>
> **[1:03](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=63)** Otherwise we need to provide the shell, the path to a program that we want to run when we want to use it and that would be pretty annoying.
>
> **[1:10](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=70)** We can find out where a command is really located using the which command followed by a command name.
>
> **[1:17](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=77)** I'll write, which ls?
>
> **[1:19](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=79)** And they can see that the ls command is located in the usr bin directory.
>
> **[1:24](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=84)** I'll run which less and they can see that that's also located in the usr bin directory.
>
> **[1:31](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=91)** Looking back at the path environment variable here, I can see that this path is represented in this variable.
>
> **[1:37](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=97)** So it's one of the places that the shell looks when we ask to run commands.
>
> **[1:42](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=102)** Sometimes when we install new software, we might want to add the path to that software, to the path variable for our environment, to make it easier to use the software.
>
> **[1:51](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=111)** Installing software with a package manager as we'll see later, generally add software to places that are already in the path.
>
> **[1:57](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=117)** So we don't have to do anything.
>
> **[1:59](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=119)** But if we compile a tool from source or download a program and put it somewhere that isn't represented in the path variable, adding that specific path to the path variable will let us use it more easily.
>
> **[2:10](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=130)** To add something to the path variable, we can edit our shell profile, which is a hidden file in the home directory.
>
> **[2:17](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=137)** In bash, the place we make changes to their shell profile for our own user is the dot bash underscore profile file in our home directory.
>
> **[2:26](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=146)** Files whose name begin with a period character are usually hidden from view when listing a directory.
>
> **[2:31](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=151)** But they're the same as other files, except for that.
>
> **[2:35](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=155)** Depending on your setup, your dot bash profile file may already exist or not.
>
> **[2:40](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=160)** Here in my home directory, I'll use the ls command with the dash a option to show me all files.
>
> **[2:45](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=165)** Normal files and hidden files.
>
> **[2:48](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=168)** I don't have one yet so I'll create one with nano tilde slash dot bash underscore profile.
>
> **[2:55](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=175)** If you don't have a bash profile doing this will create an empty shell profile in your home directory.
>
> **[3:01](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=181)** To customize what's in the path, I'll add a line that says, path equals quote dollar sign path.
>
> **[3:07](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=187)** Which means set path to whatever path is.
>
> **[3:10](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=190)** That by itself doesn't change anything.
>
> **[3:12](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=192)** But it does allow us to use the existing path environment variable, which is set at the system level without replacing it or having to replicate it.
>
> **[3:21](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=201)** To add more directories to my path, I'd add them inside the quotes here after the existing path variable separated by colons.
>
> **[3:30](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=210)** Then I'd save the file and close and reopen my shell.
>
> **[3:34](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=214)** I won't make a change to my path for now though, because that's getting more into shell scripting than into learning how to use a shell in general.
>
> **[3:41](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=221)** I'll close this editor and choose not to save this file.
>
> **[3:45](https://www.linkedin.com/learning/learning-linux-command-line-2023/exploring-environment-variables-and-path?u=76281980&t=225)** If you'd like to explore bash scripting more, be sure to take a look at learning bash scripting and Linux bash and shell scripts.

> [!info]- Semantic Content
>
> **CLI Commands:** ls (5), make (4), find (2)
> **Tools:** bash (9)
> **Code Keywords:** this. (1), let (1)
> **Definitions:** is a  (2)
> **Prerequisites:** install (1), setup (1)
> **Env Vars:** path (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Extract information from a text file
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/challenge-extract-information-from-a-text-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/challenge-extract-information-from-a-text-file?u=76281980&t=0)** - [Instructor] One of the common ways hackers try to break into computers is by attempting to log in remotely with randomly generated usernames or with usernames commonly used by popular services.
>
> **[0:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/challenge-extract-information-from-a-text-file?u=76281980&t=16)** The service that monitors login attempts writes information about those connection attempts into a system log file.
>
> **[0:23](https://www.linkedin.com/learning/learning-linux-command-line-2023/challenge-extract-information-from-a-text-file?u=76281980&t=23)** So while this kind of activity is going on, we have a record of these attempts.
>
> **[0:27](https://www.linkedin.com/learning/learning-linux-command-line-2023/challenge-extract-information-from-a-text-file?u=76281980&t=27)** In the exercise files, there's an archive called log.tar.gz and it contains a log file with a lot of attempted connections.
>
> **[0:36](https://www.linkedin.com/learning/learning-linux-command-line-2023/challenge-extract-information-from-a-text-file?u=76281980&t=36)** Here's a challenge to help practice what we've seen so far.
>
> **[0:39](https://www.linkedin.com/learning/learning-linux-command-line-2023/challenge-extract-information-from-a-text-file?u=76281980&t=39)** The task is to extract the file so we can work with it as text and look for lines containing invalid user authorization requests.
>
> **[0:47](https://www.linkedin.com/learning/learning-linux-command-line-2023/challenge-extract-information-from-a-text-file?u=76281980&t=47)** Let's use what we've learned to create a file containing the usernames our would-be hacker tried to use to log in.
>
> **[0:53](https://www.linkedin.com/learning/learning-linux-command-line-2023/challenge-extract-information-from-a-text-file?u=76281980&t=53)** Remember to use the tools we've learned about to browse through text, to rearrange text programmatically, and remember to make use of piping and output redirection.
>
> **[1:02](https://www.linkedin.com/learning/learning-linux-command-line-2023/challenge-extract-information-from-a-text-file?u=76281980&t=62)** We should try to organize the output alphabetically, as well.
>
> **[1:05](https://www.linkedin.com/learning/learning-linux-command-line-2023/challenge-extract-information-from-a-text-file?u=76281980&t=65)** This should take about 15 minutes.

> [!info]- Semantic Content
>
> **CLI Commands:** tar (1), make (1)
> **Best Practices:** remember to (2)
> **Code Keywords:** let (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Extract information from a text file
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-extract-information-from-a-text-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-extract-information-from-a-text-file?u=76281980&t=0)** - [Instructor] Let's take a look at how I solved this challenge.
>
> **[0:08](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-extract-information-from-a-text-file?u=76281980&t=8)** The file that we were provided was an archive, so the first step that I took was to write tar -xvf log.tar.gz.
>
> **[0:20](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-extract-information-from-a-text-file?u=76281980&t=20)** And this created a file called auth.log.
>
> **[0:23](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-extract-information-from-a-text-file?u=76281980&t=23)** As I'm sure you found out, that file's hundreds of lines long.
>
> **[0:26](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-extract-information-from-a-text-file?u=76281980&t=26)** So I wanted to get a sense of what I was looking for.
>
> **[0:30](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-extract-information-from-a-text-file?u=76281980&t=30)** Next, I wrote less auth.log, just to take a look at all the text.
>
> **[0:37](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-extract-information-from-a-text-file?u=76281980&t=37)** And scrolling around, I started seeing invalid user login attempts.
>
> **[0:42](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-extract-information-from-a-text-file?u=76281980&t=42)** For example, this line shows invalid user oracle, another shows invalid user db1inst1, and so on.
>
> **[0:53](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-extract-information-from-a-text-file?u=76281980&t=53)** Scrolling down, I can see user zznode, user ftpuser, and so on.
>
> **[1:04](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-extract-information-from-a-text-file?u=76281980&t=64)** Each of these lines has the string input userauth_request, so I know I can look for that.
>
> **[1:11](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-extract-information-from-a-text-file?u=76281980&t=71)** And on these lines, the username occurs at a specific position.
>
> **[1:15](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-extract-information-from-a-text-file?u=76281980&t=75)** I can count from the left, 1, separator, 2, 3, 4, 5, 6, 7, 8, 9.
>
> **[1:25](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-extract-information-from-a-text-file?u=76281980&t=85)** On each of these lines that say input_userauth_request, it's the 9th item.
>
> **[1:32](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-extract-information-from-a-text-file?u=76281980&t=92)** So I'll clear the screen, and let's start writing out the command that I used to solve the problem.
>
> **[1:38](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-extract-information-from-a-text-file?u=76281980&t=98)** Now that I'm done looking at the text, I need to get my text into a pipeline for processing.
>
> **[1:43](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-extract-information-from-a-text-file?u=76281980&t=103)** So instead of using less, this time I'll write cat auth.log to get the text from the file into my stream.
>
> **[1:50](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-extract-information-from-a-text-file?u=76281980&t=110)** Then I'll pipe that into grep using the search term input_userauth_request.
>
> **[2:01](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-extract-information-from-a-text-file?u=76281980&t=121)** That picks out all of the lines that have userauth_requests in them.
>
> **[2:05](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-extract-information-from-a-text-file?u=76281980&t=125)** Before we continue, let's see what this looks like at this point.
>
> **[2:09](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-extract-information-from-a-text-file?u=76281980&t=129)** Okay, looks like we're getting close.
>
> **[2:13](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-extract-information-from-a-text-file?u=76281980&t=133)** Then I'll take the result of this pipeline and pipe that into awk.
>
> **[2:17](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-extract-information-from-a-text-file?u=76281980&t=137)** I'll write awk '{print $9}' because the username is the 9th item in each of these lines.
>
> **[2:30](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-extract-information-from-a-text-file?u=76281980&t=150)** Let's see what this looks like.
>
> **[2:33](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-extract-information-from-a-text-file?u=76281980&t=153)** Hey, we're getting somewhere.
>
> **[2:35](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-extract-information-from-a-text-file?u=76281980&t=155)** Then I'll pipe this into the sort command with the -u option, so I only get unique items back.
>
> **[2:45](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-extract-information-from-a-text-file?u=76281980&t=165)** This is starting to look good.
>
> **[2:47](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-extract-information-from-a-text-file?u=76281980&t=167)** The last step is to send this information to a file rather than to the standard output here.
>
> **[2:52](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-extract-information-from-a-text-file?u=76281980&t=172)** So I'll recall my pipeline, and I'll redirect the output to a file called users.txt.
>
> **[3:01](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-extract-information-from-a-text-file?u=76281980&t=181)** If you didn't come up with this exact solution, that's fine.
>
> **[3:04](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-extract-information-from-a-text-file?u=76281980&t=184)** The goal here is to get the output we were asked for, not to get the exact same sequence of commands that I used.
>
> **[3:10](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-extract-information-from-a-text-file?u=76281980&t=190)** If you're able to, take some time and chop up this file in other ways.
>
> **[3:14](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-extract-information-from-a-text-file?u=76281980&t=194)** It has a lot of different information in it, including dates, IP addresses, and service names.
>
> **[3:19](https://www.linkedin.com/learning/learning-linux-command-line-2023/solution-extract-information-from-a-text-file?u=76281980&t=199)** Learning how to combine command line tools to achieve a goal is something worth practicing, and it'll help your understanding of how to work at the command line.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), for. (1), continue (1), for, (1)
> **CLI Commands:** tar (2), awk (2), cat (1), grep (1)
> **Code Identifiers:** input_userauth_request (2), userauth_request (1), userauth_requests (1)
> **Tools:** command line (2)
> **File Paths:** users.txt (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. A Peek at Some More Advanced Topics

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Find information about your Linux distribution
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-information-about-your-linux-distribution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-information-about-your-linux-distribution?u=76281980&t=0)** - [Instructor] Until now, almost everything we've done has been distribution independent.
>
> **[0:04](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-information-about-your-linux-distribution?u=76281980&t=4)** That is, it hasn't mattered if we're running CentOS, Fedora, Ubuntu, or another distribution of Linux.
>
> **[0:10](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-information-about-your-linux-distribution?u=76281980&t=10)** But it's good to know what environment we're working with in case we need to make some changes to the system or install software.
>
> **[0:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-information-about-your-linux-distribution?u=76281980&t=16)** Or if we need that information in order to ask for help.
>
> **[0:19](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-information-about-your-linux-distribution?u=76281980&t=19)** If we find ourselves in an environment we don't know about, such as a system set up for us by someone else, the first thing we need to do is understand which Linux distribution we're using.
>
> **[0:29](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-information-about-your-linux-distribution?u=76281980&t=29)** One place this information can be found is in files inside the ETC folder.
>
> **[0:34](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-information-about-your-linux-distribution?u=76281980&t=34)** What the files are called specifically can vary based on which Linux distribution you're using.
>
> **[0:39](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-information-about-your-linux-distribution?u=76281980&t=39)** But we can use a wildcard to match the name of these files and see what's inside them.
>
> **[0:44](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-information-about-your-linux-distribution?u=76281980&t=44)** First, let's look at what these files are.
>
> **[0:46](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-information-about-your-linux-distribution?u=76281980&t=46)** I'll write ls dash l slash etc slash asterisk release.
>
> **[0:52](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-information-about-your-linux-distribution?u=76281980&t=52)** And in my case, I have two files here.
>
> **[0:55](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-information-about-your-linux-distribution?u=76281980&t=55)** LSB release and OS release, which is a link to another file in usr/lib.
>
> **[1:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-information-about-your-linux-distribution?u=76281980&t=60)** Let's see what information is in these files.
>
> **[1:02](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-information-about-your-linux-distribution?u=76281980&t=62)** First, I'll type cat etc lsb dash release.
>
> **[1:08](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-information-about-your-linux-distribution?u=76281980&t=68)** Here, I can see that I'm running Ubuntu 20.04, which is code named "focal," short for Focal Fossa.
>
> **[1:15](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-information-about-your-linux-distribution?u=76281980&t=75)** Let's look at the other file with cat etc os release.
>
> **[1:19](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-information-about-your-linux-distribution?u=76281980&t=79)** Here's a little bit more information, but generally it's the same.
>
> **[1:22](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-information-about-your-linux-distribution?u=76281980&t=82)** To look at these at the same time, we could write cat etc asterisk release.
>
> **[1:29](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-information-about-your-linux-distribution?u=76281980&t=89)** Here I can see the contents of the first file, and the second file.
>
> **[1:34](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-information-about-your-linux-distribution?u=76281980&t=94)** On other systems, we'll see slightly different information here.
>
> **[1:37](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-information-about-your-linux-distribution?u=76281980&t=97)** This, for example, is the output of those commands on the Fedora 34 workstation system.
>
> **[1:42](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-information-about-your-linux-distribution?u=76281980&t=102)** And here's the output from Alpine Linux.
>
> **[1:46](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-information-about-your-linux-distribution?u=76281980&t=106)** Another important piece of information to know about a system is what version of the Linux kernel we're using.
>
> **[1:51](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-information-about-your-linux-distribution?u=76281980&t=111)** This can determine what features are available to us.
>
> **[1:54](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-information-about-your-linux-distribution?u=76281980&t=114)** We can find that information with the uname command and I'll use the dash a option to show all information.
>
> **[2:02](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-information-about-your-linux-distribution?u=76281980&t=122)** This shows the type of system, in this case Linux, the host name of the system, the version of the kernel, the architecture of the system, and so on.
>
> **[2:15](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-information-about-your-linux-distribution?u=76281980&t=135)** To just retrieve the version of the kernel, we can use uname dash r.
>
> **[2:20](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-information-about-your-linux-distribution?u=76281980&t=140)** This kind of information can be very helpful if you're troubleshooting something and need to ask for help.
>
> **[2:24](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-information-about-your-linux-distribution?u=76281980&t=144)** And it can inform whether certain software runs and what tools you have available.
>
> **[2:29](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-information-about-your-linux-distribution?u=76281980&t=149)** Again, if we've set up a system ourselves, chances are high that we know what kind of distribution and hardware it's running.
>
> **[2:35](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-information-about-your-linux-distribution?u=76281980&t=155)** But, if for some reason we don't, now we've seen how to figure it out.

> [!info]- Semantic Content
>
> **CLI Commands:** cat (3), find (2), make (1), ls (1)
> **Code Keywords:** let (3), else, (1), case, (1), this, (1)
> **Prerequisites:** set up (2), install (1)
> **Env Vars:** etc (1), lsb (1)
> **Analogies:** such as (1), for example (1)
> **Versions:** 20.04 (1)
> **Definitions:** short for (1)
> **Speakers:** - [instructor] (1)

#### Find system hardware and disk information
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=0)** - [Narrator] Let's take a look at finding out some information about the hardware and system resources in the system we're working with.
>
> **[0:07](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=7)** If we're using a physical computer or a virtual machine we set up ourselves, we know some information about it.
>
> **[0:12](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=12)** Like how much memory it has, what kind of processing resources it has and how much hard drive space there is.
>
> **[0:18](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=18)** But if we're working on a remote system or one someone else set up for us, it can be helpful to get a sense of what the available resources are and what hardware a system has.
>
> **[0:28](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=28)** Linux offers many ways to find out all kinds of details about the hardware that makes up a computer, but let's just take a high-level look at some common resources that might be relevant to us, if we're using a Linux system.
>
> **[0:39](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=39)** First, let's find out how much memory this machine has.
>
> **[0:43](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=43)** To do this, I'll use the free command with the -h option for human readable output.
>
> **[0:49](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=49)** Here under total memory, I can see that I have four gigabytes of Ram on this machine.
>
> **[0:54](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=54)** Next, let's take a look at what our processor resources are.
>
> **[0:58](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=58)** There's a file in the proc directory called cpuinfo.
>
> **[1:01](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=61)** So let's take a look at that.
>
> **[1:03](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=63)** All right, cat proc cpuinfo.
>
> **[1:10](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=70)** There's a lot of information here.
>
> **[1:12](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=72)** I'll scroll up a little bit and I can see that I have an Intel Core i nine processor, and I can see that it's a 3000 megahertz one or three gigahertz.
>
> **[1:21](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=81)** Under cpu cores, I can see, that this machine has one cpu core available to it.
>
> **[1:28](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=88)** We can also use the lscpu command, to find out this information and some other information, including known vulnerabilities for this processor.
>
> **[1:38](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=98)** Let's find out how much space has taken up and how much space is available on the system's hard drive.
>
> **[1:43](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=103)** For that, I'll use the df command with the -h option, again, to show human readable sizes like megabytes and gigabytes.
>
> **[1:51](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=111)** This shows the space across a few different volumes, but the most interesting one to me right now is slash or root, because that's where my system files are, and also in this case where my user data is stored.
>
> **[2:02](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=122)** So that's where I'm likely to be taking up space, if I install software or download files.
>
> **[2:07](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=127)** Here, I can see that the total size is about a hundred gigabytes.
>
> **[2:11](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=131)** I've used about 8.7 gigabytes, and that leaves me about 84 gigabytes or 90% of the disc free.
>
> **[2:17](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=137)** We can also use the du command to see how much space files and folders take up on our system.
>
> **[2:23](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=143)** Let's take a look at how much space is taken up across my whole system.
>
> **[2:27](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=147)** All right, sudo, du,-hd one and slash for the root file system.
>
> **[2:33](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=153)** I need to use sudo here because my user can't see into all of the folders at the root of the file system.
>
> **[2:39](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=159)** The du command stands for disc usage.
>
> **[2:42](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=162)** The -h option gives me sizes in human readable formats, and the d option tells du what level of detail to show.
>
> **[2:49](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=169)** In this case, I'm giving it the value of one, meaning to show me one level deep, the first level up from the root, adding up everything within each of those directories.
>
> **[2:59](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=179)** Without doing that, I get one line for every file and directory the tool finds.
>
> **[3:03](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=183)** And right now that's not very useful.
>
> **[3:05](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=185)** A summary is more helpful.
>
> **[3:07](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=187)** So let's take a look.
>
> **[3:10](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=190)** This command takes a little bit of time to run.
>
> **[3:14](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=194)** Here, I can see that the var directory takes up 1.5 gigabytes.
>
> **[3:19](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=199)** The home directory takes up 144 megabytes and so on.
>
> **[3:25](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=205)** We can also explore what hardware the system has with the lshw command, to list hardware.
>
> **[3:31](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=211)** This provides a larger amount of information, so it's helpful to pipe it into less or redirect the output into a file to browse more easily.
>
> **[3:38](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=218)** And we can use commands like lspci, and lsusb, to look at what devices are attached to the PCI and USB buses, if those commands are installed on our system too.
>
> **[3:49](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=229)** We may also need to find out about our systems networking information, and to do that, we can use the ip command with the argument, a, short for address.
>
> **[3:58](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=238)** This will tell us the address information for each of our network adapters.
>
> **[4:02](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=242)** In my case, I have one ethernet adapter and its IP address is 10.0.2.15.
>
> **[4:09](https://www.linkedin.com/learning/learning-linux-command-line-2023/find-system-hardware-and-disk-information?u=76281980&t=249)** We don't always need to know all of these details about our system, but in case we do need this info, now, we know how to get it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), case, (2), this, (1), var (1)
> **CLI Commands:** find (5), sudo (2), cat (1)
> **Versions:** 8.7 (1), 1.5 (1), 10.0.2 (1)
> **Prerequisites:** set up (2), install (1)
> **Env Vars:** pci (1), usb (1)
> **Definitions:** stands for (1), short for (1)
> **UI Navigation:** scroll up (1)
> **Speakers:** - [narrator] (1)

#### Install and update software with a package manager
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=0)** - [Instructor] One important aspect of working with the Linux system is the ability to install and remove software.
>
> **[0:06](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=6)** We need to be able to manage software in order to add new tools and programs to a system.
>
> **[0:12](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=12)** One of the most common ways to add software to a Linux system is to use a package manager because many common programs and tools are distributed through software packages.
>
> **[0:21](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=21)** Depending on the Linux distribution we're using, the package manager will use they'll vary.
>
> **[0:26](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=26)** Each distribution has its own repository of packages, a large index of available software that we can download and which the package manager will then install for us.
>
> **[0:36](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=36)** Debbian and distros like Ubuntu that are derived from it, use the APT package manager, APT stands for advanced package tool.
>
> **[0:44](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=44)** Depending on the version, Red Hat and CentOS use the Yum package manager or the DNF package manager and Fedora uses DNF.
>
> **[0:52](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=52)** SUSE uses YaST and Arch uses pacman.
>
> **[0:56](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=56)** Generally speaking, the tools all work in a similar way.
>
> **[1:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=60)** We provide the name of the package tool, and then we can use a command or argument to search for a particular package, to get more information about a package or install or remove the package.
>
> **[1:10](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=70)** Package management tools also allow us to look for updates to existing packages and install them.
>
> **[1:17](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=77)** Let's take a look at using the apt software to install a package and to update the software installed on my Ubuntu virtual machine.
>
> **[1:24](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=84)** There's a tool that I like to use called tree, which shows a folder structure in an easy to read tree like display.
>
> **[1:31](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=91)** But let's say I didn't remember the exact name of the tool.
>
> **[1:34](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=94)** To search for it in the Ubuntu repository with APT, I can write apt search tree, and this will find all of the packages whose name or description matched that term.
>
> **[1:47](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=107)** I'll scroll up, this package here is the one I'm after.
>
> **[1:54](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=114)** I can find out even more about that package with the command apt show tree.
>
> **[1:59](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=119)** Now let's install that package.
>
> **[2:01](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=121)** Before we do that, I'll run the tree command and see that git, that software isn't installed.
>
> **[2:07](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=127)** So let's install the software.
>
> **[2:09](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=129)** Here on Ubuntu, I want to get an updated list of the packages from the repositories before I install something new.
>
> **[2:15](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=135)** So, all right, sudo apt update.
>
> **[2:23](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=143)** And then I'll run sudo apt install and provide the package name in this case tree.
>
> **[2:30](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=150)** Because we're working with system level changes, we need to use the super user privileges to install software.
>
> **[2:36](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=156)** This goes through the process of downloading and installing the software.
>
> **[2:39](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=159)** And then when it's done, I can run the tree command again.
>
> **[2:42](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=162)** Now I can see that my new software is working.
>
> **[2:47](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=167)** When software is installed from the repository, which is the index of software that the package manager is able to draw from, it'll often come with additional information like manual pages.
>
> **[2:57](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=177)** So it can also write man tree, and see the manual pages for my brand new tree software.
>
> **[3:03](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=183)** This information wasn't here before.
>
> **[3:05](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=185)** We can also use the package manager to keep the packages on the system up-to-date.
>
> **[3:10](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=190)** In order to do that with apt, again, it's a two-step process.
>
> **[3:13](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=193)** Other package managers accomplish this in just one step.
>
> **[3:17](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=197)** Be sure to check out the man pages for the package manager you're using if it's different than apt.
>
> **[3:21](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=201)** First, we'll make sure that we have an up-to-date list of the available packages from the repository mirrors with sudo apt update.
>
> **[3:28](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=208)** When that's done, apt knows what needs to be changed.
>
> **[3:31](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=211)** And then I can run apt upgrade to get those new packages installed.
>
> **[3:36](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=216)** Here, I can see that I have 61 packages that need to be updated, running this will take a few minutes.
>
> **[3:47](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=227)** And once the process is done, I have the latest publicly available versions of the software packages that were installed in my system.
>
> **[3:53](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=233)** It's good to do this every once in a while to make sure we're getting security patches and bug fixes.
>
> **[3:59](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=239)** The four important systems, we can configure the package manager to automatically install critical security updates, but we won't get into that here.
>
> **[4:07](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=247)** As you continue learning about working with the Linux command line, you'll probably need to install some software packages to do a particular job or work with some kind of information.
>
> **[4:16](https://www.linkedin.com/learning/learning-linux-command-line-2023/install-and-update-software-with-a-package-manager?u=76281980&t=256)** If you're interested in learning more about system administration on Linux, be sure to take a look at our courses here on LinkedIn Learning that cover those skills.

> [!info]- Semantic Content
>
> **CLI Commands:** apt (13), sudo (3), dnf (2), find (2), make (2)
> **Prerequisites:** install (12), configure (1)
> **Code Keywords:** let (4), new. (1), super (1), from, (1), continue (1)
> **Env Vars:** apt (3), dnf (2), suse (1)
> **Tools:** command line (1)
> **UI Navigation:** scroll up (1)
> **Definitions:** stands for (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-2023/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-2023/next-steps?u=76281980&t=0)** - [Scott] I hope you've enjoyed this basic introduction to working with the Linux command line.
>
> **[0:05](https://www.linkedin.com/learning/learning-linux-command-line-2023/next-steps?u=76281980&t=5)** In every topic we've explored, there's a lot more depth and detail that you can get into if you need to, but this course should get you started.
>
> **[0:13](https://www.linkedin.com/learning/learning-linux-command-line-2023/next-steps?u=76281980&t=13)** Now you should be prepared to jump into other Linux courses and you should feel comfortable working in the terminal.
>
> **[0:19](https://www.linkedin.com/learning/learning-linux-command-line-2023/next-steps?u=76281980&t=19)** There are all kinds of directions you could go from here.
>
> **[0:21](https://www.linkedin.com/learning/learning-linux-command-line-2023/next-steps?u=76281980&t=21)** If you want to explore more about different Linux distributions, check out our courses on Ubuntu desktop, Fedora, SUSE, and Red Hat.
>
> **[0:29](https://www.linkedin.com/learning/learning-linux-command-line-2023/next-steps?u=76281980&t=29)** If you'd like to learn more about the Bash Shell, take a look at Learning Bash Scripting.
>
> **[0:34](https://www.linkedin.com/learning/learning-linux-command-line-2023/next-steps?u=76281980&t=34)** If you want to learn more about becoming a Linux system administrator, be sure to look for our learning paths and courses focusing on both Ubuntu and Red Hat administration.
>
> **[0:44](https://www.linkedin.com/learning/learning-linux-command-line-2023/next-steps?u=76281980&t=44)** You can explore multitasking at the command line or configuring networking, web services, file sharing, and more.
>
> **[0:50](https://www.linkedin.com/learning/learning-linux-command-line-2023/next-steps?u=76281980&t=50)** And if you want to explore tips about different aspects of Linux, be sure to check out my series of videos here on LinkedIn Learning called Linux Tips.
>
> **[0:58](https://www.linkedin.com/learning/learning-linux-command-line-2023/next-steps?u=76281980&t=58)** Keep exploring the command line using apropos and man to find new commands and give yourself some tasks to accomplish.
>
> **[1:05](https://www.linkedin.com/learning/learning-linux-command-line-2023/next-steps?u=76281980&t=65)** If you need to search online to find out how to do something, that's completely fine.
>
> **[1:10](https://www.linkedin.com/learning/learning-linux-command-line-2023/next-steps?u=76281980&t=70)** Knowing what information you're looking for and knowing how to apply a hint you found is a very important skill for someone who's a flexible command line user.
>
> **[1:18](https://www.linkedin.com/learning/learning-linux-command-line-2023/next-steps?u=76281980&t=78)** Happy learning.
>
> **[1:19](https://www.linkedin.com/learning/learning-linux-command-line-2023/next-steps?u=76281980&t=79)** See you next time.

> [!info]- Semantic Content
>
> **Tools:** command line (4), bash (2), terminal (1)
> **CLI Commands:** find (2)
> **Env Vars:** suse (1)
> **Definitions:** is a  (1)
> **Speakers:** - [scott] (1)


## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/learning-linux-command-line-3005201/codespaces)

## Skills Covered

- Linux System Administration
- CLI

## Path Context

### In [[Ubuntu Linux Professional Certificate by Canonical]]
**1 of 4** | [[Ubuntu Linux- Operating System Basics]] →

## Part of

- [[Ubuntu Linux Professional Certificate by Canonical]]

## Appears In

- [[Ubuntu Linux Professional Certificate by Canonical]]

## Related Courses

_Courses sharing skills:_

- [[Learning Linux Command Line]] — Linux System Administration, CLI
- [[LPIC-1 Exam 102 (Version 5.0) Cert Prep]] — Linux System Administration
- [[Lpic 1 Exam 101 Version 5 0 Cert Prep]] — Linux System Administration
- [[Red Hat Certified System Administrator (EX200) Cert Prep- 2 File Access, Storage, and Security]] — Linux System Administration
- [[Ubuntu Linux- User and Group Management]] — Linux System Administration

---

[↑ Back to top](#)