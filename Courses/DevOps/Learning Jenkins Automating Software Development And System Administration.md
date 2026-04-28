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
  - '[[Continuous Integration-Continuous Delivery (CI-CD) with Jenkins]]'
next_courses:
  - '[[Jenkins Essential Training]]'
path_nav: '[{"path":"Continuous Integration-Continuous Delivery (CI-CD) with Jenkins","position":1,"total":3,"prev":null,"next":"Jenkins Essential Training"}]'
path_count: 1
tags:
  - course
  - topic/devops
  - skill/jenkins
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Learning%20Jenkins%20Automating%20Software%20Development%20And%20System%20Administration.md)

![Learning Jenkins Automating Software Development And System Administration](https://media.licdn.com/dms/image/v2/D4E0DAQFZ3ThMkUkY5g/learning-public-crop_675_1200/B4EZfGx09oHYAc-/0/1751386640462?e=2147483647&amp;v=beta&amp;t=PhfL4qKtTQicCmDjl4I_8xnECrbq0dPOECxRgA7z0Q0)

# Learning Jenkins Automating Software Development And System Administration

> Do you need to automate tasks as part of your software development, system administration, or engineering work? This course introduces you to Jenkins, a highly configurable application used to automate software development and system administration tasks, and helps you build confidence in using it. Join instructor Michael Jenkins as he covers how to set up a personal installation of Jenkins and fa

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration) | Beginner | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (3 videos)
- **2. 1. Installing Jenkins** (6 videos)
- **3. 2. Jenkins Jobs** (9 videos)
- **4. 3. Job Workspaces, Artifacts, and Parameters** (9 videos)
- **5. 4. Organize Jobs with Views and Folders** (6 videos)
- **6. Conclusion** (3 videos)

### 1. Introduction

#### Kickstart your DevOps journey with Jenkins
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/kickstart-your-devops-journey-with-jenkins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/kickstart-your-devops-journey-with-jenkins?u=76281980&t=0)** - Automation is essential in modern software development.
>
> **[0:03](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/kickstart-your-devops-journey-with-jenkins?u=76281980&t=3)** And Jenkins is one of the best tools to help you get started.
>
> **[0:07](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/kickstart-your-devops-journey-with-jenkins?u=76281980&t=7)** Hi, I'm Michael Jenkins.
>
> **[0:09](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/kickstart-your-devops-journey-with-jenkins?u=76281980&t=9)** In this course, I'll introduce you to Jenkins, an application that's been in my toolbox for years.
>
> **[0:15](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/kickstart-your-devops-journey-with-jenkins?u=76281980&t=15)** We'll walk through installing Jenkins, creating your first jobs and organizing jobs with folders and views.
>
> **[0:22](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/kickstart-your-devops-journey-with-jenkins?u=76281980&t=22)** I'll also highlight other useful features you can use right away, like connecting Jenkins to Git repositories and archiving artifacts.
>
> **[0:30](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/kickstart-your-devops-journey-with-jenkins?u=76281980&t=30)** Then, we'll preview advanced topics for future exploration, like pipelines and build agents.
>
> **[0:37](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/kickstart-your-devops-journey-with-jenkins?u=76281980&t=37)** Ready to begin? Great.
>
> **[0:39](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/kickstart-your-devops-journey-with-jenkins?u=76281980&t=39)** Let's start learning Jenkins.

> [!info]- Semantic Content
>
> **CLI Commands:** git (1)
> **Code Keywords:** let (1)
> **Speakers:** - automation (1)

#### Why choose Jenkins?
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/why-choose-jenkins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/why-choose-jenkins?u=76281980&t=0)** - [Instructor] Along with Jenkins, there are plenty of amazing tools that we can use to automate software development.
>
> **[0:06](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/why-choose-jenkins?u=76281980&t=6)** So if there are other viable alternatives, you might be asking yourself, "Why should I choose Jenkins?"
>
> **[0:14](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/why-choose-jenkins?u=76281980&t=14)** As you learn to interact with Jenkins, you'll find the interface fairly intuitive and easy to navigate.
>
> **[0:21](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/why-choose-jenkins?u=76281980&t=21)** The interface also includes built-in documentation and examples to help you explore included features without having to open another browser tab.
>
> **[0:31](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/why-choose-jenkins?u=76281980&t=31)** Jenkins is also available for anyone to use for free.
>
> **[0:35](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/why-choose-jenkins?u=76281980&t=35)** Jenkins is distributed under the MIT license, which gives generous permissions on how the software can be used, modified, and shared with others.
>
> **[0:45](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/why-choose-jenkins?u=76281980&t=45)** This means that you can install and use it on your laptop just the same way that a Fortune 500 enterprise might use it on a server.
>
> **[0:53](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/why-choose-jenkins?u=76281980&t=53)** Neither of you will pay a dime in licensing or royalties.
>
> **[0:58](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/why-choose-jenkins?u=76281980&t=58)** Jenkins is also open source with all the code available on [github.com](https://github.com).
>
> **[1:04](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/why-choose-jenkins?u=76281980&t=64)** This means that anyone can submit enhancements or fixes to the code base for consideration in future releases.
>
> **[1:11](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/why-choose-jenkins?u=76281980&t=71)** This also leads to the next reason.
>
> **[1:15](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/why-choose-jenkins?u=76281980&t=75)** At its core, Jenkins is actually a framework that can be used to create functionality beyond what the original authors intended.
>
> **[1:23](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/why-choose-jenkins?u=76281980&t=83)** These features are added as plugins.
>
> **[1:27](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/why-choose-jenkins?u=76281980&t=87)** Many people turn to Jenkins because it offers an ecosystem of plugins that provide solutions to specific needs.
>
> **[1:34](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/why-choose-jenkins?u=76281980&t=94)** And if a plugin doesn't already exist, one can be developed to allow Jenkins to do exactly what needs to be done.
>
> **[1:41](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/why-choose-jenkins?u=76281980&t=101)** With the wide usage of Jenkins, a worldwide community has grown around the application.
>
> **[1:47](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/why-choose-jenkins?u=76281980&t=107)** This includes millions of users and developers, thousands of companies, and hundreds of meetups, conferences, and events that bring the community together.
>
> **[1:57](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/why-choose-jenkins?u=76281980&t=117)** If you're looking for someone to share your interests in Jenkins, you probably won't have to look too far.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (2)
> **Definitions:** means that (2)
> **CLI Commands:** find (1)
> **URLs:** [github.com](https://github.com) (1)
> **Env Vars:** mit (1)
> **Tools:** github (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Prerequisites and key terms
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/prerequisites-and-key-terms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/prerequisites-and-key-terms?u=76281980&t=0)** - [Instructor] Before starting this course, there are a few things you should be familiar with.
>
> **[0:05](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/prerequisites-and-key-terms?u=76281980&t=5)** Whether you're running Windows, macOS, or Linux, you should be able to access your operating system's terminal program or command line interface.
>
> **[0:15](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/prerequisites-and-key-terms?u=76281980&t=15)** At the least, you'll need to be able to run programs and simple commands.
>
> **[0:19](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/prerequisites-and-key-terms?u=76281980&t=19)** Jenkins is a web-based application, but from time to time, you'll need to access the command line interface, especially during installation.
>
> **[0:29](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/prerequisites-and-key-terms?u=76281980&t=29)** The majority of the instructions we give to Jenkins will be in the form of a script.
>
> **[0:33](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/prerequisites-and-key-terms?u=76281980&t=33)** I'll be using the Bash shell, which is readily available on Mac or Linux-based systems.
>
> **[0:39](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/prerequisites-and-key-terms?u=76281980&t=39)** If you're on Windows, you'll probably be using batch commands to interface with CMD or perhaps even PowerShell.
>
> **[0:47](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/prerequisites-and-key-terms?u=76281980&t=47)** I also want you to be familiar with a few key terms I'll be using throughout the course.
>
> **[0:53](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/prerequisites-and-key-terms?u=76281980&t=53)** We'll be referring to projects and jobs quite a bit in this course.
>
> **[0:58](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/prerequisites-and-key-terms?u=76281980&t=58)** A job is a collection of the tasks that you, as the user, want Jenkins to manage.
>
> **[1:03](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/prerequisites-and-key-terms?u=76281980&t=63)** Basically, a job is a list of instructions for Jenkins to complete.
>
> **[1:08](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/prerequisites-and-key-terms?u=76281980&t=68)** Just know that if you hear me say job or project, I'm referring to the same thing.
>
> **[1:14](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/prerequisites-and-key-terms?u=76281980&t=74)** A build is what happens when Jenkins runs through the instructions in a job, and you'll see this term used as a verb and a noun.
>
> **[1:22](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/prerequisites-and-key-terms?u=76281980&t=82)** You might hear me say, "Build a project," or, "Start a build."
>
> **[1:27](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/prerequisites-and-key-terms?u=76281980&t=87)** A build step is a specific command Jenkins will run to complete a task.
>
> **[1:33](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/prerequisites-and-key-terms?u=76281980&t=93)** For example, a build step could be checking out source code or running a script.
>
> **[1:38](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/prerequisites-and-key-terms?u=76281980&t=98)** Jobs can contain as many build steps as needed.
>
> **[1:42](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/prerequisites-and-key-terms?u=76281980&t=102)** A trigger is the event that starts a build.
>
> **[1:45](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/prerequisites-and-key-terms?u=76281980&t=105)** Builds can be started manually by clicking a button or a link in the Jenkins interface, or they might be started automatically based on a schedule.
>
> **[1:54](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/prerequisites-and-key-terms?u=76281980&t=114)** Basically, anything that gets a build going is a trigger.
>
> **[1:58](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/prerequisites-and-key-terms?u=76281980&t=118)** And finally, a plugin is an extension to the core Jenkins functionality.
>
> **[2:04](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/prerequisites-and-key-terms?u=76281980&t=124)** Plugins enhance Jenkins in a number of ways.
>
> **[2:07](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/prerequisites-and-key-terms?u=76281980&t=127)** For example, they can enrich the interface with custom dashboards, integrate with source control and collaboration systems, or add specialized build and deployment steps.
>
> **[2:18](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/prerequisites-and-key-terms?u=76281980&t=138)** Honestly, just about all the functionality we use in Jenkins is provided by a plugin.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (5), finally, (1)
> **Definitions:** is a  (5), is an  (1)
> **Tools:** command line (2), terminal (1), bash (1), powershell (1)
> **Analogies:** for example (2)
> **Prerequisites:** you'll need (2)
> **Code Identifiers:** macos (1)
> **Env Vars:** cmd (1)
> **Exercise Files:** source code (1)


### 2. 1. Installing Jenkins

#### System requirements
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/system-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/system-requirements?u=76281980&t=0)** - Jenkins is a web-based application that can be installed on a variety of systems, from laptops to servers.
>
> **[0:07](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/system-requirements?u=76281980&t=7)** For this course, we need just enough horsepower to get Jenkins up and running.
>
> **[0:12](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/system-requirements?u=76281980&t=12)** We'll be focusing on learning more than performance.
>
> **[0:15](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/system-requirements?u=76281980&t=15)** With that said, most modern laptops and servers and plenty of old ones too, have sufficient resources to run Jenkins efficiently.
>
> **[0:24](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/system-requirements?u=76281980&t=24)** For your hardware, you'll need to have at least 256 megabytes of RAM and one gigabyte of storage.
>
> **[0:31](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/system-requirements?u=76281980&t=31)** Jenkins requires Java to be installed on the system where it runs.
>
> **[0:36](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/system-requirements?u=76281980&t=36)** We'll be using Java 21, one of the most widely supported versions.
>
> **[0:40](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/system-requirements?u=76281980&t=40)** Either a Java runtime environment, or a Java development kit will work just fine.
>
> **[0:46](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/system-requirements?u=76281980&t=46)** If you're running Jenkins as a container, the requirements will change just a bit.
>
> **[0:51](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/system-requirements?u=76281980&t=51)** On the hardware side, you'll want to increase the RAM to at least four gigabytes and also increase storage space.
>
> **[0:58](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/system-requirements?u=76281980&t=58)** You'll need to install a container runtime.
>
> **[1:01](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/system-requirements?u=76281980&t=61)** The personal edition of Docker desktop will work fine, and it's free to download from the Docker website.
>
> **[1:07](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/system-requirements?u=76281980&t=67)** And that's all the software you need.
>
> **[1:09](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/system-requirements?u=76281980&t=69)** If you're running Jenkins as a container, you don't need to have Java installed on your local system.
>
> **[1:14](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/system-requirements?u=76281980&t=74)** The pre-configured Docker images will include Java, and any other runtime dependencies.
>
> **[1:20](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/system-requirements?u=76281980&t=80)** In the next few sections of the course, you'll find instructions to install Jenkins on systems running Windows, Ubuntu Linux, macOS, and Docker.
>
> **[1:28](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/system-requirements?u=76281980&t=88)** Pick the one that fits your situation the best.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (4), find (1)
> **Prerequisites:** you'll need (2), install (2)
> **Env Vars:** ram (2)
> **Code Identifiers:** macos (1)
> **Versions:** java 21 (1)
> **Cross-References:** in the next (1)
> **Tools:** docker desktop (1)
> **Definitions:** is a  (1)

#### Finish a Jenkins installation
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/finish-a-jenkins-installation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/finish-a-jenkins-installation?u=76281980&t=0)** - [Narrator] I've completed a Jenkins installation using Docker, and I've opened my browser to show local host Port 80 80.
>
> **[0:08](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/finish-a-jenkins-installation?u=76281980&t=8)** No matter what system you used for your installation, you'll need to get the initial admin password to unlock the software before you can continue.
>
> **[0:17](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/finish-a-jenkins-installation?u=76281980&t=17)** Refer to the installation instructions and exercise files to find the precise location for your system.
>
> **[0:24](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/finish-a-jenkins-installation?u=76281980&t=24)** I'm using a Docker system, so I've copied my initial administrator password from the indicated location.
>
> **[0:30](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/finish-a-jenkins-installation?u=76281980&t=30)** I'll paste the password here to proceed.
>
> **[0:34](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/finish-a-jenkins-installation?u=76281980&t=34)** On the next screen, we can install the suggested plugins.
>
> **[0:37](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/finish-a-jenkins-installation?u=76281980&t=37)** These are the plugins that are most commonly used by Jenkins.
>
> **[0:41](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/finish-a-jenkins-installation?u=76281980&t=41)** It might take a minute or two for the plugins to install.
>
> **[0:44](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/finish-a-jenkins-installation?u=76281980&t=44)** So let's wait for this to complete.
>
> **[0:47](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/finish-a-jenkins-installation?u=76281980&t=47)** Next, you'll be prompted to create your first admin user.
>
> **[0:52](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/finish-a-jenkins-installation?u=76281980&t=52)** At this point, you can create an account with a username and password.
>
> **[0:56](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/finish-a-jenkins-installation?u=76281980&t=56)** You'll also need to enter a name and an email address.
>
> **[1:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/finish-a-jenkins-installation?u=76281980&t=60)** In our sandbox environment, the email address doesn't have to be a real one, but it does have to be in a valid email format with a name and at sign and a domain.
>
> **[1:12](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/finish-a-jenkins-installation?u=76281980&t=72)** On the instance configuration screen, accept the detailed Jenkins URL and then click save and finish.
>
> **[1:19](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/finish-a-jenkins-installation?u=76281980&t=79)** And that's it.
>
> **[1:20](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/finish-a-jenkins-installation?u=76281980&t=80)** You're ready to start using Jenkins.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (2), find (1)
> **Prerequisites:** install (2), you'll need (1)
> **Code Keywords:** continue (1), let (1)
> **Ports:** port 80 (1)
> **Env Vars:** url (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [narrator] (1)

#### The Jenkins user interface
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-jenkins-user-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-jenkins-user-interface?u=76281980&t=0)** - [Instructor] I'm logged into a freshly installed Jenkins server, and I want to highlight some of the menus we'll be interacting with in this course.
>
> **[0:08](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-jenkins-user-interface?u=76281980&t=8)** The New Item link here on the left will be the link that you use the most.
>
> **[0:13](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-jenkins-user-interface?u=76281980&t=13)** Follow this link to create jobs or other resources.
>
> **[0:16](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-jenkins-user-interface?u=76281980&t=16)** Next up is the Manage Jenkins link.
>
> **[0:20](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-jenkins-user-interface?u=76281980&t=20)** This menu gives you access to various configurations for your Jenkins server.
>
> **[0:24](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-jenkins-user-interface?u=76281980&t=24)** There's a lot here, and I just want to highlight a couple of them.
>
> **[0:29](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-jenkins-user-interface?u=76281980&t=29)** On a new installation, you might see a notification telling you that building on a controller node can be a security issue.
>
> **[0:36](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-jenkins-user-interface?u=76281980&t=36)** You can safely dismiss this message for now, since we're just getting started on learning how to work with Jenkins.
>
> **[0:43](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-jenkins-user-interface?u=76281980&t=43)** Okay, with that out of the way, I want to focus on just two of the menus here, Tools and Plugins.
>
> **[0:51](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-jenkins-user-interface?u=76281980&t=51)** We'll be using the tool configuration to install external programs that Jenkins can use across all jobs, and we'll be using the manage plugins menu to update the plugins already installed or to install new ones that we might need as we go along.
>
> **[1:07](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-jenkins-user-interface?u=76281980&t=67)** And last but not least, are the Build Queue and Build Executor Status.
>
> **[1:12](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-jenkins-user-interface?u=76281980&t=72)** The Queue shows what jobs are waiting to be run, and the Build Executor Status shows the jobs that are running at the present moment.

