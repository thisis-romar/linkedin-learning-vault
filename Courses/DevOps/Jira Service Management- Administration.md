---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: jira-service-management-administration
url: "https://www.linkedin.com/learning/jira-service-management-administration"
duration_minutes: 164
duration: 2h 44m
level: Intermediate
updated: 9/6/2024
learners: 53841
skills:
  - IT Service Management
  - Jira
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQEJZD519JqiGw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1632160504183?e=2147483647&amp;v=beta&amp;t=h3TmoyPyObFB228rou0FOISPFAAEAsCfe5RlxzCnJDM"
linkedin_topic: DevOps
learning_paths:
  - '[[Mastering Jira Administration]]'
prev_courses:
  - '[[Jira- Basic Administration]]'
next_courses:
  - '[[Jira- Advanced Administration]]'
path_nav: '[{"path":"Mastering Jira Administration","position":3,"total":7,"prev":"Jira- Basic Administration","next":"Jira- Advanced Administration"}]'
path_count: 1
tags:
  - course
  - topic/devops
  - topic/network-and-system-administration
  - skill/it-service-management
  - skill/jira
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Jira%20Service%20Management-%20Administration.md)

![Jira Service Management: Administration](https://media.licdn.com/dms/image/v2/C560DAQEJZD519JqiGw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1632160504183?e=2147483647&amp;v=beta&amp;t=h3TmoyPyObFB228rou0FOISPFAAEAsCfe5RlxzCnJDM)

# Jira Service Management: Administration

> Are you an experienced Jira administrator who now needs to learn how to use Jira Service Management (JSM) for service projects and support teams? In this course, Rachel Wright teaches you how to set up and administer JSM so customers can create requests, support agents can provide the help users need, and leadership can measure effectiveness. Rachel details the ways in which JSM extends Jira with 

> [LinkedIn Learning](https://www.linkedin.com/learning/jira-service-management-administration) | 2h 44m | Intermediate | 54K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Administration in Jira Service Management](#administration-in-jira-service-management)
  - [Who is this course for?](#who-is-this-course-for)
  - [What do you need for this course?](#what-do-you-need-for-this-course)
- [**1. Using Jira Service Management**](#1-using-jira-service-management) (6 videos)
  - [What is Jira Service Management?](#what-is-jira-service-management)
  - [How is JSM used?](#how-is-jsm-used)
  - [Which application type do you have?](#which-application-type-do-you-have)
  - [Which deployment type do you have?](#which-deployment-type-do-you-have)
  - [Important terms and definitions](#important-terms-and-definitions)
  - [Navigating the admin area](#navigating-the-admin-area)
- [**2. Jira and JSM Differences**](#2-jira-and-jsm-differences) (4 videos)
  - [JSM feature overview](#jsm-feature-overview)
  - [Types of users](#types-of-users)
  - [Additional permissions](#additional-permissions)
  - [Additional notifications](#additional-notifications)
- [**3. Setting Up a Test Environment**](#3-setting-up-a-test-environment) (3 videos)
  - [Test environment tips](#test-environment-tips)
  - [Choose a test environment](#choose-a-test-environment)
  - [Create a test environment](#create-a-test-environment)
- [**4. Managing Project Settings**](#4-managing-project-settings) (9 videos)
  - [Create a service project](#create-a-service-project)
  - [Leverage workflow differences](#leverage-workflow-differences)
  - [Use and create request types](#use-and-create-request-types)
  - [Add agents, customers, and organizations](#add-agents-customers-and-organizations)
  - [Configure the customer portal](#configure-the-customer-portal)
  - [Manage email requests](#manage-email-requests)
  - [Connect to a Confluence knowledge base](#connect-to-a-confluence-knowledge-base)
  - [Challenge: Create a request type](#challenge-create-a-request-type)
  - [Solution: Create a request type](#solution-create-a-request-type)
- [**5. Creating Service Level Agreements**](#5-creating-service-level-agreements) (6 videos)
  - [SLA overview](#sla-overview)
  - [Use and create SLAs](#use-and-create-slas)
  - [Manage SLA calendars](#manage-sla-calendars)
  - [Troubleshoot SLAs](#troubleshoot-slas)
  - [Challenge: Create an SLA](#challenge-create-an-sla)
  - [Solution: Create an SLA](#solution-create-an-sla)
- [**6. Using Automation**](#6-using-automation) (4 videos)
  - [Automation overview](#automation-overview)
  - [Create automation rules](#create-automation-rules)
  - [Challenge: Create an automation](#challenge-create-an-automation)
  - [Solution: Create an automation](#solution-create-an-automation)
- [**7. Using Reporting**](#7-using-reporting) (6 videos)
  - [Reporting overview](#reporting-overview)
  - [Using reports](#using-reports)
  - [Using queues](#using-queues)
  - [Measuring customer satisfaction](#measuring-customer-satisfaction)
  - [Challenge: Create a report](#challenge-create-a-report)
  - [Solution: Create a report](#solution-create-a-report)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Administration in Jira Service Management](https://www.linkedin.com/learning/jira-service-management-administration/administration-in-jira-service-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/administration-in-jira-service-management?u=76281980&t=0)** - [Rachel] How do you support your internal and external customers?
>
> **[0:03](https://www.linkedin.com/learning/jira-service-management-administration/administration-in-jira-service-management?u=76281980&t=3)** For more and more organizations, the answer is [[Jira]] Service Management, or JSM for short.
>
> **[0:09](https://www.linkedin.com/learning/jira-service-management-administration/administration-in-jira-service-management?u=76281980&t=9)** JSM is built on Jira and extends it so your organization can effectively manage incidents, problems, changes, service requests, and more.
>
> **[0:19](https://www.linkedin.com/learning/jira-service-management-administration/administration-in-jira-service-management?u=76281980&t=19)** By learning Jira Service Management, you'll be able to take support capabilities to the next level with queues, service level agreements, a simple interface for your customers, and integration with [[Confluence]] as a knowledge base.
>
> **[0:31](https://www.linkedin.com/learning/jira-service-management-administration/administration-in-jira-service-management?u=76281980&t=31)** Hi, I'm Rachel Wright, Certified Jira Administrator and author of "The Jira Strategy Admin Workbook."
>
> **[0:38](https://www.linkedin.com/learning/jira-service-management-administration/administration-in-jira-service-management?u=76281980&t=38)** JSM was first introduced in 2013, and it's grown up a lot since then.
>
> **[0:43](https://www.linkedin.com/learning/jira-service-management-administration/administration-in-jira-service-management?u=76281980&t=43)** Join my [[LinkedIn]] Learning course to understand the JSM configuration so customers can create requests, support agents can provide the help users need, and leadership can measure effectiveness.
>
> **[0:55](https://www.linkedin.com/learning/jira-service-management-administration/administration-in-jira-service-management?u=76281980&t=55)** In this course, you'll learn how JSM extends Jira with support-specific features; the additional types of users and responsibilities; using JSM for incident management, change management, problems, service requests and support; how to configure request types, permissions, and notifications; how to configure the self-service portal and connect to a Confluence knowledge base; how to create, manage, and troubleshoot service level agreements; using automation to reduce manual work and repetitive tasks; and leveraging reporting to gauge effectiveness and measure customer satisfaction.
>
> **[1:34](https://www.linkedin.com/learning/jira-service-management-administration/administration-in-jira-service-management?u=76281980&t=94)** Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (6), [[Confluence]] (2), [[LinkedIn]] (1)
> **Tools:** jira (6), confluence (2)
> **Env Vars:** jsm (6)
> **Prerequisites:** configure (2)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [rachel] (1)

#### [Who is this course for?](https://www.linkedin.com/learning/jira-service-management-administration/who-is-this-course-for?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/who-is-this-course-for?u=76281980&t=0)** - [Tutor] This course helps new administrators get started, understand how [[Jira]] service management extends Jira, and configure requests, so your organization can support your internal and external customers.
>
> **[0:11](https://www.linkedin.com/learning/jira-service-management-administration/who-is-this-course-for?u=76281980&t=11)** Whether you have cloud, server, or data center, the admin concepts in this course are the same.
>
> **[0:17](https://www.linkedin.com/learning/jira-service-management-administration/who-is-this-course-for?u=76281980&t=17)** Just be aware that there are slight feature terminology and user interface differences between the deployment types.
>
> **[0:24](https://www.linkedin.com/learning/jira-service-management-administration/who-is-this-course-for?u=76281980&t=24)** Don't worry if your application looks different than my examples.
>
> **[0:28](https://www.linkedin.com/learning/jira-service-management-administration/who-is-this-course-for?u=76281980&t=28)** You might also have different colors, a different layout and customization specific to your company.
>
> **[0:34](https://www.linkedin.com/learning/jira-service-management-administration/who-is-this-course-for?u=76281980&t=34)** If you're new to Jira administration, take my basic and advanced administration courses first.
>
> **[0:40](https://www.linkedin.com/learning/jira-service-management-administration/who-is-this-course-for?u=76281980&t=40)** This course builds on those courses and assumes you already know how to configure Jira specific application settings and all the standard schemes in Jira projects.
>
> **[0:49](https://www.linkedin.com/learning/jira-service-management-administration/who-is-this-course-for?u=76281980&t=49)** This course only covers the features that are additionally provided by Jira service management for support type projects.
>
> **[0:56](https://www.linkedin.com/learning/jira-service-management-administration/who-is-this-course-for?u=76281980&t=56)** Also, sometimes administrators are new to end-user concepts as well.
>
> **[1:01](https://www.linkedin.com/learning/jira-service-management-administration/who-is-this-course-for?u=76281980&t=61)** If you're an infrequent Jira user, or just want to learn more about what your end users experience, take my learning Jira course as well.
>
> **[1:09](https://www.linkedin.com/learning/jira-service-management-administration/who-is-this-course-for?u=76281980&t=69)** There's a version for cloud and another version for server and data center.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (8)
> **Tools:** jira (8)
> **Prerequisites:** configure (2)
> **Warnings:** be aware (1)
> **Speakers:** - [tutor] (1)

#### [What do you need for this course?](https://www.linkedin.com/learning/jira-service-management-administration/what-do-you-need-for-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/what-do-you-need-for-this-course?u=76281980&t=0)** - [Instructor] Ideally, you've been managing [[Jira]] for a while and have experience creating projects, configuring existing schemes, and creating new custom schemes when necessary.
>
> **[0:09](https://www.linkedin.com/learning/jira-service-management-administration/what-do-you-need-for-this-course?u=76281980&t=9)** All you need for this course is admin access to a Jira application with Jira Service Management installed It's also helpful to have a test environment, so you can make changes without impacting production.
>
> **[0:21](https://www.linkedin.com/learning/jira-service-management-administration/what-do-you-need-for-this-course?u=76281980&t=21)** If you don't have one already, don't worry.
>
> **[0:23](https://www.linkedin.com/learning/jira-service-management-administration/what-do-you-need-for-this-course?u=76281980&t=23)** I'll show some test environment options later.
>
> **[0:26](https://www.linkedin.com/learning/jira-service-management-administration/what-do-you-need-for-this-course?u=76281980&t=26)** Finally, it's good to have test users so you can see the differences between user abilities.
>
> **[0:31](https://www.linkedin.com/learning/jira-service-management-administration/what-do-you-need-for-this-course?u=76281980&t=31)** For JSM, I recommend creating two new service accounts, one for an agent and one for a customer.
>
> **[0:38](https://www.linkedin.com/learning/jira-service-management-administration/what-do-you-need-for-this-course?u=76281980&t=38)** One more thing before we get started, [[Atlassian]] has changed terminology over the years, and some applications where renamed.
>
> **[0:45](https://www.linkedin.com/learning/jira-service-management-administration/what-do-you-need-for-this-course?u=76281980&t=45)** Jira Service Management was previously called Jira Service Desk.
>
> **[0:49](https://www.linkedin.com/learning/jira-service-management-administration/what-do-you-need-for-this-course?u=76281980&t=49)** Jira Core was recently renamed Jira Work Management in Cloud In Server, the name remains the same.
>
> **[0:56](https://www.linkedin.com/learning/jira-service-management-administration/what-do-you-need-for-this-course?u=76281980&t=56)** And in Data Center, there's no such application.
>
> **[1:00](https://www.linkedin.com/learning/jira-service-management-administration/what-do-you-need-for-this-course?u=76281980&t=60)** The name Jira Software remains the same.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (8), [[Atlassian]] (1)
> **Tools:** jira (8)
> **CLI Commands:** make (1)
> **Env Vars:** jsm (1)
> **Speakers:** - [instructor] (1)


### 1. Using Jira Service Management

[↑ Back to Table of Contents](#table-of-contents)

#### [What is Jira Service Management?](https://www.linkedin.com/learning/jira-service-management-administration/what-is-jira-service-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/what-is-jira-service-management?u=76281980&t=0)** - [Instructor] [[Jira]] Service Management was formerly known as Jira Service Desk.
>
> **[0:04](https://www.linkedin.com/learning/jira-service-management-administration/what-is-jira-service-management?u=76281980&t=4)** It helps support teams of all types manage their requests.
>
> **[0:08](https://www.linkedin.com/learning/jira-service-management-administration/what-is-jira-service-management?u=76281980&t=8)** Jira Service Management or JSM for short is built on top of Jira, making it the obvious tool for organizations that already leverage Jira.
>
> **[0:17](https://www.linkedin.com/learning/jira-service-management-administration/what-is-jira-service-management?u=76281980&t=17)** It's made by a company called it [[Atlassian]], who makes other popular tools like Jira Work Management, which is an issue tracker and project management tool for business teams, [[Confluence]], a Wiki and collaboration portal, and support tools like Ops Genie, and Status Page.
>
> **[0:33](https://www.linkedin.com/learning/jira-service-management-administration/what-is-jira-service-management?u=76281980&t=33)** Atlassian tools all connect to each other.
>
> **[0:36](https://www.linkedin.com/learning/jira-service-management-administration/what-is-jira-service-management?u=76281980&t=36)** For example, you can service self-help content from Confluence, link JSM requests to Jira issues, or create Jira Service Management issues from Ops Genie alerts.
>
> **[0:47](https://www.linkedin.com/learning/jira-service-management-administration/what-is-jira-service-management?u=76281980&t=47)** JSM also integrates with third-party tools for monitoring, asset management, and customer management.
>
> **[0:54](https://www.linkedin.com/learning/jira-service-management-administration/what-is-jira-service-management?u=76281980&t=54)** Atlassian created JSM in 2013.
>
> **[0:56](https://www.linkedin.com/learning/jira-service-management-administration/what-is-jira-service-management?u=76281980&t=56)** After noticing that 40% of customers had adapted Jira to handle service requests.
>
> **[1:02](https://www.linkedin.com/learning/jira-service-management-administration/what-is-jira-service-management?u=76281980&t=62)** JSM has grown up a lot since it was first introduced and I'm excited to share its features with you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (9), [[Atlassian]] (3), [[Confluence]] (2)
> **Tools:** jira (9), confluence (2)
> **Env Vars:** jsm (5)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [How is JSM used?](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=0)** - [Instructor] JSM is for tracking changes to systems, processes, or applications, resolving incidents and problems like an outage or security breach, fulfilling service requests, like a password reset, new [[Hardware]], or issuing a mobile device, managing approvals of all kinds and helping internal or external customers with whatever they need.
>
> **[0:21](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=21)** JSM is not just for IT teams.
>
> **[0:23](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=23)** If you think about it, most teams have some type of customers they support.
>
> **[0:28](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=28)** For example, the HR team's customers are the employees and they have plenty of requests to manage.
>
> **[0:34](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=34)** The HR team likely processes vacation requests, new hire requests, benefits changes, and much more.
>
> **[0:42](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=42)** This team and any team with a support function can use [[Jira]] Service Management.
>
> **[0:48](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=48)** Let's get more specific.
>
> **[0:50](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=50)** Jira Service Management can track anything that employee or a customer needs.
>
> **[0:55](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=55)** You can use it to receive and fulfill support, access, and asset requests.
>
> **[0:59](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=59)** For example, request that the HR team researchs a withholding issue on your last paycheck, ask the facilities team for that standing desk you've always wanted, ask the legal team to review a new contract, or request access to an application.
>
> **[1:15](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=75)** Is Webmail down?
>
> **[1:16](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=76)** Was a password compromised?
>
> **[1:19](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=79)** Use JSM to collect and triage problems and incidents.
>
> **[1:22](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=82)** You can support all of your hardware, software, applications, and systems in one place.
>
> **[1:29](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=89)** You can also track how well you're meeting service level agreements, which are deadlines, goals, or [[Performance Metrics]].
>
> **[1:36](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=96)** For example, how long did it take the team to respond to or complete a request?
>
> **[1:41](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=101)** Or yikes, the CEO is locked out of their [[Microsoft Office|office]] again.
>
> **[1:45](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=105)** Did the team get back to them within 30 minutes as promised?
>
> **[1:48](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=108)** With JSM, you can provide a simple request entry interface that's easy for any user.
>
> **[1:54](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=114)** You can suggest self-service knowledge base articles to automatically provide solutions.
>
> **[1:59](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=119)** This could users the answers they need immediately and reduce the support requests.
>
> **[2:03](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=123)** And finally use JSM to keep an authoritative, historical and legal record of requests, changes and incidents.
>
> **[2:11](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=131)** Sometimes Jira Service Management is used internally, externally, or both.
>
> **[2:16](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=136)** [[Atlassian]] calls this the help center.
>
> **[2:19](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=139)** You can have one service desk for your entire organization or one per department like in this screenshot.
>
> **[2:25](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=145)** Jira provides the backbone for Jira Service Management.
>
> **[2:28](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=148)** Jira provides issue creation, workflow and reporting, and JSM adds support specific features like queues, service level agreements, a simple customer portal and integration with [[Confluence]] as a knowledge base.
>
> **[2:43](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=163)** While you can certainly use the standard Jira features for support, Jira Service Management takes support to the next level.
>
> **[2:52](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=172)** Here's a quick look at how the end user's experience differs in Jira versus Jira Service Management.
>
> **[2:58](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=178)** In Jira, the user clicks the create button and needs to choose the correct project and the correct issue type for their request.
>
> **[3:05](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=185)** Next, the user completes the form fields and hopefully supplies the information needed to fulfill the request.
>
> **[3:12](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=192)** Now let's complete the same issue creation process in JSM.
>
> **[3:17](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=197)** Jira Service Management provides a simple interface called the self-service portal where users submit their requests.
>
> **[3:24](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=204)** With only a few form fields, the create form is much less intimidating.
>
> **[3:29](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=209)** When the user submits their request, it's easy to find later from the request button at the bottom of the page.
>
> **[3:35](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=215)** In the backend, the request type is mapped to the JIRA project and issue type.
>
> **[3:40](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=220)** But since the end user leverages the self-service portal instead of JIRA, they don't need to be licensed users.
>
> **[3:47](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=227)** So which creation method is best for support?
>
> **[3:50](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=230)** As with everything, it depends on your situation and your goals.
>
> **[3:54](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=234)** And of course, both methods have pros and cons.
>
> **[3:57](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=237)** As an administrator, you always need to think about the different types of users at your organization.
>
> **[4:02](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=242)** You might have highly technical or experienced Jira users who have no problem working out of Jira all day, but you might also have less technical users or infrequent users who just need to raise a quick request.
>
> **[4:15](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=255)** Also, you might have external customers who've never heard of Jira.
>
> **[4:19](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=259)** What are some of the differences you noticed?
>
> **[4:21](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=261)** Both methods created a record in Jira, but one method was easier than the other.
>
> **[4:26](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=266)** If you have a lot of projects and a lot of issue types in Jira, sometimes it's hard for the end user to know what to select.
>
> **[4:33](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=273)** Sometimes create [[Forms]] are long and contain fields with unfamiliar names.
>
> **[4:38](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=278)** Field labels that might make sense to frequent Jira users might make less sense to less technical or infrequent users.
>
> **[4:46](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=286)** As you saw, Jira Service Management dramatically simplifies the issue creation process.
>
> **[4:51](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=291)** Instead of selecting projects and issue types, the user chooses from a list of categorized request types.
>
> **[4:58](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=298)** The portal helps the user file their request in the right place.
>
> **[5:02](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=302)** With only a few form fields, the create form is much less intimidating.
>
> **[5:07](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=307)** You can also customize the field labels or provide them in a form of a question.
>
> **[5:12](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=312)** The portal also makes submitted requests easier to find later.
>
> **[5:16](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=316)** The user doesn't need to know how to create a filter, a board or a dashboard to find their requests.
>
> **[5:23](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=323)** Each time you create a new service desk, change a configuration setting, or install a new app, you always need to keep two things in mind.
>
> **[5:30](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=330)** First, the impact to the health of the application as a whole.
>
> **[5:34](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=334)** Decisions you make today will impact maintenance, performance and usability in the future.
>
> **[5:39](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=339)** With each change you make, ask yourself, what might the result be in five years?
>
> **[5:45](https://www.linkedin.com/learning/jira-service-management-administration/how-is-jsm-used?u=76281980&t=345)** Second, always think about the [[User Experience (UX)|user experience]], considering both and finding a balance between them is the difference between a good administrator and a great one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (21), [[Hardware]] (2), [[Performance Metrics]] (1), [[Microsoft Office|Office]] (1), [[Atlassian]] (1)
> **Tools:** jira (21), confluence (1)
> **Env Vars:** jsm (7), jira (2), ceo (1)
> **CLI Commands:** make (4), find (3)
> **Analogies:** for example (3)
> **Cross-References:** as you saw (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Which application type do you have?](https://www.linkedin.com/learning/jira-service-management-administration/which-application-type-do-you-have?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/which-application-type-do-you-have?u=76281980&t=0)** - [Instructor] Different types of [[Jira]] include different abilities, different deployment methods, and even different user interfaces.
>
> **[0:06](https://www.linkedin.com/learning/jira-service-management-administration/which-application-type-do-you-have?u=76281980&t=6)** It's important to know which type you have, so you can leverage the correct features, advice and documentation.
>
> **[0:13](https://www.linkedin.com/learning/jira-service-management-administration/which-application-type-do-you-have?u=76281980&t=13)** There are three types of Jira: Jira Work Management and Cloud, which is called Jira Core and Server.
>
> **[0:18](https://www.linkedin.com/learning/jira-service-management-administration/which-application-type-do-you-have?u=76281980&t=18)** Jira Software and Jira Service Management.
>
> **[0:22](https://www.linkedin.com/learning/jira-service-management-administration/which-application-type-do-you-have?u=76281980&t=22)** All three types have the same look and feel, but different features.
>
> **[0:25](https://www.linkedin.com/learning/jira-service-management-administration/which-application-type-do-you-have?u=76281980&t=25)** The applications can be used separately or together.
>
> **[0:28](https://www.linkedin.com/learning/jira-service-management-administration/which-application-type-do-you-have?u=76281980&t=28)** Here's a quick comparison of the different application types.
>
> **[0:32](https://www.linkedin.com/learning/jira-service-management-administration/which-application-type-do-you-have?u=76281980&t=32)** Jira Work Management helps business teams collaborate and manage their projects, processes and tasks.
>
> **[0:38](https://www.linkedin.com/learning/jira-service-management-administration/which-application-type-do-you-have?u=76281980&t=38)** The cloud version includes some exciting new features like lists, calendars, timelines, and [[Forms]].
>
> **[0:45](https://www.linkedin.com/learning/jira-service-management-administration/which-application-type-do-you-have?u=76281980&t=45)** This project type is great for business teams like marketing, [[Human Resources (HR)|human resources]], legal, sales, and more, users of this application type can only leverage business type Jira projects.
>
> **[0:57](https://www.linkedin.com/learning/jira-service-management-administration/which-application-type-do-you-have?u=76281980&t=57)** Jira Software helps development teams track projects, bugs, and tasks, it's designed for development teams and teams using a [[Scrum]] or Kanban methodology.
>
> **[1:08](https://www.linkedin.com/learning/jira-service-management-administration/which-application-type-do-you-have?u=76281980&t=68)** It includes dev specific features like sprints, story points, backlogs and integration with tools like Bamboo and [[Bitbucket]].
>
> **[1:17](https://www.linkedin.com/learning/jira-service-management-administration/which-application-type-do-you-have?u=76281980&t=77)** Software users can access both business type and software type Jira projects.
>
> **[1:22](https://www.linkedin.com/learning/jira-service-management-administration/which-application-type-do-you-have?u=76281980&t=82)** And the final type, which this course focuses on, is Jira Service Management, it's designed for service and support teams.
>
> **[1:30](https://www.linkedin.com/learning/jira-service-management-administration/which-application-type-do-you-have?u=76281980&t=90)** Service Management users can access both business type and service type Jira projects.
>
> **[1:36](https://www.linkedin.com/learning/jira-service-management-administration/which-application-type-do-you-have?u=76281980&t=96)** The JSM Access model is a little different than other types of Jira.
>
> **[1:41](https://www.linkedin.com/learning/jira-service-management-administration/which-application-type-do-you-have?u=76281980&t=101)** We'll talk more about licensing and access later in the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (13), [[Forms]] (1), [[Human Resources (HR)|Human resources]] (1), [[Scrum]] (1), [[Bitbucket]] (1)
> **Tools:** jira (13), bitbucket (1)
> **Definitions:** is called (1), is a  (1)
> **Env Vars:** jsm (1)
> **Cross-References:** later in (1)
> **Speakers:** - [instructor] (1)

#### [Which deployment type do you have?](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=0)** - [Instructor] In addition to application types, there are three [[Jira]] deployment types, they are cloud, server, and data center.
>
> **[0:07](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=7)** I recommend reviewing all of the information in this course, regardless of your current application or deployment type.
>
> **[0:13](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=13)** Companies often add additional applications or change deployment types over the years, or maybe you changed jobs and you find your new company has one of the other types.
>
> **[0:23](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=23)** It's a good idea to have a basic understanding of all types of Jira.
>
> **[0:27](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=27)** As you've probably heard, [[Atlassian]] stopped selling new licenses of server [[Microsoft Products|products]] in February of 2021, and support for server products ends on February 2nd, 2024.
>
> **[0:39](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=39)** So what should you do if you have Jira server?
>
> **[0:42](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=42)** Customers will need to switch to data center, migrate to Atlassian hosted cloud products, or make alternate plans.
>
> **[0:49](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=49)** Check the resource section at the end of this course for some helpful migration resources.
>
> **[0:54](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=54)** While support is ending for server, I know that some organizations will continue to use it anyway.
>
> **[0:59](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=59)** So this course includes information for admins of all deployment types.
>
> **[1:03](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=63)** Let's take a quick look at the similarities and differences.
>
> **[1:07](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=67)** The cloud deployment type is hosted by Atlassian.
>
> **[1:10](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=70)** That means Atlassian is responsible for application uptime, the database, and the mail server.
>
> **[1:16](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=76)** Cloud has different capabilities, a different user interface, and is billed per user on a monthly or annual subscription.
>
> **[1:24](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=84)** Cloud software is ever evolving and you should expect frequent visual, feature, and terminology changes.
>
> **[1:31](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=91)** Here's a screenshot of the admin area in a service project.
>
> **[1:35](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=95)** Don't worry if your screen looks different than mine, you might see different colors, a different layout, and customization specific to your company.
>
> **[1:43](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=103)** Regardless of the look and feel, all the concepts in this presentation apply.
>
> **[1:48](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=108)** This screenshot shows some clues that the application type is Jira Cloud.
>
> **[1:52](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=112)** First, look at the URL format in the browser's address bar.
>
> **[1:56](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=116)** If it contains the domain [atlassian.net](https://atlassian.net), it means Atlassian is hosting it.
>
> **[2:01](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=121)** Atlassian has future plans to let you customize this URL, but for now, it's a quick way to tell the difference between cloud and another deployment method.
>
> **[2:10](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=130)** Another hint that you're in Jira Cloud, is there's no version number displayed at the bottom of the page.
>
> **[2:16](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=136)** Also, in some views, you'll see a note that you're in a company-managed project.
>
> **[2:20](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=140)** The terms company-managed and team-managed are cloud-only concepts.
>
> **[2:25](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=145)** Company-managed is the new name for classic or traditional projects that use schemes managed by Jira administrators.
>
> **[2:33](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=153)** Team-managed is the new name for independent or next-gen scheme-less projects managed by regular users.
>
> **[2:40](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=160)** Finally, you can also find your application type by logging into my.[atlassian.com](https://atlassian.com) to view your bill.
>
> **[2:47](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=167)** If you have JSM Cloud, it's important to know that there are four different plans, each plan has different features and pricing, see the differences at the URL shown.
>
> **[2:58](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=178)** The next deployment is server.
>
> **[3:00](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=180)** If you have server, it means you're hosting the software independently.
>
> **[3:04](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=184)** The application may be hosted on-premises in a server in your [[Microsoft Office|office]], in your data center with other internal applications, in a cloud server environment like Amazon AWS, [[Microsoft Azure]], or [[Google Cloud Platform (GCP)|Google Cloud platform]], or by a third party.
>
> **[3:19](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=199)** The server application has different capabilities and a different user interface than cloud.
>
> **[3:25](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=205)** As I mentioned previously, you can't buy any new server licenses, and support ends on February 2nd, 2024.
>
> **[3:32](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=212)** Here's a screenshot of the exact same service project admin page and server.
>
> **[3:37](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=217)** I created both projects using the same [[IT Service Management]] template.
>
> **[3:42](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=222)** As you can see, the look and feel is slightly different from cloud.
>
> **[3:46](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=226)** The top nav different, there's a second left sidebar, and the placement, fonts, and graphics are slightly different too.
>
> **[3:54](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=234)** Look at the URL format in the browser's address bar.
>
> **[3:58](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=238)** In the screenshot, you can see I'm hosting the application on a local server.
>
> **[4:02](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=242)** Your URL is likely customized with your company's domain name.
>
> **[4:06](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=246)** Another way you can tell this is server is because there's a version number at the bottom of almost every page.
>
> **[4:12](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=252)** In my example, I installed Jira software first and then added Jira Service Management to it, so the version number displayed is for Jira software.
>
> **[4:22](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=262)** To find your JSM version number, go to the Versions & Licenses page in the Applications admin area.
>
> **[4:29](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=269)** You'll need this version number to leverage the correct documentation.
>
> **[4:34](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=274)** The last deployment type is data center.
>
> **[4:36](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=276)** Just like server, data center is self hosted, has similar server features and design, and is billed annually in tiers.
>
> **[4:45](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=285)** Data center is built for scale and mission-critical environments.
>
> **[4:49](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=289)** It includes clustering, which has multiple application nodes or instances for high availability, load balancing, redundancy, and disaster recovery.
>
> **[4:59](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=299)** If you have multiple instances in data center, you'll see a unique identifier in the applications footer.
>
> **[5:05](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=305)** And of course, you can check the products on your bill at my.[atlassian.com](https://atlassian.com).
>
> **[5:10](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=310)** One note for this course, server and data center have the same user interface and similar features.
>
> **[5:16](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=316)** Unless labeled otherwise, server admins can leverage the data center information and vice versa.
>
> **[5:23](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=323)** Here's a recap of the different types of Jira.
>
> **[5:25](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=325)** So, which application type do you have?
>
> **[5:28](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=328)** Additionally, which deployment type do you have?
>
> **[5:31](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=331)** It's important to know for two reasons.
>
> **[5:34](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=334)** First, you need to know which set of documentation to reference.
>
> **[5:38](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=338)** In the screenshot example, you'll see that there's different documentation for cloud and for each server version.
>
> **[5:44](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=344)** Don't make my mistake and waste time reading the wrong information.
>
> **[5:48](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=348)** Second, you can extend Jira's capabilities with apps from the Atlassian Marketplace.
>
> **[5:54](https://www.linkedin.com/learning/jira-service-management-administration/which-deployment-type-do-you-have?u=76281980&t=354)** In the screenshot example, the app is available for all three hosting options, but that's not true for every add-on however, always make sure that an app is available for your application type, deployment type, and version.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (11), [[Atlassian]] (10), [[Microsoft Products|Products]] (4), [[Microsoft Office|Office]] (1), [[Microsoft Azure]] (1)
> **Tools:** jira (11)
> **Env Vars:** url (5), jsm (2), aws (1)
> **CLI Commands:** find (3), make (3), aws (1)
> **URLs:** [atlassian.com](https://atlassian.com) (2), [atlassian.net](https://atlassian.net) (1)
> **UI Navigation:** switch to (1), go to (1)
> **Exercise Files:** template (1)
> **Analogies:** just like (1)

#### [Important terms and definitions](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=0)** - [Instructor] Next, we'll define the important terms so you can best utilize this course and teach end users too.
>
> **[0:07](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=7)** An issue is an individual item in [[Jira]].
>
> **[0:10](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=10)** Each time you create an item, you're creating a new issue with a unique key to identify it.
>
> **[0:15](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=15)** An issue is any individual record in the JIRA database.
>
> **[0:19](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=19)** It could represent a change, an incident, a problem, a task, a to-do item or any development item like a story, bug or epic.
>
> **[0:28](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=28)** A project is a collection of issues.
>
> **[0:31](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=31)** Now the [[Microsoft Word|word]] project in JIRA and JSM is different than an initiative your team is working on outside of JIRA.
>
> **[0:38](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=38)** Think of a JIRA project as a container for all your team's initiatives, tasks and to-do items.
>
> **[0:45](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=45)** There's generally one project per department, team or support function.
>
> **[0:49](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=49)** For example, you might have a project called [[Human Resources (HR)|human resources]] to track all the different things the HR team works on.
>
> **[0:56](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=56)** The HR team might use a JIRA business project or a JIRA service management support project.
>
> **[1:03](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=63)** At some organizations, they might have both.
>
> **[1:06](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=66)** The different application types provide multiple project types.
>
> **[1:10](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=70)** Each project type has different features.
>
> **[1:13](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=73)** JIRA Work Management has business type projects and JIRA Software has software type projects.
>
> **[1:18](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=78)** JIRA Service Management has a project type called service management in cloud and simply service in server and data center.
>
> **[1:27](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=87)** JIRA Service Management also has requests.
>
> **[1:30](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=90)** Requests are how JIRA issues are represented in the self-service portal to customers or end users.
>
> **[1:36](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=96)** In other words, a request is a simplified view of issue data.
>
> **[1:40](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=100)** Here's an example trouble report for a problem with the mail server.
>
> **[1:44](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=104)** On the left is the issue view in JIRA and on the right is the request view in JSM.
>
> **[1:50](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=110)** It's important to note that both views represent the exact same trouble report.
>
> **[1:55](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=115)** There's only one unique record in the database for it.
>
> **[1:58](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=118)** The unique key in this trouble report is IT1 and that ID is shown at the top of both views.
>
> **[2:04](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=124)** Both screenshots show the same information but the way it's displayed is different for different audiences.
>
> **[2:11](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=131)** The comprehensive view on the left is intended for use by support team members.
>
> **[2:15](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=135)** The simplified view on the right is intended for end users.
>
> **[2:19](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=139)** Now let's talk about users.
>
> **[2:21](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=141)** JIRA Service Management has two additional types: agents and customers.
>
> **[2:26](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=146)** An agent is anyone providing support, managing the support team or monitoring support team effectiveness.
>
> **[2:33](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=153)** The agent is the technician who solves the problem or provides the requested help.
>
> **[2:38](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=158)** An agent has all their work in JIRA.
>
> **[2:40](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=160)** They don't often use the customer portal.
>
> **[2:43](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=163)** As I mentioned earlier, the licensing model is different in JSM.
>
> **[2:48](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=168)** Agents require a JSM license to access a service project.
>
> **[2:53](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=173)** A customer is anyone who requests support.
>
> **[2:56](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=176)** Customers can include internal users, external users, employees, vendors, contractors and anyone else who needs help.
>
> **[3:05](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=185)** Customers file support requests and check on their progress in the simplified customer portal.
>
> **[3:11](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=191)** Customers generally don't access the area of JIRA that agents use to fulfill requests.
>
> **[3:16](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=196)** Another concept that's specific to JSM is an organization.
>
> **[3:21](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=201)** An organization is a group of customers.
>
> **[3:24](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=204)** Organizations can be shared across multiple service desks if desired.
>
> **[3:29](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=209)** One note for cloud users, the word organization is also used to describe a centralized list of users and last name [[Microsoft Products|products]].
>
> **[3:38](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=218)** So when I say organization in this course, I'm referring to the JIRA Service Management use only.
>
> **[3:44](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=224)** As I mentioned before, the self-service portal is a simplified interface that customers use to submit requests.
>
> **[3:51](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=231)** You'll also see it called other names like the customer portal, help center, help desk or service desk.
>
> **[3:57](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=237)** Each service project has its own customer portal.
>
> **[4:00](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=240)** As I mentioned earlier, your application may have one project and portal or one project and portal per support function.
>
> **[4:08](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=248)** There are two more JSM specific terms I wanted to mention.
>
> **[4:12](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=252)** A queue is a unified view of work or shared view of issues.
>
> **[4:16](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=256)** They're used to segment and categorize requests.
>
> **[4:20](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=260)** For example, there's a unique queue for displaying all open issues, another queue for issues assigned to you and a queue for issues due in 24 hours.
>
> **[4:29](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=269)** JIRA administrators and project administrators can also create custom queues.
>
> **[4:35](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=275)** Queues are similar to JQL filters in JIRA.
>
> **[4:38](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=278)** The difference is the whole support team shares the queues and sees the work that needs to be done by the team.
>
> **[4:44](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=284)** I'll show you some examples later in the course.
>
> **[4:47](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=287)** Finally, SLA stands for service level agreement.
>
> **[4:51](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=291)** It represents a goal or a commitment between a service provider and a customer.
>
> **[4:56](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=296)** For example, a high priority request might have a completion goal of one hour.
>
> **[5:01](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=301)** A low priority request might have a first response goal of four hours.
>
> **[5:06](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=306)** SLAs are configurable in JSM and there's a whole course chapter dedicated to this topic.
>
> **[5:12](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=312)** Always be sure to refer to these items by their real names.
>
> **[5:16](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=316)** It avoids confusion between users when reading documentation and when communicating with [[Atlassian]] support.
>
> **[5:23](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=323)** Finally, there are some other industry terms you might encounter when discussing JSM.
>
> **[5:28](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=328)** ITSM stands for information technology service management and it describes how an organization manages IT services for customers.
>
> **[5:37](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=337)** Atlassian added richer ITSM capabilities to JIRA service desk to create what we now know as JIRA Service Management.
>
> **[5:45](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=345)** [[ITIL]] or ITIL stands for information technology infrastructure library.
>
> **[5:51](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=351)** It's a framework or a detailed set of practices for IT activities like ITSM.
>
> **[5:57](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=357)** ITOM is IT operations management.
>
> **[6:01](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=361)** It focuses on event management, performance monitoring and procedures.
>
> **[6:06](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=366)** Check out at Atlassian's ITSM guide at the URL shown.
>
> **[6:10](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=370)** The term [[Agile Development|agile]] started out as an iterative approach to project management and [[Software Development]] but it since expanded to encompass other teams that want to quickly respond to change.
>
> **[6:20](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=380)** And finally, [[DevOps]] is a combination of the words development and operations.
>
> **[6:25](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=385)** If the dev team and the ops team worked together on one platform, it's easier to collaborate and rapidly address requests.
>
> **[6:33](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=393)** Atlassian said they took a hard look at the core ideals of Agile and DevOps when building JSM.
>
> **[6:39](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=399)** They wanted their tool to incorporate these ideals and help unify development, IT operations and business teams.
>
> **[6:47](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=407)** JIRA Service Management is ITSM done the Atlassian way.
>
> **[6:52](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=412)** These terms represent cultural philosophies, practices and tools to help organizations deliver solutions better and faster.
>
> **[7:00](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=420)** We won't cover these topics in this course as they deserve dedicated courses of their own.
>
> **[7:05](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=425)** But if you're interested in learning more, check out all the great courses in the [[LinkedIn]] Learning library.
>
> **[7:11](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=431)** What I love about JIRA is you can use it whether you use these frameworks and methodologies or use none at all.
>
> **[7:17](https://www.linkedin.com/learning/jira-service-management-administration/important-terms-and-definitions?u=76281980&t=437)** It works for all types of teams with all types of needs and procedures.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (23), [[Atlassian]] (5), [[Microsoft Word|Word]] (2), [[ITIL]] (2), [[Agile Development|Agile]] (2)
> **Env Vars:** jira (23), jsm (9), itsm (5), itil (2), it1 (1)
> **Tools:** jira (23)
> **Definitions:** is a  (6), stands for (3), is an  (2), in other words (1)
> **Analogies:** for example (3), similar to (1)
> **Cross-References:** later in (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Navigating the admin area](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=0)** - [Instructor] Next, let's discuss the administration areas.
>
> **[0:03](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=3)** You'll need [[Jira]] administration permissions to access the jira admin area.
>
> **[0:08](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=8)** This usually means being part of the Jira administrators group.
>
> **[0:11](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=11)** You'll need service project permissions to access the admin area for a specific service project too.
>
> **[0:17](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=17)** This usually means being part of the Jira service desk users or jira service management users group.
>
> **[0:23](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=23)** But of course, access groups could be named differently in your application.
>
> **[0:27](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=27)** To access the application admin menu, click the cog or gear icon at the top right.
>
> **[0:33](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=33)** The menu contains all admin abilities, grouped in sections.
>
> **[0:37](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=37)** The sections and section names in the menu differ a little between deployment types.
>
> **[0:42](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=42)** In cloud, click the [[Microsoft Products|products]] option.
>
> **[0:45](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=45)** In server or data center, the option is called applications.
>
> **[0:49](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=49)** On the products or applications page, look for the jira service management menu in the left sidebar.
>
> **[0:55](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=55)** This page contains all the global settings for the JSM application.
>
> **[0:59](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=59)** Selections made here will impact the functionality of all service projects.
>
> **[1:04](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=64)** Use this area to determine whether agents can add announcement banners to the help center, where their customers can create their own accounts, whether agents can manage organizations and other global settings.
>
> **[1:16](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=76)** There's one specific setting I wanted to mention on this page.
>
> **[1:19](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=79)** Scroll down to the SLA metric names header.
>
> **[1:22](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=82)** For each SLA metric created in JSM, a new custom field is created in jira to hold the data.
>
> **[1:29](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=89)** I recommend you restrict custom field creation to jira application level administrators.
>
> **[1:34](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=94)** The default setting is yes, but I've changed it to no in the screenshot.
>
> **[1:39](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=99)** Too many custom fields are hard to maintain and could impact application performance.
>
> **[1:44](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=104)** For custom field tips and best practices, see the creating custom field section of my jira advanced administration course.
>
> **[1:52](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=112)** The next page in the application admin sidebar is labeled email requests.
>
> **[1:57](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=117)** Use these settings to customize how emails are handled when received by jira service management.
>
> **[2:03](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=123)** At the bottom of the page is the list of email addresses used by service projects.
>
> **[2:08](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=128)** Use the list to check address usage, connectivity, and the processing log.
>
> **[2:13](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=133)** These email settings are all specific to JSM and are in addition to other types of jira email functions and settings.
>
> **[2:22](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=142)** In server and data center, you may have an extra side bar link to manage common integrations.
>
> **[2:29](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=149)** The next admin area is for each service project.
>
> **[2:32](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=152)** Go to the list of all jira projects by clicking the projects link in the main nav and selecting view all projects in the menu.
>
> **[2:40](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=160)** In server and data center, use the filtering options in the left sidebar to only show service type projects.
>
> **[2:46](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=166)** In cloud, the filter options are at the top of the page.
>
> **[2:50](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=170)** Then click the name of any service project.
>
> **[2:53](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=173)** By default, we'll see the queues area used by support agents.
>
> **[2:57](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=177)** Click the project settings button at the bottom of the left sidebar to access the project admin area.
>
> **[3:03](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=183)** This page looks slightly different in cloud, but the project settings button is in a similar place.
>
> **[3:09](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=189)** In server and data center an admin lands on the request types page by default.
>
> **[3:15](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=195)** The first set of sidebar settings are common to all jira projects.
>
> **[3:19](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=199)** Further down on the page are settings specific to JSM projects.
>
> **[3:23](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=203)** The additional links below are for standard jira project settings, like issue types, workflows, screens, and more.
>
> **[3:29](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=209)** You might also have additional links for managing third-party app settings.
>
> **[3:34](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=214)** In cloud, an admin lands on the details page by default.
>
> **[3:38](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=218)** The jira and JSM settings are ordered differently.
>
> **[3:42](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=222)** For example, the second section shows the jira issue types and the JSM request types together.
>
> **[3:49](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=229)** If you have jira software and jira service management, how do you know which project admin links are for jira project settings and which are for service management features.
>
> **[3:58](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=238)** While the settings work together to power service projects, it's helpful to know which links are for which application type so you can consult the correct documentation and information.
>
> **[4:09](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=249)** Visit the URL shown for a handy list.
>
> **[4:12](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=252)** If you need help configuring any jira settings, take my jira basic and advanced administration courses.
>
> **[4:18](https://www.linkedin.com/learning/jira-service-management-administration/navigating-the-admin-area?u=76281980&t=258)** For help configuring the settings specific to jira service management simply continue this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (22), [[Microsoft Products|Products]] (2)
> **Tools:** jira (22)
> **Env Vars:** jsm (6), sla (2), url (1)
> **UI Navigation:** in the menu (2), scroll down (1), go to (1)
> **Prerequisites:** you'll need (2)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 2. Jira and JSM Differences

[↑ Back to Table of Contents](#table-of-contents)

#### [JSM feature overview](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=0)** - [Instructor] In this section, we'll discuss the ways JSM extends standard [[Jira]] capabilities.
>
> **[0:05](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=5)** As I mentioned, Jira Service Management is built on Jira.
>
> **[0:09](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=9)** Here's an overview of the extra JSM features.
>
> **[0:13](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=13)** First, let's talk about the self-service portal, which is sometimes called the customer portal or the help center.
>
> **[0:19](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=19)** It's the place employees or customers submit requests and view self-help information from a connected [[Confluence]] knowledge base.
>
> **[0:27](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=27)** You can customize the colors, some language and add a logo.
>
> **[0:31](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=31)** If you have multiple help desks, meaning multiple JSM projects like in the screenshot, the user selects one and then select the type of request.
>
> **[0:40](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=40)** If you only have one help desk, the user simply sees the list of request types.
>
> **[0:45](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=45)** Speaking of request types, you may recall from a previous section that a request is how a Jira issue is represented on the self-service portal to customers or end users.
>
> **[0:56](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=56)** Each JSM requests maps to a Jira issue type.
>
> **[0:59](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=59)** Here are some common ways to use them.
>
> **[1:02](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=62)** The first is for fulfilling service requests.
>
> **[1:05](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=65)** You might have multiple requests for [[Forms]] for [[Hardware]] or software support, employee onboarding or general helper questions.
>
> **[1:13](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=73)** There's no limit to how many requests forms you can create.
>
> **[1:16](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=76)** But of course, fewer are easier for admins to manage and for users to select.
>
> **[1:21](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=81)** The next request category is for incident management.
>
> **[1:25](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=85)** Use these requests to quickly collect incident details, respond to them and resolve them.
>
> **[1:30](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=90)** The screenshot shows a sample request form to report an incident.
>
> **[1:35](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=95)** The next category is change management.
>
> **[1:37](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=97)** You use this type to track changes to infrastructure, services, records and more.
>
> **[1:42](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=102)** The screenshot shows a sample change issue for an agent to coordinate or fulfill.
>
> **[1:47](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=107)** These types of requests often utilize automation, approval functionality or integrations with [[Continuous Delivery (CD)|continuous delivery]] tools.
>
> **[1:55](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=115)** We'll cover these areas later in the course.
>
> **[1:58](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=118)** The next category is [[Problem Management]].
>
> **[2:01](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=121)** These are useful to collect the root cause of repeat problems and track their resolution.
>
> **[2:06](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=126)** Sometimes problems are caused by an incident.
>
> **[2:09](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=129)** For example, if there's a web server incident, a customer might report that they can't access a website.
>
> **[2:15](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=135)** You can use incident reports as an opportunity to document workarounds and help agents detect root causes.
>
> **[2:23](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=143)** If your service management project was created in cloud with an ITSM template, you'll see these categories and the Projects left sidebar.
>
> **[2:31](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=151)** I'll show you this project type and others later in the course.
>
> **[2:34](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=154)** If you didn't use this template, or if you have server or data center, you can use queues instead to segment requests.
>
> **[2:41](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=161)** We just covered some common requests categories, but you're not limited to these.
>
> **[2:46](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=166)** You can create request forms for any type of thing a user can request at your organization.
>
> **[2:51](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=171)** I've listed just a few other types of examples to give you some ideas.
>
> **[2:56](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=176)** As you might expect, all these different types of requests have their own request forms.
>
> **[3:01](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=181)** The fields the agent sees can differ from the fields the customer sees.
>
> **[3:06](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=186)** For example, you can show the customer a subset of the fields on the issue create screen.
>
> **[3:11](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=191)** On the left is a Jira create screen which contains many standard Jira fields as expected.
>
> **[3:17](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=197)** On the right is a simplified version for the customer, which only contains three fields.
>
> **[3:23](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=203)** Or you can change a field's display name to make it easier for the customer to understand what information to provide.
>
> **[3:29](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=209)** For example, change the label of the Jira Summary field to How can we help or some other customer friendly language.
>
> **[3:37](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=217)** Likewise, you can change workflow status display names for customers as well.
>
> **[3:41](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=221)** JSM has queues or lists of related issues to organize and filter requests.
>
> **[3:46](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=226)** You can use the built-in queues or create new ones for the support team to leverage.
>
> **[3:51](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=231)** Think of a queue as a filter that's shared by the entire team.
>
> **[3:55](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=235)** In this example, there are 22 issues in the queue called All open.
>
> **[4:00](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=240)** The next feature is automation.
>
> **[4:02](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=242)** Use it to create rules to automate actions based on criteria you set.
>
> **[4:07](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=247)** For example, automatically close requests due to inactivity, or reopen them if the customer adds a new comment.
>
> **[4:13](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=253)** Don't miss the automation section later in the course.
>
> **[4:16](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=256)** In JSM, it's much easier to create requests via email than in Jira.
>
> **[4:21](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=261)** Simply create a custom email address and then connect it to a service project.
>
> **[4:25](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=265)** Messages sent to that special address are automatically turned into support requests.
>
> **[4:30](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=270)** You can choose whether to accept email requests from known customer accounts or from anyone on the web.
>
> **[4:37](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=277)** Another way to create issues is through the embeddable widget in JSM Cloud.
>
> **[4:42](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=282)** This feature is only for portals that don't require users to log in though.
>
> **[4:47](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=287)** The widget is a little form you can embed in other webpages or applications.
>
> **[4:51](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=291)** For example, add it to your public website or company intranet, so users can create requests without leaving that application.
>
> **[4:59](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=299)** After you enable the widget, you'll get a snippet of code to add to other applications.
>
> **[5:04](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=304)** If you have server or data center, use the issue collector feature instead.
>
> **[5:09](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=309)** Instructions, best practices and some caveats for the issue collector are discussed in the advanced feature section of my advanced Jira administration course.
>
> **[5:19](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=319)** In addition to the notifications that Jira sends to agents through a notification scheme, there are also special notifications just for customers.
>
> **[5:27](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=327)** I'll show you how to customize these in a later section.
>
> **[5:31](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=331)** A useful JSM feature is service level agreements or SLAs for short.
>
> **[5:36](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=336)** SLAs provide a way to define goals, prioritize requests and measure metrics like response or completion time.
>
> **[5:43](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=343)** You can have zero, one or many SLAs per service project.
>
> **[5:48](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=348)** JSM comes loaded with some sample SLAs to get you started.
>
> **[5:51](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=351)** We'll talk more about creating, managing and troubleshooting these in the SLA section.
>
> **[5:58](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=358)** Wouldn't it be nice to get some feedback, especially when a customer is happy with the outcome of their request?
>
> **[6:03](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=363)** Traditionally, we did this in Jira with a workflow step, a transition screen and a bunch of custom fields.
>
> **[6:10](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=370)** In JSM, collecting customer feedback is built-in.
>
> **[6:14](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=374)** Next, connect a space in your confluence application to a service project in JSM.
>
> **[6:19](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=379)** This allows users to search knowledge-based content from the front page of the portal.
>
> **[6:23](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=383)** It will also automatically surface helpful content in a request.
>
> **[6:28](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=388)** In the example on the right, I entered printer won't print in the Summary field, and a confluence article titled "Printer Troubleshooting" automatically appeared below.
>
> **[6:37](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=397)** If the article solves my printer problem, I don't need to continue creating the help request.
>
> **[6:43](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=403)** Along with the regular Jira reports, there are also new reports for workload, customer satisfaction and other useful support specific insights.
>
> **[6:52](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=412)** You need access to a support project to view reports, but you don't need to be a project-level admin.
>
> **[6:58](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=418)** Look for the reports link in the left sidebar in the project.
>
> **[7:01](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=421)** I like the report called requests deflected.
>
> **[7:04](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=424)** In server and data center, it's called article usage and article effectiveness.
>
> **[7:10](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=430)** This measures how many users solve their own problems using knowledge-based content or viewed a confluence article.
>
> **[7:16](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=436)** Put some time into your knowledge-based content.
>
> **[7:19](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=439)** Make sure each article is written in a way it's intended audience will understand.
>
> **[7:24](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=444)** Well-written knowledge-based articles can reduce the number of requests submitted and quickly share information.
>
> **[7:30](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=450)** There are plenty of additional features, too.
>
> **[7:32](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=452)** Integrate JSM with Insight for asset management, Halp and [[Slack]] for [[Real-Time]] communication or Opsgenie for alerts, incident management and on-call schedules.
>
> **[7:44](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=464)** You can also connect deployment pipelines in tools like [[Bitbucket]], [[Jenkins]] and others.
>
> **[7:50](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=470)** There are project templates for legal, HR and facilities teams, so they can use JSM, too.
>
> **[7:56](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=476)** And there's a [[Representational State Transfer (REST)|REST]] API, so you can build custom apps to extend JSM even further.
>
> **[8:02](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=482)** [[Atlassian]] is adding new capabilities all the time.
>
> **[8:05](https://www.linkedin.com/learning/jira-service-management-administration/jsm-feature-overview?u=76281980&t=485)** See the JSM feature page for the full feature list or the pricing page to compare features across cloud plans.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (13), [[Confluence]] (4), [[Forms]] (4), [[Hardware]] (1), [[Continuous Delivery (CD)|Continuous delivery]] (1)
> **Env Vars:** jsm (15), itsm (1), sla (1), rest (1), api (1)
> **Tools:** jira (13), confluence (4), slack (1), bitbucket (1)
> **Analogies:** for example (5)
> **Cross-References:** later in (3)
> **Definitions:** is a  (3)
> **CLI Commands:** make (2)
> **Exercise Files:** template (2)

#### [Types of users](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=0)** - As previously defined, [[Jira]] service management has different types of users, agents, and customers.
>
> **[0:06](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=6)** In most [[Atlassian]] applications, all named users need a license to use the product.
>
> **[0:11](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=11)** Jira service management has a different model, however.
>
> **[0:14](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=14)** Agents are licensed and customers are not.
>
> **[0:18](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=18)** Let's look at the user type differences across multiple Atlassian applications.
>
> **[0:23](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=23)** Here are the user types in JIRA Software and Jira Service Management.
>
> **[0:27](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=27)** All [[Microsoft Products|products]] support anonymous access, except the free versions in Cloud.
>
> **[0:32](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=32)** In JIRA Software, anonymous users can view, browse, and create issues, but the users cannot be identified.
>
> **[0:39](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=39)** The user's not logged in.
>
> **[0:41](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=41)** So, any issues will show the [[Microsoft Word|word]] "anonymous" in the reporter field.
>
> **[0:46](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=46)** In JSM Server and Data Center, customers need an account to log in.
>
> **[0:50](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=50)** In JSM Cloud, customers can be anonymous, have accounts, or they can create requests without logging in.
>
> **[0:58](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=58)** You can configure the customer portal to be login free.
>
> **[1:01](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=61)** Here's how to do it. In Cloud, there are two steps to allow customers to create requests without an account.
>
> **[1:08](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=68)** First, a Jira application administrator needs to enable it.
>
> **[1:12](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=72)** The setting is on the configuration page, in the products admin area in Cloud.
>
> **[1:17](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=77)** Choose "Yes" for the questions, "Can customers create their own accounts?" and "Can customers access and send requests without logging in?"
>
> **[1:27](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=87)** Then, a project administrator needs to allow anyone to send requests to the project.
>
> **[1:32](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=92)** Go to a project's customer permissions page and select the "Anyone on the web" option.
>
> **[1:37](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=97)** If you use a login free portal, customers can find the portal and it's help articles via search engines.
>
> **[1:43](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=103)** Instead of logging into an account, customer requests are tracked using an email address they provide.
>
> **[1:49](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=109)** If you don't want your portal discoverable on the internet and you want all customers to log in, then don't enable the login free portal settings.
>
> **[1:57](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=117)** Server and Data Center doesn't have a login free portal, but there's an open feature request for it.
>
> **[2:02](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=122)** And at least one app in the Atlassian Marketplace that adds it.
>
> **[2:06](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=126)** Instead, you can control whether users can create their own accounts or not.
>
> **[2:10](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=130)** Look for the public signup settings on the JSM configuration page in the applications admin area.
>
> **[2:18](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=138)** Regardless of whether customers log into the portal or not customers don't need licenses.
>
> **[2:23](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=143)** Agents do need licenses, however, to work on JSM issues and to communicate with customers.
>
> **[2:29](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=149)** Sometimes people in an organization have multiple roles or are part of multiple teams. For example, maybe there's a small system where the developer and the support technician are the same person.
>
> **[2:41](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=161)** They use Jira software to track new features desired by the business team.
>
> **[2:45](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=165)** And they also use Jira service management to respond to [[Customer Support]] requests.
>
> **[2:50](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=170)** In this case, the same user has access to, and a license for, both applications.
>
> **[2:56](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=176)** Atlassian has a chart that shows what each type of license allows users to do in the different applications.
>
> **[3:02](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=182)** You'll find the chart at the URL shown.
>
> **[3:05](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=185)** You likely won't have the same number of Jira software and JIRA service management licenses.
>
> **[3:10](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=190)** Only pay for the number of users needed per product.
>
> **[3:13](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=193)** Finally, customers can see [[Confluence]] knowledge-based content in the customer portal, but they don't need a Confluence license.
>
> **[3:20](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=200)** In Confluence, you only need to license users who create and edit content or manage the application.
>
> **[3:27](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=207)** Each type of JSM user has a role to play in a service project.
>
> **[3:32](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=212)** The administrator's role is for project admins who manage the project and portal settings.
>
> **[3:37](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=217)** The service desk team role is for agents who respond to and fulfill support requests.
>
> **[3:43](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=223)** And the service desk customer role is for users who request support.
>
> **[3:47](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=227)** Here's a tip, add one or two of your lead agents to the project administrator role.
>
> **[3:53](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=233)** This way, they can manage the project when their regular project admin is unavailable or out of the [[Microsoft Office|office]].
>
> **[3:59](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=239)** Sometimes you'll see the service desk customer role named Service Project Customer-Portal Access.
>
> **[4:06](https://www.linkedin.com/learning/jira-service-management-administration/types-of-users?u=76281980&t=246)** Here's an example of that naming in a project's permission scheme.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (10), [[Atlassian]] (4), [[Confluence]] (3), [[Microsoft Products|Products]] (2), [[Microsoft Word|Word]] (1)
> **Tools:** jira (10), confluence (3)
> **Env Vars:** jsm (5), jira (3), url (1)
> **CLI Commands:** find (2)
> **UI Navigation:** go to (1), select the (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - as (1)

#### [Additional permissions](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=0)** - [Instructor] [[Jira]] Service Management includes additional permission abilities.
>
> **[0:04](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=4)** We'll discuss the specifics so you can identify the differences.
>
> **[0:08](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=8)** As explained in my advanced course, Jira has multiple levels of permissions.
>
> **[0:12](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=12)** JSM adds additional permissions for the application, the projects, the portal and the users.
>
> **[0:18](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=18)** Just like with other types of Jira, a user needs application access to use JSM features.
>
> **[0:24](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=24)** Application access is granted in each user's profile.
>
> **[0:28](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=28)** The general application access group is called jira-servicedesk-users, or Jira Service Management users.
>
> **[0:35](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=35)** This group is used in global permissions, permission schemes, and anywhere else access is granted to individuals.
>
> **[0:43](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=43)** There are no JSM specific global permissions, but the jira-servicedesk-users or Jira Service Management users group needs to be added, so users can perform standard global functions, like browsing users and groups, sharing [[Dashboards]] and filters, making bulk changes and more.
>
> **[1:00](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=60)** Here's an example of the members of the Browse users and groups global permission.
>
> **[1:04](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=64)** This permission is for the user picker fields and sharing functions.
>
> **[1:08](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=68)** You must have this permission to select from the list of users in the application.
>
> **[1:13](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=73)** In Cloud the permission is called Browse users and groups, and in Server and Data Center it's called Browse users.
>
> **[1:21](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=81)** I want users of all application types to have this ability, so the general groups for each application are present.
>
> **[1:27](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=87)** Go to the Global permissions page, in the system admin area, and make sure the jira-servicedesk-users or Jira Service Management users group is present as desired.
>
> **[1:38](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=98)** JSM projects use project roles, permission schemes, and have project specific users just like other Jira projects, but there are additional settings to handle the additional kinds of users in service projects.
>
> **[1:51](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=111)** First, there are two additional global project roles, Service Desk Customers and Service Desk Team.
>
> **[1:57](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=117)** You can leverage these roles in all the places you use other standard Jira roles, like in permission schemes, notification schemes, issue security schemes, workflow behaviors, apps and more.
>
> **[2:10](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=130)** In the projects permission scheme there's one additional JSM permission, it's called Service Project Agent, and it's used to allow members of the support team to access JSM features and interact with customers.
>
> **[2:23](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=143)** In the screenshot you can see that one of the new project roles, called Service Desk Team, was granted this permission.
>
> **[2:30](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=150)** Now let's go to the admin area, of a service project, where we manage role membership.
>
> **[2:35](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=155)** In Cloud this page is called People, and in Server and Data Center it's called Users and Roles.
>
> **[2:41](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=161)** The user interface is different between the deployment types, but the concepts are the same.
>
> **[2:46](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=166)** In this example, the group called jira-servicedesk-users is assigned the Service Desk Team role.
>
> **[2:53](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=173)** In newer versions of Jira, this group might be shown as Jira Service Management users.
>
> **[2:59](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=179)** Here's how the additional JSM permission settings work together from the bottom up.
>
> **[3:03](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=183)** A JSM user was added to the jira-servicedesk-users, or Jira Service Management users group, giving them abilities wherever that group is used.
>
> **[3:12](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=192)** This group is used in the Service Desk Team role in an individual service project.
>
> **[3:17](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=197)** The Service Desk Team role is used by the service projects permission scheme to grant the Service Project Agent ability.
>
> **[3:24](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=204)** This lets agents access JSM features and interact with customers.
>
> **[3:29](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=209)** Now this may sound overly complex, but this setup allows you to more easily manage many users.
>
> **[3:35](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=215)** Imagine if you had a hundred agents, and you had to add them to all the places they need permissions.
>
> **[3:41](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=221)** Instead, you can add them to a group and add the group to a role.
>
> **[3:45](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=225)** It's always better to use roles in groups, so settings are flexible and easier to maintain.
>
> **[3:51](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=231)** Avoid specifying individual users when possible, that creates a troubleshooting nightmare.
>
> **[3:57](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=237)** There's one more set of permissions to be aware of, specifically for customers.
>
> **[4:02](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=242)** Again, customers create and manage all their requests in the customer portal, not in Jira.
>
> **[4:08](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=248)** There are two places where you'll find settings impacting customers.
>
> **[4:12](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=252)** The first is the configuration page in the [[Microsoft Products|products]] admin area in Cloud.
>
> **[4:17](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=257)** This page contains settings for allowing users to create their own accounts or to use the portal without an account.
>
> **[4:24](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=264)** In Server and Data Center the configuration page is in the applications admin area.
>
> **[4:29](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=269)** This page contains settings for account signup and email verification.
>
> **[4:34](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=274)** The second place to manage customer permissions is in the individual service projects.
>
> **[4:39](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=279)** The customer permissions page in Cloud contains options for who can access requests and how they can be shared.
>
> **[4:45](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=285)** The same customer permissions page in Server and Data Center contains an additional option for voting.
>
> **[4:52](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=292)** Here's a tip.
>
> **[4:53](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=293)** Some settings pages have a form submission button and some don't.
>
> **[4:56](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=296)** Always scroll down to the bottom of the page to see if a button needs to be clicked.
>
> **[5:00](https://www.linkedin.com/learning/jira-service-management-administration/additional-permissions?u=76281980&t=300)** The button may be grayed out until you change a selection above.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (17), [[Dashboards]] (1), [[Microsoft Products|Products]] (1)
> **Tools:** jira (17)
> **Env Vars:** jsm (9)
> **UI Navigation:** go to (2), scroll down (1)
> **Definitions:** is called (3)
> **Analogies:** just like (2), imagine (1)
> **CLI Commands:** make (1), find (1)
> **Warnings:** be aware (1)

#### [Additional notifications](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=0)** - [Narrator] [[Jira]] Service Management has one type of notification feature for agents and a different type for customers.
>
> **[0:06](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=6)** Agent notifications are controlled by a notification scheme, just like in Jira Software.
>
> **[0:11](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=11)** Notification schemes control the email messages sent for issues only, for example, who should receive a message when an issue is created, updated or assigned?
>
> **[0:21](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=21)** here's a screenshot of the default Jira notification scheme.
>
> **[0:25](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=25)** In this example, there's only one scheme and it's used by all projects, including the service type projects.
>
> **[0:32](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=32)** You might have one scheme that sends all the standard notifications and one that sends very few messages.
>
> **[0:38](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=38)** Or you might have a scheme specifically for [[Software Projects]] and another for service projects.
>
> **[0:44](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=44)** Regardless of how you structure it, always keep the needs of the end user in mind.
>
> **[0:50](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=50)** Think about which types of notifications are important and useful.
>
> **[0:53](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=53)** Never send more notifications or create more schemes than are actually needed.
>
> **[0:59](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=59)** Here's how the notifications are set for issues created within Jira.
>
> **[1:03](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=63)** Each notification type is sent to a list of users, groups, or roles.
>
> **[1:08](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=68)** In this example, the issue created notification is sent to the current assignee, the reporter, and all watchers.
>
> **[1:16](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=76)** In addition to the notifications that Jira sends to agents, through a project notification scheme, there are also special notifications just for customers.
>
> **[1:25](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=85)** And the best part is, for customer notifications you can brand and customize the content.
>
> **[1:30](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=90)** Let's take a look at the branding features first.
>
> **[1:32](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=92)** Click edit templates to access the settings.
>
> **[1:35](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=95)** I've made some small customizations as an example.
>
> **[1:38](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=98)** First, I customize the email subject line by adding the name of the portal and a greater than sign as a separator, click insert variable to see the available options.
>
> **[1:49](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=109)** Keep in mind that email clients truncate long subject lines.
>
> **[1:53](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=113)** So if your portal name has many characters, you might not want to make this change.
>
> **[1:58](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=118)** Next, I scrolled down and added some simple [[HTML]] to customize the message body, I added a link to the contact page of my website, so users can chat live.
>
> **[2:09](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=129)** You can also customize the CSS and the text version of the messages.
>
> **[2:13](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=133)** And of course, insert variables here too.
>
> **[2:17](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=137)** You can see a preview of your changes at the bottom of the page.
>
> **[2:20](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=140)** All the HTML changes I made are highlighted.
>
> **[2:24](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=144)** Make sure to send yourself a test message so you can make sure the changes you made look as desired.
>
> **[2:30](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=150)** It doesn't take much to mess up HTML, simply forgetting to close a tag can ruin the entire display.
>
> **[2:36](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=156)** Finally, you can always revert the changes by clicking the link at the top of the page.
>
> **[2:42](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=162)** In addition to customizing the template, you can also customize individual messages.
>
> **[2:47](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=167)** Let's customize the message a customer receives when they create a request.
>
> **[2:51](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=171)** Click the edit link on the right, in the screenshot on the left, I've added custom copy, variables, and Wiki markup.
>
> **[2:59](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=179)** You can see the result in the email on the right.
>
> **[3:03](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=183)** As usual, there are some slight differences between the deployment method.
>
> **[3:07](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=187)** In cloud, you can disable messages.
>
> **[3:10](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=190)** In server and data center, there's a setting to send or suppress the verification email when a customer account is created.
>
> **[3:17](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=197)** You might want to turn this on if you allow public signup.
>
> **[3:21](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=201)** Right below the account verification option is a section labeled rules.
>
> **[3:25](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=205)** In server and data center, the email notifications are part of the automation feature.
>
> **[3:30](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=210)** As you can see, there's an audit log feature, not present in cloud.
>
> **[3:35](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=215)** Click the link to see execution details or messages sent in the past 90 days.
>
> **[3:41](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=221)** Finally, at the bottom of the page is a link to the automation feature.
>
> **[3:45](https://www.linkedin.com/learning/jira-service-management-administration/additional-notifications?u=76281980&t=225)** We'll discuss all the useful automation capabilities in an upcoming section.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (5), [[HTML]] (3), [[Software Projects]] (1)
> **Tools:** jira (5)
> **Env Vars:** html (3), css (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2)
> **Analogies:** just like (1), for example (1)
> **Exercise Files:** template (1)
> **Best Practices:** make sure to (1)


### 3. Setting Up a Test Environment

[↑ Back to Table of Contents](#table-of-contents)

#### [Test environment tips](https://www.linkedin.com/learning/jira-service-management-administration/test-environment-tips?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/test-environment-tips?u=76281980&t=0)** - [Instructor] I didn't have a test environment when I first started out, but I quickly learned how important it is when I broke things and made mistakes in production.
>
> **[0:08](https://www.linkedin.com/learning/jira-service-management-administration/test-environment-tips?u=76281980&t=8)** You need a safe place to experiment and learn without impacting real data.
>
> **[0:12](https://www.linkedin.com/learning/jira-service-management-administration/test-environment-tips?u=76281980&t=12)** And you need to be able to test your changes against real life scenarios.
>
> **[0:17](https://www.linkedin.com/learning/jira-service-management-administration/test-environment-tips?u=76281980&t=17)** Here are my tips for configuring your test environment.
>
> **[0:20](https://www.linkedin.com/learning/jira-service-management-administration/test-environment-tips?u=76281980&t=20)** It's important to be able to distinguish the test environment from production.
>
> **[0:24](https://www.linkedin.com/learning/jira-service-management-administration/test-environment-tips?u=76281980&t=24)** First on the [[Jira]] side, that the agents and administrators use, I changed the name of the application to test.
>
> **[0:31](https://www.linkedin.com/learning/jira-service-management-administration/test-environment-tips?u=76281980&t=31)** The application name is displayed in many places, including the browsers title.
>
> **[0:37](https://www.linkedin.com/learning/jira-service-management-administration/test-environment-tips?u=76281980&t=37)** Next, I use the look and feel settings to change the top nav color to green, which is different than the default color.
>
> **[0:44](https://www.linkedin.com/learning/jira-service-management-administration/test-environment-tips?u=76281980&t=44)** I also changed my avatar icon to anything that's not my user photo, so I noticed the difference.
>
> **[0:51](https://www.linkedin.com/learning/jira-service-management-administration/test-environment-tips?u=76281980&t=51)** This is a handy strategy to use for tests or service accounts as well.
>
> **[0:55](https://www.linkedin.com/learning/jira-service-management-administration/test-environment-tips?u=76281980&t=55)** Some organizations also change the application logo in their test environment.
>
> **[1:00](https://www.linkedin.com/learning/jira-service-management-administration/test-environment-tips?u=76281980&t=60)** In the Jira Service Management Portal.
>
> **[1:02](https://www.linkedin.com/learning/jira-service-management-administration/test-environment-tips?u=76281980&t=62)** I changed the help center name, the page title, and made the top banner green.
>
> **[1:07](https://www.linkedin.com/learning/jira-service-management-administration/test-environment-tips?u=76281980&t=67)** Click the customize button to configure these settings and others.
>
> **[1:11](https://www.linkedin.com/learning/jira-service-management-administration/test-environment-tips?u=76281980&t=71)** The portal has built in banner functionality, but I found it didn't provide enough of a visual change.
>
> **[1:16](https://www.linkedin.com/learning/jira-service-management-administration/test-environment-tips?u=76281980&t=76)** Changing the color and the name at the top is the most effective method for me.
>
> **[1:21](https://www.linkedin.com/learning/jira-service-management-administration/test-environment-tips?u=76281980&t=81)** If you have server or data center, you can also use Jira's built-in announcement banner.
>
> **[1:27](https://www.linkedin.com/learning/jira-service-management-administration/test-environment-tips?u=76281980&t=87)** You can find the setting in the system, admin area.
>
> **[1:31](https://www.linkedin.com/learning/jira-service-management-administration/test-environment-tips?u=76281980&t=91)** As you can see, the banner function allows [[HTML]], but you need to be really careful with it.
>
> **[1:37](https://www.linkedin.com/learning/jira-service-management-administration/test-environment-tips?u=76281980&t=97)** One day when I was editing an announcement banner, my cat jumped onto my keyboard and submitted my half-written code.
>
> **[1:44](https://www.linkedin.com/learning/jira-service-management-administration/test-environment-tips?u=76281980&t=104)** This caused all the Jira pages not to load any content.
>
> **[1:47](https://www.linkedin.com/learning/jira-service-management-administration/test-environment-tips?u=76281980&t=107)** I had to stop the application, remove announcement banner records in the database, and restart Jira.
>
> **[1:54](https://www.linkedin.com/learning/jira-service-management-administration/test-environment-tips?u=76281980&t=114)** The cat and I have since had a chat about his work performance.
>
> **[1:57](https://www.linkedin.com/learning/jira-service-management-administration/test-environment-tips?u=76281980&t=117)** Always test your code outside of Jira first, and be sure to close all markup tags.
>
> **[2:03](https://www.linkedin.com/learning/jira-service-management-administration/test-environment-tips?u=76281980&t=123)** Here's some additional tips for your test environment.
>
> **[2:06](https://www.linkedin.com/learning/jira-service-management-administration/test-environment-tips?u=76281980&t=126)** First, disable email to avoid notifying end users with duplicate or fake data.
>
> **[2:11](https://www.linkedin.com/learning/jira-service-management-administration/test-environment-tips?u=76281980&t=131)** Next, I recommend matching your test environment settings to production as much as possible.
>
> **[2:17](https://www.linkedin.com/learning/jira-service-management-administration/test-environment-tips?u=76281980&t=137)** Use this environment to test the impact of major configuration changes to perform maintenance activities and to vet new apps before doing it all in production.
>
> **[2:27](https://www.linkedin.com/learning/jira-service-management-administration/test-environment-tips?u=76281980&t=147)** And for server and data center, get read only access to the Jira database.
>
> **[2:33](https://www.linkedin.com/learning/jira-service-management-administration/test-environment-tips?u=76281980&t=153)** Understanding how the data is structured will solve a lot of mysteries and make you a better admin.
>
> **[2:39](https://www.linkedin.com/learning/jira-service-management-administration/test-environment-tips?u=76281980&t=159)** You can access additional data that's not available in the UI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (7), [[HTML]] (1)
> **Tools:** jira (7)
> **CLI Commands:** cat (2), find (1), make (1)
> **Env Vars:** html (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Choose a test environment](https://www.linkedin.com/learning/jira-service-management-administration/choose-a-test-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/choose-a-test-environment?u=76281980&t=0)** - [Instructor] Here are some test environment options for cloud customers using the [[Atlassian]] hosted environment.
>
> **[0:06](https://www.linkedin.com/learning/jira-service-management-administration/choose-a-test-environment?u=76281980&t=6)** There's a free sandbox option built into all premium and enterprise plans.
>
> **[0:11](https://www.linkedin.com/learning/jira-service-management-administration/choose-a-test-environment?u=76281980&t=11)** This is an isolated environment where you can test and experiment without impacting production.
>
> **[0:16](https://www.linkedin.com/learning/jira-service-management-administration/choose-a-test-environment?u=76281980&t=16)** The application has the same user limit as the production application it's linked to.
>
> **[0:21](https://www.linkedin.com/learning/jira-service-management-administration/choose-a-test-environment?u=76281980&t=21)** The application will have its own URL, which is similar to the production URL.
>
> **[0:27](https://www.linkedin.com/learning/jira-service-management-administration/choose-a-test-environment?u=76281980&t=27)** To create the sandbox login as a cloud organization administrator at admin.[atlassian.com](https://atlassian.com).
>
> **[0:33](https://www.linkedin.com/learning/jira-service-management-administration/choose-a-test-environment?u=76281980&t=33)** Click the [[Microsoft Products|Products]] link at the top and click Sandbox on the left sidebar.
>
> **[0:38](https://www.linkedin.com/learning/jira-service-management-administration/choose-a-test-environment?u=76281980&t=38)** The screenshot shows no sandboxes configured.
>
> **[0:41](https://www.linkedin.com/learning/jira-service-management-administration/choose-a-test-environment?u=76281980&t=41)** And this is because sandboxes are only available with premium and enterprise plans.
>
> **[0:46](https://www.linkedin.com/learning/jira-service-management-administration/choose-a-test-environment?u=76281980&t=46)** If you have one of these plans, you'll see a Create button at the top right.
>
> **[0:50](https://www.linkedin.com/learning/jira-service-management-administration/choose-a-test-environment?u=76281980&t=50)** Once the sandbox is created, you can automatically copy data from the production environment.
>
> **[0:56](https://www.linkedin.com/learning/jira-service-management-administration/choose-a-test-environment?u=76281980&t=56)** For any information that can't be copied, you can set it up manually just like you'd do with any other environment.
>
> **[1:02](https://www.linkedin.com/learning/jira-service-management-administration/choose-a-test-environment?u=76281980&t=62)** Read more about this feature at the URL shown.
>
> **[1:06](https://www.linkedin.com/learning/jira-service-management-administration/choose-a-test-environment?u=76281980&t=66)** If you're an Atlassian marketplace developer, you can sign up for a free development instance.
>
> **[1:11](https://www.linkedin.com/learning/jira-service-management-administration/choose-a-test-environment?u=76281980&t=71)** Developer assets are subject to the Atlassian developer terms which is a separate agreement from the regular terms of service.
>
> **[1:19](https://www.linkedin.com/learning/jira-service-management-administration/choose-a-test-environment?u=76281980&t=79)** This license comes with a limited number of users for test purposes.
>
> **[1:23](https://www.linkedin.com/learning/jira-service-management-administration/choose-a-test-environment?u=76281980&t=83)** For example, you can only have one JSM agent user and five [[Jira]] Software users, read more at the URL shown.
>
> **[1:31](https://www.linkedin.com/learning/jira-service-management-administration/choose-a-test-environment?u=76281980&t=91)** Next, you can get a second instance and pay for just a few users.
>
> **[1:36](https://www.linkedin.com/learning/jira-service-management-administration/choose-a-test-environment?u=76281980&t=96)** There's also a free version of cloud.
>
> **[1:38](https://www.linkedin.com/learning/jira-service-management-administration/choose-a-test-environment?u=76281980&t=98)** It's like the paid version except it includes less features.
>
> **[1:41](https://www.linkedin.com/learning/jira-service-management-administration/choose-a-test-environment?u=76281980&t=101)** For example, it doesn't include project or issue permissions and it won't help you test those areas.
>
> **[1:47](https://www.linkedin.com/learning/jira-service-management-administration/choose-a-test-environment?u=76281980&t=107)** That's why I prefer the previous ideas.
>
> **[1:50](https://www.linkedin.com/learning/jira-service-management-administration/choose-a-test-environment?u=76281980&t=110)** Next, you can also start a new free trial.
>
> **[1:53](https://www.linkedin.com/learning/jira-service-management-administration/choose-a-test-environment?u=76281980&t=113)** This might be helpful if you're testing the features of a different cloud plan and don't wish to upgrade or downgrade production.
>
> **[2:00](https://www.linkedin.com/learning/jira-service-management-administration/choose-a-test-environment?u=76281980&t=120)** Finally, if you have no better option, create a test project in your production instance.
>
> **[2:07](https://www.linkedin.com/learning/jira-service-management-administration/choose-a-test-environment?u=76281980&t=127)** For Data Center customers hosting their own software, you can also get a free license for development and testing purposes.
>
> **[2:14](https://www.linkedin.com/learning/jira-service-management-administration/choose-a-test-environment?u=76281980&t=134)** Have your technical contact log into my.[atlassian.com](https://atlassian.com) and generate the dev license.
>
> **[2:20](https://www.linkedin.com/learning/jira-service-management-administration/choose-a-test-environment?u=76281980&t=140)** Make sure your test environment settings match your production environment as much as possible.
>
> **[2:25](https://www.linkedin.com/learning/jira-service-management-administration/choose-a-test-environment?u=76281980&t=145)** Don't forget to include any reverse proxies, SSL or load balancer settings.
>
> **[2:31](https://www.linkedin.com/learning/jira-service-management-administration/choose-a-test-environment?u=76281980&t=151)** There's also a 30 day free trial.
>
> **[2:34](https://www.linkedin.com/learning/jira-service-management-administration/choose-a-test-environment?u=76281980&t=154)** And, if you have no better option, create a test project in prod.
>
> **[2:38](https://www.linkedin.com/learning/jira-service-management-administration/choose-a-test-environment?u=76281980&t=158)** Regardless of the method you choose, make sure you have a place to test your changes before you unleash them on your users.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Atlassian]] (5), [[Microsoft Products|Products]] (1), [[Jira]] (1)
> **Env Vars:** url (4), jsm (1), ssl (1)
> **Analogies:** for example (2), similar to (1), just like (1), it's like (1)
> **CLI Commands:** make (2)
> **URLs:** [atlassian.com](https://atlassian.com) (2)
> **Definitions:** is an  (1), is a  (1)
> **Tools:** jira (1)
> **Best Practices:** don't forget (1)

#### [Create a test environment](https://www.linkedin.com/learning/jira-service-management-administration/create-a-test-environment-14237330?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/create-a-test-environment-14237330?u=76281980&t=0)** - [Instructor] [[Atlassian]] offers free versions of their cloud [[Microsoft Products|products]].
>
> **[0:03](https://www.linkedin.com/learning/jira-service-management-administration/create-a-test-environment-14237330?u=76281980&t=3)** Let's sign up for a free instance of [[Jira]] service management so we can experiment.
>
> **[0:08](https://www.linkedin.com/learning/jira-service-management-administration/create-a-test-environment-14237330?u=76281980&t=8)** First log into your Atlassian account at my.[atlassian.com](https://atlassian.com), next visit the URL shown.
>
> **[0:15](https://www.linkedin.com/learning/jira-service-management-administration/create-a-test-environment-14237330?u=76281980&t=15)** Choose JIRA service management from the list of free Atlassian products and complete the signup form.
>
> **[0:21](https://www.linkedin.com/learning/jira-service-management-administration/create-a-test-environment-14237330?u=76281980&t=21)** Finally, check your email for a verification link to complete the signup process.
>
> **[0:26](https://www.linkedin.com/learning/jira-service-management-administration/create-a-test-environment-14237330?u=76281980&t=26)** If you don't see an email, be sure to check your junk folder.
>
> **[0:29](https://www.linkedin.com/learning/jira-service-management-administration/create-a-test-environment-14237330?u=76281980&t=29)** Once your instance is ready, sign in and complete the setup wizard.
>
> **[0:34](https://www.linkedin.com/learning/jira-service-management-administration/create-a-test-environment-14237330?u=76281980&t=34)** For data center, Atlassian offers getting started guides for AWS and [[Microsoft Azure]].
>
> **[0:41](https://www.linkedin.com/learning/jira-service-management-administration/create-a-test-environment-14237330?u=76281980&t=41)** Here's the general process for data center first, have your technical contact log in to my.[atlassian.com](https://atlassian.com).
>
> **[0:48](https://www.linkedin.com/learning/jira-service-management-administration/create-a-test-environment-14237330?u=76281980&t=48)** Find JSM in your product list and look for a link named view developer license.
>
> **[0:53](https://www.linkedin.com/learning/jira-service-management-administration/create-a-test-environment-14237330?u=76281980&t=53)** Then copy the dev license key.
>
> **[0:55](https://www.linkedin.com/learning/jira-service-management-administration/create-a-test-environment-14237330?u=76281980&t=55)** You will see the link if you have a starter community or open license.
>
> **[1:00](https://www.linkedin.com/learning/jira-service-management-administration/create-a-test-environment-14237330?u=76281980&t=60)** Next, visit the URL shown and use the guides for AWS, for Microsoft Azure, or download an installer from the archives.
>
> **[1:09](https://www.linkedin.com/learning/jira-service-management-administration/create-a-test-environment-14237330?u=76281980&t=69)** You can also install JSM in an on-prem server, in a cloud data center, or on your local machine.
>
> **[1:16](https://www.linkedin.com/learning/jira-service-management-administration/create-a-test-environment-14237330?u=76281980&t=76)** Next, run the installer or start the setup in your chosen environment.
>
> **[1:21](https://www.linkedin.com/learning/jira-service-management-administration/create-a-test-environment-14237330?u=76281980&t=81)** Here's a tip, JSM comes with an embedded H2 testing database.
>
> **[1:26](https://www.linkedin.com/learning/jira-service-management-administration/create-a-test-environment-14237330?u=76281980&t=86)** You can use it or connect JSM to your own test database.
>
> **[1:30](https://www.linkedin.com/learning/jira-service-management-administration/create-a-test-environment-14237330?u=76281980&t=90)** Once your application starts up, apply the license.
>
> **[1:34](https://www.linkedin.com/learning/jira-service-management-administration/create-a-test-environment-14237330?u=76281980&t=94)** In the JIRA Admin Area.
>
> **[1:36](https://www.linkedin.com/learning/jira-service-management-administration/create-a-test-environment-14237330?u=76281980&t=96)** Visit admin applications, versions and licenses, then paste in the dev license key.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Atlassian]] (6), [[Jira]] (3), [[Microsoft Products|Products]] (2), [[Microsoft Azure]] (2)
> **Env Vars:** jsm (4), jira (3), url (2), aws (2)
> **Prerequisites:** setup (2), getting started (1), install (1)
> **CLI Commands:** aws (2), find (1)
> **Tools:** jira (3)
> **URLs:** [atlassian.com](https://atlassian.com) (2)
> **Speakers:** - [instructor] (1)


### 4. Managing Project Settings

[↑ Back to Table of Contents](#table-of-contents)

#### [Create a service project](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=0)** - [Instructor] In this section, we'll explore the different [[Jira]] project types and choose one of the templates to create a service project.
>
> **[0:07](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=7)** All application types come with templates to help you quickly build new projects.
>
> **[0:12](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=12)** It's like this blueprint for housing development.
>
> **[0:14](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=14)** Templates make it easy to build similar things repeatedly and create a standard to start from.
>
> **[0:20](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=20)** Jira project templates contain all the needed project settings, like an issue type scheme or a sample workflow designed for the purpose of the template.
>
> **[0:29](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=29)** These default settings help you get started, but it's good to know that you can customize them and you can share them between multiple projects.
>
> **[0:37](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=37)** Each tier application and deployment type comes with different templates.
>
> **[0:41](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=41)** The Jira service management templates contain settings for support functions.
>
> **[0:45](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=45)** They're commonly used by teams like IT, customer service and facilities.
>
> **[0:51](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=51)** The Jira software templates contain features to help teams plan, track and release software.
>
> **[0:56](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=56)** There are templates for Kanban, [[Scrum]], and simple bug tracking.
>
> **[1:01](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=61)** The Jira work management templates help business teams coordinate and manage tasks.
>
> **[1:06](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=66)** There are templates for product, process and task management.
>
> **[1:10](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=70)** It's important to select the right project type for your use case so you won't need to change it later.
>
> **[1:16](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=76)** In the Cloud screenshot on the left, you can see that the project type field is greyed out.
>
> **[1:21](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=81)** There's no easy way to change a project type in Cloud.
>
> **[1:24](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=84)** Instead, you'll need to create a new project and bulk move existing issues to it.
>
> **[1:30](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=90)** It's much easier in Server and Data Center.
>
> **[1:32](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=92)** You can simply select a different project type in the project details area.
>
> **[1:37](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=97)** Let's discuss the service management templates.
>
> **[1:40](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=100)** We'll look at JSM Cloud first.
>
> **[1:42](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=102)** To access the templates, visit the projects admin area and click the create project button.
>
> **[1:47](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=107)** There are many project templates to choose from, and you should pick the one that most closely represents how the project will be used or who's using it.
>
> **[1:55](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=115)** I'll click service management on the left sidebar.
>
> **[1:58](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=118)** Then I'll click on a template to see its description and additional information about its settings.
>
> **[2:04](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=124)** When I'm evaluating a template, the first thing I do is review who it's for and what it contains.
>
> **[2:09](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=129)** That information is usually on the right.
>
> **[2:13](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=133)** This [[IT Service Management]] template says it's specifically for IT and dev ops teams.
>
> **[2:19](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=139)** Just below that information are the included issue types and request types.
>
> **[2:23](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=143)** For example, this template uses the service request issue type and comes with over 10 associated request types.
>
> **[2:31](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=151)** This template contains a total of four issue types and 15 request types.
>
> **[2:36](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=156)** If you want to review the contents of other templates, click the X button at the top right of the page.
>
> **[2:42](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=162)** If you scroll down on the page, you'll notice there's another IT service management project template.
>
> **[2:47](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=167)** Let's take a look.
>
> **[2:49](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=169)** So now you have a decision to make.
>
> **[2:51](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=171)** You can choose the bigger template and remove elements you don't need, or you can choose the smaller template and add anything that's missing.
>
> **[2:59](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=179)** Next, I always evaluate the templates workflow when that information is available.
>
> **[3:04](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=184)** Let's select the general service management template.
>
> **[3:08](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=188)** The stock workflow for this template contains the statuses to do, pending, in progress and done.
>
> **[3:14](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=194)** Now let's compare this to the workflow in the customer service management template.
>
> **[3:19](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=199)** This workflow contains an additional status called reopen.
>
> **[3:23](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=203)** Sometimes I base my template choice on how similar or different the default workflow is to what the team needs.
>
> **[3:29](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=209)** I also like to try out different templates in my test environment before deciding.
>
> **[3:34](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=214)** You'll notice that different templates contain different integrations and sidebar options.
>
> **[3:39](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=219)** Finally, let's review the project templates available in Server and Data Center.
>
> **[3:44](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=224)** In the service project category, you can choose between basic, IT service management and customer service templates.
>
> **[3:51](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=231)** I'll select IT service management.
>
> **[3:53](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=233)** The template details are on the right side of this overlay.
>
> **[3:56](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=236)** Complete the fields and click the form submission button to create the project.
>
> **[4:03](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=243)** The HR team already uses Jira to track their internal work and to do lists.
>
> **[4:07](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=247)** They saw another team using the customer portal and think it would be great to have a JSM project as well to manage employee requests.
>
> **[4:14](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=254)** Let's create a new service project for the HR team.
>
> **[4:17](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=257)** We'll use Cloud, but the process is similar in Server and Data Center.
>
> **[4:22](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=262)** To create a new project, click the cog or gear icon, and select the projects admin option.
>
> **[4:27](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=267)** On the projects admin page, click the create project button at the top right.
>
> **[4:32](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=272)** I'll click service management on the left sidebar and select the HR service management template.
>
> **[4:38](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=278)** Then I'll review the details, make sure the template is a good fit for my use case and click the form submission button.
>
> **[4:45](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=285)** Next, some templates allow you to choose between a company managed or team managed project.
>
> **[4:50](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=290)** We'll talk more about the differences in a minute, but for this demo I'll select company managed.
>
> **[4:56](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=296)** Finally, we need to enter a unique name and a unique key to identify the project.
>
> **[5:01](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=301)** The HR team already has a project to track the team's internal work.
>
> **[5:05](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=305)** So I'll need to rename this project differently.
>
> **[5:09](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=309)** Finally, click the form submission button to create the project.
>
> **[5:12](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=312)** The project creation process is similar in Server and Data Center, except there are fewer template options and there's no concept of team managed projects.
>
> **[5:23](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=323)** Let's discuss some of the differences between company managed and team managed projects in JSM Cloud.
>
> **[5:29](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=329)** Some project templates allow you to choose between the two.
>
> **[5:32](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=332)** Company managed projects use schemes and are managed by Jira administrators.
>
> **[5:37](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=337)** Team managed projects are schemeless and are managed by regular users.
>
> **[5:42](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=342)** The user and admin interface is slightly different between the two options.
>
> **[5:47](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=347)** Here's an example of the project admin sidebar in two service projects.
>
> **[5:52](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=352)** If you look at the scroll bars, you can see that there are many more settings to configure in the managed projects on the left.
>
> **[5:59](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=359)** This is great if you need more advanced project setup, but of course more settings also means more to configure and maintain.
>
> **[6:08](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=368)** Because company managed projects use schemes, project settings can be shared between multiple projects.
>
> **[6:14](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=374)** This allows you to set standards and use the same process and terminology across many Jira projects.
>
> **[6:20](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=380)** Team managed projects do not share settings, however.
>
> **[6:24](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=384)** Any changes or customizations are specific to the project and don't impact other projects.
>
> **[6:30](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=390)** Next, company managed projects use detailed permission schemes to set individual permissions for users, groups, and roles.
>
> **[6:38](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=398)** In team managed projects, you specify an overall access level instead.
>
> **[6:44](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=404)** For example, make the project private to give access to a specified list of users or open to anyone with application access.
>
> **[6:52](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=412)** Finally, the workflow editors are very different between the two cloud project types.
>
> **[6:57](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=417)** The company managed version has both a visual and text mode.
>
> **[7:00](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=420)** So you can add behaviors like triggers, conditions, validators, and post functions.
>
> **[7:06](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=426)** The team managed version has a simplified interface and has built in rules to automate repetitive actions.
>
> **[7:13](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=433)** And of course there are other differences between project types.
>
> **[7:16](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=436)** So I encourage you to further explore them all in a test environment.
>
> **[7:20](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=440)** Also you'll want to consider any future data import or migration needs as capabilities often differ between project types.
>
> **[7:28](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=448)** The examples in this course will be for company managed projects.
>
> **[7:31](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=451)** As honestly, ,team managed projects are still evolving.
>
> **[7:35](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=455)** You'll want to keep [[Atlassian]]'s [[Product Development]] roadmap in mind when choosing between the types.
>
> **[7:40](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=460)** Also remember in Cloud, it's not easy to change project types later.
>
> **[7:45](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=465)** You'll want to make the best decision possible right when the project is created.
>
> **[7:50](https://www.linkedin.com/learning/jira-service-management-administration/create-a-service-project?u=76281980&t=470)** Check out the documentation for a list of differences and recommendations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (8), [[IT Service Management]] (4), [[Scrum]] (1), [[Atlassian]] (1), [[Product Development]] (1)
> **Exercise Files:** template (17)
> **Tools:** jira (8)
> **UI Navigation:** select the (4), click on (1), scroll down (1)
> **CLI Commands:** make (5)
> **Analogies:** for example (2), it's like (1), compare this to (1)
> **Prerequisites:** configure (2), you'll need (1), setup (1)
> **Env Vars:** jsm (3)

#### [Leverage workflow differences](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=0)** - [Instructor] In this section, we'll discuss the support workflow lifecycle and some unique JSM workflow features.
>
> **[0:06](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=6)** The first thing to consider is that the support process is usually different than other processes and therefore workflows look different as well.
>
> **[0:14](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=14)** Here are some examples.
>
> **[0:17](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=17)** Business projects often start out using short workflows for basic task tracking.
>
> **[0:22](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=22)** Then the workflows grow over time as processes evolve and needs grow.
>
> **[0:27](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=27)** Here's an example of a basic three-step workflow, which is a great starting point for task-type projects.
>
> **[0:33](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=33)** [[Software Projects]] often contain workflow steps for validation, prioritization and any other common steps needed for deploying code.
>
> **[0:42](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=42)** Here's an example of one of [[Jira]]'s default software workflows.
>
> **[0:45](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=45)** Service project workflows often have steps to represent the back and forth nature of support work.
>
> **[0:51](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=51)** Service work is not always linear.
>
> **[0:53](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=53)** The workflow doesn't always follow a prescribed path.
>
> **[0:57](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=57)** Resolving a request might involve one or more conversations with a customer or action by a third-party vendor, or maybe a request is escalated or de-escalated.
>
> **[1:07](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=67)** That action could occur in multiple places in the process.
>
> **[1:10](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=70)** Like while a request is awaiting support or awaiting customer input.
>
> **[1:14](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=74)** Here's one of the JSM default service workflows as an example.
>
> **[1:18](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=78)** This one is commonly used for service requests.
>
> **[1:21](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=81)** Of course, there are other default service workflows for different types of work, like change requests, problems, incidents and more.
>
> **[1:29](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=89)** Next, there are some JSM-specific workflow features like approvals.
>
> **[1:34](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=94)** This is the default workflow for a change request.
>
> **[1:37](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=97)** As you can see, there are two approval transitions, one from the peer review status at the top and one from the awaiting CAB approval status in the middle.
>
> **[1:46](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=106)** By default, approvals are not forced, meaning any agent or project admin can click the transition buttons to signify approval.
>
> **[1:55](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=115)** But approvals are easy to enforce and there are two ways.
>
> **[1:58](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=118)** Traditionally in Jira software for example, transition service restricted by adding conditions.
>
> **[2:04](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=124)** In Jira service management, there's an even easier way to add approval restrictions.
>
> **[2:10](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=130)** In JSM, open a workflow in diagram mode and click on a status where approval is desired.
>
> **[2:16](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=136)** In the example, I clicked on the peer review status.
>
> **[2:20](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=140)** In the option box that appears on the right, click the add approval checkbox.
>
> **[2:24](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=144)** You'll only see the option if there are at least two outgrowing workflow transitions.
>
> **[2:29](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=149)** You need one transition to approve and another to decline.
>
> **[2:33](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=153)** An overlay opens to configure the approval settings.
>
> **[2:36](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=156)** First, specify where the list of approvers is located.
>
> **[2:40](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=160)** You can choose between standard fields like approvers, the change advisory board or change managers.
>
> **[2:47](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=167)** These fields define who can approve on a per-issue basis.
>
> **[2:51](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=171)** There are many ways to determine the approver or list of approvers.
>
> **[2:55](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=175)** First, you can set specific approvers for a certain request type.
>
> **[2:59](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=179)** You can create a hidden field and set a default list of approvers.
>
> **[3:04](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=184)** Next, if using the [[IT Service Management]] project template and bank bucket, you can define approvers based on the service impacted.
>
> **[3:12](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=192)** JSM will pull any change approvers from the affected services field.
>
> **[3:17](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=197)** If you have a CAB or change advisory board, you can specify board members as approvers.
>
> **[3:23](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=203)** You can require approval from individual CAB members or from the group as a whole.
>
> **[3:28](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=208)** How to do it depends on how often CAB membership changes, whether other users can also approve and other governance factors.
>
> **[3:36](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=216)** Finally, customers or agents can specify approvers.
>
> **[3:40](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=220)** For example, an employee can add their manager's name or an agent can add a system owner's name to the approvers field.
>
> **[3:47](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=227)** Approvers don't need a JSM license.
>
> **[3:49](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=229)** They just need to be customers of the service management project.
>
> **[3:53](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=233)** You can also create custom fields for approvals too.
>
> **[3:56](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=236)** for more information on these methods, see the approval documentation.
>
> **[4:01](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=241)** Next specify how many approvals are required.
>
> **[4:05](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=245)** At the bottom of the overlay, also specify the workflow transition to use if the request is approved and if the request is declined, then click the form submission button and publish the workflow changes.
>
> **[4:17](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=257)** Approval information is now present in both the agent view and in the customer view in the portal, it's in the right sidebar in both views.
>
> **[4:25](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=265)** Let's [[Zoom]] in on that right sidebar for a closer look.
>
> **[4:29](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=269)** There are several different approval conditions.
>
> **[4:31](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=271)** IN this example, there are no users specified in the change managers field in the issue.
>
> **[4:37](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=277)** The problem might be the field is empty or that the field simply isn't present and can be filled, in this example, there's one approval needed, the name of the approver isn't pictured in the agent view screenshot, but it does show lower on the page in the change managers field, you can see the name of the approver in the customer view screenshot.
>
> **[4:58](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=298)** In this example, the current user is the approver.
>
> **[5:01](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=301)** Here's what the approve and declined buttons look like in both views.
>
> **[5:05](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=305)** You may have noticed that even though approval is needed, additional transitions are available in the agent view.
>
> **[5:11](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=311)** This is because in addition to the approve and decline transitions, there are two others, emergency override and cancel.
>
> **[5:19](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=319)** The agent can use the additional transitions even if they are not the approver.
>
> **[5:23](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=323)** If you prefer to force an approval decision, simply remove any additional transitions so only approve and decline are present.
>
> **[5:31](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=331)** Another useful JSM feature is the approval notification message.
>
> **[5:36](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=336)** You can customize some security settings and the notification copy in the project's customer notifications admin area.
>
> **[5:43](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=343)** Here's an example of the default message sent to approvers.
>
> **[5:47](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=347)** I recommend customizing the copy so it's clear to the approver that they need to act.
>
> **[5:52](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=352)** Here are the default workflows for an ITSM project.
>
> **[5:56](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=356)** At the bottom of the screenshot, you can see there are two similar workflows for service requests, one with approvals and one without.
>
> **[6:04](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=364)** There are also two corresponding issue types to use with the different workflows.
>
> **[6:08](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=368)** I'm sure you can think of many scenarios where you'd use one workflow in issue type instead of the other.
>
> **[6:13](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=373)** Here's one example, let's say you have two request [[Forms]], one for a new mobile device and another for a new mouse.
>
> **[6:21](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=381)** Since the new phone is likely to cost hundreds of dollars, it's mapped to the service request with approvals issue type in workflow.
>
> **[6:28](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=388)** So a specific procedure for high cost items is followed.
>
> **[6:32](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=392)** The mouse request is much less expensive, however, so it uses the service request issue type and the less complex workflow.
>
> **[6:40](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=400)** There are many helpful JQL functions for querying approval data.
>
> **[6:44](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=404)** Here are two examples.
>
> **[6:45](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=405)** The first finds all issues awaiting approval from a specific user.
>
> **[6:50](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=410)** The second finds all issues pending approval.
>
> **[6:53](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=413)** See the documentation for more examples, one more useful JSM workflow feature is the ability to show selected transitions to customers in the portal.
>
> **[7:03](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=423)** This allows portal users to transition issues in the workflow.
>
> **[7:07](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=427)** Here's the JSM workflow for a service request.
>
> **[7:10](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=430)** By default, the escalate transition is shown to the customer in the portal.
>
> **[7:15](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=435)** You can control whether transitions are available or not with the checkbox on the right.
>
> **[7:20](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=440)** Remember you need to use the workflow diagram mode to see these JSM features.
>
> **[7:25](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=445)** Here's how the escalate transition looks in the portal.
>
> **[7:28](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=448)** As you can see, there are two other transitions shown.
>
> **[7:31](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=451)** The customer can also resolve or cancel their request.
>
> **[7:34](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=454)** Here's a tip.
>
> **[7:35](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=455)** If you allow customers to resolve requests, make sure to set a value for the resolution field in the background.
>
> **[7:42](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=462)** Click the configure link to set a default resolution when choosing to show the transition.
>
> **[7:48](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=468)** Finally, to create or modify a workflow in server, data center, or a cloud company managed project, go to the workflows page in the issues admin area.
>
> **[7:58](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=478)** In cloud team managed projects however, the location is different.
>
> **[8:02](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=482)** Instead go to the project settings area and click the request types option in the sidebar, then select a specific request type and look for the edit workflow button shown in the screenshot.
>
> **[8:14](https://www.linkedin.com/learning/jira-service-management-administration/leverage-workflow-differences?u=76281980&t=494)** It took me a long time to figure out that the workflow settings were stored with the individual request type settings.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (3), [[Software Projects]] (1), [[IT Service Management]] (1), [[Zoom]] (1), [[Forms]] (1)
> **Env Vars:** jsm (10), cab (4), itsm (1), jql (1)
> **UI Navigation:** checkbox (2), go to (2), click on (1), in the sidebar (1)
> **Tools:** jira (3)
> **Analogies:** for example (2)
> **Prerequisites:** configure (2)
> **CLI Commands:** make (1)
> **Documentation:** the documentation (1)

#### [Use and create request types](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=0)** - [Instructor] Request types help agents classify issues and make it easier for end users to report problems.
>
> **[0:06](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=6)** As previously discussed, request types are used by customers in the portal and they map to issue types used by agents in [[Jira]].
>
> **[0:14](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=14)** This is one of my favorite JSM features, so I'm excited to show you how to use and create them.
>
> **[0:20](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=20)** Access the request types page from the project setting area of any service project.
>
> **[0:25](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=25)** Here's an example of the immediate benefit of request types.
>
> **[0:29](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=29)** Pretend you're an end user for a minute.
>
> **[0:31](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=31)** Your monitor is malfunctioning and you need help.
>
> **[0:34](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=34)** If you request help in Jira, you must choose a project, and sometimes the project list is very long.
>
> **[0:41](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=41)** Then you must select the correct issue type.
>
> **[0:43](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=43)** There's a lot of potential for human error in these two small steps.
>
> **[0:47](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=47)** Think of how often users make the wrong selections, and the issue is delayed or misrouted because of it.
>
> **[0:54](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=54)** If you request help in the portal, you only need to pick through a few available selections, usually grouped into categories.
>
> **[1:01](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=61)** From the end user perspective, this method on the right is easier.
>
> **[1:05](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=65)** The customer doesn't need to worry about the project or the issue type, because it's handled in the background.
>
> **[1:11](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=71)** From Jira's perspective, the result is the same.
>
> **[1:14](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=74)** The forum called request new [[Hardware]] on the right is mapped to the service request issue type in Jira.
>
> **[1:20](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=80)** So regardless of which method you use, an issue of type service request is created in the project called help.
>
> **[1:27](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=87)** Keep this example in mind when you're naming request types in the portal.
>
> **[1:31](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=91)** Name [[Forms]], fields, and statuses using terminology that makes sense to the customer.
>
> **[1:37](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=97)** All request types contain the following attributes, a name and icon to identify it, an associated issue type, and a portal group to determine where it's displayed.
>
> **[1:48](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=108)** Request types also have different settings, properties, and options.
>
> **[1:52](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=112)** For example, you can control fields shown to the agents, fields on the request form, and modify workflow status labels to make them more customer-friendly.
>
> **[2:03](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=123)** In other words, request types let you create a custom simplified request experience in the portal.
>
> **[2:10](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=130)** Here are some default request types that are part of a service project template.
>
> **[2:14](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=134)** The first request type is desktop laptop support.
>
> **[2:17](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=137)** It's identified by an icon, a name, and a description.
>
> **[2:21](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=141)** This request type is associated with the service request issue type.
>
> **[2:25](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=145)** That means any desktop laptop support requests will be service requests in the Jira project.
>
> **[2:31](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=151)** Click the request name to edit its settings.
>
> **[2:34](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=154)** Let's examine the settings for the desktop laptop request type.
>
> **[2:38](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=158)** Change the request name by hovering over the existing name.
>
> **[2:41](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=161)** Remember to use wording that makes sense to your audience.
>
> **[2:45](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=165)** Below the name are the tabs that control the display.
>
> **[2:48](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=168)** Use the agent view tab to control how the agent sees request information.
>
> **[2:52](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=172)** You can drag fields up or down to reorder them or drag them to the right to hide them.
>
> **[2:58](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=178)** You can also drag them down to the hide when empty area.
>
> **[3:01](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=181)** Don't forget to click the form submission button at the bottom of the page to save changes.
>
> **[3:06](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=186)** To add fields, use the link at the top to open the related screen in the Jira admin area.
>
> **[3:13](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=193)** The next tab is request form, which controls what the customer sees in the portal.
>
> **[3:17](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=197)** Use the request form description to help the user know when to select the specific form.
>
> **[3:23](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=203)** I like to use keywords that the user might be looking for.
>
> **[3:26](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=206)** You can use Wiki Markup to format the text if desired.
>
> **[3:30](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=210)** Next, I like to add instructions for completing the form when they're warranted.
>
> **[3:35](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=215)** Next, you can add fields that are already defined on the project's create screen.
>
> **[3:40](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=220)** I'll add the priority field and add a helpful description.
>
> **[3:44](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=224)** The description is different from the custom field description defined in Jira.
>
> **[3:49](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=229)** Next you can require, reorder, hide, or remove fields.
>
> **[3:53](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=233)** One thing I like to do is improve the label for the summary field.
>
> **[3:57](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=237)** I'll change it to read, "how can we help?"
>
> **[4:00](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=240)** Try using the field label to ask a question and make it easier for the customer to provide the information needed.
>
> **[4:06](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=246)** You can also make a field required.
>
> **[4:08](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=248)** For example, require attachments for expense reimbursement requests so the customer provides purchase receipts.
>
> **[4:16](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=256)** Next, you can pass a value in a hidden field.
>
> **[4:19](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=259)** All at the components field, click the hide link and set a default value for this form.
>
> **[4:24](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=264)** Now the component field is automatically set in the background, and it's one less thing a customer or agent needs to do.
>
> **[4:31](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=271)** The field shows in the hidden fields area at the bottom of the page.
>
> **[4:35](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=275)** The final tab is workflow statuses, which controls what status names the customer sees in the portal.
>
> **[4:42](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=282)** Change to your status names to more user-friendly options if desired.
>
> **[4:46](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=286)** I find that the open status doesn't make a lot of sense to users.
>
> **[4:50](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=290)** I'll change it to read "to do" instead.
>
> **[4:53](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=293)** Then click the form submission button.
>
> **[4:55](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=295)** Click the view workflow button at the top of the page to see the workflow diagram and edit it.
>
> **[5:01](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=301)** Let's see what we've created.
>
> **[5:03](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=303)** Click the preview form in portal link at the top of the page.
>
> **[5:06](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=306)** Also visit the portal home to verify the custom description shows as expected.
>
> **[5:11](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=311)** Finally, I recommend logging out of Jira and logging into the portal as a test customer.
>
> **[5:16](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=316)** Submit the form to make sure there are no errors or problems.
>
> **[5:20](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=320)** Also, test the workflow from both the agent and customer perspectives.
>
> **[5:27](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=327)** To create the new request type, click the button on the top right.
>
> **[5:31](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=331)** Next, let's discuss request groups.
>
> **[5:33](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=333)** Groups are used to categorize requests and help customers find relevant forms quickly.
>
> **[5:39](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=339)** This simple portal has groups called common requests, computers, and more.
>
> **[5:44](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=344)** Let's click computers to see the forums in this category.
>
> **[5:48](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=348)** The computers group contains forms for all requests related to desktops, laptops, and hardware.
>
> **[5:54](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=354)** If the customer doesn't see the form they're looking for, they can change groups using the dropdown menu at the top of the page.
>
> **[6:01](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=361)** A request form can be in zero, one, or multiple groups.
>
> **[6:05](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=365)** The first request form, called get IT help, is a general catch-all form.
>
> **[6:11](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=371)** It's always a good idea to have a generic form, but I prefer listing it last in the list.
>
> **[6:16](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=376)** Luckily, it's easy to manage groups and reorder forms.
>
> **[6:20](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=380)** To manage groups and form membership, go to the portal settings page in the project admin area, then click the portal groups tab at the top of the page.
>
> **[6:29](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=389)** On this page, you can create groups, reorder groups, and reorder the request types within the groups.
>
> **[6:36](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=396)** Let's go back to the request types page in the project admin area and explore the group settings from a different location.
>
> **[6:43](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=403)** We'll use the desktop laptop support request as an example.
>
> **[6:46](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=406)** This request is part of two portal groups.
>
> **[6:49](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=409)** This means the user will see the selection in two places.
>
> **[6:53](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=413)** Hover over the value in the portal groups column to see the group names.
>
> **[6:57](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=417)** To change group membership, or delete the request, hover over it and look for an ellipsis menu to appear on the right.
>
> **[7:04](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=424)** Click edit portal groups to launch the group options overlay.
>
> **[7:09](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=429)** In the overlay, select or de-select existing groups as desired.
>
> **[7:13](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=433)** Use the create group link at the bottom to create additional groups.
>
> **[7:17](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=437)** It's good to know that if you select no groups, the request type is hidden from the portal.
>
> **[7:23](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=443)** This is useful while you're building a new request form or for forms you only want available at certain times.
>
> **[7:29](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=449)** For example, hide the hardware upgrade request form because you're out of supplies and not sure when more will be available, or hide the company holiday party sign up form after the event, but keep the form around for use next year.
>
> **[7:42](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=462)** Any hidden forms are displayed at the bottom of the request type page.
>
> **[7:46](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=466)** Here's the request types project settings page in server and data center.
>
> **[7:51](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=471)** The interface is slightly different, but all the admin concepts are the same.
>
> **[7:55](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=475)** The group management settings are in the sub menu on the left.
>
> **[7:59](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=479)** There's no separate page or overlay.
>
> **[8:02](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=482)** To add existing request forms to the selected group, click the add existing request type button on the top right.
>
> **[8:08](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=488)** To create a new request form within the selected group, complete the form fields at the top of the page and click create request type.
>
> **[8:16](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=496)** You can update some field values in line and reorder the forms by dragging them up and down on the page.
>
> **[8:22](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=502)** I'll click the edit fields link to edit the settings for the desktop laptop support form.
>
> **[8:27](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=507)** There is one major difference in request form settings, and it's in the tabs area at the top.
>
> **[8:32](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=512)** In server and data center, there's no separate tab for the agent view.
>
> **[8:36](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=516)** The agent's view is controlled by the Jira project screen settings.
>
> **[8:41](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=521)** Use the fields tab to control what displays in the portal and the workflow statuses tab to rename statuses, just like in Cloud.
>
> **[8:49](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=529)** There's one more thing I want you to know about request types.
>
> **[8:52](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=532)** Here's an agent's view of an issue created in the portal in Cloud.
>
> **[8:56](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=536)** There are two ways to tell this was created in the portal instead of in Jira.
>
> **[9:00](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=540)** First, there's a message above the description field that says it.
>
> **[9:04](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=544)** Second, the request type field on the right has a value.
>
> **[9:08](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=548)** You can use this information in JQL.
>
> **[9:10](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=550)** Here are some examples.
>
> **[9:12](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=552)** The first query returns all incident issues.
>
> **[9:15](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=555)** The second query returns all incidents where the request type is report a system problem.
>
> **[9:20](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=560)** This is useful when there are multiple request forms mapped to the same issue type.
>
> **[9:25](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=565)** Finally, the third query returns all issues without a request type.
>
> **[9:29](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=569)** This is useful for detecting issues raised in Jira instead of in the customer portal.
>
> **[9:34](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=574)** Sometimes this happens when agents create requests on behalf of customers.
>
> **[9:39](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=579)** Some organizations don't like support requests created directly in Jira, and some don't mind it.
>
> **[9:45](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=585)** Regardless of where they're created, just make sure all requests are accounted for in queries and reporting.
>
> **[9:51](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=591)** Here are some best practices.
>
> **[9:53](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=593)** Start with just a few request forms, and don't add more until there's a real business need.
>
> **[9:59](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=599)** Try to limit the number of fields displayed.
>
> **[10:01](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=601)** Too many can overwhelm the customer.
>
> **[10:04](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=604)** Use hidden fields with preset values when possible.
>
> **[10:07](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=607)** Always customize field and status labels to use language the customer expects and understands.
>
> **[10:14](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=614)** Use form descriptions, form instructions, and field descriptions to help the customer provide the information needed.
>
> **[10:20](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=620)** For the fields you can order, list them in an order a user is most likely to supply information.
>
> **[10:26](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=626)** For example, I display the priority field before a requested date custom field.
>
> **[10:31](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=631)** Hopefully, the order helps set realistic expectations.
>
> **[10:35](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=635)** Also, use a consistent field order for issues and request types.
>
> **[10:39](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=639)** Users expect and appreciate a standard.
>
> **[10:42](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=642)** Finally, if there are a lot of request forms, use groups to categorize them.
>
> **[10:47](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=647)** Here are some things to avoid.
>
> **[10:49](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=649)** Don't collect data you won't query or report on.
>
> **[10:52](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=652)** For example, don't ask for the customer's phone number if you only provide email support.
>
> **[10:58](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=658)** I see this all the time and it drives me crazy.
>
> **[11:00](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=660)** Also, don't create more forms than you really need.
>
> **[11:03](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-request-types?u=76281980&t=663)** Just create forms for the most frequent requests in each category, then offer a general form to handle anything not listed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (13), [[Jira]] (12), [[Hardware]] (3)
> **Tools:** jira (12)
> **CLI Commands:** make (8), find (2)
> **Analogies:** for example (5), just like (1)
> **UI Navigation:** select the (2), open the (1), dropdown (1), go to (1)
> **Env Vars:** jsm (1), jql (1)
> **Definitions:** in other words (1), is a  (1)
> **Best Practices:** remember to (1), don't forget (1)

#### [Add agents, customers, and organizations](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=0)** - [Instructor] In this section, we'll discuss Agents, Customers, and Organizations in a Service Project.
>
> **[0:05](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=5)** As a reminder, here are some important terms for the section.
>
> **[0:09](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=9)** An agent is anyone who provides support, like help desk technicians, IT specialists, HR generalists or facility managers.
>
> **[0:17](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=17)** Each agent consumes a JSM license.
>
> **[0:20](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=20)** A customer is anyone who requests support like internal users, external users, employees, vendors, or contractors.
>
> **[0:29](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=29)** They are unlicensed users who create requests through the customer portal via email or using a widget embedded in a website.
>
> **[0:37](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=37)** Customers can also comment on requests and read knowledge based articles.
>
> **[0:41](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=41)** If they have the need of permissions, they can also share and approve other customers requests.
>
> **[0:47](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=47)** An organization is a group of customers.
>
> **[0:50](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=50)** Organizations can be shared across multiple service desks if desired.
>
> **[0:54](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=54)** This saves time because you don't need to add the same customer to multiple projects.
>
> **[0:59](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=59)** A request can be shared with zero, one or many organizations.
>
> **[1:04](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=64)** There's also a new term we haven't discussed yet, collaborators.
>
> **[1:08](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=68)** Collaborators, are internal [[Jira]] users who occasionally assist agents with customer requests.
>
> **[1:15](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=75)** For example, a support agent might work with a developer to better understand how to assist a customer.
>
> **[1:21](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=81)** If a customer reports a problem, a developer could help determine whether there's a known issue, a new bug or something else is going on.
>
> **[1:30](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=90)** Collaborators are licensed Jira Software or Jira Work Management users.
>
> **[1:35](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=95)** They can view and add issues, comments, and attachments.
>
> **[1:38](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=98)** They don't have access to QS, reports or SLAs however.
>
> **[1:43](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=103)** They also can't log work or transition issues.
>
> **[1:46](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=106)** They are there to provide additional context, but not actually fulfill the support request.
>
> **[1:52](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=112)** [[Atlassian]] recommends giving all logged in users, permission to view and add comments in service projects if you want this type of collaboration.
>
> **[2:01](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=121)** Let's see these terms in action.
>
> **[2:03](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=123)** It's really easy to add agents to service projects.
>
> **[2:06](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=126)** Project admins can add existing agents from other service projects.
>
> **[2:10](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=130)** Application admins can add anyone with an email address.
>
> **[2:14](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=134)** Simply click the invite team link in the left sidebar and enter an email address in the overlay.
>
> **[2:20](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=140)** You can invite multiple team members using this one form.
>
> **[2:23](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=143)** Jira will remind you that each user invited consumes one JSM license.
>
> **[2:29](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=149)** If the number of users invited exceeds the limit, you'll see an error message advising you to remove agents or buy more licenses.
>
> **[2:37](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=157)** Invited users receive an email message, asking them to create an account if they don't have one already and join the application.
>
> **[2:43](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=163)** The invited agent is automatically listed in the projects People page in Cloud or the Users and Roles page in Server and Data Center.
>
> **[2:52](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=172)** The agent is automatically associated with the service desk team role.
>
> **[2:56](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=176)** You can also add users and assign project roles from this page.
>
> **[3:00](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=180)** If you need to resend an invite, you can do it from the [[User Management]] Application Admin area.
>
> **[3:06](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=186)** I like to point new agents to Atlassian's Getting Started guide so they can read about completing requests, communicating with customers and how to leverage the knowledge base.
>
> **[3:16](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=196)** Click the customer's link in the left sidebar to see the list of customers and organizations in a project.
>
> **[3:23](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=203)** This example shows two organizations, one standalone user, and the count of open and close requests for each.
>
> **[3:30](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=210)** Depending on application settings, customers may be able to create their own accounts.
>
> **[3:35](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=215)** Project administrators and agents can also add customers manually using the button at the top right.
>
> **[3:40](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=220)** Click the Add Customers button, enter a customer's email address and add them to new or existing organizations if desired.
>
> **[3:48](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=228)** Adding a customer to an organization means they can review requests, share with the organization and create requests in projects where the organization is used.
>
> **[3:58](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=238)** You can also paste in multiple comma-separated email addresses.
>
> **[4:02](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=242)** There is no limit on the number of customer accounts.
>
> **[4:06](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=246)** Customers added by agents and project administrators automatically receive an email, asking them to finish setup of their accounts.
>
> **[4:13](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=253)** You can customize the message copy to match your brand's language.
>
> **[4:17](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=257)** I hate it when I get unexpected invitations.
>
> **[4:20](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=260)** Sometimes it's hard to tell if they're spam or if they're real.
>
> **[4:24](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=264)** Help customers by adding some information about what the customer portal is and how they can use it.
>
> **[4:30](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=270)** This is especially helpful for new portal users, external customers, vendors, and others outside your company.
>
> **[4:38](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=278)** Back on the customer's page, click the Add Organizations button, then type in the text box to create a new organization or select from the list of existing organizations used by other service projects.
>
> **[4:51](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=291)** You're not required to use organizations, but there are helpful way to group customers.
>
> **[4:55](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=295)** You can even query by organization membership and name.
>
> **[4:59](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=299)** And of course, don't forget to enclose any multi-award organization names in quotes.
>
> **[5:04](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=304)** To manage an existing organization, click its name on the customer's project page.
>
> **[5:09](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=309)** From the next page, use the buttons at the top to add new customers, change the organization's name, remove it from the project or delete it.
>
> **[5:18](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=318)** When you remove an organization from a project, members lose project access, unless they are individually added or have customers can create requests without logging in.
>
> **[5:28](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=328)** Only Jira Administrators can delete organizations.
>
> **[5:32](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=332)** Deleting an organization doesn't delete customers.
>
> **[5:35](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=335)** Customers may still have project access if they are individually added or part of another organization with access.
>
> **[5:42](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=342)** To remove a customer from the organization, click the icon on the right.
>
> **[5:47](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=347)** This doesn't delete the customer's account, just their membership in the organization.
>
> **[5:51](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=351)** To remove a customer, you must be a project administrator.
>
> **[5:55](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=355)** Go to the Projects People page in cloud or the Users Enrolls page in server and data center.
>
> **[6:01](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=361)** Next, filter the user list by service desk customers, then click the Remove link on the right side of the page.
>
> **[6:08](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=368)** The customers access will be removed, but their name will still be listed on the customer's project page for historical purposes.
>
> **[6:15](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=375)** To delete a customer, you must be an application admin.
>
> **[6:19](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=379)** In Cloud, go to the Jira Service Management page in the User Management Admin area.
>
> **[6:25](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=385)** In Server and Data Center go to the Regular User Management page and filter the list by group or application access.
>
> **[6:32](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=392)** Now I prefer not to delete users regardless of their type to preserve history and the audit trail.
>
> **[6:39](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=399)** But if you must click the Ellipsis icon to access the delete option.
>
> **[6:44](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=404)** Customers are managed in different places.
>
> **[6:46](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=406)** So where to go for what action can be confusing.
>
> **[6:49](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=409)** Here's a recap.
>
> **[6:51](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=411)** If configured an application settings, customers can create their own accounts from the portal.
>
> **[6:57](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=417)** Both agents and project administrators can add customers from the customer's page and a project admin area.
>
> **[7:04](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=424)** They can also add customers from an organization's page, which is also accessed from the customer's page.
>
> **[7:10](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=430)** Agents can remove customers from organizations, but only project administrators can remove them from a service project.
>
> **[7:17](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=437)** Finally, only application administrators can delete customers.
>
> **[7:21](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=441)** In Cloud this is done from the Jira Service Management page and then User Management Admin area.
>
> **[7:27](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=447)** In Server and Data Center, use the Regular Users page in the User Management Admin area.
>
> **[7:32](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=452)** Here's a recap for organizations.
>
> **[7:35](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=455)** Both agents and project administrators can create organizations from the Customer's Admin page in a Service Project.
>
> **[7:42](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=462)** Both agents and project administrators can remove organizations from projects too.
>
> **[7:48](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=468)** To remove an organization, go to the customer's page in the project, click the name of the organization and click the Remove From Project button.
>
> **[7:56](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=476)** Finally, only application administrators can delete organizations.
>
> **[8:00](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=480)** Application admins will see a delete button on an Organization's Management page.
>
> **[8:05](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=485)** After you've added customers and organizations, it's easy to share requests with them in the portal.
>
> **[8:11](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=491)** In the example, this request is shared with test customer and with all members of the Alpha Organization.
>
> **[8:18](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=498)** The customer sharing function is configurable from the Customer Permissions Project Admin page.
>
> **[8:23](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=503)** In the Jira issue, agents can use the request participants field to allow others to view, comment on, and receive notifications about the request.
>
> **[8:33](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=513)** This field will automatically show any single users added from the portal.
>
> **[8:38](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=518)** Any organizations added from the portal are noted in the separate organizations field.
>
> **[8:43](https://www.linkedin.com/learning/jira-service-management-administration/add-agents-customers-and-organizations?u=76281980&t=523)** Request Participants receive the same email notifications as the reporter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (8), [[User Management]] (5), [[Atlassian]] (2)
> **Tools:** jira (8)
> **UI Navigation:** go to (4)
> **Prerequisites:** getting started (1), setup (1), required to (1)
> **Env Vars:** jsm (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Best Practices:** don't forget (1)

#### [Configure the customer portal](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=0)** - [Instructor] The customer portal, or help center, provides a simple user interface for the customer audience.
>
> **[0:05](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=5)** In this section, I'll show you how to configure the help center and individual portals.
>
> **[0:10](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=10)** Each portal has a unique URL.
>
> **[0:12](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=12)** The easiest way to find the URL is by clicking the channels link in a service project sidebar.
>
> **[0:18](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=18)** The overlay will list the project's email address, portal URL, and whether the widget is enabled or not.
>
> **[0:25](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=25)** Here's an example portal URL in all deployment methods.
>
> **[0:29](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=29)** The portal has a unique ID of 4.
>
> **[0:31](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=31)** Any visits to this URL will automatically display the specific portal and its associated request types.
>
> **[0:38](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=38)** You can also send users to the portal home, to a specific request form, or to an individual request by changing the parameters in the URL.
>
> **[0:47](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=47)** Here are some example URL formats in cloud.
>
> **[0:50](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=50)** The first URL will automatically redirect to a longer URL.
>
> **[0:54](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=54)** Since this is the shortest and easiest URL, this is the one I share with users most often.
>
> **[1:00](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=60)** The second URL specifies the specific portal and the specific request form to load.
>
> **[1:05](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=65)** If you know which form the user needs to complete, it's nice to send them directly to it.
>
> **[1:10](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=70)** It saves them a few clicks, and makes sure they complete the correct form.
>
> **[1:14](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=74)** The third URL goes to an individual request record.
>
> **[1:17](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=77)** Here are the same URLs and server in data center.
>
> **[1:21](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=81)** Always give users the shortest URL that meets their needs, and encourage them to bookmark the portal home or frequently used request [[Forms]].
>
> **[1:29](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=89)** Now for the fun part.
>
> **[1:30](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=90)** Let's customize the look and feel of the customer portal.
>
> **[1:34](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=94)** Here's the default style for a portal with multiple service desks.
>
> **[1:38](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=98)** In other words, it's the support home page.
>
> **[1:40](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=100)** You can customize the help center name and the homepage title, add your logo and change the colors, and add an announcement banner that displays for all users.
>
> **[1:50](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=110)** Here's a closer look.
>
> **[1:51](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=111)** To change the global portal settings, go to the [[Microsoft Products|products]] admin page in cloud, or the applications admin page and server in data center.
>
> **[2:00](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=120)** Then click the configuration link under [[Jira]] service management in the sidebar.
>
> **[2:04](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=124)** Next look for the customize link under the help center header.
>
> **[2:09](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=129)** In cloud, it's the second link, and in server and data center, there's only one link.
>
> **[2:13](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=133)** Use the settings on the right to customize the help center to match the desired look and feel.
>
> **[2:19](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=139)** The changes are applied immediately for all service desks when you click the form submission button at the bottom of the page.
>
> **[2:26](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=146)** Here's a tip.
>
> **[2:27](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=147)** Before making changes, I like to launch the portal in a second browser window.
>
> **[2:32](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=152)** That way I can compare what I changed, and manually return the settings to their previous values if desired.
>
> **[2:38](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=158)** Here's an example of a fully customized portal.
>
> **[2:41](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=161)** Click the customize button on the right to reopen the setting sidebar and make additional changes.
>
> **[2:47](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=167)** In small browser [[Windows]], the customize button may be at the top of the screen instead.
>
> **[2:51](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=171)** Here's what I changed, and some tips.
>
> **[2:54](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=174)** First I customize what appears at the top left of the window.
>
> **[2:58](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=178)** I changed the default help center name.
>
> **[3:00](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=180)** The copy is clickable, and it's used throughout the portal as breadcrumbs for navigation purposes.
>
> **[3:06](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=186)** There's also an option to upload an image file, like a logo for example.
>
> **[3:10](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=190)** If an image is present, it displays in this location instead of the text.
>
> **[3:15](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=195)** [[Atlassian]] recommends a minimum image height of 24 pixels.
>
> **[3:20](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=200)** If your logo doesn't look great in this area, simply remove the image file and the customizable text will display instead.
>
> **[3:27](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=207)** Next I added a custom banner graphic.
>
> **[3:30](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=210)** The recommended banner size is 1,680 pixels wide by 360 pixels high.
>
> **[3:36](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=216)** Try to use a graphic with a transparent background.
>
> **[3:39](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=219)** That way you can change the portal colors in the future without needing to create a new banner image.
>
> **[3:44](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=224)** Next I changed the home page title that appears above the search bar.
>
> **[3:49](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=229)** Below the search bar, I added an announcement message for an upcoming maintenance event.
>
> **[3:53](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=233)** You could format the message using Markup, and add links to additional information as shown.
>
> **[3:59](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=239)** This announcement function is for the entire help center.
>
> **[4:02](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=242)** You can also set a portal-specific announcement in the settings area for each service project.
>
> **[4:08](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=248)** Finally, I changed the banner background color, link color, and button color to dark gray.
>
> **[4:13](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=253)** You can enter any hexadecimal color value, or select the color using the picker.
>
> **[4:18](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=258)** After choosing the color, make sure to click the form submission button specifically for this field.
>
> **[4:24](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=264)** Sometimes you need to scroll down to see it.
>
> **[4:26](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=266)** I always seem to miss it.
>
> **[4:28](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=268)** After, click the form submission button at the very bottom to save all the customizations.
>
> **[4:33](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=273)** In addition to customizing the entire help center, you can also customize individual portals.
>
> **[4:39](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=279)** In a service project's admin area, click the portal settings link in the sidebar.
>
> **[4:44](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=284)** On this page, you can change a portal's URL, name, and introduction text.
>
> **[4:49](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=289)** You can even add a portal-specific logo or graphic.
>
> **[4:53](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=293)** This feature is useful if you have one portal per product, department, or client.
>
> **[4:58](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=298)** The optional graphic serves as a quick visual identifier.
>
> **[5:02](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=302)** As I mentioned, you can create an announcement that only displays in this portal.
>
> **[5:06](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=306)** Use this feature to share portal-specific information, or special instructions.
>
> **[5:11](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=311)** You can configure whether agents can add portal announcement messages.
>
> **[5:15](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=315)** The global option is on the JSM admin configuration page.
>
> **[5:19](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=319)** In cloud, this page is in the products admin area, and in server and data center, the admin area is called applications.
>
> **[5:26](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=326)** We already discussed portal groups, but here's a reminder of one way to access group settings.
>
> **[5:32](https://www.linkedin.com/learning/jira-service-management-administration/configure-the-customer-portal?u=76281980&t=332)** Click the portal groups tab to create groups, reorder them, or reorder request types within groups.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2), [[Forms]] (1), [[Jira]] (1), [[Windows]] (1), [[Atlassian]] (1)
> **Env Vars:** url (14), jsm (1)
> **UI Navigation:** in the sidebar (2), go to (1), select the (1), scroll down (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** in other words (1), is called (1)
> **Best Practices:** recommended (1), make sure to (1)
> **Prerequisites:** configure (2)
> **Tools:** jira (1)

#### [Manage email requests](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=0)** - [Instructor] In this section, we'll discuss turning customer emails into support requests as an added support method.
>
> **[0:06](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=6)** It's easier to submit email requests in JSM than it is in [[Jira]].
>
> **[0:11](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=11)** Jira blocks messages from unknown senders and processes messages differently.
>
> **[0:16](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=16)** See the create via email section of my Jira advanced administration course for how it works in Jira and the list of caveats.
>
> **[0:24](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=24)** JSM is much more forgiving.
>
> **[0:26](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=26)** Depending on what customer permissions you've selected, people who email a service project can automatically become customers.
>
> **[0:33](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=33)** Senders don't need a JSM license to create and view requests.
>
> **[0:38](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=38)** Finally, requests created via email are automatically added to queues and are displayed with other requests.
>
> **[0:45](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=45)** Here's a quick overview of how messages sent to JSM are handled.
>
> **[0:49](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=49)** There are three stages.
>
> **[0:51](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=51)** First, an email puller checks the mailbox for unread messages.
>
> **[0:55](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=55)** This check happens every 60 seconds.
>
> **[0:58](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=58)** If new messages are found, they're copied to the database.
>
> **[1:01](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=61)** Messages with attachments larger than 25 megabytes are skipped.
>
> **[1:06](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=66)** Next, an email processor checks for auto-replies, known spam and block senders.
>
> **[1:12](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=72)** Then new requests are created.
>
> **[1:15](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=75)** Finally, a database cleaner purges messages already processed and messages older than 45 days.
>
> **[1:22](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=82)** The duration is configurable on the global mail settings page.
>
> **[1:26](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=86)** You can temporarily make it longer or shorter for troubleshooting purposes.
>
> **[1:31](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=91)** There are three places to configure JSM email settings.
>
> **[1:35](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=95)** First, click the Email requests link in a service project's admin area.
>
> **[1:39](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=99)** In Cloud, a project's email account is automatically created.
>
> **[1:43](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=103)** The default format is projectkey@yoursite.[atlassian.net](https://atlassian.net).
>
> **[1:48](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=108)** You can customize the address's username if desired.
>
> **[1:51](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=111)** In all deployment methods, you can add a custom email address to utilize your own domain name.
>
> **[1:57](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=117)** I recommend you use an email address dedicated only for use in JSM.
>
> **[2:02](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=122)** Also, don't try to share email addresses between service projects.
>
> **[2:06](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=126)** JSM will show an error if you do, but it's better for tracking to use a unique address anyway.
>
> **[2:12](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=132)** Regardless of which type of address you use, any messages received will be automatically turned into support requests.
>
> **[2:19](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=139)** Additionally, customers can reply to email notifications.
>
> **[2:23](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=143)** In Cloud, the reply is appended to the request as a comment.
>
> **[2:27](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=147)** In Server and Data Center, this option is configurable based on the sender.
>
> **[2:32](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=152)** There are also some settings hidden under the ellipsis menu on the Email requests page.
>
> **[2:37](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=157)** Use this menu to always show messages from specific domains, block specific email addresses or domains or disabled the create via email feature for the project.
>
> **[2:47](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=167)** Another feature in this menu is the option to choose which request type is used for email requests.
>
> **[2:53](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=173)** In Cloud, the default type is called emailed request, and this request type is hidden in the portal.
>
> **[2:59](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=179)** In Server and Data Center, you can create a similar request type or select a different one.
>
> **[3:05](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=185)** In all deployment types, you can change the associated request type if desired.
>
> **[3:09](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=189)** Just make sure to choose a request type that has a visible summary field, a visible description field and no other required fields.
>
> **[3:18](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=198)** The email subject becomes the request summary, and the email body becomes the description.
>
> **[3:23](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=203)** The second place you can find JSM email settings is on the Customer permissions page.
>
> **[3:28](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=208)** Here, you can choose to accept email requests only from known customer accounts or from anyone on the web.
>
> **[3:36](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=216)** I want to share [[Atlassian]]'s warning about the anyone on the web Cloud setting, which is called anyone can email in Server and Data Center.
>
> **[3:44](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=224)** Atlassian says, when you choose this option, you have no control over who can create an account and raise requests.
>
> **[3:51](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=231)** This means you might receive spam or unwanted issues with this setting.
>
> **[3:55](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=235)** But don't forget, each portal has an allow list and a block list to help manage undesired messages.
>
> **[4:02](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=242)** Finally, there's some additional email related settings to explore on the Email requests page, in the product's admin area in Cloud, and the application's admin area in Server and Data Center.
>
> **[4:14](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=254)** Let's send a test message to see how create via email works in JSM.
>
> **[4:19](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=259)** Unfortunately, I broke my tablet, and I need to request a replacement.
>
> **[4:23](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=263)** I'm sending this message to the default email address for our Cloud service project.
>
> **[4:28](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=268)** That message was received by JSM and immediately turned into a request.
>
> **[4:32](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=272)** You can see the request type is emailed request, which is mapped to the service request issue type.
>
> **[4:38](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=278)** If you're using the create via email function, you'll want to periodically make sure the messages are processed as expected.
>
> **[4:46](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=286)** There are two places you can check for problems.
>
> **[4:48](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=288)** The first is the processing log.
>
> **[4:51](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=291)** In the Projects settings, click the View logs link on the Email requests page.
>
> **[4:56](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=296)** The overlay will show all messages received.
>
> **[4:59](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=299)** As you can see, this message was processed correctly and HELP 50 was created.
>
> **[5:04](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=304)** There are four message processing statuses.
>
> **[5:07](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=307)** New request means a request was successfully created.
>
> **[5:11](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=311)** New comment means a message was appended as a comment to an existing request.
>
> **[5:16](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=316)** Failed means a message couldn't be processed.
>
> **[5:19](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=319)** Check the Details column for information why.
>
> **[5:22](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=322)** And rejected means JSM received the message, but did not process it.
>
> **[5:26](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=326)** Again, check the Details column for more information.
>
> **[5:29](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=329)** Here's an example of a rejected message.
>
> **[5:32](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=332)** You can see from the Details column that my email address or domain is now on the projects block list.
>
> **[5:38](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=338)** Messages from this domain won't be processed.
>
> **[5:41](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=341)** I guess the help team was mad about my broken tablet and decided not to accept any more of my requests.
>
> **[5:47](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=347)** Here are the most common reasons for requests creation failure.
>
> **[5:51](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=351)** First, a new sender might not have permission to create their own account.
>
> **[5:55](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=355)** You'll either need to enable public signup or create accounts for all your customers.
>
> **[6:00](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=360)** Also, creation by email maybe disabled for the project.
>
> **[6:04](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=364)** Next, messages sent from Jira and auto-reply messages are automatically rejected to prevent an endless loop scenario.
>
> **[6:13](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=373)** Messages from blocked email addresses or domains are also automatically rejected.
>
> **[6:18](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=378)** Messages with large attachments will either remain unread in the mailbox or bounce back to the sender.
>
> **[6:25](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=385)** Finally, there could be a temporary connection problem between JSM and your mail server or Atlassian's mail server.
>
> **[6:32](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=392)** I'll show you where to find connectivity details next.
>
> **[6:34](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=394)** There's one more place to see message information.
>
> **[6:37](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=397)** It's on the Email requests page, in the product's admin area in Cloud or the application's admin area in Server and Data Center.
>
> **[6:45](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=405)** Here, you can see when messages were last received by each service project.
>
> **[6:50](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=410)** Click the View log link for additional details.
>
> **[6:52](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=412)** In the overlay, toggle between the Connectivity log and Processing log to see message activity.
>
> **[6:58](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=418)** This example shows no connection issues between 2:54 pm and 3:23 pm.
>
> **[7:05](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=425)** In Cloud, the log only shows one line per connection status.
>
> **[7:09](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=429)** For example, if the next connection check is successful, you'll see updated information, but not one line for every status check.
>
> **[7:17](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=437)** Atlassian does this to keep the log tidy and to make problems easier to spot.
>
> **[7:22](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=442)** In Server and Data Center, many lines of connection results are displayed.
>
> **[7:27](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=447)** The potential connection statuses are success, failed and rate limited.
>
> **[7:32](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=452)** Rate limited means there were five unsuccessful connection checks in a row.
>
> **[7:37](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=457)** After five failures, JSM will perform the check less often to avoid overloading the application.
>
> **[7:43](https://www.linkedin.com/learning/jira-service-management-administration/manage-email-requests?u=76281980&t=463)** Once the connection is successful again, the check will return to its normal cadence.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (5), [[Atlassian]] (5)
> **Env Vars:** jsm (13), help (1)
> **CLI Commands:** make (4), find (2)
> **Tools:** jira (5)
> **Ports:** :54 (1), :23 (1)
> **Definitions:** is called (2)
> **Best Practices:** make sure to (1), don't forget (1)
> **URLs:** [atlassian.net](https://atlassian.net) (1)

#### [Connect to a Confluence knowledge base](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=0)** - [Instructor] Sometimes customers can solve problems on their own with a little bit of information or documentation.
>
> **[0:06](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=6)** In this section, we'll connect to JSM Project to a [[Confluence]] space to provide self service support.
>
> **[0:12](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=12)** But first here are the benefits of this feature and how it works.
>
> **[0:16](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=16)** With the [[Jira]] Service Management and Confluence integration, customers only need to come to one place, the help center for all their support needs.
>
> **[0:24](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=24)** When it's easy for customers to find related information, sometimes they can help themselves.
>
> **[0:29](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=29)** When customers solve their own problems, it means fewer requests for the support team.
>
> **[0:35](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=35)** Agents can also leverage help content to solve request quickly.
>
> **[0:39](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=39)** It's easy for agents to create new content and link issues to existing content right in JSM.
>
> **[0:46](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=46)** The support team can leverage the content to standardize responses and ensure a consistent message.
>
> **[0:52](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=52)** Finally, customers don't need a Confluence license to view content.
>
> **[0:56](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=56)** Only pay for users who create content.
>
> **[1:00](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=60)** Here's the customer self-help experience in the portal.
>
> **[1:03](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=63)** Help content is presented to the customer in two ways.
>
> **[1:07](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=67)** First, the customer can enter keywords in the search bar to find related Confluence articles.
>
> **[1:13](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=73)** The search also returns related request [[Forms]].
>
> **[1:16](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=76)** Next related articles are automatically displayed based on keywords in a request.
>
> **[1:22](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=82)** In this example, I entered the summary printer won't print and an article called printer troubleshooting was suggested.
>
> **[1:29](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=89)** If the customer clicks a suggested article, its content is displayed in a new window.
>
> **[1:34](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=94)** Hopefully the article provides the information needed or helps the customer solve the problem on their own.
>
> **[1:40](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=100)** From an agent's perspective, it's easy to find existing content or create new articles.
>
> **[1:46](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=106)** Click the knowledge-based link on the sidebar of any service project.
>
> **[1:49](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=109)** In Cloud, there's a page that lists the articles and any drafts.
>
> **[1:53](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=113)** Click the button at the top to create a new article.
>
> **[1:56](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=116)** You can also search for articles and view some basic article [[Statistics]].
>
> **[2:00](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=120)** To categorize articles, start by creating a new category, using the plus icon in the left sidebar.
>
> **[2:07](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=127)** Then you can hover over an article to select one of the categories and classify content.
>
> **[2:12](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=132)** Customers see the article categories in the portal so name them using terminology for end users.
>
> **[2:18](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=138)** On the knowledge base page in Server and Data Center, you can create new articles and search for existing articles.
>
> **[2:24](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=144)** You can see the list of articles from inside Confluence.
>
> **[2:27](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=147)** It's easy to find existing content or create new articles for issues too.
>
> **[2:32](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=152)** In Cloud, the functions are on the right.
>
> **[2:35](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=155)** In Server and Data Center, the functions are on the bottom left.
>
> **[2:39](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=159)** Agents can create new articles directly from a related JSM issue.
>
> **[2:43](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=163)** In this example, I'm creating a new how to article called, "Replacement Policy" in the linked Confluence space.
>
> **[2:50](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=170)** When creating an article from an issue, the issues description is automatically copied to the new Confluence page.
>
> **[2:56](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=176)** The agent can use the copy as an example in the article or remove it as desired.
>
> **[3:01](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=181)** The original issue is automatically tied to the article using Confluence's page properties macro.
>
> **[3:07](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=187)** Any associated articles are automatically shown in the Jira issue.
>
> **[3:12](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=192)** Now let's explore connecting a JSM project to a Confluence space.
>
> **[3:16](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=196)** This section assumes you've already connected the two applications.
>
> **[3:20](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=200)** Did you know you can connect applications of different types?
>
> **[3:24](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=204)** For example, you can connect a Jira server application to a Confluence cloud application.
>
> **[3:29](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=209)** To add or manage existing Confluence space connections, click the knowledge base link in the service projects admin area.
>
> **[3:37](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=217)** Use the buttons on the top right to create a new Confluence space or link to an existing space.
>
> **[3:42](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=222)** You'll need to be a Confluence application administrator to create new spaces and manage space permissions.
>
> **[3:48](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=228)** In this example, I'm creating a new space called facilities.
>
> **[3:52](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=232)** Sometimes the [[IT Help Desk]] gets requests for work for items like desks and chairs.
>
> **[3:57](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=237)** It would be great to have a dedicated space for related content.
>
> **[4:01](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=241)** You can connect multiple spaces from the same Confluence application.
>
> **[4:05](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=245)** For each connected space, you can also choose viewing permissions.
>
> **[4:09](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=249)** The options are restricted, private and public.
>
> **[4:13](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=253)** Restricted means all logged in customers can view space content without a Confluence license.
>
> **[4:18](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=258)** Private means only licensed Confluence users can see space content.
>
> **[4:23](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=263)** If your application already allows anonymous access, you'll also see a public Confluence option.
>
> **[4:30](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=270)** Public means anyone on the web can view space content without a license.
>
> **[4:34](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=274)** Next let's click the settings link to view more information about this space's permission.
>
> **[4:40](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=280)** You may need to hover over this area for the link to appear.
>
> **[4:43](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=283)** Here's the permissions page for the facility space in Confluence.
>
> **[4:47](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=287)** Because the viewing permissions are set to restricted in JSM, a warning message appears at the top of the page.
>
> **[4:54](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=294)** You can disable this permission in Confluence, but can only enable it again in Jira Service Management.
>
> **[4:59](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=299)** There's one more feature I wanted to mention on the knowledge base settings page in JSM.
>
> **[5:05](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=305)** You see options at the bottom of the page to control whether articles are suggested and limit which articles.
>
> **[5:11](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=311)** In the screenshot, the suggestion ability is currently off for the new mouse request type.
>
> **[5:17](https://www.linkedin.com/learning/jira-service-management-administration/connect-to-a-confluence-knowledge-base?u=76281980&t=317)** For the desktop laptop support request type, only articles with [[Hardware]] and policies labels in Confluence will be suggested.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Confluence]] (20), [[Jira]] (4), [[Forms]] (1), [[Statistics]] (1), [[IT Help Desk]] (1)
> **Tools:** confluence (20), jira (4)
> **Env Vars:** jsm (6)
> **CLI Commands:** find (4)
> **Analogies:** for example (1)
> **Warnings:** warning (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Create a request type](https://www.linkedin.com/learning/jira-service-management-administration/challenge-create-a-request-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/challenge-create-a-request-type?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/jira-service-management-administration/challenge-create-a-request-type?u=76281980&t=5)** - [Instructor] In this challenge, you'll create a new request type for the customer audience, choose a JSM project, add a new request type, and configure the request form shown to customers.
>
> **[0:16](https://www.linkedin.com/learning/jira-service-management-administration/challenge-create-a-request-type?u=76281980&t=16)** You can use any use case that makes sense for your organization.
>
> **[0:19](https://www.linkedin.com/learning/jira-service-management-administration/challenge-create-a-request-type?u=76281980&t=19)** Here are some ideas.
>
> **[0:21](https://www.linkedin.com/learning/jira-service-management-administration/challenge-create-a-request-type?u=76281980&t=21)** Create a feedback form for the customer service department, a contract review request type for the legal team, or a furniture order form for the facilities team.

> [!info]- Semantic Content
>
> **Env Vars:** jsm (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Create a request type](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-a-request-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-a-request-type?u=76281980&t=0)** - [Instructor] Were you able to create a new request form?
>
> **[0:08](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-a-request-type?u=76281980&t=8)** Here's how to do it in cloud, we'll use the example of a feedback form for the customer service department.
>
> **[0:13](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-a-request-type?u=76281980&t=13)** First go to the project settings area of a service project and click request types.
>
> **[0:18](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-a-request-type?u=76281980&t=18)** Next click the add new request type button.
>
> **[0:22](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-a-request-type?u=76281980&t=22)** Give the type unique name, change the icon as desired, and select an issue type.
>
> **[0:27](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-a-request-type?u=76281980&t=27)** Next add the request to an existing group or create a group to categorize it then click the form submission button.
>
> **[0:35](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-a-request-type?u=76281980&t=35)** Next we'll customize the request form seen by customers in the portal.
>
> **[0:39](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-a-request-type?u=76281980&t=39)** Click the request form tab at the top of the page.
>
> **[0:42](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-a-request-type?u=76281980&t=42)** First, add a form description.
>
> **[0:44](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-a-request-type?u=76281980&t=44)** Next, add any desired introductory text or instructions.
>
> **[0:49](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-a-request-type?u=76281980&t=49)** Next, I'll add the description standard field, improve its label, and make it required.
>
> **[0:55](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-a-request-type?u=76281980&t=55)** After I'll hide the summary field and give it a default value.
>
> **[1:00](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-a-request-type?u=76281980&t=60)** This means all feedback submissions will have the same title.
>
> **[1:04](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-a-request-type?u=76281980&t=64)** Finally, I'll preview the form to make sure everything looks as expected.
>
> **[1:08](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-a-request-type?u=76281980&t=68)** Don't forget to test the form and verify the results from the customer's perspective and the agent's perspective.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **UI Navigation:** go to (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Creating Service Level Agreements

[↑ Back to Table of Contents](#table-of-contents)

#### [SLA overview](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=0)** - [Instructor] SLA stands for service level agreement.
>
> **[0:03](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=3)** It represents a goal or a commitment between a service provider and a customer.
>
> **[0:08](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=8)** For example, a request from a sales rep working out in the field might have a first response goal of one hour.
>
> **[0:14](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=14)** A request for a new laptop might have a delivery and implementation goal of one week.
>
> **[0:20](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=20)** In this section, we'll explore SLA concepts and how they help measure success.
>
> **[0:25](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=25)** But first, I want to share a story.
>
> **[0:28](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=28)** One company outsourced their support functions to an external vendor and used SLA's to track performance.
>
> **[0:34](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=34)** They even wrote SLA adherence into their vendor contract.
>
> **[0:38](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=38)** If the vendor didn't meet an SLA, they were paid less.
>
> **[0:42](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=42)** Now, what problems could this arrangement cause?
>
> **[0:45](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=45)** Well, there are many, so be careful to set the expectation that agents should thoroughly and thoughtfully resolve requests.
>
> **[0:53](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=53)** Make sure they aren't rushing through the support process just to simply close issues as fast as possible, and also make sure that any SLA goals are reasonable and allow the agent enough time to provide adequate support and customer communication.
>
> **[1:08](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=68)** Deadline adherence shouldn't be the only metric used to measure success.
>
> **[1:13](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=73)** All SLA's contain the following attributes, a metric to be tracked, like time to first response or time to completion, a time goal like one hour or one day, a calendar to identify work hours, a JQL statement to determine applicable issues, and conditions for when the timer should start, pause, and stop.
>
> **[1:34](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=94)** SLA's are created and configured by project administrators.
>
> **[1:38](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=98)** Agents can use them to plan which requests to address first and understand the expected timeframe.
>
> **[1:44](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=104)** For each SLA metric created in JSM, a new custom field is created in [[Jira]] to store the name.
>
> **[1:50](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=110)** As I mentioned in section one, I recommend restricting custom field creation to Jira application level administrators.
>
> **[1:57](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=117)** The default setting on the JSM application configuration page is yes, but I always change it to no.
>
> **[2:04](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=124)** Too many custom fields are hard to maintain and could impact the application performance.
>
> **[2:09](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=129)** SLA's provide a way to define goals and prioritize requests.
>
> **[2:13](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=133)** They can help identify important requests based on request type, priority, reporter, and more.
>
> **[2:19](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=139)** SLA's automatically track time durations and help measure metrics, like response time or completion time.
>
> **[2:25](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=145)** For example, did the team meet the goal to respond to all priority requests in two hours?
>
> **[2:31](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=151)** You can have zero, one, or many SLA's for each service project.
>
> **[2:35](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=155)** The SLA's are mutually exclusive, meaning it's possible to meet one goal, but miss another.
>
> **[2:41](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=161)** [[Atlassian]] says they don't recommend setting a goal that's dependent on a different SLA.
>
> **[2:47](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=167)** One place SLA information is displayed is in queues.
>
> **[2:50](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=170)** For example, Help51 has a time to resolution SLA of four hours.
>
> **[2:56](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=176)** If there are other SLA's in this project, you can add those columns by clicking the ellipsis menu at the top right.
>
> **[3:03](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=183)** Agents will see SLA data in individual issues as well.
>
> **[3:06](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=186)** Any SLA's that apply to this issue are automatically displayed.
>
> **[3:11](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=191)** This example shows two, time to first response and time to resolution.
>
> **[3:16](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=196)** This issue was just created.
>
> **[3:18](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=198)** In the first SLA, the goal is to respond within two hours.
>
> **[3:22](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=202)** Since the issue was brand new, there are two hours remaining on the clock.
>
> **[3:26](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=206)** Icons and colors are used as visual indicators of many SLA states.
>
> **[3:31](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=211)** In the first example, the two SLA's are currently paused.
>
> **[3:34](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=214)** That means the timer is not counting.
>
> **[3:36](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=216)** A timer may be paused due to issue data or conditions you specify.
>
> **[3:41](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=221)** Some organizations pause the timer when an issue is in an on-hold type status or while waiting for a customer to provide additional information.
>
> **[3:49](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=229)** In this case, the timer is paused because the request was filed outside of work hours.
>
> **[3:54](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=234)** The timer will count based on the specified work calendar.
>
> **[3:58](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=238)** In the second example, both SLA's are breached, meaning the goals haven't been met.
>
> **[4:03](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=243)** The timers continue to count during working hours until a stop condition is met.
>
> **[4:08](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=248)** In the third example, the first SLA was breached.
>
> **[4:12](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=252)** The action tracked occurred one minute after its deadline.
>
> **[4:16](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=256)** The two SLA's below it, however, were met.
>
> **[4:18](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=258)** Both goals were met very close to their deadlines, but it still counts.
>
> **[4:23](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=263)** For all impacted issues, agents can see which SLA's are applicable, the time goals, the status, and either how much time remains or how much time elapsed.
>
> **[4:32](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=272)** There are many helpful JQL functions for querying SLA data.
>
> **[4:36](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=276)** Here are two examples.
>
> **[4:38](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=278)** The first finds all issues where the time to first response SLA was not met.
>
> **[4:44](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=284)** The second finds all issues awaiting a resolution for more than eight hours.
>
> **[4:48](https://www.linkedin.com/learning/jira-service-management-administration/sla-overview?u=76281980&t=288)** See the documentation for more examples.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (2), [[Atlassian]] (1)
> **Env Vars:** sla (28), jql (2), jsm (2)
> **Analogies:** for example (3)
> **CLI Commands:** make (2)
> **Tools:** jira (2)
> **Documentation:** the documentation (1)
> **Definitions:** stands for (1)
> **Warnings:** be careful (1)

#### [Use and create SLAs](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-slas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-slas?u=76281980&t=0)** - To create and manage service level agreements, click the SLAs link in the service project settings area.
>
> **[0:06](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-slas?u=76281980&t=6)** Depending on the project template used, some SLAs may be already created.
>
> **[0:11](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-slas?u=76281980&t=11)** Use the buttons on the right to edit, delete or expand SLA settings.
>
> **[0:16](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-slas?u=76281980&t=16)** Let's create an SLA to make sure we're completing executive requests within 24 hours.
>
> **[0:22](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-slas?u=76281980&t=22)** For non-execs we'll extend the deadline to 48 hours.
>
> **[0:25](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-slas?u=76281980&t=25)** We'll assume there's a [[Jira]] group called executives, so we know who to treat as a VIP.
>
> **[0:31](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-slas?u=76281980&t=31)** To create a new SLA, click the button at the top right.
>
> **[0:34](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-slas?u=76281980&t=34)** First, select a metric to measure.
>
> **[0:37](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-slas?u=76281980&t=37)** I'll choose time to resolution.
>
> **[0:39](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-slas?u=76281980&t=39)** Next, enter a time goal until JIRA which issues the goal applies to.
>
> **[0:44](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-slas?u=76281980&t=44)** A default goal is already in place, click the plus sign to add a new goal.
>
> **[0:49](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-slas?u=76281980&t=49)** Next, edit the goal for all non VIP requests.
>
> **[0:53](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-slas?u=76281980&t=53)** Then click the form submission button.
>
> **[0:56](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-slas?u=76281980&t=56)** Now we have a goal to respond within 24 hours for executives and 48 hours for all other users.
>
> **[1:02](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-slas?u=76281980&t=62)** The order of the goals is important.
>
> **[1:05](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-slas?u=76281980&t=65)** The first goal that matches the JQL is applied.
>
> **[1:08](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-slas?u=76281980&t=68)** Once an issue matches the goal criteria, JSM stops looking through the goals list.
>
> **[1:13](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-slas?u=76281980&t=73)** You can drag and drop goals to reorder them by importance.
>
> **[1:17](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-slas?u=76281980&t=77)** Keep in mind the all remaining issues goal will always be at the bottom of the list.
>
> **[1:22](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-slas?u=76281980&t=82)** Next, select any desired conditions.
>
> **[1:25](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-slas?u=76281980&t=85)** The counter should start when an issue is created.
>
> **[1:28](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-slas?u=76281980&t=88)** Click the plus sign to choose from the list of conditions.
>
> **[1:31](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-slas?u=76281980&t=91)** The counter should stop when an issue is resolved.
>
> **[1:34](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-slas?u=76281980&t=94)** Click the plus sign to select the desired condition.
>
> **[1:37](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-slas?u=76281980&t=97)** Finally, click the form submission button to save the SLA.
>
> **[1:42](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-slas?u=76281980&t=102)** After creating or changing SLAs, JSM needs to recalculate and re index issue data.
>
> **[1:48](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-slas?u=76281980&t=108)** How long this takes depends on the number of SLAs, impacted requests and other performance factors.
>
> **[1:54](https://www.linkedin.com/learning/jira-service-management-administration/use-and-create-slas?u=76281980&t=114)** If you find this process takes longer than desired, I recommend making SLA changes outside of peak use hours.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (2)
> **Env Vars:** sla (5), jira (2), vip (2), jsm (2), jql (1)
> **CLI Commands:** make (1), find (1)
> **Tools:** jira (2)
> **UI Navigation:** drag and drop (1), select the (1)
> **Exercise Files:** template (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - to (1)

#### [Manage SLA calendars](https://www.linkedin.com/learning/jira-service-management-administration/manage-sla-calendars?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/manage-sla-calendars?u=76281980&t=0)** - [Instructor] In the previous section, we created a sample SLA, but leveraged the default calendar.
>
> **[0:05](https://www.linkedin.com/learning/jira-service-management-administration/manage-sla-calendars?u=76281980&t=5)** In this section, let's discuss using specific calendars to determine support hours and resource availability.
>
> **[0:12](https://www.linkedin.com/learning/jira-service-management-administration/manage-sla-calendars?u=76281980&t=12)** Click the calendar icon to access calendar settings.
>
> **[0:15](https://www.linkedin.com/learning/jira-service-management-administration/manage-sla-calendars?u=76281980&t=15)** In server and data center, there's a separate calendar link in the left sidebar.
>
> **[0:19](https://www.linkedin.com/learning/jira-service-management-administration/manage-sla-calendars?u=76281980&t=19)** JSM comes with a default calendar called 24/7 calendar.
>
> **[0:23](https://www.linkedin.com/learning/jira-service-management-administration/manage-sla-calendars?u=76281980&t=23)** It's not shown because there's nothing to configure.
>
> **[0:26](https://www.linkedin.com/learning/jira-service-management-administration/manage-sla-calendars?u=76281980&t=26)** 24 hours a day and seven days a week means the service desk is continually staffed.
>
> **[0:31](https://www.linkedin.com/learning/jira-service-management-administration/manage-sla-calendars?u=76281980&t=31)** There may also be a calendar called sample nine to five calendar.
>
> **[0:35](https://www.linkedin.com/learning/jira-service-management-administration/manage-sla-calendars?u=76281980&t=35)** Click the button at the top right to add a new calendar or click the buttons below to edit, delete, or expand calendar settings.
>
> **[0:43](https://www.linkedin.com/learning/jira-service-management-administration/manage-sla-calendars?u=76281980&t=43)** Here's an expanded view of the sample nine to five calendar.
>
> **[0:46](https://www.linkedin.com/learning/jira-service-management-administration/manage-sla-calendars?u=76281980&t=46)** Click the ellipsis to edit the settings.
>
> **[0:49](https://www.linkedin.com/learning/jira-service-management-administration/manage-sla-calendars?u=76281980&t=49)** You can change the calendar's name, the time zone, and the days and hours worked.
>
> **[0:54](https://www.linkedin.com/learning/jira-service-management-administration/manage-sla-calendars?u=76281980&t=54)** Notice that the hours are shown using the 24 hour format.
>
> **[0:58](https://www.linkedin.com/learning/jira-service-management-administration/manage-sla-calendars?u=76281980&t=58)** This organization stops work at 17:00 hours.
>
> **[1:02](https://www.linkedin.com/learning/jira-service-management-administration/manage-sla-calendars?u=76281980&t=62)** You can also enter 5:00 PM and JSM will convert it to 17:00 hours.
>
> **[1:07](https://www.linkedin.com/learning/jira-service-management-administration/manage-sla-calendars?u=76281980&t=67)** You can also specify specific time periods of work each day by clicking the plus icon.
>
> **[1:13](https://www.linkedin.com/learning/jira-service-management-administration/manage-sla-calendars?u=76281980&t=73)** In this example, there's a one-hour break on Mondays for a weekly team meeting.
>
> **[1:17](https://www.linkedin.com/learning/jira-service-management-administration/manage-sla-calendars?u=76281980&t=77)** Scroll down in the overlay for additional settings.
>
> **[1:20](https://www.linkedin.com/learning/jira-service-management-administration/manage-sla-calendars?u=76281980&t=80)** As you can see, this calendar does not include weekend work.
>
> **[1:24](https://www.linkedin.com/learning/jira-service-management-administration/manage-sla-calendars?u=76281980&t=84)** That means that the SLA timer won't run on Saturday and Sunday, and those hours are not included in the deadline.
>
> **[1:31](https://www.linkedin.com/learning/jira-service-management-administration/manage-sla-calendars?u=76281980&t=91)** If your organization has holidays, enter them here.
>
> **[1:34](https://www.linkedin.com/learning/jira-service-management-administration/manage-sla-calendars?u=76281980&t=94)** In the example, there's a company holiday that occurs each year on October 15th.
>
> **[1:39](https://www.linkedin.com/learning/jira-service-management-administration/manage-sla-calendars?u=76281980&t=99)** You can create as many recurring or one time holidays as you need.
>
> **[1:43](https://www.linkedin.com/learning/jira-service-management-administration/manage-sla-calendars?u=76281980&t=103)** Don't forget to update one time holidays each year.
>
> **[1:46](https://www.linkedin.com/learning/jira-service-management-administration/manage-sla-calendars?u=76281980&t=106)** If you have team members in multiple time zones, you can create multiple calendars.
>
> **[1:51](https://www.linkedin.com/learning/jira-service-management-administration/manage-sla-calendars?u=76281980&t=111)** Just keep in mind an SLA goal can only be associated with one calendar at a time.
>
> **[1:57](https://www.linkedin.com/learning/jira-service-management-administration/manage-sla-calendars?u=76281980&t=117)** This might mean for each goal in an SLA, you'll need one goal per calendar.
>
> **[2:01](https://www.linkedin.com/learning/jira-service-management-administration/manage-sla-calendars?u=76281980&t=121)** You'll also need a way to segment which issues each goal applies to using JQL.

> [!info]- Semantic Content
>
> **Env Vars:** sla (4), jsm (2), jql (1)
> **Ports:** :00 (3)
> **Prerequisites:** configure (1), you'll need (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** means that (1)
> **Best Practices:** don't forget (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Troubleshoot SLAs](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=0)** - When you have many SLAs, goals and calendars, things can get confusing.
>
> **[0:05](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=5)** If something's not quite right, it's usually caused by incorrect criteria, configuration changes or incorrect user expectations.
>
> **[0:13](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=13)** For example, if the wrong calendar is selected, the timer might be running outside of expected work hours.
>
> **[0:19](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=19)** I always start troubleshooting by checking the time goal, calendar, and JQL query.
>
> **[0:24](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=24)** In an issue, the agent can click the time goal and see the associated calendar.
>
> **[0:29](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=29)** Next, sometimes the [[Jira]] configuration changes and breaks the SLA queries.
>
> **[0:34](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=34)** Always be careful when renaming statuses and custom fields, you should research where they're used first.
>
> **[0:40](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=40)** You might inadvertently break an SLA and automation reports or workflow functions.
>
> **[0:46](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=46)** Finally, sometimes everything is working as designed, but that might not be as desired or as understood.
>
> **[0:53](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=53)** Here are some real examples.
>
> **[0:55](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=55)** One of my clients reported a problem with their time to resolution SLA.
>
> **[0:59](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=59)** They're expecting to have forty-five hours to complete the task, but we're only given two days and 17 hours.
>
> **[1:06](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=66)** Can you spot the cause of the discrepancy?
>
> **[1:08](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=68)** In the calendar, a workday is defined as 14 hours.
>
> **[1:12](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=72)** Two days times 14 hours per day, plus 17 hours equals 45 hours.
>
> **[1:18](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=78)** The calculation was correct and JSM was functioning as expected.
>
> **[1:22](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=82)** The customer was assuming eight hours per day, instead of the configured 14.
>
> **[1:27](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=87)** Here's another example.
>
> **[1:29](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=89)** The goal criteria is the same as in the previous example, but this time the customer was comparing the goal time between two different issues.
>
> **[1:37](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=97)** Can you spot the discrepancy?
>
> **[1:40](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=100)** In both cases, the total number of hours is the same, but the display format is different.
>
> **[1:45](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=105)** Both two days and 17 hours and three days and three hours equal 45 hours.
>
> **[1:51](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=111)** To be honest, I'm not sure why the display was different, but now you know that that's possible and to check for it.
>
> **[1:58](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=118)** Here's one more example, using a different scenario.
>
> **[2:01](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=121)** In this case, the metric is time to first response and response is defined as a status change.
>
> **[2:07](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=127)** There are two goals, one for priority one incidents and another for priority two incidents.
>
> **[2:12](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=132)** The P two incident was created at 10 o'clock.
>
> **[2:15](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=135)** The issue was transitioned five minutes later, then the issue's priority was changed to P one.
>
> **[2:22](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=142)** The customer wanted to know why the SLA goal didn't change to 15 minutes when the priority was increased.
>
> **[2:28](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=148)** Well, I didn't know.
>
> **[2:30](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=150)** The answer might be in the SLA documentation, but I sure couldn't find it.
>
> **[2:34](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=154)** This happens sometimes, but it's your job as the administrator to become curious and figure it out.
>
> **[2:40](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=160)** Here's what I did to reproduce and understand the problem.
>
> **[2:43](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=163)** First, I set up the specific SLAs in a test environment.
>
> **[2:47](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=167)** Then I created a P two incident and made sure the expected SLA was applied.
>
> **[2:52](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=172)** Next, I increased the priority from P two to P one, making sure not to change anything else that would impact the SLA timer.
>
> **[3:00](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=180)** The SLA immediately changed to the 15 minute time to first response goal.
>
> **[3:05](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=185)** After, I created a second P two incident and transitioned it in the next workflow status.
>
> **[3:11](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=191)** If you remember from the example, a response is defined as a status change.
>
> **[3:16](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=196)** Next, I increased the priority from P two to P one again.
>
> **[3:20](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=200)** This time the SLA did not change and remained at the original 30 minute time to first response goal.
>
> **[3:27](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=207)** From this test, I surmised that once the time to first response criteria is met, the SLA goal does not change or recalculate.
>
> **[3:34](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=214)** If you think about it, it makes sense.
>
> **[3:37](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=217)** The goal was already met.
>
> **[3:38](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=218)** So it's not fair to change the parameters and require the same metric to be met again.
>
> **[3:43](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=223)** From an admin perspective, everything was working as designed.
>
> **[3:46](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=226)** Sometimes that's different than what the client desires, however.
>
> **[3:50](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=230)** It's your job as an admin to figure out how it works and find an effective way to explain it to others.
>
> **[3:56](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=236)** Sometimes SLAs show inconsistent data or unexpected results.
>
> **[4:01](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=241)** If you encounter problems, try recalculating and re-indexing issue data.
>
> **[4:05](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=245)** Simply edit an SLA and save it to trigger a recalculation.
>
> **[4:10](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=250)** It's good to know that recalculations only occur for unresolved issues.
>
> **[4:14](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=254)** Sometimes too many SLAs, conditions or slow JQL queries cause time-outs.
>
> **[4:20](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=260)** Always look for ways to simplify queries and limit scope as much as possible.
>
> **[4:25](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=265)** As with everything in JIRA, don't create more settings and customization than you really need.
>
> **[4:31](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=271)** Next, check for any recent goal configuration changes.
>
> **[4:35](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=275)** Let's say there's an original goal of 10 minutes and five minutes have elapsed.
>
> **[4:40](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=280)** If the goal has changed to only five minutes, the SLA is automatically breached.
>
> **[4:45](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=285)** Always time goal changes carefully and be aware of their impact.
>
> **[4:49](https://www.linkedin.com/learning/jira-service-management-administration/troubleshoot-slas?u=76281980&t=289)** For other troubleshooting tips, read [[Atlassian]]'s documentation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (2), [[Atlassian]] (1)
> **Env Vars:** sla (12), jql (2), jira (2), jsm (1)
> **Definitions:** defined as (3)
> **CLI Commands:** find (2)
> **Tools:** jira (2)
> **Warnings:** be careful (1), be aware (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)

#### [Challenge: Create an SLA](https://www.linkedin.com/learning/jira-service-management-administration/challenge-create-an-sla?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/challenge-create-an-sla?u=76281980&t=0)** (bouncy music)
>
> **[0:05](https://www.linkedin.com/learning/jira-service-management-administration/challenge-create-an-sla?u=76281980&t=5)** - [Instructor] In this challenge, you'll create an SLA to measure how long change issues are awaiting approval.
>
> **[0:11](https://www.linkedin.com/learning/jira-service-management-administration/challenge-create-an-sla?u=76281980&t=11)** First, choose a JSM project that has a change issue type and an approval step in the change workflow.
>
> **[0:17](https://www.linkedin.com/learning/jira-service-management-administration/challenge-create-an-sla?u=76281980&t=17)** Then create a new SLA called time to approval.
>
> **[0:21](https://www.linkedin.com/learning/jira-service-management-administration/challenge-create-an-sla?u=76281980&t=21)** Finally, set a goal of eight hours for changes to be approved.
>
> **[0:24](https://www.linkedin.com/learning/jira-service-management-administration/challenge-create-an-sla?u=76281980&t=24)** You can use any work calendar, including the default 24/7 one.
>
> **[0:29](https://www.linkedin.com/learning/jira-service-management-administration/challenge-create-an-sla?u=76281980&t=29)** And of course, if this use case doesn't apply to your organization, create an SLA that does.

> [!info]- Semantic Content
>
> **Env Vars:** sla (3), jsm (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bouncy music) (1)

#### [Solution: Create an SLA](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-an-sla?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-an-sla?u=76281980&t=0)** - [Instructor] Were you able to build the SLA?
>
> **[0:07](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-an-sla?u=76281980&t=7)** Let's do it in Server this time.
>
> **[0:09](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-an-sla?u=76281980&t=9)** The process is similar in Cloud and Data Center.
>
> **[0:12](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-an-sla?u=76281980&t=12)** First go to a service projects admin area and select SLAs from the left sidebar.
>
> **[0:18](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-an-sla?u=76281980&t=18)** Next click the SLA create button.
>
> **[0:21](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-an-sla?u=76281980&t=21)** In the SLA name field, enter time to approval, then select conditions to start, pause, and stop the timer.
>
> **[0:29](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-an-sla?u=76281980&t=29)** I'll focus on the change advisory board approval.
>
> **[0:32](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-an-sla?u=76281980&t=32)** In the default change workflow, when a change is approved, it goes into the awaiting implementation status.
>
> **[0:38](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-an-sla?u=76281980&t=38)** When a change is declined, it goes into the decline status.
>
> **[0:42](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-an-sla?u=76281980&t=42)** I'll use those statuses to stop the timer.
>
> **[0:45](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-an-sla?u=76281980&t=45)** Next, add a new goal.
>
> **[0:48](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-an-sla?u=76281980&t=48)** Finally, click the form submission button.
>
> **[0:50](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-an-sla?u=76281980&t=50)** Now you can measure the approval response time for members of the change advisory board.
>
> **[0:55](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-an-sla?u=76281980&t=55)** Don't forget to create a test issue and make sure the SLA functions as expected.

> [!info]- Semantic Content
>
> **Env Vars:** sla (4)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Using Automation

[↑ Back to Table of Contents](#table-of-contents)

#### [Automation overview](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=0)** - [Instructor] In this section, we'll talk about using automation to improve how you communicate with your customers and reduce manual work.
>
> **[0:07](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=7)** Can you think of one example of customer service automation used today?
>
> **[0:11](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=11)** How about waiting for a table at a restaurant?
>
> **[0:14](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=14)** The traditional approach is adding your name to a paper list and waiting to be called.
>
> **[0:18](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=18)** But technology helps make this better and less error prone.
>
> **[0:22](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=22)** At some restaurants, I provide my phone number and receive a text when my table is ready instead.
>
> **[0:28](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=28)** As a customer, I love this technology because I can leave and do other things while I'm waiting.
>
> **[0:33](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=33)** And sometimes there's even a feature to check my position in line.
>
> **[0:36](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=36)** The restaurant loves this technology because customers aren't accidentally skipped and aren't constantly asking if their table is ready yet.
>
> **[0:44](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=44)** This small automation example makes the entire seating process smoother for everyone.
>
> **[0:50](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=50)** Automation helps us complete work faster and makes it easier.
>
> **[0:54](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=54)** Instead of manually emailing individual customers when a feature they requested is ready, let your automation notify them.
>
> **[1:01](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=61)** You can use automation to reduce manual work and eliminate tasks we do over and over.
>
> **[1:07](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=67)** For example, when a request requires development work, automatically create an issue for the dev team and link it to the request.
>
> **[1:14](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=74)** You can also use automation to connect tools together.
>
> **[1:17](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=77)** You can automatically create requests from emails or chat conversations.
>
> **[1:22](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=82)** Next, automation can help improve [[Data Quality]] and reduce human error.
>
> **[1:27](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=87)** You can use roles to fill in missing information and ensure consistent results.
>
> **[1:32](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=92)** Finally, automation helps improve communication and better support customers.
>
> **[1:37](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=97)** Let's discuss ways to automate work in different deployment methods.
>
> **[1:41](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=101)** In Cloud, tier service management currently has two types of automation.
>
> **[1:46](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=106)** The first type is from [[Atlassian]]'s acquisition of an app called Automation for [[Jira]].
>
> **[1:51](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=111)** This technology is now included in Cloud as a standard feature.
>
> **[1:55](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=115)** There are also some legacy capabilities that will one day be decommissioned.
>
> **[1:59](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=119)** But don't worry, Atlassian will automatically migrate any rules from the legacy version to the new version for you.
>
> **[2:06](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=126)** In Server and Data Center, Jira Service Management has some built in automation features too, but the capabilities and user interface is different from what's available in Cloud.
>
> **[2:17](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=137)** For Data Center customers who want to add the Automation for Jira features, there's an app available in the Atlassian marketplace.
>
> **[2:24](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=144)** Sorry, Server customers, new app sales ended in February, 2021 as part of Atlassian's platform decommission.
>
> **[2:32](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=152)** Regardless of your deployment type, there are lots of other great automation apps available in the Atlassian marketplace.
>
> **[2:39](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=159)** Automations are configured using rules, rules store the criteria for when and how actions are performed.
>
> **[2:46](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=166)** Rules contain three main parts, triggers, conditions and actions.
>
> **[2:51](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=171)** A trigger specifies when the rule is run.
>
> **[2:54](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=174)** Conditions determine the scope of the rule and how much data is impacted.
>
> **[2:58](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=178)** Actions determine what is done or performed.
>
> **[3:01](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=181)** Here's an example of rule using the new built-in automation in Cloud.
>
> **[3:05](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=185)** On the left are the triggers, conditions and actions and on the right are additional rule details and settings.
>
> **[3:12](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=192)** In this example, the rule alerts the team that an incident is about to breach its SLA.
>
> **[3:17](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=197)** Let's take a closer look.
>
> **[3:19](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=199)** The first step is to select a trigger.
>
> **[3:21](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=201)** Triggers listen for events and start rule execution.
>
> **[3:25](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=205)** Triggers can detect when a field or status value changes, an issue is created, assigned or closed, a link or comment is added, an SLA is breached, a build succeeds or fails or a JQL query returns issues.
>
> **[3:40](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=220)** In the example, I selected an SLA threshold breach trigger.
>
> **[3:44](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=224)** On the right, I selected the existing time to resolution SLA and set the trigger to find issues that will breach in the next hour.
>
> **[3:52](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=232)** After the trigger is configured, add one or more conditions if desired.
>
> **[3:56](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=236)** Conditions refined rules, and must be met for rules to continue running.
>
> **[4:00](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=240)** For example, does a field or user match certain criteria?
>
> **[4:04](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=244)** There are lots of possibilities to choose from like checking fields for certain values, doing a comparison and if/else statements.
>
> **[4:12](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=252)** In the example, I selected an issue fields condition.
>
> **[4:16](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=256)** On the right, I use the settings to limit the rule by issue type.
>
> **[4:19](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=259)** Now this rule will only apply to incidents.
>
> **[4:23](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=263)** Finally, add an action to tell the rule what to do.
>
> **[4:26](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=266)** Actions perform tasks like creating issues, sending emails, notifying chat rooms, and more.
>
> **[4:33](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=273)** In this example, I selected the send [[Slack]] message option and configured the settings on the right.
>
> **[4:39](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=279)** There's also a similar action for [[Microsoft Teams]].
>
> **[4:42](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=282)** If your team doesn't have a chat tool, use the send email action instead.
>
> **[4:48](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=288)** In the example, I used a variable in the message for the chat client.
>
> **[4:52](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=292)** In Cloud, variables are called smart values and there are many available.
>
> **[4:57](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=297)** Smart values allow you to access and manipulate issue data.
>
> **[5:00](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=300)** Simply wrap smart values in double curly brackets and use a period to reference child elements.
>
> **[5:07](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=307)** This action has additional information at the bottom of the page.
>
> **[5:10](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=310)** Expanding the area shown will supply a list of supported smart values and examples.
>
> **[5:15](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=315)** See the documentation for more information about smart value abilities.
>
> **[5:20](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=320)** To reorder conditions and actions, simply drag them up and down on the page.
>
> **[5:24](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=324)** If additional branches, conditions or actions are required, you can add them at any time.
>
> **[5:29](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=329)** When you're finished configuring the rule, give it a unique name and click the form submission button to enable it.
>
> **[5:35](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=335)** From here you can return to the rule list or disable the rule.
>
> **[5:39](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=339)** Don't forget to test the rule after you enable it.
>
> **[5:42](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=342)** I created a test incident, let it approach its SLA deadline and check the automation audit log to make sure the rule executed as expected.
>
> **[5:51](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=351)** I also verify the desired message arrived in Slack.
>
> **[5:54](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=354)** Here are a few automation ideas to get you thinking about the possibilities.
>
> **[5:59](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=359)** You can automatically update issues based on all sorts of criteria.
>
> **[6:03](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=363)** For example, assign issues based on custom field data, like a certain skill needed or a specific [[Microsoft Office|office]] location.
>
> **[6:09](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=369)** Set a due date based on a creation date or update issues based on a JQL result.
>
> **[6:15](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=375)** You can automatically transition issues too.
>
> **[6:18](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=378)** For example, automatically reopen a closed issue if a customer adds a comment.
>
> **[6:23](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=383)** Next, if information changes in a request, you can automatically update a related issue.
>
> **[6:29](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=389)** This is useful when there are development issues linked to customer requests.
>
> **[6:33](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=393)** You can also use automation to send alerts.
>
> **[6:36](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=396)** This is great for no funding agents of approaching SLA deadlines.
>
> **[6:40](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=400)** Finally, you can catch undesired behavior.
>
> **[6:43](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=403)** For example, detect the [[Microsoft Word|word]] password to make sure customer hasn't exposed their credentials.
>
> **[6:49](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=409)** Need some additional inspiration?
>
> **[6:51](https://www.linkedin.com/learning/jira-service-management-administration/automation-overview?u=76281980&t=411)** My website lists 65 ways to make your Jira life easier with automation, workflow extensions and scheduling apps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Atlassian]] (5), [[Jira]] (4), [[Slack]] (2), [[Data Quality]] (1), [[Microsoft Teams]] (1)
> **Env Vars:** sla (6), jql (2)
> **Tools:** jira (4), slack (2)
> **CLI Commands:** make (4), find (1)
> **Analogies:** for example (5)
> **Cross-References:** in the next (1)
> **Documentation:** the documentation (1)
> **Best Practices:** don't forget (1)

#### [Create automation rules](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=0)** - [Instructor] Let's create a sample automation using the builtin no code features in Cloud.
>
> **[0:05](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=5)** Project admins can create rules within projects they manage.
>
> **[0:09](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=9)** Application admins can create both project and global rules.
>
> **[0:13](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=13)** To manage automations, go to the admin area of any project and click the automation link in the left sidebar.
>
> **[0:19](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=19)** Use the tabs at the top to access the rule list, the audit log, and the library of pre-written examples.
>
> **[0:26](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=26)** Use the menus on the left to filter results based on scope.
>
> **[0:29](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=29)** You can also add your own labels for categorization.
>
> **[0:32](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=32)** I'm planning to create multiple rules related to SLAs, so I added a custom label called SLA rules to organize them.
>
> **[0:40](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=40)** Drag any rule's title to a custom label on the left to categorize it.
>
> **[0:44](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=44)** To create a new rule, click the button on the right.
>
> **[0:48](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=48)** Let's create another SLA rule.
>
> **[0:50](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=50)** This time, we'll remind the assignee via email that a response deadline is approaching for service requests created by executives.
>
> **[0:58](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=58)** Add the SLA threshold breach trigger.
>
> **[1:01](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=61)** Next, select an SLA from the list.
>
> **[1:04](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=64)** I'll select time to first response.
>
> **[1:06](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=66)** The time to first response deadline for service requests in this project is four hours.
>
> **[1:12](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=72)** I'll set a reminder for 30 minutes before, then click the form submission button.
>
> **[1:17](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=77)** Next, let's add a condition to limit this rule to service requests.
>
> **[1:22](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=82)** Click new condition, then click the form submission button.
>
> **[1:26](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=86)** Let's add one more condition to limit this rule to members of the executive group.
>
> **[1:31](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=91)** Any time you enter JQL, click the validate query link to make sure the query is correct and returns the expected issues.
>
> **[1:39](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=99)** Here's a tip.
>
> **[1:40](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=100)** After validating the query, click the link again to see the list of impacted issues.
>
> **[1:45](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=105)** Once all options are set as desired, click the form submission button to save the trigger.
>
> **[1:51](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=111)** Next, I'll add an action to send an email to the current assignee.
>
> **[1:55](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=115)** I'll use smart values to make the message more useful.
>
> **[2:00](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=120)** Then click the form submission button.
>
> **[2:03](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=123)** Finally, give the rule a unique name and enable it.
>
> **[2:07](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=127)** Next, click the return to list link.
>
> **[2:10](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=130)** I'll categorize the new rule by dragging it to the SLA rules label.
>
> **[2:14](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=134)** Next, click the rule's title to access additional settings.
>
> **[2:18](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=138)** At the bottom of the page are some useful options.
>
> **[2:21](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=141)** You can email the owner if the rule fails, change the owner, and set the actor.
>
> **[2:27](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=147)** The actor is the user the action is attributed to.
>
> **[2:30](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=150)** I like to use the default, so the issue history shows that an action was performed by the automation user and not by me personally.
>
> **[2:38](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=158)** If you're using an app for automation, I recommend creating a service account for this purpose.
>
> **[2:44](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=164)** There's a great website to try out automations without impacting your cloud application.
>
> **[2:49](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=169)** It's called the Automation Playground.
>
> **[2:51](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=171)** It's a great way to see new ideas and see what your colleagues are building.
>
> **[2:55](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=175)** Visit the sandbox website at the URL shown.
>
> **[2:58](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=178)** Let's create a rule to notify customers that a certain service is restored.
>
> **[3:03](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=183)** We'll make this rule generic so we can use it for all types of services, systems, and applications.
>
> **[3:08](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=188)** Let's assume the support team uses a label called alert dash restored when they bring systems back online.
>
> **[3:15](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=195)** From a service management project, use the left sidebar to access the project settings area, and then the automation section.
>
> **[3:23](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=203)** Next, click the add rule button at the top right.
>
> **[3:26](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=206)** Scroll down to the bottom of the overlay, and select custom rule.
>
> **[3:30](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=210)** Next, name the rule, and enter an optional description.
>
> **[3:34](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=214)** Next, add a trigger.
>
> **[3:36](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=216)** I'll select the status changed option from the list.
>
> **[3:40](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=220)** Now this rule will run each time an issue changes status.
>
> **[3:44](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=224)** Next, click the IF box to set conditions.
>
> **[3:48](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=228)** You can use dropdown menus in basic mode, or JQL in advanced mode.
>
> **[3:52](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=232)** I'll use advanced mode, and enter a JQL statement to limit the scope of issues included.
>
> **[3:57](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=237)** I only want to alert customers when incidents are completed, there's a specific resolution, and a specific label is present.
>
> **[4:07](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=247)** Then click the form submission button.
>
> **[4:10](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=250)** Finally, click the THEN box to add a send email action.
>
> **[4:15](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=255)** Set the To field to the reporter, and add content for the email message.
>
> **[4:19](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=259)** You can use variables, format the message with Wiki Markup, preview the message, and send a test message.
>
> **[4:26](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=266)** Then click save and confirm the rule.
>
> **[4:29](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=269)** I'll also add an add comment action.
>
> **[4:32](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=272)** Enter the comment copy, and select who should see it, which is internal users in this case.
>
> **[4:37](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=277)** Last, save and enable the rule.
>
> **[4:40](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=280)** Now when incidents are remedied and the special label is present, the customer is sent an email and an internal comment is added to the issue.
>
> **[4:50](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=290)** There's a lot you can do with builtin automation, but if you need additional features, you can extend capabilities with an app from the [[Atlassian]] Marketplace.
>
> **[4:58](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=298)** Some apps provide specific automations, like creating new issues on transition or calculating fields.
>
> **[5:04](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=304)** Some provide rules for workflows, issue events, or scheduled events.
>
> **[5:09](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=309)** Some apps have point-and-click rules, scripting abilities, or both.
>
> **[5:13](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=313)** Search for automation or workflow in the Atlassian Marketplace to see the options.
>
> **[5:18](https://www.linkedin.com/learning/jira-service-management-administration/create-automation-rules?u=76281980&t=318)** And for data center users, if you like the visual rule builder seen in Cloud, you can add those capabilities with the Automation for [[Jira]] app.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Atlassian]] (2), [[Jira]] (1)
> **Env Vars:** sla (5), jql (3), url (1), jira (1)
> **UI Navigation:** go to (1), scroll down (1), select the (1), dropdown (1)
> **CLI Commands:** make (3)
> **Tools:** jira (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Create an automation](https://www.linkedin.com/learning/jira-service-management-administration/challenge-create-an-automation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/challenge-create-an-automation?u=76281980&t=0)** - [Instructor] Sometimes teams use the default waiting for customer status to ask customers to verify a solution.
>
> **[0:11](https://www.linkedin.com/learning/jira-service-management-administration/challenge-create-an-automation?u=76281980&t=11)** In this challenge, you'll create an automation rule to handle unverified customer requests.
>
> **[0:17](https://www.linkedin.com/learning/jira-service-management-administration/challenge-create-an-automation?u=76281980&t=17)** First, choose a [[Jira]] Service Management project, then create an automation in the project settings area.
>
> **[0:23](https://www.linkedin.com/learning/jira-service-management-administration/challenge-create-an-automation?u=76281980&t=23)** Create the necessary triggers, conditions, and actions to detect the impacted requests and automatically close them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (1)
> **Env Vars:** jira (1)
> **Tools:** jira (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Create an automation](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-an-automation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-an-automation?u=76281980&t=0)** - [Instructor] Were you able to build the automation rule?
>
> **[0:08](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-an-automation?u=76281980&t=8)** You can create this rule in all deployment types.
>
> **[0:11](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-an-automation?u=76281980&t=11)** Here's how to do it in cloud.
>
> **[0:13](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-an-automation?u=76281980&t=13)** From a service management project, use the left sidebar to access the project settings area and then automation section, then click the create rule button at the top right.
>
> **[0:23](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-an-automation?u=76281980&t=23)** Add a scheduled trigger, and set the rule to run once a day.
>
> **[0:26](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-an-automation?u=76281980&t=26)** Next add a JQL query to find the relevant issues.
>
> **[0:30](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-an-automation?u=76281980&t=30)** For this use case will curry for all issues in the waiting for customer status that haven't been updated in the last 72 hours.
>
> **[0:38](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-an-automation?u=76281980&t=38)** Next, add an action to transition issues, set the destination status to the resolve status.
>
> **[0:45](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-an-automation?u=76281980&t=45)** I'll also give the resolution a value.
>
> **[0:48](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-an-automation?u=76281980&t=48)** Next, add another action to add a comment to the request.
>
> **[0:51](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-an-automation?u=76281980&t=51)** It's a good idea to tell the customer their request was closed and share how to get additional assistance if needed, then be sure to set visibility so the customer can see the comment.
>
> **[1:03](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-an-automation?u=76281980&t=63)** Finally enter a unique name, enable the rule, and don't forget to test the results.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Env Vars:** jql (1)
> **Cross-References:** in the last (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 7. Using Reporting

[↑ Back to Table of Contents](#table-of-contents)

#### [Reporting overview](https://www.linkedin.com/learning/jira-service-management-administration/reporting-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/reporting-overview?u=76281980&t=0)** - [Instructor] In this section, we'll discuss reporting capabilities in [[Jira]] Service Management.
>
> **[0:05](https://www.linkedin.com/learning/jira-service-management-administration/reporting-overview?u=76281980&t=5)** There are many ways to view, present and share request data and progress.
>
> **[0:09](https://www.linkedin.com/learning/jira-service-management-administration/reporting-overview?u=76281980&t=9)** JSM comes with standard reports, custom reports, and queues to categorize request data.
>
> **[0:15](https://www.linkedin.com/learning/jira-service-management-administration/reporting-overview?u=76281980&t=15)** You can also use Jira [[Dashboards]] for a [[Statistics]] based view of data from one or more service projects.
>
> **[0:21](https://www.linkedin.com/learning/jira-service-management-administration/reporting-overview?u=76281980&t=21)** If you need additional features, there are hundreds of reporting apps to explore in the [[Atlassian]] marketplace.
>
> **[0:27](https://www.linkedin.com/learning/jira-service-management-administration/reporting-overview?u=76281980&t=27)** You can also leverage the [[Representational State Transfer (REST)|REST]] API to develop custom features and, of course, server or data center users can also directly query the Jira database.
>
> **[0:37](https://www.linkedin.com/learning/jira-service-management-administration/reporting-overview?u=76281980&t=37)** Before we move on, let's discuss the difference between filters and queues.
>
> **[0:41](https://www.linkedin.com/learning/jira-service-management-administration/reporting-overview?u=76281980&t=41)** A filter is a saved search result.
>
> **[0:44](https://www.linkedin.com/learning/jira-service-management-administration/reporting-overview?u=76281980&t=44)** Create a filter to reuse a search query again later.
>
> **[0:47](https://www.linkedin.com/learning/jira-service-management-administration/reporting-overview?u=76281980&t=47)** You can use filters to power boards, dashboards, and geo reports.
>
> **[0:52](https://www.linkedin.com/learning/jira-service-management-administration/reporting-overview?u=76281980&t=52)** You can create a private filter, or share it with other users.
>
> **[0:55](https://www.linkedin.com/learning/jira-service-management-administration/reporting-overview?u=76281980&t=55)** In addition to filters, Jira Service Management also has queues, it's a unified view of work, or shared view of issues.
>
> **[1:03](https://www.linkedin.com/learning/jira-service-management-administration/reporting-overview?u=76281980&t=63)** It's like a filter in Jira, except it's not stored as a user object.
>
> **[1:07](https://www.linkedin.com/learning/jira-service-management-administration/reporting-overview?u=76281980&t=67)** Any standard or custom queues are shared views used by the entire support team.
>
> **[1:12](https://www.linkedin.com/learning/jira-service-management-administration/reporting-overview?u=76281980&t=72)** Queues are also project specific.
>
> **[1:14](https://www.linkedin.com/learning/jira-service-management-administration/reporting-overview?u=76281980&t=74)** They are stored and managed within an individual service project.
>
> **[1:18](https://www.linkedin.com/learning/jira-service-management-administration/reporting-overview?u=76281980&t=78)** Both filters and queues use JQL to limit the scope of data.
>
> **[1:22](https://www.linkedin.com/learning/jira-service-management-administration/reporting-overview?u=76281980&t=82)** I'll show you some queue examples in an upcoming section.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (5), [[Dashboards]] (2), [[Statistics]] (1), [[Atlassian]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Tools:** jira (5)
> **Env Vars:** jsm (1), rest (1), api (1), jql (1)
> **Definitions:** is a  (1)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)

#### [Using reports](https://www.linkedin.com/learning/jira-service-management-administration/using-reports?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/using-reports?u=76281980&t=0)** - [Instructor] Service management projects come with their own special built-in and custom reports.
>
> **[0:05](https://www.linkedin.com/learning/jira-service-management-administration/using-reports?u=76281980&t=5)** You'll find them under the reports link in the left sidebar.
>
> **[0:08](https://www.linkedin.com/learning/jira-service-management-administration/using-reports?u=76281980&t=8)** Each report has its own uses and settings.
>
> **[0:11](https://www.linkedin.com/learning/jira-service-management-administration/using-reports?u=76281980&t=11)** In cloud, the default reports are workload, satisfaction, request deflected, and request resolved.
>
> **[0:18](https://www.linkedin.com/learning/jira-service-management-administration/using-reports?u=76281980&t=18)** The default reports measure common service project functions.
>
> **[0:21](https://www.linkedin.com/learning/jira-service-management-administration/using-reports?u=76281980&t=21)** Use these reports to know how many requests are assigned to each agent, the team satisfaction rating, or how users leverage knowledge based content.
>
> **[0:30](https://www.linkedin.com/learning/jira-service-management-administration/using-reports?u=76281980&t=30)** Scroll down in the left sidebar to access the custom reports.
>
> **[0:34](https://www.linkedin.com/learning/jira-service-management-administration/using-reports?u=76281980&t=34)** These help track specific goals, like how many requests were created and resolved this week, the length of time needed to complete requests last quarter, and more.
>
> **[0:42](https://www.linkedin.com/learning/jira-service-management-administration/using-reports?u=76281980&t=42)** The reports have different settings and options.
>
> **[0:45](https://www.linkedin.com/learning/jira-service-management-administration/using-reports?u=76281980&t=45)** In the example, I've selected a custom date range to limit the data.
>
> **[0:49](https://www.linkedin.com/learning/jira-service-management-administration/using-reports?u=76281980&t=49)** Use the menus at the top of the page to filter results as desired.
>
> **[0:53](https://www.linkedin.com/learning/jira-service-management-administration/using-reports?u=76281980&t=53)** Here's a tip, changing the criteria adds parameters to the browser URL.
>
> **[0:58](https://www.linkedin.com/learning/jira-service-management-administration/using-reports?u=76281980&t=58)** To access this same criteria again, simply bookmark the report URL.
>
> **[1:03](https://www.linkedin.com/learning/jira-service-management-administration/using-reports?u=76281980&t=63)** Also check for additional report options in the ellipsis menu at the top right.
>
> **[1:08](https://www.linkedin.com/learning/jira-service-management-administration/using-reports?u=76281980&t=68)** You can change the name of the report and customize series settings.
>
> **[1:11](https://www.linkedin.com/learning/jira-service-management-administration/using-reports?u=76281980&t=71)** A series is simply a dataset.
>
> **[1:14](https://www.linkedin.com/learning/jira-service-management-administration/using-reports?u=76281980&t=74)** This example has two sets, request created and request resolved.
>
> **[1:19](https://www.linkedin.com/learning/jira-service-management-administration/using-reports?u=76281980&t=79)** You can rename each series, select a color, and specify the JQL for each.
>
> **[1:24](https://www.linkedin.com/learning/jira-service-management-administration/using-reports?u=76281980&t=84)** You can also export report data in CSV format.
>
> **[1:28](https://www.linkedin.com/learning/jira-service-management-administration/using-reports?u=76281980&t=88)** You can edit an existing custom report or create your own new custom report.
>
> **[1:32](https://www.linkedin.com/learning/jira-service-management-administration/using-reports?u=76281980&t=92)** Just click the option at the bottom of the left sidebar.
>
> **[1:35](https://www.linkedin.com/learning/jira-service-management-administration/using-reports?u=76281980&t=95)** The default and custom reports in server and data center are like the ones in cloud.
>
> **[1:40](https://www.linkedin.com/learning/jira-service-management-administration/using-reports?u=76281980&t=100)** Notice that I've collapsed the left sidebar menu so I can see the sub menu which lists the reports.
>
> **[1:46](https://www.linkedin.com/learning/jira-service-management-administration/using-reports?u=76281980&t=106)** In server and data center, you can drag custom reports up or down to reorder them.
>
> **[1:52](https://www.linkedin.com/learning/jira-service-management-administration/using-reports?u=76281980&t=112)** The option to create a new custom report is at the bottom of the set menu.
>
> **[1:55](https://www.linkedin.com/learning/jira-service-management-administration/using-reports?u=76281980&t=115)** In addition to all the built-in JSM reports, you can also create custom [[Jira]] [[Dashboards]] in all deployment methods.
>
> **[2:02](https://www.linkedin.com/learning/jira-service-management-administration/using-reports?u=76281980&t=122)** Here's an example in server.
>
> **[2:04](https://www.linkedin.com/learning/jira-service-management-administration/using-reports?u=76281980&t=124)** Dashboards are a great way to show a high level overview or a snapshot in time.
>
> **[2:09](https://www.linkedin.com/learning/jira-service-management-administration/using-reports?u=76281980&t=129)** You can quickly gauge the health of a system, view a team's workload, or see other [[Statistics]] based views of data.
>
> **[2:16](https://www.linkedin.com/learning/jira-service-management-administration/using-reports?u=76281980&t=136)** This example shows a custom dashboard to provide an overview of activity across multiple service management projects.
>
> **[2:23](https://www.linkedin.com/learning/jira-service-management-administration/using-reports?u=76281980&t=143)** I created one JQL query to get issues from four different service projects, saved the query as a filter, and applied the filter to all dashboard gadgets.
>
> **[2:32](https://www.linkedin.com/learning/jira-service-management-administration/using-reports?u=76281980&t=152)** Whether you use reports, dashboards, or other visualization methods, there's no wrong way to view data in Jira.
>
> **[2:39](https://www.linkedin.com/learning/jira-service-management-administration/using-reports?u=76281980&t=159)** Use whatever you're most comfortable with and gets you the information you need.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dashboards]] (3), [[Jira]] (2), [[Statistics]] (1)
> **Env Vars:** url (2), jql (2), csv (1), jsm (1)
> **Tools:** jira (2)
> **CLI Commands:** find (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Using queues](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=0)** - A queue is a unified view of work or shared view of issues.
>
> **[0:04](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=4)** You can use them to segment and categorize requests.
>
> **[0:07](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=7)** Queues are not mutually exclusive.
>
> **[0:09](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=9)** A request can be in more than one queue at the same time.
>
> **[0:13](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=13)** It's like a JQL filter in [[Jira]], except it's not a user object.
>
> **[0:17](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=17)** It's a shared view used by the entire support team.
>
> **[0:20](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=20)** To access them, click the queues link in the sidebar of a service project.
>
> **[0:25](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=25)** You'll need to be a Jira administrator, or a project administrator, to create queues and a service desk agent to access them.
>
> **[0:32](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=32)** Here's an example of queues automatically created when using an ITSM template in Server or Data Center.
>
> **[0:38](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=38)** There are queues based on priority, like critical queues, queues for issue types like service requests, and time-based queries like due in 24 hours.
>
> **[0:48](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=48)** You can create a queue for any data that's queryable.
>
> **[0:52](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=52)** For example, create a queue for all unresolved requests from the senior management team or from a high priority customer.
>
> **[0:59](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=59)** Project level administrators can create and edit queues.
>
> **[1:03](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=63)** To create a new queue in Server or Data Center, click the link at the bottom of the page.
>
> **[1:07](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=67)** You can also reorder queues by dragging them up or down in the list.
>
> **[1:12](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=72)** To edit or delete a queue, click the ellipsis at the top of the page.
>
> **[1:17](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=77)** In Cloud, click the queues tab in a service projects left sidebar.
>
> **[1:22](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=82)** The sidebar navigation works a little differently in Cloud.
>
> **[1:25](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=85)** When you click the queues option in project menu on the left, the sidebar content is replaced by a queue specific menu, as shown.
>
> **[1:32](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=92)** As you've likely noticed, it works this way for all menu items in Cloud.
>
> **[1:37](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=97)** To create a new queue in Cloud, scroll down to the bottom of the queue sidebar menu and click "manage queues".
>
> **[1:44](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=104)** To edit, clone, or delete a queue, click the ellipsis at the top of the page.
>
> **[1:50](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=110)** Finally, to leave the queues menu and get back to the main project menu, click the "back to project" link at the top of the sidebar.
>
> **[1:58](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=118)** Let's create a new queue for the support team in Jira Cloud.
>
> **[2:01](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=121)** Let's say we just launched a new public website.
>
> **[2:04](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=124)** As a former web developer, I know that no matter how much testing I've done, there are always mistakes that slip into production.
>
> **[2:11](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=131)** We want to be on the lookout for problems so we can escalate them to the dev team quickly.
>
> **[2:15](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=135)** We'll create a queue to find those issues.
>
> **[2:18](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=138)** The queues menu isn't in the project admin section.
>
> **[2:21](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=141)** So, click "back to project" to access it.
>
> **[2:24](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=144)** Next, click the queues link in the main menu.
>
> **[2:26](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=146)** And then the "Manage queues" link.
>
> **[2:29](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=149)** Then, click "Create new queue".
>
> **[2:31](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=151)** First, give the queue a name.
>
> **[2:33](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=153)** Remember that the entire support team will see this queue.
>
> **[2:36](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=156)** So, name it something that will make sense to that audience.
>
> **[2:39](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=159)** Also, there's limited space on the sidebar.
>
> **[2:42](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=162)** So, keep the name short. So it's not truncated.
>
> **[2:45](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=165)** In Cloud, you can group related queues together.
>
> **[2:48](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=168)** There are two groups: Team priority and Other.
>
> **[2:52](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=172)** Since the new website launch is high priority right now, I'll check the box to add the queue to the team priority list, instead of the default Other category.
>
> **[3:01](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=181)** When website trouble reports slow down in the future, I can move this queue to the other category or simply delete it.
>
> **[3:08](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=188)** Next, I need to find the relevant issues.
>
> **[3:11](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=191)** Use the dropdown menus to filter the result list.
>
> **[3:14](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=194)** I prefer writing JQL.
>
> **[3:16](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=196)** So, I'll click the "Switch to JQL" link.
>
> **[3:19](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=199)** I'll further limit the search to issues that contain a specific string in the summary, description, or comment fields.
>
> **[3:25](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=205)** Next, change the columns displayed and do a quick sanity check to make sure the desired records are returned.
>
> **[3:32](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=212)** Finally, click the "Form submission" button to save the queue.
>
> **[3:36](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=216)** The new queue appears in the sidebar menu.
>
> **[3:38](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=218)** Account of issues is also displayed.
>
> **[3:41](https://www.linkedin.com/learning/jira-service-management-administration/using-queues?u=76281980&t=221)** If you've edited an existing queue, you may need to refresh the page to update the count.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (3)
> **UI Navigation:** in the sidebar (2), scroll down (1), dropdown (1), switch to (1)
> **CLI Commands:** find (2), make (2)
> **Env Vars:** jql (3), itsm (1)
> **Tools:** jira (3)
> **Analogies:** it's like (1), for example (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)

#### [Measuring customer satisfaction](https://www.linkedin.com/learning/jira-service-management-administration/measuring-customer-satisfaction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/measuring-customer-satisfaction?u=76281980&t=0)** - In this section, we'll discuss the customer satisfaction feature.
>
> **[0:03](https://www.linkedin.com/learning/jira-service-management-administration/measuring-customer-satisfaction?u=76281980&t=3)** JSM comes with a built-in customer satisfaction or CSAT survey.
>
> **[0:08](https://www.linkedin.com/learning/jira-service-management-administration/measuring-customer-satisfaction?u=76281980&t=8)** It provides a simple scoring mechanism.
>
> **[0:11](https://www.linkedin.com/learning/jira-service-management-administration/measuring-customer-satisfaction?u=76281980&t=11)** There's not much to customize, but I think this feature is useful so customers can provide feedback and leadership can measure success.
>
> **[0:18](https://www.linkedin.com/learning/jira-service-management-administration/measuring-customer-satisfaction?u=76281980&t=18)** Here's how it works.
>
> **[0:19](https://www.linkedin.com/learning/jira-service-management-administration/measuring-customer-satisfaction?u=76281980&t=19)** When a request is resolved, a quick one question survey is emailed to the customer.
>
> **[0:25](https://www.linkedin.com/learning/jira-service-management-administration/measuring-customer-satisfaction?u=76281980&t=25)** The user can choose their response directly in the email message.
>
> **[0:29](https://www.linkedin.com/learning/jira-service-management-administration/measuring-customer-satisfaction?u=76281980&t=29)** After the user clicks a response, a browser window opens to collect any additional feedback.
>
> **[0:34](https://www.linkedin.com/learning/jira-service-management-administration/measuring-customer-satisfaction?u=76281980&t=34)** If a comment is submitted, it appears in a dedicated project specific report.
>
> **[0:39](https://www.linkedin.com/learning/jira-service-management-administration/measuring-customer-satisfaction?u=76281980&t=39)** None of the survey data displays in the [[Jira]] issue or JSM request.
>
> **[0:44](https://www.linkedin.com/learning/jira-service-management-administration/measuring-customer-satisfaction?u=76281980&t=44)** This feature only has two configurable options.
>
> **[0:47](https://www.linkedin.com/learning/jira-service-management-administration/measuring-customer-satisfaction?u=76281980&t=47)** First, you can turn the entire survey on and off in a service project.
>
> **[0:51](https://www.linkedin.com/learning/jira-service-management-administration/measuring-customer-satisfaction?u=76281980&t=51)** On is the default.
>
> **[0:53](https://www.linkedin.com/learning/jira-service-management-administration/measuring-customer-satisfaction?u=76281980&t=53)** Second, you can change the question asked, in cloud, edit the question by clicking on it.
>
> **[0:59](https://www.linkedin.com/learning/jira-service-management-administration/measuring-customer-satisfaction?u=76281980&t=59)** So what if you already have a different survey tool or don't want to use the one in JSM?
>
> **[1:05](https://www.linkedin.com/learning/jira-service-management-administration/measuring-customer-satisfaction?u=76281980&t=65)** Another idea is to use automation, to send the customer link to wherever satisfaction data is collected.
>
> **[1:11](https://www.linkedin.com/learning/jira-service-management-administration/measuring-customer-satisfaction?u=76281980&t=71)** In the example, the automation is activated when an issue transitions from the in progress status to the resolve status and the resolution is done.
>
> **[1:20](https://www.linkedin.com/learning/jira-service-management-administration/measuring-customer-satisfaction?u=76281980&t=80)** An email is sent to the reporter, asking them to click a link to provide their feedback.
>
> **[1:25](https://www.linkedin.com/learning/jira-service-management-administration/measuring-customer-satisfaction?u=76281980&t=85)** The link in the email body takes the customer to a survey form on my website.
>
> **[1:29](https://www.linkedin.com/learning/jira-service-management-administration/measuring-customer-satisfaction?u=76281980&t=89)** While this feedback collection method works, it doesn't send data back to Jira for storage.
>
> **[1:35](https://www.linkedin.com/learning/jira-service-management-administration/measuring-customer-satisfaction?u=76281980&t=95)** Every collection method has pros and cons.
>
> **[1:37](https://www.linkedin.com/learning/jira-service-management-administration/measuring-customer-satisfaction?u=76281980&t=97)** There are plenty of survey related apps in the [[Atlassian]] Marketplace.
>
> **[1:41](https://www.linkedin.com/learning/jira-service-management-administration/measuring-customer-satisfaction?u=76281980&t=101)** Visit marketplace.[atlassian.com](https://atlassian.com), search for survey and limit the results list to the JSM application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (2), [[Atlassian]] (2)
> **Env Vars:** jsm (4), csat (1)
> **Tools:** jira (2)
> **URLs:** [atlassian.com](https://atlassian.com) (1)
> **Speakers:** - in (1)

#### [Challenge: Create a report](https://www.linkedin.com/learning/jira-service-management-administration/challenge-create-a-report?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/challenge-create-a-report?u=76281980&t=0)** (pleasant electronic music)
>
> **[0:05](https://www.linkedin.com/learning/jira-service-management-administration/challenge-create-a-report?u=76281980&t=5)** - [Instructor] In this challenge, you'll create a custom report to find all requests made by a group of users.
>
> **[0:11](https://www.linkedin.com/learning/jira-service-management-administration/challenge-create-a-report?u=76281980&t=11)** First, select a group from [[Jira]]'s [[User Management]] area.
>
> **[0:15](https://www.linkedin.com/learning/jira-service-management-administration/challenge-create-a-report?u=76281980&t=15)** Next, choose a Jira Service Management project.
>
> **[0:18](https://www.linkedin.com/learning/jira-service-management-administration/challenge-create-a-report?u=76281980&t=18)** Finally, create a new report in the Reports area.
>
> **[0:21](https://www.linkedin.com/learning/jira-service-management-administration/challenge-create-a-report?u=76281980&t=21)** Add a series, customize the report as desired, and save it to use later.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (2), [[User Management]] (1)
> **Tools:** jira (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (pleasant electronic music) (1)

#### [Solution: Create a report](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-a-report?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-a-report?u=76281980&t=0)** - [Instructor] Were you able to create the custom report?
>
> **[0:08](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-a-report?u=76281980&t=8)** Here's how to do it.
>
> **[0:09](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-a-report?u=76281980&t=9)** From a Service Management project, use the left sidebar to access the Report section.
>
> **[0:14](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-a-report?u=76281980&t=14)** Then click New Report from the bottom of the menu.
>
> **[0:17](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-a-report?u=76281980&t=17)** Next, give the report a name.
>
> **[0:19](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-a-report?u=76281980&t=19)** I'll use our VIP example and the Executive Steer Group from a previous example.
>
> **[0:25](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-a-report?u=76281980&t=25)** Then click the Add series button on the top right.
>
> **[0:28](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-a-report?u=76281980&t=28)** In the overlay, select from the list of predefined series options.
>
> **[0:32](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-a-report?u=76281980&t=32)** I'll use Created.
>
> **[0:34](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-a-report?u=76281980&t=34)** Next, label the series, select the color, and enter a JQL query to filter the request list.
>
> **[0:40](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-a-report?u=76281980&t=40)** Then click the form submission button.
>
> **[0:43](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-a-report?u=76281980&t=43)** If you have other VIP groups, add each as their own series now.
>
> **[0:47](https://www.linkedin.com/learning/jira-service-management-administration/solution-create-a-report?u=76281980&t=47)** Otherwise, click the Create button at the bottom of the page to save the report.

> [!info]- Semantic Content
>
> **Env Vars:** vip (2), jql (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/jira-service-management-administration/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-service-management-administration/next-steps?u=76281980&t=0)** - [Tutor] Congrats on completing the course, you've performed many of the tasks expected of a JSM administrator and are well on your way to a strong foundation.
>
> **[0:08](https://www.linkedin.com/learning/jira-service-management-administration/next-steps?u=76281980&t=8)** You should now be able to recognize differences between [[Jira]] and Jira service management features, configure project portal and queue settings, and use JSM specific features like workflow approvals, service level agreements, automation, and reporting.
>
> **[0:24](https://www.linkedin.com/learning/jira-service-management-administration/next-steps?u=76281980&t=24)** Your next step is to continue learning.
>
> **[0:26](https://www.linkedin.com/learning/jira-service-management-administration/next-steps?u=76281980&t=26)** There's always more to learn and new features are added all the time.
>
> **[0:30](https://www.linkedin.com/learning/jira-service-management-administration/next-steps?u=76281980&t=30)** You'll find many admin learning resources in the nine ways to learn Jira administration article on my website.
>
> **[0:37](https://www.linkedin.com/learning/jira-service-management-administration/next-steps?u=76281980&t=37)** As I mentioned in the beginning of the course, [[Atlassian]] stopped selling new licenses of server [[Microsoft Products|products]] in February of 2021, and support for server products ends on February 2nd, 2024.
>
> **[0:49](https://www.linkedin.com/learning/jira-service-management-administration/next-steps?u=76281980&t=49)** So what should you do if you have Jira server?
>
> **[0:52](https://www.linkedin.com/learning/jira-service-management-administration/next-steps?u=76281980&t=52)** Customers will need to switch to data center, migrate to Atlassian hosted cloud products, or make alternate plans.
>
> **[0:59](https://www.linkedin.com/learning/jira-service-management-administration/next-steps?u=76281980&t=59)** That's why I teamed up with Atlassian solution partner, Botron Atlassian apps to create the ultimate guide to Jira migrations.
>
> **[1:07](https://www.linkedin.com/learning/jira-service-management-administration/next-steps?u=76281980&t=67)** How to migrate from Jira server to data center or cloud.
>
> **[1:10](https://www.linkedin.com/learning/jira-service-management-administration/next-steps?u=76281980&t=70)** Download your free 180 page migration, merge and consolidation guide from the URL shown.
>
> **[1:17](https://www.linkedin.com/learning/jira-service-management-administration/next-steps?u=76281980&t=77)** I also worked with Atlassian to create a Cloud Migration Runbook, sample communication templates and cloud specific checklist.
>
> **[1:24](https://www.linkedin.com/learning/jira-service-management-administration/next-steps?u=76281980&t=84)** Download these resources at the URL shown.
>
> **[1:28](https://www.linkedin.com/learning/jira-service-management-administration/next-steps?u=76281980&t=88)** Here are some additional resources, so you can continue learning.
>
> **[1:31](https://www.linkedin.com/learning/jira-service-management-administration/next-steps?u=76281980&t=91)** Atlassian product documentation is categorized by application type, deployment type and version.
>
> **[1:37](https://www.linkedin.com/learning/jira-service-management-administration/next-steps?u=76281980&t=97)** Make sure you're reading the right information for the type of Jira you have.
>
> **[1:41](https://www.linkedin.com/learning/jira-service-management-administration/next-steps?u=76281980&t=101)** There's a getting started guide for agents and another specifically for JSM administrators.
>
> **[1:47](https://www.linkedin.com/learning/jira-service-management-administration/next-steps?u=76281980&t=107)** Next, visit [supportatlassian.com](https://supportatlassian.com) for vendor help or to report a bug.
>
> **[1:52](https://www.linkedin.com/learning/jira-service-management-administration/next-steps?u=76281980&t=112)** In server and data center, you can also visit the troubleshooting and support tools admin page to create a support zip to send to Atlassian.
>
> **[2:00](https://www.linkedin.com/learning/jira-service-management-administration/next-steps?u=76281980&t=120)** The supports that feature exports your logs and configuration to help the vendor troubleshoot problems.
>
> **[2:06](https://www.linkedin.com/learning/jira-service-management-administration/next-steps?u=76281980&t=126)** The Atlassian online community is where you'll find answers, support, and inspiration from other users.
>
> **[2:12](https://www.linkedin.com/learning/jira-service-management-administration/next-steps?u=76281980&t=132)** Login with your Atlassian id at community.[atlassian.com](https://atlassian.com).
>
> **[2:16](https://www.linkedin.com/learning/jira-service-management-administration/next-steps?u=76281980&t=136)** You can ask a question or start a discussion.
>
> **[2:19](https://www.linkedin.com/learning/jira-service-management-administration/next-steps?u=76281980&t=139)** There are also plenty of Jira theme groups on [[LinkedIn]] and [[Facebook]].
>
> **[2:23](https://www.linkedin.com/learning/jira-service-management-administration/next-steps?u=76281980&t=143)** Next, studying for Atlassian certification is a great way to learn more about Jira.
>
> **[2:28](https://www.linkedin.com/learning/jira-service-management-administration/next-steps?u=76281980&t=148)** These exams are challenging, but you'll learn a lot of new things preparing for them.
>
> **[2:33](https://www.linkedin.com/learning/jira-service-management-administration/next-steps?u=76281980&t=153)** Read my study tips for obtaining and extending your certification at the URL shown.
>
> **[2:38](https://www.linkedin.com/learning/jira-service-management-administration/next-steps?u=76281980&t=158)** I hope you enjoyed this Jira service management administration course, as much as I enjoyed creating it.
>
> **[2:44](https://www.linkedin.com/learning/jira-service-management-administration/next-steps?u=76281980&t=164)** Now it's time to get your course completion certificate.
>
> **[2:47](https://www.linkedin.com/learning/jira-service-management-administration/next-steps?u=76281980&t=167)** When you share your certificate, tag me so I can celebrate your accomplishment and share it with my network too.
>
> **[2:53](https://www.linkedin.com/learning/jira-service-management-administration/next-steps?u=76281980&t=173)** If you have Jira or JSM questions, I'd love to hear from you.
>
> **[2:57](https://www.linkedin.com/learning/jira-service-management-administration/next-steps?u=76281980&t=177)** Use the Q and A feature, email me directly or connect in social media.
>
> **[3:03](https://www.linkedin.com/learning/jira-service-management-administration/next-steps?u=76281980&t=183)** Good luck with your Jira journey and I'll see you online.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (12), [[Atlassian]] (11), [[Microsoft Products|Products]] (3), [[LinkedIn]] (1), [[Facebook]] (1)
> **Tools:** jira (12)
> **Env Vars:** jsm (4), url (3)
> **CLI Commands:** find (2), make (2)
> **URLs:** [supportatlassian.com](https://supportatlassian.com) (1), [atlassian.com](https://atlassian.com) (1)
> **Prerequisites:** configure (1), getting started (1)
> **UI Navigation:** switch to (1)
> **Definitions:** is a  (1)


## Instructor

- [[Rachel Wright]]

## Skills Covered

- IT Service Management
- Jira

## Path Context

### In [[Mastering Jira Administration]]
← [[Jira- Basic Administration]] | **3 of 7** | [[Jira- Advanced Administration]] →

## Appears In

- [[Mastering Jira Administration]]

## Related Courses

_Courses sharing skills:_

- [[IT Service Desk- Customer Service Fundamentals]] — IT Service Management
- [[Jira Administration- Automation]] — Jira
- [[Jira- Managing Custom Workflows]] — Jira
- [[Jira- Advanced Administration]] — Jira
- [[Jira- Basic Administration]] — Jira

---

[↑ Back to top](#)