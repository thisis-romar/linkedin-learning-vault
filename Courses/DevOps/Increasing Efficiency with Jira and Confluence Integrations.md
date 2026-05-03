---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: increasing-efficiency-with-jira-and-confluence-integrations
url: "https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations"
duration_minutes: 76
duration: 1h 16m
level: Advanced
updated: 1/30/2025
learners: 6463
skills:
  - Confluence
  - Jira
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQGZj-Shd3WT5w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1737506682351?e=2147483647&amp;v=beta&amp;t=qg32WzGnKakfj7uDZiakPx1MQEJ1iBAJCVKIaNkXONI"
linkedin_topic: DevOps
learning_paths:
  - '[[Mastering Jira for Software Developers]]'
  - '[[Mastering Jira Administration]]'
prev_courses:
  - '[[Planning and Releasing Software with Jira]]'
  - '[[Jira Administration- Automation]]'
path_nav: '[{"path":"Mastering Jira for Software Developers","position":4,"total":4,"prev":"Planning and Releasing Software with Jira","next":null},{"path":"Mastering Jira Administration","position":7,"total":7,"prev":"Jira Administration- Automation","next":null}]'
path_count: 2
tags:
  - course
  - topic/devops
  - topic/software-development
  - topic/network-and-system-administration
  - skill/confluence
  - skill/jira
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Increasing%20Efficiency%20with%20Jira%20and%20Confluence%20Integrations.md)

