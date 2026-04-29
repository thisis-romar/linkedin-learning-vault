---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-power-bi-custom-visuals-with-d3-js
url: "https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js"
duration_minutes: 218
duration: 3h 38m
level: Advanced
updated: 5/6/2021
learners: 22708
skills:
  - D3.js
  - Microsoft Power BI
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQE51N9VyMW78g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1619811804272?e=2147483647&amp;v=beta&amp;t=KaytQ8GK6AKu9vBw29OeSFAeiJAfF9Q2y1mVvFIGA04"
linkedin_topic: Data Science
learning_paths:
  - '[[Master Dashboards and Data Viz in Power BI]]'
prev_courses:
  - '[[Power BI Data Dashboards]]'
next_courses:
  - '[[Power BI Challenges- 15 Skills-Building Analytics Exercises for Data Professionals]]'
path_nav: '[{"path":"Master Dashboards and Data Viz in Power BI","position":4,"total":6,"prev":"Power BI Data Dashboards","next":"Power BI Challenges- 15 Skills-Building Analytics Exercises for Data Professionals"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/d3-js
  - skill/microsoft-power-bi
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Advanced%20Power%20BI%20Custom%20Visuals%20with%20d3.js.md)

![Advanced Power BI Custom Visuals with d3.js](https://media.licdn.com/dms/image/v2/C560DAQE51N9VyMW78g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1619811804272?e=2147483647&amp;v=beta&amp;t=KaytQ8GK6AKu9vBw29OeSFAeiJAfF9Q2y1mVvFIGA04)

# Advanced Power BI Custom Visuals with d3.js

> Power BI is rapidly becoming one of the most popular reporting and visualization tools and is a great way for non-technical users to build their own reports and data visualizations. However, Power BI comes with a rather limited set of standard visuals, and creating custom visuals can be a daunting process, one that requires JavaScript or TypeScript programmers. In this course, Emma Saunders shows 

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js) | 3h 38m | Advanced | 23K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (4 videos)
- **[[#2. 1. Set Up Your Environment]]** (3 videos)
- **[[#3. 2. Understand the File Setup]]** (2 videos)
- **[[#4. 3. Build a KPI Box Visual Using "Single" Data]]** (14 videos)
- **[[#5. 4. Build a Scatter Chart Using "Categorical" Data]]** (6 videos)
- **[[#6. 5. Convert to a Bubble Chart with Group by Data]]** (7 videos)
- **[[#7. Conclusion]]** (1 videos)

### 1. Introduction

#### Intro to Microsoft Power BI
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/intro-to-microsoft-power-bi?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/intro-to-microsoft-power-bi?u=76281980&t=0)** - [Emma] Welcome to this course on Power BI Custom Visuals.
>
> **[0:04](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/intro-to-microsoft-power-bi?u=76281980&t=4)** In this course, you will learn how to create a custom visual, which can be uploaded into Power BI alongside the standard set of visuals you can see on the right-hand side.
>
> **[0:14](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/intro-to-microsoft-power-bi?u=76281980&t=14)** This little one here is a custom visual.
>
> **[0:17](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/intro-to-microsoft-power-bi?u=76281980&t=17)** Users can then drag and drop your visual onto the canvas, as has happened here, and link data to it just as they can with a standard visual.
>
> **[0:26](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/intro-to-microsoft-power-bi?u=76281980&t=26)** Power BI is a highly visual reporting tool from Microsoft.
>
> **[0:30](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/intro-to-microsoft-power-bi?u=76281980&t=30)** It's intended for non-technical users to build their own reports.
>
> **[0:34](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/intro-to-microsoft-power-bi?u=76281980&t=34)** But if your users need a visual that doesn't come as standard, and there are only about 20 of those, they might want you to create one for them.
>
> **[0:43](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/intro-to-microsoft-power-bi?u=76281980&t=43)** This programming course will show you how, so let's get started.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Code Keywords:** let (1)
> **UI Navigation:** drag and drop (1)
> **Speakers:** - [emma] (1)

#### Who this course is for
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/who-this-course-is-for?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/who-this-course-is-for?u=76281980&t=0)** - [Instructor] This course is for programmers who can already create a data visualization on the web using D3.js.
>
> **[0:07](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/who-this-course-is-for?u=76281980&t=7)** We will be using D3 version 4, which is really similar to version 5.
>
> **[0:11](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/who-this-course-is-for?u=76281980&t=11)** But if you're used to using D3 version 3, you might find some commands are slightly different.
>
> **[0:17](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/who-this-course-is-for?u=76281980&t=17)** As well as D3, you need to know TypeScript, or at least JavaScript in order to take this course.
>
> **[0:24](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/who-this-course-is-for?u=76281980&t=24)** You're also going to need to use the command prompt or terminal if you're on a Mac, to download efficiently the 6,000 files needed for each custom visual.
>
> **[0:34](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/who-this-course-is-for?u=76281980&t=34)** And finally, you will also be using both JSON and LESS files in this course.
>
> **[0:39](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/who-this-course-is-for?u=76281980&t=39)** LESS is similar to CSS, it's a style sheet.
>
> **[0:42](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/who-this-course-is-for?u=76281980&t=42)** You don't need to be terribly familiar with JSON or LESS, by the way, if you're a programmer, you'll be able to figure these out on the fly.
>
> **[0:50](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/who-this-course-is-for?u=76281980&t=50)** I'm going to be using VS code in this course.
>
> **[0:53](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/who-this-course-is-for?u=76281980&t=53)** You can use any text editor you like, but I recommend code because it's free, it works on Macs and PCs, and it's great with TypeScript.
>
> **[1:01](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/who-this-course-is-for?u=76281980&t=61)** And I'm going to be using the terminal window that you can see on the bottom right from here which is great, because it always opens you at the right folder.

> [!info]- Semantic Content
>
> **Env Vars:** less (3), json (2), css (1)
> **Tools:** terminal (2), command prompt (1), vs code (1)
> **Versions:** version 4 (1), version 5 (1), version 3 (1)
> **Analogies:** similar to (2)
> **File Paths:** d3.js (1)
> **CLI Commands:** find (1)
> **Code Keywords:** finally, (1)
> **Speakers:** - [instructor] (1)

#### What is Power BI?
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-power-bi?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-power-bi?u=76281980&t=0)** - [Instructor] Power BI is a Microsoft software that lets non-technical users create highly visual reports.
>
> **[0:06](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-power-bi?u=76281980&t=6)** It's a competitive product to Tableau and QlikView.
>
> **[0:10](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-power-bi?u=76281980&t=10)** Typically Power BI publishes reports to the web whether that's cloud-based or your company's own reporting software.
>
> **[0:17](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-power-bi?u=76281980&t=17)** Now there are two kinds of Power BI and the differences are quite significant.
>
> **[0:21](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-power-bi?u=76281980&t=21)** One is a web-based software called Power BI Service and the other is a free desktop application called Desktop.
>
> **[0:29](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-power-bi?u=76281980&t=29)** Now, if you're manipulating your data that really needs to be done in Desktop but if you're previewing and debugging your custom visual that must be done in Service.
>
> **[0:38](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-power-bi?u=76281980&t=38)** We will only be using Power BI Service in this course, partly because desktop doesn't work on Macs but mainly because debugging is essential to developing a visual.
>
> **[0:47](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-power-bi?u=76281980&t=47)** Power BI let's users match up data with visuals.
>
> **[0:51](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-power-bi?u=76281980&t=51)** Users can resize, move and reformat their visuals easily.
>
> **[0:55](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-power-bi?u=76281980&t=55)** They can convert one type of graphic to another by just clicking on a different visual in this visualizations pane.
>
> **[1:02](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-power-bi?u=76281980&t=62)** As well as reports, Power BI lets users pin certain visuals to dashboards so they can check all their data in one place.
>
> **[1:10](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-power-bi?u=76281980&t=70)** And also Power BI offers visual cross filtering by default.
>
> **[1:14](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-power-bi?u=76281980&t=74)** So instead of filtering through a series of check boxes and drop downs, users can just click on a pie chart segment to create a filter.
>
> **[1:23](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-power-bi?u=76281980&t=83)** Being a Microsoft product, Power BI connects easily to PowerPoint, Outlook and Teams, as well as letting you create PDFs and so forth.
>
> **[1:32](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-power-bi?u=76281980&t=92)** Users can subscribe to a report which means they get an email every hour, day or week, showing their report as an attachment.
>
> **[1:40](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-power-bi?u=76281980&t=100)** They can also get an email whenever the data change which is perhaps more useful or they can create a PowerPoint presentation in a single click from their report.
>
> **[1:50](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-power-bi?u=76281980&t=110)** Both kinds of Power BI empower non-technical users to build reports.
>
> **[1:55](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-power-bi?u=76281980&t=115)** When I started working in the old days, teams of IT people would be in charge of reporting as well as data.
>
> **[2:02](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-power-bi?u=76281980&t=122)** Over the years, there was a bit of separation.
>
> **[2:05](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-power-bi?u=76281980&t=125)** So database creation remained the remit of IT, but report building became a business analyst activity.
>
> **[2:13](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-power-bi?u=76281980&t=133)** Power BI represents another step in this process and it's not alone in that.
>
> **[2:16](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-power-bi?u=76281980&t=136)** But this final step, perhaps final step, is where the IT is building the database, but building it to be highly accessible by different forms of software.
>
> **[2:26](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-power-bi?u=76281980&t=146)** And that can now be exposed that database to anyone on the business side for them to just drag and drop their reports together.
>
> **[2:32](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-power-bi?u=76281980&t=152)** Reports have become quick to build and easy to change, light years from where we started.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **Code Keywords:** let (1), default. (1)
> **UI Navigation:** click on (1), drag and drop (1)
> **Speakers:** - [instructor] (1)

#### What is a custom visual?
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-a-custom-visual?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-a-custom-visual?u=76281980&t=0)** - [Instructor] So what is a Custom Visual?
>
> **[0:03](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-a-custom-visual?u=76281980&t=3)** In literal terms a custom visual in Power BI is a dot Pbiviz file.
>
> **[0:08](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-a-custom-visual?u=76281980&t=8)** Behind the scenes before it's compiled, the custom visual is about 6,000 files, all organized in a particular way.
>
> **[0:16](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-a-custom-visual?u=76281980&t=16)** This folder called circle card represents all the files behind one visual that's called circle card.
>
> **[0:22](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-a-custom-visual?u=76281980&t=22)** Now the good news is you only need to edit about five of these files to make your visual.
>
> **[0:27](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-a-custom-visual?u=76281980&t=27)** The files you will need to change are JSON and TypeScript, and maybe some less files.
>
> **[0:33](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-a-custom-visual?u=76281980&t=33)** So these 6,000 files compile into a single Pbivis file which is the format that Power BI accepts.
>
> **[0:40](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-a-custom-visual?u=76281980&t=40)** So let's take a look at Power BI.
>
> **[0:43](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-a-custom-visual?u=76281980&t=43)** From the front end a accustom visual is a visual showing below this dotted line in the visualizations pane of the Power BI interface.
>
> **[0:52](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-a-custom-visual?u=76281980&t=52)** So these are Pbivis files that have been uploaded.
>
> **[0:56](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-a-custom-visual?u=76281980&t=56)** Your users can come here to these three dots and click import a visual from a file or get more visuals and that will allow them to upload a Pbivis file either from app source, which we'll come to later, which is a Microsoft website or from a locally held file.
>
> **[1:13](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-a-custom-visual?u=76281980&t=73)** So that's how your coding work gets into Power BI.
>
> **[1:17](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-a-custom-visual?u=76281980&t=77)** Your users have to upload your visual specifically or your organization can upload your visual to your whole organization.
>
> **[1:27](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-a-custom-visual?u=76281980&t=87)** Once you've created a custom visual by the way, you can upload it to AppSource for anyone to download and you can even charge for it.
>
> **[1:33](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-a-custom-visual?u=76281980&t=93)** More on that later.
>
> **[1:36](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-a-custom-visual?u=76281980&t=96)** Now, not all custom visuals are created equal.
>
> **[1:39](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-a-custom-visual?u=76281980&t=99)** For example, I think I mentioned that users can subscribe to a standard visual, all the ones above the line via Outlook.
>
> **[1:45](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-a-custom-visual?u=76281980&t=105)** But this is not possible for all custom visuals, only those that have been certified by Microsoft.
>
> **[1:52](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-a-custom-visual?u=76281980&t=112)** This means the code is submitted to Microsoft and has passed some tests.
>
> **[1:57](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-a-custom-visual?u=76281980&t=117)** It can take a long time for your custom visual to be certified.
>
> **[2:01](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-a-custom-visual?u=76281980&t=121)** How can you tell whether a visual is custom or standard?
>
> **[2:05](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-a-custom-visual?u=76281980&t=125)** If you click on it, you can see that there is now a black box around this icon here.
>
> **[2:10](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-a-custom-visual?u=76281980&t=130)** And that's because that icon is below the dotted line, you know that this is a custom visual.
>
> **[2:16](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/what-is-a-custom-visual?u=76281980&t=136)** Plus you'll come to know that, it just doesn't look like one of the standard ones.

> [!info]- Semantic Content
>
> **Definitions:** is a  (5)
> **Code Keywords:** let (1), interface (1)
> **CLI Commands:** make (1)
> **Env Vars:** json (1)
> **UI Navigation:** click on (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 2. 1. Set Up Your Environment

#### Understand the target set up
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-target-set-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-target-set-up?u=76281980&t=0)** - [Instructor] Getting set up to make a custom visual can be tricky and fiddly.
>
> **[0:04](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-target-set-up?u=76281980&t=4)** In this video, we're going to look at the target setup that you end up with once you're ready, so that you know what you're aiming for, and so that you have some confidence that it's possible to get to this point.
>
> **[0:15](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-target-set-up?u=76281980&t=15)** In Finder or Explorer, I recommend that you make a folder called Custom Visuals.
>
> **[0:20](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-target-set-up?u=76281980&t=20)** And within that, you're going to have a folder for each custom visual project that you want to make.
>
> **[0:25](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-target-set-up?u=76281980&t=25)** Circle Card, that you can see here, is the default name when we download a new setup from Microsoft.
>
> **[0:31](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-target-set-up?u=76281980&t=31)** I've opened this Custom Visuals folder in VS Code.
>
> **[0:35](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-target-set-up?u=76281980&t=35)** So you can see the same structure here, parent folder, and three sub-folders.
>
> **[0:39](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-target-set-up?u=76281980&t=39)** And if we open one of these folders, you can see that they have a certain folder structure, and this is determined by Microsoft, and not by you.
>
> **[0:46](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-target-set-up?u=76281980&t=46)** So when you download a new project, this is the structure it will have.
>
> **[0:50](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-target-set-up?u=76281980&t=50)** Dist for distribution, source files, style files, node modules, and so forth.
>
> **[0:59](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-target-set-up?u=76281980&t=59)** These have all been downloaded by running a single command, PBI Vis New in my terminal window, which you can see in the bottom right?
>
> **[1:07](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-target-set-up?u=76281980&t=67)** The goal of this entire chapter is to get you to a point where you can run the command, PBI Vis New circle card in your command prompt, or your terminal window, and correctly receive the thousands of files that you need in this structure.
>
> **[1:22](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-target-set-up?u=76281980&t=82)** If you can already run this command successfully, you can skip the entire chapter.
>
> **[1:27](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-target-set-up?u=76281980&t=87)** The instructions for developing the circle card visual, the purpose of these instructions, really, is to get you to the point where you can run the same command, can be found at this link.
>
> **[1:39](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-target-set-up?u=76281980&t=99)** In order for you to run the PBI Vis New command, you need the right versions of the right libraries all the way through your computer.
>
> **[1:46](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-target-set-up?u=76281980&t=106)** Now, everyone looking at this course right now will have a different set of files on their computer.
>
> **[1:50](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-target-set-up?u=76281980&t=110)** You will have different versions, or in some cases, you might lack support for entire languages.
>
> **[1:55](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-target-set-up?u=76281980&t=115)** So be prepared to work through a few error messages and persist with installations until you get there.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), node (1)
> **Tools:** terminal (2), vs code (1), command prompt (1)
> **Env Vars:** pbi (3)
> **Prerequisites:** setup (2), set up (1)
> **Code Keywords:** for, (1)
> **Speakers:** - [instructor] (1)

#### Licensing, software, and version requirements
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=0)** - [Instructor] By the end of this video, you'll have the software and language support you need to start installing the Power BI API files.
>
> **[0:07](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=7)** So, by the end of this video, you should be able to run the pbiviz command in your terminal or command prompt.
>
> **[0:17](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=17)** First things first, to publish your custom visual, you will need a pro-license.
>
> **[0:22](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=22)** You can sign up for a free trial here.
>
> **[0:26](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=26)** Next, you'll need a text editor, preferably one that recognizes TypeScript and I'll be using VS Code, which is not the same as its big brother, Visual Studio.
>
> **[0:35](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=35)** Code is free and works on Macs and PCs.
>
> **[0:38](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=38)** And it's good with JavaScript and TypeScript.
>
> **[0:42](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=42)** If you're on Windows, you will need PowerShell 4 or later.
>
> **[0:46](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=46)** On a Mac, terminal is fine.
>
> **[0:48](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=48)** Next, we're going to look at Node and NPM.
>
> **[0:52](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=52)** Before I give you any instructions on this, note that Node has lots of versions and you can use a version manager, such as NVM to help manage these changes.
>
> **[1:04](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=64)** Node.js is an open source server environment.
>
> **[1:07](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=67)** It lets you run your app as though your laptop is a server.
>
> **[1:11](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=71)** Node runs on PCs and Macs.
>
> **[1:15](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=75)** If I run Node -v, you can see that I'm using version 12.
>
> **[1:21](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=81)** You will need version 10 or later.
>
> **[1:24](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=84)** The advice is just to install the latest stable version.
>
> **[1:29](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=89)** Once you have Node, you will need to be able to run NPM commands.
>
> **[1:33](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=93)** These will help you download specific libraries of Power BI code.
>
> **[1:38](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=98)** You might already have NPM.
>
> **[1:41](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=101)** Check with the command NPM -v.
>
> **[1:43](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=103)** If not, please run NPM install NPM@latest -g.
>
> **[1:51](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=111)** The Microsoft advice is to install the latest MSI installer to help manage versions in your download.
>
> **[1:58](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=118)** I don't use this myself as I don't think this advice existed when I set myself up but I have found this one, which works on Macs and PCs.
>
> **[2:07](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=127)** If you have installed this, restart your machine.
>
> **[2:11](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=131)** If you get errors in your command prompt, which is almost inevitable, my advice to you is to read them thoroughly.
>
> **[2:18](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=138)** You will get different errors to every other person taking this course and different to those I got a few years back.
>
> **[2:24](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=144)** I learned eventually to ignore the yellow warnings and read the red ones.
>
> **[2:28](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=148)** Then I Googled the red warnings to work out which part of my install was missing.
>
> **[2:33](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=153)** Then I ran an install command for whatever was missing and sometimes I had to do that several times.
>
> **[2:39](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=159)** I felt as though a few files made it through each time and then suddenly that error would clear and I'd work my way through the next one.
>
> **[2:47](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=167)** Once you have the files you need, you will be able to run the following command.
>
> **[2:55](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=175)** This is to install the command line support from Power BI.
>
> **[3:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=180)** I recommend that you install all of your NPM packages globally.
>
> **[3:04](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=184)** That's the -g in this command.
>
> **[3:07](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=187)** If you don't, they will only install in the Node modules folder of your current project and you will not be able to reuse them across different custom visuals.
>
> **[3:17](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=197)** To confirm that this download has worked, run the pbiviz command.
>
> **[3:22](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=202)** And that should give you the help screen that we saw earlier that you can still see above.
>
> **[3:28](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=208)** One important note here on versions, you have just downloaded Visuals Tools version 3.
>
> **[3:36](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=216)** A lot of documentation online and help and sample code relates to earlier 2.something versions and these are not backward compatible.
>
> **[3:46](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=226)** This can be really frustrating to find a whole section of code that you think you can use only to realize it's version 2.
>
> **[3:53](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=233)** You have been warned.
>
> **[3:55](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=235)** It's well worth reading this post about the difference between the two.
>
> **[4:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/licensing-software-and-version-requirements?u=76281980&t=240)** Now that you can run a pbiviz command, we can move on to installing the API files you need to create a custom visual.

> [!info]- Semantic Content
>
> **CLI Commands:** node (7), npm (7), find (1)
> **Env Vars:** npm (7), api (2), nvm (1), msi (1)
> **Prerequisites:** install (8), you'll need (1)
> **Tools:** terminal (2), command prompt (2), vs code (1), visual studio (1), powershell (1)
> **Versions:** version 12 (1), version 10 (1), version 3 (1), version 2 (1)
> **Code Keywords:** this, (2)
> **Definitions:** is an  (1), is a  (1)
> **Warnings:** note that (1), important note (1)

#### Create your first (demo) custom visual
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=0)** - [Instructor] In this video, we will create our first custom visual.
>
> **[0:04](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=4)** We're going to do this with Node D3 or TypeScript.
>
> **[0:07](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=7)** We will simply download the demo visual from Microsoft.
>
> **[0:10](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=10)** Before we can get to that point, we have to install a number of packages with the Command Prompt and we need to make a few changes to the front end.
>
> **[0:17](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=17)** Let's deal with those ones first.
>
> **[0:20](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=20)** First, you need to set up a secure socket layer certificate and this link will tell you how to do that.
>
> **[0:28](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=28)** This is so your computer and the Power BI service server can communicate.
>
> **[0:33](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=33)** Otherwise you will not be able to preview and debug your visual.
>
> **[0:38](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=38)** If you haven't already, log into Power BI at app.[powerbi.com](https://powerbi.com) and you need to switch on developer tools so that you can preview and debug easily.
>
> **[0:48](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=48)** Note that you can only do this in Power BI Service.
>
> **[0:52](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=52)** If you're trying to access this from Power BI Desktop, it won't work.
>
> **[0:57](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=57)** Go to settings, settings, developer, and enable developer mode.
>
> **[1:08](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=68)** Now, if you create a new report, you should see on your visualizations pane that you have to developer visual.
>
> **[1:17](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=77)** If you can't see it, try hard refreshing your machine that's Control and F5 or log out and in again.
>
> **[1:24](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=84)** You're going to need additional libraries to get what you want out of Power BI.
>
> **[1:28](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=88)** There are lots of these at NPM and you will want the ones with the Power BI symbols.
>
> **[1:35](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=95)** Here, I've just done an NPM, a search for the term Power BI and you can see how many Power BI libraries there are.
>
> **[1:43](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=103)** We're not going to be using all of these libraries in this course because it depends what you're trying to achieve.
>
> **[1:49](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=109)** For instance, do you need tool tips support, does your visual need to be able to cross filter other visuals?
>
> **[1:56](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=116)** Do you need all the formatting support?
>
> **[1:57](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=117)** It depends what you're trying to achieve with your custom visual as to which of these you download.
>
> **[2:04](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=124)** But you will want the ones published by Power BI with this symbol.
>
> **[2:09](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=129)** The one that you need right now is D3.
>
> **[2:12](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=132)** D3 is a data visualization library built in JavaScript.
>
> **[2:16](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=136)** Without it, you can't add any shapes to your custom visual.
>
> **[2:21](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=141)** So you can just copy this into your Command Prompt or you can specify the version you want, like so.
>
> **[2:33](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=153)** Once you've got D3 you need TypeScript definitions for D3.
>
> **[2:40](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=160)** D3 is built in JavaScript.
>
> **[2:42](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=162)** TypeScript is a version or superset of JavaScript.
>
> **[2:46](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=166)** These definitions shown here help D3 and TypeScript talk to each other.
>
> **[2:52](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=172)** And again, you can just copy this into your Command Prompt but I do recommend installing these things globally which is not included in the code shown here.
>
> **[3:01](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=181)** So you need a minus G.
>
> **[3:04](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=184)** The next thing you need, and we are getting to the end, is core JS.
>
> **[3:08](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=188)** This contains code to help older browsers work out what's going on with newer code.
>
> **[3:14](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=194)** Once again, I would install that globally.
>
> **[3:17](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=197)** Now, finally, we get to the point of installing the Power BI API definitions.
>
> **[3:22](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=202)** This actually lets you write a custom visual.
>
> **[3:25](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=205)** So it's kind of key.
>
> **[3:28](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=208)** And again, the code I would use is slightly different to what's shown in NPM.
>
> **[3:34](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=214)** So please install globally the Power BI visuals API.
>
> **[3:39](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=219)** It's not the same as the dash tools that we did in the previous video.
>
> **[3:46](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=226)** And that's the code that I have used.
>
> **[3:50](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=230)** Now create a folder called custom visuals for all of your code to sit in, if you haven't done so already and navigate to that within your Command Prompt or terminal.
>
> **[4:01](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=241)** You can see I am already in the custom visuals folder down here at the bottom right-hand side of VS Code.
>
> **[4:10](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=250)** Then run pbivis new circleCard.
>
> **[4:15](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=255)** Now I'm going to call it circleCard2 because I've already had a circleCard and you can see it's creating a new visual and installing packages.
>
> **[4:23](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=263)** So it's about 6,000 files that it's going to install.
>
> **[4:27](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=267)** Now, if we check pack, you can see already on the navigation on the left-hand side that we've got circledCard2.
>
> **[4:34](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=274)** And of course that's mirrored if we use Finder to have a look.
>
> **[4:39](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=279)** Next, you need to run pbivis start to start the server.
>
> **[4:46](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=286)** And that's thrown an error because I haven't navigated to the actual folder that I've just created.
>
> **[4:51](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=291)** So that's what you need to do next.
>
> **[4:56](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=296)** And then run pbivis start.
>
> **[4:59](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=299)** And hopefully it will work this time.
>
> **[5:01](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=301)** There we go, it compiled successfully.
>
> **[5:03](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=303)** That's what you're looking for every time you run this command.
>
> **[5:06](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=306)** So next things next you go to Power BI with your server running and you click the developer visual.
>
> **[5:14](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=314)** And normally you'd hope to see something there but you see if you can read it that small, it says can't contact visual server.
>
> **[5:20](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=320)** Please make sure the visual server is running and configured correctly.
>
> **[5:24](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=324)** Now, if you have forgotten to run the pbivis start command, that means your server isn't running and you will get this error.
>
> **[5:32](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=332)** But we know that we have just run that.
>
> **[5:33](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=333)** So that isn't the problem.
>
> **[5:35](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=335)** The problem is almost certainly the browser certificate and this happens a lot.
>
> **[5:41](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=341)** And you would think you can fix this once and be done with it, but it's not that easy.
>
> **[5:45](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=345)** So I've just pressed F12 to see developer tools within the browser.
>
> **[5:50](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=350)** And if we look at the console, it says failed to load resource certificate or authority invalid.
>
> **[5:58](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=358)** And the location is local host 8080 assets status one.
>
> **[6:03](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=363)** So now in the same browser software, you need to visit this location and it says, your connection is not private.
>
> **[6:12](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=372)** So basically a security worry is what's blocking your developer visual from working.
>
> **[6:18](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=378)** The window that you see may look slightly different depending which browser you're in.
>
> **[6:22](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=382)** And I find that Chrome is the easiest to identify that this is the problem you're having.
>
> **[6:27](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=387)** But you can identify it and you can fix it in any browser.
>
> **[6:31](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=391)** So click advanced, and then it says proceed to local hosts unsafe.
>
> **[6:35](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=395)** It isn't unsafe cause we know what we're doing so we can click that.
>
> **[6:39](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=399)** And it pops up with this circleCard debug code.
>
> **[6:43](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=403)** And if we go back here now and press refresh, you can see it says update count zero.
>
> **[6:51](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=411)** And this is the circleCard visual that downloads by default from Microsoft.
>
> **[6:55](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=415)** So this is success, even though it doesn't look very impressive.
>
> **[6:59](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=419)** So if you've reached this point, well done.
>
> **[7:01](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-your-first-demo-custom-visual?u=76281980&t=421)** You're all set up and ready to learn how to make a new, proper custom visual.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), npm (3), node (1), find (1)
> **Code Identifiers:** circlecard (4), circlecard2 (1), circledcard2 (1)
> **Env Vars:** npm (3), api (2), f12 (1)
> **Tools:** command prompt (4), terminal (1), vs code (1)
> **Prerequisites:** install (4), set up (2)
> **Code Keywords:** let (1), switch (1), finally, (1), private (1), new, (1)
> **UI Navigation:** go to (2), navigate to (1)
> **Definitions:** is a  (2)


### 3. 2. Understand the File Setup

#### Understand the folder structure of your new project
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=0)** - [Instructor] Now that we can use our pbivis commands in Terminal and we've been able to view our test visual in the Power BI service, let's make our first custom visual.
>
> **[0:10](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=10)** We're going to create the simplest possible type of visual which shows a single number as a Kpi.
>
> **[0:14](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=14)** And we're going to call it KpiBox just as up here.
>
> **[0:18](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=18)** So I'll be calling it KpiBox2 in fact 'cause I need a unique name.
>
> **[0:23](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=23)** If you're using terminal within visual studio code as I am, you may need to open a Terminal Window or access your terminal or command prompt in any way that you wish to.
>
> **[0:33](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=33)** I'm still running a server here.
>
> **[0:34](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=34)** You can see it says, "Compiled successfully" and then there's no kind of normal prompt there.
>
> **[0:39](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=39)** So in order to stop my server, I press Control and C and then you can see I'm in Directory Circle Code Two.
>
> **[0:47](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=47)** Now you need to be in your root directory.
>
> **[0:49](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=49)** The one that I have called Custom Visuals.
>
> **[0:52](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=52)** So I'm going to go up a level and you can see that I'm now in Custom Visuals.
>
> **[0:57](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=57)** So in the terminal window type pbivis new and then the name of your project which is KpiBox for me, it's KpiBox2.
>
> **[1:07](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=67)** And that's going to download the 6,000 or so files that you will need.
>
> **[1:12](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=72)** And then before you do anything else, my advice is always to go into Power BI service, hit refresh and check everything is working correctly.
>
> **[1:20](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=80)** And you can see it says that it's not working correctly.
>
> **[1:24](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=84)** Well that's because, so pbivis start, that would help.
>
> **[1:31](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=91)** Right. So to start the server, catalog of errors here we need to go into KpiBox.
>
> **[1:38](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=98)** For me it's KpiBox2.
>
> **[1:40](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=100)** Then we're going to try starting the server, again pbivis start.
>
> **[1:45](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=105)** This time hopefully without a fatal error.
>
> **[1:47](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=107)** There we go, Compiled successfully, refresh this.
>
> **[1:51](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=111)** And we see update count is zero.
>
> **[1:53](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=113)** Okay. That test is always worth doing by the way because if you find that later is not working, you can have wasted a great deal of time.
>
> **[2:02](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=122)** So now let's take a look at the 80 megabyte 6,000 or so far as you've just downloaded.
>
> **[2:08](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=128)** And I'm looking at them here just in vscode in the Tree View.
>
> **[2:13](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=133)** The first directory is Adopt TMP and .vscode.
>
> **[2:16](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=136)** And these are hidden. You might not even see them in fact, depending on your settings and you can ignore those.
>
> **[2:22](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=142)** The folder Assets contains a single file at the moment called Icon, icon.png and it's rather unattractive gray icon that will show for your users under the visualizations pane when they're using your custom visual that you will create.
>
> **[2:38](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=158)** So you probably want to make it a bit more exciting and a bit more representative, but we will do that.
>
> **[2:43](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=163)** So we will look at doing that later.
>
> **[2:45](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=165)** I think they have to be 20 by 20 pixels or 16 by 16 pixels.
>
> **[2:49](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=169)** So there are specifications around that little file.
>
> **[2:54](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=174)** The folder Dist is currently empty.
>
> **[2:57](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=177)** This is a distribution folder.
>
> **[2:59](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=179)** And when we output a little piece of software app, pbivis file, this is where it will be placed.
>
> **[3:05](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=185)** And we'll take it from here and upload it into Power BI service.
>
> **[3:08](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=188)** So, because we haven't created anything yet, there's nothing here.
>
> **[3:13](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=193)** Now the bulk of our files sits in node_modules.
>
> **[3:17](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=197)** If we round to the nearest percent, a hundred percent of our files reside in node_modules.
>
> **[3:23](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=203)** And these mostly are little bits of software that we need in order to compile our final visual.
>
> **[3:28](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=208)** So you might remember in previous chapters that we downloaded things like d3 and then d3 types which allow d3 and TypeScript to talk to each other and so on and so forth.
>
> **[3:40](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=220)** Depending what you want to achieve with your visual, you might need to add more modules here and you may find that your list of node modules by the way is completely different to mine and that's fine.
>
> **[3:50](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=230)** But what we must ensure is that when we compile our software, we exclude these files.
>
> **[3:56](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=236)** Otherwise our visual will take ages to compile and run slowly.
>
> **[4:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=240)** You will be padded out basically with a load of files that it doesn't need.
>
> **[4:05](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=245)** It's surprising to me that when we run the command pbivis new, we aren't automatically given a gitignore file which is this crucial file that tells the compiler to ignore certain files.
>
> **[4:18](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=258)** But here are the instructions.
>
> **[4:21](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=261)** Taken from someone who works for Microsoft.
>
> **[4:23](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=263)** So this is what you need for your gitignore file and to create it, you need to use your text editor and type in exactly what you see.
>
> **[4:35](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=275)** So this tells the Ms Compilation Engine to ignore anything that's in node_modules, anything ending in dot log, for example, anything in the distribution folder and so on.
>
> **[4:59](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=299)** And what you do is you save into the root project folder which for you is KpiBox.
>
> **[5:06](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=306)** And we do a git.gitignore like so and just Okay through the warnings that you get.
>
> **[5:15](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=315)** And you need to do that really for every project.
>
> **[5:18](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=318)** But obviously you can copy and paste that file, you don't have to write it all out each time.
>
> **[5:22](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=322)** So let's carry on looking through our folder structure for a second.
>
> **[5:27](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=327)** In the SRC folder, we've got two typeScript files.
>
> **[5:30](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=330)** We have Settings and Visual.
>
> **[5:34](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=334)** Settings is a short file that exports a class called Visual Settings.
>
> **[5:40](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=340)** Export Class Visual Settings which extends that.
>
> **[5:45](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=345)** This class contains five variables, default color, show all data points, fill, fill-rule and font size.
>
> **[5:56](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=356)** Now just take a look in Power BI service for a second and on the right, click the Formatting pane, this little paint roller.
>
> **[6:07](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=367)** Now we have general title, background and so on.
>
> **[6:12](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=372)** Now I know from experience that these category headings are always present, but here we also have data colors and this one is not always present.
>
> **[6:22](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=382)** And if I open it, we see five formatting options, default color, show all, fill, color saturation and text size.
>
> **[6:31](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=391)** These correspond to the five variables we just saw in the settings file.
>
> **[6:38](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=398)** The Visual file is longer.
>
> **[6:40](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=400)** There are a number of import statements at the top and then we export a class called Visual.
>
> **[6:48](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=408)** This is our custom visual essentially.
>
> **[6:50](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=410)** This class contains several declarations.
>
> **[6:53](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=413)** It's got a construct a function in between these brackets and then it has an Update function, Past settings and Enumerate Object Instances methods.
>
> **[7:12](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=432)** It is possible actually to combine these two files, visual and settings into a single typescript file.
>
> **[7:18](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=438)** And many people do this. More on that soon.
>
> **[7:22](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=442)** And finally, we have a folder called Style which contains a dotless file. Dotless is like dot css, it contains styling. As with regular d3, you can style your visuals a number of different ways.
>
> **[7:37](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=457)** You can use a style sheet for some things and then you can style on the element itself for others.
>
> **[7:42](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=462)** It's always more efficient to use a star sheet where possible.
>
> **[7:45](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=465)** It makes her a faster and better organized graphic.
>
> **[7:49](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=469)** But where you want the user to be able to adjust the formatting via the formatting pane, you have to handle that in your touch grip file and not in your dotless file.
>
> **[7:59](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-the-folder-structure-of-your-new-project?u=76281980&t=479)** So that's our first walk through of our Proto Custom Visual.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this. (2), function (2), else, (1), new, (1)
> **Tools:** terminal (5), visual studio (1), command prompt (1)
> **CLI Commands:** make (2), find (2), node (1), git (1)
> **Code Identifiers:** node_modules (3), typescript (1)
> **Env Vars:** tmp (1), src (1)
> **Definitions:** is a  (2)
> **File Paths:** git.gitignore (1)
> **Exercise Files:** download the (1)

#### Understand key files and Identify the ones to change
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=0)** - [Instructor] We've looked at the folder structure of your new project.
>
> **[0:03](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=3)** And now let's look at some key files and see what they do.
>
> **[0:07](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=7)** Look at the files in your root folder.
>
> **[0:10](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=10)** You can see the getignore file that you just created, and then we have capabilities dot Jason.
>
> **[0:18](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=18)** This is the single most important file outside of your TypeScript files.
>
> **[0:23](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=23)** Capabilities dot Jason defines how the user can drag and drop data into your visual.
>
> **[0:29](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=29)** It also defines how Power BI should aggregate the data that is dragged and dropped.
>
> **[0:34](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=34)** And, finally, capabilities defines the formatting pane.
>
> **[0:37](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=37)** It is a crucial file and it's the one that I am most likely to Google questions about.
>
> **[0:43](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=43)** We're going to take a quick look at this file now.
>
> **[0:47](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=47)** First, we have a data roles object up here which is in fact not an object, but an array of objects.
>
> **[0:53](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=53)** Then we have an objects object, and then further down, we have data view mappings array of objects.
>
> **[1:06](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=66)** And that's the lot, so it's split into these three sections.
>
> **[1:10](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=70)** Taking data roles you see this is an array of two objects.
>
> **[1:13](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=73)** We've got category and measure data.
>
> **[1:18](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=78)** If we go back to Power BI service and we look at the fields pane, which is on the left of the paint roller icon, you can see, we have category data and measure data there.
>
> **[1:29](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=89)** I call these data buckets or data wells.
>
> **[1:32](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=92)** This is where you can drag and drop your data into.
>
> **[1:37](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=97)** So if we were to change the display name here by adding some random number you see it recompiles immediately.
>
> **[1:48](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=108)** And then, if we were to refresh, you can see that those names have changed now.
>
> **[1:53](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=113)** And you could have called those whatever you liked.
>
> **[1:57](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=117)** Category and measure are terms with special meanings in Power BI.
>
> **[2:01](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=121)** A category is typically a text field that is used to group data together.
>
> **[2:06](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=126)** A measure is typically a numeric or value field that is displayed, so it's the line on the line chart or the height of the bar in a bar chart.
>
> **[2:16](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=136)** Now let's skip objects for a second, and look at data view mappings.
>
> **[2:21](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=141)** First, we have a categorical object, and within this, we have category and measure.
>
> **[2:29](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=149)** These are shown in red and they're within double quote marks.
>
> **[2:33](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=153)** And these correspond to the names given in data roles above.
>
> **[2:38](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=158)** I think that's case sensitive too, so it's all lowercase for name and it's all lowercase here for in category, which corresponds to what's above.
>
> **[2:49](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=169)** So if you were to change these names, you would need to change everything else within the capabilities file at the same time.
>
> **[2:57](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=177)** So generally speaking, take care with that.
>
> **[3:01](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=181)** So what is data view mappings doing?
>
> **[3:04](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=184)** This tells Power BI how to aggregate the data before trying to display it.
>
> **[3:09](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=189)** This categorical object is not the only option as we will see soon, but this option here means that Power BI will expect to take numeric or measure data and aggregate it into categories.
>
> **[3:21](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=201)** That's how it is expecting to treat the data that is given to the visual.
>
> **[3:27](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=207)** A quick rule of thumb here, and this might sound obvious to you but it took me a while to figure it out, if the text is blue, generally speaking, don't change it.
>
> **[3:34](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=214)** And if it's red or whatever is equivalent in your text editor, then generally speaking, you can.
>
> **[3:40](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=220)** But, if it's red and you change it, there may be consequences that you need to fix.
>
> **[3:46](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=226)** So, as discussed before, you have to be careful about changing something like name here where it has corresponding items in other arrays and objects in the same file.
>
> **[3:58](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=238)** So finally, let's take a look at the objects object.
>
> **[4:02](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=242)** We have data colors, show all data points,
>
> **[4:10](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=250)** fill, fill rule, and font size.
>
> **[4:14](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=254)** So they should look familiar to you because they match the formatting pane items under data colors, and they also match what we saw in the settings file earlier.
>
> **[4:32](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=272)** So, the objects object is your formatting objects effectively, and data colors is your sort of category heading.
>
> **[4:43](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=283)** As you can see in Power BI, it's a click away from it.
>
> **[4:47](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=287)** Give it a chance to refresh properly.
>
> **[4:50](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=290)** Now you can see it says data colors 22, and that's because we've just changed this here.
>
> **[4:56](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=296)** Now a quick tour of the remaining key files.
>
> **[4:59](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=299)** Package dot Jason defines the minimum versions of dependent software that your app needs.
>
> **[5:06](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=306)** It can also record the author and description and so on.
>
> **[5:10](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=310)** Package dot lock dot Jason, in fact, package hyphen lock dot Jason, records the exact version of each install package so that you or other users can recreate the exact set of modules used for your project.
>
> **[5:23](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=323)** These files will often update automatically, if you install a new module, for example.
>
> **[5:28](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=328)** It's rare that I update these files, but they are important.
>
> **[5:32](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=332)** PBI vis dot Jason links together all the key files, as well as the version number and even the class name.
>
> **[5:39](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=339)** Now you might remember that in Visual dot ts, we saw export class Visual.
>
> **[5:47](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=347)** Visual had a capital V, here it is.
>
> **[5:51](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=351)** Now if we reopen PBI vis dot Jason there, and we go through some of these, you can see it says visual class name, Visual with a capital V.
>
> **[6:03](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=363)** So once again, there's a link that's not immediately obvious between one file and another.
>
> **[6:08](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=368)** And if you were to change what's written in the visual dot ts file, you would need to change the name.
>
> **[6:14](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=374)** So if you were to change the class that you're exporting, the name of it, you'd need to come in here and do the same thing.
>
> **[6:20](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=380)** And you can also put description, support URL, get help, help URL, et cetera, author names, emails, all of that in here.
>
> **[6:28](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=388)** If you were to change the name or location of your little mini visual, that the users see when they want to use your custom visual, you would need to change the path reference here.
>
> **[6:39](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=399)** So, this one is tying together all of the other files in a way.
>
> **[6:45](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=405)** We also have references to the style sheet, the capabilities file, support URL, et cetera.
>
> **[6:54](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=414)** So we don't generally need to change these names, but if we did change the path or the file names of these things, we would need to update this file to match.
>
> **[7:04](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=424)** Ts config dot Jason contains information needed to compile your files.
>
> **[7:10](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=430)** The only thing I've ever changed here is the name for the file, Visual dot Ts.
>
> **[7:14](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=434)** And we don't need to change that at the moment, because we're still using that file.
>
> **[7:18](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=438)** Webpack and Ts linked, I have never changed.
>
> **[7:21](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=441)** So that was a whirlwind tour of the folder structure of a Power BI custom visual.
>
> **[7:25](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=445)** I hope your head's not spinning.
>
> **[7:27](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=447)** You should feel reassured.
>
> **[7:29](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/understand-key-files-and-identify-the-ones-to-change?u=76281980&t=449)** Yes, there are thousands of files in your projects, but there are only three absolutely key files that you will need to change.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), finally, (2), this, (1), module (1), match. (1)
> **Env Vars:** url (3), pbi (2)
> **UI Navigation:** drag and drop (2)
> **Definitions:** is a  (1), is an  (1)
> **Prerequisites:** install (2)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Best Practices:** rule of thumb (1)


### 4. 3. Build a KPI Box Visual Using "Single" Data

#### See the target visual, data, and formatting
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/see-the-target-visual-data-and-formatting-8575930?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/see-the-target-visual-data-and-formatting-8575930?u=76281980&t=0)** - [Instructor] Let's take a forward look at what we're going to create in this chapter, so you understand the target visuals and the sort of changes that we're going to make.
>
> **[0:09](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/see-the-target-visual-data-and-formatting-8575930?u=76281980&t=9)** We're going to make a visual called KPI box and it's called that because it has these two colored boxes around it, one for the numeric value and one for the label.
>
> **[0:21](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/see-the-target-visual-data-and-formatting-8575930?u=76281980&t=21)** And when the user resizes these things you can see that the number changes size automatically and the label size doesn't.
>
> **[0:30](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/see-the-target-visual-data-and-formatting-8575930?u=76281980&t=30)** And there's an awful lot of user driven items here.
>
> **[0:35](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/see-the-target-visual-data-and-formatting-8575930?u=76281980&t=35)** So we can change the color, for example of the box.
>
> **[0:40](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/see-the-target-visual-data-and-formatting-8575930?u=76281980&t=40)** We can change the transparency.
>
> **[0:44](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/see-the-target-visual-data-and-formatting-8575930?u=76281980&t=44)** We can change how much padding there is to the left and the right here.
>
> **[0:49](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/see-the-target-visual-data-and-formatting-8575930?u=76281980&t=49)** So I might reduce that down to 50.
>
> **[0:52](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/see-the-target-visual-data-and-formatting-8575930?u=76281980&t=52)** And we can change the label font size which is currently quite big.
>
> **[0:55](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/see-the-target-visual-data-and-formatting-8575930?u=76281980&t=55)** I'm going to make that 20.
>
> **[0:58](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/see-the-target-visual-data-and-formatting-8575930?u=76281980&t=58)** And notice that we've already changed the font size for the KPI, so that it tracks the size of the box so as the user resizes the window, that resizes automatically.
>
> **[1:10](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/see-the-target-visual-data-and-formatting-8575930?u=76281980&t=70)** but it is currently a fairly hard color, so let's make that a bit prettier.
>
> **[1:17](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/see-the-target-visual-data-and-formatting-8575930?u=76281980&t=77)** We've also added the ability for the user to change the alignment of the label and the color of the label, like so.
>
> **[1:27](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/see-the-target-visual-data-and-formatting-8575930?u=76281980&t=87)** And finally, we're allowing the user to pick whether the label should appear at the top or at the bottom.
>
> **[1:37](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/see-the-target-visual-data-and-formatting-8575930?u=76281980&t=97)** So quite a few changes that we're going to crack on with next in this chapter.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Code Keywords:** let (2), finally, (1)
> **Env Vars:** kpi (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Edit capabilities.json and inspect the resulting data
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=0)** - [Instructor] Now we're going to alter capabilities.json so that it knows to aggregate data down to a single value.
>
> **[0:07](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=7)** You might Remember that by default, the demo files that are downloaded from Microsoft contain a category and a measure data.
>
> **[0:16](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=16)** And that's what we're going to change first.
>
> **[0:18](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=18)** That category and measure data is represented in power BI front end as these two data Wells here.
>
> **[0:24](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=24)** And in case you aren't familiar with power BI the purpose of those Wells is that you can drag and drop data on top of them.
>
> **[0:31](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=31)** And when you do that its obviously normally would affect the visual.
>
> **[0:34](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=34)** Now for a KPI, you only need one of these buckets we don't need two.
>
> **[0:39](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=39)** So let's do that first.
>
> **[0:41](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=41)** Here we have category data two and measure data three.
>
> **[0:44](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=44)** We changed those previously, but now we're going to pull everything into a single number.
>
> **[0:50](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=50)** So we're going to change the display name of our measure data to single value like so of our measure data to single value like so and we're going to get rid of the category object altogether and save it.
>
> **[1:06](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=66)** And now if we go back and refresh you can see we have a single value.
>
> **[1:10](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=70)** It's got a data well, and behind the scenes power BI would be expecting measure data rather than grouping sort of text type data in there.
>
> **[1:22](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=82)** Display name as we know can be anything you can call it, whatever you like.
>
> **[1:25](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=85)** And the name of value can also be anything but it does need to match what's in the data view mappings down here.
>
> **[1:32](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=92)** Now data view mappings at the moment is out of step with the data roles object, because you can see it's still referencing category here as well as measure.
>
> **[1:43](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=103)** And in fact, the entire object is called categorical and that's something that's going to change but let's see first what this produces for us.
>
> **[1:52](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=112)** And before we leave this object we've talked about displayName and Name.
>
> **[1:55](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=115)** Then we have kind and kind can be measure, grouping or GroupingOrMeasure, which is all one word like that.
>
> **[2:04](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=124)** But for us, we want it to be of type measure.
>
> **[2:08](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=128)** And why is it a type measure?
>
> **[2:10](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=130)** And then that's because for a KPI we expect a numeric field.
>
> **[2:13](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=133)** It wouldn't generally make sense to have a category field by itself because what would it categorize unless you were giving it a load of text and you wanted it to count the number of words or something.
>
> **[2:23](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=143)** The general bare minimum we must have for power BI data for KPI as some kind of number.
>
> **[2:30](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=150)** Now if we go back here we know that the data well update has already worked.
>
> **[2:34](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=154)** The next step is to look at our data and we can do that by using our console, just press F12 then to get the console, to show and refreshing.
>
> **[2:47](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=167)** And you can see there, it says visual constructor.
>
> **[2:52](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=172)** We just resize that and refresh.
>
> **[2:56](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=176)** And then we have the constructor and the update.
>
> **[2:59](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=179)** Now I've forgotten to show you something.
>
> **[3:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=180)** So I'm going to go back and show you in visual.ts which is what outputs are visual altogether.
>
> **[3:05](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=185)** So visual.ts exports a class called visual and that is going to be our KPI box.
>
> **[3:11](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=191)** And this class contains lots of functions, a constructor function which runs once on setup, a update function which runs anytime an update is made, that might be a change to the data or a resizing of the window, or what have you.
>
> **[3:25](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=205)** And then pass settings and enumerate object instances method to which we will come onto later.
>
> **[3:30](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=210)** So in the constructor function we have this line console.log, visual constructor and then an options object.
>
> **[3:39](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=219)** And we have a similar one at 63 console.log, visual update, options.
>
> **[3:43](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=223)** And that is what is printing to the console.
>
> **[3:46](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=226)** And I want you to take a good look at what's inside this because this is the beginnings of how you make a custom visual.
>
> **[3:54](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=234)** This bit's important.
>
> **[3:56](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=236)** So let's look in data views first.
>
> **[4:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=240)** Let's try putting some data into our value, like so and then look at our update options.
>
> **[4:10](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=250)** And there we have an array of length one.
>
> **[4:13](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=253)** Before I'd put any data in there, I don't know if you noticed, but data views was an array of length zero, which isn't very exciting to look at.
>
> **[4:20](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=260)** So we have an array of length one.
>
> **[4:23](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=263)** Microsoft plan to support multiple lengths of array.
>
> **[4:26](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=266)** But as far as I know currently only a single object is accepted in this array.
>
> **[4:32](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=272)** Now we're open up this array and we have categorical, matrix, metadata, single, table and tree.
>
> **[4:42](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=282)** Now, two things might strike you here.
>
> **[4:44](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=284)** One of them is that some of these sound a bit similar to some of the visuals that are available in power BI and that is no coincidence.
>
> **[4:52](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=292)** And the other thing is this word, categorical.
>
> **[4:56](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=296)** That word matches the categorical that we have here in capabilities.json.
>
> **[5:04](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=304)** And that's no coincidence.
>
> **[5:05](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=305)** So when we use the word categorical here in capabilities we are telling power BI that we want to access this property of the object in data views.
>
> **[5:18](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=318)** We want to access the categorical object here.
>
> **[5:22](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=322)** Okay, and for a KPI visual we don't want the categorical object that you would use say for a bar chart where you have a number for every day of the week, for example, that would be a categorical type data set up.
>
> **[5:36](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=336)** We want single, which at the moment is null.
>
> **[5:39](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=339)** And it's null, because we haven't said in capabilities.json that we want to use it.
>
> **[5:44](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=344)** So we're going to change that.
>
> **[5:47](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=347)** So we're going to do that in a bit of a radical way.
>
> **[5:49](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=349)** We're going to delete everything from data view mappings leaving just the curly brackets.
>
> **[5:55](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=355)** Okay, like, so, and all we're going to put in here is single because we want it to access that data, curly braces and then role Y, like so.
>
> **[6:11](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=371)** Save and the compiler refreshes automatically.
>
> **[6:14](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=374)** And let's go back and check what data we're given.
>
> **[6:17](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=377)** We're just going to clear that, refresh and we've got visual update that's run twice now.
>
> **[6:24](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=384)** Data views has an array of length one, So let's take a look at that.
>
> **[6:30](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=390)** Now categorical is null because capabilities has rejected it effectively.
>
> **[6:36](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=396)** And if we come into single we have two properties, one is column.
>
> **[6:41](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=401)** And the other one is the value.
>
> **[6:42](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=402)** One, two, four, eight, zero, one, three.
>
> **[6:46](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=406)** And if we were showing a KPI number right now that is the number that would show in it.
>
> **[6:52](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=412)** And let's have a quick look at column.
>
> **[6:55](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=415)** Column is telling us everything it knows about the field that we dragged and dropped under a single value.
>
> **[7:01](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=421)** So see that that's called net sales and here it says, display name, net sales.
>
> **[7:06](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=426)** It has a formatting type in a sort of code form.
>
> **[7:12](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=432)** It says, is it a measure? Yes.
>
> **[7:14](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=434)** You know, you can query this and get a Boolean response, which is very useful.
>
> **[7:18](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=438)** It even tells you where it's grouped into the analysis, Dax grouping, roles, roles index, et cetera.
>
> **[7:26](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=446)** Worth getting to know all the different properties that you can access here.
>
> **[7:31](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=451)** So we have our single data and we have column and value.
>
> **[7:36](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=456)** Now let's try something else.
>
> **[7:37](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=457)** I'm going to add a second column in here, like so.
>
> **[7:42](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=462)** A single mapping can actually only accept a single field, but the power BI interface is not reflected that it's let us drag and drop in a second field.
>
> **[7:51](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=471)** So it looks to the user as though this field is doing something, but actually it isn't.
>
> **[7:59](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=479)** And let's have a look at data views and see what's happened in here.
>
> **[8:03](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=483)** We have categorical, matrix, metadata, table, tree and what's missing?
>
> **[8:09](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=489)** Single is missing.
>
> **[8:11](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=491)** So the very location that we're going to query to get our data has disappeared altogether.
>
> **[8:17](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=497)** And that's because we've overloaded it.
>
> **[8:19](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=499)** We've done something that you can't do with single data and that's drag and drop two fields.
>
> **[8:23](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=503)** So how do we get around this?
>
> **[8:24](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=504)** You would think it would prevent you from doing this but actually we have to prevent the user from doing this in the first place.
>
> **[8:32](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=512)** And to do this, we have to add a condition.
>
> **[8:35](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=515)** So you've guessed it.
>
> **[8:36](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=516)** We go back to capabilities because that's the master sheet for everything really.
>
> **[8:41](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=521)** And we add a conditions array to the data view, mappings object.
>
> **[8:49](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=529)** And this is telling me that I have put this in the wrong place.
>
> **[8:52](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=532)** And this is the problem with this file.
>
> **[8:55](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=535)** It's often a bit unclear.
>
> **[8:56](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=536)** Let's try putting the condition here.
>
> **[9:01](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=541)** Then were going to use the name, which is just measure, more curly braces.
>
> **[9:06](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=546)** Cause we can't get enough of them.
>
> **[9:07](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=547)** And then max is one and that's the bit that should do the hard work of only allowing one field to be dragged and dropped.
>
> **[9:20](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=560)** And now we've got an error and that believe it or not is a good thing.
>
> **[9:25](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=565)** It's extremely small here, but I should read it for you.
>
> **[9:28](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=568)** There are too many columns in the measure bucket please remove some, see details.
>
> **[9:34](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=574)** Okay, perfect.
>
> **[9:35](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=575)** That's what we wanted.
>
> **[9:37](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=577)** So now we're going to remove it down to net sales of one.
>
> **[9:43](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=583)** And I'm just going to clear all that and refresh let's check the all important data views and we've got single back again.
>
> **[9:54](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=594)** There it is single.
>
> **[9:56](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=596)** And now if we were to try and drag and drop one it would overwrite what was there before.
>
> **[10:04](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=604)** And our visual will continue to run.
>
> **[10:06](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=606)** It will just update with different data.
>
> **[10:08](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=608)** So now if we were to look.
>
> **[10:13](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=613)** Single, the value for this one is null but if we were to change back to net sales the value will go back up to I think it was 1.2 million or thereabouts.
>
> **[10:27](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=627)** So there you go.
>
> **[10:29](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=629)** So let's just take another look at this code.
>
> **[10:32](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=632)** This should be read as saying for the measure called measure the maximum number of fields accepted is one.
>
> **[10:40](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=640)** And one other note here we have single role is Y.
>
> **[10:44](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=644)** Now I presume that Y stands for, yes.
>
> **[10:46](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=646)** I've done a lot of Googling to try and workout precisely what this means and I haven't worked it out.
>
> **[10:52](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=652)** So if you manage to work it out or if you know somebody who knows, I'd be very curious to know.
>
> **[10:57](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=657)** I've tried changing this to role is no role is Fred.
>
> **[11:01](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=661)** And it doesn't seem to make any difference whatsoever but if you remove it compilation fails.
>
> **[11:06](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=666)** So if you know why it's role equals Y then do let me know.
>
> **[11:10](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-capabilities-json-and-inspect-the-resulting-data?u=76281980&t=670)** For know I suggest that you keep it in.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), function (3), default, (1), pass (1), delete (1)
> **Env Vars:** kpi (6), f12 (1)
> **File Paths:** capabilities.json (3), visual.ts (2)
> **UI Navigation:** drag and drop (4)
> **CLI Commands:** make (3)
> **Definitions:** is called (1), is a  (1), stands for (1)
> **Prerequisites:** setup (1), set up (1)
> **Code Identifiers:** displayname (1)

