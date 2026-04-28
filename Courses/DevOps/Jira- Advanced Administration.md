---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: jira-advanced-administration
url: "https://www.linkedin.com/learning/jira-advanced-administration"
duration_minutes: 202
duration: 3h 22m
level: Advanced
updated: 9/9/2024
learners: 14820
skills:
  - Project Tracking
  - Jira
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQG4hiUwA-TKbw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1624639848574?e=2147483647&amp;v=beta&amp;t=kdWs3FufHaFWaeODJxtP6D2FvSi4k1iectblGpnzX0M"
linkedin_topic: DevOps
learning_paths:
  - '[[Mastering Jira Administration]]'
prev_courses:
  - '[[Jira Service Management- Administration]]'
next_courses:
  - '[[Jira- Managing Custom Workflows]]'
path_nav: '[{"path":"Mastering Jira Administration","position":4,"total":7,"prev":"Jira Service Management- Administration","next":"Jira- Managing Custom Workflows"}]'
path_count: 1
tags:
  - course
  - topic/devops
  - topic/network-and-system-administration
  - skill/project-tracking
  - skill/jira
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Jira-%20Advanced%20Administration.md)

![Jira: Advanced Administration](https://media.licdn.com/dms/image/v2/C560DAQG4hiUwA-TKbw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1624639848574?e=2147483647&amp;v=beta&amp;t=kdWs3FufHaFWaeODJxtP6D2FvSi4k1iectblGpnzX0M)

# Jira: Advanced Administration

> Jira is the industry standard for tracking work, tasks, and strategic company initiatives. The software is extremely flexible and customizable, which is both a blessing and a curse. Jira administrators need to be able to configure application settings to support the needs of the organization, which requires an intimate understanding of the capabilities, global options, and scheme configurations in

> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration) | 3h 22m | Advanced | 15K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (3 videos)
- **2. 1. Configuration Options** (6 videos)
- **3. 2. Using Schemes** (5 videos)
- **4. 3. Creating Custom Schemes** (6 videos)
- **5. 4. Managing Project Settings** (5 videos)
- **6. 5. Working with Groups and Roles** (5 videos)
- **7. 6. Restricting and Sharing Information** (5 videos)
- **8. 7. Extending Jira** (5 videos)
- **9. 8. Advanced Features** (6 videos)
- **10. Conclusion** (1 videos)

### 1. Introduction

