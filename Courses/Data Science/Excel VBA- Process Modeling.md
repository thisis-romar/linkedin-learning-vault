---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: excel-vba-process-modeling-25158426
url: "https://www.linkedin.com/learning/excel-vba-process-modeling-25158426"
duration_minutes: 182
duration: 3h 2m
level: Advanced
updated: 1/27/2025
learners: 10057
skills:
  - Microsoft Excel
  - Data Modeling
  - Visual Basic for Applications (VBA)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQEUy0jEcpcUag/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1736873904835?e=2147483647&amp;v=beta&amp;t=GPw7nylx4w8IRMiBsu-IWeWPr9sq0ZOn2dPJ9JY03uM"
linkedin_topic: Data Science
learning_paths:
  - '[[Master Advanced Excel Data & Analytics Skills]]'
prev_courses:
  - '[[Excel Vba Managing Files And Data]]'
next_courses:
  - '[[Excel- Working Together with Power Query and Power Pivot]]'
path_nav: '[{"path":"Master Advanced Excel Data & Analytics Skills","position":2,"total":7,"prev":"Excel Vba Managing Files And Data","next":"Excel- Working Together with Power Query and Power Pivot"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/microsoft-excel
  - skill/data-modeling
  - skill/visual-basic-for-applications-vba
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Excel%20VBA-%20Process%20Modeling.md)