> [!info]- Semantic Content
>
> **Prerequisites:** install (2), getting started (1)
> **CLI Commands:** node (1)
> **Speakers:** - [instructor] (1)

#### Manage plugins
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-plugins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-plugins?u=76281980&t=0)** - [Instructor] Jenkins provides a lot of functionality out of the box, but we can add functionality with plugins.
>
> **[0:07](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-plugins?u=76281980&t=7)** From the dashboard, select Manage Jenkins and then select Plugins.
>
> **[0:12](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-plugins?u=76281980&t=12)** Then select Available Plugins.
>
> **[0:15](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-plugins?u=76281980&t=15)** This list shows the dozens of plugins that are available to be installed.
>
> **[0:20](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-plugins?u=76281980&t=20)** You can sort the list by name or release date by selecting the headers at the top of the list.
>
> **[0:26](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-plugins?u=76281980&t=26)** This page also has a handy search feature to help find plugins quickly.
>
> **[0:31](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-plugins?u=76281980&t=31)** For example, there's a plugin that adds templates for emails sent from the Jenkins server.
>
> **[0:36](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-plugins?u=76281980&t=36)** Let's start by looking for plugins with the keyword email.
>
> **[0:39](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-plugins?u=76281980&t=39)** As I type, the list of available plugins is shortened to just those that have email in their name or somewhere in their description.
>
> **[0:47](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-plugins?u=76281980&t=47)** And I see one that I want, but I'll continue typing.
>
> **[0:51](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-plugins?u=76281980&t=51)** And the list is narrowed down to just one plugin.
>
> **[0:54](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-plugins?u=76281980&t=54)** If you click on a plugin name, a new tab is opened on the [Jenkins.io](https://Jenkins.io) website with more details on the plugin, like release information, dependencies, and any special instructions for installing or using the plugin.
>
> **[1:10](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-plugins?u=76281980&t=70)** Now let's proceed with the installation.
>
> **[1:13](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-plugins?u=76281980&t=73)** Next to the plugin I want to install, I'll select the checkbox and then select Install.
>
> **[1:19](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-plugins?u=76281980&t=79)** This shows a page with a plugin getting downloaded and installed.
>
> **[1:23](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-plugins?u=76281980&t=83)** While we're discussing installing plugins, let's also take a look at how to disable and uninstall plugins.
>
> **[1:30](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-plugins?u=76281980&t=90)** I'll go to the Installed Plugin page and search for LDAP.
>
> **[1:35](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-plugins?u=76281980&t=95)** Unchecking the box under the Enabled column prevents the plugin from being used, but keeps it around.
>
> **[1:41](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-plugins?u=76281980&t=101)** This is useful when you don't need the plugin right now, but might need it later.
>
> **[1:46](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-plugins?u=76281980&t=106)** But if you're really ready to remove a plugin, select the red X icon to completely remove it.
>
> **[1:52](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-plugins?u=76281980&t=112)** There's a warning that the plugin is about to be uninstalled and a prompt to click Yes to proceed.
>
> **[1:58](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-plugins?u=76281980&t=118)** Back on the Installed tab, searching for the LDAP plugin shows a message that the uninstall is pending.
>
> **[2:05](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-plugins?u=76281980&t=125)** To complete the uninstall, Jenkins needs to be restarted.
>
> **[2:08](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-plugins?u=76281980&t=128)** So the easiest way to do this is to add Safe Restart to the Jenkins URL.
>
> **[2:14](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-plugins?u=76281980&t=134)** And note the capital R in the word Restart.
>
> **[2:17](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-plugins?u=76281980&t=137)** Once the restart is complete, we can be sure that the plugin was removed.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), type, (1), continue (1)
> **UI Navigation:** select the (2), click on (1), checkbox (1), go to (1)
> **Env Vars:** ldap (2), url (1)
> **Prerequisites:** install (2)
> **CLI Commands:** find (1)
> **URLs:** [jenkins.io](https://jenkins.io) (1)
> **Analogies:** for example (1)
> **Warnings:** warning (1)

#### Manage tools
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-tools?u=76281980&t=0)** - [Instructor] Jenkins provides an interface for installing and configuring tools that can be used by any job that needs them.
>
> **[0:07](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-tools?u=76281980&t=7)** On the Jenkins dashboard, select Manage Jenkins and then select tools.
>
> **[0:13](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-tools?u=76281980&t=13)** On the tools page, you can manage several tools, including Maven, Java, Git and others.
>
> **[0:20](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-tools?u=76281980&t=20)** The process of configuring a tool is pretty much the same for each one, so let's use Maven to demonstrate.
>
> **[0:27](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-tools?u=76281980&t=27)** We'll be using Maven later on in the course, so please follow along.
>
> **[0:31](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-tools?u=76281980&t=31)** At the bottom of the page, under Maven installations, select Add Maven to expose the configuration interface.
>
> **[0:39](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-tools?u=76281980&t=39)** The first thing you need to do is give the config a name.
>
> **[0:43](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-tools?u=76281980&t=43)** Because you can install multiple versions, a good practice is to include the version number in the name.
>
> **[0:49](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-tools?u=76281980&t=49)** So I'll name this installation Maven-3.9.9.
>
> **[0:55](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-tools?u=76281980&t=55)** If there are newer versions of Maven available when you view this course, please use the latest version.
>
> **[1:01](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-tools?u=76281980&t=61)** Also, keep in mind that multiple versions can be installed at the same time.
>
> **[1:06](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-tools?u=76281980&t=66)** Under the tool name is a checkbox you can use to enable automatic installation.
>
> **[1:11](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-tools?u=76281980&t=71)** With this option selected, Jenkins will install the tool the first time it's used in a job.
>
> **[1:17](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-tools?u=76281980&t=77)** Before you browse away from this page, be sure to save the configuration by selecting Save or Apply.
>
> **[1:23](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-tools?u=76281980&t=83)** Now let's take a look at the Git section.
>
> **[1:26](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-tools?u=76281980&t=86)** If you're following along on a Windows system, you'll also need to configure Git.
>
> **[1:31](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-tools?u=76281980&t=91)** Please take a look at the exercise files for instructions and more information.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (2), let (2)
> **CLI Commands:** git (3)
> **Prerequisites:** install (2), configure (1)
> **Versions:** 3.9.9 (1)
> **UI Navigation:** checkbox (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Best Practices:** good practice (1)

#### Solution: Set up a Jenkins server on Windows
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=0)** - [Instructor] In this challenge, I'm installing Jenkins on a Windows server.
>
> **[0:09](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=9)** You can complete this challenge on other operating systems, but I'm using Windows to demonstrate the steps that are a bit different compared to installing Jenkins on Linux and macOS.
>
> **[0:20](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=20)** Let's start with a Java installation.
>
> **[0:23](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=23)** Jenkins needs to have a Java Runtime Environment installed, and at the time I'm recording this, the recommended version of Java for use with Jenkins is Java 21.
>
> **[0:33](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=33)** I've downloaded the installer, so I'll select that.
>
> **[0:37](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=37)** First we have to accept the license agreement and select Next.
>
> **[0:41](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=41)** We're going to install this for all users on this machine, so I'll keep that option selected and select Next.
>
> **[0:47](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=47)** On this screen, we should set or override the Java home variable, and then select Next.
>
> **[0:53](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=53)** And now finally, we can select Install.
>
> **[0:56](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=56)** All right, Java is installed, now let's install Git.
>
> **[1:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=60)** We need to install Git so Jenkins can connect to code repositories like GitHub, GitLab and Bitbucket.
>
> **[1:08](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=68)** I've downloaded the installer and I'll get started by selecting it.
>
> **[1:13](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=73)** There are a lot of prompts in this installer, but for this installation, I can accept all the defaults and just select Next until the installation starts.
>
> **[1:25](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=85)** Okay, the Git installation has completed.
>
> **[1:28](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=88)** I'll select Finish here and move on to Jenkins.
>
> **[1:33](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=93)** I've downloaded the LTS version of Jenkins for Windows from the Jenkins Download page, and I'll open the installer to start the installation.
>
> **[1:43](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=103)** We'll start by selecting next and keep most of the defaults until we get to the service logon credentials.
>
> **[1:51](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=111)** Ideally, we would run Jenkins on a Windows system as a local or domain user, but because we're running in a sandbox environment, running with a local system is fine for this setup so I'll select that and then select Next.
>
> **[2:08](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=128)** We're also prompted to select the port that Jenkins will use for its web application, and we have to test the port that we select before we can move on, so I'll select Test Port.
>
> **[2:21](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=141)** And hey, my port test passes, so I'll select Next.
>
> **[2:24](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=144)** If you run into any problems with your port test on your system, then please check to see what processes are running that are using port 8080, stop them and reconfigure them or choose another port for Jenkins to use, then select Next.
>
> **[2:41](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=161)** Now we need to select the Java that Jenkins will use as it operates.
>
> **[2:46](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=166)** I'll select Change, and then browse to the location where I installed the Microsoft JDK 21.
>
> **[2:54](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=174)** Under Program Files, I'll select Microsoft jdk-21.0 hotspot.
>
> **[3:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=180)** Then I'll select OK and then I'll select Next.
>
> **[3:04](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=184)** I can skip the Custom Setup screen and then select Install.
>
> **[3:10](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=190)** Now that the installation is complete, I'll select Finish.
>
> **[3:14](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=194)** Okay, let's go to the Jenkins interface in a new tab, and I'll enter localhost:8080.
>
> **[3:23](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=203)** Okay, on this screen, we get the unlock option to actually get into the Jenkins application.
>
> **[3:30](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=210)** The first thing that we have to do is get the initial admin password, so I'll select this path and copy it.
>
> **[3:38](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=218)** Now let's open Notepad.
>
> **[3:40](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=220)** From the Start menu, I'll open Notepad, and then I'll select File, Open, and paste in the file name to the initial admin password.
>
> **[3:54](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=234)** This opens the file where I can copy this value, and now I'll go back to the Jenkins interface, and here I will paste in the initial admin password and select Continue.
>
> **[4:06](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=246)** On the next screen, we can install the suggested plugins.
>
> **[4:10](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=250)** These are the plugins that are most commonly used by Jenkins.
>
> **[4:13](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=253)** It might take a minute or two for the plugins to install, so let's wait for this to complete.
>
> **[4:20](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=260)** Now I'll create my admin user account.
>
> **[4:23](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=263)** Make a note that the email address doesn't have to be a real email address for the sandbox environment, but it does have to have the form of a valid email address, which means it has to have a name, an @ sign and a domain.
>
> **[4:39](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=279)** On the Instance Configuration screen, I'll accept the detailed Jenkins URL, and then select Save and Finish.
>
> **[4:46](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-set-up-a-jenkins-server-on-windows?u=76281980&t=286)** Okay, this message to start using Jenkins is the confirmation I need that this challenge has been successfully completed.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), interface (2), this, (1), override (1), finally, (1)
> **Prerequisites:** install (7), setup (2)
> **CLI Commands:** git (3), make (1)
> **UI Navigation:** select the (2), open the (1), go to (1)
> **Env Vars:** lts (1), jdk (1), url (1)
> **Tools:** github (1), gitlab (1), bitbucket (1)
> **Ports:** port 8080 (1), :8080 (1)
> **Versions:** java 21 (1), 21.0 (1)


