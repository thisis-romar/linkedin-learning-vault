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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Jira-%20Advanced%20Administration.md)

![Jira: Advanced Administration](https://media.licdn.com/dms/image/v2/C560DAQG4hiUwA-TKbw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1624639848574?e=2147483647&amp;v=beta&amp;t=kdWs3FufHaFWaeODJxtP6D2FvSi4k1iectblGpnzX0M)

# Jira: Advanced Administration

> Jira is the industry standard for tracking work, tasks, and strategic company initiatives. The software is extremely flexible and customizable, which is both a blessing and a curse. Jira administrators need to be able to configure application settings to support the needs of the organization, which requires an intimate understanding of the capabilities, global options, and scheme configurations in

> [LinkedIn Learning](https://www.linkedin.com/learning/jira-advanced-administration) | 3h 22m | Advanced | 15K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Administration in Jira](#administration-in-jira)
  - [Who is this for?](#who-is-this-for)
  - [What do you need?](#what-do-you-need)
- [**1. Configuration Options**](#1-configuration-options) (6 videos)
  - [Global configuration overview](#global-configuration-overview)
  - [Using global permissions](#using-global-permissions)
  - [Customizing the interface](#customizing-the-interface)
  - [Enabling and disabling email](#enabling-and-disabling-email)
  - [Challenge: General configuration options](#challenge-general-configuration-options)
  - [Solution: General configuration options](#solution-general-configuration-options)
- [**2. Using Schemes**](#2-using-schemes) (5 videos)
  - [Types of schemes](#types-of-schemes)
  - [Scheme hierarchy](#scheme-hierarchy)
  - [Sharing schemes between projects](#sharing-schemes-between-projects)
  - [Challenge: Scheme review](#challenge-scheme-review)
  - [Solution: Scheme review](#solution-scheme-review)
- [**3. Creating Custom Schemes**](#3-creating-custom-schemes) (6 videos)
  - [Use and create custom issue types](#use-and-create-custom-issue-types)
  - [Use and create custom workflows](#use-and-create-custom-workflows)
  - [Use and create custom screens](#use-and-create-custom-screens)
  - [Use and create custom fields](#use-and-create-custom-fields)
  - [Challenge: Create a project template](#challenge-create-a-project-template)
  - [Solution: Create a project template](#solution-create-a-project-template)
- [**4. Managing Project Settings**](#4-managing-project-settings) (5 videos)
  - [Use and create versions](#use-and-create-versions)
  - [Use and create components](#use-and-create-components)
  - [Working with users](#working-with-users)
  - [Challenge: Create components](#challenge-create-components)
  - [Solution: Create components](#solution-create-components)
- [**5. Working with Groups and Roles**](#5-working-with-groups-and-roles) (5 videos)
  - [Leveraging project roles](#leveraging-project-roles)
  - [Working with groups](#working-with-groups)
  - [Using groups and roles in schemes](#using-groups-and-roles-in-schemes)
  - [Challenge: Create a read-only role](#challenge-create-a-read-only-role)
  - [Solution: Create a read-only role](#solution-create-a-read-only-role)
- [**6. Restricting and Sharing Information**](#6-restricting-and-sharing-information) (5 videos)
  - [Use and create permissions](#use-and-create-permissions)
  - [Use and create issue security](#use-and-create-issue-security)
  - [Use and create notifications](#use-and-create-notifications)
  - [Challenge: Create read-only permissions](#challenge-create-read-only-permissions)
  - [Solution: Create read-only permissions](#solution-create-read-only-permissions)
- [**7. Extending Jira**](#7-extending-jira) (5 videos)
  - [Use and vet apps](#use-and-vet-apps)
  - [Create connections](#create-connections)
  - [Create integrations](#create-integrations)
  - [Challenge: Connect Jira to Confluence](#challenge-connect-jira-to-confluence)
  - [Solution: Connect Jira to Confluence](#solution-connect-jira-to-confluence)
- [**8. Advanced Features**](#8-advanced-features) (6 videos)
  - [Import data](#import-data)
  - [Create issues from email](#create-issues-from-email)
  - [Use an issue collector](#use-an-issue-collector)
  - [Use automation](#use-automation)
  - [Challenge: Create an issue collector](#challenge-create-an-issue-collector)
  - [Solution: Create an issue collector](#solution-create-an-issue-collector)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Administration in Jira](https://www.linkedin.com/learning/jira-advanced-administration/administration-in-jira?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/administration-in-jira?u=76281980&t=0)** - [Rachel] [[Jira]] is the industry standard for tracking work, tasks, and strategic company initiatives. The software is infinitely flexible and customizable. Jira administrators need to carefully select application settings and build smart configurations Hi, I'm Rachel Wright, certified Jira administrator and author of the Jira Strategy Admin Workbook. I've used Jira since 2011 and I've made all the configuration mistakes already. So you don't have to. In this course, you'll learn the most important configuration options like general settings and global permissions. How schemes work together to power to your projects. How to create custom projects, issue types, workflows, screens, and custom fields. How to manage project specific settings like components and versions. How to use groups and roles for easy [[User Management]]. How to restrict access and share information with permissions. Issue your security and notification schemes. Ways to extend Jira with apps, connections, and integrations. And advanced features like importing data, creating issues from email, adding custom events and automation. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (6), [[User Management]] (1)
> **Tools:** jira (6)
> **Speakers:** - [rachel] (1)

#### [Who is this for?](https://www.linkedin.com/learning/jira-advanced-administration/who-is-this-for?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/who-is-this-for?u=76281980&t=0)** - In this course, we'll focus on the configuration areas you use most, my goal is not just for you to understand the settings, but to be able to make smart decisions when creating or changing them. Knowing the best way to solve a problem and how it will impact your application in the future is the difference between a good administrator and a great one. For each section, I've included the most important things to know, best practices and my personal tips. So you can avoid all the mistakes I've made over the years. Don't miss the challenges, quizzes, downloadable handouts, and some personal experiences, scattered throughout the course. This course helps [[Jira]] administrators better understand the settings and schemes they are configuring. The information applies to Jira software and Jira core application types. Although we won't cover managing Jira service desk feature specifically, the information in this course also applies to Jira service management, which was formerly named Jira service desk. Whether you have Jira Cloud, server or data center, the admin concepts in this course are the same. Just be aware that there are slight feature, terminology, and user interface differences between the deployment types. Don't worry if your screen looks different than mine, you might have different colors, a different layout, and customization specific to your company. I think a really good administrator is somebody who listens to what the team needs before they start making changes in Jira. And it's really easy to go in and start changing configurations and making new schemes and customizing everything. Jira is so customizable,
>
> **[1:33](https://www.linkedin.com/learning/jira-advanced-administration/who-is-this-for?u=76281980&t=93)** but really what you should do first, before you point and click in Jira, is sit down, have a conversation with your users and really understand what they're trying to achieve before you build something new. If you're brand new to Jira, take my basic Jira administration course first. The basic course covers how Jira is used. The differences between application types and deployment types, navigating the admin area, the different types of admin users, and the top skills a new admin needs, like adding users, creating Jira projects, creating workflows, troubleshooting permission problems, and troubleshooting missing notifications. The advanced course will reference information from the basic course. So take it first, the goal of the basic course is to get you started quickly. In the advanced course however, we'll cover more settings in more detail, so you can expand and compliment your existing knowledge. Also sometimes Jira administrators are new to end user concepts as well. If you're an infrequent Jira user, or just want to learn more about what your end users experience, take my learning Jira courses as well. There's a version for Cloud and another version for server and data center.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (17)
> **Tools:** jira (17)
> **CLI Commands:** make (1)
> **Warnings:** be aware (1)
> **Speakers:** - in (1)

#### [What do you need?](https://www.linkedin.com/learning/jira-advanced-administration/what-do-you-need?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/what-do-you-need?u=76281980&t=0)** - Ideally, you've been managing [[Jira]] for a while and have experience creating projects, configuring existing schemes, and creating new custom schemes when necessary. All you need for this course is admin access to a Jira application. It's also helpful to have a test environment so you can manage changes without impacting production. The test environment options are detailed in section three of my Jira basic administration course, I recommend you have as many test environments as you can maintain. You definitely want at least one production copy so you can test your changes before you unleash them on your users. It's also nice to have a development environment that doesn't impact anyone at all where you can try new code, try new things, and try migrations, customizations, and bulk changes. One more thing before we get started, [[Atlassian]] has changed terminology over the years, and some new terms were recently introduced. The terms apps and Jira Service Management have been around for awhile, but Jira Work Management is newer. Also new is the name for projects in Jira Cloud. They were first called traditional then classic, and now they are named company-managed. Then there's another cloud only type, which was once called independent, then next-gen and now named team-managed. Some of the documentation and even some of the Jira configuration still reference previous terminology. So I'll continue to call next-gen projects next-gen throughout this course. If you hear the phrase team-managed project, now you know it's simply the new name for next-gen.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (7), [[Atlassian]] (1)
> **Tools:** jira (7)
> **Documentation:** the documentation (1)
> **Speakers:** - ideally (1)


### 1. Configuration Options

[↑ Back to Table of Contents](#table-of-contents)

#### [Global configuration overview](https://www.linkedin.com/learning/jira-advanced-administration/global-configuration-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/global-configuration-overview?u=76281980&t=0)** - [Instructor] To access the application admin menu, click the cog or gear icon at the top right. The menu contains all your admin abilities, grouped in sections, the sections and section names in the menu differ a little between deployment types. For example, this cloud screenshot shows billing and [[Microsoft Products|products]] options that you won't see in server and data center. As an administrator, I find myself visiting the issues and [[User Management]] pages the most often. Sometimes I forget which feature is in which admin section. Here's a tip to help you find the setting you're looking for. First type gg on any [[Jira]] page to open the administration search box, then type the first few letters of your search to show suggestions. For example, typing workflow will suggest three pages with workflow in the name. Finally, click the page name to go directly to the correct admin section. When you're in the admin area, you can also click the search Jira admin button to find what you're looking for. The button is on the top left of the server screenshot. In Cloud it's on the top right. Navigating between the different admin areas and functions is simple. In server or data center, use the horizontal links at the top of the page and the links in the left sidebar. Here's an example of the issues page, where you manage issue types, workflows, screens, and other settings that impact issues. Here's an example of the same issues page in Cloud. Use the cog or gear icon at the top right
>
> **[1:33](https://www.linkedin.com/learning/jira-advanced-administration/global-configuration-overview?u=76281980&t=93)** to go to the relevant admin area. Then use the vertical links in the left sidebar. In the next sections, I want to specifically talk about setting global permissions, changing the applications look and feel, and turning on mail service. All of these settings are found in the system admin area. While we don't have time to cover every available setting, I recommend you review them all and make sure they represent what you're trying to achieve at your organization. For example, check your public sharing setting and make sure it's off, unless you're really trying to share [[Dashboards]] and filters with non logged in users.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (2), [[Microsoft Products|Products]] (1), [[User Management]] (1), [[Dashboards]] (1)
> **CLI Commands:** find (3), make (2)
> **UI Navigation:** in the menu (1), open the (1), go to (1)
> **Analogies:** for example (3)
> **Tools:** jira (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Using global permissions](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=0)** - In the basic administration course, we discussed how global permissions differ between cloud, server and data center. Here's a refresher and some additional details. While the naming differs a little between the deployment types and versions, their meaning is the same. The [[Jira]] system administrators permission is only available in server and data center. Users or groups with this permission can perform every Jira function. This includes many settings that you want to be careful about changing, as they can impact functionality and performance. For example, Jira system administrators can configure listeners, services, change the index path and schedule various jobs. Limit this permission to only those who really need it and understand what they are doing. I recommend selecting two users so there's a backup if one's out of the [[Microsoft Office|office]]. The next permission is called administer Jira in cloud or Jira administrators in server. It gives users or groups the ability to perform most admin functions. Give this permission to a small group of users who maintain the entire application. I recommend selecting two to five users. For server and data center users, [[Atlassian]] has a comprehensive list of the differences between these two admin permissions. See the documentation at the URL shown. So when a lot of companies, they go overboard with admin access. And I don't care if you have a thousand users or 10,000 users, I recommend two to five admins. One admin is not enough,
>
> **[1:32](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=92)** what happens if your admin is sick or out. And five, after that, it gets really hard to coordinate your changes and track what you're doing in the application. The browse users and groups or browse user's permission is for user picker fields and sharing functions. You must have this permission to select from the list of users in the application. Think about the social engineering implications of the setting. If you have external users like contractors or customers, you may want to limit this permission to avoid exposing employee names. The share [[Dashboards]] and filters or create shared objects permission allows users to share their filters, boards, and dashboards with other users, groups, and project roles. For example, a team lead needs this permission to share their dashboard with team members. It's generally good to allow users to share objects otherwise everyone creates their own, needing multiple copies of similar views. I recommend giving this permission to the general users group, encouraging sharing and teaching users to search for existing objects before creating new ones. The manage group filter settings permission allows users to create and delete subscriptions. A subscription is an emailed report of all issues returned by a filter. You can use these to alert users to new issues or specific issues, needing attention. Some organizations love this ability and some hate it. It's great to be able to notify a group of people, but what if not everyone in the group appreciates another Jira email notification. I recommend limiting this permission or training users
>
> **[3:06](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=186)** on when it's okay to create groups subscriptions. The make bulk changes or bulk change permission allows users to edit, move, transition, or delete multiple issues at once. With this permission, users can manage a thousand issues at a time and projects they have access to. This is helpful for project managers, team leads, [[Scrum]] masters, and admins doing the cleanup. You may want to exclude this ability for external users however. In cloud there's the create next-gen projects permission, this allows regular users to create their own Jira projects. Next-gen projects are configured differently than classic projects, that only Jira admins can create. They are schemeless meaning they don't share settings with other projects. Here's an example of the configuration page for our next gen-project in cloud. As you can see, this is a lot different than a classic projects configuration. You can add new issue types and fields all from the same screen. There are many pros and cons to using this project type. We won't cover this project type extensively in this course, as honestly, it's still evolving, but you can read my opinion and see some of the differences at the URL shown. The default setting is to let any licensed user create next-gen projects. My recommendation is to limit the ability to your Jira admin team or a small group of power users. Finally, in data center, there's the browse archive permission. This allows users to browse archived issues by default, no users are granted this permission.
>
> **[4:41](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=281)** So, who's allowed to do what in your application? What are your global permission settings? Are there any adjustments you should make? Visit the URL shown to compare your settings to Jira's default. Local permissions applied to the entire application. So where do global permissions fit into the overall permission model? There are many levels of Jira permissions to be aware of and they all work together. At the very highest level is application access. If the user doesn't have application access, they can't log in and therefore no other permission at any level applies. Application access is granted in each user's profile. The general application access group is called Jira users, Jira software users, Jira core users or Jira service desk users, depending on which application type you have. The next level is global, which we previously discussed. This is where a user gets abilities to administer Jira, make bulk changes and share objects like filters, dashboards, and subscriptions. The next level is project. Project permissions are controlled in two places, in a permission scheme and in an individual project settings. All permission schemes can be accessed from the issues admin page. Project level permissions are in a project's left sidebar, but the name of the link differs depending on the deployment type and the type of project. If a user doesn't have project level access, it means the project won't appear in their list of projects. They will not be able to see that the project exists nor will they see individual issues in the project.
>
> **[6:16](https://www.linkedin.com/learning/jira-advanced-administration/using-global-permissions?u=76281980&t=376)** Next, there are issue permissions, workflow permissions, and permissions that are specific to an installed third-party app. Use an issue security scheme to limit access to only some issues in a Jira project. Use a workflow condition or validator to limit who can transition an issue. And use the specific settings and any third-party app to grant or limit capabilities as desired. When troubleshooting a user problem, start at the beginning. Let's say a user reports they can't see a specific Jira issue. First, verify the user can log in. Sometimes the user doesn't have application access and you'll need to add it. Other times it's purely user error. The user thinks they're logged in, but they aren't. This is more common in server and data center. Next, verify the user has all the needed project access and issue access. Keep working your way through all the permission areas until you find the culprit. We'll talk more about project level permissions and issue security later in the course. You can also use the permission helper feature, which I covered in the basic administration course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (18), [[Dashboards]] (3), [[Microsoft Office|Office]] (1), [[Atlassian]] (1), [[Scrum]] (1)
> **Tools:** jira (18)
> **CLI Commands:** make (3), find (1)
> **Definitions:** is called (2), is an  (1), is a  (1)
> **Env Vars:** url (3)
> **Cross-References:** we discussed (1), later in (1)
> **Analogies:** for example (2)
> **Warnings:** be careful (1), be aware (1)

#### [Customizing the interface](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=0)** - [Narrator] Some organizations like to customize [[Jira]]'s look and feel so it matches their branding. The settings are straightforward, but I included this section so I can share some customization tips and impacts. Here's an example of a customized cloud application. If you have Jira service management, you can also customize aspects of the customer portal. Access those settings within the specific service project. In Jira, you can customize the logo, the site title, the favicon, the colors, and the date and time format. Here's the look and feel customization page in cloud. If you customize the logo, pay attention to the suggested width and height. A large logo or square logo won't look nice in the space available in the navigation bar. If you're having trouble making your logo fit, try using a version that's just a graphic instead of a graphic with text. I recommend using an image with a transparent background. A favicon is an icon associated with a particular website. You often see a favicon in a browser tab as shown or in a bookmark. If you're customizing the favicon, there are a couple things to know that Jira doesn't immediately tell you. First, use a square image. I recommend 32 pixels by 32 pixels. And this is not a lot of space to work with. As you can see in the screenshot, I cut off a portion of my alligator image to fit the available space. Next, Jira cannot use an ICO file. Upload a PNG, JPEG, or GIF instead. I also recommend using a transparent file for this image.
>
> **[1:35](https://www.linkedin.com/learning/jira-advanced-administration/customizing-the-interface?u=76281980&t=95)** Finally, use a unique favicon image, especially if you use other [[Atlassian]] [[Microsoft Products|products]]. When multiple applications use the same icon, it's hard for users to distinguish between them. One last note about customization in general. Whether you're customizing Jira's look and feel or other Jira settings, you always need to ask yourself, is the benefit worth the cost? Every change has pros and cons. Ask yourself, does this change solve a business problem or does it get in the way? Does this change create more work for the application administrator? And how does this change impact the application now and in the future? As a practical example, let's consider the look and feel settings. Is changing the logo and colors valuable to users? I like to customize the application's look and feel when it's public facing or used to support external customers. These settings may be less useful to internal users, though. They already know where they work, so you don't need to market to them. Next, consider what impact the change has. One easy example is your documentation. If you change the highlight color, which changes the color of the create button, any documentation that says "click the blue create button" is no longer valid. Any screen shots taken before the customization may be incorrect or confuse users. As a Jira administrator, you need to weigh the pros and cons of every customization, no matter how small it seems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (8), [[Atlassian]] (1), [[Microsoft Products|Products]] (1)
> **Tools:** jira (8)
> **Env Vars:** ico (1), png (1), jpeg (1), gif (1)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)

#### [Enabling and disabling email](https://www.linkedin.com/learning/jira-advanced-administration/enabling-and-disabling-email?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/enabling-and-disabling-email?u=76281980&t=0)** - [Narrator] For cloud administrators, the mail server is already connected and configured for you. [[Atlassian]] hosts the mail server, so there's not much for you to do in this admin area. In cloud, email will be sent from an address in the format [[Jira]]@applicationname.[atlassian.net](https://atlassian.net). For server and data center administrators, you'll need to connect Jira to your mail server. Click the button shown to create the connection. Ask your email administrator for connection details like the host name, protocol, and port, then enter them here. Use the handy "test connection button" at the bottom of the form to make sure the connection succeeds. Once the mail server's connected, you'll probably never need to touch these settings again unless connection details change. You may also want to create a specific email address for Jira to send messages from. For example, some organizations use the format jira@[domain.com](https://domain.com). You might find yourself needing to temporarily or permanently disable outgoing mail. All deployment methods have a button for this at the top right. I usually disable outgoing mail when migrating or consolidating, performing large maintenance activities, or upgrading server or data center. I always disable mail in my test environment to avoid spamming users with fake or duplicate messages. Finally, some organizations turn off email permanently and instead rely on integrations with other software like [[Slack]], for example. To turn off email notifications from a specific Jira project however, make that change in a notification scheme instead.
>
> **[1:33](https://www.linkedin.com/learning/jira-advanced-administration/enabling-and-disabling-email?u=76281980&t=93)** We'll talk more about notification settings later in the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (5), [[Atlassian]] (2), [[Slack]] (1)
> **Tools:** jira (5), slack (1)
> **CLI Commands:** make (2), find (1)
> **URLs:** [atlassian.net](https://atlassian.net) (1), [domain.com](https://domain.com) (1)
> **Analogies:** for example (2)
> **Cross-References:** later in (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)

#### [Challenge: General configuration options](https://www.linkedin.com/learning/jira-advanced-administration/challenge-general-configuration-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/challenge-general-configuration-options?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/jira-advanced-administration/challenge-general-configuration-options?u=76281980&t=5)** - [Instructor] In this challenge, log in as an application administrator and explore each page in the administration area. Get to know which settings are in which area and bookmark the areas you access most. Next, review your current global permissions and make sure they're appropriate for your organization. Finally, review your other global settings and note any that need updates. I added a task to check my global settings to my scheduled maintenance list. Sometimes settings change accidentally, new settings are added or business needs change.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: General configuration options](https://www.linkedin.com/learning/jira-advanced-administration/solution-general-configuration-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/solution-general-configuration-options?u=76281980&t=0)** - [Instructor] Were you able to log in as an administrator and explore the current global settings? To access the global permissions page, click the cog or gear icon at the top right, then select system. And then the left sidebar click global permissions. I want to give the create next gen permission, only two administrators. Use the menu at the bottom of the page to select the permission and the group. Then click the form submission button. Next, remove the public setting if it's shown. You should review your global settings periodically as needs often change as organizations grow.

> [!info]- Semantic Content
>
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Using Schemes

[↑ Back to Table of Contents](#table-of-contents)

#### [Types of schemes](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=0)** - [Instructor] Let's quickly review some important terms and definitions from the basic admin course. An issue is an individual item in [[Jira]]. Each time you create an item, you're creating a new issue with a unique key to identify it. An issue is any individual record in the Jira database. It could represent a request, a problem, a task, a to-do item or development item, like a story, bug or epic. Sometimes end users call these a ticket, a request, a task or even a Jira. I always laugh at that last one. It's like saying you're going to send a [[Microsoft Outlook]] instead of an email. A project is a collection of issues. The [[Microsoft Word|word]] project in Jira is different than an initiative your team is working on outside of Jira. Think of a Jira project as a container for all your teams initiatives, tasks and to-do items. There's generally one project per department, team, system or application. For example, you might have a Jira project called legal to track all the different things the legal team works on. A scheme is a configuration or collection of settings. A scheme allows you to use settings differently in the same project or share settings between multiple projects. For example, a bug issue type may function differently than a task issue in the same project or the same issue type functionality may be shared between multiple projects. Schemes makes this possible. As a reminder, schemes only applied to classic projects in cloud, server and data center.
>
> **[1:35](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=95)** Next gen projects in cloud are schemeless. Each classic Jira project is powered by nine schemes. The easiest way to see which schemes a project uses is from the summary project admin page. The summary page shows a science schemes and project specific settings. Let's discuss the schemes. Issue types, workflows and screens are all powered by schemes. Jira is structured this way so schemes can be shared between projects. Fields, permissions and notifications are also powered by schemes. Components, versions and integrations with other tools don't use schemes however. These settings are project specific, meaning they are not shared between multiple projects. The same is true for users in a project. The list of people or groups is unique to the project. Now that you know which settings are powered by schemes and which aren't, let's explore each scheme type. The first scheme on the top left is for issue types. Use the issue type scheme to determine which issue types a user can create in a project. This example uses development issue types like epic, story and bug. I like to create one issue type scheme for dev type projects, one for support type projects and another for task type projects. For example, my task issue type scheme only contains epic, task and sub-task. The next scheme in the project admin area is for workflows. In this example,
>
> **[3:07](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=187)** the workflow scheme contains two different workflows. One workflow is used for stories and bugs and a different workflow is used for epics, tasks and sub-tasks. This is a very common strategy. Often stories and bugs have additional workflow steps like validation that aren't needed for other issue types. A workflow scheme can have one workflow, one workflow for each issue type or multiple shared workflows, like in this example. The next scheme in the project admin area is for screens. In this example, the project has one set of screens for stories, epics, tasks and sub-tasks and a different set of screens for bugs. It's also possible to specify a screen for when an issue is created, edited or viewed. We'll talk about that more in the next section. The final scheme at the bottom left of the project admin area is for fields. This scheme controls how fields behave. In the example, the components and description fields are optional. You can make them required when an issue is created using a field configuration. Now let's move to the right of a project summary page in the admin area. The first scheme area on the right is called permissions. The permission scheme determines who can perform certain actions in the project like assigning issues, managing sprints and adding comments. Also in the permissions area, is the security scheme for individual issues if one exists. Issue security schemes aren't automatically created. If you want one, you'll need to create it manually and associate it with the project.
>
> **[4:41](https://www.linkedin.com/learning/jira-advanced-administration/types-of-schemes?u=76281980&t=281)** The issue security scheme allows you to restrict access to issues individually. In this example, I've created two security levels. If an issue is limited to the administrator security level, only project admins and the project lead and application admins can view it. If an issue is limited to the leadership security level, only members of the leader's group can view it. The next scheme area is for notifications. This scheme controls which type of email messages are sent to which users. Jira can send notifications when issues are created, assigned, moved or when other standard actions occur. By default, the current assignee, reporter and all watchers are notified of most events.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (10), [[Microsoft Outlook]] (1), [[Microsoft Word|Word]] (1)
> **Tools:** jira (10)
> **Definitions:** is a  (3), is an  (1), is called (1)
> **Analogies:** for example (3), it's like (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Scheme hierarchy](https://www.linkedin.com/learning/jira-advanced-administration/scheme-hierarchy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/scheme-hierarchy?u=76281980&t=0)** - [Instructor] As you may have noticed in the previous section, there are some project settings that require multiple schemes. The hardest scheme relationship to understand is screens, so let's tackle that one now. First, each project has one issue type screen scheme. It's used to specify the entire issue type and screen relationship. Next, an issue type screen scheme contains one or more screen schemes. This allows a different set of screens per issue type. Finally, a screen scheme contains one or more individual screens. It allows different screens for the create, edit and view operations. Here's a practical example for a development project. The dev issue type screen scheme has one screen scheme for stories and a different screen scheme for bugs. The story screen scheme has one screen for the create operation, a different screen for editing issues, and a third screen for viewing issues. The bug screen scheme shares the same screen for all operations. In this example, the bug screen scheme is less complex because it requires one screen instead of three. Try to make project configurations as simple as possible. Only add additional complexity when there's a business need for it. When you create custom screens and schemes, there's an order to follow. Start at the lowest level by building any needed create, edit, or view screens. You can create one, two, or three, but again, less is recommended.
>
> **[1:34](https://www.linkedin.com/learning/jira-advanced-administration/scheme-hierarchy?u=76281980&t=94)** Next, create a screen scheme and associate it with the desired issue types and the screens you just created. If you require another screen scheme so a specific issue type has a different screen, create it now. Finally, create one issue type screen scheme and associate it with the screen schemes you just created. There's an order to removing custom schemes, too. You cannot remove schemes that are in use. In this example, the [[Scrum]] issue type screen scheme is associated with a demo project, so you can't delete it. The Kanban issue type screen scheme is associated with no projects, however, so a delete link is available. Here are the deletion requirements for each screen setting. To remove a screen, first, disassociate it with any screen schemes. You'll also need to remove it from any workflow transitions. To remove a screen scheme, first disassociate it with any issue type screen schemes. And finally, to remove an issue type screen scheme, disassociate it with any project using it. If this all sounds a little confusing, don't worry. This was the hardest part of [[Jira]] administration for me to understand. Use your test environment to experiment with these settings until they make more sense. Once you understand all the screen settings, the other scheme relationships will make more sense, too. Read my article at the URL shown for more information about screen schemes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scrum]] (1), [[Jira]] (1)
> **CLI Commands:** make (3)
> **Env Vars:** jira (1), url (1)
> **Tools:** jira (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Sharing schemes between projects](https://www.linkedin.com/learning/jira-advanced-administration/sharing-schemes-between-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/sharing-schemes-between-projects?u=76281980&t=0)** - [[Jira]] schemes exist so they can be shared between multiple projects. Instead of creating one scheme per project, I recommend one set of schemes per project type. Let's use issue types as an example. As I mentioned previously, I like to create one issue type scheme for dev type projects, one for support type projects, and another for task type projects. This way, there's a standard and each project type has a consistent set of issue types. Then, I make sure all the dev type projects use the dev issue type scheme. In this example, the dev and QA projects both use the scheme that contains epics, stories, bugs, tasks, and sub-tasks. It's really tempting to create new schemes, but when are they warranted? Before you create new schemes, make sure they're really needed to support a business case. For example, if you're creating a Jira project to collect requests from external users, that might require special settings or combinations. It's okay to create a few extra schemes for a special use case when needed, but don't automatically create new schemes for every Jira project. More settings mean more complexity and a bigger mess to manage in the future. In addition to sharing schemes, smart naming makes settings easier to find and use. First, establish and use a standard naming convention. Settings in the admin area are generally listed alphabetically so you should consider that in your naming structure. Next, name settings for the function they support or the problem they solve.
>
> **[1:35](https://www.linkedin.com/learning/jira-advanced-administration/sharing-schemes-between-projects?u=76281980&t=95)** Don't name settings for the project using them. For example, a workflow called development with [[Code Review]] is more descriptive and useful than dev project. Next, names should be descriptive but generic so they can be used for multiple use cases and projects. Finally, make scheme name short and easy to understand. Long names will lead you into what I call the Jira swamp. Here's why short names are better than long. Long and multiple [[Microsoft Word|word]] names make things harder to search and query for. For example, multi-word names require quotes in queries. Long names can take up too much room on a screen and may be truncated, making them hard to read and understand. Long names take longer to type and increase the possibility of query or spelling errors. Long names create longer URLs. And finally, long names also take up more room in the database. Here are some scheme naming don'ts. Don't name schemes with the word new, like new workflow, because it probably won't be new for long. Once something is no longer new, the naming convention is useless. Also, don't invent custom names for Jira settings. For example, if you're creating a workflow, name it workflow instead of lifecycle. Specialty names confuse future admins and make it harder to find applicable documentation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (5), [[Microsoft Word|Word]] (3), [[Code Review]] (1)
> **CLI Commands:** make (5), find (2)
> **Tools:** jira (5)
> **Analogies:** for example (4)
> **Speakers:** - jira (1)

#### [Challenge: Scheme review](https://www.linkedin.com/learning/jira-advanced-administration/challenge-scheme-review?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/challenge-scheme-review?u=76281980&t=0)** - [Instructor] In this challenge you'll look for a new schemes to remove and names to improve. We'll use the permission schemes area for this example. Start by logging in as an application administrator. Next, review your permission schemes, looking for any that are unused. Finally, look for schemes where you can improve the naming. Didn't find any schemes to clean up? Try the notification scheme area instead.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Scheme review](https://www.linkedin.com/learning/jira-advanced-administration/solution-scheme-review?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/solution-scheme-review?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/jira-advanced-administration/solution-scheme-review?u=76281980&t=5)** - [Instructor] Did you find any unused schemes to remove? In the screenshot example, the second scheme is used by no projects. It's not useful, so click the delete link to remove it. The third scheme was created by [[Jira]] when a service desk project was created. You can tell by how it's named. I'd rename that scheme to represent its purpose instead of the name of the project using it. Again, you want to share schemes between similar projects, not create one scheme per project. Once I've cleaned up these two schemes, there's nothing more to do on this admin page. It's time to move on to a different admin area and look for other schemes to remove or improve.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (1)
> **CLI Commands:** find (1)
> **Tools:** jira (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 3. Creating Custom Schemes

[↑ Back to Table of Contents](#table-of-contents)

#### [Use and create custom issue types](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=0)** - Let's take a deeper look at the common areas to customize, which are issue types, workflows, screens, and fields. At the end of the section, we'll use what we've learned to create templates, to use as a standard configuration. In this section, we'll define Issue Types, Issue Type Schemes, and discuss best practices for creating custom types. issue types provide structure in [[Jira]] projects. They help distinguish between requests like stories and tasks or incident and change requests. The issue types admin page shows all the issue types in the application. Whether they are standard or custom, and which schemes use them. In this screenshot, the first issue type is used to collect user questions. The Ask a question issue types is standard in Jira service management. The second is used to report a defect to fix. The bug issue type is standard in Jira software. Ideally you want the fewest amount of issue types in your Jira project. So I like to start people out with epic, task, and sub-task. And then when there's a business need for more, that's when you want to add more. And you also don't want to add issue types until there's a need for different workflows, different screens, or both within the same project. To create a custom issue types, click the button on the top right. All issue types contain the following attributes, a unique name to identify it, an optional description, a type which is either standard or sub-task, and an icon to help visually identify it.
>
> **[1:34](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=94)** Users see the icon when they create issues, in user objects like filters, boards and [[Dashboards]], and an email notifications. Users see the description when they hover over the icon. You can also translate the name and description into a different language if needed. Finally, an issue type may be part of an issue types scheme, which is used by one or more projects. Different issue types can have different behaviors. For example, a bug can have a different workflow and different screens than the story. Also in the issue types admin area are sub-tasks. I find the naming of standard issue type and sub-task issue types, a little confusing. I like to think of standard issue types as parents and sub-task issue types as children. For example, if the parent type is task, the child type is sub-task. But sub-tasks aren't limited to only being children of tasks. A sub-task can be a child of any other issue type. For example, it's common for development teams to break up the work required to complete a story into multiple sub-tasks. Additionally, just like you can create custom parent issue types, you can also create custom child issue types. One company I worked with created a child type called sub-bug and used it to distinguish those child issues from other child issues. What do you think? Is this a good use of a custom sub-task or is this overkill? I'll let you be the judge. To create a custom child issue type,
>
> **[3:08](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=188)** click the button on the top right. All sub-task contain the same attributes and benefits as issue types. It's also possible to disable sub-tasks application-wide. I don't recommend it though. Sub-tasks provide an inherent parent child relationship that helps organize information. The relationship is also queryable. In my experience, organizations always want to add more levels of hierarchy, not remove them. When you create a new parent or child issue type, it is automatically added to the default issue type scheme. If you want the issue type available in other issue type schemes, you'll need to add it manually, by clicking the Edit button. Here's the tip. You can't remove issues from the default issue type scheme, and you can't delete the default scheme either. It serves us fallback for any projects without a custom scheme. Since the default scheme contains all possible issue types, that list can be quite long. Also it might contain types that simply don't apply to a certain Jira project. Rather than assigning the default issue type scheme to a project, I'd like to create a custom scheme for the main use cases. For example, one scheme that contains all the issue types for Dev projects. A second scheme that contains only epic, task, and sub-task, for all the task type and business projects. And a third scheme that contains all the support issue types. Here are some best practices. Use the default issue types until there's a business need to create custom ones. If you create custom types, choose generic names
>
> **[4:43](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=283)** so they can be used by multiple projects and schemes. Use sub-tasks which help users break up large issues into manageable pieces. Order the issue types in the issue type scheme, alphabetically, or by frequency of use so users can find the right one quickly. Here's the tip. Each issue type scheme could have one issue type that shown first. For each scheme, ask yourself which issue type will be used most often. If you're not sure, leave this blank and set it later. For this example, I've assumed there will be a lot of bugs and I have made that the default. Here are some things to avoid. Don't create unneeded issue types. Issue types exist to allow different workflows and screens. If all issue types use the same settings, you might have more than you really need. Next don't create new types for each new project. I made the mistake in the beginning because I followed the mistakes of previous admins. Just like schemes, issue types are meant to be shared. Finally, don't create super specific or duplicate issue types. For example, for any type of development problem, use the standard bug issue type. Don't also create defect. Try to get teams to use the same terminology whenever possible. Further, don't create custom types like production bug and staging bug. Instead, create a custom field called environment to capture the location of the bug. When naming, try to group similar activities together. In the second example, one issue type called access
>
> **[6:16](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=376)** is better than three issue types, representing different kinds of access. Always think about how you want to report on the data. You can leverage custom fields, labels, and components to help differentiate between requests. Reporting needs should dictate the Jira implementation method not the other way around. Here's a mistake to avoid. How many different combinations of issue types could a company possibly need? One company had 134. Now this was not because they were actually needed, but because new types and schemes were created for every new project. At the same company, there were a few projects that use the default issue type scheme, which contains every available issue type. Reporters in that project were overwhelmed when creating a new issue. They had to wade through 134 available selections. The choices weren't even listed alphabetically. The project leads couldn't easily report on or segment the issue the teams were addressing. Instead, don't create too many issue types and don't assign the default scheme. The legal team wants to track their contracts and agreements in Jira. Because the contract process has a different workflow than their other work, and there are contracts specific custom fields, a new issue type is warranted. Let's create one for them. First, I'll go to the issue types admin page and click the button at the top right. Next, enter a name and a description and click the Form Submission button. Next, let's give the new issue type an icon
>
> **[7:52](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-issue-types?u=76281980&t=472)** so it's easy to visually identify. Then click the Form Submission button. Now we can add the issue type to the legal projects, issue type scheme.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (7), [[Dashboards]] (1)
> **Tools:** jira (7)
> **Analogies:** for example (5), just like (2)
> **CLI Commands:** find (2)
> **Prerequisites:** required to (1), you'll need (1)
> **UI Navigation:** go to (1)
> **Speakers:** - let (1)

#### [Use and create custom workflows](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-workflows?u=76281980)

#### [Use and create custom screens](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=0)** - [Narrator] In this section, we'll discuss the mandatory and optional screens needed by issue types, projects, and workflows. Screens define which fields are present and their display order. [[Jira]] lets you define the order of some fields, but not all. And field display capabilities differ between cloud and server and data center. For example, in Jira Cloud only there's a feature called "Issue Layout". Instead of different screens for different issue operations, there's one consistent screen and field order for the entire project. Click the link on the right to change the layout for the listed issue types. On this page, drag and drop fields to change their order and location on the page. To hide a field, drag it to the right column. Again, this issue layout feature is only available in Cloud. Another thing to know is both project admins and application admins can change field order. Okay, let's get back to screens. To create a screen, click the button on the top right. All screens contain the following attributes, a unique name to identify it, an optional description, a list of associated standard and custom fields, and optional tabs to group the fields. You can have different screens for different issue operations. For example, a create screen typically contains only the fields for information needed initially. Always make create screens as short as possible and don't ask questions the reporter can't answer. If an issue's reporter doesn't usually schedule work, omit fields like "fixed version" and "due date"
>
> **[1:34](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=94)** on the create screen. Show these fields on the edit and view screens instead. An edit or view screen often contains all the fields needed by the project. And, as we discussed in the previous section, a screen can also be used to collect information during a workflow transition. Screens leverage standard and custom fields to collect information. In the example, the first screen has a story point standard field. And the second screen has the steps to reproduce custom field. As we discussed in the scheme section, screen schemes associate screens with issue operations. In the example, there's one screen for all actions. A screen scheme can have one, two, or three screens, however. As you may recall, an issue type screen scheme associates screen schemes with different issue types. In the example, there's one screen scheme shared by the story and bug issue types. A project can have one screen scheme per issue type or fewer schemes. Alternately, you can have different screens for each issue type. For example, the bug screen scheme may contain a screen with fields like step to reproduce, and expected result. Here's a more complex, but common setup. In this example, the issue type screen scheme contains two screen schemes. The first screen scheme at the top is for the story issue type. It has one screen for all issue actions and contains three fields.
>
> **[3:07](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=187)** The second screen scheme at the bottom is for the bug issue type. It has two screens. The first screen at the top is for the create action and contains three fields. The second screen at the bottom is for the edit and view actions and contains four fields. Like everywhere else in Jira, fewer schemes are always easier to maintain. Only build what you really need and make sure it creates business value. Sometimes you think a field should display on a screen, but it doesn't. Luckily, there's a feature to help. It's the Field Helper and it uncovers why it field is invisible. Start creating a new issue to access the feature. Click the "Configure Fields" button on the top right and look for the "Where's my field?" link. This feature checks the project and issue type scope, the field configuration, and the screen to uncover configuration problems. In the screenshot, the custom field cost doesn't display because it's simply not on the needed screen. The helper shows which settings to modify and provides direct links. Here are some best practices. Start with a single screen for all issue operations. Create more when there are too many fields or when data needs to be entered in stages. If you have a separate create screen, limit the number of fields displayed. Too many can overwhelm the reporter. For the fields you can order, list them in the order a user is most likely to supply the information. For example, I display the priority field before a requested date custom field. Hopefully the order helps set realistic expectations. Use a consistent field order
>
> **[4:43](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=283)** between screens and projects. Users expect and appreciate the standard. Finally, if there are a lot of fields, use tabs to group them. Click the link shown to add a tab. In the example, I named the first default tab "Details" and created a second new tab called "Scheduling". Then I moved all the estimation and date type fields to the scheduling tab. Here are some things to avoid. Don't collect data you won't query or report on. Don't create more screens than you really need. Try to leverage existing screens before creating new ones. Finally, when screens are shared, don't add fields that don't apply to all projects. For example, let's say the HR and legal teams share screens. Then I add a custom field called "Benefit Level". Well, now the legal team sees a field that doesn't even apply to them and that's annoying. When a field has a narrow use, create a custom screen so you can apply it only to the appropriate projects. Let's say there are a lot of bugs and the leadership team wants to better understand their cause and impact. You added the root cause and impact fields to the bug screens to collect this information. That's a good first step, but before a bug is closed, you should make sure those fields are completed. Let's create a transition screen to use in the bug workflow. First, I'll go to the screen's admin page and find the default resolve issue screen. The existing screen contains fields we need, like "Resolution" and "Fixed version".
>
> **[6:16](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-screens?u=76281980&t=376)** So let's copy it to give us a starting point. Next, enter a new name and a description and click the form submission button. Now we'll click the configure link to add additional fields. Use the drop down menu to select the impact field and root cause fields. Now we can use this screen in the bug workflow. You can also add workflow validators to require field completion during the transition.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (3)
> **Analogies:** for example (5)
> **CLI Commands:** make (3), find (1)
> **Tools:** jira (3)
> **UI Navigation:** drag and drop (1), go to (1), select the (1)
> **Prerequisites:** configure (2), setup (1)
> **Cross-References:** we discussed (2)
> **Speakers:** - [narrator] (1)

#### [Use and create custom fields](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=0)** - [Presenter] How many custom fields do you have? For most of us, the answer is too many. In cloud, the count is displayed at the top of the page. In server or data center, 25 fields show on each paginated page. Scroll down to the bottom of the page and multiply the number of pages by 25 for an approximate count. Two, your software comes with approximately 30 custom fields and that doubles if you installed [[Jira]] Service Management. Additional fields are also added by third-party apps and Jira administrators. If you're not careful, it's easy to end up with a large list. When a new custom field is warranted, create one by clicking the button on the top right. All custom fields contain the following attributes. A unique name per field type, an optional description, a type like text, number, select list or check box, optional translation features and an association with screens. Different field types also have different settings, properties or options. For example, a select list field contains one or more options. A text field can be single or multi-line and some fields can have default values. Some fields are configurable and some are locked, meaning you can't edit or remove them. The screenshot shows three locked fields. The account field was created by an app. The effected services and approvals field were created by Jira service management. You can add locked fields to screens but you can't modify their settings. There are many custom field types to choose from and additional types are available with free or paid apps from the [[Atlassian]] marketplace.
>
> **[1:35](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=95)** Let's discuss the most common ones. If a user can choose one or more selections, use a checkbox field type. There are two correct answers to this question. So, check boxes are the best use. If a user can choose only one selection, use a radio button field type. These two fields are often confused or used incorrectly in Jira and on the web. Make sure you use the proper type based on how many options the user should select. The radio button type, you'll notice has an none option. None is automatically present when the field is optional. If none is selected, it means the field is empty or no. You can query for this condition. Using the JQL, field name is empty. Don't add custom selections called none because of it's selected, the field is no longer empty. There's also an other selection. Have you ever tried to complete a form but the selection you need isn't listed? That's frustrating. I always include an other choice in case the user can't answer the question for whatever reason. The next set of fields are selection lists. The screenshot shows a single select list but you can also create a multi-select field. Just like in the previous example, there's a non-selection which represents null or empty. In addition to single or multi-select list, there's also a cascading selection type. Here's what the field looks like on a create screen. The field has two drop-down menus. The options in the second menu are determined by the selection in the first menu.
>
> **[3:09](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=189)** This field works well for grouping work by two levels like category and subcategory. Sometimes this field is useful and other times, two separate fields are more useful. It all depends on whether one selection must be dependent on another and your reporting needs. Here's another view of the same cascading field. This is how it looks when you edit it in cloud. The first selection is on the top and the second selection is on the bottom. The JQL for this field type is a little daunting. Here's the format to use and an example in cloud. Use us to query the standard field called operational categorization in Jira service management. Next, let's discuss text field types. They're single line and multi-line. Choosing between the two depends on desired character length. For 255 characters or less, to single line. For longer paragraph type responses, choose multi-line. Another useful field type is the single or multiple user picker on the left. This is useful when the list of people are Jira users. If the people are not Jira users, use a text field instead. They're also date or date time picker field types like on the right. I usually create a custom date field called requested date and put it on the create screen. That way, the reporter can request whatever date they want and the due date field is used to reflect reality. If you need a timestamp, use the date time picker field instead. I typically use this field type for change requests
>
> **[4:43](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=283)** or in legal projects where the exact time's important. Finally, there are two other fields that I use often. The first is the URL type and it creates clickable text. The type isn't good for multiple URLs however. For multiple URLs, use a multi-line text field instead. One more thing to know, don't use this field to link to records in either Atlassian or connected applications. Use the built-in linking functions instead. One company use the custom field to link Jira issues to [[Confluence]] pages instead of the built-in function. When they migrated and their confluence URL changed, all their links broke and they had to manually update them in the database. Not fun. The last issue type I wanted to mention is the number type. This field accepts any numeric, floating point or integer. In the example, I've used this field to collect dollars and cents. A common use of this field type is to use a workflow transition or automation to require approval or perform certain actions when a cost is above a threshold like a hundred dollars. There's one more thing I want you to know about custom fields. They each have two contexts. The first context is where the field is used. To best explain this, I'll call it a field scope. When you create a new custom field, you should always set a scope. A scope defines which projects and issue types of field applies to. If a field is likely to be used by multiple projects and tissue types, a global scope may be appropriate. But if field has a limited use case,
>
> **[6:18](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=378)** limited scope for good application indexing and performance. In this example, the cost custom field is limited to the purchase request custom type which is represented by the green dollar sign icon. The field is also limited to the IT service desk project. If this field is needed by other issue types or projects in the future, simply click the edit configuration link to change the settings. To set or edit a field scope in cloud, go to the custom fields admin page, click the ellipsis and select context and default value. In server or data center, click the ellipsis and select configure instead. The second type of context represents how a custom field is used. A common example is one custom field that shows different selection values in different projects. In this example, I created a custom select field called swamp animals and added the options alligators, crayfish, shrimp, snakes, and tadpoles. Next, I clicked the add new context link and created a context called swamp reptiles. Here are the two contexts or uses for the same custom field. The swamp reptiles context on the right contains the options alligators, snakes, and turtles. The context is also limited in scope to the demo project. This configuration means when I use the swamp animals custom field in the demo project, it will display only three options. If I use this field in any other project, it will display five options. The options can be different
>
> **[7:51](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=471)** and the field description can be different as well. Here's the tip. Another way to change a fields description is to use a field configuration. We discussed field configurations briefly in a previous section. Using a context is a great way to avoid creating duplicate custom fields. You can't use a context to change a fields name or label however. Here are some best practices. Always choose the best custom field type for the use case. Once a type of selected, you cannot change it. Try to limit the number of custom fields in your application. Too many are hard to maintain and could impact performance. If a custom field isn't used by all projects or issue types, limited scope and finally use of field configuration or context for different custom field descriptions or values, here are some things to avoid. Don't create more than one field with the same name. For example, don't create a text field called owner and a picker field also called owner. Jira allows it, but it makes it hard for users to query the correct field. Don't create fields with different tenses or singular and plural formats. For example, don't create a field called approve and another field called approved. Again, make fields easy to query in use. Pick a field naming convention and stick to it. Finally, avoid special characters. Jira allows them but it makes queries error prone and ugly. We previously created a custom issue type so the legal team could track their contracts
>
> **[9:24](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=564)** and agreements. Now they need a custom field to record contract expiration dates. Let's create one for them. First, I'll go to the custom fields admin page and click the button at the top right. Next, I'll select the date picker type field and click the form submission button. Next, give the new custom field a unique name and add a description if desired. Then click the form submission button. Now we can add the custom field to the legal project screens or do it later. Did you notice that I named the field generically? I chose the name expiration instead of contract expiration so other teams with other types of expiration dates could also use this field. I also emitted the [[Microsoft Word|word]] date from the fields name as the date format is visually obvious. Finally, I omitted a field description because I thought the fields name and type were self-explanatory. I don't think the copy when this ones expire adds lot of value. No matter what I'm creating in Jira, I always try to build generically for simplicity and with the future of the application in mind. Here's an advanced use case I built for myself. I wanted to track my travel costs in Jira so I could estimate my mileage expenses. I wanted to enter the number of travel miles and automatically calculate the mileage fee. This was easy to do using a third party app called JSU Automation Suite for Jira workflows. I added a calculated field post function to a workflow transition and used a simple math formula. The formula is miles divided by 10 miles per gallon
>
> **[11:00](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-custom-fields?u=76281980&t=660)** times $3 per gallon. Hopefully you get better gas mileage than I do. The formula result is automatically added to the mileage fee custom number field. I'm terrible at math, so I'm glad Jira can do it for me.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (14), [[Atlassian]] (2), [[Confluence]] (2), [[Microsoft Word|Word]] (1)
> **Tools:** jira (14), confluence (2)
> **Env Vars:** jql (2), url (2), jsu (1)
> **UI Navigation:** go to (2), scroll down (1), checkbox (1), select the (1)
> **Analogies:** for example (3), just like (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Cross-References:** we discussed (1)

#### [Challenge: Create a project template](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-a-project-template?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-a-project-template?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-a-project-template?u=76281980&t=5)** - [Instructor] As I mentioned previously, I like to create one issue type scheme for dev type projects, one for support type projects and another for task type projects. This way, there's a standard and each project type has a consistent set of issue types. In this challenge, you'll create your own set of schemes to use as a standard for new projects. Create the listed schemes for a software team, a business team, a support team, or any other use case at your organization.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Create a project template](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-a-project-template?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-a-project-template?u=76281980&t=0)** - [Instructor] Were you able to create new schemes to use as a standard for future [[Jira]] projects? Here's how I do it. I'll show the use case for a task type or business type project that teams like HR, legal, and marketing can use. I'll build the schemes in Cloud, but the process is the same in server and data center. First create an issue type scheme. Then add the desired issue types. I'll add epic, task, and sub task and set task as the default. Next, create a workflow scheme, then add the simple three-step workflow we created earlier in the course. Finally, let's create some configuration elements, create a screen and add the appropriate fields. Then create a screen scheme and associate the screen just created. Finally create an issue type screen scheme, and associate the screen scheme just created. Next time you create a new project, associate these standard schemes and remove any that Jira automatically created.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (2)
> **Tools:** jira (2)
> **Cross-References:** earlier in (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Managing Project Settings

[↑ Back to Table of Contents](#table-of-contents)

#### [Use and create versions](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=0)** - [Instructor] In previous sections, we discuss global schemes and settings. Global schemes are designed to be shared by multiple projects. Now let's talk about settings that are project specific and not shared, like versions, components and users. For everything in this section, the settings, or any projects admin area, click the Project Settings option to get there. Development type projects often require versions and releases. Software teams use versions to track code changes, but other teams can use them too. A version is a grouping of issues by date or time period. You can also see them referred to as fixed versions or releases. To create a version, click the button on the top right. All versions contain the following attributes. A unique name to identify it, an optional description, a start date and a release date, and a state, like unreleased, released or archived. Versions work a little differently than other selection custom fields, there's a lot of logic running in the background. For example, versions are used to power the version report in the reports area. Unlike other custom fields, there's a hard-coded permission implication. To select a version, a user needs the "Resolve Issues" permission in a projects permission scheme. Both project and application administrators can create and manage versions. Finally, an issue can be associated with multiple versions. Teams without traditional releases
>
> **[1:32](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=92)** can use the versions field in alternate ways. You can use versions to group issues by week, month, quarter or by any imaginable category. For example, if less technical users have trouble querying for issues within a date range, you could create a version for each quarter, but, before you do this, consider whether this categorization is helpful or if you're just duplicating the standard due date functionality. Here are some best practices. Match first in naming to conventions used in other systems. For example, if the release is named 1.1.0 in another application, don't name it 1.1 in [[Jira]]. While 1.1.0 and 1.1 may mean the exact same thing, format differences make them hard to search for. Next, use consistent formatting within a project and across the organization. Decide on the naming convention and stick with it. Users should easily be able to predict the next version number. Tom Preston-Werner inventor of Gravatar, and co-founder of [[GitHub]], created the semantic versioning specification. This is a recommendation for naming versions in the format, major.minor.patch. Review his recommendation at the URL shown. Finally, be sure to maintain the versions. For example, when a release date passes, use the Release option to mark the version released. You can also archive a version, which hides it from reports and other views, automatically run a build, if Bamboo and Jira are connected,
>
> **[3:06](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-versions?u=76281980&t=186)** merge one version into another and move its issues to the desired version, and edit or delete versions. I recommend delegating version management to project level administrators if you can. Read more about managing versions at the URL shown. Here are some things to avoid. Don't make your version format more complicated than it needs to be. Users shouldn't need a reference document to decode the meaning of the version. Don't use the release date in the version name. If the release date shifts, the name will be incorrect and queries will break when you fix it, just update the release date field not the release name field. Also, avoid specifying the release type in version names. Instead, use the description field to indicate an emergency release instead of a standard release. Keep your release names short, so they're easy to query.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (2), [[GitHub]] (1)
> **Versions:** 1.1.0 (2), 1.1 (2)
> **Analogies:** for example (4)
> **Tools:** jira (2), github (1)
> **CLI Commands:** make (2)
> **Env Vars:** url (2)
> **Definitions:** is a  (2)
> **Documentation:** specification (1)

#### [Use and create components](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=0)** - [Instructor] Components are my favorite project, specific setting for many reasons. First, they are a great way to categorize issues. In this screenshot, issues are categorized by skill needed. This [[Forms]] a nice grouping that can be queried. Next, this is one of the few fields that project-level administrators can manage. Just like with versions, I recommend delegating component management duties to project admins. Finally, components is the only field in [[Jira]] with auto assignment capabilities. In this screenshot, I'm listed as the default lead for the front end component. The Default Assignee column specifies that front end issues are assigned to the component lead. If the front end component is selected, when an issue is created, the issue will automatically be assigned to me. This is great for removing manual work. One thing to know, auto assignment only happens on the create action. Selecting a component later in the workflow will not change the assignee. To create a component, click the button on the top right. All components contain the following attributes: a unique name to identify it, an optional description, and an optional lead, which is any JIRA user. Also, included is an optional default assignee, which is the project's default, the project lead, or the component lead, or unassigned. In Server and Data Center, you can archive an unneeded component. In cloud, you can delete or rename an unneeded component instead. You can use components in many ways.
>
> **[1:34](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=94)** Here are some examples. If the project is for building software, you could categorize issues by skill needed. For building a car, you could categorize by part or area. For creating a new product, you could use job or department impacted. And for writing copy, you could use the location where the copy is posted. The possibilities are endless. There's no limit to how many components a project or issue can have. But I do recommend using components to answer one question instead of many questions. For example, ask what skill is needed or what area is impacted? But not both. Again, reporting needs should always drive implementation. Here are some best practices. First, components are great. So use them. I see so many JIRA projects without them. It's okay if you don't want to use the [[Routing]] feature, but at least use the selections so you can group and report unrelated work. Next, if the component field is required, make sure there's an other selection. This is the same advice I give for any type of selection field. Finally, make component names short. One [[Microsoft Word|word]] or two-word values make the easiest queries. Here's some things to avoid. As I previously mentioned, components work best when they answer one question. It's important to choose the most important question wisely. If you're not sure what the best question is, wait until there are a healthy number of issues in the project. After the project is used for awhile, issue patterns will become clear. Also, don't duplicate standard JIRA fields
>
> **[3:07](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-components?u=76281980&t=187)** or other custom fields. Make sure the question the component answers is unique. Here's an advanced use case I built for one of my clients. The client wanted to manage their onboarding process in JIRA. For each new hire, they created an issue and selected the components for each application or resource the user needed. In this example, the new hire needed a chair, a desk phone, and a license from [[Microsoft Excel]]. For each component selected, a subtask was automatically created, assigned to the component lead, and the new hires name was appended to the summary. This was easy to do using a third-party workflow app called JIRA Workflow Toolbox. I added a Create Issue post function to a workflow transition. And used a little bit of code to create one subtask per component. This is another great way to use components. You should always look for additional ways to solve problems and save time using existing JIRA data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (7), [[Microsoft Word|Word]] (2), [[Forms]] (1), [[Routing]] (1), [[Microsoft Excel]] (1)
> **Env Vars:** jira (7)
> **Tools:** jira (7)
> **CLI Commands:** make (4)
> **Analogies:** just like (1), for example (1)
> **Cross-References:** later in (1)
> **Definitions:** is an  (1)
> **Best Practices:** you should always (1)

#### [Working with users](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=0)** - Users are another project specific setting. Let's discuss how each project can have a distinct set of users with different capabilities. But first, here's a reminder that [[Jira]] has both global and project level elements that impact users. Each person has a user account, which may be part of one or more groups. Groups are often used to grant global permissions, which we talked about in the beginning of the course. Next, the entire application has a global set of roles, which are used to grant project specific abilities. The default roles are administrators and developers. If Jira Service Management is installed, there are two additional roles called service desk customers and service desk team. In Cloud, there's an additional role called [[Atlassian]] add-ons project access, which is used by apps. These roles are used by all projects and determine who can do what in each project. If your application has other custom roles, you'll see them in this list too. I don't like the name of the developer role because it's very software specific. Sometimes I change it to team. On the right are the project level user elements to be aware of. Permission schemes control specific project actions like assigning issues, managing sprints, and adding comments. We'll talk about these again in the next section. Then each project has its own set of users. In Cloud, the project user area is called people. In Server and Data Center, it's called users and roles. Users in a project are often part
>
> **[1:32](https://www.linkedin.com/learning/jira-advanced-administration/working-with-users?u=76281980&t=92)** of one or more global project roles. Here's an example. Project 1 has one user in the administrators role, labeled user A. User A is also in the developers role in project 1. In project 2, user A is only in the developers role. Assuming these projects use the same permission scheme, user A has a lot more abilities in project 1 than in project 2. Here's what the Users page looks like in Cloud. In this example, the global administrators group has a permission granted to the project role also called administrators. This means the end user who's in the administrators group gets all the abilities of an administrator in this project. By using a group, you don't have to add multiple admin users separately. Next, there's an individual user account, and it's assigned to the developers role. You can't tell from the screenshot, but my account is in the global administrators group. So in this project, my account has both levels of permissions. If you have the free version of Jira Cloud, project roles aren't editable. You'll need to upgrade your plan for this configuration feature. Here's what the Users page looks like in Server and Data Center. There are a few visual differences, but the example is the same. In Server and Data Center, the global administrators group is called Jira-Administrators. Just like with versions and components, I recommend delegating this type of [[User Management]] to project level admins.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (4), [[Atlassian]] (1), [[User Management]] (1)
> **Tools:** jira (4)
> **Cross-References:** we talked about (1), in the next (1)
> **Definitions:** is called (2)
> **Analogies:** just like (1)
> **Warnings:** be aware (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - users (1)

#### [Challenge: Create components](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-components?u=76281980&t=0)** (upbear music)
>
> **[0:05](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-components?u=76281980&t=5)** - [Instructor] In this challenge, you'll create components for a [[Jira]] project, look for existing projects that don't already have components, or use a test project. Next, determine one question for the components to answer. For example, what area of the business is impacted, or which [[Microsoft Office|office]] location is impacted? Then, create the component selections to answer the question. Be sure to use terminology that makes sense to the user. Finally, add component leads and set the default assignee, if you want to use the [[Routing]] feature.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (1), [[Microsoft Office|Office]] (1), [[Routing]] (1)
> **Tools:** jira (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbear music) (1)

#### [Solution: Create components](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-components?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-components?u=76281980&t=5)** - [Instructor] Were you able to create and configure the components? Here's how to do it. I found that the [[Human Resources (HR)|human resources]] project doesn't have components, so I'll create some there. Navigate to the project's admin area by clicking Project Settings, then Components. Next, I asked the HR team how they'd like to categorize their work. They have one staff member dedicated to each [[Microsoft Office|office]], so segmenting their work by location is useful. I'll create one component per office. Since I don't know which HR rep manages which office, I'll stop there. I'll show the project's administrator how to add component leads and set the default assignee. I'll also set the expectation that the project admin should manage the components going forward.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (3), [[Human Resources (HR)|Human resources]] (1)
> **UI Navigation:** navigate to (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 5. Working with Groups and Roles

[↑ Back to Table of Contents](#table-of-contents)

#### [Leveraging project roles](https://www.linkedin.com/learning/jira-advanced-administration/leveraging-project-roles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/leveraging-project-roles?u=76281980&t=0)** - [Instructor] In the last section, we talked about project roles and how they're used globally by every [[Jira]] project. The default roles of administrators and developers are a good starting point, but sometimes it's useful to create more. Think about how your teams are structured to determine what additional roles might be useful. Let's use the example of a marketing team at a medium size organization. First, determine what team roles exist naturally outside of Jira. Each team usually has one or more leaders. Then there are team members, colleagues from departments you regularly work with, and other users like interns, consultants, or external or temporary staff. Think about how the responsibilities and abilities of each role differ. For example, colleagues often have more duties than interns. As such, colleagues may also have more permissions in Jira. In this example, colleagues have some abilities and abilities for others are limited. If however, there's no capability difference between two team roles, then there's no need to make a distinction in Jira either. For example, if team members, colleagues, and others are all able to perform the same tier actions, there's no need for multiple custom roles. Next, map the team roles to the Jira role equivalents. For leadership, we'll use the default administrators group. Team leads usually administer the team's Jira project. The only other standard project role is developers, and that naming doesn't quite fit our use case.
>
> **[1:34](https://www.linkedin.com/learning/jira-advanced-administration/leveraging-project-roles?u=76281980&t=94)** We'll need to create a few additional custom roles. For team members, I'll either rename the default developer's role, or create a new role called team. For colleagues, I'll create a custom group called users. I think this used to be a default Jira role, so see if your application already has it. Finally, for others like interns and consultants, I'll create a custom role called viewers. Try to keep project role names as generic as possible. Remember, these roles will be used by all Jira projects. Create new custom roles using the form at the bottom of the project roles admin page. In the screenshot I've added team, users, and viewers, because I want each role to have different abilities. As I mentioned before, some organizations change the name of developers to team to be more inclusive. Additionally, I've seen companies change administrators to project administrators to make the roles purpose clearer. Here's the impact of adding roles as seen in a Jira project. The new roles are immediately included in the dropdown menus. Any project level administrator can leverage the new selections in their project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (9)
> **Tools:** jira (9)
> **CLI Commands:** make (2)
> **Cross-References:** in the last (1), we talked about (1)
> **Analogies:** for example (2)
> **UI Navigation:** dropdown (1)
> **Speakers:** - [instructor] (1)

#### [Working with groups](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=0)** - [Instructor] Roles and groups are often confused. Think of a role as a common function on a team and a group as the list of individuals performing that function. Project roles are often created when you initially configured [[Jira]] and are likely not changed very often. Groups require regular maintenance however but they make [[User Management]] easier. In this section, we'll discuss how to create, use and maintain groups. Here's our marketing team role example from the previous section. Now that we've created the needed custom roles, let's add users and groups to them. For the leadership or project administrators role, there's only one user so there's no need to create a custom group. For the team role, there are three users. So I'll create a group called marketing team. It's common for there to be one group per team or department, but don't create more groups than you're willing to manage. For the remaining user roles, I'll simply add individuals to the project. In the future, if there are many people in a role, and if the same people are in the same role in multiple projects, then I might create a group. By using roles and groups, we can separate what people do. For example, we'll allow people in the team role to create, edit, schedule and resolve issues. For people in the other or viewers' role, we'll allow them to see data, but not change it. You can create new custom groups from the user management admin page. In cloud, click the create group button at the top right.
>
> **[1:34](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=94)** Then give your group a unique name and an optional description. Check the box at the bottom of the overlay to add users now or add them later. Here's the group creation page in JIRA server. As you can see, the user interface is different. Add the group first and then click the edit members link in the actions column to add members. When naming groups, decide on a common format and stick to it. Can you think of a different way to name the marketing dash team group name in this example? If I revise the name to team dash marketing, then all the team groups would display together alphabetically. The first example is useful if you have a lot of marketing groups. The second example is useful if you have a lot of team groups. When creating in JIRA, always think of the impact that naming conventions may have later. Here are some best practices for roles and groups. Create custom roles but only when they are warranted. You need more roles when you want to grant JIRA project functions to only certain types of users. If users can perform all functions, additional roles or overkill, you might only need an administrator's role as you always want to limit those abilities. Next, create custom groups for easy user management. It's much easier to add users to a group and leverage the group throughout the JIRA configuration. You can embed individual users, but it's harder to maintain, especially as your user count grows over time. Also, you need to proactively maintain group membership.
>
> **[3:09](https://www.linkedin.com/learning/jira-advanced-administration/working-with-groups?u=76281980&t=189)** Make sure users are routinely added and removed when they join and leave the company. Conduct a periodic audit of who was in which group and encourage team needs to proactively notify you when the needs change. Pay special attention to the membership of the application admin group. There should be a special approval process to add new members to this important group. Finally, as a JIRA administrator, you should delegate project management duties to project level admins. I recommend selecting two project admins so there's a backup if one is out of the [[Microsoft Office|office]]. Project admin should manage project users and application administrators must manage group membership.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (6), [[User Management]] (3), [[Microsoft Office|Office]] (1)
> **Env Vars:** jira (6)
> **Tools:** jira (6)
> **CLI Commands:** make (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Using groups and roles in schemes](https://www.linkedin.com/learning/jira-advanced-administration/using-groups-and-roles-in-schemes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/using-groups-and-roles-in-schemes?u=76281980&t=0)** - [Instructor] Now that we've discussed groups and roles, let's explore the many places you can use them in the configuration. Here are some examples. As previously shown, you can use groups and roles to give abilities in individual [[Jira]] projects. Next, you can use groups and roles to determine abilities and permission schemes. In this example, only project level administrators and application administrators can delete issues. You can use groups and roles in notification schemes too. In this example, project admins and application admins receive a notification when an issue is reopened. Issue security schemes can leverage groups and roles as well. In this example, members of the administrators and team project roles can see issues deemed confidential. As also shown in the workflow section, groups and roles are often embedded in workflow transition behaviors. This condition is used to hide the done transition to non-administrators. End users can't create roles or groups, but they can leverage them in objects like boards, [[Dashboards]], dashboard gadgets, filters and filter subscriptions. Finally, roles and groups are often used in third-party apps. This example shows the Tempo time-tracking app. This page is used to create a team. By clicking the link at the bottom of the page, you can add multiple users at once from a group. This is a huge time-saver when there are many users to add. Here's another example using the Power Admin app
>
> **[1:34](https://www.linkedin.com/learning/jira-advanced-administration/using-groups-and-roles-in-schemes?u=76281980&t=94)** from Botron [[Atlassian]] Apps. This helps your administrators understand dependencies and usage. For example, you can search for details on the usage of a group. Now I can understand how the group is used and the impact if I decide to rename or remove it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (1), [[Dashboards]] (1), [[Atlassian]] (1)
> **Tools:** jira (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Create a read-only role](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-a-read-only-role?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-a-read-only-role?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-a-read-only-role?u=76281980&t=5)** - [Instructor] Use what you learned in this section to prepare for making project issues read-only. First, create a new custom role called viewers. Next, use the test user you created in the [[Jira]] basic administration course, or any test user with general application access. Add the test user to the viewers role in a test project. We'll use these settings to complete the next challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (1)
> **Tools:** jira (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Create a read-only role](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-a-read-only-role?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-a-read-only-role?u=76281980&t=0)** - [Instructor] Did you provide the items we'll need to make a project read-only in the next section? Here's how to do it. First, visit the Project Roles admin page, and create a new custom role. Then go to the Users and Roles or people admin section in your test project. Now, add a test user to the new role. Now we're ready to use these settings with the permission scheme in the next section.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (2)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Restricting and Sharing Information

[↑ Back to Table of Contents](#table-of-contents)

#### [Use and create permissions](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-permissions?u=76281980)

#### [Use and create issue security](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=0)** - [instructor] In addition to [[Jira]] application permissions and project permissions, you can also use issue security schemes to limit access to individual project issues. Issue security schemes are often used to protect sensitive information for legal security audit and compliance reasons. And this is the opposite of transparency. So make sure it's really needed before you add it. Of course, if you have super secret data, you should evaluate whether it belongs in the general JIRA application, whether it should have its own dedicated JIRA application or whether it belongs in JIRA at all, to create an issue security scheme, click the link at the bottom of the page. You can also copy an existing scheme. No security schemes are created by default. If you need one create it manually after creating an issue security scheme, click the security levels link to add levels and users. To add security levels. Use the form at the bottom of the page. To add users, groups, or project roles, click the add link for each security level, all issue security schemes contain the following attributes, a unique name to identify it an optional description and security levels to determine which users or groups can access which issues you can also specify a default security level if desired. Of course you can share issue security schemes between multiple projects. The ability to restrict access to only some issues might even help avoid the need for multiple projects.
>
> **[1:34](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=94)** Each of security settings apply to all issue types in the project, including sub tasks. Let's use our marketing team example from the project roles section. Let's say, in addition to all the work the marketing team does, sometimes there are tasks that need to remain secret until they're ready to be shared. Maybe the company is planning for an acquisition or there's a highly classified issue to address. Here's how it could be reflected in an issue security scheme. This scheme has two levels sensitive for issues that only the leadership team can see and confidential for issues only team members can see all other issues can be seen by regular users. Like colleagues from other departments and others like interns and consultants. Adding an issue security scheme is a six step process, but it's quicker than it sounds. First, create the scheme at the needed security levels and add users, groups, or roles to the levels. Then associate the scheme with the project. Next, edit the set issue security line in the permission scheme to determine who can set the issue security and finally add the security level standard field to the project screens. So users can select the security level. Let's do a quick demo. First let's create an issue security scheme. Next, let's add two security levels. Next we need to add users to each security level.
>
> **[3:09](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-issue-security?u=76281980&t=189)** Notice that the levels are ordered alphabetically, not in the order I entered them. This confuses me sometimes. Also I want to make sensitive the default setting a default ensures all issues are set to this level. If the reporter does not have permission to set as your security. Next, we need to apply the issue security scheme to a JIRA project. This project doesn't have any previously secured issues, so there's no migration needed. Next, edit the project permission scheme to determine who can set the security level. I'll grant the permission to leadership and team members. Finally, we need to make sure the security level field is present on the project screens. If the security level field is there, all that's left to do is test that issue security is working as intended. If the field is missing, simply add it to the related screens. Like you'd add any other standard or custom field to delete an issue security scheme. You must remove it from any projects using it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (5)
> **Env Vars:** jira (5)
> **Tools:** jira (5)
> **CLI Commands:** make (3)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Use and create notifications](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=0)** - In this section, we'll discuss using and creating notification schemes. Notification schemes control the email messages sent at lifecycle events. For example, who should receive a message when an issue was created, updated, or assigned? [[Jira]] comes with one default notification scheme. You might have a business need for more than one, but you don't need one per project. Sometimes organizations use two schemes: One that sends all the standard notifications, and one that sends very few messages. To create a notification scheme, click the button at the bottom of the page. Just like when creating new permission schemes, this will create a scheme with no settings. You'll need to add users, groups, or project roles. You can also copy an existing scheme with its settings using the copy link. All notification schemes contain the following attributes: A unique name to identify it; An optional description; And settings to determine who receives each type of message. Like other schemes, you can share these settings between multiple projects. Here are the settings for the default notification scheme in all types of Jira. Each notification type is sent to a list of users, groups, or roles. In this example, the Issue Created notification is sent to the current assignee, the reporter, and all watchers. To add additional users, click the Add link on the right. The UI is a little different, but you can add users, roles, or groups to notification schemes,
>
> **[1:33](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=93)** just like you do for permission schemes. As I mentioned in the basic administration course, when's the last time your user said, "I wish I had more email?" Probably never. So use these notification schemes sparingly. If you send a notification for every little action, users are likely to ignore them, or send them directly to the trash. It's important to send the right amount of notifications for your organization. For each notification, consider how useful the information is, and its intended audience. Ask yourself, "Does the user really need this information for every issue in the project? And will the user appreciate this notification, or filter it out?" There may be better ways for keeping up with Jira changes, like [[Dashboards]], filter subscriptions, or connecting Jira to a team chat room. Don't let Jira send more emails than are really needed. Each issue level activity is associated with an event and Jira automatically sends email notifications when those events occur. There are 17 standard system notification points. Some events are managed internally by Jira and some are part of workflow post functions that you can modify. System notifications can't be added or deleted, but you can make them inactive by disassociating any notification schemes and removing any workflow behaviors. For each notification, think about which would be useful for your users and which may be overkill. Most are self-explanatory, but I'll share some tips for some. Let's start with the issue updated notification.
>
> **[3:08](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=188)** It includes updates like changing the description, attaching a file, or updating a field. The documentation isn't super clear on the specific list of changes. So the best way to test this is to make different types of updates and see which trigger a message. These are often the most frequent and potentially the most annoying updates to receive. For issue assigned, a notification is sent both to the previous assignee and the current assignee. Here's the next set of notifications. The issue comment deleted notification is not currently listed in the Jira documentation, but there's a note that says when an issue's comment is deleted Jira sends out an email notification as an issue updated event. If you've restricted the ability to delete issues in a permission scheme, you might not need an issue deleted notification. Either send this notification to the same users with the issue delete permission or leave the recipients list empty. The worklog notifications are only useful if users track time. Sometimes companies send these to the finance department, to an account manager, or to another application for capitalization or billing. The last standard notification is called generic event and it's used by workflow transitions. You may remember from the workflow section that a generic event post function is automatically added to each workflow transition. For the final transition, I recommend changing this generic event to an issue closed event. This way the user receives a more specific email message. In addition to the standard notification points,
>
> **[4:43](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=283)** you can also create custom event notifications. Use these to alert someone about a specific action. For example, alert the lead developer that an issue is ready for [[Code Review]]. Alert the testing team that an issue is ready for verification. Or alert a senior exec that their approval is needed. Adding a custom notification is a three-step process. First create a new event, then add recipients in a notification scheme, then add a corresponding post function in a workflow. Let's do a quick demo. The QA team wants a notification when bugs are ready for them to test. We can ask Jira to send an email using a custom event. First, go to the events admin page in the system area. Start by adding a new event. The new event is now available for use in a notification scheme. Click the notifications link and scroll to the bottom. Then click the Add link to add recipients. Finally, we need to add a workflow post function to trigger the event notification. Go to the workflows page in the issues admin area. Select the workflow to edit and the desired transition. Then click the post function tab and change the generic event to a custom one. When this transition executes, an additional message is sent to the selected recipients. You can customize message contents with the help
>
> **[6:17](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=377)** of additional apps. To delete a custom event, make it inactive by disassociating notification schemes and removing workflow behaviors. Here are some best practices: Be mindful of how many messages users receive. If you notify users of every little thing, they're likely to filter messages or ignore them. Also be mindful of the strain a lot of notifications may put on the mail server. Finally, except for some special cases, most projects probably have the same notification needs. Share schemes as often as possible. Here are some things to avoid: Don't notify large groups of users. Don't add the entire Jira users group to a notification, for example. Instead, teach users how to find information without relying on email messages. Also, don't alert users of their own actions. They likely know what they did and don't need an email message to confirm it. Speaking of notifying users of their own changes, users have some control over the types of messages they receive. In Cloud, there are five check boxes the user can select or deselect. The default selections are shown. The final check box is not selected by default unless the application administrator has changed the setting globally. I recommend admins use the default, which is not to notify users of their own changes. In Server and Data Center, there's one user profile setting called "My Changes." In all deployment types,
>
> **[7:48](https://www.linkedin.com/learning/jira-advanced-administration/use-and-create-notifications?u=76281980&t=468)** users can choose whether to receive notifications in [[HTML]] or text format. Also, it's good to know that users only receive notifications for issues they had the permission to see. Further, Jira does not send notification messages to inactive users. So who gets what email in your projects? What are your notification scheme settings? Are there any adjustments you should make? Visit the URL shown to compare your settings to Jira's default. There are lots of potential email issues to troubleshoot, but luckily, there's a Jira feature to help weigh through some of it. Check out the Using the Notification Helper section of my Jira basic administration course for instructions and other email troubleshooting tips. So it's interesting, a lot of times end users think, "Jira's broken. Jira's not sending me emails." But that's usually not the case. It's usually something on the mail server side that's not functioning as you would expect. And then sometimes end users think that Jira is supposed to send them a notification and it's just not a feature. A good example is, "I shared my dashboard with my co-worker. Why didn't they get an email about it?" Well, that's not a Jira feature. So when there's email notification problems, always start with the mail server, make sure everything's okay with that connection. Then check the email address of the user and make sure everything's okay there. And then finally, check the notification scheme in case it's misconfigured.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (19), [[Dashboards]] (1), [[Code Review]] (1), [[HTML]] (1)
> **Tools:** jira (19)
> **CLI Commands:** make (6), find (1)
> **Analogies:** for example (3), just like (2)
> **UI Navigation:** go to (2), select the (1)
> **Definitions:** is a  (2), is called (1)
> **Env Vars:** html (1), url (1)
> **Warnings:** note that (1), troubleshoot (1)

#### [Challenge: Create read-only permissions](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-read-only-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-read-only-permissions?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-read-only-permissions?u=76281980&t=5)** - [Instructor] In the previous challenge, we created a new custom role called viewers and added a test user to the viewers role in a test project. Now let's use those settings to make issues in a project read-only for the viewers role and editable for the members of the team. You'll need to change the project permission scheme to remove any instances of any logged in user, if they exist, restrict actions like edit issues and move issues to members of the team, and grant only the browse projects permission to users in the viewers role. You can edit an existing scheme or create a new blank permission scheme for this use case. Don't forget to log in as a test user and make sure the restrictions you created work as desired.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Best Practices:** don't forget (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Create read-only permissions](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-read-only-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-read-only-permissions?u=76281980&t=0)** - [Instructor] Were you able to make issues in a project read only for the viewers role and editable for members of your team? There are two ways to do it. You can either edit an existing permission scheme or create a brand new one for this use case. Here's how to do the ladder. Go to the permission schemes page in the issues admin area, then create a new blank permission scheme. Now we have a blank scheme and need to add users to it. First, I'll add the administrator's role to each appropriate permission. I'll just use the Administer Project's permission for this example. Next, I'll add the team role to each appropriate permission. I'll add browse projects, create issues and edit issues for this example, but you'll likely want to add more in your real implementation. Finally, add the viewers role to only the browse projects permission. Now you can apply your new permission scheme to any desired projects and test the results.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 7. Extending Jira

[↑ Back to Table of Contents](#table-of-contents)

#### [Use and vet apps](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=0)** - [Instructor] [[Jira]] is super powerful on its own. But sometimes you'll want to extend it with additional features. You can add more Jira capabilities for the apps from the [[Atlassian]] Marketplace. Apps were previously called ad-ons and plugins. In other software, added functionality is sometimes called extensions or modules. Regardless of what you call them, apps bring additional capabilities or extend native functions. Use the Marketplace Search Bar to find apps by name, or vendor name. Use the Navigation menu to filter apps based on application and deployment type. Here's an example Product page for a Marketplace app. In the screenshot, you can see that this app is available for all three hosting options, that's not true for every app, however. Further, sometimes app features differ between deployment methods. Always make sure that an app is compatible with your application type, deployment type, and version. Under the App Title is the App vendor. Click on the vendor's name to see other apps they've developed. Some apps are free and some are paid. The paid apps usually include a free trial. To learn more about an app, click the other tabs. A quick way to get more information is by clicking the Documentation link. Find it and other useful details at the bottom right of an App's Overview page. Before you get too excited and start installing a bunch of apps, there are some things to know. First, I want to share Atlassian's note about safety. As shown in the screenshot, Atlassian shares
>
> **[1:34](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=94)** that apps can materially change the application, and it's important to only install trustworthy apps. But how do you determine if an app is trustworthy? I recommend developing a specific procedure for testing apps and handling app requests from users. Here's my five step system. Use this as a starting point and customize it to fit your needs. Step one is to log the request. Whomever wants to explore a new app should create an issue in the Jira Support Project. Ask the user to provide the Name of the app and its Marketplace URL. Users don't always realize that there are different types of Jira, so be prepared for some requests for incompatible apps. Check this before moving forward. Also, record the cost and billing frequency for your user account. Most apps are built based on your total user count. There are some exceptions, but if you have 500 users and only five users will use the app, you still pay for 500. Before you install an app, it's smart to get preliminary approval from leadership. Ask management to confirm that at the app solves the intended problem, they will provide the funding. Next, install the app in a test environment. Installs and free trials often leave behind remanence you'll have to clean up later. So only install apps in production once you're sure you'll use them. Next, test the app, create a predefined set of questions and test cases to use for all apps, create some additional test cases that are app-specific too. For a list of question to help with
>
> **[3:10](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=190)** the app vetting process, download my handout from the exercise file area in [[LinkedIn]] Learning. Make sure the requestor or other potential users help with app testing. If the app is desired and functions as needed, install it in the production environment. In server and data center, copy the commercial license key from my.[atlassian.com](https://atlassian.com), then paste it in on the Manage apps page in the apps Admin area. If the app wasn't quite what you wanted, uninstall it from the test environment. You can install an app or free trial from the Atlassian Marketplace or from within JIRA on the Find new apps page in the Apps Admin area. On the Manage apps admin page, you can also install an app from a file or build your own app. In Cloud, once you've installed an app, you'll see a series of buttons on the Manage apps page. You'll see the buttons for managing subscriptions or free trials, buttons for configuration, and buttons for uninstalling. Uninstalling or unsubscribing in Cloud cancels the app subscription. You can confirm the cancellation by checking the Manage subscriptions page in the Cloud billing area at admin.[atlassian.com](https://atlassian.com). The app management buttons are similar in server and data center, except there are a few more. There are buttons for renewing licenses and updating versions. These functions are done automatically in Cloud, but you need to periodically do the manually in server and data center. There are also Disable buttons, features by disabled apps are immediately unavailable in the application.
>
> **[4:45](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=285)** System apps often can't be disabled because they're needed for standard generic functionality. If for some reason you need to remove an app manually, shut down JIRA, remove the apps jar file from the installation directory on the server, then start JIRA again. In general, apps should be uninstalled when they are no longer working as desired, no longer meeting your needs, or if they duplicate standard functionality. After an app is removed, check for any settings, custom fields, or app data that can be removed manually. The ability to install, manage, and remove apps is all provided by an Atlassian app called the Universal Plugin Manager or UPM for short. All deployment types have a UPM, but in server and data center, you need to periodically update it along with the other apps. As you can see in the screenshot, the UPM tells me to update the UPM. Above the UPM is a built in Atlassian troubleshooting and support tools app in server and data center. In my application, it also needs an update. This app is used to check instance health, analyze server logs, and create a zip file when needed by the Atlassian support team. You'll find it in the system Admin area. There's one more app related feature that I wanted to mention, is the app audit log and you'll find it at the bottom of the Manage apps page in all types of JIRA. This log is app-specific and it's different than the JIRA audit log or other log files. Use this to see a history of major app events like installs, updates, and removals.
>
> **[6:21](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=381)** Here are some best practices, make sure you have a thorough vetting and testing procedure, always involve the requestor in the testing process and make sure all testing occurs in a non-production environment. Make sure the test environment contains real issue and configuration data to test against. Apps can solve a lot of problems, but they can also create them too. Always consider the impact of app installs on your application now, and in the future. For really large apps, make sure your application can handle the load or performance impact, and be prepared to clean up remanence of expired free trials and uninstalled apps. You also need to proactively manage the apps, especially in server and data center. I visit the Manage apps admin page quarterly to check for version and compatibility changes. Here are some things to avoid. There are usually multiple apps that accomplish similar things, always be on the lookout for apps that duplicate standard functionality or duplicate functionality of another app you already have. Don't install more than one app at a time or make major configuration changes while an app is being tested. This makes it hard to isolate the cause of any issues encountered. Finally, I try not to install apps during periods of high usage, just in case impacts performance. Also, sometimes an app will take longer than expected to install, or it will complete in the background but spin or appear to fail in the browser. Always allow the install more time to complete
>
> **[7:56](https://www.linkedin.com/learning/jira-advanced-administration/use-and-vet-apps?u=76281980&t=476)** than you think it needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (9), [[Atlassian]] (9), [[LinkedIn]] (1)
> **Prerequisites:** install (12), make sure you have (1)
> **CLI Commands:** make (7), find (5)
> **Env Vars:** jira (5), upm (5), url (1)
> **Tools:** jira (9)
> **URLs:** [atlassian.com](https://atlassian.com) (2)
> **Exercise Files:** exercise file (1), zip file (1)
> **Documentation:** the documentation (1)

#### [Create connections](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=0)** - [Instructor] You can make [[Jira]] even more powerful by connecting other [[Atlassian]] applications. For instance, link Jira to another Atlassian product, like [[Confluence]] or [[Bitbucket]]. You can also link a Jira cloud application to a Jira server application. And of course, you can also link the same application to multiple applications. For example, if you have Jira server, you can link into Jira cloud and to Confluence. There's no linking restriction. Connecting Jira to other applications lets users view lots of data in one place. Let's explore the common scenario of connecting Jira and Confluence. There are many benefits to linking these applications. Here are a few. When the applications are connected, you can link to Jira issues to related Confluence pages. The link is reciprocal, meaning you can use it from either application. In this example, I linked this Jira company rebrand epic to a Confluence page, detailing the rebrand plan. You can see a count of linked Jira issues at the top of the Confluence page. In Confluence, simply paste in any Jira link or insert the Jira issues macro. You can so use the Jira issues macro to show multiple Jira issues as a list, Simply execute a JQL query in the search box and click the form submission button. Expand the display options area to set issue limit and the desired columns to show. You can also create a new issue using the same Confluence macro. Just click the link on the left sidebar of the overlay. You can also create a new issue
>
> **[1:34](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=94)** by highlighting copy on any Confluence page. Highlight any phrase and look for the create issue option. Highlight the text in view mode, not in edit mode. And finally, create multiple Jira issues from a Confluence table. Here's an example table of user story information. Highlight the table and look for the same create issue button. In the overlay, click the create multiple issues from table link. Confluence will create one Jira issue for each table row. This is a huge time saver, especially for less technical Jira users. I recommend you create a Jira project for each team or department. Then, create a companion Confluence space for each Jira project and link them together. After, a project pages link will appear in the Jira's project sidebar. This makes it easy for users to find related information. You can also manually add individual Confluence pages to a Jira project sidebar by clicking the add item link. You can also use this connection to display Jira reports and charts in Confluence and link Jira issues to supporting information, like requirements, diagrams, plans, and meeting notes. If you have Jira service management, you can connect your support project to Confluence knowledge base to provide self-service help. Confluence and Jira are truly better when used together. Link Jira to another Atlassian application by using the application links feature. You'll find it in the [[Microsoft Products|products]] admin area in cloud or the applications admin area in server and data center.
>
> **[3:11](https://www.linkedin.com/learning/jira-advanced-administration/create-connections?u=76281980&t=191)** Here's an example of Jira cloud application connected to a Jira server and a Confluence cloud application. The Jira server connection shows a network error. Click on the arrow lozenge for additional error details. You can add a new connection by pasting a URL in the text box and submitting the form. Edit a removal link using the icons and the actions column. Here are a few tips for managing application links. First, the links are easiest to create and manage when you have admin permissions in both applications. Next, if an application URL changes, you'll need to manually update it. Finally, if you ever need to recreate an app link, remove it from both the applications first. And one more thing. If you have multiple cloud applications, they might already be connected by default. Periodically check on connections from the application links admin page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (30), [[Confluence]] (17), [[Atlassian]] (3), [[Bitbucket]] (1), [[Microsoft Products|Products]] (1)
> **Tools:** jira (30), confluence (17), bitbucket (1)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** url (2), jql (1)
> **Analogies:** for instance (1), for example (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)

#### [Create integrations](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=0)** - [Instructor] You can also enhance [[Jira]] by integrating it with other applications and middleware. For example, you can share issue status updates in your team's chat room. You can send your work logs to an external billing application. Or you can sync information, so multiple teams can see the same information in different tools. For example, connect Jira to Salesforce, so teams can work out of both applications. Let's connect the [[Slack]] chat application to Jira Cloud as an example. Don't worry if you don't have Slack. You can do similar things with other chat applications. When you connect Jira, a chat channel can receive notifications for many different issue actions. For example, inform the channel when issues or comments are created, updated or deleted, attachments are added, or time is logged, or an issue status has changed. In this integration example, a chat message is posted anytime an issue status changes to closed, or new issue is created. When I'm mobile, I use Slack as a home base. Because I've integrated Slack with Jira and [[Confluence]], I can see what's happening without needing to log into those applications individually. Here's how to set up this integration. Log into Slack and click the add apps option in the sidebar. Select Jira from the list of apps Slack can connect to. Then enter any additional information needed by Slack to make the connection. As you can see, I've already integrated Slack with Jira and other apps, too. On the right,
>
> **[1:31](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=91)** Slack shows some helpful slash commands and buttons. I want to connect to a specific Jira project, so I'll click the connect project button. My [[Atlassian]] ID has access to multiple Jira applications, so I'll select the desired one in the first dropdown menu. In the second menu, I've selected the desired Jira project. And in the third menu, I've selected the Slack channel to receive the updates. Now that I've connected a Jira project and the Slack channel, I can set the type of notifications to receive. The default is to notify when issues are created. Click the manage button. Slack will take you to the connected Jira project to manage notification settings. As you can see, there's a new Slack integration link on the sidebar. Use this page to customize the notification type and frequency. You can even use JQL to limit the results. If you find you're receiving too many or too few chat notifications, the levels can be adjusted at any time. I suggest starting out small with notifications only for issue creation, comment creation and issue completion. There's one more Slack area in Jira to be aware of. Jira project admins can manage the Slack project connection from the project settings area. From here, you can edit notifications, mute notifications or delete the connection. You can also create Jira issues from Slack using a slash command. Simply type /jira, a space and the [[Microsoft Word|word]] create. You can also include an issue summary in the command. Submit the command and use the overlay
>
> **[3:05](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=185)** to enter any additional details for Jira. You can also transition, assign and comment on issues directly from Slack. You can also do more with Slack and Jira automation. For example, get a daily summary of issues in the backlog, alert the team when an SLA is breached or create reminders for important tasks. The possibilities are endless. See some examples at the URL shown. You can also use WebHooks as lightweight mechanisms for letting remote applications receive push notifications from Jira. For example, alert a remote application when an issue is updated, a workflow post function is executed, or an incident is being worked. The benefit of a WebHook is that the remote application doesn't have to continuously pull Jira for changes. Read the developer documentation for more details. Let's connect to Slack again, but this time with Jira Server using a WebHook. Click the add apps button on the left sidebar and then select the legacy Jira Server connection. On the next page, select a channel to receive notifications and copy the URL generated for the WebHook. Next, go to the WebHooks page in the Jira system admin area. Click the button shown to create the WebHook for Slack. Give the WebHook a unique name. Paste in the URL provided by Slack, and add an optional description. Next, use JQL to limit the issue list and choose the type of notifications desired. In the screenshot, I've selected the created event for issues and comments. You can get notifications about issues,
>
> **[4:40](https://www.linkedin.com/learning/jira-advanced-administration/create-integrations?u=76281980&t=280)** projects, users and many other events. When you've made all the selections, click the form submission button. Here's the completed WebHook. Don't forget to set your firewall to allow outbound Jira requests if needed. Now both my Jira Cloud and Jira Server applications are integrated with Slack using two different connection methods. You can also integrate and connect applications through third-party middleware. For example, I can connect Jira with my ActiveCampaign CRM or with a [[WordPress]] website forum plugin. There are a lot of connection mechanisms out there. Simply enter Jira and the name of your other application in your favorite search engine. And of course, if you can't find the integration you're looking for, you can always develop your own using an Atlassian framework or the [[Representational State Transfer (REST)|REST]] API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (28), [[Slack]] (22), [[Atlassian]] (2), [[Confluence]] (1), [[Microsoft Word|Word]] (1)
> **Tools:** jira (28), slack (22), confluence (1)
> **Env Vars:** url (3), jql (2), sla (1), crm (1), rest (1)
> **Analogies:** for example (6)
> **UI Navigation:** select the (2), in the sidebar (1), dropdown (1), go to (1)
> **CLI Commands:** find (2), make (1)
> **Best Practices:** don't forget (1)
> **Warnings:** be aware (1)

#### [Challenge: Connect Jira to Confluence](https://www.linkedin.com/learning/jira-advanced-administration/challenge-connect-jira-to-confluence?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/challenge-connect-jira-to-confluence?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/jira-advanced-administration/challenge-connect-jira-to-confluence?u=76281980&t=5)** - [Instructor] In this challenge, we'll connect to [[Jira]] cloud application to a second [[Confluence]] cloud application for the simple purpose of showing the procedure. I realize your organization might not have Confluence or your Confluence application might already be connected. That's okay. You could sign up for a new Confluence free trial or simply think of another use case that better fits your organization. How about connecting another [[Atlassian]] application, integrating Jira with a non-Atlassian application or vetting and installing an app from the Atlassian marketplace? And of course, you'll want to test any installs in a non-production environment first. For this sample use case, all you need is a second Atlassian application and admin access in both applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Confluence]] (4), [[Atlassian]] (4), [[Jira]] (2)
> **Tools:** confluence (4), jira (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Connect Jira to Confluence](https://www.linkedin.com/learning/jira-advanced-administration/solution-connect-jira-to-confluence?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/solution-connect-jira-to-confluence?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/jira-advanced-administration/solution-connect-jira-to-confluence?u=76281980&t=5)** - [Instructor] Were you able to connect your cloud to [[Confluence]] or complete a similar use case helpful for your organization? Here's how to connect to [[Atlassian]] applications. First, visit the application links page in the [[Microsoft Products|Products]] admin section in cloud or the Applications admin section in Server and Data Center. Next, enter the URL of the application to link to and click the form submission button. Review the information in the overlay, set any options and click the form submission button. Now do the same thing in the second application. Finally, confirm that the application shown is connected on the application link's page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Confluence]] (1), [[Atlassian]] (1), [[Microsoft Products|Products]] (1)
> **Env Vars:** url (1)
> **Tools:** confluence (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 8. Advanced Features

[↑ Back to Table of Contents](#table-of-contents)

#### [Import data](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=0)** - [Instructor] The bulk import function is a quick way to get data into [[Jira]]. Use it when you need to import many similar issues like test cases, recurring issues like tasks for quarterly audits or data from another application or another JIRA environment. I once helped a company import 14,000 records to JIRA from an internally developed issue tracker. The project took about 24 hours of work to complete. The hard part wasn't the import itself, it was translating the existing data into a format JIRA could understand. As a reminder, you can quickly create sample data in all environments. See the instructions in the how to create a project section of my basic JIRA administration course. As always, before you make any big changes in JIRA, you should back up your data first. Also, I want to be clear that in this section, we're talking about adding new issues to JIRA, not importing issues for the purpose of migrating JIRA from one deployment method to another, or for restoring JIRA. That's a different type of import activity. JIRA has a built-in app to import data in CSV or comma separated values format. You'll find it another import formats on the external system import page in the system admin area, and users can also import if they have the create issue and the managed bulk changes permission. They can use the import issues from CSV feature on the search page in cloud or in the issues menu and Server and Data Center. The admin version of the importer
>
> **[1:33](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=93)** has more advanced features. So I recommend using the one in the admin area instead. An import is a four step process. Start by preparing the CSV file so issue data is in the format JIRA requires and expects. Next, import two or three records to make sure all expected data is present and in the correct format. I usually forget to format something correctly in my import file and need to do this test step a few times. When the test is successful, import the remaining records. I'm not sure but I don't think there's an import limit. I was able to import 14,000 issues in JIRA cloud without any problems. Finally, sometimes you finish your import and notice something isn't quite right. You can either clean up issues using the bulk change function, or you can do a second import process to update existing issues. Let's talk a little more about preparing your CSV file. The easiest way to ensure the correct format is to export some sample data from JIRA and use that file as a starting point. Open the exporter file, remove the sample data and paste in real data using the same format. Here's a sample CSV file opened in [[Microsoft Excel]] and [[Windows]] Notepad. This file has just a few of the possible JIRA fields. Each CSV file must contain a header row. This is so you can map the columns to their fields in JIRA. You can use any header titles you want, but they cannot contain punctuation. I find it easiest to match the header name
>
> **[3:07](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=187)** to the JIRA field name. The columns can be in any order. I usually order them to match the order on the create screen. First, I like to specify the issue type. If you don't provide this column, the default value for the project will be used. I don't have a column to specify the JIRA project though, why? Well, the answer is that I want all these issues to go into the same project. The importer will ask for the JIRA projects name. So there's no need to supply it in the file. If you're importing issues into multiple projects, however, you'll need to include it. Next, summary is a required field in JIRA so make sure you have a summary column and one value per record. User fields like assignee and reporter are treated specially. In cloud, specify user with their email address and server and data center use their username. You can also have the importer create new accounts. Any new accounts created will be active not inactive. But don't attempt to specify passwords. Users will create new passwords when they first log in. If you have a user count limit and you hit it, the import process will stop. User type fields and date fields are the ones I usually mess up. Be sure to check on these specifically after your sample record import. I don't have any special formatting in my description example, but if you do, you can use double quotes to handle it. Use double quote marks to capture data that spans multiple lines, handle special characters, including commas or handle carriage returns.
>
> **[4:42](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=282)** The ability to set the status is one of the advanced features not available to regular users. That's why I like to use the importer in the admin area. You can specify any status that currently exists and the associated workflow. If no status is specified, it will use the first status in the workflow. Finally, let's talk about date fields. I always seem to mess these up on the first shot. You can format your dates however you want, but don't forget to specify the format in the import wizard. In this example, I'm using day, month, year, but no hours, minutes, or seconds. I'll need to account for the lack of time during the import, I'll show you where to do it in a minute. Once you have the CSV file format correctly, it's time to import just a few records as a test. Click on the CSV option on the external system import page to launch the wizard, then upload the CSV file from your computer. Expand the advanced section if you need to change the encoding, or if you used a delimiter other than a comma, then click the Form Submission button at the bottom of the page. Next, select the proper options for your use case. In this example, I'm importing issues into the same project and I didn't specify a project in the CSV file. So I'll select the project here. Also in the date format field, I've changed the format. I've removed the reference to hours, minutes, and seconds that's there by default. You can see the default in the example copy under the field. Make sure the format and the wizard matches what's in the CSV file.
>
> **[6:14](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=374)** On the next page, map the headers in the CSV file to their JIRA equivalence. Since I named the CSV headers the same as the JIRA fields, it's easy to do. For the assignee CSV field on the left, select the assignee JIRA field on the right. If there's a field you don't want to import, you can select don't map this field in the JIRA field column. JIRA will simply disregard the data. My preference is to remove any data I don't want from the CSV file, but it's nice that JIRA can handle it. Also on this page is a checkbox labeled Map Field Value, I use this when there are more field selections in the CSV file than in JIRA. Here's an example. Let's say you have a field called risk. In the CSV file there are five potential values, but in JIRA, there are only four. In this case, you need to decide what to do with the extra value in trivial in the CSV file. You can remove the value, add a new value to JIRA or map the value to an existing value. For this example, I'll map trivial to low. I find it easier to do these transformations in [[Microsoft Excel|Excel]], but you're able to do them with the JIRA importer tool. Mapping the fields was the last step if or when it's planned, you'll see a success message like in this example. I find the message a little misleading, I didn't import a project, I impacted one project by importing two issues. From here, I recommend downloading the log and checking the test issues to make sure they were created as desired. I also recommend exporting all
>
> **[7:49](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=469)** the settings you previously selected so you can use them to import any remaining issues. Download the config file in text format and start the importer again. At the point where the CSV file is selected, click the checkbox shown to also upload the configuration file. This will save a lot of time and lower the chance of human error. Here's what happens when things go wrong. In this example, there are errors and warnings. The error stop the import, and as the message shows, no issues were imported. As you can see, there's a problem with the status field. I specified to do in the CSV file, but the associated workflow uses open instead. I either need to update the CSV or use the field mapping feature of the import wizard. The warnings are caused by the date format in the CSV not matching the date format in the importer. As you remember, the default is the date plus hours, minutes, and seconds. Here's what happens when you supply a different format than specified in the import wizard. Finally, here's an example don't want to have. I missed a comma or two in the CSV file and here's the yucky result. Instead of two new issues, I have four. The first issue is of type change instead of task. The summary of the first issue is the intended description for the second issue. And the status is are all messed up too. Good thing I tested my CSV file with two issues instead of 2,000. There's one more tip I want to share
>
> **[9:21](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=561)** and it's about sub tasks. You can create a parent-child relationship in the CSV file by including the headers Issue ID, Parent ID and Issue Type. In the example task called build a house, I've given the row in Issue ID of 3308 and left the Parent ID field blank. 3308 is any random number. It's not the issue key that will be assigned by JIRA. JIRA will only use this information for the import. Then for each sub task, I've left the Issue ID field blank and added 3308 to the Parent ID field. This associates the poor concrete foundation and frame exterior wall sub tasks with the parent build a house task. You can see the result in JIRA on the right. Here are some best practices. If you have data to map, I recommend doing the transformation work in Excel and then saving the file in CSV format. It's much easier to make changes in a flat file. The values in the CSV file need to match the format JIRA is expecting. This is especially important if you're importing issues into multiple projects. Make sure you understand project settings and handle any configuration differences. Don't forget to specify values for any required fields. Even if a field isn't required by the importer, a workflow or other setting could depend on a value. Sometimes you don't want to import data. Sometimes it's best to leave fields blank and let project specific rules, automations, or user set the values.
>
> **[10:54](https://www.linkedin.com/learning/jira-advanced-administration/import-data?u=76281980&t=654)** It all depends on the project configuration. Always back up your data, use this test environment and only import a few records at first. Finally, leverage [[Atlassian]] documentation for additional tips and ways to handle certain types of data. Here are some things to avoid. If you're importing brand new issues, don't specify an issue key, let JIRA auto number the issues. The only time Issue ID should be in an import file is to update existing issues. Also don't specify passwords. Let JIRA handle this in a secure way. Watch out for spelling mistakes, especially for status names, dropdown selections, and any field where a certain format is expected.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (35), [[Microsoft Excel|Excel]] (2), [[Microsoft Excel]] (1), [[Windows]] (1), [[Atlassian]] (1)
> **Env Vars:** jira (35), csv (27)
> **Tools:** jira (35)
> **CLI Commands:** make (7), find (4)
> **UI Navigation:** select the (3), checkbox (2), open the (1), click on (1), dropdown (1)
> **Definitions:** is a  (4)
> **Best Practices:** don't forget (2), it's best to (1)
> **Prerequisites:** you'll need (1), make sure you have (1)

#### [Create issues from email](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=0)** - [Instructor] Another way to get issues into [[Jira]] is to create them from email. Sometimes organizations use this feature as an alternative to the create form or to create requests tracked in other applications. For example, another application can send an email to Jira to trigger issue creation. Some benefits of this method are: The email subject automatically becomes the issue summary and the email body becomes the description. Any attachments in the message are automatically attached to the Jira issue. And if subsequent messages are sent, the email body is added to the Jira issue as a comment. The requirements for using this feature are: A connected mail server, a POP or IMAP email address, and Jira application administrator access. Here's how it works. When a message is received, Jira scans the subject line looking for an issue key. If an issue key is found, Jira adds the body of the message to the existing issue as a comment. If an issue key isn't found in the subject, Jira also checks the in reply-to message header. If an issue's key is found in the header, Jira adds the body of the message to the existing issue as a comment. If no issue key is found in either place, Jira creates a new issue. Here's an example: In the sample message on the left, I've specified the email address for my Jira Cloud application in the To field. In the subject field, I've specified an existing Jira issue. On the right, you can see that the body of the email message was added
>
> **[1:33](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=93)** as a comment to the issue. This functionality is managed from the incoming mail page in the system admin section. Here's an example from Jira Cloud. At the top of the page is the connection to the mail server. In Cloud, this is automatically configured for you using [[Atlassian]]'s mail server. In Cloud, Jira's admin address is in the format jira@applicationname.[atlassian.net](https://atlassian.net). In Server and Data Center, create an email address for Jira to use. Most companies use an address like jira@[domain.com](https://domain.com). Then connect your own mail server by clicking the button shown. If you're creating your own email address for Jira, collect the following details: Mailbox details, like the email address, username and password; The desired mail protocol, like POP or IMAP; And mail server details, like the address and port number. Also make sure the mailbox is configured to accept external traffic. At the bottom of the incoming mail page are one or more handlers that specify what Jira should do with messages. In Jira Cloud, the first mail handler is automatically configured for you. In the screenshot, I've configured second handler specifically for messages in the demo project. Click the button shown to create more mail handlers in any type of Jira. Here are the factors to consider when determining whether to use this feature: First, this feature is simplistic. You cannot customize it, populate custom fields, fill required fields, or set an assignee.
>
> **[3:07](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=187)** If the create screen has required fields, the user is prompted to fill them in Jira on the first edit action. It's a quick way to get data into Jira, but not a substitute for the feature-rich issue create form. As I mentioned before, the email subject line becomes the issue summary and the entire body becomes the description. Files attached to the email are automatically attached to the issue. Special characters in the attachment file names are changed to underscores. If an issue key is found in the email, the message is added as a comment to the existing issue. If the email's marked urgent or high priority, the Jira issue is created with a higher priority than a default. That's all this feature can do. You'll want to create filters on your mail server to handle auto replies, spam, and large files, or many attachments before that information hits Jira. I don't consider this feature a replacement for the normal issue creation method, but I included it because some organizations find it useful. Here are some additional things to know: This function only supports current Jira users. You could however leverage a dummy email address and a dummy Jira user. Otherwise, issues will not be created when emailed by an unlicensed Jira user, a user outside the company, or a user who sends from an email address different than their Jira profile address. For example, if the address is user@domain1 in Jira and the user sends from user@domain2, no issue will be created.
>
> **[4:41](https://www.linkedin.com/learning/jira-advanced-administration/create-issues-from-email?u=76281980&t=281)** One quick note.: Jira Service Management has its own separate mail handler set up. It uses a built-in processor that doesn't require the sender to be a licensed user. This is so you can communicate with external customers. A single mail handler can only create issues in one Jira project and for one issue type. If you want issues created in multiple projects using multiple issue types, you'll need to create multiple incoming mail handlers. Finally, issue creation via email often silently fails. There are many reasons for a failure. Some are: When the message doesn't have a subject or the sender is a non-Jira user; If the mailbox is locked or it's password has expired; If settings were changed on the mail server, but not in Jira or if the mail server can't connect to Jira. Sometimes other applications intercept messages and take them out of the mailbox before Jira does. And finally, issue creation silently fails when the project's lead, default assignee, or default reporter are inactive users. Unless you're actively monitoring the logs, you're unlikely to notice message creation failure. Set the expectation with your users that the mailbox's owner needs to monitor the box and report any Jira issue creation discrepancies.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (37), [[Atlassian]] (2)
> **Tools:** jira (37)
> **Env Vars:** pop (2), imap (2)
> **CLI Commands:** make (1), find (1)
> **URLs:** [atlassian.net](https://atlassian.net) (1), [domain.com](https://domain.com) (1)
> **Analogies:** for example (2)
> **Prerequisites:** set up (1), you'll need (1)
> **Definitions:** is a  (1)

#### [Use an issue collector](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=0)** - [Narrator] Another way to get issues into [[Jira]] is to use the issue collector feature. Instead of sending an email message, users can fill out a smaller version of a create form that's embedded on your website or in another application. The benefits of this method is better control of the data submitted from external sources. With this method, users complete form fields so the date is structured and better for reporting. The form can handle custom and required fields. This method also has additional capabilities, like collecting feedback from non-Jira users. The requirements for using this feature are application or project level admin access, and the ability to embed an [[HTML]] or [[JavaScript]] snippet into another website or application. Here's an example of an issue collector embedded on a webpage. The issue collector code creates a button for the user to click. The button's label, placement, and style is customizable. Clicking the button opens an overlay with a Jira create form. When the user submits the form, they see a confirmation message and an issue is created in Jira. To create an issue collector, go to the admin area of any project and click the issue collector's link in the left sidebar, then click the add button. Let's talk about all the issue collector options. First, specify all the internal settings. Give the collector a name and an optional description to identify it inside of Jira. This information is displayed to Jira admins,
>
> **[1:32](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=92)** not to web form users. Then, select the type of issue to create. Next, specify all reporter type settings. Select a Jira user as the default reporter. Sometimes organizations specify a dummy or service account. Regardless of who is selected, make sure the user has the create issues permission in the project. If the web form users are also Jira users, change the radio button setting to match submitter. Jira will populate the submitter as the reporter if the email address entered matches a Jira user email address. Finally, select the collect browser info checkbox if system details are helpful for your use case. These additional details are useful for bug reports or website feedback. The next settings are for the trigger button that opens the web form. Enter a custom name and select a style option. If you select the custom option, you can use JavaScript to customize trigger behavior. The final settings are for the web form. The first template is for general website feedback. And the second is for reporting bugs. For the templates, the only thing you can customize is the message displayed to the user. Here's a tip: you can use Jira Wiki markup to format this message. The third template labeled "Custom" is more like a Jira issue create screen. You can customize the message and select a few Jira fields to include. Once you've made all the desired selections, click the form submission button
>
> **[3:04](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=184)** at the bottom of the page. On the next page is the code snippet to embed in your webpage or application. Choose between HTML or JavaScript using the tabs pictured. The code includes the URL of the Jira application and a unique number for the issue collector. The great thing about the snippet is that once you embed it, you don't have to touch it again. You can change issue collector settings in Jira without changing the snippet. Let's go back to the issue collector page on the project admin area. This project has two different issue collectors for two different purposes. Click the link in the name column to see [[Statistics]] and collector details. Hover over the activity column to see account of issues created or click the edit button to change settings. Application administrators can also see collectors across all projects in the system admin area. Here are the factors to consider for this feature: you can have none, one, or many issue collectors per Jira project. They aren't created by default, but you can have as many as you want. You can also embed multiple collectors in the single webpage using custom triggers. The web [[Forms]] are easy to embed, trigger, and complete. If collector settings change in Jira, you won't have to change the embed code. There is some browser caching though, so be aware of that if you're trying to test collector setting changes. Finally, there are three collector templates to choose from. Try them all and see which best supports your use case. If you're having trouble,
>
> **[4:37](https://www.linkedin.com/learning/jira-advanced-administration/use-an-issue-collector?u=76281980&t=277)** here are some things to check. Submit the web form as an end user to see if there are any onscreen errors. Also check the issue collector page for errors. A common error starts out with a copy: "Oops, something went wrong." This is usually caused by a missing required field, a permission issue, or app incompatibility. Next, verify that default reporter selected has the create issues permission. If you have server or data center, check the application logs for additional error details. Finally, when all else fails, I recreate the collector and re-embed the snippet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (17), [[JavaScript]] (3), [[HTML]] (2), [[Statistics]] (1), [[Forms]] (1)
> **Tools:** jira (17)
> **UI Navigation:** select the (3), go to (1), checkbox (1)
> **Env Vars:** html (2), url (1)
> **Exercise Files:** template (2)
> **Warnings:** be aware (1), common error (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)

#### [Use automation](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=0)** - [Instructor] In this section, we'll talk about using automation to improve [[Data Quality]], and to make your life easier. You probably use automation every day without thinking about it. Today, we have self-driving vehicles, cameras at the front door to alert us when a package has arrived, and robots that do everything, from build ships, to vacuum our floors. All those tasks used to be manual, but through the power of technology, they're automated. Automation means making a process or a system operate automatically. [[Jira]] admins are busy people. What if there was a way to eliminate the more mundane tasks so you can focus on projects that are more interesting, and deliver more value? What if you could use technology to accomplish things faster? That's the role of automation in JIRA. You can create roles to automate JIRA actions based on criteria you set. Automation helps complete work faster, and makes it easier. Instead of sending an email when there's an outage, let JIRA send the email, alert the team in their chatroom, and communicate with the monitoring software. We can use automation to reduce manual work, and eliminate tasks we do over and over. For example, when all stories are complete, automatically close the epic. Or, when it's time to do regression testing, automatically create all the test cases and kick off the tests. Finally, software can help improve data quality and reduce human error. For example, automatically sum up expenses and report them to the finance team each week. Think of a JIRA task you don't love to do. There might be a way to automate it.
>
> **[1:34](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=94)** Think of something your users frequently forget to do. There might be a way to automate that too. Let's discuss ways to automate work, and the different JIRA deployment methods. In Cloud, JIRA software has built-in automation, or you can use a variety of marketplace apps. In JIRA Service Management, there are also some legacy capabilities that will one day be de-commissioned. At that time, [[Atlassian]] will automatically migrate any rules from the legacy version to the new version for you. In Server and Data Center, JIRA software doesn't come with automation, but you can add it with an app. JIRA Service Management does have some built in automation features, however. We'll cover those in another course for JSM administration. Let's talk a little more about the built in automation in JIRA Software Cloud. As previously discussed, there are multiple cloud plans. There's no limit to the number of rules you can create, but there are limits on rule scope and execution. In the Free and Standard plans, rules are limited to a single project. That means you'll need to create the same rule multiple times to use it in multiple projects. An execution is how many times a rule runs per month. The limits are as shown. In the Premium plan, the limit is per user and per month. Let's say you have 100 users. 100 times 1,000 is 100,000 executions per month. Here's an example of the built in no code automation in JIRA Software Cloud. Both project and application admins
>
> **[3:06](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=186)** can create these rules. This rule automatically closes duplicate issues. On the left are the if-then statements. In the example, when an issue is linked as a dupe and the status is not done, the issue automatically transitions to done. On the right are the rule details. Name the rule, give it an optional description, and make any other desired selections. Here is the result. I linked Demo 60 to Demo 59 as a dupe. After, the automation stepped in and automatically changed the status of Demo 60 to Done. No user intervention required, awesome. To manage automations, go to the Admin area of any project, and click the Automation link in the left sidebar. Use the tabs at the top to access the rule list, the audit log, and the library of pre-written examples. I have a lot of old issues in my application, how about you? We can use a JQL statement to find them, and create an automation to automatically close them. To create a new rule, click the button on the right. The first step is to select a trigger. Triggers listen for events and start rule execution. Triggers can detect when a field or status value changes, an issue is created, assigned or closed, a link or a comment is added, an SLA is reached, a build succeeds or fails, or a JQL query returns issues. Filter the trigger options using the drop-down menu, or search for a specific one by name.
>
> **[4:39](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=279)** In this example, I'll use the Schedule trigger. Next, select the desired trigger settings. You can schedule the trigger on a fixed frequency, or you can use a cron job. At the bottom of the screenshot, I've entered a JQL query to find the relevant issues. Anytime you enter JQL, click the Validate Query link to make sure the query is correct and returns the expected issues. Once all the options are set as desired, click the Form Submission button to save the trigger. After we've configured the trigger, we can add actions or conditions. Actions are used to perform tasks, like creating, assigning, or editing issues. There are also actions to create versions, send emails, or notify chat rooms. Conditions can further refine rules. A condition must be met for the rule to continue running. For example, does a field or user match certain criteria? There are lots of possibilities to choose from. Let's add an action to our example rule. I'll choose the Transition Issue action. Then, I'll select the desired status, and click the Form Submission button. Let's add one more action. I'll use the Comment on Issue action to add a comment to all issues I'm closing. Then, click the Form Submission button. The final step is to name the automation and enable it. That's it. From here, you can run the rule, return to the rule list, or disable the rule. We used a simple example, but it's easy to make complex and powerful rules too. In addition to all the triggers,
>
> **[6:11](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=371)** conditions, and actions, you can also use variables called smart values to access and manipulate JIRA issue data. I think you'll find building automation rules both fun and useful. Let's go back to the Automation page in the JIRA Project Admin area. The rule we created is listed. Click on the rules name to edit it and access additional settings. On the left of the Rule Details page, click any trigger, action, or condition to modify them. On the right, you can edit additional details. At the bottom of the page are some useful settings. You can email the owner if a rule fails, change the owner, and set the actor. The actor is the user the action is attributed to. I'd like to use the default shown, so the issue history shows that an action was performed by the automation user, and not by me personally. If you're using an app for automation, I recommend creating a service account for this purpose. Application administrators can also see rules across all projects in the System Admin area. This view contains a handy Usage link so you can see how close you are to the execution limit. Sometimes, rules have errors or don't operate how we expect. Luckily, there are many ways to spot errors. First, there's an icon in the rule list. In this screenshot, the example rule has a problem to troubleshoot. Errors are also shown in the audit log. Click the link on the right for additional details. Finally, if enabled, the rule's owner will receive an email notification.
>
> **[7:44](https://www.linkedin.com/learning/jira-advanced-administration/use-automation?u=76281980&t=464)** So, can you guess the cause of the error? I broke the cardinal sin of workflows. I closed an issue without setting a resolution. Luckily, this is easy to fix. I can edit the transition action to include a resolution, or I can add an Edit Issue action, and set it that way, if desired. There's a great website to try out automations without impacting your JIRA application. It's called the Automation Playground. It's a great way to see new ideas, and see what your colleagues are building. Visit the Sandbox website at the URL shown. If you're not using JIRA Cloud built-in automation, there are lots of automation apps in the Atlassian Marketplace. Some apps provide specific automations, like creating new issues on transition, or calculating fields. Some provide rules for workflows, issue events, or scheduled events. Some apps have point and click rules, scripting capabilities, or both. Search for automation or workflow in the Atlassian Marketplace to see the options.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (16), [[Atlassian]] (3), [[Data Quality]] (2)
> **Env Vars:** jira (16), jql (4), jsm (1), sla (1), url (1)
> **Tools:** jira (16)
> **CLI Commands:** make (4), find (3)
> **UI Navigation:** select the (2), go to (1), click on (1)
> **Analogies:** for example (3)
> **Cross-References:** go back to (1)
> **Warnings:** troubleshoot (1)

#### [Challenge: Create an issue collector](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-an-issue-collector?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-an-issue-collector?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/jira-advanced-administration/challenge-create-an-issue-collector?u=76281980&t=5)** - [Instructor] In this challenge, you'll create an issue collector to embed in a webpage or application. First, choose a [[Jira]] project, configure the collector in the project admin area and embed the collector as desired. You can choose any collector settings or template you like.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (1)
> **Tools:** jira (1)
> **Exercise Files:** template (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Create an issue collector](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-an-issue-collector?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/solution-create-an-issue-collector?u=76281980&t=0)** - [Instructor] Were you able to create an issue collector? Here's how to do it. First, visit the issue collector's page in the project admin section. Then click the button at the top right. Next, add a name and an optional description. I'll select a reporter and then review the remaining selections. I'll keep the default settings and click the form submission button. Next, copy of the [[HTML]] or [[JavaScript]] and embedded as desired. Then complete the web form to test the issue collector. Also make sure the issue was successfully created in [[Jira]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1), [[JavaScript]] (1), [[Jira]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** html (1)
> **Tools:** jira (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=0)** - [Narrator] Congrats on completing the course. You've explored the major areas of the [[Jira]] configuration and helped create a strong foundation that will serve you well for years to come. You should now be able to configure the most important global and project settings, create, modify and remove schemes, create custom elements like fields, workflows and events, use groups and roles to grant and restrict application, project and issue access, extend Jira using apps, connections and integrations, and use advanced features like create via email, the issue collector and automation. Your next step is to continue learning. There's always more to learn and new Jira features are added all the time. There are a ton of resources available. You just have to know where to look, seek them out and put in a little time and effort. My "9 Ways to Learn Jira Administration" article will point you in the right direction. As you've probably heard, [[Atlassian]] stopped selling new licenses of server [[Microsoft Products|products]] in February of 2021 and support for server products ends on February 2nd, 2024. So what should you do if you have Jira server? Customers will need to switch to Data Center, migrate to Atlassian hosted cloud products or make alternate plans. That's why I teamed up with Atlassian's solution partner, Botron Atlassian Apps, to create The Ultimate Guide to Jira Migrations, How to migrate from Jira Server to Data Center or Cloud. Download your free 180 page migration merge and consolidation guide from the URL shown.
>
> **[1:34](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=94)** I also worked with Atlassian to create a Cloud Migration Runbook, sample communication templates and a cloud specific checklist. Download these resources at the URL shown. Here are some additional resources so you can continue learning. Atlassian's product documentation contains a guide specifically for administrators. All the information is categorized by application type and version. Make sure you're reading the right information. Next, visit support.[atlassian.com](https://atlassian.com) for vendor help or to report a bug. In Server and Data Center, you can also visit the troubleshooting and support tools admin page to create a support zip to send to Atlassian. The support zip feature exports logs and configuration info to help the vendor troubleshoot problems. The Atlassian online community is where you'll find answers, support and inspiration from other users. Log in with your Atlassian ID at community.[atlassian.com](https://atlassian.com). You can ask a question or start a discussion. There are also plenty of Jira themed groups on [[LinkedIn]] and [[Facebook]]. Next, studying for Atlassian Certification is a great way to learn more about Jira. The test is challenging, but the certification experience made me a better admin. Don't be discouraged if you need to take the exam more than once. The final resource is the JIRA Strategy Admin Workbook. It saves time, money and frustration. This book is different. It's not documentation. It's recommendations from years of cleaning up horrible Jira configurations. It's about what you should do, shouldn't do and why.
>
> **[3:10](https://www.linkedin.com/learning/jira-advanced-administration/next-steps?u=76281980&t=190)** Get the book and additional materials at [jirastrategy.com](https://jirastrategy.com). I hope you enjoyed this advanced Jira administration course, as much as I enjoyed creating it. Now it's time to get your course completion certificate. When you share your certificate, tag me so I can celebrate your accomplishment and share it with my network too. If you have Jira questions, I'd love to hear from you. Use the Q&A feature, email me directly or connect in social media. Good luck with your Jira journey and I'll see you online.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (14), [[Atlassian]] (12), [[Microsoft Products|Products]] (3), [[LinkedIn]] (1), [[Facebook]] (1)
> **Tools:** jira (14)
> **CLI Commands:** make (2), find (1)
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