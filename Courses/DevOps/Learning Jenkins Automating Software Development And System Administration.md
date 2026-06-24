---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: learning-jenkins-automating-software-development-and-system-administration
url: "https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration"
level: Beginner
updated: 7/23/2025
learners: 3300
skills:
  - Jenkins
exercise_files: true
github: "https://github.com/LinkedInLearning/learning-jenkins-3981454"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQFZ3ThMkUkY5g/learning-public-crop_675_1200/B4EZfGx09oHYAc-/0/1751386640462?e=2147483647&amp;v=beta&amp;t=PhfL4qKtTQicCmDjl4I_8xnECrbq0dPOECxRgA7z0Q0"
linkedin_topic: DevOps
learning_paths:
  - '[Continuous Integration-Continuous Delivery (CI-CD) with Jenkins](../../Paths/DevOps/Learning%20Paths/Continuous%20Integration-Continuous%20Delivery%20(CI-CD)%20with%20Jenkins.md)'
next_courses:
  - '[Jenkins Essential Training](Jenkins%20Essential%20Training.md)'
path_nav: '[{"path":"Continuous Integration-Continuous Delivery (CI-CD) with Jenkins","position":1,"total":3,"prev":null,"next":"Jenkins Essential Training"}]'
path_count: 1
tags:
  - course
  - topic/devops
  - skill/jenkins
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Learning%20Jenkins%20Automating%20Software%20Development%20And%20System%20Administration.md)