### 3. 2. Jenkins Jobs

#### Your first jenkins job
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/your-first-jenkins-job?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/your-first-jenkins-job?u=76281980&t=0)** - Just like learning any new application or programming language, one of the first things you do is create a Hello World project.
>
> **[0:07](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/your-first-jenkins-job?u=76281980&t=7)** The purpose of a Hello World is to make sure everything is running as expected and to get an introduction to basic configurations and settings.
>
> **[0:16](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/your-first-jenkins-job?u=76281980&t=16)** So let's do that now with a "Hello, Jenkins" freestyle job.
>
> **[0:21](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/your-first-jenkins-job?u=76281980&t=21)** If you're working with a new Jenkins installation, your homepage probably looks like this.
>
> **[0:26](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/your-first-jenkins-job?u=76281980&t=26)** No jobs have been created, and you see a nice welcome message inviting you to get started.
>
> **[0:32](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/your-first-jenkins-job?u=76281980&t=32)** Start by selecting New Item.
>
> **[0:35](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/your-first-jenkins-job?u=76281980&t=35)** In the name field, enter Hello-Jenkins.
>
> **[0:39](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/your-first-jenkins-job?u=76281980&t=39)** You'll notice I use the dash in the name for the project.
>
> **[0:43](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/your-first-jenkins-job?u=76281980&t=43)** You could use spaces, but it's a good practice to keep spaces out of your job names.
>
> **[0:49](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/your-first-jenkins-job?u=76281980&t=49)** Job names with spaces make things difficult when working with a job in other ways, like from the command line or from an API.
>
> **[0:58](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/your-first-jenkins-job?u=76281980&t=58)** Don't get me wrong, it's all right if you use spaces, but you have been warned.
>
> **[1:03](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/your-first-jenkins-job?u=76281980&t=63)** Now select Freestyle Project and then select OK.
>
> **[1:07](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/your-first-jenkins-job?u=76281980&t=67)** This leads to the job configuration page.
>
> **[1:10](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/your-first-jenkins-job?u=76281980&t=70)** This is where you define the way your job will run and anything else that needs to be specified along with the configuration.
>
> **[1:17](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/your-first-jenkins-job?u=76281980&t=77)** Scroll down to the Build section.
>
> **[1:20](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/your-first-jenkins-job?u=76281980&t=80)** Now, select Add Build Step.
>
> **[1:22](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/your-first-jenkins-job?u=76281980&t=82)** If you're on a Windows system, select Execute Windows Batch command.
>
> **[1:27](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/your-first-jenkins-job?u=76281980&t=87)** If you're on a Mac, Linux, or Docker system, select Execute Shell.
>
> **[1:33](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/your-first-jenkins-job?u=76281980&t=93)** I'm using a Docker system, so I'll be using the Execute Shell option.
>
> **[1:37](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/your-first-jenkins-job?u=76281980&t=97)** In the form, enter echo "Hello, Jenkins".
>
> **[1:42](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/your-first-jenkins-job?u=76281980&t=102)** The echo command will be the same if you're on Windows or one of the other systems.
>
> **[1:48](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/your-first-jenkins-job?u=76281980&t=108)** At the bottom of the page, select apply.
>
> **[1:51](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/your-first-jenkins-job?u=76281980&t=111)** If you select apply, you'll get a prompt letting you know that the job has been saved, but the configuration page stays open.
>
> **[1:59](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/your-first-jenkins-job?u=76281980&t=119)** This is useful if you want to save your progress but keep working on the same configuration.
>
> **[2:05](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/your-first-jenkins-job?u=76281980&t=125)** Now select Save.
>
> **[2:06](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/your-first-jenkins-job?u=76281980&t=126)** This saves the job and returns to the job homepage.
>
> **[2:11](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/your-first-jenkins-job?u=76281980&t=131)** Save is useful when you're done editing and ready to move on.
>
> **[2:15](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/your-first-jenkins-job?u=76281980&t=135)** To run the job, select Build Now.
>
> **[2:17](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/your-first-jenkins-job?u=76281980&t=137)** You'll see a message saying that a build was scheduled, and after a few seconds, you should see something under Build History: a green check mark, a number one, and a timestamp.
>
> **[2:28](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/your-first-jenkins-job?u=76281980&t=148)** Select the check mark.
>
> **[2:30](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/your-first-jenkins-job?u=76281980&t=150)** This opens the console output for the build.
>
> **[2:33](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/your-first-jenkins-job?u=76281980&t=153)** In the output, you can see the echo command that you configured in your job along with the "Hello, Jenkins" message.
>
> **[2:40](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/your-first-jenkins-job?u=76281980&t=160)** You can also see that Jenkins indicated this build to be a success.
>
> **[2:45](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/your-first-jenkins-job?u=76281980&t=165)** Great!
>
> **[2:46](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/your-first-jenkins-job?u=76281980&t=166)** You've just configured and run your first Jenkins job.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), docker (2)
> **Code Keywords:** let (1), this. (1)
> **UI Navigation:** scroll down (1), select the (1)
> **Env Vars:** api (1)
> **Tools:** command line (1)
> **Analogies:** just like (1)
> **Best Practices:** good practice (1)
> **Speakers:** - just (1)

#### Job types
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/job-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/job-types?u=76281980&t=0)** - [Instructor] Let's review the different types of jobs that can be created from the new-item screen.
>
> **[0:05](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/job-types?u=76281980&t=5)** The freestyle job is the most commonly used job type.
>
> **[0:10](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/job-types?u=76281980&t=10)** As the name implies, freestyle jobs provide a wide range of options that let you tailor how Jenkins runs your job.
>
> **[0:18](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/job-types?u=76281980&t=18)** Pipeline jobs are perfect for projects that outgrow freestyle jobs.
>
> **[0:23](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/job-types?u=76281980&t=23)** Pipelines can chain together multiple stages of a build process and capture the entire project configuration as code.
>
> **[0:32](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/job-types?u=76281980&t=32)** The multi-configuration project is useful when you might have multiple jobs that do the same thing but for different combinations of parameters.
>
> **[0:42](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/job-types?u=76281980&t=42)** Instead of creating many jobs for each set of parameters, you can use the multi-configuration project to create one job that applies the parameters for you.
>
> **[0:52](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/job-types?u=76281980&t=52)** The multibranch pipeline and organization folder job types are especially suited for working with code repositories.
>
> **[1:01](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/job-types?u=76281980&t=61)** Organization jobs are configured to scan repositories for specific types of files that Jenkins can use to configure jobs automatically.
>
> **[1:10](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/job-types?u=76281980&t=70)** In a similar fashion, the multibranch pipeline job can be used to configure jobs for different branches belonging to the same repo.
>
> **[1:19](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/job-types?u=76281980&t=79)** And I didn't skip it, but the last item on this page, folder, isn't really a job.
>
> **[1:25](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/job-types?u=76281980&t=85)** Jenkins uses folders to group things together.
>
> **[1:28](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/job-types?u=76281980&t=88)** We'll talk more about folders in an upcoming lesson.
>
> **[1:32](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/job-types?u=76281980&t=92)** For the remainder of the course, we'll be focusing on the freestyle job, the most commonly used job type.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), type. (2)
> **Prerequisites:** configure (2)
> **Speakers:** - [instructor] (1)

#### Build description and source code management
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-description-and-source-code-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-description-and-source-code-management?u=76281980&t=0)** - [Instructor] Let's take a closer look at the configuration page for the Hello Jenkins job.
>
> **[0:05](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-description-and-source-code-management?u=76281980&t=5)** From the dashboard, I'll select the job and then select Configure.
>
> **[0:10](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-description-and-source-code-management?u=76281980&t=10)** First of all, notice the tabs on the left side of the page.
>
> **[0:13](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-description-and-source-code-management?u=76281980&t=13)** These outline the sections of the configuration.
>
> **[0:16](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-description-and-source-code-management?u=76281980&t=16)** In the general section, one of the most important fields is the description field.
>
> **[0:21](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-description-and-source-code-management?u=76281980&t=21)** Use this field to add freeform text describing the job and what it does.
>
> **[0:27](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-description-and-source-code-management?u=76281980&t=27)** A good name for the job goes a long way, but the description can be used to provide any details someone running the job might need to know.
>
> **[0:35](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-description-and-source-code-management?u=76281980&t=35)** The discard old builds option is also very important.
>
> **[0:39](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-description-and-source-code-management?u=76281980&t=39)** Jenkins keeps a record of each build, along with any files generated by the build, including log files and artifacts.
>
> **[0:48](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-description-and-source-code-management?u=76281980&t=48)** This is great if you want to review the history of a job, but old builds also take up disc space.
>
> **[0:55](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-description-and-source-code-management?u=76281980&t=55)** You can manage this by only keeping builds for a certain period of time, or by only keeping a maximum number of builds.
>
> **[1:02](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-description-and-source-code-management?u=76281980&t=62)** These options can be used together to make sure your Jenkins server has plenty of space to work with.
>
> **[1:08](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-description-and-source-code-management?u=76281980&t=68)** And if you click the advanced button, you can also manage the number of days artifacts are kept.
>
> **[1:14](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-description-and-source-code-management?u=76281980&t=74)** We'll cover some of the other general options in upcoming lessons.
>
> **[1:18](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-description-and-source-code-management?u=76281980&t=78)** For now, let's move on to the source code management section.
>
> **[1:22](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-description-and-source-code-management?u=76281980&t=82)** The source code management options control the way Jenkins interacts with any code you have stored in a Git repository.
>
> **[1:29](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-description-and-source-code-management?u=76281980&t=89)** Selecting the Git option opens a dialogue where you can enter the repository URL.
>
> **[1:34](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-description-and-source-code-management?u=76281980&t=94)** Add any credentials needed to access the repo and specify which branches to check out.
>
> **[1:40](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-description-and-source-code-management?u=76281980&t=100)** This is another powerful feature of Jenkins because it allows you to pull code from outside of your job configuration into the workspace where the job runs.
>
> **[1:50](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-description-and-source-code-management?u=76281980&t=110)** This is key for using Jenkins as an integration, test and deployment tool for code stored in repositories like GitHub, GitLab, and Bitbucket.

> [!info]- Semantic Content
>
> **CLI Commands:** git (2), make (1)
> **Tools:** github (1), gitlab (1), bitbucket (1)
> **Code Keywords:** let (2)
> **Exercise Files:** source code (2)
> **Env Vars:** url (1)
> **UI Navigation:** select the (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Build triggers
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-triggers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-triggers?u=76281980&t=0)** - [Instructor] Let's continue our overview of the job configuration page with the next section, build triggers.
>
> **[0:06](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-triggers?u=76281980&t=6)** A trigger is any action that starts a job.
>
> **[0:10](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-triggers?u=76281980&t=10)** Jenkins gives you plenty of ways to customize how your job can be started.
>
> **[0:14](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-triggers?u=76281980&t=14)** The trigger builds remotely option lets processes outside of Jenkins start jobs by accessing a URL through the Jenkins web API.
>
> **[0:24](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-triggers?u=76281980&t=24)** The option to build after other projects are built lets Jenkins start a job immediately after other jobs are finished.
>
> **[0:32](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-triggers?u=76281980&t=32)** If you have a series of jobs that depend on each other, for example, you can have one job wait for the others to finish before starting.
>
> **[0:40](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-triggers?u=76281980&t=40)** The option to build periodically is another powerful feature in Jenkins that lets you trigger jobs on a schedule.
>
> **[0:48](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-triggers?u=76281980&t=48)** This is useful for jobs that need to be run on a schedule like hourly, daily, weekly, and so on.
>
> **[0:55](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-triggers?u=76281980&t=55)** The input field where you specify the schedule uses the cron format, giving you precise control over when the job should run.
>
> **[1:04](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-triggers?u=76281980&t=64)** We'll go into greater detail on scheduling jobs in an upcoming lesson.
>
> **[1:08](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-triggers?u=76281980&t=68)** The GitHub trigger option is very useful for projects that are tied to GitHub.
>
> **[1:13](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-triggers?u=76281980&t=73)** This option allows Jenkins to start jobs based on activity in GitHub, like releases, tags, or other types of commits.
>
> **[1:22](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-triggers?u=76281980&t=82)** Using this feature, you can set up a tight relationship between Jenkins and GitHub called continuous integration.
>
> **[1:29](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-triggers?u=76281980&t=89)** If something happens in GitHub, Jenkins gets notified by a webhook and then takes some action.
>
> **[1:36](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-triggers?u=76281980&t=96)** The benefit of this setup is that Jenkins can be used to orchestrate complex jobs and projects, all from checking in a file or making a change in GitHub.
>
> **[1:46](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-triggers?u=76281980&t=106)** The last option in this section, pull SCM, can also be used to start your job based on activity in a repo.
>
> **[1:54](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-triggers?u=76281980&t=114)** However, pulling is not as efficient as triggering from a GitHub event, and I would even advise against using it.
>
> **[2:02](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-triggers?u=76281980&t=122)** With this option, Jenkins checks the repo on a schedule and looks for changes.
>
> **[2:07](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-triggers?u=76281980&t=127)** Because Jenkins has to keep checking for changes, the system running Jenkins will be using up resources unnecessarily.
>
> **[2:14](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-triggers?u=76281980&t=134)** While this option does have its place, triggering from a webhook is usually the better option.

