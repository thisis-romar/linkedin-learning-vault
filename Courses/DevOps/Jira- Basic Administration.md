---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: jira-basic-administration-17503968
url: "https://www.linkedin.com/learning/jira-basic-administration-17503968"
duration_minutes: 84
duration: 1h 24m
level: Intermediate
updated: 4/21/2025
learners: 21693
skills:
  - System Administration
  - Jira
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQEy1G1z5kc95w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1671662391309?e=2147483647&amp;v=beta&amp;t=uhQ8JbwgdsK9AmUYSAmyiTDq75wHezAkaxZf0EVkM8A"
linkedin_topic: DevOps
learning_paths:
  - '[Mastering Jira Administration](../../Paths/DevOps/Learning%20Paths/Mastering%20Jira%20Administration.md)'
prev_courses:
  - '[Learning Jira Cloud Edition](Learning%20Jira%20Cloud%20Edition.md)'
next_courses:
  - '[Jira Service Management- Administration](Jira%20Service%20Management-%20Administration.md)'
path_nav: '[{"path":"Mastering Jira Administration","position":2,"total":7,"prev":"Learning Jira Cloud Edition","next":"Jira Service Management- Administration"}]'
path_count: 1
tags:
  - course
  - topic/devops
  - topic/network-and-system-administration
  - skill/system-administration
  - skill/jira
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Jira-%20Basic%20Administration.md)

