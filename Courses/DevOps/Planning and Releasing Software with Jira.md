---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: planning-and-releasing-software-with-jira-14442823
url: "https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823"
duration_minutes: 75
duration: 1h 15m
level: Intermediate
updated: 9/23/2024
learners: 21693
skills:
  - Software Project Management
  - Jira
  - Software Development Life Cycle (SDLC)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQHODFfhOcps3w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1639764947946?e=2147483647&amp;v=beta&amp;t=tcZAXSkJCT9AkYn0xUjIdTYlZLMy2kgbIdsJDR6J10E"
linkedin_topic: DevOps
learning_paths:
  - '[[Develop Your Skills in Agile Software Development]]'
  - '[[Develop Your Skills as a Software Project Manager]]'
  - '[[Mastering Jira for Software Developers]]'
  - '[[Getting Started with Agile Software Development]]'
prev_courses:
  - '[[Introduction to Agile Development Practices- Bring Agile to Your Development Pipelines]]'
  - '[[Learning Jira Software]]'
  - '[[Learning Jira- Leveraging Sprints, Releasing Features, Fixing Bugs, and Tracking Development]]'
  - '[[Introduction to Agile Development Practices- Bring Agile to Your Development Pipelines]]'
next_courses:
  - '[[Agile Software Development- Scrum for Developers]]'
  - '[[Agile Software Development- Kanban for Developers (2019)]]'
  - '[[Increasing Efficiency with Jira and Confluence Integrations]]'
  - '[[Agile Software Development- Kanban for Developers (2019)]]'
path_nav: '[{"path":"Develop Your Skills in Agile Software Development","position":4,"total":6,"prev":"Introduction to Agile Development Practices- Bring Agile to Your Development Pipelines","next":"Agile Software Development- Scrum for Developers"},{"path":"Develop Your Skills as a Software Project Manager","position":9,"total":11,"prev":"Learning Jira Software","next":"Agile Software Development- Kanban for Developers (2019)"},{"path":"Mastering Jira for Software Developers","position":3,"total":4,"prev":"Learning Jira- Leveraging Sprints, Releasing Features, Fixing Bugs, and Tracking Development","next":"Increasing Efficiency with Jira and Confluence Integrations"},{"path":"Getting Started with Agile Software Development","position":3,"total":10,"prev":"Introduction to Agile Development Practices- Bring Agile to Your Development Pipelines","next":"Agile Software Development- Kanban for Developers (2019)"}]'
path_count: 4
tags:
  - course
  - topic/devops
  - topic/software-development
  - skill/software-project-management
  - skill/jira
  - skill/software-development-life-cycle-sdlc
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Planning%20and%20Releasing%20Software%20with%20Jira.md)