> [!info]- Semantic Content
>
> **Tools:** github (7)
> **Env Vars:** url (1), api (1), scm (1)
> **Code Keywords:** let (1), continue (1)
> **Prerequisites:** set up (1), setup (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### The build environment
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-build-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-build-environment?u=76281980&t=0)** - [Instructor] Now, let's move on to the build environment section.
>
> **[0:04](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-build-environment?u=76281980&t=4)** The delete workspace option is useful for cleaning things up a bit before the job gets started.
>
> **[0:09](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-build-environment?u=76281980&t=9)** Each time a job runs, it uses a specific directory on the Jenkins system called the Workspace.
>
> **[0:16](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-build-environment?u=76281980&t=16)** By default, any files created by a job and saved to the workspace will stay there between job runs.
>
> **[0:24](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-build-environment?u=76281980&t=24)** With this option, Jenkins will remove the workspace and recreate it for each new run.
>
> **[0:30](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-build-environment?u=76281980&t=30)** Using secret texts or files is useful for injecting secrets into your jobs at runtime.
>
> **[0:36](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-build-environment?u=76281980&t=36)** Using this option, you can specify usernames, passwords, certificates, and other sensitive information, and the variables or files that will hold the secrets when the job gets run.
>
> **[0:48](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-build-environment?u=76281980&t=48)** The secrets are stored securely outside of the jobs as Jenkins' credentials.
>
> **[0:54](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-build-environment?u=76281980&t=54)** The terminate the build if it's stuck option is useful to keep jobs from running on and on if something keeps the job from stopping normally, for example, a job could be waiting for some external process.
>
> **[1:07](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-build-environment?u=76281980&t=67)** If that process never responds, the job could end up waiting forever.
>
> **[1:13](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-build-environment?u=76281980&t=73)** To keep that from happening, you can specify the absolute amount of time a job has to run or even a deadline that the job has to finish by.
>
> **[1:22](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-build-environment?u=76281980&t=82)** The default action to take if a job runs too long is to abort.
>
> **[1:26](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-build-environment?u=76281980&t=86)** But you can also choose to fail the build or update the build description, and that leads to the build steps section.
>
> **[1:34](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-build-environment?u=76281980&t=94)** Excellent.
>
> **[1:35](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-build-environment?u=76281980&t=95)** This is the section where you tell your Jenkins job to do something very specific as it relates to your project.
>
> **[1:42](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-build-environment?u=76281980&t=102)** Each action that Jenkins takes is called a build step.
>
> **[1:46](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-build-environment?u=76281980&t=106)** Selecting the add build step button displays the different types of steps that you can apply.
>
> **[1:52](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-build-environment?u=76281980&t=112)** If your Jenkins is running on Windows, you will likely select execute Windows batch command.
>
> **[1:58](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-build-environment?u=76281980&t=118)** And if your Jenkins is running on other operating systems, you'll likely use the execute shell step.
>
> **[2:04](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-build-environment?u=76281980&t=124)** In either case, these steps provide a way to enter commands or scripts that Jenkins can run.
>
> **[2:11](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-build-environment?u=76281980&t=131)** There are also build steps for Ant, Cradle and Maven, if you're working with Java-based projects.
>
> **[2:17](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-build-environment?u=76281980&t=137)** One other thing to note is that you can have multiple build steps.
>
> **[2:22](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-build-environment?u=76281980&t=142)** So if you want to have commands run in separate steps before a project gets kicked off, you can do that easily by adding additional build steps.
>
> **[2:30](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-build-environment?u=76281980&t=150)** You can also reorder build steps by clicking the hamburger menu on the top left of a step, and then just dragging the step to the location where you want it to be.
>
> **[2:40](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-build-environment?u=76281980&t=160)** And last, but not least, is the post build action section.
>
> **[2:46](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-build-environment?u=76281980&t=166)** After the build is run, post-build actions give you additional steps to take before the entire build wraps up.
>
> **[2:54](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-build-environment?u=76281980&t=174)** You might want to archive something from this build, trigger another job, or even send an email to someone to let them know that the build has been completed.
>
> **[3:03](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-build-environment?u=76281980&t=183)** And just like the steps in the build section, you can have multiple post-build actions and they can be rearranged in the order you specify.
>
> **[3:11](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-build-environment?u=76281980&t=191)** The very last thing I want to point out in the job configuration interface are these question mark icons beside some of the items on the page.
>
> **[3:19](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-build-environment?u=76281980&t=199)** These are links to built-in help or documentation.
>
> **[3:23](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/the-build-environment?u=76281980&t=203)** If there are any options or features that you want to know more about, you'll find that help is just a click away.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), delete (1), default, (1), case, (1), interface (1)
> **Analogies:** for example (1), just like (1)
> **CLI Commands:** find (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Run and monitor jobs
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs?u=76281980&t=0)** - [Instructor] Let's see how we can monitor jobs in the Jenkins interface.
>
> **[0:04](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs?u=76281980&t=4)** To help with the discussion, I'm starting with a freestyle job named long-running-job.
>
> **[0:10](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs?u=76281980&t=10)** The description gives a little more detail, letting us know that this job runs for 30 seconds, and if I scroll down to the build section, there's one build step with a Bash script.
>
> **[0:21](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs?u=76281980&t=21)** The script counts from one to 30, sleeping for one second between each count.
>
> **[0:27](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs?u=76281980&t=27)** If you're following along on Mac, Linux, or a Docker, you can use this same script.
>
> **[0:33](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs?u=76281980&t=33)** If you're following along with Jenkins on a Windows system, you'll want to use the execute windows batch command build step.
>
> **[0:41](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs?u=76281980&t=41)** There's also a script just for you in the exercise files that will let you do the same 30-second count.
>
> **[0:48](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs?u=76281980&t=48)** In either case, this script will run for about 30 seconds and produce some output so we can follow the job's progress.
>
> **[0:55](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs?u=76281980&t=55)** Let's run this job.
>
> **[0:58](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs?u=76281980&t=58)** I've started the job, and under Builds, there's a slowly spinning blue circle and a number.
>
> **[1:04](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs?u=76281980&t=64)** The Blue circle lets you know that the job has not been run before, so there's no status to report on the history of the job.
>
> **[1:12](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs?u=76281980&t=72)** The number is the build ID.
>
> **[1:14](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs?u=76281980&t=74)** The Build ID is a unique number that lets Jenkins organize the builds associated with a job.
>
> **[1:21](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs?u=76281980&t=81)** Each build gets a unique ID.
>
> **[1:24](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs?u=76281980&t=84)** Once the job is finished, the circle turns into a green check mark, letting you know the job finished successfully.
>
> **[1:32](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs?u=76281980&t=92)** Let's run the job one more time and observe what happens next.
>
> **[1:37](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs?u=76281980&t=97)** This time, the circle is spinning, but it has a green check mark inside it.
>
> **[1:42](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs?u=76281980&t=102)** This means the previous job finished successfully.
>
> **[1:47](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs?u=76281980&t=107)** Once the job finishes, we see another green check mark signaling another successful build.
>
> **[1:53](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs?u=76281980&t=113)** In the next lesson, we'll take a look at the output of the job in the console log.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), interface (1), case, (1)
> **CLI Commands:** docker (1)
> **Cross-References:** in the next (1)
> **Tools:** bash (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Run and monitor jobs using console output
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs-using-console-output?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs-using-console-output?u=76281980&t=0)** - [Instructor] We're working with a job that runs for about 30 seconds and prints some output to the screen.
>
> **[0:06](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs-using-console-output?u=76281980&t=6)** Let's take a look at that output in the console log, you can select the pull down next to a build number and select console output, or you can select the check mark.
>
> **[0:15](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs-using-console-output?u=76281980&t=15)** Next to the build you want to view on the console output page, you'll see details related to who ran the build, where it was run, and any output the build produced, which in our case is the count from one to 30.
>
> **[0:30](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs-using-console-output?u=76281980&t=30)** Seeing the build status and checking the output is great, but what if you want to see the output in real time as the build is running.
>
> **[0:38](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs-using-console-output?u=76281980&t=38)** Let's go back to the project page and select build now.
>
> **[0:41](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs-using-console-output?u=76281980&t=41)** One more time.
>
> **[0:43](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs-using-console-output?u=76281980&t=43)** Once the build gets started, select the check mark next to the running job to open the console.
>
> **[0:48](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs-using-console-output?u=76281980&t=48)** You'll see that Jenkins is updating the console output as the job runs the page, even scrolls along automatically so you can follow the most recent output without having to scroll down.
>
> **[1:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs-using-console-output?u=76281980&t=60)** This is helpful if you want to follow the output from a build in real time.
>
> **[1:04](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs-using-console-output?u=76281980&t=64)** Okay, you've seen jobs that have finished successfully and followed along with the output.
>
> **[1:09](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs-using-console-output?u=76281980&t=69)** What happens if a job doesn't finish successfully?
>
> **[1:13](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs-using-console-output?u=76281980&t=73)** To figure that one out, we're going to need to introduce an error in our job.
>
> **[1:18](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs-using-console-output?u=76281980&t=78)** Let's configure this job.
>
> **[1:20](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs-using-console-output?u=76281980&t=80)** Back on the project page select configure to edit the job again, and then select build steps.
>
> **[1:27](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs-using-console-output?u=76281980&t=87)** By default, Jenkins will consider the build a failure if any command in a build step finishes with an exit value other than zero.
>
> **[1:36](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs-using-console-output?u=76281980&t=96)** That means we can introduce a failure by explicitly entering a command that has an exit value of one.
>
> **[1:43](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs-using-console-output?u=76281980&t=103)** So inside the execute shell step, I'll enter exit one at the very end.
>
> **[1:48](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs-using-console-output?u=76281980&t=108)** I'm using Jenkins from a docker image.
>
> **[1:50](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs-using-console-output?u=76281980&t=110)** If you're on a window system and using a batch command, you'll enter exit slash B one for a batch shell and exit one for power shell, refer to the exercise files for more details on how to set that up.
>
> **[2:06](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs-using-console-output?u=76281980&t=126)** Okay, let's save and run this job.
>
> **[2:08](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs-using-console-output?u=76281980&t=128)** Like before the build gets scheduled and a circle is spinning around a green check mark, let's view the console output.
>
> **[2:19](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs-using-console-output?u=76281980&t=139)** This time the job finishes with a failure status.
>
> **[2:22](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs-using-console-output?u=76281980&t=142)** There are other visual indicators reporting the failure like the red X at the top of the console output, and instead of a green check mark, the most recent build is replaced with a red x.
>
> **[2:36](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs-using-console-output?u=76281980&t=156)** In the next lesson, we'll see other ways we can monitor builds in Jenkins.
>
> **[2:41](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs-using-console-output?u=76281980&t=161)** But before we go on, let me fix this job by removing that error I inserted.
>
> **[2:45](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/run-and-monitor-jobs-using-console-output?u=76281980&t=165)** If you're following along, please do the same and meet me in the next lesson.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), default, (1)
> **UI Navigation:** select the (3), open the (1), scroll down (1)
> **Cross-References:** in the next (2), go back to (1)
> **Prerequisites:** configure (2)
> **CLI Commands:** docker (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Monitor build trends
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/monitor-build-trends?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/monitor-build-trends?u=76281980&t=0)** - [Instructor] Let's take a look at a monitoring feature called the Build Trend.
>
> **[0:04](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/monitor-build-trends?u=76281980&t=4)** Next to the list of builds for the long-running-job, I'll select the expand icon.
>
> **[0:10](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/monitor-build-trends?u=76281980&t=10)** This opens a chart, displaying a timeline and status for each build.
>
> **[0:15](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/monitor-build-trends?u=76281980&t=15)** Below the timeline is a report showing how long each build took to run and which builds were successful or failed.
>
> **[0:23](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/monitor-build-trends?u=76281980&t=23)** We know that this job would run for a fixed period of time, but other jobs you create might take more or less time with each build.
>
> **[0:32](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/monitor-build-trends?u=76281980&t=32)** The Build Trend can help you track that information.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Solution: Automate system monitoring with Jenkins
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-automate-system-monitoring-with-jenkins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-automate-system-monitoring-with-jenkins?u=76281980&t=0)** - [Instructor] In this challenge, we're tasked with automating a scheduled system report.
>
> **[0:10](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-automate-system-monitoring-with-jenkins?u=76281980&t=10)** One of the keys to this solution was applying a trigger to run the job daily.
>
> **[0:16](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-automate-system-monitoring-with-jenkins?u=76281980&t=16)** Under triggers, I selected Build Periodically and set the schedule to run overnight using the Midnight alias.
>
> **[0:24](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-automate-system-monitoring-with-jenkins?u=76281980&t=24)** Other options include the Daily alias or a Cron pattern that would run the job once daily.
>
> **[0:32](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-automate-system-monitoring-with-jenkins?u=76281980&t=32)** After entering a schedule, Jenkins provides verification by explaining when the job would have run last and the next time it will run.
>
> **[0:40](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-automate-system-monitoring-with-jenkins?u=76281980&t=40)** Then I added a build step.
>
> **[0:43](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-automate-system-monitoring-with-jenkins?u=76281980&t=43)** The commands for this build step were available in the exercise files.
>
> **[0:47](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-automate-system-monitoring-with-jenkins?u=76281980&t=47)** The exercise files contained scripts for both Windows and other operating systems.
>
> **[0:53](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-automate-system-monitoring-with-jenkins?u=76281980&t=53)** I'm on a non-Windows system, so I use the second script.
>
> **[0:58](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-automate-system-monitoring-with-jenkins?u=76281980&t=58)** I used the copy icon to get the script and pasted it into the build step.
>
> **[1:02](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-automate-system-monitoring-with-jenkins?u=76281980&t=62)** We're also required to add a post build step.
>
> **[1:06](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-automate-system-monitoring-with-jenkins?u=76281980&t=66)** The script generates a report and the post build step uses the file name to store the file in a space that makes it easy to access.
>
> **[1:15](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-automate-system-monitoring-with-jenkins?u=76281980&t=75)** I'm viewing the output for the last run of this job, and by design, not much is written to the console.
>
> **[1:22](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-automate-system-monitoring-with-jenkins?u=76281980&t=82)** But archiving the report as an artifact makes it easily accessible from the Jobs homepage.
>
> **[1:29](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-automate-system-monitoring-with-jenkins?u=76281980&t=89)** Opening up the report shows the details, which in my opinion, means this challenge has been solved successfully.