![Learning Jenkins Automating Software Development And System Administration](https://media.licdn.com/dms/image/v2/D4E0DAQFZ3ThMkUkY5g/learning-public-crop_675_1200/B4EZfGx09oHYAc-/0/1751386640462?e=2147483647&amp;v=beta&amp;t=PhfL4qKtTQicCmDjl4I_8xnECrbq0dPOECxRgA7z0Q0)

# Learning Jenkins Automating Software Development And System Administration

> Do you need to automate tasks as part of your software development, system administration, or engineering work? This course introduces you to Jenkins, a highly configurable application used to automate software development and system administration tasks, and helps you build confidence in using it. Join instructor Michael Jenkins as he covers how to set up a personal installation of Jenkins and fa

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration) | Beginner | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Kickstart your DevOps journey with Jenkins](#kickstart-your-devops-journey-with-jenkins)
  - [Why choose Jenkins?](#why-choose-jenkins)
  - [Prerequisites and key terms](#prerequisites-and-key-terms)
- [**1. Installing Jenkins**](#1-installing-jenkins) (6 videos)
  - [System requirements](#system-requirements)
  - [Finish a Jenkins installation](#finish-a-jenkins-installation)
  - [The Jenkins user interface](#the-jenkins-user-interface)
  - [Manage plugins](#manage-plugins)
  - [Manage tools](#manage-tools)
  - [Solution: Set up a Jenkins server on Windows](#solution-set-up-a-jenkins-server-on-windows)
- [**2. Jenkins Jobs**](#2-jenkins-jobs) (9 videos)
  - [Your first jenkins job](#your-first-jenkins-job)
  - [Job types](#job-types)
  - [Build description and source code management](#build-description-and-source-code-management)
  - [Build triggers](#build-triggers)
  - [The build environment](#the-build-environment)
  - [Run and monitor jobs](#run-and-monitor-jobs)
  - [Run and monitor jobs using console output](#run-and-monitor-jobs-using-console-output)
  - [Monitor build trends](#monitor-build-trends)
  - [Solution: Automate system monitoring with Jenkins](#solution-automate-system-monitoring-with-jenkins)
- [**3. Job Workspaces, Artifacts, and Parameters**](#3-job-workspaces-artifacts-and-parameters) (9 videos)
  - [Using a global build tool](#using-a-global-build-tool)
  - [Browse a job's workspace](#browse-a-jobs-workspace)
  - [Manage artifacts](#manage-artifacts)
  - [Parameters and environment variables](#parameters-and-environment-variables)
  - [String parameters](#string-parameters)
  - [Choice parameters](#choice-parameters)
  - [Boolean parameters](#boolean-parameters)
  - [Schedule jobs](#schedule-jobs)
  - [Solution: Use a build tool and parameters](#solution-use-a-build-tool-and-parameters)
- [**4. Organize Jobs with Views and Folders**](#4-organize-jobs-with-views-and-folders) (6 videos)
  - [Views and folders](#views-and-folders)
  - [Create a view](#create-a-view)
  - [Create a folder](#create-a-folder)
  - [Search with the command palette](#search-with-the-command-palette)
  - [Delete views and folders](#delete-views-and-folders)
  - [Solution: Create folders and views](#solution-create-folders-and-views)
- [**Conclusion**](#conclusion) (3 videos)
  - [Pipeline as code](#pipeline-as-code)
  - [Build agents and cloud runners](#build-agents-and-cloud-runners)
  - [Next steps with Jenkins](#next-steps-with-jenkins)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Kickstart your DevOps journey with Jenkins](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/kickstart-your-devops-journey-with-jenkins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/kickstart-your-devops-journey-with-jenkins?u=76281980&t=0)** - Automation is essential in modern [Software Development](../../Topics/Software%20Development.md). And [Jenkins](../../Skills/DevOps/Jenkins.md) is one of the best tools to help you get started. Hi, I'm Michael Jenkins. In this course, I'll introduce you to Jenkins, an application that's been in my toolbox for years. We'll walk through installing Jenkins, creating your first jobs and organizing jobs with folders and views. I'll also highlight other useful features you can use right away, like connecting Jenkins to [Git](../../Skills/Software%20Development/Git.md) repositories and archiving artifacts. Then, we'll preview advanced topics for future exploration, like pipelines and build agents. Ready to begin? Great. Let's start learning Jenkins.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (6), [Software Development](../../Topics/Software%20Development.md) (1), [Git](../../Skills/Software%20Development/Git.md) (1)
> **CLI Commands:** git (1)
> **Speakers:** - automation (1)

#### [Why choose Jenkins?](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/why-choose-jenkins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/why-choose-jenkins?u=76281980&t=0)** - [Instructor] Along with [Jenkins](../../Skills/DevOps/Jenkins.md), there are plenty of amazing tools that we can use to automate [Software Development](../../Topics/Software%20Development.md). So if there are other viable alternatives, you might be asking yourself, "Why should I choose Jenkins?" As you learn to interact with Jenkins, you'll find the interface fairly intuitive and easy to navigate. The interface also includes built-in documentation and examples to help you explore included features without having to open another browser tab. Jenkins is also available for anyone to use for free. Jenkins is distributed under the MIT license, which gives generous permissions on how the software can be used, modified, and shared with others. This means that you can install and use it on your laptop just the same way that a Fortune 500 enterprise might use it on a server. Neither of you will pay a dime in licensing or royalties. Jenkins is also open source with all the code available on [github.com](https://github.com). This means that anyone can submit enhancements or fixes to the code base for consideration in future releases. This also leads to the next reason. At its core, Jenkins is actually a framework that can be used to create functionality beyond what the original authors intended. These features are added as plugins. Many people turn to Jenkins because it offers an ecosystem of plugins that provide solutions to specific needs.
>
> **[1:34](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/why-choose-jenkins?u=76281980&t=94)** And if a plugin doesn't already exist, one can be developed to allow Jenkins to do exactly what needs to be done. With the wide usage of Jenkins, a worldwide community has grown around the application. This includes millions of users and developers, thousands of companies, and hundreds of meetups, conferences, and events that bring the community together. If you're looking for someone to share your interests in Jenkins, you probably won't have to look too far.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (11), [Software Development](../../Topics/Software%20Development.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Definitions:** means that (2)
> **CLI Commands:** find (1)
> **URLs:** [github.com](https://github.com) (1)
> **Env Vars:** mit (1)
> **Tools:** github (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Prerequisites and key terms](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/prerequisites-and-key-terms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/prerequisites-and-key-terms?u=76281980&t=0)** - [Instructor] Before starting this course, there are a few things you should be familiar with. Whether you're running [Windows](../../Glossary/Service/Windows.md), macOS, or [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), you should be able to access your operating system's terminal program or command line interface. At the least, you'll need to be able to run programs and simple commands. [Jenkins](../../Skills/DevOps/Jenkins.md) is a web-based application, but from time to time, you'll need to access the command line interface, especially during installation. The majority of the instructions we give to Jenkins will be in the form of a script. I'll be using the Bash shell, which is readily available on Mac or Linux-based systems. If you're on Windows, you'll probably be using batch commands to interface with CMD or perhaps even [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md). I also want you to be familiar with a few key terms I'll be using throughout the course. We'll be referring to projects and jobs quite a bit in this course. A job is a collection of the tasks that you, as the user, want Jenkins to manage. Basically, a job is a list of instructions for Jenkins to complete. Just know that if you hear me say job or project, I'm referring to the same thing. A build is what happens when Jenkins runs through the instructions in a job, and you'll see this term used as a verb and a noun. You might hear me say, "Build a project," or, "Start a build." A build step is a specific command Jenkins will run to complete a task.
>
> **[1:33](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/prerequisites-and-key-terms?u=76281980&t=93)** For example, a build step could be checking out source code or running a script. Jobs can contain as many build steps as needed. A trigger is the event that starts a build. Builds can be started manually by clicking a button or a link in the Jenkins interface, or they might be started automatically based on a schedule. Basically, anything that gets a build going is a trigger. And finally, a plugin is an extension to the core Jenkins functionality. Plugins enhance Jenkins in a number of ways. For example, they can enrich the interface with custom [Dashboards](../../Skills/Data%20Science/Dashboards.md), integrate with source control and collaboration systems, or add specialized build and deployment steps. Honestly, just about all the functionality we use in Jenkins is provided by a plugin.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (10), [Windows](../../Glossary/Service/Windows.md) (2), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2), [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (1), [Dashboards](../../Skills/Data%20Science/Dashboards.md) (1)
> **Definitions:** is a  (5), is an  (1)
> **Tools:** command line (2), terminal (1), bash (1), powershell (1)
> **Analogies:** for example (2)
> **Prerequisites:** you'll need (2)
> **Code Identifiers:** macos (1)
> **Env Vars:** cmd (1)
> **Exercise Files:** source code (1)


### 1. Installing Jenkins

[↑ Back to Table of Contents](#table-of-contents)

#### [System requirements](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/system-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/system-requirements?u=76281980&t=0)** - [Jenkins](../../Skills/DevOps/Jenkins.md) is a web-based application that can be installed on a variety of systems, from laptops to servers. For this course, we need just enough horsepower to get Jenkins up and running. We'll be focusing on learning more than performance. With that said, most modern laptops and servers and plenty of old ones too, have sufficient resources to run Jenkins efficiently. For your [Hardware](../../Topics/Hardware.md), you'll need to have at least 256 megabytes of RAM and one gigabyte of storage. Jenkins requires [Java](../../Skills/Software%20Development/Java.md) to be installed on the system where it runs. We'll be using Java 21, one of the most widely supported versions. Either a Java runtime environment, or a Java development kit will work just fine. If you're running Jenkins as a container, the requirements will change just a bit. On the hardware side, you'll want to increase the RAM to at least four gigabytes and also increase storage space. You'll need to install a container runtime. The personal edition of Docker desktop will work fine, and it's free to download from the Docker website. And that's all the software you need. If you're running Jenkins as a container, you don't need to have Java installed on your local system. The pre-configured Docker images will include Java, and any other runtime dependencies. In the next few sections of the course, you'll find instructions to install Jenkins on systems running [Windows](../../Glossary/Service/Windows.md), [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), macOS, and Docker. Pick the one that fits your situation the best.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (7), [Java](../../Skills/Software%20Development/Java.md) (6), [Hardware](../../Topics/Hardware.md) (2), [Windows](../../Glossary/Service/Windows.md) (1), [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (1)
> **CLI Commands:** docker (4), find (1)
> **Prerequisites:** you'll need (2), install (2)
> **Env Vars:** ram (2)
> **Code Identifiers:** macos (1)
> **Versions:** java 21 (1)
> **Cross-References:** in the next (1)
> **Tools:** docker desktop (1)

#### [Finish a Jenkins installation](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/finish-a-jenkins-installation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/finish-a-jenkins-installation?u=76281980&t=0)** - [Narrator] I've completed a [Jenkins](../../Skills/DevOps/Jenkins.md) installation using Docker, and I've opened my browser to show local host Port 80 80. No matter what system you used for your installation, you'll need to get the initial admin password to unlock the software before you can continue. Refer to the installation instructions and exercise files to find the precise location for your system. I'm using a Docker system, so I've copied my initial administrator password from the indicated location. I'll paste the password here to proceed. On the next screen, we can install the suggested plugins. These are the plugins that are most commonly used by Jenkins. It might take a minute or two for the plugins to install. So let's wait for this to complete. Next, you'll be prompted to create your first admin user. At this point, you can create an account with a username and password. You'll also need to enter a name and an email address. In our sandbox environment, the email address doesn't have to be a real one, but it does have to be in a valid email format with a name and at sign and a domain. On the instance configuration screen, accept the detailed Jenkins URL and then click save and finish. And that's it. You're ready to start using Jenkins.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (4)
> **CLI Commands:** docker (2), find (1)
> **Prerequisites:** install (2), you'll need (1)
> **Ports:** port 80 (1)
> **Env Vars:** url (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [narrator] (1)

#### [The Jenkins user interface](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-jenkins-user-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-jenkins-user-interface?u=76281980&t=0)** - [Instructor] I'm logged into a freshly installed [Jenkins](../../Skills/DevOps/Jenkins.md) server, and I want to highlight some of the menus we'll be interacting with in this course. The New Item link here on the left will be the link that you use the most. Follow this link to create jobs or other resources. Next up is the Manage Jenkins link. This menu gives you access to various configurations for your Jenkins server. There's a lot here, and I just want to highlight a couple of them. On a new installation, you might see a notification telling you that building on a controller node can be a security issue. You can safely dismiss this message for now, since we're just getting started on learning how to work with Jenkins. Okay, with that out of the way, I want to focus on just two of the menus here, Tools and Plugins. We'll be using the tool configuration to install external programs that Jenkins can use across all jobs, and we'll be using the manage plugins menu to update the plugins already installed or to install new ones that we might need as we go along. And last but not least, are the Build Queue and Build Executor Status. The Queue shows what jobs are waiting to be run, and the Build Executor Status shows the jobs that are running at the present moment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (5)
> **Prerequisites:** install (2), getting started (1)
> **CLI Commands:** node (1)
> **Speakers:** - [instructor] (1)

#### [Manage plugins](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-plugins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-plugins?u=76281980&t=0)** - [Instructor] [Jenkins](../../Skills/DevOps/Jenkins.md) provides a lot of functionality out of the box, but we can add functionality with plugins. From the dashboard, select Manage Jenkins and then select Plugins. Then select Available Plugins. This list shows the dozens of plugins that are available to be installed. You can sort the list by name or release date by selecting the headers at the top of the list. This page also has a handy search feature to help find plugins quickly. For example, there's a plugin that adds templates for emails sent from the Jenkins server. Let's start by looking for plugins with the keyword email. As I type, the list of available plugins is shortened to just those that have email in their name or somewhere in their description. And I see one that I want, but I'll continue typing. And the list is narrowed down to just one plugin. If you click on a plugin name, a new tab is opened on the [Jenkins.io](https://Jenkins.io) website with more details on the plugin, like release information, dependencies, and any special instructions for installing or using the plugin. Now let's proceed with the installation. Next to the plugin I want to install, I'll select the checkbox and then select Install. This shows a page with a plugin getting downloaded and installed. While we're discussing installing plugins, let's also take a look at how to disable and uninstall plugins. I'll go to the Installed Plugin page and search for LDAP. Unchecking the box under the Enabled column
>
> **[1:38](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-plugins?u=76281980&t=98)** prevents the plugin from being used, but keeps it around. This is useful when you don't need the plugin right now, but might need it later. But if you're really ready to remove a plugin, select the red X icon to completely remove it. There's a warning that the plugin is about to be uninstalled and a prompt to click Yes to proceed. Back on the Installed tab, searching for the LDAP plugin shows a message that the uninstall is pending. To complete the uninstall, Jenkins needs to be restarted. So the easiest way to do this is to add Safe Restart to the Jenkins URL. And note the capital R in the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) Restart. Once the restart is complete, we can be sure that the plugin was removed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (6), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **UI Navigation:** select the (2), click on (1), checkbox (1), go to (1)
> **Env Vars:** ldap (2), url (1)
> **Prerequisites:** install (2)
> **CLI Commands:** find (1)
> **URLs:** [jenkins.io](https://jenkins.io) (1)
> **Analogies:** for example (1)
> **Warnings:** warning (1)

#### [Manage tools](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-tools?u=76281980&t=0)** - [Instructor] [Jenkins](../../Skills/DevOps/Jenkins.md) provides an interface for installing and configuring tools that can be used by any job that needs them. On the Jenkins dashboard, select Manage Jenkins and then select tools. On the tools page, you can manage several tools, including Maven, [Java](../../Skills/Software%20Development/Java.md), [Git](../../Skills/Software%20Development/Git.md) and others. The process of configuring a tool is pretty much the same for each one, so let's use Maven to demonstrate. We'll be using Maven later on in the course, so please follow along. At the bottom of the page, under Maven installations, select Add Maven to expose the configuration interface. The first thing you need to do is give the config a name. Because you can install multiple versions, a good practice is to include the version number in the name. So I'll name this installation Maven-3.9.9. If there are newer versions of Maven available when you view this course, please use the latest version. Also, keep in mind that multiple versions can be installed at the same time. Under the tool name is a checkbox you can use to enable automatic installation. With this option selected, Jenkins will install the tool the first time it's used in a job. Before you browse away from this page, be sure to save the configuration by selecting Save or Apply. Now let's take a look at the Git section. If you're following along on a [Windows](../../Glossary/Service/Windows.md) system, you'll also need to configure Git. Please take a look at the exercise files for instructions
>
> **[1:33](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-tools?u=76281980&t=93)** and more information.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (4), [Git](../../Skills/Software%20Development/Git.md) (3), [Java](../../Skills/Software%20Development/Java.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **CLI Commands:** git (3)
> **Prerequisites:** install (2), configure (1)
> **Versions:** 3.9.9 (1)
> **UI Navigation:** checkbox (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Best Practices:** good practice (1)

#### [Solution: Set up a Jenkins server on Windows](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=0)** - [Instructor] In this challenge, I'm installing [Jenkins](../../Skills/DevOps/Jenkins.md) on a [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md). You can complete this challenge on other operating systems, but I'm using [Windows](../../Glossary/Service/Windows.md) to demonstrate the steps that are a bit different compared to installing Jenkins on [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) and macOS. Let's start with a [Java](../../Skills/Software%20Development/Java.md) installation. Jenkins needs to have a Java Runtime Environment installed, and at the time I'm recording this, the recommended version of Java for use with Jenkins is Java 21. I've downloaded the installer, so I'll select that. First we have to accept the license agreement and select Next. We're going to install this for all users on this machine, so I'll keep that option selected and select Next. On this screen, we should set or override the Java home variable, and then select Next. And now finally, we can select Install. All right, Java is installed, now let's install [Git](../../Skills/Software%20Development/Git.md). We need to install Git so Jenkins can connect to code repositories like [GitHub](../../Skills/Software%20Development/GitHub.md), GitLab and [Bitbucket](../../Skills/Software%20Development/Bitbucket.md). I've downloaded the installer and I'll get started by selecting it. There are a lot of prompts in this installer, but for this installation, I can accept all the defaults and just select Next until the installation starts. Okay, the Git installation has completed. I'll select Finish here and move on to Jenkins. I've downloaded the LTS version of Jenkins for Windows
>
> **[1:37](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=97)** from the Jenkins Download page, and I'll open the installer to start the installation. We'll start by selecting next and keep most of the defaults until we get to the service logon credentials. Ideally, we would run Jenkins on a Windows system as a local or domain user, but because we're running in a sandbox environment, running with a local system is fine for this setup so I'll select that and then select Next. We're also prompted to select the port that Jenkins will use for its web application, and we have to test the port that we select before we can move on, so I'll select Test Port. And hey, my port test passes, so I'll select Next. If you run into any problems with your port test on your system, then please check to see what processes are running that are using port 8080, stop them and reconfigure them or choose another port for Jenkins to use, then select Next. Now we need to select the Java that Jenkins will use as it operates. I'll select Change, and then browse to the location where I installed the [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) JDK 21. Under Program Files, I'll select Microsoft jdk-21.0 hotspot. Then I'll select OK and then I'll select Next. I can skip the Custom Setup screen and then select Install.
>
> **[3:10](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=190)** Now that the installation is complete, I'll select Finish. Okay, let's go to the Jenkins interface in a new tab, and I'll enter localhost:8080. Okay, on this screen, we get the unlock option to actually get into the Jenkins application. The first thing that we have to do is get the initial admin password, so I'll select this path and copy it. Now let's open Notepad. From the Start menu, I'll open Notepad, and then I'll select File, Open, and paste in the file name to the initial admin password. This opens the file where I can copy this value, and now I'll go back to the Jenkins interface, and here I will paste in the initial admin password and select Continue. On the next screen, we can install the suggested plugins. These are the plugins that are most commonly used by Jenkins. It might take a minute or two for the plugins to install, so let's wait for this to complete. Now I'll create my admin user account. Make a note that the email address doesn't have to be a real email address for the sandbox environment, but it does have to have the form of a valid email address, which means it has to have a name, an @ sign and a domain. On the Instance Configuration screen, I'll accept the detailed Jenkins URL,
>
> **[4:44](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=284)** and then select Save and Finish. Okay, this message to start using Jenkins is the confirmation I need that this challenge has been successfully completed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (18), [Java](../../Skills/Software%20Development/Java.md) (7), [Windows](../../Glossary/Service/Windows.md) (3), [Git](../../Skills/Software%20Development/Git.md) (3), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (2)
> **Prerequisites:** install (7), setup (2)
> **CLI Commands:** git (3), make (1)
> **UI Navigation:** select the (2), open the (1), go to (1)
> **Env Vars:** lts (1), jdk (1), url (1)
> **Tools:** github (1), gitlab (1), bitbucket (1)
> **Ports:** port 8080 (1), :8080 (1)
> **Versions:** java 21 (1), 21.0 (1)


### 2. Jenkins Jobs

[↑ Back to Table of Contents](#table-of-contents)

#### [Your first jenkins job](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/your-first-jenkins-job?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/your-first-jenkins-job?u=76281980&t=0)** - Just like learning any new application or programming language, one of the first things you do is create a Hello World project. The purpose of a Hello World is to make sure everything is running as expected and to get an introduction to basic configurations and settings. So let's do that now with a "Hello, [Jenkins](../../Skills/DevOps/Jenkins.md)" freestyle job. If you're working with a new Jenkins installation, your homepage probably looks like this. No jobs have been created, and you see a nice welcome message inviting you to get started. Start by selecting New Item. In the name field, enter Hello-Jenkins. You'll notice I use the dash in the name for the project. You could use spaces, but it's a good practice to keep spaces out of your job names. Job names with spaces make things difficult when working with a job in other ways, like from the command line or from an API. Don't get me wrong, it's all right if you use spaces, but you have been warned. Now select Freestyle Project and then select OK. This leads to the job configuration page. This is where you define the way your job will run and anything else that needs to be specified along with the configuration. Scroll down to the Build section. Now, select Add Build Step. If you're on a [Windows](../../Glossary/Service/Windows.md) system, select Execute Windows Batch command. If you're on a Mac, [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), or Docker system, select Execute Shell.
>
> **[1:33](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/your-first-jenkins-job?u=76281980&t=93)** I'm using a Docker system, so I'll be using the Execute Shell option. In the form, enter echo "Hello, Jenkins". The echo command will be the same if you're on Windows or one of the other systems. At the bottom of the page, select apply. If you select apply, you'll get a prompt letting you know that the job has been saved, but the configuration page stays open. This is useful if you want to save your progress but keep working on the same configuration. Now select Save. This saves the job and returns to the job homepage. Save is useful when you're done editing and ready to move on. To run the job, select Build Now. You'll see a message saying that a build was scheduled, and after a few seconds, you should see something under Build History: a green check mark, a number one, and a timestamp. Select the check mark. This opens the console output for the build. In the output, you can see the echo command that you configured in your job along with the "Hello, Jenkins" message. You can also see that Jenkins indicated this build to be a success. Great! You've just configured and run your first Jenkins job.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (7), [Windows](../../Glossary/Service/Windows.md) (3), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **CLI Commands:** make (2), docker (2)
> **UI Navigation:** scroll down (1), select the (1)
> **Env Vars:** api (1)
> **Tools:** command line (1)
> **Analogies:** just like (1)
> **Best Practices:** good practice (1)
> **Speakers:** - just (1)

#### [Job types](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/job-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/job-types?u=76281980&t=0)** - [Instructor] Let's review the different types of jobs that can be created from the new-item screen. The freestyle job is the most commonly used job type. As the name implies, freestyle jobs provide a wide range of options that let you tailor how [Jenkins](../../Skills/DevOps/Jenkins.md) runs your job. Pipeline jobs are perfect for projects that outgrow freestyle jobs. Pipelines can chain together multiple stages of a build process and capture the entire project configuration as code. The multi-configuration project is useful when you might have multiple jobs that do the same thing but for different combinations of parameters. Instead of creating many jobs for each set of parameters, you can use the multi-configuration project to create one job that applies the parameters for you. The multibranch pipeline and organization folder job types are especially suited for working with code repositories. Organization jobs are configured to scan repositories for specific types of files that Jenkins can use to configure jobs automatically. In a similar fashion, the multibranch pipeline job can be used to configure jobs for different branches belonging to the same repo. And I didn't skip it, but the last item on this page, folder, isn't really a job. Jenkins uses folders to group things together. We'll talk more about folders in an upcoming lesson. For the remainder of the course,
>
> **[1:33](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/job-types?u=76281980&t=93)** we'll be focusing on the freestyle job, the most commonly used job type.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (3)
> **Prerequisites:** configure (2)
> **Speakers:** - [instructor] (1)

#### [Build description and source code management](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-description-and-source-code-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-description-and-source-code-management?u=76281980&t=0)** - [Instructor] Let's take a closer look at the configuration page for the Hello [Jenkins](../../Skills/DevOps/Jenkins.md) job. From the dashboard, I'll select the job and then select Configure. First of all, notice the tabs on the left side of the page. These outline the sections of the configuration. In the general section, one of the most important fields is the description field. Use this field to add freeform text describing the job and what it does. A good name for the job goes a long way, but the description can be used to provide any details someone running the job might need to know. The discard old builds option is also very important. Jenkins keeps a record of each build, along with any files generated by the build, including log files and artifacts. This is great if you want to review the history of a job, but old builds also take up disc space. You can manage this by only keeping builds for a certain period of time, or by only keeping a maximum number of builds. These options can be used together to make sure your Jenkins server has plenty of space to work with. And if you click the advanced button, you can also manage the number of days artifacts are kept. We'll cover some of the other general options in upcoming lessons. For now, let's move on to the source code management section. The source code management options control the way Jenkins interacts with any code you have stored in a [Git](../../Skills/Software%20Development/Git.md) repository. Selecting the Git option opens a dialogue where you can enter the repository URL.
>
> **[1:34](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-description-and-source-code-management?u=76281980&t=94)** Add any credentials needed to access the repo and specify which branches to check out. This is another powerful feature of Jenkins because it allows you to pull code from outside of your job configuration into the workspace where the job runs. This is key for using Jenkins as an integration, test and deployment tool for code stored in repositories like [GitHub](../../Skills/Software%20Development/GitHub.md), GitLab, and [Bitbucket](../../Skills/Software%20Development/Bitbucket.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (6), [Git](../../Skills/Software%20Development/Git.md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (1)
> **CLI Commands:** git (2), make (1)
> **Tools:** github (1), gitlab (1), bitbucket (1)
> **Exercise Files:** source code (2)
> **Env Vars:** url (1)
> **UI Navigation:** select the (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Build triggers](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-triggers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-triggers?u=76281980&t=0)** - [Instructor] Let's continue our overview of the job configuration page with the next section, build triggers. A trigger is any action that starts a job. [Jenkins](../../Skills/DevOps/Jenkins.md) gives you plenty of ways to customize how your job can be started. The trigger builds remotely option lets processes outside of Jenkins start jobs by accessing a URL through the Jenkins web API. The option to build after other projects are built lets Jenkins start a job immediately after other jobs are finished. If you have a series of jobs that depend on each other, for example, you can have one job wait for the others to finish before starting. The option to build periodically is another powerful feature in Jenkins that lets you trigger jobs on a schedule. This is useful for jobs that need to be run on a schedule like hourly, daily, weekly, and so on. The input field where you specify the schedule uses the cron format, giving you precise control over when the job should run. We'll go into greater detail on scheduling jobs in an upcoming lesson. The [GitHub](../../Skills/Software%20Development/GitHub.md) trigger option is very useful for projects that are tied to GitHub. This option allows Jenkins to start jobs based on activity in GitHub, like releases, tags, or other types of commits. Using this feature, you can set up a tight relationship between Jenkins and GitHub called [continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md). If something happens in GitHub, Jenkins gets notified by a webhook
>
> **[1:34](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-triggers?u=76281980&t=94)** and then takes some action. The benefit of this setup is that Jenkins can be used to orchestrate complex jobs and projects, all from checking in a file or making a change in GitHub. The last option in this section, pull SCM, can also be used to start your job based on activity in a repo. However, pulling is not as efficient as triggering from a GitHub event, and I would even advise against using it. With this option, Jenkins checks the repo on a schedule and looks for changes. Because Jenkins has to keep checking for changes, the system running Jenkins will be using up resources unnecessarily. While this option does have its place, triggering from a webhook is usually the better option.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (12), [GitHub](../../Skills/Software%20Development/GitHub.md) (7), [Continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) (1)
> **Tools:** github (7)
> **Env Vars:** url (1), api (1), scm (1)
> **Prerequisites:** set up (1), setup (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [The build environment](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-build-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-build-environment?u=76281980&t=0)** - [Instructor] Now, let's move on to the build environment section. The delete workspace option is useful for cleaning things up a bit before the job gets started. Each time a job runs, it uses a specific directory on the [Jenkins](../../Skills/DevOps/Jenkins.md) system called the Workspace. By default, any files created by a job and saved to the workspace will stay there between job runs. With this option, Jenkins will remove the workspace and recreate it for each new run. Using secret texts or files is useful for injecting secrets into your jobs at runtime. Using this option, you can specify usernames, passwords, certificates, and other sensitive information, and the variables or files that will hold the secrets when the job gets run. The secrets are stored securely outside of the jobs as Jenkins' credentials. The terminate the build if it's stuck option is useful to keep jobs from running on and on if something keeps the job from stopping normally, for example, a job could be waiting for some external process. If that process never responds, the job could end up waiting forever. To keep that from happening, you can specify the absolute amount of time a job has to run or even a deadline that the job has to finish by. The default action to take if a job runs too long is to abort. But you can also choose to fail the build or update the build description, and that leads to the build steps section.
>
> **[1:34](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-build-environment?u=76281980&t=94)** Excellent. This is the section where you tell your Jenkins job to do something very specific as it relates to your project. Each action that Jenkins takes is called a build step. Selecting the add build step button displays the different types of steps that you can apply. If your Jenkins is running on [Windows](../../Glossary/Service/Windows.md), you will likely select execute Windows batch command. And if your Jenkins is running on other operating systems, you'll likely use the execute shell step. In either case, these steps provide a way to enter commands or scripts that Jenkins can run. There are also build steps for Ant, Cradle and Maven, if you're working with [Java](../../Skills/Software%20Development/Java.md)-based projects. One other thing to note is that you can have multiple build steps. So if you want to have commands run in separate steps before a project gets kicked off, you can do that easily by adding additional build steps. You can also reorder build steps by clicking the hamburger menu on the top left of a step, and then just dragging the step to the location where you want it to be. And last, but not least, is the post build action section. After the build is run, post-build actions give you additional steps to take before the entire build wraps up. You might want to archive something from this build, trigger another job, or even send an email to someone to let them know that the build has been completed. And just like the steps in the build section, you can have multiple post-build actions
>
> **[3:08](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-build-environment?u=76281980&t=188)** and they can be rearranged in the order you specify. The very last thing I want to point out in the job configuration interface are these question mark icons beside some of the items on the page. These are links to built-in help or documentation. If there are any options or features that you want to know more about, you'll find that help is just a click away.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (8), [Windows](../../Glossary/Service/Windows.md) (2), [Java](../../Skills/Software%20Development/Java.md) (1)
> **Analogies:** for example (1), just like (1)
> **CLI Commands:** find (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Run and monitor jobs](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs?u=76281980&t=0)** - [Instructor] Let's see how we can monitor jobs in the [Jenkins](../../Skills/DevOps/Jenkins.md) interface. To help with the discussion, I'm starting with a freestyle job named long-running-job. The description gives a little more detail, letting us know that this job runs for 30 seconds, and if I scroll down to the build section, there's one build step with a Bash script. The script counts from one to 30, sleeping for one second between each count. If you're following along on Mac, [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), or a Docker, you can use this same script. If you're following along with Jenkins on a [Windows](../../Glossary/Service/Windows.md) system, you'll want to use the execute windows batch command build step. There's also a script just for you in the exercise files that will let you do the same 30-second count. In either case, this script will run for about 30 seconds and produce some output so we can follow the job's progress. Let's run this job. I've started the job, and under Builds, there's a slowly spinning blue circle and a number. The Blue circle lets you know that the job has not been run before, so there's no status to report on the history of the job. The number is the build ID. The Build ID is a unique number that lets Jenkins organize the builds associated with a job. Each build gets a unique ID. Once the job is finished, the circle turns into a green check mark, letting you know the job finished successfully. Let's run the job one more time
>
> **[1:34](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs?u=76281980&t=94)** and observe what happens next. This time, the circle is spinning, but it has a green check mark inside it. This means the previous job finished successfully. Once the job finishes, we see another green check mark signaling another successful build. In the next lesson, we'll take a look at the output of the job in the console log.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (3), [Windows](../../Glossary/Service/Windows.md) (2), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **CLI Commands:** docker (1)
> **Cross-References:** in the next (1)
> **Tools:** bash (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Run and monitor jobs using console output](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs-using-console-output?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs-using-console-output?u=76281980&t=0)** - [Instructor] We're working with a job that runs for about 30 seconds and prints some output to the screen. Let's take a look at that output in the console log, you can select the pull down next to a build number and select console output, or you can select the check mark. Next to the build you want to view on the console output page, you'll see details related to who ran the build, where it was run, and any output the build produced, which in our case is the count from one to 30. Seeing the build status and checking the output is great, but what if you want to see the output in real time as the build is running. Let's go back to the project page and select build now. One more time. Once the build gets started, select the check mark next to the running job to open the console. You'll see that [Jenkins](../../Skills/DevOps/Jenkins.md) is updating the console output as the job runs the page, even scrolls along automatically so you can follow the most recent output without having to scroll down. This is helpful if you want to follow the output from a build in real time. Okay, you've seen jobs that have finished successfully and followed along with the output. What happens if a job doesn't finish successfully? To figure that one out, we're going to need to introduce an error in our job. Let's configure this job. Back on the project page select configure to edit the job again, and then select build steps. By default, Jenkins will consider the build a failure if any command in a build step finishes
>
> **[1:33](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs-using-console-output?u=76281980&t=93)** with an exit value other than zero. That means we can introduce a failure by explicitly entering a command that has an exit value of one. So inside the execute shell step, I'll enter exit one at the very end. I'm using Jenkins from a docker image. If you're on a window system and using a batch command, you'll enter exit slash B one for a batch shell and exit one for power shell, refer to the exercise files for more details on how to set that up. Okay, let's save and run this job. Like before the build gets scheduled and a circle is spinning around a green check mark, let's view the console output. This time the job finishes with a failure status. There are other visual indicators reporting the failure like the red X at the top of the console output, and instead of a green check mark, the most recent build is replaced with a red x. In the next lesson, we'll see other ways we can monitor builds in Jenkins. But before we go on, let me fix this job by removing that error I inserted. If you're following along, please do the same and meet me in the next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (4)
> **UI Navigation:** select the (3), open the (1), scroll down (1)
> **Cross-References:** in the next (2), go back to (1)
> **Prerequisites:** configure (2)
> **CLI Commands:** docker (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Monitor build trends](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/monitor-build-trends?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/monitor-build-trends?u=76281980&t=0)** - [Instructor] Let's take a look at a monitoring feature called the Build Trend. Next to the list of builds for the long-running-job, I'll select the expand icon. This opens a chart, displaying a timeline and status for each build. Below the timeline is a report showing how long each build took to run and which builds were successful or failed. We know that this job would run for a fixed period of time, but other jobs you create might take more or less time with each build. The Build Trend can help you track that information.

> [!info]- Semantic Content
>
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Automate system monitoring with Jenkins](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-automate-system-monitoring-with-jenkins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-automate-system-monitoring-with-jenkins?u=76281980&t=0)** - [Instructor] In this challenge, we're tasked with automating a scheduled system report. One of the keys to this solution was applying a trigger to run the job daily. Under triggers, I selected Build Periodically and set the schedule to run overnight using the Midnight alias. Other options include the Daily alias or a Cron pattern that would run the job once daily. After entering a schedule, [Jenkins](../../Skills/DevOps/Jenkins.md) provides verification by explaining when the job would have run last and the next time it will run. Then I added a build step. The commands for this build step were available in the exercise files. The exercise files contained scripts for both [Windows](../../Glossary/Service/Windows.md) and other operating systems. I'm on a non-Windows system, so I use the second script. I used the copy icon to get the script and pasted it into the build step. We're also required to add a post build step. The script generates a report and the post build step uses the file name to store the file in a space that makes it easy to access. I'm viewing the output for the last run of this job, and by design, not much is written to the console. But archiving the report as an artifact makes it easily accessible from the Jobs homepage. Opening up the report shows the details, which in my opinion,
>
> **[1:32](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-automate-system-monitoring-with-jenkins?u=76281980&t=92)** means this challenge has been solved successfully.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (2), [Jenkins](../../Skills/DevOps/Jenkins.md) (1)
> **Exercise Files:** exercise files (2)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Job Workspaces, Artifacts, and Parameters

[↑ Back to Table of Contents](#table-of-contents)

#### [Using a global build tool](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=0)** - In this lesson, we'll be configuring a job that uses tools, specifically [Git](../../Skills/Software%20Development/Git.md) and Maven. Tool configurations allow us to install different versions of a tool once, and then use that same configuration across multiple projects. Let's go to the [Jenkins](../../Skills/DevOps/Jenkins.md) console to see how tools work. I'm logged into my Jenkins server and I'm viewing the tools configuration. If you're following along on a [Windows](../../Glossary/Service/Windows.md) system, you'll need to configure Git. If you haven't done that already, please review the lesson and exercise files on managing tools. If you're following along on a Mac, [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), or Docker system, GIT should already be installed. For all platforms, you'll need to set up Maven. Once you have Git and Maven installed, you'll be all set for this lesson. I've already started a new job called Hello Maven. We'll be using Git to check out code and then using Maven to build a [Java](../../Skills/Software%20Development/Java.md) application. Let's start by selecting Source Code Management. I'm selecting Git, and I need to enter the repository URL. The repo we're using is available in the exercise files for this lesson, and I have that open in another tab. On the repo page, I'll select code, and then make sure I have the H-T-T-P-S tab selected. And then I'll select these icons to copy the URL to the clipboard. Now I'll go back to the configuration and paste in the URL. Once I select outside of the URL entry form, Jenkins gives a message saying that it failed
>
> **[1:36](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=96)** to connect to the repository. At the time that I'm recording this, I'm using a private repository, so I need to select my credentials for this repo. When you access the repo, it will be public and you won't have to worry about entering credentials. We both need to update the branch though. Under branch specifier we need to change master to main. At the time that I'm recording this, Jenkins uses the master branch as the default. However, many projects in [GitHub](../../Skills/Software%20Development/GitHub.md) use a branch called Main as the default. So if you're pulling code from GitHub and get errors, make sure you have your job configured to use the correct branch. Okay, let's move on to build steps, we need to add the build step named Invoke top-level Maven targets. This build step creates a dialogue where we can configure our job to call Maven. We need to select the version of Maven that we set up in the Global Tools configuration. I called mine maven-3.9.9. The goal for this job will be to package, so I'll add that here under goals. I want to add one more build step, a Java command that will run the code that Maven builds. So I'll add and execute shell build step. And now I'll copy and paste the Java command from the exercise files. I'll go to the repo and browse to chapter 3, 03_01 using a global build tool. And I'll scroll down to the Mac OS, Linux, and Docker section and select this.
>
> **[3:12](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=192)** Now, I'll go back to the configuration and paste this in. Now, if you're running Jenkins on a Windows system and you're following along, there's one change that you'll have to make instead of running execute shell for this step, you'll want to use execute Windows batch command. The Java command will be the same, but you'll need to use the build step that's specifically designed for Windows. Okay, our job is configured. Let's save it and run it. I'm going to wait here and give this job a chance to finish. Okay, the job is finished. Let's take a look at the console output. At the top of the output, we can see that Jenkins fetched the code from GitHub using the repo that we specified. After that are statements from Maven showing the steps that it took to build and test the code from the repo. And finally, at the end of the output, there's an all too familiar phrase, "Hello, world!" If you're following along, your output might be slightly different from mine. Since Maven also downloads and installs dependencies. In the next lesson, we'll use the Jenkins interface to browse the workspace where this code was compiled.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (7), [Git](../../Skills/Software%20Development/Git.md) (6), [Windows](../../Glossary/Service/Windows.md) (4), [Java](../../Skills/Software%20Development/Java.md) (4), [GitHub](../../Skills/Software%20Development/GitHub.md) (3)
> **CLI Commands:** git (6), make (3), docker (2)
> **Prerequisites:** you'll need (3), configure (2), set up (2), install (1), make sure you have (1)
> **Env Vars:** url (4), git (1)
> **UI Navigation:** go to (2), select the (1), scroll down (1)
> **Exercise Files:** exercise files (3), source code (1)
> **Cross-References:** go back to (2), in the next (1)
> **Tools:** github (3)

#### [Browse a job's workspace](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/browse-a-job-s-workspace?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/browse-a-job-s-workspace?u=76281980&t=0)** - [Instructor] Each job is given a dedicated directory on the [Jenkins](../../Skills/DevOps/Jenkins.md) server, called a workspace. This is where the job stores any files that are generated during the build. Let's take a look at the workspace for the Hello-Maven job from the previous lesson. This job was configured to pull code from [GitHub](../../Skills/Software%20Development/GitHub.md), so right away you can see the files and directories that got checked out at the beginning of the build. Selecting a directory opens that directory and may reveal additional files and directories. If you select a file, Jenkins will try to download it. Depending on how your browser is configured, your browser may also open the file to reveal its contents. Because each build uses the same workspace, sometimes its useful to clean things up a bit before the next run. Under workspace is a menu item labeled Wipe Out Current Workspace. Selecting this link and then selecting Yes will remove all files from the workspace. And if we try to view the workspace now, we get an error. There's no undo to get your workspace back, but running a new bill will create the workspace again. If you want your job to automatically clean up the workspace before each build, configure the job and select Delete workspace before build starts, under Environment. You can also automatically clean up the workspace after a build with a post-build action. To do that, you'll select Post-build Actions, Add a post-build action, and then select Delete workspace when job is done.
>
> **[1:34](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/browse-a-job-s-workspace?u=76281980&t=94)** If your project creates any files you want to keep around, you'll need to identify those files as artifacts before you delete the workspace. Let's see how to do that in the next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Prerequisites:** configure (1), you'll need (1)
> **Cross-References:** in the next (1)
> **Tools:** github (1)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Manage artifacts](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-artifacts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-artifacts?u=76281980&t=0)** - [Instructor] Most [Jenkins](../../Skills/DevOps/Jenkins.md) jobs will generate some sort of product at the end of each build. It could be a compiled executable, like an EXC, an archive, like a JAR file, or it might even be a report in a text file. These [products](../../Skills/Software%20Development/Microsoft%20Products.md) are referred to as artifacts. Let's take a look at the artifacts created by the Hello Maven job that we've used in previous lessons. At the very end of the log file for the Hello Maven job, there's a line here labeled "Building jar" with a path to a jar file. Let's take a look at that file in the project's workspace. From the project's workspace, I'll select Target, and there's the jar file. The jar file was easy enough to find, but it would be a waste of time if we had to poke around in the workspace every time we wanted to download or use this file. Fortunately, Jenkins makes it easy to manage artifacts with a post-build step. Let's take a look. First, let me copy the name of this jar file. Now, I'll configure the job and go to Post-Build Actions. I'll add a post-build action and select Archive the Artifacts. This build step lets us specify the exact files we want to archive for each successful build. You should note that the entry for this build step takes paths to files starting at the top of the workspace directory. So you might be inclined to just type the file you want to archive, but you need to be more specific. For now, I'll just use the file name,
>
> **[1:33](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-artifacts?u=76281980&t=93)** and I'll click outside of the field. The file name I entered doesn't match anything and even offers a suggestion for where the file might be. Pretty cool, right? If I didn't know the complete path, I could also use a wild card prefix with two asterisks and a slash. This tells Jenkins to search for the file in the workspace without giving the exact path. Now, let's save this and run a new build to see what happens. When the build completes, we get a new link that takes us directly to the artifact. Now, with every successful build, the artifact will be much easier to find.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (3), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **CLI Commands:** find (2)
> **Env Vars:** exc (1), jar (1)
> **UI Navigation:** go to (1)
> **Warnings:** note that (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Parameters and environment variables](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/parameters-and-environment-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/parameters-and-environment-variables?u=76281980&t=0)** - [Instructor] When you're developing automation, it makes sense to create solutions that can be applied to many different scenarios. One way to do that is to create projects that accept parameters. [Jenkins](../../Skills/DevOps/Jenkins.md) supports this approach by letting you create jobs that accept different types of parameters, including strings, Booleans, and multiple choice among others. These values are then injected into the job and accessed as environment variables. On a [Windows](../../Glossary/Service/Windows.md) system, environment variables are accessed in batch command build steps using the percent variable percent format. On Macs, [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), and Docker systems, environment variables are accessed using a dollar sign and then the variable name. Typically, Jenkins parameters are named in all uppercase. You should also note that the names are a case sensitive on Mac, Linux, and Docker systems, but not on Windows systems. Regardless of the operating system, it's good practice to use names in all uppercase and then stay consistent throughout your job to prevent errors. It's also good practice to use parameter names that don't have spaces or special characters in them. It's better to use a single [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) or multiple words with underscores. Just above each build step field, there's a link that shows additional environment variables you can use. These environment variables are automatically created by Jenkins and can be pulled into your job. I won't go over all of these,
>
> **[1:33](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/parameters-and-environment-variables?u=76281980&t=93)** but a couple you might want to use are the BUILD_ID and the BUILD_NUMBER. These variables are useful for tagging and naming artifacts produced by build. Let's take a closer look at using environment variables and how to configure string, choice, and Boolean parameter types.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (3), [Windows](../../Glossary/Service/Windows.md) (2), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **CLI Commands:** docker (2)
> **Env Vars:** build_id (1), build_number (1)
> **Best Practices:** good practice (2)
> **Warnings:** note that (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [String parameters](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/string-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/string-parameters?u=76281980&t=0)** - [Instructor] Let's configure a job that uses a string parameter. In a new project, start by checking the box next to This job is parameterized. Then select String Parameter. Add the parameter name, version number. You can also provide a default value. This is useful for specifying a sensible default. I'll enter 1.0.0 for this default. The description gets displayed when the job is run, and is useful for providing details about what the user should enter. In this case, I'll prompt the user for a version number. Now, let's use this parameter in a build step. I'm running [Jenkins](../../Skills/DevOps/Jenkins.md) on a Docker system, and I'll be using a shell step. If you're running Jenkins on a window system, use a batch command step, and to help us out, there's a script in the exercise files for this example. Again, I'm copying the code for macOS, [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), and Docker. If you're on a [Windows](../../Glossary/Service/Windows.md) system, you'll want to use the script for Windows, and I'll paste this into the Build step. Now, I'll save this job. Because we've created a parameterized job, the Build Now link changes to Build with Parameters, and sure enough, here's our string parameter with a default value of 1.0.0, and the description is right above it. Let's see how this turns out. Okay, there's the echo statement as expected, reporting the version that was used as a parameter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (2), [Windows](../../Glossary/Service/Windows.md) (2), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **CLI Commands:** docker (2)
> **Versions:** 1.0.0 (2)
> **Code Identifiers:** macos (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Choice parameters](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/choice-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/choice-parameters?u=76281980&t=0)** - [Michael] Let's configure a job that uses a choice parameter. In a new project, start by checking the box next to this job is parameterized and selecting choice parameter. Let's name this parameter environment. Now, I'll enter some options to choose from. For choice parameters, the first choice entered will be used as the default, so I'll enter development, staging, and production. I'll also add a description asking for the target environment. Now, let's add a build step that uses this parameter. I'm running [Jenkins](../../Skills/DevOps/Jenkins.md) on a Docker system, and I'll be using a shell step. If you're running Jenkins on a [Windows](../../Glossary/Service/Windows.md) system, use a batch command step, and there are scripts in the exercise files that we can use for this example. Again, I'm using the script for Docker. If you're on a Windows system, you want to use the script just for Windows. Now, I'll select save and then build with parameters. For choice parameters, we get a list of items to choose from. This is perfect for only allowing specific predefined values as input to a job. I'll pick staging and then select build. Now, let's take a look at the output. Indeed, the job shows that staging was selected for the environment parameter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (3), [Jenkins](../../Skills/DevOps/Jenkins.md) (2)
> **CLI Commands:** docker (2)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [michael] (1)

#### [Boolean parameters](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/boolean-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/boolean-parameters?u=76281980&t=0)** - [Instructor] Let's configure a job that uses a Boolean parameter. In a new project, start by checking the box next to This Job is Parameterized and selecting Boolean Parameter. I'll give it the name RUN_TESTS. This will add a checkbox parameter to the build interface. For Boolean parameters, the default value lets us pick which value is the default. If the box is checked, then the default will be set to true. If it's unchecked, it'll be set to false. I'll leave the box unchecked for now. For the description, I'll add, "Check this box to run tests before deployment." Now, let's add a build step that uses this parameter. I'm running [Jenkins](../../Skills/DevOps/Jenkins.md) on a Docker system, and I'll be using a shell step. If you're running Jenkins on a [Windows](../../Glossary/Service/Windows.md) system, use a batch command step. Let's go to the exercise files to get the script for this example. I'm using the script for Docker. If you're on a Windows system, you'll want to use the script just for Windows. And I'll paste the script into the Execute Shell step. And let me open this up so we can take a little bit closer look at it. In this script, we're checking the value of the RUN_TESTS parameter. And based on that value, the script will echo if tests will be run or not. Let's save this and build with parameters. There's the RUN_TESTS parameter. As we configured it, the default is unchecked. After building the job, let's check the output. Since we left the RUN_TESTS parameter unchecked,
>
> **[1:34](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/boolean-parameters?u=76281980&t=94)** we get the report that no tests are going to be run. Let's run the job with the other option. I'll select Build with Parameters again, and this time, I'll check the box next to RUN_TESTS, and then I'll select Build. Now let's look at the output. As expected, the script would run tests based on the value of the RUN_TESTS parameter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (3), [Jenkins](../../Skills/DevOps/Jenkins.md) (2)
> **Env Vars:** run_tests (6)
> **CLI Commands:** docker (2)
> **UI Navigation:** checkbox (1), go to (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Schedule jobs](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=0)** - [Instructor] So far, all of our jobs have been triggered manually, but sometimes we'll need to run a job automatically. One of the ways that we can do that is by running jobs on a schedule. Running jobs on a schedule helps with automating things like updating software, checking system details, or downloading and processing data. If you're familiar with [System Administration](../../Skills/Network%20and%20System%20Administration/System%20Administration.md), the thought of using Cron to run a schedule task might come to mind. In fact, [Jenkins](../../Skills/DevOps/Jenkins.md) defines schedules using a format very similar to Cron. In both cases, we use an expression to represent the schedule for running the job. From left to right, the fields in our schedule are the minute, the hour, the day of the month, the month, and the day of the week. Each field can accept values that make sense for the period of time represented by the field. So for minutes, you can enter zero to 59, and for hours, you can enter zero to 23. To represent all valid values for a field, you would enter an asterisk or star. That is the character you get by pressing the shift key and the eight key on US keyboards. So if you enter a star in the day field, for example, then the schedule will be valid for all days of the week. Now let's see the Jenkins scheduler in action. I've started a new project and I'll select triggers and then build periodically. This opens a form where I can enter a schedule. I'll enter zero, zero, star, star, star,
>
> **[1:37](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=97)** meaning the job would run at midnight on every day of the week. As soon as I select outside of the field, Jenkins tries to validate the expression and offers up a suggestion to use H instead of zero for the first field. This is one of the improvements that Jenkins offers over the standard Cron format. Using H for a field instead of an asterisk or a specific value lets Jenkins schedule the job close to when we want it to run. That way, if multiple jobs are scheduled for the same time, Jenkins can spread them out without worrying about missing the schedule. Basically using H lets us cut Jenkins some [Slack](../../Skills/Software%20Development/Slack.md). Jenkins also provides aliases for general times like hourly, daily, and monthly. With these aliases, we give Jenkins a general timeframe for when we want to run the job. So for hourly, the job would be run sometime every hour, and for daily, the job would be run sometime during the day. These are great for when you don't care about the exact time the job gets run, as long as it gets run sometime during that period. My absolute favorite of all these aliases is midnight. This schedules the job to run anytime between 12:00 AM and 3:00 AM. So if you have a job that you want to run sometime overnight and you don't care when it gets run, use at midnight. As you configure scheduled jobs, consider the time zone your jobs will run in.
>
> **[3:10](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=190)** The time zone for a scheduled job is relative to the time on the server running Jenkins. Many servers use coordinated universal time or UTC. So if your local time and the server time are different, make sure you account for that in your schedule. You can also add a time zone specification in front of your schedule to be even more specific. Okay, let's go back to the example. Let's change the schedule to run every minute so we don't have to wait until tomorrow to see these results. And I'll add a time zone specifier for London at the top of the schedule. After you enter a schedule, take a moment to review the helpful message from Jenkins that tells you when the job would have run last and when it will run next. I should also mention that the inline help for scheduling is great and has plenty of examples. If you need more info, just select the question mark next to schedule. Now that our schedule is set, I'll scroll to the bottom of the page and select save and wait a while for the job to run a few times. Now that some time has passed, a couple builds are showing up, and if we look at one of the builds, the log shows, the build was started by a timer. This means Jenkins followed the schedule exactly as we described.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (12), [System Administration](../../Skills/Network%20and%20System%20Administration/System%20Administration.md) (1), [Slack](../../Skills/Software%20Development/Slack.md) (1)
> **CLI Commands:** make (2)
> **Ports:** :00 (2)
> **Analogies:** similar to (1), for example (1)
> **Env Vars:** utc (1)
> **Cross-References:** go back to (1)
> **Documentation:** specification (1)
> **Tools:** slack (1)

#### [Solution: Use a build tool and parameters](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=0)** - Okay. There's a lot going on in this challenge, and I really had fun with it. I hope you did too. This challenge required us to use tool configurations, set up parameters, and check out code from [GitHub](../../Skills/Software%20Development/GitHub.md) to build a calculator app written in [Java](../../Skills/Software%20Development/Java.md). Let's review. Before I created my [Jenkins](../../Skills/DevOps/Jenkins.md) job, I had to make sure two tools were in place. [Git](../../Skills/Software%20Development/Git.md) and Maven. I'm on a non-[Windows](../../Glossary/Service/Windows.md) system, so the default git configuration was already in place. If you solve this challenge on a Window system, you would need to install Git and set up the path here under Git installations, I also added a tool configuration for Maven. I selected the option for automatic installation and then selected the most recent version of Maven. I also used the version number in the name to make it easy to identify this specific version. With the tools in place, I created a freestyle job. I started the job configuration by adding a description and the required parameters. The operation parameter was a choice parameter for the calculator operations. Adding the choices in the order they were provided made add the default parameter. Then I added string parameters for number one and number two. These parameters were passed as variables along with the selected operation to test out the calculator.
>
> **[1:33](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=93)** I used 10 and 5 as the defaults for these parameters, and of course, I needed to get code from somewhere. In the source code management section, I selected the Git option and added the URL for the repo where the calculator application code was stored. I also had to update the branch specifier, since the default for this field was master and the repo uses main. Of course, I had to give this job something to do by adding build steps. I added the Invoke top-level Maven targets build step, and selected the version of Maven I configured in the tools. Then I added the Maven targets to clean the build environment, run some tests on the code, and then package the code into a jar file. The next build step tested the compiled jar by using the operation and number parameters to run a calculation. Of course, I'm using a non-Windows system for my solution, so I used an execute shell build step. If you solve this challenge with Jenkins running on Windows, you would use an execute Windows batch command build step. The script for the build step was available in the exercise files, so I just selected the correct one for my system, copied it from here, and pasted it into the build step. I also added two post build actions. One to save the jar file created by the job, and another to publish test reports. The exercise files included the path to the jar file. And for the test reports,
>
> **[3:08](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=188)** that path was provided also. Once the job was configured, I ran it to make sure everything worked as expected. This job is parameterized, so when I start a build, I can either use the defaults that were defined in the job configuration, or enter new values. I stuck with the defaults for my test run. Now I'm viewing the console output from the job, and I'll scroll all the way down to the bottom. At the end, there's a nice report that really wraps everything up. The build step prints the parameters, and running the jar file outputs the results of the operation. There's also a message confirming the artifacts were archived, and the test results were collected. Okay, I think that covers everything. This success message isn't specifically for the challenge, but let's assume that Jenkins is saying this challenge has indeed been completed successfully.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (5), [Windows](../../Glossary/Service/Windows.md) (4), [Jenkins](../../Skills/DevOps/Jenkins.md) (3), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Java](../../Skills/Software%20Development/Java.md) (1)
> **CLI Commands:** git (5), make (3)
> **Exercise Files:** exercise files (2), source code (1)
> **Prerequisites:** set up (2), install (1)
> **Env Vars:** url (1)
> **Tools:** github (1)
> **Speakers:** - okay (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Organize Jobs with Views and Folders

[↑ Back to Table of Contents](#table-of-contents)

#### [Views and folders](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/views-and-folders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/views-and-folders?u=76281980&t=0)** - I've got a scenario for you. You're working with a team of mobile app developers, and they're making apps for every team in a basketball little league. Every team wants their own app, and the developers have asked you to set up jobs on a [Jenkins](../../Skills/DevOps/Jenkins.md) server that will build, test, and deploy each app. As you start creating the jobs, you realize you'll soon end up with more than 100 jobs on your Jenkins server. With so many jobs to sort through. you and the developers might have trouble finding the jobs you need to work on. Fortunately, Jenkins has functionality to help keep things organized, Views and Folders. Let's see what Views and Folders are and how they can help. Views provide a way of associating jobs on the dashboard and displaying them together. You can think of a view as a type of filter that looks at all of the defined jobs and displays particular jobs based on the criteria that you define. Using a view, you limit the jobs that are displayed to only the ones that you want to see. Folders allow you to create structures that are very similar to file systems on a disc. Each folder can contain jobs, views, and even other folders. Folders have a completely separate namespace from other folders, allowing you to create hierarchies that have similar characteristics, like jobs with the same name, for example. This is a powerful feature for organizing jobs and other content in Jenkins.
>
> **[1:35](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/views-and-folders?u=76281980&t=95)** Now that you have a better idea of what Views and Folders are, let's take a look at how we create and work with them and how they can help us get more organized in the Jenkins interface.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (5)
> **Analogies:** similar to (1), for example (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - i (1)

#### [Create a view](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-view?u=76281980&t=0)** - [Instructor] I have several jobs in place to help demonstrate how to create views. If you're following along, you only need to create three jobs, one with build in the name, one with test, and one with deploy. With your jobs in place, we can create a view for each type of job. We'll start by selecting the plus sign next to the All tab. By the way, the All tab is actually a view. The All view shows all jobs and folders at the top level of the [Jenkins](../../Skills/DevOps/Jenkins.md) dashboard. Let's move on to creating a new view. First, we need to give the view a name. It's useful to give a view a name that describes what you'll see in the view. In this case, I'll name it Build because I want to use it to list all of the jobs that have build in their name. Then I'll select List View and then Create. On the Edit View page, I can give the view a description that will be displayed at the top of the view. How about "These are the build jobs"? Now I need to specify which jobs I want to appear in the view. In this list, under Jobs, I can pick the jobs that will appear in the view. Since we're making a view for build jobs, I can scroll down this list and click each job with build in the name. But that would get tedious. Also, if any new build jobs were added, I would have to edit this view, find the new job, and select it in this list. Fortunately, we can use a regular expression to specify the jobs that should appear in this view.
>
> **[1:36](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-view?u=76281980&t=96)** So instead of selecting each job, I'll select this option to use a regular expression for including jobs in the view. Again, we're looking for jobs with build anywhere in their name, so I'll use a pattern like this: .*BUILD.*. The first and last parts of this expression, the dot stars, match all characters, and of course, build will match the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) build. This will match all existing jobs and any new jobs we create with build in their name. Pretty slick, right? Only thing we have left to do now is to save this view. And there's our view right next to the All view. Indeed, the BUILD view gives us a list with just the jobs that have a build in their name. If you're following along, create views for test and deploy using the same approach. I'll do the same on my side and meet you in the next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Env Vars:** build (2)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Create a folder](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=0)** - [Instructor] Using folders is another option for solving our problem of organizing the jobs for each team in the league. Let's try this by creating a folder for each team. Creating a folder is a lot like creating a job. You even start the same way as you would by selecting New Item on the [Jenkins](../../Skills/DevOps/Jenkins.md) dashboard. And again, similarly, you have to give the item a name. Let's call this folder "Cyclones." For the item type, I'll select Folder, and if you take a look at it, the item description even says that a folder is useful for grouping things together. Perfect. On the folder configuration page, I'll give the folder a description. Something like, "These are the jobs for the Cyclones mobile app." And much like a job, we have other options to configure this folder. I'm going to leave everything at the default for now and just select Save. Looking at this folder, you might think, "Wow, this looks like Jenkins when it first gets installed." That's a good observation because each folder provides a namespace that's separate from other areas in Jenkins. Any jobs, views and other folders we create here are isolated. They can even have the same name as items in other folders. For this demo, I'll move the Cyclone build test and deploy jobs into the Cyclone's folder. Now that we have a folder, the pull-down menu next to each job has a move option. I'll select that.
>
> **[1:33](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=93)** I get a page with a prompt for the job's new location. In the list, we can see the top level Jenkins folder and our newly created Cyclones folder. I'll select that folder, and then select Move. On the page reload, we're on the page for the job. I'll navigate back up to the Cyclones folder. Indeed, the build job has been moved into the Cyclones folder. Unfortunately, jobs can only be moved one at a time in the interface. No, you can't drag and drop, but the goal here is to get organized, so give me a moment to put the existing jobs in the correct folders, and then we'll see how things look. I've created folders for each team now and moved the jobs into the appropriate folders. Now that the jobs have been moved, our dashboard is looking pretty organized, right? Each team has our own folder with all the jobs inside. You might be wondering though, "What about the views we created?" By default, views only have access to jobs that exist at the level where they were configured, and since we moved the jobs into their own folders, they're no longer accessible, but we can change that. Let's edit the build view. Under this configuration, I'll select the option to recurs in subfolders. Back on the view, things are looking pretty familiar. The build jobs are there, but now we can also see that each job is located in a folder. We can apply the same setting for the test and deploy views as well.
>
> **[3:06](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=186)** If you ask me, this is the perfect combination of using views and folders to get organized.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (4)
> **UI Navigation:** drag and drop (1), select the (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Search with the command palette](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/search-with-the-command-palette?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/search-with-the-command-palette?u=76281980&t=0)** - [Instructor] Along with organizing [Jenkins](../../Skills/DevOps/Jenkins.md) jobs using views and folders, there's another feature we can use for searching, the command palette. You can access the command palette by pressing the Command and K keys on a Mac or the Control and K keys on [Windows](../../Glossary/Service/Windows.md). This opens the dialogue where we can enter search terms. Objects we can search for, include folders, jobs, views, and users. Let's search for Cyclones items. With this search term, the palette displays the folder and the jobs that have Cyclones somewhere in their name. Now let's search for build. This time the palette shows all the jobs and views that have build somewhere in their name. Selecting anything display in the palette will take you directly to that item. We can get more specific by adding additional search terms that Jenkins can associate with items in the interface. Let's go to the very first run of the Cyclones-DEPLOY job. By typing Cyclones, followed by deploy, and the number 1, Jenkins knows exactly what we're looking for. As you get more familiar with Jenkins, be sure to experiment with the command palette as more search items are added to this capability.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (4), [Windows](../../Glossary/Service/Windows.md) (1)
> **Env Vars:** deploy (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Delete views and folders](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/delete-views-and-folders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/delete-views-and-folders?u=76281980&t=0)** - [Instructor] Before we move on, I need to emphasize what happens if you delete a folder or a view. I'm on the view showing all the jobs with build in their name. If I select delete view from this page, I get a warning asking if I really want to delete this item, I'll select yes to proceed. We no longer have access to the view, but the jobs that were visible inside the view are still there. If I drop into the cyclones folder, the cyclone's build job is still present. The leading folders though is a different story. When you delete a folder, all the contents of a folder are deleted along with it. That means any jobs, views, and folders that a folder contains will also get removed. Inside this folder, I'll select delete folder. Once again, I get a warning and I'll select yes, and sure enough, the folder is gone and all of the jobs that were inside that folder are gone as well. So before you delete a folder, keep in mind that you will also be deleting everything inside that folder. Consider this a public service announcement.

> [!info]- Semantic Content
>
> **Warnings:** warning (2), keep in mind (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Create folders and views](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-create-folders-and-views?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-create-folders-and-views?u=76281980&t=0)** - [Instructor] In this challenge, we're helping developers use folders and views to organize their [Jenkins](../../Skills/DevOps/Jenkins.md) jobs. To begin the solution, I've created four jobs to match the departments using Jenkins. Each department has a build job and a deploy job. I've also created views for each type of job, and as expected, the build view pulls in jobs with build in their name, and we get the same result for the deploy view. Let's look at this view configuration. For these views to be correct, I needed to select the option to recurse into sub-folders. That way, when we get to the folder portion of this solution, the views will still be correct. I also need to configure a regular expression for the content of the view. Since this is the deploy view, I use the regular expression .* followed by the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) deploy and then .*. Now I'll take a moment to create folders and organize the jobs by department. Okay, I have my folders. Now I'll move the jobs into their corresponding folders. I really wish there was a copy/paste operation for moving jobs, but after a lot of pointing and clicking, everything is in place. Now let's review this solution. At the top level, things are a bit more organized. Instead of seeing jobs all over the place, I have two folders, one for each department,
>
> **[1:34](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-create-folders-and-views?u=76281980&t=94)** and I have two views, one for build jobs and one for deploy jobs. The challenge also requested that I use the Command palette to access folders and jobs directly. I'm on a Mac system, so I'll be pressing command K. If you're on a [Windows](../../Glossary/Service/Windows.md) system, you'll be selecting control K and I'll search for Engineering and then select the Engineering folder. With these views and folders in place and then also using the Command palette, I'm going to go ahead and call it. This challenge has been solved successfully.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **UI Navigation:** select the (2)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Pipeline as code](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/pipeline-as-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/pipeline-as-code?u=76281980&t=0)** - [Instructor] So far, we've been manually configuring our jobs in the console, but [Jenkins](../../Skills/DevOps/Jenkins.md) also allows us to configure jobs as code. These types of jobs are called pipelines. A pipeline is written into a text file called a Jenkinsfile. Because the Jenkinsfile is a text file, it can be stored in a repo, along with other code or configuration used in a project. Pipelines can configure almost all aspects of a Jenkins job. In particular, pipelines contain build steps, post-build actions, and other settings that we might enter manually in a freestyle job configuration. In a pipeline definition, stages represent the sections of the pipeline. For example, a pipeline might have three stages called Test, Build, and Deploy. These stages describe and manage the flow of the code through the pipeline. Inside each stage are steps. Steps are the instructions Jenkins follows to complete each stage, like checking out code, running tests, compiling code, or archiving artifacts. By breaking the pipeline down into stages and steps, your automation becomes easier to read, maintain, and troubleshoot. To really get a feel for a pipeline, let's take a look at the pipeline version of our freestyle project we created earlier in the course. I'm viewing the Jenkinsfile for the [Java](../../Skills/Software%20Development/Java.md) calculator application that we worked with
>
> **[1:33](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/pipeline-as-code?u=76281980&t=93)** earlier in the course. This file sets up a project using the same configuration we used in the freestyle job, including parameters and steps that include the Maven commands to test and build the Java application. The pipeline also configures post-build actions to archive the jar file and test results. Let's see how this looks after we run the pipeline. I'm back in Jenkins now, viewing the homepage of the java-calculator-pipeline. At first glance, this page looks very similar to the results of the freestyle job we used previously. If I select Stages, we'll see some differences. The Stages view shows the output of past pipeline runs and the past or fail status for each stage. Selecting a specific stage gives us yet another view of the pipeline. Using this view of the pipeline, we can see a bit more detail for each stage, along with the output of the commands run in each step. As you get more familiar with Jenkins and pipelines, you'll see that there are many more benefits of using pipelines for projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (5), [Java](../../Skills/Software%20Development/Java.md) (3)
> **Cross-References:** earlier in (2)
> **Prerequisites:** configure (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### [Build agents and cloud runners](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-agents-and-cloud-runners?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-agents-and-cloud-runners?u=76281980&t=0)** - [Instructor] So far, we've been working with [Jenkins](../../Skills/DevOps/Jenkins.md) running all jobs on a single machine. This is perfect for learning Jenkins and experimenting, but in real-world projects is common to distribute jobs across multiple machines. That's where build agents come in. A build agent is simply another machine that Jenkins can delegate work to. This could be another server on your network, or even better, a cloud-based compute resource that spins up on demand. Using distributed agents lets Jenkins scale more efficiently. For example, you might run tests on one agent, while building and deploying on other agents, or you could configure agents with different tools or operating systems, depending on the types of applications being developed. Some teams use cloud runners. In this case, the build agents run on servers, hosted in [Amazon Web Services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md), [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md), or [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md). Plugins designed specifically for these clouds allow Jenkins to dynamically create agents as needed. After the jobs run, the agents are decommissioned to minimize the cost of operating in the cloud. While we didn't get hands-on with build agents in this course, I encourage you to explore how Jenkins can scale when paired with distributed build agents and cloud-based runners.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (6), [Amazon web services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) (1), [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Next steps with Jenkins](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/next-steps-with-jenkins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/next-steps-with-jenkins?u=76281980&t=0)** - We covered a lot in this course, and even though this is the end, it's really just the beginning. I encourage you to apply [Jenkins](../../Skills/DevOps/Jenkins.md) to real projects, stay curious, and learn as much as you can about this powerful automation platform. As you continue your automation journey, come back to the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning Library for more courses on Jenkins. It's been my pleasure to be your instructor for learning Jenkins, and I can't wait to see what you automate.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (3), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Cross-References:** we covered (1)
> **Speakers:** - we (1)


## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/learning-jenkins-3981454)

## Skills Covered

- Jenkins

## Path Context

### In [Continuous Integration-Continuous Delivery (CI-CD) with Jenkins](../../Paths/DevOps/Learning%20Paths/Continuous%20Integration-Continuous%20Delivery%20(CI-CD)%20with%20Jenkins.md)
**1 of 3** | [Jenkins Essential Training](Jenkins%20Essential%20Training.md) →

## Appears In

- [Continuous Integration-Continuous Delivery (CI-CD) with Jenkins](../../Paths/DevOps/Learning%20Paths/Continuous%20Integration-Continuous%20Delivery%20(CI-CD)%20with%20Jenkins.md)

## Related Courses

_Courses sharing skills:_

- [Running Jenkins on AWS- Deploying and Managing Jenkins on Cloud Infrastructure](Running%20Jenkins%20on%20AWS-%20Deploying%20and%20Managing%20Jenkins%20on%20Cloud%20Infrastructure.md) — Jenkins
- [Jenkins Essential Training](Jenkins%20Essential%20Training.md) — Jenkins

---

[↑ Back to top](#)