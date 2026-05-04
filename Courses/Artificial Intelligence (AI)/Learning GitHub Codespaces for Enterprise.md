---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: learning-github-codespaces-for-enterprise
url: "https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise"
duration_minutes: 88
duration: 1h 28m
level: Intermediate
updated: 4/24/2025
learners: 3174
skills:
  - Codespaces
  - GitHub
exercise_files: true
github: "https://github.com/LinkedInLearning/github-codespaces-2479226"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQGuwF3dwQt0KA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1707244953406?e=2147483647&amp;v=beta&amp;t=2IogZ5daNFcue-YI3-KQyCkGupoBIrhtKSl3BxB00ic"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[Prepare for the GitHub Foundations Certification](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Prepare%20for%20the%20GitHub%20Foundations%20Certification.md)'
prev_courses:
  - '[Practical GitHub Copilot](../Software%20Development/Practical%20GitHub%20Copilot.md)'
next_courses:
  - '[GitHub Foundations- Privacy, Security, and Administration](GitHub%20Foundations-%20Privacy%2C%20Security%2C%20and%20Administration.md)'
path_nav: '[{"path":"Prepare for the GitHub Foundations Certification","position":5,"total":7,"prev":"Practical GitHub Copilot","next":"GitHub Foundations- Privacy, Security, and Administration"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/codespaces
  - skill/github
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Learning%20GitHub%20Codespaces%20for%20Enterprise.md)