#### Edit visual.ts to display a KPI value in Power BI
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=0)** - [Instructor] Now we're going to learn about the structure of visual.ts, our master file.
>
> **[0:05](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=5)** We're going to look at the different methods and functions within this file and we're going to change it to create our KPI.
>
> **[0:12](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=12)** Visual.ts is the master file, once again.
>
> **[0:15](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=15)** It starts by importing all of the modules and classes that it needs to export its own class.
>
> **[0:22](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=22)** As you start building more complex visuals, you will need to expand and alter this list of imports.
>
> **[0:30](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=30)** So let's take a look at them.
>
> **[0:32](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=32)** First, we import CoreJS from the files we downloaded earlier from NPM.
>
> **[0:38](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=38)** CoreJS is an open source package to improve support for older browsers.
>
> **[0:43](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=43)** If you were to comment out this line and compile and refresh, your visual will probably still work if you're using a modern browser.
>
> **[0:53](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=53)** Next we import the style sheets.
>
> **[0:56](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=56)** As we saw earlier, there's very little in visual.less.
>
> **[0:59](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=59)** This contains the styling that gives the yellow shading to the text, for example, and you can open up the style sheet and take a look.
>
> **[1:08](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=68)** So it says where there's emphasis, the background should be yellow.
>
> **[1:12](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=72)** And so where it says update count is zero that's yellow because of the styles in this sheet.
>
> **[1:19](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=79)** Then we import Power BI.
>
> **[1:21](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=81)** This one's pretty crucial.
>
> **[1:23](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=83)** If you check this out and save, most of the subsequent imports fail.
>
> **[1:27](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=87)** So importing this one is not only important, it has to happen before the rest of the imports.
>
> **[1:35](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=95)** If we look at it, it says import Power BI and it's giving it that name space from this location.
>
> **[1:42](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=102)** And then the subsequent imports begin with powerbi. which means that they are importing things from within the namespace in line 30.
>
> **[1:52](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=112)** So where is this all being imported from?
>
> **[1:54](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=114)** How is this magic happening?
>
> **[1:56](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=116)** If you open node modules here, where it says import from Power BI visuals API, you have a corresponding folder.
>
> **[2:06](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=126)** And if you don't, the whole thing will fall over and not work by the way.
>
> **[2:09](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=129)** So here's import Power BI from Power BI visuals API.
>
> **[2:13](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=133)** It's coming in here, finding an export called Power BI.
>
> **[2:18](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=138)** And it's importing that.
>
> **[2:21](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=141)** So this command is telling the compilation engine to run off and get a load of code it's going to need to build your visual.
>
> **[2:27](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=147)** If you don't see this option here or this isn't working for you, you need to go back in this course to earlier videos that explain all the installations that you need to perform.
>
> **[2:36](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=156)** I've probably got a lot more folders on the node modules than you do, but don't worry about that.
>
> **[2:40](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=160)** That's years of importing lots of random things.
>
> **[2:44](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=164)** If your visual compiles, then you're doing it right.
>
> **[2:48](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=168)** So, as I said once you have imported Power BI, these other imports access parts of that namespace, for example powerbi.extensibility or powerbi.EnumerateVisualObjectInstancesOptions, nice long one there.
>
> **[3:05](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=185)** These are written by Microsoft developers and you are allowed to access them in order to build your own visual.
>
> **[3:11](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=191)** In other words these are APIs or application protocol interfaces.
>
> **[3:15](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=195)** So let's have a little look at Microsoft code.
>
> **[3:19](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=199)** Open the Power BI visuals API folder and click on index.d.ts.
>
> **[3:27](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=207)** This is a definition file built in TypeScript and it's about 1500 lines long, I think.
>
> **[3:35](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=215)** If we do a search, done Command + F there, for powerbi.extensibility, there we go, declare module powerbi.extensibility and that's what we're importing.
>
> **[3:50](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=230)** And there's also powerbi.enumerate, whatever it was, of course in here as well.
>
> **[3:56](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=236)** And you can see that these, in some cases, access other bits of code as well from other sections.
>
> **[4:04](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=244)** We're not going to track through all of that.
>
> **[4:06](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=246)** I just wanted to demystify the imports a little bit.
>
> **[4:10](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=250)** So let's close that, go back to visual.ts.
>
> **[4:15](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=255)** And after all of these imports, we call the class defined in settings.
>
> **[4:22](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=262)** Import, align there to make that slightly separate, import visual settings from ./settings.
>
> **[4:32](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=272)** And the ./settings is referencing us to the settings file which sits as you can see on the left in the same folder as visual.ts.
>
> **[4:40](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=280)** Now, you may remember that this is the file that defines what our formatting pane looks like.
>
> **[4:46](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=286)** And you can see that the purpose of this file after it's done a couple of imports itself is to export the class called visual settings.
>
> **[4:54](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=294)** And that is what is being imported there.
>
> **[4:57](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=297)** So that's referencing that other file and code.
>
> **[5:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=300)** Then we start to define the class visual, which is the whole point of the file and the whole point, really of all of your efforts in creating a custom visual.
>
> **[5:10](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=310)** This is the class that gets exported.
>
> **[5:14](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=314)** Directly within the class we have some property declarations and several methods.
>
> **[5:19](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=319)** The properties defined here can be seen inside all of the functions and methods because they're sitting outside of them.
>
> **[5:26](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=326)** So where we have private targets and update counts, these declarations here, you can access these things from within the constructor function and within the update function, parse settings and et cetera.
>
> **[5:39](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=339)** Because they are defined outside of those functions.
>
> **[5:44](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=344)** The constructor function runs once on page load and notice that we have an options variable here as well.
>
> **[5:51](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=351)** It is of type visual constructor options, which is different to the options that we have down here, which is of type visual update options.
>
> **[6:02](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=362)** And you can explore in the front end using F12 what's inside that.
>
> **[6:06](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=366)** Of course, we will need to do that at some point.
>
> **[6:11](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=371)** So these lines here should then look fairly familiar to you.
>
> **[6:16](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=376)** It defines this .targets as one of the properties of the options object.
>
> **[6:22](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=382)** It starts you off with a counter basically, which is called update count of zero and says if there's a document, then create a new HTML element called new P, that's going to be a paragraph and append child to the paragraph, which is creating a text node called update count.
>
> **[6:41](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=401)** This is what we see in the front end.
>
> **[6:44](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=404)** Create a new emphasis element, create, not really create, assign the update count number to a string.
>
> **[6:54](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=414)** Place that within text node and then append the text node within the emphasis element and append the emphasis element into the paragraph element.
>
> **[7:04](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=424)** Well, you probably didn't need to know all of that because we're not going to be sticking with making basic HTML elements such as paragraph and emphasis.
>
> **[7:13](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=433)** But I wanted you to understand that this section of code is creating all of the elements that are needed in this very simple visual.
>
> **[7:25](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=445)** And therefore, this is the location for the code for us to do the same thing.
>
> **[7:30](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=450)** So we're going to be creating a KPI box.
>
> **[7:33](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=453)** It's going to have a couple of rectangles and some text.
>
> **[7:37](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=457)** This is where we will create the rectangles and text.
>
> **[7:41](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=461)** And then we will update what those bits of texts should say and how big those rectangles should be in the update function which is a classic setup for any D3 visual.
>
> **[7:53](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=473)** So the constructor function runs once on page load.
>
> **[7:56](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=476)** And it's okay, it's fine for it to add the text that says update count because that doesn't change whatever the user may do.
>
> **[8:04](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=484)** And it adds a text node to contain the number and the number that's currently shown here, by the way, is a count of how many updates the user has made.
>
> **[8:13](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=493)** So every time I change the size of a window or change something about the data in Power BI, for example, that should count as an update.
>
> **[8:27](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=507)** And that is why the text node is referenced then within the update function.
>
> **[8:32](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=512)** Because every time I make an update, this is the bit of code that runs, not the constructor function.
>
> **[8:37](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=517)** And this must then update what's in the front end.
>
> **[8:41](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=521)** Now we're going to change that.
>
> **[8:42](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=522)** We're going to get rid of the update count text and replace it with a value for our KPI.
>
> **[8:48](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=528)** So what we want to do is say, this .TextNode.TextContent and then we're going to reference our data views objects.
>
> **[9:07](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=547)** Like so.
>
> **[9:08](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=548)** I'm going to save that and refresh things at the front.
>
> **[9:27](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=567)** And the fact that we had changed that, I didn't update there, effective what we saw but we can see it now says update count.
>
> **[9:35](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=575)** And this familiar 1.2 million number.
>
> **[9:38](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-display-a-kpi-value-in-power-bi?u=76281980&t=578)** So it may be ugly, but we have our first KPI visual.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), let (3), this . (2), class. (1), module (1)
> **Env Vars:** kpi (4), api (3), html (2), npm (1), f12 (1)
> **CLI Commands:** node (7), make (2), npm (1)
> **Definitions:** is a  (3), is an  (1), means that (1), in other words (1), is called (1)
> **File Paths:** visual.ts (4), index.d.ts (1)
> **Analogies:** for example (3), such as (1)
> **Cross-References:** as we saw (1), go back to (1)
> **UI Navigation:** open the (1), click on (1)