> [!info]- Semantic Content
>
> **Exercise Files:** exercise files (2)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. 3. Job Workspaces, Artifacts, and Parameters

#### Using a global build tool
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=0)** - In this lesson, we'll be configuring a job that uses tools, specifically Git and Maven.
>
> **[0:07](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=7)** Tool configurations allow us to install different versions of a tool once, and then use that same configuration across multiple projects.
>
> **[0:15](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=15)** Let's go to the Jenkins console to see how tools work.
>
> **[0:20](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=20)** I'm logged into my Jenkins server and I'm viewing the tools configuration.
>
> **[0:24](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=24)** If you're following along on a Windows system, you'll need to configure Git.
>
> **[0:29](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=29)** If you haven't done that already, please review the lesson and exercise files on managing tools.
>
> **[0:35](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=35)** If you're following along on a Mac, Linux, or Docker system, GIT should already be installed.
>
> **[0:41](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=41)** For all platforms, you'll need to set up Maven.
>
> **[0:44](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=44)** Once you have Git and Maven installed, you'll be all set for this lesson.
>
> **[0:50](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=50)** I've already started a new job called Hello Maven.
>
> **[0:54](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=54)** We'll be using Git to check out code and then using Maven to build a Java application.
>
> **[1:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=60)** Let's start by selecting Source Code Management.
>
> **[1:03](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=63)** I'm selecting Git, and I need to enter the repository URL.
>
> **[1:07](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=67)** The repo we're using is available in the exercise files for this lesson, and I have that open in another tab.
>
> **[1:14](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=74)** On the repo page, I'll select code, and then make sure I have the H-T-T-P-S tab selected.
>
> **[1:21](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=81)** And then I'll select these icons to copy the URL to the clipboard.
>
> **[1:25](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=85)** Now I'll go back to the configuration and paste in the URL.
>
> **[1:30](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=90)** Once I select outside of the URL entry form, Jenkins gives a message saying that it failed to connect to the repository.
>
> **[1:38](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=98)** At the time that I'm recording this, I'm using a private repository, so I need to select my credentials for this repo.
>
> **[1:45](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=105)** When you access the repo, it will be public and you won't have to worry about entering credentials.
>
> **[1:51](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=111)** We both need to update the branch though.
>
> **[1:53](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=113)** Under branch specifier we need to change master to main.
>
> **[1:58](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=118)** At the time that I'm recording this, Jenkins uses the master branch as the default.
>
> **[2:04](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=124)** However, many projects in GitHub use a branch called Main as the default.
>
> **[2:09](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=129)** So if you're pulling code from GitHub and get errors, make sure you have your job configured to use the correct branch.
>
> **[2:16](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=136)** Okay, let's move on to build steps, we need to add the build step named Invoke top-level Maven targets.
>
> **[2:24](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=144)** This build step creates a dialogue where we can configure our job to call Maven.
>
> **[2:29](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=149)** We need to select the version of Maven that we set up in the Global Tools configuration.
>
> **[2:33](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=153)** I called mine maven-3.9.9.
>
> **[2:37](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=157)** The goal for this job will be to package, so I'll add that here under goals.
>
> **[2:43](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=163)** I want to add one more build step, a Java command that will run the code that Maven builds.
>
> **[2:49](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=169)** So I'll add and execute shell build step.
>
> **[2:53](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=173)** And now I'll copy and paste the Java command from the exercise files.
>
> **[2:57](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=177)** I'll go to the repo and browse to chapter 3, 03_01 using a global build tool.
>
> **[3:05](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=185)** And I'll scroll down to the Mac OS, Linux, and Docker section and select this.
>
> **[3:12](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=192)** Now, I'll go back to the configuration and paste this in.
>
> **[3:16](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=196)** Now, if you're running Jenkins on a Windows system and you're following along, there's one change that you'll have to make instead of running execute shell for this step, you'll want to use execute Windows batch command.
>
> **[3:29](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=209)** The Java command will be the same, but you'll need to use the build step that's specifically designed for Windows.
>
> **[3:37](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=217)** Okay, our job is configured.
>
> **[3:38](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=218)** Let's save it and run it.
>
> **[3:41](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=221)** I'm going to wait here and give this job a chance to finish.
>
> **[3:45](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=225)** Okay, the job is finished.
>
> **[3:46](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=226)** Let's take a look at the console output.
>
> **[3:50](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=230)** At the top of the output, we can see that Jenkins fetched the code from GitHub using the repo that we specified.
>
> **[3:56](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=236)** After that are statements from Maven showing the steps that it took to build and test the code from the repo.
>
> **[4:03](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=243)** And finally, at the end of the output, there's an all too familiar phrase, "Hello, world!"
>
> **[4:08](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=248)** If you're following along, your output might be slightly different from mine.
>
> **[4:12](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=252)** Since Maven also downloads and installs dependencies.
>
> **[4:16](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/using-a-global-build-tool?u=76281980&t=256)** In the next lesson, we'll use the Jenkins interface to browse the workspace where this code was compiled.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this, (2), default. (2), private (1), public (1)
> **CLI Commands:** git (6), make (3), docker (2)
> **Prerequisites:** you'll need (3), configure (2), set up (2), install (1), make sure you have (1)
> **Env Vars:** url (4), git (1)
> **UI Navigation:** go to (2), select the (1), scroll down (1)
> **Exercise Files:** exercise files (3), source code (1)
> **Cross-References:** go back to (2), in the next (1)
> **Tools:** github (3)

#### Browse a job's workspace
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/browse-a-job-s-workspace?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/browse-a-job-s-workspace?u=76281980&t=0)** - [Instructor] Each job is given a dedicated directory on the Jenkins server, called a workspace.
>
> **[0:05](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/browse-a-job-s-workspace?u=76281980&t=5)** This is where the job stores any files that are generated during the build.
>
> **[0:10](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/browse-a-job-s-workspace?u=76281980&t=10)** Let's take a look at the workspace for the Hello-Maven job from the previous lesson.
>
> **[0:15](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/browse-a-job-s-workspace?u=76281980&t=15)** This job was configured to pull code from GitHub, so right away you can see the files and directories that got checked out at the beginning of the build.
>
> **[0:24](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/browse-a-job-s-workspace?u=76281980&t=24)** Selecting a directory opens that directory and may reveal additional files and directories.
>
> **[0:30](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/browse-a-job-s-workspace?u=76281980&t=30)** If you select a file, Jenkins will try to download it.
>
> **[0:34](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/browse-a-job-s-workspace?u=76281980&t=34)** Depending on how your browser is configured, your browser may also open the file to reveal its contents.
>
> **[0:41](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/browse-a-job-s-workspace?u=76281980&t=41)** Because each build uses the same workspace, sometimes its useful to clean things up a bit before the next run.
>
> **[0:48](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/browse-a-job-s-workspace?u=76281980&t=48)** Under workspace is a menu item labeled Wipe Out Current Workspace.
>
> **[0:53](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/browse-a-job-s-workspace?u=76281980&t=53)** Selecting this link and then selecting Yes will remove all files from the workspace.
>
> **[0:59](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/browse-a-job-s-workspace?u=76281980&t=59)** And if we try to view the workspace now, we get an error.
>
> **[1:03](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/browse-a-job-s-workspace?u=76281980&t=63)** There's no undo to get your workspace back, but running a new bill will create the workspace again.
>
> **[1:10](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/browse-a-job-s-workspace?u=76281980&t=70)** If you want your job to automatically clean up the workspace before each build, configure the job and select Delete workspace before build starts, under Environment.
>
> **[1:20](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/browse-a-job-s-workspace?u=76281980&t=80)** You can also automatically clean up the workspace after a build with a post-build action.
>
> **[1:25](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/browse-a-job-s-workspace?u=76281980&t=85)** To do that, you'll select Post-build Actions, Add a post-build action, and then select Delete workspace when job is done.
>
> **[1:34](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/browse-a-job-s-workspace?u=76281980&t=94)** If your project creates any files you want to keep around, you'll need to identify those files as artifacts before you delete the workspace.
>
> **[1:42](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/browse-a-job-s-workspace?u=76281980&t=102)** Let's see how to do that in the next lesson.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (3), let (2)
> **Prerequisites:** configure (1), you'll need (1)
> **Cross-References:** in the next (1)
> **Tools:** github (1)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Manage artifacts
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-artifacts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-artifacts?u=76281980&t=0)** - [Instructor] Most Jenkins jobs will generate some sort of product at the end of each build.
>
> **[0:05](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-artifacts?u=76281980&t=5)** It could be a compiled executable, like an EXC, an archive, like a JAR file, or it might even be a report in a text file.
>
> **[0:13](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-artifacts?u=76281980&t=13)** These products are referred to as artifacts.
>
> **[0:16](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-artifacts?u=76281980&t=16)** Let's take a look at the artifacts created by the Hello Maven job that we've used in previous lessons.
>
> **[0:22](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-artifacts?u=76281980&t=22)** At the very end of the log file for the Hello Maven job, there's a line here labeled "Building jar" with a path to a jar file.
>
> **[0:31](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-artifacts?u=76281980&t=31)** Let's take a look at that file in the project's workspace.
>
> **[0:34](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-artifacts?u=76281980&t=34)** From the project's workspace, I'll select Target, and there's the jar file.
>
> **[0:40](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-artifacts?u=76281980&t=40)** The jar file was easy enough to find, but it would be a waste of time if we had to poke around in the workspace every time we wanted to download or use this file.
>
> **[0:50](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-artifacts?u=76281980&t=50)** Fortunately, Jenkins makes it easy to manage artifacts with a post-build step.
>
> **[0:55](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-artifacts?u=76281980&t=55)** Let's take a look.
>
> **[0:56](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-artifacts?u=76281980&t=56)** First, let me copy the name of this jar file.
>
> **[1:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-artifacts?u=76281980&t=60)** Now, I'll configure the job and go to Post-Build Actions.
>
> **[1:06](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-artifacts?u=76281980&t=66)** I'll add a post-build action and select Archive the Artifacts.
>
> **[1:11](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-artifacts?u=76281980&t=71)** This build step lets us specify the exact files we want to archive for each successful build.
>
> **[1:18](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-artifacts?u=76281980&t=78)** You should note that the entry for this build step takes paths to files starting at the top of the workspace directory.
>
> **[1:25](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-artifacts?u=76281980&t=85)** So you might be inclined to just type the file you want to archive, but you need to be more specific.
>
> **[1:31](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-artifacts?u=76281980&t=91)** For now, I'll just use the file name, and I'll click outside of the field.
>
> **[1:36](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-artifacts?u=76281980&t=96)** The file name I entered doesn't match anything and even offers a suggestion for where the file might be.
>
> **[1:42](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-artifacts?u=76281980&t=102)** Pretty cool, right?
>
> **[1:44](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-artifacts?u=76281980&t=104)** If I didn't know the complete path, I could also use a wild card prefix with two asterisks and a slash.
>
> **[1:56](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-artifacts?u=76281980&t=116)** This tells Jenkins to search for the file in the workspace without giving the exact path.
>
> **[2:03](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-artifacts?u=76281980&t=123)** Now, let's save this and run a new build to see what happens.
>
> **[2:09](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-artifacts?u=76281980&t=129)** When the build completes, we get a new link that takes us directly to the artifact.
>
> **[2:14](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/manage-artifacts?u=76281980&t=134)** Now, with every successful build, the artifact will be much easier to find.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5)
> **CLI Commands:** find (2)
> **Env Vars:** exc (1), jar (1)
> **UI Navigation:** go to (1)
> **Warnings:** note that (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Parameters and environment variables
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/parameters-and-environment-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/parameters-and-environment-variables?u=76281980&t=0)** - [Instructor] When you're developing automation, it makes sense to create solutions that can be applied to many different scenarios.
>
> **[0:06](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/parameters-and-environment-variables?u=76281980&t=6)** One way to do that is to create projects that accept parameters.
>
> **[0:11](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/parameters-and-environment-variables?u=76281980&t=11)** Jenkins supports this approach by letting you create jobs that accept different types of parameters, including strings, Booleans, and multiple choice among others.
>
> **[0:21](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/parameters-and-environment-variables?u=76281980&t=21)** These values are then injected into the job and accessed as environment variables.
>
> **[0:28](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/parameters-and-environment-variables?u=76281980&t=28)** On a Windows system, environment variables are accessed in batch command build steps using the percent variable percent format.
>
> **[0:36](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/parameters-and-environment-variables?u=76281980&t=36)** On Macs, Linux, and Docker systems, environment variables are accessed using a dollar sign and then the variable name.
>
> **[0:45](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/parameters-and-environment-variables?u=76281980&t=45)** Typically, Jenkins parameters are named in all uppercase.
>
> **[0:49](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/parameters-and-environment-variables?u=76281980&t=49)** You should also note that the names are a case sensitive on Mac, Linux, and Docker systems, but not on Windows systems.
>
> **[0:58](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/parameters-and-environment-variables?u=76281980&t=58)** Regardless of the operating system, it's good practice to use names in all uppercase and then stay consistent throughout your job to prevent errors.
>
> **[1:07](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/parameters-and-environment-variables?u=76281980&t=67)** It's also good practice to use parameter names that don't have spaces or special characters in them.
>
> **[1:14](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/parameters-and-environment-variables?u=76281980&t=74)** It's better to use a single word or multiple words with underscores.
>
> **[1:19](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/parameters-and-environment-variables?u=76281980&t=79)** Just above each build step field, there's a link that shows additional environment variables you can use.
>
> **[1:25](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/parameters-and-environment-variables?u=76281980&t=85)** These environment variables are automatically created by Jenkins and can be pulled into your job.
>
> **[1:31](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/parameters-and-environment-variables?u=76281980&t=91)** I won't go over all of these, but a couple you might want to use are the BUILD_ID and the BUILD_NUMBER.
>
> **[1:37](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/parameters-and-environment-variables?u=76281980&t=97)** These variables are useful for tagging and naming artifacts produced by build.
>
> **[1:43](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/parameters-and-environment-variables?u=76281980&t=103)** Let's take a closer look at using environment variables and how to configure string, choice, and Boolean parameter types.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (2)
> **Env Vars:** build_id (1), build_number (1)
> **Best Practices:** good practice (2)
> **Code Keywords:** let (1)
> **Warnings:** note that (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### String parameters
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/string-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/string-parameters?u=76281980&t=0)** - [Instructor] Let's configure a job that uses a string parameter.
>
> **[0:04](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/string-parameters?u=76281980&t=4)** In a new project, start by checking the box next to This job is parameterized.
>
> **[0:10](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/string-parameters?u=76281980&t=10)** Then select String Parameter.
>
> **[0:13](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/string-parameters?u=76281980&t=13)** Add the parameter name, version number.
>
> **[0:16](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/string-parameters?u=76281980&t=16)** You can also provide a default value.
>
> **[0:18](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/string-parameters?u=76281980&t=18)** This is useful for specifying a sensible default.
>
> **[0:22](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/string-parameters?u=76281980&t=22)** I'll enter 1.0.0 for this default.
>
> **[0:25](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/string-parameters?u=76281980&t=25)** The description gets displayed when the job is run, and is useful for providing details about what the user should enter.
>
> **[0:33](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/string-parameters?u=76281980&t=33)** In this case, I'll prompt the user for a version number.
>
> **[0:36](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/string-parameters?u=76281980&t=36)** Now, let's use this parameter in a build step.
>
> **[0:40](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/string-parameters?u=76281980&t=40)** I'm running Jenkins on a Docker system, and I'll be using a shell step.
>
> **[0:44](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/string-parameters?u=76281980&t=44)** If you're running Jenkins on a window system, use a batch command step, and to help us out, there's a script in the exercise files for this example.
>
> **[0:54](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/string-parameters?u=76281980&t=54)** Again, I'm copying the code for macOS, Linux, and Docker.
>
> **[0:58](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/string-parameters?u=76281980&t=58)** If you're on a Windows system, you'll want to use the script for Windows, and I'll paste this into the Build step.
>
> **[1:04](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/string-parameters?u=76281980&t=64)** Now, I'll save this job.
>
> **[1:07](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/string-parameters?u=76281980&t=67)** Because we've created a parameterized job, the Build Now link changes to Build with Parameters, and sure enough, here's our string parameter with a default value of 1.0.0, and the description is right above it.
>
> **[1:22](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/string-parameters?u=76281980&t=82)** Let's see how this turns out.
>
> **[1:24](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/string-parameters?u=76281980&t=84)** Okay, there's the echo statement as expected, reporting the version that was used as a parameter.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), default. (2), case, (1)
> **CLI Commands:** docker (2)
> **Versions:** 1.0.0 (2)
> **Code Identifiers:** macos (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Choice parameters
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/choice-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/choice-parameters?u=76281980&t=0)** - [Michael] Let's configure a job that uses a choice parameter.
>
> **[0:04](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/choice-parameters?u=76281980&t=4)** In a new project, start by checking the box next to this job is parameterized and selecting choice parameter.
>
> **[0:11](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/choice-parameters?u=76281980&t=11)** Let's name this parameter environment.
>
> **[0:15](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/choice-parameters?u=76281980&t=15)** Now, I'll enter some options to choose from.
>
> **[0:18](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/choice-parameters?u=76281980&t=18)** For choice parameters, the first choice entered will be used as the default, so I'll enter development, staging, and production.
>
> **[0:27](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/choice-parameters?u=76281980&t=27)** I'll also add a description asking for the target environment.
>
> **[0:32](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/choice-parameters?u=76281980&t=32)** Now, let's add a build step that uses this parameter.
>
> **[0:36](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/choice-parameters?u=76281980&t=36)** I'm running Jenkins on a Docker system, and I'll be using a shell step.
>
> **[0:40](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/choice-parameters?u=76281980&t=40)** If you're running Jenkins on a Windows system, use a batch command step, and there are scripts in the exercise files that we can use for this example.
>
> **[0:49](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/choice-parameters?u=76281980&t=49)** Again, I'm using the script for Docker.
>
> **[0:52](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/choice-parameters?u=76281980&t=52)** If you're on a Windows system, you want to use the script just for Windows.
>
> **[0:57](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/choice-parameters?u=76281980&t=57)** Now, I'll select save and then build with parameters.
>
> **[1:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/choice-parameters?u=76281980&t=60)** For choice parameters, we get a list of items to choose from.
>
> **[1:04](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/choice-parameters?u=76281980&t=64)** This is perfect for only allowing specific predefined values as input to a job.
>
> **[1:10](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/choice-parameters?u=76281980&t=70)** I'll pick staging and then select build.
>
> **[1:14](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/choice-parameters?u=76281980&t=74)** Now, let's take a look at the output.
>
> **[1:16](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/choice-parameters?u=76281980&t=76)** Indeed, the job shows that staging was selected for the environment parameter.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), from. (2), default, (1)
> **CLI Commands:** docker (2)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [michael] (1)

