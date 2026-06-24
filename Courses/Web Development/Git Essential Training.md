---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: git-essential-training-25677984
url: "https://www.linkedin.com/learning/git-essential-training-25677984"
duration_minutes: 102
duration: 1h 42m
level: Beginner
updated: 5/6/2025
learners: 17143
skills:
  - Git
  - Version Control
exercise_files: true
github: "https://github.com/LinkedInLearning/git-essential-training-5988161/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQFtri24YywCRA/learning-public-crop_675_1200/B4DZaSCsxDGwAc-/0/1746206904098?e=2147483647&amp;v=beta&amp;t=kWaRJNyIgQ-qsLPNYMvXiqqQgEhud2WqEhf2m-L3f5M"
linkedin_topic: Web Development
learning_paths:
  - '[The Top 10 Most Popular Courses among Engineering Professionals](../../Paths/Data%20Science/Learning%20Paths/The%20Top%2010%20Most%20Popular%20Courses%20among%20Engineering%20Professionals.md)'
  - '[Become a Full-Stack Web Developer](../../Paths/Web%20Development/Learning%20Paths/Become%20a%20Full-Stack%20Web%20Developer.md)'
prev_courses:
  - '[Learning Kubernetes](../Data%20Science/Learning%20Kubernetes.md)'
  - '[Learning ECMAScript 6+ (ES6+)](Learning%20ECMAScript%206%2B%20(ES6%2B).md)'
next_courses:
  - '[SQL Essential Training](../Data%20Science/SQL%20Essential%20Training.md)'
  - '[React Essential Training](React%20Essential%20Training.md)'
path_nav: '[{"path":"The Top 10 Most Popular Courses among Engineering Professionals","position":8,"total":10,"prev":"Learning Kubernetes","next":"SQL Essential Training"},{"path":"Become a Full-Stack Web Developer","position":6,"total":12,"prev":"Learning ECMAScript 6+ (ES6+)","next":"React Essential Training"}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/devops
  - topic/software-development
  - topic/web-development
  - skill/git
  - skill/version-control
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Git%20Essential%20Training.md)