#### Edit visual.ts to access the user's formatting choices
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-access-the-user-s-formatting-choices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-access-the-user-s-formatting-choices?u=76281980&t=0)** - [Instructor] Now we're going to look at the parse settings and enumerate object instances methods.
>
> **[0:07](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-access-the-user-s-formatting-choices?u=76281980&t=7)** We've had a look already at the constructor function and the update function.
>
> **[0:12](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-access-the-user-s-formatting-choices?u=76281980&t=12)** And the key thing that we've learned is you don't add any data-driven groups or elements into the constructor function.
>
> **[0:18](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-access-the-user-s-formatting-choices?u=76281980&t=18)** You build your elements there and then you update them when you've got your data in the update function.
>
> **[0:25](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-access-the-user-s-formatting-choices?u=76281980&t=25)** So let's add a simple log to the console.
>
> **[0:30](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-access-the-user-s-formatting-choices?u=76281980&t=30)** And we're just going to put the text parse settings,
>
> **[0:43](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-access-the-user-s-formatting-choices?u=76281980&t=43)** and enumerate object instances.
>
> **[0:45](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-access-the-user-s-formatting-choices?u=76281980&t=45)** And the purpose of this is so that we can see when these things run.
>
> **[0:49](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-access-the-user-s-formatting-choices?u=76281980&t=49)** So let's get our console up again, and refresh.
>
> **[0:56](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-access-the-user-s-formatting-choices?u=76281980&t=56)** And you can see that parse settings, the constructor and the update functions all run on refresh, but enumerate object doesn't.
>
> **[1:07](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-access-the-user-s-formatting-choices?u=76281980&t=67)** And in fact, that only runs when we click on the formatting pane.
>
> **[1:12](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-access-the-user-s-formatting-choices?u=76281980&t=72)** See, I'll just do that again.
>
> **[1:17](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-access-the-user-s-formatting-choices?u=76281980&t=77)** So, now let's add in the settings themselves so we can inspect them.
>
> **[1:32](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-access-the-user-s-formatting-choices?u=76281980&t=92)** And now we have an object called visual settings, which contains a data point and that contains the following properties: default color, fill, fill rule, font size, and show all data points, which should look familiar to you from two locations.
>
> **[1:45](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-access-the-user-s-formatting-choices?u=76281980&t=105)** One, because it's what's within this data colors panel which is the one that's been created.
>
> **[1:53](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-access-the-user-s-formatting-choices?u=76281980&t=113)** The rest of these, general, title, et cetera, are mandatory.
>
> **[1:57](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-access-the-user-s-formatting-choices?u=76281980&t=117)** And two, because it's what's within the settings.ts file.
>
> **[2:02](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-access-the-user-s-formatting-choices?u=76281980&t=122)** So the method name 'enumerate object instances' is quite wordy, but it does make sense.
>
> **[2:08](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-access-the-user-s-formatting-choices?u=76281980&t=128)** 'Enumerate' just means list.
>
> **[2:11](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-access-the-user-s-formatting-choices?u=76281980&t=131)** 'Object' refers to the object within capabilities.json.
>
> **[2:17](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-access-the-user-s-formatting-choices?u=76281980&t=137)** Up here, it says 'objects', and an instance is an active occurrence of an object.
>
> **[2:24](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-access-the-user-s-formatting-choices?u=76281980&t=144)** So the name 'enumerate object instances' just means list out all the active formatting selections.
>
> **[2:32](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-access-the-user-s-formatting-choices?u=76281980&t=152)** If the user has picked a red color and a font of Arial, then that is what should be showing.
>
> **[2:41](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-access-the-user-s-formatting-choices?u=76281980&t=161)** And you can see now that the default color has gone from null to having a hex code that corresponds to the red color that I've just picked.
>
> **[2:49](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-access-the-user-s-formatting-choices?u=76281980&t=169)** So now we can access both the data and the user formatting.
>
> **[2:54](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/edit-visual-ts-to-access-the-user-s-formatting-choices?u=76281980&t=174)** Next, we're going to add some D3 to make your KPI visual more attractive.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), let (3)
> **File Paths:** settings.ts (1), capabilities.json (1)
> **CLI Commands:** make (2)
> **Definitions:** refers to (1), is an  (1)
> **Env Vars:** kpi (1)
> **Speakers:** - [instructor] (1)

#### Add a responsive SVG using D3
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=0)** - [Instructor] Now that we've learned how the visual.ts file is structured and what the different bits of it do, we're going to import d3 and add a responsive SVG element to our visual.
>
> **[0:10](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=10)** First, we need to import the relevant files so that our class can use d3, and I'm going to put them in here, separate them slightly so that we know what was our imports, if you like, versus those that came by default.
>
> **[0:26](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=26)** So import star as d3 from d3.
>
> **[0:31](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=31)** And there's different ways of doing this, you could just import particular libraries from d3, not the entire thing, and that would make it run quicker, but for ease for now, I'm going to import the whole thing.
>
> **[0:44](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=44)** And you can see that VS code has made that quite pale, and that's because it knows that the command d3, in fact, if we hover it says, look, d3 is declared but it's value is never read, so it's letting you know that at the moment, that's a pointless declaration, but not for long.
>
> **[1:01](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=61)** So next we're going to put type Selection.
>
> **[1:13](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=73)** Now I find that there are times in coding when you just have to copy paste a bit of code and trust that in the future, you will either remember it or better still, it will make sense, and this is one of those bits of code.
>
> **[1:25](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=85)** It took me a very long time to find this bit of code that would work and do what I needed it to to allow me to run the selection command, and I still don't fully understand it if I'm honest, and I can't apply it from first principles., so I have to go and find it again and copy paste it, and if you can find a rule that makes sense, do let me know, but for now I would say copy that out by wrote because it works.
>
> **[1:49](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=109)** Now we can go down a bit and we can comment out the private property declarations down here, except for VisualSettings and Settings.
>
> **[1:58](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=118)** Now you can delete them, I just like to make these things reversible to begin with, and we need to add one in for our SVG elements.
>
> **[2:08](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=128)** So we say private svg of type Selection and qualify that as being an SVGElement like so.
>
> **[2:20](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=140)** Now we can delete most of the constructor function contents, 'cause you can see from the red underline that they no longer work because we have commented out the private declarations above.
>
> **[2:35](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=155)** So we're going to leave the log to the console up here and we're just going to get rid of everything else like so.
>
> **[2:44](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=164)** Now we're going to add the SVG element to the document in the constructor since the existence of that is not data-driven.
>
> **[2:53](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=173)** So in the constructor, we're going to say this.svg.
>
> **[2:57](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=177)** You can use it as a property of this because it's been declared up here, this.SVG is d3.select, good old familiar bit of d3 there, if you come from the same background as me, which is not TypeScript.
>
> **[3:11](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=191)** Squarely d3, options.element .append SVG,
>
> **[3:19](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=199)** and we're going to give it a class, apiBox, true, like so.
>
> **[3:27](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=207)** So we're going to append our element.
>
> **[3:29](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=209)** Now we need to delete the textNode section from the update method too 'cause there's no such property anymore.
>
> **[3:37](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=217)** So in fact, we just delete that like so, and if we just save that, it now does compile, which is good.
>
> **[3:47](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=227)** And if we check Power BI service now and go to Elements, click into inside of our div, we have this div and we go inside it, we now have an SVG with a class of kpiBox.
>
> **[4:05](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=245)** So we've successfully added our SVG.
>
> **[4:07](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=247)** It doesn't look terribly impressive yet, but it is there.
>
> **[4:11](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=251)** Now notice though, which you almost certainly can't see, if you've got very good eyesight, right at the top there, let's just get rid of this, so you can stand a fighting chance, it says Next Sales, this is called the title of the visual, and it's there by default, and we will need to get rid of that which I think we do within capabilities.json.
>
> **[4:33](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=273)** So we'll come on to that.
>
> **[4:35](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=275)** So let's open developer tools again and just go back to our SVG.
>
> **[4:43](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=283)** You may remember if you just look at the sort of blue highlighted box that our SVG has been added as a default size of 300 by 150 pixels, so it's a different size to our container and that's not what we want.
>
> **[4:59](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=299)** All Power BI visuals are responsive, that is they resize automatically to the size of the visual window, so the first thing we need to do is access the height and width of the window and use that to set the SVG size.
>
> **[5:12](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=312)** So let's take a look at the update method.
>
> **[5:15](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=315)** Because the window size is something that can change, you will want to set the width and height within update and not within your constructor function.
>
> **[5:25](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=325)** So here we have console.log VisualUpdateOptions, go back to the console, just clear that and refresh, Visual update, and here's our options, but this time we're not going to look at data views because it's not the data we're trying to access.
>
> **[5:42](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=342)** We have instead viewport, and within viewport, we have height, width, and scale, and now if I make that bigger and access the same thing again, viewport, guess what?
>
> **[6:02](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=362)** The width number has increased, which is what we wanted.
>
> **[6:06](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=366)** So let's go back to our code and we're going to say, let viewport equal options.viewport.
>
> **[6:17](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=377)** We don't need a private declaration for this one because we're only going to access it within the update function, and then we say this.svg.attri, attribute, and we say the width is viewport.width.
>
> **[6:39](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=399)** Just copy paste that, and change that bit to height.
>
> **[6:45](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=405)** And now it's compiled successfully, which is the first positive step, and then we refresh, use our inspector, and we've clicked that time straight on, in fact, the SVG, we don't even need to drill down to get it.
>
> **[7:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=420)** So our SVG now is full-size, but notice if I close this that our SVG came in under the title, so the Power BI engine has placed the title at the top and it's placed the SVG element underneath.
>
> **[7:18](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=438)** Now, often you want to keep that default title, by the way, you just can turn the title on and off themselves, like so, so now when they do that, the SVG will resize automatically to be the full size, but you can also turn it off permanently if you wish to in capabilities.json.
>
> **[7:38](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=458)** For now, I'm just going to turn it off there, and then we're going to make a change to visual.less, don't need anything about paragraphs now, and we're going to say svg, background-color is red, and that will mean that we can see it without all that hovering.
>
> **[7:58](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=478)** Okay, there we go.
>
> **[8:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=480)** If you want to permanently suppress the title of the graphic in capabilities, which I think for a KPI, generally you would, you need to add this line into the root of capabilities.json.
>
> **[8:13](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=493)** I don't think it matters whether it's at the top or the bottom.
>
> **[8:18](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=498)** SuppressDefaultTitle, true.
>
> **[8:27](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-responsive-svg-using-d3?u=76281980&t=507)** And now if we refresh, even when we put the title on and off, we don't see it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), private (4), delete (4), function (3), this. (3)
> **Env Vars:** svg (15), kpi (1)
> **CLI Commands:** make (5), find (4)
> **File Paths:** capabilities.json (3), visual.ts (1)
> **Code Identifiers:** apibox (1), textnode (1), kpibox (1)
> **Cross-References:** go back to (3)
> **Tools:** vs code (1)
> **UI Navigation:** go to (1)

