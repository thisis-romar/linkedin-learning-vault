---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: agile-project-management-with-jira-cloud-3-advanced-topics
url: "https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics"
duration_minutes: 52
duration: 52m
level: Intermediate
updated: 10/12/2021
learners: 915660
skills:
  - Jira
  - Agile Project Management
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQGuiPKvTS5enQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1633712631003?e=2147483647&amp;v=beta&amp;t=ySDkZBEM7o4Y3znddh9P1JZnvQzKszEqw6ynjYdrTwo"
linkedin_topic: DevOps
learning_paths:
  - '[[Atlassian Agile Project Management Professional Certificate]]'
prev_courses:
  - '[[Agile Project Management with Jira Cloud- 2 Lean and Agile Processes]]'
next_courses:
  - '[[Mistakes to Avoid in Agile Project Management]]'
path_nav: '[{"path":"Atlassian Agile Project Management Professional Certificate","position":5,"total":6,"prev":"Agile Project Management with Jira Cloud- 2 Lean and Agile Processes","next":"Mistakes to Avoid in Agile Project Management"}]'
path_count: 1
tags:
  - course
  - topic/devops
  - skill/jira
  - skill/agile-project-management
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Agile%20Project%20Management%20with%20Jira%20Cloud-%203%20Advanced%20Topics.md)

