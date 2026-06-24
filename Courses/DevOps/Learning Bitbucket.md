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
  - '[Master Bitbucket](../../Paths/DevOps/Learning%20Paths/Master%20Bitbucket.md)'
next_courses:
  - '[Bitbucket Pipelines for CI-CD](Bitbucket%20Pipelines%20for%20CI-CD.md)'
path_nav: '[{"path":"Master Bitbucket","position":1,"total":3,"prev":null,"next":"Bitbucket Pipelines for CI-CD"}]'
path_count: 1
tags:
  - course
  - topic/devops
  - topic/software-development
  - skill/bitbucket
  - skill/version-control
status: not-started
created: 2026-05-03
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

#### [Streamline your code and collaboration with Bitbucket](https://www.linkedin.com/learning/learning-bitbucket/streamline-your-code-and-collaboration-with-bitbucket?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-bitbucket/streamline-your-code-and-collaboration-with-bitbucket?u=76281980&t=0)** - Modern [Software Development](../../Topics/Software%20Development.md) requires tools that track code changes, encourage collaboration, and help us manage projects all at the same time. [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) is a cloud-based solution that handles all of these tasks and much more. Hi, I'm Michael [Jenkins](../../Skills/DevOps/Jenkins.md). I'm a seasoned computer engineer and I've been using Bitbucket for years. I'm thrilled to be your instructor for this course, and I'm excited to share some of the ways Bitbucket can be an asset for your software development needs. By the end of this course, you'll have the knowledge and skills you need to use Bitbucket for hosting [Git](../../Skills/Software%20Development/Git.md)-based repositories, collaborating with branches and pull requests, and managing project workflows with [Jira](../../Skills/DevOps/Jira.md). Are you ready? I hope so. Let's jump in and start learning Bitbucket.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (5), [Software Development](../../Topics/Software%20Development.md) (2), [Jenkins](../../Skills/DevOps/Jenkins.md) (1), [Git](../../Skills/Software%20Development/Git.md) (1), [Jira](../../Skills/DevOps/Jira.md) (1)
> **Tools:** bitbucket (5), jira (1)
> **CLI Commands:** git (1)
> **Definitions:** is a  (1)
> **Speakers:** - modern (1)