#### Add rectangles and text to your KPI visual
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=0)** - [Instructor] Our aim here is to create two rectangle elements and two texts elements.
>
> **[0:05](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=5)** So for our KPI visual, we're going to have a box that contains the number, which is quite big.
>
> **[0:12](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=12)** And then a smaller box underneath, that contains a label, much like the title that we had before.
>
> **[0:21](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=21)** And we're going to let the user pick the colors of these things and so forth.
>
> **[0:25](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=25)** So we will create the elements that we need in the constructor function, which has we know is, in visual dot ts, up here.
>
> **[0:37](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=37)** So we've seen the drill now, we create the private property at the top.
>
> **[0:40](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=40)** Let's get rid of these ones now that we don't need.
>
> **[0:46](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=46)** So, let's say private KPI box.
>
> **[0:52](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=52)** Which is, and I'm just going to copy this there and then I'll have a private label box.
>
> **[1:03](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=63)** Likewise, private KPI text and private label text.
>
> **[1:13](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=73)** So there are the four elements that we're going to need.
>
> **[1:18](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=78)** In the constructor function, we say this.KPI box and we append it to the SVG.
>
> **[1:26](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=86)** This dot SVG append rectangle element.
>
> **[1:33](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=93)** And we're not posting the attributes in here of X or Y position or width or height because those things need to go in the update function instead.
>
> **[1:43](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=103)** We're just adding the element.
>
> **[1:48](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=108)** And we'll do that for all four, like so.
>
> **[1:57](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=117)** That's compiled, which is always a good sign.
>
> **[1:59](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=119)** And then we go to the update function and we're going to make some changes.
>
> **[2:06](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=126)** So, we want the KPI box to be full width.
>
> **[2:15](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=135)** So let's start with that one.
>
> **[2:18](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=138)** I should've copied the whole thing, while I was at it.
>
> **[2:25](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=145)** So we're going to make that the full width full height, and for now, we're going to hard code the color.
>
> **[2:36](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=156)** We will change this later, so that the user can do this themselves.
>
> **[2:41](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=161)** You can make it whatever color you like there.
>
> **[2:45](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=165)** Now the mandatory attributes for a wrecked element in D3, as you may know, are width, height, X, and Y, and we haven't got X and Y here.
>
> **[2:55](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=175)** But, as you may know, they default to zero if they're not set.
>
> **[2:59](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=179)** And because we want the rect to be the full size of the window, you want the top left of it positioned at zero, zero anyway.
>
> **[3:04](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=184)** So in other words, we don't need to specify X and Y even though they are mandatory.
>
> **[3:11](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=191)** Now, I'm going to copy paste that for label box, but label box is a bit different.
>
> **[3:20](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=200)** So we want label box to be full width, but I'm going to hard code for now the height of it, just to 20 pixels.
>
> **[3:30](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=210)** And I'd like to distinguish the colors, so.
>
> **[3:37](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=217)** Now one thing I didn't mention up here it's quite important, and this is a D3 point merely, rather than a Power BI one, it's important that you upend your text elements after your wrecked elements.
>
> **[3:49](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=229)** Otherwise the rectangles will be on top, and you won't be able to see the text.
>
> **[3:53](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=233)** So it doesn't matter too much what order you do things in the update function, but in the constructor function, you need to be careful about the order in which you add your elements.
>
> **[4:03](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=243)** So we've got labeled text for now.
>
> **[4:06](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=246)** Let's check what that has done in the front end.
>
> **[4:12](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=252)** And I think we should remove the SVG coloring as well 'cause that might make things look a bit ugly.
>
> **[4:20](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=260)** So, let's come here and refresh.
>
> **[4:24](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=264)** And there we have two boxes.
>
> **[4:27](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=267)** They have a sort of rather nasty gray color and then a black box at the top.
>
> **[4:34](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=274)** Now we're going to add some text.
>
> **[4:35](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=275)** We will make all these colors a bit prettier.
>
> **[4:38](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=278)** And where we've said that viewport, we're going to say let data view equal options dot data views naught, it's always a naught because Microsoft doesn't support an array of greater than length one at the moment.
>
> **[4:58](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=298)** So then when we come to do label text we can say this dot label text.
>
> **[5:04](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=304)** Let's do these from scratch, attribute, text, anchor, start, dominant, baseline, middle.
>
> **[5:26](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=326)** Y, you don't need that there, get rid of those quotation marks.
>
> **[5:32](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=332)** So a Y of 10, so that's going to place the text vertically centered, give it a class.
>
> **[5:41](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=341)** KPI label.
>
> **[5:46](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=346)** And then, for the all important thing, let's just make this a bit easier for you to read.
>
> **[5:58](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=358)** We need to actually give it some text.
>
> **[6:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=360)** Text is data view.
>
> **[6:03](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=363)** You want to access single, we changed that from categorical earlier and it's giving us the option of value.
>
> **[6:11](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=371)** I seem to think it's single dot column, from memory.
>
> **[6:15](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=375)** It's funny it didn't give me that option.
>
> **[6:17](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=377)** Display name, and that's not working, and it's failed to compile.
>
> **[6:24](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=384)** So, let's give it a text of hello and go to the front end and work out what's going on.
>
> **[6:28](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=388)** So you have 12, visual update in data views,
>
> **[6:37](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=397)** zero under single.
>
> **[6:41](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=401)** You should have single dot column dot display name and Power BI has thrown an error accessing this.
>
> **[6:48](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=408)** And I think that's because the column property is populated after this bit of code has run, which isn't terribly helpful for us.
>
> **[6:56](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=416)** But what we can do instead, luckily, whichever aggregation method we've used in capabilities dot Jason, we are always given this metadata property which contains columns data and objects data.
>
> **[7:11](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=431)** And the columns data looks very similar to the columns data within single, and we should be able to access this.
>
> **[7:19](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=439)** So let's try that again.
>
> **[7:20](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=440)** Data view dot metadata dot columns, that's better, dot, I think it was display name.
>
> **[7:30](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=450)** Wasn't it?
>
> **[7:32](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=452)** Nope, doesn't look like it was.
>
> **[7:34](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=454)** Columns naught dot display name.
>
> **[7:40](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=460)** Okay, so now if we go back and refresh, why is that black?
>
> **[7:50](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=470)** Not going to be able to see the texts on the black, are we?
>
> **[7:53](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=473)** So let's just get rid of that for a second.
>
> **[7:56](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=476)** We can see that we've now got net sales within our label box.
>
> **[8:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=480)** Now that looks a little bit unimpressive, perhaps, because it's exactly where the title was before that we suppressed.
>
> **[8:07](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=487)** But what this enables us to do actually is we can reposition this whole label section down to the bottom, or you could have it to the left, with the text going vertically.
>
> **[8:18](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=498)** You can have it positioned however you like now, whereas with the title that we suppressed, you could only ever have it in one position and we couldn't have put a colored background there.
>
> **[8:29](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=509)** So now for the KPI text, this is the final bit, and I'm just going to see what other colors we can make this.
>
> **[8:39](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=519)** Change that to Alice blue and that to pink.
>
> **[8:42](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=522)** I really don't like that gray.
>
> **[8:44](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=524)** There we go, bit pastel, but bit better than gray.
>
> **[8:48](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=528)** So, we have done the column name in the label and now we want the KPI text.
>
> **[8:55](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=535)** So since it's got a lot of the same attributes, let's copy paste this dot KPI text, and we'll say text anchor this time is middle.
>
> **[9:09](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=549)** I'm going to put baseline as still middle.
>
> **[9:12](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=552)** Y is going to be the viewport, height over two.
>
> **[9:19](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=559)** And now we need an X value too, which is viewport width over two.
>
> **[9:29](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=569)** And the class we'll say is KPI number.
>
> **[9:33](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=573)** And this time it's data view dot single dot value dot string.
>
> **[9:42](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=582)** D3 requires us to pass it a string into the text property there.
>
> **[9:48](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=588)** If we get rid of that and try to save it, it's D3 that would throw us an error.
>
> **[9:55](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=595)** And you can see it, it's giving us type errors, an awful lot of them.
>
> **[10:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=600)** If you are using a text element, you need dot two string, unless your input data is already a string of course.
>
> **[10:07](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=607)** So let's see how that looks.
>
> **[10:10](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-rectangles-and-text-to-your-kpi-visual?u=76281980&t=610)** And there we have a strangely sized but getting to be attractive, KPI visual, and coming up, we will adjust the font size and we will start to learn how to access the number formatting so that we can round the KPI up or down appropriately.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), function (6), private (5), this. (4), class. (1)
> **Env Vars:** kpi (12), svg (3)
> **CLI Commands:** make (7)
> **Definitions:** is a  (2), in other words (1)
> **UI Navigation:** go to (2)
> **Cross-References:** coming up (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Use formatting utils API to set text size dynamically
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=0)** - [Instructor] Now we're going to learn how to use one of Microsoft's many APIs.
>
> **[0:04](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=4)** The one we will use is called formattingutils.
>
> **[0:08](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=8)** There are many others, for example, for tool tips or cross filtering.
>
> **[0:12](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=12)** And this course can't hope to teach you all of these APIs but the process is similar between them.
>
> **[0:18](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=18)** So the user is going to adjust the window size and we have to plan for that in our code.
>
> **[0:25](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=25)** We could let them adjust the font size down here in the formatting pane.
>
> **[0:29](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=29)** But it would be better if we can adjust the font automatically to keep step with the window size.
>
> **[0:35](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=35)** For this we can use a powerbi library called formattingutils, and first things first, we need to install it.
>
> **[0:44](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=44)** So if we go to the terminal and stop the server, I've just pressed control C there, and then type npm, i for install powerbi-visuals-utils-formattingutils
>
> **[1:04](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=64)** and this will install the package into node modules.
>
> **[1:09](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=69)** And now if we look under node modules, you should have powerbi-visuals-utils-formattingutils just there.
>
> **[1:21](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=81)** So now the first thing we need to do is add some imports into visual.ts, our master file.
>
> **[1:28](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=88)** So we're going to import the textMeasurementService,
>
> **[1:38](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=98)** interfaces from powerbi, and hopefully it saved this.
>
> **[1:45](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=105)** Getting repetitive strain injury on that one.
>
> **[1:47](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=107)** And then under that, we're going to say import TextProperties equals interfaces, that's what we've imported just above, dot TextProperties.
>
> **[2:02](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=122)** And that just means that we can refer to that TextProperties a little more cleanly.
>
> **[2:08](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=128)** Then finally, for the imports, we're going to say import valueFormatter from powerbi like so.
>
> **[2:21](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=141)** Next we set up a format using the format that it's assigned to that particular column in the update function.
>
> **[2:29](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=149)** So I don't know if you remember, but we had a look in the options object.
>
> **[2:36](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=156)** We can just have a quick look here and we looked at not just data views, yes single column, and in fact, single within column you can see it says format.
>
> **[2:53](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=173)** And you've got this notation here which says that the net sales field is associated with this kind of formatting.
>
> **[3:03](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=183)** It's a financial value in dollars, so it has a dollar.
>
> **[3:08](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=188)** Then it has a number with common notation for thousands, et cetera.
>
> **[3:13](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=193)** And there's three different types there.
>
> **[3:15](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=195)** And that's what we want to access now so that we can format this 1.2 million number appropriately and give it a dollar sign, basically, if it needs one or it might be a pound sign or whatever, depending on which field you've picked.
>
> **[3:28](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=208)** And that's the beauty of accessing this.
>
> **[3:29](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=209)** It seems a bit of a faff to begin with because obviously it'd be really easy just to do that and say stick a dollar sign in front and make sure you put some commas in the right place and the right number of decimal places.
>
> **[3:41](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=221)** But then when you're user drags and drops a different field into this value say for instance, return rate, which is a percent, the whole thing looks ridiculous.
>
> **[3:51](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=231)** So you need to access these properties in order for it to look right, whatever the data.
>
> **[3:58](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=238)** So we're going to say let iValueFormatter equal valueFormatter dot create
>
> **[4:11](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=251)** curly braces in there, a format which is dataView.
>
> **[4:18](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=258)** And we're going to access this from metadata rather than from single so that we can be sure that the data is there at the right time and also if we were to change it to categorical data, this format would still work, columns naught dot format.
>
> **[4:34](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=274)** And finally, then we use our formatter on our kpi text.
>
> **[4:39](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=279)** So where we pull out the number, we now say iValueFormatter dot format
>
> **[4:52](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=292)** and we pop the number inside the brackets and we save.
>
> **[4:56](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=296)** We're going to have to start our server again.
>
> **[4:58](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=298)** So we're in kpiBox2, passed successfully.
>
> **[5:06](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=306)** Good start.
>
> **[5:07](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=307)** Let's close that, make this a bit bigger.
>
> **[5:10](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=310)** Let's refresh that.
>
> **[5:12](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=312)** And that hasn't worked.
>
> **[5:15](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=315)** The first thing to check is that you've actually saved your file 'cause that's a common thing that I forget to do and then wonder why it hasn't updated it.
>
> **[5:22](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=322)** So I've only formatted dot format toString, and that looks good.
>
> **[5:29](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=329)** So one thing that is sometimes worth trying is simply starting and then stopping the server again.
>
> **[5:37](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=337)** And you'd be surprised how often that will push through something that you just cannot figure out why it's not showing up.
>
> **[5:43](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=343)** So let's see if that's worked, let's close that bigger resolutely not wanting us to see that.
>
> **[5:57](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=357)** So now I'm going to put console.log hello.
>
> **[6:06](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=366)** Let's see what happens when I log it to the console is it's just not working at all.
>
> **[6:12](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=372)** Correct, it's not applying the formatter, that iValueFormatter, and there at last is the problem.
>
> **[6:23](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=383)** Well done if you spotted it before me.
>
> **[6:25](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=385)** So we were trying to pass in a string to a formatter that is designed to work on numbers.
>
> **[6:33](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=393)** So that was never going to work.
>
> **[6:34](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=394)** Let's try that again.
>
> **[6:38](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=398)** And you may not be able to see it, but there's a dollar sign there and here it says, hello, and there's a dollar sign and thousand notation, make that a bit bigger so I can prove to you that the kpi's working a little bit better.
>
> **[6:49](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=409)** Phew, right, now let's crack on.
>
> **[6:52](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=412)** So the next thing is to make the font a bit bigger.
>
> **[6:56](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=416)** So my idea for this kpiBox is that the font really stretches from left to right, and as the user resizes the window, the font resizes at the same time and we're going to do that using the textMeasurementService that we just imported, what feels like several days ago now after that little excursion.
>
> **[7:16](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=436)** Okay, so we can get rid of that.
>
> **[7:22](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=442)** And what we're going to do up here now is let kpiValue equal this
>
> **[7:43](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=463)** because we need to do a bit of work on it now before we get to these declarations down here, this dot kpiText, before we get to this point, we need to know a few bits of information.
>
> **[7:55](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=475)** So we need the formatted string in a variable, which we've got.
>
> **[8:01](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=481)** And then we're going to say let the textWidth equal naught because this is TypeScript.
>
> **[8:10](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=490)** I'm going to be a little bit more careful and tell it which types to use.
>
> **[8:15](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=495)** That's a number, that's textWidth's number.
>
> **[8:17](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=497)** And then we'll say, let fontSize number equals seven.
>
> **[8:26](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=506)** And that's because I think a font size of seven is pretty much reasonably as small as you can go.
>
> **[8:31](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=511)** So we're going to start at seven and iterate up.
>
> **[8:35](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=515)** There's no clever way of doing it that I know about so going to have a while loop.
>
> **[8:41](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=521)** We say while the textWidth and the textWidth which would be a value in pixels is less than the viewport.width which is also a value of pixels.
>
> **[8:53](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=533)** While that is true, please put fontSize up and then each time we'll say let textProperties of type TextProperties equal curly braces text, which is your kpiValue.
>
> **[9:15](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=555)** In order for the Microsoft API, this formattingutils to work out the pixel width of our text, which is what we are trying to achieve here, it needs a few more bits of information.
>
> **[9:26](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=566)** One of them is which font because obviously the fonts are very different.
>
> **[9:30](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=570)** If you were using Courier for example, the same word would be much wider than if you were using Ariel.
>
> **[9:37](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=577)** And then we give it the fontSize, which we have to do using the pixel notation as well.
>
> **[9:46](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=586)** So we're saying, let the textProperties be equal to that.
>
> **[9:49](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=589)** Then textWidth can be set to textMeasurementService dot measureSvgTextWidth, you can see there are a few options there that may be useful depending what you're trying to achieve.
>
> **[10:08](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=608)** And then done that wrong up here.
>
> **[10:11](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=611)** So I've used the capital T which I didn't mean to do for an instance.
>
> **[10:17](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=617)** So then we're going to make that lowercase textProperties bump.
>
> **[10:21](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=621)** Okay, so let's just have a little look at this while loop.
>
> **[10:24](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=624)** Hopefully it's not going to give us an infinite loop and crash.
>
> **[10:28](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=628)** While the textWidth is less than the viewport.width, that's the width of our rectangle, put the font size up, increment it by one, redeclare your textProperties with the new fontSize.
>
> **[10:40](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=640)** The other items actually are staying the same each time.
>
> **[10:43](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=643)** And then your textWidth go and access the textMeasurementService using your new properties and then that's the number that you check next time.
>
> **[10:53](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=653)** And you keep going until you've equaled or exceeded the viewport.width.
>
> **[10:59](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=659)** So then we use this in our attributes.
>
> **[11:01](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=661)** So where it says attribute kpi.
>
> **[11:07](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=667)** I was going to say where it says attributes fontSize but actually it doesn't, so we need to add it in.
>
> **[11:12](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=672)** Attribute fontSize and that's fontSize there, okay.
>
> **[11:20](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=680)** Now for the moment of truth, one, it compiles, two, and it's enormous and it fits the SVG size and the rectangle size, which is what we wanted.
>
> **[11:33](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-formatting-utils-api-to-set-text-size-dynamically?u=76281980&t=693)** Much better, we're getting there.

> [!info]- Semantic Content
>
> **Code Identifiers:** textwidth (7), fontsize (7), textmeasurementservice (4), textproperties (4), ivalueformatter (3)
> **Code Keywords:** let (15), this. (2), finally, (2), function (1), pass (1)
> **CLI Commands:** make (5), node (2), npm (1)
> **Prerequisites:** install (3), set up (1)
> **Definitions:** is called (1), means that (1), is a  (1)
> **Analogies:** for example (2), for instance (1)
> **Env Vars:** api (1), svg (1)
> **File Paths:** visual.ts (1)

#### Use font size and fill color from the formatting pane
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=0)** - [Instructor] Now we're going to let the users set the rectangle color and label font size, this Net Sales up here via the Formatting pane.
>
> **[0:08](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=8)** We're also going to use the font size that the user sets to derive the height of the label box, so the font always fits inside.
>
> **[0:17](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=17)** We don't want them to make that 40 pixels wide and for the box still to be tiny, that will look silly.
>
> **[0:23](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=23)** So let's ease you back into the capabilities file by first looking at our Formatting pane, and seeing what can be deleted.
>
> **[0:30](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=30)** Now as I've said before, general title background all of that, they're all mandatory, they come as default, you can't get rid of those, but the one that's optional here that's been created is this Data colors.
>
> **[0:41](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=41)** And we can change the name of that.
>
> **[0:43](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=43)** And we can change the name and type of all the things that sit inside of it.
>
> **[0:49](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=49)** So we have a Default color, Show all Data points which is a Boolean basically true or false on or off .
>
> **[0:58](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=58)** Fill, Color saturation, which is a fill rule rather than a fill, which means that you can apply a formula basically to generate the color.
>
> **[1:12](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=72)** Although that isn't looking like the fill rule interface, if I'm honest, it should have a little FX, which it doesn't seem to have so maybe that one's not working quite right.
>
> **[1:20](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=80)** They are quite tricky fill rules, we probably will cover them later.
>
> **[1:24](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=84)** And then we have this Text Size.
>
> **[1:26](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=86)** And notice that's in points and not in pixels.
>
> **[1:29](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=89)** And we can put that up and down, and at the moment that has no effect whatsoever on our graphic because we haven't linked the two things together.
>
> **[1:39](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=99)** So we're going to keep Text Size and Fill Color, and we're going to delete all the rest, that's the first thing.
>
> **[1:48](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=108)** So we come to capabilities.json and we can change the section name actually first of all 'cause Data Colors doesn't make sense for us and we'll call it KPI Settings which hopefully would draw the user's eye and attention.
>
> **[2:06](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=126)** And inside that we're going to delete the three things that we don't need.
>
> **[2:10](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=130)** So we have this properties object which goes all the way down here and encompasses all five of those settings.
>
> **[2:17](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=137)** So we don't need Default Color, gone.
>
> **[2:22](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=142)** We don't need Show all data points, we are keeping Fill.
>
> **[2:27](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=147)** Note that Fill and Fill rule are different, even though they appear to be displaying the same thing.
>
> **[2:34](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=154)** At the moment for us, they're defined differently, meant to do different things.
>
> **[2:38](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=158)** So we have Fill and we have Font size left, and then save that.
>
> **[2:48](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=168)** And we can change the displayNames to Fill color, and Label font size because we've got a KPI font size as well, haven't we?
>
> **[3:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=180)** And we don't want the user to get confused.
>
> **[3:03](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=183)** We're not changing the object name here, only the displayName.
>
> **[3:08](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=188)** So let's see how that looks in the front end when we hit refresh.
>
> **[3:15](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=195)** Sometimes this doesn't refresh automatically or it didn't use to, and I think it's got a lot better.
>
> **[3:20](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=200)** So the benefit of updates via the cloud often I used to have to stop and start the server to get the Formatting pane to adjust or click away and click back.
>
> **[3:28](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=208)** But that was just updated in real time, which is good.
>
> **[3:33](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=213)** Now you might recall we had a file called settings.ts and that contained a copy of these object names, there it is.
>
> **[3:42](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=222)** Let's comment out the ones that we don't need anymore.
>
> **[3:45](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=225)** So we've just got rid of Default color, Show all data points.
>
> **[3:50](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=230)** We've kept Fill, got rid of Fill rule and we've kept Font size.
>
> **[3:55](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=235)** They're still called those things as well.
>
> **[3:59](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=239)** Now if we go back to visual.ts, you can see that we import the settings in settings.ts here.
>
> **[4:09](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=249)** So we've got import VisualSettings from the settings file.
>
> **[4:13](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=253)** And if we click on VisualSettings, and in fact double-click, we can sort of track it down and see where it ends up.
>
> **[4:19](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=259)** So within the class, we use VisualSettings and we assign it to a name of settings.
>
> **[4:24](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=264)** And if we keep going in the update function, it says this.settings is Visual.parseSettings.
>
> **[4:31](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=271)** And let's log that to the console, take a look.
>
> **[4:45](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=285)** And we know that we get that on refresh 'cause we saw that before.
>
> **[4:50](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=290)** So the log to the console that we just created was settings of type visualSettings, and within that you can see we have dataPoint.
>
> **[4:58](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=298)** And that contains the data that we want.
>
> **[5:01](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=301)** At the moment we have a font size of 10, which corresponds to the font size down here.
>
> **[5:10](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=310)** And you can see that the font size now says 11 because I just updated it here in the Formatting pane.
>
> **[5:15](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=315)** And the Fill at the moment says blank, it's showing here is white but because the user hasn't actually set it, it's not got a value so I'm going to make it a nice pink color.
>
> **[5:27](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=327)** And then you can see we've now got a hex code and a font size of 11.
>
> **[5:32](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=332)** Now in some visuals, you would have more than one data point in most visuals in fact, but because we are using the single aggregation in capabilities.json, we have a single data aggregation and therefore we only have the one Data point.
>
> **[5:49](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=349)** So we've seen that as we change the settings a new object is logged and that captures the changes that we have made or that your user will have made the future.
>
> **[5:58](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=358)** So what we need to do is use these values in our graphic.
>
> **[6:02](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=362)** Go back to visual.ts update function, so first let's change the Fill attributes of our box to be settings.fill, this.settings., doesn't like that, today let's make life a bit easier for ourselves.
>
> **[6:27](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=387)** Say, let settings equal this.settings.dataPoint.
>
> **[6:40](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=400)** Then down here, we can go settings.fill.
>
> **[6:46](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=406)** And what we're going to do for now is set both the labelBox and the kpiBox to the same color.
>
> **[6:55](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=415)** But for the kpiBox, we are going to introduce a fill opacity, that's a transparency value of 0.3.
>
> **[7:07](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=427)** Now the more complex thing to do is to set the font size because we're going to derive the rectangle height from this.
>
> **[7:14](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=434)** Maybe before we do that one, we'll just have a look, there we go, that's what we've created with our user driven coloring.
>
> **[7:23](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=443)** You can see that the labelBox is a dark version of the kpiBox there, okay.
>
> **[7:30](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=450)** But we're not finished yet, we're going to derive our label font size by the user selection, and then we're going to derive the rectangles height from that font size.
>
> **[7:41](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=461)** So first part of that is easy, labelText, we say .attribute font-size is settings.fontSize.
>
> **[8:05](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=485)** If you've got keen eyesight, you should be able to see that is getting bigger.
>
> **[8:12](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=492)** But it seems to be kept at a certain size almost what happens if we type that in as 72, we've gone out of the range that we're allowed.
>
> **[8:23](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=503)** Can you see, it says, value must be less than or equal to 60, so let's make it 60.
>
> **[8:28](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=508)** So that's as big as anybody's going to be able to make this label, but we obviously need to position that a bit more cleverly and change the height of the rectangle behind it.
>
> **[8:40](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=520)** So we can reuse some of the text measurement service code that we already had.
>
> **[8:46](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=526)** So we're going to say, let labelText be equal dataView.metadata.columns(0).displayName,
>
> **[9:03](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=543)** and while we're at it, we can replace that and call that labelText, my point having signed bit of code twice.
>
> **[9:10](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=550)** So there's our labelText, and then I'm going to copy this.
>
> **[9:19](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=559)** Say let textProperties but this time the text is labelText.
>
> **[9:28](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=568)** And instead of the variable fontSize, we're taking that from settings, which is the user driven settings.
>
> **[9:33](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=573)** So settings.fontSize, and we're adding points rather than pixels because that's what it says in the user interface.
>
> **[9:44](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=584)** And then we'll say, let labelBoxHeight of type number, equal the textMeasurementService.measureSvgtextRect,
>
> **[10:05](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=605)** using textProperties, so that's a sort of imaginary rectangle around the text.
>
> **[10:12](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=612)** That's how I think of it .height.
>
> **[10:18](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=618)** And labelBoxHeight then goes in here, we're no longer making that 20 pixels.
>
> **[10:27](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=627)** We also need to change the text location because at the moment that is hard coded to be 10.
>
> **[10:34](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=634)** So we want labeBoxHeight/2 because it's already vertically aligned.
>
> **[10:40](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=640)** So as long as you're halfway down, it should look good.
>
> **[10:43](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=643)** So now the user should be able to change the size of the text and automatically derive the box height at the same time.
>
> **[10:50](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=650)** Let's check that out.
>
> **[10:57](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=657)** Now that looks good.
>
> **[10:58](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=658)** The Net Sales side of things looks good.
>
> **[11:02](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=662)** And if we start reducing that, then both the height of the rectangle and the size of the font change at the same time, which is what we wanted.
>
> **[11:11](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=671)** But if we stick it back up to its maximum value of 60, you might notice something doesn't look quite right.
>
> **[11:18](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=678)** Our KPI value is a bit high-waisted, it's a bit vertically too high, and that's because it is centrally aligned for the entire height of the window.
>
> **[11:29](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=689)** It's not taken off the size of the label box which is what it should do.
>
> **[11:33](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=693)** So basically that label should be a bit lower.
>
> **[11:36](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=696)** So let's go back to visual.ts, kpiText, the y height should be the viewport.height plus labelBoxHeight/2.
>
> **[11:55](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=715)** And now if we refresh that it's looking much better.
>
> **[12:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/use-font-size-and-fill-color-from-the-formatting-pane?u=76281980&t=720)** So now we have our first proper custom visual and shortly we're going to see how to package the code and import it into Power BI.