![Agile Project Management with Jira Cloud: 3 Advanced Topics](https://media.licdn.com/dms/image/v2/C560DAQGuiPKvTS5enQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1633712631003?e=2147483647&amp;v=beta&amp;t=ySDkZBEM7o4Y3znddh9P1JZnvQzKszEqw6ynjYdrTwo)

# Agile Project Management with Jira Cloud: 3 Advanced Topics

> This third and final course in the Agile Project Management with Jira Cloud series covers advanced topics like how to use filters, identify and classify epics, and how to use dashboards. After you explore these new topics, see how to put it all together: review the Jira tools and workflows, and use them to create classic and next-gen kanban projects in Jira.This course is part of a Professional Ce

> [LinkedIn Learning](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics) | 52m | Intermediate | 916K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Course overview](#course-overview)
- [**1. Filters**](#1-filters) (3 videos)
  - [Filters](#filters)
  - [Lab: Cloud company-managed](#lab-cloud-company-managed)
  - [Lab: Cloud team-managed](#lab-cloud-team-managed)
- [**2. Epics**](#2-epics) (3 videos)
  - [Epics](#epics)
  - [Lab: Cloud company-managed](#lab-cloud-company-managed)
  - [Lab: Cloud team-managed](#lab-cloud-team-managed)
- [**3. Dashboards**](#3-dashboards) (2 videos)
  - [Dashboards](#dashboards)
  - [Lab: Cloud](#lab-cloud)
- [**4. Putting It All Together**](#4-putting-it-all-together) (3 videos)
  - [Putting it all together](#putting-it-all-together)
  - [Lab: Cloud company-managed](#lab-cloud-company-managed)
  - [Lab: Cloud team-managed](#lab-cloud-team-managed)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Course overview](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/course-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/course-overview?u=76281980&t=0)** - [Instructor] Welcome to Course Three of the [[Agile Development|Agile]] Project Management with [[Jira]] Cloud Edition course series. At [[Atlassian]] University, our mission is to help Atlassian users like you develop new skills, improve your team's work, and advance your professional career. In this series, we will be learning how to use lean and agile principles, help to identify different agile methodologies, and how to configure Jira to match your team's processes. Now let's take a look at what you'll be learning in course three. In this course, you learn how to use filters, identify and classify epics, and how to use [[Dashboards]]. This course does not assume you have any existing or prior knowledge of Jira and agile methods. Although, some existing knowledge would be helpful. The topics we will cover in this course are filters, epics, dashboards, and then putting it all together, which is a summary of all three courses in this series. The approximate time for each topic includes the lecture and any demos if added. Get started with Jira Cloud in a few simple steps. First, go to the Atlassian homepage at www.[atlassian.com](https://atlassian.com). Click the blue Try Now button at the top-right of the page. Scroll down to the Plan and Track section on the left side of the next page. Click the light gray Try Cloud button under Jira Software. Register and download from the signup page. When using Jira Cloud,
>
> **[1:34](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/course-overview?u=76281980&t=94)** you can choose between Classic projects and Next-Gen projects. Next-Gen projects are simpler to configure. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (6), [[Agile Development|Agile]] (4), [[Atlassian]] (4), [[Dashboards]] (2)
> **Tools:** jira (6)
> **UI Navigation:** go to (1), scroll down (1)
> **Prerequisites:** configure (2)
> **URLs:** [atlassian.com](https://atlassian.com) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 1. Filters

[↑ Back to Table of Contents](#table-of-contents)

#### [Filters](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/filters?u=76281980&t=1)** - [Instructor] In this video, we will discuss filters. We will create filters, describe board filters, and use quick filters. You can see here on the left that there's a list of tabs known as filters. Filters are saved searches to allow you to quickly execute a search. In this case, we've selected the My Open Issues filter. You can create your own filter by executing a search and then clicking Save As. You will then be asked to name your filter. Here, we're calling it My In Progress. Once you've created the filter, it will show in the sidebar under the starred category. You can click on the details link to the right of the filter name to view and edit the details of the filter. In the filter details, you can click on the Edit Permissions link to show the dialogue in the upper right. Here, you can specify who has access to the filter. In this case, we're keeping it private. If you click on the New Subscription link, you'll see the dialogue in the lower right, subscriptions, email recipients, the query results at a rate specified in the subscription. The recipients can be specific users or members of [[Jira]] groups. In this case, this is a personal subscription. And the query results will be mailed once per day. You can also click on View All Filters in the sidebar to see your filter.
>
> **[1:34](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/filters?u=76281980&t=94)** You can click on the more icon to the right of the filter to change [[Metadata]] related to the filter. You can select your filter and change the search. You will then see that your filter has been edited and you can click Save to save the changes. Next, we will discuss board filters. Every board has a filter that defines the issues shown on the board. In board settings, you can edit the board's filter allowing you to change which issues are shown on the board. If you create a board, you must assign it to a new or existing filter. Here, you can see the query used behind the scenes for a board. It's selecting all issues with the project key of PRJCT and ordering them by their rank. A board filter can be used to show issues from multiple projects on a single board. On the left under the filter query, you can see that the JQL includes issues from projects with the key of PRJCT or PRJ. When we view the board as shown on the right, we can see that there's issues from multiple projects. Next, we will discuss quick filters. Quick filters are a way to further filter issues displayed on a board. By default, all of the issues that match the board filter are displayed. Here, you can see that there are six quick filters.
>
> **[3:09](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/filters?u=76281980&t=189)** If you click on a user's icon, you will see only issues assigned to them. You could also click on the Only My Issues or Recently Updated quick filters. Notice that the board also contains a search box so you can use a text-based search to further limit the issues shown on the board. Quick filters can be used to refine reports. Here for a cumulative flow diagram, we've selected the refine report dropdown. You can see that you can select a quick filter to further refine the report. In this case, we will see the older issues that are not complete. Here's a review of what we've discussed in this video. Filters are saved searches that can be exposed through user interface elements. Every board has a filter that defines the issues shown on the board. Quick filters are saved searches that are used to further limit the issues displayed on a board or in reports.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (1), [[Metadata]] (1)
> **UI Navigation:** click on (7), in the sidebar (2), dropdown (1)
> **Env Vars:** prjct (2), jql (1), prj (1)
> **Definitions:** known as (1), is a  (1)
> **Tools:** jira (1)
> **Speakers:** - [instructor] (1)

#### [Lab: Cloud company-managed](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/lab-cloud-company-managed?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/lab-cloud-company-managed?u=76281980&t=1)** - [Instructor] In this demo, we'll explore default filter queries, create a starred filter, explore and create quick filters, use a quick filter to refine a report, and explore an existing board filter. We're logged in as Alana Grant. We'll click the search field and press enter to go to the global search page. In the sidebar, some of the out of the box filters are listed. These are basically convenient one-click searches. For example, we can click My Open Issues for a list of all issues assigned to Alana that aren't resolved. If we click Reported By Me, all of the issues from all projects that were reported by Alana Grant are returned. Now let's click Switch to JQL to see the actual query for this filter. Similarly, you can click the other filters and see their associated query. Next, we'll create a filter. Let's create a query that searches for all issues with the status of in progress that are assigned to the current user. We'll do this in basic search. Status, In Progress. Assignee, Current User. When we click Search, we see there are currently two issues that match this search criteria. To create the filter, click Save As at the top. We'll name the filter My In Progress and click Submit. Our filter is added to the sidebar
>
> **[1:36](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/lab-cloud-company-managed?u=76281980&t=96)** where it can be selected just like any of the other filters. Let's go back to our project and add another issue to the In Progress column. Now we can click the filter menu and select our My In Progress filter. Three issues that are in progress and assigned to Alana are returned. We can click the Details link at the top to see that this filter is owned by Alana Grant, is visible only to Alana, and the filter has no subscriptions. We can also click View All Filters at the bottom of the sidebar to see the My In Progress filter. If we click the More icon and select Edit, we can change the access so Alana can share this filter with more users. Next, we'll discuss quick filters. Quick filters are related to boards. First, we'll go to our projectA board. There are several ways to filter the issues on a board. We can perform a full text search. Only issues with the [[Microsoft Word|word]] item are shown. We can also click a user icon to display only the issues assigned to that user. And we can also use quick filters by clicking the Only My Issues quick filter or the recently updated quick filter. Click Clear All to clear all the filters. Now let's add a quick filter. To do this, click the More icon and select Board Settings, and then select Quick Filters.
>
> **[3:12](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/lab-cloud-company-managed?u=76281980&t=192)** We'll name our filter Stale Issues. And for the JQL, updated less than one day ago. And status does not equal done. So this query finds all issues that are not done and have not been updated in the last day. Click Add and our Stale Issues quick filter is added to the list. When we go back to the board, our quick filter is available along with the other quick filters. When we select it, we can see that all of our issues are either done or they've been updated in the previous day. Next, we'll use quick filters to refine a report. Click the reports tab for this project and select the Cumulative Flow Diagram. Now select the Refine Report dropdown. Here, you can remove statuses from the report. Let's remove the backlog status. Click Apply and the orange band representing the backlog is no longer visible in the chart. We can also see our quick filters here and can refine the report simply by clicking one of the quick filters such as Only My Issues. Now the cumulative flow diagram only applies to Alana's issues. Next, we'll explore a board filter. Let's go to Board Settings, and under the General tab, we can see the saved filter is filter for project board, and there's a filter query that's used to identify
>
> **[4:46](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/lab-cloud-company-managed?u=76281980&t=286)** which issues to show on the board. This query is selecting all issues where the project is projectA, and then ordering the results. There's also a sub-filter at the bottom that further limits which issues are shown on the board. If we want to edit our board filter, we can click Edit Filter Query, and we're brought to a search page for this filter where we can modify and resave the filter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **UI Navigation:** go to (3), select the (2), in the sidebar (1), switch to (1), dropdown (1)
> **Cross-References:** go back to (2), in the last (1)
> **Analogies:** for example (1), just like (1), such as (1)
> **Code Identifiers:** projecta (2)
> **Env Vars:** jql (2)
> **Speakers:** - [instructor] (1)

#### [Lab: Cloud team-managed](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/lab-cloud-team-managed-14285308?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/lab-cloud-team-managed-14285308?u=76281980&t=0)** - [Instructor] In this demo, we'll explore default filter queries, create a starred filter, and filter the project board. We're logged in as Alana Grant. We'll click in the search field and press enter to go to the global search page. In the sidebar, some of the out of the box filters are listed. These are basically convenient one-click searches. For instance, we can click My Open Issues, or a list of all issues assigned to Alana that aren't resolved. If we click Reported By Me, all of the issues from all projects that were reported by Alana Grant are returned. Now let's click Switch to JQL to see the actual query for this filter. Similarly, you can click the other filters and see their associated query. Next, we'll create a filter. Let's create a query that searches for all issues with the status of in progress and are assigned to the current user. We'll do this in basic search. The status is in progress and the assignee is current user. And now we're shown all the issues with the status of in progress that are assigned to the current user, which in this case is Alana Grant. We see there are currently two issues that match this search criteria. To create the filter, click Save As at the top. We'll name this filter My In Progress and click Submit. Our filter is added to the sidebar in the starred section
>
> **[1:35](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/lab-cloud-team-managed-14285308?u=76281980&t=95)** where it can be selected just like any of the other filters. Let's go back to our project and add another issue to the In Progress column. Now we can click the filter menu and select our My In Progress filter. The three issues that are in progress and assigned to Alana are returned. We can click the Details link at the top and see that this filter is owned by Alana Grant, is visible only to Alana, and the filter has no subscriptions. We can also click View All Filters at the bottom of the sidebar to see the My In Progress filter. If we click the more icon and select Edit, we can change the name of the filter, add a description and also change the access, which means Alana can share this filter with other users. Let's click the filter to see the results again. We can edit the filter. First, let's switch to list view and view the JQL. Then, we'll click a column header to sort the results. Notice the order by clause is updated in the JQL. There's an indicator at the top of the screen that the filter has been edited, so we'll save our changes. Now let's look at how we can filter a board. Let's return to our board. There are several ways to filter the issues on a board. We can perform a full text search. For example, only issues with the [[Microsoft Word|word]] item are shown. We can also click a user icon
>
> **[3:09](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/lab-cloud-team-managed-14285308?u=76281980&t=189)** to display only the issues assigned to that user. Clicking Clear Filters restores the board to the default view. The dropdowns enable us to filter by other attributes that are present on the board. For example, we can filter by issue type. Let's clear the filter and we can filter by label.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **UI Navigation:** switch to (2), go to (1), in the sidebar (1)
> **Analogies:** for example (2), for instance (1), just like (1)
> **Env Vars:** jql (3)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)


### 2. Epics

[↑ Back to Table of Contents](#table-of-contents)

#### [Epics](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/epics?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/epics?u=76281980&t=1)** - [Instructor] In this video, we will discuss epics. We will describe epics, work with epics, and manage epics in the backlog. Here's the hierarchy of issue types in [[Jira]]. An epic is unique in that it can contain other issue types, such as story, tasks, and bugs. Stories, tasks, and bugs can contain subtasks. So this defines a hierarchy of three levels. An epic represents a large issue. Epics can contain other issues, such as stories, tasks, and bugs. Child issues of an epic can span multiple iterations, projects, teams, and boards. This is a unique feature of epics. When you first create an epic, it can be a single issue that represents a placeholder for many stories. As the team gets closer to working on the epic, they can add the child issues to fill in the details. Epics are used because they are a way to organize the work items. They are also used because they can span multiple iterations and projects. Epics can simplify the backlog because you can represent a large amount of work as one issue at first. Next, we will discuss working with epics. To create an epic, you can create an issue and select the issue type of epic. You will then name the epic as we've done here.
>
> **[1:37](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/epics?u=76281980&t=97)** To view the issues of an epic, you can open the epic issues details and you will see a list of issues in the epic. When you are creating issues that will be children of the epic, you can use the epic link field to select the parent epic. Here, we are creating an issue and linking it to the parent epic named feature A. If you have an existing issue and you want to add it to an epic, you can use the epic link field and select the parent epic. All issues of an epic have the same epic link field pointing to the parent epic issue. You can search for all of the issues of the epic using JQL. You want to search for all issues within an epic link field equal to the parent epic issue. Here we are searching for all of the issues of the feature A epic. When issues have been added to an epic, you will see the epic label in the cards on the project board. You can create swimlanes by epic on the project board. In this case, we have a swimlane for the feature A epic. All of the issues without epics are below this swimlane. Next, we will discuss epics in the backlog. If you navigate to the backlog tab of a [[Scrum]] project, you can create epics. Click on the create epic link to begin creating the epic. You will then be able to name the epic and provide a summary.
>
> **[3:12](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/epics?u=76281980&t=192)** Once you have created an epic, you can see the epics panel in the backlog. This is a handy way to see the current state of the epic. For example, you can see how many of the issues have been completed. You can also create issues in the epic right from the backlog. When the issues of the epic are all done, you can mark the epic itself as done. Here, we are selecting the dropdown menu associated with the epic and selecting mark as done. Once the epic is marked as done, it will no longer show up in the backlog. An epic report shows the details of the epic. You can see how many of the story points and issues have been completed. You can also see a list of the issues, as well as their current status. If your epic spans multiple sprints, you can use the epic burndown chart to see the progress for each sprint. Here's a review of what we've discussed. An epic is a large issue type that may contain other issues. The epic link field is used to associate issues with an epic. Epics can be shown on boards or in backlogs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (1), [[Scrum]] (1)
> **UI Navigation:** select the (3), open the (1), navigate to (1), click on (1), dropdown (1)
> **Definitions:** is a  (3)
> **Analogies:** such as (2), for example (1)
> **Env Vars:** jql (1)
> **Tools:** jira (1)
> **Speakers:** - [instructor] (1)

#### [Lab: Cloud company-managed](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/lab-cloud-company-managed-14285306?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/lab-cloud-company-managed-14285306?u=76281980&t=1)** - [Instructor] In this demo, you will create an epic using a roadmap and by creating an issue, you will add issues to an epic, view swimlanes by epic, view an epic in the Kanban backlog, and complete an epic. Here, we are logged in to our project A classic Kanban project. We're logged in as Alana Grant who is a project administrator for this project. We're viewing our Kanban board and you can see that the first column is selected for development. We can add the backlog column back to the board so that when we create issues, we can see them. We go to board settings, columns, and you can see our Kanban backlog status is in the Kanban backlog column here. So we'll drag that to the backlog column on the board and go back to board and now we can see our backlog column. Next, we will enable the roadmap feature in our project. We can go to board settings, click on roadmap and enable the roadmap. We go back to the board. Now you can see the link to the roadmap. We'll click on roadmap. Here, you can see a visual representation of time. In this case, month. We could change it to weeks in the lower right or to quarters, but we'll stick with months. We'll click on create epic to create an epic in our project.
>
> **[1:38](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/lab-cloud-company-managed-14285306?u=76281980&t=98)** We will call this Big Feature A. You can see that [[Jira]] has assigned a starting date and has not assigned an end date because it's fuzzy here. We can drag to change the start date. And if we wanted to assign a specific due date, we can set that as well. When you click on the epic bar, you can see issue details. You can click on the color of the epic to change it. Here, we will change it to orange. Now we can create a second epic by clicking the create epic link, but another way we can do that is to use the create button at the top. Here, we will create an issue of type epic and we'll call this Big Feature B. Click create. You can see that no start date or due date has been assigned, and you can drag this epic to start later. You can see that roadmaps are a great way to create and visualize some of the big work items for your project. It's also quite easy to change details of the roadmap as we've seen. If Big Feature B is dependent on Big Feature A finishing, we can create a dependency between these two epics. We do this by hovering over the circle and dragging to the second epic. Now you can see a line in the roadmap representing a dependency. We can click on that and you can see that Big Feature B is blocked by Big Feature A.
>
> **[3:13](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/lab-cloud-company-managed-14285306?u=76281980&t=193)** If you want, you can remove that link by clicking here, but we'll leave that dependency. Now, if we click on our Kanban board, we can see that we have two epic issues in our backlog. They behave like other issues on the board, so you can move the Big Feature A epic to selected for development for example. Next, we will add issues to an epic. One way we can do this is by clicking on it on the board and opening the issue details and clicking create issue in epic. We will create a story with a summary of add epic A story 1 and click create. We can close the details and we see a new issue on the board and it includes a label of the epic that it belongs to. We can also move this issue to another column. We can click on roadmap and we can click on the greater than sign to show the children of the epic. Here, you can see the story that we just created. You can also see that it is in the selected for development state. We can create stories right in the roadmap by highlighting the epic name, clicking plus, changing it to a story and assigning it a summary of add epic A story 2. So now we can see that in our roadmap, we can see the epics, as well as the dependencies, if there are any,
>
> **[4:45](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/lab-cloud-company-managed-14285306?u=76281980&t=285)** and the stories that are children of the epics, as well as their workflow status. The line under the epic name represents the progress of the issues in the epic. We can click on one of the stories, change it to done, and you will see that the epic is now 50% complete. So that's another nice visual indicator of the status of the epic. Next, we will view swimlanes by epic. We click on our Kanban board, go to board settings, swimlanes, and we want to base our swimlanes on epics. Then we do that, go back to the board. You can now see that there is a swimlane for the Big Feature A epic. If we have other issues, they will show in a different swimlane. So let's create another issue of type story.
>
> **[5:50](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/lab-cloud-company-managed-14285306?u=76281980&t=350)** And here, you can see the swimlane containing issues without epics and our brand new story. Swimlanes are a horizontal grouping of issues by some characteristic. In this case, the characteristic is by epic. This swimlane, all of the issues are children of the same epic. Next, we will view an epic in the Kanban backlog. We go to board settings, columns, and we can turn on the Kanban backlog by dragging the backlog status from the backlog column on the board to the Kanban backlog section. You go back to the board. Now you see the backlog column is removed from the board and we have a backlog link in the sidebar. We also want to show the epics panel in the backlog, so we will turn on the epics panel here. We go back to the board. Now you can see that the backlog column is no longer on the board and there is a backlog link in the sidebar. Also notice that the cards for the epic themselves are no longer on the board. They are managed in the backlog. Let's click on the backlog tab. And here, we see a vertical epics link. We can click on that to show the epics panel. Here, you can see the two epics that we created. You can see that the Big Feature A epic is half complete.
>
> **[7:25](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/lab-cloud-company-managed-14285306?u=76281980&t=445)** You can click on the greater than sign to show more information. There's two issues. One of them is completed. Notice that you can create issues in the epic, view linked pages, as well as see an indicator of the progress of the epic. You can click on the dropdown and change the color of the epic, edit its name, view epic details, and mark the epic as done. Finally, let's mark an epic as complete. If we go to our Kanban board, you can see that only one of the issues of the Big Feature A epic is shown and this is because it's in the backlog in our case. So we can click on the backlog. We see our add epic A story 2 story, and we can drag that to the selected for development column. We can then go back to our board and we see our story. We can drag that to the done column. So now both of the stories and the Big Feature A epic are done. We can go to the issue navigator for the project. This is under issues in the sidebar. We can see our Big Feature A epic here. We can click on it to view its details, and we can change the status of the epic itself to done. We can go back to the backlog and now you can see that the Big Feature A epic has two issues and they are completed. We can click on the dropdown and click mark as done.
>
> **[9:02](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/lab-cloud-company-managed-14285306?u=76281980&t=542)** You'll receive a message saying that the epic will no longer be shown in the epics panel. Click confirm and you can see that our epic is no longer in the epics panel. You can click on the issues link and still see the epic and click on that and you can view its details. You can see that all of the stories of the epic are done and the epic itself has been marked as done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (1)
> **UI Navigation:** click on (20), go to (6), in the sidebar (3), dropdown (2)
> **Cross-References:** go back to (7)
> **Definitions:** is a  (3)
> **Tools:** jira (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Lab: Cloud team-managed](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/lab-cloud-team-managed-14289194?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/lab-cloud-team-managed-14289194?u=76281980&t=0)** - [Instructor] In this demo, we'll create an epic using a roadmap, view swim lanes by epic, add new and existing issues to an epic, and complete an epic. We're logged in as Alana Grant, and we'll go to our projectA project, which is a classic Kanban project. For this demo, we'll turn off the backlog feature. Click Project Settings, Features, and Turn Off the backlog. When we go back to the board, we can see all of the issues on the board again, including in the To Do column. To create an epic, let's click Roadmap in the sidebar to view the project roadmap. Roadmaps are a great way to plan the work of a project. It connects the strategy of the company to the individual work of the issues. We'll create an epic by giving it a name. We'll call it Big Feature A. The purple bar represents the plan start and end of the epic. We can drag the edges to set specific dates. Click the epic to view its details. To change the color of the epic, click the square beside the epic name and pick a new color. We can add issues to the epic directly from the details by clicking the Add Child Issue icon, and simply typing a name for the issue, and we'll add a second issue. When we returned to the board, we see that the issues we just created contain the epic name, Big Feature A, on their card.
>
> **[1:38](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/lab-cloud-team-managed-14289194?u=76281980&t=98)** To make it even easier to identify issues that belong to the epic, open the group by dropdown and select Epic to create swim lanes grouped by epic. We now see the Big Feature A epic and its issues at the top while the other issues without epics are in the lower swim lane. We can also create epic simply by clicking the Create button. We change the type to epic. We'll name it Big Feature B and click Create. When we go back to the roadmap, we see our new Big Feature B epic on the roadmap as well. We can also add existing issues to an epic. Let's click Big Feature B to view its details and click the Add Child Issue icon. Now, if we click Choose an Existing Issue, we can select from issues that have already been created, then click Add. When we go back to the board, we see our two epics and their child issues grouped into swim lanes. Now let's complete the Big Feature A epic. We'll move the two child issues to Done. If we click the epic to view its details, we see the child issues are done so we can change the status of the epic itself to Done. If we go back to the roadmap, the Big Feature A epic is marked as done on the roadmap.

> [!info]- Semantic Content
>
> **Cross-References:** go back to (4)
> **UI Navigation:** go to (1), in the sidebar (1), open the (1), dropdown (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** projecta (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Dashboards

[↑ Back to Table of Contents](#table-of-contents)

#### [Dashboards](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/dashboards?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/dashboards?u=76281980&t=1)** - [Presenter] In this video, we will discuss [[Dashboards]]. We will describe dashboards, configure a dashboard, and display a dashboard as a wallboard. We've seen ways of visualizing work in [[Jira]]. This includes boards, search, and reports. Here, we will discuss dashboards. A dashboard is a configurable view of the work of one or more of the projects. These dashboards can be personal or shared with the team, and dashboards are composed of gadgets. Here, we see a dashboard with four gadgets, a sprint health gadget, a sprint burndown gadget, an activity stream, and an "assigned to me" gadget. You can see buttons to the upper right, allowing you to edit the dashboard. Gadgets fall into one of several categories. You can display the work of JIRA issues. You can display charts, you can display gadgets that are optimized for wallboards as well as other gadgets. You can go to the [[Atlassian]] marketplace, select the "Dashboard gadgets" dropdown, and see more gadgets that you can add to dashboards. To add a gadget to a dashboard, you click the "Add gadget" button, and then you select the gadget from the list that's shown. Once you've added a gadget to the dashboard, you can select "Edit" from the More menu for the gadget. Here we are editing the sprint health gadget,
>
> **[1:37](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/dashboards?u=76281980&t=97)** and we're specifying which sprint board we want the gadget to show. This dashboard is currently not shared, but you can share it with other team members using the Add Shares section of this dialogue. Once you've created a dashboard, you can select "View as wallboard," and this will display the dashboard in a wallboard friendly manner. For instance, this can be shown on a TV in a room. This acts as an information radiator for the team, improving the team's shared understanding of the projects. Here's a review of what we've discussed. Dashboards display the work of the projects. Dashboards can be shared or used personally. Gadgets display a portion of a dashboard. Dashboards can be shown as a wallboard to radiate information.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dashboards]] (9), [[Jira]] (2), [[Atlassian]] (1)
> **UI Navigation:** select the (2), go to (1), dropdown (1)
> **Env Vars:** jira (2)
> **Tools:** jira (2)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [presenter] (1)

#### [Lab: Cloud](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/lab-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/lab-cloud?u=76281980&t=0)** - [Instructor] In this demo, we'll explore the default dashboard, create a dashboard and view the dashboard as a wallboard. From the dashboard's menu, we can view all [[Dashboards]]. Let's select the default dashboard. Each rectangular display area contains a different gadget. On this dashboard, the gadgets are displaying projects, issues assigned to me and the current activity stream. We can create our own dashboard by clicking on the more icon and can choose to copy the current dashboard as a starting point. We'll name our copy Alana's Dashboard. Notice that currently the dashboard is not shared, but you can share it with a group, the project, or with everyone. After clicking Save, we are brought to Alana's Dashboard. We can remove a gadget by clicking the more icon in the upper right of a gadget and selecting Delete. And let's remove another gadget. Now, we'll click Add a Gadget. Click Load All Gadgets to see the entire list of available gadgets. Let's scroll down and select the Sprint Health Gadget. Click Add Gadget and click Close. We need to configure the gadget. This gadget will show the health of the current sprint as indicated in the sprint field as next sprint due. This is what we want. So we can simply click Save.
>
> **[1:34](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/lab-cloud?u=76281980&t=94)** The gadget reports there are no currently active sprints, so let's start a new sprint. Let's select a [[Scrum]] project and go to the backlog and we'll just quickly start a sprint.
>
> **[1:55](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/lab-cloud?u=76281980&t=115)** Now we have a sprint board and when we go back to our dashboard, the Sprint Health Gadget shows information about the sprint. Let's click Add Gadget to add another gadget to our dashboard and let's select the Sprint Burndown Gadget. Click Add Gadget and Close. To configure the gadget, we again select the same project and click Save. Now our dashboard contains a burndown chart for our sprint. Now let's view our dashboard as a wallboard. This is a great way to radiate the current state of the project to your team members. Click the more icon and select View as Wallboard. This causes the gadgets to be shown in a nice displayable format. If there are more than two gadgets, they rotate through the display. Click the browser's back button to return to the dashboard. To customize the wallboard, click the more icon and select Setup Wallboard Slideshow. We can select which dashboards to show if there are more than one, the transitions, and how fast we want to change the gadgets. Once we've made our change, we can click More and select View Wallboard Slideshow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dashboards]] (2), [[Scrum]] (1)
> **UI Navigation:** select the (4), scroll down (1), go to (1)
> **Prerequisites:** configure (2), setup (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Putting It All Together

[↑ Back to Table of Contents](#table-of-contents)

#### [Putting it all together](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/putting-it-all-together?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/putting-it-all-together?u=76281980&t=1)** - [Instructor] This video discusses putting it all together. We will perform a quick course review, take a look at the [[Jira]] family, and then wrap up the course. Here are the combined lean and [[Agile Development|agile]] principles that we discussed. It's important that you, your team, and your entire organization embody these principles to be effective. Having these principles, you can choose an agile methodology, your framework, as well as the tools to help you implement these principles. We saw that an agile team is continuously changing and improving, and you want to understand Jira well enough to configure it to match your team's processes. Jira is designed to be configurable for this very purpose. Next, we will discuss the Jira family. In this course, we have mostly worked with Jira Software. Jira Core is a subset of Jira Software, and Jira Service Management is service desk software for IT teams. Jira Core is used for business applications, such as onboarding employees. For example, it can be used to manage the onboarding process as well as track the progress for each employee. There are many other ways that teams can use Jira Core. Jira Software is unique in that it has the Kanban and [[Scrum]] projects. It also has the integration with [[Version Control]] and build systems. However, many teams that are not software teams
>
> **[1:35](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/putting-it-all-together?u=76281980&t=95)** also use Jira Software to manage their projects. Jira Service Desk is used to manage customer requests. There's a customer portal showing all of the requests, a knowledge base that helps the customers to answer their own questions. There's customer communication as the request is being worked on and the agents handling the requests see the requests as queues. If there's some capability that is not in Jira out of the box, you can check the [[Atlassian]] Marketplace. This is an ecosystem of companies who provide extensions to Jira. Example extensions include graphic extensions, calendars, and time tracking extensions. You can navigate to [atlassian.com/certification](https://atlassian.com/certification) to learn about Atlassian Certifications. Atlassian University has a marketplace app that places training right inside of your Jira instance. Team members will see a training link inside of the product containing interactive tutorials. Here are references that you can use to learn more about Jira and Atlassian. The Atlassian Community is quite strong and you are encouraged to join your local Atlassian Community events group. Congratulations, you've completed this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (17), [[Atlassian]] (7), [[Agile Development|Agile]] (3), [[Scrum]] (1), [[Version Control]] (1)
> **Tools:** jira (17)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** such as (1), for example (1)
> **URLs:** [atlassian.com](https://atlassian.com) (1)
> **Cross-References:** we discussed (1)
> **UI Navigation:** navigate to (1)
> **Prerequisites:** configure (1)

#### [Lab: Cloud company-managed](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/lab-cloud-company-managed-14287210?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/lab-cloud-company-managed-14287210?u=76281980&t=0)** - [Instructor] In this demonstration, we'll create a classic project that uses a lot of what we've learned in this course. We're logged in as a [[Jira]] Administrator. Let's click the Create project dropdown and create a Classic project. We'll create a Kanban project and name it projectFinal. Let's assign Alana Grant as the Project Administrator by going to Project settings, then People, and clicking Add people. We're adding Alana to the administrator's role so she can be a Project Administrator in this project. Now let's log out as the Jira Administrator and log in as Alana. Now we're logged in as Alana, and she can see the project called final project, so we'll click on it. The team has decided they would like a work in progress limit of two in the In Progress column. To configure this, we select Board settings, Columns, and for the In Progress column we set the maximum level to two. Returning to the board, we see the max two indicator. Let's create some issues to test it. Now, if we drag three issues to the In Progress column, it will highlight in red indicating there's too much work in the progress. Next, we'll separate the Backlog from the board.
>
> **[1:35](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/lab-cloud-company-managed-14287210?u=76281980&t=95)** To do this, go to Board settings, Columns, and drag the Backlog status to the Kanban Backlog. Click Back to board, and now we see a separate Backlog tab in the sidebar, and there's no Backlog column on the board. Next, the team has decided they need more steps in this workflow. Instead of an In Progress column, they would like columns for analyze, build, and verify. To do this, we select Board settings, Columns. We'll add a column and call it Analyze, add another column called Build, and, finally, we'll add a third column called Verify. Now, when we go back to our board, our new columns are included. Let's move the existing issues out of In Progress and into the Analyze column. Now we can go back to Board settings and delete the In Progress column by clicking the trash can icon. Returning to the board, we now see only the three new columns that the team wanted. Let's place a work in progress limit on the Build column. We'll go back to Board settings and set the maximum to two.
>
> **[3:01](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/lab-cloud-company-managed-14287210?u=76281980&t=181)** Back to the board, and now we can see our work in progress limit indicator. Next, let's create swimlanes based on assignee. First, let's assign these issues to different team members. We will assign one to Alana and the other to Ryan. Now we go to Board settings, Swimlanes, and Base swimlanes on Assignee. Back to board, and now we see separate swimlanes for issues assigned to Alana, Ryan, and then all others. Alana is the Project Administrator, and she's configuring the board for all team members, so Ryan should also see these same swimlanes. Let's log out as Alana and log in as Ryan. Okay, we're logged in as Ryan, and we'll go to the projectFinal project. The swimlanes are indeed visible for Ryan. Now, let's continue by logging back in as Alana. We're logged back in as Alana again. Let's create an Epic in our projectFinal project. We have a separate Backlog, but we don't see the Epics panel, so we need to go to Board settings, Columns, and turn on the Epics panel. Back to the Backlog, and now we see the Epics panel.
>
> **[4:36](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/lab-cloud-company-managed-14287210?u=76281980&t=276)** We'll click Epics and Create an Epic, right here, named initial release. And for the Summary, Create initial release, then click Create. Now that we've created an Epic, let's add our existing issues to it. We'll do this by viewing our Kanban board and add the three existing issues to the Epic. Select the add item 1 issue and click Show more Fields, and find the Epic Link field. Currently, this issue doesn't belong to any Epics, so when we click the field we can select our initial release Epic. Now we see that the Epic is associated with this add item 1 issue. We can do the same thing for add item 2 and add item 3. So, now, these three issues are children of the initial release Epic. If we go to the Backlog, we see three issues indicated in the Epic panel.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (2)
> **UI Navigation:** go to (5), dropdown (1), click on (1), in the sidebar (1), select the (1)
> **Code Identifiers:** projectfinal (3)
> **Cross-References:** go back to (3)
> **Tools:** jira (2)
> **CLI Commands:** find (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Lab: Cloud team-managed](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/lab-cloud-team-managed?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/lab-cloud-team-managed?u=76281980&t=0)** - [Instructor] In this demonstration, we'll create a next gen Kanban project. And as the project administrator, we'll change the project's configuration to match the team's requirements. We're logged in as Alana Grant and we'll click the create project dropdown and create a next gen project. We'll create a Kanban project and name it Project Final. We'll set the access to open and click Create. We're brought to the project board where we see the default columns called To Do, In Progress, and Done. Our first configuration is to limit the maximum number of issues in the In Progress column to two. Click the column's more icon, select set column limit and enter two. The column header now has a max two indicator. Now let's create three issues. Now, if we drag three issues to the In Progress column, violating the work in progress constraint, the column highlights in yellow, indicating there's too much work in progress. Next, we'll create a backlog separate from the project board. We click Project Settings, Features, and turn on the backlog. When we return to the board, we see the backlog tab in the sidebar. We can view the backlog by clicking this tab and view our dedicated backlog for this project.
>
> **[1:35](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/lab-cloud-team-managed?u=76281980&t=95)** Now let's go back to the board. Next, the team has decided they need more steps in the workflow. Instead of an In Progress column, they would like Analyze, Build, and Verify columns. To do this, we click the create column plus sign beside the board and create our first new column Analyze. Then do the same to create the Build and Verify columns. Let's move the Done column to the end and also let's move the Issues out of the In Progress column and into the To Do column so we can delete the In Progress column. We'll click the column's more icon and select Delete. So now our board has the columns the team wants, To Do and Analyze, Build, Verify, and Done. The team would like to limit the number of issues in the Build column to two, so we'll set the column limit accordingly. Next, we'll add a rule that when issues enter the Verify column, they become unassigned. So first, let's assign the add item 1 issue to Alana Grant. Then we'll click the more icon and select Manage Rules. Click Add Rule. Now we want assign an issue to someone which is selected by default, so we click Select. To configure the rule, we set for issues moving to to Verify
>
> **[3:09](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/lab-cloud-team-managed?u=76281980&t=189)** and assigned to no one, then click Add. So now let's take the add item 1 issue that's assigned to Alana and move it to the Verify column. And we see that the issue automatically becomes unassigned. Now let's assign the add item 2 issue to Alana. Now we'll create swimlanes by assignee. Open the group by dropdown and select Assignee. The issues on the board are now divided into swimlanes that are grouped by their assignee. Alana's issues are in one swimlane and all the unassigned issues are in their own swimlane. Next, we'll create an epic using the roadmap feature. Click the Roadmap tab and create an epic called Initial Release. Now let's add existing issues to the epic. We'll click the epic to view its details. Click the add child issue icon and click choose an existing issue and we'll pick the add item 1 issue. Now let's return to the board and we see that the add item 1 issue is now associated with our epic. Another way to add an issue to an epic is to open it, click the more icon and select Add Parent. We'll select our epic and click Done. Now the epic has two children associated with it. Next, the team wants to be able
>
> **[4:44](https://www.linkedin.com/learning/agile-project-management-with-jira-cloud-3-advanced-topics/lab-cloud-team-managed?u=76281980&t=284)** to create issues of type story. Right now, the only issue types available are task and epic. So to do this, we go to Project Settings, Issue Types and click Add Issue Type in the sidebar. We'll select Story and click Add. Now, when we go back to the project, team members can create issues of type story.

> [!info]- Semantic Content
>
> **UI Navigation:** dropdown (2), in the sidebar (2), open the (1), go to (1)
> **Cross-References:** go back to (2)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Atlassian University]]

## Skills Covered

- Jira
- Agile Project Management

## Path Context

### In [[Atlassian Agile Project Management Professional Certificate]]
← [[Agile Project Management with Jira Cloud- 2 Lean and Agile Processes]] | **5 of 6** | [[Mistakes to Avoid in Agile Project Management]] →

## Part of

- [[Atlassian Agile Project Management Professional Certificate]]

## Appears In

- [[Atlassian Agile Project Management Professional Certificate]]

## Related Courses

_Courses sharing skills:_

- [[Agile Project Management with Jira Cloud- 2 Lean and Agile Processes]] — Agile Project Management, Jira
- [[Agile Project Management with Jira Cloud- 1 Projects, Boards, and Issues]] — Agile Project Management, Jira
- [[Jira Administration- Automation]] — Jira
- [[Jira- Managing Custom Workflows]] — Jira
- [[Jira- Advanced Administration]] — Jira

---

[↑ Back to top](#)