![Increasing Efficiency with Jira and Confluence Integrations](https://media.licdn.com/dms/image/v2/D4D0DAQGZj-Shd3WT5w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1737506682351?e=2147483647&amp;v=beta&amp;t=qg32WzGnKakfj7uDZiakPx1MQEJ1iBAJCVKIaNkXONI)

# Increasing Efficiency with Jira and Confluence Integrations

> Get the most out of your Atlassian applications by connecting Jira and Confluence. By combining Jira's task and service management capabilities with Confluence's documentation, collaboration, and knowledge base features, you'll save time and avoid duplication that is common when using multiple separate applications. In this course, learn how to use Jira and Confluence together to collaborate effec

> [LinkedIn Learning](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations) | 1h 16m | Advanced | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Using Jira and Confluence together](#using-jira-and-confluence-together)
  - [Who is this course for?](#who-is-this-course-for)
  - [What do you need for this course?](#what-do-you-need-for-this-course)
  - [Important terms and definitions](#important-terms-and-definitions)
- [**1. Managing Work in Jira and Confluence**](#1-managing-work-in-jira-and-confluence) (5 videos)
  - [Tracking work in Jira](#tracking-work-in-jira)
  - [Collaborating in Confluence](#collaborating-in-confluence)
  - [Application similarities and differences](#application-similarities-and-differences)
  - [Benefits and common connection points](#benefits-and-common-connection-points)
  - [Course use case](#course-use-case)
- [**2. Setting Up and Connecting Applications**](#2-setting-up-and-connecting-applications) (6 videos)
  - [Creating applications](#creating-applications)
  - [Connecting applications](#connecting-applications)
  - [Organizing information](#organizing-information)
  - [Creating Jira projects](#creating-jira-projects)
  - [Creating Confluence spaces](#creating-confluence-spaces)
  - [Connecting projects and spaces](#connecting-projects-and-spaces)
- [**3. Using Confluence and Jira Together**](#3-using-confluence-and-jira-together) (8 videos)
  - [Course use case set up](#course-use-case-set-up)
  - [Linking issues to pages](#linking-issues-to-pages)
  - [Linking pages to issues](#linking-pages-to-issues)
  - [Creating issues from pages](#creating-issues-from-pages)
  - [Creating issues from tables](#creating-issues-from-tables)
  - [Creating Jira reports in Confluence](#creating-jira-reports-in-confluence)
  - [Configuring a knowledge base](#configuring-a-knowledge-base)
  - [Using Atlassian Intelligence](#using-atlassian-intelligence)
- [**Conclusion**](#conclusion) (1 videos)
  - [Additional resources for Jira and Confluence learning](#additional-resources-for-jira-and-confluence-learning)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Using Jira and Confluence together](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/using-jira-and-confluence-together?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/using-jira-and-confluence-together?u=76281980&t=0)** - The way to get the most out of your [[Atlassian]] applications is by connecting them. In this course, you'll learn how to use [[Jira]] and [[Confluence]] together to collaborate effectively with multiple teams and streamline your work processes. I'll show you how to unlock invaluable synergies using the integration points in both applications. Hi, I'm Rachel Wright, certified Jira administrator and author of the Jira Strategy Admin Workbook. Join my [[LinkedIn]] learning course to learn how to connect your applications to collaborate, save time and effort, and avoid duplication.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (3), [[Atlassian]] (1), [[Confluence]] (1), [[LinkedIn]] (1)
> **Tools:** jira (3), confluence (1)
> **Speakers:** - the (1)

#### [Who is this course for?](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/who-is-this-course-for?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/who-is-this-course-for?u=76281980&t=0)** - You may be a [[Jira]] or [[Confluence]] application administrator, project or space administrator, or user. Or you might be a project manager, [[Scrum]] master, or product manager. This course is for anyone interested in improving [[Team Collaboration]]. [[Atlassian]] offers many different [[Microsoft Products|products]]. The content in this course applies to Jira, Jira Service Management, and Confluence. There are also different deployment types, but don't worry. The concepts apply whether you have cloud, server, or data center. The visuals in this course will show cloud products, but the benefits and concepts are similar, regardless of deployment type. Don't worry if your application looks different than mine. You might have different colors, a different layout, and customization specific to your company. If you're new to Jira, I recommend taking my end user courses first. There's a version of Learning Jira for cloud and another version for server and data center. This course assumes you already know how to create, edit, and transition issues, work in Jira projects, and search for and find issues. You might also be interested in my [[Learning Jira Software]] course, which covers development-specific features, and my [[Planning and Releasing Software with Jira]] course to learn how Jira, Confluence and [[Bitbucket]] work together to support the entire development process. This course helps
>
> **[1:34](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/who-is-this-course-for?u=76281980&t=94)** Jira and Confluence users and administrators save time and avoid duplication that's common when using multiple separate applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (10), [[Confluence]] (4), [[Microsoft Products|Products]] (2), [[Scrum]] (1), [[Team Collaboration]] (1)
> **Tools:** jira (10), confluence (4), bitbucket (1)
> **CLI Commands:** find (1)
> **Speakers:** - you (1)

#### [What do you need for this course?](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/what-do-you-need-for-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/what-do-you-need-for-this-course?u=76281980&t=0)** - Ideally, you'll have some end-[[User Experience (UX)|user experience]] creating, editing, and transitioning [[Jira]] issues and creating pages in [[Confluence]]. It's also helpful to have Jira project admin, Confluence space admin, or higher permissions. But don't worry if you don't have those capabilities right now. After this course, you'll have enough information to approach the users who do to either ask them to enhance your permissions, or make the needed connections for you. It's also helpful to have a test environment. In a later course section, we'll create new Jira and Confluence cloud instances for experimentation. Next, I wanted to mention that it's really hard to keep up with software changes. New features are added, moved, or changed all the time. Existing features or even entire [[Microsoft Products|products]] are renamed, and links that worked yesterday are broken today. That's why I've set up a special place on my website where you can get the latest course information. When something impactful to the course changes, I'll post that information at the URL shown. Now's a good time to bookmark that location. Go ahead, I'll wait. Here are some tips for getting the most out of this course. For some of you, I speak too slowly, and for others I speak too fast. Luckily, the [[LinkedIn]] video player has some useful features to help you move at your own pace. On the bottom left, use the skip back icon to rewind 10 seconds and hear information again.
>
> **[1:34](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/what-do-you-need-for-this-course?u=76281980&t=94)** On the bottom right, use the 1x icon to increase or decrease the speed. Also consider using the captions feature if that's helpful. I also recommend opening your test application in a separate browser window so you can follow along with me. Just pause the video, explore the same area in your application, and come on back. In the next section, we'll define the important Jira and Confluence terms so you can best utilize the content in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (4), [[Confluence]] (4), [[User Experience (UX)|User experience]] (1), [[Microsoft Products|Products]] (1), [[LinkedIn]] (1)
> **Tools:** jira (4), confluence (4)
> **CLI Commands:** make (1)
> **Env Vars:** url (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - ideally (1)

#### [Important terms and definitions](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/important-terms-and-definitions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/important-terms-and-definitions?u=76281980&t=0)** - Here are some important [[Jira]], Jira Service Management and [[Confluence]] terms to know. I'll also explain [[Atlassian]]'s user account model in cloud. This course includes multiple Atlassian application types. Jira Work Management in cloud and Jira Core in server and data center are built for business teams tracking tasks and initiatives. Jira software is built for software teams tracking development activities like releasing new features, deploying code, and fixing bugs. In May, 2024, Atlassian announced that these application types are combined under the brand name Jira. Jira Service Management or JSM for short is built for help and support teams managing requests from internal or external customers. And the final application type we'll cover is Confluence, a collaboration and documentation solution for any type of user. An application link is a connection between Atlassian [[Microsoft Products|products]] or external applications. Later in the course, we'll use an application link to connect Jira and Confluence so they can access each other's data. Here are some specific Jira terms to know. An issue is an individual item in Jira. Each time you create an item, you're creating a new issue with a unique key to identify it. A project is a collection of issues. Now, the [[Microsoft Word|word]] project in Jira is different than an initiative your team is working on outside of Jira.
>
> **[1:35](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/important-terms-and-definitions?u=76281980&t=95)** Think of a Jira project as a container for all your team's initiatives, tasks, and to do items. In this course, I'll try to say project when talking about Jira and initiative when talking about work outside of Jira. The cloud project types are called business, software, Jira Service Management, and Jira Product Discovery. In server and data center, they're called software, service and business. A query is a search or a way to answer a question, like, which issues are assigned to me, or which bugs did the marketing team report last month? In Jira, JQL means Jira Query Language. It's the way to find a subset of issues when there are millions in the database. JQL powers JIRA features like boards, [[Dashboards]], and reports. A filter is a saved JQL search to use again or share with colleagues. A dashboard is a statistic-based view of issues. Dashboards are powered by one or more JQL filters. A gadget displays dynamic content on a Jira dashboard. There are many types of gadgets like charts, graphs, and lists. A wallboard is a Jira dashboard that's designed to radiate information on a TV monitor. This is the same information showed in the previous screenshot, but the Jira header and navigation elements are removed.
>
> **[3:11](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/important-terms-and-definitions?u=76281980&t=191)** This leaves more room for dynamic data to display on a screen in a conference room, for example. A board is a status-based view of issues from one or more projects. Users can drag issues between columns, which is the same as transitioning issues to another step in the workflow. A linked issue creates an association between issues. An issue can be linked to any other issue regardless of Jira project or type. One more thing before we move on. Cloud also has company-managed and team-managed project types. Company-managed projects use schemes that are configured by Jira administrators. Team-managed projects are schemeless and are managed by regular users. In this course, we'll leverage the company-managed project type. Here are some JSM specific terms to know. The self-service portal is a simplified interface that customers use to submit requests. You'll also see it called other names like the customer portal, help center, help desk, or service desk. Each service project has its own customer portal. Your application may have one project and portal or one project and portal per support function. The Jira Service Management application type has individual requests. Requests are how Jira issues are represented on the self-service portal to customers or end users.
>
> **[4:46](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/important-terms-and-definitions?u=76281980&t=286)** In other words, a request is a simplified view of issue data. Here's an example trouble report for a problem with the mail server. On the left is the issue view in Jira and on the right is the request view in JSM. It's important to note that both views represent the exact same trouble report. There's only one unique record in the database for it. The unique key for this trouble report is IT-1, and that ID is shown at the top of both views. Both screenshots show the same information, but the way it's displayed is different for different audiences. The comprehensive view on the left is intended for use by support team members. The simplified view on the right is intended for end users. Finally, here are some Confluence-specific terms. Think of a Confluence page as an online document. Pages are used for current, evergreen, or historical content like documentation or team policies. Pages are created, updated, and archived over time. A blog post is also an online document, but it's used for time-based content like news or announcements. Posts are organized by publish date, like blog articles on a website. In this course, I'll refer to pages and posts interchangeably or simply ask Confluence content. Pages and posts contain different types of content,
>
> **[6:22](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/important-terms-and-definitions?u=76281980&t=382)** like text, links, images, and embedded information like videos, attachments, macros, and more. A macro is a way to add extra functionality or dynamic information to Confluence content. For example, use the Atlassian Intelligence macro to summarize or generate copy, or use the Jira Issues macro to insert a dynamic list of Jira issues including their realtime status in a Confluence page. Pages, posts and attachments belong to a space which is a collection of Confluence content. There are two types of spaces, global and personal. A global space is a container for team information. It's a shared area where users view, create, edit, and store content. There's generally one global space per department, team, or for large initiatives that involve multiple teams. For example, a Confluence global space called facilities for [[Microsoft Office|office]] information, policies, and request [[Forms]]. A personal space is just what it sounds like. It's an area to store your own information or content you're working on that's not quite ready to share with others yet. A personal space contains content for or about just one user. For example, my personal space contains an About Me page,
>
> **[7:57](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/important-terms-and-definitions?u=76281980&t=477)** sub pages for quarterly goals, miscellaneous checklists, and links. Finally, in addition to linking Jira issues to other issues, JIRA issues can also be linked to Confluence content and vice versa. Here are some Atlassian cloud and account-specific terms to know. I'll also explain the user account model in cloud. An organization is a container for your users and products like Jira, Confluence, [[Bitbucket]], and more. Each organization has a site with a unique URL in the format sitename.[atlassian.net](https://atlassian.net). Here's an example. This organization has a site at the URL company.[atlassian.net](https://atlassian.net). The site has three products, JIRA, Confluence, and Jira Service Management. It's possible for an organization to have multiple sites with multiple products. In the example, there's a second site for the company's UK office with a different site URL. The second site has separate Jira and Confluence applications. Next, a domain is a unique address on the internet like [company.com](https://company.com) or [external-vendor.com](https://external-vendor.com). When you verify a domain with Atlassian, you confirm ownership of the domain and claim all user accounts in that domain. An Atlassian user account,
>
> **[9:31](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/important-terms-and-definitions?u=76281980&t=571)** also sometimes called an Atlassian ID, represents a user's online Atlassian identity. The account includes attributes like a first and last name and a unique email address. The account allows users to log into Atlassian products with one set of credentials. It's similar to a [[Google]] account where one username grants access to multiple products like Gmail, Docs and YouTube. When an Atlassian account is part of a claimed domain, it's called a managed account. Admins can edit, delete, or deactivate managed accounts or apply security policies like two-factor authentication or single sign on. The example shows a verified domain and three user accounts. With @[company.com](https://company.com) email addresses. These users have access to their organization's application within Site 1. There's also a separate verified domain containing managed accounts for different users. The users with UK email addresses have access to their organization's applications within Sight 2. Finally, there are two additional users that are part of the [external-vendor.com](https://external-vendor.com) domain. I can't claim that domain because my organization doesn't own it, but I can still give those users access to Atlassian products. Since those external user accounts are not part of my organization, I can't manage them or apply global security policies.
>
> **[11:09](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/important-terms-and-definitions?u=76281980&t=669)** Admins can manage organizations, sites, products, and users at admin.[atlassian.com](https://atlassian.com). This course contains a lot of Jira and Confluence-specific terminology. I've made a glossary to help you with it for this course and when navigating the Atlassian ecosystem. Download my handout from the Exercise files area in [[LinkedIn]] Learning. In the next section, we'll create new applications, connect them, and discuss an example use case to leverage both applications together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (37), [[Atlassian]] (17), [[Confluence]] (15), [[Microsoft Products|Products]] (8), [[Dashboards]] (2)
> **Tools:** jira (37), confluence (15), bitbucket (1)
> **Definitions:** is a  (14), is an  (1), in other words (1)
> **Env Vars:** jql (4), jsm (3), jira (3), url (3)
> **URLs:** [atlassian.net](https://atlassian.net) (2), [company.com](https://company.com) (2), [external-vendor.com](https://external-vendor.com) (2), [atlassian.com](https://atlassian.com) (1)
> **Analogies:** for example (4), similar to (1)
> **Cross-References:** later in (1), in the next (1)
> **CLI Commands:** find (1)


### 1. Managing Work in Jira and Confluence

[↑ Back to Table of Contents](#table-of-contents)

#### [Tracking work in Jira](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/tracking-work-in-jira?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/tracking-work-in-jira?u=76281980&t=0)** - In this section, I'll provide a brief overview of [[Jira]] and Jira Service Management's work tracking capabilities. Jira is software for issue tracking, bug tracking, and project management. It digitizes your wall of sticky notes. Jira helps teams of all types manage their work. When Jira was first released in 2002, it was purely for [[Software Development]]. But these days, all kinds of teams like marketing, finance, facilities, HR, and IT use Jira. All industries use it to track their work and their teams' to-do list. Jira's not just for software development anymore. Jira is essentially a big database where work is trackable, searchable, and sortable. You can use it to track your own work, schedule work for your team members, or collect and prioritize work for other teams. Here are some examples. The procurement team can track equipment purchases. The marketing team can collect customer communication ideas and plan when to implement them. The compliance team can record vulnerabilities and prioritize which to address first. And of course, the development team can track improvements, develop new features, and report and fix bugs. To track work, simply create a new Jira issue. Click the Create button on the top of any page. Then select the desired project, issue type,
>
> **[1:35](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/tracking-work-in-jira?u=76281980&t=95)** and enter any other relevant information. Finally, click the form submission button. The issue is created with a unique key and ID. Assign the issue to the correct person, and transition the issue through the workflow as progress is made. In May, 2024, [[Atlassian]] announced that Jira software and Jira Work Management are combined under the brand name Jira. This means there's now a single unified platform. For example, software teams can now see their issues in a timeline or calendar view, which was once only available in business projects. If your organization has separate Jira Work Management and Jira software subscriptions, Atlassian will automatically merge your users into one Jira subscription at the beginning of 2025. See the licensing documentation for additional information. This change only impacts cloud customers, there's no concept of Jira Work Management in server or data center. Another type of Jira is Jira Service Management or JSM for short. It helps support and service teams of all types manage requests. JSM is ideal for tracking changes to systems, processes, or applications, resolving incidents and problems like an outage or security breach,
>
> **[3:08](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/tracking-work-in-jira?u=76281980&t=188)** fulfilling service requests like a password reset, new [[Hardware]], or issuing a mobile device, managing approvals of all kinds, and helping internal or external customers with whatever they need. And JSM is not just for IT teams. If you think about it, most teams have some sort of customer that they support. For example, the HR team's customers are the employees, and they have plenty of requests, policies, and paperwork to manage. The HR team likely processes new hire requests, vacation requests, benefits questions, and much more. This team and any team with a support function can make request management easier with Jira Service Management. JSM has a simple self-service interface called the Customer Portal. Internal or external customers use this view to file support requests and monitor progress. It also has support-specific features like queues, service-level agreements, approvals, knowledge-base integration, and more. To raise a request, simply visit the Customer Portal. Select the specific service desk if there's more than one, then select the request type. Then enter any relevant information and click the form submission button. Just like before, an issue is created
>
> **[4:40](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/tracking-work-in-jira?u=76281980&t=280)** with a unique key and ID. The requester can communicate with a support team and track their request's progress here in the portal. The support team member can address the request and transition it through the workflow as progress is made. Atlassian tools all connect to each other. For example, here's a change request in a service management project. It's related to a large initiative in a software development project. This change request will remain in its current status until the development team is done with their implementation work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (19), [[Software Development]] (3), [[Atlassian]] (3), [[Hardware]] (1)
> **Tools:** jira (19)
> **Env Vars:** jsm (4)
> **Analogies:** for example (3), just like (1)
> **UI Navigation:** select the (3)
> **CLI Commands:** make (1)
> **Speakers:** - in (1)

#### [Collaborating in Confluence](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/collaborating-in-confluence?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/collaborating-in-confluence?u=76281980&t=0)** - In this section, I'll provide a brief overview of [[Confluence]]'s collaboration and knowledge base features. Confluence helps all types of organizations collaborate, plan, and store information. It serves as an internet for your company, a documentation or file repository, and an information portal for your internal and external users. Confluence is flexible and easy to learn, even for non-technical users. It helps any team collaborate and organize information in a shared space. Confluence was first introduced in 2003 as a Wiki for users to publish, edit, and organize content. You can use Confluence to share information, collaborate in real time, and track decisions. In Confluence, multiple users can update the same content at the same time. You may have seen this capability in other applications like [[Google]] Docs. You can also see what other users are typing as they enter information. You can document organization details and processes. For example, the HR team can document the 30 day new hire orientation procedure, or the finance team can post steps to request expense reimbursement. The design team can share specs and mockups. You can embed or attach files, images, videos, and diagrams. There's no need to send files over email
>
> **[1:36](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/collaborating-in-confluence?u=76281980&t=96)** or save them on a shared drive. Users can leverage built-in templates to record meeting notes, document product requirements, write how to articles, create checklists and more. Or you can create your own custom templates and blueprints for consistency and standardization. To create new content in Confluence, simply click the create button at the top of the page and choose a content type. Then select a template. If desired, give the page a unique title. Add the desired content and publish the page. As I mentioned before, [[Atlassian]] tools all connect to each other. For example, here's a [[Jira]] project connected to a Confluence space. Users can view and create Confluence content without ever leaving Jira. Additionally, Confluence can suggest knowledge based content to JSM portal users so they can potentially resolve their own problems. In the example I typed, can't print, and an article with the printer troubleshooting steps was suggested.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Confluence]] (10), [[Jira]] (2), [[Google]] (1), [[Atlassian]] (1)
> **Tools:** confluence (10), jira (2)
> **Analogies:** for example (2)
> **Env Vars:** jsm (1)
> **Exercise Files:** template (1)
> **Speakers:** - in (1)

#### [Application similarities and differences](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/application-similarities-and-differences?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/application-similarities-and-differences?u=76281980&t=0)** - Now let's discuss the similarities and differences between [[Jira]], Jira Service Management and [[Confluence]]. Here are some similarities between the applications. They all have the same look and feel with similar default colors, fonts, and layouts. No matter where you are in the applications, you'll always see the same top navigation bar at the top of the page. The grid icon on the left is the application navigator. Click it to switch between cloud sites, [[Atlassian]] applications, or other linked tools. The next item is the product name and logo image. If you ever get lost, click the logo to return to your homepage. In Jira, the homepage location is configurable for each user. Here's a tip for you and your users. Use the icon in your browser's address bar to determine which application you're in. The first icon in the example is for Jira, the second is for Confluence, and the third is the Atlassian logo. You'll see the logo when visiting admin.[atlassian.com](https://atlassian.com) for user and product management functions in cloud. Application icons are also customizable. Next on the left are the application's main navigation links. Use these to access all different application resources like projects in Jira and spaces in Confluence.
>
> **[1:35](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/application-similarities-and-differences?u=76281980&t=95)** Towards the center of the page is a create button to create new Jira issues or new Confluence content. Finally, use the right side of the navigation to search, read notifications, get help, access application settings, and manage personal profile settings. Both applications have keyboard shortcuts. Type the question mark key to see the shortcut list. Type the C key to create new content in Confluence and new issues in Jira, or type the back slash key to search. Next, some terminology is the same between applications. For example, permissions impacting application access and abilities are called global permissions in all applications. All applications support Wiki markup to insert icons and emojis. For example, type open parentheses, the back slash key and close parentheses to insert a green check mark icon. I use these icons a lot to create visual indicators in description fields, pages, and comments. Just wait until you start trying to use these Wiki markups in other applications. I frequently find myself typing these codes in a [[Microsoft Word|word]] processor, for example, and, of course, that doesn't work. Also, in cloud, users, groups and product subscriptions are all managed in a central area at admin.[atlassian.com](https://atlassian.com).
>
> **[3:11](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/application-similarities-and-differences?u=76281980&t=191)** Now, for some differences. The application types are all intended for different purposes. Here's a quick comparison. Jira is built for business teams and development teams. Business projects are great for teams like marketing, [[Human Resources (HR)|human resources]], legal, sales, and anyone interested in tracking initiatives, processes or tasks. [[Software Projects]] help development teams track new features, improvements and bugs. Software projects include dev-specific features like sprints, story points, backlogs, and integration with tools like Bamboo and [[Bitbucket]]. Jira includes issues, workflow and reporting features. Jira Service Management is designed for service and support teams. JSM adds additional support specific features on top of Jira, like queues, service-level agreements, a simple customer portal and integration with Confluence as a knowledge base. And finally, Confluence content is organized into spaces. It's intended to help teams make decisions, plan, collaborate, share information, and document work. When there's a lot of software, sometimes it's unclear which to use for which purpose. To track work from conception to completion, use an issue tracker like Jira.
>
> **[4:45](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/application-similarities-and-differences?u=76281980&t=285)** To track requests and provide support, use help desk software like Jira Service Management. And to document or organize information, use a collaboration platform or repository like Confluence. The applications all have different user types, licenses, and default access groups. Jira and Confluence have users. Jira Service Management has agents and customers. Here are the different user and license types across multiple Atlassian applications. Users and agents are licensed. Anonymous users and customers are not. Additionally, JSM customers can see Confluence knowledge base content in the customer portal, but they don't need a Confluence license. In Confluence, you only need a license for users who create and edit content or manage the application. Here are some of the default user access groups. Now, keep in mind that these names have changed over the years, so you might have some and not others. Additionally, administrators also add custom groups to segment users for granting permissions, sending notifications and more. Now, here's the tip. Even cloud applications have naming differences depending on when a site was created. For example, my Jira cloud application created in 2014 has Jira users.
>
> **[6:19](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/application-similarities-and-differences?u=76281980&t=379)** One created in 2020 has Jira core users. And another created in 2021 has Jira work management users. They all mean the same thing and are used in the same way. Finally, the admin areas differ between the applications. In Jira, log in as an application administrator and click the cog or gear icon at the top right. A menu of options appears. Depending on your permissions, you'll see links for personal settings at the top, global Jira settings in the middle, and [[User Management]] and billing permissions at the bottom. I'll click the issues link. Now, there's a left sidebar with additional pages for issue-related settings, like issue types, workflows, screens, permissions, and more. Go back to the cog icon to access other application-level settings. For Jira Service Management, there are additional settings in the [[Microsoft Products|products]] menu to be aware of. Look for the JSM header in the left sidebar for additional options. In Confluence, there are fewer settings to configure, so there's just one general admin area. Log in as a Confluence application administrator and click the cog or gear icon at the top right. This takes you straight to the admin area. Access the settings by expanding and collapsing the options in the left sidebar.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (22), [[Confluence]] (14), [[Atlassian]] (5), [[Software Projects]] (2), [[Microsoft Word|Word]] (1)
> **Tools:** jira (22), confluence (14), bitbucket (1)
> **Analogies:** for example (4)
> **Env Vars:** jsm (3)
> **CLI Commands:** find (1), make (1)
> **URLs:** [atlassian.com](https://atlassian.com) (2)
> **Warnings:** keep in mind (1), be aware (1)
> **Cross-References:** go back to (1)

#### [Benefits and common connection points](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/benefits-and-common-connection-points?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/benefits-and-common-connection-points?u=76281980&t=0)** - Now let's explore some integration features and preview things that we'll leverage in the following course sections. There are many benefits to connecting [[Atlassian]] applications. First, information is more visible and accessible when it can be viewed in one place. Everyone can leverage the same information and know what everyone else is working on. Users can embed information from one application into another, so it's easier to access. Users don't have to leave the application they're currently in to get information from somewhere else. Dynamically embedding information means you're always seeing the latest and greatest in real time. Gone are the days of exporting information from one place to import it into another. As we all know, the second information is exported, it's already stale. Connecting applications avoids the need for multiple copies of the same information, which creates a reliable single source of truth. There's no more hunting for information shared via email and wondering if it's still accurate. Finally, using Atlassian applications together helps standardize processes and creates consistency. [[Confluence]] pages have templates, so similar information is presented in a standard format. [[Jira]] issues and JSM requests all follow a similar info collection and progress reporting format. Consistency ensures that users can easily locate
>
> **[1:36](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/benefits-and-common-connection-points?u=76281980&t=96)** and leverage common information. Here are some quick examples of different application connection points. Here's a Jira project. You can tell you're in Jira from the logo at the top left. The Jira project is connected to a companion Confluence space. Users can click the project pages link in the left sidebar to view content from Confluence without leaving Jira. You can also create new Confluence content by choosing a template on the right. Here's a page in a Confluence space. The page uses Jira issue macros to dynamically show Jira issue data. When the issues are updated in Jira, the changes automatically display here in Confluence. This Confluence page shows an entire embedded timeline. The user can expand and collapse epics and filter the issue list just like they would in Jira. Next, users can link Jira issues to other issues, to Confluence pages, to web locations, and more. Here's a Jira issue linked to a Confluence page. The team working on this Epic can easily access its requirements. The link is reciprocal, meaning after its established, it's visible from either application. This Confluence page is linked to multiple Jira issues. Just like you can create Confluence content from Jira,
>
> **[3:10](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/benefits-and-common-connection-points?u=76281980&t=190)** the reverse is also true. Select any copy on a Confluence page to create a Jira issue from it. The selected copy automatically becomes the Jira issue summary. You can create a single issue, or create multiple issues from a confluence table. Next, let's look at a project in Jira service management. The project is linked to a Confluence space to provide knowledge base content for agents fulfilling service requests. You can also display knowledge base content to users in the self-service portal. Here's an example of multiple IT policies. Additionally, knowledge base articles can be automatically displayed based on specific request information. In the example, I started a new [[Hardware]] request and typed "replace fax machine." An article about the replacement policy was automatically presented. This information may help me correctly complete the request. Articles with troubleshooting tips may help end users solve problems immediately themselves. Requests in Jira service management can also be linked to Jira issues. In the example, a customer reported a problem with a coupon code. The support agent linked the request to a bug the dev team is working on. When the bug is fixed, the agent can alert the customer. When applications are linked together, users can quickly switch between them.
>
> **[4:43](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/benefits-and-common-connection-points?u=76281980&t=283)** Click the application navigator grid icon at the top left for links to other applications. In cloud, if you're part of multiple applications or sites, you can switch between those, too. Finally, users can also search for content across multiple applications. In the example, I can search for Jira issues right from Confluence.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (19), [[Confluence]] (15), [[Atlassian]] (2), [[Hardware]] (1)
> **Tools:** jira (19), confluence (15)
> **Analogies:** just like (2)
> **Env Vars:** jsm (1)
> **Exercise Files:** template (1)
> **Speakers:** - now (1)

#### [Course use case](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/course-use-case?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/course-use-case?u=76281980&t=0)** - Here's a sample use case so we can experiment with the capabilities of connected applications. We'll use this example throughout the course. Please feel free to adapt it to the needs of your organization. Let's pretend we're transitioning our weekend woodworking hobby into a full-time business. Our business needs a way to track orders, document materials and costs, and provide post-sales [[Customer Support]]. We'll use a [[Jira]] project for order tracking, a [[Confluence]] space for materials, costs, and support content, and a JSM project for post-sale support. We should always configure applications with the future in mind. Today, this is a small business with just one woodworker, but hopefully in the future, additional team members or external vendors are added to build more projects and to manage functions like marketing, billing, customer service, and more. Don't forget to include future growth and expansion in real use cases. We should always configure applications with the future in mind. Our user account model will be simple. Our organization will have one site with one user account and three [[Microsoft Products|products]]. If you miss the explanation of [[Atlassian]]'s user account model in Cloud, it's in the important terms and definition section at the beginning of the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Customer Support]] (1), [[Jira]] (1), [[Confluence]] (1), [[Microsoft Products|Products]] (1), [[Atlassian]] (1)
> **Tools:** jira (1), confluence (1)
> **Prerequisites:** configure (2)
> **Env Vars:** jsm (1)
> **Definitions:** is a  (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - here (1)


### 2. Setting Up and Connecting Applications

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating applications](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/creating-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/creating-applications?u=76281980&t=0)** - In this section, we'll create new [[Jira]] and [[Confluence]] Cloud instances for experimentation. But before we do, check to see if your organization already has a sandbox or test environment that you can use. A separate environment is the safest way to experiment and explore features without impacting real production data. If you have Jira Cloud Premium or Enterprise, sandbox functionality is already built in. You can create sandboxes, delete them and copy production data at any time. I think the sandbox area is hard to find. Here's how to get to it. In Jira, click the cog icon on the top right and select Billing. On the next page, click the [[Microsoft Products|Products]] link in the top navigation bar. Now, I know it's already highlighted, but click it anyway. Then look for the sandbox link on the left sidebar. If there's no existing test environment, you can set up your own. Options and install instructions are available on my website at [jirastrategy.com](https://jirastrategy.com). You can also sign up for your own free versions of Jira and Confluence Cloud. When you're done with this course, you can keep the free versions for future testing, or for personal projects, like planning your next vacation, or documenting major purchase decisions. Here's how to create brand-new cloud test applications, visit [atlassian.com/software/jira](https://atlassian.com/software/jira), and click Get Jira free.
>
> **[1:35](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/creating-applications?u=76281980&t=95)** Next, enter an email address and click the Sign up button. I recommend creating a special email account just for this test site. Now, type the one-time use code sent to your email address. On the next page, enter your name, choose a password, and click the form submission button. Next, choose a site name. I'll enter woodworking. That name is taken on [[Atlassian]] servers now, so you'll need to enter something different for yourself. Then Atlassian will ask you some getting-started questions, like what kind of work you do and what methodology you use to do the work. They will use this information to create an initial Jira project. Name that initial project anything you'd like. We won't use it for this course's use case, but you can use it for something else, or remove it later. When you've answered all the questions in the welcome wizard, the new Jira application is ready to use. If you created a new account and added a product, a new cloud organization and site was automatically created. Next, we just need to add the other two products. Once one application exists, it's really easy to add others. Click the cog icon at the top right and choose the billing option. On the left sidebar, click Discover new products. Locate Confluence in the list, and click the Try it now button. Then click Next to add the product.
>
> **[3:10](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/creating-applications?u=76281980&t=190)** After Confluence is added, click Close to go back to the new product discovery page. Next, locate the Jira service management product and click the Try it now button. Then click Next to add JSM. Just like with Jira, JSM wants to create a test project immediately. Choose any project type and click the form submission button. After JSM is added, click the Get started button to close the overlay.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (10), [[Confluence]] (4), [[Microsoft Products|Products]] (3), [[Atlassian]] (3)
> **Tools:** jira (10), confluence (4)
> **Env Vars:** jsm (3)
> **Prerequisites:** set up (1), install (1), you'll need (1)
> **URLs:** [jirastrategy.com](https://jirastrategy.com) (1), [atlassian.com](https://atlassian.com) (1)
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **Analogies:** just like (1)

#### [Connecting applications](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/connecting-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/connecting-applications?u=76281980&t=0)** - [Host] In cloud, applications in the same site are automatically connected to each other. For those of you following the course use case, this should be done, but let's verify that the connections are working as expected. We'll also connect a separate application so you know how to do it. Let's see what applications are already connected to this [[Jira]] instance. Log in as an application administrator and go to the [[Microsoft Products|products]] admin area. Then click the application links option in the left sidebar. In data center, you'll find the application links option in the applications admin area instead. And as you can see, the [[Confluence]] product we added in the last section is automatically connected. This connection is managed by [[Atlassian]], so there are no settings to configure or actions to perform. And JSM won't be listed here because it's an extension of Jira. What if you want to connect to products in another cloud site or organization? You can do that and even connect cloud products to data center products and vice versa. Here's how. Click the create link button at the top right. In the overlay, choose the Atlassian product option. Enter a product URL and click the form submission button. I'll link this woodworking Jira application to another Jira application. Review the application URLs and click the continue button. Jira will now redirect you to the other application
>
> **[1:34](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/connecting-applications?u=76281980&t=94)** to finish creating the connection. In the other application, review the application URLs and click continue again. Finally, you'll be redirected back to the original application and we'll see the new connection. Click the ellipsis icon on the right to edit or remove it. I'll remove this additional Jira connection because we don't need it for our woodworking use case. See the documentation for additional information about the app links feature. You can also link cloud products to data center products. Here are the URL formats to use to access your products in cloud. And here are the URL formats for data center products. And of course you can also click the grid icon on the top left to access applications using the application navigator.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (8), [[Jira]] (6), [[Atlassian]] (2), [[Confluence]] (1)
> **Tools:** jira (6), confluence (1)
> **Env Vars:** url (3), jsm (1)
> **CLI Commands:** find (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [host] (1)

#### [Organizing information](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/organizing-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/organizing-information?u=76281980&t=0)** - We need a plan for creating new elements, or customizing configurations. In this section, we'll discuss our goals and some initial considerations so we can have a configuration strategy. When there are a lot of tools, sometimes it's confusing which to use for which purpose. Here's a quick reminder. To track a task from conception to completion, use work management software like [[Jira]]. To document a task, use a collaboration platform and document repository like [[Confluence]]. And to support internal or external users, use a ticketing application like Jira Service Management. Here's the software we need for our use case. We need a Jira business project for order tracking, a global confluence space for documentation, and a JSM project for support. First, let's consider the type of information that we'll store in each application. In Jira, we'll create an issue to represent something the client has asked us to build. We'll enter information like the client's contact details, the specifications they've requested, and order details like the purchase price and date. In Confluence, we'll document the materials, plans, and costs needed to build each item. Then we'll link that information to the corresponding order in Jira. In Jira service management,
>
> **[1:35](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/organizing-information?u=76281980&t=95)** we'll collect self-service requests and provide self-service information like care instructions, and FAQ content. Before we continue, download my list of considerations and requirements for the Jira projects and Confluence spaces. The information is in the exercise files area in [[LinkedIn]] learning. We'll discuss requirements next and implement them in the upcoming course sections. Based on the expected content, let's determine configuration requirements for each application. And here's some questions to get you started. Here's a list of things to consider before creating a new Jira project. Take a minute to think about these questions and how your answers may impact configuration decisions. For the course use case, we'll keep things simple. We'll create a new business project using a common template. We'll use task and sub-task issue types and a simple three-step workflow with the statuses to do, in progress, and done. We'll use the default description field to store order details and client contact information. Then we'll create a couple custom fields to store the purchase date and price. Here are some questions to answer when planning a new Confluence global space. We'll create a new documentation space using the [[Team Collaboration]] template.
>
> **[3:08](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/organizing-information?u=76281980&t=188)** Again, we'll keep things simple. Finally, here are some considerations for planning a new Jira service management project. We'll use a common template to create a new service management project. We'll use the task issue type, which is mapped to a few different request types. We'll use a default workflow with the statuses to do, pending, in progress, and done. In the next section, we'll use these requirements to build each area.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (9), [[Confluence]] (5), [[LinkedIn]] (1), [[Team Collaboration]] (1)
> **Tools:** jira (9), confluence (5)
> **Exercise Files:** template (3), exercise files (1)
> **Env Vars:** jsm (1), faq (1)
> **Cross-References:** in the next (1)
> **Speakers:** - we (1)

#### [Creating Jira projects](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/creating-jira-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/creating-jira-projects?u=76281980&t=0)** - In the last section, we decided what information we will store and crafted some simple requirements for collecting it. Now it's time to create and configure two [[Jira]] projects and a [[Confluence]] space. Just a reminder to download the configuration requirements handout in the exercise files area. First, let's create a new Jira business project. Log into Jira as an application administrator and click the projects option in the main nav. Then click create project. On the next screen, choose a project template, so we have a base configuration to start with. I'll select the project management template, but you could also select blank project or whatever makes the most sense for your use case. Next, enter the project's display name and click show more for additional options. Now I prefer the flexibility and advanced capabilities of company managed projects, so I'll select that option. Then enter a key or prefix for issues in the project. Finally, click the form submission button. Jira will create the project immediately. Next, I'll add two new custom fields for tracking specific order details. Click the cog icon at the top right of the page and select issues. Then on the left sidebar, click custom fields. At the top right of the custom fields page, click the create custom field button. In the overlay, select the date picker field type,
>
> **[1:37](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/creating-jira-projects?u=76281980&t=97)** and click the next button. I'll name the field purchase date. Then click the create button. After field creation, Jira gives you the opportunity to add the new custom field to the project screens. You can also do this later by opening the individual screens and adding the field to each. Next, let's create one more custom field. Click the create custom field button again, and this time select the number field type. I'll name the field price and add it to any screens in the order Jira project. Now our Jira business project for order tracking is ready to use. While we're in Jira, let's also create our use cases Jira service management project for post-sale support. Log in as an application administrator and click the projects option in the main nav. Then click create project. On the next screen, choose a project template. I select the general service management template, but you could also select blank project or whatever best matches how you'll use the project. The creation process for JSM projects is slightly different than business projects. On the next page, select the company managed project type. Next, enter the project's display name and choose a unique key. Then I'll select customer service as the team type and whether anyone can submit requests to the project
>
> **[3:10](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/creating-jira-projects?u=76281980&t=190)** or only people who are directly invited. Finally, click the form submission button. The project is immediately created with some example request types to get us started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (9), [[Confluence]] (1)
> **Tools:** jira (9), confluence (1)
> **UI Navigation:** select the (5)
> **Exercise Files:** template (4), exercise files (1)
> **Env Vars:** jsm (1)
> **Cross-References:** in the last (1)
> **Prerequisites:** configure (1)
> **Speakers:** - in (1)

#### [Creating Confluence spaces](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/creating-confluence-spaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/creating-confluence-spaces?u=76281980&t=0)** - [Instructor] Now that our [[Jira]] projects are created, let's create a [[Confluence]] space for our use case. Log into Confluence as an application administrator and click the Spaces option in the main nav, then click Create a space. On the next screen, enter a name for the space and choose a space type, then expand the next section. Enter the desired space key, and click the form submission button. On the next page, enable or disable any features as desired, and click the final submission button to immediately create the space.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Confluence]] (2), [[Jira]] (1)
> **Tools:** confluence (2), jira (1)
> **Speakers:** - [instructor] (1)

#### [Connecting projects and spaces](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/connecting-projects-and-spaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/connecting-projects-and-spaces?u=76281980&t=0)** - In the last section, we created two [[Jira]] projects and a [[Confluence]] space. Now it's time to connect them to help users find related information. Let's connect a Jira project to a Confluence space. In the Jira project, click the pages link in the project's navigation. Then click the button to connect to a specific space. In the overlay, choose the space and click the form submission button. The pages in the space are now visible in the Jira project. Users can click any page to open it in an overlay. They can also edit, share, and create child pages using the icons on the right. Users can also create new pages using the template links. If you ever want to change the connected space, click the two arrow icon. Now let's make sure our service management project is connected to a Confluence space, too. Go to the project and click the knowledge base link in the project's navigation. As you'll see, there's a connection already there. When we created the JSM project, a new Confluence knowledge space space was automatically created and linked. Thanks, [[Atlassian]]. The space's name and key match the Jira project, which is a best practice for companion projects and spaces. Support staff can view this content directly in Jira or create new content using the button on the right. Service projects have some additional integration settings
>
> **[1:35](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/connecting-projects-and-spaces?u=76281980&t=95)** to know about. Click the knowledge base settings link at the top of the page. JSM projects can connect to multiple Confluence spaces if desired. This is useful if one space contains content for internal support staff and another contains content for external customers. Let's add a link to our documentation Confluence space. Click the link space button on the top right. Select the Confluence space and click the form submission button. Next, let's review each space's view settings. Content in the documentation space is viewable only to licensed Confluence users, which represents internal team members. I want content in the support space to be viewable to logged in users, which means internal customers logged into the Jira self-service portal. Always make sure users are accessing the information intended for them. At the bottom of the page are additional settings to control which knowledge base articles are suggested with each request type. You can disable suggestions or restrict which suggestions appear using labels. To restrict suggested content, simply add a specific label to a Confluence page in the link space. Then add the label to the knowledge-based settings page in the Jira service management project. Now, here's a tip. The label copy is visible to the end user, so make sure you choose something suitable for the audience.
>
> **[3:12](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/connecting-projects-and-spaces?u=76281980&t=192)** This next step is optional, but I like to give my users many ways to find the information they're looking for. Let's add navigation shortcuts between the Jira Service Management project and its related Confluence spaces. In Jira, go to the service management project and click add shortcut in the left nav. Enter the URL for the documentation space and the link text to display. I'll add a shortcut for both the doc and support spaces. Now let's add a shortcut back to the support project from the Confluence spaces. Go to the Confluence documentation space and click the plus icon under shortcuts in the left sidebar. Then enter the URL for the JSM project and the link text to display. I'll also do this for the Confluence knowledge base space. In the next section, I'll demo how to leverage the main integration points with our sample use case.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Confluence]] (13), [[Jira]] (10), [[Atlassian]] (1)
> **Tools:** confluence (13), jira (10)
> **CLI Commands:** make (3), find (2)
> **Env Vars:** jsm (3), url (2)
> **UI Navigation:** go to (3), select the (1)
> **Cross-References:** in the last (1), in the next (1)
> **Documentation:** the documentation (2)
> **Best Practices:** best practice (1), always make sure (1)


### 3. Using Confluence and Jira Together

[↑ Back to Table of Contents](#table-of-contents)

#### [Course use case set up](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/course-use-case-set-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/course-use-case-set-up?u=76281980&t=0)** - Now it's time for some fun. Now that our projects and spaces are connected, it's time to put our sample use case into action. Great news. A new woodworking order just came in. A client wants some raised planters for their garden. Let's create a [[Jira]] issue to track the order. I'll create a task in the Orders Jira Project. Here's some sample information to use in the issue fields. Now, there's no need to type any sample data. Simply copy and paste the information from my downloadable handout. You'll find it in the [[LinkedIn]] exercise files area in Jira. Click the Create button at the top of the page. Now, just so you know, I hid some of the fields that we don't need for our use case. All right, in the overlay, select Orders for the project and Task for the issue type. Then complete the summary description, due date, purchase date, and price fields. Finally, click the form submission button. Now that we have our Jira issue, let's move on to the next step in our use case and demo some integration points.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (4), [[LinkedIn]] (1)
> **Tools:** jira (4)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - now (1)

#### [Linking issues to pages](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/linking-issues-to-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/linking-issues-to-pages?u=76281980&t=0)** - Next, I'm ready to build this order so I'll assign the issue to myself and transition it to the in-progress status. As a woodworker, I want to document the materials for the project and my costs in [[Confluence]]. Let's create a Confluence page for this order without leaving [[Jira]]. In the Jira issue, click the add button and select new Confluence page. Then give the page a unique title. In the page's content area, add any details for the planter box project. Finally, click the publish button at the top right. Use the sample information in the handout for the body of the Confluence page. After creating our Confluence page, let's examine the Jira issue. Scroll down and look for a section labeled Confluence content. The page created from this Jira issue is automatically linked. You can link or add additional pages by clicking the plus icon. Now hover over the name of the linked page to see page information, like the last update. Next, let's open the page in Confluence. At the top is account of Jira issues linked to this page. Click the count for additional details. While it's possible to link Jira issues and Confluence pages manually, these links were all added automatically because we created the page from a Jira issue.
>
> **[1:34](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/linking-issues-to-pages?u=76281980&t=94)** Now, I know you aren't running a woodworking business, so let's consider the benefits of the linking capability with more traditional use cases. With the reciprocal linking feature, a product owner can easily provide requirements information to a developer working a Jira issue, a release manager can link deployment notes to Jira issues in the release, a finance representative can link a reimbursement request to the relevant company policy, and more. Because the links are established automatically, there's no manual step a user must remember to perform. Links are one to many, meaning one Jira issue can be linked to multiple pages, or pages can be linked to multiple issues. Since the links are bidirectional, users can access and easily find information from either application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (10), [[Confluence]] (8)
> **Tools:** jira (10), confluence (8)
> **UI Navigation:** scroll down (1), open the (1)
> **CLI Commands:** find (1)
> **Best Practices:** remember to (1)
> **Speakers:** - next (1)

#### [Linking pages to issues](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/linking-pages-to-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/linking-pages-to-issues?u=76281980&t=0)** - Next, let's link a [[Confluence]] page to one or more [[Jira]] issues. There are two methods. Here's an example page created in Confluence. It doesn't have any Jira issue links yet, so let's add some. First, paste a Jira issue URL into the Confluence page. [[Atlassian]] turns the URL into what it calls a smart link. A smart link is a rich hyperlink that displays dynamic information. The Jira issue URL is transformed to show the issue's type, summary, and [[Real-Time]] status. Click the link for additional display options, like showing the link in a card format. Then publish the page. See the documentation for more about smart link capabilities. By adding a Jira issued URL, I've connected the issue to the page and vice versa. The top of the page shows one Jira link. Another way to see Jira issues in a Confluence page is by using the Jira issues macro. Macros add extra functionality or dynamic elements to Confluence pages, posts, and templates. This macro shows one or more JIRA issues in a table format. Use the search box, drop down menus, or a JQL query to find the desired issues. On the right, click the configure columns button to show or hide columns. Then, click the form submission button. Publish the page to see the result.
>
> **[1:36](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/linking-pages-to-issues?u=76281980&t=96)** Notice that this time, there are no linked issues noted at the top of the page. The Jira issues macro dynamically displays issues on the page, but does not link them. Let's consider how you'd link or access information in two separate applications without Atlassian's deep application integration. You could paste a static URL from one application to another or provide written access instructions. But what happens if the data moves to another location? The link breaks and the instructions are incorrect. When Jira and Confluence are connected, links are automatically updated if pages or issues are moved. You could also try attaching a file, but what happens when that information needs an update? Will you have multiple versions of files to manage? Will the latest version of the file need to be manually reattached? Finally, you might be able to embed a file, but that method may introduce undesired security challenges. Luckily, with connected applications, we don't have to worry about any of these alternatives.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (11), [[Confluence]] (6), [[Atlassian]] (2), [[Real-Time]] (1)
> **Tools:** jira (11), confluence (6)
> **Env Vars:** url (5), jira (1), jql (1)
> **CLI Commands:** find (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - next (1)

#### [Creating issues from pages](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/creating-issues-from-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/creating-issues-from-pages?u=76281980&t=0)** - I'm currently building the raised garden planters, but I'd also like to build some custom indoor chairs and try to sell them. Since we don't have a buyer for them yet, let's compile some materials and cost information, and we'll create a [[Jira]] issue when an order comes in later. Essentially, we're reversing the previous process by creating Jira issues from [[Confluence]] pages. Here's the Confluence page I've started for a new woodworking project. I mentioned the custom chairs to my friend, and they already want to buy them. Now I have a new order to create. This time, we'll create the order from the Confluence page. I'll insert the macro with a shortcut, type a slash, the [[Microsoft Word|word]] Jira, and choose Create a Jira issue from the menu. This macro opens a Jira create screen, and automatically links the new issue to the related page. I'll enter a summary, a description, and click the form submission button. The Jira issue is immediately created. Let's update the page and see the result. The page shows the Jira link at the top, and the new issue at the bottom. I'll click the linked issue to open it in Jira. The related page is shown under the Confluence content header. When creating Jira issues from Confluence pages and vice versa, the link between them is created automatically. Now, I know from experience that sometimes users forget to manually link related work, but with integration,
>
> **[1:33](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/creating-issues-from-pages?u=76281980&t=93)** remembering to link is no longer a challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (9), [[Confluence]] (5), [[Microsoft Word|Word]] (1)
> **Tools:** jira (9), confluence (5)
> **Speakers:** - i (1)

#### [Creating issues from tables](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/creating-issues-from-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/creating-issues-from-tables?u=76281980&t=0)** - I just built a new mailbox for myself, and now all my neighbors want one for their houses, too. Luckily, I can create multiple [[Jira]] issues at once from text or a table on a [[Confluence]] page. Here's how. Here's an interest list for custom mailbox orders in Confluence. To create a single Jira issue, select some text on the page and click the Jira issues option. A form appears to collect the issue details. Notice that the selected text was automatically added to the issue summary field. Add any additional details and click the form submission button to create the issue. After the issue is created, it's automatically added to the Confluence page, too. You can also create multiple Jira issues from a Confluence table. Simply select the content in one table cell, click the Jira issue option, and select multiple issues. Then select the desired Jira project and issue type. Next, tell Jira which table row to use for the summary and which to use for the description. Then click the form submission button. The Jira issues were created, linked to the Confluence page, and inserted into the table. That's awesome. Now the owner of this Confluence page can follow issue progress here or in Jira. This feature is a huge time-saver and my favorite non-woodworking use cases are when a product owner
>
> **[1:32](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/creating-issues-from-tables?u=76281980&t=92)** creates a giant requirements table in Confluence or when a manager creates a table showing all the software their new team member needs. Giant lists can turn into individual Jira issues within seconds. Now that's efficiency.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (10), [[Confluence]] (7)
> **Tools:** jira (10), confluence (7)
> **UI Navigation:** select the (2)
> **Definitions:** is a  (1)
> **Speakers:** - i (1)

#### [Creating Jira reports in Confluence](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/creating-jira-reports-in-confluence?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/creating-jira-reports-in-confluence?u=76281980&t=0)** - [Instructor] [[Jira]] comes with many reporting methods and ways to see data. Access the built-in reports by clicking the reports link in the Jira projects navigation. Additionally, users can view their data as cards on a board. Boards show a status based view of issues. Users can also create custom [[Dashboards]]. Dashboards show filter results using gadgets. A gadget displays dynamic content in chart, graph, or list format. Additionally, entire dashboards can be viewed as wallboards. Wallboards are visual information radiators. They look like dashboards, but without all the Jira navigation elements. You might use this feature to display [[Real-Time]] data on a screen in a conference room or in your wood shop. While the reporting capabilities in Jira are more robust, you can also display report data in [[Confluence]] pages. Here are some options. Let's add the Jira charts macro to this Cnfluence page. The macro supports pie charts, created versus resolve [[Statistics]], or two-dimensional statistics. I'll choose pie chart and enter a JQL query for the desired issues. Next, explain the display options section at the bottom of the overlay, and select any options. I'll choose the status statistic. Then click the form submission button.
>
> **[1:35](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/creating-jira-reports-in-confluence?u=76281980&t=95)** Here's the chart with real-time Jira data. You can also insert an entire Jira dashboard as a wallboard. Simply paste a dashboard's URL into the page and save it. You can also insert timelines with the timeline macro. Insert the macro and use the wizard to select a board. You can also paste in a timeline's URL. Finally, you can paste a board's URL into the page two. Be sure to check out all the other reporting macros available. To see them all, click the plus icon in the toolbar and click view more at the bottom of the sidebar.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (7), [[Dashboards]] (4), [[Real-Time]] (2), [[Statistics]] (2), [[Confluence]] (1)
> **Tools:** jira (7), confluence (1)
> **Env Vars:** url (3), jql (1)
> **UI Navigation:** in the toolbar (1)
> **Speakers:** - [instructor] (1)

#### [Configuring a knowledge base](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/configuring-a-knowledge-base?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/configuring-a-knowledge-base?u=76281980&t=0)** - In a previous section, we connected a [[Jira]] project to a [[Confluence]] knowledge base to provide post-sales support to our customer. Let's see how the end user leverages that support information. As you might remember, our documentation and support Confluence spaces are already connected to our support JSM project. Support staff can see all that content from within Jira. We also selected some knowledge-based settings to determine who can view the content and which articles are automatically suggested. Next, let's look at the support portal. To get to it, go back to the project's main navigation, click Channels, and click Open next to the Portal option. You can also add /servicedesk to the end of your [[Atlassian]] site URL. Here's what an end user sees when they log in. There's an option to submit a request or ask a question. I'll select Ask a question. As a customer, I've received the garden planters that I ordered, but I haven't paid for them yet. I'll start typing my payment question. If there is any related content in the linked Confluence space, JSM will automatically display it. An article was suggested, so I'll click it for more information. If this answers my question, there's no need to finish creating the request. The Confluence and JSM integration allowed me to get answers and resolve my problem without additional human intervention.
>
> **[1:35](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/configuring-a-knowledge-base?u=76281980&t=95)** Let's say I read the help article, but my question still isn't answered. I'll add a description and click the form submission button. This immediately creates a JSM issue for the support team. As a customer, I see a simplified view of the request and can add additional comments if needed. I'll also receive an email message that my request was received. I can come back to the portal anytime to see the status of this request or create new ones. Now, let's switch roles. Instead of a customer, let's be a support team member. Go to the JSM project and open the request the customer created. I'll start work on the issue and assign it to myself. Then I'll respond to the customer and close the request.
>
> **[2:33](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/configuring-a-knowledge-base?u=76281980&t=153)** There are two other things I should do. I'll link the support request to the issue it's related to in the Orders project. I'll add the link manually, but you can also link related issues with automation. Additionally, I know I sent that customer an email invoice, so I'm wondering why they didn't receive it. I should also create an issue to investigate that problem and link it back to the support request. Here's a common non-woodworking use case. A customer reports a problem to the customer service team. The service rep researches the issue and learns a fixes needed from the development team. They create an issue in the development team's Jira project and link it to the support request. Then the rep notifies the customer that someone is working on their problem. Next, the development team deploys their fix and closes their Jira issue. Now the service rep can tell the customer that their problem is remedied and close the support request. Depending on the circumstances, the service rep might add an FAQ page to the knowledge base, or the developer might add a page to the documentation describing the change. And, of course, those pages should be linked to the Jira issue they relate to. Crosslinks may also be warranted depending on the contents intended audience. It's very common for work from one team to depend on work from another, and as long as everything is linked together,
>
> **[4:05](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/configuring-a-knowledge-base?u=76281980&t=245)** it's easy to find, detect, and even automate any team's process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (5), [[Confluence]] (4), [[Atlassian]] (1)
> **Tools:** jira (5), confluence (4)
> **Env Vars:** jsm (5), url (1), faq (1)
> **UI Navigation:** go to (1), open the (1)
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **Documentation:** the documentation (1)
> **Speakers:** - in (1)

#### [Using Atlassian Intelligence](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/using-atlassian-intelligence?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/using-atlassian-intelligence?u=76281980&t=0)** - [Narrator] Like many companies, [[Atlassian]] is adding [[Artificial Intelligence (AI)|artificial intelligence]] capabilities as another way to save you time and energy when using their software. Here's a brief look at some capabilities that have launched so far. You'll need a cloud premium or enterprise plan to access these features. If you don't love writing JQL statements, now you can use AI to craft them for you. Simply type a question using natural language. I typed, "Find issues that I'm watching that are not done." Atlassian intelligence quickly turn my question into JQL and return the list of relevant issues. Similar functionality is available for building automation rules too. In JSM, look for the summarize button in an issues activity section. [[Jira]] will parse the content in the description and comment fields and provide a short summary. No more having to read through a lengthy comment trail. In [[Confluence]], highlight a [[Microsoft Word|word]] on a page and click the define button to see a definition in edit mode, select some copy and click the Improve Writing button. AI will suggest improvements to consider. You can also ask AI to improve copy by changing its tone, making it shorter, converting it to a bulleted list and more. Atlassian is adding new AI capabilities all the time. See the documentation for updates and details.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Atlassian]] (3), [[Artificial Intelligence (AI)|Artificial intelligence]] (1), [[Jira]] (1), [[Confluence]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** jql (2), jsm (1)
> **Tools:** jira (1), confluence (1)
> **CLI Commands:** find (1)
> **Documentation:** the documentation (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Additional resources for Jira and Confluence learning](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/additional-resources-for-jira-and-confluence-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/additional-resources-for-jira-and-confluence-learning?u=76281980&t=0)** - Congrats on completing the course. By now you've seen many of the helpful integration points between [[Jira]] and [[Confluence]]. You should now be able to connect Jira projects to Confluence spaces, leverage common application connection points and integration features, and help users avoid duplication and manual work. As a reminder, here's the special area of my website where I'll post corrections, updates and new information for this course. Your next step is to continue learning. There's always more to learn and new capabilities are added all the time. You'll find many ideas and learning opportunities in the "9 Ways to Learn Jira Administration" article on my website. Also, check out my other Jira and Confluence courses right here on [[LinkedIn]]. The most fun are about building automation rules, "Best Practices for Configuration and Maintenance," and "Managing Custom Workflows." Here are some [[Atlassian]] resources so you can continue learning. Atlassian's product documentation is categorized by application type, deployment type and version. Always make sure you're reading the right information for the type of Jira you have. Also, join the Atlassian online community where you'll find answers, support and inspiration from other users. Log in with your Atlassian ID at community.[atlassian.com](https://atlassian.com), then ask a question or start a discussion.
>
> **[1:36](https://www.linkedin.com/learning/increasing-efficiency-with-jira-and-confluence-integrations/additional-resources-for-jira-and-confluence-learning?u=76281980&t=96)** If you have Jira or Confluence questions, I'd love to hear from you. Use the Q & A feature, email me directly, or connect on social media. I hope you've enjoyed this Jira and Confluence integrations course as much as I enjoyed creating it. Now it's time to get your course completion certificate. When you share your certificate, tag me so I can celebrate your accomplishment and share it with my network, too. Good luck with your Confluence quest and your Jira journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (8), [[Confluence]] (6), [[Atlassian]] (5), [[LinkedIn]] (1)
> **Tools:** jira (8), confluence (6)
> **CLI Commands:** find (2), make (1)
> **URLs:** [atlassian.com](https://atlassian.com) (1)
> **Best Practices:** always make sure (1)
> **Speakers:** - congrats (1)


## Instructor

- [[Rachel Wright]]

## Resources

- Exercise files available

## Skills Covered

- Confluence
- Jira

## Path Context

### In [[Mastering Jira for Software Developers]]
← [[Planning and Releasing Software with Jira]] | **4 of 4**

### In [[Mastering Jira Administration]]
← [[Jira Administration- Automation]] | **7 of 7**

## Appears In

- [[Mastering Jira for Software Developers]]
- [[Mastering Jira Administration]]

## Related Courses

_Courses sharing skills:_

- [[Jira Administration- Automation]] — Jira
- [[Jira- Managing Custom Workflows]] — Jira
- [[Jira- Advanced Administration]] — Jira
- [[Jira Service Management- Administration]] — Jira
- [[Jira- Basic Administration]] — Jira

---

[↑ Back to top](#)