![Excel VBA: Process Modeling](https://media.licdn.com/dms/image/v2/D4E0DAQEUy0jEcpcUag/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1736873904835?e=2147483647&amp;v=beta&amp;t=GPw7nylx4w8IRMiBsu-IWeWPr9sq0ZOn2dPJ9JY03uM)

# Excel VBA: Process Modeling

> Excel power users: Learn how to use Excel and Visual Basic for Applications (VBA) to create and run simulations of business processes for customer flow, queuing, and manufacturing. VBA exponentially extends the power of Excel, allowing you to control process flow and logic and add custom classes and variables. In this course, Curt Frye demonstrates how to build simulations of increasing complexity

> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426) | 3h 2m | Advanced | 10K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Analyze your business processes using Excel VBA](#analyze-your-business-processes-using-excel-vba)
  - [Gain insight into your business through simulation](#gain-insight-into-your-business-through-simulation)
- [**1. Defining Necessary VBA Constructs**](#1-defining-necessary-vba-constructs) (5 videos)
  - [Create a class module](#create-a-class-module)
  - [Define class properties](#define-class-properties)
  - [Create an instance of a class](#create-an-instance-of-a-class)
  - [Create collections](#create-collections)
  - [Delete objects to free up memory](#delete-objects-to-free-up-memory)
- [**2. Developing Process Control Structures**](#2-developing-process-control-structures) (8 videos)
  - [Describe process flow and programming goals](#describe-process-flow-and-programming-goals)
  - [Declare variables used in the simulation](#declare-variables-used-in-the-simulation)
  - [Define the Customers class and add a customer](#define-the-customers-class-and-add-a-customer)
  - [Define the Stations class and add stations](#define-the-stations-class-and-add-stations)
  - [Add code to calculate and write out times](#add-code-to-calculate-and-write-out-times)
  - [Delete unneeded objects](#delete-unneeded-objects)
  - [Run the simulation](#run-the-simulation)
  - [Adapt the code for multiple runs](#adapt-the-code-for-multiple-runs)
- [**3. Adding a Ticker to Track Time**](#3-adding-a-ticker-to-track-time) (5 videos)
  - [Define process flow and programming goals](#define-process-flow-and-programming-goals)
  - [Create an outline of IF and For Next statements](#create-an-outline-of-if-and-for-next-statements)
  - [Add instructions within the framework](#add-instructions-within-the-framework)
  - [Add code to write out simulation results](#add-code-to-write-out-simulation-results)
  - [Run the simulation](#run-the-simulation)
- [**4. Adding Customers during the Simulation**](#4-adding-customers-during-the-simulation) (5 videos)
  - [Describe process flow and programming goals](#describe-process-flow-and-programming-goals)
  - [Use the Poisson distribution to calculate arrival times](#use-the-poisson-distribution-to-calculate-arrival-times)
  - [Add customers to the simulation](#add-customers-to-the-simulation)
  - [Add code to write out simulation results](#add-code-to-write-out-simulation-results)
  - [Run the simulation](#run-the-simulation)
- [**5. Modifying the Simulation**](#5-modifying-the-simulation) (7 videos)
  - [Describe process flow and programming goals](#describe-process-flow-and-programming-goals)
  - [Add capacity to each station](#add-capacity-to-each-station)
  - [Run the simulation with added station capacity](#run-the-simulation-with-added-station-capacity)
  - [Add more stations to the simulation](#add-more-stations-to-the-simulation)
  - [Run the simulation with additional stations](#run-the-simulation-with-additional-stations)
  - [Add rework loops to stations](#add-rework-loops-to-stations)
  - [Run the simulation with rework loops](#run-the-simulation-with-rework-loops)
- [**6. Allowing Conditional Processing**](#6-allowing-conditional-processing) (6 videos)
  - [Describe process flow and programming goals](#describe-process-flow-and-programming-goals)
  - [Allow conditional station paths](#allow-conditional-station-paths)
  - [Run the simulation](#run-the-simulation)
  - [Allow other employees to help the process](#allow-other-employees-to-help-the-process)
  - [Run the simulation with helpers](#run-the-simulation-with-helpers)
  - [Add time for customers to complete the process](#add-time-for-customers-to-complete-the-process)
- [**7. Analyzing Simulation Results**](#7-analyzing-simulation-results) (5 videos)
  - [Read the simulation results as written](#read-the-simulation-results-as-written)
  - [Manually reset the results cells](#manually-reset-the-results-cells)
  - [Summarize results using the Total row](#summarize-results-using-the-total-row)
  - [Sort and filter Excel table values](#sort-and-filter-excel-table-values)
  - [Troubleshoot errors in your code](#troubleshoot-errors-in-your-code)
- [**Conclusion**](#conclusion) (1 videos)
  - [Further resources](#further-resources)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Analyze your business processes using Excel VBA
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/analyze-your-business-processes-using-excel-vba?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/analyze-your-business-processes-using-excel-vba?u=76281980&t=0)** - [Narrator] Microsoft Excel is a powerful and versatile tool for analyzing business processes.
>
> **[0:06](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/analyze-your-business-processes-using-excel-vba?u=76281980&t=6)** Mastering the skills you need to model and simulate your operations will let you work quickly and support great decision making.
>
> **[0:13](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/analyze-your-business-processes-using-excel-vba?u=76281980&t=13)** In this course, I'll use real world examples to demonstrate how you can apply the incredible power of Excel and Excel VBA to business process analysis.
>
> **[0:23](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/analyze-your-business-processes-using-excel-vba?u=76281980&t=23)** Whether you are running a neighborhood sandwich shop, or a large production line.
>
> **[0:27](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/analyze-your-business-processes-using-excel-vba?u=76281980&t=27)** I'm Curt Frye.
>
> **[0:28](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/analyze-your-business-processes-using-excel-vba?u=76281980&t=28)** Join me at LinkedIn Learning for an introduction to the essential skills for analyzing business processes using Microsoft Excel VBA.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** business (3), [[Microsoft Excel]] (2), [[Microsoft Excel|Excel]] (2), power (1), [[LinkedIn]] (1)
> **Env Vars:** vba (2)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Gain insight into your business through simulation
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=0)** - [Instructor] Thanks again for your interest in this course.
>
> **[0:02](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=2)** Before I get started, I want to share some important information that you should know.
>
> **[0:07](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=7)** I assume that you have basic proficiency in Excel VBA.
>
> **[0:11](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=11)** If not, you'll pick up a lot as we go along, but the more you know before you get started, the better off you'll be.
>
> **[0:18](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=18)** Secondly, this is not the type of course where I teach a specific skill within each movie.
>
> **[0:25](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=25)** Instead, the movies build progressively within each chapter.
>
> **[0:29](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=29)** And that means also that not every movie ends with code that you can run.
>
> **[0:33](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=33)** Many of them do, but some of them, especially in the later chapters do not.
>
> **[0:38](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=38)** I make sure though that all the workbooks contain previous code from the chapter.
>
> **[0:43](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=43)** That way you will never have to retype anything.
>
> **[0:45](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=45)** Also, chapters two through four include a workbook With the completed code, you can complete the exercises yourself for chapters five and later, and create the code that you need.
>
> **[0:57](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=57)** And finally, I need to cover how to manage macro security for downloaded files.
>
> **[1:02](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=62)** As of September 20th, 2024, Microsoft has changed how Microsoft Office handles files that are downloaded from the internet.
>
> **[1:12](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=72)** So I'm going to switch to the exercise files folder, and show you what you need to do to be able to run the code.
>
> **[1:18](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=78)** I have switched over to File Explorer, and I have chapter two of the exercise files collection open.
>
> **[1:25](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=85)** But any exercise files folder will do.
>
> **[1:28](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=88)** Let me show you what happens when you open a file without changing its macro security settings.
>
> **[1:34](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=94)** So I will double-click 0205 and we won't actually do any work.
>
> **[1:39](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=99)** I'm just using it as an example.
>
> **[1:42](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=102)** So I have enable editing on the warning bar here.
>
> **[1:47](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=107)** So I'll click Enable Editing.
>
> **[1:49](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=109)** After I click Enable Editing, I receive a security risk message saying that Microsoft has blocked macros from running because the source of this file is untrusted.
>
> **[2:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=120)** If I click Learn more, I'll go to an online article.
>
> **[2:03](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=123)** So if you want to learn more, I encourage you to click that.
>
> **[2:06](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=126)** But instead, there's a setting that you can make to the files properties that will keep this from happening because as the file is right now, none of the macros in it will run.
>
> **[2:17](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=137)** So I will close the file.
>
> **[2:19](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=139)** and then in File Explorer, I'll right-click the files icon, and then click properties.
>
> **[2:27](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=147)** In the properties dialogue box on the general tab, if you look down at the bottom, almost all the way to the bottom right, there's a security note saying, "This file came from another computer, and might be blocked to help protect this computer."
>
> **[2:41](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=161)** That's because this file was in fact downloaded from the internet.
>
> **[2:44](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=164)** To open the file and have the macros be usable, you need to check the unblock checkbox here.
>
> **[2:51](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=171)** So this will allow you to use macros in this file and in this file only.
>
> **[2:57](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=177)** So it does mean that you need to repeat this process for every file.
>
> **[3:02](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=182)** However, that's great for security.
>
> **[3:04](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=184)** So always make sure you trust a file before you allow macros to run.
>
> **[3:08](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=188)** I'll click okay.
>
> **[3:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=190)** And then I will double-click the same file 0205 and I get the notes saying that macros have been disabled.
>
> **[3:16](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=196)** So I will enable the content, and the security warning that I received earlier indicating that macros were disallowed has been removed.
>
> **[3:25](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=205)** So I can now work with the file including the macros that it contains.
>
> **[3:30](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=210)** And also to reiterate, I apologize, but you will need to do this for each file that you download.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security]] (6), [[Microsoft]] (2), [[Microsoft Excel|Excel]] (1), [[Microsoft Office]] (1)
> **UI Navigation:** double-click (2), switch to (1), go to (1), right-click (1), open the (1)
> **CLI Commands:** make (3)
> **Exercise Files:** exercise files (3)
> **Warnings:** warning (2)
> **Env Vars:** vba (1)
> **Best Practices:** always make sure (1)
> **Speakers:** - [instructor] (1)


### 1. Defining Necessary VBA Constructs

[↑ Back to Table of Contents](#table-of-contents)

#### Create a class module
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-a-class-module?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-a-class-module?u=76281980&t=1)** - [Narrator] When you create a simulation, you model the behavior of business objects, such as customers, as they move through an environment.
>
> **[0:09](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-a-class-module?u=76281980&t=9)** That environment is made up of other business objects, which could include customer service stations within a store.
>
> **[0:14](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-a-class-module?u=76281980&t=14)** In this movie, I will show you how to create a class module.
>
> **[0:18](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-a-class-module?u=76281980&t=18)** A class module is a place within Excel VBA where you can define a class that you'll use as part of your VBA programming.
>
> **[0:27](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-a-class-module?u=76281980&t=27)** I don't need to do any work in a worksheet, so I'll press alt-F11 to move to the Visual Basic editor.
>
> **[0:34](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-a-class-module?u=76281980&t=34)** And here I'm in the Visual Basic Editor and I have my project explorer over on the left.
>
> **[0:41](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-a-class-module?u=76281980&t=41)** And this displays all of the open workbooks and that can include add-ins such as Solver, which I have installed and is treated as a separate workbook.
>
> **[0:52](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-a-class-module?u=76281980&t=52)** So I have my Solver project, and I also have the project for chapter 101, which is what I'm currently working on.
>
> **[1:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-a-class-module?u=76281980&t=60)** To create a class module, I'll go up to the insert menu and then click class module.
>
> **[1:07](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-a-class-module?u=76281980&t=67)** And this module, as I said, is a container where I can create my class definition.
>
> **[1:13](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-a-class-module?u=76281980&t=73)** One last thing I'll do before I close here, is to rename the class module so that it's more descriptive than class one.
>
> **[1:22](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-a-class-module?u=76281980&t=82)** With class one clicked, and I'll make sure that it is selected.
>
> **[1:26](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-a-class-module?u=76281980&t=86)** I'll go down to the properties box and I will change the name properties value from class one to C customer.
>
> **[1:36](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-a-class-module?u=76281980&t=96)** The capital C in front is not required, but I like to add it to my class definitions, so I remember that, in fact, it is a class that I've created.
>
> **[1:46](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-a-class-module?u=76281980&t=106)** So with that, and I'll press enter.
>
> **[1:48](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-a-class-module?u=76281980&t=108)** And the class module has been renamed to C customer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** business (2), [[Simulation]] (1), [[Microsoft Excel|Excel]] (1), [[Programming]] (1)
> **Env Vars:** vba (2), f11 (1)
> **Definitions:** is a  (3)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### Define class properties
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=0)** - [Instructor] After you create a class module in Excel VBA, you can define the class itself, and those include variables for properties that contain values describing the object.
>
> **[0:11](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=11)** For example, that could be the name of a customer.
>
> **[0:14](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=14)** In this movie, I will show you how to create a class definition.
>
> **[0:18](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=18)** My sample file is chapter 0102, and you can find it in the chapter one folder of the exercise files collection.
>
> **[0:25](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=25)** I don't need to do any work in a worksheet, so I'll press alt F11 to move to the Visual Basic Editor.
>
> **[0:31](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=31)** And there I already have my code module created and pulled up.
>
> **[0:35](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=35)** And I will increase the size of that code window.
>
> **[0:41](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=41)** The first thing I need to do is declare the variables for my class module.
>
> **[0:46](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=46)** And rather than use dim for dimension, I will use private, so the variables stay within the definition.
>
> **[0:54](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=54)** So I have private, and I'll do customer ID, and I'll put a P in front of it to indicate that it is private.
>
> **[1:02](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=62)** C-U-S-T-I-D as long.
>
> **[1:06](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=66)** And most of the variables that I use for numbers could be integers, but long gives me more flexibility in case the numbers do get large.
>
> **[1:15](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=75)** So there was private customer ID.
>
> **[1:18](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=78)** Then I'll do private p station.
>
> **[1:22](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=82)** Again as long, private p start time.
>
> **[1:30](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=90)** As long.
>
> **[1:31](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=91)** And actually I will copy what I am typing there.
>
> **[1:36](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=96)** So I have private.
>
> **[1:38](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=98)** Then I'll double click P start time and replace that with P lowercase p, end time.
>
> **[1:46](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=106)** Then click below.
>
> **[1:48](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=108)** And the next variable name will be P entered.
>
> **[1:53](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=113)** And this is the time that a customer entered a specific workstation.
>
> **[2:02](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=122)** And then P, and then P left, which is the time that a customer left a particular workstation.
>
> **[2:14](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=134)** So there are all of my variables, and I've spelled them correctly, and they are all of type long.
>
> **[2:20](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=140)** And now I can define my customers.
>
> **[2:23](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=143)** So for that, I will do a comment that says C-U-S-T-I-D property.
>
> **[2:30](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=150)** Then enter twice, and I'll have a public property.
>
> **[2:36](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=156)** Then the get keyword, which allows me to assign a variable to a property.
>
> **[2:40](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=160)** So going from outside the property or outside the class to within.
>
> **[2:47](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=167)** So I have public property, get, customer ID.
>
> **[2:51](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=171)** Then open and close parenthesis, as long.
>
> **[2:55](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=175)** there I have my property definition, and I'll tab in, and it'll be customer ID equals P customer ID.
>
> **[3:05](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=185)** So this gives me a way to assign a customer ID from outside of the property itself.
>
> **[3:12](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=192)** If we want to write the property value out to a variable, then we use the let keyword.
>
> **[3:19](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=199)** So public property, let, then customer ID, and now we need to tell Excel what type of variable is going out.
>
> **[3:31](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=211)** So that will be value as long.
>
> **[3:37](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=217)** Then enter a couple of times, and it'll be P customer ID equals value, and I already have end property.
>
> **[3:45](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=225)** So this is the start of a definition for a class using the get and let keywords for the customer ID property.
>
> **[3:54](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=234)** There are other properties that you can see listed here for the variables, but rather than have you watch me create them, I'll do that offline and see you in the next movie.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (2), next (2)
> **Env Vars:** vba (1), f11 (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Create an instance of a class
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-instance-of-a-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-instance-of-a-class?u=76281980&t=0)** - [Instructor] After you define a class and its properties, you can create an object that is a member of that class.
>
> **[0:06](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-instance-of-a-class?u=76281980&t=6)** In object-oriented programming.
>
> **[0:08](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-instance-of-a-class?u=76281980&t=8)** An example of a class is called an instance.
>
> **[0:11](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-instance-of-a-class?u=76281980&t=11)** For example, if you're simulating movement of customers through a sandwich shop, you would create instances of the shop stations as well as instances of each customer.
>
> **[0:21](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-instance-of-a-class?u=76281980&t=21)** And once you create an instance, you can assign values to its properties.
>
> **[0:26](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-instance-of-a-class?u=76281980&t=26)** To demonstrate, I'll work in Chapter01_03 and that is a macro-enabled Excel workbook you can find in the chapter one folder of the exercise files collection.
>
> **[0:36](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-instance-of-a-class?u=76281980&t=36)** And I don't have any data in my worksheet, but I do have some code already written.
>
> **[0:41](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-instance-of-a-class?u=76281980&t=41)** So, I'll press ALT F11 to move to the Visual Basic editor.
>
> **[0:46](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-instance-of-a-class?u=76281980&t=46)** And here I have my definition in the CCustomer class module.
>
> **[0:52](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-instance-of-a-class?u=76281980&t=52)** And if I resize the code window, you can see that I have defined the property is required for each of the variables up top.
>
> **[1:02](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-instance-of-a-class?u=76281980&t=62)** Now, I can create a regular code module and refer to an instance of the customer class within it.
>
> **[1:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-instance-of-a-class?u=76281980&t=70)** So, go to the Insert menu and click Module.
>
> **[1:14](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-instance-of-a-class?u=76281980&t=74)** And again, this is just a standard code module, and I will resize it to cover up the class module in the background so it's not distracting (inhales).
>
> **[1:27](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-instance-of-a-class?u=76281980&t=87)** The subroutine, I'll call SimTest, so, it's just testing the simulation open and close parentheses, (keyboard clicking) 'cause we're not expecting any data from the outside.
>
> **[1:39](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-instance-of-a-class?u=76281980&t=99)** Now, I need to define a customer object.
>
> **[1:42](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-instance-of-a-class?u=76281980&t=102)** So, to declare that I'll do Dim for dimension O-B-J-C, and as the O-B-J indicates, this will be an object variable, so, as CCustomer.
>
> **[1:55](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-instance-of-a-class?u=76281980&t=115)** And note that because I have CCustomer as a defined class, it appears in the auto-complete when I'm entering in this command.
>
> **[2:06](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-instance-of-a-class?u=76281980&t=126)** So, I have CCustomer highlighted, so, I'll press tab, (keyboard clicking) a couple of enters, and then I need to actually create an instance of that object variable.
>
> **[2:19](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-instance-of-a-class?u=76281980&t=139)** And for that we use Set O-B-J C equals New CCustomer.
>
> **[2:28](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-instance-of-a-class?u=76281980&t=148)** Now, I can assign values to a couple of its properties to make sure it works and then use the Debug.Print statement to send the output to the immediate window to make sure the assignment worked.
>
> **[2:42](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-instance-of-a-class?u=76281980&t=162)** So, I'll do O-B-J-C.Customer ID, so that property appears again in the auto complete list, equals one.
>
> **[2:53](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-instance-of-a-class?u=76281980&t=173)** This is just a test.
>
> **[2:55](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-instance-of-a-class?u=76281980&t=175)** Then O-B-J-C.StartTime, I will also set to one and below that I will do Debug.Print statements for both of those properties, so, Debug.Print, O-B-J-C.Customer ID, and then the same Debug.Print O-B-J-C.StartTime.
>
> **[3:19](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-instance-of-a-class?u=76281980&t=199)** All right, that looks good.
>
> **[3:20](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-instance-of-a-class?u=76281980&t=200)** If I run this code, then the output will appear in the immediate window.
>
> **[3:26](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-instance-of-a-class?u=76281980&t=206)** If the immediate window isn't open in your version of the Visual Basic editor, then you can go to the view menu and click Immediate Window, which is about a third of the way down, or you can press Control G to open it.
>
> **[3:44](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-instance-of-a-class?u=76281980&t=224)** For me, it's already displayed at the bottom.
>
> **[3:47](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-instance-of-a-class?u=76281980&t=227)** So, I will click inside of the subroutine and press F5 to run it.
>
> **[3:51](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-instance-of-a-class?u=76281980&t=231)** And at the bottom I have one and one.
>
> **[3:55](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-instance-of-a-class?u=76281980&t=235)** So, I have the customer ID and start time.
>
> **[3:59](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-instance-of-a-class?u=76281980&t=239)** And if I change the start time to two and press F5 to run again, then I get the values of one and two.
>
> **[4:07](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-instance-of-a-class?u=76281980&t=247)** So, it appears that my code is working correctly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1), [[Microsoft Excel|Excel]] (1), [[Simulation]] (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (2), is called (1)
> **Env Vars:** alt (1), f11 (1)
> **UI Navigation:** go to (2)
> **Non-Speech:** (keyboard clicking) (2)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)

#### Create collections
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=0)** - [Instructor] In Excel VBA, classes let you sort instances of an object you use in your simulation.
>
> **[0:06](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=6)** Those objects could be customers or stations within a process.
>
> **[0:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=10)** One useful way to manage instances of a class is to create a collection and if you have programmed an Excel VBA before then you're probably familiar with the worksheets collection, which contains all of the worksheets within a workbook.
>
> **[0:24](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=24)** In this movie, I will show you how to create a collection for objects of your own classes.
>
> **[0:30](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=30)** My sample file is chapter 0104 and you can find it in the chapter one folder of the exercise files collection.
>
> **[0:37](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=37)** I don't have any data to work with in the worksheet, so I'll press alt F11 to move to the Visual Basic Editor.
>
> **[0:45](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=45)** And here in the front I have my customer class definition and behind it and I'll use the window menu to display Module one, I have the code for my test and I will drag and resize my module one code module so that I'm not distracted by the customer class module in the back.
>
> **[1:14](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=74)** I have created the outline of the code that I want to run.
>
> **[1:20](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=80)** So I have a sub-routine and I have declared object C as an object type of customer.
>
> **[1:29](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=89)** My goal for this movie is to create a customer collection and have two customers to add to it.
>
> **[1:36](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=96)** So let's start by assigning customers as a collection.
>
> **[1:40](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=100)** So I'll do DIM for dimension, which is declaring a variable, then customers as collection.
>
> **[1:49](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=109)** So that is a collection type.
>
> **[1:52](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=112)** And below that I will set customers as a new collection.
>
> **[1:58](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=118)** So set customers equal new collection, that's good.
>
> **[2:04](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=124)** Now I can use a counter variable to move through two instances where I will create a new customer object and assign values to its properties.
>
> **[2:16](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=136)** So we'll start by four and then I'll just use I as a counter variable equals one to two.
>
> **[2:25](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=145)** Then below that I will create a new customer object.
>
> **[2:29](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=149)** So you set objC equals new customer, New CCustomer.
>
> **[2:38](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=158)** And now I can use the collections add method to add the object I just created.
>
> **[2:45](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=165)** So customers.add then objC, the object I just created.
>
> **[2:53](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=173)** And with that I can assign property values.
>
> **[2:57](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=177)** So that will be customers.
>
> **[3:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=180)** And then the index will be my counter variable in the four next loop.
>
> **[3:06](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=186)** So customers(i).CustID= i.
>
> **[3:14](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=194)** Then I will press enter and Customers(i).StartTime will be equal to one,
>
> **[3:27](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=207)** then enter a couple of times.
>
> **[3:28](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=208)** Then next i and I make the i a comment by putting a single quote in front of it because you don't actually need to assign the variable to the next statement.
>
> **[3:42](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=222)** Excel just looks back out and uses the closest four to close out the four next loop.
>
> **[3:49](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=229)** But I like to add it so I can keep track. So there's that.
>
> **[3:53](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=233)** And now I want to print values for customer ID and start time.
>
> **[4:02](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=242)** So I made that a comment.
>
> **[4:05](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=245)** And because I'm working with a collection I can use For Each objC in Customers,
>
> **[4:15](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=255)** then I'll do Debug.Print objC.CustID and we'll do the same for Debug.Print objC.StartTime and next, objC looks good.
>
> **[4:36](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=276)** So when I run my code, I should see the output in the immediate window below.
>
> **[4:41](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=281)** If the immediate window isn't displayed, you can go to the view menu and click immediate window, or you can press Ctrl G.
>
> **[4:50](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=290)** Mine is already displayed and actually I will track its top edge up a little bit more.
>
> **[4:57](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=297)** There we go.
>
> **[4:57](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=297)** And with the insertion point or the cursor flashing in my subroutine, I'll press F5 and it's run and I get one, which is the first customer ID followed by the start time of one.
>
> **[5:12](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=312)** Then the second customer ID, which was number two, and its start time is also one.
>
> **[5:17](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=317)** So the code to create our collection and add two instances of our customer class to it has been successful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (5), [[Microsoft Excel|Excel]] (3), [[Simulation]] (1), data (1)
> **Code Identifiers:** objc (6)
> **Env Vars:** vba (2), f11 (1), dim (1)
> **CLI Commands:** find (1), make (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Delete objects to free up memory
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/delete-objects-to-free-up-memory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/delete-objects-to-free-up-memory?u=76281980&t=0)** - [Instructor] When you use VBA to create instances of objects in Microsoft Excel or other Office programs, the program keeps those instances in memory until your code finishes running or you delete the objects deliberately.
>
> **[0:14](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/delete-objects-to-free-up-memory?u=76281980&t=14)** Excel handles object cleanup pretty well, but you can manage your computer's memory effectively by getting rid of objects you no longer need.
>
> **[0:21](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/delete-objects-to-free-up-memory?u=76281980&t=21)** And in this movie, I will show you how to do that.
>
> **[0:24](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/delete-objects-to-free-up-memory?u=76281980&t=24)** My sample file is Chapter01_05, and you can find it in the Chapter01 of the Exercise Files collection.
>
> **[0:32](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/delete-objects-to-free-up-memory?u=76281980&t=32)** Everything we need to do is in Visual Basics, so I will press Alt + F11 to move to the Visual Basic editor.
>
> **[0:41](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/delete-objects-to-free-up-memory?u=76281980&t=41)** In the Visual Basic editor, I have my existing code, and the first is the Customer Class Definition.
>
> **[0:47](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/delete-objects-to-free-up-memory?u=76281980&t=47)** I have the variables up top.
>
> **[0:49](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/delete-objects-to-free-up-memory?u=76281980&t=49)** And you can see for each of the properties, I have Get and Let statements, which allow us to write values in and out of each of these objects.
>
> **[1:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/delete-objects-to-free-up-memory?u=76281980&t=60)** And behind that, I have a code window, which is a regular code module as opposed to the class module that runs through each of the objects in the Customers collection and prints out their Customer ID.
>
> **[1:13](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/delete-objects-to-free-up-memory?u=76281980&t=73)** And if I press F5, we get the output in the immediate window.
>
> **[1:19](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/delete-objects-to-free-up-memory?u=76281980&t=79)** If you don't see the immediate window, you can display it one of two ways.
>
> **[1:23](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/delete-objects-to-free-up-memory?u=76281980&t=83)** First, you could go to the View menu and click Immediate Window, or you can use the keyboard shortcut Control + G.
>
> **[1:32](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/delete-objects-to-free-up-memory?u=76281980&t=92)** This code module runs as expected, but I can aid memory cleanup by clearing out the objects that I created before closing out the routine.
>
> **[1:43](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/delete-objects-to-free-up-memory?u=76281980&t=103)** So at the end, above End Sub and after Next, I'll type Set Customers = Nothing.
>
> **[1:54](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/delete-objects-to-free-up-memory?u=76281980&t=114)** I created Customers as a collection using this line of code here, and then I assigned two customers as objects or instances within that collection.
>
> **[2:05](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/delete-objects-to-free-up-memory?u=76281980&t=125)** When I set Customers to Nothing, I am erasing that collection and returning the memory use to store those two customer instances to main memory, and it's now available for the rest of the program to use.
>
> **[2:20](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/delete-objects-to-free-up-memory?u=76281980&t=140)** Modern computers have a lot of memory, so this step isn't as necessary as it used to be.
>
> **[2:25](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/delete-objects-to-free-up-memory?u=76281980&t=145)** But cleaning up unneeded objects is a good programming practice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel]] (1), [[Microsoft Office|Office]] (1), [[Microsoft Excel|Excel]] (1), next (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** vba (1), f11 (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)


### 2. Developing Process Control Structures

[↑ Back to Table of Contents](#table-of-contents)

#### Describe process flow and programming goals
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/describe-process-flow-and-programming-goals-25123394?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/describe-process-flow-and-programming-goals-25123394?u=76281980&t=0)** - [Instructor] In this chapter, we will create a simulation that defines a series of three stations and then moves two customers through those stations.
>
> **[0:09](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/describe-process-flow-and-programming-goals-25123394?u=76281980&t=9)** As part of that process, we will declare the variables that we need and we'll also define classes for customers and stations and then add stations with property values.
>
> **[0:21](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/describe-process-flow-and-programming-goals-25123394?u=76281980&t=21)** So we will get information about the average and the standard deviation of the processing time for each of the stations in the process.
>
> **[0:30](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/describe-process-flow-and-programming-goals-25123394?u=76281980&t=30)** We will also clean up unneeded objects and run the simulation one time to get a single set of values and then run the simulation several times to get more values to help with our analysis.
>
> **[0:43](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/describe-process-flow-and-programming-goals-25123394?u=76281980&t=43)** The idea is that the first customer will move through the entire sequence of stations before the second customer starts and that is an unrealistic scenario, but it provides a simplified framework we can use at the base for more complicated models later in the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (3)
> **Cross-References:** later in (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Declare variables used in the simulation
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=0)** - [Instructor] Every VBA code module requires variables to represent values used within the module's procedures.
>
> **[0:07](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=7)** In this case, we will use quite a few variables to store values that include the number of stations in the simulation, the average processing time, and the total time that an individual customer spends within the system.
>
> **[0:20](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=20)** In this movie, we will start to define the variables and procedures that we'll use.
>
> **[0:25](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=25)** My sample file is chapter 0202, and that's a macro enabled Excel workbook you can find in the chapter two folder of the exercise files collection.
>
> **[0:34](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=34)** I have a sim setup worksheet out front, and this is customer simulation data for three stations.
>
> **[0:42](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=42)** So we have the mean and the standard deviation of the processing time.
>
> **[0:46](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=46)** We will use this data later, but for now, I'll press alt+F11 to move to the Visual Basic Editor.
>
> **[0:53](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=53)** And here, I have two separate class modules.
>
> **[0:58](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=58)** In front, I have the customer class module and I'll expand that a bit.
>
> **[1:03](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=63)** This is the same class module that we used in the previous chapter, and I'll click the window menu header, and go to see station, and this is a similar class definition for the stations that we'll use.
>
> **[1:23](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=83)** So I have the station ID, mean processing time, the station standard deviation processing time, and also the next station.
>
> **[1:32](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=92)** So if we have station number one, then we need to know that the customer, after completing their time in station one, would move to station two.
>
> **[1:43](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=103)** And the other window, which I'll display, so I have window, and then module one, is the code that will allow us to move through the processes going from station to station.
>
> **[1:57](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=117)** I have the immediate window open in my visual basic editor, so I will click the close button to close that, and then expand the module one code module window.
>
> **[2:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=130)** At the top, you might have noticed that I have the statement option explicit.
>
> **[2:15](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=135)** Option explicit requires you to declare a variable before using it, and it's especially useful for avoiding misspellings.
>
> **[2:24](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=144)** If you leave a letter out of a variable name for example, you have asked Excel VBA to use a separate variable, one you might not have assigned a value to, so option explicit can save you a lot of time in avoiding mistakes because it won't let you, literally will not let you use a variable that you haven't declared above.
>
> **[2:46](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=166)** So let's start with declaring some variables, and under the first comment, I will declare collections and objects within collections.
>
> **[2:56](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=176)** So I'll start by creating the customer object.
>
> **[3:01](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=181)** So Dim objC as CCustomer, and again, that's the customer class that we defined.
>
> **[3:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=190)** Then Dim objS, so that's an object variable.
>
> **[3:15](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=195)** Actually I will do all lowercase objs as CStation, and now we need to define collections to hold our customers and any stations that we create.
>
> **[3:29](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=209)** So I'll do Dim Customers as Collection, then Dim Stations as Collection as well.
>
> **[3:40](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=220)** So there I have my objects for the customer station and collections to store them.
>
> **[3:48](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=228)** Now I can declare the loop counter random and processing time variables that we will use, and these will generate the results for each of our simulation runs.
>
> **[4:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=240)** So I have Dim lStCntr, that will be station counter, as Long.
>
> **[4:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=250)** Then Dim lCustIDCntr also as Long.
>
> **[4:17](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=257)** All of the numerical variables that I'll use here, with one exception, will be long integers.
>
> **[4:26](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=266)** Then I'll have Dim lStaTime as Long.
>
> **[4:34](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=274)** And then finally, we will have a single precision numerical value, so this will have a decimal component and that will be for our random values.
>
> **[4:44](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=284)** So Dim and then I use sng as the prefix for a single precision decimal number.
>
> **[4:53](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=293)** S, for me, usually means string as opposed to str, so I use sng to make sure it's clear.
>
> **[5:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=300)** So I have sngRand as Single.
>
> **[5:05](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=305)** Now we can declare a variable to store the number of stations and this won't make such a difference in this rather simple procedure that we are putting together, but later on, it will allow us to have more flexibility and use information stored in a worksheet as opposed to hard coded in the VBA code.
>
> **[5:28](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=328)** And so this will be the count of the number of stations, so Dim lNbrStas as Long.
>
> **[5:40](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=340)** Next, assign a value for the number of stations, and this is where we will draw the number from a worksheet cell.
>
> **[5:49](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=349)** So that will be lNbrStas and that again, is the variable that we declared above, and this will come from the SimSetup worksheet, so it'll be Worksheets using the worksheets collection, and the name will be SimSetup, that's in double quotes, then a period, and the property we'll use as range because we're looking at a specific cell, and then within parentheses and double quotes, that will be ("B2").Value, and now we can initialize the customer counter variable.
>
> **[6:30](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=390)** Ah, I forgot to type a right parentheses there.
>
> **[6:34](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=394)** Okay, that's good.
>
> **[6:35](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=395)** And now I can initialize the customer identification number counter variable because we will give them an increasing number starting at one as we go along.
>
> **[6:45](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=405)** So that would be lCustIDCntr = 1, so that's where we will start.
>
> **[6:55](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=415)** And to make sure that my code at least runs, even though we won't see any output, I will press F5 and we didn't get an error, so that means that even though everything might not be exactly the way we want it, at least we don't have any errors going forward.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (3), [[Microsoft Excel|Excel]] (2), data (2), next (2)
> **Code Identifiers:** lcustidcntr (2), lnbrstas (2), objc (1), objs (1), lstcntr (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** vba (3), f11 (1)
> **Definitions:** is a  (1), means that (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)

#### Define the Customers class and add a customer
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980&t=0)** - [Instructor] In this course of simulations, we're modeling the flow of customers through a sandwich shop.
>
> **[0:06](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980&t=6)** The process has two main elements, customers and stations.
>
> **[0:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980&t=10)** And in this movie, I will create collections that will allow us to assign values to the customers that are going through our process.
>
> **[0:19](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980&t=19)** My sample file is Chapter02_03, and you can find it in the Chapter 2 folder of the Exercise Files collection.
>
> **[0:27](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980&t=27)** We're getting closer to using the data in the sim setup worksheet, but we're not quite there yet.
>
> **[0:32](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980&t=32)** There's a bit more that we need to do in Excel VBA.
>
> **[0:36](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980&t=36)** So I'll press Alt + F11 to move to the Visual Basic Editor.
>
> **[0:42](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980&t=42)** I have the Customers class defined in front.
>
> **[0:46](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980&t=46)** You can go through that if you like, but I will click the Module 1 code window's title bar to bring it to the front so we can add more code.
>
> **[0:55](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980&t=55)** And I will drag the bottom-right corner to increase the size of the code window.
>
> **[1:03](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980&t=63)** I have already declared a lot of variables and those include the customer objects and collections to keep them, loop, counter, and random variables.
>
> **[1:14](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980&t=74)** And then the variable for the number of stations, and also assigning values to the number of stations.
>
> **[1:21](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980&t=81)** Next, I want to create customers and add them to my collections.
>
> **[1:26](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980&t=86)** So I'll click below all of the existing code, but above the end substatement at the end of the subroutine.
>
> **[1:33](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980&t=93)** I'll type a single quote and add the comment, Create Customers collection, then enter to move below that.
>
> **[1:45](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980&t=105)** And I'll say Set Customers equals New collection.
>
> **[1:52](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980&t=112)** And below that, I can add a single customer for this round.
>
> **[1:57](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980&t=117)** So again, single quote, add a single customer for this round.
>
> **[2:06](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980&t=126)** And now I can use the object C objects variable to add a new customer to that collection.
>
> **[2:14](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980&t=134)** So I'll say set objC equal New Customer.
>
> **[2:23](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980&t=143)** Now having created it, I can add it.
>
> **[2:27](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980&t=147)** So I'll use the customers collections add method to add the object C that I just created to the collection.
>
> **[2:33](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980&t=153)** So that'll be Customers.add, space, objC, which is my object variable.
>
> **[2:41](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980&t=161)** That's good.
>
> **[2:43](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980&t=163)** Now I can assign a customer ID to that customer, and for that I will use the customer ID counter variable that I defined above and assigned the value of one.
>
> **[2:56](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980&t=176)** So Customers.
>
> **[3:01](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980&t=181)** And then in parentheses, I'll indicate the index number and it will just be number one.
>
> **[3:06](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980&t=186)** So that is lCustIDCntr.
>
> **[3:12](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980&t=192)** And then the property is the customer ID number.
>
> **[3:16](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980&t=196)** So CustID equals zero.
>
> **[3:21](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980&t=201)** And that's all I'll do for now.
>
> **[3:22](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980&t=202)** I have created a new customer, added it to the customers collection, and assigned it a customer ID of zero.
>
> **[3:31](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980&t=211)** And even though I won't see any output, I will press F5 to run my code.
>
> **[3:36](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980&t=216)** And I didn't get an error.
>
> **[3:37](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980&t=217)** So I'm not 100% sure that everything is correct, but at least Excel VBA didn't find an error.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (2), data (1), next (1)
> **Code Identifiers:** objc (2), lcustidcntr (1)
> **Env Vars:** vba (2), f11 (1)
> **CLI Commands:** find (2)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Define the Stations class and add stations
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=0)** - [Lecturer] In this course of simulations, we are modeling the flow of customers through a sandwich shop.
>
> **[0:06](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=6)** The process has two main elements, customers and stations.
>
> **[0:11](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=11)** In this movie I will define the stations class and then add stations objects using VBA code.
>
> **[0:18](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=18)** Because each station has properties such as the station ID, average processing time and standard deviation of processing time, I will read those values from the sim setup worksheet.
>
> **[0:30](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=30)** The sample file I'm using is chapter 0204.
>
> **[0:33](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=33)** You can find that in the chapter two folder of the exercise files collection.
>
> **[0:36](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=36)** And I have the data that I will be using for my stations in the sim setup worksheet.
>
> **[0:43](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=43)** I'll be doing most of my work in Excel VBA.
>
> **[0:46](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=46)** So I'll press Alt F11 to move to the Visual Basic editor.
>
> **[0:51](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=51)** And here I have my code, and I'm going to click on module one, which is the main module I'm working with, and I will increase the size of the window.
>
> **[1:05](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=65)** All the code that we created earlier can stay the same and I will continue below the existing code, but above the end sub-statement.
>
> **[1:15](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=75)** I will note that I have already defined OBJS as a class of station type and I also have stations as a collection.
>
> **[1:25](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=85)** That's where we will put these stations that we create later.
>
> **[1:29](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=89)** So I'll start by adding a comment, create station objects and initialize values.
>
> **[1:40](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=100)** Then I will activate the sim setup worksheet.
>
> **[1:44](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=104)** So it'll be worksheets.
>
> **[1:47](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=107)** And then I'll refer to it by name rather than by index, sim setup.
>
> **[1:52](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=112)** And that's in parentheses and double quotes.
>
> **[1:56](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=116)** Then period and activate.
>
> **[2:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=120)** And then I will activate cell B4.
>
> **[2:03](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=123)** So that is a range.
>
> **[2:06](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=126)** Range.
>
> **[2:07](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=127)** And then B4, period, activate.
>
> **[2:13](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=133)** And as a reminder, I'll press Alt F11 and B5 is the mean of station number one.
>
> **[2:22](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=142)** So we'll start at B4 and then read down to B5, B6 and B7, using the offset property.
>
> **[2:29](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=149)** So Alt F11 again.
>
> **[2:32](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=152)** And I'll use a for-next loop to read in the values.
>
> **[2:36](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=156)** So I'll do for and then L-S-T-C-N-T-R, and this variable as my counter.
>
> **[2:46](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=166)** We'll go from one to the number of stations, that's L-N-M-B-R-S-C-A-S.
>
> **[2:53](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=173)** And I have that variable here, which I initialized as type long, and I'm reading the value from cell B2 on the sim setup worksheet.
>
> **[3:02](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=182)** So that was the number of stations.
>
> **[3:06](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=186)** So I have that for the for-next loop.
>
> **[3:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=190)** And I'll go down and press tab to move in, and then for a comment I'll add a station and I'll scroll down a bit.
>
> **[3:19](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=199)** So I have... Actually, I'll press enter a number of times so I have a bit more wide space.
>
> **[3:24](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=204)** Okay?
>
> **[3:25](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=205)** So I've added a station and I'll do set OBJS.
>
> **[3:28](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=208)** And again, that's a station object.
>
> **[3:31](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=211)** Equals new C station.
>
> **[3:34](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=214)** So station class.
>
> **[3:36](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=216)** And then we'll add it to the collection.
>
> **[3:39](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=219)** So stations.add OBJS, and enter.
>
> **[3:46](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=226)** Now I can assign the station ID and the mean and standard deviation by reading the values from the sim setup worksheet.
>
> **[3:55](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=235)** So as a comment, assign station ID and read mean and standard deviation from worksheet, and enter and scroll down a bit.
>
> **[4:09](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=249)** So I'll start with stations and then the index will be the number of the station counter.
>
> **[4:17](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=257)** So L-S-T-C-N-T-R.
>
> **[4:20](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=260)** So this will be the value of the counter in the for-next loop, dot STA ID equals, and we'll just give it the list counter number.
>
> **[4:32](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=272)** So L-S-T-C-N-T-R and enter.
>
> **[4:36](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=276)** Now we'll do the mean.
>
> **[4:38](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=278)** So I will copy the first part of the text so I don't have to retype it and paste it in, and that will be STA mean equals activecell.offset, and then we're going to be moving down a number of rows and moving zero columns to the right for this.
>
> **[5:03](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=303)** So the row offset will be LST counter, comma zero, and then type a right parentheses and then I will copy that entire line of code because we're going to be reusing most of it.
>
> **[5:18](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=318)** Enter.
>
> **[5:19](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=319)** Control V.
>
> **[5:20](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=320)** And then the station standard deviation, which is STA SD, will be the list count or number of rows, and then it will be one column to the right.
>
> **[5:35](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=335)** So again, this code we will read in one line of data, starting at the active cell offset by the list counter, which is one from the sim setup worksheet.
>
> **[5:47](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=347)** Now we'll set the next station property and I'll put in a comment set next STA property.
>
> **[5:57](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=357)** If last station, set next station to minus one.
>
> **[6:04](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=364)** So here I will use an if then statement.
>
> **[6:08](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=368)** So if stations, L-S-T-C-N-T-R, dot station ID, is less than the number of stations, so L-N-M-B-R-S-C-A-S, then, and I'll tab in, the stations, next station will be its own number plus one.
>
> **[6:31](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=391)** So that will be stations, L-S-T-C-N-T-R, dot next station.
>
> **[6:41](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=401)** So N-E-X-T-S-T-A equals the current value of the list counter.
>
> **[6:48](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=408)** So L-S-T-C-N-T-R, plus one.
>
> **[6:52](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=412)** So if we're in station one, the next station will be station two.
>
> **[6:58](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=418)** Then we'll use an else statement.
>
> **[7:01](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=421)** So else, stations, and then the station counter.
>
> **[7:08](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=428)** So L-S-T-C-N-T-R, dot next station, equals minus one.
>
> **[7:17](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=437)** So if the station has the same number as the total number of stations, its next station will be minus one.
>
> **[7:25](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=445)** Then we can back out of the code that we've created.
>
> **[7:30](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=450)** So we have if, and then that ends with and if, and we have a for-next loop.
>
> **[7:37](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=457)** So I'll do next.
>
> **[7:40](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=460)** And then as a comment, I'll do L-S-T-C-N-T-R, and I will delete my other lines of code so I don't have quite as much wide space.
>
> **[7:52](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=472)** So what we've done is create a collection of stations and then created a new station for the number of stations defined in our workbook.
>
> **[8:02](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=482)** We read in characteristics, the id, the mean, and the standard deviation, and then use the if then else statement to assign its next station number.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (14), data (2), [[Microsoft Excel|Excel]] (1)
> **Env Vars:** sta (4), f11 (3), objs (3), vba (2), lst (1)
> **Prerequisites:** setup (7)
> **UI Navigation:** scroll down (2), click on (1)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)

#### Add code to calculate and write out times
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=0)** - [Instructor] In the approach to process modeling I'm demonstrating in this course, I use classes to represent business objects such as customers and stations.
>
> **[0:09](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=9)** When you create an instance of a class, you can add that instance to a collection of objects.
>
> **[0:14](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=14)** And in this movie, I will use a For Next loop to move through the objects in the Station's collection to calculate processing of times.
>
> **[0:22](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=22)** I will use other techniques later in this course, but I wanted you to see how For Next works in this situation.
>
> **[0:28](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=28)** My sample file is chapter 02_05, and you can find that in the chapter two folder of the exercise files collection.
>
> **[0:36](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=36)** I don't need to do any work in the sim setup worksheet, so I will press Alt + F11 to move to the visual basic editor.
>
> **[0:45](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=45)** And then I will click the title bar of module one for my code and increase the size of the window.
>
> **[0:54](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=54)** I want to add my code to the bottom of the existing code, just above End Sub, so I will go there.
>
> **[1:02](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=62)** Before I start typing, I will add some line breaks, pressing enter a number of times to give myself a little bit more room.
>
> **[1:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=70)** And my comment says that I'm going to step through the stations using a For Next loop.
>
> **[1:15](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=75)** So let's do that.
>
> **[1:17](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=77)** I'm going to use my station counter variable as my counter.
>
> **[1:21](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=81)** So For, l, which is a long, stCntr = 1 to the number of stations, and that is l and Nbrscas.
>
> **[1:33](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=93)** We used that variable before in the previous movie.
>
> **[1:37](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=97)** So enter twice and tab in.
>
> **[1:39](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=99)** I'll start this demonstration by assigning a station number to the first customer in my collection.
>
> **[1:47](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=107)** So Customers, and then index number (1).station, so that's the station they're currently in, equals the station counter variable.
>
> **[1:59](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=119)** So they will be in one the first time.
>
> **[2:02](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=122)** Now I want to generate a random processing time for that customer at that station.
>
> **[2:09](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=129)** So Generate random processing time, and enter.
>
> **[2:14](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=134)** This will be a random decimal number between zero and one, and that is a single precision floating point number.
>
> **[2:23](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=143)** So the variable we use is sngRand, which we declared earlier, and that equals the output of the Rnd function.
>
> **[2:34](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=154)** Then enter.
>
> **[2:36](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=156)** Now I will calculate the station time using the station number, its mean and its standard deviation.
>
> **[2:45](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=165)** So the station time, which is a long StaTime equals Application.Worksheetfunction.
>
> **[2:56](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=176)** And we'll use the inverse of the normal distribution, so Norm_Inv.
>
> **[3:04](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=184)** And Norm.Inv, which is the proper function name returns a value from a distribution.
>
> **[3:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=190)** You generate a random number between zero and one, so a decimal number like we're doing here.
>
> **[3:15](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=195)** And the output is based on a mean and standard deviation.
>
> **[3:20](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=200)** So the random number will be sngRand, then a comma, and it's based on the second argument, which is the mean of the station, so stations, and then the index we're using is the station counter variable, so StaMean, then a comma.
>
> **[3:42](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=222)** Then I'm reaching the end of my line and I don't want to scroll too far over, so I'll type a space and underscore and a space and then enter.
>
> **[3:51](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=231)** And that allows me to wrap this line of code onto two lines within the module.
>
> **[3:57](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=237)** Then stations, then the station counter variable, which gives the index for the station, then a period and the standard deviation, so StaSD, which is the name of that property.
>
> **[4:13](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=253)** Then a right parentheses, and that line looks good.
>
> **[4:17](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=257)** Now I can write the processing time out to the immediate window.
>
> **[4:23](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=263)** So I'll make a comment for write processing time, and I'll use Debug.Print but I'll add a little bit of extra text so we're not just reading numbers.
>
> **[4:34](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=274)** So Debug.Print, and then we'll start with station followed by a space in double quotes, and then ampersand for concatenation, stations, and then the station counter variable with the station id and followed by a space and time, colon, then a space, double quotes.
>
> **[5:06](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=306)** And then one last thing to add in will be the variable of the time that we calculated before randomly, and that will be lStaTime.
>
> **[5:19](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=319)** Now I want to close the station counter loop, so that will be Next, and then I'll add an inline comment to close the station counter loop, and down.
>
> **[5:37](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=337)** Okay.
>
> **[5:39](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=339)** Close, not Cloe.
>
> **[5:41](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=341)** There we go.
>
> **[5:43](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=343)** So all of my text appears to be correct.
>
> **[5:46](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=346)** I'll press Ctrl + G to open at the immediate window, and I'll drag it up a bit so I can see the values a little bit better.
>
> **[5:55](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=355)** Then I'll click in the body of the subroutine code and press F5 to run.
>
> **[6:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=360)** And there I have the results.
>
> **[6:02](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=362)** So the station time for station one was 20 ticks of the clock, or 20 minutes.
>
> **[6:09](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=369)** The second was 10, and station three was 16.
>
> **[6:13](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=373)** So it appears that my code is successfully generating the values that I need and I can move on to the next step.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (5), business (1), application (1)
> **Code Identifiers:** sngrand (2), stcntr (1), lstatime (1)
> **Definitions:** is a  (3)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** f11 (1)
> **Cross-References:** later in (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** such as (1)

#### Delete unneeded objects
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/delete-unneeded-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/delete-unneeded-objects?u=76281980&t=0)** - [Instructor] After you run a simulation or have written any other code that uses objects, you should delete the objects from memory within your sub-routine.
>
> **[0:08](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/delete-unneeded-objects?u=76281980&t=8)** Excel has good memory management routines that usually free up your system resources after your code stops running, but it's still good practice to remove the objects when you're done with them, and I will show you how to do that in this movie.
>
> **[0:21](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/delete-unneeded-objects?u=76281980&t=21)** My sample file is chapter 0206, and you can find it in the chapter two folder of the Exercise Files collection.
>
> **[0:29](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/delete-unneeded-objects?u=76281980&t=29)** Everything I need to do will be in the Visual Basic Editor, so I'll press Alt F11 to move there, and then I will click the title bar of the module one code module where I will perform my edits.
>
> **[0:43](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/delete-unneeded-objects?u=76281980&t=43)** Releasing memory by setting objects to nothing is usually the last thing that you do.
>
> **[0:48](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/delete-unneeded-objects?u=76281980&t=48)** So I will scroll all the way down to the bottom of the code and click above end sub and actually give myself a little bit of white space.
>
> **[0:58](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/delete-unneeded-objects?u=76281980&t=58)** I'll put a comment in for what I'm doing, so single quote, set collections to nothing to free up memory, then enter.
>
> **[1:13](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/delete-unneeded-objects?u=76281980&t=73)** Now I will use the keyword nothing for my customers and stations collections.
>
> **[1:19](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/delete-unneeded-objects?u=76281980&t=79)** So set customers equal nothing, and then below that set stations equal nothing.
>
> **[1:30](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/delete-unneeded-objects?u=76281980&t=90)** And there we go.
>
> **[1:31](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/delete-unneeded-objects?u=76281980&t=91)** As soon as my code stops running and I get all of the output that I need, the nothing keyword will set the customer's collection to empty, releasing its memory for use in the system, and do the same thing for the station's collection.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (1), [[Microsoft Excel|Excel]] (1), [[Memory Management]] (1)
> **CLI Commands:** find (1)
> **Env Vars:** f11 (1)
> **Exercise Files:** exercise files (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### Run the simulation
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25122475?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25122475?u=76281980&t=0)** - [Instructor] So far in this chapter, you have created a simulation that takes information about a series of stations within a business process, such as a sandwich shop that makes food to order and applied that information to discover how long customers will spend within the system.
>
> **[0:18](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25122475?u=76281980&t=18)** In this movie, we will run the simulation a couple of times to see its results.
>
> **[0:23](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25122475?u=76281980&t=23)** My sample file is chapter 0207, and you can find it in the chapter two folder of the exercise files collection.
>
> **[0:30](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25122475?u=76281980&t=30)** I don't need to do anything in the sim setup worksheet, so I'll press ALT+F11 to move to the Visual Basic editor, and then I will click the title bar of the module one code module and then I'll just expand a little bit so the contents are easier to read, although we won't do any editing.
>
> **[0:50](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25122475?u=76281980&t=50)** The output will be written to the immediate window, which is below, and if you don't see it, you can press Ctrl+G to display it.
>
> **[0:58](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25122475?u=76281980&t=58)** So I can hide it and then press Ctrl+G to display it again.
>
> **[1:04](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25122475?u=76281980&t=64)** To run my code, I will click inside of the main test sub-routine, so the insertion point is clicking within it, and then press F5 to run it and we'll do it a few times.
>
> **[1:15](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25122475?u=76281980&t=75)** So I'll do F5 and we get times of 20, 10, and 16, then F5 again, 16, 8, and 19 and F5 again, so we have 9, 12, and 19 and one more time and it scrolled down, so we have 20, 5, and 14.
>
> **[1:33](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25122475?u=76281980&t=93)** So we're generating random values in sets of three as we expected, and we have a good base to go forward with our simulation of the process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (3), business (1)
> **Env Vars:** alt (1), f11 (1)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** such as (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Adapt the code for multiple runs
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=0)** - [Instructor] In the previous movie, we ran a simulation that calculated the time a customer would spend at each station of a sandwich shop.
>
> **[0:08](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=8)** The code we created only allowed for a single run, and even though we ran it multiple times by ourselves, it's much easier to do that in code.
>
> **[0:16](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=16)** So in this movie, I will show you how to add a loop to your simulation code that lets you run multiple simulations so you get more data to analyze.
>
> **[0:25](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=25)** My sample file is chapter 0208, and you can find it in the chapter two folder of the exercise files collection.
>
> **[0:33](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=33)** I want to make the number of runs easily visible for anyone who uses the workbook, so I'm going to put the number of runs in the Sim Setup worksheet.
>
> **[0:43](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=43)** So in cell D2, I will type a label for the number of runs.
>
> **[0:47](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=47)** So I'll do a hashtag for number of runs, then I'll click A2.
>
> **[0:53](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=53)** Then on the home tab of the ribbon, click the format painter button and then click D2.
>
> **[1:01](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=61)** Then in cell E2 I will type in the number of runs and I'll just do two, that will make sure that the code operates as required.
>
> **[1:12](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=72)** That's all we need to do here.
>
> **[1:13](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=73)** So I'll press Alt F11 to move to the visual basic editor and then display the module one code module by clicking its title bar.
>
> **[1:25](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=85)** And then I will increase the size of that code window.
>
> **[1:31](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=91)** Now I can define a variable for my loop counter and also the number of runs.
>
> **[1:38](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=98)** So I'll do that here under the declare loop counter and other variables comment.
>
> **[1:44](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=104)** So give myself a new line and I will dim L run counter, as long, and then I will do the same for the number of runs.
>
> **[1:58](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=118)** So dim L NMBR runs as long and it doesn't matter how you spell it, as long as it's consistent.
>
> **[2:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=130)** Now I need to put in the Forex loop that will run through the simulation the number of times indicated on the Sim Setup worksheet.
>
> **[2:21](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=141)** So I will scroll down and we'll start just above where we step through the number of stations using a Fornex loop.
>
> **[2:31](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=151)** So I will give myself some white space between the next and the comment.
>
> **[2:37](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=157)** So first I will read in the number of runs.
>
> **[2:41](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=161)** So I'll add a comment define the number of runs, and that will come from the Sim Setup worksheet.
>
> **[2:50](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=170)** So I will activate that worksheet, so worksheets rather than with an index number.
>
> **[2:56](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=176)** I'll use its name in parentheses and double quotes, period activate for that method.
>
> **[3:02](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=182)** And then LNMBR runs equals the value from E2 of the active worksheet.
>
> **[3:12](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=192)** So range E2 again double quotes and parentheses period value.
>
> **[3:20](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=200)** Directly below that I will start the for next loop by typing four.
>
> **[3:25](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=205)** So two runs or rather press enter twice.
>
> **[3:30](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=210)** And then as a comment start the outer loop for customers up to L number of runs, enter, then the four statement.
>
> **[3:45](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=225)** So four L run counter equals 1 to L number runs NMBR RUNS.
>
> **[4:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=240)** There we go.
>
> **[4:01](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=241)** Now I can close out the next loop.
>
> **[4:03](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=243)** So I will scroll down and after this next, which is actually for the station counter, I'll type next.
>
> **[4:17](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=257)** And then as an inline comment I'll say LNMBR runs.
>
> **[4:23](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=263)** So there we go.
>
> **[4:25](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=265)** I have added the code that will let us read the number of runs from the Sim Setup worksheet and then output it here within our module one code module.
>
> **[4:37](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=277)** To make sure that works I will run it, and as a reminder, the output will go to the immediate window because we're using debug dot print.
>
> **[4:45](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=285)** I already have the immediate window open, but if you don't see it, for example here, you can press Ctrl G to open it.
>
> **[4:54](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=294)** Now I will click back up in my subroutine and press F5 to run, and I get two runs through the entire process.
>
> **[5:03](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=303)** And if I press it again, I get two more, and again two more.
>
> **[5:08](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=308)** So it looks like my code is working properly up to this point.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (5), [[Simulation]] (3), data (1)
> **Env Vars:** nmbr (2), lnmbr (2), f11 (1), runs (1)
> **CLI Commands:** make (3), find (1)
> **Prerequisites:** setup (4)
> **UI Navigation:** scroll down (2), go to (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 3. Adding a Ticker to Track Time

[↑ Back to Table of Contents](#table-of-contents)

#### Define process flow and programming goals
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-process-flow-and-programming-goals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-process-flow-and-programming-goals?u=76281980&t=0)** - [Instructor] In the previous chapter, you created a simulation that generated random ties for customers moving through a business process.
>
> **[0:08](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-process-flow-and-programming-goals?u=76281980&t=8)** In this chapter, we will make the simulation more realistic by adding a timer or ticker that updates the status of every object within the system with every tick of the clock.
>
> **[0:18](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-process-flow-and-programming-goals?u=76281980&t=18)** We'll start by creating an outline, using "for... next" and "if... then" statements.
>
> **[0:22](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-process-flow-and-programming-goals?u=76281980&t=22)** Then in a later movie, we will add functionality to those statements, and then write out the results of the simulation using Debug.Print.
>
> **[0:31](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-process-flow-and-programming-goals?u=76281980&t=31)** So sending the output to the immediate window.
>
> **[0:34](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-process-flow-and-programming-goals?u=76281980&t=34)** And then finally we will run the simulation.
>
> **[0:37](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-process-flow-and-programming-goals?u=76281980&t=37)** The procedure we describe here is substantially more complex than just estimating times, but it's a helpful step toward modeling your system more accurately.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (4), business (1), next (1)
> **CLI Commands:** make (1)
> **Cross-References:** previous chapter (1)
> **Speakers:** - [instructor] (1)

#### Create an outline of IF and For Next statements
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=0)** - [Instructor] In this module, you will add a timer or a ticker to your simulation, and update each object status with each tick of the clock.
>
> **[0:08](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=8)** For example, suppose a customer will stay at station one until tick 20.
>
> **[0:13](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=13)** With each tick, you must update the clock and check the customer status against that value.
>
> **[0:19](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=19)** If the time is less than 20 ticks, the customer stays at the station.
>
> **[0:23](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=23)** On the 20th tick, the customer must be moved to the next station and the statuses of both the customer and the stations updated appropriately.
>
> **[0:31](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=31)** I'll start the process using the sample file named Chapter 0302, which you can find in the chapter three folder of the Exercise Files collection.
>
> **[0:41](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=41)** I won't do anything with the information on the sim setup worksheet.
>
> **[0:45](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=45)** So I'll press Alt F11 to move to the visual basic editor.
>
> **[0:50](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=50)** And here, I have my ticker routine code module, and I'll close the immediate window so I have a bit more room to work.
>
> **[0:58](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=58)** So I'll move that up and resize.
>
> **[1:02](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=62)** I have code to initialize all of my variables and to define customers and stations.
>
> **[1:08](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=68)** So I will scroll down to the bottom and start working below the create the ticker and internal constructs starting here comment.
>
> **[1:17](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=77)** As a demonstration, I will set the ticker to a For-loop going from one to 85.
>
> **[1:24](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=84)** So I will have For.
>
> **[1:27](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=87)** And then Lticker, which is a variable that I declared above, equals 1 to 85.
>
> **[1:36](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=96)** So there will be a total of 85 counts.
>
> **[1:40](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=100)** Then within that loop, I will have a For Each loop that works with each object in the customer's collection.
>
> **[1:49](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=109)** And if we look up here, you see that I have two customers created.
>
> **[1:53](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=113)** So this will be For Each OBJC and customers.
>
> **[1:59](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=119)** And to make this easier to follow, I will add my Next statements for those two For statements.
>
> **[2:08](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=128)** So I'll have Next, OBJC, and then go down, and Next, Lticker.
>
> **[2:18](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=138)** And again, I am adding the name of the variable as a comment even though it's not necessary, but it helps me keep track of which For-loop I'm in.
>
> **[2:31](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=151)** Now within the internal For Next loop, where we're working with each of the individual customers, we will check where the customer is, and that will be If objc.station is not equal to -1.
>
> **[2:51](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=171)** And remember that -1 indicates that a customer has made it through the process successfully.
>
> **[2:58](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=178)** So if they're still in the process, then we do a second If to check if the customer IsIdle.
>
> **[3:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=190)** So objc.IsIdle, so that's the IsIdle property equals one.
>
> **[3:20](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=200)** Then, and this is the last of the If statements for the moment.
>
> **[3:25](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=205)** So If stations, specifically the station that the customer wants to move to, so objc.next station, .station IsIdle equal zero.
>
> **[3:44](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=224)** So in other words, if the station is not idle, then we add one to the customer idle time if the next station is busy.
>
> **[3:54](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=234)** And I will add a comment for that here.
>
> **[3:57](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=237)** So add one to customer idle time if the next station is busy.
>
> **[4:06](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=246)** And because I'm just creating an outline here, I won't actually put in the code to do that.
>
> **[4:13](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=253)** We'll do that in the next movie.
>
> **[4:17](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=257)** Then Else, and three lines of comments.
>
> **[4:22](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=262)** So move customer to next station.
>
> **[4:26](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=266)** Set these stations idle property to zero.
>
> **[4:34](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=274)** Then another comment, calculate the customer's processing time, set customer idle to zero.
>
> **[4:46](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=286)** And finally, another comment set start time property to current ticker value.
>
> **[4:56](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=296)** And again, these are just notes for what I want to do, and I will enter the code later.
>
> **[5:03](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=303)** So that is all I do here.
>
> **[5:05](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=305)** So I will end the If statement here, then enter and go back.
>
> **[5:15](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=315)** Now we need to add an ElseIf statement to what to do if the customer is not idle.
>
> **[5:25](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=325)** So ElseIf objc.endtime equals Lticker, then, and here I will add more comments.
>
> **[5:37](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=337)** Again, we'll put in the actual working code in a moment.
>
> **[5:40](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=340)** So comment set station to idle, set customer to idle and set the customer's current station to its next station property value.
>
> **[6:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=360)** So if it's currently in station one, its next station would be station two.
>
> **[6:04](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=364)** So the current station would be updated.
>
> **[6:08](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=368)** Now I can end this If statement.
>
> **[6:13](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=373)** And finally attached to the If statement at top we can have an Else statement.
>
> **[6:19](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=379)** So that's Else stations and then the number of stations, so L and then BRSTAS .stationIsIdle equals one.
>
> **[6:34](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=394)** And I'll just do an inline comment that notes that sets last station to idle when a customer leaves.
>
> **[6:46](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=406)** Okay, so that is a lot.
>
> **[6:48](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=408)** I have my Else statement there and I'll do End If, and again that attaches to the If statement up here.
>
> **[6:58](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=418)** Actually I will backspace here so that it is at the proper level.
>
> **[7:05](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=425)** And then that is the end of the For Next loop.
>
> **[7:08](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=428)** So I'll do Next and then name the variable, even though I don't have to, I'll ticker.
>
> **[7:14](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=434)** So this movie has been somewhat abstract, and what I've done is add code that provides an outline for what I want to happen for every tick of the clock.
>
> **[7:27](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=447)** In the next movie, we will add the code that actually runs and provide a bit more detail that will hopefully make this easier to understand.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (15), [[Simulation]] (1)
> **Env Vars:** objc (2), f11 (1), brstas (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (2), in other words (1)
> **Cross-References:** in the next (2)
> **Code Identifiers:** stationisidle (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** exercise files (1)

#### Add instructions within the framework
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=0)** - [Instructor] In the previous movie, we added the framework of if and for next statements that we will use to manage the movement of customers through a series of stations in a business process.
>
> **[0:11](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=11)** In this movie, we will fill in the detailed instructions for the if statements, so the process will move customers to the next available station at the appropriate tick of the clock.
>
> **[0:22](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=22)** My sample file is Chapter 0303.
>
> **[0:24](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=24)** And that's an Excel workbook that you can find in the chapter three folder of the exercise files collection.
>
> **[0:30](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=30)** We won't do anything with the data on the SIM setup worksheet, so I will press Alt F11.
>
> **[0:38](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=38)** To move to the visual basic editor.
>
> **[0:41](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=41)** And I will.
>
> **[0:44](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=44)** Increase the size.
>
> **[0:46](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=46)** Of the code window.
>
> **[0:48](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=48)** I'm going to scroll down.
>
> **[0:51](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=51)** Almost all the way to the bottom.
>
> **[0:54](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=54)** And we will start from where I have the L ticker variable.
>
> **[0:59](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=59)** Which is the clock that we used to track actions within our simulated process.
>
> **[1:04](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=64)** So I have my comments that tell me where to add items, so the first action will be to add one to customer idle time if the next station is busy.
>
> **[1:15](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=75)** So that will be OBJC, and again that is a customer object.
>
> **[1:20](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=80)** Dot IdleTime.
>
> **[1:22](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=82)** Equals.
>
> **[1:23](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=83)** Itself plus one.
>
> **[1:24](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=84)** So it would be JC.IdleTime.
>
> **[1:29](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=89)** Plus one.
>
> **[1:31](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=91)** And for the purposes of this demonstration, I will send the output of this instruction to the immediate window using debug.print.
>
> **[1:40](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=100)** So enter, then debug.print.
>
> **[1:45](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=105)** And I'll provide a little extra text.
>
> **[1:47](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=107)** So in double quotes, "customer".
>
> **[1:51](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=111)** Then a space, then double quotes, "ampersand," and then the customer ID.
>
> **[1:56](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=116)** So that'll be JC.CustomerID.
>
> **[2:02](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=122)** Ampersand.
>
> **[2:04](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=124)** Then double quotes and a space, "has been idle for."
>
> **[2:11](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=131)** Then a space and double quote.
>
> **[2:12](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=132)** "Ampersand objc.IdleTime."
>
> **[2:18](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=138)** And it just fits, but I will resize my window.
>
> **[2:21](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=141)** There we go.
>
> **[2:23](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=143)** Now we'll go down under the Ls.
>
> **[2:25](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=145)** Where we have the instructions for what to add if the next station is not idle.
>
> **[2:31](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=151)** So I'll type in objc.Station.
>
> **[2:35](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=155)** And we will set that to what it was previously as NextStation.
>
> **[2:40](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=160)** So objc.NextStation.
>
> **[2:42](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=162)** So we are moving it from its current station to the next one.
>
> **[2:46](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=166)** Then we need to set its current station.
>
> **[2:50](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=170)** Idle variable to zero, so that'll be stations.
>
> **[2:54](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=174)** Objc.Station.
>
> **[2:58](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=178)** And closed parentheses dot StaIsIdle equals zero.
>
> **[3:03](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=183)** So it is no longer idle, indicating it has a customer in it.
>
> **[3:07](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=187)** And then we will update the next station value for the customer to the value of the next station.
>
> **[3:14](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=194)** for the station that just entered.
>
> **[3:16](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=196)** So if the customer just went to station two.
>
> **[3:20](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=200)** Then we update its station property to two.
>
> **[3:25](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=205)** And then station two's next station property is three.
>
> **[3:29](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=209)** So that's what gets read in here.
>
> **[3:32](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=212)** So that will be objc.NextStation.
>
> **[3:35](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=215)** Equals.
>
> **[3:37](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=217)** Stations.
>
> **[3:40](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=220)** Objc.Station.
>
> **[3:43](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=223)** Dot N-E-X-T-S-T-A.
>
> **[3:46](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=226)** Now we need to calculate the amount of time that the customer will spend in the station it just moved to.
>
> **[3:54](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=234)** So that will be a random number.
>
> **[3:57](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=237)** So I have sngRand equals Rnd.
>
> **[4:03](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=243)** Then open and close parentheses.
>
> **[4:06](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=246)** And we will use that based on the station's mean, and also its standard deviation of service time.
>
> **[4:14](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=254)** So that will be objc.EndTime equals LTicker which is the current value on the clock.
>
> **[4:23](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=263)** Plus, and we'll use norm.inverse like we did before.
>
> **[4:27](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=267)** Application.WorksheetFunction.Norm_inv.
>
> **[4:36](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=276)** Then left parentheses, and the first argument will be sndRand, then a comma.
>
> **[4:42](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=282)** Then a space and an underscore followed by another space so we can wrap around to the next line.
>
> **[4:48](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=288)** Then we'll have the station's mean processing time, so stations.
>
> **[4:55](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=295)** And we're referring to the station that the customer is currently in, so we use the customer station property.
>
> **[5:02](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=302)** Then right parentheses.
>
> **[5:04](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=304)** Dot StaMean, so that's the average processing time.
>
> **[5:08](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=308)** Then a comma, and the final argument is the standard deviation.
>
> **[5:13](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=313)** So I will copy this.
>
> **[5:17](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=317)** And then the name of the property is S-T-A-S-D.
>
> **[5:24](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=324)** And a right parentheses.
>
> **[5:26](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=326)** I think that's right.
>
> **[5:27](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=327)** It's a lot of typing, so we'll see how it goes.
>
> **[5:29](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=329)** And then I also want to set the customer's idle property to zero because it is actually in a station.
>
> **[5:38](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=338)** So objc.IsIdle.
>
> **[5:43](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=343)** Equals zero.
>
> **[5:44](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=344)** And finally, we will set the customer's start time in the station to the current value on the clock.
>
> **[5:51](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=351)** So enter, and objc.StartTime equals the value of the ticker variable.
>
> **[5:58](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=358)** So that's all we have for this segment, and then I'll move down, and we will do the last one.
>
> **[6:05](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=365)** And this is what happens if the customer's end time, that is the time it's supposed to leave a station, is the actual time on the clock.
>
> **[6:14](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=374)** So this is how we move it along to the next station or out of the process.
>
> **[6:19](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=379)** So go below the comment that I have here.
>
> **[6:21](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=381)** And I'll say stations.
>
> **[6:24](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=384)** And we're referring to the customer's Customer ID.
>
> **[6:29](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=389)** Dot station is idle.
>
> **[6:32](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=392)** Equals one.
>
> **[6:34](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=394)** We'll then set the customer's is idle property to one because it has left the previous station.
>
> **[6:39](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=399)** So objc.IsIdle.
>
> **[6:44](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=404)** Equals one.
>
> **[6:46](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=406)** And then we'll set its current station to the next station.
>
> **[6:49](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=409)** And this is the same type of update that we did before.
>
> **[6:52](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=412)** So objc.Station.
>
> **[6:57](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=417)** Equals objc.NextStation.
>
> **[7:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=420)** And we can handle the other updates later in other parts of the code.
>
> **[7:04](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=424)** And I think you can see why I broke the outline and the detail code into two separate movies.
>
> **[7:11](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=431)** There's a lot going on.
>
> **[7:13](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=433)** And what I would encourage you to do is to take the time and run through this code one line at a time.
>
> **[7:21](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=441)** I wouldn't necessarily go through all 85 ticks of the clock that we have set for the ticker variable.
>
> **[7:29](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=449)** Instead, just do one or two.
>
> **[7:31](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=451)** And see how everything flows throughout the code.
>
> **[7:35](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=455)** You'll see where it goes, you'll see what gets updated, and if you want you can add some debug.print statements of your own to see how the variables change over time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (11), business (1), [[Microsoft Excel|Excel]] (1), data (1), application (1)
> **Env Vars:** sim (1), f11 (1), objc (1)
> **CLI Commands:** find (1), ls (1)
> **Code Identifiers:** sngrand (1), sndrand (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)

#### Add code to write out simulation results
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results?u=76281980&t=0)** - [Instructor] Adding a ticker or a clock to a simulation lets you track the state of each customer and station precisely as the simulation moves along.
>
> **[0:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results?u=76281980&t=10)** We have almost created a version of the simulation that works with the ticker, but we still need to add a line of code to write out the state of the simulation at each step.
>
> **[0:19](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results?u=76281980&t=19)** As before, I'll use Debug.Print to write those results to the immediate window.
>
> **[0:26](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results?u=76281980&t=26)** My sample file is Chapter03_04, and you can find it in the chapter three folder of the exercise files collection.
>
> **[0:34](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results?u=76281980&t=34)** I don't need to work with anything on the sim setup worksheet, so I'll press Alt + F11, and that takes me to the Visual Basic Editor, and I've already opened the ticker routine code module.
>
> **[0:48](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results?u=76281980&t=48)** I need to add my code toward the bottom of what exists here, so I will scroll down and I have a comment that tells me where I need to add the code.
>
> **[1:01](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results?u=76281980&t=61)** And there will just be a single statement, and that will be Debug.Print.
>
> **[1:07](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results?u=76281980&t=67)** And then I'm going to add in some text.
>
> **[1:11](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results?u=76281980&t=71)** So in double quotes, "I'm a Customer."
>
> **[1:15](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results?u=76281980&t=75)** I'll use a capital C, Customer, then a space, then double quotes and an ampersand so I can concatenate text and values, the customer objects customer id, then an ampersand, then double quotes and a space, " and I'm in station" then a space and double quotes.
>
> **[1:41](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results?u=76281980&t=101)** And I'll do a space and underscore, and then another space so that I can wrap to a second line.
>
> **[1:48](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results?u=76281980&t=108)** And so I am concatenating the customer station number, so that'll be objC.Station.
>
> **[1:58](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results?u=76281980&t=118)** Wrong one. Station &, double quotes and a space, " at time", then a space double quote, and then a final & lTicker, so the value of the ticker variable.
>
> **[2:14](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results?u=76281980&t=134)** And I won't worry about putting a period at the end.
>
> **[2:18](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results?u=76281980&t=138)** So now when we run through this simulation, we should see a couple of customers.
>
> **[2:25](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results?u=76281980&t=145)** And at each step, after they have gone through one tick of the clock, we should get their status.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (5)
> **Code Identifiers:** objc (1), lticker (1)
> **CLI Commands:** find (1)
> **Env Vars:** f11 (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Run the simulation
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation?u=76281980&t=0)** - [Instructor] In this chapter, you have added code to your simulation module to manage a business process by creating a timer.
>
> **[0:07](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation?u=76281980&t=7)** At each click of the timer or tick of the clock, your VBA code updates the status of each customer and station, moving customers through stations at the appropriate times.
>
> **[0:18](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation?u=76281980&t=18)** In this movie, you will run the simulation and take a look at the results that have been sent to the immediate window.
>
> **[0:25](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation?u=76281980&t=25)** The sample file is Chapter 0305, and you can find that in the Chapter Three folder of the Exercise Files collection.
>
> **[0:32](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation?u=76281980&t=32)** We don't need to work with any of the data on the Sim Setup worksheet directly.
>
> **[0:37](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation?u=76281980&t=37)** So I'll press Alt + F11 to move to the Visual Basic Editor.
>
> **[0:41](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation?u=76281980&t=41)** And here is my code module.
>
> **[0:46](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation?u=76281980&t=46)** I'll click in the body of the subroutine.
>
> **[0:51](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation?u=76281980&t=51)** And I don't see the immediate window displayed, so I'll press Ctrl + G to display it.
>
> **[0:57](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation?u=76281980&t=57)** And there it is at the bottom.
>
> **[0:59](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation?u=76281980&t=59)** So, now, I can click back in the body of the subroutine and press F5 to run my code and hopefully I'll get updates on each of the customer statuses as they move along.
>
> **[1:12](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation?u=76281980&t=72)** So, I'll press F5.
>
> **[1:14](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation?u=76281980&t=74)** And there we go.
>
> **[1:15](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation?u=76281980&t=75)** So I will drag the immediate window up so we can see all the results.
>
> **[1:21](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation?u=76281980&t=81)** So I have created two customers and they both started at Time One.
>
> **[1:26](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation?u=76281980&t=86)** So I see that I am Customer One and I'm in Station One at Time One.
>
> **[1:31](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation?u=76281980&t=91)** And Customer Two is waiting 'cause it's also waiting for Station One, and it has been idle and remains idle until 20.
>
> **[1:41](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation?u=76281980&t=101)** Now I see that I have Customer Two and I'm in Station One at Time 21.
>
> **[1:46](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation?u=76281980&t=106)** And then, Customer One has updated its status so that it is in Station Two, starting at Time 22.
>
> **[1:53](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation?u=76281980&t=113)** So there is a transition.
>
> **[1:56](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation?u=76281980&t=116)** Then, Customer One moves to Station Three at Time 34.
>
> **[2:02](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation?u=76281980&t=122)** And then, Customer Two moves to Station Two at Time 40, and Customer Two then moves to Station Three at Time 49.
>
> **[2:11](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation?u=76281980&t=131)** I did not add any code to indicate when the customers left the process, but that is something that we can do in future iterations of our code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (2), business (1), data (1)
> **Env Vars:** vba (1), f11 (1)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### 4. Adding Customers during the Simulation

[↑ Back to Table of Contents](#table-of-contents)

#### Describe process flow and programming goals
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/describe-process-flow-and-programming-goals-25122472?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/describe-process-flow-and-programming-goals-25122472?u=76281980&t=0)** - [Instructor] In chapter three, we added a timer to our simulation so we could track the movements of two customers through three stations.
>
> **[0:07](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/describe-process-flow-and-programming-goals-25122472?u=76281980&t=7)** In this chapter, we will extend that model to include multiple customers added throughout the simulation, and we will calculate their arrival times using the Poisson distribution.
>
> **[0:18](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/describe-process-flow-and-programming-goals-25122472?u=76281980&t=18)** We will move the customer generation code inside of the timer, and we will write the results of the simulation to a worksheet.
>
> **[0:27](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/describe-process-flow-and-programming-goals-25122472?u=76281980&t=27)** Then we will run the simulation, and if necessary, fix a mistake that can lead to customers getting stuck inside of the simulation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (5)
> **Speakers:** - [instructor] (1)

#### Use the Poisson distribution to calculate arrival times
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=0)** - [Instructor] When you model the amount of time between events such as customers entering a store or cars arriving at a toll booth, you use the Poisson distribution from statistics to calculate the inter-arrival times.
>
> **[0:14](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=14)** There's no easy way to calculate Poisson distribution results using a single Excel function.
>
> **[0:19](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=19)** But in this movie, I'll show you a straightforward way to get the values you need using a couple of worksheet formulas that work together.
>
> **[0:26](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=26)** My sample file is Chapter04_02, and that's an Excel workbook you can find in the chapter four folder of the exercise files collection.
>
> **[0:36](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=36)** I'm on the sim setup worksheet of this workbook and I have new information over on the right under the Poisson Data heading.
>
> **[0:46](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=46)** The Poisson distribution only has one parameter, and that is the average or the mean.
>
> **[0:52](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=52)** That's also referred to as lambda.
>
> **[0:55](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=55)** So, in this case, I have assumed that we have an average of 20 ticks of the clock between customer arrivals.
>
> **[1:02](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=62)** Now, I need to create a lookup table that will allow me to generate values.
>
> **[1:08](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=68)** So, I'll click in cell M2 and here I'll create my first formula.
>
> **[1:14](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=74)** And I have values going from one, so one tick of the clock going all the way up to 53.
>
> **[1:21](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=81)** And when you have a mean of 20, that gives you the range.
>
> **[1:26](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=86)** Also, note that I do not have a value of zero, and that's because I don't want two customers arriving at the same time.
>
> **[1:33](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=93)** So, in cell M2, I'll type equal and I will create my Poisson distribution.
>
> **[1:40](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=100)** So, I have P-O-I-S-S-O-N.D-I-S-T, and yes, that is a French word, la Poisson for fish, but it was a gentleman's name.
>
> **[1:50](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=110)** So, we have POISSON.DIST and the value that we're going to look up is in L2, then a comma, and then the average or the mean is in cell J2, and I don't want that changing as we copy the formula down.
>
> **[2:06](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=126)** So, I press F4 to make an absolute reference, then a comma.
>
> **[2:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=130)** And I do want it to be a cumulative distribution function, so I want to know the probability of getting one or below, not just one exactly.
>
> **[2:20](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=140)** So, I'll do, true, (keyboard clicking) right parentheses and enter, and I get a very small number.
>
> **[2:25](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=145)** But I can copy it down for each of the values in column L.
>
> **[2:29](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=149)** So, I've clicked cell M2, and I'll double click the fill handle and I get my other values filled in there.
>
> **[2:37](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=157)** And as I scroll down, you see that at 53 we get a value of one.
>
> **[2:43](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=163)** So, that means that our random lookup that we put in, in a moment, will give us a value and we don't have to worry about getting an error when we generate those numbers.
>
> **[2:55](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=175)** Now, in cell K2 I will create a lookup formula that will use the table we just created to generate random arrival times.
>
> **[3:03](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=183)** So, I'll go back up and clicking K2, type equal, and we'll use the XLOOKUP function.
>
> **[3:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=190)** The lookup value will be a random decimal number between zero and one, so that is the rand function, then a comma.
>
> **[3:17](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=197)** The lookup array will be M2 to M54.
>
> **[3:23](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=203)** Those are the values that we generated using the Poisson distribution, then a comma.
>
> **[3:28](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=208)** The value that we return will be from column L, so that would be L2 to L54, then a comma.
>
> **[3:38](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=218)** We don't need to worry if a value is not found because we have all of our possibilities from zero to one covered.
>
> **[3:45](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=225)** So, I'll type of comma.
>
> **[3:46](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=226)** And the reason that we know that we will incorporate all values is that we'll go for an exact match or the next larger item.
>
> **[3:55](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=235)** So, if we get a number that is below the very small number that refers to the value of one, then we'll get one.
>
> **[4:02](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=242)** And if we get anything between our second largest value and one at the end, then we will get 53 minutes or 53 ticks of the clock.
>
> **[4:12](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=252)** So, I'll type a one and then a right parentheses and enter.
>
> **[4:16](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=256)** And we get a value of 16, which means that the random number generated must have been greater than this number and less than this number.
>
> **[4:25](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=265)** So, I'll press F9 a couple of times.
>
> **[4:28](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=268)** So, we get 25.
>
> **[4:30](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=270)** That number is between 0.84 and about 0.88, and F9 again for 18, close to the average.
>
> **[4:37](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=277)** And there we go.
>
> **[4:39](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=279)** With these random number generations and formulas in place, we can now generate inter-arrival times for the customers coming into our store.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (2), [[Statistics]] (1), data (1), [[Microsoft Word|Word]] (1), [[Probability]] (1)
> **Env Vars:** poisson (1), dist (1), xlookup (1), m54 (1), l54 (1)
> **Definitions:** means that (2), is a  (1), refers to (1)
> **CLI Commands:** find (1), make (1)
> **Versions:** 0.84 (1), 0.88 (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** such as (1)

#### Add customers to the simulation
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=0)** - [Instructor] Now that we have the structure in place to calculate each customer's arrival time, with the first starting at time one, we can add the code to create new customers when the ticker, which is the simulations internal clock, reaches that arrival time.
>
> **[0:15](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=15)** In this movie, I will add the customer generation code inside of the ticker loop, and calculate the arrival time for the next customer as well.
>
> **[0:24](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=24)** My sample file is chapter 0403, and that is a macro enabled workbook that you can find in the chapter four folder of the exercise files collection.
>
> **[0:35](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=35)** On the SIM setup worksheet, I have the Poisson Data lookup that I created earlier, and we are going to use that inside of our Excel VBA code to generate random customer arrival times.
>
> **[0:50](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=50)** You'll probably see a different number than 20, because, it's a random number.
>
> **[0:56](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=56)** And, I'll just press F nine a few times to recalculate, so we get 11, which is pretty small, 18, closer to average, back to 11, and we could keep going.
>
> **[1:06](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=66)** It appears that everything works as it should, so let's switch over to the Visual Basic editor and add code to generate our customers.
>
> **[1:16](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=76)** I'll press alt F 11 to move to the Visual Basic editor, and I am working in the main code module.
>
> **[1:24](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=84)** All of these statements at the top are initializations, so we're declaring variables, and also, creating our customer collections and station collection.
>
> **[1:35](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=95)** So I will drag down, after all of that and here we get some new code.
>
> **[1:41](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=101)** So first is I have a note that says that the total ticks for each run will be 2,880.
>
> **[1:47](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=107)** So that means that each tick represents 10 seconds in an eight hour day.
>
> **[1:54](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=114)** So if a customer had an inter arrival time of six, that is six six of the clock, then they would appear 60 seconds or one minute after the previous customer.
>
> **[2:07](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=127)** I initialize the create next at variable to one, so the first customer arrives at clock tick number one, and the customer counter is one as well.
>
> **[2:18](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=138)** And the next step is to activate the SIM setup worksheet to make sure that we can look up the values that we need later, so now we can start the simulation.
>
> **[2:29](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=149)** So I have created a new outside loop for L ticker to go from one to L total ticks.
>
> **[2:37](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=157)** And the first thing we do is check if a customer is due to be created on this tick, if not, this portion of the code does nothing.
>
> **[2:46](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=166)** So this is an if then statement.
>
> **[2:48](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=168)** So if L ticker equals L, create next at then, and and I will go down and end the end if, so end if.
>
> **[3:06](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=186)** And tab in to give myself some white space.
>
> **[3:08](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=188)** Then we will create a new customer using the set keyword.
>
> **[3:14](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=194)** So set OBJ customer equals new C customer, so a new object of the customer class.
>
> **[3:26](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=206)** And we will add that customer to the customer's collection, so that'll be customers dot add, the variable that we just created, so OBJ customer.
>
> **[3:40](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=220)** And I have a capital O there, ah, it got corrected down to a lowercase O, that's good.
>
> **[3:48](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=228)** And now I can initialize the customer's properties.
>
> **[3:53](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=233)** So I'll do customers and we will use the customer ID counter variable, which is of type long.
>
> **[4:01](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=241)** So that's L-C-U-S-T ID counter.
>
> **[4:06](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=246)** And this is the variable that we have here.
>
> **[4:09](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=249)** So customers with the ID counter dot customer ID, so C-U-S-T ID, and we'll set that to the variable.
>
> **[4:21](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=261)** So we have L-C-U-S-T, ID, C-N-T-R.
>
> **[4:27](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=267)** For the next properties, I will copy everything up to the period, then go down below and paste in what I had.
>
> **[4:40](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=280)** The start time will equal one and enter, paste again.
>
> **[4:47](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=287)** The next station equals one, paste again.
>
> **[4:53](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=293)** Then whether the customer is idle or not will be set to true or one, so is idle equals one, and then their total idle time, so idle time equals zero.
>
> **[5:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=310)** And then finally, we will record when the customer entered the simulation, that is, entered the process with the entered property.
>
> **[5:20](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=320)** So entered equals, and this will be the value of the ticker, so L ticker.
>
> **[5:28](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=328)** Now we need to generate a new random value in cell K two.
>
> **[5:32](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=332)** And I'll flip back to the SIM setup worksheet by pressing alt F 11.
>
> **[5:37](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=337)** And in K two we are generating random inter arrival times.
>
> **[5:42](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=342)** So again, F nine will generate that.
>
> **[5:46](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=346)** So F nine is the keyboard shortcut to recalculate a worksheet, but we need to use it in VBA, and there's a command for that.
>
> **[5:55](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=355)** So alt F 11, and that is active sheet dot calculate, then enter.
>
> **[6:04](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=364)** So now we can set the variable, recording when we will create our next customer.
>
> **[6:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=370)** And again, that's checked here in the for next loop, to see whether a customer should be created on that particular tick of the clock.
>
> **[6:19](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=379)** So L, create next at, equals the current value of that variable, so L create next at, plus, and we'll just read in the value from sell K two on the active worksheet.
>
> **[6:38](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=398)** So active sheet range, (keyboard clinking) then in parenthesis and double quotes, sell K two dot value.
>
> **[6:50](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=410)** And the last thing to do is to increment the customer ID counter.
>
> **[6:55](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=415)** So L customer ID counter equals itself, and I'll just copy it, plus one.
>
> **[7:05](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=425)** And there we go, we have now generated a random time for a customer to enter the simulation, and we have also incremented the customer ID counter.
>
> **[7:15](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=435)** So when one customer comes in, the identification number will go up by one for the next customer to enter the process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (11), [[Simulation]] (3), data (1), [[Microsoft Excel|Excel]] (1)
> **Env Vars:** sim (3), vba (2), obj (2)
> **Definitions:** is a  (1), means that (1), is an  (1)
> **Prerequisites:** setup (3)
> **CLI Commands:** find (1), make (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Add code to write out simulation results
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=0)** - [Instructor] Now that we have the code in place to run the simulation, we can write its output to the Results worksheet.
>
> **[0:06](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=6)** Debug.print works well for testing and for smaller situations, but when you start generating hundreds of values as output, you really do need to use a worksheet to manage and summarize that data.
>
> **[0:18](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=18)** In this movie, I will show you how to write values from object properties to a worksheet.
>
> **[0:24](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=24)** My sample file is Chapter 04_04, and you can find it in the Chapter 4 folder of the Exercise Files collection.
>
> **[0:31](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=31)** I am currently on the SimSetup worksheet, but because we're going to be writing it to the Results worksheet, let's take a look there.
>
> **[0:40](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=40)** So I'll click Results, and here I have a table.
>
> **[0:45](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=45)** So I have the headers for the customer ID, the time they entered the system, left the system, their current station, and again, this is for each tick of the clock, whether they're idle, total idle time, their time in the system.
>
> **[0:58](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=58)** And from that, we can calculate the percent of time that they were idle.
>
> **[1:03](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=63)** So there I have all of that information.
>
> **[1:06](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=66)** And I'll click cell A1 again.
>
> **[1:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=70)** I'll move to the Visual Basic Editor by pressing Alt F11.
>
> **[1:15](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=75)** And here is my code.
>
> **[1:16](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=76)** And I will increase the size of the code window.
>
> **[1:20](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=80)** And I want to write out the values at the end of each step of the simulation.
>
> **[1:24](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=84)** So I will scroll down to the bottom.
>
> **[1:29](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=89)** And just above End Sub, I have notes to myself, comments, to write the results to the Results worksheet and to step through each customer record and write property values.
>
> **[1:41](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=101)** So that is a handy reminder.
>
> **[1:43](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=103)** First, I will ensure that the Results worksheet is active and also that cell A1 at the top-left corner of the worksheet is active, 'cause we will use those references throughout the rest of this code.
>
> **[2:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=120)** So I will do Worksheets, and then Results, rather than an index number, because index numbers can change if worksheets are moved within a workbook.
>
> **[2:11](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=131)** So I have Results.Activate, then Enter.
>
> **[2:16](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=136)** And I will also activate cell A1.
>
> **[2:20](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=140)** So ActiveSheet.Range, and then A1, parentheses, double quotes, .activate.
>
> **[2:31](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=151)** So now I'm sure that the worksheet we want to use is active and we have also activated the cell that we'll base our calculations on.
>
> **[2:41](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=161)** So I'll scroll down.
>
> **[2:42](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=162)** And now we can step through each customer record and write property values.
>
> **[2:48](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=168)** So I'll give myself a little bit of white space to work with here.
>
> **[2:51](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=171)** To step through each member of a collection, we can use the foreach loop.
>
> **[2:56](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=176)** So I'll do For Each objC in Customers.
>
> **[3:02](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=182)** And I will use the down arrow to move down, and I'll say Next, and then objC as a comment.
>
> **[3:11](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=191)** And again, that's just a personal preference, you absolutely do not have to do that.
>
> **[3:15](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=195)** And now we will write out each of the values that we have.
>
> **[3:20](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=200)** So I have ActiveCell.
>
> **[3:22](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=202)** So ActiveCell's A1.
>
> **[3:24](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=204)** And we'll use this offset property to calculate where to write the value.
>
> **[3:30](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=210)** And that will be based off of the customer ID.
>
> **[3:33](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=213)** So objC.CustomerID, comma, so that's the row offset.
>
> **[3:41](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=221)** So we start with customer ID number one.
>
> **[3:44](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=224)** So we will move down one row.
>
> **[3:46](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=226)** And the customer offset to start will be zero because we'll be writing in column A.
>
> **[3:53](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=233)** Then write parentheses, and we're setting the value of that cell equal to the Customer ID.
>
> **[4:01](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=241)** So objC.CustomerID.
>
> **[4:05](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=245)** Now, I'll press Enter a few times, and copy the line that I just typed, 'cause that will save us a lot of time.
>
> **[4:16](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=256)** Enter, then Control V to paste, then we're staying on the same row, so the customer ID remains the same, but we're moving one column to the right.
>
> **[4:28](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=268)** So we're changing the column offset to one, and this will be the entered property.
>
> **[4:35](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=275)** Then press Enter, we'll move two columns over.
>
> **[4:42](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=282)** And we'll have Left, Control V, three columns.
>
> **[4:50](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=290)** And next is the station.
>
> **[4:55](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=295)** And I won't comment as I go along, I'll just change to and offset a column offset of four, whether they are idle, so the IsIdle property.
>
> **[5:05](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=305)** Then Control V.
>
> **[5:08](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=308)** Five over.
>
> **[5:11](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=311)** And then IdleTime.
>
> **[5:14](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=314)** And I'll scroll down to make sure that I already added the next statement to close that out.
>
> **[5:21](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=321)** That looks good.
>
> **[5:22](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=322)** So I'll just delete a little bit of white space to close that up.
>
> **[5:29](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=329)** And we are now ready to run the simulation and see the results on the Results worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (3), next (3), data (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** objc (4)
> **UI Navigation:** scroll down (3)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** f11 (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Run the simulation
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=0)** - [Instructor] Okay, we have done a lot of work in this chapter.
>
> **[0:04](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=4)** We have extended the clock-based simulation that we created in chapter 3 to add new customers as the simulation runs.
>
> **[0:12](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=12)** Those customers arrival times were calculated using the Poisson distribution, and their time at each station calculated using the normal distribution.
>
> **[0:21](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=21)** In this movie, I will show you how to run your simulation and correct an aspect of station timing that I originally overlooked.
>
> **[0:29](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=29)** The sample file that I will use is Chapter04_05, and you can find it in the Chapter04 folder of the Exercise Files collection.
>
> **[0:37](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=37)** I'm currently on the SimSetup worksheet, which has information about the simulation setup, and also, to generate customer interarrival times.
>
> **[0:47](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=47)** And then we'll write our results out to the Results worksheet.
>
> **[0:51](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=51)** And I have added a couple of formulas to this particular worksheet.
>
> **[0:57](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=57)** In column G, I have the time that a customer has spent in the system, and then also calculating the percentage of idle time.
>
> **[1:07](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=67)** So we have their idle time divided by their time in the system, and that will give us the percentage.
>
> **[1:15](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=75)** And because my code will activate the worksheets and specific cells that I need to make everything run properly, I don't need to click back at cell A1 or change the worksheet.
>
> **[1:26](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=86)** So now, I'll press Alt + F11 to move to the Visual Basic Editor.
>
> **[1:31](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=91)** And I'll drag down to make the code window larger.
>
> **[1:35](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=95)** Then I'll click inside of the subroutine and press F5 to run.
>
> **[1:41](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=101)** Okay, it ran.
>
> **[1:42](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=102)** So now, I'm going to press Alt + F11 again.
>
> **[1:45](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=105)** And here we are on the Results worksheet, and I can see that we have what looked like good results.
>
> **[1:54](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=114)** So I have the first customer that entered the system at time 1 and left at 46.
>
> **[1:59](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=119)** And I can tell that they left, because they have a current station of -1.
>
> **[2:06](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=126)** And we have small bits of idle time at the start in various small percentages, and then we have a large percentage, but it drops back down.
>
> **[2:17](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=137)** And so, I'll scroll down.
>
> **[2:19](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=139)** And for customer number 42, I noticed that something has happened.
>
> **[2:26](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=146)** So let me see what happens here in column C.
>
> **[2:29](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=149)** What am I measuring there?
>
> **[2:31](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=151)** The time they left the system.
>
> **[2:32](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=152)** Okay, so they never left the system, but they never advanced either, they never advanced beyond station 2.
>
> **[2:41](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=161)** And of course, none of the customers behind them did either.
>
> **[2:47](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=167)** So, let's go back to the SimSetup worksheet and see what station 2 has.
>
> **[2:56](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=176)** Okay, so we have a mean value of 10, ah, and I see a standard deviation of 3.
>
> **[3:03](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=183)** A standard deviation of 3 is a fairly high standard deviation in relation to the mean.
>
> **[3:08](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=188)** So what that indicates is that it's possible and in fact probable that we would get a negative value, a negative time that a customer spent at a station.
>
> **[3:19](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=199)** And of course, that would throw off the logic of the simulation that we created.
>
> **[3:24](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=204)** So let's press Alt + F11 to move back to the Visual Basic Editor and add a bit of error correction code to handle that circumstance.
>
> **[3:35](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=215)** And I inserted a comment on where I needed to make the fix, so I'll scroll down.
>
> **[3:43](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=223)** There we go.
>
> **[3:44](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=224)** So we have to make sure that the customer spends at least one tick in a station.
>
> **[3:49](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=229)** So I'll click there.
>
> **[3:51](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=231)** And the code that we use is an if-then statement on a single line.
>
> **[3:56](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=236)** So if the customer object's end time is less than or equal to the ticker time, so lTicker, then we'll just increment it by one, so objC.EndTime = lTicker + 1.
>
> **[4:19](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=259)** Okay, that looks good.
>
> **[4:21](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=261)** And I'll go back to the worksheets by pressing Alt + F11, and then go to the Results worksheet.
>
> **[4:28](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=268)** And I will select the cells from A3 to H3.
>
> **[4:37](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=277)** Then press Ctrl + Shift + down arrow to select everything else, and then press Delete.
>
> **[4:43](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=283)** So this leaves my formulas here.
>
> **[4:46](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=286)** So I have customer ID number 1, and this value I know will be overwritten.
>
> **[4:51](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=291)** So now, I'll press Alt + F11 to move back to the Visual Basic Editor, and then click inside the subroutine and press F5, it's run.
>
> **[5:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=300)** And I'll press Alt + F11 to move back.
>
> **[5:03](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=303)** And there I have the results.
>
> **[5:04](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=304)** And for the time in system, I'll just select cells G2 and H2, and double click the fill handle.
>
> **[5:11](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=311)** So those are copied down, so I have all of the calculations that I need.
>
> **[5:16](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=316)** And so, we have some significant idle time at the start, and then it smooths out, but then goes up again, then moves down.
>
> **[5:26](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=326)** And this time, we get past customer number 42, we don't have a negative time.
>
> **[5:34](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=334)** And in fact, as we go through the day, we see a bit of an increase and decrease in idle percentage.
>
> **[5:43](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=343)** And then I have a couple of values at the end that I can delete and work with inside of my values.
>
> **[5:52](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=352)** And there we see it, we have our simulation run, and we have written the results out to the Results worksheet.
>
> **[5:59](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=359)** And from there, we can perform analysis on what just occurred.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (6)
> **Env Vars:** f11 (6)
> **CLI Commands:** make (4), find (1)
> **Code Identifiers:** lticker (2), objc (1)
> **UI Navigation:** scroll down (2), go to (1)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (1), is an  (1)
> **Exercise Files:** exercise files (1)


### 5. Modifying the Simulation

[↑ Back to Table of Contents](#table-of-contents)

#### Describe process flow and programming goals
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/describe-process-flow-and-programming-goals-25123393?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/describe-process-flow-and-programming-goals-25123393?u=76281980&t=0)** - [Instructor] In Chapter 4, we extended our clock base simulation to add multiple customers while the simulation ran.
>
> **[0:07](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/describe-process-flow-and-programming-goals-25123393?u=76281980&t=7)** In this movie, we will add three more extensions to the model.
>
> **[0:11](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/describe-process-flow-and-programming-goals-25123393?u=76281980&t=11)** The first will be allowing each station to handle multiple customers at the same time.
>
> **[0:17](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/describe-process-flow-and-programming-goals-25123393?u=76281980&t=17)** The second will be to add more stations, we currently have three, but we can go to as many as we want.
>
> **[0:24](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/describe-process-flow-and-programming-goals-25123393?u=76281980&t=24)** And, finally, we will implement rework loops.
>
> **[0:27](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/describe-process-flow-and-programming-goals-25123393?u=76281980&t=27)** A rework loop is when a customer needs to go through a particular process again.
>
> **[0:33](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/describe-process-flow-and-programming-goals-25123393?u=76281980&t=33)** So the work that they received at Station 2 perhaps wasn't what they needed, so they need to go back through.
>
> **[0:40](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/describe-process-flow-and-programming-goals-25123393?u=76281980&t=40)** This is a common occurrence in business, and it's important that you'd be able to handle it in your simulations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (2), business (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Add capacity to each station
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=0)** - [Instructor] Very few business processes can only handle one customer at a time.
>
> **[0:05](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=5)** Even in a smaller shop, a manager or other employee could step away from what they were doing and help when the line is long.
>
> **[0:12](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=12)** In this movie, I will show you the changes you need to make to the stations class and your code to model station capacities above one.
>
> **[0:20](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=20)** My sample file is chapter 0502, and that's an Excel workbook that you can find in the Chapter 5 folder of the exercise files collection.
>
> **[0:30](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=30)** I've made a couple of changes to the data on the SimSetup worksheet.
>
> **[0:35](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=35)** Specifically, I have added a capacity column so we know how many customers each station can serve at one time.
>
> **[0:43](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=43)** And then I've also changed the mean.
>
> **[0:47](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=47)** So we've been using a mean of 20 ticks of the clock before, and I've changed it to 15 just so we get some different numbers.
>
> **[0:54](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=54)** So with those changes in mind, I'll switch over to the Visual Basic editor by pressing Alt + F11.
>
> **[1:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=60)** And here I have made some changes to the station class in the CStation code module, and those are these two properties here.
>
> **[1:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=70)** I have the capacity and also serving.
>
> **[1:14](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=74)** Capacity is the number of customers that a station can serve at the same time.
>
> **[1:20](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=80)** And serving is the number that they actually have at the station at the moment.
>
> **[1:25](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=85)** So if you have one customer in a station that is capable of serving two, then capacity will be two and serving will be one.
>
> **[1:33](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=93)** With that in mind, I can switch over to the Module2 code module and scroll down until I see the location where I want to make the first change.
>
> **[1:48](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=108)** And I have added a comment here to make the first change.
>
> **[1:53](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=113)** The first line asks if a station is idle, and if that value is zero, then it does some things below that.
>
> **[2:01](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=121)** So we're asking if the station is engaged.
>
> **[2:04](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=124)** And again, we're assuming at the moment it can only handle one at a time.
>
> **[2:09](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=129)** So the change I need to make is to check the serving property and see if it is equal to the station's capacity.
>
> **[2:19](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=139)** So we have If Stations and then NextSta.serving.
>
> **[2:26](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=146)** So we're looking at the next station for a customer and we're checking if the value equals not zero, but the capacity of the next station.
>
> **[2:36](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=156)** So that will be stations, and then objC.NextSta, so the customer's NextSta.capacity, and everything else remains the same.
>
> **[2:51](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=171)** So instead of seeing if the station is idle or not, we are checking to see if it is at capacity.
>
> **[2:58](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=178)** And if it is, that's equivalent to the station idle property being set to zero, so we would add one idle time or wait time to the customer.
>
> **[3:08](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=188)** However, if the next station is available, then we want to change its serving property so that it is serving one more customer.
>
> **[3:18](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=198)** So the customer that we just said can move on to the next station.
>
> **[3:23](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=203)** So instead of using the station as idle property for the next station that the customer will move to, we'll use the serving property that we worked with before.
>
> **[3:34](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=214)** And instead of being equal to zero, we will set it to its current value plus one.
>
> **[3:40](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=220)** So I will copy this code here, which is the object property we want to change.
>
> **[3:46](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=226)** So serving plus one.
>
> **[3:49](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=229)** The third change we want to make, which is down here, asks what to do when a customer is done at a station.
>
> **[3:57](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=237)** In other words, when the ticker equals the time that they are scheduled to leave the station.
>
> **[4:03](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=243)** So for that, instead of saying the station is idle, again, we want to set the serving property to its current value minus one.
>
> **[4:13](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=253)** So whereas before we added a customer, here we are taking it away.
>
> **[4:19](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=259)** So I'll copy that property reference.
>
> **[4:24](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=264)** So we have the number of customers that the station is serving and subtracting one.
>
> **[4:30](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=270)** And finally, below, we can indicate that a station is idle.
>
> **[4:36](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=276)** But as before, in this case, we're assuming that a customer just left the station so we want to subtract one.
>
> **[4:43](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=283)** And that is similar to the code that we had before, except we're looking at a station that is indicated by the current loop variable.
>
> **[4:55](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=295)** So that is the number of stations.
>
> **[4:57](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=297)** So I'll have stations and then LNumberStas.Serving.
>
> **[5:05](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=305)** And then we are going to subtract one from that value.
>
> **[5:09](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=309)** So I'll copy the property reference Station Serving minus one.
>
> **[5:15](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=315)** Okay, that looks good.
>
> **[5:16](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=316)** Those are the four changes that I needed to make.
>
> **[5:19](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=319)** And in the next movie we can run the code and see what it does to our results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (6), business (1), [[Microsoft Excel|Excel]] (1), data (1)
> **CLI Commands:** make (6), find (1)
> **Code Identifiers:** objc (1)
> **Env Vars:** f11 (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** in other words (1)

#### Run the simulation with added station capacity
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=0)** - [Instructor] In the previous movie, we added properties to the station class and code to the main subroutine to give each station the ability to handle multiple customers at a time.
>
> **[0:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=10)** In this movie, we will run the simulation and see how increasing capacity copes with shorter and shorter times between customer arrivals.
>
> **[0:18](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=18)** My sample file is Chapter 05_03, and that is a macro-enabled Excel workbook that you can find in the Chapter 5 folder of the Exercise Files collection.
>
> **[0:28](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=28)** I made a couple of changes to the SimSetup workbook.
>
> **[0:32](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=32)** Specifically I added a capacity column, so now each station has a capacity.
>
> **[0:38](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=38)** So Station 1 can handle two customers at once, Station 2 can still only do one, but Station 3 can also do two.
>
> **[0:46](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=46)** And I also changed the mean for the poisson distribution, and we have our lookup table here.
>
> **[0:53](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=53)** And the maximum value is 44.
>
> **[0:57](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=57)** All right, with all of that in mind, I'll press Alt-F11 to move to the Visual Basic editor.
>
> **[1:03](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=63)** And here I have code Module2 displayed.
>
> **[1:08](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=68)** And I will make the code window a bit larger.
>
> **[1:11](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=71)** And now I can click inside of the code and run it so we can see our results.
>
> **[1:18](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=78)** So I've clicked inside the AdditionalCapacity subroutine, and I'll press F5.
>
> **[1:22](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=82)** Takes a few seconds to run, and there we go.
>
> **[1:25](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=85)** Now I'll press Alt-F11.
>
> **[1:27](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=87)** And here we have the Results worksheet with the results written out.
>
> **[1:33](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=93)** And if you remember back before, we had some significant idle time percentages, over 20% or 30% in some cases.
>
> **[1:40](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=100)** So let's scroll down and see what we have here.
>
> **[1:44](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=104)** The largest I've seen so far was about 9%.
>
> **[1:48](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=108)** Okay, and later in the day, after customer 45, we have over 20%.
>
> **[1:53](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=113)** But then this goes down, and I'm seeing a lot of lower numbers, although we do go back up over 20 again as we go further in.
>
> **[2:02](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=122)** But overall, I am seeing very good performance.
>
> **[2:07](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=127)** So while some individuals do have to wait and spend about 25% of their time in the system waiting rather than being served, this is not such a bad result.
>
> **[2:18](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=138)** But now let's see what happens if we change the mean.
>
> **[2:22](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=142)** So I will start from the bottom of the Results,
>
> **[2:31](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=151)** and then I'll scroll up until Cell A3 is selected, and then press Delete.
>
> **[2:38](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=158)** And so that gets rid of all the values, and I started at cell H196.
>
> **[2:43](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=163)** Yours might be different based on the results that you see.
>
> **[2:47](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=167)** All right, so I wanted to change the mean to 10.
>
> **[2:52](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=172)** So I'll do SimSetup and I'll change the mean to 10, and Enter.
>
> **[2:57](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=177)** And when the mean goes down to 10, the maximum value that we will see is 35.
>
> **[3:05](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=185)** And I don't need to worry about deleting any of the other rows because Excel using the XLOOKUP formula will never get to them.
>
> **[3:12](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=192)** So I'll go up, and then press Alt-F11 again, and click inside of the code module, and also specifically within the subroutine, and press F5 to run.
>
> **[3:26](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=206)** And it takes a few seconds to run, and I'll press Alt-F11.
>
> **[3:31](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=211)** And I have my formulas in G2 and H2.
>
> **[3:36](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=216)** So I've selected those cells, and I'll double-click the fill handle to copy the formulas down.
>
> **[3:42](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=222)** And we can see that with the lower interval arrival time, we have significant idle time or at least idle time percentage for customers within the system.
>
> **[3:52](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=232)** And that's even with increase in capacity.
>
> **[3:55](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=235)** So I have idle time there, and I'll just scroll down.
>
> **[3:58](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=238)** And again, these numbers are high and they don't seem to be going back down to zero, at least not quickly, although they do here.
>
> **[4:06](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=246)** And so yeah, we're starting to see customers that are spending almost half of their time in the system waiting.
>
> **[4:14](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=254)** And exactly half there, 55 and 60.
>
> **[4:18](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=258)** So increasing the rate at which customers arrive, and in this case, that was going from 15 down to 10, we get very high idle times.
>
> **[4:30](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=270)** But now let's go back to the SimSetup worksheet, and change the capacity for Station 2 to two.
>
> **[4:40](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=280)** So that way we will hopefully be able to serve more customers and get them through more quickly.
>
> **[4:45](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=285)** I'll leave everything else the same.
>
> **[4:48](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=288)** So go back to the Results worksheet.
>
> **[4:50](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=290)** And again, I will delete everything below row 1.
>
> **[4:54](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=294)** So I'll just drag down.
>
> **[4:58](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=298)** Have our values there.
>
> **[5:01](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=301)** And then I'll go to the Visual Basic editor, pressing Alt-F11, making sure the insertion point is within the subroutine.
>
> **[5:09](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=309)** Press F5.
>
> **[5:11](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=311)** And it runs again.
>
> **[5:12](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=312)** That looks good.
>
> **[5:13](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=313)** And Alt-F11.
>
> **[5:15](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=315)** And here, I see that we're getting some idle time, but with luck and good planning, the idle time percentages will be lower.
>
> **[5:27](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=327)** So we do have zero idle time at the start, and then it goes up a little bit.
>
> **[5:31](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=331)** However, we are not seeing nearly the idle time percentages that we did previously.
>
> **[5:38](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=338)** Whereas before, customers were spending about half of their time in the system waiting, in this case, even though the percentages do go up for a while, we can see that they do go back down as the system catches up.
>
> **[5:52](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=352)** So by changing the capacity of specific stations and also working with the arrival time, you can generate interesting scenarios about your business process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (2), [[Simulation]] (1), business (1)
> **Env Vars:** f11 (6), h196 (1), xlookup (1)
> **UI Navigation:** scroll down (2), scroll up (1), double-click (1), go to (1)
> **Cross-References:** go back to (2), later in (1)
> **CLI Commands:** find (1), make (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Add more stations to the simulation
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-more-stations-to-the-simulation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-more-stations-to-the-simulation?u=76281980&t=0)** - [Instructor] Up until now, all of our examples have assumed a business process with three stations.
>
> **[0:06](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-more-stations-to-the-simulation?u=76281980&t=6)** In this movie, I will show you how to add more stations to the process.
>
> **[0:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-more-stations-to-the-simulation?u=76281980&t=10)** And the good news is that all we really need to do is add information about the station's average processing time, standard deviation and capacity.
>
> **[0:19](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-more-stations-to-the-simulation?u=76281980&t=19)** The code we've built can bring in the data with no problem.
>
> **[0:22](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-more-stations-to-the-simulation?u=76281980&t=22)** My sample file is chapter 0504, and you can find it in the chapter five folder of the exercise files collection.
>
> **[0:29](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-more-stations-to-the-simulation?u=76281980&t=29)** This is the same data that we used in the previous movie with one change, and that is for station number three.
>
> **[0:37](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-more-stations-to-the-simulation?u=76281980&t=37)** The next station is four instead of minus one.
>
> **[0:41](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-more-stations-to-the-simulation?u=76281980&t=41)** And again, minus one is the next station value we are using to indicate that a customer has successfully completed the process and has left the business.
>
> **[0:51](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-more-stations-to-the-simulation?u=76281980&t=51)** So let's go ahead and add in information for stations four and five.
>
> **[0:57](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-more-stations-to-the-simulation?u=76281980&t=57)** So click cell A8, and this will be station number four.
>
> **[1:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-more-stations-to-the-simulation?u=76281980&t=60)** And then the mean processing time, the average is 12, standard deviation is two, the next station is five, and the capacity is one.
>
> **[1:11](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-more-stations-to-the-simulation?u=76281980&t=71)** Now for the station number five, which I'll type in A9, the mean is 14.
>
> **[1:19](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-more-stations-to-the-simulation?u=76281980&t=79)** Standard deviation is four.
>
> **[1:20](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-more-stations-to-the-simulation?u=76281980&t=80)** Next is minus one indicating that when they leave, they are outside the process and the capacity is also two.
>
> **[1:28](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-more-stations-to-the-simulation?u=76281980&t=88)** Another thing we need to do is to change the number of stations value in B2.
>
> **[1:35](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-more-stations-to-the-simulation?u=76281980&t=95)** And there are two ways that you could do that.
>
> **[1:37](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-more-stations-to-the-simulation?u=76281980&t=97)** The first just make the change, but the second would be to drive the number of stations from the value in cell B2.
>
> **[1:48](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-more-stations-to-the-simulation?u=76281980&t=108)** So I'll click in cell A5 and type equal, and we'll use the new sequence function.
>
> **[1:55](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-more-stations-to-the-simulation?u=76281980&t=115)** If you have an older version of Excel, sequence will not be available to you.
>
> **[2:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-more-stations-to-the-simulation?u=76281980&t=120)** But if you have a current version of Microsoft 365, then it is.
>
> **[2:06](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-more-stations-to-the-simulation?u=76281980&t=126)** So we have the sequence and the number of rows will be the value in B2, then a comma.
>
> **[2:14](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-more-stations-to-the-simulation?u=76281980&t=134)** The number of columns we can leave blank.
>
> **[2:17](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-more-stations-to-the-simulation?u=76281980&t=137)** The start value will be one and the step will be one.
>
> **[2:21](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-more-stations-to-the-simulation?u=76281980&t=141)** You don't have to type those values in directly if you want, because one and one for start and step are the default values.
>
> **[2:29](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-more-stations-to-the-simulation?u=76281980&t=149)** But I'll put them in here just so we have them visible in case you haven't used sequence before.
>
> **[2:36](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-more-stations-to-the-simulation?u=76281980&t=156)** So with that formula in place, I'll press enter.
>
> **[2:41](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-more-stations-to-the-simulation?u=76281980&t=161)** Ah, I get a spill error and that's because I had values already in A6 through A9.
>
> **[2:48](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-more-stations-to-the-simulation?u=76281980&t=168)** So I'll delete.
>
> **[2:49](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-more-stations-to-the-simulation?u=76281980&t=169)** And there I have my formula in A5 and stations one through five and cells A5 through A9.
>
> **[2:58](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-more-stations-to-the-simulation?u=76281980&t=178)** And if I were to change the value in B2 to 6, then I would get a row for station six and I would be expected to add in that data.
>
> **[3:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-more-stations-to-the-simulation?u=76281980&t=190)** But in this case, it's just five so I'll press ctrl + Z to undo.
>
> **[3:14](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-more-stations-to-the-simulation?u=76281980&t=194)** And there I have everything that I need.
>
> **[3:18](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-more-stations-to-the-simulation?u=76281980&t=198)** And having the new parameters for stations four and five allows us to model our updated process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (4), data (3), business (2), [[Microsoft Excel|Excel]] (1), [[Microsoft 365]] (1)
> **CLI Commands:** find (1), make (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Run the simulation with additional stations
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-additional-stations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-additional-stations?u=76281980&t=0)** - [Instructor] In the previous movie, we added stations four and five to a process that only had three stations before.
>
> **[0:07](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-additional-stations?u=76281980&t=7)** We didn't have to modify the code to read in data about the stations, but we did need to let the model know how many to expect.
>
> **[0:14](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-additional-stations?u=76281980&t=14)** And in this movie, we'll run the simulation and see how increasing the number of stations affects our results.
>
> **[0:21](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-additional-stations?u=76281980&t=21)** My sample file is Chapter 0505, and that is a macro-enabled Excel workbook you can find in the Chapter 5 folder of the Exercise Files Collection.
>
> **[0:31](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-additional-stations?u=76281980&t=31)** To review the changes we made in the previous movie, I increased the number of stations to five, and then so that I had more flexibility, I put a sequence formula in cell A5 to give me the numbers one through five, and the formula appears in the screen.
>
> **[0:51](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-additional-stations?u=76281980&t=51)** If you have an older version of Excel, you might not have the sequence function, and in that case, you just want to make sure that you have an entry for exactly as many stations as you have in B2.
>
> **[1:02](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-additional-stations?u=76281980&t=62)** With these changes in place, let's go to the Visual Basic Editor by pressing Alt F11, and then go to Code Module 2.
>
> **[1:13](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-additional-stations?u=76281980&t=73)** I don't need to make any changes to the code, so I won't change the size of the code window.
>
> **[1:18](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-additional-stations?u=76281980&t=78)** I've clicked inside of the Add More Stations subroutine, and I'll press F5 to run it.
>
> **[1:25](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-additional-stations?u=76281980&t=85)** Takes a few seconds to run.
>
> **[1:26](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-additional-stations?u=76281980&t=86)** I have more stations, so it takes a little bit longer than previously.
>
> **[1:30](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-additional-stations?u=76281980&t=90)** And now I can press Alt F11 and move back to the Results workbook.
>
> **[1:35](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-additional-stations?u=76281980&t=95)** So here I have customers that were added.
>
> **[1:39](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-additional-stations?u=76281980&t=99)** And again, even though I have more stations, I'm seeing similar idle percentage results to what I had before.
>
> **[1:48](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-additional-stations?u=76281980&t=108)** Of course, the time and system and total idle time will tend to go up because they have more jumps to go through in the system.
>
> **[1:56](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-additional-stations?u=76281980&t=116)** So I will scroll down, and we do get one fairly high idle time there, over 40%.
>
> **[2:03](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-additional-stations?u=76281980&t=123)** However, a lot of the values are actually fairly reasonable.
>
> **[2:07](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-additional-stations?u=76281980&t=127)** And if they do go up, then they come back down toward the end of the day.
>
> **[2:13](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-additional-stations?u=76281980&t=133)** So there we go, we have one, two, three, four customers that are in the system at the end of the day.
>
> **[2:20](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-additional-stations?u=76281980&t=140)** But after we lock the door and don't allow any new customers in, we can take care of them, and then go home for the evening.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (2), data (1), [[Simulation]] (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** go to (2), scroll down (1)
> **Env Vars:** f11 (2)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Add rework loops to stations
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=0)** - [Instructor] As hard as we try to provide good customer service and quality manufacturing, the truth is there will be times when we need to do something over.
>
> **[0:09](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=9)** The extra time could be due to poor communication or bad luck, but the result is the same.
>
> **[0:14](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=14)** If a customer needs to go through a particular process a second time, it is called a rework loop.
>
> **[0:20](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=20)** The same is true for manufacturing, where if you have a piece of equipment that didn't come out exactly right, you will need to rework it.
>
> **[0:28](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=28)** The sample file I will use to incorporate the possibility of rework loops into our model is chapter 0506, and that's an Excel workbook you can find in the chapter five folder of the exercise files collection.
>
> **[0:43](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=43)** Everything on the sim setup worksheet is the same, however, I have made an addition to the results worksheet.
>
> **[0:49](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=49)** So I'll click that tab and here I have my table, tracking each customer through the system.
>
> **[0:55](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=55)** But over on the left, I have the customer ID, the station number, and the rework time.
>
> **[1:01](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=61)** So anytime a customer needs to go through a station a second time or third, that will be recorded here.
>
> **[1:08](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=68)** Now, let's switch over to the visual basic editor, so we can add code to incorporate the possibility of a rework loop.
>
> **[1:16](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=76)** So Alt + F11, and I'm in the module two code module and toward the end of my code, I have a section set aside for the possibility of a rework loop.
>
> **[1:30](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=90)** And here it is and I'll actually increase the size or width of the window.
>
> **[1:37](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=97)** So we'll check for rework loop, which will be implemented as a longer stay in the station.
>
> **[1:43](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=103)** We'll generate them randomly, so SNG rand, which is our single precision decimal number, will be equal to the output of the Rnd function.
>
> **[1:56](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=116)** And next, we check if a rework loop has happened.
>
> **[2:01](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=121)** So if sngRand is less than or equal to 0.05, so one out of every 20 times, then we need to copy in, or rather generate the rework time.
>
> **[2:17](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=137)** And this is a variable that I'd cleared separately up above.
>
> **[2:21](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=141)** So lReworktime equals and then we'll use the code from above to generate a random time in the station.
>
> **[2:32](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=152)** And fortunately, on the screen, I have the code that I need to use, which is here.
>
> **[2:38](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=158)** So I'll just wait or go past the compile error.
>
> **[2:42](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=162)** And so, I've selected Application.WorksheetFunction.norm underscore inv, and everything that follows that.
>
> **[2:49](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=169)** So it's selected, press Control + C to copy, and then I've added it to the lReworktime assignment line.
>
> **[2:58](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=178)** So there we go. Yep, that's exactly what I need.
>
> **[3:01](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=181)** And then I will add that to the customer's end time in the station.
>
> **[3:07](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=187)** So objC.endtime equals the current end time.
>
> **[3:13](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=193)** So objC.endtime, again plus lReworktime.
>
> **[3:20](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=200)** There we go.
>
> **[3:22](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=202)** To avoid errors and to avoid customers getting stuck, we need to ensure that they spend at least one tick in the rework loop.
>
> **[3:30](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=210)** So I'll add that as comment.
>
> **[3:33](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=213)** Actually, I will copy the text from above 'cause it's very similar.
>
> **[3:38](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=218)** There we go, so I've copied that.
>
> **[3:41](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=221)** And Control + V, make sure the customer spends at least one tick in a station.
>
> **[3:48](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=228)** And I'll go over.
>
> **[3:51](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=231)** There we go.
>
> **[3:52](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=232)** So I have object C endtime is lesser or equal to L ticker.
>
> **[3:59](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=239)** Then the end time is the ticker plus one. That looks good.
>
> **[4:02](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=242)** Now, we can write the rework time result out to the results worksheet with the new section that I created.
>
> **[4:11](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=251)** So go below here, go back, and add a comment after a single quote saying, write out the rework time result.
>
> **[4:25](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=265)** I'll make sure the results worksheet is activated, so worksheets, because we're working with an element of the collection then results in double quotes and parentheses that activate.
>
> **[4:39](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=279)** So the correct worksheet will be activated.
>
> **[4:43](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=283)** Then I want to activate cell J1.
>
> **[4:46](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=286)** So that will be ActiveSheet.Range.
>
> **[4:52](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=292)** And then the range, we're going to name it is J1.activate.
>
> **[5:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=300)** And then we can write out our three values.
>
> **[5:03](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=303)** So ActiveCell.Offset, then left parentheses, and then we will go down the number of rows of the rework counter which starts at one.
>
> **[5:17](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=317)** So I have lReworkCounter, comma, and then zero.
>
> **[5:22](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=322)** Zero will be the number of columns we're going to move to the right, then right parentheses dot value, so we're setting the value of that cell to the customer ID.
>
> **[5:31](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=331)** So objC customer ID.
>
> **[5:36](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=336)** Then I will copy everything up to the bit before the customer ID property identifier, then Control + V.
>
> **[5:48](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=348)** We'll go over one column and the property will write is the current station.
>
> **[5:54](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=354)** So that is where the rework loop occurred.
>
> **[5:57](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=357)** Then Enter, Control + V will go over two columns, and we'll write out the rework time.
>
> **[6:03](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=363)** And that is lReworkTime.
>
> **[6:08](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=368)** And finally, we will increment the rework counter.
>
> **[6:12](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=372)** So that is lRework counter, CNTR, equals itself.
>
> **[6:18](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=378)** So lRework counter plus one, and then we're in an if statement.
>
> **[6:24](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=384)** So we need to close it, so and if.
>
> **[6:27](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=387)** All right, that looks good.
>
> **[6:29](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=389)** We have created a rework loop if required.
>
> **[6:32](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=392)** They will occur 5% of the time.
>
> **[6:34](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=394)** And if they do, we use the time for the current station and add that to the ticker for when the customer leaves.
>
> **[6:43](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=403)** And we make a record of what has occurred in the separate section that we created and added it to the results worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1), next (1), application (1)
> **Code Identifiers:** lreworktime (4), objc (3), lrework (2), sngrand (1), lreworkcounter (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** f11 (1), sng (1), cntr (1)
> **Definitions:** is called (1), is a  (1)
> **Versions:** 0.05 (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** setup (1)

#### Run the simulation with rework loops
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-rework-loops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-rework-loops?u=76281980&t=0)** - [Instructor] In the previous movie, we added the possibility that a customer would need to spend more time at a station than planned.
>
> **[0:08](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-rework-loops?u=76281980&t=8)** We changed our code to allow a 5% possibility that the customer would spend another randomly generated time period at the station.
>
> **[0:16](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-rework-loops?u=76281980&t=16)** In this movie, we'll run the simulation and see how adding rework loops to the simulation affects our results.
>
> **[0:23](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-rework-loops?u=76281980&t=23)** My sample file is chapter 05_07, and you can find it in the chapter five folder of the Exercise Files collection.
>
> **[0:31](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-rework-loops?u=76281980&t=31)** I haven't made any changes to the sim setup worksheet, however, I did add a new section to results.
>
> **[0:38](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-rework-loops?u=76281980&t=38)** So I'll click there and over on the right, I am tracking the rework time.
>
> **[0:43](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-rework-loops?u=76281980&t=43)** So I have the customer IDs, the station where the rework loop occurred, and then the rework time, so the amount of time that it took for the customer to go through the station a second time.
>
> **[0:56](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-rework-loops?u=76281980&t=56)** All right, with all that in place, I'll press Alt F11 to move to the Visual Basic Editor.
>
> **[1:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-rework-loops?u=76281980&t=60)** And here I have my subroutine for the rework loops.
>
> **[1:05](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-rework-loops?u=76281980&t=65)** I won't review the code.
>
> **[1:06](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-rework-loops?u=76281980&t=66)** Instead, I'll just press F5 to run and see how the simulation goes.
>
> **[1:11](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-rework-loops?u=76281980&t=71)** There we go, it has run, and I'll press Alt F11 to move back to the worksheets.
>
> **[1:18](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-rework-loops?u=76281980&t=78)** And here I am.
>
> **[1:20](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-rework-loops?u=76281980&t=80)** So I have my customers over on the left, and I'll just scroll down through the idle time.
>
> **[1:28](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-rework-loops?u=76281980&t=88)** And I'm not seeing anything horrible.
>
> **[1:30](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-rework-loops?u=76281980&t=90)** I've got 37% here, which isn't great.
>
> **[1:33](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-rework-loops?u=76281980&t=93)** They spent more than a third of their time in the system waiting to be served.
>
> **[1:39](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-rework-loops?u=76281980&t=99)** And then 28%, almost 30% again.
>
> **[1:44](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-rework-loops?u=76281980&t=104)** And overall these values are not too bad.
>
> **[1:47](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-rework-loops?u=76281980&t=107)** And then I have some customers down at the end who were not served, or at least we didn't finish them before we started accepting new customers.
>
> **[1:57](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-rework-loops?u=76281980&t=117)** So I'll go back up and take a look at the rework loops.
>
> **[2:01](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-rework-loops?u=76281980&t=121)** And remember, this happened with a 5% probability.
>
> **[2:05](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-rework-loops?u=76281980&t=125)** So I have customer number five at station three that took four extra minutes or four ticks of the clock.
>
> **[2:13](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-rework-loops?u=76281980&t=133)** And let's see if anyone got caught twice.
>
> **[2:17](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-rework-loops?u=76281980&t=137)** Yes, customer 108 happened twice.
>
> **[2:20](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-rework-loops?u=76281980&t=140)** So they had rework loops at stations two and three, and that appears to be the only customer that had to spend extra time twice.
>
> **[2:31](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-rework-loops?u=76281980&t=151)** And of course, we don't like to have rework loops, but it is a fact of business that they do happen.
>
> **[2:36](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-rework-loops?u=76281980&t=156)** And if you want to account for them based on historical data in your simulation, you can do that using the techniques shown here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (4), [[Probability]] (1), business (1), data (1)
> **Env Vars:** f11 (2)
> **CLI Commands:** find (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### 6. Allowing Conditional Processing

[↑ Back to Table of Contents](#table-of-contents)

#### Describe process flow and programming goals
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/describe-process-flow-and-programming-goals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/describe-process-flow-and-programming-goals?u=76281980&t=0)** - [Presenter] So far in this course, we have worked through simulations that allow customers to work through a process in a straightforward way, but we can add elements of chance to our simulation to make it more realistic.
>
> **[0:14](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/describe-process-flow-and-programming-goals?u=76281980&t=14)** For example, we could allow customers to skip some stations.
>
> **[0:19](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/describe-process-flow-and-programming-goals?u=76281980&t=19)** In other words, they don't need the service that is provided there.
>
> **[0:22](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/describe-process-flow-and-programming-goals?u=76281980&t=22)** We can also record probabilities of moving to one station or another, and we can allow supervisors to help to reduce time.
>
> **[0:31](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/describe-process-flow-and-programming-goals?u=76281980&t=31)** Not every employee is capable of helping every customer, so for the more difficult cases, we can have someone who is a supervisor or more experienced step in.
>
> **[0:42](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/describe-process-flow-and-programming-goals?u=76281980&t=42)** And also, we can allow customers to finish the process after closing time.
>
> **[0:47](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/describe-process-flow-and-programming-goals?u=76281980&t=47)** One of the limitations of the simulations we've created before was that customers couldn't make it all the way through before closing time.
>
> **[0:56](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/describe-process-flow-and-programming-goals?u=76281980&t=56)** In this chapter, I will show you how to add code that creates customers until the business closes, but then keep track of the customers once they are there to record the time that they left.
>
> **[1:07](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/describe-process-flow-and-programming-goals?u=76281980&t=67)** Adding each of these elements makes your simulations more realistic and will add a great deal to your analysis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (1), business (1)
> **CLI Commands:** make (2)
> **Definitions:** in other words (1), is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [presenter] (1)

#### Allow conditional station paths
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=0)** - [Instructor] In chapter five, we extended our simulation to allow for rework loops where a customer spends more than the expected time at a station.
>
> **[0:08](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=8)** In this chapter, we will simulate a related scenario where a customer has a probability of moving past the station without having to go through it.
>
> **[0:17](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=17)** My sample file is chapter 0602, and you can find it in the chapter six folder of the exercise files collection.
>
> **[0:25](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=25)** I'm on the Sim Setup worksheet and here I have the previous data for my five stations.
>
> **[0:30](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=30)** However, I have a new column that has the label Probability Must Do.
>
> **[0:37](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=37)** And this is the probability that a customer will have to go through a particular station rather than skip it.
>
> **[0:44](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=44)** And I have done some observations of the business and I know, based on experience, what those values are.
>
> **[0:51](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=51)** I need to express them as numbers rather than percentages.
>
> **[0:55](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=55)** So in F5, I'll type one, and that means that everyone has to go through step one or station one.
>
> **[1:02](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=62)** Then 85% of the people have to go through station two.
>
> **[1:07](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=67)** So that's 0.85.
>
> **[1:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=70)** Only about 15% of the people actually need to go through station three, so that'll be 0.15.
>
> **[1:17](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=77)** And then everyone has to go through four and five, so that's one and one.
>
> **[1:21](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=81)** So there are the probabilities expressed as decimal numbers for each of the stations.
>
> **[1:29](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=89)** Now we can switch over to the visual basic editor and now add code to handle these probabilities.
>
> **[1:35](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=95)** So I'll press ALT F11, and here I will display the station customer definition.
>
> **[1:44](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=104)** So that will be a station class module.
>
> **[1:47](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=107)** And you'll notice that I've added a new variable and that is probability and it is a single precision floating point number.
>
> **[1:55](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=115)** And then down at the bottom of the definition, I have the get and let methods.
>
> **[2:02](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=122)** So now let's switch over to our main code module where we have the simulation and add the code that will see if a customer can skip or not.
>
> **[2:13](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=133)** So I'll scroll down to where I have my comment.
>
> **[2:18](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=138)** There we go.
>
> **[2:19](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=139)** So add conditional processing logic here, and this is to the right of an L statement and we need to keep everything else below that.
>
> **[2:27](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=147)** All we're doing is seeing if we need to essentially reset the next station property for the customer.
>
> **[2:35](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=155)** And it will be an if then statement.
>
> **[2:39](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=159)** So if R and D, so a random single precision decimal number, between zero and one is greater than a station's probability property.
>
> **[2:52](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=172)** So you have stations and we're looking at the station that the customer will be moving to.
>
> **[2:59](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=179)** So next station dot probability then, and I'll add my end if at the bottom and go back up.
>
> **[3:11](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=191)** Then the station for the customer.
>
> **[3:14](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=194)** So object C dot station equals the next station plus one, so OBJC dot next station plus one.
>
> **[3:28](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=208)** So this version of the code does not determine if a customer skips directly to a specific station, instead we're just asking if they skip the next station.
>
> **[3:40](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=220)** And of course it can happen more than once.
>
> **[3:43](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=223)** So we have plus one and then otherwise we will set it to the next station.
>
> **[3:51](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=231)** So that will be an L statement.
>
> **[3:54](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=234)** And then OBJC dot station equals OBJC next station.
>
> **[4:03](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=243)** And I've already ended my and if, and I've covered both possibilities, whether they can skip or whether they can't.
>
> **[4:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=250)** And the next station will be written and I do need to keep this statement that assigns the customer station property, updating it from its next station property because if this code doesn't run because they can't skip, then that statement updating it as well would not run.
>
> **[4:32](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=272)** So I need to run it either here or here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (9), [[Probability]] (6), [[Simulation]] (2), data (1), business (1)
> **Env Vars:** objc (3), alt (1), f11 (1)
> **Versions:** 0.85 (1), 0.15 (1)
> **Definitions:** means that (1), is a  (1)
> **CLI Commands:** find (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** setup (1)

#### Run the simulation
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=0)** - [Instructor] In this chapter, we have modified an existing simulation to give a probability that customers will have to do a station instead of everyone having to do all of them.
>
> **[0:11](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=11)** The sample file that I'm using is Chapter 06_03, and you can find that in the Chapter 6 folder of the Exercise Files collection.
>
> **[0:19](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=19)** The specific changes we made are to the SimSetup worksheet, and here I have a new column for probability must do, and that is the probability a customer has to go through a particular station.
>
> **[0:33](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=33)** So 85% of the time, customers will need to go through Station 2, but only 15% of the time, they will have to go through Station 3.
>
> **[0:42](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=42)** So let's run a simulation and see what kind of results that we get.
>
> **[0:46](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=46)** The results will be tabulated on the Results worksheet, and we're especially interested in the amount of time that customers are idle within the system.
>
> **[0:56](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=56)** Our goal is to minimize that.
>
> **[0:59](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=59)** So I'll press Alt-F11 to move to the Visual Basic editor.
>
> **[1:03](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=63)** And then I'll change the window to the Module2 code module, which I'll expand just to make it easier to read, even though we won't actually be doing any edits.
>
> **[1:14](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=74)** So I'll click in the subroutine, and then press F5.
>
> **[1:18](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=78)** And after a moment, we will have our result.
>
> **[1:22](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=82)** There we go.
>
> **[1:23](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=83)** So I'll press Alt F11 to move back to the worksheet.
>
> **[1:27](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=87)** And I see the idle times over on the right.
>
> **[1:32](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=92)** So we're starting out, early on, we have some times where customers are idle more than 25% of the time.
>
> **[1:39](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=99)** And as we scroll down, we see another batch where they are at about 25%, 27.
>
> **[1:48](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=108)** Hopefully it won't get too much higher than that.
>
> **[1:52](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=112)** 27 again.
>
> **[1:53](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=113)** 26, 34, so that's not great.
>
> **[1:57](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=117)** 32 and 33.
>
> **[1:59](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=119)** And basically, once we have idle time, that is customers waiting, because a customer takes a long time to go through a particular station, then others tend to have to wait as well.
>
> **[2:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=130)** So there are those results.
>
> **[2:12](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=132)** Now, I will delete the table rows, and I am using an Excel table.
>
> **[2:20](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=140)** So I've selected the table row, and I'll press Control-Shift, down arrow.
>
> **[2:25](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=145)** So there I have the remaining table rows.
>
> **[2:29](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=149)** I'll move the mouse pointer over the edge of a row so that it is a right-pointing black arrow, then right-click, then point to Delete and Table Rows.
>
> **[2:40](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=160)** And we're back up to just the one row that we had before.
>
> **[2:45](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=165)** And now I'll go to the SimSetup worksheet by clicking its tab, and see if there's anything that I can change.
>
> **[2:52](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=172)** Well, the first thing that I will note is that I have two people helping 15% of the customers.
>
> **[2:59](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=179)** So what I can do is change the capacity of Station 3 to one in cell E7, then Enter.
>
> **[3:09](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=189)** And add that person to Station 4 in E8, so that now I have more capacity in the station where I know customers will be coming through.
>
> **[3:21](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=201)** I don't have any summary operations in the table on the Results worksheet, but hopefully, just by looking at it, we'll see some improvement.
>
> **[3:30](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=210)** So I'll press Alt-F11 to move to the Visual Basic editor, make sure the insertion point is flashing in the subroutine, and press F5.
>
> **[3:39](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=219)** And then, once again, Excel will run through the simulation.
>
> **[3:43](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=223)** And I'll press Alt-F11 to move to the Results worksheet.
>
> **[3:47](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=227)** And I can already see that my change made a big difference.
>
> **[3:51](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=231)** The idle times at the start are much lower.
>
> **[3:54](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=234)** So I will scroll down.
>
> **[3:57](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=237)** There's someone who had to spend about 25% of the time waiting.
>
> **[4:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=240)** However, and another one, but it is obvious that the change we made has greatly decreased the amount of time that people are waiting and not being served within the system.
>
> **[4:14](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=254)** So always look at how to manage your resources and assign them within a process.
>
> **[4:20](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=260)** You might be able to speed things up dramatically with a very small change.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (3), [[Probability]] (3), [[Microsoft Excel|Excel]] (2)
> **Env Vars:** f11 (4)
> **UI Navigation:** scroll down (2), right-click (1), go to (1)
> **CLI Commands:** make (2), find (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Allow other employees to help the process
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=0)** - [Instructor] So far in this course, we have assumed that every customer service agent can handle every situation.
>
> **[0:07](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=7)** That is not always the case.
>
> **[0:08](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=8)** Some situations require more experienced people to help.
>
> **[0:12](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=12)** You can think of level one or level two technical support.
>
> **[0:16](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=16)** In this movie, I will show you how to add code so that supervisors can take on cases a junior employee would take too long to solve.
>
> **[0:25](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=25)** My sample file is Chapter 06-04, and you can find it in the Chapter 6 folder of the Exercise Files collection.
>
> **[0:33](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=33)** I've made a couple of changes on the worksheets and also in Excel VBA.
>
> **[0:39](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=39)** So let's start with the worksheet.
>
> **[0:41](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=41)** First thing that I've done on the sim setup worksheet is to change the number of stations to four.
>
> **[0:47](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=47)** I only have three that customers will need to go through, but I've created the fourth one so that the customers have a place to go within the simulation when they're being helped by a supervisor.
>
> **[1:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=60)** Also, if we look at results, you'll see that I have added a calculation for the average percentage idle, and we are going to use that when we run the simulation later to see how adding supervisors helps, or doesn't, with the time spent in the system.
>
> **[1:20](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=80)** We're not going to run the simulation in this movie, so I won't change the results table, but I will press Alt+F11 to move to the Visual Basic Editor so we can see the changes that have been made.
>
> **[1:32](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=92)** In the Visual Basic Editor, in the MainCode module, there are a couple of changes that I made.
>
> **[1:39](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=99)** The first is indicated here, with a single quote followed by three star signs, or asterisks, and I use that to indicate where I made the change.
>
> **[1:50](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=110)** I turned off screen updating, and that's because we can get flashing sometimes when a worksheet is displayed and then we move to another worksheet.
>
> **[1:59](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=119)** So if we turn off screen updating at the start, none of those updates will happen until the code is finished running.
>
> **[2:07](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=127)** Later, if I scroll down, I see that I have a variable to count supervisor calls.
>
> **[2:12](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=132)** I didn't end up using it, but I declared it here and I wanted to show you one way to track what's going on.
>
> **[2:20](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=140)** And then, if we scroll down further, we get into the part where we check each customer's status.
>
> **[2:29](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=149)** And here is where we determine whether a customer service time is greater than or equal to 25 ticks on the clock.
>
> **[2:39](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=159)** And if it is, we send that customer to station four for separate processing.
>
> **[2:44](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=164)** So we set the current station to idle, that is, their station is idle property goes to one.
>
> **[2:51](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=171)** And then the customer's station property goes to four.
>
> **[2:55](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=175)** Also, I'm assuming that the supervisor works more quickly, so we'll set the time to either 15, 12, or 10 ticks.
>
> **[3:03](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=183)** And that won't be done randomly, we're just going to do it when we run.
>
> **[3:07](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=187)** We implement those instructions by checking if the end time is greater than or equal to the current ticker value plus 25.
>
> **[3:16](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=196)** So if we're at 100, and I see a value of 125 or more, then the following code would be run.
>
> **[3:23](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=203)** The supervisor count goes up by one, and then the station that the customer was at is set to idle.
>
> **[3:32](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=212)** So that value goes to one.
>
> **[3:35](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=215)** The customer's current station is set to four.
>
> **[3:39](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=219)** And then the end time for the customer at the current station is set to the ticker value plus 15.
>
> **[3:46](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=226)** So instead of going 25 or more, we assume the supervisor can work more quickly because of their experience, and we set it to 15.
>
> **[3:53](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=233)** And by making just those changes and not adding anything else, we're able to use the remainder of the code to determine when it is time for a customer to move along.
>
> **[4:04](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=244)** And another thing is that because we check each customer's status every time through the loop, and I'll go back up to the top to show that.
>
> **[4:14](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=254)** So I'll scroll back down.
>
> **[4:15](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=255)** That's all the initialization. There we go.
>
> **[4:18](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=258)** So for each tick in TotalTicks, we check if a customer is due to be created.
>
> **[4:25](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=265)** And then below that, we start checking each customer's status.
>
> **[4:29](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=269)** So for every customer in Customers, we check if their station is minus one, that is they're done.
>
> **[4:36](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=276)** And if it is, then we skip them and move to the next customer.
>
> **[4:40](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=280)** And from there, we see if the customer is idle, and if it is, we try to find out what to do with them to move to the next station, and whether or not they need to wait, and all the other code runs as before.
>
> **[4:53](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=293)** So, with this in mind, we can go forward and run the simulation and see how the results compare when we have supervisors helping, and when we don't.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (4), next (2), [[Technical Support]] (1), [[Microsoft Excel|Excel]] (1)
> **CLI Commands:** find (2)
> **Env Vars:** vba (1), f11 (1)
> **UI Navigation:** scroll down (2)
> **Prerequisites:** setup (1), initialization (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Run the simulation with helpers
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=0)** - [Instructor] In the previous movie, we reviewed code that allowed supervisors or more experienced employees to take over when a customer's processing time was estimated to be 25 ticks or more.
>
> **[0:12](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=12)** In this movie, we will run the simulation with and without our changes to see how it affects average idle time.
>
> **[0:19](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=19)** We will also change the time it takes a supervisor to help the customers with more challenging cases to see how that affects the results.
>
> **[0:27](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=27)** My sample file is chapter 0605, and you can find it in the chapter six folder of the exercise files collection.
>
> **[0:35](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=35)** As a reminder on SIM setup, I have increased the number of stations to four, and we have the mean of standard deviation and next station for the first three.
>
> **[0:44](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=44)** And number four is a placeholder where customers will go when they're working with a supervisor.
>
> **[0:51](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=51)** And we're assuming that we have enough supervisors on hand to take care of all capacity.
>
> **[0:59](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=59)** So we don't need to worry about the mean standard deviation or next because we assume a set time for each supervisor, whether 15, 12, or 10 ticks of the clock.
>
> **[1:12](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=72)** On the results worksheet, I have the start of my table and then also calculate the average idle time based on the values in the percent idle column.
>
> **[1:23](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=83)** And then we'll record those values here in columns M through P, and then calculate the average.
>
> **[1:29](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=89)** Okay, let's press ALT + F11 to move to the Visual Basic editor.
>
> **[1:34](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=94)** And in the main code module, if I scroll down, I currently have the supervisor code that checks if a service time is greater than or equal to 25 ticks, in which case we would implement the supervisor loop.
>
> **[1:53](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=113)** I want to run a number of samples without that turned on.
>
> **[1:56](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=116)** So I have that code commented out.
>
> **[1:59](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=119)** Everything's ready to go.
>
> **[2:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=120)** So I'll press F5 for the first run, then alt + F11 to move, and I have a percent idle time of 13.54%.
>
> **[2:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=130)** So in M2, I'll type 13.54 and enter.
>
> **[2:15](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=135)** Now I will delete the table rows by selecting the table row for customer ID number two, and then control shift down arrow to select all the way down to the end of the table.
>
> **[2:29](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=149)** And then right click the edge of one of the table rows, point to delete and click table rows.
>
> **[2:37](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=157)** And we are back to an almost empty table that can be overwritten without having any values from a previous simulation still there.
>
> **[2:46](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=166)** I need to press ALT + F11 then F5.
>
> **[2:53](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=173)** Alt + F11 and 18.81.
>
> **[2:55](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=175)** That's a high value.
>
> **[2:58](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=178)** And then I'll do the same thing to delete the rows.
>
> **[3:04](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=184)** And there we go.
>
> **[3:06](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=186)** Same process as before.
>
> **[3:08](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=188)** Alt + F11, F5, and ALT + F11, 7.75.
>
> **[3:13](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=193)** So that was much better performance.
>
> **[3:17](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=197)** Then I will again delete the values, and this is the sort of repetitive thing that you would definitely want to write a macro for.
>
> **[3:26](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=206)** But we have enough VBA code already in this class, so I decided not to do it, and I'm doing it by hand.
>
> **[3:32](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=212)** So this takes longer than it might otherwise, but I think it's worth seeing the process.
>
> **[3:38](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=218)** So we're there.
>
> **[3:39](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=219)** Alt + F11, F5 to run.
>
> **[3:41](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=221)** And this will be our last run without supervisors.
>
> **[3:44](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=224)** So Alt + F11 and 16.98.
>
> **[3:49](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=229)** And you can see the variance or variation in those values with a low of 7.75% and a high of 18.81.
>
> **[3:59](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=239)** Right, so that's the last one we'll do without supervisors.
>
> **[4:02](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=242)** Now we'll do the same thing with supervisors, and assuming that each of them takes 15 ticks of the clock to help a customer.
>
> **[4:11](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=251)** So Alt + F11, oh, excuse me, I'll go back and delete the table rows below one.
>
> **[4:22](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=262)** Table rows.
>
> **[4:23](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=263)** There we go.
>
> **[4:25](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=265)** And ALT + F11.
>
> **[4:26](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=266)** And now I will remove the comment indicators,
>
> **[4:35](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=275)** the single quotes or apostrophes from the supervisor code so that now each time a supervisor helps, it will take 15 ticks of the clock instead of 25 or more.
>
> **[4:48](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=288)** And we'll see how that affects idle time.
>
> **[4:50](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=290)** So I'll press F5, Alt + F11, we get 6.3% and then I'll delete the rows using the same procedure as before.
>
> **[5:09](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=309)** There we are ALT + F11, F5, ALT + F11, and at 12.35%.
>
> **[5:19](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=319)** There we go.
>
> **[5:21](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=321)** And two more.
>
> **[5:25](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=325)** So again, deleting the rows.
>
> **[5:34](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=334)** F5 to run.
>
> **[5:37](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=337)** 8.9 and, one more.
>
> **[5:43](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=343)** Oh, excuse me.
>
> **[5:44](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=344)** I should delete all these.
>
> **[5:47](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=347)** There we go.
>
> **[5:49](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=349)** Control + shift + enter.
>
> **[5:51](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=351)** Delete table rows.
>
> **[5:54](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=354)** Okay, ALT + F11 and F5, and ALT + F11 and 10.56.
>
> **[6:03](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=363)** So that is a pretty good result.
>
> **[6:09](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=369)** Oh, excuse me, I forgot to do control + shift + down arrow, then do that and delete table rows.
>
> **[6:20](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=380)** There we go.
>
> **[6:22](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=382)** Alt + F11, F5.
>
> **[6:23](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=383)** But this time actually, before I press F5, I'm going to change the end time to 12.
>
> **[6:30](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=390)** So it's 12.
>
> **[6:32](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=392)** F5, Alt + F11, get 5.45, enter.
>
> **[6:47](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=407)** ALT + F11, go back, 6.1.
>
> **[6:53](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=413)** Control + shift + down arrow.
>
> **[6:57](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=417)** Delete table rows.
>
> **[7:03](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=423)** 7.49.
>
> **[7:05](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=425)** So it looks like that if we can get the average helping time down to 12, that we'll see a significant reduction in average percent idle.
>
> **[7:16](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=436)** So there we go.
>
> **[7:17](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=437)** And I will delete one more time,
>
> **[7:26](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=446)** ALT + F11 and F5, 10.75%.
>
> **[7:31](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=451)** So I'm not surprised that it went up a little bit 'cause those values honestly did seem a little bit low for my trial runs.
>
> **[7:40](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=460)** Okay, now we'll do four more at 10, and select the row.
>
> **[7:50](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=470)** Control + shift + down arrow, delete the rows.
>
> **[7:54](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=474)** ALT + F11, and I will edit the 12 to 10.
>
> **[7:57](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=477)** It'd be interesting to see how this works 'cause I actually did not do this during my preparation, so I am as interested to see whether it helps or not as you are.
>
> **[8:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=490)** So F5 to run, and ALT + F11, 7.86.
>
> **[8:19](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=499)** Enter.
>
> **[8:23](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=503)** Then delete the rows.
>
> **[8:26](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=506)** So ALT + F11, F5 to run ALT + F11, 8.87.
>
> **[8:38](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=518)** Delete.
>
> **[8:41](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=521)** So control + shift + down arrow, delete, table rows, ALT + F11, F5 to run.
>
> **[8:52](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=532)** ALT + F11, 9.86.
>
> **[8:57](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=537)** And okay, last one.
>
> **[8:59](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=539)** And then we'll calculate the averages.
>
> **[9:01](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=541)** So again, deleting the rows, Control + shift + down, enter, and delete the rows.
>
> **[9:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=550)** ALT + F11, F5.
>
> **[9:13](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=553)** ALT + F11, 9.93.
>
> **[9:18](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=558)** There we go.
>
> **[9:19](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=559)** And now we can calculate our averages.
>
> **[9:21](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=561)** So I will select M6 through P6 and do equal average.
>
> **[9:27](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=567)** Then I will select M2 to M5, type a right parentheses, and then press control + enter, which will enter the same formula into each of the selected cells.
>
> **[9:38](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=578)** But because I have relative references, it will be M2 to M5, N2 to N5, O2 to O5 and P2 to P5.
>
> **[9:47](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=587)** So control + enter, and we get averages of 14.27%, 9.53, 7.45, and 9.13.
>
> **[9:57](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=597)** So it appears from a very small number of trials that without supervisors, individuals spend about 14.25% of their time idle within the system.
>
> **[10:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=610)** If we allow supervisors to help, we can reduce that by about 5% and reduce it even further if they're able to help in 12 minutes.
>
> **[10:19](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=619)** And then we probably push customers into the system more quickly than the other stations can handle them at 10 minutes, so I'm not surprised the time went up a bit.
>
> **[10:30](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=630)** So the question you need to make as a planner is is it worth having supervisors move away from the other things that they're doing to help?
>
> **[10:39](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=639)** And if so, what level of performance should we look for?
>
> **[10:43](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=643)** 'Cause the question of an individual who comes to you for help being idle for 15 about percent of the time that they're in your system might not be a significant barrier.
>
> **[10:54](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=654)** However, if time is of the essence, then it might be worth having supervisors help to reduce the idle time from 14% to about 9.5%.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (2), next (2)
> **Env Vars:** f11 (27), alt (18), sim (1), vba (1)
> **Versions:** 13.54 (2), 18.81 (2), 7.75 (2), 16.98 (1), 6.3 (1)
> **CLI Commands:** find (1), make (1)
> **UI Navigation:** scroll down (1), select the (1)
> **Definitions:** is a  (2)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** setup (1)

#### Add time for customers to complete the process
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-time-for-customers-to-complete-the-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-time-for-customers-to-complete-the-process?u=76281980&t=0)** - [Instructor] As we have run our simulations throughout this course, you probably noticed that some customers don't finish the process before we run out of time on the clock.
>
> **[0:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-time-for-customers-to-complete-the-process?u=76281980&t=10)** In this movie, I will show you how to add new customers until the end of normal business hours and then allow the existing customers to complete the process.
>
> **[0:20](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-time-for-customers-to-complete-the-process?u=76281980&t=20)** My sample file is chapter 0606 and you can find it in the chapter six folder of the exercise files collection.
>
> **[0:28](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-time-for-customers-to-complete-the-process?u=76281980&t=28)** I'm working with the same data that I had before for the simulation.
>
> **[0:33](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-time-for-customers-to-complete-the-process?u=76281980&t=33)** So I have four stations.
>
> **[0:35](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-time-for-customers-to-complete-the-process?u=76281980&t=35)** Although, in this case, I have turned off the code to allow supervisors to help, but I didn't change the outline just in case I wanted to add it later.
>
> **[0:45](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-time-for-customers-to-complete-the-process?u=76281980&t=45)** On the results worksheet, I have an existing results table and I'll scroll down to the bottom to show you what it looks like when customers do not complete the process.
>
> **[0:58](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-time-for-customers-to-complete-the-process?u=76281980&t=58)** So we have them at their current station of three, or one in this case rather than minus one, indicating that they have not left the system.
>
> **[1:08](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-time-for-customers-to-complete-the-process?u=76281980&t=68)** And also, the left system value is set to zero and that indicates that they haven't left the system so the property value was not updated.
>
> **[1:18](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-time-for-customers-to-complete-the-process?u=76281980&t=78)** So rather than have that happen, in this movie, I will show you how to add code to prevent it and allow them time to run through.
>
> **[1:26](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-time-for-customers-to-complete-the-process?u=76281980&t=86)** So I'll press control home to move up and then I'll select the entire row for customer ID two in my results table.
>
> **[1:36](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-time-for-customers-to-complete-the-process?u=76281980&t=96)** Then shift control down arrow to select down to the bottom of the table.
>
> **[1:42](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-time-for-customers-to-complete-the-process?u=76281980&t=102)** Then right-click at the left edge of one of the rows in the table and then point to delete and click table rows. So there we go.
>
> **[1:51](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-time-for-customers-to-complete-the-process?u=76281980&t=111)** Now, I'll press alt F11 to move to the visual basic editor.
>
> **[1:55](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-time-for-customers-to-complete-the-process?u=76281980&t=115)** And here I have my update on tick code module, subroutine.
>
> **[2:01](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-time-for-customers-to-complete-the-process?u=76281980&t=121)** So as I scroll down, you'll see that there are a couple of new variables that I've created.
>
> **[2:11](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-time-for-customers-to-complete-the-process?u=76281980&t=131)** The first is the maximum time at which a customer can be created.
>
> **[2:16](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-time-for-customers-to-complete-the-process?u=76281980&t=136)** So that is last customer at as a long integer, and that value is 2,880, so that is eight hours, assuming a ten second increment.
>
> **[2:29](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-time-for-customers-to-complete-the-process?u=76281980&t=149)** So six increments per minute and then 360 per hour multiplied by eight.
>
> **[2:36](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-time-for-customers-to-complete-the-process?u=76281980&t=156)** Then when we scroll down, I have changed the value for total ticks from 2,880, which is eight hours to 3,600, and this represents 10 seconds in an eight-hour day plus two hours.
>
> **[2:53](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-time-for-customers-to-complete-the-process?u=76281980&t=173)** So this is 10 hours total, giving our customers plenty of time to finish the process.
>
> **[3:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-time-for-customers-to-complete-the-process?u=76281980&t=180)** And then down below, I added an extra check.
>
> **[3:03](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-time-for-customers-to-complete-the-process?u=76281980&t=183)** So instead of just seeing whether it is time to create a new customer using the create next at variable, I have a second test, asking if we are early enough to create another customer.
>
> **[3:16](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-time-for-customers-to-complete-the-process?u=76281980&t=196)** So less than or equal to 2,880.
>
> **[3:19](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-time-for-customers-to-complete-the-process?u=76281980&t=199)** And then below, if the ticker value is less than or equal to 2,880, then we can calculate the create next value.
>
> **[3:29](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-time-for-customers-to-complete-the-process?u=76281980&t=209)** And I have a second end if to close out that extra bit of logic.
>
> **[3:34](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-time-for-customers-to-complete-the-process?u=76281980&t=214)** So now, I'll press F5 to run.
>
> **[3:36](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-time-for-customers-to-complete-the-process?u=76281980&t=216)** It takes a moment, then alt F11 to move to the results worksheet and I'll scroll down.
>
> **[3:44](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-time-for-customers-to-complete-the-process?u=76281980&t=224)** And hopefully, our last customers will have made it through.
>
> **[3:48](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-time-for-customers-to-complete-the-process?u=76281980&t=228)** And in fact they have.
>
> **[3:49](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-time-for-customers-to-complete-the-process?u=76281980&t=229)** So I have customers that came in as late as tick number 2,854, and the last customer left at 2,908, which is after our original cutoff time of 2,880.
>
> **[4:06](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-time-for-customers-to-complete-the-process?u=76281980&t=246)** So our simulation has allowed customers to enter up until closing time and then tracked how long it took to serve them after that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (2), next (2), business (1), data (1)
> **UI Navigation:** scroll down (4), select the (1), right-click (1)
> **Env Vars:** f11 (2)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)


### 7. Analyzing Simulation Results

[↑ Back to Table of Contents](#table-of-contents)

#### Read the simulation results as written
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/read-the-simulation-results-as-written?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/read-the-simulation-results-as-written?u=76281980&t=0)** - [Instructor] After you run a simulation or a set of simulations, you should take some time to examine your results to gain insights into your system.
>
> **[0:09](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/read-the-simulation-results-as-written?u=76281980&t=9)** The code we've created in this course writes out information about each customer's progress through a series of stations in a process, but we could just as easily have written out information about stations, and the time they spend idle and occupied.
>
> **[0:23](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/read-the-simulation-results-as-written?u=76281980&t=23)** In this movie, I will show you how to gain insights into your operation by looking over simulations results as written.
>
> **[0:30](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/read-the-simulation-results-as-written?u=76281980&t=30)** My sample file is Chapter 0701, and you can find it in the chapter seven folder of the exercise files collection.
>
> **[0:37](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/read-the-simulation-results-as-written?u=76281980&t=37)** I have already run the simulation, so I will change to the results worksheet, and here I have my Excel table.
>
> **[0:45](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/read-the-simulation-results-as-written?u=76281980&t=45)** And what I can do is just scroll through the data, and see if there's anything that catches my attention.
>
> **[0:53](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/read-the-simulation-results-as-written?u=76281980&t=53)** For example, the first thing that I see looking down to the right is that this customer, customer number 16, had an idle time of 36.17%.
>
> **[1:07](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/read-the-simulation-results-as-written?u=76281980&t=67)** However, when I look at the amount of time they spent in the system, I see that it was 47 ticks of the clock.
>
> **[1:15](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/read-the-simulation-results-as-written?u=76281980&t=75)** So that means they were idle 17 of those, so they only spent 30 ticks of the clock being serviced.
>
> **[1:21](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/read-the-simulation-results-as-written?u=76281980&t=81)** And that's not bad.
>
> **[1:23](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/read-the-simulation-results-as-written?u=76281980&t=83)** What it means is that they were done unusually early at at least one of their stations, and that means that they had to wait for the next person to be served.
>
> **[1:32](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/read-the-simulation-results-as-written?u=76281980&t=92)** So that's not so bad.
>
> **[1:33](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/read-the-simulation-results-as-written?u=76281980&t=93)** I'm also very happy to see that most of the idle times are below 10, and in fact, there are quite a few of them that are at zero.
>
> **[1:42](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/read-the-simulation-results-as-written?u=76281980&t=102)** And so if I scroll down, I see a nice long run of zero or very low idle times.
>
> **[1:50](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/read-the-simulation-results-as-written?u=76281980&t=110)** And then as we move down, I see idle times in the 17 to 25%.
>
> **[1:57](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/read-the-simulation-results-as-written?u=76281980&t=117)** And again, that's not particularly concerning, and keep scrolling down.
>
> **[2:03](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/read-the-simulation-results-as-written?u=76281980&t=123)** I see clusters of people who are idle, but again, not bad as a percentage goes, and keeps scrolling down, long runs of zero, another increase, and we get to the bottom where I had a couple of customers who did not quite make it out of the simulation.
>
> **[2:21](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/read-the-simulation-results-as-written?u=76281980&t=141)** So overall, just looking at the data, this seems to be a pretty good run, and if we are able to keep up this level of performance with perhaps a supervisor stepping in here or there, if someone has a very long processing time, then the performance that I see here is very acceptable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (3), data (2), [[Microsoft Excel|Excel]] (1), next (1)
> **CLI Commands:** find (1), make (1)
> **Versions:** 36.17 (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Manually reset the results cells
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/manually-reset-the-results-cells?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/manually-reset-the-results-cells?u=76281980&t=0)** - [Narrator] To be effective, a simulation will use random numbers to generate its results.
>
> **[0:05](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/manually-reset-the-results-cells?u=76281980&t=5)** That means every time you run it, you should get a different output.
>
> **[0:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/manually-reset-the-results-cells?u=76281980&t=10)** In this movie, I will show you how to delete records from a results table so that you can record a new set and perform a new analysis.
>
> **[0:19](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/manually-reset-the-results-cells?u=76281980&t=19)** My sample file is chapter 07_02, and you can find it in the chapter 7 folder of the exercise files collection.
>
> **[0:28](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/manually-reset-the-results-cells?u=76281980&t=28)** I have already run the simulation, so I will go to the results worksheet.
>
> **[0:33](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/manually-reset-the-results-cells?u=76281980&t=33)** And here I have the output from a previous simulation.
>
> **[0:38](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/manually-reset-the-results-cells?u=76281980&t=38)** However, I want to delete what I currently have here, and there are a couple of ways that I could do that.
>
> **[0:44](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/manually-reset-the-results-cells?u=76281980&t=44)** If I were working with regular worksheet rows, in other words, not an Excel table, then I could select the rows in the worksheet that I wanted to delete.
>
> **[0:53](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/manually-reset-the-results-cells?u=76281980&t=53)** And I would do that by moving the mouse pointer over, in this case, row three, and the header at the left side is highlighted in green.
>
> **[1:02](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/manually-reset-the-results-cells?u=76281980&t=62)** I clicked, and that selected the entire row.
>
> **[1:05](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/manually-reset-the-results-cells?u=76281980&t=65)** And then I can scroll down to the last row where I have data written, and that's row 145.
>
> **[1:11](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/manually-reset-the-results-cells?u=76281980&t=71)** Hold down the shift key and select all of the rows.
>
> **[1:16](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/manually-reset-the-results-cells?u=76281980&t=76)** From there, I can right click any of these selected row headers and click delete, and that deletes all of the rows from the worksheet.
>
> **[1:25](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/manually-reset-the-results-cells?u=76281980&t=85)** If I want to only delete rows from an Excel table, then I can do that from within the table itself.
>
> **[1:33](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/manually-reset-the-results-cells?u=76281980&t=93)** So I'll press Ctrl + Z to undo the deletion, and then click inside the Excel table.
>
> **[1:39](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/manually-reset-the-results-cells?u=76281980&t=99)** And you know you're in an Excel table because when you click one of the cells, the table design contextual tab appears on the ribbon.
>
> **[1:47](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/manually-reset-the-results-cells?u=76281980&t=107)** So to select a complete row within an Excel table, you move your mouse pointer over the left edge of the table row.
>
> **[1:56](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/manually-reset-the-results-cells?u=76281980&t=116)** So note I'm not over the row header.
>
> **[2:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/manually-reset-the-results-cells?u=76281980&t=120)** Instead, I am inside of the table.
>
> **[2:03](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/manually-reset-the-results-cells?u=76281980&t=123)** And here I will left click.
>
> **[2:06](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/manually-reset-the-results-cells?u=76281980&t=126)** That selects the entire row, and now I can select all rows down to the end of the table by pressing control + shift + down arrow.
>
> **[2:15](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/manually-reset-the-results-cells?u=76281980&t=135)** Then with the mouse pointer still inside the table and showing as a right pointing black arrow, I'll right click, point to delete, and then click table rows.
>
> **[2:26](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/manually-reset-the-results-cells?u=76281980&t=146)** And that gets rid of all the table rows.
>
> **[2:28](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/manually-reset-the-results-cells?u=76281980&t=148)** And I can rerun the simulation, and the results will appear inside of my table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (5), [[Simulation]] (4), data (1)
> **UI Navigation:** go to (1), select the (1), scroll down (1)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** in other words (1)
> **Speakers:** - [narrator] (1)

#### Summarize results using the Total row
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/summarize-results-using-the-total-row?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/summarize-results-using-the-total-row?u=76281980&t=0)** - [Instructor] Excel tables are useful and versatile tools.
>
> **[0:03](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/summarize-results-using-the-total-row?u=76281980&t=3)** It's a shame that more users aren't aware of them.
>
> **[0:06](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/summarize-results-using-the-total-row?u=76281980&t=6)** One of the elements of Excel tables that I use a lot is the total row.
>
> **[0:11](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/summarize-results-using-the-total-row?u=76281980&t=11)** You can display a total row in your table and use it to summarize values from a column, such as finding the sum of all processing times or the average values in a column.
>
> **[0:21](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/summarize-results-using-the-total-row?u=76281980&t=21)** In this movie, I will show you how to add the total row and change it so it summarizes your table data.
>
> **[0:27](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/summarize-results-using-the-total-row?u=76281980&t=27)** My sample file is chapter 07_03, and you can find it in the chapter seven folder of the exercise files collection.
>
> **[0:35](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/summarize-results-using-the-total-row?u=76281980&t=35)** I've already run the simulation, so I will move to the results worksheet.
>
> **[0:40](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/summarize-results-using-the-total-row?u=76281980&t=40)** And here I have an Excel table that shows my data.
>
> **[0:44](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/summarize-results-using-the-total-row?u=76281980&t=44)** To display the total row at the bottom, I click any cell within the body of the Excel table and then go up to the Table Design, contextual tab on the ribbon, and then in the Table Style options group, check the Total Row box, and that displays the total row.
>
> **[1:04](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/summarize-results-using-the-total-row?u=76281980&t=64)** You can define totals and that can be any calculation for each of the columns.
>
> **[1:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/summarize-results-using-the-total-row?u=76281980&t=70)** By default, Excel creates a calculation for the bottom right.
>
> **[1:16](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/summarize-results-using-the-total-row?u=76281980&t=76)** That is the right most column, 'cause that's typically where data is stored.
>
> **[1:20](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/summarize-results-using-the-total-row?u=76281980&t=80)** And here I have the total of all of the percentages that customers were idle.
>
> **[1:27](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/summarize-results-using-the-total-row?u=76281980&t=87)** In this case, a total, or sum, isn't the best way to summarize this data.
>
> **[1:31](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/summarize-results-using-the-total-row?u=76281980&t=91)** Instead, it would be to find an average.
>
> **[1:33](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/summarize-results-using-the-total-row?u=76281980&t=93)** So I will click the cell, and this is in H143.
>
> **[1:41](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/summarize-results-using-the-total-row?u=76281980&t=101)** Although, you can just go to the cell where you see the calculation.
>
> **[1:44](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/summarize-results-using-the-total-row?u=76281980&t=104)** And after you click that, you see a down arrow to the right.
>
> **[1:48](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/summarize-results-using-the-total-row?u=76281980&t=108)** That's for a list.
>
> **[1:49](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/summarize-results-using-the-total-row?u=76281980&t=109)** So I'll click that, and I can set the calculation to None.
>
> **[1:53](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/summarize-results-using-the-total-row?u=76281980&t=113)** Any of the ones that are listed here, which are the common ones, or if you want to define your own formula, you can do that by selecting Other Functions.
>
> **[2:02](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/summarize-results-using-the-total-row?u=76281980&t=122)** In this case, I'll click Average, and we get an average idle time of 3.54%, which is not that bad.
>
> **[2:09](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/summarize-results-using-the-total-row?u=76281980&t=129)** If you want to find the sum of individual's time in the system, that is for all customers that were part of the simulation, then click to the left for Time in System.
>
> **[2:21](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/summarize-results-using-the-total-row?u=76281980&t=141)** Click its down arrow, and then click Sum.
>
> **[2:25](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/summarize-results-using-the-total-row?u=76281980&t=145)** So they were idle, or rather they were in the system, for a total of 6,655 ticks of the clock.
>
> **[2:33](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/summarize-results-using-the-total-row?u=76281980&t=153)** And if you want to add up all of the idle time, you can also have a sum there.
>
> **[2:39](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/summarize-results-using-the-total-row?u=76281980&t=159)** So I'll click the cell in the total row under Idle Time.
>
> **[2:45](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/summarize-results-using-the-total-row?u=76281980&t=165)** Click this down arrow, click Sum, and we get a total of 243.
>
> **[2:50](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/summarize-results-using-the-total-row?u=76281980&t=170)** Or if you wanted to find the maximum idle time, you could click the same list arrow, click Max, and you see that the maximum idle time within the simulation was 15.
>
> **[3:03](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/summarize-results-using-the-total-row?u=76281980&t=183)** When you're done with the total row, you can clear the Total Row check box and it disappears.
>
> **[3:08](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/summarize-results-using-the-total-row?u=76281980&t=188)** And before you close your workbook, you can check the Total Row box again, and your previous measures come back.
>
> **[3:17](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/summarize-results-using-the-total-row?u=76281980&t=197)** But that only happens if you have not closed the workbook without saving your changes.
>
> **[3:22](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/summarize-results-using-the-total-row?u=76281980&t=202)** So as long as you are still working in your workbook and it hasn't been too long in the past, you can redisplay the total row and see the calculations that you created.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (5), data (4), [[Simulation]] (3)
> **CLI Commands:** find (4)
> **Env Vars:** h143 (1)
> **Versions:** 3.54 (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Sort and filter Excel table values
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/sort-and-filter-excel-table-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/sort-and-filter-excel-table-values?u=76281980&t=0)** - [Instructor] When you send your simulation's output to an Excel table, you gain the ability to analyze your results in many ways.
>
> **[0:07](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/sort-and-filter-excel-table-values?u=76281980&t=7)** Two of the techniques you can use on your data are sorting and filtering.
>
> **[0:12](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/sort-and-filter-excel-table-values?u=76281980&t=12)** Sorting lets you change the order of your data based on the values in one or more columns while filtering lets you concentrate on just the results that matter to you.
>
> **[0:21](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/sort-and-filter-excel-table-values?u=76281980&t=21)** In this movie, I'll show you how to sort and filter using an Excel table's filter errors.
>
> **[0:26](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/sort-and-filter-excel-table-values?u=76281980&t=26)** My sample file is chapter 07_04, and you can find it in the chapter seven folder of the Exercise Files collection.
>
> **[0:34](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/sort-and-filter-excel-table-values?u=76281980&t=34)** I've already run a simulation in this workbook, so I'll switch to the Results worksheet.
>
> **[0:40](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/sort-and-filter-excel-table-values?u=76281980&t=40)** And here I have my table.
>
> **[0:43](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/sort-and-filter-excel-table-values?u=76281980&t=43)** One way to sort this data in an interesting way would be to discover the highest and lowest time in the system.
>
> **[0:51](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/sort-and-filter-excel-table-values?u=76281980&t=51)** So I would sort Time in System here in column G from its largest value to its smallest.
>
> **[0:57](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/sort-and-filter-excel-table-values?u=76281980&t=57)** So I'll click that column's filter arrow, and then at the top I can sort from largest to smallest.
>
> **[1:07](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/sort-and-filter-excel-table-values?u=76281980&t=67)** So I'll click there and I have my values.
>
> **[1:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/sort-and-filter-excel-table-values?u=76281980&t=70)** So it appears that the longest time in the system was 66 and we get below 60 pretty quickly, and then we start to have fairly common values in the mid fifties.
>
> **[1:23](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/sort-and-filter-excel-table-values?u=76281980&t=83)** And then if I scroll down to the bottom, I see that the shortest period that anyone spent in the system was 30 ticks of the clock.
>
> **[1:33](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/sort-and-filter-excel-table-values?u=76281980&t=93)** So they got very lucky on all of their randomly generated processing times, and in fact, they also had no idle time.
>
> **[1:42](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/sort-and-filter-excel-table-values?u=76281980&t=102)** So now I will scroll back up and if I want to focus only on customers that have time in the system of greater than 55, then I can create a filter.
>
> **[1:58](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/sort-and-filter-excel-table-values?u=76281980&t=118)** So I'll go back to the Time of System column's filter arrow, and click that, and then point to number filters, and then I will click greater than, and then in the custom auto filter dialogue box, verify that I have is greater than.
>
> **[2:16](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/sort-and-filter-excel-table-values?u=76281980&t=136)** And in the criteria box next to it, I will type 55.
>
> **[2:21](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/sort-and-filter-excel-table-values?u=76281980&t=141)** So anything 56 or above will be displayed in the filter.
>
> **[2:25](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/sort-and-filter-excel-table-values?u=76281980&t=145)** Now click okay.
>
> **[2:27](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/sort-and-filter-excel-table-values?u=76281980&t=147)** And I have an Excel table that only shows rows for customers with a Time in System of 56 or higher.
>
> **[2:38](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/sort-and-filter-excel-table-values?u=76281980&t=158)** And when I want to get rid of the filter, then I can go back to Time in System and then click clear filter from the field name.
>
> **[2:49](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/sort-and-filter-excel-table-values?u=76281980&t=169)** So the filter has been removed.
>
> **[2:51](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/sort-and-filter-excel-table-values?u=76281980&t=171)** And then if I want to put my data back into the original order, which was by customer ID, then I can go to the customer ID column's filter arrow, and then click sort smallest to largest.
>
> **[3:05](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/sort-and-filter-excel-table-values?u=76281980&t=185)** And my data is back in its original order.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), [[Microsoft Excel|Excel]] (3), [[Simulation]] (2), next (1)
> **UI Navigation:** switch to (1), scroll down (1), go to (1)
> **Cross-References:** go back to (2)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Troubleshoot errors in your code
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=0)** - [Instructor] Creating a simulation can be tricky whether you do it in Excel or in another program or programming language.
>
> **[0:08](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=8)** In this movie, I will describe some of the mistakes that I made while recording this course so you can avoid them in your own work.
>
> **[0:15](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=15)** My sample file is chapter 0705 and you can find it in the chapter seven folder of the exercise files collection.
>
> **[0:23](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=23)** I'm on the sim setup worksheet of the workbook and the first error deals with having a zero inter arrival time for customers.
>
> **[0:34](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=34)** So if you look over on the right, in Poisson data lookup table, you'll see that the first value is zero and it happens with a very low probability.
>
> **[0:45](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=45)** But if it does, then the code that I created will break.
>
> **[0:51](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=51)** So rather than have the lowest possible value be zero, we should make it one.
>
> **[0:57](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=57)** So in cell L2, I'll type a one, then in L3, I'll type two and enter.
>
> **[1:05](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=65)** Then I'll select cells L2 and L3, and I will double click the fill handle at the bottom right corner.
>
> **[1:13](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=73)** And I know my mouse pointers in the right place when it changes to a solid black cross.
>
> **[1:18](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=78)** So I'll double click and I get the numbers one through 54.
>
> **[1:26](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=86)** We have one duplicated for the lookup or return values of 53 and 54.
>
> **[1:32](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=92)** But because the formula that we use looks from the top down, we will never see that second one.
>
> **[1:40](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=100)** So the formula will not generate an error and also it's extremely unlikely to happen because we have all these nines up in front of it.
>
> **[1:48](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=108)** So that is how you can avoid having a zero inter arrival time or two customers arrive at exactly the same time.
>
> **[1:56](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=116)** The other errors or considerations are related to VBA.
>
> **[2:01](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=121)** So I'll press alt F11 to move to the visual basic editor.
>
> **[2:06](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=126)** And I have two code modules in this workbook.
>
> **[2:11](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=131)** One I copied from an earlier workbook so that I didn't have to open two separate files.
>
> **[2:16](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=136)** So you can see that second one in the back.
>
> **[2:18](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=138)** But the first one for update on tick is where I had a problem with a zero or negative time spent at a station.
>
> **[2:28](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=148)** So if I scroll down, you can see where we calculate the amount of time that a customer will spend at a station, and that is here.
>
> **[2:39](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=159)** We generated a random decimal value and then we used that along with the inverse of the normal distribution to calculate how long a customer was going to spend at a station.
>
> **[2:52](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=172)** Because the means are fairly low.
>
> **[2:55](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=175)** I believe the lowest one we had was 10, but with a standard deviation of three, it's not uncommon to get zero or a negative value.
>
> **[3:04](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=184)** And what that means is that a customer would be going backwards in time, which of course is not something our simulation can handle.
>
> **[3:11](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=191)** So below that, I ensured that if there were a negative or zero time spent in a station, then the actual time spent would be one.
>
> **[3:24](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=204)** So the end time would be set to the current value of the ticker plus one.
>
> **[3:30](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=210)** Another obvious thing that I did incorrectly, and I should have known this, is not using option explicit.
>
> **[3:38](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=218)** And that is something that you set above the sub in subroutine.
>
> **[3:44](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=224)** So before you declare the subroutine itself.
>
> **[3:47](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=227)** Option explicit forces you to declare a variable using a dim statement before you can refer to it in your code.
>
> **[3:55](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=235)** So what this takes care of is misspellings.
>
> **[3:58](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=238)** That way you don't have values that are blank or zero divide by zero errors and other things that will absolutely drive you crazy.
>
> **[4:08](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=248)** So always use option explicit and declare your variables before you use them in code that is anything more than a few lines long.
>
> **[4:17](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=257)** The final thing I'll mention, and you probably noticed this from earlier in the course, but I've waited till now to show you how to fix it, is related to random number generation.
>
> **[4:28](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=268)** So I'll go to the debug.print code module, and if you didn't move yours to the front, you can go to window and then click debug print.
>
> **[4:40](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=280)** And this is what happens when you have random numbers, but you don't tell Excel VBA to randomize.
>
> **[4:50](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=290)** So if I drag the debug print code module to the top and press CTRL G to display the immediate window, which I will resize to make a little bit larger and run this code by pressing F5, then I get the station time for station one of 20, then 10, then 16, and if I press F5, I get different values.
>
> **[5:15](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=315)** However, remember 20, 10, and 16.
>
> **[5:19](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=319)** So if I close this workbook by pressing alt F11 and then Ctrl W, and I'm not going to save any of my changes and then reopen it by going to file and then chapter 7-05 and alt F11.
>
> **[5:35](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=335)** So I'm back in my main code module, but notice that the immediate window is still there.
>
> **[5:41](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=341)** I'll go to window and click debug print.
>
> **[5:44](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=344)** So I'm back in the debug.print code module and I'll press F5.
>
> **[5:50](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=350)** Actually, I'll make sure that the insertion point is flashing within my main test subroutine and press F5.
>
> **[5:56](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=356)** Then I get 20, 10, 16, and then there was 16, 8, 19.
>
> **[6:01](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=361)** So I'll press F five and I get 16, 8, 19.
>
> **[6:05](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=365)** So you get exactly the same values.
>
> **[6:08](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=368)** How do you fix that?
>
> **[6:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=370)** Well, you can do that with a single keyword and I will put that right up at the top under sub main test, and that is randomize.
>
> **[6:20](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=380)** If you type in randomize, you will get random numbers.
>
> **[6:23](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=383)** So the insertion point is flashing inside of main tests.
>
> **[6:26](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=386)** I'll press F5 instead of 20, 10, and 16, then F5 again, 15, 10 and 10.
>
> **[6:34](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=394)** So completely different values.
>
> **[6:35](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=395)** One more time. 17, 11, 15, 17, 13, 27.
>
> **[6:40](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=400)** And you can see that the values have been randomized as best a computer can do it.
>
> **[6:45](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=405)** I made a lot more mistakes when I was creating the code that was used in this course, but these are the ones that I think are most likely for you to encounter, and I wanted to bring them up and let you know that it's not just you.
>
> **[6:59](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=419)** Even the person teaching you makes mistakes and has to figure out how to correct them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (2), [[Microsoft Excel|Excel]] (2), [[Programming]] (1), data (1), [[Probability]] (1)
> **Env Vars:** f11 (3), vba (2), ctrl (1)
> **CLI Commands:** make (3), find (1)
> **UI Navigation:** go to (3), scroll down (1)
> **Cross-References:** earlier in (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Further resources
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/further-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/further-resources?u=76281980&t=0)** - [Instructor] Thanks again for your interest in this course.
>
> **[0:03](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/further-resources?u=76281980&t=3)** Before I go, I want to point out some additional resources that you can use to learn more about process modeling and Excel VBA.
>
> **[0:11](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/further-resources?u=76281980&t=11)** There are three books, and the first one is a "Business Process Modeling, Simulation, and Design" a second edition by Laguna and Marklund from CRC Press.
>
> **[0:22](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/further-resources?u=76281980&t=22)** This book is more advanced than the level at which I taught this course, but it gives you great information and tactics and techniques that you can use to simulate and model other processes.
>
> **[0:36](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/further-resources?u=76281980&t=36)** The second is more of a business analysis book, and that is "Matching Supply with Demand" by Cachon and Terwiesch published by McGraw-Hill Irwin.
>
> **[0:45](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/further-resources?u=76281980&t=45)** And this is a business book put together by professors, one of whom was at the Wharton School, at the University of Pennsylvania.
>
> **[0:54](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/further-resources?u=76281980&t=54)** And it's great for business analysis for problems related to what I taught you here.
>
> **[0:59](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/further-resources?u=76281980&t=59)** For more specific Excel VBA training, I highly recommend finding a copy of "Professional Excel Development" 2nd Edition, and this book by Bovey and several other authors published by Addison-Wesley Professional is the go-to reference for professional Excel developers.
>
> **[1:19](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/further-resources?u=76281980&t=79)** It's an older book, but the techniques that are taught are timeless, and even if you buy other books to supplement what you learn there, having a copy of "Professional Excel Development" is a great investment.
>
> **[1:33](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/further-resources?u=76281980&t=93)** Thanks again for your time.
>
> **[1:34](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/further-resources?u=76281980&t=94)** I hope you got a lot out of the course.
>
> **[1:36](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/further-resources?u=76281980&t=96)** I certainly enjoyed creating it for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (5), business (4), [[Simulation]] (1)
> **Env Vars:** vba (2), crc (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Curt Frye]]

## Resources

- Exercise files available

## Skills Covered

- Microsoft Excel
- Data Modeling
- Visual Basic for Applications (VBA)

## Path Context

### In [[Master Advanced Excel Data & Analytics Skills]]
← [[Excel Vba Managing Files And Data]] | **2 of 7** | [[Excel- Working Together with Power Query and Power Pivot]] →

## Appears In

- [[Master Advanced Excel Data & Analytics Skills]]

## Related Courses

_Courses sharing skills:_

- [[Excel- Power Query for Beginners]] — Microsoft Excel
- [[Excel- Filtering Data for Beginners]] — Microsoft Excel
- [[Excel- Tracking Data Easily and Efficiently]] — Microsoft Excel
- [[Excel for Business Analysts]] — Microsoft Excel
- [[Complete Guide to Excel Statistics with Copilot]] — Microsoft Excel

---

[↑ Back to top](#)