#### Boolean parameters
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/boolean-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/boolean-parameters?u=76281980&t=0)** - [Instructor] Let's configure a job that uses a Boolean parameter.
>
> **[0:04](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/boolean-parameters?u=76281980&t=4)** In a new project, start by checking the box next to This Job is Parameterized and selecting Boolean Parameter.
>
> **[0:12](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/boolean-parameters?u=76281980&t=12)** I'll give it the name RUN_TESTS.
>
> **[0:15](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/boolean-parameters?u=76281980&t=15)** This will add a checkbox parameter to the build interface.
>
> **[0:19](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/boolean-parameters?u=76281980&t=19)** For Boolean parameters, the default value lets us pick which value is the default.
>
> **[0:25](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/boolean-parameters?u=76281980&t=25)** If the box is checked, then the default will be set to true.
>
> **[0:30](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/boolean-parameters?u=76281980&t=30)** If it's unchecked, it'll be set to false.
>
> **[0:33](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/boolean-parameters?u=76281980&t=33)** I'll leave the box unchecked for now.
>
> **[0:35](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/boolean-parameters?u=76281980&t=35)** For the description, I'll add, "Check this box to run tests before deployment."
>
> **[0:41](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/boolean-parameters?u=76281980&t=41)** Now, let's add a build step that uses this parameter.
>
> **[0:45](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/boolean-parameters?u=76281980&t=45)** I'm running Jenkins on a Docker system, and I'll be using a shell step.
>
> **[0:49](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/boolean-parameters?u=76281980&t=49)** If you're running Jenkins on a Windows system, use a batch command step.
>
> **[0:53](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/boolean-parameters?u=76281980&t=53)** Let's go to the exercise files to get the script for this example.
>
> **[0:57](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/boolean-parameters?u=76281980&t=57)** I'm using the script for Docker.
>
> **[0:59](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/boolean-parameters?u=76281980&t=59)** If you're on a Windows system, you'll want to use the script just for Windows.
>
> **[1:03](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/boolean-parameters?u=76281980&t=63)** And I'll paste the script into the Execute Shell step.
>
> **[1:06](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/boolean-parameters?u=76281980&t=66)** And let me open this up so we can take a little bit closer look at it.
>
> **[1:10](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/boolean-parameters?u=76281980&t=70)** In this script, we're checking the value of the RUN_TESTS parameter.
>
> **[1:13](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/boolean-parameters?u=76281980&t=73)** And based on that value, the script will echo if tests will be run or not.
>
> **[1:19](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/boolean-parameters?u=76281980&t=79)** Let's save this and build with parameters.
>
> **[1:22](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/boolean-parameters?u=76281980&t=82)** There's the RUN_TESTS parameter.
>
> **[1:24](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/boolean-parameters?u=76281980&t=84)** As we configured it, the default is unchecked.
>
> **[1:28](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/boolean-parameters?u=76281980&t=88)** After building the job, let's check the output.
>
> **[1:31](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/boolean-parameters?u=76281980&t=91)** Since we left the RUN_TESTS parameter unchecked, we get the report that no tests are going to be run.
>
> **[1:37](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/boolean-parameters?u=76281980&t=97)** Let's run the job with the other option.
>
> **[1:40](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/boolean-parameters?u=76281980&t=100)** I'll select Build with Parameters again, and this time, I'll check the box next to RUN_TESTS, and then I'll select Build.
>
> **[1:48](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/boolean-parameters?u=76281980&t=108)** Now let's look at the output.
>
> **[1:51](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/boolean-parameters?u=76281980&t=111)** As expected, the script would run tests based on the value of the RUN_TESTS parameter.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), interface (1), default. (1)
> **Env Vars:** run_tests (6)
> **CLI Commands:** docker (2)
> **UI Navigation:** checkbox (1), go to (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Schedule jobs
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=0)** - [Instructor] So far, all of our jobs have been triggered manually, but sometimes we'll need to run a job automatically.
>
> **[0:07](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=7)** One of the ways that we can do that is by running jobs on a schedule.
>
> **[0:12](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=12)** Running jobs on a schedule helps with automating things like updating software, checking system details, or downloading and processing data.
>
> **[0:21](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=21)** If you're familiar with system administration, the thought of using Cron to run a schedule task might come to mind.
>
> **[0:28](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=28)** In fact, Jenkins defines schedules using a format very similar to Cron.
>
> **[0:33](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=33)** In both cases, we use an expression to represent the schedule for running the job.
>
> **[0:39](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=39)** From left to right, the fields in our schedule are the minute, the hour, the day of the month, the month, and the day of the week.
>
> **[0:49](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=49)** Each field can accept values that make sense for the period of time represented by the field.
>
> **[0:55](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=55)** So for minutes, you can enter zero to 59, and for hours, you can enter zero to 23.
>
> **[1:01](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=61)** To represent all valid values for a field, you would enter an asterisk or star.
>
> **[1:07](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=67)** That is the character you get by pressing the shift key and the eight key on US keyboards.
>
> **[1:13](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=73)** So if you enter a star in the day field, for example, then the schedule will be valid for all days of the week.
>
> **[1:20](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=80)** Now let's see the Jenkins scheduler in action.
>
> **[1:23](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=83)** I've started a new project and I'll select triggers and then build periodically.
>
> **[1:29](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=89)** This opens a form where I can enter a schedule.
>
> **[1:33](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=93)** I'll enter zero, zero, star, star, star, meaning the job would run at midnight on every day of the week.
>
> **[1:40](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=100)** As soon as I select outside of the field, Jenkins tries to validate the expression and offers up a suggestion to use H instead of zero for the first field.
>
> **[1:51](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=111)** This is one of the improvements that Jenkins offers over the standard Cron format.
>
> **[1:56](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=116)** Using H for a field instead of an asterisk or a specific value lets Jenkins schedule the job close to when we want it to run.
>
> **[2:05](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=125)** That way, if multiple jobs are scheduled for the same time, Jenkins can spread them out without worrying about missing the schedule.
>
> **[2:13](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=133)** Basically using H lets us cut Jenkins some slack.
>
> **[2:18](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=138)** Jenkins also provides aliases for general times like hourly, daily, and monthly.
>
> **[2:24](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=144)** With these aliases, we give Jenkins a general timeframe for when we want to run the job.
>
> **[2:30](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=150)** So for hourly, the job would be run sometime every hour, and for daily, the job would be run sometime during the day.
>
> **[2:38](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=158)** These are great for when you don't care about the exact time the job gets run, as long as it gets run sometime during that period.
>
> **[2:47](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=167)** My absolute favorite of all these aliases is midnight.
>
> **[2:52](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=172)** This schedules the job to run anytime between 12:00 AM and 3:00 AM.
>
> **[2:57](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=177)** So if you have a job that you want to run sometime overnight and you don't care when it gets run, use at midnight.
>
> **[3:05](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=185)** As you configure scheduled jobs, consider the time zone your jobs will run in.
>
> **[3:10](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=190)** The time zone for a scheduled job is relative to the time on the server running Jenkins.
>
> **[3:16](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=196)** Many servers use coordinated universal time or UTC.
>
> **[3:20](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=200)** So if your local time and the server time are different, make sure you account for that in your schedule.
>
> **[3:27](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=207)** You can also add a time zone specification in front of your schedule to be even more specific.
>
> **[3:33](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=213)** Okay, let's go back to the example.
>
> **[3:36](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=216)** Let's change the schedule to run every minute so we don't have to wait until tomorrow to see these results.
>
> **[3:43](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=223)** And I'll add a time zone specifier for London at the top of the schedule.
>
> **[3:48](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=228)** After you enter a schedule, take a moment to review the helpful message from Jenkins that tells you when the job would have run last and when it will run next.
>
> **[3:57](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=237)** I should also mention that the inline help for scheduling is great and has plenty of examples.
>
> **[4:03](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=243)** If you need more info, just select the question mark next to schedule.
>
> **[4:08](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=248)** Now that our schedule is set, I'll scroll to the bottom of the page and select save and wait a while for the job to run a few times.
>
> **[4:16](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=256)** Now that some time has passed, a couple builds are showing up, and if we look at one of the builds, the log shows, the build was started by a timer.
>
> **[4:26](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/schedule-jobs?u=76281980&t=266)** This means Jenkins followed the schedule exactly as we described.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **CLI Commands:** make (2)
> **Ports:** :00 (2)
> **Analogies:** similar to (1), for example (1)
> **Env Vars:** utc (1)
> **Cross-References:** go back to (1)
> **Documentation:** specification (1)
> **Tools:** slack (1)

