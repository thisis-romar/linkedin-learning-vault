---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: learning-bitbucket
url: "https://www.linkedin.com/learning/learning-bitbucket"
level: Beginner
updated: 4/24/2024
learners: 2998
skills:
  - Bitbucket
  - Version Control
exercise_files: true
github: "https://github.com/LinkedInLearning/learning-bitbucket-3821269"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQF4xJfvchWt8A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1713919407092?e=2147483647&amp;v=beta&amp;t=1onNT12ubSmwBPuB-SfMrbY3o_mINODQr1Xwk0X1Ppw"
linkedin_topic: DevOps
learning_paths:
  - '[[Master Bitbucket]]'
next_courses:
  - '[[Bitbucket Pipelines for CI-CD]]'
path_nav: '[{"path":"Master Bitbucket","position":1,"total":3,"prev":null,"next":"Bitbucket Pipelines for CI-CD"}]'
path_count: 1
tags:
  - course
  - topic/devops
  - topic/software-development
  - skill/bitbucket
  - skill/version-control
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Learning%20Bitbucket.md)

![Learning Bitbucket](https://media.licdn.com/dms/image/v2/D560DAQF4xJfvchWt8A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1713919407092?e=2147483647&amp;v=beta&amp;t=1onNT12ubSmwBPuB-SfMrbY3o_mINODQr1Xwk0X1Ppw)

# Learning Bitbucket

> In this course, staff software engineer Michael Jenkins introduces you to Bitbucket, Atlassian's online code repository. Learn about content organization in Bitbucket, as well as the difference between public and private repositories and how to use SSH keys for secure code pushes. Explore how to clone repositories, create branches, add code, and manage pull requests. Plus, discover how to integrat

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-bitbucket) | Beginner | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Streamline your code and collaboration with Bitbucket](#streamline-your-code-and-collaboration-with-bitbucket)
  - [What you should know](#what-you-should-know)
  - [Create an Atlassian account](#create-an-atlassian-account)
  - [Bitbucket content organization](#bitbucket-content-organization)
- [**1. Getting Started with Bitbucket**](#1-getting-started-with-bitbucket) (8 videos)
  - [Create public and private repositories](#create-public-and-private-repositories)
  - [Add files to a repository](#add-files-to-a-repository)
  - [Add an SSH key for authentication](#add-an-ssh-key-for-authentication)
  - [Clone repo to a local system](#clone-repo-to-a-local-system)
  - [Use a Git workflow](#use-a-git-workflow)
  - [Push code to a remote repo](#push-code-to-a-remote-repo)
  - [Challenge: Create a repo and add code](#challenge-create-a-repo-and-add-code)
  - [Solution: Create a repo and add code](#solution-create-a-repo-and-add-code)
- [**2. Working with Branches and Pull Requests**](#2-working-with-branches-and-pull-requests) (5 videos)
  - [Create a branch](#create-a-branch)
  - [Push code to a branch](#push-code-to-a-branch)
  - [Create a Pull request](#create-a-pull-request)
  - [Challenge: Create and merge a Pull request](#challenge-create-and-merge-a-pull-request)
  - [Solution: Create and merge a Pull request](#solution-create-and-merge-a-pull-request)
- [**3. Working with Jira Cloud**](#3-working-with-jira-cloud) (7 videos)
  - [Manage Projects with Jira and Bitbucket](#manage-projects-with-jira-and-bitbucket)
  - [Connect Jira to Bitbucket](#connect-jira-to-bitbucket)
  - [Automate issue updates](#automate-issue-updates)
  - [Create an issue and link to the Bitbucket branch](#create-an-issue-and-link-to-the-bitbucket-branch)
  - [Update and close issues from Bitbucket](#update-and-close-issues-from-bitbucket)
  - [Challenge: Trigger Jira automation from Bitbucket](#challenge-trigger-jira-automation-from-bitbucket)
  - [Solution: Trigger Jira automation from Bitbucket](#solution-trigger-jira-automation-from-bitbucket)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Streamline your code and collaboration with Bitbucket
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-bitbucket/streamline-your-code-and-collaboration-with-bitbucket?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-bitbucket/streamline-your-code-and-collaboration-with-bitbucket?u=76281980&t=0)** - Modern software development requires tools that track code changes, encourage collaboration, and help us manage projects all at the same time.
>
> **[0:08](https://www.linkedin.com/learning/learning-bitbucket/streamline-your-code-and-collaboration-with-bitbucket?u=76281980&t=8)** Bitbucket is a cloud-based solution that handles all of these tasks and much more.
>
> **[0:13](https://www.linkedin.com/learning/learning-bitbucket/streamline-your-code-and-collaboration-with-bitbucket?u=76281980&t=13)** Hi, I'm Michael Jenkins.
>
> **[0:15](https://www.linkedin.com/learning/learning-bitbucket/streamline-your-code-and-collaboration-with-bitbucket?u=76281980&t=15)** I'm a seasoned computer engineer and I've been using Bitbucket for years.
>
> **[0:18](https://www.linkedin.com/learning/learning-bitbucket/streamline-your-code-and-collaboration-with-bitbucket?u=76281980&t=18)** I'm thrilled to be your instructor for this course, and I'm excited to share some of the ways Bitbucket can be an asset for your software development needs.
>
> **[0:26](https://www.linkedin.com/learning/learning-bitbucket/streamline-your-code-and-collaboration-with-bitbucket?u=76281980&t=26)** By the end of this course, you'll have the knowledge and skills you need to use Bitbucket for hosting git-based repositories, collaborating with branches and pull requests, and managing project workflows with Jira.
>
> **[0:38](https://www.linkedin.com/learning/learning-bitbucket/streamline-your-code-and-collaboration-with-bitbucket?u=76281980&t=38)** Are you ready? I hope so.
>
> **[0:40](https://www.linkedin.com/learning/learning-bitbucket/streamline-your-code-and-collaboration-with-bitbucket?u=76281980&t=40)** Let's jump in and start learning Bitbucket.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Bitbucket]] (5), [[Software Development]] (2), cloud (1), [[Jenkins]] (1), [[Git]] (1)
> **Tools:** bitbucket (5), jira (1)
> **CLI Commands:** git (1)
> **Definitions:** is a  (1)
> **Speakers:** - modern (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-bitbucket/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-bitbucket/what-you-should-know?u=76281980&t=0)** - [Instructor] To get the most out of this course, there are a few things you should be familiar with.
>
> **[0:05](https://www.linkedin.com/learning/learning-bitbucket/what-you-should-know?u=76281980&t=5)** I also want you to know that this course has built-in features to help you out along the way.
>
> **[0:11](https://www.linkedin.com/learning/learning-bitbucket/what-you-should-know?u=76281980&t=11)** We'll be doing a lot of work in the web browser, but you should be comfortable using the terminal on a Mac, Windows, or Linux system.
>
> **[0:19](https://www.linkedin.com/learning/learning-bitbucket/what-you-should-know?u=76281980&t=19)** There are hundreds of applications that work with Git, but for this course, we'll be using the command line interface to run Git commands.
>
> **[0:29](https://www.linkedin.com/learning/learning-bitbucket/what-you-should-know?u=76281980&t=29)** Git is a version control system used to track changes in files, and Bitbucket as a cloud-based GI repository service.
>
> **[0:37](https://www.linkedin.com/learning/learning-bitbucket/what-you-should-know?u=76281980&t=37)** I'll be sharing some Git basics along the way, but if you are unfamiliar with Git, you can use the LinkedIn Learning course, [[Git Essential Training]], to get up to speed or as a reference.
>
> **[0:49](https://www.linkedin.com/learning/learning-bitbucket/what-you-should-know?u=76281980&t=49)** Exercise files are also available.
>
> **[0:52](https://www.linkedin.com/learning/learning-bitbucket/what-you-should-know?u=76281980&t=52)** There's a link to the files on the homepage of the course.
>
> **[0:55](https://www.linkedin.com/learning/learning-bitbucket/what-you-should-know?u=76281980&t=55)** The files contain notes and additional information, examples for the material we'll be covering in the course, and maybe even some trivia and shenanigans.
>
> **[1:05](https://www.linkedin.com/learning/learning-bitbucket/what-you-should-know?u=76281980&t=65)** If you're looking for a reference to something in the course, you'll most likely find it in the exercise files.
>
> **[1:11](https://www.linkedin.com/learning/learning-bitbucket/what-you-should-know?u=76281980&t=71)** If you get stuck on something, and you need a bit more help than you can find in the exercise files, please use the course Q&A section.
>
> **[1:20](https://www.linkedin.com/learning/learning-bitbucket/what-you-should-know?u=76281980&t=80)** Ask your question there, and I'll do my best to help you out.
>
> **[1:23](https://www.linkedin.com/learning/learning-bitbucket/what-you-should-know?u=76281980&t=83)** If other folks have gotten stuck in the same place, they might join in on the discussion and share their solution.
>
> **[1:30](https://www.linkedin.com/learning/learning-bitbucket/what-you-should-know?u=76281980&t=90)** Also, check out the Q&A section to answer questions.
>
> **[1:34](https://www.linkedin.com/learning/learning-bitbucket/what-you-should-know?u=76281980&t=94)** As a community, we'll use the Q&A to collaborate on a positive learning experience for everyone.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (6), web (1), [[Windows]] (1), [[Linux]] (1), [[Version Control]] (1)
> **CLI Commands:** git (6), find (2)
> **Tools:** terminal (1), command line (1), bitbucket (1)
> **Exercise Files:** exercise files (3)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Create an Atlassian account
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-bitbucket/create-an-atlassian-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-bitbucket/create-an-atlassian-account?u=76281980&t=1)** - [Instructor] To start using Bitbucket, you'll need to create an Atlassian account.
>
> **[0:05](https://www.linkedin.com/learning/learning-bitbucket/create-an-atlassian-account?u=76281980&t=5)** Browse to the signup page and create an account using your email address or another account that you might already have with Google, Microsoft, Apple, or Slack.
>
> **[0:16](https://www.linkedin.com/learning/learning-bitbucket/create-an-atlassian-account?u=76281980&t=16)** Once you're logged into your Atlassian account, select the icon for Bitbucket and then select login.
>
> **[0:25](https://www.linkedin.com/learning/learning-bitbucket/create-an-atlassian-account?u=76281980&t=25)** If it's your first time logging into Bitbucket, you'll be prompted to create a username.
>
> **[0:30](https://www.linkedin.com/learning/learning-bitbucket/create-an-atlassian-account?u=76281980&t=30)** I know you'll pick something creative and memorable.
>
> **[0:33](https://www.linkedin.com/learning/learning-bitbucket/create-an-atlassian-account?u=76281980&t=33)** Once you have it, select continue.
>
> **[0:39](https://www.linkedin.com/learning/learning-bitbucket/create-an-atlassian-account?u=76281980&t=39)** The folks at Atlassian are nice enough to ask a couple questions to help tailor the way you'll interact with Bitbucket.
>
> **[0:45](https://www.linkedin.com/learning/learning-bitbucket/create-an-atlassian-account?u=76281980&t=45)** You can participate in this quick survey or skip it.
>
> **[0:52](https://www.linkedin.com/learning/learning-bitbucket/create-an-atlassian-account?u=76281980&t=52)** And that's it.
>
> **[0:53](https://www.linkedin.com/learning/learning-bitbucket/create-an-atlassian-account?u=76281980&t=53)** You have an Atlassian account and you're logged into Bitbucket.
>
> **[0:57](https://www.linkedin.com/learning/learning-bitbucket/create-an-atlassian-account?u=76281980&t=57)** Now let's discuss workspaces, projects, repositories, and how we'll use each of these to organize our work in Bitbucket.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Bitbucket]] (6), [[Atlassian]] (4), [[Google]] (1), [[Microsoft]] (1), [[Slack]] (1)
> **Tools:** bitbucket (6), slack (1)
> **UI Navigation:** select the (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Bitbucket content organization
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-bitbucket/bitbucket-content-organization?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-bitbucket/bitbucket-content-organization?u=76281980&t=1)** - [Presenter] Bitbucket uses three components to organize and manage access to content, workspaces, projects, and repositories.
>
> **[0:10](https://www.linkedin.com/learning/learning-bitbucket/bitbucket-content-organization?u=76281980&t=10)** Let's take a look at each one of these and how they work together.
>
> **[0:14](https://www.linkedin.com/learning/learning-bitbucket/bitbucket-content-organization?u=76281980&t=14)** The primary job of a workspace is to contain projects and repositories.
>
> **[0:20](https://www.linkedin.com/learning/learning-bitbucket/bitbucket-content-organization?u=76281980&t=20)** We can configure our workspaces to be public or private.
>
> **[0:24](https://www.linkedin.com/learning/learning-bitbucket/bitbucket-content-organization?u=76281980&t=24)** Public workspaces can be viewed by anyone, while private workspaces require a user to be logged in and granted specific permission to see any other workspaces content.
>
> **[0:36](https://www.linkedin.com/learning/learning-bitbucket/bitbucket-content-organization?u=76281980&t=36)** And because workspace names are used to create URLs under the [bitbucket.org](https://bitbucket.org) domain, each workspace must have a unique identifier across all of Bitbucket.
>
> **[0:48](https://www.linkedin.com/learning/learning-bitbucket/bitbucket-content-organization?u=76281980&t=48)** Projects contain repositories and also provide controls for managing access.
>
> **[0:55](https://www.linkedin.com/learning/learning-bitbucket/bitbucket-content-organization?u=76281980&t=55)** Projects can also be public or private, giving another option to control access and visibility to the repositories inside the project.
>
> **[1:04](https://www.linkedin.com/learning/learning-bitbucket/bitbucket-content-organization?u=76281980&t=64)** Projects also provide a way for us to configure multiple repositories, access keys, branching models, pull request viewers and other settings can be configured at the project level and applied to all repositories in the same project.
>
> **[1:20](https://www.linkedin.com/learning/learning-bitbucket/bitbucket-content-organization?u=76281980&t=80)** This allows teams to keep development, procedures and access consistent across all the repositories associated with a particular project.
>
> **[1:31](https://www.linkedin.com/learning/learning-bitbucket/bitbucket-content-organization?u=76281980&t=91)** You can name a project just about anything, however, each project name must be unique to the workspace where the project is located.
>
> **[1:41](https://www.linkedin.com/learning/learning-bitbucket/bitbucket-content-organization?u=76281980&t=101)** This leads us to the final organization component, repositories.
>
> **[1:46](https://www.linkedin.com/learning/learning-bitbucket/bitbucket-content-organization?u=76281980&t=106)** Repositories contain the files you'll be working with and all the revision history for each file.
>
> **[1:53](https://www.linkedin.com/learning/learning-bitbucket/bitbucket-content-organization?u=76281980&t=113)** Repos can be public or private, providing yet another point for us to manage access to our content.
>
> **[2:00](https://www.linkedin.com/learning/learning-bitbucket/bitbucket-content-organization?u=76281980&t=120)** Most importantly, repositories provide a central location for collaboration around changes to files using branches, commit histories and pull requests.
>
> **[2:12](https://www.linkedin.com/learning/learning-bitbucket/bitbucket-content-organization?u=76281980&t=132)** One thing to keep in mind when you're naming your repos, each repo must have a unique name per workspace.
>
> **[2:20](https://www.linkedin.com/learning/learning-bitbucket/bitbucket-content-organization?u=76281980&t=140)** This is required because in some cases, projects and repos will be displayed at the same level under a workspace.
>
> **[2:28](https://www.linkedin.com/learning/learning-bitbucket/bitbucket-content-organization?u=76281980&t=148)** Let's see some examples showing how workspaces, projects and repos all come together.
>
> **[2:35](https://www.linkedin.com/learning/learning-bitbucket/bitbucket-content-organization?u=76281980&t=155)** If you're using Bitbucket as a solo developer, you'll most likely have one workspace and one project with a project containing multiple repositories.
>
> **[2:46](https://www.linkedin.com/learning/learning-bitbucket/bitbucket-content-organization?u=76281980&t=166)** This is a good approach for keeping things organized and managing access for one person.
>
> **[2:54](https://www.linkedin.com/learning/learning-bitbucket/bitbucket-content-organization?u=76281980&t=174)** If multiple developers are working together as a team, you'll see the benefit of using workspaces to manage access to projects and repositories.
>
> **[3:03](https://www.linkedin.com/learning/learning-bitbucket/bitbucket-content-organization?u=76281980&t=183)** In this example, we'll use two workspaces, one for a mobile application and another for a website.
>
> **[3:12](https://www.linkedin.com/learning/learning-bitbucket/bitbucket-content-organization?u=76281980&t=192)** Both workspaces can use similar project and repository names, allowing for consistent development in each space.
>
> **[3:21](https://www.linkedin.com/learning/learning-bitbucket/bitbucket-content-organization?u=76281980&t=201)** We can also apply different access settings at the workspace, project and repo levels to make sure the right team members only have access to the code they're working on.
>
> **[3:32](https://www.linkedin.com/learning/learning-bitbucket/bitbucket-content-organization?u=76281980&t=212)** Now that we've discussed how content is organized in Bitbucket, let's move on to applying these concepts in the Bitbucket web interface.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Bitbucket]] (6), teams (1), mobile application (1), web (1)
> **Tools:** bitbucket (6)
> **Prerequisites:** configure (2)
> **CLI Commands:** make (1)
> **URLs:** [bitbucket.org](https://bitbucket.org) (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [presenter] (1)


### 1. Getting Started with Bitbucket

[↑ Back to Table of Contents](#table-of-contents)

#### Create public and private repositories
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-bitbucket/create-public-and-private-repositories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-bitbucket/create-public-and-private-repositories?u=76281980&t=0)** - Let's get started with one of Bitbucket's core features, repositories.
>
> **[0:04](https://www.linkedin.com/learning/learning-bitbucket/create-public-and-private-repositories?u=76281980&t=4)** When we discussed how content is organized in Bitbucket, we saw how workspaces, projects, and repositories can be either public or private.
>
> **[0:14](https://www.linkedin.com/learning/learning-bitbucket/create-public-and-private-repositories?u=76281980&t=14)** Public repos are visible to just about anyone on the internet, and while they're visible, public repos still require specific permission to add or make changes to any files in the repo.
>
> **[0:28](https://www.linkedin.com/learning/learning-bitbucket/create-public-and-private-repositories?u=76281980&t=28)** Private repositories are hidden and inaccessible.
>
> **[0:31](https://www.linkedin.com/learning/learning-bitbucket/create-public-and-private-repositories?u=76281980&t=31)** A private repo can't be accessed by anyone that hasn't been granted specific permission to see and contribute to the repo.
>
> **[0:42](https://www.linkedin.com/learning/learning-bitbucket/create-public-and-private-repositories?u=76281980&t=42)** Public repositories are ideal for open-source projects.
>
> **[0:46](https://www.linkedin.com/learning/learning-bitbucket/create-public-and-private-repositories?u=76281980&t=46)** Other developers can view and copy the code and can even propose changes.
>
> **[0:52](https://www.linkedin.com/learning/learning-bitbucket/create-public-and-private-repositories?u=76281980&t=52)** However, the repository owners maintain control over who can contribute code directly to the repo.
>
> **[0:59](https://www.linkedin.com/learning/learning-bitbucket/create-public-and-private-repositories?u=76281980&t=59)** Private repositories are best suited for files that aren't meant to be shared.
>
> **[1:04](https://www.linkedin.com/learning/learning-bitbucket/create-public-and-private-repositories?u=76281980&t=64)** This can include proprietary algorithms, sensitive data, or code for an exclusive application.
>
> **[1:11](https://www.linkedin.com/learning/learning-bitbucket/create-public-and-private-repositories?u=76281980&t=71)** Let's go over to Bitbucket and create public and private repos.
>
> **[1:17](https://www.linkedin.com/learning/learning-bitbucket/create-public-and-private-repositories?u=76281980&t=77)** If you've just created your Bitbucket account, you'll start by creating a workspace.
>
> **[1:24](https://www.linkedin.com/learning/learning-bitbucket/create-public-and-private-repositories?u=76281980&t=84)** Remember that each workspace name needs to be globally unique, so pick something that you know will stand out in the crowd.
>
> **[1:40](https://www.linkedin.com/learning/learning-bitbucket/create-public-and-private-repositories?u=76281980&t=100)** By default, workspaces are configured to be private.
>
> **[1:44](https://www.linkedin.com/learning/learning-bitbucket/create-public-and-private-repositories?u=76281980&t=104)** I want this workspace to be public, so I'll uncheck that setting and then select Create.
>
> **[1:54](https://www.linkedin.com/learning/learning-bitbucket/create-public-and-private-repositories?u=76281980&t=114)** From this screen, I'll select the Create repository button.
>
> **[1:58](https://www.linkedin.com/learning/learning-bitbucket/create-public-and-private-repositories?u=76281980&t=118)** This gives us a form to fill out with the repo configuration.
>
> **[2:02](https://www.linkedin.com/learning/learning-bitbucket/create-public-and-private-repositories?u=76281980&t=122)** I haven't created any projects in this account, so I'm prompted to add a name for the project, along with the repo name.
>
> **[2:15](https://www.linkedin.com/learning/learning-bitbucket/create-public-and-private-repositories?u=76281980&t=135)** By default, repositories are configured to be private.
>
> **[2:18](https://www.linkedin.com/learning/learning-bitbucket/create-public-and-private-repositories?u=76281980&t=138)** I'll uncheck the setting so the repo can be public.
>
> **[2:22](https://www.linkedin.com/learning/learning-bitbucket/create-public-and-private-repositories?u=76281980&t=142)** I'll keep the rest of the default settings and select Create repository.
>
> **[2:31](https://www.linkedin.com/learning/learning-bitbucket/create-public-and-private-repositories?u=76281980&t=151)** Okay, there's our public repo.
>
> **[2:33](https://www.linkedin.com/learning/learning-bitbucket/create-public-and-private-repositories?u=76281980&t=153)** To confirm the repo is public, let's open this repo from an incognito browser.
>
> **[2:39](https://www.linkedin.com/learning/learning-bitbucket/create-public-and-private-repositories?u=76281980&t=159)** I'll copy the repo URL and open an incognito window, and I'll paste the URL in here.
>
> **[2:52](https://www.linkedin.com/learning/learning-bitbucket/create-public-and-private-repositories?u=76281980&t=172)** From here, I can see all the content in the repo, but I'm not logged in.
>
> **[2:57](https://www.linkedin.com/learning/learning-bitbucket/create-public-and-private-repositories?u=76281980&t=177)** If I select the user icon, sure enough, there's a prompt for me to log in.
>
> **[3:03](https://www.linkedin.com/learning/learning-bitbucket/create-public-and-private-repositories?u=76281980&t=183)** So we've proven that our public repo is indeed public.
>
> **[3:07](https://www.linkedin.com/learning/learning-bitbucket/create-public-and-private-repositories?u=76281980&t=187)** We can test for the opposite of this exercise by creating a private repo and confirming that the repo is not accessible to the general public.
>
> **[3:17](https://www.linkedin.com/learning/learning-bitbucket/create-public-and-private-repositories?u=76281980&t=197)** I've outlined the steps for that process in the exercise files.
>
> **[3:21](https://www.linkedin.com/learning/learning-bitbucket/create-public-and-private-repositories?u=76281980&t=201)** Take a moment to walk through those steps and meet me in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Bitbucket]] (4), open-source (1), [[Algorithms]] (1), data (1), application (1)
> **Tools:** bitbucket (4)
> **Env Vars:** url (2)
> **Cross-References:** we discussed (1), in the next (1)
> **UI Navigation:** select the (2)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - let (1)

#### Add files to a repository
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-bitbucket/add-files-to-a-repository?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-bitbucket/add-files-to-a-repository?u=76281980&t=0)** - [Presenter] I'm logged into my Bitbucket account and I'm on the homepage for the public repository that I just created.
>
> **[0:07](https://www.linkedin.com/learning/learning-bitbucket/add-files-to-a-repository?u=76281980&t=7)** Specifically, I've selected the source tab on the sidebar menu. To create a file from here, I'll select the three.menu on the far right hand side and then select add file.
>
> **[0:19](https://www.linkedin.com/learning/learning-bitbucket/add-files-to-a-repository?u=76281980&t=19)** This gives me an interface to add a file, and I'll start by entering the file name.
>
> **[0:24](https://www.linkedin.com/learning/learning-bitbucket/add-files-to-a-repository?u=76281980&t=24)** I'll call this one Hello World, and then I'll add the extension.py to indicate that this is a Python file.
>
> **[0:33](https://www.linkedin.com/learning/learning-bitbucket/add-files-to-a-repository?u=76281980&t=33)** Now, I'll enter the content for this file.
>
> **[0:36](https://www.linkedin.com/learning/learning-bitbucket/add-files-to-a-repository?u=76281980&t=36)** It's a simple Python script that just prints Hello World.
>
> **[0:42](https://www.linkedin.com/learning/learning-bitbucket/add-files-to-a-repository?u=76281980&t=42)** At the bottom of the screen, we have a few settings that we can use to control the way Bitbucket formats the text in this file.
>
> **[0:52](https://www.linkedin.com/learning/learning-bitbucket/add-files-to-a-repository?u=76281980&t=52)** Bitbucket recognized the file extension for Python and automatically selected the file type, but we can also manually override the syntax selection if needed.
>
> **[1:03](https://www.linkedin.com/learning/learning-bitbucket/add-files-to-a-repository?u=76281980&t=63)** We can also configure indent settings for tabs or spaces, the size of the indent and line wrapping, but what we really want to do is add this file to our repo.
>
> **[1:15](https://www.linkedin.com/learning/learning-bitbucket/add-files-to-a-repository?u=76281980&t=75)** To do that, we select commit.
>
> **[1:18](https://www.linkedin.com/learning/learning-bitbucket/add-files-to-a-repository?u=76281980&t=78)** This opens a form where we can enter a commit message, or we can just accept the default and select commit.
>
> **[1:26](https://www.linkedin.com/learning/learning-bitbucket/add-files-to-a-repository?u=76281980&t=86)** Once the commit is complete, we're taken to a new page where we can view all the details for the file we just created, including the content of the file.
>
> **[1:36](https://www.linkedin.com/learning/learning-bitbucket/add-files-to-a-repository?u=76281980&t=96)** If we select the commits tab on the sidebar menu, we can see all of the commits this repo has recorded.
>
> **[1:43](https://www.linkedin.com/learning/learning-bitbucket/add-files-to-a-repository?u=76281980&t=103)** Now, you can use this approach to create files in the repo, but more than likely, you'll be working with many files and other applications.
>
> **[1:52](https://www.linkedin.com/learning/learning-bitbucket/add-files-to-a-repository?u=76281980&t=112)** You'll be better served by cloning this repository to your local system and working with the files there.
>
> **[1:59](https://www.linkedin.com/learning/learning-bitbucket/add-files-to-a-repository?u=76281980&t=119)** To do that, you'll need to add an SSH key to your Bitbucket account.
>
> **[2:03](https://www.linkedin.com/learning/learning-bitbucket/add-files-to-a-repository?u=76281980&t=123)** We'll do that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Bitbucket]] (4), [[Python (Programming Language)|Python]] (3), next (1)
> **CLI Commands:** python (3), ssh (1)
> **Tools:** bitbucket (4)
> **UI Navigation:** select the (2)
> **Prerequisites:** configure (1), you'll need (1)
> **File Paths:** extension.py (1)
> **Env Vars:** ssh (1)
> **Cross-References:** in the next (1)

#### Add an SSH key for authentication
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=0)** - [Instructor] Secure Shell, also known as SSH, is a protocol for connecting to remote servers.
>
> **[0:07](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=7)** When we use SSH, our login credentials and data are encrypted, making this protocol highly resistant to network eavesdropping or unauthorized access.
>
> **[0:18](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=18)** Instead of using passwords, SSH uses a pair of cryptographic keys, a public key and a private key.
>
> **[0:27](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=27)** The public key is shared with the remote server and the private key remains securely stored on your local system.
>
> **[0:35](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=35)** Okay, that's all great information, but you might be wondering, what does SSH have to do with Bitbucket?
>
> **[0:42](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=42)** Well, our local Git client uses the SSH protocol to securely connect to remote repositories on Bitbucket.
>
> **[0:51](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=51)** Our Git client uses the private key for identification.
>
> **[0:55](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=55)** Bitbucket uses the public key to confirm our identity, and also confirms that we have permission to make changes to files inside our repos.
>
> **[1:05](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=65)** When we are identified and our permissions are confirmed, we're authenticated, which is exactly what we need for cloning repositories.
>
> **[1:15](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=75)** Once we have keys, we need to add them to our Bitbucket account.
>
> **[1:20](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=80)** There are three places where we can do this, our personal account settings, workspace settings, and project settings.
>
> **[1:29](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=89)** Each of these locations gives us options for controlling repository access.
>
> **[1:36](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=96)** Most users will be fine with adding SSH keys to their personal settings.
>
> **[1:42](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=102)** However, teams using workspaces may benefit from adding keys to the workspaces and projects.
>
> **[1:50](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=110)** You should also know that project keys are called access keys because they only provide read access to the project.
>
> **[1:59](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=119)** In other words, project keys let you read the contents of a repository, but they don't allow you to push updates back to the repository.
>
> **[2:08](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=128)** To set up access to Bitbucket using SSH, we need to create a key pair and update the SSH configuration on our local system.
>
> **[2:19](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=139)** To create our SSH key pair, we'll use the SSH keygen command along with options for creating the key.
>
> **[2:27](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=147)** Once we have our keys securely in place on our local system, we need to create or update the SSH configuration.
>
> **[2:34](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=154)** This makes it easier for the git client to use our key when it connects to Bitbucket.
>
> **[2:40](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=160)** Take a look at the exercise files for more details on creating an SSH key or modifying an SSH config.
>
> **[2:50](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=170)** It would be a disservice if I didn't at least comment on keeping your private keys secure.
>
> **[2:56](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=176)** Make sure you keep private keys private.
>
> **[3:00](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=180)** Don't make the mistake of adding your private key anywhere it can be exposed, like storing it in a public repository.
>
> **[3:07](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=187)** Exposing your private key is a surefire way to set yourself up for a security incident.
>
> **[3:13](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=193)** You can also improve your security posture by creating keys dedicated to specific uses.
>
> **[3:19](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=199)** Dedicated keys make it easier to create new keys when old keys are rotated or in response to a security incident.
>
> **[3:29](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=209)** Now that we're up to speed on all things SSH, let's use a demonstration to create a key pair for Bitbucket.
>
> **[3:36](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=216)** For this demonstration, I have three windows open.
>
> **[3:40](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=220)** I'm viewing the exercise files in my browser, I've got my terminal ready to create keys, and I'm logged into my Bitbucket account where I'll add the keys after I create them.
>
> **[3:56](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=236)** I'll start by copying the SSH Keygen command that I'll use to create the key.
>
> **[4:01](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=241)** I can do that by selecting the stacked squares icon next to this block of code.
>
> **[4:08](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=248)** Now I'll go to the terminal and I'll paste the command here.
>
> **[4:16](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=256)** When I run this command, I'm prompted to add a passphrase to the key.
>
> **[4:21](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=261)** This would allow us to add a password to the key, which would give even more protection when using this key.
>
> **[4:28](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=268)** However, we're going to be using it in a more automated fashion with Git, so I'm going to leave the passphrase empty and just press Return to not add a passphrase.
>
> **[4:39](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=279)** And because we're not using a passphrase, I'll just press Enter one more time here on the second prompt.
>
> **[4:48](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=288)** This lovely random art image confirms that our key was indeed created, and if I run LS on the .SSH directory, I can confirm that my keys are there.
>
> **[5:03](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=303)** Now let's create the SSH configuration.
>
> **[5:16](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=316)** I'm using them to edit this file, so I'll start by typing I to get into insert mode.
>
> **[5:23](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=323)** To speed things up, I'll go back to the exercise files and copy the config for this demo.
>
> **[5:30](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=330)** And from here, I'll copy the config, go back to my terminal and I'll paste the file in here.
>
> **[5:40](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=340)** I'll press the Escape key to stop editing, and then type colon WQ to save and exit the file.
>
> **[5:49](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=349)** Okay, the key is created and the configuration is in place.
>
> **[5:53](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=353)** Now I can add the public key to my Bitbucket account.
>
> **[5:57](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=357)** I'll cat the public key contents and copy them to my clipboard.
>
> **[6:09](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=369)** And now I'll go to Bitbucket.
>
> **[6:14](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=374)** I'm logged into my Bitbucket account on this screen.
>
> **[6:17](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=377)** To add a personal SSH key, I'll select the cog icon and then Personal Bitbucket Settings.
>
> **[6:27](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=387)** On this screen, I'll select SSH keys.
>
> **[6:32](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=392)** I'll select Add key here, and then paste in the key.
>
> **[6:40](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=400)** I also have the option of adding a label to this key, but if I leave the label field empty, Bitbucket will use the comment that I added when I created the key.
>
> **[6:50](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=410)** Honestly, that's the label I would probably use anyway, so I'll go ahead and select Add key.
>
> **[6:58](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=418)** All right, there's our key.
>
> **[7:00](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=420)** Bitbucket gives us some details on when the key was added and when the key was used, along with some controls to update or remove the key.
>
> **[7:09](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=429)** We just added this key, so it's no surprise that this key has never been used.
>
> **[7:14](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=434)** We'll change that by using this key to clone a repo in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Bitbucket]] (14), [[Git]] (4), [[Security]] (3), next (2), data (1)
> **CLI Commands:** ssh (19), git (4), make (4), ls (1), cat (1)
> **Env Vars:** ssh (19)
> **Tools:** bitbucket (14), terminal (3)
> **Definitions:** is a  (2), known as (1), in other words (1)
> **Cross-References:** go back to (2), in the next (1)
> **UI Navigation:** go to (2), select the (1)
> **Exercise Files:** exercise files (3)

#### Clone repo to a local system
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-bitbucket/clone-repo-to-a-local-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-bitbucket/clone-repo-to-a-local-system?u=76281980&t=1)** - [Instructor] We've set up SSH keys on our local system and in Bitbucket.
>
> **[0:05](https://www.linkedin.com/learning/learning-bitbucket/clone-repo-to-a-local-system?u=76281980&t=5)** Now we can clone a repo.
>
> **[0:07](https://www.linkedin.com/learning/learning-bitbucket/clone-repo-to-a-local-system?u=76281980&t=7)** The primary purpose of the git clone command is to create a local copy of a remote repository.
>
> **[0:14](https://www.linkedin.com/learning/learning-bitbucket/clone-repo-to-a-local-system?u=76281980&t=14)** The local copy is stored in a working directory that mirrors the content of the remote repo.
>
> **[0:20](https://www.linkedin.com/learning/learning-bitbucket/clone-repo-to-a-local-system?u=76281980&t=20)** The clone command fetches files, commit history, and metadata from the remote repository and stores them inside the working directory.
>
> **[0:30](https://www.linkedin.com/learning/learning-bitbucket/clone-repo-to-a-local-system?u=76281980&t=30)** Working from the web UI requires a constant network connection.
>
> **[0:35](https://www.linkedin.com/learning/learning-bitbucket/clone-repo-to-a-local-system?u=76281980&t=35)** However, when we use git clone, we can work offline.
>
> **[0:39](https://www.linkedin.com/learning/learning-bitbucket/clone-repo-to-a-local-system?u=76281980&t=39)** This way, we can use other applications and tools on our local system.
>
> **[0:45](https://www.linkedin.com/learning/learning-bitbucket/clone-repo-to-a-local-system?u=76281980&t=45)** The main argument for the git clone command is a URL with all the information git needs to set up a connection to the remote repository.
>
> **[0:54](https://www.linkedin.com/learning/learning-bitbucket/clone-repo-to-a-local-system?u=76281980&t=54)** Specifically, the URL identifies Bitbucket's host name, the workspace name, and the name of the repository we want to clone.
>
> **[1:05](https://www.linkedin.com/learning/learning-bitbucket/clone-repo-to-a-local-system?u=76281980&t=65)** Let's get started with our git clone command in the Bitbucket web interface.
>
> **[1:11](https://www.linkedin.com/learning/learning-bitbucket/clone-repo-to-a-local-system?u=76281980&t=71)** I'm logged into my Bitbucket account and I'm on the homepage for my private repository.
>
> **[1:16](https://www.linkedin.com/learning/learning-bitbucket/clone-repo-to-a-local-system?u=76281980&t=76)** If you're following along and you don't have a private repo, take a look at the exercise files for steps on creating one.
>
> **[1:23](https://www.linkedin.com/learning/learning-bitbucket/clone-repo-to-a-local-system?u=76281980&t=83)** I'm starting here to retrieve the URL I need for my git clone command.
>
> **[1:28](https://www.linkedin.com/learning/learning-bitbucket/clone-repo-to-a-local-system?u=76281980&t=88)** Fortunately, Bitbucket makes that really easy with its clone button on the top right of the repository homepage.
>
> **[1:37](https://www.linkedin.com/learning/learning-bitbucket/clone-repo-to-a-local-system?u=76281980&t=97)** Selecting this button opens a dialogue with a pre-populated git clone command.
>
> **[1:43](https://www.linkedin.com/learning/learning-bitbucket/clone-repo-to-a-local-system?u=76281980&t=103)** All we need to do is select the stacked squares icon to copy the clone command and the URL to the clipboard.
>
> **[1:51](https://www.linkedin.com/learning/learning-bitbucket/clone-repo-to-a-local-system?u=76281980&t=111)** Now let's go to the terminal.
>
> **[1:56](https://www.linkedin.com/learning/learning-bitbucket/clone-repo-to-a-local-system?u=76281980&t=116)** All I have to do in the terminal is paste the git clone command that I copied from Bitbucket and run the command.
>
> **[2:04](https://www.linkedin.com/learning/learning-bitbucket/clone-repo-to-a-local-system?u=76281980&t=124)** This is the first time I've connected to Bitbucket from this system, so I'll type in yes to continue connecting.
>
> **[2:12](https://www.linkedin.com/learning/learning-bitbucket/clone-repo-to-a-local-system?u=76281980&t=132)** This output is looking good.
>
> **[2:15](https://www.linkedin.com/learning/learning-bitbucket/clone-repo-to-a-local-system?u=76281980&t=135)** Let's jump into the working directory.
>
> **[2:19](https://www.linkedin.com/learning/learning-bitbucket/clone-repo-to-a-local-system?u=76281980&t=139)** And I'll use ls to see what's here.
>
> **[2:22](https://www.linkedin.com/learning/learning-bitbucket/clone-repo-to-a-local-system?u=76281980&t=142)** It's just the README file, which I expect, but just to make sure, I'll take a peek at the contents of the file.
>
> **[2:29](https://www.linkedin.com/learning/learning-bitbucket/clone-repo-to-a-local-system?u=76281980&t=149)** I'll clear the screen first and then cat out this README.
>
> **[2:34](https://www.linkedin.com/learning/learning-bitbucket/clone-repo-to-a-local-system?u=76281980&t=154)** Yep, that's the content I'm looking for.
>
> **[2:36](https://www.linkedin.com/learning/learning-bitbucket/clone-repo-to-a-local-system?u=76281980&t=156)** Now that I've cloned the repo, I can update existing files and add new ones.
>
> **[2:41](https://www.linkedin.com/learning/learning-bitbucket/clone-repo-to-a-local-system?u=76281980&t=161)** To keep the remote repository in sync, I'll need to push changes back to the repo on Bitbucket.
>
> **[2:47](https://www.linkedin.com/learning/learning-bitbucket/clone-repo-to-a-local-system?u=76281980&t=167)** We'll discuss those steps in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Bitbucket]] (8), [[Git]] (8), web (2), [[Metadata]] (1), next (1)
> **CLI Commands:** git (8), ssh (1), ls (1), make (1), cat (1)
> **Tools:** bitbucket (8), terminal (2)
> **Env Vars:** url (4), readme (2), ssh (1)
> **UI Navigation:** select the (1), go to (1)
> **Prerequisites:** set up (2)
> **Cross-References:** in the next (1)
> **Documentation:** the readme (1)

#### Use a Git workflow
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-bitbucket/use-a-git-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-bitbucket/use-a-git-workflow?u=76281980&t=0)** - [Instructor] After cloning a repo to our local system, we'll be able to work with the files, and then push the changes back to Bitbucket.
>
> **[0:08](https://www.linkedin.com/learning/learning-bitbucket/use-a-git-workflow?u=76281980&t=8)** Let's take a closer look at the workflow we'll use for this process.
>
> **[0:12](https://www.linkedin.com/learning/learning-bitbucket/use-a-git-workflow?u=76281980&t=12)** We'll be using four git commands in our workflow, git add, git commit, git push, and git status.
>
> **[0:23](https://www.linkedin.com/learning/learning-bitbucket/use-a-git-workflow?u=76281980&t=23)** After making changes in the workspace, we'll use git add to stage, or in other words, indicate which files will be included in the next commit.
>
> **[0:33](https://www.linkedin.com/learning/learning-bitbucket/use-a-git-workflow?u=76281980&t=33)** We can be selective about the files we add using file names or specific files, or even directories for batches of files inside a directory.
>
> **[0:44](https://www.linkedin.com/learning/learning-bitbucket/use-a-git-workflow?u=76281980&t=44)** If we want to add all changes in the working directory, we can use the special git add dot, where dot is the period character on your keyboard.
>
> **[0:54](https://www.linkedin.com/learning/learning-bitbucket/use-a-git-workflow?u=76281980&t=54)** After adding files, we run the git commit command.
>
> **[0:58](https://www.linkedin.com/learning/learning-bitbucket/use-a-git-workflow?u=76281980&t=58)** This creates a snapshot of all the files included in the commit along with details of the lines that were added or removed from each file.
>
> **[1:09](https://www.linkedin.com/learning/learning-bitbucket/use-a-git-workflow?u=76281980&t=69)** We'll also include an informative and descriptive message with our commit.
>
> **[1:14](https://www.linkedin.com/learning/learning-bitbucket/use-a-git-workflow?u=76281980&t=74)** This message provides some context on what was changed or added.
>
> **[1:19](https://www.linkedin.com/learning/learning-bitbucket/use-a-git-workflow?u=76281980&t=79)** We can also create multiple commits, allowing us to make additional changes before creating a new commit.
>
> **[1:27](https://www.linkedin.com/learning/learning-bitbucket/use-a-git-workflow?u=76281980&t=87)** After making changes and then adding and committing those changes, we're ready to push to the remote repo.
>
> **[1:34](https://www.linkedin.com/learning/learning-bitbucket/use-a-git-workflow?u=76281980&t=94)** Git push uploads modified files and any new files from our working directory to the remote repository.
>
> **[1:43](https://www.linkedin.com/learning/learning-bitbucket/use-a-git-workflow?u=76281980&t=103)** Git status is another handy command to use while we're adding, committing, and pushing files.
>
> **[1:50](https://www.linkedin.com/learning/learning-bitbucket/use-a-git-workflow?u=76281980&t=110)** Git status displays the current state of our local repository.
>
> **[1:55](https://www.linkedin.com/learning/learning-bitbucket/use-a-git-workflow?u=76281980&t=115)** It's going to describe the current branch that we're working on, and also compares the working directory to the corresponding branch on the remote repository.
>
> **[2:05](https://www.linkedin.com/learning/learning-bitbucket/use-a-git-workflow?u=76281980&t=125)** As a public service announcement, I'll stress that you should use git status as often as you can.
>
> **[2:11](https://www.linkedin.com/learning/learning-bitbucket/use-a-git-workflow?u=76281980&t=131)** Run it before and after any of the other commands to review changes that you've made and get ready for the next git command.
>
> **[2:21](https://www.linkedin.com/learning/learning-bitbucket/use-a-git-workflow?u=76281980&t=141)** Altogether, our push workflow looks like this.
>
> **[2:25](https://www.linkedin.com/learning/learning-bitbucket/use-a-git-workflow?u=76281980&t=145)** We make changes to existing files or add new files inside the working directory.
>
> **[2:31](https://www.linkedin.com/learning/learning-bitbucket/use-a-git-workflow?u=76281980&t=151)** Then we run git add to stage new and modified files for the next commit.
>
> **[2:38](https://www.linkedin.com/learning/learning-bitbucket/use-a-git-workflow?u=76281980&t=158)** Then we run git commit to take a snapshot of the staged files along with their changes.
>
> **[2:45](https://www.linkedin.com/learning/learning-bitbucket/use-a-git-workflow?u=76281980&t=165)** And then we run git push to upload our changes to Bitbucket.
>
> **[2:50](https://www.linkedin.com/learning/learning-bitbucket/use-a-git-workflow?u=76281980&t=170)** Of course, we'll also run git status before and after each of these steps to check the status of our working directory along the way.
>
> **[2:59](https://www.linkedin.com/learning/learning-bitbucket/use-a-git-workflow?u=76281980&t=179)** Let's use a demonstration in the next video to see this workflow in practice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (17), next (4), [[Bitbucket]] (2)
> **CLI Commands:** git (17), make (2)
> **Cross-References:** in the next (2)
> **Tools:** bitbucket (2)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### Push code to a remote repo
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=2)** - [Instructor] I'm logged into my Bitbucket account and I'm on the homepage for my private repository.
>
> **[0:07](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=7)** On the source view, we can see the files currently in the repo, the last time they were updated, and the commit message from the update.
>
> **[0:15](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=15)** And if I go to the commits tab, we can see the commits that have been recorded for this repo.
>
> **[0:22](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=22)** After we make changes on our local system, we'll come back to the web interface to see how those changes are displayed here.
>
> **[0:30](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=30)** I'm on my local system now and I'm inside the working directory for my private repo.
>
> **[0:36](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=36)** I'm going to start things out by running git status.
>
> **[0:40](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=40)** This shows that I'm on the main branch and that my branch is up to date with a remote repo.
>
> **[0:45](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=45)** There's nothing to commit and my working tree is clean.
>
> **[0:48](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=48)** That lets me know that I'm in a good state to get started, which is perfect.
>
> **[0:53](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=53)** Now let's change an existing file.
>
> **[0:56](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=56)** I'll run the date command to append a new line at the end of the README file, and now I'll create a new file by running the date command again and directing the output into newfile.txt.
>
> **[1:11](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=71)** Let's run git status again to check the current state.
>
> **[1:17](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=77)** Right away we can see that there are changes not staged for commit.
>
> **[1:21](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=81)** One of them is a modified file, the README file, and the other is an untracked file, the file that we just added.
>
> **[1:30](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=90)** Anytime git status shows a file as untracked, it means the file is new and git doesn't know anything about it.
>
> **[1:37](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=97)** The git status output is also giving us some direction to run git add so that we can proceed to the next step.
>
> **[1:44](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=104)** Let's go ahead and do that.
>
> **[1:46](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=106)** I'm going to run, git add, followed by the dot character to indicate that I want to add all changes from the workspace to the staging area.
>
> **[2:00](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=120)** There's no output from the git add command, so I'll immediately run git status, now git status shows that we have changes ready to be committed, and a new file and a modified file.
>
> **[2:14](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=134)** I'll run git commit along with a commit message, adding new files from my local system.
>
> **[2:23](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=143)** The output from git commit shows us that we have two files changed in this commit.
>
> **[2:28](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=148)** It also shows us the number of changes that are included in this commit, two insertions and one deletion.
>
> **[2:36](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=156)** This makes sense, right, because we added one new line to the README file and then added one new line to the new file.
>
> **[2:43](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=163)** Let's run git status one more time.
>
> **[2:47](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=167)** Okay, now things are a bit interesting.
>
> **[2:50](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=170)** Our local system is ahead of the remote repo, also referred to as the origin by 1 commit.
>
> **[2:58](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=178)** So to keep things synchronized, we need to upload this commit to the origin, and indeed, the output from git status gives us the command we need to run, git push.
>
> **[3:14](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=194)** The output from git push gives us some insight into the upload progress and other details of the push operation.
>
> **[3:22](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=202)** Now let's run git status one more time, and I'll clear the screen and run git status.
>
> **[3:29](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=209)** Okay, this looks a lot like when we first started.
>
> **[3:33](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=213)** We're on the main branch, our branch is up to date and there's nothing to commit, and our working tree is clean.
>
> **[3:40](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=220)** Now let's go back to the Bitbucket web interface to see what changed there.
>
> **[3:46](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=226)** I'm back in Bitbucket and I'm on the Commits page.
>
> **[3:49](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=229)** I'll press CTRL + R on my keyboard to refresh this screen, and sure enough, at the very top of this listing, we see the most recent commit.
>
> **[4:01](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=241)** Let's go to the Source tab now and see what changes were made there.
>
> **[4:07](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=247)** On this page, we can see the README file and the file that was just added, along with the commit message we used in the terminal.
>
> **[4:15](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=255)** All of these are great indicators that the remote repo has been successfully updated from the local system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (18), [[Bitbucket]] (3), web (2), next (1)
> **CLI Commands:** git (18), make (1)
> **Env Vars:** readme (4), ctrl (1)
> **Documentation:** the readme (4)
> **Tools:** bitbucket (3), terminal (1)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (1), is an  (1)
> **File Paths:** newfile.txt (1)

#### Challenge: Create a repo and add code
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-bitbucket/challenge-create-a-repo-and-add-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-bitbucket/challenge-create-a-repo-and-add-code?u=76281980&t=0)** (buoyant music)
>
> **[0:06](https://www.linkedin.com/learning/learning-bitbucket/challenge-create-a-repo-and-add-code?u=76281980&t=6)** - [Presenter] Let's use a challenge to apply what you've learned about Bitbucket.
>
> **[0:10](https://www.linkedin.com/learning/learning-bitbucket/challenge-create-a-repo-and-add-code?u=76281980&t=10)** You're part of a software development team working on a new, amazing open source application, the amazing mobile app.
>
> **[0:18](https://www.linkedin.com/learning/learning-bitbucket/challenge-create-a-repo-and-add-code?u=76281980&t=18)** The team is inviting the community to work with them and they need a cloud-based repository service to store the code.
>
> **[0:25](https://www.linkedin.com/learning/learning-bitbucket/challenge-create-a-repo-and-add-code?u=76281980&t=25)** The team is asking you to configure Bitbucket so the community can add files to the application.
>
> **[0:32](https://www.linkedin.com/learning/learning-bitbucket/challenge-create-a-repo-and-add-code?u=76281980&t=32)** However, they also need to work with some files separately and discreetly away from the application's code base.
>
> **[0:40](https://www.linkedin.com/learning/learning-bitbucket/challenge-create-a-repo-and-add-code?u=76281980&t=40)** Log into Bitbucket and create a new workspace, in the new workspace create a project named, "amazing," with two repositories.
>
> **[0:50](https://www.linkedin.com/learning/learning-bitbucket/challenge-create-a-repo-and-add-code?u=76281980&t=50)** The first repo should be named, "community."
>
> **[0:53](https://www.linkedin.com/learning/learning-bitbucket/challenge-create-a-repo-and-add-code?u=76281980&t=53)** This repo should be visible to anyone with the URL.
>
> **[0:57](https://www.linkedin.com/learning/learning-bitbucket/challenge-create-a-repo-and-add-code?u=76281980&t=57)** The second repo should be named, "team," and should only be visible by members of the team.
>
> **[1:04](https://www.linkedin.com/learning/learning-bitbucket/challenge-create-a-repo-and-add-code?u=76281980&t=64)** Clone both repos to your local system and add a markdown file named, "CONTRIBUTING.md," to each repo.
>
> **[1:12](https://www.linkedin.com/learning/learning-bitbucket/challenge-create-a-repo-and-add-code?u=76281980&t=72)** Push the files back to Bitbucket with the commit message, "Repo is ready."
>
> **[1:17](https://www.linkedin.com/learning/learning-bitbucket/challenge-create-a-repo-and-add-code?u=76281980&t=77)** You'll find all of the challenge details in the exercise files.
>
> **[1:22](https://www.linkedin.com/learning/learning-bitbucket/challenge-create-a-repo-and-add-code?u=76281980&t=82)** This challenge should take about 15 minutes to complete.
>
> **[1:25](https://www.linkedin.com/learning/learning-bitbucket/challenge-create-a-repo-and-add-code?u=76281980&t=85)** Give it a try and then join me in the next video for the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Bitbucket]] (4), application (3), [[Software Development]] (1), cloud (1), next (1)
> **Tools:** bitbucket (4)
> **Env Vars:** url (1), contributing (1)
> **File Paths:** contributing.md (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** configure (1)

#### Solution: Create a repo and add code
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=0)** - [Instructor] Okay, it is time to apply some of the skills that we've learned so far, and this is the challenge where we're going to make that happen.
>
> **[0:13](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=13)** We're going to set up a Bitbucket workspace, add a project, create two repositories, those repositories need to have specific visibilities, and then we're going to add some files and push those files back to Bitbucket.
>
> **[0:27](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=27)** Let's get started on this solution.
>
> **[0:30](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=30)** Okay, I'm starting from my Workspace page and from here I'm going to click Create workspace, and I'll give this a globally unique name since this is for the amazing mobile app, I'll call this one amazing-workspace-9,000.
>
> **[0:49](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=49)** I do want this workspace to be public, so I'll uncheck the option to keep this workspace private.
>
> **[0:55](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=55)** And yes, Bitbucket, I am not a robot, so I'll select that as well and then click Create.
>
> **[1:06](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=66)** Okay, we have our workspace, and right away I can start creating the repositories, and I'll do that with this lovely button that we have here, Create repository.
>
> **[1:16](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=76)** I don't have a project yet in this workspace, so I'm prompted to create a project name.
>
> **[1:21](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=81)** And I believe in the challenge we are required to call this project amazing.
>
> **[1:28](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=88)** For the repository name, we have two repositories that we need to create the team and the community.
>
> **[1:34](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=94)** I'll start with the team repository because this repository, we want to be exclusive to the team, that which means we want it to be private.
>
> **[1:43](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=103)** So, I'm going to leave this Private repository option selected, and I'll click Create repository.
>
> **[1:53](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=113)** Okay, with that repository in place, we'll go on to the next one and I'll select Create, Repository again.
>
> **[2:01](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=121)** This time, since I have a project, I don't have to create one, I can just select one that already exists, which is the amazing project.
>
> **[2:10](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=130)** And then this will be the community repo, so I'll add in here community.
>
> **[2:15](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=135)** I'm just going to select this one that I've already got in here.
>
> **[2:18](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=138)** And for this one, we want it to be public so that members of the community can see it.
>
> **[2:23](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=143)** So, indeed we don't want it to be private.
>
> **[2:26](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=146)** I will unselect the option to create it as a private repository and then select Create repository.
>
> **[2:36](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=156)** Okay, we have both of our repositories created.
>
> **[2:40](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=160)** Let's just take a a step right here, just a little break to make sure that these repositories meet their visibility requirements.
>
> **[2:48](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=168)** The team repository has this little lock icon right next to the icon, which is a good indicator for us to know that this is indeed a private repository.
>
> **[2:58](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=178)** The community repository does not have that lock icon on its little square, so we know that this is a public repository, so we're all good there.
>
> **[3:10](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=190)** Let's clone these repositories to the local system.
>
> **[3:13](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=193)** I'll start with the community repository.
>
> **[3:16](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=196)** I'll drop in there and then I'll select this button Clone, and I'll just copy these or click the stacked squares icon here that copies that Git URL and the get clone command to my clipboard, and now I'll go to my terminal.
>
> **[3:33](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=213)** Okay, I'm in the terminal now and all I need to do is paste in that lovely command that I copied, and I get that clone command automatically, I'm cloning the repo in the community, and everything looks good there.
>
> **[3:45](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=225)** Let's go back and do the same thing for the team repo.
>
> **[3:52](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=232)** Okay, I'm in the team repo, and from here I'm going to select Clone, and then click those stacked squares to copy that to my clipboard and go to the terminal.
>
> **[4:03](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=243)** And once again, back in the terminal, I'm just going to paste here and clone that team repo.
>
> **[4:10](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=250)** Okay, I've got both these repos cloned down, let's clear the screen here and I'll just do a ls here.
>
> **[4:16](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=256)** There are my two repos.
>
> **[4:18](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=258)** Now, I can start with the next sort of phase in the task that we're asked to complete for this challenge, which is adding a file, a markdown file, to each of these repositories.
>
> **[4:30](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=270)** And I'll start with the community repository, so I'll cd into the community repo.
>
> **[4:35](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=275)** And we're asked to create a file called CONTRIBUTING.
>
> **[4:39](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=279)** So, I'll start editing a file, vim CONTRIBUTING.md.
>
> **[4:46](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=286)** And we just need to add a header here, so I'll add CONTRIBUTING as the title.
>
> **[4:54](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=294)** And I'll save that.
>
> **[4:55](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=295)** So, now we can really start our Git workflow, right?
>
> **[4:58](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=298)** The first thing that I need to do is add this file, but before we even do that, let's check git status.
>
> **[5:04](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=304)** Okay, there's one untracked file there, which we would expect.
>
> **[5:08](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=308)** This is the only file that I've worked on in this repo.
>
> **[5:11](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=311)** So, I will git add . just to get everything.
>
> **[5:15](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=315)** And let's clear the screen and do a get status again.
>
> **[5:19](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=319)** Okay, I've got a new file that's ready to be committed, let's go ahead and commit this guy.
>
> **[5:26](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=326)** And we were given a specific commit message to add, and I believe it was repo is ready, so we'll use that.
>
> **[5:36](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=336)** Okay, one file change.
>
> **[5:37](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=337)** Let's do git status one more time.
>
> **[5:40](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=340)** Okay, our branch is ahead of main by one commit, that's what we expect.
>
> **[5:44](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=344)** Let's go ahead and push this change.
>
> **[5:51](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=351)** Okay, that push looks good.
>
> **[5:53](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=353)** So, what I'm going to do now is the same steps over in the team repository.
>
> **[6:00](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=360)** Okay, I've made the same changes in the team repository that I made in the community repository.
>
> **[6:06](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=366)** And by that I mean I've added CONTRIBUTING.md, I added that header that we're supposed to add there, and then I ran git add to get that file ready to be committed.
>
> **[6:16](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=376)** Git commit, I ran that command with the requisite message repo is ready, and then I pushed that file back up to Bitbucket.
>
> **[6:24](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=384)** So, let's go over to the Bitbucket web interface to see these changes.
>
> **[6:34](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=394)** Okay, I'm back in Bitbucket now, and I'm just going to refresh the page here on the team repository to see the changes.
>
> **[6:41](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=401)** Okay, there's my CONTRIBUTING file, it's got the commit message repo is ready.
>
> **[6:46](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=406)** And if I look in this file, there's the header, that's exactly what I expect.
>
> **[6:50](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=410)** And it's going to be the same thing over in the community repo as well.
>
> **[6:55](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=415)** So, let's just very quickly review the changes that we made.
>
> **[7:02](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=422)** Okay, reviewing our solution from the Workspace page, we created a workspace for the amazing mobile app.
>
> **[7:09](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=429)** And I'll dive into that workspace where we created two repositories: one for the team that is private, one for the community which is public.
>
> **[7:20](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=440)** And if I go to the Repositories view, I can see that the team repository is indeed public, it's got that little lock icon there.
>
> **[7:28](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=448)** The community project does not have the lock icon, so we know that one is publicly visible, and both of these are part of the amazing project.
>
> **[7:38](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=458)** And if I go into the community repository, I can see that I added the CONTRIBUTING.md file with the requisite commit message repo is ready.
>
> **[7:47](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=467)** And inside that file, we've got that header that shows CONTRIBUTING, and that this file is exactly in the state that was requested from the challenge task.
>
> **[7:58](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=478)** So, after reviewing all of that, I believe that this challenge has been solved successfully.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (7), [[Bitbucket]] (6), next (3), cd (1), web (1)
> **CLI Commands:** git (7), make (2), ls (1), cd (1)
> **Tools:** bitbucket (6), terminal (4), vim (1)
> **Env Vars:** contributing (7), url (1)
> **File Paths:** contributing.md (3)
> **UI Navigation:** go to (3)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (1), required to (1)


### 2. Working with Branches and Pull Requests

[↑ Back to Table of Contents](#table-of-contents)

#### Create a branch
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=0)** - We've gotten some experience with Bitbucket by setting up workspaces, creating files in the web interface, and cloning repositories using the command line.
>
> **[0:09](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=9)** Now let's move on to the next step. Working with branches.
>
> **[0:14](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=14)** Branches are pointers to specific commits in a repository's history.
>
> **[0:18](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=18)** Branches are used to isolate work on new features, fix bugs, or run experiments without affecting the primary code base.
>
> **[0:28](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=28)** The superpower a branch gives us is the ability to work on the same files that others might be working on at the exact same time, all without stepping on each other's work.
>
> **[0:40](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=40)** Overall, branches provide a way to make changes while maintaining a clean and stable code base for production deployments.
>
> **[0:49](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=49)** We've already seen one branch, the main branch.
>
> **[0:53](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=53)** We can visualize the main branch as a line, with each commit represented as a dot on the line.
>
> **[1:00](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=60)** In this way, we can consider a branch to be a pointer to a specific commit in a repository's history.
>
> **[1:08](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=68)** We can create branches from commits on the main branch.
>
> **[1:13](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=73)** As we push new or modified files to the branch, new commits are added.
>
> **[1:20](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=80)** Once the work is complete and verified, branches are merged back into the main branch.
>
> **[1:26](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=86)** The point created when two branches are merged is called a merge commit.
>
> **[1:31](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=91)** To keep things organized, branches are given names.
>
> **[1:36](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=96)** Commonly, branches are named according to the reason why the branch was created.
>
> **[1:41](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=101)** The most common naming convention is to use a specific identifier as a prefix to the branch name followed by a slash.
>
> **[1:50](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=110)** Some of the most popular branch prefixes are bugfix, feature, hotfix, and release.
>
> **[1:59](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=119)** Bugfix branches are used to isolate and address specific bugs within the code base.
>
> **[2:05](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=125)** This allows developers to work on fixing problems without disrupting anything that is working as expected.
>
> **[2:12](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=132)** Feature branches let developers work on enhancements.
>
> **[2:16](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=136)** Any updates are kept separate from the main code base until the feature is complete and ready for integration.
>
> **[2:24](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=144)** Hotfix branches are used to address critical issues in the production environment.
>
> **[2:29](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=149)** Like bugfix and feature branches, hotfix branches keep changes to the side to keep from disrupting any ongoing development.
>
> **[2:39](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=159)** Release branches are probably the most calm of all branch types.
>
> **[2:44](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=164)** Release branches are used for final testing and planning before making code available to use in a production environment.
>
> **[2:52](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=172)** Let's continue discussing branches in the Bitbucket web interface.
>
> **[2:58](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=178)** I'm logged into my Bitbucket account and I'm on the homepage for my public repository.
>
> **[3:03](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=183)** Viewing the source page, I can see the files that are currently in the repo on the main branch.
>
> **[3:08](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=188)** To create a new branch, I'll select Branches and then Create branch.
>
> **[3:17](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=197)** In this dialog, I can select the type of branch I want to create.
>
> **[3:22](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=202)** This is where I would select Bugfix, Feature, Hotfix, or Release.
>
> **[3:29](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=209)** And depending on which one I select, Bitbucket will automatically add the correct prefix for my branch name.
>
> **[3:35](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=215)** Thanks, Bitbucket!
>
> **[3:38](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=218)** I can also select a branch to use as the source of the branch I'm creating.
>
> **[3:42](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=222)** This repo only has one branch at the moment, but if I had other branches, I could use one of those branches as a source too.
>
> **[3:53](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=233)** Now, I can enter my branch name.
>
> **[3:55](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=235)** I'll call this branch change the world.
>
> **[4:00](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=240)** With the source branch selected and the name entered, Bitbucket provides us with a nice graphic, visualizing the branch we're about to create.
>
> **[4:08](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=248)** I'll select the Create button to kick that process off.
>
> **[4:12](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=252)** From this page, I'll select View source.
>
> **[4:16](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=256)** This takes us directly to a view of the repo with the branch selected.
>
> **[4:20](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=260)** Right now, all of the files are the same as what we saw on the main branch.
>
> **[4:24](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=264)** Let's add this feature that will change the world.
>
> **[4:27](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=267)** I'll select the hello-world script and then I'll select Edit.
>
> **[4:34](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=274)** I'm editing the script now and I appreciate the friendly reminder of the file and branch that I'm working on.
>
> **[4:41](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=281)** I'll change World to Planet.
>
> **[4:44](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=284)** That way, this script can be universal and anyone anywhere in the galaxy can use it.
>
> **[4:50](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=290)** Okay, let's view the diff to see precisely what was changed.
>
> **[4:56](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=296)** Okay, that's looking good.
>
> **[4:58](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=298)** That's what I wanted to change, so I'll commit this change.
>
> **[5:02](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=302)** And for my commit message, I'll enter "change world to planet" and I'll select Commit one more time.
>
> **[5:12](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=312)** Okay, this commit is official.
>
> **[5:14](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=314)** We've created a branch and committed code, using the Bitbucket web interface.
>
> **[5:19](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=319)** In the next video, let's work with this same branch by pushing code to it from the command line.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Bitbucket]] (7), feature (6), web (3), next (2)
> **Tools:** bitbucket (7), command line (2)
> **UI Navigation:** select the (3)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Definitions:** is called (1)
> **Speakers:** - we (1)

#### Push code to a branch
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=1)** - [Instructor] We've seen how we can create a branch in the Bitbucket Web UI.
>
> **[0:04](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=4)** Now let's check out a branch to our local system and push code back to the same branch on Bitbucket.
>
> **[0:11](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=11)** When we're working with branches locally, we'll start by running Git Pull, this downloads any remote changes to the local repository on the main branch.
>
> **[0:21](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=21)** Then we'll run the get checkout Command.
>
> **[0:24](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=24)** Checkout is used to switch between branches.
>
> **[0:27](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=27)** Most importantly, git checkout updates our working directory to track changes in the selected branch.
>
> **[0:34](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=34)** This means any commits that we create will be added to the branch we're currently working on.
>
> **[0:40](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=40)** If we've checked out multiple branches, we can use the git branch command to list all the branches that are available on the system.
>
> **[0:47](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=47)** And then we'll use commands from the Git workflow to check status, add and commit the changes we've made and push our local changes back to Bitbucket.
>
> **[0:57](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=57)** Let's start this workflow in the web interface.
>
> **[1:01](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=61)** I'm logged into my Bitbucket account and I'm viewing the branches for my public repo.
>
> **[1:06](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=66)** I'm working with the Change the World feature branch, so I'll select that one.
>
> **[1:12](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=72)** On this page, I'll select checkout.
>
> **[1:16](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=76)** This gives me the precise command I need to start working with this branch on my local system, I'll select the Stack Squares icon to copy it.
>
> **[1:25](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=85)** And now I'll go to the terminal.
>
> **[1:28](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=88)** I've already cloned the public repo to my local system, and if I run Git Status here, I can see that my working directory is currently following the main branch.
>
> **[1:40](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=100)** I'll also run Git Branch, which shows that main is the only branch available.
>
> **[1:47](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=107)** Before I get started, I'll run Git Pull to make sure my local repo is up to date with the remote repo.
>
> **[1:57](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=117)** Now I'll paste the checkout command that I copied from Bitbucket.
>
> **[2:08](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=128)** Now let's clear the screen and run Git Status one more time and git branch.
>
> **[2:16](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=136)** Sure enough, Git Status shows me that the working directory is now following the feature branch for Change the World and the output from Git branch shows branches available.
>
> **[2:28](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=148)** Another helpful bit from the git branch output is the asterisk next to the currently selected branch.
>
> **[2:34](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=154)** To complete my Change the World feature, I want to rename the Hello World Script to Hello Planet.
>
> **[2:40](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=160)** I can do that easily on my Mac OS command line with the move command.
>
> **[2:51](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=171)** If you're following along on another operating system, take a look at the exercise files for details on how to rename the file.
>
> **[2:58](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=178)** Now let's run Git Status.
>
> **[3:03](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=183)** This is exactly what we want.
>
> **[3:06](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=186)** The Hello World file is gone and the Hello Planet file is untracked.
>
> **[3:11](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=191)** Before we move on, let's test the change.
>
> **[3:17](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=197)** Awesome.
>
> **[3:18](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=198)** Looks good to me.
>
> **[3:19](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=199)** Let's make a commit to capture our hard work.
>
> **[3:22](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=202)** I'll clear the screen and run git add .
>
> **[3:27](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=207)** and then git status and now I'll run, git commit with the message "rename the file" Our commit is ready to go, but let's check git status one more time.
>
> **[3:48](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=228)** Okay, we're ready to run, git push.
>
> **[3:55](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=235)** All right, we're all done in the terminal, let's go back to the Bitbucket web interface.
>
> **[4:04](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=244)** I'm still on the page for the branch I've been working on, so I'll just reload this page.
>
> **[4:13](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=253)** This shows a record of all the commits that were made on this branch, including changing World to Planet and renaming the file.
>
> **[4:28](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=268)** But right now, the changes are only on this branch.
>
> **[4:32](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=272)** In the next video, let's discuss pull requests and how we can use a PR to collaborate on changes and merge code into the main branch.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (18), [[Bitbucket]] (6), web (3), feature (3), next (2)
> **CLI Commands:** git (18), make (2)
> **Tools:** bitbucket (6), terminal (2), command line (1)
> **Cross-References:** go back to (1), in the next (1)
> **UI Navigation:** select the (1), go to (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Create a Pull request
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=1)** - [Host] Pull requests are a key feature to GIT based version control systems.
>
> **[0:05](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=5)** More often than not, the term pull request is abbreviated as PR.
>
> **[0:11](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=11)** A pull request is essentially a request to merge changes from one branch into another branch.
>
> **[0:19](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=19)** Usually the changes are coming from a branch containing a new feature or a bug fix.
>
> **[0:25](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=25)** The request is to merge those changes into the primary code base, pull requests, create a special checkpoint for collaboration in the software development process.
>
> **[0:37](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=37)** Working with PRs team members can review changes, provide feedback, and lend support to code quality.
>
> **[0:47](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=47)** Each of these points help make sure the primary code base remains as bug free as possible.
>
> **[0:54](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=54)** When we use pull requests in our workflow, we start by creating a branch to hold the changes.
>
> **[1:00](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=60)** As we discussed in the previous lessons, branches let us experiment and mess around outside of the primary code base so we don't break anything.
>
> **[1:10](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=70)** Once we're satisfied with our changes on the branch, we create a request to merge the changes into the main branch.
>
> **[1:17](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=77)** This is our PR.
>
> **[1:19](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=79)** Bitbucket will do a fine job of tracking the commits and files involved in the PR.
>
> **[1:24](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=84)** It's up to us to add a descriptive title and message for our PR so anyone that sees it will understand the purpose or context for the changes.
>
> **[1:35](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=95)** Once the PR is in place, other members of the team can review the changes and submit their feedback.
>
> **[1:42](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=102)** This is where the collaboration really comes into play with the team, engaging in discussions on how the code is perfect and should be merged right away, or in some cases might need some updates before being reviewed again.
>
> **[1:56](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=116)** Some PRs might stay in this stage for a while until the team concludes that everything is perfect, what the wonderful phrase looks good to me.
>
> **[2:05](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=125)** In some cases, PRs also need to be approved after being reviewed.
>
> **[2:11](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=131)** Once the approval is in place, the PR can be merged and the target branch is updated with all the changes.
>
> **[2:18](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=138)** Let's open Bitbucket and walk through a pull request workflow.
>
> **[2:23](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=143)** I'm logged into my Bitbucket account and I'm viewing the branches for my public repo.
>
> **[2:27](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=147)** I've been working on the change the world feature branch, so I'll select that one, and from this page I'll select create pull request.
>
> **[2:39](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=159)** This opens a dialogue where we can capture all the details we want to share with this PR.
>
> **[2:45](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=165)** The source and destination branches are already selected, so no changes are needed there.
>
> **[2:51](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=171)** The title is automatically filled, but we can change it to something more meaningful.
>
> **[3:00](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=180)** We can also provide a description.
>
> **[3:02](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=182)** I like what they have already, but I'll add a bit more context.
>
> **[3:06](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=186)** How about mentioning how these changes make the script more inclusive for the entire universe?
>
> **[3:33](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=213)** If other developers were working in this repo, I could use this ad reviewer's option to tag someone.
>
> **[3:39](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=219)** This would prompt them to take a look at my changes and provide feedback.
>
> **[3:43](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=223)** But for this one, I'm going solo.
>
> **[3:45](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=225)** We can also keep the repo organized by deleting branches after they're merged.
>
> **[3:49](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=229)** I'll select that option for sure.
>
> **[3:53](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=233)** All I need to do now is create this PR.
>
> **[3:59](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=239)** Now that the PR is created, we're provided with a location to track the conversation around the changes.
>
> **[4:05](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=245)** If I had a reviewer, they could use this page to find all the files included in the PR, what changes or additions were made, and most importantly, they can leave their feedback in the comment section.
>
> **[4:17](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=257)** I'll add a comment just for kicks.
>
> **[4:19](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=259)** The ever popular looks good to me.
>
> **[4:31](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=271)** Reviewers can also provide a final stamp of approval.
>
> **[4:35](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=275)** Since I'm working solo on this one, I'll have to approve it myself.
>
> **[4:42](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=282)** Okay, the PR has been reviewed and approved.
>
> **[4:45](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=285)** The last step is to merge it.
>
> **[4:48](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=288)** Selecting the merge button opens one more dialogue where we can confirm the change and much like a regular commit, we can also add a commit message.
>
> **[4:58](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=298)** I'll keep the default message and proceed with this merge.
>
> **[5:09](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=309)** Now that the merge is complete, let's go to the commits tab.
>
> **[5:15](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=315)** From here we can look back at all the commits and the repos history.
>
> **[5:19](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=319)** We also get a nice graphical view of the feature branch commits and the merge commit created by the pool request.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** feature (4), [[Bitbucket]] (3), [[Git]] (1), [[Version Control]] (1), [[Software Development]] (1)
> **CLI Commands:** make (2), git (1), find (1)
> **Tools:** bitbucket (3)
> **Env Vars:** git (1)
> **Cross-References:** we discussed (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [host] (1)

#### Challenge: Create and merge a Pull request
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-bitbucket/challenge-create-and-merge-a-pull-request?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-bitbucket/challenge-create-and-merge-a-pull-request?u=76281980&t=0)** (bright techno music)
>
> **[0:07](https://www.linkedin.com/learning/learning-bitbucket/challenge-create-and-merge-a-pull-request?u=76281980&t=7)** - [Instructor] Let's use another challenge to practice what you've learned about Bitbucket.
>
> **[0:11](https://www.linkedin.com/learning/learning-bitbucket/challenge-create-and-merge-a-pull-request?u=76281980&t=11)** In the previous challenge, you configured Bitbucket for the amazing mobile app, creating two repositories; one for open source development and another for the team's internal files.
>
> **[0:22](https://www.linkedin.com/learning/learning-bitbucket/challenge-create-and-merge-a-pull-request?u=76281980&t=22)** Now, let's test your Bitbucket skills again.
>
> **[0:25](https://www.linkedin.com/learning/learning-bitbucket/challenge-create-and-merge-a-pull-request?u=76281980&t=25)** As the Bitbucket expert for the team, you've been given another task.
>
> **[0:29](https://www.linkedin.com/learning/learning-bitbucket/challenge-create-and-merge-a-pull-request?u=76281980&t=29)** Demonstrate how the team should review updates to a repo by using branches and pull requests.
>
> **[0:35](https://www.linkedin.com/learning/learning-bitbucket/challenge-create-and-merge-a-pull-request?u=76281980&t=35)** The requirements for completing this challenge are available in the exercise files, but let's take a moment to review them now.
>
> **[0:42](https://www.linkedin.com/learning/learning-bitbucket/challenge-create-and-merge-a-pull-request?u=76281980&t=42)** Log into Bitbucket and locate the workspace and project you created in the previous challenge.
>
> **[0:49](https://www.linkedin.com/learning/learning-bitbucket/challenge-create-and-merge-a-pull-request?u=76281980&t=49)** Add a feature branch to the community repository named pull-request-demo.
>
> **[0:55](https://www.linkedin.com/learning/learning-bitbucket/challenge-create-and-merge-a-pull-request?u=76281980&t=55)** Update the file, contributing.md, to include a message stating that all contributions to the repo should be added to a new branch and submitted as a pull request.
>
> **[1:06](https://www.linkedin.com/learning/learning-bitbucket/challenge-create-and-merge-a-pull-request?u=76281980&t=66)** Save your changes to the branch, and create a pull request, review the request, and then merge the request into the main branch.
>
> **[1:14](https://www.linkedin.com/learning/learning-bitbucket/challenge-create-and-merge-a-pull-request?u=76281980&t=74)** This challenge should take about 15 minutes to complete.
>
> **[1:18](https://www.linkedin.com/learning/learning-bitbucket/challenge-create-and-merge-a-pull-request?u=76281980&t=78)** I know you'll do great with this one.
>
> **[1:20](https://www.linkedin.com/learning/learning-bitbucket/challenge-create-and-merge-a-pull-request?u=76281980&t=80)** Take a shot, then join me in the next video to review the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Bitbucket]] (5), feature (1), next (1)
> **Tools:** bitbucket (5)
> **File Paths:** contributing.md (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright techno music) (1)

#### Solution: Create and merge a Pull request
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=0)** - [Instructor] Yes, you know what that theme music means, it's time for another challenge.
>
> **[0:11](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=11)** And this time we're going to be using the skills that we just learned with Bitbucket using branches and pull requests.
>
> **[0:19](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=19)** So, the task for this challenge, we're going to use some of the repos that we set up in the previous challenge, and we're going to create a branch in the community repo, we're going to update the CONTRIBUTING.md file on that branch, and then we're going to merge those changes back into the main branch.
>
> **[0:37](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=37)** Let's go ahead and get started with that.
>
> **[0:41](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=41)** I'm starting on the Repository view for my amazing Workspace 9,000 workspace, and I'm going to select the community repo, which is where we're making these changes.
>
> **[0:52](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=52)** And then, I'll go to the Branches tab and select Create a branch.
>
> **[0:58](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=58)** I want this to be a feature branch so I will select feature.
>
> **[1:03](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=63)** And then, I think we were given a name for this challenge, it was called pull-request-demo.
>
> **[1:11](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=71)** Okay, with that in place, I'll select Create.
>
> **[1:17](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=77)** And then from our Branch page, I'm going to select View source.
>
> **[1:22](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=82)** And I'm editing CONTRIBUTING.md, which is right here, so I'll select that guy and then I'll click Edit.
>
> **[1:30](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=90)** And another good thing to note from this page, it tells us exactly the file that we're editing and which branch we're working on.
>
> **[1:37](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=97)** So, thank you, Bitbucket, for helping us know exactly where we are and stay on track.
>
> **[1:44](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=104)** So, the content that we're supposed to add here, there's a very specific message that we need to add to this contributing file.
>
> **[1:50](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=110)** And I'm just going to go back to the exercise files and copy it from there.
>
> **[1:55](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=115)** So, over in the exercise files, I'm going to click the stacked squares next to the message that we got to put into this file, and then I'll go back to Bitbucket and just paste it in.
>
> **[2:08](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=128)** All right, in Bitbucket, I want to select this 'cause I think we're replacing this as well.
>
> **[2:12](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=132)** And then, I'll just paste all of that in.
>
> **[2:15](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=135)** That looks perfect to me, but just to make sure, let's Preview it.
>
> **[2:20](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=140)** Okay, that is official.
>
> **[2:22](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=142)** It's exactly what we need to add to this contributing file, so I'll go ahead and select Commit.
>
> **[2:29](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=149)** Now, part of our instructions were to not create a pull request from this page.
>
> **[2:35](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=155)** We are given an option to create a pull request, but if we create a pull request from here, we're actually using the feature branch that we're already on as the source branch for our pull request, which is not what we want to do.
>
> **[2:49](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=169)** We want to merge back into the main branch, and we'll do that in a separate pull request screen.
>
> **[2:54](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=174)** So, what we want to do here is just we can add a commit message.
>
> **[2:58](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=178)** This one's fine for me, so I'll just select Commit.
>
> **[3:06](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=186)** Okay, our commit is in place, let's go on to the next step where we create a pull request.
>
> **[3:13](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=193)** And I'll start here, Pull requests, and then Create pull request.
>
> **[3:19](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=199)** Okay, on this screen we can add the title and the description.
>
> **[3:23](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=203)** I don't think there was anything specific that we needed to add here.
>
> **[3:27](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=207)** So, honestly, I'm just going to select or just keep all the defaults here.
>
> **[3:32](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=212)** And well, the one thing I will do is just to keep the repo clean, I'm going to select Delete the branch, and then I'll select Create pull request.
>
> **[3:41](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=221)** Okay, everything looks good here.
>
> **[3:45](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=225)** And so, right away because everything does look good, I can see the changes are exactly what we wanted, I'm going to Approve this and Merge it right away.
>
> **[3:57](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=237)** Closing the source branch is exactly what we want, we want that merge commit as well so I'll go ahead and click Merge.
>
> **[4:06](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=246)** Okay, the merge request is complete and everything looks good.
>
> **[4:10](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=250)** But just to make sure, what we can do is go over to the Commits page and we can see this nice little graphic that shows where we started on our main branch.
>
> **[4:19](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=259)** We created this feature branch, that's that little commit dot over there, and then we have this merge commit here where everything was merged in from the feature branch back into the main branch.
>
> **[4:30](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=270)** So, looking at this screen and confirming everything is in place, I believe this challenge has been successfully completed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** feature (5), [[Bitbucket]] (4), next (2)
> **Tools:** bitbucket (4)
> **File Paths:** contributing.md (2)
> **CLI Commands:** make (2)
> **Env Vars:** contributing (2)
> **Cross-References:** go back to (2)
> **UI Navigation:** select the (1), go to (1)
> **Exercise Files:** exercise files (2)


### 3. Working with Jira Cloud

[↑ Back to Table of Contents](#table-of-contents)

#### Manage Projects with Jira and Bitbucket
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-bitbucket/manage-projects-with-jira-and-bitbucket?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-bitbucket/manage-projects-with-jira-and-bitbucket?u=76281980&t=1)** - So far, you've learned how Bitbucket provides a service for managing Git repositories in the cloud.
>
> **[0:07](https://www.linkedin.com/learning/learning-bitbucket/manage-projects-with-jira-and-bitbucket?u=76281980&t=7)** Now let's take a look at Jira, a project management platform that helps teams track, organize, and manage their work.
>
> **[0:14](https://www.linkedin.com/learning/learning-bitbucket/manage-projects-with-jira-and-bitbucket?u=76281980&t=14)** With Jira and Bitbucket both being produced by Atlassian, we can get these tools working together easily.
>
> **[0:21](https://www.linkedin.com/learning/learning-bitbucket/manage-projects-with-jira-and-bitbucket?u=76281980&t=21)** Let's see how we can manage software development projects with Jira and Bitbucket.
>
> **[0:27](https://www.linkedin.com/learning/learning-bitbucket/manage-projects-with-jira-and-bitbucket?u=76281980&t=27)** Jira is a popular project management tool for tracking issues, features, and bugs through all stages of the software development lifecycle.
>
> **[0:37](https://www.linkedin.com/learning/learning-bitbucket/manage-projects-with-jira-and-bitbucket?u=76281980&t=37)** Jira is highly customizable, allowing teams to create workflows that map to a variety of project management methodologies, including Agile, Scrum, and Kanban.
>
> **[0:49](https://www.linkedin.com/learning/learning-bitbucket/manage-projects-with-jira-and-bitbucket?u=76281980&t=49)** These and other project management methodologies take projects and break them up into smaller units of work, known as issues, tasks, or stories.
>
> **[0:59](https://www.linkedin.com/learning/learning-bitbucket/manage-projects-with-jira-and-bitbucket?u=76281980&t=59)** These slices of a project are the units we use to track work in Jira.
>
> **[1:06](https://www.linkedin.com/learning/learning-bitbucket/manage-projects-with-jira-and-bitbucket?u=76281980&t=66)** Each task or issue can be assigned, categorized, and then tracked through various stages of completion, including To-Do, In Progress, and Done.
>
> **[1:18](https://www.linkedin.com/learning/learning-bitbucket/manage-projects-with-jira-and-bitbucket?u=76281980&t=78)** More Complex projects might include other states, but these three are the most common.
>
> **[1:24](https://www.linkedin.com/learning/learning-bitbucket/manage-projects-with-jira-and-bitbucket?u=76281980&t=84)** For software development, we can connect Jira projects to the repositories where the work is being done.
>
> **[1:32](https://www.linkedin.com/learning/learning-bitbucket/manage-projects-with-jira-and-bitbucket?u=76281980&t=92)** Integrating Jira with Bitbucket enhances the software development process by linking code changes directly to their corresponding tasks.
>
> **[1:41](https://www.linkedin.com/learning/learning-bitbucket/manage-projects-with-jira-and-bitbucket?u=76281980&t=101)** For example, we can link to Jira Issues in Commit Messages.
>
> **[1:45](https://www.linkedin.com/learning/learning-bitbucket/manage-projects-with-jira-and-bitbucket?u=76281980&t=105)** We can also automate task updates by creating emerging Pull Requests.
>
> **[1:51](https://www.linkedin.com/learning/learning-bitbucket/manage-projects-with-jira-and-bitbucket?u=76281980&t=111)** This seamless integration ensures that all aspects of software development and project management are connected.
>
> **[1:59](https://www.linkedin.com/learning/learning-bitbucket/manage-projects-with-jira-and-bitbucket?u=76281980&t=119)** The end result is better communication and transparency across the project.
>
> **[2:05](https://www.linkedin.com/learning/learning-bitbucket/manage-projects-with-jira-and-bitbucket?u=76281980&t=125)** But this is a Bitbucket course after all, right?
>
> **[2:08](https://www.linkedin.com/learning/learning-bitbucket/manage-projects-with-jira-and-bitbucket?u=76281980&t=128)** So we won't be going into all of the project management awesomeness that Jira possesses, but if you search for Jira in the LinkedIn Learning Library, you'll find dozens of courses to choose from.
>
> **[2:19](https://www.linkedin.com/learning/learning-bitbucket/manage-projects-with-jira-and-bitbucket?u=76281980&t=139)** I've updated the exercise files with links to a few recommendations including Learning Jira, [[Jira- Basic Administration]], and Managing Custom Workflows.
>
> **[2:29](https://www.linkedin.com/learning/learning-bitbucket/manage-projects-with-jira-and-bitbucket?u=76281980&t=149)** For now, let's take a look at an example of using Jira and Bitbucket together.
>
> **[2:34](https://www.linkedin.com/learning/learning-bitbucket/manage-projects-with-jira-and-bitbucket?u=76281980&t=154)** We'll start with Margaret, a project manager using Jira to track work on a web application.
>
> **[2:40](https://www.linkedin.com/learning/learning-bitbucket/manage-projects-with-jira-and-bitbucket?u=76281980&t=160)** Margaret creates an issue to add a new feature to the application and assigns it to Kelvin, one of the developers on the team.
>
> **[2:47](https://www.linkedin.com/learning/learning-bitbucket/manage-projects-with-jira-and-bitbucket?u=76281980&t=167)** Kelvin uses the Jira issue to create a new branch in the repo associated with the project.
>
> **[2:53](https://www.linkedin.com/learning/learning-bitbucket/manage-projects-with-jira-and-bitbucket?u=76281980&t=173)** This is where he'll track the changes for the new feature.
>
> **[2:56](https://www.linkedin.com/learning/learning-bitbucket/manage-projects-with-jira-and-bitbucket?u=76281980&t=176)** Once Kelvin creates the branch, the issue is moved from To-Do to In Progress.
>
> **[3:01](https://www.linkedin.com/learning/learning-bitbucket/manage-projects-with-jira-and-bitbucket?u=76281980&t=181)** This lets Margaret see that Kelvin started working on the feature.
>
> **[3:06](https://www.linkedin.com/learning/learning-bitbucket/manage-projects-with-jira-and-bitbucket?u=76281980&t=186)** After Kelvin has added and tested the code for the new feature, he creates a Pull Request.
>
> **[3:11](https://www.linkedin.com/learning/learning-bitbucket/manage-projects-with-jira-and-bitbucket?u=76281980&t=191)** Team members can see Kelvin's progress using links from the Jira issue to the Pull Request in Bitbucket.
>
> **[3:18](https://www.linkedin.com/learning/learning-bitbucket/manage-projects-with-jira-and-bitbucket?u=76281980&t=198)** Kelvin, Margaret, and the rest of the team review the changes and agree that everything is working as planned.
>
> **[3:24](https://www.linkedin.com/learning/learning-bitbucket/manage-projects-with-jira-and-bitbucket?u=76281980&t=204)** Kelvin merges the Feature branch into the Main branch, kicking off automation in Jira that moves the issue from In Progress to Done.
>
> **[3:32](https://www.linkedin.com/learning/learning-bitbucket/manage-projects-with-jira-and-bitbucket?u=76281980&t=212)** Pretty cool, right?
>
> **[3:33](https://www.linkedin.com/learning/learning-bitbucket/manage-projects-with-jira-and-bitbucket?u=76281980&t=213)** Join me in the next video to see how we can set up our own Jira and Bitbucket connection.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (19), [[Bitbucket]] (8), management (6), [[Software Development]] (5), feature (5)
> **Tools:** jira (19), bitbucket (8)
> **Definitions:** is a  (2), known as (1)
> **CLI Commands:** git (1), find (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)

#### Connect Jira to Bitbucket
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=1)** - [Instructor] To start connecting Jira to Bitbucket, we'll create an instance of Jira Cloud.
>
> **[0:06](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=6)** Jira Cloud is a software as a service installation of Jira hosted by Atlassian.
>
> **[0:13](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=13)** There's no server to manage, no patches to maintain.
>
> **[0:16](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=16)** All you have to do is set up and log in.
>
> **[0:20](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=20)** Once we have Jira set up, we'll create a project in Jira and connect the project to a Bitbucket repository.
>
> **[0:27](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=27)** We can connect to an existing repo or create a new one.
>
> **[0:31](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=31)** Jira projects can be connected to multiple repositories, so we can track work across all the different places where code might be stored for a project.
>
> **[0:40](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=40)** All right, let's go to the browser to configure Jira Cloud.
>
> **[0:45](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=45)** I'm logged into my Bitbucket account and I'm viewing the homepage for the private repo.
>
> **[0:50](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=50)** In the left sidebar, there's a tab for Jira issues.
>
> **[0:55](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=55)** I don't have a connection to Jira yet, so I'm getting to this colorful page describing the benefits I can claim by connecting my Bitbucket to Jira.
>
> **[1:05](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=65)** I'm totally game for that.
>
> **[1:06](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=66)** So I'll select the Try Jira button.
>
> **[1:13](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=73)** Each Jira Cloud installation has its own top-level site on the [atlassian.net](https://atlassian.net) domain.
>
> **[1:20](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=80)** So the first part of this installation is deciding on a name for the Jira site.
>
> **[1:25](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=85)** The suggestion is to use your company name or your team's name.
>
> **[1:29](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=89)** For now, I'm going with the default, which is my username.
>
> **[1:35](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=95)** With a name in place, all we need to do is select Get Started.
>
> **[1:41](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=101)** It'll take a minute or two for the installation to complete.
>
> **[1:46](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=106)** Okay, the site's ready, so let's check it out.
>
> **[1:56](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=116)** The first thing that we need to do is create our first project, and we're giving a few templates to choose from.
>
> **[2:02](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=122)** You can select a template depending on your needs and familiarity with project management, but if you're just getting started, keep things simple with the kanban board.
>
> **[2:11](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=131)** It's already selected, so I'll go to the next screen.
>
> **[2:19](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=139)** Okay, I now have a Jira instance and a project, but I still need to connect Bitbucket.
>
> **[2:25](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=145)** On the Jira homepage, I'll select Code from the left sidebar.
>
> **[2:32](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=152)** And on this screen I'll select Connect to Bitbucket.
>
> **[2:38](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=158)** I also need to select the workspace that I want to connect to.
>
> **[2:42](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=162)** And in this dropdown I have a couple to choose from.
>
> **[2:44](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=164)** Since I already have a workspace for the amazing mobile app and learning bitbucket 8500, I'll select learning bitbucket for this one.
>
> **[2:54](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=174)** And then I'll click Connect.
>
> **[2:58](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=178)** Okay, the workspace is connected.
>
> **[3:00](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=180)** Let's continue.
>
> **[3:04](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=184)** Now we can add repositories.
>
> **[3:06](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=186)** From this page, I'll click Edit repositories, and then Add code repository.
>
> **[3:17](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=197)** We're already connected to Bitbucket, so I'll select that one.
>
> **[3:22](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=202)** And from this page I can pull the dropdown and see the repositories that are a part of the workspace that I selected previously.
>
> **[3:31](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=211)** So I'll go ahead and select both of these, and then I'll click Add repository.
>
> **[3:43](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=223)** Okay, so on the Jira side, now I have the project in place, I have a workspace connected, I connected all of the repositories that were inside that workspace to this Jira project.
>
> **[3:53](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=233)** Let's see what things look like back on the Bitbucket side.
>
> **[4:01](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=241)** Okay, back in Bitbucket, apparently it already knows that I'm connected because I'm getting yet another message welcoming me to Jira issues in Bitbucket.
>
> **[4:12](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=252)** I really appreciate all the love that Atlassian is giving us, don't you?
>
> **[4:20](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=260)** Now that we've connected Bitbucket and Jira, we can start linking issues to code, but there's one more thing we need to configure to set up our automation properly.
>
> **[4:31](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=271)** We'll do that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (20), [[Bitbucket]] (13), cloud (4), [[Atlassian]] (3), next (2)
> **Tools:** jira (20), bitbucket (13)
> **Prerequisites:** set up (3), configure (2), getting started (1)
> **UI Navigation:** go to (2), dropdown (2), select the (1)
> **URLs:** [atlassian.net](https://atlassian.net) (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)

#### Automate issue updates
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980&t=1)** - [Instructor] Now that we've seen how Jira can be connected to Bitbucket, let's tap into another Jira superpower, automation.
>
> **[0:08](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980&t=8)** Jira automation allows for synchronization between project management and code development activities.
>
> **[0:14](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980&t=14)** By reflecting the real time status of the work being done, automation keeps project tracking accurate and up to date.
>
> **[0:23](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980&t=23)** Developers can work in Bitbucket while project managers and other team members track progress in Jira, allowing the team to collaborate from the tool they're most familiar with.
>
> **[0:35](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980&t=35)** On the Jira side, we use rules to describe the triggers and components that implement automation.
>
> **[0:42](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980&t=42)** A trigger describes when a rule should be run.
>
> **[0:45](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980&t=45)** Triggers are events like creating a commit or a branch, or merging a poll request.
>
> **[0:52](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980&t=52)** The components of an automation rule describe the steps the rule will take.
>
> **[0:56](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980&t=56)** This includes actions like transitioning an issue, logic for determining if the rules should proceed, or looping over multiple issues in branches.
>
> **[1:06](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980&t=66)** Fortunately, Jira provides templates that we can use to start automating right out of the box.
>
> **[1:12](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980&t=72)** Let's go to the Jira interface and set up some rules for our project.
>
> **[1:18](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980&t=78)** I'm logged into my Jira account and I'm doing the homepage for my project.
>
> **[1:23](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980&t=83)** To start creating automation rules, I'll select project settings.
>
> **[1:29](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980&t=89)** And then automation.
>
> **[1:35](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980&t=95)** I don't have any rules defined, so right away I'm directed to the templates page.
>
> **[1:42](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980&t=102)** Take some time to explore the rule templates you can choose from.
>
> **[1:45](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980&t=105)** For now, I'll scroll down to the DevOps section.
>
> **[1:56](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980&t=116)** This is where we'll find rule templates for actions that update issues based on changes in repositories.
>
> **[2:07](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980&t=127)** I'm mainly interested in these two rules that use branch creation and merging to update issues.
>
> **[2:14](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980&t=134)** Let's start with branch creation.
>
> **[2:20](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980&t=140)** This rule uses a branch creation to trigger the processing of the rule components.
>
> **[2:25](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980&t=145)** The first component is a logic block that checks to see if the issue is in the to do state, that is work on the issue hasn't already been started.
>
> **[2:34](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980&t=154)** If the check returns true, then the rule will process the next component.
>
> **[2:39](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980&t=159)** The next component is where the rubber meets the road.
>
> **[2:42](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980&t=162)** If all the other conditions are met, then Jira will update the issue to be in progress.
>
> **[2:48](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980&t=168)** Now this template is already provided for us, so we don't have to do anything but enable it by selecting this button to turn the rule on, We even get an option to let Atlassian know what our automation experience has been like.
>
> **[3:05](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980&t=185)** I'm going to say thumbs up.
>
> **[3:10](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980&t=190)** And from here I'll select return to rules.
>
> **[3:15](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980&t=195)** Now I'll go back to the templates page and enable the second rule for branches.
>
> **[3:27](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980&t=207)** This rule helps us know when all work on a branch is completed.
>
> **[3:31](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980&t=211)** A pull request merge kicks off the rule, and if the issue isn't already done, Jira will move the rule into the done column.
>
> **[3:39](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980&t=219)** I'll enable this rule and go back to the rule list.
>
> **[3:46](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980&t=226)** Okay, with these rules in place, we can keep Jira and Bitbucket synchronized.
>
> **[3:51](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980&t=231)** In the next video, let's create an issue and link it to a Bitbucket branch.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (11), [[Automation]] (8), [[Bitbucket]] (4), next (3), management (1)
> **Tools:** jira (11), bitbucket (4)
> **Cross-References:** go back to (2), in the next (1)
> **UI Navigation:** go to (1), scroll down (1)
> **CLI Commands:** find (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)

#### Create an issue and link to the Bitbucket branch
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-bitbucket/create-an-issue-and-link-to-the-bitbucket-branch?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-bitbucket/create-an-issue-and-link-to-the-bitbucket-branch?u=76281980&t=1)** - [Instructor] At this point, we have our project connected to Bitbucket and we've added rules that will automatically update issues based on events in a repository.
>
> **[0:10](https://www.linkedin.com/learning/learning-bitbucket/create-an-issue-and-link-to-the-bitbucket-branch?u=76281980&t=10)** To see how everything comes together, let's start by creating an issue.
>
> **[0:16](https://www.linkedin.com/learning/learning-bitbucket/create-an-issue-and-link-to-the-bitbucket-branch?u=76281980&t=16)** To create an issue from the dashboard, I just need to type in the name of the issue.
>
> **[0:20](https://www.linkedin.com/learning/learning-bitbucket/create-an-issue-and-link-to-the-bitbucket-branch?u=76281980&t=20)** How about Sync Demonstration?
>
> **[0:26](https://www.linkedin.com/learning/learning-bitbucket/create-an-issue-and-link-to-the-bitbucket-branch?u=76281980&t=26)** Now I'll select the issue to see the details.
>
> **[0:32](https://www.linkedin.com/learning/learning-bitbucket/create-an-issue-and-link-to-the-bitbucket-branch?u=76281980&t=32)** A couple things that we can note from this view is that the issue is still in the to-do state and it's unassigned.
>
> **[0:39](https://www.linkedin.com/learning/learning-bitbucket/create-an-issue-and-link-to-the-bitbucket-branch?u=76281980&t=39)** I'll assign the issue to myself.
>
> **[0:43](https://www.linkedin.com/learning/learning-bitbucket/create-an-issue-and-link-to-the-bitbucket-branch?u=76281980&t=43)** And to get started working on this issue, I'll select Create Branch.
>
> **[0:50](https://www.linkedin.com/learning/learning-bitbucket/create-an-issue-and-link-to-the-bitbucket-branch?u=76281980&t=50)** This opens a new tab in Bitbucket where I can enter the branch details.
>
> **[0:57](https://www.linkedin.com/learning/learning-bitbucket/create-an-issue-and-link-to-the-bitbucket-branch?u=76281980&t=57)** Because this project is attached to two repositories and I also have other workspaces in this account, I have to select the specific repo I want to create the branch in.
>
> **[1:08](https://www.linkedin.com/learning/learning-bitbucket/create-an-issue-and-link-to-the-bitbucket-branch?u=76281980&t=68)** I'll use the public repo.
>
> **[1:10](https://www.linkedin.com/learning/learning-bitbucket/create-an-issue-and-link-to-the-bitbucket-branch?u=76281980&t=70)** For the branch type, I'll select feature.
>
> **[1:16](https://www.linkedin.com/learning/learning-bitbucket/create-an-issue-and-link-to-the-bitbucket-branch?u=76281980&t=76)** I'll keep the main branch selected, and then select Create.
>
> **[1:22](https://www.linkedin.com/learning/learning-bitbucket/create-an-issue-and-link-to-the-bitbucket-branch?u=76281980&t=82)** Okay, the branch is created.
>
> **[1:23](https://www.linkedin.com/learning/learning-bitbucket/create-an-issue-and-link-to-the-bitbucket-branch?u=76281980&t=83)** Let's take a look to see what happened in Jira.
>
> **[1:27](https://www.linkedin.com/learning/learning-bitbucket/create-an-issue-and-link-to-the-bitbucket-branch?u=76281980&t=87)** Back in Jira, the issue was automatically updated to be in progress, and if I scroll down a bit and open the Automation pane and select Refresh, I can see a log with a rule that was used to update the issue.
>
> **[1:43](https://www.linkedin.com/learning/learning-bitbucket/create-an-issue-and-link-to-the-bitbucket-branch?u=76281980&t=103)** Pretty cool, right?
>
> **[1:44](https://www.linkedin.com/learning/learning-bitbucket/create-an-issue-and-link-to-the-bitbucket-branch?u=76281980&t=104)** If I close the issue and go back to the board, sure enough, the tile for this issue is in the correct column.
>
> **[1:53](https://www.linkedin.com/learning/learning-bitbucket/create-an-issue-and-link-to-the-bitbucket-branch?u=76281980&t=113)** In the next video, we'll use a pull request to trigger another update to this issue.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Bitbucket]] (2), [[Jira]] (2), feature (1), [[Automation]] (1), next (1)
> **Tools:** bitbucket (2), jira (2)
> **UI Navigation:** select the (2), scroll down (1), open the (1)
> **Cross-References:** go back to (1), in the next (1)
> **Speakers:** - [instructor] (1)

#### Update and close issues from Bitbucket
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-bitbucket/update-and-close-issues-from-bitbucket?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-bitbucket/update-and-close-issues-from-bitbucket?u=76281980&t=1)** - [Instructor] I'm back in my Bitbucket account now, viewing the branch page.
>
> **[0:05](https://www.linkedin.com/learning/learning-bitbucket/update-and-close-issues-from-bitbucket?u=76281980&t=5)** To see the feature branch I just created, I'll select all branches.
>
> **[0:11](https://www.linkedin.com/learning/learning-bitbucket/update-and-close-issues-from-bitbucket?u=76281980&t=11)** I'll select that branch and then view source, and then I'll edit the read me.
>
> **[0:25](https://www.linkedin.com/learning/learning-bitbucket/update-and-close-issues-from-bitbucket?u=76281980&t=25)** I'll make a small change to the file near the top, and then commit the change.
>
> **[0:36](https://www.linkedin.com/learning/learning-bitbucket/update-and-close-issues-from-bitbucket?u=76281980&t=36)** Now let's create a pull request.
>
> **[0:45](https://www.linkedin.com/learning/learning-bitbucket/update-and-close-issues-from-bitbucket?u=76281980&t=45)** The source and destination branches are already selected, and I'll add the title and description to be something a little more meaningful.
>
> **[1:00](https://www.linkedin.com/learning/learning-bitbucket/update-and-close-issues-from-bitbucket?u=76281980&t=60)** I'll also select the option to delete the branch and then create pull request.
>
> **[1:08](https://www.linkedin.com/learning/learning-bitbucket/update-and-close-issues-from-bitbucket?u=76281980&t=68)** Okay, we have the pr. Let's go back to Jira.
>
> **[1:12](https://www.linkedin.com/learning/learning-bitbucket/update-and-close-issues-from-bitbucket?u=76281980&t=72)** I'm back in Jira, and I want to refresh my screen for this next step, and it's a very subtle detail, but I'll place my mouse pointer right here next to this icon.
>
> **[1:26](https://www.linkedin.com/learning/learning-bitbucket/update-and-close-issues-from-bitbucket?u=76281980&t=86)** If I hover my mouse pointer over that icon on the issue, I can see a status message showing that a pull request was created.
>
> **[1:35](https://www.linkedin.com/learning/learning-bitbucket/update-and-close-issues-from-bitbucket?u=76281980&t=95)** This is a good example of how our project manager or a stakeholder could follow along with work being done without ever having to leave Jira.
>
> **[1:44](https://www.linkedin.com/learning/learning-bitbucket/update-and-close-issues-from-bitbucket?u=76281980&t=104)** But to wrap up this demonstration, we need to go back to Bitbucket and merge this PR.
>
> **[1:51](https://www.linkedin.com/learning/learning-bitbucket/update-and-close-issues-from-bitbucket?u=76281980&t=111)** Okay, back on the pull request page, I'll go ahead and start merging this request.
>
> **[1:57](https://www.linkedin.com/learning/learning-bitbucket/update-and-close-issues-from-bitbucket?u=76281980&t=117)** Everything looks good here, so I'll go ahead and select Merge.
>
> **[2:02](https://www.linkedin.com/learning/learning-bitbucket/update-and-close-issues-from-bitbucket?u=76281980&t=122)** Okay, the merge is complete, let's go back to Jira.
>
> **[2:07](https://www.linkedin.com/learning/learning-bitbucket/update-and-close-issues-from-bitbucket?u=76281980&t=127)** Once we're back in Jira, the issue is automatically moved to the done column.
>
> **[2:12](https://www.linkedin.com/learning/learning-bitbucket/update-and-close-issues-from-bitbucket?u=76281980&t=132)** I didn't even have to refresh the page.
>
> **[2:14](https://www.linkedin.com/learning/learning-bitbucket/update-and-close-issues-from-bitbucket?u=76281980&t=134)** Just to make sure everything is synchronized correctly, I can hover over the branch icon again, and there's the final confirmation that the pull request has indeed been merged.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (5), [[Bitbucket]] (2), next (2), feature (1)
> **Tools:** jira (5), bitbucket (2)
> **Cross-References:** go back to (3)
> **CLI Commands:** make (2)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Trigger Jira automation from Bitbucket
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-bitbucket/challenge-trigger-jira-automation-from-bitbucket?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-bitbucket/challenge-trigger-jira-automation-from-bitbucket?u=76281980&t=0)** (bright music)
>
> **[0:06](https://www.linkedin.com/learning/learning-bitbucket/challenge-trigger-jira-automation-from-bitbucket?u=76281980&t=6)** - [Instructor] I hope you're as excited as I am for one more challenge.
>
> **[0:11](https://www.linkedin.com/learning/learning-bitbucket/challenge-trigger-jira-automation-from-bitbucket?u=76281980&t=11)** In this challenge, you'll continue your role as the Bitbucket expert on the team developing the Amazing mobile app.
>
> **[0:19](https://www.linkedin.com/learning/learning-bitbucket/challenge-trigger-jira-automation-from-bitbucket?u=76281980&t=19)** Since the last challenge, the application has grown in popularity and has millions of daily active users.
>
> **[0:25](https://www.linkedin.com/learning/learning-bitbucket/challenge-trigger-jira-automation-from-bitbucket?u=76281980&t=25)** The team has decided to bring on a project manager to help streamline new features and prioritize bug fixes.
>
> **[0:33](https://www.linkedin.com/learning/learning-bitbucket/challenge-trigger-jira-automation-from-bitbucket?u=76281980&t=33)** Your task is to set up a Jira project, connecting it to existing repositories, and demonstrating how the team can manage issues using automation rules, branches, and pull requests.
>
> **[0:46](https://www.linkedin.com/learning/learning-bitbucket/challenge-trigger-jira-automation-from-bitbucket?u=76281980&t=46)** To complete this challenge, you'll start by creating a Jira project.
>
> **[0:51](https://www.linkedin.com/learning/learning-bitbucket/challenge-trigger-jira-automation-from-bitbucket?u=76281980&t=51)** Then connect the Jira project to the Bitbucket repositories the team already has in place.
>
> **[0:57](https://www.linkedin.com/learning/learning-bitbucket/challenge-trigger-jira-automation-from-bitbucket?u=76281980&t=57)** After the repos are connected, create automation rules that will update the state of issues linked to a branch in a repository.
>
> **[1:06](https://www.linkedin.com/learning/learning-bitbucket/challenge-trigger-jira-automation-from-bitbucket?u=76281980&t=66)** To demonstrate that everything is working as expected, create a new issue in Jira.
>
> **[1:12](https://www.linkedin.com/learning/learning-bitbucket/challenge-trigger-jira-automation-from-bitbucket?u=76281980&t=72)** Use the issue to create a feature branch, and then create and merge a pull request to trigger the automation rules.
>
> **[1:19](https://www.linkedin.com/learning/learning-bitbucket/challenge-trigger-jira-automation-from-bitbucket?u=76281980&t=79)** If you've been following along with the challenges so far, this challenge should take about 45 minutes to complete.
>
> **[1:26](https://www.linkedin.com/learning/learning-bitbucket/challenge-trigger-jira-automation-from-bitbucket?u=76281980&t=86)** You are going to do amazing with this challenge.
>
> **[1:29](https://www.linkedin.com/learning/learning-bitbucket/challenge-trigger-jira-automation-from-bitbucket?u=76281980&t=89)** Refer to the exercise files as needed, and then join me in the next video to go over the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (4), [[Automation]] (3), [[Bitbucket]] (2), application (1), feature (1)
> **Tools:** jira (4), bitbucket (2)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Trigger Jira automation from Bitbucket
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-bitbucket/solution-trigger-jira-automation-from-bitbucket?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-bitbucket/solution-trigger-jira-automation-from-bitbucket?u=76281980&t=0)** (upbeat playful music)
>
> **[0:06](https://www.linkedin.com/learning/learning-bitbucket/solution-trigger-jira-automation-from-bitbucket?u=76281980&t=6)** - [Instructor] There was a lot packed into this challenge, and I hope you had as much fun as I did solving it.
>
> **[0:13](https://www.linkedin.com/learning/learning-bitbucket/solution-trigger-jira-automation-from-bitbucket?u=76281980&t=13)** We got to use all the things we learned about Bitbucket and Jira.
>
> **[0:17](https://www.linkedin.com/learning/learning-bitbucket/solution-trigger-jira-automation-from-bitbucket?u=76281980&t=17)** I won't walk through all the steps that I took to reach my solution, but I will show the final state.
>
> **[0:25](https://www.linkedin.com/learning/learning-bitbucket/solution-trigger-jira-automation-from-bitbucket?u=76281980&t=25)** Starting in Jira, I did create a project for the amazing mobile app.
>
> **[0:30](https://www.linkedin.com/learning/learning-bitbucket/solution-trigger-jira-automation-from-bitbucket?u=76281980&t=30)** So the people that are working on this project, either the community or the team, they'll be able to see how their issues are tracked from to do to in progress to done.
>
> **[0:40](https://www.linkedin.com/learning/learning-bitbucket/solution-trigger-jira-automation-from-bitbucket?u=76281980&t=40)** This is where the project manager is definitely going to spend most of their time.
>
> **[0:46](https://www.linkedin.com/learning/learning-bitbucket/solution-trigger-jira-automation-from-bitbucket?u=76281980&t=46)** For the folks that are actually adding code though, we needed to connect those repositories to this project.
>
> **[0:52](https://www.linkedin.com/learning/learning-bitbucket/solution-trigger-jira-automation-from-bitbucket?u=76281980&t=52)** And if I go to the Code tab, I can see here that indeed both the team and the community repos were connected to this project.
>
> **[1:03](https://www.linkedin.com/learning/learning-bitbucket/solution-trigger-jira-automation-from-bitbucket?u=76281980&t=63)** And really the key to this exercise was to connect Jira to Bitbucket in a way that we can track the work that's being done in these repositories with tasks that are assigned from the project.
>
> **[1:16](https://www.linkedin.com/learning/learning-bitbucket/solution-trigger-jira-automation-from-bitbucket?u=76281980&t=76)** So to do that, we also had to add some automation.
>
> **[1:19](https://www.linkedin.com/learning/learning-bitbucket/solution-trigger-jira-automation-from-bitbucket?u=76281980&t=79)** So if I scroll down over here to Project settings and then select Automation, we can see the rules that I had to add here to move these issues from their current state to do to in progress and to done when the branch was either created or when a poll request was merged.
>
> **[1:40](https://www.linkedin.com/learning/learning-bitbucket/solution-trigger-jira-automation-from-bitbucket?u=76281980&t=100)** These rules will be applied as I was actively working on the assignment that I had from this particular project.
>
> **[1:47](https://www.linkedin.com/learning/learning-bitbucket/solution-trigger-jira-automation-from-bitbucket?u=76281980&t=107)** But because I've gone through everything, let's just go back and see some of the artifacts that were created from that process.
>
> **[1:54](https://www.linkedin.com/learning/learning-bitbucket/solution-trigger-jira-automation-from-bitbucket?u=76281980&t=114)** I'll go back to the project and go back to the Board.
>
> **[1:58](https://www.linkedin.com/learning/learning-bitbucket/solution-trigger-jira-automation-from-bitbucket?u=76281980&t=118)** And from here I can see the issue that I created, the Add roadmap document, and I've got that merge icon here that shows me that yes, indeed a branch was created from this issue and it was eventually merged back in.
>
> **[2:12](https://www.linkedin.com/learning/learning-bitbucket/solution-trigger-jira-automation-from-bitbucket?u=76281980&t=132)** Now that doesn't necessarily guarantee just, you know, creating the branch and merging it in that this branch or that rather this issue would be moved from to do to in progress to done.
>
> **[2:23](https://www.linkedin.com/learning/learning-bitbucket/solution-trigger-jira-automation-from-bitbucket?u=76281980&t=143)** One way that we can confirm that our rules were actually applied to this issue to affect this merge is to select the issue itself and then scroll down to the automation section.
>
> **[2:35](https://www.linkedin.com/learning/learning-bitbucket/solution-trigger-jira-automation-from-bitbucket?u=76281980&t=155)** And if I select Refresh here, I can see the rules that were run recently.
>
> **[2:39](https://www.linkedin.com/learning/learning-bitbucket/solution-trigger-jira-automation-from-bitbucket?u=76281980&t=159)** And if I hover over it, one of these links here, I can see the exact, you know, the full name of the rule that was run.
>
> **[2:46](https://www.linkedin.com/learning/learning-bitbucket/solution-trigger-jira-automation-from-bitbucket?u=76281980&t=166)** In this case, this is for when the branch was created, then the issue was moved to in progress.
>
> **[2:51](https://www.linkedin.com/learning/learning-bitbucket/solution-trigger-jira-automation-from-bitbucket?u=76281980&t=171)** And this one here, if I hover there, I can see that this was when the pull request was merged and the issue was moved to done.
>
> **[3:00](https://www.linkedin.com/learning/learning-bitbucket/solution-trigger-jira-automation-from-bitbucket?u=76281980&t=180)** So really that's the confirmation that all of our automation is in place correctly, and the changes that we did in Bitbucket were applied to this issue in Jira.
>
> **[3:13](https://www.linkedin.com/learning/learning-bitbucket/solution-trigger-jira-automation-from-bitbucket?u=76281980&t=193)** So after confirming that the task was assigned in Jira and completely updated from Bitbucket, I'll say that this challenge was solved successfully.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (5), [[Bitbucket]] (4), [[Automation]] (4)
> **Tools:** jira (5), bitbucket (4)
> **UI Navigation:** scroll down (2), go to (1), select the (1)
> **Cross-References:** go back to (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat playful music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-bitbucket/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-bitbucket/next-steps?u=76281980&t=0)** - We covered a lot in this course, and there's still so much more that Bitbucket has to offer.
>
> **[0:05](https://www.linkedin.com/learning/learning-bitbucket/next-steps?u=76281980&t=5)** Take the time to learn about other Bitbucket features, like hosting static websites, using snippets to share files, or adding CI/CD capabilities to all of your software projects with Bitbucket pipelines.
>
> **[0:18](https://www.linkedin.com/learning/learning-bitbucket/next-steps?u=76281980&t=18)** Whatever path you choose, check out the exercise files for links to these and other topics as you continue your Bitbucket journey.
>
> **[0:26](https://www.linkedin.com/learning/learning-bitbucket/next-steps?u=76281980&t=26)** It's been an honor to be your instructor for this course, and I really appreciate your attention and feedback.
>
> **[0:32](https://www.linkedin.com/learning/learning-bitbucket/next-steps?u=76281980&t=32)** I'm looking forward to seeing what you create with Bitbucket.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Bitbucket]] (5), ci (1), cd (1), [[Software Projects]] (1)
> **Tools:** bitbucket (5)
> **CLI Commands:** cd (1)
> **Cross-References:** we covered (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - we (1)


## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/learning-bitbucket-3821269)

## Skills Covered

- Bitbucket
- Version Control

## Path Context

### In [[Master Bitbucket]]
**1 of 3** | [[Bitbucket Pipelines for CI-CD]] →

## Appears In

- [[Master Bitbucket]]

## Related Courses

_Courses sharing skills:_

- [[Advanced Bitbucket Pipelines- Automating Deployments and Managing Third-Party Integrations]] — Bitbucket
- [[Bitbucket Pipelines for CI-CD]] — Bitbucket
- [[Git Essential Training]] — Version Control

---

[↑ Back to top](#)