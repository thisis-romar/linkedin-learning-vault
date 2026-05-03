---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: agile-project-management-with-jira-cloud-2-lean-and-agile-processes
url: "https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes"
duration_minutes: 71
duration: 1h 11m
level: Intermediate
updated: 10/11/2021
learners: 915660
skills:
  - Jira
  - Agile Project Management
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQGGdkDCjLEj2g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1633625073088?e=2147483647&amp;v=beta&amp;t=bDnjhfMJIalKjrKy7KK_TiIkbIA3u_PMqiZVxoQpqz0"
linkedin_topic: DevOps
learning_paths:
  - '[[Atlassian Agile Project Management Professional Certificate]]'
prev_courses:
  - '[[Agile Project Management with Jira Cloud- 1 Projects, Boards, and Issues]]'
next_courses:
  - '[[Agile Project Management with Jira Cloud- 3 Advanced Topics]]'
path_nav: '[{"path":"Atlassian Agile Project Management Professional Certificate","position":4,"total":6,"prev":"Agile Project Management with Jira Cloud- 1 Projects, Boards, and Issues","next":"Agile Project Management with Jira Cloud- 3 Advanced Topics"}]'
path_count: 1
tags:
  - course
  - topic/devops
  - skill/jira
  - skill/agile-project-management
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Agile%20Project%20Management%20with%20Jira%20Cloud-%202%20Lean%20and%20Agile%20Processes.md)

