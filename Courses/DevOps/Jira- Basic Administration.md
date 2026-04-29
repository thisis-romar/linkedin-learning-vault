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
  - '[[Mastering Jira Administration]]'
prev_courses:
  - '[[Learning Jira Cloud Edition]]'
next_courses:
  - '[[Jira Service Management- Administration]]'
path_nav: '[{"path":"Mastering Jira Administration","position":2,"total":7,"prev":"Learning Jira Cloud Edition","next":"Jira Service Management- Administration"}]'
path_count: 1
tags:
  - course
  - topic/devops
  - topic/network-and-system-administration
  - skill/system-administration
  - skill/jira
status: not-started
created: 2026-04-29
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
  - Basic administration in Jira
  - Who is this course for?
  - What do you need for this course?
- [**1. What Is Jira and How Is It Used?**](#1-what-is-jira-and-how-is-it-used) (5 videos)
  - What is Jira?
  - How is Jira used?
  - Which type of Jira do you have?
  - Important terms and definitions
  - Navigating the admin area
- [**2. Admin Types and Responsibilities**](#2-admin-types-and-responsibilities) (3 videos)
  - Types of Jira users
  - Who does what?
  - Utilizing global permissions
- [**3. Setting Up a Test Environment**](#3-setting-up-a-test-environment) (2 videos)
  - Choose a test environment
  - Create a test environment
- [**4. Managing Users**](#4-managing-users) (4 videos)
  - How to manage users
  - Leveraging groups and roles
  - Challenge: Add a test user
  - Solution
- [**5. Creating Jira Projects**](#5-creating-jira-projects) (4 videos)
  - Types of Jira projects
  - How to create a project
  - Challenge: Create a test project
  - Solution
- [**6. Creating Workflows**](#6-creating-workflows) (5 videos)
  - Types of workflows
  - Basic workflow concepts
  - Using diagram and text mode
  - Challenge: Create a workflow
  - Solution
- [**7. Troubleshooting Permission Problems**](#7-troubleshooting-permission-problems) (4 videos)
  - Types of Jira permissions
  - Using the Permission Helper
  - Challenge: Determine the permission problem
  - Solution
- [**8. Troubleshooting Missing Notifications**](#8-troubleshooting-missing-notifications) (4 videos)
  - Types of Jira notifications
  - Using the Notification Helper
  - Challenge: Determine the notification problem
  - Solution
- [**Conclusion**](#conclusion) (1 videos)
  - Additional learning resources

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Basic administration in Jira
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-administration-in-jira?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-administration-in-jira?u=76281980&t=0)** - [Rachel] In this course, you'll learn what Jira is, how it's used and which type you have.
>
> **[0:05](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-administration-in-jira?u=76281980&t=5)** I'll show you how to access application settings and the most used admin areas.
>
> **[0:10](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-administration-in-jira?u=76281980&t=10)** Then we'll discuss the responsibilities and different types of administrators.
>
> **[0:15](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-administration-in-jira?u=76281980&t=15)** We'll also set up a test environment so you can experiment without impacting production data.
>
> **[0:20](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-administration-in-jira?u=76281980&t=20)** By the end of this course, you'll have the top skills every tier admin needs like adding users, creating projects, creating custom workflows and troubleshooting common permission and notification problems.
>
> **[0:33](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-administration-in-jira?u=76281980&t=33)** At the end of each section is a quiz or a challenge to reinforce what you've learned.
>
> **[0:38](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-administration-in-jira?u=76281980&t=38)** Let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Tools:** jira (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [rachel] (1)

#### Who is this course for?
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-is-this-course-for?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-is-this-course-for?u=76281980&t=0)** - [Instructor] This course helps new Jira administrators get started, solve common problems, and fulfill requests so you can support growth and change in your organization.
>
> **[0:09](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-is-this-course-for?u=76281980&t=9)** You may be a full-time Jira admin, a part-time admin with an additional job, an end user who was granted admin access, or the admin of multiple applications at the same time.
>
> **[0:20](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-is-this-course-for?u=76281980&t=20)** This course includes the top five things every Jira administrator needs to know so you can get started quickly.
>
> **[0:26](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-is-this-course-for?u=76281980&t=26)** Once you've learned the basics, I invite you to join me for a more in-depth look at Jira administration and additional area-specific courses.
>
> **[0:34](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-is-this-course-for?u=76281980&t=34)** If you're new to Jira, I recommend starting with my Learning Jira course to understand your end user's experience.
>
> **[0:41](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-is-this-course-for?u=76281980&t=41)** There's one course for cloud and another for server and data center.
>
> **[0:44](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-is-this-course-for?u=76281980&t=44)** Next, take [[Learning Jira Software]], which focuses on development-specific features like backlogs, sprints, versions, and more.
>
> **[0:53](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-is-this-course-for?u=76281980&t=53)** Once you have a good understanding of Jira capabilities, take this basic course and then the advanced course.
>
> **[1:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-is-this-course-for?u=76281980&t=60)** If you're new to application administration, here's the learning path I'd follow.
>
> **[1:04](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-is-this-course-for?u=76281980&t=64)** After this course, take Jira Advanced Administration.
>
> **[1:07](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-is-this-course-for?u=76281980&t=67)** The advanced course dives deeper into the configuration areas used most.
>
> **[1:11](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-is-this-course-for?u=76281980&t=71)** If you have Jira service management, my admin course shows how to configure requests, queues, service level agreements, and a knowledge base so your organization can support internal and external customers.
>
> **[1:24](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-is-this-course-for?u=76281980&t=84)** And finally, if you have Confluence, I created an admin course to help configure that application too.
>
> **[1:30](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-is-this-course-for?u=76281980&t=90)** In all courses, my goal is not just for you to understand the settings, but to be able to make smart decisions when creating or changing them.
>
> **[1:38](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-is-this-course-for?u=76281980&t=98)** Knowing the best way to solve a problem and how it will impact your application in the future is the difference between a good administrator and a great one.

> [!info]- Semantic Content
>
> **Tools:** jira (10), confluence (1)
> **Prerequisites:** configure (2)
> **CLI Commands:** make (1)
> **Code Keywords:** finally, (1)
> **Speakers:** - [instructor] (1)

#### What do you need for this course?
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-basic-administration-17503968/what-do-you-need-for-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/what-do-you-need-for-this-course?u=76281980&t=0)** - Ideally, you'll have some end-user experience creating issues, transitioning issues through workflows, and working into your projects, boards, and dashboards.
>
> **[0:09](https://www.linkedin.com/learning/jira-basic-administration-17503968/what-do-you-need-for-this-course?u=76281980&t=9)** It's also helpful to have application admin or system admin experience with other software, but it's certainly possible that you don't have this experience, and that's okay.
>
> **[0:18](https://www.linkedin.com/learning/jira-basic-administration-17503968/what-do-you-need-for-this-course?u=76281980&t=18)** This course will teach you the basics so you can get started quickly.
>
> **[0:22](https://www.linkedin.com/learning/jira-basic-administration-17503968/what-do-you-need-for-this-course?u=76281980&t=22)** All you need right now is admin access to a Jira application.
>
> **[0:26](https://www.linkedin.com/learning/jira-basic-administration-17503968/what-do-you-need-for-this-course?u=76281980&t=26)** It's also helpful to have a test environment, but if you don't, don't worry, we'll set one up as part of the course.
>
> **[0:32](https://www.linkedin.com/learning/jira-basic-administration-17503968/what-do-you-need-for-this-course?u=76281980&t=32)** One last thing.
>
> **[0:33](https://www.linkedin.com/learning/jira-basic-administration-17503968/what-do-you-need-for-this-course?u=76281980&t=33)** It's really hard to keep up with software changes, especially with cloud software, new features are added, removed, or changed all the time, existing features or even entire products are renamed, and links that worked yesterday are broken today.
>
> **[0:47](https://www.linkedin.com/learning/jira-basic-administration-17503968/what-do-you-need-for-this-course?u=76281980&t=47)** That's why I've set up a special place on my website to post the latest Jira and Confluence information.
>
> **[0:53](https://www.linkedin.com/learning/jira-basic-administration-17503968/what-do-you-need-for-this-course?u=76281980&t=53)** When something impactful to the course changes, I'll post that information at the URL shown.
>
> **[0:58](https://www.linkedin.com/learning/jira-basic-administration-17503968/what-do-you-need-for-this-course?u=76281980&t=58)** Now's a good time to bookmark that location.
>
> **[1:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/what-do-you-need-for-this-course?u=76281980&t=60)** Go ahead.
>
> **[1:01](https://www.linkedin.com/learning/jira-basic-administration-17503968/what-do-you-need-for-this-course?u=76281980&t=61)** I'll wait.

> [!info]- Semantic Content
>
> **Tools:** jira (2), confluence (1)
> **Env Vars:** url (1)
> **Prerequisites:** set up (1)
> **Speakers:** - ideally (1)


### 1. What Is Jira and How Is It Used?

> [↑ Back to Table of Contents](#table-of-contents)

#### What is Jira?
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-basic-administration-17503968/what-is-jira?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/what-is-jira?u=76281980&t=0)** - [Instructor] Jira is made by a company called Atlassian who makes other popular applications like Confluence, a wiki and document repository, Trello, a lightweight visual task manager, and development tools like Bamboo and Bitbucket.
>
> **[0:13](https://www.linkedin.com/learning/jira-basic-administration-17503968/what-is-jira?u=76281980&t=13)** Jira is for issue tracking, bug tracking, project management, and more.
>
> **[0:18](https://www.linkedin.com/learning/jira-basic-administration-17503968/what-is-jira?u=76281980&t=18)** It digitizes your wall of sticky notes.
>
> **[0:21](https://www.linkedin.com/learning/jira-basic-administration-17503968/what-is-jira?u=76281980&t=21)** Jira helps teams of all types manage their work.
>
> **[0:23](https://www.linkedin.com/learning/jira-basic-administration-17503968/what-is-jira?u=76281980&t=23)** When Jira was first released in 2002, it was purely for software development, but these days, all kinds of teams like legal, marketing, HR, and IT use Jira.
>
> **[0:34](https://www.linkedin.com/learning/jira-basic-administration-17503968/what-is-jira?u=76281980&t=34)** All kinds of industries use it to track their work and their team's to-do list.
>
> **[0:38](https://www.linkedin.com/learning/jira-basic-administration-17503968/what-is-jira?u=76281980&t=38)** Jira's not just for software development anymore.

> [!info]- Semantic Content
>
> **Tools:** jira (6), confluence (1), bitbucket (1)
> **Speakers:** - [instructor] (1)

#### How is Jira used?
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-is-jira-used?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-is-jira-used?u=76281980&t=0)** - [Narrator] You can use Jira to do any of the following.
>
> **[0:03](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-is-jira-used?u=76281980&t=3)** Schedule initiatives, tasks, and manage your team or product pipeline.
>
> **[0:07](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-is-jira-used?u=76281980&t=7)** For example, the HR team can track where the new hire is in the onboarding process, the facilities team can record which employees have security badges, the legal team can fulfill contract review requests, the IT team can receive computer support requests, and the development team can track changes to their code.
>
> **[0:25](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-is-jira-used?u=76281980&t=25)** Jira can track virtually anything your team needs to do.
>
> **[0:28](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-is-jira-used?u=76281980&t=28)** Use Jira to report and fix bugs and triage or address issues.
>
> **[0:33](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-is-jira-used?u=76281980&t=33)** Jira can help determine which issue should be worked next.
>
> **[0:37](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-is-jira-used?u=76281980&t=37)** You can also use Jira to report time and monitor progress.
>
> **[0:40](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-is-jira-used?u=76281980&t=40)** You can track changes, tasks, and use Jira as your to-do list.
>
> **[0:45](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-is-jira-used?u=76281980&t=45)** Finally, Jira creates an authoritative, historical, and legal record of what was done.

> [!info]- Semantic Content
>
> **Tools:** jira (7)
> **Code Keywords:** finally, (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### Which type of Jira do you have?
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=0)** - [Instructor] Different types of Jira include different abilities, different deployment methods, and even different user interfaces.
>
> **[0:06](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=6)** It's important to know which type you have to leverage the correct features, advice, and documentation.
>
> **[0:11](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=11)** The different types of Jira are Jira Core and Jira Work Management, which is built for business teams and general task management, Jira Software, for software development teams, Jira Service Management, with special features for support teams, Jira Align to connect business strategy to technical execution, and Jira Product Discovery to help product managers collaborate and prioritize initiatives.
>
> **[0:35](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=35)** These applications can be used separately or together.
>
> **[0:38](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=38)** Let's do a quick comparison of the three most popular application types.
>
> **[0:42](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=42)** In this course, I've abbreviated Jira Software as JS, Jira Work Management as JWM, and Jira Service Management as JSM.
>
> **[0:51](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=51)** Let's discuss the applications built for business teams first.
>
> **[0:55](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=55)** Jira Work Management and Jira Core help teams collaborate and manage projects, processes, and tasks.
>
> **[1:02](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=62)** It contains all the main Jira features, like projects, issues, workflows, and users.
>
> **[1:09](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=69)** The cloud offering for business teams is called Jira Work Management.
>
> **[1:13](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=73)** It includes all the core abilities plus additional features like lists, calendars, timelines, and forms.
>
> **[1:21](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=81)** These applications are great for business teams like marketing, human resources, legal, sales, and more.
>
> **[1:28](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=88)** These users can only access work management-type Jira projects.
>
> **[1:32](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=92)** Next, Jira Software helps teams track projects, bugs, and tasks.
>
> **[1:37](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=97)** It's designed for development teams and includes dev-specific features like sprints, story points, release versions, and integration with tools like Bamboo, Bitbucket, GitHub, and more.
>
> **[1:48](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=108)** This application is great for teams that use scrum, kanban, waterfall, or no methodology at all.
>
> **[1:55](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=115)** These users can access software-type Jira projects in any deployment type and work management projects in Cloud, which are called business projects in Server and Data Center.
>
> **[2:05](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=125)** And the final type is Jira Service Management.
>
> **[2:08](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=128)** It was previously called Jira Service Desk and contains features like service level agreements, cues for grouping requests based on type and severity, and additional reporting for workload and customer satisfaction.
>
> **[2:21](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=141)** There's also a simple request entry interface called the customer portal, which integrates with Atlassian's Confluence application to display self-service help articles.
>
> **[2:31](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=151)** With this type, the HR team can collect benefits questions, and reimbursement requests, the facilities team can receive requests for new desks and chairs, and the legal team can process contract review requests.
>
> **[2:43](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=163)** These users can access service management-type Jira projects in any deployment type and work management projects in Cloud, which are called business projects in Server and Data Center.
>
> **[2:53](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=173)** In addition to application types, there are three deployment types.
>
> **[2:57](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=177)** They are Cloud, Server, and Data Center.
>
> **[3:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=180)** Now, I recommend reviewing all the information in this course, regardless of your current application or deployment type.
>
> **[3:06](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=186)** Companies often add additional applications or change deployment types over the years, or maybe you change jobs and find that your new company has one of the other types.
>
> **[3:15](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=195)** It's a good idea to have a basic understanding of all types of Jira.
>
> **[3:19](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=199)** The Cloud deployment type is hosted by Atlassian.
>
> **[3:23](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=203)** That means Atlassian is responsible for application uptime, the database, and the mail server.
>
> **[3:29](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=209)** Cloud has different capabilities, a different user interface, and is billed per user as a monthly or annual subscription.
>
> **[3:36](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=216)** A cloud software is ever evolving, so you should expect frequent visual, feature, and terminology changes.
>
> **[3:44](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=224)** Here's a screenshot of the default dashboard in Cloud.
>
> **[3:47](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=227)** Now, don't worry if your screen looks different than mine.
>
> **[3:49](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=229)** You might see different colors, a different layout, and customization specific to your company.
>
> **[3:55](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=235)** Regardless of the look and feel of your application, the admin concepts in this course are the same.
>
> **[4:01](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=241)** This screenshot shows some clues that the application type is Jira Cloud.
>
> **[4:05](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=245)** First, look at the URL format in the browser's address bar.
>
> **[4:09](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=249)** If it contains the domain [atlassian.net](https://atlassian.net), it means Atlassian is hosting it.
>
> **[4:13](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=253)** Atlassian has future plans to let you customize this URL but for now, it's a quick and easy way to tell the difference between Cloud and the other deployment types.
>
> **[4:22](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=262)** Another hint that you're in Cloud is there's no version number displayed at the bottom of the page.
>
> **[4:28](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=268)** Also, find your application type by logging into my.[atlassian.com](https://atlassian.com) to view your licenses.
>
> **[4:35](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=275)** Before we move on to the next deployment type, there's something to know.
>
> **[4:38](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=278)** As you've probably heard, Atlassian stopped selling new licenses of Server products in February, 2021, and support for Server products ends on February 2nd, 2024.
>
> **[4:49](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=289)** So what should you do if you have Jira Server?
>
> **[4:52](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=292)** Customers need to switch to Data Center, migrate to Atlassian-hosted cloud products, or make alternate plans.
>
> **[4:59](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=299)** For those of you that still have Server, it means the software is hosted independently.
>
> **[5:03](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=303)** Your application may be hosted on premises, on a server in your office, in your Data Center with other internal applications, in a cloud server environment like Amazon AWS, Microsoft Azure, or Google Cloud platform, or by a third party.
>
> **[5:18](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=318)** The Server application has different capabilities and a different user interface.
>
> **[5:23](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=323)** It's billed annually, but as mentioned before, new licenses are no longer available.
>
> **[5:28](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=328)** Here's a screenshot of the same dashboard page in Jira Server.
>
> **[5:32](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=332)** As you can see, the look and feel is slightly different from Cloud.
>
> **[5:36](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=336)** Your application might have different colors, apps, and customizations as well.
>
> **[5:41](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=341)** Even if your screen looks different than mine, the admin concepts are the same.
>
> **[5:45](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=345)** Look at the URL format in the browser's address bar.
>
> **[5:49](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=349)** In the screenshot, you can see my application is running on a local server.
>
> **[5:53](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=353)** Your URL is likely customized to your company's domain name.
>
> **[5:57](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=357)** Another way to tell this is Jira Server is because there's a version number at the bottom of almost every page.
>
> **[6:03](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=363)** You'll need this version number to leverage the correct documentation.
>
> **[6:06](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=366)** And of course, log in to my.[atlassian.com](https://atlassian.com) to view your licenses.
>
> **[6:12](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=372)** The last deployment type is Jira Data Center.
>
> **[6:14](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=374)** It's just like Server except it's self-hosted, has similar server features and design, and is billed annually in tiers.
>
> **[6:22](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=382)** Data Center is built for mission-critical environments, however.
>
> **[6:26](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=386)** It includes multiple application nodes or instances for high availability, load balancing, redundancy, and disaster recovery.
>
> **[6:35](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=395)** If you have multiple instances in Data Center, you'll see a unique identifier in the application's footer, and of course, check the products on your bill at my.[atlassian.com](https://atlassian.com).
>
> **[6:46](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=406)** Now, one note for this course, Server and Data Center have the same user interface and similar features.
>
> **[6:52](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=412)** Unless labeled otherwise, Server admins can leverage the Data Center information and vice versa.
>
> **[6:59](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=419)** Here's a recap of the different types of Jira.
>
> **[7:02](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=422)** So which application type do you have, and what deployment type do you have?
>
> **[7:07](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=427)** It's important to know for two reasons.
>
> **[7:10](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=430)** First, you need to know which set of documentation to reference.
>
> **[7:14](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=434)** In the screenshot, you'll see there's different documentation for cloud and for each server version.
>
> **[7:19](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=439)** And don't make my mistake and waste time reading the wrong information.
>
> **[7:23](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=443)** Second, you can extend Jira's capabilities with apps from the Atlassian marketplace.
>
> **[7:28](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=448)** In the screenshot example, this app is available for all three hosting options, but that's not true for every app, however, and sometimes app features differ between deployment methods.
>
> **[7:40](https://www.linkedin.com/learning/jira-basic-administration-17503968/which-type-of-jira-do-you-have?u=76281980&t=460)** Always make sure that the app you're researching is compatible with your application type, deployment type, and version.

> [!info]- Semantic Content
>
> **Tools:** jira (29), bitbucket (1), github (1), confluence (1)
> **Code Keywords:** interface (4), type, (4), let (3), self (2), type. (1)
> **Env Vars:** url (4), jwm (1), jsm (1), aws (1)
> **CLI Commands:** make (3), find (2), aws (1)
> **URLs:** [atlassian.com](https://atlassian.com) (3), [atlassian.net](https://atlassian.net) (1)
> **UI Navigation:** switch to (1)
> **Definitions:** is called (1)
> **Analogies:** just like (1)

#### Important terms and definitions
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-basic-administration-17503968/important-terms-and-definitions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/important-terms-and-definitions?u=76281980&t=0)** - [Lecturer] Now that you know about the different application and deployment types, let's discuss some important terms and definitions.
>
> **[0:07](https://www.linkedin.com/learning/jira-basic-administration-17503968/important-terms-and-definitions?u=76281980&t=7)** An issue is an individual item in Jira.
>
> **[0:10](https://www.linkedin.com/learning/jira-basic-administration-17503968/important-terms-and-definitions?u=76281980&t=10)** Each time you create an item, you're creating a new issue with a unique key to identify it.
>
> **[0:15](https://www.linkedin.com/learning/jira-basic-administration-17503968/important-terms-and-definitions?u=76281980&t=15)** An issue is any individual record in the Jira database.
>
> **[0:18](https://www.linkedin.com/learning/jira-basic-administration-17503968/important-terms-and-definitions?u=76281980&t=18)** It could represent a request, a problem, a task, a to-do item, or a development item, like story, bug or epic.
>
> **[0:25](https://www.linkedin.com/learning/jira-basic-administration-17503968/important-terms-and-definitions?u=76281980&t=25)** A project is a collection of issues.
>
> **[0:28](https://www.linkedin.com/learning/jira-basic-administration-17503968/important-terms-and-definitions?u=76281980&t=28)** Now the word project in Jira is different than an initiative your team is working on outside of Jira.
>
> **[0:33](https://www.linkedin.com/learning/jira-basic-administration-17503968/important-terms-and-definitions?u=76281980&t=33)** Think of a Jira project as a container for all your team's initiatives, tasks and to-do items.
>
> **[0:40](https://www.linkedin.com/learning/jira-basic-administration-17503968/important-terms-and-definitions?u=76281980&t=40)** There's generally one Jira project per department, system, team or application.
>
> **[0:45](https://www.linkedin.com/learning/jira-basic-administration-17503968/important-terms-and-definitions?u=76281980&t=45)** You might have a project called "Human Resources" to track all the different things the HR team works on.
>
> **[0:51](https://www.linkedin.com/learning/jira-basic-administration-17503968/important-terms-and-definitions?u=76281980&t=51)** Next, a scheme is a configuration or collection of settings.
>
> **[0:55](https://www.linkedin.com/learning/jira-basic-administration-17503968/important-terms-and-definitions?u=76281980&t=55)** A scheme allows you to use settings differently in the same project or share settings between multiple projects.
>
> **[1:01](https://www.linkedin.com/learning/jira-basic-administration-17503968/important-terms-and-definitions?u=76281980&t=61)** For example, a bug issue type might function differently than a task issue type in the same project.
>
> **[1:07](https://www.linkedin.com/learning/jira-basic-administration-17503968/important-terms-and-definitions?u=76281980&t=67)** Or the same issue type functionality may be shared between multiple projects.
>
> **[1:12](https://www.linkedin.com/learning/jira-basic-administration-17503968/important-terms-and-definitions?u=76281980&t=72)** Schemes make this possible.
>
> **[1:14](https://www.linkedin.com/learning/jira-basic-administration-17503968/important-terms-and-definitions?u=76281980&t=74)** A dashboard is a statistics-based view of issues for one or more projects.
>
> **[1:19](https://www.linkedin.com/learning/jira-basic-administration-17503968/important-terms-and-definitions?u=76281980&t=79)** A dashboard shows a lot of issue data at one time in formats like graphs, counts, trends and charts.
>
> **[1:26](https://www.linkedin.com/learning/jira-basic-administration-17503968/important-terms-and-definitions?u=76281980&t=86)** There's a default system dashboard for everyone to use, and users can create custom dashboards too.
>
> **[1:32](https://www.linkedin.com/learning/jira-basic-administration-17503968/important-terms-and-definitions?u=76281980&t=92)** A board is a view of issues from one or more projects.
>
> **[1:35](https://www.linkedin.com/learning/jira-basic-administration-17503968/important-terms-and-definitions?u=76281980&t=95)** It's an easy way to see the status of many issues at the same time.
>
> **[1:39](https://www.linkedin.com/learning/jira-basic-administration-17503968/important-terms-and-definitions?u=76281980&t=99)** There are scrum boards for teams that plan in chunks of work called sprints.
>
> **[1:43](https://www.linkedin.com/learning/jira-basic-administration-17503968/important-terms-and-definitions?u=76281980&t=103)** There are kanban boards for teams with a less structured delivery schedule.
>
> **[1:47](https://www.linkedin.com/learning/jira-basic-administration-17503968/important-terms-and-definitions?u=76281980&t=107)** And while scrum and kanban are development teams, any team can benefit from viewing their work on a board.
>
> **[1:53](https://www.linkedin.com/learning/jira-basic-administration-17503968/important-terms-and-definitions?u=76281980&t=113)** Always be sure to refer to these terms by their real names.
>
> **[1:57](https://www.linkedin.com/learning/jira-basic-administration-17503968/important-terms-and-definitions?u=76281980&t=117)** It avoids confusion between users when reading documentation and when communicating with Atlassian support.
>
> **[2:03](https://www.linkedin.com/learning/jira-basic-administration-17503968/important-terms-and-definitions?u=76281980&t=123)** One more thing before we get started.
>
> **[2:06](https://www.linkedin.com/learning/jira-basic-administration-17503968/important-terms-and-definitions?u=76281980&t=126)** Atlassian has changed terminology over the years, and some new terms were recently introduced.
>
> **[2:11](https://www.linkedin.com/learning/jira-basic-administration-17503968/important-terms-and-definitions?u=76281980&t=131)** Add-ons, plugins, and additional code to enhance features are now called Apps.
>
> **[2:17](https://www.linkedin.com/learning/jira-basic-administration-17503968/important-terms-and-definitions?u=76281980&t=137)** In cloud, Jira Service Desk is now called Jira Service Management.
>
> **[2:21](https://www.linkedin.com/learning/jira-basic-administration-17503968/important-terms-and-definitions?u=76281980&t=141)** Project type names have also changed into your cloud.
>
> **[2:24](https://www.linkedin.com/learning/jira-basic-administration-17503968/important-terms-and-definitions?u=76281980&t=144)** One type was first called traditional, then classic, and now named company-managed.
>
> **[2:29](https://www.linkedin.com/learning/jira-basic-administration-17503968/important-terms-and-definitions?u=76281980&t=149)** Another type was once called independent, then next-gen, and is now team-managed.
>
> **[2:35](https://www.linkedin.com/learning/jira-basic-administration-17503968/important-terms-and-definitions?u=76281980&t=155)** Some of the documentation and Jira settings will still reference previous terminology.

> [!info]- Semantic Content
>
> **Tools:** jira (9)
> **Definitions:** is a  (4), is an  (1)
> **Code Keywords:** let (1), function (1)
> **CLI Commands:** make (1)
> **Documentation:** the documentation (1)
> **Analogies:** for example (1)
> **Speakers:** - [lecturer] (1)

#### Navigating the admin area
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980&t=0)** - [Narrator] Next, let's discuss the sections of the Jira administration area.
>
> **[0:04](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980&t=4)** You'll need application admin permissions to access these settings.
>
> **[0:09](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980&t=9)** Here are the steps to access the application admin area in Jira Cloud.
>
> **[0:13](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980&t=13)** First, log into Jira with an application administrator account.
>
> **[0:17](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980&t=17)** Next, click the cog or gear icon at the top right.
>
> **[0:21](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980&t=21)** The menu contains links to the different admin areas.
>
> **[0:24](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980&t=24)** Click the user management option to add or manage users and groups.
>
> **[0:29](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980&t=29)** Click the billing option to go to the billing portal at [adminatlassian.com](https://adminatlassian.com).
>
> **[0:34](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980&t=34)** For settings related to the entire application, click the system option.
>
> **[0:39](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980&t=39)** There are a few additional application settings in the products option, too.
>
> **[0:44](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980&t=44)** Click the projects option to see all existing projects and create new ones.
>
> **[0:49](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980&t=49)** The issues option contains all the settings related to issue configuration.
>
> **[0:53](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980&t=53)** This is the admin area where you're likely to spend the most of your time.
>
> **[0:57](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980&t=57)** Go here to manage issue types, workflows, custom fields, permissions, statuses, and other shared settings.
>
> **[1:05](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980&t=65)** The final option is apps.
>
> **[1:07](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980&t=67)** Go here to manage existing add-ons or to install new ones.
>
> **[1:12](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980&t=72)** And here's a tip, if you ever forget which page an admin feature is on, just type GG to find it.
>
> **[1:19](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980&t=79)** For example, type GG and enter the word workflow in the search box.
>
> **[1:23](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980&t=83)** Jira will find any admin page with workflow in the title.
>
> **[1:28](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980&t=88)** Next, let's look at the admin area in Jira Server and Data Center.
>
> **[1:32](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980&t=92)** First, log into Jira with an application administrator account.
>
> **[1:36](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980&t=96)** Next, click the gear or cog icon at the top right.
>
> **[1:40](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980&t=100)** The menu contains links to the different admin areas.
>
> **[1:43](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980&t=103)** You may need to reauthenticate to access them.
>
> **[1:46](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980&t=106)** For settings related to version, license, and integrations, click the applications option.
>
> **[1:52](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980&t=112)** Click projects to see all existing projects and create new ones.
>
> **[1:56](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980&t=116)** Just like in Jira Cloud, the issues option contains all the settings related to issue configuration.
>
> **[2:02](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980&t=122)** You'll spend a lot of time in this area managing schemes and project settings.
>
> **[2:07](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980&t=127)** The next option is manage apps.
>
> **[2:10](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980&t=130)** Use this area to manage existing add-ons or install new ones.
>
> **[2:14](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980&t=134)** Click the user management option to add or manage users and groups, and if you've upgraded Jira, you may see a latest upgrade report link with upgrade history details.
>
> **[2:25](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980&t=145)** The last link is system.
>
> **[2:27](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980&t=147)** Click it to manage settings related to the entire application.
>
> **[2:31](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980&t=151)** If you have additional apps installed, you may see additional menu items as well.
>
> **[2:35](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980&t=155)** Don't forget to use the GG shortcut to find an admin feature.
>
> **[2:39](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980&t=159)** Type GG and enter the word workflow in the search box.
>
> **[2:43](https://www.linkedin.com/learning/jira-basic-administration-17503968/navigating-the-admin-area?u=76281980&t=163)** Now you can go directly to the workflows page and save three clicks.

> [!info]- Semantic Content
>
> **Tools:** jira (8)
> **CLI Commands:** find (3)
> **Prerequisites:** install (2), you'll need (1)
> **Code Keywords:** let (2)
> **Analogies:** for example (1), just like (1)
> **URLs:** [adminatlassian.com](https://adminatlassian.com) (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [narrator] (1)


### 2. Admin Types and Responsibilities

> [↑ Back to Table of Contents](#table-of-contents)

#### Types of Jira users
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-users?u=76281980&t=0)** - There are many different types of admin users, and their responsibilities vary depending on the type.
>
> **[0:06](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-users?u=76281980&t=6)** Admins fall into one of the following categories: System-level administrators can perform every Jira administration function.
>
> **[0:14](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-users?u=76281980&t=14)** This level only exists in Server and Data Center.
>
> **[0:17](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-users?u=76281980&t=17)** For Jira Cloud, Atlassian is your system administrator.
>
> **[0:21](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-users?u=76281980&t=21)** Sys admins do things like configure the mail server, configure background services, and run health check tools.
>
> **[0:28](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-users?u=76281980&t=28)** Application-level administrators can perform most Jira administration functions.
>
> **[0:32](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-users?u=76281980&t=32)** like creating projects, managing users, and granting permissions.
>
> **[0:36](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-users?u=76281980&t=36)** And project-level administrators can manage settings for individual Jira projects.
>
> **[0:41](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-users?u=76281980&t=41)** They can create components, versions, and manage users in a specific project.
>
> **[0:46](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-users?u=76281980&t=46)** While the abilities differ, a user can be multiple types of administrators at the same time.
>
> **[0:51](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-users?u=76281980&t=51)** An application administrator may also be a project administrator.
>
> **[0:55](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-users?u=76281980&t=55)** All users have a cog or gear icon at the top right of every page.
>
> **[1:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-users?u=76281980&t=60)** The available options in the menu depend on the admin type, however.
>
> **[1:04](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-users?u=76281980&t=64)** And by default in Server and Data Center, the role of the application administrator and system administrator is combined.
>
> **[1:11](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-users?u=76281980&t=71)** Here's a screenshot at the global permissions page.
>
> **[1:14](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-users?u=76281980&t=74)** The first two permission levels, JIRA system administrators and Jira administrators, are shown.
>
> **[1:19](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-users?u=76281980&t=79)** While it's possible to have two separate access levels and divide up the responsibilities, many companies choose to leave them combined.
>
> **[1:27](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-users?u=76281980&t=87)** On the right, the Jira administrator's group is listed for both permissions.
>
> **[1:31](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-users?u=76281980&t=91)** Again, this only applies to Jira Server and Data Center.
>
> **[1:34](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-users?u=76281980&t=94)** There's no similar system level permission in Jira Cloud.
>
> **[1:39](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-users?u=76281980&t=99)** And, of course, all application and deployment types have regular users who track their work in Jira.
>
> **[1:44](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-users?u=76281980&t=104)** In Jira Service Management, technicians that resolve support requests are called agents.
>
> **[1:50](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-users?u=76281980&t=110)** The users who request support are called customers, and customers may include internal users, external users, or both.
>
> **[1:57](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-users?u=76281980&t=117)** All user types have different abilities and roles to play.

> [!info]- Semantic Content
>
> **Tools:** jira (11)
> **Code Keywords:** type. (1), function (1), type, (1)
> **Prerequisites:** configure (2)
> **Env Vars:** jira (1)
> **UI Navigation:** in the menu (1)
> **Speakers:** - there (1)

#### Who does what?
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-does-what?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-does-what?u=76281980&t=0)** - [Instructor] Next, let's talk specifically about admin responsibilities.
>
> **[0:04](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-does-what?u=76281980&t=4)** Here are a few of the duties of the system admin and server and data center.
>
> **[0:09](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-does-what?u=76281980&t=9)** Many of the system admin functions are things you set up once and rarely change.
>
> **[0:14](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-does-what?u=76281980&t=14)** For example, once the mail server's connected, it's unlikely to change settings very often.
>
> **[0:18](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-does-what?u=76281980&t=18)** Sys admins can access tools used to monitor the application and keep it healthy.
>
> **[0:23](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-does-what?u=76281980&t=23)** An example is running the integrity checker to find problems with issues, workflows and filters.
>
> **[0:29](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-does-what?u=76281980&t=29)** Sys admins can also access options that impact performance and availability.
>
> **[0:33](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-does-what?u=76281980&t=33)** For example, if the mail queue sending interval is increased, it slows the receipt of email notifications.
>
> **[0:40](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-does-what?u=76281980&t=40)** Now, that might be good for the mail server but bad for users.
>
> **[0:43](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-does-what?u=76281980&t=43)** It's important to understand the impact of your actions when you're wearing the system administrator hat.
>
> **[0:48](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-does-what?u=76281980&t=48)** For the rest of this course, we'll refer to system-level administrators and application-level administrators as simply application admins.
>
> **[0:57](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-does-what?u=76281980&t=57)** Application admins need to consider the health of the application, impact and maintenance implication for each decision and change they make.
>
> **[1:06](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-does-what?u=76281980&t=66)** Here are some typical application admin responsibilities.
>
> **[1:09](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-does-what?u=76281980&t=69)** Establish and maintain standards, communicate standards, procedures, changes and maintenance outages, assist end users with user-specific settings, assist project administrators with project settings and maintenance, complete customization requests or suggest alternatives, manage users, groups, roles and access, create and configure new projects and schemes, remove projects and schemes when they're no longer needed, perform application upgrades for server and data center, vet, install and upgrade apps, connections and integrations, check server logs and address errors, develop and maintain documentation and user training materials, and monitor and ensure the overall health of the application.
>
> **[1:55](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-does-what?u=76281980&t=115)** There's no shortage of work for a proactive Jira administrator.
>
> **[1:59](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-does-what?u=76281980&t=119)** While we're discussing responsibilities, let's examine what a project administrator does.
>
> **[2:04](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-does-what?u=76281980&t=124)** Now, individual projects can have multiple administrators, and project admins typically set and maintain components, versions and other project-specific settings.
>
> **[2:14](https://www.linkedin.com/learning/jira-basic-administration-17503968/who-does-what?u=76281980&t=134)** They can manage project access, triage, assign and review issues as they're created, maintain issue data and accuracy, assist end users with issue, filter, board and dashboard questions and finally, assist the application admin team by reporting project problems and customization needs.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), finally, (1)
> **Prerequisites:** set up (1), configure (1), install (1)
> **CLI Commands:** find (1), make (1)
> **Analogies:** for example (2)
> **Tools:** jira (1)
> **Speakers:** - [instructor] (1)

#### Utilizing global permissions
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=0)** - [Instructor] Global permissions are application-wide settings that determine user and group abilities.
>
> **[0:05](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=5)** Let's visit the global permission page in Server.
>
> **[0:08](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=8)** First, log in with an application administrator account.
>
> **[0:11](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=11)** Click the cog admin icon and select the System option.
>
> **[0:15](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=15)** Then select Global permissions in the left sidebar.
>
> **[0:21](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=21)** On the left are all the permissions for the entire application, and on the right are the users and groups who have that ability.
>
> **[0:28](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=28)** This page looks similar in Cloud.
>
> **[0:31](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=31)** Let's discuss each global permission and the different deployment types.
>
> **[0:35](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=35)** While the naming differs slightly, the capabilities are the same.
>
> **[0:39](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=39)** As previously discussed, the Jira system administrators permission is only available in Jira Server and Data Center.
>
> **[0:46](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=46)** Users or groups with this permission can perform every Jira function.
>
> **[0:49](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=49)** The next permission, called administer Jira in Cloud, or Jira administrators in Server and Data Center, gives users or groups the ability to perform most admin functions.
>
> **[0:59](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=59)** Give this permission to a small group of users who maintain the entire application.
>
> **[1:04](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=64)** The browse users and groups or browse users permission is for user picker fields and sharing functions.
>
> **[1:10](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=70)** Users must have this permission to select from a list of users in the application.
>
> **[1:15](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=75)** If you have external users, like contractors or customers, you may want to limit this permission to avoid exposing employee names.
>
> **[1:23](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=83)** The share dashboards and filters or create shared objects permission allows users to share custom filters, boards, and dashboards with other users, groups, and project roles.
>
> **[1:35](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=95)** So for example, the CMO needs this permission to share their dashboard with the marketing team.
>
> **[1:40](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=100)** It's generally a good idea to allow users to share objects.
>
> **[1:43](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=103)** Otherwise, everyone creates their own, meaning multiple copies of similar views.
>
> **[1:48](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=108)** Next, manage group filter subscriptions allows users to create and delete subscriptions.
>
> **[1:53](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=113)** A subscription is an email report of all issues returned by a filter.
>
> **[1:58](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=118)** They're often created to alert users to new issues or specific issues needing attention.
>
> **[2:03](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=123)** The make bulk changes or bulk change permission controls the ability to edit, move, transition, or delete multiple issues at once.
>
> **[2:12](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=132)** With this permissions, users can change 1,000 issues at a time in the projects that they have access to.
>
> **[2:18](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=138)** In Server and Data Center, this limit is configurable.
>
> **[2:21](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=141)** You may want to exclude this ability for external users.
>
> **[2:25](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=145)** The create team-managed projects permission only exists in Cloud.
>
> **[2:29](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=149)** This allows regular users to create their own Jira projects.
>
> **[2:33](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=153)** Team-managed projects are configured differently than the classic projects that only Jira admins can create.
>
> **[2:39](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=159)** They're scheme-less, meaning they don't share settings with other projects.
>
> **[2:43](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=163)** The default setting is to let everyone create these.
>
> **[2:46](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=166)** You can leave the default setting as is or limit the ability.
>
> **[2:50](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=170)** I like to limit this to the Jira admin team or a small group of power users.
>
> **[2:55](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=175)** The final global permission is browse archive, which lets users access issues in archived projects.
>
> **[3:02](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=182)** So who's allowed to do what in your application?
>
> **[3:05](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=185)** What are your global permission settings?
>
> **[3:07](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=187)** And are there any adjustments that you should make?
>
> **[3:10](https://www.linkedin.com/learning/jira-basic-administration-17503968/utilizing-global-permissions?u=76281980&t=190)** Review your settings from the Global Permissions page in the settings admin area.

> [!info]- Semantic Content
>
> **Tools:** jira (8)
> **Code Keywords:** let (3), delete (2), function (1)
> **CLI Commands:** make (2)
> **Env Vars:** cmo (1)
> **UI Navigation:** select the (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 3. Setting Up a Test Environment

> [↑ Back to Table of Contents](#table-of-contents)

#### Choose a test environment
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=0)** - [Narrator] It's shocking, but many organizations don't have a test environment.
>
> **[0:04](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=4)** Now, I didn't have one when I first started out either, but I quickly saw how important it was to be able to experiment and learn without impacting production data.
>
> **[0:13](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=13)** You need a place to see how your changes work with real life scenarios.
>
> **[0:17](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=17)** Here's an example to your server application.
>
> **[0:20](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=20)** I've used multiple methods to identify that this is a test environment.
>
> **[0:24](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=24)** I changed the header color, so it's a different color than in production.
>
> **[0:27](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=27)** I added an announcement banner at the top, and I changed the application's display name to TEST.
>
> **[0:34](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=34)** I also changed my avatar icon, so it's different when I log in.
>
> **[0:38](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=38)** Some organizations also changed the application logo.
>
> **[0:41](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=41)** Do whatever you need to do to be able to distinguish between multiple applications.
>
> **[0:46](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=46)** Here's some additional tips for your test environment.
>
> **[0:48](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=48)** Disable email to avoid notifying end users with duplicate or fake data.
>
> **[0:53](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=53)** Next, I recommend matching your test environment settings to production as much as possible.
>
> **[0:58](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=58)** And use this environment to test the impact of major configuration changes, app installs, and maintenance activities.
>
> **[1:06](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=66)** Here's a bonus tip for GR server and data center.
>
> **[1:09](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=69)** Get read only access to the GR database.
>
> **[1:12](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=72)** Understanding how the data is structured will solve a lot of mysteries, and make you a better admin.
>
> **[1:18](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=78)** You'll be able to access additional data that's not available in the UI.
>
> **[1:22](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=82)** So here's an example.
>
> **[1:24](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=84)** Before I delete a project or a custom field, I always check the rec content database table to see which safe queries utilize that information.
>
> **[1:33](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=93)** If I delete the JSC project, for example, I can see that five filters are impacted, and will break.
>
> **[1:40](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=100)** With this information, I can ask the filter owners to update their JQL, or delete any unneeded filters.
>
> **[1:46](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=106)** And if I'm feeling especially nice, I take temporary control of the filters, and update them for the owners.
>
> **[1:53](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=113)** You'll find the ability to change filter and dashboard owners in the system admin area.
>
> **[1:59](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=119)** Here's some test environment options for Cloud customers using the Atlassian hosted environment.
>
> **[2:04](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=124)** There's a built-in sandbox in Premium and Enterprise plans.
>
> **[2:08](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=128)** Now, this is an isolated environment to test and experiment without changing real data.
>
> **[2:13](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=133)** The Sandbox application has the same user limit as the production application that it's linked to.
>
> **[2:19](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=139)** The Sandbox has its own URL, which is similar to the production URL.
>
> **[2:24](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=144)** To create a Sandbox, log in as a Cloud organization administrator at admin.[atlassian.com](https://atlassian.com).
>
> **[2:30](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=150)** Click the Products link at the top, and click Sandbox on the left sidebar.
>
> **[2:35](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=155)** If you have Cloud Premium or Enterprise, you'll see a Create button at the top right.
>
> **[2:39](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=159)** Once the Sandbox is created, you can automatically copy production data to it.
>
> **[2:44](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=164)** For information that can't be copied, import it or create it manually like you do in any other environment.
>
> **[2:50](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=170)** Read more about the Sandbox feature at the URL shown.
>
> **[2:55](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=175)** If you're an Atlassian marketplace developer, sign up for a free Development instance.
>
> **[3:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=180)** Developer access is subject to the Atlassian developer terms, which is separate from the regular terms of service.
>
> **[3:07](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=187)** This license is limited to five users.
>
> **[3:09](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=189)** Read more about it at developer.[atlassian.com](https://atlassian.com).
>
> **[3:13](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=193)** Next, you can create a second application, and just pay for a few users.
>
> **[3:18](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=198)** There's also a free version of Cloud.
>
> **[3:20](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=200)** It's just like the paid version, except it includes less capabilities.
>
> **[3:24](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=204)** It doesn't include project or issue permissions, so it won't help you test any of those areas.
>
> **[3:29](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=209)** That's why I prefer the previous ideas.
>
> **[3:32](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=212)** Next, you can start a new free trial.
>
> **[3:34](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=214)** Now, this is helpful if you're testing the features of a different Cloud plan, and don't want to upgrade or downgrade the live application.
>
> **[3:42](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=222)** And if you have no better option, create a test project in the production application.
>
> **[3:46](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=226)** For data center customers hosting their own software, there's also a free license for development and testing purposes.
>
> **[3:54](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=234)** Have your technical contact log in to [mydatalasting.com](https://mydatalasting.com) to generate the dev license.
>
> **[3:59](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=239)** Make sure test environment settings match the production environment as much as possible.
>
> **[4:04](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=244)** Don't forget to include reverse proxies, SSL, or load balancer settings.
>
> **[4:09](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=249)** There's also a 30-day free trial available, and if you have no better option, create a test project and prod.
>
> **[4:16](https://www.linkedin.com/learning/jira-basic-administration-17503968/choose-a-test-environment?u=76281980&t=256)** Regardless of the method you choose, make sure you have a place to test your changes, before you unleash them on your users.

> [!info]- Semantic Content
>
> **Env Vars:** url (3), test (1), jsc (1), jql (1), ssl (1)
> **CLI Commands:** make (3), find (1)
> **Code Keywords:** delete (3), break. (1)
> **URLs:** [atlassian.com](https://atlassian.com) (2), [mydatalasting.com](https://mydatalasting.com) (1)
> **Analogies:** for example (1), similar to (1), just like (1)
> **Definitions:** is a  (1), is an  (1)
> **Best Practices:** don't forget (1)
> **Prerequisites:** make sure you have (1)

#### Create a test environment
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-basic-administration-17503968/create-a-test-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/create-a-test-environment?u=76281980&t=0)** - [Instructor] Atlassian offers free versions of their cloud products.
>
> **[0:03](https://www.linkedin.com/learning/jira-basic-administration-17503968/create-a-test-environment?u=76281980&t=3)** Let's sign up for a free Jira application so we can experiment.
>
> **[0:07](https://www.linkedin.com/learning/jira-basic-administration-17503968/create-a-test-environment?u=76281980&t=7)** First, log into your Atlassian account at my.[atlassian.com](https://atlassian.com).
>
> **[0:11](https://www.linkedin.com/learning/jira-basic-administration-17503968/create-a-test-environment?u=76281980&t=11)** Then visit the URL shown.
>
> **[0:13](https://www.linkedin.com/learning/jira-basic-administration-17503968/create-a-test-environment?u=76281980&t=13)** Choose Jira from the list of free products and complete the signup form.
>
> **[0:17](https://www.linkedin.com/learning/jira-basic-administration-17503968/create-a-test-environment?u=76281980&t=17)** Then complete the setup process by clicking a verification link sent by email.
>
> **[0:22](https://www.linkedin.com/learning/jira-basic-administration-17503968/create-a-test-environment?u=76281980&t=22)** If you don't see the message be sure to check your junk mail folder.
>
> **[0:25](https://www.linkedin.com/learning/jira-basic-administration-17503968/create-a-test-environment?u=76281980&t=25)** Once your instance is ready, sign in and complete the setup wizard.
>
> **[0:30](https://www.linkedin.com/learning/jira-basic-administration-17503968/create-a-test-environment?u=76281980&t=30)** For data center Atlassian has getting started guides for AWS and Microsoft Azure.
>
> **[0:35](https://www.linkedin.com/learning/jira-basic-administration-17503968/create-a-test-environment?u=76281980&t=35)** Here's the general setup process for data center.
>
> **[0:38](https://www.linkedin.com/learning/jira-basic-administration-17503968/create-a-test-environment?u=76281980&t=38)** First, have your technical contact log in to my.[atlassian.com](https://atlassian.com).
>
> **[0:43](https://www.linkedin.com/learning/jira-basic-administration-17503968/create-a-test-environment?u=76281980&t=43)** Find Jira in the product list, and a link named View Developer license.
>
> **[0:47](https://www.linkedin.com/learning/jira-basic-administration-17503968/create-a-test-environment?u=76281980&t=47)** Then copy the dev license key.
>
> **[0:50](https://www.linkedin.com/learning/jira-basic-administration-17503968/create-a-test-environment?u=76281980&t=50)** Now you won't see this link if you have a starter community or open license, then visit the URL shown to use the platform installation guides or download an installer from Atlassian's archives.
>
> **[1:02](https://www.linkedin.com/learning/jira-basic-administration-17503968/create-a-test-environment?u=76281980&t=62)** You can install Jira on an on-prem server in cloud data center, or on your local machine.
>
> **[1:08](https://www.linkedin.com/learning/jira-basic-administration-17503968/create-a-test-environment?u=76281980&t=68)** Next, run the installer or start the setup in your environment.
>
> **[1:12](https://www.linkedin.com/learning/jira-basic-administration-17503968/create-a-test-environment?u=76281980&t=72)** Here's a tip, Jira comes with an embedded H two testing database.
>
> **[1:17](https://www.linkedin.com/learning/jira-basic-administration-17503968/create-a-test-environment?u=76281980&t=77)** Use it or connect to your own test database.
>
> **[1:20](https://www.linkedin.com/learning/jira-basic-administration-17503968/create-a-test-environment?u=76281980&t=80)** Just don't connect to the production database.
>
> **[1:23](https://www.linkedin.com/learning/jira-basic-administration-17503968/create-a-test-environment?u=76281980&t=83)** Once the application starts up, apply the license.
>
> **[1:26](https://www.linkedin.com/learning/jira-basic-administration-17503968/create-a-test-environment?u=76281980&t=86)** In the admin area, visit admin applications, versions and licenses, and then paste in the dev key.

> [!info]- Semantic Content
>
> **Prerequisites:** setup (4), getting started (1), install (1)
> **Tools:** jira (5)
> **Env Vars:** url (2), aws (1)
> **CLI Commands:** aws (1), find (1)
> **URLs:** [atlassian.com](https://atlassian.com) (2)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)


### 4. Managing Users

> [↑ Back to Table of Contents](#table-of-contents)

#### How to manage users
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=0)** - [Instructor] We talked about system, application and project level administrators.
>
> **[0:05](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=5)** Now, let's discuss regular users.
>
> **[0:07](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=7)** Users fall into one of the following categories.
>
> **[0:10](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=10)** Work management users can access work management projects which have simplified views and business-specific features.
>
> **[0:18](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=18)** Software users can access software-type projects in any deployment type and work management projects in cloud which are called business projects in server and data center.
>
> **[0:28](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=28)** These users see all the development-specific features.
>
> **[0:31](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=31)** Service management users can access service management projects, which contains support features like service level agreements.
>
> **[0:39](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=39)** A service management user is an agent or a technician who responds to support requests.
>
> **[0:45](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=45)** Agents can access service management-type projects in any deployment type and work management or business projects.
>
> **[0:53](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=53)** Customers are unlicensed users who create support requests in the Jira Service Management Custom Portal and this user type only exists in JSM.
>
> **[1:03](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=63)** There's more to user management than adding and removing users.
>
> **[1:07](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=67)** As an admin, you have the following user management duties.
>
> **[1:12](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=72)** Create new users, invite new users or connect Jira to a central user repository.
>
> **[1:18](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=78)** You can connect Jira to identity management and single sign-on tools like Active Directory, Microsoft Azure, G-Suite, Okta, Atlassian Access, Crowd, and others.
>
> **[1:30](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=90)** Next, admins need to deactivate user accounts when they're no longer needed.
>
> **[1:34](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=94)** Inactive users don't impact your license count.
>
> **[1:37](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=97)** I suspend all my test accounts when I'm not using them.
>
> **[1:41](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=101)** That's also a smart security measure.
>
> **[1:43](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=103)** While it's possible to remove users, I don't recommend it.
>
> **[1:47](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=107)** If you delete the user, you also delete their activity and change history, and that's an auditor's nightmare.
>
> **[1:54](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=114)** I recommend making unneeded users inactive instead.
>
> **[1:58](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=118)** Admins also need to manage application access and group membership.
>
> **[2:03](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=123)** There are two parts to granting user access.
>
> **[2:06](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=126)** First, a user must have permission to log into the application.
>
> **[2:10](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=130)** This is the cloud user's profile page.
>
> **[2:12](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=132)** This user has access to Jira software, which includes access to Jira Work Management.
>
> **[2:18](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=138)** Here's the same user profile in server and data center.
>
> **[2:21](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=141)** This user has permission to access Jira software and Jira Service Management.
>
> **[2:26](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=146)** The number of active users with application access determines the license cost.
>
> **[2:31](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=151)** The second part of user access is groups.
>
> **[2:34](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=154)** Groups give specific permissions to many people.
>
> **[2:38](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=158)** The default group names have changed over the years, so keep that in mind if your application is different.
>
> **[2:42](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=162)** You can also add custom groups to segment users for granting permissions, sending notifications and more.
>
> **[2:50](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=170)** Here's a tip.
>
> **[2:51](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=171)** Even cloud applications have differences depending on when the site was created.
>
> **[2:55](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=175)** My Cloud application created in 2014 has Jira users.
>
> **[3:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=180)** The one I created in 2020 has Jira core users, and another one I created in 2021 has Jira Work Management users.
>
> **[3:09](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=189)** They all mean the same thing and are used in the same ways.
>
> **[3:13](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=193)** At the bottom of a user's profile page is the group's area.
>
> **[3:17](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=197)** This user inherits all permissions granted to people in the group shown.
>
> **[3:21](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=201)** Here's a user profile page in server and data center.
>
> **[3:25](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-manage-users?u=76281980&t=205)** This user also has access to multiple applications and admin permissions are granted by membership in the Jira Administrators Group.

> [!info]- Semantic Content
>
> **Tools:** jira (11)
> **Code Keywords:** delete (2), let (1)
> **Env Vars:** jsm (1)
> **Cross-References:** we talked about (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Leveraging groups and roles
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-basic-administration-17503968/leveraging-groups-and-roles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/leveraging-groups-and-roles?u=76281980&t=0)** - [Instructor] In addition to groups, there's one more user classification called project roles.
>
> **[0:05](https://www.linkedin.com/learning/jira-basic-administration-17503968/leveraging-groups-and-roles?u=76281980&t=5)** Think of a role as a common function on a team, and a group as a list of users who perform the function.
>
> **[0:11](https://www.linkedin.com/learning/jira-basic-administration-17503968/leveraging-groups-and-roles?u=76281980&t=11)** Here's a practical example using a soccer team.
>
> **[0:15](https://www.linkedin.com/learning/jira-basic-administration-17503968/leveraging-groups-and-roles?u=76281980&t=15)** A soccer team has a coach, players, and fans.
>
> **[0:19](https://www.linkedin.com/learning/jira-basic-administration-17503968/leveraging-groups-and-roles?u=76281980&t=19)** Here's how the team roles are reflected as Jira project roles.
>
> **[0:23](https://www.linkedin.com/learning/jira-basic-administration-17503968/leveraging-groups-and-roles?u=76281980&t=23)** The coach is in the administrator's role, the players are in the developer's role, and the fans are in the user's role.
>
> **[0:30](https://www.linkedin.com/learning/jira-basic-administration-17503968/leveraging-groups-and-roles?u=76281980&t=30)** Some roles are created by default, like administrators and developers.
>
> **[0:34](https://www.linkedin.com/learning/jira-basic-administration-17503968/leveraging-groups-and-roles?u=76281980&t=34)** And some companies create additional roles for their teams, like users, team, viewers, and testers.
>
> **[0:41](https://www.linkedin.com/learning/jira-basic-administration-17503968/leveraging-groups-and-roles?u=76281980&t=41)** Next, let's populate the roles with users and groups.
>
> **[0:44](https://www.linkedin.com/learning/jira-basic-administration-17503968/leveraging-groups-and-roles?u=76281980&t=44)** There can be one, many or none.
>
> **[0:47](https://www.linkedin.com/learning/jira-basic-administration-17503968/leveraging-groups-and-roles?u=76281980&t=47)** For the coach, or project administrator's role, there's only one user named Chris.
>
> **[0:52](https://www.linkedin.com/learning/jira-basic-administration-17503968/leveraging-groups-and-roles?u=76281980&t=52)** There's no need to create a custom group for only one user.
>
> **[0:56](https://www.linkedin.com/learning/jira-basic-administration-17503968/leveraging-groups-and-roles?u=76281980&t=56)** For the player's or developer's role, there are three users, so I created a group called Soccer Players.
>
> **[1:02](https://www.linkedin.com/learning/jira-basic-administration-17503968/leveraging-groups-and-roles?u=76281980&t=62)** I also created a group called Soccer Fans for the fans or user's role.
>
> **[1:07](https://www.linkedin.com/learning/jira-basic-administration-17503968/leveraging-groups-and-roles?u=76281980&t=67)** By using roles and groups, we can separate what people can do in a project.
>
> **[1:11](https://www.linkedin.com/learning/jira-basic-administration-17503968/leveraging-groups-and-roles?u=76281980&t=71)** For example, we'll allow people in the developer's role to create, edit, schedule, and resolve issues.
>
> **[1:17](https://www.linkedin.com/learning/jira-basic-administration-17503968/leveraging-groups-and-roles?u=76281980&t=77)** And we'll allow people in the user's role only to create and edit.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), default, (1), let (1)
> **Tools:** jira (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Add a test user
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-add-a-test-user?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-add-a-test-user?u=76281980&t=0)** - Here's a challenge to complete in your test application.
>
> **[0:10](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-add-a-test-user?u=76281980&t=10)** Log into Jira as an application admin and create a test user with the following specifications.
>
> **[0:16](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-add-a-test-user?u=76281980&t=16)** Here's a tip.
>
> **[0:17](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-add-a-test-user?u=76281980&t=17)** Give the test user a real email address that you have access to.
>
> **[0:21](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-add-a-test-user?u=76281980&t=21)** Jira server and data center will attempt to send email notifications 10 times before it quits.
>
> **[0:26](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-add-a-test-user?u=76281980&t=26)** Don't tie up the mail queue with fake email addresses.

> [!info]- Semantic Content
>
> **Tools:** jira (2)
> **Speakers:** - here (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17213039?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17213039?u=76281980&t=0)** - [Instructor] Were you able to add a local test user?
>
> **[0:10](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17213039?u=76281980&t=10)** This account will be helpful for testing permissions and what normal users see.
>
> **[0:14](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17213039?u=76281980&t=14)** Heres how to do it.
>
> **[0:15](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17213039?u=76281980&t=15)** We'll use Jira Server in this example.
>
> **[0:18](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17213039?u=76281980&t=18)** First, log into Jira as an admin, and go to the user management area.
>
> **[0:22](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17213039?u=76281980&t=22)** Click the create user button at the top right.
>
> **[0:25](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17213039?u=76281980&t=25)** Then enter the email address, full name, username, and password.
>
> **[0:30](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17213039?u=76281980&t=30)** Next, choose applications for this account.
>
> **[0:32](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17213039?u=76281980&t=32)** Then click the form submission button.
>
> **[0:34](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17213039?u=76281980&t=34)** The new user is listed at the top of the page.
>
> **[0:37](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17213039?u=76281980&t=37)** They were automatically added to the default Jira software users group.
>
> **[0:41](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17213039?u=76281980&t=41)** You can also use the invite users button at the top right.
>
> **[0:45](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17213039?u=76281980&t=45)** That's the way to add users in Jira Cloud as well.
>
> **[0:47](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17213039?u=76281980&t=47)** Invited users will receive an email with login instructions.

> [!info]- Semantic Content
>
> **Tools:** jira (4)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Creating Jira Projects

> [↑ Back to Table of Contents](#table-of-contents)

#### Types of Jira projects
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-projects?u=76281980&t=0)** - [Instructor] We previously discussed the different types of Jira applications and their project types.
>
> **[0:05](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-projects?u=76281980&t=5)** As you may remember, there are multiple types for different uses.
>
> **[0:09](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-projects?u=76281980&t=9)** We also defined projects as a collection of Jira issues.
>
> **[0:13](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-projects?u=76281980&t=13)** All application types come with templates to help quickly build new projects.
>
> **[0:17](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-projects?u=76281980&t=17)** Example cloud templates are shown on the left and server templates are on the right.
>
> **[0:22](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-projects?u=76281980&t=22)** It's important to choose the right project type for your use case.
>
> **[0:26](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-projects?u=76281980&t=26)** It's possible to change project types later in server and data center, but switching is harder to do in cloud, in cloud, you'll need to create a new project and migrate existing issues to it.
>
> **[0:36](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-projects?u=76281980&t=36)** When a project is created, Jira automatically creates new project settings called schemes.
>
> **[0:41](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-projects?u=76281980&t=41)** Two schemes are highlighted in the screenshot.
>
> **[0:44](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-projects?u=76281980&t=44)** Project will automatically have a new issue type, workflow, screen, field configuration and permission scheme to help you get started.
>
> **[0:53](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-projects?u=76281980&t=53)** In the next section, we'll create a new project.
>
> **[0:55](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-projects?u=76281980&t=55)** We'll use the default schemes but it's good to know that these settings exist, they're customizable and they can be shared between multiple projects.
>
> **[1:04](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-projects?u=76281980&t=64)** One more thing before we move on.
>
> **[1:06](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-projects?u=76281980&t=66)** Some templates in cloud also provide a choice between team-managed and company-managed projects.
>
> **[1:12](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-projects?u=76281980&t=72)** Company-managed projects use schemes that are managed by Jira administrators.
>
> **[1:17](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-projects?u=76281980&t=77)** Team-managed projects are schemeless and are managed by regular users.
>
> **[1:21](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-projects?u=76281980&t=81)** The user and admin interface is slightly different between the two options.
>
> **[1:26](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-projects?u=76281980&t=86)** We'll focus on company-managed projects in this course but check out my [[Planning and Releasing Software with Jira]] course and [[Jira Service Management- Administration]] course to learn more about the team-managed type.

> [!info]- Semantic Content
>
> **Tools:** jira (6)
> **Code Keywords:** case. (1), type, (1), interface (1), type. (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### How to create a project
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=0)** - [Instructor] Every test environment needs a sample project.
>
> **[0:03](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=3)** Let's create one in Jira Cloud and fill it with test data.
>
> **[0:06](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=6)** To use sample data in cloud we need to create a board and a project at the same time, let's try it.
>
> **[0:13](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=13)** Click on the search bar and click Boards at the bottom.
>
> **[0:16](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=16)** This takes you to the page listing all the boards.
>
> **[0:19](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=19)** Next, click the Create board button.
>
> **[0:22](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=22)** Let's create a Kanban board for our test project.
>
> **[0:25](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=25)** Click the Kanban sample data link.
>
> **[0:28](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=28)** On the next screen, name the new Jira project.
>
> **[0:31](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=31)** In the project name field create a short but descriptive name.
>
> **[0:35](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=35)** If this project was for the HR department I'd enter enter Human Resources.
>
> **[0:39](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=39)** This is a test project though so I'll enter test.
>
> **[0:42](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=42)** In the project key field choose a unique code to represent the project.
>
> **[0:46](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=46)** A good key for the Human Resources Project is HR, but since this is the test project, I'll enter test.
>
> **[0:53](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=53)** You can change the project lead if desired.
>
> **[0:56](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=56)** The project lead is a single point of contact.
>
> **[0:59](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=59)** Sometimes this person is also the default assignee for all issues created.
>
> **[1:04](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=64)** Then click the form submission button.
>
> **[1:06](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=66)** You did it, the next screen is a board for a new project with sample issues automatically created.
>
> **[1:13](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=73)** I'll open the first sample issue called TEST-1.
>
> **[1:16](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=76)** Use the sample project to test configuration changes or demo Jira to others without impacting real production data.
>
> **[1:24](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=84)** Let's create a sample project into your server and fill it with test data.
>
> **[1:29](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=89)** Click the admin cog icon and select Projects.
>
> **[1:32](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=92)** Then, click the Create project button.
>
> **[1:34](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=94)** In the overlay, click the Create sample data link at the bottom.
>
> **[1:38](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=98)** On the next screen, choose a project template.
>
> **[1:41](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=101)** I'll choose Project management and then click Next.
>
> **[1:45](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=105)** On the next screen, set the project's identifying features.
>
> **[1:49](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=109)** In the project name field create a short but descriptive name.
>
> **[1:53](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=113)** If this project was for the IT department I'd enter information technology, but it's a test project so I'll enter test.
>
> **[2:01](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=121)** In the project key field choose a unique code to represent the project, a good key for the information technology project is IT.
>
> **[2:08](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=128)** Since this is a test project, I'll keep the suggestion of TEST.
>
> **[2:12](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=132)** You can change the project lead if desired.
>
> **[2:15](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=135)** The project lead is a single point of contact and sometimes this person is also the default issue assignee.
>
> **[2:22](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=142)** Then click, the form submission button.
>
> **[2:24](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=144)** That's it, the next screen shows the sample issues created.
>
> **[2:28](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=148)** Here's the first sample issue called TEST-1.
>
> **[2:31](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=151)** Now, you have a place to test configuration changes, or demo Jira to others without impacting production.
>
> **[2:38](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=158)** Let's look at the settings in our new test project in Jira cloud.
>
> **[2:42](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=162)** Click the admin cog icon and select Projects.
>
> **[2:45](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=165)** Then, select the test project from the list.
>
> **[2:49](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=169)** Click the Project settings link at the bottom of the left nav, and finally click the summary link on the left.
>
> **[2:56](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=176)** The Summary page shows all the settings and schemes powering the project.
>
> **[3:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=180)** Settings for issue types and workflows are on the left and versions and components are on the right.
>
> **[3:06](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=186)** Next, we'll take a quick look at project settings in Jira server.
>
> **[3:10](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=190)** Click the admin icon and select Projects.
>
> **[3:14](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=194)** Then, select the test project from the list.
>
> **[3:17](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=197)** By selecting a project from the application admin area you can skip a step, you're automatically directed to the summary page, which shows all the project settings and schemes.
>
> **[3:27](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=207)** Just like in cloud, the settings for issue types and workflows are on the left and versions and components are on the right.
>
> **[3:34](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=214)** While both application admins and project level admins can view the project settings page some changes are unavailable to project admins.
>
> **[3:42](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=222)** First, a project admin can't change a project's issue types so if the current issue types are task and sub task and they would like Epic, story and bug instead an application administrator needs to make that change.
>
> **[3:55](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=235)** In Server and Data Center it's possible to delegate limited workflow and screen editing capabilities to project admins.
>
> **[4:03](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=243)** Application admins can turn on these functions with a checkbox labeled extended project administration in a project's permission scheme.
>
> **[4:11](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=251)** Let's continue exploring the main project settings.
>
> **[4:14](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=254)** Only application admins can change fields, the list of priority selections and edit settings.
>
> **[4:21](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=261)** Both application and project admins can manage versions, components and roles.
>
> **[4:26](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=266)** Project admins can see the permission, notification and development tool settings, but only application admins can change them.
>
> **[4:35](https://www.linkedin.com/learning/jira-basic-administration-17503968/how-to-create-a-project?u=76281980&t=275)** Application admins can also connect projects to other development tools.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), continue (1)
> **Tools:** jira (6)
> **UI Navigation:** select the (2), click on (1), open the (1), checkbox (1)
> **Definitions:** is a  (5)
> **Env Vars:** test (3)
> **CLI Commands:** make (1)
> **Exercise Files:** template (1)
> **Analogies:** just like (1)

#### Challenge: Create a test project
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-test-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-test-project?u=76281980&t=0)** (peppy digital music)
>
> **[0:08](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-test-project?u=76281980&t=8)** - [Instructor] Now it's time to create a test project of your own.
>
> **[0:11](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-test-project?u=76281980&t=11)** Here are the instructions for this challenge.
>
> **[0:13](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-test-project?u=76281980&t=13)** Log into JIRA as an admin, create a test project and fill it with sample data.
>
> **[0:18](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-test-project?u=76281980&t=18)** Use the provided specifications.
>
> **[0:20](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-test-project?u=76281980&t=20)** Already have a test project?
>
> **[0:22](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-test-project?u=76281980&t=22)** No problem.
>
> **[0:23](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-test-project?u=76281980&t=23)** How about creating a project to demo JIRA to others or to track your JIRA configuration changes?
>
> **[0:29](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-test-project?u=76281980&t=29)** Create whatever makes sense for your organization.

> [!info]- Semantic Content
>
> **Env Vars:** jira (3)
> **Tools:** jira (3)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (peppy digital music) (1)

#### Solution
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214010?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214010?u=76281980&t=0)** - [Instructor] Were you able to create a test project and fill it with sample data?
>
> **[0:09](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214010?u=76281980&t=9)** Here's how to do it.
>
> **[0:11](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214010?u=76281980&t=11)** We'll use both cloud and server in this example.
>
> **[0:14](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214010?u=76281980&t=14)** As you may remember, to leverage sample data in cloud, start by creating a board.
>
> **[0:19](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214010?u=76281980&t=19)** Click on the search bar and click Boards at the bottom.
>
> **[0:22](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214010?u=76281980&t=22)** Next, click Create board on the top right.
>
> **[0:26](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214010?u=76281980&t=26)** In the overlay, click the Kanban sample data link.
>
> **[0:29](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214010?u=76281980&t=29)** Then enter a project name, a project key, the project lead and click the form submission button.
>
> **[0:36](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214010?u=76281980&t=36)** That's it.
>
> **[0:37](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214010?u=76281980&t=37)** Now, there's a test project, a board and sample issue data.
>
> **[0:41](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214010?u=76281980&t=41)** To create a test project in server, simply go to the Projects page and click the Create project button.
>
> **[0:47](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214010?u=76281980&t=47)** Click the Create sample data link at the bottom of the overlay.
>
> **[0:51](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214010?u=76281980&t=51)** Then choose the Project management template.
>
> **[0:53](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214010?u=76281980&t=53)** Enter a project name, a project key, the project lead and click the form submission button.
>
> **[0:59](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214010?u=76281980&t=59)** Now, there's a test project and sample issue data.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (1), go to (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Creating Workflows

> [↑ Back to Table of Contents](#table-of-contents)

#### Types of workflows
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980&t=0)** - [Instructor] A workflow is a set of statuses and transitions that each issue goes through in its lifecycle.
>
> **[0:06](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980&t=6)** Statuses are simply the different steps and transitions represent the movement between steps.
>
> **[0:11](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980&t=11)** A workflow represents a real business process, like building and deploying software, onboarding a new hire marketing a product or service, or supporting customers.
>
> **[0:22](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980&t=22)** Different workflows are often built based on the type of work.
>
> **[0:25](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980&t=25)** There are simple task workflows, development workflows, support workflows, and other workflows for custom processes in your organization.
>
> **[0:34](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980&t=34)** When you create a new project, Jira automatically creates a new workflow for it.
>
> **[0:38](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980&t=38)** If the default workflow doesn't meet your business needs, create a custom one.
>
> **[0:43](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980&t=43)** Jira comes with some pre-built default workflows, like the ones in this screenshot.
>
> **[0:47](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980&t=47)** Some are editable and some are not.
>
> **[0:50](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980&t=50)** The last workflow was automatically created when the Jira demo project was created.
>
> **[0:55](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980&t=55)** Let's take a closer look at the workflow called Jira.
>
> **[0:58](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980&t=58)** Interestingly, the workflow admin page says it was last updated in 1969.
>
> **[1:03](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980&t=63)** I don't think we had Jira back then.
>
> **[1:06](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980&t=66)** Here's the default workflow named Jira in diagram mode.
>
> **[1:09](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980&t=69)** You can't change this workflow, but you can copy it and make changes to the copy.
>
> **[1:14](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980&t=74)** The boxes represent the statuses.
>
> **[1:16](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980&t=76)** Gray signifies issues in the beginning of the lifecycle.
>
> **[1:20](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980&t=80)** Blue are statuses in the middle and green are at the end.
>
> **[1:24](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980&t=84)** Older versions of Jira might also have dark blue and yellow statuses.
>
> **[1:28](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980&t=88)** The colors give users a visual representation of where issues are in the workflow.
>
> **[1:34](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980&t=94)** Additionally, users can query for all issues in a status category.
>
> **[1:38](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980&t=98)** In this example, issues in the backlog and selected for development statuses were both returned because both statuses are in the same status category.
>
> **[1:47](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980&t=107)** Okay, back to the default workflow.
>
> **[1:50](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980&t=110)** The lines between the status boxes represent transitions.
>
> **[1:54](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980&t=114)** The resolve issue transition leads to the resolved status.
>
> **[1:58](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980&t=118)** Transitions leading to a status are sometimes called incoming transitions.
>
> **[2:02](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980&t=122)** Transitions leaving a status are sometimes called outgoing transitions.
>
> **[2:06](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980&t=126)** Now, if you've read my book, you know how I feel about the resolved status and its transitions.
>
> **[2:12](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980&t=132)** Resolved and closed are confusingly similar names, especially for non-development teams.
>
> **[2:17](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980&t=137)** I believe there should only be one final status that indicates all work is done.
>
> **[2:23](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980&t=143)** Otherwise, issues languish in a status like resolved forever which impacts reporting accuracy.
>
> **[2:29](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980&t=149)** Here's the exact same workflow, but in text mode.
>
> **[2:33](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980&t=153)** Text mode shows a workflow in a table format.
>
> **[2:35](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980&t=155)** In the open status, clicking the start progress transition moves an issue to the in progress status.
>
> **[2:42](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980&t=162)** Clicking the resolve issue transition skips to the resolved status, and clicking the close issue transition skips all the way to the final closed status.
>
> **[2:51](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-workflows?u=76281980&t=171)** We'll talk more about statuses, transitions and editing modes in the next section.

> [!info]- Semantic Content
>
> **Tools:** jira (7)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Basic workflow concepts
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=0)** - There are three different workflow states to be aware of, active, draft, and inactive.
>
> **[0:06](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=6)** An active workflow is currently used by one or more projects.
>
> **[0:09](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=9)** You can't delete an active workflow.
>
> **[0:11](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=11)** To delete, you must make the workflow inactive by reassigning any projects using it.
>
> **[0:17](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=17)** When you edit an active workflow, a draft is created.
>
> **[0:20](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=20)** That way, there's no impact to a live project until the draft is published.
>
> **[0:25](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=25)** When you publish the draft, Jira will help migrate existing issues to new statuses if needed.
>
> **[0:30](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=30)** There's one unpublished draft in the screenshot.
>
> **[0:33](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=33)** In server and data center, drafts are shown with an information icon.
>
> **[0:38](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=38)** This screenshot shows I'm editing a draft of an active workflow.
>
> **[0:41](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=41)** There are some draft editing limitations to be aware of.
>
> **[0:45](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=45)** First, you can edit a workflow's description, but not its name.
>
> **[0:49](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=49)** The workaround is to copy the workflow and rename the copy.
>
> **[0:53](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=53)** Next, you can't remove a status.
>
> **[0:55](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=55)** The workaround is to point any transitions to other statuses.
>
> **[0:59](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=59)** Even though the status is still shown, the issue won't go through it during the workflow.
>
> **[1:04](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=64)** Finally, you can't add new outgoing transitions to a status that didn't already have them.
>
> **[1:10](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=70)** The last state is inactive.
>
> **[1:12](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=72)** Inactive workflows aren't in use by any projects and therefore have no editing limitations.
>
> **[1:18](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=78)** Edit them any way you'd like or even delete them.
>
> **[1:21](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=81)** In cloud, click the inactive workflow tab at the top of the page.
>
> **[1:25](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=85)** In server and data center, there's an inactive section that expands at the bottom of the page.
>
> **[1:30](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=90)** Let's dig deeper into statuses.
>
> **[1:33](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=93)** As mentioned earlier, a status describes an issues current lifecycle state.
>
> **[1:37](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=97)** Jira comes with default statuses like to do, in progress, done, open, and closed.
>
> **[1:43](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=103)** Jira software adds additional default statuses, like backlog and select for development.
>
> **[1:49](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=109)** Jira service management adds additional default statuses too, like waiting for support and escalated.
>
> **[1:56](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=116)** You can also add custom statuses like in review, pending approval, or on hold.
>
> **[2:02](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=122)** Status names must be unique.
>
> **[2:04](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=124)** Jira won't allow you to create duplicates.
>
> **[2:07](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=127)** Also, a status must already exists before you can add it to the workflow.
>
> **[2:11](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=131)** Statuses are global elements and that means they're shared between workflows.
>
> **[2:16](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=136)** An issue status is displayed in many places.
>
> **[2:20](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=140)** It's pictured here in an issue, but you can also see it on boards, and dashboards, and search results, and in reports.
>
> **[2:27](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=147)** The status information looks different between deployment types and depending on how projects are created.
>
> **[2:32](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=152)** Atlassian is constantly experimenting with the user interface, especially in cloud.
>
> **[2:37](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=157)** It's okay if your screen doesn't look exactly like my examples.
>
> **[2:41](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=161)** Each status has a category.
>
> **[2:43](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=163)** A status category helps a user identify where in the workflow of the issue is.
>
> **[2:48](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=168)** There are three status categories, to do, in progress, and done.
>
> **[2:53](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=173)** Now, don't confuse these with statuses that might have the same name.
>
> **[2:57](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=177)** Selecting a category is required and category names are not editable.
>
> **[3:01](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=181)** Each category has a unique color.
>
> **[3:03](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=183)** End users will see the colors, and issues, and workflow diagrams, and, as I mentioned earlier, users can query for all issues in a particular status category.
>
> **[3:13](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=193)** The colors have changed over the years, so don't worry if yours are different.
>
> **[3:17](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=197)** When you create a status, it's important to associate it with the most logical category selection.
>
> **[3:22](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=202)** Early workflow statuses like open or new belong in the to-do category.
>
> **[3:27](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=207)** Statuses in the middle of the workflow, like in development or being verified, belong in the in-progress category.
>
> **[3:33](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=213)** And, statuses at the end of the workflow, like closed or done, belong in the done category.
>
> **[3:39](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=219)** Take a look at your status categories and make sure they make sense.
>
> **[3:43](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=223)** Now, let's talk more about transitions, which are what the user clicks to move issues between statuses.
>
> **[3:49](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=229)** The screenshot shows three transitions for the in progress status.
>
> **[3:53](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=233)** From left to right, there are stop progress, start progress, and done.
>
> **[3:58](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=238)** Each transition creates options in cloud or buttons in server and data center.
>
> **[4:03](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=243)** Both examples have the exact same transition options.
>
> **[4:06](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=246)** They're just displayed differently.
>
> **[4:08](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=248)** I classify transitions into four categories.
>
> **[4:11](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=251)** Forward transitions progress issues in the workflow and this is the expected path.
>
> **[4:17](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=257)** Each time an issue moves forward and moves closer to its final status.
>
> **[4:21](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=261)** The start progress transition moves issues from the to-do status forward to the in-progress status.
>
> **[4:27](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=267)** Backward transitions move issues back to a previous step in the workflow.
>
> **[4:31](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=271)** These are often used when more information is needed, when a step needs to be repeated, like an approval, or when the issue was transitioned too far forward by mistake.
>
> **[4:40](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=280)** The stop progress button in the in-progress status is a backwards transition.
>
> **[4:46](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=286)** Alternate transitions give users a choice.
>
> **[4:49](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=289)** In the approval workflow pictured, the forward choice is approved and the alternate choices reject.
>
> **[4:55](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=295)** These transitions allow users to choose the best option for the situation.
>
> **[4:59](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=299)** The final transition type is global.
>
> **[5:01](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=301)** A global transition allows all statuses to transition to another status.
>
> **[5:06](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=306)** For example, allow an issue to jump to the done status from anywhere in the workflow.
>
> **[5:11](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=311)** In diagram mode, a global transition is shown with the all label.
>
> **[5:15](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=315)** In text mode, a global transition is shown in metallics.
>
> **[5:20](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=320)** You can only create global transitions from diagram mode.
>
> **[5:22](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=322)** You can edit or delete them in either mode however.
>
> **[5:26](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=326)** With global transitions, there are fewer transitions to create and maintain.
>
> **[5:30](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=330)** In the screenshot on the right, notice the ID for the global done transition is 71.
>
> **[5:36](https://www.linkedin.com/learning/jira-basic-administration-17503968/basic-workflow-concepts?u=76281980&t=336)** Editing any transition label 71 modifies them all.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (4), let (2), finally, (1), interface (1)
> **Tools:** jira (5)
> **CLI Commands:** make (3)
> **Warnings:** be aware (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - there (1)

#### Using diagram and text mode
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-diagram-and-text-mode?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-diagram-and-text-mode?u=76281980&t=0)** - Let's talk a little bit more about the two workflow editing modes.
>
> **[0:03](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-diagram-and-text-mode?u=76281980&t=3)** On the left is the workflow in diagram mode, and on the right is the same workflow in text mode.
>
> **[0:09](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-diagram-and-text-mode?u=76281980&t=9)** Now, each mode has its pros and cons.
>
> **[0:12](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-diagram-and-text-mode?u=76281980&t=12)** Diagram mode is the simplest and easiest view.
>
> **[0:15](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-diagram-and-text-mode?u=76281980&t=15)** It's also the view the end users see.
>
> **[0:17](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-diagram-and-text-mode?u=76281980&t=17)** This mode includes a workflow designer, which lets you add statuses and transitions, modify the diagram visually by dragging status or transitions around the screen, edit transition properties and behaviors, and add global transitions.
>
> **[0:31](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-diagram-and-text-mode?u=76281980&t=31)** As previously mentioned, global transitions can only be created in diagram mode.
>
> **[0:37](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-diagram-and-text-mode?u=76281980&t=37)** Text mode is the more advanced editor.
>
> **[0:39](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-diagram-and-text-mode?u=76281980&t=39)** You can edit statuses and transitions, plus work directly with the steps.
>
> **[0:43](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-diagram-and-text-mode?u=76281980&t=43)** Now, I prefer text mode.
>
> **[0:45](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-diagram-and-text-mode?u=76281980&t=45)** For me, transitions are easier to understand when they're in table format.
>
> **[0:49](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-diagram-and-text-mode?u=76281980&t=49)** Switch between diagram and text mode using the tabs at the top of the page.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), switch (1)
> **Speakers:** - let (1)

#### Challenge: Create a workflow
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-workflow?u=76281980&t=0)** (light upbeat music)
>
> **[0:08](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-workflow?u=76281980&t=8)** - [Instructor] Let's create a new workflow based on the one automatically created for the test project.
>
> **[0:12](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-workflow?u=76281980&t=12)** First, you'll need to find the correct workflow and make a copy.
>
> **[0:16](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-workflow?u=76281980&t=16)** Here are the steps.
>
> **[0:17](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-workflow?u=76281980&t=17)** Log in to Jira as an admin and go to the Admin area for the TEST project.
>
> **[0:22](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-workflow?u=76281980&t=22)** Then click the Workflows link in the left sidebar.
>
> **[0:24](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-workflow?u=76281980&t=24)** Record the name of the workflow, which is Software Simplified Workflow for project TEST.
>
> **[0:29](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-workflow?u=76281980&t=29)** Now that we know the name of the workflow, let's copy it.
>
> **[0:33](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-workflow?u=76281980&t=33)** Leave the Project Admin area and go to the Workflows admin page instead.
>
> **[0:37](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-workflow?u=76281980&t=37)** Find the TEST project's workflow and click the Copy link on the right.
>
> **[0:41](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-workflow?u=76281980&t=41)** Then in the overlay, give the new workflow a different name, a different description, and click the Form Submission button.
>
> **[0:48](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-workflow?u=76281980&t=48)** The provided description doesn't apply to our new workflow, so I'll remove it.
>
> **[0:53](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-workflow?u=76281980&t=53)** Now that you have a draft workflow, you're ready for the challenge.
>
> **[0:56](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-workflow?u=76281980&t=56)** Here are the instructions.
>
> **[0:58](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-workflow?u=76281980&t=58)** Imagine you're building a new workflow for a business team.
>
> **[1:01](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-workflow?u=76281980&t=61)** Since the team doesn't do development work, you'll need to change some wording.
>
> **[1:05](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-workflow?u=76281980&t=65)** Change the Selected for Development status to the more generic To Do status.
>
> **[1:10](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-workflow?u=76281980&t=70)** Also change the Selected for Development Transition to read To Do.
>
> **[1:14](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-workflow?u=76281980&t=74)** Next, this team has a prioritization process.
>
> **[1:17](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-workflow?u=76281980&t=77)** They don't want issues moving straight from the backlog to the In Progress status.
>
> **[1:21](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-workflow?u=76281980&t=81)** They've asked you to remove the global In Progress transition.
>
> **[1:24](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-workflow?u=76281980&t=84)** As a result, the workflow has no transition from the To Do status to the In Progress status.
>
> **[1:30](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-workflow?u=76281980&t=90)** Add a single transition to fix that.
>
> **[1:33](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-workflow?u=76281980&t=93)** When you're finished, the new workflow should look like this example.
>
> **[1:36](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-create-a-workflow?u=76281980&t=96)** I'll wait while you try it.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (1)
> **Env Vars:** test (3)
> **Code Keywords:** let (2)
> **UI Navigation:** go to (2)
> **Prerequisites:** you'll need (2)
> **Tools:** jira (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Solution
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=0)** (light upbeat music)
>
> **[0:07](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=7)** - [Instructor] Were you able to copy an existing workflow and change it?
>
> **[0:10](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=10)** Admins are often asked to make small changes to existing workflows, and starting from a copy is an easy way to do it.
>
> **[0:17](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=17)** Here are the steps.
>
> **[0:18](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=18)** We'll use Jira Cloud in this example.
>
> **[0:20](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=20)** First, go to the admin area for all Workflows.
>
> **[0:24](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=24)** Then copy the TEST project's workflow.
>
> **[0:31](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=31)** Give the new workflow a name and change or remove the previous description.
>
> **[0:35](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=35)** Now there's a new inactive workflow to modify.
>
> **[0:39](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=39)** First click the Edit link to change the status, change the Step Name and the Linked Status fields.
>
> **[0:48](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=48)** Next, click one of the global Selected for Development transitions and click the Edit button on the top right.
>
> **[0:55](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=55)** All we need to do is change the transition's name.
>
> **[0:58](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=58)** The transition is already pointed to the correct destination step.
>
> **[1:02](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=62)** We're done editing this transition, so click the workflow's name to return to it.
>
> **[1:07](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=67)** Next go to Diagram mode, which is better for managing global transitions.
>
> **[1:12](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=72)** Click the All label next to the In Progress status and click the Delete transition link on the right.
>
> **[1:20](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=80)** I prefer Text mode, so I'll go back to that view.
>
> **[1:25](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=85)** Click the Add transition link to create a transition from the To Do to In Progress status.
>
> **[1:30](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=90)** Give the transition a name.
>
> **[1:32](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=92)** Select the proper destination step and click the form submission button.
>
> **[1:37](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=97)** That's it.
>
> **[1:38](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=98)** Here's our completed workflow in Text mode, and here it is in Diagram mode.
>
> **[1:44](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=104)** Now that you've created a custom workflow, let's apply it to the TEST project.
>
> **[1:49](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=109)** Here are the steps.
>
> **[1:50](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=110)** We'll use Jira Cloud in this example.
>
> **[1:52](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=112)** First log into Jira as an admin and go to the summary page for the TEST project.
>
> **[1:57](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=117)** Under the Workflows header, find the workflow scheme called TEST Software Simplified Workflow Scheme and click the scheme to modify it.
>
> **[2:05](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=125)** This scheme has one workflow called Software Simplified Workflow for project TEST.
>
> **[2:10](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=130)** That workflow is used for all issue types in the project.
>
> **[2:14](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=134)** Let's change it so Story and Bug use the existing workflow and Epic task and Sub-task use a different workflow.
>
> **[2:22](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=142)** Click the Add Workflow button and select Add Existing.
>
> **[2:27](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=147)** In the overlay, choose the custom workflow you created and click the form submission button.
>
> **[2:35](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=155)** Then select the Epic, Sub-task, and Task issue types.
>
> **[2:40](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=160)** Then submit the form.
>
> **[2:41](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=161)** Now there's a draft workflow scheme with two different workflows.
>
> **[2:45](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=165)** Click the Publish button to apply the change.
>
> **[2:47](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=167)** There are existing issues in the TEST project, so we need to map old issue statuses to their new equivalents.
>
> **[2:53](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=173)** Change any issues in the Selected for Development status to the To Do status and click the form submission button.
>
> **[3:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=180)** Jira will migrate any impacted issues to the new workflow.
>
> **[3:03](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=183)** There are 16 issues in the test project, but only one issue, TEST2, is impacted.
>
> **[3:09](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=189)** When the migration is complete, click the Acknowledge button.
>
> **[3:13](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=193)** That's it.
>
> **[3:13](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=193)** The workflow scheme is published.
>
> **[3:15](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17214011?u=76281980&t=195)** The workflows are active and the change is applied to the TEST project.

> [!info]- Semantic Content
>
> **Env Vars:** test (7), test2 (1)
> **UI Navigation:** go to (3), select the (2)
> **Tools:** jira (4)
> **Code Keywords:** let (2), delete (1)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** go back to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 7. Troubleshooting Permission Problems

> [↑ Back to Table of Contents](#table-of-contents)

#### Types of Jira permissions
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=0)** - [Instructor] There are a lot of permission types in Jira.
>
> **[0:03](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=3)** We've already talked about three which are granting application access, global permissions, like the ability to administer Jira, share objects, like filters and dashboards, and make bulk changes, and we covered how memberships in project roles and groups grant abilities.
>
> **[0:18](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=18)** The other permission types are project level, issue level, and workflow level.
>
> **[0:23](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=23)** Let's look at each and how their schemes work.
>
> **[0:26](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=26)** Each project has its own permission settings for actions, like creating, editing, assigning, and closing issues.
>
> **[0:33](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=33)** Use these settings to allow users to assign issues, but restrict who they can be assigned to, allow read-only access or deny access to an entire project.
>
> **[0:43](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=43)** You can do that and much more.
>
> **[0:45](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=45)** Each project's permissions are controlled by a permission scheme.
>
> **[0:48](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=48)** In the example, the administered project's permission is granted to project admins and third party Atlassian apps.
>
> **[0:55](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=55)** The browse project's permission is granted to any logged in user and also third party apps.
>
> **[1:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=60)** There are over 30 different abilities to set in a permission scheme.
>
> **[1:04](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=64)** While we're talking about schemes, we also need to talk about their relationship to projects.
>
> **[1:09](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=69)** We'll start slow and build up to a more complex example.
>
> **[1:13](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=73)** Now, if you find this stuff confusing, you're not alone.
>
> **[1:15](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=75)** It took me a long time to understand the mapping of schemes to projects.
>
> **[1:19](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=79)** But don't worry, it will make more sense as you gain more admin experience.
>
> **[1:24](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=84)** All right, let's discuss how a permission scheme maps to a Jira project.
>
> **[1:28](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=88)** Jira comes with a scheme named default permission scheme.
>
> **[1:31](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=91)** Each Jira project has only one permission scheme, but the same scheme can be shared by multiple projects.
>
> **[1:38](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=98)** In this example, one scheme is powering the sales, legal, and dev projects.
>
> **[1:43](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=103)** Therefore, all projects have the same permission settings.
>
> **[1:47](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=107)** Here's an example of this model.
>
> **[1:49](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=109)** Let's say the scheme restricts the delete issue permission to users in the administrator's role.
>
> **[1:54](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=114)** That means the restriction applies to the different admins in all three projects.
>
> **[1:58](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=118)** Chris can delete issues in the sales project and the legal project, but not in the dev project.
>
> **[2:04](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=124)** If you use roles and groups, only one permission scheme is needed to accomplish this.
>
> **[2:09](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=129)** If you have software projects, you'll see another scheme named default software scheme.
>
> **[2:14](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=134)** Atlassian assumes your dev teams need different abilities than your business teams.
>
> **[2:18](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=138)** If this is true, keep the software scheme.
>
> **[2:21](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=141)** And if not, just remove it.
>
> **[2:23](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=143)** In this example, the sales and legal projects use one scheme and the dev project uses another.
>
> **[2:29](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=149)** So let's say you want to restrict issue deletion in the sales and legal projects, but allow it in the dev project.
>
> **[2:36](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=156)** This is accomplished by using two different schemes.
>
> **[2:39](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=159)** And finally, there's a scheme named Jira service desk permission screen for your service desk and service management projects.
>
> **[2:45](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=165)** It's okay if you have just one permission scheme or a few, but you certainly don't need one scheme per project.
>
> **[2:52](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=172)** Too many schemes are a maintenance problem.
>
> **[2:55](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=175)** As I mentioned, there are over 30 different abilities to set in a permission scheme.
>
> **[2:59](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=179)** For Jira service management, there's an additional permission called service project agent or service desk agent.
>
> **[3:06](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=186)** This permission allows users to interact with portal customers and access support-specific features.
>
> **[3:12](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=192)** In Jira software, there are a few additional permissions for managing sprints and viewing development information, like commits and build information.
>
> **[3:21](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=201)** All right, back to our permission discussion.
>
> **[3:23](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=203)** In addition to securing actions in a project, you can also secure individual project issues with issue security schemes.
>
> **[3:31](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=211)** In the screenshot, there are two security levels, confidential and sensitive.
>
> **[3:36](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=216)** We can use these levels to allow team members to see most issues and allow leadership to see all issues.
>
> **[3:42](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=222)** Each level of security contains different project roles, groups, custom field members, and more.
>
> **[3:48](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=228)** The sensitive level is set as the default.
>
> **[3:51](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=231)** Here are some tips.
>
> **[3:52](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=232)** It's safer to automatically restrict access to all issues and grant access to others with additional levels.
>
> **[3:59](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=239)** Otherwise, you're giving access to all and hoping that users remember to restrict the most sensitive issues.
>
> **[4:05](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=245)** It's really easy to forget to do this.
>
> **[4:07](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=247)** Data is often inadvertently exposed in notification messages and reports.
>
> **[4:12](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=252)** This strategy is sometimes called the least privileged principle.
>
> **[4:15](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=255)** The user is given the minimum level of access that's needed to do their work.
>
> **[4:19](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=259)** My other tip is if you want the user who created the issue to participate during the issue's lifecycle, don't forget to add the reporter to the applicable security level.
>
> **[4:29](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=269)** Unlike other schemes, issue security schemes are not automatically created.
>
> **[4:33](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=273)** If you need one, you must manually create it, add levels, add users and groups to the levels, and associate it with a project.
>
> **[4:42](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=282)** Keep in mind many issue security schemes and levels can impact performance.
>
> **[4:47](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=287)** Projects are not required to have an issue security scheme.
>
> **[4:50](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=290)** In this example, the legal project has one, but the other projects don't, and that's a common use case.
>
> **[4:56](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=296)** Not all organizations need issue security, and if they do, probably only a couple projects contain sensitive data.
>
> **[5:03](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=303)** Don't create issue security schemes if you don't need them and don't create more than you actually need.
>
> **[5:09](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=309)** There's one more permission to know about in the workflows area.
>
> **[5:12](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=312)** Let's say you want to restrict the approval ability, like in this example.
>
> **[5:16](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=316)** Simply add a condition to hide the transition from regular users.
>
> **[5:20](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=320)** In the screenshot, I've restricted the past transition in the awaiting approval status to the users in the administrator's role.
>
> **[5:28](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=328)** Now only project admins can transition issues through to the status.
>
> **[5:32](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=332)** If a user can't see a transition, be sure to check the workflow for embedded restrictions.
>
> **[5:38](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=338)** The workflow scheme relationship is more complex than the others we've covered.
>
> **[5:42](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=342)** Each project has one workflow scheme, but it's possible to have multiple workflows in the scheme.
>
> **[5:48](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=348)** The test project we created earlier has the following default issue types, bug, story, epic, task, and sub-task.
>
> **[5:56](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=356)** One workflow scheme with one workflow was automatically created for us.
>
> **[6:01](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=361)** The simplest setup is when every issue type uses the same workflow.
>
> **[6:05](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=365)** Here's a common example for a development team that's a little more complex.
>
> **[6:09](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=369)** The workflow scheme has two workflows.
>
> **[6:11](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=371)** One is for bugs and stories, and the other is for epics, tasks, and sub-tasks.
>
> **[6:16](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=376)** Bugs and stories often have an additional workflow step, like approval or a verification or a deployment.
>
> **[6:23](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=383)** So this model allows some issues to have extra steps and the others to use a shorter workflow.
>
> **[6:28](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=388)** All right, let's compare the two examples.
>
> **[6:30](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=390)** The test project uses a workflow scheme with one workflow.
>
> **[6:34](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=394)** The dev project uses a workflow scheme with two workflows.
>
> **[6:37](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=397)** As you can see, schemes are very powerful, but they can also easily become unmanageable.
>
> **[6:43](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=403)** You probably don't need a workflow for each issue type and you definitely don't need a different workflow for each issue type in each project.
>
> **[6:51](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-permissions?u=76281980&t=411)** Keep your settings simple, especially in the beginning.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), delete (2), this. (2), finally, (1), default. (1)
> **Tools:** jira (8)
> **CLI Commands:** make (2), find (1)
> **Best Practices:** remember to (1), don't forget (1)
> **Cross-References:** we covered (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Using the Permission Helper
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-permission-helper?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-permission-helper?u=76281980&t=0)** - [Instructor] There are a lot of permission types, schemes and places to look when users report access problems.
>
> **[0:06](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-permission-helper?u=76281980&t=6)** Luckily, there's a feature to help troubleshoot permissions.
>
> **[0:10](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-permission-helper?u=76281980&t=10)** It's called the Permission Helper.
>
> **[0:12](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-permission-helper?u=76281980&t=12)** It uncovers why a user can or can't interact with an issue.
>
> **[0:16](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-permission-helper?u=76281980&t=16)** For example, a user might not be in a needed group or project role.
>
> **[0:20](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-permission-helper?u=76281980&t=20)** Try using this tool to start a permission investigation.
>
> **[0:23](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-permission-helper?u=76281980&t=23)** There are a few ways to get to it.
>
> **[0:25](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-permission-helper?u=76281980&t=25)** First, go to the System page in the Admin area and click the Permission Helper link in the left nav, as shown.
>
> **[0:32](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-permission-helper?u=76281980&t=32)** Next, access the Permission Helper from a permission scheme.
>
> **[0:35](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-permission-helper?u=76281980&t=35)** Go to the Permission Schemes page in the Admin area.
>
> **[0:38](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-permission-helper?u=76281980&t=38)** Open any scheme and look for the Permission Helper button on the top right.
>
> **[0:43](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-permission-helper?u=76281980&t=43)** In Server and Data Center, you can also access the Permission Helper from the Admin menu in an individual issue.
>
> **[0:50](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-permission-helper?u=76281980&t=50)** Next, let's look at how the Permission Helper solves problems, here's a scenario, a user reports they cannot delete issue INDT-40.
>
> **[0:59](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-permission-helper?u=76281980&t=59)** Let's use the Permission Helper to find the reasons why.
>
> **[1:02](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-permission-helper?u=76281980&t=62)** Enter the user's name, enter the issue ID, enter the permission to check, which is delete issues and click the form submission button.
>
> **[1:11](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-permission-helper?u=76281980&t=71)** Here are the results.
>
> **[1:12](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-permission-helper?u=76281980&t=72)** The Permission Helper shows the user does not have the delete issues permission.
>
> **[1:16](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-permission-helper?u=76281980&t=76)** Additionally, it shows that no one else has that permission either.
>
> **[1:20](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-permission-helper?u=76281980&t=80)** Now, this is by design in line to your application.
>
> **[1:23](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-permission-helper?u=76281980&t=83)** As you may remember, I recommend disabling issue deletion.
>
> **[1:26](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-permission-helper?u=76281980&t=86)** You can never get a deleted issue back so it's better to simply close issues that you don't need anymore.
>
> **[1:32](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-permission-helper?u=76281980&t=92)** From here, either add the user to the need permission, or teach them how to close issues instead of deleting them.
>
> **[1:39](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-permission-helper?u=76281980&t=99)** Here's a tip, the Permission Helper won't check inside workflows, or third-party app settings.
>
> **[1:45](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-permission-helper?u=76281980&t=105)** You'll need to check those permission settings manually.
>
> **[1:48](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-permission-helper?u=76281980&t=108)** There are multiple ways to solve problems in Jira.
>
> **[1:51](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-permission-helper?u=76281980&t=111)** The best way depends on your business goals, application size, compliance requirements, and other factors.
>
> **[1:58](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-permission-helper?u=76281980&t=118)** When deciding what to do always consider the health and future of your application.
>
> **[2:03](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-permission-helper?u=76281980&t=123)** Then, pick the best method for your circumstance.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (3), let (2)
> **UI Navigation:** go to (2)
> **CLI Commands:** find (1)
> **Env Vars:** indt (1)
> **Tools:** jira (1)
> **Analogies:** for example (1)
> **Warnings:** troubleshoot (1)
> **Prerequisites:** you'll need (1)

#### Challenge: Determine the permission problem
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-determine-the-permission-problem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-determine-the-permission-problem?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:08](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-determine-the-permission-problem?u=76281980&t=8)** - Here are the instructions for this challenge.
>
> **[0:10](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-determine-the-permission-problem?u=76281980&t=10)** Use the permission helper to determine the problem.
>
> **[0:13](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-determine-the-permission-problem?u=76281980&t=13)** Figure out why the test user you created can't modify the reporter in your test project.
>
> **[0:18](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-determine-the-permission-problem?u=76281980&t=18)** Once you've uncovered the problem, decide if you need to make a change to the project or the permission scheme.
>
> **[0:24](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-determine-the-permission-problem?u=76281980&t=24)** If you make a change, rerun the permission helper to make sure the problem is remedied.
>
> **[0:28](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-determine-the-permission-problem?u=76281980&t=28)** You can also log in as the test user to verify the permission.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Speakers:** - here (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### Solution
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution?u=76281980&t=0)** (peppy digital music)
>
> **[0:08](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution?u=76281980&t=8)** - [Instructor] Were you able to detect the permission problem?
>
> **[0:10](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution?u=76281980&t=10)** Here's how to do it.
>
> **[0:11](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution?u=76281980&t=11)** We'll use JIRA server in this example.
>
> **[0:13](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution?u=76281980&t=13)** First log into JIRA and go to one of the permission helper locations.
>
> **[0:18](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution?u=76281980&t=18)** I'll use the one in the System Admin area.
>
> **[0:23](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution?u=76281980&t=23)** Enter the user, the issue, the permission, and click the Form Submission button.
>
> **[0:30](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution?u=76281980&t=30)** Then scroll down to see the results.
>
> **[0:33](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution?u=76281980&t=33)** The problem is the user doesn't have the needed permission.
>
> **[0:36](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution?u=76281980&t=36)** Also, click the Show Failed Conditions Link for additional information.
>
> **[0:40](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution?u=76281980&t=40)** It shows this permission is restricted to Project Administrators.
>
> **[0:44](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution?u=76281980&t=44)** Now that you know what the problem is there are three ways to solve it.
>
> **[0:48](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution?u=76281980&t=48)** They are; make the user an admin in the project, add the user to the Modify Reporter line in the permission scheme, or do nothing.
>
> **[0:56](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution?u=76281980&t=56)** Which do you think is the best choice?
>
> **[0:59](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution?u=76281980&t=59)** This account is for a regular user so don't make them a Project Admin.
>
> **[1:03](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution?u=76281980&t=63)** If it's all right for the user to change the reporter then update the permission scheme.
>
> **[1:08](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution?u=76281980&t=68)** Otherwise, there's no need to take any action.
>
> **[1:11](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution?u=76281980&t=71)** Great.
>
> **[1:11](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution?u=76281980&t=71)** You've completed the challenge by detecting the problem.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Env Vars:** jira (2)
> **Tools:** jira (2)
> **UI Navigation:** go to (1), scroll down (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (peppy digital music) (1)


### 8. Troubleshooting Missing Notifications

> [↑ Back to Table of Contents](#table-of-contents)

#### Types of Jira notifications
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-notifications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-notifications?u=76281980&t=0)** - [Instructor] Each issue activity is associated with an event.
>
> **[0:03](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-notifications?u=76281980&t=3)** For example, an event called issue created is triggered for each new issue.
>
> **[0:08](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-notifications?u=76281980&t=8)** When the event occurs, Jira automatically sends an email notification for it.
>
> **[0:12](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-notifications?u=76281980&t=12)** There are about 17 notifications like issue created, issue closed, and work logged on issue.
>
> **[0:19](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-notifications?u=76281980&t=19)** You can also create your own custom events if needed.
>
> **[0:22](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-notifications?u=76281980&t=22)** The many project notifications are controlled by a notification scheme.
>
> **[0:26](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-notifications?u=76281980&t=26)** Jira comes with one called Default Notification Scheme that's associated to projects created.
>
> **[0:31](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-notifications?u=76281980&t=31)** Use the default scheme, create a custom one, or use no scheme at all.
>
> **[0:36](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-notifications?u=76281980&t=36)** The screenshot shows the default scheme and its first three events.
>
> **[0:39](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-notifications?u=76281980&t=39)** The issue created event notifies the current assignee and reporter for each new issue in the project.
>
> **[0:45](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-notifications?u=76281980&t=45)** The issue updated event emails the current assignee, reporter and all watchers for each change.
>
> **[0:52](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-notifications?u=76281980&t=52)** Issue updated includes changes to fields, attachments and deleted comments.
>
> **[0:57](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-notifications?u=76281980&t=57)** The issue commented event, however, handles new comments.
>
> **[1:01](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-notifications?u=76281980&t=61)** Projects are not required to have a notification scheme.
>
> **[1:04](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-notifications?u=76281980&t=64)** In this example, most projects use one but the HR project doesn't.
>
> **[1:09](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-notifications?u=76281980&t=69)** The HR team prefers a proactive approach instead of constant emails.
>
> **[1:14](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-notifications?u=76281980&t=74)** Members of this team use boards, dashboards and filter subscriptions to monitor their issues, or maybe they've connected their Jira project to their chat program and receive notifications there.
>
> **[1:25](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-notifications?u=76281980&t=85)** When's the last time your user said, "I wish I had more email?"
>
> **[1:29](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-notifications?u=76281980&t=89)** Probably never, so these notification abilities should be applied sparingly.
>
> **[1:34](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-notifications?u=76281980&t=94)** If you send a notification for every little action, users are likely to ignore them or send them directly to the trash.
>
> **[1:41](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-notifications?u=76281980&t=101)** It's important to send the right amount of notifications for your organization.
>
> **[1:45](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-notifications?u=76281980&t=105)** There are two additional notification settings to be aware of, user default settings and user profile settings.
>
> **[1:52](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-notifications?u=76281980&t=112)** Here's some info about each.
>
> **[1:54](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-notifications?u=76281980&t=114)** By default, users are not notified of their own changes.
>
> **[1:58](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-notifications?u=76281980&t=118)** Usually people know what change they made and they don't need an email about it.
>
> **[2:02](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-notifications?u=76281980&t=122)** Now, this is a global setting that only application admins can access.
>
> **[2:06](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-notifications?u=76281980&t=126)** Check to see what your application setting is.
>
> **[2:09](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-notifications?u=76281980&t=129)** You'll find it on the user default settings page in the system admin area.
>
> **[2:14](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-notifications?u=76281980&t=134)** There's also a notification setting in a user's personal profile.
>
> **[2:18](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-notifications?u=76281980&t=138)** In cloud, the setting is called you make changes to the issue.
>
> **[2:22](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-notifications?u=76281980&t=142)** In server and data center, the setting is called my changes.
>
> **[2:25](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-notifications?u=76281980&t=145)** This lets users override the global default with a different setting if desired.
>
> **[2:30](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-notifications?u=76281980&t=150)** Sometimes I temporarily enable the option to test notification behavior, but then I quickly turn it back off again.
>
> **[2:37](https://www.linkedin.com/learning/jira-basic-administration-17503968/types-of-jira-notifications?u=76281980&t=157)** I definitely don't need more email.

> [!info]- Semantic Content
>
> **Tools:** jira (3)
> **Definitions:** is called (2), is a  (1)
> **CLI Commands:** find (1), make (1)
> **Code Keywords:** default, (1), override (1)
> **Analogies:** for example (1)
> **Warnings:** be aware (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### Using the Notification Helper
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=0)** - [Instructor] Sometimes users don't receive messages they expect Jira to send.
>
> **[0:04](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=4)** There are many non-Jira potential reasons.
>
> **[0:07](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=7)** For example, outgoing mail is disabled application wide, there's a problem with the mail server or it's currently down for maintenance.
>
> **[0:15](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=15)** There's a temporary connection issue between Jira and the mail server, or maybe connection details changed.
>
> **[0:20](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=20)** The user's mailbox is misconfigured, can't receive external messages or is full.
>
> **[0:26](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=26)** There's a typo in or a different email address in the user's Jira profile.
>
> **[0:31](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=31)** Jira messages are blocked or flagged to spam at the server or user level, or mail client rules remove Jira messages from the inbox.
>
> **[0:40](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=40)** Here are some Jira-related reasons.
>
> **[0:42](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=42)** A Jira project doesn't have a notification scheme.
>
> **[0:45](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=45)** The scheme is misconfigured, empty or the user is not in the needed group or role.
>
> **[0:50](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=50)** The user has disabled notifications of their own changes in their Jira profile, or the user expects a message that doesn't exist.
>
> **[0:58](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=58)** For example, there are no notifications when watchers are added or removed.
>
> **[1:03](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=63)** That's not a Jira feature, but sometimes users think it is.
>
> **[1:06](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=66)** Other times, a user does receive a message, but it says something generic and they overlook it.
>
> **[1:11](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=71)** The message says, issue updated, but they're expecting other wording.
>
> **[1:15](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=75)** Now, I've been using Jira since 2011 and I've encountered all of these scenarios.
>
> **[1:20](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=80)** I've never experienced a case where Jira should have sent an email but didn't.
>
> **[1:24](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=84)** The problem was always something else, like an issue with the mail server, the user's mailbox, or with the notification schemes configuration.
>
> **[1:33](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=93)** The trouble I've encountered was always traceable and reproducible.
>
> **[1:36](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=96)** I haven't encountered any unsolvable Jira notification mysteries.
>
> **[1:41](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=101)** As you can see, there are a lot of potential email issues to troubleshoot.
>
> **[1:45](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=105)** Luckily, there's a Jira feature to check some of it.
>
> **[1:47](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=107)** It's the notification helper.
>
> **[1:49](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=109)** It uncovers why a user does or doesn't receive an email.
>
> **[1:53](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=113)** After you've ruled out issues with the mail server and mailbox, use this tool to start an investigation.
>
> **[1:59](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=119)** There are a few ways to get to it.
>
> **[2:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=120)** First, go to the system page in the admin area and look for the notification helper link in the left nav as shown.
>
> **[2:07](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=127)** The link is directly under the permission helper link.
>
> **[2:10](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=130)** Next, access the notification helper from a notification scheme.
>
> **[2:14](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=134)** Look for the button at the top right.
>
> **[2:16](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=136)** In Server and Data Center, you can also use the admin menu in an individual issue.
>
> **[2:22](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=142)** Next, let's try out the notification helper to see how it works.
>
> **[2:25](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=145)** Here's a scenario.
>
> **[2:27](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=147)** A user reports REBRAND-1 was created, but they didn't receive an email about it.
>
> **[2:32](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=152)** Let's use the notification helper to find the reasons why.
>
> **[2:35](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=155)** Enter the user's name, the issue ID, the event check which is issue created and click the form submission button.
>
> **[2:42](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=162)** Here are the results.
>
> **[2:44](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=164)** The notification helper shows the user does not receive notifications for this event because they're not the reporter or the current assignee.
>
> **[2:51](https://www.linkedin.com/learning/jira-basic-administration-17503968/using-the-notification-helper?u=76281980&t=171)** Mystery solved.

> [!info]- Semantic Content
>
> **Tools:** jira (14)
> **Code Keywords:** let (2), else, (1)
> **Analogies:** for example (2)
> **CLI Commands:** find (1)
> **Env Vars:** rebrand (1)
> **UI Navigation:** go to (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Determine the notification problem
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-determine-the-notification-problem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-determine-the-notification-problem?u=76281980&t=0)** - [Instructor] Here are the instructions for this challenge.
>
> **[0:10](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-determine-the-notification-problem?u=76281980&t=10)** Use the notification helper to determine the problem.
>
> **[0:13](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-determine-the-notification-problem?u=76281980&t=13)** Figure out why the test user created earlier doesn't receive issue updated notifications in the test project.
>
> **[0:19](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-determine-the-notification-problem?u=76281980&t=19)** Once you've uncovered the problem, decide if you need to make a change to the application or the notification scheme.
>
> **[0:25](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-determine-the-notification-problem?u=76281980&t=25)** If you make a change, rerun the notification helper to make sure the problem is remedied.
>
> **[0:30](https://www.linkedin.com/learning/jira-basic-administration-17503968/challenge-determine-the-notification-problem?u=76281980&t=30)** You can also log in as the test user, trigger a notification and check for email.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17207976?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17207976?u=76281980&t=0)** - [Instructor] Were you able to detect the notification problem?
>
> **[0:10](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17207976?u=76281980&t=10)** Here's how to do it and we'll use Jira server in this example.
>
> **[0:14](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17207976?u=76281980&t=14)** First, log in to Jira and go to one of the notification helper locations.
>
> **[0:18](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17207976?u=76281980&t=18)** I'll use the one in the system admin area.
>
> **[0:25](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17207976?u=76281980&t=25)** Enter the user, the issue, the event and click the form submission button.
>
> **[0:31](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17207976?u=76281980&t=31)** There are two problems listed.
>
> **[0:33](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17207976?u=76281980&t=33)** First, it says the user doesn't receive notifications for this event.
>
> **[0:38](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17207976?u=76281980&t=38)** Second, it says there's no mail server set up so no users will receive notifications until that's fixed.
>
> **[0:44](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17207976?u=76281980&t=44)** Click on the default notification scheme link to learn more about the first problem.
>
> **[0:50](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17207976?u=76281980&t=50)** The issue updated item only sends messages to an issue's watchers, current assignee and reporter, and our test user is none of these.
>
> **[0:58](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17207976?u=76281980&t=58)** Now that you know what the problem is, there are three ways to solve it.
>
> **[1:01](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17207976?u=76281980&t=61)** They are, make the user a watcher of the issue, add the user to the issue updated line in the notification scheme, or do nothing.
>
> **[1:10](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17207976?u=76281980&t=70)** Which do you think is the best choice?
>
> **[1:12](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17207976?u=76281980&t=72)** If the user only wants notifications for one issue, the best solution is to make them a watcher.
>
> **[1:18](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17207976?u=76281980&t=78)** If the goal is to notify the user for all issues in the project, then update the notification scheme.
>
> **[1:23](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17207976?u=76281980&t=83)** Otherwise, there's no need to take any action.
>
> **[1:26](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17207976?u=76281980&t=86)** All right.
>
> **[1:27](https://www.linkedin.com/learning/jira-basic-administration-17503968/solution-17207976?u=76281980&t=87)** You've completed this challenge by detecting the problem.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Tools:** jira (2)
> **UI Navigation:** go to (1), click on (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Additional learning resources
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-basic-administration-17503968/additional-learning-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-basic-administration-17503968/additional-learning-resources?u=76281980&t=0)** - [Rachel] Congrats on completing the course.
>
> **[0:02](https://www.linkedin.com/learning/jira-basic-administration-17503968/additional-learning-resources?u=76281980&t=2)** You've performed many of the tasks expected of a new tier administrator and are well on your way towards a strong admin foundation.
>
> **[0:09](https://www.linkedin.com/learning/jira-basic-administration-17503968/additional-learning-resources?u=76281980&t=9)** You should now be able to determine your application type and deployment method, recognize different types of admins and users, set up a test environment to test configuration changes, and add new users, grant application access, and manage role and group membership.
>
> **[0:25](https://www.linkedin.com/learning/jira-basic-administration-17503968/additional-learning-resources?u=76281980&t=25)** You should also be able to create Jira projects and fill them with sample data, edit workflow statuses and transitions, and troubleshoot common permission and notification problems.
>
> **[0:36](https://www.linkedin.com/learning/jira-basic-administration-17503968/additional-learning-resources?u=76281980&t=36)** Your next step is to continue learning.
>
> **[0:38](https://www.linkedin.com/learning/jira-basic-administration-17503968/additional-learning-resources?u=76281980&t=38)** There's always more to learn and new features are added all the time and there are a ton of resources available.
>
> **[0:44](https://www.linkedin.com/learning/jira-basic-administration-17503968/additional-learning-resources?u=76281980&t=44)** You just have to know where to look, seek them out, and put it in a little time and effort.
>
> **[0:49](https://www.linkedin.com/learning/jira-basic-administration-17503968/additional-learning-resources?u=76281980&t=49)** My 9 Ways to Learn Jira Administration article will point you in the right direction.
>
> **[0:54](https://www.linkedin.com/learning/jira-basic-administration-17503968/additional-learning-resources?u=76281980&t=54)** Oh, and don't forget to take my Advanced Administration course to dive deeper into the configuration areas used most.
>
> **[1:01](https://www.linkedin.com/learning/jira-basic-administration-17503968/additional-learning-resources?u=76281980&t=61)** Here's some additional resources so you can continue learning.
>
> **[1:04](https://www.linkedin.com/learning/jira-basic-administration-17503968/additional-learning-resources?u=76281980&t=64)** Atlassian's product documentation contains content specifically for administrators.
>
> **[1:09](https://www.linkedin.com/learning/jira-basic-administration-17503968/additional-learning-resources?u=76281980&t=69)** All the information is categorized by application type and version.
>
> **[1:14](https://www.linkedin.com/learning/jira-basic-administration-17503968/additional-learning-resources?u=76281980&t=74)** Just make sure you're reading the right information.
>
> **[1:17](https://www.linkedin.com/learning/jira-basic-administration-17503968/additional-learning-resources?u=76281980&t=77)** Next, visit support.[atlassian.com](https://atlassian.com) for vendor help or to report a bug.
>
> **[1:23](https://www.linkedin.com/learning/jira-basic-administration-17503968/additional-learning-resources?u=76281980&t=83)** In Server and Data Center, visit the Troubleshooting and support tools admin page to create a support zip to send to Atlassian.
>
> **[1:30](https://www.linkedin.com/learning/jira-basic-administration-17503968/additional-learning-resources?u=76281980&t=90)** This feature exports your logs and configuration info to help the vendor troubleshoot problems.
>
> **[1:37](https://www.linkedin.com/learning/jira-basic-administration-17503968/additional-learning-resources?u=76281980&t=97)** Next, the Atlassian community is where you'll find answers, support, and inspiration from others.
>
> **[1:43](https://www.linkedin.com/learning/jira-basic-administration-17503968/additional-learning-resources?u=76281980&t=103)** Log in with your Atlassian ID at [communityatlassian.com](https://communityatlassian.com) to ask a question or start a discussion.
>
> **[1:49](https://www.linkedin.com/learning/jira-basic-administration-17503968/additional-learning-resources?u=76281980&t=109)** There are also plenty of Jira theme groups and discussions on social media.
>
> **[1:54](https://www.linkedin.com/learning/jira-basic-administration-17503968/additional-learning-resources?u=76281980&t=114)** Next, studying for Atlassian certification is a great way to learn more about Jira.
>
> **[1:59](https://www.linkedin.com/learning/jira-basic-administration-17503968/additional-learning-resources?u=76281980&t=119)** The test is challenging, but the certification experience made me a better admin.
>
> **[2:04](https://www.linkedin.com/learning/jira-basic-administration-17503968/additional-learning-resources?u=76281980&t=124)** Read my tips for obtaining and extending your certification at the URL shown.
>
> **[2:09](https://www.linkedin.com/learning/jira-basic-administration-17503968/additional-learning-resources?u=76281980&t=129)** The final resource is the Jira Strategy Admin Workbook.
>
> **[2:13](https://www.linkedin.com/learning/jira-basic-administration-17503968/additional-learning-resources?u=76281980&t=133)** It saves you time, money, and frustration.
>
> **[2:16](https://www.linkedin.com/learning/jira-basic-administration-17503968/additional-learning-resources?u=76281980&t=136)** But this book is different, it's not documentation, it's recommendations from years of cleaning up horrible Jira configurations.
>
> **[2:24](https://www.linkedin.com/learning/jira-basic-administration-17503968/additional-learning-resources?u=76281980&t=144)** It's about what you should do, shouldn't do, and why.
>
> **[2:27](https://www.linkedin.com/learning/jira-basic-administration-17503968/additional-learning-resources?u=76281980&t=147)** Get the book and additional materials at [jirastrategy.com](https://jirastrategy.com).
>
> **[2:32](https://www.linkedin.com/learning/jira-basic-administration-17503968/additional-learning-resources?u=76281980&t=152)** Good luck with your Jira journey, and I'll see you online.

> [!info]- Semantic Content
>
> **Tools:** jira (7)
> **URLs:** [atlassian.com](https://atlassian.com) (1), [communityatlassian.com](https://communityatlassian.com) (1), [jirastrategy.com](https://jirastrategy.com) (1)
> **CLI Commands:** make (1), find (1)
> **Code Keywords:** continue (2)
> **Warnings:** troubleshoot (2)
> **Env Vars:** url (1)
> **Definitions:** is a  (1)
> **Best Practices:** don't forget (1)


## Instructor

- [[Rachel Wright]]

## Skills Covered

- System Administration
- Jira

## Path Context

### In [[Mastering Jira Administration]]
← [[Learning Jira Cloud Edition]] | **2 of 7** | [[Jira Service Management- Administration]] →

## Appears In

- [[Mastering Jira Administration]]

## Related Courses

_Courses sharing skills:_

- [[Jira Administration- Automation]] — Jira
- [[Jira- Managing Custom Workflows]] — Jira
- [[Jira- Advanced Administration]] — Jira
- [[Jira Service Management- Administration]] — Jira
- [[Red Hat Certified System Administrator Ex200 Cert Prep 1 Deploy Configure And Manage]] — System Administration

---

[↑ Back to top](#)