![Jira: Basic Administration](https://media.licdn.com/dms/image/v2/C560DAQEy1G1z5kc95w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1671662391309?e=2147483647&amp;v=beta&amp;t=uhQ8JbwgdsK9AmUYSAmyiTDq75wHezAkaxZf0EVkM8A)

# Jira: Basic Administration

> Every company needs software to track their work and report progress on their strategic initiatives. Jira, the powerful project management tool from Atlassian, is one of the most popular tracking tools used by business, development, and support teams. But for every software application, there's an administrator who needs to correctly configure the settings, manage users, complete customization req

> [LinkedIn Learning](https://www.linkedin.com/learning/jira-basic-administration-17503968) | 1h 24m | Intermediate | 22K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Basic administration in Jira](#basic-administration-in-jira)
  - [Who is this course for?](#who-is-this-course-for)
  - [What do you need for this course?](#what-do-you-need-for-this-course)
- [**1. What Is Jira and How Is It Used?**](#1-what-is-jira-and-how-is-it-used) (5 videos)
  - [What is Jira?](#what-is-jira)
  - [How is Jira used?](#how-is-jira-used)
  - [Which type of Jira do you have?](#which-type-of-jira-do-you-have)
  - [Important terms and definitions](#important-terms-and-definitions)
  - [Navigating the admin area](#navigating-the-admin-area)
- [**2. Admin Types and Responsibilities**](#2-admin-types-and-responsibilities) (3 videos)
  - [Types of Jira users](#types-of-jira-users)
  - [Who does what?](#who-does-what)
  - [Utilizing global permissions](#utilizing-global-permissions)
- [**3. Setting Up a Test Environment**](#3-setting-up-a-test-environment) (2 videos)
  - [Choose a test environment](#choose-a-test-environment)
  - [Create a test environment](#create-a-test-environment)
- [**4. Managing Users**](#4-managing-users) (4 videos)
  - [How to manage users](#how-to-manage-users)
  - [Leveraging groups and roles](#leveraging-groups-and-roles)
  - [Challenge: Add a test user](#challenge-add-a-test-user)
  - [Solution](#solution)
- [**5. Creating Jira Projects**](#5-creating-jira-projects) (4 videos)
  - [Types of Jira projects](#types-of-jira-projects)
  - [How to create a project](#how-to-create-a-project)
  - [Challenge: Create a test project](#challenge-create-a-test-project)
  - [Solution](#solution)
- [**6. Creating Workflows**](#6-creating-workflows) (5 videos)
  - [Types of workflows](#types-of-workflows)
  - [Basic workflow concepts](#basic-workflow-concepts)
  - [Using diagram and text mode](#using-diagram-and-text-mode)
  - [Challenge: Create a workflow](#challenge-create-a-workflow)
  - [Solution](#solution)
- [**7. Troubleshooting Permission Problems**](#7-troubleshooting-permission-problems) (4 videos)
  - [Types of Jira permissions](#types-of-jira-permissions)
  - [Using the Permission Helper](#using-the-permission-helper)
  - [Challenge: Determine the permission problem](#challenge-determine-the-permission-problem)
  - [Solution](#solution)
- [**8. Troubleshooting Missing Notifications**](#8-troubleshooting-missing-notifications) (4 videos)
  - [Types of Jira notifications](#types-of-jira-notifications)
  - [Using the Notification Helper](#using-the-notification-helper)
  - [Challenge: Determine the notification problem](#challenge-determine-the-notification-problem)
  - [Solution](#solution)
- [**Conclusion**](#conclusion) (1 videos)
  - [Additional learning resources](#additional-learning-resources)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Basic administration in Jira](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-administration-in-jira?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-administration-in-jira?u=76281980&t=0)** - [Rachel] In this course, you'll learn what [Jira](../../Skills/DevOps/Jira.md) is, how it's used and which type you have. I'll show you how to access application settings and the most used admin areas. Then we'll discuss the responsibilities and different types of administrators. We'll also set up a test environment so you can experiment without impacting production data. By the end of this course, you'll have the top skills every tier admin needs like adding users, creating projects, creating custom workflows and troubleshooting common permission and notification problems. At the end of each section is a quiz or a challenge to reinforce what you've learned. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jira](../../Skills/DevOps/Jira.md) (1)
> **Tools:** jira (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [rachel] (1)

#### [Who is this course for?](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-is-this-course-for?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-is-this-course-for?u=76281980&t=0)** - [Instructor] This course helps new [Jira](../../Skills/DevOps/Jira.md) administrators get started, solve common problems, and fulfill requests so you can support growth and change in your organization. You may be a full-time Jira admin, a part-time admin with an additional job, an end user who was granted admin access, or the admin of multiple applications at the same time. This course includes the top five things every Jira administrator needs to know so you can get started quickly. Once you've learned the basics, I invite you to join me for a more in-depth look at Jira administration and additional area-specific courses. If you're new to Jira, I recommend starting with my Learning Jira course to understand your end user's experience. There's one course for cloud and another for server and data center. Next, take [Learning Jira Software](Learning%20Jira%20Software.md), which focuses on development-specific features like backlogs, sprints, versions, and more. Once you have a good understanding of Jira capabilities, take this basic course and then the advanced course. If you're new to application administration, here's the learning path I'd follow. After this course, take Jira Advanced Administration. The advanced course dives deeper into the configuration areas used most. If you have Jira service management, my admin course shows how to configure requests, queues, service level agreements, and a knowledge base so your organization can support internal and external customers. And finally, if you have [Confluence](../../Skills/DevOps/Confluence.md), I created an admin course to help configure that application too. In all courses, my goal is not just for you to understand the settings,
>
> **[1:34](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-is-this-course-for?u=76281980&t=94)** but to be able to make smart decisions when creating or changing them. Knowing the best way to solve a problem and how it will impact your application in the future is the difference between a good administrator and a great one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jira](../../Skills/DevOps/Jira.md) (10), [Confluence](../../Skills/DevOps/Confluence.md) (1)
> **Tools:** jira (10), confluence (1)
> **Prerequisites:** configure (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [What do you need for this course?](https://www.linkedin.com/learning/jira-basic-administration-17503968/what-do-you-need-for-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/what-do-you-need-for-this-course?u=76281980&t=0)** - Ideally, you'll have some end-[user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) creating issues, transitioning issues through workflows, and working into your projects, boards, and [Dashboards](../../Skills/Data%20Science/Dashboards.md). It's also helpful to have application admin or system admin experience with other software, but it's certainly possible that you don't have this experience, and that's okay. This course will teach you the basics so you can get started quickly. All you need right now is admin access to a [Jira](../../Skills/DevOps/Jira.md) application. It's also helpful to have a test environment, but if you don't, don't worry, we'll set one up as part of the course. One last thing. It's really hard to keep up with software changes, especially with cloud software, new features are added, removed, or changed all the time, existing features or even entire [products](../../Skills/Software%20Development/Microsoft%20Products.md) are renamed, and links that worked yesterday are broken today. That's why I've set up a special place on my website to post the latest Jira and [Confluence](../../Skills/DevOps/Confluence.md) information. When something impactful to the course changes, I'll post that information at the URL shown. Now's a good time to bookmark that location. Go ahead. I'll wait.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jira](../../Skills/DevOps/Jira.md) (2), [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (1), [Dashboards](../../Skills/Data%20Science/Dashboards.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Confluence](../../Skills/DevOps/Confluence.md) (1)
> **Tools:** jira (2), confluence (1)
> **Env Vars:** url (1)
> **Prerequisites:** set up (1)
> **Speakers:** - ideally (1)


### 1. What Is Jira and How Is It Used?

[↑ Back to Table of Contents](#table-of-contents)

#### [What is Jira?](https://www.linkedin.com/learning/jira-basic-administration-17503968/what-is-jira?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/what-is-jira?u=76281980&t=0)** - [Instructor] [Jira](../../Skills/DevOps/Jira.md) is made by a company called [Atlassian](../../Glossary/Service/Atlassian.md) who makes other popular applications like [Confluence](../../Skills/DevOps/Confluence.md), a wiki and document repository, [Trello](../../Skills/Software%20Development/Trello.md), a lightweight visual task manager, and development tools like Bamboo and [Bitbucket](../../Skills/Software%20Development/Bitbucket.md). Jira is for issue tracking, bug tracking, project management, and more. It digitizes your wall of sticky notes. Jira helps teams of all types manage their work. When Jira was first released in 2002, it was purely for [Software Development](../../Topics/Software%20Development.md), but these days, all kinds of teams like legal, marketing, HR, and IT use Jira. All kinds of industries use it to track their work and their team's to-do list. Jira's not just for software development anymore.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jira](../../Skills/DevOps/Jira.md) (6), [Software Development](../../Topics/Software%20Development.md) (2), [Atlassian](../../Glossary/Service/Atlassian.md) (1), [Confluence](../../Skills/DevOps/Confluence.md) (1), [Trello](../../Skills/Software%20Development/Trello.md) (1)
> **Tools:** jira (6), confluence (1), bitbucket (1)
> **Speakers:** - [instructor] (1)

#### [How is Jira used?](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-is-jira-used?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-is-jira-used?u=76281980&t=0)** - [Narrator] You can use [Jira](../../Skills/DevOps/Jira.md) to do any of the following. Schedule initiatives, tasks, and manage your team or product pipeline. For example, the HR team can track where the new hire is in the onboarding process, the facilities team can record which employees have security badges, the legal team can fulfill contract review requests, the IT team can receive computer support requests, and the development team can track changes to their code. Jira can track virtually anything your team needs to do. Use Jira to report and fix bugs and triage or address issues. Jira can help determine which issue should be worked next. You can also use Jira to report time and monitor progress. You can track changes, tasks, and use Jira as your to-do list. Finally, Jira creates an authoritative, historical, and legal record of what was done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jira](../../Skills/DevOps/Jira.md) (7)
> **Tools:** jira (7)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Which type of Jira do you have?](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=0)** - [Instructor] Different types of [Jira](../../Skills/DevOps/Jira.md) include different abilities, different deployment methods, and even different user interfaces. It's important to know which type you have to leverage the correct features, advice, and documentation. The different types of Jira are Jira Core and Jira Work Management, which is built for business teams and general task management, Jira Software, for [Software Development](../../Topics/Software%20Development.md) teams, Jira Service Management, with special features for support teams, Jira Align to connect business strategy to technical execution, and Jira Product Discovery to help product managers collaborate and prioritize initiatives. These applications can be used separately or together. Let's do a quick comparison of the three most popular application types. In this course, I've abbreviated Jira Software as JS, Jira Work Management as JWM, and Jira Service Management as JSM. Let's discuss the applications built for business teams first. Jira Work Management and Jira Core help teams collaborate and manage projects, processes, and tasks. It contains all the main Jira features, like projects, issues, workflows, and users. The cloud offering for business teams is called Jira Work Management. It includes all the core abilities plus additional features like lists, calendars, timelines, and [Forms](../../Skills/Web%20Development/Forms.md). These applications are great for business teams like marketing, [human resources](../../Skills/Artificial%20Intelligence%20(AI)/Human%20Resources%20(HR).md), legal, sales, and more. These users can only access work management-type Jira projects. Next, Jira Software helps teams track projects,
>
> **[1:35](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=95)** bugs, and tasks. It's designed for development teams and includes dev-specific features like sprints, story points, release versions, and integration with tools like Bamboo, [Bitbucket](../../Skills/Software%20Development/Bitbucket.md), [GitHub](../../Skills/Software%20Development/GitHub.md), and more. This application is great for teams that use [Scrum](../../Skills/DevOps/Scrum.md), kanban, waterfall, or no methodology at all. These users can access software-type Jira projects in any deployment type and work management projects in Cloud, which are called business projects in Server and Data Center. And the final type is Jira Service Management. It was previously called Jira Service Desk and contains features like service level agreements, cues for grouping requests based on type and severity, and additional reporting for workload and customer satisfaction. There's also a simple request entry interface called the customer portal, which integrates with [Atlassian](../../Glossary/Service/Atlassian.md)'s [Confluence](../../Skills/DevOps/Confluence.md) application to display self-service help articles. With this type, the HR team can collect benefits questions, and reimbursement requests, the facilities team can receive requests for new desks and chairs, and the legal team can process contract review requests. These users can access service management-type Jira projects in any deployment type and work management projects in Cloud, which are called business projects in Server and Data Center. In addition to application types, there are three deployment types. They are Cloud, Server, and Data Center. Now, I recommend reviewing all the information in this course, regardless of your current application or deployment type. Companies often add additional applications
>
> **[3:08](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=188)** or change deployment types over the years, or maybe you change jobs and find that your new company has one of the other types. It's a good idea to have a basic understanding of all types of Jira. The Cloud deployment type is hosted by Atlassian. That means Atlassian is responsible for application uptime, the database, and the mail server. Cloud has different capabilities, a different user interface, and is billed per user as a monthly or annual subscription. A cloud software is ever evolving, so you should expect frequent visual, feature, and terminology changes. Here's a screenshot of the default dashboard in Cloud. Now, don't worry if your screen looks different than mine. You might see different colors, a different layout, and customization specific to your company. Regardless of the look and feel of your application, the admin concepts in this course are the same. This screenshot shows some clues that the application type is Jira Cloud. First, look at the URL format in the browser's address bar. If it contains the domain [atlassian.net](https://atlassian.net), it means Atlassian is hosting it. Atlassian has future plans to let you customize this URL but for now, it's a quick and easy way to tell the difference between Cloud and the other deployment types. Another hint that you're in Cloud is there's no version number displayed at the bottom of the page. Also, find your application type by logging into my.[atlassian.com](https://atlassian.com) to view your licenses. Before we move on to the next deployment type, there's something to know. As you've probably heard,
>
> **[4:39](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=279)** Atlassian stopped selling new licenses of Server [products](../../Skills/Software%20Development/Microsoft%20Products.md) in February, 2021, and support for Server products ends on February 2nd, 2024. So what should you do if you have Jira Server? Customers need to switch to Data Center, migrate to Atlassian-hosted cloud products, or make alternate plans. For those of you that still have Server, it means the software is hosted independently. Your application may be hosted on premises, on a server in your [office](../../Skills/Web%20Development/Microsoft%20Office.md), in your Data Center with other internal applications, in a cloud server environment like Amazon AWS, [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md), or [Google Cloud platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md), or by a third party. The Server application has different capabilities and a different user interface. It's billed annually, but as mentioned before, new licenses are no longer available. Here's a screenshot of the same dashboard page in Jira Server. As you can see, the look and feel is slightly different from Cloud. Your application might have different colors, apps, and customizations as well. Even if your screen looks different than mine, the admin concepts are the same. Look at the URL format in the browser's address bar. In the screenshot, you can see my application is running on a local server. Your URL is likely customized to your company's domain name. Another way to tell this is Jira Server is because there's a version number at the bottom of almost every page. You'll need this version number to leverage the correct documentation. And of course, log in to my.[atlassian.com](https://atlassian.com) to view your licenses.
>
> **[6:12](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=372)** The last deployment type is Jira Data Center. It's just like Server except it's self-hosted, has similar server features and design, and is billed annually in tiers. Data Center is built for mission-critical environments, however. It includes multiple application nodes or instances for high availability, load balancing, redundancy, and disaster recovery. If you have multiple instances in Data Center, you'll see a unique identifier in the application's footer, and of course, check the products on your bill at my.[atlassian.com](https://atlassian.com). Now, one note for this course, Server and Data Center have the same user interface and similar features. Unless labeled otherwise, Server admins can leverage the Data Center information and vice versa. Here's a recap of the different types of Jira. So which application type do you have, and what deployment type do you have? It's important to know for two reasons. First, you need to know which set of documentation to reference. In the screenshot, you'll see there's different documentation for cloud and for each server version. And don't make my mistake and waste time reading the wrong information. Second, you can extend Jira's capabilities with apps from the Atlassian marketplace. In the screenshot example, this app is available for all three hosting options, but that's not true for every app, however, and sometimes app features differ between deployment methods. Always make sure that the app you're researching is compatible with your application type,
>
> **[7:44](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=464)** deployment type, and version.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jira](../../Skills/DevOps/Jira.md) (29), [Atlassian](../../Glossary/Service/Atlassian.md) (12), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (4), [Software Development](../../Topics/Software%20Development.md) (1), [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **Tools:** jira (29), bitbucket (1), github (1), confluence (1)
> **Env Vars:** url (4), jwm (1), jsm (1), aws (1)
> **CLI Commands:** make (3), find (2), aws (1)
> **URLs:** [atlassian.com](https://atlassian.com) (3), [atlassian.net](https://atlassian.net) (1)
> **UI Navigation:** switch to (1)
> **Definitions:** is called (1)
> **Analogies:** just like (1)

#### [Important terms and definitions](https://www.linkedin.com/learning/jira-basic-administration-17503968/important-terms-and-definitions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/important-terms-and-definitions?u=76281980&t=0)** - [Lecturer] Now that you know about the different application and deployment types, let's discuss some important terms and definitions. An issue is an individual item in [Jira](../../Skills/DevOps/Jira.md). Each time you create an item, you're creating a new issue with a unique key to identify it. An issue is any individual record in the Jira database. It could represent a request, a problem, a task, a to-do item, or a development item, like story, bug or epic. A project is a collection of issues. Now the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) project in Jira is different than an initiative your team is working on outside of Jira. Think of a Jira project as a container for all your team's initiatives, tasks and to-do items. There's generally one Jira project per department, system, team or application. You might have a project called "[Human Resources](../../Skills/Artificial%20Intelligence%20(AI)/Human%20Resources%20(HR).md)" to track all the different things the HR team works on. Next, a scheme is a configuration or collection of settings. A scheme allows you to use settings differently in the same project or share settings between multiple projects. For example, a bug issue type might function differently than a task issue type in the same project. Or the same issue type functionality may be shared between multiple projects. Schemes make this possible. A dashboard is a [Statistics](../../Skills/Data%20Science/Statistics.md)-based view of issues for one or more projects. A dashboard shows a lot of issue data at one time in formats like graphs, counts, trends and charts. There's a default system dashboard for everyone to use, and users can create custom [Dashboards](../../Skills/Data%20Science/Dashboards.md) too. A board is a view of issues from one or more projects.
>
> **[1:35](https://www.linkedin.com/learning/jira-basic-administration-17503968/important-terms-and-definitions?u=76281980&t=95)** It's an easy way to see the status of many issues at the same time. There are [Scrum](../../Skills/DevOps/Scrum.md) boards for teams that plan in chunks of work called sprints. There are kanban boards for teams with a less structured delivery schedule. And while scrum and kanban are development teams, any team can benefit from viewing their work on a board. Always be sure to refer to these terms by their real names. It avoids confusion between users when reading documentation and when communicating with [Atlassian](../../Glossary/Service/Atlassian.md) support. One more thing before we get started. Atlassian has changed terminology over the years, and some new terms were recently introduced. Add-ons, plugins, and additional code to enhance features are now called Apps. In cloud, Jira Service Desk is now called Jira Service Management. Project type names have also changed into your cloud. One type was first called traditional, then classic, and now named company-managed. Another type was once called independent, then next-gen, and is now team-managed. Some of the documentation and Jira settings will still reference previous terminology.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jira](../../Skills/DevOps/Jira.md) (9), [Scrum](../../Skills/DevOps/Scrum.md) (2), [Atlassian](../../Glossary/Service/Atlassian.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Human resources](../../Skills/Artificial%20Intelligence%20(AI)/Human%20Resources%20(HR).md) (1)
> **Tools:** jira (9)
> **Definitions:** is a  (4), is an  (1)
> **CLI Commands:** make (1)
> **Documentation:** the documentation (1)
> **Analogies:** for example (1)
> **Speakers:** - [lecturer] (1)

#### [Navigating the admin area](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980&t=0)** - [Narrator] Next, let's discuss the sections of the [Jira](../../Skills/DevOps/Jira.md) administration area. You'll need application admin permissions to access these settings. Here are the steps to access the application admin area in Jira Cloud. First, log into Jira with an application administrator account. Next, click the cog or gear icon at the top right. The menu contains links to the different admin areas. Click the [User Management](../../Skills/Web%20Development/User%20Management.md) option to add or manage users and groups. Click the billing option to go to the billing portal at [adminatlassian.com](https://adminatlassian.com). For settings related to the entire application, click the system option. There are a few additional application settings in the [products](../../Skills/Software%20Development/Microsoft%20Products.md) option, too. Click the projects option to see all existing projects and create new ones. The issues option contains all the settings related to issue configuration. This is the admin area where you're likely to spend the most of your time. Go here to manage issue types, workflows, custom fields, permissions, statuses, and other shared settings. The final option is apps. Go here to manage existing add-ons or to install new ones. And here's a tip, if you ever forget which page an admin feature is on, just type GG to find it. For example, type GG and enter the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) workflow in the search box. Jira will find any admin page with workflow in the title. Next, let's look at the admin area in Jira Server and Data Center. First, log into Jira
>
> **[1:33](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980&t=93)** with an application administrator account. Next, click the gear or cog icon at the top right. The menu contains links to the different admin areas. You may need to reauthenticate to access them. For settings related to version, license, and integrations, click the applications option. Click projects to see all existing projects and create new ones. Just like in Jira Cloud, the issues option contains all the settings related to issue configuration. You'll spend a lot of time in this area managing schemes and project settings. The next option is manage apps. Use this area to manage existing add-ons or install new ones. Click the user management option to add or manage users and groups, and if you've upgraded Jira, you may see a latest upgrade report link with upgrade history details. The last link is system. Click it to manage settings related to the entire application. If you have additional apps installed, you may see additional menu items as well. Don't forget to use the GG shortcut to find an admin feature. Type GG and enter the word workflow in the search box. Now you can go directly to the workflows page and save three clicks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jira](../../Skills/DevOps/Jira.md) (8), [User Management](../../Skills/Web%20Development/User%20Management.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Tools:** jira (8)
> **CLI Commands:** find (3)
> **Prerequisites:** install (2), you'll need (1)
> **Analogies:** for example (1), just like (1)
> **URLs:** [adminatlassian.com](https://adminatlassian.com) (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [narrator] (1)


### 2. Admin Types and Responsibilities

[↑ Back to Table of Contents](#table-of-contents)

#### [Types of Jira users](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-users?u=76281980&t=0)** - There are many different types of admin users, and their responsibilities vary depending on the type. Admins fall into one of the following categories: System-level administrators can perform every [Jira](../../Skills/DevOps/Jira.md) administration function. This level only exists in Server and Data Center. For Jira Cloud, [Atlassian](../../Glossary/Service/Atlassian.md) is your system administrator. Sys admins do things like configure the mail server, configure background services, and run health check tools. Application-level administrators can perform most Jira administration functions. like creating projects, managing users, and granting permissions. And project-level administrators can manage settings for individual Jira projects. They can create components, versions, and manage users in a specific project. While the abilities differ, a user can be multiple types of administrators at the same time. An application administrator may also be a project administrator. All users have a cog or gear icon at the top right of every page. The available options in the menu depend on the admin type, however. And by default in Server and Data Center, the role of the application administrator and system administrator is combined. Here's a screenshot at the global permissions page. The first two permission levels, JIRA system administrators and Jira administrators, are shown. While it's possible to have two separate access levels and divide up the responsibilities, many companies choose to leave them combined. On the right, the Jira administrator's group is listed for both permissions. Again, this only applies to Jira Server and Data Center.
>
> **[1:34](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-users?u=76281980&t=94)** There's no similar system level permission in Jira Cloud. And, of course, all application and deployment types have regular users who track their work in Jira. In Jira Service Management, technicians that resolve support requests are called agents. The users who request support are called customers, and customers may include internal users, external users, or both. All user types have different abilities and roles to play.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jira](../../Skills/DevOps/Jira.md) (11), [Atlassian](../../Glossary/Service/Atlassian.md) (1)
> **Tools:** jira (11)
> **Prerequisites:** configure (2)
> **Env Vars:** jira (1)
> **UI Navigation:** in the menu (1)
> **Speakers:** - there (1)

#### [Who does what?](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-does-what?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-does-what?u=76281980&t=0)** - [Instructor] Next, let's talk specifically about admin responsibilities. Here are a few of the duties of the system admin and server and data center. Many of the system admin functions are things you set up once and rarely change. For example, once the mail server's connected, it's unlikely to change settings very often. Sys admins can access tools used to monitor the application and keep it healthy. An example is running the integrity checker to find problems with issues, workflows and filters. Sys admins can also access options that impact performance and availability. For example, if the mail queue sending interval is increased, it slows the receipt of email notifications. Now, that might be good for the mail server but bad for users. It's important to understand the impact of your actions when you're wearing the system administrator hat. For the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this course, we'll refer to system-level administrators and application-level administrators as simply application admins. Application admins need to consider the health of the application, impact and maintenance implication for each decision and change they make. Here are some typical application admin responsibilities. Establish and maintain standards, communicate standards, procedures, changes and maintenance outages, assist end users with user-specific settings, assist project administrators with project settings and maintenance, complete customization requests or suggest alternatives, manage users, groups, roles and access, create and configure new projects and schemes,
>
> **[1:33](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-does-what?u=76281980&t=93)** remove projects and schemes when they're no longer needed, perform application upgrades for server and data center, vet, install and upgrade apps, connections and integrations, check server logs and address errors, develop and maintain documentation and user training materials, and monitor and ensure the overall health of the application. There's no shortage of work for a proactive [Jira](../../Skills/DevOps/Jira.md) administrator. While we're discussing responsibilities, let's examine what a project administrator does. Now, individual projects can have multiple administrators, and project admins typically set and maintain components, versions and other project-specific settings. They can manage project access, triage, assign and review issues as they're created, maintain issue data and accuracy, assist end users with issue, filter, board and dashboard questions and finally, assist the application admin team by reporting project problems and customization needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Jira](../../Skills/DevOps/Jira.md) (1)
> **Prerequisites:** set up (1), configure (1), install (1)
> **CLI Commands:** find (1), make (1)
> **Analogies:** for example (2)
> **Tools:** jira (1)
> **Speakers:** - [instructor] (1)

#### [Utilizing global permissions](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=0)** - [Instructor] Global permissions are application-wide settings that determine user and group abilities. Let's visit the global permission page in Server. First, log in with an application administrator account. Click the cog admin icon and select the System option. Then select Global permissions in the left sidebar. On the left are all the permissions for the entire application, and on the right are the users and groups who have that ability. This page looks similar in Cloud. Let's discuss each global permission and the different deployment types. While the naming differs slightly, the capabilities are the same. As previously discussed, the [Jira](../../Skills/DevOps/Jira.md) system administrators permission is only available in Jira Server and Data Center. Users or groups with this permission can perform every Jira function. The next permission, called administer Jira in Cloud, or Jira administrators in Server and Data Center, gives users or groups the ability to perform most admin functions. Give this permission to a small group of users who maintain the entire application. The browse users and groups or browse users permission is for user picker fields and sharing functions. Users must have this permission to select from a list of users in the application. If you have external users, like contractors or customers, you may want to limit this permission to avoid exposing employee names. The share [Dashboards](../../Skills/Data%20Science/Dashboards.md) and filters or create shared objects permission allows users to share custom filters, boards, and dashboards with other users, groups, and project roles.
>
> **[1:35](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=95)** So for example, the CMO needs this permission to share their dashboard with the marketing team. It's generally a good idea to allow users to share objects. Otherwise, everyone creates their own, meaning multiple copies of similar views. Next, manage group filter subscriptions allows users to create and delete subscriptions. A subscription is an email report of all issues returned by a filter. They're often created to alert users to new issues or specific issues needing attention. The make bulk changes or bulk change permission controls the ability to edit, move, transition, or delete multiple issues at once. With this permissions, users can change 1,000 issues at a time in the projects that they have access to. In Server and Data Center, this limit is configurable. You may want to exclude this ability for external users. The create team-managed projects permission only exists in Cloud. This allows regular users to create their own Jira projects. Team-managed projects are configured differently than the classic projects that only Jira admins can create. They're scheme-less, meaning they don't share settings with other projects. The default setting is to let everyone create these. You can leave the default setting as is or limit the ability. I like to limit this to the Jira admin team or a small group of power users. The final global permission is browse archive, which lets users access issues in archived projects. So who's allowed to do what in your application? What are your global permission settings?
>
> **[3:07](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=187)** And are there any adjustments that you should make? Review your settings from the Global Permissions page in the settings admin area.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jira](../../Skills/DevOps/Jira.md) (8), [Dashboards](../../Skills/Data%20Science/Dashboards.md) (2)
> **Tools:** jira (8)
> **CLI Commands:** make (2)
> **Env Vars:** cmo (1)
> **UI Navigation:** select the (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 3. Setting Up a Test Environment

[↑ Back to Table of Contents](#table-of-contents)

#### [Choose a test environment](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=0)** - [Narrator] It's shocking, but many organizations don't have a test environment. Now, I didn't have one when I first started out either, but I quickly saw how important it was to be able to experiment and learn without impacting production data. You need a place to see how your changes work with real life scenarios. Here's an example to your server application. I've used multiple methods to identify that this is a test environment. I changed the header color, so it's a different color than in production. I added an announcement banner at the top, and I changed the application's display name to TEST. I also changed my avatar icon, so it's different when I log in. Some organizations also changed the application logo. Do whatever you need to do to be able to distinguish between multiple applications. Here's some additional tips for your test environment. Disable email to avoid notifying end users with duplicate or fake data. Next, I recommend matching your test environment settings to production as much as possible. And use this environment to test the impact of major configuration changes, app installs, and maintenance activities. Here's a bonus tip for GR server and data center. Get read only access to the GR database. Understanding how the data is structured will solve a lot of mysteries, and make you a better admin. You'll be able to access additional data that's not available in the UI. So here's an example. Before I delete a project or a custom field, I always check the rec content database table to see which safe queries utilize that information. If I delete the JSC project, for example,
>
> **[1:35](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=95)** I can see that five filters are impacted, and will break. With this information, I can ask the filter owners to update their JQL, or delete any unneeded filters. And if I'm feeling especially nice, I take temporary control of the filters, and update them for the owners. You'll find the ability to change filter and dashboard owners in the system admin area. Here's some test environment options for Cloud customers using the [Atlassian](../../Glossary/Service/Atlassian.md) hosted environment. There's a built-in sandbox in Premium and Enterprise plans. Now, this is an isolated environment to test and experiment without changing real data. The Sandbox application has the same user limit as the production application that it's linked to. The Sandbox has its own URL, which is similar to the production URL. To create a Sandbox, log in as a Cloud organization administrator at admin.[atlassian.com](https://atlassian.com). Click the [Products](../../Skills/Software%20Development/Microsoft%20Products.md) link at the top, and click Sandbox on the left sidebar. If you have Cloud Premium or Enterprise, you'll see a Create button at the top right. Once the Sandbox is created, you can automatically copy production data to it. For information that can't be copied, import it or create it manually like you do in any other environment. Read more about the Sandbox feature at the URL shown. If you're an Atlassian marketplace developer, sign up for a free Development instance. Developer access is subject to the Atlassian developer terms, which is separate from the regular terms of service. This license is limited to five users.
>
> **[3:09](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=189)** Read more about it at developer.[atlassian.com](https://atlassian.com). Next, you can create a second application, and just pay for a few users. There's also a free version of Cloud. It's just like the paid version, except it includes less capabilities. It doesn't include project or issue permissions, so it won't help you test any of those areas. That's why I prefer the previous ideas. Next, you can start a new free trial. Now, this is helpful if you're testing the features of a different Cloud plan, and don't want to upgrade or downgrade the live application. And if you have no better option, create a test project in the production application. For data center customers hosting their own software, there's also a free license for development and testing purposes. Have your technical contact log in to [mydatalasting.com](https://mydatalasting.com) to generate the dev license. Make sure test environment settings match the production environment as much as possible. Don't forget to include reverse proxies, SSL, or load balancer settings. There's also a 30-day free trial available, and if you have no better option, create a test project and prod. Regardless of the method you choose, make sure you have a place to test your changes, before you unleash them on your users.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Atlassian](../../Glossary/Service/Atlassian.md) (5), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Env Vars:** url (3), test (1), jsc (1), jql (1), ssl (1)
> **CLI Commands:** make (3), find (1)
> **URLs:** [atlassian.com](https://atlassian.com) (2), [mydatalasting.com](https://mydatalasting.com) (1)
> **Analogies:** for example (1), similar to (1), just like (1)
> **Definitions:** is a  (1), is an  (1)
> **Best Practices:** don't forget (1)
> **Prerequisites:** make sure you have (1)

#### [Create a test environment](https://www.linkedin.com/learning/jira-basic-administration-17503968/create-a-test-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/create-a-test-environment?u=76281980&t=0)** - [Instructor] [Atlassian](../../Glossary/Service/Atlassian.md) offers free versions of their cloud [products](../../Skills/Software%20Development/Microsoft%20Products.md). Let's sign up for a free [Jira](../../Skills/DevOps/Jira.md) application so we can experiment. First, log into your Atlassian account at my.[atlassian.com](https://atlassian.com). Then visit the URL shown. Choose Jira from the list of free products and complete the signup form. Then complete the setup process by clicking a verification link sent by email. If you don't see the message be sure to check your junk mail folder. Once your instance is ready, sign in and complete the setup wizard. For data center Atlassian has getting started guides for AWS and [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md). Here's the general setup process for data center. First, have your technical contact log in to my.[atlassian.com](https://atlassian.com). Find Jira in the product list, and a link named View Developer license. Then copy the dev license key. Now you won't see this link if you have a starter community or open license, then visit the URL shown to use the platform installation guides or download an installer from Atlassian's archives. You can install Jira on an on-prem server in cloud data center, or on your local machine. Next, run the installer or start the setup in your environment. Here's a tip, Jira comes with an embedded H two testing database. Use it or connect to your own test database. Just don't connect to the production database. Once the application starts up, apply the license. In the admin area, visit admin applications, versions and licenses, and then paste in the dev key.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Atlassian](../../Glossary/Service/Atlassian.md) (6), [Jira](../../Skills/DevOps/Jira.md) (5), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2), [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1)
> **Prerequisites:** setup (4), getting started (1), install (1)
> **Tools:** jira (5)
> **Env Vars:** url (2), aws (1)
> **CLI Commands:** aws (1), find (1)
> **URLs:** [atlassian.com](https://atlassian.com) (2)
> **Speakers:** - [instructor] (1)


### 4. Managing Users

[↑ Back to Table of Contents](#table-of-contents)

#### [How to manage users](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=0)** - [Instructor] We talked about system, application and project level administrators. Now, let's discuss regular users. Users fall into one of the following categories. Work management users can access work management projects which have simplified views and business-specific features. Software users can access software-type projects in any deployment type and work management projects in cloud which are called business projects in server and data center. These users see all the development-specific features. Service management users can access service management projects, which contains support features like service level agreements. A service management user is an agent or a technician who responds to support requests. Agents can access service management-type projects in any deployment type and work management or business projects. Customers are unlicensed users who create support requests in the [Jira](../../Skills/DevOps/Jira.md) Service Management Custom Portal and this user type only exists in JSM. There's more to [User Management](../../Skills/Web%20Development/User%20Management.md) than adding and removing users. As an admin, you have the following user management duties. Create new users, invite new users or connect Jira to a central user repository. You can connect Jira to identity management and single sign-on tools like [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md), [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md), G-Suite, Okta, [Atlassian](../../Glossary/Service/Atlassian.md) Access, Crowd, and others. Next, admins need to deactivate user accounts when they're no longer needed.
>
> **[1:34](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=94)** Inactive users don't impact your license count. I suspend all my test accounts when I'm not using them. That's also a smart security measure. While it's possible to remove users, I don't recommend it. If you delete the user, you also delete their activity and change history, and that's an auditor's nightmare. I recommend making unneeded users inactive instead. Admins also need to manage application access and group membership. There are two parts to granting user access. First, a user must have permission to log into the application. This is the cloud user's profile page. This user has access to Jira software, which includes access to Jira Work Management. Here's the same user profile in server and data center. This user has permission to access Jira software and Jira Service Management. The number of active users with application access determines the license cost. The second part of user access is groups. Groups give specific permissions to many people. The default group names have changed over the years, so keep that in mind if your application is different. You can also add custom groups to segment users for granting permissions, sending notifications and more. Here's a tip. Even cloud applications have differences depending on when the site was created. My Cloud application created in 2014 has Jira users. The one I created in 2020 has Jira core users, and another one I created in 2021 has Jira Work Management users.
>
> **[3:09](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=189)** They all mean the same thing and are used in the same ways. At the bottom of a user's profile page is the group's area. This user inherits all permissions granted to people in the group shown. Here's a user profile page in server and data center. This user also has access to multiple applications and admin permissions are granted by membership in the Jira Administrators Group.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jira](../../Skills/DevOps/Jira.md) (11), [User Management](../../Skills/Web%20Development/User%20Management.md) (2), [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (1), [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Atlassian](../../Glossary/Service/Atlassian.md) (1)
> **Tools:** jira (11)
> **Env Vars:** jsm (1)
> **Cross-References:** we talked about (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Leveraging groups and roles](https://www.linkedin.com/learning/jira-basic-administration-17503968/leveraging-groups-and-roles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/leveraging-groups-and-roles?u=76281980&t=0)** - [Instructor] In addition to groups, there's one more user classification called project roles. Think of a role as a common function on a team, and a group as a list of users who perform the function. Here's a practical example using a soccer team. A soccer team has a coach, players, and fans. Here's how the team roles are reflected as [Jira](../../Skills/DevOps/Jira.md) project roles. The coach is in the administrator's role, the players are in the developer's role, and the fans are in the user's role. Some roles are created by default, like administrators and developers. And some companies create additional roles for their teams, like users, team, viewers, and testers. Next, let's populate the roles with users and groups. There can be one, many or none. For the coach, or project administrator's role, there's only one user named Chris. There's no need to create a custom group for only one user. For the player's or developer's role, there are three users, so I created a group called Soccer Players. I also created a group called Soccer Fans for the fans or user's role. By using roles and groups, we can separate what people can do in a project. For example, we'll allow people in the developer's role to create, edit, schedule, and resolve issues. And we'll allow people in the user's role only to create and edit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jira](../../Skills/DevOps/Jira.md) (1)
> **Tools:** jira (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Add a test user](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-add-a-test-user?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-add-a-test-user?u=76281980&t=0)** - Here's a challenge to complete in your test application. Log into [Jira](../../Skills/DevOps/Jira.md) as an application admin and create a test user with the following specifications. Here's a tip. Give the test user a real email address that you have access to. Jira server and data center will attempt to send email notifications 10 times before it quits. Don't tie up the mail queue with fake email addresses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jira](../../Skills/DevOps/Jira.md) (2)
> **Tools:** jira (2)
> **Speakers:** - here (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17213039?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17213039?u=76281980&t=0)** - [Instructor] Were you able to add a local test user? This account will be helpful for testing permissions and what normal users see. Heres how to do it. We'll use [Jira](../../Skills/DevOps/Jira.md) Server in this example. First, log into Jira as an admin, and go to the [User Management](../../Skills/Web%20Development/User%20Management.md) area. Click the create user button at the top right. Then enter the email address, full name, username, and password. Next, choose applications for this account. Then click the form submission button. The new user is listed at the top of the page. They were automatically added to the default Jira software users group. You can also use the invite users button at the top right. That's the way to add users in Jira Cloud as well. Invited users will receive an email with login instructions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jira](../../Skills/DevOps/Jira.md) (4), [User Management](../../Skills/Web%20Development/User%20Management.md) (1)
> **Tools:** jira (4)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Creating Jira Projects

[↑ Back to Table of Contents](#table-of-contents)

#### [Types of Jira projects](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-projects?u=76281980&t=0)** - [Instructor] We previously discussed the different types of [Jira](../../Skills/DevOps/Jira.md) applications and their project types. As you may remember, there are multiple types for different uses. We also defined projects as a collection of Jira issues. All application types come with templates to help quickly build new projects. Example cloud templates are shown on the left and server templates are on the right. It's important to choose the right project type for your use case. It's possible to change project types later in server and data center, but switching is harder to do in cloud, in cloud, you'll need to create a new project and migrate existing issues to it. When a project is created, Jira automatically creates new project settings called schemes. Two schemes are highlighted in the screenshot. Project will automatically have a new issue type, workflow, screen, field configuration and permission scheme to help you get started. In the next section, we'll create a new project. We'll use the default schemes but it's good to know that these settings exist, they're customizable and they can be shared between multiple projects. One more thing before we move on. Some templates in cloud also provide a choice between team-managed and company-managed projects. Company-managed projects use schemes that are managed by Jira administrators. Team-managed projects are schemeless and are managed by regular users. The user and admin interface is slightly different between the two options. We'll focus on company-managed projects in this course but check out my [Planning and Releasing Software with Jira](Planning%20and%20Releasing%20Software%20with%20Jira.md) course and [Jira Service Management- Administration](Jira%20Service%20Management-%20Administration.md) course
>
> **[1:35](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-projects?u=76281980&t=95)** to learn more about the team-managed type.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jira](../../Skills/DevOps/Jira.md) (6)
> **Tools:** jira (6)
> **Cross-References:** in the next (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [How to create a project](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=0)** - [Instructor] Every test environment needs a sample project. Let's create one in [Jira](../../Skills/DevOps/Jira.md) Cloud and fill it with test data. To use sample data in cloud we need to create a board and a project at the same time, let's try it. Click on the search bar and click Boards at the bottom. This takes you to the page listing all the boards. Next, click the Create board button. Let's create a Kanban board for our test project. Click the Kanban sample data link. On the next screen, name the new Jira project. In the project name field create a short but descriptive name. If this project was for the HR department I'd enter enter [Human Resources](../../Skills/Artificial%20Intelligence%20(AI)/Human%20Resources%20(HR).md). This is a test project though so I'll enter test. In the project key field choose a unique code to represent the project. A good key for the Human Resources Project is HR, but since this is the test project, I'll enter test. You can change the project lead if desired. The project lead is a single point of contact. Sometimes this person is also the default assignee for all issues created. Then click the form submission button. You did it, the next screen is a board for a new project with sample issues automatically created. I'll open the first sample issue called TEST-1. Use the sample project to test configuration changes or demo Jira to others without impacting real production data. Let's create a sample project into your server and fill it with test data. Click the admin cog icon and select Projects. Then, click the Create project button.
>
> **[1:34](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=94)** In the overlay, click the Create sample data link at the bottom. On the next screen, choose a project template. I'll choose Project management and then click Next. On the next screen, set the project's identifying features. In the project name field create a short but descriptive name. If this project was for the IT department I'd enter information technology, but it's a test project so I'll enter test. In the project key field choose a unique code to represent the project, a good key for the information technology project is IT. Since this is a test project, I'll keep the suggestion of TEST. You can change the project lead if desired. The project lead is a single point of contact and sometimes this person is also the default issue assignee. Then click, the form submission button. That's it, the next screen shows the sample issues created. Here's the first sample issue called TEST-1. Now, you have a place to test configuration changes, or demo Jira to others without impacting production. Let's look at the settings in our new test project in Jira cloud. Click the admin cog icon and select Projects. Then, select the test project from the list. Click the Project settings link at the bottom of the left nav, and finally click the summary link on the left. The Summary page shows all the settings and schemes powering the project. Settings for issue types and workflows are on the left and versions and components are on the right. Next, we'll take a quick look
>
> **[3:08](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=188)** at project settings in Jira server. Click the admin icon and select Projects. Then, select the test project from the list. By selecting a project from the application admin area you can skip a step, you're automatically directed to the summary page, which shows all the project settings and schemes. Just like in cloud, the settings for issue types and workflows are on the left and versions and components are on the right. While both application admins and project level admins can view the project settings page some changes are unavailable to project admins. First, a project admin can't change a project's issue types so if the current issue types are task and sub task and they would like Epic, story and bug instead an application administrator needs to make that change. In Server and Data Center it's possible to delegate limited workflow and screen editing capabilities to project admins. Application admins can turn on these functions with a checkbox labeled extended project administration in a project's permission scheme. Let's continue exploring the main project settings. Only application admins can change fields, the list of priority selections and edit settings. Both application and project admins can manage versions, components and roles. Project admins can see the permission, notification and development tool settings, but only application admins can change them. Application admins can also connect projects to other development tools.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jira](../../Skills/DevOps/Jira.md) (6), [Human resources](../../Skills/Artificial%20Intelligence%20(AI)/Human%20Resources%20(HR).md) (2)
> **Tools:** jira (6)
> **UI Navigation:** select the (2), click on (1), open the (1), checkbox (1)
> **Definitions:** is a  (5)
> **Env Vars:** test (3)
> **CLI Commands:** make (1)
> **Exercise Files:** template (1)
> **Analogies:** just like (1)

#### [Challenge: Create a test project](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-test-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-test-project?u=76281980&t=0)** (peppy digital music)
>
> **[0:08](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-test-project?u=76281980&t=8)** - [Instructor] Now it's time to create a test project of your own. Here are the instructions for this challenge. Log into [Jira](../../Skills/DevOps/Jira.md) as an admin, create a test project and fill it with sample data. Use the provided specifications. Already have a test project? No problem. How about creating a project to demo JIRA to others or to track your JIRA configuration changes? Create whatever makes sense for your organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jira](../../Skills/DevOps/Jira.md) (3)
> **Env Vars:** jira (3)
> **Tools:** jira (3)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (peppy digital music) (1)

#### [Solution](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214010?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214010?u=76281980&t=0)** - [Instructor] Were you able to create a test project and fill it with sample data? Here's how to do it. We'll use both cloud and server in this example. As you may remember, to leverage sample data in cloud, start by creating a board. Click on the search bar and click Boards at the bottom. Next, click Create board on the top right. In the overlay, click the Kanban sample data link. Then enter a project name, a project key, the project lead and click the form submission button. That's it. Now, there's a test project, a board and sample issue data. To create a test project in server, simply go to the Projects page and click the Create project button. Click the Create sample data link at the bottom of the overlay. Then choose the Project management template. Enter a project name, a project key, the project lead and click the form submission button. Now, there's a test project and sample issue data.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (1), go to (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Creating Workflows

[↑ Back to Table of Contents](#table-of-contents)

#### [Types of workflows](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980&t=0)** - [Instructor] A workflow is a set of statuses and transitions that each issue goes through in its lifecycle. Statuses are simply the different steps and transitions represent the movement between steps. A workflow represents a real business process, like building and deploying software, onboarding a new hire marketing a product or service, or supporting customers. Different workflows are often built based on the type of work. There are simple task workflows, development workflows, support workflows, and other workflows for custom processes in your organization. When you create a new project, [Jira](../../Skills/DevOps/Jira.md) automatically creates a new workflow for it. If the default workflow doesn't meet your business needs, create a custom one. Jira comes with some pre-built default workflows, like the ones in this screenshot. Some are editable and some are not. The last workflow was automatically created when the Jira demo project was created. Let's take a closer look at the workflow called Jira. Interestingly, the workflow admin page says it was last updated in 1969. I don't think we had Jira back then. Here's the default workflow named Jira in diagram mode. You can't change this workflow, but you can copy it and make changes to the copy. The boxes represent the statuses. Gray signifies issues in the beginning of the lifecycle. Blue are statuses in the middle and green are at the end. Older versions of Jira might also have dark blue and yellow statuses. The colors give users a visual representation of where issues are in the workflow.
>
> **[1:34](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980&t=94)** Additionally, users can query for all issues in a status category. In this example, issues in the backlog and selected for development statuses were both returned because both statuses are in the same status category. Okay, back to the default workflow. The lines between the status boxes represent transitions. The resolve issue transition leads to the resolved status. Transitions leading to a status are sometimes called incoming transitions. Transitions leaving a status are sometimes called outgoing transitions. Now, if you've read my book, you know how I feel about the resolved status and its transitions. Resolved and closed are confusingly similar names, especially for non-development teams. I believe there should only be one final status that indicates all work is done. Otherwise, issues languish in a status like resolved forever which impacts reporting accuracy. Here's the exact same workflow, but in text mode. Text mode shows a workflow in a table format. In the open status, clicking the start progress transition moves an issue to the in progress status. Clicking the resolve issue transition skips to the resolved status, and clicking the close issue transition skips all the way to the final closed status. We'll talk more about statuses, transitions and editing modes in the next section.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jira](../../Skills/DevOps/Jira.md) (7)
> **Tools:** jira (7)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Basic workflow concepts](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=0)** - There are three different workflow states to be aware of, active, draft, and inactive. An active workflow is currently used by one or more projects. You can't delete an active workflow. To delete, you must make the workflow inactive by reassigning any projects using it. When you edit an active workflow, a draft is created. That way, there's no impact to a live project until the draft is published. When you publish the draft, [Jira](../../Skills/DevOps/Jira.md) will help migrate existing issues to new statuses if needed. There's one unpublished draft in the screenshot. In server and data center, drafts are shown with an information icon. This screenshot shows I'm editing a draft of an active workflow. There are some draft editing limitations to be aware of. First, you can edit a workflow's description, but not its name. The workaround is to copy the workflow and rename the copy. Next, you can't remove a status. The workaround is to point any transitions to other statuses. Even though the status is still shown, the issue won't go through it during the workflow. Finally, you can't add new outgoing transitions to a status that didn't already have them. The last state is inactive. Inactive workflows aren't in use by any projects and therefore have no editing limitations. Edit them any way you'd like or even delete them. In cloud, click the inactive workflow tab at the top of the page. In server and data center, there's an inactive section that expands at the bottom of the page. Let's dig deeper into statuses.
>
> **[1:33](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=93)** As mentioned earlier, a status describes an issues current lifecycle state. Jira comes with default statuses like to do, in progress, done, open, and closed. Jira software adds additional default statuses, like backlog and select for development. Jira service management adds additional default statuses too, like waiting for support and escalated. You can also add custom statuses like in review, pending approval, or on hold. Status names must be unique. Jira won't allow you to create duplicates. Also, a status must already exists before you can add it to the workflow. Statuses are global elements and that means they're shared between workflows. An issue status is displayed in many places. It's pictured here in an issue, but you can also see it on boards, and [Dashboards](../../Skills/Data%20Science/Dashboards.md), and search results, and in reports. The status information looks different between deployment types and depending on how projects are created. [Atlassian](../../Glossary/Service/Atlassian.md) is constantly experimenting with the user interface, especially in cloud. It's okay if your screen doesn't look exactly like my examples. Each status has a category. A status category helps a user identify where in the workflow of the issue is. There are three status categories, to do, in progress, and done. Now, don't confuse these with statuses that might have the same name. Selecting a category is required and category names are not editable. Each category has a unique color. End users will see the colors, and issues,
>
> **[3:05](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=185)** and workflow diagrams, and, as I mentioned earlier, users can query for all issues in a particular status category. The colors have changed over the years, so don't worry if yours are different. When you create a status, it's important to associate it with the most logical category selection. Early workflow statuses like open or new belong in the to-do category. Statuses in the middle of the workflow, like in development or being verified, belong in the in-progress category. And, statuses at the end of the workflow, like closed or done, belong in the done category. Take a look at your status categories and make sure they make sense. Now, let's talk more about transitions, which are what the user clicks to move issues between statuses. The screenshot shows three transitions for the in progress status. From left to right, there are stop progress, start progress, and done. Each transition creates options in cloud or buttons in server and data center. Both examples have the exact same transition options. They're just displayed differently. I classify transitions into four categories. Forward transitions progress issues in the workflow and this is the expected path. Each time an issue moves forward and moves closer to its final status. The start progress transition moves issues from the to-do status forward to the in-progress status. Backward transitions move issues back to a previous step in the workflow. These are often used when more information is needed, when a step needs to be repeated, like an approval, or when the issue was transitioned too far forward
>
> **[4:39](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=279)** by mistake. The stop progress button in the in-progress status is a backwards transition. Alternate transitions give users a choice. In the approval workflow pictured, the forward choice is approved and the alternate choices reject. These transitions allow users to choose the best option for the situation. The final transition type is global. A global transition allows all statuses to transition to another status. For example, allow an issue to jump to the done status from anywhere in the workflow. In diagram mode, a global transition is shown with the all label. In text mode, a global transition is shown in metallics. You can only create global transitions from diagram mode. You can edit or delete them in either mode however. With global transitions, there are fewer transitions to create and maintain. In the screenshot on the right, notice the ID for the global done transition is 71. Editing any transition label 71 modifies them all.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jira](../../Skills/DevOps/Jira.md) (5), [Dashboards](../../Skills/Data%20Science/Dashboards.md) (1), [Atlassian](../../Glossary/Service/Atlassian.md) (1)
> **Tools:** jira (5)
> **CLI Commands:** make (3)
> **Warnings:** be aware (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - there (1)

#### [Using diagram and text mode](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-diagram-and-text-mode?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-diagram-and-text-mode?u=76281980&t=0)** - Let's talk a little bit more about the two workflow editing modes. On the left is the workflow in diagram mode, and on the right is the same workflow in text mode. Now, each mode has its pros and cons. Diagram mode is the simplest and easiest view. It's also the view the end users see. This mode includes a workflow designer, which lets you add statuses and transitions, modify the diagram visually by dragging status or transitions around the screen, edit transition properties and behaviors, and add global transitions. As previously mentioned, global transitions can only be created in diagram mode. Text mode is the more advanced editor. You can edit statuses and transitions, plus work directly with the steps. Now, I prefer text mode. For me, transitions are easier to understand when they're in table format. Switch between diagram and text mode using the tabs at the top of the page.

> [!info]- Semantic Content
>
> **Speakers:** - let (1)

#### [Challenge: Create a workflow](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-workflow?u=76281980&t=0)** (light upbeat music)
>
> **[0:08](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-workflow?u=76281980&t=8)** - [Instructor] Let's create a new workflow based on the one automatically created for the test project. First, you'll need to find the correct workflow and make a copy. Here are the steps. Log in to [Jira](../../Skills/DevOps/Jira.md) as an admin and go to the Admin area for the TEST project. Then click the Workflows link in the left sidebar. Record the name of the workflow, which is Software Simplified Workflow for project TEST. Now that we know the name of the workflow, let's copy it. Leave the Project Admin area and go to the Workflows admin page instead. Find the TEST project's workflow and click the Copy link on the right. Then in the overlay, give the new workflow a different name, a different description, and click the Form Submission button. The provided description doesn't apply to our new workflow, so I'll remove it. Now that you have a draft workflow, you're ready for the challenge. Here are the instructions. Imagine you're building a new workflow for a business team. Since the team doesn't do development work, you'll need to change some wording. Change the Selected for Development status to the more generic To Do status. Also change the Selected for Development Transition to read To Do. Next, this team has a prioritization process. They don't want issues moving straight from the backlog to the In Progress status. They've asked you to remove the global In Progress transition. As a result, the workflow has no transition from the To Do status to the In Progress status. Add a single transition to fix that. When you're finished, the new workflow should look like this example. I'll wait while you try it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jira](../../Skills/DevOps/Jira.md) (1)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** test (3)
> **UI Navigation:** go to (2)
> **Prerequisites:** you'll need (2)
> **Tools:** jira (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Solution](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=0)** (light upbeat music)
>
> **[0:07](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=7)** - [Instructor] Were you able to copy an existing workflow and change it? Admins are often asked to make small changes to existing workflows, and starting from a copy is an easy way to do it. Here are the steps. We'll use [Jira](../../Skills/DevOps/Jira.md) Cloud in this example. First, go to the admin area for all Workflows. Then copy the TEST project's workflow. Give the new workflow a name and change or remove the previous description. Now there's a new inactive workflow to modify. First click the Edit link to change the status, change the Step Name and the Linked Status fields. Next, click one of the global Selected for Development transitions and click the Edit button on the top right. All we need to do is change the transition's name. The transition is already pointed to the correct destination step. We're done editing this transition, so click the workflow's name to return to it. Next go to Diagram mode, which is better for managing global transitions. Click the All label next to the In Progress status and click the Delete transition link on the right. I prefer Text mode, so I'll go back to that view. Click the Add transition link to create a transition from the To Do to In Progress status. Give the transition a name. Select the proper destination step and click the form submission button. That's it. Here's our completed workflow in Text mode,
>
> **[1:41](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=101)** and here it is in Diagram mode. Now that you've created a custom workflow, let's apply it to the TEST project. Here are the steps. We'll use Jira Cloud in this example. First log into Jira as an admin and go to the summary page for the TEST project. Under the Workflows header, find the workflow scheme called TEST Software Simplified Workflow Scheme and click the scheme to modify it. This scheme has one workflow called Software Simplified Workflow for project TEST. That workflow is used for all issue types in the project. Let's change it so Story and Bug use the existing workflow and Epic task and Sub-task use a different workflow. Click the Add Workflow button and select Add Existing. In the overlay, choose the custom workflow you created and click the form submission button. Then select the Epic, Sub-task, and Task issue types. Then submit the form. Now there's a draft workflow scheme with two different workflows. Click the Publish button to apply the change. There are existing issues in the TEST project, so we need to map old issue statuses to their new equivalents. Change any issues in the Selected for Development status to the To Do status and click the form submission button. Jira will migrate any impacted issues to the new workflow. There are 16 issues in the test project, but only one issue, TEST2, is impacted. When the migration is complete, click the Acknowledge button. That's it.
>
> **[3:13](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=193)** The workflow scheme is published. The workflows are active and the change is applied to the TEST project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jira](../../Skills/DevOps/Jira.md) (4)
> **Env Vars:** test (7), test2 (1)
> **UI Navigation:** go to (3), select the (2)
> **Tools:** jira (4)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** go back to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 7. Troubleshooting Permission Problems

[↑ Back to Table of Contents](#table-of-contents)

#### [Types of Jira permissions](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=0)** - [Instructor] There are a lot of permission types in [Jira](../../Skills/DevOps/Jira.md). We've already talked about three which are granting application access, global permissions, like the ability to administer Jira, share objects, like filters and [Dashboards](../../Skills/Data%20Science/Dashboards.md), and make bulk changes, and we covered how memberships in project roles and groups grant abilities. The other permission types are project level, issue level, and workflow level. Let's look at each and how their schemes work. Each project has its own permission settings for actions, like creating, editing, assigning, and closing issues. Use these settings to allow users to assign issues, but restrict who they can be assigned to, allow read-only access or deny access to an entire project. You can do that and much more. Each project's permissions are controlled by a permission scheme. In the example, the administered project's permission is granted to project admins and third party [Atlassian](../../Glossary/Service/Atlassian.md) apps. The browse project's permission is granted to any logged in user and also third party apps. There are over 30 different abilities to set in a permission scheme. While we're talking about schemes, we also need to talk about their relationship to projects. We'll start slow and build up to a more complex example. Now, if you find this stuff confusing, you're not alone. It took me a long time to understand the mapping of schemes to projects. But don't worry, it will make more sense as you gain more admin experience. All right, let's discuss how a permission scheme maps to a Jira project. Jira comes with a scheme named default permission scheme. Each Jira project has only one permission scheme,
>
> **[1:34](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=94)** but the same scheme can be shared by multiple projects. In this example, one scheme is powering the sales, legal, and dev projects. Therefore, all projects have the same permission settings. Here's an example of this model. Let's say the scheme restricts the delete issue permission to users in the administrator's role. That means the restriction applies to the different admins in all three projects. Chris can delete issues in the sales project and the legal project, but not in the dev project. If you use roles and groups, only one permission scheme is needed to accomplish this. If you have [Software Projects](../../Skills/Software%20Development/Software%20Projects.md), you'll see another scheme named default software scheme. Atlassian assumes your dev teams need different abilities than your business teams. If this is true, keep the software scheme. And if not, just remove it. In this example, the sales and legal projects use one scheme and the dev project uses another. So let's say you want to restrict issue deletion in the sales and legal projects, but allow it in the dev project. This is accomplished by using two different schemes. And finally, there's a scheme named Jira service desk permission screen for your service desk and service management projects. It's okay if you have just one permission scheme or a few, but you certainly don't need one scheme per project. Too many schemes are a maintenance problem. As I mentioned, there are over 30 different abilities to set in a permission scheme. For Jira service management, there's an additional permission called service project agent or service desk agent. This permission allows users to interact
>
> **[3:08](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=188)** with portal customers and access support-specific features. In Jira software, there are a few additional permissions for managing sprints and viewing development information, like commits and build information. All right, back to our permission discussion. In addition to securing actions in a project, you can also secure individual project issues with issue security schemes. In the screenshot, there are two security levels, confidential and sensitive. We can use these levels to allow team members to see most issues and allow leadership to see all issues. Each level of security contains different project roles, groups, custom field members, and more. The sensitive level is set as the default. Here are some tips. It's safer to automatically restrict access to all issues and grant access to others with additional levels. Otherwise, you're giving access to all and hoping that users remember to restrict the most sensitive issues. It's really easy to forget to do this. Data is often inadvertently exposed in notification messages and reports. This strategy is sometimes called the least privileged principle. The user is given the minimum level of access that's needed to do their work. My other tip is if you want the user who created the issue to participate during the issue's lifecycle, don't forget to add the reporter to the applicable security level. Unlike other schemes, issue security schemes are not automatically created. If you need one, you must manually create it, add levels, add users and groups to the levels, and associate it with a project.
>
> **[4:42](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=282)** Keep in mind many issue security schemes and levels can impact performance. Projects are not required to have an issue security scheme. In this example, the legal project has one, but the other projects don't, and that's a common use case. Not all organizations need issue security, and if they do, probably only a couple projects contain sensitive data. Don't create issue security schemes if you don't need them and don't create more than you actually need. There's one more permission to know about in the workflows area. Let's say you want to restrict the approval ability, like in this example. Simply add a condition to hide the transition from regular users. In the screenshot, I've restricted the past transition in the awaiting approval status to the users in the administrator's role. Now only project admins can transition issues through to the status. If a user can't see a transition, be sure to check the workflow for embedded restrictions. The workflow scheme relationship is more complex than the others we've covered. Each project has one workflow scheme, but it's possible to have multiple workflows in the scheme. The test project we created earlier has the following default issue types, bug, story, epic, task, and sub-task. One workflow scheme with one workflow was automatically created for us. The simplest setup is when every issue type uses the same workflow. Here's a common example for a development team that's a little more complex. The workflow scheme has two workflows. One is for bugs and stories, and the other is for epics, tasks, and sub-tasks.
>
> **[6:16](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=376)** Bugs and stories often have an additional workflow step, like approval or a verification or a deployment. So this model allows some issues to have extra steps and the others to use a shorter workflow. All right, let's compare the two examples. The test project uses a workflow scheme with one workflow. The dev project uses a workflow scheme with two workflows. As you can see, schemes are very powerful, but they can also easily become unmanageable. You probably don't need a workflow for each issue type and you definitely don't need a different workflow for each issue type in each project. Keep your settings simple, especially in the beginning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jira](../../Skills/DevOps/Jira.md) (8), [Atlassian](../../Glossary/Service/Atlassian.md) (2), [Dashboards](../../Skills/Data%20Science/Dashboards.md) (1), [Software Projects](../../Skills/Software%20Development/Software%20Projects.md) (1)
> **Tools:** jira (8)
> **CLI Commands:** make (2), find (1)
> **Best Practices:** remember to (1), don't forget (1)
> **Cross-References:** we covered (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Using the Permission Helper](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-permission-helper?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-permission-helper?u=76281980&t=0)** - [Instructor] There are a lot of permission types, schemes and places to look when users report access problems. Luckily, there's a feature to help troubleshoot permissions. It's called the Permission Helper. It uncovers why a user can or can't interact with an issue. For example, a user might not be in a needed group or project role. Try using this tool to start a permission investigation. There are a few ways to get to it. First, go to the System page in the Admin area and click the Permission Helper link in the left nav, as shown. Next, access the Permission Helper from a permission scheme. Go to the Permission Schemes page in the Admin area. Open any scheme and look for the Permission Helper button on the top right. In Server and Data Center, you can also access the Permission Helper from the Admin menu in an individual issue. Next, let's look at how the Permission Helper solves problems, here's a scenario, a user reports they cannot delete issue INDT-40. Let's use the Permission Helper to find the reasons why. Enter the user's name, enter the issue ID, enter the permission to check, which is delete issues and click the form submission button. Here are the results. The Permission Helper shows the user does not have the delete issues permission. Additionally, it shows that no one else has that permission either. Now, this is by design in line to your application. As you may remember, I recommend disabling issue deletion. You can never get a deleted issue back so it's better to simply close issues that you don't need anymore.
>
> **[1:32](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-permission-helper?u=76281980&t=92)** From here, either add the user to the need permission, or teach them how to close issues instead of deleting them. Here's a tip, the Permission Helper won't check inside workflows, or third-party app settings. You'll need to check those permission settings manually. There are multiple ways to solve problems in [Jira](../../Skills/DevOps/Jira.md). The best way depends on your business goals, application size, compliance requirements, and other factors. When deciding what to do always consider the health and future of your application. Then, pick the best method for your circumstance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jira](../../Skills/DevOps/Jira.md) (1)
> **UI Navigation:** go to (2)
> **CLI Commands:** find (1)
> **Env Vars:** indt (1)
> **Tools:** jira (1)
> **Analogies:** for example (1)
> **Warnings:** troubleshoot (1)
> **Prerequisites:** you'll need (1)

#### [Challenge: Determine the permission problem](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-determine-the-permission-problem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-determine-the-permission-problem?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:08](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-determine-the-permission-problem?u=76281980&t=8)** - Here are the instructions for this challenge. Use the permission helper to determine the problem. Figure out why the test user you created can't modify the reporter in your test project. Once you've uncovered the problem, decide if you need to make a change to the project or the permission scheme. If you make a change, rerun the permission helper to make sure the problem is remedied. You can also log in as the test user to verify the permission.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Speakers:** - here (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### [Solution](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution?u=76281980&t=0)** (peppy digital music)
>
> **[0:08](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution?u=76281980&t=8)** - [Instructor] Were you able to detect the permission problem? Here's how to do it. We'll use [Jira](../../Skills/DevOps/Jira.md) server in this example. First log into JIRA and go to one of the permission helper locations. I'll use the one in the System Admin area. Enter the user, the issue, the permission, and click the Form Submission button. Then scroll down to see the results. The problem is the user doesn't have the needed permission. Also, click the Show Failed Conditions Link for additional information. It shows this permission is restricted to Project Administrators. Now that you know what the problem is there are three ways to solve it. They are; make the user an admin in the project, add the user to the Modify Reporter line in the permission scheme, or do nothing. Which do you think is the best choice? This account is for a regular user so don't make them a Project Admin. If it's all right for the user to change the reporter then update the permission scheme. Otherwise, there's no need to take any action. Great. You've completed the challenge by detecting the problem.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jira](../../Skills/DevOps/Jira.md) (2)
> **CLI Commands:** make (2)
> **Env Vars:** jira (2)
> **Tools:** jira (2)
> **UI Navigation:** go to (1), scroll down (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (peppy digital music) (1)


### 8. Troubleshooting Missing Notifications

[↑ Back to Table of Contents](#table-of-contents)

#### [Types of Jira notifications](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-notifications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-notifications?u=76281980&t=0)** - [Instructor] Each issue activity is associated with an event. For example, an event called issue created is triggered for each new issue. When the event occurs, [Jira](../../Skills/DevOps/Jira.md) automatically sends an email notification for it. There are about 17 notifications like issue created, issue closed, and work logged on issue. You can also create your own custom events if needed. The many project notifications are controlled by a notification scheme. Jira comes with one called Default Notification Scheme that's associated to projects created. Use the default scheme, create a custom one, or use no scheme at all. The screenshot shows the default scheme and its first three events. The issue created event notifies the current assignee and reporter for each new issue in the project. The issue updated event emails the current assignee, reporter and all watchers for each change. Issue updated includes changes to fields, attachments and deleted comments. The issue commented event, however, handles new comments. Projects are not required to have a notification scheme. In this example, most projects use one but the HR project doesn't. The HR team prefers a proactive approach instead of constant emails. Members of this team use boards, [Dashboards](../../Skills/Data%20Science/Dashboards.md) and filter subscriptions to monitor their issues, or maybe they've connected their Jira project to their chat program and receive notifications there. When's the last time your user said, "I wish I had more email?" Probably never, so these notification abilities should be applied sparingly. If you send a notification for every little action,
>
> **[1:37](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-notifications?u=76281980&t=97)** users are likely to ignore them or send them directly to the trash. It's important to send the right amount of notifications for your organization. There are two additional notification settings to be aware of, user default settings and user profile settings. Here's some info about each. By default, users are not notified of their own changes. Usually people know what change they made and they don't need an email about it. Now, this is a global setting that only application admins can access. Check to see what your application setting is. You'll find it on the user default settings page in the system admin area. There's also a notification setting in a user's personal profile. In cloud, the setting is called you make changes to the issue. In server and data center, the setting is called my changes. This lets users override the global default with a different setting if desired. Sometimes I temporarily enable the option to test notification behavior, but then I quickly turn it back off again. I definitely don't need more email.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jira](../../Skills/DevOps/Jira.md) (3), [Dashboards](../../Skills/Data%20Science/Dashboards.md) (1)
> **Tools:** jira (3)
> **Definitions:** is called (2), is a  (1)
> **CLI Commands:** find (1), make (1)
> **Analogies:** for example (1)
> **Warnings:** be aware (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Using the Notification Helper](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=0)** - [Instructor] Sometimes users don't receive messages they expect [Jira](../../Skills/DevOps/Jira.md) to send. There are many non-Jira potential reasons. For example, outgoing mail is disabled application wide, there's a problem with the mail server or it's currently down for maintenance. There's a temporary connection issue between Jira and the mail server, or maybe connection details changed. The user's mailbox is misconfigured, can't receive external messages or is full. There's a typo in or a different email address in the user's Jira profile. Jira messages are blocked or flagged to spam at the server or user level, or mail client rules remove Jira messages from the inbox. Here are some Jira-related reasons. A Jira project doesn't have a notification scheme. The scheme is misconfigured, empty or the user is not in the needed group or role. The user has disabled notifications of their own changes in their Jira profile, or the user expects a message that doesn't exist. For example, there are no notifications when watchers are added or removed. That's not a Jira feature, but sometimes users think it is. Other times, a user does receive a message, but it says something generic and they overlook it. The message says, issue updated, but they're expecting other wording. Now, I've been using Jira since 2011 and I've encountered all of these scenarios. I've never experienced a case where Jira should have sent an email but didn't. The problem was always something else, like an issue with the mail server, the user's mailbox, or with the notification schemes configuration. The trouble I've encountered
>
> **[1:34](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=94)** was always traceable and reproducible. I haven't encountered any unsolvable Jira notification mysteries. As you can see, there are a lot of potential email issues to troubleshoot. Luckily, there's a Jira feature to check some of it. It's the notification helper. It uncovers why a user does or doesn't receive an email. After you've ruled out issues with the mail server and mailbox, use this tool to start an investigation. There are a few ways to get to it. First, go to the system page in the admin area and look for the notification helper link in the left nav as shown. The link is directly under the permission helper link. Next, access the notification helper from a notification scheme. Look for the button at the top right. In Server and Data Center, you can also use the admin menu in an individual issue. Next, let's try out the notification helper to see how it works. Here's a scenario. A user reports REBRAND-1 was created, but they didn't receive an email about it. Let's use the notification helper to find the reasons why. Enter the user's name, the issue ID, the event check which is issue created and click the form submission button. Here are the results. The notification helper shows the user does not receive notifications for this event because they're not the reporter or the current assignee. Mystery solved.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jira](../../Skills/DevOps/Jira.md) (14)
> **Tools:** jira (14)
> **Analogies:** for example (2)
> **CLI Commands:** find (1)
> **Env Vars:** rebrand (1)
> **UI Navigation:** go to (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Determine the notification problem](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-determine-the-notification-problem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-determine-the-notification-problem?u=76281980&t=0)** - [Instructor] Here are the instructions for this challenge. Use the notification helper to determine the problem. Figure out why the test user created earlier doesn't receive issue updated notifications in the test project. Once you've uncovered the problem, decide if you need to make a change to the application or the notification scheme. If you make a change, rerun the notification helper to make sure the problem is remedied. You can also log in as the test user, trigger a notification and check for email.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17207976?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17207976?u=76281980&t=0)** - [Instructor] Were you able to detect the notification problem? Here's how to do it and we'll use [Jira](../../Skills/DevOps/Jira.md) server in this example. First, log in to Jira and go to one of the notification helper locations. I'll use the one in the system admin area. Enter the user, the issue, the event and click the form submission button. There are two problems listed. First, it says the user doesn't receive notifications for this event. Second, it says there's no mail server set up so no users will receive notifications until that's fixed. Click on the default notification scheme link to learn more about the first problem. The issue updated item only sends messages to an issue's watchers, current assignee and reporter, and our test user is none of these. Now that you know what the problem is, there are three ways to solve it. They are, make the user a watcher of the issue, add the user to the issue updated line in the notification scheme, or do nothing. Which do you think is the best choice? If the user only wants notifications for one issue, the best solution is to make them a watcher. If the goal is to notify the user for all issues in the project, then update the notification scheme. Otherwise, there's no need to take any action. All right. You've completed this challenge by detecting the problem.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jira](../../Skills/DevOps/Jira.md) (2)
> **CLI Commands:** make (2)
> **Tools:** jira (2)
> **UI Navigation:** go to (1), click on (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Additional learning resources](https://www.linkedin.com/learning/jira-basic-administration-17503968/additional-learning-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/additional-learning-resources?u=76281980&t=0)** - [Rachel] Congrats on completing the course. You've performed many of the tasks expected of a new tier administrator and are well on your way towards a strong admin foundation. You should now be able to determine your application type and deployment method, recognize different types of admins and users, set up a test environment to test configuration changes, and add new users, grant application access, and manage role and group membership. You should also be able to create [Jira](../../Skills/DevOps/Jira.md) projects and fill them with sample data, edit workflow statuses and transitions, and troubleshoot common permission and notification problems. Your next step is to continue learning. There's always more to learn and new features are added all the time and there are a ton of resources available. You just have to know where to look, seek them out, and put it in a little time and effort. My 9 Ways to Learn Jira Administration article will point you in the right direction. Oh, and don't forget to take my Advanced Administration course to dive deeper into the configuration areas used most. Here's some additional resources so you can continue learning. [Atlassian](../../Glossary/Service/Atlassian.md)'s product documentation contains content specifically for administrators. All the information is categorized by application type and version. Just make sure you're reading the right information. Next, visit support.[atlassian.com](https://atlassian.com) for vendor help or to report a bug. In Server and Data Center, visit the Troubleshooting and support tools admin page to create a support zip to send to Atlassian. This feature exports your logs and configuration info
>
> **[1:34](https://www.linkedin.com/learning/jira-basic-administration-17503968/additional-learning-resources?u=76281980&t=94)** to help the vendor troubleshoot problems. Next, the Atlassian community is where you'll find answers, support, and inspiration from others. Log in with your Atlassian ID at [communityatlassian.com](https://communityatlassian.com) to ask a question or start a discussion. There are also plenty of Jira theme groups and discussions on social media. Next, studying for Atlassian certification is a great way to learn more about Jira. The test is challenging, but the certification experience made me a better admin. Read my tips for obtaining and extending your certification at the URL shown. The final resource is the Jira Strategy Admin Workbook. It saves you time, money, and frustration. But this book is different, it's not documentation, it's recommendations from years of cleaning up horrible Jira configurations. It's about what you should do, shouldn't do, and why. Get the book and additional materials at [jirastrategy.com](https://jirastrategy.com). Good luck with your Jira journey, and I'll see you online.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jira](../../Skills/DevOps/Jira.md) (7), [Atlassian](../../Glossary/Service/Atlassian.md) (6)
> **Tools:** jira (7)
> **URLs:** [atlassian.com](https://atlassian.com) (1), [communityatlassian.com](https://communityatlassian.com) (1), [jirastrategy.com](https://jirastrategy.com) (1)
> **CLI Commands:** make (1), find (1)
> **Warnings:** troubleshoot (2)
> **Env Vars:** url (1)
> **Definitions:** is a  (1)
> **Best Practices:** don't forget (1)


## Instructor

- [Rachel Wright](../../Instructors/DevOps/Rachel%20Wright.md)

## Skills Covered

- System Administration
- Jira

## Path Context

### In [Mastering Jira Administration](../../Paths/DevOps/Learning%20Paths/Mastering%20Jira%20Administration.md)
← [Learning Jira Cloud Edition](Learning%20Jira%20Cloud%20Edition.md) | **2 of 7** | [Jira Service Management- Administration](Jira%20Service%20Management-%20Administration.md) →

## Appears In

- [Mastering Jira Administration](../../Paths/DevOps/Learning%20Paths/Mastering%20Jira%20Administration.md)

## Related Courses

_Courses sharing skills:_

- [Jira Administration- Automation](Jira%20Administration-%20Automation.md) — Jira
- [Jira- Managing Custom Workflows](Jira-%20Managing%20Custom%20Workflows.md) — Jira
- [Jira- Advanced Administration](Jira-%20Advanced%20Administration.md) — Jira
- [Jira Service Management- Administration](Jira%20Service%20Management-%20Administration.md) — Jira
- [Red Hat Certified System Administrator Ex200 Cert Prep 1 Deploy Configure And Manage](../Network%20and%20System%20Administration/Red%20Hat%20Certified%20System%20Administrator%20Ex200%20Cert%20Prep%201%20Deploy%20Configure%20And%20Manage.md) — System Administration

---

[↑ Back to top](#)