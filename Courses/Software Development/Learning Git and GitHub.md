---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: learning-git-and-github-23011330
url: "https://www.linkedin.com/learning/learning-git-and-github-23011330"
duration_minutes: 230
duration: 3h 50m
level: Beginner
updated: 4/24/2025
learners: 19165
skills:
  - Git
  - GitHub
exercise_files: true
github: "https://github.com/linkedinlearning/learning-git-github-2421501"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQG-PWt9Z7vqCA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1697832655105?e=2147483647&amp;v=beta&amp;t=y4RW4ep4W-ugmPxb52IiKv9s4k8DiOHmlj9DwjG6WmM"
linkedin_topic: Software Development
learning_paths:
  - '[[Succeed as a Remote Software Developer]]'
  - '[[Prepare for the GitHub Foundations Certification]]'
  - '[[Software Development Fundamentals]]'
  - '[[Getting Started with WordPress]]'
prev_courses:
  - '[[Time Management Working From Home]]'
  - '[[Resume]]'
  - '[[C Sharp Algorithms]]'
  - '[[WordPress Essential Training]]'
next_courses:
  - '[[Slack Essential Training]]'
  - '[[GitHub Issues and Projects for Teams]]'
  - '[[Program Databases with Transact-SQL]]'
  - '[[CSS Essential Training (2023)]]'
path_nav: '[{"path":"Succeed as a Remote Software Developer","position":2,"total":6,"prev":"Time Management Working From Home","next":"Slack Essential Training"},{"path":"Prepare for the GitHub Foundations Certification","position":2,"total":7,"prev":"Resume","next":"GitHub Issues and Projects for Teams"},{"path":"Software Development Fundamentals","position":8,"total":10,"prev":"C Sharp Algorithms","next":"Program Databases with Transact-SQL"},{"path":"Getting Started with WordPress","position":2,"total":10,"prev":"WordPress Essential Training","next":"CSS Essential Training (2023)"}]'
path_count: 4
tags:
  - course
  - topic/cloud-computing
  - topic/security
  - topic/data-science
  - topic/software-development
  - topic/artificial-intelligence
  - topic/web-development
  - skill/git
  - skill/github
status: not-started
created: 2026-04-21
---

![Learning Git and GitHub](https://media.licdn.com/dms/image/v2/D560DAQG-PWt9Z7vqCA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1697832655105?e=2147483647&amp;v=beta&amp;t=y4RW4ep4W-ugmPxb52IiKv9s4k8DiOHmlj9DwjG6WmM)

# Learning Git and GitHub

> View Ray's LinkedIn NewsletterVersion Control lets you manage changes you've made to files over time, and is an essential skill for developers to master. Git is by far the most popular version control system on the web. In this fast-paced course, Ray Villalobos shows you the fundamental commands that you need to work with most Git projects. He explains how to use checkpoints called commits, which 

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-git-and-github-23011330) | 3h 50m | Beginner | 19K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Ray Villalobos]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/linkedinlearning/learning-git-github-2421501)

## Skills Covered

- Git
- GitHub

## Table of Contents

### Introduction

#### Travel the multiverse with Git and GitHub
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-git-and-github-23011330/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/welcome?u=76281980&t=0)** - I think the best history class would give each student a time machine so that they could go back through history and document it.
>
> **[0:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/welcome?u=76281980&t=7)** The problem with giving everyone a time machine is that it would be too tempting to not just document, but also change history.
>
> **[0:15](https://www.linkedin.com/learning/learning-git-and-github-23011330/welcome?u=76281980&t=15)** Hey there, this is Ray Villalobos, and in this course, I'm going to show you how developers use GIT to document and change a project's history.
>
> **[0:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/welcome?u=76281980&t=22)** Plus, I'll introduce you to a cloud-based tool called GitHub that lets you collaborate with others.
>
> **[0:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/welcome?u=76281980&t=28)** So if you're ready to travel the multiverse in your own time machine, let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** git (1)
> **Code Keywords:** let (1)
> **Env Vars:** git (1)
> **Tools:** github (1)
> **Speakers:** - i (1)

#### Exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-git-and-github-23011330/exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/exercise-files?u=76281980&t=0)** - [Instructor] You can get all the files for this course by going to this URL.
>
> **[0:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/exercise-files?u=76281980&t=5)** Now, when you get here, the only thing you need to do is take a look at this branch dropdown and choose this branch called 01_02b.
>
> **[0:15](https://www.linkedin.com/learning/learning-git-and-github-23011330/exercise-files?u=76281980&t=15)** Now from here, all you need to do is click on this Code button and download this as a ZIP document.
>
> **[0:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/exercise-files?u=76281980&t=23)** This will download to your local computer, and from here you can decompress this file, and you'll have all the files you need in this folder.
>
> **[0:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/exercise-files?u=76281980&t=33)** I'll go ahead and rename this "learninggithub" which is what I use when working with this in the course.

> [!info]- Semantic Content
>
> **Env Vars:** url (1), zip (1)
> **UI Navigation:** dropdown (1), click on (1)
> **Speakers:** - [instructor] (1)


### 1. Working with Git

#### Understanding version control
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-version-control?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-version-control?u=76281980&t=0)** - [Instructor] There are different types of version control systems you can use besides Git.
>
> **[0:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-version-control?u=76281980&t=4)** So let's talk about what they are, and specifically what we call distributed version control.
>
> **[0:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-version-control?u=76281980&t=10)** Version control, also called source control, let's you track and manage changes to code over time.
>
> **[0:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-version-control?u=76281980&t=16)** This allows you to look at the history of your project over a period of time.
>
> **[0:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-version-control?u=76281980&t=21)** And that means that you can back up and restore any part of the project to any previous state of the project's recorded history.
>
> **[0:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-version-control?u=76281980&t=28)** There's also a collaboration aspect to using version control.
>
> **[0:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-version-control?u=76281980&t=32)** Developers can make changes to the project, allowing an entire team of developers to work together.
>
> **[0:38](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-version-control?u=76281980&t=38)** You can share your code with others so that they can review or comment on what you've done.
>
> **[0:43](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-version-control?u=76281980&t=43)** You can also track who did what and when to a project.
>
> **[0:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-version-control?u=76281980&t=48)** There are two types of professional version control architectures: centralized and distributed, the main difference being where the files are stored.
>
> **[0:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-version-control?u=76281980&t=58)** Centralized, as the name implies, stores all the files and the history of the files in a centralized server.
>
> **[1:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-version-control?u=76281980&t=64)** The changes are tracked on the server, and everyone checks out files from that central location.
>
> **[1:11](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-version-control?u=76281980&t=71)** A version of that is Apache Subversion, or SVN.
>
> **[1:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-version-control?u=76281980&t=76)** A distributed version control system allows developers to keep copies of the project on their own workstations.
>
> **[1:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-version-control?u=76281980&t=83)** In this system, users make a copy of the project, which is called cloning, into their own machines.
>
> **[1:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-version-control?u=76281980&t=89)** This local version of the source code is called the working copy.
>
> **[1:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-version-control?u=76281980&t=93)** You can independently make changes to this working copy by committing and modifying the code.
>
> **[1:39](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-version-control?u=76281980&t=99)** When you're ready to update the code on the server, changes are then pushed from the copies to the main repository.
>
> **[1:46](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-version-control?u=76281980&t=106)** You can also pull changes that have been made by others in the main repository onto your own copy.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), git (1), apache (1)
> **Definitions:** is called (2), means that (1)
> **Code Keywords:** let (2)
> **Env Vars:** svn (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)

#### What is Git?
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-git?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-git?u=76281980&t=0)** - [Instructor] Let's take a minute to examine what Git is.
>
> **[0:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-git?u=76281980&t=3)** Now Git is what's called a version control or source control system.
>
> **[0:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-git?u=76281980&t=7)** In essence, it lets you manage changes you've made to files over time.
>
> **[0:11](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-git?u=76281980&t=11)** With Git, you're basically a historian with a time machine.
>
> **[0:15](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-git?u=76281980&t=15)** You're in charge of documenting the history of your project with the added benefit of being able to jump back and forth through time.
>
> **[0:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-git?u=76281980&t=22)** But unlike normal historians, you have the ability to rewrite history.
>
> **[0:27](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-git?u=76281980&t=27)** Now you can save checkpoints, which are called commits and leave messages about what happened at each of these different checkpoints.
>
> **[0:35](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-git?u=76281980&t=35)** The best part is another feature called branching that lets you create alternate versions of your code.
>
> **[0:40](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-git?u=76281980&t=40)** It's like being able to create alternate realities of your project.
>
> **[0:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-git?u=76281980&t=45)** A branch is a copy of your project that you can work on with or without changing the original.
>
> **[0:50](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-git?u=76281980&t=50)** You can then synchronize branches, which is called merging, or go back and forth in between them.
>
> **[0:56](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-git?u=76281980&t=56)** In order to use GitHub, you're going to need a few things.
>
> **[0:59](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-git?u=76281980&t=59)** First, of course, you need to install Git from the Git website.
>
> **[1:02](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-git?u=76281980&t=62)** They may already have Git in your machine, but it's a good idea to make sure that you have the latest version.
>
> **[1:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-git?u=76281980&t=67)** You can find Git at this URL right here, [git-scm.com](https://git-scm.com), and the scm means source control management.
>
> **[1:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-git?u=76281980&t=76)** From there, you can simply download an installer for your machine type and follow the instructions.
>
> **[1:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-git?u=76281980&t=81)** The defaults are fine for most installations.
>
> **[1:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-git?u=76281980&t=84)** However, if you're on Windows, one of the options is to install a terminal application called GitBash, which makes it easier to run Linux commands.
>
> **[1:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-git?u=76281980&t=92)** That's what most people use when working with Git.
>
> **[1:34](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-git?u=76281980&t=94)** However, the commands on a Windows machine are pretty similar, you just have to remember that to list files, you use DIR on Windows instead of LS on Linux.
>
> **[1:44](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-git?u=76281980&t=104)** You'll also need a terminal to run commands.
>
> **[1:47](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-git?u=76281980&t=107)** Now, if you're in a Mac, you can use a terminal application that comes with your machine or another terminal like Hyper, which is also available for Windows, and that's what I'll be using in some parts of the course.
>
> **[1:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-git?u=76281980&t=118)** I'll also be using Visual Studio Code, and here's where you can get that.
>
> **[2:02](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-git?u=76281980&t=122)** Finally, on most web projects, you'll be using something called Node.js, which handles most of the tools for the web.
>
> **[2:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-git?u=76281980&t=129)** So you may want to go to the website and download the installer for that.
>
> **[2:12](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-git?u=76281980&t=132)** If you're comfortable with those requirements, then let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** git (9), make (1), find (1), ls (1), node (1)
> **Tools:** terminal (4), github (1), visual studio (1)
> **Code Keywords:** let (2), finally, (1)
> **Env Vars:** url (1), dir (1)
> **Definitions:** is a  (1), is called (1)
> **Prerequisites:** install (2)
> **File Paths:** node.js (1)
> **URLs:** [git-scm.com](https://git-scm.com) (1)

#### Setting up Git
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=0)** - [Instructor] Let's take care of setting up a project to use Git.
>
> **[0:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=3)** Now, the first step is to set up some of the configuration variables.
>
> **[0:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=7)** Git is designed to be used by more than one person.
>
> **[0:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=10)** You have to tell it who you are so that it will give you credit for the changes that you make.
>
> **[0:15](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=15)** You can use the git config command and set up the username as well as the user email.
>
> **[0:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=20)** If you already have a GitHub account, you may want to use your GitHub email address here so you'll get credit on GitHub as well.
>
> **[0:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=28)** The global option makes sure that every project in this computer will use the same name and email address.
>
> **[0:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=33)** Right, so I have a terminal open right here, you can use Hyper on a Mac or Git Bash on a PC.
>
> **[0:39](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=39)** And I'm going to start off by adding those configuration variables.
>
> **[0:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=42)** So I'll say git config with the global option, and type in user.name, and then I'll type in my name.
>
> **[0:54](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=54)** Next, I'll type in my email address.
>
> **[1:08](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=68)** Once you've configured Git, the next step is to prepare the folder that's going to hold the project.
>
> **[1:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=73)** For this project, I've got a folder with some files that I'd like to manage with Git.
>
> **[1:18](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=78)** You can use your own files, but if you want to find out how to get these, make sure you watch the video on working with the exercises.
>
> **[1:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=84)** Let's open this up in Visual Studio Code.
>
> **[1:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=93)** Now, Visual Studio Code has a built-in terminal that you can use.
>
> **[1:36](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=96)** You can go to the Terminal menu and select New Terminal.
>
> **[1:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=102)** This terminal can use different flavors of whatever is installed in the operating system.
>
> **[1:46](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=106)** I have Seashell installed here on my Mac, so that will work.
>
> **[1:50](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=110)** If you're on a PC, you may still want to use something like Git Bash.
>
> **[1:54](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=114)** Let's start off by using the git init command.
>
> **[2:01](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=121)** Notice that the colors in my project changed.
>
> **[2:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=125)** That means that this project is now being managed with Git.
>
> **[2:08](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=128)** When you initialize Git, it creates an invisible folder called .git in the project folder.
>
> **[2:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=134)** Now, this is where Git stores all the information about the project.
>
> **[2:18](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=138)** If you're on Linux, you can take a look at it by doing an ls -la command.
>
> **[2:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=143)** If we make this a lot bigger, you'll see that there is now a Git folder.
>
> **[2:26](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=146)** You can even switch to that folder by doing a cd .git command.
>
> **[2:31](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=151)** And then we'll do an ls -la command again.
>
> **[2:34](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=154)** That's going to show us all the files that are in there.
>
> **[2:38](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=158)** Git is going to write these files for us and take care of keeping track of what the project is doing.
>
> **[2:43](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=163)** I'm going to switch back up to the previous directory with cd ..
>
> **[2:47](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=167)** and let's go ahead and issue a clear command.
>
> **[2:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=171)** In order to create an entry that we can go back to, we have to add the files to the staging environment with the add command.
>
> **[2:57](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=177)** Staging is the temporary area that we can store files that we want to commit later on.
>
> **[3:02](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=182)** You use the git add and then specify the file name that you want to move to staging.
>
> **[3:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=187)** There are some alternative versions of this command.
>
> **[3:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=190)** So for example, the --all flag will add all of the files in the project.
>
> **[3:15](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=195)** The shortcut for that is minus capital A.
>
> **[3:18](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=198)** Most of the longer GitHub commands usually have a shortcut that's the first letter of the command.
>
> **[3:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=204)** If there's more than one command with the same letter, some of them will be capitalized like this one.
>
> **[3:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=208)** There's also an even shorter way to write this.
>
> **[3:31](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=211)** The period is a shortcut in Linux for the current directory, so we can use that.
>
> **[3:35](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=215)** You'll see this shortcut used very often.
>
> **[3:38](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=218)** Let's go ahead and add all these files to staging.
>
> **[3:43](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=223)** Notice that the letter right here changed to an A.
>
> **[3:47](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=227)** The last step in the process is to commit the files with the commit command.
>
> **[3:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=231)** You always need to include a message for this.
>
> **[3:53](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=233)** It can be a short label so that you can remember what you were doing.
>
> **[3:59](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=239)** You issue a git commit and use the -m flag, and then type in something like First Commit or anything else that will make you remember what you were doing.
>
> **[4:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=249)** This will tell Git that this is one of the checkpoints that we want to track for our project.
>
> **[4:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=253)** That way we can come back to it later.
>
> **[4:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=256)** Let's go ahead and clear this out.
>
> **[4:18](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=258)** To verify that Git is keeping track of what we've done, we can issue a git log command.
>
> **[4:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=264)** You can see the entry that Git has made which is being tracked in the .git folder.
>
> **[4:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=268)** You've also finished your very first commit, so congratulations.
>
> **[4:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/installing-git-and-requirements?u=76281980&t=272)** We'll see more about what's happening in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** git (23), make (4), ls (2), cd (2), find (1)
> **Tools:** terminal (5), github (4), bash (2), visual studio (2)
> **Code Keywords:** let (6), switch (2), this. (2)
> **Cross-References:** go back to (1), in the next (1)
> **UI Navigation:** go to (1), switch to (1)
> **Definitions:** means that (1), is a  (1)
> **Prerequisites:** set up (2)
> **Analogies:** for example (1)

#### Understanding Git environments
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=0)** - [Instructor] Now that we've created our first commit, let's dig into how Git takes care of things.
>
> **[0:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=5)** If you take a look at what you got when you issued the log command, you should see something like this.
>
> **[0:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=10)** Our sole entry starts off by listing the commit hash.
>
> **[0:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=13)** This is a unique ID for the commit.
>
> **[0:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=16)** Next to that hash Git shows us that the head is currently in our main branch.
>
> **[0:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=22)** Git uses branches to organize project.
>
> **[0:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=24)** Each branch is like an alternate reality for the project.
>
> **[0:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=28)** The head always points to the current reality which is called a branch.
>
> **[0:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=32)** So this is the current branch we're working on.
>
> **[0:35](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=35)** Now by default, this branch is called Main, but older versions of Git use the term master.
>
> **[0:41](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=41)** On the next slide you can see the name of the author and email.
>
> **[0:44](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=44)** It should be the same as what we configured with the Git config command.
>
> **[0:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=48)** Next it shows the date the commit was made, and finally whatever message you wrote when committing the file.
>
> **[0:54](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=54)** Now if I had a real time machine, one of the things that I'd change is to make sure that I understand the different Git environments and states before I start working with Git.
>
> **[1:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=63)** So this next stuff is real important.
>
> **[1:06](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=66)** Git has three places where you can move files.
>
> **[1:08](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=68)** The first is the working environment.
>
> **[1:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=70)** Here the files look like what they did during the last commit.
>
> **[1:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=74)** Now before you create a new commit, you can move your files to a temporary location called staging.
>
> **[1:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=80)** We do this using the Add command.
>
> **[1:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=82)** This gives you a way to queue up changes until you're ready to commit.
>
> **[1:26](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=86)** Consider it a bit like dating before marriage.
>
> **[1:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=89)** The final environment is a commit.
>
> **[1:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=92)** Once you move files using the git commit command, a new log entry is created with a new hash.
>
> **[1:38](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=98)** Now before a commit, files can be in one of two main states.
>
> **[1:41](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=101)** The first is tracked files.
>
> **[1:43](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=103)** These are files that existed in the previous snapshot which is another name for the commit that you did.
>
> **[1:49](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=109)** Untracked files are anything else.
>
> **[1:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=111)** So for example, a new file added since the last commit.
>
> **[1:55](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=115)** Tracked files can also be in several states.
>
> **[1:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=118)** Unmodified means that the files haven't changed since the last commit, and of course, modified means that the files have been changed.
>
> **[2:06](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=126)** Finally, they can also be in staging and listed as staged.
>
> **[2:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=130)** They have been moved into that staging environment.
>
> **[2:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=134)** You can take a look at what's happening with the command called Git Status.
>
> **[2:18](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=138)** Let's take a look at how that works.
>
> **[2:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=140)** I'm going to go ahead and clear my screen and type in Git Status.
>
> **[2:25](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=145)** You can see that right now there is nothing new.
>
> **[2:27](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=147)** We haven't made any changes to any of the files, so we're still on branch main and we have nothing to commit.
>
> **[2:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=153)** So our working tree is clean.
>
> **[2:35](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=155)** Let's go ahead and make a change into this read me file.
>
> **[2:38](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=158)** I'm going to delete this last paragraph right here.
>
> **[2:43](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=163)** I'm going to save this, and you'll see that my file now has a different color, and we'll issue the Git status command again.
>
> **[2:53](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=173)** Now the first line is showing you the current branch and then the next few lines tells you about what's happening with the current environment.
>
> **[3:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=180)** It says that there are some changes that haven't been staged for commit, so they're in their working directory, but their status has changed.
>
> **[3:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=187)** So right now we have two options.
>
> **[3:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=189)** We can use the add command to move these files into staging or we can discard the changes we've made using the restore command.
>
> **[3:17](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=197)** We've already used the add command, so let's try the restore command.
>
> **[3:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=202)** Now there's a few ways that you can run this.
>
> **[3:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=204)** You can issue a Git Restore command with the file name or use the period to restore your current directory.
>
> **[3:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=210)** It's definitely a lot shorter.
>
> **[3:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=213)** You may also see the Git Checkout period command used in a lot of different places.
>
> **[3:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=217)** This is an older version of the restore command that is still in use.
>
> **[3:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=222)** Now I think restore makes a lot more sense since checkout can be used in other ways.
>
> **[3:46](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=226)** Let's go back into our project.
>
> **[3:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=228)** I'll go ahead and clear the terminal, and I can issue the Git add.
>
> **[3:53](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=233)** And here I can type in the name of the file directly, like Readme.md or I can use the shortcut and just say Git Add period.
>
> **[4:01](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=241)** This adds everything in the current directory.
>
> **[4:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=243)** Let's go ahead and clear this out and do a new Git status command.
>
> **[4:08](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=248)** Now you can see that we have changes in staging ready to be committed.
>
> **[4:12](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=252)** If we want to, we can move them out of the staging command using the restore command with the extra stage flag, which you can shorten to capital S.
>
> **[4:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=262)** Let's go ahead and do that.
>
> **[4:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=270)** Once again, let's clear this out and do a git status.
>
> **[4:34](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=274)** Now we're back to where we were a minute ago.
>
> **[4:36](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=276)** Let's go ahead and use Git Restore to get rid of the changes that we made to this readme.
>
> **[4:43](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=283)** Now notice that the changes come back in the original file.
>
> **[4:47](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=287)** And this looks like pretty much what we had in the last commit.
>
> **[4:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=292)** Now let's see what happens when we add a new file.
>
> **[4:57](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=297)** We'll go ahead and add a file called notes.md.
>
> **[5:01](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=301)** This will have some notes for our project.
>
> **[5:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=304)** Let's go to the terminal and use the git status command to see what's happening.
>
> **[5:08](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=308)** Now, you'll notice that it says that we have untracked files.
>
> **[5:11](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=311)** Let's try issuing the Git Restore command to see what happens.
>
> **[5:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=316)** Now notice that it didn't do anything to the notes document, and that's because Git isn't doing anything with untracked files.
>
> **[5:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=322)** So if you want to get rid of notes, you would have to delete it manually.
>
> **[5:26](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=326)** Let's go ahead and get rid of it.
>
> **[5:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=329)** Now we can say clear, and Git Status again, and you can see that everything looks like it did before in our last commit.
>
> **[5:36](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=336)** Now, trust me, the most important thing that you can understand is how the different environments work as well as the file states and what each of them does.
>
> **[5:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-git-environments?u=76281980&t=345)** This will make it easier to understand what is happening with your project as it gets more complicated.

> [!info]- Semantic Content
>
> **CLI Commands:** git (23), make (3)
> **Code Keywords:** let (13), this. (2), delete (2), default, (1), else. (1)
> **Definitions:** is a  (2), is called (2), means that (1), is an  (1)
> **File Paths:** readme.md (1), notes.md (1)
> **Tools:** terminal (2)
> **Cross-References:** in the last (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)