> [!info]- Semantic Content
>
> **Code Identifiers:** labeltext (5), kpibox (3), fontsize (3), labelboxheight (3), displayname (2)
> **Code Keywords:** let (14), this. (5), interface (2), delete (2), function (2)
> **File Paths:** visual.ts (3), capabilities.json (2), settings.ts (2)
> **CLI Commands:** make (6)
> **Definitions:** is a  (4), means that (1)
> **Env Vars:** kpi (3)
> **Cross-References:** go back to (3)
> **UI Navigation:** click on (1), double-click (1)

#### Challenge: Add fill opacity to the formatting pane
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/challenge-add-fill-opacity-to-the-formatting-pane?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/challenge-add-fill-opacity-to-the-formatting-pane?u=76281980&t=0)** - [Instructor] Currently we have hard-coded the fill opacity of the KPI Box to be 0.3.
>
> **[0:12](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/challenge-add-fill-opacity-to-the-formatting-pane?u=76281980&t=12)** You can't pair KPI box fill opacity 0.3.
>
> **[0:18](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/challenge-add-fill-opacity-to-the-formatting-pane?u=76281980&t=18)** I want you to change this to a formatting pane option called opacity.
>
> **[0:23](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/challenge-add-fill-opacity-to-the-formatting-pane?u=76281980&t=23)** So what I mean is that you're going to add another box down here that will accept a numeric input and that numeric input should then drive the opacity of this box, allowing your users to pick how deeply they would like the color.
>
> **[0:40](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/challenge-add-fill-opacity-to-the-formatting-pane?u=76281980&t=40)** As a clue, you need to access this value from your settings.TS file and then use it in your visual.TS so that you can see the changes in the front end.
>
> **[0:50](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/challenge-add-fill-opacity-to-the-formatting-pane?u=76281980&t=50)** Good luck.

> [!info]- Semantic Content
>
> **File Paths:** settings.ts (1), visual.ts (1)
> **Env Vars:** kpi (2)
> **Versions:** 0.3 (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Add fill opacity to the formatting pane
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-add-fill-opacity-to-the-formatting-pane?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-add-fill-opacity-to-the-formatting-pane?u=76281980&t=0)** - [Instructor] So the task at hand is to improve this visual to make it more user driven so that the user can select their own transparency level or fill opacity for this large rectangle that's a sort of pale orange.
>
> **[0:19](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-add-fill-opacity-to-the-formatting-pane?u=76281980&t=19)** In order to add another section here, we need to change the capabilities files.
>
> **[0:24](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-add-fill-opacity-to-the-formatting-pane?u=76281980&t=24)** And we're going to use a numeric formatting option, which we haven't used before.
>
> **[0:29](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-add-fill-opacity-to-the-formatting-pane?u=76281980&t=29)** This one is a type of fill color.
>
> **[0:30](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-add-fill-opacity-to-the-formatting-pane?u=76281980&t=30)** This one is font size and numeric is a new one.
>
> **[0:34](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-add-fill-opacity-to-the-formatting-pane?u=76281980&t=34)** And you'll often come across this.
>
> **[0:36](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-add-fill-opacity-to-the-formatting-pane?u=76281980&t=36)** You will want a new formatting pane option and it's of a type that you haven't seen before.
>
> **[0:42](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-add-fill-opacity-to-the-formatting-pane?u=76281980&t=42)** And the way to find that out is to find an example.
>
> **[0:46](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-add-fill-opacity-to-the-formatting-pane?u=76281980&t=46)** So here we have a GitHub repository from Microsoft of a Mekko chart.
>
> **[0:51](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-add-fill-opacity-to-the-formatting-pane?u=76281980&t=51)** Now, do be careful and make sure that you are using version three or later because Microsoft still hosts some version two code, which won't work at all.
>
> **[1:02](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-add-fill-opacity-to-the-formatting-pane?u=76281980&t=62)** But if you come into this chart, or any other that you google, this is just an example, and have a look at the capabilities file, and go down to options, and then properties within options, here you go, there's one called width, and width is of type numeric.
>
> **[1:21](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-add-fill-opacity-to-the-formatting-pane?u=76281980&t=81)** So there's an example of how to do it basically.
>
> **[1:26](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-add-fill-opacity-to-the-formatting-pane?u=76281980&t=86)** So what we are going to do is come in here, copy a previous one.
>
> **[1:33](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-add-fill-opacity-to-the-formatting-pane?u=76281980&t=93)** I'll call it opacity of KPI.
>
> **[1:39](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-add-fill-opacity-to-the-formatting-pane?u=76281980&t=99)** Call it something that will make sense to the user.
>
> **[1:42](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-add-fill-opacity-to-the-formatting-pane?u=76281980&t=102)** Transparency is a more well-known term than opacity.
>
> **[1:50](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-add-fill-opacity-to-the-formatting-pane?u=76281980&t=110)** Get rid of these curly brackets and we just say type, numeric is true.
>
> **[1:57](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-add-fill-opacity-to-the-formatting-pane?u=76281980&t=117)** Then we go to settings and I'm going to say public opacityKPI of type number and we'll start it off at 0.3.
>
> **[2:11](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-add-fill-opacity-to-the-formatting-pane?u=76281980&t=131)** And save that.
>
> **[2:13](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-add-fill-opacity-to-the-formatting-pane?u=76281980&t=133)** Then we go into visual.ts and where we have the fill opacity for label box, KPI box, in fact, currently hard coded, instead, we're going to say settings.opacityKPI and then we need a .toString.
>
> **[2:35](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-add-fill-opacity-to-the-formatting-pane?u=76281980&t=155)** I'm not entirely sure why we need a toString method here.
>
> **[2:38](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-add-fill-opacity-to-the-formatting-pane?u=76281980&t=158)** I can pass a string or a number in if I hard code it.
>
> **[2:41](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-add-fill-opacity-to-the-formatting-pane?u=76281980&t=161)** But when I pass in the variable, I have to convert it.
>
> **[2:44](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-add-fill-opacity-to-the-formatting-pane?u=76281980&t=164)** It's one of the many gotchas you will face in converting from D3 to custom visuals.
>
> **[2:50](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-add-fill-opacity-to-the-formatting-pane?u=76281980&t=170)** So let's take a look at that now in the front end.
>
> **[2:56](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-add-fill-opacity-to-the-formatting-pane?u=76281980&t=176)** And there we have a box.
>
> **[2:58](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-add-fill-opacity-to-the-formatting-pane?u=76281980&t=178)** Now, with the type of numeric, you get an input field a bit like a text input.
>
> **[3:03](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-add-fill-opacity-to-the-formatting-pane?u=76281980&t=183)** If you're familiar with Power BI, you may know it's possible to create a numeric slider with min and max ranges, which is what I would have here if I had the choice but these features are not currently documented.
>
> **[3:14](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-add-fill-opacity-to-the-formatting-pane?u=76281980&t=194)** And the advice from Microsoft developers, if you're creating a custom visual is to stick with numeric type for now and to lose all hope of having a slider.
>
> **[3:23](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-add-fill-opacity-to-the-formatting-pane?u=76281980&t=203)** So if we change that value, you can see it updates in real time.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (2), this. (1), type, (1), public (1), let (1)
> **CLI Commands:** make (3), find (2)
> **Code Identifiers:** opacitykpi (2), tostring (2)
> **Definitions:** is a  (3)
> **Env Vars:** kpi (2)
> **File Paths:** visual.ts (1)
> **Versions:** 0.3 (1)
> **Tools:** github (1)

#### Challenge: Change the font color the KPI and label
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/challenge-change-the-font-color-the-kpi-and-label?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/challenge-change-the-font-color-the-kpi-and-label?u=76281980&t=0)** - [Instructor] The task now is to do two things, to let the user pick the font color for the KPI and the font color for the label.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Env Vars:** kpi (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Change the font color the KPI and label
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-change-the-font-color-the-kpi-and-label?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-change-the-font-color-the-kpi-and-label?u=76281980&t=0)** - [Instructor] As a reminder, the task is to let the user change the color of the font, both for the label and separately for the KPI.
>
> **[0:13](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-change-the-font-color-the-kpi-and-label?u=76281980&t=13)** So there's going to be two new fill colors box within this KPI settings section.
>
> **[0:21](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-change-the-font-color-the-kpi-and-label?u=76281980&t=21)** So as ever, we go to capabilities first and we've got something we can copy paste here which is called fill, and I'm going to pop it under fill,
>
> **[0:34](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-change-the-font-color-the-kpi-and-label?u=76281980&t=34)** like so, I'm going to call this one, feel fill KPI font and fill label font.
>
> **[0:50](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-change-the-font-color-the-kpi-and-label?u=76281980&t=50)** And the rest of it's done for us type, fill, solid, color, true.
>
> **[0:55](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-change-the-font-color-the-kpi-and-label?u=76281980&t=55)** So now we go to settings and note that fill is a string, you'd almost think it would have its own sort of type for color, but it doesn't.
>
> **[1:09](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-change-the-font-color-the-kpi-and-label?u=76281980&t=69)** So fill KPI, and I think it said front after it and tip, we just pop back and have a look.
>
> **[1:18](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-change-the-font-color-the-kpi-and-label?u=76281980&t=78)** Yep.
>
> **[1:19](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-change-the-font-color-the-kpi-and-label?u=76281980&t=79)** So those strings are all like so and I'm going to give this a default value because I don't want it to start off as blank.
>
> **[1:29](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-change-the-font-color-the-kpi-and-label?u=76281980&t=89)** I'm going to make it black to begin with although this can be quite effective white as well.
>
> **[1:37](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-change-the-font-color-the-kpi-and-label?u=76281980&t=97)** So there's our settings file.
>
> **[1:40](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-change-the-font-color-the-kpi-and-label?u=76281980&t=100)** And then all we have to do is go to visual.ts and the label text, we add an attribute that .attribute fill and this is setting.filllabelfont and we can copy that one and just change this bit, so the KPI font and then when we pop back here and refresh.
>
> **[2:14](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-change-the-font-color-the-kpi-and-label?u=76281980&t=134)** Now, that's interesting.
>
> **[2:16](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-change-the-font-color-the-kpi-and-label?u=76281980&t=136)** Did you notice that these color pickers have arrived at the bottom?
>
> **[2:22](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-change-the-font-color-the-kpi-and-label?u=76281980&t=142)** And I'd forgotten that that's what happened there, so it would seem that the order of this data point settings drives the order of how things appear rather than the order of the object in capabilities.json because here I've put all the colors together and here they are in a different order.
>
> **[2:43](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-change-the-font-color-the-kpi-and-label?u=76281980&t=163)** So that's worth knowing.
>
> **[2:46](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-change-the-font-color-the-kpi-and-label?u=76281980&t=166)** And if we change the KPI font to be white, you can't really see it, but it is quite effective having the labeling white, I think that can look quite good.

> [!info]- Semantic Content
>
> **Env Vars:** kpi (6)
> **UI Navigation:** go to (3)
> **File Paths:** visual.ts (1), capabilities.json (1)
> **Code Keywords:** let (1), type, (1)
> **Definitions:** is called (1), is a  (1)
> **CLI Commands:** make (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Place label at top or bottom
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/challenge-place-label-at-top-or-bottom?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/challenge-place-label-at-top-or-bottom?u=76281980&t=0)** (pleasant electronic music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/challenge-place-label-at-top-or-bottom?u=76281980&t=5)** - [Instructor] Currently the label box is at the top of our visual.
>
> **[0:09](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/challenge-place-label-at-top-or-bottom?u=76281980&t=9)** I would like you to add a dropdown in the formatting pane so that the user can select top or bottom, and you'll need to adjust the code so that the label box and the text move accordingly.
>
> **[0:21](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/challenge-place-label-at-top-or-bottom?u=76281980&t=21)** This should take no more than five minutes.

> [!info]- Semantic Content
>
> **UI Navigation:** dropdown (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (pleasant electronic music) (1)

#### Solution: Place label at top or bottom
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-place-label-at-top-or-bottom?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-place-label-at-top-or-bottom?u=76281980&t=0)** - [Instructor] So the task is to add a dropdown in the formatting pane so that the user can select whether they want the label to appear at the top or the bottom, and I've asked you to create a dropdown.
>
> **[0:18](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-place-label-at-top-or-bottom?u=76281980&t=18)** So this is a property of type enumeration, which we haven't come across before, and I'm going to just pop it at the bottom here.
>
> **[0:27](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-place-label-at-top-or-bottom?u=76281980&t=27)** I'm going to call it the labelLocation,
>
> **[0:36](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-place-label-at-top-or-bottom?u=76281980&t=36)** and we have this property that we've not used before of displayNameKey.
>
> **[0:42](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-place-label-at-top-or-bottom?u=76281980&t=42)** Label_position, type, curly brackets enumeration which just means list, and that's what's going to tell Power BI to display this as a dropdown box.
>
> **[1:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-place-label-at-top-or-bottom?u=76281980&t=60)** And then within our list, we enumerate the options, and the top one is value top, which itself has a displayName of Top, and it has its own displayNameKey of Label_top,
>
> **[1:24](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-place-label-at-top-or-bottom?u=76281980&t=84)** and then we're going to copy that because life's too short.
>
> **[1:29](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-place-label-at-top-or-bottom?u=76281980&t=89)** Oops, that didn't work very well.
>
> **[1:32](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-place-label-at-top-or-bottom?u=76281980&t=92)** And this time we want a value bottom, Bottom, bottom,
>
> **[1:41](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-place-label-at-top-or-bottom?u=76281980&t=101)** and we can save that.
>
> **[1:43](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-place-label-at-top-or-bottom?u=76281980&t=103)** Then we go to settings and this time variable is of type string, labelLocation of type string, and we'll start it sitting at the top.
>
> **[1:59](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-place-label-at-top-or-bottom?u=76281980&t=119)** And then in the visual, it is the Y values this time that we will need to change of both the labelBox and the labelText.
>
> **[2:11](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-place-label-at-top-or-bottom?u=76281980&t=131)** Let's put that in so we can see all of it without scrolling.
>
> **[2:19](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-place-label-at-top-or-bottom?u=76281980&t=139)** All right.
>
> **[2:22](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-place-label-at-top-or-bottom?u=76281980&t=142)** For the labelBox, we have a new attribute of y, we didn't need it before 'cause it just defaulted to zero, and we say, y is, and then we're going to put an if statement, an in-line if statement.
>
> **[2:35](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-place-label-at-top-or-bottom?u=76281980&t=155)** Settings.labelLocation, if that is equal to top, then return us zero, otherwise we want viewport.height minus labelBoxHeight, like so, and of course we need to do the same thing with labelText.
>
> **[3:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-place-label-at-top-or-bottom?u=76281980&t=180)** Now, if we had created groups and put our elements into groups, we would only need to adjust one Y value, or probably a transform translate value for the group, so it depends how you've structured your elements, but in this case, we need to adjust both Ys, and need the same sort of thing here.
>
> **[3:23](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-place-label-at-top-or-bottom?u=76281980&t=203)** Depending on the label location, if it's top then we want labelBoxHeight/2, otherwise we want viewport.height.
>
> **[3:35](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-place-label-at-top-or-bottom?u=76281980&t=215)** And I've just noticed I've got an equal sign up there which definitely wouldn't have worked, neither with that one, so we want viewport.height minus labelBoxHeight/2.
>
> **[3:47](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-place-label-at-top-or-bottom?u=76281980&t=227)** Now, if we go and check that in the front end, label position Top.
>
> **[3:56](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-place-label-at-top-or-bottom?u=76281980&t=236)** when we change it to bottom, it swaps just as it should, but of course the KPI value needs to adjust as well.
>
> **[4:03](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-place-label-at-top-or-bottom?u=76281980&t=243)** So the Y value there needs to also be conditional I've just pressed paste there.
>
> **[4:13](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-place-label-at-top-or-bottom?u=76281980&t=253)** If label location is top, we want viewport.height, viewport.height/2 plus labelBoxHeight/2,
>
> **[4:30](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-place-label-at-top-or-bottom?u=76281980&t=270)** and otherwise you want viewport.height/2 minus labelBoxHeight/2.
>
> **[4:40](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-place-label-at-top-or-bottom?u=76281980&t=280)** So let's check if that's doing what we expect.
>
> **[4:45](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-place-label-at-top-or-bottom?u=76281980&t=285)** That looks a bit better.
>
> **[4:46](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-place-label-at-top-or-bottom?u=76281980&t=286)** So now when we change it, all of the text adjusts.

> [!info]- Semantic Content
>
> **Code Identifiers:** labelboxheight (5), labellocation (3), displaynamekey (2), labelbox (2), labeltext (2)
> **Code Keywords:** let (2), type, (1), case, (1)
> **UI Navigation:** dropdown (3), go to (1)
> **Env Vars:** kpi (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. 4. Build a Scatter Chart Using "Categorical" Data

#### Tell Power BI to accept categorical data
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=0)** - So the first thing that we're going to do is copy our project because I don't want to start all over from circle card again.
>
> **[0:07](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=7)** We have made some changes that are worth keeping I think, so I'm just copy pasting that and it will take a while because there's lots of files in there.
>
> **[0:19](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=19)** And there we go, KPI box 2 copy, and I'm going to call it instead scatter plot.
>
> **[0:27](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=27)** So now let's go into VS Code and we see that we have scatter plot now.
>
> **[0:33](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=33)** Lets close all these older ones.
>
> **[0:39](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=39)** Navigate to the new ones.
>
> **[0:42](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=42)** And we'll be needing these files, 'cause we always need these files and I'm just going to stop the server and navigate to the right folder like so, there we are.
>
> **[0:59](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=59)** So let's start with our capabilities file and data roles.
>
> **[1:04](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=64)** We're going to want X, Y, and category for our scatter plot.
>
> **[1:09](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=69)** X and Y are numeric and therefore need to be measures and category will be text.
>
> **[1:14](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=74)** So we're going to have three data rows.
>
> **[1:20](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=80)** Two, three.
>
> **[1:25](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=85)** And I'll call this one X value.
>
> **[1:30](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=90)** And it's going to have a name of X.
>
> **[1:35](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=95)** Y value with a name of Y.
>
> **[1:39](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=99)** And then we're going to say group by, that's what the user will see.
>
> **[1:44](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=104)** And this one needs to be of type.
>
> **[1:46](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=106)** Name of group, doesn't need to be, you can call it whatever you like, but it does need to have a kind of type, grouping because they're your options.
>
> **[1:56](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=116)** Grouping measure or this hybrid grouping all measure third type.
>
> **[2:01](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=121)** So let's save that.
>
> **[2:04](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=124)** And now let's refresh our visual.
>
> **[2:12](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=132)** And that's not doing anything 'cause we haven't started the server.
>
> **[2:15](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=135)** PBIviz start.
>
> **[2:19](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=139)** And that felt like it took a bit longer that time, but it still has a good signal, which is copied across.
>
> **[2:30](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=150)** So now let's check again in Power BI, and it looks just the same 'cause we've not changed anything there.
>
> **[2:36](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=156)** But if we look in the fields pane, X value, Y value, and group by.
>
> **[2:40](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=160)** Good, that's what we wanted.
>
> **[2:43](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=163)** Now, they're not going to do anything yet because we haven't changed the aggregation type yet in data view mappings.
>
> **[2:52](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=172)** So at the moment it says for the data row with name of measure, we have a max of one.
>
> **[3:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=180)** We don't have that one anymore.
>
> **[3:07](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=187)** I'm just putting that in line 'cause I'm planning to add some more in here.
>
> **[3:16](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=196)** So we're going to say X, Y, and group are all going to have a maximum of one.
>
> **[3:26](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=206)** And the next thing we need to do is change this single.
>
> **[3:29](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=209)** So single was fine for KPI, but now we want to move back to having categories and values.
>
> **[3:37](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=217)** Let's get rid of that.
>
> **[3:39](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=219)** So we're going to say categorical, curly brackets.
>
> **[3:48](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=228)** And then within that, we're going to have categories and values.
>
> **[3:52](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=232)** Categories, curly brackets.
>
> **[3:56](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=236)** Just get the structure and values.
>
> **[4:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=240)** Now you don't get to pick what you want in here.
>
> **[4:04](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=244)** This has a preset structure.
>
> **[4:08](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=248)** So it says for in category.
>
> **[4:14](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=254)** Our category is called group for in group.
>
> **[4:20](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=260)** We have the values of select, and I'm not doing this from memory, by the way.
>
> **[4:27](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=267)** Even just remembering which bits are curly brackets, and which bits are arrays can be a challenge sometimes.
>
> **[4:35](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=275)** So if you've got an unfamiliar bit of code, you need to find an example online and copy the relevant part that you need.
>
> **[4:46](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=286)** But also this categories and values set up is what download isn't it, when you do PBIviznew, circle card or whatever.
>
> **[4:55](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=295)** So this bit should be fairly straightforward to find an example of, it's just that we deleted it in the last chapter.
>
> **[5:03](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=303)** So bind to X and Y.
>
> **[5:11](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=311)** So let's take a look at that.
>
> **[5:12](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=312)** We're saying for the categories named group, bind the following data to them: the X data and the Y data.
>
> **[5:23](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=323)** And it's a good thing just to check that the names you have X, Y, and group are the names you're using in your conditions and in your categorical.
>
> **[5:34](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=334)** So the notation isn't difficult, but I don't think it's intuitive either.
>
> **[5:39](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=339)** I'm not sure that I would ever have guessed how to write this.
>
> **[5:42](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=342)** I had to hunt for examples repeatedly until I built myself a library of snippets.
>
> **[5:46](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=346)** And I would recommend that you do the same.
>
> **[5:50](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=350)** So let's check the data now.
>
> **[5:52](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=352)** So we've compiled successfully.
>
> **[5:55](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=355)** Let's bring up our console, clear it so we don't have complete overload, and we are going to need to drag some data in before we do anything else.
>
> **[6:07](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=367)** So let's say we want to plot sales against returns
>
> **[6:19](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=379)** and we are going to group by age bucket.
>
> **[6:26](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=386)** Now let's clear that and have a look at what we've got in data views.
>
> **[6:34](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=394)** So our single property is now null, and our data has gone into categorical, which is good.
>
> **[6:40](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=400)** That's what we wanted.
>
> **[6:42](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=402)** Categorical has got two properties, categories and values, which are the two property names and capabilities dot tracing.
>
> **[6:50](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=410)** Categories is an array of length one.
>
> **[6:52](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=412)** And let's just have a look at what it's got in it.
>
> **[6:55](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=415)** These are age buckets.
>
> **[6:56](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=416)** Okay, so we've said group by age bucket and here it says the source is age buckets and the values one, two, three.
>
> **[7:05](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=425)** And if I scrolled over, you'd find the four, four indeed if I open that.
>
> **[7:10](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=430)** So this is how the data gets presented to us, the developer, and then values is an array of length two, because we have two measures and we've told it to bind both of those and their values have an array of length four, which is not a coincidence.
>
> **[7:27](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=447)** That array of length four is probably related to our categories.
>
> **[7:36](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=456)** Just have a look here.
>
> **[7:37](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=457)** Currently, you can see that they are all the same.
>
> **[7:41](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=461)** Now that doesn't look quite right.
>
> **[7:42](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=462)** The numbers look familiar.
>
> **[7:43](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=463)** If we just focus for a minute on net sales, if you were with us for the last chapter, that number is what showed in our KPI.
>
> **[7:51](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=471)** So that's good, but they shouldn't all be the same value.
>
> **[7:54](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=474)** And you see also here we have min local and max local and that's all the same value as well.
>
> **[8:01](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=481)** Oh, dear.
>
> **[8:02](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=482)** Now let's look at the other value.
>
> **[8:05](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=485)** In fact, let's use a different kind of value rather than continuing to use financial data, let's put return rate in there.
>
> **[8:27](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=507)** And that's got the same values as well, but at least it's going to expose us to a different kind of number, a decimal with a different sort of format as well.
>
> **[8:37](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=517)** Now, the first thing to do when weird stuff happens is to stop and start your server.
>
> **[8:41](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=521)** You'd be amazed really how often this can help.
>
> **[8:45](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=525)** But in this case, I can tell you in advance, it's not actually going to help us.
>
> **[8:51](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=531)** So now let's do something slightly different.
>
> **[8:54](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=534)** And this is a very useful step to take.
>
> **[8:58](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=538)** Here is the standard scatterplot visual that ships with Microsoft.
>
> **[9:05](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=545)** And if you're trying to create a sort of scatter plot, it's a good idea to get comfortable with the standard visual.
>
> **[9:12](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=552)** So we're going to put net sales into the X axis, and I think we picked return rate for the Y.
>
> **[9:19](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=559)** So let's start with that one.
>
> **[9:21](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=561)** It's easy to assume when you're making a custom visual that you've done something wrong, when often you are dealing with the peculiarities of Power BI.
>
> **[9:29](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=569)** And sometimes the problem is that you're using a measure when Power BI needs you to be using a column.
>
> **[9:36](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=576)** It's to do with the sequence in which the data are calculated.
>
> **[9:40](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=580)** So you can see we've only got the one dot here.
>
> **[9:44](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=584)** I'm surprised that's not giving me a tool tip, there it is.
>
> **[9:47](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=587)** And it's telling me these familiar numbers, 27% and 1.2 million.
>
> **[9:51](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=591)** Now I'm hoping that you're familiar enough with Power BI to understand what the difference is between a measure and a column.
>
> **[9:59](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=599)** But basically if you've got this calculator symbol, you are dealing with a measure.
>
> **[10:05](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=605)** And because the measure is itself calculated at a certain point in time, Power BI needs to do things in a certain sequence and it needs to run those calculations kind of at the same time that you're trying to run your visual, and so they don't play nicely together.
>
> **[10:20](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=620)** So what you might need instead, let's go down to sales and you can see we have this Epsilon symbol and that tells us it's a summable ball numeric field and it's a column.
>
> **[10:31](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=631)** It's not a measure.
>
> **[10:33](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=633)** So let's try using that, first on our standard visual.
>
> **[10:41](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=641)** Let's get rid of net sales and we'll put unit there, and you can see that we have at least got two dots there now.
>
> **[10:59](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=659)** And let's use customer age as our legend.
>
> **[11:02](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=662)** And we can see at least that we have lots of different dots now, which is what we want.
>
> **[11:07](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=667)** This is a shortcoming really of Power BI's service 'cause we can't inspect the data itself and the data model.
>
> **[11:13](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=673)** You need to use Power BI desktop for that, but you can't use Power BI desktop to be doing your developer visual.
>
> **[11:20](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=680)** So we need a bit of guesswork on the data model.
>
> **[11:23](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=683)** And now let's go back to our visual and try and get that one to work.
>
> **[11:29](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=689)** We changed the group by visual to be age.
>
> **[11:36](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=696)** And instead of using measures, we're going to put these column values amount and unit into place.
>
> **[11:50](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=710)** And you're not going to see anything on the screen yet.
>
> **[11:52](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=712)** We haven't actually added any dots, but let's just inspect the data.
>
> **[11:57](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=717)** We've got data views, a bit bigger, categorical values and there at least we have a difference between min local and max local.
>
> **[12:10](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=730)** And there's our values there and the same again for units.
>
> **[12:15](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/tell-power-bi-to-accept-categorical-data-13915998?u=76281980&t=735)** So we're all set now to move on and turn this data into a graphic.

