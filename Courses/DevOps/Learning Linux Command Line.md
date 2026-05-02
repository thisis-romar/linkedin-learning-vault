---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: learning-linux-command-line-26594217
url: "https://www.linkedin.com/learning/learning-linux-command-line-26594217"
duration_minutes: 184
duration: 3h 4m
level: Beginner
updated: 8/29/2025
learners: 5694
skills:
  - Linux System Administration
  - CLI
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQFKBIqdHlpLgQ/learning-public-crop_675_1200/B4EZjohj_CGYAY-/0/1756247769738?e=2147483647&amp;v=beta&amp;t=SwNwvjs-GlmU-hOVIUVJA3cB6sHvgoD0SaeCgHZWJik"
linkedin_topic: DevOps
learning_paths:
  - '[[The Top Skills IT Professionals Have Right Now]]'
prev_courses:
  - '[[Microsoft 365 for Administrators- Supporting Users]]'
path_nav: '[{"path":"The Top Skills IT Professionals Have Right Now","position":10,"total":10,"prev":"Microsoft 365 for Administrators- Supporting Users","next":null}]'
path_count: 1
tags:
  - course
  - topic/devops
  - topic/network-and-system-administration
  - skill/linux-system-administration
  - skill/cli
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Learning%20Linux%20Command%20Line.md)