#### Ignoring files
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-git-and-github-23011330/ignoring-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/ignoring-files?u=76281980&t=0)** - [Instructor] Git is great at tracking files but you don't always have to track everything.
>
> **[0:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/ignoring-files?u=76281980&t=4)** You could have some files with some passwords or other sensitive information that you don't want to share with others.
>
> **[0:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/ignoring-files?u=76281980&t=10)** That could be authentication tokens, API keys, et cetera.
>
> **[0:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/ignoring-files?u=76281980&t=14)** Ignored files aren't uploaded to GitHub, so this is a great way to add notes that you don't need to share with others.
>
> **[0:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/ignoring-files?u=76281980&t=20)** So, for example, a great place to keep to-do items.
>
> **[0:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/ignoring-files?u=76281980&t=23)** Operating systems and applications can have settings that you don't need to share as well.
>
> **[0:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/ignoring-files?u=76281980&t=28)** macOS, for example, keeps a file called .DS_Store on most folders to keep track of all the files within those folders.
>
> **[0:35](https://www.linkedin.com/learning/learning-git-and-github-23011330/ignoring-files?u=76281980&t=35)** Visual Studio Code can have a list of local preferences in a vscode folder.
>
> **[0:41](https://www.linkedin.com/learning/learning-git-and-github-23011330/ignoring-files?u=76281980&t=41)** To take care of ignoring files, you can create a .gitignore file at the root level of your project, and inside that file, you can add any type of file or patterns that you want to ignore.
>
> **[0:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/ignoring-files?u=76281980&t=52)** For example, you can add an entry for the .DS_Store file as well as the vscode folder.
>
> **[0:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/ignoring-files?u=76281980&t=58)** Notice that the folder has a slash at the end.
>
> **[1:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/ignoring-files?u=76281980&t=60)** If your project requires it, you can add a file here like authentication.js to store any tokens, API keys, et cetera.
>
> **[1:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/ignoring-files?u=76281980&t=69)** Another common file is called node_modules.
>
> **[1:12](https://www.linkedin.com/learning/learning-git-and-github-23011330/ignoring-files?u=76281980&t=72)** This is created by NPM when working on a lot of web projects, so we can add that here.
>
> **[1:18](https://www.linkedin.com/learning/learning-git-and-github-23011330/ignoring-files?u=76281980&t=78)** You can also add a notes folder for local notes about the project that you don't want to share or you can create a special extension and add the notes anywhere in your project.
>
> **[1:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/ignoring-files?u=76281980&t=88)** By the way, Git doesn't track empty folders, so you don't have to worry about those.
>
> **[1:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/ignoring-files?u=76281980&t=93)** I'm going to go ahead and copy these right here and I'm going to go back to my project and create a file in my editor.
>
> **[1:40](https://www.linkedin.com/learning/learning-git-and-github-23011330/ignoring-files?u=76281980&t=100)** I'll call it .gitignore and I'll go ahead and paste those things into my file.
>
> **[1:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/ignoring-files?u=76281980&t=108)** Now, I'll go ahead and save it, and add it and commit it.
>
> **[1:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/ignoring-files?u=76281980&t=118)** Once that's committed, I can start adding those type of folders.
>
> **[2:01](https://www.linkedin.com/learning/learning-git-and-github-23011330/ignoring-files?u=76281980&t=121)** So, let's go ahead and add a notes folder.
>
> **[2:06](https://www.linkedin.com/learning/learning-git-and-github-23011330/ignoring-files?u=76281980&t=126)** And anything in here will not be tracked, but I do need to put something in there, so I'll add a project-todo.md file.
>
> **[2:17](https://www.linkedin.com/learning/learning-git-and-github-23011330/ignoring-files?u=76281980&t=137)** And you can see that Git grays this file out, which means that this file will not be tracked by it.
>
> **[2:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/ignoring-files?u=76281980&t=142)** So if I did a git status, it would say that there's nothing to commit, even though that's a new file.
>
> **[2:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/ignoring-files?u=76281980&t=150)** If I add another file here and put it in the main folder, it's still going to get ignored because this extension is automatically ignored in the files that I've added right here.
>
> **[2:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/ignoring-files?u=76281980&t=165)** There's a couple of other tips that you can use.
>
> **[2:47](https://www.linkedin.com/learning/learning-git-and-github-23011330/ignoring-files?u=76281980&t=167)** You can create your own global ignore file and that way, if you have a lot of different projects, you can add this as a config variable pointing to a file in your hard drive.
>
> **[2:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/ignoring-files?u=76281980&t=178)** You can add anything you want in there and whenever you create a new project, it will pick up this file automatically.
>
> **[3:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/ignoring-files?u=76281980&t=184)** Now, another thing that can happen is that if you add something to the .gitignore file after you've done a lot of commits, sometimes the way that Git caches information locally will get a little bit dirty.
>
> **[3:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/ignoring-files?u=76281980&t=196)** So in order to clear that, you can issue this command, git rm -r and then, use the --cached option with a period for the current folder, and it'll delete all of the files that are cached recursively.
>
> **[3:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/ignoring-files?u=76281980&t=210)** You may have to do another add and a commit, but this will clear out your cache and your .gitignore should work after that.
>
> **[3:38](https://www.linkedin.com/learning/learning-git-and-github-23011330/ignoring-files?u=76281980&t=218)** One of the reasons I wanted to talk about the .gitignore file this early is that you may already be seeing folders like the .DS_Store folder on macOS appear or perhaps you've modified some settings on Visual Studio Code and you would see a vscode file, and you want to make sure that those things are not tracked by Git before you get started on your project.
>
> **[3:59](https://www.linkedin.com/learning/learning-git-and-github-23011330/ignoring-files?u=76281980&t=239)** So, it's a good idea to work with the .gitignore file at the very beginning of when you're setting things up.

> [!info]- Semantic Content
>
> **CLI Commands:** git (7), npm (1), rm (1), make (1)
> **Code Identifiers:** macos (2), node_modules (1)
> **Env Vars:** api (2), npm (1)
> **Tools:** visual studio (2), github (1)
> **Definitions:** is a  (1), is called (1), means that (1)
> **Analogies:** for example (3)
> **File Paths:** authentication.js (1), project-todo.md (1)
> **Code Keywords:** let (1), delete (1)

#### Deleting and renaming files
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=0)** - [Instructor] As you're working with your Git projects you'll need to rename, move, or delete certain files.
>
> **[0:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=5)** The way that Git handles these normal file operations can be a bit confusing, so let's go over those.
>
> **[0:11](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=11)** Now deleting is the simpler of the different functions that we can perform, so let's go ahead and start with that.
>
> **[0:17](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=17)** There's two ways to delete files managed by Git.
>
> **[0:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=20)** Now the first is the obvious, just deleting the file from your file system.
>
> **[0:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=24)** And we can do that from Visual Studio code by right clicking on a file and then select and delete or using the shortcut rate here.
>
> **[0:31](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=31)** You can also go to the operating system, look in your folder, and get rid of the files that way as well.
>
> **[0:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=37)** Now if we do a Git status, you'll see that it records that deletion as a separate function.
>
> **[0:43](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=43)** So it's actually recording a deletion as something that you need to add into staging.
>
> **[0:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=48)** Now if you want to, you can go ahead and do Git add and then commit the files.
>
> **[0:53](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=53)** That's one way of doing this.
>
> **[0:54](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=54)** Now you can also restore the file by issuing the Git Restore command and we'll just use period here.
>
> **[1:01](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=61)** Let's go ahead and clear this out.
>
> **[1:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=63)** That'll bring back our index html and you can see that there is nothing to commit.
>
> **[1:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=67)** We have a working tree that is currently clean.
>
> **[1:11](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=71)** The other way to delete a file is by using the Git RM command and then type it in the file that you want to delete.
>
> **[1:18](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=78)** Now this gets rid of the file, but it does something else.
>
> **[1:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=81)** Let's take a look at the status.
>
> **[1:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=83)** Now this is actually deleted the file and it's automatically moved that deletion into staging.
>
> **[1:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=89)** So this is already to commit, so that saves us a step.
>
> **[1:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=93)** Now if we want to undo this function, we have to do it in two parts.
>
> **[1:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=97)** We can say Git restore, and this time we can use minus minus staged or just use minus S and we'll just do a period here, you can type in the file name if you want to.
>
> **[1:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=108)** So this is going to restore the file from staging into the work in directory.
>
> **[1:53](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=113)** Let's clear out and do a Git log.
>
> **[1:56](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=116)** That was a mistake.
>
> **[1:57](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=117)** Let's go ahead and clear this out and do a Git status.
>
> **[2:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=120)** And you can see that now the file is looking like it did a minute ago.
>
> **[2:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=124)** It is recorded as a deletion that needs to be added into staging.
>
> **[2:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=127)** So once again, we can get restored this time without the S flag and just hit the period right here.
>
> **[2:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=134)** Now the index HTML comes back and let's go ahead and clear this out, and the status should be clear.
>
> **[2:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=143)** Now, similar to the leading files, you can rename files in a couple of different ways, but the way Git handles this is pretty interesting.
>
> **[2:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=150)** So you can simply rename things in the operating system.
>
> **[2:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=153)** I can click on a file in Visual Studio code and just give it a different name.
>
> **[2:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=157)** Now if I do a Git status, you'll notice that it's recording it as two different things.
>
> **[2:44](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=164)** It's recording the deletion of index at html and then an addition of a new file called home.html.
>
> **[2:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=172)** So this sort of makes sense and this is really just the way that Linux deals with files.
>
> **[2:57](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=177)** When you're reading something, what you're doing is creating a new file and then deleting the old one.
>
> **[3:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=183)** Now undoing this is going to be a little bit harder.
>
> **[3:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=185)** You can onstage the files, but at some point Git will try to keep both copies of the two files.
>
> **[3:11](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=191)** So let's go ahead and do that.
>
> **[3:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=193)** We'll try doing Git restore period.
>
> **[3:17](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=197)** Let's clear this out.
>
> **[3:18](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=198)** You'll see that index, that html reappeared.
>
> **[3:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=201)** Git status and you can see that now we still have home in there, so all we have to do is delete it.
>
> **[3:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=210)** And now things look like they did before.
>
> **[3:34](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=214)** Let's clear this out.
>
> **[3:36](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=216)** Git status again, and there's nothing to commit.
>
> **[3:39](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=219)** And let's go back and clear this out as well.
>
> **[3:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=222)** Now just like with the delete command we have a command to take care of renaming, but it's a little bit weird.
>
> **[3:47](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=227)** It's called Git mv, and then we can give it the name of the file that we want to rename and the new name after that.
>
> **[3:57](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=237)** So you can see that the index at html file got changed into home html, and we can do a Git status to see what that looks like.
>
> **[4:06](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=246)** So you can see that this again saves us the step of staging the files and it goes directly into something that we can commit.
>
> **[4:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=253)** Now undoing, this would have to be done in the same way that we did the deletion, but since we can rename files like this we can also go backwards and type in mv and just reverse what we type in here.
>
> **[4:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=269)** So we can say rename home.html to index.html, so Git mv and then reverse the names of the files.
>
> **[4:38](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=278)** And now this one will be index.html.
>
> **[4:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=282)** And if we do a Git status it says that there's nothing to commit.
>
> **[4:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=285)** And the thing that you have to remember here is that Git is always looking at what you're doing based on the last commit.
>
> **[4:53](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=293)** So since we renamed the file back to what it used to be, it compares everything that we've done to the last commit and realizes that there's nothing that's different.
>
> **[5:02](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=302)** And so that's why it's telling you that there's nothing to commit.
>
> **[5:06](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=306)** In other words, there haven't really been any changes to any files.
>
> **[5:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=310)** Now, you might be wondering why mv instead of something like rn or rename or something like that.
>
> **[5:15](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=315)** It doesn't sound anything like rename.
>
> **[5:17](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=317)** In Linux mv is a command that moves files and it's what you use to rename things.
>
> **[5:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=322)** Move is doing the same thing that Git does when you rename the file, moving the file with a new name and then deleting the old one.
>
> **[5:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=328)** Now, Git mv does make it easier to go back, just move the files back if you want to.
>
> **[5:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=333)** However, I continuously delete files just with the operating system or I delete files by just renaming them.
>
> **[5:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=342)** And most of the confusion when I was learning Git was about what happened to my files.
>
> **[5:47](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=347)** It does all these kind of weird things as you can see right here, and it's good to get used to them by practice them a little bit.
>
> **[5:53](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=353)** It's a good idea to use Git status as often as possible when you're learning to see what's going on.
>
> **[5:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=358)** Make sure you spend some time practicing commands especially deleting things, renaming, and moving things.
>
> **[6:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/deleting-and-renaming-files?u=76281980&t=364)** Otherwise Git's going to be really confusing until you get used to it.

> [!info]- Semantic Content
>
> **CLI Commands:** git (26), mv (6), make (2), rm (1)
> **Code Keywords:** let (11), delete (9), function (2), this. (1), else. (1)
> **File Paths:** home.html (2), index.html (2)
> **Tools:** visual studio (2)
> **UI Navigation:** go to (1), click on (1)
> **Definitions:** in other words (1), is a  (1)
> **Analogies:** similar to (1), just like (1)
> **Env Vars:** html (1)

#### Differences
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=0)** - [Instructor] Git gives you a lot of freedom to experiment with your code.
>
> **[0:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=3)** And one of the features that can really help is showing the differences between files.
>
> **[0:08](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=8)** Let's go back into our project and I'm going to go to this Read Me document and delete this last paragraph right here.
>
> **[0:15](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=15)** Then I'll go ahead and save it and I'll do a git diff.
>
> **[0:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=20)** Now this command is going to show you the difference between these two files.
>
> **[0:25](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=25)** You can see that we have deleted and that's what this minus means right here, not only the paragraph but also this carriage return that was right here.
>
> **[0:35](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=35)** Now let's go ahead and undo this and save it.
>
> **[0:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=42)** Clear this out and we'll do a git diff again, there's no differences between those two.
>
> **[0:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=51)** And if we do some more changes, let's go ahead and add a new folder.
>
> **[0:56](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=56)** We'll call it docs.
>
> **[0:57](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=57)** And I'm going to move all of my HTML documents onto that docs folder.
>
> **[1:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=65)** Now let's try doing a git diff.
>
> **[1:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=70)** Now it's showing us all the different changes but the changes here involved and move.
>
> **[1:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=74)** And if you remember from the last video, we saw that moving means that you're deleting a file and then you're adding another file.
>
> **[1:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=81)** So to see this entire change I have to scroll all the way down for a long time.
>
> **[1:26](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=86)** Whenever you see that colon right there, if you want to exit, you can hit the Q key.
>
> **[1:31](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=91)** Let's go ahead and clear this out.
>
> **[1:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=93)** And it's a little bit difficult to use that git diff command in the terminal whenever you have a lot of changes.
>
> **[1:40](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=100)** So to do that, the Visual Studio Code provides a source control editor.
>
> **[1:46](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=106)** Now here you can see what happened.
>
> **[1:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=108)** We have deleted these three files and updated or added these other files.
>
> **[1:53](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=113)** Remember that renaming or moving things causes these kind of changes but you can see that the changes are recorded as a deletion of files and then an updating of some other files.
>
> **[2:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=127)** There's a lot of functionality that this screen has.
>
> **[2:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=129)** So for example, if I click on this plus sign, I can go ahead and stage the changes directly from this interface.
>
> **[2:17](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=137)** And we can take a look at git status and go ahead and add all the files.
>
> **[2:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=142)** Let's go ahead and just add everything into staging and that automatically will update it, everything that is right here.
>
> **[2:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=150)** That's pretty cool.
>
> **[2:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=152)** Let's go ahead and commit this change.
>
> **[2:35](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=155)** (keyboard clicking) Right? You can see that there are no longer any changes in this source control tab.
>
> **[2:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=165)** We'll go back into the editor and let's go ahead and clear this out.
>
> **[2:50](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=170)** Now, diff is pretty flexible.
>
> **[2:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=171)** You can use it to compare all types of things.
>
> **[2:54](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=174)** So for example, you can compare a file to it states at any one of your other commits.
>
> **[3:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=180)** By comparing history, you'll often check the log to see what the changes were.
>
> **[3:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=184)** When your logs get really long, so if I do a git log right now, you can see that I get that scrolling text, and this can be really long.
>
> **[3:12](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=192)** So there's a better way to do a git log and that is with the one line flag.
>
> **[3:18](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=198)** This puts the commits in order and also shows them to you all in a single line.
>
> **[3:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=203)** You can tell that it has a little bit of the hash at the beginning plus the fact that the head pointer is pointing to the main branch and then the commit messages.
>
> **[3:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=213)** This is a great way to take a look at your commit and it's also a great way to take a look and compare what you've done right now with some other commit.
>
> **[3:43](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=223)** So if I want to, I can do a git diff and type in one of these other commits here and it's going to show you the differences between those two commits.
>
> **[3:54](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=234)** Now this is not as useful and there is an extension that you should try using if you are doing a lot of diffing between branches and checkpoints.
>
> **[4:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/differences?u=76281980&t=244)** It's called Git Lens and you can get it from the Visual Studio Code Marketplace.

> [!info]- Semantic Content
>
> **CLI Commands:** git (10)
> **Code Keywords:** let (8), delete (1), interface (1)
> **Tools:** visual studio (2), terminal (1)
> **Definitions:** means that (1), is a  (1), is an  (1)
> **UI Navigation:** go to (1), click on (1)
> **Analogies:** for example (2)
> **Env Vars:** html (1)
> **Speakers:** - [instructor] (1)

#### Changing history
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=0)** - [Tutor] Now it's good to think of what you're doing with git as documenting the history of your project.
>
> **[0:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=5)** And like I mentioned in the intro, unlike most historians you have a time machine that lets you change history.
>
> **[0:11](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=11)** Let's take a look at some of the ways that we can do that.
>
> **[0:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=13)** Now the first one is called amending.
>
> **[0:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=16)** You can often end up committing something that's not quite right.
>
> **[0:19](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=19)** You can create a new commit.
>
> **[0:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=21)** But that ends up creating a messy history with a commit for a simple fix.
>
> **[0:26](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=26)** To add things to the last commit you can use the amended flag.
>
> **[0:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=30)** And when you do that, it's going to launch your default editor.
>
> **[0:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=33)** And allow you to edit the file, with the amended history.
>
> **[0:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=37)** Now if you don't want to do that, you can type in the minus M flag and select a new commit message.
>
> **[0:43](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=43)** Type it in right there.
>
> **[0:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=45)** Finally, you can also select the no edit function if you just want to leave the message the same as what you did in the last commit.
>
> **[0:53](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=53)** Let's take a look at how that works.
>
> **[0:55](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=55)** So I have these different files in the docs folder.
>
> **[0:59](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=59)** And I realized that on my index, that HTML file, I have this navigation.
>
> **[1:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=64)** And in my navigation I have a number of text uppercase classes.
>
> **[1:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=69)** that's making the navigation be uppercase in certain places.
>
> **[1:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=74)** But it would be more economical to go ahead and put that directly here in this nav class.
>
> **[1:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=80)** That way it will affect everything inside this nav section.
>
> **[1:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=84)** So what I'm going to do is, make a change right here.
>
> **[1:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=89)** Text uppercase.
>
> **[1:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=93)** And then I'm going to delete the other instances of text uppercase.
>
> **[1:49](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=109)** Let's go ahead and save that.
>
> **[1:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=111)** And we'll commit this change.
>
> **[2:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=123)** Now, after I've done this, I realized that I really needed to do this, in all of the other documents.
>
> **[2:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=129)** So if I take a look at my log.
>
> **[2:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=133)** I have all these commits, including this last commit that I did.
>
> **[2:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=136)** Now the changes that I'm going to make in the other files are going to be exactly the same.
>
> **[2:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=142)** So I don't really need to make a new commit I just need to fix the same things in the other files.
>
> **[2:27](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=147)** So I'm going to grab, let's see, these lines right here.
>
> **[2:31](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=151)** And I'll go over to the navigation and paste those changes.
>
> **[2:44](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=164)** Make sure that I also come up here to this nav.
>
> **[2:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=168)** And I add text uppercase here and we'll go ahead and copy this line.
>
> **[3:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=180)** And we'll make sure that that's added here.
>
> **[3:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=184)** And also we'll make sure that all these things have been saved.
>
> **[3:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=189)** So you can see the modifications are here, and here.
>
> **[3:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=193)** And if I open up source control, I can check to make sure that I've done all the changes, by clicking right here.
>
> **[3:19](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=199)** And you can see the changes side by side.
>
> **[3:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=202)** This diffing in visual studio code is really nice and you can really see the changes, synced up before and after, side by side.
>
> **[3:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=209)** Pretty awesome.
>
> **[3:31](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=211)** Also from here, I can of course open the file, discard the changes, and set stuff back.
>
> **[3:36](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=216)** Now what I want to do, let's go back here, into the explorer.
>
> **[3:41](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=221)** We can go ahead and close these out.
>
> **[3:47](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=227)** And we'll clear this screen.
>
> **[3:49](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=229)** And I want to do a git commit minus, minus amend.
>
> **[3:55](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=235)** Now this is going to open my default editor.
>
> **[3:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=238)** In my computer, this is set up as Adam.
>
> **[4:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=240)** And what it's doing here, is giving me the option of modifying the commit message here.
>
> **[4:06](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=246)** If you don't want to do anything, you could just close this.
>
> **[4:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=249)** But I'm going to change it to say simplify text uppercase in files.
>
> **[4:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=254)** And then I'm going to save this and close out of this application.
>
> **[4:19](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=259)** And when I go back it'll say that it went ahead and changed one file with three insertions.
>
> **[4:25](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=265)** Let's go ahead and do the git log.
>
> **[4:27](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=267)** One line here.
>
> **[4:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=269)** And you can see that it didn't create a new commit, it just modified the last one.
>
> **[4:34](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=274)** And it did update the text of the commit.
>
> **[4:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=277)** Because I did that in the other document.
>
> **[4:40](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=280)** With the other commands, If you do git commit amend minus M, you can do the text change directly in the terminal.
>
> **[4:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=288)** And if you don't want to edit the last message you can just say git commit amend, with the no edit option.
>
> **[4:54](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=294)** Now one thing I'm always trying to type in amend with two M's.
>
> **[4:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=298)** I'm not sure if you'll run into that in the same way that when I do git log one line.
>
> **[5:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=303)** Occasionally I'll do git log online, I'll miss the E.
>
> **[5:06](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=306)** I'm not sure what's happening with me, but just a couple of things to watch out for.
>
> **[5:11](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=311)** And you can also do what's called a reset.
>
> **[5:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=314)** Resetting let's you go back to a previous commit.
>
> **[5:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=316)** Now think of that as a rewind feature.
>
> **[5:19](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=319)** We can do this by using the hashtags from the log.
>
> **[5:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=323)** So we can say something like git reset and then select one of these hashtags from the log.
>
> **[5:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=332)** And what that will do, is it will undo some of the changes.
>
> **[5:36](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=336)** So it onstage the changes after the reset for us.
>
> **[5:40](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=340)** So it's essentially move back the header to another commit.
>
> **[5:44](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=344)** Now it didn't actually do anything to the file.
>
> **[5:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=348)** So it didn't delete the files, but it did rewind the commit.
>
> **[5:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=351)** So let's do a git log.
>
> **[5:54](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=354)** One line again.
>
> **[5:56](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=356)** You can see that now, instead of having four different commits, I have three different commits.
>
> **[6:01](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=361)** So it stopped right there.
>
> **[6:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=363)** Now the nice thing is that it took all the files and put them back in their original state.
>
> **[6:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=370)** It didn't delete the changes that I have made to these files.
>
> **[6:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=373)** You can see that if I look for the navigation I have my text uppercase text right there and it shows them as being modified.
>
> **[6:26](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=386)** So we can do git status, and notice that we can go ahead and add all these files.
>
> **[6:31](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=391)** So you can say git add, period and get commit minus M and type in the commit message.
>
> **[6:49](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=409)** Now we have a new commit with a new ID.
>
> **[6:53](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=413)** Let's go ahead and clear this out and do a git log one line.
>
> **[6:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=418)** And we can see that now we have a new commit with a new message.
>
> **[7:01](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=421)** There's another version of this command.
>
> **[7:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=424)** It's a little bit dangerous and it's the git reset with the hard option.
>
> **[7:08](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=428)** You'll see that sometimes.
>
> **[7:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=430)** So you can say git reset, minus, minus hard, and then you put in an ID.
>
> **[7:15](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=435)** This command will delete any commits before this one right here.
>
> **[7:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=440)** And it'll also change all the files.
>
> **[7:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=442)** So it'll actually get rid of all of my changes.
>
> **[7:25](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=445)** The non hard or the soft reset is a little bit safer.
>
> **[7:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=449)** And I suggest that you try that one.
>
> **[7:31](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=451)** But sometimes you do want to sort of reset hard to a specific commit to actually rewind time to a specific checkpoint, and go forwards from there.
>
> **[7:41](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=461)** Now rebasing is another way of changing history.
>
> **[7:44](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=464)** And it's designed to take the commits from one branch and apply them to another.
>
> **[7:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=468)** Here's the way that you use it.
>
> **[7:50](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=470)** You select git rebase.
>
> **[7:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=471)** And then you specify a branch, or a commit.
>
> **[7:54](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=474)** Now there's a really useful interactive command that will let you use your text editor to make changes.
>
> **[7:59](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=479)** This is actually the best way to use rebase.
>
> **[8:02](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=482)** Instead of a branch, you can use the head pointer to modify the current branch's directory.
>
> **[8:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=487)** You can see that right here.
>
> **[8:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=489)** So we can say git rebase.
>
> **[8:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=490)** And I want you to rebase by moving back to a certain number of commits.
>
> **[8:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=494)** Now that's useful if you have an extremely long commit history, and you only want to go back a few steps.
>
> **[8:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=500)** There's another option to let you see all the commits.
>
> **[8:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=503)** We have so few commits in our project that we can use this one safely.
>
> **[8:27](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=507)** Let's say for example that after you've done a few commits, you realize that there's something that you should have done earlier.
>
> **[8:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=513)** Let's go ahead and clear this out before I execute that hard reset.
>
> **[8:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=517)** That would be dangerous here.
>
> **[8:40](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=520)** And we'll go into the license file.
>
> **[8:43](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=523)** And I realized that I should have used the company name here.
>
> **[8:47](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=527)** So I'm going to make that change.
>
> **[8:49](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=529)** I'm going to save that, and add it, and commit it.
>
> **[9:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=540)** And if I look at the log, you can see that all my commits are in order.
>
> **[9:06](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=546)** But I really should have done this over here, right.
>
> **[9:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=550)** A little bit earlier.
>
> **[9:11](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=551)** I should have added that modification.
>
> **[9:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=553)** And so, I can rewrite the history so that this updating of the license, actually happens after my first commit.
>
> **[9:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=560)** So it happened before this git ignore file.
>
> **[9:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=563)** In essence, I can move any of this commits around and all the changes that were in there will happen at a different point in time.
>
> **[9:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=570)** This is exactly like having a time machine.
>
> **[9:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=573)** Now to do this, let's go ahead and do a git rebase.
>
> **[9:39](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=579)** We'll do an interactive version, and we'll use the route.
>
> **[9:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=582)** Now, you can here, use the head pointer and then just go back to say the last three commits.
>
> **[9:50](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=590)** Let's try that first.
>
> **[9:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=592)** This will open up my editor again.
>
> **[9:54](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=594)** And you can see that we have the last three commits listed.
>
> **[9:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=598)** There's a bunch of other stuff, right here.
>
> **[10:01](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=601)** I'll show you that again in just a second.
>
> **[10:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=603)** So let's go ahead and quit this.
>
> **[10:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=604)** If you just quit, it doesn't really do anything.
>
> **[10:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=607)** Let's go ahead and clear this out.
>
> **[10:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=609)** And we'll use, instead of the hit three we'll just say git rebase minus I with the root option.
>
> **[10:17](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=617)** This will bring us all of our commits.
>
> **[10:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=620)** And now let's take a look at the options that you can perform, right here.
>
> **[10:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=624)** You can see that we have the first commit and all the other commits in order.
>
> **[10:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=629)** Including this updated license that we just performed.
>
> **[10:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=632)** Now what we want to do, is take this one and make it happen before.
>
> **[10:39](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=639)** Right. And there's a lot of other options that we can perform here.
>
> **[10:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=642)** So for example, we can modify by doing what's called a squash commit.
>
> **[10:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=648)** This would take the commit any of these files right here.
>
> **[10:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=652)** Or any of these commits and squash it into the previous commit.
>
> **[10:56](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=656)** So it's going to take what we did here and combine it with our first commit.
>
> **[11:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=660)** So it would be as if whenever I created this document, it would automatically be part of this first commit.
>
> **[11:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=667)** Which is probably the way that it should look.
>
> **[11:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=669)** It should look like I had already had the proper license when I first loaded this, so I could do that.
>
> **[11:15](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=675)** And then there's another option called fix up.
>
> **[11:18](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=678)** And this was actually pretty cool because otherwise, it's going to keep both of the commit logs messages.
>
> **[11:25](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=685)** So, what I'm going to do is I'm going to do a fix-up commit.
>
> **[11:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=689)** This is like a squash. It's going to combine these two things.
>
> **[11:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=692)** But then it's going to not use the commit message.
>
> **[11:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=697)** Let's go ahead and save this and we'll close this out.
>
> **[11:41](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=701)** And now, let's go ahead and take a look at the log.
>
> **[11:47](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=707)** So you can see that my previous commit making the change to this license, has disappeared.
>
> **[11:53](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=713)** It's actually been combined into this first commit.
>
> **[11:56](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=716)** So you can see that git rebasing is a fantastic way to completely rewrite the history.
>
> **[12:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/changing-history?u=76281980&t=723)** And reorganize the order in which commits are made.

> [!info]- Semantic Content
>
> **Code Keywords:** let (20), delete (4), this, (4), this. (2), finally, (1)
> **CLI Commands:** git (20), make (10)
> **Cross-References:** go back to (2), in the last (1)
> **Definitions:** is a  (2), is called (1)
> **Tools:** visual studio (1), terminal (1)
> **UI Navigation:** select the (1), open the (1)
> **Analogies:** for example (2)
> **Env Vars:** html (1)

#### Branches
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=0)** - [Instructor] One of the most powerful features of Git is the ability to create branches.
>
> **[0:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=4)** Now, branches let you create different versions of your code, so that you can play around with adding new features without worrying about messing up what's stable.
>
> **[0:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=13)** The simplest command you can use is called branch.
>
> **[0:15](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=15)** It lets you take a look at all the branches in your repository.
>
> **[0:18](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=18)** Right now, we only have a single branch.
>
> **[0:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=21)** So if we take a look at our project, and we do Git branch, you'll see that we have a single branch called main.
>
> **[0:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=28)** Typically, what you want to do is make a copy of an existing branch.
>
> **[0:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=32)** You can do that with the Git switch command.
>
> **[0:35](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=35)** It will have the same history as the current branch.
>
> **[0:38](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=38)** There's a slightly older version of this command called Git checkout, and you may see that in a lot of examples.
>
> **[0:44](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=44)** Notice that with Git checkout, you have to do Git checkout -b, and then the name of the new branch that you want to create, whereas with Git switch, it's Git switch -c, and then the name.
>
> **[0:55](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=55)** Let's go ahead and do that in our project.
>
> **[0:57](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=57)** So in my project, I've noticed that I have a few additional classes that I want to get rid of.
>
> **[1:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=63)** So for example, I have this site-header class, and the way that I created this small website was by copying things from a previous project, and I forgot to take away the site-header tag, as well as this site-nav tag, and also this family-sans class.
>
> **[1:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=81)** Everything else is a Bootstrap class, and these are just extra classes that I had added in a previous project.
>
> **[1:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=88)** So I'm going to create a new branch to take care of those things.
>
> **[1:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=92)** Let's go ahead and issue a Git switch -c, and I'll call this branch fix-classes.
>
> **[1:41](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=101)** Now, notice that it said that it switched to a new branch, and if I do a Git status, it'll show me that I'm now on branch fix-classes.
>
> **[1:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=111)** Right, to take care of these different changes, what I'm going to do is do a search and replace, so that I change all the files.
>
> **[1:59](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=119)** So I'm going to copy this site-header, and I'm in Visual Studio Code here.
>
> **[2:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=125)** So I can do a Replace in Files command right here, and it's going to find site-header and replace it with nothing.
>
> **[2:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=133)** So we'll hit this button right here, and it's going to replace all the files that have that class.
>
> **[2:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=140)** And I'll do the same thing with site-nav and this family-sans.
>
> **[2:25](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=145)** (no audio) Once again, I'll take this text and replace it with nothing.
>
> **[2:34](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=154)** So I'll click on this button right here.
>
> **[2:36](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=156)** It's going to replace everything in three files, and that's all I need to do.
>
> **[2:40](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=160)** So let's go ahead, and let's clear this out and take a look at the status.
>
> **[2:46](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=166)** It's showing me those files.
>
> **[2:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=168)** If I want to, I can preview the changes here in the Git tab, so I can take a look at each one of those files and see where those changes were made.
>
> **[2:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=178)** Everything looks good to me, so I'm going to add and commit these changes.
>
> **[3:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=184)** So let's go ahead and clear this out.
>
> **[3:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=187)** (no audio) All right, so now if I do a Git log, it tells me that I have added this new commit here, and it's also telling me that main is still in this old state.
>
> **[3:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=209)** So it's actually noticed that I've done a commit here in this new branch, but I haven't added it into main.
>
> **[3:36](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=216)** So now that we're ready to synchronize what we're doing in our new branch with our main branch, we'll need to know about merging.
>
> **[3:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=222)** The merge command will merge the changes from one branch into the current branch.
>
> **[3:46](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=226)** And it looks like this.
>
> **[3:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=228)** This command will change the merges from the branch I specify right here, into the current branch.
>
> **[3:54](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=234)** So in our case, we have to switch back into the main branch and then execute this command.
>
> **[4:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=240)** So let's go ahead and do that with our project.
>
> **[4:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=243)** Let's clear this out.
>
> **[4:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=245)** We'll do a Git switch main.
>
> **[4:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=249)** Now, we're in the main branch, and let's do Git branch, so we can see that we have two branches right here.
>
> **[4:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=256)** And so what we'll do is use Git merge, and we'll add the fix-classes branch.
>
> **[4:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=264)** Now, this has added all of the changes from our new branch into the main branch.
>
> **[4:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=269)** Clear this out.
>
> **[4:31](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=271)** And if I do a Git log oneline, you'll see that new commit right here on the main branch.
>
> **[4:41](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=281)** Now, I still have the other branch, so when you're done with a feature or a fix, it's a good idea to delete the branch that you no longer need.
>
> **[4:50](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=290)** To do that, you can execute the Git branch and then with the delete option, specify the name of the branch that you want to delete.
>
> **[4:59](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=299)** There's a couple of options.
>
> **[5:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=300)** You can use this -d option as long as the branches are free of conflicts.
>
> **[5:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=307)** The -D forces Git to ignore things and just deletes the branch.
>
> **[5:11](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=311)** Okay, so let's go ahead and clear this out, and we'll delete fix-classes.
>
> **[5:18](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=318)** So I do this sometimes, I forgot to do the Git branch, and then -d and then fix-classes.
>
> **[5:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=328)** Right, so it deleted that branch.
>
> **[5:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=329)** Let's clear this out, and we'll do Git branch.
>
> **[5:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=332)** Now, there's only one branch.
>
> **[5:34](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=334)** This sequence of doing things is what we call Git Flow.
>
> **[5:38](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=338)** You create a new branch, that's usually a feature or a fixed branch.
>
> **[5:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=342)** You make changes to that branch, then you merge that branch back to master, and then you delete the old branch.
>
> **[5:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=348)** This is how developers work on real projects.
>
> **[5:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=351)** Now, every company has a different version of this, but it follows this general pattern.
>
> **[5:55](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=355)** When you collaborate with other people, everyone leaves the main branch alone.
>
> **[6:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=360)** You can see that things would get really messy if everybody was trying to work on the same branch.
>
> **[6:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=365)** So everybody creates a new branch, then you make a change, and you follow this structure.
>
> **[6:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/branches?u=76281980&t=370)** This will make working with others a lot easier.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), switch (6), delete (5), class, (2), class. (2)
> **CLI Commands:** git (21), make (4), find (1)
> **Definitions:** is called (1), is a  (1)
> **Tools:** visual studio (1)
> **UI Navigation:** click on (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Merge conflicts
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=0)** - [Instructor] Every good user has to learn how to work with conflicts when working on a project.
>
> **[0:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=4)** So let's practice dealing with them.
>
> **[0:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=7)** Conflicts happen when you're merging two branches, but you or somebody else has made changes to the same items in a file.
>
> **[0:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=13)** So for example, we can have a main branch, and then do a commit on that main branch.
>
> **[0:18](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=18)** And then two different people can create different features.
>
> **[0:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=22)** For example, we can have another user create a different fix for our project, and then merge that back into the main branch.
>
> **[0:31](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=31)** Now, in addition to that, we could be working on our own feature branch and create a fix on our project, and then merge that back into the project.
>
> **[0:40](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=40)** But if another fix has been made before then, that tends to cause merge conflicts.
>
> **[0:46](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=46)** So let's take a look at how that works in our project.
>
> **[0:49](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=49)** Now, if we take a look at the index of that HTML document, at about line 46, you'll notice that this introduction text is on a headline level 3.
>
> **[1:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=60)** And if you take a peek at either the columns or the media file, both of those use a larger font size, a h2 right here, with a display-4, which is going to make it look even bigger because this is a bootstrap class that makes your text look really big.
>
> **[1:17](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=77)** And what we want to do is make sure that they're all sort of displaying in the same way.
>
> **[1:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=82)** Now, I'm going to go ahead and pull this website up on a browser.
>
> **[1:26](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=86)** So to do that, I do have an additional extension that I've installed called Live Preview.
>
> **[1:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=92)** So you can go to the Extension tabs in Visual Studio Code and take a look at this extension called Live Server.
>
> **[1:39](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=99)** Once you have that installed, what you can do is hit Command+Shift+P and then type in 'live server.'
>
> **[1:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=108)** And this will open the file with the Live Server.
>
> **[1:50](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=110)** It's going to open up a new browser window.
>
> **[1:53](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=113)** You can take a look at what our website looks like.
>
> **[1:55](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=115)** And if we make a change, we can preview it.
>
> **[1:57](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=117)** So I'm going to make this pretty small here just to show you the difference in the font sizes.
>
> **[2:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=123)** So it's telling me that a server has started for us.
>
> **[2:06](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=126)** And let's make this a little bigger actually so we can see the menus.
>
> **[2:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=130)** And then if we go to the homepage, you can see here that this is a smaller font than either what's here in Columns or Media.
>
> **[2:19](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=139)** So to fix this, let's go ahead and go back to the homepage.
>
> **[2:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=148)** To fix this, I'm going to use git-flow to start a branch to fix that headline.
>
> **[2:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=153)** So I'm going to say git switch -c and then fixheadline.
>
> **[2:41](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=161)** And so what I want to do is make sure that my display for class is included in my index.html file.
>
> **[2:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=171)** So I'll go back here into index.html.
>
> **[2:54](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=174)** It's not going to matter that this is an h3.
>
> **[2:56](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=176)** I could fix that if I wanted to, but I'll just add the display-4 class into the index.html page.
>
> **[3:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=183)** And you can see that now this introduction is the same size as in the other different pages here.
>
> **[3:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=190)** So that's great. That's a fantastic fix.
>
> **[3:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=193)** So let's go ahead and add this.
>
> **[3:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=201)** Make sure that we have saved it.
>
> **[3:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=203)** It looks like I did because it does have the M right here.
>
> **[3:26](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=206)** And then we'll say git add .
>
> **[3:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=208)** git commit -m.
>
> **[3:35](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=215)** And I'll add a message here.
>
> **[3:41](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=221)** All right, so that is done.
>
> **[3:43](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=223)** Before we merge this, let's make a change to our project that will cause a conflict on purpose.
>
> **[3:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=228)** Now, normally, this will happen when you're working with somebody else, and somebody else has made changes to some sort of file that you're working on.
>
> **[3:55](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=235)** When you try to merge it back, you'll notice these kind of errors.
>
> **[3:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=238)** This can happen also whenever you are working on a feature but you're not quite done with it, and you have to jump in the main branch and maybe create a quick fix for a typo or something that you've seen; when you come back to the other branch, that new change will not be on that branch.
>
> **[4:17](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=257)** And so that's why you need to usually do a merge that will create some sort of merge conflict.
>
> **[4:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=262)** So let's go ahead and go back into the main branch.
>
> **[4:26](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=266)** So we'll leave this branch alone for now.
>
> **[4:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=268)** I'll clear this out and I'll go back into the main branch.
>
> **[4:34](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=274)** Now when I do that, I should see that my index, that HTML, has the class taken out of it, right?
>
> **[4:43](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=283)** This new class that I added, the display-4 class is no longer there.
>
> **[4:47](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=287)** So that's good.
>
> **[4:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=288)** I did notice when I was working on those changes that there's actually a text-reverse class, and it's actually being used in a couple of places.
>
> **[4:56](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=296)** You can see it here and here.
>
> **[4:57](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=297)** And this is another one of those classes that is not a bootstrap class, and that I should really remove from everywhere on my website.
>
> **[5:06](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=306)** So I'm going to do a search, and I can do that by clicking here.
>
> **[5:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=310)** And I'm going to look for 'text-reverse.'
>
> **[5:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=314)** And then I'm going to replace that with nothing.
>
> **[5:18](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=318)** Notice that it's noticing actually that it's only in the index, that HTML page.
>
> **[5:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=322)** So I'm going to hit this button here to replace those.
>
> **[5:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=324)** It's going to replace the two instances.
>
> **[5:27](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=327)** And I'm now going to create a new feature branch for this.
>
> **[5:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=330)** I'll just go ahead and do it directly into the main branch.
>
> **[5:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=333)** So I'll save this.
>
> **[5:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=337)** And actually, let me go ahead and in this case also remove just this class.
>
> **[5:40](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=340)** 'Cause here it wouldn't make any sense to have a class that is completely empty.
>
> **[5:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=345)** So I'll do that.
>
> **[5:46](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=346)** And I'll do a git add, git commit, and then just put in a message that I removed text-reverse classes.
>
> **[6:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=360)** So now I have two different branches and they're in two different states.
>
> **[6:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=365)** Let's go ahead and clear this out.
>
> **[6:06](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=366)** And we'll go ahead and switch to the other branch.
>
> **[6:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=369)** So if we do a git branch, you'll notice that I have my main branch as well as my fixheadline branch.
>
> **[6:15](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=375)** So we'll do a git switch fixheadline.
>
> **[6:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=380)** I switch to that branch.
>
> **[6:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=382)** And you'll see here that I do have the display-4 class, but I also have the text-reverse class.
>
> **[6:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=388)** So let's go ahead and go back to main.
>
> **[6:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=397)** And we'll do a merge of that other branch.
>
> **[6:40](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=400)** So git merge fixheadline.
>
> **[6:46](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=406)** All right, so when we do that, you'll run into this thing called a merge conflict.
>
> **[6:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=411)** And if you're using Visual Studio code, it's actually going to try to help you quite a bit in resolving this merge conflict.
>
> **[6:59](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=419)** But what it's going to do is going to give you these little arrows right here telling you that in the main branch, this is the way that this text looks right now.
>
> **[7:08](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=428)** And then it says the change that you're trying to merge in this fixheadline branch is the incoming change.
>
> **[7:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=436)** And that is this right here.
>
> **[7:19](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=439)** So it's trying to ask you which one of these do you want?
>
> **[7:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=441)** Do you want just the headline with no classes or do you want this headline with this classes?
>
> **[7:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=448)** Everything else, it's actually going to be fine.
>
> **[7:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=450)** There are no other conflicts in this page.
>
> **[7:34](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=454)** It didn't worry about this other piece of text being gone here.
>
> **[7:39](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=459)** So what I can do is, so remember I'm in the main branch.
>
> **[7:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=462)** I want to accept the incoming change.
>
> **[7:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=465)** And then I'm going to manually remove this text-reverse here, right?
>
> **[7:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=471)** And I'll clean this up right here.
>
> **[7:54](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=474)** Now, if you were in another editor, you can still use those arrows.
>
> **[7:57](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=477)** The arrows just tell you what the current branch is and what the new branch or the incoming branch would be.
>
> **[8:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=485)** Now, also notice that Visual Studio code is giving you this little window right here, this little green sort of section right here, that's telling you that you've made some changes in the current project as well.
>
> **[8:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=496)** So that's kind of good.
>
> **[8:17](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=497)** It's telling you where the changes have been made.
>
> **[8:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=500)** Now that I've made those changes, I can go ahead and add everything and commit a new fix.
>
> **[8:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=517)** And I'll do the git log --oneLine.
>
> **[8:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=522)** And sometimes I do --onLine.
>
> **[8:43](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=523)** So --oneLine, and you can see that everything has been added into this page.
>
> **[8:50](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=530)** And you can even see that the fixheadLine branch is sitting at this commits.
>
> **[8:55](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=535)** This is the last thing we did over there.
>
> **[8:57](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=537)** And we merged all the changes into this branch, and then we fixed the merge conflicts.
>
> **[9:02](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=542)** Now, that was a pretty easy merge conflict to fix.
>
> **[9:06](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=546)** They might be a little more intense.
>
> **[9:08](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=548)** But all you have to do is remember that you have to choose which one of the branches you want to use or which one of the changes you want to use, and then accept them everywhere in your project.
>
> **[9:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=563)** Now, it looks like I need to go ahead and make sure that I save this.
>
> **[9:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=568)** We'll see if there's anything, git status.
>
> **[9:31](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=571)** So it looks like I didn't save some of the other minor changes here.
>
> **[9:35](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=575)** So let's do a add .
>
> **[9:39](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=579)** and git commit.
>
> **[9:43](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=583)** And I'll just do a git commit --amend.
>
> **[9:49](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=589)** I should have put in a -m to add a merge issue message, but I'm just going to save this one.
>
> **[9:55](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=595)** And I'll quit out of my default editor which is Atom.
>
> **[9:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=598)** And that should be added into my last commit.
>
> **[10:02](https://www.linkedin.com/learning/learning-git-and-github-23011330/merge-conflicts?u=76281980&t=602)** And everything looks clean now, so I can move along with my project.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), switch (4), this. (4), this, (3), class, (3)
> **CLI Commands:** git (13), make (10)
> **UI Navigation:** go to (2), switch to (2), open the (1)
> **Code Identifiers:** oneline (2), online (1), fixheadline (1)
> **Tools:** visual studio (3), atom (1)
> **File Paths:** index.html (3)
> **Env Vars:** html (3)
> **Definitions:** is a  (2), is an  (1)

#### Git stash and clean
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=0)** - [Instructor] Some commands aren't really part of the core of what GitHub can do, but they're so useful that I'd like to leave them here as a bonus before we get into GitHub.
>
> **[0:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=10)** So the first command that I want to show you is called the git stash.
>
> **[0:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=14)** Stashing is a way of putting away code temporarily so that you can work on something else.
>
> **[0:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=20)** This is the perfect thing to use when maybe your boss comes in and tells you that he needs a super important change.
>
> **[0:27](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=27)** But you were already working on some new changes on the current branch that you were in.
>
> **[0:31](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=31)** So you essentially want to restore everything, but you want to not lose any of the changes that you've made.
>
> **[0:38](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=38)** And this is what it looks like.
>
> **[0:39](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=39)** You do a git stash, and it will take whatever the changes were and temporarily put them in a storage facility, say.
>
> **[0:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=48)** And then you can take a look at what's been stored by using git stash list.
>
> **[0:54](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=54)** And there's a couple of ways of retrieving the stash.
>
> **[0:57](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=57)** git stash apply allows you to apply a stash set of changes, and git stash pop will actually remove the git stash from the list.
>
> **[1:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=70)** So essentially, when you git stash, it kind of goes into what is sort of like a deck of cards.
>
> **[1:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=76)** You can continue to stash things, and any new stashes will be at the top of that deck of cards.
>
> **[1:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=83)** The top of the deck of cards has an index of zero, and the other ones have indexes that are larger.
>
> **[1:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=90)** So let's go back into our project, and I do have this preview running from the movie that we did before by using that live preview extension.
>
> **[1:41](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=101)** Now what I want to do here is I want to play around with the background colors on this page.
>
> **[1:47](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=107)** So right now, the background colors happen to be background dark, and I have this body class, bg-dark.
>
> **[1:55](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=115)** So let's go ahead and change this to bg-primary, and let's go ahead and save that.
>
> **[2:01](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=121)** You can see that the bottom part of this thing becomes the primary color.
>
> **[2:06](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=126)** And bg, let's see, navbar-dark.
>
> **[2:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=129)** So I end this bg-dark, I want to do bg-primary.
>
> **[2:12](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=132)** That's also going to change the top.
>
> **[2:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=134)** I do have to do this in all the pages.
>
> **[2:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=136)** So let's go ahead and undo these, and I'll just do a search for bg-dark, bg-dark, and I'll replace it with bg-primary here.
>
> **[2:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=150)** I'll do that everywhere.
>
> **[2:35](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=155)** Okay, so now I can go to the different pages and notice that my background is always going to be this blue background.
>
> **[2:44](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=164)** So that looks pretty cool.
>
> **[2:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=165)** But let's say that I wanted to try another color, but I wanted to keep this particular change that I have made.
>
> **[2:53](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=173)** So let's go ahead and clear this out.
>
> **[2:56](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=176)** And I'm going to do a git stash command.
>
> **[2:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=178)** So notice, actually, if you look at the files, you'll notice that I've modified all of these items right here.
>
> **[3:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=184)** So what I can do is issue a git stash command.
>
> **[3:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=189)** That's going to return the directory to its original state.
>
> **[3:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=194)** And it's going to... Have added something to my stash.
>
> **[3:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=200)** So I can issue a git stash list command.
>
> **[3:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=204)** You can see that there's only one item right now in the stash.
>
> **[3:27](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=207)** So I can do a git stash apply, and I'll apply the number zero.
>
> **[3:35](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=215)** That's going to bring those changes back, and it's going to, sort of, not stage the changes, it's just going to bring them back.
>
> **[3:43](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=223)** Now if I do want to rewind back so that I can try a different color, then I can do a git restore and restore everything back to its original settings.
>
> **[3:55](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=235)** Now, let's clear this out.
>
> **[3:57](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=237)** If I take a look at the git stash list, you'll see that that item is still there.
>
> **[4:02](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=242)** Let's go ahead and try a different color.
>
> **[4:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=245)** So I'm going to do, instead of bg-primary, I'm going to do bg-danger, and I'll replace all of them, right?
>
> **[4:15](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=255)** So, sometimes I have to hit this button here, and then you can do the replace.
>
> **[4:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=261)** That's going to replace across three files in bg-danger.
>
> **[4:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=264)** Looks like this. Let's go ahead and stash this again.
>
> **[4:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=269)** So now it rewinds back to its original position, and if I do a git stash list, now you can see that I have two sets of stashes.
>
> **[4:38](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=278)** Let's do one more.
>
> **[4:39](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=279)** So in addition to danger, there is an info, and again, I have to hit this little button here, and then I'll hit replace.
>
> **[4:50](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=290)** And now it brings it into this sort of cyan, which actually looks pretty good, right?
>
> **[4:56](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=296)** So if I go to the different pages, the navigation will always be cyan.
>
> **[5:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=300)** And git stash is just a quick way of, sort of, undoing the work that you've done that you can sort of put in these different stashes and come back to... Oops, I didn't mean to type clear there.
>
> **[5:11](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=311)** Let's go ahead and clear this down here.
>
> **[5:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=313)** Now if I do git stash pop, it's going to actually need to git restore, period, to get rid of all my changes.
>
> **[5:26](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=326)** Let's try doing now a git stash pop.
>
> **[5:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=329)** So, because I did a git stash pop, what I get is what is in the zero position, right?
>
> **[5:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=337)** The top of the stash.
>
> **[5:38](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=338)** So let's take a look, git stash list, and it looks like I have just one item left.
>
> **[5:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=345)** So I'm going to say git restore, period, and do git stash pop again.
>
> **[5:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=351)** So pop, it's going to bring it back to the last item on the stash, which was this blue.
>
> **[5:57](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=357)** And if I want to, so git status, I can go ahead and add these.
>
> **[6:02](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=362)** So let's take a look. Right now, I'm on the main branch.
>
> **[6:06](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=366)** I can do a git add, period, git commit -m, and I'll say just change colors to blue backgrounds.
>
> **[6:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=381)** That's great. Now I have that new commit.
>
> **[6:25](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=385)** That changes the color to that nice blue background.
>
> **[6:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=389)** Now there's another little utility command that I want to show you, and that is the git clean command.
>
> **[6:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=397)** So git clean command is pretty simple.
>
> **[6:39](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=399)** It lets you remove all on-track files and directories from your branch super quickly.
>
> **[6:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=405)** It's a nice way of removing like old files that you don't need anymore.
>
> **[6:49](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=409)** And this is how you use it.
>
> **[6:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=411)** You can issue a git clean with the minus n option, and that will show you what a git clean would normally do.
>
> **[6:59](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=419)** You can also add minus d if you want to get rid of directories and sub directories.
>
> **[7:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=425)** And then when you want to actually do a cleaning operation that is not a dry run, you can use the force command.
>
> **[7:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=433)** So you can combine a d and f if you want to.
>
> **[7:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=436)** And if you don't want to destroy things, you can just select minus n.
>
> **[7:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=440)** So let's go back into our project, and let's say that we added some files here.
>
> **[7:25](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=445)** So let's go ahead, and I'm just going to add another file like this, and it doesn't really need to have anything.
>
> **[7:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=457)** And I know that I could do a git restore, but if I have a lot of these files that are untracked, so notice that this one says "U" right here.
>
> **[7:46](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=466)** If I had a ton of files and folders that were untracked, let's go ahead and make a folder here.
>
> **[7:59](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=479)** And we'll add another file here.
>
> **[8:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=483)** Just files that are untracked, right?
>
> **[8:06](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=486)** So, what I could do here is say git clean -n.
>
> **[8:11](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=491)** And in this case, this is going to move this additional file because it is the only file that is not in a folder, right?
>
> **[8:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=500)** So you could do then git clean minus, and then d for directories.
>
> **[8:26](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=506)** And n, we don't want to do it quite yet.
>
> **[8:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=508)** Now it's telling you that it's going to remove both the additional file and the random folder.
>
> **[8:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=513)** So a lot of times when you do a git restore, because it doesn't do anything to untracked files, it's going to leave those there.
>
> **[8:41](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=521)** And sometimes you need a perfectly clean folder.
>
> **[8:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=525)** And for that, you can use this git clean command.
>
> **[8:49](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=529)** Now be careful with it, because it can sometimes remove things that you don't want it to remove.
>
> **[8:54](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=534)** That's why it's a good idea to always do the minus n option, so that you know exactly what it is going to remove, and then you can use the git clean.
>
> **[9:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=544)** And let's see, what I can do is instead of the n, I'll do a df, that'll get rid of directories and files.
>
> **[9:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=550)** And so now, when I hit return, both of those will be gone.
>
> **[9:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=554)** So, git has a lot of these other utility commands that you're going to learn as you learn more and more about the software.
>
> **[9:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/git-stash-and-clean?u=76281980&t=561)** Some of them are still useful that I use them all the time, and I've shown you a couple of them in this video.

> [!info]- Semantic Content
>
> **CLI Commands:** git (36), make (1)
> **Code Keywords:** let (20), super (2), else. (1), continue (1), class, (1)
> **Definitions:** is called (1), is a  (1), is an  (1)
> **Tools:** github (2)
> **UI Navigation:** go to (2)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)


### 2. Working with GitHub

#### What is GitHub?
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=0)** - [Ray] GitHub is an online service that allows developers to work together.
>
> **[0:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=4)** It's sometimes known as a social coding website.
>
> **[0:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=7)** Now, GitHub is essentially a storage service in the cloud where developers can work with each other on code.
>
> **[0:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=14)** Now, everything you learned about Git is still applicable to GitHub.
>
> **[0:17](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=17)** What GitHub adds is a collaborative platform, and that's really just features that allow you to work with others.
>
> **[0:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=24)** So for example, it offers many tools for tracking changes to your site, assigning issues to people, and deploying your code.
>
> **[0:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=32)** Now, GitHub also has a lot of project management tools that lets you manage development projects.
>
> **[0:38](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=38)** You can create issues and assign them to developers while organizing your project in a Kanban board.
>
> **[0:44](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=44)** Although GitHub has a ton of features, there's really only a few things that you need to know.
>
> **[0:49](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=49)** First, you'll need to know how to set up a remote.
>
> **[0:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=52)** And to do this, you'll need to create a repository on GitHub and tie your local repository to the remote repository.
>
> **[0:59](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=59)** Next, you'll need to learn how to push changes to add your local files to the remote repository.
>
> **[1:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=65)** And then finally, you'll need to learn how to fetch any changes that have happened in the repository and pull those changes onto your local machine.
>
> **[1:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=74)** Now let's take a look at how we set up a repository.
>
> **[1:17](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=77)** So I'm going to go to GitHub.
>
> **[1:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=80)** I'm assuming that you've already opened a GitHub account and right now I'm in this repositories section of my account.
>
> **[1:26](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=86)** You can see my repositories.
>
> **[1:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=88)** Now in this tab, you can click on this new item right here.
>
> **[1:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=93)** But the quickest way to create a repository is by going to the github.new URL.
>
> **[1:40](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=100)** It does the same thing as clicking on that button.
>
> **[1:43](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=103)** The options here are to choose a previous template.
>
> **[1:47](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=107)** I'll show you how to make one later on.
>
> **[1:49](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=109)** And next, you can create a name for the repository.
>
> **[1:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=112)** The name can have letters and numbers, as well as either the underscore, period, or hyphen characters.
>
> **[2:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=120)** I almost always use lowercase, but technically you can also have uppercase characters in there.
>
> **[2:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=125)** Now the name does need to be unique to your account.
>
> **[2:08](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=128)** You can have two repositories with the same name, as long as they're on different accounts.
>
> **[2:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=134)** Now you even get a suggestion here for a repository name.
>
> **[2:18](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=138)** So I'm just going to click on that name and you can type in something else in here.
>
> **[2:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=143)** And GitHub will check what you're typing in for you.
>
> **[2:26](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=146)** So you can actually try to put in wild characters and notice that it's still going to just sort of convert 'em to a logical name that it likes.
>
> **[2:36](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=156)** So we'll just leave it with musical spoon.
>
> **[2:39](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=159)** You can then add a description, (keyboard clacking) and also choose whether the repo is a public or a private repo.
>
> **[2:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=172)** Private means that only users that you assign to this repo will be able to see it and do things to it.
>
> **[2:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=178)** Let's go ahead and add this as a private repo.
>
> **[3:01](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=181)** Now, you can also initialize the repositories with a number of different files.
>
> **[3:06](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=186)** You can add a ReadMe document.
>
> **[3:08](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=188)** We've already done that in the local repository.
>
> **[3:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=190)** You can also add the Git ignore file, which we've also done and also a license as well.
>
> **[3:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=196)** It'll automatically create some for you if you're just quickly using this website right here.
>
> **[3:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=202)** So I'm going to click on create repository, and that'll take you to this quick setup page.
>
> **[3:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=210)** Until you push some content to the repository, it will have these instructions for different ways to set things up.
>
> **[3:36](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=216)** But I often begin the repositories on my local directory.
>
> **[3:40](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=220)** And then I push things manually into GitHub.
>
> **[3:43](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=223)** So if you take a look at these instructions we've already done a lot of this.
>
> **[3:47](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=227)** This is creating a new ReadMe document, then initializing the repo, and then adding a ReadMe file, committing the file, and then creating a main branch.
>
> **[4:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=240)** And these two are the parts that we're going to be doing in the next video.
>
> **[4:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=244)** We're going to add a remote origin and I'll explain what that is.
>
> **[4:08](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=248)** And then we'll push the files that we have locally on to GitHub, and then you can do other things here.
>
> **[4:15](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=255)** So this is actually a shorter way.
>
> **[4:17](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=257)** If you do have an existing repository, you create the remote add to the repo.
>
> **[4:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=263)** And then you can add a main branch.
>
> **[4:25](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=265)** We've already got a main branch, so we wouldn't need to do this and then push the repository.
>
> **[4:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=270)** So really, you just need this right here as well as this.
>
> **[4:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=273)** And that's why I don't like to use these from the website.
>
> **[4:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=277)** I like to just type them in myself.
>
> **[4:39](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=279)** Now, working with GitHub is something that you can do whether you work with teams or not.
>
> **[4:44](https://www.linkedin.com/learning/learning-git-and-github-23011330/what-is-github?u=76281980&t=284)** There are benefits to having your project safely in the cloud so that if something happens to your computer, or perhaps if you're working remotely and you just need to get to some code that you've written, the code is still safely in the cloud and easy accessible to you or anybody who needs it.

> [!info]- Semantic Content
>
> **Tools:** github (14)
> **Code Keywords:** private (3), let (2), this. (2), this, (1), finally, (1)
> **Prerequisites:** you'll need (4), set up (2), setup (1)
> **Definitions:** is a  (2), is an  (1), known as (1), means that (1)
> **UI Navigation:** click on (3), go to (1)
> **CLI Commands:** git (2), make (1)
> **Env Vars:** url (1)
> **Cross-References:** in the next (1)

#### Pushing to GitHub
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=0)** - [Ray] Let's take our project and work on pushing the code to GitHub, so that we can see what it's capable of.
>
> **[0:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=5)** But first, we're going to discuss some of those commands that we saw earlier on the GitHub website.
>
> **[0:11](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=11)** The first was adding remotes.
>
> **[0:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=13)** Now the command for this is normally git remote add, and then the name that you want to add for the remote, and then the URL where you want to place this file.
>
> **[0:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=24)** The way that you connect your project to GitHub is by setting up this remote connection with this git remote command.
>
> **[0:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=30)** Now you need to pass along this name, as well as the URL where you want to host your repo.
>
> **[0:36](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=36)** You don't have to host it with GitHub.
>
> **[0:38](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=38)** There are other places where you can host it.
>
> **[0:40](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=40)** A lot of times your company will have a place where you need to post your repo.
>
> **[0:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=45)** And a very common name for the remote that you're using is origin.
>
> **[0:50](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=50)** So you may see that you're pushing to origin, and you're assigning that URL to the origin name so that you don't have to remember the URL, which can be pretty long.
>
> **[1:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=60)** You can add as many remote locations, which means that you can push your work to multiple places if you want to.
>
> **[1:06](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=66)** So you can add more than one remote, and that's sometimes useful if you need to push to a backup file somewhere else, as well as the remote where your items are hosted.
>
> **[1:19](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=79)** Now you can, of course, remove or rename the remotes with the git remote and the git rename commands.
>
> **[1:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=84)** You can see the commands here are pretty self-explanatory.
>
> **[1:27](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=87)** So git remote remove, and then you say the name that you want to remove.
>
> **[1:31](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=91)** And then git rename, you just give it the new name, as well as the old name in there.
>
> **[1:36](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=96)** And then, there is an option to list the remotes.
>
> **[1:40](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=100)** You can just use, actually, git remote, and it'll just give you the list of all the remotes available.
>
> **[1:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=105)** Or you can also use the git remote -v option, and -v means verbose.
>
> **[1:50](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=110)** It'll just list all the remotes with a bunch of additional information for them.
>
> **[1:55](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=115)** Now the other command that you have to know is how to push things from your local directory into GitHub.
>
> **[2:01](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=121)** That is done with the git push command.
>
> **[2:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=125)** Now push is how you move files from the local machine to GitHub, and local branches have to be connected to that remote version of the branch.
>
> **[2:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=134)** The first time you push, you have to add the -u option, which is the --set-upstream-to option.
>
> **[2:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=141)** So this --set-upstream-to is the longer version of -u right here.
>
> **[2:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=148)** And then, you put the name of the remote that you want to use, and then also the branch that you want to push.
>
> **[2:34](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=154)** Now, you can also issue a git push --all command, which I do often.
>
> **[2:39](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=159)** That's going to take all your local branches and push them all into GitHub, which is pretty convenient.
>
> **[2:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=165)** Now sometimes when you try to push a branch, GitHub will ask you to make the connection manually between the branch that you have on GitHub and the branch that you have locally.
>
> **[2:56](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=176)** There's a link between those.
>
> **[2:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=178)** And so sometimes, you have to use this other command called git branch --set-upstream-to.
>
> **[3:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=183)** And then, you add origin and the name of the remote branch.
>
> **[3:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=187)** And you'll run into that.
>
> **[3:08](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=188)** It'll just tell you whenever it's lost that connection, and it'll actually give you the command that you need to use, which you can copy and paste.
>
> **[3:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=196)** And that is pretty convenient.
>
> **[3:18](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=198)** So let's go ahead and see if we can connect these to GitHub, the work that we've been doing.
>
> **[3:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=204)** We're back on this page right here.
>
> **[3:26](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=206)** The only thing I really need from this page is the URL of the remote that I need to add.
>
> **[3:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=212)** The URL down here is the same as the URL of the repository with the .git extension.
>
> **[3:39](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=219)** So if you ever want to remember the git URL, it's just the same thing as the regular URL.
>
> **[3:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=225)** But let's go ahead and copy it from here.
>
> **[3:49](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=229)** And we'll go back into our project.
>
> **[3:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=232)** And I have some open files, this one from a previous video that's actually deleted.
>
> **[3:57](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=237)** So let's go ahead and just close the stuff out.
>
> **[3:59](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=239)** We'll leave the README up, and I'm going to start issuing some of these commands.
>
> **[4:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=245)** So the first thing I need to do is set up my remote.
>
> **[4:08](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=248)** So I'm going to issue a git remote add origin, and then I'll paste the URL.
>
> **[4:17](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=257)** And then, I'm going to use git push, and I can just push the origin.
>
> **[4:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=263)** But then I can also just use git push --all, and this will push all the branches.
>
> **[4:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=269)** Now I do want to show you how branches appear on GitHub.
>
> **[4:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=272)** So I have a couple of branches here, this fixheadline branch, as well as the main branch.
>
> **[4:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=277)** So I'm going to go ahead and push them all to GitHub.
>
> **[4:40](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=280)** And it's going to send them to GitHub, create these two new branches, and also create the relationships between the branch that is here locally, as well as the branch that will be sent to GitHub.
>
> **[4:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=292)** So remember the other command that you can use if you just want to push the main branch is git push -u.
>
> **[5:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=300)** That sets up the upstream link.
>
> **[5:02](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=302)** And then you would say origin main if you just want to send one of them.
>
> **[5:06](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=306)** I usually just push everything. That's just me.
>
> **[5:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=309)** So let's go ahead and clear this out, and take a look at this page on GitHub.
>
> **[5:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=314)** We're going to refresh this.
>
> **[5:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=316)** Since we've pushed a commit, you can see that our documents, the README file, license, and .getignore that we had locally is already on GitHub.
>
> **[5:25](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=325)** And if you click right here, you can see that you have multiple branches, the two branches that we pushed.
>
> **[5:31](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=331)** And you can say, I want to view all the branches here, and take a look at any of the branches that you have.
>
> **[5:38](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=338)** You can also delete them here, edit the branch names if you want to, and create something called pull requests, which we'll get to.
>
> **[5:47](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=347)** So I'm going to click back here to go back into my main folder.
>
> **[5:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=352)** And there's all kinds of other information, which I want to go to in the next video.
>
> **[5:56](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=356)** But pushing that first repository, it can be real exciting the first time you do it, but GitHub has so many options that it could be a little bit daunting.
>
> **[6:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/pushing-to-github?u=76281980&t=365)** I'll go over all those options in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** git (17), make (1)
> **Tools:** github (17)
> **Env Vars:** url (10), readme (2)
> **Code Keywords:** let (5), pass (1), else, (1), self (1), this. (1)
> **Cross-References:** in the next (2), previous video (1)
> **Documentation:** the readme (2)
> **Definitions:** means that (1), is an  (1)
> **UI Navigation:** go to (1)

#### GitHub options
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=0)** - [Instructor] Let's take a look at the typical GitHub repo, and I'll go over the different options that are available to you here.
>
> **[0:06](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=6)** Now you can divide the GitHub page into several different parts, so you can see that at the top, we have a kind of directory navigation of GitHub.
>
> **[0:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=16)** So if you want to, you can click right here to go back to your main menu.
>
> **[0:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=20)** There's also a dropdown on the left that gives you a little bit of functionality.
>
> **[0:25](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=25)** You can go to Issues, Pull requests, Projects, et cetera.
>
> **[0:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=29)** You can see that some of that matches what you see here in the main menu bar.
>
> **[0:35](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=35)** And to the right, you can find things like search, the new GitHub Copilot, and the ability to create different things here, so new repository, codespace, just et cetera.
>
> **[0:47](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=47)** In addition to that, you have a number of other buttons.
>
> **[0:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=52)** So for example, you can go directly to your issues, again, sometimes matching what you see down here.
>
> **[0:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=58)** Here, you can look at pull requests, which is the same as this, and here are your notifications, plus the ability to go to your profile and other additional places within the GitHub website.
>
> **[1:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=73)** Now, underneath that, you can see sort of the main tabbed navigation that gives you access to the main places that you can access in this website.
>
> **[1:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=83)** The things that appear here are controllable through your settings, so we'll take a look at those a little bit later.
>
> **[1:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=89)** Right underneath that would be the name of your repo as well with some additional social features, the number of people that are watching or looking at any changes that you made to this repo.
>
> **[1:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=102)** They'll get notifications whenever something happens.
>
> **[1:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=105)** So there's two people watching this repo right now.
>
> **[1:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=108)** Then the number of people that have forked, which means making a copy of a repo, and they'll have basically a duplicate of this particular repo that they can modify for perhaps adding some new features or making it their own.
>
> **[2:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=123)** And then finally, the number of people that have starred, which means that they have liked this repo.
>
> **[2:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=129)** And the more stars you have, the more popular a project is, and some of those will have additional sub-menus.
>
> **[2:15](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=135)** Underneath that is the place where you can control and look at your different branches for the project.
>
> **[2:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=142)** So you could see any of the additional branches that have been created, as well as tags.
>
> **[2:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=148)** Tags is how we create releases, and releases are a way of identifying the version of your project.
>
> **[2:36](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=156)** So you can see also here a little summary.
>
> **[2:38](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=158)** We have four branches and one tag, and you can click on these to go to modify those.
>
> **[2:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=165)** Here's a quick search for files within the current repo and a way of adding files directly right here.
>
> **[2:54](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=174)** So you can create files or upload files.
>
> **[2:56](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=176)** By the way, if you want to upload a file, you can also just drag and drop a file or a folder directly into this area right here, and it will also upload.
>
> **[3:06](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=186)** This code menu allows you to work with the code, and you can do a number of different things.
>
> **[3:12](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=192)** So you can download this to your local drive using a terminal, and you could use a git clone command, and this button right here will give you the URL copied to your clipboard.
>
> **[3:25](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=205)** You can also download any repo into a ZIP file or open it with a separate GitHub desktop application.
>
> **[3:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=212)** And you can see that you can download in different ways through HTPS, SSH, or using the GitHub Command Line Interface, a terminal tool.
>
> **[3:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=222)** Then in addition to that, you have Codespaces.
>
> **[3:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=225)** Codespaces are a way to get to an editor in the cloud where you can edit these files with a full-featured version of Visual Studio Code.
>
> **[3:55](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=235)** And finally, we have Copilot, which is a way to ask questions about your current project.
>
> **[4:02](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=242)** Now, not everybody will see Copilot.
>
> **[4:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=245)** This is a paid option, so you may not see this on your own project.
>
> **[4:11](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=251)** By the way, Copilot is something that you also have access to right here, so if you click on this button, you'll be able to ask questions about your repository to GitHub's AI.
>
> **[4:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=263)** Pretty useful.
>
> **[4:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=263)** Now, on the right-hand side, you get some information about the current repository.
>
> **[4:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=268)** This will be what shows up when people are searching for repositories using the traditional GitHub search, which you can see right here.
>
> **[4:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=277)** So it's a good idea to fill out this information, and that will let people know what your project is about when it comes up in search results.
>
> **[4:47](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=287)** So you can see we click on that, and it lets you type in a description, a URL for a website, et cetera, et cetera.
>
> **[4:53](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=293)** Underneath that, you can get links to different things, and these will be here depending on the kind of files and options that you have selected for your project.
>
> **[5:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=304)** So you can see, for example, that because I have added an MIT license here, the MIT license is also showing here.
>
> **[5:11](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=311)** There is some activity on this repository, so that's showing here.
>
> **[5:15](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=315)** That's similar to what's available in the Insights.
>
> **[5:18](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=318)** Plus you can see the number of stars, the people watching, and the forks.
>
> **[5:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=322)** Again, some of your activity will just show up here as a way of displaying all the information quickly.
>
> **[5:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=329)** Here's where you can find any releases that you have created.
>
> **[5:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=332)** So you can see that I've done a release here.
>
> **[5:35](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=335)** This is just one version of the website.
>
> **[5:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=337)** If I was doing a version 2.0, it would also let you access that here.
>
> **[5:41](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=341)** And then Deployments are for when you create GitHub pages.
>
> **[5:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=345)** more on that later.
>
> **[5:46](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=346)** You can see that we've done several of them.
>
> **[5:49](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=349)** Now, in the main section, you'll have access to the files available in GitHub.
>
> **[5:54](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=354)** The file that you see right here is called the README file, and you can find that file right here.
>
> **[6:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=360)** So if we were to open this, you will be able to see the file that generates this section right there.
>
> **[6:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=367)** Notice that in addition to the README file, you have access to the license.
>
> **[6:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=373)** That will appear only if you have a LICENSE file right here.
>
> **[6:17](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=377)** And if we click on this Edit tool, you'll be able to edit that README file, and you can just type in whatever text you want here.
>
> **[6:26](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=386)** The format for this document is Markdown.
>
> **[6:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=389)** I'll be showing how to work with that later.
>
> **[6:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=392)** And you can get a live preview here that shows you what the file will look like.
>
> **[6:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=397)** And you can also go to Edit files right here.
>
> **[6:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=402)** Now, by the way, the way GitHub works is if for some reason you want to create a file, as I mentioned, you can hit the Add file here and create a new file.
>
> **[6:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=411)** So let's click on that right now, and you can just give it a file name here, something like SAMPLE.md.
>
> **[7:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=420)** If you wanted to put that file in a folder, you would just add the name of the folder here, newfolder, and then you would hit the slash key.
>
> **[7:08](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=428)** That would create a new folder right there, and then put this file inside that folder.
>
> **[7:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=433)** Now, you can't have folders without anything in them, but if you put in an invisible file, which is any files that start with a period, then it will be able to retain that folder.
>
> **[7:27](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=447)** I'm going to go ahead and Cancel changes.
>
> **[7:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=449)** I don't need that folder or that file, but I just wanted to show you that.
>
> **[7:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=452)** Creating a new file is something that you do pretty often.
>
> **[7:36](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=456)** Now to the right of every file, you can see that there's a dropdown, and that will give you the index of the current document.
>
> **[7:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=465)** So you could see if you've got a very long page with a lot of headlines, all the headlines and sub headlines will appear right here as an outline.
>
> **[7:54](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=474)** So let's go back to the homepage of this website, and let's go over the different tabs at the top.
>
> **[8:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=480)** So the first tab is the one that you're seeing right now, the code on your repository.
>
> **[8:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=485)** It has all the folders and all the files.
>
> **[8:08](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=488)** The next file is something we call Issues.
>
> **[8:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=490)** Issues are how you add potential changes that you want to be able to discuss with others.
>
> **[8:18](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=498)** They're pretty easy to use.
>
> **[8:19](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=499)** We'll cover those as well later.
>
> **[8:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=501)** There's a way that you can create new issues here and communicate about potential issues right here on this page.
>
> **[8:31](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=511)** Something that looks similar to Issues but has a different functionality is Pull requests.
>
> **[8:36](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=516)** Pull requests are for when you want to make changes to your website, and you're asking somebody to make some changes and merge them with your main project.
>
> **[8:47](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=527)** That's how we work with GitHub projects.
>
> **[8:49](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=529)** We request changes to be made, and then somebody accepts those changes.
>
> **[8:54](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=534)** I'll be covering that a little bit later as well.
>
> **[8:57](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=537)** Then optionally, you can have discussions about different features or just general discussions, votes, ideas, polls and other things.
>
> **[9:08](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=548)** And if you have that option turned on in the settings, I'll show you how to do that in a minute, you'll be able to see this tab right here where you can access those features.
>
> **[9:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=560)** Actions are a way to create automation that allows you to use either existing predetermined automations that somebody else has made or automations that you can make to make things happen on your website, depending on differing events.
>
> **[9:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=577)** So for example, you can ask that somebody get a note or that something happens whenever somebody merges a pull request.
>
> **[9:44](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=584)** So actions are automation, and they are little programs that you can write to create workflows that take care of things for you.
>
> **[9:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=591)** Projects are how you organize items in GitHub.
>
> **[9:56](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=596)** Again, I'll show you that later.
>
> **[9:57](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=597)** They are related, or they can be related to issues.
>
> **[10:02](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=602)** So when you create a project, you can create items that help you determine who's going to take care of an item in a repo, and you can add an issue that lets you discuss that with others and then resolve that issue and track how that issue is being taken care of.
>
> **[10:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=622)** Wiki is a very simple way of adding documentation.
>
> **[10:26](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=626)** You can see a sample right here, and that documentation is probably the simplest way to create a text sort of doc for your GitHub repository.
>
> **[10:39](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=639)** Security tab obviously has security features.
>
> **[10:43](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=643)** These are very deep, and we won't be discussing them here, but you can ask GitHub to monitor your website and take care of what happens when potential security vulnerabilities are activated.
>
> **[10:57](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=657)** Then you have Insights.
>
> **[10:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=658)** Insights are ways of tracking the activity on your website visually with different charts that it will automatically generate, depending on what somebody's doing on the website.
>
> **[11:11](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=671)** And you can see here that you'll get all kinds of different graphs, depending on the option that you choose here.
>
> **[11:19](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=679)** Finally, Settings is where you control how the repository works.
>
> **[11:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=684)** There are additional settings available in your profile.
>
> **[11:27](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=687)** So for example, Settings will let you control what tabs you see at the top of the screen.
>
> **[11:31](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=691)** You can see here that if you don't want to use Wikis, you can turn them off.
>
> **[11:35](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=695)** And if we do that, you'll notice that now Wikis are gone from this list.
>
> **[11:40](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=700)** The same thing with, for example, Discussions, if you don't want to use those, you can turn them off, and they will disappear from the top of the screen.
>
> **[11:50](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=710)** And in this main section, you can also create a repository or ask that this be a template repository.
>
> **[11:59](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=719)** So it means that if you want to start a new project based on this project, you can make this a template, and whenever you create a new repository through github.new, it would pick all of the files, the licenses, and everything else you have set up in this project and basically make a copy of it.
>
> **[12:18](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=738)** There's a lot of options here, and not all of them are super important, or they're so important that I have different sections that will show you how to do things.
>
> **[12:27](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=747)** At the very bottom is where you would delete a repo or change the visibility, whether you want to make a repo public or private.
>
> **[12:35](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=755)** And this is where you delete the repository.
>
> **[12:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=757)** It's dangerous to do that 'cause there's no going back, as it says.
>
> **[12:41](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=761)** But this is how you would delete a repository, and if you click on this, it will tell you to do some additional things just to verify that you really want to do that.
>
> **[12:50](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=770)** I definitely don't want to delete my repository right now.
>
> **[12:53](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=773)** Some of the other important parts of this repository is the collaborator.
>
> **[12:59](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=779)** Collaborators is where you can create, rephrase.
>
> **[13:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=783)** Collaborators is the simple way of adding people to your existing project that will give them the ability to modify and approve pull requests.
>
> **[13:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=794)** You can see that there are a number of other settings here for some of the things that are available up here in the menu.
>
> **[13:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=801)** So we can go to Branches and add some protection rules, take a look at the tags and some of the other things here.
>
> **[13:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=810)** So access the options for actions, and everything else in here is pretty great.
>
> **[13:36](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=816)** Pages is also important.
>
> **[13:38](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=818)** This is where you can create a GitHub page that acts as a website.
>
> **[13:43](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=823)** I'll show you how to do that later on.
>
> **[13:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=825)** And Codespaces is where you would manage your prebuilt for your Codespaces.
>
> **[13:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=831)** This is a way of asking GitHub to preload certain things so that when people copy your website, and they bring it up into a Codespace, it works a lot quicker.
>
> **[14:01](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-options-27982777?u=76281980&t=841)** So you can see that the options that you have in GitHub are pretty thorough, and you'll see how we work with some of these features as we continue with our exploration of GitHub.

> [!info]- Semantic Content
>
> **Tools:** github (21), terminal (2), command line (1), visual studio (1)
> **Code Keywords:** let (7), delete (4), this, (3), finally, (3), interface (1)
> **UI Navigation:** click on (6), go to (5), dropdown (2), drag and drop (1), in the menu (1)
> **CLI Commands:** make (7), find (3), git (1), ssh (1)
> **Env Vars:** readme (3), url (2), mit (2), zip (1), htps (1)
> **Definitions:** is a  (4), means that (2), is called (1)
> **Analogies:** for example (5), similar to (2)
> **Exercise Files:** template (2), github repo (1), zip file (1)

#### Understanding GitHub flow
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=0)** - [Instructor] GitHub flow sometimes called GitFlow is a branch-based workflow that is popular when using the combination of Git with a tool like GitHub.
>
> **[0:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=10)** Using GitHub Flow your main branch has the current copy of the code which has never changed directly.
>
> **[0:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=16)** In order to modify the code, you start by checking out a copy of the main branch.
>
> **[0:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=22)** This is sometimes called a feature branch, in order to make changes and allow others to work on and collaborate on changes.
>
> **[0:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=30)** To work on features, you pull the feature branch into your working environment and then make changes which are then committed and push back to the feature branch.
>
> **[0:39](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=39)** Ideally, each commit constitutes an isolated and complete change.
>
> **[0:44](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=44)** You continue to commit and push changes until you're ready to ask for feedback, or merge the changes into the main branch.
>
> **[0:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=52)** A pull request is a process for moving code from your feature branch back onto the main branch.
>
> **[0:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=58)** When you're ready to move things back into the main branch, you can request that what you want to do is take the change you've made in one branch and combine it or merge it into another branch.
>
> **[1:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=69)** This allows you to request feedback so that others can check and discuss the changes you've made to a feature before it's merged into the main project.
>
> **[1:18](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=78)** Reviewers can leave feedback and comments which you can answer plus insert images or code suggestions directly in the pull request sequence.
>
> **[1:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=88)** Once the pull request is approved, someone will combine this request with the main version of the code.
>
> **[1:34](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=94)** One of the users with the proper access can start the merge process with the main branch so that the changes appear in the official version of the code.
>
> **[1:43](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=103)** Because others may have merged items since you originally made a copy of the main repo, you may need to review the differences between the changes you made and what others have done.
>
> **[1:54](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=114)** Finally, once the feature branch has been merged you can delete the feature branch to indicate the process is complete.
>
> **[2:01](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=121)** Let's take a look at a very simple version of this on the project that we've been working on.
>
> **[2:06](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=126)** So I'm going to do all this directly on GitHub.
>
> **[2:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=129)** Normally, you would pull this into a working environment but we can use GitHub as its own working environment.
>
> **[2:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=136)** So to initiate a change, I'm going to click on this Edit button right here to edit the README file.
>
> **[2:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=141)** Now all I'm going to do here, is just put in an exclamation point and that's going to make a change to the file.
>
> **[2:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=148)** So I'm going to hit Commit to commit this change and I'm going to leave this information as it is.
>
> **[2:34](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=154)** But what I'm going to do, is to create a new branch instead of modifying the main branch so that I can start a pull request.
>
> **[2:44](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=164)** And so I'm going to call this "updateheading", and I'm going to say Propose changes.
>
> **[2:53](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=173)** So what this will do is give you an opportunity to create a pull request.
>
> **[2:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=178)** Notice that it went ahead and checked that the change that you're making is able to be merged so there doesn't appear to be any problems with other things that people may have done in the meantime.
>
> **[3:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=189)** And we're going to hit Create pull request to create a pull request.
>
> **[3:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=193)** Now what I'm doing this I can also add and ask other people to review the request that I am making right here.
>
> **[3:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=201)** I can also add assignees to give it to different people to work on whatever I'm doing, and also add labels, and lots of other stuff here.
>
> **[3:31](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=211)** So I'm not going to do very much here.
>
> **[3:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=213)** I'll just hit Create pull request and this will create a pull request.
>
> **[3:38](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=218)** Now as this request is made, you can see that it checked to see that I could merge this back into the main project.
>
> **[3:46](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=226)** But it also gives you an opportunity to comment and discuss things with others.
>
> **[3:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=232)** So you can say something here like, I'm going to put the @ sign and I'll say, "TerryDactyl, please take a look at this fantastic new change."
>
> **[4:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=245)** And I'm going to say, Comment.
>
> **[4:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=247)** So this will get TerryDactyl a notification and it will allow us to discuss this project further.
>
> **[4:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=254)** Now, let's say that we've been discussing this for a while and we agreed that it's a good idea to go ahead and merge this into the main branch.
>
> **[4:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=263)** So now instead of just having one branch, we have two branches.
>
> **[4:27](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=267)** This new feature branch, you could see that it's called updateheading.
>
> **[4:31](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=271)** So that's the new branch, and we have the original main branch.
>
> **[4:35](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=275)** So here I can keep on commenting or I can hit merge pull request.
>
> **[4:38](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=278)** And this is going to allow me to confirm that I want to do this.
>
> **[4:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=282)** So I'm going to hit Confirm merge and this will be merging the changes back into my main branch.
>
> **[4:50](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=290)** And now that I have done that, I can hit this Delete branch button right here.
>
> **[4:55](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=295)** Because whenever you're done with an update or a branch that you've merged into main, it's common to go ahead and delete the branch.
>
> **[5:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=303)** So we're going to go ahead and do that.
>
> **[5:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=305)** Pull request has successfully been merged and closed and GitHub made a note of every one of those different parts of this process that I've been working on.
>
> **[5:15](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=315)** So now if I go back into the code, I'll see that my fantastic exclamation point has been merged into the main branch.
>
> **[5:25](https://www.linkedin.com/learning/learning-git-and-github-23011330/understanding-github-flow?u=76281980&t=325)** And that's basically what a normal GitFlow process looks like in a very simplified form.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (3), let (2), continue (1), finally, (1), this. (1)
> **Tools:** github (6)
> **CLI Commands:** make (3), git (1)
> **Definitions:** is a  (2)
> **Env Vars:** readme (1)
> **Documentation:** the readme (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### Learning Markdown
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=0)** - [Instructor] Developers and writers often use a language called markdown to write content, and you'll find it often in many GitHub repos.
>
> **[0:08](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=8)** Let's take a look at the basics of that format and see how it works and how you can use it.
>
> **[0:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=13)** To play with this, I'm going to be using this repository in my account.
>
> **[0:17](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=17)** I highly suggest that you either create your own repository or just open an existing repository.
>
> **[0:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=23)** And we'll play around with this Readme file.
>
> **[0:27](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=27)** GitHub has a really good built-in editor, so we're going to click right here to go into that editor.
>
> **[0:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=33)** And you'll see that you'll just get the text of the project, and then if you hit the preview button you'll be able to see the results right here on the preview.
>
> **[0:44](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=44)** So let's go back here into edit and review some of the things that you can do with markdown.
>
> **[0:49](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=49)** So there is a syntax for writing headlines and you can create headlines of different levels.
>
> **[0:55](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=55)** This is going to correspond to HTML headlines.
>
> **[0:59](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=59)** In HTML, there are six levels of headlines.
>
> **[1:02](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=62)** So there's a headline level one, headline level two and then so on and so forth until headline level six.
>
> **[1:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=70)** And you create the different levels of headlines by adding pound signs or hashtags right before the headline that you want to write.
>
> **[1:19](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=79)** There's also an alternative way of writing this and that is by putting an equal sign underneath the headline for a headline level one or a hyphen underneath a headline level two.
>
> **[1:31](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=91)** And you can put in just one, but it's usually common to make them fit the entire headline like this.
>
> **[1:39](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=99)** So let's take a look at how that works.
>
> **[1:41](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=101)** You can see that we already have a headline level one.
>
> **[1:44](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=104)** So if we just press return here and we do two, we can say "Subheadline."
>
> **[1:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=111)** And if I hit the preview button, you'll see that now you get a sub headline.
>
> **[1:55](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=115)** And as I mentioned, if you want to, you don't need to have the hashtags.
>
> **[2:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=120)** You should be able to either put in equal signs and you don't need to do a lot of them if you don't want to.
>
> **[2:08](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=128)** And that'll create also a headline level one.
>
> **[2:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=130)** And also if you want to, a headline level two with just hyphens, which is pretty cool.
>
> **[2:17](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=137)** And sometimes this is a little more readable, I would say.
>
> **[2:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=141)** In addition to headlines, there's a number of different styles for regular formatting.
>
> **[2:27](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=147)** So for example, you can use two asterisks before and after a word to make that word "bold."
>
> **[2:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=153)** Or you can also use underscores.
>
> **[2:35](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=155)** If you just use a single asterisk, you can make that word italic.
>
> **[2:40](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=160)** And this is actually something that is a normal markdown but it is in GitHub markdown.
>
> **[2:47](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=167)** If you put in two tilde characters around some text, then you'll create some strike through text.
>
> **[2:54](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=174)** If you want to create a block quote or a quotation, you put in a greater than sign with a space right before the words.
>
> **[3:02](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=182)** And you can also create horizontal rules or lines by writing three different hyphens, three different asterisks, or three different underscores.
>
> **[3:12](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=192)** So we'll go back into this project and you'll see that if I put in either three different asterisks and hit the preview button, you can see that I get this line right here.
>
> **[3:26](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=206)** So that's pretty cool.
>
> **[3:27](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=207)** If I want to make a word bold, then I can hit double asterisks here.
>
> **[3:34](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=214)** Or I can pick another word and make it italic by either putting one asterisk or an underscore.
>
> **[3:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=222)** And you can see that it's actually given you a little bit of a preview directly in the editor for some of these things.
>
> **[3:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=228)** So that's pretty convenient.
>
> **[3:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=232)** And as I mentioned, if you wanted to maybe strike through some text, you can put in two tilde characters and that will create a strike through.
>
> **[4:01](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=241)** And again, it is previewing that for you directly in this built-in editor, if you want to create a block quote or a quotation, you put in a greater than sign.
>
> **[4:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=250)** Now that's not getting previewed, so we'll hit the preview button.
>
> **[4:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=253)** And you could see that this is sort of the quotation format and you can see the strike through here as well as the italics and the bold right here.
>
> **[4:25](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=265)** If you want to create lists, you can use hyphens, asterisks, or plus signs.
>
> **[4:31](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=271)** And you create one of those for each item on your list.
>
> **[4:35](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=275)** You can also create ordered lists by putting in a number like this at the beginning of a line.
>
> **[4:41](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=281)** And it doesn't actually matter what the number is, it's going to sort of count how many items there are and it will make the numbers for you.
>
> **[4:49](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=289)** If you want to indent a list, then you just add a few spaces like this.
>
> **[4:54](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=294)** So let's take a look at how we can do some of that.
>
> **[4:57](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=297)** So I'm going to go back into edit here.
>
> **[4:59](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=299)** And I'm just going to put in "Item One."
>
> **[5:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=304)** And notice that when I hit return it actually inserts that same sort of character.
>
> **[5:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=309)** "Item Two," and as I mentioned, you can also use asterisks.
>
> **[5:15](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=315)** "Item One," and it remembers what you are typing in.
>
> **[5:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=320)** "Item Two."
>
> **[5:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=323)** And if you want to indent, you just indent it with spaces.
>
> **[5:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=329)** And then when you type in another one, it will remember that indentation automatically, which is pretty cool.
>
> **[5:38](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=338)** And you can see how it works that out.
>
> **[5:40](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=340)** Another thing that you can do, as I mentioned, is put in numbers, and we can say one, two here.
>
> **[5:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=348)** And notice that it'll say one and two.
>
> **[5:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=352)** And as I mentioned, oftentimes you'll end up creating a lot of these and then you'll want to sort of switch them around occasionally.
>
> **[6:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=360)** So I tend to just actually type in always number one for all my numbers.
>
> **[6:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=365)** And when this gets previewed it just counts how many there are and automatically number the second one, number two.
>
> **[6:12](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=372)** So that's pretty handy.
>
> **[6:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=374)** Now, in terms of links, you can create a number of links in different ways.
>
> **[6:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=380)** It will automatically convert links like HTTP or HTTPS to clickable links.
>
> **[6:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=388)** You can also manually create a link by putting the link name in brackets.
>
> **[6:34](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=394)** And then right next to that, adding parentheses for the URL.
>
> **[6:39](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=399)** And if inside the URL you add a space and then something in quotes, it will make this text into the title of the link.
>
> **[6:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=408)** You can also create a link that doesn't have a URL and define the URL later on.
>
> **[6:55](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=415)** So this LinkedIn link right here is tied to this LinkedIn in brackets down here.
>
> **[7:02](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=422)** And it will click into this link.
>
> **[7:06](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=426)** So it'll sort of look the link up by reference, and that's what these are called, reference links.
>
> **[7:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=433)** And then you can put in the link later on.
>
> **[7:15](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=435)** Usually, these go like at the bottom of your page.
>
> **[7:18](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=438)** Some people like that sort of format.
>
> **[7:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=441)** And you can also, of course, use numbers and double brackets like this so that you're saying that the label will be learning, the thing that you click on will be learning.
>
> **[7:31](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=451)** And then this is pointing to item number one, or it can be something other than a number one here.
>
> **[7:38](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=458)** But you'll see that notation often.
>
> **[7:40](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=460)** So let's go ahead and try that out a little bit.
>
> **[7:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=462)** So typically if you have a word that you want to link up, then you just put the brackets around it like this.
>
> **[7:50](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=470)** And then you can put in like HTTPS, colon, slash, slash [Linkedin.com](https://Linkedin.com).
>
> **[7:57](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=477)** And even if you don't put in the sort of reference at the beginning, if you type in a link by itself, it will automatically assume that you want that link to be clickable.
>
> **[8:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=490)** You may have to preview it, but you can see how it did the link here and it did the link here.
>
> **[8:15](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=495)** So a lot of pretty interesting ways of creating links.
>
> **[8:19](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=499)** To create an image is pretty much the same as creating a link with a link reference, and then the link URL right afterwards.
>
> **[8:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=509)** And so you can just add a exclamation point right before this, and you can still use the same sort of notation where you create just a reference.
>
> **[8:39](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=519)** And then later on you can put in the link or the URL to that reference.
>
> **[8:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=525)** Again, usually this goes at the bottom if you're using that notation.
>
> **[8:49](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=529)** This last one is how you create an image link.
>
> **[8:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=532)** And I know it looks really complicated, but if you think about it, remember: a reference then a parentheses link is how you create a normal reference.
>
> **[9:02](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=542)** If it's an image, it gets this extra exclamation point.
>
> **[9:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=545)** So basically this entire thing right up to here it's just how you would create an image.
>
> **[9:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=553)** And if we put that inside a link reference, like a normal link reference with brackets, and then the parentheses you create basically an image link.
>
> **[9:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=564)** So I'm going to copy this one and I'm going to just use it in here.
>
> **[9:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=569)** So let's go ahead and hit edit here.
>
> **[9:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=572)** And I'll paste this and then hit the preview button.
>
> **[9:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=577)** And you'll see that it is an image, but the image is actually also a link.
>
> **[9:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=582)** So that's a really useful one to have.
>
> **[9:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=585)** If you want to do some code, you can either just put the code in tick marks or you can put the code in a code block.
>
> **[9:53](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=593)** So let's go ahead and do that because I can't show it to you in these slides.
>
> **[9:56](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=596)** It doesn't do that very well.
>
> **[9:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=598)** So I'm going to hit the edit button here.
>
> **[10:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=600)** And I'm going to just add.
>
> **[10:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=603)** I'll go ahead and delete these links.
>
> **[10:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=605)** And I'm going to go ahead and add some tick marks here.
>
> **[10:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=610)** And this will become a piece of code.
>
> **[10:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=613)** So if we hit preview, you can see that it shows like this.
>
> **[10:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=616)** And if I want some more complicated code what I can do is put in three tick marks and that creates a code block.
>
> **[10:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=624)** And then do that again at the end.
>
> **[10:26](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=626)** And then I can use any sort of language here.
>
> **[10:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=629)** So I can say "let X," I'm going to use JavaScript here.
>
> **[10:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=633)** "Let X equals five."
>
> **[10:35](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=635)** And then I'll do "console log X" and it will try to guess what this language is.
>
> **[10:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=642)** So if I hit the preview button, let's see.
>
> **[10:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=645)** I actually didn't give you any syntax highlighting or color but it did give you this nice little copy button.
>
> **[10:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=652)** So if you do put code, you can allow people to copy that code by clicking on this little icon that it gives you.
>
> **[10:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=658)** However, if you also put in a language reference here, so if I say "js," it's going to color code it as if it was JavaScript.
>
> **[11:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=667)** And that can be pretty handy.
>
> **[11:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=669)** So markdown is a fantastic language.
>
> **[11:12](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=672)** There's a ton of extensions to it.
>
> **[11:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/learning-markdown?u=76281980&t=674)** We'll take a look at some of those in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), this. (4), this, (2), switch (1), delete (1)
> **Env Vars:** url (6), html (2), https (2), http (1)
> **CLI Commands:** make (7), find (1)
> **Definitions:** is a  (4), is an  (1)
> **Tools:** github (3)
> **URLs:** [linkedin.com](https://linkedin.com) (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** click on (1)

#### GitHub Markdown additions
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=0)** [Instructor] Over time, GitHub has added improvements to the main markdown language.
>
> **[0:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=4)** So much so that this version of GitHub is known as GFM or GitHub Flavor Markdown.
>
> **[0:12](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=12)** Now, some of these are going to work anywhere in GitHub and some will only work in some places, so I'll try to point those out to you.
>
> **[0:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=20)** First is the addition of footnotes.
>
> **[0:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=23)** You may recognize that this is very similar to the references, but there is a slight difference.
>
> **[0:31](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=31)** So you basically add in brackets and then you use the caret symbol like this and you put in a number and that will point to a footnote like this at the bottom that has the reference.
>
> **[0:44](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=44)** And these display really interestingly so let me go ahead and I'll come underneath this paragraph right here and just paste that code.
>
> **[0:55](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=55)** So this is just what was in the other page, it's in brackets, caret one and then another footnote right here, and then the references right underneath, and notice that they're right underneath, but when I preview, you'll see that it'll have the footnote references right here, but if I click on 'em, they actually scroll all the way to the bottom and these references appear after this underline of this horizontal rule.
>
> **[1:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=80)** And then the references are numbered and they have a way to get back to the original references, so if this page was very long it would then return you back up to this footnote.
>
> **[1:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=92)** So that is pretty cool and I think kind of useful that you can just add these wherever you need to sort of have footnotes in your document.
>
> **[1:44](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=104)** Now there's also a way to create tables and the way that these works is by creating these pipe characters and then you put in a sort of title for your table.
>
> **[1:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=118)** So this is kind of like the headings of the tables.
>
> **[2:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=120)** And then underneath you have another set of pipe characters.
>
> **[2:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=124)** And the ones on the outside are actually optional so this one and this one are actually optional and the spacing in between here is also a little bit optional, so notice that I'm just making everything align nicely right here, but it doesn't really matter if I do that although most of the time you're going to see that it's kind of the preferred method to make 'em look really nice.
>
> **[2:26](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=146)** Now underneath you get a pipe character and then a number of hyphens, and if you want to specify that a certain column should be centered, then you can put these two columns on the edges, and by default everything's going to left align.
>
> **[2:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=162)** So if you want to right align, you can put in a colon at the end and then these numbers would all line up.
>
> **[2:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=168)** So let me go ahead and go into the code and I'm going to paste this right here, right and we'll hit the preview button and you can see that they display really nice.
>
> **[3:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=180)** Notice that this one is right aligned, so everything aligns to the right.
>
> **[3:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=185)** This center column is centered, and the first sort of heading section is all bolded.
>
> **[3:12](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=192)** And then every other row is kind of highlighted in a slightly different color.
>
> **[3:17](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=197)** So that's pretty cool and let me just show you that the spacing actually doesn't matter, so I could just have say two of these, two of these and nothing has to align.
>
> **[3:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=208)** It's just that it looks a lot nicer if everything is aligned, so you'll often see that people just keep on adding these right here to make everything look super nice.
>
> **[3:40](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=220)** Now there is a little helper for this known as a slash command, so sometimes when you type in the slash, you'll get a sort of popup list of different commands that you can use.
>
> **[3:54](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=234)** So to do that we're going to have to go to a pull request and notice that if I do a slash right here I'll get a list of sort of options.
>
> **[4:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=243)** And you can see here that I can add a details section just like I showed you before, but I can also add a code block and then specify the code say JavaScript, and it gives me that nice little helper.
>
> **[4:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=256)** And I can also do a table and then it's going to ask me how many columns and how many rows and it's just going to sort of fill that out for you.
>
> **[4:26](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=266)** So a nice little helper, but it's only available when you are in an issue or a pull request.
>
> **[4:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=272)** But tables are so common that just about any other version of markdown even the ones not in GitHub have adopted that tables format.
>
> **[4:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=282)** There's also a way to create something called a task list and this is sort of a checklist.
>
> **[4:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=288)** The way that you do this is by creating an unordered list and then in brackets either put in an X for a checked task or put a space in between the brackets for a an unchecked sort of box list.
>
> **[5:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=303)** Just take a look at this and I can do this, actually just here I'll paste them in this pull request and if I hit preview, you could see that it shows this sort of as check boxes that you can work with in some places depending on where you put these.
>
> **[5:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=320)** So when you work with GitHub projects, these will be actually checkable and they will be sortable as well, so that is actually pretty nice, I love task lists.
>
> **[5:31](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=331)** There's also a way of putting in almost any HTML, and one of the ways that you can use that is by creating a collapsed details section.
>
> **[5:40](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=340)** So if you add this into some code, let's go back into our project and I'll go over to sort of just a regular page here and I'm going to paste this in here so notice it's basically the details tag here and here, and then a summary section, as well as a header and some body copy here.
>
> **[6:02](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=362)** And when I hit preview, that section will be collapsed with this title right here, and then if I click on this, it'll show the header and the body copy, so quite useful, and I think if you have, you know, a page that has a ton of content, that's a cool way of making it fit a little bit better and giving people the option to expand things.
>
> **[6:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=384)** So there's also another bunch of other additions, you can drag and drop a bunch of different kinds of documents into GitHub, so you can use any sort of graphic, pings, gifs, JPEGs, et cetera, and notice that you can also drag and drop movies.
>
> **[6:40](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=400)** There are some size limitations, I think it's about 50 megabytes for like audio and video files.
>
> **[6:49](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=409)** But look, you can even just drag and drop a zip file or a PDF and it's going to upload those and also link to them.
>
> **[6:57](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=417)** And there's also a way of adding hashtags.
>
> **[7:01](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=421)** Hashtags in pull requests as well as issues and discussions will let you refer to another issue.
>
> **[7:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=430)** And add signs will pull up the names of the people on your project, so those are pretty useful.
>
> **[7:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=436)** In pull request issues and discussions, you can also refer to colors.
>
> **[7:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=442)** You can also hit the colon and then type in an emoji.
>
> **[7:25](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=445)** And if you need to put in something like a slash character, then you can escape characters with the backwards slash.
>
> **[7:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=452)** So let's take a look at some of those different options.
>
> **[7:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=457)** So let's go ahead and come in here.
>
> **[7:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=462)** And noticed that if I put in a hashtag here, it doesn't do anything.
>
> **[7:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=465)** If I do an @ sign, it's not going to do anything either.
>
> **[7:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=468)** And if I do an emoji though, so if I hit the colon character and I start typing something in, it's going to give me a list of emojis and that's pretty cool even in this kind of editor.
>
> **[8:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=483)** Now, if I go over into sort of the pull request version of this, this is going to be a little more flexible, so if I say @ it's going to list the people on the project, right?
>
> **[8:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=494)** If I hit the hashtag, it's going to look at all the issues or the pull requests that are currently open and let me refer to those as well.
>
> **[8:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=504)** And if I type in a hexa decimal color, so let's say FABCDE here, if I type it into these tick marks, which will be a code block, they actually display as code, but also with a preview of the color, which is sort of useful.
>
> **[8:44](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=524)** And if I hit the colon here, you could see that it actually immediately refers to the list of emojis and I can type in something else here to get, you know sort of the emoji referring to that text which is also pretty cool.
>
> **[9:01](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=541)** There is also a way of doing different alerts.
>
> **[9:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=544)** Again, these only work in pull requests and discussions and issues, but they're pretty neat.
>
> **[9:12](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=552)** So if I come over here into this pull request, I'm just going to paste this, so basically, it's like a block quote with a bracket and then you can have notes, important or warning sort of symbols.
>
> **[9:27](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=567)** And when I hit preview you can see that they get these different colors which are a pretty nice way of creating a little bit of enhancement to your pull request issues and discussions.
>
> **[9:39](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=579)** There are even ways of using mermaid graphs.
>
> **[9:43](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=583)** So you can actually do mermaid and there is a number of other sort of formats that you can use.
>
> **[9:50](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=590)** So let me show you how that works.
>
> **[9:53](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=593)** So Mermaid is a sort of syntax for creating I guess simple charts is what I would call it.
>
> **[9:59](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=599)** So I'm going to paste this in here.
>
> **[10:01](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=601)** And let's see, we will hit the preview button and notice that it gives you like a nice little interface and you can seek kind of a flow chart.
>
> **[10:12](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=612)** So this is like a flow chart format.
>
> **[10:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=614)** There's also a way of doing maps and a few other things.
>
> **[10:18](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=618)** You can look in the documentation for some of these different formats.
>
> **[10:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=622)** This is way too complex for me to discuss those formats and how you use them but you can look them up and they're pretty awesome.
>
> **[10:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=630)** There's also some HTML that you can't use.
>
> **[10:34](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=634)** So if you type in any of these for obvious reasons into a document, into like a marked on document it's going to sort of not let you put these because obviously you don't want to do like an iframe or an embed and just kind of let people add content into you know, your GitHub project without permission.
>
> **[10:57](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=657)** So you don't, you know you can't do like style sheets for example.
>
> **[11:01](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=661)** I don't know, I think it'd be sort of cool if you could do like a input field.
>
> **[11:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=664)** Maybe they'll add that at some point.
>
> **[11:06](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=666)** But for now, I mean these are quite capable additions to the markdown format.
>
> **[11:12](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-markdown-additions?u=76281980&t=672)** And as I mentioned, they are contact sensitive so not everything works everywhere but when they do, they're quite useful.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), this, (4), super (1), interface (1)
> **Tools:** github (8)
> **Definitions:** is a  (4), known as (2), refers to (1)
> **UI Navigation:** drag and drop (3), click on (2), go to (1)
> **Env Vars:** html (2), gfm (1), pdf (1), fabcde (1)
> **Analogies:** kind of like (1), just like (1), it's like (1), for example (1)
> **CLI Commands:** make (2)
> **Documentation:** the documentation (1)

#### Repo essential files
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=0)** - [Instructor] There are a number of important files that are a great idea to add to your repos.
>
> **[0:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=5)** So let's take a look at some of them.
>
> **[0:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=7)** The first you've already seen is the readme file that tells people what the project does and why it's useful.
>
> **[0:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=13)** When you go to a repository, it's the file that shows up automatically when you are in the main level of the repo.
>
> **[0:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=20)** It's sort of like the repo's homepage.
>
> **[0:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=23)** The readme file can be either in the main folder, which is also known as the root of the repo, but it can also go in the docs folder or in a special hidden .github folder.
>
> **[0:34](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=34)** And the nice thing about that is that it just makes your code look a lot cleaner if it's not something that you see on the homepage, especially when you add a lot of these different files.
>
> **[0:44](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=44)** Now some of these will get an extension, I think in the readme file, the extension is optional, but I like to put it 'cause it does help with the syntax highlighting.
>
> **[0:55](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=55)** You'll also get a table of contents when you have a lot of headings in the readme document.
>
> **[0:59](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=59)** And also each one of those headings will have a link to your content.
>
> **[1:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=63)** So if we can take a look at this website right here, we can see that there is now a table of contents, and it has a couple of headings.
>
> **[1:12](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=72)** If I come over here, you can see that I can click right there to go to that link.
>
> **[1:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=76)** And the URL now has that in it.
>
> **[1:18](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=78)** So if you have a long document, you can send people directly to a section by using this link.
>
> **[1:25](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=85)** Notice that it also appears in a tab along with some of these other files that are going to be available.
>
> **[1:31](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=91)** This one already has the license in it, so you can see that it shows up.
>
> **[1:35](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=95)** But the readme file will also have a table of contents over here if you have more than one headline, and it'll show sub-headlines as well.
>
> **[1:46](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=106)** The license is another special file.
>
> **[1:49](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=109)** Public repositories are normally used to share open source software, but for it to really count, you need to define how developers can use, change, and distribute the software.
>
> **[1:59](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=119)** And for that you need a license file.
>
> **[2:02](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=122)** There are many types of licenses and GitHub has some templates or helpers that you can use when you create a repo or when you click on the tab that shows you the license.
>
> **[2:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=133)** Now on top of the readme is where I showed you that section where you see the MIT license.
>
> **[2:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=141)** If I didn't have a license, it would have a button right here to allow you to see the options of the licenses.
>
> **[2:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=148)** You can also see something like that when you create a new repository.
>
> **[2:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=152)** If you scroll to the license section, you can see that there's a dropdown here with a bunch of sample licenses, and there's a little bit of a filter there if you want to find a specific license.
>
> **[2:44](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=164)** License file can be also in the .md format, also .txt and .rst.
>
> **[2:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=172)** It also is optional, so you don't need an extension, and you'll commonly just see it named as the license file.
>
> **[3:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=180)** Now this one has to be in the root folder.
>
> **[3:02](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=182)** You can't put it somewhere else.
>
> **[3:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=185)** It needs to be right there at the top of your repository.
>
> **[3:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=189)** There's also another file called the code of conduct.
>
> **[3:12](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=192)** This special file establishes the expectations as to how people are supposed to behave when they're using your projects.
>
> **[3:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=201)** Like with the license, there is a bunch of built-in helpers, so we can take a look at that in a repo.
>
> **[3:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=209)** So if we go to the code of conduct, you can add one right here.
>
> **[3:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=212)** And at least you can see there's a couple of little helpers here with some templates.
>
> **[3:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=217)** And you can also add to this form, and it'll update this section on the other side.
>
> **[3:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=225)** There's also a security policy that you can add called the Security MD file.
>
> **[3:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=231)** This one lets you of course specify your security support and where to report vulnerabilities.
>
> **[3:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=238)** And you can find this, like I said, along the tab on top of the readme.
>
> **[4:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=245)** And it does have a few templates that can show you how to get started writing one.
>
> **[4:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=249)** This one can be in the docs or the route or in the GitHub folder.
>
> **[4:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=254)** So if we come over here, we'll go back, and go back to our page.
>
> **[4:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=261)** You can see the security policies right here, and you can hit add a security policy, and then notice that it actually takes you to the repo security tab.
>
> **[4:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=270)** And then from here you can start this setup, and go through the process of basically modifying this file to tell people how to use the project and what the security features of this project are.
>
> **[4:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=285)** There's also a really important file called the contributing.md file.
>
> **[4:50](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=290)** Basically, you let people know some guidelines as to how they can contribute to the project.
>
> **[4:56](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=296)** Sometimes you put things in here like the sort of contributions that you accept, or when you don't accept certain contributions, and you can include things like steps for creating good issues and links to documentation.
>
> **[5:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=309)** Like some of the other files, You can put this in the root folder, the docs folder, or the dot GitHub folder as well.
>
> **[5:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=316)** And if you go to the issue sidebar, you should be able to see a link to this, just to make it easier for people to find how to contribute to a project.
>
> **[5:26](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=326)** There's another file called the support.md, and that is also useful for when you want to tell people how to get support for your project.
>
> **[5:36](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=336)** It's going to be placed either in the root folder docs or GitHub, like some of these other files, and also appear in the issues sidebar because that's usually a good place for people to look for help.
>
> **[5:49](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=349)** Now there's another super special file called the Code Owner's Document.
>
> **[5:53](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=353)** This one basically has information about who is responsible for certain code in a repository.
>
> **[5:59](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=359)** This is just a text file, it doesn't get an extension, and you can add whomever you want, whatever accounts you want basically.
>
> **[6:06](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=366)** But whoever you add in there has to have right permissions to the project, or they're not going to be able to do very much.
>
> **[6:12](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=372)** Now these folks would get automatic notifications whenever something happens.
>
> **[6:17](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=377)** So they would be automatically asked to review pull requests, and also just review the code as it is entered.
>
> **[6:27](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=387)** So it's kind of a automation feature that makes it easier for you to default to a specific person or group.
>
> **[6:35](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=395)** You can have one of these files and make the files different depending on the branch.
>
> **[6:40](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=400)** Of course, when you sort of clone a branch based on another branch, it's going to copy that file, but you can modify it on a branch-by-branch basis, and another file that can go in any of these folders.
>
> **[6:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=412)** Now there's a format for code owners that is pretty similar to what you see in the gitignore file.
>
> **[6:59](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=419)** So basically you add in some sort of pattern.
>
> **[7:02](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=422)** So this would basically say that all the JavaScript documents or the documents with a JavaScript extension are assigned to planet of the web.
>
> **[7:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=433)** So any pull request containing those would, you can do any sort of glob pattern, so like this would mean that any folder with any file that has a JavaScript extension would work like that.
>
> **[7:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=444)** When you add a slash docs here, it means that you want the entire folder, and then you can have it belong to these two people who will be responsible for any pull requests.
>
> **[7:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=457)** So basically you create a pattern, and then you have one or more IDs separated by spaces.
>
> **[7:43](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=463)** The IDs can actually be a username or someone's email that is listed in their account, and you can also add an entire team in an organization if you want.
>
> **[7:55](https://www.linkedin.com/learning/learning-git-and-github-23011330/repo-essential-files?u=76281980&t=475)** So it's quite flexible, and it's really useful just to make it easier to have specific people that you will have checked or verify or review the code that gets added to the project.

> [!info]- Semantic Content
>
> **Documentation:** the readme (7), the docs (3)
> **Code Keywords:** let (2), this, (2), public (1), else. (1), super (1)
> **CLI Commands:** find (3), make (3)
> **UI Navigation:** go to (4), click on (1), dropdown (1)
> **Tools:** github (5)
> **Definitions:** known as (1), is a  (1), means that (1)
> **File Paths:** contributing.md (1), support.md (1)
> **Env Vars:** url (1), mit (1)


### 3. GitHub Repos and Projects

#### Issues
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=0)** - [Instructor] GitHub issues forms the foundation of how GitHub projects have been done since the beginning of GitHub itself.
>
> **[0:06](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=6)** If you go to the Issues tab, you'll see that you can create issues by hitting this New issue tab, and then you give the issue a title.
>
> **[0:15](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=15)** I'm going to call this Potential New Features.
>
> **[0:18](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=18)** And it's really designed to allow you to have a discussion about new features that you may want to add to a website or potential problems, issues that you may find on an existing website.
>
> **[0:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=30)** So you could say something like, I found a couple of spelling mistakes.
>
> **[0:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=33)** Here's the page where that is.
>
> **[0:34](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=34)** Potentially, you can also talk about a new feature that you have in mind with some sample code, and it's meant to be a discussion with a number of people on your project.
>
> **[0:44](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=44)** So I'm going to add a discussion about potential new features that people may want to add.
>
> **[0:50](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=50)** So I could say something like, Let's discuss the next version of this website.
>
> **[0:57](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=57)** Which features would you like to add here?
>
> **[1:02](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=62)** And then you'll notice that there's a number of formatting features that I can do here and the classic Preview button that you would do to take a look at what that message is going to convert to since it uses markdown.
>
> **[1:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=76)** So I can say headline, New Feature here.
>
> **[1:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=81)** And if I hit Preview, you'll see that the first line is a headline now.
>
> **[1:25](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=85)** There's also some other options that are pretty useful in this little editor.
>
> **[1:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=90)** So you have some slash commands that allow you to do things like put special alert or note type of tips.
>
> **[1:38](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=98)** And we can see how we can add something like this is meant only for new ideas.
>
> **[1:46](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=106)** And when we preview, it'll display as a warning.
>
> **[1:49](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=109)** And the slash commands will do things like let you add tables, check boxes, and lots of other things.
>
> **[1:55](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=115)** We can click on this Mention to mention other individuals.
>
> **[1:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=118)** So you can pull up, say jojo's account here, and we can do a mention of her.
>
> **[2:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=124)** Now, in addition to creating a note, you can also add assignees to make sure that they're aware and get a notification that this issue has been created.
>
> **[2:15](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=135)** So I can assign this to jojo and TerryDactill.
>
> **[2:19](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=139)** And now they'll get a notification that this potential new features has been assigned to them.
>
> **[2:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=144)** I'll go ahead and add myself in there as well.
>
> **[2:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=148)** Then we can add a number of labels.
>
> **[2:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=150)** This will be similar to the things that you can do in pull requests and also in projects.
>
> **[2:36](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=156)** Projects, as a matter of fact, will use issues to let you do things.
>
> **[2:40](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=160)** And from here we can choose the type of labels that you want to assign here.
>
> **[2:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=165)** So this is not going to be a documentation, but we'll say that this is an enhancement discussion.
>
> **[2:54](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=174)** Now, there's a couple of labels that are pretty important and unique.
>
> **[2:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=178)** So for example, this help wanted label is to tag certain issues as potential things that you want to let people who are looking to help on GitHub and get credit for working on projects to help with.
>
> **[3:12](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=192)** So potentially this might be a good help wanted or a good first issue here.
>
> **[3:19](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=199)** So we'll tag this issue with those.
>
> **[3:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=203)** And then we can add some other things, like we can tie this to a project.
>
> **[3:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=208)** We don't have projects done on this repository quite yet, but we might add them later.
>
> **[3:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=213)** And you can also tag them to a milestone.
>
> **[3:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=217)** So a milestone would be sort of a deadline that you have for a project.
>
> **[3:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=222)** So a milestone might be called something like launch whenever you launch the first version, or it could be, you know, say finish testing.
>
> **[3:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=232)** Those can be things that you have to accomplish a certain number of issues for in order for the milestone to be complete.
>
> **[4:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=240)** But this is kind of all you need to start an issue right here.
>
> **[4:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=244)** Notice, you can paste, drop, or click to add files.
>
> **[4:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=247)** And then we can hit Create.
>
> **[4:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=250)** This will generate the issue.
>
> **[4:11](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=251)** It will notify the people involved.
>
> **[4:15](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=255)** And then they can come back here and add some comments.
>
> **[4:18](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=258)** Perhaps everybody can add the features that they want to add here, and you can have additional discussions about that project.
>
> **[4:27](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=267)** And then once you do that, at the end of the discussion, you can close the issue and sort of finish up with your discussions.
>
> **[4:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=277)** We can also choose to create a branch for the issue or even open it up in GitHub workspace which uses AI to try to accomplish your issue.
>
> **[4:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=288)** Try it out.
>
> **[4:49](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=289)** It's actually a pretty impressive feature if you have it available.
>
> **[4:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=292)** And this may require a subscription to GitHub Copilot.
>
> **[4:56](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=296)** So you can see down here the participants appear, and you can click this to transfer an issue to another project, and that will let you kind of move issues around different projects if you want to do that.
>
> **[5:11](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=311)** Once you have a few issues, let's take a look at the Issues section.
>
> **[5:15](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=315)** So we'll click on this.
>
> **[5:17](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=317)** And you'll see that we have a few issues already in here.
>
> **[5:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=320)** They have different labels.
>
> **[5:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=321)** In this screen, you can organize your issues, you can take a look at the labels that are available to you.
>
> **[5:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=328)** So if you want to edit which labels appear when you are assigning issues, you can do that right here.
>
> **[5:34](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=334)** You can also go to the milestones and take a look at the different milestones that you have here and also add new ones.
>
> **[5:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=342)** And you can also control what appears right here on this list.
>
> **[5:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=348)** So notice that right now it says is:issue and also state:open.
>
> **[5:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=352)** So by clicking on these different labels, you'll be able to filter out the issues.
>
> **[5:57](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=357)** Usually issues are a pretty long list of things that you want to get done or potentially things that have been done.
>
> **[6:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=365)** So once you finish up an issue, it'll be marked as Closed.
>
> **[6:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=369)** And you can take a look at an issue here that has been closed before.
>
> **[6:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=374)** If you want to reopen it or reopen a discussion, you can do that there.
>
> **[6:18](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=378)** And then you can use these little dropdowns to sort of sort by different parameters.
>
> **[6:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=383)** So if, for example, if we pick jojo, you can see that now this right here changes and it's showing you only the issues that have been authored by jojo.
>
> **[6:34](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=394)** So if we want to remove that, we could just take that out of here and hit return and it'll show you the rest of the issues.
>
> **[6:41](https://www.linkedin.com/learning/learning-git-and-github-23011330/issues?u=76281980&t=401)** So in addition to creating issues here, controlling the labels and the milestones, you have a fantastic way of filtering in different ways to control and manage the flow of all of your issues.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), require (1), this. (1), if, (1)
> **Tools:** github (6)
> **UI Navigation:** go to (2), click on (2)
> **Analogies:** for example (2), similar to (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (1), is an  (1)
> **Exercise Files:** sample code (1)
> **Warnings:** warning (1)

#### Pull requests
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=0)** - [Instructor] Pull request is how users ask for changes to be made on the main site.
>
> **[0:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=5)** Now, you can do them directly on GitHub when you want to make some minor changes to your project.
>
> **[0:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=10)** So, let's take a look at how that's done.
>
> **[0:11](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=11)** So, here's our project and I'm going to go into the docs folder and then, take a look at my index.html file.
>
> **[0:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=20)** And what I want to do is maybe change the title of this webpage because it's really something I copied from another project and it's called Layouts.
>
> **[0:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=29)** So maybe on this first page, I'm going to change this name right here.
>
> **[0:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=32)** So to do that, I can just hit this edit button right now and that will bring me into a very simple editor.
>
> **[0:41](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=41)** Notice that it's all syntax highlighted, it's got line number, it's actually a pretty cool editor.
>
> **[0:46](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=46)** And so, I'm going to change this Layouts title to Learning Git and GitHub, which is the title for this project.
>
> **[0:55](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=55)** And then, you can hit preview to preview the changes.
>
> **[0:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=58)** This will show you what you have modified in a nice little interface.
>
> **[1:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=63)** And then, we can commit these changes just like we would on our local website.
>
> **[1:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=69)** And I'll add here a note and you can also add a little bit of an extended description.
>
> **[1:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=76)** It's optional, so I'm going to leave it blank.
>
> **[1:18](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=78)** Here, I can decide which email I'm doing this from.
>
> **[1:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=81)** And here, you can also choose, just like you can in the local version of this, to commit to the main branch or create a new branch and this will generate what's called a pull request.
>
> **[1:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=93)** Now, here I can give this branch a name, titlechange, and I'm going to hit propose changes.
>
> **[1:41](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=101)** All right, so now, what it's doing is opening up what's called a pull request.
>
> **[1:46](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=106)** This is how if you or somebody else or even if it's yourself, you can open up a request to make changes to this website based on the two different branches that we have, the original branch and the one I just created.
>
> **[1:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=118)** And you don't really need to do much here.
>
> **[2:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=120)** All you can do is either hit change title and create this pull request, so let's go ahead and hit that.
>
> **[2:08](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=128)** Now, it creates a request.
>
> **[2:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=130)** So, it just seems like a long way to go to just create a change.
>
> **[2:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=136)** But what it's doing here is creating this pull request and it's given it a number 'cause you can have many of these.
>
> **[2:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=143)** And then, it sort of defined a conversation about the project.
>
> **[2:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=148)** Now, this can remain open and you can sort of make notes to ask people.
>
> **[2:34](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=154)** Type in a note here.
>
> **[2:35](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=155)** Hey, what do you think of this, if I was talking to other people, of this title change and just continue to hit comment, comment, comment and allow people to comment on what you're trying to do here.
>
> **[2:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=172)** And then, other people can come in here and make their comments about whether or not this should be changed.
>
> **[2:57](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=177)** Once you are done with this, though, you want to merge the pull request.
>
> **[3:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=183)** And so, all we need to do here is click on this merge pull request.
>
> **[3:08](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=188)** And now, I need to do one more thing which is confirm the merge, right?
>
> **[3:12](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=192)** So, I'm going to click on confirm the merge and that is now successfully merged the request and closed this pull request.
>
> **[3:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=202)** So, that's a long process but it's how you do things on GitHub.
>
> **[3:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=208)** Notice that there's all kinds of project management things on the right-hand side that you can do in addition to this.
>
> **[3:34](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=214)** You can add assignees.
>
> **[3:36](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=216)** Right now there's only one person in the team but if you had additional people, then you could assign somebody to review the change that is being proposed.
>
> **[3:46](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=226)** You can also add labels.
>
> **[3:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=228)** So, there's the typical labels that you can add to, perhaps, a proposed pull request.
>
> **[3:54](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=234)** So, you can ask for help on a specific topic, this doesn't seem right, and put any of these labels.
>
> **[4:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=240)** Those are kind of useful 'cause you can then look for or sort by these different labels.
>
> **[4:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=245)** You can also create milestones.
>
> **[4:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=247)** Milestones are a way of letting you define targets that you want to reach with your code.
>
> **[4:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=254)** So, another project management thing that you do in GitHub.
>
> **[4:17](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=257)** And then, also, you can align the pull request with an issue.
>
> **[4:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=263)** So, I did show you issues before.
>
> **[4:26](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=266)** You can create an issue and say, "Hey, we need to fix the title for this project."
>
> **[4:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=270)** And then, when somebody goes in and changes the title, then the pull request can automatically be linked to the issue and close the issue when it gets done.
>
> **[4:41](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=281)** Now, notice that there's also this commits section here which shows you what you've done and you can take a look at the file that you modified.
>
> **[4:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=291)** And what's nice here, it's that it also gives you a view that shows you what you have changed.
>
> **[4:57](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=297)** We've made very simple changes on this project but this could be several files that were changed.
>
> **[5:02](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=302)** And this is actually pretty cool because if somebody is looking at the proposed pull request, they can very easily see the different files that have been changed and say, "Yeah, this is a good change based on the files that I see right here," and approve that pull request Now, if we take a look at, let's see, the code, and we take a look at our index.html file we should see our new title right here.
>
> **[5:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=333)** And if we go back into settings and we go to pages, we should be able to take a look at the website now and it is going to take a little bit of time for that change to take.
>
> **[5:49](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=349)** So, it's not loading the new version of the website.
>
> **[5:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=352)** But here, I reloaded my page and now you can see that it has the new title right here, which is great.
>
> **[5:59](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=359)** And that's how you do a pull request.
>
> **[6:01](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-requests?u=76281980&t=361)** It is one of the core skills that you'll need to develop not just in accepting a pull request and approving it but in really having those conversations with your other users about proposed pull requests and also any changes, and making assignments to people on what they need to do based on either issues or the pull requests.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (3), interface (1), from. (1), continue (1)
> **CLI Commands:** make (4), git (1)
> **Tools:** github (4)
> **UI Navigation:** click on (2), go to (1)
> **File Paths:** index.html (2)
> **Analogies:** just like (2)
> **Documentation:** the docs (1)
> **Definitions:** is a  (1)

#### Pull request features
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=0)** - [Instructor] Pull requests are part of GitHub Flow, and they're probably the main reason that GitHub exists.
>
> **[0:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=5)** The ability to communicate with others about your code is what makes Git social.
>
> **[0:11](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=11)** And GitHub does it in a fantastic way.
>
> **[0:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=13)** Let's take a look at some of the options here.
>
> **[0:15](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=15)** When you first create a pull request, you're going to have the option of taking a look at how your code looked before the pull request and after the changes that you're suggestion..
>
> **[0:25](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=25)** So there's a mechanism for comparing branches and they don't have to be those particular two branches, you can also compare things with some additional branches you may have, and that means that you can be more flexible about what you're seeing.
>
> **[0:41](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=41)** So let's take a look at how that works.
>
> **[0:44](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=44)** Here I have a project and I've already pushed some changes, so I'm going to click right here to Compare and pull request.
>
> **[0:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=51)** And from the very top you can see that I can write down some notes about what I'm doing here, and it says that it's able to merge these two branches.
>
> **[0:59](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=59)** So there's not a problem between those two branches, but notice that I can immediately come over here, and if I had some other branches, I could compare my branch with the changes with perhaps some previous branch or another branch that perhaps was happening at the same time.
>
> **[1:18](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=78)** Now, down here towards the bottom, you can see all the changes that you have made in between those two branches.
>
> **[1:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=84)** And there is a load of options here for you to take a look at the file or copy the reference and even view the entire file that you're comparing right here, and really take a look at what's going on with your project.
>
> **[1:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=102)** Now, normally you create a regular pull request, but there is an option to create something called a draft pull request.
>
> **[1:49](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=109)** Now this is meant as a placeholder for your work-in-progress before you're ready to let somebody review things.
>
> **[1:57](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=117)** So you can continue to work with the draft pull request until all your commits have been done and you're ready for somebody to take a look at them.
>
> **[2:06](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=126)** At this point, you can continue with you discussions and anybody else can also comment on what you're trying to do.
>
> **[2:12](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=132)** Perhaps this is a way to announce your intention, let other comment on what you're planning on doing, but not really allow for reviews because you haven't finished your work yet.
>
> **[2:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=144)** So let's take a look at that.
>
> **[2:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=149)** So here, you can see that I am able to merge, and right now I have the draft pull request just because I've been doing it for a while.
>
> **[2:36](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=156)** But traditionally, you can just create a normal pull request here.
>
> **[2:41](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=161)** If you want to switch that, you click on this little triangle and you can select a draft pull request.
>
> **[2:46](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=166)** You can see that it says "Cannot be merged until marked ready for review."
>
> **[2:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=171)** So that's going to be an extra little checkbox that we have to check right here.
>
> **[2:55](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=175)** Notice that I need to mark it ready for review before I can merge it, there's no way of merging this right now.
>
> **[3:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=183)** So, we can assign some additional people here and I'll go ahead and add Jojo as well as Terry.
>
> **[3:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=189)** And now we can start some conversations about what is happening here.
>
> **[3:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=194)** So let's go ahead and say something like, "Hello team.
>
> **[3:19](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=199)** I am thinking about updating to Bootstrap 5.
>
> **[3:25](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=205)** (keyboard keys clicking) What do you think?"
>
> **[3:31](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=211)** And I'll just say Comment here, and now other people can go ahead and comment on this.
>
> **[3:38](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=218)** And I can see that somebody already hearted my idea, and I can also see that Jojo wrote a comment for this, which is great.
>
> **[3:47](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=227)** So I'm feeling pretty good about this, my changes are looking great.
>
> **[3:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=231)** We have gotten some feedback from our team, and so I'm going to go ahead and mark this as being ready for review.
>
> **[4:02](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=242)** It's ready for review.
>
> **[4:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=243)** So now I'm going to request that Jojo review this file.
>
> **[4:08](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=248)** And now Jojo will get a notification that this has been assigned to her, and the review process can start.
>
> **[4:18](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=258)** There's a number of different tabs in the pull request sections where you can follow along with what's happening with the project.
>
> **[4:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=264)** Now by default, when you come here, you'll see the Conversation tab which are where discussions can take place with the folks that are working on the project.
>
> **[4:34](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=274)** You can also look at a Commits tab.
>
> **[4:36](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=276)** That way you can see the commit history for this pull request.
>
> **[4:39](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=279)** There's also a Checks tab that lets you use tools like GitGuard that let you run security checks on your code.
>
> **[4:47](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=287)** And also there is a tab for looking at file changes.
>
> **[4:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=292)** This is just some additional ways to take a look at the project.
>
> **[4:55](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=295)** So, when we come over here, notice that the tabs are right at the top.
>
> **[5:02](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=302)** And so I can take a look at the commits that have been done for this pull request and take a look at checks.
>
> **[5:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=309)** And if I have tools installed like GitGuardian, I can run a check to make sure that my security sort of features have been verified.
>
> **[5:18](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=318)** This would be for things like making sure that nobody put in a secret in one of your files.
>
> **[5:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=324)** And then over here, I can take a look at the three files that were changed.
>
> **[5:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=329)** And if I want to, I can initiate a review for this project.
>
> **[5:34](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=334)** Now I can review files directly in here or just write in some individual reviews that are basically comments.
>
> **[5:43](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=343)** Now, because I am not the assigned reviewer, I can't approve this pull request, only another reviewer can actually approve this before I can submit it.
>
> **[5:55](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=355)** So we'll let Jojo take care of this.
>
> **[5:59](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=359)** All right, so here is Jojo's view right now, and I can take a look at the files changed to take a look at the code that has been written.
>
> **[6:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=369)** And this is a pretty flexible sort of interface that lets you look at the code.
>
> **[6:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=374)** So, I can take a look at the different files and make general notes about things that I see.
>
> **[6:19](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=379)** I'm going to point out a couple of things here that are pretty good.
>
> **[6:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=382)** I'm going to go to the index.html file and show you that if I scroll all the way down to the bottom, I can see that I have sort of the changing of the script from Bootstrap 4.6 to Bootstrap 5.3.
>
> **[6:38](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=398)** That looks pretty good.
>
> **[6:39](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=399)** But as I'm looking through here, I can see that there's another script right here, and I'd like to see what that is.
>
> **[6:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=405)** And so I'm going to open this up or expand this up.
>
> **[6:49](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=409)** So this right here is a pretty comprehensive little editor.
>
> **[6:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=412)** It's not as good as something like Codespaces or Visual Studio Code, but you'll also have the option of reviewing this in Visual Studio Code if you want to by hitting this "Review in Codespace" button.
>
> **[7:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=424)** Now from here I'm going to notice that, so I expanded all this, I'm going to go all the way down to the bottom.
>
> **[7:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=429)** And I'm noticing that this script for jQuery is actually being used here.
>
> **[7:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=436)** And you don't really need jQuery when you upgrade to Bootstrap 5.
>
> **[7:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=441)** So, Jojo is going to make a comment about that.
>
> **[7:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=444)** I'm going to hit this little plus line right here.
>
> **[7:27](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=447)** So now I can make a comment and I'll say "Looks like you left the jQuery code, (keyboard keys clicking) you can safely remove that in all files."
>
> **[7:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=462)** All right, so I can add a single comment and/or start the review.
>
> **[7:46](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=466)** So I'm going to go ahead and start it and say: Hey, you can safely remove that in all files.
>
> **[7:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=472)** And I can go through this project and take a look at any other code that I want to see.
>
> **[8:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=480)** Or now that I've started the review, I can go ahead and finish it.
>
> **[8:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=483)** I'm going to go ahead and make that same note in other places.
>
> **[8:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=487)** So I know that I need to check the bottom.
>
> **[8:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=490)** So actually the columns is the one that I did it first on.
>
> **[8:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=493)** So I'm going to go ahead and come over here, and it looks like it's actually putting it everywhere, so that's kind of cool.
>
> **[8:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=501)** So, that's going to be the extent of my review, I don't need to get very complicated for this demo right now.
>
> **[8:27](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=507)** And then from here, I can finish up my review and say "This needs a bit of an update to remove jQuery."
>
> **[8:39](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=519)** And let's go ahead, and here, instead of approving the review, we're going to request that these changes are made, and I'll hit Submit review.
>
> **[8:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=531)** And that, as you can see, saves a history of what I've done and the review that has been done.
>
> **[9:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=540)** And now somebody can continue those changes that were requested, which would be removing this extra code that we don't need anymore.
>
> **[9:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=550)** So that's how you do reviews.
>
> **[9:12](https://www.linkedin.com/learning/learning-git-and-github-23011330/pull-request-features?u=76281980&t=552)** You can also, of course, approve it, and this wouldn't be able to be merged until it was approved.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), continue (3), this, (3), this. (2), while. (1)
> **Definitions:** is a  (5), means that (1), is an  (1)
> **CLI Commands:** make (5), git (1)
> **Tools:** github (3), visual studio (2)
> **Code Identifiers:** jquery (4)
> **UI Navigation:** click on (1), checkbox (1), go to (1)
> **Versions:** 4.6 (1), 5.3 (1)
> **Non-Speech:** (keyboard keys clicking) (2)

#### Finishing your code review
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-git-and-github-23011330/finishing-your-code-review?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/finishing-your-code-review?u=76281980&t=0)** - [Instructor] Let's take a look at how we may resolve some of these changes that we need to make to this project right here.
>
> **[0:06](https://www.linkedin.com/learning/learning-git-and-github-23011330/finishing-your-code-review?u=76281980&t=6)** So if I go to conversation, I can see all of the notes that Jojo made in the review and here's where she added that.
>
> **[0:15](https://www.linkedin.com/learning/learning-git-and-github-23011330/finishing-your-code-review?u=76281980&t=15)** I left the jQuery code and I can remove that in all the files.
>
> **[0:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/finishing-your-code-review?u=76281980&t=20)** Now, if I go back to files changed, you'll see that if I want to, I can do a lot in this document.
>
> **[0:26](https://www.linkedin.com/learning/learning-git-and-github-23011330/finishing-your-code-review?u=76281980&t=26)** So I could perhaps go ahead and edit the file or view this file but this'll be a little bit easier to do in a codespace.
>
> **[0:34](https://www.linkedin.com/learning/learning-git-and-github-23011330/finishing-your-code-review?u=76281980&t=34)** So I'm going to go ahead and hit review in codespace.
>
> **[0:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/finishing-your-code-review?u=76281980&t=37)** Now, I already have a codespace that I created earlier to make the original change but I can also just create a new one right here.
>
> **[0:46](https://www.linkedin.com/learning/learning-git-and-github-23011330/finishing-your-code-review?u=76281980&t=46)** I'm going to go ahead and hit resume this codespace since I've already got it going.
>
> **[0:50](https://www.linkedin.com/learning/learning-git-and-github-23011330/finishing-your-code-review?u=76281980&t=50)** It's in the right branch and everything is looking good.
>
> **[0:56](https://www.linkedin.com/learning/learning-git-and-github-23011330/finishing-your-code-review?u=76281980&t=56)** All right, so let's take a look at how we can modify the project.
>
> **[1:01](https://www.linkedin.com/learning/learning-git-and-github-23011330/finishing-your-code-review?u=76281980&t=61)** And you can see that under comments now, we are actually able to see the comments that were created in our project and it'll even take us to where we need to be making that change.
>
> **[1:12](https://www.linkedin.com/learning/learning-git-and-github-23011330/finishing-your-code-review?u=76281980&t=72)** And I can also hit the resolve conversation here.
>
> **[1:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/finishing-your-code-review?u=76281980&t=76)** Let's go ahead and delete jQuery from here.
>
> **[1:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/finishing-your-code-review?u=76281980&t=80)** And I know that I also want to do that in all the other places.
>
> **[1:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/finishing-your-code-review?u=76281980&t=83)** I thought that note showed up everywhere but it looks like it just shows up in one place which kind of makes more sense.
>
> **[1:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/finishing-your-code-review?u=76281980&t=90)** So let's go down and delete this jQuery line right here.
>
> **[1:36](https://www.linkedin.com/learning/learning-git-and-github-23011330/finishing-your-code-review?u=76281980&t=96)** Then I'm going to delete this extra line, and then I can go to the conversation, which I think was in this media.
>
> **[1:46](https://www.linkedin.com/learning/learning-git-and-github-23011330/finishing-your-code-review?u=76281980&t=106)** And I'm going to say, "That's a great catch.
>
> **[1:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/finishing-your-code-review?u=76281980&t=112)** "I went ahead and fixed it."
>
> **[1:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/finishing-your-code-review?u=76281980&t=118)** All right, so I'm going to go ahead and resolve this conversation and then I'll add this comment in there.
>
> **[2:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/finishing-your-code-review?u=76281980&t=130)** So now that is marked as resolved but I'll need to go ahead and push this update.
>
> **[2:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/finishing-your-code-review?u=76281980&t=136)** So I'm going to go here to the source control panel and commit these changes.
>
> **[2:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/finishing-your-code-review?u=76281980&t=143)** And I'll put in a message here.
>
> **[2:27](https://www.linkedin.com/learning/learning-git-and-github-23011330/finishing-your-code-review?u=76281980&t=147)** All right, so I'll close this out and then I'll hit this sync button right here and I'll say Yes.
>
> **[2:35](https://www.linkedin.com/learning/learning-git-and-github-23011330/finishing-your-code-review?u=76281980&t=155)** Now this will sync my local copy with the repository so I can come right here and take a look at the conversation.
>
> **[2:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/finishing-your-code-review?u=76281980&t=165)** Now I should be able to see my additional notes right here, updated to remove jQuery, and that is fantastic.
>
> **[2:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/finishing-your-code-review?u=76281980&t=178)** Now, so what I can do is go ahead and I already did this change.
>
> **[3:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/finishing-your-code-review?u=76281980&t=185)** So let's see.
>
> **[3:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/finishing-your-code-review?u=76281980&t=187)** Let's go ahead and dismiss this review because I already made this.
>
> **[3:12](https://www.linkedin.com/learning/learning-git-and-github-23011330/finishing-your-code-review?u=76281980&t=192)** Why are you dismissing this?
>
> **[3:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/finishing-your-code-review?u=76281980&t=193)** Change taken care of.
>
> **[3:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/finishing-your-code-review?u=76281980&t=204)** And if I want to, I can go ahead and merge this pull request and confirm the merge.
>
> **[3:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/finishing-your-code-review?u=76281980&t=212)** Yeah, that should be it.
>
> **[3:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/finishing-your-code-review?u=76281980&t=213)** Now this project is up to date and I'm very thankful to Jojo for the changes and we are ready to keep working on this project.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), delete (3), catch. (1), this. (1)
> **Code Identifiers:** jquery (4)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Using a CODEOWNERS file
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=0)** - [Instructor] Let's take a look at how we can secure our files a little bit better.
>
> **[0:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=4)** So I'm going to start off by creating a CODEOWNERS document here.
>
> **[0:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=9)** Now, remember that in order to use a CODEOWNERS file, your repo needs to be public or you need to have a Pro account.
>
> **[0:15](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=15)** I'm in the main branch and I'm going to hit create new file.
>
> **[0:18](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=18)** I'll call this CODEOWNERS.
>
> **[0:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=21)** And in here, I'm going to type in that I want to pretty much take all files and all directories and assign them to jojohumphreys.
>
> **[0:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=33)** So she is going to be the owner of this file.
>
> **[0:36](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=36)** I'll go ahead and commit this straight to the main branch.
>
> **[0:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=42)** And what this does is make JoJo Humphreys the owner and she's going to get notifications whenever I do things with this site.
>
> **[0:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=51)** Now, another thing that you can do is in settings, you can protect your branch by going to branches.
>
> **[0:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=58)** And I'm going to hit add protection rule.
>
> **[1:01](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=61)** There is a number of options here, but what I can do is say that I want the main branch to be protected and I can fill out all kinds of options here.
>
> **[1:12](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=72)** So I'm just going to do a simple one, require a pull request before merging.
>
> **[1:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=81)** And I'm going to say that I want an approval before merging anything in this branch as well.
>
> **[1:27](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=87)** So I'm going to say create.
>
> **[1:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=89)** It may ask you for your authentication code.
>
> **[1:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=92)** So now I have a branch protection rule and my main branch will not be able to be written to unless it's been approved.
>
> **[1:41](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=101)** So I'm going to go back into code.
>
> **[1:44](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=104)** And now that I have all that, I'm going to go ahead and make some changes into my project.
>
> **[1:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=111)** So I'm going to come over here and create a new Codespace.
>
> **[1:55](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=115)** I've cleared out some of the old ones that I've been working on.
>
> **[1:57](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=117)** So I'll just hit this button right here and this will pull up a Codespace with all my files.
>
> **[2:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=124)** All right, I'm going to go ahead and begin a new branch.
>
> **[2:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=130)** And what I want to go is go to each of these documents and remove these links to Font Awesome on every one of these files since I realized that I don't use icons in this project right now.
>
> **[2:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=143)** It's a simpler version of a larger project so there's no reason for those anymore.
>
> **[2:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=148)** So I've got those changes queued up.
>
> **[2:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=150)** I'm going to go ahead and add them and I'll go ahead and push this.
>
> **[2:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=162)** I need to go ahead and set the upstream branch here.
>
> **[2:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=172)** So now this is in a fixed icons branch, and I can go ahead and start a pull request here.
>
> **[3:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=184)** All right, so I'm going to go ahead and try to just create a pull request for this.
>
> **[3:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=190)** Now, notice that automatically, JoJo Humphreys became a reviewer because of my CODEOWNERS file.
>
> **[3:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=202)** All right, so we'll create a pull request and notice that it already says that a review is required and also that merging is being blocked because it has to be reviewed by someone.
>
> **[3:40](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=220)** So that's the advantage of doing a CODEOWNERS, as well as branch protection.
>
> **[3:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=225)** It sets up the standards for how people are supposed to work with this project.
>
> **[3:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=232)** So here I am on JoJo Humphreys' account.
>
> **[3:55](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=235)** You can see the icon for her right here.
>
> **[3:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=238)** And you can see that in this notification section, I should have gotten a notification about this fixed icons and how a review is automatically already requested.
>
> **[4:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=250)** So I'm going to go into this and take a look at the file.
>
> **[4:15](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=255)** So I want to take a look at these files changed and here I can go ahead and look at the changes that were made.
>
> **[4:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=263)** These changes look pretty good.
>
> **[4:25](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=265)** So this will be pretty simple.
>
> **[4:27](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=267)** I'm going to hit review changes.
>
> **[4:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=270)** I don't need to review it in Codespaces.
>
> **[4:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=272)** This simple deletion is something I can just go ahead and approve.
>
> **[4:36](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=276)** So here I can leave a comment.
>
> **[4:39](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=279)** This is a great idea.
>
> **[4:44](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=284)** Looks like you got 'em all.
>
> **[4:49](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=289)** Okay, and in here, I can either do a comment or just approve this so that the project can move on and then I can hit the submit review.
>
> **[4:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=298)** So I'm going to go ahead and approve this and submit this review.
>
> **[5:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=303)** And so now the parameters for this project have been taken care of.
>
> **[5:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=310)** You know, it required one review, it set JoJo Humphreys automatically as the reviewer and it's able to pass all the checks.
>
> **[5:18](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=318)** And since this branch has no conflicts with the base branch, I can go ahead and merge this pull request and I can either do that from JoJo's account or if I want to, I can just do it from my account now that all these changes have been approved.
>
> **[5:34](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=334)** So I can now merge this pull request, confirm the merge and we are good to go.
>
> **[5:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=342)** So we'll go ahead and delete this branch and now our update has been done.
>
> **[5:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/using-a-codeowners-file?u=76281980&t=348)** So all those different options in GitHub give you the ability to really protect how your projects are working and how you work with other people to accomplish reviews and also take care of any updates to your website.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (2), let (1), public (1), protected (1), require (1)
> **Env Vars:** codeowners (5)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Tools:** github (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### Organizing projects
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=0)** - [Instructor] GitHub provides a lot of tools to help you manage projects.
>
> **[0:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=3)** Let's take a look at how they work.
>
> **[0:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=5)** Now, here's some of the tools available to help you organize things, the first is contributors.
>
> **[0:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=10)** You can invite others to work alongside you on a project.
>
> **[0:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=14)** That's what really makes GitHub special, the ability to collaborate with other people.
>
> **[0:19](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=19)** Issues allows you to create notes about your project that can be shared and commented by others.
>
> **[0:25](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=25)** They're usually for things that you need to fix.
>
> **[0:27](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=27)** There's a couple of ways that you can organize issues.
>
> **[0:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=30)** One is with labels, they'll help you identify the purpose of the issue.
>
> **[0:34](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=34)** And you can add more than one label if you need to.
>
> **[0:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=37)** Milestones is for grouping issues into goals that need to be achieved.
>
> **[0:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=42)** Finally, projects are a way to take a look at the progress of your work, and see how well you're accomplishing things.
>
> **[0:50](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=50)** Let's go ahead and use these really quick.
>
> **[0:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=52)** This is going to be just an introduction to how these things work.
>
> **[0:55](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=55)** You can take a look at some of our project management courses for GitHub for a deeper dive.
>
> **[1:01](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=61)** Here I am in the settings tab for my project, and the first thing I want to look at is collaborators.
>
> **[1:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=67)** Whenever you want others to be able to work with you on a project, you'll need to add them as collaborators.
>
> **[1:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=74)** Now, this will work if your project is a public project, or a public repo, or if you have a pro account.
>
> **[1:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=81)** Here, you can add people, I've got two people already on this project, JoJo Humphreys and Terry Dactill.
>
> **[1:26](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=86)** But if you want to add some more people, you can hit this button and then type in either the username or the email or the full name, and they should appear right here on a list.
>
> **[1:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=97)** They'll get an email notification, and then they'll be able to do something with your project.
>
> **[1:43](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=103)** Now, I usually create issues whenever I want to do something or I want to address something with a repository that needs to be looked at by others.
>
> **[1:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=112)** So I'm going to create a new issue here, and in here I'm going to give this a title.
>
> **[1:59](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=119)** And I'm just going to say, please check my work so far.
>
> **[2:06](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=126)** And here on the right hand side is where I can assign others to the project.
>
> **[2:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=130)** Notice that I can also assign myself.
>
> **[2:12](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=132)** I'm going to assign JoJo Humphreys to this task.
>
> **[2:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=136)** And if I want to, I can add additional people just by clicking on this right here.
>
> **[2:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=140)** Now, you can also add labels.
>
> **[2:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=142)** So there's a set of predefined labels in here, or you can hit edit labels and add some more.
>
> **[2:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=149)** I'm going to select the help wanted label, but just like with assignees, I can also add multiple labels.
>
> **[2:36](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=156)** And there's a nice little filter section up here.
>
> **[2:39](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=159)** Now, we don't have a project set for this, but you can also assign this to a project that you've got going on.
>
> **[2:46](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=166)** And if you want to, you can also assign a milestone.
>
> **[2:49](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=169)** So there's already one right here.
>
> **[2:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=171)** And milestones are just a way for basically sort of establishing points that you want to use on your project.
>
> **[3:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=180)** So here, under milestones, I can either type in something, so getting started.
>
> **[3:08](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=188)** And in here, I can hit create and assign to a new milestone.
>
> **[3:12](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=192)** Or if I want to, I can choose one of the existing milestones.
>
> **[3:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=196)** I'm going to go ahead and select final review here as the milestone, and it gives me this nice bar that will take into account the amount of issues that are completed towards this milestone.
>
> **[3:27](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=207)** We don't have any issues yet, and that's why it's showing 100%.
>
> **[3:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=210)** And there's some other things that you can do right here, but I'm just going to go ahead and submit this new issue.
>
> **[3:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=217)** Right, and every time I do something with issues, so whenever I modify something, say, if I assign another assignee to this issue, it's going to track that and add that to this list right here.
>
> **[3:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=231)** So once it gets updated, you'll see that now it'll assign Terry Dactill, and if I undo that, you'll see that it will assign that as an event right after that.
>
> **[4:02](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=242)** So it keeps on updating live, which is pretty cool.
>
> **[4:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=245)** And there's a lot of other things that I could do here.
>
> **[4:08](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=248)** So I can also leave a comment.
>
> **[4:11](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=251)** So I'm going to go ahead and switch over to pretend like I'm JoJo Humphreys.
>
> **[4:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=256)** And I'm going to go into the issues tab now.
>
> **[4:19](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=259)** I'll notice that there is a section here for the take a look at my work so far, and I should have gotten a notification that talks about that as well.
>
> **[4:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=269)** So I can go to that notification and I'll just say, "Hey, Ray," and I can even put in an at sign and type in planet of the web here, select it from that dropdown menu.
>
> **[4:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=282)** And I'll just say, "I'll take a look."
>
> **[4:47](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=287)** And I'm going to comment, and that will show up as a comment.
>
> **[4:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=292)** So we can talk about the things that we find here.
>
> **[4:55](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=295)** If I want to though, I can create another issue.
>
> **[4:57](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=297)** So I've noticed that in this code section, in this read me file, this GitHub says GitHub, and this H should be capitalized.
>
> **[5:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=307)** So I'm going to go and create an issue.
>
> **[5:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=309)** So remember, I'm looking at the website from Jojo's perspective.
>
> **[5:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=313)** And so I'm going to go ahead and create a new issue.
>
> **[5:17](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=317)** And then I will say, "Fix spelling with GitHub."
>
> **[5:27](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=327)** "GitHub hub should have a capital H."
>
> **[5:31](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=331)** And here, I'll make sure that I assign Ray, or myself, I guess.
>
> **[5:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=337)** And I'm not sure that this is any particular issue, so maybe this will be a bug.
>
> **[5:46](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=346)** I'll call it a bug, so I'll give it that kind of label.
>
> **[5:49](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=349)** And I'll make it still part of that same milestone.
>
> **[5:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=352)** And now, notice that it's 50% done, 'cause there is another issue.
>
> **[5:57](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=357)** It's going to track the steps towards the milestone, according to the amount of issues that have been resolved.
>
> **[6:02](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=362)** So I'm going to submit new issue here.
>
> **[6:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=365)** And I'm going to now switch back into my own account.
>
> **[6:11](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=371)** And I can see the activity here, that JoJo has commented that she's going to take a look at the issue.
>
> **[6:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=380)** Now, because things are getting a little bit complicated, so if I click on issues, this will update and it'll say that I have now two issues.
>
> **[6:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=388)** And so what I can do is I can create a project, and that's kind of a better way of handling issues.
>
> **[6:35](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=395)** To create a project allows you to do some additional things and look at all the issues in a number of different ways.
>
> **[6:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=402)** So with projects, if you have an older project, you have the option of creating classic projects or normal projects.
>
> **[6:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=411)** This particular repo was created a long time ago, so it's actually giving me the option of doing classic projects.
>
> **[6:59](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=419)** But if you were doing this yourself, you might only see the ability to do new projects.
>
> **[7:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=423)** So let's go ahead and I can either link to an existing project or I can create a new project.
>
> **[7:11](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=431)** If you've created projects before, in any of your repositories, you will see this link to an existing project.
>
> **[7:18](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=438)** But in this case, I'm going to select new project here, and I'm going to hit the new project button.
>
> **[7:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=444)** And you'll see that I can choose different ways of looking at my work.
>
> **[7:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=449)** So there is the table view, which is sort of like an Excel spreadsheet, and that can show me all of the sort of project items that can be tied to issues.
>
> **[7:39](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=459)** I can also look at it in a Kanban view, and this used to be the old way of doing things.
>
> **[7:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=465)** Or I can also look at a roadmap, that is more of a traditional project management kind of look.
>
> **[7:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=471)** Now, for this one, it's pretty simple, but I really love this Kanban type of board.
>
> **[7:57](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=477)** So I'm going to hit the create button, and I can choose more than one view if I want to.
>
> **[8:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=483)** So notice that from here, I can have view one, and I can select the new view and see these in a number of different ways.
>
> **[8:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=490)** But I really do like, for project management, this sort of Kanban view, which is a part of the Agile methodology.
>
> **[8:17](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=497)** And notice that it's given me a number of different sort of columns.
>
> **[8:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=501)** And if I want to, I can add more columns.
>
> **[8:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=504)** But this is usually sort of enough to work on something here.
>
> **[8:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=508)** And from here, I can add items.
>
> **[8:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=510)** So here you can create what's called a draft issue.
>
> **[8:35](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=515)** So this would be where you brainstorm additional ways that you want to organize this project, but we already have some issues.
>
> **[8:44](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=524)** So what we can do is go to... And let's see, we can add an item here, and I'll just say "Fix spelling errors on site."
>
> **[9:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=545)** Right, so now it made that a draft issue.
>
> **[9:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=547)** I can convert that to a regular issue, right, so I can hit convert to issue.
>
> **[9:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=553)** And this is in the musical spoon repository.
>
> **[9:17](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=557)** And now, this actually becomes another issue in my repository.
>
> **[9:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=562)** So notice that projects aren't necessarily related to specific repos.
>
> **[9:27](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=567)** They can have more than one repo that they're related to.
>
> **[9:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=570)** So I'm going to rename this thing, special project here.
>
> **[9:35](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=575)** And I can give this additional descriptions, and if I want to just modify it like that.
>
> **[9:43](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=583)** So I'm going to go back into the special project, and here it is.
>
> **[9:49](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=589)** And notice that now I can see this issue, and click on it to take a look at similar types of, you know, sort of sections here.
>
> **[9:59](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=599)** So I can add assignees, me and JoJo to take a look at this.
>
> **[10:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=604)** And I can add, same thing, I can add labels.
>
> **[10:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=607)** So this might be a bug here, and add milestones.
>
> **[10:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=613)** So I'll add the final review milestone here, and I can continue to work on this issue until I am finished fixing the problem.
>
> **[10:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=622)** And once I do that, then I can close out this issue or I can go back into my repo.
>
> **[10:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=628)** So we'll go back into the musical spoon project.
>
> **[10:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=633)** And now under projects, you can see that the special project is being listed right here.
>
> **[10:39](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=639)** There's a lot more that you can do with issues and projects, but that gives you a little bit of a taste.
>
> **[10:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=645)** You really want to take a look at my course on project management for GitHub.
>
> **[10:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/organizing-projects?u=76281980&t=651)** It goes a lot deeper into all the options, but I find that projects are a fantastic way to organize the kind of things that I need to do when I'm working with GitHub.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), public (2), switch (2), finally, (1), this, (1)
> **Tools:** github (9)
> **UI Navigation:** select the (2), go to (2), click on (2), dropdown (1)
> **CLI Commands:** find (2), make (2)
> **Definitions:** is a  (3)
> **Prerequisites:** you'll need (1), getting started (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Syncing GitHub
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=0)** - [Instructor] Let's talk about the different ways that we can synchronize what's on GitHub with our local hard drive.
>
> **[0:06](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=6)** The first way that we do this is by using a command called git clone.
>
> **[0:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=9)** Git clone will take the copy of the GitHub repository and place it on your local hard drive.
>
> **[0:15](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=15)** If we already have a copy of the repository on our local hard drive, in order to synchronize the information that is on GitHub, we can issue a git fetch command.
>
> **[0:25](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=25)** Fetch downloads information from the remote repository and brings that information to your local repo, so that it's up to date.
>
> **[0:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=32)** Now, it doesn't actually do anything with the information, but it does synchronize the link between what's on your local drive with what is on your remote.
>
> **[0:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=42)** Finally, there is the pull command.
>
> **[0:44](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=44)** Pull is a combination of doing a fetch, but also merging the data that is in your remote repository with the local version.
>
> **[0:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=52)** So let's go ahead and try those different commands.
>
> **[0:55](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=55)** First off, I'm going to try to clone a repository.
>
> **[0:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=58)** To do that, we're going to need to have a terminal open, and I'm going to put this on the Desktop, which is where I've been storing things, and I need to issue a git clone command, and then include the URL of the file that I want to clone.
>
> **[1:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=73)** Now for that, we can go to the website, and right here is a button called Code that you can use to download the link.
>
> **[1:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=82)** So if I click right here, it'll copy the link to the repository.
>
> **[1:25](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=85)** Now this link is really just the URL of the repository plus the extension .git just in case you forget it.
>
> **[1:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=93)** So once we have that, we can go back into our terminal, paste that URL, and I'm going to hit Return, and you can see that it downloads everything into our local hard drive.
>
> **[1:43](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=103)** Now, let's go back into the Desktop.
>
> **[1:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=105)** You can see that I called it whatever it's called at GitHub, and if we open it up, it's going to have all the files that are on GitHub.
>
> **[1:53](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=113)** Now we can open this in something like Visual Studio Code, but we already have this project downloaded into our Desktop on this folder.
>
> **[2:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=123)** It's okay to download multiple copies of a project.
>
> **[2:06](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=126)** The copy that you've just downloaded from GitHub, it's actually the latest version of what's stored in GitHub itself.
>
> **[2:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=134)** We don't really need this, so I'm just going to put this in the Trash, and I'm going to open Visual Studio Code.
>
> **[2:19](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=139)** We should have the project that we've been working with.
>
> **[2:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=142)** Here, if you take a look at this section in Visual Studio Code, you'll see that we have the main branch as well as the fixheadline branch.
>
> **[2:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=150)** And there's nothing really else that this project knows about what's happened to this project since we've updated it in GitHub.
>
> **[2:38](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=158)** So I can issue a git fetch command here and it's going to take care of looking at the data that's on GitHub and download it that into the current project.
>
> **[2:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=168)** So if you remember, we created a branch on GitHub called titlechange and so it brought that branch into our local repository.
>
> **[2:57](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=177)** So if we click right here, we can see that this branch will also appear in here under titlechange.
>
> **[3:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=184)** Notice that it says that it's under origin/titlechange.
>
> **[3:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=189)** So you can see that there are some branches up here.
>
> **[3:11](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=191)** These are the branches that are on this machine, and then there are some branches that are at GitHub, and those are under the origin, which is the remote name, and then the name of the branch.
>
> **[3:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=204)** So if we took a look at our branch list, let me clear this out and I'll do a git branch command.
>
> **[3:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=210)** You'll see that it's only showing me the two branch that are here locally, but I can do a git branch -a command, that's going to show me all the branches, including the remote branches.
>
> **[3:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=222)** Now, if I want to check out one of those branches, the easiest way if you have Visual Studio Code is to just come over here and click on any of the branches that you want to bring in from the remote branch.
>
> **[3:53](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=233)** So I could just click on this right here, and it's going to switch me over to that titlechange branch, and it's going to bring it in locally.
>
> **[4:01](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=241)** You can see that it's right here already.
>
> **[4:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=243)** All right, I'm going to switch back over to the main branch, and I'm going to issue the last command, which is the git pull command.
>
> **[4:12](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=252)** That's going to try to bring in all the changes, but because of the way that I created this repository, I didn't set up an upstream link from my main branch to my remote branch.
>
> **[4:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=263)** So I do need to copy this command right here and I'll paste it.
>
> **[4:31](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=271)** And what I want to do is make sure that I tie in my local branch, which is called main and link it to origin/main.
>
> **[4:39](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=279)** So this is the command that I need to execute.
>
> **[4:41](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=281)** Now the local version of main has been synced to the remote version of main.
>
> **[4:47](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=287)** Let's clear this out and issue a git pull.
>
> **[4:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=291)** Now all the changes that were on the remote version of our site have been changed locally.
>
> **[4:56](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=296)** So if I take a look at the index, you'll be able to see that I do have that title change.
>
> **[5:02](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=302)** Now what we want to do is make sure that we add that new title into the columns as well as the media file.
>
> **[5:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=309)** So I'm going to come over here and I'll copy this.
>
> **[5:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=313)** I'll go ahead and create a new branch, just to show you how git flow will work with a remote repository.
>
> **[5:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=320)** So we will do a git switch -c, and then I'll call this thing othertitlechanges.
>
> **[5:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=330)** This creates a new branch, and now I can go into my other files, paste that change, I'll save this, and paste that change and I'll save this, and those files are now modified.
>
> **[5:44](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=344)** Let's clear this out and I can do a git add ., and git commit, and put in a message right there.
>
> **[5:57](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=357)** So now we'll go back into main and we'll merge othertitlechanges.
>
> **[6:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=369)** All right, so now what I want to do is push all of the changes that I've done locally and push them onto GitHub, so I can do a git push.
>
> **[6:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=381)** Now that's going to push the changes that I've made locally, but only to the main branch.
>
> **[6:26](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=386)** So you can also do a git push --all if you want to push all the changes in all the branches.
>
> **[6:34](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=394)** Let's take a look at what's happened in GitHub.
>
> **[6:36](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=396)** I'm going to refresh this page, and you'll notice that I changed everything in the main branch as well as added this othertitlechanges into our branch list.
>
> **[6:49](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=409)** Now, I could have just pushed the othertitlechanges branch and then created a pull request.
>
> **[6:56](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=416)** That will work, but the change was so little that I just took care of it in the main branch as well.
>
> **[7:02](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=422)** So let's take a look at this issue now, and I'm going to make a comment, and I can actually type in the @ sign here to pull up a list of names in my project, and let Terry Dactill know, Terry will get a message, which will be an email, and then I'll let Terry know that the changes have been made, and I am going to close this issue with this comment.
>
> **[7:35](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=455)** So now we've got a history of everything that we've done here all the way down to closing the issue, which means this issue has been fixed.
>
> **[7:43](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=463)** If we go to Projects again, you can see that everything looks great here, and if I want to, I can Archive this, and it'll remove it from the list of To dos, which is something you want to do every now and then.
>
> **[7:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=478)** Right, so the final thing that I could do is create a release here for this project.
>
> **[8:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=484)** It looks like Releases aren't showing right now.
>
> **[8:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=487)** So you can go right here and then make sure that you turn on the Release feature.
>
> **[8:12](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=492)** So Release is like an official version of your website.
>
> **[8:17](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=497)** The reason you do Releases is because you want people to have access to a specific version of your site.
>
> **[8:25](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=505)** Your repository is going to change all the time and you want people to come back to any specific version, so that if they're using it on their project, they can always have that version to work with.
>
> **[8:38](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=518)** So now that I've added that back, I can go to Create a new release, and I can give this thing a version.
>
> **[8:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=525)** I'm going to give it a v1.0.0.
>
> **[8:50](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=530)** Usually versions on the web have three digits.
>
> **[8:53](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=533)** This is a main release, this is sort of a sublease, and this is a very minor release, so this is sort of like bug fixes, and then the next one is any change that would break some things in the original release, and then a new version, like a version two, would be a completely new version.
>
> **[9:15](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=555)** So the target of this release is going to be whatever happens to be in the main branch.
>
> **[9:19](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=559)** I could choose some other branches if I want to from here.
>
> **[9:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=562)** And then I'm going to give this the release title and I'll just call it First Release.
>
> **[9:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=569)** And I can write some notes in here if I want to, but I don't need to do that.
>
> **[9:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=573)** And here you can see more information about Semantic versioning, here you can also make this a pre-release, which means you're letting people know that this isn't production-ready quite yet.
>
> **[9:44](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=584)** In that case, you might name it something like this, v0.1-alpha.
>
> **[9:49](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=589)** It really wouldn't be called a version one or however else you want to do this.
>
> **[9:53](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=593)** You can read this notes over here in Semantic versioning.
>
> **[9:56](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=596)** This isn't going to be a beta or anything like that.
>
> **[9:59](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=599)** It's going to be an official release.
>
> **[10:02](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=602)** So I'm going to say Publish release.
>
> **[10:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=604)** And this gives you a place where you can publish all your releases, and people can come in here and download the source code for your files, and take a look at your code in that state.
>
> **[10:18](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=618)** So that's something that people can always go to.
>
> **[10:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=620)** Notice that it also creates a little branch for the release and that way people can always come back into this version of the code when you made the official release.
>
> **[10:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=632)** You can see that GitHub is pretty useful for doing more than just creating different versions of your sites.
>
> **[10:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/syncing-github?u=76281980&t=637)** So in addition to having the capabilities of a time machine with Git, GitHub really gives you a way to create a social environment where people can collaborate together.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), this, (5), switch (3), this. (2), finally, (1)
> **CLI Commands:** git (17), make (5)
> **Tools:** github (15), visual studio (4), terminal (2)
> **UI Navigation:** go to (4), click on (2)
> **Definitions:** is a  (4), is called (1)
> **Env Vars:** url (3)
> **Exercise Files:** download the (2), source code (1)
> **Versions:** v1.0.0 (1), v0.1 (1)

#### Repository insights
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=0)** - [Instructor] If you want to keep track of what's going on with your repository, then what you want is to go to the insights tab.
>
> **[0:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=7)** So this tab is going to give you all kinds of information about what is going on with this project.
>
> **[0:12](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=12)** Just to note that this is going to show a little bit differently depending on whether your repo is set to private, and whether you have a GitHub Pro or an enterprise account.
>
> **[0:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=23)** Some of the features that you'll see here will only show up on certain types of accounts.
>
> **[0:27](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=27)** So you may not see everything that I'm about to show you and you can take a look at different ranges.
>
> **[0:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=33)** Now this project has been going on for a while, I've used it in this course, and this course has had a couple of revisions.
>
> **[0:40](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=40)** So I do have some activity, not in all of these different places, but certainly in some.
>
> **[0:46](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=46)** So you could see here that we have had six merge pull requests in this time period.
>
> **[0:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=51)** I am right now the only author, even though other people are added into the project, I'm the only one that has committed things to main.
>
> **[1:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=60)** And there's also been several additions and deletions.
>
> **[1:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=63)** So this is a great place to see what is going on and take a look at the graph of the active issues here.
>
> **[1:11](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=71)** Plus if you go to contributors, you can take a look at the commits that have happened over time and also additions and deletions right over here.
>
> **[1:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=83)** So we can look at additions here.
>
> **[1:26](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=86)** I don't get like a huge graph because this isn't exactly like a super popular project, but you could see here that there's been a lot of work, even though it happens all in spurts here of different places.
>
> **[1:38](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=98)** So you can even select these different ranges to see the activity over time.
>
> **[1:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=105)** Now in community, I'm not going to have anything, because I haven't set up discussions just yet, we're going to talk about that later.
>
> **[1:53](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=113)** And if you go to community standards, you could see a checklist of how this compares to GitHub's recommended community standards.
>
> **[2:02](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=122)** I talked about all these different special files that you can add.
>
> **[2:06](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=126)** And so this is another place where you can get to those files and create them if you want to have this meet the community standards that GitHub has.
>
> **[2:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=136)** If you take a look at traffic, you can see another graph of the clones.
>
> **[2:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=141)** So some people have cloned this repository.
>
> **[2:25](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=145)** And also there's also been a lot of visitors, I mean not a ton, but this does have some activity, 'cause as I mentioned, a lot of people do look at this project and you can see the details of what is going on with everything in the project.
>
> **[2:41](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=161)** Also, where the people that came to the site came from.
>
> **[2:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=165)** This might be good if you for example, added your blog to your website, you can get a little bit of information about some of the traffic that comes to that project and there's an additional place for just the commits over time right here.
>
> **[3:01](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=181)** So that's pretty self-explanatory.
>
> **[3:02](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=182)** Code frequency just tells you again a list of what is happening with your code, additions versus deletions here, which is fine.
>
> **[3:12](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=192)** I don't really go here that often.
>
> **[3:15](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=195)** The dependency graph, really, normally it refers to when you have to package that JSON file 'cause you're working on an Node.js project or a GEM file from like a Ruby project.
>
> **[3:27](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=207)** And this would tell you what dependencies your project has and if any of those dependencies are out of date.
>
> **[3:35](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=215)** But this particular project is just a bunch of HTML files, so it's not going to really give you any information.
>
> **[3:43](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=223)** There is something called Dependabot that you can set up to have GitHub keep track of your dependencies, and when they go out of date and suggest changes to those dependencies if you need to update them.
>
> **[3:59](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=239)** So network, you can see if there are more than one people making either pull requests or recommendations to changes in your code, they would show up right here.
>
> **[4:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=249)** I'm pretty much the only person that does anything, but occasionally I'll get like a strange pull request from somebody taking the course, and just creating a pull request for the heck of it, which is fine, it's not a big deal, but it's not something that I normally add onto the course.
>
> **[4:25](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=265)** And you can see the labels for when those things happen.
>
> **[4:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=268)** Same thing for forks.
>
> **[4:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=269)** There have been some people making forks.
>
> **[4:31](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=271)** This is just basically a copy of the musical spoon project.
>
> **[4:36](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=276)** If somebody just wants to play around with it on their own repository, they can make a fork of it, and that's like a duplicate and it's pretty easy to do.
>
> **[4:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=285)** So if we go back in here to the code, then I can do a fork right from here.
>
> **[4:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=292)** So you can also see here the amount of forks that have been done and the number of people watching what's going on with this project.
>
> **[5:01](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=301)** And also I have gotten three stars on this project, that is not a ton, but this project's not really meant for people to do stuff with, so it's not particularly useful.
>
> **[5:11](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=311)** But that's nice to get a star every now and then.
>
> **[5:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=314)** And so you can take a look at a lot of what's going on with the project right here.
>
> **[5:19](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=319)** Now if you go back to your main profile page, you'll be able to see some additional information about the projects.
>
> **[5:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=332)** So you could see here that you can take some of your repositories and pin them so that you can see repositories that perhaps have a lot of stars or have a lot of traffic.
>
> **[5:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=342)** And you can put 'em all in here and pin them so you can always see them.
>
> **[5:47](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=347)** So you could see here that because I have a repository with the username planet of the web then that read me file shows up in here, I talked about this earlier.
>
> **[5:59](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=359)** But here you can also see information about the amount of followers that you have, and I just happen to have a lot of followers, I do a lot of courses, so that's where that comes from.
>
> **[6:08](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=368)** And then I'm actually only following 13 people.
>
> **[6:11](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=371)** So it tells you a little bit of where I am at and where I'm from.
>
> **[6:15](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=375)** And you can see other things in here.
>
> **[6:18](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=378)** So the pin repositories are actually pretty cool.
>
> **[6:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=380)** You can customize them just by clicking on this button right here.
>
> **[6:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=384)** And then you can pull up any project, you can have up to like six showing up at any one time.
>
> **[6:31](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=391)** So usually what you end up doing is if you do a new project, and you want to keep up with how that project is doing over time, then you can pin it.
>
> **[6:40](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=400)** And of course, I have my most popular projects here, although Expressjs is a little bit more popular, it's a course that got rerecorded by somebody else, so I don't really need to keep track of it.
>
> **[6:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=412)** So some of this new things that I have done is I have something in the GitHub marketplace called Copy to Branches, it's a really simple utility that lets you copy things from one branch to another.
>
> **[7:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=424)** And this podcast generator is something that I created for a course.
>
> **[7:08](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=428)** So I like to keep track of those things.
>
> **[7:11](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=431)** And so I pinned them to my profile so that I can always get back to them and see them.
>
> **[7:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=436)** And then you can see here the contribution graph, and this allows you to take a look at the contributions and you can just look at the contributions.
>
> **[7:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=448)** You can turn off the private contributions, 'cause you may not want people to know about those.
>
> **[7:34](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=454)** And you can show or hide this on your profile so that other people can't see it as well.
>
> **[7:41](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=461)** So this also shows you your activity within GitHub and also the different organizations that you're tied to right here.
>
> **[7:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=468)** So this is the different things that I have contributed to, and actually 61 other repositories.
>
> **[7:55](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=475)** So you can get more information about that here.
>
> **[7:57](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=477)** So I really do love this page, and you can actually also go back through time.
>
> **[8:01](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=481)** I feel like I did better in 2022 in terms of GitHub usage, which is strange 'cause I'm always on GitHub, it's just that I don't always commit a ton of stuff.
>
> **[8:11](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=491)** I guess I'm okay because we're right now like in September, so this empty area is not really a big deal.
>
> **[8:18](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=498)** But this lets you go look at what you were working on and your periods of activity, which I really love.
>
> **[8:26](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=506)** And you can see some other work here, contribution activity, some of the stuff that we just did on this course as well as some of the other things that have been happening.
>
> **[8:35](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=515)** So this is a great place to go every now and then and there is all kinds of other cool stuff in GitHub.
>
> **[8:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/repository-insights?u=76281980&t=522)** I really love the profile site and the ability to star projects and also take a look at how well my projects are doing.

> [!info]- Semantic Content
>
> **Code Keywords:** from. (3), private (2), while, (1), super (1), self (1)
> **Tools:** github (9)
> **Definitions:** is a  (3), refers to (1)
> **CLI Commands:** node (1), ruby (1), make (1)
> **Env Vars:** json (1), gem (1), html (1)
> **UI Navigation:** go to (3)
> **Prerequisites:** set up (2)
> **File Paths:** node.js (1)

#### GitHub shortcut features
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=0)** - [Instructor] The GitHub website has probably more shortcuts than any other program I've ever seen in my life.
>
> **[0:06](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=6)** It's almost ridiculous.
>
> **[0:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=7)** Now, there's a few that I'll show you that are my favorite shortcuts that you probably want to know, but for all the other ones, make sure you check out this URL right here in the documentation.
>
> **[0:19](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=19)** There are just pages and pages of different shortcuts and I'm not even sure that this lists all of them because all kinds of different things have different shortcuts attached to them.
>
> **[0:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=32)** So here are some of my favorite.
>
> **[0:34](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=34)** Number one, the only one that you need to know is the question mark.
>
> **[0:38](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=38)** If you hit the question mark, you basically get a list of most of the shortcuts.
>
> **[0:43](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=43)** Now, this is context sensitive, which means that depending on where you are, the shortcuts that it lists here are different.
>
> **[0:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=51)** And this also has a link to the documentation that I showed you a while ago.
>
> **[0:56](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=56)** So if you don't remember anything else, just remember the question mark.
>
> **[1:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=60)** Now, the next one that I like to use the most is just the slash.
>
> **[1:02](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=62)** You can see right here that it says type slash to search.
>
> **[1:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=67)** And here, most of the time, I am looking for projects or things in my projects.
>
> **[1:12](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=72)** So if you are in a repo, notice that it automatically realizes that you may be looking for something within that repository.
>
> **[1:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=81)** So this is also context sensitive.
>
> **[1:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=84)** If I'm looking for say a JavaScript file, maybe I could do a .js.
>
> **[1:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=90)** And let's see, of course, I didn't have a .js.
>
> **[1:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=93)** Let's do a .html because I know I have several of them.
>
> **[1:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=97)** I can move up and down with the arrows just to get to the file that I'm looking for, and then just hit the return button to get to it, immediately taking me to an editor.
>
> **[1:46](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=106)** Let's just go to my profile and then I'll do a slash.
>
> **[1:50](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=110)** And this time, you'll see that it's giving you slightly different things.
>
> **[1:54](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=114)** So as I mentioned, it is case sensitive, and that's okay.
>
> **[1:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=118)** So in addition to this slash to search, you can see right down here that there's a special thing called the command palette.
>
> **[2:06](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=126)** So think about in a code editor how you have the command palette, and it kind of brings this sort of combo box that does all kinds of things, like let you go again directly to repositories.
>
> **[2:19](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=139)** So it's sort of like a search, but a little more powerful and definitely a place for you to check out.
>
> **[2:25](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=145)** So from here, I can do something like take a look at my projects.
>
> **[2:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=150)** So it's a little bit more flexible than the search and it's sort of constrained to like the things that you would be looking for.
>
> **[2:38](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=158)** All right, so in addition to that, I can also type in the shortcut for the command palette itself is Command + K on a Mac or Control + K on Windows.
>
> **[2:50](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=170)** Let's go back into my repository and I'll do Command + K.
>
> **[2:54](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=174)** You can see that it comes right up.
>
> **[2:56](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=176)** And of course, you can also hit this button right here.
>
> **[3:01](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=181)** Another thing that you might like is let's open up a repository.
>
> **[3:06](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=186)** So let's go back to overview, actually repositories and then we'll open up this musical-spoon.
>
> **[3:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=196)** So if I hit the G key and then I hit I, I go to issues and I can hit G and P to go to pull requests.
>
> **[3:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=203)** So there are shortcuts for every one of the tabs.
>
> **[3:27](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=207)** You can probably not use the mouse at all.
>
> **[3:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=210)** And once you get good at some of these shortcuts, you'll be using that instead of the mouse.
>
> **[3:36](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=216)** It's just a lot faster.
>
> **[3:38](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=218)** Okay, a couple of other really good ones are the period.
>
> **[3:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=222)** The period takes you to a Codespaces-like editor that is known as [github.dev](https://github.dev).
>
> **[3:50](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=230)** So if you take a look at this URL right here, you'll notice that it actually switched this from [github.com/my](https://github.com/my) username and then slash the name of the project to [github.dev](https://github.dev).
>
> **[4:02](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=242)** This is a lightweight editor.
>
> **[4:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=244)** It doesn't let you run build processes like Codespaces would do, but for the most part, if you just want to edit something in your project, this is a really quick way of getting in there.
>
> **[4:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=254)** You can see that it actually opened a lot quicker than your Codespace would.
>
> **[4:19](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=259)** And the other advantage is that you can actually send somebody a URL to this [github.dev](https://github.dev) by just copying and pasting this and then they go straight into a sample of your code.
>
> **[4:31](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=271)** So I really do like that.
>
> **[4:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=273)** I had shown you that you could do a github.new to create a new repo before.
>
> **[4:41](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=281)** So that's another one that I use all the time.
>
> **[4:43](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=283)** It has another one like it called repo.new and it basically takes you to the exact same place but a couple of shortcuts for that.
>
> **[4:55](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=295)** Now, there's a couple of other really useful things that you should know.
>
> **[4:59](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=299)** There is a section right here that allows you to turn on upcoming features called the feature preview.
>
> **[5:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=307)** So this lets you look at the different features that are being added and tested in beta by GitHub.
>
> **[5:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=314)** And you could see that I am really excited about just about any new features.
>
> **[5:18](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=318)** So I usually end up turning everything on.
>
> **[5:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=322)** I'm not a big Jupyter Notebooks person, so I don't have that one up but you could see that almost everything else is turned on.
>
> **[5:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=329)** So like the command palette.
>
> **[5:31](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=331)** So your command palette might look a little bit different than mine, but it's definitely on.
>
> **[5:36](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=336)** If you're trying something out and my screen looks a little bit different, then make sure you go to these feature previews right here and try them out.
>
> **[5:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=345)** I think they're very good.
>
> **[5:46](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=346)** I've never found one that I didn't like.
>
> **[5:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-shortcut-features?u=76281980&t=348)** So definitely check that out.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), else, (1), for, (1), for. (1)
> **Tools:** github (7), jupyter (1)
> **Definitions:** is a  (3), means that (1), known as (1)
> **URLs:** [github.dev](https://github.dev) (3), [github.com](https://github.com) (1)
> **Env Vars:** url (3)
> **UI Navigation:** go to (3)
> **CLI Commands:** make (2)
> **Documentation:** the documentation (2)


### 4. GitHub Social and Publishing

#### GitHub discussions
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=0)** - [Instructor] Discussions are a way to encourage conversations about your code that are not necessarily related to fixing code.
>
> **[0:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=7)** Discussions are based on GitHub Issues, so they look a little bit like Issues but they have some additional features.
>
> **[0:15](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=15)** Discussions used to happen actually inside Issues.
>
> **[0:18](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=18)** People would discuss all kinds of things that weren't really problems related to the code, which is what Issues was originally designed to deal with.
>
> **[0:27](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=27)** So, GitHub broke this out and added it as its own feature.
>
> **[0:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=32)** Like with Issues, Discussions are threaded conversations that offer the rich power of GitHub's existing messaging tools.
>
> **[0:39](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=39)** If you find that a conversation offers a unique idea that should be turned into a feature, you can easily turn Discussions into Issues easily.
>
> **[0:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=48)** Let's take a look at how they work in our little project.
>
> **[0:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=52)** So I'm going to start by going to Settings, and I'm going to turn on Discussions for this project.
>
> **[1:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=64)** So I can scroll down here and turn on Discussions, and then also Set up Discussions.
>
> **[1:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=73)** This will begin by letting me place a new Discussion that is the welcome to the project.
>
> **[1:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=80)** So I'm going to say Start Discussion.
>
> **[1:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=82)** This will create the first Issue, and it gives you these nice little confetti here.
>
> **[1:27](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=87)** And from here, we can go back into the main Discussions screen, and we can see that it gets added and pinned to the top.
>
> **[1:34](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=94)** So you can see that it gives you a little bit of help right here.
>
> **[1:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=97)** And you get a bunch of categories that you can automatically place Discussions into.
>
> **[1:43](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=103)** And you can also add these by clickin' right here, and then either deleting these or adding your own.
>
> **[1:49](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=109)** So you can say New Category right here, and also you can create sections for additional categories.
>
> **[1:55](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=115)** So let's click back into Discussions.
>
> **[1:57](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=117)** You can see that by default, it gives you a way to search through different Discussions, and it works pretty much like the GitHub search would.
>
> **[2:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=125)** So you can search by say a specific author, and it's always going to give you help.
>
> **[2:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=130)** And also it's going to give you all these other additional labels that you can look for things in here.
>
> **[2:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=136)** So you can say look for "planetoftheweb" as the author, and something that is closed.
>
> **[2:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=142)** And of course, you'd have to get rid of this, "is open."
>
> **[2:25](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=145)** And then you can hit Return, and it would give you some matching Discussions.
>
> **[2:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=148)** But since these are brand new, there's not going to be any new Discussions other than the one that we first created.
>
> **[2:35](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=155)** So let's go back to the homepage here.
>
> **[2:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=157)** You can see the single Discussion.
>
> **[2:39](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=159)** You can tell that you can vote these up or down.
>
> **[2:41](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=161)** So if you have multiple Discussions, you can upvote them, and that's pretty useful so that you can see which ones are the most popular Discussions.
>
> **[2:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=171)** Let's go ahead and create another one.
>
> **[2:54](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=174)** And there's different categories, as I mentioned before, one of them is Polls.
>
> **[2:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=178)** And so, let's go ahead and try doing a poll 'cause that's a pretty cool Discussion type.
>
> **[3:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=183)** So I'm going to say, "What do you think?"
>
> **[3:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=187)** And then I'll ask a question, "What feature do you think I should add next?"
>
> **[3:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=194)** And we'll put in here the poll question, "Feature to Add."
>
> **[3:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=200)** And we'll say "New Pages," "Help System."
>
> **[3:27](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=207)** And then, we can add another option here, "Dynamic search."
>
> **[3:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=213)** Alright, so we'll say Start Discussion.
>
> **[3:36](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=216)** And now, people can come in here and vote on this poll.
>
> **[3:39](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=219)** And you can see that as people vote, this would get additional sort of graphics here that would display how people are voting on this topic.
>
> **[3:47](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=227)** Now, I can pin this Discussion, and that can go either to the top of the page... Let's go ahead and do that so we can see the two sort of Discussions pinned.
>
> **[3:56](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=236)** And then I can also pin the Discussion to the category.
>
> **[4:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=240)** So also at the top of the page, in that category, you would be able to see that Discussion as well.
>
> **[4:06](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=246)** So you could see here that we have the pinned Discussion that we just created here, under Polls, and then sort of the first pinned Discussion that we managed to add when we created the page.
>
> **[4:17](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=257)** You can create four different pins that go up here.
>
> **[4:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=261)** And let's go into one of these Discussions to see what else we can do inside the Discussions.
>
> **[4:27](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=267)** So there is, of course, a place where you can change and add labels.
>
> **[4:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=272)** And also you can turn off notifications because by default, we will get notifications when somebody interacts with this poll, which would be fine 'cause I do want to know when people vote and stuff.
>
> **[4:43](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=283)** Now, you can add comments into any Discussion item.
>
> **[4:47](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=287)** And this has a full featured markdown editor with all of the different pieces of help that you can do here.
>
> **[4:54](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=294)** So for example, you can reference Issues, you can reference people, you can create task lists in here as well.
>
> **[5:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=300)** And you can use all the shortcuts or just use markdown.
>
> **[5:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=303)** And then let's write a comment, and I'll just say, "I love this poll.
>
> **[5:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=309)** I'm thinking about what other questions we should ask here."
>
> **[5:17](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=317)** And I'll just hit Comment.
>
> **[5:19](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=319)** You can also close this with Comment.
>
> **[5:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=321)** And I'll just say Comment here, right?
>
> **[5:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=324)** So that will appear over here now, and it tells you who wrote it and when they wrote it, and it gives you some additional options if you want to Hide this or Delete it.
>
> **[5:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=333)** You can also report the content, and also quote the reply if you want to reply with this somewhere else, where you can copy the link to also reference that in perhaps another message.
>
> **[5:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=345)** And here is the place where you can upvote it.
>
> **[5:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=348)** Of course because it's me, it already upvoted it, so it doesn't let me upvote it and give it a second upvote, so somebody else would have to do that.
>
> **[5:56](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=356)** And then you can also click in here for emojis, so I'll just add like a love emoji here 'cause this is a good comment I guess.
>
> **[6:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=364)** And there's a lot of other options in here.
>
> **[6:08](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=368)** So you can say, lock this conversation to prevent additional conversations from happening, maybe when this poll gets closed.
>
> **[6:15](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=375)** You can transfer this Discussion to maybe another repository.
>
> **[6:19](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=379)** So if you have another Discussion in a separate repository, you can do that there.
>
> **[6:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=383)** You can unpin the Discussions from either the top of the page or the category, or you can delete the Discussions.
>
> **[6:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=393)** Now, let's take a look at another one of the conversations we have.
>
> **[6:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=397)** So I'll go back into this first one.
>
> **[6:39](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=399)** And you'll see that whenever we are not doing polls, we get this additional option here where we can create an Issue from this Discussion.
>
> **[6:49](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=409)** So if you're having a long discussion, and you realize that this would make a fantastic Issue, you just click on that button.
>
> **[6:55](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=415)** And look, it automatically went to the Issues tab and it lets you create an Issue with everything that is in that Discussion so far.
>
> **[7:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=427)** And so we could do the normal things that we do with Issues here.
>
> **[7:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=430)** I'm going to go back into Discussions.
>
> **[7:12](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=432)** And when you create enough Discussions, you also get an additional item under Insights.
>
> **[7:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=440)** Although I'm not going to have very much in there, if anything at all.
>
> **[7:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=443)** But now when you have the Discussions, we should be able to go to the Community tab and take a look at the "Contribution activity" and some of these other graphs.
>
> **[7:34](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=454)** However, since this is pretty new, it doesn't have a lot of data to fill these out, so I'm surprised that it actually showed me this one right here.
>
> **[7:43](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=463)** So, definitely something that you want to peek into as your Discussions groups get going a little bit longer.
>
> **[7:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=472)** Let's go ahead and actually go back into the other Discussion, and I'll make a comment here.
>
> **[8:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=480)** "I'm so glad we started this."
>
> **[8:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=484)** So I'll say Comment.
>
> **[8:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=487)** And am going to go ahead and close this Discussion, just to show you that now nobody else can comment.
>
> **[8:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=493)** Actually, you can still comment.
>
> **[8:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=494)** We can reopen the Discussion, but you can no longer comment on the Discussion until you reopen it.
>
> **[8:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=502)** And you can also close this in different ways.
>
> **[8:25](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=505)** So you can close it as maybe something that's outdated, or you can also close it as a duplicate answer because somebody already created this or maybe answered it somewhere else.
>
> **[8:36](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=516)** So you definitely don't want a lot of duplicates in your Discussion.
>
> **[8:40](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-discussions?u=76281980&t=520)** So Discussions are a little bit like Issues, and it also feels a bit like sites like Reddit and others that allow you to have all these features for a fantastic community.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), default, (2), new, (2), delete (2), this, (1)
> **Tools:** github (4)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** scroll down (1), click on (1), go to (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)

#### GitHub notifications
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=0)** - [Instructor] GitHub send notifications for all types of activities on the website.
>
> **[0:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=4)** So let's go over some of the types of notifications and how to control them a little bit.
>
> **[0:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=9)** So there are three main venues for checking your notifications.
>
> **[0:12](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=12)** The first is on the website itself.
>
> **[0:15](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=15)** There is a notifications tab right here and you can see that, and it has a blue dot because I have recently gotten some new notifications.
>
> **[0:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=23)** Also in the same way on any specific repo, you can take a look at how those notifications will be tracked for this specific repo.
>
> **[0:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=33)** As you can see here, that I can say participating and mentions, all activity, ignore if I never want to be notified, or custom.
>
> **[0:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=42)** Now, if I click on custom, you can see that I can get notifications only for specific things.
>
> **[0:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=48)** So that's how you do things on a repo level.
>
> **[0:50](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=50)** You can also click on this notifications and it gives you a similar kind of interface to other things in GitHub where you have these different sections that allow you to do things.
>
> **[1:01](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=61)** So the first is to look at things on the website.
>
> **[1:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=65)** Another way of getting notifications is by email.
>
> **[1:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=69)** Now, when your team performs certain actions you'll tell GitHub to let you know by sending you an email and you can control how that works.
>
> **[1:17](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=77)** Finally, you can also take a look at notifications through the mobile application.
>
> **[1:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=81)** It's a similar interface to this right here, but obviously because it's mobile, it's a little bit simplified.
>
> **[1:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=88)** So on this notifications inbox, basically it's sort of like a mail type interface where you get a list of messages for the notifications that you have.
>
> **[1:38](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=98)** Over here on the left, you have a sort of way of looking at an inbox for all the new notifications.
>
> **[1:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=105)** You have a section here for unread notifications, so once that you haven't seen before, and then this tab for all.
>
> **[1:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=112)** There's also lots of filters and sometimes it might be good to not just see all the notifications, but look at them by repository.
>
> **[2:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=120)** It makes things a little bit shorter and tries to group things a little bit better.
>
> **[2:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=124)** So I like to have that on most of the time.
>
> **[2:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=127)** You can also filter in different ways, so you can filter by all the notifications that have been specifically assigned to you, the ones where you're participating, any that you have been mentioned in, et cetera, et cetera.
>
> **[2:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=141)** So in addition to that, you have sort of the latest repos that have notifications for you.
>
> **[2:27](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=147)** So you can take a look at all those right there.
>
> **[2:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=150)** And whenever you find a notification that you want to get back into, you can actually bookmark it, and they would appear in this saved section.
>
> **[2:39](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=159)** So that is another way of sort of highlighting specific notifications that you want to take a look at later.
>
> **[2:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=168)** There are lots of settings where you can control how those notifications are sent to you.
>
> **[2:53](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=173)** And I'm going to do that by going to this icon right here with my photo and going to settings.
>
> **[3:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=180)** So this has a notifications section, and this is where you can figure how you want GitHub to send you information.
>
> **[3:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=189)** So you can see here that default notifications email will be a specific email that you have added into GitHub.
>
> **[3:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=196)** When you create your profile, you can add different emails and this dropdown here will have a list of all the emails that you have added.
>
> **[3:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=204)** Now, for the most part you can automatically watch repositories.
>
> **[3:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=209)** So I believe this is on by default, but if you're getting too many notifications, you know we have a group that has like over 900 repos and I myself have hundreds of repos as well.
>
> **[3:41](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=221)** So I don't always want to be notified of everything.
>
> **[3:44](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=224)** So you can turn this toggles on and off here.
>
> **[3:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=228)** And then also when you join a new team, you will automatically be subscribed to updates and receive notifications as well.
>
> **[3:54](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=234)** So if you're getting too many notifications you may want to turn these on or off.
>
> **[3:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=238)** A lot of times it depends as to what your role is for that project.
>
> **[4:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=243)** So there's also a place where you can control your subscriptions.
>
> **[4:08](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=248)** So you can say how you want to be notified.
>
> **[4:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=250)** So whether you want to be notified on the notification sort of tab or you want GitHub to send you an email, so you can control that here.
>
> **[4:19](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=259)** And also what happens when you are participating on conversations and somebody sends you a mention, do you want to be just notified on GitHub or do you want it to send you an email?
>
> **[4:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=270)** So that's pretty cool.
>
> **[4:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=273)** And there's also something here for what happens when you run a GitHub action.
>
> **[4:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=277)** If you want it to notify you by email I like to have this, at least this failed workflows send me an email and only notify me when a workflow fails.
>
> **[4:49](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=289)** If you're running a GitHub action and it happens to fail, I like to get those emails for sure.
>
> **[4:54](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=294)** And then if there's new vulnerabilities, you can choose also how you get notified.
>
> **[4:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=298)** There's also a CLI tool.
>
> **[5:01](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=301)** I actually am going to change that to email because I don't use the CLI tool very much for the Penda bot alerts.
>
> **[5:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=307)** The Penda bot is something that tracks your repos dependencies and it can notify you if something gets to be out of date.
>
> **[5:15](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=315)** And if one of your dependencies has maybe been deprecated and needs to be updated.
>
> **[5:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=322)** So you can do that as well.
>
> **[5:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=323)** You can also get a weekly digest, which will just send you a weekly summary.
>
> **[5:27](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=327)** That might be good if you don't want to get all the notifications you know every day, every minute that they happen.
>
> **[5:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=333)** If you're like me, that has already a hundreds of repos so you may want to get this thing sent either weekly or daily or not to send at all.
>
> **[5:43](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=343)** And then also if you're giving permissions to an organization you can get notifications of deploy keys here.
>
> **[5:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=351)** There's really a ton of options for notifications.
>
> **[5:54](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=354)** For the most part for critical things I like getting emails.
>
> **[5:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=358)** For day-to-day notifications I like using this notification panel.
>
> **[6:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-notifications?u=76281980&t=363)** And there's a lot that you can do here to control how often and what you want to be notified of.

> [!info]- Semantic Content
>
> **Tools:** github (9)
> **Code Keywords:** interface (3), let (2), finally, (1), default, (1), this, (1)
> **UI Navigation:** click on (2), dropdown (1)
> **Env Vars:** cli (2)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### GitHub gists
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=0)** - [Instructor] If you have a GitHub account, you also have access to this cool feature called Gists.
>
> **[0:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=5)** They let you share your code snippets with others.
>
> **[0:08](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=8)** Now, Gists exist both inside, as well as on their own page called gist.[github.com](https://github.com).
>
> **[0:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=16)** When you go to this page, you can create a new gist and there's even a cool shortcut.
>
> **[0:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=20)** You can say gist.new, and this will take you to that same page and let you generate a new gist.
>
> **[0:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=28)** Now, in here, you can see that if you have previously used gists before, you can see the latest ones that you've created right here and you can click over here to view all of the gists or just start to create your own.
>
> **[0:41](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=41)** Now, you'll notice that you'll see the icon from my LinkedIn profile, as well as notifications here and you can also click right here to add a new gist.
>
> **[0:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=52)** But here you can see that it's picking up this information from my GitHub profile and I can also go directly to the profile right here.
>
> **[1:01](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=61)** So to create a gist, you add a optional description
>
> **[1:11](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=71)** and then you add a file name with an extension.
>
> **[1:15](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=75)** So you do want to include the extension because it's going to help the gists figure out what language you're using.
>
> **[1:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=81)** So you can call this nav and then I'll say bootstrap5.html.
>
> **[1:30](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=90)** So we're going to paste some code from our project here and you can also control how you want this code to be written, whether it's tabs or spaces and how many tabs or spaces you want to use.
>
> **[1:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=102)** I like to use two because I'm usually working without a lot of horizontal room really zoomed in so that people can see my code clearly on a big screen.
>
> **[1:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=112)** So two spaces, it is for me and you can either wrap the code or not wrap it depending on how you want to see it.
>
> **[2:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=120)** And then you would just paste your code in here.
>
> **[2:02](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=122)** So I'm going to go back into the musical-spoon website and open up one of my files to just grab the code for the navigation that we just did.
>
> **[2:11](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=131)** So I'm going to take all this nav code right here and just copy it and then put it in my new gist here.
>
> **[2:19](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=139)** And you can see that it's picking up some of the syntax highlighting or the color because we are using the .html extension.
>
> **[2:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=148)** So you can use sort of the classic editor shortcuts here.
>
> **[2:31](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=151)** So I'm using command.
>
> **[2:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=152)** You could use Control + brackets to indent in and out.
>
> **[2:35](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=155)** Since the code already had some indentation but I don't really want it for this gist, I got rid of some of the indentation.
>
> **[2:44](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=164)** And if I want to, I can also add additional files.
>
> **[2:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=168)** So the gist doesn't just have to have a single file, it can have multiple files in the same place.
>
> **[2:53](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=173)** So perhaps I could add some CSS that was related to this HTML.
>
> **[2:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=178)** The gists can be either secret or public and it kind of remembers the last thing that you did.
>
> **[3:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=183)** So it says create secret gist right now but if I said create public gist, the next time I did one, it would try to remember that.
>
> **[3:11](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=191)** So I'm going to go ahead and create this public gist.
>
> **[3:15](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=195)** Once the gist is created, you also get this sort of window here where you can take a look at the revisions, so you can see how this code has changed over time and it would give you a classic GitHub diff view of the differences between what you started with and what you have.
>
> **[3:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=213)** Now, of course, we haven't made any changes and you can use this unified or split to see kind of the changes in line or split up into two different parts right here.
>
> **[3:43](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=223)** I'll go back to code.
>
> **[3:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=225)** On the right-hand side, I can use this copy button to copy some code that would allow me to embed this on an HTML page.
>
> **[3:54](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=234)** So you could just copy this and then paste it on an HTML page, and it would show you kind of a little window with an interactive sort of place where the gist will appear, which is pretty useful.
>
> **[4:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=244)** You can also download this gist as a ZIP file and that would include all of the different files that you have in the gist.
>
> **[4:11](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=251)** The gist is also a place where people can leave comments if you want to.
>
> **[4:15](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=255)** So I'll just say this is a pretty simple example of a bootstrap 5 navigation,
>
> **[4:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=269)** and I'm going to say comment.
>
> **[4:31](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=271)** And sometimes people will leave you comments asking you to perhaps fix something or telling you if something is not working if you've made your gist public.
>
> **[4:41](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=281)** Now, from here, you can also unsubscribe because you will get notifications if anybody comments on your gist.
>
> **[4:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=288)** So you can click that off.
>
> **[4:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=291)** You can also star not only your gists, but any other gists that you see on any website.
>
> **[4:57](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=297)** They are pretty popular and you'll see them all over the place.
>
> **[5:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=300)** And you can go back here to edit this, or you can, of course, delete the gist with this button.
>
> **[5:06](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=306)** There's also a place to take a look at the notifications, so we can take a look at our notifications.
>
> **[5:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=313)** And this is actually just a regular GitHub notification.
>
> **[5:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=316)** So that's another link from the gists to the GitHub website.
>
> **[5:21](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=321)** And there are some options here.
>
> **[5:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=324)** So you could take a look at your gists, the starred gists, which I'm not sure if I have anything.
>
> **[5:29](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=329)** Yeah, it looks like I do have something that I starred.
>
> **[5:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=332)** So notice that this does look like your profile from GitHub and from here, there's maybe a place where you can get your help or you can switch again into your GitHub to take a look at your profile.
>
> **[5:47](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=347)** So gists, fantastically useful.
>
> **[5:49](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=349)** You could see that I've done 200 gists over a period of time.
>
> **[5:53](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=353)** It's a fantastic place to store your code, and there are a lot of features that are related to GitHub.
>
> **[6:01](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=361)** Another thing that you could do is if you are in somebody else's gist, you can actually fork a copy of it onto your own.
>
> **[6:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=369)** So let's take a look at mor10 and so you'll see an additional little sort of element when you click on one of these.
>
> **[6:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=380)** So say if I go to this component and I can click on fork and that would make a copy of this gist, put it in my own sort of gist section but it would still give Morten credit.
>
> **[6:33](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=393)** So a lot of similar features to what you get in GitHub.
>
> **[6:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-gists?u=76281980&t=397)** And as I mentioned, it's a fantastic way of sort of keeping track of small pieces of code that you may want to go back into.

> [!info]- Semantic Content
>
> **Code Keywords:** public (4), let (3), new, (1), this, (1), delete (1)
> **Tools:** github (10)
> **Env Vars:** html (3), css (1), zip (1)
> **UI Navigation:** go to (2), click on (2)
> **File Paths:** bootstrap5.html (1)
> **CLI Commands:** make (1)
> **URLs:** [github.com](https://github.com) (1)
> **Cross-References:** go back to (1)

#### GitHub wikis
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=0)** - [Instructor] Wikis give you the absolute fastest way to create simple documentation on GitHub.
>
> **[0:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=5)** It's a pretty interesting option too since it's a special type of repo that is attached to your own repo.
>
> **[0:12](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=12)** Just to note that Wikis are restricted for private repositories unless you have a pro account.
>
> **[0:19](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=19)** So for example, if we go over here to this Wiki tab you'll see that we can create a page for the Wiki.
>
> **[0:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=28)** And again, it's the fastest way of creating some quick documentation.
>
> **[0:31](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=31)** So I'm just going to leave the default here but you can see that we have a full featured editor.
>
> **[0:36](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=36)** So actually, let's go ahead and do just a headline here.
>
> **[0:41](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=41)** We'll do a couple of headlines because it does add some additional features here.
>
> **[0:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=48)** Let's see, we'll call this.
>
> **[0:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=51)** All right, so we'll do that.
>
> **[0:53](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=53)** And you can see that there's lots of options or you can write markdown in here.
>
> **[0:57](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=57)** And there's also a preview button that shows you what this is going to look like.
>
> **[1:01](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=61)** You can add images, add links, and anything that you can normally do in GitHub.
>
> **[1:08](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=68)** And you have all these other formats that you can use but the traditional one is markdown.
>
> **[1:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=74)** So you can also do an edit message.
>
> **[1:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=76)** This is sort of like a commit message that you can tie to when you make a change in here.
>
> **[1:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=83)** Notice that it also says that you can drag and drop files or paste them, which is cool.
>
> **[1:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=88)** So you can actually drag and drop like an image or something like that.
>
> **[1:31](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=91)** So I'm going to hit save page.
>
> **[1:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=92)** And now you notice that I have a page over here on the right hand side, and it also kept track of my headlines, and it gave me like a little micro sort of structure here for looking at the pages.
>
> **[1:47](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=107)** So let's go ahead and add another one, and I'll call this, about us, and let's see about musical spoons.
>
> **[2:01](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=121)** And I'll just write something in here.
>
> **[2:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=123)** All right, once we're done, let's go ahead and save this page.
>
> **[2:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=129)** I'm going to leave the message blank.
>
> **[2:11](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=131)** And now we have two pages and notice that it collapsed this first one, and now I can navigate between the homepage and this about us page.
>
> **[2:23](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=143)** And if I open this up and I click on this hello world this had a lot of content, when you click on the heading, it would scroll down to the heading and notice that there's these little links so you can actually link directly to a heading if your pages are getting a little bit long.
>
> **[2:41](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=161)** So a few other options here.
>
> **[2:43](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=163)** Notice that you have a little search box if you wanted to find the page that you've created or something in the page.
>
> **[2:51](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=171)** And you can add both a custom footer and a custom sidebar.
>
> **[2:55](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=175)** So this is where you maybe want to put some links.
>
> **[2:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=178)** You could say something like, check out my blog and I'll put [raybo.org](https://raybo.org).
>
> **[3:07](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=187)** Right?
>
> **[3:08](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=188)** And I'm going to hit save page for this.
>
> **[3:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=190)** And now this is a sort of, let's see, I wonder if that, I'll have to refresh the page but there it is down at the bottom.
>
> **[3:20](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=200)** And now it doesn't matter what page I go to that will appear at the bottom of every page.
>
> **[3:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=204)** And then you can also do the same thing with a little sidebar.
>
> **[3:28](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=208)** My social media is always @planetoftheweb.
>
> **[3:40](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=220)** I'm going to save this page, and notice that this little message appears right here.
>
> **[3:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=225)** So it's not a very like super complicated or a super fancy website.
>
> **[3:52](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=232)** You get a very, very simple website.
>
> **[3:55](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=235)** But if all you're doing is setting up your simple website, perhaps before you have a chance to create something more complicated then this is a fantastic thing to use.
>
> **[4:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=245)** There's one more kind of advanced option but I just want to mention it really quick.
>
> **[4:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=249)** You can actually clone this repository.
>
> **[4:12](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=252)** As I mentioned, Wikis are repositories that are sort of related to your repositories but you can clone them and work on them locally.
>
> **[4:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=262)** You can't yet open up a code space which I think would be a fantastic addition.
>
> **[4:26](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=266)** But by cloning it locally if you want to sort of create a bunch of pages at once you could just click right here and then clone it and then work on it separately.
>
> **[4:36](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=276)** One more thing, you can go to settings and under general you can actually turn the Wikis off if you don't want to see that tab, not going to delete your Wiki, same thing with issues, if you don't want to see the issues, you can click that off and now you don't see those tabs over here.
>
> **[4:55](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=295)** And then of course, you can turn them back on and it should retain.
>
> **[5:01](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=301)** So we'll go back to the Wiki, it retains everything that you had in there because the repo that has all your files still exists.
>
> **[5:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=310)** And so, as I mentioned, this is the best way to get a quick documentation site attached to a repo.
>
> **[5:16](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=316)** And it's really not that bad.
>
> **[5:18](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-wikis?u=76281980&t=318)** I mean, you can get quite a few pages going in here and it's easy enough to write things and mark down.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this. (2), super (2), private (1), this, (1)
> **UI Navigation:** click on (2), go to (2), drag and drop (1), scroll down (1)
> **CLI Commands:** make (1), find (1)
> **Tools:** github (2)
> **Definitions:** is a  (2)
> **URLs:** [raybo.org](https://raybo.org) (1)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)

#### GitHub pages
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-pages-27990117?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-pages-27990117?u=76281980&t=0)** - [Ray] GitHub lets you host and publish static content through the website for free.
>
> **[0:05](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-pages-27990117?u=76281980&t=5)** As a matter of fact, my personal blog at [raybo.org](https://raybo.org) is hosted by GitHub on their website, and it's on completely for free.
>
> **[0:13](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-pages-27990117?u=76281980&t=13)** So you can create quite a capable site as long as it only has static content.
>
> **[0:17](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-pages-27990117?u=76281980&t=17)** By the way, GitHub pages is restricted for private repositories unless you have a pro account.
>
> **[0:22](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-pages-27990117?u=76281980&t=22)** By default, all pages that you create will be hosted at [github.io](https://github.io) or you can create a custom domain.
>
> **[0:31](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-pages-27990117?u=76281980&t=31)** Now, to do that, we'll need to go to the settings section and look for the pages section, and you can see a sample site that I've created for this project at [raybo.org/musical-spoon](https://raybo.org/musical-spoon).
>
> **[0:43](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-pages-27990117?u=76281980&t=43)** So if we click on this, you'll be able to see the website for this repo.
>
> **[0:48](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-pages-27990117?u=76281980&t=48)** Now, the way that you do this is by telling GitHub where the files have been deployed to, and there's a couple of options here.
>
> **[0:56](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-pages-27990117?u=76281980&t=56)** You can deploy from a branch or you can deploy using GitHub actions.
>
> **[1:01](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-pages-27990117?u=76281980&t=61)** I prefer to deploy from a branch since it's the simplest way of doing things.
>
> **[1:06](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-pages-27990117?u=76281980&t=66)** But if you click GitHub actions, you have a few more options.
>
> **[1:10](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-pages-27990117?u=76281980&t=70)** So for example, you can ask it to use a language called Jekyll, which will let you take a folder of markdown documents and convert them to a website.
>
> **[1:19](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-pages-27990117?u=76281980&t=79)** It's a little bit harder to configure, but you pretty much follow instructions by clicking on this item right here.
>
> **[1:25](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-pages-27990117?u=76281980&t=85)** You can also choose to deploy sites through a static files in your repository, but this is actually the same as choosing deploy from a branch.
>
> **[1:36](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-pages-27990117?u=76281980&t=96)** So I'll show you how to do that.
>
> **[1:38](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-pages-27990117?u=76281980&t=98)** Now, here is where you can add your custom domain, so you can add [raybo.org](https://raybo.org) here or whatever your custom domain would be, and there's a little bit more setup that you have to do.
>
> **[1:50](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-pages-27990117?u=76281980&t=110)** At your service provider, you can learn more about that right here.
>
> **[1:54](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-pages-27990117?u=76281980&t=114)** You can also choose to enforce HTTPS, and if you have an enterprise account, you can restrict access to your GitHub pages by publishing it privately so that some people can have access to your pages even if the site is set to private.
>
> **[2:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-pages-27990117?u=76281980&t=129)** Now, when you deploy from a branch, you can choose to host your website in a couple of different ways.
>
> **[2:15](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-pages-27990117?u=76281980&t=135)** You can choose a specific branch where the HTML pages will be for your website, and if you leave the site in the main branch, you can either choose to deploy your website from a folder called docs or the root of your website.
>
> **[2:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-pages-27990117?u=76281980&t=152)** So if you go back into the code repo, you'll see that I have a docs folder.
>
> **[2:37](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-pages-27990117?u=76281980&t=157)** If I just told it to deploy from the root, there would have to be an index that HTML file in this folder, and it would use that.
>
> **[2:45](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-pages-27990117?u=76281980&t=165)** Since I've asked it to deploy from the root, it's going to look inside this folder, and it's going to look for an index.html webpage right here.
>
> **[2:55](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-pages-27990117?u=76281980&t=175)** You can see that it's right there.
>
> **[2:57](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-pages-27990117?u=76281980&t=177)** So anything that's in this index.html page would be automatically displayed as your website.
>
> **[3:04](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-pages-27990117?u=76281980&t=184)** You may be wondering how I manage to create this page right here.
>
> **[3:09](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-pages-27990117?u=76281980&t=189)** If you have a repository on your website that's called your username.[github.io](https://github.io), you can create the website that will appear at the top of your domain.
>
> **[3:19](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-pages-27990117?u=76281980&t=199)** So if we go to the settings here, and then we go to the pages section, you'll notice that right now I have my custom domain right here, and I've already saved it and set it up properly.
>
> **[3:32](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-pages-27990117?u=76281980&t=212)** And anytime somebody goes to [raybo.org](https://raybo.org), it will go to this specially named repository, and that's where [raybo.org](https://raybo.org) comes from.
>
> **[3:42](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-pages-27990117?u=76281980&t=222)** After you've set that up, whenever you create any additional repos, they will automatically use [raybo.org](https://raybo.org) instead of [github.io](https://github.io), which would be what would happen on any normal website.
>
> **[3:54](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-pages-27990117?u=76281980&t=234)** So setting up your custom domain for the entire website is quite useful.
>
> **[3:58](https://www.linkedin.com/learning/learning-git-and-github-23011330/github-pages-27990117?u=76281980&t=238)** If you want to learn more about working with GitHub pages, take a look at my other course called Learning GitHub pages at this URL.

> [!info]- Semantic Content
>
> **Tools:** github (12)
> **Code Keywords:** static (3), private (2), default, (1), this, (1), let (1)
> **URLs:** [raybo.org](https://raybo.org) (6), [github.io](https://github.io) (3)
> **UI Navigation:** go to (4), click on (1)
> **Env Vars:** html (2), https (1), url (1)
> **File Paths:** index.html (2)
> **Prerequisites:** configure (1), setup (1)
> **Analogies:** for example (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-git-and-github-23011330/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-git-and-github-23011330/next-steps?u=76281980&t=1)** - Thanks for watching.
>
> **[0:01](https://www.linkedin.com/learning/learning-git-and-github-23011330/next-steps?u=76281980&t=1)** I hope you enjoyed the course.
>
> **[0:03](https://www.linkedin.com/learning/learning-git-and-github-23011330/next-steps?u=76281980&t=3)** Now, we have a lot more content on both Git and GitHub, including deep dives and more advanced concepts from great teachers like Kevin Skoglund and courses from people who work at GitHub.
>
> **[0:14](https://www.linkedin.com/learning/learning-git-and-github-23011330/next-steps?u=76281980&t=14)** If you want to keep up with what I'm up to, you can follow me just about anywhere @planetoftheweb, look for the live streams I do here on LinkedIn, or check out my blog at [raybo.org](https://raybo.org).
>
> **[0:24](https://www.linkedin.com/learning/learning-git-and-github-23011330/next-steps?u=76281980&t=24)** See you next time.

> [!info]- Semantic Content
>
> **Tools:** github (2)
> **CLI Commands:** git (1)
> **URLs:** [raybo.org](https://raybo.org) (1)
> **Speakers:** - thanks (1)


## Path Context

### In [[Succeed as a Remote Software Developer]]
← [[Time Management Working From Home]] | **2 of 6** | [[Slack Essential Training]] →

### In [[Prepare for the GitHub Foundations Certification]]
← [[Resume]] | **2 of 7** | [[GitHub Issues and Projects for Teams]] →

### In [[Software Development Fundamentals]]
← [[C Sharp Algorithms]] | **8 of 10** | [[Program Databases with Transact-SQL]] →

### In [[Getting Started with WordPress]]
← [[WordPress Essential Training]] | **2 of 10** | [[CSS Essential Training (2023)]] →

## Appears In

- [[Succeed as a Remote Software Developer]]
- [[Prepare for the GitHub Foundations Certification]]
- [[Software Development Fundamentals]]
- [[Getting Started with WordPress]]

## Related Courses

_Courses sharing skills:_

- [[Practical GitHub Code Search]] — GitHub
- [[Practical GitHub Project Management and Collaboration]] — GitHub
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — GitHub
- [[Benefits of GitHub Community]] — GitHub
- [[GitHub Foundations- Privacy, Security, and Administration]] — GitHub

---

[↑ Back to top](#)