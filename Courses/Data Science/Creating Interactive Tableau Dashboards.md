---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: creating-interactive-tableau-dashboards-25827168
url: "https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168"
duration_minutes: 358
duration: 5h 58m
level: Intermediate
updated: 5/29/2025
learners: 61369
skills:
  - Tableau
  - Data Analysis
  - Dashboards
  - Analytics
  - Data Analytics
  - Data Visualization
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQEtJoc6PfO21Q/learning-public-crop_675_1200/B4EZaNoHLFHEAY-/0/1746132825739?e=2147483647&amp;v=beta&amp;t=OJiguxsXEWRhIerl8ffwEPYf-XipOYxSqDeEejLxAPc"
linkedin_topic: Data Science
learning_paths:
  - '[[Develop Your Tableau Skills]]'
prev_courses:
  - '[[Complete Guide to Tableau for Data Scientists]]'
next_courses:
  - '[[Tableau and R for Analytics Projects]]'
path_nav: '[{"path":"Develop Your Tableau Skills","position":3,"total":4,"prev":"Complete Guide to Tableau for Data Scientists","next":"Tableau and R for Analytics Projects"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/tableau
  - skill/data-analysis
  - skill/dashboards
  - skill/analytics
  - skill/data-analytics
  - skill/data-visualization
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Creating%20Interactive%20Tableau%20Dashboards.md)

![Creating Interactive Tableau Dashboards](https://media.licdn.com/dms/image/v2/D4E0DAQEtJoc6PfO21Q/learning-public-crop_675_1200/B4EZaNoHLFHEAY-/0/1746132825739?e=2147483647&amp;v=beta&amp;t=OJiguxsXEWRhIerl8ffwEPYf-XipOYxSqDeEejLxAPc)

# Creating Interactive Tableau Dashboards

> Learn how to create compelling, informative, and eye-catching dashboards using Tableau, the interactive data visualization software. This course covers how to take the connected data you’ve analyzed and share it on presentable dashboards. Data analytics expert Matt Francis first encourages you to consider four main questions before creating each dashboard: who is your dashboard for, what do they n

> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168) | 5h 58m | Intermediate | 61K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - Designing dashboards in Tableau
- [**1. How to Create the Right Kind of Dashboard**](#1-how-to-create-the-right-kind-of-dashboard) (5 videos)
  - Who, what, where, and why: The four questions for every dashboard
  - Who is the dashboard for?
  - Where will the dashboard be viewed?
  - Why are you making the dashboard?
  - What question do you want to answer?
- [**2. Dashboard Structure**](#2-dashboard-structure) (8 videos)
  - Create a basic dashboard
  - Sizing your dashboard
  - Floating vs. tiles layouts
  - How to use layout containers
  - Using padding objects to help with tiled dashboards
  - Adding a download button
  - Challenge: Create a basic dashboard
  - Solution: Create a basic dashboard
- [**3. Dashboard Objects**](#3-dashboard-objects) (13 videos)
  - Adding a horizontal container
  - Adding a vertical container
  - Using color to help with container layouts
  - Adding text
  - Dashboard extensions
  - Adding images
  - Adding blanks to help with layouts
  - Adding a webpage to a dashboard
  - Adding navigation between sheets
  - Adding a download button
  - Add filters
  - Challenge: Adding dashboard objects
  - Solution: Adding dashboard objects
- [**4. Dashboard Design Elements**](#4-dashboard-design-elements) (9 videos)
  - Giving a dashboard a good title
  - Dashboard colors
  - Remove chart junk
  - Visually group elements with borders
  - Apply filters across sheets
  - Highlight data with annotations
  - Collapsible containers to show or hide elements
  - Challenge: Dashboard design
  - Solution: Dashboard design
- [**5. Interactions with Dashboard Actions**](#5-interactions-with-dashboard-actions) (10 videos)
  - Adding interaction with actions
  - Filter actions
  - Highlight actions
  - URL actions
  - The Go to Sheet action
  - Proportional brushing using set actions
  - Asymmetric drill down using set actions
  - Highlighting with parameter actions
  - Challenge: Dashboard actions
  - Solution: Dashboard actions
- [**6. Using Story Dashboards**](#6-using-story-dashboards) (6 videos)
  - DataViz vs. data stories
  - Narrative structure
  - Big stories
  - Small stories
  - Challenge: Dashboard stories
  - Solution: Dashboard stories
- [**7. One Dataset, Five Dashboards**](#7-one-dataset-five-dashboards) (7 videos)
  - Build an exploratory dashboard
  - Build an informative dashboard
  - Build a data story
  - Build a KPI dashboard
  - Design for tablets and mobiles
  - Challenge: Dashboard styles
  - Solution: Dashboard styles
- [**Conclusion: Continuing Your Tableau Dashboard Learning Journey**](#conclusion-continuing-your-tableau-dashboard-learning-journey) (1 videos)
  - Next steps and additional resources

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Designing dashboards in Tableau
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/designing-dashboards-in-tableau?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/designing-dashboards-in-tableau?u=76281980&t=0)** - [Matt] This is about sharing your data and how to share it effectively with your audience.
>
> **[0:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/designing-dashboards-in-tableau?u=76281980&t=5)** We're going to talk about the four W's of great dashboard.
>
> **[0:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/designing-dashboards-in-tableau?u=76281980&t=7)** The who, the what, the where, and the why.
>
> **[0:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/designing-dashboards-in-tableau?u=76281980&t=11)** We're going to cover dashboard layout, the best way to format your dashboards.
>
> **[0:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/designing-dashboards-in-tableau?u=76281980&t=15)** We'll look at dashboard objects, the things that we can add into your dashboard to really enhance them.
>
> **[0:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/designing-dashboards-in-tableau?u=76281980&t=20)** We'll look at creating effective titles and adding dashboard actions to create interactivity to allow your viewers to play with the data in your dashboards.
>
> **[0:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/designing-dashboards-in-tableau?u=76281980&t=28)** Ultimately, we want people to see, understand, and act on data.
>
> **[0:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/designing-dashboards-in-tableau?u=76281980&t=32)** So grab your copy of Tableau, get some data, create some visualizations.
>
> **[0:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/designing-dashboards-in-tableau?u=76281980&t=37)** Hi, welcome to Creating great Tableau dashboards.
>
> **[0:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/designing-dashboards-in-tableau?u=76281980&t=40)** My name is Matt Francis, I'm a two time Tableau visionary and Tableau social ambassador, and this course is all about creating dashboards and let's go.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - [matt] (1)


### 1. How to Create the Right Kind of Dashboard

> [↑ Back to Table of Contents](#table-of-contents)

#### Who, what, where, and why: The four questions for every dashboard
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=0)** - [Instructor] In this video, I'm going to introduce you to four questions that are going to help to improve every single dashboard you are ever going to make.
>
> **[0:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=8)** Now when you think about it, each dashboard has four questions that really have a big impact on the design choices that you're going to make.
>
> **[0:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=16)** Now I like to think of those as the four Ws of good dashboard design.
>
> **[0:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=21)** Now, those four are the who, the where, the what, and the why.
>
> **[0:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=26)** So what do they actually mean?
>
> **[0:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=28)** Well, the who is all about who is the audience for your dashboard.
>
> **[0:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=34)** So for this question, we need to think about who is the person actually interacting with our dashboard?
>
> **[0:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=40)** And that is all about what do they already know?
>
> **[0:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=45)** So what I mean by that is what do they know about the data?
>
> **[0:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=48)** How familiar are they with the data that you're trying to show them?
>
> **[0:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=52)** This is going to have an impact on how much explanation you need to explain certain features of the data and the visualizations you create from it.
>
> **[1:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=62)** The further away from that data that they're familiar with, the more explanation you're going to have to use.
>
> **[1:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=67)** So this is going to impact how much detail you need to either include or what you can exclude.
>
> **[1:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=74)** It's also about how complicated you can make your charts look.
>
> **[1:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=80)** For a wider audience, you might need to stick to simple charts like bar charts and pie charts.
>
> **[1:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=86)** But if your audience is more familiar with more complicated charts like Sankey charts, maybe those would be a better choice.
>
> **[1:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=95)** The where is all about where your user is going to consume that dashboard?
>
> **[1:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=99)** Where is it going to be viewed?
>
> **[1:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=102)** Is it going to be on a large or a small screen?
>
> **[1:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=105)** This is going to affect how much real estate space you have when you create your dashboard.
>
> **[1:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=109)** Now we never have enough space, but knowing where it's going to be viewed can at least give us an idea of whether we have a large or a small area to look at.
>
> **[1:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=119)** Are we expected this dashboard to be printed out?
>
> **[2:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=122)** Is it can be looked at on a mobile device or maybe on a desktop machine?
>
> **[2:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=127)** Each of those has very, very different characteristics.
>
> **[2:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=131)** For the print, we don't have any kind of interaction.
>
> **[2:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=133)** And for a mobile device, it's very difficult to do a kind of hover action that we can do with a dashboard.
>
> **[2:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=140)** So that talks about the size of the dashboard that we have to play with, which then talks about how much elements we can actually fit into that dashboard itself.
>
> **[2:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=152)** Plus how much interaction can you actually include?
>
> **[2:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=157)** It's no good using things like tool tips, which allow extra information to be displayed if you don't have access to the tool tip because it's printed or on a mobile device.
>
> **[2:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=168)** The what is all about what information you're going to show.
>
> **[2:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=174)** What do you want your audience to be able to take away with them after interacting with your dashboard?
>
> **[2:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=179)** And importantly, what question should it answer?
>
> **[3:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=183)** Now, it's not always the case that a dashboard is going to give just one answer, but if that's the point of the dashboard, is somebody able to get the answer that you expect them to be able to get?
>
> **[3:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=195)** So what you expect your viewer to be able to do covers the what.
>
> **[3:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=201)** And then finally, we have the why.
>
> **[3:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=203)** You know, why are you sharing the data in the first place?
>
> **[3:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=205)** What is the purpose of it?
>
> **[3:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=208)** Is it to inform?
>
> **[3:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=210)** Is it to show that this particular bit of data is interesting and needs more investigation?
>
> **[3:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=217)** Is it to explore?
>
> **[3:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=218)** Is it just giving somebody the data set and some tools and some filters and some interactions so they can find the answers and the story within the data themselves?
>
> **[3:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=228)** Is it to explain something?
>
> **[3:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=230)** Maybe we've already done the analysis of our data.
>
> **[3:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=233)** We've found that there's an interest in spike on a particular date for a particular product or something like that.
>
> **[3:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=239)** And we want to explain the situation because we want to make a business change.
>
> **[4:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=244)** We want to change some kind of behavior.
>
> **[4:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=247)** Maybe it's to alert somebody.
>
> **[4:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=250)** You know, our sales are doing good this month, but last month they were even better.
>
> **[4:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=253)** So what's going on there?
>
> **[4:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=255)** This is when we start talking about KPI dashboards where we're trying to indicate there is something of significance we need to take care of right now.
>
> **[4:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=264)** Whereas the exploratory dashboard is, well, I'm going to explore the data and see what I can find.
>
> **[4:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=271)** Now the answer to these questions are going to guide you through the design process.
>
> **[4:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=276)** It's going to help you think about layer, sizing, interaction and all the other elements when it comes to creating a good dashboard.
>
> **[4:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=284)** But one thing to bear in mind is that good dashboard design is not linear.
>
> **[4:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=288)** It's not the case that we can simply sit down with those four Ws and tick them off and think, okay, that's done.
>
> **[4:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=294)** Instead, you need to think of it more as a cycle where every single part interacts with something else.
>
> **[5:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=302)** For example, if we can only interact with it on our phone, that's going to limit the amount of interaction that we can have with it.
>
> **[5:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=308)** It's also a much smaller screen size, so we can't put as much information in.
>
> **[5:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=314)** But what if the audience that we're trying to do this data visualization for needs a lot of explanation?
>
> **[5:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=321)** Well, that's going to limit what we can actually use to show the data.
>
> **[5:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=325)** So all of these elements interact with each other.
>
> **[5:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=329)** But just remember, the goal is always to get answers from our data.
>
> **[5:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/the-four-questions-for-every-dashboard?u=76281980&t=335)** So whatever we come up with, this is always what we're trying to do.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4), find (2)
> **Code Keywords:** finally, (1), else. (1)
> **Env Vars:** kpi (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Who is the dashboard for?
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=0)** - [Instructor] Let's talk about the who of the four Ws of good dashboard design.
>
> **[0:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=5)** Who is the dashboard for?
>
> **[0:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=7)** Now this relates to: Who is the audience for your dashboard?
>
> **[0:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=13)** Who are you making the dashboard for, and why even does that matter?
>
> **[0:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=17)** Well, it matters because it's all about how much information we need to add to our dashboard alongside any visualizations that we use.
>
> **[0:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=27)** So think about who is using your dashboard.
>
> **[0:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=30)** Is the dashboard just being made by yourself to be used by you?
>
> **[0:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=35)** In which case, you probably understand the data, and hopefully, you're going to understand the charts that you create.
>
> **[0:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=42)** So you don't need to explain how to read the chart, and you don't need to explain what the data means, because you have knowledge of both the data domain and the visualization itself.
>
> **[0:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=52)** So your dashboard doesn't need to have a lot of extra detail added to it.
>
> **[0:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=58)** What about your team?
>
> **[0:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=59)** Well, if you're creating a dashboard for your team, we might assume that your team also understands the data, because you're working within the same team, but they might not have the same knowledge of visualizations.
>
> **[1:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=72)** So you might have to use either more simple charts, or if you can use a more complex visualization, maybe need to use more space to explain how to read that dashboard.
>
> **[1:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=85)** How about if it's for your wider department?
>
> **[1:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=87)** Now, the department might not be as knowledgeable on the data as you and your team are, so maybe you need to spend a little bit more space on your dashboard explaining what the data actually means.
>
> **[1:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=101)** Similarly, when we start looking at dashboards for senior management, they tend to be looking at a much higher level of detail for the data, and probably they might not understand the nuance within that data either.
>
> **[1:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=115)** And because these people might be decision makers, we don't want them to be making wrong decisions based on our visualizations.
>
> **[2:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=121)** So we might have to make more time and effort and space within our dashboard to explain both the data, and how to interpret the visualization itself.
>
> **[2:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=133)** Dashboards for operational teams are kind of interesting, because the operational teams in general be the people that are generating the data in the first place.
>
> **[2:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=144)** Through interactions with their different applications, they're entering data into some kind of data source that we are then gathering and building the visualization on.
>
> **[2:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=152)** So again, we could assume that they have a lot of knowledge about the data domain, because they're the ones that are creating that data, but they might not be as experienced in different chart types.
>
> **[2:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=163)** So we still might have to spend more time, effort, and space on our dashboard explaining those things to them.
>
> **[2:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=170)** The general public is an interesting one.
>
> **[2:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=173)** In that case, we have to both assume very little knowledge of the underlying data, and also not that much experience with complex chart types.
>
> **[3:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=182)** So those kind of dashboards, we need to either have simple charts that are easy to understand, or if it's appropriate to use a more complicated chart, we have to explain how to read that chart in the first place.
>
> **[3:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=195)** So the audience for our dashboard usually determines two things.
>
> **[3:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=201)** The domain knowledge is going to determine how much explanation we need about what the data actually means.
>
> **[3:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=208)** And the complexity of that visualization, means we need to explain how to read the charts.
>
> **[3:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=216)** Now to think about this, we can use this kind of grid layout.
>
> **[3:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=220)** So where we have the domain experience on our X-axis, and the visualization experience on our Y, all of our audience can kind of go somewhere within this grid.
>
> **[3:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=232)** You, as an understander of both the domain data and the visualization itself, would go in the top right hand corner.
>
> **[4:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=240)** We could create complex visualizations, and we don't have to use much space to explain the data or the visualization.
>
> **[4:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=250)** The team, like operations, would understand the data because they're the ones creating the data itself, but they might have that same experience in the charts that we choose to use.
>
> **[4:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=260)** So if they're complex charts, we need to make sure that they understand how to read them.
>
> **[4:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=266)** In the case of senior management, they may or may not be an expert in the visualizations that we use.
>
> **[4:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=272)** So again, if it's a complex chart or we are not sure that they understand it, then we are going to spend some time, effort, and space within our dashboard, explaining how to read the chart.
>
> **[4:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=285)** And again, senior management tends to be away from the generation of the data itself.
>
> **[4:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=290)** So we might have to explain some of the nuances within that data, because as we said before, if they're the decision makers, we don't want them making bad decisions based on bad interpretation of the data.
>
> **[5:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=303)** Now, the general public means that they probably don't know what the data means, so we have to spend time explaining the data, and chances are, they don't understand how to read complex charts that we might otherwise use.
>
> **[5:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=318)** So we need to either use simple charts that are easy to understand, and more importantly, to not misinterpret, or we need to create a dashboard that allows 'em to look at the explanation of that data to understand what it's actually showing us.
>
> **[5:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=334)** So what does the audience determine overall, and how does that impact our dashboard design?
>
> **[5:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=341)** Well, it comes down to this.
>
> **[5:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=343)** How much dashboard space do we need to devote to explain both the data and what the chart means?
>
> **[5:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=352)** So how much do we need to explain what the data means?
>
> **[5:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=357)** What is good, what is bad, what this nuance is, and also, how to read the chart.
>
> **[6:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=363)** Remember, our ultimate goal is for people to see and understand the data and make informed decisions.
>
> **[6:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=369)** So everything on our dashboard should help with that.
>
> **[6:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/who-is-the-dashboard-for?u=76281980&t=372)** We don't want the complexity of the data nor the chart to make that difficult.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (2), public (2), let (1), for, (1), this, (1)
> **CLI Commands:** make (4)
> **Definitions:** is an  (1), means that (1)
> **Speakers:** - [instructor] (1)

#### Where will the dashboard be viewed?
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=0)** - [Instructor] The next W to consider about good dashboard design is the where.
>
> **[0:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=6)** Where is the dashboard going to be seen?
>
> **[0:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=9)** Now, where the dashboard is going to be seen influences a couple of different things that we need to think about.
>
> **[0:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=15)** So, where about is somebody going to interact with the dashboard?
>
> **[0:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=20)** So, what options do we have?
>
> **[0:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=22)** So firstly, is it going to be viewed on a desktop or laptop screen?
>
> **[0:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=28)** Now in this case, we can interact with it.
>
> **[0:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=31)** We're going to use our mouse to highlight objects, click on things.
>
> **[0:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=34)** So we have a high level of interactivity with our potential dashboard.
>
> **[0:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=40)** As it can be seen on a tablet or a mobile device, again, we can still interact with this, but the method is going to be slightly different.
>
> **[0:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=49)** Is the dashboard going to be printed out?
>
> **[0:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=52)** Is it going to be used as a handout?
>
> **[0:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=53)** Are we using it to design some kind of printed material that are going to be used in a meeting, or distributed somewhere?
>
> **[1:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=61)** Or, is it going to be on a TV display?
>
> **[1:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=64)** Is it going to be something that people are not going to be able to interact with and just look at?
>
> **[1:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=70)** So the where of the dashboard influences two characteristics.
>
> **[1:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=76)** Firstly, the size of the dashboard.
>
> **[1:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=79)** And depending on the size of the screen, that's going to determine the size of the dashboard.
>
> **[1:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=84)** And that then means how much space have we got for charts, for explanations, for legends, filters, all that kind of content we have to consider as being part of the dashboard.
>
> **[1:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=96)** What do we need to include, what can we exclude, and how can we maximize the space to make use of every single pixel?
>
> **[1:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=103)** Because every one is going to count.
>
> **[1:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=106)** The other thing that influence is the level of interaction.
>
> **[1:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=110)** For a static display, such as on a TV or print, we can't interact with anything at all, so all we see is all we get.
>
> **[1:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=118)** Whereas things on a laptop screen, or a web, or on a mobile or tablet, it's going to be a level of interaction.
>
> **[2:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=127)** So let's look at all of these in a little bit more detail.
>
> **[2:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=131)** Firstly, let's look at the desktop/laptop.
>
> **[2:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=134)** Now this is going to allow us the greatest freedom of design.
>
> **[2:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=137)** Although we still have a fixed amount of space to use, we have generally a large amount of space.
>
> **[2:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=144)** Now it's probably a good idea to understand where people are going to be interacting with your dashboard to find out the correct size to use.
>
> **[2:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=152)** So if you're building a dashboard to be used within your team or organization, find out what laptops they all use, or find out what kind of monitor they're going to be interacting with.
>
> **[2:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=162)** Get the resolution, and fix that within your dashboard, that way you know exactly how much space you've got to work with every single time.
>
> **[2:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=171)** Now, because it's going to be on a desktop or laptop screen, there's going to be a lot of interaction.
>
> **[2:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=177)** We can hover over marks with our mouse, and we'll get tool tips to show us more information underneath that's hidden behind a particular mark on the dashboard.
>
> **[3:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=186)** We could export the data to do more interaction.
>
> **[3:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=190)** This also means that we have the use of filters, parameters, actions, where we can interact with the visualization to enhance our understanding of the data.
>
> **[3:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=200)** So, the desktop/laptop combination gives us the greatest freedom in both the size that we can use.
>
> **[3:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=206)** Plus, the interaction means we don't have to spend any space on our dashboard with explanations or additional information, because more information is available at the click of a button.
>
> **[3:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=219)** So what about for a tablet or mobile?
>
> **[3:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=222)** Well, probably, we have a smaller maximum size than the desktop or laptop.
>
> **[3:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=227)** In general, tablets and mobile devices are going to have a lower resolution.
>
> **[3:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=231)** So, we have much smaller space to deal with.
>
> **[3:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=236)** We need to consider the orientation.
>
> **[3:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=239)** For a mobile device, generally, they need to be viewed in the vertical orientation, whereas a tablet could probably work in landscape or vertical.
>
> **[4:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=250)** So we need to consider, as well, things like, do we try and fit the dashboard in one single screen, or do we allow scrolling?
>
> **[4:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=258)** If we're going to allow scrolling, we need to make sure that the viewer knows that we can actually scroll.
>
> **[4:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=264)** If all of our interaction is done just through touch, we also need to consider that we can't use hover actions because you can't hover using a touch device.
>
> **[4:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=276)** So the limited interaction options are going to mean that maybe we have to have more things showing rather than being available on tool tips, for example.
>
> **[4:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=288)** Then when we're talking about the print and TV display, it's a couple of really important things.
>
> **[4:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=293)** Firstly, we can't interact with them.
>
> **[4:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=296)** Okay, the dashboard that they get given is basically, that's what they've got.
>
> **[5:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=300)** They can't get the underlying data.
>
> **[5:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=302)** Everything needs to be on show.
>
> **[5:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=305)** So, things like filters are just not going to be available.
>
> **[5:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=309)** Now, it might be that we need to have large fonts or labels depending on how far away this needs to be seen.
>
> **[5:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=317)** So, if you are a TV screen that's in like a foyer, or something like that, ensure that people can actually see what's on the screen.
>
> **[5:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=326)** There's nothing worse than having a nice visual, but the fonts are so small you can't actually make up what they're saying.
>
> **[5:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=334)** So the print TV display is probably the hardest one that we have to consider, because the lack of interaction and the sizing really limits what we can do.
>
> **[5:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=343)** Now, it shouldn't put us off.
>
> **[5:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=344)** Sometimes it's a nice challenge, and it just means that we have to think a little bit more about what is visible, rather than what is hidden.
>
> **[5:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=351)** The where of dashboard design is really critical in understanding both the size that we have to play with, plus the interactivity.
>
> **[5:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/where-wll-the-dashboard-be-viewed?u=76281980&t=359)** We need to make sure that everybody that interacts with our dashboard, whether physically or just looking at it, gets the maximum amount of information they can from that data.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4), find (3)
> **Code Keywords:** let (2), case, (1), this, (1), include, (1), static (1)
> **Definitions:** means that (2)
> **Analogies:** such as (1), for example (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### Why are you making the dashboard?
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=0)** - [Instructor] The next W to consider in the four W's of good dashboard design is the why.
>
> **[0:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=6)** Why are you sharing the data?
>
> **[0:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=9)** Now, this is all about how the dashboard is going to be used.
>
> **[0:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=14)** So for that, we need to think about, well, what is the actual purpose of the dashboard?
>
> **[0:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=18)** What role is it going to take?
>
> **[0:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=21)** Now, broadly speaking, there are four types of dashboards that typically we produce.
>
> **[0:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=28)** The first is an exploratory dashboard.
>
> **[0:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=31)** These are dashboards that are designed for discovery.
>
> **[0:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=35)** There are informative dashboards.
>
> **[0:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=38)** These are dashboards designed to show information.
>
> **[0:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=43)** There are explanatory dashboards.
>
> **[0:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=45)** These dashboards are designed for insight into our data.
>
> **[0:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=51)** And finally, the fourth one are KPI dashboards.
>
> **[0:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=54)** These are specifically designed to gain attention.
>
> **[0:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=59)** So let's look at these four in more detail and how we might apply those for our dashboards that we're going to create.
>
> **[1:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=66)** Firstly, let's think about the exploratory dashboard.
>
> **[1:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=69)** Now, these dashboards are all about discovery.
>
> **[1:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=72)** These dashboards are going to present the data and make it easy to find answers.
>
> **[1:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=78)** So for these dashboards, we haven't got something we're trying to show, we've just got a load of data and we're going to make it easier for our users to digest that data and discover things within it for themselves.
>
> **[1:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=90)** Now, these dashboards are typically going to have a high level of interaction because we're presenting maybe a bigger data source than we would normally do with the other types of dashboard.
>
> **[1:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=100)** So we need to provide filters, actions, and highlights so somebody can cut and dice and get really into the data to discover those interesting things.
>
> **[1:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=112)** So what we are doing is basically saying, here is the annual sales data, and here are your filters, here's your actions, go off and find something interesting within the data.
>
> **[2:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=124)** Now, what's useful about this type of dashboard is it can have many, many different purposes.
>
> **[2:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=129)** So if there is something interesting in the data, something that we need to make a business change for, having all of that interaction would allow us to discover that, but obviously, it's going to take more work.
>
> **[2:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=142)** But it does mean that two different people can analyze exactly the same data set using the same dashboard and find different things that mean something to them.
>
> **[2:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=151)** So a single dashboard can have many uses.
>
> **[2:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=154)** Now, that's great from our point of view as designers, because we only have to have one dashboard that we both create and that we maintain.
>
> **[2:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=162)** But we can have many users using it in many different ways.
>
> **[2:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=165)** You can have an operations team looking at that data to make their operations better.
>
> **[2:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=170)** You could have a manager looking at the output of the operation to ensure that they're providing everything the operations team needs to work.
>
> **[2:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=179)** So a single dashboard can have many, many uses and many users.
>
> **[3:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=184)** Now, an informative dashboard is, much like the name expects, all about information.
>
> **[3:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=191)** This is to allow us to present the data to make it easy to find answers.
>
> **[3:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=198)** Now, there's still going to be some level of interaction, but maybe not as much as required as with the first dashboard where it's all about discovery.
>
> **[3:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=207)** These dashboards tend to be more focused on a single question.
>
> **[3:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=212)** Now, it's a bit of nuance between the informative dashboard and the discovery dashboard, but this last one is kind of important.
>
> **[3:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=219)** The discovery dashboard is designed to answer many questions by many people, but the informative one is maybe a filtered look in that data.
>
> **[3:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=230)** We've already filtered some of the data, we're already kind steering what this dashboard is designed to be used for.
>
> **[3:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=237)** So for example, a dashboard might just focus on the monthly sales data for a particular department.
>
> **[4:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=243)** Now, because we're only focusing on smaller dataset, the charts that we use might have more information about the month and the sales, particularly for that department that don't apply to other parts of the organization.
>
> **[4:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=258)** The next type is an explanatory dashboard.
>
> **[4:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=261)** Now this is all about the insight.
>
> **[4:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=264)** Now, in this case, we might have done some analysis of the data and we found something interesting.
>
> **[4:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=271)** We found something that we really need to highlight to the user.
>
> **[4:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=275)** Now, in this case, because we're presenting it to the user, it's not necessarily the case there's going to be a lot of interaction.
>
> **[4:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=281)** Instead, we're trying to show the interesting thing that we have found.
>
> **[4:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=286)** Why?
>
> **[4:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=287)** Well, we might be persuading them to make a change, and we have to put a case forward in order to do that.
>
> **[4:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=295)** So for example, we've discovered through our analysis that monthly sales are low for tech, and here is why.
>
> **[5:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=302)** In this case, we're presenting a data story where we're going to lead the viewer through the various steps that we have done as analysts, interacting with the visualization to explain what's going on with the data and why we need to make this change.
>
> **[5:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=319)** The last one are KPI dashboards.
>
> **[5:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=323)** Now, these are really about getting somebody's attention.
>
> **[5:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=326)** It's about highlighting things of interest.
>
> **[5:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=328)** And in general, with a KPI dashboard, there's either no filtering or interaction or very little.
>
> **[5:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=336)** The idea of a KPI dashboard is it should make it really clear and obvious that something is either going really well or something's going really badly.
>
> **[5:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=347)** We need to know, for example, that sales have not yet reached their monthly target.
>
> **[5:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=352)** Now, it might be the case that we have multiple dashboards.
>
> **[5:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=356)** If you think about the idea of a KPI dashboard is to highlight good or bad things, things need our attention right now, is this something I need to deal with, or can I go ahead and do some other work, or go and get a coffee?
>
> **[6:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=370)** So we might need to have multiple dashboards, maybe connected into a data story so I can, at a glance, make sure that everything that happened yesterday went well.
>
> **[6:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=379)** Does anything need my immediate attention or can I do something else?
>
> **[6:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=385)** So all of these questions are going to come across, why do we need to build a dashboard this particular way?
>
> **[6:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=393)** Depending on the type of dashboard, how are we going to interpret that into our dashboard design?
>
> **[6:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=400)** So the questions are going to be, why are we building the dashboard this way?
>
> **[6:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=404)** Why do we need to include this data?
>
> **[6:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=407)** Why do we need to exclude this data?
>
> **[6:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=409)** Why do we need to have this filter?
>
> **[6:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=412)** Everything that we put inside of our dashboard, every object, every piece of data, every explanation, every legend, every filter, does it fit with the type of dashboard that we're building?
>
> **[7:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=423)** Building an effective KPI dashboard is very, very different to building an explanatory dashboard or a discovery dashboard.
>
> **[7:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/why-are-you-making-the-dashboard?u=76281980&t=430)** So understanding why the dashboard exists in the first place is a really crucial step to good dashboard design.

> [!info]- Semantic Content
>
> **CLI Commands:** make (9), find (4)
> **Code Keywords:** case, (3), let (2), finally, (1), for, (1), for. (1)
> **Env Vars:** kpi (6)
> **Definitions:** is an  (2), is a  (1)
> **Analogies:** for example (3)
> **Speakers:** - [instructor] (1)

#### What question do you want to answer?
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=0)** - [Presenter] The last W to think about is the what.
>
> **[0:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=4)** What data is the dashboard actually going to show?
>
> **[0:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=9)** Now, although this is the final W that we often consider, they are all interlinked.
>
> **[0:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=16)** The who, the where, and the why kind of feed into the final part of what is it that we actually are going to use in our dashboard.
>
> **[0:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=26)** So when we think about the what, what elements are going to help the understanding of our data?
>
> **[0:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=34)** So what data do we actually need to display?
>
> **[0:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=38)** What type of charts are we going to create using that data?
>
> **[0:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=42)** Remember, the role of the dashboard is to help people see, understand, and act on their data, and understanding the audience, the who, where they're going to interact with it, the where, and the why, the type of dashboard that we're going to create.
>
> **[0:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=59)** It's going to determine what data we actually need to display and how to display it.
>
> **[1:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=64)** So are we going to have a high or low level of detail with our data?
>
> **[1:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=70)** And typically, we aggregate our data up.
>
> **[1:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=74)** So think of something like data that's got dates within it.
>
> **[1:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=79)** Are we going to look at the daily data that's coming into our system, or are we going to roll it up and maybe look at the weekly or even the monthly data?
>
> **[1:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=88)** Are we going to aggregate it at different levels?
>
> **[1:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=91)** If you're looking back over last month's activity, do you need to see what happened every single day?
>
> **[1:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=97)** Or do you want to aggregate it to the monthly level?
>
> **[1:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=101)** That's going to drastically reduce the numbers of rows in our data, which ultimately is going to speed up the interaction with the dashboard.
>
> **[1:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=110)** Similarly, are we looking at live or extracted data?
>
> **[1:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=115)** Now, that decision kind of comes down to, again, the type of dashboard we're trying to produce and what it's going to be used for.
>
> **[2:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=122)** Is it important to have live data?
>
> **[2:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=125)** Do we need to see up to the minute changes?
>
> **[2:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=128)** Is somebody using our dashboard to monitor a system that's currently operating?
>
> **[2:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=132)** In which case, yeah, they kind of need to see the data as it's being produced, so we might have to have some kind of refresh period on our dashboard.
>
> **[2:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=141)** But if you've got a dashboard that maybe is looking back over last month to see how did our operations perform in any given month, well, we don't need to have live data for that.
>
> **[2:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=155)** That might be an extra that we run out of hours to add all of the data together into one nice data source.
>
> **[2:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=163)** That's going to mean that the interaction with our dashboard is going to be nice and fast because we're not putting data from the system.
>
> **[2:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=169)** It's already been done for us.
>
> **[2:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=172)** In order to interact with the data, we might need to have some filters.
>
> **[2:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=175)** So how many filters do we actually need?
>
> **[2:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=179)** This is an important thing to consider because often more datas can lead to performance issues.
>
> **[3:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=186)** Every time you change a filter, Tableau has to compute what the effect of that filter is.
>
> **[3:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=192)** And if you've got other filters on a dashboard, each of these filters interact with one another, so Tableau has to do a lot of work every time you change one filter.
>
> **[3:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=202)** The most common mistake that people make when it comes to creating visualizations and dashboards is having too many filters.
>
> **[3:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=209)** Just because you can doesn't mean that you should, and you certainly don't need to have a filter for every single field.
>
> **[3:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=216)** Consider what is important to be filtered rather than providing a filter for every single thing.
>
> **[3:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=223)** If there isn't a filter for it, somebody can always ask and we can add it later date.
>
> **[3:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=227)** We don't need to put it all in at once.
>
> **[3:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=229)** So we need to consider what do we need to include in our dashboard?
>
> **[3:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=234)** And what can we exclude?
>
> **[3:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=237)** So do we need titles all over the place?
>
> **[3:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=239)** Does every sheet within our dashboard need a title?
>
> **[4:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=243)** Does it aid anything to have that title or does it just take up valuable real estate?
>
> **[4:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=249)** Legends are an interesting one.
>
> **[4:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=250)** Do we need to have legends with our charts to explain what the colors mean, what the shapes mean, what the sizing means?
>
> **[4:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=256)** Often, we don't.
>
> **[4:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=258)** There are other ways we can do it and reclaim that space back.
>
> **[4:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=262)** Do we need to put a lot of explanations within our dashboard, either how to read the chart or understand the data?
>
> **[4:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=271)** This often comes back to who the audience is.
>
> **[4:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=274)** The more experienced our audience, the less explanations we need to use.
>
> **[4:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=279)** We should always consider what's the minimal viable information that's required?
>
> **[4:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=285)** If somebody's only interested in looking at last month's data, then do we really need five, 10 years worth of data waiting behind the scenes for us?
>
> **[4:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=293)** Or can we trim that data down to just show them what's of interest at that particular time?
>
> **[4:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=299)** It's always a good idea to keep dashboards simple.
>
> **[5:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=303)** Less is more and need to think about the actual point of creating that dashboard.
>
> **[5:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=308)** Ultimately, everything we do with visualization underpins this simple statement.
>
> **[5:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=314)** We're trying to help people see, understand, and act on their data.
>
> **[5:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=319)** A dashboard should help, not hinder this process.
>
> **[5:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/what-question-do-you-want-to-answer?u=76281980&t=323)** So we need to consider every element that we add, every element that we remove, that the entire dashboard is helping us with this simple statement.

> [!info]- Semantic Content
>
> **Code Keywords:** for. (1), case, (1)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Warnings:** common mistake (1)
> **Speakers:** - [presenter] (1)


### 2. Dashboard Structure

> [↑ Back to Table of Contents](#table-of-contents)

#### Create a basic dashboard
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=0)** - [Instructor] Let's first start by creating a basic dashboard, and then we can go through looking at user interface for the dashboard creation process.
>
> **[0:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=10)** Now in this example workbook, I've got four sheets.
>
> **[0:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=13)** I've got a map, I've got a timeline, I've got a heat map, and I've got a scatter plot.
>
> **[0:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=20)** And these are just some charts I've created using these superstore dataset.
>
> **[0:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=23)** And we're just going to use these to create our dashboard.
>
> **[0:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=27)** Now, the dashboard creation process, first we need to create a new dashboard.
>
> **[0:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=31)** So I'm going to go to the bottom icon on the bottom of the screen and click new dashboard.
>
> **[0:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=37)** So this is where we create the dashboard.
>
> **[0:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=40)** So the white shaded area that says drop sheets here, this is the canvas for our dashboard.
>
> **[0:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=48)** Okay?
>
> **[0:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=49)** The size of it, from my view here, is currently set with a minimum, a maximum, and this is determining how big that area is.
>
> **[0:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=57)** On the left hand side, we have a list of all of the sheets in this particular workbook that I can access, that I could drag and drop into my dashboard.
>
> **[1:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=67)** It's really important when you are creating sheets to name them something that is meaningful, because they're going to appear in this list and it's much easier to understand what it is when you can read a useful name.
>
> **[1:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=80)** Just calling them sheet one, sheet two, sheet three, is not a good way of organizing your sheets.
>
> **[1:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=86)** At the bottom left hand corner, we have a list of various different objects that we can add into our dashboard to help with the design.
>
> **[1:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=94)** So we have containers which will allow us to put other objects inside them.
>
> **[1:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=98)** We can add a text box, we have extensions, images, and various other things that we can add into enhance our dashboard.
>
> **[1:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=106)** We're going to come to some of these later on in the course, but for the moment we're just going to create a very basic dashboard to show you how to add elements in their most basic form.
>
> **[1:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=116)** Right at the bottom we have a little section that says tiled or floating.
>
> **[2:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=121)** Now this is going to determine whether we have a tiled layout or a floating layout.
>
> **[2:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=127)** To understand those in a bit more detail, check out the video that covers tiled and floating layouts.
>
> **[2:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=132)** For the moment, I'm just going to stick with the tiled layout for this example.
>
> **[2:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=136)** Now, at the very bottom, there's a little checkbox that says show dashboard title.
>
> **[2:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=140)** Now by default, dashboards don't have a title.
>
> **[2:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=143)** I think it's quite rare that I've ever created a dashboard that doesn't have a title.
>
> **[2:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=149)** Titles are really useful and they're going to inform your viewer what they're going to see.
>
> **[2:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=154)** So why would you not want to have a title?
>
> **[2:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=156)** So I'm going to click show dashboard title, and my dashboard is called dashboard one.
>
> **[2:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=162)** By default, this dashboard title takes its name from the dashboard name at the bottom in my menu bar.
>
> **[2:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=168)** So at the bottom of the screen you can see it's called dashboard one.
>
> **[2:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=171)** That's the name it's been given.
>
> **[2:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=173)** So if I right click at the bottom, I'm going to change dashboard one to be profit dashboard.
>
> **[3:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=183)** And we can see that as I change it at the bottom, my dashboard title at the top changes.
>
> **[3:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=187)** But if I want to edit that dashboard, I can simply double click on the title name, the title box will appear, and I can change my title to be anything that I like.
>
> **[3:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=198)** Okay?
>
> **[3:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=199)** This example, profit dashboard, is not a good title.
>
> **[3:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=202)** We'll discuss better titles later in this series.
>
> **[3:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=207)** Now the first thing I'm going to do is I'm going to set the size of my dashboard.
>
> **[3:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=212)** So I want to have a fixed size, and I'm going to select from one of the pre-selected items and I'm just going to say desktop browser.
>
> **[3:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=224)** Now, I'm going to set my view to be 1000 pixels by 800 pixels wide.
>
> **[3:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=229)** And I can see now I have this blue area showing that this is the size, what my dashboard is going to look like.
>
> **[3:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=235)** Click away from there.
>
> **[3:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=237)** And now I'm just going to add some of my sheets in.
>
> **[4:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=240)** So first of all, I'm going to add my map.
>
> **[4:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=243)** So I'm going to select the map from the left hand side.
>
> **[4:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=245)** I'm going to drag it into the white area.
>
> **[4:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=248)** Now what I do, you see that the white area turns gray.
>
> **[4:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=252)** That means if I release my mouse button, this is where that sheet's going to go.
>
> **[4:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=255)** So if I release it, it now creates the map, and that map fills all of the available space.
>
> **[4:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=263)** Now, this is an interactive sheet just like it would be normally.
>
> **[4:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=265)** So I could zoom in or out on there.
>
> **[4:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=267)** I could select different items.
>
> **[4:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=269)** It's a living sheet inside that dashboard.
>
> **[4:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=274)** Can also see I've got this white area on the right hand side with the profit legend.
>
> **[4:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=280)** What Tableau does is it automatically creates a container, more of those in another video, that puts elements in there.
>
> **[4:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=288)** And one of the things it would do is add legends, because when this map was created, a legend came with the map, it puts it into there.
>
> **[4:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=296)** If I then add in a second sheet, since I want my profit timeline.
>
> **[5:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=301)** Now watch what happens when I drag it into the view.
>
> **[5:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=304)** We get this gray shaded area.
>
> **[5:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=307)** And what that means is when you let go, this is where it's going to put that second sheet.
>
> **[5:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=311)** So I can control whereabouts that sheet goes.
>
> **[5:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=314)** If I want the sheet to be above the map, I would release it towards the top of the screen.
>
> **[5:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=319)** If I want it to the right, to the right of the screen.
>
> **[5:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=321)** But for my one, I'm going to put it underneath my map.
>
> **[5:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=324)** So I'm going to release, and now I have my two objects.
>
> **[5:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=328)** I have my map at the top and my profit timeline at the bottom.
>
> **[5:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=333)** If I wanted to resize them, I can simply hover over and resize one bigger than the other, or I can let Tableau do it for me.
>
> **[5:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=344)** The basic building blocks of a dashboard is exactly like this.
>
> **[5:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=350)** We keep drag and dropping elements into our dashboard.
>
> **[5:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=353)** So if I added the heat map in, again, I can see my gray shaded area of where it's going to go when I release it.
>
> **[6:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=361)** And I can put my customers down here.
>
> **[6:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=363)** So now I have a gridded layout.
>
> **[6:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=366)** Now, I'm not saying this is a good dashboard, but it definitely is a dashboard.
>
> **[6:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=370)** There's loads of ways that we can improve this.
>
> **[6:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=372)** From the titles to the coloring to the layout.
>
> **[6:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=375)** Every single thing could be changed to be improved.
>
> **[6:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=377)** But the very basic principle for a dashboard is, you decide what size, you decide whether you're going to have a floating or tiled layout, and you simply drag and drop elements into the dashboard.
>
> **[6:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/create-a-basic-dashboard?u=76281980&t=389)** As we go through, we'll see how to enhance this by ensuring that each of the sheets maximizes space, we can control the layout and we can have interactions between different elements.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), default, (2), this. (2), interface (1)
> **UI Navigation:** go to (1), drag and drop (1), checkbox (1), click on (1), select the (1)
> **Definitions:** is a  (2), is called (1), is an  (1)
> **Cross-References:** later in (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Sizing your dashboard
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=0)** - [Instructor] Let's look at some of the practical examples when it comes to sizing your dashboard.
>
> **[0:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=5)** Now, looking at this example, I've got my four sheets on my dashboard, and, at the moment, it's a fixed size.
>
> **[0:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=12)** Now, we size the dashboard by going to the Sizing panel in our pane on the left-hand side.
>
> **[0:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=19)** Now, there's three options when it comes to size of the dashboard: fixed, automatic, and range.
>
> **[0:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=25)** So let's look at the automatic first, and let's get that one out of the way.
>
> **[0:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=30)** What the automatic one will do is it will scale the dashboard to fit any screen that's it currently being viewed in.
>
> **[0:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=38)** Now, at first glance, this would seem ideal because the dashboard's going to resize to fill whatever size screen I've got.
>
> **[0:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=45)** And we can see here that, when I've resized my screen, I've now got no gray space.
>
> **[0:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=48)** Just white space in my dashboard elements have all scaled to fill that screen.
>
> **[0:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=54)** However, if somebody then views this dashboard on a much smaller screen, I don't know what that dashboard's going to look like because all of the elements are going to be squished up to fit that space.
>
> **[1:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=64)** I've got no control over the end product.
>
> **[1:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=67)** Now, if I don't know where people are going to view their dashboards and how they're going to view them, how can I be certain that dashboard is still going to work, it's still going to look good, it's still going to have that same level of acceptability and usefulness that I want it to have?
>
> **[1:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=84)** I can't do that using the automatic.
>
> **[1:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=86)** So on the face of it, automatic sounds really good, but actually in practice it's generally not a good idea to use it.
>
> **[1:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=95)** Now, the fixed dashboard size gets around this problem.
>
> **[1:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=99)** Because what that does is it says, no matter what dashboard you look at and where you look at it, on whatever size screen, it's always going to look exactly the same.
>
> **[1:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=108)** Now, when we go to the fixed size, we have some options.
>
> **[1:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=110)** We have some prebuilt sizes in here that we can use.
>
> **[1:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=114)** So we have 800 by 600 to fit on a laptop.
>
> **[1:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=117)** We have different sizes for blog posts, for PowerPoints, and all these different options.
>
> **[2:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=122)** But what that does, any one we select fixes that size.
>
> **[2:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=126)** And we can see when I've selected the 800 by 600, my dashboard has shrunk in size.
>
> **[2:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=130)** The gray area to the right and to the bottom is now kind of empty space.
>
> **[2:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=135)** It isn't part of the dashboard.
>
> **[2:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=136)** The dashboard is only the white background.
>
> **[2:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=140)** Now, all of my sheets have been resized, but this heat map now has some problems because now it's too small to be useful.
>
> **[2:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=150)** And if I change the sizing of that dashboard to view Entire View, it's just far too cluttered.
>
> **[2:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=157)** So that dashboard size is going to be too small for that particular element.
>
> **[2:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=162)** So it might be I need to remove that.
>
> **[2:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=165)** Now, kind of the midway ground between the two is the range setting.
>
> **[2:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=170)** So rather than fixed, we can say range.
>
> **[2:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=173)** Now, what I can do with that is I can set a minimum and a maximum sizing that this dashboard will ever be sized to.
>
> **[3:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=180)** It'll go somewhere between those two extremes.
>
> **[3:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=182)** So if somebody's looking on a larger screen, they're going to see the dashboard, possibly with some empty space, but if they're on a smaller screen, it should size to fit them.
>
> **[3:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=191)** Now, which one should you choose?
>
> **[3:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=193)** Well, like most things, it depends.
>
> **[3:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=196)** I'd never choose automatic.
>
> **[3:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=197)** It's far too uncertain, and we don't know what the end product's going to look like.
>
> **[3:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=202)** In most cases, the fixed one tends to be the right one, particularly if you're doing it for a work environment.
>
> **[3:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=210)** What I'd advise doing is actually surveying your users.
>
> **[3:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=214)** You know, where are they going to be viewing their dashboard?
>
> **[3:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=217)** Is it primarily on laptop screen?
>
> **[3:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=220)** Is it going to be on a monitor plugged into a laptop?
>
> **[3:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=223)** So find out what screen size your users are going to be using, and then fix your dashboard accordingly.
>
> **[3:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=229)** If you have people that have a range of different sizes and you need to make sure that it looks good on both a small size and maybe a larger size screen, then maybe the range is good for that.
>
> **[4:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=240)** Set the minimum and maximum, and then that way you can ensure that you know where the boundaries are for your dashboard.
>
> **[4:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=248)** In practice, if possible, I would always select the fixed.
>
> **[4:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=252)** You know when you create the dashboard exactly what it looks like, so you know what the end product's going to look like.
>
> **[4:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=258)** Sizing is really important to get right because it determines how much information you can put inside the dashboard, how many elements you can add to that dashboard as well.
>
> **[4:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/sizing-your-dashboard?u=76281980&t=267)** So I would recommend using the fixed size and picking the size that fits the majority of your users.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **CLI Commands:** find (1), make (1)
> **UI Navigation:** go to (1), select the (1)
> **Speakers:** - [instructor] (1)

#### Floating vs. tiles layouts
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=0)** - [Instructor] Let's look at the example for tiled and floating layouts to see how they work.
>
> **[0:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=8)** Now, the tiled layout is the default way that Tableau sets up a dashboard for you.
>
> **[0:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=13)** It allows you to easily put things into a grid.
>
> **[0:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=17)** So, I've got my dashboard here with four sheets, my map, my timeline, my heat map, and a customer scatterplot.
>
> **[0:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=24)** And I've got my dashboard fixed size 1,000 by 600.
>
> **[0:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=30)** Okay, so this is going to be a tiled layout.
>
> **[0:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=32)** Now, I can set the default of tiled at the bottom left-hand corner.
>
> **[0:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=37)** And if I bring my first element in and drag it across, you see the whole area turns gray.
>
> **[0:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=45)** So that tells me that when I release my mouse, that's where this entire sheet is going to go.
>
> **[0:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=49)** And if I do that, we see that the map goes into the center of the dashboard and completely fills the area, okay?
>
> **[0:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=58)** So now if I bring in another sheet, so if I bring my timeline in, it's ask me whereabouts should you want to place it?
>
> **[1:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=66)** And when I release it, it puts it right next door in this gridded layer.
>
> **[1:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=72)** Now there's a boundary between these two sheets.
>
> **[1:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=75)** I can minimize the timeline, maximize the map, and vice versa.
>
> **[1:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=80)** Now both these two sheets are fixed within that dashboard with that boundary between the two in this gridded tiled layout.
>
> **[1:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=87)** And as I add more elements, so I could bring in another sheet, or I could bring in a text box from the object layer at the bottom.
>
> **[1:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=96)** I could add that in if I wanted to put some free text.
>
> **[1:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=102)** They're all in this grid.
>
> **[1:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=103)** So I've got these boundaries between the two where I can resize, reshape my areas to fit whatever design that I want.
>
> **[1:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=112)** But the only thing I can do is resize.
>
> **[1:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=116)** I can't have them overlap or anything more exotic than that.
>
> **[2:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=120)** It's still in this tiled gridded rigid layout.
>
> **[2:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=125)** Now, if you want to get a little bit more creative and a bit more freeform, then we have to use the floating option.
>
> **[2:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=131)** So starting off with the floating dashboard, all I do is change at the bottom from Tiled to Floating.
>
> **[2:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=138)** And now see what happens when I drag in my map.
>
> **[2:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=141)** Now, if I drag my map in, we have a much, much smaller gray area, and when I release this, the map just fills that little spot.
>
> **[2:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=151)** Now, this object just floats around in space.
>
> **[2:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=154)** I can put it anywhere I like in my dashboard.
>
> **[2:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=156)** Similarly, my profit is now also just a floating object.
>
> **[2:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=161)** If I bring in my timeline and drag that in, same thing happens.
>
> **[2:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=166)** It's now just a floating object.
>
> **[2:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=168)** I can resize this independently of the map now.
>
> **[2:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=173)** So if I want to have the map really narrow and my profit really wide, I can do that.
>
> **[2:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=179)** If I wanted for some reason to overlap one on top of the other, I can do that as well.
>
> **[3:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=183)** Sometimes it works better than others.
>
> **[3:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=187)** Both these objects are independent of each other.
>
> **[3:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=189)** They're just floating into space.
>
> **[3:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=190)** They don't know of each other's existence, so they don't know that one size can affect the other.
>
> **[3:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=196)** So is this better than the tiled?
>
> **[3:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=200)** Well, in one way, yes, because as you can see, I can move my profit map anywhere and I can resize it anywhere that I want.
>
> **[3:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=208)** But if I want to line up these two objects, so they are the same level, kind of vertically, I've either got to nudge it around pixel by pixel, or I have to go to the Layout tab where I can fix the position x and y to line up.
>
> **[3:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=224)** So I could set my y at 200 for my timeline, go to my map, and set that to be 200 as well.
>
> **[3:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=230)** So now these two objects are now aligned vertically.
>
> **[3:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=235)** There's no snap to grid, there's no snapping to each other's object.
>
> **[3:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=239)** The only way we can do it is either by dragging it around ourselves or by fixing this position in here.
>
> **[4:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=246)** Now, again, you're going to have to decide which you want to do because never mix and match the two together.
>
> **[4:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=255)** As a rule, you only want to to ever have 100% fixed or 100% floating.
>
> **[4:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=261)** The only thing that you could probably get away with having a hybrid model is if you have legends that you want to place in a different position.
>
> **[4:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/floating-vs-tiles-layout?u=76281980&t=270)** But for any chart, I'd say stick to one or the other.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), this, (1)
> **UI Navigation:** go to (2)
> **CLI Commands:** snap (1)
> **Speakers:** - [instructor] (1)

#### How to use layout containers
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=0)** - [Presenter] Let's look at a couple of examples to understand how containers work.
>
> **[0:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=5)** Now, if you've created a dashboard already using the tiled method, you've actually already created a container, but you just didn't know it.
>
> **[0:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=11)** When we use the tiled layout, Tableau uses containers to put objects into.
>
> **[0:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=16)** So in this example dashboard here, there are actually two containers.
>
> **[0:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=20)** There's one for the profit legend on the right-hand side and then there's one that contains the map.
>
> **[0:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=26)** Now the problem with containers is they're invisible; they're just holding places to put other things in, so you can't actually see them.
>
> **[0:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=33)** If we go to the Layout tab and expand the Item hierarchy at the bottom, I can see all of the objects that are currently in my view.
>
> **[0:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=42)** So I have my Profit Legend, which is inside a vertical container, and the Profit Map, which is inside this tiled container, which is actually a horizontal container that actually has the tiled and the vertical container inside it.
>
> **[0:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=58)** So this is where the complication comes with containers.
>
> **[1:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=62)** When we drag and drop elements into our dashboard, Tableau has to create this hierarchy of containers in order to do the layout that we want it to do.
>
> **[1:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=71)** Now, that might be fine because we can just drag and drop our elements in, resize them.
>
> **[1:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=76)** Tableau will take care of all that container work for us, but we can actually use them ourselves if we want to control what the layout looks like.
>
> **[1:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=85)** So why might I want to do that?
>
> **[1:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=87)** Well, let's start again with this container.
>
> **[1:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=91)** So I'm going to remove everything out of here and we'll start again.
>
> **[1:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=96)** Now, I can add the container first and then put my object inside it.
>
> **[1:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=102)** So let's look at a horizontal container.
>
> **[1:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=105)** I'm going to drag and drop this into my view, and there's my container.
>
> **[1:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=111)** It's hard to see anything, but notice I've got a blue border.
>
> **[1:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=115)** In dashboards, sheets and every other object have a gray border.
>
> **[2:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=121)** Containers have a blue border.
>
> **[2:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=124)** So this now is a blue horizontal container.
>
> **[2:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=129)** That means that anything I put in here is going to align itself horizontally with each other.
>
> **[2:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=134)** Let's look at that in practice.
>
> **[2:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=136)** So now, if I add my timeline into my container, you can see that there's a blue border.
>
> **[2:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=143)** That means that when I let go, this container's going to contain this particular object.
>
> **[2:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=149)** Now, if I get my customer scatterplot, my options are now to put it to the right-hand side of my timeline.
>
> **[2:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=162)** So now, I have my scatterplot, and my timeline, and my legends.
>
> **[2:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=168)** Now if I want to see what container is holding my particular objects, I can go to the Layout tab and I can see my containers in here.
>
> **[2:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=178)** So I can see I've got my vertical container that has got my region and my quantity legends, and now I have my horizontal container that I placed in a moment ago that just contains my timeline and my scatterplot.
>
> **[3:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=192)** Now remember before when we had the tiled layout that there would be a fixed line between the two elements that we had in here, but for a horizontal or a vertical container, there's a dotted blue line.
>
> **[3:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=207)** This is telling me that Tableau's automatically sizing these two sheets for me to maximize the amount of space.
>
> **[3:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=213)** It understands how to draw things within that container.
>
> **[3:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=217)** Now, if I want to, I can override that.
>
> **[3:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=220)** If I want my scatterplot to take up more room, I can simply drag it and move it bigger or smaller.
>
> **[3:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=226)** As we add data and filter data, Tableau's going to redraw these to maximize the view.
>
> **[3:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=233)** So if I had more data in my scatterplot, that scatterplot might get larger and compress down that timeline.
>
> **[4:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=240)** Now, if I don't want that to happen, I can fix these object size to always use the available space.
>
> **[4:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=247)** To do that, I have to go to the controller for the container.
>
> **[4:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=252)** Now again, there's two ways of doing that.
>
> **[4:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=254)** I can either go to my Layout tab and select the container itself, or if I happen to be in a different view, I can double-click on the Control icon for the sheet, the double light gray line.
>
> **[4:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=268)** If I double-click on that, it then jumps up the hierarchy to show me the container that that sheet lives in.
>
> **[4:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=276)** I can then go to the options for the container and I can distribute the content evenly.
>
> **[4:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=284)** What that would do is it'll mean that no matter how we resize the overall container, those two sheets inside are always going to be the same size to each other.
>
> **[4:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=295)** So that allows us to create whatever layout that we like and ensure that all of the objects are going to fit inside each other.
>
> **[5:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=304)** Now, say I wanted to have, in the middle, I want to have my map and my heatmap stacked one on top of another.
>
> **[5:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=314)** Now, the easy way to do that would be to add a vertical container.
>
> **[5:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=319)** So if I add a vertical container in between my customer scatterplot and my timeline, I can see there's a gray area where when I release this is where the container is going to go.
>
> **[5:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=330)** So now, I have a container that's empty.
>
> **[5:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=334)** It's got the blue border, so I know it's a container, and then I can put my Profit Map inside that container and my Profit Heatmap underneath the map.
>
> **[5:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=346)** Now, if I go to my Layout tab and look at my hierarchy, I can see that it's got a little bit more complicated.
>
> **[5:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=352)** I have my vertical container that has my profit and my heatmap, but this vertical container is actually inside the horizontal container.
>
> **[6:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=361)** So I have embedded one container within the other.
>
> **[6:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=365)** Now it sounds quite complicated, but once you understand it, it's actually quite powerful.
>
> **[6:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=371)** It means I can control the layout.
>
> **[6:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=374)** Now we see that the map and the heatmap have been scaled differently.
>
> **[6:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=379)** Tableau understands that the best view of that map is to size it by that x-y, so the map will fill that particular view.
>
> **[6:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=388)** But if I decide actually I want those to be equal, I can select this container by clicking on the map, double-clicking on the control, going for the container option just for the middle one, distribute content evenly, and now my map and my heatmap are scaled the same vertically, and my Profit Timeline, my Customer Scatterplot, and my container with my two objects in are distributed evenly horizontally.
>
> **[7:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=421)** If you just use a tiled layout and drag and drop your elements in and then look at that item hierarchy, it looks really, really messy.
>
> **[7:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=429)** However, if we start with empty containers, we can add what we like into them.
>
> **[7:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=435)** One trick for when you're doing the layout containers is to color the backgrounds.
>
> **[7:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=440)** Let me show you again with a completely new sheet.
>
> **[7:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=443)** If I put in my horizontal container, we can't see it, but if I go to the Layout options, I can change the background and give it a background color.
>
> **[7:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=454)** If I then add my map into here, my Profit TimeLine underneath, if I then wanted to put another container inside it, this background is invisible because it's just picking up the background color.
>
> **[7:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=471)** I can change the background of that to be something else.
>
> **[7:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=476)** So now, I can see where my parent container and my child container sit within each other.
>
> **[8:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=483)** What some people do is actually create blank containers using blank objects, color-code them, just so they can see where they're going to go and how they want to lay them out.
>
> **[8:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=491)** This might be useful for your client to create a template to reuse time and time again.
>
> **[8:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=497)** Containers can be scary because Tableau does a lot of the work for you when you use the tiled layout.
>
> **[8:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-layout-containers?u=76281980&t=503)** But if you start creating your own containers, you can create your own complex layouts that can actually be really, really useful.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (7), drag and drop (4), double-click (2), select the (1)
> **Code Keywords:** let (6), override (1), else. (1)
> **Definitions:** means that (2), is a  (1)
> **Exercise Files:** template (1)
> **Speakers:** - [presenter] (1)

#### Using padding objects to help with tiled dashboards
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=0)** - [Instructor] When you create a dashboard using the tiled layout, Tableau tries to pack everything into the area that you've told it to use, and that can make some dashboards look a little bit cramped.
>
> **[0:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=15)** One of the things that we can use is padding, both internal and external padding to give a bit more space to each of the objects in your dashboard.
>
> **[0:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=26)** So let's look at this example.
>
> **[0:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=27)** So this is just a very simple dashboard of my four charts that I've put inside in the gridded layout.
>
> **[0:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=34)** Now, what Tableau does is it knows that the space on the dashboard is really crucial, and it's expanded each of the sheets to fill that view.
>
> **[0:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=43)** So you can see that in between the heat map and the map, there's not a lot of space between the two.
>
> **[0:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=50)** Padding allows me to put extra space in the dashboard, and that sounds counterintuitive, because we always talk about the data to ink ratio and how much space we've got in the dashboard and how we should maximize and make the most of every single pixel that we've got.
>
> **[1:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=69)** But sometimes, a bit of white space is useful because it gives room to breathe, and it can help make the layout slightly easier to digest.
>
> **[1:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=80)** So how do we go around doing this?
>
> **[1:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=82)** So we use padding.
>
> **[1:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=84)** Let's go to the Layout tab.
>
> **[1:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=87)** And if I select an object, let's say the profit map, I can see that I have an X and Y coordinate.
>
> **[1:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=92)** So that's the position and the sizing.
>
> **[1:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=95)** Now, for a tiled layout, I can't change these, because that's determined by the grid layout itself.
>
> **[1:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=103)** If I scroll down, I have inner and outer padding.
>
> **[1:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=107)** So outer padding will add white space to the outside of my sheet.
>
> **[1:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=113)** Inner padding would do it to the inside of the sheet.
>
> **[1:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=116)** So let's try and see what both do.
>
> **[1:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=119)** Now, you can see that the outer padding is already set to four.
>
> **[2:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=123)** So that means there is four pixels set around my object.
>
> **[2:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=128)** So let's go ahead and click on one of these to change it.
>
> **[2:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=131)** Now, by default, it adds all size equal.
>
> **[2:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=134)** This may or may not what I want to do.
>
> **[2:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=136)** So let's just see what happens if I change it to a bigger number.
>
> **[2:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=139)** So let's put say 20.
>
> **[2:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=142)** So now we can see that my chart has got smaller, and there is a 20-pixel border around that entire sheet.
>
> **[2:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=152)** If I make it even bigger, we can see it even more extreme.
>
> **[2:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=156)** So now I've got this padding that's made the chart smaller but extra white space.
>
> **[2:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=162)** Well, doesn't that seem a waste?
>
> **[2:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=163)** Why would I want to make my chart any smaller?
>
> **[2:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=167)** Well, let's send it back to something reasonable, say 10.
>
> **[2:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=171)** What that's done is put a little bit of space between the map and the object next to it.
>
> **[2:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=177)** That spacing can make a dashboard look slightly less cluttered because as I say, you want to put as much information into the dashboard as possible, but still make it look good.
>
> **[3:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=187)** So the outer padding, as we've done here, puts that 20 pixel board around the outside.
>
> **[3:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=193)** If I then select my profit heat map and do the same thing, I can put a 10 pixel border around there.
>
> **[3:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=201)** So now, there's a significant gap between each of these elements where the data actually starts.
>
> **[3:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=207)** The dashboard itself still has my two sheets butted up against each other.
>
> **[3:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=213)** The actual sheet itself starts kind of inside.
>
> **[3:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=216)** So that's what happens if we use the outer padding.
>
> **[3:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=221)** What about if we change to use the inner padding?
>
> **[3:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=223)** How does that look any different?
>
> **[3:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=225)** Well, if I go to my outer padding, I'll set this back to four.
>
> **[3:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=228)** All size equal for that heat map.
>
> **[3:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=231)** And then do the inner padding.
>
> **[3:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=233)** That's currently set to zero.
>
> **[3:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=234)** Let's put that to 20 and see what that looks like.
>
> **[3:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=238)** So again, it's put the padding around the inside of my chart to make it look a bit smaller.
>
> **[4:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=243)** I can do the same thing again with my map, and I can put my padding around the inside instead of the outside.
>
> **[4:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=256)** Defect is slightly subtle between the difference between the two.
>
> **[4:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=259)** And depending on whether you've put borders round, it can really highlight things.
>
> **[4:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=265)** The point is it allows me to add extra space inside my dashboard while still using that tiled layout.
>
> **[4:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=273)** You'll turn it to doing this would be using a floating layout, where each chart is individually sized, 'cause I can set those sizes, but I also have to control whereabouts within the dashboard they sit because they're floating.
>
> **[4:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=289)** What the padding does is kind of get us halfway to that floating.
>
> **[4:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=294)** I'm still using the rigid structure that tiling allows me to do.
>
> **[4:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=298)** If I resize my tiles, the padding will adjust accordingly.
>
> **[5:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=304)** So what I can do is by adding the padding to give a little bit more space, I can still use the grid layout.
>
> **[5:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=310)** I can use all the advantages of that, that it will size nicely, especially if we use layout containers.
>
> **[5:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=315)** But the padding gives me just that little extra breathing room so that all my charts are not one on top of another.
>
> **[5:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=322)** It's easy to add padding and remove padding.
>
> **[5:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=325)** We don't have to add it all the way round.
>
> **[5:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=326)** We can just add it to the top or the bottom by selecting an item, such as the map, clicking on my padding to put this back to zero, and untick all sides equal.
>
> **[5:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=339)** So if I wanted to, I could not put any padding on the top and bottom.
>
> **[5:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=343)** So set that to zero, set that to zero, and just put padding on the left and right.
>
> **[5:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=349)** So 20 on that side and 20 on that side.
>
> **[5:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=352)** So now, my chart is right to the top and bottom of that tile, but I've got space on the left and right.
>
> **[6:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=360)** We've got complete control.
>
> **[6:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=362)** So use padding and tiles.
>
> **[6:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=364)** Gives you a nice gridded layout, but gives you that extra bit of space.
>
> **[6:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=368)** Give it a try.
>
> **[6:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-padding-objects-to-help-with-tiled-dashboards?u=76281980&t=369)** You might be surprised at the results.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), default, (1), try. (1)
> **CLI Commands:** make (8)
> **UI Navigation:** go to (2), scroll down (1), click on (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Adding a download button
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=0)** - [Instructor] Floating dashboards allow the freeform placing of elements anywhere inside your dashboard.
>
> **[0:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=6)** This gives you the opportunity to be very creative with your layouts, but does require a little bit more work in terms of sizing and positioning, particularly if you want things to line up or be the same size.
>
> **[0:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=18)** So let's have a look at how we would use floating objects inside the dashboard.
>
> **[0:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=23)** The first thing you need to do if you're going to create a floating dashboard is set the dashboard to be a floating one.
>
> **[0:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=29)** That option is on the bottom left hand corner of the view, so I'm going to change into Floating.
>
> **[0:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=35)** So now anything that I drag and drop into my dashboard is going to be a floating object.
>
> **[0:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=41)** So if I drag in my map, we have a floating map, and I can position this anywhere within my dashboard.
>
> **[0:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=50)** If I get too close to the top, it will remove it.
>
> **[0:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=53)** So we have to be careful where we actually put our control.
>
> **[0:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=56)** We can't exceed the top boundary, otherwise it will disappear.
>
> **[0:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=59)** But I can place my map anywhere that I like within the white space.
>
> **[1:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=64)** Similarly, my profit, I can put that somewhere near the map, and I could bring in other objects into my map.
>
> **[1:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=75)** So now I've got my four sheets within my map, and they're all sized very small.
>
> **[1:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=81)** If I then want to expand them out, I can then click anywhere on the edge to expand it horizontally or vertically.
>
> **[1:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=91)** So I could make my table a bit wider, a bit taller.
>
> **[1:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=95)** My scatterplot, I can expand out.
>
> **[1:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=100)** Now notice that all of my legends have been put one on top of the other, so now I've got to move all of these around.
>
> **[1:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=106)** That actually goes over here.
>
> **[1:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=109)** My regional colors also go kind of over here somewhere.
>
> **[1:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=114)** So I have complete control where all of these objects go, which is a good thing.
>
> **[2:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=120)** But I also have complete control over where they go, which is a bad thing because I've got a lot more work to do.
>
> **[2:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=125)** With the tiled layout, all of those legends will be in a container to the right-hand side.
>
> **[2:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=130)** So, how can we make this slightly easier to do?
>
> **[2:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=134)** Well, if we go to the Layout tab on the top left of our screen and select one of our elements, if I select the map, I can see that I can fix the x,y coordinate by typing in the coordinate values.
>
> **[2:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=149)** So if I say 0,0, that's actually going to put the map in the top left hand corner.
>
> **[2:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=157)** And if I want to actually set the size of it, I can do, I can set the size to be, say, 400 wide by 300 high.
>
> **[2:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=168)** So I can manually change the height, position, and width of any of my elements.
>
> **[2:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=175)** So if I want them to line up, I can do that.
>
> **[2:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=177)** So if my profit heat maps, I actually wanted it to line up underneath the profit map, I would then have to go to my profit heat map and set the exposition to be 0.
>
> **[3:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=188)** And I'd set the y position to be something slightly larger than the map in order to get that to align directly underneath that.
>
> **[3:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=198)** So if it's so hard to do this, then why even use the floating option?
>
> **[3:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=206)** You know, it seems like it's a lot of extra hassle.
>
> **[3:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=209)** Well, sometimes you might want to make maximum use of your space.
>
> **[3:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=216)** So for example, with my timeline, I might have a lot of space at the sort of higher end.
>
> **[3:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=224)** So actually what I might want to do is put some text above my line.
>
> **[3:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=229)** Now, I can't do that with the tiled layout because the tiled layout, as soon as I bring the text object, I go to my dashboard and select my text objects, that would actually create as part of the grid.
>
> **[4:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=244)** This is an interesting line.
>
> **[4:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=250)** This text object can go anywhere that I like.
>
> **[4:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=252)** So if I want to put some annotation that just sits somewhere in space, I can go ahead and do that.
>
> **[4:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=259)** Now, of course, the downside is, is that this text object is not linked in any way to that timeline.
>
> **[4:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=265)** And if I move the timeline, I have to move the text as well.
>
> **[4:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=270)** So the layout really depends on what it is you want to do and which one you pick.
>
> **[4:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=276)** The floating elements do allow you to use space in a more creative way.
>
> **[4:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=281)** Sometimes you have particular charts that have a lot of empty space that you can actually put another chart inside.
>
> **[4:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=289)** Things like maps can sometimes have a lot of empty space, depending on the geographic area that you're looking at, and sometimes you could actually put another chart in that sort of area.
>
> **[5:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=302)** As a rule, only ever pick one or the other.
>
> **[5:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=305)** Pick either floating or tiled, don't mix the two together because results can be quite tricky.
>
> **[5:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=311)** The floating does allow more creative freedom, but you do have to do slightly more work with it.
>
> **[5:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=318)** But give it a go.
>
> **[5:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=319)** It doesn't hurt anything, and it's very quick and easy to do.
>
> **[5:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=324)** So have a go at both the tiled and the floating layout to look at the pros and cons and pick which one you want.
>
> **[5:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=330)** But do this every time you create a dashboard, because the tiled layout and the fixed layout will work in some cases, whereas the floating one will work in the others.
>
> **[5:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/how-to-use-floating-items?u=76281980&t=340)** So don't stick rigidly to one or the other, pick the best choice for your data and your dashboard.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (3), drag and drop (1), select the (1)
> **CLI Commands:** make (3)
> **Code Keywords:** require (1), let (1), this, (1)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** for example (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Create a basic dashboard
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-create-a-basic-dashboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-create-a-basic-dashboard?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-create-a-basic-dashboard?u=76281980&t=5)** - [Lecturer] Here's an exercise to practice creating a basic dashboard and set up a dashboard that we're going to use throughout the rest of this course.
>
> **[0:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-create-a-basic-dashboard?u=76281980&t=13)** So here are the steps you're going to do.
>
> **[0:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-create-a-basic-dashboard?u=76281980&t=15)** First, you're going to open the Create Basic Dashboard Starter workbook, which has already got data for the Landon Hotel.
>
> **[0:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-create-a-basic-dashboard?u=76281980&t=22)** Have a look through it so you understand all the different sections.
>
> **[0:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-create-a-basic-dashboard?u=76281980&t=27)** Next, create a heat map showing the annual room occupancy for each hotel.
>
> **[0:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-create-a-basic-dashboard?u=76281980&t=32)** Create a bar chart for the total orders per product.
>
> **[0:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-create-a-basic-dashboard?u=76281980&t=37)** Create a monthly profit timeline.
>
> **[0:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-create-a-basic-dashboard?u=76281980&t=40)** Create a heat map of the quantity of product per hotel and create a scatterplot showing the revenue versus profit for each hotel.
>
> **[0:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-create-a-basic-dashboard?u=76281980&t=49)** Once you've got your sheets, you're then going to create a dashboard suitable for a laptop.
>
> **[0:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-create-a-basic-dashboard?u=76281980&t=55)** Use layout containers for an equal grid layout, give the dashboard a suitable title, and add the two heat maps, scatterplot, and the timeline to the dashboard.
>
> **[1:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-create-a-basic-dashboard?u=76281980&t=67)** This should take around 10 minutes.

> [!info]- Semantic Content
>
> **UI Navigation:** open the (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [lecturer] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Create a basic dashboard
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=0)** - [Instructor] Here's my solution to the create basic dashboard exercise.
>
> **[0:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=10)** So I've got my starter and it has a connection to the London Hotel data.
>
> **[0:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=16)** So the data consists of a number of different elements.
>
> **[0:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=20)** So we have some expense data, we have some information about the hotels, their locations.
>
> **[0:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=25)** We have some data on room and bed occupancy, some order details of products that have been ordered into the hotel, and some information about revenue.
>
> **[0:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=35)** So first thing we need to create is a heat map showing the annual room occupancy for each hotel.
>
> **[0:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=41)** So I'm going to start with the hotel name and put that on my row.
>
> **[0:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=47)** And I want the annual room occupancy.
>
> **[0:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=50)** So we'll look at the occupancy data.
>
> **[0:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=52)** So I'm going to take the occupancy date and put that on my column.
>
> **[0:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=56)** So that'll give my dates.
>
> **[0:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=59)** And we want the room occupancy, so I'm going to drag that into the middle.
>
> **[1:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=65)** So those occupancies look really, really high.
>
> **[1:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=67)** So this is because we have data that is weekly or monthly, that's then being aggregated up.
>
> **[1:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=75)** So I don't want to do that.
>
> **[1:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=76)** I want the average occupancy.
>
> **[1:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=79)** So I am going to go to my measure, change that to average.
>
> **[1:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=84)** So now I get much better looking numbers.
>
> **[1:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=88)** And then what I'm going to do is add the room occupancy to my color, change that to be the average rather than the sum.
>
> **[1:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=100)** And change the mark type to be square.
>
> **[1:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=105)** So that's my room occupancy heat map.
>
> **[1:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=108)** Next thing we're going to create a bar chart of total orders per product.
>
> **[1:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=112)** So let's go to the order section.
>
> **[1:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=114)** So product.
>
> **[1:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=116)** So I have product name and we want the total orders.
>
> **[2:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=121)** So I've got my order total.
>
> **[2:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=124)** It gives me my bar chart.
>
> **[2:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=126)** And then to make it a bit more interesting, I'm going to put product category onto the color so I can then group it by the product category.
>
> **[2:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=136)** I'm going to go to my monthly profit timeline.
>
> **[2:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=139)** So that is in the revenue data.
>
> **[2:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=141)** So I have my profit date, so let's put that onto my column.
>
> **[2:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=145)** I'm going to change that to be the continuous month.
>
> **[2:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=147)** So I want a timeline.
>
> **[2:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=149)** So I've got my placeholders, and then I'll put profits onto the row.
>
> **[2:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=155)** Okay, so we can see all my profits.
>
> **[2:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=157)** It's quite a seasonal trend on there.
>
> **[2:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=160)** My hotels don't make a lot of money during the winter months, but during the summer they're quite good.
>
> **[2:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=165)** Next up, quantity quad heat map.
>
> **[2:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=169)** So we want a quantity of the product category per hotel.
>
> **[2:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=173)** So again, I want my hotel name.
>
> **[2:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=176)** Let's put that on my row.
>
> **[3:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=181)** The product category, put that on my column.
>
> **[3:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=186)** And let's put my product.
>
> **[3:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=190)** What do we want?
>
> **[3:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=191)** We want the quantity onto my text, quantity again, onto color.
>
> **[3:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=199)** And change the type to be a heat map.
>
> **[3:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=202)** So now I've got my product categories for each of my individual hotels.
>
> **[3:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=208)** And then lastly, we need a scatter plot showing the revenue versus the profit for each hotel.
>
> **[3:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=213)** So I've got my profit and my revenue.
>
> **[3:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=217)** Put one on the row, one on the column, put hotel name on the detail.
>
> **[3:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=222)** I've got my hotels.
>
> **[3:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=223)** Now because none of them make zero profit or zero revenue, they're all up in the top right hand corner.
>
> **[3:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=229)** So I'm going to edit my axis.
>
> **[3:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=232)** Untick include zero, and that will cause these to expand, to fill the gap, edit the axis.
>
> **[4:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=245)** And to conclude zero.
>
> **[4:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=248)** Now I have all my points.
>
> **[4:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=250)** I'm going to change the mark type to be a circle because I prefer the look of those.
>
> **[4:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=255)** And I'm going to put the hotel name onto color as well, just to give it a bit more color.
>
> **[4:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=263)** Let's change all the slides and be slightly bigger.
>
> **[4:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=266)** I'm going to go to color and put a board around them as well.
>
> **[4:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=270)** Okay, so I've got my sheets and I've got all of my elements in there.
>
> **[4:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=277)** Okay, next thing I'm going to do is I want to create my dashboard.
>
> **[4:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=284)** So I'm going to go to my dashboard.
>
> **[4:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=285)** So I'm going to set the size.
>
> **[4:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=287)** So I'm going to use a fixed size, and I'm going to set mine to 1,000 by 600.
>
> **[4:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=298)** And then I'm going to put my objects in.
>
> **[5:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=301)** So I've got timeline, my scatter plot, and my two heat maps.
>
> **[5:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=306)** So let's put my timeline in or to use, so it's tiled first.
>
> **[5:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=310)** Remember to do that.
>
> **[5:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=312)** So there's my profit, and then my scatter plot.
>
> **[5:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=318)** And then we'll put my heat map and my second heat map there as well.
>
> **[5:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=328)** Okay, so I've got my profit in my top left, my revenue versus profit, my room occupancy, and my product quantity heat map.
>
> **[5:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=337)** Okay, so we've got a little bit of scaling on going on here, but that's good.
>
> **[5:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=342)** That's a basic dashboard which we'll be fixing later on.
>
> **[5:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-create-a-basic-dashboard?u=76281980&t=346)** As long as you've created the dashboard and you've got your layout happy with it, it doesn't need to look exactly like this, but what you do need to have are your four sheets or within your dashboard and a layout that you're happy with.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this, (1)
> **UI Navigation:** go to (5)
> **CLI Commands:** make (3)
> **Definitions:** is a  (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Dashboard Objects

> [↑ Back to Table of Contents](#table-of-contents)

#### Adding a horizontal container
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=0)** - [Narrator] Let's take a look at how we use horizontal containers within a dashboard to hold some of our design elements.
>
> **[0:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=8)** Now, a horizontal container allows us to contain objects, but have them all arranged horizontally.
>
> **[0:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=17)** So it's really good for the gridded layout.
>
> **[0:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=19)** Now, the way that we add a container is we drag it from the objects.
>
> **[0:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=24)** So the bottom left hand corner of our dashboard designer, we have all of our dashboard objects that we can add in.
>
> **[0:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=30)** These aren't sheets we created.
>
> **[0:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=31)** They're additional things that Tableau allows us to add to a dashboard.
>
> **[0:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=35)** Now, one of 'em is horizontal container.
>
> **[0:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=39)** Now if I drag and drop this into my dashboard, see what happens.
>
> **[0:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=42)** So I'm going to drag it out and drop it into the center of my dashboard and it still looks exactly the same.
>
> **[0:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=51)** Okay?
>
> **[0:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=51)** That's because containers are kind of an empty blank thing.
>
> **[0:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=58)** They're waiting for you to put something inside of them.
>
> **[1:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=60)** So there's not a lot to see.
>
> **[1:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=62)** The only way I know that I've got a container is I can see that there's a blue border around it.
>
> **[1:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=68)** That's the edge of my container.
>
> **[1:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=69)** So anything I put inside this blue area, it's going to be inside this particular container.
>
> **[1:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=75)** If I click on the layout tab at the top left and go down to the item hierarchy at the bottom, I can see the horizontal container that I just added.
>
> **[1:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=85)** Now I can rename that container if I want to.
>
> **[1:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=87)** So let's call that main.
>
> **[1:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=89)** So this is now my main container that I've got in my dashboard.
>
> **[1:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=92)** Now if I click away, you see it completely disappears.
>
> **[1:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=96)** The containers are not going to be seen unless we force Tableau to color them or put a board around them.
>
> **[1:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=102)** They're an invisible thing just to help with the arrangement of our dashboard.
>
> **[1:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=108)** So let's put something inside it.
>
> **[1:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=110)** So if I go back to my list of items, I've got my timeline.
>
> **[1:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=114)** So let's put my timeline in.
>
> **[1:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=115)** So I'm going to drag that over, and as I get to the container, see it outlines it in blue to show that when I release my mouse button, it's going to put it inside that horizontal container.
>
> **[2:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=126)** Okay?
>
> **[2:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=127)** So that's my line chart.
>
> **[2:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=129)** And then let's put in my scatter plot.
>
> **[2:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=133)** Now, 'cause these are horizontal containers, the idea is, is you want to arrange things horizontally.
>
> **[2:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=137)** So I'm going to put my heat map or customer scatter plot, or my map to the right hand side.
>
> **[2:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=143)** In this case it's going to be my scatterplot.
>
> **[2:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=148)** And you can see that what Tableau automatically does is resize the profit timeline and the scatterplot to fit inside that container.
>
> **[2:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=156)** Now I've got my right hand side container here that has my legends in.
>
> **[2:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=161)** So I'm actually interested in those, 'cause they're taking up a lot of room.
>
> **[2:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=163)** So I'm going to remove that one.
>
> **[2:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=165)** Tableau warned me.
>
> **[2:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=166)** I'll ignore that.
>
> **[2:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=167)** And I've got my two sheets horizontally arranged within that container.
>
> **[2:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=172)** Now, if I want to, I could resize, 'cause maybe I want my line chart to be bigger, or I want to resize to make my scatter plot big.
>
> **[2:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=179)** I have that choice in doing that.
>
> **[3:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=182)** If I then add another element, so maybe I want to put some text in between the two.
>
> **[3:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=188)** If I drop it in between my two sheets and you see the little dotted line appears to show that this is where I'm going to try and put my text box, and it'll say, here is some text.
>
> **[3:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=201)** This would be a whole paragraph if I wanted to put that in there.
>
> **[3:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=204)** And again, now it's sitting horizontally aligned within my dashboard.
>
> **[3:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=210)** If I want to resize it, I can do and the chart will zoom to fit.
>
> **[3:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=216)** Now, if I ever want to get back to the container itself, I have two options.
>
> **[3:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=220)** I can either double click on the gray area at the top of my particular object and that will take it back up the hierarchy to the parent container.
>
> **[3:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=230)** Or I can go to my layout tab and I can do the same thing from the item hierarchy control at the bottom left.
>
> **[3:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=237)** Now the container itself has some options.
>
> **[4:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=240)** So if I click on the carrot at the top right, we could remove the container.
>
> **[4:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=246)** We can make it into a floating container if we wanted to.
>
> **[4:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=249)** We can set the width and the height.
>
> **[4:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=250)** If we were doing a more sophisticated dashboard, we have several different containers.
>
> **[4:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=254)** I can remove it and so on.
>
> **[4:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=257)** The one I'm interested in is this distribute contents evenly.
>
> **[4:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=261)** Now, one of the reasons why you might want to use a container is to force the container to size everything inside it equally.
>
> **[4:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=268)** See what happens when I click this.
>
> **[4:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=272)** So now my text box is exactly the same width as both of my charts.
>
> **[4:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=277)** Tableau's taken the size, divided it up into three, and allocated that same amount of space for each one.
>
> **[4:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=284)** If I go back to my items and if I add my map somewhere in between, it then resizes all of my elements inside my containers to fit the space.
>
> **[4:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=295)** Again, it's put a legend, let's get rid of that.
>
> **[4:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=299)** And now I have four objects inside the container, each one equally sized.
>
> **[5:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=306)** If I try, there's no way that I can manually resize these anymore.
>
> **[5:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=312)** So a horizontal container lets you align objects horizontally.
>
> **[5:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=318)** The main reason you do that is for this functionality, the distribute contents evenly.
>
> **[5:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=324)** It means that no matter what the chart looks like, Tableau's never going to change the width on us.
>
> **[5:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-horizontal-container?u=76281980&t=329)** So, if you want to have a nice gridded layout, this might be a good option to choose.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this. (1), try, (1)
> **UI Navigation:** click on (3), drag and drop (1), go to (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (2)
> **Definitions:** means that (1)
> **Speakers:** - [narrator] (1)

#### Adding a vertical container
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=0)** - [Instructor] Let's take a look at vertical containers.
>
> **[0:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=4)** Now, vertical containers are one of the two different containers that we can add to our dashboard to allow us to align objects vertically.
>
> **[0:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=14)** Now we add those from the object pane at the bottom left of our dashboard design tool.
>
> **[0:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=20)** Now, one of the problems is, is that containers are invisible because they are containers, so they don't have anything to show themselves.
>
> **[0:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=26)** So if I add my vertical container into my dashboard, the only thing I have to know that there is a container in here is this blue border when it's active.
>
> **[0:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=36)** If I click away, it goes invisible because the container is just a, I guess it's kind of placeholder for you to put other things inside it so it doesn't actually have anything to show itself.
>
> **[0:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=47)** If I click inside this white area, it highlights again.
>
> **[0:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=51)** But if we had several containers in the view, that might be hard to do.
>
> **[0:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=54)** Now, the other way we can do this is by going to the item hierarchy.
>
> **[0:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=58)** That is in the Layout tab.
>
> **[1:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=60)** So if I click on Layout at the top left and scroll down to the bottom where I have my item hierarchy, I can expand out, and I can see my vertical container because I've only got one in here.
>
> **[1:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=71)** If I select it, it then highlights it.
>
> **[1:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=74)** If I want to, I could rename that because it might be that we're going to have several different containers.
>
> **[1:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=79)** So let's just rename this to be Main.
>
> **[1:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=85)** So if I had several containers, I could name them.
>
> **[1:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=87)** So I knew whereabouts I was going to put my particular things in.
>
> **[1:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=92)** Now because that's invisible, sometimes it's hard to see.
>
> **[1:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=95)** So something that you might want to do is put a background in, just so you know which container you're working with.
>
> **[1:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=100)** So at the moment, I've only got one container.
>
> **[1:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=104)** But in the next video, we'll look at if we had multiple containers for more sophisticated layouts.
>
> **[1:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=109)** So at the moment, I have a single vertical container.
>
> **[1:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=113)** So well, let's put some data in there.
>
> **[1:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=116)** Let's put my timeline in.
>
> **[1:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=118)** So as I drag my timeline, we can see that I have got a blue border.
>
> **[2:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=122)** When I release it, my view is now fully expanded to take full use of that container.
>
> **[2:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=130)** If I then took my scatterplot and drag and dropped it underneath my timeline, we can see that Tableau's now scaled to show each of these charts in the best way it thinks it can.
>
> **[2:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=143)** It's expanded each one slightly to make maximize use of the space.
>
> **[2:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=148)** I've got a another container over here that's got my legends in, but I'm going to get rid of that for the moment.
>
> **[2:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=156)** So now I've got my timeline and my scatter plot.
>
> **[2:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=161)** If I add anything else into here, it's going to size it again.
>
> **[2:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=164)** So maybe let's put some text box right in the middle.
>
> **[2:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=168)** Here is some text, something very useful.
>
> **[2:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=173)** And Tableau has put a little text box in between the two of my sheets, still within that container.
>
> **[3:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=180)** Now, if I want to, I could force Tableau to use the same amount of space for each one of my charts.
>
> **[3:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=187)** By default, Tableau tries to make a good guess over which charts would be which size, depending on the chart type and what the data is inside it.
>
> **[3:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=195)** But sometimes we want to override that.
>
> **[3:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=197)** Maybe I want to force it to use even amount of space for each object.
>
> **[3:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=201)** So to do that, I need to select the layout container.
>
> **[3:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=205)** Two ways of doing that. I can either select a chart, double click on the Chart Control tab at the top, and it would take me up the item hierarchy to the container that that chart is in.
>
> **[3:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=217)** Or I can go to my Layout tab.
>
> **[3:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=221)** I can go down to my item hierarchy at the bottom, and I can see all the containers that I have listed in here.
>
> **[3:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=227)** And I have my Main one that I named earlier.
>
> **[3:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=230)** That's why we sometimes want to name them.
>
> **[3:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=233)** And then from the Container Control, I can click on the caret, and I can select Distribute Content Evenly.
>
> **[4:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=241)** And what that does is it uses the same amount of space for each one of my objects that were in the container.
>
> **[4:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=247)** Now note, it's also made that text box big as well because it resizes all the objects inside the container.
>
> **[4:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=255)** It doesn't understand that two of them are charts and one is text.
>
> **[4:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=259)** And actually we don't want the text to be expanded.
>
> **[4:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=261)** It's treating them all as individual objects.
>
> **[4:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=263)** It's not looking at what's inside, in this case, it's forcing it to be three equal sizes.
>
> **[4:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=270)** So by using the Distribute Contents Evenly, and by using the containers, we can have a quite nice gridded layout.
>
> **[4:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=278)** This is just using vertical containers.
>
> **[4:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=281)** But we can mix and match horizontal containers as well.
>
> **[4:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=284)** Once we start having more than one container, it can get a little bit confusing.
>
> **[4:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-vertical-container?u=76281980&t=287)** So I'll show you a little tip how to do that in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), default, (1), override (1), case, (1)
> **UI Navigation:** click on (3), scroll down (1), select the (1), go to (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Using color to help with container layouts
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=0)** - [Narrator] One of the real problems with working with layout containers is that they are invisible, and it's quite hard to work with something that you can't see.
>
> **[0:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=10)** Now, typically you use a container because you want a gridded layout, and you might have some idea of sort of the arrangement that you want to have, and often it can feel that you're fighting against the containers rather than with them.
>
> **[0:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=23)** So, I'm going to show you a couple of little tricks that you can use to make containers work for you rather than against you.
>
> **[0:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=29)** And those are going to be making use of blank and text objects, and also, some color.
>
> **[0:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=35)** So, I've got a blank Dashboard here, and I have some sheets I'm going to put inside this Dashboard.
>
> **[0:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=43)** Now, what I want is to have one of the sheets vertically on the right-hand side, filling that entire space.
>
> **[0:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=49)** Then on the left-hand side, I want one sheet at the top and one sheet at the bottom.
>
> **[0:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=54)** So, in order to that do that, I need to do some nested containers, because I need to have two objects aligned vertically, and then the objects aligned horizontally.
>
> **[1:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=65)** So, what I'm going to do, is I'm going to create a horizontal container for my sheet on the right, and then my two sheets on the left, and then two sheets on the left are going to be inside a vertical container themselves.
>
> **[1:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=78)** Okay?
>
> **[1:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=79)** So, let's go through this step by step.
>
> **[1:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=81)** So, what we're going to do first, is create the horizontal container.
>
> **[1:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=83)** So, this is kind of like my main container that everything is going to be inside of.
>
> **[1:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=88)** So, I'm going to select Horizontal Container.
>
> **[1:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=90)** I'm going to drag that out into my main view.
>
> **[1:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=93)** And the problem of containers is they're invisible.
>
> **[1:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=95)** If I click away, you can't see it anymore.
>
> **[1:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=96)** So, what I'm going to do is I'm going to select the container, I'm going to go to Layout, and then I'm going to change the background color.
>
> **[1:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=102)** So, let's change the background color to this light blue, and I'm going to put a boarder around it as well.
>
> **[1:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=109)** So, as I click away, that border is now consistent.
>
> **[1:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=112)** So, this is my main horizontal container.
>
> **[1:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=115)** And what I'm going to do, is I'm going to right-click on the Horizontal Container name in the Item hierarchy, and I'm going to rename it to be my Main container.
>
> **[2:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=127)** Okay?
>
> **[2:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=129)** Now, I want my chart to go in on the right-hand side, and then I want my two objects to go on the left.
>
> **[2:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=135)** So, what I'm actually going to do, is I'm going to use some text.
>
> **[2:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=139)** So, I'm going to put a text object inside my Main container, and I'm going to call this my Heatmap.
>
> **[2:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=151)** So, now I've got a text object completely filling that container.
>
> **[2:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=156)** Okay?
>
> **[2:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=157)** Now what I'm going to do, is put my vertical container in to the left-hand side of this text object.
>
> **[2:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=164)** 'Cause if I'd have just put the container straight inside the empty container, I'd have an empty container, so (indistinct), and it just gets really confusing.
>
> **[2:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=170)** It's hard then to see if the layout's working.
>
> **[2:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=173)** So, what I'm going to do is take my Vertical Container out of my Objects, and I'm going to move it over so that the blue highlight appears.
>
> **[3:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=183)** So I know that I'm going to drop this container inside my Main container, and I'm going to drop it to the left-hand side of that Heatmap text.
>
> **[3:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=192)** So, now I've got my vertical container here.
>
> **[3:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=196)** I'm going to go to the Layout.
>
> **[3:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=197)** I'm going to change the border of that, and make that orange.
>
> **[3:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=200)** And I'm going to change the background, and make that orange as well.
>
> **[3:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=206)** And now I've got a text object inside my horizontal container, and I have my vertical container inside my horizontal container as well.
>
> **[3:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=215)** And we can see that, if I go down to my Item hierarchy, here's my Main container, which is horizontal.
>
> **[3:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=223)** Here's my vertical container. So, let's call this Vertical.
>
> **[3:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=230)** Okay? And next to it is the Heatmap.
>
> **[3:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=232)** So, I can see that my container and my Heatmap, are actually part of the same grouping within my main container.
>
> **[4:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=241)** So now, if I was to put a text box inside my virtual container and say this is where my map's going to go, and then another object underneath it to say this is where my timeline is going to go, in there.
>
> **[4:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=260)** Okay, so now I've got my two objects.
>
> **[4:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=261)** I could resize these to make them a little bit bigger if I wanted to, but because I've got the colored backgrounds, I can still see how everything fits together.
>
> **[4:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=272)** So now I've kind of got my container layout how I want it, I can actually start dragging and dropping my elements into there.
>
> **[4:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=279)** Okay.
>
> **[4:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=280)** So, first of all, I'm going to put my Heatmap where my Heatmap text box is.
>
> **[4:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=285)** So, if I drag that, and put that just to the right of my Heatmap container, I can get rid of my text.
>
> **[4:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=294)** So, I don't need that anymore.
>
> **[4:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=297)** And now my map can go where my map was, and I can get rid of that, and I can put my timeline where my timeline text box was.
>
> **[5:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=309)** So what I can then do, is I can then resize these however I want them.
>
> **[5:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=314)** So, first thing, let's get rid of my Profit over here, and maybe I want to expand out my Heatmap to make better use of the entire view.
>
> **[5:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=325)** Now you'll see what Tableau has done.
>
> **[5:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=327)** Tableau understands that this Heatmap doesn't take up a lot of room.
>
> **[5:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=331)** So, it's automatically sized it to be relatively narrow, which is then allowed my map, and my time to have much more space.
>
> **[5:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=340)** You can also, see that the map looks slightly larger than the timeline, because again, Tableau's worked out that those two charts need that amount of space to look their best.
>
> **[5:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=351)** So, that's one of the advice of using the layout containers, is that Tableau will size things inside it to make the best use of the space that we've got.
>
> **[5:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=359)** But I can also, control that as well.
>
> **[6:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=361)** If I wanted it so that my map and my timeline, use the same amount of space vertically, I can select that container.
>
> **[6:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=368)** So, I could either click on the map, double-click on the control to get up to the container that it's sitting within.
>
> **[6:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=376)** I can go down and I can distribute those contents evenly.
>
> **[6:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=379)** And now they're using the same space.
>
> **[6:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=382)** And if I go to my Main container, which was my Main horizontal container, I could do the same thing, by Distribute Contents Evenly.
>
> **[6:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=392)** And now I have an even distribution for all of my elements.
>
> **[6:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=396)** So, horizontally, the Heatmap is the same width as the map and the timeline, and the map and the timeline are the same height within that container.
>
> **[6:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=408)** Once I'm happy with my layout, I can then go back and I can select each of my containers, either by double-clicking them, or clicking on the name in the hierarchy, and I can take my borders and my colors away.
>
> **[7:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=426)** So, select my main ones, get rid of those.
>
> **[7:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=431)** And now I have my objects inside my containers, which are now invisible once again.
>
> **[7:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=437)** So, containers allow us to do these kind of layouts quite easily and control the size, which is really important.
>
> **[7:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/using-color-to-help-with-container-layouts?u=76281980&t=444)** The invisibility is good 'cause we don't want to see them, but adding a bit of color using the text objects or blank objects to define the layout, and then put your content into them, can make containers much, much easier to work with.

> [!info]- Semantic Content
>
> **CLI Commands:** make (7)
> **UI Navigation:** go to (3), select the (1), right-click (1), click on (1), double-click (1)
> **Code Keywords:** let (4)
> **Analogies:** kind of like (1)
> **Speakers:** - [narrator] (1)

#### Adding text
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980&t=0)** - [Instructor] Text is one of those things that you often don't think of being part of a dashboard, but it can serve two really good purposes.
>
> **[0:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980&t=8)** Firstly, you can use it as an explanation on what the data is showing, what it's not showing, and how to interpret it, what you've seen.
>
> **[0:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980&t=16)** And secondly, it can be really useful if you've used a chart type that's not standard or a bit unusual.
>
> **[0:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980&t=25)** You might have to explain to somebody how to read that chart.
>
> **[0:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980&t=29)** So this very much depends on the audience of your dashboard.
>
> **[0:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980&t=32)** So if you need to put X explanation about the data or the chart type you've used, text is a really good thing to add.
>
> **[0:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980&t=40)** So let's look at an example of adding some text to a dashboard.
>
> **[0:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980&t=45)** So if I just create a simple dashboard using our sheets, so maybe I've got my profit and I've got a timeline.
>
> **[0:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980&t=55)** And it might be that I want to add some explanation on what each of these is showing.
>
> **[1:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980&t=61)** Now I can put it in the title if I want to, but I'm slightly, you know, I've got a bit of space over here on the right hand side that'd be better to use.
>
> **[1:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980&t=69)** So what I'll do is I'll move my profit legend in with the map.
>
> **[1:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980&t=73)** Then I'm going to add some text.
>
> **[1:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980&t=75)** So I'm going to drag my text out, and I've got a text box.
>
> **[1:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980&t=79)** And I can put anything I want in here.
>
> **[1:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980&t=81)** It could be one word, it could be a paragraph, it could be several paragraphs.
>
> **[1:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980&t=84)** So, "This map shows the amount of profit per state.
>
> **[1:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980&t=94)** It's based on all our data across every department."
>
> **[1:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980&t=108)** So I've got a bit of explanation about what the chart is showing me in terms of the fact it's a map with profit per state and what the colors mean.
>
> **[1:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980&t=115)** And it's based on the underlying data for all of the departments.
>
> **[1:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980&t=119)** Now, 'cause this is text, we have formatting options.
>
> **[2:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980&t=121)** So I could make the text larger, I could make it bold, I could make it italic, I could change the color of it if I wanted to.
>
> **[2:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980&t=127)** So let's make it blue, for example.
>
> **[2:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980&t=129)** And I'm going to center it rather than left alignment.
>
> **[2:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980&t=134)** And I'm going to do okay.
>
> **[2:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980&t=135)** And now I have a label up here for my map.
>
> **[2:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980&t=139)** I could go ahead and do the same thing if I wanted to for my timeline.
>
> **[2:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980&t=144)** So what the text allows me to do is add extra information that's not part of the dashboard structure in itself.
>
> **[2:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980&t=153)** So we always have titles, and we'll talk about those in another video.
>
> **[2:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980&t=156)** But the ability to add a block of text can be really, really useful.
>
> **[2:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980&t=160)** As I say, the two use cases tends to be explaining the underlying data, what it's showing, what it doesn't show, what assumptions somebody might make before they interpret the data.
>
> **[2:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980&t=170)** And it can be really useful to show how to explain a different chart type.
>
> **[2:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980&t=174)** And this example here, these are, you know, fairly straightforward charts, but it might be useful to explain with the profit timeline, for example, why even though the only label we see are the years, 20, 23, 24, 25, et cetera, it says month of order date, which is somewhat confusing.
>
> **[3:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980&t=191)** So it might be that I need to put a block of text there to explain that even though these numbers say year, it's actually being shown at the level of detail of month.
>
> **[3:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980&t=200)** Now I might not have enough room to do that within the title.
>
> **[3:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980&t=203)** Maybe I want the title to be a little bit more punchy.
>
> **[3:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980&t=205)** Adding text allows us to add extra information into our dashboard.
>
> **[3:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980&t=210)** Remember, the first thing we want to always ensure is somebody understands the data and see the value in it.
>
> **[3:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980&t=217)** We don't want them making wrong decisions and wrong assumptions about the data 'cause they don't understand what it means or how to read that chart.
>
> **[3:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-text?u=76281980&t=223)** And the text box is a really great way of ensuring that doesn't happen.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5)
> **Code Keywords:** let (2), type. (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### Dashboard extensions
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=0)** - [Instructor] One of the ways you can enhance the functionality of your dashboard is to add extensions.
>
> **[0:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=8)** Now, extensions are kind of the equivalent of third-party plugins, so some of them are made by Tableau, some are made by Tableau partners.
>
> **[0:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=15)** And the idea is that it extends the functionality of what Tableau can do.
>
> **[0:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=20)** There's two types of extension.
>
> **[0:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=21)** There are vis extensions which allow you to create different types of visualizations.
>
> **[0:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=26)** So there's ones that make enhanced version of tables.
>
> **[0:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=29)** There are ones that would do Sankey charts and other different types of charts, but those ones are mostly focused on the creation of a visualization.
>
> **[0:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=37)** Dashboard extensions enhance dashboards and they give extra functionality to dashboards specifically rather than the visualizations themselves.
>
> **[0:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=48)** So to add an extension, we do that from the Object pane in our dashboard editor.
>
> **[0:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=53)** So in the bottom left-hand corner where we have our list of objects, there is Extension.
>
> **[0:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=58)** Now, if I drag this into my dashboard and release it, it doesn't actually create an object inside the dashboard because it's going to add functionality, so it doesn't really matter where I drag and drop it.
>
> **[1:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=70)** We then get this list of all of the various extensions that we have available.
>
> **[1:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=74)** Now, you can search for a particular dashboard extension.
>
> **[1:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=78)** You can sort them by different criteria.
>
> **[1:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=81)** We can also filter them to only show ones that are actually built and supplied by Tableau themselves.
>
> **[1:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=86)** Ones that are obviously free, some of them you have to pay for.
>
> **[1:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=89)** Ones that work with Tableau Public, that might be useful if you actually intend to publish things onto the Tableau Public server to make sure that they are compatible.
>
> **[1:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=96)** And you have ones that are sandboxed.
>
> **[1:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=97)** Now, sandboxed means that the data is kind of contained within the application, it doesn't kind of go anywhere else into your server.
>
> **[1:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=105)** So in order to get an extension working, first we have to select which one you want.
>
> **[1:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=109)** So for example, if I pick this one at the top, which is called Export All by The Information Lab, and this will allow me to export data from my charts into Excel.
>
> **[1:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=119)** So I'll select this.
>
> **[2:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=121)** It gives us some examples, it gives us a description, and some related information.
>
> **[2:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=128)** Tells us where the extension is hosted.
>
> **[2:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=129)** So the extensions are hosted on a remote server, so they're actually on your server.
>
> **[2:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=134)** And some information about what version it works with.
>
> **[2:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=137)** So I'm going to go ahead and click Add to Dashboard.
>
> **[2:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=141)** And now we have this new Export All button that's appeared, and I've got some options.
>
> **[2:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=146)** So what do I want to happen when I hit that Export button?
>
> **[2:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=150)** Well, I'd like to export all of the data from the profit map, the timeline, and my heat map.
>
> **[2:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=158)** I could select which particular columns I want to export.
>
> **[2:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=161)** So maybe I don't want to export all of the data.
>
> **[2:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=165)** And then with this particular one, I've got some configuration options.
>
> **[2:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=167)** So the Export All button currently says Export All, but I could change this.
>
> **[2:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=172)** So if I want it to be a bit more explicit what it does, I could say Export to Excel.
>
> **[2:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=178)** And I can give it the file name that it's actually going to create.
>
> **[3:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=181)** I can now change this from an outline to different kind of button as well.
>
> **[3:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=185)** So we can change the function to fit what we want to do.
>
> **[3:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=190)** So I'm going to hit Save Changes.
>
> **[3:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=192)** And now what I've got is a new functionality to my dashboard, which is my Export button.
>
> **[3:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=198)** So that's saved so now I can close that down.
>
> **[3:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=201)** So I could move this somewhere over here.
>
> **[3:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=206)** And now if I view my dashboard and I click on Export Excel, what that will now do is export my Excel file for me.
>
> **[3:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=215)** So dashboard extensions allow us to add extra functionality into our dashboard.
>
> **[3:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=221)** Now in this case, it added an extra button, but other export functions might work slightly differently and other extensions might have different functionality as well.
>
> **[3:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=231)** It's important to note that if you're going to publish this to either your internal server or to your cloud server, you have to have dashboard extensions turned on.
>
> **[3:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=238)** So you need to speak to your server admin to make sure that they are allowed because there are some possible security implications and other things you need to think about.
>
> **[4:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=247)** In general, most of the functionalities that you need should be natively within the dashboard, but there are some cases where example here of I want to have an export option and I want a nice clean one, then the dashboard extensions can be really useful.
>
> **[4:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=260)** Just bear in mind that some of them you need to pay for.
>
> **[4:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=263)** So just tick the free ones.
>
> **[4:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=265)** And also make sure you know who's actually created it as well.
>
> **[4:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=269)** One of the caveats with any kind of plugin or add-on to any system you do, not just within Tableau is always think about where the extensions come from and what its longevity is.
>
> **[4:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=279)** And hopefully in the future, a lot of the functionality that are being done by extensions will actually become part of the main application itself.
>
> **[4:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-extentions?u=76281980&t=286)** So have a look at extensions, add them to your dashboard, and try them out.

> [!info]- Semantic Content
>
> **Code Keywords:** for. (2), public (2), this. (2), extends (1), export. (1)
> **CLI Commands:** make (4)
> **Definitions:** means that (1), is called (1), is a  (1)
> **UI Navigation:** drag and drop (1), click on (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Adding images
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=0)** - [Instructor] Let's talk about how we add images into a dashboard.
>
> **[0:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=4)** Now, dashboards are obviously a visual thing, and the majority of the time, you're going to have either your visualizations that you've built from your data, and text on your dashboard.
>
> **[0:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=17)** But there might be times where you want to bring in some graphics as well.
>
> **[0:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=21)** So that might be kind of like a corporate heading, because there is a particular look and feel that your dashboards need to have, or if you are doing a more creative dashboard, you might want to use images to just enhance the dashboard, make it look nice, use 'em as a background, that sort of thing.
>
> **[0:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=35)** So depending on what you want to do, there's kind of two ways to approach it.
>
> **[0:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=39)** And this lends itself to using either the tiled or the floating layout that we've talked about in previous videos.
>
> **[0:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=45)** So first of all, let's talk about how we can use the tiled layout to bring in kind of a corporate header to our dashboard.
>
> **[0:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=53)** So this dashboard here is looking at the land and hotel data, and I've got two heat maps, one showing you an occupancy, and the other showing some products, quantities.
>
> **[1:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=64)** Now the dashboard title is not particularly inspiring.
>
> **[1:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=67)** I mean, it says what it is, but it's not a great dashboard title.
>
> **[1:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=70)** But what I'd like to do is put the corporate branding header in there.
>
> **[1:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=74)** Okay, I've got that in a file. So I want to add that in.
>
> **[1:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=78)** So what we can do is we can add an image to our dashboard.
>
> **[1:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=81)** So we go down to the Objects and I'm going to select Image, and I'm going to drag that in, and I want it to be at the top of the screen.
>
> **[1:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=88)** So select Tiled, go to Image, and I'm going to drag it to just above the two heat maps.
>
> **[1:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=95)** So that's where my image is going to go.
>
> **[1:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=98)** This dialog box pops up, and it asks me for the image.
>
> **[1:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=101)** Now we can either link to it if it's on a website, or we can upload it.
>
> **[1:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=105)** So I've got my file ready to go.
>
> **[1:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=107)** So I'm going to choose and take Landon header.
>
> **[1:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=112)** If I hit Apply, it's going to add the image in, but won't close the dialog box.
>
> **[1:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=118)** So I have some options.
>
> **[1:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=119)** I can fit the image to fit the available space, so that's going to shrink it down to fit there.
>
> **[2:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=125)** Or if I click Center image, it's going to put it in the center of my views.
>
> **[2:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=129)** So I think that's going to be a little bit too big.
>
> **[2:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=133)** Let's try, so I don't need my text box now, so that can go.
>
> **[2:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=138)** We'll clear that space back, and if I shrink my header up a little bit, I'll get it just about right.
>
> **[2:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=150)** There we go.
>
> **[2:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=151)** So I've replaced that kind of dull heading of just the text with the corporate branding.
>
> **[2:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=157)** So now it actually fits the rest of our dashboards.
>
> **[2:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=161)** Okay, so we might have some kind of style template that we have to work towards.
>
> **[2:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=164)** So as long as the images of the similar kind of dimensions to your dashboard, so the same width, generally, it will scale to look okay.
>
> **[2:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=174)** If it's completely different scaling, it's going to look slightly fuzzy.
>
> **[2:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=178)** So work with your team to make sure that you get the right graphics for that dashboard.
>
> **[3:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=182)** But that's how you would use the tiled layout, 'cause what we're doing, we're inserting images still within that tiled grid.
>
> **[3:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=188)** But what about if we're doing something a little bit more creative?
>
> **[3:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=191)** Well, you can use images as a background, and then put your visualizations on top of it.
>
> **[3:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=197)** Okay, so to do that, let's look at another quick dashboard.
>
> **[3:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=200)** And I'm going to create one using a background image.
>
> **[3:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=205)** So with a blank dashboard, first thing you do is you add the image that you want to use as a background.
>
> **[3:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=211)** Same dialog box will pop up, and I'm just going to select this file instead.
>
> **[3:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=218)** Going to hit Apply, and it puts it in my view for me.
>
> **[3:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=221)** Okay, so I'm letting it auto scale.
>
> **[3:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=224)** I'm not too worried what it's going to look like.
>
> **[3:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=226)** And then what I then do is then I then add my visualization.
>
> **[3:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=230)** I want to go on top of it now, because I need it as a background.
>
> **[3:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=233)** The visualizations and anything that we want to go on top has got to float over the top of that background.
>
> **[3:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=239)** Okay, so for that reason, we need to use the floating option when we start dragging extra things in.
>
> **[4:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=245)** So for example, I could put my scatter plot, and now as it's floating, it's just going to hover in space when I let go.
>
> **[4:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=253)** I've got my key here, my legend.
>
> **[4:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=256)** So I'm just going to get rid of that for the moment, and I'm going to hide my title.
>
> **[4:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=261)** So I just have my scatter plot, and then because it's a floating object, I can resize it and position it anywhere that I want to.
>
> **[4:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=271)** So there's two ways of using the images.
>
> **[4:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=273)** One is in the tiled way where you add them to that grid layout that you're already working with.
>
> **[4:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=277)** Now this can work really well for where you have a structured layout.
>
> **[4:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=281)** You might have a header or a footer that's a graphic.
>
> **[4:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=284)** You can do that.
>
> **[4:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=285)** If you want to use them as a background, then you have to set them using the floating method.
>
> **[4:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=293)** Now for this one, I set the background originally as a tiled.
>
> **[4:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=297)** So now my only floating object is my scatter plot, but I could, if I wanted to, have used a floating image as my background, so I can change that.
>
> **[5:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=309)** So if I click on the image, go to the image control, change that to Floating, I've now got two separate objects on my dashboard.
>
> **[5:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=317)** They don't know about each other.
>
> **[5:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=319)** They don't know about each other's existence.
>
> **[5:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=320)** They just exist within that dashboard.
>
> **[5:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=323)** At the moment, my scatter plot, because it was brought in to the view second, is actually floating on top.
>
> **[5:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=333)** But because I've changed things around, now this is floating on top.
>
> **[5:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=336)** Well, actually I want this to be the background.
>
> **[5:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=338)** So what I'm going to do is I'm going to rescale my image so I can have it whatever size I like.
>
> **[5:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=348)** And then what I can then do is, because it's now a floating object, we have this idea of the floating order of like the layers.
>
> **[5:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=354)** So I can click on Floating Order, and I can send it to the back so that all the other objects are now just going to float on top.
>
> **[6:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=362)** So now I have control over the position and placement of my background image.
>
> **[6:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=367)** Maybe I want it off-centered slightly.
>
> **[6:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=369)** And then I can position my visualization, in this case, my scatter plot, wherever I want it to go over the top.
>
> **[6:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=378)** So the tiled versus floating, have a look on the video on that to see about which one works best for you.
>
> **[6:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=384)** But in general, pick one or the other.
>
> **[6:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-images?u=76281980&t=386)** With the exception of when you are using a tiled background, that can work quite well, 'cause that's fixed, and all your other elements are floating on top.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), try, (1), case, (1)
> **UI Navigation:** go to (2), click on (2)
> **CLI Commands:** make (2)
> **Analogies:** kind of like (1), for example (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Adding blanks to help with layouts
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=0)** - [Instructor] Now, it seems counterintuitive why you would want to add extra blank space to your dashboard.
>
> **[0:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=8)** You know, we're always told that there's never enough room in the dashboard and every pixel should count.
>
> **[0:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=13)** So, why would I want to add empty space to my dashboard?
>
> **[0:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=17)** Well, it can really help with uncluttering a layout and giving anything a little bit more of a room to breathe.
>
> **[0:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=24)** Now, we've seen this already when we can add padding to our objects, but blanks works in a kind of similar concept in the fact that we add empty space.
>
> **[0:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=34)** So let's look at an example.
>
> **[0:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=35)** So this dashboard here, I've got my three charts, and then I've got my legends all on the right-hand side.
>
> **[0:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=43)** Now, there's a big blank space at the bottom that, ideally, I'd like my profit timeline to go into.
>
> **[0:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=49)** So what I'd actually like to do is change this so that my filters that'd be down the right-hand side are all across the top.
>
> **[0:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=56)** So, it's easy enough to do.
>
> **[0:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=58)** So what I'm going to do is I'm going to add a horizontal container at the top, and then I'm going to put each of my filters inside that container.
>
> **[1:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=67)** So just drag a horizontal container out of my objects, put it to the top of the screen.
>
> **[1:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=72)** That's going to squish everything down.
>
> **[1:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=73)** Let's not worry about that for the moment.
>
> **[1:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=75)** And then I'm going to put all of my filters into the new container because it's a horizontal container, they're all going to line up horizontally.
>
> **[1:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=84)** Now, I'm going to change my segment and region filters, 'cause at the moment, they are kind of a list, and that's taken up too much room.
>
> **[1:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=91)** So I'm going to change them to be a single value dropdown.
>
> **[1:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=95)** It's the same functionality.
>
> **[1:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=96)** I can only select one of the options, but it's going to be as a dropdown.
>
> **[1:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=100)** So now, everything's on a single row.
>
> **[1:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=102)** What I can then do is resize my charts to fill up that space, because now, everything should now fit within my top.
>
> **[1:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=113)** Okay.
>
> **[1:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=115)** So now I've got my filters at the top of the screen where I want it.
>
> **[1:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=117)** Everything all looks good.
>
> **[2:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=120)** So it might be that actually, I don't want them to spread across the entire way there because I don't really need my profit slider to be quite as big as that. And my date slide doesn't need to be quite as big as that either.
>
> **[2:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=132)** I don't need that precision.
>
> **[2:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=134)** If I want to go to a specific date, I click on the date, and I get the calendar function pop up.
>
> **[2:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=141)** So I could actually pick the date on there.
>
> **[2:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=143)** So if I want to go between two very specific values for profit, then what I could do is say I want to look at everything between 2012.
>
> **[2:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=154)** I would type it in.
>
> **[2:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=155)** I don't need the precision with this slider.
>
> **[2:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=157)** It's nice to have, but I don't need that precision.
>
> **[2:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=160)** So actually, I don't need them to take up as much room.
>
> **[2:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=162)** I could compress them down.
>
> **[2:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=163)** So the way we do that is using blanks.
>
> **[2:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=167)** So what I'm going to do is I'm going to add a blank object to the left and right of that container, which is going to reduce the amount of space that those filters have, but without squishing them up too much.
>
> **[2:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=177)** Okay, so let's go to my Objects and select the Blank.
>
> **[3:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=181)** And I'm going to drag that and put one on the left-hand side of my container.
>
> **[3:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=187)** So we move it over and make sure that it's in the right area.
>
> **[3:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=192)** And then I'm going to do the same thing with the blank on the other side.
>
> **[3:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=196)** So I'm going to add that in just at the top.
>
> **[3:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=198)** Make sure it's in the right area.
>
> **[3:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=200)** So now, these have now squished these up.
>
> **[3:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=202)** So now, I'm going to move my blank to the left and this other blank to the right.
>
> **[3:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=209)** And I can play around with those sizes.
>
> **[3:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=211)** I could select the blank object.
>
> **[3:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=213)** I could go to the Layout tab and I could set the actual position and size of it to be precise if I wanted these to be exactly equal.
>
> **[3:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=220)** So that's 136 pixels wide.
>
> **[3:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=224)** My other one's 159, so maybe I want to change these if I wanted to.
>
> **[3:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=230)** But what it means is that now, I have these kind of centralized filters, they take a slightly less space and it doesn't feel quite as cluttered.
>
> **[3:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=239)** Okay, sometimes it doesn't look quite right, having filters or legends across the entire width of the dashboard.
>
> **[4:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=245)** It feels slightly nicer if they're kind of contained a little bit.
>
> **[4:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=249)** So just a small amount of blank space on the left and right can really make a big difference.
>
> **[4:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=254)** So depending on your layer and what you're trying to do, you can add blanks anywhere that you'd like.
>
> **[4:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=258)** Similarly, maybe with the profit timeline, I don't want it to go across the entire width.
>
> **[4:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=262)** I want to kind of cut off the left and right side.
>
> **[4:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=264)** Now, I could either add some padding if we wanted to, or we could add the blank objects.
>
> **[4:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=270)** So blanks are really, really useful.
>
> **[4:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=272)** They allow us to control the layout, particularly in the tiled gridded layout where we don't have a huge amount of control over where things are placed.
>
> **[4:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=281)** We can still use them if we're using a floating layout, if we want to put a blank object to hold some other information.
>
> **[4:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=288)** But blanks are really, really useful in the design of your dashboard.
>
> **[4:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=292)** Now, remember, although every pixel does count and we should make the most of all the space we have in our dashboard to make sure that we are using it to inform our viewer, a little bit of blank space can do wonders in making it look that bit nicer.
>
> **[5:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-blanks-to-help-with-layouts?u=76281980&t=308)** And after all, why don't we want to make nice dashboards?

> [!info]- Semantic Content
>
> **UI Navigation:** go to (3), dropdown (2), select the (2), click on (1)
> **CLI Commands:** make (6)
> **Code Keywords:** let (3), function (1)
> **Speakers:** - [instructor] (1)

#### Adding a webpage to a dashboard
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980&t=0)** - [Instructor] All dashboards are showing data from some kind of data source that's been visualized.
>
> **[0:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980&t=7)** But you can also show other things in a dashboard.
>
> **[0:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980&t=11)** And one of those things is a webpage.
>
> **[0:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980&t=13)** Now, this can be quite useful because there could be more information held within a webpage that you want to show, but you don't actually have the data for it and it doesn't lend itself to being visualized.
>
> **[0:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980&t=25)** So how can we get webpages embedded into our dashboards?
>
> **[0:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980&t=29)** Well, it's really easy.
>
> **[0:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980&t=31)** So we can add a webpage object and give it a URL, and the webpage will just be embedded in our dashboard.
>
> **[0:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980&t=37)** So for example, let's just see how that mechanism works.
>
> **[0:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980&t=40)** So using my dashboard here, I want to add a webpage in the bottom right hand corner.
>
> **[0:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980&t=46)** So I can go to the webpage option in my objects and I can drag it into my view.
>
> **[0:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980&t=51)** So let's pop it to the right hand side of my profit timeline, rank field, and it asks me for a URL.
>
> **[0:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980&t=59)** So what I'm going to do is I'm going to pop in Landon Hotel, click okay, and tab will go and fetch that webpage and display it in that portion.
>
> **[1:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980&t=69)** So I can then resize this if I want to, to have a bit more space for it.
>
> **[1:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980&t=74)** I might need to get rid of the title here, 'cause now I've lost a bit of room.
>
> **[1:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980&t=78)** So we have to play around with our placement site to make it work.
>
> **[1:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980&t=81)** But what we have now is the webpage embedded within our dashboard.
>
> **[1:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980&t=87)** So why do that in the first place?
>
> **[1:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980&t=92)** So it's important to know that when you put the webpage inside the dashboard using this method, it's just another object in the dashboard.
>
> **[1:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980&t=99)** The other objects, the filters, the charts, whatever else is there, doesn't know about that webpage.
>
> **[1:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980&t=105)** In the same way that the charts on here, dashboard at the moment, dunno about each other.
>
> **[1:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980&t=110)** There's no interaction between them, there's no connection.
>
> **[1:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980&t=113)** That's important to understand.
>
> **[1:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980&t=115)** If you want to add a webpage and have interactivity, so that interacting with one of the charts drives something within that webpage, you need to look at dashboard actions and in particular URL actions, which will cover in a different video.
>
> **[2:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980&t=130)** So why do this in the first place?
>
> **[2:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980&t=131)** Well, if it adds extra information, extra context to our dashboard, that might be useful.
>
> **[2:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980&t=137)** So it might be that we're actually looking at some data and the webpage has additional information.
>
> **[2:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980&t=142)** So if we didn't have that, we'd have to put it in as maybe a text box or a tool tip.
>
> **[2:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980&t=146)** But if somebody else has done the work and it looks good, why not put it in there?
>
> **[2:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980&t=149)** Why not embed it?
>
> **[2:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980&t=151)** But another thing that you can do is if you have an application as a web app and interacting with that web application actually updates the data that you are then looking at, it then becomes slightly better because you could fill in the details in your webpage.
>
> **[2:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980&t=171)** That data then gets passed through to the backend data source, which your charts are then looking at.
>
> **[2:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980&t=175)** So that way it then does become an input to a dashboard.
>
> **[3:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980&t=180)** That very much depends on the type of dashboard that you are looking to embed.
>
> **[3:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980&t=184)** In this case here, it's just a static one that doesn't actually relate to any of our data.
>
> **[3:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980&t=188)** I'm just using it as an example.
>
> **[3:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980&t=191)** So on the face of it, adding a static webpage, it's useful because you get extra information in.
>
> **[3:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980&t=198)** If we want to drive what's happening with the dashboard by using the data and the values in our other visualizations, then we need to use URL actions, which as I say, we'll cover in a different video.
>
> **[3:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980&t=210)** So use webpage when you want to bring in extra information, extra context, that's going to help your dashboard.
>
> **[3:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-webpage-to-a-dashboard?u=76281980&t=219)** Don't just bring it in for the sake of it, but bring it in if it's going to aid the understanding, aid the explanation, and help the viewer get more out of your data 'cause after all, that's the entire point of why we build a dashboard.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), static (2)
> **Env Vars:** url (4)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Adding navigation between sheets
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=0)** - [Instructor] One of the things that we can add to a dashboard to help people interact with it is navigation.
>
> **[0:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=7)** So when you publish a dashboard, you might have more than one dashboard in your workbook.
>
> **[0:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=13)** Now, navigation can happen if you have tabs turned on.
>
> **[0:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=17)** You can tab in between individual dashboard, but there's another method you can do to actually control the navigation from one to another.
>
> **[0:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=26)** So rather than making somebody have to click on a tab, they can click on a button to move between different dashboards.
>
> **[0:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=31)** So let's have a look and see how that would work.
>
> **[0:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=33)** So I've got two dashboards here, one showing the map and a timeline and a second one showing the heatmap and the scatterplot.
>
> **[0:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=40)** Now what I want to do is add a navigation button that will switch between the two.
>
> **[0:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=45)** So to do that, we go to our Objects pane and select Navigation.
>
> **[0:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=51)** I'm going to add that to my view.
>
> **[0:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=53)** So because I've got this convenience space at the top, I'm going to add it into my little menu bar, and it creates a little navigation sheet.
>
> **[1:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=62)** So I'm going to get rid of the blank space that was there.
>
> **[1:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=64)** So now I've got a nice navigation button, and click on the options.
>
> **[1:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=69)** Got to edit the button.
>
> **[1:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=71)** And now we have to define how the navigation works.
>
> **[1:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=75)** So the action that I want is when somebody clicks on the button, it's going to navigate.
>
> **[1:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=79)** And I'm going to select the Heatmap and Scatterplot dashboard.
>
> **[1:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=84)** We'll keep it as a button for the moment.
>
> **[1:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=85)** We could have it as an image if we wanted to.
>
> **[1:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=88)** And the title, let's call it Go to Heatmap.
>
> **[1:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=94)** Leave everything else the same.
>
> **[1:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=95)** Let's hit Apply and see what that looks like.
>
> **[1:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=97)** Okay, that fits in the spot.
>
> **[1:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=99)** So now, I'm just going to hit OK, and now I've got my navigation button to go to heatmap.
>
> **[1:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=106)** So if I go into presentation mode, and then click on it, it navigates to the other button.
>
> **[1:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=111)** So let's put that other button in, repeat the same function.
>
> **[1:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=116)** So Navigation, drag that into the same area, get rid of that blank.
>
> **[2:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=122)** Go to those options, edit the button.
>
> **[2:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=125)** Now this time, this one wants to navigate to the customer scatterplot and the map and timeline.
>
> **[2:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=132)** So we select the Map & Timeline dashboard.
>
> **[2:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=136)** Again, give that the title.
>
> **[2:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=137)** So Go to Map, Apply.
>
> **[2:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=141)** Yep, that looks okay.
>
> **[2:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=143)** So now I've got my two buttons.
>
> **[2:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=146)** Going to test it.
>
> **[2:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=147)** We have to go into the presentation mode, or if we'd have published it to our server, that would also work.
>
> **[2:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=152)** So now I can click Go to Map and go to heatmap, and I can toggle between the two.
>
> **[2:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=161)** Now, if I wanted to, we could have more than one button.
>
> **[2:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=164)** I could have a series of buttons maybe across the top or along the bottom that would let me navigate or jump between my particular workbook.
>
> **[2:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=171)** So what this means is that we don't have to publish them as tabbed workbooks.
>
> **[2:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=175)** We can actually put navigation controls in there to kind of drive the narrative.
>
> **[2:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=179)** Now maybe you've got several dashboards that take you step by step through a journey that you've discovered.
>
> **[3:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=186)** So what you could do is you could have maybe four different dashboards, and you could go from the first dashboard to the second to third and the fourth, rather than having to sort of toggle backwards and forwards, like we've done with this one.
>
> **[3:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=198)** So the navigation buttons are really useful in enabling you to control where your viewer goes next.
>
> **[3:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=207)** If you've just got tabs across the top of the screen, they could jump around all over the place, which is maybe what you want.
>
> **[3:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=214)** Maybe the dashboards you are publishing are exploratory dashboards rather than kind of a story-led one.
>
> **[3:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=220)** But if there is a route through your dashboard you want somebody to take, using these navigation buttons can be really useful.
>
> **[3:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=227)** Instead of go to heatmap, it could be go to the next page, and you click on these and it would take you page-by-page through your data.
>
> **[3:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-navigation-between-sheets?u=76281980&t=236)** So navigation buttons allow you to control where the journey will take your viewer.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (9), click on (5), select the (2), toggle (2)
> **Code Keywords:** let (5), switch (1), function (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Adding a download button
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=0)** - [Instructor] So whatever you do with your data and your visualization and your dashboard, no matter how good it is, no matter how much interaction you've put in, how well it works, how much you've thought about every single detail to make it the best dashboard you possibly can, and you've published it, sooner or later, somebody's going to want to have to download that dashboard.
>
> **[0:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=23)** It's just one of those things.
>
> **[0:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=25)** They're either going to want to get a screenshot of it or maybe some of the data from it, export it to a PDF or something like that.
>
> **[0:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=33)** Now we can either kind of fight against that or we can give them a simple button to allow them to do that.
>
> **[0:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=39)** And one of the things we can do is we can add a download button to our dashboard to simplify that process.
>
> **[0:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=45)** There's other workarounds of getting the information that we need out, images, that sort of thing.
>
> **[0:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=52)** When we go onto the server, you can download each individual part, but why not control what they can actually do and give them a button to make that experience that bit better.
>
> **[1:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=62)** We know they're going to do it anyway, let's help 'em out.
>
> **[1:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=65)** So from our object pane, we're going to add a download button.
>
> **[1:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=69)** So I'm going to drag download out of my objects.
>
> **[1:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=73)** I'm going to put it in the top right hand corner into the little section that I've got available, and it defaults to download PDF.
>
> **[1:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=79)** If I click on the options for the button, I can see I've got some things that we can set.
>
> **[1:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=87)** So we can set it to be the cross tab.
>
> **[1:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=89)** We can set it to be the image, the PDF or the PowerPoint.
>
> **[1:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=92)** So I'm going to choose the PDF for this one, and I'm just going to hit apply and that will then set it in place.
>
> **[1:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=103)** What I could do if I want to is change the title, but download PDF does exactly what it says.
>
> **[1:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=107)** So I'm happy enough with that.
>
> **[1:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=109)** So if I want to test it, I can either publish it or if I go into presentation mode, that will also pretend that we've actually published it.
>
> **[1:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=117)** And I can click on the download PDF button and it comes up with some options.
>
> **[2:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=121)** So do I want to have the entire workbook or just the active sheet that I'm looking at.
>
> **[2:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=126)** When we say active sheet, that's going to just do this particular dashboard.
>
> **[2:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=130)** So I'm going to click on active sheet.
>
> **[2:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=131)** I can set the orientation that I want, portrait landscape.
>
> **[2:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=135)** Landscape would make sense for this particular layout.
>
> **[2:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=138)** And if we had any selections selected, so that means if I'd have clicked on a state and highlighted particular state, the PDF would export that selection being selected.
>
> **[2:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=152)** So I do okay, it's going to ask where to save it.
>
> **[2:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=155)** So I'll just hit save and then it opens up the PDF for me, and I can then view it.
>
> **[2:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=163)** So if I come out of presentation mode and I can then see the PDF that it created for me.
>
> **[2:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=170)** I can then share that with anybody that I like.
>
> **[2:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=173)** So it's a nice easy way of allowing people to actually export the image, the cross tab information, the PDF, or even into a PowerPoint with a button.
>
> **[3:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=186)** That way, they don't go through loads of menu options if you know they're already going to want to do that.
>
> **[3:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=190)** So what, just accept the fact that sometimes people don't want your interactive dashboard no matter what we do.
>
> **[3:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=196)** The interesting thing as well is that see what it has done to the filters.
>
> **[3:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=202)** So it's shown the order date has been set between these two values, the profit, and which of my segments and which of my regions it's shown as well.
>
> **[3:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=212)** So that's quite nice in that it actually shows the state of whatever filters we have done.
>
> **[3:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=217)** That's really important because if two people have changed the profit values or the order dates or changed the segment to be something different, obviously the data and the visualizations are going to look different.
>
> **[3:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=229)** So it's quite nice that when it exports the dashboard itself, it also exports the state of the filters.
>
> **[3:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=237)** So that's how we enable people to export what we want out of there.
>
> **[4:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=243)** We still have got the control because we're allowing them to export either a PDF or an image.
>
> **[4:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=250)** We've still control some of it.
>
> **[4:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=251)** And when they click on the PDF button, for example, it's only showing this dashboard, not all the underlying sheets so we can control what it is that they do.
>
> **[4:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=259)** As I say, ideally we want people to get all the information they can from the interactive dashboard that we've published, but we know that sometimes people want a hard copy to take away or to email round to other people.
>
> **[4:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-a-download-button?u=76281980&t=274)** Adding that button allows us to control what they do with it, and it makes everybody happy.

> [!info]- Semantic Content
>
> **Env Vars:** pdf (12)
> **UI Navigation:** click on (4)
> **CLI Commands:** make (3)
> **Code Keywords:** let (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Add filters
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=0)** - [Instructor] One of the kind of rookie mistakes that people make is putting on too many filters or not the right filters for a particular dashboard.
>
> **[0:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=11)** Now, the reason why you kind of get death by filter is because you don't really always know what your viewer wants to filter on.
>
> **[0:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=20)** And because you've got the field available in the data source or they're part of the view, the natural instinct is to, I must allow somebody to filter those.
>
> **[0:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=28)** I see it all the time, but you only want to have the right filters that make sense to that particular viewer at that particular time.
>
> **[0:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=38)** Now, as an author, I can include or exclude filters, whichever I want to do.
>
> **[0:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=43)** I could go to any of these filters as part of my dashboard and I could remove them or I could include them 'cause I have that ability as an author.
>
> **[0:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=50)** But a viewer who's only looking at viewed published content can only see what I've allowed them to see.
>
> **[0:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=59)** If we include a filter extension, what we can do is allow the viewer to turn on or turn off filters, include or exclude the filters that they want to see.
>
> **[1:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=70)** That is to see the filter controls that they need right then, right now.
>
> **[1:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=75)** What they could then do is save that as a custom view on the server.
>
> **[1:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=80)** So let's add the ability for the user to add or remove filters.
>
> **[1:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=87)** So from the object pane, I'm going to select the Add Filters extension.
>
> **[1:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=91)** I'm going to drag that into my view, and I'm going to drop it top right hand corner where I've got a little space for it.
>
> **[1:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=97)** Now, if we go to the configure the options, what I can then do is decide which filters should my user be able to include or exclude, add or remove.
>
> **[1:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=110)** So I'm going to allow them to select all of these filters to either add them to the dashboard or remove them from the dashboard.
>
> **[1:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=117)** They're still going to exist within the sheets and the underlying data.
>
> **[2:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=121)** They're not going to go away entirely, it's just the filter control that's going to be viewable or not.
>
> **[2:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=128)** Okay, so that's something important to think about.
>
> **[2:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=131)** So the title, AddFilters, let's give it a title so it's a bit more useful, what it's going to do, and then hit Okay.
>
> **[2:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=143)** Now, at the moment, all of my filters are viewable.
>
> **[2:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=146)** They're all allowed.
>
> **[2:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=148)** So what I'm going to do is allow somebody to then view the dashboard to turn them off.
>
> **[2:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=152)** So imagine we've now published my dashboard, my viewer comes along and they hit the Add Filters button, and this extension will pop up allowing them to add or remove the filters.
>
> **[2:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=164)** And as they tick the filters, they will appear or disappear.
>
> **[2:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=170)** So what I can do as a publisher is say, well, by default, I only want 'em to be able to select the order date and the profit, and then maybe the segment is the only ones that everybody needs to see.
>
> **[3:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=186)** Okay, so I could set that as my default, and I could go ahead and publish that.
>
> **[3:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=191)** Now, every user, the default view they're going to have will be this exact dashboard as you see it now.
>
> **[3:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=197)** The filters they will see will be the order date, and they can change those values.
>
> **[3:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=203)** They'll have the order profit where again, they can change those values and the segments.
>
> **[3:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=207)** They can maybe just look at the corporate segments and now we're looking at the corporate segment for these dates for these profit ranges.
>
> **[3:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=214)** Now, the other filters are still there.
>
> **[3:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=218)** They're still part of the data source, or they're still part of the individual views.
>
> **[3:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=222)** It's just that the filter control, the little widget that you play with is visible.
>
> **[3:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=228)** So we've published the dashboard and so somebody comes along and while I'm only interested in one particular category of product.
>
> **[3:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=238)** Now in the past, what they would have to do would be to contact you as the author to say, "Could you add a filter so that I can then filter on the category?"
>
> **[4:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=247)** Well, now we don't need to do that because for their particular use case, their particular thing that they want to look at is available to them all the time.
>
> **[4:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=253)** What they would then do is go to the add filters and they have the ability to add that filter control so they can click on category, and that becomes available for them as a filter.
>
> **[4:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=265)** If they then save this as a custom view, just for them personally on the server, now when they load up this particular version of their dashboard, that filter will be visible to them, but not to everybody else.
>
> **[4:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=279)** Now, in order to get this to work, you have to add the dashboards and add all of the filters that you want your viewer to be able to select from to the dashboard.
>
> **[4:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=289)** So for example, if I go to my profit heat map and say, we're going to also include a category for ship mode, for example.
>
> **[5:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=302)** Add it to the filter.
>
> **[5:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=304)** Make them all available so it's all.
>
> **[5:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=309)** Apply to all using the data source so now it's a global filter.
>
> **[5:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=312)** And so, this now exists.
>
> **[5:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=314)** I go back to my dashboard and now look at my filter dropdown.
>
> **[5:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=319)** We can see that although I've created the filter and it's active, it doesn't appear in this list.
>
> **[5:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=324)** Now the reason for that is that we haven't added the filter control to the dashboard.
>
> **[5:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=329)** So just do that.
>
> **[5:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=330)** I'm going to go to the profit heat map 'cause that's where I attach the original filter to.
>
> **[5:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=334)** I'm going to go to analysis.
>
> **[5:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=336)** I'm going to go down to Filters and go to Ship Mode.
>
> **[5:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=340)** So it's now added in.
>
> **[5:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=342)** I can change it to be a single value dropdown so it fits with the rest of the view, and it will now appear in the Add Filters dropdown.
>
> **[5:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=351)** So what I can then do is I could then add them all.
>
> **[5:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=355)** I can then remove ship mode from my view, and I can go back and remove the category from my view as well.
>
> **[6:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=362)** So now by default, when somebody sees the dashboard, they're only going to see those particular filters, but they have the ability to go to the add filters and add those in.
>
> **[6:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=374)** So you as an author, are giving control over to your viewers to what filters they see.
>
> **[6:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=384)** The filter's still there in the background, but it's what they can see and what they can actually control.
>
> **[6:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=389)** This means that every single viewer has the ability to filter what they want to see, when they want to see it.
>
> **[6:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=396)** They can save as a custom view.
>
> **[6:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=398)** And it means from an author's point of view, you only have one dashboard to maintain.
>
> **[6:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=401)** You don't have to have a separate dashboard with different filters set for everybody else.
>
> **[6:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=405)** This is a very useful way of making a single dashboard useful across a much wider range of people.
>
> **[6:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/add-filters?u=76281980&t=413)** Allow people to filter what they need when they need to.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (7), dropdown (3), select the (2), click on (1)
> **Code Keywords:** default, (3), let (2), else. (2), case, (1)
> **CLI Commands:** make (3)
> **Analogies:** for example (2), imagine (1)
> **Definitions:** means that (1), is a  (1)
> **Cross-References:** go back to (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Adding dashboard objects
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-adding-dashboard-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-adding-dashboard-objects?u=76281980&t=0)** - [Instructor] Here is an exercise for practicing adding dashboard objects.
>
> **[0:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-adding-dashboard-objects?u=76281980&t=10)** So the first thing I'd do is use the dashboard that you've built from exercise two, or use the starter that I'm going to be using shortly.
>
> **[0:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-adding-dashboard-objects?u=76281980&t=18)** First thing you're going to want do is add a horizontal container to the top of the dashboard.
>
> **[0:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-adding-dashboard-objects?u=76281980&t=22)** Once you've got that container in place, next thing to do is add some Landon Hotel branding to our dashboard.
>
> **[0:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-adding-dashboard-objects?u=76281980&t=30)** We then want to have two download buttons so we can explore either a PDF or an image of the entire dashboard.
>
> **[0:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-adding-dashboard-objects?u=76281980&t=37)** We're going to duplicate that dashboard to create two separate dashboards, and then we're going to remove some of the content from either of those two dashboards, so we have the timeline scatterplot on one and heat maps on the other.
>
> **[0:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-adding-dashboard-objects?u=76281980&t=49)** And then finally, we're going to create navigation buttons so we can move between the two dashboards.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1)
> **Env Vars:** pdf (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Adding dashboard objects
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=0)** - [Instructor] Here's my solution to the adding dashboard object challenge.
>
> **[0:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=9)** So first thing we need to do is, add the horizontal container to the dashboard.
>
> **[0:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=14)** That's going to hold my additional elements we're going to put in.
>
> **[0:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=18)** So I'm going to select horizontal container for my objects, and I'm going to drag it to the very top of my view.
>
> **[0:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=24)** So it goes all the way across.
>
> **[0:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=27)** I'm not worried about the fact it's all squished up, everything at the bottom.
>
> **[0:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=29)** We'll sort that out in a moment.
>
> **[0:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=31)** So next thing to do is add the hotel branding header.
>
> **[0:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=35)** So that's going to be an image.
>
> **[0:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=37)** So I'm going to go to image in my objects.
>
> **[0:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=40)** I'm going to drag and drop that into my new container that we've just added.
>
> **[0:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=44)** And then from the menu, I'm going to find my file that I'm going to use for my branding.
>
> **[0:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=49)** So that's the Landon header.
>
> **[0:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=52)** I'm going to hit apply, and let's see what that looks like.
>
> **[0:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=55)** Okay, it's not too bad.
>
> **[0:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=57)** I'm going to select fit image, and center image.
>
> **[1:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=63)** So now it will fill the entire space that I've got available for it.
>
> **[1:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=69)** So then what I'm going to do is, I'm going to make it slightly smaller.
>
> **[1:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=73)** So now it'll shrink a little bit, and that's okay.
>
> **[1:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=76)** So the next thing to do is add my download button.
>
> **[1:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=79)** So I'm going to put those on the top right hand corner.
>
> **[1:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=83)** So let's go to my download button, and I'm going to drag that and drop it to the right of my image.
>
> **[1:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=94)** So I've got my download PDF.
>
> **[1:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=97)** So let's just edit this button.
>
> **[1:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=100)** So it's going to export to the PDF. That's okay.
>
> **[1:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=104)** And then the title, I'll keep those, download PDF 'cause that's pretty self-explanatory.
>
> **[1:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=110)** The background, I'm just going to change to be a purple color.
>
> **[1:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=117)** Let's hit apply.
>
> **[1:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=118)** So it kind of sort of matches the branding a little bit, and that all looks good to go.
>
> **[2:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=124)** So I'm going to do okay for that.
>
> **[2:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=126)** And then I'm going to do the same thing again to add the second button.
>
> **[2:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=130)** So that's going to go just to the right of my, on there.
>
> **[2:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=136)** And let's change this to edit the button, change that to be an image.
>
> **[2:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=144)** Hit apply, and it would change to download image.
>
> **[2:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=148)** Doesn't quite fit in there, which is a bit annoying.
>
> **[2:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=150)** So I am going to change my font size down slightly.
>
> **[2:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=155)** Let's see what happens with 10. Okay, that's better.
>
> **[2:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=158)** And again, I'm going to change my background to be the same color as the other one.
>
> **[2:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=164)** So now I've got my two buttons.
>
> **[2:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=166)** I might want to go back and change the font size on this one as well, just to make that consistent.
>
> **[2:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=172)** So change that to be 10 as well.
>
> **[2:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=178)** Let's do, okay. So I've got my two buttons.
>
> **[3:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=181)** Now that has pushed my logo over a little bit, so maybe I actually want these to be one on top of the other.
>
> **[3:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=188)** So what we could do is I could go to my vertical container.
>
> **[3:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=193)** So if I put a vertical container inside my horizontal container, I can then put my buttons inside this empty container.
>
> **[3:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=204)** So now they're stacked one on top of another.
>
> **[3:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=208)** So these two buttons are inside a vertical container.
>
> **[3:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=211)** And that vertical container, it's inside a horizontal container.
>
> **[3:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=216)** Okay, if that's all good.
>
> **[3:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=218)** So now we want to duplicate my dashboard.
>
> **[3:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=221)** So I want to have one that just has the timeline and the scatterplot and the heat maps in the other two.
>
> **[3:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=225)** So let's duplicate this dashboard. It's easy thing to do.
>
> **[3:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=231)** And then what I'm going to do is, on my second dashboard, I'm going to remove the scatterplot and I'm going to remove the timeline.
>
> **[3:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=239)** So now these two will now fill that space.
>
> **[4:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=242)** I can now change the fit to be the entire view as well.
>
> **[4:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=246)** Make use of the extra space.
>
> **[4:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=249)** And because I don't really need it now, going to get rid of the legends on the right hand side, just so they now fit that entire space.
>
> **[4:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=257)** Okay, that looks good.
>
> **[4:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=259)** I'm going to go back to my first dashboard and I'm going to do the reverse.
>
> **[4:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=261)** So I'm going to get rid of the heat map and get rid of the occupancy.
>
> **[4:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=268)** So now I've got my two charts.
>
> **[4:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=271)** And this time, I need the legend because otherwise, I dunno what these colors refer to.
>
> **[4:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=275)** I mean, I can hover over them.
>
> **[4:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=277)** So maybe in this case, we'll get rid of the legend so we can reclaim some of that space.
>
> **[4:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=283)** Okay, looks good. So I've got my two dashboards.
>
> **[4:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=288)** Now I need to add the navigation button.
>
> **[4:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=292)** Well, I've put my two buttons for my download on the right hand side, so I think I'm going to put it on the left hand side this time.
>
> **[4:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=299)** So let's go to the navigation option and we'll drag that to the left hand side of the image.
>
> **[5:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=307)** And now I have my navigation button.
>
> **[5:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=309)** So let's go to edit button.
>
> **[5:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=312)** So when somebody clicks on this button, it's going to go to the second dashboard.
>
> **[5:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=317)** And the title I want on here is, let's just call this, go to heat map.
>
> **[5:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=325)** And again, I'm going to change that color just to match the other ones.
>
> **[5:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=333)** And now I could click on that to check it works.
>
> **[5:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=338)** Yep, that works. And then I do the same thing.
>
> **[5:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=341)** So I then drag a navigation button onto that same location I did on the previous one, making sure I drop it in the right place.
>
> **[5:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=349)** Go over to navigation, edit the button.
>
> **[5:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=352)** And this one is going to navigate back to my original dashboard.
>
> **[5:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=357)** And then we'll call this, go to timeline.
>
> **[6:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=362)** Change my color to be my purple, do okay.
>
> **[6:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=366)** Now I've got my navigation button.
>
> **[6:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=368)** So if I hold down option or the alt click option, I can now flick between my two.
>
> **[6:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=376)** And then if I do the same thing, I can click on my download button and it asks me, how would you like to export that PDF.
>
> **[6:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=385)** I can check how it both looks when I go into presentation mode.
>
> **[6:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-adding-dashboard-objects?u=76281980&t=388)** So if we were to publish it, this is what our dashboard would look like, and I can navigate between the two and I've got my export options for each one.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), this, (2), self (1), case, (1)
> **UI Navigation:** go to (7), click on (2), drag and drop (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** pdf (4)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Dashboard Design Elements

> [↑ Back to Table of Contents](#table-of-contents)

#### Giving a dashboard a good title
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=0)** - [Instructor] Let's talk about titles.
>
> **[0:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=3)** Now, titles for a dashboard can often be overlooked or seen as you know, just perfunctory rather than really important.
>
> **[0:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=11)** But actually they can really make or break a dashboard.
>
> **[0:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=15)** Now, when you think about it, the title is one of the first thing that the viewer sees when they open up a dashboard.
>
> **[0:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=21)** Now they're going to see all the charts, colors, different chart types that you've used, the layout, filters, everything else.
>
> **[0:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=29)** But the first thing they're actually going to interact with and read is going to be the title, because the title's going to show you what it is you're going to be seeing.
>
> **[0:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=37)** And the title sets the scene for the rest of the dashboard.
>
> **[0:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=42)** Now, the title itself does a number of different things.
>
> **[0:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=46)** So it's going to inform the viewer of the subject, you know, what is it that we are looking at?
>
> **[0:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=52)** What is it that we are expected to do with that dashboard?
>
> **[0:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=57)** It can often inform the viewer of the scope of the dashboard.
>
> **[1:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=61)** Now, if the dashboard is showing only, say the last two years worth of data, having that in the title informs the user even before they've interacted with any of the charts, looks at any of the filters or access or legends, what the scope is.
>
> **[1:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=76)** If you're looking at a subset of data that's really useful to put that into the title.
>
> **[1:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=81)** So the title should be something that says, this is what this dashboard shows.
>
> **[1:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=87)** So by the time you've finished interacting with the dashboard, this is what you should be able to understand or see or make a business decision on.
>
> **[1:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=96)** What you're going to get from the dashboard is actually what the title tells you.
>
> **[1:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=102)** So it can be a really important method for aiding the understanding and making sure that you understand what the dashboard is showing you much faster than just interact with the dashboard that says, here is the data.
>
> **[1:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=114)** Now, from the designer point of view, it's also really useful actually, when you are building the dashboard itself.
>
> **[2:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=121)** If you start with the title and have a good descriptive title, then everything that you do, every sheet that you create, every design decision that you make, kind of goes back to that title.
>
> **[2:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=134)** Does everything in that dashboard fit with the title?
>
> **[2:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=139)** If the title says, we're only looking back two years, then why am I showing three years worth of data?
>
> **[2:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=144)** If the title is suggesting that by the end of the interaction with our dashboard, we should have this particular understanding, then is that true?
>
> **[2:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=155)** When we get to the end of the dashboard, have we succeeded in what the title was telling us we were going to do?
>
> **[2:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=161)** So a title isn't just something that you should just have.
>
> **[2:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=164)** It's actually a really useful tool that can really aid the understanding.
>
> **[2:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=169)** Think of it this way, a good title is a good start to a great dashboard, and we'd be quite foolish not to make the most of it.
>
> **[3:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=180)** Let's see how titles work in practice.
>
> **[3:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=183)** So in this example, I've got three sheets in my dashboard.
>
> **[3:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=188)** Now the dashboard name at the bottom tab is called dashboard one.
>
> **[3:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=193)** And all of my charts have the name, which is given to them in that same tab at the bottom.
>
> **[3:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=200)** So profit, timeline, heat map, et cetera.
>
> **[3:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=203)** Now, the dashboard itself isn't shown the title at the moment.
>
> **[3:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=206)** So if I go to dashboard option at the very top of the screen and do show title, we now have my dashboard title, which by default inherits the name of the tab.
>
> **[3:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=216)** Now those four titles are useless.
>
> **[3:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=221)** I mean, they're not helpful at all.
>
> **[3:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=223)** So we have to make a decision about do we even need to have the titles?
>
> **[3:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=228)** So profit map, is that helping?
>
> **[3:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=231)** I mean, I clearly can see it's a map.
>
> **[3:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=234)** Do I know it's profit or not?
>
> **[3:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=236)** The heat map, again, it's telling me the type of chart it is.
>
> **[3:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=239)** Same as the timeline or the scatterplot, if we were to use that chart instead.
>
> **[4:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=242)** So I don't need to know what the chart type is, but it's useful now and it's looking at profits.
>
> **[4:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=248)** I've got my legends, I've got filters, I've got all the other elements I might have in my chart.
>
> **[4:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=255)** All of those could also have titles.
>
> **[4:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=256)** Now, do we need all of those or not?
>
> **[4:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=260)** And if we think about what we're trying to do with our dashboard, it's to inform people about things within the data.
>
> **[4:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=265)** So are those titles helping?
>
> **[4:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=268)** Well, in this case, they're not, are they? Let's be honest.
>
> **[4:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=270)** So what do we do about it?
>
> **[4:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=273)** I would say that general as a rule, every dashboard should have a title.
>
> **[4:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=277)** Okay? It sets the tone, it tells you what you're going to see, what you're going to be looking at, what the data might show, and what the dashboard is for, what we should be able to get from the dashboard.
>
> **[4:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=289)** After we've explored it, looked at it, interacted with it, what should we take away with us?
>
> **[4:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=294)** So to change the dashboard title, we have two options.
>
> **[4:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=297)** We can either change the name of it in the bottom tab, so I might want to change it and call it profit dashboard.
>
> **[5:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=304)** Okay, that's a better dashboard title. Slightly better.
>
> **[5:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=307)** Not a great one, but it's slightly better because now it's telling me at least we're looking at profits.
>
> **[5:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=311)** The fact it's telling me it is a dashboard, which is superb, just 'cause I know it's a dashboard.
>
> **[5:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=315)** So again, we might want to do something more involved.
>
> **[5:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=318)** Now we don't have to just stick with whatever we've called it in the bottom tab.
>
> **[5:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=323)** If we go to the top of the dashboard and double click on the title, we get our editor window and I can put any title I like in it at all.
>
> **[5:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=331)** So what would be a better title for this dashboard?
>
> **[5:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=334)** Well, we're looking at profits and losses across all of our regions products across our entire dataset.
>
> **[5:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=343)** So the dashboard is an exploratory dashboard and it's going to be answering the question or how do our profits and losses vary across our customers?
>
> **[5:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=352)** Okay, so why not call it that?
>
> **[5:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=356)** How do our profits and losses vary across our customers?
>
> **[6:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=367)** We can change the title colors, we can change the boldness, we can change this to format it anyway that we like.
>
> **[6:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=376)** So hit apply. Make sure it looks okay.
>
> **[6:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=378)** Hit okay.
>
> **[6:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=379)** Okay, so now I've got a slightly better title.
>
> **[6:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=382)** How do our profits and losses vary across our customers?
>
> **[6:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=387)** So that single sentence actually tells us quite a lot about what the dashboard is showing us.
>
> **[6:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=393)** We know we're looking at profits and losses.
>
> **[6:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=395)** Okay, so it already tells that this is a profitability dashboard.
>
> **[6:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=399)** We're looking to see how it varies. Okay?
>
> **[6:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=401)** So we know that there's some differences across our customers.
>
> **[6:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=405)** So it's a customer focused dashboard, okay?
>
> **[6:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=407)** Which makes sense if we look at the map, that's where our customers live.
>
> **[6:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=410)** If we look at the heat map, it's what products are our customers buying and whereabouts, which one of those regions it is.
>
> **[6:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=417)** And then timeline is going to be, well, when are our customers making those purchases?
>
> **[7:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=422)** Okay? So that single line has changed the entire focus of the dashboard.
>
> **[7:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=429)** If instead of that we wanted to make it a more informative dashboard, then we could change the title to be something like that.
>
> **[7:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=436)** So the title can tell you a lot about the data, about the scope, about what we should get by the end of it.
>
> **[7:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=444)** Now, when it comes to titles, we've got three other titles here, we have our profit map and our heat map.
>
> **[7:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=449)** Well, now we know the entire dashboard is profit and losses.
>
> **[7:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=453)** Do we need those titles at all?
>
> **[7:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=455)** Probably not because they're just telling us the type of chart it is.
>
> **[7:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=459)** Now I want to keep those names in the bottom tab because that's useful for organizing my particular workbook.
>
> **[7:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=465)** I want to know what they are.
>
> **[7:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=467)** But in terms of the final person using this dashboard, probably not.
>
> **[7:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=472)** So as they are, they're not helping, could we get rid of them?
>
> **[7:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=477)** Should we change them?
>
> **[7:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=479)** That's something we have to think about.
>
> **[8:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=481)** We'll look about removing chart junk in another video where we look to see is it adding anything or can we take things away?
>
> **[8:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=488)** And certainly titles are a very good one.
>
> **[8:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=491)** A good title is a good asset to keep, but a bad title is just taking up space.
>
> **[8:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=497)** Titles are often overlooked and people kind of just put a very perfunctory title in there as almost as a text box exercise.
>
> **[8:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/giving-a-dashboard-a-good-title?u=76281980&t=506)** But the good titles, the really good ones can turn a good dashboard into a great dashboard.

> [!info]- Semantic Content
>
> **CLI Commands:** make (7)
> **Code Keywords:** let (3), else. (1), case, (1), for, (1)
> **Definitions:** is a  (4), is an  (1)
> **UI Navigation:** go to (2), click on (1)
> **Speakers:** - [instructor] (1)

#### Dashboard colors
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=0)** - [Instructor] So let's take a look at this dashboard and think about how the color works for it.
>
> **[0:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=6)** So this dashboard has four sheets.
>
> **[0:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=8)** We have our two heat maps at the top, a timeline, and a scatterplot.
>
> **[0:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=13)** And we can see that it's a very colorful dashboard, okay?
>
> **[0:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=16)** Either by intention or accidentally, this is what we've got.
>
> **[0:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=21)** Now, it looks very messy.
>
> **[0:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=24)** There are several different color schemes going on, each one of those four charts, using a different color scheme.
>
> **[0:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=30)** So I don't know if that data is the same data, if it's related, you know, am I supposed to infer one thing from another?
>
> **[0:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=39)** We've got a scatterplot that's multicolored down at the bottom, presumably, I don't know.
>
> **[0:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=44)** But each one of these, probably, represents a different location or something like that.
>
> **[0:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=50)** There's a lot going on, and the color isn't helping.
>
> **[0:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=54)** You could argue that it's actually hindering because there's so much going on.
>
> **[0:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=57)** So how do we fix this?
>
> **[0:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=59)** Well, there's a couple of ways that we can approach this.
>
> **[1:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=62)** If the data merits the different colors, then we have to live with what the dashboard looks like, and that should kind of be one of the major considerations.
>
> **[1:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=72)** If it makes sense to have the green and the blue as two different color schemes, then maybe that's okay and we just have to live with the fact that they look different, because we're trying to draw attention to different things.
>
> **[1:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=86)** But the fact that the whole dashboard is very, very busy, makes it very disjointed, okay?
>
> **[1:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=93)** There's no cohesion to it. So what do we do?
>
> **[1:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=97)** Well, it's a couple of approaches.
>
> **[1:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=98)** First, we can use one single color scheme across the entire dashboard, or we can look at each individual sheet and think which color scheme would work best for that, and then could we apply it to everywhere else?
>
> **[1:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=111)** So one method that we might use is to kind of use corporate branding colors, if that's what we have to do.
>
> **[1:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=119)** So this is the Landon Hotel, and you can see from the logo, it has this kind of purple color on here.
>
> **[2:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=124)** So what we could do is we could use that purple across all of our dashboard.
>
> **[2:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=129)** So how would we go around doing that?
>
> **[2:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=131)** Well, what we could do, for example, is we could pick this purple color on the logo and use that on our dashboard buttons, okay?
>
> **[2:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=142)** So if I edit my button and the background color, I can click on the color icon.
>
> **[2:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=149)** I can go onto more colors and I get the color picker.
>
> **[2:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=153)** I can click on the dropper and I could go over to the logo.
>
> **[2:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=157)** I could pick up that particular shade of purple.
>
> **[2:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=160)** I'll add that to my palette.
>
> **[2:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=164)** And now if I hit apply, that button is the same as the colors in the logo.
>
> **[2:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=171)** So if I go ahead and do that for my other button over here as well, just change that.
>
> **[2:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=177)** And it's remembered to color from a moment ago where I used it.
>
> **[3:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=182)** I did the same thing with the third button.
>
> **[3:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=186)** Change the background color to make it the same.
>
> **[3:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=191)** Okay.
>
> **[3:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=191)** So what's that now done is it's tied these three buttons in with that title because it's all using that same color.
>
> **[3:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=199)** Okay, so that's good. So could we use that anywhere else?
>
> **[3:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=204)** So the obvious one is our profit timeline.
>
> **[3:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=208)** Now, normally with a profit timeline, you have to be aware that if it goes negative, we want that to really show up.
>
> **[3:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=215)** Now, if we go to our timeline, and I actually color this using profit, how is it going to change?
>
> **[3:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=223)** So let's find profit in my data, and if I put that onto color, how does it change?
>
> **[3:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=231)** Well, it's all shades of blue.
>
> **[3:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=235)** So now we're doubling coding.
>
> **[3:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=237)** So I can see that I have the height of my dot is my profit, and also the shade of that blue.
>
> **[4:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=243)** Now, at no point in our history, have we ever gone into negative profit.
>
> **[4:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=249)** So it's not actually adding too much to it by having that color on there.
>
> **[4:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=253)** So in actual fact, what I could do is instead of coloring it by the profit, I could just color it that purple shade.
>
> **[4:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=263)** Now if I go back to my dashboard, I can then see that having that matching the top kind of ties it in and out a bit more.
>
> **[4:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=272)** So let's see, if I was to go to my occupancy data, now this is all looking at shades of green, looking at percentage data.
>
> **[4:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=280)** Again, I could go to color edit colors, and at the moment it's looking at this green color palette.
>
> **[4:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=288)** What I could do is I could actually double click on the green block, change that to purple, hit apply.
>
> **[4:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=298)** And now all of mine are using varying shades of that original purple color.
>
> **[5:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=304)** If I go and do the same thing to my occupancy heat map, we could do the same thing there.
>
> **[5:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=310)** Edit the colors, double click on the blue this time, change that to purple.
>
> **[5:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=316)** Hit okay, hit okay again.
>
> **[5:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=319)** Now if we go back to our dashboard, I've now got everything colored that same purple.
>
> **[5:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=326)** Now, if I wanted to do the same thing for my scatterplot, that's going to be slightly harder because all of my dots are going to become the same color.
>
> **[5:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=338)** So let's try that and see what that would look like, if I take my names off and then color it by there.
>
> **[5:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=348)** Now I dunno which is which, but if you think about it, when they're all multicolored, I need a ledger to find that out anyway.
>
> **[5:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=354)** So by having them all the same color, does it actually make a difference?
>
> **[5:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=359)** What about if we turned on the labels?
>
> **[6:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=363)** So if I put the hotel name onto the label and go back to my scatterplot, I can now see I've actually got some of the labeling on there.
>
> **[6:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=371)** So that might be an alternative.
>
> **[6:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=374)** So now let's look at our dashboard again.
>
> **[6:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=378)** It looks a lot better. It's a consistent color scheme.
>
> **[6:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=381)** We've used the corporate colors based off of the branding.
>
> **[6:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=384)** We've changed the colors of our buttons, and all of our data is now colored, using that same shade of purple.
>
> **[6:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=394)** Now, does it matter that we have two heat maps using the same color scheme?
>
> **[6:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=401)** In this case, probably not.
>
> **[6:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=403)** They are looking at different data.
>
> **[6:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=405)** But if you look at the numbers being displayed, one is showing percentages, one is showing actual numbers.
>
> **[6:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=411)** So the data they're displaying is clearly different because it looks different.
>
> **[6:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=415)** So the fact the color is the same is not quite as critical.
>
> **[6:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=419)** What is consistent though is that the lighter color or this nearly gray color is the lowest value, and the darkest values are the darkest shade of purple.
>
> **[7:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=431)** The color usage is consistent across both of the different charts, even though the underlying data is different.
>
> **[7:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=440)** So what we've done is take four different charts, looking at different data that had very different color schemes, and we've picked the same color for all of them.
>
> **[7:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=451)** Now, the color that we picked came from the logo, and what that's done has now tied the entire dashboard in together.
>
> **[7:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=459)** So that's one method that we can use color in the dashboard to kind of unify everything together, and actually make it a lot easier to see what's going on and to relate that data together.
>
> **[7:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=470)** But remember, this only works because the data itself allowed us to do that.
>
> **[7:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=476)** If we had profits that went negative, that would be more important to highlight that than to make it look nice, because that's much more business critical than a nice looking dashboard.
>
> **[8:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dashboard-colors?u=76281980&t=488)** So don't let the data dictate what color choices you do, but if you have the option, make it look good.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this. (1), case, (1)
> **CLI Commands:** make (5), find (2)
> **UI Navigation:** click on (3), go to (3)
> **Cross-References:** go back to (3)
> **Analogies:** for example (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Remove chart junk
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=0)** - [Instructor] Let's have a little talk about chart junk, what it is and why we don't want it.
>
> **[0:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=7)** So chart junk can be kind of loosely defined as anything that doesn't need to be there.
>
> **[0:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=15)** Now sometimes we talk about the data-ink ratio, and this comes from a time when dashboards and visualizations used to be printed, and we actually talked about the amount of ink that was being used.
>
> **[0:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=30)** Now, the data-ink ratio roughly talks about the amount of ink used for the data as a proportion of all the ink used in the entire visualization.
>
> **[0:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=41)** So the idea being is that if you're using ink to do superfluous things that aren't enhancing the data, you're going to lower the data-ink ratio.
>
> **[0:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=51)** What we want is to make sure that all of the ink that's being used is just being used in service of that data.
>
> **[0:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=59)** And even though we might not necessarily be printing things out, we still have that same kind of concept.
>
> **[1:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=65)** Space is very precious.
>
> **[1:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=67)** Now we've taught in some of the other videos about where the dashboard is going to be viewed.
>
> **[1:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=72)** And no matter whether it's on a desktop, a laptop, a tablet, a phone, or on a big screen in a presentation, you never have enough room, and space is always going to be a premium.
>
> **[1:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=86)** So you have to fit things, what you have, into the available space, 'cause you can't make more space.
>
> **[1:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=91)** You've kind of got a finite amount of room.
>
> **[1:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=93)** So because of that, every element that you put inside your dashboard, whether that's the titles, the visualization, the legends, any additional text, pictures, blanks, every element needs to contribute to the overall dashboard.
>
> **[1:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=110)** We haven't got room for anything that can't carry its own weight.
>
> **[1:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=115)** So the things to think about when you are considering chart junk and anything you are adding or removing from a dashboard is, does it aid the understanding?
>
> **[2:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=127)** And if it doesn't aid the understanding, it shouldn't be there.
>
> **[2:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=131)** If it doesn't enhance the data in some way.
>
> **[2:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=135)** So that could be labels, it could be colors, it could be legends, it could be access labels, it could be anything that doesn't enhance the data.
>
> **[2:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=144)** If it's not enhancing the data, could we potentially get rid of it?
>
> **[2:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=148)** And would it make for a cleaner, neater dashboard?
>
> **[2:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=151)** Similarly, if it doesn't aid the design of the dashboard.
>
> **[2:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=154)** Remember, things like color are affected by the data, that should rule what kind of colors that we use, but it should also be part of the overall design of the dashboard.
>
> **[2:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=166)** So is it detracting from the design of the dashboard?
>
> **[2:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=168)** Does it make it look too cluttered?
>
> **[2:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=170)** Whereas a cleaner dashboard might be more pleasing to the eye.
>
> **[2:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=173)** And if you are trying to attract someone's attention, they're going to be drawn together to something that looks nicer.
>
> **[3:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=180)** If none of those are true, then it doesn't belong in the dashboard.
>
> **[3:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=185)** So create your dashboard.
>
> **[3:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=188)** Put things in, take things out, find that balance that works for you.
>
> **[3:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=192)** Remember, it's all about the data, not about the chart junk.
>
> **[3:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=196)** So where does dashboard chart junk come from?
>
> **[3:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=200)** I mean, we don't add it intentionally, so why is it something we have to deal with?
>
> **[3:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=205)** Well, let me show you what happens when you create a dashboard.
>
> **[3:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=208)** So I've got four sheets in here.
>
> **[3:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=210)** I've got a map, a timeline, heat map, a scatterplot, and a blank dashboard.
>
> **[3:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=216)** So I'm just going to throw these sheets into this dashboard.
>
> **[3:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=219)** I'm not going to really care about what the dashboard looks like.
>
> **[3:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=221)** So it's just to show you where this junk appears from.
>
> **[3:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=225)** Okay, so I put my map, and then my timeline, and I'll put my heat map, and I'll put my scatterplot.
>
> **[3:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=235)** Okay, so I've just added those in there.
>
> **[4:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=240)** So I've got my four individual charts.
>
> **[4:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=242)** Now each chart has got a title.
>
> **[4:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=244)** The title comes from the title it's got in the bottom of our view.
>
> **[4:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=251)** And that by default is the title for each one of the charts.
>
> **[4:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=255)** On the right hand side, we've got all of the filters, the legends that have suddenly appeared.
>
> **[4:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=263)** Now, I haven't added those manually, I didn't tell Tableau to do that.
>
> **[4:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=267)** What's happened is because these were active in each one of the sheets, Tableau's brought it over.
>
> **[4:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=272)** So if I go back and look at the Profit Map sheet itself, see I've got a legend for the color, and I've got a filter for the profit.
>
> **[4:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=280)** So when I add that sheet to the dashboard, Tableau makes the assumption that, well, you probably want those two elements, 'cause otherwise why are you showing them as part of the sheet?
>
> **[4:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=289)** It kind of carries that through.
>
> **[4:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=291)** And because on each of my other sheets I've also got legends and some filters, they all come across as well.
>
> **[4:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=298)** Now, if I wanted one of those filters, brilliant, I've got 'em there already, but if I don't, I need to decide what to do with them.
>
> **[5:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=306)** So when it comes to looking at chart junk, we need to think about what is it we actually want to do.
>
> **[5:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=312)** And in most cases, we want to maximize the amount of room for our charts.
>
> **[5:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=317)** Now just looking on here, you can see it's a lot of white space.
>
> **[5:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=320)** Now we talked in other videos about using blanks to add white space, and also padding around our visualizations to kind of give it a bit more room to breathe.
>
> **[5:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=330)** But then the other flip side of that white space is kind of empty dead space.
>
> **[5:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=334)** To the right of my scatterplot, I've got a big rectangle of white that's not adding anything at all.
>
> **[5:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=341)** Now I could expand my heat map into that area.
>
> **[5:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=344)** I could set the size to entire view to fill that space if I wanted to, or I could rearrange my map.
>
> **[5:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=351)** Maybe I want my map to be slightly wider, use up a bit more of that room.
>
> **[5:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=356)** So every element on this dashboard now has to kind of justify its own existence.
>
> **[6:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=362)** So we need to look at every single element to say, do we need it?
>
> **[6:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=368)** Is it adding to the visualization or can we get rid of it?
>
> **[6:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=372)** So the titles, are they useful titles, or can we get rid of them?
>
> **[6:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=376)** The legends, do we need those legends?
>
> **[6:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=378)** If we do, would it be better if they were nearer the thing they are accompanying?
>
> **[6:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=383)** For example, this Profit legend here.
>
> **[6:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=386)** Now that actually belongs to the map, because if we look at the values for the profit,
>
> **[6:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=392)** - 20,000 and 39,000, that doesn't apply to any of the values being displayed in our heat map.
>
> **[6:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=397)** It's actually the overall state profits.
>
> **[6:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=400)** But it's way over here on the right hand side, not actually close to the map, which it refers to.
>
> **[6:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=406)** So at the very least, we need to move that.
>
> **[6:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=410)** So I could set this particular element to be a floating element, to detach itself from the right hand side and I could then move it over here to the left.
>
> **[7:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=420)** So now it's actually by the map itself.
>
> **[7:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=423)** Now I might decide to get rid of that entirely.
>
> **[7:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=425)** That's the kind of judgment call that I have to make at a later date.
>
> **[7:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=428)** But for right now, the legend is at least next to the thing it refers to.
>
> **[7:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=434)** The same thing could apply to maybe my region colors.
>
> **[7:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=437)** Well, they refer to my scatterplot, I need those.
>
> **[7:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=440)** The size legends, sizes that are very easy thing to look at with the legend, so I could probably get rid of that as well.
>
> **[7:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=447)** So what we would have to do is go through each one of our charts, removing those things.
>
> **[7:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=452)** So if I say, I don't want that legend, I can get rid of it.
>
> **[7:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=456)** The region one, I'm going to move that to actually sit near my scatterplot.
>
> **[7:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=462)** And my filters, well, maybe I'll get rid of them for the moment, I can always add them back in later.
>
> **[7:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=469)** So I'm going to click the whole top of the filter pane and just get rid of it.
>
> **[7:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=475)** And what that does is that has cleared up that entire right hand side.
>
> **[7:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=478)** So now I've got more room for my visualizations, I've got more space for each one of these bubbles to actually exist.
>
> **[8:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=484)** My timeline's got a bit more detail.
>
> **[8:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=486)** I can then go through and look at every other element and think, "Do we need it, do we not need it?"
>
> **[8:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=492)** So Profit Heat Map as a title, for example, is not a good title.
>
> **[8:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=495)** If I don't need it, I could hide the title.
>
> **[8:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=499)** My region headings, Central, East, South, and West, I need those, but do I need to know that they are regions?
>
> **[8:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=504)** No. So I could right-click and hide those labels.
>
> **[8:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=509)** Every element is contributing to the dashboard, but some contribute much more than others.
>
> **[8:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/remove-chart-junk?u=76281980&t=516)** So when you look at your dashboard, look for that chart junk, look for those things that aren't adding anything, and think about how could we remove those.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5), find (1)
> **Code Keywords:** let (2), throw (1), from. (1)
> **Definitions:** refers to (2)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1), - 20 (1)
> **UI Navigation:** right-click (1)

#### Visually group elements with borders
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=0)** - [Instructor] Borders are a nice simple way of grouping elements together on a dashboard to allow you to arrange things in a slightly more logical way.
>
> **[0:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=11)** One thing they're quite good for doing is collating charts together that are related to make it slightly easier to understand what's going on with dashboard.
>
> **[0:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=21)** So let's look at this one as an example.
>
> **[0:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=23)** So I've got a map and a heat map, both looking at profits, and they're color coded to look at the profits, and at the bottom I've got a bar chart showing sales per segment and category and a timeline also showing sales.
>
> **[0:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=40)** Now this is all coming from the same underlying dataset, but the top two are looking at the profit.
>
> **[0:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=45)** The bottom two are looking at the sales.
>
> **[0:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=46)** So they are looking at the same data from two different directions.
>
> **[0:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=51)** Now, what I want to make kind of really obvious that they are completely separate.
>
> **[0:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=55)** So ideally what I'd like to do is draw a border around those two sections to show that they are separate, even though they're looking at that same underlying data.
>
> **[1:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=66)** Now, to add a border as an element, we do that from the Layout tab.
>
> **[1:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=69)** So if I select one of my charts and go to Layout, I have a border option about halfway down.
>
> **[1:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=76)** Now this works like all the other line options that we have within Tableau.
>
> **[1:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=79)** We can set the style of the line whether we want a solid line or a dotted line.
>
> **[1:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=83)** We can change the thickness of the line, so I can make a very thick line, I can make a thin line, and we can obviously change the color as well if we want it to match a particular color scheme.
>
> **[1:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=95)** So if I just select those options as I've done there, we can then see that my sales has now got a border around it.
>
> **[1:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=102)** Now by putting the border around it, that pulls focus on that particular chart out of all my other ones in the dashboard.
>
> **[1:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=108)** That might be what I want.
>
> **[1:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=109)** Maybe that is the most important one that I want to draw somebody's eye to.
>
> **[1:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=112)** So if I was to make the border, you know, orange or a really bright color, that would draw it even more.
>
> **[1:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=119)** But for our example, I want to group these two together.
>
> **[2:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=124)** Now, I can't do that at the sheet level because the border is only going around this sales timeline.
>
> **[2:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=130)** What I need to do is physically group them together within a container.
>
> **[2:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=136)** So to understand a bit more about containers, check out the other chapters where we go into more detail about horizontal containers and vertical containers, but in order for this to work, I need to have a horizontal container that I can place both my bar charts and my line chart into it, and then I can put a border around the container.
>
> **[2:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=154)** So first I'm going to remove the sales timeline border.
>
> **[2:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=159)** Going to go to my Dashboard tab, and I'm going to go to the objects and I'm going to put horizontal container, and I'm just going to put it in between my two existing sheets.
>
> **[2:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=169)** So we can see it's got this highlighted blue border around it just to show this is where the container is, and I'm going to drop my timeline into one half and carefully place my bar chart inside the container, which now highlights blue.
>
> **[3:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=187)** So now these two objects are within that container.
>
> **[3:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=192)** I'm going to double click on the sales segment control at the top, and that will take me up to the container control.
>
> **[3:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=200)** I'm going to select distribute contents evenly to make them even.
>
> **[3:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=204)** Now with this selected, I can then go to my Layout tab at the top left, and in the border option now, if I put a board around it, that's going to put a board around the container.
>
> **[3:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=215)** So now if I click away, we can now see that these two objects are now within the physical container and I've put a board around that container.
>
> **[3:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=226)** So if I go ahead and do the same thing with my two charts at the top of the screen, so I'll go again to Dashboard, select Horizontal Container, put it in between the two, drag and drop the map into the container, drop my heat map into the other half of the container.
>
> **[4:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=245)** I could resize it if I wanted to either do it manually or I could use the distribute contents evenly option, change it to be entire view.
>
> **[4:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=258)** Okay, so now I can go ahead and put a board around both my objects.
>
> **[4:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=262)** So I'm going to double click on the sheet control so my container's now highlighted, and I could do the same thing by just putting a board around there as well.
>
> **[4:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=273)** So in this very simple example, what I've now got is kind of two segments to that dashboard demarked by this border.
>
> **[4:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=282)** So what I can now do is put all of my profit-related items into the Profit section or the sales related items into the Sales section.
>
> **[4:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=292)** Now, it might be that I wanted to do things slightly differently.
>
> **[4:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=294)** I can see that maybe my heat map, which is looking at my regions, maybe I want to group that together with my sales.
>
> **[5:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=303)** Well, in that case, what I would need to do would either be to move the heat map into the bottom section or use a vertical container.
>
> **[5:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=310)** Anytime you want to put a border around more than one sheet, you need to put it inside a container, because a container, as the name suggests, can contain other things.
>
> **[5:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=321)** So borders can be really good at grouping things together in a visual way.
>
> **[5:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=327)** It kind of says that these two charts are related or you're inviting your viewer to view them and consume them kind of at the same time.
>
> **[5:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=339)** It's putting a visual link between the two to say that these two things mean something taken in context with each other.
>
> **[5:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=347)** Thinking about chart junk as we talk in another video, don't add borders just for the sake of doing it.
>
> **[5:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=355)** Put the borders in, step back, and have a look.
>
> **[5:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=359)** Has it now made it too rigid or too boxy or too kind of complicated by having that border in?
>
> **[6:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=366)** The really easy way to see if that's had an effect is just to undo that change.
>
> **[6:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=371)** If I go to Undo, now it goes away and I can check what it looked like before, and I can redo it and check what it looked right after.
>
> **[6:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=380)** Okay, the after looks okay.
>
> **[6:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/visually-group-elements-with-borders?u=76281980&t=383)** So use borders to either highlight an individual sheet because you want it to stand out and be prominent within the rest of your dashboards, or use borders to group objects together to say this chart and this chart are related and should be treated as either one single chart or there's some context between the two.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (5), click on (2), drag and drop (1)
> **CLI Commands:** make (6)
> **Code Keywords:** let (1), case, (1)
> **Speakers:** - [instructor] (1)

#### Apply filters across sheets
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=0)** - [Instructor] When you create a filter, that filter is created within a sheet, and by default, it's only going to apply to that sheet that it was created in.
>
> **[0:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=11)** So for example, if I go to my profit map, we can see that I've got four filters in here, one looking at the region, one looking at segment, and then an order date and a sum of profit.
>
> **[0:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=22)** Now these filters are part of this particular worksheet.
>
> **[0:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=27)** If I look at my timeline, I can see that I've also got a region and segment filter, but again, this filter only applies to this individual sheet here.
>
> **[0:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=37)** Now, that's sometimes what you want, but other times you want it to apply across multiple different sheets.
>
> **[0:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=45)** Now, if we've created all of our sheets and put them into a dashboard, I don't really want to have to go and apply the changes to each individual sheet.
>
> **[0:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=53)** What I'd rather do is have it apply in a more global way, and we can do that from the dashboard itself.
>
> **[1:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=61)** So if I go back to my data now, all of these sheets all come from that one single superstore data set.
>
> **[1:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=68)** So all the filters that I have are applying to that same set of underlying data.
>
> **[1:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=72)** But at the moment, each chart has got its own set of filters.
>
> **[1:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=77)** What I'm going to do is add some filters to the dashboard and then make them apply universally to the other sheets within that dashboard.
>
> **[1:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=85)** So if I select the profit map and then go to the analysis tab at the top of our menu and go down to the filters, I can see the filters that are available to me.
>
> **[1:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=97)** Now these filters here are the ones that are attached to that profit map, okay?
>
> **[1:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=103)** If I go and select the segment sales and try and do the same thing with the analysis and the filters, I don't see the same information.
>
> **[1:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=114)** I had the sum of sales I could show as a filter, but nothing to do with the profit that we saw with the map.
>
> **[2:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=120)** So let's go back to my map, go to analysis, and what filter should we have?
>
> **[2:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=125)** Well, let's say I want a filter on the order date.
>
> **[2:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=129)** So I'll click on that.
>
> **[2:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=130)** That'll now appear, and I'll go back and say, I also want the region.
>
> **[2:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=137)** So as I change these, we can see that the map has changed because that's all these filters are for.
>
> **[2:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=145)** Now, if I go to my segment sales and see what options I've got here for these filters, so I could have a filter on category or maybe on segment.
>
> **[2:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=153)** Segment might be useful because that's the only sheet that refers to segment.
>
> **[2:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=157)** Again, if I turn these on or off, it's only going to apply to those sheets there.
>
> **[2:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=163)** So I have an order date, I have region, I have my segments.
>
> **[2:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=168)** Local filters apply to local sheets.
>
> **[2:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=172)** I want to make them universal.
>
> **[2:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=174)** So what I can then do is I come down to the apply to worksheets.
>
> **[2:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=179)** Now, here is where I have my different options.
>
> **[3:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=183)** If I do apply to all using this data source, this will become a global data source filter.
>
> **[3:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=189)** That means that any sheet will also have this filter applied to us.
>
> **[3:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=194)** Now, that might be what you want, but that also means that every other sheet that we either create from this point on using this data source is automatically going to have that filter applied, or it means that any other sheet that we add to our dashboard is also going to have that filter.
>
> **[3:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=210)** Instead, what I want to do is actually be able to select which ones I want it to apply to.
>
> **[3:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=215)** I've got sheets that aren't part of this dashboard that I don't want to have part of my filter.
>
> **[3:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=221)** So instead, I'm going to hit the selected worksheets.
>
> **[3:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=225)** And what this then does is show all of the filters that we could apply to all of the sheets.
>
> **[3:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=233)** And what you'll see is the profit map is already grayed out because that is who this filter already belongs to.
>
> **[4:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=240)** And it shows me the other sheets within my dashboard.
>
> **[4:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=244)** If I click this button that says show all worksheets in the workbook, we can see there are other sheets that aren't part of it.
>
> **[4:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=249)** So the customer scatter plot isn't currently part of my dashboard.
>
> **[4:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=253)** So if I untick that.
>
> **[4:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=256)** If I then do select all on dashboard, what that will then do is apply my filter to just these sheets.
>
> **[4:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=261)** If I hit okay, and if I do the same thing again, apply to worksheets selected, all on dashboard, okay to the segment, apply to worksheet selected, all on dashboard.
>
> **[4:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=281)** Now, if I untick some of these, you'll see that every chart now changes.
>
> **[4:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=288)** Now why that's useful is it means that my filters have now been applied to each one of these sheets, and if I go to one of the sheets, say my sales timeline, I can see that the filters are now selected for this particular sheet.
>
> **[5:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=303)** This icon here shows that this filter also applies to other selected sheets.
>
> **[5:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=307)** In this case, all the ones on that dashboard.
>
> **[5:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=310)** If you look at my customer scatter plot, although it has got some filters, these are local filters just for this individual sheet.
>
> **[5:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=318)** As I say, we could have done this as a global filter, but it might be that I've got a reason why I don't want these filters to apply to these particular customers, or maybe I've excluded or included certain customers just for this particular visualization that I don't want to be overridden by a global setting.
>
> **[5:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=333)** So by adding the filters to the dashboard and then using the apply to all within the dashboard allows you to customize the filters just for the things in the view in the dashboard.
>
> **[5:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=345)** It's often the case that you'll have sheets that you don't intend to be published to be seen by your viewer.
>
> **[5:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=351)** They might be just for your own consumption, or as part of a data cleanse process.
>
> **[5:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=356)** You don't want to expose that information particularly to your viewer.
>
> **[6:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=361)** So by only applying the filters to the dashboard lets you control that.
>
> **[6:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/apply-filters-across-sheets?u=76281980&t=364)** I've got interaction for my customer, my viewer of my data, but I've still got the ability to have sheets that have different filtering because that makes more sense for me.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (5), select the (2), click on (1)
> **Code Keywords:** let (2), default, (1), for. (1), case, (1)
> **Definitions:** means that (3), refers to (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Highlight data with annotations
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=0)** - [Instructor] Annotations are a great way of highlighting something interesting within your data.
>
> **[0:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=7)** Now, imagine the situation where you've been given your data set, you've done your analysis, you've picked the best charts to show off that data, and you've produced your dashboard.
>
> **[0:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=19)** And during the course of your investigations, you found a couple of interesting outliers that you particularly want to highlight.
>
> **[0:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=26)** How can we ensure that your viewer is actually going to see what you saw?
>
> **[0:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=31)** So take the example of this dashboard.
>
> **[0:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=35)** And what we've got is the map and the heat map, the timeline and the scatterplot.
>
> **[0:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=40)** And there's two things in particular that kind of stand out in the timeline and that scatterplot.
>
> **[0:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=47)** So in the timeline, we have this prominent point in January, 2022 where we made significant losses and that's our worst performing month.
>
> **[0:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=58)** Previous worth one was in July, but this one is quite a bit bigger.
>
> **[1:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=64)** Now, during the course of my investigation, we have uncovered why that happened and it may or may not be cause of concern for our business.
>
> **[1:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=74)** But if we've already figured out what that point is and whether it is something we should be concerned about or not, it'd be quite good to annotate that.
>
> **[1:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=81)** So when our viewer sees that, not only do they then notice that it was particularly bad, but we've got some explanation on it as well.
>
> **[1:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=89)** Similar, if we look at our customer scatterplot, you can see there are several outliers within our data, which is obviously typically what you get with a scatterplot.
>
> **[1:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=98)** I've got a particularly low customer down here who is our least profitable.
>
> **[1:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=103)** I have my most profitable on the right hand side, but I have this interest in use case up here with Sean Miller, who is clearly our best customer in terms of sales.
>
> **[1:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=112)** But overall, we make a loss and we've sold 27 products.
>
> **[1:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=117)** That's going to cause concern because we're sending a lot of products, we make a lot in sales, but we're making overall losses.
>
> **[2:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=122)** Why is that?
>
> **[2:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=123)** That's something that needs extra investigation.
>
> **[2:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=126)** Now, depending on who is looking at this dashboard, they might already know these things.
>
> **[2:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=130)** They might know that at that particular month, in that particular year, we had a problem with this supplier or a particular customer.
>
> **[2:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=137)** There's something that affected that data.
>
> **[2:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=140)** Similarly, we might understand that the fact that Sean is our best customer, but not great for profit is fine.
>
> **[2:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=147)** It's understood he lead.
>
> **[2:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=149)** We get lead generation in other ways.
>
> **[2:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=152)** That's absolutely fine.
>
> **[2:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=153)** So we can understand that because we understand the data, but do our viewers?
>
> **[2:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=157)** And this leads back to who is the audience of your data?
>
> **[2:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=162)** So an annotation would allow us to put that extra information as part of the dashboard.
>
> **[2:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=167)** So let's go ahead and do that.
>
> **[2:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=170)** So what we do is we select the data point that we want to annotate.
>
> **[2:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=174)** Hit right click, and then I can annotate the mark.
>
> **[2:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=179)** So we have three options, marks, points, and area annotations.
>
> **[3:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=183)** If I annotate the mark, this is going to create an annotation that is attached itself to that particular mark.
>
> **[3:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=189)** Now, by default, it shows all of the data that is currently encoded within that mark.
>
> **[3:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=195)** So I don't actually need any of that.
>
> **[3:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=198)** What I'm going to do is I'm going to take everything out and just do, <Customer Name> is a great customer.
>
> **[3:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=207)** So now we have my annotation and the label I can move anywhere that I like, but that will now sit there and it's now attached to Sean, the customer.
>
> **[3:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=216)** Similarly, I can highlight my poor month.
>
> **[3:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=220)** I can annotate that mark and I can say, again, whatever text I want to put in here.
>
> **[3:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=228)** So maybe I'll do <MONTH> was due to a fire in the warehouse.
>
> **[4:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=240)** So there was a known event that happened.
>
> **[4:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=243)** We understand, and this is going to continue throughout our data.
>
> **[4:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=247)** So that's a mark annotation.
>
> **[4:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=249)** The annotation is attached to the mark, and why is that important?
>
> **[4:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=253)** Well it's important 'cause if our data changes, that annotation will stick with that particular mark.
>
> **[4:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=258)** So if I was to add a filter to our dashboard, so if I add a filter looking at the month of order date, for example, if I change, I filter, the mark point changed because now the axis is slightly different.
>
> **[4:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=282)** So then mark and the annotation have moved to stay with my mark.
>
> **[4:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=289)** If I'd have done a point annotation, that attaches itself to the area itself.
>
> **[4:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=295)** So annotations are a good way of adding additional information to our dashboard.
>
> **[5:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=302)** They are part of each individual sheet.
>
> **[5:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=306)** You'll see that my label, I can't move it outside the edges of the actual visualization.
>
> **[5:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=314)** So unlike a text box or other ways of labeling, it only exists within the visualization itself because it is actually part of the underlying data.
>
> **[5:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=325)** So if you want to add annotations outside of the visualizations, then you need to add a text box and add that as a block of text.
>
> **[5:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=335)** Annotations are a great way of adding extra contact to the data.
>
> **[5:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=340)** They do take up room.
>
> **[5:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=342)** So you have to make sure that you actually have enough room to share that information.
>
> **[5:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=346)** Remember, if it's an interactive dashboard and somebody's actually going to be able to interact with the data points themselves, they can hover over to get information about that data point.
>
> **[5:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=356)** So I can see Sean's name, the region, the amount of profit, the sales, and the quantity.
>
> **[6:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=362)** So I don't need to put that into the annotation because that's there as part of the underlying data.
>
> **[6:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=368)** So use annotations to call out the important things.
>
> **[6:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=372)** Don't put them everywhere.
>
> **[6:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=373)** It gets too cluttered then we move into chart junk territory.
>
> **[6:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-data-with-annotations?u=76281980&t=377)** But if you want to make sure that somebody sees what you've seen in the data, they can be a really powerful tool.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Code Keywords:** let (1), default, (1), continue (1)
> **Analogies:** imagine (1), for example (1)
> **Env Vars:** month (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Collapsible containers to show or hide elements
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=0)** - [Instructor] Space is always a premium on any dashboard that you create.
>
> **[0:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=5)** It doesn't matter whether it's a big dashboard, small dashboard, there's always never enough room.
>
> **[0:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=11)** It's just one of the things that we have to deal with.
>
> **[0:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=14)** But it's quite a cool tool that we can use to enable objects to appear and disappear depending on what we need them to do.
>
> **[0:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=23)** To do that, we use this idea of collapsible containers.
>
> **[0:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=27)** Now what they are is a container that we can put any object in.
>
> **[0:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=31)** It could be a chart, it could be filters, parameters, legends, whatever we like.
>
> **[0:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=36)** And we can create a button to show that container and hide that container.
>
> **[0:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=40)** So if we don't need to see it, it doesn't need to be there.
>
> **[0:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=43)** So I'm going to show you how this works both with filters, and we'll also do it with one of the sheets and see how else it could work.
>
> **[0:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=52)** So in this dashboard, I've got four sheets, and on the right hand side I've got a container that's got legends for my sheets.
>
> **[1:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=61)** And you'll see that at the bottom of that pane there's a big chunk of white space.
>
> **[1:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=67)** Now that seems a bit of a waste.
>
> **[1:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=68)** I'd like to use that space to put my timeline, extend that across into that area.
>
> **[1:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=76)** But also I've got a heat map here that's slightly squished up.
>
> **[1:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=81)** Now in this particular view, when all of my filters are turned on, we're not actually filtering anything at all.
>
> **[1:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=88)** So those filters aren't doing anything.
>
> **[1:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=91)** What they are doing is taking up space.
>
> **[1:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=94)** So what I want to do is if I'm not filtering, I don't need to see the filters.
>
> **[1:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=99)** So what we do is we select the container that we want to hide, we go to the container control, and there is an add show hide button.
>
> **[1:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=109)** And if I click on that, we got a little icon will now appear with a little cross.
>
> **[1:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=115)** If I edit this button, I've got some formatting options and some control over what the button does.
>
> **[2:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=122)** So the button is going to show and hide this vertical container.
>
> **[2:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=126)** We can either have it as an image or we can have it as text.
>
> **[2:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=129)** If we have it as text, we can add the title that we want it to see.
>
> **[2:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=134)** So I'm sticking with the default option of image.
>
> **[2:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=138)** So when the button is shown, it is going to show one image.
>
> **[2:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=142)** When the button is hidden, it's going to show another image.
>
> **[2:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=144)** So we can customize a look and feel of that button.
>
> **[2:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=147)** So I'm going to select the defaults and click okay.
>
> **[2:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=151)** And to test this, I'm going to go into presentation mode.
>
> **[2:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=154)** So it'll mimic what it would be like if it was actually being published.
>
> **[2:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=158)** And now if I click on the cross, that entire container disappears.
>
> **[2:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=163)** And what happens is, all of the elements scale to fit the new available space.
>
> **[2:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=170)** So that means that if I wanted to filter something, I can turn the filter panel on, and I could deselect things I'm interested in, and then I could close it again, everything expands so I can see what I want to see.
>
> **[3:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=187)** Now that's really useful because it means we can have elements within our dashboard when we need it, but when we don't need it, we reclaim some of that space.
>
> **[3:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=196)** Now again, we could do that with any other thing that we want to.
>
> **[3:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=200)** So if I was to add a container at the bottom of the screen, so let's put one just to the right of my sales timeline, this container here, and I put my customer heat map in.
>
> **[3:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=215)** That might be like, I don't want to see this all the time, or many interesting when I'm actually looking at the customer level of data.
>
> **[3:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=222)** So again, I can select the container that this is in, and I can add a show hide button, and now my button is over here.
>
> **[3:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=231)** I'm just going to move this up to the top.
>
> **[3:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=234)** Going to edit the button.
>
> **[3:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=237)** I change this to text in this case.
>
> **[4:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=241)** So to do this, I'm going to do show scatter plot
>
> **[4:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=251)** and do hide scatter plot.
>
> **[4:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=256)** And it's slightly bigger so the text will be visible.
>
> **[4:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=267)** So actually I've managed to do it round the wrong way.
>
> **[4:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=269)** So what you need to make sure is that the button text matches the two.
>
> **[4:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=274)** So when the item is shown, the option is going to be to hide it.
>
> **[4:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=280)** Remember, the action is the opposite of what you're currently seeing.
>
> **[4:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=283)** So this needs to be hide the scatter plot.
>
> **[4:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=288)** And when the item is hidden, we want to be able to show the scatter plot.
>
> **[4:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=293)** So we'll flick those round.
>
> **[4:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=295)** So then if I go into my presentation mode, I can now hide my scatter plot, show my scatter plot.
>
> **[5:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=305)** So for normal usage, I have a nut, all of the charts taken up, all the space.
>
> **[5:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=312)** When I want to see the scatterplot, I can click on it and I can then see the scatterplot.
>
> **[5:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=315)** If I want to see the legends, I can click on that and then see the legends.
>
> **[5:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=319)** So this is really powerful.
>
> **[5:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=321)** It lets us see what we want to see when we need to see it, rather than see everything all at the same time.
>
> **[5:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=326)** So we don't need to cram everything into that dashboard just in case somebody needs it.
>
> **[5:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=330)** If the most people using this don't need to see that scatterplot, I can hide it for most people, it works really well.
>
> **[5:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=337)** The one thing to be aware of at the moment, both my scatterplot and my filter controls are floating elements.
>
> **[5:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=344)** And you can see that when I change to not show that container, my highest scatter plot button is now over the top of the title for that particular chart.
>
> **[5:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=356)** So whenever using collapsible containers, just be aware that this is going to enlarge or shrink the rest of the elements on the dashboard, which it's doing by design.
>
> **[6:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=366)** But you have to be aware of that with your placement of those legends and the titles and the controllers that they go with.
>
> **[6:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=375)** Collapsible containers is a really powerful design tool that we have.
>
> **[6:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/collapasable-containers-to-show-hide-elements?u=76281980&t=379)** It means that we can have all the tools available, but only when we need them.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4), select the (3), go to (1)
> **Definitions:** is a  (2), means that (2), is an  (1)
> **Code Keywords:** this, (2), let (1), case. (1)
> **Warnings:** be aware (3)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Dashboard design
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-dashboard-design-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-dashboard-design-1?u=76281980&t=0)** - [Instructor] Here's a challenge for you to practice what we've talked about when it comes to dashboard design.
>
> **[0:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-dashboard-design-1?u=76281980&t=10)** So first thing we're going to do is ensure that the color scheme for the marks and all the other content in the dashboard is consistent.
>
> **[0:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-dashboard-design-1?u=76281980&t=18)** And we're going to use the Landon logo color as inspiration.
>
> **[0:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-dashboard-design-1?u=76281980&t=22)** Next step is to create a good title for the dashboard, explaining what it should be used for.
>
> **[0:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-dashboard-design-1?u=76281980&t=28)** Then we're going to create a collapsable container and add some of the filters into it.
>
> **[0:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-dashboard-design-1?u=76281980&t=33)** We need a date filter for the timeline, a hotel name filter for the scatterplot, and a year filter from the room occupancy heat map.
>
> **[0:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-dashboard-design-1?u=76281980&t=42)** Where appropriate, make those apply to all the other sheets within that particular dashboard.
>
> **[0:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-dashboard-design-1?u=76281980&t=49)** Next, we're going to group the profit timeline and scatterplot together and put a border around them.
>
> **[0:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-dashboard-design-1?u=76281980&t=54)** And we're going to do the same with the two heat maps.
>
> **[0:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-dashboard-design-1?u=76281980&t=58)** To make it look slightly better, we're also going to add some external padding to the containers to give them a bit more rim.
>
> **[1:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-dashboard-design-1?u=76281980&t=65)** We're going to remove any chart junk that you think is appropriate to not have on your dashboard.
>
> **[1:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-dashboard-design-1?u=76281980&t=72)** So think about things such as, do we need titles on the sheets and do we need access labels and headings and so on?

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Keywords:** for. (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Dashboard design
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=0)** - [Instructor] Here's my solution to the dashboard design challenge.
>
> **[0:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=8)** So we have to ensure the color scheme is consistent and use the color from the Landon logo as inspiration.
>
> **[0:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=14)** We need a title, create a graph or container to put some elements inside or do some grouping, do some outlines, and then we'll get rid of some of the chart junks to tidy everything up a little bit.
>
> **[0:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=25)** So the first thing I'm going to do is I'm going to add the title.
>
> **[0:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=29)** So title of this dashboard is a general analysis of the Landon Hotel revenue and occupancy data.
>
> **[0:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=35)** So I'm going to give it a title that kind of references that.
>
> **[0:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=38)** So I'm going to add that just to the right hand side of my logo, which will then push the logo over to the left hand corner.
>
> **[0:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=45)** So I'm going to add some text, I'm going to put it to the right of the logo, and then in here I'm going to put my text.
>
> **[0:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=54)** So "Landon Hotel Analysis of Profits and Occupancy".
>
> **[1:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=66)** And I'm going to change the font size to be a little bit bigger.
>
> **[1:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=69)** Let's try 16. How does that look? That looks okay.
>
> **[1:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=74)** So now what I'm going to do is I want to color this to be that same color purple as the design.
>
> **[1:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=79)** So what I'm going to do is I'm going to edit again, I'm going to select the color, I'm going to click on more colors, and then I'm going to use the little dropper to pick up the color purple.
>
> **[1:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=94)** And now I can color my text by that color.
>
> **[1:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=100)** Let's make it bold and let's hit Okay.
>
> **[1:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=105)** And I'm going to move that over slightly.
>
> **[1:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=110)** Okay, that looks good. So now I've done my title, but I've also picked up that color that I can use elsewhere because the second part that we need to do is make sure we're using that same color everywhere.
>
> **[2:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=121)** So I'm going to go to all my individual sheets and the timeline, I'm going to set that to be the purple line.
>
> **[2:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=130)** That's my heat map. I'm going to go to Color, Edit Colors, and I'm going to change the color range.
>
> **[2:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=134)** Instead of using blue as the color range, I'm going to select my purple.
>
> **[2:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=141)** Now I have a whole range of purples in that particular shade of purple.
>
> **[2:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=146)** Do the same thing with my heat map, edit those colors, change that to be the purple as well.
>
> **[2:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=154)** Let's go back and check my dashboard.
>
> **[2:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=156)** Okay, that's already looking better.
>
> **[2:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=157)** The colors make everything come together really nicely.
>
> **[2:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=162)** So the scatter plot, that's using a completely different color scheme because I have different hotels represented by each one of the colors.
>
> **[2:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=170)** Now it's looking a little bit messy.
>
> **[2:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=173)** And the idea is to get rid of chart junk.
>
> **[2:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=175)** And one of the things that chart junk is are we clashing colors?
>
> **[2:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=177)** Are we using good choice of colors?
>
> **[2:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=178)** So if I go to my scatter plot, if we get rid of the hotel name, everything's the same color.
>
> **[3:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=188)** So I lose the information the color has given me.
>
> **[3:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=191)** If I color it by the hotel name, but instead of using individual colors, I could use shades of that same purple.
>
> **[3:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=202)** So I could go down to my color scheme and I could select, for example, purple, add that, do the Apply.
>
> **[3:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=209)** So now each one of these is a different shade of purple.
>
> **[3:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=212)** We can see that they've been given a different color.
>
> **[3:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=215)** When I go back, I can see that it's a little bit more consistent.
>
> **[3:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=220)** Is it ideal? I'm not entirely sure.
>
> **[3:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=223)** Now I could turn on labeling, but I think that's going to make things look a bit too busy.
>
> **[3:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=226)** So let's see if I do hotel name onto the label and then see what that looks like.
>
> **[3:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=235)** Well, because we have overlaps, Tableau's only going to show me labels where it can label without doing the overlap as well.
>
> **[4:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=243)** So yeah, I don't think adding labels is really going to do it.
>
> **[4:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=247)** So I think we might just stay with the individual colors.
>
> **[4:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=251)** Now it might be that I could abbreviate some of those to put a little icon inside.
>
> **[4:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=258)** But ultimately if I want to know about a particular city, I could always click on the legend, which will then highlight those ones within the rest of the data.
>
> **[4:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=268)** So maybe I'll stick with that.
>
> **[4:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=269)** That seems quite a good option.
>
> **[4:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=272)** Okay, now at the moment, I've got a lot of space being taken up by this Filter panel and I've got some color legends here that aren't any good.
>
> **[4:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=281)** We could get rid of those.
>
> **[4:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=282)** And I need to add my date filter for the timeline, which I think we've already got.
>
> **[4:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=286)** I think that's the timeline filter. Yeah.
>
> **[4:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=289)** And we've got the hotel name filter and a year filter.
>
> **[4:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=294)** So the hotel name filter is part of the scatter plot.
>
> **[4:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=297)** So let's select the scatter plot and add the hotel name.
>
> **[5:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=301)** Now I have a filter where I can select an individual hotel that's only affecting that one sheet, so I need to make it affect all the sheets.
>
> **[5:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=310)** So we go to Apply to Worksheets, Selected Worksheets, and I'm going to select everything on the dashboard.
>
> **[5:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=320)** So now this filter control is now applied across the board, so that's good. We'll keep that.
>
> **[5:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=326)** The legends we decided we didn't need, so I'm going to remove those.
>
> **[5:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=331)** And the other thing was the year filter from the room occupancy data, so let's add that.
>
> **[5:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=340)** Add the room occupancy year.
>
> **[5:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=345)** And this only applies to that one sheet.
>
> **[5:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=347)** And because we haven't got year data anywhere else, I can't apply it to anywhere else.
>
> **[5:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=353)** So I've got my color legend, which we can use for highlighting, that's useful.
>
> **[6:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=360)** I've got my date that applies to just the dates because that's the only part that has that.
>
> **[6:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=366)** But then the hotel name, I have all of them available.
>
> **[6:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=370)** So I'm going to change that filter type to be a multiple value dropdown, but it's the same with the occupancy date.
>
> **[6:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=378)** Make that drop down takes up a little less room.
>
> **[6:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=381)** And so that all looks good, but it's not a collapsible container, it's still taking up a bit of room.
>
> **[6:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=386)** This panel on the right hand side, so I want to make this into a collapsible container.
>
> **[6:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=392)** So we select the container, remember containers outline themselves in blue.
>
> **[6:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=397)** I'm going to go to More Options.
>
> **[6:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=399)** Add Hide Show button, and now have a little button.
>
> **[6:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=403)** I'm going to edit that and we will rename that.
>
> **[6:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=408)** So when the item is shown, we'll change that to be text.
>
> **[6:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=412)** And this is going to show, this will say Hide Filters.
>
> **[6:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=418)** When the item's hidden, we want it to Show Filters.
>
> **[7:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=422)** Okay, the background color, we'll use that same purple and make sure we have that set on both.
>
> **[7:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=438)** Okay, the font, make sure the font is white for both.
>
> **[7:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=447)** Doing okay, and now I've got my floating button.
>
> **[7:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=450)** Instead of floating, I'm actually going to attach my button to the right hand side of my title.
>
> **[7:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=458)** Now I can test this by holding down alt or option on your keyboard.
>
> **[7:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=463)** And now when it's hidden, it will then display.
>
> **[7:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=465)** When it does, everything resizes to make best use of that space.
>
> **[7:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=472)** Okay, so that's all good.
>
> **[7:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=474)** Now what I can do is get rid of some of the chart junk, make a bit more space.
>
> **[7:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=478)** So my occupancy data, I don't need that heading, so I'm going to hide the field labels for columns.
>
> **[8:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=485)** Let's make this use the entire view.
>
> **[8:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=489)** Let's do the same thing with my other heat map.
>
> **[8:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=492)** Use entire view, product category.
>
> **[8:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=496)** I know those are my product categories.
>
> **[8:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=498)** I don't need that.
>
> **[8:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=499)** Hotel name is useful because it's showing me which hotel it is.
>
> **[8:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=503)** Product quantities, we could hide that title or we could rename it if we wanted to, but for my purposes, I'm going to hide them all because this dashboard is going to be used by somebody who understands what the data is.
>
> **[8:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=517)** So I'm going to hide them all.
>
> **[8:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=520)** And now I've got a nice neat dashboard.
>
> **[8:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=523)** So the final part that I want to do is do my grouping.
>
> **[8:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=526)** So at the moment I have got my two sheets at the top, two sheets at the bottom.
>
> **[8:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=530)** I want to put a border around my top two sheets and a border around my bottom two sheets.
>
> **[8:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=534)** And I can't do that at the moment because we can only put a border around a container.
>
> **[8:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=539)** If I double click on the sheet control, it will tell me that they are all part of this one big container.
>
> **[9:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=546)** So I'm going to create two horizontal containers and then drop both of these two sheets into one and these two heat maps into the other.
>
> **[9:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=554)** So let's put horizontal container, let's put it there in the middle, or drop my timeline into the container, put my scatter block to the right of it and repeat the process again.
>
> **[9:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=571)** Put my horizontal container in there and I'll then put one heat map in and put the second heat map in.
>
> **[9:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=583)** Now they've both filled that space.
>
> **[9:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=585)** I want it to be evenly distributed.
>
> **[9:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=587)** So I'll select the container, distribute contents evenly.
>
> **[9:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=592)** I'll do the same thing with my one at the top, distribute the contents evenly.
>
> **[9:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=599)** And because these are inside another container, I can distribute the contents horizontally by making sure that I select the container, that now used up a little bit more room so that everything has now got nice enough room to breathe.
>
> **[10:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=619)** And if I check my Show Containers, Filter, opens and closes, and everything looks good.
>
> **[10:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=628)** So now I have my dashboard that's got some nice design to it.
>
> **[10:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=633)** I've got consistent colors that don't detract from the data.
>
> **[10:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=637)** We've had to make some decisions about labeling.
>
> **[10:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=639)** Do we have it on or do we have it off?
>
> **[10:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=641)** We've hidden our filters out of the view, so they're just there should we want to use them.
>
> **[10:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=645)** And we've made some of them where appropriate apply across the entire dashboard.
>
> **[10:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-design-1?u=76281980&t=650)** What's quite nice about this is the dashboard can now be filtered depending on what people are interested in and they can save that individual custom view for themselves.

> [!info]- Semantic Content
>
> **UI Navigation:** select the (5), go to (5), click on (3), dropdown (1)
> **CLI Commands:** make (13)
> **Code Keywords:** let (11), else, (1), else. (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Interactions with Dashboard Actions

> [↑ Back to Table of Contents](#table-of-contents)

#### Adding interaction with actions
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=0)** - [Instructor] To truly make dashboards really sing, we need to add interactivity, and we do that using dashboard actions.
>
> **[0:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=10)** Now, dashboard actions are pivotal because we want our viewers of our dashboard, the people that are actually using the thing that we've created, to really engage with the dashboard.
>
> **[0:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=21)** We want them to explore the data, play with the data, look for things in the data that we might have not spotted.
>
> **[0:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=28)** And dashboard actions invite the user to play with that data by giving them something they can click on, they can hover over, they can do something with.
>
> **[0:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=37)** It allows them to interact with those charts to find new insights.
>
> **[0:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=44)** Now, there are six types of dashboard action that we can apply to any of our dashboards.
>
> **[0:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=49)** There are filter actions, there are highlight actions, URL actions, go-to actions, and set and parameter actions.
>
> **[0:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=59)** So filter actions, much like they sound, will filter the data.
>
> **[1:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=65)** So by selecting either a single mark or a group of marks on one sheet is going to filter all the other sheets to only show that same underlying data.
>
> **[1:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=77)** They can be created in one single click, so they're very powerful but incredibly easy to add to a dashboard.
>
> **[1:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=84)** And unlike standard filters, they don't affect the dashboard performance because the only time the filter is invoked is when the user actually clicks on the mark.
>
> **[1:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=93)** When they don't, none of the data filtering is happening in the background, so the dashboard is nice and responsive.
>
> **[1:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=99)** Now, as for highlight actions, they work in quite a similar way to filter actions.
>
> **[1:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=106)** The interaction that the user does is almost exactly the same.
>
> **[1:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=110)** You either select one mark or a group of marks.
>
> **[1:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=113)** But instead of removing the data, what it will do is highlight the corresponding marks in other sheets.
>
> **[2:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=122)** Now, in order for that to work, you have to have the same dimension in the detail of each sheet because Tableau's going to use that particular dimension to do the highlighting, and it can't do it if that's not part of the sheet that you're using.
>
> **[2:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=138)** With the filters, it's filtering the data before it gets visualized, whereas the highlight action is going to highlight the data after it's been visualized, so it needs to be part of that sheet.
>
> **[2:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=150)** Now, URL actions are quite cool because they allow you to click on a mark to open up a web browser to your URL.
>
> **[2:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=157)** But what's really powerful is that it can actually take data from our data source and apply it to that URL that we've clicked on.
>
> **[2:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=167)** Now, that works really well as kind of part of a menu selection.
>
> **[2:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=169)** So you select a mark, the tool tip comes up, and you have a go-to URL link.
>
> **[2:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=174)** You can click on that link and it will then open up the webpage, and you can pass through data that exists within that mark as parameters through a webpage.
>
> **[3:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=184)** Now, why do that?
>
> **[3:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=187)** It's a really good way of including more data without it being part of a dashboard.
>
> **[3:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=192)** Typically, you're going to be visualizing data that's come from somewhere.
>
> **[3:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=197)** You know, some other system has created this data, and increasingly, those are going to be web applications.
>
> **[3:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=204)** So if you've got a dashboard that is showing a particular project or a country or some kind of data that's grouped that way, if you can create the URL and embed the name of the fields within that URL, you can go to that URL and import that data in and see that page open.
>
> **[3:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=227)** Less data that you have to bring in and less data you have to add to the dashboard.
>
> **[3:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=232)** Go-to actions allow navigation between the dashboards.
>
> **[3:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=237)** This is great because we don't need to cram a dashboard with every single detail.
>
> **[4:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=241)** And we can keep each dashboard itself clean and simple, which means much easier to maintain.
>
> **[4:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=250)** And this also makes use of button objects that we can have interactive icons that we can click on.
>
> **[4:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=256)** And when we click on one of those, it will take us to another dashboard somewhere.
>
> **[4:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=261)** Now, set actions allow us to take an existing set and update the values in that set based on user actions in a viz.
>
> **[4:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=270)** Ordinarily, a user doesn't have the ability to control what is inside of a set.
>
> **[4:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=275)** That's something that can only be done as part of a dashboard author when you're interacting with the editor itself.
>
> **[4:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=283)** Now, what that allows you to do is by the user clicking on a mark, they can sort the data into two groups, whether it's in the set or out of the set.
>
> **[4:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=295)** That makes it really easy to compare groups against each other because we haven't excluded the data and we can actually do some comparative analytics, which is really powerful.
>
> **[5:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=304)** It also lets us do things like proportional brushing and asymmetric drill downs.
>
> **[5:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=310)** Now, parameter actions are very similar to set actions.
>
> **[5:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=315)** It allows us to click on a mark, and that will then take the parameter as an input and allow us to change a view.
>
> **[5:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=324)** So when you select the data point, whatever data is in that mark has now become the input to a parameter, and that parameter then behaves like every other parameter does do in Tableau.
>
> **[5:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=334)** We can take those values and use those to drive some input or change.
>
> **[5:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=340)** So for example, we could have dynamic reference lines.
>
> **[5:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=343)** We could have it so that we click a chart in one part of the dashboard, that's going to populate the parameter, and that value can then be used as a dynamic reference line somewhere else.
>
> **[5:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/adding-interation-with-actions?u=76281980&t=354)** Set actions allow us to take a static dashboard where we have multiple sheets who don't know of each other's existence and suddenly turn them into living, breathing dashboards.

> [!info]- Semantic Content
>
> **Env Vars:** url (8)
> **UI Navigation:** click on (6), go to (1), select the (1)
> **Code Keywords:** pass (1), else. (1), static (1)
> **CLI Commands:** make (1), find (1)
> **Analogies:** similar to (1), for example (1)
> **Speakers:** - [instructor] (1)

#### Filter actions
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=0)** - [Instructor] Filter actions are both one of the most common use cases for actions, and also one of the easiest to create.
>
> **[0:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=9)** Now filter actions work by using one sheet as the filter for the other sheets in a dashboard.
>
> **[0:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=15)** If I select one or multiple marks of one sheet, it filters that same data for all of the other sheets.
>
> **[0:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=24)** Now, this can be incredibly useful, because it means I don't have to have filter control showing, and also performance-wise, the filter doesn't happen until I interact with the sheet.
>
> **[0:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=35)** Now, to create the filter action, there's two ways of doing it.
>
> **[0:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=39)** There's a very quick way and there's a custom way.
>
> **[0:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=41)** The customer has more controls, but obviously, it takes a little bit more work to do.
>
> **[0:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=46)** So, I can use any sheet as a filter.
>
> **[0:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=48)** So for example, if I select my profit map, I want this to be a filter.
>
> **[0:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=54)** I want it so that anything I slipped on the map will then filter to only show me that data in the other three charts.
>
> **[1:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=61)** So to turn on the quick filter, all I have to do is select the chart that I'm interested in and hover over the use as filter icon, which looks like a little funnel, click it.
>
> **[1:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=73)** And now this dashboard is filtering using that map as the control.
>
> **[1:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=79)** If I select a map, so let's pick California, the other three charts all change just to show me the data from California.
>
> **[1:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=88)** So I'm looking at California in sales in both the timeline and the sales segment, and my profit heat map is only showing me the Californian sales, but we also see it's showing that for the Western region because California is part of that Western region.
>
> **[1:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=104)** If I want to go back to see everything, I can either reselect the mark that I've highlighted or press escape to clear all of the filters.
>
> **[1:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=113)** Now, what's quite nice is I can do this using a bunch of different marks.
>
> **[1:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=117)** I don't have to do it just with one.
>
> **[1:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=119)** So I could do a click and drag and select a random selection of states, and now the dashboard is showing me whatever I've selected.
>
> **[2:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=128)** So my segment sales and timeline are showing me the sales for those selected states, and my profit heat map is doing the same thing, and note that now I have states from both the Central and the Western region, I've got two columns.
>
> **[2:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=143)** Now I can go ahead and I can do the same thing.
>
> **[2:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=145)** I could add that to the profit map by using that as a filter.
>
> **[2:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=149)** And if I select one of the columns, let's say the South, it's now only showing me the Southern states in the map, and the data is filtered to only show me the Southern states on my bottom two charts as well.
>
> **[2:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=162)** Remember what's happening here.
>
> **[2:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=165)** I'm using a mark as a filter.
>
> **[2:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=168)** Now filtering happens before the chart is drawn, so what happens is, is as soon as I select a mark, Tableau removes all the other data, except the one I've selected, from the data source, and then it produces the visualization so that's why it works across all of the sheets.
>
> **[3:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=187)** If I want to see where we sell chairs, I can click on chairs and have that as the only option, then I can see all of the chair sales and the map will only show me the chairs.
>
> **[3:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=200)** I could do exactly the same thing with both my timeline and my bar charts.
>
> **[3:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=206)** If I click on a particular date, so say December 2023, what was happening there?
>
> **[3:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=211)** So now I can see what we were selling in December 2023.
>
> **[3:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=216)** Now what's really nice is that these filters add up.
>
> **[3:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=220)** So now I'm looking at December 2023, but if I then come over and just want to look at the consumer segment for 2023, if I click on consumer, now I'm filtering on the consumer segment in 2023.
>
> **[3:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=235)** I can drill down further and further to individual items.
>
> **[3:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=239)** What this is really doing is allowing the end user, the viewer of your dashboard, to play with that data.
>
> **[4:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=247)** By selecting the marks rather than going to a dropdown, it's much more organic and allows a bit more interactivity and playfulness with your data.
>
> **[4:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=259)** Actually clicking on a mark and seeing something change is incredibly powerful.
>
> **[4:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=263)** You find yourself doing it all the time in other charts you see elsewhere in the world and you are somewhat disappointed when they don't instantly change when you're interact with them.
>
> **[4:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=272)** We're kind of trained now that if we see something, we should expect some kind of interactivity.
>
> **[4:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=278)** So that's how we do the quick filter actions, but what about if we want a little bit more control?
>
> **[4:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=282)** What about if I want the filter to only apply to two sheets rather than all of the sheets?
>
> **[4:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=286)** Well, we can do that.
>
> **[4:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=288)** If I hit escape to get back to my unfiltered view, I can go to dashboard and go to actions.
>
> **[4:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=297)** Now this lists all of the actions that are applied to that particular dashboard and I can see the four that I've added earlier on.
>
> **[5:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=306)** They tell me that they are generated, that means I didn't create them.
>
> **[5:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=309)** They were generated by me turning on that option.
>
> **[5:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=312)** So I'm going to remove all of these, and this time I'm just going to create one single filter to control several different charts.
>
> **[5:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=322)** So I'm going to go to add action.
>
> **[5:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=324)** I'll select the filter action.
>
> **[5:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=326)** In the dialogue box, this is the action that's going to happen.
>
> **[5:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=330)** So the source is what you're going to interact with.
>
> **[5:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=335)** So let's say I want somebody to be able to select a state and it filters the timeline and the heat map, but not the segment.
>
> **[5:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=345)** So my source of activity is going to be the map, so I'm going to turn off the other three charts.
>
> **[5:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=351)** So when somebody interacts with the map, I then have an option over what kind of interaction they do.
>
> **[5:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=357)** Are they going to hover over, are they going to select, or is it going to pop up as a menu when they right click on it?
>
> **[6:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=363)** For filtering, select tends to work the best.
>
> **[6:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=367)** Hovering might seem like a good idea, but as soon as you move your mouse over a mark, it's going to pop up and get all really kind of too much in your face, you don't want that.
>
> **[6:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=377)** So instead, select is probably the best action to do.
>
> **[6:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=383)** Now the target is what we want the action to be applied to.
>
> **[6:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=387)** Now in my case, I want it to apply to the heat map and the timeline, but my segment cells, I don't want to be touched at all.
>
> **[6:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=396)** So that's the target.
>
> **[6:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=396)** That's what the action is going to work on.
>
> **[6:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=400)** And if I clear the selection, if I press escape, what should happen?
>
> **[6:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=404)** Well, in that case, I want to go back to the unfiltered view, in which case that should show all the values.
>
> **[6:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=411)** Now if I click okay, my filter's been applied and we can check it out.
>
> **[6:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=416)** So now, if I select a month, nothing happens.
>
> **[6:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=418)** If I select something in the heat map, nothing happens.
>
> **[7:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=421)** But if I select a state, I can see that my two charts on the right are now changing, but my segment sales is unaffected.
>
> **[7:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=433)** Filter actions are a way of making sure that the charts that you select know of each other.
>
> **[7:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=441)** And filter actions let you delve down into the data in a really nice interactive way.
>
> **[7:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=447)** Remember, there's two ways of applying them.
>
> **[7:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/filter-actions?u=76281980&t=448)** The quick one, which applies to all of them, or the custom one, we can turn off which are the targets for our particular actions that we want to do.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4), go to (3), select the (2), dropdown (1)
> **Code Keywords:** let (4), case, (2)
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Highlight actions
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=0)** - [Instructor] Unlike filter actions that remove data from our view, highlight actions doesn't remove it, but it highlights it to show us interesting things within the data.
>
> **[0:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=14)** Now to create a highlight action, we have to add it from the dashboard menu.
>
> **[0:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=20)** Now, the process of highlighting data works because we are able to select a mark in one sheet and then highlights the corresponding charts and highlights the marks that correspond to that particular piece of data.
>
> **[0:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=37)** So let's have a look at this in action.
>
> **[0:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=39)** So what I'm going to do is I'm going to use the segment sales as a highlight action.
>
> **[0:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=46)** What I want to be able to do is select one of the three bars for either one of my categories, and I want to see that highlighted elsewhere in my dashboard.
>
> **[0:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=56)** So what I'm going to do is create the highlight action and let's see what happens with it.
>
> **[1:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=62)** So first of all, I'm going to go to the dashboard menu option.
>
> **[1:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=66)** I'm going to go to actions, and I want to create a highlight action.
>
> **[1:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=72)** So I'll select the highlight action and we get the highlight action editor come up.
>
> **[1:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=77)** The first thing we have to decide is what is the source of the action?
>
> **[1:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=81)** So when I select something in this sheet, I'm expecting the action to happen.
>
> **[1:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=88)** Well, in this case, I want the interactivity to start with the segment sale.
>
> **[1:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=91)** So that's going to be the source of the action.
>
> **[1:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=95)** And when somebody selects something from that sheet, I want it to highlight things on the other sheets as well.
>
> **[1:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=103)** So the first thing I'm going to do is turn up everything else and just look at the heat map.
>
> **[1:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=108)** Now I've got a couple of options down here.
>
> **[1:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=111)** I can either highlight using all of the fields or dates and times or selected fields.
>
> **[1:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=117)** I'm going to leave all fields checked for the moment and let's just see what happens.
>
> **[2:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=122)** So if I select the office supplies header, we can see that nothing has happened.
>
> **[2:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=131)** Okay, that's interesting, why has that done that?
>
> **[2:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=134)** If I select anything on here, nothing appears to be happening.
>
> **[2:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=141)** Okay, let's just go back and check what's going on.
>
> **[2:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=145)** So we go to actions, edit my action I've just created.
>
> **[2:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=151)** I've told it to filter all the fields, and the ones it could filter on was category and segment.
>
> **[2:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=157)** So what's happening here?
>
> **[2:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=160)** Well, let's see, let's have a look at this profit heat map visualization.
>
> **[2:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=164)** Now this is showing the subcategory and the region, and there's the problem.
>
> **[2:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=171)** The problem is, is that the dimension that I'm trying to highlight isn't part of this view.
>
> **[2:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=177)** So when we select it, because we haven't incorporated it into the view, Tableau can't use it as a highlighter.
>
> **[3:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=184)** Unlike filter actions that filter the data, highlight actions highlight something within the visualization.
>
> **[3:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=193)** So neither segment nor category is part of that current view.
>
> **[3:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=198)** So if I add the category as a detail, that now means each one of these marks not only has the data in order to create the visualization, it's also got the underlying category as part of it.
>
> **[3:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=211)** I go back to my dashboard, and now this time, if I select office supplies, it's now just highlighting those rows that match those particular categories I selected.
>
> **[3:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=223)** If I set one of the segments, again, doesn't work because segment isn't part of my data.
>
> **[3:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=232)** And if I added segment, let's see what happens.
>
> **[3:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=236)** If I add segment as detail, that completely destroys my visualization because a single product could be sold by different customers who are part of different segments, and I don't want that.
>
> **[4:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=249)** So we have to ensure that when we use highlight actions, that dimension is actually present in the target sheet.
>
> **[4:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=257)** But by adding it, it doesn't change the visualization.
>
> **[4:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=263)** So if I go back, I can only filter and highlight based on the column and not on the right.
>
> **[4:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=272)** Similarly, I could do the same thing by selecting one of the states.
>
> **[4:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=276)** If I select a state, I could get it.
>
> **[4:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=278)** So it highlights the states, but I have to add the state to one of my views, and that's not really going to work.
>
> **[4:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=285)** So it's important to understand that the dimension that we want to highlight needs to be in both of the charts.
>
> **[4:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=291)** Now, what I could do with the map is use the region because each state belongs to only one region.
>
> **[4:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=298)** So if I add region to the detail, it's not going to change that map view.
>
> **[5:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=302)** So if I go back to my map, and if I add region to the detail, now when I hover over, each state's telling me whether it's the west, central or eastern region, I can go back to my dashboard and now I can go to my highlights.
>
> **[5:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=322)** So I can do action, and I'm going to add a second action for the highlights.
>
> **[5:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=327)** So I've got one that works on my segment sales, and then one that will work on the map.
>
> **[5:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=332)** So map and my heat map have both got region as a visible option.
>
> **[5:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=340)** So now let's have it so that the heat map and the map will highlight each other.
>
> **[5:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=345)** And this time I'm going to pick the selected field.
>
> **[5:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=347)** I only want it to work on region.
>
> **[5:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=351)** If I'd selected, for example, category or one of the other ones, that's not going to work because category isn't part of both of views.
>
> **[5:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=357)** Whatever you want to highlight has got to be present in both.
>
> **[6:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=361)** So now I can do okay, and then if I select Texas, Texas is a central state, it's now highlighting the central column.
>
> **[6:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=369)** If I select the eastern, that's now showing me just those states.
>
> **[6:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=375)** Now highlighting is good because it doesn't eliminate all the other data.
>
> **[6:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=378)** The data's still there and still partly visible.
>
> **[6:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/highlight-actions?u=76281980&t=380)** So I can compare the data as opposed to filter it all out.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), case, (1)
> **UI Navigation:** go to (4), select the (3)
> **Cross-References:** go back to (3)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### URL actions
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=0)** - [Instructor] URL actions allow us to either open a webpage or embed a webpage within our visualization.
>
> **[0:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=8)** But what's really powerful is that we can take the underlying data from a mark and pass that as a parameter to that URL to open a very specific webpage based on the underlying data.
>
> **[0:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=21)** So why might that be useful?
>
> **[0:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=23)** Well, increasingly, more and more of our data is coming from web applications and if you can have a URL that has an ID that opens up the URL page for a particular product or project that you can pass that parameter to, and that data is in your visualization, you can get the webpage to open the specific page based on your data.
>
> **[0:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=49)** This can be incredibly useful because it means you have access to the data and the information in the webpage that might not be in your underlying data, and you don't have to have it as part of your dashboard.
>
> **[1:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=61)** So to see an example of this, what I'm going to do is I'm going to create a URL action that's going to work on our map.
>
> **[1:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=68)** When we select a state, it's going to open the Wikipedia page for that particular state.
>
> **[1:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=74)** Now, for a URL action, we can either have it so it opens up a browser or we can actually have it so it opens up the webpage within the dashboard itself.
>
> **[1:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=83)** So I'm going to do the second option.
>
> **[1:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=85)** But to do that, I need to make a bit of space within my dashboard.
>
> **[1:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=88)** So one of these charts is going to have to go and, unfortunately, it's going to be the sales timeline.
>
> **[1:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=93)** So I'm going to get rid of that and I'm going to add an empty webpage in the same location.
>
> **[1:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=101)** I'm not going to put a URL in.
>
> **[1:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=102)** I'm going to leave that blank.
>
> **[1:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=103)** And this is just going to be a placeholder.
>
> **[1:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=105)** So when I do my action, this is where my webpage is going to open up.
>
> **[1:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=110)** So the next thing to do is to tell Tableau what action and how to do it.
>
> **[1:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=118)** So we go up to our top menu, we go to Dashboard, go to Actions, Add Action, and this time a URL action.
>
> **[2:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=129)** So now I need to say which sheet do we perform the action on?
>
> **[2:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=135)** In this case, it's going to be the Profit Map.
>
> **[2:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=138)** And what action do I want?
>
> **[2:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=141)** I don't want it so that I select the state and it just pops open because that's a little bit too interactive.
>
> **[2:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=147)** I want it to be a conscious thing.
>
> **[2:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=150)** So instead I'm going to use the Menu option and we'll see what happens and how we interact with that in a moment.
>
> **[2:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=158)** The URL target, so this is where we decide when I do the action, where is the result of that action going to go?
>
> **[2:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=165)** So should we open up a new tab if it doesn't exist?
>
> **[2:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=168)** Should we use the browser tab?
>
> **[2:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=169)** Or should we use the webpage object?
>
> **[2:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=171)** Well, in my case, I'm going to use webpage object, which is what I dragged into a moment ago.
>
> **[2:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=176)** We then need to give it the URL that we're going to use.
>
> **[3:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=180)** So in this case, I'm going to use the Wikipedia URL.
>
> **[3:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=185)** Now, that would take us to the main page of Wikipedia, but what I need to do is tell it to go to a specific page.
>
> **[3:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=193)** The specific page is going to be governed by the state that I click on.
>
> **[3:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=196)** So if I go to Insert, here are all of the values that I could pass through, and the one I'm going to use is Country/Region.
>
> **[3:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=206)** Now, when I select a particular country, it's going to take me to the Wiki page for that country.
>
> **[3:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=212)** So if I do OK, click OK.
>
> **[3:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=215)** Now, if I select anywhere in this map, we get this hyperlink one up here.
>
> **[3:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=219)** And if I click on that, it opens up the Wikipedia page.
>
> **[3:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=224)** Now, whichever state I pick, it's going to open up that same one.
>
> **[3:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=229)** So what I need to do is tell it to use the state to open up the specific state page.
>
> **[3:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=235)** So if I go back to my action, and I'm going to edit this, what we're going to do is we're going to change from, instead of being country and region, we'll get rid of that, and instead we'll select the state or province.
>
> **[4:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=253)** And what I also want to do is I want to have the name also be go to the state 'cause this is what's going to appear in my tooltip.
>
> **[4:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=264)** So the name is going to be go to and then I can then insert the state name as well.
>
> **[4:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=273)** All looks good. Let's click OK.
>
> **[4:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=275)** Click OK.
>
> **[4:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=276)** So now if I hover over a state and select it, we now have a nice link that says go to the particular state that we selected and the page opens up for us.
>
> **[4:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=290)** Now, this could be any webpage that you have access to and anywhere that you can pass the parameter to in the form of the URL.
>
> **[5:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/url-actions?u=76281980&t=300)** As long as you can do that, you can build a URL and insert the data into that and then open any webpage that you like.

> [!info]- Semantic Content
>
> **Env Vars:** url (13)
> **UI Navigation:** go to (7), open the (2), select the (2), click on (2)
> **Code Keywords:** pass (4), case, (3), this, (2), from, (1), let (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### The Go to Sheet action
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=0)** - [Lecturer] Go to Sheet Actions are pretty much what they sound like.
>
> **[0:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=3)** They're an action that aim to navigate between different sheets within a workbook.
>
> **[0:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=8)** Now they work in exactly the same way as other actions that you have a source that you apply the action to and then a target which the action is performed against.
>
> **[0:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=18)** So in the case of Go to actions, we need to have two sheets.
>
> **[0:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=22)** One that we want to start from and one we want to move to.
>
> **[0:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=25)** So in my example here, I have two dashboards.
>
> **[0:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=28)** I have a map and a timeline, and then I have my heatmap and my scatterplot.
>
> **[0:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=34)** And I want to have it so that I can navigate between the two.
>
> **[0:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=38)** So my action is going to be on either one of my charts, is then going to trigger the dashboard that is the target of the action to then appear.
>
> **[0:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=50)** So if I go up to Dashboard and dashboard Actions, the first thing to do is select Add Action and I'm going to select the Go to Sheet.
>
> **[1:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=60)** So I now have my action come up and it's going to ask me, well, which source sheet do you want it to work on?
>
> **[1:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=68)** Now, I've selected the map and timeline because that's the dashboard I'm currently looking at.
>
> **[1:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=73)** But we could change that to any of the other ones if we wanted to.
>
> **[1:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=77)** And I can pick which one of my two charts I want it to work on.
>
> **[1:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=81)** So I'm going to select, say the profit map.
>
> **[1:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=84)** Okay, so if I interact with the profit map, I want this action to trigger.
>
> **[1:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=88)** And I have to decide what action I need to perform.
>
> **[1:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=91)** Do I Hover, do I select or do I do it as a menu?
>
> **[1:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=96)** Well, hovering is going to be a little bit too twitchy 'cause anytime I move over that, it's going to flip between the other sheet and I don't want that.
>
> **[1:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=104)** Select doesn't seem quite right either 'cause I might want to use that for maybe a highlight action.
>
> **[1:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=109)** So I'm going to use the Menu option so that when I hover over an item and get the tool tip up, it'll appear at the bottom of that tool tip.
>
> **[1:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=117)** So I'm going to change the name to Go to Heatmap.
>
> **[2:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=123)** And then my target sheet is going to be my Heatmap & Scatterplot dashboard.
>
> **[2:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=131)** So my action source is going to be my Profit Map.
>
> **[2:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=134)** So if I interact my Profit Map, the Menu option will come up.
>
> **[2:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=138)** That will say Go to the Heatmap.
>
> **[2:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=140)** And then when I do that, my target for this action is going to be my heatmap and scatterplot.
>
> **[2:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=145)** So let's do, OK.
>
> **[2:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=147)** So now if I hover over one of my states and select it, I've now got a Go to Heatmap action and if I click on that, we flip over to the other dashboard.
>
> **[2:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=160)** So I haven't got any way of getting back so let's do that in reverse.
>
> **[2:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=163)** So now I'm going to go to Dashboard and my Actions and I will do my Go to Sheet again.
>
> **[2:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=173)** Now this time I'm on the scatterplot, so I want my heatmap and my scatterplot selected.
>
> **[2:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=179)** So I'll do... I'll leave both of them on actually this time.
>
> **[3:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=183)** I'll do the menu again and this name will be Go to Map & Timeline and make sure I select the correct target sheet.
>
> **[3:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=193)** So I want the Map & Timeline dashboard. Do OK.
>
> **[3:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=199)** And if I select one of my things here, I get my Go to Map & Timeline.
>
> **[3:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=206)** And if I select here, I can go to the heatmap and so on.
>
> **[3:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=209)** So I've now got this way that when I interact with a mark, it gives me the opportunity to navigate between the two.
>
> **[3:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=218)** So the Go to Sheet action is a way of navigating between different sheets within your workbook.
>
> **[3:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=225)** And typically, why would you want to use this?
>
> **[3:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=227)** Well, if you've got a workbook that you've published to the server that might have say, four dashboards in it, there might be some kind of logical structure.
>
> **[3:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=234)** You want people to move in between the dashboards.
>
> **[3:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=238)** Now you might use a navigation button, we talk about that in the navigation section, but that's going to press a button on the dashboard and maybe we haven't got room for that or we don't want that to appear unless somebody's actually interacting with our data.
>
> **[4:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=250)** So as I'm exploring the map and interacting with the map, I'm going to see this prompt tell me to Go to the Heatmap.
>
> **[4:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=257)** That then might take me to somewhere else where I might find more insight in what I'm looking at.
>
> **[4:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=262)** If I'm then interacting with my data in my heatmap or in my scatterplot, I might want to go back to the map so I can flick between the two without having to go through any other menu options or click anywhere else.
>
> **[4:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=272)** I'm staying within my actual dashboard itself.
>
> **[4:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/goto-sheet?u=76281980&t=277)** So the Go to Sheet action is quite a useful navigational tool that still has that same action of interacting with the data in the chart rather than the user interface surrounding it.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (14), select the (2), click on (1)
> **Code Keywords:** let (2), else. (1), interface (1)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [lecturer] (1)

#### Proportional brushing using set actions
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=0)** - [Instructor] Set actions allow us to select data from one of our charts within our dashboard and apply those to create a set that we can then use in the remaining sheets.
>
> **[0:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=15)** Now, one of the things that we typically can use this for is what's called proportional brushing.
>
> **[0:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=21)** So to explain that, let's take a look at this dashboard.
>
> **[0:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=24)** So I've got two sheets.
>
> **[0:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=25)** On my left-hand side, I've got my regions with my sales.
>
> **[0:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=30)** On the right-hand side, I've got sales for each one of my categories.
>
> **[0:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=36)** Now, what I want to know is, what proportion of those category sales are due to each one of my individual regions.
>
> **[0:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=45)** Now, filtering is not really what I want.
>
> **[0:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=49)** If I turned on the quick filtering, which we looked at in the filter action section, and then select for example the central region, what that does is remove everything other than the central region data because the filtering happens before the view is created.
>
> **[1:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=65)** What I've now lost is the context.
>
> **[1:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=69)** I want to know what proportion is due to the central region, not just what is due to the central region, so slightly different question that I'm trying to answer.
>
> **[1:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=79)** Instead what I want to be able to do is select one of my regions and for it to highlight in the bars of my categories which of those cells is due to the central region and which is due to the other, and for that we can use the sets.
>
> **[1:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=93)** We can use a set action to say that when I select one of my regions on the left-hand side, everything that is in that region is going to be in the set.
>
> **[1:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=102)** Everything else is going to be outside of the set, and I can use that to color my bar charts on the right-hand side.
>
> **[1:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=108)** Now, in order to create the set action, I first will need to create the set.
>
> **[1:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=112)** So I'm going to untick my filter, I'm going to go to my sheet, and this time I'm going to create my set.
>
> **[1:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=119)** Now, my set is based on the region, so I'm going to select region in my data pane, going to right-click, and I'm going to create a set.
>
> **[2:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=131)** And I'm just going to set the central region for the moment just to create a set in here, so nothing changes yet because I've just created that field in my data.
>
> **[2:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=139)** I'm not using it for anything.
>
> **[2:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=141)** If I go to my bar charts, and if I now have put region set onto the color, you can now see that I have in and out for my set.
>
> **[2:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=151)** So the central regions are in my set, the other three regions are in my outset, so I can then see which is which.
>
> **[2:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=160)** If I wanted to reorder them, I could do so.
>
> **[2:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=161)** I could put my ins at the first part of my bars so I can then see which ones are which.
>
> **[2:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=170)** Now, the only problem is with this is that because I have very different ranges of sales for my different products, it's very difficult to see what's happening with the smaller ones, like the fastest envelopes and labels.
>
> **[3:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=181)** So to make this slightly easier to see, I'm going to convert this into a 100% stacked bar chart, and then I can see what percentage is due to that particular region.
>
> **[3:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=191)** So I'm going to go to my sales mark on my column, do an add table calculation, and we will do percent of total, going across.
>
> **[3:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=204)** And now, I've got my percentages.
>
> **[3:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=207)** So I can see what percentage of my sales for each of my particular subcategories is due to that region.
>
> **[3:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=213)** So if I go back to my dashboard, I can now see I've got my regions over here.
>
> **[3:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=218)** Now, this is currently set to just using the central region in my set.
>
> **[3:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=224)** What I need to do now is convert it into an action so that when I select something from my chart on the left, it's going to interact with my chart on the right.
>
> **[3:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=231)** Remember these two charts don't know about each other.
>
> **[3:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=233)** They're just elements inside the dashboard.
>
> **[3:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=236)** So let's go to the dashboard icon at the top, go to actions, so I'm going to create a change set values.
>
> **[4:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=248)** So my set action is going to work on my sales map, and I'm going to use the select action.
>
> **[4:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=256)** So anytime I select anything of my four regions, that's going to be the trigger for the action to fire.
>
> **[4:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=263)** And the target set, well, we've only got one, so that's going to be my region set.
>
> **[4:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=267)** So anytime I interact with my regions, it's going to populate the values of that region within the set, and that set is used to color my other bars.
>
> **[4:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=278)** Now, we need to decide how the action is going to happen.
>
> **[4:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=281)** So what I want to do is run any action will assign value to the set, add values, or remove values, so what do these three options mean?
>
> **[4:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=291)** Well, assign values means that it would just assign one of the single values to my set.
>
> **[4:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=297)** So if I select central, the value of the set is going to be central.
>
> **[5:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=302)** If I do add values, that's going to be an cumulative effect.
>
> **[5:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=306)** So if I select central, it's going to populate central.
>
> **[5:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=308)** But then if I select east as well, it's going to add east to it as well.
>
> **[5:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=313)** Now, in my situation, I just want it to be one single region at a time, so I'm going to select assigned values.
>
> **[5:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=320)** And I want to clear the selection, what do I want to happen?
>
> **[5:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=323)** I can either keep the set values so it's set until I click another region, I can add all the values back, or I could remove all the values.
>
> **[5:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=331)** So let's keep add all values to set for the moment and see what happens.
>
> **[5:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=335)** We can always change it later, so let's do, okay.
>
> **[5:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=338)** So now, if I select east, the bars will change, so I'm now seeing the eastern region.
>
> **[5:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=345)** And if I change any of these other ones, I can see how it's changed into all of those.
>
> **[5:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=351)** And then when I untick it, I can see that 100% is due to all of my regions.
>
> **[5:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=357)** So actually, if I go back to my dashboard action and go to edit, I can change this around and just check remove all values from the set.
>
> **[6:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=368)** So if I select one, then get rid of it, it goes gray.
>
> **[6:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=372)** I think that seems better.
>
> **[6:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=373)** I think that works better to have it gray rather than blue.
>
> **[6:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=378)** So now, when I select any of my regions, I can see the proportion of the sale due to that region.
>
> **[6:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=387)** This can many cases be a lot better than filtering that data out because by filtering I'd use the context, but what I have here is a nice way of seeing the individual region's performance against all the others.
>
> **[6:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/proportional-brushing-using-set-actions?u=76281980&t=400)** And that's one of the things you can do with set actions.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (6), right-click (1)
> **Code Keywords:** let (4)
> **Cross-References:** go back to (2)
> **Definitions:** means that (1), is a  (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Asymmetric drill down using set actions
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=0)** - [Instructor] Another use of set actions is to do asymmetric drill down.
>
> **[0:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=7)** Now, to explain what that is, let's create a hierarchy in our data that we might have seen in other cases.
>
> **[0:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=14)** So, I've got region and my state and state is a property of region.
>
> **[0:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=19)** So, if I combine these two together, so I drop down on top of region, I now have my drillable hierarchy.
>
> **[0:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=27)** So, if I add that to my view and I click on the plus, it'll then expand out to show the states that are part of each one of those regions.
>
> **[0:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=36)** So, if I was to put my sales data on, I can then expand this out to see all of those.
>
> **[0:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=42)** But the problem is, is that if I'm an interested in looking at, say, the Southern states, I don't really want to see the other states open up.
>
> **[0:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=50)** And in this particular case, because there are quite a few states, I've got these scroll bars everywhere.
>
> **[0:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=56)** That's not what I want.
>
> **[0:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=57)** What I want better to do is select a region and only see those ones.
>
> **[1:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=61)** So, that's a kind of drill down that we can build by using a set actions.
>
> **[1:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=66)** So, let's start over.
>
> **[1:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=68)** So, I'm going to get rid of my data there.
>
> **[1:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=70)** I'm going to right-click and remove that hierarchy and we'll start over.
>
> **[1:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=76)** So, the first thing I need is a set 'cause we're going to add and remove items into the set, and then do a calculation based off that particular value.
>
> **[1:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=85)** So, first thing I'm going to do is I'm going to create a set for my region.
>
> **[1:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=90)** So, we'll do Create/Set.
>
> **[1:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=93)** And I'm going to leave those empty for the moment because I don't need to put anything in there.
>
> **[1:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=97)** I just need to create the set in the first place.
>
> **[1:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=100)** So, now I'm going to put region onto my view.
>
> **[1:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=105)** Let's put my sales on there as well.
>
> **[1:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=108)** So now, I need to create a calculated field to either display the subcategories or display nothing at all.
>
> **[1:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=117)** So, we'll go to Create Calculated Field, and this is going to be called my States.
>
> **[2:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=126)** So, it's going to be an IF statement that if the region set has been set, so if there is a value inside of region set, then it should display the values of the states.
>
> **[2:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=143)** Otherwise, just display a space.
>
> **[2:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=150)** So, if I create that and then I add my states to my rows, we can see that I have this blank, okay?
>
> **[2:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=156)** Because there's nothing there.
>
> **[2:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=157)** Because the set hasn't yet been created.
>
> **[2:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=160)** It's been created, but it hasn't been populated because we haven't done our action yet.
>
> **[2:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=165)** So, I'll pop into my dashboard and I add my sales data in and we'll make this fit the entire view.
>
> **[2:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=173)** So, I've got my region with my empty states, 'cause I'm looking at all of my states.
>
> **[2:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=178)** Now, I could if I wanted to actually put the word "all" in there.
>
> **[3:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=180)** So, maybe let's go and do that to make it a little bit different.
>
> **[3:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=183)** So, let's go back to my states, edit states, and there we go.
>
> **[3:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=192)** So, it's looking at all of the states for that particular region.
>
> **[3:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=196)** So now, I'm going to need to create my action.
>
> **[3:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=199)** So, I'm going to go to dashboard and go to dashboard Actions, and we'll go to the Change Set Values.
>
> **[3:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=209)** And I'm just going to call this drill down.
>
> **[3:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=212)** So, I've only got one sheet in my dashboard at the moment.
>
> **[3:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=213)** So, that's the only one that I can select, that the action is going to be on the select.
>
> **[3:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=217)** So, when I click on one of the region headers, it's going to expand.
>
> **[3:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=222)** Target set, I've only got one set, so it has to be the region.
>
> **[3:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=226)** So, when I run the action, it's going to assign the values to the set.
>
> **[3:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=230)** And when I clear the selection, so when I click somewhere else, it's going to remove all the values from the set.
>
> **[3:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=235)** It's going to go back to the view that we have at the moment.
>
> **[3:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=239)** So, I can click on OK. Click OK.
>
> **[4:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=241)** And now if I select Central, we can see that it now expands out to show all of my central states and their values.
>
> **[4:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=251)** And I've got my East, South, and West down here at the bottom.
>
> **[4:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=253)** If I click on the South, that then expands out just to show those ones.
>
> **[4:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=258)** And if I click South again to deselect it, we go back to my top level view.
>
> **[4:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=265)** So, set actions allow you to draw up and down however you want to do it.
>
> **[4:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=269)** You could do a second layer of set actions if you wanted to.
>
> **[4:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=273)** So, we could repeat the process, but this time do it for states.
>
> **[4:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=276)** So, if I then clicked an individual state, I could go down to the next level in my data, which could be city or maybe postcode.
>
> **[4:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=283)** So, wherever you've got drillable data.
>
> **[4:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=287)** So, wherever you've got your data in some kind of a natural hierarchy where you could group objects and things together in that kind of hierarchical structure like we've shown here.
>
> **[4:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=298)** Another option in this data could be category and subcategory.
>
> **[5:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=302)** You can create these sets to allow you to drill up or drill down.
>
> **[5:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=305)** This is just using a single drill down, but we could do several nested ones if we wanted to.
>
> **[5:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/asymetric-drill-down-using-set-actions?u=76281980&t=311)** And that's the power of set actions.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4), go to (4), right-click (1)
> **Code Keywords:** let (5), case, (1), else, (1)
> **Cross-References:** go back to (3)
> **Definitions:** is a  (3)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### Highlighting with parameter actions
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=0)** - [Instructor] Parameters are a way of taking user input and driving some action within your dashboard.
>
> **[0:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=10)** Now, parameters have been around for a while and parameter actions work in a very similar way in that it can take the user input, but that can be the form of an interaction with the marks actually within the sheet.
>
> **[0:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=23)** Often you'll have a parameter much like a filter control with a dropdown or a slider, but the parameter action allows you to interact with the visualizations on the screen and then see something change.
>
> **[0:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=35)** So let's look at an example using a parameter to highlight some marks.
>
> **[0:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=41)** So I'm going to use the scatter plot that we have on the left hand side.
>
> **[0:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=45)** What I want to be able to do is select one of the marks and then highlight some of the other marks based on certain criteria.
>
> **[0:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=52)** So let's, for example, have it so that if I select a particular mark, I want to highlight all of the marks that are higher in value in terms of say sales, okay?
>
> **[1:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=64)** So whatever mark I pick, I want to highlight everything that's of a higher value for sales.
>
> **[1:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=71)** So there's a couple of steps we have to do.
>
> **[1:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=72)** First, we need to create a parameter to hold that information.
>
> **[1:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=76)** So I'm going to go to my data pane.
>
> **[1:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=78)** I'm going to do Create Parameter, and I'm just going to call this Highlight Parameter.
>
> **[1:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=85)** We'll keep it as a float and we'll keep the current value.
>
> **[1:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=89)** I'll set that to zero and I'm going to allow all the available values.
>
> **[1:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=96)** Okay, so my parameter is now selected.
>
> **[1:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=99)** Then going to create a calculation that's actually going to be used for the highlighting itself.
>
> **[1:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=107)** So let's call this Highlight Color, and what I'm going to do is I'm going to create a calculation that says if the sum of sales is greater than or equal to the value of my parameter,
>
> **[2:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=129)** and that's either going to be true or it's going to be false, so if I place that onto my color, everything at the moment is true 'cause everything's greater than zero, so everything is one single color.
>
> **[2:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=143)** So go back to my dashboards.
>
> **[2:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=146)** So now everything has changed.
>
> **[2:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=149)** So now if I add my actions, so I'm going to, in this case, Dashboard, Actions, and I'll select my change parameter.
>
> **[2:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=159)** We now have the parameter dial box come up.
>
> **[2:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=162)** So I'm just going to call this Highlight, and this is going to work on the customer scatterplot.
>
> **[2:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=168)** So that's the source of my action.
>
> **[2:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=170)** That's the sheet we're going to interact with.
>
> **[2:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=173)** The type of action is going to be select.
>
> **[2:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=176)** So when I select something, I want to trigger the action itself.
>
> **[3:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=181)** I'm then going to select the parameter, and we've only got the one, so it has to be this one.
>
> **[3:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=187)** So use the highlight parameter, and then the selection.
>
> **[3:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=191)** So when I unselect it, I will keep the selected value.
>
> **[3:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=198)** Then we have the source.
>
> **[3:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=199)** So what the source field is, is that when we select a mark, what value do we want to populate the parameter with?
>
> **[3:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=211)** Now, in this case, I want it to populate the sales value 'cause we're comparing the sales value of the parameter with the sales value of all the other marks.
>
> **[3:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=219)** So I'm going to select sum of sales.
>
> **[3:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=223)** Going to select OK, so now if I select a mark, everything that is greater or equal to value to that particular mark, so that mark's sales value is 4,737.
>
> **[3:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=236)** So all of the other marks that are equal or greater in value are now all colored for me.
>
> **[4:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=243)** Now, because with the parameter I set it to keep all the values when I unselect, they all stay highlighted.
>
> **[4:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=251)** If I wanted them to clear, then I could change that value to reset itself, but now I can select any value and it will only highlight the ones that are greater than.
>
> **[4:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=262)** Now, I could do that using any of the data within that mark.
>
> **[4:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=266)** So I could do the same thing by looking at quantity.
>
> **[4:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=269)** Only show me things of equal or higher or lower quantity, same as the profit.
>
> **[4:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=275)** So the parameter action allows me to interact with the marks, take whatever value is contained within that mark itself, so the underlying data, and then populate that into the parameter.
>
> **[4:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=289)** The other method of using parameters that either take text entry or a slider, I either have to set the parameter values or allow somebody to type something in.
>
> **[4:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=299)** With the actions, they allow us to interact with the data itself.
>
> **[5:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=304)** I'm clicking on marks.
>
> **[5:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=305)** I'm not typing anything in.
>
> **[5:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=307)** I'm setting the flow of my analysis, and that's what's really nice about all of the actions that we can add to sheets and dashboards.
>
> **[5:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=315)** It doesn't take us away from our data by having to interact with menus or drilldowns or dropdowns.
>
> **[5:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/hightlighting-with-parameter-actions?u=76281980&t=321)** I can just click on the mark and see things changing right in front of my eyes.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case, (2)
> **UI Navigation:** dropdown (1), go to (1), select the (1), click on (1)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Dashboard actions
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-dashboard-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-dashboard-actions?u=76281980&t=0)** (light music)
>
> **[0:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-dashboard-actions?u=76281980&t=5)** - [Instructor] Here's an exercise to practice what we've learned about dashboard actions.
>
> **[0:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-dashboard-actions?u=76281980&t=10)** First thing I want you to do is to add a highlight action to the dashboard to highlight the hotel name across all the appropriate sheets where the hotel name is actually visible.
>
> **[0:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-dashboard-actions?u=76281980&t=22)** Next, we're going to create a filter action on the profit timeline.
>
> **[0:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-dashboard-actions?u=76281980&t=27)** That's going to show the profit for the given date for the scatter plot.
>
> **[0:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-dashboard-actions?u=76281980&t=31)** Then finally, we're going to create a set action, so we can do a drill down on the product order category to show the individual products.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (light music) (1)

#### Solution: Dashboard actions
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=0)** - [Instructor] Here's my solution to the dashboard actions.
>
> **[0:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=9)** So the first thing we are asked to do is to create a highlight action for the hotel name that will highlight the hotel name across all the appropriate sheets.
>
> **[0:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=18)** So unlike filters, highlighting only works if you actually have the same field available across different charts from different sheets.
>
> **[0:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=29)** Now in my case, we're looking at the hotel name.
>
> **[0:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=32)** So I can see that the hotel name is visible in the occupancy date and also in the product category and in the scatterplot as well.
>
> **[0:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=42)** So I can create the action to highlight those because it makes sense, 'cause I'm already looking at the hotel name in there.
>
> **[0:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=50)** For the product orders and the timeline, the hotel name isn't actually visible, so there's nothing to highlight in those particular visualizations, the reason why I wanted to filter it, but that's not what we've been asked to do.
>
> **[1:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=62)** We're looking to highlight the hotels amongst our dashboard.
>
> **[1:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=67)** So let's go up to the Dashboard menu item and select Actions.
>
> **[1:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=74)** So I'm going to click Add Action, and this is going to be a highlight action.
>
> **[1:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=81)** So I'll stick with the name Highlight1. That's fine.
>
> **[1:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=84)** So the source sheets for this.
>
> **[1:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=86)** So I want to be able to click on the heatmap and the scatterplot 'cause those are the sheets actually have the hotel name on.
>
> **[1:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=97)** So I'm going to unselect the profit timeline and my product orders.
>
> **[1:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=102)** So those three sheets, the ones that are left, are the ones that actually have the hotel name in them.
>
> **[1:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=107)** The action I'll keep as select, and the ones that are going to be affected by my action are going to be my target sheets.
>
> **[1:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=115)** So again, we'll take off the timeline and the bar chart.
>
> **[2:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=121)** So now I've just got my heatmaps and my scatterplots.
>
> **[2:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=124)** And what is it I'm going to be using as my highlighter, so I'm going to do selected fields and I'm select the hotel name 'cause it's only the hotel name that I want to use for my highlighting.
>
> **[2:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=137)** Click OK, and let's see if it works.
>
> **[2:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=139)** If I select Hong Kong, so that's highlighted Hong Kong in the product category, and it's also highlighted to Hong Kong in my scatterplot.
>
> **[2:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=149)** That's good.
>
> **[2:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=151)** Let's check Munich from my product category.
>
> **[2:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=154)** And then, yep, that appears to highlight both of those.
>
> **[2:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=156)** That's good.
>
> **[2:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=158)** And then if I go to my scatterplot, let's select Tokyo, and that highlights those.
>
> **[2:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=164)** And if I select some different ones, if I select two, it highlights all of those selected in there.
>
> **[2:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=171)** Excellent, so my highlight is working really nicely.
>
> **[2:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=173)** That's good.
>
> **[2:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=175)** Next step, create the filter action on the profit timeline that will show the profit for the given date for the scatterplot.
>
> **[3:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=181)** So again, let's go to, my actions.
>
> **[3:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=186)** We'll add a filter action this time.
>
> **[3:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=190)** So this is going to affect the product timeline, and it's going to work on the scatterplot.
>
> **[3:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=199)** So we'll unselect everything else so it's just the profit timeline.
>
> **[3:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=204)** Again, that'll be the select action, and it's going to work on my scatterplot.
>
> **[3:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=209)** So let's remove everything else, and then we just click OK.
>
> **[3:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=213)** OK, OK, and now if I select one particular date, we can see that only my scatterplot is changing.
>
> **[3:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=222)** So I can select an individual day, month.
>
> **[3:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=226)** I can set several, and I can see my data accordingly.
>
> **[3:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=231)** And then if I then select one of my marks in the scatterplot, my highlighter still works.
>
> **[3:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=236)** So now I have an action filter for filtering and an action for highlighting.
>
> **[4:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=243)** That's good.
>
> **[4:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=245)** Okay, and the next one is create the set action to create the drill down on my product orders.
>
> **[4:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=249)** Okay, so we need to go to our sheet to do that, to set up the actual set itself to enable us to do that drill down.
>
> **[4:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=257)** So the first thing we're going to do is create our product category set.
>
> **[4:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=262)** So product category.
>
> **[4:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=264)** So let's create our set for that.
>
> **[4:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=266)** So create our set. We'll leave that blank.
>
> **[4:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=271)** So I've got that created.
>
> **[4:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=273)** Now I'm going to create calculated field, which is going to say this is going to be my drill down.
>
> **[4:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=284)** So now if the product category set has a value, then we need to show the particular product name, otherwise, to show a blank space.
>
> **[5:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=302)** And then do END.
>
> **[5:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=306)** So let's add this to my rows.
>
> **[5:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=308)** So now I have my blank in there.
>
> **[5:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=311)** Let's go to, okay, go back to my dashboard.
>
> **[5:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=315)** So now I can see I've got my blank space in there.
>
> **[5:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=321)** So we'll go back to, now I can add my action.
>
> **[5:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=323)** Now I've got all the component parts for my set action.
>
> **[5:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=328)** Let's change set values.
>
> **[5:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=331)** So we want to select the bar chart, is where our action is going to occur.
>
> **[5:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=336)** Again, we're going to use the select.
>
> **[5:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=338)** The set that the action is going to apply to, we've only got one set, so it's going to be that one.
>
> **[5:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=345)** And we are going to assign values to the set when I click on it, and when I unclick on it or click away, it's going to remove all the values from the set, so we'll go back to being the empty set again.
>
> **[5:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=356)** Let's do OK. So now let's test.
>
> **[5:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=357)** If I click on Public Areas, that now expands to show me all of the values for just the public areas.
>
> **[6:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=367)** If I do the same with Furnishing, it expands out so I can see everything in there.
>
> **[6:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=375)** So if I've got one selected, if I unselect, I'll go back to my empty spot again.
>
> **[6:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=380)** So there we go.
>
> **[6:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=380)** I've got three different actions going on here, filtering, highlighting, and a set action, and they're only targeting specific areas of my dashboard.
>
> **[6:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=391)** That's one of the great things about actions, is that we can control exactly the target and the source of all of those actions to make a fully interactive dashboard.
>
> **[6:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-actions?u=76281980&t=400)** What we have now are five sheets that all are tied together all through actions.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), public (2), case, (1), this. (1), else, (1)
> **UI Navigation:** go to (4), select the (2), click on (2)
> **Cross-References:** go back to (4)
> **CLI Commands:** make (1)
> **Env Vars:** end (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Using Story Dashboards

> [↑ Back to Table of Contents](#table-of-contents)

#### DataViz vs. data stories
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=0)** - [Instructor] So, what is a data story, and how does it differ from a data visualization?
>
> **[0:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=9)** Well, to understand that, we need to think about what these two entities are.
>
> **[0:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=15)** Now, broadly speaking, a data viz or data visualization tends to be exploratory.
>
> **[0:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=23)** It's not always true, but in most cases, you can think of the visualization as an exploratory tool.
>
> **[0:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=31)** So, what we do is we look at our data, and we create a dashboard that is going to display the data in an effective way.
>
> **[0:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=41)** Now, that's going to depend on the four Ws of who the audience is, where it's going to be viewed, what it's trying to show, and why we're showing it in the first place.
>
> **[0:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=51)** And all of that is going to determine the best way of displaying that data.
>
> **[0:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=56)** The type of data's going to determine the type of chart, and the layout and the coloring, everything else that we've talked about.
>
> **[1:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=64)** But what we also are going to provide is some tools.
>
> **[1:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=69)** So, we're going to give the viewer tools to dig deeper into that dashboard.
>
> **[1:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=73)** So, a data visualization would tend to be a high interaction.
>
> **[1:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=79)** So, somebody is going to be expected to be able to interact with the visualization that you create.
>
> **[1:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=84)** So, we're going to give them things like filters.
>
> **[1:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=87)** We might give them some dashboard action so that when they interact with a particular mark, it's going to fire off an action that's going to change the view of the other marks.
>
> **[1:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=96)** Broadly speaking, a visualization would tend to be neutral.
>
> **[1:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=102)** So, what I mean by that is, is that it allows the user to find anything in the data.
>
> **[1:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=108)** It's not trying to show a particular thing, it's more saying, here's some data, here's some tools, here's some charts, here's some visualizations.
>
> **[1:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=119)** See what you can find.
>
> **[2:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=121)** Now, that's strictly speaking.
>
> **[2:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=123)** It's going to be an exploratory type of dashboard.
>
> **[2:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=126)** So, the sort of thing you might create would be something like this where we have several different charts laid out in a certain way.
>
> **[2:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=133)** We have filters, we have interactivity.
>
> **[2:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=135)** Now, this dashboard here is what I would call a neutral dashboard.
>
> **[2:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=141)** It's an exploratory dashboard.
>
> **[2:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=143)** It's not making any particular case for us to change our business.
>
> **[2:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=147)** What it's doing is saying there is some data here, we've arranged it in a certain view to make it easily digestible.
>
> **[2:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=154)** You've got some fields you can drill down.
>
> **[2:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=156)** If you interact with these marks, you could find more information, but it's making the viewer go through that journey of discovery, which might be exactly what we want.
>
> **[2:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=167)** There's nothing wrong with that, but that's what this dashboard would have us do.
>
> **[2:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=173)** The Data Story, on the other hand, how does that differ to what we've just seen?
>
> **[3:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=180)** Well, typically with the Data Story, somebody has analyzed the data.
>
> **[3:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=184)** So, they've looked into the data, they've built some charts, they've done some filtering, and they found something in that data that's interesting or important, something that needs to be shared with other people.
>
> **[3:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=199)** Something that needs to have the viewer do something about it.
>
> **[3:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=205)** So, we need to draw attention to what we have found, because you don't want to give somebody the exploratory dashboard and hope that they'll stumble across the same thing that you found by accidentally hitting the same filters.
>
> **[3:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=216)** That doesn't make any sense.
>
> **[3:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=217)** If you've already found it, we want to guide them to it.
>
> **[3:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=221)** So, instead, we might do something like this using Tableau's Story Points to guide our viewer through our charts.
>
> **[3:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=229)** So, this dashboard is making the case why we need to stop selling Tables, and it includes three story points at the top, and it's going to take us through step by step.
>
> **[4:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=242)** So, it shows overall, here are all the profits.
>
> **[4:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=245)** We highlight Tables as being of particular interest to us.
>
> **[4:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=249)** Let's just focus on just this line.
>
> **[4:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=250)** Ignore the other parts, we just want to look at this line by highlighting it.
>
> **[4:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=256)** Then we go further to say, why are we making such a loss in this particular category, in this particular region?
>
> **[4:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=263)** So, we've drawn the eye into just that one single chunk of data.
>
> **[4:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=269)** Now, that's very easy to guide somebody through and define that.
>
> **[4:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=273)** If we'd had just given the exploratory dashboard, how certain are that they would also have found that same information?
>
> **[4:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=283)** So, I guess the question is, which one do we use?
>
> **[4:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=287)** And I think by now, you know the answer.
>
> **[4:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=291)** The answer is, of course, it depends.
>
> **[4:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=295)** So, this goes back to the why?
>
> **[4:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=299)** Why are we visualizing this particular set of data, and why are we making that dashboard in the first place?
>
> **[5:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=307)** Data stories make sense when there is a narrative that we have already found that we want to convey to somebody else.
>
> **[5:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=315)** One of the ways I like to think about it is that if I was presenting my exploratory dashboard to a room of people, I could take them step by step through that dashboard and show them what I found.
>
> **[5:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=329)** The data story would enable them to take those same steps through that data, but without me being there.
>
> **[5:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=337)** Now, all data stories are data vizzes, but not all data vizzes are data stories, and not all of 'em need to be data stories.
>
> **[5:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=349)** A data story can be big, or it can also be small.
>
> **[5:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=352)** It might just be a single sheet, it might be several dashboards strung together to make a long narrative.
>
> **[5:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=358)** Ultimately, remember what we're trying to do.
>
> **[6:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=361)** We're trying to help people see and understand their data and to be able to make some decisions based on that information.
>
> **[6:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/dataviz-vs-datastories?u=76281980&t=367)** If they can do that by exploring their data with the tools you give them, great, but if you need to lead them by the hands through the data to come to the same conclusion that you have already come to, then the data story is a great way to do it.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5), find (3)
> **Definitions:** is a  (3)
> **Code Keywords:** let (1), else. (1)
> **Speakers:** - [instructor] (1)

#### Narrative structure
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=0)** - [Instructor] So if we decide that we are going to create a data story, how do we go about building that?
>
> **[0:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=8)** Well, we can think of the narrative structure of stories in general and think about how we can apply those to data stories.
>
> **[0:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=16)** Now, a good story always has a good structure.
>
> **[0:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=21)** So we're going to have a beginning, a middle and an end.
>
> **[0:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=25)** And our data story is going to have those same elements to them.
>
> **[0:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=32)** There's a very common structure called Freytag's pyramid that is used for an awful lot of general storytelling, and we can apply some of that to our data visualization.
>
> **[0:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=42)** So the pyramid looks something like this.
>
> **[0:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=45)** The idea is that your story starts with an exposition, so it sets the scene.
>
> **[0:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=51)** So we use this to set the scene for our own dashboard and our own dashboard story about what it is the dashboard is showing and what it is we're trying to prove by taking you through our story.
>
> **[1:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=63)** The rising action are the events that happen within the story to explain how things are going along.
>
> **[1:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=70)** So in our story dashboard, this could be the use of filters or highlighting to call out particular details in our data that we're going to drill down further and further into detail.
>
> **[1:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=82)** Now, the climax of the story is when we hit our big moment, this is when things start to come together to say, "Look, this is the big thing I'm trying to show you."
>
> **[1:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=92)** The falling action is when the story really starts to take hold, where we've shown you the big moment and now we have to show, well, what are we going to do with that information?
>
> **[1:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=104)** So we start looking into more data, into more detail.
>
> **[1:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=108)** Is the thing that we've discovered a one off?
>
> **[1:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=111)** Is it a recurring thing?
>
> **[1:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=113)** Is it something to do with seasonal data?
>
> **[1:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=115)** Is it particular body that is causing this data problem to happen?
>
> **[2:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=122)** And then finally, we come to the denouement of the story.
>
> **[2:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=126)** So this is the conclusion that we want somebody to come to, this is the end of the story.
>
> **[2:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=130)** After we've gone through all of our plot, we've met all of our characters, we've interacted with our data, we've taken everybody through the journey, what do we want them to do next?
>
> **[2:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=141)** How do we want them to feel?
>
> **[2:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=143)** Do we want them to feel good about the data?
>
> **[2:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=145)** Was it a positive data story where we're highlighting something that's really, really good?
>
> **[2:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=149)** Do we want them to feel negative?
>
> **[2:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=152)** You know, do we want them to realize that there is something critically wrong with our data that we need to change?
>
> **[2:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=158)** We need to make a business decision to make an improvement?
>
> **[2:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=162)** So how do you want somebody to feel after they've interacted with your story?
>
> **[2:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=167)** Because if we don't have that, then why are we doing the story anyway?
>
> **[2:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=171)** Because we want somebody to change how they feel from the beginning of the story to the end of the story.
>
> **[2:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=179)** So how do we use that kind of structure within our dashboards?
>
> **[3:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=183)** Well, it kind of depends on the kind of story that you're doing, if you're doing a small story or a longer more involved story.
>
> **[3:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=190)** So if we had just a single dashboard and we want to use the narrative structure on there, then we can think about the elements we have available to us just within that one dashboard.
>
> **[3:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=201)** So the starting point is the title, and a good title can set the scene of what we're going to discover by the time we get to the end of our dashboard.
>
> **[3:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=213)** So start with the title.
>
> **[3:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=215)** What are we going to show?
>
> **[3:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=216)** What are we trying to prove?
>
> **[3:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=218)** What should I, as the viewer, take away by the time we've got to the end of my dashboard, by the time you've set the scene and told me point by point the things I need to see?
>
> **[3:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=230)** So we might start with high-level details, a detail across all of our data, and then maybe we'll drill down into more depth.
>
> **[3:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=239)** Maybe we'll look at a particular year or a particular month or a particular team or a particular project.
>
> **[4:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=244)** We'll start to strip away all of the data to look at the bit that actually makes a difference.
>
> **[4:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=251)** We might use some actions to uncover items of interest until we get the aha! moment.
>
> **[4:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=259)** Then we need to offer the solution, or at the very least kind of point them in that direction of where they can think the solution might be.
>
> **[4:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=267)** What change could they make?
>
> **[4:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=269)** What could they improve?
>
> **[4:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=270)** What should they keep doing?
>
> **[4:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=272)** Now with the data story, that might go across several different dashboards, but we can use the same structure, we can still set the scene, but this time it'll be using some text rather than a single title.
>
> **[4:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=287)** We might show each step of the analysis on a separate page.
>
> **[4:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=291)** If we have a dashboard that has multiple sheets on it, we might need to make different selections for each of our individual story points.
>
> **[4:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=298)** So each page becomes a page in our story, and as we turn each page, we're moving closer and closer to that aha! moment.
>
> **[5:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=308)** And again, once we've done that, we can then make the case for change.
>
> **[5:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=312)** What is it we should improve?
>
> **[5:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=314)** What is it we should change?
>
> **[5:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=316)** Or what should we just keep doing?
>
> **[5:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=318)** The narrative structure, although complicated, can be used for both simple one-sheet dashboards and for dashboards that make use of story points where we're actually taking somebody step by step through.
>
> **[5:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=331)** Starting with a simple title and ending with a single chart can be just as effective as a multi-page story.
>
> **[5:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=339)** Now, which one are you going to choose?
>
> **[5:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/narrative-structure?u=76281980&t=342)** Well, that depends.

> [!info]- Semantic Content
>
> **CLI Commands:** make (6)
> **Code Keywords:** this. (1), finally, (1)
> **Speakers:** - [instructor] (1)

#### Big stories
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=0)** - [Instructor] When we talk about big data stories, we're talking about when we want to create a narrative around a dashboard, but we need to take a multi-step approach to each stage.
>
> **[0:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=14)** We want to create pages that somebody can look through as they walk through our stories that we've created.
>
> **[0:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=21)** And to do that, we make use of the story point function within Tableau.
>
> **[0:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=26)** So let's have a look at this dashboard.
>
> **[0:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=27)** So I've got four sheets, a map, a heat map, a timeline, and a scatter plot.
>
> **[0:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=34)** Now, at the moment, this is very much an exploratory dashboard.
>
> **[0:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=38)** There's no narrative here.
>
> **[0:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=39)** It's very much a neutral dashboard.
>
> **[0:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=41)** It's just stating, here's the profits, and display them in ways that make sense.
>
> **[0:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=48)** Now, if I start interacting with my dashboard, we can drill down and look for some interesting things.
>
> **[0:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=53)** So I can see that some of my states, we make profits, and some of them we make losses.
>
> **[0:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=59)** I can see that most of the time, we seem to make profits during each of my months, but there are a couple of months where we make some losses, one of them quite significant.
>
> **[1:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=70)** Again, looking at my subcategories, there are places where we make good profits, places where we make bad profits.
>
> **[1:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=78)** And, again, with my customers, some of my customers, we make profits, and some we make losses.
>
> **[1:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=83)** Okay, so that looks pretty straightforward.
>
> **[1:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=86)** So what can we do to turn this into a story?
>
> **[1:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=90)** Well, we'd have to discover something first.
>
> **[1:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=93)** So let's have a look.
>
> **[1:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=95)** If I turn on filtering for each one of my sheets, now I can interact with my dashboard, and let's dive in and see some of the information.
>
> **[1:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=106)** So the first thing I might be interested in is, well, what happened on this particular date?
>
> **[1:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=110)** It's the worst month we've ever had.
>
> **[1:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=113)** Okay, so why was that?
>
> **[1:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=114)** Well, we can see that although we did make profits in some states, there are some quite heavy losses in some of the states to the right hand side.
>
> **[2:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=123)** And if I look at my subcategory, I can see that although we made very small profits, some of our areas, these bookcases, for example, my furnishings, particular tables in the southern region made a quite significant loss.
>
> **[2:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=139)** If I then click on my southern region, I'm now honing in to that particular state and I can see all of the sales for that particular region and hone it down to that particular customer.
>
> **[2:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=153)** So that customer, even though we had decent sales, we did quite poorly with, and that's pulling our whole average down.
>
> **[2:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=161)** Okay, so I might want to convey that to my audience.
>
> **[2:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=165)** Again, if I go back and look, we can see that consistently tables tend to be quite poor.
>
> **[2:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=170)** So I might want to highlight that and say, look, overall, month on month tables are consistently making a loss.
>
> **[2:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=178)** And in particular, tables in that eastern region look to be particularly bad.
>
> **[3:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=182)** And we can see on our timeline and with all of our customers and in all of our states, when we aggregate everything together, the tables look a pretty hopeless cause.
>
> **[3:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=192)** Maybe the suggestion should be based on this data and our analysis, we should stop selling tables.
>
> **[3:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=199)** Now, that's quite easy for me to find that just by clicking those around, but am I sure that somebody else would also come to that same conclusion?
>
> **[3:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=208)** Well, I've discovered this, so I want to convey that information to somebody else.
>
> **[3:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=211)** So what I'm going to do is I'm going to create a data story.
>
> **[3:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=215)** So on the bottom of my pane, I'm going to click on the New Story icon, and I'm going to drag my dashboard into my view.
>
> **[3:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=225)** This is going to be the source of my story.
>
> **[3:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=229)** So the next thing I'm going to do is do those steps again, but I'm going to save the view as I go along.
>
> **[3:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=237)** So this is my overall view, and let's hone in and look at those tables again.
>
> **[4:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=243)** So if I click on Tables, we can see that the icon at the top has now changed.
>
> **[4:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=250)** It's asking me do I want to revert back to how it was before I did my interaction, or do I want to save this as a new page in my story?
>
> **[4:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=260)** So I'm going to click Save as New.
>
> **[4:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=264)** And now, we can go onto the next step.
>
> **[4:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=266)** So the next step was to look at our individual east region.
>
> **[4:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=272)** So I'm going to click on that cell.
>
> **[4:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=274)** And now, we're honed in just looking at all of my eastern regions.
>
> **[4:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=281)** And I can make sure my map zooms in, and I can see all of my profits.
>
> **[4:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=285)** So we save that as a new page.
>
> **[4:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=289)** So that has taken me to that point.
>
> **[4:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=291)** What I might want to do then is add some annotation.
>
> **[4:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=296)** So I can drag some text from the left hand side and put it into my view.
>
> **[5:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=302)** And I can say something like, we should stop selling tables in the East.
>
> **[5:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=312)** And let's make that nice and big because that's quite a big call out that we want people to know about.
>
> **[5:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=323)** And, again, I've now got my story.
>
> **[5:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=329)** Let's put that up there.
>
> **[5:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=331)** So if I go back to my first page, here was my top level view.
>
> **[5:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=336)** I can then go down to my next level, and I can go down to my fine level with my action to say stop selling those tables.
>
> **[5:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=347)** Now, we can go ahead and do that for any of our particular views that we want to.
>
> **[5:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=352)** The power of the storytelling means that I can send this dashboard or publish it to our server, and somebody else can step through those same pages that we've just created.
>
> **[6:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=364)** We can change the captions, so we can have the captions to guide us through that story.
>
> **[6:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=370)** Here are all our profits.
>
> **[6:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=375)** On our second caption, we're now looking at the tables.
>
> **[6:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=382)** And our third one, the eastern region, is terrible.
>
> **[6:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=389)** So now we can send this, we can publish this, and somebody else can step through our story as if they were sitting with us and we were explaining it to them.
>
> **[6:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=399)** That's the power of data storytelling.
>
> **[6:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=402)** You enable your user to come to the conclusion that you want them to have.
>
> **[6:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/big-stories?u=76281980&t=407)** You're not relying on them on hitting those same filters or actions that you did to find that same conclusion.

> [!info]- Semantic Content
>
> **CLI Commands:** make (13), find (2)
> **Code Keywords:** let (6), this, (3), function (1), else. (1), new. (1)
> **UI Navigation:** click on (4)
> **Cross-References:** go back to (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Small stories
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=0)** - [Instructor] When we tend to think about data stories, the first thing that pops in our mind is the big story, the multi-page story that we either flick through through story points or maybe a very long, tall dashboard where there's a lot of narrative and we scroll through the story.
>
> **[0:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=20)** But actually, every dashboard tells a story, and we can use the same ideas and the narrative structure in a single-sheet dashboard as well.
>
> **[0:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=34)** So, I'm going to show you an example of building a story just using a single-sheet dashboard.
>
> **[0:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=41)** So in this example, I've got three individual charts.
>
> **[0:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=46)** I've got profitability for two years, in this case, 2023, 2024.
>
> **[0:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=53)** And it's showing it for a specific region.
>
> **[0:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=57)** I've got a filter, so I can pick the manager of that region and I can then see the performance of each one of their regions.
>
> **[1:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=66)** So at the top level, we have the overall profitability for that entire region, so everything's aggregated up to the very top level of region.
>
> **[1:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=76)** The next sheet I've got is kind of the next step down.
>
> **[1:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=80)** Again, it's looking at one individual region, but now we've broken it down into the top-level categories, so I have three different categories, I have three bars, so now we're in kind of that middle level of detail.
>
> **[1:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=93)** And then the third sheet that I've got is at sub-category level.
>
> **[1:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=99)** Now, there is another level we could go down, which would be the actual products themselves, but the problem is, is that there's many, many products and that's not going to fit neatly within our individual dashboard.
>
> **[1:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=110)** But if you wanted to, we could go one level down as well.
>
> **[1:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=114)** So I've got my three levels, my regional, my category, and my sub-category.
>
> **[1:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=118)** So, this should allow us to kind of tell a story with our data.
>
> **[2:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=123)** So, let's go ahead and put all this together.
>
> **[2:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=126)** So, we'll start off with this blank sheet.
>
> **[2:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=130)** So, at the moment, all we have is our title, and in our layout, we have a vertical container with the title, and that's it.
>
> **[2:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=141)** So, how do we do this?
>
> **[2:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=144)** Well, the first thing is, is we've started with the title.
>
> **[2:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=147)** So, this is telling us it's a profitability dashboard for 2023 and 2024.
>
> **[2:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=152)** Okay, so the fact we've explicitly said those two is we know we're going to be comparing those two years worth of data.
>
> **[2:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=161)** Now, I know my structure.
>
> **[2:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=162)** I want to have each chart one on top of the other.
>
> **[2:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=166)** So I know I want to stack them vertically, so I'm going to use a vertical container to contain them all.
>
> **[2:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=171)** So we'll put that inside our charts.
>
> **[2:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=173)** Now I have my vertical container, and then I'm going to put all of my charts inside it.
>
> **[2:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=179)** So I'll start with my first level, which is my Regional, and then I'm going to put my Category underneath, and then I'm going to put my Sub-Category at the bottom.
>
> **[3:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=191)** So now each one of these is inside the parent vertical category.
>
> **[3:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=199)** So, next thing I want to do is organize this, make a bit more space.
>
> **[3:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=206)** So, I don't need to know my profits, I don't need these order dates and I don't need all of these titles, because the people that are going to be using my dashboard, remember, the who part of the four Ws of good dashboard designers, who is the audience?
>
> **[3:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=220)** The audience is going to be the regional managers themselves.
>
> **[3:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=223)** So, they are aware that they have subcategories and categories.
>
> **[3:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=226)** I don't need all of those headers, so we can clear a lot of this stuff up to make more space.
>
> **[3:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=232)** So, I'm going to get rid of the titles for each one of my individual sheets, and then going to remove the axes for each of my charts.
>
> **[4:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=248)** And then because of that, I'm actually going to turn on the labels for each of my individual charts so we can look at the numbers.
>
> **[4:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=264)** Okay, nice amount of detail on there.
>
> **[4:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=266)** And then going to remove the order date header, 'cause we can see that we are looking at two individual years, and the title has already told us that's what we're going to be looking at.
>
> **[4:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=277)** Now, I've got a little bit more space in here to play with.
>
> **[4:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=280)** So what I'm going to do is I'm going to set this to Entire View and I'm going to set each of these actually to be these Entire View.
>
> **[4:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=294)** Going to change that slide, give that a bit more room.
>
> **[4:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=298)** Okay, there we go.
>
> **[4:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=299)** So now I have my regions, my categories, and my subcategories.
>
> **[5:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=304)** Again, I don't need my region header, so I'm going to hide that label, hide the Category label, and hide the Sub-Category label.
>
> **[5:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=314)** I don't need my profit legend.
>
> **[5:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=317)** Now, I just want to move my filter, so I want my filter to be at the top of the view rather than in the right-hand side of this pane.
>
> **[5:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=323)** So what I'm actually going to do, I've got a bit of whitespace at the top, so I'm going to set this to be a single-value dropdown, and I'm then going to make it float.
>
> **[5:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=336)** So I'm going to set it to be a floating object.
>
> **[5:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=340)** This container is then empty.
>
> **[5:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=341)** I can get rid of that and everything will expand over to fit it.
>
> **[5:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=344)** And now I can just hover this somewhere up here.
>
> **[5:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=348)** So then I can select the manager that I'm interested in.
>
> **[5:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=353)** So we could go ahead and we could adjust this as well to make sure that these all line up.
>
> **[6:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=361)** And we could do some extra formatting should we want to.
>
> **[6:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=364)** So now, a manager can select themselves from the list and they can then look at their own particular story.
>
> **[6:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=373)** So what does this tell us?
>
> **[6:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=374)** Well, if we looked at this one, for example, the southern region, we can see that in 2023 we made large profits, in 2024, we made small ones.
>
> **[6:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=383)** Now, that's quite significant.
>
> **[6:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=385)** There's quite a big drop in there, a drop of nearly 10,000.
>
> **[6:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=389)** Okay, so that's not good when we look at it from the very top level, so let's go on to the next level down.
>
> **[6:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=395)** And the next level, we look at the previous year, profits across all of the categories.
>
> **[6:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=401)** That looks quite good.
>
> **[6:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=403)** Ah, but then when we look into 2024, we can see some quite significant differences.
>
> **[6:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=408)** We can see that there significantly less technology profits, office supplies about the same, but the furniture was profitable, now, overall, we're making a loss.
>
> **[6:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=419)** Okay, well let's have a look at the next level down on that.
>
> **[7:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=423)** And again, we can see that in most cases, in the previous year, everything was good.
>
> **[7:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=427)** Supplies not so much, and tables has been a problem.
>
> **[7:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=431)** But we can see two huge issues where we had machines and tables both making that big loss.
>
> **[7:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=439)** So, what do we need to do?
>
> **[7:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=440)** Well, clearly we need to look into, how come we did machines so badly this year, whereas the previous year we was actually really good?
>
> **[7:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=448)** That's a $7,000 drop in that case.
>
> **[7:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=453)** So by setting out the stall of the title telling us we're looking at the profitability, but going step by step, deeper and deeper, we've actually led somebody on that journey.
>
> **[7:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=465)** Now, they could have done this if we'd have just given them the final sheet, for example.
>
> **[7:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=472)** But what it wouldn't have done is it wouldn't have told us about everything at the regional level, then at the category level, and then finally at the sub-category level.
>
> **[8:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/small-stories?u=76281980&t=482)** Having that drill down already displayed for us allows that narrative view of going from the top level right down to the bottom level, and to make some big decisions on our data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case, (1), this, (1), case. (1)
> **CLI Commands:** make (5)
> **UI Navigation:** dropdown (1), select the (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### Challenge: Dashboard stories
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-dashboard-stories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-dashboard-stories?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-dashboard-stories?u=76281980&t=5)** - [Instructor] Here's an exercise for practicing using data story points.
>
> **[0:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-dashboard-stories?u=76281980&t=11)** So the first thing we want to do is use the Landon Hotel dashboard to find an interesting story within the data.
>
> **[0:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-dashboard-stories?u=76281980&t=19)** You're then going to create a story point dashboard using the original dashboard as the source.
>
> **[0:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-dashboard-stories?u=76281980&t=27)** So I want you to create as many story points as required to tell the story, but make sure that each of the story points has got an appropriate title, explaining what you're showing, and maybe why.
>
> **[0:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-dashboard-stories?u=76281980&t=39)** Add some annotations to the story to give it a call to action, so you have a start, a middle, and an end.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Dashboard stories
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=0)** - [Instructor] Here is my solution to the storyboard challenge.
>
> **[0:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=10)** So this is the Landon Hotel data.
>
> **[0:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=13)** So we've got occupancy, product category data, we've got timeline, got some scatter plot, and we've got some products.
>
> **[0:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=19)** So what interesting story can we actually see in this data that is worth putting out to put into story point?
>
> **[0:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=28)** So we can see from, for example, so for our timeline we have peaks and troughs, but it all looks pretty seasonal.
>
> **[0:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=35)** There's nothing particularly at the ordinary there.
>
> **[0:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=38)** My scatter plot, again, there's no particularly big outlier.
>
> **[0:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=45)** They're all sort of roundabout similar kind of thing.
>
> **[0:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=47)** Decent spread on there.
>
> **[0:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=48)** And again, my product orders, not too much going on there.
>
> **[0:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=52)** So I've added my heat maps, but there's a couple of interesting things that do kind of jump out on there.
>
> **[0:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=58)** So the color is going from darkest to lightest, so highest to lowest.
>
> **[1:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=64)** And we can see that it does appear to be that the office supplies is the least large area where we order most of our stuff.
>
> **[1:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=73)** And in particular we can see for the Paris one that's much, much lower at 102 compared to all of the other ones.
>
> **[1:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=80)** So that kind of stands out on there.
>
> **[1:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=84)** This is about how much product we have to bring into our hotel.
>
> **[1:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=90)** So why are we not using as much product on there for the office supplies?
>
> **[1:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=94)** That might be interesting, something we want to have a look at possibly.
>
> **[1:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=99)** What else is there?
>
> **[1:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=100)** Well, if we look at our occupancy data, we can see that this one is particularly interesting.
>
> **[1:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=109)** So our hotel here typically runs around about 48%, 50% occupancy as most of the hotels do.
>
> **[1:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=117)** So most of our hotels run at about this 50% occupancy throughout the entire year.
>
> **[2:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=123)** Obviously we're going to have some peaks and trough, but overall, but the 2024 number is very significant.
>
> **[2:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=129)** That's much, much lower than we would really expect.
>
> **[2:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=131)** So I'm going to try and pull out some more information about this particular hotel in that particular year.
>
> **[2:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=137)** And at the moment, the only action we have is, we've got a highlight action.
>
> **[2:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=142)** So if I select the hotel in particular, it's going to tell me the products that we are bringing in.
>
> **[2:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=149)** That's not really that interesting.
>
> **[2:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=151)** So instead, let's turn on the filtering for this particular sheet.
>
> **[2:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=156)** Again, let's have a look and see what this can find.
>
> **[2:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=159)** Okay, so now we filtered just to show the profit in revenue for our hotel and we can look at our profits.
>
> **[2:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=167)** And this is interesting.
>
> **[2:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=168)** We can see there's been a definite dip in that profit from these two years.
>
> **[2:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=178)** In actual fact to January and December, it's the same year.
>
> **[3:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=181)** So this would imply that we've had some significant revenue issues going on for those two years there.
>
> **[3:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=187)** I wonder if that's carried through where we've had this drop from 48% down to 41% and it's 2024, so the profits soon to come back up again.
>
> **[3:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=198)** So whatever we were doing on there hasn't appeared to carry through.
>
> **[3:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=201)** Nevertheless, that's something interesting I maybe want to point out.
>
> **[3:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=205)** Okay, so let's try and build a brief story point around that.
>
> **[3:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=212)** So what I'm going to do is I'm going to create a new story point.
>
> **[3:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=216)** So we're going to go down to the bottom of our menu and click on new story.
>
> **[3:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=221)** And I'm going to put my Landon Hotel dashboard inside my story area.
>
> **[3:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=231)** And this is going to be the starting point of my story.
>
> **[3:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=234)** So this is my first page of my story as it were.
>
> **[3:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=237)** So let's rename our story to be, "Landon Hotel - Whats been going on?"
>
> **[4:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=252)** Okay, so my first caption is just going to be my overall starting point.
>
> **[4:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=257)** And we can say that overall occupancy is around 50% for all hotels and all years.
>
> **[4:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=273)** Okay, so the next thing we're going to go down is to look at our specific year.
>
> **[4:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=277)** So if I select 2024 and have that highlighted, we can add this as a new story point.
>
> **[4:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=288)** So now my 2024 column is the highlighted column.
>
> **[4:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=293)** So let's take a closer look at 2024.
>
> **[4:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=299)** Okay, so we can see that in most cases it's really around the mid 40's except for our single hotel down here.
>
> **[5:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=309)** So let's highlight that, click on that particular cell and we can say in 2024 had an occupancy of only 38%.
>
> **[5:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=326)** Okay, so why is that? Why do we want to call that out?
>
> **[5:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=329)** So what we can then do is we can then look further in our data if we wanted to.
>
> **[5:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=335)** So we can look at our individual timelines.
>
> **[5:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=338)** So if I select now some of my timeline data, so if I was to select my end of years and just do keep only on there, I could then zoom in.
>
> **[5:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=352)** If we go back to my dashboard and if I turn my filtering back on, no, turn the filter on, there we go.
>
> **[6:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=367)** Go back to my story.
>
> **[6:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=370)** And if I just select my city again, now I've just honed in,
>
> **[6:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=379)** I'm just looking at my data because I've zoomed in on there and I'm just looking at one hotel's data.
>
> **[6:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=386)** So now we make a new story point.
>
> **[6:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=389)** Let's take a closer look at the last few years.
>
> **[6:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=398)** Okay, so done some story points.
>
> **[6:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=402)** We've gotten to this point where we can see that we have these two areas or we have these significant dips.
>
> **[6:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=408)** So I'm going to put a call out on there.
>
> **[6:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=411)** So I'm going to add some text.
>
> **[6:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=417)** There are two significant periods of losses,
>
> **[7:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=428)** and now I have my little call out that I can put near my timeline.
>
> **[7:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=436)** Okay, so let's go back and let's look at this dashboard and see how this works.
>
> **[7:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=440)** So if I go into presentation mode, we can now present the dashboard as either in a talk or this is what it'd be look like if we published it.
>
> **[7:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=451)** So we can go back to the start of our story where it'll reset all of the filters that we've had in place, and we can then step through all of our stories.
>
> **[7:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=461)** So we can say the occupancy is around 50% for all hotels and years.
>
> **[7:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=466)** We now drill down into looking at one specific year and then one specific hotel.
>
> **[7:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=472)** And then we've taken a closer look in there.
>
> **[7:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=475)** So we've done our analysis, we've found something interesting in the data.
>
> **[7:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=478)** What decisions should we make with that data?
>
> **[8:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=481)** Well, right now, I don't know, but it's something that I think somebody else needs to see so they can make that decision.
>
> **[8:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-stories?u=76281980&t=488)** And this is what we do with story points where we find something in the data and then lead somebody to the same conclusion that we want them to have.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), from, (1)
> **CLI Commands:** make (3), find (2)
> **Cross-References:** go back to (3)
> **UI Navigation:** click on (2), select the (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 7. One Dataset, Five Dashboards

> [↑ Back to Table of Contents](#table-of-contents)

#### Build an exploratory dashboard
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=0)** - Let's build a dashboard for exploration.
>
> **[0:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=4)** So we're going to build an exploratory dashboard.
>
> **[0:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=8)** So what features do exploratory dashboards have?
>
> **[0:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=12)** Well, they're going to include several sheets or views of the same data.
>
> **[0:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=19)** It's going to present the data to make it easy to find answers.
>
> **[0:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=22)** You know, they shouldn't be hard to find.
>
> **[0:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=25)** It's going to be high levels of interaction.
>
> **[0:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=26)** So we should expect filters, actions, and highlights.
>
> **[0:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=31)** And this is going to be a single dashboard, but will have many uses.
>
> **[0:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=35)** The idea being that a large number of people can interact using the same actions, but find different things that are of interest to them.
>
> **[0:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=44)** So let's go ahead and build one.
>
> **[0:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=48)** So what it needs to show is we're going to look at the last three years worth of sales data.
>
> **[0:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=52)** We're interested in looking for regional variations.
>
> **[0:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=56)** It should be able to show peak sale periods.
>
> **[0:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=59)** We need to identify any good or bad customers.
>
> **[1:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=63)** So remember, why build this dashboard?
>
> **[1:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=67)** We're building it for discovery.
>
> **[1:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=69)** So all of the things are going to be about discovering things within our data.
>
> **[1:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=75)** Let's build an exploratory dashboard using our data.
>
> **[1:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=79)** So I've got four charts.
>
> **[1:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=81)** We've got a customer scatterplot, I've got my profit heat map, a timeline, and a map.
>
> **[1:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=87)** So first thing we need to do is we're only interested in the last three years worth of our data.
>
> **[1:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=92)** So let's put a quick filter in place, and we'll select Years.
>
> **[1:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=97)** And we're only interested in the last three years worth of data.
>
> **[1:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=101)** So let's put that filter in place.
>
> **[1:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=105)** Okay, so now we've filtered that, and I'm going to make that a global filter.
>
> **[1:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=109)** So it's going to apply across all of our sheets.
>
> **[1:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=114)** So if I go to my timeline, we can see my timeline only shows now from January 2022 to December.
>
> **[2:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=121)** Okay, so we're looking at sales data, and we want to show the regional variations and we're looking for peak sales and periods that identify good or bad customers.
>
> **[2:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=132)** Okay, so we go to our dashboard.
>
> **[2:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=134)** I'm going to set the size.
>
> **[2:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=136)** So let me fix that size.
>
> **[2:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=140)** And let's make this 1200, and let's pick 700.
>
> **[2:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=148)** Okay, so next thing to do is bring our sheets in.
>
> **[2:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=153)** So I'm just going to go for a standard grid layout, I think.
>
> **[2:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=157)** So let's bring our map, and we'll add the timeline, and we'll bring in our heat map and we'll bring our customer information down here.
>
> **[2:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=169)** Okay.
>
> **[2:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=170)** So we've got some white space, we've got some legends over here, we'll tidy that up.
>
> **[2:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=176)** Let's see.
>
> **[2:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=177)** So we're looking for peak sale periods, regional variations, and good or bad customers.
>
> **[3:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=181)** Well, the good or bad customers, we can do that with the scatterplot.
>
> **[3:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=184)** So that makes sense to keep that.
>
> **[3:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=186)** Regional variations.
>
> **[3:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=187)** Well, I've got my regions in my heat map.
>
> **[3:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=193)** The states.
>
> **[3:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=194)** Now we're not actually interested in the states as such.
>
> **[3:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=198)** More interested in the region.
>
> **[3:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=199)** So we might get rid of that map.
>
> **[3:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=201)** I'm not quite sure that's adding anything at the moment.
>
> **[3:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=205)** And I've got my profit timeline.
>
> **[3:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=208)** So I'm looking for peak sale periods.
>
> **[3:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=211)** So it might be that we actually need to change that from looking at profit to just looking at sales potentially.
>
> **[3:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=219)** So let's trek back around.
>
> **[3:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=221)** Let's change profit for sales.
>
> **[3:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=224)** If I change the color in sales and change the measure on the rows, now we're looking at sales.
>
> **[3:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=232)** Okay.
>
> **[3:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=234)** So we're looking at the three years of sales data, looking for peak sale period.
>
> **[3:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=238)** So we can see our peaks are here.
>
> **[4:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=241)** Okay, so.
>
> **[4:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=244)** To make this into an exploratory dashboard, we need to have interactivity.
>
> **[4:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=249)** Now, each sheet at the moment is a separate thing.
>
> **[4:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=252)** They're not interacting with each other.
>
> **[4:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=254)** So we either need to add filters or turn on some dashboard actions.
>
> **[4:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=259)** So let's have a think about this.
>
> **[4:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=261)** What filtering do I want?
>
> **[4:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=262)** Well, if I'm looking at regional, I can see my regions up here.
>
> **[4:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=265)** So if I select one of my regions, I want that to fill to the rest of the dashboard.
>
> **[4:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=270)** So if I go to my profit heat map and turn on use as filter.
>
> **[4:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=276)** So if I select the western region, that shows me the western states and the western scatterplot and so on.
>
> **[4:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=286)** Okay.
>
> **[4:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=288)** I'm not sure that map's going to help us, 'cause I think I'd rather have more space on my two charts underneath, particularly my scatterplot, because there's a lot of customers in quite a small dense area.
>
> **[4:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=299)** So I think I'm going to remove my profit map.
>
> **[5:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=304)** Okay, so now I've got my scatterplot and my timeline.
>
> **[5:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=310)** Let's see, if I move my thumb up here, now my scatterplot is much wider.
>
> **[5:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=314)** Okay, that might work a bit better.
>
> **[5:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=316)** So let's resize my timeline because I don't need it to be quite as squished up over there.
>
> **[5:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=321)** I've got my heat map.
>
> **[5:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=323)** Change the fit to entire view.
>
> **[5:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=325)** So now I can actually see my entire grid in there.
>
> **[5:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=329)** The legend, currently the right hand side, is no use.
>
> **[5:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=331)** So let's get rid of that.
>
> **[5:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=333)** Let's delete that.
>
> **[5:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=336)** Okay.
>
> **[5:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=337)** That looks a little bit better.
>
> **[5:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=338)** So I've got three charts.
>
> **[5:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=341)** Three years worth of data, regional variations.
>
> **[5:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=344)** Yep, we've got that.
>
> **[5:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=345)** Looking for sale periods, yeah, I've got that.
>
> **[5:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=348)** Now, regional variations.
>
> **[5:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=352)** If I select just those regions, I'm filtering my timeline.
>
> **[5:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=359)** And do I want to filter, or do I just want to highlight it?
>
> **[6:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=362)** I wonder what would work better.
>
> **[6:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=365)** Hmm.
>
> **[6:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=366)** Regional variations.
>
> **[6:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=368)** I think I quite like the idea of actually highlighting it.
>
> **[6:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=371)** So let's go to my profit timeline and if I add region onto my row.
>
> **[6:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=379)** So now I have one line for each individual region.
>
> **[6:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=384)** Now if I select a region, it's going to just show one of those, but it'll go back to showing all of them.
>
> **[6:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=390)** Does that work or do I prefer the other?
>
> **[6:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=393)** Hmm.
>
> **[6:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=395)** I think I prefer the big view without having the small ones, 'cause there's not quite enough room to see enough detail in each of those.
>
> **[6:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=403)** So I think we'll go back and let's remove that region.
>
> **[6:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=410)** I think just having the selection is enough, 'cause then I can compare one region at a time and see how each of my subcategories was reflected in that particular region.
>
> **[7:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=420)** Okay, that makes sense.
>
> **[7:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=421)** Let's go ahead and turn on filtering for the timeline.
>
> **[7:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=425)** Because I want to be able to look at these peak months.
>
> **[7:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=427)** So what was happening in this month?
>
> **[7:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=429)** Where we did our sales come from for that particular month?
>
> **[7:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=434)** Okay, that looks quite good.
>
> **[7:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=436)** So that's interesting.
>
> **[7:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=437)** If I look at December 2023, I can see this big outlier from Adrian Barton over here.
>
> **[7:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=442)** That's by far my biggest profit and sales customer.
>
> **[7:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=448)** So that's good to see there.
>
> **[7:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=451)** And if we then turn on my scatterplot as well, I can then select a bunch of customers, and I can see when we've bought from them and whereabouts from the country they are.
>
> **[7:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=462)** And I can see some interesting things.
>
> **[7:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=464)** I can see I've got no sales at all for fasteners in the west.
>
> **[7:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=469)** And I can see a nice big profit for machines in the eastern region.
>
> **[7:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=474)** Okay, so that looks quite good.
>
> **[7:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=475)** So at the moment, I've got quite a nice dashboard that allows me to explore the data.
>
> **[8:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=481)** So customer scatterplot.
>
> **[8:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=484)** Don't really need that name there.
>
> **[8:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=485)** So let's get rid of our names.
>
> **[8:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=487)** Timeline we don't need.
>
> **[8:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=489)** And the heat map I don't need.
>
> **[8:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=493)** Don't need that region heading because I know they're my regions.
>
> **[8:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=496)** My months of order date, even though it says years on there, slightly confusing.
>
> **[8:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=503)** So let's see if we can change that ever so slightly.
>
> **[8:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=507)** So if I right click on my axis, and I can go to tick marks.
>
> **[8:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=516)** And I can put my major tick marks in.
>
> **[8:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=518)** So even though it says if I put months in there.
>
> **[8:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=522)** Okay, that's slightly better.
>
> **[8:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=523)** So now we're actually seeing the word months in there, and we see the tick mark.
>
> **[8:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=529)** So it doesn't conflict with what the label says.
>
> **[8:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=531)** So that's quite useful.
>
> **[8:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=533)** We know that's the order date, so that's quite good to keep that in there as well.
>
> **[8:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=538)** I don't need my subcategory heading.
>
> **[9:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=540)** So let's remove that.
>
> **[9:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=543)** And I scatterplot with my profit and loss all looks okay.
>
> **[9:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=547)** I'd quite like to call out that this is the zero axis.
>
> **[9:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=551)** So will select that.
>
> **[9:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=553)** We will go to Format and Lines.
>
> **[9:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=558)** And my zero line, I'm going to make that a slightly darker color, maybe not quite as dark as that.
>
> **[9:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=567)** That looks better.
>
> **[9:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=568)** Just to show that there is a zero axis that we are using.
>
> **[9:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=573)** Okay, last thing we need to do is add a title to my dashboard.
>
> **[9:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=577)** So let's put a good title in.
>
> **[9:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=580)** So what should we call this?
>
> **[9:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=583)** "Explore our sales data for the last 3 years,
>
> **[9:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=594)** select any mark to filter the data further."
>
> **[10:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=604)** So now we have a title that tells us what to do with the data.
>
> **[10:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=608)** It tells us to explore.
>
> **[10:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=610)** It's a neutral dashboard.
>
> **[10:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=611)** We haven't highlighted anything in particular.
>
> **[10:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=613)** We're not sharing anything.
>
> **[10:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=614)** We're just saying here's the data presented in a nice way.
>
> **[10:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=618)** It's showing three years worth of data, and we're telling somebody to interact with the marks to explore the data further.
>
> **[10:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=625)** So when they touch anything, they should expect to see a reaction.
>
> **[10:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=629)** This is an example of an exploratory dashboard.
>
> **[10:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=632)** Here's the data, here's the tools.
>
> **[10:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-exploratory-dashboard?u=76281980&t=635)** Go off and explore.

> [!info]- Semantic Content
>
> **Code Keywords:** let (24), this. (1), delete (1)
> **CLI Commands:** make (5), find (3)
> **UI Navigation:** go to (6), select the (1), click on (1)
> **Definitions:** is a  (2), we call this (1), is an  (1)
> **Cross-References:** in the last (2), go back to (1)
> **Speakers:** - let (1)

#### Build an informative dashboard
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=0)** - [Instructor] So let's build an informative dashboard.
>
> **[0:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=4)** And the main features of an informative dashboard are, it's about specific information, so unlike the exploratory dashboard, we're trying to present the data to make it easy to find answers.
>
> **[0:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=18)** But, there is a smaller level of interaction.
>
> **[0:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=21)** The idea is, that we've already either discovered something, or we're trying to inform about a specific thing.
>
> **[0:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=29)** So it's more focused on answering a single question, rather than being able to answer lots of different questions.
>
> **[0:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=37)** So the brief we've got for this one is, we want to examine the sales data for California, and we're interested in how well technology sells, how many sales do we make in each city, and how do we identify good or bad customers?
>
> **[0:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=55)** And, what are the top 10 technology products?
>
> **[0:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=59)** So, why are we building this dashboard?
>
> **[1:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=61)** Remember, it's a dashboard for information.
>
> **[1:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=64)** We have very specific questions, so we need very specific answers.
>
> **[1:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=69)** Okay, so let's go ahead and build an informative dashboard to try and answer those questions.
>
> **[1:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=75)** So we need to examine sales data for California, and we're looking at how technology sells.
>
> **[1:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=80)** So we need to put a filter in, just look at California and the technology.
>
> **[1:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=86)** So I'm going to go and put my filter in place.
>
> **[1:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=90)** So let's put a filter on State, and just select California.
>
> **[1:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=100)** I'm really interested in the technology, so that is a category, and select Technology.
>
> **[1:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=113)** Now I'm going to set these to be global, because I want these to affect all of the sheets, so everything using this data source.
>
> **[2:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=123)** Okay, so now we've filtered out, just look for our technologies in California.
>
> **[2:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=128)** So, I've got a map showing the cities, sales, color coded for the amount of sales, and the quantity, it's the same on quantity.
>
> **[2:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=139)** We have sales for each of our cities, I've got the top 10 customers, I've got the bottom 10 customers, which looks blank, and customer sales and profit.
>
> **[2:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=151)** Okay, so why are these two blank on here?
>
> **[2:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=155)** Okay, so we need to change these filters to be context filters, because I want these to happen before my other filters have happened.
>
> **[2:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=165)** So I make this into context, now my top-10 filter will now work for my customers.
>
> **[2:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=170)** And my bottom, okay, that's cool.
>
> **[2:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=173)** And I've got my, there, and I've got my product sales, so my subcategories for technology.
>
> **[3:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=182)** And this uses the asymmetric drill down, using set actions so that when I select one of my subcategories, it expands out to show me the particular products.
>
> **[3:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=196)** To understand more about how to do that, check out the chat where we talk about set actions and the asymmetric drill down.
>
> **[3:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=203)** Okay, so, my dashboard needs to look at the sales.
>
> **[3:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=208)** So, looking at sales for all of my charts, so that's good.
>
> **[3:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=212)** How much do we make in each city?
>
> **[3:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=215)** Well, I've got two choices, I've got the city map, and then I've got my bar chart.
>
> **[3:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=221)** Well, city map at the moment, because everything's scaled according to size, I'm not entirely sure that's going to be the best choice.
>
> **[3:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=229)** But, let's put it into the dashboard and see.
>
> **[3:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=231)** So I've got my dashboard.
>
> **[3:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=233)** So let's add our map.
>
> **[3:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=237)** Okay.
>
> **[3:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=239)** Well, the problem there is that San Francisco and LA are much, much bigger than all the other ones that I have in here, so we can't really see them very well.
>
> **[4:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=248)** So I think the first thing we could try is to take the quantity out, so everything's now scaled the same size.
>
> **[4:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=258)** Now I've got the problem where I've got a lot of cities overlapping, and the shading makes it quite difficult to see what's what.
>
> **[4:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=268)** So I don't think the map is actually going to be the best choice for us, I think instead it's going to be the sales-per-city bar chart, so I think we'll end up using that.
>
> **[4:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=279)** So let's add that to my dashboard.
>
> **[4:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=283)** Okay, so one of the things we had to show was how many sales do we make in each city?
>
> **[4:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=289)** And I tell you, that does it for us.
>
> **[4:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=293)** I don't need that legend, because that color coding is double encoded, so we'll get rid of that.
>
> **[4:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=299)** So I've got my sales per city. Okay, that's good.
>
> **[5:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=302)** What are the top 10 technology products?
>
> **[5:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=304)** Well, that was our product sales, so let's bring our product sales in.
>
> **[5:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=312)** Now, I can drill down by selecting one of my options.
>
> **[5:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=317)** So now it's in the dashboard, I need to set the dashboard action up again, so let's go to Dashboard, dashboard Actions.
>
> **[5:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=325)** And I already have my set here, but I need it to work on this sheet as well, so let's set up our action.
>
> **[5:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=336)** So if we select the product sales, the target is going to update that set, and we have it on Select.
>
> **[5:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=344)** So now that should, I just do my drill downs.
>
> **[5:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=349)** Okay, so we can look in more detail at individual products for each of our categories there.
>
> **[5:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=356)** And because I want to about the sales in each city, I think it'd be quite nice to put the City filter on, so let's turn on the filters.
>
> **[6:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=364)** So now if I select San Diego, now we're just looking at San Diego product sales.
>
> **[6:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=371)** And if I then click on Accessories, I'm now looking at the accessories that sell the San Diego area, that's good, that's working nicely.
>
> **[6:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=382)** And then, any good or bad customers.
>
> **[6:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=387)** Well, I've got my top 10 customers, and I've got my bottom 10 customers, so we could add those in.
>
> **[6:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=395)** So if I was to add my top 10 customers and my bottom 10 customers, to my view, what do we think about that?
>
> **[6:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=406)** How does that look?
>
> **[6:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=408)** So I select my city, and I can see my top and bottom customers.
>
> **[6:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=414)** That's also happening in the problem with the filtering.
>
> **[6:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=417)** So let's just go and look to see what's going on there.
>
> **[7:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=424)** It's because the city that we're selecting is happening before.
>
> **[7:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=430)** So if I add that to the context as well, do the same thing with this one.
>
> **[7:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=438)** Change that to the context.
>
> **[7:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=440)** So now when I select a city, it's going to select the top 10 customers for each one.
>
> **[7:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=445)** Okay, does that do what we want it to do? Let's unselect.
>
> **[7:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=450)** It needs to show sales for California, we're doing that.
>
> **[7:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=452)** Technology, yep, we're doing that.
>
> **[7:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=454)** Sales for each city, yes.
>
> **[7:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=457)** Top 10 technology products, we can see that we can drill down on there.
>
> **[7:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=462)** Identify good and bad customers.
>
> **[7:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=464)** Now the only problem I have with this, this is trying to inform us about the good and bad customers.
>
> **[7:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=471)** The problem is, is that they are reusing the same color scale.
>
> **[7:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=476)** These are my good customers on the left, these are my bad customers on the right, but the only way I know they're good or bad is from the title, and from the amount of sales axis.
>
> **[8:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=490)** That goes up to 4,000, that goes up to 210, but it's still sorted by biggest to smallest and vice versa.
>
> **[8:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=497)** So actually, that could be somewhat confusing.
>
> **[8:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=501)** So I think the best option might be just to show the scatterplot, because then I can see both the good and the bad customers.
>
> **[8:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=509)** So they're all going to be in my scatterplot, so let's add that in instead.
>
> **[8:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=516)** And we can get rid of our legends, 'cause they're not actually helping anything.
>
> **[8:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=520)** Let's get rid of those.
>
> **[8:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=523)** Okay, so now, I can look at my individual cities, I can see all my customers, I can see the good ones, and I can see the bad ones, and if I want to, I could then zoom in on those ones towards the zeros.
>
> **[9:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=542)** I can still expand out my sales if I want to, to look at the individual ones.
>
> **[9:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=550)** Again, let's add my city to the context so that the filtering for city happens before we do any of the drill down.
>
> **[9:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=561)** And I think that that's pretty good.
>
> **[9:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=563)** So let's give that a title.
>
> **[9:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=567)** And we'll show the title.
>
> **[9:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=568)** So, informative dashboard is not particularly useful, so let's change this for "Technology Sales in California."
>
> **[9:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=586)** And there we go.
>
> **[9:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=587)** The dashboard is looking at technology sales in California.
>
> **[9:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=590)** Three specific things in our data.
>
> **[9:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=593)** We're looking at the sales per city, we're looking at the overall product sales, and we're looking at the customer.
>
> **[9:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=599)** This is much more focused than the exploratory dashboard.
>
> **[10:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=602)** We've still got some interaction, but we've already pre-filtered, and we've already explained what we're actually looking at.
>
> **[10:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=610)** This is the difference between an informative dashboard and a pure exploratory dashboard.
>
> **[10:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-an-informative-dashboard?u=76281980&t=614)** With the informative, we've already made a couple of assumptions of where we're going to be looking to drive the focus in that dashboard.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), this, (1)
> **CLI Commands:** make (5), find (1)
> **UI Navigation:** select the (2), go to (1), click on (1)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Build a data story
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=0)** - [Instructor] Let's build a data story dashboard.
>
> **[0:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=3)** Now the data story dashboard features the following.
>
> **[0:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=6)** So it's all about insight.
>
> **[0:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=8)** We're not exploring the dashboard, we're not explaining, it's about insight into what is going on with that dashboard.
>
> **[0:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=16)** It's about presenting the answers to the user.
>
> **[0:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=18)** We've already looked at the data, we've found some answers.
>
> **[0:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=21)** We want to present that, and typically we're trying to persuade or make a case to change something.
>
> **[0:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=29)** Now a data story is going to involve multiple dashboards connected as part of a data story, or it might be one single dashboard, but has many different features that we connect to piece by piece.
>
> **[0:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=41)** So what do we need to show in our example?
>
> **[0:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=44)** So we're going to look at our data to see are there any trends we need to be aware of, want to show any good or bad weeks?
>
> **[0:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=51)** I want to show which products and locations we're involved.
>
> **[0:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=56)** The ultimate goal is, do we need to make some changes to our business?
>
> **[1:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=61)** So remember the why of building this particular type of dashboard is, it's a dashboard for insight and importantly change.
>
> **[1:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=72)** So let's build a data story using that criteria, using our data.
>
> **[1:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=77)** So the first thing we want to look at is, what data have we already got?
>
> **[1:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=81)** So I've got some sheets and some dashboards already created.
>
> **[1:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=85)** So I have a couple of timelines looking at the profit and sales for every week in our data, we have one for profit, one for sales, I have a regional profit heat map and a regional sales heat map.
>
> **[1:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=101)** So it's same data but looking in regions and looking for sales or profit.
>
> **[1:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=109)** I have one dashboard at a fixed size that has both the profit and sales sheet embedded in it.
>
> **[1:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=115)** And then one for the weekly and regional sales and the weekly and regional profits.
>
> **[2:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=121)** So a data story is when we've discovered something in the data and we want to lead somebody through that data to come to the same conclusion that we have had or that we want to persuade them or show them that something needs to change.
>
> **[2:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=137)** So if I look at my timeline data, we can see that in general the amount of sales and the amount of profit, I mean it varies quite a lot, but it's around about the same size.
>
> **[2:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=149)** We make some larger sales and smaller sales, but on average it's quite steady.
>
> **[2:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=155)** There looks to be some seasonal variation in there as well, that we have these peaks and troughs and it looks to be a cyclical pattern in that data, but I can see some quite significant spikes.
>
> **[2:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=166)** So if we look at the profit, for example, I can see that October, 2023 was our best month and March and December also have significant spikes.
>
> **[2:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=178)** So what happened in these particular months might be of interest to me because could we recreate that month?
>
> **[3:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=185)** We'd make profits all over the place.
>
> **[3:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=188)** And in terms of losses, we can see that most of the time we have quite small losses, but there have been a couple of times where we've had significant losses.
>
> **[3:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=197)** So maybe I want to look at those in more detail, particularly when we look at our most recent months and see that all of those are dipping below the line.
>
> **[3:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=206)** In terms of sales, we can see we had one massive spike at the beginning and everything that's kind of settled down to this cyclical nature that might be interesting to see what that was.
>
> **[3:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=218)** Then when we go to our second and third charts, it's slightly easier to see because we have filtering.
>
> **[3:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=224)** I can select the data point and I can see a breakdown.
>
> **[3:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=227)** So in that early big spike in sales, most of it was due to this big order of machines.
>
> **[3:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=234)** Everything else is quite modest.
>
> **[3:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=238)** Is that going to be a one-off sale or could we do that time and time again.
>
> **[4:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=244)** If I look at my profits and look at that big spike again, a couple of one-off big sales of copiers in both the east and central region really help with that month.
>
> **[4:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=256)** If I look at my other month, again, copiers looks to be pretty good.
>
> **[4:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=261)** So overall we would assume that copiers in those two months have been quite good sellers for us.
>
> **[4:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=267)** Maybe we want to just focus on selling copiers.
>
> **[4:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=271)** Again, if I look at my poor ones, machines made a significant loss in the west on that particular month.
>
> **[4:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=278)** Machines again in that month, that doesn't look great.
>
> **[4:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=280)** And if I look at my most recent months where we had some poor sales, I can see again those machines aren't looking great.
>
> **[4:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=289)** So all of the time when we've had significant losses has been mostly down to machines, with the exception of some binders, which seems strange.
>
> **[4:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=298)** Okay, so we've identified some categories and some dates that are significant.
>
> **[5:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=303)** How do I show that in the story?
>
> **[5:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=305)** So first thing we do is create our data story and we are going to set the size of our data story.
>
> **[5:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=312)** So I'm going to fix the size so it'll fit my screen.
>
> **[5:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=315)** So I'm going to set the size to be 1200 by 700,
>
> **[5:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=324)** and now I'm going to put my dashboards in.
>
> **[5:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=325)** Now the reason we only use dashboards is 'cause the dashboard we can control the size and the layout.
>
> **[5:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=331)** So the first one is going to be to put my timeline in and we can see that I've got some scroll bars and a lot of empty space.
>
> **[5:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=340)** So I need to resize those dashboards so they'll fit within the story.
>
> **[5:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=345)** So I'm going to go back to my dashboard and when I go to size and click on the fixed size, now because it is part of a story, we have fit to story.
>
> **[5:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=356)** So if I select that size and then go back to my story, we can see that this dashboard now fits perfectly.
>
> **[6:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=363)** Okay, that's good.
>
> **[6:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=364)** So the first part of my story I want to highlight are my significant sale.
>
> **[6:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=370)** So I have my one sale here and I want to have that as a new story point.
>
> **[6:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=375)** So I'm going to click new story point at the top to save that particular view.
>
> **[6:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=381)** Next, we wanted to highlight my significant peaks and troughs in my profits.
>
> **[6:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=390)** So I'm going to highlight some of these and choose that as my next story point.
>
> **[6:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=399)** So now we need to go into a bit more detail and I'm going to need my heat maps in there as well.
>
> **[6:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=405)** So we're going to add my next one in.
>
> **[6:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=410)** So I'm going to drag that to the top of the little menu bar to show that we are adding this as a new chart.
>
> **[6:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=417)** Again, I need to go back and resize.
>
> **[7:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=421)** So change by fixed size to fit the story and add it's in there nicely.
>
> **[7:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=428)** And now I can click on that interesting month, save that as a story point, and then I'm going to highlight those machines and save that as a story point.
>
> **[7:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=442)** Okay, now repeat the same thing this time using our profit dashboard.
>
> **[7:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=447)** So I'm going to drag that to the top of the menu.
>
> **[7:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=451)** I'll go in and we'll change that to be, we are sizing.
>
> **[7:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=458)** So we change that to be fit to story.
>
> **[7:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=464)** Go back into my story.
>
> **[7:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=466)** And again, we're going to look at that particular month as a story point.
>
> **[7:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=474)** We'll look at this month as the story point, save if that's a new one.
>
> **[8:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=483)** And then I'm going to select this other high point, and actually we'll select all three of these high points to show that all of these profitable times involve copiers.
>
> **[8:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=495)** So maybe I want to highlight the copier section as well.
>
> **[8:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=502)** And now we want to do the same thing with our losses.
>
> **[8:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=506)** So again, if I select all of the times we made significant losses, again, we can see that machines tends to be the problem, but also this one individual time of binders is significantly putting things down.
>
> **[8:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=526)** So maybe let's do that as well.
>
> **[8:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=529)** Okay, so now what we have are all of these captions on our timeline across the top.
>
> **[8:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=535)** Now we have some options.
>
> **[8:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=536)** We can either write captions for each one or we could just change it to be bullet points that we can click through.
>
> **[9:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=543)** Now it depends on where we're going to present this.
>
> **[9:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=546)** Remember the where of the four Ws of good dashboards.
>
> **[9:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=550)** Where is this going to be?
>
> **[9:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=551)** If this was just going to be published onto our server and our user is going to be clicking through one by one, they're not going to know what we're talking about.
>
> **[9:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=559)** So we would have to put a caption in each one explaining what step we are at and what it's showing and what we should do next.
>
> **[9:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=567)** But for this example, we're going to present this at a meeting.
>
> **[9:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=570)** So we're actually going to be stood in the front of people clicking through one by one, so we can talk them through in the meeting.
>
> **[9:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=578)** So in that case, I don't need to have all of these captions showing.
>
> **[9:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=582)** So I can go to the layout and I can change the navigator style to either just be numbers or dots or just have the arrows.
>
> **[9:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=591)** So I think we'll go for the numbers because that's quite useful if somebody wants to jump straight back.
>
> **[9:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=597)** So we can go back to the first in our story.
>
> **[10:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=600)** And what I can do is I can present my data, I can talk within my meeting, and I can click through.
>
> **[10:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=607)** So I can say, here's all of our sales data.
>
> **[10:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=610)** As we click through step by step, I'm showing the things that I've highlighted in there.
>
> **[10:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=615)** Now, the beauty of doing a data story is that at any point somebody could want to know more information.
>
> **[10:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=622)** If we export these images out and put them into something like PowerPoint, they're are static image, but this is still within Tableau.
>
> **[10:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=632)** At any point, I can hover over the data, I can click on it and interact with it, and we can drill down to the underlying data.
>
> **[10:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=640)** It's just a Tableau dashboard, but being presented in a certain way.
>
> **[10:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=644)** This is what's really great about story points.
>
> **[10:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=647)** Not only can we tell a story, we can present the data in a nice way, but because it's a Tableau dashboard, the data is always available to us.
>
> **[10:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=657)** It really is the best of both worlds.
>
> **[11:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-data-story?u=76281980&t=660)** So give it a go.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (3), click on (3), select the (1)
> **Code Keywords:** let (3), this. (1), case, (1), static (1)
> **CLI Commands:** make (4)
> **Cross-References:** go back to (3)
> **Analogies:** for example (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Build a KPI dashboard
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=0)** - [Instructor] So let's think about what we need to do to build a KPI dashboard.
>
> **[0:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=5)** So a KPI dashboard is all about getting someone's attention.
>
> **[0:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=10)** It's going to highlight things of interest, something that you need to pay attention to.
>
> **[0:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=15)** Now in general, a KPI dashboard doesn't have any filtering and it has minimal interaction.
>
> **[0:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=21)** It's designed to make things clearly obvious where something is good or bad.
>
> **[0:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=27)** You should be able to look at a KPI dashboard at a glance and see if there's anything that needs your immediate attention rather than digging down into the data.
>
> **[0:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=34)** And often, but not always, we're comparing values to targets.
>
> **[0:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=39)** So in our example, what are we going to look at?
>
> **[0:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=41)** Well, we need to show the regional sales.
>
> **[0:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=44)** We want to compare this month to the previous month.
>
> **[0:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=48)** Want to know is the sales changing over time?
>
> **[0:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=52)** And is the most recent month better compared to the last month?
>
> **[0:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=57)** So the ultimate goal of the KPI dashboard is ourselves improving over time.
>
> **[1:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=61)** If they are, great, but if they're not, we need to do something about that.
>
> **[1:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=67)** So let's go ahead and build our dashboard using the KPI method.
>
> **[1:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=73)** So within this dashboard, I've already got a couple of sheets ready to go.
>
> **[1:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=78)** So let's build our required dashboard for the KPI.
>
> **[1:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=82)** So we're looking at regional sales.
>
> **[1:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=84)** We want to compare this month to the previous month, show sales over time.
>
> **[1:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=88)** This is the most recent month better compared to last month to see overall our sales improving.
>
> **[1:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=94)** So in our dashboard, I've already got some sheets ready made.
>
> **[1:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=97)** So we have some timelines, one for the central, one for the eastern, one for the west, and one for the southern region.
>
> **[1:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=105)** Each one is showing the weekly sales for each of those regions.
>
> **[1:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=109)** Color coded.
>
> **[1:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=111)** And the last member is labeled.
>
> **[1:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=114)** I also have some bar charts.
>
> **[1:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=117)** So each bar chart shows the most recent year's worth of sales.
>
> **[2:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=122)** And we have the 2023, so the previous year's sales showing up on the bar chart.
>
> **[2:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=130)** We also have a parameter that allows the user to select the month that they're interested in.
>
> **[2:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=135)** In this case, I'm looking at January sales.
>
> **[2:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=138)** So I'm only looking at the sales of January.
>
> **[2:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=142)** So I can see that in 2023, we made 21,000 in sales, and in 2024, it's under 6,000.
>
> **[2:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=148)** So my bar's length is the 21,000 and my black marker is my 2024 value.
>
> **[2:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=155)** So I can see are we exceeding last year or have we not quite reached last year's?
>
> **[2:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=160)** So the black part is our future sales.
>
> **[2:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=163)** We're trying to see how that compared to the previous year.
>
> **[2:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=167)** So I need to put that into a dashboard.
>
> **[2:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=171)** So the layout that I want is to have two columns.
>
> **[2:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=175)** The central bars, then the central timeline, the east and the west and the south.
>
> **[3:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=182)** So if I go into my dashboard, so I've set the size ,1200 by 700.
>
> **[3:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=187)** And I want to have two columns.
>
> **[3:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=189)** So for that, I'm going to use layout containers.
>
> **[3:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=193)** So the first thing I'm going do is put a horizontal container.
>
> **[3:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=196)** And that seems odd 'cause I want two verticals, but I need the horizontal container to hold two vertical containers.
>
> **[3:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=204)** Okay, so first of all, I'm going to put my horizontal container in and there it goes.
>
> **[3:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=209)** And I'm just going to color the background of that just so I can see it.
>
> **[3:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=214)** So let's just make it that shade of pink.
>
> **[3:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=219)** And then going to create a vertical container.
>
> **[3:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=221)** So what I'm going to do is I'm going to put a blank object inside of my container and I'm just going to change the blank object to be black.
>
> **[3:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=234)** I'm now going to put my first vertical container in and that's going to go to the left-hand side of my black object.
>
> **[3:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=239)** So you see my black object has now disappeared over to the right-hand side.
>
> **[4:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=244)** So then I'm going to put some objects inside here.
>
> **[4:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=247)** So inside here, this is my vertical container.
>
> **[4:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=250)** I'm going to order my sheets how I want them.
>
> **[4:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=253)** So I want to have the central region bar and then the central region timeline underneath it.
>
> **[4:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=263)** And then we'll have the western region timeline and the western region bar in between.
>
> **[4:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=274)** So now I've got my blank here, I'm going to put another vertical container.
>
> **[4:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=280)** I'm going to put the right hand side of my blank object.
>
> **[4:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=283)** It'll squish everything up, but that's fine 'cause we're still in the building phase.
>
> **[4:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=287)** So then I'm going to put my southern bar, my southern timeline, drag and drop that underneath it.
>
> **[4:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=297)** And then my eastern timeline and my eastern bar.
>
> **[5:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=306)** Okay, so the blank object was purely to help with the layout.
>
> **[5:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=311)** Because you are dropping empty containers onto one another, it's really hard to see which is which.
>
> **[5:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=317)** So by putting the blanks in, it allows us to see whereabouts they are within the invisible containers.
>
> **[5:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=325)** Now this blank has served its purpose, I'm just going to get rid of it.
>
> **[5:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=329)** And now my two containers will realign themselves to make maximum use of the space.
>
> **[5:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=336)** Okay, so now, we can look at tidying things up.
>
> **[5:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=340)** So the first thing I'm going to do is sort out this right-hand pane 'cause that's taken up room.
>
> **[5:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=345)** So we go back to talking about chart junk.
>
> **[5:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=349)** So I have a color legend here for region for some reason.
>
> **[5:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=352)** Well that's useless because everything's color coded and I don't need that at all.
>
> **[5:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=357)** So let's get rid of that.
>
> **[6:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=360)** The year of order date, well, I'm only interested in the past two years that's already been set, so I'm not going to interact with that at all.
>
> **[6:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=367)** So I don't need that filter control that can disappear as well.
>
> **[6:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=371)** Okay, so I've got my month here where I can select which month I'm interested in.
>
> **[6:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=378)** And if I change that, we can see that all of the charts will change to show that particular month.
>
> **[6:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=384)** Now what I want to do is have that reflected in my title for my dashboard.
>
> **[6:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=390)** So what we're going to do is I'm going to create a title and I'm going to put the month, which I've selected from my parameter inside it.
>
> **[6:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=400)** So we'll go to dashboard and show the title.
>
> **[6:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=406)** And it's called sales KPI.
>
> **[6:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=408)** Okay, it's not a unreasonable title.
>
> **[6:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=412)** And we'll say four.
>
> **[6:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=414)** And I will add the parameter value that I've selected.
>
> **[6:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=419)** So that says January.
>
> **[7:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=421)** So now whenever I select a new month, that will update to tell me what I'm looking at.
>
> **[7:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=427)** Okay, that looks good.
>
> **[7:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=429)** So what we're going to do with our little container here?
>
> **[7:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=433)** Well if I set this to float, it's just going to pop off the view.
>
> **[7:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=439)** So I could position that somewhere at the top if I wanted to.
>
> **[7:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=445)** And now I have my container, it's empty, I could remove that or we could actually make a collapsible container.
>
> **[7:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=453)** So let's undo that.
>
> **[7:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=454)** Let's put that back into the container itself.
>
> **[7:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=458)** Let me select that container and let's add a show hide button.
>
> **[7:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=465)** And now if I click on that, it will disappear.
>
> **[7:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=470)** That's good.
>
> **[7:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=471)** So let's put that up to the top right.
>
> **[7:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=474)** So that if somebody wants to click on there, they can do.
>
> **[7:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=477)** Okay, so how's that looking so far?
>
> **[8:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=480)** It's looking pretty good.
>
> **[8:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=481)** And actually, I quite like that background.
>
> **[8:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=483)** I think I might keep that.
>
> **[8:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=485)** Adds a bit of interest.
>
> **[8:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=487)** Now at this point, we're purely looking at changing anything that we don't like any formatting, any filter in to get the nice clean dashboard that we want.
>
> **[8:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=499)** So I'm happy with my timelines at the moment.
>
> **[8:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=503)** I've got some empty white space there, which I'm not necessarily sure that I want.
>
> **[8:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=506)** So I'm going to click on layout.
>
> **[8:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=510)** And what we could do is we could change the underlying color of the worksheet if we wanted to.
>
> **[8:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=515)** So we could go to worksheet, we could format, we could go to shading and we could set that to none.
>
> **[8:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=523)** So that actually disappears.
>
> **[8:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=524)** So that might be quite good.
>
> **[8:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=528)** So let's go ahead and do that for all of my sheets.
>
> **[8:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=531)** So set those two worksheet to none.
>
> **[8:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=535)** So that disappears.
>
> **[8:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=538)** And we do it for all four to keep it consistent.
>
> **[9:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=543)** Okay, so we have a central header here.
>
> **[9:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=546)** We don't need the central timeline header.
>
> **[9:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=548)** So I'm going to get rid of my titles for my timelines because I know their timelines.
>
> **[9:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=553)** So let's get rid of those.
>
> **[9:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=554)** So I can right-click hide all of those.
>
> **[9:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=560)** I don't need my sales axis because I have the most recent one labeled.
>
> **[9:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=565)** So I'm going to untick show header all of the sales axis for each one of my timelines.
>
> **[9:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=572)** And you can see that that clears out quite a bit of space because we haven't got the axes anymore.
>
> **[9:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=582)** These lines that were tied to the axes are kind of superfluous, so I don't need those.
>
> **[9:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=586)** I'm going to go to format workbook and grid lines.
>
> **[9:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=591)** I'm going to set two off.
>
> **[9:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=594)** So all the grid lines will now completely disappear.
>
> **[9:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=598)** And in actual fact, because we are limited on space, I'm going to get rid of the axis for my timeline as well because if I want to know a particular date, I could always just hover over it.
>
> **[10:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=613)** So let's right-click and get rid of all of those.
>
> **[10:17](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=617)** So now we've made maximum use of all of the space we've got available to us, and that's all good.
>
> **[10:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=623)** Any other thing I've got is my dotted line there and I don't really need that either.
>
> **[10:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=626)** So my zero line, let's turn that off as well.
>
> **[10:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=633)** And there we go.
>
> **[10:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=634)** A nice clean KPI dashboard.
>
> **[10:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=638)** It's showing us one particular month, it's showing us the timeline so we can see the weekly sales for all of our different regions.
>
> **[10:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=646)** I can compare each region individually.
>
> **[10:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=648)** And I can see the two values for the most recent two years, and I can change that through for a particular month.
>
> **[10:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=656)** What this lets me do is at a glance, see is there anything I need to look at?
>
> **[11:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=662)** Is there anything going up?
>
> **[11:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=663)** Is there anything going down or can I go and get a coffee?
>
> **[11:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/build-a-kpi-dashboard?u=76281980&t=667)** And after all, isn't that the most important question a KPI dashboard should answer?

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), case, (1)
> **UI Navigation:** go to (4), click on (3), right-click (2), select the (1), drag and drop (1)
> **Env Vars:** kpi (10)
> **CLI Commands:** make (4)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Design for tablets and mobiles
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=0)** - [Speaker] One possible thing we might have to consider is what kind of device your dashboard is going to be viewed on.
>
> **[0:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=7)** This is the where part of the four Ws of good dashboard design.
>
> **[0:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=11)** Now knowing where your dashboard is going to be viewed is really critical because that determines how much real estate we've got to play with.
>
> **[0:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=21)** If you are certain that your dashboard is only going to be used on a desktop monitor, you know you've got a pretty good idea of the sort of space you've got.
>
> **[0:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=30)** It's going to be probably a widescreen monitor, it might be HD.
>
> **[0:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=33)** You've got a fixed size and it's going to be the biggest view you can have.
>
> **[0:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=38)** So in this dashboard, for example, it's 1000 by 700, that's going to fit comfortably on somebody's screen.
>
> **[0:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=45)** However, if you're publishing to a wider audience, either within your organization or certainly externally to the general public, they might be viewing on a bigger screen, a smaller screen.
>
> **[0:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=58)** They might be looking at it on their phone or their tablet.
>
> **[1:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=61)** So if that's the case, we need to add custom layouts to make sure that the dashboard is going to look good.
>
> **[1:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=68)** Now, fortunately, Tableau allows us to do that quite easily.
>
> **[1:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=71)** We have the option to preview what our dashboards going to look like on different size devices and at different screen sizes.
>
> **[1:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=79)** So let's have a look at that.
>
> **[1:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=80)** Now, this dashboard is currently fixed at 1000 by 700.
>
> **[1:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=85)** It's an exploratory dashboard.
>
> **[1:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=86)** We've got some filters and we've got some heat maps, maps, timeline, and our customer scatter plot.
>
> **[1:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=93)** And there's not a lot of information being shown above and beyond the visualizations themselves.
>
> **[1:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=99)** If we're interacting with the dashboard on our desktop, I've got a mouse and I can hover over to get more information.
>
> **[1:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=106)** I might be able to click on a particular state and I can filter down.
>
> **[1:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=111)** There's some interaction and I have some filters that I can interact with as well.
>
> **[1:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=117)** But how is this going to work on a smaller device?
>
> **[2:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=121)** So what we can do is we can click on device preview at the top-left hand and we can see what this is going to look like on different size screens.
>
> **[2:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=129)** I've now got the option to flick through and see how this dashboard is going to react when it gets resized.
>
> **[2:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=136)** So on a desktop, which on this one has default desktop monitor of 1920 by 1080p so it's not a huge monitor, but pretty standard.
>
> **[2:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=148)** We can see that my dashboard's going to fit comfortably and there's going to be quite a lot of gray area around there.
>
> **[2:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=154)** Now if I wanted to, I could add a desktop layout to make sure that when it's viewed on a screen that big, my dashboard's going to expand to fill that view.
>
> **[2:43](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=163)** Now generally, a bigger screen with a smaller visualization inside it, it's perfectly acceptable 'cause you can still see everything in there.
>
> **[2:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=173)** So it's not quite as critical going from a small dashboard to a bigger screen.
>
> **[2:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=177)** However, what about if we had a much smaller screen?
>
> **[3:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=181)** Well, let's have a look.
>
> **[3:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=184)** If we were looking on a tablet, for example, see what happens.
>
> **[3:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=191)** So this is just using a generic tablet with a resolution of 1024 by 768.
>
> **[3:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=196)** So my dashboard is actually taller than that screen.
>
> **[3:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=200)** So annoyingly, if I viewed it on a tablet that had that kind of screen resolution, my dashboard is going to be hanging off the bottom and that's not going to look too good.
>
> **[3:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=208)** We've got some other options with other different sides that we can also test it against.
>
> **[3:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=213)** Now what I can do is I can add a tablet layout.
>
> **[3:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=219)** What this will do is that if I'm viewing this dashboard with a tablet or any other screen that matches that resolution, this is the one that's going to be used.
>
> **[3:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=230)** So if I add a tablet layout, we can see that I now have a default layout, which is my full size, my 1000 by 700.
>
> **[4:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=240)** Now I have a tablet layout.
>
> **[4:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=242)** Now by default, Tableau will resize to fit all my elements inside.
>
> **[4:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=247)** Now if I don't want to do that, I can change that, but in this case, it's done a reasonable job.
>
> **[4:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=252)** I can see now however, that I've got some gaps in here.
>
> **[4:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=256)** So I don't want to see that scroll bar.
>
> **[4:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=259)** So I'm going to get rid of my quantity legend.
>
> **[4:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=261)** So now, I've got a bit more space in there.
>
> **[4:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=264)** Okay, so if I flick back to look at default, you see that the legend, because I've got enough room, does actually still sit there.
>
> **[4:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=272)** Now that legend isn't actually very much used in either case, but the principle of having different elements that works.
>
> **[4:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=279)** So if I go back to my tablet, everything else fits pretty well because the tablet is kind of the same shape and size as my original dashboard.
>
> **[4:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=289)** If we switch it over to portrait mode, again, it seems to scale and fit, not too bad.
>
> **[4:55](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=295)** Might have to resize a little bit to get everything in.
>
> **[4:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=299)** We can see that my map has kind of gone a bit small because of the orientation, but overall, that's not too bad.
>
> **[5:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=306)** Okay, but what about if we were to look on a phone?
>
> **[5:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=311)** So if I look for phone, and again, we have the option of selecting some different phone sizes to get an idea of what they would look like on different size phones.
>
> **[5:21](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=321)** So if I select one of these ones where the resolution is obviously taller than it is wider, we can see that tablet automatically puts it into a long tool dashboard for me.
>
> **[5:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=334)** Now I can edit this if I want to.
>
> **[5:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=336)** So I can say yes, and now this is unlocked and I have some options.
>
> **[5:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=342)** So I could show it at the default size, but obviously, that's going to look terrible.
>
> **[5:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=348)** We could get it so that all of the content fits inside one screen without scrolling, or we can fit it to the width and then let the height adjust accordingly.
>
> **[5:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=358)** Now it depends on what's more important for you to have.
>
> **[6:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=363)** Now in my case, having the map, do I actually want that in the phone layout?
>
> **[6:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=370)** There's not a lot of information in that map unless I hover over it or select it.
>
> **[6:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=375)** But trying to hover over and select some of these small regions or small state is really hard to do with your finger.
>
> **[6:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=382)** So in actual fact, I think I'm going to remove the phone from the mobile layout.
>
> **[6:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=387)** It's actually not that useful.
>
> **[6:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=391)** I've got two filters, so they're currently at the top of my view.
>
> **[6:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=396)** Does that make sense? Possibly.
>
> **[6:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=398)** I think if we set the filters first before we start looking at the data, that kind of makes sense from going through.
>
> **[6:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=405)** That's okay.
>
> **[6:46](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=406)** So the first thing I see is going to be my profit heat map.
>
> **[6:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=410)** Okay, that looks like that could be okay.
>
> **[6:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=414)** I have my profit timeline and then my scatterplot a legend down here again at the bottom.
>
> **[6:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=419)** Let's get rid of that. That's not really helping and that doesn't look too bad.
>
> **[7:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=425)** Again, we have the same problem with the scatterplot that if I hover over, it's going to be really hard to select individuals.
>
> **[7:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=432)** So maybe we'll get rid of the scatterplot as well.
>
> **[7:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=435)** Okay, so how would that look if we did do the fit all now, does that still fit?
>
> **[7:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=440)** Do you know what? Possibly, if I get rid of the profit heat map title and the timeline, we could actually fit all of the information into one single view.
>
> **[7:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=452)** Why scroll if we don't have to?
>
> **[7:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=454)** Okay, I'm quite happy with that.
>
> **[7:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=456)** So let's go back.
>
> **[7:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=457)** So if I now look at my tablet, my default layout, we can see that default layout is still fixed at that 1,700.
>
> **[7:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=468)** The tablet is now size to fit that generic tablet, and I've now got a vertical orientation that will now fit this phone layout.
>
> **[7:58](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=478)** But notice, the phone layout only has two sheets.
>
> **[8:02](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=482)** The tablet and the default have four.
>
> **[8:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=485)** And the phone layout, I got rid of all the headings.
>
> **[8:08](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=488)** What Tableau actually does is it keeps track of all the elements for each different device and only shows them in there.
>
> **[8:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=496)** But importantly, I still only got one single dashboard.
>
> **[8:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=500)** I haven't got multiple dashboards that I need to maintain.
>
> **[8:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=504)** What Tableau does is it does it all for me.
>
> **[8:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=506)** So any changes that I make are going to be reflected across all of those charts.
>
> **[8:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=510)** So for example, if I said, "Do you know what?
>
> **[8:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=513)** I'm not going to have my axis, we'll get rid of that."
>
> **[8:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=518)** This is still going to be there in all of my other sheets because I've made the change at that sheet level and that has now changed across all of them.
>
> **[8:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=528)** That's really useful.
>
> **[8:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=530)** We can have a dashboard that looks good across different devices at different sizes, but from our point of view, as a creator, I've only got one dashboard to maintain.
>
> **[9:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/design-for-tablets-and-mobiles?u=76281980&t=540)** I'd call that a win-win.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), case, (4), default, (2), public (1), switch (1)
> **CLI Commands:** make (4)
> **Analogies:** for example (3)
> **UI Navigation:** click on (2)
> **Cross-References:** go back to (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [speaker] (1)

#### Challenge: Dashboard styles
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-dashboard-styles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-dashboard-styles?u=76281980&t=0)** (upbeat techno music)
>
> **[0:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-dashboard-styles?u=76281980&t=5)** - [Narrator] Here's a challenge to practice dashboard styles and layouts.
>
> **[0:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-dashboard-styles?u=76281980&t=10)** So, we're going to use the Landon Hotel dashboard and we're going to modify it to fit different screens.
>
> **[0:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-dashboard-styles?u=76281980&t=15)** We're going to create a dashboard for a laptop screen, okay?
>
> **[0:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/challenge-dashboard-styles?u=76281980&t=19)** One for a wide screen monitor, a dashboard for a tablet, dashboard for a mobile, and in all cases, remove and rearrange the elements as required.

> [!info]- Semantic Content
>
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat techno music) (1)

#### Solution: Dashboard styles
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=0)** (upbeat energetic music)
>
> **[0:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=5)** - [Instructor] Here's my solution to the dashboard style challenge.
>
> **[0:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=9)** Now we just take this starting dashboard and create four different views.
>
> **[0:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=13)** One that will work on a laptop, one that will work on a widescreen monitor, one for a tablet, and one for a mobile.
>
> **[0:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=19)** So for that, we're going to make use of the device preview.
>
> **[0:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=23)** Now, we can have up to four different layouts, which is quite good 'cause we need four for our purposes.
>
> **[0:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=31)** But we have to think about it in a slightly odd way.
>
> **[0:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=35)** And it all comes down to the options that we have for sizing.
>
> **[0:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=39)** When we add a device layout, whether it's for a desktop, a tablet, or a phone, we only have a finite set of size that we can select.
>
> **[0:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=49)** So we have to pick those very carefully.
>
> **[0:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=52)** So what I'm going to do is I'm first going to add the different layouts, and we'll then go back and size them to be in the correct order that we need for our example.
>
> **[1:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=63)** So I'm going to select device preview.
>
> **[1:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=66)** So we have the default desktop, tablet, and phone.
>
> **[1:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=69)** So if I go to desktop, we can see I've got a selection of different sizes.
>
> **[1:15](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=75)** So I have a medium desktop, I have a large, a generic, or a specific one for an iPad Pro.
>
> **[1:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=83)** So if I want to use the generic desktop monitor, that's obviously much bigger than what my default dashboard was.
>
> **[1:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=91)** So the desktop one is going to become our widescreen monitor view.
>
> **[1:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=96)** So I'm going to add a desktop layout.
>
> **[1:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=99)** So now I have my desktop layout.
>
> **[1:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=100)** That's going to be my biggest one.
>
> **[1:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=102)** My default one is actually going to be my laptop screen.
>
> **[1:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=108)** We then add a tablet layout and we can pick, again, different size tablets.
>
> **[1:53](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=113)** I'm going to stick with this generic sized one.
>
> **[1:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=116)** Add the tablet layout, and then we have the phone one as well.
>
> **[2:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=120)** And again, we have a selection of different sizes that we can pick if we want to.
>
> **[2:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=124)** So I'm just going to go for... Let's go for this one.
>
> **[2:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=130)** And now this is going to be my phone sized layout.
>
> **[2:12](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=132)** So I have my four different sizes.
>
> **[2:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=134)** The desktop is the biggest one.
>
> **[2:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=136)** That's going to be my wide screen monitor.
>
> **[2:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=138)** Default is going to be my laptop, and then my tablet, and my phone.
>
> **[2:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=144)** So if I go to my desktop one, this is going to be my largest screen.
>
> **[2:29](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=149)** And we can see that when we view my current sized dashboard, it's going to have some scroll bars around it.
>
> **[2:37](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=157)** So I've got some options here.
>
> **[2:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=159)** I can use the tell tablet to fit all the available space and resize everything, or we can stick with default, or maybe I want to change it to be slightly wider, but if I do fit all, let's see what happens.
>
> **[2:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=171)** Okay, so it all zooms out to fill the space.
>
> **[2:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=174)** So, my timeline, okay, I've got more space for that, that's not too bad.
>
> **[2:59](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=179)** My scatterplot, again, using up a bit more space, that all looks okay.
>
> **[3:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=185)** I'm not too keen on the heat maps because my font actually is quite small considering the size of the screen I'm now looking at.
>
> **[3:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=193)** And the problem is I can't change the font just for this particular layout.
>
> **[3:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=199)** It's a universal form.
>
> **[3:20](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=200)** And if I try to go to formatting, we see it's not available to change.
>
> **[3:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=206)** If I make a change to that font, how's it going to look on my other devices?
>
> **[3:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=210)** But if I go to the default layout, and if I then go to the format, select one of my charts, go to the font.
>
> **[3:40](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=220)** If I change that font size to make it bigger, it's now too big for my default screen, although on my desktop it would actually work.
>
> **[3:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=234)** So in that case, filling out that entire desktop view is probably not the thing to do.
>
> **[4:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=240)** So I'm going to undo those changes, go back to my original size of my fonts, go back to my desktop.
>
> **[4:10](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=250)** I don't think fit all is really going to work.
>
> **[4:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=253)** So fit width, we could make it slightly wider than our original, to make up a little bit more room and find that kind of sweet spot where we're making it wider to make full width.
>
> **[4:27](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=267)** And maybe that's what we'll just have to go with.
>
> **[4:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=270)** So that's our widescreen monitor sized.
>
> **[4:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=274)** We go back to the default.
>
> **[4:35](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=275)** Now, this is the one that we want to fit to a laptop.
>
> **[4:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=279)** So at the moment it's 1200 by 600.
>
> **[4:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=281)** So if I go down to the fixed size, let's pick the laptop browser, 800 by 600, everything all shrinks up.
>
> **[4:52](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=292)** Now, the problem I've got there is that now these are too small to read, and, my... Oh, dear.
>
> **[5:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=301)** Now it doesn't look great either.
>
> **[5:03](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=303)** Okay, so my bar chart has not got enough room now because of the size.
>
> **[5:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=309)** So actually I think what we might do is we might remove that from our dashboard.
>
> **[5:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=314)** Okay, that's better.
>
> **[5:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=316)** So we couldn't see the bars anyway, they were too small.
>
> **[5:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=319)** If we remove them, I can now see my numbers easier and everything fits that bit better.
>
> **[5:24](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=324)** Okay, that's good.
>
> **[5:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=325)** We'll stick with that for my default layout, my desktop has to give it up as well, because if it's not part of the default, it can't be part of there unless we select custom.
>
> **[5:38](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=338)** So in actual fact, we'll go to custom layout and then I can add in whatever I want.
>
> **[5:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=345)** So let's undo those changes.
>
> **[5:48](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=348)** Let's put that back in there.
>
> **[5:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=350)** I go to desktop and then do custom.
>
> **[5:54](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=354)** We now should be able to remove our product orders from our default layout.
>
> **[6:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=361)** If I go back to my original, it still removes it.
>
> **[6:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=365)** Okay, we're just going to have to live with that.
>
> **[6:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=367)** If it's a real problem, we could put it back in if we wanted to.
>
> **[6:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=371)** So my product quantities... But I think we're just going to have to leave it as is because the screen size is so much different.
>
> **[6:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=379)** So let's go to my tablet.
>
> **[6:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=382)** So again, my tablet now takes on the default values.
>
> **[6:25](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=385)** And actually that seems to fit quite well because the tablet is actually slightly bigger than my laptop screen.
>
> **[6:32](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=392)** Okay, that looks fine.
>
> **[6:33](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=393)** Let's have a look at the phone.
>
> **[6:36](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=396)** So by default, Tableau has locked the layout for me, but I'm going to edit it.
>
> **[6:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=401)** Let's have a little look.
>
> **[6:42](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=402)** So that looks okay.
>
> **[6:45](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=405)** That looks okay.
>
> **[6:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=407)** Okay.
>
> **[6:49](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=409)** Seems to have done quite a reasonable job.
>
> **[6:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=411)** Now, the thing about a tablet, and a phone layout is you don't have a mouse.
>
> **[6:56](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=416)** And one of the problems that I have is that my scatterplot doesn't have good labeling.
>
> **[7:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=421)** The only way I know what one of them is, is to hover over it or click on it.
>
> **[7:06](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=426)** But because of the space, it's going to be really frustrating to have to click some of these points that are really close together.
>
> **[7:13](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=433)** So in actual fact, I think I'm going to remove that from my phone layout.
>
> **[7:18](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=438)** So now I've just got my two grids, and my timeline.
>
> **[7:22](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=442)** Now, annoyingly, my timeline doesn't quite fit.
>
> **[7:26](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=446)** So what happens if we do fit all?
>
> **[7:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=450)** Okay, so on that particular device, it actually seems to resize just about to within one single screen size.
>
> **[7:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=459)** And hopefully it'll still be readable.
>
> **[7:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=461)** So there we've got a dashboard, that will look good on the phone, fit one on a tablet.
>
> **[7:50](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=470)** We'll take up all the available space on a big dashboard, and will look good on a laptop.
>
> **[7:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/solution-dashboard-styles?u=76281980&t=477)** One single dashboard, four different views that just display great wherever they're looked at.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), default, (3), for. (1), case, (1), default. (1)
> **UI Navigation:** go to (9), click on (1)
> **CLI Commands:** make (6), find (1)
> **Cross-References:** go back to (4)
> **Code Identifiers:** ipad (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat energetic music) (1)


### Conclusion: Continuing Your Tableau Dashboard Learning Journey

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps and additional resources
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/next-steps-and-additional-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/next-steps-and-additional-resources?u=76281980&t=0)** - [Instructor] Congratulations on completing the course, but what are you going to do next?
>
> **[0:04](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/next-steps-and-additional-resources?u=76281980&t=4)** It's always a good idea to learn some more.
>
> **[0:07](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/next-steps-and-additional-resources?u=76281980&t=7)** So if you want to learn more, check out this Complete Guide to Tableau.
>
> **[0:11](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/next-steps-and-additional-resources?u=76281980&t=11)** It goes into detail on every aspect of Tableau, from connecting to data, analyzing, visualizing, and sharing.
>
> **[0:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/next-steps-and-additional-resources?u=76281980&t=19)** If you want to know more visualization tips and tricks, check out this course, where we look at some of the different ways that we can visualize data and create different chart types.
>
> **[0:28](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/next-steps-and-additional-resources?u=76281980&t=28)** But most of all, practice.
>
> **[0:31](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/next-steps-and-additional-resources?u=76281980&t=31)** Practice is the best way to get good at Tableau.
>
> **[0:34](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/next-steps-and-additional-resources?u=76281980&t=34)** So find some data and visualize it.
>
> **[0:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/next-steps-and-additional-resources?u=76281980&t=39)** Join some of the community events that are out there in the Tableau Community.
>
> **[0:44](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/next-steps-and-additional-resources?u=76281980&t=44)** So here's a short list of some of the community events that go on regularly within the Tableau Community.
>
> **[0:51](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/next-steps-and-additional-resources?u=76281980&t=51)** We have Makeover Monday, where a new data set is produced every single Monday, and you can visualize it to do a better makeover of the original visualization.
>
> **[1:01](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/next-steps-and-additional-resources?u=76281980&t=61)** This is a superb way of just grabbing some interesting data.
>
> **[1:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/next-steps-and-additional-resources?u=76281980&t=65)** There's years and years worth of data there that you can just download, interact with, and play with, and try out some of the things that you've learned.
>
> **[1:14](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/next-steps-and-additional-resources?u=76281980&t=74)** Work out Wednesday has some quite good challenges for you to try and flex your data viz muscles.
>
> **[1:19](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/next-steps-and-additional-resources?u=76281980&t=79)** Sports Viz Sunday, if you like your sports, that's the one to go with.
>
> **[1:23](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/next-steps-and-additional-resources?u=76281980&t=83)** But there are also Data + Movies, Data + TVs, lots of community topics that you can pick up on.
>
> **[1:30](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/next-steps-and-additional-resources?u=76281980&t=90)** Back 2 Viz Basics and Iron Quest also will help you learn and practice and give you challenges so you can get better and better with Tableau.
>
> **[1:39](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/next-steps-and-additional-resources?u=76281980&t=99)** Go to Tableau Public.
>
> **[1:41](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/next-steps-and-additional-resources?u=76281980&t=101)** Tableau Public has got a fantastic resource of other visualizations that people have created.
>
> **[1:47](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/next-steps-and-additional-resources?u=76281980&t=107)** So log on there, browse it, and if you see something that you think looks really good, you can download that dashboard and reverse-engineer it to see how they did it.
>
> **[1:57](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/next-steps-and-additional-resources?u=76281980&t=117)** And join the Tableau DataFam.
>
> **[2:00](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/next-steps-and-additional-resources?u=76281980&t=120)** You can either go on the Tableau Community Forum or on any of the social media platforms.
>
> **[2:05](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/next-steps-and-additional-resources?u=76281980&t=125)** Just search out for the hashtag #tableau and #datafam.
>
> **[2:09](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/next-steps-and-additional-resources?u=76281980&t=129)** If you need help, guidance, or just want to share your work, use these and you'll find like-minded people there just eager to help you.
>
> **[2:16](https://www.linkedin.com/learning/creating-interactive-tableau-dashboards-25827168/next-steps-and-additional-resources?u=76281980&t=136)** I'm so excited that you've taken your first step to joining the Tableau Community, and thank you for looking for this course.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Code Keywords:** public (2)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Matt Francis]]

## Resources

- Exercise files available

## Skills Covered

- Tableau
- Data Analysis
- Dashboards
- Analytics
- Data Analytics
- Data Visualization

## Path Context

### In [[Develop Your Tableau Skills]]
← [[Complete Guide to Tableau for Data Scientists]] | **3 of 4** | [[Tableau and R for Analytics Projects]] →

## Appears In

- [[Develop Your Tableau Skills]]

## Related Courses

_Courses sharing skills:_

- [[Complete Guide to Tableau for Data Scientists]] — Data Analytics, Data Visualization, Tableau
- [[Tableau Essential Training]] — Data Analytics, Data Visualization, Tableau
- [[Learning Power BI Desktop]] — Data Analysis, Data Analytics, Data Visualization
- [[Advanced Python in Excel- Data Analysis and Visualization]] — Data Analysis, Data Visualization
- [[Tableau 2024.1- Essential Training]] — Data Analysis, Tableau

---

[↑ Back to top](#)