![Learning GitHub Codespaces for Enterprise](https://media.licdn.com/dms/image/v2/D4D0DAQGuwF3dwQt0KA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1707244953406?e=2147483647&amp;v=beta&amp;t=2IogZ5daNFcue-YI3-KQyCkGupoBIrhtKSl3BxB00ic)

# Learning GitHub Codespaces for Enterprise

> GitHub is the largest remote code hosting and code collaboration platform. Remote coding environments and editors are also fast-rising technologies that aim to boost developer productivity by offering isolated, disposable, and easily configurable development environments. In this course, Fikayo Adepoju shows you how GitHub Codespaces combine the best of both worlds by providing a remote developmen

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise) | 1h 28m | Intermediate | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Bring Codespaces to your organization](#bring-codespaces-to-your-organization)
  - [What you should know](#what-you-should-know)
  - [Who should take this course](#who-should-take-this-course)
- [**1. Getting Started with Codespaces**](#1-getting-started-with-codespaces) (5 videos)
  - [What is GitHub Codespaces?](#what-is-github-codespaces)
  - [GitHub Codespaces vs. github.dev](#github-codespaces-vs-githubdev)
  - [Signing up for Codespaces](#signing-up-for-codespaces)
  - [Creating a codespace](#creating-a-codespace)
  - [Adding a Codespaces button to the README](#adding-a-codespaces-button-to-the-readme)
- [**2. Configuring Your Codespaces**](#2-configuring-your-codespaces) (6 videos)
  - [Introduction to dev containers and devcontainer.json](#introduction-to-dev-containers-and-devcontainerjson)
  - [Defining your development environment](#defining-your-development-environment)
  - [Port forwarding](#port-forwarding)
  - [Setting a default editor](#setting-a-default-editor)
  - [Personalizing your setup with extensions](#personalizing-your-setup-with-extensions)
  - [Codespace logs](#codespace-logs)
- [**3. Developing in a Codespace**](#3-developing-in-a-codespace) (5 videos)
  - [A tour of the codespace editor](#a-tour-of-the-codespace-editor)
  - [Running your application](#running-your-application)
  - [Committing and pushing code changes](#committing-and-pushing-code-changes)
  - [Creating a pull request](#creating-a-pull-request)
  - [Deleting a codespace](#deleting-a-codespace)
- [**4. Advanced Concepts**](#4-advanced-concepts) (5 videos)
  - [Connecting to Codespaces from VSCode](#connecting-to-codespaces-from-vscode)
  - [Restricting machine types](#restricting-machine-types)
  - [Using predefined containers](#using-predefined-containers)
  - [Environment variables](#environment-variables)
  - [Storing sensitive data](#storing-sensitive-data)
- [**5. Using Codespaces with GitHub Models**](#5-using-codespaces-with-github-models) (3 videos)
  - [Using Github Models with Codespaces](#using-github-models-with-codespaces)
  - [Using Github Models in live projects](#using-github-models-in-live-projects)
  - [Working with different models in a project](#working-with-different-models-in-a-project)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Bring Codespaces to your organization](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/bring-codespaces-to-your-organization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/bring-codespaces-to-your-organization?u=76281980&t=0)** - In today's cloud first and cloud native world more and more teams are moving their software infrastructure to the cloud. But this paradigm shift in [Application Development](../../Skills/Software%20Development/Application%20Development.md) it makes a lot of sense to also move the entire [Software Development](../../Topics/Software%20Development.md) process to the cloud. In comes [GitHub](../../Skills/Software%20Development/GitHub.md) Code Spaces. GitHub Code Spaces is a cloud-based development environment for writing, to bargain, testing and deploying code. You can also generate a public URL for stakeholders to follow up with the progress of your application at any point in the development process. If you prefer to work in your local visuals studio code environment but still want to take advantage of the machine power that is available on Code Spaces, GitHub Code Spaces allows you to connect your local VS code installation to your code spaces and have all the powerful features that comes with code spaces at your fingertips. Hi, I am Fikayo Adepoju, and I've been building applications for over 10 years now. One thing I have observed over the years is the gradual transition from the frustration of managing all your development tools locally to faster, more powerful, and easily disposable cloud tools that offer mortgage and reliability. This is what got me super excited with the release of GitHub Code Spaces. I am inviting you to join me in this course as I help you transition your development workflow to GitHub Code Spaces.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (5), [Application Development](../../Skills/Software%20Development/Application%20Development.md) (1), [Software Development](../../Topics/Software%20Development.md) (1)
> **Tools:** github (5), vs code (1)
> **Env Vars:** url (1)
> **Definitions:** is a  (1)
> **Speakers:** - in (1)

#### [What you should know](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/what-you-should-know?u=76281980&t=0)** - [Instructor] In order to take this course, there are a couple of skills you need to have under your belt. These skills are required for you to successfully follow along with the course. First, is coding experience. You are required to have at least a basic understanding of how to code within an editor, and you need to have spent some time developing software applications. Your programming language of choice is not a factor here. Next, you need to be familiar with [Version Control](../../Skills/Web%20Development/Version%20Control.md) systems lik [Git](../../Skills/Software%20Development/Git.md), and the entire process of staging, committing and pushing code to [GitHub](../../Skills/Software%20Development/GitHub.md). We also make use of Docker in this course. However, you can follow along if you have no experience using Docker. We will define the role Docker plays in GitHub [Codespaces](../../Skills/Software%20Development/Codespaces.md), enough for you to grasp the concepts necessary for using Docker within your Codespaces. With this skill at your fingertips, you can start learning how to use GitHub Codespaces for [Software Development](../../Topics/Software%20Development.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (3), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (3), [Version Control](../../Skills/Web%20Development/Version%20Control.md) (1), [Git](../../Skills/Software%20Development/Git.md) (1), [Software Development](../../Topics/Software%20Development.md) (1)
> **CLI Commands:** docker (4), git (1), make (1)
> **Tools:** github (3)
> **Prerequisites:** you need to have (2), required to (1)
> **Speakers:** - [instructor] (1)

#### [Who should take this course](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/who-should-take-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/who-should-take-this-course?u=76281980&t=0)** - So, who should be taking this course? If you have found your way to this course, this is the time to answer a couple of questions that will determine if this is the right course for you. Ready? Let's go. Are you a developer trying to learn about or take advantage of a cloud-based development platform? Are you a development team that wants to move some or all of its workflows to a remote development platform and take advantage of the collaborative features? Do you need to quickly spin up a publicly accessible address where clients and other stakeholders can check the progress of your work and you want the luxury of doing this directly from your ID? Are you tired of installing and configuring your ID on all computer systems you work on and you just want to configure once and be able to work from anywhere using the same configuration? Or are you a project manager or engineering team manager looking to optimize the workflows of your development team? If your answer to any of these questions is yes then you are in the right place. Get Up Code Spaces is a remote development and co-collaboration platform that comes with a suit of features to help you collaborate and share your work. You can also automate the deployment of your applications and customize the programming experience for your entire team. Sounds good? Let's get started.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - so (1)


### 1. Getting Started with Codespaces

[↑ Back to Table of Contents](#table-of-contents)

#### [What is GitHub Codespaces?](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/what-is-github-codespaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/what-is-github-codespaces?u=76281980&t=0)** - [Instructor] [GitHub](../../Skills/Software%20Development/GitHub.md) [Codespaces](../../Skills/Software%20Development/Codespaces.md) can be described in a lot of ways, and you may have come across a couple of definitions while researching the product. In this video, we'll describe GitHub Codespaces based on its purposes and explore what it does for developers and development teams. Simply put, GitHub Codespaces is a cloud-based development environment for writing, debugging, testing and deploying code. If you're already familiar with working with Visual Studio Code, the GitHub Codespaces editor should feel more natural to you. The Codespaces development environment runs in a virtual machine in the cloud. This makes Codespaces available everywhere, and developers can develop software within [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) that are faster, and more efficient than their personal computers. GitHub Codespaces also come bundled with a suite of code collaboration features that helps teams to work together efficiently. Codespaces seamlessly integrates with GitHub giving it all the powerful collaboration features available on GitHub. GitHub Codespaces also allows you to configure a standardized development environment for your development teams. Let's say you have a style guide that your developers should adhere to, or you want every developer to be set up with a couple of plugins that improve their development experience. You can configure these and many more for all developers on your team, and average replicated across all Codespaces instances. Want to review your application? GitHub Codespaces gives you the ability to spin up a staging environment by generating a preview URL where clients and stakeholders can view the progress of your work. Earlier in the video,
>
> **[1:33](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/what-is-github-codespaces?u=76281980&t=93)** I stated that Codespaces run in virtual machine. As a user, Codespaces gives you the ability to select different machines specifications for memory and CPU calls based on your preferences for computing power. GitHub Codespaces gives you everything you are already used to when coding on your personal machine, and even more. And with its ubiquitous accessibility advantage, you can enjoy the freedom of developing software from anywhere with all your favorite tools at your fingertips.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Codespaces](../../Skills/Software%20Development/Codespaces.md) (14), [GitHub](../../Skills/Software%20Development/GitHub.md) (10), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (1)
> **Tools:** github (10), visual studio (1)
> **Prerequisites:** configure (2), set up (1)
> **Env Vars:** url (1), cpu (1)
> **Cross-References:** earlier in (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [GitHub Codespaces vs. github.dev](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/github-codespaces-vs-github-dev?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/github-codespaces-vs-github-dev?u=76281980&t=0)** - You may have come across another cloud-based editor by [GitHub](../../Skills/Software%20Development/GitHub.md) called [GitHub.dev](https://GitHub.dev). This editor can be pulled up by going to a GitHub repository and hitting the 'dot' key on your keyboard. You are then automatically presented with a cloud-based visual studio coding environment with the files in your repository loaded. This service, which is located at the domain [GitHub.dev](https://GitHub.dev) was made available by GitHub to enable developers to make quick edits to their projects. And that's all there is to it. [GitHub.dev](https://GitHub.dev) does not come bundled with all the collaborative deployment and machine configuration features available in GitHub [Codespaces](../../Skills/Software%20Development/Codespaces.md). GitHub Codespaces are fully featured development environments for performing various tasks in your development workflows and not just code editing. You also do not have the ability to sync your [GitHub.dev](https://GitHub.dev) environment with your local Visual Studio Code Editor. Unlike GitHub Codespaces, [GitHub.dev](https://GitHub.dev) editors are not persistent. You make use of them, and they are immediately discarded once you close the browser tab. Here is a rule of thumb to determine when to use GitHub Codespaces or [GitHub.dev](https://GitHub.dev): If you need to make a quick change to a file in your repository and commit the changes, use [GitHub.dev](https://GitHub.dev). However, if you need a remote development environment running on a powerful machine with all the features required to write, debug, preview and deploy your application along with configurations that can be shared across developers within your team, then GitHub Codespaces is what you need.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (15), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (5)
> **Tools:** github (15), visual studio (2)
> **URLs:** [github.dev](https://github.dev) (7)
> **CLI Commands:** make (3)
> **Definitions:** is a  (1)
> **Best Practices:** rule of thumb (1)
> **Prerequisites:** required to (1)
> **Speakers:** - you (1)

#### [Signing up for Codespaces](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/signing-up-for-codespaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/signing-up-for-codespaces?u=76281980&t=0)** - Unlike many features of [GitHub](../../Skills/Software%20Development/GitHub.md) that are available by default GitHub [Codespaces](../../Skills/Software%20Development/Codespaces.md) is an opt-in service. This means that you have to explicitly configure your GitHub account to use Codespaces. There is also a set of criteria to be met for a GitHub account to make use of Codespaces. So before we sign up for Codespaces let's go over the requirements. First, as at the time of this recording Codespaces can only be used on a GitHub organization account. This means that you cannot make use of Codespaces on a personal GitHub account so you will need to create a GitHub organization. This can be done from the profile menu of your regular GitHub account. The next requirement for Codespaces is that you need to be on a team or enterprise plan on your GitHub organization. What this means is that GitHub Codespaces is not a free service and as at the time of this recording it does not have a free tier. Once you satisfy these requirements you can go ahead and start using GitHub codespaces. Let's go ahead and sign up for a GitHub Codespaces, starting with creating an organization. To create a new organization. Click on the profile menu on your GitHub account and go to your organizations. On the organization's page. Click on the new organization button. When clicked, you'll be taking to the pricing page where you can choose an appropriate plan for your organization. To use GitHub Codespaces you need to be on either the team or enterprise plan. You can also switch the toggle buttons at the top to go for a monthly or yearly subscription payment model. For this demo, let's go ahead with a monthly team plan.
>
> **[1:36](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/signing-up-for-codespaces?u=76281980&t=96)** Click create a new organization. And now that we have selected our preferred plan and subscription present model we can enter the name of our organization. Next, we select where the organization belongs to. I'm going to be going with my personal GitHub account. You can also go for a business or institution account. Once I have that selected you can click and accept the terms and conditions. Then click next to go to the payment details. Everything checks out, and if you scroll down you can enter your card details to make payments or pay through PayPal. I've already done this, so I'm just going to go to my organization and start working with GitHub Codespaces. Here in my organization, smartly named GitHub Codespaces, you're welcome, I have one repository created. This is the repository on which we'll be demonstrating the use of Codespaces throughout this course. To verify that we have Codespaces, let's go to this repository and then click the code drop down. If you see two tabs, one labeled Codespaces, this confirms that we now have Codespaces within our organization and we can use it within our repositories. You also have the local tab, which you're already used to and now we can start creating Codespaces on our organization repositories.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Codespaces](../../Skills/Software%20Development/Codespaces.md) (18), [GitHub](../../Skills/Software%20Development/GitHub.md) (17)
> **Tools:** github (17)
> **UI Navigation:** click on (2), go to (2), toggle (1), scroll down (1)
> **CLI Commands:** make (3)
> **Definitions:** means that (2), is an  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - unlike (1)

#### [Creating a codespace](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/creating-a-codespace?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/creating-a-codespace?u=76281980&t=0)** - As we have seen in the previous video, once you have code spaces activated, you can now create a new code space on a repository within your organization's account. To create a new code space for this repository, click the code drop down. If you're not automatically on the code spaces tab, you can click on the tab to switch to it. By default you can create a code space on the branch you're currently on, like here on the main branch. To create your code space on a different branch, click the dropdown arrow on the code spaces button to select the option. In this video, we'll be creating a code space on the main branch. So click the create code base on main button. [GitHub](../../Skills/Software%20Development/GitHub.md) then goes to work creating your code space. This process will take a couple of seconds, and once it's done, you'll then be taken to a cloud-based visual studio code environment. The first time you're in your code space environment, you'll be presented with a few options to configure your code space. This includes selecting a theme, syncing to other devices, and so on. For now we'll just be going with the defaults. All the files in your repository can also be seen in the file explorer window of your editor. You can also see the usual visual studio code tabs for search, source control, debugging, extensions, and a new Github tab that gives you an overview of the state of your repository. To see all your code spaces,
>
> **[1:34](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/creating-a-codespace?u=76281980&t=94)** click the application menu and go to my code spaces. Here on the code spaces page, you can click on the ellipses menu beside a code space to perform operations like starting, stopping, and deleting the code space. If you're done working in your code space, and you don't want to keep consuming machine resources, click stop code space to send your code space into sleep mode. If you no longer need the code space, you can then use the delete button. Do note that deleting the code space is an irreversible operation. Meaning that you cannot recover deleted code spaces. So be sure you no longer need the code space before deleting it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (2)
> **UI Navigation:** click on (2), switch to (1), dropdown (1), select the (1), go to (1)
> **Tools:** github (2), visual studio (2)
> **Cross-References:** previous video (1)
> **Definitions:** is an  (1)
> **Warnings:** note that (1)
> **Prerequisites:** configure (1)
> **Speakers:** - as (1)

#### [Adding a Codespaces button to the README](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/adding-a-codespaces-button-to-the-readme?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/adding-a-codespaces-button-to-the-readme?u=76281980&t=0)** - [Lecturer] In this video, we'll be adding an item to our repository that will make it easier for people to run our code in a codespace. We will be adding a button to our repositories README file that will allow users create a new codespace. This way, users can quickly jump into an editor to explore our code base. To get started navigate to the home of the repo you want to add this button to. This can be any repository on your [GitHub](../../Skills/Software%20Development/GitHub.md) account. Make sure that this repo has a README file as you can see on the screen. And this README file has to be at the root of the project. If your project doesn't have a README file, ensure that you add one. This repo has a README file, so I'll just get started by clicking on the edit icon at the right hand corner of the README file display section. Scroll down here and click this edit icon. This immediately takes me into the edit mode for this file. Here, we'll be adding some markdown script that will create a button that says open in GitHub [Codespaces](../../Skills/Software%20Development/Codespaces.md). When this button is clicked, the user will be able to create a new codespace to run our code. To begin, find the point in your README file to insert this button. This is where we're going to be writing our markdown script. For this project I just want it at the top of the file. Just after the Running the Application error to create the button, we start with a set of square brackets followed by regular ones. Let's say square brackets, open, close, and regular bracket open, close. The square brackets will hold our button while the regular brackets will contain the link that will prompt the creation
>
> **[1:34](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/adding-a-codespaces-button-to-the-readme?u=76281980&t=94)** of a new codespace for this repository. Let's start with the button. Inside the square brackets, first add an exclamation mark. Go in, say exclamation mark. Now follow this with another set of square and regular brackets. Don't get confused. This will all come together nicely very soon. So another square open and close and regular bracket, open and close. The internal square bracket will hold the name of our button, while the internal regular bracket will have a link to the SVG of a standard GitHub badge. This will give our button a nice professional look and blend it in with GitHub's standard team. Inside the internal square brackets, type the label Open in GitHub Codespaces. Now, inside the regular brackets, that's the internal regular brackets, enter the URL for the GitHub badge. There's going to be [https://github.com/codespaces/badge.svg](https://github.com/codespaces/badge.svg).
>
> **[2:41](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/adding-a-codespaces-button-to-the-readme?u=76281980&t=161)** With that in place, we now have the buttons look and fill and label all set up. Now let's add the link that will trigger the creation of a new codespace from our repo. Inside the external brackets, input the link [https://codespaces.new](https://codespaces.new)/
>
> **[3:06](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/adding-a-codespaces-button-to-the-readme?u=76281980&t=186)** and here I'm just going to put placeholders so that I can explain, [Your_github]username
>
> **[3:17](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/adding-a-codespaces-button-to-the-readme?u=76281980&t=197)** forward slash another placeholder, [Your_repo_name]. Now this is the structure of the URL that is going to be triggering the creation of a new codespace. You have [https://codespaces.new](https://codespaces.new)/ then here you put your GitHub username forward slash your repo name. So this is basically the last two items in your GitHub repository URL. Now let's replace this. For this GitHub account my username is coderonfleek. You can do this on any account, you can do this on any GitHub account. You can jump to your personal GitHub account right now and do this. So I have my username here and here my repo name, which is simple-node-api. Simple-node-api. And bring this bracket closer. And now we have our button all set up. With all this in place, I'm going to commit my changes. A commit message will be Adding codespaces button.
>
> **[4:27](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/adding-a-codespaces-button-to-the-readme?u=76281980&t=267)** Yeah, that's an appropriate commit message. Yeah, definitely I'm committing directly to the master brand so I commit the changes. And now you can see a new Open in GitHub Codespaces badge at the location where we just added it. As you can see, it uses the GitHub SVG to make it feel native to the GitHub interface. Now let's test out our new badge. Click the button and you will be automatically taken to a new codespaces setup screen. This is where you can configure your codespace machine. But for now, for this demo, we'll going to be going with the default. So let's click Create codespace to proceed. This automatically begins the creation of our codespace, and we're just going to wait for that to complete. Once the process is done, we can now see our repo opened up in a brand new GitHub codespace environment. We can navigate our files as usual and also assess the menu to go back to all our codespaces.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (16), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (9)
> **Tools:** github (16)
> **Env Vars:** readme (7), url (3), svg (2)
> **CLI Commands:** make (3), node (2), find (1)
> **Prerequisites:** set up (2), setup (1), configure (1)
> **URLs:** [https://codespaces.new](https://codespaces.new) (2), [https://github.com/codespaces/badge.svg](https://github.com/codespaces/badge.svg) (1)
> **UI Navigation:** navigate to (1), scroll down (1)
> **Cross-References:** go back to (1)


### 2. Configuring Your Codespaces

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to dev containers and devcontainer.json](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/introduction-to-dev-containers-and-devcontainer-json?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/introduction-to-dev-containers-and-devcontainer-json?u=76281980&t=0)** - Ever wondered what environment your codespace is running in? Is it embedded within the browser or is it a virtual environment running off your local resources or just a web app running on some remote server? The answer to these questions will help you understand better how [Codespaces](../../Skills/Software%20Development/Codespaces.md) work, and how to get the best out of them. [GitHub](../../Skills/Software%20Development/GitHub.md) Codespaces is run in a container. A container is an isolated environment containing the resources, software, and sometimes, the startup instructions that an application needs to run. If you've worked with a container program like Docker, you'll be very familiar with this concept. By the way, codespace devcontainers are actually docker containers. These containers are configured to provide a full featured environment for your codespaces. Later in this course, we'll be looking at how to configure some of the options available using a container configuration file. So, where do these codespace containers live? A codespace devcontainer resides on a virtual machine. You can specify the memory and CPU, for this machine, when creating a new codespace. Now, you might be asking, where is the devcontainer from a current codespace, and where is it configured? When you create a codespace, GitHub runs your codespace in a default devcontainer, using the default configuration. This is the configuration your codespace container will continue to use if you do not define one. The default container contains many of the common tools that your team might need, when developing your project.
>
> **[1:34](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/introduction-to-dev-containers-and-devcontainer-json?u=76281980&t=94)** By default, the container for your codespace has many languages and runtimes, including note js, [JavaScript](../../Skills/Software%20Development/JavaScript.md), TypeScript, nvm, [npm](../../Skills/Web%20Development/npm.md), and yarn. It also includes helpful tools, like [Git](../../Skills/Software%20Development/Git.md), Wget, rsync, OpenSSH and nano editor. Though the default container is great, configuring the container to suit your needs offers more benefits. Defining your environment allows you to configure the dev container to give you a tailored development environment, complete with all the tools, and runtimes, you need to work on a specific project. So, how do you configure your development environment? Devcontainers can be configured using configuration files contained in a special .devcontainer directory, at the root of your repository. You can use the visual studio instance to add these files for you, and choose from a selection of predefined configurations for various project types. We'll demonstrate how to do this in the next video. The most important file to look out for in the.devcontainer directory is the devcontainer.[JSON](../../Skills/Web%20Development/JSON.md) file. This is the primary configuration file for your container. Within this file, You can define frameworks, tools and extensions required by your project, and also, expose certain parts to the public. Though the root of the .devcontainer folder is where you will most likely see this file. It can also recite at the root of your project,
>
> **[3:06](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/introduction-to-dev-containers-and-devcontainer-json?u=76281980&t=186)** or in the subdirectory within the .dev container. As you go along in this course, we are going to be improving our development environment by gradually adding new settings to this file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Codespaces](../../Skills/Software%20Development/Codespaces.md) (3), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [npm](../../Skills/Web%20Development/npm.md) (1), [Git](../../Skills/Software%20Development/Git.md) (1)
> **CLI Commands:** docker (2), npm (1), yarn (1), git (1), wget (1)
> **Tools:** github (2), visual studio (1)
> **Prerequisites:** configure (3)
> **Cross-References:** later in (1), in the next (1)
> **File Paths:** devcontainer.json (1)
> **Env Vars:** cpu (1)
> **Definitions:** is an  (1)

#### [Defining your development environment](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/defining-your-development-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/defining-your-development-environment?u=76281980&t=0)** - Now that you understand how [GitHub](../../Skills/Software%20Development/GitHub.md) code spaces are configured, let's start configuring our code space environment. We'll start by creating the configuration file for customizing our code space. Even though we can do this manually, we'll be using the in-browser Visual Studio environment to automatically generate one for us. This process is quicker, cleaner, and gives us a good starting point. To begin, click the hamburger menu at the top left of the editor window to pull out the menu. Then go to View and click on Command Palette. Once the command palette pops up search the phrase "dev container" and click the Add Development Container Configuration Files option. The next popup is a list of definition options. These are configuration file templates for different types of projects. Because we're running a [Node.js](../../Skills/Web%20Development/Node.js.md) project select the Node.js option. After selecting Node.js, we're now prompted to select the Node.js version we would like to use for this project. Version 14 should be good, so go ahead and select version 14. This way our Docker environment will be using Node.js version 14 for the project. The next pop-up prompts us to select additional features for the container or environment. These features include extensions, packages, and frameworks that help improve the developer experience. For this demo, simply select the GitHub [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md). Not for any particular reason, but just so we can see the effect of selecting this option in our configuration file.
>
> **[1:35](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/defining-your-development-environment?u=76281980&t=95)** Do know that you can select more than one feature to be included. Once you're done with your selection, click the green button labeled OK at the right-hand side of the feature set field. GitHub automatically goes into operation mode and in a matter of seconds, you'll see a .devcontainer folder appear in your file explorer. Inside this folder, there are two files critical to the environment's configuration. The devcontainer.[JSON](../../Skills/Web%20Development/JSON.md) file, discussed in a previous video, and a Dockerfile. The Dockerfile holds information about the Docker image that will be used to provide the specified Node environment. Within this file, we can see the image being used and the default value of Node.js variable. Some other commands are also commented out. If you have a good knowledge of Docker containers you can use this commands and also additional ones to improve your development experience. However, if you do not have strong Docker knowledge it is advised that you leave this file as is. You won't really need to touch these files for most of your environment customization tasks. The second file within the .devcontainer folder is the devcontainer.json file. This is the main configuration file for the code space environment. This is where all your development preferences are defined. Let's have a walkthrough of this file to get familiar with some of the available options. At the top, we have the name field.
>
> **[3:07](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/defining-your-development-environment?u=76281980&t=187)** This is the name of your dev container. This field can contain any value you want as the name of your container. The next is the build property which contains fields for setting the Docker container for your environment and the arguments that will be passed to your container upon startup. Next is customizations. This is where we can define all the VS Code settings that we like to have in each editor instance within our repository. For example, we can configure the type of terminal we would like to work in. Within the VS Code settings we also have the extensions property. Here we can list the VS Code extensions to be included by default within the array brackets. Our file currently has the [ESLint](../../Skills/Software%20Development/ESLint.md) [JavaScript](../../Skills/Software%20Development/JavaScript.md) linting extension installed. You can add any other extension from the VS Code marketplace here. Next is the forwardPorts property. This is used to expose ports within the Docker container to the public. You can use this property to expose your [Databases](../../Skills/Software%20Development/Databases.md) cache servers, application servers, and other services running within your code space container to be accessed by external applications. We'll be using this property in a later video to make our Node.js application accessible publicly. Next, we have the postCreateCommand property. This is used to run extra instructions after the code space has been created. You can use this property to run commands that aren't defined in the Docker file after your code space is created. Then we have the remoteUser property,
>
> **[4:41](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/defining-your-development-environment?u=76281980&t=281)** which is the name of the user you're currently running as within the container operating system. By default, this is the VS Code user, but you can optionally set this to root if you need to perform any operation requiring elevated privileges. The final property within our configuration file is added here due to the GitHub CLI feature we selected to be added as an extra feature. The features property contains a list of additional features to be added to the dev container. The devcontainer.json file is where you'll be defining most of the customizations for your workspace, and in the coming videos we'll be spending a lot of time in this file, defining properties to get the best out of our code space.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Node.js](../../Skills/Web%20Development/Node.js.md) (7), [GitHub](../../Skills/Software%20Development/GitHub.md) (4), [JSON](../../Skills/Web%20Development/JSON.md) (3), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (2), [ESLint](../../Skills/Software%20Development/ESLint.md) (1)
> **CLI Commands:** node (8), docker (7), make (1)
> **Tools:** vs code (5), github (4), visual studio (1), terminal (1)
> **File Paths:** node.js (7), devcontainer.json (3)
> **UI Navigation:** select the (3), go to (1), click on (1)
> **Code Identifiers:** forwardports (1), postcreatecommand (1), remoteuser (1)
> **Versions:** version 14 (3)
> **Env Vars:** cli (2)

#### [Port forwarding](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/port-forwarding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/port-forwarding?u=76281980&t=0)** - In a previous video we learned about the forward ports property. This property is set to an array containing ports within the code space container that we wish to expose publicly. Going back to our project files, let's open server dot js. The server dot JS file is the entry point for our new JS application. Within the file, we can see that our application exposes a node JS server listing on port 1 3 3 7 by default. We can expose this port to give us access to the server outside the code space container. Let's return to the code space configuration file to do that. In your dev containing the [JSON](../../Skills/Web%20Development/JSON.md) file, on command the forward ports property then add port 1 3 37 as an entry into the array. Save the file by using the control+S or command+S shortcut for [Windows](../../Glossary/Service/Windows.md) and Mac respectively or by going to file save on the code space menu. Now let's run the application and see if we can access the base endpoint. To run the application inside the terminal, if the terminal is not open, you can pull up the terminal by going to the menu terminal new terminal. This will pull up the [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) terminal at the root of your project. Here you can run commands related to your project or any Linux based commands. To put up our new JS server simply go to command MPM start. This will immediately boot up the server and you'll see a code space notification
>
> **[1:33](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/port-forwarding?u=76281980&t=93)** at the bottom left corner showing you the address and the port exposed to access the running server. A convenient open in browser button is also made available. You can click this button to go to the public address and the port on which your server is running. You can also click the see all forwarded ports link to view a list of all the ports within the container that have been exposed. To view and interact with the running server, click the opening browser button. [Codespaces](../../Skills/Software%20Development/Codespaces.md) then opens and bootstrap the application in a new tab and we are immediately taken to the root endpoint. Here we can see the server message printed out. Let me bump that up a little bit. Good, here is the base endpoint message that says, Welcome to the to-dos API. In our server JS file we can see where this message is configured to be printed out when a client visits the base endpoint.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (1), [Windows](../../Glossary/Service/Windows.md) (1), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (1)
> **Tools:** terminal (6)
> **Env Vars:** json (1), mpm (1), api (1)
> **Ports:** port 1 (2)
> **UI Navigation:** go to (2)
> **CLI Commands:** node (1)
> **Cross-References:** previous video (1)
> **Speakers:** - in (1)

#### [Setting a default editor](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/setting-a-default-editor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/setting-a-default-editor?u=76281980&t=0)** - By default, [Codespaces](../../Skills/Software%20Development/Codespaces.md) is run in a remote instance of Visual Studio Code for you to develop your project. However, if you already prefer working in your local desktop version of Visual Studio Code but still want to take advantage of all the powerful features that come with [GitHub](../../Skills/Software%20Development/GitHub.md) Codespaces, Codespaces gives you the ability to do that. When you open a new codespace, the web version of VS Code is open by default. In this video, I'm going to teach you how to configure GitHub Codespaces to automatically open in your local instance of VS Code instead of the browser version. GitHub Codespaces makes this switch very straightforward. To begin, go to your account, and your account menu. Click on settings. On the setting page, locate the code planning and automation section on the side menu. Then click on Codespaces. On the Codespaces settings page, scroll down until you hit the editor preference section. Here you can select the version of VS Code that should be opened by default when you click on your codespace. Right now we have it set to the default which is the web version. You can easily switch this to open the local VS Code instance by default. Do note, as described under this option, that you will need to have a locally installed version of VS Code and also install the GitHub codespaces extension
>
> **[1:35](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/setting-a-default-editor?u=76281980&t=95)** for VS Code. We'll be demonstrating how to set this up in a later video. For now, we'll just revert back to the web version. Once we have our local Visual Studio Code set up to use codespaces, we'll then test out this option.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Codespaces](../../Skills/Software%20Development/Codespaces.md) (9), [GitHub](../../Skills/Software%20Development/GitHub.md) (4)
> **Tools:** vs code (6), github (4), visual studio (3)
> **UI Navigation:** click on (3), go to (1), scroll down (1), select the (1), open the (1)
> **Prerequisites:** configure (1), install (1), set up (1)
> **Speakers:** - by (1)

#### [Personalizing your setup with extensions](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/personalizing-your-setup-with-extensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/personalizing-your-setup-with-extensions?u=76281980&t=0)** - [Speaker] Extensions are one of the biggest reasons why VS code is one of the most preferred code editors today. An extension, as the name implies, extends the functionality of Visual Studio Code by adding extra features that make the developer experience more pleasing. In a previous video, we already walked through our configuration file, and we came across the extensions property. This property allows you to add Visual Studio Code extensions from the marketplace to your codespace. Currently, we have the [ESLint](../../Skills/Software%20Development/ESLint.md) extension installed. Any extension added here will be available to every codespace instance created within this repository. Let's add a new extension and see how it takes effect within our codespace. For this demonstration, we'll be adding the Docker extension. In the extensions array, extensions are installed by adding the ID for the extension to be installed. One easy way to get the extension is to search for the extension in the VS Code Marketplace. There, we can then click the extension to get the ID from the extension page. Though we can click the button to directly add the extension to our codespace, we're trying to implement all our configurations through the dev content editor file. To get the ID, click the cog icon next to the install button and click "copy extension ID." Now, install your configuration file, go into the extensions array, and add the new Docker ID to add the new extension. Because we have changed this file,
>
> **[1:34](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/personalizing-your-setup-with-extensions?u=76281980&t=94)** our codespace prompts us to review the content so that these new change can take effect. Click on the "rebuild now" button to rebuild your codespace content with the new configuration. The confirmation prompt appears for you to confirm this action. This prompt carries a messages informing you about the effect of the action you are about to perform. Now that our rebuild is complete, notice we now have a new Docker icon on the side menu. With this new extension, we now have a bunch of Docker helper functions that have been added to our codespace. To confirm this, let's go to the command palette, and then type in the phrase "docker." As you can see, we now have new Docker commands added right into our command palette. Let's also go into our Docker file and try to add something new. Just below line three, I'm going to type the letters "WO," suggesting that I'm trying to define the working directory for my Docker file. As I begin to type, notice that I now get IntelliSense for the Docker command I am trying to type. This makes it easier for you to work within your Docker file, reducing the number of typing errors. These and many more are some of the helpful Docker features that have been added to our codespace by including the Docker extension.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ESLint](../../Skills/Software%20Development/ESLint.md) (1)
> **CLI Commands:** docker (12), make (1)
> **Tools:** vs code (2), visual studio (2)
> **UI Navigation:** click on (1), go to (1)
> **Prerequisites:** install (2)
> **Cross-References:** previous video (1)
> **Speakers:** - [speaker] (1)

#### [Codespace logs](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/codespace-logs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/codespace-logs?u=76281980&t=0)** - [Instructor] When things go wrong within the code space you need a way to diagnose the situation. This is where code space logs come in. [GitHub](../../Skills/Software%20Development/GitHub.md) [Codespaces](../../Skills/Software%20Development/Codespaces.md) generate different types of logs for you to troubleshoot issues in your code space container, the editor, and also in your current session. In this video, we'll be looking at two types of logs CodeSpaces generate to provide feedback on all that's happening within your code space environment. The first is creation logs. These logs contain detailed information about code space, the container, the session, and the Visual Studio code environment. To generate these logs at any point within your code space session, simply go to your command palette, then type "logs" to bring up the commands for accessing your code space logs. Here you can choose to view your logs or export them. To export your log click on the "Codespaces: Export Logs" command. You will then be prompted to save this somewhere within your repository. For now, I'll just save it in the root directory as "logs.zip." As you can see, Github CodeSpaces is currently creating the zip file for our logs. Once the zip file has been created, you can see the "logs.zip" file in your project root directory. You can then save this to your local machine by clicking the zip file, right clicking, and clicking the download option. As you can see, we now have the "logs.zip" file saved to our local machine inside the download folder. This allows you to save the file to a convenient location on your local machine for further inspection.
>
> **[1:35](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/codespace-logs?u=76281980&t=95)** Another set of logs you can access within your code space are browser logs. These logs are generated as you work within your code space and can be useful in debugging errors within your session. For example - when your code space freezes or you're randomly disconnected from the code space. To access these logs, simply pull up the browser console of your web browser.
>
> **[2:01](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/codespace-logs?u=76281980&t=121)** This is where Github CodeSpaces prints the browser session logs. Here, you can scroll through to see the error relevant to the situation that you're experiencing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Codespaces](../../Skills/Software%20Development/Codespaces.md) (5), [GitHub](../../Skills/Software%20Development/GitHub.md) (3)
> **Tools:** github (3), visual studio (1)
> **Exercise Files:** zip file (3)
> **UI Navigation:** go to (1), click on (1)
> **Analogies:** for example (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)


### 3. Developing in a Codespace

[↑ Back to Table of Contents](#table-of-contents)

#### [A tour of the codespace editor](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/a-tour-of-the-codespace-editor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/a-tour-of-the-codespace-editor?u=76281980&t=0)** - In this video, I'll be taking you around the codespace editor to get familiar with the common [Windows](../../Glossary/Service/Windows.md) and controls in the interface. Let's begin here on the left with the sidebar. The sidebar is the main view for the view items selected here on the side menu. By default, the file explorer is selected. Thus the sidebar displays your project files. If I proceed to click on the extensions view the sidebar switches to the extension screen. Here I can search extensions and also see the extensions that have already been installed. Next we have the activity bar. This is the bar I have previously referred to as the side menu. The bar consists of icons that can be clicked to switch between the different views. Currently we have the file explorer, search, [Version Control](../../Skills/Web%20Development/Version%20Control.md), debug, extensions, and [GitHub](../../Skills/Software%20Development/GitHub.md) views. We also have the docker view which we added by installing the docker extension. If you wish to change the order of items in the activity bar, you can drag an item to a different position until it snaps to that position. The main codespace window is the editor. This is where all your code editing takes place. Just below the editor window is the panels window. The panels window is home to your output and debug information. This is also where you can access your integrated terminal. Other tabs, like the ports
>
> **[1:33](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/a-tour-of-the-codespace-editor?u=76281980&t=93)** and problems tab can also be accessed here. The panels tab mainly houses windows or tools for debugging or providing debugging information. Next is a thin bar just below the panels window displaying short pieces of information. This is the status bar. This section of the codespace is used to provide you with useful information regarding the state of your project. This includes the branch you're currently on, a upper button to synchronize your codespace edits with your repository, an indicator for problems and warnings from log messages within your codespace. We also have the current line number and column you're on and many more. Lastly, just beside the editor window, we have the minimap. The minimap provides you with a high level overview of the code in the file you're currently editing. It also gives you a way to quickly navigate your code by clicking different sections of the minimap. This causes VS code to jump to the click section. As we go along with this course, we'll be making use of most of the windows and features we just looked at. See you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (3), [Version Control](../../Skills/Web%20Development/Version%20Control.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Tools:** github (1), terminal (1), vs code (1)
> **CLI Commands:** docker (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - in (1)

#### [Running your application](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/running-your-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/running-your-application?u=76281980&t=0)** - [Narrator] One of the most exciting features of [GitHub](../../Skills/Software%20Development/GitHub.md) [Codespaces](../../Skills/Software%20Development/Codespaces.md) is the ability to run your project and immediately get a publicly live URL to test it. We have seen a preview of this in one of the previous videos. However, this time we'll be looking into more details about it. Our application is an API for to-do items which allows us to create tasks and list them. In this video, we are going to run the application to make it publicly available and test the end points. In our server.js file, notice that the application is exposed on Port 1337 if no other port is automatically assigned to it by the environment in which it runs. When we run this application in a previous video, we exposed Port 1337 in order for the application server to run on the coded port value. Now let's see what happens if we run the application without exposing Port 1337. First, let's go into our container configuration file and comment out the forward port property which, at the moment, only exposes Port 1337. After making this change, our Codespace prompts us to rebuild the container. So let's go ahead and do that by clicking the Rebuild Now button. Now that our Codespace has reloaded with the updated configuration, let's go ahead and run the application with MPM start. But before that, let's go to the Ports tab in the panel's window
>
> **[1:34](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/running-your-application?u=76281980&t=94)** to clear any port that has already been forwarded. GitHub Codespaces often remembers previously forwarded ports so we want to make sure that this is not interfering with our experiment here. For now, I have no forwarded ports so we can go ahead. Now that we have confirmed that the Ports History is clear, let's run the application. MPM start. As you may have observed, even though we did not explicitly forward Port 1337, our Codespace has automatically detected and forwarded it. If you click on the Ports tab, you can see that this port has been auto forwarded. Next, we need to make this URL publicly accessible. Right now the URL is marked private, meaning that it is only accessible to logged in users within your GitHub organization. To make the URL public, right click on the port and go to Port Visibility on the context menu. Then switch from private to public. This automatically makes the application accessible to anyone who has the URL and knows the port. To get a public URL, click on the address icon. This is the public URL for the application. Now let's test our application by listing and creating to-do items. For this test, I'll be using the Postman HTTP client. This is because Postman makes working with remote APIs a breeze. First, let's copy over our application URL to Postman. To list our to-dos,
>
> **[3:06](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/running-your-application?u=76281980&t=186)** let's go to this /list endpoint and hit the send button. As you can see, we get a list of to-do items back from our application currently running in our Codespace environment. To add a new to-do item, we need to send a post request to the add-item endpoint. Now switch the request method to post. The next step is to add a request body to the request. I already have a snippet here in the body section, so all we need to do now is to click send to send the request. The request comes back successful and now if we go to the list endpoint,
>
> **[3:55](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/running-your-application?u=76281980&t=235)** switch this back to get and click send to send a request and we scroll down, we see our new Add Dev container task has been added to our list of to-do items.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (3), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (2)
> **Env Vars:** url (8), mpm (2), api (1), http (1)
> **UI Navigation:** go to (4), click on (3), scroll down (1)
> **Tools:** github (3), postman (3)
> **Ports:** port 1337 (5)
> **CLI Commands:** make (4)
> **File Paths:** server.js (1)
> **Cross-References:** previous video (1)

#### [Committing and pushing code changes](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/committing-and-pushing-code-changes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/committing-and-pushing-code-changes?u=76281980&t=0)** - [Narrator] A very important thing to note as we are working within our code space is that any change we make is preserved within the code space but not committed or pushed to our repository automatically. This means that as you edit code within your code space your repository is not automatically updated. If we would like to persist the changes in our code space to our repository, we need to synchronize the files by staging and pushing our changes to the repository. In this video, we'll make a few changes to our project files and then commit them to our repository. Let's start by deleting the logs.zip file as we don't want this file to be pushed to our repository, so right click on the file and then select delete permanently. Good. Next, let's go into our routes.js file and change the message printed by the root endpoint. Currently this message reads "Welcome to the Todos API." Let's go ahead and change that to something else like "Remote interface for to do items", that sounds more techy.
>
> **[1:18](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/committing-and-pushing-code-changes?u=76281980&t=78)** Now save the file. Before we push changes to the repo, let's go to the repository to confirm that these changes are indeed not synced automatically.
>
> **[1:34](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/committing-and-pushing-code-changes?u=76281980&t=94)** As you can see, the routes.js file in our repository still has the previous message. Now let's get on to our code space to commit the changes. To begin, let's switch to the source control tab. Then click the plus icon beside the routes file to stage the file. In the text field above the commit button you can enter a commit message. Now let's click the commit button to commit this change. To push the changes click the ellipsis icon beside the icon list. Here you will see the push action in the context menu. Click push to save your changes to the branch on which your course space was created. While the progress bar disappears you can now go to your repo to confirm that your changes have been persisted. As you can see our route.js file now contains the updated message for our base endpoint.

> [!info]- Semantic Content
>
> **File Paths:** routes.js (2), route.js (1)
> **UI Navigation:** go to (2), switch to (1)
> **CLI Commands:** make (2)
> **Env Vars:** api (1)
> **Exercise Files:** zip file (1)
> **Definitions:** means that (1)
> **Speakers:** - [narrator] (1)

#### [Creating a pull request](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/creating-a-pull-request?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/creating-a-pull-request?u=76281980&t=0)** - [Instructor] If you're on a development team, working on a project, you'll be constantly creating pull requests. pull requests allow you to suggest changes on a branch you're working on to a central branch where all other team members submit their changes. This request can then be merged or rejected by a code reviewer or an automated [continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) pipeline. In this video, we're going to create a pull request from a codespace I have created on a different branch and merge it to the main branch we've been working on throughout this course. Currently, I'm in a codespace created on a branch with the name new-feature. I will be making a change to the project here and then go ahead to submit a pull request to the main branch on which the codespace we have been using up until now was created. Let's go into the server.js file and change the console message printed when the app starts up. I will change this message from "Server running on localhost" to "Application running on" the port value.
>
> **[1:05](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/creating-a-pull-request?u=76281980&t=65)** Now that we've made the change, we can go to the source control icon to see our changed files. Let's go ahead and push the change on the server.js file to this branch. Click on the plus icon beside the file to stage it. Then enter a commit message. "Changed startup message." Then click the check mark icon at the top or the commit button below to commit the changes. And finally, let's push our changes to this branch. Now that we have pushed our changes to the new feature branch, let's send a pull request to the main branch from inside our codespace. To send the pull request, click on the [GitHub](../../Skills/Software%20Development/GitHub.md) icon on the activity bar. Just beside the pull request label, click the create pull request icon with a plus sign at the bottom right corner. The pull request screen shows up and you can select the branch you want to pull from and pull into. Here we are pulling from the new feature branch into the main branch and these have been selected by default. You can click the dropdown to select any other branch you may want to switch to. You can also enter a title and description for your pull requests. For this pull request or PR for short, we'll give it the title that says "Changed startup message."
>
> **[2:33](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/creating-a-pull-request?u=76281980&t=153)** We'll then leave the description field blank and click Create to create our pull request. A tab automatically opens in the editor window showing us details of the pull request we just created. Now let's head over to the codespace on the main branch to merge this request. To do that, click on the flyout menu and go to my [Codespaces](../../Skills/Software%20Development/Codespaces.md). On the codespaces list, select the codespace for the main branch. Once the codespace loads up on the main branch, click on the GitHub icon in the activity bar. Here you can see all your pull requests broken down into different categories. Under the All Open section, you will see the request made from the new feature branch. Click on the request to expand it, then click on the description to open it in a new tab within the editor window. To inspect the changes, you can click on the commit ID to open the commit in a new window. To see what has changed, click on the files changed tab, and as you can see, we can see the old state of the file and the new state of the file. We are satisfied with the changes, so we'll go ahead and merge. To merge, switch back to the codespace. Then click the Merge Pull Request button in the Pull Request tab. Confirm the commit message and click Create Merge Commit, to commit the suggested changes to the main branch. Once this process is done, your pull request disappears from the GitHub menu in the sidebar.
>
> **[4:07](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/creating-a-pull-request?u=76281980&t=247)** Now if we switch back to the other tab, which already has our repository opened in GitHub and then navigate to the server.js file in the main branch,
>
> **[4:22](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/creating-a-pull-request?u=76281980&t=262)** we can see that our startup message has been updated. One thing to notice that these changes may not immediately reflect in the file in the codespace. As you can see, our server.js file still has the old message. To ensure that every file is up to date with the merge request, you can come down to the status bar and click on the sync icon to synchronize all your changes. This operation ensures that all staged changes are pushed and all pending remote changes are pulled into the codespace. As you will now observe, the server.js file now contains the new startup message for our application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (4), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (2), [Continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) (1)
> **UI Navigation:** click on (9), go to (2), select the (2), dropdown (1), switch to (1)
> **File Paths:** server.js (5)
> **Tools:** github (4)
> **Speakers:** - [instructor] (1)

#### [Deleting a codespace](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/deleting-a-codespace?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/deleting-a-codespace?u=76281980&t=0)** - One of the main highlights of [Codespaces](../../Skills/Software%20Development/Codespaces.md) is how you can easily spin up a development environment until it's down, when you no longer need it. When you are no longer in need of a certain codespace, it's best practice to clean things up by deleting it. In this video, we are going to be deleting a codespace we will no longer be making use of. Here on the codespace list page, I have the code page created on the main branch and the one for the new feature branch. We have already merged changes from the new feature branch in a previous video, so we can go ahead and delete it. Deleting [GitHub](../../Skills/Software%20Development/GitHub.md) codespaces is pretty straightforward. On the codespaces item, click the ellipses icon on the right. Here you will see the option to delete the code space labeled in red. Click this action item to delete the codespace. GitHub immediately prompts you to confirm if you really want to delete the codespace, as this operation is irreversible. Click okay to confirm. The page reloads and now the codespace has been successfully deleted.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Codespaces](../../Skills/Software%20Development/Codespaces.md) (3), [GitHub](../../Skills/Software%20Development/GitHub.md) (2)
> **Tools:** github (2)
> **Cross-References:** previous video (1)
> **Best Practices:** best practice (1)
> **Speakers:** - one (1)


### 4. Advanced Concepts

[↑ Back to Table of Contents](#table-of-contents)

#### [Connecting to Codespaces from VSCode](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/connecting-to-codespaces-from-vscode?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/connecting-to-codespaces-from-vscode?u=76281980&t=0)** - [Presenter] In a previous video, I demonstrated how you could configure your code spaces to open in your local Visual Studio code installation instead of your browser. To make this configuration take effect, you need to set up your local visual studio code instance to connect to [GitHub](../../Skills/Software%20Development/GitHub.md) [Codespaces](../../Skills/Software%20Development/Codespaces.md). And this is what we are going to learn in this video. We will configure our installation of Visual Studio Code to load our workspaces so that we can work on them locally. The first thing we need to do is to install the GitHub Codespaces extension for VS code. To begin, both of your local VS code installation and click on the extensions tab. In the extension search field type codespaces. the GitHub Codespaces extension should come up as the top option. Click this option to view the extension page. Next, click the install button to install the extension. After successful installation, you should now see a new code spaces icon on your activity bar. This confirms that you now have the extension ready for use. Click on the Codespaces icon to see the code space view on your sidebar. Because I have previously logged into GitHub Codespaces on my local VS code installation, I can see my Codespaces listed here. If you're doing this for the first time, you'll be prompted to log in to GitHub. upon successful login, you would also see your Codespaces listed in the sidebar. Now that we have our Codespaces listed, we can connect to a Codespace. to connect to a Codespace, hover over the code space you want to connect to and you'll see a plug icon.
>
> **[1:34](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/connecting-to-codespaces-from-vscode?u=76281980&t=94)** Click this icon to start the connection process. I'll be connecting to the Codespace on my to-dos API repo. Once clicked, VS code will start the connection process, and in a few seconds you'll be presented with your Codespace session. We can now interact with our project files and make changes the same way we have been doing so far in the browser. Because you have the Codespaces extension installed, you also have access to a bunch of helpful Codespaces commands. To view the commands, open your command palette with control shift P or command shift P, on the Mac, and type code space into the search field. You will now be presented with a bunch of Codespace helpful commands as you have in the browser instance. When you're done working in your Codespace, within Visual Studio Code, you can end the session easily. To end the current session, click the Green Code Spaces label on the status bar. This presents you with some useful functions to use in your current Codespace session. These include options to stop the current Codespace instance and also to close the Codespace connection completely. Click the stop current Codespace option to end the Codespace session, and now you are no longer connected to the Codespace.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Codespaces](../../Skills/Software%20Development/Codespaces.md) (11), [GitHub](../../Skills/Software%20Development/GitHub.md) (5)
> **Tools:** github (5), visual studio (4), vs code (4)
> **Prerequisites:** install (3), configure (2)
> **UI Navigation:** click on (2), in the sidebar (1)
> **CLI Commands:** make (2)
> **Env Vars:** api (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [presenter] (1)

#### [Restricting machine types](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/restricting-machine-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/restricting-machine-types?u=76281980&t=0)** - [Instructor] To ensure uniformity and control usage of code space resources it is often essential to restrict the types of machines that can be used to spin up a code space by members of your team. [GitHub](../../Skills/Software%20Development/GitHub.md) code spaces cost money, so you want to ensure that team members are only making use of what is needed and not spinning up expensive code spaces for tasks that do not require them. In this video, we'll demonstrate how to set up a policy that restricts the type of machines, and by machine type, I mean machines grouped according to resource capacity that can be used to spin up code spaces. Before we begin, it is important to note that you can only set up this type of policy on an organization that you own. To set up a code space policy on your GitHub account go to organizations from your account menu. On your organization's list click on settings, on your organization's rule. On the Settings sidebar under the code planning and automation section, click on code spaces, then click on policies. On the [Codespaces](../../Skills/Software%20Development/Codespaces.md) policies page, click Create Policy. Now enter your name for your policy. Let's call this Machine Restriction Policy. Now click on the add constraint dropdown and select machine types. On the machine types tab, click the edit button to change the machine constraint. Here, I'm just going to disable the 16-core and the 18-core machines so that no team member can create a code space using this amount of ram and storage. To determine whether this policy should apply
>
> **[1:35](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/restricting-machine-types?u=76281980&t=95)** to all or just a set of repositories click the dropdown on the change policy target section. Now click on selected repositories. A cog icon appears and when I click on that icon I can select the repo that it should apply to. Currently I only have one repot in these organizations so I'm just going select that so that we can see the effect of this setting. With the repository selected I'm going to click select repositories and finally we'll click save to effect this constraint. Now, when anyone on your team tries to create a code space on any of the selected repositories the policy you just created will apply. In our case they won't be able to select any machines higher than four calls and eight gig ram as configured in the constraint.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (1)
> **UI Navigation:** click on (6), dropdown (2), go to (1), select the (1)
> **Prerequisites:** set up (3)
> **Tools:** github (2)
> **Speakers:** - [instructor] (1)

#### [Using predefined containers](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/using-predefined-containers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/using-predefined-containers?u=76281980&t=0)** - As we have seen in the previous video, [GitHub](../../Skills/Software%20Development/GitHub.md) Code spaces provides you with a set of predefined container configurations. You can use any of the configurations to start your development work rather than having to create one from scratch. Dev container configuration templates exist for [Node.js](../../Skills/Web%20Development/Node.js.md), [Java](../../Skills/Software%20Development/Java.md), CSharp, C++, and other common project types. To see a list of predefined containers available to you open the command palette and type in dev container. Then select the ad development container configuration files option. Here you can see a list of predefined containers and select the one that best suits your project. If you're seeing the small list of container options or you cannot find the one you're looking for, the one that suits your project, scroll up and click the show all definitions option at the top. This will switch to an extended list that shows you all the container configuration templates available to you. You can scroll to see all available options or type in the search field for a language. Well [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) and see the configuration you are interested in.
>
> **[1:15](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/using-predefined-containers?u=76281980&t=75)** Aside single language based options like Node.js and [PHP](../../Skills/Software%20Development/PHP.md), there are also bare bones configurations like Alpine or full-fledge configurations like PHP and MariaDB that comes with database support. Once you select a predefined container configuration, GitHub code spaces might ask you a couple of questions to confirm or provide answers for. For example, here I am being prompted to select a no GS version. Once that is complete, GitHub code spaces then ask if I would like to define some extra features to be added to my configuration. These are tools that you may require for your development workflow. Among them is the GitHub [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md), the AWS CLI, if you have some resources on that you're using for the project and tools like [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md), if you prefer it to your regular terminal. We also have the Kubecti CLI, that's kubectl, and many more. For now, let's just go with the default options and click okay with non-selected. Your code space then generates the files for your selected configuration. Of all the files generated the dev container the Jason file is the one you are most interested in and the one you're advised to edit if need be. In the dev container, the Jason file you can add more features or extensions to your code space container. One confident way to add extra features instead of using this configuration file is to go to the features we get once again. To do this, go to the command palette and then type configure dev.
>
> **[2:51](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/using-predefined-containers?u=76281980&t=171)** Now select the configured development container features option. This brings up the features once again. This time we'll be adding the AWS CLI to our code space environment. Normally when the change is made, we get the rebuild now bottom popup, right here on the bottom right corner. However, if you don't get the prompt just as we don't have it here, you can simply access it through your command pallets. Let's go to the command pallet and type rebuild. Now click GitHub prompt and click Rebuild. Once the container rebuild is done, we can now go down to our terminal and run the AWS command. We get the output for the AWS command usage, which indicates that we now successfully have the AWS CLI running in our container.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (5), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (5), [Node.js](../../Skills/Web%20Development/Node.js.md) (2), [PHP](../../Skills/Software%20Development/PHP.md) (2), [Java](../../Skills/Software%20Development/Java.md) (1)
> **CLI Commands:** aws (5), node (2), php (2), find (1), python (1)
> **Env Vars:** cli (5), aws (5), php (2)
> **Tools:** github (5), terminal (2), powershell (1)
> **UI Navigation:** select the (3), go to (2), open the (1), scroll up (1), switch to (1)
> **File Paths:** node.js (2)
> **Cross-References:** previous video (1)
> **Analogies:** for example (1)

#### [Environment variables](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/environment-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/environment-variables?u=76281980&t=0)** - For every code space created [GitHub](../../Skills/Software%20Development/GitHub.md) automatically sets some default environment variables. Some of these variables can be useful in your workflow within your GitHub code space. In this video, we'll be taking a look at some of these environment variables. For now, we'll only be displaying them within the terminal of our code space. However, these variables can be used within your container configurations or in commands you run in the terminal as you develop within the code space. The first environment variable we'll be looking at is the code space under score... Let me go to all caps. Code space under score name, environment variable. This variable contains the auto generated name assigned to our code space. I think I'm missing a dollar sign there. Go back. Dollar sign, echo code space. As I said earlier, this variable contains the auto generated name assigned to the code space instance. Let's take a look at another environment variable. This time we'll echo the GitHub underscore repository, environment variable. As you may have guessed, this variable contains the name of the repository on which the current code space instance was created. You can also access the current user within the GitHub code space by printing out or using the
>
> **[1:33](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/environment-variables?u=76281980&t=93)** GitHub underscore user environment variable. As you can see, this is my username. That's my GitHub username. One very interesting GitHub variable you also have access to within your code space is the GitHub underscore token variable. This variable contains the signed authentication token representing the user within the code space. What makes this variable interesting is that it can be used from within your code space to make authenticated calls to the GitHub API. Environment variables within your code space give you access to a bunch of useful GitHub information that can be used within your development workflows. You can find a list of environment variables available to you in the GitHub code space documentation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (11)
> **Tools:** github (11), terminal (2)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** api (1)
> **UI Navigation:** go to (1)
> **Speakers:** - for (1)

#### [Storing sensitive data](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/storing-sensitive-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/storing-sensitive-data?u=76281980&t=0)** - [Speaker] In a previous video, we looked at default environment variables set by [GitHub](../../Skills/Software%20Development/GitHub.md) for use in our codespace environment. In this video, we'll learn and demonstrate how you can create your own environment variables for use within your GitHub top [Codespaces](../../Skills/Software%20Development/Codespaces.md). These environment variables can be used to store sensitive data like API credentials of top party services, authentication [Tokens](../../Skills/Web%20Development/Tokens.md) and database passwords. Basically, any value you would like to store in a secure manner. To achieve that, will be making use of GitHub Secrets. GitHub secrets allows you to store sensitive data for use in any of GitHub's services like GitHub actions, Dependabot and of course GitHub codespaces. These secrets will then be accessible via environment variables within these GitHub services. This means that just as we are able to access the default environment variables set within our codespaces by GitHub, we can also access these secrets with the environment variables that match the names we give them. Before diving into creating and using secrets, let's take a look at a few rules you need to be familiar with when working with them. First, GitHub secrets can be created at both the organization and repository level. Now comes the rules. A secret created at the organization level can be used within any of the codespaces it is assigned to. This is most useful in cases where you have multiple projects accessing a particular service and you want to share the access credentials between them. As expected, a secret created at a repository level
>
> **[1:34](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/storing-sensitive-data?u=76281980&t=94)** applies to that repository alone. Also, when a secret with the same name is created at both the organization and repository level, the value of that secret at the repository level takes precedence. There are also a set of rules that detect how secrets should be named. Breaking any of these rules can render your secret invalid. Some of these rules include ensuring that you only use alphanumeric characters and underscores in your secret names. Also, no name should start with the special GITHUB prefix. These are reserved for environment variables defined by GitHub. Also, names should be unique at the level they are created. This means that you cannot create two secrets with the same name at the organization level or at the repository level. Now that we're familiar with our secrets to walk within GitHub, it's time to create some secrets for use in our codespaces. To create a secret at the organization level, go to your profile menu and click on Settings. On the side menu on the Settings page, click the codespaces link. On the Codespaces secret section, click the New secret button to create a new codespace secret. This loads up the page where you can enter a name for your secret and its corresponding value. I'll be creating a secret with the name GENERAL_API_KEY. And for the value,
>
> **[3:05](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/storing-sensitive-data?u=76281980&t=185)** I'm just going to enter random string. Just beneath the value text area, we have a dropdown to select the repositories where this secret will be available. I will be selecting the repository we have been using so far. As you can see, you can type to search the list for the repository you're looking for. Finally, let's click Add secret to complete the process. Now that we have a secret set, we can access it within our chosen repository. Next, let's also create a repository level GitHub secret. To do that, let's first go to our repo. Going to go to My Organization, and click on the Repository. That's it, todos-api repository. And go to the setting section. On the side menu, under the Security section, click the Secrets dropdown. When this dropdown expanded, click on Codespaces. We click on Codespaces because we are applying this secret to a codespace. Could as well do it for GitHub actions or Dependabots. To create a secret on the repository level, click on the New repository secret button. This brings up a familiar screen where you can enter the name and value of your secret. Here I'll create another secret with the name, MY_DATABASE_CONNECTION_STRING.
>
> **[4:36](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/storing-sensitive-data?u=76281980&t=276)** At the value field, I'm going to enter a random value that mimics using a [MongoDB](../../Skills/Software%20Development/MongoDB.md) protocol for a connection string. It is just random and I'm definitely sure this is not how the mongodb string looks like. But for now, we just need the value. So this is going to be our value for the connection string. Finally, click Add Secret to complete the process. Now that we have the secret set, let's go ahead and access them within our codespace. One thing to note about secrets is that, while they are immediately available to codespaces started after creating the secret, for a currently active codespace, you will need to stop and restart the codespace. Let's go ahead to our codespaces and we start the codespace will be working in.
>
> **[5:26](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/storing-sensitive-data?u=76281980&t=326)** Stop it. Then we'll reopen it. Now that our codespace has been restarted, let's see if we can access the secrets that we just defined. Down in the terminal, let's try to echo our variables. First, let's access the GENERAL_API_KEY environment variable created at the organizational level. Let's type echo $GENERAL_API_KEY.
>
> **[5:58](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/storing-sensitive-data?u=76281980&t=358)** Surround it. And as expected, our [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) outputs, the value we entered for this secret. Now, let's try to access the MY_DATABASE_CONNECTIONS_STRING environment variable. This is the variable we created at the repository level. Hit enter, and as we can see, this also prints out the value for the repository level secret. And now, we have access to both our secrets at the organization and repository levels. And we can use these secrets in our development workflows within our codespace.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (15), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (11), [MongoDB](../../Skills/Software%20Development/MongoDB.md) (2), [Tokens](../../Skills/Web%20Development/Tokens.md) (1), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1)
> **Tools:** github (15), terminal (1)
> **UI Navigation:** click on (5), go to (4), dropdown (3), select the (1)
> **Env Vars:** general_api_key (3), api (1), github (1), my_database_connection_string (1), cli (1)
> **Definitions:** means that (2)
> **Cross-References:** previous video (1)
> **Speakers:** - [speaker] (1)


### 5. Using Codespaces with GitHub Models

[↑ Back to Table of Contents](#table-of-contents)

#### [Using Github Models with Codespaces](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/using-github-models-with-codespaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/using-github-models-with-codespaces?u=76281980&t=0)** - [Instructor] [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) is one of the fastest growing technologies at the moment, specifically in the area of [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md). This has led to developers building tools, features, and entire applications powered by [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md). These LLMs are provided by different vendors such as OpenAI, [Google](../../Glossary/Service/Google.md), and Anthropic with varying features and performance. When developing with LLMs, developers often need to try different models from different vendors to see which model best suits their use case. This process requires installing and configuring several SDKs, which can become cumbersome real quick. You will also need to manage authentication credentials for each model you're trying out. As you may have guessed, this is not a very pleasing developer experience, and it's exactly where [GitHub](../../Skills/Software%20Development/GitHub.md) models come in. GitHub models allow you to quickly prototype with different models. This way, you can play around with LLMs from different vendors, and finally pick the one that will be best for your use case. And this can all be done from a GitHub codespace. So let us see one in action. First, you will need a repo for your project or just a repo where you want to test out models. Once you have your repo set up, you can then open it in a codespace.
>
> **[1:22](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/using-github-models-with-codespaces?u=76281980&t=82)** Our codespace has been set up and just in a few seconds, it should be up and running. Now that our codespace is running, let me bump this up a little bit so that we can see things clearer. That's good. Now to begin with GitHub models, I'm going to leave my codespace on this tab and then I'm going to open another tab and navigate to [github.com/marketplace/models](https://github.com/marketplace/models).
>
> **[1:55](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/using-github-models-with-codespaces?u=76281980&t=115)** This is the home of GitHub models.
>
> **[2:04](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/using-github-models-with-codespaces?u=76281980&t=124)** On the screen that shows up, we see a welcome message, previews of some models, but this dropdown is the most important thing that we are going to be using there. So this is where all the models are listed, and we can select any model to work with. For now, let us say we want to work with the OpenAI [GPT-4o](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) model, so let us select that. And once selected, we get taken to the playground where we can play around with prompts without having to do any form of coding. We can simply type in a prompt into this text field. Let's say, "Who is the president of the United States?"
>
> **[2:47](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/using-github-models-with-codespaces?u=76281980&t=167)** And GitHub model is going to use the selected model to give us back our response, but this is not what we came here for. We want to use our model in code, so let us get right into that. To use the model in code, click the Get API Key button at the top right-hand corner to bring up a set of details. On the left side of the panel, you can select the language you want to write in and the SDK you want to use. We have selected the OpenAI GPT-4o mini model. So we have a couple of language options, which includes [JavaScript](../../Skills/Software%20Development/JavaScript.md), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), C#, [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md), and also [Java](../../Skills/Software%20Development/Java.md). For this demo, we'll just be going with JavaScript. For you, make sure you pick the language that your project is written in. For the SDK, we have two options based on the model we have selected, the OpenAI SDK and the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) AI Inference SDK. We'll be using the OpenAI SDK for this demo as it directly matches with our selected model. The Azure SDK is also a great option, but more on that in another video. Once you have selected your options, navigate to the dependency section. Here in the dependency section, we see that we have a dependency on the OpenAI [npm](../../Skills/Web%20Development/npm.md) package. So let's just copy this package.[JSON](../../Skills/Web%20Development/JSON.md), go to our codespace. Here, I'm going to create a new package.json file.
>
> **[4:19](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/using-github-models-with-codespaces?u=76281980&t=259)** It wants me to allow pasting of text, so yeah, I'll allow that. So now I can say new file package.json
>
> **[4:32](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/using-github-models-with-codespaces?u=76281980&t=272)** and I'm just going to paste in what we just copied. Save that, and here in our terminal, down in our terminal, first let's clear the screen, and I'm going to run npm install to install the dependencies. Awesome, once we have the dependencies installed, let's go ahead and copy one of the sample code on the setup screen and run it here in our codespace. Let's come here. Let's go to one basic example, and I'm just going to copy this basic example. I'm going to click Copy and go back to my codespace. And here in the codespace, I'm going to create a new file, call it sample.js. It's good. Inside sample.js, I'm going to paste the code that we just copied. Looking through this code, we can see the set up configuration that uses the GitHub token. The GitHub token allows us to automatically authenticate with the model provider, so you don't need to manage any setup keys. Going further down the code, we see that it prompts our model for the capital of France. So let us run this code and find out the answer to that question. Going to go down, clear the terminal, and now we can run node sample.js. We hit Enter, wait a few seconds, and now we get the capital of France is Paris.
>
> **[6:06](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/using-github-models-with-codespaces?u=76281980&t=366)** How smart is that? We have been able to test out our OpenAI GPT-4o model and we can also play with other models from different LLM vendors following a similar process. Now, sometimes you might want to test out different models using different SDKs without having to do it directly within your code or even set it up. This is why GitHub models has provided an entire repo for you to do this. This is the GitHub models [Codespaces](../../Skills/Software%20Development/Codespaces.md) project that can be found at [github.com/github/codespaces-models](https://github.com/github/codespaces-models). This project consists of different examples using different models and different SDKs that you can quickly run and also tweak the code when trying out the models. To use this project, go to the code dropdown and open it up in the codespace. Once you have it running in the codespace, you can then navigate to any of the language samples or SDK samples to try out different available models. Go to the samples folder. For example, let's say we go to JavaScript. I want to test out OpenAI, We have a bunch of examples here that we can play with. So let's say we want to play with the streaming example. Let's open streaming.js. Here, our code also uses the GPT-4o mini model and it asks for five good examples why I should exercise every day. So let's just run this and see what we get. Let's say node
>
> **[7:40](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/using-github-models-with-codespaces?u=76281980&t=460)** samples, javascript, openai, and streaming. Here, the streaming example under the OpenAI JavaScript set of examples. Let's hit Enter to run this code. And as you can see, our results are streamed back to us. Awesome. The GitHub models codespace is a great spot for trying out different LLMs for your project and also discovering which model best suits your application. So if you want to play around with different models and different SDKs in code, I recommend that you come to this project, open it up in a codespace and tweak things until you find the model and SDK that best suits your project's requirements.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (14), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (5), [Gpt-4o](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) (4), [JSON](../../Skills/Web%20Development/JSON.md) (3), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2)
> **Tools:** github (14), terminal (3)
> **Env Vars:** sdk (8), gpt (4), api (1), rest (1), npm (1)
> **UI Navigation:** go to (5), navigate to (3), dropdown (2), select the (1)
> **CLI Commands:** npm (2), find (2), node (2), python (1), make (1)
> **File Paths:** package.json (3), sample.js (3), streaming.js (1)
> **Prerequisites:** set up (3), install (2), setup (2)
> **URLs:** [github.com](https://github.com) (2)

#### [Using Github Models in live projects](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/using-github-models-in-live-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/using-github-models-in-live-projects?u=76281980&t=0)** - [Instructor] Now that we have seen how to make use of [GitHub](../../Skills/Software%20Development/GitHub.md) models in our development with [Codespaces](../../Skills/Software%20Development/Codespaces.md), what do we do when we want to ship this code to production? Now, one thing to note with GitHub models is that you can only use them in the development phase of your application. They cannot and should not be used for live projects. To move your project to production, you will need the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) AI service, which you can seamlessly switch to in your code, as will be seen along the course of this video. Azure AI allows you to deploy production-ready instances of numerous state-of-the-art models. It also generates the credentials for you to authenticate with your deployed models. So enough talk, let's get started on that. To begin, you first need an Azure AI account. So visit ai.[azure.com](https://azure.com) to set one up. You'll be prompted to add your billing details, which is necessary to run models for production purposes. Once your Azure AI account is set up, let's add back to our GitHub Models page at [github.com/marketplace/models](https://github.com/marketplace/models). On this page, let us click the dropdown and go for [GPT-4o](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) mini. On the Playground page, Let's now click the Use This Model button. In the previous video, this button had the label Get API Key. However, GitHub decided to change the label before this video was recorded.
>
> **[1:33](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/using-github-models-in-live-projects?u=76281980&t=93)** But don't worry, this button does exactly the same thing. So let's click it. At the top of the Getting Started section, where the first step is to create a personal token, instead of going for the free GitHub models, we'll be using Azure AI, which is a pay-as-you-go model. So let's click the Get Production Key button to get our key. This will automatically navigate us to the Azure AI portal where Azure Foundry then starts to set up a model deployment for us. Once Foundry is done, you'll see a Deploy button. Click that to complete the deployment process. Once the deployment is created, you'll then be taken to a page where you can see your service URL and credentials for working with your newly deployed Azure model. There's also a table where you can see your model deployments. Now we can take these credentials to our Codespaces project to use in our application. So first, I'm going to copy the API key. The API Key 1 is good. Then head over to our project. Back in our Codespaces project, first let's add our Azure AI key to the environment with the name AZURE_TOKEN. Say export AZURE_TOKEN.
>
> **[3:08](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/using-github-models-in-live-projects?u=76281980&t=188)** Perfect. Next, let us change the authentication variables for our model. For the token, this will now point to our AZURE_TOKEN environment variable.
>
> **[3:25](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/using-github-models-in-live-projects?u=76281980&t=205)** For our endpoint, let us get our service URL from the dashboard and also paste it in here. Copy our service URL, and replace this value with the new value. Awesome. Now let us run our code. Our prompt asks, "What is the capital of Egypt?" So let's see what we get from our newly deployed model. Let's come down here and run node prompt.js. Hit Enter, and it tells us "The capital of Egypt is Cairo." How amazing is that? Here we've been able to switch our code from using GitHub models, which are for experimental tasks, now to Azure AI, which is built for production.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (11), [GitHub](../../Skills/Software%20Development/GitHub.md) (7), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (3), [Gpt-4o](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) (1)
> **Env Vars:** api (3), url (3), azure_token (3), gpt (1)
> **Tools:** github (7)
> **Prerequisites:** set up (2), getting started (1)
> **CLI Commands:** make (1), node (1)
> **URLs:** [azure.com](https://azure.com) (1), [github.com](https://github.com) (1)
> **UI Navigation:** switch to (1), dropdown (1)
> **File Paths:** prompt.js (1)

#### [Working with different models in a project](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/working-with-different-models-in-a-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/working-with-different-models-in-a-project?u=76281980&t=0)** - [Instructor] One inconvenience to have as a developer [Prototyping](../../Skills/Software%20Development/Prototyping.md) models is to be able to swap in different models to try out without having to change configurations or installing new SDKs. This is exactly what the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Inference SDK that we saw in a previous video is for. The Azure AI Inference SDK is all purpose SDK that works for every model supported on .GitHubmodels. So let's go ahead and see how it works. This time let's pick a new model. Let's say Mistral Large 24.11. Now let's click get API key and this time, instead of using the Mistral AI SDK let's go for the Azure AI Inference SDK. Once, that is selected let's go to the dependency section. And here we going to cover the dependencies for the Azure Inference SDK which has these three packages. I've copied them. Go back to my codespace. And let's go to package.[JSON](../../Skills/Web%20Development/JSON.md). And paste them on our open AI dependency. Once we have these dependencies in package.json, let us install them by running [npm](../../Skills/Web%20Development/npm.md) install. No we are the terminal. Once these packages are installed, let us bring in the streaming example from the set up screen. Let's go down to streaming.
>
> **[1:35](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/working-with-different-models-in-a-project?u=76281980&t=95)** Let's copy this and come back to our code. I'm going to create a new file, going to call it streaming.js. And paste in the code. Now in this code as you can see we're now using the Azure AI Inference SDK and we're also using the Mistral Large model. Let's scroll down to see the prompt. We also prompted the model for five good reasons why we should exercise every day. So let us see the code. Let us clear our terminal. And run it with node streaming.js.
>
> **[2:23](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/working-with-different-models-in-a-project?u=76281980&t=143)** Now as expected, the output is streamed back to us and we're currently using the Mistral Large 24.11 model. Without any surprise our code runs fine. But here's where the magic happens. We can simply switch models in this code and run this same prompt using a totally different model. Let's do that. Let's say we want to change our model to one of the five models. So we come to the model name parameter and we switch this from Mistral to let's say Phi-3.5-mini. I spelled phi wrong. Phi-3.5-mini-instruct. So this is the new model we're going to be using. We want to see how the response from Mistral varies from the response from phi so let us save this. And now let's go back to the terminal. And once again, run our code. Node streaming.js. And see if everything works fine. As you can see now using the phi model we're getting a different type of response with the new model. Still streaming, still streaming.
>
> **[3:59](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/working-with-different-models-in-a-project?u=76281980&t=239)** And finally we are five examples according to phi for why we should exercise everyday. We can keep switching models in this script or use different models in different scripts in this same project. Which means that with the Azure AI Inference SDK we have the ability to use different models in a single project without having to change SDKs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (6), [JSON](../../Skills/Web%20Development/JSON.md) (2), [Prototyping](../../Skills/Software%20Development/Prototyping.md) (1), [npm](../../Skills/Web%20Development/npm.md) (1)
> **Env Vars:** sdk (8), api (1)
> **File Paths:** streaming.js (3), package.json (2)
> **Versions:** 24.11 (2), 3.5 (2)
> **CLI Commands:** node (2), npm (1)
> **Cross-References:** go back to (2), previous video (1)
> **Tools:** terminal (3)
> **UI Navigation:** go to (2), scroll down (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-github-codespaces-for-enterprise/next-steps?u=76281980&t=0)** - [Fikayo] Now that you have a good understanding of [GitHub](../../Skills/Software%20Development/GitHub.md) [Codespaces](../../Skills/Software%20Development/Codespaces.md), there're a couple of recommendations to take your skills from good to great. GitHub Codespaces is a GitHub service and it heavily relies on GitHub workflows. So, if you want to take full advantage of Codespaces and your GitHub code management skills are still lacking then I advise you to take the GitHub Essential Training and [Learning Git and GitHub](../Software%20Development/Learning%20Git%20and%20GitHub.md) courses from the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Library. To take full advantage of the Codespaces Editor, having strong Visual Studio skills is essential. To level up your VS Code skills, check out our Visual Studio Code Productivity Tips course, also here on the LinkedIn Learning Library. Finally, if you want to fully understand the Codespace environment and configure it to your preference you need to have a good knowledge of Docker. And as you have guessed, we have a Docker course for that also. our Learning Docker and Docker for Developers course will take you from zero to mastery in no time. You can also connect with me through social media. I am very active on Twitter via the Twitter handle displayed on your screen, and you can also find me on LinkedIn using my name. Happy coding!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (7), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (4), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (3), [Git](../../Skills/Software%20Development/Git.md) (1)
> **Tools:** github (7), visual studio (2), vs code (1)
> **CLI Commands:** docker (4), git (1), find (1)
> **Prerequisites:** configure (1), you need to have (1)
> **Definitions:** is a  (1)
> **Speakers:** - [fikayo] (1)


## Instructor

- [Fikayo Adepoju](../../Instructors/Artificial%20Intelligence%20(AI)/Fikayo%20Adepoju.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/github-codespaces-2479226)

## Skills Covered

- Codespaces
- GitHub

## Path Context

### In [Prepare for the GitHub Foundations Certification](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Prepare%20for%20the%20GitHub%20Foundations%20Certification.md)
← [Practical GitHub Copilot](../Software%20Development/Practical%20GitHub%20Copilot.md) | **5 of 7** | [GitHub Foundations- Privacy, Security, and Administration](GitHub%20Foundations-%20Privacy%2C%20Security%2C%20and%20Administration.md) →

## Appears In

- [Prepare for the GitHub Foundations Certification](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Prepare%20for%20the%20GitHub%20Foundations%20Certification.md)

## Related Courses

_Courses sharing skills:_

- [Practical GitHub Code Search](../Software%20Development/Practical%20GitHub%20Code%20Search.md) — GitHub
- [Practical GitHub Project Management and Collaboration](../Software%20Development/Practical%20GitHub%20Project%20Management%20and%20Collaboration.md) — GitHub
- [Creating a Book Search Engine from Scratch Using Java and GitHub Copilot](Creating%20a%20Book%20Search%20Engine%20from%20Scratch%20Using%20Java%20and%20GitHub%20Copilot.md) — GitHub
- [Benefits of GitHub Community](Benefits%20of%20GitHub%20Community.md) — GitHub
- [GitHub Foundations- Privacy, Security, and Administration](GitHub%20Foundations-%20Privacy%2C%20Security%2C%20and%20Administration.md) — GitHub

---

[↑ Back to top](#)