#### [What you should know](https://www.linkedin.com/learning/learning-bitbucket/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-bitbucket/what-you-should-know?u=76281980&t=0)** - [Instructor] To get the most out of this course, there are a few things you should be familiar with. I also want you to know that this course has built-in features to help you out along the way. We'll be doing a lot of work in the web browser, but you should be comfortable using the terminal on a Mac, [Windows](../../Glossary/Service/Windows.md), or [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) system. There are hundreds of applications that work with [Git](../../Skills/Software%20Development/Git.md), but for this course, we'll be using the command line interface to run Git commands. Git is a [Version Control](../../Skills/Web%20Development/Version%20Control.md) system used to track changes in files, and [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) as a cloud-based GI repository service. I'll be sharing some Git basics along the way, but if you are unfamiliar with Git, you can use the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning course, [Git Essential Training](../Web%20Development/Git%20Essential%20Training.md), to get up to speed or as a reference. Exercise files are also available. There's a link to the files on the homepage of the course. The files contain notes and additional information, examples for the material we'll be covering in the course, and maybe even some trivia and shenanigans. If you're looking for a reference to something in the course, you'll most likely find it in the exercise files. If you get stuck on something, and you need a bit more help than you can find in the exercise files, please use the course Q&A section. Ask your question there, and I'll do my best to help you out. If other folks have gotten stuck in the same place, they might join in on the discussion and share their solution. Also, check out the Q&A section to answer questions.
>
> **[1:34](https://www.linkedin.com/learning/learning-bitbucket/what-you-should-know?u=76281980&t=94)** As a community, we'll use the Q&A to collaborate on a positive learning experience for everyone.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (6), [Windows](../../Glossary/Service/Windows.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [Version Control](../../Skills/Web%20Development/Version%20Control.md) (1), [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (1)
> **CLI Commands:** git (6), find (2)
> **Tools:** terminal (1), command line (1), bitbucket (1)
> **Exercise Files:** exercise files (3)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Create an Atlassian account](https://www.linkedin.com/learning/learning-bitbucket/create-an-atlassian-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-bitbucket/create-an-atlassian-account?u=76281980&t=1)** - [Instructor] To start using [Bitbucket](../../Skills/Software%20Development/Bitbucket.md), you'll need to create an [Atlassian](../../Glossary/Service/Atlassian.md) account. Browse to the signup page and create an account using your email address or another account that you might already have with [Google](../../Glossary/Service/Google.md), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md), Apple, or [Slack](../../Skills/Software%20Development/Slack.md). Once you're logged into your Atlassian account, select the icon for Bitbucket and then select login. If it's your first time logging into Bitbucket, you'll be prompted to create a username. I know you'll pick something creative and memorable. Once you have it, select continue. The folks at Atlassian are nice enough to ask a couple questions to help tailor the way you'll interact with Bitbucket. You can participate in this quick survey or skip it. And that's it. You have an Atlassian account and you're logged into Bitbucket. Now let's discuss workspaces, projects, repositories, and how we'll use each of these to organize our work in Bitbucket.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (6), [Atlassian](../../Glossary/Service/Atlassian.md) (4), [Google](../../Glossary/Service/Google.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Slack](../../Skills/Software%20Development/Slack.md) (1)
> **Tools:** bitbucket (6), slack (1)
> **UI Navigation:** select the (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Bitbucket content organization](https://www.linkedin.com/learning/learning-bitbucket/bitbucket-content-organization?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-bitbucket/bitbucket-content-organization?u=76281980&t=1)** - [Presenter] [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) uses three components to organize and manage access to content, workspaces, projects, and repositories. Let's take a look at each one of these and how they work together. The primary job of a workspace is to contain projects and repositories. We can configure our workspaces to be public or private. Public workspaces can be viewed by anyone, while private workspaces require a user to be logged in and granted specific permission to see any other workspaces content. And because workspace names are used to create URLs under the [bitbucket.org](https://bitbucket.org) domain, each workspace must have a unique identifier across all of Bitbucket. Projects contain repositories and also provide controls for managing access. Projects can also be public or private, giving another option to control access and visibility to the repositories inside the project. Projects also provide a way for us to configure multiple repositories, access keys, branching models, pull request viewers and other settings can be configured at the project level and applied to all repositories in the same project. This allows teams to keep development, procedures and access consistent across all the repositories associated with a particular project. You can name a project just about anything,
>
> **[1:34](https://www.linkedin.com/learning/learning-bitbucket/bitbucket-content-organization?u=76281980&t=94)** however, each project name must be unique to the workspace where the project is located. This leads us to the final organization component, repositories. Repositories contain the files you'll be working with and all the revision history for each file. Repos can be public or private, providing yet another point for us to manage access to our content. Most importantly, repositories provide a central location for collaboration around changes to files using branches, commit histories and pull requests. One thing to keep in mind when you're naming your repos, each repo must have a unique name per workspace. This is required because in some cases, projects and repos will be displayed at the same level under a workspace. Let's see some examples showing how workspaces, projects and repos all come together. If you're using Bitbucket as a solo developer, you'll most likely have one workspace and one project with a project containing multiple repositories. This is a good approach for keeping things organized and managing access for one person. If multiple developers are working together as a team, you'll see the benefit of using workspaces to manage access to projects and repositories. In this example, we'll use two workspaces, one for a mobile application and another for a website.
>
> **[3:12](https://www.linkedin.com/learning/learning-bitbucket/bitbucket-content-organization?u=76281980&t=192)** Both workspaces can use similar project and repository names, allowing for consistent development in each space. We can also apply different access settings at the workspace, project and repo levels to make sure the right team members only have access to the code they're working on. Now that we've discussed how content is organized in Bitbucket, let's move on to applying these concepts in the Bitbucket web interface.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (6)
> **Tools:** bitbucket (6)
> **Prerequisites:** configure (2)
> **CLI Commands:** make (1)
> **URLs:** [bitbucket.org](https://bitbucket.org) (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [presenter] (1)


### 1. Getting Started with Bitbucket

[↑ Back to Table of Contents](#table-of-contents)

#### [Create public and private repositories](https://www.linkedin.com/learning/learning-bitbucket/create-public-and-private-repositories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-bitbucket/create-public-and-private-repositories?u=76281980&t=0)** - Let's get started with one of [Bitbucket](../../Skills/Software%20Development/Bitbucket.md)'s core features, repositories. When we discussed how content is organized in Bitbucket, we saw how workspaces, projects, and repositories can be either public or private. Public repos are visible to just about anyone on the internet, and while they're visible, public repos still require specific permission to add or make changes to any files in the repo. Private repositories are hidden and inaccessible. A private repo can't be accessed by anyone that hasn't been granted specific permission to see and contribute to the repo. Public repositories are ideal for open-source projects. Other developers can view and copy the code and can even propose changes. However, the repository owners maintain control over who can contribute code directly to the repo. Private repositories are best suited for files that aren't meant to be shared. This can include proprietary [Algorithms](../../Skills/Software%20Development/Algorithms.md), sensitive data, or code for an exclusive application. Let's go over to Bitbucket and create public and private repos. If you've just created your Bitbucket account, you'll start by creating a workspace. Remember that each workspace name needs to be globally unique, so pick something that you know will stand out in the crowd.
>
> **[1:40](https://www.linkedin.com/learning/learning-bitbucket/create-public-and-private-repositories?u=76281980&t=100)** By default, workspaces are configured to be private. I want this workspace to be public, so I'll uncheck that setting and then select Create.
>
> **[1:54](https://www.linkedin.com/learning/learning-bitbucket/create-public-and-private-repositories?u=76281980&t=114)** From this screen, I'll select the Create repository button. This gives us a form to fill out with the repo configuration. I haven't created any projects in this account, so I'm prompted to add a name for the project, along with the repo name. By default, repositories are configured to be private. I'll uncheck the setting so the repo can be public. I'll keep the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the default settings and select Create repository. Okay, there's our public repo. To confirm the repo is public, let's open this repo from an incognito browser. I'll copy the repo URL and open an incognito window, and I'll paste the URL in here. From here, I can see all the content in the repo, but I'm not logged in. If I select the user icon, sure enough, there's a prompt for me to log in. So we've proven that our public repo is indeed public. We can test for the opposite of this exercise by creating a private repo and confirming that the repo is not accessible to the general public. I've outlined the steps for that process in the exercise files. Take a moment to walk through those steps and meet me in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (4), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Tools:** bitbucket (4)
> **Env Vars:** url (2)
> **Cross-References:** we discussed (1), in the next (1)
> **UI Navigation:** select the (2)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - let (1)

#### [Add files to a repository](https://www.linkedin.com/learning/learning-bitbucket/add-files-to-a-repository?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-bitbucket/add-files-to-a-repository?u=76281980&t=0)** - [Presenter] I'm logged into my [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) account and I'm on the homepage for the public repository that I just created. Specifically, I've selected the source tab on the sidebar menu. To create a file from here, I'll select the three.menu on the far right hand side and then select add file. This gives me an interface to add a file, and I'll start by entering the file name. I'll call this one Hello World, and then I'll add the extension.py to indicate that this is a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) file. Now, I'll enter the content for this file. It's a simple Python script that just prints Hello World. At the bottom of the screen, we have a few settings that we can use to control the way Bitbucket formats the text in this file. Bitbucket recognized the file extension for Python and automatically selected the file type, but we can also manually override the syntax selection if needed. We can also configure indent settings for tabs or spaces, the size of the indent and line wrapping, but what we really want to do is add this file to our repo. To do that, we select commit. This opens a form where we can enter a commit message, or we can just accept the default and select commit. Once the commit is complete, we're taken to a new page where we can view all the details for the file we just created,
>
> **[1:33](https://www.linkedin.com/learning/learning-bitbucket/add-files-to-a-repository?u=76281980&t=93)** including the content of the file. If we select the commits tab on the sidebar menu, we can see all of the commits this repo has recorded. Now, you can use this approach to create files in the repo, but more than likely, you'll be working with many files and other applications. You'll be better served by cloning this repository to your local system and working with the files there. To do that, you'll need to add an SSH key to your Bitbucket account. We'll do that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (4), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3)
> **CLI Commands:** python (3), ssh (1)
> **Tools:** bitbucket (4)
> **UI Navigation:** select the (2)
> **Prerequisites:** configure (1), you'll need (1)
> **File Paths:** extension.py (1)
> **Env Vars:** ssh (1)
> **Cross-References:** in the next (1)

#### [Add an SSH key for authentication](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=0)** - [Instructor] Secure Shell, also known as SSH, is a protocol for connecting to remote servers. When we use SSH, our login credentials and data are encrypted, making this protocol highly resistant to network eavesdropping or unauthorized access. Instead of using passwords, SSH uses a pair of cryptographic keys, a public key and a private key. The public key is shared with the remote server and the private key remains securely stored on your local system. Okay, that's all great information, but you might be wondering, what does SSH have to do with [Bitbucket](../../Skills/Software%20Development/Bitbucket.md)? Well, our local [Git](../../Skills/Software%20Development/Git.md) client uses the SSH protocol to securely connect to remote repositories on Bitbucket. Our Git client uses the private key for identification. Bitbucket uses the public key to confirm our identity, and also confirms that we have permission to make changes to files inside our repos. When we are identified and our permissions are confirmed, we're authenticated, which is exactly what we need for cloning repositories. Once we have keys, we need to add them to our Bitbucket account. There are three places where we can do this, our personal account settings, workspace settings, and project settings. Each of these locations gives us options for controlling repository access.
>
> **[1:36](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=96)** Most users will be fine with adding SSH keys to their personal settings. However, teams using workspaces may benefit from adding keys to the workspaces and projects. You should also know that project keys are called access keys because they only provide read access to the project. In other words, project keys let you read the contents of a repository, but they don't allow you to push updates back to the repository. To set up access to Bitbucket using SSH, we need to create a key pair and update the SSH configuration on our local system. To create our SSH key pair, we'll use the SSH keygen command along with options for creating the key. Once we have our keys securely in place on our local system, we need to create or update the SSH configuration. This makes it easier for the git client to use our key when it connects to Bitbucket. Take a look at the exercise files for more details on creating an SSH key or modifying an SSH config. It would be a disservice if I didn't at least comment on keeping your private keys secure. Make sure you keep private keys private. Don't make the mistake of adding your private key anywhere it can be exposed, like storing it in a public repository. Exposing your private key is a surefire way
>
> **[3:10](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=190)** to set yourself up for a security incident. You can also improve your security posture by creating keys dedicated to specific uses. Dedicated keys make it easier to create new keys when old keys are rotated or in response to a security incident. Now that we're up to speed on all things SSH, let's use a demonstration to create a key pair for Bitbucket. For this demonstration, I have three [Windows](../../Glossary/Service/Windows.md) open. I'm viewing the exercise files in my browser, I've got my terminal ready to create keys, and I'm logged into my Bitbucket account where I'll add the keys after I create them. I'll start by copying the SSH Keygen command that I'll use to create the key. I can do that by selecting the stacked squares icon next to this block of code. Now I'll go to the terminal and I'll paste the command here.
>
> **[4:16](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=256)** When I run this command, I'm prompted to add a passphrase to the key. This would allow us to add a password to the key, which would give even more protection when using this key. However, we're going to be using it in a more automated fashion with Git, so I'm going to leave the passphrase empty and just press Return to not add a passphrase. And because we're not using a passphrase, I'll just press Enter one more time here on the second prompt. This lovely random art image confirms that our key was indeed created, and if I run LS on the .SSH directory, I can confirm that my keys are there. Now let's create the SSH configuration.
>
> **[5:16](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=316)** I'm using them to edit this file, so I'll start by typing I to get into insert mode. To speed things up, I'll go back to the exercise files and copy the config for this demo. And from here, I'll copy the config, go back to my terminal and I'll paste the file in here. I'll press the Escape key to stop editing, and then type colon WQ to save and exit the file. Okay, the key is created and the configuration is in place. Now I can add the public key to my Bitbucket account. I'll cat the public key contents and copy them to my clipboard.
>
> **[6:09](https://www.linkedin.com/learning/learning-bitbucket/add-an-ssh-key-for-authentication?u=76281980&t=369)** And now I'll go to Bitbucket. I'm logged into my Bitbucket account on this screen. To add a personal SSH key, I'll select the cog icon and then Personal Bitbucket Settings. On this screen, I'll select SSH keys. I'll select Add key here, and then paste in the key. I also have the option of adding a label to this key, but if I leave the label field empty, Bitbucket will use the comment that I added when I created the key. Honestly, that's the label I would probably use anyway, so I'll go ahead and select Add key. All right, there's our key. Bitbucket gives us some details on when the key was added and when the key was used, along with some controls to update or remove the key. We just added this key, so it's no surprise that this key has never been used. We'll change that by using this key to clone a repo in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (14), [Git](../../Skills/Software%20Development/Git.md) (4), [Windows](../../Glossary/Service/Windows.md) (1)
> **CLI Commands:** ssh (19), git (4), make (4), ls (1), cat (1)
> **Env Vars:** ssh (19)
> **Tools:** bitbucket (14), terminal (3)
> **Definitions:** is a  (2), known as (1), in other words (1)
> **Cross-References:** go back to (2), in the next (1)
> **UI Navigation:** go to (2), select the (1)
> **Exercise Files:** exercise files (3)

#### [Clone repo to a local system](https://www.linkedin.com/learning/learning-bitbucket/clone-repo-to-a-local-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-bitbucket/clone-repo-to-a-local-system?u=76281980&t=1)** - [Instructor] We've set up SSH keys on our local system and in [Bitbucket](../../Skills/Software%20Development/Bitbucket.md). Now we can clone a repo. The primary purpose of the [Git](../../Skills/Software%20Development/Git.md) clone command is to create a local copy of a remote repository. The local copy is stored in a working directory that mirrors the content of the remote repo. The clone command fetches files, commit history, and [Metadata](../../Skills/Web%20Development/Metadata.md) from the remote repository and stores them inside the working directory. Working from the web UI requires a constant network connection. However, when we use git clone, we can work offline. This way, we can use other applications and tools on our local system. The main argument for the git clone command is a URL with all the information git needs to set up a connection to the remote repository. Specifically, the URL identifies Bitbucket's host name, the workspace name, and the name of the repository we want to clone. Let's get started with our git clone command in the Bitbucket web interface. I'm logged into my Bitbucket account and I'm on the homepage for my private repository. If you're following along and you don't have a private repo, take a look at the exercise files for steps on creating one. I'm starting here to retrieve the URL I need for my git clone command. Fortunately, Bitbucket makes that really easy with its clone button on the top right
>
> **[1:33](https://www.linkedin.com/learning/learning-bitbucket/clone-repo-to-a-local-system?u=76281980&t=93)** of the repository homepage. Selecting this button opens a dialogue with a pre-populated git clone command. All we need to do is select the stacked squares icon to copy the clone command and the URL to the clipboard. Now let's go to the terminal. All I have to do in the terminal is paste the git clone command that I copied from Bitbucket and run the command. This is the first time I've connected to Bitbucket from this system, so I'll type in yes to continue connecting. This output is looking good. Let's jump into the working directory. And I'll use ls to see what's here. It's just the README file, which I expect, but just to make sure, I'll take a peek at the contents of the file. I'll clear the screen first and then cat out this README. Yep, that's the content I'm looking for. Now that I've cloned the repo, I can update existing files and add new ones. To keep the remote repository in sync, I'll need to push changes back to the repo on Bitbucket. We'll discuss those steps in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (8), [Git](../../Skills/Software%20Development/Git.md) (8), [Metadata](../../Skills/Web%20Development/Metadata.md) (1)
> **CLI Commands:** git (8), ssh (1), ls (1), make (1), cat (1)
> **Tools:** bitbucket (8), terminal (2)
> **Env Vars:** url (4), readme (2), ssh (1)
> **UI Navigation:** select the (1), go to (1)
> **Prerequisites:** set up (2)
> **Cross-References:** in the next (1)
> **Documentation:** the readme (1)

#### [Use a Git workflow](https://www.linkedin.com/learning/learning-bitbucket/use-a-git-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-bitbucket/use-a-git-workflow?u=76281980&t=0)** - [Instructor] After cloning a repo to our local system, we'll be able to work with the files, and then push the changes back to [Bitbucket](../../Skills/Software%20Development/Bitbucket.md). Let's take a closer look at the workflow we'll use for this process. We'll be using four [Git](../../Skills/Software%20Development/Git.md) commands in our workflow, git add, git commit, git push, and git status. After making changes in the workspace, we'll use git add to stage, or in other words, indicate which files will be included in the next commit. We can be selective about the files we add using file names or specific files, or even directories for batches of files inside a directory. If we want to add all changes in the working directory, we can use the special git add dot, where dot is the period character on your keyboard. After adding files, we run the git commit command. This creates a snapshot of all the files included in the commit along with details of the lines that were added or removed from each file. We'll also include an informative and descriptive message with our commit. This message provides some context on what was changed or added. We can also create multiple commits, allowing us to make additional changes before creating a new commit. After making changes and then adding and committing those changes, we're ready to push to the remote repo.
>
> **[1:34](https://www.linkedin.com/learning/learning-bitbucket/use-a-git-workflow?u=76281980&t=94)** Git push uploads modified files and any new files from our working directory to the remote repository. Git status is another handy command to use while we're adding, committing, and pushing files. Git status displays the current state of our local repository. It's going to describe the current branch that we're working on, and also compares the working directory to the corresponding branch on the remote repository. As a public service announcement, I'll stress that you should use git status as often as you can. Run it before and after any of the other commands to review changes that you've made and get ready for the next git command. Altogether, our push workflow looks like this. We make changes to existing files or add new files inside the working directory. Then we run git add to stage new and modified files for the next commit. Then we run git commit to take a snapshot of the staged files along with their changes. And then we run git push to upload our changes to Bitbucket. Of course, we'll also run git status before and after each of these steps to check the status of our working directory along the way. Let's use a demonstration in the next video to see this workflow in practice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (17), [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (2)
> **CLI Commands:** git (17), make (2)
> **Cross-References:** in the next (2)
> **Tools:** bitbucket (2)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### [Push code to a remote repo](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=2)** - [Instructor] I'm logged into my [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) account and I'm on the homepage for my private repository. On the source view, we can see the files currently in the repo, the last time they were updated, and the commit message from the update. And if I go to the commits tab, we can see the commits that have been recorded for this repo. After we make changes on our local system, we'll come back to the web interface to see how those changes are displayed here. I'm on my local system now and I'm inside the working directory for my private repo. I'm going to start things out by running [Git](../../Skills/Software%20Development/Git.md) status. This shows that I'm on the main branch and that my branch is up to date with a remote repo. There's nothing to commit and my working tree is clean. That lets me know that I'm in a good state to get started, which is perfect. Now let's change an existing file. I'll run the date command to append a new line at the end of the README file, and now I'll create a new file by running the date command again and directing the output into newfile.txt. Let's run git status again to check the current state. Right away we can see that there are changes not staged for commit. One of them is a modified file, the README file, and the other is an untracked file, the file that we just added. Anytime git status shows a file as untracked, it means the file is new
>
> **[1:34](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=94)** and git doesn't know anything about it. The git status output is also giving us some direction to run git add so that we can proceed to the next step. Let's go ahead and do that. I'm going to run, git add, followed by the dot character to indicate that I want to add all changes from the workspace to the staging area. There's no output from the git add command, so I'll immediately run git status, now git status shows that we have changes ready to be committed, and a new file and a modified file. I'll run git commit along with a commit message, adding new files from my local system. The output from git commit shows us that we have two files changed in this commit. It also shows us the number of changes that are included in this commit, two insertions and one deletion. This makes sense, right, because we added one new line to the README file and then added one new line to the new file. Let's run git status one more time. Okay, now things are a bit interesting. Our local system is ahead of the remote repo, also referred to as the origin by 1 commit. So to keep things synchronized, we need to upload this commit to the origin, and indeed, the output from git status gives us the command we need to run, git push.
>
> **[3:14](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-remote-repo?u=76281980&t=194)** The output from git push gives us some insight into the upload progress and other details of the push operation. Now let's run git status one more time, and I'll clear the screen and run git status. Okay, this looks a lot like when we first started. We're on the main branch, our branch is up to date and there's nothing to commit, and our working tree is clean. Now let's go back to the Bitbucket web interface to see what changed there. I'm back in Bitbucket and I'm on the Commits page. I'll press CTRL + R on my keyboard to refresh this screen, and sure enough, at the very top of this listing, we see the most recent commit. Let's go to the Source tab now and see what changes were made there. On this page, we can see the README file and the file that was just added, along with the commit message we used in the terminal. All of these are great indicators that the remote repo has been successfully updated from the local system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (18), [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (3)
> **CLI Commands:** git (18), make (1)
> **Env Vars:** readme (4), ctrl (1)
> **Documentation:** the readme (4)
> **Tools:** bitbucket (3), terminal (1)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (1), is an  (1)
> **File Paths:** newfile.txt (1)

#### [Challenge: Create a repo and add code](https://www.linkedin.com/learning/learning-bitbucket/challenge-create-a-repo-and-add-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-bitbucket/challenge-create-a-repo-and-add-code?u=76281980&t=0)** (buoyant music)
>
> **[0:06](https://www.linkedin.com/learning/learning-bitbucket/challenge-create-a-repo-and-add-code?u=76281980&t=6)** - [Presenter] Let's use a challenge to apply what you've learned about [Bitbucket](../../Skills/Software%20Development/Bitbucket.md). You're part of a [Software Development](../../Topics/Software%20Development.md) team working on a new, amazing open source application, the amazing mobile app. The team is inviting the community to work with them and they need a cloud-based repository service to store the code. The team is asking you to configure Bitbucket so the community can add files to the application. However, they also need to work with some files separately and discreetly away from the application's code base. Log into Bitbucket and create a new workspace, in the new workspace create a project named, "amazing," with two repositories. The first repo should be named, "community." This repo should be visible to anyone with the URL. The second repo should be named, "team," and should only be visible by members of the team. Clone both repos to your local system and add a markdown file named, "CONTRIBUTING.md," to each repo. Push the files back to Bitbucket with the commit message, "Repo is ready." You'll find all of the challenge details in the exercise files. This challenge should take about 15 minutes to complete. Give it a try and then join me in the next video for the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (4), [Software Development](../../Topics/Software%20Development.md) (1)
> **Tools:** bitbucket (4)
> **Env Vars:** url (1), contributing (1)
> **File Paths:** contributing.md (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** configure (1)

#### [Solution: Create a repo and add code](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=0)** - [Instructor] Okay, it is time to apply some of the skills that we've learned so far, and this is the challenge where we're going to make that happen. We're going to set up a [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) workspace, add a project, create two repositories, those repositories need to have specific visibilities, and then we're going to add some files and push those files back to Bitbucket. Let's get started on this solution. Okay, I'm starting from my Workspace page and from here I'm going to click Create workspace, and I'll give this a globally unique name since this is for the amazing mobile app, I'll call this one amazing-workspace-9,000. I do want this workspace to be public, so I'll uncheck the option to keep this workspace private. And yes, Bitbucket, I am not a robot, so I'll select that as well and then click Create. Okay, we have our workspace, and right away I can start creating the repositories, and I'll do that with this lovely button that we have here, Create repository. I don't have a project yet in this workspace, so I'm prompted to create a project name. And I believe in the challenge we are required to call this project amazing. For the repository name, we have two repositories that we need to create the team and the community.
>
> **[1:34](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=94)** I'll start with the team repository because this repository, we want to be exclusive to the team, that which means we want it to be private. So, I'm going to leave this Private repository option selected, and I'll click Create repository. Okay, with that repository in place, we'll go on to the next one and I'll select Create, Repository again. This time, since I have a project, I don't have to create one, I can just select one that already exists, which is the amazing project. And then this will be the community repo, so I'll add in here community. I'm just going to select this one that I've already got in here. And for this one, we want it to be public so that members of the community can see it. So, indeed we don't want it to be private. I will unselect the option to create it as a private repository and then select Create repository. Okay, we have both of our repositories created. Let's just take a a step right here, just a little break to make sure that these repositories meet their visibility requirements. The team repository has this little lock icon right next to the icon, which is a good indicator for us to know that this is indeed a private repository. The community repository does not have that lock icon on its little square, so we know that this is a public repository,
>
> **[3:07](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=187)** so we're all good there. Let's clone these repositories to the local system. I'll start with the community repository. I'll drop in there and then I'll select this button Clone, and I'll just copy these or click the stacked squares icon here that copies that [Git](../../Skills/Software%20Development/Git.md) URL and the get clone command to my clipboard, and now I'll go to my terminal. Okay, I'm in the terminal now and all I need to do is paste in that lovely command that I copied, and I get that clone command automatically, I'm cloning the repo in the community, and everything looks good there. Let's go back and do the same thing for the team repo. Okay, I'm in the team repo, and from here I'm going to select Clone, and then click those stacked squares to copy that to my clipboard and go to the terminal. And once again, back in the terminal, I'm just going to paste here and clone that team repo. Okay, I've got both these repos cloned down, let's clear the screen here and I'll just do a ls here. There are my two repos. Now, I can start with the next sort of phase in the task that we're asked to complete for this challenge, which is adding a file, a markdown file, to each of these repositories. And I'll start with the community repository, so I'll cd into the community repo. And we're asked to create a file called CONTRIBUTING. So, I'll start editing a file,
>
> **[4:40](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=280)** vim CONTRIBUTING.md. And we just need to add a header here, so I'll add CONTRIBUTING as the title. And I'll save that. So, now we can really start our Git workflow, right? The first thing that I need to do is add this file, but before we even do that, let's check git status. Okay, there's one untracked file there, which we would expect. This is the only file that I've worked on in this repo. So, I will git add . just to get everything. And let's clear the screen and do a get status again. Okay, I've got a new file that's ready to be committed, let's go ahead and commit this guy. And we were given a specific commit message to add, and I believe it was repo is ready, so we'll use that. Okay, one file change. Let's do git status one more time. Okay, our branch is ahead of main by one commit, that's what we expect. Let's go ahead and push this change. Okay, that push looks good. So, what I'm going to do now is the same steps over in the team repository. Okay, I've made the same changes in the team repository that I made in the community repository. And by that I mean I've added CONTRIBUTING.md, I added that header that we're supposed to add there, and then I ran git add
>
> **[6:14](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=374)** to get that file ready to be committed. Git commit, I ran that command with the requisite message repo is ready, and then I pushed that file back up to Bitbucket. So, let's go over to the Bitbucket web interface to see these changes. Okay, I'm back in Bitbucket now, and I'm just going to refresh the page here on the team repository to see the changes. Okay, there's my CONTRIBUTING file, it's got the commit message repo is ready. And if I look in this file, there's the header, that's exactly what I expect. And it's going to be the same thing over in the community repo as well. So, let's just very quickly review the changes that we made. Okay, reviewing our solution from the Workspace page, we created a workspace for the amazing mobile app. And I'll dive into that workspace where we created two repositories: one for the team that is private, one for the community which is public. And if I go to the Repositories view, I can see that the team repository is indeed public, it's got that little lock icon there. The community project does not have the lock icon, so we know that one is publicly visible, and both of these are part of the amazing project. And if I go into the community repository, I can see that I added the CONTRIBUTING.md file with the requisite commit message repo is ready.
>
> **[7:47](https://www.linkedin.com/learning/learning-bitbucket/solution-create-a-repo-and-add-code?u=76281980&t=467)** And inside that file, we've got that header that shows CONTRIBUTING, and that this file is exactly in the state that was requested from the challenge task. So, after reviewing all of that, I believe that this challenge has been solved successfully.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (7), [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (6)
> **CLI Commands:** git (7), make (2), ls (1), cd (1)
> **Tools:** bitbucket (6), terminal (4), vim (1)
> **Env Vars:** contributing (7), url (1)
> **File Paths:** contributing.md (3)
> **UI Navigation:** go to (3)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (1), required to (1)


### 2. Working with Branches and Pull Requests

[↑ Back to Table of Contents](#table-of-contents)

#### [Create a branch](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=0)** - We've gotten some experience with [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) by setting up workspaces, creating files in the web interface, and cloning repositories using the command line. Now let's move on to the next step. Working with branches. Branches are pointers to specific commits in a repository's history. Branches are used to isolate work on new features, fix bugs, or run experiments without affecting the primary code base. The superpower a branch gives us is the ability to work on the same files that others might be working on at the exact same time, all without stepping on each other's work. Overall, branches provide a way to make changes while maintaining a clean and stable code base for production deployments. We've already seen one branch, the main branch. We can visualize the main branch as a line, with each commit represented as a dot on the line. In this way, we can consider a branch to be a pointer to a specific commit in a repository's history. We can create branches from commits on the main branch. As we push new or modified files to the branch, new commits are added. Once the work is complete and verified, branches are merged back into the main branch. The point created when two branches are merged is called a merge commit. To keep things organized, branches are given names.
>
> **[1:36](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=96)** Commonly, branches are named according to the reason why the branch was created. The most common naming convention is to use a specific identifier as a prefix to the branch name followed by a slash. Some of the most popular branch prefixes are bugfix, feature, hotfix, and release. Bugfix branches are used to isolate and address specific bugs within the code base. This allows developers to work on fixing problems without disrupting anything that is working as expected. Feature branches let developers work on enhancements. Any updates are kept separate from the main code base until the feature is complete and ready for integration. Hotfix branches are used to address critical issues in the production environment. Like bugfix and feature branches, hotfix branches keep changes to the side to keep from disrupting any ongoing development. Release branches are probably the most calm of all branch types. Release branches are used for final testing and planning before making code available to use in a production environment. Let's continue discussing branches in the Bitbucket web interface. I'm logged into my Bitbucket account and I'm on the homepage for my public repository. Viewing the source page, I can see the files that are currently in the repo on the main branch. To create a new branch, I'll select Branches
>
> **[3:13](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=193)** and then Create branch. In this dialog, I can select the type of branch I want to create. This is where I would select Bugfix, Feature, Hotfix, or Release. And depending on which one I select, Bitbucket will automatically add the correct prefix for my branch name. Thanks, Bitbucket! I can also select a branch to use as the source of the branch I'm creating. This repo only has one branch at the moment, but if I had other branches, I could use one of those branches as a source too. Now, I can enter my branch name. I'll call this branch change the world. With the source branch selected and the name entered, Bitbucket provides us with a nice graphic, visualizing the branch we're about to create. I'll select the Create button to kick that process off. From this page, I'll select View source. This takes us directly to a view of the repo with the branch selected. Right now, all of the files are the same as what we saw on the main branch. Let's add this feature that will change the world. I'll select the hello-world script and then I'll select Edit. I'm editing the script now and I appreciate the friendly reminder of the file and branch that I'm working on. I'll change World to Planet. That way, this script can be universal
>
> **[4:46](https://www.linkedin.com/learning/learning-bitbucket/create-a-branch?u=76281980&t=286)** and anyone anywhere in the galaxy can use it. Okay, let's view the diff to see precisely what was changed. Okay, that's looking good. That's what I wanted to change, so I'll commit this change. And for my commit message, I'll enter "change world to planet" and I'll select Commit one more time. Okay, this commit is official. We've created a branch and committed code, using the Bitbucket web interface. In the next video, let's work with this same branch by pushing code to it from the command line.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (7)
> **Tools:** bitbucket (7), command line (2)
> **UI Navigation:** select the (3)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Definitions:** is called (1)
> **Speakers:** - we (1)

#### [Push code to a branch](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=1)** - [Instructor] We've seen how we can create a branch in the [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) Web UI. Now let's check out a branch to our local system and push code back to the same branch on Bitbucket. When we're working with branches locally, we'll start by running [Git](../../Skills/Software%20Development/Git.md) Pull, this downloads any remote changes to the local repository on the main branch. Then we'll run the get checkout Command. Checkout is used to switch between branches. Most importantly, git checkout updates our working directory to track changes in the selected branch. This means any commits that we create will be added to the branch we're currently working on. If we've checked out multiple branches, we can use the git branch command to list all the branches that are available on the system. And then we'll use commands from the Git workflow to check status, add and commit the changes we've made and push our local changes back to Bitbucket. Let's start this workflow in the web interface. I'm logged into my Bitbucket account and I'm viewing the branches for my public repo. I'm working with the Change the World feature branch, so I'll select that one. On this page, I'll select checkout. This gives me the precise command I need to start working with this branch on my local system, I'll select the Stack Squares icon to copy it. And now I'll go to the terminal. I've already cloned the public repo to my local system, and if I run Git Status here,
>
> **[1:36](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=96)** I can see that my working directory is currently following the main branch. I'll also run Git Branch, which shows that main is the only branch available. Before I get started, I'll run Git Pull to make sure my local repo is up to date with the remote repo. Now I'll paste the checkout command that I copied from Bitbucket.
>
> **[2:08](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=128)** Now let's clear the screen and run Git Status one more time and git branch. Sure enough, Git Status shows me that the working directory is now following the feature branch for Change the World and the output from Git branch shows branches available. Another helpful bit from the git branch output is the asterisk next to the currently selected branch. To complete my Change the World feature, I want to rename the Hello World Script to Hello Planet. I can do that easily on my Mac OS command line with the move command. If you're following along on another operating system, take a look at the exercise files for details on how to rename the file. Now let's run Git Status. This is exactly what we want. The Hello World file is gone and the Hello Planet file is untracked. Before we move on, let's test the change. Awesome. Looks good to me. Let's make a commit to capture our hard work. I'll clear the screen and run git add . and then git status and now I'll run, git commit with the message "rename the file" Our commit is ready to go,
>
> **[3:43](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=223)** but let's check git status one more time. Okay, we're ready to run, git push. All right, we're all done in the terminal, let's go back to the Bitbucket web interface. I'm still on the page for the branch I've been working on, so I'll just reload this page. This shows a record of all the commits that were made on this branch, including changing World to Planet and renaming the file.
>
> **[4:28](https://www.linkedin.com/learning/learning-bitbucket/push-code-to-a-branch?u=76281980&t=268)** But right now, the changes are only on this branch. In the next video, let's discuss pull requests and how we can use a PR to collaborate on changes and merge code into the main branch.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (18), [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (6)
> **CLI Commands:** git (18), make (2)
> **Tools:** bitbucket (6), terminal (2), command line (1)
> **Cross-References:** go back to (1), in the next (1)
> **UI Navigation:** select the (1), go to (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Create a Pull request](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=1)** - [Host] Pull requests are a key feature to [Git](../../Skills/Software%20Development/Git.md) based [Version Control](../../Skills/Web%20Development/Version%20Control.md) systems. More often than not, the term pull request is abbreviated as PR. A pull request is essentially a request to merge changes from one branch into another branch. Usually the changes are coming from a branch containing a new feature or a bug fix. The request is to merge those changes into the primary code base, pull requests, create a special checkpoint for collaboration in the [Software Development](../../Topics/Software%20Development.md) process. Working with PRs team members can review changes, provide feedback, and lend support to code quality. Each of these points help make sure the primary code base remains as bug free as possible. When we use pull requests in our workflow, we start by creating a branch to hold the changes. As we discussed in the previous lessons, branches let us experiment and mess around outside of the primary code base so we don't break anything. Once we're satisfied with our changes on the branch, we create a request to merge the changes into the main branch. This is our PR. [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) will do a fine job of tracking the commits and files involved in the PR. It's up to us to add a descriptive title and message for our PR so anyone that sees it will understand the purpose or context for the changes.
>
> **[1:35](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=95)** Once the PR is in place, other members of the team can review the changes and submit their feedback. This is where the collaboration really comes into play with the team, engaging in discussions on how the code is perfect and should be merged right away, or in some cases might need some updates before being reviewed again. Some PRs might stay in this stage for a while until the team concludes that everything is perfect, what the wonderful phrase looks good to me. In some cases, PRs also need to be approved after being reviewed. Once the approval is in place, the PR can be merged and the target branch is updated with all the changes. Let's open Bitbucket and walk through a pull request workflow. I'm logged into my Bitbucket account and I'm viewing the branches for my public repo. I've been working on the change the world feature branch, so I'll select that one, and from this page I'll select create pull request. This opens a dialogue where we can capture all the details we want to share with this PR. The source and destination branches are already selected, so no changes are needed there. The title is automatically filled, but we can change it to something more meaningful. We can also provide a description. I like what they have already, but I'll add a bit more context. How about mentioning how these changes make the script more
>
> **[3:09](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=189)** inclusive for the entire universe?
>
> **[3:33](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=213)** If other developers were working in this repo, I could use this ad reviewer's option to tag someone. This would prompt them to take a look at my changes and provide feedback. But for this one, I'm going solo. We can also keep the repo organized by deleting branches after they're merged. I'll select that option for sure. All I need to do now is create this PR. Now that the PR is created, we're provided with a location to track the conversation around the changes. If I had a reviewer, they could use this page to find all the files included in the PR, what changes or additions were made, and most importantly, they can leave their feedback in the comment section. I'll add a comment just for kicks. The ever popular looks good to me.
>
> **[4:31](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=271)** Reviewers can also provide a final stamp of approval. Since I'm working solo on this one, I'll have to approve it myself. Okay, the PR has been reviewed and approved. The last step is to merge it. Selecting the merge button opens one more dialogue where we can confirm the change and much like a regular commit, we can also add a commit message. I'll keep the default message and proceed with this merge.
>
> **[5:09](https://www.linkedin.com/learning/learning-bitbucket/create-a-pull-request?u=76281980&t=309)** Now that the merge is complete, let's go to the commits tab. From here we can look back at all the commits and the repos history. We also get a nice graphical view of the feature branch commits and the merge commit created by the pool request.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (3), [Git](../../Skills/Software%20Development/Git.md) (1), [Version Control](../../Skills/Web%20Development/Version%20Control.md) (1), [Software Development](../../Topics/Software%20Development.md) (1)
> **CLI Commands:** make (2), git (1), find (1)
> **Tools:** bitbucket (3)
> **Env Vars:** git (1)
> **Cross-References:** we discussed (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [host] (1)

#### [Challenge: Create and merge a Pull request](https://www.linkedin.com/learning/learning-bitbucket/challenge-create-and-merge-a-pull-request?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-bitbucket/challenge-create-and-merge-a-pull-request?u=76281980&t=0)** (bright techno music)
>
> **[0:07](https://www.linkedin.com/learning/learning-bitbucket/challenge-create-and-merge-a-pull-request?u=76281980&t=7)** - [Instructor] Let's use another challenge to practice what you've learned about [Bitbucket](../../Skills/Software%20Development/Bitbucket.md). In the previous challenge, you configured Bitbucket for the amazing mobile app, creating two repositories; one for open source development and another for the team's internal files. Now, let's test your Bitbucket skills again. As the Bitbucket expert for the team, you've been given another task. Demonstrate how the team should review updates to a repo by using branches and pull requests. The requirements for completing this challenge are available in the exercise files, but let's take a moment to review them now. Log into Bitbucket and locate the workspace and project you created in the previous challenge. Add a feature branch to the community repository named pull-request-demo. Update the file, contributing.md, to include a message stating that all contributions to the repo should be added to a new branch and submitted as a pull request. Save your changes to the branch, and create a pull request, review the request, and then merge the request into the main branch. This challenge should take about 15 minutes to complete. I know you'll do great with this one. Take a shot, then join me in the next video to review the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (5)
> **Tools:** bitbucket (5)
> **File Paths:** contributing.md (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright techno music) (1)

#### [Solution: Create and merge a Pull request](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=0)** - [Instructor] Yes, you know what that theme music means, it's time for another challenge. And this time we're going to be using the skills that we just learned with [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) using branches and pull requests. So, the task for this challenge, we're going to use some of the repos that we set up in the previous challenge, and we're going to create a branch in the community repo, we're going to update the CONTRIBUTING.md file on that branch, and then we're going to merge those changes back into the main branch. Let's go ahead and get started with that. I'm starting on the Repository view for my amazing Workspace 9,000 workspace, and I'm going to select the community repo, which is where we're making these changes. And then, I'll go to the Branches tab and select Create a branch. I want this to be a feature branch so I will select feature. And then, I think we were given a name for this challenge, it was called pull-request-demo. Okay, with that in place, I'll select Create. And then from our Branch page, I'm going to select View source. And I'm editing CONTRIBUTING.md, which is right here, so I'll select that guy and then I'll click Edit. And another good thing to note from this page,
>
> **[1:32](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=92)** it tells us exactly the file that we're editing and which branch we're working on. So, thank you, Bitbucket, for helping us know exactly where we are and stay on track. So, the content that we're supposed to add here, there's a very specific message that we need to add to this contributing file. And I'm just going to go back to the exercise files and copy it from there. So, over in the exercise files, I'm going to click the stacked squares next to the message that we got to put into this file, and then I'll go back to Bitbucket and just paste it in. All right, in Bitbucket, I want to select this 'cause I think we're replacing this as well. And then, I'll just paste all of that in. That looks perfect to me, but just to make sure, let's Preview it. Okay, that is official. It's exactly what we need to add to this contributing file, so I'll go ahead and select Commit. Now, part of our instructions were to not create a pull request from this page. We are given an option to create a pull request, but if we create a pull request from here, we're actually using the feature branch that we're already on as the source branch for our pull request, which is not what we want to do. We want to merge back into the main branch, and we'll do that in a separate pull request screen. So, what we want to do here is just we can add a commit message. This one's fine for me, so I'll just select Commit. Okay, our commit is in place,
>
> **[3:09](https://www.linkedin.com/learning/learning-bitbucket/solution-create-and-merge-a-pull-request?u=76281980&t=189)** let's go on to the next step where we create a pull request. And I'll start here, Pull requests, and then Create pull request. Okay, on this screen we can add the title and the description. I don't think there was anything specific that we needed to add here. So, honestly, I'm just going to select or just keep all the defaults here. And well, the one thing I will do is just to keep the repo clean, I'm going to select Delete the branch, and then I'll select Create pull request. Okay, everything looks good here. And so, right away because everything does look good, I can see the changes are exactly what we wanted, I'm going to Approve this and Merge it right away. Closing the source branch is exactly what we want, we want that merge commit as well so I'll go ahead and click Merge. Okay, the merge request is complete and everything looks good. But just to make sure, what we can do is go over to the Commits page and we can see this nice little graphic that shows where we started on our main branch. We created this feature branch, that's that little commit dot over there, and then we have this merge commit here where everything was merged in from the feature branch back into the main branch. So, looking at this screen and confirming everything is in place, I believe this challenge has been successfully completed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (4)
> **Tools:** bitbucket (4)
> **File Paths:** contributing.md (2)
> **CLI Commands:** make (2)
> **Env Vars:** contributing (2)
> **Cross-References:** go back to (2)
> **UI Navigation:** select the (1), go to (1)
> **Exercise Files:** exercise files (2)


### 3. Working with Jira Cloud

[↑ Back to Table of Contents](#table-of-contents)

#### [Manage Projects with Jira and Bitbucket](https://www.linkedin.com/learning/learning-bitbucket/manage-projects-with-jira-and-bitbucket?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-bitbucket/manage-projects-with-jira-and-bitbucket?u=76281980&t=1)** - So far, you've learned how [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) provides a service for managing [Git](../../Skills/Software%20Development/Git.md) repositories in the cloud. Now let's take a look at [Jira](../../Skills/DevOps/Jira.md), a project management platform that helps teams track, organize, and manage their work. With Jira and Bitbucket both being produced by [Atlassian](../../Glossary/Service/Atlassian.md), we can get these tools working together easily. Let's see how we can manage [Software Development](../../Topics/Software%20Development.md) projects with Jira and Bitbucket. Jira is a popular project management tool for tracking issues, features, and bugs through all stages of the software development lifecycle. Jira is highly customizable, allowing teams to create workflows that map to a variety of project management methodologies, including [Agile](../../Skills/DevOps/Agile%20Development.md), [Scrum](../../Skills/DevOps/Scrum.md), and Kanban. These and other project management methodologies take projects and break them up into smaller units of work, known as issues, tasks, or stories. These slices of a project are the units we use to track work in Jira. Each task or issue can be assigned, categorized, and then tracked through various stages of completion, including To-Do, In Progress, and Done. More Complex projects might include other states, but these three are the most common. For software development, we can connect Jira projects to the repositories where the work is being done. Integrating Jira with Bitbucket
>
> **[1:34](https://www.linkedin.com/learning/learning-bitbucket/manage-projects-with-jira-and-bitbucket?u=76281980&t=94)** enhances the software development process by linking code changes directly to their corresponding tasks. For example, we can link to Jira Issues in Commit Messages. We can also automate task updates by creating emerging Pull Requests. This seamless integration ensures that all aspects of software development and project management are connected. The end result is better communication and transparency across the project. But this is a Bitbucket course after all, right? So we won't be going into all of the project management awesomeness that Jira possesses, but if you search for Jira in the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning Library, you'll find dozens of courses to choose from. I've updated the exercise files with links to a few recommendations including Learning Jira, [Jira- Basic Administration](Jira-%20Basic%20Administration.md), and Managing Custom Workflows. For now, let's take a look at an example of using Jira and Bitbucket together. We'll start with Margaret, a project manager using Jira to track work on a web application. Margaret creates an issue to add a new feature to the application and assigns it to Kelvin, one of the developers on the team. Kelvin uses the Jira issue to create a new branch in the repo associated with the project. This is where he'll track the changes for the new feature. Once Kelvin creates the branch, the issue is moved from To-Do to In Progress. This lets Margaret see that Kelvin started working on the feature. After Kelvin has added and tested
>
> **[3:08](https://www.linkedin.com/learning/learning-bitbucket/manage-projects-with-jira-and-bitbucket?u=76281980&t=188)** the code for the new feature, he creates a Pull Request. Team members can see Kelvin's progress using links from the Jira issue to the Pull Request in Bitbucket. Kelvin, Margaret, and the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the team review the changes and agree that everything is working as planned. Kelvin merges the Feature branch into the Main branch, kicking off automation in Jira that moves the issue from In Progress to Done. Pretty cool, right? Join me in the next video to see how we can set up our own Jira and Bitbucket connection.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jira](../../Skills/DevOps/Jira.md) (19), [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (8), [Software Development](../../Topics/Software%20Development.md) (5), [Git](../../Skills/Software%20Development/Git.md) (1), [Atlassian](../../Glossary/Service/Atlassian.md) (1)
> **Tools:** jira (19), bitbucket (8)
> **Definitions:** is a  (2), known as (1)
> **CLI Commands:** git (1), find (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)

#### [Connect Jira to Bitbucket](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=1)** - [Instructor] To start connecting [Jira](../../Skills/DevOps/Jira.md) to [Bitbucket](../../Skills/Software%20Development/Bitbucket.md), we'll create an instance of Jira Cloud. Jira Cloud is a [software as a service](../../Glossary/Concept/SaaS.md) installation of Jira hosted by [Atlassian](../../Glossary/Service/Atlassian.md). There's no server to manage, no patches to maintain. All you have to do is set up and log in. Once we have Jira set up, we'll create a project in Jira and connect the project to a Bitbucket repository. We can connect to an existing repo or create a new one. Jira projects can be connected to multiple repositories, so we can track work across all the different places where code might be stored for a project. All right, let's go to the browser to configure Jira Cloud. I'm logged into my Bitbucket account and I'm viewing the homepage for the private repo. In the left sidebar, there's a tab for Jira issues. I don't have a connection to Jira yet, so I'm getting to this colorful page describing the benefits I can claim by connecting my Bitbucket to Jira. I'm totally game for that. So I'll select the Try Jira button. Each Jira Cloud installation has its own top-level site on the [atlassian.net](https://atlassian.net) domain. So the first part of this installation is deciding on a name for the Jira site. The suggestion is to use your company name or your team's name. For now, I'm going with the default, which is my username. With a name in place,
>
> **[1:36](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=96)** all we need to do is select Get Started. It'll take a minute or two for the installation to complete. Okay, the site's ready, so let's check it out.
>
> **[1:56](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=116)** The first thing that we need to do is create our first project, and we're giving a few templates to choose from. You can select a template depending on your needs and familiarity with project management, but if you're just getting started, keep things simple with the kanban board. It's already selected, so I'll go to the next screen. Okay, I now have a Jira instance and a project, but I still need to connect Bitbucket. On the Jira homepage, I'll select Code from the left sidebar. And on this screen I'll select Connect to Bitbucket. I also need to select the workspace that I want to connect to. And in this dropdown I have a couple to choose from. Since I already have a workspace for the amazing mobile app and learning bitbucket 8500, I'll select learning bitbucket for this one. And then I'll click Connect. Okay, the workspace is connected. Let's continue. Now we can add repositories. From this page, I'll click Edit repositories, and then Add code repository. We're already connected to Bitbucket, so I'll select that one. And from this page I can pull the dropdown and see the repositories that are a part of the workspace that I selected previously.
>
> **[3:31](https://www.linkedin.com/learning/learning-bitbucket/connect-jira-to-bitbucket?u=76281980&t=211)** So I'll go ahead and select both of these, and then I'll click Add repository. Okay, so on the Jira side, now I have the project in place, I have a workspace connected, I connected all of the repositories that were inside that workspace to this Jira project. Let's see what things look like back on the Bitbucket side. Okay, back in Bitbucket, apparently it already knows that I'm connected because I'm getting yet another message welcoming me to Jira issues in Bitbucket. I really appreciate all the love that Atlassian is giving us, don't you? Now that we've connected Bitbucket and Jira, we can start linking issues to code, but there's one more thing we need to configure to set up our automation properly. We'll do that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jira](../../Skills/DevOps/Jira.md) (20), [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (13), [Atlassian](../../Glossary/Service/Atlassian.md) (3)
> **Tools:** jira (20), bitbucket (13)
> **Prerequisites:** set up (3), configure (2), getting started (1)
> **UI Navigation:** go to (2), dropdown (2), select the (1)
> **URLs:** [atlassian.net](https://atlassian.net) (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)

#### [Automate issue updates](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980&t=1)** - [Instructor] Now that we've seen how [Jira](../../Skills/DevOps/Jira.md) can be connected to [Bitbucket](../../Skills/Software%20Development/Bitbucket.md), let's tap into another Jira superpower, automation. Jira automation allows for synchronization between project management and code development activities. By reflecting the real time status of the work being done, automation keeps [Project Tracking](../../Skills/Network%20and%20System%20Administration/Project%20Tracking.md) accurate and up to date. Developers can work in Bitbucket while project managers and other team members track progress in Jira, allowing the team to collaborate from the tool they're most familiar with. On the Jira side, we use rules to describe the triggers and components that implement automation. A trigger describes when a rule should be run. Triggers are events like creating a commit or a branch, or merging a poll request. The components of an automation rule describe the steps the rule will take. This includes actions like transitioning an issue, logic for determining if the rules should proceed, or looping over multiple issues in branches. Fortunately, Jira provides templates that we can use to start automating right out of the box. Let's go to the Jira interface and set up some rules for our project. I'm logged into my Jira account and I'm doing the homepage for my project. To start creating automation rules, I'll select project settings. And then automation. I don't have any rules defined,
>
> **[1:37](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980&t=97)** so right away I'm directed to the templates page. Take some time to explore the rule templates you can choose from. For now, I'll scroll down to the [DevOps](../../Topics/DevOps.md) section.
>
> **[1:56](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980&t=116)** This is where we'll find rule templates for actions that update issues based on changes in repositories. I'm mainly interested in these two rules that use branch creation and merging to update issues. Let's start with branch creation. This rule uses a branch creation to trigger the processing of the rule components. The first component is a logic block that checks to see if the issue is in the to do state, that is work on the issue hasn't already been started. If the check returns true, then the rule will process the next component. The next component is where the rubber meets the road. If all the other conditions are met, then Jira will update the issue to be in progress. Now this template is already provided for us, so we don't have to do anything but enable it by selecting this button to turn the rule on, We even get an option to let [Atlassian](../../Glossary/Service/Atlassian.md) know what our automation experience has been like. I'm going to say thumbs up. And from here I'll select return to rules. Now I'll go back to the templates page and enable the second rule for branches.
>
> **[3:27](https://www.linkedin.com/learning/learning-bitbucket/automate-issue-updates?u=76281980&t=207)** This rule helps us know when all work on a branch is completed. A pull request merge kicks off the rule, and if the issue isn't already done, Jira will move the rule into the done column. I'll enable this rule and go back to the rule list. Okay, with these rules in place, we can keep Jira and Bitbucket synchronized. In the next video, let's create an issue and link it to a Bitbucket branch.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jira](../../Skills/DevOps/Jira.md) (11), [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (4), [Project Tracking](../../Skills/Network%20and%20System%20Administration/Project%20Tracking.md) (1), [DevOps](../../Topics/DevOps.md) (1), [Atlassian](../../Glossary/Service/Atlassian.md) (1)
> **Tools:** jira (11), bitbucket (4)
> **Cross-References:** go back to (2), in the next (1)
> **UI Navigation:** go to (1), scroll down (1)
> **CLI Commands:** find (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)

#### [Create an issue and link to the Bitbucket branch](https://www.linkedin.com/learning/learning-bitbucket/create-an-issue-and-link-to-the-bitbucket-branch?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-bitbucket/create-an-issue-and-link-to-the-bitbucket-branch?u=76281980&t=1)** - [Instructor] At this point, we have our project connected to [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) and we've added rules that will automatically update issues based on events in a repository. To see how everything comes together, let's start by creating an issue. To create an issue from the dashboard, I just need to type in the name of the issue. How about Sync Demonstration? Now I'll select the issue to see the details. A couple things that we can note from this view is that the issue is still in the to-do state and it's unassigned. I'll assign the issue to myself. And to get started working on this issue, I'll select Create Branch. This opens a new tab in Bitbucket where I can enter the branch details. Because this project is attached to two repositories and I also have other workspaces in this account, I have to select the specific repo I want to create the branch in. I'll use the public repo. For the branch type, I'll select feature. I'll keep the main branch selected, and then select Create. Okay, the branch is created. Let's take a look to see what happened in [Jira](../../Skills/DevOps/Jira.md). Back in Jira, the issue was automatically updated to be in progress, and if I scroll down a bit and open the Automation pane and select Refresh,
>
> **[1:39](https://www.linkedin.com/learning/learning-bitbucket/create-an-issue-and-link-to-the-bitbucket-branch?u=76281980&t=99)** I can see a log with a rule that was used to update the issue. Pretty cool, right? If I close the issue and go back to the board, sure enough, the tile for this issue is in the correct column. In the next video, we'll use a pull request to trigger another update to this issue.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (2), [Jira](../../Skills/DevOps/Jira.md) (2)
> **Tools:** bitbucket (2), jira (2)
> **UI Navigation:** select the (2), scroll down (1), open the (1)
> **Cross-References:** go back to (1), in the next (1)
> **Speakers:** - [instructor] (1)

#### [Update and close issues from Bitbucket](https://www.linkedin.com/learning/learning-bitbucket/update-and-close-issues-from-bitbucket?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-bitbucket/update-and-close-issues-from-bitbucket?u=76281980&t=1)** - [Instructor] I'm back in my [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) account now, viewing the branch page. To see the feature branch I just created, I'll select all branches. I'll select that branch and then view source, and then I'll edit the read me. I'll make a small change to the file near the top, and then commit the change. Now let's create a pull request.
>
> **[0:45](https://www.linkedin.com/learning/learning-bitbucket/update-and-close-issues-from-bitbucket?u=76281980&t=45)** The source and destination branches are already selected, and I'll add the title and description to be something a little more meaningful.
>
> **[1:00](https://www.linkedin.com/learning/learning-bitbucket/update-and-close-issues-from-bitbucket?u=76281980&t=60)** I'll also select the option to delete the branch and then create pull request. Okay, we have the pr. Let's go back to [Jira](../../Skills/DevOps/Jira.md). I'm back in Jira, and I want to refresh my screen for this next step, and it's a very subtle detail, but I'll place my mouse pointer right here next to this icon. If I hover my mouse pointer over that icon on the issue, I can see a status message showing that a pull request was created. This is a good example of how our project manager or a stakeholder could follow along with work being done without ever having to leave Jira. But to wrap up this demonstration, we need to go back to Bitbucket and merge this PR. Okay, back on the pull request page, I'll go ahead and start merging this request. Everything looks good here, so I'll go ahead and select Merge. Okay, the merge is complete, let's go back to Jira. Once we're back in Jira, the issue is automatically moved to the done column. I didn't even have to refresh the page. Just to make sure everything is synchronized correctly, I can hover over the branch icon again, and there's the final confirmation that the pull request has indeed been merged.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jira](../../Skills/DevOps/Jira.md) (5), [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (2)
> **Tools:** jira (5), bitbucket (2)
> **Cross-References:** go back to (3)
> **CLI Commands:** make (2)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Trigger Jira automation from Bitbucket](https://www.linkedin.com/learning/learning-bitbucket/challenge-trigger-jira-automation-from-bitbucket?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-bitbucket/challenge-trigger-jira-automation-from-bitbucket?u=76281980&t=0)** (bright music)
>
> **[0:06](https://www.linkedin.com/learning/learning-bitbucket/challenge-trigger-jira-automation-from-bitbucket?u=76281980&t=6)** - [Instructor] I hope you're as excited as I am for one more challenge. In this challenge, you'll continue your role as the [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) expert on the team developing the Amazing mobile app. Since the last challenge, the application has grown in popularity and has millions of daily active users. The team has decided to bring on a project manager to help streamline new features and prioritize bug fixes. Your task is to set up a [Jira](../../Skills/DevOps/Jira.md) project, connecting it to existing repositories, and demonstrating how the team can manage issues using automation rules, branches, and pull requests. To complete this challenge, you'll start by creating a Jira project. Then connect the Jira project to the Bitbucket repositories the team already has in place. After the repos are connected, create automation rules that will update the state of issues linked to a branch in a repository. To demonstrate that everything is working as expected, create a new issue in Jira. Use the issue to create a feature branch, and then create and merge a pull request to trigger the automation rules. If you've been following along with the challenges so far, this challenge should take about 45 minutes to complete. You are going to do amazing with this challenge. Refer to the exercise files as needed, and then join me in the next video to go over the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jira](../../Skills/DevOps/Jira.md) (4), [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (2)
> **Tools:** jira (4), bitbucket (2)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Trigger Jira automation from Bitbucket](https://www.linkedin.com/learning/learning-bitbucket/solution-trigger-jira-automation-from-bitbucket?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-bitbucket/solution-trigger-jira-automation-from-bitbucket?u=76281980&t=0)** (upbeat playful music)
>
> **[0:06](https://www.linkedin.com/learning/learning-bitbucket/solution-trigger-jira-automation-from-bitbucket?u=76281980&t=6)** - [Instructor] There was a lot packed into this challenge, and I hope you had as much fun as I did solving it. We got to use all the things we learned about [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) and [Jira](../../Skills/DevOps/Jira.md). I won't walk through all the steps that I took to reach my solution, but I will show the final state. Starting in Jira, I did create a project for the amazing mobile app. So the people that are working on this project, either the community or the team, they'll be able to see how their issues are tracked from to do to in progress to done. This is where the project manager is definitely going to spend most of their time. For the folks that are actually adding code though, we needed to connect those repositories to this project. And if I go to the Code tab, I can see here that indeed both the team and the community repos were connected to this project. And really the key to this exercise was to connect Jira to Bitbucket in a way that we can track the work that's being done in these repositories with tasks that are assigned from the project. So to do that, we also had to add some automation. So if I scroll down over here to Project settings and then select Automation, we can see the rules that I had to add here to move these issues from their current state to do to in progress and to done when the branch was either created or when a poll request was merged.
>
> **[1:40](https://www.linkedin.com/learning/learning-bitbucket/solution-trigger-jira-automation-from-bitbucket?u=76281980&t=100)** These rules will be applied as I was actively working on the assignment that I had from this particular project. But because I've gone through everything, let's just go back and see some of the artifacts that were created from that process. I'll go back to the project and go back to the Board. And from here I can see the issue that I created, the Add roadmap document, and I've got that merge icon here that shows me that yes, indeed a branch was created from this issue and it was eventually merged back in. Now that doesn't necessarily guarantee just, you know, creating the branch and merging it in that this branch or that rather this issue would be moved from to do to in progress to done. One way that we can confirm that our rules were actually applied to this issue to affect this merge is to select the issue itself and then scroll down to the automation section. And if I select Refresh here, I can see the rules that were run recently. And if I hover over it, one of these links here, I can see the exact, you know, the full name of the rule that was run. In this case, this is for when the branch was created, then the issue was moved to in progress. And this one here, if I hover there, I can see that this was when the pull request was merged and the issue was moved to done. So really that's the confirmation that all of our automation is in place correctly, and the changes that we did in Bitbucket were applied to this issue in Jira. So after confirming that the task was assigned in Jira
>
> **[3:16](https://www.linkedin.com/learning/learning-bitbucket/solution-trigger-jira-automation-from-bitbucket?u=76281980&t=196)** and completely updated from Bitbucket, I'll say that this challenge was solved successfully.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jira](../../Skills/DevOps/Jira.md) (5), [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (4)
> **Tools:** jira (5), bitbucket (4)
> **UI Navigation:** scroll down (2), go to (1), select the (1)
> **Cross-References:** go back to (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat playful music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/learning-bitbucket/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-bitbucket/next-steps?u=76281980&t=0)** - We covered a lot in this course, and there's still so much more that [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) has to offer. Take the time to learn about other Bitbucket features, like hosting static websites, using snippets to share files, or adding CI/CD capabilities to all of your [Software Projects](../../Skills/Software%20Development/Software%20Projects.md) with Bitbucket pipelines. Whatever path you choose, check out the exercise files for links to these and other topics as you continue your Bitbucket journey. It's been an honor to be your instructor for this course, and I really appreciate your attention and feedback. I'm looking forward to seeing what you create with Bitbucket.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (5), [Software Projects](../../Skills/Software%20Development/Software%20Projects.md) (1)
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

### In [Master Bitbucket](../../Paths/DevOps/Learning%20Paths/Master%20Bitbucket.md)
**1 of 3** | [Bitbucket Pipelines for CI-CD](Bitbucket%20Pipelines%20for%20CI-CD.md) →

## Appears In

- [Master Bitbucket](../../Paths/DevOps/Learning%20Paths/Master%20Bitbucket.md)

## Related Courses

_Courses sharing skills:_

- [Advanced Bitbucket Pipelines- Automating Deployments and Managing Third-Party Integrations](Advanced%20Bitbucket%20Pipelines-%20Automating%20Deployments%20and%20Managing%20Third-Party%20Integrations.md) — Bitbucket
- [Bitbucket Pipelines for CI-CD](Bitbucket%20Pipelines%20for%20CI-CD.md) — Bitbucket
- [Git Essential Training](../Web%20Development/Git%20Essential%20Training.md) — Version Control

---

[↑ Back to top](#)