> [!info]- Semantic Content
>
> **Code Keywords:** let (23), type. (2), type, (1), this. (1), else. (1)
> **Definitions:** is an  (2), is a  (2), is called (1)
> **CLI Commands:** find (3)
> **Env Vars:** kpi (3)
> **Cross-References:** in the last (1), go back to (1)
> **UI Navigation:** navigate to (2)
> **Versions:** 1.2 (1)
> **Tools:** vs code (1)

#### Create D3 linear scales and axes in your custom visual
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=0)** - [Instructor] So now we're going to start changing our visual.ts file to get rid of the KPI box, references from last chapter and turn it into a scatterplot sensation.
>
> **[0:12](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=12)** So let's get rid of what we don't need to begin with.
>
> **[0:16](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=16)** And I'm pressing command and forward slash on a Mac there.
>
> **[0:22](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=22)** These are all KPI box relevant
>
> **[0:32](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=32)** and I'm just going to delete these bits.
>
> **[0:33](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=33)** 'cause there's far too much there, much as I like to keep these variable declarations, just in case I think these ones are going to get a bit in the way.
>
> **[0:42](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=42)** Get rid of those for now.
>
> **[0:46](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=46)** Okay.
>
> **[0:47](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=47)** Now let's look at our list of private declarations.
>
> **[0:50](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=50)** First of all, we can reinstate these and we would just rename them.
>
> **[0:55](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=55)** So we're going to create a series of group elements.
>
> **[0:58](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=58)** We're going to have one for the x-axis, one for the y-axis, one for the dots and a parent group as well.
>
> **[1:06](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=66)** So I'm going to call that one x axis group, y axis group, dots group and parent group.
>
> **[1:24](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=84)** And then let's say, let's deal with the parent group first.
>
> **[1:30](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=90)** We want to append g elements, and it's important to give them class names so that you don't just have this sort of never ending nested set of group elements and you've got no idea which one is which.
>
> **[1:48](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=108)** So under the parent group, we're going to create the x axis group that's going to be added to the parent group.
>
> **[2:11](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=131)** And then we'll have dots group with a class of dots and we don't need those.
>
> **[2:20](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=140)** So our constructor function, which runs once on page load should now be adding a parent group in three groups within it.
>
> **[2:27](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=147)** And let's just check that that's what's happening.
>
> **[2:35](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=155)** If we select that and expand our div and our svg, scroll a bit, we've got a g of class of parent and three groups within it, and that's good.
>
> **[2:48](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=168)** Now we need to create some scales and some axis.
>
> **[2:54](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=174)** And I don't think that we are going to need those.
>
> **[3:01](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=181)** Now, I said earlier that you don't have to import the entire d3 library in one go, you can do it a bit at a time.
>
> **[3:07](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=187)** And scales are a good example of where you might want to do this.
>
> **[3:11](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=191)** So you could do import scale linear and scale band from d3.
>
> **[3:18](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=198)** That's the sort of notation you would use to import your libraries one at a time.
>
> **[3:22](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=202)** And if you do that, it will make your visuals run more quickly.
>
> **[3:27](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=207)** So let's identify our arrays from the data.
>
> **[3:31](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=211)** We've got dataView is options of dataViews.
>
> **[3:35](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=215)** And then we're going to say that data points the dataView.categorical.values.
>
> **[3:45](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=225)** Next we're going to create a blank array and into this, we're going to put all the information that we need per dot.
>
> **[3:56](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=236)** So basically, the job in hand right now is to take the data that power BI is aggregated and put it into a format that is easily digested by power BI.
>
> **[4:06](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=246)** And that's what dotData is going to hold.
>
> **[4:09](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=249)** And if you are a TypeScript Wiz, or if you're interested you know, the proper way for doing this on more complicated projects is to create your own interfaces.
>
> **[4:20](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=260)** But I don't want to get into that right now because that's a tutorial on TypeScript rather than one on how to do a custom visual.
>
> **[4:29](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=269)** So we're creating variables, xMax, and yMax.
>
> **[4:33](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=273)** And we will need those to generate the scales for the axis.
>
> **[4:36](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=276)** We don't need xMin or yMin because I'm going to have the axis starting at zero.
>
> **[4:41](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=281)** Anyway, regardless of the minimum unless the minimum were to be a minus number I suppose actually, but it isn't that xIndex minus one.
>
> **[4:55](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=295)** So these default values of minus one are an easy way for us to query that sum value has been set 'cause if we just let them be zero, zero is a possible sensible value.
>
> **[5:08](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=308)** So the next thing we need is to find our category, data, that we'll say let categories equal dataView.categorical.categories[0].values.
>
> **[5:25](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=325)** Okay, so now we have got or we should have category data, dataPoint data.
>
> **[5:35](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=335)** And this is all hopefully looking familiar.
>
> **[5:43](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=343)** If we come into this visual update and go into dataViews, we've got categorical data, categories there, which are ages 'cause that's what we have in our group by.
>
> **[6:01](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=361)** And then we have values, we've got an array of length too, because we have amount and unit, one for our x-axis and one for our y-axis.
>
> **[6:12](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=372)** So these are the data points that we are trying to put into these variables categories obviously holding the category data and data points holding the value data.
>
> **[6:24](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=384)** Now the next thing we have to do, we come into here.
>
> **[6:29](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=389)** You see this first value is 690575 and above it, we have this property code source and we've seen source before for the getting hold of the format.
>
> **[6:44](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=404)** But source contains another useful property that we're going to use now, then that's the role to property.
>
> **[6:50](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=410)** So what role is this piece of data performing?
>
> **[6:54](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=414)** The role of this is it is performing X, which is the name we gave it in capabilities.
>
> **[7:02](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=422)** Okay, so right at the top in data roles, we had X, Y, and group.
>
> **[7:07](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=427)** Then it's saying, well, this bit of data I'm just confirming to you that this is X.
>
> **[7:13](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=433)** And if we come in here and look at roles, this one is Y.
>
> **[7:18](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=438)** And this is really important because you shouldn't make assumptions about which role has been assigned which ID; we can't just say, Oh, well, zero is always x, A number one is always y, things change.
>
> **[7:32](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=452)** So this is what xIndex and yIndex are for and we're going to work out what role the data is performing for us.
>
> **[7:45](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=465)** So we say, if data points, no we're going to just take the first dataPoint.source.roles.x and the implied ending of this statement is equals, equals, equals true.
>
> **[8:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=480)** So if dataPoint zero is x, then xIndex is nought,
>
> **[8:10](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=490)** and yIndex is one, otherwise, xIndex is one and yIndex is nought.
>
> **[8:23](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=503)** So with that crucial bit of information, we can then stop pushing the data we want into dotData, which is the final step we need before we can start drawing some axis and some dots.
>
> **[8:36](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=516)** So we can say categories.forEach.
>
> **[8:44](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=524)** And then we go d,i, that's data point and index.
>
> **[8:48](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=528)** So for each category, we want to push some data into the dotData array.
>
> **[8:56](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=536)** And that data is group, which takes our data points... On a minute, I need to push command there, dotData.push.
>
> **[9:10](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=550)** Got group, a y value.
>
> **[9:17](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=557)** yIndex.values And the x one, we push in the xIndex dataPoint values.
>
> **[9:29](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=569)** So that will loop through all of our categories, which in our case is just four, because there's one for each age category.
>
> **[9:37](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=577)** And for each one, it will push in the group, which is the age category, the y value, which will be the first, second, third or fourth item for y.
>
> **[9:47](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=587)** And then if the same index of value, but for x, for each one.
>
> **[9:53](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=593)** And finally, after we've done that we can set our x and max.
>
> **[9:58](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=598)** We're going to say, xMax is equal to dataPoints[xIndex].maxlocal
>
> **[10:10](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=610)** And this property you can see in the power BI console.
>
> **[10:16](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=616)** My max then is the same, but for y index.
>
> **[10:21](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=621)** So now let's look that to the console, Log(dotData, xMax, yMax)
>
> **[10:37](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=637)** And here it is, here's our dotData, it's got our age category and the maximum value of X and Y for that point, and then the same again for each other age category.
>
> **[10:50](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=650)** So now we can define our scales and we say let x scale equal scale linear.
>
> **[11:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=660)** And it has a domain and a range.
>
> **[11:04](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=664)** And the domain is nought to xMax and the range is nought to viewport width.
>
> **[11:16](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=676)** We cannot find the name scale linear.
>
> **[11:19](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=679)** So we're going to repeat or import declaration that we used previously, scale linear.
>
> **[11:32](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=692)** See if that gets rid of our error.
>
> **[11:33](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=693)** Yes, the x scale is scale linear.
>
> **[11:37](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=697)** We don't need that either.
>
> **[11:46](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=706)** P for scale y, so the domain is nought and y but the range is the other way round.
>
> **[11:56](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=716)** So first of all, it's the height, not the width.
>
> **[11:59](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=719)** And second we invert and that's because your y values increase as you go down the page but you want to draw your visuals in the opposite direction.
>
> **[12:08](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=728)** You want to start at the bottom of the page and work your way up.
>
> **[12:12](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=732)** So let's check those values, say console.log(xScale), and we'll give that a value of say 20,000.
>
> **[12:25](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=745)** And then we'll try the y scale as well.
>
> **[12:30](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=750)** And this one, I think not 0.27 is not going to be enough.
>
> **[12:42](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=762)** That's like our return rate.
>
> **[12:45](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=765)** And you can see it outputs some data for us.
>
> **[12:47](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=767)** It's given us some x and y values derived from the data.
>
> **[12:50](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=770)** So our scales appeared to be working.
>
> **[12:52](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=772)** They look like healthy values anyway.
>
> **[12:55](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=775)** So we've got our scales working, at least we think we have, and now we need to add some axis.
>
> **[13:01](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=781)** And the first thing we do is declare a margin's object, say static.
>
> **[13:09](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=789)** Margins top 30 right, 30.
>
> **[13:23](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=803)** And then in the update function, we can create new variables for the chart height and chart width.
>
> **[13:31](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=811)** So we'll say, let chart height, called viewport height.
>
> **[13:39](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=819)** And then we say visual, minus visual.margins.top minus visual.margin.bottom and chart width is the same but with left and right and width.
>
> **[14:02](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=842)** So now we can update our scales accordingly.
>
> **[14:07](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=847)** Instead of the full width, we want chart width, which is slightly less and chart height.
>
> **[14:18](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=858)** And we can also transform our parent group by the same amounts now.
>
> **[14:25](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=865)** So we can say this.parentGroup has a transform translate function and it's no longer x and y, it's visual.margins.left,
>
> **[14:53](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=893)** visual.margins.top So now all about elements should be shifted by that left and top margin to get up.
>
> **[15:05](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=905)** And the final bit, after all this work is to call our axis.
>
> **[15:11](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=911)** So you want to say this.xAxisGroup has an attribute transform translate x ,y.
>
> **[15:29](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=929)** Always put those in 'cause I get confused otherwise.
>
> **[15:31](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=931)** So x is zero, y is going to be chart height and once we've transformed it we're going to call axis bottom x scale.
>
> **[15:46](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=946)** So this is kind of just relatively straightforward d3.
>
> **[15:52](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=952)** Y-axis, you don't want to transform that by chart height or width and keep that for now.
>
> **[16:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=960)** We'll just say nought and that one's not axis bottom.
>
> **[16:03](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=963)** We want the scale on the left and we want to use that.
>
> **[16:11](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=971)** So axis bottom is allowed and axis left isn't and that's funny 'cause I don't remember typing that there, there we go.
>
> **[16:22](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=982)** Let's pop that in there and see if that's happy now.
>
> **[16:28](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=988)** That's compiled, good start.
>
> **[16:30](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=990)** Let's get rid of this, make this a bit bigger.
>
> **[16:33](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=993)** Let's get rid of this as well.
>
> **[16:43](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=1003)** And there we go, we have some axis.
>
> **[16:45](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=1005)** Well, we have an axis in fact might be more accurate and it's not very pretty, but it is there.
>
> **[16:53](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=1013)** And I would reckon that what's gone wrong there is that the svg is smaller than the size of our axis.
>
> **[17:02](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=1022)** So we have our x-axis at the bottom, but we can't see it because it's outside the bounds of our svg.
>
> **[17:08](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=1028)** And we can see part of our y-axis for the same reason.
>
> **[17:11](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=1031)** So just to fix this, we need to resize, find where we've defined viewport, and then we'll say this.svg
>
> **[17:33](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=1053)** height viewport.height, width viewport.width, save that, and let's try that again.
>
> **[17:48](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-d3-linear-scales-and-axes-in-your-custom-visual-13915997?u=76281980&t=1068)** And there we go, we have some axis.