#### Solution: Use a build tool and parameters
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=0)** - Okay.
>
> **[0:06](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=6)** There's a lot going on in this challenge, and I really had fun with it.
>
> **[0:10](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=10)** I hope you did too.
>
> **[0:12](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=12)** This challenge required us to use tool configurations, set up parameters, and check out code from GitHub to build a calculator app written in Java.
>
> **[0:22](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=22)** Let's review.
>
> **[0:23](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=23)** Before I created my Jenkins job, I had to make sure two tools were in place.
>
> **[0:28](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=28)** Git and Maven.
>
> **[0:30](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=30)** I'm on a non-Windows system, so the default git configuration was already in place.
>
> **[0:37](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=37)** If you solve this challenge on a Window system, you would need to install Git and set up the path here under Git installations, I also added a tool configuration for Maven.
>
> **[0:49](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=49)** I selected the option for automatic installation and then selected the most recent version of Maven.
>
> **[0:55](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=55)** I also used the version number in the name to make it easy to identify this specific version.
>
> **[1:02](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=62)** With the tools in place, I created a freestyle job.
>
> **[1:05](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=65)** I started the job configuration by adding a description and the required parameters.
>
> **[1:11](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=71)** The operation parameter was a choice parameter for the calculator operations.
>
> **[1:17](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=77)** Adding the choices in the order they were provided made add the default parameter.
>
> **[1:22](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=82)** Then I added string parameters for number one and number two.
>
> **[1:26](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=86)** These parameters were passed as variables along with the selected operation to test out the calculator.
>
> **[1:33](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=93)** I used 10 and 5 as the defaults for these parameters, and of course, I needed to get code from somewhere.
>
> **[1:42](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=102)** In the source code management section, I selected the Git option and added the URL for the repo where the calculator application code was stored.
>
> **[1:51](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=111)** I also had to update the branch specifier, since the default for this field was master and the repo uses main.
>
> **[2:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=120)** Of course, I had to give this job something to do by adding build steps.
>
> **[2:06](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=126)** I added the Invoke top-level Maven targets build step, and selected the version of Maven I configured in the tools.
>
> **[2:14](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=134)** Then I added the Maven targets to clean the build environment, run some tests on the code, and then package the code into a jar file.
>
> **[2:22](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=142)** The next build step tested the compiled jar by using the operation and number parameters to run a calculation.
>
> **[2:29](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=149)** Of course, I'm using a non-Windows system for my solution, so I used an execute shell build step.
>
> **[2:36](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=156)** If you solve this challenge with Jenkins running on Windows, you would use an execute Windows batch command build step.
>
> **[2:42](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=162)** The script for the build step was available in the exercise files, so I just selected the correct one for my system, copied it from here, and pasted it into the build step.
>
> **[2:53](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=173)** I also added two post build actions.
>
> **[2:56](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=176)** One to save the jar file created by the job, and another to publish test reports.
>
> **[3:03](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=183)** The exercise files included the path to the jar file.
>
> **[3:06](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=186)** And for the test reports, that path was provided also.
>
> **[3:10](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=190)** Once the job was configured, I ran it to make sure everything worked as expected.
>
> **[3:16](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=196)** This job is parameterized, so when I start a build, I can either use the defaults that were defined in the job configuration, or enter new values.
>
> **[3:25](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=205)** I stuck with the defaults for my test run.
>
> **[3:28](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=208)** Now I'm viewing the console output from the job, and I'll scroll all the way down to the bottom.
>
> **[3:34](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=214)** At the end, there's a nice report that really wraps everything up.
>
> **[3:38](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=218)** The build step prints the parameters, and running the jar file outputs the results of the operation.
>
> **[3:45](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=225)** There's also a message confirming the artifacts were archived, and the test results were collected.
>
> **[3:50](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=230)** Okay, I think that covers everything.
>
> **[3:54](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-use-a-build-tool-and-parameters?u=76281980&t=234)** This success message isn't specifically for the challenge, but let's assume that Jenkins is saying this challenge has indeed been completed successfully.

> [!info]- Semantic Content
>
> **CLI Commands:** git (5), make (3)
> **Exercise Files:** exercise files (2), source code (1)
> **Prerequisites:** set up (2), install (1)
> **Code Keywords:** let (2)
> **Env Vars:** url (1)
> **Tools:** github (1)
> **Speakers:** - okay (1)
> **Non-Speech:** (upbeat music) (1)


### 5. 4. Organize Jobs with Views and Folders

#### Views and folders
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/views-and-folders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/views-and-folders?u=76281980&t=0)** - I've got a scenario for you.
>
> **[0:03](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/views-and-folders?u=76281980&t=3)** You're working with a team of mobile app developers, and they're making apps for every team in a basketball little league.
>
> **[0:10](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/views-and-folders?u=76281980&t=10)** Every team wants their own app, and the developers have asked you to set up jobs on a Jenkins server that will build, test, and deploy each app.
>
> **[0:21](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/views-and-folders?u=76281980&t=21)** As you start creating the jobs, you realize you'll soon end up with more than 100 jobs on your Jenkins server.
>
> **[0:28](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/views-and-folders?u=76281980&t=28)** With so many jobs to sort through.
>
> **[0:30](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/views-and-folders?u=76281980&t=30)** you and the developers might have trouble finding the jobs you need to work on.
>
> **[0:35](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/views-and-folders?u=76281980&t=35)** Fortunately, Jenkins has functionality to help keep things organized, Views and Folders.
>
> **[0:42](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/views-and-folders?u=76281980&t=42)** Let's see what Views and Folders are and how they can help.
>
> **[0:47](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/views-and-folders?u=76281980&t=47)** Views provide a way of associating jobs on the dashboard and displaying them together.
>
> **[0:52](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/views-and-folders?u=76281980&t=52)** You can think of a view as a type of filter that looks at all of the defined jobs and displays particular jobs based on the criteria that you define.
>
> **[1:01](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/views-and-folders?u=76281980&t=61)** Using a view, you limit the jobs that are displayed to only the ones that you want to see.
>
> **[1:08](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/views-and-folders?u=76281980&t=68)** Folders allow you to create structures that are very similar to file systems on a disc.
>
> **[1:14](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/views-and-folders?u=76281980&t=74)** Each folder can contain jobs, views, and even other folders.
>
> **[1:19](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/views-and-folders?u=76281980&t=79)** Folders have a completely separate namespace from other folders, allowing you to create hierarchies that have similar characteristics, like jobs with the same name, for example.
>
> **[1:29](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/views-and-folders?u=76281980&t=89)** This is a powerful feature for organizing jobs and other content in Jenkins.
>
> **[1:35](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/views-and-folders?u=76281980&t=95)** Now that you have a better idea of what Views and Folders are, let's take a look at how we create and work with them and how they can help us get more organized in the Jenkins interface.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), interface (1)
> **Analogies:** similar to (1), for example (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - i (1)

#### Create a view
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-view?u=76281980&t=0)** - [Instructor] I have several jobs in place to help demonstrate how to create views.
>
> **[0:04](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-view?u=76281980&t=4)** If you're following along, you only need to create three jobs, one with build in the name, one with test, and one with deploy.
>
> **[0:14](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-view?u=76281980&t=14)** With your jobs in place, we can create a view for each type of job.
>
> **[0:18](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-view?u=76281980&t=18)** We'll start by selecting the plus sign next to the All tab.
>
> **[0:22](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-view?u=76281980&t=22)** By the way, the All tab is actually a view.
>
> **[0:25](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-view?u=76281980&t=25)** The All view shows all jobs and folders at the top level of the Jenkins dashboard.
>
> **[0:31](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-view?u=76281980&t=31)** Let's move on to creating a new view.
>
> **[0:34](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-view?u=76281980&t=34)** First, we need to give the view a name.
>
> **[0:36](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-view?u=76281980&t=36)** It's useful to give a view a name that describes what you'll see in the view.
>
> **[0:41](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-view?u=76281980&t=41)** In this case, I'll name it Build because I want to use it to list all of the jobs that have build in their name.
>
> **[0:48](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-view?u=76281980&t=48)** Then I'll select List View and then Create.
>
> **[0:52](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-view?u=76281980&t=52)** On the Edit View page, I can give the view a description that will be displayed at the top of the view.
>
> **[0:58](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-view?u=76281980&t=58)** How about "These are the build jobs"?
>
> **[1:01](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-view?u=76281980&t=61)** Now I need to specify which jobs I want to appear in the view.
>
> **[1:06](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-view?u=76281980&t=66)** In this list, under Jobs, I can pick the jobs that will appear in the view.
>
> **[1:11](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-view?u=76281980&t=71)** Since we're making a view for build jobs, I can scroll down this list and click each job with build in the name.
>
> **[1:18](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-view?u=76281980&t=78)** But that would get tedious.
>
> **[1:21](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-view?u=76281980&t=81)** Also, if any new build jobs were added, I would have to edit this view, find the new job, and select it in this list.
>
> **[1:29](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-view?u=76281980&t=89)** Fortunately, we can use a regular expression to specify the jobs that should appear in this view.
>
> **[1:36](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-view?u=76281980&t=96)** So instead of selecting each job, I'll select this option to use a regular expression for including jobs in the view.
>
> **[1:45](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-view?u=76281980&t=105)** Again, we're looking for jobs with build anywhere in their name, so I'll use a pattern like this: .*BUILD.*.
>
> **[1:55](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-view?u=76281980&t=115)** The first and last parts of this expression, the dot stars, match all characters, and of course, build will match the word build.
>
> **[2:05](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-view?u=76281980&t=125)** This will match all existing jobs and any new jobs we create with build in their name.
>
> **[2:11](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-view?u=76281980&t=131)** Pretty slick, right?
>
> **[2:13](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-view?u=76281980&t=133)** Only thing we have left to do now is to save this view.
>
> **[2:17](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-view?u=76281980&t=137)** And there's our view right next to the All view.
>
> **[2:20](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-view?u=76281980&t=140)** Indeed, the BUILD view gives us a list with just the jobs that have a build in their name.
>
> **[2:26](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-view?u=76281980&t=146)** If you're following along, create views for test and deploy using the same approach.
>
> **[2:32](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-view?u=76281980&t=152)** I'll do the same on my side and meet you in the next lesson.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), case, (1), this: (1)
> **Env Vars:** build (2)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### Create a folder
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=0)** - [Instructor] Using folders is another option for solving our problem of organizing the jobs for each team in the league.
>
> **[0:07](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=7)** Let's try this by creating a folder for each team.
>
> **[0:11](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=11)** Creating a folder is a lot like creating a job.
>
> **[0:13](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=13)** You even start the same way as you would by selecting New Item on the Jenkins dashboard.
>
> **[0:19](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=19)** And again, similarly, you have to give the item a name.
>
> **[0:23](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=23)** Let's call this folder "Cyclones."
>
> **[0:25](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=25)** For the item type, I'll select Folder, and if you take a look at it, the item description even says that a folder is useful for grouping things together.
>
> **[0:36](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=36)** Perfect.
>
> **[0:37](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=37)** On the folder configuration page, I'll give the folder a description.
>
> **[0:42](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=42)** Something like, "These are the jobs for the Cyclones mobile app."
>
> **[0:46](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=46)** And much like a job, we have other options to configure this folder.
>
> **[0:51](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=51)** I'm going to leave everything at the default for now and just select Save.
>
> **[0:55](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=55)** Looking at this folder, you might think, "Wow, this looks like Jenkins when it first gets installed."
>
> **[1:01](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=61)** That's a good observation because each folder provides a namespace that's separate from other areas in Jenkins.
>
> **[1:09](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=69)** Any jobs, views and other folders we create here are isolated.
>
> **[1:15](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=75)** They can even have the same name as items in other folders.
>
> **[1:19](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=79)** For this demo, I'll move the Cyclone build test and deploy jobs into the Cyclone's folder.
>
> **[1:26](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=86)** Now that we have a folder, the pull-down menu next to each job has a move option.
>
> **[1:32](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=92)** I'll select that.
>
> **[1:33](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=93)** I get a page with a prompt for the job's new location.
>
> **[1:37](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=97)** In the list, we can see the top level Jenkins folder and our newly created Cyclones folder.
>
> **[1:44](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=104)** I'll select that folder, and then select Move.
>
> **[1:47](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=107)** On the page reload, we're on the page for the job.
>
> **[1:50](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=110)** I'll navigate back up to the Cyclones folder.
>
> **[1:54](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=114)** Indeed, the build job has been moved into the Cyclones folder.
>
> **[1:59](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=119)** Unfortunately, jobs can only be moved one at a time in the interface.
>
> **[2:03](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=123)** No, you can't drag and drop, but the goal here is to get organized, so give me a moment to put the existing jobs in the correct folders, and then we'll see how things look.
>
> **[2:14](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=134)** I've created folders for each team now and moved the jobs into the appropriate folders.
>
> **[2:20](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=140)** Now that the jobs have been moved, our dashboard is looking pretty organized, right?
>
> **[2:24](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=144)** Each team has our own folder with all the jobs inside.
>
> **[2:29](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=149)** You might be wondering though, "What about the views we created?"
>
> **[2:33](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=153)** By default, views only have access to jobs that exist at the level where they were configured, and since we moved the jobs into their own folders, they're no longer accessible, but we can change that.
>
> **[2:46](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=166)** Let's edit the build view.
>
> **[2:48](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=168)** Under this configuration, I'll select the option to recurs in subfolders.
>
> **[2:53](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=173)** Back on the view, things are looking pretty familiar.
>
> **[2:57](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=177)** The build jobs are there, but now we can also see that each job is located in a folder.
>
> **[3:02](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=182)** We can apply the same setting for the test and deploy views as well.
>
> **[3:06](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/create-a-folder?u=76281980&t=186)** If you ask me, this is the perfect combination of using views and folders to get organized.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), type, (1), interface (1), default, (1)
> **UI Navigation:** drag and drop (1), select the (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Search with the command palette
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/search-with-the-command-palette?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/search-with-the-command-palette?u=76281980&t=0)** - [Instructor] Along with organizing Jenkins jobs using views and folders, there's another feature we can use for searching, the command palette.
>
> **[0:09](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/search-with-the-command-palette?u=76281980&t=9)** You can access the command palette by pressing the Command and K keys on a Mac or the Control and K keys on Windows.
>
> **[0:18](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/search-with-the-command-palette?u=76281980&t=18)** This opens the dialogue where we can enter search terms.
>
> **[0:21](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/search-with-the-command-palette?u=76281980&t=21)** Objects we can search for, include folders, jobs, views, and users.
>
> **[0:27](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/search-with-the-command-palette?u=76281980&t=27)** Let's search for Cyclones items.
>
> **[0:30](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/search-with-the-command-palette?u=76281980&t=30)** With this search term, the palette displays the folder and the jobs that have Cyclones somewhere in their name.
>
> **[0:37](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/search-with-the-command-palette?u=76281980&t=37)** Now let's search for build.
>
> **[0:40](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/search-with-the-command-palette?u=76281980&t=40)** This time the palette shows all the jobs and views that have build somewhere in their name.
>
> **[0:45](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/search-with-the-command-palette?u=76281980&t=45)** Selecting anything display in the palette will take you directly to that item.
>
> **[0:51](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/search-with-the-command-palette?u=76281980&t=51)** We can get more specific by adding additional search terms that Jenkins can associate with items in the interface.
>
> **[0:58](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/search-with-the-command-palette?u=76281980&t=58)** Let's go to the very first run of the Cyclones-DEPLOY job.
>
> **[1:02](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/search-with-the-command-palette?u=76281980&t=62)** By typing Cyclones, followed by deploy, and the number 1, Jenkins knows exactly what we're looking for.
>
> **[1:10](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/search-with-the-command-palette?u=76281980&t=70)** As you get more familiar with Jenkins, be sure to experiment with the command palette as more search items are added to this capability.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), for, (1), interface (1), for. (1)
> **Env Vars:** deploy (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Delete views and folders
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/delete-views-and-folders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/delete-views-and-folders?u=76281980&t=0)** - [Instructor] Before we move on, I need to emphasize what happens if you delete a folder or a view.
>
> **[0:06](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/delete-views-and-folders?u=76281980&t=6)** I'm on the view showing all the jobs with build in their name.
>
> **[0:11](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/delete-views-and-folders?u=76281980&t=11)** If I select delete view from this page, I get a warning asking if I really want to delete this item, I'll select yes to proceed.
>
> **[0:20](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/delete-views-and-folders?u=76281980&t=20)** We no longer have access to the view, but the jobs that were visible inside the view are still there.
>
> **[0:27](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/delete-views-and-folders?u=76281980&t=27)** If I drop into the cyclones folder, the cyclone's build job is still present.
>
> **[0:33](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/delete-views-and-folders?u=76281980&t=33)** The leading folders though is a different story.
>
> **[0:36](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/delete-views-and-folders?u=76281980&t=36)** When you delete a folder, all the contents of a folder are deleted along with it.
>
> **[0:41](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/delete-views-and-folders?u=76281980&t=41)** That means any jobs, views, and folders that a folder contains will also get removed.
>
> **[0:47](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/delete-views-and-folders?u=76281980&t=47)** Inside this folder, I'll select delete folder.
>
> **[0:51](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/delete-views-and-folders?u=76281980&t=51)** Once again, I get a warning and I'll select yes, and sure enough, the folder is gone and all of the jobs that were inside that folder are gone as well.
>
> **[1:01](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/delete-views-and-folders?u=76281980&t=61)** So before you delete a folder, keep in mind that you will also be deleting everything inside that folder.
>
> **[1:07](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/delete-views-and-folders?u=76281980&t=67)** Consider this a public service announcement.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (6), public (1)
> **Warnings:** warning (2), keep in mind (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Solution: Create folders and views
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-create-folders-and-views?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-create-folders-and-views?u=76281980&t=0)** - [Instructor] In this challenge, we're helping developers use folders and views to organize their Jenkins jobs.
>
> **[0:12](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-create-folders-and-views?u=76281980&t=12)** To begin the solution, I've created four jobs to match the departments using Jenkins.
>
> **[0:17](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-create-folders-and-views?u=76281980&t=17)** Each department has a build job and a deploy job.
>
> **[0:21](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-create-folders-and-views?u=76281980&t=21)** I've also created views for each type of job, and as expected, the build view pulls in jobs with build in their name, and we get the same result for the deploy view.
>
> **[0:34](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-create-folders-and-views?u=76281980&t=34)** Let's look at this view configuration.
>
> **[0:36](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-create-folders-and-views?u=76281980&t=36)** For these views to be correct, I needed to select the option to recurse into sub-folders.
>
> **[0:42](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-create-folders-and-views?u=76281980&t=42)** That way, when we get to the folder portion of this solution, the views will still be correct.
>
> **[0:47](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-create-folders-and-views?u=76281980&t=47)** I also need to configure a regular expression for the content of the view.
>
> **[0:52](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-create-folders-and-views?u=76281980&t=52)** Since this is the deploy view, I use the regular expression .* followed by the word deploy and then .*.
>
> **[1:01](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-create-folders-and-views?u=76281980&t=61)** Now I'll take a moment to create folders and organize the jobs by department.
>
> **[1:08](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-create-folders-and-views?u=76281980&t=68)** Okay, I have my folders.
>
> **[1:10](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-create-folders-and-views?u=76281980&t=70)** Now I'll move the jobs into their corresponding folders.
>
> **[1:14](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-create-folders-and-views?u=76281980&t=74)** I really wish there was a copy/paste operation for moving jobs, but after a lot of pointing and clicking, everything is in place.
>
> **[1:23](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-create-folders-and-views?u=76281980&t=83)** Now let's review this solution.
>
> **[1:25](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-create-folders-and-views?u=76281980&t=85)** At the top level, things are a bit more organized.
>
> **[1:29](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-create-folders-and-views?u=76281980&t=89)** Instead of seeing jobs all over the place, I have two folders, one for each department, and I have two views, one for build jobs and one for deploy jobs.
>
> **[1:40](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-create-folders-and-views?u=76281980&t=100)** The challenge also requested that I use the Command palette to access folders and jobs directly.
>
> **[1:46](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-create-folders-and-views?u=76281980&t=106)** I'm on a Mac system, so I'll be pressing command K.
>
> **[1:50](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-create-folders-and-views?u=76281980&t=110)** If you're on a Windows system, you'll be selecting control K and I'll search for Engineering and then select the Engineering folder.
>
> **[1:59](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-create-folders-and-views?u=76281980&t=119)** With these views and folders in place and then also using the Command palette, I'm going to go ahead and call it.
>
> **[2:06](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/solution-create-folders-and-views?u=76281980&t=126)** This challenge has been solved successfully.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **UI Navigation:** select the (2)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Conclusion