![Learning Linux Command Line](https://media.licdn.com/dms/image/v2/D4E0DAQFKBIqdHlpLgQ/learning-public-crop_675_1200/B4EZjohj_CGYAY-/0/1756247769738?e=2147483647&amp;v=beta&amp;t=SwNwvjs-GlmU-hOVIUVJA3cB6sHvgoD0SaeCgHZWJik)

# Learning Linux Command Line

> Having a basic understanding of the command line is critical for any Linux administrator and in this course, experienced author Scott Simpson covers the basics of the command line. Scott shows you how to set up and navigate through the file and folder structure, and how to set permissions. He then discusses some of the common command line tools, such as grep, awk, and sed, as well as common comman

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-linux-command-line-26594217) | 3h 4m | Beginner | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Learning Linux command line](#learning-linux-command-line)
  - [What you should know](#what-you-should-know)
  - [A very quick intro to Linux](#a-very-quick-intro-to-linux)
- [**1. Setting Up Your Environment**](#1-setting-up-your-environment) (3 videos)
  - [Using GitHub Codespaces with this course](#using-github-codespaces-with-this-course)
  - [Creating a Linux virtual machine](#creating-a-linux-virtual-machine)
  - [Following along on other platforms](#following-along-on-other-platforms)
- [**2. Command-Line Basics**](#2-command-line-basics) (7 videos)
  - [What is the command line?](#what-is-the-command-line)
  - [Understand how commands are structured](#understand-how-commands-are-structured)
  - [Write commands in a shell at the prompt](#write-commands-in-a-shell-at-the-prompt)
  - [Finding help for commands](#finding-help-for-commands)
  - [Helpful keyboard shortcuts in the terminal](#helpful-keyboard-shortcuts-in-the-terminal)
  - [Challenge: Find command information](#challenge-find-command-information)
  - [Solution: Find command information](#solution-find-command-information)
- [**3. Files, Directories, and Permissions**](#3-files-directories-and-permissions) (15 videos)
  - [The Linux file system](#the-linux-file-system)
  - [Understanding file paths](#understanding-file-paths)
  - [Navigating the file system](#navigating-the-file-system)
  - [Finding directory and file information](#finding-directory-and-file-information)
  - [Create and remove directories](#create-and-remove-directories)
  - [Copy, move, and delete files and directories](#copy-move-and-delete-files-and-directories)
  - [Find files from the command line](#find-files-from-the-command-line)
  - [Understand user roles and sudo](#understand-user-roles-and-sudo)
  - [Understand file permissions](#understand-file-permissions)
  - [Modify file permissions](#modify-file-permissions)
  - [Create hard and symbolic links](#create-hard-and-symbolic-links)
  - [Challenge: Fix broken syntax](#challenge-fix-broken-syntax)
  - [Solution: Fix broken syntax](#solution-fix-broken-syntax)
  - [Challenge: Practice working with files](#challenge-practice-working-with-files)
  - [Solution: Practice working with files](#solution-practice-working-with-files)
- [**4. Common Command-Line Tasks and Tools**](#4-common-command-line-tasks-and-tools) (14 videos)
  - [The importance of modularity](#the-importance-of-modularity)
  - [Use pipes to connect commands together](#use-pipes-to-connect-commands-together)
  - [View text files with cat, head, tail, and less](#view-text-files-with-cat-head-tail-and-less)
  - [Search for text in files and streams with grep](#search-for-text-in-files-and-streams-with-grep)
  - [Manipulate text with awk, sed, and sort](#manipulate-text-with-awk-sed-and-sort)
  - [Edit text with Vim](#edit-text-with-vim)
  - [Edit text with nano](#edit-text-with-nano)
  - [Working with tar and zip archives](#working-with-tar-and-zip-archives)
  - [Challenge: Create and share a file](#challenge-create-and-share-a-file)
  - [Solution: Create and share a file](#solution-create-and-share-a-file)
  - [Output redirection](#output-redirection)
  - [Exploring environment variables and PATH](#exploring-environment-variables-and-path)
  - [Challenge: Extract information from a text file](#challenge-extract-information-from-a-text-file)
  - [Solution: Extract information from a text file](#solution-extract-information-from-a-text-file)
- [**5. A Peek at Some More Advanced Topics**](#5-a-peek-at-some-more-advanced-topics) (3 videos)
  - [Find information about your Linux distribution](#find-information-about-your-linux-distribution)
  - [Find system hardware and disk information](#find-system-hardware-and-disk-information)
  - [Install and update software with a package manager](#install-and-update-software-with-a-package-manager)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Learning Linux command line](https://www.linkedin.com/learning/learning-linux-command-line-26594217/learning-linux-command-line?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/learning-linux-command-line?u=76281980&t=0)** - [Scott] Working in a text-based command-line environment?
>
> **[0:02](https://www.linkedin.com/learning/learning-linux-command-line-26594217/learning-linux-command-line?u=76281980&t=2)** Without the graphical user interface, the [[Windows]] and buttons we're all familiar with can be intimidating at first.
>
> **[0:09](https://www.linkedin.com/learning/learning-linux-command-line-26594217/learning-linux-command-line?u=76281980&t=9)** But once you start to understand how the command-line environment works, you'll see how powerful and efficient it can be.
>
> **[0:15](https://www.linkedin.com/learning/learning-linux-command-line-26594217/learning-linux-command-line?u=76281980&t=15)** I'm Scott Simpson, and in this [[LinkedIn]] Learning course, I'll introduce you to the basics of working with a [[Linux]] command line using the very common bash shell.
>
> **[0:23](https://www.linkedin.com/learning/learning-linux-command-line-26594217/learning-linux-command-line?u=76281980&t=23)** I'll explain what the command line is and how its major parts work.
>
> **[0:27](https://www.linkedin.com/learning/learning-linux-command-line-26594217/learning-linux-command-line?u=76281980&t=27)** We'll take a look at working with files and directories, and I'll explain how Linux protects files from unauthorized access with permissions.
>
> **[0:34](https://www.linkedin.com/learning/learning-linux-command-line-26594217/learning-linux-command-line?u=76281980&t=34)** Then I'll show you some common commands you should be familiar with, and we'll see how to connect commands together with pipes.
>
> **[0:40](https://www.linkedin.com/learning/learning-linux-command-line-26594217/learning-linux-command-line?u=76281980&t=40)** After that, I'll show you some of the more complex command-line tasks you'll need to be familiar with in the command-line environment.
>
> **[0:46](https://www.linkedin.com/learning/learning-linux-command-line-26594217/learning-linux-command-line?u=76281980&t=46)** This course will give you a foundation of knowledge, working with a widely used bash shell, in case you choose to extend your learning into [[User Management]], network configuration, programming or development, or [[System Administration]].
>
> **[0:58](https://www.linkedin.com/learning/learning-linux-command-line-26594217/learning-linux-command-line?u=76281980&t=58)** Throughout the course, I'll recommend other courses here on LinkedIn Learning, where you can deepen your knowledge of certain tools or practices.
>
> **[1:05](https://www.linkedin.com/learning/learning-linux-command-line-26594217/learning-linux-command-line?u=76281980&t=65)** Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (2), [[Linux]] (2), [[Windows]] (1), [[User Management]] (1), [[System Administration]] (1)
> **Tools:** command line (2), bash (2)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [scott] (1)

#### [What you should know](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-you-should-know?u=76281980&t=0)** - [Speaker] In this course, I expect that you're familiar with the basics of using a computer.
>
> **[0:04](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-you-should-know?u=76281980&t=4)** That's to say, I expect that you're comfortable with the idea of files and directories and with running software and so on.
>
> **[0:11](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-you-should-know?u=76281980&t=11)** If you have an understanding of Mac OS or [[Windows]], you'll be able to see the parallels between working at the command line and using the programs you're familiar with.
>
> **[0:19](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-you-should-know?u=76281980&t=19)** In this course, I'm going to be using a PC running [[Ubuntu]] Desktop [[Linux]], and I recommend that you do the same if you're able to.
>
> **[0:27](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-you-should-know?u=76281980&t=27)** If you don't have a Linux PC, getting set up with an environment where you have a Linux command line Window to use can take a little bit of work.
>
> **[0:35](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-you-should-know?u=76281980&t=35)** One option is to use the [[GitHub]] [[Codespaces]] online environment to follow along with the course.
>
> **[0:41](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-you-should-know?u=76281980&t=41)** This allows you to work right inside your browser without any additional computers or software, and we'll explore how to use this course like that in the next chapter.
>
> **[0:50](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-you-should-know?u=76281980&t=50)** Another option is to create a Linux virtual machine on your computer to make an isolated space where you can run Linux and practice using it without affecting other things on your computer.
>
> **[1:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-you-should-know?u=76281980&t=60)** Or you can set yourself up to follow along with me in Windows, on a Mac, or using a Linux machine running in the cloud.
>
> **[1:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-you-should-know?u=76281980&t=67)** I'll talk more about these in a little bit as well, which kind of environment you use will be up to you.
>
> **[1:13](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-you-should-know?u=76281980&t=73)** And I encourage you to watch the videos for all the options in the next chapter to see what you're most comfortable with and to see what will work in the computing environment you have.
>
> **[1:22](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-you-should-know?u=76281980&t=82)** You don't need to use all of them.
>
> **[1:23](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-you-should-know?u=76281980&t=83)** Just pick one that suits you best.
>
> **[1:26](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-you-should-know?u=76281980&t=86)** The exercise files for this course, which are some text files and other files we'll used to practice throughout the course or hosted on GitHub, so you can download a copy of them when you have your environment set up.
>
> **[1:36](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-you-should-know?u=76281980&t=96)** In the course, we'll be downloading the files through the browser to get started, but if you're familiar with using [[Git]], you can use that to download the files if you prefer.
>
> **[1:45](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-you-should-know?u=76281980&t=105)** On the GitHub page for this course, you can also find a file that lists all of the commands that I'll use in each video.
>
> **[1:51](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-you-should-know?u=76281980&t=111)** As you'll see in a little bit, spacing and spelling are important when we're working at the command line.
>
> **[1:56](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-you-should-know?u=76281980&t=116)** So the document is there in case you need to check your typing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (6), [[GitHub]] (3), [[Windows]] (2), [[Ubuntu]] (1), [[Codespaces]] (1)
> **Tools:** command line (3), github (3)
> **CLI Commands:** make (1), git (1), find (1)
> **Cross-References:** in the next (2)
> **Exercise Files:** exercise files (1), download the (1)
> **Prerequisites:** set up (2)
> **Speakers:** - [speaker] (1)

#### [A very quick intro to Linux](https://www.linkedin.com/learning/learning-linux-command-line-26594217/a-very-quick-intro-to-linux?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/a-very-quick-intro-to-linux?u=76281980&t=0)** - [Instructor] [[Linux]] is a general purpose computer operating system originally released in 1991 by Linus Torvalds.
>
> **[0:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/a-very-quick-intro-to-linux?u=76281980&t=7)** Linux is defined by its kernel, which is the core component of the operating system.
>
> **[0:12](https://www.linkedin.com/learning/learning-linux-command-line-26594217/a-very-quick-intro-to-linux?u=76281980&t=12)** The kernel is software, which allows other software to communicate with the computer's [[Hardware]].
>
> **[0:17](https://www.linkedin.com/learning/learning-linux-command-line-26594217/a-very-quick-intro-to-linux?u=76281980&t=17)** Linux was inspired by MINIX, which in turn was inspired by Unix, and Linux is based on a philosophy that software and operating systems should be free, both free of cost and freely changeable.
>
> **[0:29](https://www.linkedin.com/learning/learning-linux-command-line-26594217/a-very-quick-intro-to-linux?u=76281980&t=29)** The software license, which allows this in the case of the Linux kernel is called the GNU General Public License.
>
> **[0:35](https://www.linkedin.com/learning/learning-linux-command-line-26594217/a-very-quick-intro-to-linux?u=76281980&t=35)** This emphasis on freedom, both of cost and modification, has helped Linux to become popular for many different applications and purposes, and Linux has popped up everywhere from the majority of servers that run web services we all use to many supercomputers, to many [[Wi-Fi|wifi]] routers and other network hardware, to some car entertainment and navigation systems, to some mobile phones and tablets and all sorts of other devices.
>
> **[1:01](https://www.linkedin.com/learning/learning-linux-command-line-26594217/a-very-quick-intro-to-linux?u=76281980&t=61)** While the Linux kernel is at the heart of all installations of Linux, many of the standard tools or core utilities that we use on a Linux system come from the GNU Project and aren't actually part of Linux itself, and so taken together the combination of the kernel and these common tools is often referred to as GNU/Linux.
>
> **[1:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/a-very-quick-intro-to-linux?u=76281980&t=81)** Different groups of software and configuration choices that are maintained by individuals or groups of people are called distributions or distros.
>
> **[1:29](https://www.linkedin.com/learning/learning-linux-command-line-26594217/a-very-quick-intro-to-linux?u=76281980&t=89)** Most major distributions of Linux fall into a few categories based on the original distribution from which they were derived.
>
> **[1:36](https://www.linkedin.com/learning/learning-linux-command-line-26594217/a-very-quick-intro-to-linux?u=76281980&t=96)** There's Arch, Debian, Red Hat, and Slackware, and many other distributions that we might use, or we might use distributions based on or derived from these particular distributions.
>
> **[1:47](https://www.linkedin.com/learning/learning-linux-command-line-26594217/a-very-quick-intro-to-linux?u=76281980&t=107)** In this course, I'll be using [[Ubuntu]] desktop Linux, which is based on Debian Linux.
>
> **[1:53](https://www.linkedin.com/learning/learning-linux-command-line-26594217/a-very-quick-intro-to-linux?u=76281980&t=113)** Ubuntu Desktop is user-friendly and includes many tools and programs that make it a good choice for learning about Linux.
>
> **[2:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/a-very-quick-intro-to-linux?u=76281980&t=120)** In your work, you may use Ubuntu or you may find yourself using another distro.
>
> **[2:05](https://www.linkedin.com/learning/learning-linux-command-line-26594217/a-very-quick-intro-to-linux?u=76281980&t=125)** In practice, many companies and organizations use a distribution of Linux derived from Debian or Red Hat.
>
> **[2:12](https://www.linkedin.com/learning/learning-linux-command-line-26594217/a-very-quick-intro-to-linux?u=76281980&t=132)** Linux Mint, Ubuntu, Elementary OS, and [[Kali Linux]] are all derived from Debian.
>
> **[2:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/a-very-quick-intro-to-linux?u=76281980&t=138)** Fedora and Red Hat Enterprise Linux are part of the Red Hat ecosystem, though as I mentioned, there are many other distributions in common use too.
>
> **[2:27](https://www.linkedin.com/learning/learning-linux-command-line-26594217/a-very-quick-intro-to-linux?u=76281980&t=147)** The history of all the different distributions of Linux is beyond the scope of this course, but you'll need to be aware of what system you're using and that you may need to adapt what you're doing to account for differences in distributions.
>
> **[2:39](https://www.linkedin.com/learning/learning-linux-command-line-26594217/a-very-quick-intro-to-linux?u=76281980&t=159)** Different distributions make different choices about some of the tools and philosophies they adopt, but as you begin working with Linux through the command line, most of what you do will be the same across major distributions.
>
> **[2:51](https://www.linkedin.com/learning/learning-linux-command-line-26594217/a-very-quick-intro-to-linux?u=76281980&t=171)** That's because the text interface, often called the command line, is a program called a shell and we'll be using the Bash shell, which is available almost everywhere.
>
> **[3:01](https://www.linkedin.com/learning/learning-linux-command-line-26594217/a-very-quick-intro-to-linux?u=76281980&t=181)** And the standard set of tools, those core utils, are also broadly available on most general purpose distros.
>
> **[3:08](https://www.linkedin.com/learning/learning-linux-command-line-26594217/a-very-quick-intro-to-linux?u=76281980&t=188)** So what we explore in this course will apply on almost any Linux distro you might find yourself using in the future.
>
> **[3:15](https://www.linkedin.com/learning/learning-linux-command-line-26594217/a-very-quick-intro-to-linux?u=76281980&t=195)** As you extend your learning and explore software packages and [[System Administration]], there will be differences, but for now, don't worry too much about them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (22), [[Ubuntu]] (4), [[Hardware]] (2), [[Wi-Fi|Wifi]] (1), [[Kali Linux]] (1)
> **CLI Commands:** make (2), find (2)
> **Env Vars:** gnu (3), minix (1)
> **Tools:** command line (2), bash (1)
> **Definitions:** is a  (2), is called (1)
> **Warnings:** be aware (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 1. Setting Up Your Environment

[↑ Back to Table of Contents](#table-of-contents)

#### [Using GitHub Codespaces with this course](https://www.linkedin.com/learning/learning-linux-command-line-26594217/using-github-codespaces-with-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/using-github-codespaces-with-this-course?u=76281980&t=0)** - [Instructor] There are a few ways you can follow along with this course, and I recommend using a PC that's running [[Linux]], but if you don't have access to a Linux PC or a Linux virtual machine, one option for following along with the course is to use [[GitHub]] [[Codespaces]].
>
> **[0:16](https://www.linkedin.com/learning/learning-linux-command-line-26594217/using-github-codespaces-with-this-course?u=76281980&t=16)** GitHub Codespaces provides a programming-oriented text editor, an integrated development environment we access through a web browser.
>
> **[0:23](https://www.linkedin.com/learning/learning-linux-command-line-26594217/using-github-codespaces-with-this-course?u=76281980&t=23)** While Codespaces is usually used for [[Software Development]], it also has a terminal feature we can use to explore the command line.
>
> **[0:31](https://www.linkedin.com/learning/learning-linux-command-line-26594217/using-github-codespaces-with-this-course?u=76281980&t=31)** GitHub Codespaces is available to anyone with a GitHub account, free or paid.
>
> **[0:37](https://www.linkedin.com/learning/learning-linux-command-line-26594217/using-github-codespaces-with-this-course?u=76281980&t=37)** To use Codespaces, I'll make sure I'm on this course's repository page and I'll create a fork of the repository to my own account.
>
> **[0:45](https://www.linkedin.com/learning/learning-linux-command-line-26594217/using-github-codespaces-with-this-course?u=76281980&t=45)** I'll click this fork button up here near the top of the screen.
>
> **[0:52](https://www.linkedin.com/learning/learning-linux-command-line-26594217/using-github-codespaces-with-this-course?u=76281980&t=52)** I'll create the fork, and then from the fork in my own account, I'll click the green code button.
>
> **[0:59](https://www.linkedin.com/learning/learning-linux-command-line-26594217/using-github-codespaces-with-this-course?u=76281980&t=59)** I'll find the Codespaces section, and I'll click Create Codespace on Main.
>
> **[1:04](https://www.linkedin.com/learning/learning-linux-command-line-26594217/using-github-codespaces-with-this-course?u=76281980&t=64)** Then my Codespace starts up.
>
> **[1:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/using-github-codespaces-with-this-course?u=76281980&t=67)** This is a Linux container running in the cloud.
>
> **[1:10](https://www.linkedin.com/learning/learning-linux-command-line-26594217/using-github-codespaces-with-this-course?u=76281980&t=70)** It'll take a little while for itself to get all settled and when it's ready, it'll look like this.
>
> **[1:16](https://www.linkedin.com/learning/learning-linux-command-line-26594217/using-github-codespaces-with-this-course?u=76281980&t=76)** I'll clean things up a little bit here.
>
> **[1:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/using-github-codespaces-with-this-course?u=76281980&t=78)** I'll click to hide this panel for now, and I'll resize the sidebar here.
>
> **[1:23](https://www.linkedin.com/learning/learning-linux-command-line-26594217/using-github-codespaces-with-this-course?u=76281980&t=83)** This is the Codespaces environment.
>
> **[1:26](https://www.linkedin.com/learning/learning-linux-command-line-26594217/using-github-codespaces-with-this-course?u=76281980&t=86)** As I mentioned, this is usually used for software development, so there's a large portion of the screen for text documents.
>
> **[1:32](https://www.linkedin.com/learning/learning-linux-command-line-26594217/using-github-codespaces-with-this-course?u=76281980&t=92)** To open up a terminal, I'll click this three lines icon here on the top left, then go to Terminal, and I'll click New Terminal.
>
> **[1:44](https://www.linkedin.com/learning/learning-linux-command-line-26594217/using-github-codespaces-with-this-course?u=76281980&t=104)** I'll move this up and I'll close the document above it.
>
> **[1:50](https://www.linkedin.com/learning/learning-linux-command-line-26594217/using-github-codespaces-with-this-course?u=76281980&t=110)** In the course, I'll be using an [[Ubuntu]] desktop environment, and that looks a little different than this Codespaces environment, but anything I type in the terminal, you can type in this terminal.
>
> **[2:01](https://www.linkedin.com/learning/learning-linux-command-line-26594217/using-github-codespaces-with-this-course?u=76281980&t=121)** This is a Linux system in the cloud, and what we have in this terminal is the same bash shell that other versions of Ubuntu provide.
>
> **[2:10](https://www.linkedin.com/learning/learning-linux-command-line-26594217/using-github-codespaces-with-this-course?u=76281980&t=130)** There are a few differences between this environment and a local machine or a local virtual machine, and you'll notice those as we move through the course.
>
> **[2:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/using-github-codespaces-with-this-course?u=76281980&t=138)** For example, the user home directory and the use of super user privileges will differ slightly from what you see in the course, and the command line prompt that we have here is different than what it'll look like in the [[Representational State Transfer (REST)|rest]] of the course.
>
> **[2:30](https://www.linkedin.com/learning/learning-linux-command-line-26594217/using-github-codespaces-with-this-course?u=76281980&t=150)** In this environment, you won't be able to open graphical apps like I do on my system, but you can follow along with the command line material and complete the challenges here.
>
> **[2:39](https://www.linkedin.com/learning/learning-linux-command-line-26594217/using-github-codespaces-with-this-course?u=76281980&t=159)** Over here on the left side of the screen, I can see the exercise files for the course.
>
> **[2:44](https://www.linkedin.com/learning/learning-linux-command-line-26594217/using-github-codespaces-with-this-course?u=76281980&t=164)** I can click this disclosure triangle to see what's inside there, and as we'll see later in the course, I can move into that directory with cd space ExerciseFiles, and there's the files we'll be working with in the course.
>
> **[2:58](https://www.linkedin.com/learning/learning-linux-command-line-26594217/using-github-codespaces-with-this-course?u=76281980&t=178)** If you make changes to the files that are here, you'll need to commit them back to your fork of the repository in order to save them permanently.
>
> **[3:05](https://www.linkedin.com/learning/learning-linux-command-line-26594217/using-github-codespaces-with-this-course?u=76281980&t=185)** Changes will show up here in the source control area, and then you can provide a message and press commit.
>
> **[3:13](https://www.linkedin.com/learning/learning-linux-command-line-26594217/using-github-codespaces-with-this-course?u=76281980&t=193)** GitHub Codespaces is a really useful choice if you don't have remote or local access to a Linux system.
>
> **[3:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/using-github-codespaces-with-this-course?u=76281980&t=198)** Codespaces is available to all GitHub users, so if you're curious, check it out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Codespaces]] (10), [[Linux]] (6), [[GitHub]] (6), [[Software Development]] (2), [[Ubuntu]] (2)
> **Tools:** terminal (7), github (6), command line (3), bash (1)
> **CLI Commands:** make (2), find (1), cd (1)
> **Definitions:** is a  (3)
> **Cross-References:** later in (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)

#### [Creating a Linux virtual machine](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=0)** - [Instructor] If you don't have access to a [[Linux]] computer and you're not able to use [[GitHub]] Code Spaces, another option for following along with me here is to set up a Linux virtual machine on your computer.
>
> **[0:10](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=10)** Working in a virtual machine allows us to keep our learning work separate from our real computer, so we're free to make changes and mistakes that won't affect anything else, though it's a bit more work to get up and running.
>
> **[0:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=21)** I think it's worth the effort though.
>
> **[0:23](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=23)** You can decide for yourself.
>
> **[0:25](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=25)** There are many tools that allow us to create a virtual machine, and one of them that we can use on [[Windows]], Linux, or Mac Systems is called VirtualBox.
>
> **[0:33](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=33)** VirtualBox is free for personal use and it makes building and controlling a virtual machine pretty straightforward.
>
> **[0:39](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=39)** In this video, I'll show you briefly how to install [[Ubuntu]] Desktop in VirtualBox on a Windows PC.
>
> **[0:45](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=45)** If you have other preferences, by all means use the distribution or other software of your choice, but you'll be on your own for installation and troubleshooting.
>
> **[0:53](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=53)** We can get the files we need from [virtualbox.org](https://virtualbox.org) [Ubuntu.com](https://Ubuntu.com).
>
> **[0:58](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=58)** If you choose to use different software or different distro, you'll need to download the files your software choices require.
>
> **[1:04](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=64)** Let's take a look at the process of setting up a virtual machine.
>
> **[1:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=67)** Depending on the speed of your [[Hardware]], this could take up to 20 minutes or so.
>
> **[1:11](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=71)** Here's the VirtualBox website at [virtualbox.org](https://virtualbox.org).
>
> **[1:15](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=75)** And I can click the big blue button here to download the current version.
>
> **[1:19](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=79)** There's a few different options for the platform, so if you're using Windows, click the Windows one, and if you're using a Mac, click the appropriate option for your system.
>
> **[1:30](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=90)** I've downloaded this file so I'll open it up.
>
> **[1:33](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=93)** Here I'll move through the installer.
>
> **[1:41](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=101)** When the process is done, I'll click Finish.
>
> **[1:45](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=105)** Then I'll head over to [Ubuntu.com](https://Ubuntu.com) and download the installer for the operating system, I'll find Download Ubuntu, and here under the Desktop section, I'll click Download Ubuntu Desktop.
>
> **[2:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=120)** My computer has an Intel processor, so I'll choose this download.
>
> **[2:04](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=124)** If your system uses a different architecture, you'll need to check out the alternative downloads.
>
> **[2:09](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=129)** I'll click Download.
>
> **[2:12](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=132)** This is a pretty big file, so it might take a few minutes to download.
>
> **[2:15](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=135)** When that's done, I'll close my browser, and I'll find the VirtualBox manager software.
>
> **[2:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=141)** I'll click on the New button and it'll create a virtual machine.
>
> **[2:26](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=146)** I'll give my virtual machine a name.
>
> **[2:29](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=149)** In this case, Ubuntu Desktop.
>
> **[2:32](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=152)** And under the area labeled ISO Image, I'll click Other.
>
> **[2:39](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=159)** I'll browse to my downloads and I'll click the installer image that I just downloaded.
>
> **[2:46](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=166)** Then I'll choose Skip Unattended Installation.
>
> **[2:50](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=170)** I'll open the hardware section, and I'll provide an amount of memory for the system to use.
>
> **[2:58](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=178)** In my case, I'll use 8,192 megabytes.
>
> **[3:01](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=181)** That's eight gigabytes of memory.
>
> **[3:03](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=183)** And in the CPU section, I'll give my system four processor cores.
>
> **[3:08](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=188)** You'll need to make choices based on the hardware you have, but this is about the minimum that I'd recommend.
>
> **[3:14](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=194)** Then I'll open the hard disk section, and here I'll set how much space the virtual machine's disc can use.
>
> **[3:22](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=202)** I'll set this to 64 gigabytes.
>
> **[3:25](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=205)** This creates a virtual disc image that we'll erase later, but it won't affect anything else that's on your system.
>
> **[3:31](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=211)** When I've set that, I'll click Finish.
>
> **[3:35](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=215)** And then I'll click Start.
>
> **[3:38](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=218)** Depending on your monitor, the view here might be a little bit small, so to change the [[Zoom]], I'll click on View, and then I'll choose Virtual Screen 1.
>
> **[3:47](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=227)** Here I have a variety of options for scaling the display.
>
> **[3:50](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=230)** I'll start out with scale to 200%.
>
> **[3:54](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=234)** Well, that's a little small.
>
> **[3:58](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=238)** Let's zoom in a bit more, maybe 300%.
>
> **[4:01](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=241)** That's better.
>
> **[4:02](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=242)** Here I'll choose Try or Install Ubuntu and press Enter.
>
> **[4:06](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=246)** It looks like my zoom isn't quite right, so I'll double click the title bar here, and then I'll click View, Virtual Screen, and I'll zoom out a little bit.
>
> **[4:17](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=257)** I'll try 250%.
>
> **[4:20](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=260)** There we go.
>
> **[4:22](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=262)** And now I'll move through this installer.
>
> **[4:27](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=267)** I'll click Next a few times and then I'll skip this prompt.
>
> **[4:30](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=270)** I'll make sure Install Ubuntu is selected and click Next.
>
> **[4:34](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=274)** I'll use the interactive installation with a default selection, and then I'll move forward.
>
> **[4:40](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=280)** Now, I'm prompted to erase the disk and install the operating system.
>
> **[4:44](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=284)** This will erase the virtual disc that we just created, and there's nothing on it anyway, so I'll click Next.
>
> **[4:50](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=290)** Don't worry, none of your files will be affected.
>
> **[4:53](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=293)** Then I'm asked to create an account, so I'll provide my name and I'll set the name of my computer.
>
> **[5:01](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=301)** I'll call this one Linux VM.
>
> **[5:03](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=303)** Then I'll set a username that I'll use to log into the system.
>
> **[5:06](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=306)** I'll just use my first name here, and then I'll set a password.
>
> **[5:11](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=311)** I'll confirm that password, and then I'll click Next.
>
> **[5:15](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=315)** I'll make sure my time zone is set appropriately and I'll click Next.
>
> **[5:19](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=319)** Then we're ready to install, so I'll click the Install button.
>
> **[5:23](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=323)** This process can take a while, so we'll speed up the video here.
>
> **[5:28](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=328)** Okay, our installer's done, so I'll click Restart Now.
>
> **[5:32](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=332)** Then I'll press Enter.
>
> **[5:36](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=336)** I will click on my username and I'll type in the password I set during the installation process.
>
> **[5:44](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=344)** Then I'll move through these introductory screens.
>
> **[5:48](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=348)** Throughout the course, we'll be working with the command line shell in a terminal application, so I'll need to open my terminal.
>
> **[5:56](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=356)** To do that, I'll click on this area here in the top left and then start typing the [[Microsoft Word|word]] terminal.
>
> **[6:02](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=362)** Alright, T-E-R, and there it is.
>
> **[6:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=367)** I'll click on the Terminal.
>
> **[6:10](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=370)** I'll make this font a little bigger with Ctrl + Shift +.
>
> **[6:14](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=374)** You can change the colors of the terminal here if you'd like by right clicking in the terminal window and choosing Preferences.
>
> **[6:22](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=382)** And then here in the profile section, under the unnamed profile, I'll click on Colors and I can make a selection.
>
> **[6:31](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=391)** I'll close out of here and I'll double click the menu bar to make this window bigger.
>
> **[6:36](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=396)** Great, there's a terminal we can work with.
>
> **[6:40](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=400)** The next thing we need to do is to get the exercise files for this course downloaded to the system.
>
> **[6:45](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=405)** So to do that, I'll open up Firefox, the web browser that's included with Ubuntu Desktop, and I'll go to GitHub to download the exercise files for the course.
>
> **[6:54](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=414)** If you don't have a GitHub account, you can download the files from the [[LinkedIn]] learning course page.
>
> **[6:59](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=419)** Look for a link called Exercise Files.
>
> **[7:02](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=422)** Here on GitHub, I'll find the green code button, I'll click it, and then I'll choose download zip.
>
> **[7:13](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=433)** I'll close my browser.
>
> **[7:15](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=435)** I'll open the file browser and I'll click on My Downloads.
>
> **[7:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=441)** Here I'll right click on the file and choose Extract.
>
> **[7:27](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=447)** This creates a directory and I'll open that up.
>
> **[7:32](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=452)** Here I see the exercise files directory, so I'll drag those into my documents directory.
>
> **[7:39](https://www.linkedin.com/learning/learning-linux-command-line-26594217/creating-a-linux-virtual-machine?u=76281980&t=459)** That's where I'll be using them for the [[Representational State Transfer (REST)|rest]] of the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ubuntu]] (9), [[Linux]] (4), [[GitHub]] (4), [[Windows]] (4), [[Zoom]] (4)
> **Tools:** terminal (7), github (4), command line (1), firefox (1)
> **UI Navigation:** click on (8), open the (3), go to (1)
> **CLI Commands:** make (7), find (3)
> **Prerequisites:** install (6), you'll need (3), set up (1)
> **Exercise Files:** download the (5), exercise files (4)
> **URLs:** [virtualbox.org](https://virtualbox.org) (2), [ubuntu.com](https://ubuntu.com) (2)
> **Env Vars:** iso (1), cpu (1)

#### [Following along on other platforms](https://www.linkedin.com/learning/learning-linux-command-line-26594217/following-along-on-other-platforms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/following-along-on-other-platforms?u=76281980&t=0)** - [Instructor] If you're not able to use a [[Linux]] PC or [[GitHub]] [[Codespaces]] or to make a virtual machine in VirtualBox, there are some other choices available.
>
> **[0:08](https://www.linkedin.com/learning/learning-linux-command-line-26594217/following-along-on-other-platforms?u=76281980&t=8)** On [[Windows 10]] and later, you could use [[Windows]] Subsystem for Linux, a feature of Windows that runs an instance of a Linux environment, right within Windows.
>
> **[0:17](https://www.linkedin.com/learning/learning-linux-command-line-26594217/following-along-on-other-platforms?u=76281980&t=17)** It's not a full desktop installation of Linux, but it's enough to learn about Bash and about the standard toolchain that you'll find on most Linux systems.
>
> **[0:25](https://www.linkedin.com/learning/learning-linux-command-line-26594217/following-along-on-other-platforms?u=76281980&t=25)** Windows Subsystem for Linux is available from the [[Microsoft]] Store for free.
>
> **[0:30](https://www.linkedin.com/learning/learning-linux-command-line-26594217/following-along-on-other-platforms?u=76281980&t=30)** Setting that up takes some specific work in Windows, and that's not the focus of this course, but I do have another course called Learning Windows Subsystem for Linux that covers installation and configuration of WSL using [[Ubuntu]].
>
> **[0:42](https://www.linkedin.com/learning/learning-linux-command-line-26594217/following-along-on-other-platforms?u=76281980&t=42)** So if that's an option you're interested in, go check that out.
>
> **[0:46](https://www.linkedin.com/learning/learning-linux-command-line-26594217/following-along-on-other-platforms?u=76281980&t=46)** If you're following along on a Mac, I would recommend that you create a virtual machine with a VirtualBox or another free virtualization option, like UTM, or use a paid tool like VMware Fusion or Parallels Desktop to create a VM.
>
> **[1:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/following-along-on-other-platforms?u=76281980&t=60)** When you do this, make sure to download and use the Linux installer that's appropriate for your system's architecture.
>
> **[1:06](https://www.linkedin.com/learning/learning-linux-command-line-26594217/following-along-on-other-platforms?u=76281980&t=66)** That means that if you have an Intel Mac, you'll want to use the AMD64 or x86-64 version of the installer.
>
> **[1:14](https://www.linkedin.com/learning/learning-linux-command-line-26594217/following-along-on-other-platforms?u=76281980&t=74)** And if you have an Apple silicon Mac, an M1, M2, M3, or so on, then you'll want the ARM64 or AR64 version of the installer image.
>
> **[1:23](https://www.linkedin.com/learning/learning-linux-command-line-26594217/following-along-on-other-platforms?u=76281980&t=83)** The Mac does come with Bash, but it's a very old version, it's not enabled by default, and it's not guaranteed to be available in the future.
>
> **[1:31](https://www.linkedin.com/learning/learning-linux-command-line-26594217/following-along-on-other-platforms?u=76281980&t=91)** The shell that macOS uses by default now is called a Z shell, which is similar to Bash, but it's not the same.
>
> **[1:37](https://www.linkedin.com/learning/learning-linux-command-line-26594217/following-along-on-other-platforms?u=76281980&t=97)** And the Mac is based on BSD Unix, not on Linux.
>
> **[1:40](https://www.linkedin.com/learning/learning-linux-command-line-26594217/following-along-on-other-platforms?u=76281980&t=100)** So in reality, the Mac's terminal is not a Linux command-line interface.
>
> **[1:45](https://www.linkedin.com/learning/learning-linux-command-line-26594217/following-along-on-other-platforms?u=76281980&t=105)** A lot of what I'll cover in the course does work just fine in Z shell on a Mac, but there are some exceptions.
>
> **[1:51](https://www.linkedin.com/learning/learning-linux-command-line-26594217/following-along-on-other-platforms?u=76281980&t=111)** So unless you have no other choices available, I wouldn't recommend trying to follow the course using the Mac terminal directly.
>
> **[1:59](https://www.linkedin.com/learning/learning-linux-command-line-26594217/following-along-on-other-platforms?u=76281980&t=119)** It's also possible to follow along with most of this course using a remote Linux host through SSH, but setting that up is beyond the scope of this course, and you won't be able to easily follow along with the parts of the course where I'm using the graphical interface.
>
> **[2:12](https://www.linkedin.com/learning/learning-linux-command-line-26594217/following-along-on-other-platforms?u=76281980&t=132)** So I can't recommend that method as a first choice, but if it's all you have, it can work.
>
> **[2:17](https://www.linkedin.com/learning/learning-linux-command-line-26594217/following-along-on-other-platforms?u=76281980&t=137)** And in any of these cases, you'll still want to download the exercise files from GitHub, either through the command-line [[Git]] interface, or by visiting the repository site and downloading the files directly.
>
> **[2:27](https://www.linkedin.com/learning/learning-linux-command-line-26594217/following-along-on-other-platforms?u=76281980&t=147)** The files are available at this address, and if you download them as a ZIP file, you'll need to unzip that archive and put the files into whatever directory you'll be using.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (11), [[Windows]] (6), [[GitHub]] (2), [[Codespaces]] (1), [[Windows 10]] (1)
> **Env Vars:** wsl (1), utm (1), amd64 (1), arm64 (1), ar64 (1)
> **Tools:** bash (3), github (2), terminal (2)
> **CLI Commands:** make (2), find (1), ssh (1), git (1), unzip (1)
> **Exercise Files:** exercise files (1), zip file (1)
> **Definitions:** means that (1), is called (1)
> **Code Identifiers:** macos (1)
> **Analogies:** similar to (1)


### 2. Command-Line Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [What is the command line?](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-is-the-command-line?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-is-the-command-line?u=76281980&t=0)** - [Instructor] Many of us are familiar with using a computer that has a graphical user interface, and that term is often shortened to G-U-I or GUI.
>
> **[0:09](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-is-the-command-line?u=76281980&t=9)** In that environment, we're accustomed to seeing visual elements like scroll areas, images, buttons, and dropdown menus.
>
> **[0:17](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-is-the-command-line?u=76281980&t=17)** We can drag [[Windows]] around, click links, and view tables of information or images.
>
> **[0:23](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-is-the-command-line?u=76281980&t=23)** In a lot of cases, that's exactly what we want for photo editing, document layout, browsing the web, [[Graphic Design]], watching movies, and playing games.
>
> **[0:34](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-is-the-command-line?u=76281980&t=34)** Many tools that we use in [[Software Development]], [[System Administration]], and data analysis don't use a graphical interface to operate.
>
> **[0:42](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-is-the-command-line?u=76281980&t=42)** Sometimes, this software runs on computers in data centers, but it can also run on home servers, on our own computers, or on specialized [[Hardware]] like a network router or other smart device.
>
> **[0:54](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-is-the-command-line?u=76281980&t=54)** But we still need a way of interacting with these programs to send them information, to control their operation, and to retrieve the results of what they do.
>
> **[1:03](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-is-the-command-line?u=76281980&t=63)** One way we interact with programs installed on our computer that don't have or don't use a GUI is through a command-line interface.
>
> **[1:09](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-is-the-command-line?u=76281980&t=69)** The command-line is a common name for a text-based interface where we type commands and where we can see the output of those commands written to the screen.
>
> **[1:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-is-the-command-line?u=76281980&t=78)** Command-line interfaces are common in many tools, but especially on [[Linux]] systems.
>
> **[1:23](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-is-the-command-line?u=76281980&t=83)** Controlling the system or working with programs in a command-line interface is often the primary mode of using the system.
>
> **[1:30](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-is-the-command-line?u=76281980&t=90)** Command-line programs can read from and write to files, or use information from or sent information to other programs or other systems.
>
> **[1:39](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-is-the-command-line?u=76281980&t=99)** While the idea of typing commands into a computer can seem like something outdated or historical or something only dangerous hackers do when they're breaking into other people's computers, working with a command-line in a terminal or console is something many system administrators, developers, scientists, hobbyists, and others do every day.
>
> **[2:01](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-is-the-command-line?u=76281980&t=121)** The software we'll use to work at the command-line is called a shell or a command-line interpreter, and there are many shells out there.
>
> **[2:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-is-the-command-line?u=76281980&t=127)** Bash, the Bourne Again Shell, was first released in 1989.
>
> **[2:12](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-is-the-command-line?u=76281980&t=132)** It's still one of the most widely used shells on Linux systems, and it's the one you're likely to need to become familiar with as you begin your Linux command-line journey.
>
> **[2:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-is-the-command-line?u=76281980&t=141)** Bash extends the capabilities of earlier shells and adds newer features as well.
>
> **[2:27](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-is-the-command-line?u=76281980&t=147)** Bash builds on an earlier shell called the Bourne shell, and that itself built on the idea of a command-line interpreter called the Thompson shell for Unix.
>
> **[2:35](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-is-the-command-line?u=76281980&t=155)** Over time, these shells evolved, and they continue to evolve and develop today.
>
> **[2:40](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-is-the-command-line?u=76281980&t=160)** Bash is the shell that comes enabled by default with most of the popular Linux distributions.
>
> **[2:46](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-is-the-command-line?u=76281980&t=166)** It's available in Windows with the Windows Subsystem for Linux, and it's also available on macOS, though it's not the default shell there.
>
> **[2:54](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-is-the-command-line?u=76281980&t=174)** I'll be using Bash throughout the course, though I encourage you to explore some of the other shells out there once you have a foundation working in Bash, if you're curious.
>
> **[3:03](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-is-the-command-line?u=76281980&t=183)** In most cases, command-line users will use a shell like Bash through a terminal application, either in full screen mode or as a window in their graphical environment.
>
> **[3:13](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-is-the-command-line?u=76281980&t=193)** It's common to use both graphical and text-based modes of interaction at the same time, and it's common to have more than one terminal window open at the same time to perform different tasks.
>
> **[3:23](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-is-the-command-line?u=76281980&t=203)** Some programs like software development tools include a built-in terminal as well.
>
> **[3:29](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-is-the-command-line?u=76281980&t=209)** In some cases, we might use the command-line shell on a console, where it's the only thing on the screen.
>
> **[3:36](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-is-the-command-line?u=76281980&t=216)** The terms can seem a little confusing at first.
>
> **[3:39](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-is-the-command-line?u=76281980&t=219)** The command-line is the general name for a text environment, where we issue commands by typing.
>
> **[3:45](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-is-the-command-line?u=76281980&t=225)** The shell is the software that accepts and runs those commands.
>
> **[3:49](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-is-the-command-line?u=76281980&t=229)** The terminal emulator is the software the shell runs inside of, in most cases, unless we're using it as the only interface on a system, in which case we'd call the interface a console.
>
> **[3:58](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-is-the-command-line?u=76281980&t=238)** Because these different pieces are so closely linked, many people call the shell the terminal and vice versa, and really, there isn't any harm in doing so.
>
> **[4:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-is-the-command-line?u=76281980&t=247)** Generally, people will know what you mean.
>
> **[4:10](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-is-the-command-line?u=76281980&t=250)** But it's important to know that each of these components are different because their roles will become more distinct once your usage becomes more advanced.
>
> **[4:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/what-is-the-command-line?u=76281980&t=258)** In this course, we'll be learning about the Linux command-line interface using the Bash shell in a terminal emulator.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (6), [[Windows]] (3), [[Software Development]] (2), [[Graphic Design]] (1), [[System Administration]] (1)
> **Tools:** bash (8), terminal (7)
> **Env Vars:** gui (2)
> **Definitions:** is a  (1), is called (1)
> **Code Identifiers:** macos (1)
> **UI Navigation:** dropdown (1)
> **Speakers:** - [instructor] (1)

#### [Understand how commands are structured](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=0)** - [Instructor] There are a few terms and ideas we need to be familiar with to really be productive using the command line.
>
> **[0:06](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=6)** Before we jump into using commands, let's take a look at how a command line statement is structured, or its syntax.
>
> **[0:13](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=13)** The general pattern we'll see is command, options, and arguments.
>
> **[0:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=18)** Here's a couple of common commands you'll see with options and arguments that are used with them.
>
> **[0:22](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=22)** Don't worry about the specifics of the commands right now.
>
> **[0:25](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=25)** We'll explore them in more detail later on.
>
> **[0:28](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=28)** I just want to show you the structure of what we'll be working with before we get into what these actually do.
>
> **[0:33](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=33)** Depending on what we're doing, we might just have a command, or a command and one or more options, or we might just have a command with one or more arguments.
>
> **[0:43](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=43)** But when we're issuing a command at the command line, there will always be a command.
>
> **[0:48](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=48)** The command is the program you're running or the action you're taking.
>
> **[0:52](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=52)** Without a command, the shell won't know what to do with options or arguments.
>
> **[0:56](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=56)** Options and arguments apply to commands.
>
> **[0:59](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=59)** A lot of commands we'll see have names that are very short strings of letters, sometimes just a few letters, though sometimes, they're short words or shortened words.
>
> **[1:08](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=68)** This is a tradition that goes back a long time.
>
> **[1:11](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=71)** The names of many commands are just long enough to represent what they mean, rather than using a whole [[Microsoft Word|word]] or phrase.
>
> **[1:17](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=77)** While it can make commands a little harder to remember and discover, as we become more familiar with the command line, we'll see how it's a lot more convenient to type a short command like ls every time we want to list the files in a folder, instead of typing out list or list files or something longer like that.
>
> **[1:33](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=93)** Many aspects of the command line are all about efficiency, sometimes at the cost of understandability, at least when we're getting started.
>
> **[1:41](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=101)** For example, these commands here, ls, du, cat, df, grep, and so on, are all very commonly used, but at first glance, they don't really seem to be anything other than some random letters.
>
> **[1:53](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=113)** The more you practice and learn, the more sense all of these things will make.
>
> **[1:58](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=118)** So a command is a program that takes a particular action.
>
> **[2:01](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=121)** It's what we're asking the system to do.
>
> **[2:04](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=124)** Sometimes a command does something just by itself, but other times, we'll want to change how a command works, or give it information to use.
>
> **[2:12](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=132)** The next part of the command line statement, the options, tell the command how to operate, changing the behavior of the command or telling it to perform different actions.
>
> **[2:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=141)** In many cases, these options start with a dash or minus sign, and they're usually represented by a letter or number.
>
> **[2:28](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=148)** Most commands offer more than one option, and when we need to use more than one, we can list them together or individually.
>
> **[2:35](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=155)** For example, starting with just the ls command, I can add the option -l, which tells the ls command to show me a long listing of files in a directory rather than a shorter one.
>
> **[2:46](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=166)** That means it shows more details about files, as we'll see shortly.
>
> **[2:50](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=170)** I can add other options too, like -a, which shows files that are normally hidden alongside the regular files.
>
> **[2:57](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=177)** We can think of a as standing for all files, not just normally visible ones, and allow -h, which tells the command to show me the file sizes in human readable units.
>
> **[3:08](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=188)** In many cases, the character for an option has some bearing on what that option does, like we've seen here, l for long listing, a for all files, not just normally visible ones, and h for human readable.
>
> **[3:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=201)** That custom helps us remember options without resorting to the documentation all the time.
>
> **[3:26](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=206)** But as we'll see, the documentation is there for us should we need to look something up.
>
> **[3:31](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=211)** Most of the time, we'll combine them, right after one dash with no spaces in between, like this.
>
> **[3:36](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=216)** The order of options doesn't really matter, so ls -ahl would do the same thing.
>
> **[3:42](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=222)** Some people prefer to put combined options in order alphabetically, and some people use other strategies to determine how they want to write short form options.
>
> **[3:50](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=230)** Some options have a longer syntax, and they start with two dashes.
>
> **[3:54](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=234)** The options that have two dashes can't be combined together.
>
> **[3:57](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=237)** They have to be written independently, separated by space.
>
> **[4:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=240)** Again, don't worry about what each of these options does.
>
> **[4:03](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=243)** We'll get into that later.
>
> **[4:05](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=245)** For now, it's important just to see where the pieces go.
>
> **[4:08](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=248)** That'll help you understand what the pieces do as we go along.
>
> **[4:12](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=252)** The last portion of a statement is the argument or arguments.
>
> **[4:16](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=256)** This is where we tell the command what thing to operate on.
>
> **[4:19](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=259)** It's usually a file or path or set of files or directories separated by spaces, but an argument can also be a string of text or something else.
>
> **[4:28](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=268)** In this first example, we're telling the ls command to show us the contents of the usr bin directory, and further down, we're telling the sort command to sort a file called users.
>
> **[4:39](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=279)** The last example uses a file called haystack, which is being provided to the grep command as an argument, and we're using the -i option to look for the text "needle".
>
> **[4:50](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=290)** I should point out here that, strictly speaking, the text "needle" is also an argument, but it's an argument to the -i option, not directly to the grep command.
>
> **[4:59](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=299)** Options can take arguments of their own, but for the purposes of this course, we'll consider arguments to be those that are passed to the command itself, not ones passed to an option, and we'll consider arguments to options as part of the option itself.
>
> **[5:13](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=313)** All of the commands we might use in a [[Linux]] command line environment will follow this basic pattern.
>
> **[5:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=318)** Every command will have a command name.
>
> **[5:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=321)** Some commands may have options, and some commands may use arguments.
>
> **[5:26](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-how-commands-are-structured?u=76281980&t=326)** So understanding the pattern will help us learn and use unfamiliar commands in the future.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1), [[Linux]] (1)
> **CLI Commands:** ls (6), grep (3), make (2), cat (1)
> **Tools:** command line (7)
> **Documentation:** the documentation (2)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)

#### [Write commands in a shell at the prompt](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=0)** - [Instructor] Now that we know the general structure of a command, let's see how to send those commands to the system.
>
> **[0:06](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=6)** I'll open a terminal here on my machine.
>
> **[0:10](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=10)** I'll open my app selector and I'll search for the program terminal, and then I'll open it.
>
> **[0:17](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=17)** The terminal application runs a shell program, which I mentioned before.
>
> **[0:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=21)** That's the text-based interface where we can interact with the system.
>
> **[0:25](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=25)** On your system, you can usually find the terminal application in a utilities directory, or if your system doesn't start up with a graphical interface, you'll find yourself at the shell after logging in in a console environment.
>
> **[0:37](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=37)** The first thing we see in a shell is the prompt.
>
> **[0:40](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=40)** The prompt shows a little bit of information.
>
> **[0:43](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=43)** In my case, it's my username at my host name, which is the computer's name, and the name of the directory where I'm currently working.
>
> **[0:53](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=53)** Right now, that directory shows as a tilde character, which represents my user's home directory.
>
> **[0:59](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=59)** We'll learn more about that a little bit later.
>
> **[1:02](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=62)** On different platforms, the prompt is a little bit different, still with much of the same information, but sometimes in a different order.
>
> **[1:09](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=69)** Because it's different on different platforms, You might wonder if you can customize it further, and you can, but that's not something we're going to do right now.
>
> **[1:17](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=77)** What we're focusing on right now is the right side of the prompt, where the cursor is.
>
> **[1:22](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=82)** That's where we'll type commands to send to the system, so let's run a command.
>
> **[1:27](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=87)** I'll type ls and press Enter.
>
> **[1:31](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=91)** When I do that, the shell interprets my command.
>
> **[1:34](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=94)** It runs the LS program, and it considers any other information I've given the command, and then it displays the results, in this case, a list of files and directories in my current working directory, which is my user's home directory.
>
> **[1:48](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=108)** Earlier, we saw how to add options to the command.
>
> **[1:52](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=112)** I'll type ls again and then press Space, and then I'll add the l option with -l.
>
> **[1:59](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=119)** I'll press Enter, and you can see how using this option changes how the ls command works.
>
> **[2:05](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=125)** - l means long listing, and that tells the ls program to show files with more detail than just a list of names.
>
> **[2:13](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=133)** Specifying an option like this only changes how the command behaves the one time it's being used.
>
> **[2:19](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=139)** If I write ;s again without the option, it behaves as it did before.
>
> **[2:24](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=144)** If I try to run a command that doesn't exist or that the system doesn't know about, I get an error message from the Shell.
>
> **[2:30](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=150)** For example, if I type list, L-I-S-T, instead of ls, I see an error, but it doesn't hurt anything.
>
> **[2:38](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=158)** In this case, the Shell is trying to be helpful and it's giving me a few things that it thinks I might have meant.
>
> **[2:44](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=164)** These are other programs or packages that we could install.
>
> **[2:48](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=168)** If I really go off the rails with a command like this set of random letters, the shell will have no idea what I'm trying to do and it will just return an error.
>
> **[2:58](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=178)** So it's important to note that, as they say, spelling counts when we're working at the command line.
>
> **[3:03](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=183)** Commands need to be spelled exactly right or they won't work.
>
> **[3:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=187)** Spacing and other characters we'll use need to be correct.
>
> **[3:11](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=191)** The shell usually won't help us out if we get a command a little bit wrong or spell something a little differently than it expects.
>
> **[3:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=198)** The upside of this is that misspellings and typos of command names will very rarely cause any kind of problem or damage.
>
> **[3:25](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=205)** The shell will just say, "Nope, command not found. Try again."
>
> **[3:30](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=210)** The downside though is that we need to be very careful when we type, and we need to carefully check what we've typed if we come across an unexpected error.
>
> **[3:38](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=218)** Misuse or mistaken use of options can cause real problems, so it's always a good idea to double-check a command before you run it.
>
> **[3:46](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=226)** That aside, you may be left wondering what commands you can use and maybe even where they come from.
>
> **[3:52](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=232)** Those are great questions and we'll be exploring those in more detail as we move forward.
>
> **[3:57](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=237)** These commands we can use are either programs installed on the system or they're keywords of a shell like bash.
>
> **[4:04](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=244)** Most of what we'll use in this course are programs, which are part of the GNU core utilities, or coreutils, the standard programs that come with most [[Linux]] distributions.
>
> **[4:13](https://www.linkedin.com/learning/learning-linux-command-line-26594217/write-commands-in-a-shell-at-the-prompt?u=76281980&t=253)** And next, we'll see how to find commands and how to learn what they do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (1)
> **CLI Commands:** ls (6), find (3), rails (1)
> **Tools:** terminal (4), command line (1), bash (1)
> **Speakers:** - [instructor] (1), - l (1)
> **Env Vars:** gnu (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)

#### [Finding help for commands](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=0)** - [Instructor] If you see an experienced [[Linux]] user, typing away at the command line, or you see a snippet of bash commands in a tutorial, a guide, or documentation, it can seem like memorizing the ins and outs of commands and options is the only way to be productive and understand what's going on.
>
> **[0:17](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=17)** But everybody starts somewhere, and even experienced command line users don't memorize everything.
>
> **[0:24](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=24)** Albert Einstein is credited with saying that he didn't carry a lot of technical information in his mind because that information was readily available in books.
>
> **[0:32](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=32)** And as with so much information in programming and the technical world, it's just not practical to try to memorize all of the syntax and options of command line tools.
>
> **[0:42](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=42)** Of course, it's important to learn and remember the basics, but while we're getting started, we only need to remember a few commands.
>
> **[0:49](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=49)** The first one is man, which stands for the manual pages, or man pages.
>
> **[0:55](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=55)** We can think of the man pages as a technical reference book for our Linux distribution.
>
> **[1:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=60)** If we know the name of a command, we can find out a wealth of information about what it does, what options it provides, and what arguments it takes.
>
> **[1:09](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=69)** I'll switch back to my Linux system here and I'll clear the terminal with clear.
>
> **[1:13](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=73)** I'll type C-L-E-A-R, and presenter.
>
> **[1:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=78)** That'll clear out the screen.
>
> **[1:20](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=80)** To look something up in the man pages, let's type man, followed by a command name.
>
> **[1:26](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=86)** Earlier, we saw the command LS, so let's take a look at that.
>
> **[1:30](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=90)** My command now is man space LS, and I'll press enter.
>
> **[1:35](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=95)** And here, I can see some information about the LS command.
>
> **[1:38](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=98)** I can see that it's for listing directory contents, and I get a quick overview of how to use the command in the synopsis section.
>
> **[1:47](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=107)** To use this command, I'd write LS, followed by any of the options that I need and the file or directory path that I want to use.
>
> **[1:55](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=115)** These terms in square brackets are optional.
>
> **[1:58](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=118)** I could just use the LS command by itself to see the default output of listing the current working directory.
>
> **[2:05](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=125)** Here below the description header, there's a little bit more detailed information about the command, including its default behavior and usage notes.
>
> **[2:13](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=133)** And below that, begins a listing of the options that the command takes.
>
> **[2:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=138)** Occasionally, you'll come across a command that takes no options, but that's fairly rare.
>
> **[2:23](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=143)** Here at the bottom of the screen, I have a little status bar that tells me that my cursor is on line one of this document and it offers some options like help and quit.
>
> **[2:32](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=152)** I'll press the H key to show the help, and I want to direct your attention to the section called Moving.
>
> **[2:41](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=161)** Two of the most useful key commands here are F and B for moving forward and backward.
>
> **[2:47](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=167)** There's also Z and W, which move in a similar way, but I find that I accidentally hit Q when I use those, which quits the man pages tool when I mean to hit W.
>
> **[2:57](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=177)** You can also move up and down by a line with the up and down arrows, and you can move down by a screen fill at a time with a space bar.
>
> **[3:05](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=185)** There's a whole lot of information here which you can page through hitting F to go forward, or B to go back up.
>
> **[3:12](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=192)** If you're feeling adventurous, you can explore that on your own time.
>
> **[3:15](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=195)** It's worth noting that these navigation commands are, actually, commands for another tool called Less, but we'll get to that later on.
>
> **[3:23](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=203)** There are a lot of ways to use the man pages very, very efficiently, but for our purposes here, paging up and down is just fine.
>
> **[3:30](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=210)** I'll press Q to exit the help, and go back to the man page for LS.
>
> **[3:35](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=215)** Here, I can use the F and B keys we saw before to move through the documentation.
>
> **[3:40](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=220)** Notice that the status bar at the bottom is showing me where my cursor is and therefore, what section of the document I'm seeing in terms of lines of text.
>
> **[3:48](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=228)** I'm not looking up anything in particular yet, so I'll just press Q to quit and I'll go back to my command line.
>
> **[3:55](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=235)** At this point, I want you to just be familiar with using the man command as we go along, in case you want to look anything up.
>
> **[4:01](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=241)** Many commands also have an option called help, which provides a brief amount of information about them.
>
> **[4:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=247)** However, they usually refer you to the man pages for more detailed documentation.
>
> **[4:11](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=251)** You can see if a command you're using has this feature available by typing dash dash help after the command.
>
> **[4:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=258)** For example, I'll write LS space dash dash H-E-L-P.
>
> **[4:24](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=264)** And here, we can scroll up to take a look at some of the information.
>
> **[4:29](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=269)** I'll scroll back down, and again, I'll clear the screen with the clear command.
>
> **[4:34](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=274)** There's another command that's useful when you're working with Bash, and that's just help by itself.
>
> **[4:40](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=280)** As you get more into working with a Bash shell, the help tool can act as a handy reminder for the syntax of some Bash specific commands.
>
> **[4:48](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=288)** I don't want to run this command right now though, so I'll press CTRL C to cancel that command and move back to my prompt.
>
> **[4:55](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=295)** What if we don't know the name of a command we're looking for?
>
> **[4:58](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=298)** In that case, we can use another command called apropos.
>
> **[5:02](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=302)** That's spelled A-P-R-O-P-O-S.
>
> **[5:06](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=306)** Apropos searches a list of installed programs that can be used as commands and their descriptions for text that you provide as an argument.
>
> **[5:13](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=313)** So if I wanted to find out what can list things, I could type apropos list and see a number of results that match that [[Microsoft Word|word]].
>
> **[5:22](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=322)** I'll take some time to look through these results, and sure enough, here's a command that can list directory contents.
>
> **[5:30](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=330)** It's LS.
>
> **[5:32](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=332)** Searching for commands this way can be time consuming, but if you know what you need to do, but not the command to do it, apropos can be helpful.
>
> **[5:39](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=339)** Using the documentation isn't something that's only for beginners.
>
> **[5:43](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=343)** Advanced users of the command line use documentation often both to refresh their knowledge and to find out the specifics of how things work, in much the same way that writers and other professionals frequently turn to a dictionary, a thesaurus, or other reference materials as they work.
>
> **[5:59](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=359)** It's very useful both as a beginner, and as you become more advanced to keep a notebook of commands and tasks you find yourself using often, and of things that took you a while to figure out.
>
> **[6:10](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-help-for-commands?u=76281980&t=370)** That way, you can build your own custom documentation to supplement the built-in documentation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (3), [[Microsoft Word|Word]] (1)
> **CLI Commands:** ls (8), find (5)
> **Tools:** command line (5), bash (4), terminal (1)
> **Documentation:** the documentation (2), man page (1)
> **Cross-References:** go back to (2)
> **Env Vars:** ctrl (1)
> **UI Navigation:** scroll up (1)
> **Definitions:** stands for (1)

#### [Helpful keyboard shortcuts in the terminal](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=0)** - [Instructor] Before we move on to more specific commands, there's a few other helpful things to know about working with commands at the command line.
>
> **[0:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=7)** The first is tab completion.
>
> **[0:09](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=9)** Tab completion is a feature of the bash shell and of many other shells too, and it lets us skip typing out a whole file name or directory name when we're working at the command line.
>
> **[0:19](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=19)** It looks at all the information available to it and it makes a guess about what we mean.
>
> **[0:24](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=24)** I'll switch back to my terminal here and clear my screen.
>
> **[0:28](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=28)** I'll type ls -l De, and then I'll press tab.
>
> **[0:35](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=35)** And it completes the line with desktop, because desktop is a directory in the current working directory, which is my home directory.
>
> **[0:43](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=43)** I'll press control C to cancel this command.
>
> **[0:46](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=46)** We saw this before.
>
> **[0:48](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=48)** Control C will cancel out of a line that we've written, and it will also immediately end most command line tasks if we need to do that.
>
> **[0:55](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=55)** Now I'll type ls -l dash, Do, and press tab, and this time I get nothing.
>
> **[1:04](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=64)** That's because tab doesn't have one clear suggestion to return.
>
> **[1:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=67)** I can press tab again, and now I see a list of possibilities, documents, and downloads, which both start with the letters D-O.
>
> **[1:16](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=76)** The terminal has put what I typed before here at the prompt so I can continue using it.
>
> **[1:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=81)** I'll type C and press tab.
>
> **[1:24](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=84)** Now the shell knows what I mean because nothing else inside this directory besides documents matches DOC.
>
> **[1:31](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=91)** I can press enter and I see some information about the contents of this directory.
>
> **[1:36](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=96)** Auto complete also works with commands in bash, not just paths, which makes it somewhat easier to discover new commands, or to refresh your memory if you only remember the first part of a command.
>
> **[1:46](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=106)** Let's give that a try with the letter A.
>
> **[1:49](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=109)** I'll press tab twice, and here I can page through the commands with the space bar.
>
> **[1:54](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=114)** I still have my letter A here, and if I put a space there and hit tab a few times, bash is treating this as though I'm using A as a command and now I'm looking for an argument to pass to it.
>
> **[2:06](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=126)** So it's showing me the files and directories in my current working directory that it thinks I might want to pass into the A command, which doesn't actually do anything.
>
> **[2:14](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=134)** For now, I'll backspace the command and type clear to clear the screen.
>
> **[2:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=141)** Once we move beyond short commands, it'll sometimes become necessary to move the cursor or insertion point around and edit commands or parameters.
>
> **[2:29](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=149)** We can use the arrow keys for that, but it gets pretty tedious to have to click for every character you want to move.
>
> **[2:34](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=154)** Luckily, there are some shortcut keys to help us out.
>
> **[2:38](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=158)** Control A and control E move to the beginning and end of the line respectively.
>
> **[2:43](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=163)** The control key is represented by the caret character, which is a pointy little peek looking character.
>
> **[2:49](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=169)** Caret is spelled C-A-R-E-T, not like the vegetable, and we'll see it often in documentation and in various applications to let us know that we can use the control key in combination with another key to do something.
>
> **[3:01](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=181)** Here, we can see that caret character, standing in for control.
>
> **[3:05](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=185)** When we're working at the command line, we'll often use short commands, but sometimes individual commands or series of commands can become very long and even wrap around to the next line or more lines.
>
> **[3:16](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=196)** What we enter at the prompt is considered to be one line and one line only, up until we press return.
>
> **[3:22](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=202)** So in the case of a long command, what might look to us like more than one line being wrapped because of space constraints is really treated as just one long line.
>
> **[3:31](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=211)** So moving to the beginning in this example would move the cursor to before the R in the R sync command, and moving to the end would move the cursor to after the K, in the last instance of the [[Microsoft Word|word]] work.
>
> **[3:42](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=222)** Moving to the beginning or end of a line is useful for making changes, but with long commands, it may still not get us close enough to what we need to change.
>
> **[3:51](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=231)** Control left arrow and control right arrow, move backward and forward one word at a time, using spaces and other non-alphanumeric characters like slashes as the breaks between words.
>
> **[4:03](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=243)** Control U deletes text from the cursor position to the beginning of the line, and control K deletes from the cursor position to the end of the line.
>
> **[4:12](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=252)** These are useful for replacing the command if we have a long path we don't want to retype, or replacing the path or another argument without having to retype a long or complex command with options.
>
> **[4:23](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=263)** But of course, we can still move with the arrows and use backspace or delete to remove characters one at a time too.
>
> **[4:29](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=269)** And if we need to copy and paste in the shell, we'll need to use control shift C and control shift V to do that instead of the regular control C and control V.
>
> **[4:38](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=278)** Remember, control C cancels a command, so we have to use something different to copy text in this environment.
>
> **[4:45](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=285)** Another helpful set of shortcuts are the up and down arrows, which we can use to recall and scroll through previous commands that we typed in the bash shell.
>
> **[4:54](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=294)** It works like navigating a list.
>
> **[4:56](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=296)** We press up once, and we'll recall the previous command.
>
> **[5:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=300)** Press up twice, and it's the second most recent, and we can go back down the list with a down arrow.
>
> **[5:06](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=306)** We can also search our command history by pressing CTRL R and then starting to type a command or a path.
>
> **[5:13](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=313)** Bash will show us what matches, and we can use control R again to cycle between matches.
>
> **[5:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=318)** And as we said briefly earlier, if we've typed a long command and don't want to run it, we can just type CTRL C to abandon it rather than having to backspace or delete it.
>
> **[5:27](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=327)** Doing this we'll return us to an empty prompt.
>
> **[5:31](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=331)** When we're learning to use the command line, we don't have to use these shortcuts.
>
> **[5:35](https://www.linkedin.com/learning/learning-linux-command-line-26594217/helpful-keyboard-shortcuts-in-the-terminal?u=76281980&t=335)** They can be a lot to remember, but as we become more advanced, we'll probably find them helpful because they can save a lot of time once we make them part of our workflow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2)
> **Tools:** command line (5), bash (5), terminal (2)
> **CLI Commands:** ls (2), find (1), make (1)
> **Env Vars:** ctrl (2), doc (1)
> **Definitions:** is a  (3)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Find command information](https://www.linkedin.com/learning/learning-linux-command-line-26594217/challenge-find-command-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/challenge-find-command-information?u=76281980&t=0)** - [Narrator] Let's take a moment to practice what we've learned so far.
>
> **[0:03](https://www.linkedin.com/learning/learning-linux-command-line-26594217/challenge-find-command-information?u=76281980&t=3)** Using the tools we've explored, your challenge is to answer these questions.
>
> **[0:09](https://www.linkedin.com/learning/learning-linux-command-line-26594217/challenge-find-command-information?u=76281980&t=9)** This challenge should take you about 10 minutes.
>
> **[0:13](https://www.linkedin.com/learning/learning-linux-command-line-26594217/challenge-find-command-information?u=76281980&t=13)** Remember to use the resources available to you in the command line interface to find the answers.
>
> **[0:19](https://www.linkedin.com/learning/learning-linux-command-line-26594217/challenge-find-command-information?u=76281980&t=19)** When you're done, come back and I'll show you how I found the answers.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Tools:** command line (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [narrator] (1)

#### [Solution: Find command information](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-find-command-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-find-command-information?u=76281980&t=0)** - [Instructor] Here's how I approach these challenges.
>
> **[0:03](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-find-command-information?u=76281980&t=3)** The first asks what the command stat myfile.txt does.
>
> **[0:08](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-find-command-information?u=76281980&t=8)** This is a command and an argument, so let's focus on the stat.
>
> **[0:13](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-find-command-information?u=76281980&t=13)** Using the command man followed by stat, we can discover that it will show file [[Statistics]] for my file.txt.
>
> **[0:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-find-command-information?u=76281980&t=21)** Let's take a look at that.
>
> **[0:23](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-find-command-information?u=76281980&t=23)** Here in my terminal I'll type man and the name of that command stat, and here I can see under the name section that stat displays the file or file system status.
>
> **[0:35](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-find-command-information?u=76281980&t=35)** We'll explore stat more in a little bit.
>
> **[0:38](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-find-command-information?u=76281980&t=38)** I'll press Q to exit.
>
> **[0:41](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-find-command-information?u=76281980&t=41)** The next question asks what the command df -h / does.
>
> **[0:46](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-find-command-information?u=76281980&t=46)** And again, using man we can discover that this shows the disc utilization of the root file system in a human readable way.
>
> **[0:53](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-find-command-information?u=76281980&t=53)** Here we have a command, and option and an argument.
>
> **[0:56](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-find-command-information?u=76281980&t=56)** Let's switch back over to the terminal.
>
> **[1:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-find-command-information?u=76281980&t=60)** I'll write man df and I can see here that df reports the file system space usage, and in the synopsis section we can see the df takes one or more options and one or more files or arguments.
>
> **[1:13](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-find-command-information?u=76281980&t=73)** In this case, the slash is the argument.
>
> **[1:15](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-find-command-information?u=76281980&t=75)** And again, we'll explore what the slash means specifically later on.
>
> **[1:19](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-find-command-information?u=76281980&t=79)** I'll move down here to the option section and I'll look for dash lowercase h.
>
> **[1:23](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-find-command-information?u=76281980&t=83)** Here I can see that this print sizes and powers of 1024 and a synonym for it is - - human readable.
>
> **[1:31](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-find-command-information?u=76281980&t=91)** I'll quit and I'll go back to my command line.
>
> **[1:34](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-find-command-information?u=76281980&t=94)** The third question asked what command we would use to search for files in a directory hierarchy.
>
> **[1:40](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-find-command-information?u=76281980&t=100)** To answer this question, I can use the command apropos along with the search term search for files, and we'll see if we can find a command that sounds like what we're looking for.
>
> **[1:51](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-find-command-information?u=76281980&t=111)** Here I'll write apropos and search for files in double quotes and I'll press enter.
>
> **[1:56](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-find-command-information?u=76281980&t=116)** And here the result that I get is the command 'find'.
>
> **[2:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-find-command-information?u=76281980&t=120)** That certainly sounds like what we'd use to find files.
>
> **[2:03](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-find-command-information?u=76281980&t=123)** We'll explore find a little bit later on.
>
> **[2:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-find-command-information?u=76281980&t=127)** The last question asks which option we would use with the ls command to output a comma-separated list of files and directories.
>
> **[2:14](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-find-command-information?u=76281980&t=134)** Using the man command and ls, we can look in the option section and find the option that matches this description.
>
> **[2:22](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-find-command-information?u=76281980&t=142)** Here in my terminal, I'll write man ls and then using the F key or the down arrow key, I'll scroll down through the description section and here I can find the option dash M, which fills the width of the screen with a comma separated list of entries.
>
> **[2:40](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-find-command-information?u=76281980&t=160)** Let's take a look at that.
>
> **[2:41](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-find-command-information?u=76281980&t=161)** I'll write ls - M, and here I can see that that's the result the question was looking for.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (1)
> **CLI Commands:** find (6), ls (4)
> **Tools:** terminal (3), command line (1)
> **File Paths:** myfile.txt (1), file.txt (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Files, Directories, and Permissions

[↑ Back to Table of Contents](#table-of-contents)

#### [The Linux file system](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=0)** - [Instructor] If you've been working with computers for any amount of time, you're probably familiar with the idea of files.
>
> **[0:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=7)** Files are collections of information that represent photos, documents, source code, [[Databases]], and all kinds of other things.
>
> **[0:15](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=15)** Files are the basic component of data organization we work with in a graphical environment, and that's true in the command line environment as well.
>
> **[0:23](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=23)** We organize files into directories, which are sometimes called folders, like we would keep a bunch of related papers or photographs together in a folder or envelope.
>
> **[0:34](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=34)** In the graphical environment, we can navigate around these files and directories with a mouse.
>
> **[0:40](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=40)** We can view them in different ways.
>
> **[0:43](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=43)** For example, here, I'll switch from grid view to list view.
>
> **[0:48](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=48)** Then I'll open up the preferences for this files application and enable expandable folders in list view.
>
> **[0:56](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=56)** Here I can see what's inside of each directory.
>
> **[1:01](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=61)** In this window, I'm working within my home directory, but I could also browse to the top of the file system.
>
> **[1:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=67)** Here, I'll click on other locations and then I'll choose my system here.
>
> **[1:12](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=72)** In this way, I can look at some of the system files.
>
> **[1:16](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=76)** We can browse directories and files in the command line environment as well.
>
> **[1:19](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=79)** But in order to do that, we need to know where we're working and what's available.
>
> **[1:24](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=84)** So before we start navigating around, we need to step back and learn a little bit about the file system and the file system hierarchy standard.
>
> **[1:33](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=93)** Working at the command line, we'll often need to refer to files or directories that represent the input, the output, or the configuration for commands we use.
>
> **[1:41](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=101)** And we need to know about where commands are located on the system too.
>
> **[1:45](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=105)** On a [[Linux]] system, files and directories are part of the file system, which defines the way that data is represented on the system's storage media.
>
> **[1:54](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=114)** Most Linux distros follow the file system hierarchy standard, a standard which defines where certain kinds of files are stored on the file system.
>
> **[2:02](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=122)** Having files like configurations, programs or binaries and so on in predictable locations is important to the operability of software across Linux distributions.
>
> **[2:12](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=132)** Back here in my file browser, we can see what the file system looks like.
>
> **[2:16](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=136)** Before we dive into some specific directories, there are a handful of directories here and they can look pretty cryptic and intimidating if we don't know what they represent.
>
> **[2:25](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=145)** So let's explore the purpose of a few of these.
>
> **[2:29](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=149)** The file system starts with root, which is represented by a slash.
>
> **[2:34](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=154)** The file system root is the highest level of the organizational hierarchy of the file system.
>
> **[2:39](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=159)** Each Linux system only has one file system and everything else, directories, external hard drives, network shares and so on are represented within it.
>
> **[2:49](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=169)** If you're familiar with [[Windows]], you can think of the file system root kind of like the My Computer level of browsing in the File Explorer.
>
> **[2:57](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=177)** At the next level down the hierarchy are a handful of specific directories defined by the file system hierarchy standard.
>
> **[3:03](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=183)** The home directory is where each user account's personal files are stored, and our home directory is where most of our work in this course will focus.
>
> **[3:11](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=191)** Within the home directory, each user will have a separate directory named with their username, and each user will be able to use the tilde character to represent their own personal home directory.
>
> **[3:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=201)** We'll see more about that later.
>
> **[3:24](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=204)** On desktop Linux distributions, each user's home directory also often contains other directories like documents, downloads, pictures, and so on.
>
> **[3:33](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=213)** The directory with the name root is where the root user's home directory is stored.
>
> **[3:38](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=218)** We'll learn more about root later on, but for now, it's important to recognize that this directory and the file system root are both named root, and that can seem a little confusing, though nobody uses the root home directory except for the root user.
>
> **[3:51](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=231)** So generally, if you're working with file system paths and you hear the term root, it refers to the file system root and not to the special home directory.
>
> **[4:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=240)** Some of the other directories that we may need to explore are ETC, which is where most programs keep their configuration files.
>
> **[4:08](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=248)** /bin, at /sbin, where programs the system relies on to work are kept, and /lib, which is where shared libraries and modules are stored.
>
> **[4:16](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=256)** We may also need to work in the /mnt directory, which is where local or network file systems are mounted into the overall system.
>
> **[4:23](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=263)** Or we might work in the media directory where removable file systems like USB drives and optical drives are mounted by some distributions that support automatic mounting.
>
> **[4:33](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=273)** There are a few other directories and some of these higher level directories have subdirectories to further organize items.
>
> **[4:38](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=278)** There are a few special directories too, which are related to the system and the kernel.
>
> **[4:43](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=283)** The /dev directory is where the system keeps references to all of the [[Hardware]] it has, hard drives, memory, CPUs and everything else.
>
> **[4:51](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=291)** We won't get into that much here, but if you're interested in learning more about how a Linux system works under the hood, it's a good place to explore.
>
> **[4:58](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=298)** There's a directory called /proc, which contains references to processes that are running on the system, and it contains details of other aspects of the system as well.
>
> **[5:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=307)** And there's a directory called /sys, which holds files representing different kernel parameters and system information.
>
> **[5:13](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=313)** If you're interested in learning about kernel development, you'll spend time in there.
>
> **[5:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=318)** That's a very brief overview of the general structure of a Linux systems file system.
>
> **[5:23](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=323)** Don't be afraid of exploring.
>
> **[5:25](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=325)** A normal user doesn't generally have permission to make changes in these system directories, so looking around won't do any harm.
>
> **[5:32](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=332)** And as I mentioned, as you learn more about Linux, you'll find yourself starting to use these directories sometimes, especially as you expand into learning about [[System Administration]] and [[Software Development]].
>
> **[5:41](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-linux-file-system?u=76281980&t=341)** For now, though, we won't focus on them because we'll keep our focus on working with files in our own home directory.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (8), [[Databases]] (1), [[Windows]] (1), [[Hardware]] (1), [[System Administration]] (1)
> **Tools:** command line (3)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** etc (1), usb (1)
> **Analogies:** for example (1), kind of like (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** source code (1)
> **Definitions:** refers to (1)

#### [Understanding file paths](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understanding-file-paths?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understanding-file-paths?u=76281980&t=0)** - [Scott] In order to refer to locations on the file system, we use a path, which is a string of text that represents a file or directory within the file system.
>
> **[0:10](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understanding-file-paths?u=76281980&t=10)** In a path, the slash character acts as a separator between directory names leading to the directory or file for mature writing a path.
>
> **[0:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understanding-file-paths?u=76281980&t=18)** There are two kinds of path called absolute and relative.
>
> **[0:22](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understanding-file-paths?u=76281980&t=22)** An absolute path starts from the root of the file system, the highest level of the structure where files are stored, which remember, is represented by the slash character.
>
> **[0:32](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understanding-file-paths?u=76281980&t=32)** This allows us to define a full specific location from the highest level of the file system all the way down to a specific directory or file.
>
> **[0:41](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understanding-file-paths?u=76281980&t=41)** So for example, the absolute path to my home directory would be /home/scott, and the absolute path to my Documents on my system would be /home/scott/Documents.
>
> **[0:53](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understanding-file-paths?u=76281980&t=53)** We can tell that these are absolute paths because they begin with a slash representing the file system route.
>
> **[1:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understanding-file-paths?u=76281980&t=60)** When it's the first or leftmost character in a path, this slash represents the file system route, and all the others indicate a division between directory names from higher levels down to lower levels or branches, until we get to the file or directory we indicate.
>
> **[1:15](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understanding-file-paths?u=76281980&t=75)** Absolute paths are useful when we want to avoid any ambiguity about where a particular file or directory is located on a system.
>
> **[1:22](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understanding-file-paths?u=76281980&t=82)** However, sometimes ambiguity is useful.
>
> **[1:26](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understanding-file-paths?u=76281980&t=86)** In that case, we would use a relative path, a path that isn't a complete absolute path starting from the file system route, but one that starts from the current working directory as its base.
>
> **[1:36](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understanding-file-paths?u=76281980&t=96)** The working directory is where any action we do will take place unless we've told a command to use files in a different path.
>
> **[1:43](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understanding-file-paths?u=76281980&t=103)** We'll explore this more in a hands-on way in just a little bit.
>
> **[1:46](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understanding-file-paths?u=76281980&t=106)** Relative paths are relative because if the working directory changes, the place they refer to changes as well.
>
> **[1:53](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understanding-file-paths?u=76281980&t=113)** For example, if I knew that I was working inside my home directory and I wanted to refer to my Documents directory, then the relative path Documents would take me there.
>
> **[2:03](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understanding-file-paths?u=76281980&t=123)** And if we expand the absolute path of that directory, we can see how that works.
>
> **[2:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understanding-file-paths?u=76281980&t=127)** If you were working inside your home directory, the same relative path of Documents would refer to your Documents directory.
>
> **[2:14](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understanding-file-paths?u=76281980&t=134)** When we see a path that doesn't begin with a slash, we'll know we're working with a relative path, but for example, if our current working directory was the Pictures directory, this relative path of Documents wouldn't take us where we want to go.
>
> **[2:27](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understanding-file-paths?u=76281980&t=147)** And if we converted to an absolute path, we can see why.
>
> **[2:31](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understanding-file-paths?u=76281980&t=151)** From a working directory of Pictures inside my home directory, the absolute path represented by this relative path would be /home/scott/Pictures/Documents.
>
> **[2:42](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understanding-file-paths?u=76281980&t=162)** That won't work because Documents and Pictures are both located at the same level of hierarchy inside my home directory.
>
> **[2:48](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understanding-file-paths?u=76281980&t=168)** So the Documents directory isn't located inside the Pictures directory.
>
> **[2:53](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understanding-file-paths?u=76281980&t=173)** In order to refer to directories higher up in the hierarchy from our working directory, we can use two dots or periods.
>
> **[3:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understanding-file-paths?u=76281980&t=180)** This represents the parent directory of whatever directory we're working inside of.
>
> **[3:05](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understanding-file-paths?u=76281980&t=185)** If I was working in my home directory, dot dot would represent the path /home, and if I was working in my Documents directory, dot dot would represent /home/scott.
>
> **[3:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understanding-file-paths?u=76281980&t=198)** So from the previous example, if I was working inside my Pictures directory, the relative path slash ../Documents would correctly refer to my Documents directory because this path tells the system to move up to the parent directory of Pictures, which is my home directory, and then move into Documents, which is located in the home directory.
>
> **[3:36](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understanding-file-paths?u=76281980&t=216)** We'll use this shortcut a lot when working at the command line and we'll see that in a hands-on way in just a little bit.
>
> **[3:43](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understanding-file-paths?u=76281980&t=223)** I mentioned the tilde character earlier and I noted that it refers to the current user's home directory.
>
> **[3:48](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understanding-file-paths?u=76281980&t=228)** So I could also represent my Documents directory using the path tilde/Documents.
>
> **[3:54](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understanding-file-paths?u=76281980&t=234)** On your system, this would refer to your Documents directory and on someone else's system, it would represent their Documents directory.
>
> **[4:02](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understanding-file-paths?u=76281980&t=242)** The tilde here is a feature of Bash and many other shells, and it's called tilde expansion.
>
> **[4:08](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understanding-file-paths?u=76281980&t=248)** So while using the tilde in a path feels a little bit like using a relative path, it's really not because the shell expands it into an absolute path, it's just that that part of the absolute path will be different for different users.
>
> **[4:20](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understanding-file-paths?u=76281980&t=260)** But regardless, it expands to a path that starts from the file system route.
>
> **[4:24](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understanding-file-paths?u=76281980&t=264)** Using the tilde in a path will always work, no matter what their current working directory is.
>
> **[4:30](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understanding-file-paths?u=76281980&t=270)** Absolute and relative paths are very important as we work with commands and files at the command line.
>
> **[4:36](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understanding-file-paths?u=76281980&t=276)** As we continue, remember that an absolute path starts with a slash for the file system route, and a relative path does not.
>
> **[4:43](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understanding-file-paths?u=76281980&t=283)** We'll be using both kinds of path throughout the course.

> [!info]- Semantic Content
>
> **Tools:** command line (2), bash (1)
> **Analogies:** for example (3)
> **Definitions:** is a  (2)
> **Speakers:** - [scott] (1)

#### [Navigating the file system](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=0)** - [Speaker] Let's take a look at how to navigate the file system in the terminal.
>
> **[0:04](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=4)** I'll set up my desktop here to show how the terminal commands and the directory structure are related to each other. In the file browser, I can navigate to the exercise files.
>
> **[0:15](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=15)** In my case, those are in my home directory inside of documents.
>
> **[0:19](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=19)** There they are.
>
> **[0:20](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=20)** In this graphical structure.
>
> **[0:22](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=22)** I can see pretty easily what directory I'm working in.
>
> **[0:25](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=25)** For example, it shows that I'm in my home directory, documents and exercise files.
>
> **[0:33](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=33)** I'll move this to the side of the screen and reduce the size of the Window a little bit.
>
> **[0:40](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=40)** I'll open up my terminal as well and I'll put that over here on the side.
>
> **[0:52](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=52)** As I mentioned before, over here in the terminal, we can see which directory you were working in as part of the prompt, and right now, that's the tilde character or my user home directory.
>
> **[1:02](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=62)** To match up with where I'm browsing in the file browser, which is the exercise files directory inside of documents, I can see that I'll need to navigate in my terminal into the documents directory and then into exercise files.
>
> **[1:13](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=73)** To do that, I'll use the CD command, which stands for change directory.
>
> **[1:17](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=77)** I'll start by typing the path that I want to go to.
>
> **[1:20](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=80)** Documents is inside my user home directory, so I could either type documents because I'm working in my home directory or to be certain that I move into that directory.
>
> **[1:29](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=89)** I could write tilde slash documents, using tilde to refer to my home directory.
>
> **[1:36](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=96)** I'll press enter and I can see that I've moved into my documents directory.
>
> **[1:39](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=99)** To double check that, I could write PWD, which prints the working directory, and here I can see where I'm working.
>
> **[1:46](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=106)** I'll take a look around here and I can see that there's an exercise files directory inside this directory, so let's move inside there.
>
> **[1:53](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=113)** I'll write CD space and I'll press tab to auto-complete that name, and then I'll press enter.
>
> **[2:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=120)** Again, I'll write ls, and here I'll see the same files that I can see in this file browser.
>
> **[2:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=127)** I'll clear my screen here, and then let's take a look inside that department's directory.
>
> **[2:12](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=132)** To do that, I'll write ls dash capital R to list the directories recursively, and then I'll add departments here at the end.
>
> **[2:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=141)** That's wrapped around a little bit in my terminal.
>
> **[2:22](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=142)** Because I'm zoomed in. I'll press enter.
>
> **[2:25](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=145)** The recursive option for ls means that when ls comes across a directory, it steps inside and looks around, listing anything inside that directory.
>
> **[2:34](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=154)** So here I have a list of not only each directory, for example, departments and then engineering, finance, hr, marketing, and sales underneath it, which we can see in the file browser over here, but I see the contents of each of those directories as well.
>
> **[2:49](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=169)** Here's the contents of the engineering directory, and I can see that each of those directories happens to be empty.
>
> **[2:57](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=177)** Here's the items in the finance directory, in the HR directory and so on.
>
> **[3:05](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=185)** This is a helpful way of exploring a whole structure of directories.
>
> **[3:09](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=189)** I'll maximize my terminal again, and I'll clear the screen.
>
> **[3:14](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=194)** There's a subdirectory within departments called hr, and within there, there's a directory called policies, so let's use the CD command to change into that directory.
>
> **[3:24](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=204)** Here, I'll write CD space departments using tap completion.
>
> **[3:30](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=210)** Then after that slash, I'll write HR slash and policies.
>
> **[3:36](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=216)** This is a relative path, and now I'm working inside that subdirectory.
>
> **[3:41](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=221)** We can also move back up the directory structure using the CD command, a space, and two dots or two periods.
>
> **[3:48](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=228)** Recall that those two dots represent the parent directory of the current directory, so in this case, that would be the HR directory.
>
> **[3:56](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=236)** If I do the same thing again, I'll move up to the department's directory.
>
> **[3:59](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=239)** I'll move back to my policies directory with CD space, HR slash policies, and we're back where we were before.
>
> **[4:08](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=248)** Let's say I want to move over to the document's directory inside of the finance directory.
>
> **[4:13](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=253)** Let's use the file browser to see where that is.
>
> **[4:16](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=256)** Currently, we're working inside HR in this policies directory.
>
> **[4:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=261)** If I want to move to finance documents, I can see I'll need to move up one level and then over to the finance directory, and then down into documents.
>
> **[4:32](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=272)** So I'll need to write a CD command that moves up to the parent directory and then the grandparent directory, and then into finance, and then into documents. Here in my terminal, I'll at CD, dot dot slash, to move to the parent, dot dot slash to move to its parent, which is the department's directory, and then finance slash documents.
>
> **[4:54](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=294)** And there we go.
>
> **[4:56](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=296)** We've moved into that directory.
>
> **[4:58](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=298)** I can see that in my very long prompt here, or I could check it out with PWD, which again, prints the working directory.
>
> **[5:06](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=306)** If I wanted to step back to the previous directory I was using, whatever that was, I can use the shortcut, CD dash or minus.
>
> **[5:14](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=314)** This is useful for switching back and forth between two directories if you need to do that.
>
> **[5:19](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=319)** For example, I can use the same command and move back to the documents directory.
>
> **[5:24](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=324)** The last directory change command I want to talk about is just CD by itself.
>
> **[5:28](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=328)** This takes us from wherever we are back to our current user's home directory.
>
> **[5:33](https://www.linkedin.com/learning/learning-linux-command-line-26594217/navigating-the-file-system?u=76281980&t=333)** I'll type CD and I can see from the prompt that I'm home again, we can use these commands to navigate around the whole file system wherever we have access to do so.

> [!info]- Semantic Content
>
> **CLI Commands:** cd (11), ls (4)
> **Tools:** terminal (8)
> **Exercise Files:** exercise files (5)
> **Analogies:** for example (3)
> **Env Vars:** pwd (2)
> **UI Navigation:** navigate to (1), go to (1)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (1)

#### [Finding directory and file information](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=0)** - [Instructor] As we've seen the ls command lists the contents of a directory showing information about files contained within it.
>
> **[0:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=7)** We've been using it as an example command because it's short, because it has options that change the output and because it accepts arguments, but the ls commands output itself is pretty useful and it's worth taking some time to understand what it shows.
>
> **[0:22](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=22)** LS just by itself gives a list and depending on your environment, the items might have some color or they may not.
>
> **[0:29](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=29)** The coloration is helpful, but it's not critical to using ls.
>
> **[0:34](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=34)** If you're not seeing it you can try running ls with the --color=always option.
>
> **[0:41](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=41)** On other platforms like PSD or masOS, you may need to use -G instead.
>
> **[0:46](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=46)** The colors represent different aspects of the files in the listing.
>
> **[0:50](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=50)** Let's go back to the exercise files and look around.
>
> **[0:54](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=54)** I'll write cd documents/ExerciseFiles.
>
> **[1:01](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=61)** I'll press enter and I'll write ls -l to see a little bit more information.
>
> **[1:08](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=68)** The first column here on the left shows whether an item is a directory, which will be indicated by a letter D.
>
> **[1:15](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=75)** A link will be L and a file will show a dash as we see for most of these items here.
>
> **[1:20](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=80)** The dash means that the attribute is missing or not set.
>
> **[1:24](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=84)** If your output shows colors, directories will often be in blue text.
>
> **[1:28](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=88)** Links will generally be light blue text.
>
> **[1:31](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=91)** Regular files will normally be gray or white, and other kinds of files may have other colors, but color themes in terminal applications can change this, so if you've customized your terminal, the colors you see may be entirely different from mine.
>
> **[1:47](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=107)** The next set of columns show a representation of the permissions on the item, which describe what different kinds of things users and members of groups are allowed to do with that item.
>
> **[1:57](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=117)** We'll take a look at what this means later on.
>
> **[2:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=120)** Further to the right, we see the owner of each item and the group associated with each item.
>
> **[2:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=127)** We'll take a look at what these mean later on too.
>
> **[2:11](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=131)** Then we see the size of the items in bytes, which can be a little bit easier to read with a -H option for human readable sizes.
>
> **[2:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=138)** I'll clear the screen and I'll write ls -lh and now I can see the size post fixes.
>
> **[2:26](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=146)** K here stands for kilobytes.
>
> **[2:28](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=148)** N, for larger files, we might see M, G or T for megabyte, gigabyte or terabyte instead of just bytes.
>
> **[2:35](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=155)** These items here without a suffix are just bytes.
>
> **[2:40](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=160)** Over here further to the right there's the date and time that the item was modified, and finally there's the name of the item.
>
> **[2:48](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=168)** Various [[Forms]] of ls give us a whole lot of helpful information about directories and files, so it's a good command to know about.
>
> **[2:54](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=174)** Don't be afraid to run ls in directories as you explore the system, it doesn't harm anything and it can give us a better sense of what kinds of things are located where.
>
> **[3:04](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=184)** While the ls command shows us some information about our files, there are two commands that I want to point out but not dig too deeply into.
>
> **[3:12](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=192)** These are called file and stat.
>
> **[3:14](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=194)** Both of these commands can take a look at a file and tell us some things about it.
>
> **[3:20](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=200)** The file command will generally be able to tell what kind of file we're asking it about.
>
> **[3:24](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=204)** If a file's name isn't clear or if it doesn't have an extension, sometimes it can be tricky to figure out exactly what kind of file something is.
>
> **[3:32](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=212)** Using file will give us some insight into whether something is an archive or an executable file or a text file or some other kind of document.
>
> **[3:40](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=220)** Here I'll at file poems.txt.
>
> **[3:44](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=224)** I can see that this file is ASCII text.
>
> **[3:47](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=227)** While in a desktop environment, we might be able to click on a file and view its properties.
>
> **[3:51](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=231)** That feature isn't available to us in a command line environment.
>
> **[3:56](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=236)** The stat command tells us some extended information about a file, and we saw it very briefly in the last chapter.
>
> **[4:02](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=242)** Here I'll write stat poems.txt.
>
> **[4:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=247)** Here I can see the file's name, which in this case I happen to know, it's size and bytes.
>
> **[4:14](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=254)** Some information that we're not going to dig into right now, it's permissions, it's ownership information, and various dates that are associated with the file, including its last access date, last modification date, last change date, and the date when the file was created.
>
> **[4:32](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=272)** Some of this information is available using the ls command as well, but the file and stat commands can be helpful to know about if we come across an unknown file.
>
> **[4:41](https://www.linkedin.com/learning/learning-linux-command-line-26594217/finding-directory-and-file-information?u=76281980&t=281)** On a [[Linux]] system everything is a file, so these tools can come in handy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1), [[Linux]] (1)
> **CLI Commands:** ls (11), cd (1)
> **Definitions:** is a  (2), means that (1), stands for (1), is an  (1)
> **Tools:** terminal (2), command line (1)
> **File Paths:** poems.txt (2)
> **Env Vars:** psd (1), ascii (1)
> **Cross-References:** go back to (1), in the last (1)
> **Code Identifiers:** masos (1)

#### [Create and remove directories](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-and-remove-directories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-and-remove-directories?u=76281980&t=0)** - [Instructor] Sometimes we'll need to create directories to organize files and we'll also need to be able to remove directories from our system when they're no longer needed.
>
> **[0:09](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-and-remove-directories?u=76281980&t=9)** Let's go back to using the file browser a little bit here.
>
> **[0:13](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-and-remove-directories?u=76281980&t=13)** I'll collapse these directories in the department's directory so I can see the exercise files directory more clearly.
>
> **[0:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-and-remove-directories?u=76281980&t=21)** Back here in my terminal, I'll create a new directory in the exercise files directory with mkdir, short for make directory, and I'll give it a name, newdir.
>
> **[0:32](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-and-remove-directories?u=76281980&t=32)** And over here in my file browser, I can see that a new directory was created right here in my working directory.
>
> **[0:39](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-and-remove-directories?u=76281980&t=39)** I can see that here in the terminal with the ls-l command.
>
> **[0:42](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-and-remove-directories?u=76281980&t=42)** And here's my new directory.
>
> **[0:45](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-and-remove-directories?u=76281980&t=45)** If we put a name after the mkdir command, it assumes we want to create the directory inside the current working directory, which in this case is ExerciseFiles.
>
> **[0:54](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-and-remove-directories?u=76281980&t=54)** We can also specify a path outside the current directory or a directory deeper inside the working directory.
>
> **[1:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-and-remove-directories?u=76281980&t=60)** For example, I'll add a new directory inside our department's directory for customer service or mkdir, departments/customerservice.
>
> **[1:12](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-and-remove-directories?u=76281980&t=72)** I'll press enter.
>
> **[1:14](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-and-remove-directories?u=76281980&t=74)** I'll go back to my file browser.
>
> **[1:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-and-remove-directories?u=76281980&t=78)** I'll open departments, and here I can see customerservice, which was created today.
>
> **[1:24](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-and-remove-directories?u=76281980&t=84)** I can string together directory names as well to make more than one directory at a time.
>
> **[1:29](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-and-remove-directories?u=76281980&t=89)** Let's create a documents directory, a cases directory, and an awards directory within the customer service department directory.
>
> **[1:37](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-and-remove-directories?u=76281980&t=97)** To do that, I'll write mkdir, departments, customer service and documents, and here I'm using tap completion for the first two parts, and then I'll type a space, and I'll write departments, customer service, cases and departments, customer service, awards.
>
> **[2:02](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-and-remove-directories?u=76281980&t=122)** I'll press enter, and over here in the file browser, I can see that each of those directories was created.
>
> **[2:11](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-and-remove-directories?u=76281980&t=131)** Let's say we also need a contracts directory for our legal department.
>
> **[2:15](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-and-remove-directories?u=76281980&t=135)** Instead of creating a legal directory in one step and then creating a contracts directory inside that, in a second step, we can do it all at once using the dash P option for mkdir.
>
> **[2:26](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-and-remove-directories?u=76281980&t=146)** This option creates any parent directories that are needed.
>
> **[2:29](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-and-remove-directories?u=76281980&t=149)** So in this case, it'll create the legal directory for us and then create the contracts directory after that.
>
> **[2:35](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-and-remove-directories?u=76281980&t=155)** I'll write mkdir, dash P, departments, legal, contracts, and back here in the file browser, I can see that not only was a legal directory created, but I have a contracts directory inside of it.
>
> **[2:53](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-and-remove-directories?u=76281980&t=173)** That's pretty handy.
>
> **[2:55](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-and-remove-directories?u=76281980&t=175)** We can also remove empty directories using the rmdir command, for remove directory.
>
> **[3:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-and-remove-directories?u=76281980&t=180)** Let's go remove that contracts directory that we just created.
>
> **[3:03](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-and-remove-directories?u=76281980&t=183)** I'll write rmdir, departments, legal, contracts.
>
> **[3:10](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-and-remove-directories?u=76281980&t=190)** I'll run this and again, in my file browser, I can see that that directory has disappeared.
>
> **[3:15](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-and-remove-directories?u=76281980&t=195)** Now there's nothing inside the legal directory.
>
> **[3:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-and-remove-directories?u=76281980&t=198)** I'll clear my screen.
>
> **[3:20](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-and-remove-directories?u=76281980&t=200)** One thing to keep in mind about using rmdir is that in order to remove a directory, it has to be empty.
>
> **[3:27](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-and-remove-directories?u=76281980&t=207)** I can verify that by trying to remove the customer service directory, which still has items inside it.
>
> **[3:33](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-and-remove-directories?u=76281980&t=213)** I'll write rmdir, departments, customer service, and I get an error.
>
> **[3:39](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-and-remove-directories?u=76281980&t=219)** That means it's a little bit tedious to remove a large directory structure with rmdir, but we'll see a much better way of getting rid of directories soon.

> [!info]- Semantic Content
>
> **CLI Commands:** mkdir (6), make (2), ls (1)
> **Cross-References:** go back to (2)
> **Tools:** terminal (2)
> **Exercise Files:** exercise files (2)
> **Definitions:** short for (1)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Copy, move, and delete files and directories](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=0)** - [Instructor] It's pretty common to need to move, copy, and delete files from the command line.
>
> **[0:05](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=5)** In fact, a lot of experienced command line users prefer using the command line for file management, because, in some cases, and if you're accustomed to doing so, it can be a lot faster to type commands than it is to navigate and drag files around with the mouse on screen.
>
> **[0:19](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=19)** The first command I want to introduce here is cp for copy.
>
> **[0:23](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=23)** Let's make a duplicate copy of our poems.txt file.
>
> **[0:27](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=27)** To do that, I'll write cp poems.txt space poems2.txt.
>
> **[0:36](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=36)** The first file name argument to the cp command is the file that we want to make a copy of, and the second file name argument is where we want to copy it to.
>
> **[0:45](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=45)** I'll press Enter, and then I'll take a look at the contents of this directory with ls.
>
> **[0:50](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=50)** And here I can see my new file poems2.txt.
>
> **[0:53](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=53)** We can also copy a file to a different path.
>
> **[0:55](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=55)** For example, we can copy our simple_data.txt file to our employee info subdirectory inside of our HR directory.
>
> **[1:03](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=63)** To do that, I'll write cp simple_data.txt departments/hr /employee\ info/.
>
> **[1:17](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=77)** If we have a space in a file or directory name, we'll need to put a backslash in front of it to indicate to the shell that it's part of the name, not a division between two different arguments.
>
> **[1:27](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=87)** Also, notice that I'm providing the path where I want the copy of the file to go, but not a name for the new copy of the file.
>
> **[1:33](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=93)** In this case, the cp command will use the original name of the file, so I'll have a file called simple_data.txt in that employee info directory.
>
> **[1:43](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=103)** I could also provide a name in the destination if I want to create a copy with a different name as we just did a moment ago.
>
> **[1:49](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=109)** I'll run this command, and then I'll list that directory.
>
> **[1:52](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=112)** I'll write ls -lh departments/hr /employee\ info/, and here I can see the copy that I've created called simple_data.txt.
>
> **[2:04](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=124)** Next, let's take a look at moving a file rather than copying it.
>
> **[2:08](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=128)** The move command has two uses.
>
> **[2:10](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=130)** We can use it to move files between directories, and we can also use it to move a file to a file with a different name, effectively using it to rename a file.
>
> **[2:20](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=140)** The command for move is mv, so I'll type that, and I'll move our file poems2.txt over to the departments marketing directory.
>
> **[2:30](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=150)** I can check that the file is in that directory with ls departments/marketing/.
>
> **[2:36](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=156)** There it is.
>
> **[2:37](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=157)** And if I take a look at the current directory, I can see that poems2.txt isn't here anymore.
>
> **[2:42](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=162)** I mentioned that we can rename files with the mv command too, so let's do that.
>
> **[2:47](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=167)** I'll type mv departments/marketing /poems2.txt departments/marketing and let's change the name to literature.txt.
>
> **[3:01](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=181)** And if I list that directory again, I can see that the file has been renamed.
>
> **[3:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=187)** It's been moved from one file with one name to another one with a different name.
>
> **[3:11](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=191)** I'll clear my screen.
>
> **[3:14](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=194)** There's another shortcut you should know about, which is the single dot.
>
> **[3:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=198)** It represents the current directory wherever we're working.
>
> **[3:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=201)** We can use that when working with files.
>
> **[3:23](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=203)** I'll use the dot to move our literature file back from the marketing department directory to the exercise files directory, which is the current working directory.
>
> **[3:31](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=211)** I'll write mv departments/marketing /literature.txt space and a single period.
>
> **[3:40](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=220)** Then I'll take a look at this directory, and here's my file relocated back to this directory.
>
> **[3:47](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=227)** Once again, I'll clear the screen.
>
> **[3:50](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=230)** We can also move, copy, and delete more than one thing at a time, and one of the ways we do that is with what are called wildcards.
>
> **[3:57](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=237)** Wildcards are characters that stand for or represent patterns in text.
>
> **[4:02](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=242)** We'll see more about patterns in text later.
>
> **[4:03](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=243)** So I want to introduce you to the two most common wildcard characters here briefly, there's star, or asterisk, and question mark.
>
> **[4:11](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=251)** Star stands for any number of characters, and the question mark stands for one character.
>
> **[4:16](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=256)** Let's take a look at how these work with the move command.
>
> **[4:19](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=259)** Let's say that I want to move all of the files with the extension .txt to the marketing directory.
>
> **[4:25](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=265)** Let's take a look at the file names that I've got here.
>
> **[4:29](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=269)** I've got dupes, poems, literature, and simple_data, all of which end with .txt.
>
> **[4:41](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=281)** But instead of typing out all these names, I can write mv *, or asterisk, .txt, meaning anything followed by .txt to our departments marketing directory.
>
> **[4:53](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=293)** And then, if I take a look inside that directory, I can see that my files have been moved there.
>
> **[4:59](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=299)** Let's move them back.
>
> **[5:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=300)** I know that the only thing in the marketing directory are my text files, so let's use the wildcard a little bit differently.
>
> **[5:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=307)** If I don't specify a file extension or any other part of a name and I only use star or asterisk by itself, that represents all of the files in a given directory.
>
> **[5:17](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=317)** I'll write mv departments /marketing/* space period to move all the files in that marketing directory back to my current working directory, which, remember, is represented by the single period character.
>
> **[5:32](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=332)** I'll list the files in the working directory and I can see that my files are back.
>
> **[5:36](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=336)** Next, let's take a look at how to delete or remove files using the rm command.
>
> **[5:42](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=342)** First, let's get rid of this literature.txt file since it's a duplicate of the poems file.
>
> **[5:47](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=347)** To do that, I'll write rm literature.txt.
>
> **[5:53](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=353)** And if I list my directory again, I can see that the literature file has been deleted.
>
> **[5:59](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=359)** It's important to keep in mind that, unlike in most graphical file browsers, there's not a trashcan or a recycled bin for deleted files here at the command line.
>
> **[6:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=367)** There's no undo here.
>
> **[6:08](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=368)** That file is gone well.
>
> **[6:10](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=370)** Well, there are specialized tools we could use to retrieve it, but that's a focus for another course.
>
> **[6:15](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=375)** For our practical purposes here, that file is no more.
>
> **[6:20](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=380)** I'll clear my screen.
>
> **[6:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=381)** We still haven't seen how to use the question mark wildcard, so let's make a few more copies of the poems file.
>
> **[6:27](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=387)** I'll write cp poems.txt poems3.txt, and I'll press Enter.
>
> **[6:36](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=396)** I'll press the up arrow to retrieve my previous command, and then I'll move left and change poems3.txt to poems4.txt, and I'll run that as well.
>
> **[6:47](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=407)** I'll list the directory, and here I can see my files.
>
> **[6:51](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=411)** Here's poems3 and here's poems4.
>
> **[6:56](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=416)** Now, we'll use that question mark wildcard to delete them.
>
> **[7:01](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=421)** I'll write rm poems?.txt.
>
> **[7:04](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=424)** This doesn't mean delete poems like we're not quite sure, but it means delete files with the name poems with only exactly one character afterward, .txt, which in our case will be poems3.txt and poems4.txt.
>
> **[7:20](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=440)** I'll list the directory again, and we'll see that we've deleted the two files with just one command, but the original poems file is still there because it doesn't match the pattern that I provided.
>
> **[7:30](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=450)** I'll clear the screen again.
>
> **[7:33](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=453)** The rm command has some options that are quite useful, and one of them makes rm act recursively.
>
> **[7:39](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=459)** Recursion tells the rm command to go into a structure of directories and walk through it, performing an action on each directory before it moves up the tree.
>
> **[7:48](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=468)** Let's try to delete the customer service directory structure from our departments directory.
>
> **[7:52](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=472)** I'll write rm departments/customerservice.
>
> **[7:57](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=477)** I'll run this and I'll get an error saying that this directory "Is a directory."
>
> **[8:02](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=482)** That doesn't seem too helpful, but it points to something that I want to mention here.
>
> **[8:06](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=486)** We can use the rmdir command to delete a directory if it's empty, but that's not something we'd use all that frequently.
>
> **[8:12](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=492)** Another option we have is to use rm with the -r option for recursive operation, which will be able to handle deleting directories as well.
>
> **[8:22](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=502)** So I'll write rm -r departments/customerservice/ and RM takes care of everything, deleting files and directories as it moves through the directory structure.
>
> **[8:36](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=516)** I encourage you to continue exploring and practicing with these commands.
>
> **[8:39](https://www.linkedin.com/learning/learning-linux-command-line-26594217/copy-move-and-delete-files-and-directories?u=76281980&t=519)** But remember to be careful, there's no easy safety net for removing files using the rm command, so keep your exploration inside the exercise files directory or another safe place for now.

> [!info]- Semantic Content
>
> **CLI Commands:** rm (11), cp (6), mv (6), make (3), ls (3)
> **File Paths:** poems2.txt (5), simple_data.txt (4), literature.txt (4), poems.txt (3), poems3.txt (3)
> **Code Identifiers:** simple_data (5)
> **Tools:** command line (4)
> **Definitions:** stands for (2), is a  (1)
> **Exercise Files:** exercise files (2)
> **Warnings:** keep in mind (1), be careful (1)
> **Analogies:** for example (1)

#### [Find files from the command line](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-files-from-the-command-line?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-files-from-the-command-line?u=76281980&t=0)** - [Instructor] We've been working with our exercise files, a limited set of files we can explore pretty easily, but sometimes we'll need to ask the system to look for a file if we don't know where it is.
>
> **[0:09](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-files-from-the-command-line?u=76281980&t=9)** To do that, we can use the find command.
>
> **[0:12](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-files-from-the-command-line?u=76281980&t=12)** Find has a lot of options which are worth exploring as we build our command line skills.
>
> **[0:17](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-files-from-the-command-line?u=76281980&t=17)** For now, we'll take a look at some basic usage.
>
> **[0:19](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-files-from-the-command-line?u=76281980&t=19)** To use find, I'll type find and then provide the location or the scope of where I want to search.
>
> **[0:26](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-files-from-the-command-line?u=76281980&t=26)** I'll use the dot or period character for the current working directory, which is my exercise files, and then I'll type -name, which is the test that I'm using to match files.
>
> **[0:37](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-files-from-the-command-line?u=76281980&t=37)** I want to match files based on their name.
>
> **[0:40](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-files-from-the-command-line?u=76281980&t=40)** There are other options like size, date, and so forth, but I find that I use name the most.
>
> **[0:45](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-files-from-the-command-line?u=76281980&t=45)** Then I'll put a matching pattern for what I'm looking for.
>
> **[0:48](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-files-from-the-command-line?u=76281980&t=48)** I'll put "poe*" in double quotes.
>
> **[0:53](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-files-from-the-command-line?u=76281980&t=53)** The star or asterisk wild card will match any number of characters.
>
> **[0:58](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-files-from-the-command-line?u=76281980&t=58)** This should find our poems.txt file.
>
> **[1:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-files-from-the-command-line?u=76281980&t=60)** And when I run the command, sure enough, it did.
>
> **[1:04](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-files-from-the-command-line?u=76281980&t=64)** Let's try another search.
>
> **[1:06](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-files-from-the-command-line?u=76281980&t=66)** I'll write find . -name "*d*".
>
> **[1:15](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-files-from-the-command-line?u=76281980&t=75)** This finds everything that has a lowercase D in the name, regardless of how many characters come before or after it.
>
> **[1:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-files-from-the-command-line?u=76281980&t=81)** These searches are case sensitive, so using the lowercase D here finds anything with a lowercase D in the name, but not an uppercase D.
>
> **[1:30](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-files-from-the-command-line?u=76281980&t=90)** I'll press up to recall my command, and I'll change -name to -iname for case insensitive name matching.
>
> **[1:38](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-files-from-the-command-line?u=76281980&t=98)** This would find anything that has a D in the name, whether it's lowercase or uppercase.
>
> **[1:43](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-files-from-the-command-line?u=76281980&t=103)** Here I get the same results because this is just a limited set of things and they all happen to be lowercase.
>
> **[1:48](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-files-from-the-command-line?u=76281980&t=108)** But keep iname in mind if you aren't sure about the case of something you're looking for.
>
> **[1:53](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-files-from-the-command-line?u=76281980&t=113)** I'll clear my screen.
>
> **[1:54](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-files-from-the-command-line?u=76281980&t=114)** We can change that period to another directory to search within a different path if we have permission to do so.
>
> **[2:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-files-from-the-command-line?u=76281980&t=120)** For example, I'll write find ~ for my home directory, /documents -name "*d*", and this says look in my documents directory rather than just the exercise files directory.
>
> **[2:16](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-files-from-the-command-line?u=76281980&t=136)** Though here with these files, it's found the same things.
>
> **[2:19](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-files-from-the-command-line?u=76281980&t=139)** Find is a really helpful command to know about as you explore your system, and I encourage you to look at the man pages for the find command and to practice using it to become more familiar with it.

> [!info]- Semantic Content
>
> **CLI Commands:** find (11)
> **Exercise Files:** exercise files (3)
> **File Paths:** poems.txt (1)
> **Tools:** command line (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Understand user roles and sudo](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=0)** - [Instructor] Modern [[Linux]] is a multi-user environment.
>
> **[0:03](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=3)** On older systems and on single user systems, there's only one user.
>
> **[0:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=7)** Whoever uses the computer is the system administrator, and they can do whatever they want.
>
> **[0:12](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=12)** On a multi-user system, I can have a user, you can have a user, and our files are kept separate in our individual home directories.
>
> **[0:20](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=20)** We can create files that only one or another user can access.
>
> **[0:24](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=24)** At the command line, we can switch between users with the SU command, which is variously referred to as set user, switch user, or substitute user.
>
> **[0:33](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=33)** To use SU, we write that command, followed by the name of the user we want to switch to, and then we'll need to provide the password for that user.
>
> **[0:41](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=41)** One of the most common tasks for switching users at the command line is to do some [[System Administration]] tasks.
>
> **[0:47](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=47)** There are two basic user roles on a modern Linux system, normal users and the super user.
>
> **[0:53](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=53)** The difference is one of privilege.
>
> **[0:55](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=55)** A normal user can modify, create, delete, and move their own files, but they can't make system-wide configuration changes.
>
> **[1:03](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=63)** They can't install software and they can't make changes to system files, and they can't make changes to other users' files.
>
> **[1:10](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=70)** The super user, which is called Root, can make changes to the system.
>
> **[1:15](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=75)** That user can install software.
>
> **[1:17](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=77)** It can start and stop services, and it can perform other tasks that affect how the overall system operates.
>
> **[1:23](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=83)** Because of this, it's uncommon and really bad practice to log into the root user directly to do normal work.
>
> **[1:29](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=89)** Doing so is just too risky.
>
> **[1:32](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=92)** In fact, on many systems, the root user is actually disabled and can't be logged into directly.
>
> **[1:38](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=98)** So in order to allow changes to be made to the system, normal users can be granted the ability to temporarily use root's power through a command called sudo.
>
> **[1:47](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=107)** The command is spelled S-U-D-O, and is commonly pronounced sudo or sudo.
>
> **[1:52](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=112)** We only want to borrow root's power when we really need it, and certain users can do that if they're indicated as administrative users.
>
> **[2:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=120)** Not all users can automatically use super user privileges, but the one we set up to experiment with here has that privilege.
>
> **[2:08](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=128)** Let's take a look at using super user privileges.
>
> **[2:11](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=131)** I'll try to see what's inside the root user's home directory, which is located at the root of the file system.
>
> **[2:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=138)** I'll write ls /root.
>
> **[2:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=141)** As I mentioned before, there are two different meanings of the [[Microsoft Word|word]] root, which can be a little confusing.
>
> **[2:26](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=146)** When we're talking about a file system, the root is the highest level of the organizational structure, which is represented by the leftmost slash in this file path.
>
> **[2:35](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=155)** And when we're talking about access and users, root is the super user.
>
> **[2:39](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=159)** I'll run this command and I'll see that I'm denied permission, so I'm going to need to use the sudo command to gain root privileges to see inside there.
>
> **[2:49](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=169)** Sudo tells the system to run whatever argument comes after it as a command with super user privileges, instead of the normal user's privileges.
>
> **[2:58](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=178)** We can really mess up a system doing the wrong thing as root, but that's what makes it so powerful.
>
> **[3:03](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=183)** We can make this system do exactly what we tell it to do.
>
> **[3:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=187)** After I've written sudo ls /root, and pressed enter, I'll be prompted to type in my user account password.
>
> **[3:15](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=195)** I can take this action because my user is allowed to use super user privileges during the setup process for this system.
>
> **[3:22](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=202)** My user account was given administrative privileges and if you set up your own system with a user for yourself, your account should have the same privilege.
>
> **[3:30](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=210)** Notice that as I type my password, nothing shows up in the password prompt on the screen.
>
> **[3:35](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=215)** It looks broken, but it's not.
>
> **[3:36](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=216)** This is a common way that a command line system will represent typing in a password.
>
> **[3:41](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=221)** It doesn't show what characters I type for the obvious reason that my password should remain a secret, but it also doesn't show any placeholder characters, like an asterisk or a dot, or anything like that so that people looking over my shoulder can't guess my password based on the number of characters they see.
>
> **[3:57](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=237)** So we have to type the password without any feedback.
>
> **[4:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=240)** If we think we might have mistyped, we can backspace a lot to make sure the password is erased and try again.
>
> **[4:06](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=246)** We'll get three chances to type our password correctly before the command will fail.
>
> **[4:10](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=250)** I'm pretty sure I typed my password correctly this time.
>
> **[4:12](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=252)** So I'll press enter.
>
> **[4:14](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=254)** It looks like it was correct, and now I can see the contents of that root directory.
>
> **[4:19](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=259)** There's one item in here called snap.
>
> **[4:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=261)** That's related to a system that lets us install software.
>
> **[4:24](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=264)** There's a grace period for when we can use sudo again within a few minutes, and it won't ask for our password.
>
> **[4:30](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=270)** So if I press up and recall my command, this time, I'm not prompted for a password.
>
> **[4:35](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=275)** When we're done using root's privileges through sudo, it's a good idea to type sudo -K to give up those privileges, meaning that we'll need to type our password in again next time we use the command.
>
> **[4:45](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=285)** This privilege we're using will expire after a little bit though as well.
>
> **[4:49](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=289)** Not having to type our password, every time we use sudo is a convenience.
>
> **[4:53](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=293)** If, for some reason, we're doing a whole lot of work as the super user, we can fully switch over to using the root user.
>
> **[4:59](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=299)** To do that, we'll type sudo dash I.
>
> **[5:03](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=303)** And I'll need to type in my user's password.
>
> **[5:05](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=305)** The dash I represents an interactive login and it acts as though I had logged into the system with a root account directly, and you'll notice when I switch over, the prompt changes a little bit.
>
> **[5:16](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=316)** When I was a normal user, the end of the prompt was a dollar sign, but now it's a pound sign or a number sign.
>
> **[5:23](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=323)** Of course, the username on the left has also changed to root, but the prompt changing away from a dollar sign is another visual cue to remind you you're working as root.
>
> **[5:32](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=332)** And using sudo -i has moved me into the root user's home directory as well.
>
> **[5:37](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=337)** I can see that by typing PWD to print the working directory, and I can see that now I'm working in slash root.
>
> **[5:44](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=344)** So now I'm working as the super user, and I could issue [[System Configuration]] commands without having to use sudo in front of each of them.
>
> **[5:51](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=351)** But I don't have any administration to do right now, so I'll type exit and I'll move back to my regular user.
>
> **[5:58](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-user-roles-and-sudo?u=76281980&t=358)** Take a look at my course, [[Ubuntu]] Linux Essential Commands and System Administration, for more about how to perform system administration tasks on a Linux system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (4), [[System Administration]] (3), [[Microsoft Word|Word]] (1), [[System Configuration]] (1), [[Ubuntu]] (1)
> **CLI Commands:** sudo (13), make (6), ls (2), snap (1)
> **Prerequisites:** install (3), set up (2), setup (1)
> **Definitions:** is a  (3), is called (1)
> **Tools:** command line (3)
> **Env Vars:** pwd (1)
> **UI Navigation:** switch to (1)
> **Best Practices:** bad practice (1)

#### [Understand file permissions](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=0)** - [Instructor] File permissions are the way we tell the system which users and groups of users are allowed to access any given file and in what ways.
>
> **[0:08](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=8)** When a user tries to access a file, the system consults the permission mode of a file and only allows the user access if they're permitted to have it.
>
> **[0:17](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=17)** At first look, file permissions can seem rather cryptic.
>
> **[0:20](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=20)** We've seen them before when listing files in a directory, but it's not immediately clear what they mean.
>
> **[0:25](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=25)** Rwxrwxrwx may not make any sense right now, but it will soon.
>
> **[0:31](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=31)** This sequence of letters breaks down into three sections.
>
> **[0:34](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=34)** The first section corresponds to the user who is designated as the owner of the file.
>
> **[0:39](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=39)** The second section corresponds to the file's group, a collection of users for whom we can define specific access to the file, and the third section corresponds to the access to the file for all other users who are not the file's owner or are not in the group designated in the group section.
>
> **[0:56](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=56)** Each of the sections of three characters breaks down into three individual letters, which stand for read, write, and execute.
>
> **[1:04](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=64)** Read means that someone can see the contents of a file but not modify it.
>
> **[1:08](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=68)** Write means that someone can make changes to a file, but not read the contents.
>
> **[1:13](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=73)** And execute means that someone can run the file, if it's a program or script, without loading it into another program first.
>
> **[1:20](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=80)** There are a couple of other letters we may see in here, but r, w, and x are the most common and will take care of what we need to do for now.
>
> **[1:28](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=88)** We can change the permissions of a file using the chmod or chmod command.
>
> **[1:33](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=93)** This command changes the permission mode string, that string of letters that we just saw.
>
> **[1:38](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=98)** We can also change the file's owner and group with two other commands, chown and chgrp.
>
> **[1:44](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=104)** The permission mode bits on a file, though once we set with chmod, can be modified in two different ways.
>
> **[1:50](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=110)** The first way uses octal notation, which uses three values to represent read, write, and execute.
>
> **[1:57](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=117)** There's another notation with another digit in front, but that's more advanced than we need to get into here.
>
> **[2:02](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=122)** The second way we can modify permission mode strings uses symbolic notation, which uses a shorthand for user, group, others, and all.
>
> **[2:11](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=131)** It includes an operator and a list of permissions to change.
>
> **[2:15](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=135)** We'll take a look at both, starting with the octal notation.
>
> **[2:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=138)** You may have seen commands like chmod 777, chmod 644, and things like that.
>
> **[2:24](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=144)** The way we arrive at those numbers is by assigning a read, write, and execute each a different value, four, two, and one.
>
> **[2:33](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=153)** That makes it easy to represent various states of these three values with just one digit.
>
> **[2:38](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=158)** So if my user can read, write, and execute, that comes out to seven, four plus two plus one.
>
> **[2:45](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=165)** If the group can only read and execute, that comes out to five, four plus one.
>
> **[2:51](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=171)** So the resulting permission string from this particular set of conditions would look like this: rwxr-xr--.
>
> **[3:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=180)** The dash indicates that a particular permission is not available.
>
> **[3:03](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=183)** With this system and a bit of very basic math, it's impossible to be ambiguous about the permissions that the user, group, or others have.
>
> **[3:12](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=192)** You can either remember the system that provides the numbers or you can memorize the modes explicitly.
>
> **[3:16](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=196)** Here's a table of all possible modes for a single set of permissions.
>
> **[3:20](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=200)** In most cases, we'll be working with just a few common permission modes, things like 644 and 755, so we don't need to memorize every combination.
>
> **[3:30](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=210)** Combinations like 153 and 047 are possible to express thanks to the way the system of representing values is designed, but they're pretty bizarre access requirements and aren't something we'll really ever need to use.
>
> **[3:43](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=223)** The symbolic way of representing permissions is a little bit more approachable, I think, because instead of setting numbers for each value, you can add or remove a permission using letters.
>
> **[3:54](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=234)** User is represented by the letter u, Group by g, Others by o, and changing all the values is represented by the letter a.
>
> **[4:02](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=242)** And if you leave off one of these prefixes, chmod applies your changes to all values also.
>
> **[4:08](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=248)** There are three operators here too.
>
> **[4:09](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=249)** Plus adds whichever permissions you specify to what's already there, minus removes from whatever's there, and equals resets the permissions to only whatever value you specify.
>
> **[4:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=261)** So for example, to set the owner or user permissions for a file to read, write, and execute, I would use chmod u+rwx.
>
> **[4:31](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=271)** To set my group permissions to only read, I would use chmod g=r.
>
> **[4:37](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=277)** And to remove read, write, and execute from others, I would write chmod o-rwx.
>
> **[4:45](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=285)** Or if I wanted to set the same mode for also sections for user, group, and other, I could use all.
>
> **[4:50](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=290)** For example, here, setting all equal to read, write, and execute would be a=rwx.
>
> **[4:56](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=296)** We can line up the octal and symbolic values and see what the results are.
>
> **[5:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=300)** An octal 777 is the same as saying a=rwx.
>
> **[5:05](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=305)** 775 is the same as saying u=rwx, g=rx, o=rx.
>
> **[5:12](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=312)** You can see the symbolic notation is a little bit longer, but it contains more information and context.
>
> **[5:17](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=317)** So as I mentioned, I think it's a little easier to work with.
>
> **[5:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=321)** The nice thing about symbolic notation is that it's a little easier to make changes since we're specifying what to change rather than what octal value to use.
>
> **[5:30](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=330)** Using octal notation is kind of like using the equals operator in symbolic notation all the time.
>
> **[5:35](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=335)** Saying whatever permission mode was there before, now it's this value, rather than add read or remove execute, or something like that.
>
> **[5:44](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=344)** Here's a few examples before and after of changing permissions with symbolic notation.
>
> **[5:50](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=350)** It's not something to memorize per se, it's just to give you a sense of how things change.
>
> **[5:54](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=354)** We can see that in the first row, adding execute without specifying a prefix adds an x in all three places.
>
> **[6:01](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=361)** In the second row, setting group to write, and others to read changes the original pretty substantially, and so forth.
>
> **[6:08](https://www.linkedin.com/learning/learning-linux-command-line-26594217/understand-file-permissions?u=76281980&t=368)** Writing out modes like this can help you practice, but keep in mind that we'll only really work with a few common modes, especially when we get started.

> [!info]- Semantic Content
>
> **CLI Commands:** chmod (9), make (3), chown (1)
> **Definitions:** means that (3), is a  (2)
> **Analogies:** for example (2), kind of like (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Modify file permissions](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=0)** - [Instructor] Let's practice changing permissions on files.
>
> **[0:04](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=4)** I have a small bash script here called test.sh, which is a simple program that just prints out a line of text when we run it.
>
> **[0:11](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=11)** To run this, I'll need to use the Bash interpreter, so I'll write bash as my command and provide that script as an argument, and there's the output, but I could also change the permission mode on this program so that I can run it or execute it directly as if it were a command.
>
> **[0:28](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=28)** I'll take a look at the permission mode string for this file with ls -l test.sh.
>
> **[0:35](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=35)** And here I can see that while my user and the group can both read and write the file and others can read it, there's no X's in the mode string, meaning that nobody has execute permission on the file.
>
> **[0:46](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=46)** Let's change that using chmod and +x.
>
> **[0:51](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=51)** This adds the execute permission for everybody, the user, the group, and other.
>
> **[0:57](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=57)** I'll run that and then I'll recall my command to take a look at the mode string for the file.
>
> **[1:01](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=61)** Here, I can see the difference.
>
> **[1:04](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=64)** My user can read, write, and execute, anyone in the files group can read, write, and execute, and others can read and execute.
>
> **[1:13](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=73)** Pop quiz, what is that set of permissions expressed in octal?
>
> **[1:17](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=77)** Remember, we use 4 for read, 2 for write, and 1 for execute.
>
> **[1:22](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=82)** So that's 7 for the user, 7 for the group, and 5 for other, 775.
>
> **[1:29](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=89)** I can double-check that with stat test.sh, and here I see my octal representation of the permissions for this file.
>
> **[1:39](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=99)** I'll clear my screen.
>
> **[1:41](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=101)** To run my file, I can treat it like a command using a period and a slash in front of the name.
>
> **[1:47](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=107)** The period refers to the current working directory and the slash tells the shell to look inside there to find this program.
>
> **[1:54](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=114)** Doing this, the shall will run or execute my program.
>
> **[1:58](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=118)** An executable file means that the file can be run as a program on its own without having to be loaded by another program first, as we saw before when I passed the script as an argument to the Bash command.
>
> **[2:09](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=129)** Again, this file is just an example, and if you're curious to learn more about writing programs with Bash, take a look at Learning Bash Scripting here on [[LinkedIn]] Learning.
>
> **[2:19](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=139)** Next, let's take away the execute bit for all the users and take away the right bit for the group.
>
> **[2:24](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=144)** Take a moment and think about how you would do this in octal notation and in symbolic notation.
>
> **[2:32](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=152)** To do this in octal notation, I'd type chmod 644 test.sh, leaving the user with read and write and leaving group and other with only read.
>
> **[2:43](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=163)** In symbolic notation, it would be chmod a-x g-w.
>
> **[2:49](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=169)** Now, if I recall my command before and try to run my script, I'm denied permission, but I can still run it with another program, the Bash interpreter, as we saw earlier.
>
> **[2:59](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=179)** At this point, I may not be able to run the program directly, but I can still read the file.
>
> **[3:04](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=184)** I'll clear the screen and let's take a look at this file with cat test.sh.
>
> **[3:09](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=189)** The command, cat, is often used to output the contents of a file.
>
> **[3:13](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=193)** We'll see more about that later.
>
> **[3:15](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=195)** Here's my very simple program.
>
> **[3:16](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=196)** I can see the contents because my user is allowed read permission on the file.
>
> **[3:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=201)** Now let's take away read permission for just the user.
>
> **[3:24](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=204)** Think about how we do that in octal notation and symbolic notation.
>
> **[3:28](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=208)** This one's pretty straightforward in symbolic notation.
>
> **[3:31](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=211)** That would be CH mod u-r test.sh, but in octal, it's a little trickier because we'll have to think about the values for not changing as well as the ones we are.
>
> **[3:42](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=222)** In octal, The command would be chmod 244.
>
> **[3:46](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=226)** The two represents only having write permission.
>
> **[3:49](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=229)** 244 is a pretty odd permission mode and not one will use much, but as an example, it does the job.
>
> **[3:55](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=235)** Now, taking a look at the file again with cat test.sh, I'm denied read permission.
>
> **[4:01](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=241)** Let's change the permissions a bit more with chmod 755 test.sh, and now we'll be able to see the file's contents and run it.
>
> **[4:15](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=255)** When a user creates a file in their home directory, it starts out with a permission mode that's defined by the system.
>
> **[4:20](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=260)** On distributions like [[Ubuntu]] Desktop and others, where it's likely that users might collaborate with each other's files, the permissions are set to allow users to view or sometimes to view and edit files in other home directories, and on other distributions like server distributions, sometimes the permissions are set so that only the user can view and modify files in their own home directory.
>
> **[4:41](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=281)** There's no single standard permission mode for files in the home directory, but they're often 755, 644, or 700, depending on what the [[Linux]] distribution you're using has chosen.
>
> **[4:52](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=292)** We can take a look at what these permissions are set to on our own system by creating a blank file with the touch command.
>
> **[4:59](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=299)** I'll write touch newfile.
>
> **[5:02](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=302)** And with ls -l or stat, we can see the permissions.
>
> **[5:06](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=306)** In this case, it's read and write for the user, read and write for the group, and read for others.
>
> **[5:13](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=313)** That's 664.
>
> **[5:15](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=315)** There are two other aspects of permission settings that I want to talk about, file ownership and group ownership.
>
> **[5:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=321)** In this long output of ls, there's two columns that show the user and group ownership for each file.
>
> **[5:27](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=327)** The user here is the user we're talking about in the first set of permissions, and the group is the group from the second set of three letters in the permission mode string.
>
> **[5:38](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=338)** I'll clear the screen again and then let's take another look at test.sh.
>
> **[5:43](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=343)** Recall that the user permission is set to read, write, and execute, the group permission is set to read and execute, and other is set to read and execute as well.
>
> **[5:55](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=355)** I can verify that I can write to the file by opening up a text editor and making a change.
>
> **[6:01](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=361)** I'll write nano test.sh.
>
> **[6:06](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=366)** I'll add another line here with a comment.
>
> **[6:08](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=368)** Don't worry about this right now.
>
> **[6:09](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=369)** We'll get into using nano in more detail later.
>
> **[6:12](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=372)** I'll save this file with Control + O, and close the editor with Control + X.
>
> **[6:17](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=377)** If I change the user who owns the file, my user won't be the owner anymore, so these first three permission bits won't apply to my user.
>
> **[6:25](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=385)** I'll write sudo chown for change ownership and root to change the ownership to the root user, and I'll provide the name of my file.
>
> **[6:36](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=396)** I have to use sudo because I need roots privileges to set something to be owned by another user than myself.
>
> **[6:42](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=402)** And now if I try to edit the file again with nano test.sh, I see a warning that I'm working on a read-only file.
>
> **[6:49](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=409)** I can't write to the file anymore because my user isn't the owner.
>
> **[6:54](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=414)** I'm only accessing the file through the group permissions, which are set to deny the group write access.
>
> **[7:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=420)** I'll press Control + X.
>
> **[7:02](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=422)** When we create a file in our home directory, it'll often be given the group that corresponds to our user or the default group that our user is a member of.
>
> **[7:09](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=429)** As with the file creation permissions, this varies by distribution.
>
> **[7:13](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=433)** I can see the effect of changing my ownership as I've done here with ls -l test.sh.
>
> **[7:20](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=440)** And here I can see the root is the user instead of my user.
>
> **[7:25](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=445)** So let's change that back with sudo chown, my username, test.sh.
>
> **[7:33](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=453)** and again, I can see that change has taken effect.
>
> **[7:36](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=456)** Now I'd be able to edit the file again.
>
> **[7:39](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=459)** Changing groups works the same way, but with chgrp command.
>
> **[7:43](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=463)** As we're getting started with the command line, we won't be changing permissions too much, but once we start working with things like [[Web Servers]] and other processes that need to access files in secure ways, we'll need to think about and change permissions.
>
> **[7:56](https://www.linkedin.com/learning/learning-linux-command-line-26594217/modify-file-permissions?u=76281980&t=476)** To learn more about permissions and security, take a look at my course Ubuntu Linux: Essential Commands and [[System Administration]], which I mentioned before, and also take a look at Linux Security and Hardening Essential Training.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (3), [[Ubuntu]] (2), [[LinkedIn]] (1), [[Web Servers]] (1), [[System Administration]] (1)
> **CLI Commands:** chmod (5), ls (4), cat (3), sudo (3), chown (2)
> **File Paths:** test.sh (13)
> **Tools:** bash (7), command line (1)
> **Definitions:** is a  (3), refers to (1), means that (1)
> **Cross-References:** as we saw (2)
> **Warnings:** warning (1)
> **Prerequisites:** getting started (1)

#### [Create hard and symbolic links](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-hard-and-symbolic-links?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-hard-and-symbolic-links?u=76281980&t=0)** - [Instructor] I want to take a moment to talk about a special kind of file on a [[Linux]] system, a type of file called a link.
>
> **[0:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-hard-and-symbolic-links?u=76281980&t=7)** Links are files that are references to other files, and they're used to avoid having multiple copies of the same file in different places.
>
> **[0:14](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-hard-and-symbolic-links?u=76281980&t=14)** We'll keep one file in one location, and then add a little pointer or link to other places that you want the file to appear to be.
>
> **[0:22](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-hard-and-symbolic-links?u=76281980&t=22)** As we're learning about the command line, we may not need to create links, but it's important to know what they are when we come across them.
>
> **[0:28](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-hard-and-symbolic-links?u=76281980&t=28)** There are two kinds of links, hard links and soft or symbolic links.
>
> **[0:33](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-hard-and-symbolic-links?u=76281980&t=33)** Hard links point to specific data on the disk, and symbolic links point to a file on a disk.
>
> **[0:39](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-hard-and-symbolic-links?u=76281980&t=39)** It's kind of a subtle difference, but it changes how the resulting links work.
>
> **[0:43](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-hard-and-symbolic-links?u=76281980&t=43)** I'll show you how to create both kinds, and if you want to explore the difference in more detail, take a look at my Essential Commands Course.
>
> **[0:50](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-hard-and-symbolic-links?u=76281980&t=50)** First, let's take a look at soft links, which are also called symbolic links or symlinks.
>
> **[0:56](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-hard-and-symbolic-links?u=76281980&t=56)** I can create a symbolic link with the ln command and the -s option.
>
> **[1:01](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-hard-and-symbolic-links?u=76281980&t=61)** Then I'll provide the name of the source file, the file that I want to make a link to.
>
> **[1:06](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-hard-and-symbolic-links?u=76281980&t=66)** I'll use poems.txt, and then I'll provide the name of the link that I want to create.
>
> **[1:11](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-hard-and-symbolic-links?u=76281980&t=71)** I'll call that writing.txt.
>
> **[1:15](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-hard-and-symbolic-links?u=76281980&t=75)** Now, if I take a look at my directory here, I can see that the writing.txt file is a link to poems.txt.
>
> **[1:24](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-hard-and-symbolic-links?u=76281980&t=84)** I can tell it's a link because it has an arrow here, and over here on the left side, its type is indicated as l, which is short for link.
>
> **[1:33](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-hard-and-symbolic-links?u=76281980&t=93)** If I take a look at the contents of writing.txt, I see the original file, and if I were to edit the writing.txt file, I'd be editing the original as well.
>
> **[1:44](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-hard-and-symbolic-links?u=76281980&t=104)** writing.txt is a file, but it's just a pointer to the original one.
>
> **[1:49](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-hard-and-symbolic-links?u=76281980&t=109)** It's important to note that the link we created is relative.
>
> **[1:52](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-hard-and-symbolic-links?u=76281980&t=112)** That is, if we move this link somewhere else on the file system, the system won't be able to reference the original file anymore, and if we move the original file, the link will break as well, because the system will be told to look at a particular path for the linked file, and it won't be there anymore.
>
> **[2:08](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-hard-and-symbolic-links?u=76281980&t=128)** We can create a symlink using an absolute path, and that solves the first problem.
>
> **[2:12](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-hard-and-symbolic-links?u=76281980&t=132)** A symlink with an absolute path can be moved anywhere on the system, and that link will continue to work, but if we move the original file, even a symlink with an absolute path will break, because that path will now be invalid.
>
> **[2:25](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-hard-and-symbolic-links?u=76281980&t=145)** I'll clear my screen.
>
> **[2:27](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-hard-and-symbolic-links?u=76281980&t=147)** We can create a hard link with ln, and I'll leave off the -s option.
>
> **[2:32](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-hard-and-symbolic-links?u=76281980&t=152)** Here, I'll write ln, and then provide the name of the file I'm linking to, and then a name for the link.
>
> **[2:39](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-hard-and-symbolic-links?u=76281980&t=159)** In this case, I'll call it words.txt.
>
> **[2:43](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-hard-and-symbolic-links?u=76281980&t=163)** I'll list my directory here.
>
> **[2:47](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-hard-and-symbolic-links?u=76281980&t=167)** A hard link appears to the user and to the system to be a regular file in the file listing, but it's also just a pointer to the original file, or to be more specific, it's a pointer to the actual data of a file on the file system.
>
> **[3:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-hard-and-symbolic-links?u=76281980&t=180)** Every file we have is a hard link to the data that makes up the file, so creating another hard link to particular data on the disk doesn't duplicate the data.
>
> **[3:08](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-hard-and-symbolic-links?u=76281980&t=188)** It's just like a room with two doors.
>
> **[3:11](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-hard-and-symbolic-links?u=76281980&t=191)** Whichever door you use to go into the room, you're still in the same room.
>
> **[3:15](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-hard-and-symbolic-links?u=76281980&t=195)** I can get a clue that this file is a hard link by taking a look at this column here.
>
> **[3:20](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-hard-and-symbolic-links?u=76281980&t=200)** While most of my other files say 1, this one says 2.
>
> **[3:24](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-hard-and-symbolic-links?u=76281980&t=204)** This number indicates how many hard links share the same file, and if I take a look up here at the poems line, I can see that this also shows 2.
>
> **[3:32](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-hard-and-symbolic-links?u=76281980&t=212)** That's because I created this hard link to point to this file.
>
> **[3:37](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-hard-and-symbolic-links?u=76281980&t=217)** Hard links can be moved around the file system, and it doesn't matter if what we think of as the original file is moved.
>
> **[3:43](https://www.linkedin.com/learning/learning-linux-command-line-26594217/create-hard-and-symbolic-links?u=76281980&t=223)** Hard links and soft links both have their uses, and as I mentioned earlier, if you want a more technical look at the difference between the kinds of links, check out my Essential Commands Course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (1)
> **File Paths:** writing.txt (5), poems.txt (2), words.txt (1)
> **Definitions:** is a  (4), short for (1)
> **CLI Commands:** make (1)
> **Tools:** command line (1)
> **Analogies:** just like (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Fix broken syntax](https://www.linkedin.com/learning/learning-linux-command-line-26594217/challenge-fix-broken-syntax?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/challenge-fix-broken-syntax?u=76281980&t=0)** - [Instructor] Let's take a few moments to practice what we've learned so far.
>
> **[0:03](https://www.linkedin.com/learning/learning-linux-command-line-26594217/challenge-fix-broken-syntax?u=76281980&t=3)** In this challenge, I'll give you a few commands that I'd like you to correct.
>
> **[0:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/challenge-fix-broken-syntax?u=76281980&t=7)** Rewrite these commands to use valid syntax and describe the reason each command is incorrect as presented.
>
> **[0:13](https://www.linkedin.com/learning/learning-linux-command-line-26594217/challenge-fix-broken-syntax?u=76281980&t=13)** You may want to pause this video to keep the commands on the screen.
>
> **[0:17](https://www.linkedin.com/learning/learning-linux-command-line-26594217/challenge-fix-broken-syntax?u=76281980&t=17)** Take about five minutes for this brief challenge.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [Solution: Fix broken syntax](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solutions-fix-broken-syntax?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solutions-fix-broken-syntax?u=76281980&t=0)** - [Instructor] Here's how I solved these challenges.
>
> **[0:03](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solutions-fix-broken-syntax?u=76281980&t=3)** The first item has an invalid path.
>
> **[0:05](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solutions-fix-broken-syntax?u=76281980&t=5)** As it's written, tilda slash home slash scott doesn't make any sense.
>
> **[0:09](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solutions-fix-broken-syntax?u=76281980&t=9)** Tilda already represents slash home slash scott on my system.
>
> **[0:13](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solutions-fix-broken-syntax?u=76281980&t=13)** So if I take a look at this command, it looks like I'm trying to move into my home directory, so I'll rewrite that as cd space tilda, or cd space slash home slash scott, but not the two of them together.
>
> **[0:25](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solutions-fix-broken-syntax?u=76281980&t=25)** The second item uses LS and slash home to take a look at the directory that contains the user home directories.
>
> **[0:32](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solutions-fix-broken-syntax?u=76281980&t=32)** The problem here is that the command is written in capital letters.
>
> **[0:36](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solutions-fix-broken-syntax?u=76281980&t=36)** [[Linux]] commands are case sensitive, so I'll need to change that to lowercase in order for it to work.
>
> **[0:41](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solutions-fix-broken-syntax?u=76281980&t=41)** This third command looks like it's trying to move a file into a home directory, but it's missing some slashes.
>
> **[0:47](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solutions-fix-broken-syntax?u=76281980&t=47)** So to fix that, I'll change that to mv log dot tar dot gz space slash home slash scott.
>
> **[0:54](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solutions-fix-broken-syntax?u=76281980&t=54)** The last command looks like it's trying to change the ownership of a file, but there's no mode string provided.
>
> **[0:59](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solutions-fix-broken-syntax?u=76281980&t=59)** So to make this a valid command, I'll need to add an appropriate mode string, for example, 644, or whatever's appropriate.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (1)
> **CLI Commands:** make (2), cd (2), ls (1), mv (1), tar (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Practice working with files](https://www.linkedin.com/learning/learning-linux-command-line-26594217/challenge-practice-working-with-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/challenge-practice-working-with-files?u=76281980&t=0)** - [Instructor] Let's spend a little more time practicing what we've learned so far.
>
> **[0:03](https://www.linkedin.com/learning/learning-linux-command-line-26594217/challenge-practice-working-with-files?u=76281980&t=3)** For this challenge, I'd like you to spend some time creating files.
>
> **[0:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/challenge-practice-working-with-files?u=76281980&t=7)** You can do this with a touch command or you can make copies of existing files, practice using links and creating directories to copy or move your copies of the exercise files.
>
> **[0:17](https://www.linkedin.com/learning/learning-linux-command-line-26594217/challenge-practice-working-with-files?u=76281980&t=17)** Don't move the originals though, because we'll need them to be where they are for the [[Representational State Transfer (REST)|rest]] of the course.
>
> **[0:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/challenge-practice-working-with-files?u=76281980&t=21)** Take about 10 minutes to do this so you can build your confidence, both working with files and avoiding files you don't want to change.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Practice working with files](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solutions-practice-working-with-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solutions-practice-working-with-files?u=76281980&t=0)** - [Narrator] Because this challenge was open-ended, I don't have a solution to show you.
>
> **[0:03](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solutions-practice-working-with-files?u=76281980&t=3)** What's important here is that you had some time to work with files on the file system and practice using file management skills.
>
> **[0:11](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solutions-practice-working-with-files?u=76281980&t=11)** The more we work with files and think about the directory structure, the more natural working with files at the command line will become.
>
> **[0:17](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solutions-practice-working-with-files?u=76281980&t=17)** Be sure to take time as you learn to practice new skills and reinforce old ones.
>
> **[0:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solutions-practice-working-with-files?u=76281980&t=21)** Practice makes us better, but we have to allow time for it.

> [!info]- Semantic Content
>
> **Tools:** command line (1)
> **Speakers:** - [narrator] (1)


### 4. Common Command-Line Tasks and Tools

[↑ Back to Table of Contents](#table-of-contents)

#### [The importance of modularity](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-importance-of-modularity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-importance-of-modularity?u=76281980&t=0)** - [Instructor] As we start exploring command line tools, it's important to understand the principle behind many of the programs we'll be looking at.
>
> **[0:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-importance-of-modularity?u=76281980&t=7)** That principle is that a tool or program should do one thing, and it should do it well.
>
> **[0:13](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-importance-of-modularity?u=76281980&t=13)** Doing something well means, in this case, being a well-behaved citizen of the ecosystem of tools that operate using text interfaces, which means that the tool should expect to take in standard text from a file or stream and output text in a reasonable format once it's done processing or doing whatever action that particular tool does.
>
> **[0:32](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-importance-of-modularity?u=76281980&t=32)** This principle of modularity suggests that we shouldn't have tools that try to do too much.
>
> **[0:37](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-importance-of-modularity?u=76281980&t=37)** We don't want one single tool or program that reads files and separates some of the text into another file and renames that file and compresses it into an archive when it's done, or tries to do everything anyone could possibly want to do.
>
> **[0:51](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-importance-of-modularity?u=76281980&t=51)** Instead, we want one tool to do each of those tasks so we can use and combine those specialized tools in any way we need to.
>
> **[0:59](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-importance-of-modularity?u=76281980&t=59)** Of course, there are applications that include many features, including the ones I mentioned before, and that's fine.
>
> **[1:04](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-importance-of-modularity?u=76281980&t=64)** We often find those in graphical environments, so those applications aren't the ones we're talking about here.
>
> **[1:10](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-importance-of-modularity?u=76281980&t=70)** Here, we're talking about the standard set of command line tools that can be configured to work together in an incredible number of ways.
>
> **[1:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-importance-of-modularity?u=76281980&t=78)** We want to think of the tools not as a multi-function Swiss Army Knife, but as a kitchen that's well equipped with chef's tools.
>
> **[1:25](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-importance-of-modularity?u=76281980&t=85)** Sure, we can open a can with a little Swiss Army Knife attachment or try to chop a tomato with that tiny blade, but none of those multi-function tools does anything particularly well, certainly not well enough to prepare a meal we're proud of.
>
> **[1:39](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-importance-of-modularity?u=76281980&t=99)** To get real work done, we want quality, dedicated tools that can work together easily and can be used in different combinations to do whatever we need.
>
> **[1:48](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-importance-of-modularity?u=76281980&t=108)** Think of an assembly line, where one machine does one task and then passes the product on to the next specialized machine, rather than one single robot doing many different tasks on the same item.
>
> **[1:59](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-importance-of-modularity?u=76281980&t=119)** Having separate, dedicated tools allows us to pick appropriate tools from our toolbox to do exactly what we need.
>
> **[2:06](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-importance-of-modularity?u=76281980&t=126)** We want to be able to incorporate the right tools into doing a task as flexibly as possible.
>
> **[2:12](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-importance-of-modularity?u=76281980&t=132)** As we'll see in a little bit, this philosophy underlies a lot of how we'll work at the command line.
>
> **[2:17](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-importance-of-modularity?u=76281980&t=137)** For example, we might use one program to read text from a file, then send that text to a program that filters certain text.
>
> **[2:24](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-importance-of-modularity?u=76281980&t=144)** Then, the output of that program gets processed so that it doesn't have duplicate lines, and then the result of that will get written back to a file.
>
> **[2:32](https://www.linkedin.com/learning/learning-linux-command-line-26594217/the-importance-of-modularity?u=76281980&t=152)** Modularity and flexibility are valuable features of command line tools.

> [!info]- Semantic Content
>
> **Tools:** command line (4)
> **CLI Commands:** find (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Use pipes to connect commands together](https://www.linkedin.com/learning/learning-linux-command-line-26594217/use-pipes-to-connect-commands-together?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/use-pipes-to-connect-commands-together?u=76281980&t=0)** - [Instructor] At the command line, we use pipes to take the output of one command and send it to another.
>
> **[0:05](https://www.linkedin.com/learning/learning-linux-command-line-26594217/use-pipes-to-connect-commands-together?u=76281980&t=5)** We can think of commands as little modular processing units that do one particular thing, and we can think of pipes as connections between those units.
>
> **[0:14](https://www.linkedin.com/learning/learning-linux-command-line-26594217/use-pipes-to-connect-commands-together?u=76281980&t=14)** So for example, we can use pipes to take the output of the cat command and then instead of displaying it on the screen, instead pass the result to the sort command.
>
> **[0:24](https://www.linkedin.com/learning/learning-linux-command-line-26594217/use-pipes-to-connect-commands-together?u=76281980&t=24)** Then if we wanted to, we could pass that output somewhere else too and keep working on the contents of the users.txt file in this case, step-by-step until we transform it in the way we want.
>
> **[0:35](https://www.linkedin.com/learning/learning-linux-command-line-26594217/use-pipes-to-connect-commands-together?u=76281980&t=35)** This diagram here is represented by this command or set of commands.
>
> **[0:39](https://www.linkedin.com/learning/learning-linux-command-line-26594217/use-pipes-to-connect-commands-together?u=76281980&t=39)** A set of commands connected by pipes is often called a command pipeline.
>
> **[0:44](https://www.linkedin.com/learning/learning-linux-command-line-26594217/use-pipes-to-connect-commands-together?u=76281980&t=44)** The pipe character, which is represented as a vertical bar or sometimes as a vertical bar with a little horizontal break in the middle, is usually the shift character on the back slash key, which is found above enter or return on a US keyboard.
>
> **[0:58](https://www.linkedin.com/learning/learning-linux-command-line-26594217/use-pipes-to-connect-commands-together?u=76281980&t=58)** If you're using a different keyboard, you may need to look around for the symbol.
>
> **[1:02](https://www.linkedin.com/learning/learning-linux-command-line-26594217/use-pipes-to-connect-commands-together?u=76281980&t=62)** Searching on the internet should give you a good idea of where to find it on your keyboard.
>
> **[1:06](https://www.linkedin.com/learning/learning-linux-command-line-26594217/use-pipes-to-connect-commands-together?u=76281980&t=66)** We'll type this character in between commands that we want to be piped together.
>
> **[1:10](https://www.linkedin.com/learning/learning-linux-command-line-26594217/use-pipes-to-connect-commands-together?u=76281980&t=70)** Throughout the course, I'll put a space on either side of the pipe character so it's easier to see, but it doesn't need to have spaces around it in order to work.
>
> **[1:19](https://www.linkedin.com/learning/learning-linux-command-line-26594217/use-pipes-to-connect-commands-together?u=76281980&t=79)** Let's take a look at using pipes at the command line.
>
> **[1:23](https://www.linkedin.com/learning/learning-linux-command-line-26594217/use-pipes-to-connect-commands-together?u=76281980&t=83)** To do this, I'm going to introduce a few more commands.
>
> **[1:26](https://www.linkedin.com/learning/learning-linux-command-line-26594217/use-pipes-to-connect-commands-together?u=76281980&t=86)** The first is echo, which prints out whatever text you give it as an argument.
>
> **[1:31](https://www.linkedin.com/learning/learning-linux-command-line-26594217/use-pipes-to-connect-commands-together?u=76281980&t=91)** For example, I'll write echo "hello" and the echo command replies with the text I provided.
>
> **[1:37](https://www.linkedin.com/learning/learning-linux-command-line-26594217/use-pipes-to-connect-commands-together?u=76281980&t=97)** Now let's write that command again, and this time I'll add a pipe character to send the output, not to the standard output or to the screen, but to the command wc, which is short for [[Microsoft Word|word]] count.
>
> **[1:49](https://www.linkedin.com/learning/learning-linux-command-line-26594217/use-pipes-to-connect-commands-together?u=76281980&t=109)** So I've written echo "hello" piped to wc, and here instead of the output from echo, we see the output of the wc program responding to the input from the echo command.
>
> **[2:01](https://www.linkedin.com/learning/learning-linux-command-line-26594217/use-pipes-to-connect-commands-together?u=76281980&t=121)** What wc is telling me here is that there's one line of text, one word, and six characters.
>
> **[2:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/use-pipes-to-connect-commands-together?u=76281980&t=127)** Let's change the input and see what the result is.
>
> **[2:11](https://www.linkedin.com/learning/learning-linux-command-line-26594217/use-pipes-to-connect-commands-together?u=76281980&t=131)** I'll write echo "hello world from the command line" piped to wc, that's one line, six words, and 34 characters.
>
> **[2:23](https://www.linkedin.com/learning/learning-linux-command-line-26594217/use-pipes-to-connect-commands-together?u=76281980&t=143)** If you're wondering what's up with a character count, that's a good question.
>
> **[2:26](https://www.linkedin.com/learning/learning-linux-command-line-26594217/use-pipes-to-connect-commands-together?u=76281980&t=146)** The word hello that we saw before is five characters long, but wc is saying there are six characters.
>
> **[2:32](https://www.linkedin.com/learning/learning-linux-command-line-26594217/use-pipes-to-connect-commands-together?u=76281980&t=152)** Wc is counting an invisible character at the end of the string called a new line in addition to the characters we sent it.
>
> **[2:40](https://www.linkedin.com/learning/learning-linux-command-line-26594217/use-pipes-to-connect-commands-together?u=76281980&t=160)** You can pipe anything to anything else, and usually it'll do something.
>
> **[2:44](https://www.linkedin.com/learning/learning-linux-command-line-26594217/use-pipes-to-connect-commands-together?u=76281980&t=164)** With most of the standard tools, it'll even do what you expect.
>
> **[2:48](https://www.linkedin.com/learning/learning-linux-command-line-26594217/use-pipes-to-connect-commands-together?u=76281980&t=168)** When we're working with the command line, we won't always use pipes, but they're a powerful feature to be aware of.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (3)
> **Tools:** command line (4)
> **CLI Commands:** cat (1), find (1)
> **Analogies:** for example (2)
> **File Paths:** users.txt (1)
> **Definitions:** short for (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [View text files with cat, head, tail, and less](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=0)** - [Instructor] Because a lot of what we'll be working with at the command line involves text files or text output, it's important to have a few tools in our toolkit to view the contents of text files.
>
> **[0:09](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=9)** The first one here I want to talk about is called cat, and that's short for concatenate.
>
> **[0:14](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=14)** To concatenate means to stick two or more things together and the cat command can do that, but it's often used just to print the contents of a file on the screen.
>
> **[0:23](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=23)** It's also helpful to get the contents of a text file into a series of piped commands as we saw briefly earlier.
>
> **[0:29](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=29)** Depending on the operating system we're using, we'll have different files available to us.
>
> **[0:34](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=34)** Sometimes we'd use cat to look at a log file or something like that, but here I'll use some classic poems because I want you to be able to follow along with me exactly and not get tied up in the differences between [[Linux]] distributions at this point.
>
> **[0:47](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=47)** To just list out the contents of a file, I can write cat followed by the name of the file that I want to read as an argument.
>
> **[0:54](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=54)** In this case, poems.txt.
>
> **[0:57](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=57)** Then I'll press Enter, and because that file is longer than our screen is tall, we can't see the output of it all at once in this terminal window.
>
> **[1:05](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=65)** Sure, we can scroll back up, but there's some better ways of working with the output.
>
> **[1:10](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=70)** The head and tail commands let us see a limited number of lines from the beginning or the end of a file, and they work just like cat.
>
> **[1:19](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=79)** I'll clear my screen here and then I'll write head poems.txt, and here I can see the first 10 lines of the text.
>
> **[1:28](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=88)** The same goes for tail.
>
> **[1:30](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=90)** I'll write tail poems.txt, and I can see the last 10 lines of the file.
>
> **[1:38](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=98)** I'll clear the screen again.
>
> **[1:40](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=100)** I can pass the -n option to head or tail to tell it a particular number of lines to show me.
>
> **[1:46](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=106)** For example, I'll write head -n5 poems.TXT, and this shows me just the first five lines of the file, and for example, tail -n3.
>
> **[1:59](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=119)** It'll show me the last three lines of the file.
>
> **[2:02](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=122)** Combining these with the cat command can make for some good practice using pipes.
>
> **[2:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=127)** You can get a good sense of how the order of commands affects the output.
>
> **[2:11](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=131)** For example, I'll write cat -n and with the cat command, the -n option adds a line number to each line of text.
>
> **[2:19](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=139)** I'll use that poems file, and then I'll pipe the output to tail -n5, so there's two commands here working together through a pipe.
>
> **[2:29](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=149)** The result of running that series of commands or that pipeline shows us that the original file has been piped into the cat -n command, which numbered each line.
>
> **[2:38](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=158)** Then tail showed us the last five lines of that result.
>
> **[2:42](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=162)** I'll rewrite that command pipeline reversing the two commands, so we'll have tail -n5 poems.txt piped to cat -n.
>
> **[2:55](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=175)** Now we can see that tale presented the last five lines, and then those lines were numbered by cat.
>
> **[3:01](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=181)** That's just an example, but it's important to keep in mind that order matters with pipes.
>
> **[3:05](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=185)** I'll clear the screen again.
>
> **[3:09](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=189)** There's another command that's useful for looking at longer text files and it's called less.
>
> **[3:13](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=193)** We can use it by itself with a file name or we can pipe output to it.
>
> **[3:19](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=199)** Less takes text input and presents it page by page or screen by screen, and gives us some controls to move around within the text.
>
> **[3:29](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=209)** I'll type less poems.txt, and here I see the contents of my file with a tiny bit of user interface down here at the bottom of the screen.
>
> **[3:39](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=219)** I can scroll up and down with the arrow keys, I can go down a line at a time with Enter or go down a screen fill at a time with Spacebar.
>
> **[3:47](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=227)** I can navigate forward and backward using the F and B keys.
>
> **[3:51](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=231)** Do these commands sound familiar?
>
> **[3:53](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=233)** These are the same commands that we used earlier to move around in the manual pages.
>
> **[3:58](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=238)** To find out some more information, you can press H to see the help.
>
> **[4:02](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=242)** That's useful if you'd like to learn some more of the commands that are available, and we can press Q to quit.
>
> **[4:08](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=248)** Here, I'll type cat poems.txt piped to less to use less as the target of a piped command.
>
> **[4:16](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=256)** The result we see is the same, the text being displayed in the less interface, but we got here using a different set of commands.
>
> **[4:23](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=263)** Again, I'll press Q to quit less and go back to the shell.
>
> **[4:27](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=267)** Looking at the contents of text files is an important scale to get comfortable with when you're working at the command line, whether you're doing [[System Administration]], programming, writing, or anything else that deals with text, these tools can help you out.
>
> **[4:41](https://www.linkedin.com/learning/learning-linux-command-line-26594217/view-text-files-with-cat-head-tail-and-less?u=76281980&t=281)** Remember to take a look at the command pages for these commands to see what else they can do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (1), [[System Administration]] (1)
> **CLI Commands:** cat (12), make (1), find (1)
> **File Paths:** poems.txt (7)
> **Analogies:** for example (3), just like (1)
> **Definitions:** is called (1), short for (1), is an  (1)
> **Cross-References:** as we saw (1), go back to (1)
> **Tools:** command line (1), terminal (1)
> **Best Practices:** good practice (1), remember to (1)

#### [Search for text in files and streams with grep](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=0)** - [Instructor] One of the main reasons we'd want to take a look at text files is to find and use some particular piece of information they contain.
>
> **[0:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=7)** A popular command we can use to do that without reading over a whole file ourselves manually is grep.
>
> **[0:14](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=14)** At its most basic, grep returns or outputs lines of text that match a search condition called a pattern.
>
> **[0:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=21)** The pattern can be either a specific or explicit group of characters, or we can use a pattern called a regular expression.
>
> **[0:29](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=29)** We'll take a look at both briefly here, but grep is a hugely powerful tool, and it's worth a course of its own.
>
> **[0:35](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=35)** We'll take a look at the basics so you're prepared to dive in deeper if you want to.
>
> **[0:41](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=41)** Let's use grep to look for some text in our poem's exercise file.
>
> **[0:45](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=45)** First we'll have grep show us all the lines of our poem's file that have the letters, T, H, and E right together.
>
> **[0:53](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=53)** To do this, I'll write grep and then the search term inside quotes, that'll be "the" and then the name of the file that I want to look inside of, in this case, poems.txt.
>
> **[1:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=67)** I'll run this, and I can see in the results my search term is highlighted and only lines of the file, which contain that term, are shown on the screen.
>
> **[1:16](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=76)** To illustrate this a little bit better, I'll recall my command, I'll move to right after grep, and I'll add -n.
>
> **[1:24](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=84)** This number is the lines of the input, so we can see which lines of the original file are being output.
>
> **[1:30](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=90)** Here we can see lines 7, 11, and 12, and so on match our criteria.
>
> **[1:35](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=95)** But if you're watching really closely, you'll notice that not all of the lines with the letters T, H, and E are printed here.
>
> **[1:42](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=102)** That's because grep is case sensitive, meaning it considers the uppercase and lowercase letters to be different characters.
>
> **[1:49](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=109)** Some of the lines of my text file have a capital T at the beginning of the [[Microsoft Word|word]] "the."
>
> **[1:53](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=113)** We can verify this by changing our grep command to include a capital T.
>
> **[1:58](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=118)** I'll recall my previous command and then I'll edit my pattern here.
>
> **[2:03](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=123)** I'll replace the lowercase T with uppercase T.
>
> **[2:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=127)** I'll run that.
>
> **[2:09](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=129)** And here I have three lines that match.
>
> **[2:12](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=132)** To tell grep that I don't care about the case of my search string, I'll use the -i option for case insensitive matching.
>
> **[2:19](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=139)** So I'll recall my previous command and I'll replace my -n option with the -i option.
>
> **[2:27](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=147)** And here's my results with both capital and lowercase letters in any combination that they might appear.
>
> **[2:33](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=153)** We can also use grep to omit lines that we don't want to see.
>
> **[2:37](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=157)** For that, we'll use the -v option.
>
> **[2:41](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=161)** I'll clear my screen here, and then I'll write grep -vi for an inverted match and case insensitive matching for our search term "the" and then the file name poems.txt.
>
> **[2:55](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=175)** And I can see that none of these lines have "the" together.
>
> **[2:59](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=179)** There's nothing highlighted because grep just drops the lines that match the search term, so there's nothing to highlight.
>
> **[3:05](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=185)** This can be helpful if you're looking through logs, for example, and want to ignore all of the output from a noisy program.
>
> **[3:12](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=192)** I mentioned earlier that grep can be worth many hours of exploration, and inspiration for that can be found in the main page for grep.
>
> **[3:20](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=200)** One of the features that makes grep so flexible is its support for regular expressions, or regexes.
>
> **[3:26](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=206)** These are expressions of patterns in text that allow us to ask more complex questions, such as returning lines that contain the letters H or I or J or K in them, for example.
>
> **[3:37](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=217)** Or we could search for words longer than a specific number of characters or a million other conditions that our purposes might require.
>
> **[3:45](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=225)** I'll clear the screen and let's take a look at two of these cases using the -E option.
>
> **[3:51](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=231)** To specify that I'm using a regex.
>
> **[3:54](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=234)** I'll write grep -E "[hijk]" and then our file name.
>
> **[4:06](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=246)** This search term is regular expression notation for the occurrence of the lowercase letters, h, i, j, or k, and I can see in my output that grep has done what I expect.
>
> **[4:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=258)** It's showing me lines with any of these letters in them.
>
> **[4:22](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=262)** I'll clear the screen again, and this time, I'll write grep -E "\w{6,}"
>
> **[4:37](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=277)** and then our file name.
>
> **[4:39](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=279)** This is notation for six or more of any character considered a word character.
>
> **[4:44](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=284)** That's things like letters, but not things like punctuation.
>
> **[4:48](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=288)** And here I can see all of the matching strings are highlighted.
>
> **[4:51](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=291)** In this case, this matches words of six characters or more.
>
> **[4:56](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=296)** There's a whole lot we can learn about regular expressions, but that's not the focus of this course.
>
> **[5:02](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=302)** Regular expressions are powerful, and at first, they can look like magical incantations.
>
> **[5:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=307)** If you're curious about them, be sure to check out the course learning regular expressions.
>
> **[5:13](https://www.linkedin.com/learning/learning-linux-command-line-26594217/search-for-text-in-files-and-streams-with-grep?u=76281980&t=313)** Even using grep to match specific words without regular expressions will provide you with a powerful tool to find text in files or output on your system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2)
> **CLI Commands:** grep (20), find (2)
> **Analogies:** for example (2), such as (1)
> **File Paths:** poems.txt (2)
> **Exercise Files:** exercise file (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Manipulate text with awk, sed, and sort](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=0)** - [Instructor] One of the tasks of a system administrator, a systems analyst, a scientist, or a programmer, is to make use of information from various logs or outputs.
>
> **[0:10](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=10)** We've seen how to look at files and how to search within them, so now let's take a look at reaching in and extracting particular data and presenting it in different ways.
>
> **[0:20](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=20)** There's a few common tools for this, and which one we'd use is largely a matter of preference, so it's helpful to be at least a little familiar with both.
>
> **[0:29](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=29)** These tools are called awk and sed.
>
> **[0:32](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=32)** Both tools are widely used in command line operations, and you'll see them both as you explore [[System Administration]] and systems programming.
>
> **[0:40](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=40)** What awk is great at and is commonly used for in scripts is pulling data out of a file according to a rule.
>
> **[0:47](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=47)** To define this rule, we write an awk program.
>
> **[0:50](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=50)** We'll write that either at the command line or in a separate file if it's very complex, and that will tell awk how to get the data we want.
>
> **[0:58](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=58)** Sed is also used for modifying information from a file or stream.
>
> **[1:02](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=62)** Its name is short for stream editor.
>
> **[1:04](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=64)** And while awk is really helpful for extracting particular data and presenting it as the result on screen or in a pipeline.
>
> **[1:11](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=71)** sed excels a changing data as it flows through a command pipeline or in place in a file.
>
> **[1:17](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=77)** We can use either of these commands in a command pipeline or we can use them just by themselves.
>
> **[1:23](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=83)** First, let's take a look at using awk.
>
> **[1:26](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=86)** We have a simple data file called simple_data.txt, and we can take a look at that with cat.
>
> **[1:33](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=93)** I'll write cat simple_data.txt.
>
> **[1:37](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=97)** This is a little table of some simple data.
>
> **[1:40](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=100)** To use awk, we'll write a program that considers information in terms of delimiters or field separators, or what we might think of as breaks or special characters that represent divisions in the data.
>
> **[1:53](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=113)** These could be spaces or tabs, or another string that we specify, like a comma.
>
> **[1:58](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=118)** We'll work with the default delimiters here, which are tabs and spaces.
>
> **[2:02](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=122)** So let's write a small awk command to show us just the second column of data from this file.
>
> **[2:09](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=129)** To do that, I'll write awk, and then a single quote, a left curly brace, the command, print, space, $2, a right curly brace, a closing single quote, and then our file name, simple_data.txt.
>
> **[2:27](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=147)** The single quotes contain the awk program, in this case, just print, which returns a value and an indicator of the field that we want the program to return, which in this case is 2.
>
> **[2:39](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=159)** When I run the program, I see the column of numbers called ID.
>
> **[2:42](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=162)** We can change our awk program a little bit.
>
> **[2:45](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=165)** I'll recall this. I'll move into the awk program.
>
> **[2:49](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=169)** And here after $2, I'll put double quotes \t, and another double quote.
>
> **[2:57](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=177)** This escaped T represents a tab character.
>
> **[3:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=180)** And then I'll say, give us the contents of column one after that.
>
> **[3:04](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=184)** I'll run this, and here's two columns of information presented differently than they appeared in the source file.
>
> **[3:11](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=191)** Because the output of this command is plaintext, we can pipe it into something else like the sort command.
>
> **[3:17](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=197)** I'll recall my previous command.
>
> **[3:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=198)** Then I'll type a pipe, and I'll type sort -n.
>
> **[3:23](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=203)** - n stands for a numeric sort.
>
> **[3:26](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=206)** This outputs the data in order by the value in the ID column.
>
> **[3:30](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=210)** That's been a really quick look at awk, which like grep is a whole topic unto itself.
>
> **[3:35](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=215)** I encourage you to extend your learning about awk by taking a look at our course dedicated to awk.
>
> **[3:42](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=222)** You could also explore the awk man page to get an idea of what else it can do.
>
> **[3:46](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=226)** I'll clear the screen.
>
> **[3:49](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=229)** Now let's explore sed.
>
> **[3:52](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=232)** Let's take another look at our simple data.
>
> **[3:54](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=234)** I'll write cat simple_data.txt.
>
> **[3:58](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=238)** And now let's write a sed command to replace one string with another in this file.
>
> **[4:04](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=244)** I'll type sed s/Orange/Red/g, and the file name,
>
> **[4:14](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=254)** and then I'll run that.
>
> **[4:16](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=256)** This command changed every occurrence of the text string, Orange, into the string, Red.
>
> **[4:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=261)** The S before the slash and the expression stands for substitute.
>
> **[4:25](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=265)** Then there's a slash, followed by the string you want to replace, another slash, and the string you want to replace that string with.
>
> **[4:33](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=273)** After the final slash, I used the letter g, which represents a greedy match, meaning that all occurrences of the first string in a line will be replaced with a replacement string.
>
> **[4:44](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=284)** If I left that off, only the first occurrence in each line would be substituted.
>
> **[4:49](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=289)** Be sure to explore the sed man page if you want to explore further.
>
> **[4:54](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=294)** I'll clear the screen again.
>
> **[4:57](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=297)** Another tool I want to touch on briefly here is sort, which we saw a little bit earlier.
>
> **[5:02](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=302)** Sort, as you might expect, sorts the data passed into it in various ways.
>
> **[5:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=307)** Let's take a look at our simple data file again.
>
> **[5:10](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=310)** I'll write cat simple_data.txt.
>
> **[5:13](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=313)** If I just write sort simple_data.txt, I can see that it sorts the data on the first character of each row.
>
> **[5:20](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=320)** I have the name starting with A, then J, then M, then the name column header, and so on.
>
> **[5:27](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=327)** Using sort with a -k option for key, I can provide a sort key to change which column I sort by.
>
> **[5:35](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=335)** So if I write sort -k2 -n simple_data.txt,
>
> **[5:44](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=344)** I can see the output here.
>
> **[5:46](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=346)** That command that I provided use the second column as the sort key.
>
> **[5:49](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=349)** That's the -k2.
>
> **[5:51](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=351)** And -n performs a numeric sort, so it treats these values as numbers instead of strings, and in this case, that makes a lot more sense as something to sort by.
>
> **[6:03](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=363)** I'll clear my screen.
>
> **[6:06](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=366)** We can also use sort to show us unique lines of a file or hide duplicates in our output.
>
> **[6:13](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=373)** This is handy if we're looking at a log file and we need to get rid of repeated entries to make the output more clear.
>
> **[6:19](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=379)** I have a file here with some repeated lines, so let's take a look at that.
>
> **[6:24](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=384)** I'll write cat dupes.txt.
>
> **[6:30](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=390)** And now if I use sort -u for unique and dupes.txt, I only see one line for each entry, ignoring the duplicates.
>
> **[6:41](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=401)** There's all kinds of things we can do with sort, and it makes a helpful step in a piped command if you're working with dates or timestamps or numbers and you need to keep them all in logical order.
>
> **[6:51](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=411)** Be sure to check out the sort man page for more details.
>
> **[6:57](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=417)** There are some other commands you might want to explore as well, which manipulate text in other ways.
>
> **[7:02](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=422)** There's rev, which prints out the file in reverse.
>
> **[7:06](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=426)** There's tac, which prints the file out in reverse line order.
>
> **[7:10](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=430)** Get it?
>
> **[7:11](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=431)** That command's name is cat spelled backwards.
>
> **[7:15](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=435)** There's also the tr command, or translate, which you can use to work with individual characters.
>
> **[7:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=441)** That's been a fairly quick look at some of the common stream manipulation commands you're likely to need while working at the command line.
>
> **[7:28](https://www.linkedin.com/learning/learning-linux-command-line-26594217/manipulate-text-with-awk-sed-and-sort?u=76281980&t=448)** I encourage you to take some time and practice with these as you continue your learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[System Administration]] (1)
> **CLI Commands:** awk (16), sed (7), cat (6), make (2), grep (1)
> **File Paths:** simple_data.txt (7), dupes.txt (2)
> **Code Identifiers:** simple_data (7)
> **Definitions:** is a  (2), stands for (2), short for (1)
> **Documentation:** man page (3)
> **Tools:** command line (3)
> **Speakers:** - [instructor] (1), - n (1)

#### [Edit text with Vim](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=0)** - At the command line, we can edit text with stream editors and so on.
>
> **[0:04](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=4)** But in many cases, especially when we're writing documents or coding, it's easier to just open up a text editor and do what we need to do.
>
> **[0:11](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=11)** But if we're working at the command line, we don't always have access to our favorite graphical text editor.
>
> **[0:17](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=17)** On most [[Linux]] distributions, there's a text editor called Vim.
>
> **[0:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=21)** We'll also see it referred to as VI in some places for legacy reasons.
>
> **[0:25](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=25)** The Command VI is a shortening of the [[Microsoft Word|word]] visual and VI was a popular text editor on Unix.
>
> **[0:32](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=32)** The name VIM stands for VI Improved.
>
> **[0:35](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=35)** VI, or Vim takes a little bit of getting used to and I encourage you to check out our course, Learning Vim, to get a full sense of how to use it.
>
> **[0:43](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=43)** As with a lot of the tools we've explored so far, VIM can take a few minutes to learn, but years to master.
>
> **[0:50](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=50)** So I'll take you through the very basics right now so you're ready to explore more when you're ready.
>
> **[0:56](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=56)** To start Vim from the command line, I'll type VI.
>
> **[1:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=60)** You might need to type Vim depending on the distribution you're using.
>
> **[1:03](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=63)** On many systems, VI is a link to Vim.
>
> **[1:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=67)** The first screen that opens up when I open the software gives us a sense of what it's like to work in Vim.
>
> **[1:12](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=72)** Instead of having a toolbar, Vim has different operating modes.
>
> **[1:15](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=75)** There's insertion mode where we type and make manual changes to text and command mode where we navigate around a file, manipulate the text we've written, issue commands like save and search and many other things, and more.
>
> **[1:28](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=88)** I'll press I to go into insertion mode and here I can start typing some text.
>
> **[1:36](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=96)** And if I press escape, I'll go back into command mode.
>
> **[1:39](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=99)** Keys we press in command mode do different things than in insertion mode, and here we'll use command mode to move the cursor around.
>
> **[1:47](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=107)** We'll move left and right with the H and L keys and we can move down and up with J and K.
>
> **[1:53](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=113)** As I mentioned, we'll need to be in insertion mode if we want to make changes to text.
>
> **[1:59](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=119)** With my cursor here on D in dog, I'll press lowercase I to go back into insertion mode, which more precisely lets us insert text right before the cursor before the cursor, which in my case is on the first letter of the word dog.
>
> **[2:13](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=133)** We can see that if I type, I'm inserting right before where the cursor is.
>
> **[2:17](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=137)** I'll press escape again and this time I'll press Shift+I, which lets me insert text at the beginning of a line.
>
> **[2:28](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=148)** There are other insert modes such as lowercase O to open up a new line after the current line.
>
> **[2:34](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=154)** Once we're done editing text, we'll want to save it.
>
> **[2:36](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=156)** To do that, I'll press Escape to go back into command mode and then type Colon+W, space, new.txt.
>
> **[2:45](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=165)** That saves the file or writes it to disc.
>
> **[2:48](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=168)** And in this case, the file has the name new.txt.
>
> **[2:52](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=172)** I see here at the bottom of the screen, VI has written two lines and 83 bytes.
>
> **[2:57](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=177)** Now I have a file to work with and I can make changes and save them with just Escape+Colon+W in the future.
>
> **[3:04](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=184)** If I want to save the file and exit I'll make sure I'm in command mode by pressing Escape, and I'll type Colon+WQ to write or save and quit.
>
> **[3:15](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=195)** I can also open up an existing file with Vim by just providing the vim command followed by the file I want to open.
>
> **[3:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=201)** So here on my system, I'll write VI poems.txt.
>
> **[3:26](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=206)** Here in command mode, I can press shift+G to move to the bottom of the file and I can type the number one and capital G to move to the top of the file.
>
> **[3:35](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=215)** I can move backward and forward by sentence using the left and right parenthesis keys.
>
> **[3:43](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=223)** And I can move forward and backward by paragraph, using the left and right curly braces.
>
> **[3:50](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=230)** I don't really need to make any changes here, so I'll hit escape to make sure I'm in command mode.
>
> **[3:54](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=234)** And then I'll type Colon+Q!
>
> **[3:57](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=237)** to quit without saving.
>
> **[4:01](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=241)** There's a few basics to keep in mind when we're using Vim.
>
> **[4:04](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=244)** An important part is how to move between the various modes.
>
> **[4:08](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=248)** There's lowercase I, capital I, or lowercase O to get into insertion mode to add new information in various ways.
>
> **[4:15](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=255)** We'll press escape to move out of insert mode and back into command mode.
>
> **[4:19](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=259)** And there we can use the H, J, K and L keys for navigation, among some other more specialized movement commands.
>
> **[4:27](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=267)** Perhaps the most important takeaway from this quick look at Vim is to remember Escape+Colon+Q!
>
> **[4:34](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=274)** to exit without saving.
>
> **[4:36](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=276)** A lot of people who are new to the command line find themselves in Vim at some point and feel stuck there.
>
> **[4:41](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=281)** The usual quit or escape commands don't work.
>
> **[4:44](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=284)** Things like Escape, Control+C, Q and so on.
>
> **[4:47](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=287)** I've even heard of people restarting the virtual machine they're working in or closing a terminal window and reopening it, just to get out of Vim.
>
> **[4:54](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=294)** So remember, Escape+Colon+Q! to quit without saving, or Escape+Colon+WQ to save changes and quit.
>
> **[5:03](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=303)** That should be enough of Vim to let you edit text if you need to.
>
> **[5:06](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-vim?u=76281980&t=306)** And of course, I encourage you to check out our course that focuses on Vim to dig deeper into the powerful commands and features available in this editor.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2), [[Linux]] (1)
> **Tools:** vim (18), command line (4), terminal (1)
> **CLI Commands:** make (6), find (1)
> **File Paths:** new.txt (2), poems.txt (1)
> **Definitions:** is a  (2), stands for (1)
> **Env Vars:** vim (2)
> **Analogies:** it's like (1), such as (1)
> **UI Navigation:** open the (1)

#### [Edit text with nano](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-nano?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-nano?u=76281980&t=0)** - [Instructor] Some [[Linux]] distributions include a lightweight text editor called Nano.
>
> **[0:04](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-nano?u=76281980&t=4)** If it's not installed on your system, you can install it.
>
> **[0:08](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-nano?u=76281980&t=8)** It's quite a bit simpler than Vim, so some people prefer it, though it does lack some power user features that Vim enthusiasts would miss.
>
> **[0:16](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-nano?u=76281980&t=16)** Let's take a quick look at Nano.
>
> **[0:19](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-nano?u=76281980&t=19)** I'm working here in [[Ubuntu]] desktop, which comes with Nano already installed.
>
> **[0:23](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-nano?u=76281980&t=23)** In my terminal I'll type nano to launch Nano.
>
> **[0:29](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-nano?u=76281980&t=29)** Already we can see that Nano is a little bit more user friendly than Vim, especially because it provides a list of some common commands right at the bottom of the screen.
>
> **[0:37](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-nano?u=76281980&t=37)** The carrot character, that a little upward angle, represents the control key as we saw earlier.
>
> **[0:43](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-nano?u=76281980&t=43)** So some of these key combinations we see at the bottom of the screen are control G for help, control O to write out or save the file and so on.
>
> **[0:51](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-nano?u=76281980&t=51)** I'll write some text here.
>
> **[0:55](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-nano?u=76281980&t=55)** I can move around the screen, which is called the buffer with the arrow keys.
>
> **[1:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-nano?u=76281980&t=60)** The text navigation shortcuts I showed you earlier in the course work here too.
>
> **[1:04](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-nano?u=76281980&t=64)** Control A moves to the beginning of a line and control E moves to the end.
>
> **[1:08](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-nano?u=76281980&t=68)** It can cut and paste or cut and uncut lines of text with Control K and Control U.
>
> **[1:14](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-nano?u=76281980&t=74)** I'll use Control O to save the file and I'm prompted for a name.
>
> **[1:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-nano?u=76281980&t=78)** I'll call the file new2.txt and I'll press enter.
>
> **[1:24](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-nano?u=76281980&t=84)** Then I'll press control X to exit.
>
> **[1:26](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-nano?u=76281980&t=86)** If the file had changed since I last edited it, I'd be prompted to save the buffer, which is the file I'm working with.
>
> **[1:32](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-nano?u=76281980&t=92)** I can edit existing files with nano2 using the nano command followed by the file name.
>
> **[1:38](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-nano?u=76281980&t=98)** I'll type nanopoems.txt.
>
> **[1:40](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-nano?u=76281980&t=100)** Ctrl W is a useful feature to find text in the document.
>
> **[1:45](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-nano?u=76281980&t=105)** I'll press control W and look for the [[Microsoft Word|word]] bright.
>
> **[1:49](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-nano?u=76281980&t=109)** I'll press enter and I'm taken to the first match.
>
> **[1:52](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-nano?u=76281980&t=112)** If I press control W again, I can search for the same term.
>
> **[1:56](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-nano?u=76281980&t=116)** Pressing enter takes me to the next match and so on.
>
> **[1:59](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-nano?u=76281980&t=119)** There's two more commands I find helpful in Nano that aren't shown on the bar at the bottom of the screen.
>
> **[2:03](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-nano?u=76281980&t=123)** Control V moves down a screen and control Y moves up a screen.
>
> **[2:08](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-nano?u=76281980&t=128)** I don't need to make any more changes to this file, so I'll hit Control X to exit.
>
> **[2:14](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-nano?u=76281980&t=134)** Some people have strong opinions about the tools that other people use and text editors are no exception.
>
> **[2:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-nano?u=76281980&t=141)** If you prefer one or the other, that's completely fine, but it's good to know the basics of both Nano and Vim so you can use whichever tool you have available.
>
> **[2:30](https://www.linkedin.com/learning/learning-linux-command-line-26594217/edit-text-with-nano?u=76281980&t=150)** Being flexible and knowledgeable about more than one way of doing something will make you a better developer, computer user, or system administrator.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (1), [[Ubuntu]] (1), [[Microsoft Word|Word]] (1)
> **Tools:** vim (4), terminal (1)
> **CLI Commands:** find (2), make (2)
> **Definitions:** is a  (2), is called (1)
> **File Paths:** new2.txt (1), nanopoems.txt (1)
> **Cross-References:** as we saw (1), earlier in (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Working with tar and zip archives](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=0)** - [Instructor] In the early days of computer systems, and still to a very large extent today, data that needed to be archived for safekeeping was recorded to backup up tapes and stored in a closet or basement, or ideally in a more secure and suitable location.
>
> **[0:14](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=14)** In order to store files on a linear medium like a tape, files are recorded to the tape one after another in sequence like songs on an audio cassette.
>
> **[0:24](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=24)** If we don't happen to have a tape machine around, we can create files that work in the same way as these [[Data Storage]] tapes.
>
> **[0:31](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=31)** Tar files, short for tape archive files, combine many files into one large file, and this kind of archive file is incredibly common for distributing, sharing, and storing files on [[Linux]] systems.
>
> **[0:43](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=43)** This is because it's much easier in many ways to send and store one large file instead of many small files.
>
> **[0:50](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=50)** Tar files often don't involve any compression, but there are ways to incorporate compression into a tar file which we'll explore in a little while.
>
> **[0:58](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=58)** Compression tries to reduce the size of a file using some mathematical tricks.
>
> **[1:03](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=63)** If we're using compression with a tar archive, we'll often see that the file is named with an extension to indicate what kind of compression is being used.
>
> **[1:11](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=71)** For example, there's .tar.gz, or .tgz, which is a tar file with gzip compression, .tar.bz2, which is a tar file with bzip compression, and others.
>
> **[1:24](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=84)** Gzip and bzip are two different methods for compressing data, and the difference between them isn't terribly important right now.
>
> **[1:32](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=92)** First, let's take a look at how to create a regular tar archive to combine a few files into one.
>
> **[1:38](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=98)** Let's say I wanted to make an archive of my ExerciseFiles directory.
>
> **[1:41](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=101)** I'm working in that directory right now, so I'll go up a level in my file structure with cd .., just so I'm not working inside the directory I'm trying to archive.
>
> **[1:53](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=113)** And then I'll write tar -cvf myfiles.tar ExerciseFiles/.
>
> **[2:03](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=123)** The c option says to create an archive.
>
> **[2:06](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=126)** We'll use a different option later to extract from an archive.
>
> **[2:10](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=130)** The v option tells tar to be verbose.
>
> **[2:13](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=133)** That is, to list out each file that gets added to the archive.
>
> **[2:17](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=137)** This can be a useful way to create an index of the contents of a file or it can be useful just to see what's happening.
>
> **[2:23](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=143)** That's optional though if you don't need to see what's going on.
>
> **[2:26](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=146)** The f option tells the tar command that we want to output the archive to a file.
>
> **[2:31](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=151)** Without that, the data that makes up the tar file will be sent to the screen, to the standard output, unless we pipe it somewhere else, and in this case that's not what we want.
>
> **[2:42](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=162)** After the f option comes the file name that we'll create, and after that, any files or directories that we want included in the archive.
>
> **[2:50](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=170)** In this case, it's just the one directory, but we could use more than one file or directory name if we wanted to.
>
> **[2:56](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=176)** I'll press Enter and create the file.
>
> **[3:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=180)** I'll clear my screen.
>
> **[3:02](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=182)** And then I'll take a look at the contents of this directory with ls -l, and we can see the file here.
>
> **[3:08](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=188)** Let's create a compressed version too.
>
> **[3:12](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=192)** I'll press the Up Arrow a few times to recall my previous tar command, and I'll add just one option, an a, and I'll drop the option v, since we don't need to see the files go by again.
>
> **[3:25](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=205)** I'll change my output file to myfiles.tar.gz, short for gzip.
>
> **[3:31](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=211)** The a option that I've used here tells tar to figure out what kind of compression to use based on the file extension provided, in this case .gz.
>
> **[3:41](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=221)** And then like before, I'll specify the directory that I want to compress.
>
> **[3:45](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=225)** I could also tell tar to use gzip compression by using the option z instead of a.
>
> **[3:51](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=231)** I'll run this command, and that creates my compressed archive.
>
> **[3:54](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=234)** I'll do the same thing with a bzip archive.
>
> **[3:57](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=237)** I'll recall my command. I'll move over here.
>
> **[4:02](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=242)** And I'll change myfiles.tar to myfiles.tar.bz2.
>
> **[4:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=247)** Bzip can offer a little bit more compression for some files, but sometimes it takes a bit longer to run.
>
> **[4:13](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=253)** Let's take a look at the files here.
>
> **[4:14](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=254)** I'll write ls -lh, and here I can see myfile.tar, the original uncompressed one, and that's about 390 kilobytes.
>
> **[4:24](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=264)** Then I see the bzip file at 357 kilobytes, and the gzip file at 356 kilobytes, so we've got some archives.
>
> **[4:33](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=273)** Now let's unpack them. I'll create a new directory.
>
> **[4:36](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=276)** And move one of the archives into it.
>
> **[4:39](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=279)** I'll write mkdir unpack1, and then I'll move one of the files into that directory.
>
> **[4:47](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=287)** I'll write mv myfiles.tar.bz2 unpack1, and I'll move inside that directory with cd unpack1.
>
> **[4:58](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=298)** Now to extract this file, I'll write tar -xf myfiles.tar.bz2.
>
> **[5:06](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=306)** The x option means to extract a file, and the -f option allows us to provide a file name for tar to use.
>
> **[5:14](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=314)** I'll take a look at the directory here with ls -lh, and there I can see that my ExerciseFiles directory has been extracted.
>
> **[5:22](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=322)** I'll go back up a level with cd .., and I'll clear the screen.
>
> **[5:29](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=329)** If we don't know exactly what's in an archive, it can be safer to create a new directory and extract the archive there just in case there are a lot of directories and files, and we don't want them to all show up in the current working directory, which might be your home directory or downloads directory or something like that.
>
> **[5:43](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=343)** We've seen one way to control where unarchived files go, but there's another approach too.
>
> **[5:49](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=349)** I'll create another directory with a command mkdir unpack2, and then I can tell tar to unarchive into that directory.
>
> **[5:58](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=358)** I'll write tar -xf myfiles.tar.gz, this time, -C unpack2.
>
> **[6:08](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=368)** The capital C option specifies a directory to change into for unarchiving.
>
> **[6:13](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=373)** As we explore working at the command line, be it as a software developer or a system administrator or a hobbyist, we're bound to come across archive files as we explore new software.
>
> **[6:23](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=383)** Tar has a huge number of options, most of which we won't need at a beginning or even an intermediate stage, but if you want to learn more about them, be sure to check out the man page for the tar command.
>
> **[6:34](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=394)** While tar files of various types are pretty common in the Linux world, and to some extent in the Mac world too, the zip format is very widely used.
>
> **[6:43](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=403)** In large part, because it's somewhat more cross platform friendly, meaning that it works well on Linux, on [[Windows]], and on macOS, allowing us to easily exchange files between these platforms.
>
> **[6:53](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=413)** So let's take a look at how to create and extract a zip archive.
>
> **[6:58](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=418)** [[Ubuntu]] Desktop, which I'm using, has the zip and unzip tools installed, though on other Linux distributions, we might need to install them before using them.
>
> **[7:06](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=426)** We'll explore installing software later on.
>
> **[7:10](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=430)** To create a zip archive, I'll use the zip command.
>
> **[7:14](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=434)** And then I'll give it the name of an archive I'd like to create.
>
> **[7:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=438)** I'll write exfiles.zip.
>
> **[7:20](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=440)** After that, I'll provide the path for files I want to include, in this case my ExerciseFiles directory.
>
> **[7:27](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=447)** One note here, if we provide the path to a directory, zip won't work the way we might expect.
>
> **[7:33](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=453)** It'll give us a zip file containing an empty directory.
>
> **[7:36](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=456)** To zip up a directory along with its contents, we need to add the -r option here after zip.
>
> **[7:43](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=463)** As we've seen with other commands, this means recursive.
>
> **[7:47](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=467)** And when I run that, I can see how much each of the included files is reduced in size.
>
> **[7:52](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=472)** I'll run ls -lh, and here's my zip file.
>
> **[7:57](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=477)** This contains everything that was in my ExerciseFiles directory.
>
> **[8:01](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=481)** Next, let's take a look at extracting this file.
>
> **[8:04](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=484)** When I do so, it'll put the files that the archive contains in my current working directory, so I'll create another directory and then move my file over there.
>
> **[8:11](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=491)** I'll write mkdir unpack3, and then I'll move my file into that directory with mv exfiles.zip unpack3.
>
> **[8:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=501)** I'll move into that directory with cd unpack3, and then I'll write unzip exfiles.zip.
>
> **[8:30](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=510)** And taking a look at my files here with ls -lh, I can see that that ExerciseFiles directory has been extracted from the zip file.
>
> **[8:38](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=518)** We can also tell unzip to extract files to a specific directory.
>
> **[8:42](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=522)** I'll clear the screen, and then I'll create a directory in the parent directory here with mkdir ../unpack4.
>
> **[8:51](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=531)** This creates a directory at the same level as my unpack3 directory here inside the Documents directory.
>
> **[8:57](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=537)** Then I'll write unzip, my archive file, and -d, and the path to that new directory, in this case ../unpack4.
>
> **[9:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=547)** And now the files have been extracted into that directory.
>
> **[9:10](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=550)** I can double check that with ls -lh ../unpack4, and there they are.
>
> **[9:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/working-with-tar-and-zip-archives?u=76281980&t=558)** While tar files are a little bit more Linux native, it's good to be able to work with both tar files and zip files in order to be flexible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (5), [[Data Storage]] (1), [[Windows]] (1), [[Ubuntu]] (1)
> **CLI Commands:** tar (33), ls (6), cd (4), mkdir (4), unzip (4)
> **Definitions:** short for (2), is a  (2)
> **Exercise Files:** zip file (3)
> **Code Identifiers:** macos (1)
> **Documentation:** man page (1)
> **Tools:** command line (1)
> **Analogies:** for example (1)

#### [Challenge: Create and share a file](https://www.linkedin.com/learning/learning-linux-command-line-26594217/challenge-create-and-share-a-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/challenge-create-and-share-a-file?u=76281980&t=0)** - [Instructor] Let's take a moment to practice what we've learned so far about creating and working with files.
>
> **[0:05](https://www.linkedin.com/learning/learning-linux-command-line-26594217/challenge-create-and-share-a-file?u=76281980&t=5)** For this challenge, I'd like you to create a text file.
>
> **[0:08](https://www.linkedin.com/learning/learning-linux-command-line-26594217/challenge-create-and-share-a-file?u=76281980&t=8)** Make sure that any user on the system can read and write to it, and then compress it using either tar or zip, so it can be sent to someone else more easily.
>
> **[0:17](https://www.linkedin.com/learning/learning-linux-command-line-26594217/challenge-create-and-share-a-file?u=76281980&t=17)** This challenge should take you about 10 minutes.
>
> **[0:20](https://www.linkedin.com/learning/learning-linux-command-line-26594217/challenge-create-and-share-a-file?u=76281980&t=20)** When you finish, come back and I'll show you my solution to this challenge.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), tar (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Create and share a file](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-create-and-share-a-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-create-and-share-a-file?u=76281980&t=0)** - [Instructor] This challenge asked us to create a file and then to make sure that anyone who might come across it could read and write it.
>
> **[0:06](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-create-and-share-a-file?u=76281980&t=6)** And then the challenge asks us to create an archive of that file to send to others.
>
> **[0:11](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-create-and-share-a-file?u=76281980&t=11)** So we have three steps to complete, and the first is to create the file.
>
> **[0:15](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-create-and-share-a-file?u=76281980&t=15)** I'll do that using nano here, with nano notes.txt.
>
> **[0:22](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-create-and-share-a-file?u=76281980&t=22)** I'll add a few lines of text here. There we go.
>
> **[0:25](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-create-and-share-a-file?u=76281980&t=25)** What a productive meeting that was.
>
> **[0:28](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-create-and-share-a-file?u=76281980&t=28)** I'll save this with Control + O and then exit the nano editor with Control + X.
>
> **[0:34](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-create-and-share-a-file?u=76281980&t=34)** Next, we'll make sure that anyone that comes across this file can read and write it.
>
> **[0:38](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-create-and-share-a-file?u=76281980&t=38)** To do that, I'll write chmod a+rw and the name of my file.
>
> **[0:46](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-create-and-share-a-file?u=76281980&t=46)** This will add read and write permission to all of the permission fields.
>
> **[0:50](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-create-and-share-a-file?u=76281980&t=50)** Great, now let's create the archive with tar -czf, and I'll call my archive notes.tgz, and I'll provide the name of the file to compress.
>
> **[1:03](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-create-and-share-a-file?u=76281980&t=63)** Remember, c means compress, z means to use gzip compression, and f allows me to specify a file name for the archive.
>
> **[1:12](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-create-and-share-a-file?u=76281980&t=72)** And there we go. I can see my file here with ls -lh.
>
> **[1:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-create-and-share-a-file?u=76281980&t=78)** There's my original. And here's the archive.
>
> **[1:22](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-create-and-share-a-file?u=76281980&t=82)** This file is ready to share, whether that's through email or by uploading it somewhere, or by copying it onto a portable drive, or in some other way.
>
> **[1:31](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-create-and-share-a-file?u=76281980&t=91)** If you've used some different steps, like creating the file in a different way, or if you use different archive options, that's fine.
>
> **[1:37](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-create-and-share-a-file?u=76281980&t=97)** The goal is to meet each of the criteria of the challenge.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), chmod (1), tar (1), ls (1)
> **File Paths:** notes.txt (1)
> **Speakers:** - [instructor] (1)

#### [Output redirection](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=0)** - [Instructor] Working at the command line, we've mostly been using output that comes back to the screen, showing us what's been done by a program.
>
> **[0:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=7)** We've also sent output from a program into another program using pipes.
>
> **[0:11](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=11)** But before we move on, it's important to understand how to get that information into a file we can use later, or send to someone else.
>
> **[0:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=18)** In Bash and in other shells as well, there are three general pathways or streams that we use to work with text, which we can control in order to send information where we want it to go.
>
> **[0:29](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=29)** The first is the standard input, or standard in, which is text going into the shell or into a program, and that's usually, but not always, keyboard input into the shell.
>
> **[0:39](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=39)** Next is the standard output, or standard out, which is the result of running commands that comes back to our screen when commands execute correctly.
>
> **[0:47](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=47)** This is what we've been using so far when we see output on the screen, or when we send it through a pipe to another program.
>
> **[0:53](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=53)** The third stream is standard error, which is the result that comes back from commands when they don't execute correctly and return an error message to us.
>
> **[1:01](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=61)** Standard input is given the identifying number or descriptor of zero, standard output is one, and standard error is two.
>
> **[1:11](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=71)** We'll be using these descriptors to redirect information to other places.
>
> **[1:16](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=76)** Let's take a look at redirecting some output.
>
> **[1:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=78)** Here in my exercise files directory, I'll write LS to see the contents of the directory.
>
> **[1:24](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=84)** And as usual, we can see the files and directories here.
>
> **[1:28](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=88)** These are printed for me on the standard output.
>
> **[1:31](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=91)** I want to redirect that to a file, so I'll write LS one greater than sign file list dot txt.
>
> **[1:40](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=100)** Remember, the one represents a standard output from the command, in this case, the text that shows the list of files as a result of running the LS command, and the greater than symbol is what's doing the output redirection to a file, instead of to the screen.
>
> **[1:54](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=114)** Let's take a look at that file.
>
> **[1:57](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=117)** I'll write cat file list dot txt.
>
> **[2:01](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=121)** And there's the output of the list command, saved in a file instead of displayed to the screen.
>
> **[2:06](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=126)** It wasn't displayed on the screen when I ran the LS command with a redirection because instead of allowing the output to go to the standard output, we redirected that output to a file.
>
> **[2:16](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=136)** Redirecting the standard output is very common, so we can use a shorthand for it, getting rid of the one and just using the greater than symbol.
>
> **[2:24](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=144)** I'll clear my screen and then I'll write LS greater than file list two dot txt.
>
> **[2:34](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=154)** And taking a look at the file, we can see the result is the same.
>
> **[2:37](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=157)** Again, I'll clear my screen.
>
> **[2:41](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=161)** Now, I'll try to list a directory that doesn't exist.
>
> **[2:44](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=164)** I'll write LS not real, and I see an error.
>
> **[2:50](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=170)** Here on the terminal, it looks the same as the output from when the command works, but it's actually printed to the standard error and not to the standard output.
>
> **[2:58](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=178)** I can verify this by trying to redirect the standard output.
>
> **[3:02](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=182)** Again, I'll write LS not real, redirected to file list three dot txt.
>
> **[3:09](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=189)** Remember that the greater than sign by itself redirects the standard output, and that the standard error has the descriptor of two.
>
> **[3:16](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=196)** So when I run this command, I still see the error.
>
> **[3:19](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=199)** So let's redirect the error to a file.
>
> **[3:22](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=202)** Again, I'll write LS not real two greater than file list four dot txt.
>
> **[3:30](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=210)** And now let's take a look at the contents of that file.
>
> **[3:33](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=213)** I'll write cat file list four dot txt, and there's our message.
>
> **[3:38](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=218)** We can also use more than one redirection.
>
> **[3:42](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=222)** For example, we might choose to redirect the standard output to a list of successfully copied files and the standard error to a list of files that failed to copy if we're doing a copy operation, or we might want to redirect both one and two to a file so we can capture both streams in the same file.
>
> **[4:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=240)** I want to mention that the redirection operator can be a little bit dangerous.
>
> **[4:03](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=243)** If I just type greater than file list four dot txt, or redirect file list four dot txt, I don't get anything back here.
>
> **[4:13](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=253)** But once I check out the file, I'll find that it's empty.
>
> **[4:17](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=257)** We've redirected an empty string into that file and overwritten what was in the file before.
>
> **[4:22](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=262)** The single greater than sign truncates or empties out the file that it's redirecting to before writing data there.
>
> **[4:28](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=268)** We can use two greater than signs to append or stick the data onto the end of the existing file.
>
> **[4:34](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=274)** Let's add some content to a new file using redirection.
>
> **[4:37](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=277)** I'll write LS greater than file list five dot txt, and then let's use the double greater than operator to append some text to the end of that file.
>
> **[4:48](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=288)** I'll write echo, some appended text, double greater than sign, file list five dot txt.
>
> **[4:57](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=297)** And now let's take a look at that new file.
>
> **[4:59](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=299)** I'll write cat file list five dot txt, and there's our list of files and the text that I appended to the end.
>
> **[5:10](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=310)** There's more that we can do with redirection, like redirecting a file into standard input, using the less than sign to send information to a command.
>
> **[5:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=318)** But this will get us started here at the command line and help us to understand what's going on when we see the greater than symbol in a command.
>
> **[5:25](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=325)** Like pipes, redirection is commonly used in command line scenarios.
>
> **[5:28](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=328)** And while it's not something we'll use with every command, it does come up now and then.
>
> **[5:33](https://www.linkedin.com/learning/learning-linux-command-line-26594217/output-redirection?u=76281980&t=333)** You can learn more about redirection in Learning Bash Scripting, here on [[LinkedIn]] Learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **CLI Commands:** ls (9), cat (3), find (1)
> **Tools:** command line (3), bash (2), terminal (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Exploring environment variables and PATH](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=0)** - [Instructor] The shell environment that we're using has a few variables or parameters which control information and options that affect how the shell operates.
>
> **[0:08](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=8)** We can take a look at these variables with the env command, short for environment.
>
> **[0:14](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=14)** There's a lot going on here, and right now we're only concerned with one of these variables, and that's the variable called PATH.
>
> **[0:22](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=22)** Environment variables are a little bit beyond the scope of this course, but the PATH variable is one that causes problems for people sometimes, and it's important to know about.
>
> **[0:31](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=31)** We can focus on this line in particular using the echo command like this.
>
> **[0:35](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=35)** I'll echo $PATH.
>
> **[0:38](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=38)** In bash and in other shells, PATH is a list of paths or directories in the file system where the shell is told to look for programs or executable files outside of the current working directory.
>
> **[0:50](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=50)** Think about using the ls command for a moment.
>
> **[0:53](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=53)** The ls command isn't located in our home directory when we're working there, but the command works anyway.
>
> **[0:58](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=58)** Why is that?
>
> **[1:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=60)** The system is able to make assumptions about where to find programs.
>
> **[1:03](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=63)** Otherwise we'd need to write out the explicit PATH to each program we want to use, and that would be pretty annoying.
>
> **[1:10](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=70)** We can find out where our command is really located using the which command followed by the command name.
>
> **[1:16](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=76)** I'll clear my screen here and then I'll run which ls.
>
> **[1:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=81)** And I can see that the ls command is located in the usr/bin directory.
>
> **[1:27](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=87)** Let's try another one.
>
> **[1:28](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=88)** I'll write which less.
>
> **[1:31](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=91)** And I can see that's also located in the same directory.
>
> **[1:34](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=94)** Most of the commands we've seen in this course are located in this directory.
>
> **[1:38](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=98)** Though, if you install others, you may find them in other places.
>
> **[1:44](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=104)** Looking back at the PATH environment variable here, I can see that this directory where those tools are located is listed in the PATH.
>
> **[1:51](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=111)** So the shell looks in that directory and the others when we type a command.
>
> **[1:55](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=115)** And there it finds each of these commands when we need to use them.
>
> **[2:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=120)** Sometimes when we install new software, we might want to add the PATH to that software to the PATH for our environment to make it easier to use the software.
>
> **[2:09](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=129)** Installing software with a package manager, as we'll see later, generally adds software to places that are already in the path, so we don't have to do anything to get those working.
>
> **[2:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=138)** But if we compile a tool from source or download a program and put it somewhere that isn't in the path variable, adding that specific path to your path variable will let us use it more easily.
>
> **[2:28](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=148)** To add something to the path variable, we can edit our shell profile, which is a hidden file in our home directory.
>
> **[2:34](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=154)** In bash, the place we make changes to the shell profile for our own user is the .bash_profile file.
>
> **[2:41](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=161)** Files whose names begin with a period character are usually hidden from view when listing a directory.
>
> **[2:47](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=167)** But they're the same as other files except for that.
>
> **[2:50](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=170)** Depending on your setup, your .bash_profile file may already exist or it may not.
>
> **[2:57](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=177)** I'll write ls -lah here, and this includes the -a option, which allows me to see the hidden files.
>
> **[3:05](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=185)** Or more precisely, it shows me all the files in this directory, not just the ones that are usually visible.
>
> **[3:11](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=191)** I'll scroll up here.
>
> **[3:12](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=192)** It looks like I don't have a bash profile yet.
>
> **[3:14](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=194)** So I'll create a new file and make my changes.
>
> **[3:17](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=197)** I'll write nano ~/.bash_profile.
>
> **[3:24](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=204)** If you don't have a bash_profile file, this will create one for you.
>
> **[3:28](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=208)** And if you do it'll open the existing one.
>
> **[3:31](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=211)** Here I'll add a new line that says PATH="$PATH," which means to set the path to whatever the PATH already is.
>
> **[3:40](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=220)** That by itself doesn't change anything, but it does allow us to use the existing PATH environment variable, which is set at the system level, without replacing it or having to replicate it.
>
> **[3:50](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=230)** To add more directories custom to my user account, I'd add them inside the quotes here after the existing PATH variable, separated by colons.
>
> **[4:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=240)** Then I'd save the file and close and reopen my shell.
>
> **[4:03](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=243)** I won't make a change to this for now though, because I don't have any custom paths to actually add.
>
> **[4:08](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=248)** I'll close my editor and choose to not save this modified buffer.
>
> **[4:13](https://www.linkedin.com/learning/learning-linux-command-line-26594217/exploring-environment-variables-and-path?u=76281980&t=253)** To learn more about bash scripting, be sure to take a look at my course Learning Bash Scripting here on [[LinkedIn]] Learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **Env Vars:** path (14)
> **CLI Commands:** ls (5), make (5), find (3)
> **Tools:** bash (5)
> **Code Identifiers:** bash_profile (4)
> **Definitions:** is a  (2), short for (1)
> **Prerequisites:** install (2), setup (1)
> **UI Navigation:** scroll up (1), open the (1)

#### [Challenge: Extract information from a text file](https://www.linkedin.com/learning/learning-linux-command-line-26594217/challenge-extract-information-from-a-text-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/challenge-extract-information-from-a-text-file?u=76281980&t=0)** - [Narrator] One of the common ways attackers try to break into computers is by attempting to log in remotely with a list of common usernames, or the names commonly used by popular services.
>
> **[0:11](https://www.linkedin.com/learning/learning-linux-command-line-26594217/challenge-extract-information-from-a-text-file?u=76281980&t=11)** The service that monitors logins writes information about connection attempts to a system log file.
>
> **[0:16](https://www.linkedin.com/learning/learning-linux-command-line-26594217/challenge-extract-information-from-a-text-file?u=76281980&t=16)** So while this kind of activity is going on, we have a record of these attempts.
>
> **[0:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/challenge-extract-information-from-a-text-file?u=76281980&t=21)** In the exercise files, there's an archive called log.tar.gz, and it contains a slightly modified [[Linux]] system log file with a lot of connection attempts.
>
> **[0:31](https://www.linkedin.com/learning/learning-linux-command-line-26594217/challenge-extract-information-from-a-text-file?u=76281980&t=31)** Your task is to extract the file, so you can work with it as text and to look for lines containing the string disconnected from invalid user.
>
> **[0:40](https://www.linkedin.com/learning/learning-linux-command-line-26594217/challenge-extract-information-from-a-text-file?u=76281980&t=40)** From this, extract the username that was used in each attempt, output the results into a text file with the usernames in alphabetical order, and with duplicates removed.
>
> **[0:50](https://www.linkedin.com/learning/learning-linux-command-line-26594217/challenge-extract-information-from-a-text-file?u=76281980&t=50)** Remember to use the tools you've learned about to browse through text, to rearrange text programmatically, and to make use of piping and output redirection.
>
> **[0:59](https://www.linkedin.com/learning/learning-linux-command-line-26594217/challenge-extract-information-from-a-text-file?u=76281980&t=59)** This should take you about 15 minutes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (1)
> **CLI Commands:** tar (1), make (1)
> **Exercise Files:** exercise files (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [narrator] (1)

#### [Solution: Extract information from a text file](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=0)** - [Instructor] Here's how I solved this challenge.
>
> **[0:02](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=2)** The file we were provided is an archive, so the first step that I took was to write tar -x for extract V for verbose, and F to provide a file name and the name of our archive.
>
> **[0:16](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=16)** And this creates a file called auth.log.
>
> **[0:20](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=20)** As I'm sure you found out, this file is tens of thousands of lines long, so we need to get a sense of what we're looking for.
>
> **[0:27](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=27)** To do that, I can write less auth.log and take a look at the full text and I can scroll around to look for the string that the challenge asked for.
>
> **[0:36](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=36)** If I don't see it immediately, I can search with a slash key and the string that the challenge asked for, in this case, disconnected from invalid user.
>
> **[0:46](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=46)** And there's a couple instances of it.
>
> **[0:49](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=49)** As I look at these lines, I can see that right after that string is a username.
>
> **[0:52](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=52)** In this case David, and in this case PDP11.
>
> **[0:57](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=57)** This occurs at the same location in each of these lines.
>
> **[1:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=60)** To isolate a specific field from a line of text, I can use awk.
>
> **[1:04](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=64)** And as we saw before, we can tell it to extract a specific column of data.
>
> **[1:09](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=69)** So let's figure out which number column we need to ask for.
>
> **[1:12](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=72)** A default delimiter that awk uses is a space, so let's use that here.
>
> **[1:17](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=77)** Here's my first space.
>
> **[1:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=78)** So this item here, the date and time is going to be column one.
>
> **[1:23](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=83)** The next column here, the host name will be two.
>
> **[1:27](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=87)** This would be three.
>
> **[1:28](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=88)** The [[Microsoft Word|word]] disconnected would be four, five, six, seven and here the username is in the eighth column.
>
> **[1:36](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=96)** Okay, now I have enough information to write my program.
>
> **[1:42](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=102)** I'll clear my screen and let's start writing out our command.
>
> **[1:45](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=105)** I need to get my text into a pipeline for processing.
>
> **[1:48](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=108)** I could use cat to pipe my file into my command pipeline, but that's a bit wasteful.
>
> **[1:53](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=113)** So I'll start with grep and match only the lines that include the text the challenge asked for.
>
> **[2:01](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=121)** That's disconnected from invalid user.
>
> **[2:04](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=124)** Then I'll write a space and provide the file name auth.log.
>
> **[2:09](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=129)** If I run this by itself, I can see that I'm only getting the lines that match what the challenge asked for.
>
> **[2:16](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=136)** I'll clear the screen and recall my previous command.
>
> **[2:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=138)** Instead of outputting this to the screen, I'll use a pipe character to pipe it into another command.
>
> **[2:24](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=144)** That's going to be my awk program.
>
> **[2:26](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=146)** So I'll write awk '{print $8 for column which we counted before.
>
> **[2:36](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=156)** I'll write a closing curly brace and a closing single quote.
>
> **[2:40](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=160)** I'll run this and here I can see that we're extracting the usernames.
>
> **[2:43](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=163)** Great.
>
> **[2:44](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=164)** We're making progress.
>
> **[2:45](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=165)** The challenge asked for these usernames to be output in alphabetical order and with the duplicates removed.
>
> **[2:51](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=171)** So to do that, I'll recall my command again and pipe the result that I already have into sort -u for unique.
>
> **[3:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=180)** The challenge also asked us to output the information into a file, so I'll redirect the output of this pipeline into invalid_users.txt.
>
> **[3:12](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=192)** And now let's take a look at our result.
>
> **[3:15](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=195)** Alright, less invalid_users.txt, and here we go.
>
> **[3:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=201)** I can see I have a de-duplicated list sorted alphabetically of all of the usernames that our attacker tried to use to log into the server.
>
> **[3:28](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=208)** If you didn't come up with the exact command pipeline that I did, that's fine.
>
> **[3:32](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=212)** The goal is to get the output we were asked for, not to get the exact same sequence of commands that I used.
>
> **[3:38](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=218)** There's often more than one way to reach the same result when we're working with these tools.
>
> **[3:42](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=222)** If you're able to, take some time and explore the auth.log file in other ways, it has a lot of different information in it, including dates, IP addresses, and so on.
>
> **[3:52](https://www.linkedin.com/learning/learning-linux-command-line-26594217/solution-extract-information-from-a-text-file?u=76281980&t=232)** Learning how to combine command line tools to achieve a goal is something worth practicing, and it'll help your understanding of how to work at the command line.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **CLI Commands:** awk (4), tar (1), cat (1), grep (1)
> **Definitions:** is a  (2), is an  (1)
> **File Paths:** invalid_users.txt (2)
> **Code Identifiers:** invalid_users (2)
> **Tools:** command line (2)
> **Env Vars:** pdp11 (1)
> **Cross-References:** as we saw (1)


### 5. A Peek at Some More Advanced Topics

[↑ Back to Table of Contents](#table-of-contents)

#### [Find information about your Linux distribution](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-information-about-your-linux-distribution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-information-about-your-linux-distribution?u=76281980&t=0)** - [Instructor] Up until now, almost everything we've done has been distribution independent.
>
> **[0:04](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-information-about-your-linux-distribution?u=76281980&t=4)** That is, it hasn't mattered if we're running [[Ubuntu]], Fedora, Arch or another distribution of [[Linux]], but it's good to know what environment we're working with in case we need to make some changes to the system or install software or if we need that information in order to ask for help.
>
> **[0:20](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-information-about-your-linux-distribution?u=76281980&t=20)** If we find ourselves in an environment we don't know about, such as a system set up for us by someone else, the first thing we need to do is understand which Linux distribution we're using.
>
> **[0:31](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-information-about-your-linux-distribution?u=76281980&t=31)** One place this information can be found is inside files in the etc directory.
>
> **[0:36](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-information-about-your-linux-distribution?u=76281980&t=36)** What these files are called specifically can vary based on which Linux distribution you're using, but we can use some of what we've already learned to take a look at what's inside these files.
>
> **[0:46](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-information-about-your-linux-distribution?u=76281980&t=46)** First, let's see what these files are.
>
> **[0:48](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-information-about-your-linux-distribution?u=76281980&t=48)** I'll write ls -l/etc/*release and in my case, I have two files here.
>
> **[0:59](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-information-about-your-linux-distribution?u=76281980&t=59)** They're called LSB Release and OS release.
>
> **[1:02](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-information-about-your-linux-distribution?u=76281980&t=62)** That one's a link to another file in USR Lib.
>
> **[1:05](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-information-about-your-linux-distribution?u=76281980&t=65)** LSB stands for Linux Standard Base.
>
> **[1:09](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-information-about-your-linux-distribution?u=76281980&t=69)** Let's take a look at what's inside of these files.
>
> **[1:12](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-information-about-your-linux-distribution?u=76281980&t=72)** To do that, I'll write cat /etc*release which will show us the contents of all of the files in the etc directory that end with the [[Microsoft Word|word]] release.
>
> **[1:24](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-information-about-your-linux-distribution?u=76281980&t=84)** On different distributions there may be different numbers and names of files that match that wild card, but they'll contain the information we need.
>
> **[1:33](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-information-about-your-linux-distribution?u=76281980&t=93)** Here I can see that I'm using Ubuntu 24.04.2 LTS or long-term support, and the code name of this release is Noble Numbat.
>
> **[1:46](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-information-about-your-linux-distribution?u=76281980&t=106)** I'll clear my screen.
>
> **[1:48](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-information-about-your-linux-distribution?u=76281980&t=108)** Another important piece of information to know about a system is what version of the Linux kernel we're using.
>
> **[1:54](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-information-about-your-linux-distribution?u=76281980&t=114)** This can determine what features are available to us.
>
> **[1:58](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-information-about-your-linux-distribution?u=76281980&t=118)** We can find that information with uname command, and I'll use the -a option to show all information.
>
> **[2:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-information-about-your-linux-distribution?u=76281980&t=127)** This shows us the type of the system, which in this case is Linux and the host name of the system, which in my case is Linux-pc.
>
> **[2:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-information-about-your-linux-distribution?u=76281980&t=138)** Then I can see what version of the kernel I'm using.
>
> **[2:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-information-about-your-linux-distribution?u=76281980&t=141)** In my case here, I'm using 6.8.0.
>
> **[2:25](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-information-about-your-linux-distribution?u=76281980&t=145)** There's some other information here, and I can also see what architecture this system is using.
>
> **[2:30](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-information-about-your-linux-distribution?u=76281980&t=150)** In my case, it's x86 64, and that's what we'll have if we're using a modern Intel or AMD processor.
>
> **[2:37](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-information-about-your-linux-distribution?u=76281980&t=157)** All of this information can be helpful if you're troubleshooting something and need to ask for help, and it can inform whether certain software runs and what tools you have available.
>
> **[2:47](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-information-about-your-linux-distribution?u=76281980&t=167)** On other systems we'd see slightly different information here.
>
> **[2:51](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-information-about-your-linux-distribution?u=76281980&t=171)** Here, for example, is the output of the commands that we've seen on a Fedora workstation.
>
> **[2:56](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-information-about-your-linux-distribution?u=76281980&t=176)** Here's the output on a system running openSUSE and here's the output of those commands on an Ubuntu system running in [[Windows]] subsystem for Linux, and this output is from a Linux virtual machine running on an Apple Silicon Mac.
>
> **[3:12](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-information-about-your-linux-distribution?u=76281980&t=192)** Notice that this device has a different architecture.
>
> **[3:14](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-information-about-your-linux-distribution?u=76281980&t=194)** It's aarch64, where the other ones were AMD x64.
>
> **[3:19](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-information-about-your-linux-distribution?u=76281980&t=199)** [[System Architecture]] is not something we need to be too concerned about when we're getting started, but it's good to know about.
>
> **[3:26](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-information-about-your-linux-distribution?u=76281980&t=206)** Again, if we've set up a system ourselves, the chances that we know what kind of distribution and [[Hardware]] it's running are pretty high, but if for some reason we don't now we've seen how to figure it out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (9), [[Ubuntu]] (3), [[Microsoft Word|Word]] (1), [[Windows]] (1), [[System Architecture]] (1)
> **Env Vars:** lsb (2), amd (2), usr (1), lts (1)
> **CLI Commands:** find (2), make (1), ls (1), cat (1)
> **Prerequisites:** set up (2), install (1), getting started (1)
> **Versions:** 24.04.2 (1), 6.8.0 (1)
> **Analogies:** such as (1), for example (1)
> **Code Identifiers:** opensuse (1)
> **Definitions:** stands for (1)

#### [Find system hardware and disk information](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=0)** - [Instructor] Let's take a look at finding out some information about the [[Hardware]] and system resources in the system we're working with.
>
> **[0:06](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=6)** If we're using a physical computer or a virtual machine we set up ourselves, we'll know some information about it, like how much memory it has, what kind of process or resources it has, and how much hard drive space there is.
>
> **[0:17](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=17)** But if we're working on a remote system or a system someone else set up for us, it can be helpful to get a sense of what the available resources are and what hardware the system has.
>
> **[0:27](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=27)** [[Linux]] offers many ways to find out all kinds of details about the hardware that makes up a computer.
>
> **[0:32](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=32)** But let's just take a high-level look at some common resources that might be relevant to us if we're using a Linux system.
>
> **[0:40](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=40)** First, let's find out how much memory this machine has.
>
> **[0:43](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=43)** To do that, I can use the free command with the -h option, which gives us output in human-readable numbers.
>
> **[0:51](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=51)** I'll [[Zoom]] out a little bit here.
>
> **[0:52](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=52)** And here, under total, I can see that I have over 30 gigabytes of RAM on this machine.
>
> **[0:57](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=57)** Next, let's take a look at what our processor resources are.
>
> **[1:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=60)** To do that, I can run lscpu.
>
> **[1:05](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=65)** I'll scroll up here.
>
> **[1:07](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=67)** And here, I can see that I have an Intel Core i9 processor.
>
> **[1:13](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=73)** We can also find that information in the CPU info file inside the proc directory.
>
> **[1:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=78)** To see that, I'll write cat /proc/cpuinfo.
>
> **[1:23](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=83)** This is the same information presented in a different way.
>
> **[1:27](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=87)** I'll clear my screen.
>
> **[1:29](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=89)** Let's find out how much space is taken up and how much is available on the system's hard drive.
>
> **[1:34](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=94)** For that, I'll use the df command with the -h option.
>
> **[1:39](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=99)** Again, in this case, this shows the human-readable sizes, like megabytes and gigabytes, instead of just bytes.
>
> **[1:45](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=105)** This command shows how much space is used across a few different volumes.
>
> **[1:48](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=108)** And the most interesting one to me right now is / or root because that's where my system files are.
>
> **[1:55](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=115)** And also, in this case, where my user data is stored.
>
> **[1:58](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=118)** So that's where I'm likely to be taking up space if I install software or download files.
>
> **[2:02](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=122)** The [[Representational State Transfer (REST)|rest]] of these are managed by the system, so I'm not too worried about those.
>
> **[2:06](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=126)** If you just want to focus on one file system, you can write df, and again, in this case, -h, and then the path to the file system that you're interested in.
>
> **[2:14](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=134)** I'll just write /.
>
> **[2:16](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=136)** And here, I see the results for just that one file system.
>
> **[2:19](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=139)** Here, I can see that my disk is about 74 gigabytes.
>
> **[2:22](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=142)** Of that, I've used about 20 gigabytes, and about 52 gigabytes are available.
>
> **[2:27](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=147)** On other systems, you might have a separate entry for your home directory, which might have a different amount of free space.
>
> **[2:33](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=153)** We can also use the du command to see how much space files and directories take up on our system.
>
> **[2:38](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=158)** Let's take a look at how much space is taken up in directories across the whole system.
>
> **[2:42](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=162)** I'll write sudo du -hd1, and again, / for the root.
>
> **[2:48](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=168)** I have to use sudo because my user can't see into all of the folders at the root of the file system.
>
> **[2:53](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=173)** I'm using the du command to see disk usage, and the -h option gives me sizes in human-readable formats.
>
> **[3:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=180)** The d option tells du what level of depth to show.
>
> **[3:03](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=183)** In this case, I'm giving d the argument of 1, meaning just show me one level deep, the first level up from the root.
>
> **[3:10](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=190)** Du will add up everything within each of those directories.
>
> **[3:14](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=194)** Without specifying the depth, I'll get one line for every file and directory that the tool finds.
>
> **[3:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=198)** And if I'm looking at the root of the file system, that's not very useful.
>
> **[3:22](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=202)** There's just too many items to really be able to read the output.
>
> **[3:25](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=205)** So in this case, a top-level summary is more helpful.
>
> **[3:29](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=209)** I'll run this and it'll take a moment.
>
> **[3:32](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=212)** Then I see the output.
>
> **[3:34](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=214)** Here, for example, I can see that my var directory takes up 2.1 gigabytes, usr takes up 13 gigabytes, and so on.
>
> **[3:45](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=225)** We can also explore what hardware the system has with the lshw command to list hardware.
>
> **[3:51](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=231)** This provides a large amount of information, so it's helpful to pipe it into something like less or into a file to browse it more easily.
>
> **[4:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=240)** If we pipe our output into less, we can use F and B to move through the information.
>
> **[4:05](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=245)** I'll press Q.
>
> **[4:08](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=248)** We can also use commands like lspci and lsusb to look at what devices are attached to the PCI and USB bus, if those commands are installed on our system.
>
> **[4:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=258)** If your system doesn't have these commands, you can install them with a package manager.
>
> **[4:23](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=263)** We may also need to find out our system's network address.
>
> **[4:26](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=266)** To do that, we can use the ip command with the a argument.
>
> **[4:31](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=271)** This will tell us address information for each of our network adapters.
>
> **[4:34](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=274)** On this system, my primary adapter is called ens18.
>
> **[4:38](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=278)** And I can see that its address on my network is 192.168.1.8.
>
> **[4:45](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=285)** I'll clear my screen.
>
> **[4:47](https://www.linkedin.com/learning/learning-linux-command-line-26594217/find-system-hardware-and-disk-information?u=76281980&t=287)** We don't always need to know all of these details about our system, but in case we do need this information, now we know how to get it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (5), [[Linux]] (2), [[Zoom]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** find (5), sudo (2), cat (1)
> **Env Vars:** ram (1), cpu (1), pci (1), usb (1)
> **Prerequisites:** set up (2), install (2)
> **Versions:** 2.1 (1), 192.168.1 (1)
> **UI Navigation:** scroll up (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)

#### [Install and update software with a package manager](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=0)** - [Instructor] An important aspect of working with a [[Linux]] system is the ability to install and remove software.
>
> **[0:06](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=6)** We need to be able to manage software in order to add new tools and programs to a system.
>
> **[0:12](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=12)** One of the most common ways to add software to a Linux system is to use a package manager because many common programs and tools are distributed through software packages.
>
> **[0:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=21)** Depending on the Linux distribution we're using, the package manager we'll use can vary.
>
> **[0:27](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=27)** Each distribution has its own repository of packages, a large index of available software that we can download, in which the package manager will then install for us.
>
> **[0:38](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=38)** Debian and distros like [[Ubuntu]] that are derived from it, use the APT package manager.
>
> **[0:44](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=44)** APT stands for Advanced Package Tool.
>
> **[0:47](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=47)** Red Hat and Fedora use the DNF package manager.
>
> **[0:50](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=50)** SUSE uses YaST, and Arch uses pacman.
>
> **[0:54](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=54)** Generally speaking, the tools all work in a similar way.
>
> **[0:58](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=58)** We provide the name of the [[Package Management]] tool and then we can use a command or argument to search for a particular package, to get more information about a package or to install or remove the package.
>
> **[1:09](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=69)** Package management tools also allow us to look for updates to existing packages and install them.
>
> **[1:14](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=74)** These package management tools also allow us to install software from individual package files that we might have.
>
> **[1:20](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=80)** Let's take a look at using the APT software to install a package and to update the software installed on my Ubuntu machine.
>
> **[1:27](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=87)** There's a tool that I like called tree, which shows a directory structure in an easy-to-read tree-like display.
>
> **[1:34](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=94)** But let's say I didn't know the exact name of the tool.
>
> **[1:37](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=97)** To search with APT, I can write apt search tree and find all of the packages whose name or description match the term.
>
> **[1:47](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=107)** I'll scroll up here and there's the package that I'm looking for.
>
> **[1:51](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=111)** It's name is tree and I can see its version, its architecture, and a brief description of what this package does.
>
> **[1:58](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=118)** I can find out more about it with apt show and the name of the package, in this case, tree.
>
> **[2:05](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=125)** Here, I see more information about its maintainer, where I can report bugs, how large it will be when it's installed, what it depends on, and so on.
>
> **[2:14](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=134)** I'll clear my screen.
>
> **[2:15](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=135)** Let's run the package command name and I'll see that, yep, the software is not installed.
>
> **[2:20](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=140)** To install it, I'll write sudo apt install tree.
>
> **[2:27](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=147)** I'll provide my password and then the package manager will download the package and install it.
>
> **[2:32](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=152)** Because we're working with system level changes, we need to use the super user privileges to install the software.
>
> **[2:37](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=157)** When the process is done, I'll run my command again, I'll type tree, and then here for my home directory, I'll provide the path to my Exercise Files.
>
> **[2:48](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=168)** In this case, that's Documents/ExerciseFiles.
>
> **[2:53](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=173)** And when I run the command, I can see that the files are presented in a convenient tree-like display.
>
> **[3:01](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=181)** When software is installed from the repository, that's the index of software that the package manager is able to draw from, which is usually defined by the distribution, it'll often come with additional information like manual pages.
>
> **[3:13](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=193)** So after installing tree here, I could also write man tree and see the manual pages for my brand new tree software.
>
> **[3:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=201)** This information wasn't here before.
>
> **[3:24](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=204)** We can also use the package manager to keep the packages on the system up to date.
>
> **[3:29](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=209)** In order to do that with APT, it's a two-step process.
>
> **[3:33](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=213)** Some other package managers accomplish this in just one step.
>
> **[3:36](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=216)** Be sure to check out the man pages for the package manager that you're using if it's different than APT.
>
> **[3:41](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=221)** To get the latest list of available software, I'll run sudo apt update.
>
> **[3:46](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=226)** That takes a little while and it refreshes the list of available packages from the repository mirrors.
>
> **[3:53](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=233)** When it's done, APT knows what needs to be changed, and I can run sudo apt upgrade to get those new packages installed.
>
> **[4:03](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=243)** I'll run that and it'll take a few minutes here.
>
> **[4:05](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=245)** I'll press y to confirm the changes.
>
> **[4:08](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=248)** Once that's done, I have the latest versions of the software packages that were installed on my system.
>
> **[4:15](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=255)** It's good to update our software every once in a while to make sure we're getting security patches and bug fixes.
>
> **[4:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=261)** For important systems, we can configure the package manager to automatically install critical security updates, but we won't get into that here.
>
> **[4:29](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=269)** If you're using a system that isn't Linux, you may have other tools available to you that let you install and manage software from the command line.
>
> **[4:36](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=276)** For example, on a Mac, you could install the Homebrew package manager or a MacPorts.
>
> **[4:41](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=281)** As you continue learning about working with the command line, you'll probably need to install some software packages to do a particular job or work with some kind of information.
>
> **[4:50](https://www.linkedin.com/learning/learning-linux-command-line-26594217/install-and-update-software-with-a-package-manager?u=76281980&t=290)** If you're interested in learning more about [[System Administration]] on Linux, be sure to take a look at our courses here on [[LinkedIn]] Learning that cover those skills.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (5), [[Package Management]] (3), [[Ubuntu]] (2), [[System Administration]] (1), [[LinkedIn]] (1)
> **CLI Commands:** apt (12), sudo (3), find (2), dnf (1), make (1)
> **Prerequisites:** install (14), configure (1)
> **Env Vars:** apt (7), dnf (1), suse (1)
> **Tools:** command line (2)
> **Exercise Files:** download the (1), exercise files (1)
> **UI Navigation:** scroll up (1)
> **Definitions:** stands for (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/learning-linux-command-line-26594217/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/next-steps?u=76281980&t=0)** - [Scott] I hope you've enjoyed this basic introduction to working with the [[Linux]] command line.
>
> **[0:04](https://www.linkedin.com/learning/learning-linux-command-line-26594217/next-steps?u=76281980&t=4)** In every topic that we've explored, there's a lot more depth and detail that you can get into if you need to, but this course should get you started.
>
> **[0:12](https://www.linkedin.com/learning/learning-linux-command-line-26594217/next-steps?u=76281980&t=12)** Now, you should be prepared to jump into other Linux courses and you should feel comfortable working with a terminal.
>
> **[0:18](https://www.linkedin.com/learning/learning-linux-command-line-26594217/next-steps?u=76281980&t=18)** There are all kinds of directions you could go from here.
>
> **[0:21](https://www.linkedin.com/learning/learning-linux-command-line-26594217/next-steps?u=76281980&t=21)** If you want to explore more about Linux, take a look at "Introduction to Linux" and "Choosing a Linux Distribution."
>
> **[0:27](https://www.linkedin.com/learning/learning-linux-command-line-26594217/next-steps?u=76281980&t=27)** If you'd like to learn more about the Bash shell, take a look at "Learning Bash Scripting."
>
> **[0:31](https://www.linkedin.com/learning/learning-linux-command-line-26594217/next-steps?u=76281980&t=31)** If you want to learn more about becoming a Linux system administrator, be sure to look for our learning paths and courses focusing on both [[Ubuntu]] and Red Hat administration.
>
> **[0:40](https://www.linkedin.com/learning/learning-linux-command-line-26594217/next-steps?u=76281980&t=40)** Be sure to check out the course notes for a list of courses that I recommend you explore.
>
> **[0:45](https://www.linkedin.com/learning/learning-linux-command-line-26594217/next-steps?u=76281980&t=45)** You can spend time learning about multitasking at the command line or configuring networking, web services, file sharing and more.
>
> **[0:52](https://www.linkedin.com/learning/learning-linux-command-line-26594217/next-steps?u=76281980&t=52)** And if you want to explore tips about different aspects of Linux, be sure to check out my series of videos here on [[LinkedIn]] Learning called "Linux Tips."
>
> **[1:00](https://www.linkedin.com/learning/learning-linux-command-line-26594217/next-steps?u=76281980&t=60)** Keep exploring the command line using apropos and the man pages to find new commands and give yourself some tasks to accomplish.
>
> **[1:06](https://www.linkedin.com/learning/learning-linux-command-line-26594217/next-steps?u=76281980&t=66)** If you need to search online to find out how to do something, that's completely fine.
>
> **[1:11](https://www.linkedin.com/learning/learning-linux-command-line-26594217/next-steps?u=76281980&t=71)** Knowing what information you're looking for and knowing how to apply a hint you found are very important skills for someone who's a flexible command line user.
>
> **[1:19](https://www.linkedin.com/learning/learning-linux-command-line-26594217/next-steps?u=76281980&t=79)** Happy learning. See you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (8), [[Ubuntu]] (1), [[LinkedIn]] (1)
> **Tools:** command line (4), bash (2), terminal (1)
> **CLI Commands:** find (2)
> **Speakers:** - [scott] (1)


## Instructor

- [[Scott Simpson]]

## Resources

- Exercise files available

## Skills Covered

- Linux System Administration
- CLI

## Path Context

### In [[The Top Skills IT Professionals Have Right Now]]
← [[Microsoft 365 for Administrators- Supporting Users]] | **10 of 10**

## Appears In

- [[The Top Skills IT Professionals Have Right Now]]

## Related Courses

_Courses sharing skills:_

- [[Learning Linux Command Line]] — Linux System Administration, CLI
- [[LPIC-1 Exam 102 (Version 5.0) Cert Prep]] — Linux System Administration
- [[Lpic 1 Exam 101 Version 5 0 Cert Prep]] — Linux System Administration
- [[Red Hat Certified System Administrator (EX200) Cert Prep- 2 File Access, Storage, and Security]] — Linux System Administration
- [[Ubuntu Linux- User and Group Management]] — Linux System Administration

---

[↑ Back to top](#)