---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: git-from-scratch
url: "https://www.linkedin.com/learning/git-from-scratch"
duration_minutes: 19
duration: 19m
level: Beginner
updated: 6/30/2022
learners: 17143
skills:
  - Git
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHJIB3T2TdZuw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1656449177506?e=2147483647&amp;v=beta&amp;t=AF77prcO4rDExa0det58UJMAqgs1zwSr-I-JDkyekME"
linkedin_topic: Software Development
learning_paths:
  - '[[The Top Skills Engineering Professionals Have Right Now]]'
prev_courses:
  - '[[SOLIDWORKS 2022 Essential Training]]'
next_courses:
  - '[[Cutting-Edge CSS]]'
path_nav: '[{"path":"The Top Skills Engineering Professionals Have Right Now","position":5,"total":9,"prev":"SOLIDWORKS 2022 Essential Training","next":"Cutting-Edge CSS"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/git
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Git%20from%20Scratch.md)

![Git from Scratch](https://media.licdn.com/dms/image/v2/C4E0DAQHJIB3T2TdZuw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1656449177506?e=2147483647&amp;v=beta&amp;t=AF77prcO4rDExa0det58UJMAqgs1zwSr-I-JDkyekME)

# Git from Scratch

> Version control—the practice of tracking and managing changes to software code—is one of the most powerful tools a developer can wield. And Git has become the version control system of choice for the modern web. The concepts of Git are not hard to understand, especially for developers, but Git has a language of its own. What is rebasing? What is a detached head? In this beginner-level course, Mort

> [LinkedIn Learning](https://www.linkedin.com/learning/git-from-scratch) | 19m | Beginner | 17K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (1 videos)
- **[[#1. Git Basics]]** (6 videos)
- **[[#2. Branches: Alternate Timelines]]** (6 videos)
- **[[#3. Changing History]]** (4 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Git from Scratch
> [LinkedIn Learning](https://www.linkedin.com/learning/git-from-scratch/git-from-scratch?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-from-scratch/git-from-scratch?u=76281980&t=0)** - [Morten Rand-Hendriksen] Imagine if science fiction was real, that we could travel to alternate timelines or travel back in time to change something, or even bring something from the past back to the present.
>
> **[0:10](https://www.linkedin.com/learning/git-from-scratch/git-from-scratch?u=76281980&t=10)** But what am I saying?
>
> **[0:11](https://www.linkedin.com/learning/git-from-scratch/git-from-scratch?u=76281980&t=11)** We don't need to imagine any of that.
>
> **[0:12](https://www.linkedin.com/learning/git-from-scratch/git-from-scratch?u=76281980&t=12)** Science fiction is real and we have alternate timelines, and time travel, and much more already, at least when it comes to code.
>
> **[0:20](https://www.linkedin.com/learning/git-from-scratch/git-from-scratch?u=76281980&t=20)** Thanks to Git and version control.
>
> **[0:23](https://www.linkedin.com/learning/git-from-scratch/git-from-scratch?u=76281980&t=23)** I want to teach you Git from scratch, not in the way it's normally taught with command line interfaces and code examples, but with a language and a format I've found helps me make way more sense of what's going on.
>
> **[0:34](https://www.linkedin.com/learning/git-from-scratch/git-from-scratch?u=76281980&t=34)** Science fiction and building blocks.
>
> **[0:37](https://www.linkedin.com/learning/git-from-scratch/git-from-scratch?u=76281980&t=37)** Version control is one of the most powerful tools you can wield as a developer.
>
> **[0:41](https://www.linkedin.com/learning/git-from-scratch/git-from-scratch?u=76281980&t=41)** And Git has become the version control system for the modern web and the modern world.
>
> **[0:46](https://www.linkedin.com/learning/git-from-scratch/git-from-scratch?u=76281980&t=46)** Understanding how it works and realizing it's really all science fiction made real, gives you the power to do impossible things and I'm here to help get you started.
>
> **[0:55](https://www.linkedin.com/learning/git-from-scratch/git-from-scratch?u=76281980&t=55)** So let's get cracking.

> [!info]- Semantic Content
>
> **CLI Commands:** git (3), make (1)
> **Analogies:** imagine (2)
> **Code Keywords:** let (1)
> **Tools:** command line (1)
> **Speakers:** - [morten (1)


### 1. Git Basics

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Why use version control?
> [LinkedIn Learning](https://www.linkedin.com/learning/git-from-scratch/why-use-version-control?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-from-scratch/why-use-version-control?u=76281980&t=0)** - [Narrator] Why use version control?
>
> **[0:01](https://www.linkedin.com/learning/git-from-scratch/why-use-version-control?u=76281980&t=1)** It's an important question to answer and it's worth asking because on the face of it, version control looks like adding some very complicated stuff on top of already complicated coding work.
>
> **[0:11](https://www.linkedin.com/learning/git-from-scratch/why-use-version-control?u=76281980&t=11)** Here's my answer.
>
> **[0:12](https://www.linkedin.com/learning/git-from-scratch/why-use-version-control?u=76281980&t=12)** Version control is a way of adding all the coolest and most outlandish tools and features of science fiction into our coding and development process.
>
> **[0:21](https://www.linkedin.com/learning/git-from-scratch/why-use-version-control?u=76281980&t=21)** Say what now?
>
> **[0:22](https://www.linkedin.com/learning/git-from-scratch/why-use-version-control?u=76281980&t=22)** Let me explain.
>
> **[0:23](https://www.linkedin.com/learning/git-from-scratch/why-use-version-control?u=76281980&t=23)** You're working on a project and you want to add a feature, but adding that feature means making huge changes to your code and you're not sure if it'll work or not.
>
> **[0:32](https://www.linkedin.com/learning/git-from-scratch/why-use-version-control?u=76281980&t=32)** So you make a copy of your code and start making changes to that copy.
>
> **[0:36](https://www.linkedin.com/learning/git-from-scratch/why-use-version-control?u=76281980&t=36)** Then you realize you need to add a feature to your feature, which, again, requires huge changes, so you make another copy of your copy.
>
> **[0:44](https://www.linkedin.com/learning/git-from-scratch/why-use-version-control?u=76281980&t=44)** This gets confusing very quickly.
>
> **[0:46](https://www.linkedin.com/learning/git-from-scratch/why-use-version-control?u=76281980&t=46)** Then, after working on your code for hours, building out functions, adding features, tweaking outputs, you realize you made a mistake somewhere and that mistake now impacts everything you did after that point and is present in all your different copies.
>
> **[1:00](https://www.linkedin.com/learning/git-from-scratch/why-use-version-control?u=76281980&t=60)** If only you could go back in time, fix that mistake, and then just keep working.
>
> **[1:06](https://www.linkedin.com/learning/git-from-scratch/why-use-version-control?u=76281980&t=66)** With version control, you can.
>
> **[1:08](https://www.linkedin.com/learning/git-from-scratch/why-use-version-control?u=76281980&t=68)** As you build out your project, you use a version control system like Git to take snapshots of your work that you can return to at any time.
>
> **[1:16](https://www.linkedin.com/learning/git-from-scratch/why-use-version-control?u=76281980&t=76)** You can also make branches, effectively, alternate timelines of your work to add features or experiments, and then switch between those timelines as you work.
>
> **[1:25](https://www.linkedin.com/learning/git-from-scratch/why-use-version-control?u=76281980&t=85)** If a feature in one branch is successful, you can merge it to the code in another branch.
>
> **[1:30](https://www.linkedin.com/learning/git-from-scratch/why-use-version-control?u=76281980&t=90)** Or if it's not successful, simply discard it and move forward as if nothing happened.
>
> **[1:35](https://www.linkedin.com/learning/git-from-scratch/why-use-version-control?u=76281980&t=95)** With version control, time travel, alternate timelines, rewriting history, all these cool science fiction ideas become reality.
>
> **[1:42](https://www.linkedin.com/learning/git-from-scratch/why-use-version-control?u=76281980&t=102)** And all these cool science fiction ideas help you be more efficient at building, debugging, and deploying code.
>
> **[1:48](https://www.linkedin.com/learning/git-from-scratch/why-use-version-control?u=76281980&t=108)** So why use version control?
>
> **[1:49](https://www.linkedin.com/learning/git-from-scratch/why-use-version-control?u=76281980&t=109)** Because it gives your coding practice sci-fi powers.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), git (1)
> **Code Keywords:** let (1), switch (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### git init: Initialize a repository
> [LinkedIn Learning](https://www.linkedin.com/learning/git-from-scratch/git-init-initialize-a-repository?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-from-scratch/git-init-initialize-a-repository?u=76281980&t=0)** - [Instructor] To add Git as the version control of your project, you need to initialize a new Git repository and outermost folder, so the working directory of your project.
>
> **[0:07](https://www.linkedin.com/learning/git-from-scratch/git-init-initialize-a-repository?u=76281980&t=7)** This is done using the git init command.
>
> **[0:10](https://www.linkedin.com/learning/git-from-scratch/git-init-initialize-a-repository?u=76281980&t=10)** All files within that folder and its subfolders automatically become part of the repository.
>
> **[0:15](https://www.linkedin.com/learning/git-from-scratch/git-init-initialize-a-repository?u=76281980&t=15)** Creating a Git repository is very much like adding an omnipotent passive observer of all things to your project.
>
> **[0:21](https://www.linkedin.com/learning/git-from-scratch/git-init-initialize-a-repository?u=76281980&t=21)** Git sits there and watches, and takes note of even the most minute changes, like one single character in a file in a repository of hundreds of files.
>
> **[0:29](https://www.linkedin.com/learning/git-from-scratch/git-init-initialize-a-repository?u=76281980&t=29)** And will let you know where those changes have taken place in case you forget.
>
> **[0:33](https://www.linkedin.com/learning/git-from-scratch/git-init-initialize-a-repository?u=76281980&t=33)** Once Git is initialized, it will monitor for any changes made inside the working directory, and keep track of the history of what happens from now on.
>
> **[0:41](https://www.linkedin.com/learning/git-from-scratch/git-init-initialize-a-repository?u=76281980&t=41)** It does this by creating a historical timeline for your project called a branch and gives the first branch the name main.
>
> **[0:48](https://www.linkedin.com/learning/git-from-scratch/git-init-initialize-a-repository?u=76281980&t=48)** So when people say they are on the main branch or working on main, it means they are in the main historical timeline of the project.
>
> **[0:56](https://www.linkedin.com/learning/git-from-scratch/git-init-initialize-a-repository?u=76281980&t=56)** The Git repository, often referred to by the shorthand repo, is a virtual representation of your project, including its history and branches, a ledger if you will from which you can look up and retrieve the entire history of the project.
>
> **[1:09](https://www.linkedin.com/learning/git-from-scratch/git-init-initialize-a-repository?u=76281980&t=69)** You work on your working directory.
>
> **[1:11](https://www.linkedin.com/learning/git-from-scratch/git-init-initialize-a-repository?u=76281980&t=71)** The Git repository keeps track of and remembers your work.

> [!info]- Semantic Content
>
> **CLI Commands:** git (8)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### .gitignore: Ignore files
> [LinkedIn Learning](https://www.linkedin.com/learning/git-from-scratch/gitignore-ignore-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-from-scratch/gitignore-ignore-files?u=76281980&t=0)** - [Educator] Having git observe and keep track of everything in your project is useful.
>
> **[0:03](https://www.linkedin.com/learning/git-from-scratch/gitignore-ignore-files?u=76281980&t=3)** But in most projects you'll have files and folders you don't need to, or want to keep track of.
>
> **[0:09](https://www.linkedin.com/learning/git-from-scratch/gitignore-ignore-files?u=76281980&t=9)** Things like system files or local project settings or dependency libraries, et cetera.
>
> **[0:14](https://www.linkedin.com/learning/git-from-scratch/gitignore-ignore-files?u=76281980&t=14)** You can exclude any file or folder from your git repository by adding them to the dot gitignore file.
>
> **[0:20](https://www.linkedin.com/learning/git-from-scratch/gitignore-ignore-files?u=76281980&t=20)** Yes, the file name is punctuation mark, gitignore.
>
> **[0:24](https://www.linkedin.com/learning/git-from-scratch/gitignore-ignore-files?u=76281980&t=24)** The punctuation goes first and yes, that's weird but that's how it works.
>
> **[0:29](https://www.linkedin.com/learning/git-from-scratch/gitignore-ignore-files?u=76281980&t=29)** In the gitignore file, make a list of file names, folder names and other items you don't want git to track and git will simply ignore them. Thus the name gitignore.
>
> **[0:39](https://www.linkedin.com/learning/git-from-scratch/gitignore-ignore-files?u=76281980&t=39)** Want to start monitoring a file you previously ignored?
>
> **[0:42](https://www.linkedin.com/learning/git-from-scratch/gitignore-ignore-files?u=76281980&t=42)** Simply remove the mention of the file inside the gitignore file and git will start tracking it again. Easy as that.

> [!info]- Semantic Content
>
> **CLI Commands:** git (5), make (1)
> **Speakers:** - [educator] (1)

#### git add: Add changes
> [LinkedIn Learning](https://www.linkedin.com/learning/git-from-scratch/git-add-add-changes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-from-scratch/git-add-add-changes?u=76281980&t=0)** - [Narrator] The interesting thing about Git as an omnipotent passive observer of all things is it's very much passive.
>
> **[0:06](https://www.linkedin.com/learning/git-from-scratch/git-add-add-changes?u=76281980&t=6)** Until you tell it what you want it to remember, it'll just passively observe the changes that are happening in the project folder but do nothing.
>
> **[0:12](https://www.linkedin.com/learning/git-from-scratch/git-add-add-changes?u=76281980&t=12)** When you make a change to your project that you want Git to commit to the history of the project, to take a snapshot of so you can go back to it and review later, your own personal save point, if you will, you first need to place the changes in the staging area.
>
> **[0:25](https://www.linkedin.com/learning/git-from-scratch/git-add-add-changes?u=76281980&t=25)** This is done using the git add command.
>
> **[0:28](https://www.linkedin.com/learning/git-from-scratch/git-add-add-changes?u=76281980&t=28)** You can specify which files you want to add by naming them or you can add all of them with dash A.
>
> **[0:34](https://www.linkedin.com/learning/git-from-scratch/git-add-add-changes?u=76281980&t=34)** By doing this you're telling Git, I've made some changes and I want you to remember these ones in particular so I can recall them later if I want to.
>
> **[0:41](https://www.linkedin.com/learning/git-from-scratch/git-add-add-changes?u=76281980&t=41)** This is important because you can pick and choose which changes you want to go into the staging area and these are the changes that will eventually be committed to history.
>
> **[0:49](https://www.linkedin.com/learning/git-from-scratch/git-add-add-changes?u=76281980&t=49)** It's not an all-or-nothing situation.
>
> **[0:52](https://www.linkedin.com/learning/git-from-scratch/git-add-add-changes?u=76281980&t=52)** It is entirely controlled by you.

> [!info]- Semantic Content
>
> **CLI Commands:** git (4), make (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [narrator] (1)

#### git commit: Commit changes to memory
> [LinkedIn Learning](https://www.linkedin.com/learning/git-from-scratch/git-commit-commit-changes-to-memory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-from-scratch/git-commit-commit-changes-to-memory?u=76281980&t=0)** - [Speaker] The power of Git becomes apparent when you start committing changes to the history of the project.
>
> **[0:04](https://www.linkedin.com/learning/git-from-scratch/git-commit-commit-changes-to-memory?u=76281980&t=4)** This is done using the git commit command.
>
> **[0:07](https://www.linkedin.com/learning/git-from-scratch/git-commit-commit-changes-to-memory?u=76281980&t=7)** When you run git commit, you tell Git, add the changes in the staging area to the history of this project so they can be referenced or recalled later.
>
> **[0:14](https://www.linkedin.com/learning/git-from-scratch/git-commit-commit-changes-to-memory?u=76281980&t=14)** You also add a commit message using -m to explain what changes were made.
>
> **[0:18](https://www.linkedin.com/learning/git-from-scratch/git-commit-commit-changes-to-memory?u=76281980&t=18)** So when you look back on the project history, you can see that, all right, this is where I added that new feature.
>
> **[0:24](https://www.linkedin.com/learning/git-from-scratch/git-commit-commit-changes-to-memory?u=76281980&t=24)** Git commit creates a snapshot, a picture of the current state of your project at this particular moment in time, and adds it to the branch you're currently working on.
>
> **[0:32](https://www.linkedin.com/learning/git-from-scratch/git-commit-commit-changes-to-memory?u=76281980&t=32)** As you work on your project and commit more snapshots, the branch grows and forms a timeline of events.
>
> **[0:37](https://www.linkedin.com/learning/git-from-scratch/git-commit-commit-changes-to-memory?u=76281980&t=37)** This means you can now look back on any commit in the branch and see what your code looked like at that time.
>
> **[0:43](https://www.linkedin.com/learning/git-from-scratch/git-commit-commit-changes-to-memory?u=76281980&t=43)** And you can compare any stage of your code with any other stage of your code to find bugs, retrieve code you deleted, or do things that would otherwise be impossible, like restore the project to a previous state, or build a new timeline from any state, or even rewrite history.
>
> **[0:58](https://www.linkedin.com/learning/git-from-scratch/git-commit-commit-changes-to-memory?u=76281980&t=58)** So how often should you add these commits?
>
> **[1:01](https://www.linkedin.com/learning/git-from-scratch/git-commit-commit-changes-to-memory?u=76281980&t=61)** My rule of thumb is to air on the side of too often.
>
> **[1:04](https://www.linkedin.com/learning/git-from-scratch/git-commit-commit-changes-to-memory?u=76281980&t=64)** It's better to have a Git repository with way too many commits than one with not enough commits.

> [!info]- Semantic Content
>
> **CLI Commands:** git (6), find (1)
> **Analogies:** picture (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [speaker] (1)

#### git status: Get the current status
> [LinkedIn Learning](https://www.linkedin.com/learning/git-from-scratch/git-status-get-the-current-status?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-from-scratch/git-status-get-the-current-status?u=76281980&t=0)** - [Narrator] At any point, if you're wondering what you've changed in your project since the last committed snapshot, you can ask for the git status.
>
> **[0:06](https://www.linkedin.com/learning/git-from-scratch/git-status-get-the-current-status?u=76281980&t=6)** git, the omnipotent passive observer of all things will list out each changed file and the current status of each file for you.
>
> **[0:14](https://www.linkedin.com/learning/git-from-scratch/git-status-get-the-current-status?u=76281980&t=14)** That status will be either changed, but not staged.
>
> **[0:17](https://www.linkedin.com/learning/git-from-scratch/git-status-get-the-current-status?u=76281980&t=17)** Or added to staging and ready to be committed to history.
>
> **[0:20](https://www.linkedin.com/learning/git-from-scratch/git-status-get-the-current-status?u=76281980&t=20)** Running git status is asking time to stop temporarily so you can get a freeze frame of what is happening, the literal status within your project at any time.

> [!info]- Semantic Content
>
> **CLI Commands:** git (3)
> **Speakers:** - [narrator] (1)


### 2. Branches: Alternate Timelines

> [[#Table of Contents|↑ Back to Table of Contents]]

#### git branch: Create an alternate timeline
> [LinkedIn Learning](https://www.linkedin.com/learning/git-from-scratch/git-branch-create-an-alternate-timeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-from-scratch/git-branch-create-an-alternate-timeline?u=76281980&t=0)** - [Instructor] The science fiction part of version control with Git is unleashed when you start working with branches.
>
> **[0:04](https://www.linkedin.com/learning/git-from-scratch/git-branch-create-an-alternate-timeline?u=76281980&t=4)** Or, as I like to think of them, alternate timelines.
>
> **[0:08](https://www.linkedin.com/learning/git-from-scratch/git-branch-create-an-alternate-timeline?u=76281980&t=8)** As you develop a project, you'll often find yourself at a place where you want to add a new feature, but doing so may require changing the existing code in a way that will be difficult to undo later.
>
> **[0:17](https://www.linkedin.com/learning/git-from-scratch/git-branch-create-an-alternate-timeline?u=76281980&t=17)** Or, maybe, you just want to experiment and be able to throw away your work if the experiment fails.
>
> **[0:23](https://www.linkedin.com/learning/git-from-scratch/git-branch-create-an-alternate-timeline?u=76281980&t=23)** When this happens, you can use Git to create an alternate timeline, called a branch, to work in.
>
> **[0:28](https://www.linkedin.com/learning/git-from-scratch/git-branch-create-an-alternate-timeline?u=76281980&t=28)** This new branch has its own name and exists in parallel to the main branch and any other branches in your project.
>
> **[0:34](https://www.linkedin.com/learning/git-from-scratch/git-branch-create-an-alternate-timeline?u=76281980&t=34)** Now, as you develop, you can travel between branches and develop different versions of your code in parallel.
>
> **[0:40](https://www.linkedin.com/learning/git-from-scratch/git-branch-create-an-alternate-timeline?u=76281980&t=40)** This way, you can have a stable code base in the main branch, while you develop an experimental feature in a separate branch.
>
> **[0:45](https://www.linkedin.com/learning/git-from-scratch/git-branch-create-an-alternate-timeline?u=76281980&t=45)** And as you switch from one branch to another, the code you're working with automatically resets to the last commit in whatever branch you're on.
>
> **[0:52](https://www.linkedin.com/learning/git-from-scratch/git-branch-create-an-alternate-timeline?u=76281980&t=52)** And there's more.
>
> **[0:54](https://www.linkedin.com/learning/git-from-scratch/git-branch-create-an-alternate-timeline?u=76281980&t=54)** If you're working on a team, different team members can work on their own branches, effectively creating a whole universe of alternate timelines for your project.
>
> **[1:02](https://www.linkedin.com/learning/git-from-scratch/git-branch-create-an-alternate-timeline?u=76281980&t=62)** And then, as features are finalized, they can be merged back into the main branch seamlessly.

> [!info]- Semantic Content
>
> **CLI Commands:** git (2), find (1)
> **Code Keywords:** require (1), throw (1), switch (1)
> **Speakers:** - [instructor] (1)

#### HEAD: An introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/git-from-scratch/head-an-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-from-scratch/head-an-introduction?u=76281980&t=0)** - [Instructor] Now we come to an important question.
>
> **[0:02](https://www.linkedin.com/learning/git-from-scratch/head-an-introduction?u=76281980&t=2)** How does Git know where in this historical tree of time I am, and how do I know where I am?
>
> **[0:08](https://www.linkedin.com/learning/git-from-scratch/head-an-introduction?u=76281980&t=8)** The answer is you are always working at the top of the current active branch where the head pointer is pointing.
>
> **[0:14](https://www.linkedin.com/learning/git-from-scratch/head-an-introduction?u=76281980&t=14)** The name head literally means head of branch.
>
> **[0:17](https://www.linkedin.com/learning/git-from-scratch/head-an-introduction?u=76281980&t=17)** If you're working in a new repository with a single main branch and you're just adding new commits, head will always point at the latest commit on the main branch.
>
> **[0:25](https://www.linkedin.com/learning/git-from-scratch/head-an-introduction?u=76281980&t=25)** So that's where you are.
>
> **[0:26](https://www.linkedin.com/learning/git-from-scratch/head-an-introduction?u=76281980&t=26)** If, on the other hands, you're working in a repository with several branches, so several alternate timelines, head will point at the latest commit of whatever branch you're currently working in.
>
> **[0:35](https://www.linkedin.com/learning/git-from-scratch/head-an-introduction?u=76281980&t=35)** So in all seriousness, head is really your time machine.
>
> **[0:39](https://www.linkedin.com/learning/git-from-scratch/head-an-introduction?u=76281980&t=39)** Point head at the timeline and moment in time you want to work in, and that's where you are.

> [!info]- Semantic Content
>
> **CLI Commands:** git (1)
> **Code Keywords:** if, (1)
> **Speakers:** - [instructor] (1)

#### git switch: Go to an alternate timeline
> [LinkedIn Learning](https://www.linkedin.com/learning/git-from-scratch/git-switch-go-to-an-alternate-timeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-from-scratch/git-switch-go-to-an-alternate-timeline?u=76281980&t=0)** - [Instructor] As your project grows and you have different branches, you need to be able to switch between branches.
>
> **[0:05](https://www.linkedin.com/learning/git-from-scratch/git-switch-go-to-an-alternate-timeline?u=76281980&t=5)** This can be done using the switch command.
>
> **[0:07](https://www.linkedin.com/learning/git-from-scratch/git-switch-go-to-an-alternate-timeline?u=76281980&t=7)** At any time, you can pass the command, git switch, with the name of the branch you want to switch to and head switches from your current branch to the one you named.
>
> **[0:15](https://www.linkedin.com/learning/git-from-scratch/git-switch-go-to-an-alternate-timeline?u=76281980&t=15)** You're traveling from one timeline to another.
>
> **[0:18](https://www.linkedin.com/learning/git-from-scratch/git-switch-go-to-an-alternate-timeline?u=76281980&t=18)** If you made changes to your code before switching git will try to bring those changes to the branch you're switching to.
>
> **[0:24](https://www.linkedin.com/learning/git-from-scratch/git-switch-go-to-an-alternate-timeline?u=76281980&t=24)** However, if those changes conflict with something on the branch you're switching to, a conflict will occur and the switch will be aborted.
>
> **[0:31](https://www.linkedin.com/learning/git-from-scratch/git-switch-go-to-an-alternate-timeline?u=76281980&t=31)** To resolve this problem without losing your changes, go back to the original branch, add and commit your most recent changes, and then perform the switch.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (6), pass (1)
> **CLI Commands:** git (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** switch to (1)
> **Speakers:** - [instructor] (1)

#### git checkout: Go to an alternate timeline
> [LinkedIn Learning](https://www.linkedin.com/learning/git-from-scratch/git-checkout-go-to-an-alternate-timeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-from-scratch/git-checkout-go-to-an-alternate-timeline?u=76281980&t=0)** - [Instructor] To switch between branches, you can also use the git checkout command.
>
> **[0:03](https://www.linkedin.com/learning/git-from-scratch/git-checkout-go-to-an-alternate-timeline?u=76281980&t=3)** It works exactly the same way as git switch does for this operation.
>
> **[0:07](https://www.linkedin.com/learning/git-from-scratch/git-checkout-go-to-an-alternate-timeline?u=76281980&t=7)** Pass git checkout with the name of the branch you want to switch to, and head is moved to the top of that branch.
>
> **[0:13](https://www.linkedin.com/learning/git-from-scratch/git-checkout-go-to-an-alternate-timeline?u=76281980&t=13)** But checkout can do more than just switch to a different timeline.
>
> **[0:17](https://www.linkedin.com/learning/git-from-scratch/git-checkout-go-to-an-alternate-timeline?u=76281980&t=17)** You can also use git checkout to go to any commit point on any timeline.
>
> **[0:21](https://www.linkedin.com/learning/git-from-scratch/git-checkout-go-to-an-alternate-timeline?u=76281980&t=21)** Meaning, you can travel back in time and work on code from the past.
>
> **[0:25](https://www.linkedin.com/learning/git-from-scratch/git-checkout-go-to-an-alternate-timeline?u=76281980&t=25)** To do this, use git checkout and name the commit ID an automatically generated random hash of letters and numbers identifying each commit and head will point at that moment in time and let you work on the code as it was back then.
>
> **[0:39](https://www.linkedin.com/learning/git-from-scratch/git-checkout-go-to-an-alternate-timeline?u=76281980&t=39)** To get that ID for your previous commits, run git log dash dash one line.
>
> **[0:45](https://www.linkedin.com/learning/git-from-scratch/git-checkout-go-to-an-alternate-timeline?u=76281980&t=45)** Switch is a relatively new command.
>
> **[0:47](https://www.linkedin.com/learning/git-from-scratch/git-checkout-go-to-an-alternate-timeline?u=76281980&t=47)** So when you read documentation or tutorials, you're likely to see checkout used more often.
>
> **[0:52](https://www.linkedin.com/learning/git-from-scratch/git-checkout-go-to-an-alternate-timeline?u=76281980&t=52)** In the case of branch switching, they are interchangeable.
>
> **[0:55](https://www.linkedin.com/learning/git-from-scratch/git-checkout-go-to-an-alternate-timeline?u=76281980&t=55)** You can use either.
>
> **[0:56](https://www.linkedin.com/learning/git-from-scratch/git-checkout-go-to-an-alternate-timeline?u=76281980&t=56)** It makes no difference.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (5), pass (1), this, (1), let (1)
> **CLI Commands:** git (6)
> **UI Navigation:** switch to (1), go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### DETACHED HEAD: An explanation
> [LinkedIn Learning](https://www.linkedin.com/learning/git-from-scratch/detached-head-an-explanation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-from-scratch/detached-head-an-explanation?u=76281980&t=0)** - [Instructor] If you do this, check out a commit in the middle of a branch.
>
> **[0:03](https://www.linkedin.com/learning/git-from-scratch/detached-head-an-explanation?u=76281980&t=3)** You create a bit of a timeline crisis.
>
> **[0:06](https://www.linkedin.com/learning/git-from-scratch/detached-head-an-explanation?u=76281980&t=6)** You're actively trying to alter history and git does not want you to do that because just like in science fiction, if you changed the past, you could change the future which in our case means breaking the coherency of the version control branch.
>
> **[0:17](https://www.linkedin.com/learning/git-from-scratch/detached-head-an-explanation?u=76281980&t=17)** To prevent you from accidentally breaking time and altering history, when you check out a previous commit on any branch, you get this warning - 'Detached Head', which sounds rather ominous.
>
> **[0:28](https://www.linkedin.com/learning/git-from-scratch/detached-head-an-explanation?u=76281980&t=28)** I want to say this is just an example of programmers being a bit too dramatic but the warning detached head actually makes sense because it's an accurate description of what's happening.
>
> **[0:37](https://www.linkedin.com/learning/git-from-scratch/detached-head-an-explanation?u=76281980&t=37)** Git literally detaches head from the branch and puts it to the side.
>
> **[0:42](https://www.linkedin.com/learning/git-from-scratch/detached-head-an-explanation?u=76281980&t=42)** So now you're working out of time in a liminal space not attached to any timeline, which again sounds rather ominous, but is in reality absolutely fine.
>
> **[0:51](https://www.linkedin.com/learning/git-from-scratch/detached-head-an-explanation?u=76281980&t=51)** All you have to do to keep working on this code from the past is to reattach it to the timeline.
>
> **[0:57](https://www.linkedin.com/learning/git-from-scratch/detached-head-an-explanation?u=76281980&t=57)** To do that, use git branch to create a new branch and the detached head is automatically attached to this new branch.
>
> **[1:04](https://www.linkedin.com/learning/git-from-scratch/detached-head-an-explanation?u=76281980&t=64)** Now, instead of breaking history, you've created a new alternate timeline starting in the past where you can safely keep working.
>
> **[1:11](https://www.linkedin.com/learning/git-from-scratch/detached-head-an-explanation?u=76281980&t=71)** See, I told you. This is a science fiction.

> [!info]- Semantic Content
>
> **CLI Commands:** git (3)
> **Warnings:** warning (2)
> **Code Keywords:** this, (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### The difference between switch and checkout
> [LinkedIn Learning](https://www.linkedin.com/learning/git-from-scratch/the-difference-between-switch-and-checkout?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-from-scratch/the-difference-between-switch-and-checkout?u=76281980&t=0)** - [Instructor] Okay, there's an obvious question that needs to be answered here.
>
> **[0:03](https://www.linkedin.com/learning/git-from-scratch/the-difference-between-switch-and-checkout?u=76281980&t=3)** Why do we have two commands, git switch and git checkout, which do pretty much the same thing?
>
> **[0:09](https://www.linkedin.com/learning/git-from-scratch/the-difference-between-switch-and-checkout?u=76281980&t=9)** The answer is separation of concerns.
>
> **[0:12](https://www.linkedin.com/learning/git-from-scratch/the-difference-between-switch-and-checkout?u=76281980&t=12)** The git checkout command can do several different things, and its functionality has expanded over the years.
>
> **[0:18](https://www.linkedin.com/learning/git-from-scratch/the-difference-between-switch-and-checkout?u=76281980&t=18)** As a result, git checkout has several different meanings and uses, which can sometimes get confusing because there is no clear separation of concerns.
>
> **[0:26](https://www.linkedin.com/learning/git-from-scratch/the-difference-between-switch-and-checkout?u=76281980&t=26)** Here's an example.
>
> **[0:27](https://www.linkedin.com/learning/git-from-scratch/the-difference-between-switch-and-checkout?u=76281980&t=27)** In my project, I've made a change since the last commit, but I haven't staged that change yet.
>
> **[0:33](https://www.linkedin.com/learning/git-from-scratch/the-difference-between-switch-and-checkout?u=76281980&t=33)** Then I realized I don't actually want this change.
>
> **[0:36](https://www.linkedin.com/learning/git-from-scratch/the-difference-between-switch-and-checkout?u=76281980&t=36)** I want to restore the file to where it was when I made the last commit.
>
> **[0:40](https://www.linkedin.com/learning/git-from-scratch/the-difference-between-switch-and-checkout?u=76281980&t=40)** As long as I haven't staged my changes, I can do this using git checkout by targeting the file in question.
>
> **[0:45](https://www.linkedin.com/learning/git-from-scratch/the-difference-between-switch-and-checkout?u=76281980&t=45)** So if this file is called main.js, I can say, git checkout main.js.
>
> **[0:49](https://www.linkedin.com/learning/git-from-scratch/the-difference-between-switch-and-checkout?u=76281980&t=49)** And the file is reverted to the last commit, which makes sense.
>
> **[0:53](https://www.linkedin.com/learning/git-from-scratch/the-difference-between-switch-and-checkout?u=76281980&t=53)** I'm checking out the file from the most recent commit.
>
> **[0:56](https://www.linkedin.com/learning/git-from-scratch/the-difference-between-switch-and-checkout?u=76281980&t=56)** But this is very different from moving from the top of one branch to another.
>
> **[1:02](https://www.linkedin.com/learning/git-from-scratch/the-difference-between-switch-and-checkout?u=76281980&t=62)** Git switch and git restore were introduced to separate these two operations.
>
> **[1:07](https://www.linkedin.com/learning/git-from-scratch/the-difference-between-switch-and-checkout?u=76281980&t=67)** Git switch switches between branches.
>
> **[1:09](https://www.linkedin.com/learning/git-from-scratch/the-difference-between-switch-and-checkout?u=76281980&t=69)** Git restore restores the specified file to the last committed state.
>
> **[1:14](https://www.linkedin.com/learning/git-from-scratch/the-difference-between-switch-and-checkout?u=76281980&t=74)** If you try to use git switch to restore a file, it simply won't work.
>
> **[1:18](https://www.linkedin.com/learning/git-from-scratch/the-difference-between-switch-and-checkout?u=76281980&t=78)** That's not what it's for.
>
> **[1:20](https://www.linkedin.com/learning/git-from-scratch/the-difference-between-switch-and-checkout?u=76281980&t=80)** Like I said, this is about separation of concerns.
>
> **[1:23](https://www.linkedin.com/learning/git-from-scratch/the-difference-between-switch-and-checkout?u=76281980&t=83)** Git switch and git restore have clearly defined purposes.
>
> **[1:27](https://www.linkedin.com/learning/git-from-scratch/the-difference-between-switch-and-checkout?u=76281980&t=87)** Git checkout is a catchall for many things.
>
> **[1:30](https://www.linkedin.com/learning/git-from-scratch/the-difference-between-switch-and-checkout?u=76281980&t=90)** And for the record, there's no right or wrong here.
>
> **[1:33](https://www.linkedin.com/learning/git-from-scratch/the-difference-between-switch-and-checkout?u=76281980&t=93)** You can use git switch and git restore or git checkout at any time.
>
> **[1:36](https://www.linkedin.com/learning/git-from-scratch/the-difference-between-switch-and-checkout?u=76281980&t=96)** It's really just about preference and clarity.

> [!info]- Semantic Content
>
> **CLI Commands:** git (17)
> **Code Keywords:** switch (6), for. (1)
> **File Paths:** main.js (2)
> **Definitions:** is called (1), is a  (1)
> **UI Navigation:** switch to (1)
> **Speakers:** - [instructor] (1)


### 3. Changing History

> [[#Table of Contents|↑ Back to Table of Contents]]

#### git merge: Combine two timelines
> [LinkedIn Learning](https://www.linkedin.com/learning/git-from-scratch/git-merge-combine-two-timelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-from-scratch/git-merge-combine-two-timelines?u=76281980&t=0)** - [Instructor] Git gives you the capability to split your development work into as many branches or alternate timelines as you like, so you can work on many different versions of your code at the same time without losing or overriding any of your work.
>
> **[0:12](https://www.linkedin.com/learning/git-from-scratch/git-merge-combine-two-timelines?u=76281980&t=12)** That's cool and all, but at some point you'll need to recombine the different variations of your code into one branch.
>
> **[0:18](https://www.linkedin.com/learning/git-from-scratch/git-merge-combine-two-timelines?u=76281980&t=18)** For this, we have git merge.
>
> **[0:21](https://www.linkedin.com/learning/git-from-scratch/git-merge-combine-two-timelines?u=76281980&t=21)** In this example, there are two branches, a main branch and an experimental branch.
>
> **[0:26](https://www.linkedin.com/learning/git-from-scratch/git-merge-combine-two-timelines?u=76281980&t=26)** In the experimental branch, there's a new feature.
>
> **[0:29](https://www.linkedin.com/learning/git-from-scratch/git-merge-combine-two-timelines?u=76281980&t=29)** To merge these two branches together, point HEAD at the branch you want to merge code into and say git merge and the name of the branch you want to merge in.
>
> **[0:38](https://www.linkedin.com/learning/git-from-scratch/git-merge-combine-two-timelines?u=76281980&t=38)** In the merge, the matching pieces of code in the branches overlap, and any new code from the branch being merged in is added into the project.
>
> **[0:46](https://www.linkedin.com/learning/git-from-scratch/git-merge-combine-two-timelines?u=76281980&t=46)** So now the main branch also has the code from the experimental branch, and the events of the two separate timelines have merged into one.
>
> **[0:54](https://www.linkedin.com/learning/git-from-scratch/git-merge-combine-two-timelines?u=76281980&t=54)** The interesting thing is, even though the experimental branch has been merged into the main branch, the last commit of the experimental branch remains so you can still switch to it and keep working on the experimental branch separately, if you like.

> [!info]- Semantic Content
>
> **CLI Commands:** git (3)
> **Code Keywords:** this, (1), switch (1)
> **API Endpoints:** head  (1)
> **Env Vars:** head (1)
> **UI Navigation:** switch to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### CONFLICT: How to fix merge conflicts
> [LinkedIn Learning](https://www.linkedin.com/learning/git-from-scratch/conflict-how-to-fix-merge-conflicts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-from-scratch/conflict-how-to-fix-merge-conflicts?u=76281980&t=0)** - [Instructor] Merging branches where there have been no code changes in the same location in both branches is a clean process.
>
> **[0:05](https://www.linkedin.com/learning/git-from-scratch/conflict-how-to-fix-merge-conflicts?u=76281980&t=5)** It's also a rare process.
>
> **[0:07](https://www.linkedin.com/learning/git-from-scratch/conflict-how-to-fix-merge-conflicts?u=76281980&t=7)** In most cases, there will be some form of conflict between branches, the same code or the same code area has been changed in different ways in the different branches.
>
> **[0:16](https://www.linkedin.com/learning/git-from-scratch/conflict-how-to-fix-merge-conflicts?u=76281980&t=16)** Merging two branches where there are conflicts like this will not work, at least not automatically.
>
> **[0:21](https://www.linkedin.com/learning/git-from-scratch/conflict-how-to-fix-merge-conflicts?u=76281980&t=21)** You see, Git may be an omnipotent passive observer of all things when it comes to what code is in your files but it has no idea how you want that code to be merged together.
>
> **[0:31](https://www.linkedin.com/learning/git-from-scratch/conflict-how-to-fix-merge-conflicts?u=76281980&t=31)** So when there's a conflict like this, it flags it as a conflict, and the merge operation stops.
>
> **[0:38](https://www.linkedin.com/learning/git-from-scratch/conflict-how-to-fix-merge-conflicts?u=76281980&t=38)** This sounds way more dramatic than it really is.
>
> **[0:41](https://www.linkedin.com/learning/git-from-scratch/conflict-how-to-fix-merge-conflicts?u=76281980&t=41)** When you get a conflict warning, Git is telling you hey, there're two different versions of history here and I need to know which is the one you want to keep.
>
> **[0:49](https://www.linkedin.com/learning/git-from-scratch/conflict-how-to-fix-merge-conflicts?u=76281980&t=49)** To help you figure out the conflict, Git puts all the code into one file and automatically highlights the conflicting code, marking it as current change, so the original code from the branch you're working in, or the incoming change, the code from the file you are trying to merge the code from.
>
> **[1:07](https://www.linkedin.com/learning/git-from-scratch/conflict-how-to-fix-merge-conflicts?u=76281980&t=67)** To resolve this conflict, edit the file to literally resolve the code conflict.
>
> **[1:11](https://www.linkedin.com/learning/git-from-scratch/conflict-how-to-fix-merge-conflicts?u=76281980&t=71)** That could mean accepting either the current or incoming change and removing the other one.
>
> **[1:16](https://www.linkedin.com/learning/git-from-scratch/conflict-how-to-fix-merge-conflicts?u=76281980&t=76)** It could mean combining both changes or it could mean something else.
>
> **[1:20](https://www.linkedin.com/learning/git-from-scratch/conflict-how-to-fix-merge-conflicts?u=76281980&t=80)** It's entirely up to you.
>
> **[1:21](https://www.linkedin.com/learning/git-from-scratch/conflict-how-to-fix-merge-conflicts?u=76281980&t=81)** You're just editing the code to resolve the conflict.
>
> **[1:25](https://www.linkedin.com/learning/git-from-scratch/conflict-how-to-fix-merge-conflicts?u=76281980&t=85)** Once you resolve the conflict by editing the code, use git add to add the new conflict-free version to the staging area, and git commit to commit the merged code.
>
> **[1:34](https://www.linkedin.com/learning/git-from-scratch/conflict-how-to-fix-merge-conflicts?u=76281980&t=94)** Conflict resolved.

> [!info]- Semantic Content
>
> **CLI Commands:** git (5)
> **Code Keywords:** this, (1), from. (1), else. (1)
> **Definitions:** is a  (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### git revert: Undo something
> [LinkedIn Learning](https://www.linkedin.com/learning/git-from-scratch/git-revert-undo-something?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-from-scratch/git-revert-undo-something?u=76281980&t=0)** - [Instructor] One of the most powerful features of any software tool is the undo button.
>
> **[0:05](https://www.linkedin.com/learning/git-from-scratch/git-revert-undo-something?u=76281980&t=5)** Make a mistake, hit undo, and it's as if it never happened.
>
> **[0:09](https://www.linkedin.com/learning/git-from-scratch/git-revert-undo-something?u=76281980&t=9)** That's kind of tricky though when you have an omnipotent, passive observer of all things watching and keeping track of the history of your project.
>
> **[0:17](https://www.linkedin.com/learning/git-from-scratch/git-revert-undo-something?u=76281980&t=17)** How do you undo something you've committed to history without rewriting history?
>
> **[0:21](https://www.linkedin.com/learning/git-from-scratch/git-revert-undo-something?u=76281980&t=21)** The answer is you can actually rewrite history using the git reset command, but it's rather risky and not good practice to do so.
>
> **[0:30](https://www.linkedin.com/learning/git-from-scratch/git-revert-undo-something?u=76281980&t=30)** A better solution is to work with the historical timeline and simply pull an older version of your code up to the top of the branch.
>
> **[0:38](https://www.linkedin.com/learning/git-from-scratch/git-revert-undo-something?u=76281980&t=38)** This is done using git revert.
>
> **[0:41](https://www.linkedin.com/learning/git-from-scratch/git-revert-undo-something?u=76281980&t=41)** For this to work, you need to know the commit ID for the commit you want to revert to.
>
> **[0:45](https://www.linkedin.com/learning/git-from-scratch/git-revert-undo-something?u=76281980&t=45)** This is a machine-generated pile of random numbers and letters also known as a hash.
>
> **[0:50](https://www.linkedin.com/learning/git-from-scratch/git-revert-undo-something?u=76281980&t=50)** To get the list of everything that's happened in the repository, including the commit ID and commit message, run git log dash dash one line.
>
> **[0:59](https://www.linkedin.com/learning/git-from-scratch/git-revert-undo-something?u=76281980&t=59)** By the way, this is why it's a good idea to leave clear and descriptive commit messages.
>
> **[1:03](https://www.linkedin.com/learning/git-from-scratch/git-revert-undo-something?u=76281980&t=63)** So you know what happened in your previous commits.
>
> **[1:06](https://www.linkedin.com/learning/git-from-scratch/git-revert-undo-something?u=76281980&t=66)** Once you find the commit you want to revert to, call that commit ID with git revert and then the ID.
>
> **[1:13](https://www.linkedin.com/learning/git-from-scratch/git-revert-undo-something?u=76281980&t=73)** This starts the process of creating a new commit at the top of your branch with a code from the reference commit.
>
> **[1:19](https://www.linkedin.com/learning/git-from-scratch/git-revert-undo-something?u=76281980&t=79)** To actually commit it to the branch, add a commit message and save it.
>
> **[1:23](https://www.linkedin.com/learning/git-from-scratch/git-revert-undo-something?u=76281980&t=83)** Now the most recent commit from your branch matches the commit you reverted to and the history of your project remains intact.

> [!info]- Semantic Content
>
> **CLI Commands:** git (4), make (1), find (1)
> **Definitions:** is a  (1), known as (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### git rebase: Move the base of a branch
> [LinkedIn Learning](https://www.linkedin.com/learning/git-from-scratch/git-rebase-move-the-base-of-a-branch?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/git-from-scratch/git-rebase-move-the-base-of-a-branch?u=76281980&t=0)** - [Instructor] In some cases, you will need to rewrite history.
>
> **[0:03](https://www.linkedin.com/learning/git-from-scratch/git-rebase-move-the-base-of-a-branch?u=76281980&t=3)** A common scenario is, you've worked on a new feature in a feature branch and you realize that work really should have taken place in the main branch.
>
> **[0:10](https://www.linkedin.com/learning/git-from-scratch/git-rebase-move-the-base-of-a-branch?u=76281980&t=10)** To solve this problem and make it appear as if the work happened in the main branch, you can rebase the experimental branch.
>
> **[0:17](https://www.linkedin.com/learning/git-from-scratch/git-rebase-move-the-base-of-a-branch?u=76281980&t=17)** Rebase quite literally means detaching the base of the experimental branch and moving it to the top of a different branch, rebasing the branch, giving it a new base.
>
> **[0:28](https://www.linkedin.com/learning/git-from-scratch/git-rebase-move-the-base-of-a-branch?u=76281980&t=28)** This operation is done from the branch you want to rebase.
>
> **[0:31](https://www.linkedin.com/learning/git-from-scratch/git-rebase-move-the-base-of-a-branch?u=76281980&t=31)** You pass git rebase and then name the branch you want to use as the new base.
>
> **[0:36](https://www.linkedin.com/learning/git-from-scratch/git-rebase-move-the-base-of-a-branch?u=76281980&t=36)** If there are no conflicts between the experimental branch and the branch you're rebasing to, this process is automatic.
>
> **[0:42](https://www.linkedin.com/learning/git-from-scratch/git-rebase-move-the-base-of-a-branch?u=76281980&t=42)** If there are conflicts, git will walk you through the conflict resolution process for each commit from the rebased branch.
>
> **[0:50](https://www.linkedin.com/learning/git-from-scratch/git-rebase-move-the-base-of-a-branch?u=76281980&t=50)** That may sound excessive, but it's for a good reason.
>
> **[0:53](https://www.linkedin.com/learning/git-from-scratch/git-rebase-move-the-base-of-a-branch?u=76281980&t=53)** You are literally rewriting history here by bolting the commits from one branch onto another branch.
>
> **[0:59](https://www.linkedin.com/learning/git-from-scratch/git-rebase-move-the-base-of-a-branch?u=76281980&t=59)** To preserve the coherence of the new version history, there can't be any conflicts within the commits.
>
> **[1:04](https://www.linkedin.com/learning/git-from-scratch/git-rebase-move-the-base-of-a-branch?u=76281980&t=64)** So you have to resolve them one after the other until the history is clean.
>
> **[1:09](https://www.linkedin.com/learning/git-from-scratch/git-rebase-move-the-base-of-a-branch?u=76281980&t=69)** It goes without saying, this can be a rather cumbersome process, which is why git rebase is not something you should be using a lot and why git rebase allows you to do things like rebase only a specific commit or a specific selection of commits, or even compress multiple commits into one and then rebase only that commit.

> [!info]- Semantic Content
>
> **CLI Commands:** git (4), make (1)
> **Code Keywords:** pass (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Morten Rand-Hendriksen]]

## Skills Covered

- Git

## Path Context

### In [[The Top Skills Engineering Professionals Have Right Now]]
← [[SOLIDWORKS 2022 Essential Training]] | **5 of 9** | [[Cutting-Edge CSS]] →

## Appears In

- [[The Top Skills Engineering Professionals Have Right Now]]

## Related Courses

_Courses sharing skills:_

- [[Learning Git and GitHub]] — Git
- [[Git Essential Training]] — Git

---

[↑ Back to top](#)