![Planning and Releasing Software with Jira](https://media.licdn.com/dms/image/v2/C560DAQHODFfhOcps3w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1639764947946?e=2147483647&amp;v=beta&amp;t=tcZAXSkJCT9AkYn0xUjIdTYlZLMy2kgbIdsJDR6J10E)

# Planning and Releasing Software with Jira

> Successfully planning, creating, and releasing software requires a sound process, strong coordination among multiple teams, and correctly configured applications. Many teams choose Jira Software to manage their work. By connecting additional Atlassian tools, like Confluence and Bitbucket, teams can reduce manual work and holistically support their development process. As the founder of a web devel

> [LinkedIn Learning](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823) | 1h 15m | Intermediate | 22K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (6 videos)
  - [Planning and releasing software with Jira](#planning-and-releasing-software-with-jira)
  - [Who is this course for?](#who-is-this-course-for)
  - [What do you need for this course?](#what-do-you-need-for-this-course)
  - [Adapting the software development process](#adapting-the-software-development-process)
  - [Using software development tools](#using-software-development-tools)
  - [Course use case](#course-use-case)
- [**1. Planning Projects and Releases**](#1-planning-projects-and-releases) (3 videos)
  - [Crafting requirements in Confluence](#crafting-requirements-in-confluence)
  - [Connecting Confluence spaces to Jira projects](#connecting-confluence-spaces-to-jira-projects)
  - [Planning and forecasting in Jira](#planning-and-forecasting-in-jira)
- [**2. Developing Software**](#2-developing-software) (5 videos)
  - [Tracking development work in Jira](#tracking-development-work-in-jira)
  - [Using Jira Software features](#using-jira-software-features)
  - [Configuring boards](#configuring-boards)
  - [Connecting Jira to Bitbucket](#connecting-jira-to-bitbucket)
  - [Using common Bitbucket features](#using-common-bitbucket-features)
- [**3. Testing Software**](#3-testing-software) (3 videos)
  - [Managing test cases in Jira](#managing-test-cases-in-jira)
  - [Executing manual and automated tests](#executing-manual-and-automated-tests)
  - [Fixing bugs in Jira](#fixing-bugs-in-jira)
- [**4. Releasing Software**](#4-releasing-software) (3 videos)
  - [Releasing versions in Jira](#releasing-versions-in-jira)
  - [Releasing code in Bitbucket](#releasing-code-in-bitbucket)
  - [Conducting retrospectives in Confluence](#conducting-retrospectives-in-confluence)
- [**Conclusion**](#conclusion) (1 videos)
  - [Additional resources for Jira learning](#additional-resources-for-jira-learning)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Planning and releasing software with Jira](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/planning-and-releasing-software-with-jira?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/planning-and-releasing-software-with-jira?u=76281980&t=0)** - [Rachel Wright] Planning, creating and releasing software requires a sound process, strong coordination between multiple teams and correctly configured applications. Many teams choose [[Jira]] software to manage their work. By connecting additional [[Atlassian]] tools, like [[Confluence]] and [[Bitbucket]], teams can reduce manual work and holistically support their entire development process. Hi, I'm Rachel Wright, certified Jira administrator and author of the JIRA Strategy Admin Workbook. As the founder of a [[Web Development]] company, a liaison between business and development teams and an Atlassian application administrator, I understand business processes, [[Software Development]] tools, and have lived the software development life cycle. In this course, you'll learn how to use Atlassian applications to plan, develop, test and release software, ways to adapt the software development life cycle to fit the needs of your organization. How to craft requirements in Confluence and turn them into JIRA issues. Ways to use development specific features into your software. How to connect Jira projects to Confluence spaces and Bitbucket repositories. How to leverage manual and automated testing. The best ways for tracking, fixing and recording bugs in JIRA. How to manage versions and release software and more. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (6), [[Atlassian]] (3), [[Confluence]] (3), [[Software Development]] (3), [[Bitbucket]] (2)
> **Tools:** jira (6), confluence (3), bitbucket (2)
> **Env Vars:** jira (4)
> **Speakers:** - [rachel (1)

#### [Who is this course for?](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/who-is-this-course-for?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/who-is-this-course-for?u=76281980&t=0)** - [Instructor] This course is for developers, testers, project managers, [[Scrum]] masters, product owners, release managers, and anyone else involved in the [[Software Development]] life cycle. Even if you're not personally coding, it's helpful to know more about what goes on in the background. Whether you're new or experienced in the software world, on a business team or development team, or consider yourself technical or not, this course will help you better understand the tools and the processes. You may be in administrator of one or more applications, a power user, or an occasional user of [[Atlassian]] or other software. It's good to know that there are three types of [[Jira]]. Jira Work Management is built for business teams, managing projects, processes, and tasks. It was previously named Jira Core. Jira Software is for development teams and includes features like sprints, story points, backlogs and integration with dev tools like Bamboo and [[Bitbucket]]. Jira Service Management is for support and [[IT Service Management]] teams. It was previously named Jira Service Desk. All three types of the same look and feel, but different features. The applications could be used separately or together. The application type we'll use in this course is Jira Software. Additionally, Atlassian software is available in three different deployment types. If you have Cloud, it means the software is hosted by Atlassian. That means Atlassian is responsible for application uptime, the database and the mail server. If you have Server, it means the software is hosted independently. Your applications may be hosted on premises, on a server in your [[Microsoft Office|office]], in your data center with other internal applications, in a cloud server environment like Amazon AWS,
>
> **[1:34](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/who-is-this-course-for?u=76281980&t=94)** [[Microsoft Azure]], or [[Google Cloud Platform (GCP)|Google Cloud Platform]], or by a third party. Finally, if you have Data Center, applications are also hosted independently. There are multiple application nodes or instances for high availability, load balancing, redundancy, and disaster recovery. If you're not sure which deployment type you have, just ask your Jira administrator or the person who pays the bills. In this course, I'll mainly show examples from the Cloud deployment type, like in this JIRA Cloud screenshot, but don't worry. In most cases, the concepts are the same, regardless of deployment type. Just be aware that there are slight feature, terminology, and user interface differences between the types. It's all right if your application looks different than my examples. You might also have different colors, a different layout and customization specific to your company.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (9), [[Atlassian]] (4), [[Scrum]] (1), [[Software Development]] (1), [[Bitbucket]] (1)
> **Tools:** jira (9), bitbucket (1)
> **Env Vars:** aws (1), jira (1)
> **CLI Commands:** aws (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [What do you need for this course?](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/what-do-you-need-for-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/what-do-you-need-for-this-course?u=76281980&t=0)** - [Rachel] Ideally, you'll have some end-[[User Experience (UX)|user experience]] in [[Atlassian]] applications, like creating issues in [[Jira]], creating pages in [[Confluence]], and checking code into [[Bitbucket]]. It's also helpful to have application admin, or system admin experience with other software, but it's, certainly, possible that you don't have this experience, and that's okay. Sometimes users have no application administrator permissions at all, or admin permissions in some applications, but not others. If you don't have the needed permissions, just know that you'll need some help to initially connect to applications, install apps, and make some configuration changes. I find that when I need help from other admins, a little bribery, like a cupcake or a gift certificate to the local coffee, shop goes a long way. It's also helpful to have a test environment so you can try out scenarios without impacting real production data. Your organization might already have one. If they don't, you can simply sign up for your own free versions of [[Microsoft Products|products]] in the Atlassian suite. If you're new to JIRA, take my learning JIRA course first. This course builds on that course, and assumes that you already know the basics of how to use JIRA. There's a course for cloud, and another course for server and data center. If you're an application administrator, you might also be interested in my basic, advanced and JIRA service management administration courses. The basic course covers the top five things every JIRA admin needs to know, like adding users, creating projects, editing workflows, and troubleshooting common permission and notification problems. The advanced course dives deep into the configuration areas used most. My goal's not just for you to understand the settings, but to be able to make smart decisions
>
> **[1:33](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/what-do-you-need-for-this-course?u=76281980&t=93)** when creating or changing them, knowing the best way to solve a problem, and how it will impact your application in the future is the difference between a good administrator and a great one. Finally, the JSM course shows how to configure requests, queues, service level agreements, and integrate with Confluence as a knowledge base. So your organization can support internal and external customers. This course doesn't require a specific methodology, like [[Agile Development|Agile]] for example, what I love about Atlassian tools is that you can use them, whether you use frameworks and methodologies, or use none. The tools help all types of teams with all types of needs and processes. If you're looking for more specific information on a methodology or a specific type of software, there are lots of great options waiting for you in the [[LinkedIn]] Learning catalog.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (6), [[Atlassian]] (3), [[Confluence]] (2), [[User Experience (UX)|User experience]] (1), [[Bitbucket]] (1)
> **Tools:** jira (6), confluence (2), bitbucket (1)
> **Env Vars:** jira (6), jsm (1)
> **CLI Commands:** make (2), find (1)
> **Prerequisites:** you'll need (1), install (1), configure (1)
> **Analogies:** for example (1)
> **Speakers:** - [rachel] (1)

#### [Adapting the software development process](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/adapting-the-software-development-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/adapting-the-software-development-process?u=76281980&t=0)** - [Instructor] In this section, we'll discuss the basic steps of a software process and how to adapt it to fit the needs of your organization. Let's start with the definition. The [[Software Development]] lifecycle, or SDLC for short, describes the process used to design, create and release software. The lifecycle contains steps like planning, analysis, design, and more. Here's an example of a common process I encountered in the [[Web Development]] industry. In general, we planned what to work on, developed new code, tested the code, released the code, and then supported what was released. The exact number of phases and the steps contained in each phase often depends on the specific ways of working. For example, I once worked with a department that had a different process, depending on the impacted development team. The first team utilized a pre-production environment, where dedicated testers, wrote and executed test cases before the code was released. The second team deployed their code straight to production where business team members and customers performed user acceptance testing instead. Which method is best? It all depends on the needs of your organization, [[Microsoft Products|products]] and teams. Your process may be very different than these examples, and that's okay. Also, processes are not always linear. Your approach might include moving back and forth between phases or utilizing a more iterative approach. Or your process diagram might look more like a circle than a straight line. Regardless of the process you use, I recommend you document it and make sure all stakeholders agree, it's much easier to work together when teams use the same process,
>
> **[1:32](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/adapting-the-software-development-process?u=76281980&t=92)** and terminology within and outside of [[Atlassian]] tools. You can download and customize my sample diagrams to fit the needs of your organization, download this handout from the exercise files area in [[LinkedIn]] Learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Development]] (1), [[Web Development]] (1), [[Microsoft Products|Products]] (1), [[Atlassian]] (1), [[LinkedIn]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** sdlc (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Using software development tools](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/using-software-development-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/using-software-development-tools?u=76281980&t=0)** - [Instructor] In this section, we'll discuss the many tools used to plan, create, and deploy software, including [[Atlassian]] tools and some alternatives. To track a task from concession to completion, use an issue tracker or project management software, like [[Jira]]. Jira is a tool for planning and tracking. As mentioned previously, there are three types of Jira: one for business teams, software teams, and support teams. Many organizations get their start with Jira, and eventually add other Atlassian software along the way. To document a task, use a collaboration platform and document repository, like [[Confluence]]. Confluence helps organize work, manage documents, and discuss everything in one place. In 2017, Atlassian acquired [[Trello]]. With Trello, you can organize projects in a fun, flexible, and visual way. Atlassian lists Trello as a collaboration tool, but I find it more like Jira than Confluence. Information is displayed in a board view, like in Jira, but it doesn't have Jira's [[Issue Management]] or reporting power. In this course, we'll use Confluence for all documentation and collaboration needs. There are many code management tools to choose from. Bamboo is for [[Continuous Integration (CI)|continuous integration]], deployment, and release management. Bamboo Cloud was decommissioned in 2017, and of course, Atlassian stopped selling new licenses of all their server [[Microsoft Products|products]] in February of 2021. But there's still a version of Bamboo for the data center deployment type. [[Bitbucket]] is used to manage, test, and deploy code. If you have a peer [[Code Review]] process, you might use Crucible to find bugs
>
> **[1:32](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/using-software-development-tools?u=76281980&t=92)** and improve code quality. FishEye helps search, monitor, and track code across repositories. FishEye and Crucible are in maintenance mode, however. Atlassian still provides security and bug fixes, but is not developing new features. Sourcetree is a free [[Git]] client for [[Windows]] and Mac. You can visualize and manage repositories through a simple graphical interface. For Windows environments, there's also an enterprise version to manage the software and future updates across all machines at your organization. Finally, to manage alerts and communicate system availability, use tools like Opsgenie and Statuspage. In this course, we'll focus on three core Atlassian tools. We'll use Confluence to plan and craft requirements at the beginning of the process and to document retrospectives at the end. We'll use Jira software to track work, record bugs, and indicate when software is released. And we'll use Bitbucket to manage and deploy code. Atlassian tools all connect to each other to provide added value. In the example, the Jira issue on the left is linked to a related Confluence page on the right. This makes it easy for users to find related information. The Confluence page shows [[Real-Time]] Jira information like the linked issue status. Atlassian tools also integrate with third party tools. You can get Jira issue or Confluence page update notifications in your Teams chat room. Visit marketplace.[atlassian.com](https://atlassian.com) to see all the app, connection, and integration possibilities. Regardless of the tools you use, it's important to document them and understand the flow of information between each. You can download and customize my sample worksheet
>
> **[3:06](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/using-software-development-tools?u=76281980&t=186)** to show application connections at your organization. Download the handout from the exercise files area and [[LinkedIn]] Learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (11), [[Atlassian]] (10), [[Confluence]] (8), [[Trello]] (3), [[Bitbucket]] (2)
> **Tools:** jira (11), confluence (8), bitbucket (2)
> **CLI Commands:** find (3), git (1)
> **Exercise Files:** download the (1), exercise files (1)
> **Definitions:** is a  (2)
> **URLs:** [atlassian.com](https://atlassian.com) (1)
> **Speakers:** - [instructor] (1)

#### [Course use case](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/course-use-case?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/course-use-case?u=76281980&t=0)** - [Instructor] Before I started my [[Jira]] consulting company, I had a [[Web Development]] company. We helped customers market their business online with custom websites, blogs, and [[E-Commerce]]. In the very beginning, there wasn't a robust development process. We simply downloaded a website file, changed the code as needed and re-uploaded the file back to the production server for testing. We were tracking our tasks, but we weren't versioning our code, deploying it to a test server, or releasing changes on a set schedule. As the company grew, our projects became more complex and we needed a more sophisticated process. We started introducing additional tools and defined steps to reduce risk, improve communication, and ensure consistent results. For the purposes of this course, let's pretend we work together at my old web development firm. Welcome to the company. It's time for a company rebrand. We're changing our logo and our colors, so every piece of content from business cards to website pages needs an update. Our project team includes the following people: a marketing director who's in charge of all brand decisions, a project manager to help keep the project on track, a graphic designer to update all the images and materials, a web developer to update all the web pages and a tester to review all changes and the sheer quality. We'll use this example use case throughout the course. Feel free to adapt it to the needs of your organization. We'll use this sample process and Atlassion's [[Confluence]], Jira, and [[Bitbucket]] applications to help us through it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (2), [[Web Development]] (2), [[E-Commerce]] (1), [[Confluence]] (1), [[Bitbucket]] (1)
> **Tools:** jira (2), confluence (1), bitbucket (1)
> **Speakers:** - [instructor] (1)


### 1. Planning Projects and Releases

[↑ Back to Table of Contents](#table-of-contents)

#### [Crafting requirements in Confluence](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/crafting-requirements-in-confluence?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/crafting-requirements-in-confluence?u=76281980&t=0)** - [Instructor] We're currently in the planning stage of the [[Software Development]] process. In this section, we use [[Confluence]] to collect and communicate project requirements so the team does what the business desires. Confluence is for knowledge management, [[Team Collaboration]] and document storage. It serves as an information portal, a knowledge base or an internet. You can use Confluence to collaborate in real time and track decisions. Multiple users can edit the same pages at the same time. Users can add comments in line and on any page. You can document project and initiative details and processes. For example, the marketing team can create a social media schedule. The finance team can post the employee reimbursement policy. The design team can show specs and mock-ups. The product team can write user stories, and the customer service team can post answers to common customer questions. You can share and store files, images, and diagrams. No need to send files over email, or save them on a network drive. You can record meeting notes and product requirements. Confluence has built in templates for these and other common page types. You can post blog style announcements and share information, create your own templates and checklists, and finally keep an authoritative, historical, and legal record of company information. All changes are logged and pages are versioned. Sometimes Confluence is used internally, and sometimes it's used to provide information to customers. Are there additional ways Confluence is used in your organization? Check with your application administrator for any company-specific details. Here are some important Confluence terms.
>
> **[1:33](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/crafting-requirements-in-confluence?u=76281980&t=93)** Think of a page as an online document. A page contains content like text images, embedded videos, attachments, macros, and more. A space is a collection of Confluence pages. There are two types of spaces, global and personal. A global space is a container for all your team's information. It's a shared area where users create and view content. There's generally one global space for a department, team, or a large initiative, like a rebrand. A personal space is an area to store content just for you. Here's some sample spaces in a Confluence application. For our use case, we'll create a global space called Company Rebrand to store all the information for the rebrand project. If you're a Confluence administrator, create the space in your test application by clicking the Create button at the top of the page. There are several space templates to choose from. Use these to auto create certain types of pages in the space. If you prefer to create everything on your own, choose the blank space option. Here's some tips. If you select the software project space template, you can immediately connect the space to an existing [[Jira]] project. If you don't have a JIRA project yet, just choose a different template and connect the space later. I like to create a companion Confluence space for each JIRA project I have. Additionally, I like to name Confluence spaces and their related JIRA projects with the same key. For example, I've specified a space key of REBRAND for this company rebrand Confluence space. The related JIRA projects key is also Rebrand. This makes it easier for users to link
>
> **[3:07](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/crafting-requirements-in-confluence?u=76281980&t=187)** and find related content in both applications. If you don't have Confluence admin permissions, or don't want to create a new space, see if there's a test space that already exists in your application. You can use it or any other existing space to try out our use case. Let's craft some requirements for our rebrand project. First, go to the rebrand space in Confluence. Next, click the Create button to create a new page. On the right are templates for common page types. Type requirements, and select the product requirements template from the list. On the left, give the page a name and start adding details to the page. Let's add some requirements so we can use them in the next section. Scroll down to the Requirements area, and add some information to the table. Now click the Publish button to save the page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Confluence]] (15), [[Jira]] (5), [[Software Development]] (1), [[Team Collaboration]] (1)
> **Tools:** confluence (15), jira (5)
> **Env Vars:** jira (5), rebrand (1)
> **UI Navigation:** select the (2), go to (1), scroll down (1)
> **Exercise Files:** template (3)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** for example (2)
> **CLI Commands:** find (1)

#### [Connecting Confluence spaces to Jira projects](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/connecting-confluence-spaces-to-jira-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/connecting-confluence-spaces-to-jira-projects?u=76281980&t=0)** - [[Confluence]] and [[Jira]] are truly better when used together. In this section, we'll discover the integration benefits and connect a Confluence global space to a Jira project. Here are some of the benefits of connecting the applications and where your notice integration points. In Confluence, you can create single issues from pages or multiple issues from tables. This is used for planning and gathering requirements. There are three ways and I'll show you how to do it later in this section. Next, you can use a macro to embed issues or filters and display real time Jira issue status. You can also embed your reports and charts directly in Confluence pages. In Jira, you can link issues to their related Confluence pages. This is great for tying user stories to requirements or support requests to help articles. You can also see a list of related pages and create new pages without leaving Jira. If you have Confluence cloud and Jira cloud, they're probably already connected, but let's check. Log into Confluence as an administrator and click the cog or gear icon at the top right. In the admin area, scroll down in the left sidebar and click application links. On this page, you can see that a Jira application is already connected. If you need to connect an application, simply paste its URL into the text box and click the form submission button. There's a similar applications link page in Jira two where you'll see the Confluence connection. You'll find it in the projects admin menu in cloud and the applications admin menu and server and data center.
>
> **[1:33](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/connecting-confluence-spaces-to-jira-projects?u=76281980&t=93)** You'll need application admin permissions to connect applications, but it only needs to be done once. Did you know you can connect applications of different types, for example, connected Jira server application to a Confluence cloud application. You can also connect multiple application types like connecting one Confluence application to two Jira applications. Now that the Confluence and Jira applications are connected, let's connect a space to a project. Log into Confluence as a space administrator and click the space settings link. Next, click the integrations tab at the top of the page. Then, click the add link button and tell Confluence which to your project to connect to. The link is automatically shown on the integrations page. You can also establish links from Jira as well. Log into Jira as a project administrator, go to the rebrand project and click the back to project link to see the projects main menu. Then, click the project pages link in the sidebar menu. Click the connect to Confluence button and tell Jira which space to connect to. Now that the rebrand Confluence space and Jira project's connected, I have something awesome to show you. Let's visit the rebrand requirements we created in a previous section. Scroll down to the requirement section. There are three ways to create Jira issues from Confluence. First, highlight any [[Microsoft Word|word]] or phrase and click the create issue option. The highlighted text is automatically added to the summary field. Select the Jira project, issue type and add an optional description. Then click the form submission button to create the issue in Jira.
>
> **[3:06](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/connecting-confluence-spaces-to-jira-projects?u=76281980&t=186)** The second method is to highlight any word or phrase and click the create multiple issues from table link in the overlay. In this case, an issue is created for every row in the table. Select the desired Jira project issue type and map the table columns to their desired Jira fields. Then click the form submission button to create multiple issues in Jira. The Jira issues created are automatically linked to the Confluence page. You'll see account of links at the top. The third way to create issues is using the Jira macro. Enter edit mode and click the insert icon. Type Jira to filter the macro list and select the Jira macro. Next, click create new issue on the left, enter the required information and click the form submission button. The issue is automatically created in Jira and inserted into the Confluence page. The issues type, key, summary and status are displayed and automatically updated if they change in Jira. Publish the page to see a new count of link to your issues at the top. Click any Jira issue to open Jira. Notice that the linked Confluence page is displayed in the Jira issue. You can also link to Confluence pages from Jira. Click the link icon at the top and select link Confluence page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (31), [[Confluence]] (21), [[Microsoft Word|Word]] (2)
> **Tools:** jira (31), confluence (21)
> **UI Navigation:** select the (3), scroll down (2), go to (1), in the sidebar (1)
> **CLI Commands:** find (1)
> **Env Vars:** url (1)
> **Cross-References:** later in (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)

#### [Planning and forecasting in Jira](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/planning-and-forecasting-in-jira?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/planning-and-forecasting-in-jira?u=76281980&t=0)** - [Instructor] There are many ways to plan, prioritize and schedule work. [[Atlassian]] has three tools in their suite for this purpose. The tools all have different features and abilities however. Let's take a quick look at the Atlassian tool differences so you can choose the best one for the job. [[Jira]]'s biggest benefit over other Atlassian tools is structured data. All issued data is stored in a very specific format, which makes it easy to use and analyze. For example, each piece of data is stored in its own field. This data model enables the robust reporting that Jira is known for. Since the data's format is predictable, you can view it in many ways. For example, the screenshot shows a Jira roadmap. You can view this exact same data in list format, in card format on a board, as [[Statistics]] on a dashboard, or using built-in reports. When the issue data changes, all the views are updated too. Jira has powerful search capabilities driven by a query engine called JQL. And of course, Jira has a ton of other useful native features like workflows for example. In [[Confluence]], the data is stored in a less structured way. This makes it more flexible. Users can order and format information any way they want. But the price of flexibility is less robust reporting and charting capabilities. One thing Confluence does better than Jira, is document management and versioning. Confluence also has lots of great macros and collaboration features. You can see page changes in [[Real-Time]] as team members make them. Confluence has robust search capabilities too, but instead of querying specific fields in Jira,
>
> **[1:34](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/planning-and-forecasting-in-jira?u=76281980&t=94)** you're mostly querying for keywords in the page body using CQL. Confluence doesn't natively include workflow capabilities, but you can add them with a marketplace app. In the screenshot, I've created a low-tech roadmap, like the example from Jira. The big difference is that this information is static. It's not tied to Jira issue data or automatically updated. If project dates change, I'll need to manually update this Confluence macro. Finally, there's [[Trello]], a lightweight and highly visual planning tool. There's a simple user interface and the learning curve is low in this application. All the data is displayed as cards on a board, which is visually similar to Jira's board functionality. Like in Jira, you can assign, label and categorize the cards. There's even some automation capabilities and apps to extend functionality. Trello doesn't include Jira's robust reporting, charting, or workflow capabilities however. Sometimes I like to think of Trello as Jira light. All the tools are great in their own way, but for the most powerful planning capabilities let's use Jira. And of course within Jira, you can plan using boards, the roadmaps feature or any of the apps from the Atlassian marketplace. Let's explore how Jira's roadmap feature helps plan work. There are three types of roadmaps. The basic roadmap is designed for single teams and single Jira projects. It includes simple planning and dependency features to visualize work. The basic roadmap is included in the free and standard Jira plans. In the example, large pieces of work are planned at the epic level. An epic is work that encompasses many similar issues.
>
> **[3:09](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/planning-and-forecasting-in-jira?u=76281980&t=189)** The term is borrowed from [[Agile Development|Agile]] methodology, but it's useful for any type of team. It provides an easy way to group related work. The roadmap shows the progress of each epic in real-time. An epic start and due dates are reflected as colored bars on the timeline. In the example, both epics are scheduled to start and end at the same time. Also, shown are the issues in each epic and their current status. In Jira Software Premium and Data Center, there's an advanced roadmaps feature to plan and track work across multiple teams and Jira projects. This roadmap version was originally provided by an Atlassian marketplace app called Jira portfolio or portfolio for Jira. These days it's called advanced roadmaps and there's no additional app to install. This roadmap version has additional tracking features like unlimited levels of hierarchy above the epic level and advanced dependency tracking. With advanced roadmaps, you can see team capacity for each sprint to make sure all users can complete the work scoped. Finally, you can create multiple roadmap versions to try out best and worst case scenarios. The third roadmap tool is called Jira Align and it's for enterprise customers. Its features allow real-time visibility across the entire organization. Use Jira Align to manage portfolios, to determine scope and dependencies across teams and portfolios, make sure resources are allocated where needed and connect business strategy to technical execution. See the documentation for more information about the types of roadmaps. Next let's set up Jira project and add some sample issues so we can see the roadmap in action.
>
> **[4:42](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/planning-and-forecasting-in-jira?u=76281980&t=282)** Here are some sample projects in a Jira application. For our use case, we'll use a software project called Company Rebrand to store all the tasks for the rebrand project. If you're a Jira administrator, create this project in your test application by clicking the Create button at the top of the page. There are several [[Software Development]] project templates to choose from. I like the bug tracking template simply because its workflow includes a testing step. If you don't have Jira admin permissions or don't want to create a new project, see if there's a test project that already exists in your application. You can use it or any other existing project to try out our use case. Now that there's a Jira project, we need to create some sample issues to plan and track. First, think of all the work required when a company changes its logo and colors, let's make a list of all those items. For example, we'll need to update the entire website. That sounds like a lot of work. So let's break it down into more manageable chunks. We'll update all the logo files, the site styles and make some changes on individual webpages. Let's break these medium-sized items down once more, to even smaller pieces. We'll update the main logo files, the little icon that appears on the browser tab and other co-branded logos. Guess what? This little listing exercise just determined our issue hierarchy in Jira. The large body of work is the epic, the medium items are the tasks and the small items are the sub-tasks. Let's create one more epic and set of tasks and sub-tasks. Here's a list of all the print materials we'll need to update.
>
> **[6:14](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/planning-and-forecasting-in-jira?u=76281980&t=374)** And here's our same list of items as issues in Jira. At the top are the epics for updating web materials and print materials. Next are three tasks for each epic. Each epic has a short, unique name in the epic name column. You can see which task belongs to which epic in the epic link column. Finally, there are sub-tasks at the bottom of the list. You can see which sub-task belongs to which task in the sub-tasks column. Each issue has a start date and a due date. That information is required to power the roadmap. You may need to add the standard field called Start Date to your Jira project screens. You can create similar issues manually from a Confluence table as demonstrated earlier, or you can import them, which is the fastest method. If you're a Jira administrator, use the CSV external system import function in the system admin area. This version of the importer has the most features. If you're not a Jira administrator, use the import issues from CSV feature on the issue search page, you can download and customize these sample issues to try out the use case in this course, download the CSV file from the exercise files area in [[LinkedIn]] learning. See section 8 of my Jira advanced administration course for help using the CSV importer and file formatting tips. Now that we have a Jira project and some sample issues, let's access the basic roadmap. Go to the Jira project and click the roadmap link on the project's left sidebar. Issues on the project are automatically shown here. Use the options at the top of the page to filter issues by keyword, user or status and control the view.
>
> **[7:49](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/planning-and-forecasting-in-jira?u=76281980&t=469)** There are also additional view settings at the bottom of the page. From here, you can create new epics, drag issues to reorder them and drag the colored bars to change start and end dates. If dependencies exist, they are shown with a curved red line. To create a dependency, hover over one of the colored bars and drag the dots that appear to the applicable epic. Click on the red dependency line to see additional information like how the issues are linked. You can also use Jira's standard linked issues feature, and the dependency will automatically show on the roadmap. Finally, click on an issue to view or edit its details. If you don't see a roadmap link, the feature may be disabled. To enable it, go to the projects board and click the ellipsis on the top-right, then select board settings in the menu. You'll need to be a board administrator to change board settings. on the board settings page, click the roadmap link in the sub-menu and enable the feature using the toggle on the top-right. Now that you've seen the power of the roadmaps feature in Jira, let's compare it to other planning tools. I created a Confluence page to show the other options. First, you can plan in Confluence using a static table. Simply paste Jira issue URLs into the table to show real-time status. Next, you can use the roadmap planning Confluence macro to create a manually updated roadmap. Finally, you can also embed information from other applications in Confluence pages. On this example page, I've embedded a list of Jira issues, a Jira roadmap macro, and a Trello board. If you have Jira Software Premium or Data Center,
>
> **[9:23](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/planning-and-forecasting-in-jira?u=76281980&t=563)** you can also embed the advanced roadmaps for Jira plan macro. There are many planning options to use. So use the technology that you're most comfortable with and gives you the best results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (44), [[Confluence]] (11), [[Atlassian]] (5), [[Real-Time]] (4), [[Trello]] (4)
> **Tools:** jira (44), confluence (11)
> **Env Vars:** csv (4), jql (1), cql (1)
> **UI Navigation:** go to (2), click on (2), in the menu (1), toggle (1)
> **CLI Commands:** make (5)
> **Analogies:** for example (4), similar to (1)
> **Prerequisites:** install (1), set up (1), required to (1), you'll need (1)
> **Exercise Files:** template (1), download the (1), exercise files (1)


### 2. Developing Software

[↑ Back to Table of Contents](#table-of-contents)

#### [Tracking development work in Jira](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/tracking-development-work-in-jira?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/tracking-development-work-in-jira?u=76281980&t=0)** - [Instructor] Now we're in the developing stage of the [[Software Development]] process. In this section, we'll use [[Jira]] to track work and [[Bitbucket]] to track changes. As I previously mentioned, there are three types of Jira. Jira Work Management is for business teams. Jira Software is for development teams. And Jira Service Management is for support teams. You can use one type by itself or combine multiple types to support the entire organization. For our simple use case, I'm assuming you have Jira Software and will track all work for the Rebrand initiative and one Software type project. That's the easiest model, but it's certainly not the only one. It's also possible that you have multiple types of Jira and multiple projects in each type. Here's a more complex, but still common model. The development and QA teams might have their own [[Software Projects]]. The marketing and project management organization might track their items in Work Management projects and the customer service department might fulfill support requests in a Service Management project. It's common for large organizations to have one Jira project per department or team. In this model, you'll simply use the issue links feature to link related issues in different projects together. This way the teams can have different processes and Jira project settings, but still all work together on the same initiative. These two project models are very different, but demonstrate how you can customize Jira to meet your needs. Regardless of how Jira is configured at your organization, Jira Software plays an integral part in the software development process. Jira enables you to schedule initiatives and tasks, manage your team's work or [[Microsoft Products|products]] pipeline, report and fix bugs, triage and address issues,
>
> **[1:36](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/tracking-development-work-in-jira?u=76281980&t=96)** report time and monitor progress, track changes, tasks, and other to do items, and create an authoritative, historical, and legal record of what was done. Jira plays a role in every step of the software development process. You can make a list of tasks with any tool, but without Jira's structured data, workflow and reporting capabilities, there's a lot you can't do. Jira enables you to visualize a long list of tasks, their dependencies, and relationships between related tasks. It's easy to see who's working on what, understand the progress of each issue and an entire project, determine when code was released and in what software version, track what changed and when, collect bugs, feature requests, and trouble reports, and monitor the overall health of the release. Simply, Jira allows you to track a project from conception to completion. In the next section, we'll discuss the specific features in Jira Software that support the software development life cycle.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (18), [[Software Development]] (4), [[Bitbucket]] (1), [[Software Projects]] (1), [[Microsoft Products|Products]] (1)
> **Tools:** jira (18), bitbucket (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** assuming you have (1)
> **Speakers:** - [instructor] (1)

#### [Using Jira Software features](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/using-jira-software-features?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/using-jira-software-features?u=76281980&t=0)** - [Instructor] In this section, we'll discuss the ways [[Jira]] software extends standard to your capabilities. As mentioned in a previous section, Jira comes with project management templates, specifically for [[Software Development]]. The Kanban template helps teams visualize work and limit work in progress. Work is tracked on a simple board and there's a simple three-step workflow. The [[Scrum]] template is more complex. It helps teams work together using work cycles called sprints. This project type includes the concept of a backlog to prioritize, plan and rank work. Additionally, the board contains features for estimation. Finally, the bug tracking template focuses on managing defects but it can be used for the entire development process too. This template contains slightly different issues types, like improvement and new feature, instead of story. The default workflow also contains a verification step. There's no board created by default but you can create one manually. In addition to task and sub-task, Jira software adds additional development focus issue types, like epic, bug, and story. If you've used the big tracking project template, you'll also see improvement and new feature. Regardless of the type of work, I like for all my Jira projects to leverage the epic, task and sub-task issue types. I like the grouping ability epics provide and the parent-child relationship sub-tasks provide. The different project templates include different workflows. Since the Kanban project template doesn't include backlog functionality, a status called backlog is included in the default workflow. On the left is the extra in review verification status
>
> **[1:34](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/using-jira-software-features?u=76281980&t=94)** in the bug tracking project templates workflow. On the right, there's one additional software-related workflow for the builds process. If you don't see it in your application's list of workflows, check the inactive section. As we discussed, Jira [[Software Projects]] created with the Scrum template include backlogs. A backlog is a list of unprioritized and unscheduled issues. Think of the backlog as a holding area for future work. Use the backlog Jira page to create sprints and add issues to them. All types of Jira include time estimates and time tracking but Jira software adds an additional story point standard field. Story points are relative numbers used to estimate the complexity of implementing a user story. Here's a sample sprint on a software project's backlog page. The story points are summed at the top. Points not started are shown in the gray circle. Points in progress are in the blue circle. And points completed are in the green circle. Development type projects often require fix versions and released. A fix version is a grouping of issues by date or time period. You may also see them referred to as versions. Tim Preston-Warner, inventor of Gravatar, and co-founder of [[GitHub]], created the semantic versioning specification. This is a recommendation for naming versions in the format major.minor.patch. Review this recommendation at the URL shown. A board shows a status-based view of issues in a column format. Each issue is visually represented as a rectangular card. If you track work by sticking notes on a wall, a Jira board is the wall and the sticky notes are the cards. Boards are built into some of the project templates and you can create your own custom boards as well.
>
> **[3:06](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/using-jira-software-features?u=76281980&t=186)** All Jira project types come with built-in reports. The reports provide another way to view and analyze issue data. The available reports differ by project type. Software projects have some special [[Agile Development|agile]] and [[DevOps]]-specific reports. Each report has its own settings and capabilities. Finally, Jira software integrates with other dev tools, like Bamboo and [[Bitbucket]] so you can see additional information without switching applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (11), [[Scrum]] (2), [[Software Projects]] (2), [[Software Development]] (1), [[GitHub]] (1)
> **Tools:** jira (11), github (1), bitbucket (1)
> **Exercise Files:** template (7)
> **Definitions:** is a  (3)
> **Env Vars:** url (1)
> **Cross-References:** we discussed (1)
> **Documentation:** specification (1)
> **Speakers:** - [instructor] (1)

#### [Configuring boards](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/configuring-boards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/configuring-boards?u=76281980&t=0)** - [Instructor] Boards provide a powerful view of issue status. The template I use to create the Rebrand project didn't come with the board, so I created my own. Let's discuss the different types of boards and create one like this example. [[Jira]] has two types of boards, [[Scrum]] and Kanban. These terms are from the [[Agile Software Development]] methodology. Scrum boards are for teams that deliver their work in regular fixed intervals called sprints. The sprints have set start dates, include a set number of issues and strict completion deadlines. Kanban boards are for teams with more flexible delivery schedules, GR projects, and GR users can have multiple boards of either type. The different board types have different features. Scrum boards have backlog and sprint options in the left sidebar. Since Kanban boards don't have sprints and a backlog is a status in the workflow, there's simply a Kanban board option in the sidebar. Choose the board type that makes the most sense for the way the team works. Let's create a custom board for the Rebrand project. First, click the search field, I click the boards option at the bottom of the menu. Next, click the create board option at the top right, then choose the board type, I'll choose Kanban for this example. On the next screen, select the board from an existing project option and click the form submission button. Finally, give the board a descriptive name and select the Rebrand project. In the location field, choose whether to store the board with a specific project or with your user profile. The location field is only available in Jira Cloud. This board is for the entire project team,
>
> **[1:33](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/configuring-boards?u=76281980&t=93)** so I'll associated with the Rebrand project, this association means the board will appear in the project sidebar menu. Finally, click the form submission button to see the board and configure additional options. Here's the new board we just created, let's customize some of the settings. Click the ellipsis at the top right, and click the board settings option. This is the board configuration area, all the options are on the left. On the general page, you can change the boards name, add board administrators, or change the boards location. Scroll down on the general page and look for the share setting. Verify that the filter powering the board is shared with the desired set of users. In this case, I want to share the board with everyone using the project, so the setting is correct. Next, review the filter query to make sure it includes the desired issues. The default query returns all issues and orders them by rank. To rank issues, users can simply drag them above or below other issues on the board. There are multiple ways to manage how many issues appear on the board. First, you can change the filter query or exclude certain issues. For example, exclude completed issues to speed up the board and make the view less cluttered. Another scope limiting option is the sub-query feature. By default, the sub-query hides issues in released versions. If you're not using fixed versions, you can ignore the setting or remove the sub-query. Finally, in Cloud, you can use the high completed issues older than option. Next, click the columns link in the left sidebar, use this page to which workflow statuses appear in which column. You can add or remove columns as desired. In the example,
>
> **[3:05](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/configuring-boards?u=76281980&t=185)** there are four workflow statuses, but only three columns. The column named in progress, includes issues in multiple statuses. Now there's nothing wrong with the default, but let's create a new column for issues in the in review status. Then, drag the in review status to the in review column. Next, make sure all the other statuses are in the correct columns. For example, issues in the done status should be in the final column, also named done. Always pay special attention to the unmapped status column, if the column is empty, there's nothing to do, but if there's a status in the column, issues in that status are hidden on the board. You usually want to drag unmapped statuses to other columns, but you can keep them hidden if desired. Next, click on the card colors link in the left sidebar, you can use colors to visually distinguish between cards on the board. I like to color the cards by either issue type or priority. Finally, click the card layout link in the left sidebar. You can show up to three additional fields on cards, select a field from the dropdown menu and click the add button. I'll add the due date and start date fields. When you finished configuring board settings, click back to board on the top right. Here's the finished result. Now there's an in review column, the issues are colored by type and the start and due dates are shown on the cards. When an issue is ready to move to the next status, simply drag it to the desired column on the board. Users can also progress issues in the workflow, the result is the same, issues are kept up to date, regardless of whether you viewed them individually or on a board.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scrum]] (3), [[Jira]] (2), [[Agile Software Development]] (1)
> **UI Navigation:** select the (2), in the sidebar (1), scroll down (1), click on (1), dropdown (1)
> **CLI Commands:** make (3)
> **Tools:** jira (2)
> **Analogies:** for example (2)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)

#### [Connecting Jira to Bitbucket](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/connecting-jira-to-bitbucket?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/connecting-jira-to-bitbucket?u=76281980&t=0)** - [Instructore] [[Bitbucket]] is [[Atlassian]] [[Git]]-based source code repository application. It provides a central place to manage files and collaborate on files. It's like [[GitHub]] but for Atlassian Software. Just like [[Confluence]] integrates with [[Jira]], so does Bitbucket. In this section, we'll discuss the integration benefits, and connect a Bitbucket repository to a Jira project. First let's define some common terms that you'll encounter in Bitbucket and Jira. Software that tracks changes to files over time is called VCS, SCM, RCS or DVCS. It's a good idea to keep earlier versions of code in case there's a problem and you need to revert back to a previous state. It's also a great way to manage changes made by multiple developers and teams. Some common [[Version Control]] options are Git, Mercurial, CVS and SVN. Bitbucket works with Git and Mercurial. A repository or repo is a central place to store and version files. Some organizations divide their code up into multiple repositories and some just have one. Each repo has a size limit. So if you have a lot of files, you might want to break them up. For example, I remember storing Frontend code in one repo and Backend code in another. A project is a collection of one or more repos like in Jira, Bitbucket projects are a way to organize related work. Finally, a workspace is a collection of projects and repositories. Here's an example structure. And this example, there's one workspace and a project for marketing team files and website files. The marketing project has one repo for storing
>
> **[1:34](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/connecting-jira-to-bitbucket?u=76281980&t=94)** and tracking changes to documents. The website project has three repos for three different types of web files. Here are some benefits for connecting the applications and where you'll notice integration points. In Bitbucket, you can create issues directly from a pull request comment. This is useful for turning feedback into actions. You can also view, edit and comment on issues without leaving Bitbucket. Another useful feature is automation. You can use a commit or pull request to trigger an action on certain Jira issues. For example, automatically transitioned an issue forward in the workflow, when a commit is made. In Jira, you can see code, build and deployment information right in your Jira project, you can view and create branches and pull requests from individual Jira issues. You can also view commits so you can see the latest source code changes. In a previous section, we connected confluence to Jira using the application links feature. For Bitbucket use the DVCS accounts integrations page instead, you'll find it in the [[Microsoft Products|products]] admin menu in cloud and the applications admin menu and server and data center, you'll need application admin permissions to connect applications but it only needs to be done once. If you already have a Bitbucket account, click the button at the bottom of the page to establish the connection. When Bitbucket is connected, you'll see it in the application navigator menu on the left, the navigator or switcher menu provides a quick way to toggle between Atlassian applications. If you need to create a Bitbucket, you can click the more Atlassian products link at the bottom. Let's click the Bitbucket link to switch to that application.
>
> **[3:05](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/connecting-jira-to-bitbucket?u=76281980&t=185)** By default you'll land on Bitbucket your work page, which shows any recently used repos, pull requests and your issues assigned to you. If you don't already have a project and a repository to store your files it's easy to create them, simply click the create repository button or the plus icon in the left sidebar. You'll need application admin permissions for this step. In the overlay, select a workspace and an existing project. You can also create a new project using a selection in the project name field. Next, enter a unique name for the repository. I'll create a repo to store all the websites, images, modify any other settings as desired and click the form submission button. The next page shows the new repo and its contents, let's click the Jira issues option on the left sidebar to link a related Jira project. There are two ways to link projects and issues to the Bitbucket repositories. The first way is by manually linking a project, click the linked folder icon at the top of the repo page, and click the manage link projects option. In the overlay, select the Jira site, the project, and click the form submission button. After you'll see all the issues in the Jira project on this Bitbucket page. The other way to link to your issues to a Bitbucket repository is by including a Jira issue ID in any pull request title or commit message. I'll show you how in the next section.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Bitbucket]] (17), [[Jira]] (14), [[Atlassian]] (4), [[Git]] (3), [[Confluence]] (2)
> **Tools:** bitbucket (17), jira (14), confluence (2), github (1)
> **Env Vars:** dvcs (2), vcs (1), scm (1), rcs (1), cvs (1)
> **CLI Commands:** git (3), find (1)
> **Definitions:** is a  (3), is called (1)
> **Analogies:** for example (2), it's like (1), just like (1)
> **UI Navigation:** toggle (1), select the (1)
> **Prerequisites:** you'll need (2)

#### [Using common Bitbucket features](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/using-common-bitbucket-features?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/using-common-bitbucket-features?u=76281980&t=0)** - [Instructor] Now that [[Bitbucket]] is connected to [[Jira]], we're ready to change some files. There are just a few additional definitions to cover. Creating a branch means creating a new version of the code base. Create branches so you can experiment without impacting the main code. When you're done making changes, merge your work back to the main branch. Build refers to translating or processing files into usable or executable form. Some files need to be compiled, packaged, or compressed. A pull request is a request to review code before it's merged back to the main branch. This process helps foster collaboration and discussion of changes. A commit is the action of applying changes to a repository. Commits represent a snapshot in a timeline or a history of revisions. You can perform all these actions using a [[Git]] client or from a command line. Download [[Atlassian]]'s [[Windows]] or Mac application called Sourcetree at the URL shown. You can also use VS Code by [[Microsoft]]. I'll use Sourcetree for our use case. Let's choose a Jira issue to work on. I'll choose the issue for updating the logo files. Start by transitioning the issue to a status like In Progress so others know the issue is being worked. I'll also start progress on the first subtask and assign it to myself. It's also a good time to make sure all the issue fields have correct values. Here's a list of the fields I double-check. Ideally estimates are entered before release contents are finalized and fixed versions and due dates are set when issues are prioritized by the company. But I always check to make sure the important dev specific fields are correct.
>
> **[1:34](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/using-common-bitbucket-features?u=76281980&t=94)** This information is vital for reporting purposes and there's often background logic that depends on this data. I noticed one of my issues was missing a fixed version and a time estimate, so I added them. Next let's create a branch and get a local copy of all the website image files. You can do this by clicking the Create Branch link in the Jira issue, in Sourcetree, or using the command line. Clicking the link in Jira takes you to Bitbuckets Create branch screen. Select the repository where images are stored, select the type of branch if desired, and verify the master or main branch if specified as the source. Jira automatically populated the branch name field with the issues, ID, and summary. This is a powerful way to associate work between the applications, so I recommend using the suggested format, then click the Form Submission button. The next screen in Bitbucket shows the branch created. Next, check out the files so you can modify them on your local machine. Click the Check out in Sourcetree button or use the provided command line code. Here's the branch just created and the files checked out in Sourcetree. Next, update the local files with the new branding on your local computer and save the files. After updating the files, Sourcetree recognizes that there are uncommitted changes. I changed two of the image files on my local machine. From here, all I need to do is stage the files and commit them back to the repository. Now here's the most important part. Aside from checking in bug free files, of course. Add the Jira issue ID to your commit message. In the example, I've prepended my change comment with REBRAND-3.
>
> **[3:05](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/using-common-bitbucket-features?u=76281980&t=185)** This makes sure the information is tracked in Jira. Now I can merge my changes with the master branch and push the changes to Bitbucket. As you'd expect, the commits and branches are all tracked and visible in Bitbucket. Because we included the Jira issue ID in all Bitbucket actions, activity information is also available in Jira. Look for the development panel to appear on the right sidebar. You must have the View Development Tools permission in the projects permission scheme to see it. In cloud, click on any development action to launch an overlay with additional details. After you've made all the logo updates, mark the subtask complete and transition the parent task into a testing status. This is a signal to the quality team that this issue is ready for verification. There are two things I always do when I've completed work. First, I log the time it took. Then I can compare the actual time to the estimated time and try to improve my accuracy in the future. Estimation and time logging isn't about how good you are or how fast you can complete a task. It's about [[Capacity Planning]] and resource allocation. Even if your organization doesn't require this information, it's a good habit to get into. The other thing I always do is leave a comment, explaining what I changed, where I changed it, and how to see the change. This is really helpful for the testing team and to fellow developers who might need to work on or undo this change in the future.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (9), [[Bitbucket]] (5), [[Git]] (1), [[Atlassian]] (1), [[Windows]] (1)
> **Tools:** jira (9), bitbucket (5), command line (3), vs code (1)
> **Definitions:** is a  (3), refers to (1)
> **CLI Commands:** make (2), git (1)
> **UI Navigation:** select the (2), click on (1)
> **Env Vars:** url (1), rebrand (1)
> **Speakers:** - [instructor] (1)


### 3. Testing Software

[↑ Back to Table of Contents](#table-of-contents)

#### [Managing test cases in Jira](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/managing-test-cases-in-jira?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/managing-test-cases-in-jira?u=76281980&t=0)** - [Tutor] Now we're in the testing stage of the [[Software Development]] process. In this section, we'll use [[Jira]] to test work before it's released into production. Jira doesn't come with specific features for test case management, but there are many things you can do. You can create a custom issue type, manually create one Jira issue per test case, and link the test case to the related work. Some organizations create a custom type called test case, like in the example, or, if you use test sets to represent a collection of multiple test cases, you could create a custom issue type called test set, and a custom sub task called test case. This structure creates a useful parent-child relationship. In this example test case, I added custom fields to record test execution steps and the expected result. The next method is to import test cases from a comma-separated value, or CSV file. For import instructions, and tips on preparing your CSV file, see the import data section of my Jira advanced administration course. Once your test cases are in Jira, you can clone them to quickly create more. This is helpful for tests that you execute multiple times, like standard regression tests. Here's a tip. If you clone an issue that has child issues, the children are cloned too. That parent-child structure provides a fast way to create many new issues. Finally, you can add test case management features to Jira, with an app from the [[Atlassian]] Marketplace, or an integration with other testing software.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (6), [[Software Development]] (1), [[Atlassian]] (1)
> **Tools:** jira (6)
> **Env Vars:** csv (2)
> **Speakers:** - [tutor] (1)

#### [Executing manual and automated tests](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/executing-manual-and-automated-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/executing-manual-and-automated-tests?u=76281980&t=0)** - [Instructor] There are two main types of testing, manual and automated. Both have pros and cons and are best for different situations. Most organizations use a combination of both. Manual tests are executed by humans instead of tools or scripts. No matter how much technology advances, there will always be tasks that are better verified by people instead of machines. Here's an example test case to make sure the main website logos were properly updated during the development phase. This type of test should be executed manually. A tool or a script could check that the logo files have a recent update date, but it's better for a human to compare the files and make sure they look as expected. Automated tests are executed by tools, scripts, or software. These tests often adhere to an automation framework, which include guidelines for test case design. Automated testing is often faster than [[Manual Testing]]. Here are some examples of tests that can be automated. To manually test website authentication, for example, I need to open a browser, navigate to the login page, type a username and password, and click the form submission button. This sequence might take less than a minute to accomplish manually, but if I use a tool to perform the steps, this can be completed in seconds. The tool can automatically report success or failure and I can repeat the test hundreds of times if needed. Here's an example. As a [[Jira]] administrator, I needed to verify standard application functions anytime we upgraded, installed, or remove third-party apps, did configuration cleanups, routine maintenance, or conducted quarterly audits.
>
> **[1:33](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/executing-manual-and-automated-tests?u=76281980&t=93)** I created 40 test cases to test Jira. After years of perfecting and streamlining the test cases, it still took a few hours to run them and document the results. Now, a few hours might not sound like much until you add up all the activities that triggered the need for testing. I estimated that I was spending 80 hours a year just making sure Jira was functioning as expected. That's crazy. So I started looking for ways to automate these repeated tasks. I looked for a tool that was easy to set up, had advanced features I could leverage in the future as my knowledge and needs grew, supported both visual and scripted test creation, ran on multiple computer and mobile platforms, didn't require learning a specific programming language, didn't require installation of special frameworks or libraries, supported multiple browsers and development environments, and had a free version. I know that's a lot to ask for. I tried all of these automation tools. If these tools don't do what you need, there are lots more out there and even some related apps in the [[Atlassian]] Marketplace. Lots of automation tools also have Jira integrations, so look out for that. The tool I liked the best was Katalon Studio, and I used it to automate my 40 Jira application test cases. What once took me hours to complete manually ran in under three minutes. I was pretty proud of myself and I had fun building the test cases and the visual interface. Katalon has both free and paid versions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (5), [[Manual Testing]] (1), [[Atlassian]] (1)
> **Tools:** jira (5)
> **CLI Commands:** make (2)
> **UI Navigation:** navigate to (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Fixing bugs in Jira](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/fixing-bugs-in-jira?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/fixing-bugs-in-jira?u=76281980&t=0)** - [Narrator] The testing team completed their link test case, which is [[Jira]] ID REBRAND-24. During their testing, they noticed a problem. One of the local files is a bit blurry, so they created a bug to report it. They found REBRAND-28, linked it to the related JIRA issue, and assigned it to me to fix. Let's take a closer look at the bug. As you can see, the bug issue type has different fields, than the task issue type. Fields like Environment, Actual Result, Expected Result, and Steps to reproduce are often present for these types of issues. This format quickly explains the problem and where a fix is needed. A screenshot is also included lower on the page, and yet I agree, the attached image does look a little blurry. I'll fix the images quality, and I'll ask the tester to take a second look. In addition to different fields, it's good to know that issue types can have different workflows too. Bug Issue Types usually include a review or testing status, but that's not the only way to handle defects. There are many ways organizations can report bugs. One way is to create an additional bug issue that has its own work process, like in the previous example. Another way is to utilize a testing step in the original issues workflow. The original issue doesn't move forward in the workflow until the problem is addressed. Another way is to use sub-tasks. I've even seen a company create a sub-bug issue type. Well, that's not my favorite idea, but it's an option. Finally, some organizations store their test cases and bugs in a different JIRA project altogether. Regardless of the method you choose, be sure to link test cases and bugs to related issues.
>
> **[1:36](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/fixing-bugs-in-jira?u=76281980&t=96)** You can link any JIRA issue to any other issue, regardless of type or project. Linking creates an association and a path for users to follow. You can also query linked issue. When linking, be sure to choose the applicable link type; is blocked by is the default, but other selections like causes, relates to or duplicates might be better to describe the relationship.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (4)
> **Env Vars:** jira (4), rebrand (2)
> **Tools:** jira (4)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### 4. Releasing Software

[↑ Back to Table of Contents](#table-of-contents)

#### [Releasing versions in Jira](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/releasing-versions-in-jira?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/releasing-versions-in-jira?u=76281980&t=0)** - [Instructor] Now we're in the release stage of the [[Software Development]] process. In this section, we'll discuss managing versions and releases. As discussed in an earlier section, a fixVersion is a grouping of issues by date or time period. Versions are often named in the format major.minor.patch, or 1.0.0, for example. There are multiple ways to see version progress, the first is in the ReleaseHub. You'll find it by clicking the Releases link in the left sidebar. This page shows all release versions, their dates, and their progress. Hover over the progress bar in the table to see a count of issues in each status. Click on any version number for additional details. There are four completed issues in this version, but one has a warning. [[Jira]] looks for potential problems like completed issues with open pull requests, unreviewed code, and failed builds. Once the problems are remedied, click the Release button on the right, then click the Form Submission button in the overlay. This version is now marked released. Now let's go back to the Releases page. Versions have three statuses, unreleased, released, and archived. The released version is removed from this view. You can see it again by changing the display filter. There's one more feature back on the version details page I wanted to mention. Click the Release Notes button at the top right to see an editable list of issues in the release. On the next page, you can copy the release contents in [[HTML]] or text format and paste the information wherever release notes are stored. For additional features, check out some of the release notes apps
>
> **[1:33](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/releasing-versions-in-jira?u=76281980&t=93)** in the [[Atlassian]] Marketplace. Our use case leverages Kanban. But if you use [[Scrum]] and estimate with story points, there's a release burndown view in the report section that might interest you. A burndown chart is a visual representation of work remaining. This view helps detect whether a release is on schedule or falling behind. The example shows the count of story points when work on the version started. If additional scope is added later, this chart will show it. The chart also shows work completed and work remaining. Scroll down to the bottom of the page to see individual issue details. There are lots of other helpful views to explore in the projects reports section. Here are some tips for working with versions. First, it's good to know that the ability to select a version is coupled with the Jira project's resolve issues permission. Next, versions are per Jira project. If you work out of two projects, both can have a version called 1.0.0, but each has its own separate record in the Jira database. Keep that in mind when writing JQL queries. Next, sometimes you need to move an issue from one release to another. To do this, simply change the fixVersion field in the issue. It's also possible for one issue to be part of multiple versions, but you should consider the impact that might have on reporting. It might be easier to duplicate the issue and put one issue in each version. You can create a second issue manually, clone an issue, or use the Split issue function on a board. Next, you can manage release versions and their contents from the ellipsis menu in the ReleaseHub. Just know that there's no undo option for this function. Finally, you can also query for issues by release version.
>
> **[3:09](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/releasing-versions-in-jira?u=76281980&t=189)** Here are a few examples and functions. You can use these queries to create filters, switch power boards, and [[Dashboards]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (4), [[Software Development]] (1), [[HTML]] (1), [[Atlassian]] (1), [[Scrum]] (1)
> **Tools:** jira (4)
> **Code Identifiers:** fixversion (2)
> **Env Vars:** html (1), jql (1)
> **Versions:** 1.0.0 (2)
> **UI Navigation:** click on (1), scroll down (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)

#### [Releasing code in Bitbucket](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/releasing-code-in-bitbucket?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/releasing-code-in-bitbucket?u=76281980&t=0)** - [Instructor] Back when I was developing websites, we either released code manually, or on a schedule using a script. But these days there are much better ways to deploy code. Here's a little bit of info to get you started. As we discussed in a previous section, [[Bitbucket]] is [[Atlassian]]'s [[Git]]-based source code repository application. It's a central place to manage files and collaborate on files. Additionally, you can build, test, and deploy code right within Bitbucket using the Pipelines feature. Pipelines was introduced in 2016, and replaced Bamboo Cloud, which was decommissioned in 2017. The Pipelines feature is a built-in [[Continuous Integration (CI)|continuous integration]] and delivery service. CI/CD helps automate the steps between file check-in and release. You can deploy faster without breaking things, and you can move from infrequent large code deployments to frequent small [[Agile Development|agile]] deployments. Here are some benefits of the Pipelines feature. First, it's built into Bitbucket. You don't need additional software. Also, there's no CI server to set up, [[User Management]] to configure, or repositories to synchronize. You can kick off builds automatically and see built status in branches, commits, and pull requests. If a change breaks the build, it's easy to detect and locate the source of the error. Also, you can automatically deploy the staging branch to the staging environment, and the production branch to the production environment. In [[Jira]], you can see and query for build information. For example, search for issues in a failed build, or issues deployed to the staging environment. See the documentation for search syntax information.
>
> **[1:34](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/releasing-code-in-bitbucket?u=76281980&t=94)** To use the Pipelines feature, you must first connect Bitbucket and Jira. You'll also need to use Jira issue IDs in commits and branches. Jira IDs tie everything together. Also, there must be at least one repository in your Bitbucket workspace. If these items aren't already in place, there are instructions in the connecting Jira to Bitbucket section of this course. To get started with Bitbucket Pipelines, go to your Jira project and click the Deployments link in the left sidebar. Then click the Get Started button to go to the Bitbucket application. You can also connect to other CI/CD providers, like [[Jenkins]], Gitlab, [[GitHub]], and others. In Bitbucket, navigate to a repository and click the Pipelines option in the left sidebar. You may need to set up two-step verification first, which means creating an SSH key, downloading an authentication app for generating time-based codes, and clicking a verification link in an email message. See the documentation if you need help completing the security step. Next, we'll create a pipeline using a template. Scroll down to the bottom of the Pipelines page to see the options. There are lots of templates that cover different programming languages and use cases. Click the View More link on the right to see them all. A pipeline contains steps or instructions, which are stored in a YML configuration file. YML, or YAML, is a human readable markup language often used for configuration files. Read more about its specifications at [yaml.org](https://yaml.org). Here's an example pipeline file. You can edit its contents in the window on the left and use the settings on the right to add steps, integrations, and variables.
>
> **[3:07](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/releasing-code-in-bitbucket?u=76281980&t=187)** When you're finished configuring the file, save it by clicking a button at the bottom of the screen. This commits the file to the repository. Meaning the file is version 2. The pipeline just created is visible on the Pipelines page in Bitbucket. Click its name to see additional details. This page contains all the pipeline actions and information. To change the configuration, click the cog or gear icon, and check out the bitbucket-pipelines.yml file. Click the Deployments link in Bitbucket to see a history of deployment information on the Deployments tab. You can also see build and deployment information in the development panel in Jira issues.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Bitbucket]] (12), [[Jira]] (7), [[Atlassian]] (1), [[Git]] (1), [[Continuous Integration (CI)|Continuous integration]] (1)
> **Tools:** bitbucket (12), jira (7), gitlab (1), github (1)
> **CLI Commands:** cd (2), git (1), ssh (1)
> **Env Vars:** yml (2), ssh (1), yaml (1)
> **UI Navigation:** go to (2), navigate to (1), scroll down (1)
> **Prerequisites:** set up (2), configure (1)
> **Documentation:** the documentation (2)
> **Exercise Files:** source code (1), template (1)

#### [Conducting retrospectives in Confluence](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/conducting-retrospectives-in-confluence?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/conducting-retrospectives-in-confluence?u=76281980&t=0)** - [Instructor] Now that the work is deployed, it's time to maintain it, fix any bugs that slipped into production, and reflect on what we did so we can improve. After a software release, it's important to review what went well and what to refine for the future. This is called a retrospective, a post-mortem or an after action review. In this section, we'll create one in [[Confluence]]. Earlier in the course, we created a Confluence space using the software project space template. That template automatically includes a section for retrospectives. Confluence also has a built-in retro page template. Click the button on the top right to use it. If you don't see this button, simply create a new page and select the retrospective template. Next, give the page a unique name and enter all the details in the first section. Use the sections at the bottom of the page to record notes and action items from the discussion. The goal is to identify what went well, what didn't go well, and how the team can improve next time. I've participated in many retros over the years, some were conducted very well and created strong team bonds, others were less helpful and sometimes erupted into shouting matches. It's important to set the right expectations for this exercise. This process needs to support your organization's vision and goals and not just be a forum to air grievances. You need to create an open, honest, and positive environment where team members feel supported instead of blamed. Challenge the team to focus on improvement. If criticism is shared, insist that it's done in a constructive way. Make sure everyone participates and provides feedback so a few strong voices don't overtake the discussion.
>
> **[1:35](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/conducting-retrospectives-in-confluence?u=76281980&t=95)** If needed, try setting a time limit per person or per topic. Also make sure action items are recorded and completed, without real change, these discussions are a waste of time. Finally, make retros a standard part of your organization's [[Software Development]] process. Team members should always be thinking with a continuous improvement mindset. If you're new to the retro process, check out [[Atlassian]]'s Team Playbook, it contains helpful instructions and examples. You can also conduct retros in [[Trello]] and [[Jira]]. Also check out the Atlassian Marketplace for some great Jira apps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Confluence]] (3), [[Atlassian]] (2), [[Jira]] (2), [[Software Development]] (1), [[Trello]] (1)
> **Tools:** confluence (3), jira (2)
> **Exercise Files:** template (4)
> **CLI Commands:** make (3)
> **Cross-References:** earlier in (1)
> **UI Navigation:** select the (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Additional resources for Jira learning](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/additional-resources-for-jira-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/additional-resources-for-jira-learning?u=76281980&t=0)** - [Rachel] Congrats on completing the course. By now, you've explored the entire [[Software Development]] life cycle. This knowledge will help you and your team properly plan and release software for years to come. You should now be able to use [[Atlassian]] tools to plan, develop, test, release, and maintain software. Adapt the software development life cycle to your organization's process. Use [[Confluence]] to craft requirements, document meeting notes and decisions, and conduct retrospectives. Use [[Jira]] to plan, track work, fix bugs, and manage release versions. And use [[Bitbucket]] to manage code and file changes. Here's some additional resources to help you continue on your JIRA journey. First, check out Atlassian's documentation website. Project documentation is categorized by application type, deployment type and version. Make sure you're reading the right information for the deployment type you have. If you're new to Bitbucket or [[Git]], Atlassian has an easy to follow tutorial. Check it out at the URL shown. The beginner section of the tutorial includes a downloadable cheat sheet with all the important Git commands. Next, visit support.[atlassian.com](https://atlassian.com) for vendor help, or to report a bug. In Server and Data Center, you can also visit the troubleshooting and support tools admin page to create a support zip to send to Atlassian. The support zip feature exports your logs and configuration to help the vendor troubleshoot problems. The Atlassian online community is where you'll find answers, support, and inspiration from other users. Login with your Atlassian ID at community.[atlassian.com](https://atlassian.com). You can ask a question, or start a discussion.
>
> **[1:35](https://www.linkedin.com/learning/planning-and-releasing-software-with-jira-14442823/additional-resources-for-jira-learning?u=76281980&t=95)** There are also plenty of JIRA themed groups on [[LinkedIn]] and [[Facebook]]. Next, studying for Atlassian certification is a great way to learn more about the applications. The exams are challenging, but you'll learn a lot preparing for them. Read my tips for obtaining and extending your certification at the URL shown. The final resource is the JIRA Strategy Admin Workbook. It saves you time, money and frustration. This book is different, it's not documentation. It's recommendations from years of cleaning up horrible JIRA configurations. It's about what you should do, shouldn't do and why. Get the book and additional materials at [jirastrategy.com](https://jirastrategy.com). I hope you enjoyed this Atlassian tools course as much as I enjoyed creating it. Now, it's time to get your course completion certificate. When you share your certificate tag me so I can celebrate your accomplishment, and share it with my network too. If you have JIRA questions, I'd love to hear from you. Use the Q&A feature, email me directly, or connect in social media. Good luck with your JIRA journey and I'll see you online.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Atlassian]] (10), [[Jira]] (7), [[Software Development]] (2), [[Bitbucket]] (2), [[Git]] (2)
> **Tools:** jira (7), bitbucket (2), confluence (1)
> **Env Vars:** jira (7), url (2)
> **CLI Commands:** git (2), make (1), find (1)
> **URLs:** [atlassian.com](https://atlassian.com) (2), [jirastrategy.com](https://jirastrategy.com) (1)
> **Definitions:** is a  (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [rachel] (1)


## Instructor

- [[Rachel Wright]]

## Resources

- Exercise files available

## Skills Covered

- Software Project Management
- Jira
- Software Development Life Cycle (SDLC)

## Path Context

### In [[Develop Your Skills in Agile Software Development]]
← [[Introduction to Agile Development Practices- Bring Agile to Your Development Pipelines]] | **4 of 6** | [[Agile Software Development- Scrum for Developers]] →

### In [[Develop Your Skills as a Software Project Manager]]
← [[Learning Jira Software]] | **9 of 11** | [[Agile Software Development- Kanban for Developers (2019)]] →

### In [[Mastering Jira for Software Developers]]
← [[Learning Jira- Leveraging Sprints, Releasing Features, Fixing Bugs, and Tracking Development]] | **3 of 4** | [[Increasing Efficiency with Jira and Confluence Integrations]] →

### In [[Getting Started with Agile Software Development]]
← [[Introduction to Agile Development Practices- Bring Agile to Your Development Pipelines]] | **3 of 10** | [[Agile Software Development- Kanban for Developers (2019)]] →

## Appears In

- [[Develop Your Skills in Agile Software Development]]
- [[Develop Your Skills as a Software Project Manager]]
- [[Mastering Jira for Software Developers]]
- [[Getting Started with Agile Software Development]]

## Related Courses

_Courses sharing skills:_

- [[Jira Administration- Automation]] — Jira
- [[Jira- Managing Custom Workflows]] — Jira
- [[Jira- Advanced Administration]] — Jira
- [[Jira Service Management- Administration]] — Jira
- [[Jira- Basic Administration]] — Jira

---

[↑ Back to top](#)