#### Pipeline as code
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/pipeline-as-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/pipeline-as-code?u=76281980&t=0)** - [Instructor] So far, we've been manually configuring our jobs in the console, but Jenkins also allows us to configure jobs as code.
>
> **[0:09](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/pipeline-as-code?u=76281980&t=9)** These types of jobs are called pipelines.
>
> **[0:13](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/pipeline-as-code?u=76281980&t=13)** A pipeline is written into a text file called a Jenkinsfile.
>
> **[0:18](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/pipeline-as-code?u=76281980&t=18)** Because the Jenkinsfile is a text file, it can be stored in a repo, along with other code or configuration used in a project.
>
> **[0:26](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/pipeline-as-code?u=76281980&t=26)** Pipelines can configure almost all aspects of a Jenkins job.
>
> **[0:31](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/pipeline-as-code?u=76281980&t=31)** In particular, pipelines contain build steps, post-build actions, and other settings that we might enter manually in a freestyle job configuration.
>
> **[0:41](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/pipeline-as-code?u=76281980&t=41)** In a pipeline definition, stages represent the sections of the pipeline.
>
> **[0:47](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/pipeline-as-code?u=76281980&t=47)** For example, a pipeline might have three stages called Test, Build, and Deploy.
>
> **[0:53](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/pipeline-as-code?u=76281980&t=53)** These stages describe and manage the flow of the code through the pipeline.
>
> **[0:58](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/pipeline-as-code?u=76281980&t=58)** Inside each stage are steps.
>
> **[1:02](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/pipeline-as-code?u=76281980&t=62)** Steps are the instructions Jenkins follows to complete each stage, like checking out code, running tests, compiling code, or archiving artifacts.
>
> **[1:12](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/pipeline-as-code?u=76281980&t=72)** By breaking the pipeline down into stages and steps, your automation becomes easier to read, maintain, and troubleshoot.
>
> **[1:20](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/pipeline-as-code?u=76281980&t=80)** To really get a feel for a pipeline, let's take a look at the pipeline version of our freestyle project we created earlier in the course.
>
> **[1:29](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/pipeline-as-code?u=76281980&t=89)** I'm viewing the Jenkinsfile for the Java calculator application that we worked with earlier in the course.
>
> **[1:35](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/pipeline-as-code?u=76281980&t=95)** This file sets up a project using the same configuration we used in the freestyle job, including parameters and steps that include the Maven commands to test and build the Java application.
>
> **[1:48](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/pipeline-as-code?u=76281980&t=108)** The pipeline also configures post-build actions to archive the jar file and test results.
>
> **[1:54](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/pipeline-as-code?u=76281980&t=114)** Let's see how this looks after we run the pipeline.
>
> **[1:58](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/pipeline-as-code?u=76281980&t=118)** I'm back in Jenkins now, viewing the homepage of the java-calculator-pipeline.
>
> **[2:03](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/pipeline-as-code?u=76281980&t=123)** At first glance, this page looks very similar to the results of the freestyle job we used previously.
>
> **[2:10](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/pipeline-as-code?u=76281980&t=130)** If I select Stages, we'll see some differences.
>
> **[2:13](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/pipeline-as-code?u=76281980&t=133)** The Stages view shows the output of past pipeline runs and the past or fail status for each stage.
>
> **[2:21](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/pipeline-as-code?u=76281980&t=141)** Selecting a specific stage gives us yet another view of the pipeline.
>
> **[2:26](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/pipeline-as-code?u=76281980&t=146)** Using this view of the pipeline, we can see a bit more detail for each stage, along with the output of the commands run in each step.
>
> **[2:34](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/pipeline-as-code?u=76281980&t=154)** As you get more familiar with Jenkins and pipelines, you'll see that there are many more benefits of using pipelines for projects.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Cross-References:** earlier in (2)
> **Prerequisites:** configure (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### Build agents and cloud runners
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-agents-and-cloud-runners?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-agents-and-cloud-runners?u=76281980&t=0)** - [Instructor] So far, we've been working with Jenkins running all jobs on a single machine.
>
> **[0:05](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-agents-and-cloud-runners?u=76281980&t=5)** This is perfect for learning Jenkins and experimenting, but in real-world projects is common to distribute jobs across multiple machines.
>
> **[0:15](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-agents-and-cloud-runners?u=76281980&t=15)** That's where build agents come in.
>
> **[0:18](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-agents-and-cloud-runners?u=76281980&t=18)** A build agent is simply another machine that Jenkins can delegate work to.
>
> **[0:23](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-agents-and-cloud-runners?u=76281980&t=23)** This could be another server on your network, or even better, a cloud-based compute resource that spins up on demand.
>
> **[0:32](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-agents-and-cloud-runners?u=76281980&t=32)** Using distributed agents lets Jenkins scale more efficiently.
>
> **[0:36](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-agents-and-cloud-runners?u=76281980&t=36)** For example, you might run tests on one agent, while building and deploying on other agents, or you could configure agents with different tools or operating systems, depending on the types of applications being developed.
>
> **[0:53](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-agents-and-cloud-runners?u=76281980&t=53)** Some teams use cloud runners.
>
> **[0:55](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-agents-and-cloud-runners?u=76281980&t=55)** In this case, the build agents run on servers, hosted in Amazon Web Services, Microsoft Azure, or Google Cloud.
>
> **[1:03](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-agents-and-cloud-runners?u=76281980&t=63)** Plugins designed specifically for these clouds allow Jenkins to dynamically create agents as needed.
>
> **[1:10](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-agents-and-cloud-runners?u=76281980&t=70)** After the jobs run, the agents are decommissioned to minimize the cost of operating in the cloud.
>
> **[1:16](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/build-agents-and-cloud-runners?u=76281980&t=76)** While we didn't get hands-on with build agents in this course, I encourage you to explore how Jenkins can scale when paired with distributed build agents and cloud-based runners.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Next steps with Jenkins
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/next-steps-with-jenkins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/next-steps-with-jenkins?u=76281980&t=0)** - We covered a lot in this course, and even though this is the end, it's really just the beginning.
>
> **[0:06](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/next-steps-with-jenkins?u=76281980&t=6)** I encourage you to apply Jenkins to real projects, stay curious, and learn as much as you can about this powerful automation platform.
>
> **[0:15](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/next-steps-with-jenkins?u=76281980&t=15)** As you continue your automation journey, come back to the LinkedIn Learning Library for more courses on Jenkins.
>
> **[0:22](https://www.linkedin.com/learning/learning-jenkins-automating-software-development-and-system-administration/next-steps-with-jenkins?u=76281980&t=22)** It's been my pleasure to be your instructor for learning Jenkins, and I can't wait to see what you automate.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (1)
> **Cross-References:** we covered (1)
> **Speakers:** - we (1)


## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/learning-jenkins-3981454)

## Skills Covered

- Jenkins

## Path Context

### In [[Continuous Integration-Continuous Delivery (CI-CD) with Jenkins]]
**1 of 3** | [[Jenkins Essential Training]] →

## Appears In

- [[Continuous Integration-Continuous Delivery (CI-CD) with Jenkins]]

## Related Courses

_Courses sharing skills:_

- [[Running Jenkins on AWS- Deploying and Managing Jenkins on Cloud Infrastructure]] — Jenkins
- [[Jenkins Essential Training]] — Jenkins

---

[↑ Back to top](#)