![Agile Project Management with Jira Cloud: 2 Lean and Agile Processes](https://media.licdn.com/dms/image/v2/C560DAQGGdkDCjLEj2g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1633625073088?e=2147483647&amp;v=beta&amp;t=bDnjhfMJIalKjrKy7KK_TiIkbIA3u_PMqiZVxoQpqz0)

# Agile Project Management with Jira Cloud: 2 Lean and Agile Processes

> In this course, explore the difference between lean and agile, and learn to identify kanban systems. Walk through what scrum is, learn how to define velocity and scrum roles, and start creating a scrum project. Discover quick searches and basic searches, as well as how to use both in Jira. Plus, explore Jira Query Language (JQL).Note: To check out other Atlassian University courses about Jira work

> [LinkedIn Learning](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes) | 1h 11m | Intermediate | 916K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Course overview](#course-overview)
- [**1. Lean and Agile Principles**](#1-lean-and-agile-principles) (1 videos)
  - [Lean and agile principles](#lean-and-agile-principles)
- [**2. Scrum Overview**](#2-scrum-overview) (1 videos)
  - [Scrum overview](#scrum-overview)
- [**3. Scrum Overview 2**](#3-scrum-overview-2) (3 videos)
  - [Scrum overview 2](#scrum-overview-2)
  - [Lab: Cloud company-managed](#lab-cloud-company-managed)
  - [Lab: Team-managed](#lab-team-managed)
- [**4. Quick Search and Basic Search**](#4-quick-search-and-basic-search) (2 videos)
  - [Quick search and basic search](#quick-search-and-basic-search)
  - [Lab: Cloud](#lab-cloud)
- [**5. Jira Query Language (JQL)**](#5-jira-query-language-jql) (2 videos)
  - [Jira Query Language (JQL)](#jira-query-language-jql)
  - [Lab: Cloud](#lab-cloud)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Course overview](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/course-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/course-overview?u=76281980&t=0)** - [Instructor] Welcome to Course 2 of the [[Agile Development|Agile]] Project Management with [[Jira]] (Cloud Edition) series. AT [[Atlassian]] University, our mission is to help Atlassian users like you develop new skills, improve your team's work, and advance your professional career. In this series, we will be learning how to use lean and agile principles, how to identify different agile methodologies, and how to configure Jira to match your team's processes. Now let's take a look at what you'll be learning in course two. In this course, you will learn about lean and agile principles, identify the differences between [[Scrum]] and Kanban, how to use quick search, basic search, and finally how to use JQL. This course does not assume you have any existing or prior knowledge of Jira and agile methods, although some existing knowledge would be helpful. The topics we will cover in this course are lean and agile principles, Scrum overviews, both one and two, quick search and basic search, and finally, JQL. The approximate time for each topic includes the lecture and any demos if added. Get started with Jira Cloud in a few simple steps. First, go to the Atlassian homepage at www.[atlassian.com](https://atlassian.com). Click the blue Try Now button at the top right of the page. Scroll down to the Plan & Track section on the left side of the next page. Click the light gray Try Cloud button under Jira Software. Register and download from the signup page.
>
> **[1:37](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/course-overview?u=76281980&t=97)** When using Jira Cloud, you can choose between classic projects and next gen projects. Next gen projects are simpler to configure. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Agile Development|Agile]] (6), [[Jira]] (6), [[Atlassian]] (4), [[Scrum]] (2)
> **Tools:** jira (6)
> **Env Vars:** jql (2)
> **UI Navigation:** go to (1), scroll down (1)
> **Prerequisites:** configure (2)
> **URLs:** [atlassian.com](https://atlassian.com) (1)
> **Speakers:** - [instructor] (1)


### 1. Lean and Agile Principles

[↑ Back to Table of Contents](#table-of-contents)

#### [Lean and agile principles](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/lean-and-agile-principles?u=76281980)


### 2. Scrum Overview

[↑ Back to Table of Contents](#table-of-contents)

#### [Scrum overview](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/scrum-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/scrum-overview?u=76281980&t=1)** - [Instructor] In this video, we'll look at [[Scrum]] artifacts. We will define scrum, describe an increment, identify scrum artifacts and define velocity.
>
> **[0:19](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/scrum-overview?u=76281980&t=19)** According to the Scrum Guide, "scrum is a framework for developing, delivering "and sustaining complex [[Microsoft Products|products]]." Scrum is a way of achieving agility. If you think of [[Agile Development|agile]] as a way of working or of as a mindset, there are many methods or frameworks used to achieve this agility. We've already looked at Kanban and here we will discuss Scrum, which is currently the most popular Agile framework. There are other Agile frameworks or methods such as extreme programming or XP and others. We can start by taking a look at the continuous learning that takes place in scrum. A project starts as a vision or an idea of what to create. It's always best to start with the best vision that you can. The Agile team then begins working for a period of time called an iteration and they create a small working piece of the product. After the first iteration, the team has learned things and because of that learning, the product vision has changed somewhat. After the second iteration, the team has built more of a working product, and again, the vision has changed slightly due to the fact that the team has learned during the iteration. This process continues and the actual product moves closer and closer to the vision. After each iteration, the team has created what's known as an increment. An increment is a usable product that may be given to the customer.
>
> **[1:53](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/scrum-overview?u=76281980&t=113)** It's not always given to the customer, but the point is that it is capable to be given to the customer. The increment meets the organization's definition of done. This varies by organization, but in general, it is a high quality subset of the product. Each increment contains the work of the current iteration as well as all prior iterations. A sprint is a time-boxed period used to work on an increment of the product. A sprint is usually between one and four weeks and it's typically two weeks. It's up to the team to decide the duration of the sprints. And in general, this duration does not vary from sprint to sprint. The Scrum Guide has defined some parts of the scrum framework. There are artifacts such as the product backlog, sprint backlog, sprint goal, sprint board and reports. There are roles such as the product owner, scrum master, development team members and stakeholders and there are events or meetings or ceremonies. And these include the sprint itself. The sprint planning meeting, daily stand-ups or daily scrums sprint review and the sprint retrospective. Next, we will discuss the scrum artifacts. We will discuss each of these artifacts, but all of the artifacts provide project transparency, enable team shared understanding and enable inspection and adaptation.
>
> **[3:26](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/scrum-overview?u=76281980&t=206)** These artifacts are used to help the team be more effective. The product backlog is an ordered, ever changing to do list for the project. It can include features, improvements, bug fixes or any other items of work that the team has defined. Issues near the top of the product backlog should include more detail because these work items are closer to actually being worked on by the team. Modifying the product backlog is called product backlog refinement and how this is done varies from team to team. Once you have items in the backlog, you can create a sprint. In the backlog, you start by clicking on the Create Sprint button. This creates a panel for the sprint and you can drag issues from the backlog section into the sprint. A sprint backlog is the subset of the product backlog that you've added to a single sprint. It's the list of issues to be completed in the sprint. The sprint backlog includes not only the issues themselves but a plan on how to accomplish the work of the issue. As you were planning to sprint, it's common to estimate each issue and a common estimation statistic is called story points. Story points are a relative measure of the amount of work required to complete the story. Story points are used by the team to decide how many stories can be completed in the sprint.
>
> **[5:02](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/scrum-overview?u=76281980&t=302)** The story points are often used instead of a more absolute measurement such as hours. The point is usually not to tie estimation directly to the number of hours and hold the team members accountable to those hours. When you're ready to start the sprint, you click the Start Sprint button. You can then enter a sprint details. A sprint name is usually assigned for you but you can change it. You specify the duration of this sprint as well as the start date. You also assign the sprint goal. The sprint goal represents the objective of the sprint increment and is agreed to by the team. The sprint goal is reached by completing the sprint backlog. The sprint goal does not change during the sprint. The sprint is considered a success if the sprint goal is reached. The team has a sprint goal to provide coherence to the product increment. In general, you want each increment to have meaningful value for the customer. The sprint goal enables flexibility with the sprint backlog. The sprint is considered a success if the sprint goal is reached, allowing the team to alter some of the issues that it works on during the sprint. Another artifact is the sprint board. The sprint board is similar to the Kanban board that we saw earlier, but only contains issues from the sprint backlog. You can see here
>
> **[6:33](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/scrum-overview?u=76281980&t=393)** a common set of columns for a sprint with the to-do, in progress and done statuses. During the sprint, you can look at some of the scrum reports. This example is a burndown chart. A burndown chart usually represents the number of story points completed over time during the sprint. The gray lines are the guidelines provided by [[Jira]] showing what a linear decrease in story points would look like and not including non-working days. The red line shows the actual team's performance. Both lines always start at the number of story points that the team has agreed to complete during the sprint. The goal is for the red line to reach zero before the end of the sprint. This chart will automatically be updated as the team completes issues from the sprint board. The sprint report usually contains the burndown chart and also shows the list of issues of the sprint and their current status. This is a good way for everybody to see how the sprint is progressing. Velocity is a term related to scrum which represents the rate at which the team accomplishes work. Usually it's the number of story points completed per sprint. But this could also contain a different estimation statistic such as hours or t-shirt sizes. In the example shown here, the velocity is three points per sprint because the team completed three story points in the sprint.
>
> **[8:11](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/scrum-overview?u=76281980&t=491)** The velocity chart shows the estimated and actual velocity of the team over time. You can see here that in sprint one, the team estimated a velocity of 13 story points and achieved that velocity. Over time, their team velocity increased somewhat and their estimation was quite accurate. Teams can use this historic data to help better estimate story points of the current sprint. Here's a review of what we've discussed. scrum is an agile framework. An increment is a potentially shippable portion of the project that meets the definition of done. A sprint is a time-boxed period in which an increment is created. Scrum artifacts provide project transparency, enable shared understanding and enable inspection and adaptation. Artifacts include the product backlog, the sprint backlog, the sprint goal, sprint boards and reports. Velocity is the rate at which the team accomplishes work, usually in story points per sprint.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scrum]] (16), [[Agile Development|Agile]] (5), [[Microsoft Products|Products]] (1), [[Jira]] (1)
> **Definitions:** is a  (10), is an  (2), is called (2), known as (1)
> **Analogies:** such as (5), similar to (1)
> **Env Vars:** jira (1)
> **Tools:** jira (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)


### 3. Scrum Overview 2

[↑ Back to Table of Contents](#table-of-contents)

#### [Scrum overview 2](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/scrum-overview-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/scrum-overview-2?u=76281980&t=1)** - [Instructor] In this video, we'll continue our discussion of [[Scrum]] and talk about roles and events. We'll describe Scrum roles, differentiate the product owner and Scrum master, identify common characteristics of Scrum events, identify the purpose of the sprint planning meeting, daily standup, sprint review, and sprint retrospective. We'll start with Scrum roles. A Scrum team is made up of three roles, the product owner, scrum master and the development team. This team is cross-functional. They generally have the skills to support the product through its entire life cycle. The team members are flexible and adaptable and are continuously learning and working on things that they haven't worked on before. The team is self-organizing. They are empowered to decide how they will do the work of the team. In addition to the scrum team are the stakeholders. Stakeholders are any other people interested in the success of the project. They can be internal to the company, such as the company managers, executives, or other scrum teams. Or they can be external, such as customers, partners, or investors. The product owner is responsible for communicating the product vision, maximizing the value of each increment, and is responsible for the product backlog. The product owner interacts, represents,
>
> **[1:36](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/scrum-overview-2?u=76281980&t=96)** and is accountable to the stakeholders. The product owner is often a member of the product management organization, in addition to being on the scrum team. The responsibilities of the scrum master include promoting and supporting scrum, improving the day to day effectiveness of the team, protecting the focus of the team and increasing the transparency of the project, so that the scrum team and the stakeholders always see the current state of the project. Typical tasks of the scrum master include coaching the scrum team and stakeholders on scrum, removing blocking issues from the team, facilitating scrum events, configuring Scrum artifacts, such as the project boards and reports and monitoring the sprint progress. In general, the scrum master is responsible for reporting on the sprint progress. Why are there separate roles, the product owner and the scrum master? The product owner is primarily responsible for the product value, and the scrum master is primarily responsible for the team effectiveness. So those are quite different responsibilities. You separate the roles because each role can involve a lot of work, but more importantly, as checks and balances. The product value and the team effectiveness are two very different things that sometimes contradict. It's recommended that your teams do not combine
>
> **[3:12](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/scrum-overview-2?u=76281980&t=192)** these two roles into a single person. And some companies decide to use a single scrum master for several scrum teams. The development team is a cross-functional adaptive team that does the work of the project. It's responsibilities include estimating issues, deciding how much work can be done in the sprint, deciding how to organize and to do the work of the sprint, creating the increments of each sprint, and the development team has the ability to modify the sprint backlog during the sprint. The Scrum Guide recommends that there are three to nine members of the development team. Next we will discuss Scrum events. The Scrum events are the sprint itself, the sprint planning meeting, the daily stand-ups or daily scrums, the sprint review and the sprint retrospective. All of the scrum meetings have some common characteristics. There is a fixed maximum time limit and no minimum time limit. Once the objective of the meeting has been achieved, the meeting has ended. Meetings are primarily to plan, inspect and adapt. So you can see that planning is spread throughout each of the sprints. And there are many opportunities to inspect what you're doing and adapt based on what you learn. The meetings are primarily about collaborating
>
> **[4:48](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/scrum-overview-2?u=76281980&t=288)** and not about updating status. The meetings are primarily to spend time on things of value to all participants. The sprint planning meeting kicks off each sprint. It's attended by the entire scrum team. Its duration is typically four hours for a two week sprint. It's purpose is to plan the work of the sprint. The output of the meeting should be the sprint goal, as well as the sprint backlog. At the beginning of the sprint planning meeting, the product owner usually proposes a sprint goal as well as a set of proposed issues to be worked on during the sprint. The output of the meeting is a refined and agreed upon sprint goal and sprint backlog. The daily stand-up or daily scrum meetings occur every day. And in general, the attendees stand because it's a short meeting. The attendees are primarily the development team and the scrum master, though others can attend, but are usually encouraged not to in the meeting. The duration is typically 15 minutes. The purpose is to inspect recent progress toward the sprint goal and to plan the day's work. Usually the team identifies any impediments and plans to resolve them. Any impediments that involve just a subset of the team usually are discussed in a follow on meeting.
>
> **[6:23](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/scrum-overview-2?u=76281980&t=383)** The output of the daily standup is the plan for the day. The sprint review occurs near the end of the sprint. The attendees are the scrum team and any interested stakeholders. The duration is typically two hours for a two week sprint. The purpose is to inspect the increment of the sprint and to collaboratively update the product backlog for the next sprint. The output is a first pass at the next sprint backlog. So you can see that by the time the sprint planning meeting happens for the next sprint, the sprint backlog has somewhat been discussed. The sprint retrospective is the final event of the sprint. It's attended by the scrum team and usually facilitated by the scrum master. The duration is typically 90 minutes for a two week sprint. The purpose is for the team to inspect itself, including its processes, tools, and team interaction. It's meant to be a supportive blameless meeting and often takes on characteristics of a celebration. The output of the meeting is to identify one or more issues to be added to the next sprint backlog, which are related exclusively to improving how the team works together in the next sprint. Here's the summary of the scrum meetings.
>
> **[7:56](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/scrum-overview-2?u=76281980&t=476)** In general, other planning meetings are discouraged to allow the team to do the work of the sprint. Now that we've looked at both the Kanban method and the Scrum framework, we can see some of the differences. In the Kanban method, you have a continuous flow of issues and the issues are continuously being prioritized and added to the backlog. In scrum, each sprint has a set of issues that is similar to a Kanban backlog. However, you also have the timebox structure of events around scrum. In that sense, scrum is a heavier framework than Kanban because it includes more process around the planning meetings. Kanban, in general, leaves how to do the planning up to each team. Here's a review of what we've discussed. Scrum rules include the product owner, scrum master, development team members, and stakeholders. Scrum meetings include the sprint planning meeting, daily standups, sprint review, and sprint retrospective.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scrum]] (41)
> **Definitions:** is a  (5)
> **Analogies:** such as (3), similar to (1)
> **Cross-References:** in the next (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Lab: Cloud company-managed](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/lab-cloud-company-managed?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/lab-cloud-company-managed?u=76281980&t=0)** - [Instructor] In this video, we'll create a [[Scrum]] project, create issues in the product backlog, create and plan a sprint, execute a sprint, and complete a sprint. We're logged in as the [[Jira]] administrator, we have an existing Kanban project, but for this demo, we're going to create a new scrum project. To do this, click the create project button, select classic project, and we'll change the template and select the scrum template. We'll name the project Project B and click create. The project board is empty since we haven't created a sprint yet, but first let's designate a project administrator for this project. Under project settings, people, will designate Alana Grant for the administrator's role, which means Alana Grant is a project administrator for the project and can configure it. Now we'll log out as the Jira administrator and log in as Alana Grant, the project administrator. We're logged in as Alana Grant and can see the new project, B Project. Let's click the backlog tab to view the backlog. There are no issues in the backlog yet, so let's create three issues. Now that we have our issues, we can plan a sprint by clicking the create sprint button, and a section for the sprint backlog appears at the top of the screen with the name of the sprint. Before adding issues to the sprint backlog, we'll add estimates to the issues by clicking an issue and adding an estimation value to the story points field.
>
> **[1:35](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/lab-cloud-company-managed?u=76281980&t=95)** For this issue, we'll estimate one story point. For add item two, two story points, and for add item three, three story points. The estimation values can be seen at the right of the issues in the backlog. So let's assume our team has decided to work on three story points in the first sprint. So we'll drag the add item one issue and the add item two issue to the sprint backlog. Now the sprint backlog has two issues and the [[Representational State Transfer (REST)|rest]] of the product backlog has one issue. If a team wants to add sub tasks to an issue to further break down the work, they can do that here. We'll click the add item one issue and use the create sub-task icon to add a sub task. Now we're ready to execute the sprint, so we can click start sprint. We can leave the default sprint name and make this a one-week sprint starting now. For the sprint goal, we'll add create the first product increment and then click start. We can see the sprint issues on our scrum board and the team can work on the issues from the sprint backlog. Under the sprint name at the top of the screen, we can also see our sprint goal displayed, create the first product increment. At any time we can click the reports tab and select the burn down chart to get an overview of our sprint. The burndown chart shows the number of starting story points, which is three, and the gray line represents a theoretical linear progression of story point completion that can be used as a general comparison
>
> **[3:09](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/lab-cloud-company-managed?u=76281980&t=189)** against the actual work done in the sprint. Let's go back to our project. Now let's simulate the execution of the sprint. We'll select the add item one A sub task, and assign it to Alana. Then we'll move it to in progress, and then to done. Jira asks if we also want to update the parent issue, we'll select update. Now Alana can complete the work of the second issue. We'll assign it to Alana, and then move the issue to in progress, and then to done. Now that we've completed the work of the sprint, we'll click complete sprint in the upper right. We're presented with a sprint report showing the burndown chart, as well as a list of the completed issues in the sprint.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scrum]] (4), [[Jira]] (3), [[Representational State Transfer (REST)|Rest]] (1)
> **Tools:** jira (3)
> **UI Navigation:** select the (3)
> **Exercise Files:** template (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)

#### [Lab: Team-managed](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/lab-team-managed?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/lab-team-managed?u=76281980&t=0)** - [Instructor] In this demo, we'll create a next-gen [[Scrum]] project, create issues in the project Backlog, create and plan a Sprint, execute the Sprint, and complete the Sprint. We're logged in as Alana Grant, the Project Administrator. We have an existing Kanban project, but, for this demo, we're going to create a new Scrum project. To do this, click the Create project button. Since Alana is not a [[Jira]] Administrator she can't create classic projects, so we select next-gen. We want this to be a Scrum project, so we need to change the template and select the Scrum template. We'll name the project projectB, choose an access level of Open, and click Create. Our Sprint board is empty since no Sprints have been planned or started yet. If we click Project settings and Features, we can see that the Backlog and Sprints are enabled, which is the default for Scrum projects. Let's also turn on Reports so we can view Sprint-related reports like the burndown chart. Let's go back to the project, and, now, let's plan a Sprint in the Backlog. We're viewing the product Backlog, which is currently empty. We can create issues directly from the Backlog, so let's create three issues for our Sprint. Now let's add work estimates to the issues. We'll click add item 1, and add an estimation value to the Story points field. For this issue we'll estimate one story point,
>
> **[1:34](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/lab-team-managed?u=76281980&t=94)** then for add item 2, two story points, and for add item 3 we'll say four story points. The story point estimates can be seen to the right of the issues in the Backlog. Let's prioritize the product Backlog. This is something the product owner typically does. For instance, add item 2 should have the highest priority, followed by add item 1 and add item 3. We're now ready to initiate our first Sprint, so we'll click Create sprint. The Sprint Backlog appears in the top half of this screen, and this is where we gather the issues for the Sprint. Let's assume our team has decided they can handle up to four story points in the first Sprint. So we'll drag add item 2 and the add item 1 issue to the Sprint Backlog in prioritized order. Now the Sprint Backlog has two issues, and the product Backlog has one issue. When we're ready to execute the Sprint, we click Start sprint. We'll leave the default Sprint name, and make this a 1 week Sprint starting now. For the Sprint goal we'll add Create the first product increment, and then click Start. Now we can see the Sprint issues, on our Scrum board, with our work estimates displayed on the cards. Under the Sprint name, at the top of the screen, we can see the Sprint goal displayed, Create the first product increment, and the team can now work on the issues from the Sprint Backlog. Let's click the Reports tab,
>
> **[3:05](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/lab-team-managed?u=76281980&t=185)** and view the Sprint burndown chart, to get an overview of our Sprint. The burndown chart shows the number of starting story points, which is three, and the gray line represents a theoretical linear progression of story point completion that can be used as a general comparison against the actual work done in the Sprint over time. Now let's go back to our project, and simulate the execution of this Sprint. We'll select add item 2 and assign it to Alana, then move it to In Progress, and then to Done. Now we'll do the same with add item 1. Now that we've completed the work of the Sprint, we'll click Complete sprint in the upper right. We'll confirm that we've completed the Sprint, and now we're ready to work on the next Sprint.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scrum]] (6), [[Jira]] (1)
> **Cross-References:** go back to (2)
> **Exercise Files:** template (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** projectb (1)
> **Tools:** jira (1)
> **UI Navigation:** select the (1)
> **Analogies:** for instance (1)


### 4. Quick Search and Basic Search

[↑ Back to Table of Contents](#table-of-contents)

#### [Quick search and basic search](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/quick-search-and-basic-search?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/quick-search-and-basic-search?u=76281980&t=1)** - [Instructor] In this video, we'll discuss Quick search and Basic search. We'll identify the ways to search in [[Jira]], use Quick search and use Basic search. In Jira, there are many ways to view a project's progress. You can use project boards, searching, which we're going to discuss here, reports, and [[Dashboards]]. There are a few ways to search in Jira. One is Quick search, which is a text search of issues, boards, and projects. Basic search, which uses user interface elements to search for issues. Advanced search, which uses a text-based search called JQL to search for issues. Filters, which are convenient saved searches. And quick filters, which limit the issues that are visible on a board. Searching is important because you can adapt your Jira experience to your team's desired process. A good search is usually going on behind the scenes of a specific view of your project. Next, we will discuss Quick search. Quick search is a global search that can search for issues, as well as other things, such as projects. Here, we see "search" in the cloud version of Jira. When you click on the Quick search,
>
> **[1:35](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/quick-search-and-basic-search?u=76281980&t=95)** you will initially be shown recent items. As you begin typing in Quick search, you will immediately begin to see results. In this case, we've entered "item," and you can see that there are three issues on our Jira site that have the [[Microsoft Word|word]] "item" in one of their text-based fields. You can use the capitalized "NOT" keyword to exclude terms. In this case, we're excluding the number one, which excludes the "add item 1" issue. You can use the capitalized "OR" keyword to search for issues containing one keyword or another. In this case, we're searching for issues with either the word "item" or "sample" in one of their text-based fields. Next, we will discuss Basic search. Basic search is done with a row of user interface elements, as shown here. In this case, we're looking at all issues, so none of the user interface elements are selective. We can limit the search. For example, here we are limiting the search to just issues in project A. Basic search also includes a text box, so you can search the fields of issues for certain values. If the field that you're interested in searching for is not shown, you can select the More dropdown and search by other fields. You can search for other fields, such as priority,
>
> **[3:09](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/quick-search-and-basic-search?u=76281980&t=189)** as we're doing here. In this case, we're searching for issues that have been updated within the last three days. You can see that Basic search makes date-based searches like these quite easy. Here's a review of what we've discussed. Quick search can search the text of issues, board names, project names, and filter names. Basic search is a user-friendly way to search for issues.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (6), [[Microsoft Word|Word]] (2), [[Dashboards]] (1)
> **Tools:** jira (6)
> **UI Navigation:** click on (1), select the (1), dropdown (1)
> **Definitions:** is a  (3)
> **Analogies:** such as (2), for example (1)
> **Env Vars:** jql (1)
> **Speakers:** - [instructor] (1)

#### [Lab: Cloud](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/lab-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/lab-cloud?u=76281980&t=0)** - [Instructor] In this demo, we will perform quick searches, perform basic searches and work with search results. We're logged in as Alana Grant, as we can see by her icon at the upper right. The search field at the top of the screen is a global quick search. If we simply click in the field, a list of recent issues and boards, projects, and filters is displayed. If we start to type all of the issues that contain the [[Microsoft Word|word]] item in any of the issues text-based fields are shown. If we then click Enter, we are brought to the search results for all issues in the site. The text that we entered is in the search box near the top. Now, let's search for item two. This returns all issues with the words item and two in all text fields. If we change this to uppercase, the same results are returned because the global search is not case sensitive when searching issue fields. We could also enter item and two. This is the same as searching for item two. If we search for item not one, all issues with the word item in the field but not the word one are returned. Notice that the add item one issue is no longer in the list of results. If we change the not to lowercase, then results with item one are returned because the word not is case sensitive and must be uppercase to be interpreted as a keyword. Otherwise it's ignored
>
> **[1:35](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/lab-cloud?u=76281980&t=95)** and the result is the same as searching for item one. Now let's go ahead and search just for item. This results page is known as the basic search page. It contains a set of dropdown lists that can help us further refine our searches. Also there's a switch to JQL link to the right. We are currently viewing issues from our projects that contain the text item. If we clear the search field, then we see all of the issues in our site. Let's find only issues in project A by using the dropdown list. The results show all the issues in project A. We can use the contains box to further limit the results. Let's enter item not one to narrow the results list. We can clear the entire search by clicking Search issues in the sidebar. And now, once again, we see all of the issues on our site. We can select the More dropdown and search for all issues that have been updated in the last five minutes.
>
> **[2:47](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/lab-cloud?u=76281980&t=167)** No issues were updated in the last five minutes, so let's try the last 30 minutes. These are the most recently updated issues. Let's click Search issues in the sidebar to clear the search again. Now let's work with some of the search results. We can click the Change view icon at the upper right to select List view, which gives us a more detailed list of the issues. We can click any column to sort by that column. And we can click the columns dropdown to change which Columns are visible. We can also drag and drop the column headers to reorder them. Selecting Columns and Restore defaults resets the column configuration. Now let's search for item. Then click the share button in the upper right to share this search with other users. We'll share this search with Ryan and add an optional note. Ryan will get an email with a search link, which he can then click to execute this search and get an up-to-date result. We can perform a bulk change to all of the issues in the search result. Let's say we want to change the assignee to Alana Grant for all of these issues. We'll click the More icon in the upper right and select bulk change issues. This brings up a bulk operation wizard. The first step is to select the issues we want to change. In this case, we will select all of them and click Next.
>
> **[4:23](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/lab-cloud?u=76281980&t=263)** Now we select the bulk action to perform. We want to change the assignee for all of the issues, so we'll select Edit issues. Other options are to move, transition, delete, watch, and stop watching issues. After clicking Next, we can describe the actual change. We will select the Change Assignee option and assign the issues to Alana Grant, and then click Next. The final step is confirmation. When we're ready, we click Confirm to perform the bulk change. After the operation is done, we see that Alana Grant is now the assignee for all of the issues. And when we go back to the board, all of the issues with item in the summary are now assigned to Alana Grant.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (4)
> **UI Navigation:** dropdown (4), select the (4), in the sidebar (2), switch to (1), drag and drop (1)
> **Cross-References:** in the last (2), go back to (1)
> **Definitions:** is a  (1), known as (1)
> **CLI Commands:** find (1)
> **Env Vars:** jql (1)
> **Speakers:** - [instructor] (1)


### 5. Jira Query Language (JQL)

[↑ Back to Table of Contents](#table-of-contents)

#### [Jira Query Language (JQL)](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/jira-query-language-jql?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/jira-query-language-jql?u=76281980&t=1)** - [Instructor] In this video, we will discuss JQL. We'll describe JQL, rank JQL using autocomplete, and use functions in JQL queries. We've seen basic search, which uses user interface elements to make searching for issues easy. With advanced search, you use text to search for issues. This text is called JQL or [[Jira]] Query Language. JQL can do two things. It can search for issues and it can order the results. We can compare basic and advanced search. Basic search uses a user-friendly interface. And queries can be quite complex. Advanced search uses JQL. And is the most powerful search method. Certain queries are only possible in advanced search. Since JQL is text-based, it can also be used in automation scripts. The easiest way to write JQL is to leverage basic search. You can perform a search using basic search. In this case, we're finding all issues of the project A project. And then you can click on the Switch to JQL or advanced link. This will bring up the same search as the basic search, but you will see the JQL. This is an easy way to obtain JQL without actually writing the query. There are two main parts of a JQL query.
>
> **[1:37](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/jira-query-language-jql?u=76281980&t=97)** Both parts are optional. The first is the search clause, which sends a subset of issues in your Jira instance. In this case, we're only selecting issues that have a project key of proj. The second main part of a JQL query is the order by clause. This orders the results. In this case, we're ordering by the created date in descending order. Meaning the most recently created issues are at the top of the results. The simplest JQL query is no search clause and no order by clause. Since the search clause is basically a filter showing a subset of the issues, no search clause means that you will see all of the issues as we see here. Since there was no order by clause either, the results are displayed in Jira's default order. Next, we will discuss autocomplete. When you are in advanced search writing a JQL query, Jira will help you write the query. Here, we begin by typing pr. And Jira will show you all of the available fields that begin with pr. These four values shown are the only valid fields for this JQL query that we're writing. To see a list of the out of the box field names in Jira, you can search for the advanced searching fields reference as shown here. Make sure that in the upper right you select the version of Jira that you're using.
>
> **[3:10](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/jira-query-language-jql?u=76281980&t=190)** In this case, we are showing the cloud version of the fields reference. A JQL search clause has a field name, followed by an operator, followed by a value. For instance, in this case, the field name is project, the operator is equals, and the value is project A. We just saw that Jira will help you autocomplete field names. It will also help you autocomplete operators based on the field that you selected. Here, we enter the project field, followed by a space. And you can see the valid list of operators for this field. If we would've typed in a different field name such as summary, you can see that the operators are different. So Jira is helping you to write the correct query. You can also combine multiple search clauses using and, or, and not in your queries. Here's an example where we are searching for issues with an assignee of the current user. And the status of the issue is in progress. Here, we are searching for issues with the status of selected for development or with the status of in progress. Another way to write this query is to use the in operator. And this will also search for all issues with a status of selected for development or in progress. Here's an example of using the not operator to find all issues that do not have a status of backlog.
>
> **[4:45](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/jira-query-language-jql?u=76281980&t=285)** Another way to write this query is to use the not equal operator. Here's a query to find all unresolved issues in all projects, except sample A. You can see that this query uses both the and and the not keywords. To learn more about the operators, you can search for the advanced searching operators reference. Once you have entered the field name, the operator, and the value you can execute the query. In this case, we are seeing the issues from the project A project. If we want to, we could click on the basic link. And this will show the associated query in the basic search. If the advanced query is too complicated, the basic search might not be able to be shown. Next, we will discuss functions. We saw that search clauses have a basic structure of field name, followed by operator, followed by field value. In this case, we're using a hard-coded field value of project A. Instead of a hard-coded value, you can use a built-in function. In this case, we are searching for issues where the assignee is set to the current user. The advantage of using this function is that this query can be used by any user. To learn more about particular functions, you can search for the advanced searching functions reference.
>
> **[6:21](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/jira-query-language-jql?u=76281980&t=381)** There are many time-based functions. For example, in this query, we're finding all issues created since the start of today. This uses the start of day function as the field value. You can also use time unit qualifiers to specify specific time units. In this query, we're searching for all issues created in the last two days. In this query, we're searching for all issues created since the start of the day, two days ago. This uses a combination of the start of day function as well as a time unit qualifier inside the parentheses for the function. This query searches for issues created since the 15th of this month. It uses the start of month function as well as the time unit qualifier in the parentheses. Here's a review of what we've discussed. A JQL query is behind all basic and advanced searches. Leverage basic queries and autocomplete to simplify creating JQL queries. JQL queries may select subsets of issues and may order query results. Functions can be used to avoid hard-coding values in a search clause. Time unit qualifiers can be used with date-related values.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (9)
> **Env Vars:** jql (21)
> **Tools:** jira (9)
> **CLI Commands:** make (2), find (2)
> **Definitions:** is called (1), is an  (1), means that (1)
> **Analogies:** for instance (1), such as (1), for example (1)
> **UI Navigation:** switch to (1), click on (1)
> **Cross-References:** in the last (1)

#### [Lab: Cloud](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/lab-cloud-14263523?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/lab-cloud-14263523?u=76281980&t=0)** - [Instructor] In this demo, we'll create a basic search and view the JQL query. Create JQL queries with the help of auto-complete and column sorting and use functions as values. We are logged in as Alana Grant and we'll click the search field and press enter, which brings us to the global search page. Now we'll select all of the issues from our project, A Project and click the switch to JQL link. This shows us the JQL query associated with the basic search. This is an easy way to obtain the JQL. Just execute a basic search, switch to JQL, and you can see the JQL query. If we sort one of the columns, we can see that the order by clause is automatically added to the JQL. Next we'll create a JQL search from scratch with the help of auto-complete. If we begin by typing the letter P, we can see a list of all valid fields that begin with P. These are the only fields that would be valid in JQL syntax. Let's select project and press space. Now we see a list of operators that are valid for the project field. We will select equals and press space. And now we see a list of projects in our site. Let's select Project A and now the query is complete and the search results are returned. So with the assistance of auto-complete, it's very easy to create JQL queries.
>
> **[1:35](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-2-lean-and-agile-processes/lab-cloud-14263523?u=76281980&t=95)** We can also use functions as values. If we type assignee equals, we can see a list of valid users along with the function current user, which we'll select. We are currently logged in as Alana Grant, so the search returns all issues assigned to Alana Grant. And finally, let's clear the search and search for issues using a date related function. If we type created less than, and then select the start of day function, the search returns all issues that were created before today and as we can see, there are none.

> [!info]- Semantic Content
>
> **Env Vars:** jql (11)
> **UI Navigation:** switch to (2), select the (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Atlassian University]]

## Skills Covered

- Jira
- Agile Project Management

## Path Context

### In [[Atlassian Agile Project Management Professional Certificate]]
← [[Agile Project Management with Jira Cloud- 1 Projects, Boards, and Issues]] | **4 of 6** | [[Agile Project Management with Jira Cloud- 3 Advanced Topics]] →

## Part of

- [[Atlassian Agile Project Management Professional Certificate]]

## Appears In

- [[Atlassian Agile Project Management Professional Certificate]]

## Related Courses

_Courses sharing skills:_

- [[Agile Project Management with Jira Cloud- 3 Advanced Topics]] — Agile Project Management, Jira
- [[Agile Project Management with Jira Cloud- 1 Projects, Boards, and Issues]] — Agile Project Management, Jira
- [[Jira Administration- Automation]] — Jira
- [[Jira- Managing Custom Workflows]] — Jira
- [[Jira- Advanced Administration]] — Jira

---

[↑ Back to top](#)