![Git Essential Training](https://media.licdn.com/dms/image/v2/D4D0DAQFtri24YywCRA/learning-public-crop_675_1200/B4DZaSCsxDGwAc-/0/1746206904098?e=2147483647&amp;v=beta&amp;t=kWaRJNyIgQ-qsLPNYMvXiqqQgEhud2WqEhf2m-L3f5M)

# Git Essential Training

> If you’ve ever wondered why someone should use Git or how to use it for version control, this is a great course to get started. Join Azure MVP and GitHub Star Barbara Forbes as she guides you through the installation process, the Git workflow, setting up and pushing code into a repo, and committing changes, all with a focus on version control and how Git can help you achieve it. Find out why peopl

> [LinkedIn Learning](https://www.linkedin.com/learning/git-essential-training-25677984) | 1h 42m | Beginner | 17K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Get started with Git](#get-started-with-git)
  - [What you should know](#what-you-should-know)
- [**1. Why Do You Want to Use Git?**](#1-why-do-you-want-to-use-git) (4 videos)
  - [Git for version control](#git-for-version-control)
  - [Git to share code](#git-to-share-code)
  - [Git to collaborate](#git-to-collaborate)
  - [Open source](#open-source)
- [**2. How Does Git Work?**](#2-how-does-git-work) (4 videos)
  - [Use Git locally](#use-git-locally)
  - [Use a Git provider](#use-a-git-provider)
  - [Distributed version control](#distributed-version-control)
  - [How to start working with Git](#how-to-start-working-with-git)
- [**3. Install and Configure Git**](#3-install-and-configure-git) (7 videos)
  - [Use a Codespace for this course](#use-a-codespace-for-this-course)
  - [Install Git on Windows](#install-git-on-windows)
  - [Install Git on Linux (PPT)](#install-git-on-linux-ppt)
  - [Install Git on macOS](#install-git-on-macos)
  - [Git GUI clients](#git-gui-clients)
  - [Optional: Install Visual Studio Code](#optional-install-visual-studio-code)
  - [Configure Git](#configure-git)
- [**4. Push Your Code with Git**](#4-push-your-code-with-git) (10 videos)
  - [Set up a remote repository](#set-up-a-remote-repository)
  - [Fork the course repository](#fork-the-course-repository)
  - [Clone the remote repository](#clone-the-remote-repository)
  - [Create a file and stage it](#create-a-file-and-stage-it)
  - [Commit a file](#commit-a-file)
  - [Push the file to the remote repository](#push-the-file-to-the-remote-repository)
  - [Pull changes from the remote repository](#pull-changes-from-the-remote-repository)
  - [Initialize a repository locally and sync it](#initialize-a-repository-locally-and-sync-it)
  - [Challenge: Push your first code](#challenge-push-your-first-code)
  - [Solution: Push your first code](#solution-push-your-first-code)
- [**5. Make Changes to Files**](#5-make-changes-to-files) (12 videos)
  - [Git status](#git-status)
  - [Edit a file and view changes](#edit-a-file-and-view-changes)
  - [Delete files](#delete-files)
  - [Rename files](#rename-files)
  - [Working with folders](#working-with-folders)
  - [Undo your changes](#undo-your-changes)
  - [View commit history](#view-commit-history)
  - [Go back in Git history](#go-back-in-git-history)
  - [Revert a commit](#revert-a-commit)
  - [Make use of the GUI of Visual Studio Code](#make-use-of-the-gui-of-visual-studio-code)
  - [Challenge: Make a change and revert](#challenge-make-a-change-and-revert)
  - [Solution: Make a change and revert](#solution-make-a-change-and-revert)
- [**6. Important Concepts in Git**](#6-important-concepts-in-git) (8 videos)
  - [Ignoring files](#ignoring-files)
  - [The .git folder](#the-git-folder)
  - [Create a branch  in your repository](#create-a-branch-in-your-repository)
  - [Create and merge a pull request](#create-and-merge-a-pull-request)
  - [Git commit messages](#git-commit-messages)
  - [Solving a merge conflict](#solving-a-merge-conflict)
  - [Challenge: Create a branch and a pull request](#challenge-create-a-branch-and-a-pull-request)
  - [Solution: Create a branch and a pull request](#solution-create-a-branch-and-a-pull-request)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Get started with Git](https://www.linkedin.com/learning/git-essential-training-25677984/get-started-with-git?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/get-started-with-git?u=76281980&t=0)** - When you work with code, you want to work with [Git](../../Skills/Software%20Development/Git.md). Git is a must-have tool that you can use for [Version Control](../../Skills/Web%20Development/Version%20Control.md), collaboration, and managing open source. It's lightweight and it's easy to install, but it can be pretty hard to start using. Git has a lot of options and you can quickly get lost in all the possibilities. Maybe even giving up thinking it's too complicated, but it doesn't have to be. Hi, I am Barbara Forbes and I am an [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) MVP and a [GitHub](../../Skills/Software%20Development/GitHub.md) star. In this course, I'll walk you through the basics, and get you up and running with Git. So let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (4), [Version Control](../../Skills/Web%20Development/Version%20Control.md) (1), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **CLI Commands:** git (4)
> **Env Vars:** mvp (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - when (1)

#### [What you should know](https://www.linkedin.com/learning/git-essential-training-25677984/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/what-you-should-know?u=76281980&t=0)** - This course aims to be as approachable as possible, no matter your background. We're starting from the very beginning, so you don't need any prior knowledge of [Git](../../Skills/Software%20Development/Git.md). You also don't need to know any specific programming languages. This course is all about the basics of Git. If you want to follow along, you can use [GitHub](../../Skills/Software%20Development/GitHub.md) [Codespaces](../../Skills/Software%20Development/Codespaces.md), which will give you the exact same setups I'm using. The process will be explained in a later video. But you're also welcome to use your own device, whether it's [Windows](../../Glossary/Service/Windows.md), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), or MacOS. We will work from the command line, so it is helpful if you're already comfortable with that. In the codespace, we'll use a Linux command line, but you can also use other command lines, like [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) if you prefer. This course won't focus on coding or any particular programming language. We'll use simple markdown files as examples. If you are not familiar with markdown, that will not stop you from following along. Finally, we will not cover all that Git can do as it would take forever. Instead, the goal here is to get you comfortable with the basics so you can start using Git in your daily coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (4), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **CLI Commands:** git (4)
> **Tools:** command line (2), github (1), powershell (1)
> **Speakers:** - this (1)


### 1. Why Do You Want to Use Git?

[↑ Back to Table of Contents](#table-of-contents)

#### [Git for version control](https://www.linkedin.com/learning/git-essential-training-25677984/git-for-version-control?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/git-for-version-control?u=76281980&t=0)** - [Instructor] Let's start by discussing why you would use [Git](../../Skills/Software%20Development/Git.md) and see what problems we're trying to solve. This chapter isn't about how the technical side of Git works. We are going to focus on the concepts. So one of the big reasons to use Git is for [Version Control](../../Skills/Web%20Development/Version%20Control.md). Let's think of a scenario. You are working with code. You have this on your local computer and you're working with a file called Code1. You're making changes and at one point you think, "Well, I want to keep track of the changes that I just made." I want to try something different, but keep this file as sort of a backup in case I make changes that don't work out. So you create a copy of the file and you call it Code2. You start working on that file and Code1 is still there as a backup. After a while, you might reach that point again where you think, I want to make some big changes and I want to make sure that I can go back to this version of the code. So you might create a new copy called Code2b because the changes weren't that big this time. And you keep working and you keep making new versions. Now, at some point you will think, okay, we're getting there. This is going to be Codefinal where there's just some small cleaning up to do, but then you discover that you need to make another big change. So you create Codefinal2 and then Codefinal final and Codefinal now really this is the one. You can keep doing this for a long time. Sounds familiar? This is where Git can help you.
>
> **[1:34](https://www.linkedin.com/learning/git-essential-training-25677984/git-for-version-control?u=76281980&t=94)** So let's move back to the scenario where we started, which is one file, the file Code1, but now we also have Git. So in this image, we are working in our file explorer at the bottom. Whether we're on [Windows](../../Glossary/Service/Windows.md) or [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) or Mac, this is where our files are stored, and we install Git, which is a separate piece of software on our machine. So in a first scenario, we would create version two and version three. Instead of that, when we come to a point where we think we want to keep track of the code as it is at this point, we create a version in Git. We call this a commit. So we commit to Git and say we want to keep track of this specific version. We now can keep working in that file called Code1. We don't create a new one because we already have a backup with Git and we can do this again and again. So when we do it like this, all those old versions are stored in Git. Through Git, we are able to move back to old versions and see the whole history of our code. And the good thing is we keep working in our single file, so we know we'll never be working in the wrong version and our file explorer doesn't get messy like it would before. And we can even extend this process because we are now working on our local computer. And this means that while we have complete version control, we do have a risk of something happening with our computer and us losing all the files that we had.
>
> **[3:09](https://www.linkedin.com/learning/git-essential-training-25677984/git-for-version-control?u=76281980&t=189)** We can solve this problem by using a Git provider. This is some sort of cloud source that is specifically made for Git like [GitHub](../../Skills/Software%20Development/GitHub.md). We can now take a complete version history that we have locally and make sure that it's also stored somewhere in the cloud. So if something happens with our device, we still have our code and everything that we've worked on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (13), [Version Control](../../Skills/Web%20Development/Version%20Control.md) (2), [Windows](../../Glossary/Service/Windows.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **CLI Commands:** git (13), make (5)
> **Definitions:** is a  (1), we call this (1), means that (1)
> **Tools:** github (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Git to share code](https://www.linkedin.com/learning/git-essential-training-25677984/git-to-share-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/git-to-share-code?u=76281980&t=0)** - [Instructor] Let's look at another scenario where [Git](../../Skills/Software%20Development/Git.md) can help you out. Have you ever tried to share a file with code with a coworker or with a friend? Here we have our file, Code1. We want to make sure that someone else has access to it. You might want to send it through email, but anyone who has ever tried that knows that it will often be caught up in the spam filter. So you could use workarounds, like change the extension and ask the other person to change the extension back, but it will always get messy. So what other options do we have? Do we use USB sticks? That's really a bit old-fashioned at this point. You can do it in [SharePoint](../../Skills/Cloud%20Computing/SharePoint.md), but again, there might be issues with spam, and it could get messy if people start working in the same file. So this is where Git comes in. So here we have our file on our local computer. And here we have our friend or coworker who has their own computer, and we want the code to get to their computer. And here's our Git provider. What we can do is make our code public, so anyone can read it. Or we can add our coworker or friend to the space we are working in, which we call a repository. By doing this, they get access to our code, and they can get this code to their computer. So they can either download it directly from the web interface, or they can install Git themselves and use it for their own [Version Control](../../Skills/Web%20Development/Version%20Control.md) while they're working in this repository. So this is how Git can help you when you want to share some code with someone else.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (5), [SharePoint](../../Skills/Cloud%20Computing/SharePoint.md) (1), [Version Control](../../Skills/Web%20Development/Version%20Control.md) (1)
> **CLI Commands:** git (5), make (2)
> **Env Vars:** usb (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Git to collaborate](https://www.linkedin.com/learning/git-essential-training-25677984/git-to-collaborate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/git-to-collaborate?u=76281980&t=0)** - [Instructor] We have already seen how Gits can be used to share code, but let's take it a step further. How can we collaborate on the code, so work on it together? Let's look at an example. On the left, we have our own computer. We are working on a file, and we have added that file to the [Git](../../Skills/Software%20Development/Git.md) provider so that it is available there. On the right is our coworker or our friend who also wants to work on this file. They also use Git, and get their own copy of the file. They make changes to the file, and create a new version. When they're done, they push it back to the Git provider. At this stage, we can pull the code from the Git provider, and now we have access to that new version of the file. So we can both work on the file, and get the newest version, and see what other people have changed. Now, what would happen if we both start working on the file at the same time? The great thing about Git is that often it will understand how the file is structured, and unless there are changes made at the same level, it'll be able to create a new version based on both our edits. So Git has intelligence for that. If we happen to work at the same part of the file, we will have to manually do some checks, but we will consider that in a later video. Overall, Git is very good at checking how two versions can be merged into one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (7)
> **CLI Commands:** git (7), make (1)
> **Speakers:** - [instructor] (1)

#### [Open source](https://www.linkedin.com/learning/git-essential-training-25677984/open-source?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/open-source?u=76281980&t=0)** - [Git](../../Skills/Software%20Development/Git.md) is great for the process of [Open-Source Software](../../Skills/Cybersecurity/Open-Source%20Software.md). Open source means that all the code behind the software is publicly available, and you are able to see it and change it. So you could download it or change it for your own use. What you will often see with open source is that the community works on the code together. So when someone who uses the code find that they might need a different feature or they see a bug, they can report it, but they can also change it themselves. We already talked about how Git can help you collaborate. Let's see how that works with open-source software where a lot of people might be working on code at the same time. Let's look at our earlier scenario where we have a Git provider storing our code and two people are working on it. This setup went well, but what happens when we expand this scenario? Imagine multiple users trying to change the code all at once. You can see how this can quickly become very chaotic. And let's not forget the code at the provider is the source code that is running in production. So you might not want everyone to have the ability to make changes. You wouldn't want to break production code. This is where branches come into play. Let's see how that works. Here we have our computer, and our code is stored in the Git provider. We want to make some changes. But as I mentioned earlier, we don't want to do that directly in the code itself because it might be running in production, and many other people are already using it.
>
> **[1:34](https://www.linkedin.com/learning/git-essential-training-25677984/open-source?u=76281980&t=94)** So we create a branch, which is a copy of the code. This branch exists side by side with the original code. It is a direct copy, but nothing that we do in the branch will affect the original code. Now we pull that branch to our local computer and start making changes. When we want to create a snapshot of our code, we push it back to the Git provider, but this time to the branch instead of the main code. We can repeat this process several times. When we're ready and confident that we want these changes to be part of the production code, we can merge them. This is often done through a pull request, allowing others to review the changes before they are added. Once this is completed, we can delete the branch we're working on. When we change our local environment back to the original branch, we will see the new code there as well. In the end, the situation is exactly the same as if we had worked on the main code from the start. However, by working on a separate branch, we maintain consistency in the production code, and we have our own workspace within a larger project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (5), [Open-Source Software](../../Skills/Cybersecurity/Open-Source%20Software.md) (2)
> **CLI Commands:** git (5), make (2), find (1)
> **Definitions:** is a  (2), means that (1)
> **Exercise Files:** source code (1)
> **Analogies:** imagine (1)
> **Prerequisites:** setup (1)
> **Speakers:** - git (1)


### 2. How Does Git Work?

[↑ Back to Table of Contents](#table-of-contents)

#### [Use Git locally](https://www.linkedin.com/learning/git-essential-training-25677984/use-git-locally?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/use-git-locally?u=76281980&t=0)** - We have seen what the concept of [Git](../../Skills/Software%20Development/Git.md) is. Now let's get an understanding of how it works on a technical level. In this video, we're going to look at what happens when we use Git locally. First we have a local folder in our file explorer, finder, or whatever file management program we are using. Git brings us two extra containers, the staging area and a local repository. Let's say we create a file, doesn't matter what type, and we save it to our local folder just like we would do without using Git. We are working on this file and come to that point where we want to create a snapshot before we continue working. To do this, we add the files that we want to include in the snapshot to the staging area. We can do this by using Git add, followed by the file name. So for example, Git add Code1. Our other option is to use Git add dot to add all changes that we have made to the staging area. So you could see the staging area as an opportunity to store only specific files in the snapshot and leave out other files even if we have changed them. The files that are changed but not in a staging area are called modified. Once we're satisfied with the state of the files in the staging area, we can now create the snapshot by adding the files to the local repository. We use the command Git commit with a commit message. We will see the complete explanation of this command
>
> **[1:36](https://www.linkedin.com/learning/git-essential-training-25677984/use-git-locally?u=76281980&t=96)** at a later video. By using Git commit, the current changes in the files are stored in the database in the local repository. Now we can continue to work in our local folder, but we have a snapshot to go back to if we're not happy with those changes. So by using Git locally, we can create snapshots of our process and revert to previous versions if needed without making a mess of our file explorer with multiple versions of the same file. That is how Git helps us manage our projects on a local level, making [Version Control](../../Skills/Web%20Development/Version%20Control.md) simple and efficient.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (11), [Version Control](../../Skills/Web%20Development/Version%20Control.md) (1)
> **CLI Commands:** git (11)
> **Analogies:** just like (1), for example (1)
> **Cross-References:** go back to (1)
> **Speakers:** - we (1)

#### [Use a Git provider](https://www.linkedin.com/learning/git-essential-training-25677984/use-a-git-provider?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/use-a-git-provider?u=76281980&t=0)** - [Narrator] In the last video, we saw how we could use [Git](../../Skills/Software%20Development/Git.md) locally. Now let's move on and see how we can push our code to a remote repository. By doing this, we can access it from other devices or work together with other people. When we want to bring our latest snapshots out of our local repository to the remote repository, we use the command Git Push, and that's it. All the committed files are now pushed to the remote repository. Remember that any changes that are only stored locally or in the staging area will not be pushed. Now, let's say we're on a different device and we want to retrieve those files from the remote repository or work with a repository that others have added code to. To do that, we use the command Git Pull. This command pulls all the files from the remote repository and puts them not only in the local repository, but also in our local folder. Now we can work with them and we always have the latest version.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (3)
> **CLI Commands:** git (3)
> **Cross-References:** in the last (1)
> **Speakers:** - [narrator] (1)

#### [Distributed version control](https://www.linkedin.com/learning/git-essential-training-25677984/distributed-version-control?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/distributed-version-control?u=76281980&t=0)** - [Instructor] [Git](../../Skills/Software%20Development/Git.md) is what we call a distributed [Version Control](../../Skills/Web%20Development/Version%20Control.md) system. In this video, we're going to break down what that actually means. To understand it better, let's first look at centralized version control. This is the kind of system you know from tools like [OneDrive](../../Skills/Cloud%20Computing/Microsoft%20OneDrive.md) or Dropbox. In a centralized system, all your files are stored on a server and you sync your local files with them, but you are always working with the latest version. So, for example, if I change a file on my computer, it'll also be changed on the server, and that change will be pushed to everyone who is working with that file. So the old version is stored only on the server, not on my computer or anyone else's. That means if something happens to the server, we will be able to work with the latest file, but we will not have access to the file's history. Now, in a distributed versions control system, things work a little different. We still have a central server, the Git provider, but instead of just syncing the latest version, every client has their own complete copy of the repository, including all snapshots and the entire history of the files. So when I pull files from a Git provider, I'm not getting the latest version, I am getting the full history. This means that even if something happens to the central server, we still have complete copies of everything that have ever happened to those files. Note that the GIT provider in this context
>
> **[1:32](https://www.linkedin.com/learning/git-essential-training-25677984/distributed-version-control?u=76281980&t=92)** is a lot like the other computers that have stored a repository. The difference is that it's centrally localized. So we can grab our files there, but we all have the same files and the same version stored.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (4), [Version Control](../../Skills/Web%20Development/Version%20Control.md) (2), [Onedrive](../../Skills/Cloud%20Computing/Microsoft%20OneDrive.md) (1)
> **CLI Commands:** git (4)
> **Definitions:** means that (1), is a  (1)
> **Env Vars:** git (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [How to start working with Git](https://www.linkedin.com/learning/git-essential-training-25677984/how-to-start-working-with-git?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/how-to-start-working-with-git?u=76281980&t=0)** - We've covered the basics of [Git](../../Skills/Software%20Development/Git.md), and now it's time to put that knowledge into practice. But before we do, I want to share a few tips with you. First, Git is hard. People who have been using it for years sometimes forget how tough it was at the beginning. So if you are feeling stuck, don't get discouraged. Take your time, go at your own pace, and it will start to make sense. Another thing to keep in mind is that Git has a lot of features and options. There's so much you can do, but you don't need to learn it all at once. I recommend to focus on the basics, like what we're covering in this course, and just start using Git in your daily work. When I started out, I found branches confusing, so I didn't use them. I started with just consistently adding my own code into repositories. Once I was comfortable with that, I found it easier to move on with branches and cooperating with others. So go your own pace. Even experienced Git users don't know every single command or how to solve every problem. The key is to get started and if you run into trouble, you can always look up solutions online. With that said, let's jump in and start using Git ourselves.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (6)
> **CLI Commands:** git (6), make (1)
> **Best Practices:** the key is (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - we (1)


### 3. Install and Configure Git

[↑ Back to Table of Contents](#table-of-contents)

#### [Use a Codespace for this course](https://www.linkedin.com/learning/git-essential-training-25677984/use-a-codespace-for-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/use-a-codespace-for-this-course?u=76281980&t=0)** - You will probably be using [Git](../../Skills/Software%20Development/Git.md) in your local environment, and the videos in this chapter will help you to make sure you can install and configure Git. But if you want to follow along with this course, I recommend making use of [GitHub](../../Skills/Software%20Development/GitHub.md) [Codespaces](../../Skills/Software%20Development/Codespaces.md). This is an online environment that will have a set configuration. That means that you will be able to have the same settings as I have, making it easier to follow along. You can focus completely on Git. After the course, you can keep using Codespaces for your projects, or you can easily switch to your local device. In order to use GitHub Codespaces, you are going to create a fork of the link in learning repository. Don't worry about how you do that now as we will get into that in a later video. In your repository, you click on the big green button that says Code. From here, check if you are in the tab for Codespaces. There we go. And now that we are, we click Create Codespaces on main. This will open up an editor for you. It might take a minute or two, so just wait for it to load. There's not a lot of configuration in this one, so it should load pretty quickly. Once you have this screen, you have the exact same environment as I will be using for this course. So it should be easier to follow along. Notice that the text in the editor might look a little different for you as instructions for using this repository might have been updated. If you ever run into issues with your Codespace,
>
> **[1:33](https://www.linkedin.com/learning/git-essential-training-25677984/use-a-codespace-for-this-course?u=76281980&t=93)** you can just delete it and create a new one like you did before. To delete the Codespaces, go back to the repository. You might have to refresh the page if it still shows it's opening the Codespaces. Once you did, you can press Code again, and here you can see the Codespaces that you are running. You can look for the three dots behind the Codespaces and then use Delete. We'll confirm. And now our Codespaces is deleted. We can close the tab with the Codespaces and create a new one to keep following along. In the next videos, I'm going to explain how you can install GI in your local environment. I recommend watching those videos for your setup so you can start using Git straightaway after this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Codespaces](../../Skills/Software%20Development/Codespaces.md) (11), [Git](../../Skills/Software%20Development/Git.md) (4), [GitHub](../../Skills/Software%20Development/GitHub.md) (2)
> **CLI Commands:** git (4), make (1)
> **Prerequisites:** install (2), configure (1), setup (1)
> **Cross-References:** go back to (1), in the next (1)
> **Tools:** github (2)
> **UI Navigation:** click on (1), in the tab (1)
> **Definitions:** is an  (1), means that (1)
> **Speakers:** - you (1)

#### [Install Git on Windows](https://www.linkedin.com/learning/git-essential-training-25677984/install-git-on-windows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/install-git-on-windows?u=76281980&t=0)** - [Instructor] In this video, we will walk through installing [Git](../../Skills/Software%20Development/Git.md) on a [Windows](../../Glossary/Service/Windows.md) device. If you use one for your coding, you can follow along. No matter what system you're using, [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), windows, or macOS, the process starts at the same website, [git-scm.com](https://git-scm.com). You can also just search for Git in any search engine, and it will likely be the first result. The website has everything you need to know about Git, including detailed documentation. But for now, we're just here to download Git. On the homepage, it ultimately suggests the right download for your operating system. Since I am on a Windows machine, it's showing me the Windows download option. But if you need macOS or Linux, just click Downloads on the left and you'll find them there. For this example, we're going with download for Windows. When you click it, you'll see different installer options. If you're not sure which one to pick, just go with the default by clicking Click here to download. In most cases, this will work just fine. It's a small file, so it should download pretty quickly. Once it downloaded, you can open it directly from your browser or find it in your Downloads folder using File Explorer. This will launch the Git Setup wizard, which will make the installation process simple. If you're not sure what options to choose, you can safely just click Next, Next, Finish, and it'll apply the most commonly used settings. But let's take a quick look at what's available.
>
> **[1:34](https://www.linkedin.com/learning/git-essential-training-25677984/install-git-on-windows?u=76281980&t=94)** The wizard really helps you as it explains the different options along the way. First, it'll ask you to read information about the license you're using. After you have read it, you can click Next. Now it asks us where we want to install Git. The default location is fine, so I'll leave it as it is. Next, we can choose optional components like desktop icons or update checks through Windows update. Again, the fold options are good for me, so I'll leave them as they are. Now the setup asks us if you want to create a Start Menu folder. This can be useful for quickly accessing Git related tools, so I'll keep this enabled. Then we need to select a default editor for Git. By default, it suggests Vim, but if you are used to Windows, Vim can be tricky to use. I am going to switch this to Visual Studio Code, as that is my favorite editor. Note that you do have to have Visual Studio Code installed on your computer if you want to use this. We click Next. Now Git asks us what we want to name the full branch when we initialize a repository. Historically, this was called master, But in recent years, main has become the standard, so I'll change it to main to keep things consistent. Next, we configure Gits path environment, which determines how we can run Git from the command line. Keeping the default option allows us to use Git in any terminal
>
> **[3:07](https://www.linkedin.com/learning/git-essential-training-25677984/install-git-on-windows?u=76281980&t=187)** without specifying its location. So I'll leave it as it is. Next, we got some SSH settings. If you're new to Git, I recommend sticking with the defaults here as well. Finally, the wizard guides us to some detailed settings. For this course, we are going to keep everything at the default. At this point, we're ready to install. Clicking Install started the process. And once it's done, the Git setup Wizard will confirm that Git is installed. So the wizard confirms that Git has been installed. Let's check if everything is working. I'll open [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) and type git. If Git responds like this, it means it's installed and ready to use. If I want to see what version I am running, I can use git --version. And that's it. Git has now set up on your system and we can start working with it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (20), [Windows](../../Glossary/Service/Windows.md) (7), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2), [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (1)
> **CLI Commands:** git (20), find (2), make (1), ssh (1)
> **Prerequisites:** setup (3), install (3), configure (1), set up (1)
> **Tools:** vim (2), visual studio (2), command line (1), terminal (1), powershell (1)
> **Code Identifiers:** macos (2)
> **URLs:** [git-scm.com](https://git-scm.com) (1)
> **Env Vars:** ssh (1)
> **Warnings:** note that (1)

#### [Install Git on Linux (PPT)](https://www.linkedin.com/learning/git-essential-training-25677984/install-git-on-linux-ppt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/install-git-on-linux-ppt?u=76281980&t=0)** - [Instructor] In this video, we will see how we can install [Git](../../Skills/Software%20Development/Git.md) on a [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) device. If you want to install Git on Linux, you can start by going to the official website, [git-scm.com](https://git-scm.com). If you go to Downloads and then to Linux or Unix, you find a list of different Linux distributions along with installation instructions. Just look for the operating system you're using and follow the recommended command. For this example, I'm using [Ubuntu](../../Skills/Web%20Development/Ubuntu.md). Now, the good thing about Ubuntu is that Git often comes pre-installed. You can check if it's already on your system by running git --version. And there we go. If you're using a fresh installation, you'll likely have the latest version. But if you have been using it for a while, there's a good chance your Git version is outdated. To update or install Git, you can run the following command: sudo apt-get install git. I can run it here and see I am already running on the latest version. So Git is successfully installed on our system, and it's time to put it to use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (9), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (4), [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (2)
> **CLI Commands:** git (9), find (1), sudo (1), apt (1)
> **Prerequisites:** install (4)
> **URLs:** [git-scm.com](https://git-scm.com) (1)
> **UI Navigation:** go to (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Install Git on macOS](https://www.linkedin.com/learning/git-essential-training-25677984/install-git-on-macos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/install-git-on-macos?u=76281980&t=0)** - [Instructor] If you are using a Mac, [Git](../../Skills/Software%20Development/Git.md) might already be installed, but there's a good chance it's outdated. You can check by opening terminal and running git --version. Here, we can see that the version is indeed outdated. So, if we need to install or update Git, we can go to the website. We go to [git-scm.com](https://git-scm.com), and we hit Download. Here, we can click on macOS, and this gives us different installation options. The easiest way to use is homebrew. If you don't have homebrew yet, you can install it first. Then, you go back to your terminal and we run brew install git. Once it is done, open a new terminal window and check the version again. We can now see Git has been updated. Other options you can find on the website include using MacPorts or [Xcode](../../Skills/Mobile%20Development/Xcode.md), which already comes with Git built-in. There's also a binary installer with a graphical setup, but as of now, it is outdated, so I would not recommend it. Unless that changes, sticking with homebrew or MacPorts is your best bet to getting the latest version.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (7), [Xcode](../../Skills/Mobile%20Development/Xcode.md) (1)
> **CLI Commands:** git (7), brew (1), find (1)
> **Prerequisites:** install (3), setup (1)
> **Tools:** terminal (3)
> **UI Navigation:** go to (2), click on (1)
> **Code Identifiers:** macos (1)
> **URLs:** [git-scm.com](https://git-scm.com) (1)
> **Cross-References:** go back to (1)

#### [Git GUI clients](https://www.linkedin.com/learning/git-essential-training-25677984/git-gui-clients?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/git-gui-clients?u=76281980&t=0)** - [Instructor] [Git](../../Skills/Software%20Development/Git.md) is a command line tool, but as we have seen, keeping track of file history can get complicated, especially in long running projects. That's where Git GUI clients come in. These tools help visualize Git's process, making it easier to understand what is happening in a repository. You can find a list of available Git GUI clients on the official website, [git-scm.com](https://git-scm.com). Just go to downloads and then look for the GUI clients. We can view them here and we can find a variety of options. For all the options we can see on what operating systems they work. Some of these are free while others are paid. You can find out here what works best for you or ask your coworkers for recommendations. In the next video, we'll take a closer look at one of these GUI clients, Visual Studio Code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (5)
> **CLI Commands:** git (5), find (3)
> **Env Vars:** gui (4)
> **Tools:** command line (1), visual studio (1)
> **URLs:** [git-scm.com](https://git-scm.com) (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)

#### [Optional: Install Visual Studio Code](https://www.linkedin.com/learning/git-essential-training-25677984/optional-install-visual-studio-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/optional-install-visual-studio-code?u=76281980&t=0)** - [Instructor] I want to give a special mention to Visual Studio Code, one of the available GUI clients. Visual Studio Code or VS Code for short has built in support for [Git](../../Skills/Software%20Development/Git.md), giving you a good starting point to work with. But beyond that, there is also some great extensions and it can help you with the process. Working with Visual Studio Code is very similar to the experience with [Codespaces](../../Skills/Software%20Development/Codespaces.md). To install Visual Studio Code go to code.[visualstudio.com](https://visualstudio.com). You can download VS Code directly via the button or click the download button at the top right here to get available options. I am going to use the system installer for [Windows](../../Glossary/Service/Windows.md) as I am an admin on this computer. Once the file is downloaded, we can open it from here and it'll open up a wizard. Accept the agreement and click next. For a quick installation, we are going to keep all the default values. We'll click install and once it's finished we are able to launch Visual Studio Code. Now that we have Visual Studio Code running, I can open the extensions menu and search for git. You will see several useful options. Some of the most popular ones are Git Graph, Git History, and GitLens. These can help you track changes, see who has last modified the file,
>
> **[1:34](https://www.linkedin.com/learning/git-essential-training-25677984/optional-install-visual-studio-code?u=76281980&t=94)** and visualize your project's history. So see about the options and find out what might help you. If you're new to Git, using a GUI can make things much easier. So it's worth exploring these tools and find out what works best for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (5), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **CLI Commands:** git (5), find (2), make (1)
> **Tools:** visual studio (6), vs code (2)
> **Env Vars:** gui (2)
> **UI Navigation:** go to (1), open the (1)
> **Prerequisites:** install (2)
> **URLs:** [visualstudio.com](https://visualstudio.com) (1)
> **Speakers:** - [instructor] (1)

#### [Configure Git](https://www.linkedin.com/learning/git-essential-training-25677984/configure-git?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/configure-git?u=76281980&t=0)** - [Instructor] When we have [Git](../../Skills/Software%20Development/Git.md) on our local computer, we have some configuration that we can do and some that needs to be done. You don't need to do this if you're using a code space, but you should still be aware of the mandatory configuration for when you move to a local device. There are a few different Git config files. The two that are most likely to be of use for you are the global config and the local config. The global configuration applies to all the repositories for your user profile. The file is called .gitconfig, and you can find it in your home directory or in your user folder. The other configuration I want to mention is the local configuration. This applies to a specific repository and is stored inside a file called config. You can find it in a folder in your repository called .git. Note that on [Windows](../../Glossary/Service/Windows.md), this might be a hidden folder. The settings in this file will override any settings in the global configuration. You are able to edit these settings using a text editor, a code editor, or directly in the terminal. Some common configurations include setting your default editor, defining the default branch name, or creating aliases. Now let's see what those mandatory settings are that we have to create before we can start. So I am starting from the terminal, and what we need to do is add our name and our email to the global configuration. You have to make sure that you are using an email address
>
> **[1:36](https://www.linkedin.com/learning/git-essential-training-25677984/configure-git?u=76281980&t=96)** that you will also use with your Git provider. First, the name. We use git config --global user.name, and then your first name, your last name, a nickname, whatever you like. Then to add the email address, again, we use git config --global user.email, and then your email address. As you see, you won't get any feedback after running these commands, so to see if they were actually added to the configuration run git config --list. And here we can see they have been added to our configuration. If you want to view your configuration at a later time, you can always use git config --list again. This will always display the current settings. With these two settings in place, Git is now ready to use, so let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (9), [Windows](../../Glossary/Service/Windows.md) (1)
> **CLI Commands:** git (9), find (2), make (1)
> **Tools:** terminal (2)
> **Warnings:** be aware (1), note that (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)


### 4. Push Your Code with Git

[↑ Back to Table of Contents](#table-of-contents)

#### [Set up a remote repository](https://www.linkedin.com/learning/git-essential-training-25677984/set-up-a-remote-repository?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/set-up-a-remote-repository?u=76281980&t=0)** - In this chapter, we'll create a remote repository to practice using [Git](../../Skills/Software%20Development/Git.md). A remote repository is stored on a Git provider. This is a cloud service where you can keep your Git projects just like you would locally. Since it's in the cloud, you can access it anywhere and pull your code onto different computers. There are several Git providers to choose from, such as [GitHub](../../Skills/Software%20Development/GitHub.md), GitLab, and [Bitbucket](../../Skills/Software%20Development/Bitbucket.md). While their interfaces might look different, they all follow the same core concepts, so once you learn one, switching to another is easy. We are going to use GitHub for this course as it also makes it possible for us to use GitHub [Codespaces](../../Skills/Software%20Development/Codespaces.md). If you don't have an account yet, head to [github.com](https://github.com) and sign up. It's completely free. All you need is an email address and the process will explain itself. Once you have logged in, you have the option to create your own repositories. We will see how that works before we set up the repository that we will use for this course. We can create a new repository by using the URL [github.com/new](https://github.com/new). When creating a repository, you need to fill in a few details. First, we choose the repository name. Since this will be part of the URL, it's best to avoid spaces. I'll call mine git-repository, and I see it's available. If you want, this is also where you can add a description. Next, decide whether your repository should be public or private.
>
> **[1:34](https://www.linkedin.com/learning/git-essential-training-25677984/set-up-a-remote-repository?u=76281980&t=94)** A public repository means anyone can view your code, but no one will be able to edit it. A private repository is only visible to you unless you share access with specific people. For this example, I'll keep this one private. Now, you see an option to initialize the repository. You can add a README file, a gitignore file, or choose a license. A README file is a best practice for any repository, so I'm going to include one. The other options aren't necessary for now, but I encourage you to explore them later to see how they can help you manage your project. Once everything is set, click Create repository. And just like that, in a few seconds, our repository is ready. You can create as many repositories as you want. Follow along with the next video to set up the repository that we will use for this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (5), [GitHub](../../Skills/Software%20Development/GitHub.md) (5), [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (1), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (1)
> **Tools:** github (5), gitlab (1), bitbucket (1)
> **CLI Commands:** git (5)
> **Env Vars:** url (2), readme (2)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** just like (2), such as (1)
> **URLs:** [github.com](https://github.com) (2)
> **Best Practices:** it's best to (1), best practice (1)

#### [Fork the course repository](https://www.linkedin.com/learning/git-essential-training-25677984/fork-the-course-repository?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/fork-the-course-repository?u=76281980&t=0)** - [Instructor] Let's set up a repository that we can use for this course. This will make it easier for you to follow along, which I highly recommend. To do this, we are going to fork a repository. Forking means that we can take a repository that we don't own ourselves and we can create our own copy. That copy will be stored in our account and we are able to start working with it without changing anything in the original repository. In theory, you could use forking to make contributions to an existing repository that you don't own, but that part is out of the scope of this course. For now, go to the URL that you can see on the screen. At the top, you will see a button with Fork. When we click that, we can create a fork in our own account. You can change the name of the repository if you want to, or you can just leave everything at the default. Click Create Fork right at the bottom to create your own version of the repository. Note that a fork will always be a public repository, so you do not have the option to make it a private one. You are now ready to follow along with this course.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Env Vars:** url (1)
> **UI Navigation:** go to (1)
> **Definitions:** means that (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Clone the remote repository](https://www.linkedin.com/learning/git-essential-training-25677984/clone-the-remote-repository?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/clone-the-remote-repository?u=76281980&t=0)** - [Instructor] Now that we have set up a remote repository, let's link it to our local computer so that we can start working with it. If you are using a codespace, you don't have to follow along with this video, but I do recommend watching it, as you will need to know how to do this from your local device. So let's just visualize. What we are doing here is grabbing the complete remote repository and saving a copy on our local device. Let's first go to the browser and to our remote repository. The first thing we need to do to start a clone is click Code right here. Make sure you are in the Local tab. And here we have some options to clone our repository. As you can see, we can use HTTPS or SSH. Both methods have their pros and cons. But for this video, we will use HTTPS as it's a bit simpler to set up. You see a URL here, and we have a button with which we can copy it. So we'll click that, and now we'll move on to our local device. You can use any terminal you prefer. I'm using [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md), but you could use CMD on [Windows](../../Glossary/Service/Windows.md) or the terminal on Mac or [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md). The experience should be the same. I've already set up a folder where I keep all my [Git](../../Skills/Software%20Development/Git.md) repositories. In this case, I named it Code. Now, let's clone the repository. I'll type git clone, and then paste the URL that we just copied, and I'll press Enter and the cloning will begin.
>
> **[1:36](https://www.linkedin.com/learning/git-essential-training-25677984/clone-the-remote-repository?u=76281980&t=96)** This might be a part where the computer asks you to sign into [GitHub](../../Skills/Software%20Development/GitHub.md) because it needs a connection with your local device. If you do, make use of signing up with the browser, as that is one of the easiest ways to do it. After you sign in, the process will complete and you will get a complete clone here. So a new folder has been created for my repository. If I want to, I can open it in Visual Studio Code. I do that by typing code and then the name of the repository. So let me start with git and then Tab for Tab completion. I'll press Enter and Visual Studio Code will launch. Since I created this repository myself, I'll select trust the authors. And there we go. We now have a repository on our local device with all the files that we got from GitHub.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (3), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (1), [Windows](../../Glossary/Service/Windows.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **Tools:** terminal (2), github (2), visual studio (2), powershell (1)
> **CLI Commands:** git (3), make (2), ssh (1)
> **Env Vars:** https (2), url (2), ssh (1), cmd (1)
> **Prerequisites:** set up (3)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Create a file and stage it](https://www.linkedin.com/learning/git-essential-training-25677984/create-a-file-and-stage-it?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/create-a-file-and-stage-it?u=76281980&t=0)** - [Instructor] Okay, we have set up the repository. In this video, we will see how we can stage a file in [Git](../../Skills/Software%20Development/Git.md). As we saw in the previous video, we will start with the files in the file explorer and move them to the staging area. If you follow along with the codespace, this is your time to open it. Go to the [GitHub](../../Skills/Software%20Development/GitHub.md) repository you created before, click Code, and make sure you're on the tab for [Codespaces](../../Skills/Software%20Development/Codespaces.md). If you are, select Create Codespace on Main. You can follow these steps for each video from now on if you don't have an active codespace to use. If you are using your local device, open up the repository we created in the video where we learned how to clone a repository. To start, I'll create a simple example file. I'll right click here, and when I do, you will see that it will ask you to share your clipboard. I'll allow that. There we go. And now we can create a new file. I'll name this Example.md. Keep in mind it doesn't matter what type of file I'm creating here, any file can be used with Git. I'll add some content and save. Now let's move onto the terminal right below here. To stage this file, I'll use git add, and then the file's name. So now example. I can Tab complete that.
>
> **[1:32](https://www.linkedin.com/learning/git-essential-training-25677984/create-a-file-and-stage-it?u=76281980&t=92)** So I'll press Tab and it will fill it out for me. Press Enter, and the file has now been staged. So this tells Git that I want to include this file in the next commit. Alternatively, I could have used git at dot, which would stage all changes in the current directory, including the example file and maybe other modified files, like for example, the Readme file. This is a time where I want to introduce you to a command that will really help you, git status. When we use this command, we get to see how our repository is doing. So I type git status, and I can now see that our new file has been staged and is ready to be committed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (7), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (1)
> **CLI Commands:** git (7), make (1)
> **Cross-References:** as we saw (1), previous video (1), in the next (1)
> **Tools:** github (1), terminal (1)
> **File Paths:** example.md (1)
> **Documentation:** the readme (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)

#### [Commit a file](https://www.linkedin.com/learning/git-essential-training-25677984/commit-a-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/git-essential-training-25677984/commit-a-file?u=76281980&t=1)** - [Instructor] In the last video, we added a file to the staging area. In this video, we will commit this file to the local repository. So just a little bit of a refresher. We are now using [Git](../../Skills/Software%20Development/Git.md) to take the changes that are in the staging area and store them in our local repository to create a snapshot. We are back at our repository with the file example.md in our staging area. Now let's commit this file locally. And I'll use "git commit -m" followed by a message that explains why I'm committing this file. So in this example, I write, "add example.md to demonstrate the git process."
>
> **[0:54](https://www.linkedin.com/learning/git-essential-training-25677984/commit-a-file?u=76281980&t=54)** Then I'll press enter, and the file is committed. This means that a snapshot of the file state has been created locally. If I check Git status, it will show that everything is committed, but we're now ahead of the remote repository. So in the next video, we'll push this file to the remote repository so it's the same as our local environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (4)
> **CLI Commands:** git (4)
> **File Paths:** example.md (2)
> **Cross-References:** in the last (1), in the next (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Push the file to the remote repository](https://www.linkedin.com/learning/git-essential-training-25677984/push-the-file-to-the-remote-repository?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/push-the-file-to-the-remote-repository?u=76281980&t=0)** - [Instructor] In this video, we will make sure that the changes in our local repository are pushed to the remote repository. Going back to our environment, we have a file in our local repository that hasn't been pushed to the remote repository yet. We ran [Git](../../Skills/Software%20Development/Git.md) status, and we can see that our local branch is ahead of the remote one, and it tells us exactly what to do next. We need to use git push. Let's go ahead and do that. Enter, and that's it. The changes have now been pushed to our remote repository, so let's check if it actually worked. I'll open the web interface and refresh, and there we can see that Example.md has been added. You can also see the commit message we set earlier, adds Example.md to demonstrate the git process. So, there we go. We have now pushed our change to the remote repository.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (3)
> **CLI Commands:** git (3), make (1)
> **File Paths:** example.md (2)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### [Pull changes from the remote repository](https://www.linkedin.com/learning/git-essential-training-25677984/pull-changes-from-the-remote-repository?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/pull-changes-from-the-remote-repository?u=76281980&t=0)** - [Instructor] Sometimes there will be changes on the remote repository that you want to pull to your local device. Maybe you are on a different device or maybe someone else pushed code to the remote repository. Let's see how we can pull those changes. So our starting point would be a remote repository that has newer files than our local repository. We say that the remote repository is ahead of the local one. Let's first create a situation where we actually have something to pull. If you are using a code space, make sure the one you were using is still opened up or open a new one before you take the next step. So we have the [GitHub](../../Skills/Software%20Development/GitHub.md) repository in the web interface. You can now click on add file, and then create new file. Call the file example 02.MD and add some text to your liking. At the top, you can now click Commit Changes. A Default Commit message is already provided, so let's leave it as it is and click on Commit changes. Now let's move back to the code space or our local environment and we can see that the new file we just created cannot be found here. To make it visible here, we'll use [Git](../../Skills/Software%20Development/Git.md) pull and now our changes are added to the repository. It doesn't matter if you had unsafe
>
> **[1:32](https://www.linkedin.com/learning/git-essential-training-25677984/pull-changes-from-the-remote-repository?u=76281980&t=92)** changes in your repository. In most cases, Git will make sure it all fits together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **CLI Commands:** make (3), git (2)
> **UI Navigation:** click on (2)
> **File Paths:** 02.md (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)

#### [Initialize a repository locally and sync it](https://www.linkedin.com/learning/git-essential-training-25677984/initialize-a-repository-locally-and-sync-it?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/initialize-a-repository-locally-and-sync-it?u=76281980&t=0)** - [Instructor] Now let's take a little sidestep. When you start out, you probably already have code at your local folder, and you might want to push this into a new remote repository. And good thing is that it's absolutely no problem. Let's see how we can do that. You cannot follow along with this video if you use [GitHub](../../Skills/Software%20Development/GitHub.md) [Codespaces](../../Skills/Software%20Development/Codespaces.md), but I do recommend that you watch the video so that you know how to handle this scenario in your local environment. As you can see here, I'm creating a repository, but I'm not going to initialize it. So I'm not going to add a README, I'm not going to add a gitignore, and no license. Create a repository. There's nothing in here. The web interface is already offering me some options to help me set this up, but let's walk through this from the local environment. First thing I'll do is copy the URL here, because I'm going to need this later. Now let's open up Visual Studio Code. As you see here, I have a local folder with a few files in it, just like a regular folder. It's not a [Git](../../Skills/Software%20Development/Git.md) repository yet, so we need to turn it into one. To do that, we can use git init. We now have an empty Git repository. Let's go ahead and add the files that we already created. I'll use git add . to add everything to the staging area. And then I'll commit it with git commit m initial commit,
>
> **[1:35](https://www.linkedin.com/learning/git-essential-training-25677984/initialize-a-repository-locally-and-sync-it?u=76281980&t=95)** which is the standard message that we use for the first commit in a new repository. All right, so now we have our local repository, but how do we connect it to the remote repository that we just created? To do that, we use git remote add origin,
>
> **[1:56](https://www.linkedin.com/learning/git-essential-training-25677984/initialize-a-repository-locally-and-sync-it?u=76281980&t=116)** and then the URL that we copied from a web interface. Now our local and remote repositories are linked, but the code has not been pushed to the remote repository yet. At this point, I want to show you how Git can help you out if you are new to this process. To do so, I'll type in git push, press Enter, and I get an error. But the error explains me what went wrong. The issue is that in my local repository, I am working on the main branch, but the remote repository doesn't have any branches yet, since it's empty. So Git tells me what command I need to run to set up that branch on the remote repository. So what I'll do is just copy that suggested command and paste it in the command line. And with that, the main branch has been created in the remote repository. So if I do git push again, my code has now been pushed to the remote repository. So now if I go back to the web interface and I'll refresh, I can see that the code from our local environment is now in the remote repository. So we were already able to start from the remote repository, but now we are also able to use our local device as the source.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (10), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (1)
> **CLI Commands:** git (10)
> **Env Vars:** url (2), readme (1)
> **Tools:** github (1), visual studio (1), command line (1)
> **Cross-References:** go back to (1)
> **Analogies:** just like (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Push your first code](https://www.linkedin.com/learning/git-essential-training-25677984/challenge-push-your-first-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/challenge-push-your-first-code?u=76281980&t=0)** (bright electronic music)
>
> **[0:05](https://www.linkedin.com/learning/git-essential-training-25677984/challenge-push-your-first-code?u=76281980&t=5)** - We've covered a lot about [Git](../../Skills/Software%20Development/Git.md) so far, and now it's time for your first challenge. You're going to push your first piece of code to Git. To do so, first, you will create the remote repository. Now, open the repository in a [GitHub](../../Skills/Software%20Development/GitHub.md) codespace or in your local environment. Add a file for your favorite programming language. If you're not sure what to use, you can always use first push.md, which will create a markdown file. Once you are happy with the file, save it, and make sure you can make it available in the remote repository. Give it a try, you've got this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **CLI Commands:** git (2), make (2)
> **File Paths:** push.md (1)
> **Tools:** github (1)
> **UI Navigation:** open the (1)
> **Speakers:** - we (1)
> **Non-Speech:** (bright electronic music) (1)

#### [Solution: Push your first code](https://www.linkedin.com/learning/git-essential-training-25677984/solution-push-your-first-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/solution-push-your-first-code?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/git-essential-training-25677984/solution-push-your-first-code?u=76281980&t=5)** - [Instructor] If everything went smoothly, you should now have a remote repository with a file in your favorite language. To get there, you first created a new repository based on the templates. Then you opened up a code space or clone through your local environment. After that, you added your file. I've added Challenge01.md. You staged it with [Git](../../Skills/Software%20Development/Git.md) add. You committed it with git commit, (keyboard clicks) and finally pushed it using git push. (keyboard clicks) And there we go. If you ran into any issues, don't worry. Take a moment to review the videos in this chapter. They'll help you guide through the process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (3)
> **CLI Commands:** git (3)
> **File Paths:** challenge01.md (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 5. Make Changes to Files

[↑ Back to Table of Contents](#table-of-contents)

#### [Git status](https://www.linkedin.com/learning/git-essential-training-25677984/git-status?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/git-status?u=76281980&t=0)** - Now that we know how to use [Git](../../Skills/Software%20Development/Git.md), let's explore how we interact with our files. First, I want to show some tips on how to make it easier to keep track of what is happening. One of the most powerful commands in Git is git status. We have seen it before in a previous chapter, but I want to take the time to look at how it can help us. git status gives you a clear overview of your repository's current state. It also often suggests what you might need to do next, especially if you run into an issue. Let's see it in action. Right here, I created a new file, gitStatusDemo.md It is added to my local folder, but Git doesn't track it yet. When I use git status, it shows that there's an untracked file, meaning it hasn't been added to the staging area. Git even tells me what I can do. I can use git add, filename, to include it in the next commit. So let's do that. I'll type git add gitStatusDemo.md, and now I'll run git status again. Now, Git tells me that there are changes ready to be committed. It also shows me how to move the file back to the working area if I change my mind. But in this case, I'm going to commit. I'll use git commit -m.
>
> **[1:36](https://www.linkedin.com/learning/git-essential-training-25677984/git-status?u=76281980&t=96)** Enter. After committing, let's check git status once more. Now it tells me that everything is clean, nothing left to commit. However, it also warns me that the local branch is ahead of the remote one, meaning I have commits that I haven't pushed yet. Git even suggests what to do next, use git push. Once I push my changes to the remote repository, I'll run git status again, and now it tells me everything is up to date. git status is an incredibly useful command. Whether you're troubleshooting, unsure about your next step, or you're just checking in, you can always use git status to see exactly where your repository is at that point.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (18)
> **CLI Commands:** git (18), make (1)
> **File Paths:** gitstatusdemo.md (2)
> **Code Identifiers:** gitstatusdemo (2)
> **Cross-References:** previous chapter (1), in the next (1)
> **Definitions:** is an  (1)
> **Speakers:** - now (1)

#### [Edit a file and view changes](https://www.linkedin.com/learning/git-essential-training-25677984/edit-a-file-and-view-changes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/edit-a-file-and-view-changes?u=76281980&t=0)** - [Instructor] In the previous chapter, we added new files to our [Git](../../Skills/Software%20Development/Git.md) repository, both locally and remotely. But one of Git's best features is that it's able to track changes within files, not just add new ones. Committing changes to a file works almost exactly the same way as committing a new file. So let's walk through it. Here, I'll open up one of the files we've created earlier, Example.md. I'm going to make a small change. I'll add an extra line and I'll save. Now let's see how we can save this change in our Git history. I'll use the same process as before. First, I'll use git status to see that this file is modified but not staged at this point. Now I'll use git .add to stage all changes, and then git commit -m with a message.
>
> **[1:00](https://www.linkedin.com/learning/git-essential-training-25677984/edit-a-file-and-view-changes?u=76281980&t=60)** I'll press Enter and we have a new snapshot in our Git repository where I can now find the latest version of the file. But what if I want to see exactly what changed before I commit? Right now we're just working with singular files. It's easy to keep track. But in a large project, changes can add up quickly. Let's see how we can check what has been changed. I'll make another small change to my file, and I'll save that. Now I can use git diff. I'll clear it first, git diff. I can specify a file name or I can just press Enter to check all changes. As we can see, Git gives a clear overview of what's different. It marks lines that were removed and highlights new additions in green. For example, here it tells me that I've slightly modified a line by adding a hard return. This works across multiple files as well. So if I added Example02.md, let's say, I'll just add an explanation mark. I can now run git diff again. I'll clear the screen first, use git diff, and we can now some more information. You see a column at the end, which means that Git is not ready with giving you the information. If you press the Spacebar, it'll keep running. If you find yourself stuck with end in the end and you're not able to move on, just press Q
>
> **[2:34](https://www.linkedin.com/learning/git-essential-training-25677984/edit-a-file-and-view-changes?u=76281980&t=154)** and it'll bring you back to the prompt. Now let's look at those changes. I get an overview of all uncommitted changes, showing me everything that was modified, both in Example and Example02. Now, what if I've already added files to the staging area but still want to review those changes? That's where git diff --cached comes in. First, I'll add my files to the staging area with git add dot. I'll clear the screen, and now I'll use git diff --cached. When I press Enter, I get the same clear breakdown but now specifically for stage changes, everything that's about to be committed. Remember when you see the column, you can press space to see the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md), and when you going to go back to the prompt, you can press Q. And here I can see all the changes that are about to be committed. I am happy with these changes, so I will now use git commit -M adds extra lines to demonstrate git diff. There we go, and I'll push them to the remote repository. I can now see if it all works by using git status. And now we have changed our files. So whether you are working with a small or a large project, git diff is a great tool to help you keep track of what's changing
>
> **[4:08](https://www.linkedin.com/learning/git-essential-training-25677984/edit-a-file-and-view-changes?u=76281980&t=248)** before you commit, ensuring you always know exactly what's being saved in your repository.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (20), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** git (20), make (2), find (2)
> **File Paths:** example.md (1), example02.md (1)
> **Cross-References:** previous chapter (1), go back to (1)
> **Definitions:** means that (1), is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Delete files](https://www.linkedin.com/learning/git-essential-training-25677984/delete-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/delete-files?u=76281980&t=0)** - [Instructor] We've already added files and made changes to existing ones, but what happens if we delete a file? Let's find out. Let's go back to our repository. I am going to delete Example02.md. I'll press Delete and confirm that I want to delete it. Let's use [Git](../../Skills/Software%20Development/Git.md) status to see how Git responds to this. It shows that the file has been deleted. If we want this change to follow through into the Git repository, we have to commit it like we would with any other changes. So, I'll stage it using git add . and then commit it with a message like Removes Example02.md. Git now shows that one file was changed and everything inside it was deleted. Now, let's push. And now, I can check my remote repository. When I refresh it, I see that Example02 has been deleted as well. I can still see the commit message though, and that's the important part. Even though the file has been deleted, Git still remembers it. It is still part of those old snapshots in the Git history. This means it's possible to recover or reference old versions whenever we need. We will see how we can do that in a later video in this chapter. It is good to mention that you can also delete files from the Git command line, but we will stick to this method to keep it simple.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (8)
> **CLI Commands:** git (8), find (1)
> **File Paths:** example02.md (2)
> **Cross-References:** go back to (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)

#### [Rename files](https://www.linkedin.com/learning/git-essential-training-25677984/rename-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/rename-files?u=76281980&t=0)** - [Instructor] Let's see what happens in [Git](../../Skills/Software%20Development/Git.md) when you rename a file, as it might seem a bit unexpected. We'll use Example.md. We're not changing its content, just its name. I'll rename it and I'll call it NewName.md. Now let's use git status to see what has changed. It looks like Git created a new file. Example.md was deleted and NewName.md was created with new content. At this point, Git doesn't seem to realize that they are the same file, but now let's see what happens when we add it to the staging area. We'll use git add . I'll clear the screen and at git status again. Git now understands that this is the same file, just renamed. Initially, it might seem like Git was confused, but it now understands that the file is simply renamed. There's another method to rename files directly in Git. First, I'll commit the current change so we don't get confused. I'll use git commit -m "renames Example.md to NewName.md". Now let's change a name directly. I'll use the command git mv and then the old name and then a new name. So in this example I'll use gitStatusDemo.md and I'll call it newStatus.md.
>
> **[1:40](https://www.linkedin.com/learning/git-essential-training-25677984/rename-files?u=76281980&t=100)** When I press enter, we can see the change in the file menu, and now, when I use git status, we can see that the change is already in the staging area, so I don't need to use git add. Now we can commit it by using git commit -m "renames gitStatusDemo.md to newStatus.md". We can commit and now we can push our changes so that they are also present in the remote repository. Both these methods achieve the same result, so you can choose whichever one you prefer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (14)
> **CLI Commands:** git (14), mv (1)
> **File Paths:** example.md (3), newname.md (3), gitstatusdemo.md (2), newstatus.md (2)
> **Code Identifiers:** gitstatusdemo (2), newstatus (2)
> **Speakers:** - [instructor] (1)

#### [Working with folders](https://www.linkedin.com/learning/git-essential-training-25677984/working-with-folders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/working-with-folders?u=76281980&t=0)** - [Instructor] So far we've only been working with files, but what about folders? [Git](../../Skills/Software%20Development/Git.md) can keep track of folders too, so let's explore how that works. To start, I have created two new folders, First Folder and Second Folder. Now let's move NewName.md into First Folder. I'll confirm and I'll check Git status. I'll move this up a little bit so you can see it. And Git recognizes that a file has been deleted and a new folder has been created. Remember from the last video that Git seems to think that a file has been deleted when it gets renamed? This also happens when a file is moved in the folder structure. So let's stage these changes by using git add dot. We'll check status again. This time Git sees that the file was renamed rather than deleted. It recognizes that the file was moved to the new folder. Now I'll commit it. I'll use git commit -m moves newName to First_Folder. There we go. Let's push these changes. There we are. If I check the remote repository now, I can see that First Folder was created. But wait, what about Second Folder? We created it, but it's missing from the repository here. If we check our file explorer right here, it is still there locally.
>
> **[1:33](https://www.linkedin.com/learning/git-essential-training-25677984/working-with-folders?u=76281980&t=93)** So why doesn't Git track it? This brings us to something important when using Git. Git does not track empty folders. If a folder has no files in it, Git will completely ignore it. It won't show up in the staging area, and it won't be included in the commit. So what can we do to make sure that Git recognizes an empty folder? What we do is we add a special file. Press new file, and it's called .gitkeep. This is a common convention used by developers to indicate that a folder is important for the project structure, even if it doesn't have any real content yet. Now I created a file called .keep inside this folder and I'll save it. So now when I use Git status, again, Git detects the folder. I'll add it with Git add dot. and I can commit it. Git commit -m adds Second_Folder. Press enter. And now if I push this, I am able to see the Second Folder in my remote repository, and the .gitkeep file is inside of it. Of course, once I add real content to this folder, I can delete .gitkeep because Git will keep tracking it as normal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (17)
> **CLI Commands:** git (17), make (1)
> **File Paths:** newname.md (1)
> **Code Identifiers:** newname (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Undo your changes](https://www.linkedin.com/learning/git-essential-training-25677984/undo-your-changes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/undo-your-changes?u=76281980&t=0)** - [Instructor] As we make changes to our files, there might be times where we don't want to keep them. Maybe we realize we need to go back to the previous commit, and the good news is we can do that with [Git](../../Skills/Software%20Development/Git.md). Let's see how it works. To start off, I've removed a line from NewName.md and I've added a line to newStatus.md. I will now stage those changes by using git add ., and I'll use git status and see that both of the files are in the staging area. But what if I change my mind at this point? What if I don't want to commit these changes after all and I want to do a rollback? The good thing is git status actually tells me what to do. It suggests using git restore --staged, followed by the file name to remove it from staging. Let's try that with NewName.md. We'll type git restore --staged First_Folder/NewName.md. Note that the folder is part of the file name here. I'll press Enter. And when I check git status, one file is still in the staging area, but NewName.md has moved back to the working directory. I can also remove all stage files at once using git restore --staged, and then a dot. Now both files are out of the staging area and back in the working directory as we can see with git status.
>
> **[1:36](https://www.linkedin.com/learning/git-essential-training-25677984/undo-your-changes?u=76281980&t=96)** There we go. But what if you want to go even further? What if I don't want these changes after all? Not just on stage, but completely removed. I can reset the files back to their previous states. Once again, git status gives me the answer here. I can use git restore without staged. So I'll use git restore and the dot. The changes disappear immediately. It's like it never happened before. As you can see, this command is really powerful. It can wipe out all uncommitted changes in one go, so you need to use it carefully. But if you have been experimenting or things got messy, this is a great way to reset everything back to the last commit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (12)
> **CLI Commands:** git (12), make (1)
> **File Paths:** newname.md (3), newstatus.md (1), first_folder/newname.md (1)
> **Code Identifiers:** newstatus (1)
> **Definitions:** is a  (1)
> **Analogies:** it's like (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [View commit history](https://www.linkedin.com/learning/git-essential-training-25677984/view-commit-history?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/view-commit-history?u=76281980&t=0)** - [Instructor] We've talked about [Git](../../Skills/Software%20Development/Git.md) as a tool for tracking the history of our files, what has changed and when, but how do we actually see that history? That's where git log comes in. Let's move to our codespace. I will open up the terminal all the way, as that is where our focus will be. If we type git log in the command line, it shows us the commit history for this repository. Each entry includes a commit, a unique identifier called a checksum, the author's name, the date, and a commit message. You can see now why it's important to write clear, descriptive commit messages. Now, you notice that Git only shows a few commits at a time. You can press Spacebar to scroll down and see more. If you want to leave this view, simply press Q and you'll be back at the command front, ready to enter new commands. But git log does more than just show a list of commits. You can filter and explore history in different ways. Let's look at a few useful examples. First, if we want details about the specific commit, we can copy the checksum. I'll copy this one. So we copy the checksum. I'll clear my screen to make it more visible, and I'll use git show and then paste. And now we see all the changes that have been made in this specific commit. So this gives me a more detailed view of this part of the repository's history.
>
> **[1:35](https://www.linkedin.com/learning/git-essential-training-25677984/view-commit-history?u=76281980&t=95)** Let's look at another option. I'll clear my screen and use git log -p. This command not only lists commits, but also shows the actual changes made in each one. So I'll press Space and I can scroll to all those changes that have been made, so I can see exactly where something was modified. But we can also go the other direction. I'll clear my screen again and I'll use git log --oneline. Press Enter, and you can see that makes the log more readable by showing only the commit messages and shortening the commit IDs to seven characters. And seven characters is actually enough to identify the commit. What you could also do is search the log for commit messages. This is especially useful if you remember part of the commit message but not the exact commit. We do this by using --grep and then the phrase. So for example, I'll run git log --grep='Example'. I'll press Enter, and I get all the commits with commit messages that contains that string. Another little trick that you can use is graph if you are working with branches. I'll clear the screen again and use git log --graph. It's a great tool as it provides a visual representation.
>
> **[3:11](https://www.linkedin.com/learning/git-essential-training-25677984/view-commit-history?u=76281980&t=191)** You can see how branches have diversed and then merged again. You can see it with the lines at the front. Of course, for this project, this isn't that exciting, as this is a single-branch project. But remember this command for when you start using branches yourself. Finally, you are able to track history in a remote repository's web interface. So if we navigate to our remote repository, here, I can see the commit history. I can click on that and I get a full list of everything that has changed in my repository. If I click one, I will see all the changes that have been made in the files. It gives a nice visual breakdown. So this is another helpful way to explore your repository's history. There are many more options you can use when you use git log, but these should give you a solid foundation so you can view and search through your commit history.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (11)
> **CLI Commands:** git (11), grep (2), make (1)
> **UI Navigation:** scroll down (1), navigate to (1), click on (1)
> **Tools:** terminal (1), command line (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Go back in Git history](https://www.linkedin.com/learning/git-essential-training-25677984/go-back-in-git-history?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/go-back-in-git-history?u=76281980&t=0)** - [Instructor] In the last video, we saw how we can see all previous states that have been kept in the [Git](../../Skills/Software%20Development/Git.md) history. Now let's take that a little further. Let's see how we can browse the code in an older version of our project. First, I'll start by listing the old commits by using git log --oneLine. There we go. Now, let's say I want to go back to the commit before I removed Example02. Here you can see why the commit messages are very handy. What I'll do is I'll copy the commit ID that is viewed here. Notice how it's only the first seven numbers of the ID that gives us enough characters to uniquely identify it. Then I'll use git checkout and I'll paste the ID. Press Enter. Now I've switched to that older version. You can see that some folders I've created later are now gone, and Example02.md is back. In my codespace or in Visual Studio Code, I can see that I am in the state right at the bottom. It is important to note that I am now in what we call a detached head state. This means that I am looking at an older version of the project, but this isn't the best place to make changes. This command is specifically useful if you want to have a look at previous commits. If we want to go back to the current state of our project, I simply use git checkout, and then the name of the branch I'm using.
>
> **[1:34](https://www.linkedin.com/learning/git-essential-training-25677984/go-back-in-git-history?u=76281980&t=94)** Often, this will be the main branch. So I type git checkout main. Press Enter, and we now see that I'm back where I left off. So this is how you can navigate through Git history, viewing past versions of your project without affecting the latest one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (6)
> **CLI Commands:** git (6), make (1)
> **Cross-References:** go back to (2), in the last (1)
> **File Paths:** example02.md (1)
> **Code Identifiers:** oneline (1)
> **Tools:** visual studio (1)
> **Definitions:** means that (1)
> **Warnings:** note that (1)

#### [Revert a commit](https://www.linkedin.com/learning/git-essential-training-25677984/revert-a-commit?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/git-essential-training-25677984/revert-a-commit?u=76281980&t=2)** - [Instructor] In the previous video, we looked at how to view past versions of our project. Now, let's see how we can actually take back the changes in the previous version. Maybe we introduced a mistake or a bug that we need to undo. We can quickly fix that with [Git](../../Skills/Software%20Development/Git.md). First, let's check our commit history. I'll use git log --oneline. Now, let's say I want to undo the change where I renamed GitStatus.demo. To do this, I'll copy the commit ID and I'll use git revert and then copy and paste. When I press Enter, Git opens an editor message where I can modify the commit message for the fact that I have reverted. I like this message as it is, so when I close the editor, the commit is done. Now if I check my files on the left, I see that my file has been named back to gitStatusDemo.md. Now, it is important to note I am not actually rewriting history. That's generally considered bad practice because it can cause issues if others are working on the same code. Instead, what I have done is create a new commit that makes the changes to undo the previous one. If I check my history again using git log --oneline, I'll see a new commit that says Revert "renames gitStatusDemo to newStatus." So instead of deleting history, I've added a new record that clearly shows that we reverted this specific commit. Let's push this change to the remote repository
>
> **[1:38](https://www.linkedin.com/learning/git-essential-training-25677984/revert-a-commit?u=76281980&t=98)** so we have a consistent environment. Now, this action went very smoothly, but if you go back further in history, you might be hit with merge conflicts. We will discuss how to handle those in the next chapter, but if your changes aren't that large, you should not have big issues.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (5)
> **CLI Commands:** git (5)
> **Code Identifiers:** gitstatusdemo (2), newstatus (1)
> **Cross-References:** previous video (1), in the next (1)
> **File Paths:** gitstatusdemo.md (1)
> **Best Practices:** bad practice (1)
> **Speakers:** - [instructor] (1)

#### [Make use of the GUI of Visual Studio Code](https://www.linkedin.com/learning/git-essential-training-25677984/make-use-of-the-gui-of-visual-studio-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/make-use-of-the-gui-of-visual-studio-code?u=76281980&t=0)** - [Instructor] Keeping track of files and changes can get confusing, especially when you're working with multiple files. That is why I want to show you how Visual Studio Code can help with this process. VS Code can visualize what is happening, allowing you to even use [Git](../../Skills/Software%20Development/Git.md) without a command line. This can be especially helpful if you're still getting comfortable with Git. Let me show you how it works. I've started by adding a line to gitStatusDemo.md. And I will also remove a line from NewName.md. So we have something to work with. Now, you may have already noticed the icon in the sidebar that now shows a number. This is the source control, which is where Visual Studio Code helps you manage Git. If we click it, we can see the files that have been modified. When I click on NewName,md. Visual Studio Code opens a side-by-side view. On the left, it shows the original file, and on the right, it highlights the changes. Any new lines appearing green, making it easier to see exactly what was added. I can do the same for gitStatusDemo.md, and again, I get a clear visual of changes that I've made. If I'm happy with my changes and ready to commit, I can do this right here in Visual Studio Code. I simply click the plus sign next to the files to add them to the staging area, or if I want to add them all at once, I can use the plus sign here right next to Changes.
>
> **[1:35](https://www.linkedin.com/learning/git-essential-training-25677984/make-use-of-the-gui-of-visual-studio-code?u=76281980&t=95)** Then I can enter a commit message, just like I would in a command line. I can enter it right here, and then click Commit. Now my changes have been committed to the local repository. Since my repository is already connected to a remote one, I can push my changes straight away. I just click Sync Changes. The first time I do that, Visual Studio Code will explain that syncing means both pushing and pulling, so you always have the latest version on your device. I can choose to dismiss this message or prevent it from showing again in the future. I'll press OK, and Visual Studio Code now pushes my commits and pulls any new updates from the remote repository. Finally, I want to show you that I have a menu here with more actions. In this menu, I can see even more Git options. I can clone a repository, I can push without pulling, I can pull updates manually, and much more. So using Visual Studio Codes, Git tools can be very helpful, especially when you're new to Git. It gives you a clear overview of your changes and it helps you to navigate Git commands more easily, so it makes your process run a little bit smoother and maybe more intuitive.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (7)
> **Tools:** visual studio (7), command line (2), vs code (1)
> **CLI Commands:** git (7)
> **File Paths:** gitstatusdemo.md (2), newname.md (1)
> **Code Identifiers:** gitstatusdemo (2)
> **UI Navigation:** in the sidebar (1), click on (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Make a change and revert](https://www.linkedin.com/learning/git-essential-training-25677984/challenge-make-a-change-and-revert?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/challenge-make-a-change-and-revert?u=76281980&t=0)** (exciting music)
>
> **[0:05](https://www.linkedin.com/learning/git-essential-training-25677984/challenge-make-a-change-and-revert?u=76281980&t=5)** - We've reached the end of the chapter, and I think you're ready for another challenge. This time we'll make some changes and then revert some of them. Here's what you'll do. First, create a new markdown file in your repository. Add a line to it and commit it to the local repository. Now, add another line to the file. It can be anything you want. Commit this file as well. Now move the file into a folder and do a new commit. Finally, move the file back out of the folder by reverting to the previous commit in the [Git](../../Skills/Software%20Development/Git.md) history. You can do all of this locally by committing each step, or you can push your changes in between if you want to keep track of them remotely. That part is up to you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (1)
> **CLI Commands:** make (1), git (1)
> **Speakers:** - we (1)
> **Non-Speech:** (exciting music) (1)

#### [Solution: Make a change and revert](https://www.linkedin.com/learning/git-essential-training-25677984/solution-make-a-change-and-revert?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/solution-make-a-change-and-revert?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/git-essential-training-25677984/solution-make-a-change-and-revert?u=76281980&t=5)** - [Instructor] So how did it go? Let's see a solution to our challenge. So I have already created important_File.md and added a line. Now I am going to commit this to my local repository. I'll first add it to the staging area and then I'll use [Git](../../Skills/Software%20Development/Git.md) commit -m "creates Important File md". All right. I will add an extra line, save that, and I'll create a new commit. So I'll press Enter and use git commit and commit this file as well. Now I am going to create a folder and I'll add the file Important File to the Important folder. Again, I will create a commit, so I'll add the change and I'll commit. As you can see, Git sees this as a rename of Important File to Important File in the Important folder. Remember that at any point you can check your process with git status. As we can see here, I am now ahead of the remote branch, so I'll push everything. There we go. Now let's review our git history. I'll press Clear and use Git log --oneline to get an overview of the history of my commits.
>
> **[1:41](https://www.linkedin.com/learning/git-essential-training-25677984/solution-make-a-change-and-revert?u=76281980&t=101)** I will take the last commit that I did and copy the ID. Press Q to get my prompt again, and I'll use git revert. I'll press Enter and Git creates a commit message for me. I'll accept it by closing the box. And now we can see that Important File has been moved back to the main folder. If we look at the history again, we can see that the top commit has reverted the previous one. So there we go. If anything felt unclear, feel free to revisit this chapter and follow along again.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (8)
> **CLI Commands:** git (8)
> **File Paths:** important_file.md (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 6. Important Concepts in Git

[↑ Back to Table of Contents](#table-of-contents)

#### [Ignoring files](https://www.linkedin.com/learning/git-essential-training-25677984/ignoring-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/ignoring-files?u=76281980&t=0)** - There are a few key concepts that can make your [Git](../../Skills/Software%20Development/Git.md) workflow much smoother. One of them is telling Git to ignore certain files. In many coding projects there are files that you don't actually want to track with Git. A great example is log files. While they're useful locally, they're not really relevant for the code itself. Or maybe you have some personal configuration files that shouldn't be shared with the repository. Luckily we can handle this using a special file called .gitignore. This file needs to be in the root of your project. It's just a plain text file named .gitignore, and Git automatically understands that anything listed inside it should be ignored. You can specify files directly, entire folders, or even use wildcard slice asterisk for more flexibility. Let's set up an example here. So I have already added two extra files to second folder, log01.log and log02.log. Now if I run Git status and I'll make it a bit bigger, Git sees that there are two new files and says they are untracked. In this repository, I already have a Git ignore file and I'm going to use it. If I didn't, I could create one just like I would create any other file. Don't forget the dot at the beginning or it won't work. So I'll open my Git ignore file, and I'll add logO2.log. I'll press save and I'll run Git status again.
>
> **[1:37](https://www.linkedin.com/learning/git-essential-training-25677984/ignoring-files?u=76281980&t=97)** And we now see that it only tracks log01.log and it shows that Git ignore has been modified. We can also see on the left that the file is now grayed out to visualize which files are not tracked by Git. When we add log02.log to Git ignore like this, it doesn't matter if it's in a folder or not, it will ignore any version of this file in the repository. We could also ignore the entire folder. We do that by adding second folder and then the slash to gitignore. And when I save it, we see that both log01 and log02 are not being tracked anymore. So by adding this everything in second folder, starting from now on will be ignored. If we want more control over this, we could for example, say *.log. Now we know that every file that ends with .log in second folder will be ignored. All other files will be tracked. There's a lot of ways, as you can see, to customize this, and it's a really handy tool for keeping unnecessary files out of your Git history. Now a final note, maybe you saw that .gitkeep was still being tracked even though I asked Git to ignore the whole folder. That is because gitignore only works for file that weren't previously tracked. And this is by design. If you want an existing file to stop being tracked, official documentation recommends alternative solutions, like making the file into a template or deleting it altogether.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (14)
> **CLI Commands:** git (14), make (2)
> **Analogies:** just like (1), for example (1)
> **Code Identifiers:** logo2 (1)
> **Exercise Files:** template (1)
> **Best Practices:** don't forget (1)
> **Prerequisites:** set up (1)
> **Speakers:** - there (1)

#### [The .git folder](https://www.linkedin.com/learning/git-essential-training-25677984/the-git-folder?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/the-git-folder?u=76281980&t=0)** - [Instructor] [Git](../../Skills/Software%20Development/Git.md) seems to be living in the background so far. We are still using our usual file management platform, but you can still see an extra folder in the File Explorer, .git. You might have to make it visible, as it is a hidden folder by default. Let's take a look. You can make this folder visible in Visual Studio Code or in your codespace. To do that, first open the Command Palette by using Control + Shift + P if you're on [Windows](../../Glossary/Service/Windows.md) or Command + Shift + P on a Mac. Now type user settings. We got two options, and we open the second one, User Settings [JSON](../../Skills/Web%20Development/JSON.md). You can add your own specific settings here, and one of them that you could add is this one. To make it a little bit easier in this course, I have set something up for you. You can go to the folder .vscode and then settings.json. Here, you can find the same line, but it's commented out. If you select that and then press Ctrl + / on a Windows or Command + / on a Mac, you can now see the folder we were talking about on the left, so here's the git folder. Inside this folder, there are files that make your local folder a Git repository. These files store everything, history, [Metadata](../../Skills/Web%20Development/Metadata.md), and other important information. The most important one for you to know about is the config file that we talked about before. This holds the configuration details specific for this repository. There are other files in here
>
> **[1:32](https://www.linkedin.com/learning/git-essential-training-25677984/the-git-folder?u=76281980&t=92)** that store information about remote repository, about logs and branch details. While it is okay to look through these files, it's best not to modify anything. Changing these files could cause Git to stop functioning properly. If you delete this Git folder, your repository will no longer be a Git repository. It will just be a regular local folder again.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (7), [Windows](../../Glossary/Service/Windows.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (2), [Metadata](../../Skills/Web%20Development/Metadata.md) (1)
> **CLI Commands:** git (7), make (4), find (1)
> **UI Navigation:** open the (2), go to (1)
> **File Paths:** settings.json (1)
> **Env Vars:** json (1)
> **Cross-References:** we talked about (1)
> **Tools:** visual studio (1)
> **Definitions:** is a  (1)

#### [Create a branch  in your repository](https://www.linkedin.com/learning/git-essential-training-25677984/create-a-branch-in-your-repository?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/create-a-branch-in-your-repository?u=76281980&t=0)** - [Instructor] In Chapter one, we briefly talked about branches. A branch is like a second version of your code that you can work on separately. This is really useful if your code is running in production and you don't want to change it while developing new features. It's also helpful when multiple people are working on the same project at the same time. In fact, for a larger project, it is considered best practice to make all changes in branches. If you start out, branches can feel like a challenge. If you are having difficulty, I recommend to just start with using [Git](../../Skills/Software%20Development/Git.md) without using branches. But I do want to show you the concept so that you can get into it once you feel you're ready. In this video, we will see how it works. So, what actually happens when you create a branch? You start with your main code, often the production version, which is stored in your Git provider. When you create a branch, you're making a copy of that code. This can be done both in the Git provider or locally, meaning branches can exist in both places. Once you have a branch, you can start making changes within it while the main branch remains untouched. Let's see that in action. We are going to create a new branch from our local environment and then push it to the remote repository. In our code space, first we make sure that the working tree is clean by typing git status. There we go. We are going to create a new branch. To do this, we can use git branch, and then, the name of our new branch.
>
> **[1:35](https://www.linkedin.com/learning/git-essential-training-25677984/create-a-branch-in-your-repository?u=76281980&t=95)** Make the name something that describes what the branch is for, often a specific feature. We will use git branch logfolder. There we go. Now, we need to check out this branch so we can start working in this one instead of the main branch. We use git checkout logfolder. And now, we are in our new branch and we can start making changes. I have created a folder called logs and then, two log files. Now, let's add these changes to the staging area using git add . and we'll commit them with a commit message. With everything committed, it's time to push this to the remote repository. I'll clear my screen so that we get a clear overview and I'll use git push. Now, when we do that, we see that we get an error message. The cool thing is that the error message actually tells us what is wrong and what we can do about it. It tells us the branch only lives in our local environment and not in the remote one. And we can use git push --set-upstream to make sure that it also exists in the remote repository. So I can just copy this line, add it here, and now the command goes through. Now, if we move back to [GitHub](../../Skills/Software%20Development/GitHub.md), we see that logfolder has been pushed three seconds ago.
>
> **[3:11](https://www.linkedin.com/learning/git-essential-training-25677984/create-a-branch-in-your-repository?u=76281980&t=191)** So we can find out branch here. The other option we have is to look right here at the main branch in the log folder. This also helps us move back to the main branch and note that there's no log folder here. All the code here is untouched. In the next video, we can see how we can merge our branch to a pull request.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (10), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **CLI Commands:** git (10), make (4), find (1)
> **Cross-References:** in the next (1)
> **Tools:** github (1)
> **Best Practices:** best practice (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Create and merge a pull request](https://www.linkedin.com/learning/git-essential-training-25677984/create-and-merge-a-pull-request?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/create-and-merge-a-pull-request?u=76281980&t=0)** - [Instructor] In this video, we will see how we can create a pull request. A pull request is what we use when we want to merge two branches. Often this will be a branch where we created a feature and a main branch. Locally, you would just merge the branch without a pull request, but in larger projects, a pull request is the better way. This is where team members can review your code, give feedback, and approve the changes. Once the pull request is complete, your code get merged into the main branch. At that point, it's best practice to delete the old branch as you don't need it anymore. Keeping it could only cause confusion. Let's do it in our repository. In our repository on [GitHub](../../Skills/Software%20Development/GitHub.md), we go to Pull requests. Here we can create a new pull request or use the button if we have one to use. Let's select New pull request. I can now compare the changes between two branches. The base branch here is main and I want to compare logfolder. I can now see all the changes on this page. I can also see right next to where I selected logfolder that it is able to merge. This means that [Git](../../Skills/Software%20Development/Git.md) can automatically solve the differences and add the new changes to the old environment. I can view the changes right here and create a pull request. This is where I can define a title and the description of what I did. You can make sure this is all descriptive, as it can save you a lot of conversation later. As you can see, I added that it creates a folder for logs,
>
> **[1:36](https://www.linkedin.com/learning/git-essential-training-25677984/create-and-merge-a-pull-request?u=76281980&t=96)** and in the description I defined that this is just for demonstration. When we are done, we create the pull request by pressing the button. There we go. We can now ask someone to review the code, see if the quality is high enough, and if they don't spot mistakes. We can see the changes that have been made in this view, which is very helpful to get the big picture. We can find them by clicking here on the changed files. As it is just us here, we will accept the pull requests ourselves. Move back to conversation, and click on Merge pull request. If you want to, you can change the commit message, but I'll leave it as it is. Our pull request has now been successfully merged and closed. If we go back to the main branch, right here, we see that the logs folder has now been added, so the changes have been merged. Don't forget to delete the old branch, as you shouldn't be needing it anymore. We walk through these concepts like it's a breeze, but don't worry if it feels a bit overwhelming. If you're working on your own, you can get by without branches, but as soon as you start contributing to a public repository or you start working together with your coworkers or your friends, knowing how to use them becomes important.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Git](../../Skills/Software%20Development/Git.md) (1)
> **CLI Commands:** git (1), make (1), find (1)
> **UI Navigation:** go to (1), click on (1)
> **Best Practices:** best practice (1), don't forget (1)
> **Cross-References:** go back to (1)
> **Tools:** github (1)
> **Definitions:** means that (1)
> **Analogies:** picture (1)

#### [Git commit messages](https://www.linkedin.com/learning/git-essential-training-25677984/git-commit-messages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/git-commit-messages?u=76281980&t=0)** - [Instructor] Let's talk about commit messages. We've made quite a few commits by now and we've seen how useful they are for keeping track of changes. But the commit message itself is just as important. It tells us what actually happened in that commit. There are some best practices for writing commit messages that can make your [Git](../../Skills/Software%20Development/Git.md) history much clearer. First, a good commit message should describe exactly what changes were made. It should also be in the present tense. This might feel a little bit unnatural at first. You're probably used to saying, "I fixed something", but in a commit message it should be "fixes something". This way it is always clear that the commit reflects the change being made. The first line of a commit message should be no more than 50 characters. If that is not enough to fully describe the change, you can add a more detailed explanation underneath. Let's see what this looks like in practice. So if I go to my terminal and type git log oneline, I can see that those commit messages are pretty important. You could still wonder if, for example, "moves new name to first folder" is a good message. It's good to know what change was made, but it doesn't tell me why it happened. At the bottom, I can see "adds extra lines to demonstrate git diff", which is already a bit more helpful. For your own projects, these messages might not matter that much, but it is important to get into the habit of writing clear
>
> **[1:34](https://www.linkedin.com/learning/git-essential-training-25677984/git-commit-messages?u=76281980&t=94)** and meaningful commit messages. Now let me show you how you can create a multi-line commit message. I have a file called gitStatusDemo right here, and I am going to add a little bit of text right here. I'll press save and now I'm going to commit this. First, I'll add it to the staging area and I am ready to commit. So far we have been using git commit -m, and then a message. But what happens if we run git commit without -m? We see now that Git opens a text editor, the one that we set during installation. And the code space, it's Visual Studio Code itself. Here I can write a commit message across multiple lines. A good commit message starts with a short clear subject line. In this case, I might write, "Added LinkedInLearning to gitStatusDemo.md". Now, that's already pretty descriptive, but if I want to add more context, I can press enter twice and write a more detailed explanation below. For example, I could explain why I made this change. So in this example, I added that this commit doesn't have a real purpose, it's more about the commit message. I added some extra lines for readability. Especially with different text editors, this is always a good idea. Now, this is just a small example,
>
> **[3:07](https://www.linkedin.com/learning/git-essential-training-25677984/git-commit-messages?u=76281980&t=187)** but in a real project, this structure is really helpful. The subject line gives a quick summary while the body can provide extra details if needed. Once I close the editor, the commit is completed. If I check my history now with git log oneline, I'll only see the short subject line. But if I just run git log, I get the complete message including additional details. So it's a great habit to start practicing now. Writing clear, descriptive commit messages will make your Git history much easier to understand.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (9)
> **CLI Commands:** git (9), make (2)
> **Code Identifiers:** gitstatusdemo (2)
> **Tools:** terminal (1), visual studio (1)
> **Analogies:** for example (2)
> **File Paths:** gitstatusdemo.md (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)

#### [Solving a merge conflict](https://www.linkedin.com/learning/git-essential-training-25677984/solving-a-merge-conflict?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/solving-a-merge-conflict?u=76281980&t=0)** - [Instructor] We are going to talk about a common issue you might run into when using [Git](../../Skills/Software%20Development/Git.md), a merge conflict Merge conflicts usually happen when multiple people are working at the same file. If two people make changes to the same part of the file and then try to merge their work, Git doesn't know which version to keep. Let's go through a simple merge conflict and see how to resolve it. For this example, we first need to create a merge conflict. To do that, first, open up your local environment or your code space. Make sure you don't use Git pull. Now we're going to open up the remote repository in [GitHub](../../Skills/Software%20Development/GitHub.md). Click on the file gitStatusDemo.md. When it opens up, click the little pencil to edit the file. Add something to the first line. Commit the change and save it. Now let's move to the code space. We've opened gitStatusDemo.md and we're going to add a different change here. Save that and now I'm going to commit. Git commit -m and then our message.
>
> **[1:25](https://www.linkedin.com/learning/git-essential-training-25677984/solving-a-merge-conflict?u=76281980&t=85)** Now I will try to push it and what will happen is Git will reject it. And it will say that I cannot do that. I first need to pull something because something has changed in the remote repository. So I'll clear my screen so we get a good view and I'll use git pull. We now get a warning message and it tells us that the branches are divergent, so we need to specify what to do with them. We can do that by setting one of these configurations. I will not explain these configurations here as it is a bit out of scope for this course. We are going to use the top one as that is the default behavior. Now we use git pull again and we get an error telling there's a merge conflict that we need to fix. This happens because Git sees the same file has been changed in both my local and my remote repository. It doesn't know which version to keep, so it asks me to fix the conflict and then commit the changes. Now, if I open up the text editor, I can see exactly where the conflict is. I can see the current change, which is the change I just created, and I can see the incoming change, which is the one that I created in the remote repository. At this point, Git needs me to decide which version to keep. If you're using Visual Studio Code, you can see all the options right at the top. I can accept the current change,
>
> **[2:59](https://www.linkedin.com/learning/git-essential-training-25677984/solving-a-merge-conflict?u=76281980&t=179)** I can accept the incoming change, I can accept both, or I can compare the changes to have some extra review. In this case, this is a pretty simple conflict. I accept the current change so I can keep the version I created lost and override the remote one. After that, I can save this file, stage it again by using add, and commit it again.
>
> **[3:29](https://www.linkedin.com/learning/git-essential-training-25677984/solving-a-merge-conflict?u=76281980&t=209)** Now, when I type git push, the changes go through and a merge conflict has been resolved. If I now look at my remote repository and refresh, I can see that the change I made last has now been accepted here. Now, this was a very basic merge conflict. In real projects, they can be much more complicated, especially when you're dealing with lots of files and lots of conflicting changes. My advice is to take your time with each merge conflict. If you're stuck, check online, chances are someone has had the same issue as you and found a solution. And if you're completely lost and it's not a production repository, there's no shame in just starting fresh and recreating your local repository. It happens to everyone.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (10), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **CLI Commands:** git (10), make (2)
> **File Paths:** gitstatusdemo.md (2)
> **Code Identifiers:** gitstatusdemo (2)
> **Tools:** github (1), visual studio (1)
> **Definitions:** is a  (2)
> **UI Navigation:** click on (1)
> **Warnings:** warning (1)

#### [Challenge: Create a branch and a pull request](https://www.linkedin.com/learning/git-essential-training-25677984/challenge-create-a-branch-and-a-pull-request?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/challenge-create-a-branch-and-a-pull-request?u=76281980&t=0)** (bright techno music)
>
> **[0:05](https://www.linkedin.com/learning/git-essential-training-25677984/challenge-create-a-branch-and-a-pull-request?u=76281980&t=5)** - All right, time for a challenge. We've talked about branches in [Git](../../Skills/Software%20Development/Git.md), and now it's your turn to create one yourself. The goal, you're going to create a new branch, add a file, and then merge it back into the main branch with a pull request. Let's go. Open our repository and create a branch. In the branch, change the status.md file by adding your favorite joke. When you're done, commit and push the changes. After that, open [github.com](https://github.com) and create a pull request. Do a final review of the code and merge it into the main branch. Let's go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **File Paths:** status.md (1)
> **CLI Commands:** git (1)
> **URLs:** [github.com](https://github.com) (1)
> **Tools:** github (1)
> **Speakers:** - all (1)
> **Non-Speech:** (bright techno music) (1)

#### [Solution: Create a branch and a pull request](https://www.linkedin.com/learning/git-essential-training-25677984/solution-create-a-branch-and-a-pull-request?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/solution-create-a-branch-and-a-pull-request?u=76281980&t=0)** - [Instructor] So, how did the challenge go? Let's walk through it together. First, we created a branch, [Git](../../Skills/Software%20Development/Git.md) branch joke. Don't forget to check out the branch, checkout joke. We now create a new foul called joke.md and we write a funny joke in there. With that, we'll use git add . to add everything. And now we commit. I'll use git push. And now I get the command that I need to make sure that this branch also exists in the remote repository. I push again to check if it actually has worked, and we go back to our web interface to see that our branch has been created. We now create a pull request. We can do this straight from here, so let's do that. And in this screen, we see we are able to merge this. You can add the description yourself and then create the pull request. And here we can view what has actually changed. We check which files have been changed, and with this, we are able to go to the conversation and merge this pull request. Confirm, and now we are done. If you are having trouble somewhere in the middle, check back on the videos in this chapter
>
> **[1:32](https://www.linkedin.com/learning/git-essential-training-25677984/solution-create-a-branch-and-a-pull-request?u=76281980&t=92)** to get some extra help.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (3)
> **CLI Commands:** git (3), make (1)
> **File Paths:** joke.md (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/git-essential-training-25677984/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-essential-training-25677984/next-steps?u=76281980&t=0)** - Thank you for taking this course. I hope you're feeling confident about using [Git](../../Skills/Software%20Development/Git.md) and excited about all the possibilities it offers. What we covered here is just the beginning. There's so much more you can do with Git. Once you're comfortable with the basics, I encourage you to dive deeper into more advanced features. If you are ready to keep learning, check out the library for more Git courses, like Git for Teams, or what about Learning [GitHub](../../Skills/Software%20Development/GitHub.md)? So go ahead, have fun experimenting with Git and see how it can streamline your workflow. Happy coding!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (5), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **CLI Commands:** git (5)
> **Cross-References:** we covered (1)
> **Tools:** github (1)
> **Speakers:** - thank (1)


## Instructor

- [Barbara Forbes](../../Instructors/Web%20Development/Barbara%20Forbes.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/git-essential-training-5988161/codespaces)

## Skills Covered

- Git
- Version Control

## Path Context

### In [The Top 10 Most Popular Courses among Engineering Professionals](../../Paths/Data%20Science/Learning%20Paths/The%20Top%2010%20Most%20Popular%20Courses%20among%20Engineering%20Professionals.md)
← [Learning Kubernetes](../Data%20Science/Learning%20Kubernetes.md) | **8 of 10** | [SQL Essential Training](../Data%20Science/SQL%20Essential%20Training.md) →

### In [Become a Full-Stack Web Developer](../../Paths/Web%20Development/Learning%20Paths/Become%20a%20Full-Stack%20Web%20Developer.md)
← [Learning ECMAScript 6+ (ES6+)](Learning%20ECMAScript%206%2B%20(ES6%2B).md) | **6 of 12** | [React Essential Training](React%20Essential%20Training.md) →

## Appears In

- [The Top 10 Most Popular Courses among Engineering Professionals](../../Paths/Data%20Science/Learning%20Paths/The%20Top%2010%20Most%20Popular%20Courses%20among%20Engineering%20Professionals.md)
- [Become a Full-Stack Web Developer](../../Paths/Web%20Development/Learning%20Paths/Become%20a%20Full-Stack%20Web%20Developer.md)

## Related Courses

_Courses sharing skills:_

- [Learning Bitbucket](../DevOps/Learning%20Bitbucket.md) — Version Control
- [Git from Scratch](../Software%20Development/Git%20from%20Scratch.md) — Git
- [Learning Git and GitHub](../Software%20Development/Learning%20Git%20and%20GitHub.md) — Git

---

[↑ Back to top](#)