#### Administration in Jira
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/administration-in-jira?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/administration-in-jira?u=76281980&t=0)** - [Rachel] Jira is the industry standard for tracking work, tasks, and strategic company initiatives.
>
> **[0:06](https://www.linkedin.com/learning/jira-advanced-administration/administration-in-jira?u=76281980&t=6)** The software is infinitely flexible and customizable.
>
> **[0:09](https://www.linkedin.com/learning/jira-advanced-administration/administration-in-jira?u=76281980&t=9)** Jira administrators need to carefully select application settings and build smart configurations Hi, I'm Rachel Wright, certified Jira administrator and author of the Jira Strategy Admin Workbook.
>
> **[0:21](https://www.linkedin.com/learning/jira-advanced-administration/administration-in-jira?u=76281980&t=21)** I've used Jira since 2011 and I've made all the configuration mistakes already.
>
> **[0:26](https://www.linkedin.com/learning/jira-advanced-administration/administration-in-jira?u=76281980&t=26)** So you don't have to.
>
> **[0:27](https://www.linkedin.com/learning/jira-advanced-administration/administration-in-jira?u=76281980&t=27)** In this course, you'll learn the most important configuration options like general settings and global permissions.
>
> **[0:34](https://www.linkedin.com/learning/jira-advanced-administration/administration-in-jira?u=76281980&t=34)** How schemes work together to power to your projects.
>
> **[0:37](https://www.linkedin.com/learning/jira-advanced-administration/administration-in-jira?u=76281980&t=37)** How to create custom projects, issue types, workflows, screens, and custom fields.
>
> **[0:43](https://www.linkedin.com/learning/jira-advanced-administration/administration-in-jira?u=76281980&t=43)** How to manage project specific settings like components and versions.
>
> **[0:47](https://www.linkedin.com/learning/jira-advanced-administration/administration-in-jira?u=76281980&t=47)** How to use groups and roles for easy user management.
>
> **[0:51](https://www.linkedin.com/learning/jira-advanced-administration/administration-in-jira?u=76281980&t=51)** How to restrict access and share information with permissions.
>
> **[0:54](https://www.linkedin.com/learning/jira-advanced-administration/administration-in-jira?u=76281980&t=54)** Issue your security and notification schemes.
>
> **[0:57](https://www.linkedin.com/learning/jira-advanced-administration/administration-in-jira?u=76281980&t=57)** Ways to extend Jira with apps, connections, and integrations.
>
> **[1:01](https://www.linkedin.com/learning/jira-advanced-administration/administration-in-jira?u=76281980&t=61)** And advanced features like importing data, creating issues from email, adding custom events and automation.
>
> **[1:09](https://www.linkedin.com/learning/jira-advanced-administration/administration-in-jira?u=76281980&t=69)** Let's get started.

> [!info]- Semantic Content
>
> **Tools:** jira (6)
> **Code Keywords:** let (1)
> **Speakers:** - [rachel] (1)

#### Who is this for?
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/who-is-this-for?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/who-is-this-for?u=76281980&t=0)** - In this course, we'll focus on the configuration areas you use most, my goal is not just for you to understand the settings, but to be able to make smart decisions when creating or changing them.
>
> **[0:11](https://www.linkedin.com/learning/jira-advanced-administration/who-is-this-for?u=76281980&t=11)** Knowing the best way to solve a problem and how it will impact your application in the future is the difference between a good administrator and a great one.
>
> **[0:19](https://www.linkedin.com/learning/jira-advanced-administration/who-is-this-for?u=76281980&t=19)** For each section, I've included the most important things to know, best practices and my personal tips.
>
> **[0:25](https://www.linkedin.com/learning/jira-advanced-administration/who-is-this-for?u=76281980&t=25)** So you can avoid all the mistakes I've made over the years.
>
> **[0:28](https://www.linkedin.com/learning/jira-advanced-administration/who-is-this-for?u=76281980&t=28)** Don't miss the challenges, quizzes, downloadable handouts, and some personal experiences, scattered throughout the course.
>
> **[0:36](https://www.linkedin.com/learning/jira-advanced-administration/who-is-this-for?u=76281980&t=36)** This course helps Jira administrators better understand the settings and schemes they are configuring.
>
> **[0:42](https://www.linkedin.com/learning/jira-advanced-administration/who-is-this-for?u=76281980&t=42)** The information applies to Jira software and Jira core application types.
>
> **[0:46](https://www.linkedin.com/learning/jira-advanced-administration/who-is-this-for?u=76281980&t=46)** Although we won't cover managing Jira service desk feature specifically, the information in this course also applies to Jira service management, which was formerly named Jira service desk.
>
> **[0:57](https://www.linkedin.com/learning/jira-advanced-administration/who-is-this-for?u=76281980&t=57)** Whether you have Jira Cloud, server or data center, the admin concepts in this course are the same.
>
> **[1:04](https://www.linkedin.com/learning/jira-advanced-administration/who-is-this-for?u=76281980&t=64)** Just be aware that there are slight feature, terminology, and user interface differences between the deployment types.
>
> **[1:11](https://www.linkedin.com/learning/jira-advanced-administration/who-is-this-for?u=76281980&t=71)** Don't worry if your screen looks different than mine, you might have different colors, a different layout, and customization specific to your company.
>
> **[1:19](https://www.linkedin.com/learning/jira-advanced-administration/who-is-this-for?u=76281980&t=79)** I think a really good administrator is somebody who listens to what the team needs before they start making changes in Jira.
>
> **[1:26](https://www.linkedin.com/learning/jira-advanced-administration/who-is-this-for?u=76281980&t=86)** And it's really easy to go in and start changing configurations and making new schemes and customizing everything.
>
> **[1:31](https://www.linkedin.com/learning/jira-advanced-administration/who-is-this-for?u=76281980&t=91)** Jira is so customizable, but really what you should do first, before you point and click in Jira, is sit down, have a conversation with your users and really understand what they're trying to achieve before you build something new.
>
> **[1:44](https://www.linkedin.com/learning/jira-advanced-administration/who-is-this-for?u=76281980&t=104)** If you're brand new to Jira, take my basic Jira administration course first.
>
> **[1:48](https://www.linkedin.com/learning/jira-advanced-administration/who-is-this-for?u=76281980&t=108)** The basic course covers how Jira is used.
>
> **[1:51](https://www.linkedin.com/learning/jira-advanced-administration/who-is-this-for?u=76281980&t=111)** The differences between application types and deployment types, navigating the admin area, the different types of admin users, and the top skills a new admin needs, like adding users, creating Jira projects, creating workflows, troubleshooting permission problems, and troubleshooting missing notifications.
>
> **[2:09](https://www.linkedin.com/learning/jira-advanced-administration/who-is-this-for?u=76281980&t=129)** The advanced course will reference information from the basic course.
>
> **[2:13](https://www.linkedin.com/learning/jira-advanced-administration/who-is-this-for?u=76281980&t=133)** So take it first, the goal of the basic course is to get you started quickly.
>
> **[2:18](https://www.linkedin.com/learning/jira-advanced-administration/who-is-this-for?u=76281980&t=138)** In the advanced course however, we'll cover more settings in more detail, so you can expand and compliment your existing knowledge.
>
> **[2:25](https://www.linkedin.com/learning/jira-advanced-administration/who-is-this-for?u=76281980&t=145)** Also sometimes Jira administrators are new to end user concepts as well.
>
> **[2:30](https://www.linkedin.com/learning/jira-advanced-administration/who-is-this-for?u=76281980&t=150)** If you're an infrequent Jira user, or just want to learn more about what your end users experience, take my learning Jira courses as well.
>
> **[2:38](https://www.linkedin.com/learning/jira-advanced-administration/who-is-this-for?u=76281980&t=158)** There's a version for Cloud and another version for server and data center.

> [!info]- Semantic Content
>
> **Tools:** jira (17)
> **Code Keywords:** interface (1), new. (1)
> **CLI Commands:** make (1)
> **Warnings:** be aware (1)
> **Speakers:** - in (1)

#### What do you need?
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/what-do-you-need?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/what-do-you-need?u=76281980&t=0)** - Ideally, you've been managing Jira for a while and have experience creating projects, configuring existing schemes, and creating new custom schemes when necessary.
>
> **[0:10](https://www.linkedin.com/learning/jira-advanced-administration/what-do-you-need?u=76281980&t=10)** All you need for this course is admin access to a Jira application.
>
> **[0:14](https://www.linkedin.com/learning/jira-advanced-administration/what-do-you-need?u=76281980&t=14)** It's also helpful to have a test environment so you can manage changes without impacting production.
>
> **[0:20](https://www.linkedin.com/learning/jira-advanced-administration/what-do-you-need?u=76281980&t=20)** The test environment options are detailed in section three of my Jira basic administration course, I recommend you have as many test environments as you can maintain.
>
> **[0:30](https://www.linkedin.com/learning/jira-advanced-administration/what-do-you-need?u=76281980&t=30)** You definitely want at least one production copy so you can test your changes before you unleash them on your users.
>
> **[0:37](https://www.linkedin.com/learning/jira-advanced-administration/what-do-you-need?u=76281980&t=37)** It's also nice to have a development environment that doesn't impact anyone at all where you can try new code, try new things, and try migrations, customizations, and bulk changes.
>
> **[0:48](https://www.linkedin.com/learning/jira-advanced-administration/what-do-you-need?u=76281980&t=48)** One more thing before we get started, Atlassian has changed terminology over the years, and some new terms were recently introduced.
>
> **[0:56](https://www.linkedin.com/learning/jira-advanced-administration/what-do-you-need?u=76281980&t=56)** The terms apps and Jira Service Management have been around for awhile, but Jira Work Management is newer.
>
> **[1:02](https://www.linkedin.com/learning/jira-advanced-administration/what-do-you-need?u=76281980&t=62)** Also new is the name for projects in Jira Cloud.
>
> **[1:05](https://www.linkedin.com/learning/jira-advanced-administration/what-do-you-need?u=76281980&t=65)** They were first called traditional then classic, and now they are named company-managed.
>
> **[1:10](https://www.linkedin.com/learning/jira-advanced-administration/what-do-you-need?u=76281980&t=70)** Then there's another cloud only type, which was once called independent, then next-gen and now named team-managed.
>
> **[1:18](https://www.linkedin.com/learning/jira-advanced-administration/what-do-you-need?u=76281980&t=78)** Some of the documentation and even some of the Jira configuration still reference previous terminology.
>
> **[1:24](https://www.linkedin.com/learning/jira-advanced-administration/what-do-you-need?u=76281980&t=84)** So I'll continue to call next-gen projects next-gen throughout this course.
>
> **[1:29](https://www.linkedin.com/learning/jira-advanced-administration/what-do-you-need?u=76281980&t=89)** If you hear the phrase team-managed project, now you know it's simply the new name for next-gen.

> [!info]- Semantic Content
>
> **Tools:** jira (7)
> **Code Keywords:** type, (1), continue (1)
> **Documentation:** the documentation (1)
> **Speakers:** - ideally (1)


### 2. 1. Configuration Options

#### Global configuration overview
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/global-configuration-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/global-configuration-overview?u=76281980&t=0)** - [Instructor] To access the application admin menu, click the cog or gear icon at the top right.
>
> **[0:05](https://www.linkedin.com/learning/jira-advanced-administration/global-configuration-overview?u=76281980&t=5)** The menu contains all your admin abilities, grouped in sections, the sections and section names in the menu differ a little between deployment types.
>
> **[0:15](https://www.linkedin.com/learning/jira-advanced-administration/global-configuration-overview?u=76281980&t=15)** For example, this cloud screenshot shows billing and products options that you won't see in server and data center.
>
> **[0:22](https://www.linkedin.com/learning/jira-advanced-administration/global-configuration-overview?u=76281980&t=22)** As an administrator, I find myself visiting the issues and user management pages the most often.
>
> **[0:28](https://www.linkedin.com/learning/jira-advanced-administration/global-configuration-overview?u=76281980&t=28)** Sometimes I forget which feature is in which admin section.
>
> **[0:32](https://www.linkedin.com/learning/jira-advanced-administration/global-configuration-overview?u=76281980&t=32)** Here's a tip to help you find the setting you're looking for.
>
> **[0:35](https://www.linkedin.com/learning/jira-advanced-administration/global-configuration-overview?u=76281980&t=35)** First type gg on any Jira page to open the administration search box, then type the first few letters of your search to show suggestions.
>
> **[0:45](https://www.linkedin.com/learning/jira-advanced-administration/global-configuration-overview?u=76281980&t=45)** For example, typing workflow will suggest three pages with workflow in the name.
>
> **[0:51](https://www.linkedin.com/learning/jira-advanced-administration/global-configuration-overview?u=76281980&t=51)** Finally, click the page name to go directly to the correct admin section.
>
> **[0:56](https://www.linkedin.com/learning/jira-advanced-administration/global-configuration-overview?u=76281980&t=56)** When you're in the admin area, you can also click the search Jira admin button to find what you're looking for.
>
> **[1:02](https://www.linkedin.com/learning/jira-advanced-administration/global-configuration-overview?u=76281980&t=62)** The button is on the top left of the server screenshot.
>
> **[1:06](https://www.linkedin.com/learning/jira-advanced-administration/global-configuration-overview?u=76281980&t=66)** In Cloud it's on the top right.
>
> **[1:09](https://www.linkedin.com/learning/jira-advanced-administration/global-configuration-overview?u=76281980&t=69)** Navigating between the different admin areas and functions is simple.
>
> **[1:13](https://www.linkedin.com/learning/jira-advanced-administration/global-configuration-overview?u=76281980&t=73)** In server or data center, use the horizontal links at the top of the page and the links in the left sidebar.
>
> **[1:19](https://www.linkedin.com/learning/jira-advanced-administration/global-configuration-overview?u=76281980&t=79)** Here's an example of the issues page, where you manage issue types, workflows, screens, and other settings that impact issues.
>
> **[1:27](https://www.linkedin.com/learning/jira-advanced-administration/global-configuration-overview?u=76281980&t=87)** Here's an example of the same issues page in Cloud.
>
> **[1:30](https://www.linkedin.com/learning/jira-advanced-administration/global-configuration-overview?u=76281980&t=90)** Use the cog or gear icon at the top right to go to the relevant admin area.
>
> **[1:35](https://www.linkedin.com/learning/jira-advanced-administration/global-configuration-overview?u=76281980&t=95)** Then use the vertical links in the left sidebar.
>
> **[1:38](https://www.linkedin.com/learning/jira-advanced-administration/global-configuration-overview?u=76281980&t=98)** In the next sections, I want to specifically talk about setting global permissions, changing the applications look and feel, and turning on mail service.
>
> **[1:47](https://www.linkedin.com/learning/jira-advanced-administration/global-configuration-overview?u=76281980&t=107)** All of these settings are found in the system admin area.
>
> **[1:51](https://www.linkedin.com/learning/jira-advanced-administration/global-configuration-overview?u=76281980&t=111)** While we don't have time to cover every available setting, I recommend you review them all and make sure they represent what you're trying to achieve at your organization.
>
> **[1:59](https://www.linkedin.com/learning/jira-advanced-administration/global-configuration-overview?u=76281980&t=119)** For example, check your public sharing setting and make sure it's off, unless you're really trying to share dashboards and filters with non logged in users.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3), make (2)
> **Code Keywords:** for. (2), finally, (1), public (1)
> **UI Navigation:** in the menu (1), open the (1), go to (1)
> **Analogies:** for example (3)
> **Tools:** jira (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Using global permissions
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=0)** - In the basic administration course, we discussed how global permissions differ between cloud, server and data center.
>
> **[0:07](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=7)** Here's a refresher and some additional details.
>
> **[0:10](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=10)** While the naming differs a little between the deployment types and versions, their meaning is the same.
>
> **[0:15](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=15)** The Jira system administrators permission is only available in server and data center.
>
> **[0:21](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=21)** Users or groups with this permission can perform every Jira function.
>
> **[0:25](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=25)** This includes many settings that you want to be careful about changing, as they can impact functionality and performance.
>
> **[0:32](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=32)** For example, Jira system administrators can configure listeners, services, change the index path and schedule various jobs.
>
> **[0:40](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=40)** Limit this permission to only those who really need it and understand what they are doing.
>
> **[0:45](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=45)** I recommend selecting two users so there's a backup if one's out of the office.
>
> **[0:51](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=51)** The next permission is called administer Jira in cloud or Jira administrators in server.
>
> **[0:57](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=57)** It gives users or groups the ability to perform most admin functions.
>
> **[1:01](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=61)** Give this permission to a small group of users who maintain the entire application.
>
> **[1:06](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=66)** I recommend selecting two to five users.
>
> **[1:10](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=70)** For server and data center users, Atlassian has a comprehensive list of the differences between these two admin permissions.
>
> **[1:17](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=77)** See the documentation at the URL shown.
>
> **[1:22](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=82)** So when a lot of companies, they go overboard with admin access.
>
> **[1:25](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=85)** And I don't care if you have a thousand users or 10,000 users, I recommend two to five admins.
>
> **[1:30](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=90)** One admin is not enough, what happens if your admin is sick or out.
>
> **[1:34](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=94)** And five, after that, it gets really hard to coordinate your changes and track what you're doing in the application.
>
> **[1:40](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=100)** The browse users and groups or browse user's permission is for user picker fields and sharing functions.
>
> **[1:47](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=107)** You must have this permission to select from the list of users in the application.
>
> **[1:51](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=111)** Think about the social engineering implications of the setting.
>
> **[1:55](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=115)** If you have external users like contractors or customers, you may want to limit this permission to avoid exposing employee names.
>
> **[2:03](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=123)** The share dashboards and filters or create shared objects permission allows users to share their filters, boards, and dashboards with other users, groups, and project roles.
>
> **[2:14](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=134)** For example, a team lead needs this permission to share their dashboard with team members.
>
> **[2:19](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=139)** It's generally good to allow users to share objects otherwise everyone creates their own, needing multiple copies of similar views.
>
> **[2:28](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=148)** I recommend giving this permission to the general users group, encouraging sharing and teaching users to search for existing objects before creating new ones.
>
> **[2:37](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=157)** The manage group filter settings permission allows users to create and delete subscriptions.
>
> **[2:42](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=162)** A subscription is an emailed report of all issues returned by a filter.
>
> **[2:47](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=167)** You can use these to alert users to new issues or specific issues, needing attention.
>
> **[2:53](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=173)** Some organizations love this ability and some hate it.
>
> **[2:56](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=176)** It's great to be able to notify a group of people, but what if not everyone in the group appreciates another Jira email notification.
>
> **[3:03](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=183)** I recommend limiting this permission or training users on when it's okay to create groups subscriptions.
>
> **[3:10](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=190)** The make bulk changes or bulk change permission allows users to edit, move, transition, or delete multiple issues at once.
>
> **[3:18](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=198)** With this permission, users can manage a thousand issues at a time and projects they have access to.
>
> **[3:24](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=204)** This is helpful for project managers, team leads, scrum masters, and admins doing the cleanup.
>
> **[3:30](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=210)** You may want to exclude this ability for external users however.
>
> **[3:34](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=214)** In cloud there's the create next-gen projects permission, this allows regular users to create their own Jira projects.
>
> **[3:41](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=221)** Next-gen projects are configured differently than classic projects, that only Jira admins can create.
>
> **[3:47](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=227)** They are schemeless meaning they don't share settings with other projects.
>
> **[3:52](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=232)** Here's an example of the configuration page for our next gen-project in cloud.
>
> **[3:57](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=237)** As you can see, this is a lot different than a classic projects configuration.
>
> **[4:01](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=241)** You can add new issue types and fields all from the same screen.
>
> **[4:06](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=246)** There are many pros and cons to using this project type.
>
> **[4:09](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=249)** We won't cover this project type extensively in this course, as honestly, it's still evolving, but you can read my opinion and see some of the differences at the URL shown.
>
> **[4:20](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=260)** The default setting is to let any licensed user create next-gen projects.
>
> **[4:25](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=265)** My recommendation is to limit the ability to your Jira admin team or a small group of power users.
>
> **[4:31](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=271)** Finally, in data center, there's the browse archive permission.
>
> **[4:35](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=275)** This allows users to browse archived issues by default, no users are granted this permission.
>
> **[4:41](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=281)** So, who's allowed to do what in your application?
>
> **[4:45](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=285)** What are your global permission settings?
>
> **[4:47](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=287)** Are there any adjustments you should make?
>
> **[4:49](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=289)** Visit the URL shown to compare your settings to Jira's default.
>
> **[4:53](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=293)** Local permissions applied to the entire application.
>
> **[4:56](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=296)** So where do global permissions fit into the overall permission model?
>
> **[5:01](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=301)** There are many levels of Jira permissions to be aware of and they all work together.
>
> **[5:06](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=306)** At the very highest level is application access.
>
> **[5:09](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=309)** If the user doesn't have application access, they can't log in and therefore no other permission at any level applies.
>
> **[5:16](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=316)** Application access is granted in each user's profile.
>
> **[5:20](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=320)** The general application access group is called Jira users, Jira software users, Jira core users or Jira service desk users, depending on which application type you have.
>
> **[5:31](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=331)** The next level is global, which we previously discussed.
>
> **[5:34](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=334)** This is where a user gets abilities to administer Jira, make bulk changes and share objects like filters, dashboards, and subscriptions.
>
> **[5:42](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=342)** The next level is project.
>
> **[5:44](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=344)** Project permissions are controlled in two places, in a permission scheme and in an individual project settings.
>
> **[5:51](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=351)** All permission schemes can be accessed from the issues admin page.
>
> **[5:55](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=355)** Project level permissions are in a project's left sidebar, but the name of the link differs depending on the deployment type and the type of project.
>
> **[6:04](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=364)** If a user doesn't have project level access, it means the project won't appear in their list of projects.
>
> **[6:09](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=369)** They will not be able to see that the project exists nor will they see individual issues in the project.
>
> **[6:16](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=376)** Next, there are issue permissions, workflow permissions, and permissions that are specific to an installed third-party app.
>
> **[6:24](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=384)** Use an issue security scheme to limit access to only some issues in a Jira project.
>
> **[6:29](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=389)** Use a workflow condition or validator to limit who can transition an issue.
>
> **[6:34](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=394)** And use the specific settings and any third-party app to grant or limit capabilities as desired.
>
> **[6:40](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=400)** When troubleshooting a user problem, start at the beginning.
>
> **[6:44](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=404)** Let's say a user reports they can't see a specific Jira issue.
>
> **[6:48](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=408)** First, verify the user can log in.
>
> **[6:51](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=411)** Sometimes the user doesn't have application access and you'll need to add it.
>
> **[6:55](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=415)** Other times it's purely user error.
>
> **[6:58](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=418)** The user thinks they're logged in, but they aren't.
>
> **[7:01](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=421)** This is more common in server and data center.
>
> **[7:04](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=424)** Next, verify the user has all the needed project access and issue access.
>
> **[7:09](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=429)** Keep working your way through all the permission areas until you find the culprit.
>
> **[7:14](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=434)** We'll talk more about project level permissions and issue security later in the course.
>
> **[7:19](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=439)** You can also use the permission helper feature, which I covered in the basic administration course.

> [!info]- Semantic Content
>
> **Tools:** jira (18)
> **Code Keywords:** delete (2), let (2), function (1), type. (1), finally, (1)
> **CLI Commands:** make (3), find (1)
> **Definitions:** is called (2), is an  (1), is a  (1)
> **Env Vars:** url (3)
> **Cross-References:** we discussed (1), later in (1)
> **Analogies:** for example (2)
> **Warnings:** be careful (1), be aware (1)

#### Customizing the interface
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=0)** - [Narrator] Some organizations like to customize Jira's look and feel so it matches their branding.
>
> **[0:05](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=5)** The settings are straightforward, but I included this section so I can share some customization tips and impacts.
>
> **[0:12](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=12)** Here's an example of a customized cloud application.
>
> **[0:15](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=15)** If you have Jira service management, you can also customize aspects of the customer portal.
>
> **[0:20](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=20)** Access those settings within the specific service project.
>
> **[0:24](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=24)** In Jira, you can customize the logo, the site title, the favicon, the colors, and the date and time format.
>
> **[0:32](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=32)** Here's the look and feel customization page in cloud.
>
> **[0:35](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=35)** If you customize the logo, pay attention to the suggested width and height.
>
> **[0:39](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=39)** A large logo or square logo won't look nice in the space available in the navigation bar.
>
> **[0:45](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=45)** If you're having trouble making your logo fit, try using a version that's just a graphic instead of a graphic with text.
>
> **[0:52](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=52)** I recommend using an image with a transparent background.
>
> **[0:56](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=56)** A favicon is an icon associated with a particular website.
>
> **[1:00](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=60)** You often see a favicon in a browser tab as shown or in a bookmark.
>
> **[1:05](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=65)** If you're customizing the favicon, there are a couple things to know that Jira doesn't immediately tell you.
>
> **[1:10](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=70)** First, use a square image.
>
> **[1:12](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=72)** I recommend 32 pixels by 32 pixels.
>
> **[1:16](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=76)** And this is not a lot of space to work with.
>
> **[1:18](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=78)** As you can see in the screenshot, I cut off a portion of my alligator image to fit the available space.
>
> **[1:24](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=84)** Next, Jira cannot use an ICO file.
>
> **[1:27](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=87)** Upload a PNG, JPEG, or GIF instead.
>
> **[1:31](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=91)** I also recommend using a transparent file for this image.
>
> **[1:35](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=95)** Finally, use a unique favicon image, especially if you use other Atlassian products.
>
> **[1:40](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=100)** When multiple applications use the same icon, it's hard for users to distinguish between them.
>
> **[1:46](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=106)** One last note about customization in general.
>
> **[1:49](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=109)** Whether you're customizing Jira's look and feel or other Jira settings, you always need to ask yourself, is the benefit worth the cost?
>
> **[1:57](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=117)** Every change has pros and cons.
>
> **[1:59](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=119)** Ask yourself, does this change solve a business problem or does it get in the way?
>
> **[2:05](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=125)** Does this change create more work for the application administrator?
>
> **[2:08](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=128)** And how does this change impact the application now and in the future?
>
> **[2:12](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=132)** As a practical example, let's consider the look and feel settings.
>
> **[2:16](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=136)** Is changing the logo and colors valuable to users?
>
> **[2:20](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=140)** I like to customize the application's look and feel when it's public facing or used to support external customers.
>
> **[2:27](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=147)** These settings may be less useful to internal users, though.
>
> **[2:31](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=151)** They already know where they work, so you don't need to market to them.
>
> **[2:35](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=155)** Next, consider what impact the change has.
>
> **[2:39](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=159)** One easy example is your documentation.
>
> **[2:42](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=162)** If you change the highlight color, which changes the color of the create button, any documentation that says "click the blue create button" is no longer valid.
>
> **[2:52](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=172)** Any screen shots taken before the customization may be incorrect or confuse users.
>
> **[2:57](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=177)** As a Jira administrator, you need to weigh the pros and cons of every customization, no matter how small it seems.

> [!info]- Semantic Content
>
> **Tools:** jira (8)
> **Env Vars:** ico (1), png (1), jpeg (1), gif (1)
> **Code Keywords:** finally, (1), let (1), public (1)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)

#### Enabling and disabling email
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/enabling-and-disabling-email?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/enabling-and-disabling-email?u=76281980&t=0)** - [Narrator] For cloud administrators, the mail server is already connected and configured for you.
>
> **[0:05](https://www.linkedin.com/learning/jira-advanced-administration/enabling-and-disabling-email?u=76281980&t=5)** Atlassian hosts the mail server, so there's not much for you to do in this admin area.
>
> **[0:10](https://www.linkedin.com/learning/jira-advanced-administration/enabling-and-disabling-email?u=76281980&t=10)** In cloud, email will be sent from an address in the format jira@applicationname.[atlassian.net](https://atlassian.net).
>
> **[0:18](https://www.linkedin.com/learning/jira-advanced-administration/enabling-and-disabling-email?u=76281980&t=18)** For server and data center administrators, you'll need to connect Jira to your mail server.
>
> **[0:22](https://www.linkedin.com/learning/jira-advanced-administration/enabling-and-disabling-email?u=76281980&t=22)** Click the button shown to create the connection.
>
> **[0:25](https://www.linkedin.com/learning/jira-advanced-administration/enabling-and-disabling-email?u=76281980&t=25)** Ask your email administrator for connection details like the host name, protocol, and port, then enter them here.
>
> **[0:32](https://www.linkedin.com/learning/jira-advanced-administration/enabling-and-disabling-email?u=76281980&t=32)** Use the handy "test connection button" at the bottom of the form to make sure the connection succeeds.
>
> **[0:38](https://www.linkedin.com/learning/jira-advanced-administration/enabling-and-disabling-email?u=76281980&t=38)** Once the mail server's connected, you'll probably never need to touch these settings again unless connection details change.
>
> **[0:46](https://www.linkedin.com/learning/jira-advanced-administration/enabling-and-disabling-email?u=76281980&t=46)** You may also want to create a specific email address for Jira to send messages from.
>
> **[0:50](https://www.linkedin.com/learning/jira-advanced-administration/enabling-and-disabling-email?u=76281980&t=50)** For example, some organizations use the format jira@[domain.com](https://domain.com).
>
> **[0:55](https://www.linkedin.com/learning/jira-advanced-administration/enabling-and-disabling-email?u=76281980&t=55)** You might find yourself needing to temporarily or permanently disable outgoing mail.
>
> **[1:00](https://www.linkedin.com/learning/jira-advanced-administration/enabling-and-disabling-email?u=76281980&t=60)** All deployment methods have a button for this at the top right.
>
> **[1:04](https://www.linkedin.com/learning/jira-advanced-administration/enabling-and-disabling-email?u=76281980&t=64)** I usually disable outgoing mail when migrating or consolidating, performing large maintenance activities, or upgrading server or data center.
>
> **[1:12](https://www.linkedin.com/learning/jira-advanced-administration/enabling-and-disabling-email?u=76281980&t=72)** I always disable mail in my test environment to avoid spamming users with fake or duplicate messages.
>
> **[1:18](https://www.linkedin.com/learning/jira-advanced-administration/enabling-and-disabling-email?u=76281980&t=78)** Finally, some organizations turn off email permanently and instead rely on integrations with other software like Slack, for example.
>
> **[1:26](https://www.linkedin.com/learning/jira-advanced-administration/enabling-and-disabling-email?u=76281980&t=86)** To turn off email notifications from a specific Jira project however, make that change in a notification scheme instead.
>
> **[1:33](https://www.linkedin.com/learning/jira-advanced-administration/enabling-and-disabling-email?u=76281980&t=93)** We'll talk more about notification settings later in the course.

> [!info]- Semantic Content
>
> **Tools:** jira (5), slack (1)
> **CLI Commands:** make (2), find (1)
> **Code Keywords:** from. (1), finally, (1)
> **URLs:** [atlassian.net](https://atlassian.net) (1), [domain.com](https://domain.com) (1)
> **Analogies:** for example (2)
> **Cross-References:** later in (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)

#### Challenge: General configuration options
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/challenge-general-configuration-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/challenge-general-configuration-options?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/jira-advanced-administration/challenge-general-configuration-options?u=76281980&t=5)** - [Instructor] In this challenge, log in as an application administrator and explore each page in the administration area.
>
> **[0:12](https://www.linkedin.com/learning/jira-advanced-administration/challenge-general-configuration-options?u=76281980&t=12)** Get to know which settings are in which area and bookmark the areas you access most.
>
> **[0:16](https://www.linkedin.com/learning/jira-advanced-administration/challenge-general-configuration-options?u=76281980&t=16)** Next, review your current global permissions and make sure they're appropriate for your organization.
>
> **[0:22](https://www.linkedin.com/learning/jira-advanced-administration/challenge-general-configuration-options?u=76281980&t=22)** Finally, review your other global settings and note any that need updates.
>
> **[0:27](https://www.linkedin.com/learning/jira-advanced-administration/challenge-general-configuration-options?u=76281980&t=27)** I added a task to check my global settings to my scheduled maintenance list.
>
> **[0:32](https://www.linkedin.com/learning/jira-advanced-administration/challenge-general-configuration-options?u=76281980&t=32)** Sometimes settings change accidentally, new settings are added or business needs change.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** finally, (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: General configuration options
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/solution-general-configuration-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/solution-general-configuration-options?u=76281980&t=0)** - [Instructor] Were you able to log in as an administrator and explore the current global settings?
>
> **[0:09](https://www.linkedin.com/learning/jira-advanced-administration/solution-general-configuration-options?u=76281980&t=9)** To access the global permissions page, click the cog or gear icon at the top right, then select system.
>
> **[0:17](https://www.linkedin.com/learning/jira-advanced-administration/solution-general-configuration-options?u=76281980&t=17)** And then the left sidebar click global permissions.
>
> **[0:21](https://www.linkedin.com/learning/jira-advanced-administration/solution-general-configuration-options?u=76281980&t=21)** I want to give the create next gen permission, only two administrators.
>
> **[0:25](https://www.linkedin.com/learning/jira-advanced-administration/solution-general-configuration-options?u=76281980&t=25)** Use the menu at the bottom of the page to select the permission and the group.
>
> **[0:29](https://www.linkedin.com/learning/jira-advanced-administration/solution-general-configuration-options?u=76281980&t=29)** Then click the form submission button.
>
> **[0:34](https://www.linkedin.com/learning/jira-advanced-administration/solution-general-configuration-options?u=76281980&t=34)** Next, remove the public setting if it's shown.
>
> **[0:38](https://www.linkedin.com/learning/jira-advanced-administration/solution-general-configuration-options?u=76281980&t=38)** You should review your global settings periodically as needs often change as organizations grow.

> [!info]- Semantic Content
>
> **Code Keywords:** public (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. 2. Using Schemes

#### Types of schemes
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=0)** - [Instructor] Let's quickly review some important terms and definitions from the basic admin course.
>
> **[0:05](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=5)** An issue is an individual item in Jira.
>
> **[0:08](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=8)** Each time you create an item, you're creating a new issue with a unique key to identify it.
>
> **[0:14](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=14)** An issue is any individual record in the Jira database.
>
> **[0:17](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=17)** It could represent a request, a problem, a task, a to-do item or development item, like a story, bug or epic.
>
> **[0:26](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=26)** Sometimes end users call these a ticket, a request, a task or even a Jira.
>
> **[0:32](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=32)** I always laugh at that last one.
>
> **[0:34](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=34)** It's like saying you're going to send a Microsoft Outlook instead of an email.
>
> **[0:38](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=38)** A project is a collection of issues.
>
> **[0:41](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=41)** The word project in Jira is different than an initiative your team is working on outside of Jira.
>
> **[0:46](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=46)** Think of a Jira project as a container for all your teams initiatives, tasks and to-do items.
>
> **[0:53](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=53)** There's generally one project per department, team, system or application.
>
> **[0:59](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=59)** For example, you might have a Jira project called legal to track all the different things the legal team works on.
>
> **[1:05](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=65)** A scheme is a configuration or collection of settings.
>
> **[1:09](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=69)** A scheme allows you to use settings differently in the same project or share settings between multiple projects.
>
> **[1:16](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=76)** For example, a bug issue type may function differently than a task issue in the same project or the same issue type functionality may be shared between multiple projects.
>
> **[1:27](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=87)** Schemes makes this possible.
>
> **[1:29](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=89)** As a reminder, schemes only applied to classic projects in cloud, server and data center.
>
> **[1:35](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=95)** Next gen projects in cloud are schemeless.
>
> **[1:39](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=99)** Each classic Jira project is powered by nine schemes.
>
> **[1:43](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=103)** The easiest way to see which schemes a project uses is from the summary project admin page.
>
> **[1:48](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=108)** The summary page shows a science schemes and project specific settings.
>
> **[1:53](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=113)** Let's discuss the schemes.
>
> **[1:56](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=116)** Issue types, workflows and screens are all powered by schemes.
>
> **[2:00](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=120)** Jira is structured this way so schemes can be shared between projects.
>
> **[2:05](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=125)** Fields, permissions and notifications are also powered by schemes.
>
> **[2:10](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=130)** Components, versions and integrations with other tools don't use schemes however.
>
> **[2:16](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=136)** These settings are project specific, meaning they are not shared between multiple projects.
>
> **[2:21](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=141)** The same is true for users in a project.
>
> **[2:23](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=143)** The list of people or groups is unique to the project.
>
> **[2:27](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=147)** Now that you know which settings are powered by schemes and which aren't, let's explore each scheme type.
>
> **[2:33](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=153)** The first scheme on the top left is for issue types.
>
> **[2:37](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=157)** Use the issue type scheme to determine which issue types a user can create in a project.
>
> **[2:43](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=163)** This example uses development issue types like epic, story and bug.
>
> **[2:48](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=168)** I like to create one issue type scheme for dev type projects, one for support type projects and another for task type projects.
>
> **[2:56](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=176)** For example, my task issue type scheme only contains epic, task and sub-task.
>
> **[3:03](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=183)** The next scheme in the project admin area is for workflows.
>
> **[3:06](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=186)** In this example, the workflow scheme contains two different workflows.
>
> **[3:11](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=191)** One workflow is used for stories and bugs and a different workflow is used for epics, tasks and sub-tasks.
>
> **[3:17](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=197)** This is a very common strategy.
>
> **[3:20](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=200)** Often stories and bugs have additional workflow steps like validation that aren't needed for other issue types.
>
> **[3:27](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=207)** A workflow scheme can have one workflow, one workflow for each issue type or multiple shared workflows, like in this example.
>
> **[3:34](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=214)** The next scheme in the project admin area is for screens.
>
> **[3:38](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=218)** In this example, the project has one set of screens for stories, epics, tasks and sub-tasks and a different set of screens for bugs.
>
> **[3:47](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=227)** It's also possible to specify a screen for when an issue is created, edited or viewed.
>
> **[3:53](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=233)** We'll talk about that more in the next section.
>
> **[3:55](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=235)** The final scheme at the bottom left of the project admin area is for fields.
>
> **[4:00](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=240)** This scheme controls how fields behave.
>
> **[4:03](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=243)** In the example, the components and description fields are optional.
>
> **[4:07](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=247)** You can make them required when an issue is created using a field configuration.
>
> **[4:12](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=252)** Now let's move to the right of a project summary page in the admin area.
>
> **[4:16](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=256)** The first scheme area on the right is called permissions.
>
> **[4:19](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=259)** The permission scheme determines who can perform certain actions in the project like assigning issues, managing sprints and adding comments.
>
> **[4:28](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=268)** Also in the permissions area, is the security scheme for individual issues if one exists.
>
> **[4:34](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=274)** Issue security schemes aren't automatically created.
>
> **[4:37](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=277)** If you want one, you'll need to create it manually and associate it with the project.
>
> **[4:41](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=281)** The issue security scheme allows you to restrict access to issues individually.
>
> **[4:47](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=287)** In this example, I've created two security levels.
>
> **[4:50](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=290)** If an issue is limited to the administrator security level, only project admins and the project lead and application admins can view it.
>
> **[4:59](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=299)** If an issue is limited to the leadership security level, only members of the leader's group can view it.
>
> **[5:05](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=305)** The next scheme area is for notifications.
>
> **[5:08](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=308)** This scheme controls which type of email messages are sent to which users.
>
> **[5:13](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=313)** Jira can send notifications when issues are created, assigned, moved or when other standard actions occur.
>
> **[5:20](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=320)** By default, the current assignee, reporter and all watchers are notified of most events.

> [!info]- Semantic Content
>
> **Tools:** jira (10)
> **Code Keywords:** let (4), function (1), type. (1), default, (1)
> **Definitions:** is a  (3), is an  (1), is called (1)
> **Analogies:** for example (3), it's like (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Scheme hierarchy
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/scheme-hierarchy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/scheme-hierarchy?u=76281980&t=0)** - [Instructor] As you may have noticed in the previous section, there are some project settings that require multiple schemes.
>
> **[0:06](https://www.linkedin.com/learning/jira-advanced-administration/scheme-hierarchy?u=76281980&t=6)** The hardest scheme relationship to understand is screens, so let's tackle that one now.
>
> **[0:11](https://www.linkedin.com/learning/jira-advanced-administration/scheme-hierarchy?u=76281980&t=11)** First, each project has one issue type screen scheme.
>
> **[0:15](https://www.linkedin.com/learning/jira-advanced-administration/scheme-hierarchy?u=76281980&t=15)** It's used to specify the entire issue type and screen relationship.
>
> **[0:20](https://www.linkedin.com/learning/jira-advanced-administration/scheme-hierarchy?u=76281980&t=20)** Next, an issue type screen scheme contains one or more screen schemes.
>
> **[0:26](https://www.linkedin.com/learning/jira-advanced-administration/scheme-hierarchy?u=76281980&t=26)** This allows a different set of screens per issue type.
>
> **[0:29](https://www.linkedin.com/learning/jira-advanced-administration/scheme-hierarchy?u=76281980&t=29)** Finally, a screen scheme contains one or more individual screens.
>
> **[0:34](https://www.linkedin.com/learning/jira-advanced-administration/scheme-hierarchy?u=76281980&t=34)** It allows different screens for the create, edit and view operations.
>
> **[0:39](https://www.linkedin.com/learning/jira-advanced-administration/scheme-hierarchy?u=76281980&t=39)** Here's a practical example for a development project.
>
> **[0:42](https://www.linkedin.com/learning/jira-advanced-administration/scheme-hierarchy?u=76281980&t=42)** The dev issue type screen scheme has one screen scheme for stories and a different screen scheme for bugs.
>
> **[0:50](https://www.linkedin.com/learning/jira-advanced-administration/scheme-hierarchy?u=76281980&t=50)** The story screen scheme has one screen for the create operation, a different screen for editing issues, and a third screen for viewing issues.
>
> **[0:59](https://www.linkedin.com/learning/jira-advanced-administration/scheme-hierarchy?u=76281980&t=59)** The bug screen scheme shares the same screen for all operations.
>
> **[1:04](https://www.linkedin.com/learning/jira-advanced-administration/scheme-hierarchy?u=76281980&t=64)** In this example, the bug screen scheme is less complex because it requires one screen instead of three.
>
> **[1:11](https://www.linkedin.com/learning/jira-advanced-administration/scheme-hierarchy?u=76281980&t=71)** Try to make project configurations as simple as possible.
>
> **[1:15](https://www.linkedin.com/learning/jira-advanced-administration/scheme-hierarchy?u=76281980&t=75)** Only add additional complexity when there's a business need for it.
>
> **[1:19](https://www.linkedin.com/learning/jira-advanced-administration/scheme-hierarchy?u=76281980&t=79)** When you create custom screens and schemes, there's an order to follow.
>
> **[1:24](https://www.linkedin.com/learning/jira-advanced-administration/scheme-hierarchy?u=76281980&t=84)** Start at the lowest level by building any needed create, edit, or view screens.
>
> **[1:29](https://www.linkedin.com/learning/jira-advanced-administration/scheme-hierarchy?u=76281980&t=89)** You can create one, two, or three, but again, less is recommended.
>
> **[1:34](https://www.linkedin.com/learning/jira-advanced-administration/scheme-hierarchy?u=76281980&t=94)** Next, create a screen scheme and associate it with the desired issue types and the screens you just created.
>
> **[1:41](https://www.linkedin.com/learning/jira-advanced-administration/scheme-hierarchy?u=76281980&t=101)** If you require another screen scheme so a specific issue type has a different screen, create it now.
>
> **[1:47](https://www.linkedin.com/learning/jira-advanced-administration/scheme-hierarchy?u=76281980&t=107)** Finally, create one issue type screen scheme and associate it with the screen schemes you just created.
>
> **[1:53](https://www.linkedin.com/learning/jira-advanced-administration/scheme-hierarchy?u=76281980&t=113)** There's an order to removing custom schemes, too.
>
> **[1:56](https://www.linkedin.com/learning/jira-advanced-administration/scheme-hierarchy?u=76281980&t=116)** You cannot remove schemes that are in use.
>
> **[1:59](https://www.linkedin.com/learning/jira-advanced-administration/scheme-hierarchy?u=76281980&t=119)** In this example, the Scrum issue type screen scheme is associated with a demo project, so you can't delete it.
>
> **[2:05](https://www.linkedin.com/learning/jira-advanced-administration/scheme-hierarchy?u=76281980&t=125)** The Kanban issue type screen scheme is associated with no projects, however, so a delete link is available.
>
> **[2:12](https://www.linkedin.com/learning/jira-advanced-administration/scheme-hierarchy?u=76281980&t=132)** Here are the deletion requirements for each screen setting.
>
> **[2:16](https://www.linkedin.com/learning/jira-advanced-administration/scheme-hierarchy?u=76281980&t=136)** To remove a screen, first, disassociate it with any screen schemes.
>
> **[2:21](https://www.linkedin.com/learning/jira-advanced-administration/scheme-hierarchy?u=76281980&t=141)** You'll also need to remove it from any workflow transitions.
>
> **[2:24](https://www.linkedin.com/learning/jira-advanced-administration/scheme-hierarchy?u=76281980&t=144)** To remove a screen scheme, first disassociate it with any issue type screen schemes.
>
> **[2:30](https://www.linkedin.com/learning/jira-advanced-administration/scheme-hierarchy?u=76281980&t=150)** And finally, to remove an issue type screen scheme, disassociate it with any project using it.
>
> **[2:36](https://www.linkedin.com/learning/jira-advanced-administration/scheme-hierarchy?u=76281980&t=156)** If this all sounds a little confusing, don't worry.
>
> **[2:39](https://www.linkedin.com/learning/jira-advanced-administration/scheme-hierarchy?u=76281980&t=159)** This was the hardest part of JIRA administration for me to understand.
>
> **[2:43](https://www.linkedin.com/learning/jira-advanced-administration/scheme-hierarchy?u=76281980&t=163)** Use your test environment to experiment with these settings until they make more sense.
>
> **[2:48](https://www.linkedin.com/learning/jira-advanced-administration/scheme-hierarchy?u=76281980&t=168)** Once you understand all the screen settings, the other scheme relationships will make more sense, too.
>
> **[2:54](https://www.linkedin.com/learning/jira-advanced-administration/scheme-hierarchy?u=76281980&t=174)** Read my article at the URL shown for more information about screen schemes.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (3), require (2), delete (2), let (1), type. (1)
> **CLI Commands:** make (3)
> **Env Vars:** jira (1), url (1)
> **Tools:** jira (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Sharing schemes between projects
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/sharing-schemes-between-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/sharing-schemes-between-projects?u=76281980&t=0)** - Jira schemes exist so they can be shared between multiple projects.
>
> **[0:04](https://www.linkedin.com/learning/jira-advanced-administration/sharing-schemes-between-projects?u=76281980&t=4)** Instead of creating one scheme per project, I recommend one set of schemes per project type.
>
> **[0:10](https://www.linkedin.com/learning/jira-advanced-administration/sharing-schemes-between-projects?u=76281980&t=10)** Let's use issue types as an example.
>
> **[0:13](https://www.linkedin.com/learning/jira-advanced-administration/sharing-schemes-between-projects?u=76281980&t=13)** As I mentioned previously, I like to create one issue type scheme for dev type projects, one for support type projects, and another for task type projects.
>
> **[0:22](https://www.linkedin.com/learning/jira-advanced-administration/sharing-schemes-between-projects?u=76281980&t=22)** This way, there's a standard and each project type has a consistent set of issue types.
>
> **[0:28](https://www.linkedin.com/learning/jira-advanced-administration/sharing-schemes-between-projects?u=76281980&t=28)** Then, I make sure all the dev type projects use the dev issue type scheme.
>
> **[0:33](https://www.linkedin.com/learning/jira-advanced-administration/sharing-schemes-between-projects?u=76281980&t=33)** In this example, the dev and QA projects both use the scheme that contains epics, stories, bugs, tasks, and sub-tasks.
>
> **[0:43](https://www.linkedin.com/learning/jira-advanced-administration/sharing-schemes-between-projects?u=76281980&t=43)** It's really tempting to create new schemes, but when are they warranted?
>
> **[0:47](https://www.linkedin.com/learning/jira-advanced-administration/sharing-schemes-between-projects?u=76281980&t=47)** Before you create new schemes, make sure they're really needed to support a business case.
>
> **[0:52](https://www.linkedin.com/learning/jira-advanced-administration/sharing-schemes-between-projects?u=76281980&t=52)** For example, if you're creating a Jira project to collect requests from external users, that might require special settings or combinations.
>
> **[1:00](https://www.linkedin.com/learning/jira-advanced-administration/sharing-schemes-between-projects?u=76281980&t=60)** It's okay to create a few extra schemes for a special use case when needed, but don't automatically create new schemes for every Jira project.
>
> **[1:09](https://www.linkedin.com/learning/jira-advanced-administration/sharing-schemes-between-projects?u=76281980&t=69)** More settings mean more complexity and a bigger mess to manage in the future.
>
> **[1:14](https://www.linkedin.com/learning/jira-advanced-administration/sharing-schemes-between-projects?u=76281980&t=74)** In addition to sharing schemes, smart naming makes settings easier to find and use.
>
> **[1:19](https://www.linkedin.com/learning/jira-advanced-administration/sharing-schemes-between-projects?u=76281980&t=79)** First, establish and use a standard naming convention.
>
> **[1:23](https://www.linkedin.com/learning/jira-advanced-administration/sharing-schemes-between-projects?u=76281980&t=83)** Settings in the admin area are generally listed alphabetically so you should consider that in your naming structure.
>
> **[1:30](https://www.linkedin.com/learning/jira-advanced-administration/sharing-schemes-between-projects?u=76281980&t=90)** Next, name settings for the function they support or the problem they solve.
>
> **[1:35](https://www.linkedin.com/learning/jira-advanced-administration/sharing-schemes-between-projects?u=76281980&t=95)** Don't name settings for the project using them.
>
> **[1:37](https://www.linkedin.com/learning/jira-advanced-administration/sharing-schemes-between-projects?u=76281980&t=97)** For example, a workflow called development with code review is more descriptive and useful than dev project.
>
> **[1:45](https://www.linkedin.com/learning/jira-advanced-administration/sharing-schemes-between-projects?u=76281980&t=105)** Next, names should be descriptive but generic so they can be used for multiple use cases and projects.
>
> **[1:52](https://www.linkedin.com/learning/jira-advanced-administration/sharing-schemes-between-projects?u=76281980&t=112)** Finally, make scheme name short and easy to understand.
>
> **[1:56](https://www.linkedin.com/learning/jira-advanced-administration/sharing-schemes-between-projects?u=76281980&t=116)** Long names will lead you into what I call the Jira swamp.
>
> **[2:00](https://www.linkedin.com/learning/jira-advanced-administration/sharing-schemes-between-projects?u=76281980&t=120)** Here's why short names are better than long.
>
> **[2:03](https://www.linkedin.com/learning/jira-advanced-administration/sharing-schemes-between-projects?u=76281980&t=123)** Long and multiple word names make things harder to search and query for.
>
> **[2:08](https://www.linkedin.com/learning/jira-advanced-administration/sharing-schemes-between-projects?u=76281980&t=128)** For example, multi-word names require quotes in queries.
>
> **[2:12](https://www.linkedin.com/learning/jira-advanced-administration/sharing-schemes-between-projects?u=76281980&t=132)** Long names can take up too much room on a screen and may be truncated, making them hard to read and understand.
>
> **[2:18](https://www.linkedin.com/learning/jira-advanced-administration/sharing-schemes-between-projects?u=76281980&t=138)** Long names take longer to type and increase the possibility of query or spelling errors.
>
> **[2:24](https://www.linkedin.com/learning/jira-advanced-administration/sharing-schemes-between-projects?u=76281980&t=144)** Long names create longer URLs.
>
> **[2:26](https://www.linkedin.com/learning/jira-advanced-administration/sharing-schemes-between-projects?u=76281980&t=146)** And finally, long names also take up more room in the database.
>
> **[2:31](https://www.linkedin.com/learning/jira-advanced-administration/sharing-schemes-between-projects?u=76281980&t=151)** Here are some scheme naming don'ts.
>
> **[2:34](https://www.linkedin.com/learning/jira-advanced-administration/sharing-schemes-between-projects?u=76281980&t=154)** Don't name schemes with the word new, like new workflow, because it probably won't be new for long.
>
> **[2:40](https://www.linkedin.com/learning/jira-advanced-administration/sharing-schemes-between-projects?u=76281980&t=160)** Once something is no longer new, the naming convention is useless.
>
> **[2:44](https://www.linkedin.com/learning/jira-advanced-administration/sharing-schemes-between-projects?u=76281980&t=164)** Also, don't invent custom names for Jira settings.
>
> **[2:48](https://www.linkedin.com/learning/jira-advanced-administration/sharing-schemes-between-projects?u=76281980&t=168)** For example, if you're creating a workflow, name it workflow instead of lifecycle.
>
> **[2:52](https://www.linkedin.com/learning/jira-advanced-administration/sharing-schemes-between-projects?u=76281980&t=172)** Specialty names confuse future admins and make it harder to find applicable documentation.

> [!info]- Semantic Content
>
> **Code Keywords:** require (2), finally, (2), new, (2), type. (1), let (1)
> **CLI Commands:** make (5), find (2)
> **Tools:** jira (5)
> **Analogies:** for example (4)
> **Speakers:** - jira (1)

#### Challenge: Scheme review
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/challenge-scheme-review?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/challenge-scheme-review?u=76281980&t=0)** - [Instructor] In this challenge you'll look for a new schemes to remove and names to improve.
>
> **[0:11](https://www.linkedin.com/learning/jira-advanced-administration/challenge-scheme-review?u=76281980&t=11)** We'll use the permission schemes area for this example.
>
> **[0:14](https://www.linkedin.com/learning/jira-advanced-administration/challenge-scheme-review?u=76281980&t=14)** Start by logging in as an application administrator.
>
> **[0:17](https://www.linkedin.com/learning/jira-advanced-administration/challenge-scheme-review?u=76281980&t=17)** Next, review your permission schemes, looking for any that are unused.
>
> **[0:22](https://www.linkedin.com/learning/jira-advanced-administration/challenge-scheme-review?u=76281980&t=22)** Finally, look for schemes where you can improve the naming.
>
> **[0:25](https://www.linkedin.com/learning/jira-advanced-administration/challenge-scheme-review?u=76281980&t=25)** Didn't find any schemes to clean up?
>
> **[0:27](https://www.linkedin.com/learning/jira-advanced-administration/challenge-scheme-review?u=76281980&t=27)** Try the notification scheme area instead.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Keywords:** finally, (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Scheme review
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/solution-scheme-review?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/solution-scheme-review?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/jira-advanced-administration/solution-scheme-review?u=76281980&t=5)** - [Instructor] Did you find any unused schemes to remove?
>
> **[0:08](https://www.linkedin.com/learning/jira-advanced-administration/solution-scheme-review?u=76281980&t=8)** In the screenshot example, the second scheme is used by no projects.
>
> **[0:12](https://www.linkedin.com/learning/jira-advanced-administration/solution-scheme-review?u=76281980&t=12)** It's not useful, so click the delete link to remove it.
>
> **[0:16](https://www.linkedin.com/learning/jira-advanced-administration/solution-scheme-review?u=76281980&t=16)** The third scheme was created by Jira when a service desk project was created.
>
> **[0:21](https://www.linkedin.com/learning/jira-advanced-administration/solution-scheme-review?u=76281980&t=21)** You can tell by how it's named.
>
> **[0:23](https://www.linkedin.com/learning/jira-advanced-administration/solution-scheme-review?u=76281980&t=23)** I'd rename that scheme to represent its purpose instead of the name of the project using it.
>
> **[0:28](https://www.linkedin.com/learning/jira-advanced-administration/solution-scheme-review?u=76281980&t=28)** Again, you want to share schemes between similar projects, not create one scheme per project.
>
> **[0:34](https://www.linkedin.com/learning/jira-advanced-administration/solution-scheme-review?u=76281980&t=34)** Once I've cleaned up these two schemes, there's nothing more to do on this admin page.
>
> **[0:39](https://www.linkedin.com/learning/jira-advanced-administration/solution-scheme-review?u=76281980&t=39)** It's time to move on to a different admin area and look for other schemes to remove or improve.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Keywords:** delete (1)
> **Tools:** jira (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 4. 3. Creating Custom Schemes

#### Use and create custom issue types
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=0)** - Let's take a deeper look at the common areas to customize, which are issue types, workflows, screens, and fields.
>
> **[0:08](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=8)** At the end of the section, we'll use what we've learned to create templates, to use as a standard configuration.
>
> **[0:13](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=13)** In this section, we'll define Issue Types, Issue Type Schemes, and discuss best practices for creating custom types.
>
> **[0:21](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=21)** issue types provide structure in Jira projects.
>
> **[0:24](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=24)** They help distinguish between requests like stories and tasks or incident and change requests.
>
> **[0:31](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=31)** The issue types admin page shows all the issue types in the application.
>
> **[0:35](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=35)** Whether they are standard or custom, and which schemes use them.
>
> **[0:39](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=39)** In this screenshot, the first issue type is used to collect user questions.
>
> **[0:44](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=44)** The Ask a question issue types is standard in Jira service management.
>
> **[0:48](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=48)** The second is used to report a defect to fix.
>
> **[0:51](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=51)** The bug issue type is standard in Jira software.
>
> **[0:55](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=55)** Ideally you want the fewest amount of issue types in your Jira project.
>
> **[1:00](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=60)** So I like to start people out with epic, task, and sub-task.
>
> **[1:03](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=63)** And then when there's a business need for more, that's when you want to add more.
>
> **[1:07](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=67)** And you also don't want to add issue types until there's a need for different workflows, different screens, or both within the same project.
>
> **[1:16](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=76)** To create a custom issue types, click the button on the top right.
>
> **[1:21](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=81)** All issue types contain the following attributes, a unique name to identify it, an optional description, a type which is either standard or sub-task, and an icon to help visually identify it.
>
> **[1:34](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=94)** Users see the icon when they create issues, in user objects like filters, boards and dashboards, and an email notifications.
>
> **[1:42](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=102)** Users see the description when they hover over the icon.
>
> **[1:46](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=106)** You can also translate the name and description into a different language if needed.
>
> **[1:51](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=111)** Finally, an issue type may be part of an issue types scheme, which is used by one or more projects.
>
> **[1:56](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=116)** Different issue types can have different behaviors.
>
> **[1:59](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=119)** For example, a bug can have a different workflow and different screens than the story.
>
> **[2:05](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=125)** Also in the issue types admin area are sub-tasks.
>
> **[2:09](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=129)** I find the naming of standard issue type and sub-task issue types, a little confusing.
>
> **[2:15](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=135)** I like to think of standard issue types as parents and sub-task issue types as children.
>
> **[2:21](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=141)** For example, if the parent type is task, the child type is sub-task.
>
> **[2:26](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=146)** But sub-tasks aren't limited to only being children of tasks.
>
> **[2:33](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=153)** A sub-task can be a child of any other issue type.
>
> **[2:36](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=156)** For example, it's common for development teams to break up the work required to complete a story into multiple sub-tasks.
>
> **[2:44](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=164)** Additionally, just like you can create custom parent issue types, you can also create custom child issue types.
>
> **[2:50](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=170)** One company I worked with created a child type called sub-bug and used it to distinguish those child issues from other child issues.
>
> **[2:58](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=178)** What do you think?
>
> **[3:00](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=180)** Is this a good use of a custom sub-task or is this overkill?
>
> **[3:04](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=184)** I'll let you be the judge.
>
> **[3:06](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=186)** To create a custom child issue type, click the button on the top right.
>
> **[3:11](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=191)** All sub-task contain the same attributes and benefits as issue types.
>
> **[3:16](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=196)** It's also possible to disable sub-tasks application-wide.
>
> **[3:21](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=201)** I don't recommend it though.
>
> **[3:22](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=202)** Sub-tasks provide an inherent parent child relationship that helps organize information.
>
> **[3:28](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=208)** The relationship is also queryable.
>
> **[3:30](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=210)** In my experience, organizations always want to add more levels of hierarchy, not remove them.
>
> **[3:36](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=216)** When you create a new parent or child issue type, it is automatically added to the default issue type scheme.
>
> **[3:43](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=223)** If you want the issue type available in other issue type schemes, you'll need to add it manually, by clicking the Edit button.
>
> **[3:49](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=229)** Here's the tip.
>
> **[3:50](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=230)** You can't remove issues from the default issue type scheme, and you can't delete the default scheme either.
>
> **[3:56](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=236)** It serves us fallback for any projects without a custom scheme.
>
> **[4:00](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=240)** Since the default scheme contains all possible issue types, that list can be quite long.
>
> **[4:05](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=245)** Also it might contain types that simply don't apply to a certain Jira project.
>
> **[4:10](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=250)** Rather than assigning the default issue type scheme to a project, I'd like to create a custom scheme for the main use cases.
>
> **[4:17](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=257)** For example, one scheme that contains all the issue types for Dev projects.
>
> **[4:22](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=262)** A second scheme that contains only epic, task, and sub-task, for all the task type and business projects.
>
> **[4:29](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=269)** And a third scheme that contains all the support issue types.
>
> **[4:33](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=273)** Here are some best practices.
>
> **[4:35](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=275)** Use the default issue types until there's a business need to create custom ones.
>
> **[4:40](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=280)** If you create custom types, choose generic names so they can be used by multiple projects and schemes.
>
> **[4:46](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=286)** Use sub-tasks which help users break up large issues into manageable pieces.
>
> **[4:52](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=292)** Order the issue types in the issue type scheme, alphabetically, or by frequency of use so users can find the right one quickly.
>
> **[5:00](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=300)** Here's the tip.
>
> **[5:01](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=301)** Each issue type scheme could have one issue type that shown first.
>
> **[5:05](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=305)** For each scheme, ask yourself which issue type will be used most often.
>
> **[5:09](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=309)** If you're not sure, leave this blank and set it later.
>
> **[5:13](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=313)** For this example, I've assumed there will be a lot of bugs and I have made that the default.
>
> **[5:18](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=318)** Here are some things to avoid.
>
> **[5:20](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=320)** Don't create unneeded issue types.
>
> **[5:22](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=322)** Issue types exist to allow different workflows and screens.
>
> **[5:26](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=326)** If all issue types use the same settings, you might have more than you really need.
>
> **[5:31](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=331)** Next don't create new types for each new project.
>
> **[5:34](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=334)** I made the mistake in the beginning because I followed the mistakes of previous admins.
>
> **[5:39](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=339)** Just like schemes, issue types are meant to be shared.
>
> **[5:42](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=342)** Finally, don't create super specific or duplicate issue types.
>
> **[5:47](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=347)** For example, for any type of development problem, use the standard bug issue type.
>
> **[5:53](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=353)** Don't also create defect.
>
> **[5:55](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=355)** Try to get teams to use the same terminology whenever possible.
>
> **[5:58](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=358)** Further, don't create custom types like production bug and staging bug.
>
> **[6:04](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=364)** Instead, create a custom field called environment to capture the location of the bug.
>
> **[6:09](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=369)** When naming, try to group similar activities together.
>
> **[6:13](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=373)** In the second example, one issue type called access is better than three issue types, representing different kinds of access.
>
> **[6:21](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=381)** Always think about how you want to report on the data.
>
> **[6:24](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=384)** You can leverage custom fields, labels, and components to help differentiate between requests.
>
> **[6:29](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=389)** Reporting needs should dictate the Jira implementation method not the other way around.
>
> **[6:35](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=395)** Here's a mistake to avoid.
>
> **[6:37](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=397)** How many different combinations of issue types could a company possibly need?
>
> **[6:41](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=401)** One company had 134.
>
> **[6:44](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=404)** Now this was not because they were actually needed, but because new types and schemes were created for every new project.
>
> **[6:51](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=411)** At the same company, there were a few projects that use the default issue type scheme, which contains every available issue type.
>
> **[6:58](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=418)** Reporters in that project were overwhelmed when creating a new issue.
>
> **[7:02](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=422)** They had to wade through 134 available selections.
>
> **[7:06](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=426)** The choices weren't even listed alphabetically.
>
> **[7:10](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=430)** The project leads couldn't easily report on or segment the issue the teams were addressing.
>
> **[7:15](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=435)** Instead, don't create too many issue types and don't assign the default scheme.
>
> **[7:20](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=440)** The legal team wants to track their contracts and agreements in Jira.
>
> **[7:24](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=444)** Because the contract process has a different workflow than their other work, and there are contracts specific custom fields, a new issue type is warranted.
>
> **[7:32](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=452)** Let's create one for them.
>
> **[7:37](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=457)** First, I'll go to the issue types admin page and click the button at the top right.
>
> **[7:44](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=464)** Next, enter a name and a description and click the Form Submission button.
>
> **[7:49](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=469)** Next, let's give the new issue type an icon so it's easy to visually identify.
>
> **[7:58](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=478)** Then click the Form Submission button.
>
> **[8:02](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=482)** Now we can add the issue type to the legal projects, issue type scheme.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), type. (3), finally, (2), type, (2), delete (1)
> **Tools:** jira (7)
> **Analogies:** for example (5), just like (2)
> **CLI Commands:** find (2)
> **Prerequisites:** required to (1), you'll need (1)
> **UI Navigation:** go to (1)
> **Speakers:** - let (1)

#### Use and create custom workflows
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-workflows?u=76281980)

#### Use and create custom screens
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=0)** - [Narrator] In this section, we'll discuss the mandatory and optional screens needed by issue types, projects, and workflows.
>
> **[0:07](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=7)** Screens define which fields are present and their display order.
>
> **[0:11](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=11)** Jira lets you define the order of some fields, but not all.
>
> **[0:14](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=14)** And field display capabilities differ between cloud and server and data center.
>
> **[0:19](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=19)** For example, in Jira Cloud only there's a feature called "Issue Layout".
>
> **[0:25](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=25)** Instead of different screens for different issue operations, there's one consistent screen and field order for the entire project.
>
> **[0:33](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=33)** Click the link on the right to change the layout for the listed issue types.
>
> **[0:37](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=37)** On this page, drag and drop fields to change their order and location on the page.
>
> **[0:42](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=42)** To hide a field, drag it to the right column.
>
> **[0:45](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=45)** Again, this issue layout feature is only available in Cloud.
>
> **[0:49](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=49)** Another thing to know is both project admins and application admins can change field order.
>
> **[0:55](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=55)** Okay, let's get back to screens.
>
> **[0:58](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=58)** To create a screen, click the button on the top right.
>
> **[1:01](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=61)** All screens contain the following attributes, a unique name to identify it, an optional description, a list of associated standard and custom fields, and optional tabs to group the fields.
>
> **[1:13](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=73)** You can have different screens for different issue operations.
>
> **[1:17](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=77)** For example, a create screen typically contains only the fields for information needed initially.
>
> **[1:23](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=83)** Always make create screens as short as possible and don't ask questions the reporter can't answer.
>
> **[1:29](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=89)** If an issue's reporter doesn't usually schedule work, omit fields like "fixed version" and "due date" on the create screen.
>
> **[1:35](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=95)** Show these fields on the edit and view screens instead.
>
> **[1:39](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=99)** An edit or view screen often contains all the fields needed by the project.
>
> **[1:44](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=104)** And, as we discussed in the previous section, a screen can also be used to collect information during a workflow transition.
>
> **[1:52](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=112)** Screens leverage standard and custom fields to collect information.
>
> **[1:56](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=116)** In the example, the first screen has a story point standard field.
>
> **[2:00](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=120)** And the second screen has the steps to reproduce custom field.
>
> **[2:04](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=124)** As we discussed in the scheme section, screen schemes associate screens with issue operations.
>
> **[2:12](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=132)** In the example, there's one screen for all actions.
>
> **[2:16](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=136)** A screen scheme can have one, two, or three screens, however.
>
> **[2:21](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=141)** As you may recall, an issue type screen scheme associates screen schemes with different issue types.
>
> **[2:28](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=148)** In the example, there's one screen scheme shared by the story and bug issue types.
>
> **[2:33](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=153)** A project can have one screen scheme per issue type or fewer schemes.
>
> **[2:38](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=158)** Alternately, you can have different screens for each issue type.
>
> **[2:42](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=162)** For example, the bug screen scheme may contain a screen with fields like step to reproduce, and expected result.
>
> **[2:49](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=169)** Here's a more complex, but common setup.
>
> **[2:53](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=173)** In this example, the issue type screen scheme contains two screen schemes.
>
> **[2:58](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=178)** The first screen scheme at the top is for the story issue type.
>
> **[3:02](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=182)** It has one screen for all issue actions and contains three fields.
>
> **[3:07](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=187)** The second screen scheme at the bottom is for the bug issue type.
>
> **[3:11](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=191)** It has two screens.
>
> **[3:12](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=192)** The first screen at the top is for the create action and contains three fields.
>
> **[3:17](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=197)** The second screen at the bottom is for the edit and view actions and contains four fields.
>
> **[3:23](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=203)** Like everywhere else in Jira, fewer schemes are always easier to maintain.
>
> **[3:28](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=208)** Only build what you really need and make sure it creates business value.
>
> **[3:33](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=213)** Sometimes you think a field should display on a screen, but it doesn't.
>
> **[3:37](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=217)** Luckily, there's a feature to help.
>
> **[3:39](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=219)** It's the Field Helper and it uncovers why it field is invisible.
>
> **[3:43](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=223)** Start creating a new issue to access the feature.
>
> **[3:45](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=225)** Click the "Configure Fields" button on the top right and look for the "Where's my field?" link.
>
> **[3:50](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=230)** This feature checks the project and issue type scope, the field configuration, and the screen to uncover configuration problems.
>
> **[3:58](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=238)** In the screenshot, the custom field cost doesn't display because it's simply not on the needed screen.
>
> **[4:04](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=244)** The helper shows which settings to modify and provides direct links.
>
> **[4:08](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=248)** Here are some best practices.
>
> **[4:11](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=251)** Start with a single screen for all issue operations.
>
> **[4:14](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=254)** Create more when there are too many fields or when data needs to be entered in stages.
>
> **[4:19](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=259)** If you have a separate create screen, limit the number of fields displayed.
>
> **[4:24](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=264)** Too many can overwhelm the reporter.
>
> **[4:26](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=266)** For the fields you can order, list them in the order a user is most likely to supply the information.
>
> **[4:32](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=272)** For example, I display the priority field before a requested date custom field.
>
> **[4:37](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=277)** Hopefully the order helps set realistic expectations.
>
> **[4:41](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=281)** Use a consistent field order between screens and projects.
>
> **[4:45](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=285)** Users expect and appreciate the standard.
>
> **[4:48](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=288)** Finally, if there are a lot of fields, use tabs to group them.
>
> **[4:52](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=292)** Click the link shown to add a tab.
>
> **[4:55](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=295)** In the example, I named the first default tab "Details" and created a second new tab called "Scheduling".
>
> **[5:01](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=301)** Then I moved all the estimation and date type fields to the scheduling tab.
>
> **[5:07](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=307)** Here are some things to avoid.
>
> **[5:09](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=309)** Don't collect data you won't query or report on.
>
> **[5:12](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=312)** Don't create more screens than you really need.
>
> **[5:15](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=315)** Try to leverage existing screens before creating new ones.
>
> **[5:18](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=318)** Finally, when screens are shared, don't add fields that don't apply to all projects.
>
> **[5:24](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=324)** For example, let's say the HR and legal teams share screens.
>
> **[5:27](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=327)** Then I add a custom field called "Benefit Level".
>
> **[5:30](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=330)** Well, now the legal team sees a field that doesn't even apply to them and that's annoying.
>
> **[5:35](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=335)** When a field has a narrow use, create a custom screen so you can apply it only to the appropriate projects.
>
> **[5:43](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=343)** Let's say there are a lot of bugs and the leadership team wants to better understand their cause and impact.
>
> **[5:49](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=349)** You added the root cause and impact fields to the bug screens to collect this information.
>
> **[5:54](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=354)** That's a good first step, but before a bug is closed, you should make sure those fields are completed.
>
> **[6:00](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=360)** Let's create a transition screen to use in the bug workflow.
>
> **[6:04](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=364)** First, I'll go to the screen's admin page and find the default resolve issue screen.
>
> **[6:12](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=372)** The existing screen contains fields we need, like "Resolution" and "Fixed version".
>
> **[6:16](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=376)** So let's copy it to give us a starting point.
>
> **[6:20](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=380)** Next, enter a new name and a description and click the form submission button.
>
> **[6:27](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=387)** Now we'll click the configure link to add additional fields.
>
> **[6:31](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=391)** Use the drop down menu to select the impact field and root cause fields.
>
> **[6:36](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=396)** Now we can use this screen in the bug workflow.
>
> **[6:40](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=400)** You can also add workflow validators to require field completion during the transition.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), type. (3), finally, (2), require (1)
> **Analogies:** for example (5)
> **CLI Commands:** make (3), find (1)
> **Tools:** jira (3)
> **UI Navigation:** drag and drop (1), go to (1), select the (1)
> **Prerequisites:** configure (2), setup (1)
> **Cross-References:** we discussed (2)
> **Speakers:** - [narrator] (1)

#### Use and create custom fields
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=0)** - [Presenter] How many custom fields do you have?
>
> **[0:02](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=2)** For most of us, the answer is too many.
>
> **[0:05](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=5)** In cloud, the count is displayed at the top of the page.
>
> **[0:08](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=8)** In server or data center, 25 fields show on each paginated page.
>
> **[0:13](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=13)** Scroll down to the bottom of the page and multiply the number of pages by 25 for an approximate count.
>
> **[0:19](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=19)** Two, your software comes with approximately 30 custom fields and that doubles if you installed Jira Service Management.
>
> **[0:25](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=25)** Additional fields are also added by third-party apps and Jira administrators.
>
> **[0:30](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=30)** If you're not careful, it's easy to end up with a large list.
>
> **[0:34](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=34)** When a new custom field is warranted, create one by clicking the button on the top right.
>
> **[0:39](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=39)** All custom fields contain the following attributes.
>
> **[0:42](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=42)** A unique name per field type, an optional description, a type like text, number, select list or check box, optional translation features and an association with screens.
>
> **[0:54](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=54)** Different field types also have different settings, properties or options.
>
> **[0:58](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=58)** For example, a select list field contains one or more options.
>
> **[1:03](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=63)** A text field can be single or multi-line and some fields can have default values.
>
> **[1:08](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=68)** Some fields are configurable and some are locked, meaning you can't edit or remove them.
>
> **[1:13](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=73)** The screenshot shows three locked fields.
>
> **[1:16](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=76)** The account field was created by an app.
>
> **[1:18](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=78)** The effected services and approvals field were created by Jira service management.
>
> **[1:23](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=83)** You can add locked fields to screens but you can't modify their settings.
>
> **[1:28](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=88)** There are many custom field types to choose from and additional types are available with free or paid apps from the Atlassian marketplace.
>
> **[1:35](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=95)** Let's discuss the most common ones.
>
> **[1:38](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=98)** If a user can choose one or more selections, use a checkbox field type.
>
> **[1:42](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=102)** There are two correct answers to this question.
>
> **[1:45](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=105)** So, check boxes are the best use.
>
> **[1:47](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=107)** If a user can choose only one selection, use a radio button field type.
>
> **[1:52](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=112)** These two fields are often confused or used incorrectly in Jira and on the web.
>
> **[1:57](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=117)** Make sure you use the proper type based on how many options the user should select.
>
> **[2:03](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=123)** The radio button type, you'll notice has an none option.
>
> **[2:06](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=126)** None is automatically present when the field is optional.
>
> **[2:10](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=130)** If none is selected, it means the field is empty or no.
>
> **[2:14](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=134)** You can query for this condition.
>
> **[2:16](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=136)** Using the JQL, field name is empty.
>
> **[2:19](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=139)** Don't add custom selections called none because of it's selected, the field is no longer empty.
>
> **[2:25](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=145)** There's also an other selection.
>
> **[2:27](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=147)** Have you ever tried to complete a form but the selection you need isn't listed?
>
> **[2:31](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=151)** That's frustrating.
>
> **[2:33](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=153)** I always include an other choice in case the user can't answer the question for whatever reason.
>
> **[2:39](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=159)** The next set of fields are selection lists.
>
> **[2:42](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=162)** The screenshot shows a single select list but you can also create a multi-select field.
>
> **[2:47](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=167)** Just like in the previous example, there's a non-selection which represents null or empty.
>
> **[2:53](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=173)** In addition to single or multi-select list, there's also a cascading selection type.
>
> **[2:59](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=179)** Here's what the field looks like on a create screen.
>
> **[3:02](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=182)** The field has two drop-down menus.
>
> **[3:04](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=184)** The options in the second menu are determined by the selection in the first menu.
>
> **[3:09](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=189)** This field works well for grouping work by two levels like category and subcategory.
>
> **[3:15](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=195)** Sometimes this field is useful and other times, two separate fields are more useful.
>
> **[3:20](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=200)** It all depends on whether one selection must be dependent on another and your reporting needs.
>
> **[3:26](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=206)** Here's another view of the same cascading field.
>
> **[3:29](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=209)** This is how it looks when you edit it in cloud.
>
> **[3:31](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=211)** The first selection is on the top and the second selection is on the bottom.
>
> **[3:35](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=215)** The JQL for this field type is a little daunting.
>
> **[3:39](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=219)** Here's the format to use and an example in cloud.
>
> **[3:42](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=222)** Use us to query the standard field called operational categorization in Jira service management.
>
> **[3:49](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=229)** Next, let's discuss text field types.
>
> **[3:52](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=232)** They're single line and multi-line.
>
> **[3:55](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=235)** Choosing between the two depends on desired character length.
>
> **[3:59](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=239)** For 255 characters or less, to single line.
>
> **[4:03](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=243)** For longer paragraph type responses, choose multi-line.
>
> **[4:07](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=247)** Another useful field type is the single or multiple user picker on the left.
>
> **[4:12](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=252)** This is useful when the list of people are Jira users.
>
> **[4:16](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=256)** If the people are not Jira users, use a text field instead.
>
> **[4:20](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=260)** They're also date or date time picker field types like on the right.
>
> **[4:24](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=264)** I usually create a custom date field called requested date and put it on the create screen.
>
> **[4:29](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=269)** That way, the reporter can request whatever date they want and the due date field is used to reflect reality.
>
> **[4:36](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=276)** If you need a timestamp, use the date time picker field instead.
>
> **[4:40](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=280)** I typically use this field type for change requests or in legal projects where the exact time's important.
>
> **[4:46](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=286)** Finally, there are two other fields that I use often.
>
> **[4:50](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=290)** The first is the URL type and it creates clickable text.
>
> **[4:54](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=294)** The type isn't good for multiple URLs however.
>
> **[4:57](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=297)** For multiple URLs, use a multi-line text field instead.
>
> **[5:01](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=301)** One more thing to know, don't use this field to link to records in either Atlassian or connected applications.
>
> **[5:08](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=308)** Use the built-in linking functions instead.
>
> **[5:10](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=310)** One company use the custom field to link Jira issues to confluence pages instead of the built-in function.
>
> **[5:16](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=316)** When they migrated and their confluence URL changed, all their links broke and they had to manually update them in the database.
>
> **[5:23](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=323)** Not fun.
>
> **[5:25](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=325)** The last issue type I wanted to mention is the number type.
>
> **[5:28](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=328)** This field accepts any numeric, floating point or integer.
>
> **[5:32](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=332)** In the example, I've used this field to collect dollars and cents.
>
> **[5:36](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=336)** A common use of this field type is to use a workflow transition or automation to require approval or perform certain actions when a cost is above a threshold like a hundred dollars.
>
> **[5:48](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=348)** There's one more thing I want you to know about custom fields.
>
> **[5:52](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=352)** They each have two contexts.
>
> **[5:54](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=354)** The first context is where the field is used.
>
> **[5:58](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=358)** To best explain this, I'll call it a field scope.
>
> **[6:01](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=361)** When you create a new custom field, you should always set a scope.
>
> **[6:05](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=365)** A scope defines which projects and issue types of field applies to.
>
> **[6:09](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=369)** If a field is likely to be used by multiple projects and tissue types, a global scope may be appropriate.
>
> **[6:15](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=375)** But if field has a limited use case, limited scope for good application indexing and performance.
>
> **[6:22](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=382)** In this example, the cost custom field is limited to the purchase request custom type which is represented by the green dollar sign icon.
>
> **[6:31](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=391)** The field is also limited to the IT service desk project.
>
> **[6:35](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=395)** If this field is needed by other issue types or projects in the future, simply click the edit configuration link to change the settings.
>
> **[6:42](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=402)** To set or edit a field scope in cloud, go to the custom fields admin page, click the ellipsis and select context and default value.
>
> **[6:51](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=411)** In server or data center, click the ellipsis and select configure instead.
>
> **[6:57](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=417)** The second type of context represents how a custom field is used.
>
> **[7:01](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=421)** A common example is one custom field that shows different selection values in different projects.
>
> **[7:07](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=427)** In this example, I created a custom select field called swamp animals and added the options alligators, crayfish, shrimp, snakes, and tadpoles.
>
> **[7:16](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=436)** Next, I clicked the add new context link and created a context called swamp reptiles.
>
> **[7:22](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=442)** Here are the two contexts or uses for the same custom field.
>
> **[7:26](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=446)** The swamp reptiles context on the right contains the options alligators, snakes, and turtles.
>
> **[7:33](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=453)** The context is also limited in scope to the demo project.
>
> **[7:37](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=457)** This configuration means when I use the swamp animals custom field in the demo project, it will display only three options.
>
> **[7:45](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=465)** If I use this field in any other project, it will display five options.
>
> **[7:50](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=470)** The options can be different and the field description can be different as well.
>
> **[7:54](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=474)** Here's the tip.
>
> **[7:55](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=475)** Another way to change a fields description is to use a field configuration.
>
> **[8:00](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=480)** We discussed field configurations briefly in a previous section.
>
> **[8:05](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=485)** Using a context is a great way to avoid creating duplicate custom fields.
>
> **[8:09](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=489)** You can't use a context to change a fields name or label however.
>
> **[8:14](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=494)** Here are some best practices.
>
> **[8:16](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=496)** Always choose the best custom field type for the use case.
>
> **[8:19](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=499)** Once a type of selected, you cannot change it.
>
> **[8:22](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=502)** Try to limit the number of custom fields in your application.
>
> **[8:26](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=506)** Too many are hard to maintain and could impact performance.
>
> **[8:30](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=510)** If a custom field isn't used by all projects or issue types, limited scope and finally use of field configuration or context for different custom field descriptions or values, here are some things to avoid.
>
> **[8:43](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=523)** Don't create more than one field with the same name.
>
> **[8:46](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=526)** For example, don't create a text field called owner and a picker field also called owner.
>
> **[8:52](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=532)** Jira allows it, but it makes it hard for users to query the correct field.
>
> **[8:56](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=536)** Don't create fields with different tenses or singular and plural formats.
>
> **[9:01](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=541)** For example, don't create a field called approve and another field called approved.
>
> **[9:06](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=546)** Again, make fields easy to query in use.
>
> **[9:09](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=549)** Pick a field naming convention and stick to it.
>
> **[9:12](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=552)** Finally, avoid special characters.
>
> **[9:15](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=555)** Jira allows them but it makes queries error prone and ugly.
>
> **[9:19](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=559)** We previously created a custom issue type so the legal team could track their contracts and agreements.
>
> **[9:25](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=565)** Now they need a custom field to record contract expiration dates.
>
> **[9:29](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=569)** Let's create one for them.
>
> **[9:31](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=571)** First, I'll go to the custom fields admin page and click the button at the top right.
>
> **[9:36](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=576)** Next, I'll select the date picker type field and click the form submission button.
>
> **[9:42](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=582)** Next, give the new custom field a unique name and add a description if desired.
>
> **[9:47](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=587)** Then click the form submission button.
>
> **[9:49](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=589)** Now we can add the custom field to the legal project screens or do it later.
>
> **[9:54](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=594)** Did you notice that I named the field generically?
>
> **[9:56](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=596)** I chose the name expiration instead of contract expiration so other teams with other types of expiration dates could also use this field.
>
> **[10:05](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=605)** I also emitted the word date from the fields name as the date format is visually obvious.
>
> **[10:12](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=612)** Finally, I omitted a field description because I thought the fields name and type were self-explanatory.
>
> **[10:19](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=619)** I don't think the copy when this ones expire adds lot of value.
>
> **[10:22](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=622)** No matter what I'm creating in Jira, I always try to build generically for simplicity and with the future of the application in mind.
>
> **[10:30](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=630)** Here's an advanced use case I built for myself.
>
> **[10:33](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=633)** I wanted to track my travel costs in Jira so I could estimate my mileage expenses.
>
> **[10:38](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=638)** I wanted to enter the number of travel miles and automatically calculate the mileage fee.
>
> **[10:44](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=644)** This was easy to do using a third party app called JSU Automation Suite for Jira workflows.
>
> **[10:50](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=650)** I added a calculated field post function to a workflow transition and used a simple math formula.
>
> **[10:57](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=657)** The formula is miles divided by 10 miles per gallon times $3 per gallon.
>
> **[11:03](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=663)** Hopefully you get better gas mileage than I do.
>
> **[11:06](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=666)** The formula result is automatically added to the mileage fee custom number field.
>
> **[11:10](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=670)** I'm terrible at math, so I'm glad Jira can do it for me.

> [!info]- Semantic Content
>
> **Code Keywords:** type. (4), let (3), finally, (3), type, (2), function (2)
> **Tools:** jira (14), confluence (2)
> **Env Vars:** jql (2), url (2), jsu (1)
> **UI Navigation:** go to (2), scroll down (1), checkbox (1), select the (1)
> **Analogies:** for example (3), just like (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Cross-References:** we discussed (1)

#### Challenge: Create a project template
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-a-project-template?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-a-project-template?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-a-project-template?u=76281980&t=5)** - [Instructor] As I mentioned previously, I like to create one issue type scheme for dev type projects, one for support type projects and another for task type projects.
>
> **[0:14](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-a-project-template?u=76281980&t=14)** This way, there's a standard and each project type has a consistent set of issue types.
>
> **[0:19](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-a-project-template?u=76281980&t=19)** In this challenge, you'll create your own set of schemes to use as a standard for new projects.
>
> **[0:25](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-a-project-template?u=76281980&t=25)** Create the listed schemes for a software team, a business team, a support team, or any other use case at your organization.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Create a project template
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-a-project-template?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-a-project-template?u=76281980&t=0)** - [Instructor] Were you able to create new schemes to use as a standard for future Jira projects?
>
> **[0:10](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-a-project-template?u=76281980&t=10)** Here's how I do it.
>
> **[0:11](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-a-project-template?u=76281980&t=11)** I'll show the use case for a task type or business type project that teams like HR, legal, and marketing can use.
>
> **[0:18](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-a-project-template?u=76281980&t=18)** I'll build the schemes in Cloud, but the process is the same in server and data center.
>
> **[0:23](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-a-project-template?u=76281980&t=23)** First create an issue type scheme.
>
> **[0:29](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-a-project-template?u=76281980&t=29)** Then add the desired issue types.
>
> **[0:31](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-a-project-template?u=76281980&t=31)** I'll add epic, task, and sub task and set task as the default.
>
> **[0:38](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-a-project-template?u=76281980&t=38)** Next, create a workflow scheme, then add the simple three-step workflow we created earlier in the course.
>
> **[0:51](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-a-project-template?u=76281980&t=51)** Finally, let's create some configuration elements, create a screen and add the appropriate fields.
>
> **[0:58](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-a-project-template?u=76281980&t=58)** Then create a screen scheme and associate the screen just created.
>
> **[1:04](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-a-project-template?u=76281980&t=64)** Finally create an issue type screen scheme, and associate the screen scheme just created.
>
> **[1:13](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-a-project-template?u=76281980&t=73)** Next time you create a new project, associate these standard schemes and remove any that Jira automatically created.

> [!info]- Semantic Content
>
> **Code Keywords:** default. (1), finally, (1), let (1)
> **Tools:** jira (2)
> **Cross-References:** earlier in (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. 4. Managing Project Settings

#### Use and create versions
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=0)** - [Instructor] In previous sections, we discuss global schemes and settings.
>
> **[0:04](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=4)** Global schemes are designed to be shared by multiple projects.
>
> **[0:07](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=7)** Now let's talk about settings that are project specific and not shared, like versions, components and users.
>
> **[0:15](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=15)** For everything in this section, the settings, or any projects admin area, click the Project Settings option to get there.
>
> **[0:23](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=23)** Development type projects often require versions and releases.
>
> **[0:27](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=27)** Software teams use versions to track code changes, but other teams can use them too.
>
> **[0:32](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=32)** A version is a grouping of issues by date or time period.
>
> **[0:36](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=36)** You can also see them referred to as fixed versions or releases.
>
> **[0:41](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=41)** To create a version, click the button on the top right.
>
> **[0:44](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=44)** All versions contain the following attributes.
>
> **[0:47](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=47)** A unique name to identify it, an optional description, a start date and a release date, and a state, like unreleased, released or archived.
>
> **[0:58](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=58)** Versions work a little differently than other selection custom fields, there's a lot of logic running in the background.
>
> **[1:05](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=65)** For example, versions are used to power the version report in the reports area.
>
> **[1:10](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=70)** Unlike other custom fields, there's a hard-coded permission implication.
>
> **[1:14](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=74)** To select a version, a user needs the "Resolve Issues" permission in a projects permission scheme.
>
> **[1:21](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=81)** Both project and application administrators can create and manage versions.
>
> **[1:25](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=85)** Finally, an issue can be associated with multiple versions.
>
> **[1:30](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=90)** Teams without traditional releases can use the versions field in alternate ways.
>
> **[1:35](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=95)** You can use versions to group issues by week, month, quarter or by any imaginable category.
>
> **[1:42](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=102)** For example, if less technical users have trouble querying for issues within a date range, you could create a version for each quarter, but, before you do this, consider whether this categorization is helpful or if you're just duplicating the standard due date functionality.
>
> **[1:59](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=119)** Here are some best practices.
>
> **[2:01](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=121)** Match first in naming to conventions used in other systems.
>
> **[2:04](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=124)** For example, if the release is named 1.1.0 in another application, don't name it 1.1 in Jira.
>
> **[2:12](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=132)** While 1.1.0 and 1.1 may mean the exact same thing, format differences make them hard to search for.
>
> **[2:20](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=140)** Next, use consistent formatting within a project and across the organization.
>
> **[2:25](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=145)** Decide on the naming convention and stick with it.
>
> **[2:28](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=148)** Users should easily be able to predict the next version number.
>
> **[2:32](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=152)** Tom Preston-Werner inventor of Gravatar, and co-founder of GitHub, created the semantic versioning specification.
>
> **[2:39](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=159)** This is a recommendation for naming versions in the format, major.minor.patch.
>
> **[2:45](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=165)** Review his recommendation at the URL shown.
>
> **[2:48](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=168)** Finally, be sure to maintain the versions.
>
> **[2:52](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=172)** For example, when a release date passes, use the Release option to mark the version released.
>
> **[2:58](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=178)** You can also archive a version, which hides it from reports and other views, automatically run a build, if Bamboo and Jira are connected, merge one version into another and move its issues to the desired version, and edit or delete versions.
>
> **[3:13](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=193)** I recommend delegating version management to project level administrators if you can.
>
> **[3:18](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=198)** Read more about managing versions at the URL shown.
>
> **[3:23](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=203)** Here are some things to avoid.
>
> **[3:25](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=205)** Don't make your version format more complicated than it needs to be.
>
> **[3:29](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=209)** Users shouldn't need a reference document to decode the meaning of the version.
>
> **[3:33](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=213)** Don't use the release date in the version name.
>
> **[3:35](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=215)** If the release date shifts, the name will be incorrect and queries will break when you fix it, just update the release date field not the release name field.
>
> **[3:44](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=224)** Also, avoid specifying the release type in version names.
>
> **[3:48](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=228)** Instead, use the description field to indicate an emergency release instead of a standard release.
>
> **[3:54](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=234)** Keep your release names short, so they're easy to query.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2), let (1), require (1), this, (1), for. (1)
> **Versions:** 1.1.0 (2), 1.1 (2)
> **Analogies:** for example (4)
> **Tools:** jira (2), github (1)
> **CLI Commands:** make (2)
> **Env Vars:** url (2)
> **Definitions:** is a  (2)
> **Documentation:** specification (1)

#### Use and create components
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=0)** - [Instructor] Components are my favorite project, specific setting for many reasons.
>
> **[0:04](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=4)** First, they are a great way to categorize issues.
>
> **[0:07](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=7)** In this screenshot, issues are categorized by skill needed.
>
> **[0:11](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=11)** This forms a nice grouping that can be queried.
>
> **[0:14](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=14)** Next, this is one of the few fields that project-level administrators can manage.
>
> **[0:18](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=18)** Just like with versions, I recommend delegating component management duties to project admins.
>
> **[0:24](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=24)** Finally, components is the only field in JIRA with auto assignment capabilities.
>
> **[0:30](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=30)** In this screenshot, I'm listed as the default lead for the front end component.
>
> **[0:34](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=34)** The Default Assignee column specifies that front end issues are assigned to the component lead.
>
> **[0:40](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=40)** If the front end component is selected, when an issue is created, the issue will automatically be assigned to me.
>
> **[0:46](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=46)** This is great for removing manual work.
>
> **[0:48](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=48)** One thing to know, auto assignment only happens on the create action.
>
> **[0:53](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=53)** Selecting a component later in the workflow will not change the assignee.
>
> **[0:58](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=58)** To create a component, click the button on the top right.
>
> **[1:03](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=63)** All components contain the following attributes: a unique name to identify it, an optional description, and an optional lead, which is any JIRA user.
>
> **[1:14](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=74)** Also, included is an optional default assignee, which is the project's default, the project lead, or the component lead, or unassigned.
>
> **[1:23](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=83)** In Server and Data Center, you can archive an unneeded component.
>
> **[1:27](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=87)** In cloud, you can delete or rename an unneeded component instead.
>
> **[1:32](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=92)** You can use components in many ways.
>
> **[1:34](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=94)** Here are some examples.
>
> **[1:35](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=95)** If the project is for building software, you could categorize issues by skill needed.
>
> **[1:40](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=100)** For building a car, you could categorize by part or area.
>
> **[1:44](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=104)** For creating a new product, you could use job or department impacted.
>
> **[1:48](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=108)** And for writing copy, you could use the location where the copy is posted.
>
> **[1:52](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=112)** The possibilities are endless.
>
> **[1:54](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=114)** There's no limit to how many components a project or issue can have.
>
> **[1:58](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=118)** But I do recommend using components to answer one question instead of many questions.
>
> **[2:03](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=123)** For example, ask what skill is needed or what area is impacted? But not both.
>
> **[2:09](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=129)** Again, reporting needs should always drive implementation.
>
> **[2:14](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=134)** Here are some best practices.
>
> **[2:16](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=136)** First, components are great. So use them.
>
> **[2:19](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=139)** I see so many JIRA projects without them.
>
> **[2:22](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=142)** It's okay if you don't want to use the routing feature, but at least use the selections so you can group and report unrelated work.
>
> **[2:29](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=149)** Next, if the component field is required, make sure there's an other selection.
>
> **[2:33](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=153)** This is the same advice I give for any type of selection field.
>
> **[2:37](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=157)** Finally, make component names short.
>
> **[2:40](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=160)** One word or two-word values make the easiest queries.
>
> **[2:44](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=164)** Here's some things to avoid.
>
> **[2:46](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=166)** As I previously mentioned, components work best when they answer one question.
>
> **[2:50](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=170)** It's important to choose the most important question wisely.
>
> **[2:54](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=174)** If you're not sure what the best question is, wait until there are a healthy number of issues in the project.
>
> **[3:00](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=180)** After the project is used for awhile, issue patterns will become clear.
>
> **[3:04](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=184)** Also, don't duplicate standard JIRA fields or other custom fields.
>
> **[3:09](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=189)** Make sure the question the component answers is unique.
>
> **[3:13](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=193)** Here's an advanced use case I built for one of my clients.
>
> **[3:16](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=196)** The client wanted to manage their onboarding process in JIRA.
>
> **[3:19](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=199)** For each new hire, they created an issue and selected the components for each application or resource the user needed.
>
> **[3:27](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=207)** In this example, the new hire needed a chair, a desk phone, and a license from Microsoft Excel.
>
> **[3:34](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=214)** For each component selected, a subtask was automatically created, assigned to the component lead, and the new hires name was appended to the summary.
>
> **[3:42](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=222)** This was easy to do using a third-party workflow app called JIRA Workflow Toolbox.
>
> **[3:48](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=228)** I added a Create Issue post function to a workflow transition.
>
> **[3:51](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=231)** And used a little bit of code to create one subtask per component.
>
> **[3:56](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=236)** This is another great way to use components.
>
> **[3:58](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=238)** You should always look for additional ways to solve problems and save time using existing JIRA data.

> [!info]- Semantic Content
>
> **Env Vars:** jira (7)
> **Tools:** jira (7)
> **Code Keywords:** finally, (2), default, (1), delete (1), function (1)
> **CLI Commands:** make (4)
> **Analogies:** just like (1), for example (1)
> **Cross-References:** later in (1)
> **Definitions:** is an  (1)
> **Best Practices:** you should always (1)

#### Working with users
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=0)** - Users are another project specific setting.
>
> **[0:03](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=3)** Let's discuss how each project can have a distinct set of users with different capabilities.
>
> **[0:09](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=9)** But first, here's a reminder that Jira has both global and project level elements that impact users.
>
> **[0:15](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=15)** Each person has a user account, which may be part of one or more groups.
>
> **[0:20](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=20)** Groups are often used to grant global permissions, which we talked about in the beginning of the course.
>
> **[0:25](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=25)** Next, the entire application has a global set of roles, which are used to grant project specific abilities.
>
> **[0:32](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=32)** The default roles are administrators and developers.
>
> **[0:35](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=35)** If Jira Service Management is installed, there are two additional roles called service desk customers and service desk team.
>
> **[0:43](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=43)** In Cloud, there's an additional role called Atlassian add-ons project access, which is used by apps.
>
> **[0:49](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=49)** These roles are used by all projects and determine who can do what in each project.
>
> **[0:55](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=55)** If your application has other custom roles, you'll see them in this list too.
>
> **[0:59](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=59)** I don't like the name of the developer role because it's very software specific.
>
> **[1:04](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=64)** Sometimes I change it to team.
>
> **[1:06](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=66)** On the right are the project level user elements to be aware of.
>
> **[1:10](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=70)** Permission schemes control specific project actions like assigning issues, managing sprints, and adding comments.
>
> **[1:17](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=77)** We'll talk about these again in the next section.
>
> **[1:20](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=80)** Then each project has its own set of users.
>
> **[1:23](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=83)** In Cloud, the project user area is called people.
>
> **[1:27](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=87)** In Server and Data Center, it's called users and roles.
>
> **[1:31](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=91)** Users in a project are often part of one or more global project roles.
>
> **[1:36](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=96)** Here's an example.
>
> **[1:37](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=97)** Project 1 has one user in the administrators role, labeled user A.
>
> **[1:42](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=102)** User A is also in the developers role in project 1.
>
> **[1:46](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=106)** In project 2, user A is only in the developers role.
>
> **[1:50](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=110)** Assuming these projects use the same permission scheme, user A has a lot more abilities in project 1 than in project 2.
>
> **[1:57](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=117)** Here's what the Users page looks like in Cloud.
>
> **[2:00](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=120)** In this example, the global administrators group has a permission granted to the project role also called administrators.
>
> **[2:07](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=127)** This means the end user who's in the administrators group gets all the abilities of an administrator in this project.
>
> **[2:14](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=134)** By using a group, you don't have to add multiple admin users separately.
>
> **[2:18](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=138)** Next, there's an individual user account, and it's assigned to the developers role.
>
> **[2:23](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=143)** You can't tell from the screenshot, but my account is in the global administrators group.
>
> **[2:27](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=147)** So in this project, my account has both levels of permissions.
>
> **[2:31](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=151)** If you have the free version of Jira Cloud, project roles aren't editable.
>
> **[2:36](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=156)** You'll need to upgrade your plan for this configuration feature.
>
> **[2:40](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=160)** Here's what the Users page looks like in Server and Data Center.
>
> **[2:44](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=164)** There are a few visual differences, but the example is the same.
>
> **[2:48](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=168)** In Server and Data Center, the global administrators group is called Jira-Administrators.
>
> **[2:53](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=173)** Just like with versions and components, I recommend delegating this type of user management to project level admins.

> [!info]- Semantic Content
>
> **Tools:** jira (4)
> **Cross-References:** we talked about (1), in the next (1)
> **Definitions:** is called (2)
> **Code Keywords:** let (1)
> **Analogies:** just like (1)
> **Warnings:** be aware (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - users (1)

#### Challenge: Create components
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-components?u=76281980&t=0)** (upbear music)
>
> **[0:05](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-components?u=76281980&t=5)** - [Instructor] In this challenge, you'll create components for a Jira project, look for existing projects that don't already have components, or use a test project.
>
> **[0:14](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-components?u=76281980&t=14)** Next, determine one question for the components to answer.
>
> **[0:17](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-components?u=76281980&t=17)** For example, what area of the business is impacted, or which office location is impacted?
>
> **[0:24](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-components?u=76281980&t=24)** Then, create the component selections to answer the question.
>
> **[0:27](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-components?u=76281980&t=27)** Be sure to use terminology that makes sense to the user.
>
> **[0:30](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-components?u=76281980&t=30)** Finally, add component leads and set the default assignee, if you want to use the routing feature.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1)
> **Tools:** jira (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbear music) (1)

#### Solution: Create components
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-components?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-components?u=76281980&t=5)** - [Instructor] Were you able to create and configure the components?
>
> **[0:08](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-components?u=76281980&t=8)** Here's how to do it.
>
> **[0:10](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-components?u=76281980&t=10)** I found that the human resources project doesn't have components, so I'll create some there.
>
> **[0:15](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-components?u=76281980&t=15)** Navigate to the project's admin area by clicking Project Settings, then Components.
>
> **[0:21](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-components?u=76281980&t=21)** Next, I asked the HR team how they'd like to categorize their work.
>
> **[0:25](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-components?u=76281980&t=25)** They have one staff member dedicated to each office, so segmenting their work by location is useful.
>
> **[0:31](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-components?u=76281980&t=31)** I'll create one component per office.
>
> **[0:35](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-components?u=76281980&t=35)** Since I don't know which HR rep manages which office, I'll stop there.
>
> **[0:39](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-components?u=76281980&t=39)** I'll show the project's administrator how to add component leads and set the default assignee.
>
> **[0:44](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-components?u=76281980&t=44)** I'll also set the expectation that the project admin should manage the components going forward.

> [!info]- Semantic Content
>
> **UI Navigation:** navigate to (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 6. 5. Working with Groups and Roles

#### Leveraging project roles
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/leveraging-project-roles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/leveraging-project-roles?u=76281980&t=0)** - [Instructor] In the last section, we talked about project roles and how they're used globally by every Jira project.
>
> **[0:06](https://www.linkedin.com/learning/jira-advanced-administration/leveraging-project-roles?u=76281980&t=6)** The default roles of administrators and developers are a good starting point, but sometimes it's useful to create more.
>
> **[0:14](https://www.linkedin.com/learning/jira-advanced-administration/leveraging-project-roles?u=76281980&t=14)** Think about how your teams are structured to determine what additional roles might be useful.
>
> **[0:19](https://www.linkedin.com/learning/jira-advanced-administration/leveraging-project-roles?u=76281980&t=19)** Let's use the example of a marketing team at a medium size organization.
>
> **[0:25](https://www.linkedin.com/learning/jira-advanced-administration/leveraging-project-roles?u=76281980&t=25)** First, determine what team roles exist naturally outside of Jira.
>
> **[0:29](https://www.linkedin.com/learning/jira-advanced-administration/leveraging-project-roles?u=76281980&t=29)** Each team usually has one or more leaders.
>
> **[0:32](https://www.linkedin.com/learning/jira-advanced-administration/leveraging-project-roles?u=76281980&t=32)** Then there are team members, colleagues from departments you regularly work with, and other users like interns, consultants, or external or temporary staff.
>
> **[0:43](https://www.linkedin.com/learning/jira-advanced-administration/leveraging-project-roles?u=76281980&t=43)** Think about how the responsibilities and abilities of each role differ.
>
> **[0:48](https://www.linkedin.com/learning/jira-advanced-administration/leveraging-project-roles?u=76281980&t=48)** For example, colleagues often have more duties than interns.
>
> **[0:52](https://www.linkedin.com/learning/jira-advanced-administration/leveraging-project-roles?u=76281980&t=52)** As such, colleagues may also have more permissions in Jira.
>
> **[0:56](https://www.linkedin.com/learning/jira-advanced-administration/leveraging-project-roles?u=76281980&t=56)** In this example, colleagues have some abilities and abilities for others are limited.
>
> **[1:01](https://www.linkedin.com/learning/jira-advanced-administration/leveraging-project-roles?u=76281980&t=61)** If however, there's no capability difference between two team roles, then there's no need to make a distinction in Jira either.
>
> **[1:08](https://www.linkedin.com/learning/jira-advanced-administration/leveraging-project-roles?u=76281980&t=68)** For example, if team members, colleagues, and others are all able to perform the same tier actions, there's no need for multiple custom roles.
>
> **[1:17](https://www.linkedin.com/learning/jira-advanced-administration/leveraging-project-roles?u=76281980&t=77)** Next, map the team roles to the Jira role equivalents.
>
> **[1:21](https://www.linkedin.com/learning/jira-advanced-administration/leveraging-project-roles?u=76281980&t=81)** For leadership, we'll use the default administrators group.
>
> **[1:25](https://www.linkedin.com/learning/jira-advanced-administration/leveraging-project-roles?u=76281980&t=85)** Team leads usually administer the team's Jira project.
>
> **[1:28](https://www.linkedin.com/learning/jira-advanced-administration/leveraging-project-roles?u=76281980&t=88)** The only other standard project role is developers, and that naming doesn't quite fit our use case.
>
> **[1:34](https://www.linkedin.com/learning/jira-advanced-administration/leveraging-project-roles?u=76281980&t=94)** We'll need to create a few additional custom roles.
>
> **[1:37](https://www.linkedin.com/learning/jira-advanced-administration/leveraging-project-roles?u=76281980&t=97)** For team members, I'll either rename the default developer's role, or create a new role called team.
>
> **[1:43](https://www.linkedin.com/learning/jira-advanced-administration/leveraging-project-roles?u=76281980&t=103)** For colleagues, I'll create a custom group called users.
>
> **[1:48](https://www.linkedin.com/learning/jira-advanced-administration/leveraging-project-roles?u=76281980&t=108)** I think this used to be a default Jira role, so see if your application already has it.
>
> **[1:53](https://www.linkedin.com/learning/jira-advanced-administration/leveraging-project-roles?u=76281980&t=113)** Finally, for others like interns and consultants, I'll create a custom role called viewers.
>
> **[2:00](https://www.linkedin.com/learning/jira-advanced-administration/leveraging-project-roles?u=76281980&t=120)** Try to keep project role names as generic as possible.
>
> **[2:03](https://www.linkedin.com/learning/jira-advanced-administration/leveraging-project-roles?u=76281980&t=123)** Remember, these roles will be used by all Jira projects.
>
> **[2:09](https://www.linkedin.com/learning/jira-advanced-administration/leveraging-project-roles?u=76281980&t=129)** Create new custom roles using the form at the bottom of the project roles admin page.
>
> **[2:13](https://www.linkedin.com/learning/jira-advanced-administration/leveraging-project-roles?u=76281980&t=133)** In the screenshot I've added team, users, and viewers, because I want each role to have different abilities.
>
> **[2:20](https://www.linkedin.com/learning/jira-advanced-administration/leveraging-project-roles?u=76281980&t=140)** As I mentioned before, some organizations change the name of developers to team to be more inclusive.
>
> **[2:27](https://www.linkedin.com/learning/jira-advanced-administration/leveraging-project-roles?u=76281980&t=147)** Additionally, I've seen companies change administrators to project administrators to make the roles purpose clearer.
>
> **[2:34](https://www.linkedin.com/learning/jira-advanced-administration/leveraging-project-roles?u=76281980&t=154)** Here's the impact of adding roles as seen in a Jira project.
>
> **[2:39](https://www.linkedin.com/learning/jira-advanced-administration/leveraging-project-roles?u=76281980&t=159)** The new roles are immediately included in the dropdown menus.
>
> **[2:42](https://www.linkedin.com/learning/jira-advanced-administration/leveraging-project-roles?u=76281980&t=162)** Any project level administrator can leverage the new selections in their project.

> [!info]- Semantic Content
>
> **Tools:** jira (9)
> **Code Keywords:** let (1), case. (1), finally, (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the last (1), we talked about (1)
> **Analogies:** for example (2)
> **UI Navigation:** dropdown (1)
> **Speakers:** - [instructor] (1)

#### Working with groups
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=0)** - [Instructor] Roles and groups are often confused.
>
> **[0:03](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=3)** Think of a role as a common function on a team and a group as the list of individuals performing that function.
>
> **[0:10](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=10)** Project roles are often created when you initially configured JIRA and are likely not changed very often.
>
> **[0:16](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=16)** Groups require regular maintenance however but they make user management easier.
>
> **[0:21](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=21)** In this section, we'll discuss how to create, use and maintain groups.
>
> **[0:26](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=26)** Here's our marketing team role example from the previous section.
>
> **[0:30](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=30)** Now that we've created the needed custom roles, let's add users and groups to them.
>
> **[0:36](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=36)** For the leadership or project administrators role, there's only one user so there's no need to create a custom group.
>
> **[0:43](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=43)** For the team role, there are three users.
>
> **[0:46](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=46)** So I'll create a group called marketing team.
>
> **[0:49](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=49)** It's common for there to be one group per team or department, but don't create more groups than you're willing to manage.
>
> **[0:56](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=56)** For the remaining user roles, I'll simply add individuals to the project.
>
> **[1:01](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=61)** In the future, if there are many people in a role, and if the same people are in the same role in multiple projects, then I might create a group.
>
> **[1:09](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=69)** By using roles and groups, we can separate what people do.
>
> **[1:13](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=73)** For example, we'll allow people in the team role to create, edit, schedule and resolve issues.
>
> **[1:20](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=80)** For people in the other or viewers' role, we'll allow them to see data, but not change it.
>
> **[1:26](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=86)** You can create new custom groups from the user management admin page.
>
> **[1:30](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=90)** In cloud, click the create group button at the top right.
>
> **[1:34](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=94)** Then give your group a unique name and an optional description.
>
> **[1:38](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=98)** Check the box at the bottom of the overlay to add users now or add them later.
>
> **[1:44](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=104)** Here's the group creation page in JIRA server.
>
> **[1:46](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=106)** As you can see, the user interface is different.
>
> **[1:49](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=109)** Add the group first and then click the edit members link in the actions column to add members.
>
> **[1:56](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=116)** When naming groups, decide on a common format and stick to it.
>
> **[2:00](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=120)** Can you think of a different way to name the marketing dash team group name in this example?
>
> **[2:06](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=126)** If I revise the name to team dash marketing, then all the team groups would display together alphabetically.
>
> **[2:13](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=133)** The first example is useful if you have a lot of marketing groups.
>
> **[2:16](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=136)** The second example is useful if you have a lot of team groups.
>
> **[2:20](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=140)** When creating in JIRA, always think of the impact that naming conventions may have later.
>
> **[2:26](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=146)** Here are some best practices for roles and groups.
>
> **[2:29](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=149)** Create custom roles but only when they are warranted.
>
> **[2:33](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=153)** You need more roles when you want to grant JIRA project functions to only certain types of users.
>
> **[2:38](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=158)** If users can perform all functions, additional roles or overkill, you might only need an administrator's role as you always want to limit those abilities.
>
> **[2:48](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=168)** Next, create custom groups for easy user management.
>
> **[2:52](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=172)** It's much easier to add users to a group and leverage the group throughout the JIRA configuration.
>
> **[2:58](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=178)** You can embed individual users, but it's harder to maintain, especially as your user count grows over time.
>
> **[3:05](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=185)** Also, you need to proactively maintain group membership.
>
> **[3:09](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=189)** Make sure users are routinely added and removed when they join and leave the company.
>
> **[3:14](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=194)** Conduct a periodic audit of who was in which group and encourage team needs to proactively notify you when the needs change.
>
> **[3:22](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=202)** Pay special attention to the membership of the application admin group.
>
> **[3:26](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=206)** There should be a special approval process to add new members to this important group.
>
> **[3:32](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=212)** Finally, as a JIRA administrator, you should delegate project management duties to project level admins.
>
> **[3:39](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=219)** I recommend selecting two project admins so there's a backup if one is out of the office.
>
> **[3:44](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=224)** Project admin should manage project users and application administrators must manage group membership.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), require (1), let (1), interface (1), finally, (1)
> **Env Vars:** jira (6)
> **Tools:** jira (6)
> **CLI Commands:** make (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Using groups and roles in schemes
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/using-groups-and-roles-in-schemes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/using-groups-and-roles-in-schemes?u=76281980&t=0)** - [Instructor] Now that we've discussed groups and roles, let's explore the many places you can use them in the configuration.
>
> **[0:06](https://www.linkedin.com/learning/jira-advanced-administration/using-groups-and-roles-in-schemes?u=76281980&t=6)** Here are some examples.
>
> **[0:08](https://www.linkedin.com/learning/jira-advanced-administration/using-groups-and-roles-in-schemes?u=76281980&t=8)** As previously shown, you can use groups and roles to give abilities in individual Jira projects.
>
> **[0:15](https://www.linkedin.com/learning/jira-advanced-administration/using-groups-and-roles-in-schemes?u=76281980&t=15)** Next, you can use groups and roles to determine abilities and permission schemes.
>
> **[0:20](https://www.linkedin.com/learning/jira-advanced-administration/using-groups-and-roles-in-schemes?u=76281980&t=20)** In this example, only project level administrators and application administrators can delete issues.
>
> **[0:27](https://www.linkedin.com/learning/jira-advanced-administration/using-groups-and-roles-in-schemes?u=76281980&t=27)** You can use groups and roles in notification schemes too.
>
> **[0:31](https://www.linkedin.com/learning/jira-advanced-administration/using-groups-and-roles-in-schemes?u=76281980&t=31)** In this example, project admins and application admins receive a notification when an issue is reopened.
>
> **[0:38](https://www.linkedin.com/learning/jira-advanced-administration/using-groups-and-roles-in-schemes?u=76281980&t=38)** Issue security schemes can leverage groups and roles as well.
>
> **[0:42](https://www.linkedin.com/learning/jira-advanced-administration/using-groups-and-roles-in-schemes?u=76281980&t=42)** In this example, members of the administrators and team project roles can see issues deemed confidential.
>
> **[0:49](https://www.linkedin.com/learning/jira-advanced-administration/using-groups-and-roles-in-schemes?u=76281980&t=49)** As also shown in the workflow section, groups and roles are often embedded in workflow transition behaviors.
>
> **[0:55](https://www.linkedin.com/learning/jira-advanced-administration/using-groups-and-roles-in-schemes?u=76281980&t=55)** This condition is used to hide the done transition to non-administrators.
>
> **[1:01](https://www.linkedin.com/learning/jira-advanced-administration/using-groups-and-roles-in-schemes?u=76281980&t=61)** End users can't create roles or groups, but they can leverage them in objects like boards, dashboards, dashboard gadgets, filters and filter subscriptions.
>
> **[1:12](https://www.linkedin.com/learning/jira-advanced-administration/using-groups-and-roles-in-schemes?u=76281980&t=72)** Finally, roles and groups are often used in third-party apps.
>
> **[1:16](https://www.linkedin.com/learning/jira-advanced-administration/using-groups-and-roles-in-schemes?u=76281980&t=76)** This example shows the Tempo time-tracking app.
>
> **[1:19](https://www.linkedin.com/learning/jira-advanced-administration/using-groups-and-roles-in-schemes?u=76281980&t=79)** This page is used to create a team.
>
> **[1:21](https://www.linkedin.com/learning/jira-advanced-administration/using-groups-and-roles-in-schemes?u=76281980&t=81)** By clicking the link at the bottom of the page, you can add multiple users at once from a group.
>
> **[1:26](https://www.linkedin.com/learning/jira-advanced-administration/using-groups-and-roles-in-schemes?u=76281980&t=86)** This is a huge time-saver when there are many users to add.
>
> **[1:31](https://www.linkedin.com/learning/jira-advanced-administration/using-groups-and-roles-in-schemes?u=76281980&t=91)** Here's another example using the Power Admin app from Botron Atlassian Apps.
>
> **[1:36](https://www.linkedin.com/learning/jira-advanced-administration/using-groups-and-roles-in-schemes?u=76281980&t=96)** This helps your administrators understand dependencies and usage.
>
> **[1:40](https://www.linkedin.com/learning/jira-advanced-administration/using-groups-and-roles-in-schemes?u=76281980&t=100)** For example, you can search for details on the usage of a group.
>
> **[1:45](https://www.linkedin.com/learning/jira-advanced-administration/using-groups-and-roles-in-schemes?u=76281980&t=105)** Now I can understand how the group is used and the impact if I decide to rename or remove it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), delete (1), finally, (1)
> **Tools:** jira (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Create a read-only role
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-a-read-only-role?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-a-read-only-role?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-a-read-only-role?u=76281980&t=5)** - [Instructor] Use what you learned in this section to prepare for making project issues read-only.
>
> **[0:10](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-a-read-only-role?u=76281980&t=10)** First, create a new custom role called viewers.
>
> **[0:14](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-a-read-only-role?u=76281980&t=14)** Next, use the test user you created in the Jira basic administration course, or any test user with general application access.
>
> **[0:22](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-a-read-only-role?u=76281980&t=22)** Add the test user to the viewers role in a test project.
>
> **[0:26](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-a-read-only-role?u=76281980&t=26)** We'll use these settings to complete the next challenge.

> [!info]- Semantic Content
>
> **Tools:** jira (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Create a read-only role
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-a-read-only-role?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-a-read-only-role?u=76281980&t=0)** - [Instructor] Did you provide the items we'll need to make a project read-only in the next section?
>
> **[0:09](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-a-read-only-role?u=76281980&t=9)** Here's how to do it.
>
> **[0:11](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-a-read-only-role?u=76281980&t=11)** First, visit the Project Roles admin page, and create a new custom role.
>
> **[0:18](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-a-read-only-role?u=76281980&t=18)** Then go to the Users and Roles or people admin section in your test project.
>
> **[0:25](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-a-read-only-role?u=76281980&t=25)** Now, add a test user to the new role.
>
> **[0:30](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-a-read-only-role?u=76281980&t=30)** Now we're ready to use these settings with the permission scheme in the next section.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (2)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 7. 6. Restricting and Sharing Information

#### Use and create permissions
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-permissions?u=76281980)

#### Use and create issue security
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=0)** - [instructor] In addition to JIRA application permissions and project permissions, you can also use issue security schemes to limit access to individual project issues.
>
> **[0:10](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=10)** Issue security schemes are often used to protect sensitive information for legal security audit and compliance reasons.
>
> **[0:17](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=17)** And this is the opposite of transparency.
>
> **[0:19](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=19)** So make sure it's really needed before you add it.
>
> **[0:23](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=23)** Of course, if you have super secret data, you should evaluate whether it belongs in the general JIRA application, whether it should have its own dedicated JIRA application or whether it belongs in JIRA at all, to create an issue security scheme, click the link at the bottom of the page.
>
> **[0:40](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=40)** You can also copy an existing scheme.
>
> **[0:42](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=42)** No security schemes are created by default.
>
> **[0:45](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=45)** If you need one create it manually after creating an issue security scheme, click the security levels link to add levels and users.
>
> **[0:56](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=56)** To add security levels.
>
> **[0:57](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=57)** Use the form at the bottom of the page.
>
> **[0:59](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=59)** To add users, groups, or project roles, click the add link for each security level, all issue security schemes contain the following attributes, a unique name to identify it an optional description and security levels to determine which users or groups can access which issues you can also specify a default security level if desired.
>
> **[1:22](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=82)** Of course you can share issue security schemes between multiple projects.
>
> **[1:27](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=87)** The ability to restrict access to only some issues might even help avoid the need for multiple projects.
>
> **[1:34](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=94)** Each of security settings apply to all issue types in the project, including sub tasks.
>
> **[1:40](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=100)** Let's use our marketing team example from the project roles section.
>
> **[1:45](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=105)** Let's say, in addition to all the work the marketing team does, sometimes there are tasks that need to remain secret until they're ready to be shared.
>
> **[1:53](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=113)** Maybe the company is planning for an acquisition or there's a highly classified issue to address.
>
> **[1:58](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=118)** Here's how it could be reflected in an issue security scheme.
>
> **[2:02](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=122)** This scheme has two levels sensitive for issues that only the leadership team can see and confidential for issues only team members can see all other issues can be seen by regular users.
>
> **[2:14](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=134)** Like colleagues from other departments and others like interns and consultants.
>
> **[2:20](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=140)** Adding an issue security scheme is a six step process, but it's quicker than it sounds.
>
> **[2:25](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=145)** First, create the scheme at the needed security levels and add users, groups, or roles to the levels.
>
> **[2:33](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=153)** Then associate the scheme with the project.
>
> **[2:35](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=155)** Next, edit the set issue security line in the permission scheme to determine who can set the issue security and finally add the security level standard field to the project screens.
>
> **[2:47](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=167)** So users can select the security level.
>
> **[2:50](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=170)** Let's do a quick demo.
>
> **[2:55](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=175)** First let's create an issue security scheme.
>
> **[2:59](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=179)** Next, let's add two security levels.
>
> **[3:06](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=186)** Next we need to add users to each security level.
>
> **[3:09](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=189)** Notice that the levels are ordered alphabetically, not in the order I entered them.
>
> **[3:14](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=194)** This confuses me sometimes.
>
> **[3:18](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=198)** Also I want to make sensitive the default setting a default ensures all issues are set to this level.
>
> **[3:24](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=204)** If the reporter does not have permission to set as your security.
>
> **[3:29](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=209)** Next, we need to apply the issue security scheme to a JIRA project.
>
> **[3:35](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=215)** This project doesn't have any previously secured issues, so there's no migration needed.
>
> **[3:42](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=222)** Next, edit the project permission scheme to determine who can set the security level.
>
> **[3:47](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=227)** I'll grant the permission to leadership and team members.
>
> **[3:54](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=234)** Finally, we need to make sure the security level field is present on the project screens.
>
> **[4:00](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=240)** If the security level field is there, all that's left to do is test that issue security is working as intended.
>
> **[4:07](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=247)** If the field is missing, simply add it to the related screens.
>
> **[4:10](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=250)** Like you'd add any other standard or custom field to delete an issue security scheme.
>
> **[4:16](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=256)** You must remove it from any projects using it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), super (1), default. (1), finally, (1), delete (1)
> **Env Vars:** jira (5)
> **Tools:** jira (5)
> **CLI Commands:** make (3)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Use and create notifications
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=0)** - In this section, we'll discuss using and creating notification schemes.
>
> **[0:05](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=5)** Notification schemes control the email messages sent at lifecycle events.
>
> **[0:09](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=9)** For example, who should receive a message when an issue was created, updated, or assigned?
>
> **[0:15](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=15)** Jira comes with one default notification scheme.
>
> **[0:18](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=18)** You might have a business need for more than one, but you don't need one per project.
>
> **[0:23](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=23)** Sometimes organizations use two schemes: One that sends all the standard notifications, and one that sends very few messages.
>
> **[0:31](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=31)** To create a notification scheme, click the button at the bottom of the page.
>
> **[0:36](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=36)** Just like when creating new permission schemes, this will create a scheme with no settings.
>
> **[0:41](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=41)** You'll need to add users, groups, or project roles.
>
> **[0:44](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=44)** You can also copy an existing scheme with its settings using the copy link.
>
> **[0:50](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=50)** All notification schemes contain the following attributes: A unique name to identify it; An optional description; And settings to determine who receives each type of message.
>
> **[1:02](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=62)** Like other schemes, you can share these settings between multiple projects.
>
> **[1:07](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=67)** Here are the settings for the default notification scheme in all types of Jira.
>
> **[1:11](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=71)** Each notification type is sent to a list of users, groups, or roles.
>
> **[1:16](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=76)** In this example, the Issue Created notification is sent to the current assignee, the reporter, and all watchers.
>
> **[1:23](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=83)** To add additional users, click the Add link on the right.
>
> **[1:28](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=88)** The UI is a little different, but you can add users, roles, or groups to notification schemes, just like you do for permission schemes.
>
> **[1:36](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=96)** As I mentioned in the basic administration course, when's the last time your user said, "I wish I had more email?"
>
> **[1:43](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=103)** Probably never. So use these notification schemes sparingly.
>
> **[1:47](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=107)** If you send a notification for every little action, users are likely to ignore them, or send them directly to the trash.
>
> **[1:54](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=114)** It's important to send the right amount of notifications for your organization.
>
> **[1:58](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=118)** For each notification, consider how useful the information is, and its intended audience.
>
> **[2:04](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=124)** Ask yourself, "Does the user really need this information for every issue in the project?
>
> **[2:10](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=130)** And will the user appreciate this notification, or filter it out?"
>
> **[2:14](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=134)** There may be better ways for keeping up with Jira changes, like dashboards, filter subscriptions, or connecting Jira to a team chat room.
>
> **[2:22](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=142)** Don't let Jira send more emails than are really needed.
>
> **[2:27](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=147)** Each issue level activity is associated with an event and Jira automatically sends email notifications when those events occur.
>
> **[2:35](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=155)** There are 17 standard system notification points.
>
> **[2:38](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=158)** Some events are managed internally by Jira and some are part of workflow post functions that you can modify.
>
> **[2:44](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=164)** System notifications can't be added or deleted, but you can make them inactive by disassociating any notification schemes and removing any workflow behaviors.
>
> **[2:54](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=174)** For each notification, think about which would be useful for your users and which may be overkill.
>
> **[3:01](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=181)** Most are self-explanatory, but I'll share some tips for some.
>
> **[3:05](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=185)** Let's start with the issue updated notification.
>
> **[3:08](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=188)** It includes updates like changing the description, attaching a file, or updating a field.
>
> **[3:13](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=193)** The documentation isn't super clear on the specific list of changes.
>
> **[3:17](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=197)** So the best way to test this is to make different types of updates and see which trigger a message.
>
> **[3:23](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=203)** These are often the most frequent and potentially the most annoying updates to receive.
>
> **[3:29](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=209)** For issue assigned, a notification is sent both to the previous assignee and the current assignee.
>
> **[3:36](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=216)** Here's the next set of notifications.
>
> **[3:38](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=218)** The issue comment deleted notification is not currently listed in the Jira documentation, but there's a note that says when an issue's comment is deleted Jira sends out an email notification as an issue updated event.
>
> **[3:53](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=233)** If you've restricted the ability to delete issues in a permission scheme, you might not need an issue deleted notification.
>
> **[3:59](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=239)** Either send this notification to the same users with the issue delete permission or leave the recipients list empty.
>
> **[4:06](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=246)** The worklog notifications are only useful if users track time.
>
> **[4:10](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=250)** Sometimes companies send these to the finance department, to an account manager, or to another application for capitalization or billing.
>
> **[4:18](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=258)** The last standard notification is called generic event and it's used by workflow transitions.
>
> **[4:24](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=264)** You may remember from the workflow section that a generic event post function is automatically added to each workflow transition.
>
> **[4:32](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=272)** For the final transition, I recommend changing this generic event to an issue closed event.
>
> **[4:37](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=277)** This way the user receives a more specific email message.
>
> **[4:41](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=281)** In addition to the standard notification points, you can also create custom event notifications.
>
> **[4:46](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=286)** Use these to alert someone about a specific action.
>
> **[4:49](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=289)** For example, alert the lead developer that an issue is ready for code review.
>
> **[4:54](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=294)** Alert the testing team that an issue is ready for verification.
>
> **[4:58](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=298)** Or alert a senior exec that their approval is needed.
>
> **[5:02](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=302)** Adding a custom notification is a three-step process.
>
> **[5:06](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=306)** First create a new event, then add recipients in a notification scheme, then add a corresponding post function in a workflow.
>
> **[5:14](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=314)** Let's do a quick demo.
>
> **[5:17](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=317)** The QA team wants a notification when bugs are ready for them to test.
>
> **[5:21](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=321)** We can ask Jira to send an email using a custom event.
>
> **[5:24](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=324)** First, go to the events admin page in the system area.
>
> **[5:29](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=329)** Start by adding a new event.
>
> **[5:33](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=333)** The new event is now available for use in a notification scheme.
>
> **[5:37](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=337)** Click the notifications link and scroll to the bottom.
>
> **[5:41](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=341)** Then click the Add link to add recipients.
>
> **[5:46](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=346)** Finally, we need to add a workflow post function to trigger the event notification.
>
> **[5:51](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=351)** Go to the workflows page in the issues admin area.
>
> **[5:56](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=356)** Select the workflow to edit and the desired transition.
>
> **[6:02](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=362)** Then click the post function tab and change the generic event to a custom one.
>
> **[6:07](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=367)** When this transition executes, an additional message is sent to the selected recipients.
>
> **[6:14](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=374)** You can customize message contents with the help of additional apps.
>
> **[6:19](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=379)** To delete a custom event, make it inactive by disassociating notification schemes and removing workflow behaviors.
>
> **[6:27](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=387)** Here are some best practices: Be mindful of how many messages users receive.
>
> **[6:32](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=392)** If you notify users of every little thing, they're likely to filter messages or ignore them.
>
> **[6:38](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=398)** Also be mindful of the strain a lot of notifications may put on the mail server.
>
> **[6:43](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=403)** Finally, except for some special cases, most projects probably have the same notification needs.
>
> **[6:49](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=409)** Share schemes as often as possible.
>
> **[6:52](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=412)** Here are some things to avoid: Don't notify large groups of users.
>
> **[6:56](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=416)** Don't add the entire Jira users group to a notification, for example.
>
> **[7:01](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=421)** Instead, teach users how to find information without relying on email messages.
>
> **[7:06](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=426)** Also, don't alert users of their own actions.
>
> **[7:10](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=430)** They likely know what they did and don't need an email message to confirm it.
>
> **[7:15](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=435)** Speaking of notifying users of their own changes, users have some control over the types of messages they receive.
>
> **[7:22](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=442)** In Cloud, there are five check boxes the user can select or deselect.
>
> **[7:26](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=446)** The default selections are shown.
>
> **[7:29](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=449)** The final check box is not selected by default unless the application administrator has changed the setting globally.
>
> **[7:36](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=456)** I recommend admins use the default, which is not to notify users of their own changes.
>
> **[7:42](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=462)** In Server and Data Center, there's one user profile setting called "My Changes."
>
> **[7:47](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=467)** In all deployment types, users can choose whether to receive notifications in HTML or text format.
>
> **[7:54](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=474)** Also, it's good to know that users only receive notifications for issues they had the permission to see.
>
> **[8:00](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=480)** Further, Jira does not send notification messages to inactive users.
>
> **[8:06](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=486)** So who gets what email in your projects?
>
> **[8:09](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=489)** What are your notification scheme settings?
>
> **[8:11](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=491)** Are there any adjustments you should make?
>
> **[8:13](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=493)** Visit the URL shown to compare your settings to Jira's default.
>
> **[8:17](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=497)** There are lots of potential email issues to troubleshoot, but luckily, there's a Jira feature to help weigh through some of it.
>
> **[8:24](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=504)** Check out the Using the Notification Helper section of my Jira basic administration course for instructions and other email troubleshooting tips.
>
> **[8:34](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=514)** So it's interesting, a lot of times end users think, "Jira's broken.
>
> **[8:37](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=517)** Jira's not sending me emails."
>
> **[8:39](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=519)** But that's usually not the case.
>
> **[8:40](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=520)** It's usually something on the mail server side that's not functioning as you would expect.
>
> **[8:44](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=524)** And then sometimes end users think that Jira is supposed to send them a notification and it's just not a feature.
>
> **[8:50](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=530)** A good example is, "I shared my dashboard with my co-worker.
>
> **[8:53](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=533)** Why didn't they get an email about it?"
>
> **[8:55](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=535)** Well, that's not a Jira feature.
>
> **[8:57](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=537)** So when there's email notification problems, always start with the mail server, make sure everything's okay with that connection.
>
> **[9:03](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=543)** Then check the email address of the user and make sure everything's okay there.
>
> **[9:06](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=546)** And then finally, check the notification scheme in case it's misconfigured.

> [!info]- Semantic Content
>
> **Tools:** jira (19)
> **Code Keywords:** function (4), let (3), delete (3), finally, (3), self (1)
> **CLI Commands:** make (6), find (1)
> **Analogies:** for example (3), just like (2)
> **UI Navigation:** go to (2), select the (1)
> **Definitions:** is a  (2), is called (1)
> **Env Vars:** html (1), url (1)
> **Warnings:** note that (1), troubleshoot (1)

#### Challenge: Create read-only permissions
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-read-only-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-read-only-permissions?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-read-only-permissions?u=76281980&t=5)** - [Instructor] In the previous challenge, we created a new custom role called viewers and added a test user to the viewers role in a test project.
>
> **[0:13](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-read-only-permissions?u=76281980&t=13)** Now let's use those settings to make issues in a project read-only for the viewers role and editable for the members of the team.
>
> **[0:21](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-read-only-permissions?u=76281980&t=21)** You'll need to change the project permission scheme to remove any instances of any logged in user, if they exist, restrict actions like edit issues and move issues to members of the team, and grant only the browse projects permission to users in the viewers role.
>
> **[0:37](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-read-only-permissions?u=76281980&t=37)** You can edit an existing scheme or create a new blank permission scheme for this use case.
>
> **[0:43](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-read-only-permissions?u=76281980&t=43)** Don't forget to log in as a test user and make sure the restrictions you created work as desired.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Keywords:** let (1), case. (1)
> **Best Practices:** don't forget (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Create read-only permissions
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-read-only-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-read-only-permissions?u=76281980&t=0)** - [Instructor] Were you able to make issues in a project read only for the viewers role and editable for members of your team?
>
> **[0:12](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-read-only-permissions?u=76281980&t=12)** There are two ways to do it.
>
> **[0:13](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-read-only-permissions?u=76281980&t=13)** You can either edit an existing permission scheme or create a brand new one for this use case.
>
> **[0:19](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-read-only-permissions?u=76281980&t=19)** Here's how to do the ladder.
>
> **[0:21](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-read-only-permissions?u=76281980&t=21)** Go to the permission schemes page in the issues admin area, then create a new blank permission scheme.
>
> **[0:30](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-read-only-permissions?u=76281980&t=30)** Now we have a blank scheme and need to add users to it.
>
> **[0:34](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-read-only-permissions?u=76281980&t=34)** First, I'll add the administrator's role to each appropriate permission.
>
> **[0:38](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-read-only-permissions?u=76281980&t=38)** I'll just use the Administer Project's permission for this example.
>
> **[0:42](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-read-only-permissions?u=76281980&t=42)** Next, I'll add the team role to each appropriate permission.
>
> **[0:46](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-read-only-permissions?u=76281980&t=46)** I'll add browse projects, create issues and edit issues for this example, but you'll likely want to add more in your real implementation.
>
> **[0:56](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-read-only-permissions?u=76281980&t=56)** Finally, add the viewers role to only the browse projects permission.
>
> **[1:01](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-read-only-permissions?u=76281980&t=61)** Now you can apply your new permission scheme to any desired projects and test the results.

> [!info]- Semantic Content
>
> **Code Keywords:** case. (1), finally, (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 8. 7. Extending Jira

#### Use and vet apps
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=0)** - [Instructor] Jira is super powerful on its own.
>
> **[0:02](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=2)** But sometimes you'll want to extend it with additional features.
>
> **[0:06](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=6)** You can add more Jira capabilities for the apps from the Atlassian Marketplace.
>
> **[0:11](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=11)** Apps were previously called ad-ons and plugins.
>
> **[0:14](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=14)** In other software, added functionality is sometimes called extensions or modules.
>
> **[0:20](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=20)** Regardless of what you call them, apps bring additional capabilities or extend native functions.
>
> **[0:25](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=25)** Use the Marketplace Search Bar to find apps by name, or vendor name.
>
> **[0:31](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=31)** Use the Navigation menu to filter apps based on application and deployment type.
>
> **[0:37](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=37)** Here's an example Product page for a Marketplace app.
>
> **[0:40](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=40)** In the screenshot, you can see that this app is available for all three hosting options, that's not true for every app, however.
>
> **[0:48](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=48)** Further, sometimes app features differ between deployment methods.
>
> **[0:53](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=53)** Always make sure that an app is compatible with your application type, deployment type, and version.
>
> **[0:59](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=59)** Under the App Title is the App vendor.
>
> **[1:02](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=62)** Click on the vendor's name to see other apps they've developed.
>
> **[1:05](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=65)** Some apps are free and some are paid.
>
> **[1:08](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=68)** The paid apps usually include a free trial.
>
> **[1:10](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=70)** To learn more about an app, click the other tabs.
>
> **[1:14](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=74)** A quick way to get more information is by clicking the Documentation link.
>
> **[1:18](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=78)** Find it and other useful details at the bottom right of an App's Overview page.
>
> **[1:23](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=83)** Before you get too excited and start installing a bunch of apps, there are some things to know.
>
> **[1:29](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=89)** First, I want to share Atlassian's note about safety.
>
> **[1:32](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=92)** As shown in the screenshot, Atlassian shares that apps can materially change the application, and it's important to only install trustworthy apps.
>
> **[1:42](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=102)** But how do you determine if an app is trustworthy?
>
> **[1:45](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=105)** I recommend developing a specific procedure for testing apps and handling app requests from users.
>
> **[1:51](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=111)** Here's my five step system.
>
> **[1:53](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=113)** Use this as a starting point and customize it to fit your needs.
>
> **[1:58](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=118)** Step one is to log the request.
>
> **[2:00](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=120)** Whomever wants to explore a new app should create an issue in the Jira Support Project.
>
> **[2:05](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=125)** Ask the user to provide the Name of the app and its Marketplace URL.
>
> **[2:10](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=130)** Users don't always realize that there are different types of Jira, so be prepared for some requests for incompatible apps.
>
> **[2:17](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=137)** Check this before moving forward.
>
> **[2:19](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=139)** Also, record the cost and billing frequency for your user account.
>
> **[2:23](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=143)** Most apps are built based on your total user count.
>
> **[2:26](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=146)** There are some exceptions, but if you have 500 users and only five users will use the app, you still pay for 500.
>
> **[2:35](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=155)** Before you install an app, it's smart to get preliminary approval from leadership.
>
> **[2:40](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=160)** Ask management to confirm that at the app solves the intended problem, they will provide the funding.
>
> **[2:46](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=166)** Next, install the app in a test environment.
>
> **[2:49](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=169)** Installs and free trials often leave behind remanence you'll have to clean up later.
>
> **[2:53](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=173)** So only install apps in production once you're sure you'll use them.
>
> **[2:57](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=177)** Next, test the app, create a predefined set of questions and test cases to use for all apps, create some additional test cases that are app-specific too.
>
> **[3:08](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=188)** For a list of question to help with the app vetting process, download my handout from the exercise file area in LinkedIn Learning.
>
> **[3:16](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=196)** Make sure the requestor or other potential users help with app testing.
>
> **[3:21](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=201)** If the app is desired and functions as needed, install it in the production environment.
>
> **[3:26](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=206)** In server and data center, copy the commercial license key from my.[atlassian.com](https://atlassian.com), then paste it in on the Manage apps page in the apps Admin area.
>
> **[3:35](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=215)** If the app wasn't quite what you wanted, uninstall it from the test environment.
>
> **[3:40](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=220)** You can install an app or free trial from the Atlassian Marketplace or from within JIRA on the Find new apps page in the Apps Admin area.
>
> **[3:50](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=230)** On the Manage apps admin page, you can also install an app from a file or build your own app.
>
> **[3:56](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=236)** In Cloud, once you've installed an app, you'll see a series of buttons on the Manage apps page.
>
> **[4:02](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=242)** You'll see the buttons for managing subscriptions or free trials, buttons for configuration, and buttons for uninstalling.
>
> **[4:09](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=249)** Uninstalling or unsubscribing in Cloud cancels the app subscription.
>
> **[4:14](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=254)** You can confirm the cancellation by checking the Manage subscriptions page in the Cloud billing area at admin.[atlassian.com](https://atlassian.com).
>
> **[4:22](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=262)** The app management buttons are similar in server and data center, except there are a few more.
>
> **[4:27](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=267)** There are buttons for renewing licenses and updating versions.
>
> **[4:31](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=271)** These functions are done automatically in Cloud, but you need to periodically do the manually in server and data center.
>
> **[4:38](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=278)** There are also Disable buttons, features by disabled apps are immediately unavailable in the application.
>
> **[4:45](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=285)** System apps often can't be disabled because they're needed for standard generic functionality.
>
> **[4:51](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=291)** If for some reason you need to remove an app manually, shut down JIRA, remove the apps jar file from the installation directory on the server, then start JIRA again.
>
> **[5:01](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=301)** In general, apps should be uninstalled when they are no longer working as desired, no longer meeting your needs, or if they duplicate standard functionality.
>
> **[5:10](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=310)** After an app is removed, check for any settings, custom fields, or app data that can be removed manually.
>
> **[5:18](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=318)** The ability to install, manage, and remove apps is all provided by an Atlassian app called the Universal Plugin Manager or UPM for short.
>
> **[5:28](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=328)** All deployment types have a UPM, but in server and data center, you need to periodically update it along with the other apps.
>
> **[5:35](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=335)** As you can see in the screenshot, the UPM tells me to update the UPM.
>
> **[5:40](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=340)** Above the UPM is a built in Atlassian troubleshooting and support tools app in server and data center.
>
> **[5:46](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=346)** In my application, it also needs an update.
>
> **[5:49](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=349)** This app is used to check instance health, analyze server logs, and create a zip file when needed by the Atlassian support team.
>
> **[5:57](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=357)** You'll find it in the system Admin area.
>
> **[6:00](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=360)** There's one more app related feature that I wanted to mention, is the app audit log and you'll find it at the bottom of the Manage apps page in all types of JIRA.
>
> **[6:09](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=369)** This log is app-specific and it's different than the JIRA audit log or other log files.
>
> **[6:15](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=375)** Use this to see a history of major app events like installs, updates, and removals.
>
> **[6:21](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=381)** Here are some best practices, make sure you have a thorough vetting and testing procedure, always involve the requestor in the testing process and make sure all testing occurs in a non-production environment.
>
> **[6:34](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=394)** Make sure the test environment contains real issue and configuration data to test against.
>
> **[6:40](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=400)** Apps can solve a lot of problems, but they can also create them too.
>
> **[6:44](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=404)** Always consider the impact of app installs on your application now, and in the future.
>
> **[6:50](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=410)** For really large apps, make sure your application can handle the load or performance impact, and be prepared to clean up remanence of expired free trials and uninstalled apps.
>
> **[7:01](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=421)** You also need to proactively manage the apps, especially in server and data center.
>
> **[7:07](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=427)** I visit the Manage apps admin page quarterly to check for version and compatibility changes.
>
> **[7:14](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=434)** Here are some things to avoid.
>
> **[7:16](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=436)** There are usually multiple apps that accomplish similar things, always be on the lookout for apps that duplicate standard functionality or duplicate functionality of another app you already have.
>
> **[7:27](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=447)** Don't install more than one app at a time or make major configuration changes while an app is being tested.
>
> **[7:34](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=454)** This makes it hard to isolate the cause of any issues encountered.
>
> **[7:38](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=458)** Finally, I try not to install apps during periods of high usage, just in case impacts performance.
>
> **[7:45](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=465)** Also, sometimes an app will take longer than expected to install, or it will complete in the background but spin or appear to fail in the browser.
>
> **[7:54](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=474)** Always allow the install more time to complete than you think it needs.

> [!info]- Semantic Content
>
> **Prerequisites:** install (12), make sure you have (1)
> **CLI Commands:** make (7), find (5)
> **Env Vars:** jira (5), upm (5), url (1)
> **Tools:** jira (9)
> **Code Keywords:** type, (2), super (1), type. (1), finally, (1)
> **URLs:** [atlassian.com](https://atlassian.com) (2)
> **Exercise Files:** exercise file (1), zip file (1)
> **Documentation:** the documentation (1)

#### Create connections
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=0)** - [Instructor] You can make Jira even more powerful by connecting other Atlassian applications.
>
> **[0:05](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=5)** For instance, link Jira to another Atlassian product, like Confluence or Bitbucket.
>
> **[0:10](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=10)** You can also link a Jira cloud application to a Jira server application.
>
> **[0:15](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=15)** And of course, you can also link the same application to multiple applications.
>
> **[0:19](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=19)** For example, if you have Jira server, you can link into Jira cloud and to Confluence.
>
> **[0:24](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=24)** There's no linking restriction.
>
> **[0:27](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=27)** Connecting Jira to other applications lets users view lots of data in one place.
>
> **[0:32](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=32)** Let's explore the common scenario of connecting Jira and Confluence.
>
> **[0:36](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=36)** There are many benefits to linking these applications.
>
> **[0:39](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=39)** Here are a few.
>
> **[0:41](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=41)** When the applications are connected, you can link to Jira issues to related Confluence pages.
>
> **[0:46](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=46)** The link is reciprocal, meaning you can use it from either application.
>
> **[0:51](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=51)** In this example, I linked this Jira company rebrand epic to a Confluence page, detailing the rebrand plan.
>
> **[0:58](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=58)** You can see a count of linked Jira issues at the top of the Confluence page.
>
> **[1:03](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=63)** In Confluence, simply paste in any Jira link or insert the Jira issues macro.
>
> **[1:09](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=69)** You can so use the Jira issues macro to show multiple Jira issues as a list, Simply execute a JQL query in the search box and click the form submission button.
>
> **[1:19](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=79)** Expand the display options area to set issue limit and the desired columns to show.
>
> **[1:26](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=86)** You can also create a new issue using the same Confluence macro.
>
> **[1:29](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=89)** Just click the link on the left sidebar of the overlay.
>
> **[1:33](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=93)** You can also create a new issue by highlighting copy on any Confluence page.
>
> **[1:37](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=97)** Highlight any phrase and look for the create issue option.
>
> **[1:41](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=101)** Highlight the text in view mode, not in edit mode.
>
> **[1:46](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=106)** And finally, create multiple Jira issues from a Confluence table.
>
> **[1:50](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=110)** Here's an example table of user story information.
>
> **[1:54](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=114)** Highlight the table and look for the same create issue button.
>
> **[1:58](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=118)** In the overlay, click the create multiple issues from table link.
>
> **[2:02](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=122)** Confluence will create one Jira issue for each table row.
>
> **[2:06](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=126)** This is a huge time saver, especially for less technical Jira users.
>
> **[2:10](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=130)** I recommend you create a Jira project for each team or department.
>
> **[2:14](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=134)** Then, create a companion Confluence space for each Jira project and link them together.
>
> **[2:20](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=140)** After, a project pages link will appear in the Jira's project sidebar.
>
> **[2:25](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=145)** This makes it easy for users to find related information.
>
> **[2:28](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=148)** You can also manually add individual Confluence pages to a Jira project sidebar by clicking the add item link.
>
> **[2:37](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=157)** You can also use this connection to display Jira reports and charts in Confluence and link Jira issues to supporting information, like requirements, diagrams, plans, and meeting notes.
>
> **[2:48](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=168)** If you have Jira service management, you can connect your support project to Confluence knowledge base to provide self-service help.
>
> **[2:55](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=175)** Confluence and Jira are truly better when used together.
>
> **[2:59](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=179)** Link Jira to another Atlassian application by using the application links feature.
>
> **[3:04](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=184)** You'll find it in the products admin area in cloud or the applications admin area in server and data center.
>
> **[3:11](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=191)** Here's an example of Jira cloud application connected to a Jira server and a Confluence cloud application.
>
> **[3:18](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=198)** The Jira server connection shows a network error.
>
> **[3:21](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=201)** Click on the arrow lozenge for additional error details.
>
> **[3:26](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=206)** You can add a new connection by pasting a URL in the text box and submitting the form.
>
> **[3:32](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=212)** Edit a removal link using the icons and the actions column.
>
> **[3:36](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=216)** Here are a few tips for managing application links.
>
> **[3:39](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=219)** First, the links are easiest to create and manage when you have admin permissions in both applications.
>
> **[3:45](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=225)** Next, if an application URL changes, you'll need to manually update it.
>
> **[3:50](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=230)** Finally, if you ever need to recreate an app link, remove it from both the applications first.
>
> **[3:56](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=236)** And one more thing.
>
> **[3:57](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=237)** If you have multiple cloud applications, they might already be connected by default.
>
> **[4:02](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=242)** Periodically check on connections from the application links admin page.

> [!info]- Semantic Content
>
> **Tools:** jira (30), confluence (17), bitbucket (1)
> **Code Keywords:** finally, (2), let (1), self (1), default. (1)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** url (2), jql (1)
> **Analogies:** for instance (1), for example (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)

#### Create integrations
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=0)** - [Instructor] You can also enhance Jira by integrating it with other applications and middleware.
>
> **[0:05](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=5)** For example, you can share issue status updates in your team's chat room.
>
> **[0:10](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=10)** You can send your work logs to an external billing application.
>
> **[0:14](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=14)** Or you can sync information, so multiple teams can see the same information in different tools.
>
> **[0:19](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=19)** For example, connect Jira to Salesforce, so teams can work out of both applications.
>
> **[0:25](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=25)** Let's connect the Slack chat application to Jira Cloud as an example.
>
> **[0:29](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=29)** Don't worry if you don't have Slack.
>
> **[0:31](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=31)** You can do similar things with other chat applications.
>
> **[0:35](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=35)** When you connect Jira, a chat channel can receive notifications for many different issue actions.
>
> **[0:40](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=40)** For example, inform the channel when issues or comments are created, updated or deleted, attachments are added, or time is logged, or an issue status has changed.
>
> **[0:51](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=51)** In this integration example, a chat message is posted anytime an issue status changes to closed, or new issue is created.
>
> **[1:00](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=60)** When I'm mobile, I use Slack as a home base.
>
> **[1:03](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=63)** Because I've integrated Slack with Jira and Confluence, I can see what's happening without needing to log into those applications individually.
>
> **[1:10](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=70)** Here's how to set up this integration.
>
> **[1:13](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=73)** Log into Slack and click the add apps option in the sidebar.
>
> **[1:17](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=77)** Select Jira from the list of apps Slack can connect to.
>
> **[1:20](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=80)** Then enter any additional information needed by Slack to make the connection.
>
> **[1:25](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=85)** As you can see, I've already integrated Slack with Jira and other apps, too.
>
> **[1:30](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=90)** On the right, Slack shows some helpful slash commands and buttons.
>
> **[1:34](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=94)** I want to connect to a specific Jira project, so I'll click the connect project button.
>
> **[1:40](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=100)** My Atlassian ID has access to multiple Jira applications, so I'll select the desired one in the first dropdown menu.
>
> **[1:47](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=107)** In the second menu, I've selected the desired Jira project.
>
> **[1:50](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=110)** And in the third menu, I've selected the Slack channel to receive the updates.
>
> **[1:55](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=115)** Now that I've connected a Jira project and the Slack channel, I can set the type of notifications to receive.
>
> **[2:01](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=121)** The default is to notify when issues are created.
>
> **[2:04](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=124)** Click the manage button.
>
> **[2:07](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=127)** Slack will take you to the connected Jira project to manage notification settings.
>
> **[2:11](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=131)** As you can see, there's a new Slack integration link on the sidebar.
>
> **[2:15](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=135)** Use this page to customize the notification type and frequency.
>
> **[2:20](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=140)** You can even use JQL to limit the results.
>
> **[2:23](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=143)** If you find you're receiving too many or too few chat notifications, the levels can be adjusted at any time.
>
> **[2:29](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=149)** I suggest starting out small with notifications only for issue creation, comment creation and issue completion.
>
> **[2:36](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=156)** There's one more Slack area in Jira to be aware of.
>
> **[2:40](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=160)** Jira project admins can manage the Slack project connection from the project settings area.
>
> **[2:45](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=165)** From here, you can edit notifications, mute notifications or delete the connection.
>
> **[2:51](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=171)** You can also create Jira issues from Slack using a slash command.
>
> **[2:55](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=175)** Simply type /jira, a space and the word create.
>
> **[3:00](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=180)** You can also include an issue summary in the command.
>
> **[3:03](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=183)** Submit the command and use the overlay to enter any additional details for Jira.
>
> **[3:08](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=188)** You can also transition, assign and comment on issues directly from Slack.
>
> **[3:13](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=193)** You can also do more with Slack and Jira automation.
>
> **[3:16](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=196)** For example, get a daily summary of issues in the backlog, alert the team when an SLA is breached or create reminders for important tasks.
>
> **[3:25](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=205)** The possibilities are endless.
>
> **[3:27](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=207)** See some examples at the URL shown.
>
> **[3:29](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=209)** You can also use WebHooks as lightweight mechanisms for letting remote applications receive push notifications from Jira.
>
> **[3:37](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=217)** For example, alert a remote application when an issue is updated, a workflow post function is executed, or an incident is being worked.
>
> **[3:45](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=225)** The benefit of a WebHook is that the remote application doesn't have to continuously pull Jira for changes.
>
> **[3:52](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=232)** Read the developer documentation for more details.
>
> **[3:55](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=235)** Let's connect to Slack again, but this time with Jira Server using a WebHook.
>
> **[3:59](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=239)** Click the add apps button on the left sidebar and then select the legacy Jira Server connection.
>
> **[4:05](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=245)** On the next page, select a channel to receive notifications and copy the URL generated for the WebHook.
>
> **[4:12](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=252)** Next, go to the WebHooks page in the Jira system admin area.
>
> **[4:17](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=257)** Click the button shown to create the WebHook for Slack.
>
> **[4:20](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=260)** Give the WebHook a unique name.
>
> **[4:22](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=262)** Paste in the URL provided by Slack, and add an optional description.
>
> **[4:27](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=267)** Next, use JQL to limit the issue list and choose the type of notifications desired.
>
> **[4:33](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=273)** In the screenshot, I've selected the created event for issues and comments.
>
> **[4:38](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=278)** You can get notifications about issues, projects, users and many other events.
>
> **[4:43](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=283)** When you've made all the selections, click the form submission button.
>
> **[4:48](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=288)** Here's the completed WebHook.
>
> **[4:50](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=290)** Don't forget to set your firewall to allow outbound Jira requests if needed.
>
> **[4:55](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=295)** Now both my Jira Cloud and Jira Server applications are integrated with Slack using two different connection methods.
>
> **[5:02](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=302)** You can also integrate and connect applications through third-party middleware.
>
> **[5:07](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=307)** For example, I can connect Jira with my ActiveCampaign CRM or with a WordPress website forum plugin.
>
> **[5:13](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=313)** There are a lot of connection mechanisms out there.
>
> **[5:16](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=316)** Simply enter Jira and the name of your other application in your favorite search engine.
>
> **[5:21](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=321)** And of course, if you can't find the integration you're looking for, you can always develop your own using an Atlassian framework or the REST API.

> [!info]- Semantic Content
>
> **Tools:** jira (28), slack (22), confluence (1)
> **Env Vars:** url (3), jql (2), sla (1), crm (1), rest (1)
> **Analogies:** for example (6)
> **Code Keywords:** let (2), delete (1), function (1), for, (1)
> **UI Navigation:** select the (2), in the sidebar (1), dropdown (1), go to (1)
> **CLI Commands:** find (2), make (1)
> **Best Practices:** don't forget (1)
> **Warnings:** be aware (1)

#### Challenge: Connect Jira to Confluence
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/challenge-connect-jira-to-confluence?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/challenge-connect-jira-to-confluence?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/jira-advanced-administration/challenge-connect-jira-to-confluence?u=76281980&t=5)** - [Instructor] In this challenge, we'll connect to Jira cloud application to a second Confluence cloud application for the simple purpose of showing the procedure.
>
> **[0:14](https://www.linkedin.com/learning/jira-advanced-administration/challenge-connect-jira-to-confluence?u=76281980&t=14)** I realize your organization might not have Confluence or your Confluence application might already be connected.
>
> **[0:20](https://www.linkedin.com/learning/jira-advanced-administration/challenge-connect-jira-to-confluence?u=76281980&t=20)** That's okay.
>
> **[0:21](https://www.linkedin.com/learning/jira-advanced-administration/challenge-connect-jira-to-confluence?u=76281980&t=21)** You could sign up for a new Confluence free trial or simply think of another use case that better fits your organization.
>
> **[0:28](https://www.linkedin.com/learning/jira-advanced-administration/challenge-connect-jira-to-confluence?u=76281980&t=28)** How about connecting another Atlassian application, integrating Jira with a non-Atlassian application or vetting and installing an app from the Atlassian marketplace?
>
> **[0:38](https://www.linkedin.com/learning/jira-advanced-administration/challenge-connect-jira-to-confluence?u=76281980&t=38)** And of course, you'll want to test any installs in a non-production environment first.
>
> **[0:43](https://www.linkedin.com/learning/jira-advanced-administration/challenge-connect-jira-to-confluence?u=76281980&t=43)** For this sample use case, all you need is a second Atlassian application and admin access in both applications.

> [!info]- Semantic Content
>
> **Tools:** confluence (4), jira (2)
> **Code Keywords:** case, (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Connect Jira to Confluence
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/solution-connect-jira-to-confluence?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/solution-connect-jira-to-confluence?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/jira-advanced-administration/solution-connect-jira-to-confluence?u=76281980&t=5)** - [Instructor] Were you able to connect your cloud to Confluence or complete a similar use case helpful for your organization?
>
> **[0:11](https://www.linkedin.com/learning/jira-advanced-administration/solution-connect-jira-to-confluence?u=76281980&t=11)** Here's how to connect to Atlassian applications.
>
> **[0:14](https://www.linkedin.com/learning/jira-advanced-administration/solution-connect-jira-to-confluence?u=76281980&t=14)** First, visit the application links page in the Products admin section in cloud or the Applications admin section in Server and Data Center.
>
> **[0:23](https://www.linkedin.com/learning/jira-advanced-administration/solution-connect-jira-to-confluence?u=76281980&t=23)** Next, enter the URL of the application to link to and click the form submission button.
>
> **[0:30](https://www.linkedin.com/learning/jira-advanced-administration/solution-connect-jira-to-confluence?u=76281980&t=30)** Review the information in the overlay, set any options and click the form submission button.
>
> **[0:36](https://www.linkedin.com/learning/jira-advanced-administration/solution-connect-jira-to-confluence?u=76281980&t=36)** Now do the same thing in the second application.
>
> **[0:39](https://www.linkedin.com/learning/jira-advanced-administration/solution-connect-jira-to-confluence?u=76281980&t=39)** Finally, confirm that the application shown is connected on the application link's page.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1)
> **Env Vars:** url (1)
> **Tools:** confluence (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 9. 8. Advanced Features

#### Import data
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=0)** - [Instructor] The bulk import function is a quick way to get data into JIRA.
>
> **[0:04](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=4)** Use it when you need to import many similar issues like test cases, recurring issues like tasks for quarterly audits or data from another application or another JIRA environment.
>
> **[0:15](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=15)** I once helped a company import 14,000 records to JIRA from an internally developed issue tracker.
>
> **[0:21](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=21)** The project took about 24 hours of work to complete.
>
> **[0:24](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=24)** The hard part wasn't the import itself, it was translating the existing data into a format JIRA could understand.
>
> **[0:32](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=32)** As a reminder, you can quickly create sample data in all environments.
>
> **[0:37](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=37)** See the instructions in the how to create a project section of my basic JIRA administration course.
>
> **[0:44](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=44)** As always, before you make any big changes in JIRA, you should back up your data first.
>
> **[0:49](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=49)** Also, I want to be clear that in this section, we're talking about adding new issues to JIRA, not importing issues for the purpose of migrating JIRA from one deployment method to another, or for restoring JIRA.
>
> **[1:02](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=62)** That's a different type of import activity.
>
> **[1:05](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=65)** JIRA has a built-in app to import data in CSV or comma separated values format.
>
> **[1:11](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=71)** You'll find it another import formats on the external system import page in the system admin area, and users can also import if they have the create issue and the managed bulk changes permission.
>
> **[1:24](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=84)** They can use the import issues from CSV feature on the search page in cloud or in the issues menu and Server and Data Center.
>
> **[1:32](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=92)** The admin version of the importer has more advanced features.
>
> **[1:35](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=95)** So I recommend using the one in the admin area instead.
>
> **[1:40](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=100)** An import is a four step process.
>
> **[1:42](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=102)** Start by preparing the CSV file so issue data is in the format JIRA requires and expects.
>
> **[1:48](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=108)** Next, import two or three records to make sure all expected data is present and in the correct format.
>
> **[1:55](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=115)** I usually forget to format something correctly in my import file and need to do this test step a few times.
>
> **[2:02](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=122)** When the test is successful, import the remaining records.
>
> **[2:05](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=125)** I'm not sure but I don't think there's an import limit.
>
> **[2:08](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=128)** I was able to import 14,000 issues in JIRA cloud without any problems.
>
> **[2:14](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=134)** Finally, sometimes you finish your import and notice something isn't quite right.
>
> **[2:18](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=138)** You can either clean up issues using the bulk change function, or you can do a second import process to update existing issues.
>
> **[2:27](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=147)** Let's talk a little more about preparing your CSV file.
>
> **[2:30](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=150)** The easiest way to ensure the correct format is to export some sample data from JIRA and use that file as a starting point.
>
> **[2:38](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=158)** Open the exporter file, remove the sample data and paste in real data using the same format.
>
> **[2:45](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=165)** Here's a sample CSV file opened in Microsoft Excel and Windows Notepad.
>
> **[2:50](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=170)** This file has just a few of the possible JIRA fields.
>
> **[2:54](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=174)** Each CSV file must contain a header row.
>
> **[2:57](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=177)** This is so you can map the columns to their fields in JIRA.
>
> **[3:01](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=181)** You can use any header titles you want, but they cannot contain punctuation.
>
> **[3:05](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=185)** I find it easiest to match the header name to the JIRA field name.
>
> **[3:09](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=189)** The columns can be in any order.
>
> **[3:12](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=192)** I usually order them to match the order on the create screen.
>
> **[3:15](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=195)** First, I like to specify the issue type.
>
> **[3:18](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=198)** If you don't provide this column, the default value for the project will be used.
>
> **[3:23](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=203)** I don't have a column to specify the JIRA project though, why?
>
> **[3:27](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=207)** Well, the answer is that I want all these issues to go into the same project.
>
> **[3:31](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=211)** The importer will ask for the JIRA projects name.
>
> **[3:34](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=214)** So there's no need to supply it in the file.
>
> **[3:37](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=217)** If you're importing issues into multiple projects, however, you'll need to include it.
>
> **[3:42](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=222)** Next, summary is a required field in JIRA so make sure you have a summary column and one value per record.
>
> **[3:49](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=229)** User fields like assignee and reporter are treated specially.
>
> **[3:53](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=233)** In cloud, specify user with their email address and server and data center use their username.
>
> **[4:00](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=240)** You can also have the importer create new accounts.
>
> **[4:03](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=243)** Any new accounts created will be active not inactive.
>
> **[4:07](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=247)** But don't attempt to specify passwords.
>
> **[4:09](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=249)** Users will create new passwords when they first log in.
>
> **[4:13](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=253)** If you have a user count limit and you hit it, the import process will stop.
>
> **[4:18](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=258)** User type fields and date fields are the ones I usually mess up.
>
> **[4:22](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=262)** Be sure to check on these specifically after your sample record import.
>
> **[4:26](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=266)** I don't have any special formatting in my description example, but if you do, you can use double quotes to handle it.
>
> **[4:33](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=273)** Use double quote marks to capture data that spans multiple lines, handle special characters, including commas or handle carriage returns.
>
> **[4:42](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=282)** The ability to set the status is one of the advanced features not available to regular users.
>
> **[4:48](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=288)** That's why I like to use the importer in the admin area.
>
> **[4:51](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=291)** You can specify any status that currently exists and the associated workflow.
>
> **[4:56](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=296)** If no status is specified, it will use the first status in the workflow.
>
> **[5:00](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=300)** Finally, let's talk about date fields.
>
> **[5:03](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=303)** I always seem to mess these up on the first shot.
>
> **[5:06](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=306)** You can format your dates however you want, but don't forget to specify the format in the import wizard.
>
> **[5:11](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=311)** In this example, I'm using day, month, year, but no hours, minutes, or seconds.
>
> **[5:17](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=317)** I'll need to account for the lack of time during the import, I'll show you where to do it in a minute.
>
> **[5:23](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=323)** Once you have the CSV file format correctly, it's time to import just a few records as a test.
>
> **[5:29](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=329)** Click on the CSV option on the external system import page to launch the wizard, then upload the CSV file from your computer.
>
> **[5:39](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=339)** Expand the advanced section if you need to change the encoding, or if you used a delimiter other than a comma, then click the Form Submission button at the bottom of the page.
>
> **[5:48](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=348)** Next, select the proper options for your use case.
>
> **[5:51](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=351)** In this example, I'm importing issues into the same project and I didn't specify a project in the CSV file.
>
> **[5:57](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=357)** So I'll select the project here.
>
> **[5:59](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=359)** Also in the date format field, I've changed the format.
>
> **[6:03](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=363)** I've removed the reference to hours, minutes, and seconds that's there by default.
>
> **[6:07](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=367)** You can see the default in the example copy under the field.
>
> **[6:11](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=371)** Make sure the format and the wizard matches what's in the CSV file.
>
> **[6:14](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=374)** On the next page, map the headers in the CSV file to their JIRA equivalence.
>
> **[6:20](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=380)** Since I named the CSV headers the same as the JIRA fields, it's easy to do.
>
> **[6:25](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=385)** For the assignee CSV field on the left, select the assignee JIRA field on the right.
>
> **[6:31](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=391)** If there's a field you don't want to import, you can select don't map this field in the JIRA field column.
>
> **[6:37](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=397)** JIRA will simply disregard the data.
>
> **[6:40](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=400)** My preference is to remove any data I don't want from the CSV file, but it's nice that JIRA can handle it.
>
> **[6:46](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=406)** Also on this page is a checkbox labeled Map Field Value, I use this when there are more field selections in the CSV file than in JIRA.
>
> **[6:55](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=415)** Here's an example.
>
> **[6:56](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=416)** Let's say you have a field called risk.
>
> **[6:58](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=418)** In the CSV file there are five potential values, but in JIRA, there are only four.
>
> **[7:04](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=424)** In this case, you need to decide what to do with the extra value in trivial in the CSV file.
>
> **[7:09](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=429)** You can remove the value, add a new value to JIRA or map the value to an existing value.
>
> **[7:16](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=436)** For this example, I'll map trivial to low.
>
> **[7:19](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=439)** I find it easier to do these transformations in Excel, but you're able to do them with the JIRA importer tool.
>
> **[7:26](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=446)** Mapping the fields was the last step if or when it's planned, you'll see a success message like in this example.
>
> **[7:33](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=453)** I find the message a little misleading, I didn't import a project, I impacted one project by importing two issues.
>
> **[7:40](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=460)** From here, I recommend downloading the log and checking the test issues to make sure they were created as desired.
>
> **[7:48](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=468)** I also recommend exporting all the settings you previously selected so you can use them to import any remaining issues.
>
> **[7:55](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=475)** Download the config file in text format and start the importer again.
>
> **[7:59](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=479)** At the point where the CSV file is selected, click the checkbox shown to also upload the configuration file.
>
> **[8:06](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=486)** This will save a lot of time and lower the chance of human error.
>
> **[8:10](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=490)** Here's what happens when things go wrong.
>
> **[8:13](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=493)** In this example, there are errors and warnings.
>
> **[8:16](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=496)** The error stop the import, and as the message shows, no issues were imported.
>
> **[8:22](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=502)** As you can see, there's a problem with the status field.
>
> **[8:25](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=505)** I specified to do in the CSV file, but the associated workflow uses open instead.
>
> **[8:31](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=511)** I either need to update the CSV or use the field mapping feature of the import wizard.
>
> **[8:37](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=517)** The warnings are caused by the date format in the CSV not matching the date format in the importer.
>
> **[8:43](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=523)** As you remember, the default is the date plus hours, minutes, and seconds.
>
> **[8:47](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=527)** Here's what happens when you supply a different format than specified in the import wizard.
>
> **[8:53](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=533)** Finally, here's an example don't want to have.
>
> **[8:56](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=536)** I missed a comma or two in the CSV file and here's the yucky result.
>
> **[9:01](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=541)** Instead of two new issues, I have four.
>
> **[9:03](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=543)** The first issue is of type change instead of task.
>
> **[9:07](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=547)** The summary of the first issue is the intended description for the second issue.
>
> **[9:12](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=552)** And the status is are all messed up too.
>
> **[9:15](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=555)** Good thing I tested my CSV file with two issues instead of 2,000.
>
> **[9:20](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=560)** There's one more tip I want to share and it's about sub tasks.
>
> **[9:23](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=563)** You can create a parent-child relationship in the CSV file by including the headers Issue ID, Parent ID and Issue Type.
>
> **[9:31](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=571)** In the example task called build a house, I've given the row in Issue ID of 3308 and left the Parent ID field blank.
>
> **[9:39](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=579)** 3308 is any random number.
>
> **[9:42](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=582)** It's not the issue key that will be assigned by JIRA.
>
> **[9:45](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=585)** JIRA will only use this information for the import.
>
> **[9:48](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=588)** Then for each sub task, I've left the Issue ID field blank and added 3308 to the Parent ID field.
>
> **[9:56](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=596)** This associates the poor concrete foundation and frame exterior wall sub tasks with the parent build a house task.
>
> **[10:04](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=604)** You can see the result in JIRA on the right.
>
> **[10:07](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=607)** Here are some best practices.
>
> **[10:09](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=609)** If you have data to map, I recommend doing the transformation work in Excel and then saving the file in CSV format.
>
> **[10:16](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=616)** It's much easier to make changes in a flat file.
>
> **[10:19](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=619)** The values in the CSV file need to match the format JIRA is expecting.
>
> **[10:24](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=624)** This is especially important if you're importing issues into multiple projects.
>
> **[10:28](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=628)** Make sure you understand project settings and handle any configuration differences.
>
> **[10:33](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=633)** Don't forget to specify values for any required fields.
>
> **[10:37](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=637)** Even if a field isn't required by the importer, a workflow or other setting could depend on a value.
>
> **[10:44](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=644)** Sometimes you don't want to import data.
>
> **[10:47](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=647)** Sometimes it's best to leave fields blank and let project specific rules, automations, or user set the values.
>
> **[10:54](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=654)** It all depends on the project configuration.
>
> **[10:56](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=656)** Always back up your data, use this test environment and only import a few records at first.
>
> **[11:02](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=662)** Finally, leverage Atlassian documentation for additional tips and ways to handle certain types of data.
>
> **[11:09](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=669)** Here are some things to avoid.
>
> **[11:11](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=671)** If you're importing brand new issues, don't specify an issue key, let JIRA auto number the issues.
>
> **[11:17](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=677)** The only time Issue ID should be in an import file is to update existing issues.
>
> **[11:22](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=682)** Also don't specify passwords.
>
> **[11:25](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=685)** Let JIRA handle this in a secure way.
>
> **[11:27](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=687)** Watch out for spelling mistakes, especially for status names, dropdown selections, and any field where a certain format is expected.

> [!info]- Semantic Content
>
> **Env Vars:** jira (35), csv (27)
> **Tools:** jira (35)
> **Code Keywords:** let (6), finally, (4), import, (3), function (2), type. (2)
> **CLI Commands:** make (7), find (4)
> **UI Navigation:** select the (3), checkbox (2), open the (1), click on (1), dropdown (1)
> **Definitions:** is a  (4)
> **Best Practices:** don't forget (2), it's best to (1)
> **Prerequisites:** you'll need (1), make sure you have (1)

#### Create issues from email
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=0)** - [Instructor] Another way to get issues into Jira is to create them from email.
>
> **[0:04](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=4)** Sometimes organizations use this feature as an alternative to the create form or to create requests tracked in other applications.
>
> **[0:11](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=11)** For example, another application can send an email to Jira to trigger issue creation.
>
> **[0:17](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=17)** Some benefits of this method are: The email subject automatically becomes the issue summary and the email body becomes the description.
>
> **[0:26](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=26)** Any attachments in the message are automatically attached to the Jira issue.
>
> **[0:31](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=31)** And if subsequent messages are sent, the email body is added to the Jira issue as a comment.
>
> **[0:37](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=37)** The requirements for using this feature are: A connected mail server, a POP or IMAP email address, and Jira application administrator access.
>
> **[0:47](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=47)** Here's how it works.
>
> **[0:49](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=49)** When a message is received, Jira scans the subject line looking for an issue key.
>
> **[0:54](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=54)** If an issue key is found, Jira adds the body of the message to the existing issue as a comment.
>
> **[0:59](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=59)** If an issue key isn't found in the subject, Jira also checks the in reply-to message header.
>
> **[1:05](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=65)** If an issue's key is found in the header, Jira adds the body of the message to the existing issue as a comment.
>
> **[1:12](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=72)** If no issue key is found in either place, Jira creates a new issue.
>
> **[1:17](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=77)** Here's an example: In the sample message on the left, I've specified the email address for my Jira Cloud application in the To field.
>
> **[1:25](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=85)** In the subject field, I've specified an existing Jira issue.
>
> **[1:29](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=89)** On the right, you can see that the body of the email message was added as a comment to the issue.
>
> **[1:35](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=95)** This functionality is managed from the incoming mail page in the system admin section.
>
> **[1:41](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=101)** Here's an example from Jira Cloud.
>
> **[1:43](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=103)** At the top of the page is the connection to the mail server.
>
> **[1:46](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=106)** In Cloud, this is automatically configured for you using Atlassian's mail server.
>
> **[1:51](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=111)** In Cloud, Jira's admin address is in the format jira@applicationname.[atlassian.net](https://atlassian.net).
>
> **[1:58](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=118)** In Server and Data Center, create an email address for Jira to use.
>
> **[2:02](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=122)** Most companies use an address like jira@[domain.com](https://domain.com).
>
> **[2:06](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=126)** Then connect your own mail server by clicking the button shown.
>
> **[2:09](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=129)** If you're creating your own email address for Jira, collect the following details: Mailbox details, like the email address, username and password; The desired mail protocol, like POP or IMAP; And mail server details, like the address and port number.
>
> **[2:26](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=146)** Also make sure the mailbox is configured to accept external traffic.
>
> **[2:31](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=151)** At the bottom of the incoming mail page are one or more handlers that specify what Jira should do with messages.
>
> **[2:38](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=158)** In Jira Cloud, the first mail handler is automatically configured for you.
>
> **[2:43](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=163)** In the screenshot, I've configured second handler specifically for messages in the demo project.
>
> **[2:49](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=169)** Click the button shown to create more mail handlers in any type of Jira.
>
> **[2:54](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=174)** Here are the factors to consider when determining whether to use this feature: First, this feature is simplistic.
>
> **[3:01](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=181)** You cannot customize it, populate custom fields, fill required fields, or set an assignee.
>
> **[3:07](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=187)** If the create screen has required fields, the user is prompted to fill them in Jira on the first edit action.
>
> **[3:14](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=194)** It's a quick way to get data into Jira, but not a substitute for the feature-rich issue create form.
>
> **[3:20](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=200)** As I mentioned before, the email subject line becomes the issue summary and the entire body becomes the description.
>
> **[3:27](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=207)** Files attached to the email are automatically attached to the issue.
>
> **[3:32](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=212)** Special characters in the attachment file names are changed to underscores.
>
> **[3:36](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=216)** If an issue key is found in the email, the message is added as a comment to the existing issue.
>
> **[3:43](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=223)** If the email's marked urgent or high priority, the Jira issue is created with a higher priority than a default.
>
> **[3:49](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=229)** That's all this feature can do.
>
> **[3:52](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=232)** You'll want to create filters on your mail server to handle auto replies, spam, and large files, or many attachments before that information hits Jira.
>
> **[4:01](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=241)** I don't consider this feature a replacement for the normal issue creation method, but I included it because some organizations find it useful.
>
> **[4:10](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=250)** Here are some additional things to know: This function only supports current Jira users.
>
> **[4:15](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=255)** You could however leverage a dummy email address and a dummy Jira user.
>
> **[4:20](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=260)** Otherwise, issues will not be created when emailed by an unlicensed Jira user, a user outside the company, or a user who sends from an email address different than their Jira profile address.
>
> **[4:32](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=272)** For example, if the address is user@domain1 in Jira and the user sends from user@domain2, no issue will be created.
>
> **[4:41](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=281)** One quick note.: Jira Service Management has its own separate mail handler set up.
>
> **[4:46](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=286)** It uses a built-in processor that doesn't require the sender to be a licensed user.
>
> **[4:51](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=291)** This is so you can communicate with external customers.
>
> **[4:54](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=294)** A single mail handler can only create issues in one Jira project and for one issue type.
>
> **[5:00](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=300)** If you want issues created in multiple projects using multiple issue types, you'll need to create multiple incoming mail handlers.
>
> **[5:07](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=307)** Finally, issue creation via email often silently fails.
>
> **[5:12](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=312)** There are many reasons for a failure.
>
> **[5:15](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=315)** Some are: When the message doesn't have a subject or the sender is a non-Jira user; If the mailbox is locked or it's password has expired; If settings were changed on the mail server, but not in Jira or if the mail server can't connect to Jira.
>
> **[5:31](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=331)** Sometimes other applications intercept messages and take them out of the mailbox before Jira does.
>
> **[5:37](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=337)** And finally, issue creation silently fails when the project's lead, default assignee, or default reporter are inactive users.
>
> **[5:46](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=346)** Unless you're actively monitoring the logs, you're unlikely to notice message creation failure.
>
> **[5:52](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=352)** Set the expectation with your users that the mailbox's owner needs to monitor the box and report any Jira issue creation discrepancies.

> [!info]- Semantic Content
>
> **Tools:** jira (37)
> **Code Keywords:** finally, (2), default. (1), function (1), require (1), type. (1)
> **Env Vars:** pop (2), imap (2)
> **CLI Commands:** make (1), find (1)
> **URLs:** [atlassian.net](https://atlassian.net) (1), [domain.com](https://domain.com) (1)
> **Analogies:** for example (2)
> **Prerequisites:** set up (1), you'll need (1)
> **Definitions:** is a  (1)

#### Use an issue collector
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=0)** - [Narrator] Another way to get issues into Jira is to use the issue collector feature.
>
> **[0:04](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=4)** Instead of sending an email message, users can fill out a smaller version of a create form that's embedded on your website or in another application.
>
> **[0:13](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=13)** The benefits of this method is better control of the data submitted from external sources.
>
> **[0:18](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=18)** With this method, users complete form fields so the date is structured and better for reporting.
>
> **[0:24](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=24)** The form can handle custom and required fields.
>
> **[0:27](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=27)** This method also has additional capabilities, like collecting feedback from non-Jira users.
>
> **[0:33](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=33)** The requirements for using this feature are application or project level admin access, and the ability to embed an HTML or JavaScript snippet into another website or application.
>
> **[0:46](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=46)** Here's an example of an issue collector embedded on a webpage.
>
> **[0:50](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=50)** The issue collector code creates a button for the user to click.
>
> **[0:54](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=54)** The button's label, placement, and style is customizable.
>
> **[0:58](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=58)** Clicking the button opens an overlay with a Jira create form.
>
> **[1:01](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=61)** When the user submits the form, they see a confirmation message and an issue is created in Jira.
>
> **[1:08](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=68)** To create an issue collector, go to the admin area of any project and click the issue collector's link in the left sidebar, then click the add button.
>
> **[1:19](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=79)** Let's talk about all the issue collector options.
>
> **[1:22](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=82)** First, specify all the internal settings.
>
> **[1:25](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=85)** Give the collector a name and an optional description to identify it inside of Jira.
>
> **[1:30](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=90)** This information is displayed to Jira admins, not to web form users.
>
> **[1:34](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=94)** Then, select the type of issue to create.
>
> **[1:38](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=98)** Next, specify all reporter type settings.
>
> **[1:41](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=101)** Select a Jira user as the default reporter.
>
> **[1:44](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=104)** Sometimes organizations specify a dummy or service account.
>
> **[1:48](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=108)** Regardless of who is selected, make sure the user has the create issues permission in the project.
>
> **[1:53](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=113)** If the web form users are also Jira users, change the radio button setting to match submitter.
>
> **[2:01](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=121)** Jira will populate the submitter as the reporter if the email address entered matches a Jira user email address.
>
> **[2:08](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=128)** Finally, select the collect browser info checkbox if system details are helpful for your use case.
>
> **[2:14](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=134)** These additional details are useful for bug reports or website feedback.
>
> **[2:20](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=140)** The next settings are for the trigger button that opens the web form.
>
> **[2:24](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=144)** Enter a custom name and select a style option.
>
> **[2:27](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=147)** If you select the custom option, you can use JavaScript to customize trigger behavior.
>
> **[2:33](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=153)** The final settings are for the web form.
>
> **[2:36](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=156)** The first template is for general website feedback.
>
> **[2:39](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=159)** And the second is for reporting bugs.
>
> **[2:41](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=161)** For the templates, the only thing you can customize is the message displayed to the user.
>
> **[2:46](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=166)** Here's a tip: you can use Jira Wiki markup to format this message.
>
> **[2:50](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=170)** The third template labeled "Custom" is more like a Jira issue create screen.
>
> **[2:56](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=176)** You can customize the message and select a few Jira fields to include.
>
> **[3:00](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=180)** Once you've made all the desired selections, click the form submission button at the bottom of the page.
>
> **[3:06](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=186)** On the next page is the code snippet to embed in your webpage or application.
>
> **[3:11](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=191)** Choose between HTML or JavaScript using the tabs pictured.
>
> **[3:15](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=195)** The code includes the URL of the Jira application and a unique number for the issue collector.
>
> **[3:21](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=201)** The great thing about the snippet is that once you embed it, you don't have to touch it again.
>
> **[3:26](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=206)** You can change issue collector settings in Jira without changing the snippet.
>
> **[3:30](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=210)** Let's go back to the issue collector page on the project admin area.
>
> **[3:35](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=215)** This project has two different issue collectors for two different purposes.
>
> **[3:39](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=219)** Click the link in the name column to see statistics and collector details.
>
> **[3:44](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=224)** Hover over the activity column to see account of issues created or click the edit button to change settings.
>
> **[3:51](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=231)** Application administrators can also see collectors across all projects in the system admin area.
>
> **[3:58](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=238)** Here are the factors to consider for this feature: you can have none, one, or many issue collectors per Jira project.
>
> **[4:06](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=246)** They aren't created by default, but you can have as many as you want.
>
> **[4:10](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=250)** You can also embed multiple collectors in the single webpage using custom triggers.
>
> **[4:15](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=255)** The web forms are easy to embed, trigger, and complete.
>
> **[4:19](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=259)** If collector settings change in Jira, you won't have to change the embed code.
>
> **[4:23](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=263)** There is some browser caching though, so be aware of that if you're trying to test collector setting changes.
>
> **[4:29](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=269)** Finally, there are three collector templates to choose from.
>
> **[4:32](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=272)** Try them all and see which best supports your use case.
>
> **[4:36](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=276)** If you're having trouble, here are some things to check.
>
> **[4:39](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=279)** Submit the web form as an end user to see if there are any onscreen errors.
>
> **[4:43](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=283)** Also check the issue collector page for errors.
>
> **[4:47](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=287)** A common error starts out with a copy: "Oops, something went wrong."
>
> **[4:51](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=291)** This is usually caused by a missing required field, a permission issue, or app incompatibility.
>
> **[4:57](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=297)** Next, verify that default reporter selected has the create issues permission.
>
> **[5:03](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=303)** If you have server or data center, check the application logs for additional error details.
>
> **[5:09](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=309)** Finally, when all else fails, I recreate the collector and re-embed the snippet.

> [!info]- Semantic Content
>
> **Tools:** jira (17)
> **Code Keywords:** finally, (3), let (2), case. (2), include. (1), default, (1)
> **UI Navigation:** select the (3), go to (1), checkbox (1)
> **Env Vars:** html (2), url (1)
> **Exercise Files:** template (2)
> **Warnings:** be aware (1), common error (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)

#### Use automation
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=0)** - [Instructor] In this section, we'll talk about using automation to improve data quality, and to make your life easier.
>
> **[0:06](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=6)** You probably use automation every day without thinking about it.
>
> **[0:09](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=9)** Today, we have self-driving vehicles, cameras at the front door to alert us when a package has arrived, and robots that do everything, from build ships, to vacuum our floors.
>
> **[0:18](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=18)** All those tasks used to be manual, but through the power of technology, they're automated.
>
> **[0:24](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=24)** Automation means making a process or a system operate automatically.
>
> **[0:29](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=29)** JIRA admins are busy people.
>
> **[0:30](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=30)** What if there was a way to eliminate the more mundane tasks so you can focus on projects that are more interesting, and deliver more value?
>
> **[0:38](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=38)** What if you could use technology to accomplish things faster?
>
> **[0:42](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=42)** That's the role of automation in JIRA.
>
> **[0:44](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=44)** You can create roles to automate JIRA actions based on criteria you set.
>
> **[0:49](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=49)** Automation helps complete work faster, and makes it easier.
>
> **[0:52](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=52)** Instead of sending an email when there's an outage, let JIRA send the email, alert the team in their chatroom, and communicate with the monitoring software.
>
> **[1:01](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=61)** We can use automation to reduce manual work, and eliminate tasks we do over and over.
>
> **[1:06](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=66)** For example, when all stories are complete, automatically close the epic.
>
> **[1:11](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=71)** Or, when it's time to do regression testing, automatically create all the test cases and kick off the tests.
>
> **[1:18](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=78)** Finally, software can help improve data quality and reduce human error.
>
> **[1:23](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=83)** For example, automatically sum up expenses and report them to the finance team each week.
>
> **[1:29](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=89)** Think of a JIRA task you don't love to do.
>
> **[1:32](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=92)** There might be a way to automate it.
>
> **[1:34](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=94)** Think of something your users frequently forget to do.
>
> **[1:37](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=97)** There might be a way to automate that too.
>
> **[1:40](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=100)** Let's discuss ways to automate work, and the different JIRA deployment methods.
>
> **[1:45](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=105)** In Cloud, JIRA software has built-in automation, or you can use a variety of marketplace apps.
>
> **[1:51](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=111)** In JIRA Service Management, there are also some legacy capabilities that will one day be de-commissioned.
>
> **[1:57](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=117)** At that time, Atlassian will automatically migrate any rules from the legacy version to the new version for you.
>
> **[2:04](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=124)** In Server and Data Center, JIRA software doesn't come with automation, but you can add it with an app.
>
> **[2:10](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=130)** JIRA Service Management does have some built in automation features, however.
>
> **[2:14](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=134)** We'll cover those in another course for JSM administration.
>
> **[2:18](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=138)** Let's talk a little more about the built in automation in JIRA Software Cloud.
>
> **[2:23](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=143)** As previously discussed, there are multiple cloud plans.
>
> **[2:26](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=146)** There's no limit to the number of rules you can create, but there are limits on rule scope and execution.
>
> **[2:32](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=152)** In the Free and Standard plans, rules are limited to a single project.
>
> **[2:37](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=157)** That means you'll need to create the same rule multiple times to use it in multiple projects.
>
> **[2:42](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=162)** An execution is how many times a rule runs per month.
>
> **[2:46](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=166)** The limits are as shown.
>
> **[2:48](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=168)** In the Premium plan, the limit is per user and per month.
>
> **[2:52](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=172)** Let's say you have 100 users.
>
> **[2:54](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=174)** 100 times 1,000 is 100,000 executions per month.
>
> **[2:59](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=179)** Here's an example of the built in no code automation in JIRA Software Cloud.
>
> **[3:04](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=184)** Both project and application admins can create these rules.
>
> **[3:08](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=188)** This rule automatically closes duplicate issues.
>
> **[3:11](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=191)** On the left are the if-then statements.
>
> **[3:14](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=194)** In the example, when an issue is linked as a dupe and the status is not done, the issue automatically transitions to done.
>
> **[3:22](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=202)** On the right are the rule details.
>
> **[3:24](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=204)** Name the rule, give it an optional description, and make any other desired selections.
>
> **[3:29](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=209)** Here is the result.
>
> **[3:31](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=211)** I linked Demo 60 to Demo 59 as a dupe.
>
> **[3:34](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=214)** After, the automation stepped in and automatically changed the status of Demo 60 to Done.
>
> **[3:41](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=221)** No user intervention required, awesome.
>
> **[3:45](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=225)** To manage automations, go to the Admin area of any project, and click the Automation link in the left sidebar.
>
> **[3:51](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=231)** Use the tabs at the top to access the rule list, the audit log, and the library of pre-written examples.
>
> **[3:58](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=238)** I have a lot of old issues in my application, how about you?
>
> **[4:02](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=242)** We can use a JQL statement to find them, and create an automation to automatically close them.
>
> **[4:07](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=247)** To create a new rule, click the button on the right.
>
> **[4:11](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=251)** The first step is to select a trigger.
>
> **[4:14](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=254)** Triggers listen for events and start rule execution.
>
> **[4:17](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=257)** Triggers can detect when a field or status value changes, an issue is created, assigned or closed, a link or a comment is added, an SLA is reached, a build succeeds or fails, or a JQL query returns issues.
>
> **[4:33](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=273)** Filter the trigger options using the drop-down menu, or search for a specific one by name.
>
> **[4:39](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=279)** In this example, I'll use the Schedule trigger.
>
> **[4:41](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=281)** Next, select the desired trigger settings.
>
> **[4:44](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=284)** You can schedule the trigger on a fixed frequency, or you can use a cron job.
>
> **[4:49](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=289)** At the bottom of the screenshot, I've entered a JQL query to find the relevant issues.
>
> **[4:54](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=294)** Anytime you enter JQL, click the Validate Query link to make sure the query is correct and returns the expected issues.
>
> **[5:02](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=302)** Once all the options are set as desired, click the Form Submission button to save the trigger.
>
> **[5:07](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=307)** After we've configured the trigger, we can add actions or conditions.
>
> **[5:11](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=311)** Actions are used to perform tasks, like creating, assigning, or editing issues.
>
> **[5:16](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=316)** There are also actions to create versions, send emails, or notify chat rooms.
>
> **[5:21](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=321)** Conditions can further refine rules.
>
> **[5:24](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=324)** A condition must be met for the rule to continue running.
>
> **[5:27](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=327)** For example, does a field or user match certain criteria?
>
> **[5:32](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=332)** There are lots of possibilities to choose from.
>
> **[5:34](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=334)** Let's add an action to our example rule.
>
> **[5:37](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=337)** I'll choose the Transition Issue action.
>
> **[5:40](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=340)** Then, I'll select the desired status, and click the Form Submission button.
>
> **[5:45](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=345)** Let's add one more action.
>
> **[5:48](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=348)** I'll use the Comment on Issue action to add a comment to all issues I'm closing.
>
> **[5:53](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=353)** Then, click the Form Submission button.
>
> **[5:55](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=355)** The final step is to name the automation and enable it.
>
> **[5:59](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=359)** That's it.
>
> **[6:00](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=360)** From here, you can run the rule, return to the rule list, or disable the rule.
>
> **[6:05](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=365)** We used a simple example, but it's easy to make complex and powerful rules too.
>
> **[6:10](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=370)** In addition to all the triggers, conditions, and actions, you can also use variables called smart values to access and manipulate JIRA issue data.
>
> **[6:19](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=379)** I think you'll find building automation rules both fun and useful.
>
> **[6:23](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=383)** Let's go back to the Automation page in the JIRA Project Admin area.
>
> **[6:28](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=388)** The rule we created is listed.
>
> **[6:30](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=390)** Click on the rules name to edit it and access additional settings.
>
> **[6:34](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=394)** On the left of the Rule Details page, click any trigger, action, or condition to modify them.
>
> **[6:40](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=400)** On the right, you can edit additional details.
>
> **[6:43](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=403)** At the bottom of the page are some useful settings.
>
> **[6:47](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=407)** You can email the owner if a rule fails, change the owner, and set the actor.
>
> **[6:52](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=412)** The actor is the user the action is attributed to.
>
> **[6:55](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=415)** I'd like to use the default shown, so the issue history shows that an action was performed by the automation user, and not by me personally.
>
> **[7:03](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=423)** If you're using an app for automation, I recommend creating a service account for this purpose.
>
> **[7:09](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=429)** Application administrators can also see rules across all projects in the System Admin area.
>
> **[7:14](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=434)** This view contains a handy Usage link so you can see how close you are to the execution limit.
>
> **[7:20](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=440)** Sometimes, rules have errors or don't operate how we expect.
>
> **[7:23](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=443)** Luckily, there are many ways to spot errors.
>
> **[7:26](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=446)** First, there's an icon in the rule list.
>
> **[7:29](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=449)** In this screenshot, the example rule has a problem to troubleshoot.
>
> **[7:33](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=453)** Errors are also shown in the audit log.
>
> **[7:36](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=456)** Click the link on the right for additional details.
>
> **[7:39](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=459)** Finally, if enabled, the rule's owner will receive an email notification.
>
> **[7:44](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=464)** So, can you guess the cause of the error?
>
> **[7:46](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=466)** I broke the cardinal sin of workflows.
>
> **[7:49](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=469)** I closed an issue without setting a resolution.
>
> **[7:52](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=472)** Luckily, this is easy to fix.
>
> **[7:54](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=474)** I can edit the transition action to include a resolution, or I can add an Edit Issue action, and set it that way, if desired.
>
> **[8:02](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=482)** There's a great website to try out automations without impacting your JIRA application.
>
> **[8:06](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=486)** It's called the Automation Playground.
>
> **[8:09](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=489)** It's a great way to see new ideas, and see what your colleagues are building.
>
> **[8:12](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=492)** Visit the Sandbox website at the URL shown.
>
> **[8:16](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=496)** If you're not using JIRA Cloud built-in automation, there are lots of automation apps in the Atlassian Marketplace.
>
> **[8:23](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=503)** Some apps provide specific automations, like creating new issues on transition, or calculating fields.
>
> **[8:30](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=510)** Some provide rules for workflows, issue events, or scheduled events.
>
> **[8:34](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=514)** Some apps have point and click rules, scripting capabilities, or both.
>
> **[8:39](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=519)** Search for automation or workflow in the Atlassian Marketplace to see the options.

> [!info]- Semantic Content
>
> **Env Vars:** jira (16), jql (4), jsm (1), sla (1), url (1)
> **Tools:** jira (16)
> **Code Keywords:** let (7), finally, (2), self (1), continue (1), from. (1)
> **CLI Commands:** make (4), find (3)
> **UI Navigation:** select the (2), go to (1), click on (1)
> **Analogies:** for example (3)
> **Cross-References:** go back to (1)
> **Warnings:** troubleshoot (1)

#### Challenge: Create an issue collector
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-an-issue-collector?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-an-issue-collector?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-an-issue-collector?u=76281980&t=5)** - [Instructor] In this challenge, you'll create an issue collector to embed in a webpage or application.
>
> **[0:10](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-an-issue-collector?u=76281980&t=10)** First, choose a Jira project, configure the collector in the project admin area and embed the collector as desired.
>
> **[0:18](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-an-issue-collector?u=76281980&t=18)** You can choose any collector settings or template you like.

> [!info]- Semantic Content
>
> **Tools:** jira (1)
> **Exercise Files:** template (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Create an issue collector
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-an-issue-collector?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-an-issue-collector?u=76281980&t=0)** - [Instructor] Were you able to create an issue collector?
>
> **[0:08](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-an-issue-collector?u=76281980&t=8)** Here's how to do it.
>
> **[0:09](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-an-issue-collector?u=76281980&t=9)** First, visit the issue collector's page in the project admin section.
>
> **[0:14](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-an-issue-collector?u=76281980&t=14)** Then click the button at the top right.
>
> **[0:17](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-an-issue-collector?u=76281980&t=17)** Next, add a name and an optional description.
>
> **[0:21](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-an-issue-collector?u=76281980&t=21)** I'll select a reporter and then review the remaining selections.
>
> **[0:26](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-an-issue-collector?u=76281980&t=26)** I'll keep the default settings and click the form submission button.
>
> **[0:31](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-an-issue-collector?u=76281980&t=31)** Next, copy of the HTML or JavaScript and embedded as desired.
>
> **[0:36](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-an-issue-collector?u=76281980&t=36)** Then complete the web form to test the issue collector.
>
> **[0:39](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-an-issue-collector?u=76281980&t=39)** Also make sure the issue was successfully created in Jira.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Env Vars:** html (1)
> **Tools:** jira (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 10. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=0)** - [Narrator] Congrats on completing the course.
>
> **[0:02](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=2)** You've explored the major areas of the Jira configuration and helped create a strong foundation that will serve you well for years to come.
>
> **[0:09](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=9)** You should now be able to configure the most important global and project settings, create, modify and remove schemes, create custom elements like fields, workflows and events, use groups and roles to grant and restrict application, project and issue access, extend Jira using apps, connections and integrations, and use advanced features like create via email, the issue collector and automation.
>
> **[0:36](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=36)** Your next step is to continue learning.
>
> **[0:39](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=39)** There's always more to learn and new Jira features are added all the time.
>
> **[0:43](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=43)** There are a ton of resources available.
>
> **[0:45](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=45)** You just have to know where to look, seek them out and put in a little time and effort.
>
> **[0:50](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=50)** My "9 Ways to Learn Jira Administration" article will point you in the right direction.
>
> **[0:56](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=56)** As you've probably heard, Atlassian stopped selling new licenses of server products in February of 2021 and support for server products ends on February 2nd, 2024.
>
> **[1:07](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=67)** So what should you do if you have Jira server?
>
> **[1:10](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=70)** Customers will need to switch to Data Center, migrate to Atlassian hosted cloud products or make alternate plans.
>
> **[1:17](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=77)** That's why I teamed up with Atlassian's solution partner, Botron Atlassian Apps, to create The Ultimate Guide to Jira Migrations, How to migrate from Jira Server to Data Center or Cloud.
>
> **[1:28](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=88)** Download your free 180 page migration merge and consolidation guide from the URL shown.
>
> **[1:34](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=94)** I also worked with Atlassian to create a Cloud Migration Runbook, sample communication templates and a cloud specific checklist.
>
> **[1:42](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=102)** Download these resources at the URL shown.
>
> **[1:46](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=106)** Here are some additional resources so you can continue learning.
>
> **[1:50](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=110)** Atlassian's product documentation contains a guide specifically for administrators.
>
> **[1:55](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=115)** All the information is categorized by application type and version.
>
> **[1:59](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=119)** Make sure you're reading the right information.
>
> **[2:01](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=121)** Next, visit support.[atlassian.com](https://atlassian.com) for vendor help or to report a bug.
>
> **[2:06](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=126)** In Server and Data Center, you can also visit the troubleshooting and support tools admin page to create a support zip to send to Atlassian.
>
> **[2:14](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=134)** The support zip feature exports logs and configuration info to help the vendor troubleshoot problems.
>
> **[2:20](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=140)** The Atlassian online community is where you'll find answers, support and inspiration from other users.
>
> **[2:26](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=146)** Log in with your Atlassian ID at community.[atlassian.com](https://atlassian.com).
>
> **[2:31](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=151)** You can ask a question or start a discussion.
>
> **[2:34](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=154)** There are also plenty of Jira themed groups on LinkedIn and Facebook.
>
> **[2:39](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=159)** Next, studying for Atlassian Certification is a great way to learn more about Jira.
>
> **[2:44](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=164)** The test is challenging, but the certification experience made me a better admin.
>
> **[2:49](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=169)** Don't be discouraged if you need to take the exam more than once.
>
> **[2:53](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=173)** The final resource is the JIRA Strategy Admin Workbook.
>
> **[2:56](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=176)** It saves time, money and frustration.
>
> **[2:59](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=179)** This book is different.
>
> **[3:00](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=180)** It's not documentation.
>
> **[3:02](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=182)** It's recommendations from years of cleaning up horrible Jira configurations.
>
> **[3:06](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=186)** It's about what you should do, shouldn't do and why.
>
> **[3:10](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=190)** Get the book and additional materials at [jirastrategy.com](https://jirastrategy.com).
>
> **[3:14](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=194)** I hope you enjoyed this advanced Jira administration course, as much as I enjoyed creating it.
>
> **[3:20](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=200)** Now it's time to get your course completion certificate.
>
> **[3:23](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=203)** When you share your certificate, tag me so I can celebrate your accomplishment and share it with my network too.
>
> **[3:29](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=209)** If you have Jira questions, I'd love to hear from you.
>
> **[3:32](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=212)** Use the Q&A feature, email me directly or connect in social media.
>
> **[3:37](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=217)** Good luck with your Jira journey and I'll see you online.

> [!info]- Semantic Content
>
> **Tools:** jira (14)
> **CLI Commands:** make (2), find (1)
> **Code Keywords:** continue (2), switch (1)
> **URLs:** [atlassian.com](https://atlassian.com) (2), [jirastrategy.com](https://jirastrategy.com) (1)
> **Env Vars:** url (2), jira (1)
> **UI Navigation:** switch to (1)
> **Definitions:** is a  (1)
> **Warnings:** troubleshoot (1)


## Instructor

- [[Rachel Wright]]

## Resources

- Exercise files available

## Skills Covered

- Project Tracking
- Jira

## Path Context

### In [[Mastering Jira Administration]]
← [[Jira Service Management- Administration]] | **4 of 7** | [[Jira- Managing Custom Workflows]] →

## Appears In

- [[Mastering Jira Administration]]

## Related Courses

_Courses sharing skills:_

- [[Jira Administration- Automation]] — Jira
- [[Jira- Managing Custom Workflows]] — Jira
- [[Jira Service Management- Administration]] — Jira
- [[Jira- Basic Administration]] — Jira
- [[Increasing Efficiency with Jira and Confluence Integrations]] — Jira

---

[↑ Back to top](#)