> [!info]- Semantic Content
>
> **Code Identifiers:** dotdata (6), xindex (6), xmax (4), datapoint (4), yindex (4)
> **Code Keywords:** let (16), this. (4), function (3), this, (3), delete (1)
> **CLI Commands:** make (3), find (3)
> **Env Vars:** kpi (2)
> **File Paths:** visual.ts (1)
> **Versions:** 0.27 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Add some dots to make a scatterplot
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=0)** - [Instructor] So now we're going to start changing our visual dot Ts file to get rid of the KPI box references from last chapter and turn it into a scatterplot sensation.
>
> **[0:12](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=12)** So let's get rid of what we don't need to begin with, I'm pressing Command and forward slash on a Mac there.
>
> **[0:22](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=22)** These are all KPI box relevant.
>
> **[0:32](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=32)** And I'm just going to delete these bits cause there's far too much there, much as I like to keep these variable declarations just in case I think these ones are going to get a bit in the way, get rid of those for now.
>
> **[0:48](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=48)** Okay, now let's look at our list of private declarations first of all, we can reinstate these and we would just rename them.
>
> **[0:57](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=57)** So we're going to create a series of group elements we're going to have one for the X-axis one for the Y-axis one for the dots and a parent group as well.
>
> **[1:09](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=69)** So I'm going to call that one X-axis group, Y-axis group
>
> **[1:18](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=78)** dot group and parent group.
>
> **[1:28](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=88)** And then let's say, let's deal with the parent group first, we want to append a G element and it's important to give them class names so that you don't just have this sort of never ending nested set of group elements and you've got no idea which one is which so under the parent group, we're going to create the X-axis group, that's going to be added to the parent group.
>
> **[2:14](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=134)** And then we'll have dots group with a class of dots and we don't need those.
>
> **[2:25](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=145)** So our constructor function, which runs once on page load should now be adding a parent group in three groups within it and let's just check that that's what's happening.
>
> **[2:39](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=159)** We select that, expand our div and our SVG, scroll a bit we've got a G of class of parent and D3 groups within it and that's good.
>
> **[2:52](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=172)** Now we need to create some scales and some axis.
>
> **[2:58](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=178)** And I don't that we are going to need those, now I said earlier that you don't have to import the entire D3 library in one go, you can do it a bit at a time and scales are a good example of where you might want to do this.
>
> **[3:15](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=195)** So you could do import scale linear and scale band from D3.
>
> **[3:22](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=202)** That's the sort of notation you would use to import your libraries one at a time.
>
> **[3:26](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=206)** And if you do that, it will make your visuals run more quickly.
>
> **[3:31](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=211)** So let's identify our arrays from the data.
>
> **[3:36](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=216)** We've got data view is options dot data views and then we're going to say let data points, be data view dot categorical, categorical dot values.
>
> **[3:51](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=231)** Next we're going to create a blank array and into this we're going to put all the information that we need per dot.
>
> **[4:02](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=242)** So basically the job in hand right now is to take the data the power BI aggregated and put it into a format that is easily digested by power BI.
>
> **[4:12](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=252)** And that's what dot data is going to hold.
>
> **[4:15](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=255)** And if you are a TypeScript Wiz or if you're interested, the proper way for doing this on more complicated projects is to create your own interfaces.
>
> **[4:25](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=265)** But I don't want to get into that right now because that's a tutorial on TypeScript rather than one on how to do a custom visual.
>
> **[4:34](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=274)** So we're creating variables, X max, and Y max.
>
> **[4:38](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=278)** And we will need those to generate the scales for the axis.
>
> **[4:42](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=282)** We don't need X min or Y min because I'm going to have the axis starting at zero anyway, regardless of the minimum unless the minimum were to be a minus number I suppose actually it isn't that next index minus one.
>
> **[5:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=300)** So these default values of minus one are an easy way for us to query that sum value has been set cause if we just let them be zero, zero is a possible sensible value.
>
> **[5:13](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=313)** So the next thing we need is to find our category data.
>
> **[5:20](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=320)** And we'll say, let categories equal data view categorical dot categories, naught dot values.
>
> **[5:31](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=331)** Okay, so now we have got what we should have category data, data point data and this is all, hopefully looking familiar
>
> **[5:49](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=349)** if we come to this video update and go into data views, we've got categorical data categories there, which are ages cause that's what we have in our group BI.
>
> **[6:06](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=366)** And then we have values we've got an array of length two, because we have amount and unit one for our X-axis and one for our Y-axis.
>
> **[6:17](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=377)** So these are the data points that we are trying to put into these variables categories obviously holding the category data and data points holding the value data.
>
> **[6:28](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=388)** Now the next thing we have to do, we come into here, you see this first value is 690575.
>
> **[6:40](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=400)** And above it, we have this property called source and we've seen source before for the getting hold of the format.
>
> **[6:50](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=410)** But source contains another useful property that we're going to use now, then that's the role to property so what role is this piece of data performing.
>
> **[7:01](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=421)** The role of this is it is performing X, which is the name we gave it in capabilities.
>
> **[7:08](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=428)** Okay, so right at the top in data roles, we had X, Y and a group.
>
> **[7:13](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=433)** And it's saying, well, this bit of data, I'm just confirming to you that this is X.
>
> **[7:20](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=440)** And if we come in here and look at roles, this one is Y and this is really important because you shouldn't make assumptions about which role has been assigned which ID we can't just say, oh, well, zero is always X, and number one is always Y, things change.
>
> **[7:39](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=459)** So this is what X index and Y index are for.
>
> **[7:44](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=464)** We're going to work out what role that data is performing for us so we say, if data points nor we're going to just take the first data point dot source dot roles dot X, and the implied ending of this statement is equals equals equals true.
>
> **[8:07](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=487)** So if data point 0.0 is X, then X index is naught
>
> **[8:16](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=496)** and Y index is one otherwise X index is one and Y index is naught.
>
> **[8:29](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=509)** So with that crucial bit of information we can then start pushing the data we want into dot data which is the final step we need before we can start drawing some axis and some dots.
>
> **[8:42](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=522)** So we can say categories dot for each.
>
> **[8:50](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=530)** And there we go, DI that's data point and index.
>
> **[8:54](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=534)** So for each category we want to push some data into the dot data array and that data is group which takes our data point, hold on a minute we need to push them on there, dot data dot push, group a Y value, Y index dot values
>
> **[9:30](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=570)** and the X one, we push in the X index data point values.
>
> **[9:35](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=575)** So that will loop through all of our categories which in our case is just four cause there's one for each age category.
>
> **[9:42](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=582)** And for each one, it will push in the group which is the age category, the Y value which will be the first, second, third or fourth item for Y and then the same index of value, but for X, for each one.
>
> **[9:59](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=599)** And finally, after we've done that we can set our X and max, we're going to say X max is equal to data points, X index dot max local.
>
> **[10:16](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=616)** And this property you can see in the power BI console Y max then is the same, but for Y index.
>
> **[10:27](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=627)** So now let's lock that to the console.
>
> **[10:32](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=632)** Log dot data X max and Y max
>
> **[10:44](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=644)** and here it is, here's our dot data its got our age category and the maximum value of X and Y for that point.
>
> **[10:55](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=655)** And then the same again for each other age category.
>
> **[10:59](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=659)** And now we can define our scales and we say let X scale equal scale linear.
>
> **[11:10](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=670)** And it has a domain and a range.
>
> **[11:14](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=674)** And the domain is naught to X max.
>
> **[11:18](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=678)** And the range is naught to viewport.
>
> **[11:25](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=685)** And it cannot find the name scale linear.
>
> **[11:29](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=689)** So we're going to repeat our import declaration that we used previously, scale linear.
>
> **[11:42](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=702)** See if that gets rid of our error yes the X scale is scale linear, we don't need that either.
>
> **[11:54](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=714)** P for scale Y, so the domain is naught and Y but the range is the other way round.
>
> **[12:04](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=724)** So first of all, it's the height, not the width and secondly invert and that's because your Y values increase as you go down the page but you want to draw your visuals in the opposite direction.
>
> **[12:17](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=737)** You want to start at the bottom of the page and work your way up.
>
> **[12:21](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=741)** So let's check those values, say console dot log X scale and we'll give that a value of say 20,000
>
> **[12:34](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=754)** and then we'll try the Y scale as well and this one.
>
> **[12:44](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=764)** I think naught two seven is not going to be enough.
>
> **[12:49](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=769)** That's like our return rate and you can see its outputs and data for us it's given us some X and Y values derived from the data so our scales appear to be working they look like healthy values anyway.
>
> **[13:04](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=784)** So we've got our scales working.
>
> **[13:06](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=786)** At least we think we have, and now we need to add some axis.
>
> **[13:10](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=790)** And the first thing we do is declare a margins object say static margins, top 30, right 30.
>
> **[13:32](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=812)** And then in the update function, we can create new variables for the chart height and chart width.
>
> **[13:41](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=821)** So I will say, let chart height, equal viewport height.
>
> **[13:49](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=829)** And then we say visual minus visual dot margins dot top minus visual dot margins dot bottom
>
> **[14:03](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=843)** and chart width is the same but with left and right and width.
>
> **[14:13](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=853)** So now we can update our scales accordingly instead of the full width we want chart width, which is slightly less than chart height.
>
> **[14:28](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=868)** And we can also transform our parent group by the same amounts now so we can say this dot parent group has a transform, translate function and it's no longer X and Y it's visual dot margins dot left, visual dot margins dot top
>
> **[15:02](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=902)** so now all about elements should be shifted by that left and top margin together.
>
> **[15:08](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=908)** And the final bit, after all this work is to call our axis.
>
> **[15:13](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=913)** So you want to say this dot X access group has an attribute transform, translate X, Y,
>
> **[15:31](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=931)** I always put those in because I get confused otherwise.
>
> **[15:34](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=934)** So X is zero, Y is going to be chart height and once we've transformed it we're going to call axis bottom X scale.
>
> **[15:48](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=948)** So this is kind of just relatively straightforward T3.
>
> **[15:53](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=953)** Y-axis don't want to transform that by chart height or width and keep that for now we'll just say naught and that one's not access button.
>
> **[16:04](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=964)** We want the scale on the left, now we want to use that.
>
> **[16:13](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=973)** So access bottom is allowed the next is left isn't and that's funny cause I don't remember typing that there, there we go.
>
> **[16:23](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=983)** Let's pop that in there and see if that's happy now.
>
> **[16:29](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=989)** That's compiled it's a good start.
>
> **[16:31](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=991)** Let's get rid of this make this a bit bigger, let's get rid of this as well.
>
> **[16:43](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=1003)** And there we go we have some axis.
>
> **[16:45](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=1005)** Well, we have an axis in fact might be more accurate and it's not very pretty, but it is there.
>
> **[16:53](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=1013)** And I would reckon that what's gone wrong there is that the SVG is smaller than the size of our axis so we have our X-axis at the bottom, but we can't see it because it's outside the bounds of our SVG.
>
> **[17:09](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=1029)** And we can see part of our Y-axis for the same reason.
>
> **[17:13](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=1033)** So just to fix this, we need to resize, find where we've defined viewport and then we'll say this dot SVG, height viewport dot height
>
> **[17:34](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=1054)** width viewport dot width, save that and let's try that again.
>
> **[17:44](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot-13917725?u=76281980&t=1064)** And there we go, we have some axis.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), function (3), delete (1), private (1), this. (1)
> **CLI Commands:** make (3), find (3)
> **Env Vars:** svg (4), kpi (2)
> **Versions:** 0.0 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Add some dots to make a scatterplot
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=0)** - [Instructor] Now we have our axes we need some dots for our scatterplot.
>
> **[0:04](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=4)** And since we've arranged our data nicely, into dotData, this part is just plain old, D3.
>
> **[0:14](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=14)** So this.dotsGroup.selectAll circles if there are any circles.
>
> **[0:21](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=21)** And we want the number of circles that are showing, to correspond to the number of items in our dotData array.
>
> **[0:28](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=28)** And then we say, at this point you would normally split it and have enter and exit and update commands but currently I am just showing you how to make this work so we're going to say, any circles that need adding, cut them, and give them the following attributes.
>
> **[0:50](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=50)** Radius of five.
>
> **[1:42](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=102)** And this time we're going to add an ID, as well as a class, in the data that we have currently, assigned to this visual will be, age bucket.
>
> **[1:56](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=116)** So let's check, our visual now, and we've got four dots which is good that's exactly what we wanted.
>
> **[2:02](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=122)** Now they're black, and there's no tool tip working so it looks quite different to the standard scatterplot.
>
> **[2:11](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=131)** And part of the reason it might look different to the standard scatterplot is that we've started our axes at zero, well Power BI tends to sort of zoom in.
>
> **[2:21](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=141)** So these are a bit ugly and I want us to let the user style the dots as they see fit.
>
> **[2:28](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=148)** If we go to the formatting pane, we have KPI Settings as our section, and then font size and fill, and various, alignments and other things there are some of which we're going to keep.
>
> **[2:45](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=165)** So what we want to keep, is a Fill color, and numeric option for the circle radius, but we can get rid of the rest of them.
>
> **[2:56](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=176)** So for that we want capabilities.json.
>
> **[3:04](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=184)** And we want the objects.
>
> **[3:09](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=189)** And we can call that, Scatterplot Settings.
>
> **[3:16](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=196)** Properties we keep, fill color, we might call it, Dot color,
>
> **[3:25](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=205)** and then, we don't need that one.
>
> **[3:40](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=220)** Or that one.
>
> **[3:50](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=230)** And Label Location is a little bit more difficult to work out where it, starts and ends so, I always click next to a curly bracket and it highlights its partner which is quite helpful and then I'll opacity KPI we want to keep 'cause we want numeric, but we're not going to call it that this one will be, radius, so this is Dot radius, like so.
>
> **[4:21](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=261)** So the next thing we need to do so we have fill and radius.
>
> **[4:25](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=265)** So when we go to settings we have fill, and radius which was setting as a default to five, and then we can get rid, of the rest of them like so.
>
> **[4:43](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=283)** Now let's refresh, and see what's happened.
>
> **[4:52](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=292)** And that's interesting it's updated.
>
> **[4:56](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=296)** It's still saying KPI Settings so let's click away now it says scatterplot and it says Dot color and Dot radius, and now it says five pixels, and it's got a slider, and I have never seen this before, and I've been doing this for several years and I've tried to get a slider on several occasions, and never succeeded so I'm not quite sure what kind of magic, made that happen let's just have a quick look.
>
> **[5:27](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=327)** I mean it's exactly the same, notation as it was before isn't it?
>
> **[5:32](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=332)** Because we just changed that from opacity KPI, suddenly it's given us exactly what we wanted, and I can't explain that but I'm rather pleased about it.
>
> **[5:43](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=343)** So there was a link that I wanted to show you, and although it's old I think it's still quite useful, because one thing that's missing for a custom visual developers is a full list, of all of the options within the capabilities.json file.
>
> **[5:58](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=358)** So when you come into capabilities.json, I find myself constantly searching, for, examples of things that I can copy paste.
>
> **[6:08](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=368)** And this list is the only sensible, thing that I've found, which is all the supported properties that you can use in the custom visual.
>
> **[6:19](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=379)** As some of those might look familiar to you so fontSize for example is there.
>
> **[6:25](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=385)** Now you notice in here that there is also one, called markerSize, at the bottom.
>
> **[6:38](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=398)** If you are unable, to get a slider, which until now I was, then what we can do instead of type is numeric we can change the capabilities, for using a markerSize, instead and that will give us up and down arrows that will give the user, up and down arrows.
>
> **[7:01](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=421)** So, at the moment we're going to stick with a slider, because we have it I just wanted you to know that that list is there, and to make use of all of these things of course we need to actually put them in the code.
>
> **[7:14](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=434)** So, instead of a radius, that's hard-coded to five, we're going to change that to settings.radius.
>
> **[7:26](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=446)** Have we actually got a settings?
>
> **[7:29](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=449)** Nope, we have a this.settings, so let's try that again this.settings, and then it's telling me we don't have.
>
> **[7:47](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=467)** So I think we previously had, let settings equal this.settings.dataPoint.
>
> **[8:01](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=481)** I think we had a declaration like that before.
>
> **[8:04](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=484)** So now we should be able to say settings.radius like so.
>
> **[8:11](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=491)** And instead of having ugly black dots, which you might like but I just prefer a little bit of color, this time we're going to say attribute of fill and that is settings.fill, there we go.
>
> **[8:35](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=515)** So let's have a refresh.
>
> **[8:38](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=518)** And see what we've got.
>
> **[8:44](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=524)** We have pink dots.
>
> **[8:51](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=531)** But they are not responding, to a change in radius let's change the color, and neither are they responding to a change in color.
>
> **[9:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=540)** So let's take a look at the console.
>
> **[9:07](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=547)** And let's delete that for a second, and make an update here.
>
> **[9:18](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=558)** And we can see there we have formatting settings, printing out which is in our enumerate object instances, method.
>
> **[9:26](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=566)** So basically, we've put some of our code in the wrong place, because when we change the color, or the radius size, the enumerate object instances is running.
>
> **[9:47](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=587)** So it's in the right place to set the initial value but it's in the wrong place to catch the user action.
>
> **[9:57](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=597)** So what we need to do is copy the relevant parts, into the enumerate objects, instances.
>
> **[10:13](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=613)** I'm going to say let settings this.settings.dataPoint,
>
> **[10:24](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=624)** and let me say this.dotsGroup, we will select, all the circles,
>
> **[10:36](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=636)** and we're going to give them, an attribute of, radius,
>
> **[10:48](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=648)** settings.radius and, a fill of settings.fill, like so.
>
> **[11:03](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=663)** And let's just, refresh that.
>
> **[11:09](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=669)** Now they're huge and blue.
>
> **[11:13](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-some-dots-to-make-a-scatterplot?u=76281980&t=673)** And as we change this user panel settings we get, updates there in real time, as we would expect.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), this. (6), class, (1), for, (1), delete (1)
> **Code Identifiers:** dotdata (2), dotsgroup (2), markersize (2), datapoint (2), selectall (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** kpi (4)
> **File Paths:** capabilities.json (3)
> **Definitions:** is a  (3)
> **UI Navigation:** go to (2)
> **Analogies:** for example (1)

#### Challenge: Make the dots responsive
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/challenge-make-the-dots-responsive?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/challenge-make-the-dots-responsive?u=76281980&t=0)** (pleasant electronic music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/challenge-make-the-dots-responsive?u=76281980&t=5)** - [Instructor] If we look at our developer visual that we've just created, and we resize it like so, you can see that the axes get bigger automatically.
>
> **[0:15](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/challenge-make-the-dots-responsive?u=76281980&t=15)** In other words, they're responsive, but the dots don't.
>
> **[0:19](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/challenge-make-the-dots-responsive?u=76281980&t=19)** For this challenge, I would like you to try to change the code to make the dots responsive too.
>
> **[0:25](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/challenge-make-the-dots-responsive?u=76281980&t=25)** This should take you no more than five minutes.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (pleasant electronic music) (1)

#### Solution: Make the dots responsive
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-make-the-dots-responsive?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-make-the-dots-responsive?u=76281980&t=0)** (funky music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-make-the-dots-responsive?u=76281980&t=5)** - The challenge was to make our dots responsive.
>
> **[0:08](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-make-the-dots-responsive?u=76281980&t=8)** That is to say, when the user resizes the window, the dots should change position.
>
> **[0:13](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-make-the-dots-responsive?u=76281980&t=13)** And your first port of call here is your visual.ts file, because that's what contains all of your d3.
>
> **[0:20](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-make-the-dots-responsive?u=76281980&t=20)** So, the problematic line of code is this one, and actually we touched upon it in the last chapter.
>
> **[0:27](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-make-the-dots-responsive?u=76281980&t=27)** I'll just explain what this line of code does.
>
> **[0:30](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-make-the-dots-responsive?u=76281980&t=30)** It says the element that's in this.dots group, which is a group element, within that, go and find all the circles that you can and count them.
>
> **[0:40](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-make-the-dots-responsive?u=76281980&t=40)** Then, compare their number to the number of items in the dotData array, and if there are more items in the dotData array than number of circles that you found, enter, or rather append, a new circle for each item.
>
> **[0:56](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-make-the-dots-responsive?u=76281980&t=56)** So it's comparing the length of the array with a number of circles, and for each gap, as it were, is adding a circle with the following items.
>
> **[1:06](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-make-the-dots-responsive?u=76281980&t=66)** Now that works really well on page load and when you hit refresh, because at that point, there are no circles and so it goes in ads for, but what it's not doing properly is running when there is an update.
>
> **[1:19](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-make-the-dots-responsive?u=76281980&t=79)** This line of code, when you've already got four circles on the page, this line of code does nothing at all.
>
> **[1:25](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-make-the-dots-responsive?u=76281980&t=85)** And that's because it comes along and says, well I found my group element, I've counted up all my circles, there are four.
>
> **[1:30](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-make-the-dots-responsive?u=76281980&t=90)** I've counted up my array length of dotData, That's also four.
>
> **[1:34](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-make-the-dots-responsive?u=76281980&t=94)** And when I compare those two things together, the Delta is 0, and therefore my enter selection is empty.
>
> **[1:42](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-make-the-dots-responsive?u=76281980&t=102)** So this really is a d3 problem rather than a specific power BI custom visual one, but of course the two things are linked very closely together.
>
> **[1:50](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-make-the-dots-responsive?u=76281980&t=110)** We need to have updateSelection, enterSelection and an exitSelection.
>
> **[1:54](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-make-the-dots-responsive?u=76281980&t=114)** And all of those things need to be separate.
>
> **[1:57](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-make-the-dots-responsive?u=76281980&t=117)** So, let's say let the updateSelection equal just the comparison between the number of circles and the data.
>
> **[2:08](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-make-the-dots-responsive?u=76281980&t=128)** And then we can say, now, that's not yet fixed our problem, but what I want to do is just check in the front end that it hasn't made anything worse.
>
> **[2:24](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-make-the-dots-responsive?u=76281980&t=144)** We've not introduced a bug.
>
> **[2:27](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-make-the-dots-responsive?u=76281980&t=147)** There we go, still working as before, and I think if we resize it, it still has the same problem as before which is to be expected.
>
> **[2:35](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-make-the-dots-responsive?u=76281980&t=155)** Now, when we enter the circles, several of these attributes can stay put, they can stay just occurring on that enter command.
>
> **[2:46](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-make-the-dots-responsive?u=76281980&t=166)** Only a couple of them need to change and that's X and Y.
>
> **[2:50](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-make-the-dots-responsive?u=76281980&t=170)** So now we're going to merge UpdateSelection, going to merge our update and enterSelections, and then we apply two of our attributes to our new improved updateSelection like so.
>
> **[3:20](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-make-the-dots-responsive?u=76281980&t=200)** So, We refresh to make sure we've got the latest code and now our dots are nice and responsive.
>
> **[3:26](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-make-the-dots-responsive?u=76281980&t=206)** And there's one more thing that we should do Which is to say, remove any dots we don't need.
>
> **[3:35](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-make-the-dots-responsive?u=76281980&t=215)** updateSelection, like so.
>
> **[3:40](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-make-the-dots-responsive?u=76281980&t=220)** That shouldn't run in the example we've got, but if the user were to change the data, and there were to be fewer dots, then that would come into play.

> [!info]- Semantic Content
>
> **Code Identifiers:** updateselection (4), dotdata (3), enterselection (1), exitselection (1), enterselections (1)
> **Code Keywords:** let (2), this. (1), for, (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (2), is an  (1)
> **File Paths:** visual.ts (1)
> **Cross-References:** in the last (1)
> **Speakers:** - the (1)
> **Non-Speech:** (funky music) (1)


### 6. 5. Convert to a Bubble Chart with Group by Data

#### Grouping your data to help make a bubble chart
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=0)** - In this chapter, we're going to build upon our scatter plot to make a bubble chart.
>
> **[0:05](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=5)** The bubble chart is very similar to a scatter plot in that it's a series of circles with two numeric axes but a bubble chart can contain more information than a scatter plot through the size of the circles.
>
> **[0:19](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=19)** So in a scatter plot, you don't always have circles.
>
> **[0:21](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=21)** You can have stars and triangles and all sorts of things but generally speaking, the size of those things is the same, which is different in a bubble chart.
>
> **[0:32](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=32)** Now what this means, and the reason I've picked this for our final chapter is that in our capabilities file we're going to use one final fairly advanced feature called the grouping function.
>
> **[0:42](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=42)** So we've already seen single data categorical data and now we're going to take the categorical data that we've already got, but we're going to group it together and see what that does to both the data and our possibilities for a visual.
>
> **[0:57](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=57)** So the first thing is to copy paste your project.
>
> **[1:03](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=63)** And you don't have to do this, actually.
>
> **[1:05](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=65)** You could just stick with the scatterplot one but things do go wrong and I like to have a reversibility.
>
> **[1:12](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=72)** So let's call that one bubble chart and then we'll stop our server, Ctrl C.
>
> **[1:19](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=79)** Then we need to change our directory to bubble charts, like so, and then make sure if you've still got your scatterplot three key files, open close those down and open up the new three.
>
> **[1:35](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=95)** And as ever, we start with the capabilities file.
>
> **[1:38](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=98)** So let's go to the top of that.
>
> **[1:40](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=100)** So we're going to need a new data bucket.
>
> **[1:43](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=103)** If we just pop back to the fields pane, that's a bit bigger.
>
> **[1:49](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=109)** We've got X value, Y value and group by and now you're going to need one called size.
>
> **[1:54](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=114)** But the group by naming also needs to be changed because now we've effectively got two different sorts of grouping, or we will have.
>
> **[2:03](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=123)** And so I think group by becomes a bit ambiguous.
>
> **[2:07](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=127)** So I'm going to call this one dot per.
>
> **[2:11](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=131)** And have one dot per age category in the data that we are currently using.
>
> **[2:17](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=137)** And then we're going to have another grouping type.
>
> **[2:25](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=145)** And this one I'm going to call "categories".
>
> **[2:27](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=147)** And of course it needs a unique name which I'm going to set to "categories" in lowercase.
>
> **[2:32](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=152)** So let's just minimize the objects for now because we don't need to do anything to the formatting pane right now.
>
> **[2:37](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=157)** Now data view mappings obviously needs to match up with data roles.
>
> **[2:44](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=164)** And because we've only changed the display name of this data bucket here, we don't need to change anything down here.
>
> **[2:52](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=172)** It still says group and group, which is good.
>
> **[2:55](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=175)** But what we do need to do is add a group here.
>
> **[3:03](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=183)** Which just made me realize that that may confuse you because we have this name group here, which is in red.
>
> **[3:13](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=193)** And then this one here is actually a power BI specific function of grouping.
>
> **[3:20](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=200)** I might rename those in a minute.
>
> **[3:23](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=203)** Try and reduce the ambiguity, which never helps.
>
> **[3:25](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=205)** So we can say, group by categories.
>
> **[3:28](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=208)** And then it's a comma, because what we're actually going to do is nest that select statement like so.
>
> **[3:43](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=223)** So, group has a property called by, which we've set to our new data role categories.
>
> **[3:48](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=228)** Group our values by categories.
>
> **[3:51](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=231)** And then the other properties are our existing bind properties. So we select our measures and we bind them to categories and our group.
>
> **[4:04](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=244)** So let's take a look at our data.
>
> **[4:07](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=247)** And before we do that, we might need to start our server.
>
> **[4:10](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=250)** Otherwise there will be nothing to show.
>
> **[4:12](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=252)** So to begin with, it should still appear to be the scatterplot that we had before because we've not changed anything in the appearance of that.
>
> **[4:22](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=262)** Just get the console out, refresh things.
>
> **[4:25](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=265)** So we have one dot per age bucket, and then we have a categories field, which is currently empty.
>
> **[4:33](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=273)** And here we have some data, not to look in data views, and it's all still within categorical.
>
> **[4:41](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=281)** Nothing's changed there.
>
> **[4:42](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=282)** So let's look at categories to begin with.
>
> **[4:46](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=286)** And now we've got, for categories, exactly what we had before, which is our four age buckets. They're in order.
>
> **[4:53](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=293)** So categories hasn't changed and we should expect that because categories here hasn't changed.
>
> **[5:02](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=302)** So they can close categories and have a look instead of values, and values at the moment is an array of length two.
>
> **[5:09](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=309)** And that's not what I was expecting.
>
> **[5:11](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=311)** And the reason for that is I've not put any data into our new data wells.
>
> **[5:16](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=316)** So of course the data isn't looking very different, right?
>
> **[5:19](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=319)** So now that I've added gender into our categories data well the dots don't quite know where to go, because the data structure has changed and that's fine.
>
> **[5:29](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=329)** We have to update our D3 accordingly but let's just have a look at the data.
>
> **[5:35](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=335)** So we're sitting categorical.
>
> **[5:36](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=336)** Now we have four arrays within values.
>
> **[5:40](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=340)** So previously we had two arrays, one for X and one for Y.
>
> **[5:45](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=345)** And now we have four arrays.
>
> **[5:47](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=347)** We have two for X, female and male, and two for Y female and male.
>
> **[5:53](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=353)** Here you can see where you would identify those roles.
>
> **[5:56](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=356)** X is true. And group name is female.
>
> **[6:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/grouping-your-data-to-help-make-a-bubble-chart?u=76281980&t=360)** So we haven't seen or used this property before but this is how we distinguish one array from the other.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (2), this, (1), type. (1)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (1)
> **Definitions:** is an  (1)
> **Analogies:** similar to (1)
> **Speakers:** - in (1)

#### Create grouped scatter plot data, to allow different colors per category
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=0)** - [Instructor] Now we should have the data that we need to fix our bubble chart.
>
> **[0:04](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=4)** And I should explain, even though I said the main difference between a bubble chart and a scatter plot was the size of the bubbles, size is not the first thing that we're tackling, as you can see.
>
> **[0:14](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=14)** And I should have explained that before.
>
> **[0:15](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=15)** So, we are tackling categories first.
>
> **[0:19](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=19)** So we're allowing the user to apply different colors based on a category, in this case gender.
>
> **[0:24](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=24)** And I've picked gender because there's only two of them.
>
> **[0:27](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=27)** And that makes our life a lot easier when looking at the data.
>
> **[0:31](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=31)** So the first thing we're going to do is get the categories working and then we're going to apply the size in order to finish off our bubble chart.
>
> **[0:38](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=38)** So we had four dots before and now we should have four dots per gender and we need to make several changes to visual.ts now.
>
> **[0:47](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=47)** The first thing we need to do is work out our maxima because we can't use max local anymore, which is what we have done here.
>
> **[0:58](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=58)** So now what we're going to do is say
>
> **[1:15](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=75)** if it's an X-type role, then we loop through the values.
>
> **[1:40](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=100)** So we can comment out that.
>
> **[1:51](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=111)** Like so.
>
> **[1:52](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=112)** So we've saved and it's compiled, and we've got axes again now.
>
> **[1:56](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=116)** We have four dots, which is incorrect.
>
> **[1:58](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=118)** So we'll move onto that next.
>
> **[2:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=120)** But at least our maximum values are now working.
>
> **[2:04](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=124)** So the task in hand is to structure the data in a way that will give us one group for female and another group for male.
>
> **[2:11](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=131)** And in that way, we can add groups at the gender level or the category level, if there were to be 1,000 of those, that's fine.
>
> **[2:18](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=138)** And once we've added those groups, we will add the circles to the groups and that will let us format those circles independently.
>
> **[2:25](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=145)** So our current code in visual.ts assumes that we only had two arrays here assumes that we only had two arrays here where we work out X and Y index.
>
> **[2:35](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=155)** Now you may remember this is how we identify which of the values arrays is the relevant one, okay?
>
> **[2:42](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=162)** which of the values arrays is the relevant one, okay?
>
> **[2:46](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=166)** So the way that we did it previously, we just said if source stopped roles that X is true, then assign these values.
>
> **[2:53](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=173)** But now two of the arrays will answer correct for that because there's one for female and one for male.
>
> **[3:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=180)** So this is what we need to change.
>
> **[3:02](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=182)** So, this we can delete.
>
> **[3:05](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=185)** For now, I'm just going to comment it.
>
> **[3:09](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=189)** We'll start by creating an array for distinct categories as in the unique names of all the categories, which should be female and male, and then CAT data will have data in the format that we need it and I'm just checking that that's above our minimax code.
>
> **[3:40](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=220)** So here we used the group name property, which contains female and male.
>
> **[3:50](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=230)** And we'd say, if distinct categories does not contain our group name, then push it in.
>
> **[4:01](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=241)** And in that way we will get a list of all the unique category names, which in our case with this data should just be female and male.
>
> **[4:14](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=254)** And at the same time, we're going to set up our CAT data array, which we'll need later.
>
> **[4:22](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=262)** And we're just setting up the structure.
>
> **[4:23](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=263)** So every time we push a category into distinct category, we're setting a new object into our CAT data array, which is a sort of category of CAT.
>
> **[4:36](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=276)** It's got a data property of blank array and a values property of blank array.
>
> **[4:44](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=284)** And I know that it needs this structure because I've already worked through this before.
>
> **[4:48](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=288)** So if this is all a bit of a mystery to you, I'm not taking you through it step-by-step how I worked it out because this is sort of playing D3 rather than Power BI but I have done it before.
>
> **[4:57](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=297)** I'm not just really, really clever.
>
> **[5:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=300)** Okay, so now we've got CAT data.
>
> **[5:04](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=304)** And then the final thing is to pat out the CAT data array with actual values.
>
> **[5:12](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=312)** So we go back through our data points yet again and for each of those we have a function where we can access the data point and the index.
>
> **[5:31](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=331)** And for each of the CAT data array items,
>
> **[5:44](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=344)** we push the data point into p.data and that data point is the Microsoft generated data point, and it's got all of that data in it.
>
> **[5:57](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=357)** Hang on a minute.
>
> **[5:59](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=359)** I'm putting that in the wrong place, I think.
>
> **[6:01](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=361)** So, data points.
>
> **[6:05](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=365)** And once we've done all of that, then we actually put the data into a format that D3 can make sense of.
>
> **[6:10](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=370)** So the way I've structured this, it's not the only way to do it, is to include both the Microsoft generated data is to include both the Microsoft generated data for reference purposes in case we need to query all of the data that's in source property.
>
> **[6:29](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=389)** And then I'm also transforming the data And then I'm also transforming the data into an array of objects much like the one that we had previously, which is the type that D3 needs it to be in.
>
> **[6:55](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=415)** And after all of that, we'll log the data to the console and see what we've got.
>
> **[7:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=420)** This final bit here, line 153, may look familiar to you 'cause that's the sort of structure that we were using in the scatter plot.
>
> **[7:19](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=439)** So unsurprisingly, after all that typing we've got an error and the thing I do here is try and work out where the error is by just logging a simple word to the console.
>
> **[7:32](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=452)** And if it doesn't reach that point, then the error must be before it.
>
> **[7:41](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=461)** Let's make sure that's compiled.
>
> **[7:44](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=464)** Right, so now here I can see the word here.
>
> **[7:54](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=474)** Let's wait for that to compile, refresh and my here has disappeared.
>
> **[8:02](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=482)** I think that was an old here.
>
> **[8:05](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=485)** Yes it was.
>
> **[8:06](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=486)** So the problem is, I don't think we need that anymore.
>
> **[8:22](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=502)** Though we are still using categories but we're not using the bit of code that we had there.
>
> **[8:26](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=506)** but we're not using the bit of code that we had there.
>
> **[8:32](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=512)** And now we have the word here back, get rid of all of that.
>
> **[8:40](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=520)** We have an array of length too at the bottom there, which is our CAT data and that's what we want to explore.
>
> **[8:48](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=528)** So, we have a category called female.
>
> **[8:51](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=531)** It's got some data in it.
>
> **[8:52](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=532)** The data is the Microsoft data, which is identity source and values properties with all of that in there that you can interrogate should you need it.
>
> **[9:01](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=541)** And from experience, I would say you never know upfront quite what you are going to need.
>
> **[9:05](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=545)** And then in the values, we have data formatted in the way that we need it.
>
> **[9:10](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=550)** So we have the age category, the X value and the Y value split out by female and male.
>
> **[9:15](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/create-grouped-scatter-plot-data-to-allow-different-colors-per-category?u=76281980&t=555)** And that's what we needed.

> [!info]- Semantic Content
>
> **CLI Commands:** cat (8), make (3)
> **Env Vars:** cat (8)
> **Code Keywords:** let (3), delete (1), function (1), this, (1)
> **File Paths:** visual.ts (2)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Update your D3 code to reflect your new grouped data
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/update-your-d3-code-to-reflect-your-new-grouped-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/update-your-d3-code-to-reflect-your-new-grouped-data?u=76281980&t=0)** - [Instructor] So now that we have reorganized our data we can generate the shapes in D3, which are notably missing from our bubble chart.
>
> **[0:09](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/update-your-d3-code-to-reflect-your-new-grouped-data?u=76281980&t=9)** So as you would expect, we are going to go to the visual.ts*, 'cause that's what creates D three.
>
> **[0:15](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/update-your-d3-code-to-reflect-your-new-grouped-data?u=76281980&t=15)** And we scroll below all of the data organization code into the D3 code.
>
> **[0:25](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/update-your-d3-code-to-reflect-your-new-grouped-data?u=76281980&t=25)** And to begin with, we're just going to add the groups and what have you in the structure we need with enter* selections.
>
> **[0:34](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/update-your-d3-code-to-reflect-your-new-grouped-data?u=76281980&t=34)** Am I going to append a group element for each of our categories?
>
> **[0:44](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/update-your-d3-code-to-reflect-your-new-grouped-data?u=76281980&t=44)** I'm going to give it a class or categories, but I'm also going to give it an ID this time so that we can tell in the Dom* easily, which is which.
>
> **[1:02](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/update-your-d3-code-to-reflect-your-new-grouped-data?u=76281980&t=62)** And this time we're drilling down into the category data in our sub elements our sub elements get sub data in D3 so, we're giving it deed or values it's not getting the top level data anymore.
>
> **[1:17](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/update-your-d3-code-to-reflect-your-new-grouped-data?u=76281980&t=77)** And for each of those, we're going to append circle.
>
> **[1:22](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/update-your-d3-code-to-reflect-your-new-grouped-data?u=76281980&t=82)** And the circle will have the same attributes as before.
>
> **[1:34](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/update-your-d3-code-to-reflect-your-new-grouped-data?u=76281980&t=94)** But the ID now will be d.cat.
>
> **[1:39](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/update-your-d3-code-to-reflect-your-new-grouped-data?u=76281980&t=99)** And we hit upon this problem where we have to give it a type.
>
> **[1:45](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/update-your-d3-code-to-reflect-your-new-grouped-data?u=76281980&t=105)** And I should confess to you really that I haven't been terribly rigorous in applying TypeScript types in this course.
>
> **[1:53](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/update-your-d3-code-to-reflect-your-new-grouped-data?u=76281980&t=113)** And really you should be, and it does pay dividends.
>
> **[1:57](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/update-your-d3-code-to-reflect-your-new-grouped-data?u=76281980&t=117)** The proper way is not to abuse the any data type, but to declare interfaces to handle your data which is what I do in my more complex graphics.
>
> **[2:09](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/update-your-d3-code-to-reflect-your-new-grouped-data?u=76281980&t=129)** But that really is a TypeScript course rather than a power BI one and that means that you can avoid abusing the any data type which is what we're doing here so really view this as temporary to kind of get you started, but it is worth the research into TypeScript and using types and declaring them on properly.
>
> **[2:27](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/update-your-d3-code-to-reflect-your-new-grouped-data?u=76281980&t=147)** I would say 80% of the non-obvious areas are getting power BI custom visuals come back to TypeScript data type declarations.
>
> **[2:35](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/update-your-d3-code-to-reflect-your-new-grouped-data?u=76281980&t=155)** The way I worked out how to do interfaces and declare all that data properly, It was to find Microsoft sample visuals online and look at how they declare their interface declarations.
>
> **[2:45](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/update-your-d3-code-to-reflect-your-new-grouped-data?u=76281980&t=165)** If you do that, make sure you're looking at version three and later examples because otherwise you'll have a distressing realization that your new code simply doesn't work.
>
> **[2:56](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/update-your-d3-code-to-reflect-your-new-grouped-data?u=76281980&t=176)** Okay, so that's compiled and I have commented out the old code.
>
> **[3:06](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/update-your-d3-code-to-reflect-your-new-grouped-data?u=76281980&t=186)** So now we have eight dots, which is what we wanted at the moment.
>
> **[3:10](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/update-your-d3-code-to-reflect-your-new-grouped-data?u=76281980&t=190)** They are all colored, according to the single dot color setting in formatting pane.
>
> **[3:16](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/update-your-d3-code-to-reflect-your-new-grouped-data?u=76281980&t=196)** So just to show you that we do have categories that can easily be styled.
>
> **[3:20](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/update-your-d3-code-to-reflect-your-new-grouped-data?u=76281980&t=200)** I'm going to just add in some color support.
>
> **[3:31](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/update-your-d3-code-to-reflect-your-new-grouped-data?u=76281980&t=211)** And you can see there's all these different schemes that if you're familiar with D3, you'll be familiar with those schemes.
>
> **[3:37](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/update-your-d3-code-to-reflect-your-new-grouped-data?u=76281980&t=217)** They're all supported there.
>
> **[3:38](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/update-your-d3-code-to-reflect-your-new-grouped-data?u=76281980&t=218)** And for now I'm going to hard code those colors.
>
> **[3:46](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/update-your-d3-code-to-reflect-your-new-grouped-data?u=76281980&t=226)** Just for now temporarily.
>
> **[3:49](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/update-your-d3-code-to-reflect-your-new-grouped-data?u=76281980&t=229)** Then we'll say select the group with an ID of female.
>
> **[3:57](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/update-your-d3-code-to-reflect-your-new-grouped-data?u=76281980&t=237)** Select all the circles within it.
>
> **[4:05](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/update-your-d3-code-to-reflect-your-new-grouped-data?u=76281980&t=245)** After a great deal of head-scratching as to why this got color shouldn't work, when it is a type string and it appears to fulfill all the requirements.
>
> **[4:14](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/update-your-d3-code-to-reflect-your-new-grouped-data?u=76281980&t=254)** I finally found the bug, which is that this should be a lowercase S.
>
> **[4:20](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/update-your-d3-code-to-reflect-your-new-grouped-data?u=76281980&t=260)** So welcome to power BI custom visuals and TypeScript, where the smallest of things can trip you up for a fair bit of time.
>
> **[4:29](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/update-your-d3-code-to-reflect-your-new-grouped-data?u=76281980&t=269)** So now that that works or should work, you're going to say select, male, and we'll make it the second color in the sequence which is just the D3 sequence.
>
> **[4:44](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/update-your-d3-code-to-reflect-your-new-grouped-data?u=76281980&t=284)** And then we'll take off for now the formatting pane support.
>
> **[4:50](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/update-your-d3-code-to-reflect-your-new-grouped-data?u=76281980&t=290)** So at the moment, that's trying to set everything to pink and we're setting these as hard coded.
>
> **[4:55](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/update-your-d3-code-to-reflect-your-new-grouped-data?u=76281980&t=295)** Now, one of your challenges in this chapter will be to improve the code so we can assign colors from the array without having to specify male and female because of course there could be 20 different categories here, not just two.
>
> **[5:08](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/update-your-d3-code-to-reflect-your-new-grouped-data?u=76281980&t=308)** So let's check and we see that we have if we make those a little bit bigger.
>
> **[5:15](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/update-your-d3-code-to-reflect-your-new-grouped-data?u=76281980&t=315)** You see that we have the colors they're assigned based on male and female.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), cat (1), find (1)
> **Code Keywords:** type. (1), type, (1), interface (1), let (1)
> **Definitions:** is a  (2), means that (1)
> **UI Navigation:** go to (1), select the (1)
> **File Paths:** visual.ts (1)
> **Speakers:** - [instructor] (1)

#### Add a size dimension to create a bubble chart
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=0)** - [Instructor] Now we're going to alter the visual to drive the radius of the dots dynamically from the data.
>
> **[0:05](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=5)** So that involves creating a new data packet here called size.
>
> **[0:09](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=9)** And, the drill that we go to capabilities first of all, now size will be a numeric value.
>
> **[0:21](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=21)** So I've copied a type of measure, not a type of grouping.
>
> **[0:26](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=26)** And you know that we need to represent whatever we put in data roles, into data view mappings.
>
> **[0:35](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=35)** So I'm going to say bind to X, Y, and size, and let's check for our field pain has done something useful It's got unit in it at the moment Put unit back in and unit then into size which obviously at the moment doesn't do anything.
>
> **[0:58](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=58)** So all the rest of our work needs to be in visual.ts and I'm just going to tidy up a bit as we go along.
>
> **[1:06](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=66)** First thing we need is a size max and size min declaration.
>
> **[1:13](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=73)** With X and Y we started the axis at zero.
>
> **[1:16](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=76)** So we didn't really care what the minimum values were from the data, but with the radius size, we do need to know the min and the max, because there's axis to start at zero.
>
> **[1:26](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=86)** We don't want any of our dots to be at zero.
>
> **[1:29](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=89)** I will start at three pixels.
>
> **[1:31](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=91)** In fact, that's what I've picked.
>
> **[1:34](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=94)** So, we're just going to copy some of the code that we've used for X and Y are other measures.
>
> **[1:43](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=103)** And we're going to paste it again for max or for size I should say, not just for max.
>
> **[1:53](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=113)** So we're going to say the number is less than size min then we set size min to that value.
>
> **[2:05](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=125)** And then we're going to have a size index joining the party there.
>
> **[2:12](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=132)** And, here, we're going to say if the role is size, then size index is Q So, so far that's not caused any problems.
>
> **[2:30](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=150)** And then we just need to add a size into our data, size is the so data size index.
>
> **[2:42](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=162)** Like so let's check it's still working.
>
> **[2:45](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=165)** And that's in fact it has stopped working.
>
> **[2:50](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=170)** Let's check whether we have a reach.
>
> **[2:55](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=175)** This bit of code.
>
> **[3:01](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=181)** No, we don't.
>
> **[3:13](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=193)** And that's because the role is saying it's both Y and size.
>
> **[3:18](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=198)** When we have a series of else if conditions.
>
> **[3:21](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=201)** So only one of these can hold true at a time.
>
> **[3:27](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=207)** So, Let's just change that to three separate statements and see whether we get a here in the console telling us that we've reached the right place, yes, we have and we've got dots.
>
> **[3:41](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=221)** So we're back in business, okay.
>
> **[3:44](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=224)** Now we can get rid of that.
>
> **[3:48](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=228)** So we've pushed a new bit of data.
>
> **[3:51](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=231)** Now we need a scale.
>
> **[3:57](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=237)** That's going to go from a size min to size max.
>
> **[4:02](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=242)** And I think it's going to go from three pixels to 10 pixels.
>
> **[4:06](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=246)** That's our output range which will be used on the size of our circles.
>
> **[4:13](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=253)** So to make it perform that function we don't want to use settings.radius, we want to use.
>
> **[4:19](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=259)** (keyboard clicking) And once again, we're abusing the, any type but we should now be driving the bubble size from the data.
>
> **[4:48](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=288)** (keyboard clicking)
>
> **[5:05](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=305)** So the problem seems to be then that size min and size max are both zero.
>
> **[5:11](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=311)** And it's the same problem as before that we had an else if.
>
> **[5:19](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=319)** Where we needed separate if statements.
>
> **[5:23](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=323)** So let's try that again.
>
> **[5:26](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=326)** And there, we've got some bubbles with different sizes which will be a bit clearer if I make that disappear and you can see that the data direction and it looks like it's working correctly because I have set both the Y value and the size to be equal to the same field which is unit, which in practice you probably wouldn't do.
>
> **[5:45](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=345)** But what it means is as we go further up, the y-axis, the size of those bubbles is getting bigger, which is correct.
>
> **[5:52](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/add-a-size-dimension-to-create-a-bubble-chart?u=76281980&t=352)** So finally it looks like we've got our bubbles driven by our size.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (1), if. (1)
> **CLI Commands:** make (2)
> **Non-Speech:** (keyboard clicking) (2)
> **File Paths:** visual.ts (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Distributing your visual
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=0)** - Now we've created a custom visual.
>
> **[0:02](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=2)** We need to turn that into a .pbiviz file so that we can distribute it to colleagues or sell it on the app store or whatever.
>
> **[0:09](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=9)** We're viewing our work currently in a developer visual here.
>
> **[0:13](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=13)** Most Power BI users won't have access to a developing visual.
>
> **[0:17](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=17)** They will want your visual to appear as one of these icons in the visualization pane.
>
> **[0:22](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=22)** And of course your users aren't going to want to start up a server or have the right files locally to produce the preview.
>
> **[0:28](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=28)** Packaging the visual couldn't be simpler.
>
> **[0:31](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=31)** So we stopped the server, make sure you're in the project folder, which of course I am because I've just been running the server there and type in pbiviz package like so.
>
> **[0:43](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=43)** If it has been compiling successfully, there should be no reason why this will fail but it does fail.
>
> **[0:51](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=51)** And you can see, it says the author name is not specified and the author email is not specified support URL And the visual description to.
>
> **[0:59](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=59)** So all those things are missing.
>
> **[1:01](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=61)** These are all fields in pbiviz Json.
>
> **[1:04](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=64)** So let's fix that now so that we can output our file.
>
> **[1:08](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=68)** So description is
>
> **[1:16](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=76)** - Not a court.
>
> **[1:17](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=77)** A chart.
>
> **[1:19](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=79)** Is not complete, of course.
>
> **[1:21](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=81)** The support you URL is wherever you want it to be.
>
> **[1:27](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=87)** So we've done the description, we need the author.
>
> **[1:34](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=94)** And the email.
>
> **[1:37](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=97)** Okay. So we've got those things.
>
> **[1:38](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=98)** We save that.
>
> **[1:40](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=100)** And then let's try again with our most recent command.
>
> **[1:44](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=104)** And this time it's worked.
>
> **[1:46](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=106)** So let's go to Explorer.
>
> **[1:51](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=111)** Into bubble chart, now into the dist folder.
>
> **[1:54](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=114)** And you see, we have this very long named pbivis file.
>
> **[2:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=120)** And this 224 F85 has come from the package .Json, by the way.
>
> **[2:06](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=126)** And I think it's auto generated to be unique or statistically almost certain to be unique.
>
> **[2:14](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=134)** And then the point notation at the end I think it refers to the version numbers.
>
> **[2:18](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=138)** So you can change these things basically in pbivis.Json, if you need to.
>
> **[2:22](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=142)** So you can rename it, I should say fairly easily.
>
> **[2:26](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=146)** If you want to, for now, I'm just going to call it this because I'm only going to deal with it locally.
>
> **[2:30](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=150)** So I'm not going to keep track of the versions.
>
> **[2:34](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=154)** So how do your users, or you get this into the Power BI front end?
>
> **[2:41](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=161)** And you click this three dots and we say import a visual from a file, like so, it gives you a warning and then you go to your dist folder and it will only let you select pbivis type files.
>
> **[3:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=180)** And it gives you this standard icon, which is of course something you would want to change.
>
> **[3:05](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=185)** And now we could click on that as we would with any normal visual.
>
> **[3:11](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=191)** And just as we could click on a standard visual we could now click on this visual and it pops up with all of the fields that we gave it.
>
> **[3:23](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=203)** If you want to share this file with colleagues, the import of visual from a file method may not be so useful because they would need to have the file locally.
>
> **[3:32](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=212)** But there are several methods.
>
> **[3:34](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=214)** One is to email them the file, which is easy.
>
> **[3:37](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=217)** There are certain things that both you and they will not be able to do with this file.
>
> **[3:41](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=221)** And that's because it is not certified.
>
> **[3:45](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=225)** A little bit about certified Power BI visuals A certified visual can be exported PowerPoint and can show up in emails in outlook.
>
> **[3:53](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=233)** If a user has subscribed to a report page containing your visual.
>
> **[3:57](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=237)** So conversely, if your visual is not certified these things cannot happen.
>
> **[4:03](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=243)** There can actually be problems even viewing non-certified visuals.
>
> **[4:07](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=247)** I work at a company with certain firewalls and restrictions and I cannot view any non-certified custom visual in Power BI desktop.
>
> **[4:15](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=255)** And I'm not allowed to certify the visuals either since it's a semi-public process.
>
> **[4:21](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=261)** So I can only view my own visuals in Power BI service.
>
> **[4:25](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=265)** Certification is a process that Microsoft offers.
>
> **[4:28](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=268)** To certify your visual, you must make your code available to Microsoft for review and the easiest way to do that, is to use GitHub but it doesn't have to be a public or open source repo.
>
> **[4:39](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=279)** You must have certain key files in your repo such as git ignore capabilities, pbivis and tsconfig.Json, and all of that's here.
>
> **[4:48](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=288)** So you don't need me to tell you that You can publish your visual and then request a review and your visual if you did that could be published here, in Microsoft app source.
>
> **[4:59](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=299)** So you can publish a visual here that is not certified.
>
> **[5:03](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/distributing-your-visual?u=76281980&t=303)** Other people can then download it, but also of course so can your colleagues, and if you work to company you and your company can have a sort of private platform for hosting custom visuals that you trust and that you've developed internally, and that your users will then be able to access them from one of these links.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), public (2), private (1)
> **UI Navigation:** go to (2), click on (2)
> **CLI Commands:** make (2), git (1)
> **Env Vars:** url (2), f85 (1)
> **File Paths:** pbivis.json (1), tsconfig.json (1)
> **Definitions:** refers to (1), is a  (1)
> **Speakers:** - now (1), - not (1)
> **Tools:** github (1)

#### Challenge: Change the hard coding of colors into dynamic coloring based on an array
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/challenge-change-the-hard-coding-of-colors-into-dynamic-coloring-based-on-an-array-13922401?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/challenge-change-the-hard-coding-of-colors-into-dynamic-coloring-based-on-an-array-13922401?u=76281980&t=0)** - [Emma] I really hope you've enjoyed this course on Power BI custom visuals and that you feel confident now to go out and make some for yourself.
>
> **[0:08](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/challenge-change-the-hard-coding-of-colors-into-dynamic-coloring-based-on-an-array-13922401?u=76281980&t=8)** Some other courses that you may find useful are available on LinkedIn Learning and those include a D3 Version Four course by myself, various TypeScript courses and other power BI courses on things such as docs because it can be really useful to know how to transform the data that feeds into your custom visual so that you can make changes to the data rather than trying to make changes to your TypeScript code.
>
> **[0:36](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/challenge-change-the-hard-coding-of-colors-into-dynamic-coloring-based-on-an-array-13922401?u=76281980&t=36)** All the best and good luck with your custom visual career.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), find (1)
> **Analogies:** such as (1)
> **Speakers:** - [emma] (1)

#### Solution: Change the hard coding of colors into dynamic coloring based on an array
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-change-the-hard-coding-of-colors-into-dynamic-coloring-based-on-an-array?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-change-the-hard-coding-of-colors-into-dynamic-coloring-based-on-an-array?u=76281980&t=0)** - [Instructor] For your first challenge, I would like you to alter the code that colors the dots so that the dots are colored dynamically without reference to female and male.
>
> **[0:17](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-change-the-hard-coding-of-colors-into-dynamic-coloring-based-on-an-array?u=76281980&t=17)** So it shouldn't matter what data point is pulled into categories here.
>
> **[0:24](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/solution-change-the-hard-coding-of-colors-into-dynamic-coloring-based-on-an-array?u=76281980&t=24)** The resulting groups of dots should be colored dynamically.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 7. Conclusion

#### Goodbye
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=5)** - [Instructor] So currently this orange and blue color are coming because we have a line of code that says manually for female dots, as it were fill them with this color and for male dots fill them with this color.
>
> **[0:18](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=18)** And that's a really rubbish way of doing it because anybody could change this category field at any time.
>
> **[0:25](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=25)** And male and female would no longer be relevant.
>
> **[0:28](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=28)** So I'm going to point out to you straightaway one method that might make sense for you, but it doesn't make sense for us right now given the code that we have, and that is simply to use a Philip attribute here and use a function in here or maybe our own notation that accesses the parent index.
>
> **[0:48](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=48)** So obviously we can normally have a D and I in D three and the I is accessing the index of our current array, which is dot values.
>
> **[1:00](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=60)** But the one that we want is female and male.
>
> **[1:02](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=62)** It's the index relating to cat data.
>
> **[1:05](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=65)** Now in D three, version three you used to be able to go DIJ like that and J would give you the parent index.
>
> **[1:10](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=70)** And that was really, really handy.
>
> **[1:12](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=72)** You can't do that anymore but there are ways of accessing that parent node and the index of the parent node.
>
> **[1:20](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=80)** And I've tried doing it here and it won't work.
>
> **[1:22](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=82)** And the reason it won't work is because we haven't defined interfaces correctly.
>
> **[1:28](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=88)** So, I keep coming up against type errors.
>
> **[1:32](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=92)** If I had explained to you how to do all of the interfaces properly, that would have taken up half the course, and that's why I haven't done it but it really is worth learning how to do that.
>
> **[1:42](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=102)** And for some of you coming from a TypeScript rather than a D three background you probably already know how to do it.
>
> **[1:47](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=107)** So that is one option.
>
> **[1:49](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=109)** That is the most obvious to be honest option for accessing the color property or the color array, rather.
>
> **[1:57](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=117)** But for me, I'm going to do it slightly differently.
>
> **[1:59](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=119)** I'm going to stick it in here.
>
> **[2:01](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=121)** So the point at which we are organizing our data I am going to access the color here and note I'm using this dot color.
>
> **[2:12](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=132)** I, the I is not relating to this function because this cue index or counter will go zero one, two three zero one two three.
>
> **[2:23](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=143)** It's counting all of the circles within each category.
>
> **[2:26](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=146)** It's not counting the categories for that.
>
> **[2:28](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=148)** We have to go further up.
>
> **[2:30](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=150)** And the I variable is what's counting our categories.
>
> **[2:33](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=153)** So that's the variable that we need to use.
>
> **[2:36](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=156)** Now I know, cause I've just tried to run this and tell you now that although it compiles just fine it won't work.
>
> **[2:43](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=163)** And it won't work to such an extent.
>
> **[2:44](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=164)** It removes our chart all together, which is a bit alarming looks like we can get rid of some of this, the fix for that is to say like color is this top color.
>
> **[2:56](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=176)** And then down here, we don't use this dot color because the code's getting confused about what the this refers to.
>
> **[3:04](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=184)** Now, we just need color against the index type.
>
> **[3:08](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=188)** So there's many, many ways of answering this challenge.
>
> **[3:11](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=191)** And this is just the one that I have picked.
>
> **[3:16](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=196)** And that hasn't worked, which is always good but it has given us some dots.
>
> **[3:20](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=200)** So let's just have a look inside the data.
>
> **[3:24](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=204)** We cannot let Cat beta be anything we want to look cat data, console dot log, cat data and let's see what we get hopefully on the values we have to agree and the color.
>
> **[3:47](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=227)** So that bits worked fine.
>
> **[3:48](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=228)** And the problem is that we haven't actually assigned the fill at any point.
>
> **[3:52](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=232)** So let's try this one again.
>
> **[3:59](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=239)** I still put the bracket notation in this time we want D dot color.
>
> **[4:07](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=247)** But now we can see that it's worked is actually given us the same colors as before.
>
> **[4:11](https://www.linkedin.com/learning/advanced-power-bi-custom-visuals-with-d3-js/goodbye?u=76281980&t=251)** Cause it started with zero and a one, which is what we used but that is one way of solving this challenge.

> [!info]- Semantic Content
>
> **CLI Commands:** cat (4), make (2), node (2)
> **Code Keywords:** let (4), function (2), this, (1), type. (1)
> **Env Vars:** dij (1)
> **Cross-References:** coming up (1)
> **Definitions:** refers to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


## Instructor

- [[Emma Saunders]]

## Resources

- Exercise files available

## Skills Covered

- D3.js
- Microsoft Power BI

## Path Context

### In [[Master Dashboards and Data Viz in Power BI]]
← [[Power BI Data Dashboards]] | **4 of 6** | [[Power BI Challenges- 15 Skills-Building Analytics Exercises for Data Professionals]] →

## Appears In

- [[Master Dashboards and Data Viz in Power BI]]

## Related Courses

_Courses sharing skills:_

- [[Machine Learning with Logistic Regression in Excel, R, and Power BI]] — Microsoft Power BI
- [[Power BI Top Skills]] — Microsoft Power BI
- [[Power BI Dataflows Essential Training]] — Microsoft Power BI
- [[Power BI- Working Together with ChatGPT]] — Microsoft Power BI
- [[Power BI Challenges- 15 Skills-Building Analytics Exercises for Data Professionals]] — Microsoft Power BI

---

[↑ Back to top](#)